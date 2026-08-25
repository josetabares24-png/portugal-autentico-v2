'use client';

import Icon from '@/components/Icon';
import { ATRACCIONES } from '@/lib/budget-calculator';

/*
 * Las ocho atracciones como chips.
 *
 * Antes cada una ocupaba una fila con su descripción: ocho párrafos que la
 * calculadora no necesita. Aquí no se está eligiendo qué visitar, se está
 * diciendo cuántas entradas se van a pagar; para saber qué es el MAAT están
 * las guías, y la página enlaza a ellas.
 *
 * La descripción no se pierde del todo: viaja en el `title` del chip, así que
 * sigue disponible al posar el cursor sin ocupar ni un píxel del diseño.
 *
 * Nombres cortos a propósito. «Castelo de São Jorge» en un chip de dos
 * columnas a 375 px se parte en tres líneas.
 */

/** Nombre corto para el chip. El largo sigue siendo el del catálogo. */
const CORTOS: Record<string, string> = {
  'castelo-sao-jorge': 'Castelo',
  'mosteiro-jeronimos': 'Jerónimos',
  'torre-belem': 'Torre de Belém',
  maat: 'MAAT',
  oceanario: 'Oceanário',
  'palacio-pena': 'Pena',
  'quinta-regaleira': 'Regaleira',
  'castelo-mouros': 'Mouros',
};

export function BudgetAttractionChips({
  seleccionadas,
  onAlternar,
}: {
  seleccionadas: readonly string[];
  onAlternar: (id: string) => void;
}) {
  return (
    <fieldset data-control="atracciones" className="border-0 p-0">
      <legend className="sr-only">Lugares de pago que quieres visitar</legend>
      <div className="grid grid-cols-2 gap-2">
        {ATRACCIONES.map((atraccion) => {
          const marcada = seleccionadas.includes(atraccion.id);
          return (
            <label
              key={atraccion.id}
              title={atraccion.desc}
              className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 ${
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
                className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border ${
                  marcada ? 'border-terracotta bg-terracotta text-white' : 'border-border-soft bg-white'
                }`}
              >
                {marcada && <Icon name="check" size={11} />}
              </span>
              <span className="min-w-0 flex-1 font-body text-[13px] font-semibold leading-tight text-text-main">
                {CORTOS[atraccion.id] ?? atraccion.nombre}
                <span className="sr-only"> — {atraccion.nombre}</span>
              </span>
              {atraccion.zona === 'sintra' && (
                <span className="flex-shrink-0 rounded-full bg-border-soft px-1.5 py-0.5 font-body text-[9px] font-bold uppercase tracking-wider text-text-secondary">
                  Sintra
                </span>
              )}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
