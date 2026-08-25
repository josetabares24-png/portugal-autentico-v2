#!/usr/bin/env node
/**
 * Pruebas del catálogo de actividades ampliado.
 *
 * La prueba que manda es la primera: **FASE 10 sigue dando lo mismo**. Los
 * números de `REFERENCIA_FASE_10` no los he escrito yo a ojo: salen de
 * ejecutar el motor tal y como estaba en el commit 3177285, antes de tocar el
 * catálogo. Si alguien amplía la lista de actividades y con ello mueve un
 * rango sin darse cuenta, esto se pone en rojo con la cifra exacta.
 *
 * Lo demás defiende las tres reglas del catálogo: que las ocho destacadas
 * siguen siendo las que salen en el formulario, que ninguna actividad nueva
 * repite un id, y que sumar o quitar una actividad mueve el presupuesto en la
 * dirección correcta y sólo por la partida de entradas.
 */

import assert from 'node:assert/strict';
import {
  ATRACCIONES,
  CLASES_ENTRADA,
  calculateLisbonBudget,
  getAtraccion,
} from '../src/lib/budget-calculator.ts';

let fallos = 0;
let total = 0;

function test(nombre, fn) {
  total++;
  try {
    fn();
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

const entradasDe = (result) =>
  result.categorias.find((c) => c.id === 'atracciones')?.rango ?? { min: 0, max: 0 };
const excursionDe = (result) => result.categorias.find((c) => c.id === 'excursion')?.rango ?? null;

/** Los ocho ids que existían en FASE 10, escritos a mano como testigo. */
const DESTACADAS_FASE_10 = [
  'castelo-sao-jorge',
  'mosteiro-jeronimos',
  'torre-belem',
  'maat',
  'oceanario',
  'palacio-pena',
  'quinta-regaleira',
  'castelo-mouros',
];

/**
 * Resultados del motor en el commit 3177285 (cierre de FASE 10), obtenidos
 * ejecutando aquella versión del archivo, no estimados.
 */
const REFERENCIA_FASE_10 = [
  {
    nombre: 'mínimo',
    input: { ...BASE, dias: 1, noches: 0, personas: 1, alojamiento: { modo: 'estimado', nivel: 'economico' }, comida: 'ahorro', transporte: 'a-pie' },
    total: { min: 15, max: 35 },
    porPersona: { min: 15, max: 35 },
    porPersonaYDia: { min: 15, max: 34 },
    sinAlojamiento: { min: 15, max: 35 },
  },
  {
    nombre: 'típico',
    input: { ...BASE, atracciones: ['castelo-sao-jorge', 'mosteiro-jeronimos'] },
    total: { min: 430, max: 760 },
    porPersona: { min: 215, max: 380 },
    porPersonaYDia: { min: 72, max: 127 },
    sinAlojamiento: { min: 260, max: 460 },
  },
  {
    nombre: 'con Sintra',
    input: { ...BASE, dias: 4, noches: 3, atracciones: ['palacio-pena', 'quinta-regaleira'], excursionSintra: true },
    total: { min: 635, max: 1140 },
    porPersona: { min: 315, max: 570 },
    porPersonaYDia: { min: 79, max: 143 },
    sinAlojamiento: { min: 380, max: 690 },
  },
  {
    nombre: 'importe propio y vuelos',
    input: { ...BASE, dias: 5, noches: 4, personas: 3, alojamiento: { modo: 'propio', total: 520 }, comida: 'restaurantes', transporte: 'publico-taxi', atracciones: ['oceanario'], vuelosTotal: 340 },
    total: { min: 1960, max: 2795 },
    porPersona: { min: 650, max: 935 },
    porPersonaYDia: { min: 130, max: 187 },
    sinAlojamiento: { min: 1100, max: 1935 },
  },
  {
    nombre: 'las ocho destacadas',
    input: { ...BASE, dias: 7, noches: 6, personas: 4, alojamiento: { modo: 'estimado', nivel: 'superior' }, comida: 'restaurantes', transporte: 'publico-taxi', atracciones: DESTACADAS_FASE_10, excursionSintra: true, vuelosTotal: 900 },
    total: { min: 5205, max: 8560 },
    porPersona: { min: 1300, max: 2140 },
    porPersonaYDia: { min: 186, max: 306 },
    sinAlojamiento: { min: 2385, max: 4300 },
  },
];

test('A · FASE 10 sigue dando exactamente los mismos resultados', () => {
  for (const caso of REFERENCIA_FASE_10) {
    const r = calculateLisbonBudget(caso.input);
    for (const campo of ['total', 'porPersona', 'porPersonaYDia', 'sinAlojamiento']) {
      assert.deepEqual(
        r[campo],
        caso[campo],
        `«${caso.nombre}» · ${campo}: ahora ${r[campo].min}–${r[campo].max}, antes ${caso[campo].min}–${caso[campo].max}`
      );
    }
  }
});

test('B · las ocho destacadas siguen siendo las mismas y en el mismo orden', () => {
  const destacadas = ATRACCIONES.filter((a) => a.destacada).map((a) => a.id);
  assert.deepEqual(destacadas, DESTACADAS_FASE_10);
});

test('C · hay actividades adicionales y no están marcadas como destacadas', () => {
  const resto = ATRACCIONES.filter((a) => !a.destacada);
  assert.ok(resto.length > 0, 'no hay ninguna actividad adicional');
  for (const a of resto) {
    assert.equal(a.destacada, false);
    assert.ok(!DESTACADAS_FASE_10.includes(a.id), `${a.id} no puede estar en las dos listas`);
  }
});

test('D · ningún id repetido en todo el catálogo', () => {
  const ids = ATRACCIONES.map((a) => a.id);
  assert.equal(new Set(ids).size, ids.length, `ids duplicados en ${ids.join(', ')}`);
});

test('E · toda actividad tiene nombre, zona, tramo y descripción', () => {
  for (const a of ATRACCIONES) {
    assert.ok(a.nombre && a.nombre.length > 2, `${a.id} sin nombre`);
    assert.ok(['lisboa', 'sintra'].includes(a.zona), `${a.id} con zona rara: ${a.zona}`);
    assert.ok(['baja', 'media', 'alta'].includes(a.clase), `${a.id} con tramo raro: ${a.clase}`);
    assert.ok(a.desc && a.desc.length > 10, `${a.id} sin descripción útil`);
    assert.equal(typeof a.destacada, 'boolean', `${a.id} sin marcar si es destacada`);
  }
});

test('F · ninguna actividad cita una tarifa concreta', () => {
  // El motor trabaja con tramos. Un «12 €» dentro de una descripción sería un
  // precio oficial colado por la puerta de atrás.
  for (const a of ATRACCIONES) {
    assert.ok(!/\d+\s*(€|euros?)/i.test(a.desc), `${a.id} cita un importe: «${a.desc}»`);
    assert.ok(!/\d+\s*(€|euros?)/i.test(a.nombre), `${a.id} cita un importe en el nombre`);
  }
});

test('G · marcar una actividad adicional sube sólo la partida de entradas', () => {
  const extra = ATRACCIONES.find((a) => !a.destacada);
  const sin = calculateLisbonBudget(BASE);
  const con = calculateLisbonBudget({ ...BASE, atracciones: [extra.id] });

  assert.ok(entradasDe(con).max > entradasDe(sin).max, 'las entradas no han subido');
  assert.ok(con.total.max > sin.total.max, 'el total no ha subido');

  for (const id of ['alojamiento', 'comida', 'transporte']) {
    const antes = sin.categorias.find((c) => c.id === id).rango;
    const despues = con.categorias.find((c) => c.id === id).rango;
    assert.deepEqual(despues, antes, `${id} no debería moverse al marcar una entrada`);
  }
});

test('H · quitarla devuelve el cálculo exactamente a donde estaba', () => {
  const extra = ATRACCIONES.find((a) => !a.destacada);
  const antes = calculateLisbonBudget(BASE);
  calculateLisbonBudget({ ...BASE, atracciones: [extra.id] });
  const despues = calculateLisbonBudget({ ...BASE, atracciones: [] });
  assert.deepEqual(despues, antes, 'quitar la actividad no ha revertido el cálculo');
});

test('I · cada actividad se suma una vez por persona, según su tramo', () => {
  for (const extra of ATRACCIONES.filter((a) => !a.destacada)) {
    const sin = calculateLisbonBudget({ ...BASE, personas: 1 });
    const con = calculateLisbonBudget({ ...BASE, personas: 1, atracciones: [extra.id] });
    const tramo = CLASES_ENTRADA[extra.clase];
    const diferencia = {
      min: entradasDe(con).min - entradasDe(sin).min,
      max: entradasDe(con).max - entradasDe(sin).max,
    };
    // Los rangos se redondean hacia fuera a múltiplos de 5, así que la
    // diferencia no es el tramo exacto pero nunca puede quedarse corta.
    assert.ok(
      diferencia.min <= tramo.min && diferencia.max >= tramo.max,
      `${extra.id}: diferencia ${diferencia.min}–${diferencia.max} no cubre el tramo ${tramo.min}–${tramo.max}`
    );
  }
});

test('J · las actividades adicionales de Lisboa no activan logística de Sintra', () => {
  const extras = ATRACCIONES.filter((a) => !a.destacada).map((a) => a.id);
  const r = calculateLisbonBudget({ ...BASE, atracciones: extras });
  assert.equal(excursionDe(r), null, 'no debería aparecer la partida de excursión');
});

test('K · Sintra sigue sin doble conteo con el catálogo ampliado', () => {
  const extras = ATRACCIONES.filter((a) => !a.destacada).map((a) => a.id);

  // La excursión cuenta logística; las entradas de Sintra van aparte.
  const soloExcursion = calculateLisbonBudget({ ...BASE, excursionSintra: true });
  const conEntrada = calculateLisbonBudget({
    ...BASE,
    excursionSintra: true,
    atracciones: ['palacio-pena'],
  });
  assert.deepEqual(
    excursionDe(conEntrada),
    excursionDe(soloExcursion),
    'marcar una entrada de Sintra ha movido la logística'
  );

  // Y añadir actividades de Lisboa tampoco la toca.
  const conExtras = calculateLisbonBudget({
    ...BASE,
    excursionSintra: true,
    atracciones: [...extras, 'palacio-pena'],
  });
  assert.deepEqual(
    excursionDe(conExtras),
    excursionDe(soloExcursion),
    'las actividades adicionales han movido la logística de Sintra'
  );
});

test('L · las actividades desconocidas se siguen ignorando sin romper nada', () => {
  const r = calculateLisbonBudget({ ...BASE, atracciones: ['no-existe', 'crucero-tajo'] });
  assert.equal(r.atraccionesSeleccionadas.length, 1);
  assert.equal(r.atraccionesSeleccionadas[0].id, 'crucero-tajo');
});

test('M · las actividades con producto apuntan a uno que existe de verdad', async () => {
  const { findProductById } = await import('../src/data/bookings.ts');
  for (const a of ATRACCIONES) {
    if (!a.bookingProductId) continue;
    assert.ok(
      findProductById(a.bookingProductId),
      `${a.id} apunta a un producto inexistente: ${a.bookingProductId}`
    );
  }
});

test('N · ninguna actividad escribe una URL ni un id de partner', () => {
  const texto = JSON.stringify(ATRACCIONES);
  assert.ok(!/https?:\/\//.test(texto), 'hay una URL en el catálogo');
  assert.ok(!/partner|affiliate|J2Z24GU|estaba_en_lisboa-/i.test(texto), 'hay un id de partner');
});

test('O · `getAtraccion` encuentra las nuevas', () => {
  for (const a of ATRACCIONES.filter((x) => !x.destacada)) {
    assert.equal(getAtraccion(a.id)?.id, a.id);
  }
  assert.equal(getAtraccion('inventada'), undefined);
});

console.log(`\n${total - fallos}/${total} pruebas OK.`);
if (fallos > 0) {
  console.log(`${fallos} pruebas fallaron.`);
  process.exitCode = 1;
}
