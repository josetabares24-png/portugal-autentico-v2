import type { BlogPost } from '../data/blog-posts';
import { toIsoEditorialDate } from './editorial-date';
import { isExcludedFromSitemap } from './seo-url-policy';

type Options = { limit?: number; today?: string };

/** Publication date determines recency; updating an old guide does not republish it. */
export function latestHomeArticles(posts: readonly BlogPost[], {
  limit = 3,
  today = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Lisbon', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date()),
}: Options = {}): BlogPost[] {
  return posts
    .map((post, order) => ({ post, order, published: toIsoEditorialDate(post.fecha) }))
    .filter(({ post, published }) => Boolean(published && published <= today) &&
      !isExcludedFromSitemap(`/blog/${post.id}`))
    .sort((a, b) => b.published!.localeCompare(a.published!) || a.order - b.order)
    .slice(0, Math.max(0, Math.floor(limit)))
    .map(({ post }) => post);
}
