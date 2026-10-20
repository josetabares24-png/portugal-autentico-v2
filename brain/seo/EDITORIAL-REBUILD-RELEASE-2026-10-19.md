# Publicación de la reconstrucción editorial — autorización

José indica el 19/10/2026: «mandamos a produccion todo antes de seguir». Autoriza publicar el candidato completo revisado de la PR #112, antes de continuar nuevas fases. Sustituye la restricción anterior de mantenerlo solo en Preview para este candidato. No autoriza ejecutar consolidaciones pendientes ni ampliar el contenido de esta publicación.

Aplicación comprobada en 3f47e5bd6b4b5bf9b2653e70c79646dcf4d07f8f; cierre de evidencia 5913b8eab2eb0da3504348a748fe59031ef53ae4, solo documental. Esta anotación de publicación tampoco cambia código. Base de producción anterior83ca369/dpl_FcVmwVr8u8p5zzdwiUmDNeNo36jz. Preview cultural READY y QA local/remoto registrados en docs/editorial-phase6-culture-review.md.

Alcance: arquitectura aprobada de Fase1 (16 redirects301, ocho noindex/follow, sitemap98), limpieza global de TOC/fuentes/CTA, componente reutilizable y27 perfiles manuales hasta cultura. Las páginas REVIEW conservan contenido original; las fusiones WAIT y Fase7 siguen pendientes. No nuevas migraciones, cambios de título o correcciones factuales en esta publicación.

Publicar mediante la PR #112 y las protecciones normales, sin forzar ni saltar checks. Confirmar head actual, CI, Preview y equivalencia de código respecto a lo comprobado. Verificar después el dominio real: HTTP,16 redirects y destinos, sitemap, robots, noindex/canonicals, schema,27 perfiles y páginas protegidas. Guardar SHA/deployment y hora reales; no considerar un push o merge como prueba de que el alias público ya sirve el candidato.

El resultado operativo de esta publicación —estado de merge, SHA final, deployment, hora y QA posterior— se registra en la [PR #112](https://github.com/josetabares24-png/portugal-autentico-v2/pull/112), como registro de cierre enlazado desde esta memoria. Consultar ese resultado antes de iniciar medición. Baseline métrico continúa en GSC/Windsor15/10; no atribuir fluctuaciones a esta publicación ni iniciar ventana de experimento antes de comprobar producción.
