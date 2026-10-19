# Fase 6C — comida

18 octubre 2026. José indica seguir tras barrios. Baseline 1d1c470; aplicación anterior 3cad0d8 y su Preview inmutable. Lote pequeño por revisión individual; sin merge ni producción.

## Diagnóstico → decisión

HECHO: comer barato tiene criterios, precios fechados y comparación por zonas; Pastéis mezcla decisiones de visita con historia y experiencia. HIPÓTESIS: seis pares iniciales pueden facilitar elegir y presupuestar antes de leer el desarrollo. DECISIÓN: dos perfiles de presentación, con firma bajo imagen, sin nueva entradilla ni reordenar el cuerpo. PREFERENCIA: conservar la voz y la distinción entre orientación editorial y datos variables.

| URL | Acción de este lote | Motivo y límite |
| --- | --- | --- |
| /blog/donde-comer-barato-lisboa | Presentación | Filtro de gasto sin promesa; menú, zona, coste total y comprobación de carta. No propagar como vigentes todos los precios históricos |
| /blog/pasteles-de-belem | Presentación | Dirección, precio, horario con excepciones, mesa/llevar, cantidad orientativa y consumo. Historia y opinión originales conservadas; sigue REVIEW de cluster en Fase 7, sin consolidación |
| /blog/time-out-market-lisboa | KEEP del piloto | Ya responde para quién sí/no y tiene su resumen; no duplicar ni reescribir |
| /blog/donde-tomar-cafe-lisboa | REVIEW; sin cambios | El directorio oficial actual de Fábrica consultado no incluye Rua das Flores, citada en el cuerpo. No prueba cierre, pero exige confirmar esa ubicación antes de adaptar esta URL. Se detiene solo en esta página |
| /blog/gastronomia-portuguesa-guia | REVIEW; sin cambios | Contrastar afirmaciones absolutas como bacalhau «más vendido» y sardinas «solo en junio», y revisar la correspondencia de la promesa del título con el contenido. Sin cambio de título ni intención por iniciativa del agente |
| /blog/bacalhau-plato-portugal | REVIEW de Fase 7 | Conservar URL y contenido; cifras comerciales y recomendaciones necesitan revisión antes de cualquier integración |
| /blog/vinos-portugueses-guia | REVIEW de Fase 7 | No convertir generalizaciones, precios o catas gratuitas en nuevos datos resumidos. Sin integrar automáticamente en gastronomía |
| /blog/restaurantes-romanticos-lisboa | WAIT existente | Fusión planificada con Lisboa en pareja pendiente de revisión completa de ambas; no ejecutar aquí |
| /blog/mejores-pasteles-nata-lisboa | REDIRECT histórico | Ya redirige 308 a Pastéis de Belém. No confundir sus datos antiguos todavía presentes en el objeto con una página viva; no reactivar ni cambiar el redirect |
| /donde-comer-en-lisboa | KEEP fuera del lote de artículos | Pilar con plantilla propia; se conserva y se incluye en la regresión. No rediseñar ni alterar intención/navegación aquí |

Se leyeron completos los cuerpos de comer barato, café, Pastéis, gastronomía, vinos y bacalhau; se inspeccionó también el registro antiguo de natas y se comprobó su redirect en configuración/HTTP. Los pendientes no autorizan borrar, noindexar, fusionar o redirigir.

## Fuentes, hechos variables y límites

Consulta puntual del 18/10: [menú oficial de Pastéis](https://pasteisdebelem.pt/menu/) confirma 1,60 € por unidad; [contacto oficial](https://pasteisdebelem.pt/contactos/) confirma dirección y horario, incluidas excepciones de verano/Navidad. No se añaden precios nuevos ni se prometerán colas cortas. Las indicaciones de mesa/llevar y cantidad proceden del artículo original; la cantidad es consejo, no dato oficial.

[Mama Shelter](https://pt.mamashelter.com/lisboa/eat-drink/restaurante-bar/) mantiene el menú de día de 13,50 € con plato, bebida y café, de lunes a viernes al almuerzo excepto festivos. El filtro de 15 € es criterio editorial existente; no media estadística ni precio prometido. No se resume normativa de couvert: la consulta de ASAE falló y no se usa como nueva verificación legal. Las referencias originales permanecen.

[Directorio de Fábrica](https://fabricacoffeeroasters.com/pt/pages/find-a-store): consulta legible, pero no permite confirmar Rua das Flores. La web de A Brasileira no devolvió texto suficiente y Visit Portugal falló; no se simula una verificación integral. La guía de café queda pendiente, sin afirmar que un negocio haya cerrado.

## Implementación y SEO

Nuevo src/data/editorial-food.ts: dos perfiles explícitos food, seis filas cada uno, con bloques de procedencia. src/app/[locale]/blog/[slug]/page.tsx añade el registro tras los anteriores. Sin cambios a componentes, CSS, artículos originales ni perfiles de fases anteriores.

scripts/smoke-editorial-template.mjs añade SMOKE_EDITORIAL_FOOD=1 a los tres modos previos: exactamente 18 perfiles en 72 superficies comparadas. Conservación estricta del orden en los lotes de Fase 6; solo admite mover firma/bajada del encabezado. No nueva adaptación de respuesta ni cambio de headings/anclas.

Sin nuevos redirects/noindex, slugs, metadata, H1, canonical, robots, sitemap, JSON-LD, FAQ, imágenes, fechas ni enlaces internos/afiliados. Sitemap permanece en 98 URLs. Home, navegación, portada del blog, Clerk, newsletter y páginas estacionales fuera del lote. Manifest registra dos nuevas dudas REVIEW; no ejecuta migraciones.

## Riesgos y prueba

Los dos importes y el horario requieren mantener resumen y cuerpo juntos. Esta comprobación puntual no renueva la fecha de los artículos ni valida todas sus afirmaciones. Riesgo residual: las páginas pendientes siguen requiriendo revisión factual, aunque este lote no las modifica. No atribuir efecto SEO a una rama sin publicar; no nueva extracción de GSC, baseline métrico 15/10.

Integridad: siete inicializadores originales por SHA-256 frente a 1d1c470 y dos listas de procedencia válidas. Baselines local y remoto registrados antes de modificar. Build, checks, capturas y Preview se incorporan al cierre al terminar. No Lighthouse ni afirmaciones de Core Web Vitals sin medición.

## QA local y reanudación

Build correcto de 137 páginas, TypeScript y lint sin errores; permanece un warning preexistente en ItineraryContextualCta/analyticsParams. Plantilla: 1.641/1.641 en 72 superficies; migración: 1.426/1.426, 16 redirects y sitemap de 98 URLs. Integridad: 9/9, sin cambiar los siete inicializadores originales ni los perfiles anteriores.

La orden de sitemap/blog/typecheck del 18/10 no llegó a ejecutarse por agotarse el límite del servicio de revisión automática de permisos. Tras la continuación de José y el reinicio del límite, se ejecutó el 19/10: sitemap 64/64, blog 828 invariantes en 69 HTML y cinco redirects, 97 enlaces sin rotos; TypeScript correcto. No se eludió la revisión de permisos.

Navegador local: dos guías adaptadas, Time Out conservado, dos páginas REVIEW y el pilar de comida × 390/412/768/1440 px: 24 vistas sin overflow ni H1 duplicada. Exactamente seis filas nuevas en cada guía adaptada y ninguna activación adicional fuera del contrato. Preview pendiente de cierre.
