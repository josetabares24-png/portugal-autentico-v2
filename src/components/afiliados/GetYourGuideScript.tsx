'use client';

import Script from 'next/script';
import { useCookieConsent } from '@/lib/consent';

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

/*
 * La lectura del consentimiento vive en `@/lib/consent`, compartida con los
 * widgets del catálogo. Es la misma que había aquí, movida: tener dos copias
 * de «¿tenemos permiso?» es la forma de que un día una se quede atrás y algo
 * de terceros cargue sin él.
 *
 * Lo que no cambia es lo de siempre: una sola carga del script, y sólo con
 * aceptación explícita.
 */
export default function GetYourGuideScript() {
  const granted = useCookieConsent();

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
