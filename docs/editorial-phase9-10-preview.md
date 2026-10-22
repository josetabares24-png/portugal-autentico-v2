# Fases 9–10 — propuesta funcional de navegación y portada editorial

21/10/2026. José indica seguir tras las correcciones de cinco guías. Base `a4c64b0` (mismo código que Preview 1b4c104), rama editorial-rebuild-phase-7 y PR #113. Candidato visual: requiere revisión explícita antes de merge según L-003. No producción, nuevas URLs, categorías SEO, fusiones ni cambios de Home salvo la navegación global compartida.

## Diagnóstico → evidencia → propuesta

HECHO: la navegación ofrece Guías/Free tours/Entradas. El blog abre con tres imágenes decorativas, filtros y un destacado tomado del primer registro, seguido de un grid. Hay 68 registros en catálogo y 74 rutas de artículo/alias; la selección de portada depende del orden del archivo, no de una ruta de lectura por intención. Existen contenidos suficientes de transporte, barrios, comida, cultura y escapadas. [Baseline GSC](../brain/data/CONSOLIDATION-SEARCH-2026-10-20.json) hasta 17/10, anterior a publicación: no atribuir resultados a esta propuesta.

HIPÓTESIS: ordenar entradas por necesidad reduce esfuerzo para encontrar una guía. No se ha medido abandono, clics de menú o cambio en CTR. OPORTUNIDAD: facilitar la elección con contenido existente. PREFERENCIA: lectura editorial con fotografías reales, títulos y listas, sin mega menú ni portada de reservas. DECISIÓN D-060: implementar una propuesta funcional acotada para Preview, mantener catálogo/paginación y pedir revisión visual antes de publicación. Impacto esperado: descubrimiento y claridad; no se garantiza tráfico. Esfuerzo medio; riesgo principal: navegación compartida y selección estacional.

## Navegación propuesta

Propuesta inicial (21/10): cuatro entradas principales: **Lisboa · Escapadas · Historias · Planifica**. Revisada tras feedback de José: véase el apartado del 22/10 al final.

- Lisboa abre cinco destinos: Moverse → guía maestra; Comer → hub existente; Barrios → sección de portada; Qué ver → pilar existente; Rutas → itinerarios.
- Escapadas abre `/portugal`, que ya organiza rutas y destinos desde Lisboa.
- Historias y Planifica abren sus secciones de `/blog`, sin crear landings.
- Free tours y Entradas siguen accesibles como recursos de Planifica, además de enlaces secundarios en móvil. Todas las guías abre el catálogo. No se retiran sus páginas ni se modifica su política SEO.

Desktop: desplegable breve de Lisboa, clic fuera/Tab fuera/Escape cierran; Escape devuelve foco al control. Son enlaces ordinarios, no un menú ARIA que exija simular navegación por flechas. Móvil: botón de 44 px, expansión de Lisboa nativa, cierre tras seguir enlace/Escape, altura limitada con scroll interno. aria-controls tiene destino incluso cuando el panel está oculto. No modal, bloqueo de body, dependencia ni widget externo. Logo conservado; prefijo interno /es normalizado como antes. Sin cambios a Clerk/auth o Footer.

## Portada propuesta con contenido real

La cabecera conserva H1 «Guías de Lisboa y Portugal». Se retira el collage para dejar la fotografía al contenido destacado; tipografía/marca/paleta existentes. No gradientes, buscador ficticio, slider o iconografía decorativa.

1. Accesos a Moverse/Comer/Barrios/Qué ver/Rutas y catálogo.
2. Destacado: Lisboa cuando llueve. Selección de próximos meses: Navidad, Óbidos Vila Natal y Nochevieja. No afirmar que las actividades estén sucediendo hoy ni revalidar datos de sus guías. Conservar sus títulos, fechas y advertencias reales.
3. Planea: alojamiento, aeropuerto y presupuesto; recursos de calculadora, itinerarios, free tours y entradas.
4. Moverse: panorámica, Metro y Navegante, sin reescribir las URLs protegidas.
5. Barrios: Graça, Alfama y Mouraria; Comer: Gastronomía, Time Out y cafés. Fotografía de apertura más enlaces de lectura, sin repetir un grid de tarjetas gigantes.
6. Historias: azulejos, historia de Lisboa y fado.
7. Escapadas: Sintra, Cascais y Portugal en siete días, con enlace al hub Portugal.
8. Todas las guías: filtros y ocho páginas rastreables del archivo.

Selección explícita en `src/data/blog-editorial-selection.ts`: solo IDs, 22 artículos. Los títulos, descripciones, fechas e imágenes se resuelven desde blogPosts; no mantener una segunda copia ni simular publicaciones nuevas. Un ID inexistente falla en build/check. La selección de octubre es manual: revisar temporada antes de publicar y en cambios de estación. Las fuentes y datos de los artículos estacionales no quedan certificados por destacarlos.

## Conservación / arquitectura de componentes

La portada se renderiza en servidor y pasa como slot ReactNode al archivo cliente existente; filtros y paginación conservan su comportamiento. Solo aparece en página uno. Los primeros cuatro registros del archivo siguen enlazados allí en formato compacto; los nueve siguientes y páginas 2–8 conservan el reparto y URLs. No desaparecen artículos del catálogo. Filtros se aplican al archivo, separado de la selección editorial, que conserva sus anclas; la paginación filtrada vuelve al catálogo, no a la cabecera distante.

Nuevo BlogEditorialCover y selección reutilizable; definiciones de navegación compartidas entre cabecera/portada. EditorialArticleCard admite headingLevel 2/3 con valor anterior 2 por defecto: h2 para destacado y h3 bajo secciones. Header del blog simplificado; Navbar compartido cambia en todas las páginas de Preview. No tocar artículo renderer, blogPosts, imágenes/ALT de artículos, metadata/canonical/schema, lastmod, sitemap/robots, redirects/noindex ni manifest de URLs. La única diferencia en otras páginas debe ser la navegación fuera de main.

Archivos de aplicación: Navbar.tsx; blog/page.tsx y BlogClient.tsx; BlogLandingHeader.tsx, BlogEditorialCover.tsx y EditorialArticleCard.tsx; data/editorial-navigation.ts y blog-editorial-selection.ts. BlogPagination.tsx usa enlaces HTML en el archivo. Script nuevo de smoke y comando package.json; sin dependencias nuevas ni cambio de lockfile. Revisión react-best-practices: componente de portada en servidor, sin fetch/cascada ni duplicación de estado derivado; eventos con cleanup/foco; claves estables; imágenes existentes responsivas y carga prioritaria reservada al destacado/logo. No se afirma mejora de LCP/INP sin medición.

## Baseline y QA previstos

Antes de editar: snapshot `phase9-before` del smoke existente, 74 rutas (69 HTML y cinco redirects), referencia visual desktop del candidato previo. Comparar después los artículos completos, incluyendo metadata, headings/anclas, enlaces, imágenes, texto y JSON-LD; la cabecera global queda fuera de main. Confirmar que los datos/contratos SEO permanecen idénticos en Git y sitemap por HTTP.

Build/TypeScript/lint; smoke blog, sitemap/migración y nuevo `smoke:editorial-navigation` con SMOKE_BASE_URL explícito. Este último comprueba IDs seleccionados, destinos directos 200/canonical/robots, anclas de portada, controles con destino, schema y paginación. No sustituye la prueba funcional en navegador de menús, Escape/foco, enlaces, filtros y paginación. Revisar 390/412/768/1440 px: portada, página dos, artículo protegido y Home con nueva cabecera. Sin overflow, una H1 y recursos funcionales accesibles. Capturas antes/después y Preview exacta antes de cierre.

No Lighthouse nuevo todavía; no medir Core Web Vitals desde una captura. Sin prueba con lector de pantalla ni garantía de crecimiento SEO. Sin merge. Dudas de contenido REVIEW y fusiones WAIT anteriores permanecen; no son decisiones necesarias para mostrar una selección editorial conservando URLs.

## Estado

Candidato en desarrollo; validación y Preview pendientes. Tras revisión visual de José se decidirá publicación. La siguiente fase Home no se inicia por este cambio de cabecera.


## Hallazgo durante QA: metadata al paginar

La navegación cliente del candidato local cambiaba contenido/URL de página dos, pero dejaba título y canonical de portada incluso después de esperar la actualización. HTTP directo local (páginas 2/8) y producción (página 2) eran correctos; el mismo clic en Preview anterior 1b4c104 sí aplicó metadata de página dos. No atribuirlo sin más a un fallo previo de producción ni afirmar una causa interna del framework no demostrada.

Corrección acotada: BlogPagination usa enlaces HTML normales cuando pagina el archivo, conservando exactamente los href y labels existentes; carga la respuesta SSR con metadata propia. Los filtros siguen usando botones/estado cliente y scroll al catálogo. No cambiar metadata, canonical o política de indexación para ocultar el síntoma. Smoke nuevo comprueba páginas 2–8 completas; navegador debe confirmar el head tras un clic real. Se vuelve a compilar y verificar tras esta modificación. Coste: recarga completa entre páginas del archivo en lugar de transición cliente; no se cambian otros enlaces del sitio.


El smoke de sitemap detectó inicialmente 63/64: faltaba aria-current en el enlace secundario de Free tours al visitar su landing. Se conserva el check existente y se aplica el estado activo al enlace de Free tours y Entradas en el panel móvil; no se relaja la prueba. Recompilar antes de cierre. La primera observación del scroll de paginación filtrada fue durante la animación: la comprobación posterior confirmó catálogo a 96 px y resultados correctos; no se cambió ese comportamiento por una observación prematura.


## QA local cerrada

Build 137 páginas, TypeScript correcto; lint cero errores/un warning previo en ItineraryContextualCta.tsx:84. Blog 828 invariantes/97 enlaces sin rotos y ocho páginas rastreables; comparación de huella **74/74 idénticas**, incluidos 69 artículos y cinco redirects. Nueve archivos protegidos (artículos/datos, Home, Footer y contratos SEO) idénticos a a4c64b0. Migración local 1.426 controles; sitemap **64/64, 98 URLs** tras corregir aria-current. Smoke editorial **146 controles, 22 artículos seleccionados, 37 páginas consultadas**, sin fallos. La carga directa de páginas 2–8 conserva canonical/título propios.

Navegador local: dieciséis vistas (portada, página dos, Metro y Home × 390/412/768/1440), dos menús abiertos (390/768) y trece interacciones correctas: Tab/Escape/foco, clic fuera, anclas, cierre móvil, filtro de siete artículos de transporte, paginación filtrada y del archivo, metadata tras clic real y regreso a Historias. Menú abierto 495 px dentro del alto disponible; sin overflow ni H1 duplicada. La selección editorial permanece fuera del filtro del catálogo, intencionalmente; sus anclas siguen disponibles.

[Resumen](qa/2026-10-21/phase9-local-summary.json), [navegación](qa/2026-10-21/phase9-local-navigation.json), [conservación](qa/2026-10-21/phase9-preservation.json), [vistas](qa/2026-10-21/phase9-local-responsive.json), [interacciones](qa/2026-10-21/phase9-local-interactions.json), [antes escritorio](qa/2026-10-21/phase9-before-desktop.png). El loader de los datos TS emite un aviso Node MODULE_TYPELESS_PACKAGE_JSON: no fallo del smoke; no se cambia el tipo de todo el paquete para silenciarlo. Preview del código final pendiente; sin aprobación de publicación.


## Cierre de Preview — revisión visual pendiente

Código **69ec1281b4e038753f30157e17a57838c1471162**, deployment **dpl_8BzzpxL5djXs3H8DTsDZ5vbKn4oz**, READY, Preview (`target:null`): https://portugal-autentico-v2-qifmofubp-estabaenlisboa.vercel.app . Seis checks del código correctos: SEO smoke, TypeScript, GitGuardian, comentario automático y ambos proyectos Vercel. Acceso temporal entregado en conversación; token/cookie fuera de Git y cookie HTTP de QA solo en memoria. Sin cambiar protección/noindex de plataforma.

Migración remota **1.328 controles, cero fallos**, 98 URLs sitemap, 106 páginas y 16 redirects. Frente a 1.426 local, el script omite 98 checks de cabecera de plataforma en Preview, sin omitir la política HTML. Smoke editorial remoto **146/146**, incluidos títulos/canonicals de páginas 2–8 y 22 destinos de artículos. Navegador: dieciséis vistas, dos menús abiertos y trece interacciones correctas. Confirmados clic real a página dos con metadata propia y regreso a Historias con canonical de portada, esperando la metadata tras navegación cliente antes de evaluar. Sin overflow/H1 duplicada; menú de 495 px dentro del alto disponible.

[Resumen](qa/2026-10-21/phase9-preview-summary.json), [navegación](qa/2026-10-21/phase9-preview-navigation.json), [vistas](qa/2026-10-21/phase9-preview-responsive.json), [interacciones](qa/2026-10-21/phase9-preview-interactions.json). Capturas: [antes](qa/2026-10-21/phase9-before-desktop.png), [portada escritorio](qa/2026-10-21/phase9-preview-desktop.png), [secciones](qa/2026-10-21/phase9-preview-sections.png), [portada móvil](qa/2026-10-21/phase9-preview-mobile.png), [menú móvil](qa/2026-10-21/phase9-preview-menu-mobile.png).

Producción consultada conserva **5ad2c40 / dpl_BdGSFAuvGY1dudTfLHSU6MYdoWes READY**. Sin merge ni publicación. El commit posterior de cierre solo documenta el mismo código probado. Queda la revisión visual de José según L-003, incluida la cabecera compartida y el coste de carga completa al paginar. No iniciar el cuerpo de Home ni publicar por inferir aprobación de «sigue» a este trabajo de Preview. Las correcciones de cinco guías de Fase 7 están incluidas en el mismo candidato; REVIEW/WAIT del manifest permanecen.

## Revisión tras feedback de José — 22 octubre

Baseline: Preview 69ec128. El hub `/portugal`, enlazado como Escapadas, abría con un retrato grande de José en Oporto. Entradas quedaba entre recursos de Planifica y en el pie del menú móvil. Historias y Planifica eran dos anclas del mismo `/blog`. José pide corregir esos tres puntos; «sigue» autoriza continuar la revisión, no publicar.

Menú revisado: **Lisboa · Escapadas · Historias · Planifica · Entradas**. Entradas es enlace ordinario de primer nivel en ambas versiones hacia `/comprar-entradas`; no botón comercial destacado ni enlace móvil duplicado. Planifica abre `/planifica-tu-viaje`, página existente del servicio personal con alternativas gratuitas; se conserva su contenido y formulario sin enviar datos durante QA. Historias sigue abriendo la selección cultural `/blog#historias`, ahora con un destino distinto de Planifica. No se inventa una landing cultural ni se replica contenido del blog.

Escapadas sustituye el retrato de apertura y las imágenes Open Graph/Twitter por la foto existente del Palacio da Pena. Crédito visible CEphoto, Uwe Aranas / CC BY-SA 3.0 con enlaces a ficha y licencia; registro previo en `public/images/commons/CREDITOS.md`. No se modifica ni elimina el archivo personal ni sus otros usos. No se cambia el texto, H1, intención, canonical, schema o política SEO del hub. La única metadata diferente es la imagen social y sus dimensiones/ALT, coherentes con el nuevo recurso 1280×854.

Archivos de aplicación: `src/data/editorial-navigation.ts`, `src/components/Navbar.tsx`, `src/app/[locale]/portugal/page.tsx`; controles adicionales en `scripts/smoke-editorial-navigation.mjs` para destinos distintos, Entradas en ambos menús, fotografía de destino y conservación de noindex,follow. Sitemap, robots, redirects, artículos y sus datos no se tocan. Baseline visual: [Escapadas anterior](qa/2026-10-21/phase9-feedback-before.png).

El intento previo de compilación fue rechazado por un límite de uso de la revisión automática de permisos, no por una conclusión de inseguridad. Se reanuda tras la continuación de José el 22/10. Build del código final, checks, QA visual y nueva Preview pendientes. Riesgo: cambia un enlace global; comprobar llegada real, estado activo y cierre móvil. Sin merge ni producción; aprobación visual del conjunto pendiente según L-003.

Validación local del ajuste: build 137 páginas, TypeScript correcto y lint cero errores/un warning previo de ItineraryContextualCta. Smoke editorial 152 controles, 38 páginas consultadas y cero fallos; sitemap 64/64 con 98 URLs; blog 828 invariantes y 97 enlaces sin rotos. Dieciséis vistas DOM (Escapadas/Planifica/Entradas/blog × 390/412/768/1440 px), todas sin overflow y con una H1. Navegador confirma tres destinos desktop y cuatro móviles, cierre del panel al navegar y estados activos de Planifica/Entradas. Menú móvil con Lisboa expandido: 539 px dentro de los 780 disponibles a 390×844. Imagen de Pena cargada y crédito visible. No se envían formularios ni se inicia una compra. Archivos de artículos/datos y contratos SEO sin cambios frente a 9b6bc16.

Evidencia: [smoke local](qa/2026-10-22/navigation-feedback-local.json), [vistas](qa/2026-10-22/navigation-feedback-local-views.json), [clics](qa/2026-10-22/navigation-feedback-local-clicks.json). Preview del código final pendiente; la captura anterior no demuestra el resultado nuevo.

## Cierre del ajuste en Preview

Código **93c7a5a78671c15b17a1cdc2231cbf62ba6c40d1**, deployment **dpl_27MhFsLywmBFLycsJLyyB3BSo7ZS**, READY, `target:null`: https://portugal-autentico-v2-8yav1bvdy-estabaenlisboa.vercel.app . Seis checks correctos (SEO smoke, TypeScript, GitGuardian, comentario y ambos proyectos Vercel). Acceso temporal entregado en chat; no token/cookie en Git ni cambios a la protección de Preview.

HTTP remoto: **152/152** controles editoriales, 22 artículos y 38 páginas. Navegador remoto: las mismas dieciséis vistas DOM a 390/412/768/1440 sin overflow y con una H1, más los tres destinos desktop y cuatro móviles. Al seguir Historias hubo una observación anterior a completarse la transición cliente: se esperó explícitamente al destino antes de confirmar `/blog#historias`; no se cambió código ni se presentó esa primera observación como llegada correcta. Menú móvil 539 px dentro de 780 disponibles, se cierra al navegar; Escape restaura foco. Fotografía de Pena cargada, crédito visible y portada social coherente. No formularios enviados, compras ni cambios de auth.

[Smoke remoto](qa/2026-10-22/navigation-feedback-preview.json), [vistas](qa/2026-10-22/navigation-feedback-preview-views.json), [clics y menú](qa/2026-10-22/navigation-feedback-preview-clicks.json), [escritorio corregido](qa/2026-10-22/navigation-feedback-preview-desktop.png), [menú móvil](qa/2026-10-22/navigation-feedback-preview-menu.png). La comprobación de 16 vistas es DOM/responsive; las capturas revisadas de Escapadas y menú aportan evidencia visual, sin equivaler a una auditoría completa con lector de pantalla o Lighthouse. No métricas nuevas de CWV ni causalidad SEO.

Producción comprobada conserva **5ad2c40 / dpl_BdGSFAuvGY1dudTfLHSU6MYdoWes READY**. Canonicals, schema, sitemap, robots, redirects y artículos intactos respecto al candidato anterior; solo cambia imagen social de Portugal. El commit posterior de cierre contiene documentación/evidencia del mismo código probado. Sin merge ni publicación; L-003 mantiene pendiente la aprobación visual del conjunto. Las dudas REVIEW/WAIT y la selección estacional manual conservan sus condiciones anteriores.
