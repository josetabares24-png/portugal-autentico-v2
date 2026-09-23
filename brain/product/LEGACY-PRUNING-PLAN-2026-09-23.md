# Legacy pruning plan — 2026-09-23

Purpose: decide the fate of product surfaces that are not part of the editorial core without destroying useful SEO, behavior or revenue signals.

## Rule

A surface can end in one of four states:

- **KEEP** — deserves to exist as its own product/page.
- **INTEGRATE** — useful function/content, but should live inside a stronger canonical page.
- **MEASURE** — not enough evidence yet; preserve until the current baseline matures.
- **RETIRE** — no meaningful acquisition, use, revenue or unique job; redirect to the best destination.

Do not confuse "remove from navigation" with "delete URL".

---

## CORE — KEEP / INVEST

### /blog and editorial guides

**Decision:** KEEP / INVEST.

Evidence:
- ~9,880 impressions / 85 clicks over the 90-day surface audit.
- Main acquisition engine.
- Most proven organic pages live here.

"Guías" in the editorial sense are not the problem. They are the core product.

What changes:
- fewer generic guides;
- more query-led, verified, differentiated pieces;
- update existing winners before creating volume.

---

## ITINERARIES — SELECTIVE KEEP

### /itinerarios

**Decision:** MEASURE / DEMOTED.

Evidence:
- 84 GA4 sessions.
- 33 Search Console impressions / 0 clicks for the hub.
- Still receives internal traffic.

Action:
- keep URL for now;
- do not restore to main navigation;
- wait for new internal CTA measurement.

### /itinerarios/lisboa-1-dia-lo-esencial

**Decision:** KEEP.

Evidence:
- 720 impressions / 9 clicks.
- One of the stronger non-blog acquisition pages.

Action:
- protect SEO;
- potentially editorialize further later;
- do not retire.

### /itinerarios/lisboa-3-dias-premium

**Decision:** KEEP / MEASURE.

Evidence:
- 148 impressions / 5 clicks;
- position ~8.4;
- 1 recorded affiliate_click.

Action:
- preserve while monetization and internal behavior are measured.

Other itinerary pages:
- classify individually by Search Console + GA4.
- no blanket keep/retire rule.

---

## CALCULATOR — LIKELY INTEGRATE

### /calculadora-presupuesto-lisboa

**Current evidence:**
- 5 Search Console impressions / 0 clicks.
- 19 GA4 sessions.
- 1 form_start.
- 1 recorded affiliate_click.
- average engagement ~30s.

**Decision:** INTEGRATE candidate, not immediate delete.

Likely end state:
- preserve the useful calculation experience;
- integrate it into the stronger canonical editorial intent around travel budget;
- redirect the standalone URL only after checking whether the calculator itself is used enough to justify keeping it interactive.

Best likely canonical:
- /blog/presupuesto-viajar-lisboa

Why:
The user need is "how much will Lisbon cost?", not "I need a calculator product".

Do not execute while current internal measurement is still establishing behavior.

---

## PLANIFICA — MEASURE, LIKELY REFRAME OR RETIRE

### /planifica-tu-viaje

Evidence:
- 14 Search Console impressions / 0 clicks.
- 32 sessions.
- 31 engaged sessions.
- 1 measured form_start.
- receives a global article-footer CTA today.

**Decision:** MEASURE until the 7-day CTA baseline closes.

Possible end states:
1. KEEP as a real service if form demand exists.
2. REFRAME as a lighter contact/service page if users click but do not start.
3. RETIRE global CTA and keep page discoverable only contextually.
4. RETIRE page if it produces neither interest nor viable leads.

Do not decide before measuring the CTA that currently sends traffic there.

---

## BUY TICKETS — KEEP AS TRANSACTIONAL SECONDARY SURFACE

### /comprar-entradas

Evidence:
- 7 Search Console impressions / 0 clicks.
- 24 sessions.
- 4 recorded affiliate_click events.

**Decision:** KEEP / DEMOTED.

Reason:
Weak acquisition, but real commercial behavior.

Action:
- do not invest in SEO hub growth;
- do not place in primary navigation;
- preserve as a transactional destination where context warrants it;
- reassess after affiliate destination/revenue data is available.

---

## ACTIVITIES — SELECTIVE KEEP

### /actividades hub

Evidence:
- 27 hub impressions / 0 clicks.
- 49 sessions.
- individual activity URLs have independent signals.

**Decision:** hub DEMOTED; individual pages classified separately.

Do not redesign the hub.

Individual pages:
- KEEP where there is organic or commercial signal;
- improve only when freshness/search data justify it;
- retire only page by page.

Commercial exception:
- Oceanário has strong affiliate behavior relative to tiny traffic.

---

## FREE TOURS — KEEP / COMMERCIAL PROTECT

### /free-tours-lisboa

Evidence:
- 37 sessions.
- 34 engaged sessions.
- ~92% engagement rate.
- 23 recorded affiliate_click events.

**Decision:** KEEP / COMMERCIAL PROTECT.

This is currently the clearest commercial page-level signal.

Do not increase prominence until current CTA measurement tells us whether users choose it organically from the Home and content.

---

## ALREADY RETIRED

### /pack-completo

**Decision:** RETIRED → /blog.

Reason:
- zero Search Console visibility over 12 months;
- negligible use;
- duplicated existing hubs.

---

## EXPECTED SIMPLIFIED PRODUCT

If current measurements confirm the direction, the public product should trend toward:

1. **Editorial guides / blog** — acquisition and trust.
2. **Selected itineraries** — only pages with real demand.
3. **Free Tours** — current commercial exception.
4. **Selected transactional pages** — only where commercial behavior is proven.
5. **Newsletter** — owned audience.
6. **Contextual service/contact** — only if demand is proven.

Likely to disappear as standalone "products":
- redundant hubs;
- weak standalone calculator;
- weak planning hub;
- any activity/ticket surface with no unique job.

## DECISION TIMING

Do not execute the remaining structural retirements before the current 7-day internal-click baseline closes.

Next pruning decision should happen after the 2026-09-30 review.

Priority questions:
1. Does Home → Itinerarios deserve to remain?
2. Does article → Planifica generate meaningful action?
3. Does Home → Free Tours deserve more prominence?
4. Is the calculator better as a feature inside the budget guide?
5. Which non-core hubs can be collapsed without losing demand or revenue?

## Principle

The final site should feel smaller than today, but stronger.

Fewer surfaces.
Clearer jobs.
More evidence.
More useful pages.
