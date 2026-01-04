'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { lisboa1DiaTimeline } from '@/data/itineraries';

export default function LisboaAppPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentStop, setCurrentStop] = useState(0);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/itinerarios" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                <span className="material-symbols-outlined">arrow_back</span>
                <span className="hidden sm:inline">Volver</span>
              </Link>

              <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Lisboa en 1 día</h1>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
                    {darkMode ? 'light_mode' : 'dark_mode'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Layout principal: Mapa a la izquierda, Timeline a la derecha */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-6">
            {/* Mapa - Fixed en desktop, scroll en mobile */}
            <div className="lg:sticky lg:top-20 h-[40vh] lg:h-[calc(100vh-6rem)] bg-gray-200 dark:bg-gray-800 relative">
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
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <button className="flex size-10 items-center justify-center rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-lg border border-gray-100 dark:border-gray-700 hover:scale-105 transition">
                  <span className="material-symbols-outlined">layers</span>
                </button>
                <button className="flex size-10 items-center justify-center rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-lg border border-gray-100 dark:border-gray-700 hover:scale-105 transition">
                  <span className="material-symbols-outlined">my_location</span>
                </button>
              </div>

              {/* Info card en el mapa */}
              <div className="absolute top-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                    <span>10-12h</span>
                  </div>
                  <div className="h-3 w-px bg-gray-300 dark:bg-gray-700"></div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                    <span>{lisboa1DiaTimeline.length} paradas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline - Scrollable */}
            <div className="bg-white dark:bg-slate-900 lg:pr-6">
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Intro */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-700 dark:text-orange-400 rounded-full text-xs font-bold mb-2">
                        Popular
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Itinerario Completo</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Explora los barrios históricos esenciales de Alfama y Baixa en una jornada inolvidable. Cada parada optimizada para que no pierdas tiempo.
                  </p>
                </div>

                {/* Timeline */}
                <div className="space-y-0">
                  {lisboa1DiaTimeline.map((stop, idx) => (
                    <div key={idx} className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
                      {/* Línea vertical */}
                      {idx < lisboa1DiaTimeline.length - 1 && (
                        <div className="absolute left-[19px] sm:left-[23px] top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                      )}

                      {/* Número */}
                      <div className={`relative z-10 flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-full shadow-lg ${
                        idx === currentStop 
                          ? 'bg-orange-500 border-4 border-orange-200 dark:border-orange-900' 
                          : 'bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-600'
                      }`}>
                        <span className={`text-sm sm:text-base font-bold ${
                          idx === currentStop 
                            ? 'text-white' 
                            : 'text-gray-600 dark:text-gray-300'
                        }`}>
                          {idx + 1}
                        </span>
                      </div>

                      {/* Contenido */}
                      <div className="flex-1 space-y-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{stop.time}</span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              stop.type === 'food' 
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                            }`}>
                              {stop.type === 'food' ? 'Comida' : 'Visita'}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{stop.title}</h3>
                        </div>

                        {stop.image && (
                          <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-xl shadow-md">
                            <Image
                              src={stop.image}
                              alt={stop.title}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                          {stop.description}
                        </p>

                        {stop.tip && (
                          <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-100 dark:border-orange-900/30">
                            <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 text-xl mt-0.5 shrink-0">lightbulb</span>
                            <div className="text-sm text-orange-900 dark:text-orange-200 leading-relaxed">
                              <strong className="font-bold block mb-1">Consejo del local:</strong>
                              {stop.tip}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA final */}
                <div className="mt-12 p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl text-white text-center">
                  <span className="material-symbols-outlined text-5xl mb-4 block">celebration</span>
                  <h3 className="text-2xl font-bold mb-2">¡Ruta Completada!</h3>
                  <p className="text-orange-100 mb-6">Has descubierto lo esencial de Lisboa como un local</p>
                  <Link 
                    href="/itinerarios"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-xl font-bold hover:scale-105 transition-transform"
                  >
                    Ver más itinerarios
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botón flotante en mobile */}
        <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
          <button className="w-full flex items-center justify-between rounded-xl bg-orange-500 px-4 py-4 text-white shadow-2xl hover:bg-orange-600 active:scale-[0.98] transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/10">
                <span className="material-symbols-outlined text-2xl">navigation</span>
              </div>
              <span className="text-base font-bold">Comenzar Navegación GPS</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
