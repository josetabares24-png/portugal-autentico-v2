# Next actions

Updated: **2026-09-23**

This is the only priority queue agents should use unless new live data invalidates it.

## P0 — measure the real internal journey

Instrument the important internal decisions with GA4 `select_content`:

- Home primary → itinerarios
- Home secondary → itinerarios
- Home → Free Tours
- article footer → Planifica tu viaje
- article → related article
- article → editorial link
- article body → contextual inline link (`article_inline_link`)

Baseline evidence and diagnosis: [[data/GROWTH-DIAGNOSIS-2026-09-23]].

### Why this is first

The site currently sends users to multiple next steps, but we cannot reliably compare those placements. We have page/referrer data, but not a clean CTA-level baseline.

### Evaluation trigger

Do not wait months.

Review when:
- 7 finalized days are available; or
- a placement has enough measured events to compare meaningfully.

Then make one product decision: keep, replace or remove the weakest global CTA.

## P0 — protect current SEO work

Do not materially rewrite these recent priority pages until a clean post-deployment window exists:
- como-moverse-por-lisboa
- como-pagar-en-portugal
- time-out-market-lisboa
- estacion-oriente-lisboa
- arquitectura-manuelina-lisboa

Continue measuring rather than repeatedly changing them.

## P1 — active SEO experiment

### E-006 — café
`/blog/donde-tomar-cafe-lisboa`

Status: **RUNNING** after deployment.

Do not materially edit this page again until the evaluation window closes.

Measure:
- clicks;
- impressions;
- CTR;
- position;
- query coverage;
- internal continuation clicks once `select_content` data accumulates.

Important: the last 7-day position was already improving before the experiment, so causal claims require caution.

## P1 — attack the acquisition leak

After the observation window, choose the strongest page/query opportunity using:
- impressions;
- CTR;
- position;
- query fit;
- recent trend.

Current candidates include:
- aeropuerto-lisboa-al-centro
- tram-28-historia-guia
- lisboa-vs-porto
- chiado-bairro-alto-guia
- vida-nocturna-lisboa
- mejores-mercados-lisboa

Use [[03-SEO-DECISION-ENGINE]].

## P1 — legacy route inventory

### Completed: /pack-completo

Retired on 2026-09-23 with permanent redirect to `/blog`.

Reason: zero Search Console visibility over 12 months + minimal use + duplicated product job.

Evidence: [[product/PACK-COMPLETO-RETIREMENT-2026-09-23]].


Classify non-blog routes with 90-day GSC + GA4:

- KEEP
- EDITORIALIZE
- 301
- RETIRE

Do not remove URLs solely because they are demoted from navigation.

## P2 — editorial architecture

Map existing articles into:
1. Qué ver
2. Cómo moverse
3. Dónde comer
4. Barrios
5. Planificar
6. Cultura e historia
7. Excursiones

Do not create empty hubs before mapping the existing inventory.

## Explicitly NOT doing now

- visual redesign;
- new calculators/tools;
- dozens of new articles;
- mass URL moves;
- mass deletion/noindex;
- rebuilding the commercial portal;
- changing global CTAs without a measurable baseline;
- repeating SEO edits on pages still in observation.

## Single next priority

**Measure where users actually choose to go next, then remove or replace the weakest global CTA.**


## P1 — deuda editorial priorizada

Registro: [[content/EDITORIAL-DEBT]]

Orden actual:
1. donde-comer-barato-lisboa — candidato E-007.
2. barrios-imprescindibles — esperar ventana post-21/09.
3. azulejos-portugueses-historia — esperar ventana post-21/09.
4. playas-cerca-lisboa — reparar después por menor señal.

No hacer limpieza masiva anti-IA.


## P1 — E-007 — comer barato

`/blog/donde-comer-barato-lisboa`

Status: **RUNNING** after production deployment.

Do not materially edit again until the measurement window closes.

Primary metrics:
- average position;
- impressions;
- clicks;
- query coverage around comer barato / restaurantes baratos.

Guardrails:
- no index/canonical regression;
- no collapse in impressions;
- internal continuation clicks should be observed with the new `select_content` tracking.


## P2 — internal linking

Baseline: [[seo/INTERNAL-LINK-GRAPH-2026-09-23]].

Do not run a broad internal-link campaign now. Top-demand pages already have multiple relevant sources.

Revisit low-link opportunities only after:
- recent edits finish observation; and
- `select_content` shows what users actually follow.


## P2 — activities selective audit

Evidence: [[product/ACTIVITIES-AUDIT-2026-09-23]].

Do not mass-retire activity URLs.

Priority activity pass completed 2026-09-23:
- cristo-rei verified;
- miradouro-senhora-do-monte verified;
- fado-en-alfama editorialized against UNESCO/Museu do Fado;
- cascais-cabo-da-roca transport updated;
- elevador-santa-justa current closure/status corrected;
- oceanario-lisboa price/hours verified and commercial signal protected.

Do not open another broad activity pass now.

Next trigger:
- material factual change;
- enough post-deployment Search Console data;
- enough affiliate destination data;
- or a page-specific business/SEO threshold.

Do not redesign the Activities hub now.


## P1 — newsletter asset

Baseline: [[business/NEWSLETTER-FUNNEL-2026-09-23]].

After deployment:
- measure successful `sign_up` events;
- measure `newsletter_unsubscribe` as a health signal, not a vanity failure;
- compare signups to blog sessions;
- verify the external Brevo subscription template if production uses `BREVO_SUBSCRIPTION_TEMPLATE_ID`.

Do not add more newsletter placements until the existing one proves it can capture subscribers.


## P1 — plan lead / newsletter separation

Evidence: [[privacy/PLAN-LEAD-SEPARATION-2026-09-23]].

Completed in code:
- plan requests no longer join newsletter list 5 automatically.

Pending external audit:
- inspect Brevo contacts previously tagged/source-linked to `planifica-tu-viaje`;
- do not assume they consented to newsletter marketing;
- verify the external Brevo subscription template separately.

Do not add a newsletter checkbox to Planifica unless there is a real reason to grow that list from this funnel and the consent is explicit.


## P1 — affiliate click observability

Baseline: [[business/AFFILIATE-MEASUREMENT-2026-09-23]].

The direct affiliate surfaces emit GA4-standard `link_url`, `link_domain` and `outbound` on `affiliate_click`.

A 2026-09-23 audit found that `BookingCard` had been missed by the first pass; the follow-up fix adds those dimensions to the native cards used by `/comprar-entradas`.

Next check:
- wait for post-deployment affiliate clicks;
- confirm `link_url` is populated in reporting;
- then segment Free Tours by UTM campaign/content before changing commercial prominence.

Do not change Free Tours layout or CTA density while this baseline is being established.


## P2 — commercial asset discipline

Reference: [[business/COMMERCIAL-ASSET-INVENTORY]].

Do not add Booking/Civitatis work to the priority queue unless current account status + product fit are verified.

Focus first on:
- GuruWalk signal;
- GetYourGuide/Tiqets direct-link measurement;
- partner dashboard reconciliation;
- newsletter as owned audience.


## P2 — commercial copy debt

Reference: [[business/COMMERCIAL-COPY-DEBT]].

Do not repair Free Tours / Comprar Entradas copy during the fresh commercial-measurement baseline unless a claim is clearly false or legally risky.

After enough post-deployment click data exists:
1. review Free Tours claims;
2. preserve/replace only one commercial variable at a time;
3. re-check affiliate clicks + organic CTR where relevant.


## P2 — European benchmark opportunities

Reference: [[strategy/EUROPE-CITY-GUIDE-BENCHMARK-2026-09-23]].

The benchmark does not override current P0 measurement.

Backlog in order:
1. maintain a visitor-impact factual update discipline on canonical pages;
2. evaluate neighbourhood exploration after internal-click data;
3. strengthen authorship/verification progressively on dynamic pages;
4. revisit an owned paid Lisbon product only after newsletter/audience demand is proven.

Do not create a "hidden gems/local secrets" positioning.


## North star — 1,000 organic clicks/day

Reference:
- [[strategy/1000-CLICKS-FORECAST-2026-09-23]]
- [[prompts/1000-CLICKS-AUTOPROMPT]]

Current gate:
**1,000 organic impressions/day sustained.**

Do not replace current P0 experiments with long-horizon content production.

At each weekly review:
- update clicks/day and impressions/day;
- state the current gate;
- quantify gap to the next gate;
- choose one bottleneck;
- only update the long-term forecast when trajectory changes materially.


## P1 — affiliate monetization architecture

Reference: [[business/AFFILIATE-MONETIZATION-ARCHITECTURE-2026-09-23]].

Current focus:
1. GuruWalk — preserve and measure the proven Free Tours funnel.
2. GetYourGuide — measure direct links by destination/placement.
3. Tiqets — measure direct ticket links, especially Oceanário/Lisboa Card/Pena.
4. Reconcile click data with partner dashboards before increasing CTA prominence.

Do not add more partner widgets or new providers until current conversion is understood.


## P2 — GuruWalk MCP proof of concept

Reference: [[business/GURUWALK-MCP-2026-09-23]].

Do not ship dynamic GuruWalk inventory yet.

When current commercial baseline is mature:
1. use server-side `GURUWALK_MCP_API_KEY`;
2. query Lisbon via `discover_destination`;
3. verify returned affiliate attribution;
4. test category/tour availability;
5. compare a date-aware CTA against the current static flow.

Static GuruWalk links remain the fallback and current control.


## P0 — measurement integrity / analytics consent

Reference: [[privacy/ANALYTICS-CONSENT-GATE-2026-09-23]].

Fix prepared 2026-09-23:
- remove unconditional GA4 loading from root layout;
- load GA4 only after explicit analytics consent;
- keep product events consent-gated;
- update public cookie-policy wording.

Production deployed and pre-consent HTML verified on 2026-09-23 15:26 Europe/Lisbon.

Completed:
- production SHA/time recorded;
- no pre-consent `gtag.js` loader in production HTML;
- root-layout GA initialization removed.

Still verify in a browser session when available:
- GA initializes after explicit acceptance;
- rejection/revocation blocks subsequent product events.

Treat GA4 sessions/pageviews across this deployment boundary as a measurement-method change.

This does not alter E-006/E-007 or public commercial CTAs.


## P0 — automated SEO regression gate

Reference: [[seo/SEO-SMOKE-CI-2026-09-23]].

The existing sitemap/canonical/robots smoke suite is now wired to GitHub Actions for indexation-critical changes.

Operational rule:
- TypeScript success alone is not enough for SEO-critical changes;
- require the SEO smoke workflow when its path filter applies;
- do not relax assertions to hide a regression.


## P0 — post-deploy measurement boundary

Reference: [[data/WEB-AUDIT-2026-09-23-PM]].

Latest validated main is now live in production:
- production deployment: `dpl_9XAUsoLKD33AGFHWnfB1h3hcuNZg`;
- production commit/tree boundary: `cc4e1c5cc279e3c5c4d9545ae226bdf6e659d939`;
- state: READY.

Now collect post-deployment evidence for:
1. BookingCard `affiliate_click` standard dimensions;
2. contextual article `select_content/article_inline_link`;
3. Free Tours navigation active state in real-browser verification when available.

Do not change CTA density or protected SEO pages while these baselines form.

## P1 — GuruWalk MCP runtime validation

PR #79 remains open.

Current state:
- server-side client prepared;
- TypeScript passed;
- Preview secret configured by the user;
- Preview retried after production recovery;
- Vercel still rejected the Preview with `build-rate-limit`.

Next action:
retry Preview later; once READY, validate Lisbon discovery, availability and affiliate attribution before any merge.


## P1 — Visitor Impact Watch

References:
- [[operations/VISITOR-IMPACT-WATCH-2026-09-23]]
- [[operations/VISITOR-IMPACT-PAGE-MAP-2026-09-23]]

Active discipline:
1. verify material visitor-impact changes against primary sources;
2. patch factual contradictions even during an SEO observation window, but keep the patch minimal and record the confound;
3. do not inject short-lived alerts into evergreen pages unless access is materially blocked;
4. close expired temporary records instead of leaving stale warnings.

Acted cases:
- VI-001 Santa Justa closure → Baixa guide corrected on 2026-09-23.
- VI-006 Cascais line works → Cascais guide corrected on 2026-09-23 with a factual-only transport patch; title, CTA and SEO intent unchanged.

Verified/no-edit cases added:
- VI-007 Praça de Espanha phased works.
- VI-008 Telheiras partial closures.

Do not use Visitor Impact as a reason to reopen E-006 or E-007.


## P2 — neighborhood decision map

Reference: [[strategy/NEIGHBORHOOD-DECISION-MAP-2026-09-23]].

Current conclusion from 90-day Search Console:
- Chiado/Bairro Alto is the strongest **future** neighborhood experiment candidate (158 impressions, 0 clicks, avg position ~13.37);
- Barrios pillar has the most cluster demand but dominant Spanish head terms remain around positions ~28–34;
- Alfama and Belém are farther from a small-win intervention;
- Graça, Baixa and Parque das Nações are too new to evaluate.

Do not launch the Chiado experiment until the current observation queue has a clean decision point.
Do not create a public neighborhood hub now.


## P1 — next SEO experiment gate

Reference: [[seo/NEXT-EXPERIMENT-SCORECARD-2026-09-23]].

When the current observation queue opens, **inspect before editing**:
1. vida-nocturna-lisboa;
2. tram-28-historia-guia;
3. lisboa-vs-porto;
4. chiado-bairro-alto-guia;
5. aeropuerto-lisboa-al-centro;
6. mejores-mercados-lisboa.

Key caution:
the first four show recent position improvement, so the right decision may be to protect rather than launch another experiment.

No new SEO experiment until finalized post-change evidence is sufficient.


## P1 — Blog Level 1 program

Reference: [[content/BLOG-LEVEL-1-CONTROL-2026-09-23]].

Coverage: **60/60 public blog pages classified** with structural object boundaries.

Method warning:
- do not infer article boundaries from line breaks in `page.tsx`;
- some article objects are concatenated on the same line;
- use structural object boundaries / brace balance before declaring cross-article contamination.

Current batch:
1. `que-ver-cascais-desde-lisboa` — Level 1 rebuild prepared using CP + Visit Cascais.
2. `playas-cerca-lisboa` — Level 1 rebuild prepared using Visit Cascais, Visit Portugal, Carris Metropolitana, Visit Sintra and Município de Setúbal.
3. Require TypeScript + SEO smoke + production verification before marking either DONE.

Protected:
- E-006 and E-007 remain untouched;
- Barrios/Azulejos and the current next-experiment queue are not rewritten during their observation windows.

Next non-protected editorial candidates after this batch:
- semana-santa-lisboa;
- mejor-epoca-visitar-lisboa;
- que-comprar-lisboa-souvenirs;
- mouraria-barrio-guia.

Do not choose the next page by risk score alone; combine editorial debt with Search Console signal and seasonality.


## P1 — Blog Level 1 batch 2

Reference: [[content/BLOG-LEVEL-1-CONTROL-2026-09-23]].

Current branch: `content/blog-level1-batch2-souvenirs-mouraria-2026-09-23`.

Prepared:
- `que-comprar-lisboa-souvenirs` — rebuild around provenance, historical shops and the official warning not to buy old tiles of unclear origin;
- `mouraria-barrio-guia` — rebuild around documented history, cautious fado origin language, contemporary diversity and a practical route.

GSC 90d query returned no visible rows for these two URLs. The reason for this batch is **trust/editorial debt**, not a claim of current SEO demand.

Before merge:
1. verify 60/60 article objects still resolve;
2. verify E-006/E-007 unchanged;
3. TypeScript success;
4. SEO smoke success;
5. Preview sanity check.

Production note for batch 1:
- PR #92 merged at `6318da24`;
- Vercel production status for that merge is currently build-rate-limit failure;
- Cascais/Playas remain pending live verification and are not DONE yet.


## P1 — Blog Level 1 batch 3 — Semana Santa 2027

Reference: [[content/BLOG-LEVEL-1-CONTROL-2026-09-23]].

Current branch: `content/blog-level1-batch3-semana-santa-2026-09-23`.

Prepared:
- `semana-santa-lisboa` — rebuilt around confirmed 2027 dates, the documented Procissão do Senhor dos Passos da Graça and explicit uncertainty about the still-unpublished 2027 local program.
- Corrects prior false framing that placed the Passos procession on Palm Sunday.
- Removes unsupported 20–30% accommodation inflation, generic 'authentic spirituality', and unverified procession routes.

GSC baseline (2026-06-25 → 2026-09-22): 1 click / 25 impressions / position 16.64.

Batch 2 status:
- PR #93 merged at `c167acc9`;
- TypeScript + SEO smoke passed;
- Vercel rejected deployment checks because of `build-rate-limit`, so Souvenirs/Mouraria are not marked live/DONE.

After batch 3, next non-protected high-debt candidate: `mejor-epoca-visitar-lisboa`.


### Batch 3 merge status

- PR #94 merged at `9a4c5512`.
- TypeScript: SUCCESS.
- SEO smoke: SUCCESS.
- Preview content deployment returned HTTP 200 with the new canonical/title/content.
- Production build for the merge is blocked by Vercel `build-rate-limit`; do not mark Semana Santa live/DONE until a READY production deployment contains this merge or a descendant.
- Next non-protected candidate: `mejor-epoca-visitar-lisboa`.


## P1 — Blog Level 1 batch 4 — Mejor época

Current branch: `content/blog-level1-batch4-mejor-epoca-2026-09-23`.

Prepared:
- `mejor-epoca-visitar-lisboa` — rebuilt with IPMA 1991–2020 normals and decision-oriented seasonal guidance;
- removes invented/unsupported claims about empty museums, one-hour tram queues, fixed winter savings and guaranteed short showers;
- separates climate normals from short-term forecasts and real booking prices.

GSC baseline: 0 clicks / 6 impressions / position 18.50 over the 90-day window used by the Level 1 audit.

Batch 3 merged at `9a4c5512`; CI green; production still blocked by Vercel build-rate-limit.

After batch 4, next editorial work should choose between `historia-de-lisboa`, `terremoto-lisboa-1755`, `gastronomia-portuguesa-guia`, `vinos-portugueses-guia` and `bacalhau-plato-portugal`, with source availability and trust risk deciding the order.


### Batch 4 merge status

- PR #95 merged at `87161fdf`.
- TypeScript: SUCCESS.
- SEO smoke: SUCCESS.
- Vercel production checks: `build-rate-limit`; do not mark live/DONE yet.
- Search Console 90d returned no visible rows for the next debt set (`historia-de-lisboa`, `terremoto-lisboa-1755`, `gastronomia-portuguesa-guia`, `vinos-portugueses-guia`, `bacalhau-plato-portugal`, `novedades-lisboa-2026`, `festivales-eventos-lisboa-2026`, `pasteles-de-belem`). This is not proof of zero demand.
- Next order must be chosen by trust risk + sourceability, not traffic. Start with `historia-de-lisboa` or `terremoto-lisboa-1755` after verifying authoritative historical sources.


## P1 — Blog Level 1 batch 5 — Historia de Lisboa

Reference: [[content/BLOG-LEVEL-1-CONTROL-2026-09-23]].

Current branch: `content/blog-level1-batch5-historia-2026-09-23`.

Prepared:
- `historia-de-lisboa` — rebuilt as the cultural pillar using municipal/archaeological sources and a visible-city-by-layers structure;
- removes unsupported personal authority, absolute founding claims and triumphalist framing;
- preserves URL and routes readers into the existing Culture/History cluster.

Do not mark DONE until:
1. TypeScript + SEO smoke pass;
2. Preview is verified;
3. PR is merged;
4. a READY production deployment contains the merge.

After batch 5, choose the next non-protected debt item from:
- `terremoto-lisboa-1755`;
- `gastronomia-portuguesa-guia`;
- `vinos-portugueses-guia`;
- `bacalhau-plato-portugal`;
- `novedades-lisboa-2026`;
- `festivales-eventos-lisboa-2026`;
- `pasteles-de-belem`.

Preference: `terremoto-lisboa-1755` next because it is a high-trust historical article and now receives a stronger internal link from the rebuilt history pillar.


### Batch 5 merge status

- `historia-de-lisboa` merged via PR #96 at `28cecc7c`.
- GitHub TypeScript + SEO smoke passed.
- Vercel rejected Preview/production because of `build-rate-limit`; this is a deployment blocker, not a code failure.
- Production verification remains pending.
- Next Level 1 candidate remains `terremoto-lisboa-1755`; do not start a conflicting edit in the same monolithic article file until the deployment boundary is reconciled or the next branch is based on current `main`.
