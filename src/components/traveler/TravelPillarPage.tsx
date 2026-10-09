import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import { ArticleFigure } from '@/components/blog/ArticleFigure';
import { ArticleFooter } from '@/components/blog/ArticleFooter';
import { ArticleSources } from '@/components/blog/ArticleSources';
import { ArticleToc } from '@/components/blog/ArticleToc';

export type TravelPillarGuide = {
  url: string;
  eyebrow: string;
  title: string;
  description: string;
  lead: string;
  shortAnswer: string;
  heroImage: string;
  heroAlt: string;
  heroWidth: number;
  heroHeight: number;
  datePublished: string;
  dateModified: string;
  topics: string[];
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
  relatedGuides: Array<{
    eyebrow: string;
    title: string;
    text: string;
    href: string;
  }>;
  closingTitle: string;
  closingText: string;
};

const SITE_URL = 'https://estabaenlisboa.com';
const AUTHOR_URL = `${SITE_URL}/sobre-nosotros`;
const AUTHOR_ID = `${AUTHOR_URL}#jose-tabares`;

function toLisbonDateTime(date: string) {
  return `${date}T09:00:00+01:00`;
}

function formatReviewDate(date: string) {
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Lisbon',
  }).format(new Date(`${date}T12:00:00Z`));
}

export function TravelPillarPage({
  guide,
  reservation,
  afterShortAnswer,
  afterSection,
}: {
  guide: TravelPillarGuide;
  reservation?: ReactNode;
  /** Se pinta justo debajo de «La respuesta corta». */
  afterShortAnswer?: ReactNode;
  /** Contenido extra al final de una sección concreta, por `section.id`. */
  afterSection?: Record<string, ReactNode>;
}) {
  const pageUrl = `${SITE_URL}${guide.url}`;
  const imageUrl = `${SITE_URL}${guide.heroImage}`;
  const reviewDate = formatReviewDate(guide.dateModified);
  const headings = [
    { id: 'respuesta-corta', title: 'La respuesta corta' },
    ...guide.sections.map((section) => ({ id: section.id, title: section.title })),
    { id: 'preguntas-frecuentes', title: 'Preguntas frecuentes' },
  ];
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: guide.title,
    description: guide.description,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: guide.heroWidth,
      height: guide.heroHeight,
      caption: guide.heroAlt,
    },
    datePublished: toLisbonDateTime(guide.datePublished),
    dateModified: toLisbonDateTime(guide.dateModified),
    inLanguage: 'es-ES',
    articleSection: 'Guías de Lisboa',
    keywords: guide.topics.join(', '),
    isAccessibleForFree: true,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    author: {
      '@type': 'Person',
      '@id': AUTHOR_ID,
      name: 'José Tabares',
      url: AUTHOR_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Estaba en Lisboa',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 600,
        height: 188,
      },
    },
    about: guide.topics.map((topic) => ({ '@type': 'Thing', name: topic })),
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: guide.title, item: pageUrl },
    ],
  };

  return (
    <main id="main-content" className="article-page article-v2 bg-background-light">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="border-b border-border-soft">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <nav aria-label="Breadcrumb" className="article-breadcrumb flex items-center gap-2">
            <Link href="/" className="transition-colors hover:text-terracotta">Inicio</Link>
            <span aria-hidden="true">›</span>
            <span className="font-semibold text-text-main">Guías de Lisboa</span>
          </nav>
        </div>
      </div>

      <header className="article-header mx-auto max-w-6xl px-4 pb-5 pt-8">
        <div className="grid gap-10 lg:grid-cols-[1fr,320px]">
          <div className="article-header-content min-w-0">
            <p className="article-meta mb-3 uppercase tracking-widest">
              {guide.eyebrow} &mdash; Revisado el {reviewDate} &mdash; Por José Tabares
            </p>
            <h1 className="article-title mb-5 font-display text-text-main">
              {guide.title}
            </h1>
            <p className="article-description mb-0 border-b border-border-soft pb-5">
              {guide.lead}
            </p>
          </div>
        </div>
      </header>

      <figure className="article-hero mx-auto max-w-6xl px-4">
        <div className="article-hero-frame">
          <Image
            src={guide.heroImage}
            alt={guide.heroAlt}
            fill
            priority
            fetchPriority="high"
            className="article-hero-img"
            sizes="(max-width: 639px) 135vw, (max-width: 1024px) 100vw, 1152px"
          />
        </div>
      </figure>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr,320px]">
          <article className="article-surface min-w-0">
            <section id="respuesta-corta" className="article-reading scroll-mt-28">
              <p className="article-lead">{guide.shortAnswer}</p>

              <div className="article-facts grid gap-x-7 gap-y-6 sm:grid-cols-2">
                {guide.quickAnswers.map((answer) => (
                  <div key={answer.title}>
                    <p className="article-box-label mb-2 uppercase tracking-widest text-terracotta">
                      {answer.label}
                    </p>
                    <h2>{answer.title}</h2>
                    <p>{answer.text}</p>
                  </div>
                ))}
              </div>
              {afterShortAnswer}
            </section>

            <div className="article-content article-reading">
              {guide.sections.map((section) => (
                <section key={section.id} aria-labelledby={section.id}>
                  <h2 id={section.id} className="scroll-mt-28">{section.title}</h2>

                  {section.image ? (
                    <ArticleFigure
                      photo={{
                        src: section.image,
                        alt: section.imageAlt ?? '',
                        position: section.imagePosition,
                      }}
                    />
                  ) : null}

                  {section.intro ? <p><strong>{section.intro}</strong></p> : null}

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.items?.map((item) => (
                    <div key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  ))}

                  {section.note ? (
                    <aside className="article-info-box my-7">
                      <p className="article-box-label uppercase tracking-widest text-terracotta">
                        {section.note.title}
                      </p>
                      <p>{section.note.text}</p>
                    </aside>
                  ) : null}

                  {afterSection?.[section.id]}
                </section>
              ))}

              <section aria-labelledby="cierre-guia">
                <h2 id="cierre-guia" className="scroll-mt-28">{guide.closingTitle}</h2>
                <p>{guide.closingText}</p>
              </section>
            </div>

            {reservation}

            <hr className="my-12 border-border-soft" />
            <section id="preguntas-frecuentes" className="article-faq article-reading scroll-mt-28">
              <h3>Preguntas frecuentes</h3>
              <div className="space-y-0">
                {guide.faqs.map((faq) => (
                  <details key={faq.question} className="group border-t border-border-soft">
                    <summary className="flex cursor-pointer items-start justify-between gap-4">
                      <h4>{faq.question}</h4>
                      <span className="article-faq-icon flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="article-faq-answer">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </section>
          </article>

          <ArticleToc headings={headings} />
        </div>

        <section className="article-related mt-12 border-t border-border-soft pt-8">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="article-related-category mb-1 uppercase tracking-widest">Para seguir preparando</p>
              <h3>Lecturas relacionadas</h3>
            </div>
            <Link href="/blog" className="article-related-link flex-none">Ver el Blog →</Link>
          </div>
          <nav aria-label="Lecturas relacionadas" className="grid border-y border-border-soft sm:grid-cols-2">
            {guide.relatedGuides.map((related, index) => (
              <TrackedInternalLink
                key={related.href}
                href={related.href}
                contentType="pillar_related"
                contentId={related.href}
                className={`group flex min-h-[164px] flex-col justify-between gap-5 border-b border-border-soft py-6 transition-colors hover:bg-white/35 sm:px-6 ${index % 2 === 1 ? 'sm:border-l sm:border-border-soft' : ''} ${index >= guide.relatedGuides.length - 2 ? 'sm:border-b-0' : ''}`}
              >
                <div>
                  <p className="article-related-category mb-2 uppercase tracking-widest text-terracotta">
                    {related.eyebrow}
                  </p>
                  <h4>{related.title}</h4>
                  <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                    {related.text}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.8}
                  className="text-night transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-terracotta"
                  aria-hidden="true"
                />
              </TrackedInternalLink>
            ))}
          </nav>
        </section>

        <div className="article-compact-ending mx-auto mt-10 max-w-2xl">
          <ArticleFooter
            authorName="José Tabares"
            beforeAuthor={<ArticleSources sources={guide.sources} />}
          />
        </div>
      </div>
    </main>
  );
}
