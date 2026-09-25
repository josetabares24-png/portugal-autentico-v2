import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import { getTravelerGuide, travelerGuideSlugs } from '@/data/traveler-guide-preview';

export function generateStaticParams() {
  return travelerGuideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getTravelerGuide(slug);
  if (!guide) return { title: 'Guía no encontrada', robots: { index: false, follow: false } };

  return {
    title: `${guide.title} | Estaba en Lisboa — Preview`,
    description: guide.lead,
    robots: { index: false, follow: false },
  };
}

export default async function TravelerGuidePreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getTravelerGuide(slug);
  if (!guide) notFound();

  return (
    <main id="main-content" className="bg-cream">
      <section className="relative h-[84svh] min-h-[650px] max-h-[780px] overflow-hidden border-b border-taupe/20 bg-night">
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

        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 py-10 sm:px-10 md:px-14 lg:py-16">
          <div className="max-w-2xl">
            <Link
              href="/#guia-practica"
              className="mb-7 inline-flex font-body text-xs uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-white"
            >
              ← Volver a la guía de Lisboa
            </Link>

            <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-white/65">
              {guide.number} · {guide.eyebrow}
            </p>

            <h1
              className="font-display italic leading-[1.02] text-white"
              style={{ fontSize: 'clamp(2.55rem, 5vw, 4.8rem)', fontWeight: 400 }}
            >
              {guide.title}
            </h1>

            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/85 sm:text-lg">
              {guide.lead}
            </p>

            <p className="mt-5 max-w-2xl border-l-2 border-terracotta pl-5 font-display text-base italic leading-relaxed text-white/82 sm:text-lg">
              {guide.promise}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-taupe/20 bg-cream py-14 md:py-18">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">
            {guide.decisionPrompt}
          </p>

          <div className="grid border-l border-t border-night/15 sm:grid-cols-2">
            {guide.decisions.map((decision, index) => {
              const content = (
                <>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-body text-xs tracking-[0.16em] text-taupe">0{index + 1}</span>
                    <span className="font-body text-lg text-terracotta transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                  <h2 className="font-display text-[1.35rem] italic leading-tight text-night">{decision.title}</h2>
                  <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">{decision.text}</p>
                </>
              );

              return decision.href ? (
                <TrackedInternalLink
                  key={decision.title}
                  href={decision.href}
                  contentType="guide_decision"
                  contentId={`${guide.portalId}_${index + 1}`}
                  className="group block min-h-[210px] border-b border-r border-night/15 p-6 transition-colors hover:bg-[#EDE7DA] md:p-8"
                >
                  {content}
                </TrackedInternalLink>
              ) : (
                <div key={decision.title} className="group min-h-[210px] border-b border-r border-night/15 p-6 md:p-8">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        {guide.sections.map((section, index) => (
          <article
            key={section.title}
            className={index % 2 === 0 ? 'border-b border-taupe/20 bg-cream' : 'border-b border-taupe/20'}
            style={index % 2 === 1 ? { background: '#EDE7DA' } : undefined}
          >
            <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-[0.75fr_1.25fr] md:gap-16 md:px-10 md:py-22">
              <div>
                {section.eyebrow ? (
                  <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">{section.eyebrow}</p>
                ) : null}
                <h2
                  className="font-display italic leading-tight text-night"
                  style={{ fontSize: 'clamp(1.9rem, 3.3vw, 2.8rem)', fontWeight: 400 }}
                >
                  {section.title}
                </h2>
              </div>

              <div>
                {section.intro ? (
                  <p className="mb-5 font-body text-lg leading-relaxed text-night">{section.intro}</p>
                ) : null}

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mb-5 font-body text-base leading-relaxed text-text-secondary">
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
                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                    {section.links.map((link) => (
                      <TrackedInternalLink
                        key={link.href}
                        href={link.href}
                        contentType="guide_support_link"
                        contentId={link.href}
                        className="font-body text-sm font-semibold text-night underline decoration-taupe/40 underline-offset-4 transition-colors hover:text-terracotta"
                      >
                        {link.label} →
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
          <h2 className="font-display text-3xl italic leading-tight text-white md:text-4xl">{guide.closingTitle}</h2>
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
