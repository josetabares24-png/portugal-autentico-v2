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

const SITE_HOST = 'estabaenlisboa.com';
const isWindows = process.platform === 'win32';
const npxCommand = isWindows ? 'npx.cmd' : 'npx';

// The 20 activities this smoke test guards, exactly as listed in
// src/data/activities.ts. Not imported from the .ts file on purpose,
// to keep this script dependency-free (plain Node + fetch) and runnable
// without a TypeScript loader.
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

const results = [];
let failures = 0;

function record(name, pass, detail) {
  results.push({ name, pass, detail });
  if (!pass) failures++;
  log(`${pass ? 'OK  ' : 'FAIL'} ${name}${detail ? ' - ' + detail : ''}`);
}

async function checkCatalog(baseUrl) {
  const res = await fetch(`${baseUrl}/actividades`);
  const html = await res.text();
  record('/actividades responde 200', res.status === 200, `HTTP ${res.status}`);

  const title = getTitle(html);
  const brandCount = (title || '').split('Estaba en Lisboa').length - 1;
  record(
    '/actividades title no duplica la marca',
    !!title && brandCount === 1,
    `title="${title}"`
  );

  const foundHrefs = new Set(
    [...html.matchAll(/href="\/actividades\/([a-z0-9-]+)"/g)].map((m) => m[1])
  );
  const missing = ACTIVITY_SLUGS.filter((slug) => !foundHrefs.has(slug));
  record(
    '/actividades enlaza las 20 fichas',
    missing.length === 0,
    missing.length ? `faltan: ${missing.join(', ')}` : `${foundHrefs.size} enlaces encontrados`
  );

  const unknown = [...foundHrefs].filter((slug) => !ACTIVITY_SLUGS.includes(slug));
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
  record(`${slug}: canonical correcto`, canonical === expectedCanonical, `canonical="${canonical}"`);

  record(`${slug}: robots es "noindex, follow"`, robots === 'noindex, follow', `robots="${robots}"`);
  record(`${slug}: robots no es "noindex, nofollow"`, robots !== 'noindex, nofollow', `robots="${robots}"`);

  return {
    slug,
    http: res.status,
    title,
    robots,
    canonical,
    ok: !notFoundTitle && canonical === expectedCanonical && robots === 'noindex, follow',
  };
}

async function checkNonexistent(baseUrl) {
  const res = await fetch(`${baseUrl}/actividades/${NONEXISTENT_SLUG}`, { redirect: 'manual' });
  record(`${NONEXISTENT_SLUG}: HTTP 404`, res.status === 404, `HTTP ${res.status}`);
}

async function checkSitemap(baseUrl) {
  const res = await fetch(`${baseUrl}/sitemap.xml`);
  const xml = await res.text();
  record('/sitemap.xml responde 200', res.status === 200, `HTTP ${res.status}`);

  const catalogPresent = xml.includes(`https://${SITE_HOST}/actividades</loc>`) ||
    xml.includes(`https://${SITE_HOST}/actividades<`);
  record('/actividades sigue en el sitemap', catalogPresent);

  const leaked = ACTIVITY_SLUGS.filter((slug) =>
    xml.includes(`https://${SITE_HOST}/actividades/${slug}<`)
  );
  record(
    'ninguna de las 20 fichas está en el sitemap',
    leaked.length === 0,
    leaked.length ? `presentes indebidamente: ${leaked.join(', ')}` : 'ninguna presente'
  );
}

async function main() {
  const explicitBaseUrl = process.env.SMOKE_BASE_URL;
  let child = null;
  let baseUrl = explicitBaseUrl;

  try {
    if (!explicitBaseUrl) {
      log('== Modo local: next build + next start ==');
      await runStep('npx', ['next', 'build']);

      const port = await getFreePort();
      baseUrl = `http://localhost:${port}`;

      const env = { ...process.env, PORT: String(port) };
      // Clerk's middleware throws if no publishable key is configured at
      // all, which would 500 every route before we even reach the routes
      // under test. If the environment doesn't already have real Clerk
      // keys (e.g. this sandbox), fall back to a syntactically-valid but
      // inert local placeholder so the app boots. Never overrides real
      // keys if they're already present (e.g. in Vercel/CI).
      if (!env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
        log('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY no está definido: usando una clave local ficticia solo para poder arrancar el servidor de pruebas.');
        env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = 'pk_test_bm9pbmRleC1zbW9rZXRlc3QuY2xlcmsuYWNjb3VudHMuZGV2JA==';
        env.CLERK_SECRET_KEY = env.CLERK_SECRET_KEY || 'sk_test_localsmoketestdummykeyfor000000000000000000';
      }

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
      const canonicalOk = r.canonical === `https://${SITE_HOST}/actividades/${r.slug}`;
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
