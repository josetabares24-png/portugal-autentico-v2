# Next actions

Updated: **2026-09-23**

This is the only priority queue agents should use unless new live data invalidates it.

## P0 — establish a trustworthy post-change baseline

### 1. Verify production deployment
Record:
- production SHA;
- deployment date/time;
- whether the 2026-09-21 SEO/content changes are actually live.

Do not attribute GSC movement until this is known.

### 2. Freeze repeated edits to the observation queue
Do not materially rewrite:
- como-moverse-por-lisboa
- como-pagar-en-portugal
- time-out-market-lisboa
- estacion-oriente-lisboa
- arquitectura-manuelina-lisboa

until the minimum observation window in [[05-EXPERIMENTS]] is available.

### 3. Capture the next finalized GSC snapshot
Compare:
- 28d vs previous 28d;
- 7d vs previous 7d;
- page-level winners/losers;
- query coverage;
- positions 4–10;
- positions 11–20.

## P1 — simplify safely toward blog-first

Create an inventory of every public non-blog route and add:

- 90d impressions
- 90d clicks
- avg position
- internal links
- indexed/not indexed
- closest editorial destination
- decision: keep / editorialize / 301 / retire

Start with:
- /itinerarios/*
- /actividades/*
- /comprar-entradas
- /calculadora-presupuesto-lisboa
- /planifica-tu-viaje
- /pack-completo
- /free-tours-lisboa

Do **not** execute mass redirects until the inventory is complete.

## P1 — choose the next SEO experiment from evidence

After the observation window, choose **one small batch** from:
- aeropuerto-lisboa-al-centro
- tram-28-historia-guia
- lisboa-vs-porto
- chiado-bairro-alto-guia
- vida-nocturna-lisboa
- mejores-mercados-lisboa

Use [[03-SEO-DECISION-ENGINE]].

## P2 — measure blog monetization

Once GA4 data is trustworthy, establish:
- organic blog sessions;
- affiliate_click from blog;
- affiliate clicks / 100 organic blog sessions;
- pages producing useful commercial clicks.

Then improve contextual monetization only where it helps the reader.

## Explicitly NOT doing now

- site-wide visual redesign;
- new calculators/tools;
- new private-user features;
- dozens of new articles;
- mass URL moves;
- mass deletion/noindex;
- repeated title changes every few days;
- SEO work without a pre-change baseline.

## Immediate success condition

The next session should be able to answer, from evidence:

> "Which 1–3 pages give us the best chance to gain additional organic clicks now, and why?"

If the brain cannot answer that, gather data before changing code.
