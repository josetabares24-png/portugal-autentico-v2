import Link from "next/link";
import Image from "next/image";
import articles from "@/data/english-pilot-articles.json";
import { getPhotoCredit } from "@/data/photo-credits";
import { englishPilotRoutes } from "@/lib/language-alternates";
import { findProductById } from "@/data/bookings";
import { withGuruwalkRef, buildAffiliateUrl } from "@/lib/affiliate";
import {
  englishPenaBookingUrl,
  ENGLISH_PENA_CAMPAIGN,
  ENGLISH_TOURS_CAMPAIGN,
} from "@/lib/english-bookings";
import FreeTourLiveFinder from "@/components/free-tours/FreeTourLiveFinder";
import EnglishBookingLink from "./EnglishBookingLink";
import EnglishGuideLink from "./EnglishGuideLink";
import EnglishTourSelection from "./EnglishTourSelection";
import EnglishContents from "./EnglishContents";
import { TourismBookingHero } from "@/components/booking/TourismBookingHero";

type Article = (typeof articles)[number];
const SITE = "https://estabaenlisboa.com";
function EnglishEssentials({ article }: { article: Article }) {
  return (
    <>
      <section
        id="essentials"
        aria-labelledby="essentials-title"
        className="mb-8 scroll-mt-24 border-y border-border-soft py-5"
      >
        <h2
          id="essentials-title"
          className="mb-4 font-display text-2xl font-semibold not-italic"
        >
          The essentials
        </h2>
        <dl>
          {article.essentials.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] gap-4 border-t border-border-soft py-3 text-sm leading-relaxed first:border-0"
            >
              <dt className="font-semibold">{label}</dt>
              <dd className="min-w-0 break-words">{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}

export default function EnglishArticle({ article }: { article: Article }) {
  const url = `${SITE}/en/${article.slug}`;
  const equivalent = englishPilotRoutes.find(
    (r) => r.path === `/en/${article.slug}`,
  )!;
  const credit = getPhotoCredit(article.image);
  const ticket = findProductById("pena-tiqets")?.links.article?.url;
  const ticketUrl = englishPenaBookingUrl(ticket);
  const tourRef = process.env.GURUWALK_AFFILIATE_REF?.trim();
  const toursUrl = tourRef
    ? buildAffiliateUrl(
        withGuruwalkRef("https://www.guruwalk.com/lisbon", tourRef),
        ENGLISH_TOURS_CAMPAIGN,
        "final-cta",
      )
    : null;
  const isTours = article.slug === "lisbon-free-walking-tours";
  const reviewedDate = isTours ? "2026-10-23" : "2026-10-22";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: SITE + article.image,
    url,
    mainEntityOfPage: url,
    inLanguage: "en",
    dateModified: reviewedDate,
    author: {
      "@type": "Person",
      "@id": SITE + "/sobre-nosotros#jose-tabares",
      name: "José Tabares",
      url: SITE + "/sobre-nosotros",
    },
    publisher: {
      "@type": "Organization",
      "@id": SITE + "/#organization",
      name: "Estaba en Lisboa",
    },
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "English guides",
        item: SITE + "/en",
      },
      { "@type": "ListItem", position: 2, name: article.title, item: url },
    ],
  };
  return (
    <main id="main-content" className="bg-cream text-night">
      <article>
        {isTours ? (
          <header data-english-tours-hero>
            <TourismBookingHero
              image={article.image}
              imageAlt={article.imageAlt}
              objectPosition="center 45%"
              eyebrow="Walking tours in English"
              title="Free walking tours in Lisbon"
              description={article.answer}
              primaryHref="#disponibilidad"
              primaryLabel="Find English tours"
              secondaryHref="#choose-a-route"
              secondaryLabel="Compare the walks"
              signals={[
                "English departures",
                "No advance payment",
                "Tip after the walk",
              ]}
              breadcrumb={
                <nav
                  aria-label="Breadcrumb"
                  className="mb-auto flex flex-wrap items-center gap-2 pt-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70"
                >
                  <Link
                    href="/en"
                    className="transition-colors hover:text-gold"
                  >
                    English guides
                  </Link>
                  <span aria-hidden="true">/</span>
                  <span className="text-white">Free tours</span>
                  <Link
                    href={equivalent.es}
                    hrefLang="es"
                    lang="es"
                    className="ml-auto inline-flex min-h-11 items-center underline hover:text-gold"
                  >
                    Leer en español
                  </Link>
                </nav>
              }
            />
          </header>
        ) : (
          <header className="mx-auto max-w-6xl px-6 pb-8 pt-8 [font-family:var(--font-article)] md:pt-12">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-3 text-xs text-text-secondary"
            >
              <Link
                href="/en"
                className="inline-flex min-h-11 items-center underline"
              >
                English guides
              </Link>
              <span aria-hidden="true">/</span>
              <span>{article.category}</span>
              <Link
                href={equivalent.es}
                hrefLang="es"
                lang="es"
                className="ml-auto inline-flex min-h-11 items-center underline"
              >
                Leer en español
              </Link>
            </nav>
            <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
                  {article.category}
                </p>
                <h1 className="mt-3 font-display text-[2rem] font-semibold not-italic leading-[1.12] sm:text-4xl xl:text-5xl">
                  {article.title}
                </h1>
                <p className="mt-5 text-base leading-relaxed text-night md:text-lg">
                  {article.answer}
                </p>
                <p className="mt-5 text-xs leading-relaxed text-text-secondary">
                  By{" "}
                  <Link href="/sobre-nosotros" className="underline">
                    José Tabares
                  </Link>{" "}
                  · English edition reviewed{" "}
                  <time dateTime={reviewedDate}>
                    {isTours ? "23" : "22"} October 2026
                  </time>
                </p>
                <nav
                  aria-label="Quick guide links"
                  className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold"
                >
                  <Link
                    href="#essentials"
                    className="inline-flex min-h-11 items-center gap-2 border-b border-border-soft"
                  >
                    The essentials <span aria-hidden="true">↓</span>
                  </Link>
                  {isTours ? (
                    <Link
                      href="#disponibilidad"
                      className="inline-flex min-h-11 items-center gap-2 border-b border-terracotta text-terracotta"
                    >
                      Find English tours <span aria-hidden="true">↓</span>
                    </Link>
                  ) : null}
                  {article.slug === "pena-palace-tickets" ? (
                    <Link
                      href="#where-to-book"
                      className="inline-flex min-h-11 items-center gap-2 border-b border-terracotta text-terracotta"
                    >
                      Compare booking options <span aria-hidden="true">↓</span>
                    </Link>
                  ) : null}
                </nav>
              </div>
              <figure className="lg:pt-1">
                <div className="relative aspect-[2/1] overflow-hidden sm:aspect-[16/10] lg:aspect-[4/3]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width:1024px) 100vw, 520px"
                    priority
                    className="object-cover"
                  />
                </div>
                {credit ? (
                  <figcaption className="mt-2 text-xs leading-relaxed text-text-secondary">
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
                    . Used in this crop.
                  </figcaption>
                ) : "caption" in article && article.caption ? (
                  <figcaption className="mt-2 text-xs text-text-secondary">
                    {article.caption}
                  </figcaption>
                ) : null}
              </figure>
            </div>
          </header>
        )}
        {isTours ? (
          <>
            <FreeTourLiveFinder language="en" />
            <section
              id="choose-a-route"
              className="scroll-mt-20 bg-background-light pb-8 pt-7 md:pb-10 md:pt-7"
            >
              <div className="mx-auto max-w-6xl px-6">
                <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
                  Choose your walk
                </p>
                <h2 className="mb-4 max-w-2xl font-display text-3xl font-semibold not-italic leading-tight text-text-main md:text-4xl">
                  Choose your walking tour
                </h2>
                <EnglishTourSelection directoryUrl={toursUrl} />
              </div>
            </section>
          </>
        ) : null}
        <div
          className={
            isTours
              ? "mx-auto max-w-4xl px-6 pb-12 pt-7"
              : "mx-auto grid max-w-6xl gap-10 px-6 pb-12 lg:grid-cols-[minmax(0,740px)_1fr] lg:gap-16"
          }
        >
          {!isTours ? (
            <aside className="min-w-0 lg:col-start-2 lg:row-start-1">
              <EnglishContents sections={article.sections} />
            </aside>
          ) : null}
          <div className="min-w-0 [font-family:var(--font-article)] lg:col-start-1 lg:row-start-1">
            {isTours ? (
              <p className="mb-5 font-body text-xs leading-relaxed text-text-secondary">
                By{" "}
                <Link href="/sobre-nosotros" className="underline">
                  José Tabares
                </Link>{" "}
                · English edition reviewed{" "}
                <time dateTime={reviewedDate}>23 October 2026</time>
              </p>
            ) : null}
            <EnglishEssentials article={article} />
            {article.sections
              .filter((section) => !isTours || section.id !== "choose-a-route")
              .map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 border-t border-border-soft py-7"
                >
                  <h2 className="mb-4 font-display text-2xl font-semibold not-italic leading-tight md:text-3xl">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="mb-4 text-base leading-[1.85] text-night"
                    >
                      {p}
                    </p>
                  ))}
                  {"rows" in section && section.rows ? (
                    <dl className="my-5 border-y border-border-soft">
                      {section.rows.map(([label, value]) => (
                        <div
                          key={label}
                          className="grid gap-1 border-b border-border-soft py-3 text-sm last:border-0 sm:grid-cols-2 sm:gap-5"
                        >
                          <dt className="font-semibold">{label}</dt>
                          <dd className="leading-relaxed text-text-secondary">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                  {"links" in section && section.links ? (
                    <ul className="space-y-2">
                      {section.links.map(([label, href]) => (
                        <li key={href}>
                          {article.slug === "lisbon-3-day-itinerary" &&
                          href.startsWith("/en/") &&
                          ["day-one", "sintra-option"].includes(section.id) ? (
                            <EnglishGuideLink
                              href={href}
                              placement={`itinerary-${section.id}`}
                              className="inline-flex min-h-12 items-center gap-3 border-b border-terracotta text-sm font-bold text-terracotta"
                            >
                              {label} <span aria-hidden="true">→</span>
                            </EnglishGuideLink>
                          ) : (
                            <Link
                              href={href}
                              className="inline-flex min-h-11 items-center text-sm font-semibold text-terracotta underline underline-offset-4"
                            >
                              {label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {"booking" in section && section.booking === "pena" ? (
                    <aside
                      id="booking"
                      aria-labelledby="pena-booking-title"
                      className="mt-7 scroll-mt-24 border border-border-soft bg-white/70 p-5 sm:p-7"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-terracotta">
                        Pena Palace · book with Tiqets
                      </p>
                      <h3
                        id="pena-booking-title"
                        className="mt-3 font-display text-2xl font-semibold not-italic"
                      >
                        Check tickets for your date
                      </h3>
                      <p className="my-4 text-sm leading-relaxed text-text-secondary">
                        Palace-and-park options, with the booking page in
                        English. Check the selected visit, entry time and any
                        transfer option before paying.
                      </p>
                      <dl className="mb-5 grid gap-3 border-y border-border-soft py-4 text-sm sm:grid-cols-2">
                        <div>
                          <dt className="font-semibold">Booking provider</dt>
                          <dd className="mt-1 text-text-secondary">Tiqets</dd>
                        </div>
                        <div>
                          <dt className="font-semibold">Before payment</dt>
                          <dd className="mt-1 text-text-secondary">
                            Review inclusions and change terms
                          </dd>
                        </div>
                      </dl>
                      <EnglishBookingLink
                        href={ticketUrl}
                        partner="tiqets"
                        campaign={ENGLISH_PENA_CAMPAIGN}
                        placement="pena-after-comparison"
                        content="palace-park-english"
                      >
                        Check Pena dates on Tiqets
                      </EnglishBookingLink>
                      <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                        Affiliate link. Your booking is handled by Tiqets.{" "}
                        <Link className="underline" href="#affiliate-policy">
                          How these links work
                        </Link>
                        .
                      </p>
                    </aside>
                  ) : null}
                </section>
              ))}
            <details className="mt-6 border-y border-border-soft py-5">
              <summary className="min-h-11 cursor-pointer text-sm font-semibold">
                Facts checked · {isTours ? "23" : "22"} October 2026
              </summary>
              <ul className="mt-3 space-y-3 text-sm">
                {article.sources.map(([label, href]) => (
                  <li key={href}>
                    <Link className="underline underline-offset-4" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-text-secondary">
                Prices, opening hours and access rules can change. Follow the
                official notice for the date of your visit.
              </p>
            </details>
          </div>
        </div>
      </article>
      <section className="mx-auto max-w-6xl border-t border-border-soft px-6 py-10">
        <h2 className="mb-4 font-display text-2xl font-semibold not-italic">
          Plan the next part of your trip
        </h2>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {englishPilotRoutes
            .slice(1)
            .filter((r) => r.path !== `/en/${article.slug}`)
            .map((r) => (
              <Link
                key={r.path}
                href={r.path}
                className="flex min-h-14 items-center justify-between border-b border-border-soft py-3 text-sm font-semibold"
              >
                {r.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </main>
  );
}
