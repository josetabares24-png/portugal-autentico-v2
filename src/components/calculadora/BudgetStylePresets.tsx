'use client';

import Icon from '@/components/Icon';
import type {
  NivelAlojamiento,
  NivelComida,
  NivelTransporte,
} from '@/lib/budget-calculator';

/*
 * Estilo de viaje: tres atajos que fijan de golpe alojamiento, comida y
 * transporte.
 *
 * Es **sólo interfaz**. No hay aritmética nueva ni un cuarto nivel oculto:
 * cada preset se limita a elegir tres valores que ya existían, y el motor
 * recibe exactamente lo mismo que si se hubieran marcado a mano. Debajo sigue
 * estando «Personalizar» para cambiar cualquiera de los tres por separado; en
 * cuanto una combinación deja de coincidir con un preset, ninguno queda
 * marcado y la etiqueta pasa a «Personalizado».
 *
 * Existe porque tres selectores de tres opciones son nueve decisiones antes
 * de ver una cifra. Con esto son una.
 */

export type EstiloViaje = 'economico' | 'intermedio' | 'comodo';

export interface Preset {
  id: EstiloViaje;
  label: string;
  desc: string;
  alojamiento: NivelAlojamiento;
  comida: NivelComida;
  transporte: NivelTransporte;
}

export const PRESETS: readonly Preset[] = [
  {
    id: 'economico',
    label: 'Económico',
    desc: 'Hostal, tascas y andar',
    alojamiento: 'economico',
    comida: 'ahorro',
    transporte: 'a-pie',
  },
  {
    id: 'intermedio',
    label: 'Intermedio',
    desc: 'Hotel correcto y metro',
    alojamiento: 'intermedio',
    comida: 'mixto',
    transporte: 'publico',
  },
  {
    id: 'comodo',
    label: 'Cómodo',
    desc: 'Gama alta, restaurantes y taxi',
    alojamiento: 'superior',
    comida: 'restaurantes',
    transporte: 'publico-taxi',
  },
] as const;

/**
 * Qué preset describe la combinación actual, o `null` si el usuario la ha
 * personalizado. Con el alojamiento en «importe propio» nunca coincide
 * ninguno: ese dato ya no es una elección de estilo.
 */
export function presetActivo({
  modoAlojamiento,
  alojamiento,
  comida,
  transporte,
}: {
  modoAlojamiento: 'estimado' | 'propio';
  alojamiento: NivelAlojamiento;
  comida: NivelComida;
  transporte: NivelTransporte;
}): EstiloViaje | null {
  if (modoAlojamiento !== 'estimado') return null;
  const encontrado = PRESETS.find(
    (p) => p.alojamiento === alojamiento && p.comida === comida && p.transporte === transporte
  );
  return encontrado ? encontrado.id : null;
}

export function BudgetStylePresets({
  activo,
  onElegir,
}: {
  activo: EstiloViaje | null;
  onElegir: (preset: Preset) => void;
}) {
  return (
    <fieldset data-control="estilo" className="border-0 p-0">
      <legend className="sr-only">Estilo de viaje</legend>
      <div className="grid grid-cols-3 gap-2">
        {PRESETS.map((preset) => {
          const seleccionado = preset.id === activo;
          return (
            <button
              key={preset.id}
              type="button"
              aria-pressed={seleccionado}
              onClick={() => onElegir(preset)}
              className={`flex min-h-[4.25rem] flex-col justify-center rounded-lg px-2.5 py-2.5 text-center transition-all duration-200 ${
                seleccionado
                  ? 'bg-white shadow-card ring-2 ring-gold'
                  : 'border border-border-soft bg-white/60 hover:border-taupe'
              }`}
            >
              <span className="flex items-center justify-center gap-1 font-body text-[13px] font-semibold leading-tight text-text-main">
                {preset.label}
                {seleccionado && (
                  <Icon name="check" size={13} className="flex-shrink-0 text-terracotta" />
                )}
              </span>
              <span className="mt-0.5 block font-body text-[11px] leading-snug text-text-secondary">
                {preset.desc}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
