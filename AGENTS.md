# Agent instructions — Estaba en Lisboa

Before changing public code, SEO, content, navigation, redirects, sitemap, metadata or monetization:

1. Read `brain/README.md`.
2. Read `brain/00-MISSION.md`.
3. Read `brain/07-NEXT-ACTIONS.md`.
4. Read the latest file in `brain/data/`.
5. If the task affects SEO or an indexed URL, follow `brain/03-SEO-DECISION-ENGINE.md`.

## Non-negotiable rules

- This project is **metrics-first and blog-first**.
- Do not redesign for aesthetics alone.
- Do not mass-delete, noindex or redirect existing URLs without Search Console evidence and a migration plan.
- Do not rewrite pages that are already near page 1 unless the hypothesis is explicit and measurable.
- Prefer small, attributable experiments over broad simultaneous changes.
- Record meaningful SEO/product changes in `brain/05-EXPERIMENTS.md` or `brain/06-DECISIONS.md`.
- Live data beats old documentation when they conflict.
- Preserve factual accuracy. Do not invent prices, opening hours, local experience, rankings or claims.
- Before merging code changes, run the relevant checks. At minimum: `npm run typecheck`; use the appropriate smoke test when the changed surface has one.

The brain is the operating layer. Historical docs remain useful evidence, but they are not the current decision authority.
