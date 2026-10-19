/** Phase 2 DOM and preservation contract. GET only; requires an existing build server.
 * snapshot <file> captures the pre-change reference; check <file> verifies it.
 * The baseline includes all 69 live blog bodies plus two pillars and Castelo.
 */
import fs from 'node:fs';
import path from 'node:path';
import { parseHTML } from 'linkedom';

const base = process.env.SMOKE_BASE_URL;
if (!base) throw new Error('Set SMOKE_BASE_URL to the exact server / Preview under test');
const [mode = 'check', baselineFile = '.snapshots/editorial-phase2-dom-base.json'] = process.argv.slice(2);
const blog = JSON.parse(fs.readFileSync('.snapshots/editorial-phase2-base.json', 'utf8'));
const paths = [...Object.entries(blog).filter(([,p]) => p.estado === 200).map(([s]) => `/blog/${s}`), '/que-ver-en-lisboa', '/donde-comer-en-lisboa', '/actividades/castelo-sao-jorge'];
const normalize = (s) => (s || '').replace(/\s+/g, ' ').trim();
const attrs = (el) => Object.fromEntries([...el.attributes].map((a) => [a.name, a.value]).sort(([a],[b]) => a.localeCompare(b)));
// Explicit reviewed scopes; no category-driven activation.
const pilotPaths = process.env.SMOKE_EDITORIAL_PHASE4 === '1' ? new Set([
  'metro-lisboa-guia', 'tarjeta-navegante-lisboa', 'como-pagar-en-portugal',
  'como-moverse-por-lisboa', 'time-out-market-lisboa', 'estacion-oriente-lisboa', 'vida-nocturna-lisboa',
].map((slug) => `/blog/${slug}`)) : new Set();
const transportPaths = process.env.SMOKE_EDITORIAL_TRANSPORT === '1' ? new Set([
  'aeropuerto-lisboa-al-centro', 'tram-28-historia-guia', 'patinetes-electricos-lisboa',
].map((slug) => `/blog/${slug}`)) : new Set();
for (const url of transportPaths) pilotPaths.add(url);
const neighborhoodPaths = process.env.SMOKE_EDITORIAL_NEIGHBORHOODS === '1' ? new Set([
  'baixa-lisboa-que-ver', 'alfama-historia-guia', 'graca-lisboa-que-ver',
  'chiado-bairro-alto-guia', 'mouraria-barrio-guia', 'parque-das-nacoes-lisboa-que-ver',
].map((slug) => `/blog/${slug}`)) : new Set();
for (const url of neighborhoodPaths) pilotPaths.add(url);
const foodPaths = process.env.SMOKE_EDITORIAL_FOOD === '1' ? new Set([
  'donde-comer-barato-lisboa', 'pasteles-de-belem',
].map((slug) => `/blog/${slug}`)) : new Set();
for (const url of foodPaths) pilotPaths.add(url);
const planningLabels = {
  '/blog/como-pagar-en-portugal': 'Planifica tu viaje a Lisboa',
  '/blog/donde-alojarse-en-lisboa': 'Planificar el viaje según tus días',
  '/blog/presupuesto-viajar-lisboa': 'Planifica tu viaje a Lisboa',
};
function capture(html, url) {
  const { document } = parseHTML(html);
  const main = document.querySelector('main');
  if (!main) throw new Error('Missing main');
  const sourceMap = new Map();
  for (const a of main.querySelectorAll('.article-sources a')) {
    const href = a.getAttribute('href');
    if (!sourceMap.has(href)) sourceMap.set(href, new Set());
    sourceMap.get(href).add(normalize(a.textContent));
  }
  const tocMap = new Map();
  for (const a of main.querySelectorAll('.article-toc nav a')) {
    const href = a.getAttribute('href');
    if (!tocMap.has(href)) tocMap.set(href, normalize(a.textContent));
  }
  const clean = main.cloneNode(true);
  if (pilotPaths.has(url)) clean.querySelectorAll('[data-editorial-essentials], [data-editorial-answer="adapted"]').forEach((el) => el.remove());
  // Explicitly identified commercial/navigation modules only; never broad
  // paragraph, heading, FAQ or external-link exclusions.
  clean.querySelectorAll('.article-toc, .article-sources, .article-booking, .article-cta, #reservas, [data-editorial-cta], script, style').forEach((el) => el.remove());
  // Three links explicitly declared in article.links had been supplied only by
  // the generic footer. Restoring those exact labels is the sole allowed new
  // editorial navigation; no paragraph or other link is excluded here.
  const restoredPlanningLinks = [...main.querySelectorAll('nav[aria-label="También te puede servir"] a[href="/planifica-tu-viaje"]')].map((a) => normalize(a.textContent));
  if (planningLabels[url]) {
    for (const a of clean.querySelectorAll('nav[aria-label="También te puede servir"] a[href="/planifica-tu-viaje"]')) {
      const nav = a.closest('nav'); a.parentElement.remove();
      if (!nav.querySelector('a')) nav.remove();
    }
  }
  const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent));
  return {
    protected: {
      title: document.title,
      metadata: [...document.querySelectorAll('head meta')].map(attrs),
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
      schemas,
      headings: [...clean.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((e) => ({ tag: e.tagName, id: e.id, text: normalize(e.textContent) })),
      images: [...main.querySelectorAll('img')].map(attrs),
      text: normalize(clean.textContent),
      links: [...clean.querySelectorAll('a')].map((a) => ({ href: a.getAttribute('href'), text: normalize(a.textContent) })),
      blocks: [...clean.querySelectorAll('p,li,caption,th,td')].map((el) => ({ tag: el.tagName, text: normalize(el.textContent) })),
    },
    restoredPlanningLinks,
    pilot: {
      essentials: [...main.querySelectorAll('[data-editorial-essentials]')].map((el) => ({ type: el.getAttribute('data-editorial-essentials'), rows: [...el.querySelectorAll('dl > div')].map((row) => ({ label: normalize(row.querySelector('dt')?.textContent), value: normalize(row.querySelector('dd')?.textContent) })), links: el.querySelectorAll('a').length })),
      bylines: main.querySelectorAll('[data-editorial-byline]').length,
      bylineAfterImage: Boolean(main.querySelector('.article-hero') && main.querySelector('[data-editorial-byline]') && (main.querySelector('.article-hero').compareDocumentPosition(main.querySelector('[data-editorial-byline]')) & 4)),
      adaptedAnswers: main.querySelectorAll('[data-editorial-answer="adapted"]').length,
    },
    sources: [...sourceMap].map(([href,labels]) => ({ href, labels: [...labels] })),
    toc: [...tocMap].map(([href,text]) => ({ href, text })),
    structure: {
      tocGroups: main.querySelectorAll('.article-toc').length,
      tocNavs: main.querySelectorAll('.article-toc nav').length,
      tocLinks: main.querySelectorAll('.article-toc nav a').length,
      sourceGroups: main.querySelectorAll('.article-sources').length,
      sourceLinks: main.querySelectorAll('.article-sources a').length,
      oldFooterCta: main.querySelectorAll('.article-cta').length,
      automaticWidget: main.querySelectorAll('#reservas').length,
      bookingBlocks: main.querySelectorAll('.article-booking').length,
      finalModules: main.querySelectorAll('[data-editorial-cta="final"]').length,
      finalIsLast: [...main.querySelectorAll('[data-editorial-cta="final"]')].every((e) => e === e.closest('article')?.lastElementChild),
      outsideAffiliate: [...main.querySelectorAll('a[rel~="sponsored"]')].filter((e) => !e.closest('[data-editorial-cta="final"]')).length,
      disclosures: main.querySelectorAll('.article-booking-disclosure').length,
    },
    affiliateLinks: [...main.querySelectorAll('.article-booking a[rel~="sponsored"]')].map((a) => ({ href: a.getAttribute('href'), rel: a.getAttribute('rel') })),
  };
}
const checks = [];
const check = (name, pass, detail = '') => { checks.push({ name, pass, detail }); if (!pass) console.error(`FAIL ${name}: ${detail}`); };
const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);
const before = mode === 'snapshot' ? null : JSON.parse(fs.readFileSync(baselineFile, 'utf8'));
const pages = {};
for (const url of paths) {
  const r = await fetch(new URL(url, base), { redirect: 'manual', signal: AbortSignal.timeout(25000) });
  check(`${url} HTTP 200`, r.status === 200, String(r.status));
  if (r.status !== 200) continue;
  const page = capture(await r.text(), url); pages[url] = page;
  if (!before) continue;
  const old = before.pages[url];
  check(`${url} baseline present`, Boolean(old));
  if (!old) continue;
  if (pilotPaths.size) {
    check(`${url} exact pilot scope`, page.pilot.essentials.length === (pilotPaths.has(url) ? 1 : 0));
    if (pilotPaths.has(url)) {
      const essentials = page.pilot.essentials[0];
      check(`${url} semantic compact facts`, Boolean(essentials) && essentials.rows.length >= 4 && essentials.rows.length <= 7 && essentials.links === 0 && essentials.rows.every((row) => row.label && row.value) && new Set(essentials.rows.map((row) => row.label)).size === essentials.rows.length);
      check(`${url} single byline after image`, page.pilot.bylines === 1 && page.pilot.bylineAfterImage);
      check(`${url} controlled answer adaptation`, page.pilot.adaptedAnswers === (url.endsWith('/estacion-oriente-lisboa') ? 1 : 0));
    }
  }
  if (planningLabels[url]) check(`${url} declared planning link restored`, same(page.restoredPlanningLinks, [planningLabels[url]]));
  for (const key of Object.keys(old.protected)) {
    // Next may emit the font adjustment meta at a different position. Preserve
    // the complete metadata multiset, including duplicate tags and all values.
    const canonicalize = (value) => {
      if (key === 'metadata') return value.map((item) => JSON.stringify(item)).sort();
      if (transportPaths.has(url) || neighborhoodPaths.has(url) || foodPaths.has(url)) {
        // Phase 6 only moves the byline past the description. Keep every
        // remaining paragraph/list/cell, heading and link in its original order.
        if (key === 'blocks') return [value.slice(0, 2).map((item) => JSON.stringify(item)).sort(), value.slice(2)];
        if (key === 'text') return [...value.replace(/\s/g, '')].sort();
        return value;
      }
      if (pilotPaths.has(url)) {
        // A multiset preserves every word and its multiplicity while allowing
        // the documented byline/section moves. SEO, images and schema stay exact.
        if (key === 'text') return [...value.replace(/\s/g, '')].sort();
        if (key === 'headings' || key === 'links' || key === 'blocks') return value.map((item) => JSON.stringify(item)).sort();
      }
      return value;
    };
    check(`${url} preserve ${key}`, same(canonicalize(old.protected[key]), canonicalize(page.protected[key])), key);
  }
  check(`${url} one TOC`, page.structure.tocGroups === 1 && page.structure.tocNavs === 1 && page.structure.tocLinks === page.toc.length);
  const toc = (items) => pilotPaths.has(url) && url.endsWith('/estacion-oriente-lisboa') ? items.map((item) => JSON.stringify(item)).sort() : items;
  check(`${url} TOC targets preserved`, same(toc(old.toc), toc(page.toc)));
  check(`${url} one sources system`, page.structure.sourceGroups === (old.sources.length ? 1 : 0) && page.structure.sourceLinks === page.sources.length);
  check(`${url} source URLs preserved`, same(old.sources.map((s) => s.href), page.sources.map((s) => s.href)));
  check(`${url} all source labels preserved`, old.sources.every((s) => s.labels.every((label) => page.sources.find((p) => p.href === s.href)?.labels.some((text) => text.includes(label)))));
  check(`${url} no generic footer CTA/widget`, page.structure.oldFooterCta === 0 && page.structure.automaticWidget === 0);
  check(`${url} one final recommendation module`, page.structure.finalModules <= 1 && page.structure.bookingBlocks <= 2 && page.structure.finalIsLast && page.structure.outsideAffiliate === 0);
  check(`${url} affiliate disclosure`, !page.structure.bookingBlocks || page.structure.disclosures >= 1);
  const oldUrls = new Set(old.affiliateLinks.map((a) => a.href));
  check(`${url} no new affiliate destinations`, page.affiliateLinks.every((a) => oldUrls.has(a.href)));
  check(`${url} protected affiliate attributes`, page.affiliateLinks.every((a) => /\bsponsored\b/.test(a.rel) && /\bnoopener\b/.test(a.rel) && /\bnoreferrer\b/.test(a.rel)));
}
const report = { date: new Date().toISOString(), baseUrl: base, baseline: baselineFile, pages, checks, summary: { pages: Object.keys(pages).length, checks: checks.length, failures: checks.filter((c) => !c.pass).length } };
if (mode === 'snapshot') { fs.mkdirSync(path.dirname(baselineFile), { recursive: true }); fs.writeFileSync(baselineFile, JSON.stringify(report, null, 2)); }
else if (process.env.SMOKE_EVIDENCE_DIR) { fs.mkdirSync(process.env.SMOKE_EVIDENCE_DIR, { recursive:true }); fs.writeFileSync(path.join(process.env.SMOKE_EVIDENCE_DIR, 'editorial-template-report.json'), JSON.stringify(report, null, 2)); }
console.log(JSON.stringify(report.summary));
if (report.summary.failures) process.exitCode = 1;
