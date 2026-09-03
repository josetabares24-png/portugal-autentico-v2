'use client';

import Image from 'next/image';
import { resolveBookingLink, type BookableProduct, type BookingPlacement } from '@/data/bookings';

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

function trackClick(params: Record<string, string>) {
  try {
    if (typeof window === 'undefined') return;
    if (window.disableAnalytics === true) return;
    if (typeof window.gtag !== 'function') return;

    const consent = window.localStorage.getItem('cookieConsent');
    const explicit = window.localStorage.getItem('cookieConsentExplicit');
    if (consent !== 'accepted' || explicit !== 'true') return;

    window.gtag('event', 'affiliate_click', params);
  } catch {
    // Medición best-effort: nunca impide que el enlace se abra.
  }
}

interface BookingCardProps {
  product: BookableProduct;
  placement: BookingPlacement;
  /** Nombre de la página, para poder separar los clics por ubicación. */
  placementLabel: string;
  /** Sólo la primera tarjeta: es la que compite por ser el LCP. */
  priority?: boolean;
}

export function BookingCard({ product, placement, placementLabel, priority = false }: BookingCardProps) {
  const link = resolveBookingLink(product, placement);
  if (!link) return null;

  const ctaLabel = placementLabel.startsWith('comprar-entradas')
    ? 'Ver disponibilidad'
    : product.ctaLabel;

  return (
    <article className="group flex h-full min-w-0 flex-col border-t border-border-soft bg-white/25 px-1 pt-3 transition-colors hover:bg-white/45">
      <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-md bg-white/60">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-terracotta">
            {product.kind}
          </p>
          {product.badge && (
            <>
              <span aria-hidden="true" className="h-px w-4 bg-border-soft" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
                {product.badge}
              </span>
            </>
          )}
        </div>

        <h3 className="mb-2 font-display text-lg font-semibold not-italic leading-snug text-text-main">
          {product.name}
        </h3>
        <p className="mb-5 font-article text-sm leading-relaxed text-text-secondary">
          {product.blurb}
        </p>

        <a
          href={link.url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="text-cta mt-auto self-start"
          onClick={() =>
            trackClick({
              affiliate_partner: link.provider,
              affiliate_campaign: link.campaign,
              affiliate_content: product.id,
              affiliate_placement: placementLabel,
              // Qué enlace se usó de verdad: mientras no existan los propios
              // de cada ubicación, esto deja visible que se recurrió a otro.
              affiliate_link_placement: link.usedPlacement,
              destination: 'lisboa',
              page_path: typeof window !== 'undefined' ? window.location.pathname : '',
            })
          }
        >
          {ctaLabel}
          <span aria-hidden="true">→</span>
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      </div>
    </article>
  );
}
