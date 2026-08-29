import Link from 'next/link';
import type { ArticleHeading, ArticleLink } from './article-types';

type ArticleTocProps = {
  headings: ArticleHeading[];
  sidebarLinks: ArticleLink[];
  compactMobile?: boolean;
  showDiscovery?: boolean;
};

export function ArticleToc({
  headings,
  sidebarLinks,
  compactMobile = false,
  showDiscovery = true,
}: ArticleTocProps) {
  if (compactMobile) {
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
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className="block transition-colors py-1"
                  >
                    {heading.title}
                  </a>
                ))}
              </nav>
            </details>
            <div className="hidden lg:block">
              <p className="article-toc-label uppercase tracking-widest mb-4 pb-3 border-b border-border-soft">En este artículo</p>
              <nav className="space-y-2">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className="block transition-colors py-1"
                  >
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

  return (
    <aside className="article-toc space-y-10 lg:sticky lg:top-24 lg:self-start">
      {/* Tabla de contenidos */}
      {headings.length > 0 && (
        <div>
          <p className="article-toc-label uppercase tracking-widest mb-4 pb-3 border-b border-border-soft">En este artículo</p>
          <nav className="space-y-2">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className="block transition-colors py-1"
              >
                {heading.title}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* También te interesa */}
      {showDiscovery && (
        <>
          <div>
            <p className="article-toc-label uppercase tracking-widest mb-4 pb-3 border-b border-border-soft">También te interesa</p>
            <ul className="space-y-3">
              {sidebarLinks.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors">
                    {item.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mini CTA */}
          <div className="article-sidebar-cta card-surface p-5 border-l-2 border-gold">
            <p className="article-sidebar-cta-title">¿Primera vez en Lisboa?</p>
            <p className="article-sidebar-cta-text">Te ayudamos a planificar tu viaje 1:1</p>
            <Link
              href="/planifica-tu-viaje"
              className="btn-primary block w-full min-h-11 py-3"
            >
              Planifica tu viaje
            </Link>
          </div>
        </>
      )}
    </aside>
  );
}
