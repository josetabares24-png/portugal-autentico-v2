# PR118 — Publicación del26/10/2026

## Decisión y despliegue

José responde «publica» tras la entrega de la Preview final y su captura. Se conserva el candidato revisado sin cambios de código adicionales. PR118 pasa de borrador a listo; watcher confirma ready, seis checks correctos, cero hilos pendientes y base06d9e14. Método permitido e histórico: merge normal, sin privilegios administrativos o bypass.

- [PR118 fusionado](https://github.com/josetabares24-png/portugal-autentico-v2/pull/118).
- Head aprobado: `ed5eb7ebf2d1c4e59519f00e946a7bd87315ea10`; aplicación verificadaf6db655, seguida solo de evidencia/documentación.
- Merge: `96162fe5791f2865f77f2d093321746bc788711e`, GitHub mergedAt `2026-10-26T22:01:56Z`.
- Vercel: `dpl_Gw1LWLpUN78dBS6KtiNtheQfj8Bj`, READY, target production, SHA exacto del merge.
- Alias públicos confirmados: estabaenlisboa.com y www.estabaenlisboa.com. [Página publicada](https://estabaenlisboa.com/en/pena-palace-tickets).

El helper vuelve a comprobar el head/política/readiness al solicitar la fusión; el watcher posterior confirma MERGED con el head autorizado. Las salidas quedan en audit-evidence/pr118-publish-*.json del workspace. No se promovió manualmente una Preview ni se cambiaron protecciones.

## Alcance publicado

Ayuda de inclusiones y guías en el catálogo de entradas; correcciones editoriales puntuales comprobadas; Escape de navegación inglesa; lectura, índice responsive y portada del piloto; elección de visita/condiciones de Pena, un CTA existente y enlaces nativos que funcionan al repetir la misma sección. Conserva fotografías, seisURLs inglesas, productos/atribución y todas las publicaciones recientes de main integradas previamente. [Informe del lote anterior](entries-mobile-editorial-polish.md), [pulido inglés](english-refinement.md), [entradas](english-ticket-polish.md), [integración](pr118-main-integration.md).

No se añaden slugs, productos, migraciones, noindex o reglas robots. Solo Home/Pena actualizan su lastmod por el cambio real del26/10. La publicación no altera ajustes de SearchConsole ni reintenta sus dos rechazos por cuota.

## QA posterior en el dominio público

| Control | Resultado |
|---|---|
| Piloto inglés | 224/224; seisURLs |
| Preservación española frente al main integrado | 1659/1659;72superficies |
| Migración SEO | 1520/1520;106URLs sitemap,114páginas,16redirects |
| Free tours | 66/66 |
| Navegador | 16/16vistas: seisURLs inglesas, entradas españolas y free tours españoles;390×844/1440×1000 reales |
| Tarjeta Pena | Un CTA de48px, producto p1120392, partner y campaña existentes; canonical público correcto |
| Registros del despliegue | Consulta error/fatal por level desde30min sin grupos devueltos; observación breve, no garantía de ausencia futura |

La migración comprueba sitemap/robots, canonicals, schema parseable, noindex, enlaces internos, 404 reales y redirecciones sin cadena. Las106comprobaciones públicas de indexabilidad vuelven a ejecutarse, además de las1414que pasaron en Preview. Todas las vistas tienen unaH1, lang esperado y sin overflow horizontal o imágenes cargadas rotas observadas.

Evidencia detallada en audit-evidence/pr118-production-2026-10-26 del workspace: english-pilot-report.json, editorial-template-report.json, seo-migration-report.json, seo-redirect-matrix.csv, visual-matrix.json y logs. [Captura de producción](qa/2026-10-26/pr118-production/pena-live-desktop.png) y [matriz visual](qa/2026-10-26/pr118-production/visual-matrix.json). No se realizan compras, clics de afiliado o envíos de formularios para QA.

## Observación y límites

E019 mantiene D0del24/10 y anota este cambio del26/10. No datos nuevos válidos de tráfico o reservas/comisiones: no declarar mejora de CTR/ventas ni reiniciar el experimento. Próxima evaluación con ventanas finalizadas y muestra suficiente, separando periodos cuando proceda.

Build142, TypeScript/lint sin errores y seisCI del candidato pasaron antes del merge; persiste el warning previo de analyticsParams en ItineraryContextualCta. Sin Lighthouse/INP nuevo ni prueba en dispositivos físicos. No configuración de monitorización o proveedores modificada.

Esta documentación de cierre se prepara en una rama posterior al merge para no cambiar el head aprobado. No introduce código de aplicación o un segundo despliegue de producción.
