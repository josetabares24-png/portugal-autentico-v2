# Activities product audit — 2026-09-23

## DIAGNÓSTICO

`/actividades` is weak as a global product surface, but the individual activity URLs are not one homogeneous failure.

The main question was whether these pages were splitting search demand with blog articles covering the same topics.

The available Search Console query data does **not** support broad cannibalization.

## HECHOS

### Search Console — 90 days

Activity-detail URLs together:
- roughly 682 visible impressions;
- 3 clicks;
- 20 published activity pages.

Highest-signal pages:

| Page | Impressions | Clicks | Position |
|---|---:|---:|---:|
| elevador-santa-justa | 175 | 1 | 19.37 |
| cristo-rei | 124 | 1 | 7.97 |
| miradouro-senhora-do-monte | 72 | 1 | 11.85 |
| crucero-atardecer-tajo | 69 | 0 | 40.29 |
| miradouro-portas-do-sol | 44 | 0 | 15.20 |
| lx-factory | 34 | 0 | 21.65 |
| miradouro-santa-luzia | 28 | 0 | 17.14 |
| torre-de-belem | 18 | 0 | 56.89 |
| sintra-dia-completo | 18 | 0 | 38.56 |
| fado-en-alfama | 17 | 0 | 7.35 |
| cascais-cabo-da-roca | 15 | 0 | 9.27 |
| jardim-estrela-principe-real | 10 | 0 | 10.80 |

All 20 records in `src/data/activities.ts` are currently marked `indexable: true`.

### Query overlap with blog

The page+query comparison found only a few exact overlaps:

- `tranvia 28 lisboa`
  - /actividades/tranvia-28: 1 impression, position 73
  - /blog/tram-28-historia-guia: 8 impressions, position 29.38
  - /blog/como-moverse-por-lisboa: 1 impression, position 3

- `miradouro da graça`
  - /actividades/miradouro-senhora-do-monte: 1 impression, position 28
  - /blog/graca-lisboa-que-ver: 1 impression, position 9

This is too little overlap to justify a site-wide redirect or noindex strategy.

## GA4 / COMMERCIAL SIGNAL

Activity-detail sessions are very small.

Notable exceptions:
- /actividades/oceanario-lisboa: 5 sessions, 3 recorded affiliate_click events.
- /actividades/free-walking-tour-centro: 1 session, 1 recorded affiliate_click event.

These absolute conversion counts are underestimates because analytics events require consent.

## CLASIFICACIÓN

### PROTECT / OBSERVE

Do not retire while they hold clear independent search signal:

- cristo-rei
- miradouro-senhora-do-monte
- fado-en-alfama
- cascais-cabo-da-roca
- jardim-estrela-principe-real

These have average positions roughly between 7 and 12, even if volume is small.

### IMPROVE LATER, NOT NOW

- elevador-santa-justa
- miradouro-portas-do-sol
- lx-factory
- miradouro-santa-luzia

They have enough impressions to justify a future page-specific diagnosis, but not enough evidence for broad structural action.

### COMMERCIAL PROTECT

- oceanario-lisboa

Organic visibility is weak, but the page produced the clearest activity-level affiliate signal.

### LOW-PRIORITY / QUESTIONABLE VALUE

- crucero-atardecer-tajo
- torre-de-belem
- sintra-dia-completo
- mosteiro-jeronimos
- parque-eduardo-vii
- tranvia-28
- tasca-tradicional
- free-walking-tour-centro

This does not mean RETIRE automatically.

Each needs:
- exact query intent;
- internal traffic;
- conversion;
- overlap with another canonical page;
- freshness / factual-quality review.

## PRODUCT FINDING

The problem is **not** that all activity pages compete with the blog.

The bigger issue is role ambiguity:

- some pages behave like mini editorial guides;
- some are commercial landing pages;
- some are attraction fact sheets;
- some exist mainly to expose an affiliate action.

That mixture makes `/actividades` a weak global product concept even when individual URLs have value.

## EDITORIAL DEBT

The activity dataset contains language that conflicts with Mente Lisboa in several records, including:
- "tip de ahorro de local";
- "el error que casi todos cometen";
- unsupported superlatives;
- pseudo-local authority;
- precise recommendations without a current verification date on some records.

Several entries have `lastVerified: 2026-08-05`, while others have no `lastVerified` at all.

Do **not** run a mass rewrite.

Freshness should be audited page-by-page, prioritizing:
1. pages with search signal;
2. pages with affiliate value;
3. claims likely to change (price, hours, operational status, transport).

## DECISIÓN

**KEEP the activity URLs selectively. Keep the hub DEMOTED. Do not mass-retire or mass-noindex.**

No evidence currently supports broad cannibalization cleanup.

## NEXT ACTION

After E-006/E-007 are left untouched:

1. verify freshness on `cristo-rei`, `miradouro-senhora-do-monte`, `fado-en-alfama`, `cascais-cabo-da-roca`;
2. review `elevador-santa-justa` separately because it has the most impressions but only position ~19;
3. preserve Oceanário as a commercial page while measuring conversion.

Do not invest in redesigning the Activities hub before individual-page roles are resolved.


## FRESHNESS PASS — 2026-09-23

Six priority pages were checked against current public/official sources.

### cristo-rei
Sources:
- https://cristorei.pt/contacto/
- https://cristorei.pt/visitas/bilheteira/

Changes:
- verified current opening windows;
- corrected access information to Carris Metropolitana 3001 from Cacilhas;
- removed unsupported "faster/cheaper" transport claims;
- added the important ticket rule: terrace/monument access tickets are sold in person.

Decision: KEEP / VERIFIED.

### miradouro-senhora-do-monte
Sources:
- https://www.lisboa.pt/pontos-de-interesse/detalhe/miradouro-da-senhora-do-monte
- https://www.visitlisboa.com/pt-pt/locais/miradouro-da-senhora-do-monte

Changes:
- removed the unsupported "least crowded" / "locals own it" framing;
- stored 24-hour opening;
- kept only views and location supported by city/tourism sources.

Decision: KEEP / VERIFIED.

### fado-en-alfama
Sources:
- https://ich.unesco.org/en/RL/fado-urban-popular-song-of-portugal-00563
- https://www.museudofado.pt/

Changes:
- removed invented heuristics about what counts as "real" fado;
- removed universal time/day claims;
- anchored history in UNESCO and visitor context in Museu do Fado;
- made price/duration explicitly variable.

Decision: KEEP / EDITORIALIZED.

### cascais-cabo-da-roca
Sources:
- https://www.visitcascais.com/en/visitor-information
- https://carrismetropolitana.pt/stops/171949

Changes:
- removed stale Scotturb reference;
- removed stale fixed train-price claim;
- updated transport language to current Carris Metropolitana lines serving the Cabo da Roca area.

Decision: KEEP / VERIFIED.

### elevador-santa-justa
Sources:
- https://www.carris.pt/viaje/alteracoes-de-servico/elevador-sta-justa-miradouro-encerrado/
- https://equipamentos-historicos.carris.pt/

Changes:
- replaced the stale 2025 reopening URL;
- current Carris information says the miradouro is temporarily closed;
- kept status cautious because the wider equipment-reopening process is still being evaluated;
- removed queue/time claims that no longer match a closed/uncertain operation.

Decision: KEEP URL / CURRENT STATUS FIRST.

SEO note:
This page had the largest activity-page Search Console visibility (~175 impressions / 90d) but average position ~19. Do not run a second SEO rewrite immediately; first let factual freshness settle and monitor query behavior.

### oceanario-lisboa
Source:
- https://oceanario.pt/planear-visita/

Changes:
- verified opening 10:00–20:00 and last entry 19:00;
- updated adult price floor to 25.50 EUR based on current official online information;
- recorded variable time-slot pricing;
- recorded current 5% official online-purchase discount;
- removed unsupported "one of the biggest/best in Europe" claim.

Decision: COMMERCIAL PROTECT / VERIFIED.

Commercial note:
This remains the strongest activity-detail commercial signal in current GA4 (5 sessions / 3 recorded affiliate_click events in the prior audit). Do not remove its commercial path while measurement matures.

## RESULT

All six priority activity checks are complete.

Next activity work should not be a new mass pass.

Wait for:
- new Search Console behavior;
- affiliate destination data;
- a material factual change;
- or a specific page crossing a decision threshold.
