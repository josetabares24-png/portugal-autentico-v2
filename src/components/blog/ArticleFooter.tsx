import Link from 'next/link';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import { PLAN_PRICE_FROM } from '@/lib/commercial-config';
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
        <TrackedInternalLink
          href="/planifica-tu-viaje"
          contentType="article_footer_cta"
          contentId="planifica_tu_viaje"
          className="btn-primary article-cta-button relative inline-flex min-h-11 px-8 py-3 text-sm"
        >
          Planifica tu viaje
        </TrackedInternalLink>
        {/* Mismo criterio que /planifica-tu-viaje: el precio solo se muestra si
            NEXT_PUBLIC_PLAN_PRICE_FROM está definido; si no, no se inventa. */}
        {PLAN_PRICE_FROM && (
          <p className="relative mt-3 text-xs text-white/60">Desde {PLAN_PRICE_FROM}</p>
        )}
      </div>

      {beforeAuthor}

      {/* Sobre el autor */}
      <div className="article-author article-reading border-t border-border-soft">
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
