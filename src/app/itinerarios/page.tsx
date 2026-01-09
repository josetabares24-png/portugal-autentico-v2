import Image from 'next/image';
import Link from 'next/link';

export default function ItinerariosPage() {
  const guias = [
    {
      id: 'pack-completo',
      titulo: 'Pack Completo',
      subtitulo: 'Las 8 Guías Completas',
      descripcion: 'Acceso total a todos los itinerarios + bonus exclusivo "Lisboa como Local" + actualizaciones perpetuas',
      precio: '24.99',
      precioOriginal: '62.90',
      descuento: '-60%',
      duracion: 'Acceso ilimitado',
      paradas: '40+ experiencias',
      restaurantes: '30+ locales',
      badge: '✓ MÁS VENDIDA',
      imagen: '/images/guias/pack-completo.jpg'
    },
    {
      id: 'lisboa-1-dia',
      titulo: 'Lisboa en 1 Día',
      subtitulo: 'Lo Esencial',
      descripcion: 'El itinerario perfecto para descubrir lo imprescindible de Lisboa en un día impecablemente organizado',
      precio: '3.99',
      duracion: '1 día completo',
      paradas: '8 paradas clave',
      restaurantes: '5 restaurantes',
      imagen: '/images/guias/lisboa-1-dia.jpg'
    },
    {
      id: 'lisboa-2-dias',
      titulo: 'Lisboa en 2 Días',
      subtitulo: 'Experiencia Completa',
      descripcion: 'Explora Lisboa sin prisas, incluyendo barrios auténticos, miradores secretos y experiencias locales',
      precio: '5.99',
      duracion: '2 días',
      paradas: '15 paradas',
      restaurantes: '8 restaurantes',
      imagen: '/images/guias/lisboa-2-dias.jpg'
    },
    {
      id: 'lisboa-3-dias',
      titulo: 'Lisboa en 3 Días',
      subtitulo: 'Inmersión Total',
      descripcion: 'Vive Lisboa como residente: mercados tradicionales, barrios escondidos y rincones que solo conocen los locales',
      precio: '7.99',
      duracion: '3 días',
      paradas: '20+ paradas',
      restaurantes: '12 restaurantes',
      imagen: '/images/guias/lisboa-3-dias.jpg'
    },
    {
      id: 'lisboa-fotografia',
      titulo: 'Lisboa Fotográfico',
      subtitulo: 'Los Mejores Encuadres',
      descripcion: 'Ruta fotográfica diseñada para capturar Lisboa en su mejor luz: golden hour, composiciones perfectas y spots secretos',
      precio: '4.99',
      duracion: '1 día',
      paradas: '12 spots fotográficos',
      restaurantes: '4 cafés con encanto',
      badge: '📸 INSTAGRAMEABLE',
      imagen: '/images/guias/lisboa-fotografia.jpg'
    },
    {
      id: 'lisboa-familia',
      titulo: 'Lisboa en Familia',
      subtitulo: 'Con Niños',
      descripcion: 'Itinerario familiar con oceanario, parques infantiles, museos interactivos y restaurantes kids-friendly',
      precio: '6.99',
      duracion: '2 días',
      paradas: '10 paradas familiares',
      restaurantes: '6 restaurantes',
      imagen: '/images/guias/lisboa-familia.jpg'
    },
    {
      id: 'lisboa-romantico',
      titulo: 'Lisboa Romántico',
      subtitulo: 'Para Parejas',
      descripcion: 'Los rincones más románticos de Lisboa: atardeceres en miradores, cenas íntimas y paseos al anochecer',
      precio: '5.99',
      duracion: '2 días',
      paradas: '10 paradas románticas',
      restaurantes: '8 restaurantes especiales',
      badge: '♥ ESPECIAL PAREJAS',
      imagen: '/images/guias/lisboa-romantico.jpg'
    },
    {
      id: 'lisboa-foodie',
      titulo: 'Lisboa Foodie',
      subtitulo: 'Ruta Gastronómica',
      descripcion: 'Tour culinario por los mejores mercados, tabernas centenarias, pastelerías históricas y restaurantes de autor',
      precio: '6.99',
      duracion: '2 días',
      paradas: '8 paradas gourmet',
      restaurantes: '15 experiencias',
      badge: '🍽 GASTRONÓMICA',
      imagen: '/images/guias/lisboa-foodie.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center py-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-white tracking-wide">GUÍAS VERIFICADAS 2026</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Guías Digitales
            <br />
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              de Lisboa
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Itinerarios auténticos creados por quien vive aquí.
            <br />
            Restaurantes verificados, coordenadas exactas, tips de local.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">verified</span>
              <span>Descarga inmediata</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">update</span>
              <span>Actualizadas 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">workspace_premium</span>
              <span>Garantía 48h</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white/50 text-3xl">expand_more</span>
        </div>
      </section>

      {/* PACK COMPLETO DESTACADO */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-bold text-sm tracking-wide">MEJOR OPCIÓN</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Pack Completo
              </h2>
              <p className="text-xl text-slate-600" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Las 8 guías + bonus exclusivo "Lisboa como Local"
              </p>
            </div>

            {/* Pack Card */}
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-slate-100">
              {/* Badge flotante */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-orange-500 text-white font-bold rounded-full shadow-lg">
                ✓ MÁS VENDIDA · AHORRA 60%
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mt-4">
                {/* Izquierda - Descripción */}
                <div>
                  <div className="mb-8">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-7xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                        24<span className="text-5xl">.99</span><span className="text-4xl">€</span>
                      </span>
                      <div className="flex flex-col">
                        <span className="text-2xl text-slate-400 line-through font-light">62.90€</span>
                        <span className="text-sm text-green-600 font-bold">Ahorras 37.91€</span>
                      </div>
                    </div>
                    <p className="text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>
                      Pago único · Acceso de por vida · Sin suscripciones
                    </p>
                  </div>

                  <div className="space-y-4 mb-10">
                    {[
                      'Las 8 guías completas de Lisboa',
                      '40+ experiencias verificadas',
                      '30+ restaurantes locales con precios',
                      'Coordenadas GPS de cada parada',
                      'Bonus: "Lisboa como Local"',
                      'Actualizaciones gratuitas perpetuas',
                      'Soporte prioritario'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/pack-completo"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold py-5 px-10 rounded-2xl text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <span>Ver Pack Completo</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>

                {/* Derecha - Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { numero: '8', label: 'Guías\nCompletas', icon: 'auto_stories' },
                    { numero: '40+', label: 'Paradas\nVerificadas', icon: 'location_on' },
                    { numero: '30+', label: 'Restaurantes\nLocales', icon: 'restaurant' },
                    { numero: '∞', label: 'Actualizaciones\nGratis', icon: 'all_inclusive' }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 text-center border border-slate-100 hover:shadow-lg transition-shadow">
                      <span className="material-symbols-outlined text-primary text-5xl mb-4 block">{stat.icon}</span>
                      <div className="text-5xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                        {stat.numero}
                      </div>
                      <div className="text-sm text-slate-600 whitespace-pre-line leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUÍAS INDIVIDUALES */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Guías <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Individuales</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Elige el itinerario perfecto para tu estilo de viaje
              </p>
            </div>

            {/* Grid de guías */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guias.filter(g => g.id !== 'pack-completo').map((guia, idx) => (
                <Link
                  key={guia.id}
                  href={`/guias/${guia.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-500"
                >
                  {/* Imagen placeholder con gradiente */}
                  <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-400 text-8xl">explore</span>
                    </div>
                    
                    {guia.badge && (
                      <div className="absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-sm text-slate-900 font-bold rounded-xl text-xs shadow-lg">
                        {guia.badge}
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                        {guia.titulo}
                      </h3>
                      <p className="text-sm text-primary font-semibold tracking-wide uppercase">{guia.subtitulo}</p>
                    </div>

                    <p className="text-slate-600 mb-6 text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                      {guia.descripcion}
                    </p>

                    {/* Mini stats */}
                    <div className="flex flex-col gap-2 mb-6 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">schedule</span>
                        <span>{guia.duracion}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">location_on</span>
                        <span>{guia.paradas}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">restaurant</span>
                        <span>{guia.restaurantes}</span>
                      </div>
                    </div>

                    {/* Footer con precio */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <div>
                        <span className="text-4xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                          {guia.precio}<span className="text-2xl">€</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span className="text-sm">Ver guía</span>
                        <span className="material-symbols-outlined text-xl">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Empieza a Planear
              <br />
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                tu Viaje Perfecto
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-12 leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Descarga ahora y descubre Lisboa con los ojos de un local
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/pack-completo"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all"
              >
                <span>Pack Completo</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>

              <Link
                href="/itinerarios"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-6 px-12 rounded-2xl text-xl border border-white/20 hover:border-white/40 transition-all"
              >
                <span>Ver todas las guías</span>
              </Link>
            </div>

            <p className="text-slate-500 text-sm mt-8">
              ✓ Garantía de devolución 48h · ✓ Pago seguro con Stripe
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
