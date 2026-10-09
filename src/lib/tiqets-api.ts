import 'server-only';

import {
  BOOKABLE_PRODUCTS,
  TIQETS_PARTNER_ID,
  resolveBookingLink,
} from '@/data/bookings';
import type {
  TiqetsProductImage,
  TiqetsProductSnapshot,
  TiqetsSaleStatus,
  TiqetsSnapshotMap,
} from '@/types/tiqets-live';

const TIQETS_API_BASE_DEFAULT = 'https://api.tiqets.com/v2';

/**
 * Base de la API. Sólo se puede cambiar hacia `localhost`, para probar en
 * local con un servidor simulado el mismo código que corre en producción. Así
 * la clave nunca puede acabar enviada a otro dominio por un error de entorno.
 */
function getApiBase(): string {
  const override = process.env.TIQETS_API_BASE_URL?.trim();
  if (!override) return TIQETS_API_BASE_DEFAULT;
  try {
    const url = new URL(override);
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
      return override.replace(/\/$/, '');
    }
  } catch {
    // URL mal formada: se ignora.
  }
  return TIQETS_API_BASE_DEFAULT;
}

/** Único origen aceptado para las fotos de producto. */
export const TIQETS_IMAGE_HOST = 'aws-tiqets-cdn.imgix.net';
const TIQETS_CACHE_SECONDS = 6 * 60 * 60;
const TIQETS_REQUEST_TIMEOUT_MS = 5_000;

/**
 * Sólo enriquecemos productos que ya forman parte de la selección editorial
 * de `/comprar-entradas` (D-036, ampliado en D-041/D-042). Cada uno trae su
 * precio «Desde», su estado de venta y, si la cuenta lo permite, su foto.
 */
const TIQETS_CURATED_PRODUCTS = [
  { productKey: 'oceanario', productId: '975260' },
  { productKey: 'sintra-palacio-pena', productId: '1120392' },
  { productKey: 'lisboa-card', productId: '974847' },
  { productKey: 'torre-belem', productId: '1012361' },
  { productKey: 'jeronimos', productId: '1012358' },
  { productKey: 'jeronimos-torre-belem', productId: '1013486' },
  { productKey: 'castelo-mouros', productId: '975020' },
  { productKey: 'palacio-nacional-sintra', productId: '975024' },
  { productKey: 'palacio-ajuda', productId: '1020546' },
  { productKey: 'tesouro-real', productId: '1026160' },
  { productKey: 'tranvia-colinas', productId: '974765' },
] as const;

interface TiqetsApiEnvelope {
  product?: unknown;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function getApiToken(): string | null {
  return process.env.TIQETS_API_TOKEN?.trim() || null;
}

function parseSaleStatus(value: unknown): TiqetsSaleStatus {
  if (value === 'available' || value === 'unavailable') return value;
  return 'unknown';
}

function parsePrice(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0
    ? value
    : undefined;
}

function parseCurrency(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const currency = value.trim().toUpperCase();
  return /^[A-Z]{3}$/.test(currency) ? currency : undefined;
}

/**
 * Primera foto válida del producto. Tiqets publica cuatro tamaños cuadrados;
 * se prefiere el grande (1284 px) porque la tarjeta recorta a 16:10 y
 * `next/image` ya genera los tamaños que hacen falta. Cualquier URL que no
 * sea HTTPS de su CDN se descarta.
 */
export function parseProductImage(value: unknown): TiqetsProductImage | undefined {
  if (!Array.isArray(value)) return undefined;

  for (const candidate of value) {
    if (!isRecord(candidate)) continue;
    const raw = [candidate.extra_large, candidate.large, candidate.medium].find(
      (size): size is string => typeof size === 'string' && size.length > 0
    );
    if (!raw) continue;

    try {
      const url = new URL(raw);
      if (url.protocol !== 'https:' || url.hostname !== TIQETS_IMAGE_HOST) continue;
      const alt = typeof candidate.alt_text === 'string' ? candidate.alt_text.trim() : '';
      const creditValue = candidate.credit ?? candidate.credits;
      const credit = typeof creditValue === 'string' ? creditValue.trim() : '';
      return {
        url: url.toString(),
        ...(alt ? { alt } : {}),
        ...(credit ? { credit } : {}),
      };
    } catch {
      continue;
    }
  }
  return undefined;
}

function getCampaign(productKey: string): string | undefined {
  const product = BOOKABLE_PRODUCTS.find((candidate) => candidate.id === productKey);
  if (!product) return undefined;
  return resolveBookingLink(product, 'activities')?.campaign;
}

/**
 * Sólo acepta enlaces HTTPS de Tiqets que conserven nuestra cuenta de partner.
 * La campaña local se añade a la URL devuelta por la API para mantener la
 * medición por ubicación que ya existe en el proyecto.
 */
export function buildSafeTiqetsBookingUrl(
  value: unknown,
  campaign?: string
): string | undefined {
  if (typeof value !== 'string') return undefined;

  try {
    const url = new URL(value);
    const isTiqetsHost = url.hostname === 'tiqets.com' || url.hostname.endsWith('.tiqets.com');

    if (
      url.protocol !== 'https:' ||
      !isTiqetsHost ||
      url.searchParams.get('partner') !== TIQETS_PARTNER_ID
    ) {
      return undefined;
    }

    if (campaign && !url.searchParams.has('tq_campaign')) {
      url.searchParams.set('tq_campaign', campaign);
    }

    return url.toString();
  } catch {
    return undefined;
  }
}

function parseProductSnapshot(
  productKey: string,
  expectedProductId: string,
  payload: TiqetsApiEnvelope
): TiqetsProductSnapshot | null {
  if (!isRecord(payload.product)) return null;

  const productId = String(payload.product.id ?? '');
  if (productId !== expectedProductId) return null;

  const campaign = getCampaign(productKey);

  return {
    productId,
    saleStatus: parseSaleStatus(payload.product.sale_status),
    price: parsePrice(payload.product.price),
    currency: parseCurrency(payload.product.currency),
    smartphoneTicket: payload.product.smartphone_ticket === true,
    instantDelivery: payload.product.instant_ticket_delivery === true,
    bookingUrl: buildSafeTiqetsBookingUrl(payload.product.product_url, campaign),
    image: parseProductImage(payload.product.images),
  };
}

async function fetchProductSnapshot(
  token: string,
  productKey: string,
  productId: string
): Promise<TiqetsProductSnapshot | null> {
  const url = new URL(`${getApiBase()}/products/${productId}`);
  url.searchParams.set('lang', 'es');
  url.searchParams.set('currency', 'EUR');

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      Authorization: `Token ${token}`,
      'User-Agent': 'EstabaEnLisboa/1.0',
    },
    next: {
      revalidate: TIQETS_CACHE_SECONDS,
      tags: [`tiqets-product-${productId}`],
    },
    signal: AbortSignal.timeout(TIQETS_REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Tiqets product ${productId} returned HTTP ${response.status}`);
  }

  const payload = (await response.json()) as TiqetsApiEnvelope;
  return parseProductSnapshot(productKey, productId, payload);
}

/**
 * Obtiene los productos en paralelo. Ante cualquier fallo devuelve lo
 * que sí esté disponible; la UI conserva sus enlaces estáticos como respaldo.
 */
export async function getTiqetsProductSnapshots(): Promise<TiqetsSnapshotMap> {
  const token = getApiToken();
  if (!token) return {};

  const results = await Promise.allSettled(
    TIQETS_CURATED_PRODUCTS.map(({ productKey, productId }) =>
      fetchProductSnapshot(token, productKey, productId)
    )
  );

  return results.reduce<TiqetsSnapshotMap>((snapshots, result, index) => {
    if (result.status === 'fulfilled' && result.value) {
      snapshots[TIQETS_CURATED_PRODUCTS[index].productKey] = result.value;
    }
    return snapshots;
  }, {});
}
