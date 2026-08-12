import Link from 'next/link';
import type { ArticleCta } from './article-types';

type ArticleFooterProps = {
  authorName: string;
  finalCta: ArticleCta;
};

export function ArticleFooter({ authorName, finalCta }: ArticleFooterProps) {
  return (
    <>
      {/* CTA final */}
      <div className="article-cta article-reading relative bg-night bg-azulejo-pattern-gold text-center overflow-hidden">
        <h3 className="relative text-white">
          {finalCta.title}
        </h3>
        <p className="relative text-white/70">
          {finalCta.text}
        </p>
        <Link
          href={finalCta.href}
          className="btn-primary article-cta-button relative inline-flex min-h-11 px-8 py-3 text-sm"
        >
          {finalCta.label}
        </Link>
      </div>

      {/* Sobre el autor */}
      <div className="article-author article-reading border-t border-border-soft flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta font-display italic text-xl flex-shrink-0">
          JT
        </div>
        <div>
          <p className="article-author-name">Escrito por {authorName}</p>
          <p className="article-author-bio">
            Vivo en Lisboa y pruebo cada ruta, restaurante y actividad antes de recomendarla.{' '}
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
