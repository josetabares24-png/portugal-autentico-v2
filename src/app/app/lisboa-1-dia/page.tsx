'use client';

import { useState } from 'react';
import Image from 'next/image';
import { lisboa1DiaTimeline } from '@/data/itineraries';

export default function LisboaAppPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentStop, setCurrentStop] = useState(0);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="relative mx-auto flex h-screen w-full max-w-[480px] flex-col bg-slate-50 dark:bg-slate-900 overflow-hidden">
        {/* Header con controles */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 pt-12 bg-gradient-to-b from-black/40 to-transparent">
          <button className="flex size-10 items-center justify-center rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm shadow-sm transition active:scale-95">
            <span className="material-symbols-outlined text-gray-900 dark:text-white text-xl">arrow_back</span>
          </button>
          
          <div className="flex gap-3">
            <button className="flex size-10 items-center justify-center rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm shadow-sm transition active:scale-95">
              <span className="material-symbols-outlined text-gray-900 dark:text-white text-xl">favorite</span>
            </button>
            <button className="flex size-10 items-center justify-center rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm shadow-sm transition active:scale-95">
              <span className="material-symbols-outlined text-gray-900 dark:text-white text-xl">share</span>
            </button>
          </div>
        </div>

        {/* Mapa */}
        <div className="relative h-[45vh] w-full shrink-0 group">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200)'
          }}>
            <div className="absolute inset-0 bg-black/10 dark:bg-slate-900/60"></div>
          </div>

          {/* Marcadores en el mapa */}
          <div className="absolute top-[40%] left-[30%] flex flex-col items-center cursor-pointer transform hover:scale-110 transition-transform">
            <div className="flex size-12 items-center justify-center rounded-full bg-orange-500 shadow-lg border-2 border-white">
              <span className="material-symbols-outlined text-white text-2xl">castle</span>
            </div>
            <div className="mt-1 rounded bg-white px-2 py-0.5 text-[10px] font-bold shadow-md text-gray-900">Castelo</div>
          </div>

          <div className="absolute top-[60%] left-[65%] flex flex-col items-center cursor-pointer transform hover:scale-110 transition-transform">
            <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200">
              <span className="material-symbols-outlined text-gray-900 text-xl">restaurant</span>
            </div>
          </div>

          <div className="absolute top-[25%] left-[70%] flex flex-col items-center cursor-pointer transform hover:scale-110 transition-transform">
            <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200">
              <span className="material-symbols-outlined text-gray-900 text-xl">photo_camera</span>
            </div>
          </div>

          {/* Controles del mapa */}
          <div className="absolute bottom-6 right-4 flex flex-col gap-2 z-10">
            <button className="flex size-10 items-center justify-center rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-lg border border-gray-100 dark:border-gray-700">
              <span className="material-symbols-outlined text-2xl">layers</span>
            </button>
            <button className="flex size-10 items-center justify-center rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-lg border border-gray-100 dark:border-gray-700">
              <span className="material-symbols-outlined text-2xl">my_location</span>
            </button>
          </div>

          {/* Toggle modo oscuro */}
          <div className="absolute top-24 left-4 z-10">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="group flex cursor-pointer items-center gap-3 rounded-full bg-white/95 p-1.5 pr-4 shadow-xl border border-white/40 backdrop-blur-md dark:bg-gray-900/90 dark:border-gray-700 transition-all hover:scale-[1.02]"
            >
              <div className="relative h-7 w-12 rounded-full bg-gray-200 dark:bg-gray-700 shadow-inner border border-black/5 dark:border-white/5">
                <div className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-all ${darkMode ? 'translate-x-5' : ''}`}>
                  <span className={`material-symbols-outlined text-[14px] text-amber-500 ${darkMode ? 'hidden' : ''}`}>light_mode</span>
                  <span className={`material-symbols-outlined text-[14px] text-indigo-500 ${darkMode ? '' : 'hidden'}`}>dark_mode</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none mb-0.5">Modo</span>
                <span className="text-xs font-extrabold text-gray-800 dark:text-gray-200 leading-none">Mapa</span>
              </div>
            </button>
          </div>
        </div>

        {/* Panel inferior */}
        <div className="relative -mt-6 flex flex-1 flex-col rounded-t-2xl bg-slate-50 dark:bg-slate-900 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-10">
          <div className="flex w-full flex-col items-center pt-3 pb-1">
            <div className="h-1.5 w-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pb-24">
            <div className="mb-6 mt-2">
              <div className="flex items-start justify-between">
                <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white leading-tight">Lisboa en 1 día</h1>
                <span className="rounded-full bg-orange-500/20 px-2.5 py-1 text-xs font-bold text-orange-700 dark:text-orange-400">
                  Popular
                </span>
              </div>

              <div className="mt-3 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                  <span>10-12 horas</span>
                </div>
                <div className="h-3 w-px bg-gray-300 dark:bg-gray-700"></div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">directions_walk</span>
                  <span>Moderado</span>
                </div>
                <div className="h-3 w-px bg-gray-300 dark:bg-gray-700"></div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                  <span>{lisboa1DiaTimeline.length} paradas</span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Explora los barrios históricos esenciales de Alfama y Baixa en una jornada inolvidable. Ruta perfecta para sentir la esencia de la ciudad.
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-800 mb-6"/>

            {/* Timeline de paradas */}
            <div className="flex flex-col gap-0">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Itinerario</h3>

              {lisboa1DiaTimeline.map((stop, idx) => (
                <div key={idx} className="relative flex gap-4 pb-8 group">
                  {/* Línea vertical */}
                  {idx < lisboa1DiaTimeline.length - 1 && (
                    <div className="absolute left-[19px] top-8 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  )}

                  {/* Número */}
                  <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm ${
                    idx === currentStop 
                      ? 'bg-white dark:bg-slate-800 border-2 border-orange-500' 
                      : 'bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-600'
                  }`}>
                    <span className={`text-xs font-bold ${
                      idx === currentStop 
                        ? 'text-orange-500' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {idx + 1}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-base font-bold text-gray-900 dark:text-white">{stop.title}</h4>
                        <p className="text-xs font-medium text-gray-500">{stop.time} • {stop.type === 'food' ? 'Comida' : 'Visita'}</p>
                      </div>
                    </div>

                    {stop.image && (
                      <div className="relative h-32 w-full overflow-hidden rounded-xl bg-gray-100">
                        <Image
                          src={stop.image}
                          alt={stop.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {stop.description}
                    </p>

                    {stop.tip && (
                      <div className="flex gap-2 items-start bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 border border-orange-100 dark:border-orange-900/30">
                        <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 text-lg mt-0.5">lightbulb</span>
                        <p className="text-xs text-orange-900 dark:text-orange-200 leading-relaxed flex-1">
                          <strong className="font-bold">Tip:</strong> {stop.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón fijo inferior */}
        <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-slate-900/80 px-4 py-4 backdrop-blur-md">
          <button className="flex w-full items-center justify-between rounded-xl bg-orange-500 px-2 py-2 text-white shadow-lg hover:bg-orange-600 active:scale-[0.98] transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/10">
              <span className="material-symbols-outlined text-2xl">navigation</span>
            </div>
            <span className="text-base font-bold">Comenzar Ruta</span>
            <div className="flex items-center gap-1 pr-4 text-xs font-bold opacity-90">
              <span>GPS ACTIVO</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
