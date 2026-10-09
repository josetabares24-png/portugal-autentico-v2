'use client';

import Script from 'next/script';
import { useCookieConsent } from '@/lib/consent';

/*
 * Script de Stay22 (LinkSwap), en todo el sitio.
 *
 * Qué hace: al cargar la página cambia los enlaces de Booking, Expedia,
 * Hotels.com, Vrbo, Agoda y similares por enlaces de Stay22 con nuestro aid.
 * Los enlaces de alojamiento que ya ponemos a mano (`stay22.com/allez/...`)
 * no lo necesitan: funcionan igual con o sin script.
 *
 * `excludes: ['getyourguide']` es obligatorio. Sin él, el script reescribe
 * TODOS los enlaces de GetYourGuide (los largos con partner_id=J2Z24GU y los
 * cortos gyg.me) a `stay22.com/allez/getyourguide`, y la comisión deja de
 * ir a nuestra cuenta de GetYourGuide. Comprobado en navegador el 9/10/2026,
 * en local y en producción: con la exclusión, 0 enlaces cambiados; sin ella,
 * todos los de GetYourGuide. Tiqets y GuruWalk no los toca en ningún caso.
 * Stay22 recomienda confirmar las exclusiones con su soporte.
 *
 * Consentimiento: guarda identificadores en `localStorage` (`sid22`,
 * `hip22`), así que sigue el mismo criterio que `GetYourGuideScript` y
 * `GoogleAnalytics`: sólo con aceptación explícita.
 *
 * `lazyOnload`: se pide cuando el navegador está libre, después de `load`,
 * para no competir con el contenido principal (LCP).
 */
const STAY22_LMA_ID = '6ac9362e2196fc1262c5c680';

export default function Stay22Script() {
  const granted = useCookieConsent();
  if (!granted) return null;

  return (
    <Script id="stay22-lma" strategy="lazyOnload">
      {`(function (s, t, a, y, twenty, two) {
  s.Stay22 = s.Stay22 || {};
  s.Stay22.params = { lmaID: '${STAY22_LMA_ID}', excludes: ['getyourguide'] };
  twenty = t.createElement(a);
  two = t.getElementsByTagName(a)[0];
  twenty.async = 1;
  twenty.src = y;
  two.parentNode.insertBefore(twenty, two);
})(window, document, 'script', 'https://lma.stay22.com/letmeallez.js');`}
    </Script>
  );
}
