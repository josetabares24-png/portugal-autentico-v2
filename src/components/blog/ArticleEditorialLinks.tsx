import Link from 'next/link';
import type { ArticleLink } from './article-types';

export function ArticleEditorialLinks({ links }: { links: ArticleLink[] }) {
  if (links.length === 0) return null;

  return (
    <nav aria-label="También te puede servir" className="article-reading max-w-2xl mx-auto mt-8">
      <p className="font-semibold mb-3">También te puede servir</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="underline underline-offset-4 break-words">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
