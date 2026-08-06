'use client';

import { buildAffiliateUrl, type AffiliatePlacement } from '@/lib/affiliate';

interface AffiliateLinkProps {
  /**
   * Enlace afiliado tal y como lo entrega el partner, o `null` si todavía
   * no hay ninguno configurado. Con `null` el CTA se renderiza inerte: no
   * enlazamos a la URL pública de GuruWalk porque perdería la atribución.
   */
  href: string | null;
  campaign: string;
  /** Identificador de contenido para `utm_content`. Por defecto, la ubicación. */
  content?: string;
  placement: AffiliatePlacement;
  /** Slug de la ficha de actividad, cuando el clic sale de una. */
  activitySlug?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Envía el evento de clic afiliado a Google Analytics.
 *
 * Se respeta el consentimiento de la misma forma que en `GoogleAnalytics`:
 * sólo se mide con consentimiento analítico explícito. Todo va envuelto en
 * try/catch porque la medición nunca debe impedir que el enlace se abra.
 */
function trackAffiliateClick(params: Record<string, string>) {
  try {
    if (typeof window === 'undefined') return;
    if (window.disableAnalytics === true) return;
    if (typeof window.gtag !== 'function') return;

    const consent = window.localStorage.getItem('cookieConsent');
    const explicit = window.localStorage.getItem('cookieConsentExplicit');
    if (consent !== 'accepted' || explicit !== 'true') return;

    window.gtag('event', 'affiliate_click', params);
  } catch {
    // Medición best-effort: nunca bloquea la navegación.
  }
}

export function AffiliateLink({
  href,
  campaign,
  content,
  placement,
  activitySlug,
  children,
  className = '',
}: AffiliateLinkProps) {
  const utmContent = content ?? placement;

  // Sin enlace afiliado configurado el CTA se muestra, pero desactivado:
  // conserva su etiqueta real para poder revisar el diseño, sin enlazar a
  // ningún sitio que rompa la atribución.
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`cursor-not-allowed opacity-55 ${className}`}
      >
        {children}
        <span className="sr-only"> (reserva no disponible todavía)</span>
      </span>
    );
  }

  const finalUrl = buildAffiliateUrl(href, campaign, utmContent);

  return (
    <a
      href={finalUrl}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={className}
      onClick={() =>
        trackAffiliateClick({
          affiliate_partner: 'guruwalk',
          affiliate_campaign: campaign,
          affiliate_content: utmContent,
          affiliate_placement: placement,
          destination: 'lisboa',
          ...(activitySlug ? { activity_slug: activitySlug } : {}),
          page_path:
            typeof window !== 'undefined' ? window.location.pathname : '',
        })
      }
    >
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  );
}
