import Link from 'next/link';
import type { ReactNode } from 'react';
import type { ArticleCta } from './article-types';

type ArticleFooterProps = {
  authorName: string;
  finalCta: ArticleCta;
  compactPlanning?: boolean;
  beforeAuthor?: ReactNode;
};

export function ArticleFooter({
  authorName,
  finalCta,
  compactPlanning = false,
  beforeAuthor,
}: ArticleFooterProps) {
  const cta = compactPlanning
    ? {
        href: '/planifica-tu-viaje',
        label: 'Planifica tu viaje',
        title: '¿Quieres ayuda para ordenar tu viaje?',
        text: 'Podemos revisar tu ruta y resolver las decisiones que más tiempo te están quitando.',
      }
    : finalCta;

  return (
    <>
      {/* CTA final */}
      <div className={`article-cta article-reading relative bg-night bg-azulejo-pattern-gold text-center overflow-hidden${compactPlanning ? ' article-cta-compact' : ''}`}>
        <h3 className="relative text-white">
          {cta.title}
        </h3>
        <p className="relative text-white/70">
          {cta.text}
        </p>
        <Link
          href={cta.href}
          className="btn-primary article-cta-button relative inline-flex min-h-11 px-8 py-3 text-sm"
        >
          {cta.label}
        </Link>
      </div>

      {beforeAuthor}

      {/* Sobre el autor */}
      <div className="article-author article-reading border-t border-border-soft flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta font-display italic text-xl flex-shrink-0">
          JT
        </div>
        <div>
          <p className="article-author-name">Escrito por {authorName}</p>
          <p className="article-author-bio">
            Vivo en Lisboa y escribo estas guías combinando experiencia propia con investigación y fuentes oficiales.{' '}
            <Link href="/sobre-nosotros">Más sobre mí</Link>
            {' · '}
            <a
              href="https://instagram.com/estabaenlisboa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
