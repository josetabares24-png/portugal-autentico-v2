# Site organization — editorial focus

Updated: **2026-09-23**

## Problem

The previous navigation presented Estaba en Lisboa as several products at the same time:

- Blog
- Itinerarios
- Free tours
- Actividades
- Entradas
- Planifica tu viaje
- Contacto

That structure made the site's purpose unclear and gave equal visual weight to surfaces with very different evidence.

## Evidence

### Search Console — 90 days ending 2026-09-22

| Surface | Clicks | Impressions |
|---|---:|---:|
| Blog articles | 85 | 9,880 |
| Itinerarios | 14 | 952 |
| Actividades | 3 | 682 |
| Comprar entradas | 0 | 7 |
| Free tours | 0 | 86 |
| Calculadora | 0 | 5 |
| Planifica tu viaje | 0 | 13 |
| Pack completo | 0 | 0 |

### GA4 — same approximate 90-day window

Recorded affiliate_click events:

- /free-tours-lisboa: **23**
- /comprar-entradas: **4**
- /actividades/oceanario-lisboa: **3**
- /actividades/free-walking-tour-centro: **1**
- /itinerarios/lisboa-3-dias-premium: **1**
- /calculadora-presupuesto-lisboa: **1**

Interpretation:

- the blog is clearly the acquisition engine;
- the commercial portal structure is not producing enough evidence to justify dominating navigation;
- free tours is the clearest current commercial exception;
- some legacy URLs still have organic demand and should not be deleted just to make the architecture look cleaner.

## New public hierarchy

### Primary header

1. **Logo → Inicio**
2. **Guías → /blog**
3. **Free tours → /free-tours-lisboa**

Nothing else gets primary-navigation weight for now.

### Footer

- Guías
- Free tours
- Contacto
- Privacidad
- Instagram

## What remains live but is demoted

These routes remain technically available while they are evaluated:

- /itinerarios/*
- /actividades/*
- /comprar-entradas
- /calculadora-presupuesto-lisboa
- /planifica-tu-viaje
- /pack-completo

They should not be promoted globally.

## Future information architecture

The blog becomes the content database. Over time, the public experience should be organized by reader need rather than by product type:

- Qué ver
- Cómo moverse
- Dónde comer
- Barrios
- Planificar
- Cultura e historia
- Excursiones

These should be editorial hubs/categories backed by articles, not separate mini-products unless data proves a product deserves to exist.

## Commercial model

Commerce should mostly be contextual:

**Google → article → useful recommendation → affiliate action**

A standalone commercial page remains justified only when it converts or has meaningful search demand.

## Rule for legacy routes

Do not confuse **visibility in navigation** with **existence of URL**.

A route can disappear from navigation immediately while its URL remains live for SEO/history. Redirect/delete decisions are made separately using 90-day evidence and a replacement map.
