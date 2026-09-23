# /pack-completo retirement — 2026-09-23

## DIAGNÓSTICO

`/pack-completo` had become a second hub for content that already has clearer homes:

- 1/2/3-day routes → `/itinerarios`
- editorial guides → `/blog`
- planning flow → `/planifica-tu-viaje`

It therefore added a navigation choice without owning a distinct user need.

## EVIDENCIA

### Search Console

Exact URL `https://estabaenlisboa.com/pack-completo`:

- previous 90 days: **0 rows**
- previous 12 months: **0 rows**

No organic demand was found for the URL in the available Search Console data.

### GA4 — 90 days

Referrer breakdown returned:

- 8 sessions with no referrer;
- 1 session referred from `/itinerarios`;
- 1 self-referrer row also exists.

The self-referrer row means these rows should not be naively summed as unique sessions.

### Repository

Confirmed public route:
- `src/app/[locale]/pack-completo/page.tsx`
- `src/app/[locale]/pack-completo/layout.tsx`

Confirmed sitemap entry:
- `/pack-completo`, monthly, priority 0.8.

Confirmed internal entry point during review:
- `/itinerarios` → “Todas las guías gratuitas”.

The page itself linked to the same itinerary and blog destinations that already exist elsewhere.

## HECHO / HIPÓTESIS / DECISIÓN

**HECHO:** no Search Console visibility was found for 12 months.

**HECHO:** usage is very small compared with the editorial and itinerary hubs.

**HECHO:** the page duplicates existing destinations.

**HIPÓTESIS:** removing this choice should reduce architecture noise without meaningful loss of discovery.

**DECISIÓN:** RETIRE.

## IMPLEMENTACIÓN

- permanent redirect `/pack-completo` → `/blog`;
- locale variants redirect directly to `/blog`;
- remove `/pack-completo` from sitemap;
- change the `/itinerarios` link from `/pack-completo` to `/blog`;
- remove the old route files.

Next.js `permanent: true` uses a permanent redirect response; do not describe it as a literal HTTP 301 unless production verification confirms that exact status.

## DESTINO

`/blog` was chosen because the old label was “Todas las guías gratuitas” and most non-itinerary destinations on the retired page are editorial guides.

Baseline for `/blog`, 90 days:
- Search Console: 49 impressions / 2 clicks / CTR 4.08% / position 16.20.
- GA4: 55 sessions / 81.82% engagement rate / 27 s average engagement time.

## COPY CLEANUP ON DESTINATION

The blog index still used claims that conflict with Mente Lisboa:
- “Rutas de Local”
- “Guías y Consejos de Locales”
- “guías escritas por quien vive en Lisboa”
- “rutas auténticas”
- “vivir Lisboa como un local”
- “Tips de local”

Those claims were removed without changing layout.

## RIESGO

Low, based on known organic evidence.

Residual risk:
- unmeasured external links could exist;
- direct/bookmarked visitors will now land on the broader guide index.

The redirect preserves the old URL for those users.

## MEDICIÓN

This is a product consolidation, not an SEO growth experiment.

Monitor:
- any new Search Console impressions on the old URL;
- 404/redirect issues;
- `/blog` engagement;
- user complaints or unexpected route use.

Do not attribute blog growth to this redirect alone.
