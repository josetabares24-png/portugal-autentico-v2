#!/usr/bin/env node
/**
 * Smoke test HTTP de /calculadora-presupuesto-lisboa.
 *
 * Comprueba el HTML realmente servido, no el código fuente. Lo que vigila:
 *
 *   - que la página responde 200 sin redirección y tiene un solo H1;
 *   - que el `canonical`, el `robots` y los metadatos sociales son los suyos;
 *   - que el resultado por defecto se sirve ya renderizado y es un rango, no
 *     una cifra suelta —que es la única promesa que hace esta herramienta—;
 *   - que las reglas del cálculo y lo que no incluye están publicados
 *     íntegros, comparándolos contra la fuente de verdad del módulo;
 *   - que dos peticiones idénticas devuelven el mismo resultado;
 *   - que ninguno de sus enlaces internos está roto ni pasa por un redirect.
 *
 * Dos modos, como el resto de suites:
 *   - Local (por defecto): next build + next start en un puerto libre.
 *   - Remoto: SMOKE_BASE_URL=https://<preview>.vercel.app
 */

import { spawn } from 'node:child_process';
import net from 'node:net';
import {
  BUDGET_ASSUMPTIONS,
  NO_INCLUIDO,
  calculateLisbonBudget,
  formatRango,
} from '../src/lib/budget-calculator.ts';

const RUTA = '/calculadora-presupuesto-lisboa';
const BRAND = 'Estaba en Lisboa';
const isWindows = process.platform === 'win32';
const npxCommand = isWindows ? 'npx.cmd' : 'npx';

/** Estado inicial de la página. Debe coincidir con los `useState` de page.tsx. */
const ESTADO_INICIAL = {
  dias: 3,
  personas: 2,
  alojamiento: 'intermedio',
  comida: 'mixto',
  transporte: 'publico',
  visitas: 'algunas',
  excursionSintra: false,
};

/** Enlaces internos que la página debe ofrecer, todos vivos y sin redirect. */
const ENLACES_INTERNOS = [
  '/blog/presupuesto-viajar-lisboa',
  '/blog/como-moverse-por-lisboa',
  '/blog/donde-alojarse-en-lisboa',
  '/comprar-entradas',
  '/free-tours-lisboa',
  '/pack-completo',
];

/** Páginas que deben enlazar a la calculadora. */
const ENTRADAS = ['/planifica-tu-viaje', '/blog/presupuesto-viajar-lisboa'];

/** Vocabulario prohibido: promete una exactitud que la herramienta no tiene. */
const PROMESAS_PROHIBIDAS = [
  'precio exacto',
  'precio final',
  'coste exacto',
  'presupuesto exacto',
  'garantizado',
  'sin sorpresas',
];

function log(...args) {
  console.log(...args);
}

const results = [];
let failures = 0;

function record(name, pass, detail) {
  results.push({ name, pass, detail });
  if (!pass) failures++;
  log(`${pass ? 'OK  ' : 'FAIL'} ${name}${detail ? ' - ' + detail : ''}`);
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
      else reject(new Error(`${command} ${args.join(' ')} salió con código ${code}`));
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
      // todavía no responde
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`El servidor en ${baseUrl} no respondió en ${timeoutMs}ms`);
}

/** Texto plano del HTML, con las entidades que usamos ya resueltas. */
function aTexto(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&aacute;/g, 'á')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizar(texto) {
  return texto.replace(/\s+/g, ' ').replace(/[’']/g, "'").trim();
}

function meta(html, patron) {
  const m = html.match(patron);
  return m ? m[1] : null;
}

async function comprobarPagina(baseUrl) {
  const res = await fetch(`${baseUrl}${RUTA}`, { redirect: 'manual' });
  record(`${RUTA}: HTTP 200 sin redirección`, res.status === 200, `HTTP ${res.status}`);
  if (res.status !== 200) return null;

  const html = await res.text();
  const texto = normalizar(aTexto(html));

  // --- Estructura ---
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  record('un solo H1', h1.length === 1, `${h1.length} encontrados`);

  const h2 = html.match(/<h2[^>]*>/gi) || [];
  record('tiene secciones (H2)', h2.length >= 3, `${h2.length} H2`);

  // --- Metadatos ---
  const title = meta(html, /<title>([^<]*)<\/title>/i);
  record(
    'title propio y con la marca una sola vez',
    !!title && !title.includes(`${BRAND} | ${BRAND}`) && /presupuesto/i.test(title),
    `title="${title}"`
  );

  const canonical = meta(html, /<link rel="canonical" href="([^"]+)"/i);
  record(
    'canonical propio',
    canonical === `https://estabaenlisboa.com${RUTA}`,
    canonical || 'ausente'
  );

  const robots = meta(html, /<meta name="robots" content="([^"]+)"/i);
  record('indexable', !!robots && robots.includes('index') && !robots.includes('noindex'), robots || 'sin meta robots');

  const ogTitle = meta(html, /<meta property="og:title" content="([^"]+)"/i);
  const twitterCard = meta(html, /<meta name="twitter:card" content="([^"]+)"/i);
  const twitterTitle = meta(html, /<meta name="twitter:title" content="([^"]+)"/i);
  record('og:title propio', !!ogTitle, ogTitle || 'ausente');
  record('twitter:card es summary_large_image', twitterCard === 'summary_large_image', twitterCard || 'ausente');
  record('twitter:title alineado con og:title', !!twitterTitle && twitterTitle === ogTitle, twitterTitle || 'ausente');

  // --- El resultado por defecto, ya renderizado en el servidor ---
  const esperado = calculateLisbonBudget(ESTADO_INICIAL);
  const total = formatRango(esperado.total);
  record(
    'el resultado por defecto se sirve renderizado',
    texto.includes(normalizar(total)),
    `esperado "${total}"`
  );
  record(
    'el resultado es un rango, no una cifra',
    esperado.total.max > esperado.total.min && total.includes('–'),
    total
  );
  record(
    'muestra el gasto por persona y día',
    texto.includes(normalizar(formatRango(esperado.porPersonaYDia))),
    formatRango(esperado.porPersonaYDia)
  );

  let categoriasOk = 0;
  for (const categoria of esperado.categorias) {
    if (texto.includes(normalizar(categoria.label))) categoriasOk++;
  }
  record(
    'el desglose muestra todas las categorías',
    categoriasOk === esperado.categorias.length,
    `${categoriasOk}/${esperado.categorias.length}`
  );

  // --- Transparencia: reglas y exclusiones publicadas íntegras ---
  const reglasFaltan = BUDGET_ASSUMPTIONS.filter((r) => !texto.includes(normalizar(r)));
  record(
    'publica las reglas del cálculo',
    reglasFaltan.length === 0,
    reglasFaltan.length ? `faltan ${reglasFaltan.length}` : `${BUDGET_ASSUMPTIONS.length} reglas`
  );

  const exclusionesFaltan = NO_INCLUIDO.filter((r) => !texto.includes(normalizar(r)));
  record(
    'publica lo que no está contado',
    exclusionesFaltan.length === 0,
    exclusionesFaltan.length ? `faltan ${exclusionesFaltan.length}` : `${NO_INCLUIDO.length} exclusiones`
  );

  record(
    'avisa de que no incluye los vuelos',
    /vuelos/i.test(texto),
    null
  );

  // --- Nada que prometa exactitud ---
  const enMinusculas = texto.toLowerCase();
  const promesas = PROMESAS_PROHIBIDAS.filter((p) => enMinusculas.includes(p));
  record(
    'no promete precisión que no tiene',
    promesas.length === 0,
    promesas.length ? `aparece: ${promesas.join(', ')}` : null
  );

  // --- Datos estructurados ---
  const bloques = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  let faq = null;
  for (const bloque of bloques) {
    try {
      const json = JSON.parse(bloque[1]);
      if (json['@type'] === 'FAQPage') faq = json;
    } catch {
      record('JSON-LD parseable', false, 'un bloque no es JSON válido');
    }
  }
  record('tiene FAQPage', !!faq, faq ? `${faq.mainEntity.length} preguntas` : 'ausente');
  if (faq) {
    const todasVisibles = faq.mainEntity.every((q) => texto.includes(normalizar(q.name)));
    record('cada pregunta del FAQPage está visible en la página', todasVisibles, null);
  }

  return html;
}

async function comprobarDeterminismo(baseUrl) {
  const [a, b] = await Promise.all([
    fetch(`${baseUrl}${RUTA}`).then((r) => r.text()),
    fetch(`${baseUrl}${RUTA}`).then((r) => r.text()),
  ]);
  const extraer = (html) => {
    const t = aTexto(html);
    const m = t.match(/Presupuesto orientativo\s+([^A-Z]{0,40})/);
    return m ? m[1].trim() : null;
  };
  const ra = extraer(a);
  const rb = extraer(b);
  record(
    'dos peticiones idénticas devuelven el mismo resultado',
    !!ra && ra === rb,
    ra && rb ? `"${ra}" / "${rb}"` : 'no se pudo extraer el resultado'
  );
}

async function comprobarEnlace(baseUrl, ruta) {
  const res = await fetch(`${baseUrl}${ruta}`, { redirect: 'manual' });
  record(`enlace ${ruta}: 200 sin redirección`, res.status === 200, `HTTP ${res.status}`);
}

async function comprobarEntrada(baseUrl, ruta) {
  const res = await fetch(`${baseUrl}${ruta}`, { redirect: 'manual' });
  if (res.status !== 200) {
    record(`${ruta} enlaza a la calculadora`, false, `HTTP ${res.status}`);
    return;
  }
  const html = await res.text();
  record(`${ruta} enlaza a la calculadora`, html.includes(RUTA), null);
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

    await comprobarPagina(baseUrl);
    await comprobarDeterminismo(baseUrl);

    log('\n-- Enlaces internos --');
    for (const ruta of ENLACES_INTERNOS) {
      await comprobarEnlace(baseUrl, ruta);
    }

    log('\n-- Páginas que enlazan a la calculadora --');
    for (const ruta of ENTRADAS) {
      await comprobarEntrada(baseUrl, ruta);
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
