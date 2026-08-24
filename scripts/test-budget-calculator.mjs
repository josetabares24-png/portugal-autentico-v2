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
 * cambiar es que sea determinista, que escale con días y personas, que las
 * noches NO estén acopladas a los días, que lo que introduce el usuario entre
 * exacto, que Sintra no se cuente dos veces y que el redondeo nunca estreche
 * el rango.
 */

import assert from 'node:assert/strict';
import {
  ATRACCIONES,
  BUDGET_ASSUMPTIONS,
  CLASES_ENTRADA,
  LIMITES,
  NO_INCLUIDO,
  OPCIONES_ALOJAMIENTO,
  OPCIONES_COMIDA,
  OPCIONES_TRANSPORTE,
  calculateLisbonBudget,
  formatRango,
  getAtraccion,
  normalizarImporte,
  rangoDeAtraccion,
} from '../src/lib/budget-calculator.ts';
/*
 * `src/data/bookings.ts` tampoco importa nada, así que Node puede cargarlo
 * igual. Se trae aquí para comprobar que cada `bookingProductId` apunta a un
 * producto que existe y que tiene enlace: es lo único que ata la calculadora
 * con el catálogo comercial, y si se rompe el botón desaparece en silencio.
 */
import { findProductById, resolveBookingLink } from '../src/data/bookings.ts';

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

const categoria = (r, id) => r.categorias.find((c) => c.id === id);

/*
 * Las categorías estimadas salen redondeadas hacia fuera a múltiplos de 5.
 * Para comprobar que un rango configurado llega intacto al resultado hay que
 * aplicarle el mismo redondeo aquí; si el módulo usara otro rango, otra
 * escala o se olvidara de multiplicar por las personas, la comparación
 * seguiría fallando, que es lo que la prueba busca.
 */
function redondeadoHaciaFuera({ min, max }, paso = 5) {
  return { min: Math.floor(min / paso) * paso, max: Math.ceil(max / paso) * paso };
}

// ---------------------------------------------------------------- invariantes

test('es determinista: mismo input, mismo output', () => {
  const a = calculateLisbonBudget(BASE);
  const b = calculateLisbonBudget({ ...BASE });
  assert.deepEqual(a, b);
});

test('el rango nunca está invertido', () => {
  const idsAtracciones = ATRACCIONES.map((a) => a.id);
  for (const alojamiento of OPCIONES_ALOJAMIENTO) {
    for (const comida of OPCIONES_COMIDA) {
      for (const transporte of OPCIONES_TRANSPORTE) {
        for (const atracciones of [[], idsAtracciones.slice(0, 3), idsAtracciones]) {
          for (const sintra of [false, true]) {
            const r = calculateLisbonBudget({
              dias: 4,
              noches: 3,
              personas: 2,
              alojamiento: { modo: 'estimado', nivel: alojamiento.id },
              comida: comida.id,
              transporte: transporte.id,
              atracciones,
              excursionSintra: sintra,
            });
            assert.ok(r.total.min <= r.total.max, 'total invertido');
            assert.ok(r.porPersona.min <= r.porPersona.max, 'por persona invertido');
            assert.ok(r.porPersonaYDia.min <= r.porPersonaYDia.max, 'por persona y día invertido');
            assert.ok(r.sinAlojamiento.min <= r.sinAlojamiento.max, 'sin alojamiento invertido');
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

// ------------------------------------------------------- días, noches, gente

test('D. las noches NO están acopladas a los días', () => {
  const dosNoches = calculateLisbonBudget({ ...BASE, dias: 3, noches: 2 });
  const tresNoches = calculateLisbonBudget({ ...BASE, dias: 3, noches: 3 });
  assert.equal(dosNoches.dias, 3);
  assert.equal(tresNoches.dias, 3);
  assert.equal(tresNoches.noches, 3);
  assert.ok(
    categoria(tresNoches, 'alojamiento').rango.min >
      categoria(dosNoches, 'alojamiento').rango.min,
    'una noche más debería costar más'
  );
  // Comida y transporte dependen de los días, no de las noches: no se mueven.
  assert.deepEqual(
    categoria(tresNoches, 'comida').rango,
    categoria(dosNoches, 'comida').rango
  );
});

test('cero noches no suma alojamiento', () => {
  const r = calculateLisbonBudget({ ...BASE, dias: 1, noches: 0 });
  assert.deepEqual(categoria(r, 'alojamiento').rango, { min: 0, max: 0 });
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
  assert.ok(solo.porPersona.min > pareja.porPersona.min);
});

test('más días cuesta más', () => {
  const corto = calculateLisbonBudget({ ...BASE, dias: 2, noches: 1 });
  const largo = calculateLisbonBudget({ ...BASE, dias: 5, noches: 4 });
  assert.ok(largo.total.min > corto.total.min);
  assert.ok(largo.total.max > corto.total.max);
});

test('más personas cuesta más en total', () => {
  const dos = calculateLisbonBudget({ ...BASE, personas: 2 });
  const cuatro = calculateLisbonBudget({ ...BASE, personas: 4 });
  assert.ok(cuatro.total.min > dos.total.min);
});

test('subir de categoría de alojamiento sube el total', () => {
  const nivel = (id) => calculateLisbonBudget({ ...BASE, alojamiento: { modo: 'estimado', nivel: id } });
  assert.ok(nivel('economico').total.min < nivel('intermedio').total.min);
  assert.ok(nivel('intermedio').total.min < nivel('superior').total.min);
});

test('subir de nivel de comida sube el total', () => {
  const con = (id) => calculateLisbonBudget({ ...BASE, comida: id });
  assert.ok(con('ahorro').total.min < con('mixto').total.min);
  assert.ok(con('mixto').total.min < con('restaurantes').total.min);
});

// ------------------------------------------------------------- atracciones

test('H. marcar una atracción sube el total exactamente por su rango', () => {
  const sin = calculateLisbonBudget({ ...BASE, atracciones: [] });
  for (const atraccion of ATRACCIONES) {
    const con = calculateLisbonBudget({ ...BASE, atracciones: [atraccion.id] });
    const rango = rangoDeAtraccion(atraccion);
    const esperado = redondeadoHaciaFuera({
      min: rango.min * BASE.personas,
      max: rango.max * BASE.personas,
    });
    assert.deepEqual(
      categoria(con, 'atracciones').rango,
      esperado,
      `${atraccion.id}: la categoría no coincide con su rango configurado`
    );
    assert.deepEqual(categoria(sin, 'atracciones').rango, { min: 0, max: 0 });
  }
});

test('las atracciones se suman entre sí, sin descuentos ni topes', () => {
  const ids = ATRACCIONES.map((a) => a.id);
  const r = calculateLisbonBudget({ ...BASE, atracciones: ids });
  const esperado = ATRACCIONES.reduce(
    (acc, a) => {
      const rango = rangoDeAtraccion(a);
      return {
        min: acc.min + rango.min * BASE.personas,
        max: acc.max + rango.max * BASE.personas,
      };
    },
    { min: 0, max: 0 }
  );
  assert.deepEqual(categoria(r, 'atracciones').rango, redondeadoHaciaFuera(esperado));
});

test('una atracción marcada dos veces se cuenta una vez', () => {
  const una = calculateLisbonBudget({ ...BASE, atracciones: ['castelo-sao-jorge'] });
  const repetida = calculateLisbonBudget({
    ...BASE,
    atracciones: ['castelo-sao-jorge', 'castelo-sao-jorge'],
  });
  assert.deepEqual(categoria(repetida, 'atracciones').rango, categoria(una, 'atracciones').rango);
});

test('los ids de atracción desconocidos se ignoran', () => {
  const r = calculateLisbonBudget({ ...BASE, atracciones: ['no-existe', 'maat'] });
  assert.equal(r.atraccionesSeleccionadas.length, 1);
  assert.equal(r.atraccionesSeleccionadas[0].id, 'maat');
});

test('cada atracción tiene clase válida, y sólo enlaza productos con id', () => {
  for (const a of ATRACCIONES) {
    assert.ok(CLASES_ENTRADA[a.clase], `${a.id}: clase desconocida`);
    assert.ok(['lisboa', 'sintra'].includes(a.zona), `${a.id}: zona desconocida`);
    assert.ok(a.nombre && a.desc, `${a.id}: le falta nombre o descripción`);
    if (a.bookingProductId !== undefined) {
      assert.equal(typeof a.bookingProductId, 'string');
      assert.ok(a.bookingProductId.length > 0);
    }
  }
  assert.equal(getAtraccion('maat')?.id, 'maat');
  assert.equal(getAtraccion('no-existe'), undefined);
});

test('cada atracción con producto apunta a uno real y con enlace', () => {
  const conProducto = ATRACCIONES.filter((a) => a.bookingProductId);
  assert.ok(conProducto.length > 0, 'debería haber al menos una atracción con producto');
  for (const atraccion of conProducto) {
    const producto = findProductById(atraccion.bookingProductId);
    assert.ok(producto, `${atraccion.id}: el producto ${atraccion.bookingProductId} no existe`);
    const enlace = resolveBookingLink(producto, 'article');
    assert.ok(enlace, `${atraccion.id}: el producto no tiene ningún enlace`);
    assert.ok(/^https:\/\//.test(enlace.url), `${atraccion.id}: la URL no es https`);
    assert.ok(enlace.campaign.length > 0, `${atraccion.id}: enlace sin campaña`);
  }
});

test('ninguna atracción escribe URLs ni identificadores de partner', () => {
  const texto = JSON.stringify(ATRACCIONES);
  assert.ok(!/https?:\/\//.test(texto), 'hay una URL escrita en el catálogo de atracciones');
  assert.ok(!/partner|gyg\.me|tiqets/i.test(texto), 'hay un rastro de partner en el catálogo');
});

test('las clases de entrada están ordenadas de barata a cara', () => {
  assert.ok(CLASES_ENTRADA.baja.max <= CLASES_ENTRADA.media.max);
  assert.ok(CLASES_ENTRADA.media.max <= CLASES_ENTRADA.alta.max);
});

// ------------------------------------------------------------------ Sintra

test('Sintra añade una categoría propia', () => {
  const sin = calculateLisbonBudget({ ...BASE, excursionSintra: false });
  const con = calculateLisbonBudget({ ...BASE, excursionSintra: true });
  assert.equal(Boolean(categoria(sin, 'excursion')), false);
  assert.equal(Boolean(categoria(con, 'excursion')), true);
});

test('I. Sintra + entradas de Sintra: sin doble conteo', () => {
  const idsSintra = ATRACCIONES.filter((a) => a.zona === 'sintra').map((a) => a.id);
  assert.ok(idsSintra.length >= 2, 'debería haber varias atracciones en Sintra');

  const soloEntradas = calculateLisbonBudget({ ...BASE, atracciones: idsSintra });
  const conExcursion = calculateLisbonBudget({
    ...BASE,
    atracciones: idsSintra,
    excursionSintra: true,
  });
  const soloExcursion = calculateLisbonBudget({ ...BASE, excursionSintra: true });

  // Las entradas valen lo mismo se marque o no la excursión: la excursión sólo
  // cuenta el desplazamiento, así que no puede duplicar ni absorber entradas.
  assert.deepEqual(
    categoria(conExcursion, 'atracciones').rango,
    categoria(soloEntradas, 'atracciones').rango
  );
  // Y la excursión vale lo mismo se marquen o no entradas de Sintra.
  assert.deepEqual(
    categoria(conExcursion, 'excursion').rango,
    categoria(soloExcursion, 'excursion').rango
  );
});

// ------------------------------------------- importes introducidos por el usuario

test('E. alojamiento personalizado: min === max === importe introducido', () => {
  const r = calculateLisbonBudget({
    ...BASE,
    alojamiento: { modo: 'propio', total: 523 },
  });
  const alojamiento = categoria(r, 'alojamiento');
  assert.deepEqual(alojamiento.rango, { min: 523, max: 523 });
  assert.equal(alojamiento.origen, 'introducido');
});

test('el alojamiento personalizado no depende de noches ni de personas', () => {
  const a = calculateLisbonBudget({
    ...BASE,
    noches: 2,
    personas: 2,
    alojamiento: { modo: 'propio', total: 520 },
  });
  const b = calculateLisbonBudget({
    ...BASE,
    noches: 6,
    personas: 6,
    alojamiento: { modo: 'propio', total: 520 },
  });
  assert.deepEqual(categoria(a, 'alojamiento').rango, categoria(b, 'alojamiento').rango);
});

test('alojamiento personalizado vacío cuenta 0 y no rompe nada', () => {
  const r = calculateLisbonBudget({ ...BASE, alojamiento: { modo: 'propio', total: 0 } });
  assert.deepEqual(categoria(r, 'alojamiento').rango, { min: 0, max: 0 });
  assert.ok(Number.isFinite(r.total.min) && Number.isFinite(r.total.max));
});

test('F. vuelos: min === max === importe introducido', () => {
  const r = calculateLisbonBudget({ ...BASE, vuelosTotal: 341 });
  const vuelos = categoria(r, 'vuelos');
  assert.deepEqual(vuelos.rango, { min: 341, max: 341 });
  assert.equal(vuelos.origen, 'introducido');
  assert.equal(r.vuelosIncluidos, true);
});

test('G. sin vuelos: no hay categoría y queda marcado como no incluido', () => {
  const r = calculateLisbonBudget(BASE);
  assert.equal(Boolean(categoria(r, 'vuelos')), false);
  assert.equal(r.vuelosIncluidos, false);
});

test('los vuelos suman al total exactamente su importe', () => {
  const sin = calculateLisbonBudget(BASE);
  const con = calculateLisbonBudget({ ...BASE, vuelosTotal: 300 });
  assert.equal(con.total.min - sin.total.min, 300);
  assert.equal(con.total.max - sin.total.max, 300);
});

// --------------------------------------------------------- gasto en destino

test('J. sinAlojamiento es el total menos alojamiento y menos vuelos', () => {
  const r = calculateLisbonBudget({
    ...BASE,
    atracciones: ['castelo-sao-jorge', 'maat'],
    excursionSintra: true,
    alojamiento: { modo: 'propio', total: 600 },
    vuelosTotal: 400,
  });
  const enDestino = r.categorias
    .filter((c) => c.id !== 'alojamiento' && c.id !== 'vuelos')
    .reduce((acc, c) => ({ min: acc.min + c.rango.min, max: acc.max + c.rango.max }), {
      min: 0,
      max: 0,
    });
  // Margen por el redondeo hacia fuera de cada magnitud por separado.
  assert.ok(Math.abs(r.sinAlojamiento.min - enDestino.min) <= 5);
  assert.ok(Math.abs(r.sinAlojamiento.max - enDestino.max) <= 5);
  assert.ok(r.sinAlojamiento.max < r.total.max, 'debería ser menor que el total');
});

test('sinAlojamiento no cambia al cambiar el alojamiento', () => {
  const economico = calculateLisbonBudget({ ...BASE, alojamiento: { modo: 'estimado', nivel: 'economico' } });
  const superior = calculateLisbonBudget({ ...BASE, alojamiento: { modo: 'estimado', nivel: 'superior' } });
  assert.deepEqual(economico.sinAlojamiento, superior.sinAlojamiento);
});

test('sinAlojamiento no cambia al añadir vuelos', () => {
  const sin = calculateLisbonBudget(BASE);
  const con = calculateLisbonBudget({ ...BASE, vuelosTotal: 900 });
  assert.deepEqual(sin.sinAlojamiento, con.sinAlojamiento);
});

// ------------------------------------------------------------ escenarios A-C

test('A. 1 persona · 1 día · 0 noches · económico · sin nada más', () => {
  const r = calculateLisbonBudget({
    dias: 1,
    noches: 0,
    personas: 1,
    alojamiento: { modo: 'estimado', nivel: 'economico' },
    comida: 'ahorro',
    transporte: 'a-pie',
    atracciones: [],
    excursionSintra: false,
  });
  assert.equal(r.noches, 0);
  assert.deepEqual(categoria(r, 'alojamiento').rango, { min: 0, max: 0 });
  assert.deepEqual(categoria(r, 'atracciones').rango, { min: 0, max: 0 });
  assert.equal(r.vuelosIncluidos, false);
  assert.deepEqual(r.sinAlojamiento, r.total);
  assert.ok(r.total.max > 0, 'comer algo cuesta');
});

test('B. 2 personas · 3 días · 2 noches · intermedio · varias atracciones', () => {
  const r = calculateLisbonBudget({
    ...BASE,
    atracciones: ['castelo-sao-jorge', 'mosteiro-jeronimos', 'torre-belem'],
  });
  assert.equal(r.atraccionesSeleccionadas.length, 3);
  assert.equal(categoria(r, 'atracciones').rango.min > 0, true);
  assert.ok(r.total.min > 0 && r.total.max > r.total.min);
  assert.ok(r.sinAlojamiento.max < r.total.max);
});

test('C. 4 personas · 5 días · 4 noches · alojamiento e importe de vuelos propios', () => {
  const r = calculateLisbonBudget({
    dias: 5,
    noches: 4,
    personas: 4,
    alojamiento: { modo: 'propio', total: 1240 },
    comida: 'mixto',
    transporte: 'publico',
    atracciones: ['oceanario'],
    excursionSintra: false,
    vuelosTotal: 860,
  });
  assert.deepEqual(categoria(r, 'alojamiento').rango, { min: 1240, max: 1240 });
  assert.deepEqual(categoria(r, 'vuelos').rango, { min: 860, max: 860 });
  assert.equal(r.habitaciones, 2);
  assert.ok(r.total.min >= 1240 + 860);
  assert.ok(r.sinAlojamiento.max < r.total.max - 1240 - 860 + 10);
});

// ------------------------------------------------------- entradas maliciosas

test('K. recorta días, noches y personas fuera de rango en lugar de fallar', () => {
  assert.equal(calculateLisbonBudget({ ...BASE, dias: 0 }).dias, LIMITES.diasMin);
  assert.equal(calculateLisbonBudget({ ...BASE, dias: 999 }).dias, LIMITES.diasMax);
  assert.equal(calculateLisbonBudget({ ...BASE, noches: -7 }).noches, LIMITES.nochesMin);
  assert.equal(calculateLisbonBudget({ ...BASE, noches: 999 }).noches, LIMITES.nochesMax);
  assert.equal(calculateLisbonBudget({ ...BASE, personas: -4 }).personas, LIMITES.personasMin);
  assert.equal(calculateLisbonBudget({ ...BASE, personas: 99 }).personas, LIMITES.personasMax);
});

test('K. sobrevive a NaN, Infinity y negativos sin producir basura', () => {
  const malos = [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, -500, '  ', 'mucho'];
  for (const malo of malos) {
    const r = calculateLisbonBudget({
      ...BASE,
      dias: malo,
      noches: malo,
      personas: malo,
      alojamiento: { modo: 'propio', total: malo },
      vuelosTotal: malo,
    });
    for (const valor of [
      r.total.min,
      r.total.max,
      r.porPersona.min,
      r.porPersona.max,
      r.porPersonaYDia.min,
      r.porPersonaYDia.max,
      r.sinAlojamiento.min,
      r.sinAlojamiento.max,
    ]) {
      assert.ok(Number.isFinite(valor), `${String(malo)} produjo ${valor}`);
      assert.ok(valor >= 0, `${String(malo)} produjo un valor negativo`);
    }
    assert.deepEqual(categoria(r, 'alojamiento').rango, { min: 0, max: 0 });
    assert.equal(r.vuelosIncluidos, false);
  }
});

test('K. un importe absurdo se recorta al tope, no se propaga', () => {
  const r = calculateLisbonBudget({
    ...BASE,
    alojamiento: { modo: 'propio', total: 99_999_999 },
  });
  assert.equal(categoria(r, 'alojamiento').rango.min, LIMITES.importeMax);
});

test('normalizarImporte limpia cualquier entrada', () => {
  assert.equal(normalizarImporte(''), 0);
  assert.equal(normalizarImporte('520'), 520);
  assert.equal(normalizarImporte(520.4), 520);
  assert.equal(normalizarImporte(-3), 0);
  assert.equal(normalizarImporte(Number.NaN), 0);
  // Infinity es basura, no «mucho»: se descarta como cualquier otro valor no
  // finito en vez de convertirse en el tope.
  assert.equal(normalizarImporte(Number.POSITIVE_INFINITY), 0);
  assert.equal(normalizarImporte(undefined), 0);
  assert.equal(normalizarImporte('hola'), 0);
});

test('falla de forma explícita ante una opción desconocida', () => {
  assert.throws(
    () => calculateLisbonBudget({ ...BASE, comida: 'gourmet-espacial' }),
    /desconocida/
  );
});

// ---------------------------------------------------------------- redondeo

test('el redondeo va hacia fuera y no toca los importes del usuario', () => {
  const r = calculateLisbonBudget({
    ...BASE,
    alojamiento: { modo: 'propio', total: 523 },
    vuelosTotal: 341,
  });
  assert.equal(r.total.min % 5, 0);
  assert.equal(r.total.max % 5, 0);
  // 523 y 341 no son múltiplos de 5: si se hubieran redondeado, dejarían de
  // ser exactos y esta comprobación fallaría.
  assert.deepEqual(categoria(r, 'alojamiento').rango, { min: 523, max: 523 });
  assert.deepEqual(categoria(r, 'vuelos').rango, { min: 341, max: 341 });
});

test('los totales derivados son coherentes entre sí', () => {
  const r = calculateLisbonBudget({ ...BASE, dias: 4, noches: 3 });
  assert.ok(Math.abs(r.porPersona.min * r.personas - r.total.min) <= 10);
  assert.ok(Math.abs(r.porPersonaYDia.min * r.personas * r.dias - r.total.min) <= 20);
});

test('formatRango escribe un rango legible', () => {
  assert.equal(formatRango({ min: 120, max: 240 }), '120 – 240 €');
  assert.equal(formatRango({ min: 0, max: 0 }), '0 €');
  assert.equal(formatRango({ min: 523, max: 523 }), '523 €');
});

// ------------------------------------------------------------ transparencia

test('se publican las reglas y lo que no se incluye', () => {
  assert.ok(BUDGET_ASSUMPTIONS.length >= 5);
  assert.ok(NO_INCLUIDO.length >= 4);
  assert.ok(BUDGET_ASSUMPTIONS.every((t) => typeof t === 'string' && t.length > 20));
});

test('las reglas ya no afirman que las noches sean días menos uno', () => {
  const texto = BUDGET_ASSUMPTIONS.join(' ').toLowerCase();
  assert.ok(texto.includes('noches las decides tú'), 'debería decir que las noches las decide el usuario');
  assert.ok(!texto.includes('se cuenta una noche menos que días'), 'regla obsoleta todavía presente');
});

test('las reglas explican los importes introducidos por el usuario', () => {
  const texto = BUDGET_ASSUMPTIONS.join(' ').toLowerCase();
  assert.ok(texto.includes('introduces tú'));
  assert.ok(texto.includes('sintra'));
});

test('ninguna etiqueta promete exactitud', () => {
  const textos = [...BUDGET_ASSUMPTIONS, ...NO_INCLUIDO].join(' ').toLowerCase();
  for (const palabra of ['precio exacto', 'precio final', 'garantiza', 'sin sorpresas']) {
    assert.ok(!textos.includes(palabra), `no debería aparecer «${palabra}»`);
  }
});

console.log(`\n${total - fallos}/${total} pruebas OK.`);
if (fallos > 0) {
  console.log(`${fallos} pruebas fallaron.`);
  process.exitCode = 1;
}
