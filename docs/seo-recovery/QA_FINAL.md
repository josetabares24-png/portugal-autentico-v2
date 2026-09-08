# QA FINAL: recuperacion editorial

## Alcance y resultado

Primera ejecucion, fases 0/0.25/0.5/0.75. Sin push, deploy, merge ni cambio de main. Branch final `seo/content-recovery`, apilada sobre `seo/restore-editorial-links` y `audit/content-regression`. Baseline main `5f26c7989fccc5b151f07ab5cb48003463bab058`.

27 enlaces declarados recuperados en 12 articulos, cada uno una sola vez dentro de main. Una autorreferencia excluida. Fuente unica `article.links`; sin nuevos destinos inventados. Test reforzado falla con 27 ausencias sobre build BASE y pasa sobre AFTER. No se debilitaron las 12 invariantes anteriores.

Dos frases integradas (clase B), sin nuevos bloques FAQ: presupuesto orienta empezar por alojamiento; excursiones diferencia autonomia y organizacion. Ningun precio, fuente, fecha, imagen, ALT, schema o metadata modificado. No se recuperan 137 FAQs redundantes/genericas ni 15 pendientes de verificacion. No se afirma haber auditado la vigencia de todo el contenido existente.

Las 154 preguntas/respuestas retiradas de los 48 articulos activos suman aproximadamente 3.665 palabras bajo el criterio de tokenizacion documentado. No se interpreta esa reduccion por si sola como perdida de calidad.

## Metricas

| Medida | Antes | Despues |
|---|---:|---:|
| Registros de articulo | 57 | 57 |
| Articulos 200 | 51 | 51 |
| Registros redirigidos | 6 | 6 |
| Sitemap URLs | 89 | 89 |
| Duplicados sitemap | 0 | 0 |
| Errores/redirects/noindex en sitemap | 0 | 0 |
| Enlaces declarados utiles ausentes de main | 27 | 0 |
| Destinos unicos enlazados desde main del blog | 56 | 60 |
| Smoke calculadora | 90/91 FAIL | 91/91 PASS |
| Huerfanas en grafo publico observado | 4 | 4 |
| Profundidad maxima | 5 | 5 |
| Profundidad media entre alcanzables | 2.233 | 2.233 |

El grafo global ya incluye enlaces de navbar/footer a itinerarios y actividades: recuperar enlaces editoriales no aumenta artificialmente su numero de paginas origen global. No se promete una bajada de profundidad que no se ha medido. Siguen huerfanas en este universo terminos-condiciones, novedades-lisboa-2026, lisboa-vs-porto y evitar-turistadas-lisboa; quedan fuera de esta reparacion de datos declarados.

## Inbound por destino (paginas origen distintas, documento completo)

| Destino | Antes | Despues |
|---|---:|---:|
| /itinerarios | 89 | 89 |
| /blog/donde-alojarse-en-lisboa | 5 | 7 |
| /blog/sintra-desde-lisboa | 4 | 5 |
| /actividades | 89 | 89 |
| /itinerarios/lisboa-3-dias-premium | 4 | 8 |
| /blog/como-moverse-por-lisboa | 15 | 16 |
| /itinerarios/lisboa-2-dias-completo | 4 | 6 |
| /blog/lisboa-card-vale-la-pena | 4 | 6 |
| /itinerarios/lisboa-1-dia-lo-esencial | 4 | 6 |
| /calculadora-presupuesto-lisboa | 1 | 2 |

## Enlaces recuperados

| Origen | Anchor | Destino | Antes en main | Despues en main | HTTP destino |
|---|---|---|---:|---:|---:|
| /blog/time-out-market-lisboa | Itinerarios gratuitos por Lisboa | /itinerarios | 0 | 1 | 200 |
| /blog/estacion-oriente-lisboa | Itinerarios gratuitos por Lisboa | /itinerarios | 0 | 1 | 200 |
| /blog/estacion-olaias-lisboa | Itinerarios gratuitos por Lisboa | /itinerarios | 0 | 1 | 200 |
| /blog/lisboa-en-7-dias | Dónde alojarse en Lisboa | /blog/donde-alojarse-en-lisboa | 0 | 1 | 200 |
| /blog/donde-fotografiar-lisboa | Sintra desde Lisboa | /blog/sintra-desde-lisboa | 0 | 1 | 200 |
| /blog/donde-fotografiar-lisboa | Itinerarios de 1, 2 y 3 días | /itinerarios | 0 | 1 | 200 |
| /blog/mejores-apps-lisboa | Explorar los itinerarios gratuitos | /itinerarios | 0 | 1 | 200 |
| /blog/como-pagar-en-portugal | Itinerarios gratuitos de Lisboa | /itinerarios | 0 | 1 | 200 |
| /blog/como-pagar-en-portugal | Actividades en Lisboa | /actividades | 0 | 1 | 200 |
| /blog/donde-alojarse-en-lisboa | Ruta de 3 días para elegir zona con criterio | /itinerarios/lisboa-3-dias-premium | 0 | 1 | 200 |
| /blog/donde-alojarse-en-lisboa | Transporte y cuestas antes de reservar | /blog/como-moverse-por-lisboa | 0 | 1 | 200 |
| /blog/donde-alojarse-en-lisboa | Ver la guía gratuita de Lisboa en 2 días | /itinerarios/lisboa-2-dias-completo | 0 | 1 | 200 |
| /blog/donde-alojarse-en-lisboa | Explorar todos los itinerarios gratuitos | /itinerarios | 0 | 1 | 200 |
| /blog/lisboa-card-vale-la-pena | Ver cómo encaja en una ruta de 3 días | /itinerarios/lisboa-3-dias-premium | 0 | 1 | 200 |
| /blog/lisboa-card-vale-la-pena | Abrir la guía gratuita de Lisboa en 2 días | /itinerarios/lisboa-2-dias-completo | 0 | 1 | 200 |
| /blog/lisboa-card-vale-la-pena | Explorar todos los itinerarios gratuitos | /itinerarios | 0 | 1 | 200 |
| /blog/como-moverse-por-lisboa | Decidir si la Lisboa Card compensa | /blog/lisboa-card-vale-la-pena | 0 | 1 | 200 |
| /blog/como-moverse-por-lisboa | Aplicar el transporte a una ruta de 3 días | /itinerarios/lisboa-3-dias-premium | 0 | 1 | 200 |
| /blog/como-moverse-por-lisboa | Elegir alojamiento según conexiones | /blog/donde-alojarse-en-lisboa | 0 | 1 | 200 |
| /blog/como-moverse-por-lisboa | Abrir la guía gratuita de Lisboa en 1 día | /itinerarios/lisboa-1-dia-lo-esencial | 0 | 1 | 200 |
| /blog/como-moverse-por-lisboa | Explorar todos los itinerarios gratuitos | /itinerarios | 0 | 1 | 200 |
| /blog/que-hacer-gratis-en-lisboa | Encajar planes gratis en una ruta de 3 días | /itinerarios/lisboa-3-dias-premium | 0 | 1 | 200 |
| /blog/que-hacer-gratis-en-lisboa | Cuándo pagar entradas y cuándo no | /blog/lisboa-card-vale-la-pena | 0 | 1 | 200 |
| /blog/que-hacer-gratis-en-lisboa | Abrir la guía gratuita de Lisboa en 1 día | /itinerarios/lisboa-1-dia-lo-esencial | 0 | 1 | 200 |
| /blog/que-hacer-gratis-en-lisboa | Explorar todos los itinerarios gratuitos | /itinerarios | 0 | 1 | 200 |
| /blog/presupuesto-viajar-lisboa | Calculadora de presupuesto para Lisboa | /calculadora-presupuesto-lisboa | 0 | 1 | 200 |
| /blog/presupuesto-viajar-lisboa | Itinerarios gratuitos de Lisboa | /itinerarios | 0 | 1 | 200 |

## Protecciones

Snapshots del mismo runner y entorno: SEO_RECOVERY_BASE vs SEO_RECOVERY_AFTER. En 57 registros solo cambian enlacesInternos y textoVisible, en 13 articulos en total (12 con enlaces, mas excursiones). Identicos: estado, title, descripcion, canonical, robots, keywords, Open Graph, H1/H2/H3, ids, TOC, imagenes/ALT, enlaces externos y JSON-LD. No se usa un resultado de igualdad total para ocultar las adiciones intencionadas.

Crawl independiente: 97 URLs unicas, incluyendo robots y 6 redirects; 90 paginas publicas 200 mas robots. Cero diferencias en status, canonical, metadata, title, JSON-LD e imagenes comparando produccion baseline y build local. Se normalizaron atributos ausentes null/cadena vacia, no URLs ni ALT.

## Sitemap: diferencia real de entorno

XML valido y mismas 89 URLs. No es byte-identico: `parseSpanishDate` en `src/app/sitemap.ts:31` usa fecha sin zona; produccion UTC y local Europe/Lisbon serializan algunos lastmod con una hora de diferencia (2026-08-28T00:00Z frente a 2026-08-27T23:00Z). Es comportamiento existente, no cambio de datos ni de sitemap en esta rama. Pendiente separado, no corregido silenciosamente.

## Tests AFTER

| Comando | Resultado |
|---|---|
| npm.cmd run build | PASS |
| npm.cmd run typecheck | PASS |
| npm.cmd run lint | PASS |
| npm.cmd run test:budget | PASS |
| npm.cmd run test:optimizer | PASS |
| npm.cmd run test:presupuesto | PASS |
| npm.cmd run test:actividades | PASS |
| npm.cmd run test:budget-recommended | PASS |
| npm.cmd run test:ux | PASS |
| npm.cmd run smoke:activities | PASS |
| npm.cmd run smoke:itineraries | PASS |
| npm.cmd run smoke:titles | PASS |
| npm.cmd run smoke:free-tours | PASS |
| npm.cmd run smoke:sitemap | PASS |
| npm.cmd run smoke:blog | PASS |
| npm.cmd run smoke:calculadora | PASS |

Los smokes no-blog usaron SMOKE_BASE_URL=http://localhost:4318 contra el build final, evitando builds repetidos. Blog levanta su propio servidor. Las credenciales Clerk de pruebas son las ficticias ya usadas por los smokes; no se consultaron ni cambiaron secretos. No se probaron login/admin autenticado ni envios de formularios.

## Visual

Presupuesto y movilidad (caso maximo de 5 enlaces) a 375x844 y 1440x900: ancho del documento exactamente igual al viewport, enlaces legibles y sin solapamiento. Capturas fuera de Git en Desktop/seo-links-*.png. Verificacion visual sobre replay del HTML/CSS real del build, sin scripts de hidratacion: el navegador directo inicia handshake de Clerk ficticio. Esto valida composicion CSS, no autenticacion ni interactividad global. No se cambia Clerk para sortearlo.

## Riesgos y limites

LOW: cambio acotado a salida SSR de enlaces y dos frases; tests y metadatos protegidos.

MEDIUM: deduplicacion depende de los consumidores actuales (cuerpo, Related y CTA final); si cambia el footer, revisar exclusiones. FAQ clasificada no equivale a verificacion factual completa. No hay atribucion causal de GSC ni promesa de ranking.

HIGH (preexistente, fuera del diff): precios/horarios y afirmaciones de aeropuerto, Sintra y presupuesto requieren revision oficial. No se presentan como validados por este trabajo.

No se ha optimizado JS/cache/Clerk ni medido Lighthouse/CrUX. Se conserva el inventario de scripts y headers por URL; no se extrapola performance local a produccion.

## Rollback y recomendacion

**NO MERGE todavia**: revisar este informe y la presentacion antes de autorizar. Main sigue en baseline; descartar la propuesta no exige cambiar produccion. Si se integrase posteriormente, revertir los commits funcionales en orden inverso mediante git revert preservaria historial; no usar reset. No ejecutar rollback ahora.
