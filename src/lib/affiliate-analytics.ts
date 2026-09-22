'use client';

import { trackEvent } from '@/lib/analytics';

/**
 * Compatibilidad para los componentes de afiliación existentes.
 *
 * El evento sigue llamándose `affiliate_click`, pero la decisión sobre
 * consentimiento y transporte vive ahora en `analytics.ts`.
 */
export function trackAffiliateClick(params: Record<string, string>) {
  trackEvent('affiliate_click', params);
}
