'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import { ATRACCIONES, type Atraccion } from '@/lib/budget-calculator';

/*
 * «Ver más actividades»: el resto del catálogo, sin meterlo en el formulario.
 *
 * El formulario enseña las ocho destacadas y ahí se queda. Las demás viven
 * aquí dentro porque una lista de veinte tarjetas en la columna de la
 * izquierda no es un selector, es un obstáculo entre la persona y su
 * presupuesto.
 *
 * En móvil sube desde abajo ocupando el ancho entero; en escritorio es un
 * panel a la derecha. Es el mismo componente: sólo cambian las clases de
 * posición, así que no hay dos comportamientos que mantener sincronizados.
 *
 * **No tiene estado propio de selección.** Marca y desmarca sobre el mismo
 * `atracciones[]` de la página, en directo. Por eso cerrar no pierde nada:
 * no hay nada que confirmar, porque nunca hubo un borrador aparte. El total
 * de la derecha se mueve mientras el panel sigue abierto, que es justo lo que
 * alguien quiere ver al plantearse si añade una actividad más.
 */

function Fila({
  atraccion,
  marcada,
  onAlternar,
}: {
  atraccion: Atraccion;
  marcada: boolean;
  onAlternar: (id: string) => void;
}) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors duration-150 ${
        marcada ? 'border-gold bg-white' : 'border-border-soft bg-white/60 hover:border-taupe'
      }`}
    >
      <input
        type="checkbox"
        checked={marcada}
        onChange={() => onAlternar(atraccion.id)}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border ${
          marcada ? 'border-terracotta bg-terracotta text-white' : 'border-border-soft bg-white'
        }`}
      >
        {marcada && <Icon name="check" size={11} />}
      </span>
      <span className="min-w-0">
        <span className="block font-body text-[13px] font-semibold leading-snug text-text-main">
          {atraccion.nombre}
        </span>
        <span className="mt-0.5 block font-body text-[12px] leading-relaxed text-text-secondary">
          {atraccion.desc}
        </span>
      </span>
    </label>
  );
}

export function BudgetActivityDrawer({
  atracciones,
  seleccionadas,
  onAlternar,
  onCerrar,
}: {
  /** Las que van dentro del panel. Nunca las destacadas. */
  atracciones: readonly Atraccion[];
  seleccionadas: readonly string[];
  onAlternar: (id: string) => void;
  onCerrar: () => void;
}) {
  const tituloId = useId();
  const buscadorRef = useRef<HTMLInputElement>(null);
  const [busqueda, setBusqueda] = useState('');

  // Esc cierra. Es lo que espera cualquiera que abra un panel.
  useEffect(() => {
    const alPulsar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') onCerrar();
    };
    document.addEventListener('keydown', alPulsar);
    return () => document.removeEventListener('keydown', alPulsar);
  }, [onCerrar]);

  useEffect(() => {
    buscadorRef.current?.focus();
  }, []);

  const grupos = useMemo(() => {
    const termino = busqueda.trim().toLowerCase();
    const coincide = (a: Atraccion) =>
      termino === '' ||
      a.nombre.toLowerCase().includes(termino) ||
      a.desc.toLowerCase().includes(termino);

    const filtradas = atracciones.filter(coincide);
    return [
      { titulo: 'Lisboa', lista: filtradas.filter((a) => a.zona === 'lisboa') },
      { titulo: 'Sintra', lista: filtradas.filter((a) => a.zona === 'sintra') },
    ].filter((g) => g.lista.length > 0);
  }, [atracciones, busqueda]);

  const sinResultados = grupos.length === 0;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/*
        El fondo cierra al tocarlo. Es un `button` y no un `div` con onClick
        para que exista de verdad para el teclado y para quien navegue con
        lector de pantalla, en vez de ser una trampa silenciosa.
      */}
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onCerrar}
        className="absolute inset-0 bg-night/40"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        className="relative flex max-h-[85vh] w-full flex-col rounded-t-2xl bg-background-light shadow-premium-lg sm:max-w-lg sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border-soft p-4 sm:p-5">
          <div className="min-w-0">
            <h3
              id={tituloId}
              className="font-display text-lg font-semibold leading-tight text-text-main"
            >
              Más actividades
            </h3>
            <p className="mt-1 font-body text-[12px] leading-relaxed text-text-secondary">
              Se suman a tu presupuesto según las vas marcando.
            </p>
          </div>
          <button
            type="button"
            onClick={onCerrar}
            aria-label="Cerrar"
            className="-mr-1 -mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-white hover:text-text-main"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="border-b border-border-soft px-4 py-3 sm:px-5">
          <label htmlFor="buscar-actividad" className="sr-only">
            Buscar una actividad por nombre
          </label>
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
            >
              <Icon name="search" size={15} />
            </span>
            <input
              id="buscar-actividad"
              ref={buscadorRef}
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por nombre"
              className="form-input pl-9 text-sm"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {sinResultados ? (
            <p className="py-6 text-center font-body text-sm text-text-secondary">
              Ninguna actividad coincide con «{busqueda.trim()}».
            </p>
          ) : (
            <div className="space-y-5">
              {grupos.map((grupo) => (
                <fieldset key={grupo.titulo} className="border-0 p-0">
                  <legend className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
                    {grupo.titulo}
                  </legend>
                  <div className="space-y-2">
                    {grupo.lista.map((atraccion) => (
                      <Fila
                        key={atraccion.id}
                        atraccion={atraccion}
                        marcada={seleccionadas.includes(atraccion.id)}
                        onAlternar={onAlternar}
                      />
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
          )}
        </div>

        <div
          className="border-t border-border-soft p-4 sm:p-5"
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))' }}
        >
          <button
            type="button"
            onClick={onCerrar}
            className="btn-primary min-h-11 w-full justify-center py-2.5 text-sm"
          >
            Hecho
          </button>
        </div>
      </div>
    </div>
  );
}

/** Cuántas de las marcadas vienen del panel y no del formulario. */
export function contarExtraSeleccionadas(seleccionadas: readonly string[]): number {
  return ATRACCIONES.filter((a) => !a.destacada && seleccionadas.includes(a.id)).length;
}
