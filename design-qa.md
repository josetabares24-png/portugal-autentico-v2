# QA visual de Grok — 2 noviembre 2026

**Alcance:** aceptación visual de la preview local; publicación y validación comercial remota pendientes. [Informe A–K](docs/grok-redesign-audit-2026-11-02.md).

**Fuente visual:** `docs/qa/grok-2026-11-02/referencia-aprobada.jpg`, copia exacta del adjunto de José (1494×1536). Panel Home desktop x18/y18/591×1306; itinerario x627/y18/591×1498; Home móvil x1235/y18/240×1290. El montaje no declara su viewport CSS ni densidad originales: no se presupone escala 1:1.

**Implementación:** `http://localhost:3440/` y `/itinerarios/lisboa-2-dias-completo`, compilación Next de producción. Capturas IAB en anchos CSS 1440/1024/768/390/320, alto solicitado1000; las capturas pueden excluir la barra de scroll (1440→1432, 390→382 píxeles de contenido). Se comprobó `innerWidth` en cada una de las 45 vistas. Las alturas raster del viewport dependen de la superficie de captura; no se afirma una densidad de dispositivo que la herramienta no expone.

**Normalización:** sin cromo del navegador, reducción proporcional de la captura completa a591px para escritorio y240px para móvil, sin estirarla. Bitmaps completos finales: Home1440=1432×3953, itinerario1440=1432×4015, Home390=382×6736. El panel móvil se recorta al mismo tramo inicial del montaje. No se iguala artificialmente la altura de páginas con diferente contenido. Estado: menú cerrado, buscador vacío y cookies rechazadas; estados abiertos capturados aparte.

## Evidencia comparada en una misma imagen

- [Home completa](docs/qa/grok-2026-11-02/compare-home-full-final.jpg), referencia izquierda / implementación derecha.
- [Detalle hero y logo](docs/qa/grok-2026-11-02/compare-home-final.jpg).
- [Itinerario completo](docs/qa/grok-2026-11-02/compare-itinerary-final.jpg).
- [Home móvil](docs/qa/grok-2026-11-02/compare-mobile-final.jpg).
- [45 vistas y mediciones](docs/qa/grok-2026-11-02/responsive-measurements.json), [capturas](docs/qa/grok-2026-11-02/responsive).

Se abrieron los montajes combinados después de capturar y antes de este dictamen. Los detalles de hero/logo y cookies se revisaron ampliados porque el montaje completo no permite juzgar el texto pequeño.

## Historial de hallazgos y correcciones

| Iteración | Hallazgo | Corrección y evidencia posterior |
|---|---|---|
| 1 — bloqueada | P0: la URL concreta de dos días aún servía el recorrido beige, pese a existir componente Grok. | Integración en la página concreta. Antes/después del informe y prueba HTTP de seis enlaces/11 paradas/mapa. |
| 2 — bloqueada | P1: interiores con familia de fallback; P1: siete precargas. | Tokens resueltos dentro de body español y shells separados. Familias computadas en la matriz; tres precargas en HTTP. |
| 3 — bloqueada | P2: hero/logo pequeños, contenido/galería estrechos y texto de relleno antes de la galería. | Header88px, anchura1308px, hero proporcional, H1 con Lisboa en segunda línea de escritorio, galería directamente tras los hechos y filas anchas. Montajes finales de Home/itinerario. |
| 4 — bloqueada | P2: acceso flotante de cookies tapaba texto; texto turquesa insuficiente y galería con nombres accesibles distintos. | Preferencias en el pie, turquesa oscuro y nombre de enlace tomado del contenido visible. Captura cookies320, reapertura real y Lighthouse repetido sin mismatch. |
| 5 — revisión final | No se observan P0/P1/P2 visuales accionables en los estados comparados. | 45 vistas, montajes finales y pruebas de interacciones; adaptaciones y límites abajo. |

## Cinco superficies de fidelidad

- **Tipografía:** Abril Fatface400 para titulares, Heebo para lectura/UI y Caveat moderado. Familias verificadas, sin cursivas accidentales ni falso peso de fuente display. Saltos de línea se adaptan al artículo actual. Inglés conserva su diseño anterior por alcance.
- **Ritmo y layout:** logo sin deformación; hero, buscador, cinco accesos, grilla1+4 y galería3×2 en escritorio. En móvil una columna editorial, accesos2+2+1 y galería2 columnas. Cero overflow en la matriz; el pie contiene navegación/legales reales y ocupa más que la línea del mockup.
- **Color:** tokens contrastables del proyecto Grok real; turquesa oscuro en texto pequeño, amarillo en acciones y tinta en lectura. Overlay sobre fotografía, sin ilustraciones recreadas con CSS.
- **Imágenes:** archivos reales existentes, Torre/claustro de Commons y créditos. Sin estirar, placeholders ni fotografías generadas de lugares. Diez casos editoriales sin foto se muestran con texto. La autenticidad/licencia de todo el archivo histórico no queda certificada por esta inspección.
- **Contenido:** cronología real obliga a ByBoat primero y otras cuatro publicaciones distintas del montaje. Se mantienen rutas y avisos comerciales. Resumen de dos días sin inventar duraciones/precios; recorrido antiguo accesible completo. Esa preservación agrega altura deliberadamente.

## Interacciones y accesibilidad comprobadas

Menú móvil abre/cierra con Escape y devuelve foco. Buscador con ByBoat, «¿tres días?», estado vacío y Escape desde resultado; filtros/página2; galería a Belém con objetivo bajo el header; desplegable11 paradas/mapa; CTA entradas y destinos comerciales conservados; cookies aceptar/rechazar/reabrir/cerrar y persistencia. Consola final sin errores capturados. Lighthouse a11y100 en cinco rutas, incluyendo repetición específica del nombre de galería.

**Límites:** no prueba NVDA exhaustiva, zoom/OS ni INP de campo; tours locales sin credenciales no certifican disponibilidad/reserva. A11y100 no acredita conformidad WCAG integral. READY remoto, precios históricos y revisión humana siguen pendientes en el informe.

**P3/adaptaciones aceptadas para revisión:** foto panorámica del hero de itinerario distinta del montaje, imágenes originales con otro encuadre, variación de envoltura de títulos reales, footer legal más largo y promoción compacta de ruta. No se propone otra dirección estética.

**Checklist:** fuente y capturas abiertas; comparación conjunta completa y enfocada; cinco anchos verificados; correcciones recapturadas; funcionalidad principal probada; límites registrados; mantener preview abierta para José. La aprobación de publicación sigue separada.

final result: passed
