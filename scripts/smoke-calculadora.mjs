#!/usr/bin/env node
/**
 * Smoke test HTTP de /calculadora-presupuesto-lisboa.
 *
 * Comprueba el HTML realmente servido, no el código fuente. Y no se limita a
 * buscar cadenas: recalcula el estado inicial con la misma función pura que
 * usa la página y verifica que las cifras servidas coinciden, incluidas las
 * relaciones entre ellas (el gasto en destino es el total menos alojamiento y
 * menos vuelos, el desglose suma lo que dice sumar...). Si la página se
 * desincronizara del módulo de cálculo, esto lo vería.
 *
 * Qué vigila:
 *
 *   - 200 sin redirección, un solo H1 y con el texto que le toca;
 *   - `canonical`, `robots` y metadatos sociales propios;
 *   - los controles del alcance completo: noches, alojamiento con importe
 *     propio, vuelos opcionales y selector de atracciones;
 *   - el resultado servido: total, por persona, por persona y día, gasto en
 *     destino sin alojamiento ni vuelos, y desglose;
 *   - que sin importe de vuelos lo diga expresamente;
 *   - reglas del cálculo y exclusiones publicadas íntegras, comparadas contra
 *     la fuente de verdad del módulo;
 *   - dos peticiones idénticas, mismo resultado;
 *   - FAQ visible = FAQ del schema;
 *   - enlaces internos vivos y sin redirect, y las dos páginas de entrada.
 *
 * Dos modos, como el resto de suites:
 *   - Local (por defecto): next build + next start en un puerto libre.
 *   - Remoto: SMOKE_BASE_URL=https://<preview>.vercel.app
 */

import { spawn } from 'node:child_process';
import net from 'node:net';
import {
  ATRACCIONES,
  BUDGET_ASSUMPTIONS,
  NO_INCLUIDO,
  calculateLisbonBudget,
  formatRango,
} from '../src/lib/budget-calculator.ts';
import { getRecommendedBudget } from '../src/lib/budget-recommended.ts';

const RUTA = '/calculadora-presupuesto-lisboa';
const BRAND = 'Estaba en Lisboa';
const H1_ESPERADO = 'Calculadora de presupuesto para Lisboa';
const isWindows = process.platform === 'win32';
const npxCommand = isWindows ? 'npx.cmd' : 'npx';

/** Estado inicial de la página. Debe coincidir con los `useState` de page.tsx. */
const ESTADO_INICIAL = {
  dias: 3,
  noches: 2,
  personas: 2,
  alojamiento: { modo: 'estimado', nivel: 'intermedio' },
  comida: 'mixto',
  transporte: 'publico',
  atracciones: [],
  excursionSintra: false,
};

/**
 * Controles que el alcance exige, y cómo se reconocen en el HTML.
 *
 * Se buscan por `data-control` y no por `id` porque desde el rediseño los
 * contadores son un grupo de dos botones más un `output`, no un único input
 * con id. El atributo existe justamente para dar un ancla estable a esto.
 */
const CONTROLES = [
  { nombre: 'contador de días', patron: /data-control="dias"/ },
  { nombre: 'contador de noches', patron: /data-control="noches"/ },
  { nombre: 'contador de personas', patron: /data-control="personas"/ },
  { nombre: 'selector de atracciones', patron: /data-control="atracciones"/ },
  { nombre: 'opción de alojamiento con importe propio', patron: /Importe propio/ },
  { nombre: 'campo de vuelos opcional', patron: /id="vuelos"/ },
  { nombre: 'casilla del día en Sintra', patron: /id="sintra"/ },
];

/** Botones de los tres contadores, con su etiqueta accesible. */
const BOTONES_CONTADOR = [
  'Reducir días',
  'Aumentar días',
  'Reducir noches',
  'Aumentar noches',
  'Reducir personas',
  'Aumentar personas',
];

/** Enlaces internos que la página debe ofrecer, todos vivos y sin redirect. */
const ENLACES_INTERNOS = [
  '/blog/presupuesto-viajar-lisboa',
  '/blog/como-moverse-por-lisboa',
  '/blog/donde-alojarse-en-lisboa',
  '/comprar-entradas',
  '/free-tours-lisboa',
  '/pack-completo',
];

/** Páginas que deben enlazar a la calculadora. */
const ENTRADAS = ['/planifica-tu-viaje', '/blog/presupuesto-viajar-lisboa'];

/*
 * /planifica-tu-viaje tuvo su propia calculadora: tres perfiles, dos sliders y
 * un número único. Se retiró para que exista una sola calculadora en el sitio.
 * Estas comprobaciones existen para que no vuelva por descuido.
 *
 * Los rastros se buscan como marcas concretas del widget antiguo, no como
 * palabras sueltas: «Confort» o «Medio» podrían reaparecer legítimamente en
 * otro texto, pero un `input type="range"` en esta página no.
 */
const PLANIFICA = '/planifica-tu-viaje';

const RASTROS_CALCULADORA_ANTIGUA = [
  { patron: /<input[^>]+type="range"/, que: 'sliders' },
  { patron: /Mochilero/, que: 'perfil «Mochilero»' },
  { patron: /Hostales y tascas locales/, que: 'descripción del perfil Mochilero' },
  { patron: /Hoteles céntricos y restaurantes/, que: 'descripción del perfil Medio' },
  { patron: /Hoteles boutique y gourmet/, que: 'descripción del perfil Confort' },
  { patron: /Presupuesto estimado/, que: 'cifra única «Presupuesto estimado»' },
  { patron: /€ por persona al día/, que: 'promedio por persona y día' },
  { patron: /Actividades para perfil/, que: 'actividades recomendadas por perfil' },
];

/** Los tres caminos del hub, con su destino exacto. */
const CAMINOS_HUB = [
  { texto: 'Calcular mi presupuesto', href: '/calculadora-presupuesto-lisboa' },
  { texto: 'Ver itinerarios', href: '/itinerarios' },
  { texto: 'Ver actividades', href: '/actividades' },
];

/** Vocabulario prohibido: promete una exactitud que la herramienta no tiene. */
const PROMESAS_PROHIBIDAS = [
  'precio exacto',
  'precio final',
  'coste exacto',
  'presupuesto exacto',
  'garantizado',
  'sin sorpresas',
  'mejor precio',
  'ahorra ',
  'ahorras',
  'compra ya',
  'más barato garantizado',
  'inteligencia artificial',
];

/**
 * Reclamos de «producto con IA» que hay que buscar como palabra suelta: como
 * subcadena, «ia» aparece dentro de familia, guía o día.
 */
const PALABRAS_PROHIBIDAS = [/\bIA\b/, /\bAI\b/i, /\bsmart\b/i, /\balgorítmic/i];

function log(...args) {
  console.log(...args);
}

const results = [];
let failures = 0;

function record(name, pass, detail) {
  results.push({ name, pass, detail });
  if (!pass) failures++;
  log(`${pass ? 'OK  ' : 'FAIL'} ${name}${detail ? ' - ' + detail : ''}`);
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', reject);
    server.listen(0, () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

function runStep(command, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command === 'npx' ? npxCommand : command, args, {
      stdio: 'inherit',
      shell: isWindows,
      ...opts,
    });
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(' ')} salió con código ${code}`));
    });
    child.on('error', reject);
  });
}

async function waitForServer(baseUrl, timeoutMs = 60_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(baseUrl + '/', { redirect: 'manual' });
      if (res.status) return;
    } catch {
      // todavía no responde
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`El servidor en ${baseUrl} no respondió en ${timeoutMs}ms`);
}

/** Texto plano del HTML, con las entidades que usamos ya resueltas. */
function aTexto(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&aacute;/g, 'á')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizar(texto) {
  return texto.replace(/\s+/g, ' ').replace(/[’']/g, "'").trim();
}

function meta(html, patron) {
  const m = html.match(patron);
  return m ? m[1] : null;
}

async function comprobarPagina(baseUrl) {
  const res = await fetch(`${baseUrl}${RUTA}`, { redirect: 'manual' });
  record(`${RUTA}: HTTP 200 sin redirección`, res.status === 200, `HTTP ${res.status}`);
  if (res.status !== 200) return null;

  const html = await res.text();
  const texto = normalizar(aTexto(html));

  // --- Estructura ---
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  record('un solo H1', h1.length === 1, `${h1.length} encontrados`);
  const h1Texto = h1.length === 1 ? normalizar(aTexto(h1[0])) : null;
  record('el H1 es el de la herramienta', h1Texto === H1_ESPERADO, h1Texto || 'ausente');
  record(
    'el H1 no invade la intención del artículo de presupuesto',
    !!h1Texto && !/cuánto cuesta un viaje a lisboa/i.test(h1Texto),
    h1Texto || ''
  );

  const h2 = html.match(/<h2[^>]*>/gi) || [];
  record('tiene secciones (H2)', h2.length >= 4, `${h2.length} H2`);
  record(
    'no se salta niveles de encabezado: hay H2 antes que H3',
    html.indexOf('<h2') < html.indexOf('<h3'),
    null
  );
  record(
    'los dos pasos están titulados',
    /Configura tu viaje/.test(texto) && /Tu presupuesto/.test(texto),
    null
  );

  // --- Metadatos ---
  const title = meta(html, /<title>([^<]*)<\/title>/i);
  record(
    'title propio y con la marca una sola vez',
    !!title && !title.includes(`${BRAND} | ${BRAND}`) && /calculadora/i.test(title),
    `title="${title}"`
  );

  const canonical = meta(html, /<link rel="canonical" href="([^"]+)"/i);
  record(
    'canonical propio',
    canonical === `https://estabaenlisboa.com${RUTA}`,
    canonical || 'ausente'
  );

  const robots = meta(html, /<meta name="robots" content="([^"]+)"/i);
  record(
    'indexable',
    !!robots && robots.includes('index') && !robots.includes('noindex'),
    robots || 'sin meta robots'
  );

  const ogTitle = meta(html, /<meta property="og:title" content="([^"]+)"/i);
  const twitterCard = meta(html, /<meta name="twitter:card" content="([^"]+)"/i);
  const twitterTitle = meta(html, /<meta name="twitter:title" content="([^"]+)"/i);
  record('og:title propio', !!ogTitle, ogTitle || 'ausente');
  record('twitter:card es summary_large_image', twitterCard === 'summary_large_image', twitterCard || 'ausente');
  record('twitter:title alineado con og:title', !!twitterTitle && twitterTitle === ogTitle, twitterTitle || 'ausente');

  // --- Controles del alcance completo ---
  const faltan = CONTROLES.filter((c) => !c.patron.test(html)).map((c) => c.nombre);
  record(
    'están los controles del alcance completo',
    faltan.length === 0,
    faltan.length ? `faltan: ${faltan.join(', ')}` : `${CONTROLES.length} controles`
  );

  const botonesFaltan = BOTONES_CONTADOR.filter(
    (etiqueta) => !html.includes(`aria-label="${etiqueta}"`)
  );
  record(
    'los contadores tienen sus botones + / − con etiqueta accesible',
    botonesFaltan.length === 0,
    botonesFaltan.length ? `faltan: ${botonesFaltan.join(', ')}` : `${BOTONES_CONTADOR.length} botones`
  );

  record(
    'hay un atajo al resultado en móvil',
    /Ver mi presupuesto/.test(texto),
    null
  );

  // --- Piezas nuevas: anillo, «qué pesa más», optimizador y dock ---
  const segmentos = (html.match(/class="budget-donut-segmento"/g) || []).length;
  record(
    'el anillo de reparto se sirve renderizado',
    segmentos >= 3,
    `${segmentos} tramos`
  );
  record(
    'el anillo tiene alternativa en texto y no depende del color',
    /Reparto del presupuesto recomendado/i.test(texto),
    null
  );
  record(
    'el anillo declara de dónde salen sus proporciones',
    /Reparto del presupuesto recomendado\./i.test(texto),
    null
  );
  record(
    'el anillo dice qué pasa con los vuelos',
    /vuelos.{0,40}(fuera del anillo|quedar[áa]n fuera)/i.test(texto),
    null
  );
  record(
    'dice qué partida pesa más',
    /es la partida que más pesa/i.test(texto),
    null
  );
  record(
    'el optimizador está en la página',
    /Cómo gastar menos/.test(texto) && /id="optimizador-presupuesto"/.test(html),
    null
  );
  record(
    'el selector de estilo de viaje está presente',
    /data-control="estilo"/.test(html) &&
      /Económico/.test(texto) &&
      /Intermedio/.test(texto) &&
      /Cómodo/.test(texto),
    null
  );
  record(
    'lo secundario queda plegado, pero en el HTML',
    (html.match(/<details/g) || []).length >= 3,
    `${(html.match(/<details/g) || []).length} plegables`
  );
  record(
    'el dock móvil existe y no aparece en escritorio',
    /Tu presupuesto/.test(texto) && /fixed inset-x-0 bottom-0[^"]*lg:hidden/.test(html),
    null
  );
  record(
    'el dock respeta el área segura del dispositivo',
    /safe-area-inset-bottom/.test(html),
    null
  );
  record(
    'las microanimaciones respetan prefers-reduced-motion',
    /prefers-reduced-motion: reduce/.test(html),
    null
  );

  /*
   * El formulario enseña las destacadas y sólo las destacadas. Las demás viven
   * detrás de «Ver más actividades», y que NO estén en el HTML inicial no es
   * un descuido: es exactamente el punto del panel. Por eso aquí se comprueban
   * las dos mitades, y la segunda en negativo.
   */
  const DESTACADAS = ATRACCIONES.filter((a) => a.destacada);
  const EXTRA = ATRACCIONES.filter((a) => !a.destacada);

  const destacadasFaltan = DESTACADAS.filter((a) => !texto.includes(normalizar(a.nombre)));
  record(
    'el formulario ofrece todas las atracciones destacadas',
    destacadasFaltan.length === 0,
    destacadasFaltan.length
      ? `faltan ${destacadasFaltan.map((a) => a.id).join(', ')}`
      : `${DESTACADAS.length} destacadas`
  );

  const extraColadas = EXTRA.filter((a) => texto.includes(normalizar(a.nombre)));
  record(
    'las actividades adicionales no cargan el formulario',
    extraColadas.length === 0,
    extraColadas.length
      ? `se han colado: ${extraColadas.map((a) => a.id).join(', ')}`
      : `${EXTRA.length} detrás del panel`
  );

  record(
    'hay un «Ver más actividades» si hay algo detrás',
    EXTRA.length === 0 ? !/Ver más actividades/.test(texto) : /Ver más actividades/.test(texto),
    `${EXTRA.length} adicionales`
  );

  /*
   * Los nombres tienen que verse enteros. Se comprueban dos cosas: que el
   * nombre completo está dentro de una etiqueta del selector —no sólo suelto
   * por la página— y que ahí no hay nada recortando texto.
   */
  const bloqueSelector = html.match(
    /data-control="atracciones"[\s\S]*?(?=<\/div><\/div><\/section>|Añadir transporte)/
  );
  const selector = bloqueSelector ? bloqueSelector[0] : '';
  const enSelector = DESTACADAS.filter(
    (a) => a.zona === 'lisboa' && !normalizar(aTexto(selector)).includes(normalizar(a.nombre))
  );
  record(
    'los nombres de Lisboa se ven completos dentro del selector',
    selector.length > 0 && enSelector.length === 0,
    enSelector.length ? `incompletos: ${enSelector.map((a) => a.id).join(', ')}` : null
  );

  const recortes = ['truncate', 'line-clamp-1', 'text-ellipsis', 'whitespace-nowrap'].filter((c) =>
    selector.includes(c)
  );
  record(
    'ningún nombre se recorta',
    selector.length > 0 && recortes.length === 0,
    recortes.length ? `aparece: ${recortes.join(', ')}` : null
  );

  record(
    'Lisboa y Sintra van agrupadas',
    /<legend[^>]*>\s*Lisboa\s*<\/legend>/.test(html) &&
      /<legend[^>]*>\s*Sintra\s*<\/legend>/.test(html),
    null
  );

  const casillas = (html.match(/type="checkbox"/g) || []).length;
  record(
    'hay una casilla por atracción destacada, más la del día en Sintra',
    casillas >= DESTACADAS.length + 1,
    `${casillas} casillas`
  );

  // --- El resultado por defecto, ya renderizado en el servidor ---
  const esperado = calculateLisbonBudget(ESTADO_INICIAL);

  /*
   * La jerarquía cambió en 11B: arriba una cifra cerrada, y el rango un
   * escalón por debajo. Se comprueban las dos mitades, porque perder
   * cualquiera de ellas sería un error distinto: sin cifra la herramienta
   * vuelve a no responder a la pregunta, y sin rango deja de ser honesta.
   */
  const recomendado = getRecommendedBudget(ESTADO_INICIAL, esperado);

  const cerradas = [
    ['presupuesto recomendado', recomendado.total],
    ['por persona recomendado', recomendado.porPersona],
    ['por persona y día recomendado', recomendado.porPersonaYDia],
  ];
  for (const [nombre, importe] of cerradas) {
    record(
      `sirve renderizado el ${nombre}`,
      texto.includes(normalizar(`${importe} €`)),
      `${importe} €`
    );
  }

  const rangos = [
    ['rango estimado del total', esperado.total],
    ['gasto en destino sin alojamiento ni vuelos', esperado.sinAlojamiento],
  ];
  for (const [nombre, rango] of rangos) {
    record(
      `sigue sirviendo el ${nombre}`,
      texto.includes(normalizar(formatRango(rango))),
      formatRango(rango)
    );
  }

  record(
    'la cifra principal es cerrada y cae dentro del rango',
    recomendado.total >= esperado.total.min && recomendado.total <= esperado.total.max,
    `${recomendado.total} € en ${formatRango(esperado.total)}`
  );

  record(
    'el rango sigue existiendo y sigue siendo un rango',
    esperado.total.max > esperado.total.min && formatRango(esperado.total).includes('–'),
    formatRango(esperado.total)
  );

  record(
    'el desglose recomendado reconstruye el total',
    recomendado.categorias.reduce((a, c) => a + c.importe, 0) + recomendado.redondeo ===
      recomendado.total,
    `${recomendado.sumaCategorias} + ${recomendado.redondeo} = ${recomendado.total}`
  );

  record(
    'etiqueta el gasto en destino como sin alojamiento ni vuelos',
    /sin alojamiento ni vuelos/i.test(texto),
    null
  );

  // Comportamiento, no cadenas: el gasto en destino tiene que ser menor que el
  // total en cuanto haya alojamiento, y no puede incluir alojamiento ni vuelos.
  const alojamiento = esperado.categorias.find((c) => c.id === 'alojamiento');
  record(
    'el gasto en destino excluye de verdad el alojamiento',
    esperado.sinAlojamiento.max < esperado.total.max && alojamiento.rango.max > 0,
    `destino ${formatRango(esperado.sinAlojamiento)} · total ${formatRango(esperado.total)}`
  );

  let categoriasOk = 0;
  for (const categoria of esperado.categorias) {
    if (texto.includes(normalizar(categoria.label))) categoriasOk++;
  }
  record(
    'el desglose muestra todas las categorías',
    categoriasOk === esperado.categorias.length,
    `${categoriasOk}/${esperado.categorias.length}`
  );

  record(
    'sin importe de vuelos, lo dice expresamente',
    esperado.vuelosIncluidos === false && /vuelos no incluidos/i.test(texto),
    null
  );

  // --- Transparencia: reglas y exclusiones publicadas íntegras ---
  const reglasFaltan = BUDGET_ASSUMPTIONS.filter((r) => !texto.includes(normalizar(r)));
  record(
    'publica las reglas del cálculo',
    reglasFaltan.length === 0,
    reglasFaltan.length ? `faltan ${reglasFaltan.length}` : `${BUDGET_ASSUMPTIONS.length} reglas`
  );

  const exclusionesFaltan = NO_INCLUIDO.filter((r) => !texto.includes(normalizar(r)));
  record(
    'publica lo que no está contado',
    exclusionesFaltan.length === 0,
    exclusionesFaltan.length ? `faltan ${exclusionesFaltan.length}` : `${NO_INCLUIDO.length} exclusiones`
  );

  record('explica que las noches las decide el usuario', /noches las decides tú/i.test(texto), null);

  // --- Nada que prometa exactitud ---
  const enMinusculas = texto.toLowerCase();
  const promesas = PROMESAS_PROHIBIDAS.filter((p) => enMinusculas.includes(p));
  const palabras = PALABRAS_PROHIBIDAS.filter((p) => p.test(texto)).map(String);
  record(
    'no promete precisión que no tiene',
    promesas.length === 0,
    promesas.length ? `aparece: ${promesas.join(', ')}` : null
  );
  record(
    'no se vende como producto con IA',
    palabras.length === 0,
    palabras.length ? `aparece: ${palabras.join(', ')}` : null
  );

  // --- Datos estructurados ---
  const bloques = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  let faq = null;
  for (const bloque of bloques) {
    try {
      const json = JSON.parse(bloque[1]);
      if (json['@type'] === 'FAQPage') faq = json;
    } catch {
      record('JSON-LD parseable', false, 'un bloque no es JSON válido');
    }
  }
  record('tiene FAQPage', !!faq, faq ? `${faq.mainEntity.length} preguntas` : 'ausente');
  if (faq) {
    const preguntasFuera = faq.mainEntity.filter((q) => !texto.includes(normalizar(q.name)));
    record('cada pregunta del FAQPage está visible', preguntasFuera.length === 0, null);
    const respuestasFuera = faq.mainEntity.filter(
      (q) => !texto.includes(normalizar(q.acceptedAnswer.text))
    );
    record('cada respuesta del FAQPage está visible', respuestasFuera.length === 0, null);
    const cubreVuelos = faq.mainEntity.some((q) => /vuelo/i.test(q.name + q.acceptedAnswer.text));
    const cubreNoches = faq.mainEntity.some((q) => /noche/i.test(q.name + q.acceptedAnswer.text));
    const cubreReserva = faq.mainEntity.some((q) => /reservad/i.test(q.name + q.acceptedAnswer.text));
    record('la FAQ describe la herramienta real', cubreVuelos && cubreNoches && cubreReserva, null);
  }

  return html;
}

async function comprobarDeterminismo(baseUrl) {
  const [a, b] = await Promise.all([
    fetch(`${baseUrl}${RUTA}`).then((r) => r.text()),
    fetch(`${baseUrl}${RUTA}`).then((r) => r.text()),
  ]);
  // El ancla cambió con el rediseño: el bloque grande del resultado se titula
  // «Total para el grupo». Se sigue midiendo lo mismo, la cifra servida.
  const extraer = (html) => {
    const m = aTexto(html).match(/Tu presupuesto recomendado\s+([0-9][^A-Za-z]{0,30}€)/);
    return m ? m[1].trim() : null;
  };
  const ra = extraer(a);
  const rb = extraer(b);
  record(
    'dos peticiones idénticas devuelven el mismo total',
    !!ra && ra === rb,
    ra && rb ? `"${ra}" / "${rb}"` : 'no se pudo extraer el resultado'
  );

  // Y, más fuerte que una sola cifra: el texto entero de la página debe ser
  // idéntico entre dos peticiones. Si algo introdujera aleatoriedad o
  // dependiera del reloj, aparecería aquí aunque el total no cambiara.
  record(
    'dos peticiones idénticas devuelven la misma página',
    aTexto(a) === aTexto(b),
    null
  );
}

async function comprobarEnlace(baseUrl, ruta) {
  const res = await fetch(`${baseUrl}${ruta}`, { redirect: 'manual' });
  record(`enlace ${ruta}: 200 sin redirección`, res.status === 200, `HTTP ${res.status}`);
}

async function comprobarEntrada(baseUrl, ruta) {
  const res = await fetch(`${baseUrl}${ruta}`, { redirect: 'manual' });
  if (res.status !== 200) {
    record(`${ruta} enlaza a la calculadora`, false, `HTTP ${res.status}`);
    return;
  }
  const html = await res.text();
  record(`${ruta} enlaza a la calculadora`, html.includes(RUTA), null);
}

/**
 * /planifica-tu-viaje debe ser un hub, no una segunda calculadora: sin rastro
 * del widget antiguo y con los tres caminos apuntando a donde toca.
 */
async function comprobarHubPlanifica(baseUrl) {
  const res = await fetch(`${baseUrl}${PLANIFICA}`, { redirect: 'manual' });
  if (res.status !== 200) {
    record(`${PLANIFICA} responde 200`, false, `HTTP ${res.status}`);
    return;
  }
  record(`${PLANIFICA} responde 200`, true, null);

  const html = await res.text();

  for (const { patron, que } of RASTROS_CALCULADORA_ANTIGUA) {
    record(`${PLANIFICA} sin ${que}`, !patron.test(html), patron.test(html) ? 'sigue presente' : null);
  }

  for (const { texto, href } of CAMINOS_HUB) {
    record(
      `${PLANIFICA} ofrece «${texto}»`,
      html.includes(texto) && html.includes(`href="${href}"`),
      null
    );
  }
}

async function main() {
  const explicitBaseUrl = process.env.SMOKE_BASE_URL;
  let child = null;
  let baseUrl = explicitBaseUrl;

  try {
    if (!explicitBaseUrl) {
      log('== Modo local: next build + next start ==');
      await runStep('npx', ['next', 'build']);

      const port = await getFreePort();
      baseUrl = `http://localhost:${port}`;

      const env = { ...process.env, PORT: String(port) };
      if (!env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
        log('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY no está definido: usando una clave local ficticia solo para poder arrancar el servidor de pruebas.');
        env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = 'pk_test_bm9pbmRleC1zbW9rZXRlc3QuY2xlcmsuYWNjb3VudHMuZGV2JA==';
        env.CLERK_SECRET_KEY = env.CLERK_SECRET_KEY || 'sk_test_localsmoketestdummykeyfor000000000000000000';
      }

      log(`== Arrancando next start en ${baseUrl} ==`);
      child = spawn(npxCommand, ['next', 'start', '-p', String(port)], {
        stdio: 'inherit',
        env,
        shell: isWindows,
      });
      await waitForServer(baseUrl);
      log('Servidor listo.\n');
    } else {
      log(`== Modo remoto: probando ${baseUrl} (sin build/start local) ==\n`);
    }

    await comprobarPagina(baseUrl);
    await comprobarDeterminismo(baseUrl);

    log('\n-- Enlaces internos --');
    for (const ruta of ENLACES_INTERNOS) {
      await comprobarEnlace(baseUrl, ruta);
    }

    log('\n-- Páginas que enlazan a la calculadora --');
    for (const ruta of ENTRADAS) {
      await comprobarEntrada(baseUrl, ruta);
    }

    log('\n-- /planifica-tu-viaje como hub (sin calculadora antigua) --');
    await comprobarHubPlanifica(baseUrl);

    log(`\n${results.length - failures}/${results.length} comprobaciones OK.`);
    if (failures > 0) {
      log(`\n${failures} comprobaciones fallaron.`);
      process.exitCode = 1;
    }
  } catch (err) {
    console.error('\nError ejecutando el smoke test:', err);
    process.exitCode = 1;
  } finally {
    if (child) {
      log('\nDeteniendo el servidor de pruebas...');
      child.kill('SIGTERM');
    }
  }
}

main();
