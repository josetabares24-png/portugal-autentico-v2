'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { LISBOA_1_DIA } from '@/data/lisboa-1-dia';

const MapaInteractivo = dynamic(() => import('@/components/MapaInteractivo'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
        <p className="text-gray-500">Cargando mapa interactivo...</p>
      </div>
    </div>
  ),
});

export default function Lisboa1DiaPage() {
  const [seccionActiva, setSeccionActiva] = useState<'itinerario' | 'mapa' | 'info'>('itinerario');
  const ruta = LISBOA_1_DIA;

  const abrirGoogleMaps = (lat: number, lng: number, nombre: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/itinerarios" className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition font-semibold">
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Volver</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="relative h-[65vh] min-h-[500px] bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <span className="material-symbols-outlined text-yellow-300">verified</span>
            <span className="font-semibold">Guia Premium Verificada 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-2xl">Lisboa en 1 Dia</h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mb-8 font-light">{ruta.descripcion}</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="material-symbols-outlined">schedule</span>
              <span className="font-semibold">{ruta.duracion}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="material-symbols-outlined">location_on</span>
              <span className="font-semibold">{ruta.paradas} paradas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="material-symbols-outlined">payments</span>
              <span className="font-semibold">{ruta.presupuesto.total} EUR</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl">expand_more</span>
        </div>
      </section>

      <div className="sticky top-[61px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-0">
            {[
              { key: 'itinerario', label: 'Itinerario', icon: 'route' },
              { key: 'mapa', label: 'Mapa', icon: 'map' },
              { key: 'info', label: 'Informacion', icon: 'info' }
            ].map((tab) => (
              <button key={tab.key} onClick={() => setSeccionActiva(tab.key as any)} className={`flex-1 py-4 px-4 font-bold border-b-4 transition flex items-center justify-center gap-2 ${seccionActiva === tab.key ? 'border-orange-600 text-orange-600 bg-orange-50' : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
                <span className="material-symbols-outlined">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {seccionActiva === 'itinerario' && (
          <div className="max-w-5xl mx-auto space-y-8">
            {ruta.paradas_data.map((parada: any) => (
              <article key={parada.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-72 md:h-auto">
                    <Image src={parada.imagenUrl} alt={parada.titulo} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl text-2xl">{parada.id}</div>
                    {parada.precio && <div className="absolute top-4 right-4 bg-green-500 text-white font-bold px-4 py-2 rounded-full shadow-lg">{parada.precio}</div>}
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${parada.tipo === 'Comida' ? 'bg-orange-100' : parada.tipo === 'Visita' ? 'bg-blue-100' : 'bg-green-100'}`}>
                        <span className={`material-symbols-outlined ${parada.tipo === 'Comida' ? 'text-orange-600' : parada.tipo === 'Visita' ? 'text-blue-600' : 'text-green-600'}`}>
                          {parada.tipo === 'Comida' ? 'restaurant' : parada.tipo === 'Visita' ? 'place' : 'directions'}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-semibold">{parada.tipo}</div>
                        <div className="text-xs text-gray-400">{parada.hora} - {parada.duracion}</div>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{parada.titulo}</h2>
                    <div className="prose prose-sm max-w-none mb-4">
                      <p className="text-gray-700 leading-relaxed">{parada.descripcion}</p>
                    </div>
                    {parada.horario && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg mb-3">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span><strong>Horario:</strong> {parada.horario}</span>
                      </div>
                    )}
                    {parada.consejoLocal && (
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-4">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-yellow-600 flex-shrink-0 mt-1">lightbulb</span>
                          <div>
                            <p className="font-bold text-yellow-900 text-sm mb-2">Consejos de Local</p>
                            <p className="text-sm text-yellow-800 leading-relaxed whitespace-pre-line">{parada.consejoLocal}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <button onClick={() => abrirGoogleMaps(parada.coordenadas.lat, parada.coordenadas.lng, parada.titulo)} className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition">
                      <span className="material-symbols-outlined">map</span>
                      <span>Ver Ruta en Google Maps</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
              <span className="material-symbols-outlined text-7xl mb-4 inline-block animate-bounce">celebration</span>
              <h3 className="text-4xl font-black mb-3">Ruta Completada!</h3>
              <p className="text-green-100 text-lg mb-8 max-w-md mx-auto">Has descubierto lo esencial de Lisboa como un verdadero local</p>
              <Link href="/itinerarios" className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition shadow-xl">
                <span>Explorar mas itinerarios</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        )}

        {seccionActiva === 'mapa' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mapa Interactivo de la Ruta</h2>
              <MapaInteractivo paradas={ruta.paradas_data} />
              <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-[#4ECDC4] flex-shrink-0"></div>
                  <span className="text-gray-700 font-semibold">Visitas</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 p-3 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-[#FF6B35] flex-shrink-0"></div>
                  <span className="text-gray-700 font-semibold">Comidas</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-[#95E1D3] flex-shrink-0"></div>
                  <span className="text-gray-700 font-semibold">Transporte</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {seccionActiva === 'info' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="material-symbols-outlined text-orange-600 text-5xl">account_balance_wallet</span>
                <span>Presupuesto Estimado</span>
              </h2>
              <div className="space-y-4">
                {Object.entries(ruta.presupuesto).map(([key, value]: [string, any]) => {
                  if (key === 'total') return null;
                  const labels: Record<string, string> = {transporte: 'Transporte', comidas: 'Comidas', entradas: 'Entradas', extras: 'Extras'};
                  return (
                    <div key={key} className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0">
                      <span className="text-gray-700 font-semibold text-lg">{labels[key]}</span>
                      <span className="text-2xl font-bold text-gray-900">{value} EUR</span>
                    </div>
                  );
                })}
                <div className="flex justify-between items-center pt-4 border-t-4 border-orange-200">
                  <span className="text-2xl font-black text-gray-900">TOTAL</span>
                  <span className="text-4xl font-black text-orange-600">{ruta.presupuesto.total} EUR</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="material-symbols-outlined text-yellow-500 text-5xl">lightbulb</span>
                <span>Consejos Importantes</span>
              </h2>
              <ul className="space-y-4">
                {ruta.consejos.map((consejo: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 bg-yellow-50 p-4 rounded-xl">
                    <span className="material-symbols-outlined text-orange-500 mt-1 flex-shrink-0">check_circle</span>
                    <span className="text-gray-700 leading-relaxed">{consejo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
