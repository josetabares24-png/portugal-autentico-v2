# GA4: producción y cambios de consentimiento — 2026-10-14

## Diagnóstico / evidencia

HECHO: Windsor.ai devuelve datos para GA4 `520462797` (`www.estabaenlisboa.com`). La segunda propiedad `547224276` no devolvió filas en la consulta equivalente; no se infiere que esté mal configurada.

Baseline de dos periodos de 28 días con cobertura completa de Search Console:

| Métrica | 17/08–13/09/2026 | 14/09–11/10/2026 |
|---|---:|---:|
| Clics de Google, propiedad de dominio | 52 | 109 |
| Impresiones de Google | 6.967 | 8.542 |
| CTR (clics / impresiones) | 0,75 % | 1,28 % |
| Posición media ponderada por impresiones | 12,59 | 9,84 |
| GA4: sesiones `google / organic`, dominio público | 75 | 45 |
| GA4: sesiones en `estabaenlisboa.com`, todas las fuentes | 239 | 130 |
| GA4: sesiones en localhost | 6 | 20 |
| GA4: sesiones en hostnames de despliegues Vercel | 60 | 35 |

Las sesiones recientes de prueba son 55 de 185 (29,7 %). Las dimensiones de hostname/fuente/fecha se reconciliaron con los totales devueltos. Los clics de Search Console y las sesiones de GA4 tienen definiciones y zonas horarias distintas; no se interpreta su cociente como porcentaje exacto de visitantes medidos.

HECHO: el código público inspeccionado carga `G-8F54LQ5862` solo después de aceptación explícita. La memoria registra la frontera de recogida en **23/09/2026, 15:26 Europe/Lisbon**, commit `4cff855d6fb35130d73dcf1b9ddce41ab94d12d5`. Comparar niveles de GA4 a través de esa frontera exige cautela. Search Console no depende de esa etiqueta.

HECHO: la versión anterior enviaba `consent update denied` al revocar, pero no `update granted` al volver a aceptar. El script de inicialización de Next no vuelve a ejecutarse para el mismo ID. El flag propio `disableAnalytics` no es el mecanismo de exclusión de eventos automáticos de Google.

HIPÓTESIS: el cambio de recogida contribuye a la divergencia que se amplía desde finales de septiembre. No se atribuye toda la diferencia a cookies ni se afirma una caída SEO a partir de GA4.

## Oportunidad / propuesta / razón

DECISIÓN: mantener D-024 (aceptación explícita), limitar GA4 a `estabaenlisboa.com` y `www.estabaenlisboa.com`, bloquear carga y eventos en localhost/previews, y sincronizar rechazo/reaceptación con el flag oficial `ga-disable-G-8F54LQ5862` y `consent update`. La cola se prepara antes de cargar gtag.js y se configura una sola vez por documento; reaceptar no duplica la configuración ni su pageview inicial.

Se mantienen el ID de medición y la aceptación explícita. No se borra historia ni se activan filtros destructivos de GA4. La correspondencia administrativa entre el measurement ID y la propiedad todavía requiere confirmación en GA4 Admin; hostname/stream de las consultas son evidencia de actividad, no sustituyen esa comprobación.

## Impacto esperado / esfuerzo / riesgo

Calidad de medición: cero sesiones nuevas de prueba enviadas por esta integración; medir correctamente a quien vuelva a aceptar. Puede bajar el total de GA4 al retirar pruebas, sin pérdida equivalente de visitas de la web pública. Esfuerzo bajo; cambios limitados al transporte de analítica y su comprobación. Publicación todavía pendiente al preparar esta nota.

## Prueba / siguiente acción

Regresión de hostnames permitidos, aceptación explícita, almacenamiento bloqueado, SSR, aceptar → rechazar → aceptar, configuración única y bloqueo de eventos. Ejecutar `npm run typecheck`, `npm run test:analytics` y `npm run smoke:sitemap` antes de merge.

Validación local completada: TypeScript sin errores; seis regresiones de analítica pasan; lint de los tres módulos sin errores; build de producción completado; smoke de sitemap **52/52 comprobaciones** y **110 URLs** públicas correctas. Esto valida la corrección local, no certifica publicación ni procesamiento posterior de GA4.

Después del despliegue confirmado, anotar fecha/SHA y evaluar 7–14 días sin comparar ingenuamente el total con la baseline contaminada. Verificar en GA4 la ausencia de hostnames de prueba posteriores a esa fecha y conservar Search Console como scoreboard de crecimiento. Esto no crea un seguimiento automático.

## Publicación confirmada — 14/10/2026

José autorizó expresamente el PR #109 y el head `b9eebf7f2e876c40e9b755bf144e80e02afca2b1`. El watcher confirmó MERGED para ese head; merge `50be9c2cd696753a20b784410018e7f86097b713`. El despliegue de producción `dpl_CjX1k6174H5AE1NedGKqXU4XwYwV` está READY y el dominio verificado pertenece al proyecto `portugal-autentico-v2`. El JavaScript obtenido desde `https://estabaenlisboa.com` contiene la restricción de hostnames, el flag oficial de exclusión y la actualización de consentimiento en ambos sentidos. Esto confirma la publicación; no certifica aún los datos procesados de los próximos días ni la correspondencia administrativa del measurement ID.

Referencias: [[ANALYTICS-CONSENT-GATE-2026-09-23]], [[../02-METRICS]], [Google: privacidad de etiquetas](https://developers.google.com/tag-platform/security/guides/privacy), [Google: cambios de consentimiento](https://developers.google.com/tag-platform/security/guides/consent).
