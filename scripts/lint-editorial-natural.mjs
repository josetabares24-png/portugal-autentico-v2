#!/usr/bin/env node
/**
 * Revisión de tono de Estaba en Lisboa.
 * No detecta autoría con IA: marca clichés que requieren juicio editorial.
 * Uso: node scripts/lint-editorial-natural.mjs public/sinchi-propuesta-editorial.html
 */
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const files = process.argv.slice(2);
if (!files.length) {
  console.error('Uso: node scripts/lint-editorial-natural.mjs <archivo.html|.md|.txt> [...]');
  process.exit(2);
}

const rules = [
  { name: 'Frase vacía', re: /\b(en la práctica(?:,)?\s+(?:esto|eso)\s+se traduce|no (?:te|os) dejará indiferente|es una opción a tener en cuenta|sin duda alguna)\b/gi },
  { name: 'Elogio genérico', re: /\b(experiencia (?:única|inolvidable)|joya escondida|destino imprescindible|lugar mágico|marco incomparable|rincones con encanto)\b/gi },
  { name: 'Plantilla de IA', re: /\b(sumergirse en|adentrarse en|en el corazón de|mucho más que|no solo [^.!?]{0,100} sino también)\b/gi },
  { name: 'Frase grandilocuente', re: /\b(?:los sabores cobran vida|la gastronomía cobra vida|el lugar cobra vida|perú se cuenta a través de sus platos|un viaje para los sentidos)\b/gi },
  { name: 'Expresión indicada por el editor', re: /\bsiemprese\b/gi },
];

function readable(source) {
  return source
    .replace(/data:image\/[a-z0-9.+-]+;base64,[a-z0-9+/=]+/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|amp|quot|#39|lt|gt);/gi, ' ')
    .replace(/\s+/g, ' ');
}

let findings = 0;
for (const file of files) {
  const prose = readable(readFileSync(file, 'utf8'));
  const hitsBefore = findings;
  console.log('Revisión editorial: ' + basename(file) + ' — ' + prose.split(/\s+/).length + ' palabras');
  for (const rule of rules) {
    const hits = [...prose.matchAll(rule.re)];
    for (const hit of hits) {
      findings++;
      console.log('  AVISO ' + rule.name + ': «' + hit[0] + '»');
    }
  }
  if (findings === hitsBefore) {
    console.log('  Sin clichés marcados. La revisión humana y la comprobación de datos siguen siendo necesarias.');
  }
}
if (findings) {
  console.error('Señales para revisar: ' + findings);
  process.exitCode = 1;
}
