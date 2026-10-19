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
