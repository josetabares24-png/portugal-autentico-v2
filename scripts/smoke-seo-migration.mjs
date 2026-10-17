#!/usr/bin/env node
/** HTTP contract for the approved migration. GET only; never contacts APIs or submits forms.
 * Run after build, or set SMOKE_BASE_URL to an existing server / Vercel Preview.
 * SMOKE_EVIDENCE_DIR optionally saves the report and one-hop redirect matrix.
 */
import fs from 'node:fs';
import path from 'node:path';
import net from 'node:net';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const policy = JSON.parse(fs.readFileSync(path.join(root, 'src/data/seo-url-policy.json'), 'utf8'));
const origin = 'https://estabaenlisboa.com';
const checks = [];
const redirects = [];
const cache = new Map();
const pages = new Map();
const links = new Map();
let child;
let base = process.env.SMOKE_BASE_URL?.replace(/\/$/, '');
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map((m) => [m[1].toLowerCase(), decode(m[2])]));
function check(name, pass, detail = '') {
  checks.push({ name, pass: Boolean(pass), detail });
  if (!pass) console.error(`FAIL ${name}: ${detail}`);
}
async function request(urlPath) {
  const url = new URL(urlPath, base).href;
  if (!cache.has(url)) cache.set(url, (async () => {
    const r = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(25_000) });
    return { status: r.status, location: r.headers.get('location'), type: r.headers.get('content-type') || '',
      xRobots: r.headers.get('x-robots-tag') || '', body: await r.text() };
  })());
  return cache.get(url);
}
async function parallel(items, work, count = 5) {
  let index = 0;
  await Promise.all(Array.from({ length: Math.min(count, items.length) }, async () => {
    while (index < items.length) await work(items[index++]);
  }));
}
async function start() {
  if (base) return;
  const port = await new Promise((resolve, reject) => {
    const s = net.createServer(); s.on('error', reject);
    s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => resolve(p)); });
  });
  base = `http://127.0.0.1:${port}`;
  child = spawn(process.execPath, [path.join(root, 'node_modules/next/dist/bin/next'), 'start', '-p', String(port)], {
    cwd: root, stdio: ['ignore', 'ignore', 'pipe'], env: process.env,
  });
  let error = '';
  child.stderr.on('data', (data) => { error = (error + data).slice(-2000); });
  child.on('error', (err) => { error = err.message; });
  for (let i = 0; i < 60; i++) {
    if (child.exitCode !== null) throw new Error(`Next exited: ${error}`);
    try {
      const r = await fetch(`${base}/sitemap.xml`, { signal: AbortSignal.timeout(1500) });
      if (r.ok) return;
    } catch { /* starting */ }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Local server did not start: ${error}`);
}
const hasNoindex = (s) => /(?:^|[,\s])(?:noindex|none)(?:$|[,\s])/i.test(s);
function inspect(urlPath, r, indexable) {
  check(`${urlPath} HTTP`, r.status === 200 && !r.location, `${r.status} ${r.location || ''}`);
  if (r.status !== 200) return;
  const metas = [...r.body.matchAll(/<meta\b[^>]*>/gi)].map((m) => attrs(m[0]));
  const robots = metas.filter((m) => /^(robots|googlebot)$/i.test(m.name || ''));
  const canonical = [...r.body.matchAll(/<link\b[^>]*>/gi)].map((m) => attrs(m[0])).filter((a) => a.rel === 'canonical');
  const expectedCanonical = `${origin}${urlPath}`;
  const canonicalHref = canonical[0]?.href;
  check(`${urlPath} canonical self`, canonical.length === 1 && (canonicalHref === expectedCanonical || (urlPath === '/' && canonicalHref === origin)), JSON.stringify(canonical));
  check(`${urlPath} one H1`, [...r.body.matchAll(/<h1\b/gi)].length === 1);
  check(`${urlPath} title/description`, /<title>[^<]+<\/title>/.test(r.body) && metas.some((m) => m.name === 'description' && m.content?.trim()));
  if (indexable) {
    check(`${urlPath} app indexable`, robots.length > 0 && robots.every((m) => !hasNoindex(m.content || '')), JSON.stringify(robots));
    // Vercel protects Preview from indexing at the edge, independently of app metadata.
    if (!new URL(base).hostname.endsWith('.vercel.app')) check(`${urlPath} HTTP indexable`, !hasNoindex(r.xRobots), r.xRobots);
  } else {
    check(`${urlPath} noindex,follow`, robots.some((m) => m.name === 'robots' && hasNoindex(m.content || '') && /\bfollow\b/i.test(m.content) && !/nofollow/i.test(m.content)));
    check(`${urlPath} coherent googlebot`, robots.filter((m) => m.name === 'googlebot').every((m) => hasNoindex(m.content || '') && !/nofollow/i.test(m.content)));
  }
  const schemas = [...r.body.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  check(`${urlPath} schema present`, schemas.length > 0);
  for (const [i, schema] of schemas.entries()) {
    try { JSON.parse(schema[1]); check(`${urlPath} schema ${i}`, true); }
    catch (err) { check(`${urlPath} schema ${i}`, false, err.message); }
  }
  for (const match of r.body.matchAll(/<a\b[^>]*>/gi)) {
    const href = attrs(match[0]).href;
    if (!href) continue;
    let u;
    try { u = new URL(href, `${origin}${urlPath}`); } catch { continue; }
    if (![origin, new URL(base).origin, 'https://www.estabaenlisboa.com'].includes(u.origin)) continue;
    if (/^\/(?:api|admin|app|_next)(?:\/|$)/.test(u.pathname)) continue;
    const target = u.pathname + u.search;
    if (!links.has(target)) links.set(target, new Set());
    links.get(target).add(urlPath);
  }
  pages.set(urlPath, { status: r.status, canonical: canonical[0]?.href, robots, xRobots: r.xRobots, indexable });
}
async function main() {
  await start();
  console.log(`Migration QA: ${base}`);
  check('policy unique sources', new Set(policy.redirects.map((r) => r.source)).size === policy.redirects.length);
  check('policy no chains', policy.redirects.every((r) => !policy.redirects.some((other) => other.source === r.destination)));
  check('policy WAIT isolated', policy.deferredRedirects.every((r) => !policy.redirects.some((other) => other.source === r.source)));
  for (const rule of policy.redirects) {
    const final = await request(rule.destination);
    for (const prefix of ['', '/en', '/ko', '/es']) {
      const source = prefix + rule.source;
      const r = await request(source);
      const location = r.location ? new URL(r.location, base) : null;
      const direct = r.status === 301 && location?.pathname === rule.destination && !location.search && location.origin === new URL(base).origin;
      check(`${source} 301 direct`, direct, `${r.status} ${r.location}`);
      check(`${source} final 200`, final.status === 200 && !final.location, `${final.status} ${final.location || ''}`);
      redirects.push({ old: source, status: r.status, final: location?.pathname || '', finalStatus: final.status, chainLength: direct && final.status === 200 && !final.location ? 1 : null });
    }
    const query = await request(`${rule.source}?migration_qa=1`);
    const q = query.location ? new URL(query.location, base) : null;
    check(`${rule.source} query preserved`, query.status === 301 && q?.pathname === rule.destination && q.searchParams.get('migration_qa') === '1');
  }
  const sitemap = await request('/sitemap.xml');
  check('sitemap XML envelope', sitemap.status === 200 && /<urlset\s[^>]*xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/.test(sitemap.body) && /<\/urlset>/.test(sitemap.body));
  const urls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1]));
  check('sitemap nonempty and unique', urls.length > 0 && new Set(urls).size === urls.length, String(urls.length));
  const excluded = new Set([...policy.noindexPaths, ...policy.redirects.map((r) => r.source)]);
  check('sitemap approved URLs only', urls.every((url) => {
    const u = new URL(url); return u.origin === origin && !u.search && !u.hash && !excluded.has(u.pathname) && !/^\/(?:checkout|quiz|preview)(?:\/|$)/.test(u.pathname);
  }));
  const indexedPaths = urls.map((u) => new URL(u).pathname);
  await parallel(indexedPaths, async (p) => inspect(p, await request(p), true));
  await parallel(policy.noindexPaths, async (p) => inspect(p, await request(p), false));
  for (const rule of policy.deferredRedirects) {
    check(`${rule.source} WAIT in sitemap`, indexedPaths.includes(rule.source));
    if (!pages.has(rule.source)) inspect(rule.source, await request(rule.source), true);
  }
  check('quiz remains real 404', (await request('/quiz')).status === 404);
  check('unknown route real 404', (await request('/__editorial-migration-404-check__')).status === 404);
  for (const p of ['/checkout/legacy', '/en/checkout/legacy', '/ko/checkout/legacy', '/es/checkout/legacy']) {
    const r = await request(p);
    check(`${p} retired`, r.status === 308 && r.location && new URL(r.location, base).pathname === '/itinerarios');
  }
  const robots = await request('/robots.txt');
  check('robots served with sitemap', robots.status === 200 && robots.body.includes(`Sitemap: ${origin}/sitemap.xml`));
  const disallows = [...robots.body.matchAll(/^Disallow:\s*(\S+)\s*$/gm)].map((m) => m[1]);
  const agents = [...robots.body.matchAll(/^User-agent:\s*(\S+)\s*$/gmi)].map((m) => m[1]);
  const allows = [...robots.body.matchAll(/^Allow:\s*(\S+)\s*$/gmi)].map((m) => m[1]);
  // Fail closed if the simple shared robots file gains groups / Allow exceptions.
  check('robots supported universal group', agents.length === 1 && agents[0] === '*' && allows.every((p) => p === '/'));
  const blocked = (p) => disallows.some((rule) => new RegExp(`^${rule.replace(/[.+?^{}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*')}`).test(p));
  check('robots lets Google read public/noindex pages', [...indexedPaths, ...policy.noindexPaths].every((p) => !blocked(p)));
  check('robots permits essential assets', ['/_next/static/app.js', '/images/example.jpg'].every((p) => !blocked(p)));
  await parallel([...links], async ([p, sources]) => {
    const r = await request(p);
    check(`internal link ${p}`, r.status === 200 && !r.location, `${r.status} ${r.location || ''}; from ${[...sources].join(', ')}`);
  });
  const failures = checks.filter((c) => !c.pass);
  const report = { date: new Date().toISOString(), baseUrl: base, previewEdgeNoindex: new URL(base).hostname.endsWith('.vercel.app'), summary: { checks: checks.length, failures: failures.length, sitemapUrls: urls.length, pages: pages.size, uniqueInternalLinks: links.size, redirects: policy.redirects.length }, checks, redirects, pages: Object.fromEntries(pages) };
  if (process.env.SMOKE_EVIDENCE_DIR) {
    const dir = path.resolve(process.env.SMOKE_EVIDENCE_DIR);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'seo-migration-report.json'), JSON.stringify(report, null, 2) + '\n');
    fs.writeFileSync(path.join(dir, 'seo-redirect-matrix.csv'), 'OLD,STATUS,FINAL,FINAL STATUS,CHAIN LENGTH\n' + redirects.map((r) => [r.old, r.status, r.final, r.finalStatus, r.chainLength ?? 'FAIL'].join(',')).join('\n') + '\n');
  }
  console.log(JSON.stringify(report.summary));
  if (failures.length) process.exitCode = 1;
}
try { await main(); }
catch (err) { console.error(err); process.exitCode = 1; }
finally { child?.kill('SIGTERM'); }
