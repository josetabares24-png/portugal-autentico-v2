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
 *   public/og-default.jpg       1200x630 para Open Graph y Twitter
 */

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const NIGHT = { r: 0x1a, g: 0x2b, b: 0x4a };   // #1a2b4a
const CREAM = '#F5EFE6';
const TERRACOTTA = '#B8472E';
const GOLD = '#C9974A';

/** Master del icono: la marca "L." ya existente, en 192 px. */
const ICON_MASTER = path.join(ROOT, 'public/icon-192.png');
const LOGO = path.join(ROOT, 'public/logo.png');
const OG_PHOTO = path.join(ROOT, 'public/images/lisboa-originales/rua-augusta-arco-lisboa.webp');

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

/**
 * Tarjeta 1200x630: panel crema con el logotipo real a la izquierda y una
 * fotografía propia de Lisboa a la derecha, con el acento terracota-dorado
 * que ya usan las tarjetas del sitio.
 *
 * No se compone ningún texto: el logotipo es un PNG con la tipografía de
 * la marca, así que no hace falta rasterizar fuentes ni arriesgarse a que
 * el sistema sustituya Playfair por otra serif.
 */
async function makeOgImage() {
  const W = 1200;
  const H = 630;
  const PANEL = 560;   // ancho del panel crema
  const ACCENT = 8;    // barra superior

  const photo = await sharp(OG_PHOTO)
    .resize(W - PANEL, H, { fit: 'cover', position: 'centre' })
    .toBuffer();

  // Degradado sutil para que la foto no choque en seco con el panel.
  const fade = Buffer.from(
    `<svg width="${W - PANEL}" height="${H}" xmlns="http://www.w3.org/2000/svg">
       <defs><linearGradient id="g" x1="0" x2="1">
         <stop offset="0" stop-color="${CREAM}" stop-opacity="0.85"/>
         <stop offset="0.18" stop-color="${CREAM}" stop-opacity="0"/>
       </linearGradient></defs>
       <rect width="100%" height="100%" fill="url(#g)"/>
     </svg>`
  );

  const accent = Buffer.from(
    `<svg width="${W}" height="${ACCENT}" xmlns="http://www.w3.org/2000/svg">
       <defs><linearGradient id="a" x1="0" x2="1">
         <stop offset="0" stop-color="${TERRACOTTA}"/>
         <stop offset="1" stop-color="${GOLD}"/>
       </linearGradient></defs>
       <rect width="100%" height="100%" fill="url(#a)"/>
     </svg>`
  );

  const logoW = 420;
  const logo = await sharp(LOGO)
    .resize(logoW, null, { kernel: 'lanczos3' })
    .flatten({ background: CREAM })
    .toBuffer();
  const logoMeta = await sharp(logo).metadata();

  const out = await sharp({
    create: { width: W, height: H, channels: 3, background: CREAM },
  })
    .composite([
      { input: photo, left: PANEL, top: 0 },
      { input: fade, left: PANEL, top: 0 },
      {
        input: logo,
        left: Math.round((PANEL - logoW) / 2),
        top: Math.round((H - (logoMeta.height ?? 175)) / 2),
      },
      { input: accent, left: 0, top: 0 },
    ])
    .jpeg({ quality: 86, chromaSubsampling: '4:4:4' })
    .toBuffer();

  await fs.writeFile(path.join(ROOT, 'public/og-default.jpg'), out);
  console.log(`og-default.jpg     ${W}x${H}  ${out.length} bytes`);
}

await makeFavicon();
await makeAppleTouchIcon();
await makeIcon512();
await makeOgImage();
console.log('\nListo.');
