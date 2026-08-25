/**
 * La cifra recomendada: un número cerrado dentro de nuestra estimación.
 *
 * Un rango ancho es honesto pero no se puede usar. «385 – 675 €» no responde a
 * la pregunta que trae la persona, que es «¿cuánto aparto para este viaje?».
 * Este módulo elige un punto dentro del rango que el motor ya ha calculado y lo
 * presenta como respuesta práctica, sin que el rango desaparezca.
 *
 * Cuatro reglas que lo mantienen defendible:
 *
 *   1. **No es un motor.** No hay aquí ni una tarifa ni una fórmula de coste.
 *      Recibe el `BudgetResult` ya cerrado y se limita a escoger un punto de
 *      cada rango. Si `budget-calculator.ts` cambia, esto cambia con él sin
 *      tocarse.
 *
 *   2. **No promete exactitud.** Es «recomendado», no «exacto». No hay
 *      porcentaje de acierto, ni margen de confianza, ni nada que no podamos
 *      demostrar. Se elige el 62,5 % del recorrido —ni el mínimo, que sería
 *      optimista, ni el punto medio, que se queda corto con más frecuencia de
 *      la que parece— y así se declara.
 *
 *   3. **Lo que introduce el usuario no se toca.** Un alojamiento de 520 € o
 *      unos vuelos de 340 € entran tal cual, sin recorrido y sin redondeo. Ese
 *      número es suyo.
 *
 *   4. **Se puede reconstruir sumando.** El desglose cuadra con el total. Si
 *      el redondeo final crea una diferencia de unos euros, aparece como una
 *      línea propia en lugar de esconderse: preferimos una fila fea a que las
 *      columnas no sumen.
 *
 * Función pura y determinista. Sin `Math.random`, sin reloj, sin estado.
 */

import {
  CLASES_ENTRADA,
  type Atraccion,
  type BudgetInput,
  type BudgetResult,
  type CategoriaId,
  type ClaseEntrada,
  type OrigenImporte,
  type Rango,
} from './budget-calculator';

/**
 * Dónde caer dentro del rango. 0 sería el mínimo y 1 el máximo; 0,625 está
 * algo por encima del centro, que es lo prudente sin llegar a presentar el
 * peor escenario como si fuera lo normal.
 */
export const FRACCION_RECOMENDADA = 0.625;

/** El punto exacto del recorrido, sin redondear. */
export function puntoRecomendado(rango: Rango): number {
  return rango.min + FRACCION_RECOMENDADA * (rango.max - rango.min);
}

const aCinco = (valor: number) => Math.round(valor / 5) * 5;
const arribaACinco = (valor: number) => Math.ceil(valor / 5) * 5;

/**
 * Lo que contamos por una entrada, por persona.
 *
 * Va al euro y no al múltiplo de cinco a propósito: es una cifra que se lee
 * junto al nombre de un sitio concreto, y «18 €» se parece más a una entrada
 * de museo que «20 €». Con los tramos actuales sale 9, 18 y 33.
 */
export function recomendadoEntrada(clase: ClaseEntrada): number {
  return Math.round(puntoRecomendado(CLASES_ENTRADA[clase]));
}

export interface CategoriaRecomendada {
  id: CategoriaId;
  label: string;
  /** Euros para todo el grupo y todo el viaje. */
  importe: number;
  /** El rango del que sale, para poder seguir consultándolo. */
  rango: Rango;
  origen: OrigenImporte;
}

export interface LineaEntrada {
  atraccion: Atraccion;
  /** Lo que contamos por persona. */
  porPersona: number;
  personas: number;
  /** `porPersona × personas`. */
  subtotal: number;
}

export interface RecommendedBudget {
  categorias: CategoriaRecomendada[];
  /** Una línea por atracción marcada. Vacío si no hay ninguna. */
  entradas: LineaEntrada[];
  /** Suma exacta de las categorías, antes del redondeo final. */
  sumaCategorias: number;
  /**
   * Lo que añade el redondeo del total hacia arriba, de 0 a 4 €. Aparece
   * cuando la suma no cae ya en un múltiplo de cinco, que aquí pasa por dos
   * motivos: un importe introducido por el usuario, o las entradas, que se
   * cuentan al euro para que sus líneas sumen.
   */
  redondeo: number;
  /** La cifra principal. */
  total: number;
  porPersona: number;
  porPersonaYDia: number;
  /** El rango del motor, que sigue estando disponible. */
  rango: Rango;
}

/**
 * Elige la cifra recomendada de un presupuesto ya calculado.
 *
 * @param input  Sirve sólo para saber cuántas personas hay al repartir las
 *   entradas; ninguna cifra sale de aquí.
 * @param result Lo que devolvió `calculateLisbonBudget`. Única fuente.
 */
export function getRecommendedBudget(input: BudgetInput, result: BudgetResult): RecommendedBudget {
  const personas = result.personas;

  /*
   * Las entradas se construyen de abajo arriba: primero la cifra de cada
   * atracción, y la categoría es su suma. Al revés —redondear el rango de la
   * categoría— las líneas del desglose no sumarían su propio total, y ver
   * «18 + 33 = 60» es exactamente la clase de detalle que hace desconfiar de
   * todo lo demás.
   */
  const entradas: LineaEntrada[] = result.atraccionesSeleccionadas.map((atraccion) => {
    const porPersona = recomendadoEntrada(atraccion.clase);
    return { atraccion, porPersona, personas, subtotal: porPersona * personas };
  });

  const totalEntradas = entradas.reduce((suma, linea) => suma + linea.subtotal, 0);

  const categorias: CategoriaRecomendada[] = result.categorias.map((categoria) => {
    let importe: number;
    if (categoria.origen === 'introducido') {
      // Dato del usuario: entra exacto. `min === max` en este caso.
      importe = categoria.rango.min;
    } else if (categoria.id === 'atracciones') {
      importe = totalEntradas;
    } else {
      importe = aCinco(puntoRecomendado(categoria.rango));
    }
    return {
      id: categoria.id,
      label: categoria.label,
      importe,
      rango: categoria.rango,
      origen: categoria.origen,
    };
  });

  const sumaCategorias = categorias.reduce((suma, categoria) => suma + categoria.importe, 0);
  const total = arribaACinco(sumaCategorias);

  return {
    categorias,
    entradas,
    sumaCategorias,
    redondeo: total - sumaCategorias,
    total,
    porPersona: Math.round(total / personas),
    porPersonaYDia: Math.round(total / (personas * result.dias)),
    rango: result.total,
  };
}

/** Formatea una cifra recomendada. Siempre cerrada, nunca un intervalo. */
export function formatRecomendado(importe: number): string {
  return `${importe} €`;
}
