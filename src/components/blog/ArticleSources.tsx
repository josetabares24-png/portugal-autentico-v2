import type { ArticleSource } from './article-types';

type ArticleSourcesProps = {
  sources: ArticleSource[];
  compactMobile?: boolean;
};

const SourceList = ({ sources }: { sources: ArticleSource[] }) => (
  <ul>
    {sources.map((source) => (
      <li key={source.href}>
        <a href={source.href} target="_blank" rel="noopener noreferrer">
          {source.label}
        </a>
      </li>
    ))}
  </ul>
);

export function ArticleSources({ sources, compactMobile = false }: ArticleSourcesProps) {
  if (compactMobile) {
    return (
      <>
        <details className="article-sources article-sources-compact article-reading lg:hidden">
          <summary>
            <span>Fuentes consultadas ({sources.length})</span>
            <span className="article-sources-icon" aria-hidden="true">+</span>
          </summary>
          <SourceList sources={sources} />
        </details>
        <section className="article-sources article-reading hidden lg:block">
          <h3>Fuentes oficiales consultadas</h3>
          <SourceList sources={sources} />
        </section>
      </>
    );
  }

  return (
    <section className="article-sources article-reading">
      <h3>Fuentes oficiales consultadas</h3>
      <SourceList sources={sources} />
    </section>
  );
}
