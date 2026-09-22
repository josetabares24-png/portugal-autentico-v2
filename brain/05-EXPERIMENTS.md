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
