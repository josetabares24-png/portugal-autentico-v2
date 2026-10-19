# Fase 6E — itinerarios

19 octubre 2026. José indica seguir tras atracciones. Baseline 55feb02; aplicación anterior cf8961f y su Preview inmutable. Sin merge ni producción.

## Diagnóstico → decisión

HECHO: las páginas principales de uno, dos y tres días ya tienen ItineraryHero y Tu día/viaje de un vistazo, generado a partir de las paradas reales. Portugal en siete días también ofrece una respuesta y tabla inicial. Las guías de cuatro, cinco y siete días reparten sus decisiones entre jornadas o secciones más abajo. HIPÓTESIS: adelantar ese reparto facilita elegir un ritmo antes de leer el detalle. DECISIÓN: tres perfiles manuales y conservación de lo que ya responde. PREFERENCIA: plan orientativo por zonas, sin prometer un horario infalible o un presupuesto no calculado.

| URL | Acción | Límite |
| --- | --- | --- |
| /blog/lisboa-en-4-dias | Presentación | Cuatro jornadas, ritmo y adaptación; conserva Parque das Nações antes de Graça en el cuarto día |
| /blog/lisboa-en-5-dias | Presentación | Cinco jornadas y flexibilidad por lluvia; Sintra conserva su quinto día |
| /blog/lisboa-en-7-dias | Presentación | Seis pares para días 1–2 y días 3–7; conserva día tranquilo después de Sintra y último día abierto |
| /itinerarios/lisboa-1-dia-lo-esencial | KEEP | Ya tiene una jornada resumida y anclas al recorrido; no segunda caja |
| /itinerarios/lisboa-2-dias-completo | KEEP | Ya tiene dos jornadas resumidas; paradas, mapa y reservas intactos |
| /itinerarios/lisboa-3-dias-premium | KEEP | Resumen y decisión Lisboa/Sintra existentes; no cambiar slug, metadata ni variantes |
| /blog/portugal-en-7-dias | KEEP | Apertura con dos bases y tabla inmediata; no duplicar la comparativa. No se reverifican todas sus recomendaciones en este lote |
| /itinerarios | KEEP | Índice y navegación conservados, con sus controles HTTP/visual |
| /itinerarios/lisboa-romantica | REDIRECT existente | No reactivar ni convertir en nueva landing; destino Lisboa en pareja |
| /itinerarios/lisboa-familiar | REDIRECT existente | No reactivar; destino Lisboa con niños |
| /itinerarios/lisboa-fotografia | REDIRECT existente | No reactivar; destino Dónde fotografiar Lisboa |
| /itinerarios/lisboa-full-week | REDIRECT existente | No reactivar; destino Lisboa en siete días |
| /blog/que-hacer-en-lisboa-en-3-dias | REDIRECT existente | Mantener destino directo al itinerario principal de tres días |

Se leyeron completos los tres artículos adaptados; se inspeccionaron las tres rutas principales, su resumen y datos, el índice, el routing genérico y el acceso a guide store. Las rutas estáticas principales prevalecen sobre [slug]. No se crean ni editan guías de administración/Supabase para probarlo. Las guías de escapadas/familia/pareja/fotografía conservan su intención y no se reescriben automáticamente por haber sido destino de un redirect. Cascais y demás consolidaciones mantienen su revisión de Fase 7.

## Contenido y factualidad

Los 18 pares proceden de los bloques existentes con índices de trazabilidad. No se añaden tarifas, horarios, kilómetros, números de paradas o presupuestos. Los días de visita y de descanso son orientación editorial ya publicada. En siete días se conserva la elección costa/Parque das Nações según el tiempo y el final abierto; no se convierte en un recorrido por horas.

No se presentan nuevas verificaciones de operadores o monumentos ni se renuevan fechas de artículo. Pena/Jerónimos y las fichas pendientes mantienen su estado. Que se conserven sus enlaces no certifica una revisión factual de todas las visitas de cada ruta. Las incidencias anteriores permanecen en manifest/memoria.

La consulta puntual a la página Tiqets del combinado existente en cinco días no devolvió contenido legible (cache miss): no prueba ni disponibilidad ni retirada. No se añade ni cambia esa oferta. El contrato preserva los enlaces y parámetros existentes, pero no certifica el inventario comercial actual de los proveedores.

## Implementación y SEO

src/data/editorial-itineraries.ts: tres perfiles explícitos itinerary, seis filas por página. La página de blog resuelve el registro después de los anteriores. Firma bajo imagen, sin nueva entradilla ni reordenar el desarrollo. No cambios a componentes de itinerarios, mapas, paradas, coordenadas, cronologías, reservas o rutas.

scripts/smoke-editorial-template.mjs incorpora SMOKE_EDITORIAL_ITINERARIES=1 junto a los modos anteriores: 25 perfiles exactos entre las 72 superficies comparadas. Orden de párrafos, listas, celdas, headings/anclas y enlaces conservado en los lotes de Fase 6; solo admite el movimiento de firma/bajada del encabezado. La prueba específica smoke:itineraries comprueba por HTTP las rutas principales, aliases retirados y 404; no demuestra el caso de éxito de una guía dinámica creada en administración.

Sin nuevas URLs, redirects, noindex, metadata, H1, canonical, schema, FAQ, imágenes, fechas, sitemap, robots o enlaces internos/afiliados. Sitemap sigue en 98. Manifest conserva decisiones de URL, sin nuevas acciones REVIEW en este lote. Home, navegación, blog portada, Clerk y newsletter fuera del alcance.

## Riesgos y prueba

El resumen debe actualizarse junto con el reparto del cuerpo; los índices facilitan localizarlo. No modifica el esfuerzo real que piden las rutas ni garantiza tiempos de traslado. No nueva extracción GSC o atribución causal a una rama sin publicar; baseline métrico 15/10. No Lighthouse ni afirmaciones de Core Web Vitals sin medición.

Baselines local y remoto registrados antes de modificar. Integridad de 25 controles: siete inicializadores originales, tres listas de bloques válidas, cuatro páginas de itinerarios y once archivos de datos intactos frente a 55feb02. Build, QA HTTP y visual/Preview se incorporan al cierre al terminar. Siguiente grupo del plan: eventos; proteger páginas estacionales y hechos mutables.

## QA local

Build correcto: 137 páginas; TypeScript correcto. Lint sin errores y un warning preexistente en ItineraryContextualCta/analyticsParams. Plantilla: 1.662/1.662 en 72 superficies; migración: 1.426/1.426; sitemap 64/64 y 98 URLs. Blog: 828 invariantes en 69 HTML y cinco redirects; 97 enlaces sin rotos. Itinerarios: 26/26 por HTTP, incluidas rutas principales, cinco aliases y 404. Integridad: 25/25.

Navegador local: tres guías adaptadas, tres rutas principales, Portugal y el índice × 390/412/768/1440 px: 32 vistas sin overflow ni H1 duplicada. Exactamente tres cajas nuevas de seis filas; ninguna caja duplicada en las cinco superficies conservadas. Preview pendiente de cierre.

La primera ejecución remota completó plantilla/migración, pero sitemap se interrumpió por ECONNRESET y el siguiente proceso por ENOTFOUND. Se repiten solo esas dos pruebas, sin cambiar código, desactivar controles ni atribuir la desconexión a un fallo de la aplicación. El resultado del reintento se registra en el cierre.

## Cierre de Preview — 19 octubre

Preview READY: https://portugal-autentico-v2-3si81g8ta-estabaenlisboa.vercel.app

SHA comprobado `9d704c256aea5451459bfc24e1a39f8790f309fe`, deployment `dpl_GZnSH5mkuV75s16x7458GzG1EwwE`, rama editorial-rebuild, target null. Implementación `45d046e`, QA/documentación `9d704c2`; el cierre posterior contiene solo documentos y evidencia. Acceso temporal autorizado entregado en conversación, sin tokens/cookies en Git ni cambios de protección.

QA remoto final: plantilla 1.662/1.662 y migración 1.328/1.328. El reintento de sitemap termina 64/64, 98 URLs y XML parseado; itinerarios termina 26/26, sin fallos. No cambios de código para resolver la interrupción de red. La diferencia de 98 controles de migración frente a local corresponde a cabeceras Preview; robots HTML sigue estricto. CI TypeScript 39217986524 y SEO smoke 39217986616: success para el SHA comprobado; modos editoriales nuevos verificados manualmente y workflows sin cambios.

Navegador remoto: mismas 32 vistas que en local, sin overflow ni H1 duplicada. Tres cajas nuevas de seis filas, cinco superficies conservadas sin cajas añadidas. [Matriz](qa/2026-10-19/phase6e-responsive.json), [captura PC](qa/2026-10-19/phase6e-preview-desktop.png), [captura móvil](qa/2026-10-19/phase6e-preview-mobile.png), [controles](qa/2026-10-19/phase6e-checks.json), [integridad](qa/2026-10-19/phase6e-data-integrity.json), [antes/después](qa/2026-10-19/phase6e-change-summary.json).

Memoria/documentación: editorial-system, seo-migration, CURRENT-STATE, D-051 y registro de Fase 6E actualizados. Manifest sin nuevas decisiones. Se reutiliza ArticleEssentials de servidor, sin componentes o JavaScript cliente nuevos. No Lighthouse ejecutado. Producción reconsultada al cerrar conserva `83ca369b477d578f5a63004b461550bdcf706f89` / `dpl_FcVmwVr8u8p5zzdwiUmDNeNo36jz`, READY. PR #112 abierta y draft; sin merge ni producción.

Siguiente grupo: eventos, con atención a fechas y datos mutables. No se dan por resueltas las dudas de otros lotes ni se autoriza ninguna consolidación por terminar esta presentación.
