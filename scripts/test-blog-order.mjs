import assert from 'node:assert/strict';
import { blogPosts, blogPostsByDate, blogPublishedTime } from '../src/data/blog-posts.ts';
import { toIsoEditorialDate } from '../src/lib/editorial-date.ts';

// Todas las fechas de publicación se pueden leer con el mismo parser del JSON-LD.
const ilegibles = blogPosts.filter((post) => !toIsoEditorialDate(post.fecha)).map((post) => `${post.id}: "${post.fecha}"`);
assert.deepEqual(ilegibles, [], `Fechas ilegibles: ${ilegibles.join(', ')}`);

// Misma lista, sin perder ni duplicar artículos.
assert.equal(blogPostsByDate.length, blogPosts.length);
assert.deepEqual(new Set(blogPostsByDate.map((p) => p.id)), new Set(blogPosts.map((p) => p.id)));

// De más nuevo a más antiguo.
for (let i = 1; i < blogPostsByDate.length; i += 1) {
  const prev = blogPostsByDate[i - 1];
  const cur = blogPostsByDate[i];
  assert.ok(blogPublishedTime(prev) >= blogPublishedTime(cur), `${prev.id} (${prev.fecha}) va antes que ${cur.id} (${cur.fecha})`);
}
console.log(`Blog order: ${blogPostsByDate.length} artículos de más nuevo a más antiguo; 0 fechas ilegibles.`);
