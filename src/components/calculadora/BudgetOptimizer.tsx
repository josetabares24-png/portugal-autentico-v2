'use client';

import Icon from '@/components/Icon';
import { formatImpacto, type Sugerencia } from '@/lib/budget-optimizer';

/*
 * «Cómo podrías gastar menos».
 *
 * No es una lista de consejos: cada línea es un escenario real, calculado con
 * el mismo motor que el presupuesto que se está viendo, y el botón lo aplica
 * de verdad. Por eso el impacto se llama «impacto estimado» y no «ahorro»:
 * es la diferencia entre dos estimaciones nuestras, no una promesa.
 *
 * Las sugerencias las genera `src/lib/budget-optimizer.ts`. Aquí no se calcula
 * nada, sólo se pinta.
 */

export function BudgetOptimizer({
  id,
  abierto,
  sugerencias,
  aplicada,
  puedeDeshacer,
  onToggle,
  onAplicar,
  onDeshacer,
}: {
  id: string;
  abierto: boolean;
  sugerencias: readonly Sugerencia[];
  /** Título de la última sugerencia aplicada, para la confirmación inline. */
  aplicada: string | null;
  puedeDeshacer: boolean;
  onToggle: () => void;
  onAplicar: (sugerencia: Sugerencia) => void;
  onDeshacer: () => void;
}) {
  const hayAlgo = sugerencias.length > 0;

  return (
    <div className="border-t border-border-soft pt-4">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={abierto}
        aria-controls={id}
        className="flex min-h-11 w-full items-center justify-between gap-3 text-left"
      >
        <span className="font-body text-sm font-semibold text-text-main">
          Quiero gastar menos
        </span>
        <Icon
          name="expand_more"
          size={18}
          className={`flex-shrink-0 text-text-secondary transition-transform duration-200 ${
            abierto ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div id={id} hidden={!abierto} className="pt-3">
        {aplicada && (
          <p
            role="status"
            className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg bg-gold/12 px-3 py-2 font-body text-xs text-text-main"
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

        {hayAlgo ? (
          <>
            <p className="mb-3 font-body text-xs leading-relaxed text-text-secondary">
              Cada opción es el mismo viaje con una elección distinta. El impacto sale de
              comparar las dos estimaciones, no es un precio.
            </p>
            <ul className="space-y-2.5">
              {sugerencias.map((s) => (
                <li
                  key={s.id}
                  className="rounded-lg border border-border-soft bg-background-light p-3"
                >
                  <p className="font-body text-sm font-semibold text-text-main">{s.titulo}</p>
                  <p className="mt-0.5 font-body text-xs leading-snug text-text-secondary">
                    {s.descripcion}
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-body text-sm font-semibold tabular-nums text-terracotta">
                      {formatImpacto(s.impacto)}
                      <span className="ml-1.5 font-normal text-xs text-text-secondary">
                        impacto estimado
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onAplicar(s)}
                      className="btn-outline min-h-11 px-4 py-2 text-xs"
                    >
                      Aplicar cambio
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="font-body text-xs leading-relaxed text-text-secondary">
            Ya estás en la opción más económica de alojamiento, comida y transporte. Lo que
            queda por debajo de esto no es ahorrar: es viajar peor.
          </p>
        )}
      </div>
    </div>
  );
}
