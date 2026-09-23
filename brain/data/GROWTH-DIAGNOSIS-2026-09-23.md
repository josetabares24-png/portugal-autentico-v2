# Growth diagnosis — 2026-09-23

## Decision question

What is preventing Estaba en Lisboa from growing now, and what is the smallest next intervention that can produce useful evidence?

## HECHOS

### Search Console — 28 days ending 2026-09-22
- 6,111 impressions
- 47 clicks
- 0.77% CTR
- 12.84 average position

Previous 28 days:
- 4,749 impressions
- 49 clicks
- 1.03% CTR
- 11.62 average position

Interpretation: impressions grew 28.7%, but clicks did not.

### Search Console — 90-day surface split
- Blog: 9,880 impressions / 85 clicks
- Itinerarios: 952 / 14
- Actividades: 682 / 3
- Comprar entradas: 7 / 0
- Free Tours: 86 / 0 organic clicks
- Calculadora: 5 / 0
- Planifica: 13 / 0

### GA4 — 90-day product signals
- /free-tours-lisboa: 37 sessions, 91.9% engagement rate, 23 recorded affiliate_click events.
- /comprar-entradas: 24 sessions, 4 affiliate_click events.
- /itinerarios: 84 sessions.
- /itinerarios/lisboa-1-dia-lo-esencial: 61 sessions.
- /itinerarios/lisboa-3-dias-premium: 28 sessions, 1 affiliate_click event.
- /planifica-tu-viaje: 32 sessions.
- /calculadora-presupuesto-lisboa: 19 sessions, 1 affiliate_click event.

Affiliate events require explicit analytics consent, so absolute conversion totals are undercounts. Relative direction is still useful.

### Internal flow evidence
GA4 referrer data shows the Home has sent substantial traffic to legacy surfaces:
- Home → /itinerarios: 26 sessions in the 90-day referrer rows.
- Home → /planifica-tu-viaje: 10 sessions.
- Home → /free-tours-lisboa: 7 sessions.

The current Home still contains two prominent links to /itinerarios.

Every blog article currently ends with the same CTA to /planifica-tu-viaje.

There is no dedicated internal-navigation event currently showing which CTA/placement generated a click.

## HIPÓTESIS

1. The largest immediate acquisition leak is CTR/query fit: Google is increasing exposure faster than clicks.
2. The largest product leak is that internal traffic is routed to legacy surfaces without evidence that they are the best next action.
3. Free Tours has the clearest current commercial signal, but the site sends more Home traffic toward itinerarios than toward Free Tours.
4. Some weak commercial surfaces may look engaged because the audience is tiny; engagement rate alone is not proof of business value.

## DECISION

Do not redesign or delete URLs.

First instrument the important internal decisions so the next product change has a baseline:
- Home primary itinerary CTA
- Home secondary itinerary CTA
- Home Free Tours CTA
- article footer planning CTA
- article related-content clicks
- article editorial links

Use GA4 recommended event `select_content` with `content_type` and `content_id`.

## PRIMARY BOTTLENECK

The site is acquiring search visibility but does not yet have a measured, evidence-led path from article/page to the next useful or commercial action.

The SEO opportunity and the product funnel must be improved together, but the immediate missing capability is internal-journey measurement.

## NEXT DECISION AFTER BASELINE

Once enough `select_content` data exists, compare:
- itinerary CTAs
- Free Tours CTA
- planning CTA
- editorial continuation clicks

Then decide which CTA deserves global prominence and which legacy CTA should be removed or replaced.

Do not wait months. Evaluate as soon as one of these is true:
- 7 finalized days have passed; or
- a placement reaches at least 30 measured click opportunities/events, whichever gives useful signal first.


## Measurement deployment

Internal-journey tracking went to production with:

- Main commit: `2b950855fa1787bb80d257972e35f098c25bc1b5`
- Vercel deployment: `dpl_DASsJNDY6CDsbCLLFpFSMuN42vSU`
- Created: **2026-09-23 10:50 Europe/Lisbon** (09:50:56 UTC)
- State checked: **READY / production**

Do not expect `select_content` events before this point.


### Inline editorial-link coverage — audit 2026-09-23

A code audit found **70** contextual `tipo: 'enlace'` blocks inside article bodies.

These are different from:
- the footer CTA;
- the “Relacionadas” cards;
- the “También te puede servir” block.

Before the follow-up fix, those 70 inline links used plain Next.js `Link` and therefore did **not** emit `select_content`.

Decision:
- instrument them as `content_type = article_inline_link`;
- use the destination path as `content_id`;
- keep their copy, href and visual treatment unchanged.

Reason:
Contextual in-body recommendations are likely one of the strongest forms of editorial continuation. Leaving them invisible would bias the internal-journey baseline toward the more prominent modules.
