#!/usr/bin/env node
/**
 * Pruebas de las decisiones de UX de la calculadora.
 *
 * Aquí no se comprueba aritmética —de eso ya se ocupan las otras cuatro
 * suites— sino las reglas de comportamiento que hacen que la herramienta se
 * entienda: cómo se acoplan días y noches, qué pasa cuando alguien elige
 * «Importe propio» y todavía no ha escrito nada, y que el gasto en destino
 * recomendado se pueda reconstruir desde las mismas categorías.
 *
 * La lógica de días/noches vive en la página, que es un componente cliente y
 * no se puede cargar en Node. Se replica aquí la regla exacta —tres líneas— y
 * se comprueba contra ella; el smoke verifica aparte que la página servida
 * arranca en 3 días y 2 noches, que es el ancla que ataría cualquier
 * divergencia.
 */

import assert from 'node:assert/strict';
import { calculateLisbonBudget, normalizarImporte } from '../src/lib/budget-calculator.ts';
import { getRecommendedBudget } from '../src/lib/budget-recommended.ts';

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

const importeDe = (rec, id) => rec.categorias.find((c) => c.id === id)?.importe ?? 0;

const recomendar = (input) => getRecommendedBudget(input, calculateLisbonBudget(input));

/* ------------------------------------------------- días y noches ---------- */

/**
 * La regla de la página: mientras nadie toque las noches, siguen a los días
 * una por debajo; en cuanto se tocan, quedan libres. Réplica exacta de
 * `cambiarDias` / `cambiarNoches`.
 */
function viajeInicial() {
  return { dias: 3, noches: 2, nochesTocadas: false };
}

function cambiarDias(estado, nuevos) {
  return {
    ...estado,
    dias: nuevos,
    noches: estado.nochesTocadas ? estado.noches : Math.max(0, nuevos - 1),
  };
}

function cambiarNoches(estado, nuevas) {
  return { ...estado, noches: nuevas, nochesTocadas: true };
}

test('A · arranca en 3 días y 2 noches', () => {
  const estado = viajeInicial();
  assert.equal(estado.dias, 3);
  assert.equal(estado.noches, 2);
  assert.equal(estado.nochesTocadas, false);
});

test('B · sin tocar las noches, siguen a los días una por debajo', () => {
  let estado = viajeInicial();
  for (const [dias, esperadas] of [
    [4, 3],
    [7, 6],
    [1, 0],
    [14, 13],
    [2, 1],
  ]) {
    estado = cambiarDias(estado, dias);
    assert.equal(estado.noches, esperadas, `${dias} días deberían sugerir ${esperadas} noches`);
  }
});

test('C · después de tocar las noches, quedan independientes', () => {
  let estado = viajeInicial();
  estado = cambiarNoches(estado, 3); // 3 días, 3 noches: viaje real y posible
  assert.equal(estado.noches, 3);

  estado = cambiarDias(estado, 5);
  assert.equal(estado.noches, 3, 'las noches no deberían moverse ya');

  estado = cambiarDias(estado, 2);
  assert.equal(estado.noches, 3, 'siguen siendo del usuario');
});

test('C2 · las noches nunca bajan de cero al reducir los días', () => {
  const estado = cambiarDias(viajeInicial(), 1);
  assert.equal(estado.noches, 0);
  assert.ok(estado.noches >= 0);
});

/* ------------------------------------------- alojamiento propio ----------- */

/**
 * Réplica de la decisión de la página: «Importe propio» seleccionado pero el
 * campo todavía vacío NO se convierte en 0 €; se sigue usando la estimación.
 * Un cero escrito a mano sí es un dato válido.
 */
function alojamientoEfectivo(modo, texto, nivel) {
  return modo === 'propio' && texto.trim() !== ''
    ? { modo: 'propio', total: normalizarImporte(texto) }
    : { modo: 'estimado', nivel };
}

test('D · «Importe propio» vacío NO convierte el alojamiento en 0 €', () => {
  const estimado = recomendar(BASE);
  const conPropioVacio = recomendar({
    ...BASE,
    alojamiento: alojamientoEfectivo('propio', '', 'intermedio'),
  });

  assert.equal(
    importeDe(conPropioVacio, 'alojamiento'),
    importeDe(estimado, 'alojamiento'),
    'debería seguir usando la estimación mientras no haya importe'
  );
  assert.ok(importeDe(conPropioVacio, 'alojamiento') > 0, 'el alojamiento no puede ser 0 €');
  assert.equal(conPropioVacio.total, estimado.total, 'el total no debería moverse');

  // Y con espacios sueltos tampoco.
  const conEspacios = recomendar({
    ...BASE,
    alojamiento: alojamientoEfectivo('propio', '   ', 'intermedio'),
  });
  assert.equal(conEspacios.total, estimado.total);
});

test('D2 · el fallo que esto corrige: contar 0 € hundía el presupuesto', () => {
  // Cómo se comportaba antes: `normalizarImporte('')` es 0 y entraba como dato.
  const comoAntes = recomendar({ ...BASE, alojamiento: { modo: 'propio', total: 0 } });
  const estimado = recomendar(BASE);
  assert.ok(
    comoAntes.total < estimado.total,
    'el escenario del fallo debería seguir siendo detectable'
  );
  // Lo que importa: la ruta de la interfaz ya no llega ahí con el campo vacío.
  const ahora = recomendar({
    ...BASE,
    alojamiento: alojamientoEfectivo('propio', '', 'intermedio'),
  });
  assert.equal(ahora.total, estimado.total);
});

test('E · un importe propio mayor que cero entra exacto', () => {
  for (const texto of ['520', '187', '1', '  640  ']) {
    const rec = recomendar({
      ...BASE,
      alojamiento: alojamientoEfectivo('propio', texto, 'intermedio'),
    });
    assert.equal(importeDe(rec, 'alojamiento'), Number(texto.trim()));
  }
});

test('E2 · un cero escrito a mano sí es un dato válido', () => {
  // Quien duerme en casa de alguien paga cero, y eso es legítimo.
  const rec = recomendar({
    ...BASE,
    alojamiento: alojamientoEfectivo('propio', '0', 'intermedio'),
  });
  assert.equal(importeDe(rec, 'alojamiento'), 0);
});

/* ------------------------------------------- gasto en destino ------------- */

test('F · el gasto recomendado en destino suma sus categorías', () => {
  const escenarios = [
    BASE,
    { ...BASE, atracciones: ['castelo-sao-jorge', 'oceanario'] },
    { ...BASE, excursionSintra: true, atracciones: ['palacio-pena'] },
    { ...BASE, alojamiento: { modo: 'propio', total: 520 }, vuelosTotal: 340 },
  ];
  for (const input of escenarios) {
    const rec = recomendar(input);
    const esperado =
      importeDe(rec, 'comida') +
      importeDe(rec, 'transporte') +
      importeDe(rec, 'atracciones') +
      importeDe(rec, 'excursion');
    assert.equal(rec.enDestino, esperado, 'no coincide con la suma de sus partidas');
  }
});

test('F2 · el gasto en destino excluye alojamiento y vuelos', () => {
  const rec = recomendar({
    ...BASE,
    alojamiento: { modo: 'propio', total: 520 },
    vuelosTotal: 340,
  });
  assert.ok(rec.enDestino < rec.total, 'debería ser menor que el total');
  assert.equal(
    rec.total - rec.redondeo - rec.enDestino,
    importeDe(rec, 'alojamiento') + importeDe(rec, 'vuelos'),
    'la diferencia debería ser exactamente alojamiento más vuelos'
  );
});

test('F3 · el gasto en destino cae dentro de su propio rango', () => {
  for (const input of [BASE, { ...BASE, dias: 7, personas: 4, excursionSintra: true }]) {
    const rec = recomendar(input);
    assert.ok(
      rec.enDestino >= rec.rangoEnDestino.min && rec.enDestino <= rec.rangoEnDestino.max,
      `${rec.enDestino} fuera de ${rec.rangoEnDestino.min}–${rec.rangoEnDestino.max}`
    );
  }
});

/* --------------------------------------------------- Sintra --------------- */

test('J · Sintra conserva exactamente la aritmética anterior', () => {
  const sinNada = recomendar(BASE);
  const soloExcursion = recomendar({ ...BASE, excursionSintra: true });
  const conEntrada = recomendar({
    ...BASE,
    excursionSintra: true,
    atracciones: ['palacio-pena'],
  });

  assert.equal(importeDe(sinNada, 'excursion'), 0, 'sin marcar no hay logística');
  assert.ok(importeDe(soloExcursion, 'excursion') > 0, 'marcada debe sumar logística');
  assert.equal(
    importeDe(conEntrada, 'excursion'),
    importeDe(soloExcursion, 'excursion'),
    'marcar una entrada de Sintra no puede mover la logística'
  );
  assert.equal(
    importeDe(soloExcursion, 'atracciones'),
    0,
    'la excursión no trae entradas consigo'
  );

  // Y el rango del motor tampoco cambia. El valor sale de ejecutar el motor
  // tal y como estaba en el commit 3177285, no de estimarlo.
  assert.deepEqual(
    calculateLisbonBudget({ ...BASE, excursionSintra: true }).total,
    { min: 410, max: 745 },
    'el rango con Sintra ha cambiado respecto a FASE 10/11'
  );
});

console.log(`\n${total - fallos}/${total} pruebas OK.`);
if (fallos > 0) {
  console.log(`${fallos} pruebas fallaron.`);
  process.exitCode = 1;
}
