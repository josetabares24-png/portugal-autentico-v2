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
    <div className="w-full h-[600px] bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
        <p className="text-gray-500">Cargando mapa interactivo...</p>
      </div>
    </div>
  ),
});

export default function Lisboa1DiaPage() {
  const [navegacionActiva, setNavegacionActiva] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState<'itinerario' | 'mapa' | 'info'>('itinerario');
  const ruta = LISBOA_1_DIA;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/itinerarios" className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition font-semibold">
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Volver</span>
            </Link>
            <div className="hidden md:flex items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-lg">schedule</span>
                <span>{ruta.duracion}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-lg">location_on</span>
                <span>{ruta.paradas} paradas</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-lg">payments</span>
                <span>{ruta.presupuesto.total} EUR</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Dramático */}
      <section className="relative h-[65vh] min-h-[500px] bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500">
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-black/30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="material-symbols-outlined text-yellow-300">verified</span>
            <span className="font-semibold">Guía Verificada 2025</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-2xl animate-slide-up">
            Lisboa en 1 Día
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mb-8 font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {ruta.descripcion}
          </p>

          {/* CTA Principal Gigante */}
          <button 
            onClick={() => setNavegacionActiva(true)}
            className="group relative bg-white text-orange-600 font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 animate-slide-up flex items-center gap-3"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="material-symbols-outlined text-3xl group-hover:animate-pulse">navigation</span>
            <span>Comenzar Navegación GPS</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
          </button>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl">expand_more</span>
        </div>
      </section>

      {/* Tabs Mejoradas */}
      <div className="sticky top-[61px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-0">
            {[
              { key: 'itinerario', label: 'Itinerario', icon: 'route' },
              { key: 'mapa', label: 'Mapa', icon: 'map' },
              { key: 'info', label: 'Información', icon: 'info' }
            ].map((tab) => (
              <button 
                key={tab.key} 
                onClick={() => setSeccionActiva(tab.key as any)} 
                className={`flex-1 py-4 px-4 font-bold border-b-4 transition flex items-center justify-center gap-2 ${
                  seccionActiva === tab.key 
                    ? 'border-orange-600 text-orange-600 bg-orange-50' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="material-symbols-outlined">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-8">
        {/* TAB ITINERARIO */}
        {seccionActiva === 'itinerario' && (
          <div className="max-w-5xl mx-auto space-y-6">
            {ruta.paradas_data.map((parada: any) => (
              <div key={parada.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="md:flex">
                  {/* Imagen */}
                  <div className="md:w-2/5 relative h-72 md:h-auto">
                    <Image 
                      src={parada.imagenUrl} 
                      alt={parada.titulo} 
                      fill 
                      className="object-cover group-hover:scale-110 transition duration-500" 
                    />
                    {/* Badge Número */}
                    <div className="absolute top-4 left-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl text-2xl transform group-hover:rotate-12 transition">
                      {parada.id}
                    </div>
                    {/* Badge Precio */}
                    {parada.precio && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white font-bold px-4 py-2 rounded-full shadow-lg">
                        {parada.precio}
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="md:w-3/5 p-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${
                        parada.tipo === 'Comida' ? 'bg-orange-100' :
                        parada.tipo === 'Visita' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        <span className={`material-symbols-outlined ${
                          parada.tipo === 'Comida' ? 'text-orange-600' :
                          parada.tipo === 'Visita' ? 'text-blue-600' : 'text-green-600'
                        }`}>
                          {parada.tipo === 'Comida' ? 'restaurant' : parada.tipo === 'Visita' ? 'place' : 'directions'}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-semibold">{parada.tipo}</div>
                        <div className="text-xs text-gray-400">{parada.hora} • {parada.duracion}</div>
                      </div>
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition">
                      {parada.titulo}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {parada.descripcion}
                    </p>

                    {/* Consejo Local */}
                    {parada.consejoLocal && (
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-4">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-yellow-600 flex-shrink-0">lightbulb</span>
                          <div>
                            <p className="font-bold text-yellow-900 text-sm mb-1">💡 Consejo del local</p>
                            <p className="text-sm text-yellow-800">{parada.consejoLocal}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Transporte */}
                    {parada.transporte && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                        <span className="material-symbols-outlined text-gray-400">directions</span>
                        <span><strong>Próximo tramo:</strong> {parada.transporte.tipo} ({parada.transporte.duracion})</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Final Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
              <span className="material-symbols-outlined text-7xl mb-4 inline-block animate-bounce">celebration</span>
              <h3 className="text-4xl font-black mb-3">¡Ruta Completada!</h3>
              <p className="text-green-100 text-lg mb-8 max-w-md mx-auto">
                Has descubierto lo esencial de Lisboa como un verdadero local
              </p>
              <Link 
                href="/itinerarios" 
                className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition shadow-xl hover:shadow-2xl"
              >
                <span>Explorar más itinerarios</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        )}

        {/* TAB MAPA */}
        {seccionActiva === 'mapa' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mapa Interactivo</h2>
                <button 
                  onClick={() => setNavegacionActiva(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition"
                >
                  <span className="material-symbols-outlined">navigation</span>
                  <span className="hidden sm:inline">Navegar</span>
                </button>
              </div>
              
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

        {/* TAB INFO */}
        {seccionActiva === 'info' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Presupuesto */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="material-symbols-outlined text-orange-600 text-5xl">account_balance_wallet</span>
                <span>Presupuesto Estimado</span>
              </h2>
              <div className="space-y-4">
                {Object.entries(ruta.presupuesto).map(([key, value]: [string, any]) => {
                  if (key === 'total') return null;
                  const labels: Record<string, string> = {
                    transporte: 'Transporte',
                    comidas: 'Comidas',
                    entradas: 'Entradas',
                    extras: 'Extras'
                  };
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

            {/* Consejos */}
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

            {/* CTA Final */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-4">¿Listo para explorar Lisboa?</h3>
              <p className="text-orange-100 text-lg mb-8 max-w-md mx-auto">
                Comienza tu aventura ahora mismo con navegación GPS en tiempo real
              </p>
              <button 
                onClick={() => setNavegacionActiva(true)}
                className="bg-white text-orange-600 font-bold py-5 px-10 rounded-2xl inline-flex items-center gap-3 hover:bg-orange-50 transition shadow-2xl hover:shadow-orange-300 text-lg"
              >
                <span className="material-symbols-outlined text-2xl">navigation</span>
                <span>Comenzar Navegación GPS</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Botón GPS Flotante Mobile */}
      <button
        onClick={() => setNavegacionActiva(true)}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-2xl flex items-center gap-2 animate-pulse hover:animate-none hover:scale-105 transition"
      >
        <span className="material-symbols-outlined text-2xl">navigation</span>
        <span>Comenzar Ruta</span>
      </button>

      {/* Modal Navegación */}
      {navegacionActiva && <RutaNavegacion paradas={ruta.paradas_data} onClose={() => setNavegacionActiva(false)} />}

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
