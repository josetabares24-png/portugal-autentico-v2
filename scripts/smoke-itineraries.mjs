#!/usr/bin/env node
/**
 * HTTP smoke test for /itinerarios and the 7 guidePackSlugs.
 *
 * Hits a REAL running server over HTTP (never inspects .next/ build output)
 * for the same reason as scripts/smoke-activities.mjs: typecheck/lint/
 * `next build` cannot catch a page that destructures `params` synchronously
 * instead of awaiting it.
 *
 * IMPORTANT CAVEAT (read before trusting a green run blindly): every slug in
 * guidePackSlugs also has its own static route folder under
 * src/app/[locale]/itinerarios/<slug>/page.tsx (e.g. lisboa-1-dia-lo-esencial).
 * Next.js always resolves a literal static route over the dynamic
 * itinerarios/[slug] segment for the same path, so requests to these 7
 * slugs are served by the bespoke static pages, NOT by
 * itinerarios/[slug]/page.tsx. This test still verifies those 7 URLs work
 * end to end (real value on its own), but it does NOT exercise the
 * itinerarios/[slug]/page.tsx "found" branch - only its "not found" branch,
 * via the nonexistent-slug check below, which is guaranteed to miss every
 * static folder and fall through to the dynamic route's notFound() call.
 * A real admin-created guide (stored in Supabase, resolved via
 * getGuidePack) would be needed to exercise the dynamic route's success
 * path, and this environment has no live Supabase connection to create
 * one - that gap is reported, not faked.
 *
 * Two modes:
 *   - Local (default): runs `next build`, starts `next start` on a free
 *     port, waits for it to be ready, runs the checks, then stops it.
 *   - Remote: set SMOKE_BASE_URL=https://your-preview.vercel.app to run
 *     the same checks against an already-running deployment.
 */

import { spawn } from 'node:child_process';
import net from 'node:net';

const isWindows = process.platform === 'win32';
const npxCommand = isWindows ? 'npx.cmd' : 'npx';

const SITE_HOST = 'estabaenlisboa.com';

// Mirrors the keys of guidePacks in src/data/guide-packs.ts. Not imported
// from the .ts file on purpose, to keep this script dependency-free
// (plain Node + fetch).
const ITINERARY_SLUGS = [
  'lisboa-1-dia-lo-esencial',
  'lisboa-2-dias-completo',
  'lisboa-3-dias-premium',
  'lisboa-full-week',
  'lisboa-fotografia',
];

// Itinerarios retirados: su URL ya no sirve documento propio, redirige de
// forma permanente a su sustituto editorial. Se comprueba el redirect en vez
// de borrar el caso, para que la migración quede protegida por el test.
const RETIRED_ITINERARIES = [
  { slug: 'lisboa-romantica', destination: '/blog/lisboa-en-pareja' },
  { slug: 'lisboa-familiar', destination: '/blog/lisboa-con-ninos' },
];

const NONEXISTENT_SLUG = 'itinerario-que-no-existe-de-verdad';

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
      const res = await fetch(baseUrl + '/itinerarios', { redirect: 'manual' });
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
  const res = await fetch(`${baseUrl}/itinerarios`);
  record('/itinerarios responde 200', res.status === 200, `HTTP ${res.status}`);
}

async function checkItinerary(baseUrl, slug) {
  const url = `${baseUrl}/itinerarios/${slug}`;
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
  record(`${slug}: title no es "Guía no encontrada"`, !notFoundTitle, `title="${title}"`);

  const expectedCanonical = `https://${SITE_HOST}/itinerarios/${slug}`;
  record(`${slug}: canonical correcto`, canonical === expectedCanonical, `canonical="${canonical}"`);

  return {
    slug,
    http: res.status,
    title,
    robots,
    canonical,
    ok: !notFoundTitle && canonical === expectedCanonical,
  };
}

async function checkRetired(baseUrl, { slug, destination }) {
  const res = await fetch(`${baseUrl}/itinerarios/${slug}`, { redirect: 'manual' });
  const permanent = res.status === 301 || res.status === 308;
  record(`${slug}: redirect permanente`, permanent, `HTTP ${res.status}`);

  const location = res.headers.get('location');
  const target = location ? new URL(location, baseUrl).pathname : null;
  record(`${slug}: destino ${destination}`, target === destination, target ?? '(sin Location)');

  // Un solo salto: el destino debe responder 200 directamente, sin encadenar
  // otra redirección.
  if (target) {
    const final = await fetch(`${baseUrl}${target}`, { redirect: 'manual' });
    record(`${slug}: sin cadena de redirecciones`, final.status === 200, `HTTP ${final.status} en ${target}`);
  }
}

async function checkNonexistent(baseUrl) {
  const res = await fetch(`${baseUrl}/itinerarios/${NONEXISTENT_SLUG}`, { redirect: 'manual' });
  record(`${NONEXISTENT_SLUG}: HTTP 404`, res.status === 404, `HTTP ${res.status}`);
}

async function main() {
  const explicitBaseUrl = process.env.SMOKE_BASE_URL;
  let child = null;
  let baseUrl = explicitBaseUrl;

  log('NOTA: los 7 slugs de guidePackSlugs tienen ruta estática propia y no');
  log('pasan por itinerarios/[slug]/page.tsx (Next.js prioriza la ruta');
  log('literal). Esta prueba confirma que esas 7 páginas funcionan, y que la');
  log('rama "no encontrado" del route dinámico responde 404 correctamente.');
  log('La rama "encontrado" de itinerarios/[slug]/page.tsx (una guía real');
  log('creada desde /admin en Supabase) no se puede probar aquí: este');
  log('entorno no tiene una conexión Supabase activa con datos de prueba.\n');

  try {
    if (!explicitBaseUrl) {
      log('== Modo local: next build + next start ==');
      await runStep('npx', ['next', 'build']);

      const port = await getFreePort();
      baseUrl = `http://localhost:${port}`;

      const env = { ...process.env, PORT: String(port) };
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

    const itineraryResults = [];
    for (const slug of ITINERARY_SLUGS) {
      itineraryResults.push(await checkItinerary(baseUrl, slug));
    }
    log('');

    for (const retired of RETIRED_ITINERARIES) {
      await checkRetired(baseUrl, retired);
    }
    log('');

    await checkNonexistent(baseUrl);

    log('\n--- Tabla resumen ---');
    log('| Ruta | HTTP | Título | Canonical | Robots | Resultado |');
    log('|---|---|---|---|---|---|');
    for (const r of itineraryResults) {
      const canonicalOk = r.canonical === `https://${SITE_HOST}/itinerarios/${r.slug}`;
      log(
        `| /itinerarios/${r.slug} | ${r.http} | ${r.title ?? '-'} | ${canonicalOk ? 'correcto' : r.canonical ?? '-'} | ${r.robots ?? '(por defecto, index/follow)'} | ${r.ok ? 'OK' : 'FAIL'} |`
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
