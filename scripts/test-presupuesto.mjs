#!/usr/bin/env node
/**
 * Pruebas de guardar y enviar el presupuesto: el PDF y la ruta de API.
 *
 * Mismo patrón que las otras suites, Node sin dependencias cargando el
 * TypeScript directamente. Lo que aquí se defiende es una sola idea, la que
 * sostiene el endpoint entero: **el navegador manda decisiones, no importes**.
 * Varias pruebas existen sólo para que, si alguien empieza a leer un `total`
 * del cuerpo de la petición, esto se ponga en rojo.
 *
 * El envío de email se prueba interceptando `fetch`: no se manda nada a
 * Brevo. Lo que se comprueba es el contrato de la ruta —qué códigos devuelve,
 * qué adjunta, qué no filtra— y no que el proveedor funcione, que no es algo
 * que una prueba local pueda afirmar.
 */

import assert from 'node:assert/strict';
import { inflateSync } from 'node:zlib';
import { calculateLisbonBudget, ATRACCIONES } from '../src/lib/budget-calculator.ts';
import { generarSugerencias } from '../src/lib/budget-optimizer.ts';
import { parseBudgetInput } from '../src/lib/budget-input.ts';
import { createBudgetPdf, nombreArchivoPdf } from '../src/lib/budget-pdf.ts';

let fallos = 0;
let total = 0;

async function test(nombre, fn) {
  total++;
  try {
    await fn();
    console.log(`OK   ${nombre}`);
  } catch (err) {
    fallos++;
    console.log(`FALLA ${nombre}\n     ${err.message}`);
  }
}

const BASE = {
  dias: 3,
  noches: 2,
  personas: 2,
  alojamiento: { modo: 'estimado', nivel: 'intermedio' },
  comida: 'mixto',
  transporte: 'publico',
  atracciones: [],
  excursionSintra: false,
};

const FECHA = new Date('2026-08-25T10:00:00Z');

/**
 * Extrae el texto de un PDF para poder afirmar qué lleva dentro.
 *
 * pdf-lib comprime los flujos con Flate, así que no vale con leer el archivo
 * como texto: hay que inflar cada `stream`. Y dentro escribe las cadenas en
 * hexadecimal —`<45737461...> Tj`—, no entre paréntesis, así que tampoco vale
 * con buscar literales. Se hace con `node:zlib` a propósito, para que la suite
 * no dependa de tener `pdftotext` instalado.
 *
 * Los bytes llegan en WinAnsi, que en el rango que usamos —acentos del español
 * y del portugués— coincide con Latin-1. La única excepción es el 0x80, que en
 * WinAnsi es el símbolo del euro.
 */
function textoDelPdf(bytes) {
  const buffer = Buffer.from(bytes);
  const trozos = [];

  const FIN = 'endstream';
  let desde = 0;
  for (;;) {
    const inicio = buffer.indexOf('stream', desde);
    if (inicio === -1) break;
    let cursor = inicio + 'stream'.length;
    if (buffer[cursor] === 0x0d) cursor++;
    if (buffer[cursor] === 0x0a) cursor++;

    const fin = buffer.indexOf(FIN, cursor);
    if (fin === -1) break;
    // Pasar de largo el `endstream` entero: si no, su propio «stream» vuelve
    // a encontrarse en la siguiente vuelta y el recorrido se descoloca.
    desde = fin + FIN.length;

    let inflado;
    try {
      inflado = inflateSync(buffer.subarray(cursor, fin));
    } catch {
      continue; // No era un flujo Flate: se ignora.
    }

    const contenido = inflado.toString('latin1');
    for (const match of contenido.matchAll(/<([0-9A-Fa-f]+)>\s*Tj/g)) {
      trozos.push(Buffer.from(match[1], 'hex').toString('latin1').replace(/\x80/g, '€'));
    }
    for (const match of contenido.matchAll(/\(((?:\\.|[^()\\])*)\)\s*Tj/g)) {
      trozos.push(match[1].replace(/\\([()\\])/g, '$1').replace(/\x80/g, '€'));
    }
  }

  return trozos.join('\n');
}

async function pdfDe(input) {
  const result = calculateLisbonBudget(input);
  const bytes = await createBudgetPdf(input, result, generarSugerencias(input), FECHA);
  return { result, bytes, texto: textoDelPdf(bytes) };
}

// ---------------------------------------------------------------- PDF -----

await test('A · el PDF es un PDF válido y no está vacío', async () => {
  const { bytes } = await pdfDe(BASE);
  assert.equal(Buffer.from(bytes.slice(0, 5)).toString(), '%PDF-');
  assert.ok(bytes.byteLength > 1000, `demasiado pequeño: ${bytes.byteLength}`);
});

await test('B · el PDF usa el resultado real del motor, no otro cálculo', async () => {
  const input = { ...BASE, dias: 5, personas: 3, comida: 'restaurantes' };
  const { result, texto } = await pdfDe(input);
  // El PDF escribe el rango con guion simple: la raya del formato de pantalla
  // no existe en WinAnsi y `sanear()` la traduce.
  for (const [concepto, rango] of [
    ['total', result.total],
    ['por persona', result.porPersona],
    ['por persona y día', result.porPersonaYDia],
    ['gastos en destino', result.sinAlojamiento],
  ]) {
    assert.ok(
      texto.includes(`${rango.min} - ${rango.max} €`),
      `no aparece el ${concepto} ${rango.min} - ${rango.max} €`
    );
  }
});

await test('C · el PDF incluye días, noches y personas', async () => {
  const { texto } = await pdfDe({ ...BASE, dias: 5, noches: 4, personas: 3 });
  assert.ok(texto.includes('5 días'), 'faltan los días');
  assert.ok(texto.includes('4 noches'), 'faltan las noches');
  assert.ok(texto.includes('3 personas'), 'faltan las personas');
});

await test('D · singulares correctos con 1 día, 1 noche y 1 persona', async () => {
  const { texto } = await pdfDe({ ...BASE, dias: 1, noches: 1, personas: 1 });
  assert.ok(/1 día\b/.test(texto), 'debería decir «1 día»');
  assert.ok(/1 noche\b/.test(texto), 'debería decir «1 noche»');
  assert.ok(/1 persona\b/.test(texto), 'debería decir «1 persona»');
});

await test('E · el PDF lista las atracciones seleccionadas por su nombre', async () => {
  const { texto } = await pdfDe({
    ...BASE,
    atracciones: ['castelo-sao-jorge', 'palacio-pena'],
  });
  assert.ok(texto.includes('Castelo de São Jorge'), 'falta el Castelo');
  assert.ok(texto.includes('Palácio da Pena'), 'falta el Palácio da Pena');
});

await test('F · sin atracciones no aparece la sección de actividades', async () => {
  const { texto } = await pdfDe(BASE);
  assert.ok(!texto.includes('ACTIVIDADES SELECCIONADAS'), 'no debería haber sección vacía');
});

await test('G · el importe propio de alojamiento aparece sin rango', async () => {
  const { texto } = await pdfDe({
    ...BASE,
    alojamiento: { modo: 'propio', total: 520 },
  });
  assert.ok(texto.includes('Importe propio'), 'no se declara el modo');
  assert.ok(texto.includes('520 €'), 'no aparece el importe exacto');
  assert.ok(!texto.includes('520 - 520'), 'un importe propio no lleva rango');
});

await test('H · los vuelos introducidos aparecen; si no hay, se dice', async () => {
  const con = await pdfDe({ ...BASE, vuelosTotal: 340 });
  assert.ok(con.texto.includes('340 €'), 'no aparece el importe de vuelos');

  const sin = await pdfDe(BASE);
  assert.ok(
    sin.texto.includes('Los vuelos no están incluidos'),
    'debería decir que no hay vuelos'
  );
});

await test('I · el PDF lleva el aviso de estimación y la fecha de generación', async () => {
  const { texto } = await pdfDe(BASE);
  assert.ok(texto.includes('estimación orientativa'), 'falta el aviso');
  assert.ok(texto.includes('no un precio cerrado'), 'falta la negación explícita');
  assert.ok(texto.includes('25 de agosto de 2026'), 'falta la fecha de generación');
});

await test('J · las sugerencias del optimizador entran con su impacto', async () => {
  const input = { ...BASE, comida: 'restaurantes', transporte: 'publico-taxi' };
  const sugerencias = generarSugerencias(input);
  assert.ok(sugerencias.length > 0, 'el escenario debería producir sugerencias');
  const { texto } = await pdfDe(input);
  for (const sugerencia of sugerencias) {
    assert.ok(texto.includes(sugerencia.titulo), `falta «${sugerencia.titulo}»`);
  }
  assert.ok(texto.includes('No es un precio'), 'falta la advertencia del impacto');
});

await test('K · el PDF es determinista con la misma fecha', async () => {
  const a = await pdfDe(BASE);
  const b = await pdfDe(BASE);
  assert.equal(a.texto, b.texto, 'mismo input debería dar mismo texto');
});

await test('L · el nombre del archivo describe el viaje y no lleva datos personales', () => {
  const result = calculateLisbonBudget({ ...BASE, dias: 5, personas: 3 });
  assert.equal(nombreArchivoPdf(result), 'presupuesto-lisboa-5d-3p.pdf');
});

// ------------------------------------------------------ validación -----

await test('M · rechaza días, noches o personas fuera de rango', () => {
  assert.equal(parseBudgetInput({ ...BASE, dias: 0 }).ok, false);
  assert.equal(parseBudgetInput({ ...BASE, dias: 99 }).ok, false);
  assert.equal(parseBudgetInput({ ...BASE, noches: -1 }).ok, false);
  assert.equal(parseBudgetInput({ ...BASE, personas: 9 }).ok, false);
  assert.equal(parseBudgetInput({ ...BASE, dias: 2.5 }).ok, false);
  assert.equal(parseBudgetInput({ ...BASE, dias: '3' }).ok, false);
});

await test('N · rechaza niveles desconocidos en vez de caer en un 500', () => {
  // `calculateLisbonBudget` lanza con un id que no existe: el validador debe
  // pararlo antes, o un payload raro se convierte en error de servidor.
  assert.throws(() => calculateLisbonBudget({ ...BASE, comida: 'gratis' }));
  assert.equal(parseBudgetInput({ ...BASE, comida: 'gratis' }).ok, false);
  assert.equal(parseBudgetInput({ ...BASE, transporte: 'helicoptero' }).ok, false);
  assert.equal(
    parseBudgetInput({ ...BASE, alojamiento: { modo: 'estimado', nivel: 'palacio' } }).ok,
    false
  );
  assert.equal(parseBudgetInput({ ...BASE, alojamiento: { modo: 'gratis' } }).ok, false);
});

await test('O · rechaza atracciones inventadas y quita duplicados', () => {
  assert.equal(parseBudgetInput({ ...BASE, atracciones: ['torre-eiffel'] }).ok, false);
  assert.equal(parseBudgetInput({ ...BASE, atracciones: 'castelo-sao-jorge' }).ok, false);
  assert.equal(
    parseBudgetInput({ ...BASE, atracciones: new Array(ATRACCIONES.length + 1).fill('maat') }).ok,
    false
  );

  const parsed = parseBudgetInput({
    ...BASE,
    atracciones: ['maat', 'maat', 'castelo-sao-jorge'],
  });
  assert.equal(parsed.ok, true);
  assert.deepEqual(parsed.input.atracciones, ['maat', 'castelo-sao-jorge']);
});

await test('P · ignora cualquier total que venga del cliente', () => {
  const parsed = parseBudgetInput({
    ...BASE,
    total: 1,
    porPersona: 1,
    sinAlojamiento: { min: 1, max: 1 },
  });
  assert.equal(parsed.ok, true);
  assert.equal('total' in parsed.input, false, 'el total del cliente no puede sobrevivir');
  assert.equal('porPersona' in parsed.input, false);

  const result = calculateLisbonBudget(parsed.input);
  assert.ok(result.total.min > 1, 'el total lo decide el motor, no el cliente');
});

await test('Q · normaliza importes basura sin romperse', () => {
  const casos = [
    [{ modo: 'propio', total: -500 }, 0],
    [{ modo: 'propio', total: 'mucho' }, 0],
    [{ modo: 'propio', total: Infinity }, 0],
    [{ modo: 'propio', total: 1e12 }, 100_000],
  ];
  for (const [alojamiento, esperado] of casos) {
    const parsed = parseBudgetInput({ ...BASE, alojamiento });
    assert.equal(parsed.ok, true, `debería aceptar ${JSON.stringify(alojamiento)}`);
    assert.equal(parsed.input.alojamiento.total, esperado);
  }
});

await test('R · rechaza un cuerpo que no es un objeto', () => {
  for (const basura of [null, undefined, 42, 'texto', [], true]) {
    assert.equal(parseBudgetInput(basura).ok, false, `debería rechazar ${JSON.stringify(basura)}`);
  }
});

// ------------------------------------------------------------ API ---------

process.env.BREVO_API_KEY = 'clave-de-prueba-que-no-sale-de-aqui';
process.env.BREVO_SENDER_EMAIL = 'pruebas@example.com';

const { POST } = await import('../src/app/api/presupuesto/route.ts');

/** Sustituye `fetch` para que ninguna prueba llame a Brevo de verdad. */
function interceptarBrevo(responder) {
  const original = globalThis.fetch;
  const llamadas = [];
  globalThis.fetch = async (url, opciones) => {
    llamadas.push({ url: String(url), body: JSON.parse(opciones.body) });
    return responder();
  };
  return {
    llamadas,
    restaurar() {
      globalThis.fetch = original;
    },
  };
}

const okBrevo = () => new Response(JSON.stringify({ messageId: 'x' }), { status: 201 });
const falloBrevo = () =>
  new Response(JSON.stringify({ message: 'clave inválida' }), { status: 401 });

function peticion(cuerpo) {
  return new Request('http://localhost/api/presupuesto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '203.0.113.7' },
    body: typeof cuerpo === 'string' ? cuerpo : JSON.stringify(cuerpo),
  });
}

await test('S · sin email devuelve el PDF para descargar', async () => {
  const res = await POST(peticion({ input: BASE }));
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('content-type'), 'application/pdf');
  assert.match(res.headers.get('content-disposition'), /attachment; filename="presupuesto-lisboa-3d-2p\.pdf"/);
  assert.equal(res.headers.get('cache-control'), 'no-store');
  const bytes = Buffer.from(await res.arrayBuffer());
  assert.equal(bytes.subarray(0, 5).toString(), '%PDF-');
});

await test('T · email inválido devuelve 400', async () => {
  for (const email of ['sin-arroba', 'a@', '@b.com', 'a b@c.com', 123]) {
    const res = await POST(peticion({ input: BASE, email }));
    assert.equal(res.status, 400, `debería rechazar ${JSON.stringify(email)}`);
  }
});

await test('U · payload inválido devuelve 400 y no 500', async () => {
  const casos = [
    { input: { ...BASE, comida: 'gratis' } },
    { input: { ...BASE, dias: 0 } },
    { input: { ...BASE, atracciones: ['inventada'] } },
    { input: null },
    {},
  ];
  for (const cuerpo of casos) {
    const res = await POST(peticion(cuerpo));
    assert.equal(res.status, 400, `debería ser 400 con ${JSON.stringify(cuerpo).slice(0, 50)}`);
  }
});

await test('V · JSON roto devuelve 400', async () => {
  const res = await POST(peticion('{ esto no es json'));
  assert.equal(res.status, 400);
});

await test('W · un cuerpo enorme se rechaza con 413', async () => {
  const res = await POST(peticion({ input: BASE, relleno: 'x'.repeat(9000) }));
  assert.equal(res.status, 413);
});

await test('X · el total del PDF no lo decide el cliente', async () => {
  // Mismo input, pero el cliente además afirma que su viaje cuesta 1 €.
  const honesto = await POST(peticion({ input: BASE }));
  const mentiroso = await POST(peticion({ input: { ...BASE, total: { min: 1, max: 1 } } }));

  const textoHonesto = textoDelPdf(Buffer.from(await honesto.arrayBuffer()));
  const textoMentiroso = textoDelPdf(Buffer.from(await mentiroso.arrayBuffer()));

  assert.equal(textoHonesto, textoMentiroso, 'el total del cliente ha cambiado el PDF');
  assert.ok(!textoHonesto.includes('1 - 1 €'), 'el total manipulado ha llegado al PDF');

  const esperado = calculateLisbonBudget(BASE).total;
  assert.ok(
    textoHonesto.includes(`${esperado.min} - ${esperado.max}`),
    'el PDF no lleva el total del motor'
  );
});

await test('Y · con email válido envía el PDF adjunto y devuelve éxito', async () => {
  const brevo = interceptarBrevo(okBrevo);
  try {
    const res = await POST(peticion({ input: BASE, email: 'viajera@example.com' }));
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { success: true });

    assert.equal(brevo.llamadas.length, 1, 'debería haber una sola llamada al proveedor');
    const { url, body } = brevo.llamadas[0];
    assert.match(url, /api\.brevo\.com\/v3\/smtp\/email/);
    assert.deepEqual(body.to, [{ email: 'viajera@example.com', name: 'viajera@example.com' }]);
    assert.equal(body.attachment.length, 1);
    assert.equal(body.attachment[0].name, 'presupuesto-lisboa-3d-2p.pdf');
    assert.equal(
      Buffer.from(body.attachment[0].content, 'base64').subarray(0, 5).toString(),
      '%PDF-',
      'el adjunto debería ser el PDF'
    );
  } finally {
    brevo.restaurar();
  }
});

await test('Z · el envío es transaccional: no da de alta ningún contacto', async () => {
  const brevo = interceptarBrevo(okBrevo);
  try {
    await POST(peticion({ input: BASE, email: 'viajera@example.com' }));
    const contactos = brevo.llamadas.filter((l) => l.url.includes('/v3/contacts'));
    assert.equal(contactos.length, 0, 'no debe tocar listas de contactos');
  } finally {
    brevo.restaurar();
  }
});

await test('AA · un fallo del proveedor devuelve 502 y un mensaje neutro', async () => {
  const brevo = interceptarBrevo(falloBrevo);
  try {
    const res = await POST(peticion({ input: BASE, email: 'viajera@example.com' }));
    assert.equal(res.status, 502);
    const datos = await res.json();
    assert.equal(datos.success, false);
    assert.ok(
      !/clave|api|brevo|token/i.test(datos.error),
      `el error no debe filtrar el motivo: «${datos.error}»`
    );
    assert.match(datos.error, /descargar el PDF/, 'debería ofrecer la alternativa');
  } finally {
    brevo.restaurar();
  }
});

console.log(`\n${total - fallos}/${total} pruebas OK.`);
if (fallos > 0) {
  console.log(`${fallos} pruebas fallaron.`);
  process.exitCode = 1;
}
