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
| E-009 | /free-tours-lisboa live date finder | A single date-aware availability tool will produce more qualified outbound clicks than asking every visitor to browse generic inventory | live-date-finder affiliate clicks + partner bookings, with existing static clicks protected | PLANNED | explicit visual approval + production deployment + 14 finalized days |
| E-011 | Blog: bloques de reserva en 16 artículos | Un bloque de reserva dentro de la sección que lo justifica genera clics de afiliado cualificados sin empeorar SEO ni lectura | affiliate_click (article-body) por artículo | PLANNED (rama local, pendiente de aprobación L-003) | producción verificada + 28 días finalizados |
| E-012 | Títulos/metas de 7 páginas + horario del Metro + botón free tours en Home | Títulos con la consulta principal delante y metas que dicen qué resuelve la página suben el CTR sin perder posición | CTR + clics por página y consulta | PLANNED (rama local, pendiente de decisión de José) | producción verificada + 28 días finalizados |
| E-013 | 9 páginas con bloque de reserva nuevo + 4 botones subidos | Ofrecer la entrada exacta en las páginas con intención de compra que no la tenían, y subir el botón a las primeras pantallas, sube los clics de afiliado sin empeorar la lectura | affiliate_click por página | PLANNED (rama local `feat/reserva-20`, pendiente de aprobación L-003) | producción verificada + 28 días finalizados |
| E-014 | Stay22: alojamiento por barrio en donde-alojarse + script LinkSwap | Un bloque de alojamiento por barrio en la guía de alojamiento genera reservas de hotel sin tocar las comisiones de GetYourGuide, Tiqets ni GuruWalk | clics `affiliate_click` partner stay22 + reservas en Stay22 Hub | PLANNED (rama local `feat/stay22`, pendiente de aprobación L-003 y de confirmar con Stay22 la exclusión de GetYourGuide) | producción verificada + 28 días finalizados |

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

### E-009 Preview note — 2026-09-30

The candidate uses GuruWalk's official affiliate MCP only after the visitor submits a date. It shows at most three tours and three times each, keeps the current static category links as fallback/control and does not request live inventory on initial page load.

This is not a GetYourGuide widget experiment: paid activity inventory must not be presented as free-tour availability. Keep E-009 as `PLANNED` until visual approval and production deployment. Compare live-result clicks and partner bookings against the established static funnel; do not declare a win from interaction volume alone.

### E-009 tourism-surface iteration — 2026-10-01

The branch `design/tickets-free-tours-tourism-v1` turns the two booking surfaces into a hybrid editorial/direct-booking experience without creating another marketplace. `/comprar-entradas` keeps its existing attributable partner URLs and presents eight curated options in a photographic 4 × 2 desktop grid. `/free-tours-lisboa` keeps five static route owners plus one general browsing option and gives the date finder a real provider image when the API supplies one, with a first-party Lisbon photograph as fallback.

The live request still occurs only after the visitor submits a date and remains capped at three tours and three times per tour. Provider images are sanitized as HTTPS, loaded only with the submitted results and never replace the referral-validated booking URL. No price, scarcity or urgency claim is inferred.

Both existing canonical URLs remain indexable and in the sitemap; their `lastModified` value is updated to the real implementation date. Local responsive review found one H1 per page, no horizontal overflow and a 4 × 2 ticket grid on desktop / one column on mobile. Typecheck, lint, build, affiliate smoke tests and sitemap smoke tests pass.

Keep E-009 as `PLANNED`. Preview readiness is not a result. After explicit visual approval and production deployment, compare `live-date-finder` outbound clicks and partner bookings with static free-tour clicks. Evaluate `/comprar-entradas` through attributable affiliate clicks segmented by provider, product and page path; do not claim improvement from card views or search/filter use alone.

### E-009 Tiqets live-data iteration — 2026-10-01

The ticket candidate now enriches only the three already selected Tiqets products: Oceanário, Palacio da Pena and Lisboa Card. A server-only adapter retrieves current starting price, general sale status, mobile-ticket support and the partner-attributed product URL. The API response never changes editorial order, images or copy, and a failed or missing API response falls back to the existing direct link without leaving an empty card.

The visible treatment is deliberately small: one quiet row with “Desde”, the current amount and “Entrada móvil”. It does not add a date picker, review content, urgency, extra products or a Tiqets-styled marketplace. First-party photographs remain the visual source. API URLs are accepted only over HTTPS from a Tiqets host and only when they contain partner `estaba_en_lisboa-189233`; the existing product campaign is then preserved.

Keep E-009 as `PLANNED`. The API token is an environment secret and is never committed or serialized to the browser. Start measurement only after explicit Preview approval and production deployment. Compare Tiqets outbound clicks and completed partner bookings by product/campaign; price visibility alone is not a success metric.

### E-009 mobile simplification — 2026-10-01

Mobile review showed that search and category chips made an eight-item editorial selection feel like a large marketplace, clipped the last category and delayed the first useful recommendation. They were removed. The eight products now follow the editorial introduction directly, in fixed editorial order, while Tiqets enrichment and attributed destinations remain unchanged.

The free-tour date finder remains because it answers a genuinely date-dependent question. Its heading is now direct and upright, the explanation is shorter, and provider/payment context plus affiliate disclosure are combined into one compact note. Mobile spacing between the finder and route comparison is reduced; desktop keeps enough separation without treating them as unrelated sections.

Keep E-009 as `PLANNED`. This refinement reduces friction but is not evidence of conversion improvement until production measurement begins.

### E-009 transactional clarity and search-intent iteration — 2026-10-01

The ticket and free-tour candidates now state the action the traveler can actually complete. Ticket cards use product-specific labels such as “Comprar entrada al Oceanário” and “Comprar Lisboa Card”; free-tour routes and live time slots use explicit reservation labels. Hero copy, title metadata and trust signals align with the same intent while keeping checkout on Tiqets, GetYourGuide or GuruWalk.

The pages must remain editorial selectors rather than simulated merchant pages. Do not add fabricated urgency, stock, rankings or `Product`/`Offer` structured data when Estaba en Lisboa is not the seller and does not control the final offer. Keep visible provider/payment context, affiliate disclosure and “Desde” qualification for API prices.

The date finder records only coarse days-ahead buckets, result count and success/error state; it never sends the exact travel date. These events diagnose finder usefulness. The commercial result remains attributable outbound clicks and confirmed partner bookings by page, provider and product/campaign.

Keep E-009 as `PLANNED` until explicit visual approval and production deployment. A stronger CTA is a hypothesis, not conversion proof.

### E-009 production activation — 2026-10-01

José explicitly approved execution. The candidate was fast-forwarded to `main` at `a2d7472` and deployed to production as `dpl_AyqmSZ5yaHiTr2E67jDR2rsdZtqH`. `TIQETS_API_TOKEN` is configured as a Vercel Production secret; GuruWalk Production credentials were already present.

Post-deployment verification confirmed eight product-specific ticket CTAs, three live Tiqets starting prices, valid Tiqets partner attribution, three GuruWalk tours with nine bookable times, valid GuruWalk referral parameters, and both canonical URLs in the 100-URL production sitemap. The full Free Tours HTTP suite passes 65/65 after correcting its remote-mode expectation so it accepts the configured production ref while still requiring the exact synthetic ref in local tests.

E-009 is now `RUNNING`. Do not claim a conversion result yet. Compare attributable outbound clicks and confirmed partner bookings against the pre-change baseline after a finalized observation window; finder submissions and page views remain diagnostic only.

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

## E-010 — Home PC composition preview, 2026-10-07

**Status: APPROVED FOR RELEASE on 2026-10-08 / START MEASUREMENT AT VERIFIED PRODUCTION DEPLOYMENT.**

José requested a concrete preview after the desktop audit and approved publishing it on 2026-10-08 after seeing the Vercel preview and clarifying that the larger visual improvement is on desktop. Preserve D-033's eight photographic canonical entrances and 2 + 3 + 3 rhythm; reduce opening height, align sections, show secondary photography with cream captions on desktop, and use one main story plus two secondary reads. Mobile retains direct photographic entrances. The approved visual code is `8b7040e`; release is tracked in PR #101. Do not attribute SEO growth or preliminary Search Console data to this change.

Baseline, candidate details, limits, validation and measurement plan: [[ux/HOME-PC-PREVIEW-2026-10-07]]. Pre-preview local checks passed: typecheck, targeted lint and sitemap smoke 51/51, including 100 sitemap URLs. Release checks must pass before merge. Start E-010's 14/28-day observation window at the verified production deployment; evaluate Home navigation by device, not property-wide impressions alone. Final merge and deployment evidence: [PR #101](https://github.com/josetabares24-png/portugal-autentico-v2/pull/101).

## E-011 — Bloques de reserva en artículos del blog, 2026-10-08

**Status: PLANNED. Preparado en rama local `feat/blog-affiliate-ctas`; no publicado. Necesita aprobación visual de José (L-003).** Detalle, artículos, ofertas y medición: [[business/BLOG-BOOKING-BLOCKS-2026-10-08]]. Toca páginas de E-001, E-003, E-004 y E-005 sin cambiar título ni descripción; E-006 y E-007 quedan fuera.

## E-012 — Títulos/metas y free tours en la Home, 2026-10-08

**Status: PLANNED. Rama local `feat/seo-titles-top-pages`; no publicado.** Toca E-001 a E-004 (reinicia su lectura) y la Home de E-010. Detalle: [[seo/SEO-SNIPPETS-HOME-FREE-TOURS-2026-10-08]].

## E-013 — Bloques de reserva en páginas sin ninguno y botones subidos, 2026-10-09

**Status: PLANNED. Rama local `feat/reserva-20`; no publicado. Necesita aprobación visual de José (L-003).** Detalle: [[business/RESERVA-20-2026-10-09]]. Mueve bloques en páginas de E-001 y E-003; E-006 y E-007 quedan fuera.

## E-014 — Stay22, 2026-10-09

**Status: PLANNED. Rama local `feat/stay22`; no publicado.** El script de Stay22 tal cual reescribe los enlaces de GetYourGuide; va con `excludes: ['getyourguide']`. Detalle: [[business/STAY22-2026-10-09]].
