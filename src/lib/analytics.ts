'use client';

export type AnalyticsParam = string | number | boolean | null | undefined;

/**
 * Tracking de producto desacoplado de GA4.
 *
 * Hoy el transporte es `gtag`, pero el resto de la aplicación sólo llama a
 * `trackEvent`. Si mañana cambia el proveedor, la instrumentación de los
 * componentes no tiene que reescribirse.
 *
 * Nunca mide sin consentimiento analítico explícito y nunca lanza errores que
 * puedan bloquear una navegación o un formulario.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, AnalyticsParam> = {}
) {
  try {
    if (typeof window === 'undefined') return;
    if (window.disableAnalytics === true) return;
    if (typeof window.gtag !== 'function') return;

    const consent = window.localStorage.getItem('cookieConsent');
    const explicit = window.localStorage.getItem('cookieConsentExplicit');
    if (consent !== 'accepted' || explicit !== 'true') return;

    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([, value]) => value !== undefined && value !== null)
    );

    window.gtag('event', eventName, cleanParams);
  } catch {
    // Analytics es best-effort: la UX nunca depende de que mida.
  }
}
