import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export type TravelPillarGuide = {
  url: string;
  eyebrow: string;
  title: string;
  description: string;
  lead: string;
  shortAnswer: string;
  heroImage: string;
  heroAlt: string;
  datePublished: string;
  dateModified: string;
  quickAnswers: Array<{
    label: string;
    title: string;
    text: string;
  }>;
  sections: Array<{
    id: string;
    eyebrow: string;
    title: string;
    intro?: string;
    paragraphs?: string[];
    items?: Array<{
      title: string;
      text: string;
    }>;
    note?: {
      title: string;
      text: string;
    };
    image?: string;
    imageAlt?: string;
    imagePosition?: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  sources: Array<{
    label: string;
    href: string;
  }>;
  closingTitle: string;
  closingText: string;
};

const SITE_URL = 'https://estabaenlisboa.com';

export function TravelPillarPage({
  guide,
  reservation,
}: {
  guide: TravelPillarGuide;
  reservation?: ReactNode;
}) {
  const pageUrl = `${SITE_URL}${guide.url}`;
  const imageUrl = `${SITE_URL}${guide.heroImage}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    image: imageUrl,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    inLanguage: 'es',
    mainEntityOfPage: pageUrl,
    author: {
      '@type': 'Person',
      name: 'José Tabares',
      url: `${SITE_URL}/sobre-nosotros`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Estaba en Lisboa',
      url: SITE_URL,
    },
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: guide.title, item: pageUrl },
    ],
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main id="main-content" className="bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative flex h-[72svh] min-h-[560px] max-h-[720px] items-end overflow-hidden bg-night">
        <Image
          src={guide.heroImage}
          alt={guide.heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-night/5 lg:bg-gradient-to-r lg:from-night/90 lg:via-night/40 lg:to-night/5" />

        <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-10 sm:px-8 sm:pb-12 md:px-10 lg:pb-16">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.16em] text-white/60">
            <Link href="/" className="transition-colors hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/85">Guía completa</span>
          </nav>
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            {guide.eyebrow}
          </p>
          <h1 className="max-w-4xl font-display text-[2.65rem] font-semibold not-italic leading-[1.01] tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-white/85 sm:text-lg">
            {guide.lead}
          </p>
        </div>
      </section>

      <section className="border-b border-night/15 bg-cream py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:px-10 lg:grid-cols-[0.38fr_1fr] lg:gap-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            La respuesta corta
          </p>
          <p className="max-w-4xl font-display text-[1.55rem] font-semibold not-italic leading-[1.22] tracking-normal text-night sm:text-3xl lg:text-[2.15rem]">
            {guide.shortAnswer}
          </p>
        </div>
      </section>

      <section className="bg-white/55 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid border-y border-night/15 sm:grid-cols-2 lg:grid-cols-4">
            {guide.quickAnswers.map((answer, index) => (
              <article
                key={answer.title}
                className={`px-1 py-6 sm:px-5 lg:min-h-[210px] lg:px-6 lg:py-7 ${index > 0 ? 'border-t border-night/15 sm:border-t-0' : ''} ${index % 2 === 1 ? 'sm:border-l sm:border-night/15' : ''} ${index > 1 ? 'sm:border-t sm:border-night/15 lg:border-t-0' : ''} ${index > 0 ? 'lg:border-l lg:border-night/15' : ''}`}
              >
                <p className="font-body text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-terracotta">
                  {answer.label}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold not-italic leading-tight tracking-normal text-night">
                  {answer.title}
                </h2>
                <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                  {answer.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {guide.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-24 border-b border-night/10 py-14 md:py-20 ${index % 2 === 0 ? 'bg-cream' : 'bg-white/55'}`}
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className={`grid gap-9 lg:gap-16 ${section.image ? 'lg:grid-cols-[0.88fr_1.12fr] lg:items-start' : 'lg:grid-cols-[0.58fr_1.42fr]'}`}>
              <div>
                <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                  {section.eyebrow}
                </p>
                <h2 className="max-w-xl font-display text-[2rem] font-semibold not-italic leading-[1.08] tracking-normal text-night sm:text-4xl lg:text-[2.8rem]">
                  {section.title}
                </h2>
                {section.image ? (
                  <div className="relative mt-7 aspect-[4/3] overflow-hidden rounded-[6px] bg-night">
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? ''}
                      fill
                      className={`object-cover ${section.imagePosition ?? 'object-center'}`}
                      sizes="(max-width: 1023px) 100vw, 42vw"
                      loading="lazy"
                    />
                  </div>
                ) : null}
              </div>

              <div>
                {section.intro ? (
                  <p className="mb-6 font-display text-xl font-semibold not-italic leading-relaxed tracking-normal text-night sm:text-2xl">
                    {section.intro}
                  </p>
                ) : null}

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mb-5 font-body text-base leading-[1.8] text-text-secondary">
                    {paragraph}
                  </p>
                ))}

                {section.items ? (
                  <div className="mt-7 border-y border-night/15">
                    {section.items.map((item) => (
                      <article key={item.title} className="grid gap-2 border-b border-night/15 py-5 last:border-b-0 md:grid-cols-[0.42fr_1fr] md:gap-8">
                        <h3 className="font-display text-xl font-semibold not-italic leading-snug tracking-normal text-night">
                          {item.title}
                        </h3>
                        <p className="font-body text-sm leading-[1.75] text-text-secondary sm:text-base">
                          {item.text}
                        </p>
                      </article>
                    ))}
                  </div>
                ) : null}

                {section.note ? (
                  <aside className="mt-7 border-l-2 border-terracotta bg-white/55 px-5 py-4">
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-terracotta">
                      {section.note.title}
                    </p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-night">
                      {section.note.text}
                    </p>
                  </aside>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ))}

      {reservation}

      <section className="bg-night py-14 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:px-10 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
          <div>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Preguntas reales
            </p>
            <h2 className="max-w-md font-display text-[2rem] font-semibold not-italic leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-[2.8rem]">
              Lo que conviene saber antes de decidir.
            </h2>
          </div>
          <div className="border-y border-white/20">
            {guide.faqs.map((faq) => (
              <article key={faq.question} className="grid gap-3 border-b border-white/20 py-6 last:border-b-0 md:grid-cols-[0.72fr_1.28fr] md:gap-8">
                <h3 className="font-display text-xl font-semibold not-italic leading-snug tracking-normal text-white md:text-2xl">
                  {faq.question}
                </h3>
                <p className="font-body text-sm leading-[1.78] text-white/70 md:text-base">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-night/10 bg-cream py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:px-10 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
          <div>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              Fuentes y revisión
            </p>
            <h2 className="font-display text-3xl font-semibold not-italic leading-tight tracking-normal text-night">
              Información comprobable.
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary">
              Revisado el 30 de septiembre de 2026. Los horarios y condiciones pueden cambiar; compruébalos en la fuente oficial antes de ir.
            </p>
          </div>
          <ul className="border-y border-night/15">
            {guide.sources.map((source) => (
              <li key={source.href} className="border-b border-night/15 last:border-b-0">
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-14 items-center justify-between gap-4 py-3 font-body text-sm font-semibold text-night transition-colors hover:text-terracotta"
                >
                  {source.label}
                  <ExternalLink size={16} strokeWidth={1.8} className="flex-none" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-14 text-center md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="font-display text-[2rem] font-semibold not-italic leading-[1.1] tracking-normal text-night sm:text-4xl">
            {guide.closingTitle}
          </p>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-text-secondary">
            {guide.closingText}
          </p>
        </div>
      </section>
    </main>
  );
}
