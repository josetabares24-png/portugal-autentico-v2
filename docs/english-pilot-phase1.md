# Piloto inglés en el mismo dominio

## Alcance autorizado y estado

José acepta probar inglés bajo `/en/`, después de comparar dominio separado frente a la misma publicación. «Ok cierra preview y empezamos» y la respuesta estructurada posterior autorizan publicar **solo PR115** y desarrollar inglés en una rama independiente. **No autorizan publicar este piloto inglés** sin mostrarlo y revisar L003.

Rama: `english-pilot-phase-1`, base de producción **4be905413d20432ad506fa81ebaad63131e1f740**. La versión española conserva sus URLs, contenido, canonicals, intención, reservas y reglas de indexación. Se añaden únicamente equivalencias recíprocas de idioma en seis páginas y un acceso EN donde existe traducción completa. No dominio nuevo, slugs españoles nuevos o migración masiva.

## Cierre comercial PR115

[PR115](https://github.com/josetabares24-png/portugal-autentico-v2/pull/115) fusionado 22/10/2026 a18:08:47UTC mediante merge normal del head aprobado **68898f2bb40ddc014094a589a6bd2ea0c5d3398b**. Watcher confirma estado `merged`, cinco checks correctos y cero hilos sin resolver en la observación previa. El helper de publicación utilizó su política y SHA exactos; no bypass ni force-push.

Vercel **dpl_aftEFD6LdCAJ44UviPvs1Aa27sUx**, READY/production, merge SHA4be9054; alias estabaenlisboa.com ywww confirmados. QA posterior: editorial1.659/72páginas, migración1.426 con98URLs y16reglas, Free tours66. Sin cambios de URLs o indexación nuevos. Comienza D0 de E018 con este despliegue confirmado; no hay todavía ventana para atribuir efecto en clics, reservas o SEO. [Evidencias](qa/2026-10-22/english-pilot/).

## Baseline y razón de la arquitectura

Antes del piloto, la configuración activa contiene solo español; `/en` y el catch-all histórico inglés redirigen al castellano. Hay un archivo de mensajes inglés antiguo, pero las páginas editoriales contienen texto español y el buscador filtra es. Snapshot de72superficies españolas y QA de producción capturados después de PR115 antes de editar.

Un despliegue que solo active un locale podría crear variantes españolas bajo `/en/`, heredar canonical/idioma incorrecto o hacer dinámico todo el sitio al leer headers en el layout. Se usan **root layouts separados**, compartiendo el documento, fuentes y metadatos españoles originales. Next16 admite layouts raíz en subdirectorios sin un layout superior. Las transiciones entre idiomas hacen carga de página completa; las páginas públicas españolas siguen prerenderizadas. [Documentación oficial](https://nextjs.org/docs/app/api-reference/file-conventions/layout).

`DocumentShell` conserva fuentes, CSS, skip link y schema del documento español. Admin mantiene ClerkProvider y protección de middleware, y la antigua ruta app mantiene su redirect. No se mueven los archivos editoriales existentes ni se leen cookies/headers desde el documento para decidir idioma. La raíz inglesa se sirve mediante rutas explícitas, sin activar automáticamente 110 traducciones de next-intl.

## Seis páginas y equivalencias

- `/en` ↔ `/`
- `/en/lisbon-airport-to-city-centre` ↔ `/blog/aeropuerto-lisboa-al-centro`
- `/en/lisbon-metro-guide` ↔ `/blog/metro-lisboa-guia`
- `/en/lisbon-3-day-itinerary` ↔ `/itinerarios/lisboa-3-dias-premium`
- `/en/pena-palace-tickets` ↔ `/blog/palacio-da-pena-entradas`
- `/en/lisbon-free-walking-tours` ↔ `/free-tours-lisboa`

[Manifiesto del piloto](english-pilot-url-manifest.csv). El manifiesto SEO maestro registra estas seis como PREVIEW/WAIT, no publicadas. Se mantienen los redirects históricos de otros paths en/ko; únicamente `/en` y los cinco slugs nuevos dejan de caer en el catch-all. No se transforma ningún alias antiguo en una intención diferente.

## Sistema editorial y contenido

Portada breve con fotografía real y lista de cinco decisiones. Guías en datos estructurados con respuesta,4–6pares esenciales semánticos, secciones, índice único de escritorio, relaciones útiles, autoría y fuentes plegadas. Tipografía/paleta existentes, sin rediseñar marca, imágenes de IA o catálogo de tarjetas gigantes.

Adaptaciones acotadas de guías propias y hechos revisados: aeropuerto, Metro, tres días, Pena y Free tours. No historias personales inventadas, rankings, valoraciones estáticas, garantías de precio o FAQ schema. El inglés debe revisarse visual/editorialmente por José antes de producción. El piloto inicial conserva datos fechados por idioma; todavía no existe sincronización automática de todos los precios entre las guías españolas y las inglesas. La revisión de ambos idiomas es un coste editorial explícito.

Fotos de Olaias para Metro/aeropuerto con ALT y pie que identifican la estación real, no una terminal de aeropuerto. Foto de Pena con autor, Commons y licencia enlazados. No nuevas fotos descargadas ni experiencia personal atribuida a una visita no acreditada.

## Reservas e idiomas

El buscador compartido mantiene español por defecto y solicita en explícito en la página inglesa. La caché de Next usa fecha e idioma como argumentos; CDN distingue la query. El inglés exige un horario confirmado de idioma inglés antes de mostrar el tour. El español conserva su fallback anterior. Destinos originales completos, HTTPS/GuruWalk/ref requeridos; sin mutar fecha, evento o referido. Agrupación por URL y etiquetas en ambos idiomas, mínimo44px. Cuatro pruebas offline inyectan cliente ficticio, sin clave ni red real, para comprobar idiomas, fallback y rechazo de enlaces inseguros. La prueba real en Preview devuelve tres tours y nueve horarios en inglés, y tres tours y nueve horarios en español para 27/10/2026, con el referido esperado. Repetir inglés tras español conserva IDs ingleses. Los fixtures siguen siendo pruebas offline separadas.

El directorio inglés general es `https://www.guruwalk.com/lisbon`, comprobado públicamente; añade el referido existente desde configuración de servidor. La reserva de Pena reutiliza el producto y partner Tiqets existentes con una campaña EN separada. **Ese destino aún abre en español**, y se indica antes del botón: no se inventa una URL inglesa o una nueva condición de cancelación. Mejorar ese checkout requiere validar primero el enlace inglés del mismo producto.

No se usa el valor de la clave pegada en chat ni se guardan secretos en Git/evidencias. La rotación de una clave privada compartida se gestiona en configuración del proveedor/Vercel, según la regla de seguridad existente; no se afirma que se haya realizado. No emails, reservas o clics afiliados reales de QA. Las páginas inglesas no cargan Stay22 al no ofrecer alojamiento; la integración española permanece intacta.

## SEO, privacidad y fuentes

- Canonical propio por versión y hreflang es/en/x-default recíproco únicamente en las seis equivalencias completas. Selector voluntario; sin redirección porIP.
- Sitemap del candidato:98URLs españolas conservadas +6inglesas =104. Robots y política española de noindex sin cambios. XML validado por smoke existente.
- HTML lang en renderizado en servidor; metadata inglesa y BlogPosting/BreadcrumbList visibles/parseables, sin inventar Offer/reviews.
- Consentimiento compartido y controles de cookies traducidos. Se corrige el acceso a preferencias para que también permanezca tras aceptar, permitiendo revocar la decisión; la lógica de consentimiento y GA se conserva. GA4 conserva allowlist de hosts públicos y consentimiento explícito; Preview no envía eventos de producto. Legales/perfil se enlazan identificados como contenido español; Planifica personal no se promete en inglés sin confirmar capacidad de atención.

Fuentes oficiales revisadas para hechos mutables:

- [Metro: tarifas](https://www.metrolisboa.pt/en/buy/), [horario](https://www.metrolisboa.pt/en/travel/timetables-and-frequency/), [tarjeta ocasional](https://www.metrolisboa.pt/en/buy/viva-viagem-card/), [contactless](https://www.metrolisboa.pt/en/ride-on-metro-lisboa-with-contactless-payment-card/).
- [Pena: precios y horarios](https://www.parquesdesintra.pt/en/plan-your-visit/opening-times-and-prices/), [acceso](https://www.parquesdesintra.pt/en/plan-your-visit/how-to-get-there/).
- [Google: versiones localizadas](https://developers.google.com/search/docs/specialty/international/localized-versions).

No se estiman búsquedas, crecimiento o ingresos del inglés: Windsor bloqueado por límite de cuenta y GSC Wizard por suscripción. País de visitante no equivale a idioma. D0 inglés comenzará solo con producción aprobada y verificada; revisar rastreo/indexación a30d, consultas/clics a60d y reservas verificadas a90d, ampliando ventana si falta muestra.

## QA y riesgos que se deben revisar

Se añaden `smoke:english-pilot` para las seis URLs y sus equivalentes: HTML, canonical, hreflang, texto, fuentes/imagen, enlaces internos,404 y sitemap, además de las pruebas del buscador. Primer QA encontró un equivalente faltante en el itinerario estático y un detalle de casing hrefLang del parser; se corrigió la página y se normalizó únicamente la lectura HTML/URL raíz, sin relajar reciprocidad. TypeScript detectó una licencia fotográfica opcional, corregida con enlace válido al original como respaldo. Lint corrigió enlaces internos a Link. No fallos ignorados.

No se declara mejora de Lighthouse ni conversión sin medición. No se publica el piloto automáticamente.


## Cierre de Preview — PR #116

- Rama: `english-pilot-phase-1`. Commits de implementación separados: `d5454e9` (disponibilidad) y `4bffd9c` (seis páginas). [PR borrador #116](https://github.com/josetabares24-png/portugal-autentico-v2/pull/116).
- Preview de la aplicación probada: https://portugal-autentico-v2-i58rr0sw5-estabaenlisboa.vercel.app/en — deployment `dpl_6vjedVpDMR9XnVanhAnZv7j8KqHb`, READY, head `4bffd9ca5603ffdb1f28007a7813970839cc0fc9`. Acceso temporal gestionado por Vercel, sin guardar tokens en Git.
- Producción permanece en PR115 / `4be9054`. No merge inglés, no cambios DNS/secretos/credenciales, no cambio en robots.txt ni en las políticas españolas.

| Comprobación | Resultado |
|---|---|
| Build, TypeScript, lint | 143 rutas; sin errores; un warning de hooks previo en ItineraryContextualCta |
| Inglés / equivalencias | 149/149, local y Preview |
| Preservación editorial española | 1.659/1.659 en 72 superficies, local y Preview |
| Migración SEO | local 1.490; Preview 1.386; cero fallos, 104 URLs, 16 redirects |
| Calidad técnica | 1.190/1.190 en 119 páginas, local y Preview |
| Sitemap XML | 64/64 local, 104 destinos 200 |
| Navegación editorial | 171/171 local |
| Landing española Free tours | 66/66 local y Preview |
| Pruebas offline de tours / destinos / analytics | 4 + 3 + 6 pasan |
| Responsive DOM | 24 vistas local y 24 Preview: seis páginas × 320/390/768/1440; una H1, lang en, sin overflow ni imágenes rotas observadas |
| CI del head probado | seis checks SUCCESS, incluido SEO, TypeScript, GitGuardian y ambos proyectos Vercel |

El smoke de migración omite en Preview los asserts de indexabilidad de cabecera porque Vercel agrega X-Robots-Tag noindex de protección: de ahí el recuento distinto. Se comprueba igualmente metadata HTML y canonical del candidato. No se rebajan verificaciones para ocultar un fallo.

Interacciones verificadas: menú móvil abre/cierra por teclado y se cierra al elegir guía; cambio ES→EN→ES real; fuentes desplegables; rechazo, aceptación y revocación de cookies. En el input date, el fill automatizado no actualizó el estado controlado; la edición mediante teclado nativo sí cambió a25/10 y todos los href de reserva conservaron25/10. Las consultas HTTP independientes se hicieron para27/10. No se confunden las fechas ni se reserva nada. Capturas tomadas de la Preview real en [QA](qa/2026-10-22/english-pilot/).

### Incidencia externa previa — autenticación

`/admin` y `/api/admin/guides` devuelven500 tanto en producción `4be9054` como en Preview. Los logs de ambos deployments confirman `@clerk/nextjs: Missing secretKey`. Es un fallo de configuración anterior al piloto; no se considera un control de autenticación aprobado. El acceso privado no puede validarse de extremo a extremo hasta restablecer su configuración. No se deshabilita Clerk ni se introduce un fallback de acceso.

Acción externa: un responsable debe revisar en Vercel que `CLERK_SECRET_KEY` esté configurada para el proyecto/entorno correcto y corresponda a la misma instancia que `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, usando el dashboard oficial de Clerk. No pegar claves en chat o Git. Después, redeploy del entorno y repetir acceso anónimo + sesión autorizada, sin revelar contenido privado. El documento compartido y ClerkProvider se han conservado; un resultado500 no demuestra que el login funcione.

### Decisión y siguiente gate

El piloto queda **en Preview para aprobación visual/editorial**, con limitaciones explícitas: checkout Pena en español, legales/autor en español, revisión de datos por idioma y autenticación administrativa externa pendiente. La siguiente acción es revisar las seis páginas y esas limitaciones con José, resolver la configuración privada antes de publicar cambios de layout, y obtener aprobación del head concreto. No ampliar a más artículos, crear dominio aparte o mergear automáticamente.
