import Image from "next/image";
import Icon from "@/components/Icon";
import tours from "@/data/english-walking-tours.json";
import { withGuruwalkRef, buildAffiliateUrl } from "@/lib/affiliate";
import { ENGLISH_TOURS_CAMPAIGN } from "@/lib/english-bookings";
import EnglishBookingLink from "./EnglishBookingLink";

export default function EnglishTourSelection({
  directoryUrl,
}: {
  directoryUrl: string | null;
}) {
  const ref = process.env.GURUWALK_AFFILIATE_REF?.trim();
  return (
    <div data-english-tour-selection>
      <p className="mb-7 max-w-2xl leading-relaxed text-text-secondary">
        Start with the first walk if you want an introduction. Choose another
        for its area or subject, rather than booking several overlapping routes.
        Each operator lists English departures; confirm your date on GuruWalk.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <article
            key={tour.id}
            data-english-tour-id={tour.id}
            className="group relative flex scroll-mt-24 flex-col overflow-hidden rounded-lg border border-border-soft bg-white shadow-card transition-transform duration-300 motion-safe:hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/60">
              <Image
                src={tour.image}
                alt={tour.imageAlt}
                fill
                className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-center gap-2">
                <Icon
                  name={tour.icon}
                  size={15}
                  className="shrink-0 text-terracotta"
                />
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
                  {tour.eyebrow}
                </span>
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold not-italic leading-snug text-text-main">
                {tour.label}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                {tour.description}
              </p>
              <p className="mb-3 flex items-center gap-2 text-xs font-medium text-text-secondary">
                <Icon
                  name="schedule"
                  size={14}
                  className="shrink-0 text-gold"
                />
                {tour.duration} · English
              </p>
              <p className="mb-3 text-xs leading-relaxed text-text-secondary">
                Guide: {tour.provider}
              </p>
              <p className="mb-4 flex items-start gap-2 border-l-2 border-gold bg-background-light/60 px-3 py-2 text-xs leading-relaxed text-text-secondary">
                <Icon
                  name="info"
                  size={14}
                  className="mt-0.5 shrink-0 text-gold"
                />
                <span>{tour.consideration}</span>
              </p>
              <div className="mt-auto border-t border-border-soft pt-4">
                <EnglishBookingLink
                  href={
                    ref
                      ? buildAffiliateUrl(
                          withGuruwalkRef(tour.url, ref),
                          ENGLISH_TOURS_CAMPAIGN,
                          tour.key,
                        )
                      : null
                  }
                  partner="guruwalk"
                  campaign={ENGLISH_TOURS_CAMPAIGN}
                  placement="walking-tours-comparison"
                  content={tour.key}
                  variant="card"
                >
                  Check English dates
                  <span className="sr-only"> for {tour.label}</span>
                </EnglishBookingLink>
              </div>
            </div>
          </article>
        ))}
        <article
          id="english-tour-directory"
          className="relative isolate flex min-h-[340px] scroll-mt-24 flex-col justify-end overflow-hidden rounded-lg bg-night p-6 text-white shadow-card"
        >
          <Image
            src="/images/lisboa-originales/rua-baixa-lisboa-entardecer.webp"
            alt="A street in the Baixa at dusk"
            fill
            className="-z-20 object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 -z-10 bg-night/75"
            aria-hidden="true"
          />
          <p className="mb-2 font-body text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
            More routes
          </p>
          <h3 className="font-display text-2xl font-semibold leading-tight text-white">
            Looking for another walk?
          </h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-white/75">
            Browse the full directory if these five do not suit your plans.
            Check the English departure, meeting point and walking difficulty.
          </p>
          <div className="mt-5 self-start">
            <EnglishBookingLink
              href={directoryUrl}
              partner="guruwalk"
              campaign={ENGLISH_TOURS_CAMPAIGN}
              placement="walking-tours-final"
              content="final-cta"
              variant="light"
            >
              Browse Lisbon tours on GuruWalk
            </EnglishBookingLink>
          </div>
        </article>
      </div>
      <p className="mt-5 max-w-3xl font-body text-xs leading-relaxed text-text-secondary">
        Affiliate links · Details checked 23 October 2026. Approximate durations
        are supplied by the operators. Photographs illustrate Lisbon and its
        neighbourhoods. Check the route, language and participation conditions
        before reserving.
      </p>
    </div>
  );
}
