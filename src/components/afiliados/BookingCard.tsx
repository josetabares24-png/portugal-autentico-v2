'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { trackAffiliateClick } from '@/lib/affiliate-analytics';
import { resolveBookingLink, type BookableProduct, type BookingPlacement } from '@/data/bookings';
import type { TiqetsProductSnapshot } from '@/types/tiqets-live';

/*
 * Tarjeta comercial de Estaba en Lisboa.
 *
 * Por qué existe, en vez de dejar que el widget de GetYourGuide haga de
 * tarjeta: su formato `activities` pinta foto, título, duración y valoración,
 * y ahí se acaba. Ni precio ni botón. Un visitante que quiere reservar se
 * queda sin saber dónde pulsar, y encima el widget mete su propia tipografía
 * y su enlace de «únase a nuestro programa de afiliados» dentro de un iframe
 * que no podemos tocar.
 *
 * Con enlace directo exacto podemos hacerlo mejor: nuestra foto, nuestra
 * tipografía, una frase nuestra y un botón que dice lo que hace. El precio no
 * se copia —cambia por temporada y no tenemos fuente fiable—, así que el CTA
 * lleva a verlo donde es verdad.
 *
 * Los productos SIN enlace directo siguen usando su widget: es su único
 * mecanismo de reserva y no se sustituye por una tarjeta que no llevaría a
 * ninguna parte.
 */

interface BookingCardProps {
  product: BookableProduct;
  placement: BookingPlacement;
  /** Nombre de la página, para poder separar los clics por ubicación. */
  placementLabel: string;
  /** Sólo la primera tarjeta: es la que compite por ser el LCP. */
  priority?: boolean;
  /** Información pública y saneada por el servidor. */
  tiqetsProduct?: TiqetsProductSnapshot;
}

const priceFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function formatPrice(price: number, currency: string): string {
  try {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency,
      minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(price);
  } catch {
    return priceFormatter.format(price);
  }
}

export function BookingCard({
  product,
  placement,
  placementLabel,
  priority = false,
  tiqetsProduct,
}: BookingCardProps) {
  const baseLink = resolveBookingLink(product, placement);
  if (!baseLink) return null;

  const link = tiqetsProduct?.bookingUrl
    ? { ...baseLink, url: tiqetsProduct.bookingUrl }
    : baseLink;
  const isUnavailable = tiqetsProduct?.saleStatus === 'unavailable';
  const livePrice =
    typeof tiqetsProduct?.price === 'number' && tiqetsProduct.currency
      ? formatPrice(tiqetsProduct.price, tiqetsProduct.currency)
      : null;
  const officialPrice = !livePrice ? product.officialPrice : undefined;
  const hasLiveDetails = Boolean(
    tiqetsProduct &&
      (livePrice || tiqetsProduct.smartphoneTicket || tiqetsProduct.saleStatus === 'unavailable')
  );

  const ctaLabel = isUnavailable
    ? 'Consultar otras fechas'
    : product.ctaLabel;

  let linkDomain = '';
  try {
    linkDomain = new URL(link.url).hostname;
  } catch {
    // La navegación sigue funcionando aunque la dimensión no pueda parsearse.
  }

  return (
    <article
      id={product.id}
      className="group flex h-full min-w-0 scroll-mt-24 flex-col overflow-hidden rounded-lg border border-border-soft bg-white shadow-card transition-transform duration-300 motion-safe:hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-background-light">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />

        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-sm bg-white/95 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-[0.11em] text-night shadow-sm">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 font-body text-[10px] font-bold uppercase tracking-[0.16em] text-terracotta">
          {product.kind}
        </p>

        <h3 className="mb-2 font-display text-xl font-semibold not-italic leading-snug text-text-main">
          {product.name}
        </h3>
        <p className="mb-5 font-article text-sm leading-[1.65] text-text-secondary">
          {product.blurb}
        </p>

        <div className="mt-auto">
          {officialPrice ? (
            <div className="mb-3 border-t border-border-soft pt-3 font-body">
              <p className="text-xs text-text-secondary">
                Taquilla oficial{' '}
                <strong className="text-sm font-bold text-night">{officialPrice.amount}</strong>
              </p>
              {officialPrice.note ? (
                <p className="mt-1 text-[11px] leading-snug text-text-secondary">{officialPrice.note}</p>
              ) : null}
            </div>
          ) : null}

          {hasLiveDetails ? (
            <div className="mb-3 flex min-h-10 flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-border-soft pt-3 font-body">
              {livePrice ? (
                <p className="text-xs text-text-secondary">
                  Desde{' '}
                  <strong className="text-sm font-bold text-night">{livePrice}</strong>
                </p>
              ) : (
                <span className="text-xs font-semibold text-night">
                  {isUnavailable ? 'Sin fechas abiertas ahora' : 'Disponible para reservar'}
                </span>
              )}
              {tiqetsProduct?.smartphoneTicket ? (
                <span className="text-[11px] font-semibold text-text-secondary">Entrada móvil</span>
              ) : null}
            </div>
          ) : null}

          <a
            href={link.url}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-terracotta px-4 font-body text-sm font-bold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            onClick={() =>
              trackAffiliateClick({
                affiliate_partner: link.provider,
                affiliate_campaign: link.campaign,
                affiliate_content: product.id,
                affiliate_placement: placementLabel,
                // Qué enlace se usó de verdad: mientras no existan los propios
                // de cada ubicación, esto deja visible que se recurrió a otro.
                affiliate_link_placement: link.usedPlacement,
                destination: 'lisboa',
                link_url: link.url,
                link_domain: linkDomain,
                outbound: 'true',
                page_path: typeof window !== 'undefined' ? window.location.pathname : '',
              })
            }
          >
            {ctaLabel}
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
