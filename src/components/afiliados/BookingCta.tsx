'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';
import {
  ACTIVITY_HUB_ANCHOR,
  findProductByActivitySlug,
  resolveBookingLink,
  type BookingPlacement,
} from '@/data/bookings';

/*
 * Botón de conversión directa dentro de una ficha de actividad.
 *
 * No es un widget: es un enlace. Por eso no depende del script del proveedor
 * ni del consentimiento de cookies, y funciona también con quien rechaza. La
 * atribución la lleva la propia URL corta, que ya trae dentro la cuenta y la
 * campaña, así que se usa tal cual sin añadirle ni un parámetro.
 *
 * Reutiliza el marco del bloque de reserva de GuruWalk que ya vivía en esta
 * página, para que las fichas no acaben con un estilo de tarjeta distinto por
 * cada partner. La divulgación de afiliados no va aquí: la ficha ya la lleva
 * una sola vez más abajo, y repetirla bajo cada botón sería ruido.
 */

/**
 * Manda el clic a Google Analytics con el mismo criterio de consentimiento
 * que `AffiliateLink`: sólo con aceptación explícita, y todo envuelto porque
 * medir nunca puede impedir que el enlace se abra.
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
    // Medición best-effort.
  }
}

interface BookingCtaProps {
  /** Ficha desde la que se pulsa. Decide qué producto se ofrece, si hay alguno. */
  activitySlug: string;
  /** Ubicación, para elegir el enlace y medirla por separado. */
  placement?: BookingPlacement;
}

export function BookingCta({ activitySlug, placement = 'activities' }: BookingCtaProps) {
  const product = findProductByActivitySlug(activitySlug);
  const link = product ? resolveBookingLink(product, placement) : null;

  /*
   * Sin producto exacto, o con producto pero todavía sin enlace directo
   * propio. Nunca se recurre al enlace de otro producto parecido: si la
   * ficha tiene una sección del hub asignada, se ofrece esa; si no, no se
   * pinta nada. Una ficha sin botón es mejor que un botón que vende otra
   * cosa.
   */
  if (!product || !link) {
    const fallback = ACTIVITY_HUB_ANCHOR[activitySlug];
    if (!fallback) return null;

    return (
      <div className="mb-10 overflow-hidden rounded-xl border border-border-soft/70 bg-white shadow-card">
        <span aria-hidden="true" className="block h-1 w-full bg-gradient-to-r from-terracotta to-gold" />
        <div className="p-5 md:p-6">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-text-secondary">
            <Icon name="confirmation_number" size={15} className="flex-shrink-0 text-gold" />
            Precio y disponibilidad
          </p>
          <Link
            href={`/comprar-entradas#${fallback.anchor}`}
            className="btn-outline w-full px-7 py-3.5 text-base sm:w-auto"
          >
            {fallback.label}
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            Si prefieres subir por tu cuenta, las entradas de Pena y Regaleira se compran
            por separado en la web de cada monumento.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-10 overflow-hidden rounded-xl border border-border-soft/70 bg-white shadow-card">
      <span aria-hidden="true" className="block h-1 w-full bg-gradient-to-r from-terracotta to-gold" />

      <div className="p-5 md:p-6">
        <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-text-secondary">
          <Icon name="confirmation_number" size={15} className="flex-shrink-0 text-gold" />
          Precio y disponibilidad
        </p>

        <a
          href={link.url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="btn-primary w-full px-7 py-3.5 text-base sm:w-auto"
          onClick={() =>
            trackClick({
              affiliate_partner: product.provider,
              affiliate_campaign: link.campaign,
              affiliate_content: `activity-${activitySlug}`,
              // La ubicación real desde la que se pulsó, no la del enlace: si
              // todavía se está usando el de artículo por no haber uno propio,
              // esto lo deja visible en la medición.
              affiliate_placement: placement,
              affiliate_link_placement: link.usedPlacement,
              destination: 'lisboa',
              activity_slug: activitySlug,
              page_path: typeof window !== 'undefined' ? window.location.pathname : '',
            })
          }
        >
          {product.ctaLabel}
          <span aria-hidden="true"> ↗</span>
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>

        {/* Precios y horarios no se copian: los pone el proveedor y cambian
            por temporada. Una segunda copia se desactualiza sola. */}
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          Precios y horarios actualizados en la web del proveedor. Reservar desde aquí no
          te cuesta más.{' '}
          <Link href="/comprar-entradas" className="text-terracotta underline underline-offset-2 hover:no-underline">
            Ver todas las entradas y experiencias
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
