# Next actions

Updated: **2026-09-23**

This is the only priority queue agents should use unless new live data invalidates it.

## P0 — make the product understandable

### 1. Simplify global navigation
Implement:
- Logo → Inicio
- Guías → /blog
- Free tours → /free-tours-lisboa

Footer:
- Guías
- Free tours
- Contacto
- Privacidad
- Instagram

Status: **implemented in branch `growth/focus-editorial-nav`**.

### 2. Stop globally promoting weak products
Do not place these in header/footer CTAs while they are under evaluation:
- Itinerarios
- Actividades
- Comprar entradas
- Calculadora
- Planifica tu viaje
- Pack completo

Their URLs remain live.

## P0 — protect current SEO work

Do not materially rewrite these recent priority pages until a clean post-deployment window exists:
- como-moverse-por-lisboa
- como-pagar-en-portugal
- time-out-market-lisboa
- estacion-oriente-lisboa
- arquitectura-manuelina-lisboa

Continue measuring rather than repeatedly changing them.

## P1 — reorganize the site around reader intent

Design editorial hubs based on existing articles:

1. Qué ver
2. Cómo moverse
3. Dónde comer
4. Barrios
5. Planificar
6. Cultura e historia
7. Excursiones

Do not create seven empty pages. First map existing articles to these needs and decide which hubs deserve indexable URLs.

## P1 — legacy route inventory

Use 90-day GSC + GA4 to classify each non-blog route:

- KEEP
- EDITORIALIZE
- 301
- RETIRE

Known evidence already captured:
- blog: 9,880 impressions / 85 clicks
- itinerarios: 952 / 14
- actividades: 682 / 3
- comprar-entradas: 7 / 0
- free-tours: 86 / 0 organic, but 23 affiliate_click events in GA4
- calculadora: 5 / 0
- planifica: 13 / 0
- pack: 0 / 0

Prioritize the weakest surfaces first, but preserve individual URLs with meaningful demand.

## P1 — choose the next SEO experiment

After recent changes have enough finalized data, choose a small evidence-based batch from:
- aeropuerto-lisboa-al-centro
- tram-28-historia-guia
- lisboa-vs-porto
- chiado-bairro-alto-guia
- vida-nocturna-lisboa
- mejores-mercados-lisboa

Use [[03-SEO-DECISION-ENGINE]].

## P2 — move monetization into useful content

The preferred commercial loop is:

**organic article → contextual recommendation → affiliate click**

Add/measure affiliate opportunities inside relevant articles before building more standalone commercial pages.

Track:
- organic article sessions
- affiliate_click
- page/path
- provider
- placement
- clicks per 100 organic article sessions

## Explicitly NOT doing now

- site-wide aesthetic redesign;
- new calculators/tools;
- new private-user features;
- dozens of new articles;
- mass URL moves;
- mass deletion/noindex;
- rebuilding the commercial portal;
- waiting months before simplifying navigation;
- repeated SEO edits without observation windows.

## Immediate success condition

A first-time visitor should understand in seconds:

> Estaba en Lisboa is a useful editorial guide to Lisbon. Read the guides; book a free tour if it helps.

Everything else is secondary until data earns it a place.
