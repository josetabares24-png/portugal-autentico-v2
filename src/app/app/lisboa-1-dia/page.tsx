'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { LISBOA_1_DIA } from '@/data/lisboa-1-dia';
import RutaNavegacion from '@/components/RutaNavegacion';

const MapaInteractivo = dynamic(() => import('@/components/MapaInteractivo'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Cargando mapa...</p>
    </div>
  ),
});

export default function Lisboa1DiaPage() {
  const [navegacionActiva, setNavegacionActiva] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState<'itinerario' | 'mapa' | 'info'>('itinerario');
  const ruta = LISBOA_1_DIA;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/itinerarios" className="flex items-center gap-2 text-gray-700 hover:text-orange-600">
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="font-semibold">Volver</span>
            </Link>
            <button onClick={() => setNavegacionActiva(true)} className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 shadow-lg">
              <span className="material-symbols-outlined">navigation</span>
              <span className="hidden sm:inline">Comenzar Ruta</span>
            </button>
          </div>
        </div>
      </header>

      <section className="relative h-[40vh] min-h-[300px] bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined">schedule</span>
            <span className="text-lg">{ruta.duracion}</span>
            <span className="material-symbols-outlined ml-4">location_on</span>
            <span className="text-lg">{ruta.paradas} paradas</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{ruta.nombre}</h1>
          <p className="text-xl max-w-2xl text-orange-100">{ruta.descripcion}</p>
        </div>
      </section>

      <div className="sticky top-[73px] z-30 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex gap-6">
            {['itinerario', 'mapa', 'info'].map((tab) => (
              <button key={tab} onClick={() => setSeccionActiva(tab as any)} className={`py-4 px-2 font-semibold border-b-2 transition ${seccionActiva === tab ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-600'}`}>
                {tab === 'itinerario' && 'Itinerario'}
                {tab === 'mapa' && 'Mapa'}
                {tab === 'info' && 'Información'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {seccionActiva === 'itinerario' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {ruta.paradas_data.map((parada: any) => (
              <div key={parada.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image src={parada.imagenUrl} alt={parada.titulo} fill className="object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute top-4 left-4 bg-white text-orange-600 font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">{parada.id}</div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-orange-500">{parada.tipo === 'Comida' ? 'restaurant' : 'place'}</span>
                      <span className="text-sm font-semibold text-gray-500">{parada.hora} • {parada.duracion}</span>
                      {parada.precio && <span className="ml-auto text-sm font-bold text-orange-600">{parada.precio}</span>}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{parada.titulo}</h3>
                    <p className="text-gray-600 mb-4">{parada.descripcion}</p>
                    {parada.consejoLocal && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-yellow-600">lightbulb</span>
                          <div>
                            <p className="font-semibold text-yellow-800 text-sm mb-1">Consejo del local</p>
                            <p className="text-sm text-yellow-700">{parada.consejoLocal}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-center text-white">
              <span className="material-symbols-outlined text-6xl mb-4">celebration</span>
              <h3 className="text-3xl font-bold mb-2">¡Ruta Completada!</h3>
              <p className="text-green-100 mb-6">Has descubierto lo esencial de Lisboa como un local</p>
              <Link href="/itinerarios" className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-green-50 transition">
                <span>Ver más itinerarios</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        )}

        {seccionActiva === 'mapa' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Mapa Interactivo de la Ruta</h2>
              <MapaInteractivo paradas={ruta.paradas_data} />
              <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-[#4ECDC4]" /><span className="text-gray-600">Visitas</span></div>
                <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-[#FF6B35]" /><span className="text-gray-600">Comidas</span></div>
                <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-[#95E1D3]" /><span className="text-gray-600">Transporte</span></div>
              </div>
            </div>
          </div>
        )}

        {seccionActiva === 'info' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="material-symbols-outlined text-orange-600 text-4xl">account_balance_wallet</span>
                Presupuesto Estimado
              </h2>
              <div className="space-y-4">
                {Object.entries(ruta.presupuesto).map(([key, value]: [string, any]) => {
                  if (key === 'total') return null;
                  const labels: Record<string, string> = {transporte: 'Transporte', comidas: 'Comidas', entradas: 'Entradas', extras: 'Extras'};
                  return (
                    <div key={key} className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-700 font-medium">{labels[key]}</span>
                      <span className="text-xl font-bold text-gray-900">{value} EUR</span>
                    </div>
                  );
                })}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xl font-bold text-gray-900">TOTAL</span>
                  <span className="text-3xl font-bold text-orange-600">{ruta.presupuesto.total} EUR</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="material-symbols-outlined text-yellow-500 text-4xl">lightbulb</span>
                Consejos Importantes
              </h2>
              <ul className="space-y-4">
                {ruta.consejos.map((consejo: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-orange-500 mt-1">check_circle</span>
                    <span className="text-gray-700">{consejo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>

      {navegacionActiva && <RutaNavegacion paradas={ruta.paradas_data} onClose={() => setNavegacionActiva(false)} />}
    </div>
  );
}
