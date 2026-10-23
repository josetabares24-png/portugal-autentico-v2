import tours from "@/data/english-walking-tours.json";
import { withGuruwalkRef, buildAffiliateUrl } from "@/lib/affiliate";
import { ENGLISH_TOURS_CAMPAIGN } from "@/lib/english-bookings";
import EnglishBookingLink from "./EnglishBookingLink";

export default function EnglishTourSelection() {
  const ref = process.env.GURUWALK_AFFILIATE_REF?.trim();
  return (
    <div data-english-tour-selection>
      <p className="mb-5 text-sm leading-relaxed text-text-secondary">
        Start with the first walk if you want an introduction. Choose another
        for its area or subject, rather than booking several overlapping routes.
        Each operator lists English departures; dates and meeting instructions
        are confirmed on GuruWalk.
      </p>
      <div className="border-t border-border-soft">
        {tours.map((tour, index) => (
          <details
            key={tour.id}
            className="group border-b border-border-soft py-1"
          >
            <summary className="flex min-h-20 cursor-pointer list-none items-center gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-night [&::-webkit-details-marker]:hidden">
              <span
                className="w-6 shrink-0 text-xs text-terracotta"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-xl font-semibold not-italic leading-snug">
                  {tour.label}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-text-secondary">
                  {tour.duration} · English · {tour.provider}
                </span>
              </span>
              <span
                className="shrink-0 text-lg text-terracotta group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div className="pb-6 pl-10">
              <p className="text-sm leading-relaxed">{tour.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {tour.consideration}
              </p>
              <p className="my-4 text-xs leading-relaxed text-text-secondary">
                Listed as: {tour.name}
              </p>
              {ref ? (
                <EnglishBookingLink
                  href={buildAffiliateUrl(
                    withGuruwalkRef(tour.url, ref),
                    ENGLISH_TOURS_CAMPAIGN,
                    tour.key,
                  )}
                  partner="guruwalk"
                  campaign={ENGLISH_TOURS_CAMPAIGN}
                  placement="walking-tours-comparison"
                  content={tour.key}
                  variant="text"
                >
                  {`View ${tour.key === "first-visit" ? "the introductory walk" : tour.label.toLowerCase()} on GuruWalk`}
                </EnglishBookingLink>
              ) : (
                <p className="text-sm text-text-secondary">
                  Booking links are temporarily unavailable.
                </p>
              )}
            </div>
          </details>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-text-secondary">
        Affiliate links · Details checked 23 October 2026. Approximate durations
        are supplied by the operators. Check the route, language and
        participation conditions before reserving.
      </p>
    </div>
  );
}
