#!/usr/bin/env node
/**
 * HTTP smoke test para /free-tours-lisboa y la integración de afiliación
 * de GuruWalk.
 *
 * Igual que los demás smoke tests del repo, golpea un servidor REAL por
 * HTTP en vez de inspeccionar la salida de build, para cazar problemas que
 * typecheck/lint/`next build` no ven (metadata mal resuelta, JSON-LD que
 * no llega al HTML, enlaces sin rel, etc.).
 *
 * Sobre la afiliación: el enlace final se construye a partir de la URL
 * pública de cada categoría más `ref=<ID>` y `pro=true`, con el ID en
 * GURUWALK_AFFILIATE_REF. Si no hay ID configurado, los CTA se renderizan
 * inertes a propósito: enlazar a la URL pública sin `ref` perdería la
 * atribución de la comisión.
 *
 * Como las rutas son dinámicas (se renderizan por petición), un único
 * build sirve para probar los dos estados: se arranca el servidor primero
 * SIN ID (para comprobar que los nueve CTA quedan inertes) y después CON
 * un ID sintético de prueba (para comprobar toda la cadena de enlaces).
 *
 * También admite probar contra un servidor ya arrancado:
 *   SMOKE_BASE_URL=https://mi-preview.vercel.app
 *
 * El código de salida es distinto de cero si falla alguna comprobación.
 */

import { spawn } from 'node:child_process';
import net from 'node:net';

const SITE_HOST = 'estabaenlisboa.com';
const PAGE_PATH = '/free-tours-lisboa';
const FICHA_PATH = '/actividades/free-walking-tour-centro';
const HERO_IMAGE = '/images/lisboa-originales/rua-augusta-arco-lisboa.webp';

// ID de referido SINTÉTICO, solo para pruebas. No es un ID real de nadie.
const TEST_REF = 'SMOKETESTREF123';

// Nueve CTA afiliados en total: 1 hero + 6 tarjetas + 1 CTA final en la
// landing, y 1 en la ficha del free tour.
const TOTAL_AFFILIATE_CTAS = 9;
const LANDING_AFFILIATE_CTAS = 8;

const CATEGORIES = [
  { id: 'imprescindible', anchor: 'ruta-imprescindible', path: '/es/lisboa/tag/imprescindible', campaign: 'free-tour-centro' },
  { id: 'alfama', anchor: 'ruta-alfama', path: '/es/lisboa/tag/alfama', campaign: 'free-tour-alfama' },
  { id: 'belem', anchor: 'ruta-belem', path: '/es/lisboa/tag/belem', campaign: 'free-tour-belem' },
  { id: 'misterios', anchor: 'ruta-misterios', path: '/es/lisboa/tag/leyendas-secretos-y-misterios', campaign: 'free-tour-misterios' },
  { id: 'nocturno', anchor: 'ruta-nocturna', path: '/es/lisboa/tag/nocturno', campaign: 'free-tour-nocturno' },
  { id: 'todos', anchor: 'todos-los-free-tours', path: '/es/lisboa', campaign: 'free-tours-lisboa' },
];

const EXPECTED_CAMPAIGNS = [
  'free-tours-lisboa',
  'free-tour-centro',
  'free-tour-alfama',
  'free-tour-belem',
  'free-tour-misterios',
  'free-tour-nocturno',
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
    const child = spawn(command, args, { stdio: 'inherit', ...opts });
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
      const res = await fetch(baseUrl + PAGE_PATH, { redirect: 'manual' });
      if (res.status) return;
    } catch {
      // todavía no está listo
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server at ${baseUrl} did not respond within ${timeoutMs}ms`);
}

function extractTag(html, regex) {
  const m = html.match(regex);
  return m ? m[1] : null;
}

const getTitle = (html) => extractTag(html, /<title>([^<]*)<\/title>/i);
const getCanonical = (html) => extractTag(html, /<link rel="canonical" href="([^"]*)"/i);
const getRobots = (html) => extractTag(html, /<meta name="robots" content="([^"]*)"/i);
const getDescription = (html) => extractTag(html, /<meta name="description" content="([^"]*)"/i);

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

/** Devuelve todas las etiquetas <a> con su href, rel y target. */
function extractAnchors(html) {
  const anchors = [];
  for (const m of html.matchAll(/<a\s([^>]*)>/gi)) {
    const attrs = m[1];
    const href = attrs.match(/href="([^"]*)"/i);
    if (!href) continue;
    const rel = attrs.match(/rel="([^"]*)"/i);
    const target = attrs.match(/target="([^"]*)"/i);
    anchors.push({
      href: decodeEntities(href[1]),
      rel: rel ? rel[1] : null,
      target: target ? target[1] : null,
    });
  }
  return anchors;
}

/** Cuenta los CTA renderizados como inertes (span con aria-disabled). */
function countInert(html) {
  return [...html.matchAll(/<span[^>]*aria-disabled="true"/gi)].length;
}

/** Extrae el href afiliado que hay dentro de la tarjeta con ese ancla. */
function cardHref(html, anchor) {
  const start = html.indexOf(`id="${anchor}"`);
  if (start === -1) return null;
  const end = html.indexOf('</article>', start);
  const block = html.slice(start, end === -1 ? html.length : end);
  const m = block.match(/href="([^"]*guruwalk[^"]*)"/i);
  return m ? decodeEntities(m[1]) : null;
}

function extractJsonLd(html) {
  const blocks = [];
  for (const m of html.matchAll(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
  )) {
    try {
      blocks.push(JSON.parse(decodeEntities(m[1])));
    } catch {
      blocks.push({ __parseError: true });
    }
  }
  return blocks;
}

const results = [];
let failures = 0;

function record(name, pass, detail) {
  results.push({ name, pass, detail });
  if (!pass) failures++;
  log(`${pass ? 'OK  ' : 'FAIL'} ${name}${detail ? ' - ' + detail : ''}`);
}

function queryKeys(href) {
  const q = href.split('?')[1] ?? '';
  return q ? q.split('&').map((p) => p.split('=')[0]) : [];
}

/* ------------------------------------------------------------------ */
/* Estado SIN identificador de afiliado                                */
/* ------------------------------------------------------------------ */

async function checkInertState(baseUrl) {
  log('--- Sin GURUWALK_AFFILIATE_REF: los CTA deben quedar inertes ---');

  const landing = await (await fetch(baseUrl + PAGE_PATH)).text();
  const ficha = await (await fetch(baseUrl + FICHA_PATH)).text();

  const landingGuru = extractAnchors(landing).filter((a) => a.href.includes('guruwalk.com'));
  const fichaGuru = extractAnchors(ficha).filter((a) => a.href.includes('guruwalk.com'));
  record(
    'sin ID no se publica ninguna URL de GuruWalk',
    landingGuru.length === 0 && fichaGuru.length === 0,
    `landing=${landingGuru.length} ficha=${fichaGuru.length}`
  );

  const inert = countInert(landing) + countInert(ficha);
  record(
    `los ${TOTAL_AFFILIATE_CTAS} CTA afiliados quedan inertes`,
    inert === TOTAL_AFFILIATE_CTAS,
    `${inert} inertes (landing ${countInert(landing)} + ficha ${countInert(ficha)})`
  );

  const placeholder = /(PENDING|INSERT_URL|TODO|XXX|\{\{|%%)/;
  const badHrefs = [...extractAnchors(landing), ...extractAnchors(ficha)].filter((a) =>
    placeholder.test(a.href)
  );
  record(
    'sin ID no aparece ningún placeholder público',
    badHrefs.length === 0,
    badHrefs.length ? badHrefs.map((a) => a.href).join(', ') : 'ninguno'
  );

  record(
    'la landing sigue respondiendo 200 sin ID',
    landing.includes('Free tours en Lisboa para descubrir la ciudad a pie'),
    'H1 presente'
  );
}

/* ------------------------------------------------------------------ */
/* Estado CON identificador de afiliado                                */
/* ------------------------------------------------------------------ */

async function checkLanding(baseUrl) {
  const res = await fetch(baseUrl + PAGE_PATH, { redirect: 'manual' });
  const html = await res.text();

  record(`${PAGE_PATH} responde 200`, res.status === 200, `HTTP ${res.status}`);
  if (res.status !== 200) return;

  // --- SEO base ---
  const title = getTitle(html);
  record('title correcto', !!title && title.startsWith('Free tours en Lisboa'), `title="${title}"`);

  const brandCount = (title || '').split('Estaba en Lisboa').length - 1;
  record('title no duplica la marca', brandCount === 1, `apariciones=${brandCount}`);

  const description = getDescription(html);
  record(
    'description presente y con longitud razonable',
    !!description && description.length >= 80 && description.length <= 200,
    `${description ? description.length : 0} caracteres`
  );

  const canonical = getCanonical(html);
  record(
    'canonical correcto',
    canonical === `https://${SITE_HOST}${PAGE_PATH}`,
    `canonical="${canonical}"`
  );

  const robots = getRobots(html);
  record('robots es indexable', !robots || !/noindex/.test(robots), `robots="${robots ?? '(por defecto)'}"`);

  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]*>/g, '').trim()
  );
  record('hay exactamente un H1', h1s.length === 1, `H1s=${h1s.length}`);
  record(
    'H1 correcto',
    h1s[0] === 'Free tours en Lisboa para descubrir la ciudad a pie',
    `h1="${h1s[0] ?? '-'}"`
  );

  // --- JSON-LD ---
  const jsonLd = extractJsonLd(html);
  record('todos los bloques JSON-LD parsean', jsonLd.every((b) => !b.__parseError), `${jsonLd.length} bloques`);

  const faq = jsonLd.find((b) => b['@type'] === 'FAQPage');
  record(
    'FAQPage schema válido',
    !!faq &&
      Array.isArray(faq.mainEntity) &&
      faq.mainEntity.length > 0 &&
      faq.mainEntity.every((q) => q['@type'] === 'Question' && q.name && q.acceptedAnswer?.text),
    faq ? `${faq.mainEntity?.length} preguntas` : 'ausente'
  );

  const breadcrumb = jsonLd.find((b) => b['@type'] === 'BreadcrumbList');
  record(
    'BreadcrumbList schema válido',
    !!breadcrumb &&
      breadcrumb.itemListElement?.length === 3 &&
      breadcrumb.itemListElement.at(-1)?.item === `https://${SITE_HOST}${PAGE_PATH}`,
    breadcrumb ? `${breadcrumb.itemListElement?.length} niveles` : 'ausente'
  );

  const itemList = jsonLd.find((b) => b['@type'] === 'ItemList');
  record(
    'ItemList schema presente y solo de categorías',
    !!itemList && itemList.itemListElement?.length === CATEGORIES.length,
    itemList ? `${itemList.itemListElement?.length} categorías` : 'ausente'
  );

  const serialized = JSON.stringify(jsonLd);
  record(
    'ningún schema declara Offer ni price',
    !/"@type"\s*:\s*"Offer"/.test(serialized) && !/"price"/.test(serialized),
    'sin Offer/price'
  );

  record('breadcrumb visible presente', /aria-label="Breadcrumb"/.test(html), 'nav[aria-label=Breadcrumb]');

  const missingAnchors = CATEGORIES.filter((c) => !html.includes(`id="${c.anchor}"`));
  record(
    'todas las tarjetas de ruta tienen su ancla',
    missingAnchors.length === 0,
    missingAnchors.length ? `faltan: ${missingAnchors.map((c) => c.anchor).join(', ')}` : `${CATEGORIES.length} anclas`
  );

  record(
    'divulgación de afiliación presente',
    /Divulgaci[óo]n/.test(html) && /comisi[óo]n/.test(html),
    'AffiliateDisclosure'
  );

  record(
    'no afirma rankings ni datos volátiles',
    !/el mejor tour|los mejores tours|últimas plazas|plazas disponibles|\d+ reseñas|\d+ opiniones/i.test(html),
    'sin rankings ni disponibilidad inventada'
  );

  // --- Enlaces afiliados ---
  const anchors = extractAnchors(html);
  const affiliate = anchors.filter((a) => a.href.includes('guruwalk.com'));

  const placeholder = /(PENDING|INSERT_URL|TODO|XXX|\{\{|%%|undefined|null)/;
  const badHrefs = anchors.filter((a) => placeholder.test(a.href));
  record(
    'ningún enlace contiene placeholders',
    badHrefs.length === 0,
    badHrefs.length ? badHrefs.map((a) => a.href).join(', ') : `${anchors.length} enlaces revisados`
  );

  record(
    'se renderizan los 8 CTA afiliados de la landing',
    affiliate.length === LANDING_AFFILIATE_CTAS,
    `${affiliate.length} enlaces afiliados`
  );

  record(
    'ningún CTA queda inerte con ID configurado',
    countInert(html) === 0,
    `${countInert(html)} inertes`
  );

  const missingRel = affiliate.filter((a) => !a.rel?.split(/\s+/).includes('sponsored'));
  record('todos llevan rel="sponsored"', missingRel.length === 0, missingRel.length ? `${missingRel.length} sin sponsored` : 'todos');

  const missingNoopener = affiliate.filter(
    (a) => !a.rel?.includes('noopener') || !a.rel?.includes('noreferrer')
  );
  record('todos llevan noopener y noreferrer', missingNoopener.length === 0, missingNoopener.length ? `${missingNoopener.length} incompletos` : 'todos');

  const missingTarget = affiliate.filter((a) => a.target !== '_blank');
  record('todos abren en pestaña nueva', missingTarget.length === 0, missingTarget.length ? `${missingTarget.length} sin target` : 'todos');

  // 2. ref=<ID> en todos
  const missingRef = affiliate.filter((a) => !a.href.includes(`ref=${TEST_REF}`));
  record(
    'todos los enlaces llevan ref=<ID>',
    missingRef.length === 0,
    missingRef.length ? `${missingRef.length} sin ref` : `ref=${TEST_REF} en los ${affiliate.length}`
  );

  // 3. pro=true en todos
  const missingPro = affiliate.filter((a) => !a.href.includes('pro=true'));
  record(
    'todos los enlaces llevan pro=true',
    missingPro.length === 0,
    missingPro.length ? `${missingPro.length} sin pro` : 'todos'
  );

  // 4. UTMs
  const missingUtm = affiliate.filter(
    (a) =>
      !a.href.includes('utm_source=estabaenlisboa') ||
      !a.href.includes('utm_medium=affiliate') ||
      !a.href.includes('utm_campaign=') ||
      !a.href.includes('utm_content=')
  );
  record('todos llevan las cuatro UTMs', missingUtm.length === 0, missingUtm.length ? `${missingUtm.length} incompletos` : 'todas');

  // 5. Sin parámetros duplicados
  const duplicated = affiliate.filter((a) => {
    const keys = queryKeys(a.href);
    return new Set(keys).size !== keys.length;
  });
  record('ningún enlace duplica parámetros', duplicated.length === 0, duplicated.length ? `${duplicated.length} con duplicados` : 'ninguno');

  // 1. Cada tarjeta enlaza a SU categoría
  for (const cat of CATEGORIES) {
    const href = cardHref(html, cat.anchor);
    if (!href) {
      record(`tarjeta ${cat.id}: tiene enlace afiliado`, false, 'no encontrado');
      continue;
    }
    let pathname = null;
    try {
      pathname = new URL(href).pathname.replace(/\/$/, '') || '/';
    } catch {
      /* url inválida */
    }
    record(
      `tarjeta ${cat.id}: enlaza a su categoría`,
      pathname === cat.path,
      `${pathname ?? 'url inválida'}`
    );
    record(
      `tarjeta ${cat.id}: campaña correcta`,
      href.includes(`utm_campaign=${cat.campaign}`),
      `utm_campaign=${cat.campaign}`
    );
  }

  const foundCampaigns = new Set(
    affiliate.map((a) => a.href.match(/utm_campaign=([^&]*)/)?.[1]).filter(Boolean)
  );
  const missingCampaigns = EXPECTED_CAMPAIGNS.filter((c) => !foundCampaigns.has(c));
  record(
    'están presentes todas las campañas esperadas',
    missingCampaigns.length === 0,
    missingCampaigns.length ? `faltan: ${missingCampaigns.join(', ')}` : `${foundCampaigns.size} campañas`
  );

  // 7. Nunca tours individuales
  const individual = affiliate.filter((a) => {
    try {
      const path = new URL(a.href).pathname.replace(/\/$/, '');
      return !/^\/es\/lisboa(\/tag\/[a-z0-9-]+)?$/.test(path);
    } catch {
      return true;
    }
  });
  record(
    'no se enlaza a ningún tour individual',
    individual.length === 0,
    individual.length ? individual.map((a) => a.href).join(', ') : 'solo destino y categorías'
  );
}

async function checkHeroImage(baseUrl) {
  const res = await fetch(baseUrl + HERO_IMAGE, { redirect: 'manual' });
  record('la foto del hero no da 404', res.status === 200, `HTTP ${res.status} ${HERO_IMAGE}`);
}

async function checkSitemap(baseUrl) {
  const res = await fetch(`${baseUrl}/sitemap.xml`);
  const xml = await res.text();
  record('/sitemap.xml responde 200', res.status === 200, `HTTP ${res.status}`);
  record('la landing está en el sitemap', xml.includes(`https://${SITE_HOST}${PAGE_PATH}<`), 'presente');
}

async function checkActividades(baseUrl) {
  const res = await fetch(`${baseUrl}/actividades`);
  const html = await res.text();
  record('/actividades sigue respondiendo 200', res.status === 200, `HTTP ${res.status}`);
  record('/actividades enlaza la landing de free tours', html.includes(`href="${PAGE_PATH}"`), 'enlace presente');

  const anchorLinks = CATEGORIES.slice(0, 3).filter((c) => html.includes(`href="${PAGE_PATH}#${c.anchor}"`));
  record('/actividades enlaza las 3 rutas destacadas', anchorLinks.length === 3, `${anchorLinks.length}/3`);

  const fichas = new Set([...html.matchAll(/href="\/actividades\/([a-z0-9-]+)"/g)].map((m) => m[1]));
  record('/actividades no rompe el catálogo (20 fichas)', fichas.size === 20, `${fichas.size} fichas enlazadas`);
}

async function checkActivityFiche(baseUrl) {
  const res = await fetch(baseUrl + FICHA_PATH, { redirect: 'manual' });
  const html = await res.text();

  record('free-walking-tour-centro: HTTP 200', res.status === 200, `HTTP ${res.status}`);
  if (res.status !== 200) return;

  record('free-walking-tour-centro: sigue con noindex, follow', getRobots(html) === 'noindex, follow', `robots="${getRobots(html)}"`);
  record('free-walking-tour-centro: CTA actualizado', html.includes('Consultar free tours y horarios'), 'texto del CTA');
  record('free-walking-tour-centro: enlaza la landing', html.includes(`href="${PAGE_PATH}"`), 'enlace interno');
  record('free-walking-tour-centro: mantiene la foto del Arco', html.includes('rua-augusta-arco-lisboa'), 'imagen propia');

  const affiliate = extractAnchors(html).filter((a) => a.href.includes('guruwalk.com'));
  record(
    'free-walking-tour-centro: 1 CTA afiliado con sponsored',
    affiliate.length === 1 && affiliate[0].rel?.split(/\s+/).includes('sponsored'),
    `${affiliate.length} enlaces`
  );
  record(
    'free-walking-tour-centro: enlaza a la categoría imprescindible',
    affiliate.some((a) => {
      try {
        return new URL(a.href).pathname.replace(/\/$/, '') === '/es/lisboa/tag/imprescindible';
      } catch {
        return false;
      }
    }),
    '/es/lisboa/tag/imprescindible'
  );
  record(
    'free-walking-tour-centro: lleva ref y pro',
    affiliate.every((a) => a.href.includes(`ref=${TEST_REF}`) && a.href.includes('pro=true')),
    'ref + pro=true'
  );
}

/* ------------------------------------------------------------------ */

async function startServer(extraEnv) {
  const port = await getFreePort();
  const baseUrl = `http://localhost:${port}`;
  const env = { ...process.env, ...extraEnv, PORT: String(port) };

  if (!env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = 'pk_test_bm9pbmRleC1zbW9rZXRlc3QuY2xlcmsuYWNjb3VudHMuZGV2JA==';
    env.CLERK_SECRET_KEY = env.CLERK_SECRET_KEY || 'sk_test_localsmoketestdummykeyfor000000000000000000';
  }

  // `detached` crea un grupo de procesos propio: al terminar podemos matar
  // el grupo entero. Si sólo se señaliza al proceso de `npx`, el
  // `next-server` hijo sobrevive y deja colgada cualquier tubería que lea
  // la salida de este script.
  const child = spawn('npx', ['next', 'start', '-p', String(port)], {
    stdio: 'inherit',
    env,
    detached: true,
  });
  await waitForServer(baseUrl);
  return { child, baseUrl };
}

function stopServer(child) {
  if (!child) return;
  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch {
    child.kill('SIGTERM');
  }
}

async function main() {
  const explicitBaseUrl = process.env.SMOKE_BASE_URL;
  let child = null;

  try {
    if (explicitBaseUrl) {
      log(`== Modo remoto: probando ${explicitBaseUrl} (sin build/start local) ==\n`);
      const probe = await (await fetch(explicitBaseUrl + PAGE_PATH)).text();
      if (probe.includes('guruwalk.com')) {
        await checkLanding(explicitBaseUrl);
        log('');
        await checkActivityFiche(explicitBaseUrl);
      } else {
        log('El servidor remoto no tiene ID de afiliado configurado.\n');
        await checkInertState(explicitBaseUrl);
      }
      log('');
      await checkHeroImage(explicitBaseUrl);
      log('');
      await checkSitemap(explicitBaseUrl);
      log('');
      await checkActividades(explicitBaseUrl);
    } else {
      log('== Modo local: next build + dos arranques de next start ==');
      await runStep('npx', ['next', 'build']);

      // Fase 1: sin identificador de afiliado.
      log('\n== Fase 1: servidor SIN GURUWALK_AFFILIATE_REF ==');
      let server = await startServer({
        GURUWALK_AFFILIATE_REF: '',
        GURUWALK_AFFILIATE_URL_LISBOA: '',
      });
      child = server.child;
      log('Servidor listo.\n');
      await checkInertState(server.baseUrl);
      stopServer(child);
      child = null;

      // Fase 2: con identificador sintético de prueba.
      log(`\n== Fase 2: servidor CON GURUWALK_AFFILIATE_REF=${TEST_REF} ==`);
      server = await startServer({
        GURUWALK_AFFILIATE_REF: TEST_REF,
        GURUWALK_AFFILIATE_URL_LISBOA: '',
      });
      child = server.child;
      log('Servidor listo.\n');

      await checkLanding(server.baseUrl);
      log('');
      await checkHeroImage(server.baseUrl);
      log('');
      await checkSitemap(server.baseUrl);
      log('');
      await checkActividades(server.baseUrl);
      log('');
      await checkActivityFiche(server.baseUrl);
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
    stopServer(child);
  }
}

main();
