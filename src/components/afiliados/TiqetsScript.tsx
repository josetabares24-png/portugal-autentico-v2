'use client';

import Script from 'next/script';
import { useCookieConsent } from '@/lib/consent';

/**
 * Carga del script de Tiqets, condicionada al consentimiento.
 *
 * Los widgets de Tiqets no se inicializan sin su loader. Como es un tercero
 * con finalidad comercial y medición de atribución, se trata igual que el
 * resto de scripts sujetos al aviso de cookies.
 */
export default function TiqetsScript() {
  const consent = useCookieConsent();
  if (!consent) return null;

  return (
    <Script
      id="tiqets-widget-loader"
      src="https://widgets.tiqets.com/loader.js"
      strategy="afterInteractive"
    />
  );
}
