'use client';

/*
 * Envío de un clic de afiliado a Google Analytics.
 *
 * Es la misma lógica que ya usan `BookingCard` y `BookingCta`, extraída para
 * que el CTA de los itinerarios no la copie por tercera vez. Aquellos dos
 * siguen con su copia: migrarlos toca páginas que en esta fase no se tocan, y
 * no hay prisa porque el comportamiento es idéntico.
 *
 * Dos reglas que no se negocian:
 *
 * 1. Sólo se mide con consentimiento explícito. Analytics es exactamente lo
 *    que el artículo 5.3 de la Directiva ePrivacy no deja hacer antes de un sí.
 * 2. Medir nunca puede impedir que el enlace se abra. Por eso va todo dentro
 *    de un `try` y cualquier fallo se traga en silencio: si Analytics no está,
 *    el visitante igualmente llega al proveedor.
 */
export function trackAffiliateClick(params: Record<string, string>) {
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
