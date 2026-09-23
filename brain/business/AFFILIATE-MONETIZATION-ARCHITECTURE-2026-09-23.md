# Affiliate monetization architecture — 2026-09-23

## Objective

Monetize travel decisions without turning Estaba en Lisboa into a ticket marketplace.

The commercial system must follow user intent:

**editorial need → trusted answer → exact decision → exact commercial option**

Not:

**article → random widget → partner landing page**

## Active partners

### GuruWalk

Role:
- free tours / walking-tour intent.

Primary surface:
- `/free-tours-lisboa`

Current evidence:
- 23 recorded `affiliate_click` events in the 90-day baseline.

Rule:
GuruWalk is the default partner for free-tour intent unless future evidence proves another product serves that need better.

### GetYourGuide

Role:
- experiences;
- excursions;
- attraction tickets where an exact product already exists;
- direct CTAs from editorial and activity pages.

Current product examples in code:
- Castelo de São Jorge
- Oceanário (article placement)
- crucero por el Tajo
- fado
- tour gastronómico
- Sintra completa
- Palacio da Pena (article placement)

Partner ID:
`J2Z24GU`

Rule:
Use when the product match is exact and the placement naturally follows the user's decision.

### Tiqets

Role:
- attraction/ticket intent;
- structured entry products;
- passes where Tiqets has a strong exact product match.

Current product examples in code:
- Oceanário (activity placement)
- Lisboa Card
- Palacio da Pena + Parque

Partner:
`estaba_en_lisboa-189233`

Rule:
Use for direct ticket purchase when the Tiqets product matches the attraction/decision exactly.

## Important principle

A provider is **not** globally assigned to a destination.

Example:
Oceanário currently has:
- GetYourGuide for the article placement;
- Tiqets for the activity placement.

That is intentional.

The provider can differ by placement because:
- the product/campaign can differ;
- one partner may convert better in one context;
- attribution can be measured separately.

Never force one partner site-wide merely for simplicity.

## Commercial surfaces

### 1. Free Tours

Status:
**PRIMARY COMMERCIAL SURFACE**

Flow:
content / Home → `/free-tours-lisboa` → GuruWalk.

Do not place GuruWalk links indiscriminately inside unrelated articles.

Use when:
- first-visit orientation;
- Alfama / Belém / historic-centre walking intent;
- user explicitly wants a guided walking experience.

### 2. Exact attraction tickets

Status:
**CONTEXTUAL COMMERCIAL LAYER**

Flow:
article or activity page → exact ticket CTA → GetYourGuide or Tiqets.

Examples:
- Oceanário article → GYG
- Oceanário activity → Tiqets
- Castelo de São Jorge → GYG
- Palacio da Pena → GYG or Tiqets depending placement
- Lisboa Card → Tiqets

Rule:
The CTA must sell the exact thing the page is discussing.

Never use a similar-but-different product just because it has an affiliate link.

### 3. Experiences

Status:
**CONTEXTUAL COMMERCIAL LAYER**

Examples:
- fado
- Tajo cruise
- gastronomic tour

Default partner today:
GetYourGuide.

Rule:
Only appear after the page has answered the informational question.

Do not make the article feel written to sell the experience.

### 4. Excursions

Status:
**SELECTIVE**

Example:
- Sintra completa → GetYourGuide.

Rule:
Offer the commercial option when the user is deciding between:
- doing it independently;
- paying to remove transport/planning friction.

Editorial content should explain both paths.

### 5. /comprar-entradas

Status:
**KEEP / DEMOTED TRANSACTIONAL HUB**

Evidence:
- 24 sessions / 90d;
- 4 recorded affiliate_click events;
- almost no organic acquisition.

Role:
A destination for users already ready to buy, not an SEO pillar or main-navigation product.

Do not invest heavily in ranking this hub unless demand later appears.

### 6. Activities pages

Status:
**SELECTIVE COMMERCIAL LANDING PAGES**

Rule:
Only show a direct booking CTA when `activitySlug` maps to an exact product.

If no exact product exists:
- no fake CTA;
- no nearest-match product;
- internal editorial continuation instead.

Oceanário is currently the strongest activity-level commercial exception:
- 5 sessions;
- 3 recorded affiliate_click events in the prior 90-day audit.

### 7. Itineraries

Status:
**SECONDARY COMMERCIAL CONTEXT**

Rule:
Affiliate CTAs can appear at decision points inside an itinerary:
- exact attraction entry;
- exact excursion;
- exact experience.

Do not make itineraries shopping lists.

## Measurement model

For direct links we control, measure:

- page_path
- link_url
- link_domain
- outbound
- campaign / placement via the affiliate URL where available
- affiliate_click

Partner dashboards remain required for actual:
- bookings;
- cancellations;
- commission/revenue.

GA4 click events are a funnel signal, not revenue.

## Decision hierarchy for partner selection

For any monetizable decision:

1. Is there a real commercial intent?
2. Is there an exact product match?
3. Which provider offers that exact product?
4. Which placement/campaign can be measured?
5. Which provider converts better in real data?
6. Which provider gives the user the cleaner decision?

If conversion data is absent:
- keep the currently verified exact match;
- do not rotate partners randomly.

## What we will NOT do

- blanket widgets in every article;
- "Book now" above useful information;
- multiple providers fighting on the same card;
- fake urgency;
- fake discounts;
- "best seller" without provider evidence;
- affiliate links to products that only partially match the page;
- new partner accounts before current ones are measured.

## Near-term monetization path

### Phase 1 — now

Prove:
- GuruWalk click flow;
- GYG direct-link click destinations;
- Tiqets direct-link click destinations;
- partner-dashboard revenue where available.

### Phase 2

Once enough post-instrumentation data exists:
- compare click-through by placement;
- compare provider conversion where dashboard data exists;
- give more prominence only to proven combinations.

### Phase 3

Build revenue clusters around pages that already attract high-intent search:
- Sintra / Pena
- Oceanário
- Castelo
- Lisboa Card
- Fado
- Free tours
- other proven attraction queries.

### Phase 4

Only after enough traffic:
- direct commercial agreements;
- owned paid guide/product;
- selective sponsorship;
- higher-margin products.

## North-star commercial metric

Do not optimize for affiliate clicks alone.

Long-term metric:

**organic session → useful decision → commercial click → confirmed booking/revenue**

The next commercial maturity step is to reconcile GA4 click data with partner dashboards.
