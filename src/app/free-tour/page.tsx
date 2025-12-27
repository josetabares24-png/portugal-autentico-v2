import Link from 'next/link';

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
      badgeColor: "bg-blue-500",
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
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" alt="Lisboa Free Tour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 text-white" style={{background: 'var(--color-accent)'}}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            TOURS GRATUITOS CON GUÍAS LOCALES
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic" style={{fontFamily: 'Georgia, serif'}}>
            Free Walking Tours en Lisboa
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8">
            Conoce la ciudad con guías apasionados. Reserva gratis, paga solo la propina que quieras al final.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/90">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Reserva sin pagar
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Guías locales
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Cancelación gratis
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona - Compacto */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-center">
            {[
              { paso: "1", texto: "Reserva online gratis", icon: "📱" },
              { paso: "2", texto: "Llega al punto de encuentro", icon: "📍" },
              { paso: "3", texto: "Disfruta 2-3h de tour", icon: "🚶" },
              { paso: "4", texto: "Deja la propina que quieras", icon: "💶" },
            ].map((item) => (
              <div key={item.paso} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-400">PASO {item.paso}</span>
                  <p className="text-sm font-medium" style={{color: 'var(--color-primary)'}}>{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Destacados */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase mb-2 block" style={{color: 'var(--color-accent)'}}>Los mejores valorados</span>
            <h2 className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>Tours clásicos de Lisboa</h2>
            <p className="text-slate-600 mt-2">Los imprescindibles para conocer la ciudad</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {toursDestacados.map((tour, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Imagen */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={tour.imagen} 
                    alt={tour.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`${tour.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                      {tour.badge}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-lg">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span className="font-bold text-sm">{tour.rating}</span>
                    <span className="text-slate-400 text-xs">({tour.reviews.toLocaleString()})</span>
                  </div>
                  
                  {/* Empresa */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-sm">{tour.empresa}</p>
                    <h3 className="text-white text-xl font-bold">{tour.nombre}</h3>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <p className="text-slate-600 text-sm mb-4">{tour.descripcion}</p>
                  
                  {/* Qué incluye */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-400 mb-2">QUÉ VERÁS</p>
                    <div className="flex flex-wrap gap-2">
                      {tour.incluye.map((lugar, i) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{lugar}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Info rápida */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {tour.duracion}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                      {tour.idiomas.join(" · ")}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      {tour.punto}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Propina: {tour.propina}
                    </div>
                  </div>
                  
                  {/* Horarios y botón */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex gap-2">
                      {tour.horarios.map((h) => (
                        <span key={h} className="text-sm font-semibold px-3 py-1 rounded-lg bg-slate-100" style={{color: 'var(--color-primary)'}}>{h}</span>
                      ))}
                    </div>
                    <a 
                      href={tour.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white hover:scale-105 transition-all"
                      style={{background: 'var(--color-accent)'}}
                    >
                      Reservar
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Alternativos */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase mb-2 block" style={{color: 'var(--color-accent)'}}>Experiencias únicas</span>
            <h2 className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>Tours temáticos</h2>
            <p className="text-slate-600 mt-2">Para quienes buscan algo diferente</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {toursAlternativos.map((tour, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                {/* Imagen */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={tour.imagen} 
                    alt={tour.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`${tour.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                      {tour.badge}
                    </span>
                  </div>
                  
                  {/* Rating pequeño */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-0.5 rounded flex items-center gap-1">
                    <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span className="font-bold text-xs">{tour.rating}</span>
                  </div>
                  
                  {/* Título sobre imagen */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white text-lg font-bold">{tour.nombre}</h3>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-4">{tour.descripcion}</p>
                  
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {tour.duracion} · {tour.idiomas.join(", ")}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      {tour.punto}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex gap-1.5">
                      {tour.horarios.map((h) => (
                        <span key={h} className="text-xs font-medium px-2 py-1 rounded bg-slate-100 text-slate-600">{h}</span>
                      ))}
                    </div>
                    <a 
                      href={tour.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-semibold hover:underline flex items-center gap-1"
                      style={{color: 'var(--color-accent)'}}
                    >
                      Reservar
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{color: 'var(--color-primary)'}}>Tips para tu Free Tour</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { titulo: "Llega 10 min antes", desc: "Los grupos se llenan rápido en temporada alta.", icon: "⏰" },
              { titulo: "Lleva efectivo", desc: "La propina se da en mano. 10-15€ es lo normal.", icon: "💵" },
              { titulo: "Calzado cómodo", desc: "Lisboa tiene muchas cuestas y adoquines.", icon: "👟" },
              { titulo: "Protección solar", desc: "La ciudad es muy soleada todo el año.", icon: "🧴" },
              { titulo: "Botella de agua", desc: "Hay fuentes públicas para rellenar gratis.", icon: "💧" },
              { titulo: "Pregunta al guía", desc: "Tienen los mejores tips de restaurantes.", icon: "💬" }
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <span className="text-2xl">{tip.icon}</span>
                <div>
                  <h3 className="font-semibold" style={{color: 'var(--color-primary)'}}>{tip.titulo}</h3>
                  <p className="text-slate-600 text-sm">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consejo + CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-amber-200 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-amber-900">Nuestro consejo</h3>
                <p className="text-amber-800">Haz un Free Tour el <strong>primer día</strong>. Te orientas por la ciudad, aprendes la historia básica y el guía te dará recomendaciones de restaurantes y bares locales. Después puedes explorar por tu cuenta con más contexto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Después del Free Tour</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Explora Lisboa por tu cuenta</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">Nuestros itinerarios incluyen los restaurantes, miradores y rincones secretos que los Free Tours no tienen tiempo de cubrir.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/itinerarios" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white hover:scale-105 transition-all" style={{background: 'var(--color-accent)'}}>
                Ver itinerarios desde 5.99€
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/apps" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 hover:scale-105 transition-all" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
                Apps útiles para el viaje
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
