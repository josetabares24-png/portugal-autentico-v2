# Web audit — 2026-09-23 PM

## Scope

Safe continuation pass after the active SEO experiments were already running.

Guardrails respected:
- no material edit to E-006 café;
- no material edit to E-007 comer barato;
- no change to protected SEO pages;
- no visual redesign;
- no CTA/copy experiment contamination.

## 1. Production privacy / measurement correction — LIVE

Google Analytics had been initialized in the root layout before the consent component ran.

Fixed and deployed:
- main commit: `4cff855d6fb35130d73dcf1b9ddce41ab94d12d5`;
- production deployment: `dpl_Htt1VXTZnQ7ztEEhPvFJdcfJpYTY`;
- READY: 2026-09-23 15:26 Europe/Lisbon.

Verified against real production HTML:
- no unconditional `gtag.js` request in server HTML;
- no root-layout GA initialization before consent.

Measurement boundary:
GA4 sessions/pageviews before vs after this deployment are not perfectly comparable because collection behavior changed. Search Console is unaffected.

Reference: [[privacy/ANALYTICS-CONSENT-GATE-2026-09-23]].

## 2. Affiliate observability — MERGED, NOT YET DEPLOYED

Audit found that `BookingCard`, the native card used by `/comprar-entradas`, still emitted `affiliate_click` without:
- `link_url`;
- `link_domain`;
- `outbound`.

Fix merged:
- commit `b6a2e74aef9a2f85f0cf5239a15f94ca382047b7`;
- centralized through `trackAffiliateClick()`;
- visible UI and affiliate hrefs unchanged.

Vercel did not deploy this commit because the project hit `build-rate-limit`.

Do not declare the new dimensions live until a later production deployment includes this commit.

## 3. Internal journey measurement — MERGED, NOT YET DEPLOYED

Audit found **70** contextual `tipo: 'enlace'` blocks inside article bodies using plain Next.js `Link`.

They were invisible to the `select_content` baseline.

Fix merged:
- commit `edf72c41c95aa5a5d1e5a5ff61b06d3db52cb1e1`;
- new `content_type = article_inline_link`;
- `content_id = destination path`;
- no copy, href or visual change.

This is important because contextual in-body continuation can be more natural than footer/related modules.

Not yet live due Vercel build-rate limit.

## 4. Automated SEO regression gate — MERGED

New workflow:
`.github/workflows/seo-smoke.yml`

First run:
- 46/47 checks passed;
- exposed one real Navbar active-state issue;
- exposed one stale test parser assumption.

Second run after corrections:
- **47/47 passed**;
- TypeScript passed;
- production-like Next.js build passed;
- **98 sitemap URLs** each returned 200 with no redirect, no `noindex`, no canonical mismatch and no missing title;
- robots/sitemap/image checks passed.

Reference: [[seo/SEO-SMOKE-CI-2026-09-23]].

## 5. Free Tours production verification

Real production page checked:
`/free-tours-lisboa`

Observed:
- 8 GuruWalk outbound links;
- all 8 contain an affiliate `ref`;
- all 8 contain `utm_source=estabaenlisboa`;
- all 8 contain `utm_medium=affiliate`;
- all 8 contain campaign and content placement parameters.

Conclusion:
the current static GuruWalk commercial funnel remains attributable and should remain the control while MCP is tested.

No secret values are stored in this document.

## 6. Navbar active-state correction — MERGED, NOT YET DEPLOYED

The SEO smoke test correctly detected that server-rendered `/free-tours-lisboa` did not mark the nav entry with `aria-current="page"`.

Cause:
- next-intl uses internal `/es/...` routes with `localePrefix='never'`;
- Navbar compared that internal path directly with public unprefixed hrefs.

Fix:
normalize the internal `/es` prefix before active-route comparison.

Validated by the green SEO smoke run.

Not yet live due Vercel build-rate limit.

## 7. Redirect audit

Current `next.config.mjs` permanent redirects parsed:
- 65 redirect rules;
- 0 redirect chains detected;
- 0 self redirects;
- 0 duplicate sources.

No redirect cleanup required in this pass.

## 8. Runtime health

Vercel production runtime, last 7 days:
- no grouped runtime errors;
- status logs observed: 200 / 204 and one isolated 405;
- the 405 was a single `POST /`, not a recurring application route failure.

No runtime incident requires intervention.

## 9. GA4 instrumentation sanity check

Windsor GA4 account:
`520462797`

Query window:
2026-09-16 → 2026-09-23

For `select_content`, `affiliate_click`, `sign_up` with standard link/content dimensions:
- only one row returned at query time;
- `affiliate_click` on 2026-09-20 from `/free-tours-lisboa`;
- historical row had blank standard link dimensions, as expected before the new instrumentation;
- no rows from 2026-09-23 were available yet.

Interpretation:
data is delayed/too sparse. This is **not evidence of zero usage** and not a reason to change CTAs.

## 10. GuruWalk MCP

PR #79 remains open.

Status:
- server-side proof of concept prepared;
- TypeScript passed;
- Preview secret configured by the user;
- runtime validation still blocked because Vercel Preview builds are rate-limited.

Do not merge or expose dynamic inventory until Lisbon discovery + availability + affiliate attribution are verified in a real Preview.

## 11. Deployment divergence

At the end of this audit:

Latest GitHub main:
`33a4049c2bab6d5d533c82015fdbfdcaf4f3a981`

Latest verified production deployment:
`4cff855d6fb35130d73dcf1b9ddce41ab94d12d5`

Therefore GitHub contains validated improvements that production does not yet serve.

Cause:
Vercel `build-rate-limit`, not a code failure.

### Required next deployment check

When Vercel allows a production build:
1. deploy latest `main`;
2. verify `aria-current="page"` on Free Tours;
3. verify BookingCard standard affiliate dimensions are live;
4. verify article inline links emit `select_content/article_inline_link`;
5. record the new production SHA/time as the measurement boundary;
6. then retry GuruWalk MCP Preview separately.

## Current product decision

Do **not** respond to the build-rate limit by changing strategy or editing SEO pages.

The site is technically healthy. The next growth decisions still require the active measurement windows to mature.


## 12. Production recovery — 2026-09-23 16:05 Europe/Lisbon

The Vercel production build limit cleared enough to deploy the validated latest main.

Production deployment:
- deployment: `dpl_9XAUsoLKD33AGFHWnfB1h3hcuNZg`;
- production commit: `cc4e1c5cc279e3c5c4d9545ae226bdf6e659d939`;
- source commit is an empty maintenance retrigger whose tree matches the previously validated main;
- state: **READY**;
- aliases include `estabaenlisboa.com`.

Therefore the previously pending changes are now included in the production tree:
- BookingCard standard affiliate dimensions;
- contextual article `article_inline_link` tracking;
- Free Tours active-state normalization;
- automated SEO smoke gate code/config.

Measurement boundary:
use this production deployment as the live start for the previously pending instrumentation.

GuruWalk MCP remains separate:
- PR #79 was retriggered after production recovered;
- Vercel Preview still returned `build-rate-limit`;
- do not merge the MCP proof of concept until runtime validation succeeds.
