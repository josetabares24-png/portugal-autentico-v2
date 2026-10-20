# Fase 6B — barrios

18 octubre 2026. Continuación de José tras entregar transporte. Baseline: d1ef498, aplicación 130b792 y su Preview inmutable. Solo candidato de revisión; sin merge ni producción.

## Diagnóstico y decisión

HECHO: seis guías tienen instrucciones útiles repartidas entre ruta, conexiones y contexto. HIPÓTESIS: reunir las decisiones iniciales en cinco o seis pares facilita planear el paseo en móvil. DECISIÓN: perfiles manuales de barrio, con firma bajo imagen, sin nueva entradilla ni reordenar el desarrollo. PREFERENCIA: mantener la presentación editorial del piloto y la identidad de cada guía.

| URL | Acción | Respuesta inicial añadida |
| --- | --- | --- |
| /blog/baixa-lisboa-que-ver | Presentación | Rossio, eje peatonal, desnivel y continuación |
| /blog/alfama-historia-guia | Presentación | Ruta, miradores, pendientes, llegada, castillo opcional y fado |
| /blog/graca-lisboa-que-ver | Presentación | Miradores, orden del paseo y evitar repetir cuestas |
| /blog/chiado-bairro-alto-guia | Presentación | Día/noche, recorrido conjunto, tiempo y llegada |
| /blog/mouraria-barrio-guia | Presentación | Ruta, tiempo y contexto; se conserva la cautela sobre el origen del fado |
| /blog/parque-das-nacoes-lisboa-que-ver | Presentación | Para quién, Oriente, paseo, tiempo y actividades opcionales |
| /blog/donde-alojarse-en-lisboa | KEEP | Intención de alojamiento; ya abre con criterios prácticos. No convertir en guía genérica de visita |
| /blog/barrios-lisboa-donde-alojarse | REDIRECT existente | No reactivar; mantiene el 301 al artículo de alojamiento |
| /blog/barrios-imprescindibles | REVIEW | No resumir antes de revisar contradicciones: Baixa-Chiado descrito como «todo llano» frente a subida a Chiado; origen del fado rotundo frente a cautela de Mouraria; simplificación histórica del terremoto. Sin fusión ni cambio de intención |
| /blog/belem-barrio-guia | REVIEW | Horarios de Torre/Jerónimos y posible billete combinado necesitan comprobación concreta. No presentar la ruta con acceso interior garantizado ni propagar esos datos a otro resumen. Sin cambios en esta URL |

Las dos filas REVIEW son dudas detectadas, no decisiones de borrar, redirigir o fusionar. Se detiene el trabajo solo en esas URLs, como pidió José. Belém/Pastéis conserva pendiente el análisis del cluster de Fase 7. Cascais sigue fuera de este lote y sin consolidación automática.

## Implementación y archivos

src/data/editorial-neighborhoods.ts contiene seis perfiles explícitos con índices de bloques de procedencia. La página de blog añade ese registro tras piloto y transporte. No cambios a componentes, CSS, renderizador, objetos originales de artículo ni perfiles anteriores. Cada resumen tiene 5–6 filas semánticas sin enlaces comerciales. No se inventan duraciones para Alfama o Graça; no se añaden horarios, precios, locales ni experiencia personal.

scripts/smoke-editorial-template.mjs incorpora SMOKE_EDITORIAL_NEIGHBORHOODS=1 junto a los modos anteriores. Contrato: exactamente 16 perfiles entre 72 superficies; las seis nuevas conservan el orden de párrafos, listas, celdas, títulos y enlaces. Solo se permite mover los dos párrafos del encabezado (firma y bajada); ninguna adaptación de entradilla en este lote.

## Fuentes y factualidad

Los pares se extraen de los artículos existentes; no se renuevan fechas ni se simula una reverificación integral. Consulta puntual de contraste: [Alfama](https://www.visitlisboa.com/en/places/alfama), [Mouraria](https://www.visitlisboa.com/es/sitios/mouraria) y [Bairro Alto](https://www.visitlisboa.com/pt-pt/locais/bairro-alto), Turismo de Lisboa. La ficha de Torre en Museus e Monumentos no expuso información legible suficiente en la consulta: no prueba apertura ni cierre. Se documenta el límite y se mantiene esa guía pendiente.

La duración de Mouraria y la distribución del tiempo de Parque das Nações son orientaciones editoriales ya publicadas, no horarios de operador. Baixa conserva su aviso fechado de Santa Justa en el cuerpo; el resumen no lo convierte en un estado verificado hoy.

## SEO y riesgos

Sin nuevos redirects/noindex. Sitemap, robots, canonicals, schema, H1, títulos, metas, fechas, imágenes, FAQs y enlaces internos se conservan. Sin cambios a home, navegación, portada del blog, Clerk, newsletter, páginas protegidas o estacionales. Las dos fusiones WAIT originales siguen pendientes.

Riesgo de mantenimiento: actualizar a la vez resumen y cuerpo cuando cambie un dato; los índices facilitan localizar su procedencia. El resumen no sustituye revisar el contenido completo de las dos páginas pendientes. Impacto esperado en lectura, no crecimiento SEO demostrado. No nueva extracción de Search Console; baseline métrico sigue en 15/10.

## QA

Se registran baselines local y Preview separados antes de modificar. Integridad: siete inicializadores originales idénticos por SHA-256 frente a d1ef498, más seis listas de procedencia válidas: 13 comprobaciones. Build, checks HTTP, revisión responsive y Preview se anotan en el cierre tras ejecutarse. No Lighthouse ni afirmaciones de Core Web Vitals sin medición.

Build local correcto: 137 páginas; TypeScript pasa. Lint: cero errores y un warning preexistente en ItineraryContextualCta/analyticsParams. El primer build restringido quedó sin progreso; se interrumpió y se ejecutó correctamente fuera del sandbox, sin cambios de código para evitarlo. Plantilla: 1.635/1.635; migración: 1.426/1.426; sitemap: 64/64 y 98 URLs. Navegador local: seis guías × 390/412/768/1440 px, 24 vistas sin overflow, una H1 y una caja de 5–6 filas por página. Preview pendiente de cierre.

## Cierre de Preview

Preview READY: https://portugal-autentico-v2-r6vqgwb1t-estabaenlisboa.vercel.app

Commit comprobado `3cad0d82132721d864966082a2f6aaf24d1381ee`, deployment `dpl_3a2pae6c2bs2K7BgPdBHEbpzfzoC`, rama editorial-rebuild, target null. Implementación en `88d5bc2`; contrato de QA y documentación en `3cad0d8`. El cierre posterior contiene solo memoria/documentos/evidencia. Acceso temporal autorizado, sin guardar tokens o cookies en Git ni desactivar protección.

18/10/2026: plantilla remota 1.635/1.635 y migración 1.328/1.328; cero fallos. Sitemap remoto 64/64; XML de 98 URLs parseado. Los 98 controles menos que en local corresponden a cabeceras de Preview; robots HTML se comprueba estrictamente. Blog local: 69 HTML y cinco redirects, 828 invariantes; 97 enlaces internos sin rotos. CI TypeScript 39170427943 y SEO smoke 39170428166: success para el SHA comprobado. Workflows sin cambios; nuevos modos editoriales ejecutados manualmente, no afirmar que CI los ejecuta.

Navegador: 36 vistas locales y 36 remotas, seis modificadas y tres reservadas × cuatro anchos. Sin overflow ni H1 duplicada; exactamente una caja de 5–6 filas en las seis y ninguna nueva en las otras tres. [Matriz](qa/2026-10-18/phase6b-responsive.json), [captura PC](qa/2026-10-18/phase6b-preview-desktop.png), [captura móvil](qa/2026-10-18/phase6b-preview-mobile.png), [controles](qa/2026-10-18/phase6b-checks.json), [integridad](qa/2026-10-18/phase6b-data-integrity.json), [antes/después](qa/2026-10-18/phase6b-change-summary.json).

Producción reconsultada: `83ca369b477d578f5a63004b461550bdcf706f89` / `dpl_FcVmwVr8u8p5zzdwiUmDNeNo36jz`, READY. PR #112 abierta y draft, sin merge. Siguiente grupo previsto: comida, con revisión individual y su propia Preview/QA. Las dos dudas de este lote deben resolverse antes de modificar esas URLs.
