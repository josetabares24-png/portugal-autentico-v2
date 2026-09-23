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
