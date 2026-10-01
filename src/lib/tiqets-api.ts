import 'server-only';

import {
  BOOKABLE_PRODUCTS,
  TIQETS_PARTNER_ID,
  resolveBookingLink,
} from '@/data/bookings';
import type {
  TiqetsProductSnapshot,
  TiqetsSaleStatus,
  TiqetsSnapshotMap,
} from '@/types/tiqets-live';

const TIQETS_API_BASE = 'https://api.tiqets.com/v2';
const TIQETS_CACHE_SECONDS = 6 * 60 * 60;
const TIQETS_REQUEST_TIMEOUT_MS = 5_000;

/** Sólo enriquecemos productos que ya forman parte de la selección editorial. */
const TIQETS_CURATED_PRODUCTS = [
  { productKey: 'oceanario', productId: '975260' },
  { productKey: 'sintra-palacio-pena', productId: '1120392' },
  { productKey: 'lisboa-card', productId: '974847' },
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
  };
}

async function fetchProductSnapshot(
  token: string,
  productKey: string,
  productId: string
): Promise<TiqetsProductSnapshot | null> {
  const url = new URL(`${TIQETS_API_BASE}/products/${productId}`);
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
 * Obtiene los tres productos en paralelo. Ante cualquier fallo devuelve lo
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
