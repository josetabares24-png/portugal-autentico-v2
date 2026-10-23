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

Local build143 routes and TypeScript pass; lint has zero errors and the same pre-existing itinerary hook warning. English221 checks, Spanish free tours66 and migration1490 pass. Seven availability/selection regressions, three booking-option tests, two English-product tests and six analytics tests pass. Remote availability and responsive review remain pending at this application commit. The first local QA run used an explicit loopback hostname and lacked the public referral: the routing loop and inert links were environment setup, resolved by the standard server command and the already-verified public referral. No routing or secret configuration was changed.

## Next useful improvements

1. Reconcile actual confirmed reservations and commissions in the partner dashboard; outbound clicks alone cannot establish revenue. Access remains unavailable here.
2. After approved publication, compare English guide access → date search → affiliate click by placement; measure a complete period before expanding products or pages.
3. Recheck the five operating languages, routes and durations when the supplier changes a listing. Do not silently substitute an operator or invent availability.
4. Resolve the documented pre-existing Clerk configuration issue and validate private flows before releasing the English root-layout changes. This task does not change authentication.
