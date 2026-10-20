import type { ArticleSource } from './article-types';
import { deduplicateArticleSources, formatSourceVerificationDate } from '@/lib/article-sources';
import styles from './ArticleSources.module.css';

type ArticleSourcesProps = {
  sources: ArticleSource[];
  /** Explicit verification date in YYYY-MM-DD; never inferred from a publication/update. */
  verifiedDate?: string;
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

export function ArticleSources({ sources, verifiedDate }: ArticleSourcesProps) {
  const uniqueSources = deduplicateArticleSources(sources);
  if (uniqueSources.length === 0) return null;

  const primarySources = uniqueSources.slice(0, 5);
  const otherSources = uniqueSources.slice(5);
  const verificationDate = formatSourceVerificationDate(verifiedDate);

  return (
    <details className={`article-sources article-sources-compact article-reading ${styles.sources}`}>
      <summary>
        <span className={styles.summaryText}>
          <span>Datos verificados ({uniqueSources.length})</span>
          {verificationDate && <time className={styles.reviewDate} dateTime={verifiedDate}>Verificado el {verificationDate}</time>}
        </span>
        <span className="article-sources-icon" aria-hidden="true">+</span>
      </summary>
      <SourceList sources={primarySources} />
      {otherSources.length > 0 && (
        <details className={styles.moreSources}>
          <summary>
            <span>Ver todas las fuentes ({uniqueSources.length})</span>
            <span aria-hidden="true">+</span>
          </summary>
          <SourceList sources={otherSources} />
        </details>
      )}
    </details>
  );
}
