# SEO decision engine

Use this before changing an indexed page.

## Step 1 — classify the page

### A — Position 4–10 + meaningful impressions + weak CTR
Primary problem: **snippet/query fit**.

Possible actions:
- compare title/meta with actual queries;
- clarify benefit/specificity;
- align first screen/H1 with the dominant intent;
- improve rich-result eligibility only when truthful/relevant.

Avoid:
- full rewrites;
- URL changes;
- adding unrelated sections.

### B — Position 11–20 + meaningful impressions
Primary problem: **page-2 push**.

Inspect:
- missing sub-intents;
- internal links from stronger related pages;
- title/H1 alignment;
- information depth/accuracy;
- whether another site page competes for the same intent.

### C — Position >20 + some impressions
Primary problem: **relevance/authority**, not CTR.

Do not spend the first effort polishing meta descriptions.

### D — Impressions fall while position is stable or improves
Primary problem may be **query coverage or demand**, not a penalty.

Inspect:
- number of visible queries;
- lost query variants;
- seasonality;
- SERP changes;
- internal-link changes;
- content/template regressions.

### E — Very low/zero demand over a long window
Candidate for:
- improvement;
- merge;
- redirect;
- retirement.

But only after checking:
- 90-day GSC;
- inbound internal links;
- backlinks/referrals if available;
- whether the URL is a useful canonical destination.

## Step 2 — choose the smallest test

One page or a small coherent batch.

A test should change one dominant variable when possible:
- snippet;
- intent coverage;
- internal linking;
- content freshness;
- technical index/crawl issue.

Do not combine redesign + rewrite + URL move + navigation change and then call the result an experiment.

## Step 3 — protect winners

For pages already on page 1:
- prefer surgical edits;
- preserve strong sections and URL;
- record the pre-change baseline;
- do not keep editing every few days.

## New-content gate

Create a new article only when at least one is true:
- GSC exposes demand the site does not answer well;
- a proven cluster has a clear missing subtopic;
- SERP research shows a distinct intent not served by an existing page;
- the article provides a necessary internal-link destination.

Before creating it, check for cannibalization.

## Legacy non-blog route retirement

The strategic direction is blog-first, but simplification must not destroy earned demand.

For every non-blog public route:

1. Pull at least 90 days of GSC data.
2. Check links and sitemap references.
3. Identify the closest editorial replacement.
4. Decide:
   - keep as-is temporarily;
   - convert to editorial content while preserving URL;
   - 301 to a stronger relevant article;
   - retire only when there is no meaningful demand/equity.
5. Update sitemap/internal links at the same time as any migration.
6. Record the decision in [[06-DECISIONS]].

Never mass-delete routes based only on aesthetics or product preference.

## Experiment evaluation

After deployment:
- record production SHA/date;
- wait for an appropriate finalized window;
- compare equivalent periods;
- inspect page and query dimensions;
- label the result: **win / loss / inconclusive**;
- keep, revert or iterate once.

A result that cannot be attributed is not a learning.
