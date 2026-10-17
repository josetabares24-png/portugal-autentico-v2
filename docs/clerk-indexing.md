# Indexación del host de Clerk

**Verificado:** 17 de octubre de 2026, durante la auditoría de Fase 0. **Host:** `clerk.estabaenlisboa.com`. No se modificaron DNS, autenticación, endpoints ni configuración de Clerk.

## Hechos comprobados

| Comprobación pública, sin sesión | Resultado |
|---|---|
| CNAME de `clerk.estabaenlisboa.com` | `frontend-api.clerk.services` |
| `https://clerk.estabaenlisboa.com/` | HTTP 200, JSON, `X-Robots-Tag: noindex, nofollow` |
| `https://clerk.estabaenlisboa.com/.well-known/jwks.json` | HTTP 200, JSON, `X-Robots-Tag: noindex, nofollow` |
| `https://clerk.estabaenlisboa.com/robots.txt` | HTTP 404 |

La cabecera de las respuestas de Clerk ya indica que no deben indexarse. El 404 de `robots.txt` no elimina esa directiva HTTP. El archivo robots del dominio principal no controla un subdominio servido por Clerk; añadir una cabecera al proyecto Next.js tampoco cambia esas respuestas.

La inspección histórica de Search Console del 8/10 mostraba el host como indexado sin contenido, con primera detección el 3/3/2026. No se volvió a inspeccionar el índice de Google en Fase 0. La comprobación HTTP del 17/10 **no demuestra que Google ya haya retirado la URL ni desde qué fecha Clerk emite noindex**.

Baseline y límites: [auditoría editorial, apartado de Clerk](editorial-rebuild-audit.md) y [memoria de Fase 0](../brain/seo/EDITORIAL-REBUILD-PHASE-0-2026-10-17.md).

## Decisión y comprobación siguiente

Mantener el CNAME, los certificados, las claves y los endpoints actuales. No crear un proxy Frontend API por SEO ni bloquear el host antes de que Google lea noindex. La aplicación pública y el acceso al panel siguen separados.

En una comprobación posterior, sin seguimiento automático programado:

1. Repetir GET de la raíz y del endpoint público JWKS; registrar estado, tipo de respuesta y `X-Robots-Tag`, sin copiar el cuerpo de claves al informe.
2. Inspeccionar la URL histórica en Search Console y registrar estado y último rastreo. No confundir esos datos del índice con una prueba en vivo.
3. Si continúa indexada y el rastreo precede al 17/10, registrar el desfase. No afirmar que la cabecera existía en el rastreo anterior ni bloquearlo en robots.
4. Si un rastreo posterior sigue reflejando un problema, confirmar en Clerk **Domains → Frontend API** que el host corresponde a la instancia y consultar a soporte con las cabeceras observadas. No inventar un ajuste SEO ni un valor DNS.
5. Un cambio de proxy o autenticación queda fuera de esta migración. Requiere una intervención separada y QA de login, sesión y logout antes de publicarse.

Referencias: [despliegue de producción de Clerk](https://clerk.com/docs/guides/development/deployment/production), [proxy Frontend API](https://clerk.com/docs/guides/dashboard/dns-domains/proxy-fapi) y [noindex de Google](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
