import fs from 'node:fs/promises';
import path from 'node:path';
import { parseHTML } from 'linkedom';
import { blogPosts } from '../src/data/blog-posts.ts';
import { blogEditorialSelection } from '../src/data/blog-editorial-selection.ts';
import { editorialNavigation, lisboaNavigation, bookingNavigation, primaryNavigation } from '../src/data/editorial-navigation.ts';
import { latestHomeArticles } from '../src/lib/home-latest-articles.ts';

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
  ...editorialNavigation.map((link) => link.href), ...bookingNavigation.map((link) => link.href), '/calculadora-presupuesto-lisboa', '/free-tours-lisboa', '/comprar-entradas',
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
const navLink = (label) => [...nav.querySelectorAll('a')].find((link) => link.textContent.trim() === label);
check('guides and planning open distinct pages', navLink('Guías e historias')?.getAttribute('href') === '/blog' && navLink('Planifica')?.getAttribute('href') === '/planifica-tu-viaje');
check('four primary navigation sections', primaryNavigation.length === 4 && primaryNavigation.map((item) => item.label).join('|') === 'Lisboa|Escapadas|Planifica|Entradas y tours');
check('four desktop primary controls', nav.querySelectorAll('[data-navigation-layout="desktop"] [data-primary-nav]').length === 4);
check('four mobile primary controls', nav.querySelectorAll('#editorial-mobile-links [data-primary-nav]').length === 4);
check('planning opens its existing page', navLink('Planifica')?.getAttribute('href') === '/planifica-tu-viaje');
check('tickets accessible from both navigation layouts', [...nav.querySelectorAll('a[href="/comprar-entradas"]')].filter((link) => link.textContent.trim() === 'Entradas').length === 2);
check('free tours accessible from both grouped navigation layouts', [...nav.querySelectorAll('a[href="/free-tours-lisboa"]')].filter((link) => link.textContent.trim() === 'Free tours').length === 2 && bookingNavigation.some((link) => link.href === '/free-tours-lisboa'));
check('tickets and free tours share the desktop group', nav.querySelector('#experiencias-desktop-links a[href="/comprar-entradas"]') && nav.querySelector('#experiencias-desktop-links a[href="/free-tours-lisboa"]'));
for (const href of ['/planifica-tu-viaje', '/comprar-entradas']) {
  const { document } = await page(href);
  check(`functional destination retains noindex, follow: ${href}`, document.querySelector('meta[name=robots]')?.getAttribute('content') === 'noindex, follow');
}
const { document: trips } = await page('/portugal');
check('Escapadas opens with a destination photograph', trips.querySelector('main img')?.getAttribute('alt') === 'Palacio da Pena en Sintra, Portugal');
check('Escapadas has no author portrait in main or social cover', ![...trips.querySelectorAll('main img, meta[property="og:image"], meta[name="twitter:image"]')].some((image) => /jose-tabares-oporto/.test(image.getAttribute('src') || image.getAttribute('content') || '')));
const { document: home } = await page('/');
check('home retains one H1 and its brand promise', home.querySelectorAll('h1').length === 1 && home.querySelector('h1')?.textContent.trim() === 'La Lisboa que le enseño a quien viene a verme.');
check('home retains its canonical', home.querySelector('link[rel=canonical]')?.getAttribute('href') === 'https://estabaenlisboa.com');
const homeSections = [...home.querySelectorAll('main section')];
check('home practical guides precede reservations', homeSections.indexOf(home.getElementById('guia-practica')) >= 0 && homeSections.indexOf(home.getElementById('guia-practica')) < homeSections.indexOf(home.querySelector('section[aria-labelledby=imprescindibles]')));
const homePortals = [...home.querySelectorAll('nav[aria-label="Guías completas para preparar Lisboa"] a')];
check('home retains eight direct guide destinations', homePortals.length === 8 && new Set(homePortals.map((link) => link.getAttribute('href'))).size === 8);
for (const link of homePortals) {
  const href = link.getAttribute('href');
  const destination = await page(href);
  check(`home guide opens directly: ${href}`, destination.status === 200);
}
check('home retains a visible author destination', home.querySelector('main a[href="/sobre-nosotros"]'));
check('home has a seasonal selection using existing guides', home.querySelectorAll('section[aria-labelledby=home-seasonal-title] a[href^="/blog/"]').length >= 2);
check('home preserves internal free tour access', home.querySelector('main a[href="/free-tours-lisboa"]'));
const latest = latestHomeArticles(blogPosts);
const news = home.querySelector('section[aria-labelledby="articulos-sugeridos"]');
check('home identifies its latest-publication section', news?.querySelector('h2')?.textContent.trim() === 'Lo último del blog');
check('home contains exactly three latest published articles', news?.querySelectorAll('article').length === latest.length && latest.length === 3);
check('home news uses catalog publication dates and destinations', latest.every((post) => news?.querySelector(`article a[href="/blog/${post.id}"]`) && [...news.querySelectorAll('time')].some((time) => time.textContent.trim() === post.fecha)));
for (const script of home.querySelectorAll('script[type="application/ld+json"]')) {
  let valid = true;
  try { JSON.parse(script.textContent); } catch { valid = false; }
  check('home schema parses', valid);
}
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
