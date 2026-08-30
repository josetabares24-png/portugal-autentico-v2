import Link from 'next/link';
import type { ReactNode } from 'react';

type ArticleFooterProps = {
  authorName: string;
  beforeAuthor?: ReactNode;
};

export function ArticleFooter({
  authorName,
  beforeAuthor,
}: ArticleFooterProps) {
  return (
    <>
      {/* CTA final */}
      <div className="article-cta article-cta-compact article-reading relative bg-night bg-azulejo-pattern-gold text-center overflow-hidden">
        <h3 className="relative text-white">
          ¿Quieres ayuda para ordenar tu viaje?
        </h3>
        <p className="relative text-white/70">
          Podemos revisar tu ruta y resolver las decisiones que más tiempo te están quitando.
        </p>
        <Link
          href="/planifica-tu-viaje"
          className="btn-primary article-cta-button relative inline-flex min-h-11 px-8 py-3 text-sm"
        >
          Planifica tu viaje
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
