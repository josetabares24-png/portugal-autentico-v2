#!/usr/bin/env node
/**
 * Red de seguridad de la migración editorial del blog.
 *
 * Levanta el build y toma una huella de cada artículo: metadata, encabezados,
 * anclas, enlaces, schemas, imágenes y el texto visible del <main>. Guarda esa
 * huella en un JSON y sabe compararla contra otra tomada después.
 *
 * La idea es simple: antes de tocar el renderer se guarda una foto, después se
 * toma otra, y si algo cambió el script dice en qué artículo y en qué campo.
 *
 *   node scripts/smoke-blog.mjs snapshot base     guarda .snapshots/base.json
 *   node scripts/smoke-blog.mjs snapshot after    guarda .snapshots/after.json
 *   node scripts/smoke-blog.mjs compare base after
 *   node scripts/smoke-blog.mjs compare           equivale a base vs after
 *
 * El script arranca su propio servidor en un puerto libre y lo apaga al salir.
 * Requiere haber ejecutado `npm run build` antes.
 */

import { spawn } from 'node:child_process';
import net from 'node:net';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR_SNAPSHOTS = path.join(RAIZ, '.snapshots');

// ---------------------------------------------------------------------------
// Lista de artículos
// ---------------------------------------------------------------------------

/**
 * Los slugs se leen del código, no de una lista escrita a mano, para que el
 * script no se quede obsoleto cuando se añada o se quite un artículo.
 *
 * Se cubren dos fuentes:
 *   - `blog-posts.ts`, que es lo que alimenta el índice y el sitemap
 *   - las claves del objeto `articles`, que incluye alguna página huérfana
 *     que no aparece en el sitemap pero sí responde con 200
 */
function leerSlugs() {
  const posts = fs.readFileSync(path.join(RAIZ, 'src/data/blog-posts.ts'), 'utf8');
  const plantilla = fs.readFileSync(
    path.join(RAIZ, 'src/app/[locale]/blog/[slug]/page.tsx'),
    'utf8',
  );

  const desdeIndice = [...posts.matchAll(/id:\s*'([a-z0-9-]+)'/g)].map((m) => m[1]);

  const ini = plantilla.indexOf('const articles: Record<string, Article> = {');
  const fin = plantilla.indexOf('const localImages: Record<string, string> = {');
  const desdeArticulos = [
    ...plantilla.slice(ini, fin).matchAll(/\n {2}["']([a-z0-9-]+)["']: \{/g),
  ].map((m) => m[1]);

  return [...new Set([...desdeIndice, ...desdeArticulos])].sort();
}

// ---------------------------------------------------------------------------
// Servidor de pruebas
// ---------------------------------------------------------------------------

const puertoLibre = () =>
  new Promise((resolve) => {
    const s = net.createServer();
    s.listen(0, () => {
      const { port } = s.address();
      s.close(() => resolve(port));
    });
  });

async function levantarServidor() {
  const puerto = await puertoLibre();
  const esWindows = process.platform === 'win32';
  const npx = esWindows ? 'npx.cmd' : 'npx';
  const hijo = spawn(npx, ['next', 'start', '-p', String(puerto)], {
    cwd: RAIZ,
    detached: !esWindows,
    shell: esWindows,
    stdio: 'ignore',
    env: {
      ...process.env,
      // Claves de juguete: la ruta del blog no usa autenticación, pero el
      // proveedor necesita que existan para arrancar.
      CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || 'sk_test_dummy',
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
        'pk_test_ZHVtbXkuY2xlcmsuYWNjb3VudHMuZGV2JA',
    },
  });

  const apagar = () => {
    try {
      if (esWindows) {
        hijo.kill('SIGTERM');
      } else {
        process.kill(-hijo.pid, 'SIGTERM');
      }
    } catch {
      /* ya estaba apagado */
    }
  };
  process.on('exit', apagar);
  process.on('SIGINT', () => {
    apagar();
    process.exit(130);
  });

  for (let i = 0; i < 90; i += 1) {
    try {
      const r = await fetch(`http://127.0.0.1:${puerto}/`);
      if (r.ok) return { puerto, apagar };
    } catch {
      /* todavía arrancando */
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  apagar();
  throw new Error('el servidor de pruebas no llegó a responder');
}

// ---------------------------------------------------------------------------
// Extracción de la huella
// ---------------------------------------------------------------------------

const entidades = (s) =>
  s
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#10003;/g, '✓')
    .replace(/&rsquo;|&#8217;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

const sinEtiquetas = (html) =>
  entidades(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim();

function huella(html) {
  const cabeza = html.slice(0, html.indexOf('</head>'));
  const principal = html.slice(html.indexOf('<main'), html.lastIndexOf('</main>'));
  const meta = (re) => {
    const m = cabeza.match(re);
    return m ? entidades(m[1]) : null;
  };
  const encabezados = (n) =>
    [...principal.matchAll(new RegExp(`<h${n}[^>]*>([\\s\\S]*?)</h${n}>`, 'g'))].map((m) =>
      sinEtiquetas(m[1]),
    );

  // Los schemas se normalizan a objeto para que el orden de las claves no
  // provoque falsos positivos.
  const schemas = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].map((m) => {
    try {
      return JSON.parse(m[1]);
    } catch {
      return { __errorDeParseo: true };
    }
  });

  const imagenes = [...principal.matchAll(/<img[^>]*>/g)].map((m) => ({
    src: (m[0].match(/src="([^"]*)"/) || [])[1] ?? null,
    alt: (m[0].match(/alt="([^"]*)"/) || [])[1] ?? null,
    loading: (m[0].match(/loading="([^"]*)"/) || [])[1] ?? null,
    fetchpriority: (m[0].match(/fetchpriority="([^"]*)"/i) || [])[1] ?? null,
    sizes: (m[0].match(/sizes="([^"]*)"/) || [])[1] ?? null,
  }));

  return {
    esV2: /class="[^"]*\barticle-page\b[^"]*\barticle-v2\b/.test(principal),
    tieneHero: /class="[^"]*\barticle-hero\b/.test(principal),
    title: meta(/<title>([^<]*)<\/title>/),
    metaDescription: meta(/name="description" content="([^"]*)"/),
    canonical: meta(/rel="canonical" href="([^"]*)"/),
    robots: meta(/name="robots" content="([^"]*)"/),
    keywords: meta(/name="keywords" content="([^"]*)"/),
    ogTitle: meta(/property="og:title" content="([^"]*)"/),
    ogDescription: meta(/property="og:description" content="([^"]*)"/),
    ogUrl: meta(/property="og:url" content="([^"]*)"/),
    ogImage: meta(/property="og:image" content="([^"]*)"/),
    ogImageAlt: meta(/property="og:image:alt" content="([^"]*)"/),
    h1: encabezados(1),
    h2: encabezados(2),
    h3: encabezados(3),
    idsDeEncabezados: [...principal.matchAll(/<h[1-6][^>]*\bid="([^"]+)"/g)].map((m) => m[1]),
    anclasDelIndice: [...principal.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]),
    enlacesInternos: [...principal.matchAll(/href="(\/[^"#][^"]*)"/g)].map((m) => m[1]),
    enlacesExternos: [...principal.matchAll(/href="(https?:\/\/[^"]*)"/g)].map((m) => m[1]),
    tiposDeSchema: schemas.map((s) => s['@type'] ?? '(sin tipo)'),
    schemas,
    numeroDeImagenes: imagenes.length,
    imagenes,
    textoVisible: sinEtiquetas(principal),
  };
}

// ---------------------------------------------------------------------------
// Comandos
// ---------------------------------------------------------------------------

async function capturar(nombre) {
  const slugs = leerSlugs();
  console.log(`Artículos detectados: ${slugs.length}`);
  const { puerto, apagar } = await levantarServidor();

  const datos = {};
  let fallos = 0;
  for (const slug of slugs) {
    const url = `http://127.0.0.1:${puerto}/blog/${slug}`;
    const r = await fetch(url, { redirect: 'manual' });
    if (r.status !== 200) {
      // Un 308 aquí no es un error: hay slugs con redirección declarada en
      // next.config. Se anota para que la comparación lo detecte si cambia.
      datos[slug] = { estado: r.status, redirigeA: r.headers.get('location') ?? null };
      console.log(`  ${slug}: HTTP ${r.status}`);
      if (r.status >= 400) fallos += 1;
      continue;
    }
    datos[slug] = { estado: 200, ...huella(await r.text()) };
    process.stdout.write('.');
  }
  console.log('');
  apagar();

  fs.mkdirSync(DIR_SNAPSHOTS, { recursive: true });
  const destino = path.join(DIR_SNAPSHOTS, `${nombre}.json`);
  fs.writeFileSync(destino, JSON.stringify(datos, null, 2));

  const conError = Object.entries(datos).filter(([, v]) => v.estado >= 400);
  console.log(`\nSnapshot guardado en .snapshots/${nombre}.json`);
  console.log(`  ${Object.keys(datos).length} artículos`);
  console.log(`  ${Object.values(datos).filter((v) => v.estado === 200).length} con HTTP 200`);
  console.log(`  ${Object.values(datos).filter((v) => v.estado === 308).length} con redirección`);
  if (conError.length) {
    console.log(`  ${conError.length} CON ERROR: ${conError.map(([k]) => k).join(', ')}`);
  }
  return fallos;
}

/** Devuelve la lista de rutas donde dos valores difieren. */
function diferencias(a, b, prefijo = '') {
  if (JSON.stringify(a) === JSON.stringify(b)) return [];
  const esObjeto = (v) => v && typeof v === 'object';
  if (!esObjeto(a) || !esObjeto(b) || Array.isArray(a) !== Array.isArray(b)) {
    return [{ campo: prefijo || '(raíz)', antes: a, despues: b }];
  }
  if (Array.isArray(a)) {
    if (a.length !== b.length) {
      return [
        { campo: `${prefijo} (longitud)`, antes: `${a.length} elementos`, despues: `${b.length} elementos` },
      ];
    }
    return a.flatMap((_, i) => diferencias(a[i], b[i], `${prefijo}[${i}]`));
  }
  const claves = [...new Set([...Object.keys(a), ...Object.keys(b)])];
  return claves.flatMap((k) => diferencias(a[k], b[k], prefijo ? `${prefijo}.${k}` : k));
}

const recorta = (v, n = 150) => {
  const s = typeof v === 'string' ? v : JSON.stringify(v);
  if (s == null) return String(v);
  return s.length > n ? `${s.slice(0, n)}…` : s;
};

function comparar(nombreA, nombreB) {
  const leer = (n) => {
    const p = path.join(DIR_SNAPSHOTS, `${n}.json`);
    if (!fs.existsSync(p)) {
      console.error(`No existe .snapshots/${n}.json. Genéralo antes con: node scripts/smoke-blog.mjs snapshot ${n}`);
      process.exit(2);
    }
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  };
  const A = leer(nombreA);
  const B = leer(nombreB);

  const soloA = Object.keys(A).filter((k) => !(k in B));
  const soloB = Object.keys(B).filter((k) => !(k in A));
  const comunes = Object.keys(A).filter((k) => k in B);

  console.log(`Comparando ${nombreA} → ${nombreB}`);
  console.log(`  artículos en ${nombreA}: ${Object.keys(A).length}`);
  console.log(`  artículos en ${nombreB}: ${Object.keys(B).length}\n`);
  if (soloA.length) console.log(`  DESAPARECIDOS: ${soloA.join(', ')}`);
  if (soloB.length) console.log(`  NUEVOS: ${soloB.join(', ')}`);

  let conCambios = 0;
  let totalCampos = 0;
  for (const slug of comunes) {
    const difs = diferencias(A[slug], B[slug]);
    if (!difs.length) continue;
    conCambios += 1;
    totalCampos += difs.length;
    console.log(`\n❌ ${slug} — ${difs.length} campo(s) distintos`);
    for (const d of difs.slice(0, 12)) {
      console.log(`   · ${d.campo}`);
      console.log(`     antes:   ${recorta(d.antes)}`);
      console.log(`     después: ${recorta(d.despues)}`);
    }
    if (difs.length > 12) console.log(`   … y ${difs.length - 12} más`);
  }

  const iguales = comunes.length - conCambios;
  console.log(`\n${'─'.repeat(60)}`);
  console.log(`Idénticos: ${iguales}/${comunes.length}`);
  if (conCambios) {
    console.log(`Con diferencias: ${conCambios} artículos, ${totalCampos} campos`);
  }
  const ok = conCambios === 0 && !soloA.length && !soloB.length;
  console.log(ok ? '\n✅ SIN REGRESIONES' : '\n❌ HAY DIFERENCIAS');
  return ok ? 0 : 1;
}

const CAMPOS_PROTEGIDOS = [
  'estado',
  'redirigeA',
  'title',
  'metaDescription',
  'canonical',
  'robots',
  'keywords',
  'ogTitle',
  'ogDescription',
  'ogUrl',
  'ogImage',
  'ogImageAlt',
  'h1',
  'h2',
  'h3',
  'idsDeEncabezados',
  'anclasDelIndice',
  'enlacesInternos',
  'enlacesExternos',
  'tiposDeSchema',
  'schemas',
  'textoVisible',
];

const claveImagen = (img) =>
  JSON.stringify({
    src: img?.src ?? null,
    alt: img?.alt ?? null,
  });

function contieneImagenesProtegidas(base, despues) {
  const restantes = new Map();
  for (const img of despues ?? []) {
    const key = claveImagen(img);
    restantes.set(key, (restantes.get(key) ?? 0) + 1);
  }
  const faltantes = [];
  for (const img of base ?? []) {
    const key = claveImagen(img);
    const count = restantes.get(key) ?? 0;
    if (count <= 0) {
      faltantes.push(img);
    } else {
      restantes.set(key, count - 1);
    }
  }
  return faltantes;
}

function compararProtegido(nombreA, nombreB) {
  const leer = (n) => {
    const p = path.join(DIR_SNAPSHOTS, `${n}.json`);
    if (!fs.existsSync(p)) {
      console.error(`No existe .snapshots/${n}.json. Genéralo antes con: node scripts/smoke-blog.mjs snapshot ${n}`);
      process.exit(2);
    }
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  };
  const A = leer(nombreA);
  const B = leer(nombreB);

  const soloA = Object.keys(A).filter((k) => !(k in B));
  const soloB = Object.keys(B).filter((k) => !(k in A));
  const comunes = Object.keys(A).filter((k) => k in B);

  console.log(`Comparando propiedades protegidas ${nombreA} → ${nombreB}`);
  console.log(`  artículos en ${nombreA}: ${Object.keys(A).length}`);
  console.log(`  artículos en ${nombreB}: ${Object.keys(B).length}\n`);
  if (soloA.length) console.log(`  DESAPARECIDOS: ${soloA.join(', ')}`);
  if (soloB.length) console.log(`  NUEVOS: ${soloB.join(', ')}`);

  let conCambios = 0;
  let totalCampos = 0;
  let migradosV2 = 0;
  const noMigrados = [];

  for (const slug of comunes) {
    const difs = [];
    for (const campo of CAMPOS_PROTEGIDOS) {
      difs.push(...diferencias(A[slug]?.[campo], B[slug]?.[campo], campo));
    }

    const imagenesFaltantes = contieneImagenesProtegidas(A[slug]?.imagenes, B[slug]?.imagenes);
    for (const img of imagenesFaltantes) {
      difs.push({ campo: 'imagenes protegidas', antes: img, despues: '(faltante)' });
    }

    if (B[slug]?.estado === 200 && B[slug]?.esV2 && B[slug]?.tieneHero) {
      migradosV2 += 1;
    } else if (B[slug]?.estado === 200) {
      noMigrados.push(slug);
    }

    if (!difs.length) continue;
    conCambios += 1;
    totalCampos += difs.length;
    console.log(`\n❌ ${slug} — ${difs.length} propiedad(es) protegida(s) distintas`);
    for (const d of difs.slice(0, 12)) {
      console.log(`   · ${d.campo}`);
      console.log(`     antes:   ${recorta(d.antes)}`);
      console.log(`     después: ${recorta(d.despues)}`);
    }
    if (difs.length > 12) console.log(`   … y ${difs.length - 12} más`);
  }

  console.log(`\n${'─'.repeat(60)}`);
  console.log(`Migrados a v2 con hero: ${migradosV2}/${comunes.filter((slug) => B[slug]?.estado === 200).length}`);
  if (noMigrados.length) console.log(`No migrados: ${noMigrados.join(', ')}`);
  if (conCambios) {
    console.log(`Con regresiones protegidas: ${conCambios} artículos, ${totalCampos} campos`);
  }
  const ok = conCambios === 0 && !soloA.length && !soloB.length && noMigrados.length === 0;
  console.log(ok ? '\n✅ PROPIEDADES PROTEGIDAS SIN REGRESIONES' : '\n❌ HAY REGRESIONES PROTEGIDAS');
  return ok ? 0 : 1;
}

// ---------------------------------------------------------------------------

const [comando, a, b] = process.argv.slice(2);

if (comando === 'snapshot') {
  const nombre = a || 'base';
  const fallos = await capturar(nombre);
  process.exit(fallos ? 1 : 0);
} else if (comando === 'compare-protected') {
  process.exit(compararProtegido(a || 'base', b || 'after'));
} else if (comando === 'compare') {
  process.exit(comparar(a || 'base', b || 'after'));
} else if (!comando) {
  const fallos = await capturar('after');
  if (fallos) process.exit(1);
  process.exit(compararProtegido('base', 'after'));
} else {
  console.log(`Uso:
  node scripts/smoke-blog.mjs snapshot <nombre>     captura el estado actual
  node scripts/smoke-blog.mjs compare <a> <b>       compara dos capturas
  node scripts/smoke-blog.mjs compare-protected <a> <b>

Ejemplo del flujo de un refactor:
  npm run build && node scripts/smoke-blog.mjs snapshot base
  …se refactoriza…
  npm run build && node scripts/smoke-blog.mjs snapshot after
  node scripts/smoke-blog.mjs compare-protected base after`);
  process.exit(comando ? 2 : 0);
}
