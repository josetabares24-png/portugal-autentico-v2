import Link from 'next/link';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import { resolveInternalHref } from '@/lib/seo-url-policy';
import type { ArticleLink } from './article-types';

export function ArticleEditorialLinks({ links }: { links: ArticleLink[] }) {
  const destinations = new Set<string>();
  const uniqueLinks = links.filter((link) => {
    const destination = resolveInternalHref(link.href);
    if (destinations.has(destination)) return false;
    destinations.add(destination);
    return true;
  });
  if (uniqueLinks.length === 0) return null;

  return (
    <nav aria-label="También te puede servir" className="article-reading max-w-2xl mx-auto mt-8">
      <p className="font-semibold mb-3">También te puede servir</p>
      <ul className="space-y-2">
        {uniqueLinks.map((link) => (
          <li key={link.href}>
            <TrackedInternalLink
              href={resolveInternalHref(link.href)}
              contentType="article_editorial_link"
              contentId={link.href}
              className="underline underline-offset-4 break-words"
            >
              {link.label}
            </TrackedInternalLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
