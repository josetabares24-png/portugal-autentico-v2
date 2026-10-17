# Migración SEO editorial — Fase 1

Fecha: 17 de octubre de 2026. Rama: `editorial-rebuild`. PR: [#112](https://github.com/josetabares24-png/portugal-autentico-v2/pull/112). **Candidato para Preview y revisión; no autorización de merge ni de producción.** La URL y el SHA de la Preview verificada se registran en ese PR.

## Decisión y límites

José pidió ejecutar por fases, con GitHub + Mente Lisboa como fuente de verdad. La auditoría previa está en [editorial-rebuild-audit.md](editorial-rebuild-audit.md); el baseline de producción es `83ca369`, con 110 URLs en sitemap. Sus continuaciones del 17/10 autorizan Fase 1 conservando dos excepciones expresadas antes de continuar:

- Restaurantes románticos y Novedades 2026 permanecen **WAIT**, accesibles, indexables y en sitemap. Su revisión completa y posible fusión corresponden a Fase 7.
- Checkout ya está retirado con redirección permanente a `/itinerarios`. Se conserva ese comportamiento; no se reconstruye para añadir una etiqueta noindex.

No se modifica intención, slug, title, description, H1, fecha, precio, fuente ni schema de los destinos. La actualización de enlaces sí retira navegación redundante. No hay rediseño, nuevas publicaciones ni cambios de autenticación.

## Redirecciones

Contrato ejecutable: [seo-url-policy.json](../src/data/seo-url-policy.json). Matriz HTTP: [seo-redirect-matrix.csv](seo-redirect-matrix.csv). Cada una de las 16 fuentes sin prefijo y sus variantes `/en`, `/ko`, `/es` debe responder **301 directamente al destino 200**, sin cadena. Se conserva la query. La matriz contiene 64 filas, no 64 decisiones de migración distintas.

| Fuente | Destino final |
|---|---|
| `/transporte` | `/blog/como-moverse-por-lisboa` |
| `/transporte-lisboa` | `/blog/como-moverse-por-lisboa` |
| `/apps` | `/blog/mejores-apps-lisboa` |
| `/presupuesto` | `/calculadora-presupuesto-lisboa` |
| `/blog/tarjeta-lisboa-card-vale-pena` | `/blog/lisboa-card-vale-la-pena` |
| `/blog/barrios-lisboa-donde-alojarse` | `/blog/donde-alojarse-en-lisboa` |
| `/blog/viajar-ninos-lisboa` | `/blog/lisboa-con-ninos` |
| `/blog/como-ir-sintra-desde-lisboa` | `/blog/sintra-desde-lisboa` |
| `/blog/descubridores-portugueses` | `/blog/descubrimientos-portugueses-lisboa` |
| `/blog/que-hacer-en-lisboa-en-3-dias` | `/itinerarios/lisboa-3-dias-premium` |
| `/itinerarios/lisboa-fotografia` | `/blog/donde-fotografiar-lisboa` |
| `/itinerarios/lisboa-romantica` | `/blog/lisboa-en-pareja` |
| `/free-tour` | `/free-tours-lisboa` |
| `/actividades/tranvia-28` | `/blog/tram-28-historia-guia` |
| `/actividades/mosteiro-jeronimos` | `/blog/monasterio-jeronimos-entradas` |
| `/actividades/sintra-dia-completo` | `/blog/sintra-desde-lisboa` |

Preflight antes de implementar: [evidencia pública](editorial-phase1-preflight.json), GET manual sin credenciales el 17/10 a las 08:40 UTC. Los 14 destinos únicos activos devolvieron 200, sin Location, canonical propio y sin noindex en robots, googlebot o cabecera. También se comprobaron los 15 destinos del conjunto de 18 instrucciones; comprobar el destino WAIT no autoriza su fusión.

`next.config.mjs` carga el contrato y coloca estas reglas antes de las históricas, eliminando del resultado cualquier regla histórica que coincida con su fuente. Se usa `statusCode: 301`, sin `permanent` en esas reglas. El resto conserva su comportamiento 308. Se retiran cuatro excepciones redundantes de `proxy.ts` para transporte/presupuesto con prefijo; no se toca el matcher de Clerk. La normalización global de barras finales de Next no cambia; la garantía de un salto se ha probado para los paths expresamente listados, sus aliases y query, no para toda variante arbitraria de URL.

## Indexación, sitemap y robots

Ocho páginas siguen siendo 200 y autocanónicas, con `noindex,follow` coherente en robots y googlebot:

`/comprar-entradas`, `/planifica-tu-viaje`, `/faq`, `/aviso-legal`, `/politica-privacidad`, `/politica-cookies`, `/terminos-condiciones`, `/actividades`.

El índice de actividades es un directorio de selección y filtros. Se excluye solo ese path, sin noindex por prefijo: **17 fichas conservan indexación**, y tres se redirigen por orden expresa. Los 20 registros originales de actividades permanecen para catálogo/panel y recuperación de información.

El sitemap servido pasa de **110 a 98 URLs**: ocho páginas funcionales noindex, el pilar de transporte y tres fichas redirigidas salen del XML. Permanecen los 68 artículos del catálogo, incluidos los dos WAIT. No se renuevan fechas lastmod sin cambios editoriales. El filtro central excluye fuentes redirigidas y noindex, además de parámetros y fragmentos.

`public/robots.txt` no cambia: permite contenido público y recursos esenciales; solo bloquea `/api/` y `/preview/`, y declara el sitemap de producción. Las ocho páginas noindex siguen rastreables. `/quiz` no existe y conserva 404 real; no se crea una página ficticia. Checkout conserva sus 308 previos.

Clerk: [clerk-indexing.md](clerk-indexing.md). El host de autenticación ya sirve `X-Robots-Tag: noindex, nofollow`; no se cambia DNS, proxy, claves ni sesión. Eso no demuestra que Google ya lo haya retirado del índice.

## Enlaces y preservación editorial

Se actualizan hrefs literales y límites dinámicos en tarjetas, cuerpo, relacionados, enlaces editoriales, pilares y footer. El helper común preserva query/fragmento y solo reconoce las 16 migraciones expresas. No sustituye IDs del catálogo ni identificadores de reservas. No convierte la metadata de una ficha retirada en la de otro tipo de página.

Se eliminan cuatro entradas de navegación que se convertirían en autorreferencias: enlace del cuerpo de Sintra a su ficha, enlace del cuerpo del Tram a su ficha, enlace relacionado de Jerónimos a su ficha y enlace relacionado de Cómo moverse al pilar retirado. También se deduplican destinos ya presentes en listas editoriales. Esto elimina etiquetas de navegación visibles; no es una fusión ni una reescritura del contenido informativo. Comparación completa: [informe del blog](editorial-phase1-blog-comparison.md).

Inventario de información propia de las fuentes que antes servían 200:

- Transporte: su tabla compacta y algunos ejemplos tarifarios no se incorporan a ciegas a Cómo moverse. El archivo original se conserva. La comparación situación → transporte pertenece al piloto posterior; no se afirma que ya esté implementada.
- Tram: no trasladar una promesa de subir sentado que la guía actual matiza. Se conservan los registros históricos sin convertirlos en hechos recién verificados.
- Jerónimos: la guía actual ya distingue iglesia/claustro, entradas y franjas de grupos. Se conserva su matiz y su contenido reciente.
- Sintra: se conserva el plan realista y el margen para Pena del destino. No se convierte la lista de cuatro atracciones de la ficha en una jornada obligatoria.

No se verificaron de nuevo precios/horarios en Fase 1 porque no se modificaron. No se afirma un efecto en clics o impresiones: el cambio aún no está en producción y no hay nueva ventana Search Console atribuible.

## QA y archivos

Validación local del build candidato:

- `npm run build`: correcto, 137 páginas generadas; `typecheck`: correcto.
- `npm run lint`: cero errores; permanece un warning previo de dependencias de useEffect en `ItineraryContextualCta.tsx:84`. Lint dirigido de los cinco scripts modificados: correcto.
- `smoke:seo-migration`: **1.426 comprobaciones, cero fallos**, 98 URLs de sitemap, 106 páginas y 113 destinos internos únicos. Incluye 16 fuentes/64 variantes, query, WAIT, noindex, canonical, H1, metadata, schema JSON parseable, robots, 404 y enlaces sin 3xx/4xx.
- `smoke:sitemap`: **64/64**; XML final validado también con el parser XML de .NET, 98 elementos URL. El smoke valida la envoltura y contenido del XML; no se presenta su regex como un parser XML completo.
- `smoke:activities`: **120/120**, sin herencia de noindex en las 17 fichas.
- `smoke:itineraries`: **26/26**; `smoke:titles`: **19/19**.
- `smoke:blog`: 69 artículos, 828 invariantes, 97 enlaces internos, cero rotos. El comparador estricto detecta los cambios de navegación previstos; no se declara byte a byte idéntico.

### Cierre de QA remoto — 17/10/2026

Preview comprobada: `https://portugal-autentico-v2-pwm59famq-estabaenlisboa.vercel.app`, deployment `dpl_Fswp4Rgmsho56SfoF5HRsbFbwfCq`, commit **`861aa95d415dd8b901b2219e4668e8888bee7a8b`**, rama `editorial-rebuild`, estado READY y entorno Preview (`target: null`). Los commits posteriores que añaden esta evidencia son solo documentación; no cambian el código comprobado.

José autorizó expresamente el enlace temporal al responder «Continua si» a la pregunta sobre acceso sin login durante unas 23 horas. Se creó para esta Preview, sin desactivar la protección del proyecto. El token de acceso se entrega en la conversación, no se guarda en GitHub, brain, capturas ni informes. El adaptador local de HTTP conserva la cookie solo en memoria y la envía únicamente al origen aprobado; no es código de la aplicación.

- Migración remota: **1.328 comprobaciones, cero fallos**, 16 fuentes y 64 variantes con 301 → 200 en un salto, query conservada, 98 URLs en sitemap, ocho noindex, 106 páginas y 113 destinos internos correctos.
- Sitemap remoto: **64/64**. El XML servido también pasó el parser XML de .NET, con 98 elementos URL.
- Las 98 comprobaciones de cabecera que sí existen en local se omiten en Preview por la política de cabeceras de ese entorno. En las respuestas observadas, 102 páginas incorporan `X-Robots-Tag: noindex`; cuatro de itinerarios conservan `index, follow`. Por eso 1.426 local y 1.328 remoto no son coberturas distintas de URLs: las etiquetas HTML de aplicación se verifican en ambos. Cada cabecera queda registrada en la evidencia; no se afirma que sea uniforme.
- Revisión visual de Home en 390 y 1440 px; catálogo y artículo del Tranvía 28 en 390, 412, 768 y 1440 px, sin desbordamiento horizontal. Menú móvil abre/cierra. Buscar «tranvía» en el catálogo devuelve su tarjeta y abre directamente `/blog/tram-28-historia-guia`, que conserva canonical propio e indexación en HTML.
- Capturas de Preview: [escritorio](qa/2026-10-17/phase1-preview-desktop.png) y [móvil](qa/2026-10-17/phase1-preview-mobile.png). No representan un nuevo rediseño: verifican la interfaz conservada.

Evidencia, comparación local/Preview y límites: [editorial-phase1-preview-qa.md](editorial-phase1-preview-qa.md) y [JSON](editorial-phase1-preview-qa.json). Los checks de GitHub TypeScript y SEO smoke pasaron para el commit comprobado. No se ejecutaron compras, formularios, endpoints de campaña, acceso al panel ni cambios de producción.

Archivos de ejecución: `next.config.mjs`, `src/proxy.ts`, `src/data/seo-url-policy.json`, `src/lib/seo-url-policy.ts`, `src/app/sitemap.ts`, metadata de las ocho páginas y componentes de enlaces enumerados en el diff del PR. QA: cuatro scripts existentes ajustados, nuevo `smoke-seo-migration.mjs` y `package.json`.

**Límite de CI:** GitHub rechazó el primer push porque la conexión OAuth carece de scope `workflow`. Se conservó el workflow original y se guardó la mejora propuesta en [seo-ci-workflow.patch](seo-ci-workflow.patch), sin aplicarla a GitHub Actions. El workflow existente sí se activa en este PR por `next.config.mjs` y ejecuta el smoke de sitemap reforzado. La nueva prueba `smoke:seo-migration` se valida localmente y en Preview; aún no está conectada al workflow. El parche amplía los paths y añade esa prueba para una intervención futura con permisos adecuados. No se amplían permisos ni se eluden protecciones.

El [manifest CSV](seo-url-manifest.csv) contiene 127 filas: las 106 páginas verificadas del candidato, las 16 fuentes expresas, dos redirects históricos adicionales observados en el snapshot, el artículo huérfano noindex, quiz inexistente y el patrón checkout. Los aliases de idioma se detallan en la matriz separada; no pretende enumerar infinitas variantes de parámetros o patrones. Registra páginas y decisiones para revisión. No autoriza futuras migraciones por sí solo: cualquier cambio requiere revisar GitHub + Mente Lisboa, evidencia, contrato JSON y manifest juntos. No ejecutar el CSV como un script de publicación.

## Gate y riesgos

**STOP al terminar Fase 1.** Preview y revisión antes de Fase 2; no merge ni despliegue de producción. Las fuentes/TOC/CTA, sistema Lo esencial, siete pilotos, navegación y Home no se implementan en esta fase. No hay Lighthouse nuevo: esta fase no incluye intervención visual o de performance; no atribuirle mejoras de Core Web Vitals.

La Preview de Vercel puede llevar noindex de plataforma. Las pruebas distinguen esa cabecera del robots HTML de la aplicación y registran ambas; no se elimina protección de Preview para simular producción.

Riesgos residuales: retirada de URLs que antes eran 200 requiere que Google recrawlee; no se garantiza crecimiento automático ni ausencia de fluctuación. Los datos propios conservados de las fuentes requieren revisión editorial antes de reutilizarlos. Las dos fusiones WAIT y el conflicto Cascais siguen pendientes. El endpoint Brevo sin control de acceso detectado en Fase 0 es deuda separada; no se ejecutó ni se cambió.

Si José aprueba publicar en una fase posterior: verificar build/CI, revisar matriz en la Preview exacta, merge mediante proceso normal y volver a comprobar en el alias real redirects/sitemap/robots/noindex/canonicals/schema y páginas protegidas. No solicitar indexación ni reenviar sitemap como parte de esta Preview. Si surge una URL dudosa fuera del contrato, dejarla sin migración y reportarla.
