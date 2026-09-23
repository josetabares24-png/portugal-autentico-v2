# Analytics consent gate — 2026-09-23

## Problema detectado

El `src/app/layout.tsx` cargaba `gtag.js` y ejecutaba `gtag('config', ...)` de forma incondicional en cada visita.

Después, `GoogleAnalytics.tsx` intentaba aplicar el estado de consentimiento desde `localStorage`.

Ese orden no respetaba la intención documentada del producto: Analytics debía depender de consentimiento explícito.

## Riesgo

Dos problemas distintos:

1. **Privacidad / cumplimiento:** una visita podía inicializar Google Analytics antes de que el usuario aceptara cookies.
2. **Calidad del dato:** las métricas históricas de sesión/pageview de GA4 que atraviesan este cambio no deben tratarse como perfectamente comparables, porque cambia cuándo puede inicializarse Analytics.

Search Console no depende de este mecanismo y no se ve afectado.

Los eventos de producto enviados a través de `src/lib/analytics.ts` ya exigían consentimiento explícito; esta corrección alinea también la carga base de GA con esa misma regla.

## Cambio

- Google Analytics deja de cargarse desde el root layout.
- Se eliminan los hints de red hacia `googletagmanager.com` antes del consentimiento.
- `GoogleAnalytics.tsx` usa la fuente central de consentimiento `useCookieConsent()`.
- Si no existe aceptación explícita, el componente no renderiza ningún script de Google Analytics.
- Si existe aceptación explícita, inicializa GA4.
- Si el consentimiento se revoca después de haber cargado GA, se actualiza `analytics_storage` a `denied` y `disableAnalytics` bloquea eventos de producto.
- La política pública de cookies se actualiza para describir el comportamiento real.

## Regla de medición

A partir del despliegue de este fix:

- GA4 representa únicamente navegación donde Analytics pudo cargarse tras aceptación explícita.
- No comparar de forma ingenua niveles absolutos de sesiones/pageviews antes y después del corte.
- Para crecimiento orgánico, Search Console sigue siendo el scoreboard principal.
- Para eventos de producto (`select_content`, `affiliate_click`, `sign_up`), mantener la advertencia de que solo observamos usuarios con consentimiento.

## Alcance

No cambia:
- contenido SEO;
- URLs;
- navegación;
- diseño;
- CTAs;
- E-006;
- E-007;
- afiliación.

Es una corrección de infraestructura de privacidad y calidad de medición.
