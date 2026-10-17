# Reconstrucción editorial — Fase 0

**Cierre:** 17 de octubre de 2026. **Estado:** auditoría terminada; STOP + REVIEW antes de Fase 1.

**Continuación posterior:** José autorizó continuar con las dos excepciones descritas en [seo-migration.md](seo-migration.md). Ese informe registra Fase 1 y su gate; el contenido siguiente conserva el diagnóstico previo a implementar.

**Repositorio:** `josetabares24-png/portugal-autentico-v2`. **Rama de trabajo:** `editorial-rebuild`. **Base auditada:** `83ca369b477d578f5a63004b461550bdcf706f89`, también HEAD de `origin/main` al comprobarlo de nuevo el 17/10. Árbol inicialmente limpio.

El dominio público sirve esa misma revisión: deployment Vercel `dpl_FcVmwVr8u8p5zzdwiUmDNeNo36jz`, `READY`, entorno `production`, listo el **15/10 a las 14:21:48 de Lisboa**. El alias se volvió a consultar el 17/10 y no había cambiado. Consultar despliegues no ha publicado nada.

## Alcance y decisión

Se inspeccionaron código, routing, contenido, plantillas, datos, servicios, memoria del proyecto, CI y producción. Se leyeron `AGENTS.md`, `brain/MENTE-LISBOA.md`, `brain/LOCKED-DECISIONS.md`, estado, métricas, decisiones y el snapshot de Search Console del 15/10.

- **HECHO:** las 110 URLs del sitemap público responden 200 y no declaran noindex en la comprobación HTTP del 16/10. Los 15 destinos únicos de las 18 redirecciones solicitadas también responden 200, permiten indexación y son autocanónicos.
- **DIAGNÓSTICO:** hay fuentes de contenido separadas, capas legacy y una política comercial que en algunos artículos se adelanta a la respuesta completa. La base existente permite evolucionar sin rehacer framework, marca ni todo el contenido.
- **HIPÓTESIS:** ordenar intención, respuesta y siguiente paso puede mejorar utilidad y CTR. Esta auditoría de repositorio no demuestra que un CTA o un solapamiento concreto haya causado una caída de Google.
- **PREFERENCIA actual de José:** publicación editorial sobre Lisboa y Portugal; respuesta, contexto y experiencia antes de monetización. Esta instrucción prevalece sobre tácticas comerciales anteriores cuando sean incompatibles.
- **DECISIÓN de Fase 0:** no modificar todavía páginas, textos, rutas, indexación, scripts ni configuración externa. Documentar el plan ejecutable y las dos ambigüedades de alcance. No hacer merge ni desplegar a producción.

La fotografía anterior de “110 URLs técnicamente sanas” sirve como baseline de rastreo, pero no acredita por sí sola arquitectura, pertinencia comercial, calidad del contenido, seguridad de APIs o experiencia móvil.

## 1. Stack comprobado

Versiones efectivas de `package-lock.json`, no solo rangos de `package.json`:

| Capa | Estado |
|---|---|
| Framework | Next.js **16.3.5**, App Router; build con Turbopack |
| UI | React / React DOM **19.2.3**; TypeScript **5.9.3** |
| Estilos | Tailwind **3.4.19**, CSS global y clases editoriales; Lucide |
| Idioma | next-intl **4.13.5**; solo `es`, `localePrefix: never`, sin cookie de locale |
| Autenticación | `@clerk/nextjs` **6.39.6**, restringido al panel y rutas concretas |
| Datos auxiliares | Supabase JS **2.90.1**; Redis/Upstash para límites y servicios |
| Markdown | react-markdown **10.1.0** + remark-gfm **4.0.1**, principalmente legales; no es el motor del blog |
| Fuentes tipográficas | `next/font/local`: Montserrat, Playfair Display y Plus Jakarta Sans |
| Hosting | Vercel, `framework: nextjs`, build `npm run build`, región `iad1` |
| CI | GitHub Actions, Node 20; typecheck y workflow SEO por rutas |

No hay Pages Router ni CMS remoto que gobierne el blog. No hace falta incorporar MDX, un CMS nuevo ni otra librería para la primera migración. Los tipos de React del lockfile son 18.3.27 frente a runtime React 19: deuda de alineación para una tarea separada, no motivo para actualizar dependencias durante esta fase.

Archivos: `package.json`, `package-lock.json`, `next.config.mjs`, `vercel.json`, `tsconfig.json`, `tailwind.config.js`, `src/app/globals.css`, `src/i18n/{routing,request}.ts`.

## 2. Estructura actual y flujo de petición

1. `next.config.mjs` resuelve redirects antes del archivo de página. Hay **79 reglas**, incluidas variantes legacy de idioma.
2. `src/proxy.ts` resuelve excepciones de rutas antiguas y selecciona Clerk o next-intl según la ruta. No es un proxy de la Frontend API de Clerk.
3. `src/app/layout.tsx` aporta HTML español, metadata por defecto, fuentes locales, Organization/WebSite y enlace de salto al contenido.
4. `src/app/[locale]/layout.tsx` fija locale para permitir prerender, y monta Navbar, Footer, ErrorBoundary, cookies, GA4 y Stay22.
5. Las páginas concretas generan contenido y metadata. Hay **36 archivos `page.tsx`, 11 layouts y 33 archivos con metadata/generateMetadata**; no equivalen al número de URLs, porque existen rutas dinámicas y redirecciones.

| Superficie | Fuente y render |
|---|---|
| Home | `[locale]/page.tsx`, HomeEssentials, TravelerDirectory y selección de artículos |
| Blog | `blog-posts.ts` + cuerpos en `blog/[slug]/page.tsx`; renderer editorial compartido |
| Pilares | Qué ver / Dónde comer / Transporte, datos propios y `TravelPillarPage` |
| Actividades | `activities.ts`; índice cliente con filtros; fichas SSG; algunas usan guías de entradas de `ticket-guides.ts` |
| Itinerarios | Tres rutas core con páginas propias, datos TS y componentes; ruta genérica adicional con `guide-store` y fallback local |
| Herramientas | Calculadora cliente, plan de viaje, contacto, bajas; APIs de PDF/email y servicios |
| Legales | Markdown embebido en las páginas y `LegalPageLayout`; también hay copias en `public/legal/` que no deben confundirse con la fuente renderizada |
| Panel | `/admin`, dinámico, Clerk y Supabase; noindex/nofollow |

El build limpio generó **137 rutas**. Blog de artículo y fichas se prerenderizan desde parámetros; `/blog` es dinámico por `searchParams`; admin/APIs son dinámicos. El árbol de build muestra `/es` interno: el routing público no expone ese prefijo por defecto.

### Itinerarios y funciones que deben preservarse

- `src/data/itineraries/*` conserva tres rutas core y datos de itinerarios retirados. Algunos registros legacy siguen siendo necesarios para el panel; eliminar su URL pública no autoriza borrar esos datos.
- `src/lib/guide-store.ts:53` y `:93` consultan Supabase y recurren a datos locales. El blog no depende de esa tabla.
- `PremiumContent.tsx` carga el mapa cliente con `ssr: false`; el cuerpo útil de las rutas permanece en HTML de servidor. El mapa actual usa un iframe de Google, aunque algún comentario viejo lo describe como Leaflet.
- Calculadora, PDF solicitado por email y planificación son funciones diferentes de una newsletter. Mantener esa separación y L-007.
- Checkout/Stripe no están activos: quedan variables legacy y redirecciones, no una tienda que haya que conservar o restaurar.

## 3. Cómo se publican los artículos

### Tres fuentes manuales que hoy deben mantenerse sincronizadas

- **Catálogo:** `src/data/blog-posts.ts`, **68 registros publicados**. Alimenta portada, cards, paginación, relacionados, `generateStaticParams` y sitemap.
- **Cuerpo:** `src/app/[locale]/blog/[slug]/page.tsx:19`, objeto `articles`, **75 definiciones**. Cada artículo contiene bloques tipados parcialmente, fechas, fuentes, links y overrides SEO.
- **Presentación/relaciones:** mapas de imágenes/ALT/fotos de sección, `blog-related.ts`, `blog-booking-placements.ts` y `articleExtras`.

No hay frontmatter de Markdown ni publicación automática desde un CMS. Añadir una definición al objeto no la convierte en publicación: si falta en `blogPosts`, la metadata declara `noindex, follow` y no se añade al sitemap ni al prerender publicado.

Los **siete cuerpos fuera del catálogo** son seis slugs ya redirigidos y `evitar-turistadas-lisboa`, conservado como cuerpo noindex fuera del listado. No publicar los siete accidentalmente al migrar el modelo. Los conteos históricos de 60/69 artículos no sustituyen este inventario; catálogo, cuerpos y páginas comprobadas por un smoke son conjuntos distintos.

`ArticleBlock.tipo` es hoy un `string`, no una unión discriminada; tipos desconocidos pueden acabar en `return null`. `ArticleBody` convierte el primer párrafo en entradilla y recorre `contenido.slice(1)`: las siete prioridades empiezan por párrafo, pero una futura variante que no lo haga necesita un contrato explícito para no perder/repetir contenido.

### Fechas, fuentes y autoría

- Se separan fecha de publicación, etiqueta visible `fechaActualizacion` y `dateModified`. No todas se actualizan en las mismas fuentes.
- Ejemplo verificable: Navegante tiene `dateModified: 2026-10-09` en el cuerpo, pero no en su registro de catálogo; el sitemap recurre a la fecha de publicación. Corregir sincronización cuando corresponda, sin inventar que se revisó hoy.
- `ArticleSource` solo guarda `label` y `href`; no modela comprobación por fuente ni afirmación. El rótulo “Dato verificado” de un bloque `nota` no acredita por sí solo una validación.
- José ya aparece en header, JSON-LD y cierre con avatar, bio y enlace a `/sobre-nosotros`; esa página incluye el método y ProfilePage. No se necesita inventar autoridad ni experiencia.

### Las siete páginas piloto: baseline editorial

| URL bajo `/blog/` | Estado útil que debe preservarse | Intervención futura acotada |
|---|---|---|
| `metro-lisboa-guia` | Entradilla con horario/billete/líneas, mapa oficial temprano; 3 fuentes; sin bloque afiliado de cuerpo | Hacer escaneable horario/precio/mapa/uso/aeropuerto sin cambiar slug/snippet por inercia |
| `tarjeta-navegante-lisboa` | Tabla de tarifas y cuentas de compensación; 7 fuentes | Conservar texto ganador; bajar Lisboa Card después de explicar qué comprar y las cuentas |
| `como-pagar-en-portugal` | Tarjeta/efectivo, aceptación y cargos separados; 4 fuentes; sin afiliado | Jerarquía de tarjeta, efectivo, Multibanco, comisiones y contactless; disclaimers secundarios después |
| `como-moverse-por-lisboa` | Respuesta panorámica, caminar/Metro/tren; 8 fuentes | URL maestra con situación → transporte, sin absorber el trabajo específico de Metro |
| `time-out-market-lisboa` | Food hall frente a mercado, puestos, mesas y presupuesto; 5 fuentes | Resumen de decisión; tour después de menú/precios/para quién; preservar mejora del 15/10 |
| `estacion-oriente-lisboa` | Niveles y conexiones de tren/Metro/bus; 5 fuentes | Resolver conexión y accesos primero; no empezar con Oceanário. Hoy hay dos bloques Oceanário y cierre de planificación |
| `vida-nocturna-lisboa` | Barrios por ambiente, vuelta y enlaces contextuales; 4 fuentes | Bloque ambiente → zona, preservando la información y enlaces actuales |

Ninguna de las siete define hoy `resumen`: **no se les muestra una caja automática Lo esencial**. El modelo futuro de 4–7 filas label/value no debe copiar listas del cuerpo ni fijar tarifas comunes en el componente.

Metro y Time Out forman parte de E-016, recién publicado el 15/10. El snapshot guardado del 15/10 usa días cerrados 14/09–11/10; no evalúa ese despliegue. No reabrir sus títulos/metas ni atribuir resultados a una plantilla todavía inexistente.

## 4. Metadata, canonical y structured data

### Metadata

- Root define `metadataBase`, título con plantilla de marca, descripción, robots/googleBot, Open Graph, Twitter e iconos.
- Blog `generateMetadata` (`page.tsx:5669` aproximadamente) usa `seoTitle`/`metaDescription` cuando existen, o helpers para título y descripción. Hay títulos congelados y control del sufijo; no saltarse esas protecciones.
- H1 usa el título editorial, mientras title puede usar `seoTitle`; bajada usa `subtitulo ?? descripcion`. Conservar esa distinción al reorganizar el modelo.
- Canonical del artículo es absoluto y propio; draft fuera del catálogo recibe noindex. Pilares, fichas y funcionales inspeccionadas también tienen canonical propio.
- `/blog?page=N` tiene canonical paginado y enlaces de paginación reales; no está en sitemap. Excluir parámetros del XML no autoriza borrar el acceso a páginas siguientes.

El fallback de `src/app/layout.tsx:95–97` apunta al dominio raíz. **No se encontró que las funcionales inspeccionadas lo hereden erróneamente**: lo sobrescriben. Sí aparece en respuestas 404. Una nueva página no debe heredar el apex accidentalmente. Al cambiar robots de compra/planificación habrá que actualizar también su bloque `googleBot` explícito.

### Datos estructurados y breadcrumbs

| Superficie | Implementación que debe conservarse/verificarse |
|---|---|
| Global | `SchemaMarkup.tsx`: Organization y WebSite con IDs estables |
| Blog | BlogPosting, Person referenciada, WebPage principal y BreadcrumbList; FAQPage solo si hay preguntas visibles definidas |
| Pilares | Article y BreadcrumbList; contenido completo y fuentes |
| Actividades | TouristAttraction y BreadcrumbList; las guías de entradas añaden Article y FAQ visible cuando existe |
| Itinerarios | CreativeWork gratuito donde corresponde y breadcrumbs con microdatos en `Breadcrumbs.tsx`/`ItineraryHero.tsx` |
| Calculadora/hub rutas | FAQPage ligado a preguntas visibles; comprobar contrato al tocar esas páginas |
| Autor | ProfilePage/Person, sin inventar credenciales |

La presencia de Organization global no garantiza schema específico o útil de cada página. Tampoco buscar solo JSON-LD demuestra que falten breadcrumbs: los itinerarios incluyen microdatos. No añadir Product, ratings ni ofertas ficticias. La elegibilidad de rich results y la validez sintáctica son comprobaciones distintas.

## 5. Sitemap y robots

`src/app/sitemap.ts` genera el XML desde cuatro fuentes:

| Fuente | URLs actuales |
|---|---:|
| Estáticas | 19 |
| Itinerarios públicos core | 3 |
| Actividades con `indexable` | 20 |
| Registros publicados del blog | 68 |
| **Total** | **110** |

Los cuatro itinerarios retirados ya se filtran; sus datos permanecen. Artículos usan `dateModified` del catálogo o fecha española validada; guías de entradas pueden aportar fecha propia. No se usa la fecha actual indiscriminadamente como última modificación.

`public/robots.txt` permite `/`, bloquea `/api/` y `/preview/`, y declara `https://estabaenlisboa.com/sitemap.xml`. No bloquea CSS/JS. Next añade noindex/nofollow al panel admin mediante metadata y cabecera.

Fase 1 debe excluir las páginas que pasen a noindex y las fuentes que redirijan. **No** añadirlas a `Disallow`: Google necesita poder rastrear su noindex. Robots del dominio raíz tampoco gobierna un subdominio servido por Clerk. [Referencia de Google](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=es).

Proyección de control, sin ejecutar las dos consolidaciones pendientes: **99 URLs**, o **98** si se decide noindex del índice `/actividades`. Parte de 110 y resta siete funcionales hoy indexables, `/transporte-lisboa` y tres fichas redirigidas. No es un objetivo de volumen ni autoriza eliminar páginas para alcanzar esa cifra.

## 6. Redirects: las 18 instrucciones frente al estado real

Preflight público del **16/10, 21:30 de Lisboa**: 50 rutas leídas con redirección manual y sin credenciales. **Los 15 destinos únicos son 200, indexables, autocanónicos y no redirigen.** Evidencia compacta: [editorial-rebuild-baseline.json](editorial-rebuild-baseline.json).

Las reglas actuales usan `permanent: true`, que en Next entrega **308**. El contrato de José exige **301 exacto → final 200, un salto**. En la futura Fase 1 se usará `statusCode: 301` en las reglas autorizadas, sin combinarlo con `permanent`, y se probará el resultado real. No convertir indiscriminadamente las otras reglas históricas. [Documentación de Next](https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects).

| # | OLD | FINAL solicitado | Estado observado de OLD | Acción futura |
|---:|---|---|---|---|
| 1 | `/transporte` | `/blog/como-moverse-por-lisboa` | 308 al destino correcto | Mantener destino; 301 exacto en esta regla |
| 2 | `/transporte-lisboa` | `/blog/como-moverse-por-lisboa` | 200 propio | Nueva redirección; preservar/revisar diferencias útiles antes de retirarla |
| 3 | `/apps` | `/blog/mejores-apps-lisboa` | 308 correcto | Mantener destino; 301 exacto |
| 4 | `/presupuesto` | `/calculadora-presupuesto-lisboa` | 308 a `/blog/presupuesto-viajar-lisboa` | Cambiar destino por la instrucción explícita de José |
| 5 | `/blog/tarjeta-lisboa-card-vale-pena` | `/blog/lisboa-card-vale-la-pena` | 308 correcto | Mantener destino; 301 exacto |
| 6 | `/blog/barrios-lisboa-donde-alojarse` | `/blog/donde-alojarse-en-lisboa` | 308 correcto | Mantener destino; 301 exacto |
| 7 | `/blog/viajar-ninos-lisboa` | `/blog/lisboa-con-ninos` | 308 correcto | Mantener destino; 301 exacto |
| 8 | `/blog/como-ir-sintra-desde-lisboa` | `/blog/sintra-desde-lisboa` | 308 correcto | Mantener destino; 301 exacto |
| 9 | `/blog/descubridores-portugueses` | `/blog/descubrimientos-portugueses-lisboa` | 404 | Añadir alias 301 |
| 10 | `/blog/que-hacer-en-lisboa-en-3-dias` | `/itinerarios/lisboa-3-dias-premium` | 308 correcto | Mantener destino; 301 exacto |
| 11 | `/itinerarios/lisboa-fotografia` | `/blog/donde-fotografiar-lisboa` | 308 correcto | Mantener destino; 301 exacto |
| 12 | `/itinerarios/lisboa-romantica` | `/blog/lisboa-en-pareja` | 308 correcto | Mantener destino; 301 exacto |
| 13 | `/free-tour` | `/free-tours-lisboa` | 404 | Añadir alias 301 |
| 14 | `/actividades/tranvia-28` | `/blog/tram-28-historia-guia` | 200 propio | Redirección selectiva 301; actualizar enlaces/sitemap |
| 15 | `/actividades/mosteiro-jeronimos` | `/blog/monasterio-jeronimos-entradas` | 200 propio | Igual; conservar destino reciente y su intención |
| 16 | `/actividades/sintra-dia-completo` | `/blog/sintra-desde-lisboa` | 200 propio | Igual; no alterar otras fichas por extensión |
| 17 | `/blog/restaurantes-romanticos-lisboa` | `/blog/lisboa-en-pareja` | 200 propio | **WAIT: conflicto de orden Fase 1 / Fase 7** |
| 18 | `/blog/novedades-lisboa-2026` | `/blog/festivales-eventos-lisboa-2026` | 200 propio | **WAIT: conflicto de orden Fase 1 / Fase 7** |

Balance: nueve destinos ya implementados, un cambio de destino y ocho reglas nuevas, de las que dos quedan pendientes de orden. El análisis literal de las 79 reglas no encuentra cadenas o fuentes duplicadas entre literales; no sustituye probar regex, idiomas, barra final y parámetros.

Los aliases `/en`, `/ko` y `/es` existentes se deben revisar al actualizar una fuente. En particular, presupuesto tiene excepciones en `src/proxy.ts:9–18`. Añadir primero reglas específicas antes del catch-all evita dos saltos. No ampliar a slugs no autorizados.

## 7. Clerk: servicio, cabeceras actuales y límites

### Autenticación de la aplicación

`ClerkProvider` se monta solo en `src/app/admin/layout.tsx:23`, dinámico y noindex/nofollow. `src/proxy.ts` exige sesión en `/admin`, `/app` y `/api/admin`; `/api/reviews` inicializa Clerk y el POST comprueba usuario. Las otras APIs no reciben protección de Clerk automáticamente.

El layout editorial público no tiene ClerkProvider ni comprobación de sesión. Mantener ese aislamiento para no convertir artículos SSG en dependientes de autenticación. `NavbarAuthSlot` y `ReviewForm` existen sin consumidores activos encontrados; no presentarlos como un coste global medido.

### Comprobación pública del 17/10

| Recurso | Resultado |
|---|---|
| DNS `clerk.estabaenlisboa.com` | CNAME a `frontend-api.clerk.services` |
| `https://clerk.estabaenlisboa.com/` | 200, application/json, `X-Robots-Tag: noindex, nofollow` |
| `/robots.txt` en ese host | 404, application/json, misma cabecera noindex/nofollow |
| `/.well-known/jwks.json` | 200, application/json, misma cabecera noindex/nofollow |

**Conclusión:** la respuesta de Clerk ya pide noindex. El 404 de robots no implica ausencia de esa directiva. La señal de Google del 8/10 era histórica; no se volvió a inspeccionar el índice de Google en esta Fase 0 y no se afirma que el subdominio ya haya desaparecido de los resultados.

No cambiar CNAME, certificados, claves ni endpoints. No hace falta construir un proxy por SEO. No hay FAPI proxy/rewrite configurado en este repo; añadir un header a la app Next no controla una respuesta servida por ese CNAME.

Fase 1E debe crear `docs/clerk-indexing.md` con este baseline y estos pasos:

1. Repetir GET de raíz y un endpoint público para conservar evidencia de noindex.
2. Inspeccionar la URL histórica en Search Console y registrar fecha de último rastreo, sin solicitar retiradas ni cambiar autenticación por defecto.
3. Si sigue indexada con rastreo anterior a la comprobación del 17/10, registrar ese desfase y observar el procesamiento/rastreo; no bloquearlo en robots. No consta desde cuándo Clerk emite la cabecera: esa fecha no se puede deducir del rastreo histórico.
4. Si un nuevo rastreo sigue mostrando un problema, confirmar en Clerk **Domains → Frontend API** que el host corresponde a esta instancia y consultar a soporte con los headers observados. No inventar un interruptor “SEO” ni un valor DNS.
5. Un cambio de proxy/autenticación sería otra intervención, con QA de login/sesión/logout y autorización específica.

Referencias: [producción Clerk](https://clerk.com/docs/guides/development/deployment/production), [proxy FAPI](https://clerk.com/docs/guides/dashboard/dns-domains/proxy-fapi), [noindex de Google](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

## 8. Componentes globales y experiencia editorial

### Fuentes y “En este artículo”

`ArticlePage` invoca una vez `ArticleToc` y una vez `ArticleSources`. Cada componente genera dos variantes DOM con clases mutuamente excluyentes: móvil en `<details>` y escritorio en `hidden lg:block`.

En producción, Vida nocturna mostró **un índice y una lista de cuatro fuentes visibles** en escritorio y a 390 px. Se abrieron ambos acordeones móviles; H1 único, canonical propio y `scrollWidth 382 <= 390`. En los cuerpos de Vida nocturna y Eventos no se encontró una segunda bibliografía. Las menciones narrativas de Visit Lisboa no son otra lista.

No está confirmado el defecto de “dos bloques visibles” que motivaba la petición. Fase 2 debe distinguir duplicación real, duplicación DOM responsive y repetición editorial. Puede unificar presentación y reducir ruido sin borrar fuentes reales. El objetivo habitual de 2–5 no debe recortar automáticamente las siete de Navegante ni las ocho de Movilidad.

### CTA y monetización

- `blog-booking-placements.ts` declara productos y posición por artículo; `booking-blocks.ts` resuelve proveedor, referencia y campaña en servidor. Sin oferta válida, no pinta el bloque.
- `ArticleBody.tsx:55–80` interpreta `after-summary` como cierre de la primera sección con texto, no como prueba de que toda la intención esté respondida. Navegante muestra Lisboa Card antes de “Qué comprar según tu viaje”; Time Out ofrece tour antes de su sección de menú/puestos; Oriente intercala dos Oceanário.
- `ArticleFooter.tsx:19–41` añade siempre planificación. El campo `article.cta` existe, pero no controla el cierre. El total de salidas comerciales puede superar la futura pauta aunque el registro tenga como máximo dos bloques afiliados.
- Conservar enlaces editoriales útiles, disclosure, `sponsored`, parámetros de atribución y fallback. Limitar CTA no significa borrar enlaces de navegación o fuentes oficiales.

### Navegación, cards, Home y blog

- Navbar tiene **Guías / Free tours / Entradas**, compartidos en móvil/escritorio. El menú móvil tiene nombre y `aria-expanded`; revisar teclado/foco completos en el futuro QA, no asumir auditoría WCAG concluida.
- La Home conserva la frase de marca y ocho respuestas propietarias. Pero `HomeEssentials` (“Imprescindibles para reservar”) aparece antes de `TravelerDirectory`: tensión comprobable con utilidad primero, no prueba causal de pérdida SEO.
- `/blog` ya tiene un destacado, tres secundarios y bloques paginados; no es una cuadrícula completamente indiferenciada. La selección depende del orden del catálogo y sus filtros son estado cliente. `EditorialArticleCard` ya admite variantes; evolucionarlas antes de crear otro sistema de cards.
- Related usa mapa editorial, categorías y registros publicados, deduplica y limita a tres. La lista de links evita repetir destinos del cuerpo/related. Conservar ese trabajo al contextualizar el cierre.
- Footer enlaza Portugal, pilares, guías, free tours, contacto y legales. Debe actualizar el enlace a Transporte cuando esa URL se redirija; las legales deben seguir accesibles aunque sean noindex.
- Lisboa / Escapadas / Historias / Planifica y la portada editorial propuesta son fases futuras con contenido real y Preview; no se implementan aquí.

### Scripts, medición y rendimiento

- GA4 solo se inicia con consentimiento explícito y hostname público. La corrección del 14/10 excluye localhost/Preview y maneja revocación/reaceptación. No comparar sus sesiones con etapas de colección distinta como si fueran tráfico perdido.
- Stay22 carga globalmente tras consentimiento, `lazyOnload`; modifica enlaces y excluye GetYourGuide. Mantener esa exclusión y comprobar enlaces tras hidratación, no solo HTML inicial.
- GYG se monta en Qué ver detrás de consentimiento; enlaces nativos siguen siendo útiles sin widgets. Tiqets enriquece fichas seleccionadas desde servidor con caché, timeout y fallback, sin abrir checkout local.
- El iframe de Google Maps de itinerarios es lazy, pero no pasa por el gate central de consentimiento. Revisar por separado; no eliminar el mapa en una migración SEO.
- Las tres familias tipográficas locales evitan Google Fonts externo. Hero usa Next Image con prioridad y sizes; cambiar recortes puede afectar LCP. El monolito de cuerpos supera 500 KB de fuente: coste de mantenimiento/compilación, **no prueba de que todo ese archivo se descargue al móvil**.
- No se midieron LCP/CLS/INP reales ni Lighthouse en esta fase. Ausencia de overflow en una muestra no equivale a QA visual completo de siete páginas/dispositivos.

## 9. Problemas encontrados y prioridad

| Prioridad | Hallazgo verificable | Impacto / esfuerzo / siguiente fase |
|---|---|---|
| Alta, separada | `POST /api/brevo/campaign` no comprueba sesión/rol; el proxy no lo protege | Si hay clave de servidor configurada, permite solicitar creación de campañas con datos del cliente. No se invocó ni se enviaron campañas. Revisar autorización o retirada de endpoint obsoleto en una corrección separada; no mezclar silenciosamente con SEO |
| Alta para la migración | Contrato de rutas contradictorio en dos fusiones y checkout | Riesgo de consolidar/restaurar sin intención aprobada; resolver antes de Fase 1 |
| Alta para QA | Parser de actividades del smoke devuelve cero y los checks pasan vacíos | Da falsa confianza sobre inclusión/exclusión. Corregir al implementar Fase 1 con extracción robusta y conteo no vacío |
| Alta para QA | Smoke permite canonical al apex en internas y solo informa canonical ausente | No garantiza self-canonical. Exigir canonical exacto en cada indexable del sitemap |
| Media editorial | CTA genérico obligatorio y ofertas antes de decisiones relevantes | Fases 2–4, con snapshot y límite por intención |
| Media de mantenimiento | Catálogo/cuerpo/fechas/fotos separados y artículo monolítico | Modelo explícito y migración gradual; no transformar 68 cuerpos con script ciego |
| Media de alcance | Renderer y footer compartidos con pilares y guías de actividades | Prueba de regresión fuera de las siete páginas antes de aceptar cambios globales |
| Media de medición | Memoria E-016 aún dice “no desplegado”, aunque el SHA auditado ya está en producción | Registrar D0 real; no evaluar el experimento con fechas de push o estado de memoria obsoleto |
| Revisión acotada | Dos variantes DOM de fuentes/TOC, una visible | No hay duplicación visual acreditada en la muestra; no borrar verificación como supuesto arreglo |
| Revisión acotada | CookieBanner accede a localStorage sin la protección del lector central | Probar almacenamiento bloqueado; no inferir fallo de usuarios sin reproducción |

### Huecos precisos de validación

1. `scripts/smoke-sitemap.mjs:304` asume `slug` e `indexable` adyacentes. En `activities.ts` hay campos intermedios: obtiene **0**, aunque existen 20 fichas indexables y las 20 están en XML. El parser de `smoke-activities.mjs:38–49` ya evita esa suposición.
2. `smoke-sitemap.mjs:399–420` no falla ante todos los canonicals incorrectos/ausentes. El resultado 52/52 acredita las comprobaciones implementadas, no esos contratos que faltan.
3. La lista obligatoria actual del smoke incluye Transporte, Planifica y Actividades. Actualizarla con la política nueva; no conservar noindex/redirects en sitemap para que un test antiguo siga verde.
4. El workflow SEO no cubre todos los cambios de renderer/layouts/SchemaMarkup/proxy/ticket-guides por sus filtros de paths. Ampliar cobertura o ejecutar explícitamente pruebas relevantes al cambiar esos archivos.
5. El checker de links rotos del blog no equivale a “cero enlaces a redirects”: son aserciones distintas. La nueva migración debe comprobar ambas.

## 10. Riesgos y límites

- **No hay garantía de cero pérdida SEO.** Se reduce riesgo con baseline, destinos sanos, comparación de contenido, actualización de enlaces, un salto y fases atribuibles.
- **No sustituir el nuevo criterio por memoria antigua.** El noindex solicitado de Entradas cambia D-035; la posición más baja de CTA cambia la aplicación comercial de D-039. Documentar la instrucción nueva, sin solicitar permiso redundante para lo que ya está expresamente autorizado.
- **No publicar datos legacy.** Los 75 cuerpos y los registros de itinerarios retirados no son una lista de URLs a recuperar.
- **No confundir salud HTTP con índice de Google.** No se consultó de nuevo GSC/inspección durante esta Fase 0; se usó el snapshot guardado del 15/10 como contexto, no como medición del 17/10.
- **No reactivar newsletter:** D-044 la pausa, `articleHasNewsletter()` devuelve false y `/api/subscribe` ya no existe. Conservar bajas y recursos solicitados; no añadir marketing a leads.
- **No cambiar proveedor de auth:** Clerk ya entrega noindex; el público está aislado. No trasladar FAPI a Vercel sin un proyecto de autenticación separado.
- **No explotar APIs para “demostrar” un problema:** se revisó el código de campañas, sin peticiones POST, envíos, compras o cambios de terceros.
- **No convertir “2–5 fuentes normalmente” en corte automático:** preservar respaldo de precios, horarios, cierres y reglas; la fecha debe corresponder a una revisión real.
- **No extrapolar una muestra visual:** se revisó Home y plantilla de Vida nocturna; el QA completo responsive/accesibilidad/Lighthouse corresponde a la Preview de las fases de implementación.

## 11. Plan exacto de Fase 1, todavía sin ejecutar

### 11.1 Decisiones pendientes que impiden arrancarla automáticamente

**A. Dos consolidaciones:** Fase 1A ordena redirigir restaurantes románticos y novedades; Fase 7 dice “NO hacer hasta revisar contenido completo de ambas URLs” y las coloca después del rollout sujeto a aprobación. No se ha hecho esa comparación íntegra para aprobar la pérdida de las dos fuentes. Propuesta conservadora: mantener ambas y dejarlas en WAIT hasta su revisión, mientras las otras 16 instrucciones quedan preparadas. Confirmar ese orden antes de implementar.

**B. Checkout:** se pide accesibilidad con noindex, pero está retirado por redirects antes del render y no hay checkout activo. Añadir metadata no cambia un 308. Propuesta conservadora: conservar sus redirects y excluirlo de sitemap, sin reconstruir checkout. Confirmar si esa es la intención. `/quiz` es un 404 real sin página: conservarlo como tal, no crear un quiz para poder añadir noindex.

Estas son ambigüedades del documento, no rechazos de aprobación ni requisitos inventados por una herramienta. Por la instrucción final de José (“Fase 1 únicamente si no detectas contradicciones graves”), el trabajo actual termina en Fase 0.

### 11.2 Secuencia de commits tras resolver A/B

| Commit | Archivos/superficie | Resultado y límite |
|---|---|---|
| `phase 1: define route contract and checks` | Matriz autorizada de este informe, baseline y expectativas de los scripts SEO; workflow | Estados esperados explícitos; extracción fiable; canonical estricto; detectar redirect interno y cadenas. No cambiar páginas todavía |
| `phase 1: apply approved permanent redirects` | `next.config.mjs`, excepciones necesarias de `src/proxy.ts` | 301 exacto en las reglas autorizadas, destino directo 200, sin tocar otras 61+ reglas por costumbre; presupuesto al destino solicitado |
| `phase 1: update canonical internal destinations` | Navbar/Footer/Home donde aplique; `blog-posts`, `blog-related`, bloques `enlace`/`links`; actividades, itinerarios, schema y datos | Cero href generados hacia fuentes retiradas; no reemplazar texto editorial ni URLs no autorizadas por búsqueda global ciega |
| `phase 1: align indexability and sitemap` | Layouts de Entradas/Planifica/FAQ; páginas legales; índice Actividades si se elige; registros de fichas y `sitemap.ts` | Noindex/follow por página, googleBot coherente, siete funcionales fuera de XML; fuentes redirect fuera; 17 fichas restantes sin noindex masivo |
| `phase 1: record Clerk and migration QA` | `docs/clerk-indexing.md`, `docs/seo-migration.md`, evidencia QA y `brain/` | Documentar cabeceras ya existentes y límites; matriz OLD/STATUS/FINAL/FINAL STATUS/CHAIN LENGTH; no modificar DNS/auth |

No hacen falta librerías nuevas. Puede usarse esta rama con commits separados o una rama derivada `editorial-rebuild-phase-1`; nunca `main` para trabajar. Cada commit debe ser coherente y pasar sus checks; separar commits no autoriza dejar un sitemap incorrecto publicado entre medias.

### 11.3 Política de indexación que se implementaría

| Ruta | Estado actual | Política solicitada |
|---|---|---|
| `/comprar-entradas` | 200, indexable, canonical propio | noindex/follow, accesible, fuera de XML; conservar enlaces funcionales/proveedores |
| `/planifica-tu-viaje` | 200, indexable, canonical propio | Igual; mantener formulario y finalidad de servicio |
| `/faq` | 200, indexable, canonical propio | noindex/follow, conservar respuestas y acceso |
| Cuatro legales | 200, indexables, canonical propio | noindex/follow, conservar contenido/enlaces legales |
| `/quiz` | 404 real, noindex, fuera de XML | No revivir; documentar inexistencia |
| `/checkout/*` | 308 a itinerarios | WAIT sobre petición de documento accesible; propuesta: mantener retirada actual |
| `/actividades` | Directorio de filtros/tarjetas, no guía completa | Elegible para noindex/follow según la autorización condicional; recomendado en la Fase 1, sin heredar ese noindex a fichas |
| Tres fichas listadas para redirect | 200 indexables | Redirect selectivo y fuera de XML; mantener destino sano |
| Otras 17 fichas | 200 indexables | Mantener, sin noindex masivo ni consolidaciones nuevas |

`/planifica` y `/planifica-tu` no son aliases funcionales: hoy son 404. La URL autorizada es `/planifica-tu-viaje`; no crear nuevas abreviaturas.

### 11.4 Puerta de salida de Fase 1

1. Volver a consultar salud de cada destino y baseline GSC/enlaces disponible antes de activar los cambios; una ausencia de filas no equivale a cero demanda.
2. `npm run typecheck`, lint, build limpio; smoke blog/títulos/actividades/itinerarios/sitemap relevantes y QA de analytics si se tocan trackers.
3. Tabla de cada regla autorizada: **301 → FINAL 200 → longitud 1**. Probar también aliases existentes que pudieran introducir un salto extra; no exigir que la URL OLD tenga canonical propio porque ya no entrega HTML.
4. XML válido, sin duplicados, parámetros, previews, redirects o noindex; cada entrada 200, autocanónica, H1 único y schema parseable.
5. Comprobar noindex en robots y googleBot/cabecera efectivos de las funcionales, preservando rastreo; no herencia a fichas o artículos.
6. Comprobar que los enlaces generados por datos/related/schema/menú no dependen de redirects. Registrar referencias que sean documentación histórica, no cambiarlas como si fueran href activos.
7. Comparar huellas de las URLs protegidas: título, meta, H1, intención, canonical, schema, fotos y enlaces. Ninguna reescritura automática.
8. Vercel **Preview** del SHA revisado, QA móvil/escritorio y entrega de riesgos. **STOP + REVIEW**. No merge ni producción.

Después, Fase 2 tiene su propia revisión; Fases 3–4 solo siete páginas; su gate detiene rollout. No continuar a Home, navegación definitiva, nuevos artículos o consolidaciones del resto sin la aprobación prevista.

## 12. Pruebas ejecutadas en Fase 0

| Comprobación | Resultado / alcance |
|---|---|
| Actualización de GitHub | `origin/main` = `83ca369`, comprobado de nuevo el 17/10 |
| Producción/Vercel | Alias en el mismo SHA, READY/production; consulta sin mutaciones |
| Preflight 50 rutas | 15 destinos únicos sanos; estados de los 18 OLD y funcionales registrados; 16/10 |
| `SMOKE_BASE_URL=https://estabaenlisboa.com npm run smoke:sitemap` | **52/52**, XML de **110 URLs**, todas 200 sin noindex; límites del checker documentados |
| `npm run lint` | **0 errores, 1 warning preexistente** de dependencia `useEffect` en `ItineraryContextualCta.tsx:84`; aviso Babel por archivo >500 KB |
| `npm run build` | **Correcto, 137 rutas**, después de regenerar caché de tipos |
| `npm run typecheck` | **Correcto** tras build limpio |
| Caché antigua | Los primeros typecheck/build fallaron por `.next/dev/types/validator.ts` que apuntaba a `/api/subscribe` ya eliminado. Se movió esa carpeta generada a una copia recuperable fuera del repo; no se editó código ni se ocultó un error de aplicación |
| Vida nocturna, navegador | Escritorio y 390 px; un índice/fuentes visible, acordeones funcionales, H1 único y canonical correcto; muestra, no auditoría completa |
| Clerk DNS/HTTP | CNAME y noindex/nofollow confirmados el 17/10 en raíz y JWKS; sin sesión ni cambios |
| Lighthouse / campo CWV | No medido; no se entrega puntuación inventada |
| Preview de producto nuevo | No aplica a esta fase documental; no hay implementación que aprobar visualmente |

Los tests del producto no ejecutados se reservan para el cambio que los afecte; no se ha probado crear campañas, enviar formularios, comprar, editar Supabase o iniciar sesión en Clerk. No hubo modificaciones de aplicación, redirects, noindex, robots, canonical, schema, enlaces ni configuración de producción.

## 13. Archivos clave y memoria operativa

| Necesidad | Archivos principales |
|---|---|
| Política/decisiones | `AGENTS.md`, `brain/MENTE-LISBOA.md`, `brain/LOCKED-DECISIONS.md`, `brain/06-DECISIONS.md` |
| Routing/SEO global | `next.config.mjs`, `src/proxy.ts`, `src/i18n/routing.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/robots.txt` |
| Publicación | `src/data/blog-posts.ts`, `src/app/[locale]/blog/[slug]/page.tsx`, `src/components/blog/article-types.ts` |
| Plantilla | `ArticleHero`, `ArticleBody`, `ArticleToc`, `ArticleSources`, `ArticleFooter`, `ArticleRelated`, `ArticleEditorialLinks` |
| Comercial | `blog-booking-placements.ts`, `booking-blocks.ts`, `bookings.ts`, componentes afiliados y `ArticleBookingBlock` |
| Home/nav/portada | `[locale]/page.tsx`, `HomeEssentials`, `TravelerDirectory`, Navbar/Footer, `BlogClient`, `EditorialArticleCard` |
| Pilares/fichas | `TravelPillarPage`, `travel-pillar-guides.ts`, `transport-guide.ts`, `activities.ts`, `ticket-guides.ts` |
| Itinerarios | `data/itineraries/*`, `guide-packs.ts`, `guide-store.ts`, páginas core, `PremiumContent`, `ItineraryMap` |
| Auth/servicios | `admin/layout.tsx`, `auth-utils.ts`, `supabase.ts`, route handlers de `src/app/api` |
| Consent/medición | `consent.ts`, `CookieBanner`, `GoogleAnalytics`, `analytics-runtime.ts`, `Stay22Script` |
| QA | `scripts/smoke-*.mjs`, `.github/workflows/{typecheck,seo-smoke}.yml` |

La documentación de esta Fase 0 se guarda con un baseline compacto y una nota en Mente Lisboa. Las instrucciones de reconstrucción del 16/10 y el gate actual quedan registrados, sin reescribir silenciosamente decisiones históricas. GitHub + Mente Lisboa siguen siendo la referencia para la próxima intervención.
