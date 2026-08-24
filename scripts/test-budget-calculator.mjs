#!/usr/bin/env node
/**
 * Pruebas de `calculateLisbonBudget`.
 *
 * El proyecto no tiene runner de tests, así que esto es un script de Node sin
 * dependencias, en la misma línea que los smoke tests. Importa el TypeScript
 * directamente: Node 22 le quita los tipos al vuelo y el módulo es puro, sin
 * imports ni alias, precisamente para que esto funcione.
 *
 * Lo que se comprueba es el contrato, no cifras concretas: si mañana se
 * ajusta un rango, estas pruebas deben seguir pasando. Lo que no puede
 * cambiar es que sea determinista, que escale con días y personas, que no
 * cuente dos veces el día de Sintra y que el redondeo nunca estreche el rango.
 */

import assert from 'node:assert/strict';
import {
  BUDGET_ASSUMPTIONS,
  LIMITES,
  NO_INCLUIDO,
  OPCIONES_ALOJAMIENTO,
  OPCIONES_COMIDA,
  OPCIONES_TRANSPORTE,
  OPCIONES_VISITAS,
  calculateLisbonBudget,
  formatRango,
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
  personas: 2,
  alojamiento: 'intermedio',
  comida: 'mixto',
  transporte: 'publico',
  visitas: 'algunas',
  excursionSintra: false,
};

test('es determinista: mismo input, mismo output', () => {
  const a = calculateLisbonBudget(BASE);
  const b = calculateLisbonBudget({ ...BASE });
  assert.deepEqual(a, b);
});

test('el rango nunca está invertido', () => {
  for (const alojamiento of OPCIONES_ALOJAMIENTO) {
    for (const comida of OPCIONES_COMIDA) {
      for (const transporte of OPCIONES_TRANSPORTE) {
        for (const visitas of OPCIONES_VISITAS) {
          for (const sintra of [false, true]) {
            const r = calculateLisbonBudget({
              dias: 4,
              personas: 2,
              alojamiento: alojamiento.id,
              comida: comida.id,
              transporte: transporte.id,
              visitas: visitas.id,
              excursionSintra: sintra,
            });
            assert.ok(r.total.min <= r.total.max, 'total invertido');
            assert.ok(r.porPersona.min <= r.porPersona.max, 'por persona invertido');
            assert.ok(
              r.porPersonaYDia.min <= r.porPersonaYDia.max,
              'por persona y día invertido'
            );
            for (const c of r.categorias) {
              assert.ok(c.rango.min <= c.rango.max, `categoría ${c.id} invertida`);
              assert.ok(c.rango.min >= 0, `categoría ${c.id} negativa`);
            }
          }
        }
      }
    }
  }
});

test('nunca devuelve un resultado exacto disfrazado de rango', () => {
  const r = calculateLisbonBudget(BASE);
  assert.ok(r.total.max > r.total.min, 'el total debería ser un rango, no un número');
});

test('cuenta una noche menos que días', () => {
  assert.equal(calculateLisbonBudget({ ...BASE, dias: 1 }).noches, 0);
  assert.equal(calculateLisbonBudget({ ...BASE, dias: 3 }).noches, 2);
  assert.equal(calculateLisbonBudget({ ...BASE, dias: 7 }).noches, 6);
});

test('un solo día no suma alojamiento', () => {
  const r = calculateLisbonBudget({ ...BASE, dias: 1 });
  const alojamiento = r.categorias.find((c) => c.id === 'alojamiento');
  assert.deepEqual(alojamiento.rango, { min: 0, max: 0 });
});

test('cuenta dos personas por habitación', () => {
  assert.equal(calculateLisbonBudget({ ...BASE, personas: 1 }).habitaciones, 1);
  assert.equal(calculateLisbonBudget({ ...BASE, personas: 2 }).habitaciones, 1);
  assert.equal(calculateLisbonBudget({ ...BASE, personas: 3 }).habitaciones, 2);
  assert.equal(calculateLisbonBudget({ ...BASE, personas: 4 }).habitaciones, 2);
  assert.equal(calculateLisbonBudget({ ...BASE, personas: 5 }).habitaciones, 3);
});

test('viajar solo sale más caro por persona que en pareja', () => {
  const solo = calculateLisbonBudget({ ...BASE, personas: 1 });
  const pareja = calculateLisbonBudget({ ...BASE, personas: 2 });
  assert.ok(
    solo.porPersona.min > pareja.porPersona.min,
    'la habitación entera debería encarecer el viaje individual'
  );
});

test('más días cuesta más', () => {
  const corto = calculateLisbonBudget({ ...BASE, dias: 2 });
  const largo = calculateLisbonBudget({ ...BASE, dias: 5 });
  assert.ok(largo.total.min > corto.total.min);
  assert.ok(largo.total.max > corto.total.max);
});

test('más personas cuesta más en total', () => {
  const dos = calculateLisbonBudget({ ...BASE, personas: 2 });
  const cuatro = calculateLisbonBudget({ ...BASE, personas: 4 });
  assert.ok(cuatro.total.min > dos.total.min);
});

test('subir de categoría de alojamiento sube el total', () => {
  const eco = calculateLisbonBudget({ ...BASE, alojamiento: 'economico' });
  const medio = calculateLisbonBudget({ ...BASE, alojamiento: 'intermedio' });
  const alto = calculateLisbonBudget({ ...BASE, alojamiento: 'superior' });
  assert.ok(eco.total.min < medio.total.min);
  assert.ok(medio.total.min < alto.total.min);
});

test('subir de nivel de comida sube el total', () => {
  const a = calculateLisbonBudget({ ...BASE, comida: 'ahorro' });
  const b = calculateLisbonBudget({ ...BASE, comida: 'mixto' });
  const c = calculateLisbonBudget({ ...BASE, comida: 'restaurantes' });
  assert.ok(a.total.min < b.total.min);
  assert.ok(b.total.min < c.total.min);
});

test('Sintra añade una categoría propia', () => {
  const sin = calculateLisbonBudget({ ...BASE, excursionSintra: false });
  const con = calculateLisbonBudget({ ...BASE, excursionSintra: true });
  assert.equal(sin.categorias.some((c) => c.id === 'excursion'), false);
  assert.equal(con.categorias.some((c) => c.id === 'excursion'), true);
});

test('Sintra no cuenta dos veces las visitas de ese día', () => {
  const sin = calculateLisbonBudget({ ...BASE, excursionSintra: false });
  const con = calculateLisbonBudget({ ...BASE, excursionSintra: true });
  const visitasSin = sin.categorias.find((c) => c.id === 'visitas').rango;
  const visitasCon = con.categorias.find((c) => c.id === 'visitas').rango;
  assert.ok(
    visitasCon.max < visitasSin.max,
    'el día de Sintra debería salir del cómputo de visitas en Lisboa'
  );
});

test('con un solo día, Sintra deja las visitas de Lisboa a cero', () => {
  const r = calculateLisbonBudget({ ...BASE, dias: 1, excursionSintra: true });
  const visitas = r.categorias.find((c) => c.id === 'visitas');
  assert.deepEqual(visitas.rango, { min: 0, max: 0 });
});

test('recorta días y personas fuera de rango en lugar de fallar', () => {
  assert.equal(calculateLisbonBudget({ ...BASE, dias: 0 }).dias, LIMITES.diasMin);
  assert.equal(calculateLisbonBudget({ ...BASE, dias: 999 }).dias, LIMITES.diasMax);
  assert.equal(calculateLisbonBudget({ ...BASE, personas: -4 }).personas, LIMITES.personasMin);
  assert.equal(calculateLisbonBudget({ ...BASE, personas: 99 }).personas, LIMITES.personasMax);
});

test('sobrevive a valores no numéricos', () => {
  const r = calculateLisbonBudget({ ...BASE, dias: Number.NaN, personas: Number.NaN });
  assert.equal(r.dias, LIMITES.diasMin);
  assert.equal(r.personas, LIMITES.personasMin);
  assert.ok(Number.isFinite(r.total.min) && Number.isFinite(r.total.max));
});

test('falla de forma explícita ante una opción desconocida', () => {
  assert.throws(
    () => calculateLisbonBudget({ ...BASE, comida: 'gourmet-espacial' }),
    /desconocida/
  );
});

test('el redondeo va hacia fuera, nunca estrecha el rango', () => {
  const r = calculateLisbonBudget(BASE);
  assert.equal(r.total.min % 5, 0);
  assert.equal(r.total.max % 5, 0);
  const suma = r.categorias.reduce(
    (acc, c) => ({ min: acc.min + c.rango.min, max: acc.max + c.rango.max }),
    { min: 0, max: 0 }
  );
  // Cada categoría se redondea por separado, así que su suma no tiene por qué
  // coincidir con el total; lo que no puede pasar es que el total sea más
  // estrecho que la realidad por ambos lados a la vez.
  assert.ok(r.total.max >= suma.max - 5 * r.categorias.length);
});

test('los totales derivados son coherentes entre sí', () => {
  const r = calculateLisbonBudget({ ...BASE, dias: 4, personas: 2 });
  // Margen de 5 € por el redondeo hacia fuera de cada magnitud.
  assert.ok(Math.abs(r.porPersona.min * r.personas - r.total.min) <= 10);
  assert.ok(Math.abs(r.porPersonaYDia.min * r.personas * r.dias - r.total.min) <= 20);
});

test('formatRango escribe un rango legible', () => {
  assert.equal(formatRango({ min: 120, max: 240 }), '120 – 240 €');
  assert.equal(formatRango({ min: 0, max: 0 }), '0 €');
});

test('se publican las reglas y lo que no se incluye', () => {
  assert.ok(BUDGET_ASSUMPTIONS.length >= 5);
  assert.ok(NO_INCLUIDO.length >= 4);
  assert.ok(BUDGET_ASSUMPTIONS.every((t) => typeof t === 'string' && t.length > 20));
});

test('ninguna etiqueta promete exactitud', () => {
  const textos = [...BUDGET_ASSUMPTIONS, ...NO_INCLUIDO].join(' ').toLowerCase();
  for (const palabra of ['exacto', 'exacta', 'precio final', 'garantiza']) {
    assert.ok(!textos.includes(palabra), `no debería aparecer «${palabra}»`);
  }
});

console.log(`\n${total - fallos}/${total} pruebas OK.`);
if (fallos > 0) {
  console.log(`${fallos} pruebas fallaron.`);
  process.exitCode = 1;
}
