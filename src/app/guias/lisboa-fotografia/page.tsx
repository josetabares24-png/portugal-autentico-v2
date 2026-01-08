'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LisboaFotografiaPage() {
  return (
    <div className="min-h-screen bg-background-light">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200" 
            alt="Lisboa Fotografía"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-purple-300/30">
            <span className="material-symbols-outlined text-pink-300">new_releases</span>
            <span className="text-sm font-bold">⭐ GUÍA NUEVA 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Lisboa Fotografía:<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Instagram Perfect
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            50+ spots fotográficos con coordenadas GPS exactas, horarios golden hour y mejores ángulos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => alert('Próximamente: Checkout Stripe')}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>Comprar por 7.99€</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <Link href="/pack-completo" className="text-white/80 hover:text-white text-sm underline">
              O ahorra 60% con el Pack Completo →
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
              <span>50+ spots</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">wb_twilight</span>
              <span>Golden hour</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">map</span>
              <span>GPS exacto</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
                Para Fotógrafos e Instagramers
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Qué Incluye Esta Guía
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                '50+ ubicaciones exactas con coordenadas GPS',
                'Horarios óptimos golden hour y blue hour',
                'Mejores ángulos y encuadres para cada spot',
                'Settings técnicos (ISO, apertura, focal)',
                'Spots secretos no turísticos',
                'Rutas fotográficas optimizadas',
                'Presets Lightroom recomendados',
                'Mapa interactivo offline descargable',
                'Estrategia hashtags Instagram por ubicación',
                'Calendar golden hour Lisboa 2026',
                'Tips para móvil y cámara réflex',
                'Actualizaciones gratuitas de por vida'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-5 rounded-xl">
                  <span className="material-symbols-outlined text-purple-600 text-2xl flex-shrink-0">check_circle</span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-4xl">emoji_events</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">BONUS Incluido</h3>
                  <p className="text-lg text-slate-700 mb-3">
                    <strong>Guía "Golden Hour Calendar Lisboa 2026"</strong> con horarios exactos de salida y puesta de sol para cada mes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS DE SPOTS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black text-center text-slate-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
              7 Categorías de Spots
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: 'landscape',
                  title: 'Miradores Icónicos',
                  count: '12 spots',
                  desc: 'Santa Luzia, Portas do Sol, Senhora do Monte, Graça y más',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: 'gallery_thumbnail',
                  title: 'Calles Emblemáticas',
                  count: '10 spots',
                  desc: 'Rua da Bica, Alfama, Bairro Alto, Pink Street',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: 'account_balance',
                  title: 'Monumentos y Arquitectura',
                  count: '8 spots',
                  desc: 'Torre de Belém, Jerónimos, MAAT, Castillo',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  icon: 'tram',
                  title: 'Tranvías y Transporte',
                  count: '6 spots',
                  desc: 'Tranvía 28, Elevador da Glória, Ferry Cacilhas',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  icon: 'lock',
                  title: 'Spots Secretos',
                  count: '8 spots',
                  desc: 'Lugares no turísticos que solo locales conocen',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: 'texture',
                  title: 'Azulejos y Detalles',
                  count: '6 spots',
                  desc: 'Mejores azulejos, detalles arquitectónicos',
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  icon: 'star',
                  title: 'Bonus Spots',
                  count: '+10 adicionales',
                  desc: 'Locations premium solo en la guía completa',
                  color: 'from-pink-500 to-rose-500'
                }
              ].map((categoria, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-100">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categoria.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-white text-3xl">{categoria.icon}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-black text-slate-900">{categoria.title}</h3>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {categoria.count}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">{categoria.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EJEMPLO DE SPOTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-center text-slate-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
              Ejemplo de Spots Incluidos
            </h2>

            <div className="space-y-4">
              {[
                {
                  numero: '1',
                  lugar: 'Mirador de Santa Luzia',
                  gps: '38.7126, -9.1284',
                  hora: '09:00-10:30 (luz suave mañana)',
                  tip: 'Usar arcos como marco natural. Evitar 12:00-16:00'
                },
                {
                  numero: '5',
                  lugar: 'Mirador da Senhora do Monte',
                  gps: '38.7180, -9.1334',
                  hora: 'Blue hour: 19:30-20:15',
                  tip: 'El MEJOR mirador de Lisboa. Banco izquierdo mejor ángulo'
                },
                {
                  numero: '13',
                  lugar: 'Rua da Bica con tranvía',
                  gps: '38.7101, -9.1459',
                  hora: '09:00-10:00 (antes turistas)',
                  tip: 'Esperar tranvía amarillo subiendo. Viral shot'
                },
                {
                  numero: '23',
                  lugar: 'Torre de Belém',
                  gps: '38.6916, -9.2160',
                  hora: '17:30-19:00 (atardecer lateral)',
                  tip: 'Ángulo único desde orilla opuesta + reflejos agua'
                },
                {
                  numero: '37',
                  lugar: 'Jardim da Cerca da Graça',
                  gps: '38.7183, -9.1318',
                  hora: '16:30-17:30',
                  tip: 'Jardín secreto. Casi nadie lo conoce'
                }
              ].map((spot, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                      {spot.numero}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl text-slate-900 mb-2">{spot.lugar}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          <span className="font-mono">{spot.gps}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          <span>{spot.hora}</span>
                        </div>
                        <div className="flex items-start gap-2 text-slate-700">
                          <span className="material-symbols-outlined text-sm">lightbulb</span>
                          <span className="font-medium">{spot.tip}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 text-lg">
                + 45 spots más con información completa en la guía
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Captura Lisboa Perfectamente
            </h2>
            <p className="text-xl mb-8 text-white/90">
              50+ spots verificados por solo 7.99€
            </p>

            <button 
              onClick={() => alert('Próximamente: Checkout Stripe')}
              className="group bg-white text-purple-600 hover:bg-gray-50 font-black py-6 px-12 rounded-2xl text-2xl shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3 mb-6"
            >
              <span className="material-symbols-outlined text-3xl">shopping_cart</span>
              <span>Comprar Guía Fotografía</span>
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>

            <p className="text-white/80 text-sm mb-6">
              ✓ Descarga inmediata · ✓ Actualizaciones gratis · ✓ Garantía 48h
            </p>

            <div className="text-white/80 text-sm">
              <Link href="/pack-completo" className="underline hover:text-white">
                O lleva el Pack Completo (8 guías + bonus) por 24.99€ y ahorra 60%
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
