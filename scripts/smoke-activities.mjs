#!/usr/bin/env node
/**
 * HTTP smoke test for /actividades and its 20 detail pages.
 *
 * Hits a REAL running server over HTTP (never inspects .next/ build output
 * directly) so it catches issues that typecheck/lint/`next build` cannot,
 * such as an App Router page destructuring `params` synchronously instead
 * of awaiting it (which makes every activity 404 at runtime while the
 * build still succeeds).
 *
 * Two modes:
 *   - Local (default): runs `next build`, starts `next start` on a free
 *     port, waits for it to be ready, runs the checks, then stops it.
 *   - Against an already-running server (e.g. a Vercel preview): pass
 *     SMOKE_BASE_URL=https://your-preview.vercel.app and the build/start
 *     steps are skipped.
 *
 * Exit code is non-zero if any check fails.
 */

import { spawn } from 'node:child_process';
import net from 'node:net';
import fs from 'node:fs';
import ts from 'typescript';

const SITE_HOST = 'estabaenlisboa.com';
const isWindows = process.platform === 'win32';
const npxCommand = isWindows ? 'npx.cmd' : 'npx';
const URL_POLICY = JSON.parse(fs.readFileSync(new URL('../src/data/seo-url-policy.json', import.meta.url), 'utf8'));
const REDIRECTS = new Map(URL_POLICY.redirects.map(({ source, destination }) => [source, destination]));
const NOINDEX_PATHS = new Set(URL_POLICY.noindexPaths);

// Qué fichas deben estar indexadas se lee del propio `activities.ts`, para que
// este test siga la fuente de la verdad en vez de una expectativa fija: si una
// ficha cambia de estado, el test lo exige sin tener que tocarlo. Se parsea con
// el AST de TypeScript, sin ejecutar el módulo ni depender de la adyacencia
// o de la indentación de sus propiedades.
const ACTIVITIES_SOURCE = fs.readFileSync(
  new URL('../src/data/activities.ts', import.meta.url),
  'utf8'
);
function readActivityEntries() {
  const source = ts.createSourceFile('activities.ts', ACTIVITIES_SOURCE, ts.ScriptTarget.Latest, true);
  let entries;
  function visit(node) {
    if (ts.isVariableDeclaration(node) && node.name.getText(source) === 'activities') {
      if (!node.initializer || !ts.isArrayLiteralExpression(node.initializer)) throw new Error('activities no es un array literal');
      entries = node.initializer.elements.map((entry) => {
        if (!ts.isObjectLiteralExpression(entry)) throw new Error('Ficha de actividad no reconocida');
        const prop = (key) => entry.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(source) === key)?.initializer;
        const slug = prop('slug');
        const indexable = prop('indexable');
        if (!slug || !ts.isStringLiteral(slug) || !indexable || ![ts.SyntaxKind.TrueKeyword, ts.SyntaxKind.FalseKeyword].includes(indexable.kind)) {
          throw new Error('Cada ficha debe declarar slug e indexable explícitos');
        }
        return [slug.text, indexable.kind === ts.SyntaxKind.TrueKeyword];
      });
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  if (!entries?.length) throw new Error('No se extrajeron fichas; no se admite una comprobación vacía');
  if (new Set(entries.map(([slug]) => slug)).size !== entries.length) throw new Error('Slugs de actividad duplicados');
  return entries;
}
const INDEXABLE_BY_SLUG = new Map(readActivityEntries());

// Las 20 fichas que este test vigila, tal cual están en src/data/activities.ts.
const ACTIVITY_SLUGS = [
  'miradouro-santa-luzia',
  'miradouro-senhora-do-monte',
  'miradouro-portas-do-sol',
  'castelo-sao-jorge',
  'mosteiro-jeronimos',
  'torre-de-belem',
  'pasteis-de-belem',
  'tranvia-28',
  'lx-factory',
  'elevador-santa-justa',
  'oceanario-lisboa',
  'sintra-dia-completo',
  'cascais-cabo-da-roca',
  'fado-en-alfama',
  'crucero-atardecer-tajo',
  'free-walking-tour-centro',
  'jardim-estrela-principe-real',
  'parque-eduardo-vii',
  'tasca-tradicional',
  'cristo-rei',
];

const NONEXISTENT_SLUG = 'actividad-que-no-existe';

function log(...args) {
  console.log(...args);
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', reject);
    server.listen(0, () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

function runStep(command, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command === 'npx' ? npxCommand : command, args, {
      stdio: 'inherit',
      shell: isWindows,
      ...opts,
    });
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`));
    });
    child.on('error', reject);
  });
}

async function waitForServer(baseUrl, timeoutMs = 60_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(baseUrl + '/actividades', { redirect: 'manual' });
      if (res.status) return;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server at ${baseUrl} did not respond within ${timeoutMs}ms`);
}

function extractTag(html, regex) {
  const m = html.match(regex);
  return m ? m[1] : null;
}

function getTitle(html) {
  return extractTag(html, /<title>([^<]*)<\/title>/i);
}

function getCanonical(html) {
  return extractTag(html, /<link rel="canonical" href="([^"]*)"/i);
}

function getRobots(html) {
  return extractTag(html, /<meta name="robots" content="([^"]*)"/i);
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/g)].map((m) => [m[1].toLowerCase(), m[3]]));
}

function metaValues(html, name) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)]
    .map((m) => attributes(m[0]))
    .filter((attrs) => attrs.name?.toLowerCase() === name)
    .map((attrs) => attrs.content ?? '');
}

function selfCanonical(html, expected) {
  const canonicals = [...html.matchAll(/<link\b[^>]*>/gi)]
    .map((m) => attributes(m[0]))
    .filter((attrs) => attrs.rel?.toLowerCase() === 'canonical');
  if (canonicals.length !== 1) return false;
  try {
    return new URL(canonicals[0].href).href === new URL(expected).href;
  } catch {
    return false;
  }
}

const blocksIndexing = (value) => /\b(?:noindex|none)\b/i.test(value);

function headerDirective(res) {
  const value = res.headers.get('x-robots-tag') ?? '';
  return new URL(res.url).hostname.endsWith('.vercel.app') && blocksIndexing(value) ? '' : value;
}

function indexingBlocks(html, res) {
  return [
    ...metaValues(html, 'robots').map((value) => ['robots', value]),
    ...metaValues(html, 'googlebot').map((value) => ['googlebot', value]),
    ['X-Robots-Tag', headerDirective(res)],
  ].filter(([, value]) => blocksIndexing(value));
}

const results = [];
let failures = 0;

function record(name, pass, detail) {
  results.push({ name, pass, detail });
  if (!pass) failures++;
  log(`${pass ? 'OK  ' : 'FAIL'} ${name}${detail ? ' - ' + detail : ''}`);
}

async function checkCatalog(baseUrl) {
  const res = await fetch(`${baseUrl}/actividades`, { redirect: 'manual' });
  const html = await res.text();
  record('/actividades responde 200', res.status === 200, `HTTP ${res.status}`);
  record('/actividades tiene canonical propio', selfCanonical(html, `https://${SITE_HOST}/actividades`), `canonical="${getCanonical(html)}"`);
  const catalogShouldIndex = !NOINDEX_PATHS.has('/actividades');
  const catalogRobots = getRobots(html);
  const catalogGooglebot = metaValues(html, 'googlebot');
  record(
    '/actividades respeta su política de indexación sin perder follow',
    catalogRobots === (catalogShouldIndex ? 'index, follow' : 'noindex, follow')
      && (catalogShouldIndex ? indexingBlocks(html, res).length === 0 : catalogGooglebot.length > 0 && catalogGooglebot.every((value) => blocksIndexing(value) && /\bfollow\b/i.test(value) && !/\b(?:nofollow|none|index)\b/i.test(value)))
      && !/\b(?:nofollow|none)\b/i.test(headerDirective(res))
      && (catalogShouldIndex || !/\bindex\b/i.test(headerDirective(res))),
    `robots="${catalogRobots}", googlebot=${JSON.stringify(catalogGooglebot)}, X-Robots-Tag="${res.headers.get('x-robots-tag') ?? ''}"`,
  );

  const title = getTitle(html);
  const brandCount = (title || '').split('Estaba en Lisboa').length - 1;
  record(
    '/actividades title no duplica la marca',
    !!title && brandCount === 1,
    `title="${title}"`
  );

  const foundHrefs = new Set([...html.matchAll(/<a\b[^>]*>/gi)].map((m) => attributes(m[0]).href));
  const expectedHrefs = ACTIVITY_SLUGS.map((slug) => {
    const source = `/actividades/${slug}`;
    return REDIRECTS.get(source) ?? source;
  });
  const missing = expectedHrefs.filter((href) => !foundHrefs.has(href));
  record(
    '/actividades conserva los 20 destinos con las tres migraciones directas',
    missing.length === 0,
    missing.length ? `faltan: ${missing.join(', ')}` : `${foundHrefs.size} enlaces encontrados`
  );

  const unknown = [...foundHrefs].filter((href) => href?.startsWith('/actividades/') && !expectedHrefs.includes(href));
  record(
    '/actividades no enlaza slugs desconocidos',
    unknown.length === 0,
    unknown.length ? `desconocidos: ${unknown.join(', ')}` : 'ninguno'
  );
}

async function checkActivity(baseUrl, slug) {
  const url = `${baseUrl}/actividades/${slug}`;
  const res = await fetch(url, { redirect: 'manual' });
  const html = await res.text();
  const destination = REDIRECTS.get(`/actividades/${slug}`);
  if (destination) {
    const location = res.headers.get('location');
    const redirectOk = res.status === 301 && location !== null && new URL(location, baseUrl).href === new URL(destination, baseUrl).href;
    record(`${slug}: redirect autorizado de un salto`, redirectOk, `HTTP ${res.status} -> ${location}`);
    const final = await fetch(`${baseUrl}${destination}`, { redirect: 'manual' });
    const content = await final.text();
    const canonicalOk = selfCanonical(content, `https://${SITE_HOST}${destination}`);
    const indexable = indexingBlocks(content, final).length === 0;
    const title = getTitle(content);
    const contentOk = Boolean(title) && !/no encontrad/i.test(title) && [...content.matchAll(/<h1[\s>]/gi)].length === 1;
    record(`${slug}: destino 200, indexable, autocanónico y con contenido`, final.status === 200 && canonicalOk && indexable && contentOk, `destino=${destination}, HTTP ${final.status}, canonical="${getCanonical(content)}"`);
    return { slug, http: res.status, title, robots: getRobots(content), canonical: getCanonical(content), destination, ok: redirectOk && final.status === 200 && canonicalOk && indexable && contentOk };
  }

  const okStatus = res.status === 200;
  record(`${slug}: HTTP 200`, okStatus, `HTTP ${res.status}`);
  if (!okStatus) {
    return { slug, http: res.status, title: null, robots: null, canonical: null, ok: false };
  }

  const title = getTitle(html);
  const canonical = getCanonical(html);
  const robots = getRobots(html);

  const notFoundTitle = !title || /no encontrad/i.test(title);
  record(`${slug}: title no es el de "no encontrada"`, !notFoundTitle, `title="${title}"`);

  const expectedCanonical = `https://${SITE_HOST}/actividades/${slug}`;
  const canonicalOk = selfCanonical(html, expectedCanonical);
  record(`${slug}: canonical correcto`, canonicalOk, `canonical="${canonical}"`);

  const debeIndexar = INDEXABLE_BY_SLUG.get(slug);
  const robotsEsperado = debeIndexar ? 'index, follow' : 'noindex, follow';
  record(
    `${slug}: robots es "${robotsEsperado}" (indexable: ${debeIndexar})`,
    robots === robotsEsperado,
    `robots="${robots}"`
  );
  record(`${slug}: robots no es "noindex, nofollow"`, robots !== 'noindex, nofollow', `robots="${robots}"`);
  const indexable = !debeIndexar || indexingBlocks(html, res).length === 0;
  record(`${slug}: no hereda noindex de catálogo, googlebot o cabecera`, indexable, JSON.stringify(indexingBlocks(html, res)));

  return {
    slug,
    http: res.status,
    title,
    robots,
    canonical,
    ok: !notFoundTitle && canonicalOk && robots === robotsEsperado && indexable,
  };
}

async function checkNonexistent(baseUrl) {
  const res = await fetch(`${baseUrl}/actividades/${NONEXISTENT_SLUG}`, { redirect: 'manual' });
  record(`${NONEXISTENT_SLUG}: HTTP 404`, res.status === 404, `HTTP ${res.status}`);
}

async function checkSitemap(baseUrl) {
  const res = await fetch(`${baseUrl}/sitemap.xml`, { redirect: 'manual' });
  const xml = await res.text();
  record('/sitemap.xml responde 200', res.status === 200, `HTTP ${res.status}`);

  const catalogPresent = xml.includes(`https://${SITE_HOST}/actividades</loc>`) ||
    xml.includes(`https://${SITE_HOST}/actividades<`);
  record('/actividades respeta la exclusión de sitemap del índice', catalogPresent === !NOINDEX_PATHS.has('/actividades'), `presente=${catalogPresent}`);

  const enSitemap = (slug) => xml.includes(`https://${SITE_HOST}/actividades/${slug}<`);
  const shouldAppear = (slug) => INDEXABLE_BY_SLUG.get(slug) === true && !REDIRECTS.has(`/actividades/${slug}`) && !NOINDEX_PATHS.has(`/actividades/${slug}`);
  const sobran = ACTIVITY_SLUGS.filter((s) => !shouldAppear(s) && enSitemap(s));
  const faltan = ACTIVITY_SLUGS.filter((s) => shouldAppear(s) && !enSitemap(s));
  record(
    'ninguna ficha noindex o redirigida está en el sitemap',
    sobran.length === 0,
    sobran.length ? `presentes indebidamente: ${sobran.join(', ')}` : 'ninguna presente'
  );
  record(
    'todas las fichas indexables están en el sitemap',
    faltan.length === 0,
    faltan.length ? `ausentes: ${faltan.join(', ')}` : `${ACTIVITY_SLUGS.filter(shouldAppear).length} presentes`
  );
}

async function main() {
  const explicitBaseUrl = process.env.SMOKE_BASE_URL;
  let child = null;
  let baseUrl = explicitBaseUrl;

  try {
    const retired = ACTIVITY_SLUGS.filter((slug) => REDIRECTS.has(`/actividades/${slug}`));
    const live = ACTIVITY_SLUGS.filter((slug) => !REDIRECTS.has(`/actividades/${slug}`));
    record('inventario íntegro: 20 fichas, tres redirects y 17 indexables vivas',
      INDEXABLE_BY_SLUG.size === 20 && ACTIVITY_SLUGS.every((slug) => INDEXABLE_BY_SLUG.has(slug))
        && retired.length === 3 && live.length === 17 && live.every((slug) => INDEXABLE_BY_SLUG.get(slug) === true),
      `${INDEXABLE_BY_SLUG.size} fichas, ${retired.length} redirects, ${live.length} vivas`);
    if (!explicitBaseUrl) {
      log('== Modo local: next build + next start ==');
      await runStep('npx', ['next', 'build']);

      const port = await getFreePort();
      baseUrl = `http://localhost:${port}`;

      const env = { ...process.env, PORT: String(port) };

      log(`== Arrancando next start en ${baseUrl} ==`);
      child = spawn(npxCommand, ['next', 'start', '-p', String(port)], {
        stdio: 'inherit',
        env,
        shell: isWindows,
      });
      await waitForServer(baseUrl);
      log('Servidor listo.\n');
    } else {
      log(`== Modo remoto: probando ${baseUrl} (sin build/start local) ==\n`);
    }

    if (new URL(baseUrl).hostname.endsWith('.vercel.app')) {
      log('INFO Preview: se registra la cabecera noindex de Vercel; robots/googlebot de la aplicación siguen siendo estrictos.');
    }

    await checkCatalog(baseUrl);
    log('');

    const activityResults = [];
    for (const slug of ACTIVITY_SLUGS) {
      activityResults.push(await checkActivity(baseUrl, slug));
    }
    log('');

    await checkNonexistent(baseUrl);
    log('');

    await checkSitemap(baseUrl);

    log('\n--- Tabla resumen ---');
    log('| Ruta | HTTP | Título | Robots | Canonical | Resultado |');
    log('|---|---|---|---|---|---|');
    for (const r of activityResults) {
      const canonicalOk = r.canonical === `https://${SITE_HOST}${r.destination ?? `/actividades/${r.slug}`}`;
      // Strip the " | Estaba en Lisboa" suffix and escape any remaining
      // pipe so a title never breaks the markdown table's column count.
      const shortTitle = (r.title ?? '-').replace(/\s*\|\s*Estaba en Lisboa$/, '').replace(/\|/g, '\\|');
      log(
        `| /actividades/${r.slug} | ${r.http} | ${shortTitle} | ${r.robots ?? '-'} | ${canonicalOk ? 'correcto' : r.canonical ?? '-'} | ${r.ok ? 'OK' : 'FAIL'} |`
      );
    }

    log(`\n${results.length - failures}/${results.length} comprobaciones OK.`);
    if (failures > 0) {
      log(`\n${failures} comprobaciones fallaron.`);
      process.exitCode = 1;
    }
  } catch (err) {
    console.error('\nError ejecutando el smoke test:', err);
    process.exitCode = 1;
  } finally {
    if (child) {
      log('\nDeteniendo el servidor de pruebas...');
      child.kill('SIGTERM');
    }
  }
}

main();
