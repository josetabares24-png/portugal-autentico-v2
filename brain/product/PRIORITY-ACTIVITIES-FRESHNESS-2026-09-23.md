# Priority activities freshness pass — 2026-09-23

This is a factual maintenance pass, not a broad SEO rewrite.

## Why these pages

90-day Search Console baseline:

| Page | Impressions | Clicks | Position |
|---|---:|---:|---:|
| /actividades/elevador-santa-justa | 175 | 1 | 19.37 |
| /actividades/cristo-rei | 124 | 1 | 7.97 |
| /actividades/miradouro-senhora-do-monte | 72 | 1 | 11.85 |
| /actividades/fado-en-alfama | 17 | 0 | 7.35 |
| /actividades/cascais-cabo-da-roca | 15 | 0 | 9.27 |
| /actividades/oceanario-lisboa | 9 | 0 | 29.00 |

The first four were already identified as freshness priorities. Oceanário is included because it has a measurable affiliate signal and current pricing is dynamic.

## Source checks

### Cristo Rei
Official source:
https://cristorei.pt/visitas/bilheteira/

Verified:
- 0–7: free
- 8–12: 3 €
- 13+: 10 €
- monument tickets are sold only at the Sanctuary
- outdoor viewpoint/cafeteria/restaurant area has free entry
- Apr–Sep 10:00–19:00
- Oct–Mar 10:00–18:00
- last ascent 20 min before closing

Action:
- remove unsupported "cheaper/faster than Uber" comparison
- make in-person ticketing explicit
- date the information

### Miradouro da Senhora do Monte
Official source:
https://www.lisboa.pt/pontos-de-interesse/detalhe/miradouro-da-senhora-do-monte

Verified:
- open 24 hours
- views include Castelo de São Jorge, Tejo, Baixa, Carmo, Mouraria
- free public viewpoint

Action:
- remove unsupported "highest / least crowded" claims
- remove invented neighbour-observation copy
- describe what can actually be seen

### Fado
Sources:
https://ich.unesco.org/es/RL/el-fado-canto-popular-urbano-de-portugal-00563
https://www.museudofado.pt/historia

Verified:
- UNESCO inscription in 2011
- music + poetry performance genre widely practised in Lisbon
- professional fado houses and community/amateur contexts both exist
- Portuguese guitar traditionally has 12 metal strings
- Museu do Fado describes roots in Lisbon historic neighbourhoods and roughly 200 years of history

Action:
- remove oversimplified "fado = saudade" definition
- remove unsupported heuristic that a large sign/menu means fake fado
- remove unsupported Thursday–Saturday recommendation
- frame venue choice around format, programme and conditions

### Cascais + Cabo da Roca
Sources:
https://www.visitcascais.com/pt/visitor-information
https://carrismetropolitana.pt/lines/1624

Verified:
- Visit Cascais gives about 40 min by CP from Cais do Sodré
- Carris Metropolitana line 1624 links Cascais Terminal and Portela de Sintra via the Cabo da Roca area
- old Scotturb wording is stale

Action:
- remove stale Scotturb reference
- remove old estimated fare
- change half-day promise to a safer full-day recommendation when combining both places

### Elevador de Santa Justa
Sources:
https://www.carris.pt/descubra/frota/elevador/
https://www.carris.pt/viaje/alteracoes-de-servico/elevador-sta-justa-miradouro-encerrado/
https://equipamentos-historicos.carris.pt/

Verified:
- CARRIS currently marks the lift temporarily closed
- CARRIS also marks the viewpoint temporarily closed
- 2026 technical/reopening work is still documented

Action:
- remove wording that treats the cabin/viewpoint as currently usable
- set price/status label to "Cerrado temporalmente"
- make official status check the main practical advice

### Oceanário
Sources:
https://oceanario.pt/planear-visita/
https://oceanario.pt/exposicoes/aquario/

Verified:
- daily 10:00–20:00; last entry 19:00
- adult pricing varies by time, currently 25.5–29.9 €
- online purchase currently advertises 5% discount with code ONLINE5
- central aquarium: 5 million litres
- four habitats
- around 8,000 animals
- official duration: 1.5–2 h

Action:
- replace "one of the best aquariums in Europe" with factual description
- correct habitat wording from "Antarctic" to Southern Ocean
- update pricing and current discount
- make time-of-day pricing useful to the reader

## DECISION

These are factual corrections, not SEO experiments.

Do not claim wins/losses from ranking movement caused by these edits unless a later page-specific experiment is defined.

For Cristo Rei, Fado and Cascais/Cabo da Roca, current page-1-ish positions are protected: changes are deliberately narrow.

Santa Justa is the exception where correctness overrides preserving old copy because the operational status is materially wrong.

## Next review

Recheck dynamic facts:
- Santa Justa operational status
- Oceanário price/discount
- Cristo Rei price/hours
- Cascais/Cabo da Roca transport operator/line

when:
- a user asks about them;
- Search Console makes one a priority;
- or at the next quarterly freshness pass.


## Shared template copy cleanup

The activity-detail template also contained two generic authority labels:
- "El error que casi todos cometen"
- "Tip para ahorrar de un local"

They were changed to:
- "Ten en cuenta"
- "Dato práctico"

Reason:
These labels manufacture certainty/local authority even when the underlying fact is simply a practical note. This is a voice correction, not a visual redesign.
