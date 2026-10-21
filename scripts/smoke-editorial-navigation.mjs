import fs from 'node:fs/promises';
import path from 'node:path';
import { parseHTML } from 'linkedom';
import { blogPosts } from '../src/data/blog-posts.ts';
import { blogEditorialSelection } from '../src/data/blog-editorial-selection.ts';
import { editorialNavigation, lisboaNavigation } from '../src/data/editorial-navigation.ts';

const origin = process.env.SMOKE_BASE_URL;
if (!origin) throw new Error('Set SMOKE_BASE_URL to the build or Preview being checked.');
const checks = [];
const check = (name, pass) => checks.push({ name, pass: Boolean(pass) });
const cache = new Map();
async function page(href) {
  const url = new URL(href, origin);
  const key = url.pathname + url.search;
  if (!cache.has(key)) cache.set(key, (async () => {
    const response = await fetch(new URL(key, origin), { redirect: 'manual' });
    return { status: response.status, document: parseHTML(await response.text()).document };
  })());
  return { ...await cache.get(key), url };
}

const selected = Object.values(blogEditorialSelection).flat();
for (const id of selected) check(`selection exists in article catalog: ${id}`, blogPosts.some((post) => post.id === id));
const targets = [...new Set([
  ...selected.map((id) => `/blog/${id}`), ...lisboaNavigation.map((link) => link.href),
  ...editorialNavigation.map((link) => link.href), '/calculadora-presupuesto-lisboa', '/free-tours-lisboa', '/comprar-entradas',
])];
for (const href of targets) {
  const { status, document, url } = await page(href);
  check(`direct 200 destination: ${href}`, status === 200);
  if (url.hash) check(`destination anchor exists: ${href}`, document.getElementById(url.hash.slice(1)));
  if (href.startsWith('/blog/')) {
    check(`selected article canonical: ${href}`, document.querySelector('link[rel=canonical]')?.getAttribute('href') === `https://estabaenlisboa.com${url.pathname}`);
    check(`selected article indexable: ${href}`, document.querySelector('meta[name=robots]')?.getAttribute('content') === 'index, follow');
  }
}
const { document: cover } = await page('/blog');
check('cover has one H1 and retains its SEO promise', cover.querySelectorAll('h1').length === 1 && cover.querySelector('h1').textContent.trim() === 'Guías de Lisboa y Portugal');
for (const id of ['lisboa', 'planea-tu-viaje', 'moverse', 'barrios', 'comer', 'historias', 'escapadas', 'catalogo']) check(`cover section target exists: ${id}`, cover.getElementById(id));
check('selected articles have crawlable links', selected.every((id) => cover.querySelector(`main a[href="/blog/${id}"]`)));
const nav = cover.querySelector('nav[aria-label="Navegación principal"]');
check('primary navigation exists', nav);
for (const control of nav?.querySelectorAll('[aria-controls]') || []) check(`navigation control has target: ${control.getAttribute('aria-controls')}`, cover.getElementById(control.getAttribute('aria-controls')));
for (const script of cover.querySelectorAll('script[type="application/ld+json"]')) {
  let valid = true;
  try { JSON.parse(script.textContent); } catch { valid = false; }
  check('cover schema parses', valid);
}
check('pagination remains linked', [...Array(7)].every((_, i) => cover.querySelector(`a[href="/blog?page=${i + 2}"]`)));
for (let number = 2; number <= 8; number++) {
  const { status, document } = await page(`/blog?page=${number}`);
  check(`archive page ${number} returns 200`, status === 200);
  check(`archive page ${number} canonical includes query`, document.querySelector('link[rel=canonical]')?.getAttribute('href') === `https://estabaenlisboa.com/blog?page=${number}`);
  check(`archive page ${number} title includes page`, document.querySelector('title')?.textContent.includes(`Página ${number}`));
  check(`archive page ${number} omits cover, keeps one H1`, !document.getElementById('barrios') && document.querySelectorAll('h1').length === 1);
}
const report = { origin, selectedArticles: selected.length, fetchedPages: cache.size, checks, failures: checks.filter((item) => !item.pass) };
if (process.env.SMOKE_EVIDENCE_DIR) {
  await fs.mkdir(process.env.SMOKE_EVIDENCE_DIR, { recursive: true });
  await fs.writeFile(path.join(process.env.SMOKE_EVIDENCE_DIR, 'editorial-navigation-report.json'), JSON.stringify(report, null, 2));
}
console.log(JSON.stringify({ checks: checks.length, failures: report.failures, selectedArticles: selected.length, fetchedPages: cache.size }));
process.exitCode = report.failures.length ? 1 : 0;
