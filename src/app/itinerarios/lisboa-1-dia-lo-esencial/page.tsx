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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-500">Cargando mapa interactivo...</p>
      </div>
    </div>
  ),
});

export default function Lisboa1DiaPage() {
  const [seccionActiva, setSeccionActiva] = useState<'itinerario' | 'mapa' | 'info'>('itinerario');
  const ruta = LISBOA_1_DIA;

  const hasUserPurchased = false;
  const paradasGratis = ruta.paradas_data.slice(0, 3);
  const paradasBloqueadas = ruta.paradas_data.slice(3);

  // Fix imagen temporal para parada 2
  const paradasConImagenes = paradasGratis.map(parada => {
    if (parada.id === 2) {
      return {
        ...parada,
        imagenUrl: 'https://images.unsplash.com/photo-1588409010558-71a4f7db5b57?w=800'
      };
    }
    return parada;
  });

  const abrirGoogleMaps = (lat: number, lng: number, nombre: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
    window.open(url, '_blank');
  };

  const handleComprar = () => {
    alert('🚀 Aquí se abriría Stripe para pagar 5.99 EUR\n\nPor ahora es solo una demo visual.');
  };

  return (
    <div className="min-h-screen bg-background-light">
      {/* HERO SECTION - PREMIUM STYLE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1920&q=80"
            alt="Lisboa - Itinerario 1 día"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <Link 
            href="/itinerarios" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Volver a itinerarios
          </Link>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">verified</span>
            <span className="text-sm font-bold tracking-wide">GUÍAS VERIFICADAS 2025</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl" style={{ fontFamily: 'Georgia, serif' }}>
            Lisboa en 1 día:<br />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Lo Esencial
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            {ruta.descripcion}
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">schedule</span>
              <span className="text-white text-sm font-medium">{ruta.duracion}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">location_on</span>
              <span className="text-white text-sm font-medium">{ruta.paradas} paradas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">restaurant</span>
              <span className="text-white text-sm font-medium">3 restaurantes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">map</span>
              <span className="text-white text-sm font-medium">Mapa offline</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">check_circle</span>
              <span>Descarga inmediata</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">verified</span>
              <span>Creado por locales</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400">workspace_premium</span>
              <span>Garantía 48h</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
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
                    ? 'border-primary text-primary bg-orange-50' 
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

      <main className="container mx-auto px-4 py-16">
        {seccionActiva === 'itinerario' && (
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wide mb-4">
                Vista Previa Gratuita
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Descubre las Primeras 3 Paradas
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Mostrando {paradasGratis.length} de {ruta.paradas_data.length} paradas. Desbloquea la guía completa para acceder a restaurantes exclusivos, consejos de locales y el mapa interactivo offline.
              </p>
            </div>

            {/* PARADAS PREMIUM CARDS */}
            {paradasConImagenes.map((parada: any) => (
              <article key={parada.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-80 md:h-auto">
                    <Image 
                      src={parada.imagenUrl} 
                      alt={parada.titulo} 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute top-6 left-6 bg-gradient-to-br from-primary to-orange-600 text-white font-black w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl text-3xl">
                      {parada.id}
                    </div>
                    {parada.precio && (
                      <div className="absolute top-6 right-6 bg-green-500 text-white font-bold px-5 py-2.5 rounded-full shadow-lg text-sm">
                        {parada.precio}
                      </div>
                    )}
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl ${
                        parada.tipo === 'Comida' ? 'bg-orange-100' : 
                        parada.tipo === 'Visita' ? 'bg-blue-100' : 
                        'bg-green-100'
                      }`}>
                        <span className={`material-symbols-outlined text-2xl ${
                          parada.tipo === 'Comida' ? 'text-orange-600' : 
                          parada.tipo === 'Visita' ? 'text-blue-600' : 
                          'text-green-600'
                        }`}>
                          {parada.tipo === 'Comida' ? 'restaurant' : parada.tipo === 'Visita' ? 'place' : 'directions'}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 font-bold uppercase tracking-wide">{parada.tipo}</div>
                        <div className="text-xs text-slate-400 font-medium">{parada.hora} · {parada.duracion}</div>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                      {parada.titulo}
                    </h2>
                    
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                      {parada.descripcion}
                    </p>
                    
                    {parada.horario && (
                      <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-4 py-3 rounded-xl mb-4">
                        <span className="material-symbols-outlined text-base">schedule</span>
                        <span><strong className="font-bold">Horario:</strong> {parada.horario}</span>
                      </div>
                    )}
                    
                    {parada.consejoLocal && (
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-6">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-yellow-600 flex-shrink-0 mt-1 text-2xl">lightbulb</span>
                          <div>
                            <p className="font-black text-yellow-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Consejos de Local</p>
                            <p className="text-sm text-yellow-800 leading-relaxed whitespace-pre-line">{parada.consejoLocal}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => abrirGoogleMaps(parada.coordenadas.lat, parada.coordenadas.lng, parada.titulo)} 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <span className="material-symbols-outlined">map</span>
                      <span>Ver Ruta en Google Maps</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {/* PAYWALL PREMIUM */}
            {!hasUserPurchased && (
              <div className="relative mt-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/90 to-white z-10 pointer-events-none" style={{ backdropFilter: 'blur(12px)' }}></div>
                  
                  {paradasBloqueadas.slice(0, 2).map((parada: any) => (
                    <article key={parada.id} className="bg-white rounded-3xl overflow-hidden shadow-lg mb-12 opacity-30 pointer-events-none select-none border border-slate-100">
                      <div className="md:flex">
                        <div className="md:w-2/5 relative h-80 md:h-auto">
                          <Image src={parada.imagenUrl} alt={parada.titulo} fill className="object-cover grayscale" />
                          <div className="absolute top-6 left-6 bg-gray-400 text-white font-black w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl text-3xl">
                            {parada.id}
                          </div>
                        </div>
                        <div className="md:w-3/5 p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-gray-100">
                              <span className="material-symbols-outlined text-gray-400 text-2xl">lock</span>
                            </div>
                            <div>
                              <div className="text-sm text-gray-400 font-bold uppercase tracking-wide">{parada.tipo}</div>
                              <div className="text-xs text-gray-300 font-medium">{parada.hora} · {parada.duracion}</div>
                            </div>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-300" style={{ fontFamily: 'Georgia, serif' }}>
                            {parada.titulo}
                          </h2>
                          <div className="h-32 bg-gray-100 rounded-xl mb-4"></div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="absolute inset-0 z-20 flex items-center justify-center px-4 py-24">
                  <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 max-w-2xl w-full border-4 border-primary/10">
                    <div className="text-center mb-10">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <span className="material-symbols-outlined text-white text-6xl">lock_open</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                        Desbloquea el Itinerario Completo
                      </h3>
                      <p className="text-xl text-slate-600 leading-relaxed">
                        Accede a las {paradasBloqueadas.length} paradas restantes con todos los detalles
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 mb-8 border border-orange-100">
                      <div className="grid md:grid-cols-2 gap-5">
                        {[
                          { title: 'Tasca do Chico', subtitle: 'Almuerzo auténtico' },
                          { title: 'Belém Completo', subtitle: 'Torre y Monasterio' },
                          { title: 'Pastéis de Belém', subtitle: 'Los originales' },
                          { title: 'LX Factory', subtitle: 'Arte y cultura' },
                          { title: 'Bairro Alto', subtitle: 'Vida nocturna' },
                          { title: 'Mapa Offline', subtitle: 'Sin internet' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary flex-shrink-0 mt-1">check_circle</span>
                            <div>
                              <p className="font-black text-slate-900">{item.title}</p>
                              <p className="text-xs text-slate-600">{item.subtitle}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-6 mb-8 text-center border border-orange-200">
                      <div className="flex items-center justify-center gap-4 mb-2">
                        <span className="text-5xl font-black text-primary">5.99€</span>
                        <span className="text-slate-500 line-through text-2xl">12.99€</span>
                      </div>
                      <p className="text-sm font-black text-orange-700 uppercase tracking-wide">🔥 54% de descuento · Oferta limitada</p>
                    </div>

                    <button 
                      onClick={handleComprar} 
                      className="group w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-black py-6 px-10 rounded-2xl text-xl flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-all mb-6"
                    >
                      <span className="material-symbols-outlined text-3xl">shopping_cart</span>
                      <span>Comprar Guía Completa</span>
                      <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>

                    <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-600 text-xl">verified</span>
                        <span className="font-semibold">Pago seguro</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-600 text-xl">flash_on</span>
                        <span className="font-semibold">Inmediato</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-purple-600 text-xl">all_inclusive</span>
                        <span className="font-semibold">De por vida</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {seccionActiva === 'mapa' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h2 className="text-4xl font-black text-slate-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Mapa Interactivo de la Ruta
              </h2>
              <MapaInteractivo paradas={hasUserPurchased ? ruta.paradas_data : paradasConImagenes} />
              
              {!hasUserPurchased && (
                <div className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-8 text-center">
                  <p className="text-orange-900 font-bold text-lg mb-4">🔒 Desbloquea el mapa completo con las 8 paradas</p>
                  <button onClick={handleComprar} className="bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all shadow-lg">
                    Ver Guía Completa - 5.99€
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {seccionActiva === 'info' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
              <h2 className="text-4xl font-black mb-8 text-slate-900 flex items-center gap-4" style={{ fontFamily: 'Georgia, serif' }}>
                <span className="material-symbols-outlined text-primary text-5xl">account_balance_wallet</span>
                <span>Presupuesto Estimado</span>
              </h2>
              <div className="space-y-5">
                {Object.entries(ruta.presupuesto).map(([key, value]: [string, any]) => {
                  if (key === 'total') return null;
                  const labels: Record<string, string> = {
                    transporte: 'Transporte', 
                    comidas: 'Comidas', 
                    entradas: 'Entradas', 
                    extras: 'Extras'
                  };
                  return (
                    <div key={key} className="flex justify-between items-center pb-5 border-b border-slate-200 last:border-0">
                      <span className="text-slate-700 font-bold text-xl">{labels[key]}</span>
                      <span className="text-3xl font-black text-slate-900">{value}€</span>
                    </div>
                  );
                })}
                <div className="flex justify-between items-center pt-6 border-t-4 border-primary/20">
                  <span className="text-3xl font-black text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>TOTAL</span>
                  <span className="text-5xl font-black text-primary">{ruta.presupuesto.total}€</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
              <h2 className="text-4xl font-black mb-8 text-slate-900 flex items-center gap-4" style={{ fontFamily: 'Georgia, serif' }}>
                <span className="material-symbols-outlined text-yellow-500 text-5xl">lightbulb</span>
                <span>Consejos Importantes</span>
              </h2>
              <ul className="space-y-5">
                {ruta.consejos.slice(0, hasUserPurchased ? ruta.consejos.length : 3).map((consejo: string, index: number) => (
                  <li key={index} className="flex items-start gap-4 bg-yellow-50 p-5 rounded-2xl border border-yellow-100">
                    <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0 text-2xl">check_circle</span>
                    <span className="text-slate-700 leading-relaxed text-lg">{consejo}</span>
                  </li>
                ))}
              </ul>
              
              {!hasUserPurchased && (
                <div className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-8 text-center">
                  <p className="text-orange-900 font-bold text-lg mb-4">🔒 Desbloquea {ruta.consejos.length - 3} consejos más de locales</p>
                  <button onClick={handleComprar} className="bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all shadow-lg">
                    Ver Guía Completa - 5.99€
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* STICKY CTA MOBILE */}
      {!hasUserPurchased && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary shadow-2xl p-4 z-50">
          <button onClick={handleComprar} className="w-full bg-gradient-to-r from-primary to-orange-500 text-white font-black py-5 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all">
            <span className="material-symbols-outlined text-2xl">lock_open</span>
            <span className="text-lg">Desbloquear - 5.99€</span>
          </button>
        </div>
      )}
    </div>
  );
}
