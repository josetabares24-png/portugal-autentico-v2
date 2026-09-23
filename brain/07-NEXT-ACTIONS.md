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
