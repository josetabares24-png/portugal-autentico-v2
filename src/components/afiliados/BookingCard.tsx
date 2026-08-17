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

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-border-soft/70 bg-white shadow-card transition-all duration-300 hover:border-border-soft hover:shadow-card-hover">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
        {product.badge && (
          <span className="badge-pill absolute left-3 top-3 bg-white/90 text-text-main backdrop-blur-sm">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1.5 font-article text-[11px] font-semibold uppercase tracking-widest text-terracotta">
          {product.kind}
        </p>
        <h3 className="mb-2 font-display text-lg font-semibold not-italic leading-snug text-text-main">
          {product.name}
        </h3>
        <p className="mb-4 font-article text-sm leading-relaxed text-text-secondary">
          {product.blurb}
        </p>

        <a
          href={link.url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="btn-primary mt-auto min-h-12 w-full px-5 py-3 font-article text-sm"
          onClick={() =>
            trackClick({
              affiliate_partner: product.provider,
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
          {product.ctaLabel}
          <span aria-hidden="true">→</span>
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      </div>
    </article>
  );
}
