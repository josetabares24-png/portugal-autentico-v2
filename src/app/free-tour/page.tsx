import Link from 'next/link';

export default function FreeTourPage() {
  const tours = [
    { 
      nombre: "Lisbon Free Tour - Centro Histórico", 
      empresa: "Lisbon Chill-Out Free Tours",
      duracion: "3 horas", 
      horarios: ["10:00", "15:00"], 
      idiomas: ["Español", "Inglés", "Portugués"], 
      punto: "Praça do Comércio (junto a la estatua)",
      propina: "10-15€", 
      rating: 4.9, 
      reviews: 2847,
      destacado: true,
      descripcion: "El tour más completo. Recorre Baixa, Alfama, miradores y la historia de Lisboa.",
      url: "https://www.freetour.com/lisbon/lisbon-free-walking-tour"
    },
    { 
      nombre: "Sandeman's New Lisbon Tour", 
      empresa: "Sandeman's New Europe",
      duracion: "2.5 horas", 
      horarios: ["10:00", "14:00", "16:00"], 
      idiomas: ["Español", "Inglés"], 
      punto: "Praça Luís de Camões",
      propina: "10-15€", 
      rating: 4.7, 
      reviews: 5234,
      destacado: false,
      descripcion: "Tours con guías profesionales. Muy popular entre turistas internacionales.",
      url: "https://www.neweuropetours.eu/lisbon/en/portal"
    },
    { 
      nombre: "Alfama & Mouraria Free Tour", 
      empresa: "Lisbon Walker",
      duracion: "2.5 horas", 
      horarios: ["10:30", "15:30"], 
      idiomas: ["Inglés"], 
      punto: "Catedral Sé de Lisboa",
      propina: "8-12€", 
      rating: 4.8, 
      reviews: 1256,
      destacado: false,
      descripcion: "Especializado en los barrios más auténticos. Callejuelas, fado y tradición.",
      url: "https://www.lisbonwalker.com"
    },
    { 
      nombre: "Belém Free Walking Tour", 
      empresa: "Lisbon Free Tours",
      duracion: "2 horas", 
      horarios: ["10:00", "14:30"], 
      idiomas: ["Español", "Inglés"], 
      punto: "Monasterio de los Jerónimos (entrada principal)",
      propina: "8-12€", 
      rating: 4.6, 
      reviews: 892,
      destacado: false,
      descripcion: "Descubre la época de los descubrimientos. Torre de Belém, Monasterio y más.",
      url: "https://www.freetour.com/lisbon/belem-free-tour"
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
            TOURS GRATUITOS
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic" style={{fontFamily: 'Georgia, serif'}}>
            Free Walking Tours
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Conoce Lisboa con guías locales. Solo pagas la propina que quieras al final.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{color: 'var(--color-primary)'}}>¿Cómo funcionan los Free Tours?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { paso: 1, titulo: "Reserva online", desc: "Gratis y sin compromiso. Solo eliges fecha y hora.", icon: "📱", color: "from-blue-500 to-blue-600" },
              { paso: 2, titulo: "Llega al punto", desc: "Busca al guía con el paraguas o cartel del tour.", icon: "📍", color: "from-amber-500 to-orange-500" },
              { paso: 3, titulo: "Disfruta el tour", desc: "2-3 horas recorriendo Lisboa con historias locales.", icon: "🚶", color: "from-green-500 to-emerald-500" },
              { paso: 4, titulo: "Deja propina", desc: "Al final, pagas lo que creas justo (10-15€ es normal).", icon: "💶", color: "from-purple-500 to-violet-500" }
            ].map((item) => (
              <div key={item.paso} className="text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="text-xs font-bold text-slate-400 mb-1">PASO {item.paso}</div>
                <h3 className="font-bold mb-1" style={{color: 'var(--color-primary)'}}>{item.titulo}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours disponibles */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Tours recomendados</h2>
            <p className="text-slate-600">Los mejores free tours de Lisboa según nuestra experiencia</p>
          </div>

          <div className="space-y-6">
            {tours.map((tour, index) => (
              <div key={index} className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all ${tour.destacado ? 'ring-2 ring-amber-400' : ''}`}>
                {tour.destacado && (
                  <div className="bg-amber-400 text-amber-900 text-xs font-bold text-center py-1.5">
                    ⭐ NUESTRA RECOMENDACIÓN
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Info principal */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>{tour.nombre}</h3>
                          <p className="text-slate-500 text-sm">{tour.empresa}</p>
                        </div>
                        <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                          <span className="font-bold text-green-700">{tour.rating}</span>
                          <span className="text-green-600 text-xs">({tour.reviews.toLocaleString()})</span>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-4">{tour.descripcion}</p>
                      
                      {/* Detalles */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span className="text-slate-600">{tour.duracion}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                          <span className="text-slate-600 truncate">{tour.punto}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                          <span className="text-slate-600">{tour.idiomas.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span className="text-slate-600">Propina: {tour.propina}</span>
                        </div>
                      </div>
                    </div>

                    {/* Horarios y botón */}
                    <div className="lg:w-48 flex flex-col gap-3">
                      <div className="bg-slate-50 rounded-xl p-3">
                        <div className="text-xs font-semibold text-slate-500 mb-2">HORARIOS</div>
                        <div className="flex flex-wrap gap-2">
                          {tour.horarios.map((h) => (
                            <span key={h} className="px-3 py-1 bg-white rounded-lg text-sm font-medium" style={{color: 'var(--color-primary)'}}>{h}</span>
                          ))}
                        </div>
                      </div>
                      <a 
                        href={tour.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full py-3 rounded-xl font-semibold text-white text-center hover:scale-105 transition-all flex items-center justify-center gap-2"
                        style={{background: 'var(--color-accent)'}}
                      >
                        Reservar gratis
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{color: 'var(--color-primary)'}}>Tips para tu Free Tour</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                titulo: "Llega 10 min antes", 
                desc: "Los grupos se llenan rápido, especialmente en temporada alta. Llegar temprano te asegura un lugar.", 
                icon: "⏰" 
              },
              { 
                titulo: "Lleva efectivo", 
                desc: "La propina se da en efectivo al final. 10-15€ por persona es lo habitual si te gustó el tour.", 
                icon: "💵" 
              },
              { 
                titulo: "Calzado cómodo", 
                desc: "Vas a caminar 2-3 horas por calles empedradas y cuestas. Zapatillas son imprescindibles.", 
                icon: "👟" 
              },
              { 
                titulo: "Protección solar", 
                desc: "Lisboa es muy soleada. Lleva gorra, gafas de sol y protector, especialmente en verano.", 
                icon: "🧴" 
              },
              { 
                titulo: "Botella de agua", 
                desc: "Hay fuentes públicas por toda la ciudad donde puedes rellenar tu botella gratis.", 
                icon: "💧" 
              },
              { 
                titulo: "Haz preguntas", 
                desc: "Los guías son locales y saben mucho. Pregúntales por restaurantes, bares y tips secretos.", 
                icon: "❓" 
              }
            ].map((tip, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5">
                <div className="text-2xl mb-3">{tip.icon}</div>
                <h3 className="font-bold mb-2" style={{color: 'var(--color-primary)'}}>{tip.titulo}</h3>
                <p className="text-slate-600 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aviso importante */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-amber-900">Nuestro consejo</h3>
                <p className="text-amber-800">Los free tours son perfectos para el <strong>primer día</strong> en Lisboa. Te orientas por la ciudad, aprendes historia y el guía te da recomendaciones locales. Después puedes explorar por tu cuenta con nuestros itinerarios, que incluyen restaurantes y spots que los tours no cubren.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>El siguiente paso</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>¿Quieres más que un Free Tour?</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">Nuestros itinerarios incluyen rutas detalladas, restaurantes locales, spots de fotos y todos los secretos que los guías no tienen tiempo de contarte.</p>
            <Link href="/itinerarios" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white hover:scale-105 transition-all" style={{background: 'var(--color-accent)'}}>
              Ver itinerarios desde 5.99€
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
