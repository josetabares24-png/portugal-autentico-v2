import Link from 'next/link';

export default function FreeTourPage() {
  const tours = [
    { nombre: "Lisbon Free Tour - Centro Historico", duracion: "3 horas", horarios: "10:00 y 15:00", idiomas: "Espanol, Ingles, Portugues", punto: "Praca do Comercio", propina: "10-15 EUR", rating: "4.8", reviews: "2,400+", url: "https://www.freetour.com/lisbon" },
    { nombre: "Sandeman New Lisbon Tour", duracion: "2.5 horas", horarios: "10:30, 14:00, 16:00", idiomas: "Espanol, Ingles", punto: "Praca Luis de Camoes", propina: "10-15 EUR", rating: "4.7", reviews: "5,000+", url: "https://www.neweuropetours.eu/lisbon" },
    { nombre: "Free Walking Tour Alfama", duracion: "2 horas", horarios: "11:00 y 16:00", idiomas: "Ingles", punto: "Catedral Se de Lisboa", propina: "8-12 EUR", rating: "4.9", reviews: "800+", url: "https://www.guruwalk.com/lisbon" }
  ];

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" alt="Lisboa Free Tour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 text-white" style={{background: 'var(--color-accent)'}}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
            TOURS CON GUIAS LOCALES
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic" style={{fontFamily: 'Georgia, serif'}}>
            Free Walking Tours
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Tours gratuitos donde pagas lo que quieras al final. La mejor forma de conocer Lisboa.
          </p>
        </div>
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{color: 'var(--color-primary)'}}>Disfruta el tour</h3>
                <p className="text-slate-600">Un guia local te ensena la ciudad durante 2-3 horas.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{color: 'var(--color-primary)'}}>Paga lo que quieras</h3>
                <p className="text-slate-600">Al final, das la propina que consideres justo (10-15 EUR es lo normal).</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-8 text-center" style={{color: 'var(--color-primary)'}}>Tours recomendados</h2>

          <div className="space-y-6">
            {tours.map((tour, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>{tour.nombre}</h3>
                      <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">Gratis</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {tour.duracion}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                        {tour.punto}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                        {tour.idiomas}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                        {tour.rating} ({tour.reviews})
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-sm text-slate-500">Propina sugerida: <span className="font-semibold">{tour.propina}</span></div>
                    <a href={tour.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-white hover:scale-105 transition-all" style={{background: 'var(--color-accent)'}}>
                      Reservar
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-amber-900">Nuestro consejo</h3>
                <p className="text-amber-800">Los free tours son una excelente introduccion a Lisboa el primer dia. Te orientas, aprendes historia y el guia te da tips locales. Despues puedes explorar por tu cuenta con nuestros itinerarios que incluyen restaurantes y spots secretos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>El siguiente paso</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>¿Quieres mas que un free tour?</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">Nuestros itinerarios incluyen rutas detalladas, restaurantes locales, spots de fotos y todos los secretos que los guias no te cuentan.</p>
            <Link href="/itinerarios" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white hover:scale-105 transition-all" style={{background: 'var(--color-accent)'}}>
              Ver itinerarios desde 5.99 EUR
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
