# English pilot — editorial polish and booking paths

23 October 2026. José likes the direction and explicitly asks to polish the appearance and help sell tickets/tours. This authorizes refinement in PR116, not production publication or expansion beyond the six English pages.

## Diagnosis and hypothesis

The first Preview was functional but placed a large photograph before the useful answer. Home's long guide titles made scanning slower, booking choices were buried among general links, and Pena sent English readers to a Spanish supplier page. The hypothesis is that earlier answers, a clearer visual hierarchy and language-consistent booking destinations reduce friction. No conversion lift or revenue has been measured.

Baseline: commit 70c225c, existing Preview/screenshots from 22 October. Production remains PR115 / 4be9054. The latest available Search Console snapshot ends 17 October; live access and verified partner commissions remain unavailable. Historical affiliate clicks are not current sales. The pilot has no production D0.

## Changes and boundaries

- Home retains its H1, metadata, real Lisbon photography and five existing guides. Shorter listing labels, consistent upright headings, compact spacing and a Tours & tickets jump make its choices easier to scan. Two photographic features lead to the existing English walking-tour finder and Pena guide. No new catalogue or landing pages.
- Article headers show the existing direct answer before the photograph. Desktop uses two columns; mobile keeps the answer first. Essentials and booking-comparison jumps are internal navigation, not premature affiliate buttons.
- Pena has one contextual affiliate panel after the practical answer, essentials and official/reseller comparison. It names Tiqets, asks readers to review the option and terms, and retains the official ticket-office link. No invented price, urgency, discount, availability or flexible-cancellation claim.
- Navigation shows the active guide and labels Pena tickets explicitly. Both Spanish menu links now retain the equivalent article instead of returning everyone to the homepage.
- Existing itinerary links to walking tours and Pena are clearer and measured. No unrelated offers are added to Metro or airport advice.

Only English presentation, an English-specific booking helper and checks are changed. Spanish article bodies, URLs, metadata and booking links are unchanged. Sitemap stays98Spanish+6English; redirects, robots, noindex, canonicals and hreflang are preserved. No Clerk, DNS, environment-secret or authentication change. The previously documented Clerk Missing secretKey incident still needs external configuration and authorized end-to-end validation before publishing the root-layout pilot.

## Verified English Pena destination

The English selector of the supplier's Spanish product leads to [National Palace of Pena & Park: Entry Ticket](https://www.tiqets.com/en/sintra-attractions-c76496/tickets-for-national-palace-of-pena-park-entry-ticket-p1120392/). The Tiqets product page is in English and keeps product ID p1120392. It offers palace-and-park options including optional transfer/priority variants; visitors must check their selected option. A browser read also confirms HTML language en, the English product title and an available Select a date control, using the public untagged supplier URL. An opening page is not a completed checkout test or a verified sale.

`englishPenaBookingUrl` accepts only HTTPS, the exact Tiqets host, that product ID and an existing partner parameter. It replaces the pathname with this explicit verified mapping, retains all other original query parameters and applies the dedicated English campaign. It never automatically translates arbitrary URLs or mutates the Spanish catalogue. Two regression tests cover attribution/date/custom parameters and reject foreign hosts, other products, HTTP and unattributed links.

The Commons Pena photograph retains author, source, licence and crop attribution on Home as well as the article. No new image assets or AI photos.

## Measurement and business criteria

`booking_guide_click` measures only the two Home visit features and the existing Day1/Sintra itinerary links. It records source page, destination path, placement and English language. This is a count of clicks on those placements, not all guide visits, unique visitors or reservations. Navigation, the five-guide list and related links are outside this event's denominator. New custom parameters may need GA4 custom definitions for reports; those external settings were not changed.

Existing `affiliate_click` measures the subsequent outbound step. English Pena uses `web_en_pena-palace-tickets`, with a distinct `pena-after-comparison` placement. GuruWalk's directory event and URL now share `free-tours-lisbon-en`; dynamic date-finder campaigns are unchanged. Both events remain consent-dependent and production-host-only. No QA affiliate clicks or reservations are made. Actual bookings, cancellations and commissions must be reconciled in the provider dashboard; they remain unknown.

## Validation

Application commits: b5d5dd4 (verified English product helper) and 8d3ff35 (presentation/booking paths). [PR116](https://github.com/josetabares24-png/portugal-autentico-v2/pull/116) remains a draft, without auto-merge. [Tested Preview](https://portugal-autentico-v2-bhwsnuax9-estabaenlisboa.vercel.app/en), deployment dpl_kN6LRkL23auJ9LBWwNZedxrXvH9G, is READY for application SHA 8d3ff352c31fdc253a726c3b7b60ae7cb0d68691. All six CI checks passed. Temporary access is managed by Vercel; no share tokens are committed.

| Check | Result |
|---|---|
| Build / TypeScript / lint | 143 routes; no errors, one pre-existing hook warning |
| English pilot, language pairs, anchors and attribution | 208/208 local and Preview |
| Spanish editorial preservation | 1,659/1,659 across 72 surfaces, local and Preview |
| Migration | 1,490 local / 1,386 Preview; zero failures;104 URLs and 16 redirects |
| Technical quality | 1,190/1,190 local |
| Spanish Free tours | 66/66 local |
| Unit checks | English booking 2, English availability 4, booking options 3, analytics 6 pass |
| Responsive DOM | Six pages × 320/390/768/1440 in local and Preview; 24 views per environment, no overflow or broken images observed |
| English factual data | Five titles/descriptions/answers/essentials/images/sources and section IDs preserved; one supplier-language paragraph intentionally updated |

GuruWalk Preview for 27/10 returns three English tours/nine slots and three Spanish tours/eight slots. The actual booking-button URLs retain the selected date and expected referral. An initial overly broad check incorrectly required the generic discovery-product URL to contain a date; inspection showed that URL legitimately has only a referral, while every actual slot/button URL retains27/10. Validation now tests `freeTourBookingOptions`, the same function used by the UI; no provider URL is rewritten to make a check pass.

The default restricted build stalled during compilation and was stopped; the ordinary approved build then passed. Browser review initially hit the automatic-review usage limit; after the stated reset time, the same authorized browser entry point succeeded. No approval bypass or alternate browser automation was used. Native keyboard/menu checks, guide navigation and primary jumps were reviewed; smooth anchor scrolling was allowed to finish before captures. No Lighthouse uplift, accessibility certification or sales result is claimed.

Evidence and screenshots: [QA directory](qa/2026-10-23/english-polish/). Next: José reviews the polished Preview; resolve the pre-existing private-authentication configuration and validate it before any production request. Keep the six-page limit and measure after an approved release; do not infer success from the work already invested.
