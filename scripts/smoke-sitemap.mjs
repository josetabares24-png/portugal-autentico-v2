#!/usr/bin/env node
/**
 * Smoke test del sitemap y de robots.txt.
 *
 * Comprueba el XML realmente servido por un servidor de producción, no la
 * fuente TypeScript: así se detectan problemas que `next build` no ve
 * (dominio equivocado en el XML final, URLs duplicadas tras el render,
 * rutas listadas que devuelven 404 o que se sirven con noindex...).
 *
 * Para cada URL del sitemap se hace además una petición real y se verifica
 * que responde 200, sin redirección, sin noindex y con contenido.
 *
 * Modos:
 *   - Local (por defecto): `next build` + `next start` en un puerto libre.
 *   - Contra un servidor ya arrancado: SMOKE_BASE_URL=https://...
 *
 * Código de salida distinto de cero si falla alguna comprobación.
 */

import { spawn } from 'node:child_process';
import net from 'node:net';
import fs from 'node:fs';
import path from 'node:path';

const PROD_ORIGIN = 'https://estabaenlisboa.com';
const isWindows = process.platform === 'win32';
const npxCommand = isWindows ? 'npx.cmd' : 'npx';

/** Páginas públicas que deben estar en el sitemap exactamente una vez. */
const MANDATORY = [
  `${PROD_ORIGIN}/`,
  `${PROD_ORIGIN}/blog`,
  `${PROD_ORIGIN}/itinerarios`,
  `${PROD_ORIGIN}/actividades`,
  `${PROD_ORIGIN}/free-tours-lisboa`,
  `${PROD_ORIGIN}/planifica-tu-viaje`,
  `${PROD_ORIGIN}/calculadora-presupuesto-lisboa`,
  `${PROD_ORIGIN}/contacto`,
  `${PROD_ORIGIN}/sobre-nosotros`,
  `${PROD_ORIGIN}/blog/como-pagar-en-portugal`,
];

/**
 * Artículo previsto que todavía no existe. Mientras su slug no esté en
 * blogPosts se informa como PENDIENTE; en cuanto exista, la comprobación
 * se vuelve obligatoria automáticamente.
 */
const PENDING_ARTICLE_SLUG = 'como-pagar-en-portugal';

const EVIDENCE_DIR = process.env.SMOKE_EVIDENCE_DIR || '';

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

function info(name, detail) {
  log(`INFO ${name}${detail ? ' - ' + detail : ''}`);
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
    child.on('exit', (code) =>
      code === 0 ? resolve() : reject(new Error(`${command} ${args.join(' ')} exited with ${code}`))
    );
    child.on('error', reject);
  });
}

async function waitForServer(baseUrl, timeoutMs = 60_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(`${baseUrl}/sitemap.xml`, { redirect: 'manual' });
      if (res.status) return;
    } catch {
      /* aún no */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server at ${baseUrl} did not respond within ${timeoutMs}ms`);
}

const extract = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};
const getCanonical = (html) => extract(html, /<link rel="canonical" href="([^"]*)"/i);
const getRobotsMeta = (html) => extract(html, /<meta name="robots" content="([^"]*)"/i);
const getTitle = (html) => extract(html, /<title>([^<]*)<\/title>/i);

/* ------------------------------------------------------------------ */
/* Duplicados de slug en los datos fuente                              */
/* ------------------------------------------------------------------ */

function readSlugs(file, regex, group = 1) {
  const src = fs.readFileSync(path.join(process.cwd(), file), 'utf8');
  return [...src.matchAll(regex)].map((m) => m[group]);
}

function checkSourceSlugDuplicates() {
  const sets = [
    { label: 'blogPosts', slugs: readSlugs('src/data/blog-posts.ts', /^\s{4}id:\s*'([^']+)'/gm) },
    { label: 'activities', slugs: readSlugs('src/data/activities.ts', /^\s{4}slug:\s*'([^']+)'/gm) },
  ];

  for (const { label, slugs } of sets) {
    const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
    record(
      `${label}: sin slugs duplicados`,
      dupes.length === 0,
      dupes.length ? `duplicados: ${[...new Set(dupes)].join(', ')}` : `${slugs.length} slugs únicos`
    );
  }
  return sets;
}

/* ------------------------------------------------------------------ */
/* Fechas en español                                                   */
/* ------------------------------------------------------------------ */

const MESES = {
  Ene: 'Jan', Feb: 'Feb', Mar: 'Mar', Abr: 'Apr', May: 'May', Jun: 'Jun',
  Jul: 'Jul', Ago: 'Aug', Sep: 'Sep', Oct: 'Oct', Nov: 'Nov', Dic: 'Dec',
};

/** Réplica de parseSpanishDate en src/app/sitemap.ts. */
function parseSpanishDate(date) {
  const parts = date.split(' ');
  if (parts.length !== 3) return undefined;
  const [dia, mesEsp, anio] = parts;
  const d = new Date(`${dia} ${MESES[mesEsp] || mesEsp} ${anio}`);
  return isNaN(d.getTime()) ? undefined : d;
}

function checkDateParsing() {
  // Los doce meses, con énfasis en los que difieren del inglés.
  const cases = [
    ['15 Ene 2026', 0], ['3 Feb 2026', 1], ['1 Mar 2026', 2], ['9 Abr 2026', 3],
    ['5 May 2026', 4], ['7 Jun 2026', 5], ['21 Jul 2026', 6], ['30 Ago 2026', 7],
    ['2 Sep 2026', 8], ['11 Oct 2026', 9], ['4 Nov 2026', 10], ['25 Dic 2026', 11],
  ];
  const bad = [];
  for (const [text, expectedMonth] of cases) {
    const d = parseSpanishDate(text);
    if (!d || d.getMonth() !== expectedMonth) bad.push(`${text} -> ${d ? d.toISOString() : 'Invalid'}`);
  }
  record('los 12 meses en español se interpretan bien', bad.length === 0, bad.length ? bad.join(' ; ') : 'Ene..Dic OK');

  const invalid = ['', 'sin fecha', '32 Xyz 2026', '2026-01-01'];
  const leaked = invalid.filter((t) => parseSpanishDate(t) !== undefined);
  record(
    'una fecha inválida no produce lastModified',
    leaked.length === 0,
    leaked.length ? `aceptadas indebidamente: ${leaked.join(', ')}` : 'devuelve undefined'
  );

  // Fechas reales de los artículos
  const src = fs.readFileSync(path.join(process.cwd(), 'src/data/blog-posts.ts'), 'utf8');
  const fechas = [...src.matchAll(/^\s{4}fecha:\s*'([^']+)'/gm)].map((m) => m[1]);
  const noParse = fechas.filter((f) => parseSpanishDate(f) === undefined);
  record(
    'todas las fechas de blogPosts se interpretan',
    noParse.length === 0,
    noParse.length ? `sin interpretar: ${[...new Set(noParse)].join(', ')}` : `${fechas.length} fechas válidas`
  );

  const now = Date.now();
  const futuras = fechas.filter((f) => {
    const d = parseSpanishDate(f);
    return d && d.getTime() > now;
  });
  record(
    'ninguna fecha de artículo está en el futuro',
    futuras.length === 0,
    futuras.length ? `futuras: ${[...new Set(futuras)].join(', ')}` : 'todas en el pasado'
  );
}

/* ------------------------------------------------------------------ */
/* XML del sitemap                                                     */
/* ------------------------------------------------------------------ */

async function fetchSitemap(baseUrl) {
  const res = await fetch(`${baseUrl}/sitemap.xml`, { redirect: 'manual' });
  const xml = await res.text();
  record('/sitemap.xml responde 200', res.status === 200, `HTTP ${res.status}`);

  const ct = res.headers.get('content-type') || '';
  record('/sitemap.xml se sirve como XML', /xml/i.test(ct), `content-type: ${ct}`);

  return { xml, ok: res.status === 200 };
}

function checkXmlShape(xml) {
  record('contiene <urlset>', /<urlset[\s>]/.test(xml), 'urlset presente');
  record(
    'usa el namespace correcto',
    xml.includes('http://www.sitemaps.org/schemas/sitemap/0.9'),
    'xmlns sitemaps.org 0.9'
  );
  record('no contiene HTML', !/<html|<body|<!DOCTYPE html/i.test(xml), 'sin marcado HTML');
  record(
    'no contiene mensajes de error',
    !/Application error|Internal Server Error|<title>Error/i.test(xml),
    'sin errores embebidos'
  );

  // Entidades: dentro de <loc> sólo se admiten las XML escapadas
  const rawAmp = [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)]
    .map((m) => m[1])
    .filter((u) => /&(?!amp;|lt;|gt;|quot;|apos;)/.test(u));
  record('sin caracteres mal escapados en <loc>', rawAmp.length === 0, rawAmp.length ? rawAmp.join(', ') : 'ninguno');
}

function parseLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) =>
    m[1].replace(/&amp;/g, '&').trim()
  );
}

function checkUrls(locs) {
  record('el sitemap no está vacío', locs.length > 0, `${locs.length} URLs`);
  record('no supera el límite de Google (50.000)', locs.length <= 50000, `${locs.length} URLs`);

  const notAbsolute = locs.filter((u) => !u.startsWith('https://'));
  record('todas las URLs son absolutas HTTPS', notAbsolute.length === 0, notAbsolute.slice(0, 3).join(', ') || 'todas');

  const wrongOrigin = locs.filter((u) => !u.startsWith(PROD_ORIGIN));
  record(
    'todas usan el dominio de producción',
    wrongOrigin.length === 0,
    wrongOrigin.slice(0, 3).join(', ') || PROD_ORIGIN
  );

  const preview = locs.filter((u) => /vercel\.app|localhost|127\.0\.0\.1|\.local\b/i.test(u));
  record('ninguna URL de preview ni localhost', preview.length === 0, preview.slice(0, 3).join(', ') || 'ninguna');

  const withParams = locs.filter((u) => u.includes('?') || u.includes('#'));
  record('ninguna URL con parámetros ni fragmentos', withParams.length === 0, withParams.slice(0, 3).join(', ') || 'ninguna');

  const doubleSlash = locs.filter((u) => u.slice('https://'.length).includes('//'));
  record('ninguna URL con barras dobles', doubleSlash.length === 0, doubleSlash.slice(0, 3).join(', ') || 'ninguna');

  // Duplicados exactos
  const exact = locs.filter((u, i) => locs.indexOf(u) !== i);
  record('sin URLs duplicadas', exact.length === 0, exact.length ? [...new Set(exact)].join(', ') : 'ninguna');

  // Duplicados por barra final: /x y /x/
  const normalized = locs.map((u) => (u.endsWith('/') && u !== `${PROD_ORIGIN}/` ? u.slice(0, -1) : u));
  const trailing = normalized.filter((u, i) => normalized.indexOf(u) !== i);
  record(
    'sin duplicados por barra final',
    trailing.length === 0,
    trailing.length ? [...new Set(trailing)].join(', ') : 'ninguna'
  );

  // Obligatorias, exactamente una vez
  const missing = [];
  const repeated = [];
  for (const req of MANDATORY) {
    // La home puede aparecer como origin o origin + '/'
    const variants = req === `${PROD_ORIGIN}/` ? [PROD_ORIGIN, `${PROD_ORIGIN}/`] : [req];
    const n = locs.filter((u) => variants.includes(u)).length;
    if (n === 0) missing.push(req);
    else if (n > 1) repeated.push(`${req} (${n})`);
  }
  record('están todas las páginas obligatorias', missing.length === 0, missing.length ? `faltan: ${missing.join(', ')}` : `${MANDATORY.length} presentes`);
  record('ninguna obligatoria está repetida', repeated.length === 0, repeated.length ? repeated.join(', ') : 'una vez cada una');
}

function checkActivities(locs) {
  const src = fs.readFileSync(path.join(process.cwd(), 'src/data/activities.ts'), 'utf8');
  // Cada ficha declara `slug` y, dos líneas después, `indexable`.
  const entries = [...src.matchAll(/slug:\s*'([^']+)',\s*\n\s*indexable:\s*(true|false)/g)].map((m) => ({
    slug: m[1],
    indexable: m[2] === 'true',
  }));

  const included = entries.filter((e) => e.indexable).map((e) => e.slug);
  const excluded = entries.filter((e) => !e.indexable).map((e) => e.slug);

  const inSitemap = locs
    .filter((u) => u.startsWith(`${PROD_ORIGIN}/actividades/`))
    .map((u) => u.replace(`${PROD_ORIGIN}/actividades/`, ''));

  const leaked = inSitemap.filter((s) => excluded.includes(s));
  record(
    'ninguna actividad noindex está en el sitemap',
    leaked.length === 0,
    leaked.length ? `filtradas: ${leaked.join(', ')}` : `${excluded.length} excluidas correctamente`
  );

  const missing = included.filter((s) => !inSitemap.includes(s));
  record(
    'todas las actividades indexables están en el sitemap',
    missing.length === 0,
    missing.length ? `faltan: ${missing.join(', ')}` : `${included.length} incluidas`
  );

  info('actividades incluidas', included.length ? included.join(', ') : 'ninguna');
  info('actividades excluidas (indexable: false)', `${excluded.length}: ${excluded.join(', ')}`);
  return { included, excluded };
}

function checkBlog(locs) {
  const src = fs.readFileSync(path.join(process.cwd(), 'src/data/blog-posts.ts'), 'utf8');
  const slugs = [...src.matchAll(/^\s{4}id:\s*'([^']+)'/gm)].map((m) => m[1]);

  const inSitemap = locs
    .filter((u) => u.startsWith(`${PROD_ORIGIN}/blog/`))
    .map((u) => u.replace(`${PROD_ORIGIN}/blog/`, ''));

  const missing = slugs.filter((s) => !inSitemap.includes(s));
  record(
    'todos los artículos están en el sitemap',
    missing.length === 0,
    missing.length ? `faltan: ${missing.join(', ')}` : `${slugs.length} artículos`
  );

  const dupes = inSitemap.filter((s, i) => inSitemap.indexOf(s) !== i);
  record('cada artículo aparece una sola vez', dupes.length === 0, dupes.length ? [...new Set(dupes)].join(', ') : 'sin repeticiones');

  // Artículo previsto: obligatorio en cuanto exista en blogPosts
  const exists = slugs.includes(PENDING_ARTICLE_SLUG);
  if (exists) {
    record(
      `/blog/${PENDING_ARTICLE_SLUG} está en el sitemap`,
      inSitemap.includes(PENDING_ARTICLE_SLUG),
      'generado desde blogPosts'
    );
  } else {
    info(
      `/blog/${PENDING_ARTICLE_SLUG}`,
      'PENDIENTE: el artículo todavía no existe en blogPosts, la comprobación se activará sola cuando se añada'
    );
  }
  return { slugs, exists };
}

async function checkEveryUrl(locs, baseUrl) {
  const problems = [];
  let noCanonical = 0;
  let checked = 0;

  for (const loc of locs) {
    const localPath = loc.replace(PROD_ORIGIN, '') || '/';
    const res = await fetch(`${baseUrl}${localPath}`, { redirect: 'manual' });
    checked++;

    if (res.status !== 200) {
      problems.push(`${localPath} -> HTTP ${res.status}${res.headers.get('location') ? ' -> ' + res.headers.get('location') : ''}`);
      continue;
    }

    const html = await res.text();

    if (html.length < 1000) {
      problems.push(`${localPath} -> contenido casi vacío (${html.length} bytes)`);
      continue;
    }

    const robots = getRobotsMeta(html);
    if (robots && /noindex/i.test(robots)) {
      problems.push(`${localPath} -> noindex ("${robots}") pero está en el sitemap`);
      continue;
    }

    const canonical = getCanonical(html);
    if (!canonical) {
      noCanonical++;
    } else {
      const expected = loc.endsWith('/') && loc !== `${PROD_ORIGIN}/` ? loc.slice(0, -1) : loc;
      const got = canonical.endsWith('/') && canonical !== `${PROD_ORIGIN}/` ? canonical.slice(0, -1) : canonical;
      if (got !== expected && got !== `${PROD_ORIGIN}` && expected !== `${PROD_ORIGIN}/`) {
        problems.push(`${localPath} -> canonical "${canonical}" != "${loc}"`);
        continue;
      }
    }

    if (!getTitle(html)) problems.push(`${localPath} -> sin <title>`);
  }

  record(
    `las ${checked} URLs del sitemap responden 200 sin redirección, noindex ni error`,
    problems.length === 0,
    problems.length ? problems.slice(0, 8).join(' | ') : `${checked} URLs verificadas`
  );

  if (noCanonical > 0) {
    info('URLs sin etiqueta canonical', `${noCanonical} de ${checked} (no bloquea indexación, pero conviene añadirla)`);
  }
  return { checked, problems, noCanonical };
}

/** Las 15 imágenes del paquete editorial más las 13 asignaciones. */
const NEW_IMAGES = [
  'cascais-centro-historico', 'castelo-sao-jorge-lisboa', 'cristo-rei-ponte-25-abril',
  'elevador-santa-justa-lisboa', 'jardim-da-estrela-coreto', 'lx-factory-lisboa',
  'mosteiro-dos-jeronimos-claustro', 'oceanario-de-lisboa', 'parque-eduardo-vii-lisboa',
  'passeio-barco-rio-tejo-lisboa', 'pasteis-de-belem', 'portas-do-sol-alfama',
  'torre-de-belem-lisboa',
].map((n) => `/images/actividades/${n}.webp`).concat([
  '/images/free-tours/lisboa-misterios-leyendas.webp',
  '/images/free-tours/lisboa-nocturna.webp',
]);

const ACTIVITIES_WITH_IMAGE = [
  'elevador-santa-justa', 'mosteiro-jeronimos', 'lx-factory', 'castelo-sao-jorge',
  'torre-de-belem', 'cristo-rei', 'parque-eduardo-vii', 'miradouro-portas-do-sol',
  'crucero-atardecer-tajo', 'oceanario-lisboa', 'pasteis-de-belem',
  'cascais-cabo-da-roca', 'jardim-estrela-principe-real',
];

async function checkNewImages(baseUrl) {
  const broken = [];
  for (const img of NEW_IMAGES) {
    const res = await fetch(`${baseUrl}${img}`, { redirect: 'manual' });
    if (res.status !== 200) broken.push(`${img} -> ${res.status}`);
  }
  record('las 15 imágenes nuevas se sirven sin 404', broken.length === 0, broken.length ? broken.join(', ') : `${NEW_IMAGES.length} imágenes`);
}

async function checkNavigation(baseUrl) {
  const html = await (await fetch(`${baseUrl}/`)).text();
  const visible = html.replace(/<script[\s\S]*?<\/script>/gi, '');

  // El Navbar usa un único array para escritorio y móvil: dos apariciones.
  const navHits = [...visible.matchAll(/href="\/free-tours-lisboa"/g)].length;
  record('la portada enlaza /free-tours-lisboa en nav de escritorio y móvil', navHits >= 2, `${navHits} enlaces en la portada`);
  record('la portada muestra el acceso editorial a free tours', visible.includes('Ver free tours'), 'CTA de portada');

  // Estado activo en la propia landing
  const landing = await (await fetch(`${baseUrl}/free-tours-lisboa`)).text();
  // React no garantiza el orden de los atributos, así que se busca la
  // etiqueta <a> que contenga ambos, en cualquier orden.
  const activeLink = [...landing.matchAll(/<a\s([^>]*)>/g)].some(
    (m) => m[1].includes('href="/free-tours-lisboa"') && m[1].includes('aria-current="page"')
  );
  record('la landing marca su entrada de menú como activa', activeLink, 'aria-current="page"');
}

async function checkArticle(baseUrl) {
  const path = '/blog/como-pagar-en-portugal';
  const res = await fetch(`${baseUrl}${path}`, { redirect: 'manual' });
  const html = await res.text();

  record(`${path} responde 200`, res.status === 200, `HTTP ${res.status}`);
  if (res.status !== 200) return;

  const robots = getRobotsMeta(html);
  record('el artículo no lleva noindex', !robots || !/noindex/i.test(robots), `robots="${robots ?? '(por defecto)'}"`);
  record('el artículo tiene title', !!getTitle(html), getTitle(html) ?? '-');
  record(
    'el artículo tiene canonical correcto',
    getCanonical(html) === `${PROD_ORIGIN}${path}`,
    `canonical="${getCanonical(html)}"`
  );

  const visible = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  record('el artículo no menciona Wise', !/\bwise\b/i.test(visible), 'sin menciones');
  record('el artículo no contiene enlaces afiliados', !/rel="[^"]*sponsored/i.test(html) && !html.includes('guruwalk.com'), 'sin afiliación');
  record(
    'las cinco preguntas frecuentes aparecen en la página',
    ['pagar con tarjeta en Lisboa', 'llevar efectivo a Portugal', 'euros y mi moneda', 'comisión en Portugal', 'cambiar dinero antes'].every((q) => visible.includes(q)),
    'FAQ visibles, no sólo en schema'
  );
}

async function checkActivityImages(baseUrl) {
  const html = await (await fetch(`${baseUrl}/actividades`)).text();
  const missing = ACTIVITIES_WITH_IMAGE.filter((slug) => {
    const i = html.indexOf(`href="/actividades/${slug}"`);
    if (i === -1) return true;
    return !html.slice(i, i + 1200).includes('images%2Factividades');
  });
  record(
    'las 13 actividades muestran imagen y no placeholder',
    missing.length === 0,
    missing.length ? `sin imagen: ${missing.join(', ')}` : '13 con imagen'
  );

  const landing = await (await fetch(`${baseUrl}/free-tours-lisboa`)).text();
  // Cada tarjeta ronda los 3.600 caracteres, así que se acota por el
  // cierre de <article> en vez de por una ventana fija.
  const cards = [...landing.matchAll(/<article[^>]*id="ruta-[a-z-]+"/g)].map((m) => {
    const end = landing.indexOf('</article>', m.index);
    return landing.slice(m.index, end === -1 ? undefined : end);
  });
  const withPhoto = cards.filter((c) => c.includes('<img')).length;
  record(
    'las 5 tarjetas de ruta llevan fotografía',
    cards.length === 5 && withPhoto === 5,
    `${withPhoto}/${cards.length} con <img>`
  );
}

async function checkRobots(baseUrl) {
  const res = await fetch(`${baseUrl}/robots.txt`, { redirect: 'manual' });
  const txt = await res.text();
  record('/robots.txt responde 200', res.status === 200, `HTTP ${res.status}`);

  record(
    'robots declara el sitemap de producción',
    txt.includes(`Sitemap: ${PROD_ORIGIN}/sitemap.xml`),
    `Sitemap: ${PROD_ORIGIN}/sitemap.xml`
  );
  record(
    'robots no declara ningún sitemap de preview',
    !/vercel\.app|localhost/i.test(txt),
    'sin URLs de preview'
  );

  const disallows = [...txt.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);
  const blocked = ['/', '/blog', '/actividades', '/itinerarios', '/free-tours-lisboa'].filter((p) =>
    disallows.includes(p)
  );
  record(
    'robots no bloquea las rutas del sitemap',
    blocked.length === 0,
    blocked.length ? `bloqueadas: ${blocked.join(', ')}` : `Disallow: ${disallows.join(', ') || 'ninguno'}`
  );
}

/* ------------------------------------------------------------------ */

async function main() {
  const explicitBaseUrl = process.env.SMOKE_BASE_URL;
  let child = null;
  let baseUrl = explicitBaseUrl;

  try {
    log('== Comprobaciones sobre los datos fuente ==');
    checkSourceSlugDuplicates();
    checkDateParsing();
    log('');

    if (!explicitBaseUrl) {
      log('== Modo local: next build + next start ==');
      await runStep('npx', ['next', 'build']);

      const port = await getFreePort();
      baseUrl = `http://localhost:${port}`;
      const env = { ...process.env, PORT: String(port) };
      if (!env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
        env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = 'pk_test_bm9pbmRleC1zbW9rZXRlc3QuY2xlcmsuYWNjb3VudHMuZGV2JA==';
        env.CLERK_SECRET_KEY = env.CLERK_SECRET_KEY || 'sk_test_localsmoketestdummykeyfor000000000000000000';
      }
      log(`== Arrancando next start en ${baseUrl} ==`);
      child = spawn(npxCommand, ['next', 'start', '-p', String(port)], {
        stdio: 'inherit',
        env,
        detached: !isWindows,
        shell: isWindows,
      });
      await waitForServer(baseUrl);
      log('Servidor listo.\n');
    } else {
      log(`== Modo remoto: ${baseUrl} ==\n`);
    }

    const { xml, ok } = await fetchSitemap(baseUrl);
    if (!ok) throw new Error('El sitemap no responde 200; no se puede continuar.');

    if (EVIDENCE_DIR) {
      try {
        fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
        fs.writeFileSync(path.join(EVIDENCE_DIR, 'sitemap.xml'), xml);
        info('evidencia guardada', path.join(EVIDENCE_DIR, 'sitemap.xml'));
      } catch (e) {
        info('no se pudo guardar la evidencia', String(e));
      }
    }

    checkXmlShape(xml);
    const locs = parseLocs(xml);
    log('');
    checkUrls(locs);
    log('');
    checkActivities(locs);
    log('');
    checkBlog(locs);
    log('');
    await checkRobots(baseUrl);
    log('');
    await checkNavigation(baseUrl);
    log('');
    await checkArticle(baseUrl);
    log('');
    await checkActivityImages(baseUrl);
    log('');
    await checkNewImages(baseUrl);
    log('');
    log(`== Comprobando las ${locs.length} URLs una a una ==`);
    await checkEveryUrl(locs, baseUrl);

    log(`\nTOTAL DE URLS EN EL SITEMAP: ${locs.length}`);
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
      if (isWindows) {
        child.kill('SIGTERM');
      } else {
        try {
          process.kill(-child.pid, 'SIGTERM');
        } catch {
          child.kill('SIGTERM');
        }
      }
    }
  }
}

main();
