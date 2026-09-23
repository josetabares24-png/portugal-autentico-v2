# E-006 — Dónde tomar café en Lisboa

Date started: **2026-09-23**

## Production deployment

- Main commit: `a60e26157bd284fa5457ed2bb8643f466364e34e`
- Vercel deployment: `dpl_jdT8UMe6jvdNkiTChXocv2Jo5HQ7`
- Created: **2026-09-23 10:59 Europe/Lisbon** (09:59:58 UTC)
- State checked: **READY / production**

This timestamp starts the post-change observation window.  
Page: `/blog/donde-tomar-cafe-lisboa`

## HECHOS

Search Console before change:

| Window | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|
| 28d ending 2026-09-22 | 3 | 121 | 2.48% | 12.21 |
| previous 28d | 1 | 140 | 0.71% | 9.01 |
| last 7d | 1 | 19 | 5.26% | 8.42 |
| previous 7d | 0 | 31 | 0% | 11.65 |

The page already showed short-term improvement before the edit.

Visible GSC queries are fragmented rather than dominated by one term. Examples include:
- cafes en portugal
- cafeteria lisboa
- cafés en lisboa
- cafe lisboa
- cafeteria en lisboa

## EDITORIAL AUDIT

The production article contained:
- unsupported "best café" rankings;
- "cómo pedirlo como un local";
- "trendy" language;
- stale exact prices presented as facts;
- an incorrect simplification: "meia de leite = cortado";
- broad claims about Portuguese coffee behavior without sources.

Public search results were still surfacing this copy.

## VERIFIED SOURCES USED

- Visit Portugal — useful information / indicative coffee prices.
- A Brasileira — official history and location.
- Fábrica Coffee Roasters — official Lisbon location list.

## HYPOTHESIS

A verified article organized around the user's actual decision — quick Portuguese coffee vs historical café vs specialty coffee — can maintain or improve current search visibility while increasing trust and useful query coverage.

## CHANGE

- Keep URL.
- Keep topic.
- Remove unsupported rankings and invented authority.
- Explain `bica` and `galão` with source context.
- Use A Brasileira for historical intent.
- Use Fábrica for specialty-coffee intent.
- Remove the generic "best time / how to get there" block.
- Add sources and relevant internal links.
- Update title/metadata to remove unsupported "best" language.

## PRIMARY METRICS

1. Average position
2. Organic clicks
3. Query coverage

Guardrails:
- CTR should not materially collapse.
- Impressions should not collapse.
- No indexing/canonical regression.

## EVALUATION

Primary read: 14 finalized days after confirmed production deployment.

Secondary read: 7 days for directional movement only.

Result remains INCONCLUSIVE if volume is too low.
