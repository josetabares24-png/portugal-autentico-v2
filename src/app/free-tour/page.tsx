import Link from 'next/link';

export default function FreeTourPage() {
  const tours = [
    {
      nombre: "Centro Histórico de Lisboa",
      empresa: "Lisbon Chill-Out Free Tours",
      duracion: "3 horas",
      horarios: ["10:00", "15:00"],
      idiomas: ["Español", "Inglés"],
      punto: "Praça do Comércio",
      propina: "10-15€",
      rating: 4.9,
      reviews: 2847,
      badge: "Más popular",
      badgeColor: "bg-orange-500",
      imagen: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80",
      descripcion: "El tour más completo por el corazón de Lisboa. Baixa, Rossio, Alfama y los mejores miradores.",
      incluye: ["Plaza del Comercio", "Catedral Sé", "Miradouro das Portas do Sol", "Castillo San Jorge"],
      url: "https://www.freetour.com/lisbon/lisbon-free-walking-tour"
    },
    {
      nombre: "Alfama & Mouraria Auténtico",
      empresa: "Lisbon Walker",
      duracion: "2.5 horas",
      horarios: ["10:30", "16:00"],
      idiomas: ["Español", "Inglés"],
      punto: "Catedral Sé de Lisboa",
      propina: "10-12€",
      rating: 4.9,
      reviews: 1256,
      badge: "Más auténtico",
      badgeColor: "bg-green-600",
      imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800&q=80",
      descripcion: "Descubre los barrios más auténticos. Fado, azulejos y vida local que no verás en otros tours.",
      incluye: ["Callejuelas de Alfama", "Casas de Fado", "Mercados locales", "Arte callejero"],
      url: "https://www.lisbonwalker.com"
    },
    {
      nombre: "Belém y los Descubrimientos",
      empresa: "Lisbon Free Tours",
      duracion: "2 horas",
      horarios: ["10:00", "14:30"],
      idiomas: ["Español", "Inglés"],
      punto: "Monasterio de los Jerónimos",
      propina: "8-12€",
      rating: 4.7,
      reviews: 1892,
      badge: "Historia",
      badgeColor: "bg-blue-600",
      imagen: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800&q=80",
      descripcion: "La época dorada de Portugal. Navegantes, especias y arquitectura manuelina impresionante.",
      incluye: ["Torre de Belém", "Monasterio Jerónimos", "Monumento Descubrimientos", "Pastéis de Belém"],
      url: "https://www.freetour.com/lisbon/belem-free-tour"
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero - Estilo Home */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" 
            alt="Lisboa" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
            <svg className="w-4 h-4 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-white text-sm font-semibold">RESERVA GRATIS · SIN TARJETA</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
            Free Walking Tours<br />
            <span className="text-orange-300">en Lisboa</span>
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Conoce la ciudad con guías locales apasionados. Reserva sin pagar, deja propina al final según tu experiencia.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-white font-medium">Cancelación gratis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-white font-medium">Guías locales</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Georgia, serif'}}>
              ¿Cómo funciona?
            </h2>
            <p className="text-slate-600 text-lg">Es muy sencillo</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { paso: "1", titulo: "Reserva online gratis", desc: "Sin tarjeta, sin compromiso" },
              { paso: "2", titulo: "Llega al punto", desc: "10 minutos antes de la hora" },
              { paso: "3", titulo: "Disfruta el tour", desc: "2-3 horas explorando" },
              { paso: "4", titulo: "Deja propina", desc: "Lo que consideres justo" },
            ].map((item) => (
              <div key={item.paso} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">{item.paso}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.titulo}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full mb-4">
              <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <span className="text-sm font-semibold text-orange-600">LOS MÁS VALORADOS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Georgia, serif'}}>
              Tours imprescindibles
            </h2>
            <p className="text-slate-600 text-lg">Las mejores experiencias para conocer Lisboa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={tour.imagen} 
                    alt={tour.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <span className={`${tour.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                      {tour.badge}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span className="font-bold text-sm">{tour.rating}</span>
                    <span className="text-slate-400 text-xs">({tour.reviews.toLocaleString()})</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-xs mb-1">{tour.empresa}</p>
                    <h3 className="text-white text-lg font-bold">{tour.nombre}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{tour.descripcion}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.incluye.slice(0, 2).map((lugar, i) => (
                      <span key={i} className="text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded-full">
                        {lugar}
                      </span>
                    ))}
                    <span className="text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded-full">
                      +{tour.incluye.length - 2} más
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tour.duracion}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tour.propina}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex gap-2">
                      {tour.horarios.map((h) => (
                        <span key={h} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600">
                          {h}
                        </span>
                      ))}
                    </div>
                    <a
                      href={tour.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 font-bold text-sm hover:text-orange-700"
                    >
                      Reservar →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg border border-orange-100 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Georgia, serif'}}>
              Después del Free Tour
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Nuestros itinerarios incluyen los restaurantes, miradores y rincones secretos que los tours no cubren.
            </p>
            <Link 
              href="/itinerarios" 
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Ver Itinerarios desde 5.99€
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
