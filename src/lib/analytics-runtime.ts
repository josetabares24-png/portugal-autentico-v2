import { hasCookieConsent } from './consent';

export const GA_MEASUREMENT_ID = 'G-8F54LQ5862';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    disableAnalytics?: boolean;
    'ga-disable-G-8F54LQ5862'?: boolean;
    __lisboaAnalyticsInitialized?: boolean;
  }
}

/** Keep local development and Vercel previews out of the production property. */
export function isProductionAnalyticsHost(hostname: string): boolean {
  return hostname === 'estabaenlisboa.com' || hostname === 'www.estabaenlisboa.com';
}

/** Initialize before loading gtag.js; update both directions without reconfiguring. */
export function syncAnalyticsConsent(hasConsent: boolean): boolean {
  if (typeof window === 'undefined') return false;

  const enabled = hasConsent && hasCookieConsent() &&
    isProductionAnalyticsHost(window.location.hostname);

  window.disableAnalytics = !enabled;
  // Unlike our product-event flag, this also stops Google's automatic events.
  window['ga-disable-G-8F54LQ5862'] = !enabled;

  if (enabled && !window.__lisboaAnalyticsInitialized) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });
    window.__lisboaAnalyticsInitialized = true;
  } else if (typeof window.gtag === 'function') {
    // next/script executes a script ID once. Reacceptance must use update,
    // rather than relying on the initialization script being executed again.
    window.gtag('consent', 'update', {
      analytics_storage: enabled ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }

  return enabled;
}
