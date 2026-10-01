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
const envExamplePath = path.join(root, '.env.example');

const [adapter, page, client, envExample] = await Promise.all([
  readFile(adapterPath, 'utf8'),
  readFile(pagePath, 'utf8'),
  readFile(clientPath, 'utf8'),
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
  'ocho recomendaciones curadas no deben convertirse en un catálogo con filtros'
);
assert.match(client, /HUB_PRODUCTS\.map/, 'las ocho recomendaciones deben mostrarse directamente');
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
