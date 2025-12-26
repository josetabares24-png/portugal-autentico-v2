import Link from 'next/link';

export default function FreeTourPage() {
  const tours = [
    {
      nombre: "Lisbon Free Tour - Centro Historico",
      duracion: "3 horas",
      horarios: "10:00 y 15:00",
      idiomas: "Espanol, Ingles, Portugues",
      punto: "Praca do Comercio (estatua del rey)",
      propina: "10-15 EUR",
      rating: "4.8",
      reviews: "2,400+",
      url: "https://www.freetour.com/lisbon"
    },
    {
      nombre: "Sandeman's New Lisbon Tour",
      duracion: "2.5 horas",
      horarios: "10:30, 14:00, 16:00",
      idiomas: "Espanol, Ingles",
      punto: "Praca Luis de Camoes",
      propina: "10-15 EUR",
      rating: "4.7",
      reviews: "5,000+",
      url: "https://www.neweuropetours.eu/lisbon"
    },
    {
      nombre: "Free Walking Tour Alfama",
      duracion: "2 horas",
      horarios: "11:00 y 16:00",
      idiomas: "Ingles",
      punto: "Catedral Se de Lisboa",
      propina: "8-12 EUR",
      rating: "4.9",
      reviews: "800+",
      url: "https://www.guruwalk.com/lisbon"
    }
  ];

  return (
    <main>
      <section className="relative py-16" style={{background: 'var(--color-primary)'}}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920)'}}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Free Walking Tours en Lisboa</h1>
          <p className="text-xl text-white/80">Tours gratuitos con guias locales - pagas lo que quieras al final</p>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Como funcionan los Free Tours?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{background: 'var(--color-secondary)'}}>
                  <span className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>1</span>
                </div>
                <h3 className="font-semibold mb-2" style={{color: 'var(--color-primary)'}}>Reserva gratis</h3>
                <p className="text-sm text-slate-600">Reservas online sin pagar nada. Solo eliges fecha y hora.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{background: 'var(--color-secondary)'}}>
                  <span className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>2</span>
                </div>
                <h3 className="font-semibold mb-2" style={{color: 'var(--color-primary)'}}>Haces el tour</h3>
                <p className="text-sm text-slate-600">2-3 horas caminando con un guia local que cuenta historias.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{background: 'var(--color-secondary)'}}>
                  <span className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>3</span>
                </div>
                <h3 className="font-semibold mb-2" style={{color: 'var(--color-primary)'}}>Dejas propina</h3>
                <p className="text-sm text-slate-600">Al final pagas lo que creas justo. Lo normal: 10-15 EUR.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>Tours recomendados</h2>
          
          <div className="space-y-6">
            {tours.map((tour, index) => (
              <div key={index} className="card-hover bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold" style={{color: 'var(--color-primary)'}}>{tour.nombre}</h3>
                      <span className="flex items-center gap-1 text-sm text-amber-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        {tour.rating}
                      </span>
                      <span className="text-xs text-slate-500">({tour.reviews} reviews)</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-slate-600">
                      <div>
                        <span className="text-slate-400">Duracion:</span> {tour.duracion}
                      </div>
                      <div>
                        <span className="text-slate-400">Horarios:</span> {tour.horarios}
                      </div>
                      <div>
                        <span className="text-slate-400">Idiomas:</span> {tour.idiomas}
                      </div>
                      <div>
                        <span className="text-slate-400">Propina:</span> {tour.propina}
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">
                      <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      {tour.punto}
                    </p>
                  </div>
                  <a href={tour.url} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm inline-flex items-center gap-2 whitespace-nowrap">
                    Reservar
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-8" style={{background: 'var(--color-primary)'}}>
            <div className="md:flex md:items-center md:justify-between gap-6">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-white mb-2">Prefieres ir a tu ritmo?</h3>
                <p className="text-white/80">Nuestros itinerarios te dan la misma info que un guia, pero tu decides cuando parar, donde comer, y sin grupos de 30 personas.</p>
              </div>
              <Link href="/itinerarios" className="btn-primary inline-flex items-center gap-2 whitespace-nowrap bg-white hover:scale-105 transition-all" style={{color: 'var(--color-primary)'}}>
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
