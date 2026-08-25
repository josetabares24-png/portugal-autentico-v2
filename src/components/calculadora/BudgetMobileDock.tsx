'use client';

import { formatRecomendado } from '@/lib/budget-recommended';

/*
 * Resumen fijo inferior, sólo en móvil y tablet pequeña.
 *
 * Es un resumen, no un segundo resultado: total, por persona y la acción de
 * optimizar. Nada más. El panel completo sigue siendo «2. Tu presupuesto», y
 * duplicarlo aquí sería dos verdades compitiendo en la misma pantalla.
 *
 * Se oculta solo cuando el panel completo está a la vista —de eso se encarga
 * la página con un IntersectionObserver—, porque en ese momento el resumen
 * sobra. Si el observador no existe en el navegador, el dock simplemente se
 * queda: preferimos que esté de más a que falte.
 *
 * En escritorio no aparece: allí el panel ya está pegado al scroll.
 */

export function BudgetMobileDock({
  total,
  porPersona,
  visible,
  onOptimizar,
}: {
  /** La cifra recomendada, no el rango: en el dock no cabe un intervalo. */
  total: number;
  porPersona: number;
  visible: boolean;
  onOptimizar: () => void;
}) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 rounded-t-2xl bg-night text-white shadow-premium-lg transition-all duration-200 lg:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-hidden={!visible}
    >
      <div className="flex items-center justify-between gap-3 px-5 py-3.5">
        <div className="min-w-0">
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
            Tu presupuesto recomendado
          </p>
          <p className="font-display text-lg font-semibold leading-tight text-white">
            {formatRecomendado(total)}
          </p>
          <p className="font-body text-[11px] leading-tight text-white/70">
            ≈ {formatRecomendado(porPersona)} por persona
          </p>
        </div>
        <button
          type="button"
          onClick={onOptimizar}
          tabIndex={visible ? 0 : -1}
          className="btn-primary min-h-11 flex-shrink-0 px-4 py-2.5 text-xs"
        >
          Quiero gastar menos
        </button>
      </div>
    </div>
  );
}
