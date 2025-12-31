import Link from 'next/link';
import Image from 'next/image';

export default function FreeTourPage() {
  const toursDestacados = [
    { 
      nombre: "Centro Histórico de Lisboa", 
      empresa: "Lisbon Chill-Out Free Tours",
      duracion: "3 horas", 
      horarios: ["10:00", "15:00"], 
      idiomas: ["ES", "EN", "PT"], 
      punto: "Praça do Comércio",
      propina: "10-15€", 
      rating: 4.9, 
      reviews: 2847,
      destacado: true,
      badge: "Más popular",
      badgeColor: "bg-amber-500",
      imagen: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80",
      descripcion: "El tour más completo. Baixa, Rossio, Alfama, Castillo y los mejores miradores.",
      incluye: ["Plaza del Comercio", "Catedral Sé", "Miradouro das Portas do Sol", "Castillo San Jorge (exterior)"],
      url: "https://www.freetour.com/lisbon/lisbon-free-walking-tour"
    },
    { 
      nombre: "Alfama & Mouraria Auténtico", 
      empresa: "Lisbon Walker",
      duracion: "2.5 horas", 
      horarios: ["10:30", "16:00"], 
      idiomas: ["EN", "ES"], 
      punto: "Catedral Sé de Lisboa",
      propina: "10-12€", 
      rating: 4.9, 
      reviews: 1256,
      destacado: true,
      badge: "Más auténtico",
      badgeColor: "bg-emerald-500",
      imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800&q=80",
      descripcion: "Descubre los barrios más auténticos de Lisboa. Fado, azulejos y vida local.",
      incluye: ["Callejuelas de Alfama", "Casas de Fado", "Mercados locales", "Arte callejero"],
      url: "https://www.lisbonwalker.com"
    },
    {
      nombre: "Belém y los Descubrimientos",
      empresa: "Lisbon Free Tours",
      duracion: "2 horas",
      horarios: ["10:00", "14:30"],
      idiomas: ["ES", "EN"],
      punto: "Monasterio de los Jerónimos",
      propina: "8-12€",
      rating: 4.7,
      reviews: 1892,
      destacado: false,
      badge: "Historia",
      badgeColor: "bg-secondary-blue",
      imagen: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800&q=80",
      descripcion: "La época dorada de Portugal. Navegantes, especias y arquitectura manuelina.",
      incluye: ["Torre de Belém", "Monasterio Jerónimos", "Monumento Descubrimientos", "Pastéis de Belém"],     
      url: "https://www.freetour.com/lisbon/belem-free-tour"
    },
    {
      nombre: "Bairro Alto & Chiado",
      empresa: "Sandeman's New Europe",
      duracion: "2.5 horas",
      horarios: ["10:00", "14:00", "17:00"],
      idiomas: ["EN", "ES"],
      punto: "Praça Luís de Camões",
      propina: "10-15€",
      rating: 4.7,
      reviews: 3421,
      destacado: false,
      badge: "Bohemio",
      badgeColor: "bg-purple-500",
      imagen: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800&q=80",
      descripcion: "El lado bohemio y artístico. Librerías, cafés históricos y vida nocturna.",
      incluye: ["Elevador Santa Justa", "Convento do Carmo", "Café A Brasileira", "Miradouro São Pedro"],       
      url: "https://www.neweuropetours.eu/lisbon"
    },
  ];

  const toursAlternativos = [
    {
      nombre: "Lisboa al Atardecer",
      empresa: "Sunset Tours Lisbon",
      duracion: "2 horas",
      horarios: ["18:00"],
      idiomas: ["EN", "ES"],
      punto: "Miradouro da Graça",
      propina: "10-15€",
      rating: 4.8,
      reviews: 687,
      badge: "Sunset",
      badgeColor: "bg-orange-500",
      imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      descripcion: "Miradores secretos al atardecer con vino incluido.",
      url: "https://www.freetour.com/lisbon"
    },
    {
      nombre: "Street Art Tour",
      empresa: "Urban Art Lisbon",
      duracion: "2 horas",
      horarios: ["11:00", "15:00"],
      idiomas: ["EN"],
      punto: "LX Factory",
      propina: "8-12€",
      rating: 4.8,
      reviews: 534,
      badge: "Arte",
      badgeColor: "bg-pink-500",
      imagen: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
      descripcion: "Murales, graffiti y la escena artística underground.",
      url: "https://www.freetour.com/lisbon"
    },
    {
      nombre: "Gastronomía Portuguesa",
      empresa: "Taste of Lisboa",
      duracion: "3 horas",
      horarios: ["10:30", "17:00"],
      idiomas: ["EN", "ES"],
      punto: "Mercado da Ribeira",
      propina: "12-18€",
      rating: 4.9,
      reviews: 423,
      badge: "Foodie",
      badgeColor: "bg-red-500",
      imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
      descripcion: "Degustación de pastéis, ginjinha, bacalao y vinos.",
      url: "https://www.freetour.com/lisbon"
    },
  ];

  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Lisboa Free Tour"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/85"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8 text-sm font-bold uppercase tracking-wide">
            <span className="material-symbols-outlined text-yellow-400">verified</span>
            Tours gratuitos con guías locales
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Free Walking Tours<br />
            <span className="text-amber-300">en Lisboa</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Conoce la ciudad con guías apasionados. Reserva gratis, paga solo la propina que quieras al final.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-green-400">check_circle</span>
              <span className="text-white font-medium">Reserva sin pagar</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-blue-400">groups</span>
              <span className="text-white font-medium">Guías locales</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-yellow-400">event_busy</span>
              <span className="text-white font-medium">Cancelación gratis</span>
            </div>
          </div>

          <a 
            href="#tours" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">explore</span>
            Ver todos los tours
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-slate-600 text-lg">Es muy sencillo</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { paso: "1", texto: "Reserva online gratis", desc: "Sin tarjeta, sin compromiso", icon: "smartphone" },
              { paso: "2", texto: "Llega al punto", desc: "10 minutos antes de la hora", icon: "location_on" },
              { paso: "3", texto: "Disfruta el tour", desc: "2-3 horas explorando", icon: "directions_walk" },
              { paso: "4", texto: "Deja propina", desc: "Lo que consideres justo", icon: "euro" },
            ].map((item) => (
              <div key={item.paso} className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto mb-3">
                  {item.paso}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.texto}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Destacados */}
      <section className="py-20 bg-background-cream" id="tours">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              Los mejores valorados
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Tours clásicos de Lisboa
            </h2>
            <p className="text-slate-600 text-lg">Los imprescindibles para conocer la ciudad</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {toursDestacados.map((tour, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Imagen */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tour.imagen}
                    alt={tour.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`${tour.badgeColor} text-white text-sm font-bold px-4 py-2 rounded-full shadow-xl`}>
                      {tour.badge}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-3 py-2 rounded-xl flex items-center gap-2 shadow-xl">
                    <span className="material-symbols-outlined text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold">{tour.rating}</span>
                    <span className="text-slate-400 text-sm">({tour.reviews.toLocaleString()})</span>
                  </div>

                  {/* Info sobre imagen */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/80 text-sm mb-1">{tour.empresa}</p>
                    <h3 className="text-white text-2xl font-bold">{tour.nombre}</h3>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8">
                  <p className="text-slate-600 mb-6 leading-relaxed">{tour.descripcion}</p>

                  {/* Qué verás */}
                  <div className="mb-6">
                    <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wide">Qué verás</p>
                    <div className="flex flex-wrap gap-2">
                      {tour.incluye.map((lugar, i) => (
                        <span key={i} className="text-sm bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full">
                          {lugar}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Info grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">schedule</span>
                      <span className="text-slate-700 font-medium">{tour.duracion}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">translate</span>
                      <span className="text-slate-700 font-medium">{tour.idiomas.join(" · ")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">location_on</span>
                      <span className="text-slate-700 font-medium text-sm">{tour.punto}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">euro</span>
                      <span className="text-slate-700 font-medium">{tour.propina}</span>
                    </div>
                  </div>

                  {/* Horarios y CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div className="flex gap-2">
                      {tour.horarios.map((h) => (
                        <span key={h} className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold">
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

      {/* Tours Alternativos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary-blue/10 text-secondary-blue rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              Experiencias únicas
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Tours temáticos
            </h2>
            <p className="text-slate-600 text-lg">Para quienes buscan algo diferente</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {toursAlternativos.map((tour, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-200">
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tour.imagen}
                    alt={tour.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <span className={`${tour.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                      {tour.badge}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <span className="material-symbols-outlined text-amber-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-sm">{tour.rating}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{tour.nombre}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{tour.descripcion}</p>

                  <div className="space-y-2 text-sm text-slate-600 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-400 text-lg">schedule</span>
                      <span>{tour.duracion} · {tour.idiomas.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-400 text-lg">location_on</span>
                      <span>{tour.punto}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex gap-2">
                      {tour.horarios.map((h) => (
                        <span key={h} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700">
                          {h}
                        </span>
                      ))}
                    </div>
                    <a
                      href={tour.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold hover:underline flex items-center gap-1"
                    >
                      Reservar
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-background-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Tips para tu Free Tour
            </h2>
            <p className="text-slate-600 text-lg">Aprovecha al máximo tu experiencia</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { titulo: "Llega 10 min antes", desc: "Los grupos se llenan rápido en temporada alta.", icon: "schedule" },
              { titulo: "Lleva efectivo", desc: "La propina se da en mano. 10-15€ es lo normal.", icon: "euro" },
              { titulo: "Calzado cómodo", desc: "Lisboa tiene muchas cuestas y adoquines.", icon: "footprint" },
              { titulo: "Protección solar", desc: "La ciudad es muy soleada todo el año.", icon: "wb_sunny" },
              { titulo: "Botella de agua", desc: "Hay fuentes públicas para rellenar gratis.", icon: "water_drop" },
              { titulo: "Pregunta al guía", desc: "Tienen los mejores tips de restaurantes.", icon: "chat" }
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-200">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">{tip.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{tip.titulo}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consejo destacado */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-10 border-2 border-amber-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-3xl">lightbulb</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">💡 Nuestro consejo</h3>
                <p className="text-amber-800 text-lg leading-relaxed">
                  Haz un Free Tour el <strong>primer día</strong>. Te orientas por la ciudad, aprendes la historia básica y el guía te dará recomendaciones de restaurantes y bares locales. Después puedes explorar por tu cuenta con más contexto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              Después del Free Tour
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Explora Lisboa<br />por tu cuenta
            </h2>
            <p className="text-slate-600 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Nuestros itinerarios incluyen los restaurantes, miradores y rincones secretos que los Free Tours no tienen tiempo de cubrir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/itinerarios" 
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-all"
              >
                <span className="material-symbols-outlined text-2xl">map</span>
                Ver itinerarios desde 5.99€
              </Link>
              <Link 
                href="/apps" 
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-slate-300 hover:border-slate-400 text-slate-900 rounded-2xl font-bold text-xl transition-all"
              >
                <span className="material-symbols-outlined text-2xl">apps</span>
                Apps útiles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
