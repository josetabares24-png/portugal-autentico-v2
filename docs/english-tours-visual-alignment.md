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

Remote Preview and final screenshots pending at this application commit. Mobile remains unverified because the browser viewport override did not apply in the previous verification; do not reuse those desktop captures as mobile evidence. The existing responsive breakpoints match Spanish. No Lighthouse, sales improvement or mobile certification is claimed.

No Spanish page is modified. Six English URLs, sitemap104, redirects, noindex, robots, authentication/environment and factual prices/hours are preserved. The previously documented Clerk configuration issue remains a before-production gate. No merge or production deployment is authorized.
