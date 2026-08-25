/**
 * Validación de un `BudgetInput` que llega de fuera.
 *
 * La calculadora del navegador nunca envía importes: envía **decisiones**
 * —días, noches, personas, niveles y qué atracciones ha marcado— y el servidor
 * vuelve a calcular con `calculateLisbonBudget`. Así el total del PDF y el del
 * email salen del mismo motor que la pantalla, y un cliente manipulado no
 * puede afirmar que su viaje cuesta 1 €: ese número no viaja por la red.
 *
 * Dos cosas que este módulo hace y conviene no perder:
 *
 *   · **Rechaza, no arregla.** Un nivel de comida desconocido devuelve error,
 *     no un valor por defecto. `calculateLisbonBudget` lanza una excepción con
 *     un id que no existe, y una excepción en una ruta de API es un 500 donde
 *     debería haber un 400.
 *
 *   · **Los importes propios se normalizan con la función del motor.** No hay
 *     una segunda regla aquí para decidir qué es un importe válido.
 */

import {
  ATRACCIONES,
  LIMITES,
  OPCIONES_ALOJAMIENTO,
  OPCIONES_COMIDA,
  OPCIONES_TRANSPORTE,
  normalizarImporte,
  type BudgetInput,
  type NivelAlojamiento,
  type NivelComida,
  type NivelTransporte,
} from './budget-calculator';

/** Tope de atracciones aceptadas. Es el catálogo entero: más es basura. */
const MAX_ATRACCIONES = ATRACCIONES.length;

const IDS_ALOJAMIENTO = OPCIONES_ALOJAMIENTO.map((o) => o.id) as readonly NivelAlojamiento[];
const IDS_COMIDA = OPCIONES_COMIDA.map((o) => o.id) as readonly NivelComida[];
const IDS_TRANSPORTE = OPCIONES_TRANSPORTE.map((o) => o.id) as readonly NivelTransporte[];
const IDS_ATRACCION = ATRACCIONES.map((a) => a.id);

export type ParseResult =
  | { ok: true; input: BudgetInput }
  | { ok: false; error: string };

function esEnteroEnRango(valor: unknown, min: number, max: number): valor is number {
  return typeof valor === 'number' && Number.isInteger(valor) && valor >= min && valor <= max;
}

/**
 * Convierte un objeto sin tipar en un `BudgetInput` o explica por qué no.
 *
 * Los mensajes de error nombran el campo pero no revelan nada del sistema:
 * sirven para depurar el formulario, no para explorar la API.
 */
export function parseBudgetInput(raw: unknown): ParseResult {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return { ok: false, error: 'Datos de presupuesto no válidos.' };
  }

  const datos = raw as Record<string, unknown>;

  if (!esEnteroEnRango(datos.dias, LIMITES.diasMin, LIMITES.diasMax)) {
    return { ok: false, error: `«días» debe ser un entero entre ${LIMITES.diasMin} y ${LIMITES.diasMax}.` };
  }
  if (!esEnteroEnRango(datos.noches, LIMITES.nochesMin, LIMITES.nochesMax)) {
    return { ok: false, error: `«noches» debe ser un entero entre ${LIMITES.nochesMin} y ${LIMITES.nochesMax}.` };
  }
  if (!esEnteroEnRango(datos.personas, LIMITES.personasMin, LIMITES.personasMax)) {
    return { ok: false, error: `«personas» debe ser un entero entre ${LIMITES.personasMin} y ${LIMITES.personasMax}.` };
  }

  const alojamiento = datos.alojamiento;
  if (typeof alojamiento !== 'object' || alojamiento === null) {
    return { ok: false, error: '«alojamiento» no válido.' };
  }
  const aloj = alojamiento as Record<string, unknown>;

  let alojamientoInput: BudgetInput['alojamiento'];
  if (aloj.modo === 'estimado') {
    if (!IDS_ALOJAMIENTO.includes(aloj.nivel as NivelAlojamiento)) {
      return { ok: false, error: 'Nivel de alojamiento desconocido.' };
    }
    alojamientoInput = { modo: 'estimado', nivel: aloj.nivel as NivelAlojamiento };
  } else if (aloj.modo === 'propio') {
    // `normalizarImporte` ya recorta negativos, NaN, Infinity y el tope.
    alojamientoInput = { modo: 'propio', total: normalizarImporte(aloj.total) };
  } else {
    return { ok: false, error: '«alojamiento.modo» debe ser «estimado» o «propio».' };
  }

  if (!IDS_COMIDA.includes(datos.comida as NivelComida)) {
    return { ok: false, error: 'Nivel de comida desconocido.' };
  }
  if (!IDS_TRANSPORTE.includes(datos.transporte as NivelTransporte)) {
    return { ok: false, error: 'Nivel de transporte desconocido.' };
  }
  if (typeof datos.excursionSintra !== 'boolean') {
    return { ok: false, error: '«excursionSintra» debe ser booleano.' };
  }

  let atracciones: string[] = [];
  if (datos.atracciones !== undefined) {
    if (!Array.isArray(datos.atracciones)) {
      return { ok: false, error: '«atracciones» debe ser una lista.' };
    }
    if (datos.atracciones.length > MAX_ATRACCIONES) {
      return { ok: false, error: 'Demasiadas atracciones.' };
    }
    for (const id of datos.atracciones) {
      if (typeof id !== 'string' || !IDS_ATRACCION.includes(id)) {
        return { ok: false, error: 'Atracción desconocida.' };
      }
    }
    // Duplicados fuera: el motor los sumaría dos veces.
    atracciones = Array.from(new Set(datos.atracciones as string[]));
  }

  let vuelosTotal: number | undefined;
  if (datos.vuelosTotal !== undefined && datos.vuelosTotal !== null) {
    vuelosTotal = normalizarImporte(datos.vuelosTotal);
  }

  return {
    ok: true,
    input: {
      dias: datos.dias,
      noches: datos.noches,
      personas: datos.personas,
      alojamiento: alojamientoInput,
      comida: datos.comida as NivelComida,
      transporte: datos.transporte as NivelTransporte,
      atracciones,
      excursionSintra: datos.excursionSintra,
      ...(vuelosTotal !== undefined && { vuelosTotal }),
    },
  };
}
