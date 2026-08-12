import Image from 'next/image';
import Link from 'next/link';
import type { Article } from './article-types';

type ArticleHeroProps = {
  article: Article;
  authorName: string;
  heroImage: string;
  heroImageAlt?: string;
  isEditorialV2: boolean;
};

export function ArticleHero({
  article,
  authorName,
  heroImage,
  heroImageAlt,
  isEditorialV2,
}: ArticleHeroProps) {
  return (
    <>
      {/* Breadcrumb minimalista */}
      <div className="border-b border-border-soft">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="article-breadcrumb flex items-center gap-2">
            <Link href="/" className="hover:text-terracotta transition-colors">Inicio</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-terracotta transition-colors">Blog</Link>
            <span>›</span>
            <span className="font-semibold text-text-main">{article.categoria}</span>
          </nav>
        </div>
      </div>

      {/* Header editorial */}
      <header className="article-header max-w-6xl mx-auto px-4 pt-8 pb-5">
        <div className="grid lg:grid-cols-[1fr,320px] gap-10">
          <div className="article-header-content min-w-0">
            {/* Categoría + meta */}
            <p className="article-meta uppercase tracking-widest mb-3">
              {article.categoria} &mdash; {article.fecha}
              {article.fechaActualizacion ? <> &mdash; {article.fechaActualizacion}</> : null}
              {' '}&mdash; {article.minutos} min lectura &mdash; Por {authorName}
            </p>

            {/* Título */}
            <h1 className="article-title font-display text-text-main mb-5">
              {article.titulo}
            </h1>

            {/* Lead */}
            <p className="article-description mb-0 pb-5 border-b border-border-soft">
              {article.subtitulo ?? article.descripcion}
            </p>
          </div>
        </div>
      </header>

      {/* Fotografía de portada: es el LCP, por eso va con priority */}
      {isEditorialV2 && heroImageAlt && (
        <figure className="article-hero max-w-6xl mx-auto px-4">
          <div className="article-hero-frame">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              className="article-hero-img"
              sizes="(max-width: 1024px) 100vw, 1152px"
              priority
              fetchPriority="high"
            />
          </div>
        </figure>
      )}
    </>
  );
}
