#!/usr/bin/env node

import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const adapterPath = path.join(root, 'src', 'lib', 'tiqets-api.ts');
const pagePath = path.join(root, 'src', 'app', '[locale]', 'comprar-entradas', 'page.tsx');
const clientPath = path.join(
  root,
  'src',
  'app',
  '[locale]',
  'comprar-entradas',
  'ComprarEntradasClient.tsx'
);
const bookingCardPath = path.join(root, 'src', 'components', 'afiliados', 'BookingCard.tsx');
const bookingsPath = path.join(root, 'src', 'data', 'bookings.ts');
const envExamplePath = path.join(root, '.env.example');

const [adapter, page, client, bookingCard, bookings, envExample] = await Promise.all([
  readFile(adapterPath, 'utf8'),
  readFile(pagePath, 'utf8'),
  readFile(clientPath, 'utf8'),
  readFile(bookingCardPath, 'utf8'),
  readFile(bookingsPath, 'utf8'),
  readFile(envExamplePath, 'utf8'),
]);

assert.match(adapter, /^import 'server-only';/m, 'el adaptador debe ser exclusivamente servidor');
assert.match(adapter, /process\.env\.TIQETS_API_TOKEN/, 'la clave debe venir del entorno');
assert.doesNotMatch(adapter, /NEXT_PUBLIC_TIQETS/, 'la clave no puede ser pública');
assert.match(adapter, /partner.*TIQETS_PARTNER_ID/s, 'la URL de reserva debe validar el partner');
assert.match(adapter, /tq_campaign/, 'la URL de reserva debe conservar la campaña');
assert.match(adapter, /Promise\.allSettled/, 'un fallo parcial no debe vaciar todo el catálogo');

for (const productId of ['975260', '1120392', '974847']) {
  assert.match(adapter, new RegExp(productId), `falta el producto Tiqets ${productId}`);
}

assert.match(page, /getTiqetsProductSnapshots/, 'la página servidor debe consultar Tiqets');
assert.match(client, /tiqetsProducts\[product\.id\]/, 'el cliente debe enlazar cada producto con su snapshot');
assert.doesNotMatch(
  client,
  /ExperienceSearch|FilterChip|useState/,
  'el catálogo curado no debe convertirse en un buscador con filtros'
);
assert.match(client, /HUB_SECTIONS\.map/, 'el catálogo debe pintarse por secciones con ancla');
assert.match(
  client,
  /HUB_PRODUCTS\.filter\(\(product\) => product\.hubSection === section\.id\)/,
  'cada sección debe mostrar directamente sus productos'
);
for (const anchor of ['imprescindibles', 'belem', 'sintra', 'museos', 'experiencias']) {
  assert.match(bookings, new RegExp(`anchor: '${anchor}'`), `falta la sección con ancla #${anchor}`);
}

// Cada producto del catálogo tiene sección, y cada enlace de Tiqets del
// catálogo lleva la cuenta de partner y su propia campaña.
const hubBlocks = bookings.split(/\n  \{\n/).filter((block) => /hub: \{\n\s+render:/.test(block));
assert.ok(hubBlocks.length >= 16, `el catálogo debería tener al menos 16 productos (tiene ${hubBlocks.length})`);
for (const block of hubBlocks) {
  const id = block.match(/id: '([^']+)'/)?.[1] ?? '¿?';
  assert.match(block, /hubSection: '/, `${id}: falta hubSection`);
  for (const url of block.match(/https:\/\/www\.tiqets\.com\/[^']+/g) ?? []) {
    assert.match(url, /partner=estaba_en_lisboa-189233/, `${id}: enlace de Tiqets sin partner`);
    assert.match(url, /tq_campaign=[a-z0-9_-]+/, `${id}: enlace de Tiqets sin tq_campaign`);
  }
}
assert.match(bookingCard, /rel="sponsored noopener noreferrer"/, 'el botón de compra debe llevar rel=sponsored');
assert.match(
  bookingCard,
  /const ctaLabel = isUnavailable[\s\S]*: product\.ctaLabel/,
  'cada tarjeta debe conservar su CTA de compra específico'
);
for (const label of [
  'Comprar entrada al Oceanário',
  'Comprar entrada al Castelo',
  'Comprar entrada a Pena',
  'Comprar Lisboa Card',
  'Reservar paseo por el Tajo',
  'Reservar espectáculo de fado',
  'Reservar tour gastronómico',
  'Reservar excursión a Sintra',
  'Comprar entrada a la Torre',
  'Comprar entrada al Castelo dos Mouros',
  'Comprar entrada al Palacio de Sintra',
  'Comprar entrada al Palacio da Ajuda',
  'Comprar entrada al Tesoro Real',
  'Reservar el tranvía turístico',
]) {
  assert.match(bookings, new RegExp(label), `falta el CTA transaccional: ${label}`);
}
// Fotos de producto de Tiqets (D-042): sólo de su CDN, con crédito y con
// hueco propio si no hay foto. Nada de widgets visibles ni bloques navy.
const nextConfig = await readFile(path.join(root, 'next.config.mjs'), 'utf8');
assert.match(adapter, /TIQETS_IMAGE_HOST = 'aws-tiqets-cdn\.imgix\.net'/, 'las fotos sólo pueden venir del CDN de Tiqets');
assert.match(adapter, /hostname === 'localhost' \|\| url\.hostname === '127\.0\.0\.1'/, 'el cambio de base de la API sólo puede apuntar a localhost');
assert.match(nextConfig, /hostname: 'aws-tiqets-cdn\.imgix\.net'/, 'falta el CDN de Tiqets en images.remotePatterns');
assert.match(bookingCard, /Foto: Tiqets/, 'las fotos de Tiqets deben llevar crédito');
assert.match(bookingCard, /onError=\{\(\) => setImageFailed\(true\)\}/, 'una foto que no carga debe caer al hueco propio');
assert.doesNotMatch(bookingCard, /bg-night bg-azulejo/, 'el bloque navy sin foto ya no se usa');

// D-043: todas las tarjetas del hub llevan foto del sitio; las de Wikimedia
// Commons, con crédito sobre la imagen y atribución completa al pie.
const photoCredits = await readFile(path.join(root, 'src', 'data', 'photo-credits.ts'), 'utf8');
for (const block of hubBlocks) {
  const id = block.match(/id: '([^']+)'/)?.[1] ?? '?';
  const image = block.match(/^    image: '([^']+)'/m)?.[1];
  assert.ok(image, `${id}: la tarjeta del hub no tiene foto`);
  assert.match(block, /^    imageAlt: '.{20,}'/m, `${id}: falta un alt que describa la foto`);
  const file = path.join(root, 'public', image);
  await readFile(file).catch(() => assert.fail(`${id}: no existe ${image}`));
  if (image.startsWith('/images/commons/')) {
    assert.ok(photoCredits.includes(`'${image}': {`), `${id}: foto de Commons sin crédito en photo-credits.ts`);
  }
}
for (const match of photoCredits.matchAll(/'(\/images\/commons\/[^']+)': \{[\s\S]*?sourceUrl:\s*'(https:\/\/commons\.wikimedia\.org\/wiki\/File:[^']+)'/g)) {
  assert.ok(match[2], `${match[1]}: falta el enlace a Commons`);
}
const creditsMd = await readFile(path.join(root, 'public', 'images', 'commons', 'CREDITOS.md'), 'utf8');
for (const image of photoCredits.matchAll(/'\/images\/commons\/([^']+)': \{/g)) {
  assert.match(creditsMd, new RegExp(image[1].replace('.', '\\.')), `${image[1]}: falta en CREDITOS.md`);
}
assert.match(bookingCard, /formatPhotoCreditShort/, 'las fotos de Commons deben llevar el crédito corto en la tarjeta');
assert.match(client, /Créditos de las fotos/, 'falta la nota de créditos al pie de la página');

assert.match(envExample, /^TIQETS_API_TOKEN=$/m, 'falta documentar la variable de entorno');
assert.doesNotMatch(envExample, /tqat-[A-Za-z0-9_-]+/, 'la clave real no puede estar en .env.example');

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (['.git', '.next', 'node_modules'].includes(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(fullPath)));
    else files.push(fullPath);
  }
  return files;
}

const trackedSourceFiles = (await listFiles(root)).filter((file) => {
  const relative = path.relative(root, file);
  return !relative.startsWith('.vercel') && !relative.endsWith('.env.local');
});

for (const file of trackedSourceFiles) {
  const content = await readFile(file, 'utf8').catch(() => '');
  assert.doesNotMatch(
    content,
    /tqat-[A-Za-z0-9_-]+/,
    `se encontró una clave Tiqets incrustada en ${path.relative(root, file)}`
  );
}

console.log('OK  Tiqets queda server-only, atribuido y con fallback editorial.');
