# Search Console — verificación del 8 de octubre de 2026, tarde

**Consulta:** 20:34 de Lisboa / 19:34 UTC. **Propiedad:** `sc-domain:estabaenlisboa.com`. **Tipo:** Web. Se compararon `include_fresh_data: false` y `true` como booleanos; usar la cadena "false" activa datos frescos y no es válido para aislar los cerrados.

## Hechos

- Último día cerrado devuelto: **5 de octubre**.
- 29/09–05/10: **2.547 impresiones, 34 clics**.
- 22/09–28/09: **2.031 impresiones, 23 clics**.
- Cambio entre semanas cerradas: **+25,4 % de impresiones y +47,8 % de clics**.
- 6/10 provisional: **356 impresiones y 7 clics**, frente a 330/7 en la consulta de la mañana.
- 7/10 provisional: **27 impresiones y 1 clic**, frente a 4/1 en la consulta de la mañana.
- 6–7/10 no se devuelven con datos frescos desactivados. 8/10 no devuelve fila y no se interpreta como cero.

| Fecha | Impresiones | Clics | Estado en esta consulta |
|---|---:|---:|---|
| 2026-09-22 | 216 | 3 | Cerrado |
| 2026-09-23 | 292 | 3 | Cerrado |
| 2026-09-24 | 309 | 2 | Cerrado |
| 2026-09-25 | 286 | 2 | Cerrado |
| 2026-09-26 | 342 | 6 | Cerrado |
| 2026-09-27 | 325 | 3 | Cerrado |
| 2026-09-28 | 261 | 4 | Cerrado |
| 2026-09-29 | 340 | 8 | Cerrado |
| 2026-09-30 | 306 | 4 | Cerrado |
| 2026-10-01 | 261 | 5 | Cerrado |
| 2026-10-02 | 370 | 5 | Cerrado |
| 2026-10-03 | 437 | 3 | Cerrado |
| 2026-10-04 | 498 | 5 | Cerrado |
| 2026-10-05 | 335 | 4 | Cerrado |
| 2026-10-06 | 356 | 7 | Provisional |
| 2026-10-07 | 27 | 1 | Provisional |

## Producción y cronología

La Home de PR #101 se publicó el **8/10 a las 13:59 de Lisboa**, merge `8fc9a25`. La anomalía del 7/10 precede a este despliegue; no atribuirla al cambio de fotografías.

El alias público ahora sirve un descendiente, `7648cc89`, READY/production. La comparación contra `8fc9a25` solo cambia `brain/tutabares/03_SERIE_HISTORIA_ANIMADA.md`; el código de la web es el mismo.

Lectura HTTP de producción a las 20:39 de Lisboa: Home, robots, sitemap y el artículo de movilidad responden **200**. Home y movilidad permiten `index, follow`, tienen un H1 y canonical correctos; sin cabecera X-Robots-Tag de bloqueo. Robots permite / y solo bloquea /api/ y /preview/. Sitemap conserva **100 URLs**. Esto acredita accesibilidad e instrucciones de indexación; no confirma la cobertura actual del índice de Google ni las acciones manuales.

GA4 no se usa como prueba de ausencia de tráfico: la propiedad 547224276 no devolvió filas; 520462797 sí, pero la medición depende de consentimiento y no equivale a impresiones o clics de Search Console.

## Hipótesis y decisión

La explicación principal por ahora es **información incompleta/en procesamiento**, apoyada por el aumento de los registros recientes y su exclusión en la consulta cerrada. No hay confirmación de un bug de Google ni evidencia suficiente para atribuir una penalización. La semana cerrada crece.

No revertir fotografías ni cambiar títulos, URLs o indexación como reacción al único punto provisional. Cuando el 7/10 aparezca cerrado, comparar por página/consulta y revisar cobertura/acciones manuales si la pérdida persiste. Esta es una condición para la siguiente comprobación, no un seguimiento automático programado.

Google confirma que la vista de 24 horas incluye datos preliminares que pueden cambiar: [documentación oficial](https://support.google.com/webmasters/answer/7576553?hl=es).
