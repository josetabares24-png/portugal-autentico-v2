'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AppsPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');

  const apps = [
    {
      nombre: 'Citymapper',
      categoria: 'Transporte',
      descripcion: 'La mejor app para moverte por Lisboa. Metro, bus, tranvía, Uber: todo en una app con rutas en tiempo real.',
      icono: 'directions_transit',
      color: 'from-green-500 to-green-600',
      precio: 'Gratis',
      link: '#'
    },
    {
      nombre: 'Google Maps',
      categoria: 'Navegación',
      descripcion: 'Imprescindible para GPS offline. Descarga el mapa de Lisboa antes de viajar y úsalo sin datos.',
      icono: 'map',
      color: 'from-blue-500 to-blue-600',
      precio: 'Gratis',
      link: '#'
    },
    {
      nombre: 'Viva Viagem App',
      categoria: 'Transporte',
      descripcion: 'App oficial para recargar tu tarjeta de transporte público desde el móvil.',
      icono: 'confirmation_number',
      color: 'from-purple-500 to-purple-600',
      precio: 'Gratis',
      link: '#'
    },
    {
      nombre: 'TheFork',
      categoria: 'Restaurantes',
      descripcion: 'Reserva restaurantes con descuentos de hasta 50%. Los mejores sitios de Lisboa con ofertas exclusivas.',
      icono: 'restaurant',
      color: 'from-red-500 to-red-600',
      precio: 'Gratis',
      link: '#'
    },
    {
      nombre: 'Uber / Bolt',
      categoria: 'Transporte',
      descripcion: 'Taxis privados más baratos que taxis oficiales. Bolt suele ser 10-20% más económico que Uber.',
      icono: 'local_taxi',
      color: 'from-slate-700 to-slate-800',
      precio: 'Gratis (pago por uso)',
      link: '#'
    },
    {
      nombre: 'Revolut / Wise',
      categoria: 'Utilidades',
      descripcion: 'Las mejores tarjetas para viajar: sin comisiones de cambio, tasas reales, sacar dinero gratis.',
      icono: 'credit_card',
      color: 'from-indigo-500 to-indigo-600',
      precio: 'Gratis',
      link: '#'
    },
    {
      nombre: 'Timeout Lisboa',
      categoria: 'Eventos',
      descripcion: 'Qué hacer en Lisboa: eventos, conciertos, exposiciones, mercados. Agenda actualizada diariamente.',
      icono: 'event',
      color: 'from-orange-500 to-orange-600',
      precio: 'Gratis',
      link: '#'
    },
    {
      nombre: 'XE Currency',
      categoria: 'Utilidades',
      descripcion: 'Conversor de moneda offline. Perfecto para saber cuánto estás gastando en tu moneda local.',
      icono: 'currency_exchange',
      color: 'from-teal-500 to-teal-600',
      precio: 'Gratis',
      link: '#'
    },
    {
      nombre: 'Google Translate',
      categoria: 'Utilidades',
      descripcion: 'Traduce menús, carteles y conversaciones. Descarga portugués offline antes de viajar.',
      icono: 'translate',
      color: 'from-blue-600 to-blue-700',
      precio: 'Gratis',
      link: '#'
    }
  ];

  const categorias = ['Todas', 'Transporte', 'Restaurantes', 'Utilidades', 'Eventos'];

  const appsFiltradas = categoriaActiva === 'Todas' 
    ? apps 
    : apps.filter(app => app.categoria === categoriaActiva);

  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg"
            alt="Lisboa panorama"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">phone_iphone</span>
            <span className="text-sm font-bold tracking-wide">APPS ESENCIALES</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Apps<br />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Imprescindibles
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Las aplicaciones que realmente necesitas para vivir Lisboa como un local y ahorrarte quebraderos de cabeza
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* CATEGORÍAS FUNCIONALES */}
      <section className="py-6 bg-gradient-to-r from-primary to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all text-xs md:text-base ${
                  cat === categoriaActiva
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* APPS GRID COMPACTO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Apps <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Recomendadas</span>
              </h2>
              <p className="text-sm md:text-xl text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Descarga estas apps antes de viajar y tendrás todo lo necesario
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {appsFiltradas.map((app, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-white text-2xl md:text-4xl">{app.icono}</span>
                  </div>

                  <div className="inline-block px-2 py-1 md:px-3 md:py-1 bg-slate-100 rounded-full text-[10px] md:text-xs font-bold text-slate-700 mb-3 md:mb-4">
                    {app.categoria}
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                    {app.nombre}
                  </h3>

                  <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed text-xs md:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                    {app.descripcion}
                  </p>

                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                    <span className="text-xs md:text-sm font-bold text-green-600">{app.precio}</span>
                    <Link
                      href={app.link}
                      className="inline-flex items-center gap-1.5 md:gap-2 text-primary hover:text-primary-dark font-bold text-xs md:text-sm group/link"
                    >
                      <span>Descargar</span>
                      <span className="material-symbols-outlined text-base md:text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {appsFiltradas.length === 0 && (
              <div className="text-center py-12 md:py-20">
                <p className="text-base md:text-xl text-slate-500" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  No hay apps en esta categoría todavía
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TIPS COMPACTOS */}
      <section className="py-24 bg-background-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Tips <span className="text-primary">Adicionales</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
              {[
                {
                  icon: 'download',
                  titulo: 'Descarga mapas offline',
                  desc: 'Google Maps permite descargar mapas. Hazlo con WiFi del hotel para no gastar datos.'
                },
                {
                  icon: 'wifi',
                  titulo: 'WiFi gratis',
                  desc: 'Casi todos los cafés y restaurantes tienen WiFi gratis. Pide la contraseña al pedir.'
                },
                {
                  icon: 'sim_card',
                  titulo: 'SIM turística',
                  desc: 'En el aeropuerto puedes comprar SIM Vodafone o MEO con datos. 10-20€ por 10-20GB.'
                },
                {
                  icon: 'battery_charging_full',
                  titulo: 'Powerbank',
                  desc: 'Lleva batería externa. Usar GPS y Google Maps consume mucha batería.'
                }
              ].map((tip, idx) => (
                <div key={idx} className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                    <span className="material-symbols-outlined text-white text-xl md:text-2xl">{tip.icon}</span>
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-slate-900 mb-2 md:mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {tip.titulo}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA COMPACTO */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2000&auto=format&fit=crop"
            alt="Lisboa sunset"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Listo para Explorar
              <br />
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Lisboa?
              </span>
            </h2>

            <p className="text-sm md:text-xl text-slate-300 mb-6 md:mb-12 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Descubre nuestros itinerarios completos con restaurantes verificados,
              <span className="hidden md:inline"><br />coordenadas GPS y tips de local</span>
            </p>

            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold py-3 px-8 md:py-6 md:px-12 rounded-xl md:rounded-2xl text-base md:text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <span>Ver Itinerarios</span>
              <span className="material-symbols-outlined text-lg md:text-2xl">arrow_forward</span>
            </Link>

            <p className="text-slate-500 text-xs md:text-sm mt-4 md:mt-8">
              ✓ Desde 3.99€ · ✓ Descarga inmediata · ✓ Actualizadas 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
