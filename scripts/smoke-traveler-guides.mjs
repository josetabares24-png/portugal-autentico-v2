import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { travelerGuides } from '../src/data/traveler-guide-preview.ts';
import { findProductById, resolveBookingLink } from '../src/data/bookings.ts';

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
const practicalToolTitles = travelerGuides.map((guide) => guide.practicalTool.title);
const commercialPortalIds = new Set(['routes', 'visit', 'food', 'drinks']);

check(travelerGuides.length === 7, 'hay exactamente siete portales de viaje');
check(new Set(slugs).size === slugs.length, 'los slugs no se repiten');
check(new Set(portalIds).size === portalIds.length, 'los identificadores de analítica no se repiten');
check(new Set(practicalToolTitles).size === practicalToolTitles.length, 'cada guía tiene una herramienta práctica distinta');

for (const guide of travelerGuides) {
  const prefix = `/guia/${guide.slug}`;
  const imagePath = join(process.cwd(), 'public', guide.heroImage.replace(/^\//, ''));
  const completeCopy = JSON.stringify(guide).toLowerCase();

  check(guide.portalQuestion.startsWith('¿') && guide.portalQuestion.endsWith('?'), `${prefix} abre con una pregunta`);
  check(guide.portalQuestion.length <= 28, `${prefix} mantiene la pregunta breve para móvil`);
  check(guide.decisions.length === 4, `${prefix} ofrece cuatro decisiones iniciales`);
  check(guide.practicalTool.rows.length === 4, `${prefix} incluye una herramienta práctica completa`);
  check(guide.practicalTool.columns.length === 3, `${prefix} define las tres dimensiones de su herramienta`);
  check(
    guide.practicalTool.rows.every((row) => !row.href || row.href.startsWith('/')),
    `${prefix} sólo enlaza internamente desde su herramienta práctica`,
  );
  check(guide.humanQuestions.length === 3, `${prefix} responde tres dudas humanas`);
  check(
    guide.humanQuestions.every((item) => item.question.startsWith('¿') && item.question.endsWith('?') && item.answer.length >= 70),
    `${prefix} tiene preguntas completas y respuestas con contexto`,
  );
  check(guide.sections.length >= 3, `${prefix} conserva profundidad editorial`);
  check(guide.heroImage.startsWith('/images/lisboa-originales/'), `${prefix} usa fotografía propia`);
  check(existsSync(imagePath), `${prefix} encuentra su fotografía en el repositorio`);
  check(!/deberíamos publicar|esta subguía|no quiero publicar|cuando hablemos/.test(completeCopy), `${prefix} no expone lenguaje editorial interno`);

  if (guide.bookingSection) {
    check(commercialPortalIds.has(guide.portalId), `${prefix} sólo monetiza una intención aprobada`);
    check(
      guide.bookingSection.productIds.length >= 1 && guide.bookingSection.productIds.length <= 3,
      `${prefix} mantiene una selección comercial breve`,
    );
    check(
      new Set(guide.bookingSection.productIds).size === guide.bookingSection.productIds.length,
      `${prefix} no repite productos reservables`,
    );

    for (const productId of guide.bookingSection.productIds) {
      const product = findProductById(productId);
      const link = product ? resolveBookingLink(product, 'article') : null;
      check(Boolean(product), `${prefix} encuentra el producto ${productId}`);
      check(link?.provider === 'getyourguide', `${prefix} reserva ${productId} mediante GetYourGuide`);
    }
  } else {
    check(!commercialPortalIds.has(guide.portalId), `${prefix} permanece sin bloque comercial por decisión editorial`);
  }
}

if (failures.length > 0) {
  console.error(`\n${failures.length} comprobaciones fallaron.`);
  process.exit(1);
}

console.log(`\n${travelerGuides.length} guías y ${travelerGuides.length * 3} respuestas humanas verificadas.`);
