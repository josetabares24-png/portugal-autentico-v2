# Decision log

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
