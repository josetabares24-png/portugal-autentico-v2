import Image from 'next/image';
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
      {beforeAuthor}

      {/* Sobre el autor */}
      <div className="article-author article-reading flex items-start gap-3.5 border-t border-border-soft">
        <Image
          src="/images/jose/jose-tabares-avatar.jpg"
          alt="José Tabares"
          width={44}
          height={44}
          className="mt-0.5 h-11 w-11 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
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
