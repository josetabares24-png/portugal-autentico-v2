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
 * Sobre los enlaces afiliados: en producción la URL afiliada real llega por
 * variable de entorno y, si no está definida, los CTA se renderizan
 * inertes a propósito (enlazar a la URL pública de GuruWalk perdería la
 * atribución de la comisión). Para poder probar de verdad la cadena
 * completa —preservación de los parámetros del partner + UTMs propias +
 * rel="sponsored"— este script arranca el servidor con una URL afiliada
 * SINTÉTICA de prueba. No es un enlace real y nunca se publica.
 *
 * Dos modos:
 *   - Local (por defecto): `next build`, `next start` en un puerto libre.
 *   - Contra un servidor ya arrancado: SMOKE_BASE_URL=https://...
 *     (en ese modo no se inyecta la URL afiliada de prueba, así que las
 *     comprobaciones de afiliación se omiten si no hay enlaces).
 *
 * El código de salida es distinto de cero si falla alguna comprobación.
 */

import { spawn } from 'node:child_process';
import net from 'node:net';

const SITE_HOST = 'estabaenlisboa.com';
const PAGE_PATH = '/free-tours-lisboa';
const HERO_IMAGE = '/images/lisboa-originales/rua-augusta-arco-lisboa.webp';

// URL afiliada sintética solo para pruebas. El parámetro tiene un nombre
// deliberadamente inventado y reconocible: no imita ningún parámetro real
// de GuruWalk, solo sirve para verificar que NO se pierde por el camino.
const TEST_AFFILIATE_PARAM = 'smoke_test_ref';
const TEST_AFFILIATE_VALUE = 'SMOKE123';
const TEST_AFFILIATE_URL = `https://www.guruwalk.com/es/lisboa?${TEST_AFFILIATE_PARAM}=${TEST_AFFILIATE_VALUE}`;

const EXPECTED_CAMPAIGNS = [
  'free-tours-lisboa',
  'free-tour-centro',
  'free-tour-alfama',
  'free-tour-belem',
  'free-tour-misterios',
  'free-tour-nocturno',
];

const CATEGORY_ANCHORS = [
  'ruta-imprescindible',
  'ruta-alfama',
  'ruta-belem',
  'ruta-misterios',
  'ruta-nocturna',
  'todos-los-free-tours',
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
const getDescription = (html) =>
  extractTag(html, /<meta name="description" content="([^"]*)"/i);

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

/** Devuelve todas las etiquetas <a> con su href y su rel. */
function extractAnchors(html) {
  const anchors = [];
  for (const m of html.matchAll(/<a\s([^>]*)>/gi)) {
    const attrs = m[1];
    const href = attrs.match(/href="([^"]*)"/i);
    const rel = attrs.match(/rel="([^"]*)"/i);
    const target = attrs.match(/target="([^"]*)"/i);
    if (!href) continue;
    anchors.push({
      href: decodeEntities(href[1]),
      rel: rel ? rel[1] : null,
      target: target ? target[1] : null,
    });
  }
  return anchors;
}

/** Extrae los bloques JSON-LD ya parseados. */
function extractJsonLd(html) {
  const blocks = [];
  for (const m of html.matchAll(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
  )) {
    try {
      blocks.push(JSON.parse(decodeEntities(m[1])));
    } catch {
      blocks.push({ __parseError: true, raw: m[1].slice(0, 120) });
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

async function checkLanding(baseUrl, affiliateConfigured) {
  const res = await fetch(baseUrl + PAGE_PATH, { redirect: 'manual' });
  const html = await res.text();

  record(`${PAGE_PATH} responde 200`, res.status === 200, `HTTP ${res.status}`);
  if (res.status !== 200) return;

  // --- SEO base ---
  const title = getTitle(html);
  record(
    'title correcto',
    !!title && title.startsWith('Free tours en Lisboa'),
    `title="${title}"`
  );

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

  // Next puede omitir la meta robots cuando el valor es el por defecto
  // (index, follow); lo que nunca debe aparecer aquí es un noindex.
  const robots = getRobots(html);
  record(
    'robots es indexable',
    !robots || !/noindex/.test(robots),
    `robots="${robots ?? '(por defecto: index, follow)'}"`
  );

  // --- H1 ---
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]*>/g, '').trim()
  );
  record('hay exactamente un H1', h1Matches.length === 1, `H1s=${h1Matches.length}`);
  record(
    'H1 correcto',
    h1Matches[0] === 'Free tours en Lisboa para descubrir la ciudad a pie',
    `h1="${h1Matches[0] ?? '-'}"`
  );

  // --- JSON-LD ---
  const jsonLd = extractJsonLd(html);
  record(
    'todos los bloques JSON-LD parsean',
    jsonLd.every((b) => !b.__parseError),
    `${jsonLd.length} bloques`
  );

  const faq = jsonLd.find((b) => b['@type'] === 'FAQPage');
  record(
    'FAQPage schema válido',
    !!faq &&
      Array.isArray(faq.mainEntity) &&
      faq.mainEntity.length > 0 &&
      faq.mainEntity.every(
        (q) => q['@type'] === 'Question' && q.name && q.acceptedAnswer?.text
      ),
    faq ? `${faq.mainEntity?.length} preguntas` : 'ausente'
  );

  const breadcrumb = jsonLd.find((b) => b['@type'] === 'BreadcrumbList');
  record(
    'BreadcrumbList schema válido',
    !!breadcrumb &&
      Array.isArray(breadcrumb.itemListElement) &&
      breadcrumb.itemListElement.length === 3 &&
      breadcrumb.itemListElement.at(-1)?.item === `https://${SITE_HOST}${PAGE_PATH}`,
    breadcrumb ? `${breadcrumb.itemListElement?.length} niveles` : 'ausente'
  );

  const itemList = jsonLd.find((b) => b['@type'] === 'ItemList');
  record(
    'ItemList schema presente y solo de categorías',
    !!itemList &&
      Array.isArray(itemList.itemListElement) &&
      itemList.itemListElement.length === CATEGORY_ANCHORS.length,
    itemList ? `${itemList.itemListElement?.length} categorías` : 'ausente'
  );

  const serialized = JSON.stringify(jsonLd);
  record(
    'ningún schema declara Offer ni price',
    !/"@type"\s*:\s*"Offer"/.test(serialized) && !/"price"/.test(serialized),
    'sin Offer/price'
  );

  // --- Breadcrumb visible ---
  record(
    'breadcrumb visible presente',
    /aria-label="Breadcrumb"/.test(html),
    'nav[aria-label=Breadcrumb]'
  );

  // --- Anclas de categoría ---
  const missingAnchors = CATEGORY_ANCHORS.filter(
    (a) => !html.includes(`id="${a}"`)
  );
  record(
    'todas las tarjetas de ruta tienen su ancla',
    missingAnchors.length === 0,
    missingAnchors.length ? `faltan: ${missingAnchors.join(', ')}` : `${CATEGORY_ANCHORS.length} anclas`
  );

  // --- Divulgación de afiliación ---
  record(
    'divulgación de afiliación presente',
    /Divulgaci[óo]n/.test(html) && /comisi[óo]n/.test(html),
    'AffiliateDisclosure'
  );

  // --- Nada de datos volátiles inventados ---
  record(
    'no afirma rankings ni datos volátiles',
    !/el mejor tour|los mejores tours|últimas plazas|plazas disponibles|\d+ reseñas|\d+ opiniones/i.test(
      html
    ),
    'sin rankings ni disponibilidad inventada'
  );

  // --- Enlaces ---
  const anchors = extractAnchors(html);
  const affiliateAnchors = anchors.filter((a) => a.href.includes('guruwalk.com'));

  const placeholderPattern = /(PENDING|INSERT_URL|TODO|XXX|\{\{|%%|undefined|null)/;
  const badHrefs = anchors.filter((a) => placeholderPattern.test(a.href));
  record(
    'ningún enlace contiene placeholders',
    badHrefs.length === 0,
    badHrefs.length ? badHrefs.map((a) => a.href).join(', ') : `${anchors.length} enlaces revisados`
  );

  if (!affiliateConfigured) {
    record(
      'sin enlace afiliado configurado, no se publica ninguna URL de GuruWalk',
      affiliateAnchors.length === 0,
      `${affiliateAnchors.length} enlaces a guruwalk.com`
    );
    return;
  }

  record(
    'se renderizan enlaces afiliados',
    affiliateAnchors.length >= CATEGORY_ANCHORS.length,
    `${affiliateAnchors.length} enlaces afiliados`
  );

  const missingRel = affiliateAnchors.filter(
    (a) => !a.rel || !a.rel.split(/\s+/).includes('sponsored')
  );
  record(
    'todos los enlaces afiliados llevan rel="sponsored"',
    missingRel.length === 0,
    missingRel.length ? `${missingRel.length} sin sponsored` : 'todos'
  );

  const missingNoopener = affiliateAnchors.filter(
    (a) => !a.rel || !a.rel.includes('noopener') || !a.rel.includes('noreferrer')
  );
  record(
    'todos llevan noopener y noreferrer',
    missingNoopener.length === 0,
    missingNoopener.length ? `${missingNoopener.length} incompletos` : 'todos'
  );

  const missingTarget = affiliateAnchors.filter((a) => a.target !== '_blank');
  record(
    'todos abren en pestaña nueva',
    missingTarget.length === 0,
    missingTarget.length ? `${missingTarget.length} sin target` : 'todos'
  );

  // Preservación del parámetro original del partner
  const losingParam = affiliateAnchors.filter(
    (a) => !a.href.includes(`${TEST_AFFILIATE_PARAM}=${TEST_AFFILIATE_VALUE}`)
  );
  record(
    'se conserva el parámetro afiliado original',
    losingParam.length === 0,
    losingParam.length ? `${losingParam.length} lo pierden` : 'conservado en todos'
  );

  // UTMs añadidas
  const missingUtm = affiliateAnchors.filter(
    (a) =>
      !a.href.includes('utm_source=estabaenlisboa') ||
      !a.href.includes('utm_medium=affiliate') ||
      !a.href.includes('utm_campaign=') ||
      !a.href.includes('utm_content=')
  );
  record(
    'todos los enlaces afiliados llevan las cuatro UTMs',
    missingUtm.length === 0,
    missingUtm.length ? `${missingUtm.length} incompletos` : 'todos'
  );

  // Sin parámetros duplicados
  const duplicated = affiliateAnchors.filter((a) => {
    const query = a.href.split('?')[1] ?? '';
    const keys = query.split('&').map((p) => p.split('=')[0]);
    return new Set(keys).size !== keys.length;
  });
  record(
    'ningún enlace duplica parámetros',
    duplicated.length === 0,
    duplicated.length ? `${duplicated.length} con duplicados` : 'ninguno'
  );

  // Campañas esperadas
  const foundCampaigns = new Set(
    affiliateAnchors
      .map((a) => a.href.match(/utm_campaign=([^&]*)/)?.[1])
      .filter(Boolean)
  );
  const missingCampaigns = EXPECTED_CAMPAIGNS.filter((c) => !foundCampaigns.has(c));
  record(
    'están presentes todas las campañas esperadas',
    missingCampaigns.length === 0,
    missingCampaigns.length ? `faltan: ${missingCampaigns.join(', ')}` : `${foundCampaigns.size} campañas`
  );

  // Nunca enlaces a tours individuales
  const individualTours = affiliateAnchors.filter((a) => {
    const path = new URL(a.href).pathname;
    return !/^\/es\/lisboa(\/tag\/[a-z0-9-]+)?\/?$/.test(path);
  });
  record(
    'no se enlaza a ningún tour individual',
    individualTours.length === 0,
    individualTours.length
      ? individualTours.map((a) => new URL(a.href).pathname).join(', ')
      : 'solo destino y categorías'
  );
}

async function checkHeroImage(baseUrl) {
  const res = await fetch(baseUrl + HERO_IMAGE, { redirect: 'manual' });
  record(
    'la foto del hero no da 404',
    res.status === 200,
    `HTTP ${res.status} ${HERO_IMAGE}`
  );
}

async function checkSitemap(baseUrl) {
  const res = await fetch(`${baseUrl}/sitemap.xml`);
  const xml = await res.text();
  record('/sitemap.xml responde 200', res.status === 200, `HTTP ${res.status}`);
  record(
    'la landing está en el sitemap',
    xml.includes(`https://${SITE_HOST}${PAGE_PATH}<`),
    'presente'
  );
}

async function checkActividades(baseUrl) {
  const res = await fetch(`${baseUrl}/actividades`);
  const html = await res.text();
  record('/actividades sigue respondiendo 200', res.status === 200, `HTTP ${res.status}`);

  record(
    '/actividades enlaza la landing de free tours',
    html.includes(`href="${PAGE_PATH}"`),
    'enlace presente'
  );

  const anchorLinks = CATEGORY_ANCHORS.slice(0, 3).filter((a) =>
    html.includes(`href="${PAGE_PATH}#${a}"`)
  );
  record(
    '/actividades enlaza las 3 rutas destacadas',
    anchorLinks.length === 3,
    `${anchorLinks.length}/3`
  );

  // El filtrado sigue intacto: los 20 enlaces de ficha siguen ahí.
  const fichas = new Set(
    [...html.matchAll(/href="\/actividades\/([a-z0-9-]+)"/g)].map((m) => m[1])
  );
  record(
    '/actividades no rompe el catálogo (20 fichas)',
    fichas.size === 20,
    `${fichas.size} fichas enlazadas`
  );
}

async function checkActivityFiche(baseUrl, affiliateConfigured) {
  const slug = 'free-walking-tour-centro';
  const res = await fetch(`${baseUrl}/actividades/${slug}`, { redirect: 'manual' });
  const html = await res.text();

  record(`${slug}: HTTP 200`, res.status === 200, `HTTP ${res.status}`);
  if (res.status !== 200) return;

  record(
    `${slug}: sigue con noindex, follow`,
    getRobots(html) === 'noindex, follow',
    `robots="${getRobots(html)}"`
  );

  record(
    `${slug}: CTA actualizado`,
    html.includes('Consultar free tours y horarios'),
    'texto del CTA'
  );

  record(
    `${slug}: enlaza la landing de free tours`,
    html.includes(`href="${PAGE_PATH}"`),
    'enlace interno'
  );

  record(
    `${slug}: mantiene la foto del Arco da Rua Augusta`,
    html.includes('rua-augusta-arco-lisboa'),
    'imagen propia'
  );

  if (affiliateConfigured) {
    const affiliateAnchors = extractAnchors(html).filter((a) =>
      a.href.includes('guruwalk.com')
    );
    record(
      `${slug}: el CTA afiliado lleva rel="sponsored"`,
      affiliateAnchors.length > 0 &&
        affiliateAnchors.every((a) => a.rel?.split(/\s+/).includes('sponsored')),
      `${affiliateAnchors.length} enlaces`
    );
    record(
      `${slug}: usa la campaña de la categoría imprescindible`,
      affiliateAnchors.some((a) => a.href.includes('utm_campaign=free-tour-centro')),
      'utm_campaign=free-tour-centro'
    );
  }
}

async function main() {
  const explicitBaseUrl = process.env.SMOKE_BASE_URL;
  let child = null;
  let baseUrl = explicitBaseUrl;
  // En modo local inyectamos la URL afiliada sintética; en remoto dependemos
  // de lo que tenga configurado el servidor.
  let affiliateConfigured = !explicitBaseUrl;

  try {
    if (!explicitBaseUrl) {
      log('== Modo local: next build + next start ==');

      const buildEnv = { ...process.env };
      buildEnv.GURUWALK_AFFILIATE_URL_LISBOA = TEST_AFFILIATE_URL;
      log(`Usando URL afiliada SINTÉTICA de prueba: ${TEST_AFFILIATE_URL}`);

      await runStep('npx', ['next', 'build'], { env: buildEnv });

      const port = await getFreePort();
      baseUrl = `http://localhost:${port}`;

      const env = { ...buildEnv, PORT: String(port) };
      if (!env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
        log('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY no está definido: usando una clave local ficticia solo para poder arrancar el servidor de pruebas.');
        env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = 'pk_test_bm9pbmRleC1zbW9rZXRlc3QuY2xlcmsuYWNjb3VudHMuZGV2JA==';
        env.CLERK_SECRET_KEY = env.CLERK_SECRET_KEY || 'sk_test_localsmoketestdummykeyfor000000000000000000';
      }

      log(`== Arrancando next start en ${baseUrl} ==`);
      // `detached` crea un grupo de procesos propio: al terminar podemos
      // matar el grupo entero. Si sólo se señaliza al proceso de `npx`, el
      // `next-server` hijo sobrevive, mantiene abierta la salida heredada y
      // deja colgada cualquier tubería que lea de este script.
      child = spawn('npx', ['next', 'start', '-p', String(port)], {
        stdio: 'inherit',
        env,
        detached: true,
      });
      await waitForServer(baseUrl);
      log('Servidor listo.\n');
    } else {
      log(`== Modo remoto: probando ${baseUrl} (sin build/start local) ==`);
      const probe = await fetch(baseUrl + PAGE_PATH);
      const probeHtml = await probe.text();
      affiliateConfigured = probeHtml.includes('guruwalk.com');
      log(
        affiliateConfigured
          ? 'El servidor remoto tiene enlaces afiliados configurados.\n'
          : 'El servidor remoto no tiene enlaces afiliados configurados: se comprobará que no publique URLs sin atribución.\n'
      );
    }

    await checkLanding(baseUrl, affiliateConfigured);
    log('');
    await checkHeroImage(baseUrl);
    log('');
    await checkSitemap(baseUrl);
    log('');
    await checkActividades(baseUrl);
    log('');
    await checkActivityFiche(baseUrl, affiliateConfigured);

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
      try {
        // Negativo = todo el grupo de procesos (npx + next-server).
        process.kill(-child.pid, 'SIGTERM');
      } catch {
        child.kill('SIGTERM');
      }
    }
  }
}

main();
