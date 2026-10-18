import type { ArticleSource } from '@/components/blog/article-types';

/** Merge only identical URLs, retaining every distinct label and its context. */
export function deduplicateArticleSources(sources: ArticleSource[]): ArticleSource[] {
  const byHref = new Map<string, { href: string; labels: string[] }>();

  for (const source of sources) {
    const existing = byHref.get(source.href);
    if (existing) {
      if (!existing.labels.includes(source.label)) existing.labels.push(source.label);
    } else {
      byHref.set(source.href, { href: source.href, labels: [source.label] });
    }
  }

  return [...byHref.values()].map(({ href, labels }) => ({ href, label: labels.join(' · ') }));
}

/** Format an explicit verification date; modification/publication dates are not inferred. */
export function formatSourceVerificationDate(value?: string): string | undefined {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;

  const date = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) return undefined;

  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
