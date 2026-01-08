'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ItinerariosPage() {
  const guias = [
    {
      titulo: 'Lisboa en 1 Día',
      subtitulo: 'Lo Esencial',
      precio: '3.99€',
      descripcion: 'Descubre lo esencial de Lisboa en un día optimizado. Alfama, Castillo, Belém y los lugares imprescindibles.',
      duracion: '1 día',
      paradas: '8 paradas',
      imagen: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
      href: '/guias/lisboa-1-dia',
      badge: 'Más Vendida',
      badgeColor: 'bg-green-500',
      icon: 'calendar_today'
    },
    {
      titulo: 'Lisboa en 3 Días',
      subtitulo: 'Completa',
      precio: '5.99€',
      descripcion: 'Experiencia completa de Lisboa en 3 días. Incluye excursión a Sintra y los barrios más auténticos.',
      duracion: '3 días',
      paradas: '20+ paradas',
      imagen: 'https://images.unsplash.com/photo-1526306063970-d5c223f28c89?w=800',
      href: '/guias/lisboa-3-dias',
      icon: 'calendar_month'
    },
    {
      titulo: 'Lisboa en Pareja',
      subtitulo: 'Romance',
      precio: '6.99€',
      descripcion: 'Itinerario romántico con los mejores miradores, restaurantes especiales y rincones secretos para parejas.',
      duracion: '2-3 días',
      paradas: 'Miradores + Cenas',
      imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      href: '/guias/lisboa-pareja',
      icon: 'favorite'
    },
    {
      titulo: 'Lisboa con Niños',
      subtitulo: 'Familiar',
      precio: '6.99€',
      descripcion: 'Guía familiar con actividades kid-friendly, restaurantes familiares y planes para toda la familia.',
      duracion: '3-4 días',
      paradas: 'Kid-friendly',
      imagen: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800',
      href: '/guias/lisboa-ninos',
      icon: 'family_restroom'
    },
    {
      titulo: 'Lisboa en 7 Días',
      subtitulo: 'Inmersiva',
      precio: '9.99€',
      descripcion: 'Semana completa en Lisboa. Incluye excursiones a Sintra, Cascais, Óbidos y experiencia local profunda.',
      duracion: '7 días',
      paradas: '40+ paradas',
      imagen: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800',
      href: '/guias/lisboa-7-dias',
      badge: 'Premium',
      badgeColor: 'bg-purple-600',
      icon: 'explore'
    },
    {
      titulo: 'Lisboa en Coche',
      subtitulo: 'Road Trip',
      precio: '7.99€',
      descripcion: 'Rutas optimizadas para coche con información de parking, GPS y excursiones perfectas para road trip.',
      duracion: '3-5 días',
      paradas: 'Rutas + Parking',
      imagen: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800',
      href: '/guias/lisboa-coche',
      icon: 'directions_car'
    },
    {
      titulo: 'Lisboa Cultural',
      subtitulo: 'Arte e Historia',
      precio: '8.99€',
      descripcion: 'Museos, galerías, azulejos y patrimonio artístico. Para amantes del arte y la historia.',
      duracion: '2-4 días',
      paradas: 'Museos + Galerías',
      imagen: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=800',
      href: '/guias/lisboa-cultural',
      icon: 'museum'
    },
    {
      titulo: 'Lisboa Fotografía',
      subtitulo: 'Instagram Perfect',
      precio: '7.99€',
      descripcion: '50+ spots fotográficos con coordenadas GPS, horarios golden hour y mejores ángulos para Instagram.',
      duracion: 'Flexible',
      paradas: '50+ spots',
      imagen: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
      href: '/guias/lisboa-fotografia',
      badge: '⭐ Nuevo',
      badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      icon: 'photo_camera'
    }
  ];

  return (
    <div className="min-h-screen bg-background-light">
      {/* HERO */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-orange-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Guías Digitales<br />
              de Lisboa
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Itinerarios verificados creados por quien vive aquí. Descarga inmediata desde 3.99€.
            </p>
            <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">verified</span>
                <span>Actualizadas 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">flash_on</span>
                <span>Descarga inmediata</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">workspace_premium</span>
                <span>Garantía 48h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACK COMPLETO CTA */}
      <section className="py-16 bg-white border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-50 to-orange-50 rounded-3xl p-8 md:p-12 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-black text-sm">🔥 AHORRA 60%</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Pack Completo: 8 Guías
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  Todas las guías + bonus "Lisboa como Local" + actualizaciones de por vida
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-black text-primary">24.99€</div>
                  <div className="text-2xl text-slate-400 line-through">62.90€</div>
                  <div className="px-3 py-1 bg-green-500 text-white font-bold rounded-full text-sm">
                    -60%
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  href="/pack-completo"
                  className="group bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  <span>Ver Pack Completo</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUÍAS INDIVIDUALES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              O elige tu guía individual
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Todas Nuestras Guías
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cada guía incluye itinerario detallado, restaurantes verificados, consejos de local y mapa offline
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {guias.map((guia, idx) => (
              <article key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100">
                <div className="relative h-48">
                  <Image 
                    src={guia.imagen}
                    alt={guia.titulo}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {guia.badge && (
                    <div className={`absolute top-4 right-4 ${guia.badgeColor} text-white font-bold px-4 py-2 rounded-full text-xs shadow-lg`}>
                      {guia.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">{guia.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-slate-900 leading-tight">{guia.titulo}</h3>
                      <p className="text-xs text-slate-500 font-bold">{guia.subtitulo}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {guia.descripcion}
                  </p>

                  <div className="flex items-center gap-3 mb-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span>{guia.duracion}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      <span>{guia.paradas}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-black text-primary">{guia.precio}</div>
                    <Link 
                      href={guia.href}
                      className="bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-2 px-5 rounded-xl hover:scale-105 transition-all shadow-md text-sm"
                    >
                      Ver Guía
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-center text-slate-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
              Por Qué Confiar en Nuestras Guías
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'verified',
                  title: 'Verificadas 2026',
                  desc: 'Todos los horarios, precios y restaurantes actualizados este año'
                },
                {
                  icon: 'place',
                  title: 'Experiencia Real',
                  desc: 'Creadas por quien vive aquí, no copiadas de internet'
                },
                {
                  icon: 'update',
                  title: 'Actualizaciones Gratis',
                  desc: 'Recibes las versiones actualizadas sin coste adicional'
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                  </div>
                  <h3 className="font-black text-xl text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-gradient-to-br from-primary to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              ¿No sabes cuál elegir?
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Lleva el Pack Completo y ahorra 60%
            </p>
            <Link 
              href="/pack-completo"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <span>Ver Pack Completo 24.99€</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
