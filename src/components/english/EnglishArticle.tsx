import Link from "next/link";
import Image from "next/image";
import articles from "@/data/english-pilot-articles.json";
import { getPhotoCredit } from "@/data/photo-credits";
import { englishPilotRoutes } from "@/lib/language-alternates";
import { findProductById } from "@/data/bookings";
import {
  withTiqetsCampaign,
  withGuruwalkRef,
  buildAffiliateUrl,
} from "@/lib/affiliate";
import FreeTourLiveFinder from "@/components/free-tours/FreeTourLiveFinder";
import EnglishBookingLink from "./EnglishBookingLink";

type Article = (typeof articles)[number];
const SITE = "https://estabaenlisboa.com";
function EnglishAnswer({ article }: { article: Article }) {
  return (
    <>
      <p className="text-lg leading-relaxed">{article.answer}</p>
      <section
        aria-labelledby="essentials-title"
        className="my-8 border-y border-border-soft py-5"
      >
        <h2
          id="essentials-title"
          className="mb-4 font-display text-2xl font-semibold"
        >
          The essentials
        </h2>
        <dl>
          {article.essentials.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[minmax(100px,0.8fr)_1.5fr] gap-4 border-t border-border-soft py-3 text-sm leading-relaxed first:border-0"
            >
              <dt className="font-semibold">{label}</dt>
              <dd>{value}</dd>
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
  const ticketUrl = ticket
    ? withTiqetsCampaign(ticket, "web_en_pena-palace-tickets")
    : null;
  const tourRef = process.env.GURUWALK_AFFILIATE_REF?.trim();
  const toursUrl = tourRef
    ? buildAffiliateUrl(
        withGuruwalkRef("https://www.guruwalk.com/lisbon", tourRef),
        "free-tours-lisbon-en",
        "final-cta",
      )
    : null;
  const isTours = article.slug === "lisbon-free-walking-tours";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: SITE + article.image,
    url,
    mainEntityOfPage: url,
    inLanguage: "en",
    dateModified: "2026-10-22",
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
        <header className="mx-auto max-w-6xl px-6 pb-8 pt-8 md:pt-12">
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
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
            {article.category}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold not-italic leading-[1.12] md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary">
            {article.description}
          </p>
          <figure className="mt-8">
            <div className="relative aspect-[16/9] max-h-[420px] overflow-hidden">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes="(max-width:768px) 100vw, 1100px"
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
          <p className="mt-5 text-sm text-text-secondary">
            By{" "}
            <Link href="/sobre-nosotros" className="underline">
              José Tabares
            </Link>{" "}
            · English edition reviewed{" "}
            <time dateTime="2026-10-22">22 October 2026</time>
          </p>
        </header>
        {isTours ? (
          <>
            <div className="mx-auto max-w-6xl px-6">
              <div className="max-w-[740px]">
                <EnglishAnswer article={article} />
              </div>
            </div>
            <FreeTourLiveFinder language="en" />
          </>
        ) : null}
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-12 lg:grid-cols-[minmax(0,740px)_1fr] lg:gap-16">
          <div className="min-w-0">
            {!isTours ? <EnglishAnswer article={article} /> : null}
            {article.sections.map((section) => (
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
                        <Link
                          href={href}
                          className="inline-flex min-h-11 items-center text-sm font-semibold text-terracotta underline underline-offset-4"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {"booking" in section && section.booking === "pena" ? (
                  <aside className="mt-6 border-l-2 border-terracotta pl-5">
                    <p className="mb-3 text-sm leading-relaxed">
                      Palace and park ticket through Tiqets. The current linked
                      product opens in Spanish; check the conditions before
                      paying.
                    </p>
                    <EnglishBookingLink
                      href={ticketUrl}
                      partner="tiqets"
                      campaign="web_en_pena-palace-tickets"
                    >
                      Check availability on Tiqets
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
                Facts checked · 22 October 2026
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
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-24">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-text-secondary">
                On this page
              </p>
              {article.sections.map((s) => (
                <Link
                  key={s.id}
                  href={"#" + s.id}
                  className="block border-t border-border-soft py-3 text-sm leading-relaxed hover:text-terracotta"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </article>
      {isTours ? (
        <>
          <section className="mx-auto max-w-6xl px-6 py-10">
            <h2 className="mb-4 font-display text-2xl font-semibold">
              Check more English routes
            </h2>
            <p className="mb-5 max-w-2xl leading-relaxed">
              If no result suits your date, compare the full directory. Check
              the tour language, meeting point and walking difficulty on the
              provider’s page.
            </p>
            <EnglishBookingLink
              href={toursUrl}
              partner="guruwalk"
              campaign="free-tours-lisboa-en"
            >
              Browse Lisbon tours on GuruWalk
            </EnglishBookingLink>
            <p className="mt-3 text-xs text-text-secondary">
              Affiliate link. Confirm that the selected tour is in English.
            </p>
          </section>
        </>
      ) : null}
      <section className="mx-auto max-w-6xl border-t border-border-soft px-6 py-10">
        <h2 className="mb-4 font-display text-2xl font-semibold">
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
