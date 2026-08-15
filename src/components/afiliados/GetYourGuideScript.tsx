'use client';

import { useSyncExternalStore } from 'react';
import Script from 'next/script';

/*
 * Carga del script de GetYourGuide, condicionada al consentimiento.
 *
 * Ese script hace dos cosas a la vez: mide como partner y convierte los
 * `[data-gyg-widget]` del DOM en iframes. Medir es exactamente lo que el
 * artículo 5.3 de la Directiva ePrivacy no permite hacer antes de que el
 * visitante diga que sí, así que no puede cargarse de entrada.
 *
 * Sigue el mismo criterio que `GoogleAnalytics`: sólo con `cookieConsent`
 * aceptado y explícito, y atento al evento `cookie-consent` que emite
 * `CookieBanner`, para que aceptar surta efecto sin recargar.
 *
 * La consecuencia es de negocio, no técnica: quien rechaza cookies no ve los
 * widgets, y de ese visitante no sale comisión.
 */

/** El consentimiento es estado externo a React: vive en `localStorage`. */
function subscribe(onChange: () => void) {
  window.addEventListener('cookie-consent', onChange);
  return () => window.removeEventListener('cookie-consent', onChange);
}

function getSnapshot() {
  try {
    return (
      window.localStorage.getItem('cookieConsent') === 'accepted' &&
      window.localStorage.getItem('cookieConsentExplicit') === 'true'
    );
  } catch {
    // `localStorage` puede estar bloqueado. Sin poder leer el
    // consentimiento, se asume que no lo hay.
    return false;
  }
}

/*
 * En servidor no hay consentimiento que consultar. Devolver `false` también
 * en la hidratación es lo que garantiza que el HTML del servidor y el primer
 * render del cliente coincidan.
 */
function getServerSnapshot() {
  return false;
}

export default function GetYourGuideScript() {
  const granted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Al revocar no se descarga nada: un script ya ejecutado no se puede
  // retirar de la página. Lo que corresponde es no volver a cargarlo, y de
  // eso se encarga la propia lectura del consentimiento.
  if (!granted) return null;

  return (
    <Script
      id="getyourguide-analytics"
      src="https://widget.getyourguide.com/dist/pa.umd.production.min.js"
      strategy="afterInteractive"
      data-gyg-partner-id="J2Z24GU"
      async
    />
  );
}
