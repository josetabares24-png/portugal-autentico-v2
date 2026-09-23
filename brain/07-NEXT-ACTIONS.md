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

Priority order when capacity opens:
1. freshness check: cristo-rei / miradouro-senhora-do-monte / fado-en-alfama / cascais-cabo-da-roca;
2. page-specific diagnosis: elevador-santa-justa;
3. protect commercial signal: oceanario-lisboa.

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

The frontend now emits GA4-standard `link_url`, `link_domain` and `outbound` on `affiliate_click`.

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
