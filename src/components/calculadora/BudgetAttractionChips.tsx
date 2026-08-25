'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import { ATRACCIONES, type Atraccion } from '@/lib/budget-calculator';
import { BudgetActivityDrawer } from './BudgetActivityDrawer';

/*
 * Selector de lugares de pago.
 *
 * **Los nombres van completos.** El intento anterior los abrevió —«Castelo»,
 * «Pena», «Mouros»— para que cupieran en una línea, y eso es pedirle a alguien
 * que marque una casilla sin saber del todo qué está marcando. Aquí se paga
 * con quince píxeles de alto y se cobra en claridad: la tarjeta crece hasta
 * dos líneas y no hay truncado, ni puntos suspensivos, ni `line-clamp`.
 *
 * **Lisboa y Sintra van separadas.** El grupo lo dice una vez, en su
 * encabezado, en lugar de repetir una etiqueta «Sintra» dentro de cada
 * tarjeta: además de ser redundante, ese distintivo se comía el ancho que
 * necesitaba el nombre.
 *
 * **El formulario no crece con el catálogo.** Aquí sólo se pintan las
 * destacadas, que hoy son ocho. Las demás viven detrás de «Ver más
 * actividades», en un panel: si entraran en la columna, esto dejaría de ser un
 * selector y pasaría a ser un obstáculo entre la persona y su presupuesto.
 * Cuáles son destacadas lo dice el propio catálogo, con `destacada`, no una
 * lista escrita aquí: así una atracción nueva no se cuela delante sin que
 * alguien lo haya decidido al añadirla.
 *
 * El estado vive en un único sitio, `atracciones[]` de la página, así que una
 * atracción no puede quedar marcada dos veces aunque se pinte en dos listas, y
 * lo que se marca en el panel sigue marcado al cerrarlo.
 */

function Chip({
  atraccion,
  marcada,
  onAlternar,
}: {
  atraccion: Atraccion;
  marcada: boolean;
  onAlternar: (id: string) => void;
}) {
  /*
   * El indicador va en la esquina, en posición absoluta, no en la fila del
   * texto. Cuando compartía línea con el nombre se llevaba dieciséis píxeles
   * de ancho más su hueco justo donde hacían falta: «Mosteiro dos Jerónimos»
   * a 375 px no tenía sitio. Ahora el nombre dispone de casi toda la tarjeta
   * y el `pr` reserva lo justo para que el indicador no pise ninguna letra.
   *
   * Toda la tarjeta sigue siendo clicable —es un `label` con el input dentro—
   * así que el objetivo táctil es la tarjeta entera, no el cuadradito.
   */
  return (
    <label
      title={atraccion.desc}
      className={`relative flex min-h-[4rem] cursor-pointer items-center rounded-lg py-2.5 pl-2.5 pr-5 transition-all duration-200 ${
        marcada
          ? 'bg-white shadow-card ring-2 ring-gold'
          : 'border border-border-soft bg-white/60 hover:border-taupe'
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
        className={`absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded border ${
          marcada ? 'border-terracotta bg-terracotta text-white' : 'border-border-soft bg-white'
        }`}
      >
        {marcada && <Icon name="check" size={11} />}
      </span>
      <span className="font-body text-[13px] font-semibold leading-snug text-text-main">
        {atraccion.nombre}
      </span>
    </label>
  );
}

function Grupo({
  titulo,
  atracciones,
  seleccionadas,
  onAlternar,
  children,
}: {
  titulo: string;
  atracciones: readonly Atraccion[];
  seleccionadas: readonly string[];
  onAlternar: (id: string) => void;
  children?: React.ReactNode;
}) {
  if (atracciones.length === 0) return null;

  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
        {titulo}
      </legend>
      <div className="grid grid-cols-2 gap-2">
        {atracciones.map((atraccion) => (
          <Chip
            key={atraccion.id}
            atraccion={atraccion}
            marcada={seleccionadas.includes(atraccion.id)}
            onAlternar={onAlternar}
          />
        ))}
      </div>
      {children}
    </fieldset>
  );
}

export function BudgetAttractionChips({
  seleccionadas,
  onAlternar,
  children,
}: {
  seleccionadas: readonly string[];
  onAlternar: (id: string) => void;
  /** Va debajo del grupo de Sintra: el transporte de la excursión. */
  children?: React.ReactNode;
}) {
  const [panelAbierto, setPanelAbierto] = useState(false);

  const destacadas = ATRACCIONES.filter((a) => a.destacada);
  const resto = ATRACCIONES.filter((a) => !a.destacada);

  const lisboa = destacadas.filter((a) => a.zona === 'lisboa');
  const sintra = destacadas.filter((a) => a.zona === 'sintra');

  const extraMarcadas = resto.filter((a) => seleccionadas.includes(a.id));

  return (
    <div data-control="atracciones" className="space-y-4">
      <Grupo
        titulo="Lisboa"
        atracciones={lisboa}
        seleccionadas={seleccionadas}
        onAlternar={onAlternar}
      />

      <Grupo
        titulo="Sintra"
        atracciones={sintra}
        seleccionadas={seleccionadas}
        onAlternar={onAlternar}
      >
        {children}
      </Grupo>

      {/*
        Sólo si hay algo detrás. Un botón que abre un panel vacío es peor que
        no tener botón, así que si algún día las destacadas son el catálogo
        entero, esto desaparece solo.
      */}
      {resto.length > 0 && (
        <div>
          <button
            type="button"
            onClick={() => setPanelAbierto(true)}
            className="flex min-h-11 w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-taupe/60 py-2.5 font-body text-[13px] font-semibold text-text-main transition-colors duration-150 hover:border-taupe hover:bg-white/60"
          >
            <Icon name="attractions" size={15} />
            Ver más actividades
          </button>

          {/*
            Lo que se marca en el panel tiene que verse también aquí fuera: si
            no, alguien cierra, ve ocho tarjetas sin marcar y cree que se ha
            perdido su selección. Van con su nombre completo y se pueden quitar
            desde aquí sin volver a abrir el panel.
          */}
          {extraMarcadas.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {extraMarcadas.map((atraccion) => (
                <li key={atraccion.id}>
                  <button
                    type="button"
                    onClick={() => onAlternar(atraccion.id)}
                    className="flex min-h-8 items-center gap-1.5 rounded-full bg-white py-1 pl-3 pr-2 font-body text-[12px] font-semibold text-text-main ring-1 ring-gold"
                  >
                    {atraccion.nombre}
                    <span className="sr-only">— quitar</span>
                    <span aria-hidden="true" className="text-text-secondary">
                      <Icon name="close" size={13} />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {panelAbierto && (
        <BudgetActivityDrawer
          atracciones={resto}
          seleccionadas={seleccionadas}
          onAlternar={onAlternar}
          onCerrar={() => setPanelAbierto(false)}
        />
      )}
    </div>
  );
}
