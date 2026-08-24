/**
 * Estimación de presupuesto para un viaje a Lisboa.
 *
 * Reglas de diseño que sostienen el módulo entero y que conviene no deshacer
 * sin pensarlo:
 *
 * 1. **Lo estimado son rangos; lo que introduce el usuario, no.** Un
 *    presupuesto de viaje no se puede calcular: depende de la temporada, de
 *    la antelación con la que se reserve y de decisiones que la persona
 *    todavía no ha tomado. Devolver «487 €» sería precisión falsa. Pero si
 *    alguien ya tiene el alojamiento reservado por 520 €, ese dato es suyo y
 *    exacto: entra con `min === max` y no se le inventa un margen encima.
 *
 * 2. **No se citan precios oficiales.** Ni tarifas de transporte ni entradas
 *    concretas. Son datos volátiles que este proyecto ya ha tenido que
 *    corregir varias veces, y una calculadora los congelaría en el código.
 *    Las atracciones se estiman por clase de entrada —baja, media, alta—, que
 *    es una aproximación editorial nuestra y así se declara.
 *
 * 3. **Nada está acoplado en secreto.** Las noches las decide quien viaja, no
 *    una resta oculta sobre los días. La excursión a Sintra cuenta su
 *    logística y nada más: las entradas de allí se marcan una a una, como las
 *    de Lisboa, así que no hay forma de contarlas dos veces.
 *
 * 4. **Es una función pura y determinista.** Mismo input, mismo output, sin
 *    `Math.random`, sin fechas del sistema y sin estado. Además no importa
 *    nada: ni alias, ni datos, ni React. Así se puede probar de verdad (ver
 *    `scripts/test-budget-calculator.mjs`, que lo carga directamente en Node)
 *    y el resultado no cambia entre el servidor y el cliente.
 */

export type NivelAlojamiento = 'economico' | 'intermedio' | 'superior';
export type NivelComida = 'ahorro' | 'mixto' | 'restaurantes';
export type NivelTransporte = 'a-pie' | 'publico' | 'publico-taxi';

/** Dónde está la atracción. Decide si la excursión a Sintra tiene sentido. */
export type ZonaAtraccion = 'lisboa' | 'sintra';

/** Tramo de precio de una entrada. No es un precio: es una clase de gasto. */
export type ClaseEntrada = 'baja' | 'media' | 'alta';

export type CategoriaId =
  | 'alojamiento'
  | 'comida'
  | 'transporte'
  | 'atracciones'
  | 'excursion'
  | 'vuelos';

/** De dónde sale una cifra: la estimamos nosotros o la puso quien viaja. */
export type OrigenImporte = 'estimado' | 'introducido';

export interface Rango {
  min: number;
  max: number;
}

/** Alojamiento: o se estima por nivel, o se introduce el importe real. */
export type AlojamientoInput =
  | { modo: 'estimado'; nivel: NivelAlojamiento }
  | { modo: 'propio'; total: number };

export interface BudgetInput {
  /** Días en la ciudad. Se limita a 1-14. */
  dias: number;
  /** Noches de alojamiento. Las decide el usuario. Se limita a 0-14. */
  noches: number;
  /** Personas que viajan juntas y comparten alojamiento. Se limita a 1-8. */
  personas: number;
  alojamiento: AlojamientoInput;
  comida: NivelComida;
  transporte: NivelTransporte;
  /** Ids de `ATRACCIONES` que se piensan visitar. Los desconocidos se ignoran. */
  atracciones?: readonly string[];
  /** Un día completo fuera, en Sintra. Cuenta logística, no entradas. */
  excursionSintra: boolean;
  /** Coste total de los vuelos de todo el grupo, si ya se conoce. */
  vuelosTotal?: number;
}

export interface CategoriaResultado {
  id: CategoriaId;
  label: string;
  /** Total de la categoría para todo el grupo y todo el viaje. */
  rango: Rango;
  /** Qué se ha contado exactamente para llegar a ese rango. */
  base: string;
  origen: OrigenImporte;
}

export interface BudgetResult {
  dias: number;
  noches: number;
  personas: number;
  /** Habitaciones contadas: dos personas por habitación. */
  habitaciones: number;
  categorias: CategoriaResultado[];
  /** Todo el grupo, todo el viaje. */
  total: Rango;
  /** Una persona, todo el viaje. */
  porPersona: Rango;
  /** Una persona, un día. */
  porPersonaYDia: Rango;
  /**
   * Gasto en destino del grupo **sin alojamiento y sin vuelos**: comida,
   * transporte urbano, entradas y logística de excursión. Es la cifra
   * comparable entre viajeros, porque las dos partidas que más varían según
   * de dónde vengas y dónde duermas quedan fuera.
   */
  sinAlojamiento: Rango;
  /** `false` cuando no se ha introducido ningún importe de vuelos. */
  vuelosIncluidos: boolean;
  /** Las atracciones marcadas, ya resueltas y en el orden del catálogo. */
  atraccionesSeleccionadas: Atraccion[];
}

export const LIMITES = {
  diasMin: 1,
  diasMax: 14,
  nochesMin: 0,
  nochesMax: 14,
  personasMin: 1,
  personasMax: 8,
  /** Tope de cualquier importe introducido a mano. Evita cifras absurdas. */
  importeMax: 100_000,
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
 * Alojamiento estimado: **por habitación y noche**, no por persona. Es como
 * cobran los alojamientos, y así viajar solo sale caro en el cálculo igual
 * que sale caro en la realidad, sin necesidad de inventar un recargo.
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

/**
 * Clases de entrada. Son tramos editoriales nuestros, no tarifas: aquí no se
 * escribe el precio de ningún monumento, precisamente porque cambia.
 *
 * Importe por persona y visita.
 */
export const CLASES_ENTRADA: Record<ClaseEntrada, Rango> = {
  baja: { min: 5, max: 12 },
  media: { min: 12, max: 22 },
  alta: { min: 22, max: 40 },
};

export interface Atraccion {
  id: string;
  nombre: string;
  zona: ZonaAtraccion;
  clase: ClaseEntrada;
  /** Una línea para saber qué es sin salir de la página. */
  desc: string;
  /**
   * `id` del producto de `src/data/bookings.ts` con el que se compra la
   * entrada, si existe uno exacto. Es lo único que ata este módulo con el
   * catálogo comercial, y va por id a propósito: aquí no se escribe ninguna
   * URL ni ningún identificador de partner.
   *
   * Sin producto no se muestra ningún botón de compra. La estimación funciona
   * exactamente igual: nunca se enlaza a un producto parecido.
   */
  bookingProductId?: string;
}

/**
 * Las atracciones que se pueden marcar. Todas son sitios de pago que ya
 * aparecen en los itinerarios o en las guías del sitio; no es un catálogo de
 * todo lo visitable de Lisboa, ni pretende serlo.
 *
 * Miradores, barrios, iglesias de acceso libre y calles no están aquí porque
 * no cuestan nada: entrarían con rango 0 y sólo alargarían la lista.
 */
export const ATRACCIONES: readonly Atraccion[] = [
  {
    id: 'castelo-sao-jorge',
    nombre: 'Castelo de São Jorge',
    zona: 'lisboa',
    clase: 'media',
    desc: 'La panorámica más completa del centro histórico',
    bookingProductId: 'castelo-sao-jorge',
  },
  {
    id: 'mosteiro-jeronimos',
    nombre: 'Mosteiro dos Jerónimos',
    zona: 'lisboa',
    clase: 'media',
    desc: 'El claustro manuelino de Belém',
  },
  {
    id: 'torre-belem',
    nombre: 'Torre de Belém',
    zona: 'lisboa',
    clase: 'media',
    desc: 'La torre del río, con cola casi siempre',
  },
  {
    id: 'maat',
    nombre: 'MAAT',
    zona: 'lisboa',
    clase: 'baja',
    desc: 'Arte y arquitectura junto al Tajo, con su cubierta transitable',
  },
  {
    id: 'oceanario',
    nombre: 'Oceanário de Lisboa',
    zona: 'lisboa',
    clase: 'alta',
    desc: 'En Parque das Nações; el mejor refugio si llueve',
    bookingProductId: 'oceanario',
  },
  {
    id: 'palacio-pena',
    nombre: 'Palácio da Pena',
    zona: 'sintra',
    clase: 'alta',
    desc: 'El palacio de colores de Sintra, con entrada por franja horaria',
    bookingProductId: 'sintra-palacio-pena',
  },
  {
    id: 'quinta-regaleira',
    nombre: 'Quinta da Regaleira',
    zona: 'sintra',
    clase: 'media',
    desc: 'El pozo iniciático y sus jardines, también en Sintra',
  },
  {
    id: 'castelo-mouros',
    nombre: 'Castelo dos Mouros',
    zona: 'sintra',
    clase: 'baja',
    desc: 'Las murallas sobre Sintra, con las mejores vistas del valle',
  },
] as const;

/**
 * Excursión a Sintra: **sólo logística**, por persona y una sola vez. Tren de
 * ida y vuelta más moverse por allí, que es cuesta arriba y con los sitios
 * separados.
 *
 * No incluye ninguna entrada. Las de Sintra —Pena, Regaleira, Mouros— se
 * marcan una a una en la lista de atracciones, igual que las de Lisboa. Esa
 * es la regla que impide contarlas dos veces, y es una regla, no un ajuste:
 * lo que aquí se estima es el desplazamiento, nada más.
 */
const EXCURSION_SINTRA_LOGISTICA: Rango = { min: 12, max: 35 };

/**
 * Lo que la estimación deja fuera siempre. Se muestra en la página: un
 * presupuesto que no dice lo que no incluye engaña más que si no existiera.
 *
 * Los vuelos no están en esta lista porque ya no son una exclusión fija: se
 * pueden sumar introduciendo su importe. Cuando no se introduce, la página
 * lo dice aparte.
 */
export const NO_INCLUIDO: readonly string[] = [
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
  'Lo que estimamos nosotros son rangos anchos, no precios. Lo que cuesta un viaje depende de la temporada, de con cuánta antelación reserves y de decisiones que aún no has tomado.',
  'Lo que introduces tú —el alojamiento ya reservado y los vuelos— entra tal cual, sin rango ni margen añadido. Es tu dato, no una estimación nuestra.',
  'No se citan tarifas ni precios de entradas concretas: cambian, y una calculadora los dejaría congelados. Cada atracción se estima por tramo de entrada, que es una aproximación nuestra.',
  'Las noches las decides tú. Se sugieren una menos que los días porque suele ser así, pero puedes cambiarlas: tres días con tres noches es perfectamente posible.',
  'El alojamiento estimado se cuenta por habitación y noche, con dos personas por habitación. Viajando solo pagas la habitación entera, y así aparece en el cálculo.',
  'Comida y transporte se cuentan por persona y día, todos los días del viaje.',
  'Cada atracción marcada se suma una vez por persona. Las que no marcas no cuestan nada, porque no las visitas.',
  'El día en Sintra cuenta sólo el desplazamiento: tren y moverse por allí. Las entradas de Sintra se marcan una a una como las demás, así que no se cuentan dos veces.',
  'Los rangos estimados se redondean hacia fuera a múltiplos de 5 €: el mínimo hacia abajo y el máximo hacia arriba. El rango nunca se estrecha por redondeo, y los importes que introduces tú no se redondean.',
  'Mismos datos, mismo resultado. No hay ningún factor aleatorio.',
] as const;

function clamp(valor: number, min: number, max: number): number {
  if (!Number.isFinite(valor)) return min;
  return Math.min(max, Math.max(min, Math.round(valor)));
}

/**
 * Normaliza un importe introducido a mano. Negativos, `NaN`, `Infinity` y
 * texto se convierten en 0 en vez de propagarse: un input manipulado no puede
 * romper la página ni producir un total negativo.
 */
export function normalizarImporte(valor: unknown): number {
  const n = typeof valor === 'number' ? valor : Number(valor);
  if (!Number.isFinite(n) || n <= 0) return 0;
  return Math.min(Math.round(n), LIMITES.importeMax);
}

function escalar(rango: Rango, factor: number): Rango {
  return { min: rango.min * factor, max: rango.max * factor };
}

function sumar(a: Rango, b: Rango): Rango {
  return { min: a.min + b.min, max: a.max + b.max };
}

const CERO: Rango = { min: 0, max: 0 };

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

/** El rango de entrada de una atracción, según su clase. */
export function rangoDeAtraccion(atraccion: Atraccion): Rango {
  return CLASES_ENTRADA[atraccion.clase];
}

/** Una atracción del catálogo por su id, o `undefined` si no existe. */
export function getAtraccion(id: string): Atraccion | undefined {
  return ATRACCIONES.find((a) => a.id === id);
}

function plural(n: number, uno: string, varios: string): string {
  return `${n} ${n === 1 ? uno : varios}`;
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
  const noches = clamp(input.noches, LIMITES.nochesMin, LIMITES.nochesMax);
  const personas = clamp(input.personas, LIMITES.personasMin, LIMITES.personasMax);

  const habitaciones = Math.ceil(personas / PERSONAS_POR_HABITACION);

  const comida = buscar(OPCIONES_COMIDA, input.comida);
  const transporte = buscar(OPCIONES_TRANSPORTE, input.transporte);

  // --- Alojamiento: estimado por nivel, o el importe real del usuario ---
  let alojamiento: CategoriaResultado;
  if (input.alojamiento?.modo === 'propio') {
    const total = normalizarImporte(input.alojamiento.total);
    alojamiento = {
      id: 'alojamiento',
      label: 'Alojamiento',
      rango: { min: total, max: total },
      base: total > 0 ? 'Importe que ya tienes reservado' : 'Todavía sin importe',
      origen: 'introducido',
    };
  } else {
    const nivel = buscar(
      OPCIONES_ALOJAMIENTO,
      input.alojamiento?.modo === 'estimado' ? input.alojamiento.nivel : 'intermedio'
    );
    alojamiento = {
      id: 'alojamiento',
      label: 'Alojamiento',
      rango: escalar(nivel.rango, noches * habitaciones),
      base:
        noches === 0
          ? 'Sin noches: no se cuenta alojamiento'
          : `${plural(noches, 'noche', 'noches')} · ${plural(habitaciones, 'habitación', 'habitaciones')}`,
      origen: 'estimado',
    };
  }

  // --- Atracciones marcadas ---
  const ids = input.atracciones ?? [];
  const seleccionadas = ATRACCIONES.filter((a) => ids.includes(a.id));
  const atraccionesRango = seleccionadas.reduce<Rango>(
    (acc, a) => sumar(acc, escalar(rangoDeAtraccion(a), personas)),
    CERO
  );

  const categorias: CategoriaResultado[] = [
    alojamiento,
    {
      id: 'comida',
      label: 'Comida y bebida',
      rango: escalar(comida.rango, dias * personas),
      base: `${plural(dias, 'día', 'días')} · ${plural(personas, 'persona', 'personas')}`,
      origen: 'estimado',
    },
    {
      id: 'transporte',
      label: 'Transporte en la ciudad',
      rango: escalar(transporte.rango, dias * personas),
      base: `${plural(dias, 'día', 'días')} · ${plural(personas, 'persona', 'personas')}`,
      origen: 'estimado',
    },
    {
      id: 'atracciones',
      label: 'Entradas',
      rango: atraccionesRango,
      base:
        seleccionadas.length === 0
          ? 'Ninguna marcada'
          : `${plural(seleccionadas.length, 'entrada', 'entradas')} · ${plural(personas, 'persona', 'personas')}`,
      origen: 'estimado',
    },
  ];

  if (input.excursionSintra) {
    categorias.push({
      id: 'excursion',
      label: 'Ir y volver de Sintra',
      rango: escalar(EXCURSION_SINTRA_LOGISTICA, personas),
      base: `Tren y transporte local, sin entradas · ${plural(personas, 'persona', 'personas')}`,
      origen: 'estimado',
    });
  }

  const vuelos = normalizarImporte(input.vuelosTotal);
  const vuelosIncluidos = vuelos > 0;
  if (vuelosIncluidos) {
    categorias.push({
      id: 'vuelos',
      label: 'Vuelos',
      rango: { min: vuelos, max: vuelos },
      base: 'Importe de todo el grupo, el que has introducido',
      origen: 'introducido',
    });
  }

  const bruto = categorias.reduce<Rango>(
    (acumulado, categoria) => sumar(acumulado, categoria.rango),
    CERO
  );

  // Gasto en destino: fuera alojamiento y vuelos, que son las dos partidas
  // que más dependen de dónde vengas y de dónde duermas.
  const enDestino = categorias
    .filter((c) => c.id !== 'alojamiento' && c.id !== 'vuelos')
    .reduce<Rango>((acumulado, categoria) => sumar(acumulado, categoria.rango), CERO);

  return {
    dias,
    noches,
    personas,
    habitaciones,
    categorias: categorias.map((categoria) => ({
      ...categoria,
      // Lo que introduce el usuario no se redondea: es su cifra, y redondearla
      // rompería la única promesa que tiene, que es ser exacta.
      rango: categoria.origen === 'introducido' ? categoria.rango : redondearRango(categoria.rango),
    })),
    total: redondearRango(bruto),
    porPersona: redondearRango(escalar(bruto, 1 / personas)),
    porPersonaYDia: redondearRango(escalar(bruto, 1 / (personas * dias)), 1),
    sinAlojamiento: redondearRango(enDestino),
    vuelosIncluidos,
    atraccionesSeleccionadas: seleccionadas.slice(),
  };
}

/** Formatea un rango en euros, sin decimales. */
export function formatRango(rango: Rango): string {
  if (rango.min === rango.max) return `${rango.min} €`;
  return `${rango.min} – ${rango.max} €`;
}
