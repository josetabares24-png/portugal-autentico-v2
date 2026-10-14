'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { useCookieConsent } from '@/lib/consent';
import { GA_MEASUREMENT_ID, syncAnalyticsConsent } from '@/lib/analytics-runtime';

export default function GoogleAnalytics() {
  const hasConsent = useCookieConsent();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(syncAnalyticsConsent(hasConsent));
  }, [hasConsent]);

  // Privacy baseline: do not even request gtag.js before explicit consent.
  // This keeps the implementation aligned with the public cookie policy and
  // makes "accepted" the only state in which GA can initialize.
  // Initialization and the production-host check complete before the loader
  // can render. Rejection removes it immediately, before the next effect.
  if (!hasConsent || !enabled) return null;

  return (
    <Script
      id="google-analytics-loader"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
  );
}
