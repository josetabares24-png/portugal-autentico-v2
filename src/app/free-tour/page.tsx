import Link from 'next/link';

export default function FreeTourPage() {
  const tours = [
    { nombre: "Lisbon Free Tour - Centro Historico", duracion: "3 horas", horarios: "10:00 y 15:00", idiomas: "Espanol, Ingles, Portugues", punto: "Praca do Comercio", propina: "10-15 EUR", rating: "4.8", reviews: "2,400+", url: "https://www.freetour.com/lisbon" },
    { nombre: "Sandeman New Lisbon Tour", duracion: "2.5 horas", horarios: "10:30, 14:00, 16:00", idiomas: "Espanol, Ingles", punto: "Praca Luis de Camoes", propina: "10-15 EUR", rating: "4.7", reviews: "5,000+", url: "https://www.neweuropetours.eu/lisbon" },
    { nombre: "Free Walking Tour Alfama", duracion: "2 horas", horarios: "11:00 y 16:00", idiomas: "Ingles", punto: "Catedral Se de Lisboa", propina: "8-12 EUR", rating: "4.9", reviews: "800+", url: "https://www.guruwalk.com/lisbon" }
  ];

  return (
    <main>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 text-white backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
              Tours con guias locales
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Free <span style={{color: 'var(--color-accent)'}}>Walking</span> Tours
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">Tours gratuitos donde pagas lo que quieras al final. La mejor forma de conocer Lisboa con un local.</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{color: 'var(--color-primary)'}}>Como funcionan?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{color: 'var(--color-primary)'}}>Reserva gratis</h3>
                <p className="text-slate-600">Reservas online sin pagar nada. Solo eliges fecha y hora.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{color: 'var(--color-primary)'}}>Haces el tour</h3>
                <p className="text-slate-600">2-3 horas caminando con un guia local apasionado.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{color: 'var(--color-primary)'}}>Dejas propina</h3>
                <p className="text-slate-600">Al final pagas lo que creas justo segun tu experiencia.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>Tours recomendados</h2>
          
          <div className="space-y-4">
            {tours.map((tour, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>{tour.nombre}</h3>
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100">
                        <svg className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        <span className="text-sm font-bold text-amber-700">{tour.rating}</span>
                      </div>
                      <span className="text-xs text-slate-500">({tour.reviews} reviews)</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-slate-600">{tour.duracion}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span className="text-slate-600">{tour.horarios}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                        <span className="text-slate-600">{tour.idiomas}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-green-600 font-medium">{tour.propina}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 mt-3 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      Punto de encuentro: {tour.punto}
                    </p>
                  </div>
                  <a href={tour.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-lg" style={{background: 'var(--color-primary)'}}>
                    Reservar gratis
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900"></div>
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)', backgroundSize: 'cover'}}></div>
            <div className="relative p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Prefieres ir a tu ritmo?</h3>
                <p className="text-white/70 text-lg">Sin grupos, sin horarios fijos. Tu decides cuando parar a comer o hacer fotos.</p>
              </div>
              <Link href="/itinerarios" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl bg-white" style={{color: 'var(--color-primary)'}}>
                Ver itinerarios
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
