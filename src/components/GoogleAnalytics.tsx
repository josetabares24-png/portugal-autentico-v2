'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { useCookieConsent } from '@/lib/consent';

const GA_MEASUREMENT_ID = 'G-8F54LQ5862';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    disableAnalytics?: boolean;
  }
}

export default function GoogleAnalytics() {
  const hasConsent = useCookieConsent();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.disableAnalytics = !hasConsent;

    // If Analytics was previously loaded and the user later revokes consent,
    // stop subsequent storage/tracking immediately. Product events are also
    // independently gated in src/lib/analytics.ts.
    if (!hasConsent && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  }, [hasConsent]);

  // Privacy baseline: do not even request gtag.js before explicit consent.
  // This keeps the implementation aligned with the public cookie policy and
  // makes "accepted" the only state in which GA can initialize.
  if (!hasConsent) return null;

  return (
    <>
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          window.disableAnalytics = false;
          window.gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          window.gtag('js', new Date());
          window.gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
      <Script
        id="google-analytics-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
