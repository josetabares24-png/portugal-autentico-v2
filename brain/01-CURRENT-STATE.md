# Current state

## 18 octubre 2026 — Fase 6B, barrios

José indica seguir tras transporte. Seis perfiles manuales de visita: Baixa, Alfama, Graça, Chiado/Bairro Alto, Mouraria y Parque das Nações. Originales/orden/SEO conservados. Alojamiento KEEP; comparativa general y Belém REVIEW por dudas concretas, sin migración ni cambios en esas páginas. Preview READY 3cad0d8 / dpl_3a2pae6c2bs2K7BgPdBHEbpzfzoC: plantilla 1.635 y migración remota 1.328 sin fallos; 36 vistas responsive sin overflow; CI success. Sin merge ni producción. [Informe](../docs/editorial-phase6-neighborhoods-review.md). Siguiente grupo: comida; conservar pendientes de Fase 7.

## 18 octubre 2026 — Fase 6A, transporte

José autoriza continuar tras la entrega del piloto. Tres adiciones explícitas: aeropuerto, 28E y patinetes. La guía nacional conserva su tabla; Olaias queda para cultura. Sin cambios de URLs, datos originales ni reglas SEO. Preview READY 130b792 / dpl_CHaajzvU7so6wrRCwPCk6gLKyHY4: plantilla 1.617, migración remota 1.328, sitemap 64/64 y 16 vistas responsive sin fallos; CI success. Sin merge ni producción. [Informe](../docs/editorial-phase6-transport-review.md). Siguiente lote: barrios.

## 18 octubre 2026 — Fases 3/4, piloto de siete guías

José autoriza seguir tras Fase 2. Componente Lo esencial semántico y perfiles revisados en Metro, Navegante, pagos, movilidad, Time Out, Oriente y vida nocturna. Sin cambio de URLs/metadata ni rollout. Se conservan artículos originales; Oriente adelanta uso y pagos desplaza disclaimer. Preview READY f51e4ce / dpl_CdFs9k2esuhRaB3jZ9QbC7bYVRyt: plantilla 1.608, migración remota 1.328, sitemap 64/64, 28 vistas responsive sin overflow; CI success. [Informe](../docs/editorial-phase4-review.md). STOP en Fase 5 antes de Fase 6; no merge ni producción.

## 18 octubre 2026 — Fase 2, candidato para revisión

Continuación autorizada por José: fuentes e índice únicos, reservas después de cuerpo y FAQ, retirada del banner editorial automático. 72 superficies comprobadas; sin cambios de URLs ni reglas SEO de Fase 1. Build y QA local/remoto pasan: plantilla 1.443, migración remota 1.328, sitemap 64/64. Preview READY `643683b` / `dpl_HNvQk6YGd1Zx8Wac91G2AUry168K`; CI success. D-045 reemplaza D-039 solo en este candidato. STOP antes de Fase 3, sin merge ni producción. [Informe](../docs/editorial-phase2-review.md).

## 17 octubre 2026 — Fase 1 editorial en rama, revisión de Preview

Las continuaciones de José autorizan Fase 1 con dos límites: fusiones de restaurantes románticos/novedades en WAIT hasta Fase 7 y checkout ya retirado sin reconstrucción. Candidato en `editorial-rebuild`, PR #112: 16 redirects 301, ocho noindex/follow, 98 URLs en sitemap y 17 fichas indexables conservadas. QA local y remoto pasan: Preview `861aa95` / `dpl_Fswp4Rgmsho56SfoF5HRsbFbwfCq`, 1.328 checks remotos de migración sin fallos y sitemap 64/64, más revisión responsive. El enlace temporal fue autorizado expresamente; no se guarda su token en el repo. No merge ni producción. STOP antes de Fase 2. Decisión, evidencia y límites: [[seo/EDITORIAL-REBUILD-PHASE-1-2026-10-17]].

## 17 octubre 2026 — reconstrucción editorial, Fase 0

Auditoría terminada en `editorial-rebuild`, base `83ca369`. No se han cambiado páginas, URLs ni configuración de producción. La instrucción de José es evolucionar hacia una publicación editorial, con fases pequeñas y gates de revisión. Fase 1 no arranca automáticamente por el orden contradictorio de dos consolidaciones y la petición de noindex sobre checkout ya retirado. Informe y plan: [editorial-rebuild-audit](../docs/editorial-rebuild-audit.md). Baseline y decisión: [[seo/EDITORIAL-REBUILD-PHASE-0-2026-10-17]].

Producción confirmada en `83ca369`, READY desde **15/10, 14:21:48 Lisboa**, deployment `dpl_FcVmwVr8u8p5zzdwiUmDNeNo36jz`. Por tanto, E-016 ya está publicado, aunque las notas contemporáneas del 15/10 que siguen abajo aún lo describan como preparado. Clerk ya devuelve noindex/nofollow en su propio host; no introducir un proxy por SEO.

## Actualización 15 octubre 2026 — mejoras del blog en preparación

Petición de José: revisar artículos débiles en Search y mejorarlos. E-016 prepara aeropuerto al centro (96 impresiones / 0 clics / posición 24,11), Metro (1.023 / 3 / 8,77) y Time Out (608 / 4 / 8,80), con datos cerrados 14 sep–11 oct. Rutas/costes, mapa oficial y oferta de puestos, respectivamente; sin cambiar títulos/metas ni URLs. Baseline, criterios y fuentes: [[seo/BLOG-SEARCH-IMPROVEMENTS-2026-10-15]]. Aún sin despliegue; no contar ventana de evaluación desde el push.

La corrección GA4 de PR #109 ya se fusionó en `50be9c2` y se verificó en producción. La revisión visual de Portugal permanece separada en PR #110, pendiente de aprobación de José.

Updated: **2026-10-15**

## GA4 correction published — 2026-10-14

The GA4 history includes localhost and Vercel preview traffic. The finalized-window comparison shows Google clicks growing (52 → 109) while recorded Google organic sessions fall (75 → 45). Collection changed on 2026-09-23 at 15:26 Europe/Lisbon to require explicit consent; do not treat the GA4 drop as proof of an SEO decline. The correction from `codex/ga4-production-consent` restricts tracking to public hostnames and fixes revoke/reaccept behavior while preserving D-024. PR #109 was approved by José, merged as `50be9c2`, and verified on the production deployment `dpl_CjX1k6174H5AE1NedGKqXU4XwYwV` (READY). Baseline, decision, limitations and validation: [[privacy/ANALYTICS-PRODUCTION-HOSTS-2026-10-14]].

## Home PC candidate — 2026-10-07

The desktop audit led to a requested preview on branch `preview/home-pc-rhythm`. It preserves the eight canonical destinations and the brand, reduces the opening and changes the desktop photographic/editorial hierarchy. **José approved publishing the reviewed preview on 2026-10-08 ("Entonces hacemos deploy?").** The approved visual implementation is `8b7040e`; release follows PR #101 and Vercel's normal production deployment from `main`. Approval includes the existing mobile treatment, not a new mobile redesign. E-010's measurement clock starts only after the production deployment is verified. Evidence, baseline and release authorization: [[ux/HOME-PC-PREVIEW-2026-10-07]]. Final merge and deployment evidence belongs to [PR #101](https://github.com/josetabares24-png/portugal-autentico-v2/pull/101).

## Technical base

- Next.js 16.3.5
- React 19.2.3
- TypeScript
- Public article pages are designed to be prerendered/SSG.
- Blog has dedicated article components, related-content logic and a smoke test.
- The repository still contains multiple non-blog product surfaces: itineraries, activities, calculator, ticket hub, planning form, packs and supporting APIs.

## Editorial base

Existing project documentation records **60 published blog entries with explicit editorial content**.

The immediate problem is therefore not "we need hundreds of articles". The first problem is extracting more value from pages that Google already tests.

## Fresh Search Console snapshot

Source: domain property `sc-domain:estabaenlisboa.com`, fetched 2026-09-23 with fresh data enabled.

### 28 days: 2026-08-26 → 2026-09-22

- Clicks: **47**
- Impressions: **6,111**
- CTR: **0.77%**
- Average position: **12.84**

### Previous 28 days: 2026-07-29 → 2026-08-25

- Clicks: **49**
- Impressions: **4,749**
- CTR: **1.03%**
- Average position: **11.62**

### Direction

- Impressions: **+28.7%**
- Clicks: **-4.1%**
- CTR: **-0.26 percentage points**
- Average position: about **1.22 positions worse**

Interpretation: visibility expanded, but clicks did not keep pace. This reinforces the need to improve query fit, snippets and page-1/page-2 opportunities rather than redesigning the site.

## Last 7 days vs previous 7

### 2026-09-16 → 2026-09-22
- 1,120 impressions
- 13 clicks
- 1.16% CTR
- 9.73 average position

### 2026-09-09 → 2026-09-15
- 1,085 impressions
- 10 clicks
- 0.92% CTR
- 11.52 average position

Short-term direction improved, but one week is not enough to declare recovery.

## Blog dominance

In page-dimension rows for the 28-day window:
- blog URLs: **5,301 visible page-impressions and 42 clicks**
- non-blog URLs: **962 visible page-impressions and 5 clicks**

That is roughly **85% of visible page-impressions** coming from blog URLs.

Search Console aggregation can differ by dimension, so use this as directional evidence, not as a property-total reconciliation.

## Highest-value current opportunities

| Page | Impressions | Clicks | CTR | Position | Initial class |
|---|---:|---:|---:|---:|---|
| /blog/como-moverse-por-lisboa | 788 | 4 | 0.51% | 9.79 | high impressions / low CTR |
| /blog/como-pagar-en-portugal | 708 | 6 | 0.85% | 6.99 | page 1 / low CTR |
| /blog/time-out-market-lisboa | 518 | 6 | 1.16% | 8.75 | page 1 / observe |
| /blog/estacion-oriente-lisboa | 494 | 4 | 0.81% | 9.74 | page 1 / low CTR |
| /blog/arquitectura-manuelina-lisboa | 242 | 1 | 0.41% | 8.99 | page 1 / low CTR |
| /blog/aeropuerto-lisboa-al-centro | 201 | 1 | 0.50% | 15.77 | page 2 push |
| /blog/tram-28-historia-guia | 183 | 0 | 0% | 17.53 | page 2 push |
| /blog/barrios-imprescindibles | 161 | 3 | 1.86% | 16.86 | page 2 push |
| /blog/mejores-apps-lisboa | 143 | 1 | 0.70% | 5.56 | protect / CTR opportunity |
| /blog/lisboa-vs-porto | 122 | 0 | 0% | 13.69 | page 2 push |

## Important caution

Several priority pages were changed around 2026-09-21 according to existing project documentation. Do not immediately rewrite them again. First verify the production SHA/date and collect a clean post-change observation window.

Production/deployment status is a variable to verify before assigning causality to Search Console movement.
