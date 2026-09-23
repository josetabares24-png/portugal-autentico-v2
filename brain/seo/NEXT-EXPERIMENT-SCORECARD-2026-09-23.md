# Next SEO experiment scorecard — 2026-09-23

## Purpose

Choose the next SEO experiment from owned Search Console evidence without interrupting active/observation experiments or re-editing pages that may already be responding to the 2026-09-21 changes.

This document ranks **what to inspect first when the queue opens**. It does not authorize an immediate edit.

## Data source

Google Search Console domain property:
`sc-domain:estabaenlisboa.com`

Read 2026-09-23 through Windsor.

Windows:
- 90 days;
- 28 days;
- 7 days.

Search Console average position is not a fixed rank tracker. Query rows are incomplete.

## Page scorecard

| Page | 90d | 28d | 7d | Reading |
|---|---|---|---|---|
| vida-nocturna-lisboa | 317 imp / 0 c / pos 9.96 | 90 / 0 / 10.82 | 11 / 0 / 7.73 | **WATCH FIRST**: already around page 1, zero clicks, but recently edited |
| aeropuerto-lisboa-al-centro | 269 / 1 / 14.86 | 200 / 1 / 15.60 | 22 / 0 / 12.27 | high volume, but dominant exact queries still around positions 21–30 |
| tram-28-historia-guia | 179 / 0 / 17.56 | 179 / 0 / 17.56 | 28 / 0 / 10.64 | strong recent position improvement; do not interrupt |
| chiado-bairro-alto-guia | 158 / 0 / 13.37 | 104 / 0 / 14.91 | 5 / 0 / 8.80 | strongest neighborhood candidate; recent sample tiny |
| lisboa-vs-porto | 122 / 0 / 13.69 | 122 / 0 / 13.69 | 16 / 0 / 8.50 | improving recently; low query volume |
| mejores-mercados-lisboa | 87 / 0 / 14.98 | 87 / 0 / 14.98 | 18 / 0 / 12.78 | lower scale; hold behind stronger opportunities |

## 1. Vida nocturna — first page to inspect when the gate opens

90d:
- 317 impressions
- 0 clicks
- avg position 9.96

Useful query evidence:
- “vida nocturna en lisboa” — 6 impressions / position ~8.7
- “vida nocturna lisboa” — 2 / ~7
- “donde salir en lisboa por la noche” — 7 / ~10.1
- “guía de vida nocturna lisboa” — 4 / ~10.8
- “que hacer en lisboa de noche” — 3 / ~10.7
- “que ver en barrio alto lisboa” — 4 / ~3

Current snippet already changed on 2026-09-21:
- SEO title: “Vida nocturna en Lisboa: Bairro Alto y Cais do Sodré”
- meta description directly addresses dónde salir / fado / qué hacer de noche.

Interpretation:
This is **not permission to change the snippet again**.

The page is currently the best diagnostic candidate because:
- it has the highest impressions among the candidate pool;
- it is already near/page 1;
- it has zero clicks;
- the current snippet is already aligned and needs a clean post-21/09 window.

Decision gate:
- if finalized post-change data shows CTR begins to rise: **protect, no new experiment**;
- if position holds near page 1 and CTR remains effectively zero with enough impressions: investigate SERP competition/snippet mismatch as next experiment;
- if position falls: diagnose query mix/relevance before touching CTR copy.

## 2. Tranvía 28 — protect recent momentum

90d/28d:
- 179 impressions
- 0 clicks
- position ~17.56

Last 7d:
- 28 impressions
- position ~10.64

Top visible:
- “tram 28 lisboa” — 7 impressions / position ~12.9
- “tranvia 28” — 10 / ~20.7
- “tranvia 28 lisboa” — 7 / ~27.6

Current page was materially rebuilt 2026-09-21 around route, stops, official 2026 fares and service-change verification.

Interpretation:
The recent position jump may be exactly the response we wanted. Editing now would destroy attribution.

Decision:
**Protect.**
If the improvement persists, it may graduate without another change.

## 3. Lisboa vs Porto — promising but low-volume

90d/28d:
- 122 impressions
- 0 clicks
- position ~13.69

Last 7d:
- 16 impressions
- position ~8.50

Visible:
- “porto vs lisboa” — 6 impressions / position ~11.5
- “lisboa vs porto” — 2 / ~19
- “lisboa o porto” — 1 / position 1

Current article was updated 2026-09-21.

Interpretation:
Strong short-window improvement, but sample is small.

Decision:
**Observe.**
Do not convert a 16-impression week into a claim of success or a reason for another rewrite.

## 4. Chiado/Bairro Alto — strongest neighborhood opportunity

Reference:
[[strategy/NEIGHBORHOOD-DECISION-MAP-2026-09-23]]

90d:
- 158 impressions
- 0 clicks
- position ~13.37

Last 7d:
- 5 impressions
- position ~8.8

The combined-intent queries are much stronger than generic “Chiado”.

Decision:
**First neighborhood candidate, not first global candidate.**

## 5. Airport — valuable query family, farther away than average position suggests

90d:
- 269 impressions
- 1 click
- position ~14.86

28d:
- 200 impressions
- 1 click
- position ~15.60

7d:
- 22 impressions
- 0 clicks
- position ~12.27

Dominant exact queries:
- “aeropuerto lisboa al centro” — 19 impressions / position ~21.4
- “como ir del aeropuerto de lisboa al centro” — 11 / ~26.6
- “aeropuerto de lisboa al centro” — 7 / ~24
- “como ir del aeropuerto de lisboa al centro en metro” — 2 / ~17.5

Interpretation:
The page-average position makes this look closer than the core exact-intent queries actually are.

Decision:
**High-value medium-term push, not a quick CTR fix.**
When revisited, diagnose why the exact airport→center cluster ranks lower than the page average.

## 6. Markets — lower priority

90d:
- 87 impressions
- 0 clicks
- position ~14.98

7d:
- 18 impressions
- position ~12.78

Main visible cluster:
- “mercados de lisboa” — 4 / ~16.5
- “mercados en lisboa” — 4 / ~17.5
- “mercados lisboa” — 4 / ~13

Decision:
**Hold.**
Useful future editorial cleanup, but lower expected leverage than the pages above.

## Queue when the observation gate opens

Do not mechanically edit in this order. **Inspect** in this order:

1. Vida nocturna
2. Tranvía 28
3. Lisboa vs Porto
4. Chiado/Bairro Alto
5. Airport
6. Markets

Why inspect rather than edit:
- #1–#4 show recent positional improvement;
- the correct outcome may be “do nothing”;
- a page that wins without a new intervention should be protected.

## Experiment selection rule

At the next decision point, choose the first page in the queue that satisfies all of:

1. enough finalized post-change impressions;
2. no active confound that prevents interpretation;
3. a specific query cluster with identifiable intent;
4. one small change capable of testing a hypothesis;
5. expected upside greater than the risk of disturbing current momentum.

If none qualify, **run no new SEO experiment** and keep collecting data.

## Important distinction

A zero-click page near position 8–10 is not automatically a bad snippet.

Possible causes include:
- tiny sample;
- query mix;
- SERP features;
- users getting the answer directly;
- dominant brands/official sources;
- mismatch between average page position and the important query position.

Therefore:
**position + impressions + exact query + SERP context before copy change.**
