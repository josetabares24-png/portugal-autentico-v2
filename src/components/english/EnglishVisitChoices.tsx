import Image from "next/image";
import Link from "next/link";
import { getPhotoCredit } from "@/data/photo-credits";
import EnglishGuideLink from "./EnglishGuideLink";

const penaImage = "/images/commons/sintra-palacio-pena-wikimedia.webp";

export default function EnglishVisitChoices() {
  const credit = getPhotoCredit(penaImage);
  return (
    <section
      id="book-your-visit"
      aria-labelledby="visits-title"
      className="scroll-mt-24 border-y border-border-soft bg-white/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="mb-8 grid gap-4 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
              Tours & tickets
            </p>
            <h2
              id="visits-title"
              className="font-display text-3xl font-semibold not-italic leading-tight md:text-4xl"
            >
              Two visits to plan ahead.
            </h2>
          </div>
          <p className="max-w-lg self-end text-base leading-relaxed text-text-secondary">
            Choose a walk in English, or work out which Pena ticket includes the
            visit you want. Start with the details, then pick a date.
          </p>
        </div>
        <div className="grid gap-9 md:grid-cols-2 md:gap-10">
          <div>
            <EnglishGuideLink
              href="/en/lisbon-free-walking-tours#disponibilidad"
              placement="home-walking-tours"
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-night"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/lisboa-originales/rua-augusta-arco-lisboa.webp"
                  alt="Rua Augusta and the arch in the centre of Lisbon"
                  fill
                  sizes="(max-width:768px) 100vw, 540px"
                  className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"
                />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-terracotta">
                Explore on foot
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold not-italic">
                A walking tour in English
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
                Check departures for your date. Reserve without paying in
                advance and leave a tip for your guide after the walk.
              </p>
              <span className="mt-4 inline-flex min-h-11 items-center gap-3 border-b border-terracotta text-sm font-bold">
                Find a tour for your date <span aria-hidden="true">→</span>
              </span>
            </EnglishGuideLink>
          </div>
          <div>
            <EnglishGuideLink
              href="/en/pena-palace-tickets"
              placement="home-pena-tickets"
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-night"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={penaImage}
                  alt="The yellow and red towers of Pena Palace in Sintra"
                  fill
                  sizes="(max-width:768px) 100vw, 540px"
                  className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"
                />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-terracotta">
                A day in Sintra
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold not-italic">
                Choose your Pena Palace visit
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
                Palace rooms or park only? Compare admission, change conditions
                and the journey up from Sintra before choosing your ticket.
              </p>
              <span className="mt-4 inline-flex min-h-11 items-center gap-3 border-b border-terracotta text-sm font-bold">
                Compare Pena tickets <span aria-hidden="true">→</span>
              </span>
            </EnglishGuideLink>
            {credit ? (
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                Photo: {credit.author} /{" "}
                <Link className="underline" href={credit.sourceUrl}>
                  Wikimedia Commons
                </Link>
                ,{" "}
                <Link
                  className="underline"
                  href={credit.licenseUrl || credit.sourceUrl}
                >
                  {credit.license}
                </Link>
                . Cropped.
              </p>
            ) : null}
          </div>
        </div>
        <p className="mt-8 max-w-3xl border-t border-border-soft pt-4 text-xs leading-relaxed text-text-secondary">
          Reservations are completed with the named provider. Some booking links
          in the guides are affiliate links; check the final inclusions and
          conditions before reserving.
        </p>
      </div>
    </section>
  );
}
