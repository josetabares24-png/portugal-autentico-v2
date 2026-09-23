# Internal link graph — 2026-09-23

This snapshot combines:
- explicit `/blog/*` links declared inside article content/links;
- `BLOG_RELATED_POST_IDS` recommendations;
- 90-day Search Console page signals through 2026-09-22.

It is a routing diagnostic, not a PageRank calculation.

## Main conclusion

The highest-demand pages are **not broadly orphaned**.

Examples:
- como-moverse-por-lisboa — 22 distinct published article sources / 1,813 impressions.
- como-pagar-en-portugal — 6 sources / 1,741 impressions.
- arquitectura-manuelina-lisboa — 5 sources / 527 impressions.
- donde-comer-barato-lisboa — 6 sources / 525 impressions.
- estacion-oriente-lisboa — 5 sources / 510 impressions.
- barrios-imprescindibles — 5 sources / 447 impressions.
- vida-nocturna-lisboa — 6 sources / 319 impressions.

Therefore there is **no evidence for a site-wide internal-linking campaign** right now.

## Low-link opportunities with existing search signal

| Page | Distinct article sources | 90d impressions | Position | Decision |
|---|---:|---:|---:|---|
| lisboa-vs-porto | 1 | 122 | 13.69 | OBSERVE; recent content change |
| azulejos-portugueses-historia | 1 | 95 | 9.88 | OBSERVE; recent content change + editorial debt |
| volta-portugal-devolucion-envases | 0 | 66 | 4.02 | PROTECT; already ranking well |
| lisboa-con-ninos | 1 | 36 | 12.83 | BACKLOG |
| semana-santa-lisboa | 0 | 26 | 16.35 | seasonal/backlog |
| patinetes-electricos-lisboa | 0 | 12 | 5.33 | PROTECT; tiny volume |

## Important interpretation

A low number of incoming links does not automatically mean "add links".

Examples:
- Volta Portugal already averages around position 4 with no detected article sources. Adding unrelated links purely for SEO would fail the HUMAN/PRODUCT gate.
- Azulejos is near page 1, but it was modified on 2026-09-21 and has unresolved editorial debt. Do not add another variable during observation.
- Lisboa vs Porto has only one detected source and position ~13.7, but it was also changed recently. Revisit after its observation window.

## What to measure next

The new `select_content` event started production on 2026-09-23 10:50 Europe/Lisbon.

Once data accumulates, combine:
- which links exist;
- which links users actually click;
- Search Console performance of the destination.

That will distinguish:
- structural links that exist but are ignored;
- destinations that attract continuation;
- related cards that are decorative rather than useful.

## Rule

Do not manufacture internal links to reach a target count.

Add an internal link when:
1. it answers the next question created by the current paragraph/page;
2. the destination is the canonical answer;
3. the placement can plausibly help navigation or topical understanding.

The next graph review should happen after `select_content` has enough data to add behavior to structure.
