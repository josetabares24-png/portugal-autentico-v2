# Neighborhood decision map — 2026-09-23

## Purpose

Decide where the Barrios cluster deserves SEO/editorial investment using owned Search Console evidence.

This is an internal strategy map, **not permission to rewrite all neighborhood pages**.

Current constraints:
- active SEO observation queue must remain attributable;
- several neighborhood pages were published or materially edited around 2026-09-21;
- new pages do not yet have enough evidence;
- no public neighborhood hub should be created merely because the cluster exists.

## Data source

Google Search Console domain property:
`sc-domain:estabaenlisboa.com`

Window:
**last 90 days**, read 2026-09-23 through Windsor.

Search Console averages are directional, not rank-tracker positions. Query rows are incomplete because Google anonymizes some searches.

## Page-level evidence

| Page | Clicks | Impressions | CTR | Avg position | State |
|---|---:|---:|---:|---:|---|
| /blog/barrios-imprescindibles | 8 | 442 | 1.81% | 17.91 | PROTECT / OBSERVE |
| /blog/chiado-bairro-alto-guia | 0 | 158 | 0% | 13.37 | NEXT NEIGHBORHOOD CANDIDATE after observation |
| /blog/alfama-historia-guia | 1 | 103 | 0.97% | 18.91 | HOLD |
| /blog/belem-barrio-guia | 0 | 52 | 0% | 23.38 | HOLD |
| /blog/graca-lisboa-que-ver | 0 | 2 | 0% | 11.00 | TOO NEW / INCONCLUSIVE |
| /blog/baixa-lisboa-que-ver | no meaningful 90d row | — | — | — | TOO NEW / INCONCLUSIVE |
| /blog/mouraria-barrio-guia | no meaningful 90d row | — | — | — | HOLD / LOW SIGNAL |
| /blog/parque-das-nacoes-lisboa-que-ver | no meaningful 90d row | — | — | — | TOO NEW / INCONCLUSIVE |

## Query-level reading

### 1. Barrios pillar

`/blog/barrios-imprescindibles`

Visible queries include:
- “barrios de lisboa” — 54 impressions / 1 click / position ~28.4
- “barrios lisboa” — 33 / 0 / ~34.4
- “mejores barrios de lisboa” — 10 / 0 / ~30.5
- “bairros de lisboa” — 8 / 0 / ~13.5
- “bairros lisboa” — 7 / 0 / ~7.6

Interpretation:
- Google clearly understands the broad neighborhood topic;
- the page has the largest owned demand in the cluster;
- the dominant Spanish head terms are still far from page 1;
- Portuguese variants occasionally rank well but volume is very small.

Decision:
**Do not rewrite now.**
This page is the cluster anchor and has accumulated demand. First let recent architecture/internal-click measurement mature. Any future intervention must improve the decision job (“qué zona visitar / cómo elegir”) rather than merely adding more neighborhood descriptions.

Editorial debt to remember:
the current card excerpt still says “como un local”, which conflicts with the human-voice rule. Do not bundle that cleanup into an SEO experiment without recording it.

### 2. Chiado + Bairro Alto

`/blog/chiado-bairro-alto-guia`

90d:
- 158 impressions
- 0 clicks
- position ~13.37

Visible close-to-page-1 queries:
- “chiado y barrio alto” — 5 impressions / position ~11
- “chiado bairro alto” — 1 / ~7
- “bairro alto chiado” — 1 / ~5
- “el chiado” — 2 / ~7.5
- “rua do norte lisboa” — 2 / ~10

Broader terms are weaker:
- “barrio chiado lisboa” — 9 / ~32.6
- “chiado” — 6 / ~31
- “chiado lisboa” — 3 / ~22.3

Interpretation:
Google is already testing the **combined intent** (Chiado + Bairro Alto) much closer to page 1 than the generic one-word topic.

Decision:
**Strongest neighborhood candidate for the next small SEO experiment, but only after the current observation queue permits another test.**

Future hypothesis to validate:
making the day/night distinction and the physical connection between Chiado and Bairro Alto even more explicit may help the exact combined-intent cluster without chasing the impossible generic term “Chiado”.

Do not edit now.

### 3. Alfama

`/blog/alfama-historia-guia`

90d:
- 103 impressions
- 1 click
- position ~18.91

Visible queries:
- “alfama” — 26 impressions / position ~43.1
- “que ver en alfama” — 2 / ~48
- “alfama barrio” — 1 / ~11

Interpretation:
The generic entity query is competitive and currently weak. The page title/copy is also highly narrative and contains claims such as “casi mil años sin cambiar”, which should eventually be reviewed for factual/editorial precision.

Decision:
**Hold.**
Do not spend the next experiment trying to rank for “alfama”. When revisited, choose a clearer visitor decision/query rather than broad entity vanity.

### 4. Belém

`/blog/belem-barrio-guia`

90d:
- 52 impressions
- 0 clicks
- position ~23.38

Visible queries:
- “que ver en belem” — 2 / ~26
- “belem lisboa” — 3 / ~65
- “barrio belem” — 1 / ~11

Interpretation:
Demand exists but current relevance/authority is not close enough for a small snippet tweak to be an obvious high-leverage move.

Decision:
**Hold.**
Keep factual access/monument information current through Visitor Impact Watch. Revisit only after the stronger page-2 opportunities are exhausted or query evidence improves.

### 5. New / low-data neighborhoods

Graça and Baixa were published 2026-09-21. Parque das Nações is also dated 2026-09-21. They have not had a fair indexing/ranking window.

Decision:
**Observe, do not optimize.**

Mouraria has insufficient owned search signal to justify priority.

## Cluster strategy

The Barrios cluster should not become a directory of eight near-identical guides.

Each page needs a distinct job:

- **Barrios pillar:** help choose and orient.
- **Chiado/Bairro Alto:** day → evening transition; connected two-zone route.
- **Alfama:** historic fabric + route/decision depth, not mythology.
- **Belém:** monument cluster and realistic visit order.
- **Graça:** hill/mirador route with slope logic.
- **Baixa:** flat orientation and central walking route.
- **Mouraria:** cultural/history layer only if verified and differentiated.
- **Parque das Nações:** contemporary Lisbon + Oceanário/Oriente/riverside.

## What NOT to do

- no new “best neighborhoods” hub;
- no mass title rewrites;
- no neighborhood pages created just to complete a taxonomy;
- no “hidden gems”, “locals only”, or unsupported authenticity positioning;
- no SEO experiment on Chiado until current experiment/observation queue has a clean decision point;
- no judging Sep-21 pages from 1–2 days of data.

## Priority order when the queue opens

1. **Chiado/Bairro Alto** — strongest near-page-1 neighborhood opportunity.
2. **Barrios pillar** — only if query-fit/internal-navigation evidence identifies a specific intervention.
3. **Alfama** — reframe only around a demonstrated query/decision, not generic “alfama”.
4. **Belém** — later.
5. New pages — wait for data.

## Success criteria for a future Chiado experiment

Primary:
- average position on the combined Chiado/Bairro Alto query cluster;
- impressions and clicks from that cluster.

Guardrails:
- total page impressions do not collapse;
- no cannibalization with vida-nocturna-lisboa;
- internal continuation clicks remain healthy.

Experiment must change one meaningful variable at a time.
