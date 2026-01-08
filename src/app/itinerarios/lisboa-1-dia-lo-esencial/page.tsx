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

  // Simulamos que el usuario NO ha comprado (cambiar a true para ver versión completa)
  const hasUserPurchased = false;
  
  // Mostramos solo 3 paradas gratis
  const paradasGratis = ruta.paradas_data.slice(0, 3);
  const paradasBloqueadas = ruta.paradas_data.slice(3);

  const abrirGoogleMaps = (lat: number, lng: number, nombre: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
    window.open(url, '_blank');
  };

  const handleComprar = () => {
    // Aquí iría la integración con Stripe
    alert('🚀 Aquí se abriría Stripe para pagar 5.99 EUR\n\nPor ahora es solo una demo visual.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Mejorado */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/itinerarios" className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors font-semibold">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              <span>Volver a itinerarios</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-2xl font-bold text-orange-600">5.99€</div>
                <div className="text-xs text-gray-500">Guía completa</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION - ESTILO HOMEPAGE UNIFICADO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background con gradiente mejorado */}
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

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Badge Verificado */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">verified</span>
            <span className="text-sm font-bold tracking-wide">GUÍAS VERIFICADAS 2025</span>
          </div>

          {/* Título Principal con Gradiente */}
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Lisboa en 1 día:<br />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Lo Esencial
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            {ruta.descripcion}
          </p>

          {/* Stats Pills */}
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
              <span className="material-symbols-outlined text-white text-sm">payments</span>
              <span className="text-white text-sm font-medium">{ruta.presupuesto.total} EUR presupuesto</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">map</span>
              <span className="text-white text-sm font-medium">Mapa offline</span>
            </div>
          </div>

          {/* Trust Indicators */}
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Tabs Navigation */}
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

      <main className="container mx-auto px-4 py-8">
        {seccionActiva === 'itinerario' && (
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Encabezado de Preview */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
                Vista Previa Gratuita
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Descubre las Primeras 3 Paradas
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Mostrando {paradasGratis.length} de {ruta.paradas_data.length} paradas. Desbloquea la guía completa para ver todos los detalles, restaurantes y consejos de locales.
              </p>
            </div>

            {/* PARADAS GRATIS (1-3) */}
            {paradasGratis.map((parada: any) => (
              <article key={parada.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-72 md:h-auto">
                    <Image src={parada.imagenUrl} alt={parada.titulo} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl text-2xl">
                      {parada.id}
                    </div>
                    {parada.precio && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white font-bold px-4 py-2 rounded-full shadow-lg">
                        {parada.precio}
                      </div>
                    )}
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${
                        parada.tipo === 'Comida' ? 'bg-orange-100' : 
                        parada.tipo === 'Visita' ? 'bg-blue-100' : 
                        'bg-green-100'
                      }`}>
                        <span className={`material-symbols-outlined ${
                          parada.tipo === 'Comida' ? 'text-orange-600' : 
                          parada.tipo === 'Visita' ? 'text-blue-600' : 
                          'text-green-600'
                        }`}>
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
                    <button 
                      onClick={() => abrirGoogleMaps(parada.coordenadas.lat, parada.coordenadas.lng, parada.titulo)} 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition"
                    >
                      <span className="material-symbols-outlined">map</span>
                      <span>Ver Ruta en Google Maps</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {/* PAYWALL MEJORADO */}
            {!hasUserPurchased && (
              <div className="relative mt-16">
                {/* Paradas bloqueadas con blur */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white z-10 pointer-events-none" style={{ backdropFilter: 'blur(10px)' }}></div>
                  
                  {paradasBloqueadas.slice(0, 2).map((parada: any) => (
                    <article key={parada.id} className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8 opacity-40 pointer-events-none select-none">
                      <div className="md:flex">
                        <div className="md:w-2/5 relative h-72 md:h-auto">
                          <Image src={parada.imagenUrl} alt={parada.titulo} fill className="object-cover" />
                          <div className="absolute top-4 left-4 bg-gradient-to-br from-gray-400 to-gray-500 text-white font-black w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl text-2xl">
                            {parada.id}
                          </div>
                        </div>
                        <div className="md:w-3/5 p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-gray-100">
                              <span className="material-symbols-outlined text-gray-400">lock</span>
                            </div>
                            <div>
                              <div className="text-sm text-gray-400 font-semibold">{parada.tipo}</div>
                              <div className="text-xs text-gray-300">{parada.hora} - {parada.duracion}</div>
                            </div>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-400">{parada.titulo}</h2>
                          <div className="h-24 bg-gray-100 rounded-lg mb-4"></div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* CTA PAYWALL - DISEÑO MEJORADO */}
                <div className="absolute inset-0 z-20 flex items-center justify-center px-4 py-20">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full border-4 border-orange-500/20">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-orange-600 text-5xl">lock_open</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                        Desbloquea el Itinerario Completo
                      </h3>
                      <p className="text-lg text-gray-600 mb-2">
                        Accede a las {paradasBloqueadas.length} paradas restantes con:
                      </p>
                    </div>

                    {/* Lista de beneficios */}
                    <div className="bg-orange-50 rounded-2xl p-6 mb-8">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-orange-600 flex-shrink-0 mt-0.5">check_circle</span>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">Tasca do Chico</p>
                            <p className="text-xs text-gray-600">Almuerzo auténtico lisboeta</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-orange-600 flex-shrink-0 mt-0.5">check_circle</span>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">Belém Completo</p>
                            <p className="text-xs text-gray-600">Torre y Monasterio</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-orange-600 flex-shrink-0 mt-0.5">check_circle</span>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">Pastéis de Belém</p>
                            <p className="text-xs text-gray-600">Los originales desde 1837</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-orange-600 flex-shrink-0 mt-0.5">check_circle</span>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">LX Factory</p>
                            <p className="text-xs text-gray-600">Arte urbano y cultura</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-orange-600 flex-shrink-0 mt-0.5">check_circle</span>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">Bairro Alto</p>
                            <p className="text-xs text-gray-600">Vida nocturna local</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-orange-600 flex-shrink-0 mt-0.5">check_circle</span>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">Mapa Offline</p>
                            <p className="text-xs text-gray-600">Navegación sin internet</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Precio destacado */}
                    <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-6 mb-6 text-center">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-4xl font-black text-orange-600">5.99€</span>
                        <span className="text-gray-500 line-through text-xl">12.99€</span>
                      </div>
                      <p className="text-sm font-bold text-orange-700">🔥 Oferta de lanzamiento - 54% de descuento</p>
                    </div>

                    {/* Botón CTA */}
                    <button 
                      onClick={handleComprar} 
                      className="group w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-black py-5 px-8 rounded-2xl text-xl flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-all mb-4"
                    >
                      <span className="material-symbols-outlined text-3xl">shopping_cart</span>
                      <span>Comprar Guía Completa</span>
                      <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>

                    {/* Trust badges */}
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-green-600 text-lg">verified</span>
                        <span>Pago seguro</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-blue-600 text-lg">flash_on</span>
                        <span>Acceso inmediato</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-purple-600 text-lg">all_inclusive</span>
                        <span>De por vida</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Si ya compró, mostrar resto de paradas */}
            {hasUserPurchased && (
              <>
                {paradasBloqueadas.map((parada: any) => (
                  <article key={parada.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-2/5 relative h-72 md:h-auto">
                        <Image src={parada.imagenUrl} alt={parada.titulo} fill className="object-cover" />
                        <div className="absolute top-4 left-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl text-2xl">
                          {parada.id}
                        </div>
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg ${
                            parada.tipo === 'Comida' ? 'bg-orange-100' : 
                            parada.tipo === 'Visita' ? 'bg-blue-100' : 
                            'bg-green-100'
                          }`}>
                            <span className={`material-symbols-outlined ${
                              parada.tipo === 'Comida' ? 'text-orange-600' : 
                              parada.tipo === 'Visita' ? 'text-blue-600' : 
                              'text-green-600'
                            }`}>
                              {parada.tipo === 'Comida' ? 'restaurant' : parada.tipo === 'Visita' ? 'place' : 'directions'}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 font-semibold">{parada.tipo}</div>
                            <div className="text-xs text-gray-400">{parada.hora} - {parada.duracion}</div>
                          </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{parada.titulo}</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">{parada.descripcion}</p>
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
                        <button 
                          onClick={() => abrirGoogleMaps(parada.coordenadas.lat, parada.coordenadas.lng, parada.titulo)} 
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition"
                        >
                          <span className="material-symbols-outlined">map</span>
                          <span>Ver Ruta en Google Maps</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}

                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
                  <span className="material-symbols-outlined text-7xl mb-4 inline-block animate-bounce">celebration</span>
                  <h3 className="text-4xl font-black mb-3">¡Ruta Completada!</h3>
                  <p className="text-green-100 text-lg mb-8 max-w-md mx-auto">Has descubierto lo esencial de Lisboa como un verdadero local</p>
                  <Link href="/itinerarios" className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition shadow-xl">
                    <span>Explorar más itinerarios</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </>
            )}
          </div>
        )}

        {seccionActiva === 'mapa' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mapa Interactivo de la Ruta</h2>
              <MapaInteractivo paradas={hasUserPurchased ? ruta.paradas_data : paradasGratis} />
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
              
              {!hasUserPurchased && (
                <div className="mt-6 bg-orange-50 border-2 border-orange-200 rounded-xl p-6 text-center">
                  <p className="text-orange-900 font-semibold mb-3">🔒 Desbloquea el mapa completo con las 8 paradas</p>
                  <button onClick={handleComprar} className="bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition">
                    Ver Guía Completa - 5.99 EUR
                  </button>
                </div>
              )}
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

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="material-symbols-outlined text-yellow-500 text-5xl">lightbulb</span>
                <span>Consejos Importantes</span>
              </h2>
              <ul className="space-y-4">
                {ruta.consejos.slice(0, hasUserPurchased ? ruta.consejos.length : 3).map((consejo: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 bg-yellow-50 p-4 rounded-xl">
                    <span className="material-symbols-outlined text-orange-500 mt-1 flex-shrink-0">check_circle</span>
                    <span className="text-gray-700 leading-relaxed">{consejo}</span>
                  </li>
                ))}
              </ul>
              
              {!hasUserPurchased && (
                <div className="mt-6 bg-orange-50 border-2 border-orange-200 rounded-xl p-6 text-center">
                  <p className="text-orange-900 font-semibold mb-3">🔒 Desbloquea {ruta.consejos.length - 3} consejos más de locales</p>
                  <button onClick={handleComprar} className="bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition">
                    Ver Guía Completa - 5.99 EUR
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* STICKY CTA MOBILE */}
      {!hasUserPurchased && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-orange-500 shadow-2xl p-4 z-50">
          <button onClick={handleComprar} className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg">
            <span className="material-symbols-outlined">lock_open</span>
            <span>Desbloquear - 5.99€</span>
          </button>
        </div>
      )}
    </div>
  );
}
