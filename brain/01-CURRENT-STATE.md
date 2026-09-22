# Current state

Updated: **2026-09-23**

## Technical base

- Next.js 16.3.5
- React 19.2.3
- TypeScript
- Public article pages are designed to be prerendered/SSG.
- Blog has dedicated article components, related-content logic and a smoke test.
- The repository still contains multiple non-blog product surfaces: itineraries, activities, calculator, ticket hub, planning form, packs and supporting APIs.

## Editorial base

Existing project documentation records **60 published blog entries with explicit editorial content**.

The immediate problem is therefore not "we need hundreds of articles". The first problem is extracting more value from pages that Google already tests.

## Fresh Search Console snapshot

Source: domain property `sc-domain:estabaenlisboa.com`, fetched 2026-09-23 with fresh data enabled.

### 28 days: 2026-08-26 → 2026-09-22

- Clicks: **47**
- Impressions: **6,111**
- CTR: **0.77%**
- Average position: **12.84**

### Previous 28 days: 2026-07-29 → 2026-08-25

- Clicks: **49**
- Impressions: **4,749**
- CTR: **1.03%**
- Average position: **11.62**

### Direction

- Impressions: **+28.7%**
- Clicks: **-4.1%**
- CTR: **-0.26 percentage points**
- Average position: about **1.22 positions worse**

Interpretation: visibility expanded, but clicks did not keep pace. This reinforces the need to improve query fit, snippets and page-1/page-2 opportunities rather than redesigning the site.

## Last 7 days vs previous 7

### 2026-09-16 → 2026-09-22
- 1,120 impressions
- 13 clicks
- 1.16% CTR
- 9.73 average position

### 2026-09-09 → 2026-09-15
- 1,085 impressions
- 10 clicks
- 0.92% CTR
- 11.52 average position

Short-term direction improved, but one week is not enough to declare recovery.

## Blog dominance

In page-dimension rows for the 28-day window:
- blog URLs: **5,301 visible page-impressions and 42 clicks**
- non-blog URLs: **962 visible page-impressions and 5 clicks**

That is roughly **85% of visible page-impressions** coming from blog URLs.

Search Console aggregation can differ by dimension, so use this as directional evidence, not as a property-total reconciliation.

## Highest-value current opportunities

| Page | Impressions | Clicks | CTR | Position | Initial class |
|---|---:|---:|---:|---:|---|
| /blog/como-moverse-por-lisboa | 788 | 4 | 0.51% | 9.79 | high impressions / low CTR |
| /blog/como-pagar-en-portugal | 708 | 6 | 0.85% | 6.99 | page 1 / low CTR |
| /blog/time-out-market-lisboa | 518 | 6 | 1.16% | 8.75 | page 1 / observe |
| /blog/estacion-oriente-lisboa | 494 | 4 | 0.81% | 9.74 | page 1 / low CTR |
| /blog/arquitectura-manuelina-lisboa | 242 | 1 | 0.41% | 8.99 | page 1 / low CTR |
| /blog/aeropuerto-lisboa-al-centro | 201 | 1 | 0.50% | 15.77 | page 2 push |
| /blog/tram-28-historia-guia | 183 | 0 | 0% | 17.53 | page 2 push |
| /blog/barrios-imprescindibles | 161 | 3 | 1.86% | 16.86 | page 2 push |
| /blog/mejores-apps-lisboa | 143 | 1 | 0.70% | 5.56 | protect / CTR opportunity |
| /blog/lisboa-vs-porto | 122 | 0 | 0% | 13.69 | page 2 push |

## Important caution

Several priority pages were changed around 2026-09-21 according to existing project documentation. Do not immediately rewrite them again. First verify the production SHA/date and collect a clean post-change observation window.

Production/deployment status is a variable to verify before assigning causality to Search Console movement.
