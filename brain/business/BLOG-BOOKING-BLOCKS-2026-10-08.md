# Bloques de reserva en artículos del blog — 2026-10-08

**Estado: PREPARADO EN RAMA LOCAL `feat/blog-affiliate-ctas`. No publicado. Requiere aprobación visual de José (L-003) antes de merge.**

## Por qué

- El blog concentra ~85 % de las impresiones (ver [[data/GSC-2026-09-22]]), pero los artículos no tenían ningún enlace de reserva: todos terminaban solo en `/planifica-tu-viaje`.
- Los clics de afiliado salían casi todos de `/free-tours-lisboa`.
- Regla de [[business/AFFILIATE-MONETIZATION-ARCHITECTURE-2026-09-23]]: el CTA vende exactamente lo que la página está explicando. Por eso solo se añade bloque donde hay un producto de `bookings.ts` o una ruta de GuruWalk que coincide con una sección concreta del artículo.

## Qué cambia

- `src/data/blog-booking-placements.ts`: mapa slug → bloques (oferta + encabezado antes del que se pinta + intro en voz de José, sin precios ni superlativos).
- `src/components/blog/ArticleBookingBlock.tsx`: tarjeta dentro del cuerpo, enlace `rel="sponsored"`, aviso de afiliado y evento `affiliate_click` con `affiliate_placement=article-body`.
- `ArticleBody` pinta el bloque antes del encabezado indicado; si el encabezado cambia, el bloque cae al final del cuerpo (no desaparece en silencio).
- `page.tsx` resuelve los enlaces en servidor (GuruWalk necesita `GURUWALK_AFFILIATE_REF`; sin ref, el bloque de free tour no se pinta).
- `ArticleFooter`: muestra "Desde X" solo si `NEXT_PUBLIC_PLAN_PRICE_FROM` está definido (mismo criterio que `/planifica-tu-viaje`).

## Artículos y ofertas

| Artículo | Ofertas |
|---|---|
| tarjeta-navegante-lisboa | Lisboa Card (comparación con el billete de 24 h) |
| time-out-market-lisboa (E-003) | Tour gastronómico — coincidencia débil, decidir si se mantiene |
| como-moverse-por-lisboa (E-001) | Lisboa Card |
| estacion-oriente-lisboa (E-004) | Oceanário |
| arquitectura-manuelina-lisboa (E-005) | Free tour Belém |
| tram-28-historia-guia | Lisboa Card |
| barrios-imprescindibles | Free tour imprescindible; Free tour Alfama |
| chiado-bairro-alto-guia | Free tour imprescindible |
| sintra-desde-lisboa | Palacio da Pena; Excursión Sintra completa |
| excursiones-desde-lisboa | Excursión Sintra completa |
| lisboa-card-vale-la-pena | Lisboa Card |
| donde-escuchar-fado-autentico | Fado |
| alfama-historia-guia | Free tour Alfama; Castelo de São Jorge |
| parque-das-nacoes-lisboa-que-ver | Oceanário |
| lisboa-cuando-llueve | Oceanário |
| lisboa-con-ninos | Oceanário |

Itinerarios: `lisboa-1-dia-lo-esencial` ya tenía su CTA exacto (Castelo) por parada; el resto de paradas no tiene producto exacto.

Fuera a propósito: E-006 y E-007 (protegidos), `como-pagar-en-portugal`, `aeropuerto-lisboa-al-centro`, `mejores-apps-lisboa`, `lisboa-vs-porto`, `mejores-miradores-lisboa` (no hay producto exacto para lo que explican), `belem-barrio-guia` (pendiente de rehacer).

## Medición

- GA4 `affiliate_click`: `affiliate_content = blog-<slug>-<oferta>`, `affiliate_placement = article-body`, `article_slug`.
- Tiqets: `tq_campaign = web_blog_<slug>` (etiqueta propia; `partner` intacto).
- GuruWalk: `utm_campaign` de la ruta + `utm_content = blog-<slug>-free-tour-<ruta>`.
- GetYourGuide: los enlaces `gyg.me` llevan su campaña dentro y no admiten parámetros; el desglose por artículo solo existe en GA4. Si se quiere en el panel de GYG, hay que crear enlaces cortos por artículo en el panel.

## Experimento propuesto (E-011)

- Hipótesis: un bloque de reserva dentro de la sección que lo justifica genera clics de afiliado cualificados sin empeorar la lectura ni el SEO.
- Métrica principal: `affiliate_click` con `affiliate_placement=article-body` por artículo, 28 días tras despliegue en producción verificado.
- Guardarraíles: CTR y posición en GSC de E-001, E-003, E-004 y E-005 (el título y la descripción no cambian; si alguno cae claramente, revisar antes de culpar al bloque), tiempo de lectura/scroll.
- No evaluar antes de 28 días finalizados.
