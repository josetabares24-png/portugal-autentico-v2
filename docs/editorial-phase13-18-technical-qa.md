# Fases 13–18 — revisión técnica y correcciones acotadas

22/10/2026. Baseline de aplicación 5b0e210; HEAD inicial 1579a08 solo documentaba ese código. Rama editorial-rebuild-phase-7 / PR #113 en borrador. José indica continuar. Sin autorización de merge/publicación.

## Fase 13: schema

Nuevo `smoke:technical-quality`: 98 URLs de sitemap, ocho páginas noindex y siete páginas adicionales del archivo = 113 respuestas. GET solamente, cinco solicitudes simultáneas; no APIs, formularios o enlaces externos. Diez controles por página: 200 directo, JSON parseable, fechas ISO válidas, breadcrumbs consecutivos, main/skip link, una H1, IDs únicos, fuente de nombre en botones, ALT declarado y preguntas FAQ presentes en contenido tras retirar scripts/styles. Es una comprobación de contratos concretos, no una validación completa de vocabulario/rich results.

Baseline: 1.130 controles, ocho fallos: `/blog` y páginas 2–8 repetían 68 `datePublished` como «14 Oct 2026». Son 544 ocurrencias de un mismo defecto de plantilla, no 544 URLs dañadas. Las páginas de artículo ya convierten sus fechas correctamente. Corrección: convertir la fecha existente a YYYY-MM-DD únicamente en el catálogo JSON-LD. No cambiar texto visible, fechas reales, dateModified, lastmod, títulos, canonicals o slugs. La guía editorial de una ficha deja de derivar publicación desde modificación: usa su `fecha` existente; si falta/no es válida, omitir el campo. Fecha de modificación conserva su fuente.

`toIsoEditorialDate` comprueba los doce meses, calendario real y bisiestos; nunca usa la fecha de hoy como fallback. 24 casos unitarios. Tras el cambio: 1.130/1.130, cero fechas inválidas. No se modifica el renderer principal de artículos ni su parser existente, para no ampliar esta corrección a contenido protegido.

Inventario: Organization/WebSite globales, ProfilePage/Person, Blog/BlogPosting/Article, CollectionPage, BreadcrumbList, FAQPage y TouristAttraction. Cero Review/AggregateRating inventados en las respuestas revisadas. Las preguntas de FAQ declaradas existen en el contenido; los accordions cerrados siguen en el HTML. Seis Offer previos en Castelo, crucero, Oceanário, Pastéis, tasca y Torre de Belém: preservados; este test no revalida precios/disponibilidad actuales. Mantener las dudas REVIEW ya documentadas, sin inventar una nueva infracción ni modificar esas URLs solo por encontrar Offer.

Fuentes de criterio: [Article, Google](https://developers.google.com/search/docs/appearance/structured-data/article). Se mantiene el respaldo editorial y las fechas parciales; no publicar una fecha de modificación como si acreditase la primera publicación.

## Fase 14: rendimiento medido y cambios

PageSpeed API devolvió 429; se utilizó la interfaz oficial con el dominio público. No se remitió a Google un enlace de Preview ni su token. Mediciones de **producción 5ad2c40**, Lighthouse 13.5.0, una ejecución, carga inicial; sin datos de campo disponibles. No son resultados de este candidato ni una comparación antes/después.

| Página / dispositivo | Rendimiento | FCP | LCP | TBT | CLS | Accesibilidad / prácticas / SEO |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Home / móvil, 4G lenta emulada | 98 | 0,9 s | 2,3 s | 0 ms | 0 | 100 / 100 / 100 |
| Home / desktop | 99 | 0,3 s | 0,8 s | 50 ms | 0 | 100 / 100 / 100 |
| Metro / móvil, 4G lenta emulada | 92 | 0,9 s | 3,3 s | 0 ms | 0 | 100 / 100 / 100 |

[Informe Home](https://pagespeed.web.dev/analysis/https-estabaenlisboa-com/2cad4qo4yb?form_factor=mobile), [Metro](https://pagespeed.web.dev/analysis/https-estabaenlisboa-com-blog-metro-lisboa-guia/j29ro63fw5?form_factor=mobile). Texto accesible capturado en QA. La ausencia de CrUX no significa cero visitas. TBT no es INP; no afirmar que se hayan medido INP o Core Web Vitals reales. Una puntuación 100 de accesibilidad automática no certifica accesibilidad completa.

LCP de Home: fotografía de Alfama; de Metro: fotografía de Olaias, ya priorizada y con sizes calculado para el recorte 4:3. No reducir esa resolución, retirar fuentes o cambiar el hero para perseguir una sola cifra. Metro es la prioridad de seguimiento: tras el eventual despliegue, repetir condiciones y comparar varias ejecuciones antes de alterar un componente protegido. PageSpeed estima ahorro de imágenes de Home que incluye ocho superficies móviles grandes; Fase 11 ya propone miniaturas 80/96 px en Preview. No atribuir todavía a ese cambio un ahorro de bytes o de LCP medido.

Dos limpiezas pequeñas confirmadas: retirar preconnect/dns-prefetch global a api.brevo.com, usado solo desde servidor; y retirar quality=82 de Home, valor ausente de la lista configurada 75/90. Se conserva el valor por defecto admitido, priority/fetchPriority, imagen, ALT y tamaños. No añadir dependencia, cambiar caché o tocar Clerk. Fuentes locales con swap y dimensiones reservadas para imágenes conservadas; GA con consentimiento/hostname y Stay22 lazyOnload conservados. Las seis pruebas de analytics pasan.

Referencia: [Image / qualities, Next](https://nextjs.org/docs/app/api-reference/components/image#qualities). Sin prometer una mejora de puntuación por estas limpiezas.

## Fase 15: accesibilidad

Controles de cookies medidos a 390 px: cerrar 28×28, aceptar/rechazar 36 px de alto. Ahora 44×44 mínimo; botón de preferencias también pasa de 40 a 44. Se reserva espacio a la derecha para que cerrar no tape el texto. Solo CSS: no cambia consentimiento, almacenamiento, rechazo/aceptación ni tracking.

44 px es el objetivo táctil del proyecto, alineado con [Target Size Enhanced AAA](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html); no describir los tamaños previos como incumplimiento automático del [mínimo AA de 24 px y sus excepciones](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

Teclado local: Tab entra a Moverse tras abrir Lisboa; Escape cierra y devuelve foco al botón. Enter opera el TOC nativo y Datos verificados. Focus visible y prefers-reduced-motion existentes se conservan. A 320×568, Home conserva H1 y dos salidas dentro del hero, sin clipping observado. No se ejecutó una prueba completa con lector de pantalla; no declararla accesibilidad certificada. Mantener revisión manual de contraste sobre fotos y navegación larga como parte del gate visual.

## Fases 16–18 y conservación

QA local: build 137; TypeScript correcto; lint cero errores/un warning previo en ItineraryContextualCta:84. 24 casos de fechas, seis pruebas analytics; técnico 1.130, migración 1.426, navegación 171, blog 828 invariantes y 97 enlaces sin rotos. Sitemap conserva 98 URLs y políticas exactas; contenido y metadata de los artículos protegidos no se reescriben.

Matriz de redirects: 64 fuentes (16 reglas × URL normal y tres alias de idioma), todas 301 → final 200, longitud 1. Dos fusiones WAIT siguen aplazadas; no añadir redirects o noindex. Robots, canonical, sitemap y manifest de URLs intactos.

Evidencia local en `docs/qa/2026-10-22/phase13-18/`: antes/después del nuevo audit, controles de cookies, teclado y matriz. Preview/QA remota y revisión responsive ampliada pendientes. Conservar los artefactos de métricas como baseline público; no enviarlos como si validaran el nuevo deployment.

## Gate y alcance pendiente

Este lote cierra los contratos automatizados y las comprobaciones manuales descritas, con una medición de laboratorio de dos superficies. No equivale a certificar todo schema en Google, todos los hechos/precios, todos los navegadores o accesibilidad completa. La aprobación visual del conjunto sigue pendiente por L-003. El gate de Fase 21 no se salta; después de una publicación explícitamente autorizada habrá que repetir redirects/sitemap/robots/noindex/canonicals/schema y páginas prioritarias en producción.

## Cierre de Preview

Código **5b83dbc8360c9110084dec3e0f2a179eacb14fce**, deployment **dpl_By26Cn7YTbCkBNcAEii5GQ87A328**, READY, `target:null`: https://portugal-autentico-v2-ns1s62i6a-estabaenlisboa.vercel.app . Seis checks correctos (SEO smoke, TypeScript, GitGuardian, comentario automático y ambos proyectos Vercel). Nuevo audit técnico ejecutado manualmente contra build/Preview; no se afirma que se haya añadido al workflow CI. Acceso temporal entregado en chat, sin token/cookie en Git ni cambios a protección/noindex de plataforma.

Audit remoto **1.130/1.130**, 113 respuestas y cero fechas inválidas. Migración remota **1.328** sin fallos, 98 URLs y 106 páginas; omite solo los 98 checks de noindex de plataforma que sí aplica el modo local, conservando la política HTML. Matriz remota: **64/64**, todas 301→200, cadena 1. Artículos/datos, URLs, políticas SEO y manifest intactos respecto a 1579a08; no se inventan reviews, precios o primeras publicaciones.

Navegador local y remoto: veinte vistas por entorno (Home/Metro/calculadora/entradas × 320/390/412/768/1440), sin overflow, H1 duplicada, clipping del H1 de Home ni referencias aria-controls/labelledby rotas. Cookies cerrar/aceptar/rechazar y preferencias: mínimo 44 px; sin scripts GA/Stay22 en el DOM antes de consentimiento. Se prueba rechazo y apertura/cierre por teclado, sin aceptar trackers para generar una reserva o evento. Seis tests analytics cubren aceptación/revocación de forma aislada.

Teclado remoto: salto a main seguido de Tab llega a «Preparar mi viaje», evitando cabecera; Tab entra a Moverse en Lisboa, Escape cierra/restaura foco; Enter opera índice y fuentes. El salto nativo dejó activeElement sin ID, pero el siguiente Tab confirmó la posición correcta; no confundir ese primer dato con un fallo ni cambiar el código innecesariamente. El TOC abierto por desktop se cierra con Enter, las fuentes se abren. No prueba completa con lector de pantalla ni contraste certificado sobre imágenes.

Evidencia: [audit remoto](qa/2026-10-22/phase13-18/preview-technical.json), [matriz](qa/2026-10-22/phase13-18/preview-redirect-matrix.csv), [vistas](qa/2026-10-22/phase13-18/preview-responsive.json), [teclado](qa/2026-10-22/phase13-18/preview-keyboard.json), [controles](qa/2026-10-22/phase13-18/preview-cookie-targets.json) y [captura](qa/2026-10-22/phase13-18/preview-cookie-controls.png). Los resultados de PageSpeed corresponden a producción, no a la Preview protegida; no se enviaron credenciales al servicio de medición.

Producción consultada conserva **5ad2c40 / dpl_BdGSFAuvGY1dudTfLHSU6MYdoWes READY**. Sin merge ni publicación. El commit posterior de cierre solo guarda evidencia/documentación de este código probado. Fases 19/20 conservan manifest/sistema documental; gate visual y proceso de Fase21 pendientes. Próxima decisión es revisar el conjunto de PR113 antes de publicar, no abrir otra migración o un rollout de textos.
