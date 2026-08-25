'use client';

import {
  formatRango,
  type CategoriaId,
  type CategoriaResultado,
  type Rango,
} from '@/lib/budget-calculator';

/*
 * Anillo de reparto del presupuesto.
 *
 * Qué representa, y por qué: **alojamiento más gasto en destino**. Los vuelos
 * quedan fuera a propósito. No son un gasto de Lisboa sino un importe externo
 * que la persona ya conoce, y meterlos dentro haría que el anillo dijera cosas
 * distintas para dos viajes idénticos según de dónde venga cada uno. Cuando
 * hay importe de vuelos, el centro lo dice: «sin vuelos».
 *
 * El día en Sintra se suma a Transporte, que es literalmente lo que esa
 * categoría cuenta —el tren y moverse por allí—, no entradas.
 *
 * **El anillo no calcula dinero.** Los importes salen tal cual de
 * `resultado.categorias`. Para repartir el círculo hace falta un número por
 * categoría y no un rango, así que se usa el punto medio `(min + max) / 2`
 * ÚNICAMENTE como proporción visual. Ese punto medio no se enseña en ninguna
 * parte ni se presenta como presupuesto: la verdad visible sigue siendo el
 * rango, que está en el desglose de al lado.
 */

interface Segmento {
  id: string;
  label: string;
  color: string;
  /** Sólo para el reparto del círculo. Nunca se muestra como importe. */
  peso: number;
  porcentaje: number;
  /** El rango real de la categoría, que sí se muestra. */
  rango: Rango;
}

const COLORES: Record<string, string> = {
  alojamiento: '#1a2b4a', // night
  comida: '#B8472E', // terracotta
  transporte: '#C9974A', // gold
  atracciones: '#6F665D', // taupe
};

const ETIQUETAS: Record<string, string> = {
  alojamiento: 'Alojamiento',
  comida: 'Comida',
  transporte: 'Transporte',
  atracciones: 'Entradas y actividades',
};

const ORDEN: CategoriaId[] = ['alojamiento', 'comida', 'transporte', 'atracciones'];

/** Con artículo, para poder meterlo dentro de una frase sin que chirríe. */
const FRASES: Record<string, string> = {
  alojamiento: 'el alojamiento',
  comida: 'la comida',
  transporte: 'el transporte',
  atracciones: 'las entradas',
};

function medio(rango: Rango): number {
  return (rango.min + rango.max) / 2;
}

/**
 * Reparte los porcentajes y corrige el redondeo: si al redondear no suman
 * 100, la diferencia se le da al segmento más grande. Sin decimales.
 */
function repartirPorcentajes(pesos: number[]): number[] {
  const total = pesos.reduce((a, b) => a + b, 0);
  if (total <= 0) return pesos.map(() => 0);

  const crudos = pesos.map((p) => (p / total) * 100);
  const redondeados = crudos.map((p) => Math.round(p));
  const diferencia = 100 - redondeados.reduce((a, b) => a + b, 0);
  if (diferencia !== 0) {
    let mayor = 0;
    for (let i = 1; i < redondeados.length; i++) {
      if (redondeados[i] > redondeados[mayor]) mayor = i;
    }
    redondeados[mayor] += diferencia;
  }
  return redondeados;
}

export function BudgetDonut({
  categorias,
  total,
  vuelos,
}: {
  categorias: readonly CategoriaResultado[];
  /** Total del grupo, tal y como se muestra arriba en el panel. */
  total: Rango;
  /** Importe de vuelos si lo hay. Se resta del centro, no entra en el anillo. */
  vuelos: number | null;
}) {
  const porId = new Map(categorias.map((c) => [c.id, c.rango]));
  const excursion = porId.get('excursion');

  const brutos = ORDEN.map((id) => {
    const propio = porId.get(id) ?? { min: 0, max: 0 };
    // El día en Sintra es desplazamiento: va con transporte, también en el
    // importe que se enseña al lado del porcentaje.
    const rango: Rango =
      id === 'transporte' && excursion
        ? { min: propio.min + excursion.min, max: propio.max + excursion.max }
        : propio;
    return { id, label: ETIQUETAS[id], color: COLORES[id], peso: medio(rango), rango };
  });

  const porcentajes = repartirPorcentajes(brutos.map((b) => b.peso));
  const segmentos: Segmento[] = brutos
    .map((b, i) => ({ ...b, porcentaje: porcentajes[i] }))
    .filter((s) => s.peso > 0);

  const totalAnillo: Rango =
    vuelos && vuelos > 0 ? { min: total.min - vuelos, max: total.max - vuelos } : total;

  const resumenAccesible = segmentos.length
    ? `Reparto aproximado del presupuesto: ${segmentos
        .map((s) => `${s.label.toLowerCase()} ${s.porcentaje} %, ${formatRango(s.rango)}`)
        .join('; ')}.`
    : 'Todavía no hay gasto que repartir.';

  // Circunferencia 100 para que cada porcentaje sea directamente su longitud.
  const RADIO = 15.915;

  // Cada tramo arranca donde acaban los anteriores. La suma previa se calcula
  // a partir de la propia lista, sin acumulador mutable: con cuatro segmentos
  // como mucho, la claridad vale más que el coste.
  const tramos = segmentos.map((s, i) => ({
    ...s,
    dash: `${s.porcentaje} ${100 - s.porcentaje}`,
    offset: 100 - segmentos.slice(0, i).reduce((suma, previo) => suma + previo.porcentaje, 0),
  }));

  return (
    <div className="sm:flex sm:items-center sm:gap-6">
      <div className="relative mx-auto h-36 w-36 flex-shrink-0 sm:mx-0">
        <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="21" cy="21" r={RADIO} fill="none" stroke="#e8e2d9" strokeWidth="5" />
          {tramos.map((s) => (
            <circle
              key={s.id}
              cx="21"
              cy="21"
              r={RADIO}
              fill="none"
              stroke={s.color}
              strokeWidth="5"
              strokeDasharray={s.dash}
              strokeDashoffset={s.offset}
              className="budget-donut-segmento"
            />
          ))}
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
            {vuelos && vuelos > 0 ? 'Sin vuelos' : 'Total'}
          </span>
          <span className="mt-0.5 font-body text-[13px] font-semibold leading-tight text-text-main">
            {formatRango(totalAnillo)}
          </span>
        </div>
      </div>

      <div className="mt-4 sm:mt-0 sm:flex-1">
        <ul className="space-y-2">
          {segmentos.map((s) => (
            <li key={s.id} className="flex items-baseline gap-2.5">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 flex-shrink-0 translate-y-0.5 rounded-sm"
                style={{ backgroundColor: s.color }}
              />
              <span className="min-w-0 flex-1 font-body text-sm text-text-main">{s.label}</span>
              <span className="font-body text-sm font-semibold tabular-nums text-text-main">
                {s.porcentaje} %
              </span>
              <span className="w-[6.5rem] text-right font-body text-xs tabular-nums text-text-secondary">
                {formatRango(s.rango)}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-2.5 font-body text-xs leading-relaxed text-text-secondary">
          Proporción orientativa. Los vuelos no entran en el anillo.
        </p>
        {/* El color no puede ser la única forma de leer el gráfico. */}
        <p className="sr-only">{resumenAccesible}</p>
      </div>
    </div>
  );
}

/** La categoría que más pesa, para el bloque «Qué pesa más». */
export function categoriaDominante(
  categorias: readonly CategoriaResultado[]
): { id: string; label: string; frase: string } | null {
  const porId = new Map(categorias.map((c) => [c.id, c.rango]));
  const excursion = porId.get('excursion');

  let mejor: { id: string; label: string; peso: number } | null = null;
  for (const id of ORDEN) {
    const rango = porId.get(id);
    let peso = rango ? medio(rango) : 0;
    if (id === 'transporte' && excursion) peso += medio(excursion);
    if (peso > 0 && (!mejor || peso > mejor.peso)) {
      mejor = { id, label: ETIQUETAS[id], peso };
    }
  }
  return mejor ? { id: mejor.id, label: mejor.label, frase: FRASES[mejor.id] } : null;
}
