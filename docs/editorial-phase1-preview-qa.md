# Fase 1 — QA HTTP de la Preview

**Resultado:** 1.328 comprobaciones, **cero fallos**, sobre la Preview exacta. No se hizo merge ni despliegue de producción.

| Identidad | Valor |
|---|---|
| Preview | [https://portugal-autentico-v2-pwm59famq-estabaenlisboa.vercel.app](https://portugal-autentico-v2-pwm59famq-estabaenlisboa.vercel.app) |
| Entorno | Vercel Preview |
| Deployment | `dpl_Fswp4Rgmsho56SfoF5HRsbFbwfCq` |
| Commit verificado | `861aa95d415dd8b901b2219e4668e8888bee7a8b` |
| Fin del informe UTC | `2026-10-17T19:11:06.808Z` |
| Hora de Lisboa | **17/10/2026, 20:11:06.808 WEST** |

La URL versionada no contiene el acceso temporal. Los documentos no guardan share URL, tokens, cookies ni código de carga de credenciales. La prueba se hizo con el acceso autorizado; esta URL limpia puede seguir solicitando acceso.

## Resultado y equivalencia con local

| Contrato | Preview | Comparación |
|---|---:|---|
| Sitemap | 98 URLs | Mismo conjunto de páginas indexables que local |
| Páginas inspeccionadas | 106 | Mismas claves de página y de campos |
| Campos por página comparados | 4 | `status`, `canonical`, `robots`, `indexable` idénticos en las 106 |
| Fuentes de redirect | 16 | Mismo contrato autorizado |
| Filas de matriz HTTP | 64 | Base + `/en`, `/ko`, `/es`; todas 301 → 200 y un salto; idénticas a local |
| Destinos internos únicos | 113 | Sin enlaces 3xx/4xx según el checker |
| Fallos | 0 | Ninguna diferencia inesperada frente a local |

El [JSON de Preview](editorial-phase1-preview-qa.json) conserva los 1.328 checks con sus resultados, las 64 filas de redirects y las 106 páginas con canonical, robots HTML, cabecera HTTP y política de indexación. Añade la comparación individual con [el informe local](editorial-phase1-local-qa.json); no es solo un resumen de contadores.

## Por qué hay 1.328 checks frente a 1.426 locales

**La diferencia es exactamente 98 comprobaciones de cabecera HTTP de indexabilidad.** En hosts `*.vercel.app` el checker omite esa aserción, porque Vercel puede añadir noindex a la respuesta independientemente de la metadata de la aplicación.

Se mantienen las **98 comprobaciones estrictas de indexabilidad del HTML** y las verificaciones HTML de las ocho páginas noindex/follow, incluido googlebot. La ejecución local conserva y pasa las 98 aserciones de cabecera que se omiten en Preview. No se relajaron canonical, H1, metadata, schema, enlaces ni matriz de redirects.

En 102 páginas, `X-Robots-Tag` pasa de vacío localmente a `noindex` en Preview. Otras 4 respuestas de itinerarios conservan `index, follow` de la aplicación. No se afirma que todas las respuestas Preview lleven la misma cabecera. Las diferencias detalladas están en `localComparison` del JSON.

## Sitemap y XML

La prueba separada de sitemap pasó **64/64**. El XML de Preview se validó también con **.NET System.Xml**, con **98 URLs**. Al preparar esta evidencia se volvió a leer el archivo guardado con Python ElementTree: XML válido, 98 URLs únicas y paths idénticos a las 98 páginas indexables del informe. Esta lectura no hizo peticiones de red.

El smoke HTTP comprueba envoltura/contenido del XML; no se presenta esa regex como un parser XML completo. Las validaciones XML anteriores son adicionales a las 1.328 aserciones del reporte.

## Límites y gate

Esta prueba acredita el contrato HTTP y las instrucciones HTML del candidato; no demuestra indexación de Google, mejora de CTR ni crecimiento orgánico. No aporta Lighthouse, revisión responsive o screenshots. La producción conserva su estado anterior.

**STOP + REVIEW de Fase 1.** El acceso temporal autorizado permite revisar la Preview; no autoriza Fase 2, merge ni producción. La autenticación de Clerk no se modificó. Los WAIT, noindex y contenidos protegidos siguen bajo el contrato documentado.
