# English walking tours — five useful choices

23 October 2026. Scope: PR116 / English Preview only. Baseline41f8a24; production4be9054.

## Diagnosis before changes

**Fact:** the English article described five generic categories without linking them to individual tours. The date finder used the first three discovery results, so it could miss another suitable route. Its result heading read the editable form date while the booking URLs still belonged to the previous search. Supplier availability is not a reservation or a commission.

**Hypothesis:** five distinct, explained choices and correctly dated booking results reduce avoidable booking friction. There is no measured conversion uplift; current reservations/commissions remain unknown and the English pilot has no production D0.

**Decision:** keep five English walks, with a general introduction, Alfama, Belém, Black history and viewpoints. The English selection reflects verified English-language inventory rather than inventing an equivalent for the Spanish mysteries/night categories. Preserve the Spanish selection and all six pilot URLs. No production merge.

The five public supplier pages are recorded in `src/data/english-walking-tours.json`. Public page reads confirm English operation, operator and approximate duration. No static ratings, reviews, exact departure times, urgency or availability claims are copied. Public source URLs are verification links; affiliate referral is added only from the configured public referral at render time. Supplier website language can follow the visitor’s existing preference; operating language must still be confirmed on the booking.

## Implementation and validation

The comparison is one compact module with five native accordions: operator, approximate duration, reason to choose, practical limitation and a contextual supplier link. No extra pages, fabricated rankings or reviews. Keep the existing date finder plus one final directory fallback. No repeated promotional module between article sections.

English availability checks the five explicit product IDs concurrently, then returns at most three walks with confirmed English slots. It does not depend on the first three general discovery results. Five availability calls per uncached date replace discovery plus three availability calls; the15-minute server cache remains. Partial failures preserve confirmed alternatives; total supplier failure returns an error rather than reporting sold-out. The Spanish discovery/fallback path is preserved. Unknown English ratings are omitted, not filled with zero or cached reviews. Existing real Lisbon photographs illustrate the routes, not attendance at an operator’s tour.

Editing the date removes old results; the input is disabled during a search and the heading uses the returned search date. The English empty/error state links directly to the existing directory fallback. Search events now carry language, subject to the existing production-host and consent gates; no QA affiliate clicks or reservations.

Local build143 routes and TypeScript pass; lint has zero errors and the same pre-existing itinerary hook warning. English221 checks, Spanish free tours66, Spanish editorial preservation1659/72 surfaces and migration1490 pass. Seven availability/selection regressions, three booking-option tests, two English-product tests and six analytics tests pass. The first local QA run used an explicit loopback hostname and lacked the public referral: the routing loop and inert links were environment setup, resolved by the standard server command and the already-verified public referral. No routing or secret configuration was changed.

Application commit37be0601020e63cfcaf4b4eae527b25436a04de9 is on [PR116](https://github.com/josetabares24-png/portugal-autentico-v2/pull/116), still a draft without auto-merge. [Tested Preview](https://portugal-autentico-v2-bogpw9m6w-estabaenlisboa.vercel.app/en/lisbon-free-walking-tours), deployment dpl_D6P4xeTszfTUJJhdfSsLHunjFa71, is READY. All six CI checks pass; no unresolved review threads. The watcher reports a draft gate, not a failing test or an authorization to publish. Production/main remains4be905413d20432ad506fa81ebaad63131e1f740. Temporary access links are not committed.

Remote QA: English221, Spanish preservation1659/72, free tours66, migration1386 all pass. The sitemap remains104 URLs (98Spanish+6English); existing16 redirects, robots, noindex, canonicals, hreflang and schema are unchanged by this task. The English description and reviewed date reflect the actual five-route selection; title, answer, URL and other guides’ factual data are preserved. No new paid offers or Spanish editorial changes.

Live27 October check: English three walks30696/7501/35074, seven slots; Spanish three walks/nine slots. All actual booking buttons retain27 October and the expected referral. No affiliate click or reservation was made. Browser proof shows three results for27/10; changing to28/10 removes every old card before another search. [Evidence and screenshots](qa/2026-10-23/english-tours/).

Visual review confirms the comparison, native keyboard accordion, date flow and no horizontal overflow at observed desktop widths1440 and1280. **Mobile remains unverified:** the documented browser override accepted390×844 but the observed tabs stayed1440×1000 and1280×720, including a fresh tab. Do not label these captures mobile or rely on the earlier responsive-count claims as evidence for this revision. Override reset and temporary tabs closed. No Lighthouse or conversion uplift is claimed. An automatic-review usage limit briefly prevented the GitHub CI read; the same read succeeded after the stated reset, with no bypass.

## Next useful improvements

1. Reconcile actual confirmed reservations and commissions in the partner dashboard; outbound clicks alone cannot establish revenue. Access remains unavailable here.
2. After approved publication, compare English guide access → date search → affiliate click by placement; measure a complete period before expanding products or pages.
3. Recheck the five operating languages, routes and durations when the supplier changes a listing. Do not silently substitute an operator or invent availability.
4. Resolve the documented pre-existing Clerk configuration issue and validate private flows before releasing the English root-layout changes. This task does not change authentication.
