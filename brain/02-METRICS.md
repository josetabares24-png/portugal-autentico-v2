# Metrics system

## 22 octubre 2026 — Límites del diagnóstico comercial

Inventario HTML, no conversiones: 69 enlaces reconocidos en 100 páginas (GuruWalk14, Tiqets27, GetYourGuide28); identificadores presentes/patrocinio correcto. Producción base5d3573d. Buscador real devuelve tres tours/siete horarios para23/10 con referido. Windsor rechaza lecturas: tres conexiones con plan gratuito de una; sus ceros son sustitución inválida. No desconectar fuentes ni actualizar plan automáticamente. José desconoce reservas/comisiones: DESCONOCIDAS, no cero. El recuento histórico33 hasta septiembre no representa rendimiento actual. [Informe y fuentes](../docs/commercial-booking-audit-2026-10-22.md). Medidas de scroll son layout de QA, no comportamiento de usuarios.


## Latest snapshot — 20 octubre 2026

[GSC/Windsor, consolidaciones y baseline de publicación](data/CONSOLIDATION-SEARCH-2026-10-20.json). Corte conservador hasta 17/10, web, datos finalizados solicitados. Totales de propiedad: 28 días 125 clics / 10.023 impresiones / 1,25 % CTR / 9,48 posición frente a 55 / 6.565 / 0,84 % / 12,80. En 7 días: 33 clics frente a 40, con 2.989 frente a 2.955 impresiones. No resumir la última semana como mejora uniforme. 35,8 % del hito de 28.000 impresiones/28 días. Todo precede al despliegue del 20/10: no atribuirlo a PR #112. Filas ausentes de candidatas no son demanda medida cero. Periodos, posiciones ponderadas y límites en el JSON y el informe de Fase 7.

## Primary scoreboard

Always report these together for the same period:

1. Organic impressions
2. Organic clicks
3. Organic CTR
4. Average position

Never celebrate impressions alone.

## Standard windows

### Strategic
**Finalized 28 days vs previous finalized 28 days**

Use for trend and milestone tracking.

### Operational
**Finalized 7 days vs previous finalized 7 days**

Use to detect direction, not to prove causality.

### Page experiment
Use 7- and 14-day equivalent windows after a confirmed production deployment. Prefer a longer window when volume is low.

## 1,000/day milestone

The milestone is:

`28-day impressions >= 28,000`

Do not use a single day above 1,000 as success.

## Page-level triage fields

For every page under review capture:

- URL
- clicks
- impressions
- CTR
- average position
- top visible queries
- query count/coverage when available
- date last materially edited
- deployed production date/SHA
- internal links in
- internal links out
- monetization/action clicks if relevant

## Commercial metric for the blog

Once organic growth is stable enough to evaluate conversion, track:

`affiliate_clicks from blog / organic blog sessions * 100`

Also preserve placement/provider context so a click can be traced to the content that created it.

Do not increase affiliate density solely to increase clicks.

## Guardrails

- Search Console fresh data can be revised.
- Query rows are incomplete because Google anonymizes some queries.
- Page-dimension sums can differ from property totals.
- Average position is not a rank tracker; interpret it with impressions and query mix.
- A lower CTR can be normal if the site expands into broader/lower-ranking queries.
- Never attribute a movement to a code/content change unless the production deployment date is known.

## Minimum evidence before a conclusion

Prefer:
- at least 7 finalized days after deployment;
- 14 days when volume is low;
- enough impressions to make the change observable.

If a page has fewer than roughly 200 post-change impressions, label the result **inconclusive** rather than forcing a verdict.

## Weekly scorecard template

| Metric | Current 28d | Previous 28d | Change |
|---|---:|---:|---:|
| Impressions | | | |
| Clicks | | | |
| CTR | | | |
| Avg position | | | |
| Blog impressions | | | |
| Blog clicks | | | |
| Pages with >=50 impressions | | | |
| Pages positions 4–10 | | | |
| Pages positions 11–20 | | | |

Then write only three conclusions:
1. What clearly improved?
2. What clearly worsened?
3. What single area deserves the next experiment?


## Affiliate segmentation quality

Commercial reporting is not complete if it only reports total `affiliate_click`.

Preferred breakdown:
- page_path
- link_domain
- link_url
- UTM campaign/content parsed from link_url
- activity/provider context when available

Historical baseline through 2026-09-22 has empty `link_url` / `link_domain` for affiliate_click events.

From the 2026-09-23 instrumentation change onward, verify that those standard dimensions populate before making provider/placement conclusions.
