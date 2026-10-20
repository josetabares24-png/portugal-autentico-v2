import policy from '@/data/seo-url-policy.json';

const destinationBySource = new Map(
  policy.redirects.map(({ source, destination }) => [source, destination]),
);
const noindexPaths = new Set(policy.noindexPaths);
const siteOrigin = 'https://estabaenlisboa.com';

/** Resolve only explicitly approved migrations, preserving query and fragment. */
export function resolveInternalHref(href: string): string {
  const match = href.match(/^(https?:\/\/(?:www\.)?estabaenlisboa\.com)?(\/[^?#]*)([?#].*)?$/);
  if (!match) return href;

  const path = match[2].replace(/\/+$/, '') || '/';
  const destination = destinationBySource.get(path);
  if (!destination) return href;

  return `${match[1] ? siteOrigin : ''}${destination}${match[3] ?? ''}`;
}

/** Exact page policy: a noindex hub must not suppress its child pages. */
export function isExcludedFromSitemap(path: string): boolean {
  return noindexPaths.has(path) || destinationBySource.has(path);
}
