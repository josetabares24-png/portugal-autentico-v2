'use client';

import Icon from '@/components/Icon';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { GYG_ACTIVITY_CTA, GYG_ARTICLE_LINKS } from '@/data/getyourguide';

/*
 * Enlace de afiliado de GetYourGuide dentro de una ficha de actividad.
 *
 * No es un widget: es un enlace corriente. Por eso no depende del script de
 * GetYourGuide ni del consentimiento de cookies, y funciona aunque el
 * visitante haya rechazado. La atribución la lleva el propio enlace `gyg.me`,
 * que ya trae dentro la cuenta y la campaña.
 *
 * De ahí que la URL se use tal cual, sin añadirle ni un parámetro: cualquier
 * cosa que le colguemos es un riesgo de romper la atribución a cambio de nada.
 *
 * Reutiliza el mismo marco que el bloque de reserva de GuruWalk que ya vive
 * en esta página, para que las fichas no acaben con dos estilos de tarjeta de
 * reserva distintos según el partner.
 */

/**
 * Manda el clic a Google Analytics, con el mismo criterio de consentimiento
 * que `AffiliateLink`: sólo se mide con aceptación explícita, y todo va
 * envuelto porque medir nunca puede impedir que el enlace se abra.
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

export function GetYourGuideCta({ activitySlug }: { activitySlug: string }) {
  const cta = GYG_ACTIVITY_CTA[activitySlug];
  // Catorce de las veinte fichas no tienen producto equivalente. Ahí no se
  // pinta nada, en vez de enseñar un CTA que lleve a otra cosa.
  if (!cta) return null;

  const link = GYG_ARTICLE_LINKS[cta.link];

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
              affiliate_partner: 'getyourguide',
              affiliate_campaign: link.campaign,
              affiliate_content: `activity-${activitySlug}`,
              affiliate_placement: 'activity-detail',
              destination: 'lisboa',
              activity_slug: activitySlug,
              page_path: typeof window !== 'undefined' ? window.location.pathname : '',
            })
          }
        >
          {cta.label}
          <span aria-hidden="true"> ↗</span>
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>

        {/* Los precios los pone GetYourGuide y cambian por temporada. No se
            copian aquí: una segunda copia se desactualiza sola, que es el
            problema que ya arreglamos en las fichas. */}
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          Precios y horarios actualizados en GetYourGuide. Reservar desde aquí no te
          cuesta más.
        </p>

        <AffiliateDisclosure
          variant="compact"
          className="mt-4 border-t border-border-soft pt-4 text-text-secondary"
        />
      </div>
    </div>
  );
}
