# English tours — match the Spanish design

23 October 2026. Baseline696454f; PR116 / Preview only.

**User preference:** José explicitly asks to match the aesthetic already built in Spanish. This replaces the earlier suggestion of a different compact accordion design; it does not authorize production publication.

**Observed:** Spanish production uses the shared `TourismBookingHero` (full-width photograph, uniform navy overlay, italic white heading, terracotta date jump), then the date finder and a three-column photo-card comparison. English used an article split header and five text accordions in a narrow article column. Existing screenshots and baseline code record the difference.

**Decision:** reuse the Spanish hero and exact card composition, colours, photograph ratio, grid breakpoints, spacing and buttons. Keep five verified English products, actual availability, attribution and date-reset behaviour. Five tour cards plus one directory access, as in Spanish; the directory is not a sixth selected tour. Keep the same URLs, English metadata, source facts and Spanish implementation. Do not copy unverified Spanish tip amounts or invent English availability.

## Changes

- English walking tours now uses the exact existing Spanish `TourismBookingHero`, including photograph crop, navy overlay, italic heading, internal date/comparison jumps and three short signals. The visible H1 is the shorter natural English “Free walking tours in Lisbon”; the original SEO title, description, canonical, hreflang and JSON-LD headline remain unchanged. The complete existing answer remains visible once in the hero, before any affiliate action.
- The finder follows the hero immediately. Five photo cards and the separate dark directory card occupy the same max-width, responsive1/2/3-column grid,16:10 image ratio, padding, borders, shadows and button positions as Spanish. The English narrow accordion comparison and its sidebar are removed. Practical text, essentials, authorship, reviewed date and sources remain below the comparison.
- First-visit/Alfama/Belém cards reuse the approved Spanish photographs. The two other English themes use distinct existing Lisbon originals, visually inspected, with factual English ALT. Photographs illustrate places; no supplier photographs, ratings, reviews, unverified participation or new assets are invented. Existing provider names/durations/limitations and all five IDs/destinations/ref/campaigns remain.
- English navigation adopts the Spanish header height, horizontal spacing, border and shadow; its existing English destinations and equivalent Spanish switch are retained. Other English guides retain their existing layout/content. The English booking link gains card/light variants; the Pena option and attribution remain unchanged.

## QA and boundaries

Local production build143 routes and TypeScript pass; lint has zero errors and the same pre-existing itinerary hook warning. English222 checks, Spanish preservation1659/72 surfaces, Spanish free tours66 and migration1490 pass. Availability7, booking options3, English products2 and analytics6 tests pass. Native internal jumps and desktop photo loading reviewed in browser; five descriptive ALTs and all source assets load. Initial hero capture preceded image decode; subsequent DOM confirms loaded images, so no blank background is accepted as a finished result.

Application76c37d69b519cfca737954fed46537cbe1f85821 is verified on [Preview](https://portugal-autentico-v2-64t3nxhtl-estabaenlisboa.vercel.app/en/lisbon-free-walking-tours), deployment dpl_5nxG33YpVowGHRzkTWeAcF75M44S, READY. PR116 remains a draft without auto-merge, six CI checks pass and no unresolved review threads. The final documentation/evidence commit does not change application code. Temporary access tokens are not committed.

Remote English222, Spanish preservation1659/72 and migration1386 all pass. Live27/10 returns three English walks/seven slots and three Spanish walks/nine slots; every actual booking-button URL retains the date and expected referral. Browser search also shows three English results, and changing to28/10 clears old cards. No affiliate clicks, checkout or reservations were made. Preview product events remain gated by the existing production-host and consent checks.

[Screenshots and compact evidence](qa/2026-10-23/english-alignment/). Browser comparison with Spanish production confirms identical observed card width352px, white background, border colour,8px radius and shadow; buttons have the same terracotta/white colours,48px minimum height and6px radius. The same Playfair60px italic hero heading style is observed. English1440×1000 and Spanish1280×720 use the same max-width grid; all six comparison images load, without observed horizontal overflow. The hero/first row/second row are captured. These are desktop observations, not exhaustive accessibility or device certification.

Mobile remains unverified because the browser viewport override did not apply in the previous verification; do not reuse those desktop captures as mobile evidence. The existing responsive breakpoints match Spanish. No Lighthouse, sales improvement or mobile certification is claimed. The legacy directory campaign/content/event labels are retained while its actual position is now the general-access card, so analytics comparisons must account for the presentation change.

No Spanish page is modified. Six English URLs, sitemap104, redirects, noindex, robots, authentication/environment and factual prices/hours are preserved. The previously documented Clerk configuration issue remains a before-production gate. No merge or production deployment is authorized.
