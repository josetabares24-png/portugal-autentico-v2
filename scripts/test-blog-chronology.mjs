import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Prueba compatible con Node 20: lee el catálogo fuente sin intentar cargar
// directamente un módulo TypeScript en el runner de GitHub.
const source = readFileSync('src/data/blog-posts.ts', 'utf8');
const home = readFileSync('src/components/home/GrokHome.tsx', 'utf8');
const archive = readFileSync('src/app/[locale]/blog/BlogClient.tsx', 'utf8');
const blogPage = readFileSync('src/app/[locale]/blog/page.tsx', 'utf8');

const matches = [...source.matchAll(/^\s*id: '([^']+)',[\s\S]*?^\s*fecha: '([^']+)'/gm)];
const articles = matches.map((match, i) => ({
  id: match[1], fecha: match[2], index: i,
}));
const months = { ene: 1, feb: 2, mar: 3, abr: 4, may: 5, jun: 6,
  jul: 7, ago: 8, sep: 9, oct: 10, nov: 11, dic: 12 };
function publicationDate(fecha) {
  const match = fecha.trim().toLowerCase().match(/^(\d{1,2})\s+([a-záéíóú]+)\s+(\d{4})$/);
  if (!match || !months[match[2]]) return null;
  const year = Number(match[3]), month = months[match[2]], day = Number(match[1]);
  const result = new Date(Date.UTC(year, month - 1, day));
  if (result.getUTCFullYear() !== year || result.getUTCMonth() !== month - 1 || result.getUTCDate() !== day) return null;
  return result.toISOString().slice(0, 10);
}

assert.ok(articles.length >= 60, 'El catálogo debe conservar todas las publicaciones.');
assert.equal(new Set(articles.map(a => a.id)).size, articles.length, 'No hay artículos duplicados.');
const dated = articles.map(article => ({ ...article, published: publicationDate(article.fecha) }));
assert.ok(dated.every(a => a.published), 'Todas las fechas de publicación deben ser válidas.');
const chronological = [...dated].sort((a,b) =>
  b.published.localeCompare(a.published) || a.index - b.index);
assert.equal(chronological[0].id, 'paseo-en-velero-lisboa-lisbon-byboat', 'Lisbon ByBoat debe ser la publicación más reciente.');
assert.equal(chronological[0].published, '2026-10-27');
assert.deepEqual(chronological.slice(1, 3).map(a=>a.id),
  ['lisboa-en-enero', 'quinta-da-regaleira-entradas'], 'Deben seguir los artículos del 25 de octubre.');
assert.ok(source.includes('export const blogPostsByDate: BlogPost[]'), 'Debe existir un orden editorial único.');
assert.ok(source.includes('toIsoEditorialDate(post.fecha)'), 'Ordenar por fecha de publicación, no por modificación.');
assert.ok(source.includes('a.index - b.index'), 'Las fechas iguales deben conservar su orden.');
assert.ok(home.includes('blogPostsByDate.slice(0, 5)'), 'La Home muestra las últimas cinco publicaciones.');
assert.ok(!home.includes('const picks ='), 'No hay portada manual desactualizada.');
assert.ok(archive.includes('? blogPostsByDate') && archive.includes('blogPostsByDate.filter'), 'Archivo y filtros usan el mismo orden.');
assert.ok(archive.indexOf('Últimos artículos') < archive.indexOf('Explorar por temas'), 'La cronología aparece antes de las secciones temáticas.');
assert.ok(blogPage.includes('blogPostsByDate.map((post)'), 'El JSON-LD sigue el mismo orden.');
assert.ok(blogPage.includes('toIsoEditorialDate(post.fecha)'), 'El schema conserva datePublished auténtico.');
console.log('Cronología OK:', dated.length, 'artículos. Más reciente:', chronological[0].id, chronological[0].published);
