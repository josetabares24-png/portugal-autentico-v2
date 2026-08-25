'use client';

import { type CategoriaId } from '@/lib/budget-calculator';
import {
  formatRecomendado,
  type CategoriaRecomendada,
  type RecommendedBudget,
} from '@/lib/budget-recommended';

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
 * **El anillo no calcula dinero.** Reparte las cifras recomendadas por
 * categoría, las mismas que están en el desglose de al lado. Antes usaba el
 * punto medio de cada rango como proporción y no lo enseñaba en ninguna parte;
 * ahora que existe una cifra recomendada explícita, esa doble contabilidad
 * sobra: una sola fuente, y los porcentajes se pueden comprobar dividiendo los
 * importes que se ven.
 */

interface Segmento {
  id: string;
  label: string;
  color: string;
  /** Importe recomendado de la categoría. Es a la vez peso y cifra visible. */
  importe: number;
  porcentaje: number;
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

export function BudgetDonut({ recomendado }: { recomendado: RecommendedBudget }) {
  const importeDe = (id: CategoriaId) =>
    recomendado.categorias.find((c) => c.id === id)?.importe ?? 0;

  const vuelos = importeDe('vuelos');
  const excursion = importeDe('excursion');

  const brutos = ORDEN.map((id) => ({
    id,
    label: ETIQUETAS[id],
    color: COLORES[id],
    // El día en Sintra es desplazamiento: va con transporte, también en el
    // importe que se enseña al lado del porcentaje.
    importe: id === 'transporte' ? importeDe(id) + excursion : importeDe(id),
  }));

  const porcentajes = repartirPorcentajes(brutos.map((b) => b.importe));
  const segmentos: Segmento[] = brutos
    .map((b, i) => ({ ...b, porcentaje: porcentajes[i] }))
    .filter((s) => s.importe > 0);

  // Lo que suma el anillo. No es el total: los vuelos quedan fuera.
  const totalAnillo = segmentos.reduce((suma, s) => suma + s.importe, 0);

  const resumenAccesible = segmentos.length
    ? `Reparto del presupuesto recomendado: ${segmentos
        .map((s) => `${s.label.toLowerCase()} ${s.porcentaje} %, ${formatRecomendado(s.importe)}`)
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
            {vuelos > 0 ? 'Sin vuelos' : 'Total'}
          </span>
          <span className="mt-0.5 font-body text-[15px] font-semibold leading-tight text-text-main">
            {formatRecomendado(totalAnillo)}
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
              <span className="w-[4.5rem] text-right font-body text-xs tabular-nums text-text-secondary">
                {formatRecomendado(s.importe)}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-2.5 font-body text-xs leading-relaxed text-text-secondary">
          Reparto del presupuesto recomendado.{' '}
          {vuelos > 0
            ? 'Los vuelos quedan fuera del anillo: son un importe tuyo y externo a Lisboa.'
            : 'Los vuelos, si los añades, quedarán fuera del anillo.'}
        </p>
        {/* El color no puede ser la única forma de leer el gráfico. */}
        <p className="sr-only">{resumenAccesible}</p>
      </div>
    </div>
  );
}

/** La categoría que más pesa, para el bloque «Qué pesa más». */
export function categoriaDominante(
  categorias: readonly CategoriaRecomendada[]
): { id: string; label: string; frase: string } | null {
  const importeDe = (id: CategoriaId) =>
    categorias.find((c) => c.id === id)?.importe ?? 0;
  const excursion = importeDe('excursion');

  let mejor: { id: string; label: string; peso: number } | null = null;
  for (const id of ORDEN) {
    const peso = id === 'transporte' ? importeDe(id) + excursion : importeDe(id);
    if (peso > 0 && (!mejor || peso > mejor.peso)) {
      mejor = { id, label: ETIQUETAS[id], peso };
    }
  }
  return mejor ? { id: mejor.id, label: mejor.label, frase: FRASES[mejor.id] } : null;
}
