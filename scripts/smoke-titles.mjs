#!/usr/bin/env node
/**
 * HTTP smoke test that guards against the site's title.template
 * ("%s | Estaba en Lisboa", set in src/app/layout.tsx) being applied on
 * top of a page title that already includes the brand suffix - which
 * renders as "X | Estaba en Lisboa | Estaba en Lisboa".
 *
 * Checks a fixed list of known public pages over real HTTP against a
 * running server. Blog article titles are intentionally NOT included:
 * they're not in scope to change, and this script only needs to guard
 * pages that were touched by this fix.
 *
 * Two modes, same as scripts/smoke-activities.mjs / smoke-itineraries.mjs:
 *   - Local (default): next build + next start on a free port.
 *   - Remote: set SMOKE_BASE_URL=https://<preview>.vercel.app.
 */

import { spawn } from 'node:child_process';
import net from 'node:net';

const BRAND = 'Estaba en Lisboa';
const DUPLICATE_PATTERN = `${BRAND} | ${BRAND}`;
const isWindows = process.platform === 'win32';
const npxCommand = isWindows ? 'npx.cmd' : 'npx';

// Known public pages whose title should contain the brand exactly once.
const PAGES = [
  '/',
  '/actividades',
  '/itinerarios',
  '/pack-completo',
  '/planifica-tu-viaje',
  '/calculadora-presupuesto-lisboa',
  '/aviso-legal',
  '/politica-privacidad',
  '/politica-cookies',
  '/terminos-condiciones',
  '/faq',
  '/sobre-nosotros',
  '/contacto',
];

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
      const res = await fetch(baseUrl + '/', { redirect: 'manual' });
      if (res.status) return;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server at ${baseUrl} did not respond within ${timeoutMs}ms`);
}

function getTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1] : null;
}

const results = [];
let failures = 0;

function record(name, pass, detail) {
  results.push({ name, pass, detail });
  if (!pass) failures++;
  log(`${pass ? 'OK  ' : 'FAIL'} ${name}${detail ? ' - ' + detail : ''}`);
}

async function checkPage(baseUrl, path) {
  const res = await fetch(`${baseUrl}${path}`, { redirect: 'manual' });
  if (res.status !== 200) {
    record(`${path}: HTTP 200`, false, `HTTP ${res.status}`);
    return;
  }
  const html = await res.text();
  const title = getTitle(html);
  const hasDuplicate = !!title && title.includes(DUPLICATE_PATTERN);
  record(`${path}: sin marca duplicada`, !hasDuplicate, `title="${title}"`);
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

    for (const path of PAGES) {
      await checkPage(baseUrl, path);
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
