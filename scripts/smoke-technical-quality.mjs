/** Read-only HTTP audit. Does not load APIs, analytics, external links or forms. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { parseHTML } from 'linkedom';

const origin = process.env.SMOKE_BASE_URL;
if (!origin) throw new Error('Set SMOKE_BASE_URL to the build or Preview being audited.');
const policy = JSON.parse(await fs.readFile(new URL('../src/data/seo-url-policy.json', import.meta.url), 'utf8'));
const xmlResponse = await fetch(new URL('/sitemap.xml', origin));
if (!xmlResponse.ok) throw new Error(`Sitemap HTTP ${xmlResponse.status}`);
const xml = await xmlResponse.text();
const urls = [...new Set([
  ...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname),
  ...policy.noindexPaths, ...Array.from({ length: 7 }, (_, i) => `/blog?page=${i + 2}`),
])];
const checks = [];
const inventory = [];
const check = (url, name, pass, detail = '') => checks.push({ url, name, pass: Boolean(pass), detail });
const normalize = (text) => String(text || '').replace(/\s+/g, ' ').trim();
function isoDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/.test(value)) return false;
  const parsed = new Date(value);
  return !Number.isNaN(parsed.getTime()) && new Date(`${value.slice(0, 10)}T00:00:00Z`).toISOString().slice(0, 10) === value.slice(0, 10);
}
function nodes(value, result = []) {
  if (Array.isArray(value)) value.forEach((item) => nodes(item, result));
  else if (value && typeof value === 'object') {
    result.push(value);
    Object.values(value).forEach((item) => nodes(item, result));
  }
  return result;
}
let index = 0;
await Promise.all(Array.from({ length: 5 }, async () => {
  while (index < urls.length) {
    const url = urls[index++];
    const response = await fetch(new URL(url, origin), { redirect: 'manual', signal: AbortSignal.timeout(25000) });
    const html = await response.text();
    const { document } = parseHTML(html);
    check(url, 'direct 200', response.status === 200, String(response.status));
    const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')];
    const schema = [];
    let parseable = true;
    for (const script of scripts) {
      try { schema.push(JSON.parse(script.textContent)); } catch { parseable = false; }
    }
    check(url, 'schema JSON parses', scripts.length > 0 && parseable);
    const graph = nodes(schema);
    const badDates = graph.flatMap((node) => ['datePublished', 'dateModified'].filter((key) => node[key] !== undefined && !isoDate(node[key])).map((key) => ({ key, value: node[key] })));
    check(url, 'schema dates use valid ISO dates', badDates.length === 0, JSON.stringify(badDates.slice(0, 5)));
    const breadcrumbs = graph.filter((node) => node['@type'] === 'BreadcrumbList');
    check(url, 'breadcrumb positions are consecutive', breadcrumbs.every((node) => Array.isArray(node.itemListElement) && node.itemListElement.every((item, i) => item.position === i + 1)));
    const main = document.querySelector('main');
    check(url, 'one main landmark and skip-link target', document.querySelectorAll('main').length === 1 && document.getElementById('main-content'));
    check(url, 'one H1', document.querySelectorAll('h1').length === 1);
    const ids = [...document.querySelectorAll('[id]')].map((element) => element.id);
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
    check(url, 'unique DOM IDs', duplicates.length === 0, JSON.stringify([...new Set(duplicates)].slice(0, 8)));
    const unnamedButtons = [...document.querySelectorAll('button')].filter((button) => !normalize(button.getAttribute('aria-label') || button.getAttribute('aria-labelledby') || button.getAttribute('title') || button.textContent));
    check(url, 'buttons have an accessible-name source', unnamedButtons.length === 0, String(unnamedButtons.length));
    const missingAlt = [...document.querySelectorAll('img')].filter((image) => !image.hasAttribute('alt'));
    check(url, 'images declare ALT', missingAlt.length === 0, String(missingAlt.length));
    document.querySelectorAll('script,style').forEach((element) => element.remove());
    const visibleText = normalize(main?.textContent);
    const questions = graph.filter((node) => node['@type'] === 'FAQPage').flatMap((node) => node.mainEntity || []);
    const invisibleQuestions = questions.filter((question) => !visibleText.includes(normalize(question.name)));
    check(url, 'FAQ schema questions exist in page content', invisibleQuestions.length === 0, JSON.stringify(invisibleQuestions.map((item) => item.name).slice(0, 4)));
    inventory.push({ url, htmlBytes: Buffer.byteLength(html), schemaTypes: [...new Set(graph.flatMap((node) => node['@type'] || []))], badDateCount: badDates.length, faqCount: questions.length, offerCount: graph.filter((node) => node['@type'] === 'Offer').length, ratingCount: graph.filter((node) => node['@type'] === 'AggregateRating' || node['@type'] === 'Review').length });
  }
}));
checks.sort((a, b) => a.url.localeCompare(b.url) || a.name.localeCompare(b.name));
inventory.sort((a, b) => a.url.localeCompare(b.url));
const report = { origin, pages: urls.length, checks, failures: checks.filter((item) => !item.pass), inventory };
if (process.env.SMOKE_EVIDENCE_DIR) {
  await fs.mkdir(process.env.SMOKE_EVIDENCE_DIR, { recursive: true });
  await fs.writeFile(path.join(process.env.SMOKE_EVIDENCE_DIR, 'technical-quality-report.json'), JSON.stringify(report, null, 2));
}
console.log(JSON.stringify({ pages: urls.length, checks: checks.length, failures: report.failures, badSchemaDates: inventory.reduce((sum, item) => sum + item.badDateCount, 0), offers: inventory.reduce((sum, item) => sum + item.offerCount, 0), ratings: inventory.reduce((sum, item) => sum + item.ratingCount, 0) }));
process.exitCode = report.failures.length ? 1 : 0;
