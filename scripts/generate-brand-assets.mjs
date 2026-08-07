#!/usr/bin/env node
/**
 * Genera los assets de marca a partir de los originales del repositorio.
 *
 * Se ejecuta a mano cuando cambia el logo; los resultados se versionan.
 * No se llama desde el build para no depender de sharp en producción.
 *
 *   node scripts/generate-brand-assets.mjs
 *
 * Produce:
 *   src/app/favicon.ico        16/32/48/64 px (Google exige 48 px mínimo)
 *   public/apple-touch-icon.png 180x180 aplanado sobre el azul noche
 *   public/icon-512.png         512x512 para PWA/Android
 *
 * La tarjeta Open Graph se genera aparte, en scripts/generate-og-image.mjs,
 * porque necesita componer texto con la tipografía real de la marca.
 */

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const NIGHT = { r: 0x1a, g: 0x2b, b: 0x4a };   // #1a2b4a

/** Master del icono: la marca "L." ya existente, en 192 px. */
const ICON_MASTER = path.join(ROOT, 'public/icon-192.png');

/**
 * Empaqueta varios PNG en un único .ico.
 *
 * El formato ICO admite PNG embebido desde Windows Vista, que es lo que
 * entienden todos los navegadores actuales y el rastreador de Google.
 */
function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reservado
  header.writeUInt16LE(1, 2); // tipo 1 = icono
  header.writeUInt16LE(count, 4);

  const entries = [];
  let offset = 6 + count * 16;

  for (const { size, buf } of pngBuffers) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // ancho (0 = 256)
    e.writeUInt8(size >= 256 ? 0 : size, 1); // alto
    e.writeUInt8(0, 2);                      // colores de paleta
    e.writeUInt8(0, 3);                      // reservado
    e.writeUInt16LE(1, 4);                   // planos
    e.writeUInt16LE(32, 6);                  // bits por píxel
    e.writeUInt32LE(buf.length, 8);
    e.writeUInt32LE(offset, 12);
    entries.push(e);
    offset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map((p) => p.buf)]);
}

async function makeFavicon() {
  const sizes = [16, 32, 48, 64];
  const pngs = [];
  for (const size of sizes) {
    const buf = await sharp(ICON_MASTER)
      .resize(size, size, { kernel: 'lanczos3', fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toBuffer();
    pngs.push({ size, buf });
  }
  const ico = buildIco(pngs);
  await fs.writeFile(path.join(ROOT, 'src/app/favicon.ico'), ico);
  console.log(`favicon.ico        ${sizes.join('/')} px  ${ico.length} bytes`);
}

async function makeAppleTouchIcon() {
  // iOS no respeta la transparencia y aplica su propia máscara: se aplana
  // sobre el azul noche de la marca para que las esquinas no salgan negras.
  const out = await sharp(ICON_MASTER)
    .resize(180, 180, { kernel: 'lanczos3', fit: 'cover' })
    .flatten({ background: NIGHT })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await fs.writeFile(path.join(ROOT, 'public/apple-touch-icon.png'), out);
  console.log(`apple-touch-icon   180x180 sin alfa  ${out.length} bytes`);
}

async function makeIcon512() {
  const out = await sharp(ICON_MASTER)
    .resize(512, 512, { kernel: 'lanczos3', fit: 'cover' })
    .flatten({ background: NIGHT })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await fs.writeFile(path.join(ROOT, 'public/icon-512.png'), out);
  console.log(`icon-512.png       512x512  ${out.length} bytes`);
}

await makeFavicon();
await makeAppleTouchIcon();
await makeIcon512();
console.log('\nListo.');
