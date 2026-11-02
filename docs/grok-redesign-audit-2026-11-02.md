# Rediseño Grok: auditoría y reconstrucción en Preview

Revisión del 1–2 de noviembre de 2026. Candidato para revisión de José, **sin aprobación de publicación**. Base auditada: `06ecc92e16d3bd75ab3aa90328b000fbe4bb3f50`; rama `preview/grok-redesign-real-site-2026-11-01`; [PR134](https://github.com/josetabares24-png/portugal-autentico-v2/pull/134), borrador.

## A. Diagnóstico inicial

| Prioridad | Evidencia y efecto | Resolución |
|---|---|---|
| P0 | La ruta concreta de dos días ocultaba al componente Grok del segmento dinámico. Existir el componente y pasar un test de fuente daba un resultado engañoso. | Integrado en la ruta realmente servida; prueba HTTP de galería, anclas, mapa y las 11 paradas originales. |
| P0 | Portadas sin correspondencia temática: Bica para aeropuerto, fachada para bacalao/pagos, plaza para una vivienda, etc. El fallback podía propagarlas a OG y relacionados. | Política editorial explícita, diez presentaciones textuales y cuatro reasignaciones documentadas. |
| P1 | Variables de fuentes definidas en `:root` dependían de variables de `next/font` definidas en `body`. Los interiores caían en una sans del navegador. Además se precargaban siete archivos tipográficos. | Resolución en `.brand-es`, separación de shells ES/EN y tres precargas españolas. Comprobación de estilos computados en navegador. |
| P1 | Logo/hero de escritorio pequeños frente a la referencia; contenido estrecho; Home repetía grandes bloques de artículos/rutas. | Ajuste de proporciones, anchura 1308px, hero y logo; Home cronológica con cinco artículos y promoción compacta de la ruta. |
| P1 | Botón flotante de cookies podía tapar la lectura; cerrar sin consentimiento dificultaba reabrir. | Acceso permanente en el pie ES/EN; lectura/escritura de almacenamiento protegidas, mismos valores y eventos de consentimiento. |
| P2 | Texto turquesa claro insuficiente sobre blanco y etiquetas accesibles distintas del texto de tarjetas. | Turquesa oscuro para metadatos; nombres de galería procedentes de su texto visible. Lighthouse final sin ese fallo. |
| P2 | Buscador limitado a temas, signos/tildes, cierre de resultados y foco mejorables. | Catálogo ligero de los 71 artículos más rutas; normalización, estado vacío y Escape con foco conservado. |
| P2 | Mensaje de error de tours prometía enlaces que pueden faltar sin configuración. | Mensaje ES/EN que permite comparar rutas y reintentar, sin prometer disponibilidad. |

## B. Cambios realizados

| Área | Archivos principales y comportamiento |
|---|---|
| Identidad compartida | `src/app/grok-redesign.css`, `DocumentShell.tsx`, nuevos `RootDocument.tsx`/`EnglishDocumentShell.tsx`, `Navbar.tsx`, `Footer.tsx`, layout inglés. Abril Fatface/Heebo/Caveat en español; apariencia inglesa anterior conservada y fuentes a demanda. Logo V1 sin deformación. |
| Home/buscador | `src/components/home/GrokHome.tsx`, su CSS y `GrokQuickSearch.tsx`. Cinco publicaciones por fecha real, ByBoat primero; sin grillas repetidas de relleno. Destinos existentes y búsqueda local, sin nuevas URLs. |
| Itinerarios | Las tres rutas concretas de 1/2/3 días, segmento dinámico, `GrokTwoDayItinerary.tsx`/CSS e `ItineraryHero.tsx`. Galería, filas y ficha Alfama; recorrido anterior íntegro en desplegable nativo. |
| Fotografías | `src/lib/editorial-photo-policy.ts`, tarjetas/cabeceras/relacionados del blog, páginas de blog y actividad, `PhotoAttribution.tsx`, `photo-credits.ts`, manifest y tres archivos Commons. Misma selección en hero y metadatos. |
| Reservas | Solo fotos/créditos en `ActivityCard.tsx`, `BookingProductRenderer.tsx`, `FreeTourLiveFinder.tsx`, datos de actividades/reservas/afiliados/guías. Productos, campañas, referidos y condiciones conservados. `finder-copy.ts` corrige el error sin alterar la API. |
| Consentimiento | `CookieBanner.tsx` y pies ES/EN. Rechazar, aceptar, cerrar y volver a abrir comprobados; ninguna activación analítica local por el filtro de host existente. |
| ByBoat | `LisbonByBoatStory.module.css`: colores y tipografía coherentes, composición propia, precios/texto/fotos del operador y destinos Bokun conservados. |
| Protección | Nuevos `capture-redesign-surface.mjs` y `smoke-grok-rendered.mjs`, actualización de smoke de Grok/sitemap y CI SEO. El test del sitemap admite fotos reales en Commons, además de la carpeta anterior. |

No se añadió ninguna dependencia de ejecución. No se editó `main` ni se fusionaron PR131/132/133. De PR133 se reutilizaron selectivamente fotos y sus atribuciones, con su procedencia registrada.

## C. Fidelidad visual

La imagen adjunta es la referencia principal; [copia conservada](qa/grok-2026-11-02/referencia-aprobada.jpg). También se abrió el [proyecto original de Grok](https://estabaenlisboa-preview.vercel.app/): Heebo/Abril y colores `#016d6f`, `#015a5c`, `#fcc603`, `#0b2a3d` comprobados. Su contenido actual difiere del montaje, por lo que no reemplaza el contrato adjunto.

| Superficie | Resultado y diferencia restante |
|---|---|
| Home escritorio | Hero fotográfico, jerarquía, logo, buscador, cinco accesos y grilla editorial 1+4. [Comparación completa](qa/grok-2026-11-02/compare-home-full-final.jpg) y [detalle de hero](qa/grok-2026-11-02/compare-home-final.jpg). Cambia el contenido por cronología obligatoria. Se conservan enlaces útiles/legales y una promoción compacta del itinerario, por lo que la página es más larga que el montaje. |
| Home móvil | Buscador apilado, accesos 2+2+1 y artículos en una columna. Menú real añadido. [Comparación](qa/grok-2026-11-02/compare-mobile-final.jpg). Saltos de línea y altura de tarjetas dependen de los títulos reales; no se recorta el título de ByBoat para imitar el artículo del mockup. |
| Dos días | [Comparación](qa/grok-2026-11-02/compare-itinerary-final.jpg): barra de hechos, seis fotos, días separados, filas foto/texto/acción, paneles turquesa y ficha Alfama. Panorama auténtico en el hero en lugar de la calle del montaje; foto real de Torre y tranvía del archivo existente. Números de parada en vez de duraciones inventadas; acciones neutras en vez de precios no verificados. |
| Uno/tres días | Cabecera fotográfica y hechos con el sistema compartido. Se mantienen cronologías, mapas y lectura larga anteriores; no se fuerza la composición de seis paradas a rutas distintas. |
| Blog/artículos | Tipografía, color y fondos unificados; filtros/paginación y ancho editorial conservados. Tarjetas sin foto cuando falta una portada adecuada. ByBoat conserva su composición editorial independiente. |
| Entradas/Free tours | Identidad compartida, fotos corregidas, CTA y atribuciones conservados. Calendario y estados reales existentes, sin simular disponibilidad. |
| Inglés | Verificado a 1440/390, sin overflow. Se conserva su sistema tipográfico previo: una extensión visual completa del piloto inglés queda fuera de este lote. |

Resultado visual local y límites detallados en [design-qa.md](../design-qa.md). No es una certificación de igualdad píxel a píxel ni una aprobación humana de publicación.

## D. Antes/después

| Vista | Antes, mismo commit base | Después |
|---|---|---|
| Home 1440 | [Captura](qa/grok-2026-11-02/01-before-home-1440.jpg) | [Completa](qa/grok-2026-11-02/home-full-final-1440.jpg) |
| Home 390 | [Captura](qa/grok-2026-11-02/02-before-home-390.jpg) | [Completa](qa/grok-2026-11-02/home-full-final-390.jpg) |
| Dos días 1440 | [Captura](qa/grok-2026-11-02/03-before-itinerary-1440.jpg) | [Completa](qa/grok-2026-11-02/itinerary-full-final-1440.jpg) |
| Dos días 390 | [Captura](qa/grok-2026-11-02/before-itinerary-390.jpg) | [Captura](qa/grok-2026-11-02/responsive/itinerary-390.jpg) |

La base móvil se reconstruyó desde `git archive 06ecc92` en copia separada. Solo esa copia necesitó ampliar `turbopack.root` para resolver el enlace local de dependencias. Algunas fotos fuera del primer viewport no habían cargado en la primera captura base: no se interpretan sus huecos como un defecto probado del diseño.

45 capturas: siete superficies a 1440/1024/768/390/320 (Home, blog, ByBoat, dos días, entradas, tours, Jerónimos) y cinco superficies adicionales a 1440/390 (uno/tres días, qué ver, dónde comer, inglés). [Mediciones](qa/grok-2026-11-02/responsive-measurements.json); [archivos](qa/grok-2026-11-02/responsive). Anchos reales leídos del navegador, cero overflow en esos estados, un H1/main y ninguna imagen visible rota. No equivale a inspeccionar visualmente todas las 107 URLs en cinco tamaños.

## E. SEO y conservación

- Catálogo actual: **71 artículos**, publicación más reciente ByBoat, 27/10/2026. Orden por publicación, no modificación.
- Sitemap: **107 URLs**, contenido byte por byte conservado. [Hashes y capturas temporales](qa/grok-2026-11-02/preservation-summary.json).
- Comparación GET de **110 rutas**: títulos, descripciones, canonical, robots, respuesta/redirección, cuerpo `.article-content` y enlaces comerciales `href/rel` sin cambios frente a la base. [138 comprobaciones](qa/grok-2026-11-02/rendered-checks.json).
- Migración: **1530 controles**, 115 páginas, 122 enlaces internos únicos y 16 redirecciones, cero fallos. Calidad técnica: **1220 controles/122 páginas**, cero fallos y cero fechas schema inválidas.
- Excepción intencionada: imagen de hero/OG/Twitter/schema corregida o retirada en los 14 casos de la política editorial. Los diez casos sin foto usan resumen textual; no recuperan una portada global equivocada.
- H1/H2/H3 revisados en las superficies principales; se conserva breadcrumb/schema y metadata del itinerario. No se alteran slugs, fechas editoriales, precios ni indexabilidad para mejorar una puntuación.
- `/comprar-entradas` conserva su **noindex intencionado**, igual que producción. Su SEO Lighthouse 69 deriva de esa política; no se ha cambiado para obtener 100.

Riesgo residual: no hay nuevos datos GSC/ventas que permitan afirmar que el rediseño mejora posicionamiento o conversión. Los bloqueos de acceso métricos registrados en Mente Lisboa siguen vigentes; no se interpretan como cero tráfico.

## F. Rendimiento medido

Lighthouse **13.6.0**, Chrome, móvil con throttling simulado, ejecuciones secuenciales. Producción CDN y servidor local de producción son entornos distintos: esta tabla no demuestra una regresión equivalente en Vercel. Una ejecución por superficie/entorno; no son medianas ni datos de campo.

| Ruta | Perf. producción/local | LCP producción/local | CLS ambos | TBT producción/local | A11y ambos | SEO ambos |
|---|---|---|---|---|---|---|
| Home | 96 / 88 | 2,78s / 3,90s | 0 | 31 / 29,5ms | 100 | 100 |
| Blog | 94 / 89 | 2,99s / 3,80s | 0 | 46 / 27ms | 100 | 100 |
| Dos días | 91 / 89 | 3,28s / 3,81s | 0 | 60 / 29,5ms | 100 | 100 |
| Entradas | 90 / 89 | 3,37s / 3,82s | 0 | 59 / 35,5ms | 100 | 69, noindex |
| Free tours | 94 / 88 | 3,05s / 3,95s | 0 | 49 / 27ms | 100 | 100 |

[Datos con TTFB, bytes totales/JS, fuentes, fecha y throttling](qa/grok-2026-11-02/performance-summary.json). TTFB producción 30–36ms; local 7–79ms en estas ejecuciones. Home local transfiere aproximadamente 971KB frente a 741KB de producción; no se oculta el coste fotográfico/JS pendiente de medir en el despliegue real.

Base local de Home: perf82, LCP4,81s, a11y91 y siete precargas tipográficas. Tras correcciones: perf88, LCP3,90s, a11y100 y tres precargas; solicitudes de fuentes observadas 3–4 según la página y subset. Hero prioritario, fotos inferiores lazy. Persisten oportunidades de entrega de imágenes. **INP de campo no disponible; TBT no lo sustituye.** La última medición del itinerario fue posterior al ajuste de galería/etiquetas; la posterior edición del mensaje de error de tours no cambió su estado inicial medido.

## G. Fotografías y licencias

Se inspeccionaron hojas de contacto de los 71 candidatos y se detectaron **23 grupos de URL repetida** en el catálogo. Repetición entre artículos no demuestra por sí sola error, pero se evita repetir una foto en la misma sección visible de tarjetas. La galería/resumen de una misma parada sí repite deliberadamente su foto para facilitar orientación.

La política guarda 14 decisiones con su razón: mercado real, Torre de Belém y claustro de Jerónimos (también para arquitectura manuelina); diez portadas retiradas para vinos, Mouraria, Semana Santa, bacalao, playas, patinetes, pagos, vivienda de Ronaldo, restaurantes románticos y aeropuerto. No se crearon escenas alternativas.

- Torre: Berthold Werner, Wikimedia Commons, **CC BY-SA 4.0**.
- Claustro: Jakub Hałun, Wikimedia Commons, **CC BY 4.0**.
- Foto adicional de Torre/puente de Lisbon Photoshoots, **CC BY-SA 4.0**, conservada del lote de PR133 con manifest, sin asignarla como fallback.
- Pena: CEphoto/Uwe Aranas, **CC BY-SA 3.0**, archivo existente.
- Crédito, enlace a fuente/licencia y conversión WebP visibles en los usos nuevos. [Manifest completo y fuentes](../public/images/commons/CREDITOS.md), además de `src/data/photo-credits.ts`.

Las correcciones previas de azulejos/aldaba y Pena/estación ya estaban en la rama y se conservaron. Las fotos del operador ByBoat no se sustituyeron. **La inspección visual no certifica la autoría/licencia de todos los archivos históricos**: falta completar ese inventario documental. Los diez artículos pueden recibir una foto propia/licenciada verificada en otro lote.

## H. QA ejecutado y límites

| Control | Resultado |
|---|---|
| Build de producción | 144 rutas generadas, correcto |
| TypeScript | Correcto |
| ESLint | 0 errores; 1 warning previo de dependencias de efecto en `ItineraryContextualCta.tsx:84` |
| Grok fuente / render real | 43 / 138 correctos |
| Sitemap / migración / calidad técnica | 67 / 1530 / 1220 correctos |
| Cronología | 71 artículos, ByBoat primero |
| Itinerarios / Free tours sin configuración local | 26 / 12 correctos |
| Tiqets | Adaptador server-only, atribución y fallback conservados |
| Analytics / opciones tours / reservas inglés | 6 / 3 / 2 pruebas correctas |
| Lighthouse | 100 a11y en las cinco superficies; fallo experimental de etiqueta de galería corregido y repetido |
| Navegador real | 45 vistas; menú/Escape/foco, buscador ByBoat/tres días/signos/estado vacío, filtros Gastronomía/Todos y paginación SSR, ruta detallada/mapa, cookies y anclas |

Pruebas manuales: el filtro muestra ocho artículos gastronómicos sin recuperar fotos incorrectas; página2 conserva su canonical propio. La galería lleva a Belém con la parada por debajo del header. El CTA de entradas lleva a `#catalogo`; producto/partner/campaña de Oceanário comprobados. Índice móvil y destino de mapa de ByBoat comprobados, sin crear reservas. Aceptar/rechazar persiste tras recarga y la reapertura desde el pie funciona; cerrar no concede consentimiento. [Cookies 320px](qa/grok-2026-11-02/cookies-mobile-final-320.jpg), [menú](qa/grok-2026-11-02/menu-mobile-final.jpg), [error tours](qa/grok-2026-11-02/free-tours-error-final.jpg). Consola de la pestaña de QA: ningún error capturado en las interacciones finales.

Segunda revisión crítica realizada por el mismo agente, sin auditor externo: encontró y corrigió la caída de fuentes interiores, el botón flotante que tapaba lectura, el test de fuente que no garantizaba la ruta servida y el nombre accesible de galería que aún fallaba pese a a11y100. No se trató compilar como aprobación visual.

Incidencias de ejecución resueltas: una prueba de itinerarios se inició por error en modo local y reconstruyó `.next` con el servidor vivo, causando errores transitorios de manifests. Se detuvieron esos procesos, se recompiló/reinició y se repitieron los controles HTTP usando `SMOKE_BASE_URL`; los resultados finales anteriores son de esa repetición. Un inicio de Chrome de Lighthouse falló; la repetición completó el informe.

No ejecutado/no certificado: compra o reserva real, envío de formularios/correos, administración Supabase con guía real, lector NVDA completo, matriz de zoom/OS y emulación exhaustiva de reducción de movimiento, ni INP de campo. Las reglas `prefers-reduced-motion` se revisaron en CSS. GuruWalk local devuelve un error honesto por falta de configuración; ocho CTA están inertes deliberadamente sin referido. No se copian secretos ni se presenta esa prueba como una reserva funcional en vivo.

Logs y resúmenes portables en [evidencia](qa/grok-2026-11-02). Los JSON completos de Lighthouse y las dos capturas completas de metadatos permanecen además en `C:\Users\estab\Desktop\revision-grok-2026-11-01`.

## I. GitHub

Rama existente y PR134 conservados en borrador. Commits de aplicación: `1b164b7` (fotos y atribuciones), `67e1119` (layouts, fuentes, rutas, consentimiento y búsqueda). El commit posterior añade pruebas, este informe, evidencia y memoria en la misma PR. No se fusionó ninguna rama relacionada ni se hizo push a `main`.

La observación remota previa a subir está en [remote-status.json](qa/grok-2026-11-02/remote-status.json). El head final, sus checks y su despliegue exacto se registran en la descripción de [PR134](https://github.com/josetabares24-png/portugal-autentico-v2/pull/134) al entregar, sin provocar otro build solo para actualizar este documento. No confundir checks de un commit anterior con los del candidato.

## J. Vercel

Antes de subir este candidato, ambos checks Vercel de la PR fallaban por `build-rate-limit`, como registra `remote-status.json`. El último READY antiguo (`k77jyq269`) no corresponde a este candidato y no se entrega como validación actual. La comprobación del head final y su URL READY exacta —o su fallo explícito— se registra en la descripción de [PR134](https://github.com/josetabares24-png/portugal-autentico-v2/pull/134) y en la entrega a José después del push.

La preview local es `http://localhost:3440/`, con compilación de producción. No se han actualizado alias de producción, planes, permisos ni variables de entorno.

## K. Pendientes para aprobar publicación

1. Revisión visual de José sobre Home y dos días; las adaptaciones de contenido/fotos anteriores son explícitas.
2. Despliegue READY del último head y QA remoto de rutas/consentimiento/tours con configuración real. Si Vercel vuelve a limitar builds, sigue siendo un bloqueo externo, no un despliegue correcto.
3. Comprobar disponibilidad real GuruWalk y la salida a proveedores con referido/fecha/idioma en ese entorno, sin efectuar pagos de prueba no autorizados.
4. Revisión factual fechada de precios/horarios de los recorridos originales, preservados en el desplegable. PR132 contiene trabajo relacionado que no se fusionó automáticamente. El resumen nuevo no reutiliza cifras no verificadas del montaje.
5. Completar derechos de fotos históricas, pruebas manuales de lector de pantalla/zoom y medición de rendimiento remoto/campo. Ninguna puntuación aislada acredita conformidad WCAG completa.

El candidato queda disponible para revisar en Preview. Estos límites impiden afirmar que toda la web está aprobada para producción.
