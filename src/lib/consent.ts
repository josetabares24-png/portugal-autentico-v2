'use client';

import { useSyncExternalStore } from 'react';

/*
 * Lectura del consentimiento de cookies, en un solo sitio.
 *
 * Antes esta lógica estaba copiada en cada componente que la necesitaba. El
 * problema de tenerla duplicada no es la repetición: es que si una copia se
 * queda atrás, un widget de terceros puede acabar cargándose sin permiso, y
 * eso ya no es un fallo de estilo sino de cumplimiento.
 *
 * El consentimiento vive en `localStorage` y lo escribe `CookieBanner`, que
 * además emite el evento `cookie-consent` al cambiar. Es estado externo a
 * React, así que se lee con `useSyncExternalStore` y no con un efecto: así
 * aceptar surte efecto sin recargar y sin un render intermedio inconsistente.
 */

/** Aceptado Y explícito: dos llaves, porque un valor por defecto no es un sí. */
export function hasCookieConsent(): boolean {
  try {
    return (
      window.localStorage.getItem('cookieConsent') === 'accepted' &&
      window.localStorage.getItem('cookieConsentExplicit') === 'true'
    );
  } catch {
    // `localStorage` puede estar bloqueado. Sin poder leerlo, no hay
    // consentimiento: el silencio nunca cuenta como permiso.
    return false;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener('cookie-consent', onChange);
  return () => window.removeEventListener('cookie-consent', onChange);
}

/*
 * En servidor no hay consentimiento que consultar. Devolver `false` también
 * en la hidratación es lo que garantiza que el HTML del servidor y el primer
 * render del cliente coincidan; lo real llega justo después.
 */
function getServerSnapshot() {
  return false;
}

/** `true` sólo con aceptación explícita. Se re-renderiza al aceptar o revocar. */
export function useCookieConsent(): boolean {
  return useSyncExternalStore(subscribe, hasCookieConsent, getServerSnapshot);
}
