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
