import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import articles from "@/data/english-pilot-articles.json";
import { languageAlternates } from "@/lib/language-alternates";
export const metadata: Metadata = {
  title: {
    absolute:
      "Lisbon travel guides: transport, routes and tickets | Estaba en Lisboa",
  },
  description:
    "Plan a Lisbon trip with practical guides by José Tabares: airport transfers, Metro tickets, three-day routes, Pena Palace and English walking tours.",
  alternates: {
    canonical: "https://estabaenlisboa.com/en",
    languages: languageAlternates("/en"),
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://estabaenlisboa.com/en",
    title: "Lisbon, with time to enjoy it",
    description:
      "Transport, walking routes and booking decisions, explained from Lisbon.",
    images: [
      {
        url: "/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg",
        alt: "Alfama rooftops above the River Tagus",
      },
    ],
  },
};
export default function EnglishHome() {
  return (
    <main id="main-content" className="bg-cream text-night">
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-2 md:items-center md:gap-14 md:px-8 md:py-14">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
            Estaba en Lisboa · English guides
          </p>
          <h1 className="max-w-xl font-display text-4xl font-semibold not-italic leading-[1.08] md:text-6xl">
            The Lisbon I show friends who come to visit.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary">
            Getting around, choosing what to see and leaving enough time between
            the two. Practical guides by José Tabares, who lives in Lisbon.
          </p>
          <Link
            href="#start-planning"
            className="mt-7 inline-flex min-h-12 items-center gap-3 border-b-2 border-terracotta text-sm font-bold"
          >
            Start planning <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg"
            alt="Alfama rooftops and the River Tagus in Lisbon"
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>
      <section
        id="start-planning"
        className="scroll-mt-20 border-y border-border-soft bg-white/35"
      >
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
            Before you arrive
          </p>
          <h2 className="max-w-xl font-display text-3xl font-semibold not-italic leading-tight md:text-4xl">
            Five decisions that make the trip easier.
          </h2>
          <div className="mt-7">
            {articles.map((a, i) => (
              <Link
                key={a.slug}
                href={"/en/" + a.slug}
                className="grid gap-3 border-t border-border-soft py-6 sm:grid-cols-[40px_1fr_30px] sm:gap-6"
              >
                <span className="text-xs font-semibold text-text-secondary">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold leading-tight">
                    {a.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-secondary">
                    {a.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden self-center text-terracotta sm:block"
                >
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-2 md:gap-16 md:py-14">
        <h2 className="max-w-md font-display text-3xl font-semibold leading-tight">
          A useful starting point, with room to change your plans.
        </h2>
        <div className="space-y-4 leading-relaxed text-text-secondary">
          <p>
            Group nearby places, check the final walk from your station and
            reserve only the visits you actually want. Lisbon’s hills and the
            journey up to Sintra matter more than a long checklist.
          </p>
          <p>
            These guides separate official information from editorial
            recommendations. Prices and access rules have sources and a review
            date. Booking links explain who handles the reservation and when we
            may receive a commission.
          </p>
          <Link
            href="/sobre-nosotros"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-terracotta underline"
          >
            Meet José and read the editorial approach (in Spanish)
          </Link>
        </div>
      </section>
    </main>
  );
}
