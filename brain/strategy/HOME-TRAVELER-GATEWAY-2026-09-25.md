# Home Traveler Gateway — architecture direction

Date: **2026-09-25**  
Status: **ARCHITECTURE APPROVED / VISUAL IMPLEMENTATION NOT YET APPROVED**  
Owner: Mente Lisboa

## Why this exists

José clarified the desired public experience for Estaba en Lisboa:

- the Home should not behave like a blog index;
- the Home should not use collapsible/accordion navigation as the final model;
- the first useful layer should be a set of **large, direct, editorially designed buttons/portals**;
- each portal should open a **real guide page** that explains the topic in depth;
- the blog remains the organic acquisition/content engine, but it should not force the visitor to think in terms of "blog posts";
- lower on the Home, the existing editorial/photo language should return as an **abre-boca de historias/guías**, preserving the publication identity.

This direction supersedes the accordion prototype as the preferred Home model. The experimental accordion branch is reference-only and is not approved for production.

## Product model

The new public logic is:

**HOME → TRAVEL NEED → GUIDE PILLAR → SPECIFIC ANSWER → DECISION / ACTION**

Not:

**HOME → BLOG → ARTICLE LIST**

The Home becomes a traveler decision surface.

The editorial archive remains the discovery engine behind it.

## The seven traveler portals

1. **Rutas / Guías** — how to understand and organize Lisbon by time available.
2. **Movilidad** — transport, cards, airport, walking, shortcuts and practical movement.
3. **Qué visitar / Actividades** — sights, monuments, tickets, experiences and day-trip decisions.
4. **Dónde comer** — food by need, price, cuisine and dietary requirement.
5. **Dónde tomar algo** — atmosphere-first nightlife, cafés, rooftops, drinks and fado.
6. **Spots** — photography, viewpoints, light, framing and memorable visual locations.
7. **Cuídate de esto** — scams, tourist traps, payment/restaurant surprises, pickpocket contexts and planning mistakes.

These are user needs, not content categories.

## Home visual principle

The seven portals are **not cards in a startup dashboard** and are **not accordions**.

They should feel like large editorial navigation objects:

- clickable across the full surface;
- number / title / human subtitle;
- a short line of subtopics so the traveler knows what lives behind the portal;
- an explicit arrow/verb;
- strong typography as the primary visual device;
- thin rules, controlled whitespace and cream/night/terracotta palette;
- minimal or no iconography;
- optional restrained documentary-photo reveal or crop only if it improves orientation;
- desktop can use a two-column editorial composition;
- mobile becomes one clear vertical sequence;
- no information hidden behind hover;
- no generic rounded floating cards.

Example anatomy:

```
02
MOVILIDAD
Transportes, tarjetas, aeropuerto y atajos

Metro · Tranvías · Navegante · Aeropuerto · Caminar

Ver movilidad →
```

The button itself answers "is this for me?" before the click.

## Home vertical structure

### A. Hero — preserve the brand

Keep the current photographic identity and the human idea behind:

**La Lisboa que le enseño a quien viene a verme.**

Do not turn the hero into an SEO paragraph or product dashboard.

A short practical support line can clarify what the site solves.

### B. Traveler gateway — primary Home product

Immediately after the hero:

**¿Qué necesitas resolver en Lisboa?**

Seven direct portal-buttons.

This should fit substantially closer to the top than the current long sequence of Stories / Free Tours / Barrios / Libreta.

### C. Optional one-line orientation

A compact note can explain that each section is a guide written to help make decisions, not a list of links.

No long Home article is required.

### D. Editorial abre-boca

After the utility layer, recover the current publication feel:

**Historias de Lisboa** / equivalent human heading.

Use:
- one visually dominant story;
- two secondary stories;
- real photography;
- existing Playfair/Montserrat system;
- a quiet link to the editorial archive.

The Home therefore has two clear modes:

**Top: help me travel.**  
**Bottom: help me understand Lisbon.**

## Pillar-page rule

A portal never lands on a thin category listing.

Its destination must be a substantive page that can answer the broad need on its own.

A pillar page should normally contain:

1. a direct answer/position at the top;
2. a decision map ("what are you trying to do?");
3. useful context written editorially;
4. subtopic navigation;
5. links to the canonical deeper answers;
6. one or more practical decision aids when useful;
7. contextual monetization only after the informational need is answered;
8. maintenance/source treatment for volatile facts;
9. a clear next action.

The page should feel like a chapter of a Lisbon guide, not a WordPress category page.

## URL / SEO rule — critical

**Do not create seven new URLs merely because there are seven Home portals.**

A new public pillar URL is justified only when it has a distinct search/user job.

If an existing high-signal URL already owns the intent, promote/redesign that page as the pillar instead of creating a competing page.

Public UX and URL structure are separate decisions. A traveler can see "Movilidad" even if the canonical destination remains under `/blog/`.

Do not move a ranking URL out of `/blog/` for aesthetic reasons.

Any future URL migration requires:
- Search Console evidence;
- query-intent comparison;
- replacement map;
- permanent redirect;
- internal-link update;
- sitemap/canonical check;
- observation window.

## Proposed pillar map

| Home portal | Preferred pillar approach | Reason |
|---|---|---|
| Rutas / Guías | **Evolve `/itinerarios`** into a traveler-first decision page; preserve ranking itinerary URLs | Existing surface already has measurable demand and is the natural "choose by days" product |
| Movilidad | **Promote `/blog/como-moverse-por-lisboa`** as the pillar | Strongest relevant current SEO signal; do not create a duplicate generic transport URL |
| Qué visitar / Actividades | **Candidate new editorial pillar** after query-intent validation | `/actividades` is a selective commercial/catalog surface; `monumentos-de-lisboa` is narrower |
| Dónde comer | **Candidate new `/comer-en-lisboa` pillar** | Current pages split "gastronomy" and "cheap eating"; no current page cleanly owns the broad decision job |
| Dónde tomar algo | **Start from `/blog/vida-nocturna-lisboa`**, then validate whether a broader pillar has separate intent | Current page already has strong visibility near page 1; avoid contaminating an active SEO opportunity |
| Spots | **Promote `/blog/donde-fotografiar-lisboa`** | Existing page already matches the broad photographic intent |
| Cuídate de esto | **Start from `/blog/errores-turistas-lisboa`**; validate a separate safety/scams intent before creating another URL | Avoid duplicating a broad "what to avoid" page without evidence |

## Subcategory design

Subcategories help the user scan the portal and guide page, but they do **not** automatically become new URLs.

### Rutas / Guías
- 1 día
- 2 días
- 3 días
- 4–5 días
- 1 semana
- lluvia
- con niños
- en pareja

### Movilidad
- metro
- tranvías
- Navegante / billetes
- aeropuerto
- caminar
- apps
- trenes / Oriente when relevant
- shortcuts / accessibility only when verified

### Qué visitar / Actividades
- imprescindibles
- monumentos
- gratis
- miradores
- entradas
- experiencias
- con niños
- excursiones

### Dónde comer
- cocina portuguesa
- barato
- tascas
- mercados
- cafés / pastelerías
- brunch
- vegetariano / vegano
- sin gluten
- romantic / special occasion only if supported

### Dónde tomar algo
- tranquilo
- cerveza
- cocktails
- rooftops
- fado
- cafés
- bailar / salir tarde
- areas by atmosphere

### Spots
- viewpoints
- tram shots
- tiles
- sunset
- streets
- river / bridges
- panoramas
- exact viewpoint + time/light where reliable

### Cuídate de esto
- pickpocket contexts
- tourist-pricing/traps
- restaurant surprises such as couvert
- airport/transport decisions
- tickets/reservations
- payments
- common planning mistakes
- areas/safety language must remain evidence-led and non-alarmist

## SEO role of the blog

The editorial archive stays essential.

Current evidence:
- Blog URLs account for the majority of visible organic acquisition.
- Strong pages already rank or receive substantial impressions.

Therefore the architecture must not demote the articles in crawlability or internal relevance.

The new system is:

**Google → specific article**  
and/or  
**Home → pillar → specific article**

Both paths are valid.

The visitor does not need to see "Blog" as the dominant product label for Google to index and rank the articles.

## Internal-link model

Each pillar should have two-way structure:

**Pillar → support article** when the next question becomes specific.  
**Support article → pillar** when the reader needs broader orientation.

Do not manufacture exact-match links just to increase counts.

Use descriptive, human anchors.

Home portal clicks should be instrumented with a dedicated `select_content` content type, proposed:

`home_guide_portal`

Suggested content IDs:
- routes
- mobility
- visit
- food
- drinks
- spots
- safety

This creates a measurable answer to: **what do Home visitors actually need?**

## SEO cannibalization guardrails

Before publishing any new pillar:

1. identify the broad query/intention the page should own;
2. compare against current pages and 90d Search Console queries;
3. decide whether it is NEW, MERGE, PROMOTE EXISTING, or NOINDEX/PROTOTYPE;
4. write a distinct H1/title/job;
5. ensure deeper articles remain more specific;
6. add self-canonical;
7. only add to sitemap once substantive and indexable;
8. run SEO smoke;
9. record baseline.

Do not create:
- another generic transport guide;
- another generic "best neighborhoods" hub;
- a second broad nightlife page without proving distinct intent;
- thin dietary pages with no verified useful inventory.

## Pillar-page content standard

These pages are not "SEO category copy".

Target depth is determined by the question, not word count.

A strong pillar should:
- answer the main question within the first screen or two;
- organize decisions visually;
- include enough original synthesis to be useful without clicking onward;
- avoid duplicating full support articles;
- expose specific support links at the moment the reader needs them;
- contain structured H2/H3 hierarchy;
- use real Lisbon photography where it adds context;
- avoid generic filler;
- include update/source notes for volatile facts.

## Monetization by portal

**Rutas:** contextual attraction/excursion decisions only.  
**Movilidad:** mostly trust/utility; do not force affiliate links.  
**Qué visitar:** strongest direct ticket/experience monetization opportunity; exact-match GYG/Tiqets/GuruWalk only.  
**Comer:** editorial first; monetization only if a future exact partner/service fits.  
**Tomar algo:** editorial first; no forced affiliate layer.  
**Spots:** brand/share/save asset; monetization is secondary.  
**Cuídate:** trust page; no commercial pressure.

This preserves the rule:

**editorial need → trusted answer → exact decision → exact commercial option**

## What leaves the Home

Under this direction, these should not continue as independent large Home blocks:

- the current six-neighborhood photo grid;
- Libreta as a standalone Home section;
- Free Tours as a large isolated promo block;
- multiple duplicated itinerary CTAs;
- miscellaneous article links that do not fit either the traveler gateway or editorial abre-boca.

This does not delete their URLs or content.

Barrios remain important content; they live inside Rutas, Qué visitar, Dónde comer, Tomar algo and the editorial archive instead of consuming a full Home section.

Free Tours remains an important commercial surface and can appear contextually under Qué visitar / Rutas, while its primary-nav status is evaluated separately using behavioral data.

## Measurement plan

Before replacing the production Home:
- preserve current Home journey baseline;
- record exact deploy boundary;
- instrument all seven portal clicks;
- do not simultaneously rewrite protected SEO pages.

After launch, measure:
- click share by portal;
- total Home → internal continuation rate;
- sessions reaching a pillar;
- pillar → support article clicks;
- pillar → affiliate clicks where relevant;
- organic performance of new pillar URLs;
- no loss of protected article visibility;
- mobile engagement and obvious dead ends.

Do not attribute SEO improvement to the redesign without an equivalent observation window.

## Rollout plan

### Phase 0 — architecture / approval
- approve portal labels, order and visual direction;
- classify each pillar as PROMOTE EXISTING vs NEW;
- keep production unchanged.

### Phase 1 — Home Preview
- build direct portal-buttons, not accordions;
- preserve hero;
- preserve editorial abre-boca;
- keep SEO-critical metadata/canonicals stable unless separately justified;
- validate mobile first.

### Phase 2 — one pillar proof
Use **Dónde comer** as the design-system proof because it has a broad user job and existing supporting content.

Do not automatically index it until cannibalization/query-intent review is complete.

### Phase 3 — promote existing pillars
- Movilidad
- Spots
- Rutas

Primarily visual/product framing changes; do not materially rewrite protected article copy during active observation windows.

### Phase 4 — validate/new pillars
- Qué visitar
- Dónde comer
- Dónde tomar algo if distinct intent exists
- Cuídate if distinct safety/scams intent exists

### Phase 5 — Home production
Only after:
- visual approval from José;
- SEO smoke;
- no broken/internal duplicate destinations;
- baseline recorded;
- pillar destinations useful enough that no portal lands on a placeholder.

## Explicit non-goals

- not seven empty category pages;
- not a mega-menu disguised as the Home;
- not a redesign of the full site;
- not mass-moving URLs out of /blog;
- not deleting the blog;
- not writing thin pages for every dietary/atmosphere tag;
- not placing affiliate boxes in every pillar;
- not changing E-006/E-007 content while experiments are active.

## Decision summary

The preferred direction is now:

**Human hero → seven direct editorial portal-buttons → useful pillar pages → specific deep articles → contextual action → editorial stories at the bottom.**

This is the bridge between:
- a useful traveler product;
- an organic content engine;
- a recognizable editorial brand;
- and a measured commercial system.
