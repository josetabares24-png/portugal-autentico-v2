import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import { getTravelerGuide, travelerGuideSlugs } from '@/data/traveler-guide-preview';

function sectionId(title: string) {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function generateStaticParams() {
  return travelerGuideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getTravelerGuide(slug);
  if (!guide) return { title: 'Guía no encontrada', robots: { index: false, follow: false } };

  return {
    title: { absolute: `${guide.title} | Estaba en Lisboa` },
    description: guide.lead,
    alternates: { canonical: null },
    robots: { index: false, follow: true },
    openGraph: {
      title: guide.title,
      description: guide.lead,
      type: 'article',
      images: [{ url: `https://estabaenlisboa.com${guide.heroImage}`, alt: guide.heroAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.lead,
      images: [`https://estabaenlisboa.com${guide.heroImage}`],
    },
  };
}

export default async function TravelerGuidePreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getTravelerGuide(slug);
  if (!guide) notFound();

  return (
    <main id="main-content" className="bg-cream">
      <section className="relative h-[76svh] min-h-[590px] max-h-[720px] overflow-hidden border-b border-taupe/20 bg-night">
        <Image
          src={guide.heroImage}
          alt={guide.heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/55 to-night/10 lg:bg-gradient-to-r lg:from-night/95 lg:via-night/55 lg:to-night/5" />
        <div className="absolute inset-0 bg-night/10" />

        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 py-10 sm:px-10 md:px-14 lg:py-14">
          <div className="max-w-3xl">
            <Link
              href="/#guia-practica"
              className="mb-7 inline-flex font-body text-xs uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-white"
            >
              ← Volver a preparar Lisboa
            </Link>

            <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-white/65">
              {guide.eyebrow}
            </p>

            <h1
              className="max-w-[18ch] font-display font-semibold not-italic leading-[1.04] tracking-normal text-white"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            >
              {guide.title}
            </h1>

            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/85 sm:text-lg">
              {guide.lead}
            </p>

            <div className="mt-6 max-w-2xl border-t border-white/30 pt-5">
              <p className="mb-2 font-body text-[0.65rem] uppercase tracking-[0.18em] text-white/55">La respuesta corta</p>
              <p className="font-body text-sm leading-relaxed text-white/85 sm:text-base">{guide.promise}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-taupe/20 bg-cream py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">Empieza por tu situación</p>
            <h2 className="max-w-md font-display text-3xl font-semibold not-italic leading-tight tracking-normal text-night md:text-4xl">
              {guide.decisionPrompt}
            </h2>
            <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-text-secondary">
              Cada opción parte de una necesidad concreta y te lleva a la respuesta más útil para ese momento.
            </p>

            <nav aria-label="Contenido de esta guía" className="mt-10 border-t border-night/15 pt-5">
              <p className="mb-4 font-body text-[0.65rem] uppercase tracking-[0.18em] text-taupe">En esta guía</p>
              <div className="space-y-3">
                <a
                  href="#dudas-reales"
                  className="block font-body text-sm leading-snug text-night transition-colors hover:text-terracotta"
                >
                  Las dudas que suelen aparecer
                </a>
                {guide.sections.map((section) => (
                  <a
                    key={section.title}
                    href={`#${sectionId(section.title)}`}
                    className="block font-body text-sm leading-snug text-night transition-colors hover:text-terracotta"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <div className="border-y border-night/15">
            {guide.decisions.map((decision, index) => {
              const content = (
                <>
                  <div className="min-w-0">
                    <h3 className="font-display text-[1.3rem] font-semibold not-italic leading-tight tracking-normal text-night md:text-[1.45rem]">
                      {decision.title}
                    </h3>
                    <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-text-secondary">{decision.text}</p>
                  </div>
                  {decision.href ? (
                    <span className="flex h-10 w-10 flex-none items-center justify-center border border-night/15 text-night transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-terracotta group-hover:text-terracotta" aria-hidden="true">
                      <ArrowUpRight size={18} strokeWidth={1.8} />
                    </span>
                  ) : null}
                </>
              );

              return decision.href ? (
                <TrackedInternalLink
                  key={decision.title}
                  href={decision.href}
                  contentType="guide_decision"
                  contentId={`${guide.portalId}_${index + 1}`}
                  className="group grid min-h-[126px] grid-cols-[1fr_auto] items-center gap-5 border-b border-night/15 px-1 py-6 transition-colors last:border-b-0 hover:bg-white/55 sm:px-5"
                >
                  {content}
                </TrackedInternalLink>
              ) : (
                <div key={decision.title} className="grid min-h-[126px] grid-cols-[1fr_auto] items-center gap-5 border-b border-night/15 px-1 py-6 last:border-b-0 sm:px-5">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="dudas-reales" className="scroll-mt-20 border-b border-white/10 bg-night py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-white/45">Lo que solemos preguntarnos</p>
            <h2 className="max-w-md font-display text-3xl font-semibold not-italic leading-tight tracking-normal text-white md:text-4xl">
              Las dudas que aparecen justo antes de decidir.
            </h2>
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-white/65">
              Respuestas cortas, con contexto suficiente para que puedas elegir sin seguir abriendo pestañas.
            </p>
          </div>

          <div className="border-y border-white/15">
            {guide.humanQuestions.map((item) => (
              <div key={item.question} className="grid gap-3 border-b border-white/15 py-7 last:border-b-0 md:grid-cols-[0.8fr_1.2fr] md:gap-8 md:py-8">
                <h3 className="font-display text-xl font-semibold not-italic leading-snug tracking-normal text-white md:text-2xl">
                  {item.question}
                </h3>
                <p className="font-body text-sm leading-[1.75] text-white/72 md:text-base">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        {guide.sections.map((section, index) => (
          <article
            key={section.title}
            id={sectionId(section.title)}
            className={`scroll-mt-24 border-b border-taupe/20 ${index % 2 === 1 ? 'bg-white/45' : 'bg-cream'}`}
          >
            <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.72fr_1.28fr] md:gap-16 md:px-10 md:py-22">
              <div>
                {section.eyebrow ? (
                  <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">{section.eyebrow}</p>
                ) : null}
                <h2
                  className="max-w-md font-display font-semibold not-italic leading-tight tracking-normal text-night"
                  style={{ fontSize: 'clamp(1.8rem, 3.1vw, 2.65rem)' }}
                >
                  {section.title}
                </h2>
              </div>

              <div>
                {section.intro ? (
                  <p className="mb-5 font-body text-lg leading-relaxed text-night">{section.intro}</p>
                ) : null}

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mb-5 font-body text-base leading-[1.78] text-text-secondary">
                    {paragraph}
                  </p>
                ))}

                {section.bullets ? (
                  <ul className="my-7 space-y-3 border-y border-taupe/25 py-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="grid grid-cols-[1.5rem_1fr] gap-3 font-body text-sm leading-relaxed text-night">
                        <span className="text-terracotta">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.links ? (
                  <div className="mt-8 border-t border-taupe/25">
                    {section.links.map((link) => (
                      <TrackedInternalLink
                        key={link.href}
                        href={link.href}
                        contentType="guide_support_link"
                        contentId={link.href}
                        className="group flex min-h-14 items-center justify-between gap-4 border-b border-taupe/25 py-3 text-night transition-colors hover:text-terracotta"
                      >
                        <span className="min-w-0">
                          <span className="block font-body text-sm font-semibold">{link.label}</span>
                          {link.description ? (
                            <span className="mt-1 block font-body text-xs font-normal leading-relaxed text-text-secondary">
                              {link.description}
                            </span>
                          ) : null}
                        </span>
                        <ArrowUpRight size={17} strokeWidth={1.8} className="flex-none transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </TrackedInternalLink>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="relative overflow-hidden bg-night bg-azulejo-pattern-gold py-16 md:py-20">
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-white/50">Para quedarte con una idea</p>
          <h2 className="font-display text-3xl font-semibold not-italic leading-tight tracking-normal text-white md:text-4xl">{guide.closingTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-white/75">{guide.closingText}</p>
          <Link
            href="/#guia-practica"
            className="mt-8 inline-flex border-b border-white/60 pb-1 font-body text-sm text-white transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Ver las otras formas de explorar Lisboa →
          </Link>
        </div>
      </section>
    </main>
  );
}
