# Affiliate measurement baseline — 2026-09-23

## Problem

The frontend already sent rich custom parameters on `affiliate_click`:
- affiliate_partner
- affiliate_campaign
- affiliate_content
- affiliate_placement
- destination
- activity_slug
- page_path

However, the GA4 field catalogue available through Windsor does not expose those custom parameters as queryable dimensions.

That means the event contained context in the browser, but our reporting layer could not reliably segment it.

## Historical baseline

GA4, 2026-06-25 → 2026-09-22:

| Page | affiliate_click | link_url | link_domain |
|---|---:|---|---|
| /free-tours-lisboa | 23 | empty | empty |
| /comprar-entradas | 4 | empty | empty |
| /actividades/oceanario-lisboa | 3 | empty | empty |
| /actividades/free-walking-tour-centro | 1 | empty | empty |
| /itinerarios/lisboa-3-dias-premium | 1 | empty | empty |
| /calculadora-presupuesto-lisboa | 1 | empty | empty |

Total observed affiliate clicks in this window: **33**.

## Change

`AffiliateLink` now sends three GA4-standard parameters alongside the existing custom parameters:

- `link_url` — the final affiliate URL, including preserved partner parameters and our UTM values when absent upstream;
- `link_domain` — destination hostname;
- `outbound = true`.

`buildAffiliateUrl()` already adds:
- `utm_source=estabaenlisboa`
- `utm_medium=affiliate`
- `utm_campaign=<campaign>`
- `utm_content=<placement/content>`

Therefore `link_url` becomes a reporting fallback for campaign and placement even if custom dimensions are not registered in GA4 Admin.

## What this unlocks

For future clicks we can answer:
- which destination/provider received the click;
- which campaign was involved;
- which content/placement generated the click;
- which source page sent the click.

This is especially important for `/free-tours-lisboa`, where historical clicks are commercially meaningful but currently aggregated.

## Guardrails

- no visible UI change;
- no affiliate URL attribution is removed;
- existing custom parameters remain;
- analytics still require explicit consent;
- historical events cannot be retroactively enriched.

## Evaluation

After new post-deployment clicks exist, query:

`affiliate_click × page_path × link_url × link_domain`

If `link_url` begins populating, this becomes the commercial segmentation baseline.

If it remains empty, the next step is GA4 Admin custom-dimension registration or a different reporting path — not more frontend guesswork.
