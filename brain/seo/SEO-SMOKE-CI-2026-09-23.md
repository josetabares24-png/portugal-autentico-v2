# SEO smoke CI gate — 2026-09-23

## Problem

The repository already contained `scripts/smoke-sitemap.mjs`, a comparatively strong SEO regression test, but GitHub Actions only ran TypeScript.

That meant a change could compile successfully while still breaking:
- a sitemap URL;
- a canonical;
- robots/noindex behavior;
- a redirect;
- an indexable activity;
- required navigation to Free Tours;
- or an image expected by the audited public surfaces.

## Decision

Run the existing SEO smoke test automatically for pull requests and main pushes that touch indexation-critical files.

The workflow:
1. installs dependencies;
2. runs a real Next.js production build;
3. starts the app locally;
4. validates sitemap and robots;
5. checks every sitemap URL for 200/no redirect/noindex/canonical/title;
6. validates the current activity and Free Tours image/navigation invariants.

It can also be started manually with `workflow_dispatch`.

## Why path-scoped

Do not pay the cost of a full Next.js production build for documentation-only or unrelated changes.

The gate runs only when files capable of changing public SEO/indexation behavior are touched.

## Relationship to Vercel

This is independent of Vercel Preview availability.

A Vercel build-rate limit must not remove our ability to detect SEO regressions in GitHub.

The CI test does not prove production deployment happened. It proves the commit can build and preserves the tested SEO invariants.

## Guardrail

Do not weaken the test just to make a PR green. If an invariant is intentionally changed, update:
- the product/SEO decision first;
- then the smoke assertion;
- and document why.


## First-run findings

The first CI run proved the gate is useful rather than ceremonial.

Result:
- 46/47 assertions passed;
- all 98 sitemap URLs returned 200 with no redirect/noindex/canonical error;
- sitemap/robots/article/image checks passed;
- one real accessibility/navigation defect was detected: Free Tours did not receive `aria-current="page"` in server-rendered HTML;
- one smoke-test parser assumption was stale: it expected `indexable` immediately after an activity slug even though editorial `experiencia` blocks can sit between them.

Follow-up:
- normalize the internal `/es` rewrite before Navbar active-route comparison;
- parse each activity block before reading its `indexable` flag;
- rerun until the suite is fully green.

This is the reference example for the rule: distinguish a real product defect from a stale test assertion; fix both rather than disabling the gate.
