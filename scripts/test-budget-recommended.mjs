#!/usr/bin/env node
/**
 * Pruebas de la cifra recomendada.
 *
 * Lo que se defiende aquí es que la cifra sea **defendible**: que caiga dentro
 * del rango que el motor ya publicó, que se pueda reconstruir sumando el
 * desglose, que respete al euro lo que el usuario introdujo, y que no mueva ni
 * un céntimo de los rangos de FASE 10.
 *
 * La prueba N es la que importa a largo plazo: comprueba que añadir esta capa
 * no ha tocado el motor. Los números son los que devolvía `calculateLisbonBudget`
 * en el commit 3177285, obtenidos ejecutando aquella versión, no estimados.
 */

import assert from 'node:assert/strict';
import {
  ATRACCIONES,
  CLASES_ENTRADA,
  calculateLisbonBudget,
} from '../src/lib/budget-calculator.ts';
import {
  FRACCION_RECOMENDADA,
  getRecommendedBudget,
  puntoRecomendado,
  recomendadoEntrada,
} from '../src/lib/budget-recommended.ts';

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

/** Atajo: calcula y recomienda de una vez. */
function recomendar(input) {
  const result = calculateLisbonBudget(input);
  return { result, rec: getRecommendedBudget(input, result) };
}

const importeDe = (rec, id) => rec.categorias.find((c) => c.id === id)?.importe ?? 0;

// ------------------------------------------------------- determinismo -----

test('A · mismo input devuelve exactamente la misma recomendación', () => {
  const escenarios = [
    BASE,
    { ...BASE, atracciones: ['castelo-sao-jorge', 'oceanario'], excursionSintra: true },
    { ...BASE, alojamiento: { modo: 'propio', total: 520 }, vuelosTotal: 340 },
  ];
  for (const input of escenarios) {
    const a = recomendar(input).rec;
    const b = recomendar(input).rec;
    assert.deepEqual(a, b, 'dos ejecuciones han dado resultados distintos');
  }
});

test('B · la cifra recomendada cae dentro del rango del motor', () => {
  const niveles = ['economico', 'intermedio', 'superior'];
  const comidas = ['ahorro', 'mixto', 'restaurantes'];
  const transportes = ['a-pie', 'publico', 'publico-taxi'];
  let comprobados = 0;

  for (const nivel of niveles) {
    for (const comida of comidas) {
      for (const transporte of transportes) {
        for (const personas of [1, 2, 5, 8]) {
          for (const dias of [1, 3, 7, 14]) {
            const input = {
              ...BASE,
              dias,
              noches: Math.max(0, dias - 1),
              personas,
              alojamiento: { modo: 'estimado', nivel },
              comida,
              transporte,
              atracciones: ATRACCIONES.map((a) => a.id),
              excursionSintra: true,
            };
            const { rec } = recomendar(input);
            assert.ok(
              rec.total >= rec.rango.min && rec.total <= rec.rango.max,
              `${rec.total} € fuera de ${rec.rango.min}–${rec.rango.max} (${nivel}/${comida}/${transporte}, ${personas}p, ${dias}d)`
            );
            comprobados++;
          }
        }
      }
    }
  }
  assert.ok(comprobados >= 400, `sólo se han comprobado ${comprobados} combinaciones`);
});

test('B2 · cada categoría estimada también cae dentro de su propio rango', () => {
  const { rec } = recomendar({
    ...BASE,
    atracciones: ['castelo-sao-jorge', 'maat', 'palacio-pena'],
    excursionSintra: true,
  });
  for (const categoria of rec.categorias) {
    assert.ok(
      categoria.importe >= categoria.rango.min && categoria.importe <= categoria.rango.max,
      `${categoria.label}: ${categoria.importe} € fuera de ${categoria.rango.min}–${categoria.rango.max}`
    );
  }
});

// ------------------------------------------- lo que introduce el usuario ---

test('C · el importe propio de alojamiento se conserva exacto', () => {
  for (const propio of [520, 187, 1, 99_999]) {
    const { rec } = recomendar({ ...BASE, alojamiento: { modo: 'propio', total: propio } });
    assert.equal(
      importeDe(rec, 'alojamiento'),
      propio,
      `${propio} € se ha alterado`
    );
  }
});

test('D · los vuelos introducidos se conservan exactos', () => {
  for (const vuelos of [340, 137, 2]) {
    const { rec } = recomendar({ ...BASE, vuelosTotal: vuelos });
    assert.equal(importeDe(rec, 'vuelos'), vuelos, `${vuelos} € se ha alterado`);
  }
});

test('D2 · un importe propio no se redondea aunque no sea múltiplo de cinco', () => {
  const { rec } = recomendar({
    ...BASE,
    alojamiento: { modo: 'propio', total: 517 },
    vuelosTotal: 343,
  });
  assert.equal(importeDe(rec, 'alojamiento'), 517);
  assert.equal(importeDe(rec, 'vuelos'), 343);
});

// ------------------------------------------------------------ la suma -----

test('E · el total se reconstruye sumando el desglose', () => {
  const escenarios = [
    BASE,
    { ...BASE, atracciones: ['castelo-sao-jorge', 'oceanario', 'maat'] },
    { ...BASE, alojamiento: { modo: 'propio', total: 517 }, vuelosTotal: 343 },
    { ...BASE, dias: 7, personas: 5, atracciones: ATRACCIONES.map((a) => a.id), excursionSintra: true },
  ];
  for (const input of escenarios) {
    const { rec } = recomendar(input);
    const suma = rec.categorias.reduce((acumulado, c) => acumulado + c.importe, 0);
    assert.equal(suma, rec.sumaCategorias, 'sumaCategorias no coincide con las categorías');
    assert.equal(
      rec.sumaCategorias + rec.redondeo,
      rec.total,
      `${rec.sumaCategorias} + ${rec.redondeo} ≠ ${rec.total}`
    );
    assert.ok(rec.redondeo >= 0 && rec.redondeo < 5, `redondeo fuera de rango: ${rec.redondeo}`);
    assert.equal(rec.total % 5, 0, 'el total debería ser múltiplo de 5');
  }
});

test('F · por persona sale del total y del número de personas', () => {
  for (const personas of [1, 2, 3, 8]) {
    const { rec } = recomendar({ ...BASE, personas });
    assert.equal(rec.porPersona, Math.round(rec.total / personas));
  }
});

test('G · por persona y día sale del total, las personas y los días', () => {
  for (const personas of [1, 2, 4]) {
    for (const dias of [1, 3, 10]) {
      const { rec } = recomendar({ ...BASE, dias, personas });
      assert.equal(rec.porPersonaYDia, Math.round(rec.total / (personas * dias)));
    }
  }
});

// ---------------------------------------------------------- entradas ------

test('H · la entrada de tramo bajo deriva del rango bajo', () => {
  const esperado = Math.round(puntoRecomendado(CLASES_ENTRADA.baja));
  assert.equal(recomendadoEntrada('baja'), esperado);
  assert.ok(
    esperado >= CLASES_ENTRADA.baja.min && esperado <= CLASES_ENTRADA.baja.max,
    'fuera del tramo'
  );
});

test('I · la entrada de tramo medio deriva del rango medio', () => {
  const esperado = Math.round(puntoRecomendado(CLASES_ENTRADA.media));
  assert.equal(recomendadoEntrada('media'), esperado);
  assert.ok(
    esperado >= CLASES_ENTRADA.media.min && esperado <= CLASES_ENTRADA.media.max,
    'fuera del tramo'
  );
});

test('J · la entrada de tramo alto deriva del rango alto', () => {
  const esperado = Math.round(puntoRecomendado(CLASES_ENTRADA.alta));
  assert.equal(recomendadoEntrada('alta'), esperado);
  assert.ok(
    esperado >= CLASES_ENTRADA.alta.min && esperado <= CLASES_ENTRADA.alta.max,
    'fuera del tramo'
  );
});

test('J2 · los tres tramos están ordenados y no se solapan al elegir cifra', () => {
  const baja = recomendadoEntrada('baja');
  const media = recomendadoEntrada('media');
  const alta = recomendadoEntrada('alta');
  assert.ok(baja < media && media < alta, `${baja} / ${media} / ${alta} no van de menos a más`);
});

test('J3 · la fracción es la declarada y no un número escondido', () => {
  assert.equal(FRACCION_RECOMENDADA, 0.625);
  assert.equal(puntoRecomendado({ min: 0, max: 100 }), 62.5);
  assert.equal(puntoRecomendado({ min: 40, max: 40 }), 40, 'un rango sin recorrido devuelve el punto');
});

test('K · el subtotal de una entrada se multiplica por las personas', () => {
  for (const personas of [1, 2, 5, 8]) {
    const { rec } = recomendar({ ...BASE, personas, atracciones: ['castelo-sao-jorge'] });
    const linea = rec.entradas[0];
    assert.equal(linea.personas, personas);
    assert.equal(linea.subtotal, linea.porPersona * personas);
    assert.equal(importeDe(rec, 'atracciones'), linea.subtotal);
  }
});

test('K2 · las líneas de entradas suman exactamente la categoría', () => {
  const { rec } = recomendar({
    ...BASE,
    personas: 3,
    atracciones: ['castelo-sao-jorge', 'maat', 'oceanario', 'palacio-pena'],
  });
  const suma = rec.entradas.reduce((acumulado, linea) => acumulado + linea.subtotal, 0);
  assert.equal(rec.entradas.length, 4);
  assert.equal(
    suma,
    importeDe(rec, 'atracciones'),
    `las líneas suman ${suma} y la categoría dice ${importeDe(rec, 'atracciones')}`
  );
});

test('L · quitar una actividad baja el total exactamente su subtotal', () => {
  const con = recomendar({ ...BASE, atracciones: ['castelo-sao-jorge', 'oceanario'] });
  const sin = recomendar({ ...BASE, atracciones: ['castelo-sao-jorge'] });

  const quitada = con.rec.entradas.find((l) => l.atraccion.id === 'oceanario');
  assert.equal(
    importeDe(con.rec, 'atracciones') - importeDe(sin.rec, 'atracciones'),
    quitada.subtotal,
    'la categoría no ha bajado el subtotal exacto'
  );

  // Y volver a ponerla devuelve el mismo resultado que antes.
  const otraVez = recomendar({ ...BASE, atracciones: ['castelo-sao-jorge', 'oceanario'] });
  assert.deepEqual(otraVez.rec, con.rec);
});

test('M · Sintra no cuenta las entradas dos veces', () => {
  const soloExcursion = recomendar({ ...BASE, excursionSintra: true }).rec;
  const conEntrada = recomendar({
    ...BASE,
    excursionSintra: true,
    atracciones: ['palacio-pena'],
  }).rec;

  assert.equal(
    importeDe(conEntrada, 'excursion'),
    importeDe(soloExcursion, 'excursion'),
    'marcar una entrada de Sintra ha movido la logística'
  );
  assert.equal(importeDe(soloExcursion, 'atracciones'), 0, 'la excursión no debe traer entradas');
  assert.equal(conEntrada.entradas.length, 1);
  assert.equal(
    importeDe(conEntrada, 'atracciones'),
    recomendadoEntrada('alta') * BASE.personas
  );
});

// ------------------------------------------------------- no tocar FASE 10 --

test('N · los rangos de FASE 10 siguen exactamente iguales', () => {
  /*
   * Valores del commit 3177285, obtenidos ejecutando aquella versión del
   * motor. Esta capa no debe moverlos ni un euro: si algún día alguien
   * «ajusta» el motor para que la cifra recomendada quede más redonda, esto
   * salta con la diferencia exacta.
   */
  const REFERENCIA = [
    {
      nombre: 'mínimo',
      input: { ...BASE, dias: 1, noches: 0, personas: 1, alojamiento: { modo: 'estimado', nivel: 'economico' }, comida: 'ahorro', transporte: 'a-pie' },
      total: { min: 15, max: 35 },
      porPersonaYDia: { min: 15, max: 34 },
    },
    {
      nombre: 'típico',
      input: { ...BASE, atracciones: ['castelo-sao-jorge', 'mosteiro-jeronimos'] },
      total: { min: 430, max: 760 },
      porPersonaYDia: { min: 72, max: 127 },
    },
    {
      nombre: 'con Sintra',
      input: { ...BASE, dias: 4, noches: 3, atracciones: ['palacio-pena', 'quinta-regaleira'], excursionSintra: true },
      total: { min: 635, max: 1140 },
      porPersonaYDia: { min: 79, max: 143 },
    },
    {
      nombre: 'importe propio y vuelos',
      input: { ...BASE, dias: 5, noches: 4, personas: 3, alojamiento: { modo: 'propio', total: 520 }, comida: 'restaurantes', transporte: 'publico-taxi', atracciones: ['oceanario'], vuelosTotal: 340 },
      total: { min: 1960, max: 2795 },
      porPersonaYDia: { min: 130, max: 187 },
    },
  ];

  for (const caso of REFERENCIA) {
    const result = calculateLisbonBudget(caso.input);
    assert.deepEqual(result.total, caso.total, `«${caso.nombre}» · total`);
    assert.deepEqual(result.porPersonaYDia, caso.porPersonaYDia, `«${caso.nombre}» · por persona y día`);

    // Y la capa recomendada expone ese mismo rango sin retocarlo.
    const rec = getRecommendedBudget(caso.input, result);
    assert.deepEqual(rec.rango, result.total, `«${caso.nombre}» · el rango publicado ha cambiado`);
  }
});

test('N2 · la capa recomendada no muta el resultado del motor', () => {
  const input = { ...BASE, atracciones: ['castelo-sao-jorge'], excursionSintra: true };
  const result = calculateLisbonBudget(input);
  const copia = structuredClone(result);
  getRecommendedBudget(input, result);
  assert.deepEqual(result, copia, 'getRecommendedBudget ha modificado el BudgetResult');
});

console.log(`\n${total - fallos}/${total} pruebas OK.`);
if (fallos > 0) {
  console.log(`${fallos} pruebas fallaron.`);
  process.exitCode = 1;
}
