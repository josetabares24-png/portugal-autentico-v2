import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { travelerGuides } from '../src/data/traveler-guide-preview.ts';

const failures = [];

function check(condition, message) {
  if (condition) {
    console.log(`OK   ${message}`);
    return;
  }

  failures.push(message);
  console.error(`FAIL ${message}`);
}

const slugs = travelerGuides.map((guide) => guide.slug);
const portalIds = travelerGuides.map((guide) => guide.portalId);

check(travelerGuides.length === 7, 'hay exactamente siete portales de viaje');
check(new Set(slugs).size === slugs.length, 'los slugs no se repiten');
check(new Set(portalIds).size === portalIds.length, 'los identificadores de analítica no se repiten');

for (const guide of travelerGuides) {
  const prefix = `/guia/${guide.slug}`;
  const imagePath = join(process.cwd(), 'public', guide.heroImage.replace(/^\//, ''));
  const completeCopy = JSON.stringify(guide).toLowerCase();

  check(guide.portalQuestion.startsWith('¿') && guide.portalQuestion.endsWith('?'), `${prefix} abre con una pregunta`);
  check(guide.portalQuestion.length <= 28, `${prefix} mantiene la pregunta breve para móvil`);
  check(guide.decisions.length === 4, `${prefix} ofrece cuatro decisiones iniciales`);
  check(guide.humanQuestions.length === 3, `${prefix} responde tres dudas humanas`);
  check(
    guide.humanQuestions.every((item) => item.question.startsWith('¿') && item.question.endsWith('?') && item.answer.length >= 70),
    `${prefix} tiene preguntas completas y respuestas con contexto`,
  );
  check(guide.sections.length >= 3, `${prefix} conserva profundidad editorial`);
  check(guide.heroImage.startsWith('/images/lisboa-originales/'), `${prefix} usa fotografía propia`);
  check(existsSync(imagePath), `${prefix} encuentra su fotografía en el repositorio`);
  check(!/deberíamos publicar|esta subguía|no quiero publicar|cuando hablemos/.test(completeCopy), `${prefix} no expone lenguaje editorial interno`);
}

if (failures.length > 0) {
  console.error(`\n${failures.length} comprobaciones fallaron.`);
  process.exit(1);
}

console.log(`\n${travelerGuides.length} guías y ${travelerGuides.length * 3} respuestas humanas verificadas.`);
