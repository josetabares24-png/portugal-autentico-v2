import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { travelerGuides } from '../src/data/traveler-guide-preview.ts';
import { whatToSeeGuide, whereToEatGuide } from '../src/data/travel-pillar-guides.ts';

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
const homeDirectory = readFileSync(join(process.cwd(), 'src', 'components', 'home', 'TravelerDirectory.tsx'), 'utf8');
const homePage = readFileSync(join(process.cwd(), 'src', 'app', '[locale]', 'page.tsx'), 'utf8');
const pillarComponent = readFileSync(join(process.cwd(), 'src', 'components', 'traveler', 'TravelPillarPage.tsx'), 'utf8');
const blogArticlePage = readFileSync(join(process.cwd(), 'src', 'app', '[locale]', 'blog', '[slug]', 'page.tsx'), 'utf8');
const authorPage = readFileSync(join(process.cwd(), 'src', 'app', '[locale]', 'sobre-nosotros', 'page.tsx'), 'utf8');
const directHomeTitles = [
  'Organizar mis días',
  'Qué ver',
  'Cómo moverte',
  'Dónde alojarte',
  'Dónde comer',
  'Dónde tomar algo',
  'Dónde hacer fotos',
  'Qué evitar',
];

check(travelerGuides.length === 7, 'se conservan exactamente siete prototipos heredados');
check(new Set(slugs).size === slugs.length, 'los slugs no se repiten');
check(new Set(portalIds).size === portalIds.length, 'los identificadores de analítica no se repiten');
check(new Set(practicalToolTitles).size === practicalToolTitles.length, 'cada guía tiene una herramienta práctica distinta');
check(widgetGuides.length === 1, 'sólo una guía carga un widget de reservas');
check(directHomeTitles.every((title) => homeDirectory.includes(title)), 'la Home nombra directamente las ocho necesidades');
check(!homeDirectory.includes('¿Cuánto tiempo tienes para Lisboa?'), 'la Home no recupera el bloque intermedio de duración');
check(!homeDirectory.includes('/guia/'), 'la Home no enlaza páginas-puente');
check(homeDirectory.includes('lg:grid-cols-6'), 'la Home usa una composición editorial 2 + 3 + 3 en escritorio');
check(
  ['/que-ver-en-lisboa', '/donde-comer-en-lisboa'].every((href) => homeDirectory.includes(href)),
  'la Home enlaza directamente los dos nuevos pilares',
);
check(
  homePage.includes('Artículos que te pueden interesar')
    && ['time-out-market-lisboa', 'estacion-oriente-lisboa', 'estacion-olaias-lisboa'].every((slug) => homePage.includes(slug)),
  'la Home conserva al final los tres artículos editoriales aprobados',
);

for (const pillar of [whatToSeeGuide, whereToEatGuide]) {
  check(pillar.sections.length >= 6, `${pillar.url} ofrece una respuesta editorial completa`);
  check(pillar.faqs.length >= 5, `${pillar.url} responde dudas visibles`);
  check(pillar.sources.length >= 4, `${pillar.url} documenta fuentes primarias`);
  check(pillar.relatedGuides.length === 4, `${pillar.url} limita la profundización a cuatro decisiones útiles`);
  check(
    pillar.relatedGuides.every((item) => item.href.startsWith('/')) && new Set(pillar.relatedGuides.map((item) => item.href)).size === 4,
    `${pillar.url} enlaza destinos internos únicos y rastreables`,
  );
  check(pillar.topics.length >= 4, `${pillar.url} declara sus temas principales para Article`);
  check(pillar.heroWidth > 0 && pillar.heroHeight > 0, `${pillar.url} declara dimensiones reales de la imagen principal`);
  check(pillar.heroImage.startsWith('/images/lisboa-originales/'), `${pillar.url} usa fotografía propia`);
  check(
    existsSync(join(process.cwd(), 'public', pillar.heroImage.replace(/^\//, ''))),
    `${pillar.url} encuentra su fotografía en el repositorio`,
  );
}

check(!pillarComponent.includes("'@type': 'FAQPage'"), 'los pilares no publican FAQPage sin posibilidad de rich result');
check(!blogArticlePage.includes("'@type': 'FAQPage'"), 'el Blog conserva preguntas visibles sin schema FAQ decorativo');
check(
  (blogArticlePage.match(/href: ['"]\/que-ver-en-lisboa['"]/g) ?? []).length >= 3,
  'el pilar Qué ver recibe enlaces desde al menos tres guías contextuales',
);
check(
  (blogArticlePage.match(/href: ['"]\/donde-comer-en-lisboa['"]/g) ?? []).length >= 2,
  'el pilar Dónde comer recibe enlaces desde al menos dos guías contextuales',
);
check(authorPage.includes("'@type': 'ProfilePage'") && authorPage.includes("#jose-tabares"), 'la página de autor identifica a José con ProfilePage');

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

console.log(`\n${travelerGuides.length} prototipos heredados y ${travelerGuides.length * 3} respuestas humanas verificadas.`);
