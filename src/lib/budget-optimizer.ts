/**
 * Escenarios de ahorro para la calculadora de presupuesto.
 *
 * Esto **no es un segundo motor**. No tiene ni una fórmula ni una tarifa
 * propia: construye variantes del mismo `BudgetInput`, se las pasa a
 * `calculateLisbonBudget` y compara los totales que devuelve. Todo lo que
 * afirma sale, por tanto, de la misma estimación que ya está en pantalla.
 *
 * Tres reglas que lo mantienen honesto:
 *
 *   1. **Sólo se sugiere lo que se puede bajar.** Si alguien ya está en el
 *      nivel más barato de una categoría, esa categoría no genera nada.
 *   2. **Nunca se toca un dato del usuario.** Con el alojamiento en «importe
 *      propio» no hay sugerencia de alojamiento: ese número es suyo, no una
 *      estimación nuestra, y proponerle que lo baje sería absurdo.
 *   3. **El impacto es una resta, no una promesa.** Es la diferencia entre
 *      dos escenarios nuestros, y así se presenta en la interfaz: «impacto
 *      estimado», nunca «ahorras».
 *
 * Deliberadamente **no hay sugerencias sobre las atracciones marcadas**. Son
 * lo que la persona quiere ver; decirle que renuncie a una para ahorrar
 * treinta euros es la clase de consejo que no pidió. Si algún día se añade,
 * debe ser una opción reversible y nunca la primera de la lista.
 *
 * Función pura y determinista: mismo input, mismas sugerencias, en el mismo
 * orden. Sin `Math.random`, sin reloj, sin estado.
 */

import {
  calculateLisbonBudget,
  type BudgetInput,
  type NivelAlojamiento,
  type NivelComida,
  type NivelTransporte,
  type Rango,
} from './budget-calculator';

export type TipoSugerencia = 'alojamiento' | 'comida' | 'transporte';

export interface Sugerencia {
  /** Identificador estable. Sirve de `key` y para las pruebas. */
  id: string;
  tipo: TipoSugerencia;
  titulo: string;
  descripcion: string;
  /**
   * Cuánto bajaría el total, en positivo. Es la diferencia entre el
   * escenario actual y el alternativo, calculada con el mismo motor.
   */
  impacto: Rango;
  /** El input completo que habría que aplicar para llegar a ese escenario. */
  nuevoInput: BudgetInput;
}

/** El siguiente escalón hacia abajo de cada categoría, o `null` si ya está. */
const BAJAR_ALOJAMIENTO: Record<NivelAlojamiento, NivelAlojamiento | null> = {
  superior: 'intermedio',
  intermedio: 'economico',
  economico: null,
};

const BAJAR_COMIDA: Record<NivelComida, NivelComida | null> = {
  restaurantes: 'mixto',
  mixto: 'ahorro',
  ahorro: null,
};

const BAJAR_TRANSPORTE: Record<NivelTransporte, NivelTransporte | null> = {
  'publico-taxi': 'publico',
  publico: 'a-pie',
  'a-pie': null,
};

const COPY_ALOJAMIENTO: Record<string, { titulo: string; descripcion: string }> = {
  intermedio: {
    titulo: 'Cambiar a alojamiento intermedio',
    descripcion: 'Un hotel o apartamento correcto en vez de gama alta, sin tocar el resto del viaje.',
  },
  economico: {
    titulo: 'Cambiar a alojamiento económico',
    descripcion: 'Hostal, guesthouse o habitación sencilla. Es la partida que más se mueve.',
  },
};

const COPY_COMIDA: Record<string, { titulo: string; descripcion: string }> = {
  mixto: {
    titulo: 'Combinar restaurantes con opciones informales',
    descripcion: 'Una comida sentada al día y el resto más informal.',
  },
  ahorro: {
    titulo: 'Comer más al ahorro',
    descripcion: 'Pastelería, supermercado y tascas de menú, que es como come el barrio.',
  },
};

const COPY_TRANSPORTE: Record<string, { titulo: string; descripcion: string }> = {
  publico: {
    titulo: 'Moverte sobre todo en transporte público',
    descripcion: 'Metro, autobús y tranvía en lugar de taxi o VTC a diario.',
  },
  'a-pie': {
    titulo: 'Caminar más por el centro',
    descripcion: 'Lisboa se anda bien; algún billete suelto para las cuestas que no apetezcan.',
  },
};

/**
 * Diferencia entre dos totales, siempre en positivo y con los extremos
 * ordenados. Se compara mínimo con mínimo y máximo con máximo; si el
 * redondeo hacia fuera invirtiera el orden, se recoloca en vez de devolver
 * un rango al revés.
 */
function calcularImpacto(actual: Rango, alternativo: Rango): Rango {
  const a = actual.min - alternativo.min;
  const b = actual.max - alternativo.max;
  return {
    min: Math.max(0, Math.min(a, b)),
    max: Math.max(0, Math.max(a, b)),
  };
}

/**
 * Genera las sugerencias de ahorro para un presupuesto, ordenadas por
 * impacto máximo y limitadas a tres.
 *
 * Se descarta cualquier escenario cuyo impacto sea 0: proponer un cambio que
 * no mueve el total es hacer perder el tiempo.
 */
export function generarSugerencias(input: BudgetInput): Sugerencia[] {
  const actual = calculateLisbonBudget(input);
  const candidatas: Sugerencia[] = [];

  const añadir = (
    id: string,
    tipo: TipoSugerencia,
    copy: { titulo: string; descripcion: string } | undefined,
    nuevoInput: BudgetInput
  ) => {
    if (!copy) return;
    const alternativo = calculateLisbonBudget(nuevoInput);
    const impacto = calcularImpacto(actual.total, alternativo.total);
    if (impacto.max <= 0) return;
    candidatas.push({ id, tipo, ...copy, impacto, nuevoInput });
  };

  // Alojamiento. Con «importe propio» no se toca: es un dato real del usuario.
  if (input.alojamiento?.modo === 'estimado') {
    const siguiente = BAJAR_ALOJAMIENTO[input.alojamiento.nivel];
    if (siguiente) {
      añadir(`alojamiento-${siguiente}`, 'alojamiento', COPY_ALOJAMIENTO[siguiente], {
        ...input,
        alojamiento: { modo: 'estimado', nivel: siguiente },
      });
    }
  }

  const siguienteComida = BAJAR_COMIDA[input.comida];
  if (siguienteComida) {
    añadir(`comida-${siguienteComida}`, 'comida', COPY_COMIDA[siguienteComida], {
      ...input,
      comida: siguienteComida,
    });
  }

  const siguienteTransporte = BAJAR_TRANSPORTE[input.transporte];
  if (siguienteTransporte) {
    añadir(`transporte-${siguienteTransporte}`, 'transporte', COPY_TRANSPORTE[siguienteTransporte], {
      ...input,
      transporte: siguienteTransporte,
    });
  }

  // Orden estable: por impacto máximo, y a igualdad por id, para que dos
  // ejecuciones con los mismos datos devuelvan exactamente lo mismo.
  return candidatas
    .sort((a, b) => b.impacto.max - a.impacto.max || a.id.localeCompare(b.id))
    .slice(0, 3);
}

/** Formatea un impacto como reducción. Siempre con signo negativo delante. */
export function formatImpacto(impacto: Rango): string {
  if (impacto.min === impacto.max) return `−${impacto.min} €`;
  return `−${impacto.min} a −${impacto.max} €`;
}
