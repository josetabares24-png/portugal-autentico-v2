'use client';

import Icon from '@/components/Icon';
import { formatImpacto, type Sugerencia } from '@/lib/budget-optimizer';

/*
 * «Cómo gastar menos».
 *
 * No es una lista de consejos: cada línea es un escenario real, calculado con
 * el mismo motor que el presupuesto que se está viendo, y el botón lo aplica
 * de verdad. Por eso el impacto se llama «impacto estimado» y no «ahorro»:
 * es la diferencia entre dos estimaciones nuestras, no una promesa.
 *
 * Las sugerencias las genera `src/lib/budget-optimizer.ts`. Aquí no se calcula
 * nada, sólo se pinta.
 *
 * Presentación: las dos primeras se ven siempre, sin desplegar nada. Esconder
 * detrás de un acordeón la única parte accionable del resultado era pedirle a
 * la gente un clic para descubrir que existe. La tercera, si la hay, sí queda
 * detrás de «Ver más formas de gastar menos».
 */

function Fila({
  sugerencia,
  onAplicar,
}: {
  sugerencia: Sugerencia;
  onAplicar: (sugerencia: Sugerencia) => void;
}) {
  return (
    <li className="rounded-lg border border-border-soft bg-background-light p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-body text-[13px] font-semibold leading-snug text-text-main">
            {sugerencia.titulo}
          </p>
          <p className="mt-0.5 font-body text-[11px] leading-snug text-text-secondary">
            {sugerencia.descripcion}
          </p>
        </div>
        <span className="flex-shrink-0 text-right font-body text-sm font-semibold tabular-nums text-terracotta">
          {formatImpacto(sugerencia.impacto)}
        </span>
      </div>
      <button
        type="button"
        onClick={() => onAplicar(sugerencia)}
        className="btn-outline mt-2.5 min-h-11 w-full justify-center px-4 py-2 text-xs"
      >
        Aplicar cambio
      </button>
    </li>
  );
}

export function BudgetOptimizer({
  id,
  sugerencias,
  dominante,
  verMas,
  aplicada,
  puedeDeshacer,
  onVerMas,
  onAplicar,
  onDeshacer,
}: {
  id: string;
  sugerencias: readonly Sugerencia[];
  /** Frase de la partida que más pesa, si hay alguna. */
  dominante: string | null;
  verMas: boolean;
  /** Título de la última sugerencia aplicada, para la confirmación inline. */
  aplicada: string | null;
  puedeDeshacer: boolean;
  onVerMas: () => void;
  onAplicar: (sugerencia: Sugerencia) => void;
  onDeshacer: () => void;
}) {
  const visibles = verMas ? sugerencias : sugerencias.slice(0, 2);
  const ocultas = sugerencias.length - visibles.length;

  return (
    <div id={id} className="rounded-xl border border-gold/40 bg-gold/[0.07] p-4 md:p-5">
      {dominante && (
        <p className="flex items-start gap-2 font-body text-sm leading-snug text-text-main">
          <Icon name="lightbulb" size={16} className="mt-0.5 flex-shrink-0 text-gold-dark" />
          <span>
            Ahora mismo, <strong className="font-semibold">{dominante}</strong> es la partida que
            más pesa.
          </span>
        </p>
      )}

      {aplicada && (
        <p
          role="status"
          className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg bg-white px-3 py-2 font-body text-xs text-text-main"
        >
          <span>
            <span className="font-semibold">Cambio aplicado:</span> {aplicada}
          </span>
          {puedeDeshacer && (
            <button
              type="button"
              onClick={onDeshacer}
              className="font-semibold text-terracotta underline underline-offset-2 hover:no-underline"
            >
              Deshacer
            </button>
          )}
        </p>
      )}

      {sugerencias.length > 0 ? (
        <>
          <p className="mt-3 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
            Cómo gastar menos
          </p>
          <ul className="mt-2.5 space-y-2">
            {visibles.map((s) => (
              <Fila key={s.id} sugerencia={s} onAplicar={onAplicar} />
            ))}
          </ul>

          {ocultas > 0 && (
            <button
              type="button"
              onClick={onVerMas}
              aria-expanded={verMas}
              className="mt-2.5 min-h-11 font-body text-xs font-semibold text-terracotta underline underline-offset-4 hover:no-underline"
            >
              Ver más formas de gastar menos
            </button>
          )}

          <p className="mt-2.5 font-body text-[11px] leading-relaxed text-text-secondary">
            El impacto sale de comparar dos estimaciones nuestras. No es un precio.
          </p>
        </>
      ) : (
        <p className="mt-3 font-body text-xs leading-relaxed text-text-secondary">
          Ya estás en la opción más económica de alojamiento, comida y transporte.
        </p>
      )}
    </div>
  );
}
