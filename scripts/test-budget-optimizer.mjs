#!/usr/bin/env node
/**
 * Pruebas de `generarSugerencias`.
 *
 * Mismo patrón que `test-budget-calculator.mjs`: Node sin dependencias,
 * cargando el TypeScript directamente.
 *
 * Lo que se comprueba es el contrato, no cifras: si mañana se ajusta un rango
 * del motor, estas pruebas deben seguir pasando. Lo que no puede cambiar es
 * que cada sugerencia baje de escalón, que no toque un dato del usuario, que
 * el impacto sea una resta real entre dos llamadas al motor, y que nunca
 * aparezca un ahorro negativo, NaN ni Infinity.
 */

import assert from 'node:assert/strict';
import { calculateLisbonBudget } from '../src/lib/budget-calculator.ts';
import { formatImpacto, generarSugerencias } from '../src/lib/budget-optimizer.ts';

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

const conAlojamiento = (nivel) => ({
  ...BASE,
  alojamiento: { modo: 'estimado', nivel },
});
const buscar = (sugerencias, tipo) => sugerencias.find((s) => s.tipo === tipo);

// ------------------------------------------------------------- alojamiento

test('Superior -> Intermedio genera una sugerencia con ahorro > 0', () => {
  const s = buscar(generarSugerencias(conAlojamiento('superior')), 'alojamiento');
  assert.ok(s, 'debería haber sugerencia de alojamiento');
  assert.equal(s.nuevoInput.alojamiento.nivel, 'intermedio');
  assert.ok(s.impacto.min > 0 && s.impacto.max > 0);
});

test('Intermedio -> Económico genera una sugerencia con ahorro > 0', () => {
  const s = buscar(generarSugerencias(conAlojamiento('intermedio')), 'alojamiento');
  assert.ok(s, 'debería haber sugerencia de alojamiento');
  assert.equal(s.nuevoInput.alojamiento.nivel, 'economico');
  assert.ok(s.impacto.min > 0 && s.impacto.max > 0);
});

test('Económico no genera sugerencia de alojamiento', () => {
  assert.equal(buscar(generarSugerencias(conAlojamiento('economico')), 'alojamiento'), undefined);
});

test('Importe propio no genera sugerencia de alojamiento', () => {
  const sugerencias = generarSugerencias({
    ...BASE,
    alojamiento: { modo: 'propio', total: 620 },
  });
  assert.equal(buscar(sugerencias, 'alojamiento'), undefined);
  // Y el dato del usuario sigue intacto en las que sí se generan.
  for (const s of sugerencias) {
    assert.equal(s.nuevoInput.alojamiento.modo, 'propio');
    assert.equal(s.nuevoInput.alojamiento.total, 620);
  }
});

test('con 0 noches el alojamiento no genera sugerencia: no movería nada', () => {
  const sugerencias = generarSugerencias({ ...conAlojamiento('superior'), noches: 0 });
  assert.equal(buscar(sugerencias, 'alojamiento'), undefined);
});

// ------------------------------------------------------------------ comida

test('Restaurantes -> Mixto', () => {
  const s = buscar(generarSugerencias({ ...BASE, comida: 'restaurantes' }), 'comida');
  assert.ok(s);
  assert.equal(s.nuevoInput.comida, 'mixto');
  assert.ok(s.impacto.max > 0);
});

test('Mixto -> Al ahorro', () => {
  const s = buscar(generarSugerencias({ ...BASE, comida: 'mixto' }), 'comida');
  assert.ok(s);
  assert.equal(s.nuevoInput.comida, 'ahorro');
  assert.ok(s.impacto.max > 0);
});

test('Al ahorro no genera sugerencia de comida', () => {
  assert.equal(buscar(generarSugerencias({ ...BASE, comida: 'ahorro' }), 'comida'), undefined);
});

// -------------------------------------------------------------- transporte

test('Público y taxi -> Transporte público', () => {
  const s = buscar(generarSugerencias({ ...BASE, transporte: 'publico-taxi' }), 'transporte');
  assert.ok(s);
  assert.equal(s.nuevoInput.transporte, 'publico');
  assert.ok(s.impacto.max > 0);
});

test('Transporte público -> Casi todo a pie', () => {
  const s = buscar(generarSugerencias({ ...BASE, transporte: 'publico' }), 'transporte');
  assert.ok(s);
  assert.equal(s.nuevoInput.transporte, 'a-pie');
  assert.ok(s.impacto.max > 0);
});

test('Casi todo a pie no genera sugerencia de transporte', () => {
  assert.equal(buscar(generarSugerencias({ ...BASE, transporte: 'a-pie' }), 'transporte'), undefined);
});

// -------------------------------------------------------------- el conjunto

test('el impacto es la resta real entre dos llamadas al motor', () => {
  for (const s of generarSugerencias({
    ...conAlojamiento('superior'),
    comida: 'restaurantes',
    transporte: 'publico-taxi',
  })) {
    const actual = calculateLisbonBudget({
      ...conAlojamiento('superior'),
      comida: 'restaurantes',
      transporte: 'publico-taxi',
    });
    const alternativo = calculateLisbonBudget(s.nuevoInput);
    const esperadoMin = Math.min(
      actual.total.min - alternativo.total.min,
      actual.total.max - alternativo.total.max
    );
    const esperadoMax = Math.max(
      actual.total.min - alternativo.total.min,
      actual.total.max - alternativo.total.max
    );
    assert.equal(s.impacto.min, Math.max(0, esperadoMin), `${s.id}: mínimo`);
    assert.equal(s.impacto.max, Math.max(0, esperadoMax), `${s.id}: máximo`);
  }
});

test('nunca devuelve más de 3 sugerencias', () => {
  const sugerencias = generarSugerencias({
    ...conAlojamiento('superior'),
    comida: 'restaurantes',
    transporte: 'publico-taxi',
    atracciones: ['castelo-sao-jorge', 'oceanario', 'palacio-pena'],
    excursionSintra: true,
  });
  assert.ok(sugerencias.length <= 3, `${sugerencias.length} sugerencias`);
});

test('van ordenadas de mayor a menor impacto', () => {
  const sugerencias = generarSugerencias({
    ...conAlojamiento('superior'),
    comida: 'restaurantes',
    transporte: 'publico-taxi',
  });
  for (let i = 1; i < sugerencias.length; i++) {
    assert.ok(
      sugerencias[i - 1].impacto.max >= sugerencias[i].impacto.max,
      'orden incorrecto'
    );
  }
});

test('ninguna sugerencia con impacto 0', () => {
  const casos = [
    BASE,
    conAlojamiento('superior'),
    { ...BASE, comida: 'restaurantes', transporte: 'publico-taxi' },
    { ...BASE, noches: 0, dias: 1 },
    { ...BASE, personas: 8, dias: 14, noches: 14 },
  ];
  for (const caso of casos) {
    for (const s of generarSugerencias(caso)) {
      assert.ok(s.impacto.max > 0, `${s.id}: impacto 0 no debería mostrarse`);
    }
  }
});

test('nunca hay impacto negativo, NaN ni Infinity', () => {
  const niveles = ['economico', 'intermedio', 'superior'];
  const comidas = ['ahorro', 'mixto', 'restaurantes'];
  const transportes = ['a-pie', 'publico', 'publico-taxi'];
  for (const nivel of niveles) {
    for (const comida of comidas) {
      for (const transporte of transportes) {
        for (const s of generarSugerencias({
          ...BASE,
          alojamiento: { modo: 'estimado', nivel },
          comida,
          transporte,
        })) {
          assert.ok(Number.isFinite(s.impacto.min), `${s.id}: min no finito`);
          assert.ok(Number.isFinite(s.impacto.max), `${s.id}: max no finito`);
          assert.ok(s.impacto.min >= 0, `${s.id}: min negativo`);
          assert.ok(s.impacto.max >= s.impacto.min, `${s.id}: rango invertido`);
        }
      }
    }
  }
});

test('sobrevive a inputs manipulados', () => {
  for (const malo of [Number.NaN, Number.POSITIVE_INFINITY, -30]) {
    const sugerencias = generarSugerencias({
      ...conAlojamiento('superior'),
      dias: malo,
      noches: malo,
      personas: malo,
      vuelosTotal: malo,
    });
    for (const s of sugerencias) {
      assert.ok(Number.isFinite(s.impacto.min) && Number.isFinite(s.impacto.max));
      assert.ok(s.impacto.min >= 0);
    }
  }
});

test('es determinista: mismo input, mismas sugerencias y mismo orden', () => {
  const entrada = {
    ...conAlojamiento('superior'),
    comida: 'restaurantes',
    transporte: 'publico-taxi',
  };
  assert.deepEqual(generarSugerencias(entrada), generarSugerencias({ ...entrada }));
});

test('aplicar una sugerencia baja de verdad el total', () => {
  const entrada = conAlojamiento('superior');
  const antes = calculateLisbonBudget(entrada).total;
  for (const s of generarSugerencias(entrada)) {
    const despues = calculateLisbonBudget(s.nuevoInput).total;
    assert.ok(despues.max < antes.max, `${s.id}: el total no baja`);
  }
});

test('una sugerencia sólo cambia su propia categoría', () => {
  const entrada = {
    ...conAlojamiento('superior'),
    comida: 'restaurantes',
    transporte: 'publico-taxi',
    atracciones: ['maat'],
    excursionSintra: true,
    vuelosTotal: 300,
  };
  for (const s of generarSugerencias(entrada)) {
    assert.equal(s.nuevoInput.dias, entrada.dias);
    assert.equal(s.nuevoInput.noches, entrada.noches);
    assert.equal(s.nuevoInput.personas, entrada.personas);
    assert.deepEqual(s.nuevoInput.atracciones, entrada.atracciones);
    assert.equal(s.nuevoInput.excursionSintra, entrada.excursionSintra);
    assert.equal(s.nuevoInput.vuelosTotal, entrada.vuelosTotal);
    if (s.tipo !== 'comida') assert.equal(s.nuevoInput.comida, entrada.comida);
    if (s.tipo !== 'transporte') assert.equal(s.nuevoInput.transporte, entrada.transporte);
  }
});

test('no hay sugerencias sobre las atracciones marcadas', () => {
  const sugerencias = generarSugerencias({
    ...BASE,
    atracciones: ['castelo-sao-jorge', 'oceanario', 'palacio-pena', 'maat'],
  });
  for (const s of sugerencias) {
    assert.ok(['alojamiento', 'comida', 'transporte'].includes(s.tipo), `tipo ${s.tipo}`);
    assert.deepEqual(s.nuevoInput.atracciones, [
      'castelo-sao-jorge',
      'oceanario',
      'palacio-pena',
      'maat',
    ]);
  }
});

test('cada sugerencia tiene título y descripción legibles', () => {
  for (const s of generarSugerencias({
    ...conAlojamiento('superior'),
    comida: 'restaurantes',
    transporte: 'publico-taxi',
  })) {
    assert.ok(s.titulo.length > 10, `${s.id}: título corto`);
    assert.ok(s.descripcion.length > 15, `${s.id}: descripción corta`);
    assert.ok(s.id.length > 0);
  }
});

test('el copy no promete ahorro garantizado', () => {
  const textos = generarSugerencias({
    ...conAlojamiento('superior'),
    comida: 'restaurantes',
    transporte: 'publico-taxi',
  })
    .map((s) => `${s.titulo} ${s.descripcion}`)
    .join(' ')
    .toLowerCase();
  for (const palabra of ['ahorras', 'garantiz', 'mejor precio', 'oferta', 'más barato garantizado']) {
    assert.ok(!textos.includes(palabra), `no debería aparecer «${palabra}»`);
  }
});

test('formatImpacto escribe una reducción legible', () => {
  assert.equal(formatImpacto({ min: 90, max: 140 }), '−90 a −140 €');
  assert.equal(formatImpacto({ min: 40, max: 40 }), '−40 €');
});

console.log(`\n${total - fallos}/${total} pruebas OK.`);
if (fallos > 0) {
  console.log(`${fallos} pruebas fallaron.`);
  process.exitCode = 1;
}
