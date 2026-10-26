# QA de entradas inglesas — 26/10/2026

Aplicación `f6db655b656c371c3a1966aacba8a6f067d334d4`, PR118 borrador. Preview Next.js READY: https://portugal-autentico-v2-odr51y8n4-estabaenlisboa.vercel.app. El enlace temporal de acceso se entrega fuera de Git. La protección de Preview se conserva.

Historia comprobada: Home inglesa → guía de Pena → elección de visita y condiciones → CTA con destino/producto/atribución existente. No se pulsa el enlace afiliado ni se completa una compra; no se afirma haber probado un checkout o una comisión.

| Control | Resultado |
|---|---|
| Build local / Preview final | 142rutas locales / Vercel READY con SHA exacto |
| TypeScript / lint | Sin errores; warning previo analyticsParams en ItineraryContextualCta |
| GitHub CI de aplicación | Seis checks correctos |
| Inglés remoto | 224/224, seisURLs |
| Preservación española remota | 1659/1659,72superficies del main integrado |
| Migración remota | 1414/1414,106URLs sitemap,114páginas,16redirects |
| Migración local | 1520/1520; incluye106checks de indexabilidad que no corresponden a Preview |
| Contrato de fuente | 34/34 |
| Reservas offline | 2/2 |
| Responsive | 30/30: seisURLs por320/390/412/768/1440px reales |

- [Matriz](preview-matrix.json): dimensiones reales, scrollWidth, H1, idioma, índice y estado de imágenes cargadas.
- [Interacciones](ticket-interactions.json): misma hash vuelve a96px, Escape/cierre/foco, cuatro fuentes, un CTA de48px, producto y campaña. No se ejecuta un evento afiliado de QA.
- [Integridad de fuentes](source-integrity.json) y [decisiones de merge](merge-decisions.json). Los34checks comparan con670e9f3; los cambios posteriores de anclas no alteran los datos o enlaces comparados.
- [Móvil390×844](tickets-after-mobile.png) y [escritorio1440×1000](tickets-after-desktop.png). Capturas del SHA final, después de estabilizar el desplazamiento.

El contenido de Pena y Home es el único alcance del nuevo lote de entradas. Las otras cuatro guías mantienen íntegros sus objetos de datos frente a670e9f3. No cambios de slugs, intención, canonical, robots, redirects, noindex o productos. Sitemap conserva106URLs y actualiza solo lastmod de Home/Pena. Las correcciones editoriales previas del PR118 permanecen y están documentadas por separado.

Límites: viewports emulados, sin dispositivos físicos ni Lighthouse/INP nuevos. No tráfico, reservas o comisiones atribuidas a esta Preview. No test de formularios/campañas/compra reales. No merge ni despliegue de producción. L003 exige revisión visual antes de publicar.
