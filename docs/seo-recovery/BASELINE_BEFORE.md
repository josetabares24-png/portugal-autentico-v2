# BASELINE_BEFORE

SHA `5f26c7989fccc5b151f07ab5cb48003463bab058`; branch `audit/content-regression`. Main/origin/main sin cambios. Arbol limpio antes de auditoria.

Produccion inspeccionada: `dpl_3w5hDbnRW7dgHybDDZxKJGWRg5gv`, READY, mismo SHA. Sin despliegue.

Node 24.16.0; npm 11.13.0; Next 16.1.6; React 19.2.3; TypeScript 5.9.3; Supabase 2.90.1; Clerk 6.36.7; next-intl 4.13.5. Versiones instaladas, no inferidas de rangos.

## Pruebas previas

Build, typecheck, lint y las seis suites unitarias: PASS. Smokes: activities 109/109, itineraries 26/26, titles 13/13, free-tours 67/67, sitemap 47/47 (89 URLs), blog 612 invariantes/51 articulos, 6 redirects y 0 enlaces rotos: PASS. Calculadora: FAIL 90/91, falta enlace desde presupuesto; reproducido antes de editar.

## Crawl de HTML servido

89 URLs sitemap. Raw crawl guardado fuera del repositorio en `%TEMP%/estaba-seo-baseline-5f26c798/BASELINE_BEFORE`. Incluye HTML, canonical, meta robots, H1, anclas, JS, imagenes, JSON-LD, Cache-Control y grafo. La captura inicial duplico home como cadena vacia: excluir esa fila y robots de metricas editoriales. Sin errores HTTP en URLs de sitemap.

Huerfanas dentro del universo rastreado: terminos-condiciones, novedades-lisboa-2026, lisboa-vs-porto, evitar-turistadas-lisboa. Es una medida de este grafo, no una afirmacion sobre todo Google. Profundidad maxima observada: 5. Portada blog ofrece 13 articulos en HTML inicial; paginacion fuera de alcance.

Rutas publicas renderizadas dinamicamente segun build; sitemap estatico. Proxy y ClerkProvider globales presentes: no se modifican. No se afirma mejora de cache/JS/TTFB. Los tiempos del crawler son descarga total, no TTFB.

## Limites

No hay medicion Lighthouse/CrUX, ni causalidad GSC demostrada. Inventario de origen historico no equivale a captura HTML historica. No se modificaron secretos, configuracion, main ni produccion.
