import Link from 'next/link';
import Image from 'next/image';

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
      badgeColor: "bg-primary",
      imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
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
    <main className="bg-background-light">
      {/* Hero - Estilo Home */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920&q=80"
            alt="Free Tours Lisboa"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-green-400">check_circle</span>
            <span className="text-sm font-bold tracking-wide">RESERVA GRATIS · SIN TARJETA</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Free Walking Tours<br />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              en Lisboa
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Conoce la ciudad con guías locales apasionados. Reserva sin pagar, deja propina al final según tu experiencia.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-green-400">verified</span>
              <span className="text-white font-medium">Cancelación gratis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-blue-400">groups</span>
              <span className="text-white font-medium">Guías locales</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-yellow-400">star</span>
              <span className="text-white font-medium">4.9★ promedio</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-slate-600">Es muy sencillo</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { paso: "1", titulo: "Reserva online gratis", desc: "Sin tarjeta, sin compromiso", icon: "smartphone" },
              { paso: "2", titulo: "Llega al punto", desc: "10 minutos antes de la hora", icon: "location_on" },
              { paso: "3", titulo: "Disfruta el tour", desc: "2-3 horas explorando", icon: "directions_walk" },
              { paso: "4", titulo: "Deja propina", desc: "Lo que consideres justo", icon: "euro" },
            ].map((item) => (
              <div key={item.paso} className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-5xl">{item.icon}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-3">
                  {item.paso}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.titulo}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-24 bg-background-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              Los más valorados
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
              Tours <span className="text-primary">imprescindibles</span>
            </h2>
            <p className="text-xl text-slate-600">Las mejores experiencias para conocer Lisboa</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={tour.imagen} 
                    alt={tour.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  <div className="absolute top-6 left-6">
                    <span className={`${tour.badgeColor} text-white text-sm font-bold px-4 py-2 rounded-full shadow-xl`}>
                      {tour.badge}
                    </span>
                  </div>

                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-3 py-2 rounded-xl flex items-center gap-2 shadow-xl">
                    <span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold">{tour.rating}</span>
                    <span className="text-slate-400 text-sm">({tour.reviews.toLocaleString()})</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/80 text-sm mb-1">{tour.empresa}</p>
                    <h3 className="text-white text-2xl font-bold">{tour.nombre}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-slate-600 mb-6 leading-relaxed">{tour.descripcion}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tour.incluye.slice(0, 2).map((lugar, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full">
                        {lugar}
                      </span>
                    ))}
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-semibold">
                      +{tour.incluye.length - 2} más
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">schedule</span>
                      {tour.duracion}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">euro</span>
                      {tour.propina}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div className="flex gap-2">
                      {tour.horarios.map((h) => (
                        <span key={h} className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm">
                          {h}
                        </span>
                      ))}
                    </div>
                    <a
                      href={tour.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-primary hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
                    >
                      Reservar
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Después del <span className="text-yellow-300">Free Tour</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nuestros itinerarios incluyen los restaurantes, miradores y rincones secretos que los tours no cubren.
          </p>
          <Link 
            href="/itinerarios" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">map</span>
            Ver Itinerarios desde 5.99€
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <p className="text-white/80 text-sm mt-6">✅ Descarga inmediata · ✅ Garantía 14 días</p>
        </div>
      </section>
    </main>
  );
}
