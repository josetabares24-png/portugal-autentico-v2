# Experiments

This is the active learning register.

## Status vocabulary

- PLANNED
- OBSERVE
- RUNNING
- WIN
- LOSS
- INCONCLUSIVE
- CANCELLED

## Active / observation queue

| ID | Page | Hypothesis | Primary metric | Status | Do not evaluate before |
|---|---|---|---|---|---|
| E-001 | /blog/como-moverse-por-lisboa | Recent snippet/intent work can turn strong impressions near position 10 into more clicks without losing coverage | CTR + clicks, with impressions protected | OBSERVE | confirmed production deployment + 7 finalized days |
| E-002 | /blog/como-pagar-en-portugal | Existing page-1 visibility has room for higher CTR if recent changes align with dominant payment intent | CTR + clicks | OBSERVE | confirmed production deployment + 7 finalized days |
| E-003 | /blog/time-out-market-lisboa | Query-aligned title/content should lift clicks while holding page-1 visibility | CTR + clicks | OBSERVE | confirmed production deployment + 7 finalized days |
| E-004 | /blog/estacion-oriente-lisboa | Better match to Gare do Oriente / transport intent should improve clicks at stable visibility | CTR + clicks | OBSERVE | confirmed production deployment + 7 finalized days |
| E-005 | /blog/arquitectura-manuelina-lisboa | Reorientation to "qué es el estilo manuelino" should broaden/recover relevant query coverage | impressions + query coverage + clicks | OBSERVE | confirmed production deployment + 14 finalized days |
| E-006 | /blog/donde-tomar-cafe-lisboa | Replacing stale/unsupported coffee claims with verified, intent-aligned content should protect page-1 momentum and improve useful query coverage | position + clicks + query coverage, with CTR protected | RUNNING | deployed 2026-09-23 10:59 Lisbon; +14 finalized days |
| E-007 | /blog/donde-comer-barato-lisboa | Replacing invented local-authority copy with dated, verifiable cheap-eating options should improve relevance for "comer barato" queries and recover page-2 visibility | position + impressions + clicks + query coverage | RUNNING | deployed 2026-09-23 11:12 Lisbon; +14 finalized days |
| E-008 | Home traveler gateway | A need-first editorial directory will help visitors reach a useful answer more often than a blog-index Home without weakening the publication identity | portal selection rate + downstream guide/support clicks | PLANNED | explicit visual approval + production deployment + 14 finalized days |

### E-008 visual iteration note — 2026-09-26

The equal bordered portal grid was rejected during mobile visual review because it still read as an AI-made dashboard. The current candidate is the distributed photographic gateway on `design/home-tourism-editorial-v4`: itinerary decision first, three primary photo-led choices, three quieter secondary choices and an editorial story close.

Keep E-008 as `PLANNED`. The Preview being technically ready is not visual approval, and no production observation window starts until the branch is explicitly approved and deployed to production.

### E-008 visual iteration note — 2026-09-29

The itinerary-duration band and editorial-story close were removed after mobile review. They added decisions and mixed practical trip planning with the Blog. The current candidate uses seven independent first-party photographs, seven literal need titles and exactly one destination per block: days, sights, movement, food, drinks, photographs and mistakes.

The keeper is the photographic tourism direction, not the previous composition. Direct language replaces rhetorical headlines, and Blog/Free Tours remain available through global navigation instead of being repeated inside the gateway. Keep E-008 as `PLANNED` until this simplified candidate receives explicit visual approval and a production deployment.

### E-008 canonical-owner iteration — 2026-09-30

Desktop review exposed a structural problem rather than a styling detail: seven entrances left the photographic directory visually unbalanced. `Dónde alojarte` was added as the eighth need because it resolves a genuine trip decision and can reuse the existing ranking article instead of inventing content.

The candidate now uses an 8-entry 4 × 2 desktop directory and direct canonical links. Six established destinations are preserved; only `/que-ver-en-lisboa` and `/donde-comer-en-lisboa` are new broad pillars. All former `/guia/*` paths redirect permanently to an intent owner, so they cannot become thin bridge pages or competing search results.

Keep E-008 as `PLANNED`. The visual and SEO implementation is ready for Preview review, but the experiment clock starts only after explicit approval and production deployment.

### E-008 premium-pillar iteration — 2026-09-30

The 4 × 2 grid solved balance but still repeated one visual module eight times. The candidate now uses a 2 + 3 + 3 desktop rhythm while preserving the same eight canonical destinations and analytics identifiers.

The experiment also closes an SEO dependency found during review: the two new pillars no longer rely only on the Home and sitemap. They receive limited contextual backlinks, visible author/review signals and precise Article markup. FAQs stay visible but FAQPage markup is removed because it has no ordinary travel-site rich-result opportunity.

Keep E-008 as PLANNED. Local checks and Preview QA do not start the measurement window; only an explicitly approved production deployment does.

## Next candidate pool

Do not edit all of these at once.

- /blog/aeropuerto-lisboa-al-centro — page 2, 201 impressions, position 15.77.
- /blog/tram-28-historia-guia — page 2, 183 impressions, position 17.53.
- /blog/lisboa-vs-porto — 122 impressions, 0 clicks, position 13.69.
- /blog/chiado-bairro-alto-guia — 104 impressions, 0 clicks, position 14.91.
- /blog/vida-nocturna-lisboa — 91 impressions, position 10.79.
- /blog/mejores-mercados-lisboa — 87 impressions, position 14.98.

Pick the next candidate only after the observation queue has a clean baseline.

## Experiment lifecycle

1. Write baseline.
2. Write one-sentence hypothesis.
3. Make smallest meaningful change.
4. Record commit SHA.
5. Confirm production deployment.
6. Wait for finalized data window.
7. Compare equivalent windows.
8. Write result.
9. Keep/revert/iterate.

Use [[templates/EXPERIMENT]] for detailed experiments.


## E-006 baseline — dónde tomar café en Lisboa

Pre-change Search Console:

| Window | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|
| 2026-08-26 → 2026-09-22 | 3 | 121 | 2.48% | 12.21 |
| 2026-07-29 → 2026-08-25 | 1 | 140 | 0.71% | 9.01 |
| 2026-09-16 → 2026-09-22 | 1 | 19 | 5.26% | 8.42 |
| 2026-09-09 → 2026-09-15 | 0 | 31 | 0% | 11.65 |

Important confound: the page was already improving in the latest 7-day window before this change. Do not attribute continued improvement automatically to E-006.

Editorial debt found before change:
- unsupported "best" claims;
- "como un local" framing;
- stale exact prices without source context;
- incorrect simplification of Portuguese coffee terms;
- generic/trendy language;
- no source list.

The experiment preserves the URL and topic while repairing trust and usefulness.


## E-007 baseline — dónde comer barato en Lisboa

Pre-change Search Console:

| Window | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|
| 2026-08-26 → 2026-09-22 | 0 | 194 | 0% | 22.72 |
| 2026-07-29 → 2026-08-25 | 3 | 262 | 1.15% | 18.16 |
| 2026-09-16 → 2026-09-22 | 0 | 16 | 0% | 19.50 |
| 2026-09-09 → 2026-09-15 | 0 | 30 | 0% | 22.43 |

90-day page total: 525 impressions / 5 clicks / position 19.55.

Query evidence:
- "comer barato en lisboa" — 20 impressions / position ~34.8 over 90d.
- variants around restaurantes baratos / dónde comer bien y barato cluster mostly around positions 33–43.
- "cuanto cuesta comer en lisboa 2026" appeared with very low volume but position 5.

Editorial debt before change:
- invented first-person restaurant story;
- unsupported claim of mapping where locals "really eat";
- vague authenticity framing;
- stale prices without source/date;
- no source list.

The change keeps the URL and intent, but rebuilds the page around dated examples, official consumer-price rules, zone fit and verification.


## Candidate recheck — 2026-09-23 PM

Fresh Search Console triage stored in:
[[seo/NEXT-EXPERIMENT-SCORECARD-2026-09-23]].

Important update:
- vida-nocturna-lisboa is the first **diagnostic** candidate because 90d visibility is already near page 1 with zero clicks;
- tram-28, Lisboa vs Porto and Chiado all show notable last-7-day position improvement;
- therefore do not assume they need another edit;
- airport core exact queries rank materially lower than its page-level average position suggests.

The queue is now an inspection order, not an edit order.
