# Decision log

## D-069 — Piloto inglés de seis URLs bajo /en/
**Date:** 2026-10-22
**Status:** desarrollo autorizado; Preview/revisión pendientes, sin publicación inglesa

José acepta mismo dominio tras comparar dominio independiente y pide empezar. Portada + aeropuerto + Metro + tres días + Pena + Free tours; equivalencias explícitas en manifiesto. Conservar español, root layouts estáticos por idioma, seis hreflang recíprocos y reservas con idioma real. No activar automáticamente todas las páginas en next-intl ni redirigir porIP. Factores comerciales/país no se convierten en demanda inglesa medida; fuentes actuales bloqueadas. No promover servicio personal en inglés sin confirmar atención. [Contrato, fuentes, arquitectura y QA](../docs/english-pilot-phase1.md). L003 exige mostrar el resultado antes de producción.

## D-068 — Publicación comercial PR115 autorizada y verificada
**Date:** 2026-10-22
**Status:** LIVE

Autorización estructurada de José: publicar PR115/head68898f2 y empezar inglés. Merge4be9054, Vercel dpl_aftEFD6LdCAJ44UviPvs1Aa27sUx READY/production. Cinco checks y cero hilos sin resolver antes del merge; QA editorial1.659/72, migración1.426 y Free tours66 después. D067 ya está publicado; conservar campañas/ref y comenzar E018 en ese D0. Esta aprobación no se extiende a PR114 ni al piloto inglés. [Evidencia](../docs/english-pilot-phase1.md#cierre-comercial-pr115).


## D-067 — Reservas existentes donde se decide, piloto de tres páginas
**Date:** 2026-10-22
**Status:** candidato verificado en Preview48b778d, PR115; revisión visual pendiente, sin publicación

José pide mejorar venta de entradas y Free tours. Revisión explícita y acotada de D-045 en Pena, Jerónimos y Alfama: mover una oferta existente después de la sección que resuelve compra/ruta; máximo una en cuerpo y una final, sin duplicar destinos ni adelantar a la respuesta. Fallback final intacto en el resto. Conservar contenido protegido, URLs, SEO, referidos/campañas, privacidad y fuentes. Buscador: una URL compartida por varias horas recibe un botón «Elegir hora y reservar», sin fingir selección de hora; conservar todas las URLs distintas. No hay evidencia de ventas perdidas o efecto en impresiones; Windsor bloqueado y reservas desconocidas. No cambiar Stay22 ni noindex de Entradas sin revisar por separado. [Evidencia, plan y medición](../docs/commercial-booking-audit-2026-10-22.md). No sustituye ninguna LOCKED; L-003 exige aprobación antes de producción. PR #113 está publicado y su cierre D-066 se documenta en PR #114, que no se fusiona automáticamente aquí.


## D-065 — Planifica como contacto personal para preparar el viaje
**Date:** 2026-10-22
**Status:** candidato verificado en Preview cd9f8f9; aprobación visual pendiente, sin publicación

José pide contactar directamente con él para que prepare el viaje personalmente. Conservar URL/H1, ancla y noindex/follow. Formulario breve de nombre/email/mensaje, fechas/personas opcionales y correo público existente como alternativa; recursos gratuitos secundarios. Acordar alcance/precio antes de preparar el plan, sin precio ni plazo inventados; retirar promesas automáticas 24–48 h tanto de web como del acuse. Corregir éxito del backend: depende del aviso aceptado para José, no de la confirmación al visitante; fallback SMTP si falla el aviso Brevo y confirmación secundaria sin duplicar lead. L-007 conservada, sin newsletter. Ocho pruebas offline incluida ruta API con HTTP interceptado; no correos reales de QA. Las dimensiones días/ritmo/presupuesto de analytics dejan de recogerse en la UI y no son comparables. [Diagnóstico, alcance y límites](../docs/editorial-planifica-contact.md). Preview dpl_Epjg9Ch1r3AsY9H3oi3Hu97nTctF READY, seis checks; navegación171, técnico1.130/113 páginas, calculadora92 y sitemap64/98 URLs correctos local/remoto. Ocho vistas por entorno sin overflow y teclado/validación sin envío. Mismo PR #113; no merge ni producción.

**Validación humana posterior, 22/10:** José informa «si y si sirve ya probe». Prueba funcional satisfactoria reportada por él; no afirmar inspección independiente de bandeja o Reply-To ni enviar duplicado. Falta autorización explícita de publicación del lote completo.

## D-064 — QA técnico: corregir contratos confirmados sin perseguir una cifra
**Date:** 2026-10-22
**Status:** candidate verificado en Preview 5b83dbc; aprobación visual del conjunto pendiente, sin publicación

José indica continuar Fases 13–18. Auditoría HTTP de 113 páginas encuentra ocho archivos del blog con fechas de schema no ISO; convertir fechas existentes sin cambiar publicación/actualización visibles. No derivar primera publicación desde dateModified en la guía de ficha. Quitar hints globales de Brevo usados solo en servidor y quality=82 ajena a configuración; mantener fotos/prioridades. Controles de cookies a 44 px, sin cambiar consentimiento. PageSpeed de producción: Home móvil 98/LCP2,3, desktop99/LCP0,8; Metro móvil92/LCP3,3, CLS0 en las tres ejecuciones. No CrUX; no medición INP ni comparación causal con Preview. Mantener la imagen ya priorizada de Metro y repetir medición consistente tras eventual publicación. [Informe, fuentes y límites](../docs/editorial-phase13-18-technical-qa.md). No nuevas URLs, migraciones, precios o claims; WAIT/REVIEW conservados. Aprobación visual y producción siguen pendientes.

## D-063 — Home móvil: utilidad antes de reservas, perfil de autor conservado
**Date:** 2026-10-22
**Status:** candidate verificado en Preview 5b0e210; aprobación visual del conjunto pendiente, sin publicación

José pide continuar las demás fases. Evolucionar Home sin cambiar la marca: guías antes de reservas, hero móvil más corto y ocho accesos con miniatura/texto frente a bloques de 250 px. Conservar ocho destinos, medición, fotografías, H1 y metadata/schema. Añadir selección manual de tres guías existentes de lluvia/Navidad/Nochevieja sin tocar su contenido ni fechas. Mantener Free tours en hero y reservas además de la cabecera restaurada. A 390 px, directorio de y≈1.260 a ≈555; medidas de layout, no causalidad SEO. Fase 12 inspecciona y conserva el perfil/biografía respaldada por respuestas de José, sin claims nuevos. [Informe](../docs/editorial-phase11-home.md). Esta continuación permite preparar Home frente al estado anterior; no equivale a aprobación visual ni publicación. Fases 13–18 requieren revisión transversal posterior.

## D-062 — Menos tarjetas y Free tours visible
**Date:** 2026-10-22
**Status:** candidate verificado en Preview 5b0e210; aprobación visual del conjunto pendiente, sin publicación

José rechaza visualmente el bloque de cuatro tarjetas de Portugal, pide tenerlo presente en las fases siguientes y pregunta por Free tours. Cambiar ese bloque a una lista de enlaces con separadores, títulos menores y rectos, sin iconos ni cuatro llamadas repetidas. Conservar sus cuatro destinos/textos, H1 e intención. Reducir también el siguiente H2 desproporcionado. Restaurar Free tours al primer nivel de desktop/móvil y retirar su copia secundaria móvil; no tocar la landing, proveedor, afiliación ni fecha/SEO. La señal comercial histórica de esta superficie no justifica esconderla para hacer editorial la cabecera. Este feedback fija un criterio visual para los siguientes cambios, no una orden de modificar todas las plantillas a la vez. Sin merge ni producción.

## D-061 — Revisión de Escapadas, Entradas y destinos de navegación
**Date:** 2026-10-22
**Status:** candidate verificado en Preview 93c7a5a; aprobación visual del conjunto pendiente, sin autorización de publicación

José rechaza su retrato como apertura de Escapadas, pregunta por Entradas y señala que Historias/Planifica llevan a la misma página. Sustituir solo la fotografía principal/social de `/portugal` por el Palacio da Pena ya disponible, con crédito/licencia visibles. Mantener la foto personal en sus otros usos. Entradas pasa al primer nivel, en desktop y móvil, hacia `/comprar-entradas`; retirar la copia secundaria móvil. Planifica abre la página existente `/planifica-tu-viaje` (servicio a medida y herramientas gratuitas); Historias conserva `/blog#historias`, selección de lecturas culturales. No se crea landing ni se modifica la intención de ninguna URL. Mantener noindex,follow de los dos destinos funcionales, canonicals, sitemap y redirects. Esto revisa esos detalles de D-060; no implica aprobación visual del conjunto. [Seguimiento](../docs/editorial-phase9-10-preview.md#revisión-tras-feedback-de-josé--22-octubre).

## D-060 — Navegación y portada editorial como propuesta funcional
**Date:** 2026-10-21
**Status:** candidate verificado en Preview 69ec128; aprobación visual de José pendiente, sin autorización de publicación

José indica seguir con navegación/portada tras D-059. Proponer Lisboa/Escapadas/Historias/Planifica con cinco enlaces bajo Lisboa; mantener recursos de entradas/free tours accesibles. Portada por necesidades usando 22 artículos reales y selección estacional explícita, sin nuevas categorías/URLs/textos de artículos. Conservar catálogo, filtros, reparto de ocho páginas, metadata y contratos SEO. [Informe](../docs/editorial-phase9-10-preview.md). Navegación global cambia también en Home/artículos de Preview, pero no sus cuerpos. L-003 exige aprobación visual antes de merge; no producción ni inicio del rediseño de Home. Mantener REVIEW/WAIT de migración.

## D-059 — Vinos/Gastronomía: corrección parcial, mantener intenciones separadas
**Date:** 2026-10-21
**Status:** candidate verificado en Preview 1b4c104, 21/10; sin autorización de publicación

José indica continuar. Corregir Vinho Verde como región con estilos jóvenes/envejecidos; no garantizar graduación, gas, precios de copas/jarras ni catas gratuitas recurrentes. Ajustar descripción de Vinos y promesa de Gastronomía a su contenido real; retirar absolutos concretos de sus listas sin añadir platos/regiones de relleno. Cuatro bloques de once y tres de dieciséis respectivamente; fuentes explícitas y fechas parciales coherentes. [Informe](../docs/editorial-phase7d-wine-food-fix.md). Conservar URLs/intención/enlaces y siete/trece bloques restantes; ambas REVIEW por datos residuales, sin fusionar con Bacalhau ni migraciones. Preview antes de publicar; no merge ni producción.

## D-058 — Monumentos: aclarar entradas de Belém sin consolidación
**Date:** 2026-10-21
**Status:** candidate verificado en Preview 00168de, 21/10; sin autorización de publicación

José indica seguir con la corrección priorizada. Sustituir las afirmaciones contradictorias de combinado/billete aparte por comprobar inclusiones de cada opción. Conservar tarifas base y mostrar los totales online de las dos fichas oficiales comprobadas el 21/10; disponibilidad por fecha no garantizada. Solo dos párrafos, fuentes y fecha de corrección parcial; conservar títulos, URL, intención y resto del artículo. [Informe](../docs/editorial-phase7c-monuments-fix.md). REVIEW residual de hechos y posible consolidación; no tocar guía protegida de Jerónimos/Qué ver, ni ejecutar migraciones. Preview antes de publicar.

## D-057 — Festivales: corrección factual y alcance de selección
**Date:** 2026-10-21
**Status:** candidate verificado en Preview 94e922c, 21/10; sin autorización de publicación

La continuación de José autoriza las correcciones puntuales priorizadas tras D-055. Conservar Festivales/Novedades separadas. Corregir comparación de santos y patronazgo en el bloque de junio; retirar superlativos/horas garantizadas sin evidencia y describir una selección por temporadas en H1/meta/índice. Mantener seoTitle, slug, año, intención, estructura y el resto del cuerpo. Fuentes primarias de Turismo de Portugal/EGEAC por edición; conservar las tres URLs previas. Etiquetar dateModified como corrección parcial real, sin certificar el artículo completo ni extrapolar programas. [Informe](../docs/editorial-phase7b-festivals-fix.md). REVIEW residual y Preview antes de publicar; sin otras migraciones ni cambios en páginas estacionales protegidas.

## D-056 — Cascais: enlace coherente con una ficha por libre
**Date:** 2026-10-20
**Status:** candidate verificado en Preview 9568ed6, cierre 21/10; sin autorización de publicación

José indica «ok continúa» tras priorizar la corrección de Cascais. Cambiar solo explicación y etiqueta del enlace final: describir tren/autobús por libre; conservar href, URLs y contexto. No tocar datos cambiantes ni fechas, SEO, ficha, diseño o afiliados. Cascais mantiene REVIEW por la posible consolidación; no autoriza esa migración. [Informe](../docs/editorial-phase7a-cascais-fix.md). D-055 conserva las cuatro URLs separadas por ahora. Validar antes de publicar, sin merge automático.

## D-055 — Mantener separadas por ahora las dos parejas de Fase 7
**Date:** 2026-10-20
**Status:** accepted, conservación temporal aprobada por José

José responde «sí, ahora dime qué sigue» a la propuesta concreta de conservar separadas Restaurantes románticos/Lisboa en pareja y Novedades 2026/Festivales 2026. Esta excepción temporal resuelve el gate de D-054 sin revocar definitivamente la planificación histórica: no ejecutar los dos 301 mientras no haya una nueva decisión expresa respaldada por equivalencia. Cuatro URLs accesibles e indexables con canonical propio, sin cambios de intención. Las etiquetas WAIT documentan la fusión aplazada; no son órdenes listas para ejecutar. Las dudas factuales y los otros REVIEW siguen pendientes. No autorización adicional de migraciones, reescritura, merge o producción. Siguiente prioridad propuesta: correcciones concretas antes de navegación/portada; conservar medición posterior a la publicación.

## D-054 — Consolidaciones: equivalencia antes de ejecutar los 301 previstos
**Date:** 2026-10-20
**Status:** revisión terminada; ejecución de dos fusiones en WAIT, propuestas de alcance pendientes de José

Tras la publicación autorizada de PR #112, «sigue» inicia la revisión de Fase 7 en rama nueva. Restaurantes aporta seis locales que Pareja delega; Novedades incluye información no festiva que el calendario no responde. Aplicar la regla expresa de detener/reportar la URL dudosa: mantener WAIT sin revocar ni sustituir destinos ordenados. Los otros casos siguen REVIEW, con ganadores de intención recomendados y condiciones de conservación; no usar ausencia de filas GSC como prueba de cero demanda o como permiso de retirada. [Informe](../docs/editorial-phase7-consolidation-review.md) y [memoria](seo/EDITORIAL-REBUILD-PHASE-7-2026-10-20.md). Cero migraciones/contenido público nuevos. No merge ni publicación de esta fase; resolver el alcance antes de navegación/Home.

**Cierre histórico:** D-045 a D-053 describen candidaturas previas. El lote conjunto fue aprobado para publicación por José y está en producción desde 20/10, SHA 5ad2c40. [Cierre de PR #112](https://github.com/josetabares24-png/portugal-autentico-v2/pull/112). Esa publicación no aprueba nuevas consolidaciones ni confirma exactitud de las URLs REVIEW.

## D-053 — Cultura: orientación sin convertir la historia en ficha de entradas
**Date:** 2026-10-19
**Status:** candidate, pendiente de revisión visual del lote

Continuación de José tras eventos. Dos perfiles culture manuales para Historia y Fado, manteniendo originales/orden y las aperturas ya útiles de Manuelino y Olaias. Azulejos, Terremoto y Descubrimientos REVIEW por dudas concretas documentadas; no reescribirlos ni migrarlos. No tablas de precios ni supresión de contexto colonial o incertidumbre histórica. [Informe](../docs/editorial-phase6-culture-review.md). Sin merge ni producción.

## D-052 — Eventos: conservar respuestas y distinguir edición confirmada de referencia
**Date:** 2026-10-19
**Status:** revisión de lote documentada; correcciones por URL pendientes

Continuación de José tras itinerarios. Las aperturas de las páginas recientes ya responden; no forzar cajas ni cambiar sus títulos/datos por uniformidad. Óbidos y festivales REVIEW por dudas específicas; detener intervención y reportar. Novedades WAIT hasta Fase 7. Invierno ya redirige históricamente a Mejor época: no reactivar un cuerpo antiguo por encontrarlo en datos. Cero cambios de aplicación y 25 perfiles conservados. [Informe](../docs/editorial-phase6-events-review.md). Sin merge ni producción.

## D-051 — Itinerarios: adelantar el reparto sin duplicar lo que ya responde
**Date:** 2026-10-19
**Status:** candidate, pendiente de revisión visual del lote

Continuación de José tras atracciones. Tres perfiles de cuatro/cinco/siete días, con el reparto original y seis pares. Uno/dos/tres días y Portugal en una semana mantienen sus resúmenes existentes. No tiempos, kilómetros, presupuestos, mapas o cronologías nuevos; no reactivar aliases ni fusionar páginas. [Informe](../docs/editorial-phase6-itineraries-review.md). Sin merge ni producción.

## D-050 — Atracciones: elección útil y dudas aisladas por URL
**Date:** 2026-10-19
**Status:** candidate, pendiente de revisión visual del lote

Continuación de José tras comida. Cuatro perfiles de elección, sin reescritura ni migración. No duplicar respuestas iniciales de fichas ni adaptar por categoría. Oceanário y Castelo quedan REVIEW por campaña/aviso fechado; Pena y Jerónimos protegidos sin cambios. No reactivar rutas históricas ni consolidar monumentos. [Informe](../docs/editorial-phase6-attractions-review.md). Sin merge ni producción.

## D-049 — Comida: dos resúmenes contrastados y revisión de dudas por URL
**Date:** 2026-10-19
**Status:** candidate, pendiente de revisión visual del lote

Continuación de José tras barrios. Presentación en comer barato y Pastéis de Belém, conservando originales, orden y SEO. Consulta puntual de importes/horario a negocios, sin renovar fechas ni prometer precios futuros. Café y gastronomía quedan REVIEW por dudas específicas; Time Out y consolidaciones mantienen su estado. No reactivar mejores natas ni decidir fusiones. [Informe](../docs/editorial-phase6-food-review.md). Sin merge ni producción.

## D-048 — Barrios: presentación por guía y dudas aisladas
**Date:** 2026-10-18
**Status:** candidate, pendiente de revisión visual del lote

José indica seguir tras transporte. Se añaden seis resúmenes manuales de barrio, conservando originales y su orden. No extender intención de alojamiento ni reactivar su duplicado. Comparativa general y Belém quedan REVIEW por contradicciones/datos variables pendientes de verificar; se detiene solo en esas URLs y se reporta. Sin fusiones, merge ni producción. [Informe](../docs/editorial-phase6-neighborhoods-review.md).

## D-047 — Rollout editorial por lotes, transporte primero
**Date:** 2026-10-18
**Status:** candidate, pendiente de revisión visual del lote

Tras entregar la Preview de siete pilotos, José indica continuar. Se inicia grupo A con tres perfiles manuales y se mantiene la guía nacional que ya responde. No activación masiva por categoría. Mantener URLs/intención/datos y validar cada lote en Preview; no merge ni producción. No se interpreta como autorización de fusiones ni publicación. [Informe](../docs/editorial-phase6-transport-review.md).

## D-046 — Sistema editorial con piloto acotado a siete guías
**Date:** 2026-10-18
**Status:** candidate, pendiente de revisión visual de Fase 5

La continuación de José autoriza Fases 3/4 sobre Metro, Navegante, pagos, movilidad, Time Out, Oriente y vida nocturna. Datos por página en pares semánticos, sin reescribir los objetos originales; presentación y dos reordenaciones controladas. No cifras sin evidencia, nuevos slugs ni activación por categoría. No se modifica el resto de URLs. D-045 y D-044 siguen vigentes. Entregar Preview y detenerse antes de rollout, merge o producción. [Informe](../docs/editorial-phase4-review.md).

## D-045 — Respuesta antes de reservas, Fase 2 editorial
**Date:** 2026-10-18
**Status:** candidate, pendiente de aprobación visual y publicación

La instrucción expresa de José para la reconstrucción editorial reemplaza la colocación temprana admitida por D-039 en este candidato. Un módulo final después de cuerpo y FAQ, máximo dos ofertas distintas y alternativa plegada. No banner comercial automático universal. Fuentes discretas sin perder referencias; índice único. D-039 se conserva como antecedente, no como autorización actual para adelantar CTA. D-044 sigue vigente. STOP antes de Fase 3; no merge ni producción. Detalle: [revisión](../docs/editorial-phase2-review.md).

Decisions here are intended to survive future chats and agent sessions.

## D-001 — Blog-first strategy
**Date:** 2026-09-23  
**Status:** accepted

Estaba en Lisboa will prioritize the editorial/blog engine over expansion as a multi-feature tourism portal.

Reason: current Search Console evidence shows the blog is already responsible for the large majority of visible page-level search demand and clicks.

## D-002 — No mass deletion
**Date:** 2026-09-23  
**Status:** accepted

Non-blog routes will not be deleted in bulk. Each route must be measured and migrated deliberately.

Reason: simplification is desirable, but destroying existing demand or link equity would work against the growth goal.

## D-003 — No redesign work without a metric hypothesis
**Date:** 2026-09-23  
**Status:** accepted

Aesthetic redesign is not a priority. UI work must protect or improve readability, crawlability, performance, navigation, engagement or conversion.

## D-004 — Live metrics are the authority
**Date:** 2026-09-23  
**Status:** accepted

Fresh Search Console / GA4 / production evidence overrides stale plans and old assumptions.

## D-005 — 1,000 impressions/day means sustained performance
**Date:** 2026-09-23  
**Status:** accepted

Success is 28,000+ impressions in a 28-day window, not a one-day spike.

## D-006 — Protect recently changed winners
**Date:** 2026-09-23  
**Status:** accepted

Priority pages changed around 2026-09-21 should enter an observation period before further material edits, once production deployment is confirmed.

## D-007 — Small attributable experiments
**Date:** 2026-09-23  
**Status:** accepted

SEO changes should be small enough to attribute. Broad simultaneous rewrites are reserved for clear technical/editorial recovery cases, not routine optimization.

## D-008 — Legacy itinerary demand can outrank URL neatness
**Date:** 2026-09-23  
**Status:** accepted

If an itinerary URL has meaningful organic demand, keep or editorialize that URL until a migration has evidence and a safe destination. "Everything under /blog" is not worth sacrificing rankings by itself.

## D-009 — Primary navigation becomes editorial
**Date:** 2026-09-23  
**Status:** accepted

The global header will promote only **Guías** and **Free tours**. Contact and trust links move to the footer.

Itinerarios, Actividades, Entradas and Planifica tu viaje lose global-navigation prominence immediately.

Reason: 90-day evidence shows that the blog is the acquisition engine, while the prior navigation presented too many weak products as if they were equally important.

**Amendment — 2026-10-01:** Restore **Entradas** as a third primary-navigation destination at `/comprar-entradas`. Ticket purchase is a distinct, high-intent traveler need and should remain discoverable while the product is improved incrementally. This does not restore the previous broad navigation. The next iteration should strengthen the existing destination with curated ticket inventory, the tickets API and GetYourGuide, without turning the header into a catalog.

## D-010 — Free tours is the current commercial exception
**Date:** 2026-09-23  
**Status:** accepted

Keep /free-tours-lisboa visible in primary navigation for now.

Reason: GA4 recorded 23 affiliate_click events from that page in roughly 90 days, substantially more than any other commercial surface.

This is not proof of revenue; it is the strongest current behavioral conversion signal.

## D-011 — Demotion is not deletion
**Date:** 2026-09-23  
**Status:** accepted

Weak product surfaces can be removed from navigation immediately without redirecting or deleting their URLs. URL retirement remains a separate SEO decision.


## D-012 — Visual changes require explicit approval
**Date:** 2026-09-23  
**Status:** accepted

Major public visual changes must be previewed and explicitly approved before merge.

Reason: editorial/product direction and visual implementation are separate decisions. A strategy discussion or reference image does not authorize replacing an established design.

Bug fixes, accessibility fixes and small layout corrections remain allowed without a separate visual-approval step.

## D-013 — Mente Lisboa v2 y sistema LOCKED
**Date:** 2026-09-23  
**Status:** accepted

La nueva Mente Lisboa v2 pasa a ser el marco principal de producto y crecimiento.

Se crea `LOCKED-DECISIONS.md` para separar decisiones que requieren instrucción explícita antes de cambiarse.

La recuperación de memoria, métricas, aprendizajes, decisiones LOCKED y estado real pasa a ser obligatoria antes de propuestas importantes.


## D-014 — Retire /pack-completo
**Date:** 2026-09-23  
**Status:** accepted

`/pack-completo` is retired and permanently redirected to `/blog`.

Evidence:
- no Search Console rows in the previous 12 months;
- negligible GA4 use;
- duplicated the role of the editorial index and itinerary hub;
- only one confirmed internal entry point from `/itinerarios`.

The old URL remains resolvable through a permanent redirect; it is removed from the sitemap and from direct internal linking.


## D-015 — Activities require selective treatment
**Date:** 2026-09-23  
**Status:** accepted

Do not mass-retire, mass-noindex or mass-redirect the 20 activity-detail URLs.

Reason:
- exact-query overlap with blog pages is minimal in current Search Console data;
- several activity pages have independent page-1/page-2 signals;
- Oceanário has a measurable affiliate-click signal.

The `/actividades` hub remains demoted, but individual URLs are reviewed selectively by search intent, freshness and commercial value.


## D-016 — Newsletter must be a measured asset
**Date:** 2026-09-23  
**Status:** accepted

A newsletter signup is not treated as business progress unless successful subscription requests are measurable.

The blog form now emits GA4 `sign_up` only after the subscription API confirms success. This measures successful requests, not unique Brevo contacts.

Unsubscribe must be functional before the site promises “Puedes darte de baja cuando quieras”.

The Brevo-hosted template, if `BREVO_SUBSCRIPTION_TEMPLATE_ID` is configured in production, remains an external dependency and must be verified separately; repository cleanup does not prove its visible body copy changed.


## D-017 — Separate plan leads from newsletter
**Date:** 2026-09-23  
**Status:** accepted

`/api/planifica-tu-viaje` no longer adds plan requests to Brevo newsletter list 5.

Reason:
- the public privacy policy says plan data is used to answer the request;
- newsletter communications require a separate voluntary subscription;
- the form has no newsletter opt-in;
- service-request email and direct-marketing email are separate purposes.

Transactional notification/confirmation email remains unchanged.

Historical contacts previously added to list 5 with source `planifica-tu-viaje` require a separate Brevo-side audit before using the list for marketing.


## D-014 — Affiliate strategy must use owned evidence
**Date:** 2026-09-23  
**Status:** accepted

The old root `GUIA-AFILIADOS.md` is deprecated as an operating strategy.

Provider priority, revenue expectations, commission claims and placement strategy must be based on:
- current partner documentation;
- our own click/conversion data;
- product fit.

Current commercial exception with the clearest owned signal: Free Tours.

Reference: `brain/business/AFFILIATE-STRATEGY.md`.


## D-019 — Compete on useful current knowledge, not catalogue size
**Date:** 2026-09-23  
**Status:** accepted

European/direct competitor benchmarking shows that Estaba en Lisboa should not compete by:
- publishing the most pages;
- building the biggest attraction catalogue;
- claiming more "hidden gems";
- copying ticket marketplaces;
- imitating high-volume city-news networks.

Direction:
- factual freshness;
- decision-useful editorial depth;
- neighbourhood understanding;
- recognisable human authorship;
- owned audience;
- eventually, an owned product if demand is demonstrated.

Reference: [[strategy/EUROPE-CITY-GUIDE-BENCHMARK-2026-09-23]].


## D-020 — Activity freshness beats invented local authority
**Date:** 2026-09-23  
**Status:** accepted

For dynamic attraction/activity pages, current operational facts outrank decorative "local" advice.

Priority order:
1. current official status;
2. current access/transport;
3. price/hours where verified;
4. what the visitor actually needs to decide;
5. editorial context.

Do not manufacture "the mistake everyone makes", "locals do this", crowd timing or authenticity heuristics unless supported by evidence or documented first-hand experience.

The 2026-09-23 freshness pass on Cristo Rei, Senhora do Monte, Fado, Cascais/Cabo da Roca, Santa Justa and Oceanário is the reference implementation.


## D-021 — 1,000 clicks/day is a north star, not the next KPI
**Date:** 2026-09-23  
**Status:** accepted

Long-term ambition:
- 1,000 organic Google clicks/day.

Current operating milestone remains:
- 1,000 organic impressions/day sustained.

Growth ladder:
1. 1,000 impressions/day
2. 10 clicks/day
3. 30 clicks/day
4. 100 clicks/day
5. 300 clicks/day
6. 1,000 clicks/day

Reason:
The current 28-day baseline is 49 clicks / 6,218 impressions. Jumping directly to 1,000 clicks/day would encourage volume vanity and poor prioritization.

Planning model:
- aggressive: ~30–36 months;
- working/base: ~42–60 months;
- conservative: ~60–84 months.

These are scenario estimates, not promises, and must be revised as real growth compounds.


## D-022 — Affiliate monetization is contextual, not a marketplace
**Date:** 2026-09-23  
**Status:** accepted

Estaba en Lisboa monetizes a travel decision only when a partner product exactly matches the user's intent.

Partner roles:
- GuruWalk: free tours.
- GetYourGuide: experiences, excursions and selected attraction products.
- Tiqets: selected attraction tickets and passes.

A destination can use different providers in different placements if the exact product/campaign or conversion evidence differs.

Do not turn the site into a generic ticket catalogue.


## D-023 — GuruWalk MCP is enrichment, not a replacement
**Date:** 2026-09-23  
**Status:** accepted

GuruWalk's official affiliate MCP is available as a server-side capability for live tour discovery and availability.

Do not replace the current static GuruWalk affiliate funnel yet.

Reason:
- current Free Tours flow already has owned click evidence;
- MCP usefulness must be proven before changing a working commercial surface;
- API secrets must remain outside source control and Mente Lisboa.

Reference: [[business/GURUWALK-MCP-2026-09-23]].


### Decisión — Iteraciones visuales sociales

**Estado:** LOCKED por preferencia operativa de José.

Para Estaba en Lisboa, las piezas sociales no se rediseñan completamente en cada feedback. El flujo obligatorio es:

**diagnóstico → propuesta → aprobación → ejecución → microajustes**

Reglas asociadas:
- mantener la tipografía de los primeros carruseles aprobados como referencia;
- preservar el degradado como recurso de marca, salvo cambio previamente propuesto y aprobado;
- no introducir rayas, adornos, iconos o recursos nuevos sin justificación y aprobación;
- proteger el logo y su tratamiento;
- evitar crops/zoom agresivos;
- modificar solo lo acordado;
- priorizar continuidad de marca sobre novedad visual.

Esta decisión debe consultarse antes de cualquier nueva ejecución en Canva.


## D-024 — Analytics loads only after explicit consent
**Date:** 2026-09-23  
**Status:** accepted

Google Analytics must not be requested or initialized before the visitor has explicitly accepted analytics cookies.

Implementation rule:
- consent source is centralized;
- no unconditional GA loader in the root layout;
- product events remain independently consent-gated;
- historical GA4 session/pageview levels across the deployment boundary require caution.

Reason:
Privacy behavior and measurement behavior must match the public cookie policy.

Reference: [[privacy/ANALYTICS-CONSENT-GATE-2026-09-23]].


## D-024 — Factual correctness can override observation windows
**Date:** 2026-09-23  
**Status:** accepted

An SEO observation window protects attribution, not stale facts.

If an official source proves that a current public statement is materially false about access, closure, price, timetable, reservation or another visitor-impact condition:
- apply the smallest factual correction;
- do not combine it with SEO/copy/CTA changes;
- record it as a confound if the page is under experiment;
- keep the official source and next-review trigger in Visitor Impact Watch.

Short-lived changes should not be injected into evergreen content unless they materially block the visitor's plan.

Reference: [[operations/VISITOR-IMPACT-WATCH-2026-09-23]].


## D-025 — Every public blog page must earn Level 1
**Date:** 2026-09-23  
**Status:** accepted

The public blog is managed as a 60-page editorial portfolio, not as a publishing counter.

A page reaches **Level 1** only when it combines:
- immediate intent fit;
- decision-useful value;
- differentiated editorial context;
- trustworthy sourcing for strong or volatile claims;
- human voice without invented first-hand authority;
- useful internal continuation;
- contextual, non-intrusive monetization;
- a maintenance path for volatile information.

Operational rule:
- do not mass-rewrite the blog;
- protect active SEO experiments and recent winners;
- prioritize debt by **SEO signal × trust risk × editorial weakness × freshness need**;
- a rewrite is not DONE until code, sources, CI and production are verified.

Control: [[content/BLOG-LEVEL-1-CONTROL-2026-09-23]].


## Decisión — Sistema visual aprobado para videos cortos
**Date:** 2026-09-23  
**Status:** LOCKED por aprobación explícita de José

José aprobó como línea visual base para Reels/Shorts de Estaba en Lisboa:

- video real de Lisboa como base;
- overlay editorial por encima, no póster estático;
- logo pequeño arriba izquierda;
- Playfair/serif editorial para hook o titular;
- Montserrat/sans para texto de apoyo;
- crema #F5EFE6 como color principal;
- terracota #B8472E para palabras clave;
- degradado oscuro inferior, progresivo, para proteger la lectura;
- texto breve y escalonado en el tiempo;
- estética limpia, cultural, elegante y reconocible como Estaba en Lisboa;
- sin cajas, marcos, iconos ni adornos gratuitos.

Aplicación inicial validada: Reel de D. José I en Praça do Comércio.

Reglas:
- priorizar legibilidad sobre cantidad de texto;
- si el texto no se lee cómodo, dividirlo en bloques temporales;
- mantener fotografía/video real visible y respirado;
- el overlay debe acompañar al video, no taparlo;
- reutilizar este lenguaje para microhistorias, estatuas, lugares, curiosidades y datos de Lisboa;
- no convertirlo todavía en una serie rígida: primero medir retención, guardados y comentarios.


## D-026 — Home becomes a traveler gateway, not an accordion or blog index
**Date:** 2026-09-25
**Status:** accepted architecture direction; visual implementation still requires explicit approval

José explicitly chose the next Home architecture direction:

- no accordion/retractable panels as the final Home model;
- use seven direct, visually elaborate editorial portal-buttons:
  - Rutas / Guías
  - Movilidad
  - Qué visitar / Actividades
  - Dónde comer
  - Dónde tomar algo
  - Spots
  - Cuídate de esto
- each portal must lead to a substantive guide/pillar page, not a thin list of posts;
- the blog/editorial archive remains the SEO acquisition engine but is not the product model the visitor must navigate;
- the lower Home returns to the existing editorial/photo identity as an abre-boca of Lisbon stories/guides;
- do not create seven new URLs automatically: reuse/promote existing high-signal pages where intent already exists and create new pillars only where they serve a distinct job.

SEO guardrails:
- no mass URL migration;
- no duplicate generic transport/nightlife/safety pages without intent evidence;
- preserve active SEO experiment pages;
- Home portal links must be server-rendered crawlable links;
- record/measure portal clicks with `select_content`;
- visual changes still require José's explicit Preview approval before production.

Reference: [[strategy/HOME-TRAVELER-GATEWAY-2026-09-25]].


## D-030 — Reservations appear only after the guide has resolved the decision
**Date:** 2026-09-25
**Status:** superseded by D-031 after visual rejection

The traveler gateway can include GetYourGuide recommendations, but only as a selective continuation of an already answered need.

Rules:
- keep the Home, Movilidad, Fotografías and Cuídate de esto free of booking product blocks;
- Rutas may show exact Sintra options when the distinction between independent planning and removed friction is explained;
- Qué visitar may show up to three exact reservations where a ticket, small group or chosen time solves a real problem;
- Dónde comer may show one gastronomic tour as an orientation option, not as the default way to eat;
- Dónde tomar algo may show fado when it is the principal timed plan for the night;
- commercial sections render after the full editorial guide, never before the informational answer;
- reuse `BOOKABLE_PRODUCTS`, `resolveBookingLink`, `BookingCard` and existing affiliate analytics instead of duplicating provider URLs;
- do not copy volatile prices, ratings, availability or urgency claims;
- direct links remain visible without third-party scripts, while partner widgets continue to require explicit cookie consent;
- each guide shows one to three products maximum and includes the compact affiliate disclosure.

This Preview uses the existing official GetYourGuide partner links and campaign attribution. It does not introduce or claim a separate live catalog API that is not present in the repository.


## D-031 — One decision, one direct booking widget
**Date:** 2026-09-25
**Status:** accepted direction for a new Preview; production requires explicit visual approval

The first reservation experiment made the traveler guides feel like catalogs. The correction is to reduce both the commercial surface and the amount of interface around the answer.

Rules:
- use the official GetYourGuide widget directly instead of recreating product cards in the site's design;
- show one widget only in `Qué visitar`, where the visitor is already deciding what deserves time and a reservation;
- limit the widget to two broad first-trip choices: Castelo de São Jorge and a Tajo cruise;
- place it after the practical answer and human questions, before the longer supporting reading;
- keep Home, Rutas, Movilidad, Dónde comer, Dónde tomar algo, Fotografías and Cuídate de esto free of booking widgets;
- remove the guide table of contents: it advertised page length instead of resolving the immediate question;
- shorten heroes and vertical spacing so decisions arrive sooner, especially on mobile;
- load the third-party widget only after explicit cookie consent and provide a quiet way to reopen preferences;
- keep the compact affiliate disclosure next to the widget;
- `/guia/*` remains `noindex, follow`, outside the sitemap, until the canonical strategy is approved;
- do not merge or deploy this experiment to production without explicit visual approval.

Known data guardrail: the existing `sintra-completa` short link currently resolves to GetYourGuide tour `79596`, a Palacio da Pena product, so it must not be presented as a complete Sintra excursion until its destination is corrected.

Reference: [[strategy/HOME-TRAVELER-GATEWAY-2026-09-25]].


## D-029 — Every traveler guide earns a distinct practical tool
**Date:** 2026-09-25
**Status:** accepted Preview standard; production and indexing still require explicit approval

The seven traveler guides must not differ only through copy and photography. Each destination needs one useful decision aid that matches the job the traveler is trying to solve.

Rules:
- Rutas translates available days into a realistic travel rhythm and base;
- Movilidad maps common situations to the most sensible transport choice;
- Qué visitar helps decide what fits in the time actually available;
- Dónde comer connects the moment of the day with a useful eating format;
- Dónde tomar algo plans the rhythm of an evening instead of listing venues;
- Rincones para fotografiar connects light and time with scene and technique;
- Cuídate de esto pairs a real situation with what to do and what to avoid;
- tools use continuous editorial layouts rather than a repeated card template;
- links inside tools remain internal and are measured as `guide_practical_tool`;
- each tool contains four concise scenarios and remains readable at 390 px;
- the Home directory uses compact 92 px mobile rows and hides secondary descriptions on the narrowest viewport;
- guide photography continues to come from `public/images/lisboa-originales`;
- the rejected-cookie state uses a small settings control instead of a text pill that competes with content.

The SEO gate remains unchanged: `/guia/*` stays `noindex, follow`, without canonicals or sitemap inclusion, until each destination is mapped against established search intent and existing ranking URLs.

Reference: [[strategy/HOME-TRAVELER-GATEWAY-2026-09-25]].


## D-027 — Traveler-guide prototypes stay noindex until the canonical map is resolved
**Date:** 2026-09-25
**Status:** accepted implementation guardrail; visual/content review in progress

The seven `/guia/*` destinations are product prototypes, not seven automatically approved SEO pages.

Rules:
- keep them `noindex` while their visual and editorial role is reviewed;
- use `follow` so useful links to established editorial answers remain crawlable;
- do not add them to the sitemap;
- do not assign canonicals or migrate ranking URLs before intent/query comparison;
- promote an existing URL when it already owns the broad intent;
- only `Qué visitar` and `Dónde comer` remain credible new-pillar candidates, pending validation;
- all portal/guide hero photography must use José's files from `public/images/lisboa-originales`;
- portal and decision numbering is removed because the choices are parallel, not sequential;
- guide headings inherit the established Blog title typography rather than creating a separate visual language.

Reference: [[strategy/HOME-TRAVELER-GATEWAY-2026-09-25]].


## D-028 — Traveler guidance starts from human questions, not taxonomy
**Date:** 2026-09-25
**Status:** accepted design and editorial standard for the Preview iteration

The gateway and its answer pages should sound like a knowledgeable person helping another person make a decision.

Rules:
- portal labels use short questions a traveler might genuinely ask, rather than category or product language;
- display titles may be more human than the underlying SEO title and URL;
- every guide includes three high-friction questions with direct, contextual answers;
- answers should acknowledge trade-offs instead of pretending there is one universal recommendation;
- internal editorial language such as "we should publish" or "this subguide will grow" must never appear in traveler-facing copy;
- specialist terms such as "spots" should be replaced by ordinary Spanish when a clearer expression exists;
- the question-and-answer treatment uses continuous editorial bands and rules, not repeated cards or accordions;
- questions must remain short enough to scan on a 390 px viewport.

This standard does not change the SEO gate in D-027: the seven prototypes remain `noindex, follow`, without canonicals or sitemap inclusion.

Reference: [[strategy/HOME-TRAVELER-GATEWAY-2026-09-25]].


## D-032 — Eight traveler needs have eight canonical owners
**Date:** 2026-09-30
**Status:** accepted implementation direction; production requires explicit visual approval

The Home traveler gateway uses eight balanced photographic entrances after adding `Dónde alojarte`, a real planning need that already has a canonical article.

Rules:
- desktop uses a balanced 4 × 2 directory, tablet 2 × 4 and mobile one full photographic entrance at a time;
- each entrance links directly to the complete canonical answer;
- no `/guia/*` route remains a public intermediate destination;
- preserve `/itinerarios` and the established movement, accommodation, nightlife, photography and mistakes articles;
- create only `/que-ver-en-lisboa` and `/donde-comer-en-lisboa`, because those broad intents lacked a clear owner;
- both new pillars must be indexable, self-canonical, present in the sitemap, sourced and complete without a required second click;
- redirect every legacy `/guia/*` prototype permanently to the relevant owner URL;
- do not split subtopics into more indexable pages without distinct intent and evidence;
- keep the official GetYourGuide widget only in `Qué ver`, after the editorial answer.

Reference: [[strategy/HOME-TRAVELER-GATEWAY-2026-09-25]].


## 2026-09-27 — Tutabares pasa a Mente Lisboa

**DECISIÓN:** la memoria de prompts, identidad narrativa, estado y aprendizajes de Tutabares vive en `brain/tutabares/` dentro de `josetabares24-png/portugal-autentico-v2`.

**Razón:** Tutabares comparte Lisboa, Portugal, actualidad local, turismo, audiencia y oportunidades de contenido con Estaba en Lisboa. Mantenerla en el repositorio de Estaba Investigando mezclaba dos sistemas editoriales que deben permanecer separados.

**Fuente de verdad:**
- Notion = cuerpos vigentes de guiones.
- GitHub / Mente Lisboa = prompts, reglas, decisiones, estados y aprendizaje de Tutabares.
- GitHub / Estaba Investigando = memoria exclusiva del proyecto true crime/historias reales.

**Regla:** no mantener copias activas de la memoria Tutabares en ambos repositorios.


## D-033 — Complete pillars, visible authorship and a 2 + 3 + 3 Home
**Date:** 2026-09-30
**Status:** accepted candidate implementation; production requires explicit visual approval

The eight canonical owners from D-032 remain unchanged. This decision refines presentation and authority without creating more public destinations.

Rules:
- desktop uses an editorial 2 + 3 + 3 photographic rhythm: two broad first decisions, followed by six specific needs;
- tablet remains two columns and mobile remains one direct photographic entrance;
- every Home entrance still has exactly one canonical destination and uses a first-party photograph;
- /que-ver-en-lisboa and /donde-comer-en-lisboa must answer the broad need on the page itself, including concrete trade-offs, visible FAQs, review date and primary sources;
- optional deep reading appears only after the complete answer and is limited to four specific next decisions;
- each new pillar receives a small number of contextual backlinks from relevant support articles; do not run a site-wide exact-match linking campaign;
- protected ranking pages keep their titles, main copy and intent;
- visible authorship points to José Tabares, and /sobre-nosotros identifies the author and editorial method with ProfilePage markup;
- Article and BreadcrumbList are the useful structured-data types for these guides;
- keep FAQs visible for humans, but do not publish FAQPage markup as decorative schema because ordinary travel sites are not eligible for its rich result;
- the official GetYourGuide widget remains only on Qué ver, after the editorial answer and behind consent;
- do not merge or deploy to production until the responsive Preview is explicitly approved.

This decision supersedes only the 4 × 2 desktop layout in D-032. Canonical ownership, redirects and the rule against thin bridge pages remain in force.

Reference: [[strategy/HOME-TRAVELER-GATEWAY-2026-09-25]].


## D-034 — Pillar pages inherit the Blog reading language; Free Tours gets one date tool
**Date:** 2026-09-30
**Status:** accepted Preview candidate; production requires explicit visual approval

User review found that `/que-ver-en-lisboa` and `/donde-comer-en-lisboa` looked like a separate product even though the rest of the gateway resolved into established Blog articles. Their canonical role and full content remain correct; the mismatch was presentation.

Rules:
- keep both pillar URLs, indexability, complete answers, metadata and structured data;
- present them with the established Blog system: cream paper, editorial header, panoramic first-party photograph, narrow reading column, article typography, restrained table of contents, visible FAQs, sources and author block;
- do not turn either page into a thin Blog index or require another click to get the answer;
- keep the single official GetYourGuide widget only in `Qué ver`, inside the article rhythm and behind consent;
- on `/free-tours-lisboa`, use GuruWalk's official affiliate MCP/API rather than describing paid GetYourGuide products as free tours;
- add one user-initiated date finder, capped at three live results and three times per result;
- keep the API key server-side, validate dates and returned domains, cache requests and preserve the static category links as fallback/control;
- do not add a live marketplace, automatic page-load request, invented availability, price or urgency claim;
- measure live-result clicks separately with placement `live-date-finder`;
- keep production untouched until responsive Preview approval.

This is an explicit, narrow exception to the 28/09–04/10 web focus freeze requested by José. It extends the existing Free Tours surface, which already has the clearest owned affiliate-click signal, instead of opening a new provider or commercial line.

Reference: [[strategy/HOME-TRAVELER-GATEWAY-2026-09-25]] and [[business/GURUWALK-MCP-2026-09-23]].


## D-035 — Booking pages use a hybrid editorial/direct-link model
**Date:** 2026-10-01
**Status:** accepted Preview candidate; production requires explicit visual approval

The ticket and free-tour pages should feel like useful Lisbon guidance while preserving the shortest measurable path to an exact booking. They should not imitate a generic affiliate marketplace or force every product through an embedded widget.

Rules:
- use a real first-party Lisbon photograph and direct traveler language at the top of both booking pages;
- keep native, attributable direct-link cards as the primary ticket catalog because they preserve exact products, referral parameters and product-level measurement;
- retain only curated options that solve recognizable trip decisions; do not inflate the catalog to create visual density;
- keep the GuruWalk live date finder user-initiated, capped at three results and three times per result;
- allow a sanitized provider image only inside submitted live results, with a first-party photograph as fallback;
- preserve the validated affiliate destination and referral parameters independently from the image source;
- keep static free-tour routes as the editorial fallback/control and disclose affiliate relationships visibly;
- do not invent price, availability, urgency, ratings or review counts;
- keep `/comprar-entradas` and `/free-tours-lisboa` as their existing canonical, indexable sitemap owners; do not create support pages for this visual iteration;
- production remains untouched until the responsive Preview and live referral behavior receive explicit approval.

This decision extends D-010 and D-034. It does not authorize a site-wide booking marketplace or a new provider integration.


## D-036 — Tiqets enriches curated cards; it does not own checkout UX
**Date:** 2026-10-01
**Status:** accepted implementation guardrail; production requires explicit visual approval

Tiqets API data may reduce uncertainty on `/comprar-entradas`, but Estaba en Lisboa remains the editorial and visual owner of the page. The integration is a server-side enrichment layer, not a replicated booking engine.

Rules:
- enrich only products that are selected editorially on the hub: originally Oceanário (`975260`), Palacio da Pena (`1120392`) and Lisboa Card (`974847`); since D-042, every Tiqets product in the hub (eleven, listed by hand in `TIQETS_CURATED_PRODUCTS`);
- keep the API credential server-only in `TIQETS_API_TOKEN`; never commit it, prefix it with `NEXT_PUBLIC`, log it or pass it to a client component;
- keep first-party photography and Estaba en Lisboa copy; Tiqets product photos are allowed only under the rules of D-042 (API only, their CDN only, credited, refreshed with the snapshot);
- expose only the minimum useful snapshot: starting price, general sale status, mobile-ticket support, a sanitized booking URL and (D-042) one product image;
- accept booking URLs only from HTTPS Tiqets hosts with partner `estaba_en_lisboa-189233`, then preserve the existing `tq_campaign` for product-level attribution;
- describe prices as “Desde” and make clear that the final amount and conditions are confirmed by the provider;
- do not publish Tiqets review text, artificial scarcity or inferred urgency;
- cache product calls, fetch the curated records in parallel and fail independently so one provider error cannot break the page;
- fall back to the existing static attributed URL whenever the token, API or product response is unavailable;
- continue checkout on Tiqets. Do not create or confirm orders through the Booking API without a separate, explicitly approved integration and production-order safety plan;
- do not expand the curated catalog automatically from API search results (it was eight cards when this was written; see D-041 for the current sixteen, added by hand and verified one by one);
- no merge or production deployment until the responsive Preview is approved.

This decision narrows the provider integration allowed by D-035. It preserves a calm, curated experience while making three exact ticket decisions more transparent. Since D-042 live enrichment covers every Tiqets product in the hub; when the API gives no price, the card shows the official box-office price with its source, or «Precio y horarios en …».


## D-037 — Controls must be proportional to the choice set
**Date:** 2026-10-01
**Status:** accepted

Small curated travel selections should not inherit marketplace controls by default. On `/comprar-entradas`, eight fixed recommendations are faster to scan directly than through search, category chips, result counts and empty states.

Rules:
- show the curated ticket and experience recommendations directly after their editorial introduction (amended by D-041: with sixteen products they are grouped into anchored sections, but there is still no search, filter state or result counts);
- do not restore search or category filters unless the useful inventory grows enough that direct scanning demonstrably fails;
- keep date input on `/free-tours-lisboa` because availability and schedules actually change by travel date;
- give each transactional block one main action and one concise explanatory/disclosure note on mobile;
- prefer direct, upright headings for functional tools and reserve expressive display treatment for editorial storytelling;
- review control density and section spacing at 390 px and desktop before Preview approval.

This decision applies the broader calm, human-first interface principles from D-034 to the two booking surfaces.


## D-038 — Commercial intent must be explicit without impersonating the seller
**Date:** 2026-10-01
**Status:** accepted production guardrail

Booking pages should help a traveler act, not hide the transaction behind generic “see options” language. That clarity must remain accurate about who provides and charges for the booking.

Rules:
- use concise search titles that match the real task: buying Lisbon tickets or finding and reserving a free tour;
- make each CTA name the exact action and product or route, such as “Comprar entrada al Oceanário” or “Reservar free tour por Alfama”;
- keep the final price and payment with the named provider and say so visibly before the catalog;
- preserve `sponsored noopener noreferrer`, referral validation and product/campaign-level attribution on outbound links;
- never add fake scarcity, countdowns, “best seller” claims, invented savings or unsupported rankings;
- do not publish merchant `Product` or `Offer` markup unless Estaba en Lisboa genuinely controls and can keep the required offer data accurate;
- preserve useful editorial structure, first-hand photographs, visible questions, sources and internal links so the page remains a complete answer rather than a doorway;
- record exact travel dates neither in analytics nor campaign parameters; use coarse planning-window buckets for finder diagnostics;
- judge the experiment by attributable outbound clicks and partner bookings, not by button impressions or finder submissions alone.

This decision extends D-035 through D-037 and applies specifically to `/comprar-entradas` and `/free-tours-lisboa`.


## D-039 — Botón de reserva bajo «Lo esencial» en páginas de compra
**Date:** 2026-10-09
**Status:** accepted (aprobado por José, auditoría máxima, acción 1)

En las páginas donde la siguiente decisión del lector es comprar (Jerónimos, Sintra, Lisboa Card, Navegante y Oriente), un bloque de reserva va justo debajo del resumen «Lo esencial». Antes, el primer botón quedaba a 8-11 pantallas de móvil. El resto de artículos siguen con la regla de E-011: el bloque va en la sección que lo justifica. Se mantiene el máximo de dos bloques por artículo y E-006/E-007 quedan fuera. Detalle: [[seo/AUDIT-ACTIONS-1-3-4-2026-10-09]].

## D-EMAIL — Contact email → Gmail
**Date:** 2026-10-09  
**Status:** accepted

José ordered the public contact email changed from `contacto@estabaenlisboa.com` (and any `hola@estabaenlisboa.com`) to `estabaenlisboa@gmail.com` across legal pages, schema, contact/planifica APIs and user-facing mailto. Published same day.

## D-040 — Página de precios de transporte y newsletter con PDF en los artículos
**Date:** 2026-10-09
**Status:** proposed (rama `feat/transporte-newsletter`, sin publicar; pendiente de José)

Se crea `/transporte-lisboa` como tabla de tarifas oficiales y directorio de las guías de transporte. No es una guía genérica más: no repite el «qué uso según la situación» de `como-moverse-por-lisboa` (E-001). Lleva un único bloque de Lisboa Card en la sección que hace la cuenta, lo que es una excepción explícita a D-031 que José debe aprobar o quitar. El pie gana una columna «Planificar» y los enlaces legales completos; la cabecera no cambia.

Los artículos llevan un formulario de newsletter con casilla de consentimiento y un PDF de regalo, «Qué reservar antes de ir a Lisboa». No lo llevan E-006 ni E-007. El PDF se entrega en la web porque la plantilla de bienvenida vive en Brevo. Detalle: [[seo/TRANSPORTE-NEWSLETTER-2026-10-09]].

## D-041 — /comprar-entradas pasa a dieciséis productos por secciones
**Date:** 2026-10-09
**Status:** proposed (rama `feat/estetica-entradas-freetours`, sin publicar; pendiente de aprobación visual de José, D-012)

José pidió más entradas y actividades. El catálogo pasa de 10 a 16 productos, añadidos a mano y comprobados uno a uno en su ficha (no salen de la API). Se agrupan en cinco secciones con ancla: Imprescindibles, Belém, Sintra, Museos y palacios, Experiencias. Cada producto está en una sola sección. Encima hay un índice de enlaces (no son filtros: no esconden nada ni guardan estado). En móvil la tarjeta es compacta, con la miniatura junto al título.

Reglas:
- un producto solo entra si su ficha existe y responde, lleva `partner=estaba_en_lisboa-189233` y su propio `tq_campaign` (Tiqets) o `partner_id=J2Z24GU` (GetYourGuide), y el monumento está abierto;
- precio: «Desde» solo con dato de la API de Tiqets; si no, la taquilla oficial con enlace a la web y fecha de comprobación; si no, «Precio y horarios en …»; nunca valoraciones;
- condiciones de cancelación en una línea, solo si se han comprobado en la ficha;
- sin foto propia del sitio correcto, la tarjeta usa la foto de producto de Tiqets o el hueco de color de D-042, nunca la foto de otro lugar ni una de banco de imágenes;
- se quedan fuera, de momento: Elevador de Santa Justa (cerrado), MAAT y Gulbenkian (sin ficha en Tiqets), Quinta da Regaleira (la Fundação dice que su única taquilla autorizada es la suya; Tiqets la vende un intermediario), tuk-tuk (la web desaconseja los tuk-tuks en zonas saturadas) y Museu Nacional do Azulejo (cerrado por obras).

Detalle: [[content/2026-10-09-ENTRADAS-V2]].


## D-042 — Fotos de producto de Tiqets dentro de la tarjeta propia
**Date:** 2026-10-09
**Status:** proposed (rama `feat/estetica-entradas-freetours`, sin publicar; pendiente de aprobación visual de José, D-012)

A José no le gustaban los bloques azul noche de las tarjetas sin foto y pidió que todas las tarjetas se vean iguales. Las que no tienen foto propia usan la foto de producto que Tiqets da en su API, dentro de nuestra tarjeta: mismo tamaño, recorte, tipografía, fila de precio y botón.

Reglas:
- solo la imagen; nunca un widget visible de un proveedor en el hub, porque trae su propio diseño. Si un producto tiene enlace directo, se pinta siempre la tarjeta propia, haya o no consentimiento de cookies;
- la foto llega por la API (`images[0]`, el tamaño más grande), solo si es HTTPS de `aws-tiqets-cdn.imgix.net`, y se renueva con el snapshot (6 h). No se copian URLs de imágenes al código;
- orden (actualizado por D-043): foto del sitio (de José o de Wikimedia Commons con crédito); si no hay, la de Tiqets; si la propia es un apaño (`preferProviderImage`, hoy solo la Pena con la foto de la estación), la de Tiqets va primero; si no hay ninguna o no carga (`onError`), un hueco crema con el mismo recorte y un icono, a juego con la tarjeta;
- toda foto de Tiqets lleva el crédito «Foto: Tiqets» (o «Foto: autor / Tiqets») encima de la imagen, y la página lo aclara: no son fotos de José;
- alt: el `alt_text` de Tiqets o, si falta, «{producto}, foto de producto de Tiqets»;
- `TIQETS_API_BASE_URL` solo puede apuntar a `localhost`/`127.0.0.1`, para probar en local con un servidor simulado; en cualquier otro caso se usa la API real;
- ojo: según la documentación de Tiqets, las claves de afiliado «Essential» no reciben imágenes salvo que Tiqets las active. Si la cuenta no las tiene, en producción se ven los huecos de color. Hay que pedir a Tiqets que active las imágenes.

Detalle: [[content/2026-10-09-ENTRADAS-V2]].


## D-043 — Fotos de Wikimedia Commons para las tarjetas sin foto de José
**Date:** 2026-10-09
**Status:** proposed (rama `feat/estetica-entradas-freetours`, sin publicar; pendiente de aprobación visual de José, D-012)

José quiere que las dieciséis tarjetas de `/comprar-entradas` tengan foto real sin depender de que Tiqets active imágenes en su API. Las seis que no tenían foto propia (Castelo dos Mouros, Palacio Nacional de Sintra, Palacio da Ajuda, Tesoro Real, Jerónimos + Torre y la Pena, que llevaba la de la estación) usan una foto de Wikimedia Commons.

Reglas:
- solo licencias que permiten reutilizar: CC BY, CC BY-SA, CC0 o dominio público; nunca «uso justo» ni fotos sin licencia clara;
- el tema se comprueba en la ficha del archivo (descripción y categorías de Commons): tiene que ser ese monumento, no otro parecido;
- copia optimizada en `public/images/commons/` (1280 px, WebP), con `CREDITOS.md` en la carpeta y los datos en `src/data/photo-credits.ts`;
- sobre la imagen, crédito corto «Foto: Autor / Wikimedia Commons, licencia» (en móvil, debajo del título); al pie de la página, atribución completa con autor, licencia enlazada y enlace al archivo original;
- nunca se presentan como fotos de José; si un día hay foto suya del sitio, sustituye a la de Commons;
- van por delante de la foto de Tiqets; el hueco crema queda solo para cuando una foto no carga;
- `smoke:tiqets` falla si una tarjeta del hub no tiene foto, si una de Commons no tiene crédito o si falta en `CREDITOS.md`.

## D-044 — Newsletter pausada por decisión del usuario
**Date:** 2026-10-10  
**Status:** accepted

Retirar los formularios de suscripción del índice del blog y de todos los artículos de Estaba en Lisboa. Dejar de aceptar altas nuevas en `/api/subscribe`; conservar la ruta `/unsubscribe` para quienes se registraron antes y no borrar datos ni configurar envíos a suscriptores existentes. Conservar el PDF ya publicado para no romper enlaces históricos. No tocar contenido editorial, SEO, reservas ni afiliados. Solo reactivar la newsletter con nueva instrucción explícita del usuario.


### Cierre D069 — Preview inglés, no producción

PR116 borrador; aplicación4bffd9c, seis versiones explícitas y equivalencias reales, no traducción masiva. QA SEO/editorial y disponibilidad real pasan; aprobación visual/editorial sigue pendiente. Incidencia externa previa de Clerk confirmada en producción y Preview: Missing secretKey. No se presenta autenticación como operativa ni se la elimina. Resolver configuración y repetir QA privada antes de publicar layouts. Pena aún abre checkout español, divulgado. Informe: docs/english-pilot-phase1.md.


## D-070 — Pulido del piloto inglés y reserva en el idioma del lector, 23/10/2026

**Autorizado para Preview; sin autorización de producción.** José pide una presentación cuidada y facilitar entradas/tours. Mantener seis URLs y marca; respuesta antes de imagen, accesos claros y contextualidad comercial. Pena usa una correspondencia verificada del mismo p1120392 en inglés, conservando partner/parámetros y campaña propia. No traducción genérica de URLs ni nuevos productos. Un CTA de Pena tras comparar, sin precio inventado o promesa de cancelación. Home e itinerario conducen a las guías existentes. Medir los cuatro accesos instrumentados como un subconjunto; no son ventas ni todos los accesos. No cambios al español, sitemap, redirects o protección privada. [Informe](../docs/english-pilot-polish.md).

## D-071 — Cinco recorridos ingleses concretos, 23/10/2026

José pide poner tours en inglés y revisar mejoras. **Preview únicamente, PR116.** Sustituir las cinco categorías inglesas genéricas por cinco recorridos verificados: introducción30696, Alfama7501, Belém35074, historia negra68040 y miradores53664. No forzar equivalentes ficticios de misterios/nocturno. Una comparación compacta explica para quién y limitación de cada uno. El buscador consulta esos cinco y muestra hasta tres con horario inglés confirmado; conserva fecha/ref del proveedor. Sin ratings estáticos ni nuevas URLs. Al editar fecha, retirar resultados anteriores para evitar reservar otro día. Selección española conservada. No activar D0 ni atribuir ingresos sin datos. [Contrato y QA](../docs/english-tours-selection.md).

## D-072 — Igualar tours ingleses con la estética española, 23/10/2026

**Preferencia explícita de José, Preview sin publicación.** La lista desplegable inglesa se percibe como otra web; sustituir esa presentación por la misma cabecera fotográfica compartida y tarjetas con foto, proporción, tipografía, colores, anchos y botones de `/free-tours-lisboa`. Esta decisión supera solo la presentación de D071: conservar los cinco productos ingleses verificados, fechas, referido y comportamiento funcional. Cinco tarjetas más acceso general, sin inventar misterios/nocturno en inglés. H1 visible más corto en la hero; SEO title y rutas preservados. Español intacto. [Detalle y QA](../docs/english-tours-visual-alignment.md).
