/**
 * Estimación de presupuesto para un viaje a Lisboa.
 *
 * Tres decisiones de diseño que conviene no deshacer sin pensarlo:
 *
 * 1. **Todo son rangos, nunca cifras exactas.** Un presupuesto de viaje no se
 *    puede calcular: depende de la temporada, de la antelación con la que se
 *    reserve y de decisiones que la persona todavía no ha tomado. Devolver
 *    «487 €» sería una precisión falsa. Se devuelve «entre 420 € y 610 €», y
 *    los rangos son anchos a propósito.
 *
 * 2. **No se citan precios oficiales.** Ni tarifas de transporte ni entradas
 *    concretas. Son datos volátiles que este proyecto ya ha tenido que
 *    corregir varias veces, y una calculadora los congelaría en el código.
 *    Los rangos describen tramos de gasto, no listas de precios; para lo
 *    concreto, la página enlaza a donde ese dato se mantiene.
 *
 * 3. **Es una función pura y determinista.** Mismo input, mismo output, sin
 *    `Math.random`, sin fechas del sistema y sin estado. Así se puede probar
 *    de verdad (ver `scripts/test-budget-calculator.mjs`) y así el resultado
 *    no cambia entre el servidor y el cliente.
 */

export type NivelAlojamiento = 'economico' | 'intermedio' | 'superior';
export type NivelComida = 'ahorro' | 'mixto' | 'restaurantes';
export type NivelTransporte = 'a-pie' | 'publico' | 'publico-taxi';
export type NivelVisitas = 'pocas' | 'algunas' | 'muchas';

export type CategoriaId =
  | 'alojamiento'
  | 'comida'
  | 'transporte'
  | 'visitas'
  | 'excursion';

export interface Rango {
  min: number;
  max: number;
}

export interface BudgetInput {
  /** Días en la ciudad. Se limita a 1-14. */
  dias: number;
  /** Personas que viajan juntas y comparten alojamiento. Se limita a 1-8. */
  personas: number;
  alojamiento: NivelAlojamiento;
  comida: NivelComida;
  transporte: NivelTransporte;
  visitas: NivelVisitas;
  /** Un día completo fuera, en Sintra. */
  excursionSintra: boolean;
}

export interface CategoriaResultado {
  id: CategoriaId;
  label: string;
  /** Total de la categoría para todo el grupo y todo el viaje. */
  rango: Rango;
  /** Qué se ha contado exactamente para llegar a ese rango. */
  base: string;
}

export interface BudgetResult {
  dias: number;
  personas: number;
  /** Noches de alojamiento: una menos que días (se llega un día y se va otro). */
  noches: number;
  /** Habitaciones contadas: dos personas por habitación. */
  habitaciones: number;
  categorias: CategoriaResultado[];
  /** Todo el grupo, todo el viaje. */
  total: Rango;
  /** Una persona, todo el viaje. */
  porPersona: Rango;
  /** Una persona, un día. */
  porPersonaYDia: Rango;
}

export const LIMITES = {
  diasMin: 1,
  diasMax: 14,
  personasMin: 1,
  personasMax: 8,
} as const;

/** Personas por habitación al contar alojamiento. */
const PERSONAS_POR_HABITACION = 2;

interface Opcion<T extends string> {
  id: T;
  label: string;
  /** Frase corta que aparece bajo la etiqueta, en el selector. */
  desc: string;
  /** Rango en euros. La unidad depende de la categoría (ver más abajo). */
  rango: Rango;
}

/**
 * Alojamiento: **por habitación y noche**, no por persona. Es como cobran
 * los alojamientos, y así viajar solo sale caro en el cálculo igual que sale
 * caro en la realidad, sin necesidad de inventar un recargo.
 */
export const OPCIONES_ALOJAMIENTO: readonly Opcion<NivelAlojamiento>[] = [
  {
    id: 'economico',
    label: 'Económico',
    desc: 'Hostal, guesthouse o habitación sencilla',
    rango: { min: 45, max: 80 },
  },
  {
    id: 'intermedio',
    label: 'Intermedio',
    desc: 'Hotel o apartamento correcto, bien situado',
    rango: { min: 85, max: 150 },
  },
  {
    id: 'superior',
    label: 'Superior',
    desc: 'Hotel de gama alta o apartamento con vistas',
    rango: { min: 160, max: 280 },
  },
] as const;

/** Comida: por persona y día, tres comidas y algo de beber incluidos. */
export const OPCIONES_COMIDA: readonly Opcion<NivelComida>[] = [
  {
    id: 'ahorro',
    label: 'Al ahorro',
    desc: 'Pastelería, supermercado y tascas de menú',
    rango: { min: 15, max: 28 },
  },
  {
    id: 'mixto',
    label: 'Mixto',
    desc: 'Una comida sentada al día y el resto informal',
    rango: { min: 30, max: 50 },
  },
  {
    id: 'restaurantes',
    label: 'Restaurantes',
    desc: 'Comer y cenar sentado, con bebida',
    rango: { min: 55, max: 95 },
  },
] as const;

/** Transporte urbano: por persona y día. No incluye llegar a Lisboa. */
export const OPCIONES_TRANSPORTE: readonly Opcion<NivelTransporte>[] = [
  {
    id: 'a-pie',
    label: 'Casi todo a pie',
    desc: 'Algún billete suelto cuando la cuesta gana',
    rango: { min: 0, max: 6 },
  },
  {
    id: 'publico',
    label: 'Transporte público',
    desc: 'Metro, autobús, tranvía y elevadores a diario',
    rango: { min: 6, max: 12 },
  },
  {
    id: 'publico-taxi',
    label: 'Público y taxi',
    desc: 'Transporte público más taxi o VTC con frecuencia',
    rango: { min: 14, max: 26 },
  },
] as const;

/** Visitas y entradas: por persona y día. */
export const OPCIONES_VISITAS: readonly Opcion<NivelVisitas>[] = [
  {
    id: 'pocas',
    label: 'Pocas entradas',
    desc: 'Miradores, calles y barrios; alguna entrada suelta',
    rango: { min: 0, max: 12 },
  },
  {
    id: 'algunas',
    label: 'Algunas entradas',
    desc: 'Uno o dos monumentos o museos al día',
    rango: { min: 14, max: 32 },
  },
  {
    id: 'muchas',
    label: 'Muchas entradas',
    desc: 'Los monumentos principales y alguna experiencia',
    rango: { min: 35, max: 65 },
  },
] as const;

/**
 * Excursión a Sintra: por persona, una sola vez. Cuenta el tren de ida y
 * vuelta, el transporte dentro de Sintra y la entrada a dos sitios.
 *
 * Ocupa un día entero, así que ese día **no** se suma además el gasto de
 * visitas en Lisboa: sería contarlo dos veces.
 */
const EXCURSION_SINTRA: Rango = { min: 30, max: 75 };

/**
 * Lo que la estimación deja fuera a propósito. Se muestra en la página: un
 * presupuesto que no dice lo que no incluye engaña más que si no existiera.
 */
export const NO_INCLUIDO: readonly string[] = [
  'Los vuelos o el transporte hasta Lisboa',
  'El traslado entre el aeropuerto y el alojamiento',
  'El seguro de viaje',
  'Compras, recuerdos y caprichos',
  'Salir de noche',
  'Lo imprevisto, que siempre aparece',
] as const;

/**
 * Las reglas con las que se calcula, en el mismo orden en el que se aplican.
 * La página las publica enteras: si alguien no está de acuerdo con una,
 * puede corregir el resultado a mano en lugar de creérselo.
 */
export const BUDGET_ASSUMPTIONS: readonly string[] = [
  'Todo son rangos anchos, no precios. Lo que cuesta un viaje depende de la temporada, de con cuánta antelación reserves y de decisiones que aún no has tomado.',
  'No se citan tarifas ni precios de entradas concretas: cambian, y una calculadora los dejaría congelados. Para eso están las páginas que sí mantienen ese dato.',
  'Se cuenta una noche menos que días: con 3 días se pagan 2 noches. Un solo día es una visita sin dormir y no suma alojamiento.',
  'El alojamiento se cuenta por habitación y noche, con dos personas por habitación. Viajando solo pagas la habitación entera, y así aparece en el cálculo.',
  'Comida, transporte y visitas se cuentan por persona y día, todos los días del viaje.',
  'Si marcas la excursión a Sintra, ese día no se suma además el gasto de visitas en Lisboa: no se puede estar en dos sitios.',
  'Los totales se redondean hacia fuera a múltiplos de 5 €: el mínimo hacia abajo y el máximo hacia arriba. El rango nunca se estrecha por redondeo.',
  'Mismos datos, mismo resultado. No hay ningún factor aleatorio.',
] as const;

function clamp(valor: number, min: number, max: number): number {
  if (!Number.isFinite(valor)) return min;
  return Math.min(max, Math.max(min, Math.round(valor)));
}

function escalar(rango: Rango, factor: number): Rango {
  return { min: rango.min * factor, max: rango.max * factor };
}

function sumar(a: Rango, b: Rango): Rango {
  return { min: a.min + b.min, max: a.max + b.max };
}

/**
 * Redondea hacia fuera: el mínimo baja al múltiplo de 5 anterior y el máximo
 * sube al siguiente. Nunca hace el rango más estrecho de lo que es.
 */
function redondearRango(rango: Rango, paso = 5): Rango {
  return {
    min: Math.floor(rango.min / paso) * paso,
    max: Math.ceil(rango.max / paso) * paso,
  };
}

function buscar<T extends string>(
  opciones: readonly Opcion<T>[],
  id: T
): Opcion<T> {
  const opcion = opciones.find((o) => o.id === id);
  if (!opcion) throw new Error(`Opción de presupuesto desconocida: ${id}`);
  return opcion;
}

/**
 * Calcula el presupuesto orientativo de un viaje a Lisboa.
 *
 * Función pura: no lee entorno, no mira el reloj y no usa aleatoriedad.
 * Los valores fuera de rango se recortan a los límites en lugar de fallar,
 * para que un input manipulado nunca rompa la página.
 */
export function calculateLisbonBudget(input: BudgetInput): BudgetResult {
  const dias = clamp(input.dias, LIMITES.diasMin, LIMITES.diasMax);
  const personas = clamp(input.personas, LIMITES.personasMin, LIMITES.personasMax);

  const noches = Math.max(0, dias - 1);
  const habitaciones = Math.ceil(personas / PERSONAS_POR_HABITACION);

  const alojamiento = buscar(OPCIONES_ALOJAMIENTO, input.alojamiento);
  const comida = buscar(OPCIONES_COMIDA, input.comida);
  const transporte = buscar(OPCIONES_TRANSPORTE, input.transporte);
  const visitas = buscar(OPCIONES_VISITAS, input.visitas);

  // El día de Sintra se pasa fuera de Lisboa: sus entradas van en la
  // categoría de la excursión, no en la de visitas.
  const diasDeVisitas = input.excursionSintra ? Math.max(0, dias - 1) : dias;

  const categorias: CategoriaResultado[] = [
    {
      id: 'alojamiento',
      label: 'Alojamiento',
      rango: escalar(alojamiento.rango, noches * habitaciones),
      base:
        noches === 0
          ? 'Un solo día, sin dormir en Lisboa'
          : `${noches} ${noches === 1 ? 'noche' : 'noches'} · ${habitaciones} ${habitaciones === 1 ? 'habitación' : 'habitaciones'}`,
    },
    {
      id: 'comida',
      label: 'Comida y bebida',
      rango: escalar(comida.rango, dias * personas),
      base: `${dias} ${dias === 1 ? 'día' : 'días'} · ${personas} ${personas === 1 ? 'persona' : 'personas'}`,
    },
    {
      id: 'transporte',
      label: 'Transporte en la ciudad',
      rango: escalar(transporte.rango, dias * personas),
      base: `${dias} ${dias === 1 ? 'día' : 'días'} · ${personas} ${personas === 1 ? 'persona' : 'personas'}`,
    },
    {
      id: 'visitas',
      label: 'Visitas y entradas',
      rango: escalar(visitas.rango, diasDeVisitas * personas),
      base:
        diasDeVisitas === dias
          ? `${dias} ${dias === 1 ? 'día' : 'días'} · ${personas} ${personas === 1 ? 'persona' : 'personas'}`
          : `${diasDeVisitas} ${diasDeVisitas === 1 ? 'día' : 'días'} en Lisboa · ${personas} ${personas === 1 ? 'persona' : 'personas'}`,
    },
  ];

  if (input.excursionSintra) {
    categorias.push({
      id: 'excursion',
      label: 'Día en Sintra',
      rango: escalar(EXCURSION_SINTRA, personas),
      base: `Tren, transporte local y dos entradas · ${personas} ${personas === 1 ? 'persona' : 'personas'}`,
    });
  }

  const bruto = categorias.reduce<Rango>(
    (acumulado, categoria) => sumar(acumulado, categoria.rango),
    { min: 0, max: 0 }
  );

  return {
    dias,
    personas,
    noches,
    habitaciones,
    categorias: categorias.map((categoria) => ({
      ...categoria,
      rango: redondearRango(categoria.rango),
    })),
    total: redondearRango(bruto),
    porPersona: redondearRango(escalar(bruto, 1 / personas)),
    porPersonaYDia: redondearRango(escalar(bruto, 1 / (personas * dias)), 1),
  };
}

/** Formatea un rango en euros, sin decimales. */
export function formatRango(rango: Rango): string {
  if (rango.min === rango.max) return `${rango.min} €`;
  return `${rango.min} – ${rango.max} €`;
}
