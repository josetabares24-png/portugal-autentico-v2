import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { blogPosts, blogPostsByDate } from '../src/data/blog-posts.ts';
import { toIsoEditorialDate } from '../src/lib/editorial-date.ts';

// Publicación, nunca fecha de actualización. Sin inventar fechas.
assert.ok(blogPosts.length >= 60, 'El catálogo debe conservar todos los artículos.');
assert.equal(new Set(blogPosts.map(p => p.id)).size, blogPosts.length, 'No hay slugs repetidos.');
const dated = blogPosts.map((post, i) => ({
  post, index: i, published: toIsoEditorialDate(post.fecha),
}));
assert.ok(dated.every(p => p.published), 'Cada artículo debe tener una fecha de publicación legible.');
const expected = [...dated]
  .sort((a,b) => b.published.localeCompare(a.published) || a.index - b.index)
  .map(x => x.post.id);
assert.deepEqual(blogPostsByDate.map(p => p.id), expected, 'Más reciente primero; empates estables.');
assert.equal(blogPostsByDate[0].id, 'paseo-en-velero-lisboa-lisbon-byboat', 'Lisbon ByBoat es el último artículo.');
assert.equal(toIsoEditorialDate(blogPostsByDate[0].fecha), '2026-10-27');
assert.equal(blogPostsByDate[0].dateModified, '2026-10-31', 'Una actualización no cambia el orden.');
const home = readFileSync('src/components/home/GrokHome.tsx', 'utf8');
const archive = readFileSync('src/app/[locale]/blog/BlogClient.tsx', 'utf8');
const blogPage = readFileSync('src/app/[locale]/blog/page.tsx', 'utf8');
assert.ok(home.includes('blogPostsByDate.slice(0, 5)'), 'La Home muestra las cinco últimas publicaciones.');
assert.ok(!home.includes('const picks ='), 'No hay una selección manual que se quede desactualizada.');
assert.ok(archive.includes('? blogPostsByDate') && archive.includes('blogPostsByDate.filter'), 'El blog y los filtros usan orden cronológico.');
assert.ok(archive.indexOf('Últimos artículos') < archive.indexOf('Explorar por temas'), 'El catálogo cronológico aparece antes de las guías por tema.');
assert.ok(blogPage.includes('blogPostsByDate.map((post)'), 'El JSON-LD sigue el orden de publicación.');
assert.ok(blogPage.includes('toIsoEditorialDate(post.fecha)'), 'El schema conserva datePublished auténtico.');
console.log('Cronología OK:', blogPosts.length, 'artículos, primer artículo:', blogPostsByDate[0].id);
