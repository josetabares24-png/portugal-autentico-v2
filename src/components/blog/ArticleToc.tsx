import type { ArticleHeading } from './article-types';

type ArticleTocProps = {
  headings: ArticleHeading[];
};

export function ArticleToc({ headings }: ArticleTocProps) {
  return (
    <aside className="article-toc order-first lg:order-none lg:sticky lg:top-24 lg:self-start">
      {headings.length > 0 && (
        <>
          <details className="article-toc-compact lg:hidden">
            <summary>
              <span>En este artículo</span>
              <span className="article-toc-compact-icon" aria-hidden="true">+</span>
            </summary>
            <nav className="space-y-2">
              {headings.map((heading) => (
                <a key={heading.id} href={`#${heading.id}`} className="block transition-colors py-1">
                  {heading.title}
                </a>
              ))}
            </nav>
          </details>
          <div className="hidden lg:block">
            <p className="article-toc-label uppercase tracking-widest mb-4 pb-3 border-b border-border-soft">En este artículo</p>
            <nav className="space-y-2">
              {headings.map((heading) => (
                <a key={heading.id} href={`#${heading.id}`} className="block transition-colors py-1">
                  {heading.title}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </aside>
  );
}
