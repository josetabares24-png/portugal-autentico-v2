#!/usr/bin/env node
/**
 * Genera public/og-default.jpg: la tarjeta 1200x630 de Open Graph/Twitter.
 *
 * Se renderiza en Chromium en vez de con sharp para poder componer texto
 * con la tipografía real de la marca. next/font auto-aloja Playfair Display
 * y Plus Jakarta Sans en .next/static/media, así que las fuentes se
 * incrustan como data URI: no hace falta salir a Google Fonts.
 *
 * Requisitos (ninguno es dependencia del proyecto; se instalan a mano
 * cuando hay que regenerar la tarjeta):
 *   npm i --no-save playwright-core
 *   npm run build          # para que existan las fuentes en .next
 *
 * Uso:
 *   node scripts/generate-og-image.mjs
 *
 * Si cambian las fuentes, hay que actualizar los nombres de archivo de
 * abajo: salen de .next/static/chunks/*.css, en las reglas @font-face con
 * unicode-range que empieza por U+?? (el subconjunto latino).
 */
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const ROOT = '/home/user/portugal-autentico-v2';
const MEDIA = `${ROOT}/.next/static/media`;
const OUT = process.argv[2] || `${ROOT}/public/og-default.jpg`;

const b64 = (p, mime) => `data:${mime};base64,${fs.readFileSync(p).toString('base64')}`;
const font = (f) => b64(`${MEDIA}/${f}`, 'font/woff2');

const playfairItalic = font('70e3db2de7f94926-s.p.347f98aa.woff2');
const jakarta = font('fba5a26ea33df6a3-s.p.1bbdebe6.woff2');
const logo = b64(`${ROOT}/public/logo.png`, 'image/png');
const photo = b64(`${ROOT}/public/images/lisboa-originales/rua-augusta-arco-lisboa.webp`, 'image/webp');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face{font-family:'Playfair Display';font-style:italic;font-weight:400;
    src:url(${playfairItalic}) format('woff2')}
  @font-face{font-family:'Plus Jakarta Sans';font-style:normal;font-weight:600;
    src:url(${jakarta}) format('woff2')}
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;overflow:hidden;background:#F5EFE6}
  .card{position:relative;width:1200px;height:630px}
  .accent{position:absolute;top:0;left:0;right:0;height:9px;
    background:linear-gradient(90deg,#B8472E 0%,#C9974A 100%);z-index:4}
  .photo{position:absolute;top:0;right:0;width:620px;height:100%;
    object-fit:cover;object-position:50% 40%;z-index:1}
  .blend{position:absolute;top:0;left:520px;width:220px;height:100%;z-index:2;
    background:linear-gradient(90deg,#F5EFE6 0%,#F5EFE6 38%,rgba(245,239,230,0.75) 66%,rgba(245,239,230,0) 100%)}
  .panel{position:absolute;top:0;left:0;width:660px;height:100%;z-index:3;
    display:flex;flex-direction:column;justify-content:center;padding:0 72px}
  .logo{width:400px;height:auto;display:block;margin:0 0 40px -6px}
  .tagline{font-family:'Playfair Display',Georgia,serif;font-style:italic;
    font-weight:400;font-size:43px;line-height:1.22;color:#1a2b4a;
    letter-spacing:-0.012em;margin-bottom:32px}
  .rule{width:70px;height:3px;background:#C9974A;margin-bottom:26px}
  .meta{font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-weight:600;
    font-size:19px;letter-spacing:0.1em;text-transform:uppercase;color:#7a6f63}
</style></head><body>
<div class="card">
  <img class="photo" src="${photo}">
  <div class="blend"></div>
  <div class="panel">
    <img class="logo" src="${logo}">
    <div class="tagline">Guías de Lisboa escritas<br>por alguien que vive aquí</div>
    <div class="rule"></div>
    <div class="meta">estabaenlisboa.com</div>
  </div>
  <div class="accent"></div>
</div></body></html>`;

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none'],
});
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(600);

// Verifica que Playfair se aplicó de verdad y no una serif de respaldo.
const check = await page.evaluate(() => {
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap';
  probe.textContent = 'Guías de Lisboa escritas';
  document.body.appendChild(probe);
  probe.style.font = "italic 43px 'Playfair Display'";
  const a = probe.getBoundingClientRect().width;
  probe.style.font = 'italic 43px Georgia, serif';
  const b = probe.getBoundingClientRect().width;
  probe.remove();
  return { playfair: Math.round(a), fallback: Math.round(b), loaded: document.fonts.size };
});
console.log(`caras cargadas: ${check.loaded}`);
console.log(`ancho Playfair=${check.playfair}px  respaldo=${check.fallback}px  =>`,
  check.playfair !== check.fallback ? '✅ PLAYFAIR REAL APLICADA' : '❌ respaldo');

const png = await page.screenshot({ type: 'png' });
await browser.close();

// Se renderiza a 2x y se reduce a 1200x630 para que el texto quede nítido.
const sharp = (await import('sharp')).default;
const info = await sharp(png)
  .resize(1200, 630, { kernel: 'lanczos3' })
  .jpeg({ quality: 88, chromaSubsampling: '4:4:4' })
  .toFile(OUT);
console.log(`escrito ${OUT}  ${info.width}x${info.height}  ${info.size} bytes`);
