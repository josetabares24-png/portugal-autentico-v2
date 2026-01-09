import Image from 'next/image';
import Link from 'next/link';

export default function ItinerariosPage() {
  const guias = [
    {
      id: 'pack-completo',
      titulo: 'Pack Completo',
      subtitulo: '8 Guías Completas',
      descripcion: 'Todas las guías + bonus "Lisboa como Local" + actualizaciones de por vida',
      precio: 24.99,
      precioOriginal: 62.90,
      descuento: 60,
      duracion: 'Acceso completo',
      paradas: '40+ paradas',
      restaurantes: '30+ restaurantes',
      destacado: true,
      badge: '🔥 MÁS VENDIDA',
      color: 'from-orange-500 to-red-500',
      imagen: '/images/pack-completo.jpg'
    },
    {
      id: 'lisboa-1-dia',
      titulo: 'Lisboa en 1 Día',
      subtitulo: 'Lo Esencial',
      descripcion: 'Descubre lo imprescindible de Lisboa en un día perfectamente organizado',
      precio: 3.99,
      duracion: '1 día completo',
      paradas: '8 paradas',
      restaurantes: '5 restaurantes',
      destacado: false,
      color: 'from-blue-500 to-blue-600',
      imagen: '/images/lisboa-1-dia.jpg'
    },
    {
      id: 'lisboa-2-dias',
      titulo: 'Lisboa en 2 Días',
      subtitulo: 'Experiencia Completa',
      descripcion: 'Explora Lisboa con calma, incluyendo barrios alternativos y miradores secretos',
      precio: 5.99,
      duracion: '2 días',
      paradas: '15 paradas',
      restaurantes: '8 restaurantes',
      destacado: false,
      color: 'from-green-500 to-green-600',
      imagen: '/images/lisboa-2-dias.jpg'
    },
    {
      id: 'lisboa-3-dias',
      titulo: 'Lisboa en 3 Días',
      subtitulo: 'Inmersión Total',
      descripcion: 'Descubre Lisboa como un local: mercados, barrios auténticos y experiencias únicas',
      precio: 7.99,
      duracion: '3 días',
      paradas: '20+ paradas',
      restaurantes: '12 restaurantes',
      destacado: false,
      color: 'from-purple-500 to-purple-600',
      imagen: '/images/lisboa-3-dias.jpg'
    },
    {
      id: 'lisboa-fotografia',
      titulo: 'Lisboa Fotográfico',
      subtitulo: 'Los Mejores Spots',
      descripcion: 'Ruta diseñada para capturar las mejores fotos de Lisboa con luz perfecta',
      precio: 4.99,
      duracion: '1 día',
      paradas: '12 spots',
      restaurantes: '4 cafés',
      destacado: false,
      badge: '📸 INSTAGRAMEABLE',
      color: 'from-pink-500 to-rose-500',
      imagen: '/images/lisboa-fotografia.jpg'
    },
    {
      id: 'lisboa-familia',
      titulo: 'Lisboa en Familia',
      subtitulo: 'Con Niños',
      descripcion: 'Itinerario adaptado para familias con parques, oceanario y actividades kids-friendly',
      precio: 6.99,
      duracion: '2 días',
      paradas: '10 paradas',
      restaurantes: '6 restaurantes',
      destacado: false,
      color: 'from-yellow-500 to-orange-400',
      imagen: '/images/lisboa-familia.jpg'
    },
    {
      id: 'lisboa-romantico',
      titulo: 'Lisboa Romántico',
      subtitulo: 'Para Parejas',
      descripcion: 'Los rincones más románticos: miradores al atardecer, cenas íntimas y paseos especiales',
      precio: 5.99,
      duracion: '2 días',
      paradas: '10 paradas',
      restaurantes: '8 restaurantes',
      destacado: false,
      badge: '❤️ ESPECIAL PAREJAS',
      color: 'from-red-400 to-pink-500',
      imagen: '/images/lisboa-romantico.jpg'
    },
    {
      id: 'lisboa-foodie',
      titulo: 'Lisboa Foodie',
      subtitulo: 'Ruta Gastronómica',
      descripcion: 'Tour culinario por los mejores restaurantes, mercados y tabernas tradicionales',
      precio: 6.99,
      duracion: '2 días',
      paradas: '8 paradas',
      restaurantes: '15 lugares',
      destacado: false,
      badge: '🍽️ GASTRONÓMICA',
      color: 'from-emerald-500 to-teal-500',
      imagen: '/images/lisboa-foodie.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background-light">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-orange-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white py-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Guías Digitales
            <br />
            <span className="text-yellow-300">de Lisboa</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Itinerarios verificados creados por quien vive aquí. Descarga inmediata desde 3.99€
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-base">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">update</span>
              <span>Actualizadas 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">download</span>
              <span>Descarga inmediata</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">verified</span>
              <span>Garantía 48h</span>
            </div>
          </div>
        </div>
      </section>

      {/* PACK COMPLETO DESTACADO */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 border-4 border-orange-200 shadow-2xl">
              {/* Badge */}
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black rounded-full mb-6 shadow-lg">
                🔥 AHORRA 60% - MÁS VENDIDA
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Izquierda */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    Pack Completo:
                    <br />
                    <span className="text-primary">8 Guías</span>
                  </h2>

                  <p className="text-lg text-slate-700 mb-6">
                    Todas las guías + bonus "Lisboa como Local" + actualizaciones de por vida
                  </p>

                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-6xl font-black text-primary">24.99€</span>
                    <span className="text-2xl text-slate-400 line-through">62.90€</span>
                    <span className="px-3 py-1 bg-green-500 text-white font-black rounded-full">-60%</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[
                      '8 itinerarios completos',
                      '40+ paradas verificadas',
                      '30+ restaurantes recomendados',
                      'Coordenadas GPS exactas',
                      'Actualizaciones gratis de por vida',
                      'Bonus: Lisboa como Local'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700">
                        <span className="material-symbols-outlined text-green-600">check_circle</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/pack-completo"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-black py-4 px-8 rounded-2xl text-xl shadow-xl hover:scale-105 transition-all"
                  >
                    <span>Ver Pack Completo</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>

                {/* Derecha - Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { numero: '8', label: 'Guías Completas', icon: 'map' },
                    { numero: '40+', label: 'Paradas', icon: 'location_on' },
                    { numero: '30+', label: 'Restaurantes', icon: 'restaurant' },
                    { numero: '∞', label: 'Actualizaciones', icon: 'update' }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                      <span className="material-symbols-outlined text-primary text-4xl mb-2">{stat.icon}</span>
                      <div className="text-4xl font-black text-slate-900 mb-1">{stat.numero}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUÍAS INDIVIDUALES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Guías <span className="text-primary">Individuales</span>
              </h2>
              <p className="text-xl text-slate-600">
                Elige la guía perfecta para tu viaje
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guias.filter(g => g.id !== 'pack-completo').map((guia) => (
                <Link
                  key={guia.id}
                  href={`/guias/${guia.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  {/* Imagen placeholder con gradiente */}
                  <div className={`h-48 bg-gradient-to-br ${guia.color} flex items-center justify-center relative`}>
                    <span className="material-symbols-outlined text-white text-6xl">explore</span>
                    
                    {guia.badge && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 font-bold rounded-full text-sm">
                        {guia.badge}
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {guia.titulo}
                    </h3>
                    <p className="text-sm text-primary font-bold mb-3">{guia.subtitulo}</p>
                    <p className="text-slate-600 mb-4 text-sm">{guia.descripcion}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">schedule</span>
                        <span>{guia.duracion}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">location_on</span>
                        <span>{guia.paradas}</span>
                      </div>
                    </div>

                    {/* Precio */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-3xl font-black text-slate-900">{guia.precio}€</span>
                      <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                        <span>Ver guía</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ NUESTRAS GUÍAS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Por Qué Nuestras <span className="text-primary">Guías?</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'verified_user',
                  titulo: 'Creadas por Locales',
                  desc: 'Vivimos en Lisboa. Conocemos los mejores spots que no salen en guías turísticas.',
                  color: 'blue'
                },
                {
                  icon: 'update',
                  titulo: 'Actualizadas 2026',
                  desc: 'Horarios, precios y recomendaciones actualizadas constantemente.',
                  color: 'green'
                },
                {
                  icon: 'map',
                  titulo: 'GPS + Restaurantes',
                  desc: 'Coordenadas exactas y restaurantes verificados en cada parada.',
                  color: 'orange'
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 flex items-center justify-center mx-auto mb-6`}>
                    <span className="material-symbols-outlined text-white text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{feature.titulo}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              Preguntas <span className="text-primary">Frecuentes</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: '¿Cómo recibo las guías?',
                  a: 'Acceso inmediato después del pago. Recibes link por email y puedes acceder desde tu cuenta.'
                },
                {
                  q: '¿Las guías se actualizan?',
                  a: 'Sí, actualizamos horarios, precios y recomendaciones constantemente. Tienes acceso a todas las actualizaciones gratis.'
                },
                {
                  q: '¿Funcionan sin internet?',
                  a: 'Sí, puedes acceder desde tu cuenta en cualquier momento. Recomendamos tener internet para usar GPS.'
                },
                {
                  q: '¿Qué incluye cada guía?',
                  a: 'Itinerario hora por hora, coordenadas GPS, restaurantes con precios, tips de local y transporte.'
                },
                {
                  q: '¿Hay garantía?',
                  a: 'Garantía de 48h sin preguntas. Si no te convence, devolvemos tu dinero.'
                }
              ].map((faq, idx) => (
                <details key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <summary className="font-black text-lg text-slate-900 cursor-pointer flex items-center justify-between">
                    <span>{faq.q}</span>
                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <p className="mt-4 text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-primary to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Empieza a Planear tu Viaje
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Descarga tu guía ahora y descubre Lisboa como un local
            </p>

            <Link
              href="/pack-completo"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 font-black py-6 px-12 rounded-2xl text-2xl shadow-2xl hover:scale-105 transition-all"
            >
              <span>Ver Pack Completo</span>
              <span className="material-symbols-outlined text-2xl">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
