'use client';

import { useEffect, useState } from 'react';
import type { ArticleHeading } from './article-types';
import styles from './ArticleToc.module.css';

type ArticleTocProps = {
  headings: ArticleHeading[];
};

export function ArticleToc({ headings }: ArticleTocProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const update = () => setOpen(desktop.matches);
    update();
    desktop.addEventListener('change', update);
    return () => desktop.removeEventListener('change', update);
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="article-toc order-first lg:order-none lg:sticky lg:top-24 lg:self-start">
      <details className={`article-toc-compact ${styles.toc}`} open={open} onToggle={(event) => setOpen(event.currentTarget.open)}>
        <summary className={styles.summary}>
          <span>En este artículo</span>
          <span className="article-toc-compact-icon" aria-hidden="true">+</span>
        </summary>
        <nav className="space-y-2" aria-label="Índice del artículo">
          {headings.map((heading) => (
            <a key={heading.id} href={`#${heading.id}`} className="block transition-colors py-1">
              {heading.title}
            </a>
          ))}
        </nav>
      </details>
    </aside>
  );
}
