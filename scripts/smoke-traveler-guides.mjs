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
const practicalToolTitles = travelerGuides.map((guide) => guide.practicalTool.title);
const widgetGuides = travelerGuides.filter((guide) => guide.getYourGuideWidget);

check(travelerGuides.length === 7, 'hay exactamente siete portales de viaje');
check(new Set(slugs).size === slugs.length, 'los slugs no se repiten');
check(new Set(portalIds).size === portalIds.length, 'los identificadores de analítica no se repiten');
check(new Set(practicalToolTitles).size === practicalToolTitles.length, 'cada guía tiene una herramienta práctica distinta');
check(widgetGuides.length === 1, 'sólo una guía carga un widget de reservas');

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

  if (guide.getYourGuideWidget) {
    const tourIds = guide.getYourGuideWidget.tourIds.split(',');
    check(guide.portalId === 'visit', `${prefix} reserva sólo donde existe intención de visita`);
    check(tourIds.length === 2, `${prefix} limita el widget a dos actividades`);
    check(tourIds.every((tourId) => /^\d+$/.test(tourId)), `${prefix} usa identificadores válidos de GetYourGuide`);
    check(new Set(tourIds).size === tourIds.length, `${prefix} no repite actividades en el widget`);
    check(
      tourIds.join(',') === '424720,410732',
      `${prefix} conserva la selección editorial aprobada`,
    );
    check(Boolean(guide.getYourGuideWidget.campaign), `${prefix} identifica la campaña del widget`);
    check(
      guide.getYourGuideWidget.fallbackHref.includes('getyourguide.es'),
      `${prefix} mantiene un destino oficial de repliegue`,
    );
  } else {
    check(guide.portalId !== 'visit', `${prefix} permanece sin widget por decisión editorial`);
  }
}

if (failures.length > 0) {
  console.error(`\n${failures.length} comprobaciones fallaron.`);
  process.exit(1);
}

console.log(`\n${travelerGuides.length} guías y ${travelerGuides.length * 3} respuestas humanas verificadas.`);
