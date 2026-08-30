import type { ArticleSource } from './article-types';

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

export function ArticleSources({ sources }: { sources: ArticleSource[] }) {
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
