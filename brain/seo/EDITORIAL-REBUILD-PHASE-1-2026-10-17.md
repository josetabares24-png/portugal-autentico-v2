# Fase 1 editorial — candidato para Preview

Fecha: 17/10/2026. Rama `editorial-rebuild`, [PR #112](https://github.com/josetabares24-png/portugal-autentico-v2/pull/112). Sin merge ni producción.

**HECHO.** Fase 0 terminó con baseline `83ca369`, 110 URLs en sitemap y dos contradicciones de orden. José respondió «continua» y «Continua» tras presentar las excepciones. Se continúa solo Fase 1, manteniendo las fusiones de restaurantes románticos y novedades en WAIT hasta revisión completa Fase 7, y checkout ya retirado mediante 308. No reconstruir checkout para noindex.

**DECISIÓN.** Aplicar exactamente 16 reglas 301 y aliases, ocho noindex/follow exactos y sitemap filtrado. El índice de actividades es directorio; solo ese path pasa a noindex, con 17 fichas indexables y tres redirects expresos. La orden actual de José reemplaza la política comercial anterior para Comprar entradas; no se extiende esa excepción a otras URLs. No modificar Clerk ni sus matchers.

**EVIDENCIA.** Los 14 destinos únicos activos eran 200, autocanónicos y sin noindex antes del cambio. QA local: 1.426 checks de migración, 64 de sitemap, 120 de actividades, 26 de itinerarios, 19 de títulos, todos correctos. Blog: 69 HTML, 828 invariantes; cambios previstos en href/navegación y tres estados 308→301. Títulos, metadata y contenido protegido se comparan en el informe enlazado. Sitemap final 98. No hay nueva evidencia GSC que permita atribuir crecimiento o caída a este candidato.

**LÍMITE.** La Preview y su SHA se registran en el PR. No es una versión de producción ni se ha puesto en marcha el reloj de medición. Mantener newsletter pausada (D-044). No rehacer destinos protegidos, no copiar cifras históricas como verificadas hoy, no escalar a las 110 páginas.

**SIGUIENTE ACCIÓN.** STOP + REVIEW de Fase 1. Fase 2 necesita el gate solicitado por José; no avanzar automáticamente. Después de una futura publicación autorizada, recrawlear técnicamente y comparar ventanas cerradas GSC, sin equiparar una captura de 24h con caída SEO.

Detalles y riesgos: [seo-migration.md](../../docs/seo-migration.md). Fuente de URLs: [manifest](../../docs/seo-url-manifest.csv) y [contrato ejecutable](../../src/data/seo-url-policy.json). Clerk: [informe](../../docs/clerk-indexing.md). El PR contiene la Preview verificada; GitHub + Mente Lisboa gobiernan cambios futuros.
