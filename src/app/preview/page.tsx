import Link from 'next/link';

export default function PreviewPage() {
  return (
    <main>
      <section className="relative py-16" style={{background: 'var(--color-primary)'}}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 bg-green-500 text-white">GRATIS</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Preview del itinerario</h1>
          <p className="text-xl text-white/80">Mira como son nuestros itinerarios antes de comprar</p>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b" style={{background: 'var(--color-primary)'}}>
              <h2 className="text-2xl font-bold text-white">Lisboa Esencial - Manana (Preview)</h2>
              <p className="text-white/70">Esto es un extracto del itinerario de 1 dia</p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>09:00</div>
                    <div className="text-xs text-slate-500">1.5 horas</div>
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-xl p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold" style={{color: 'var(--color-primary)'}}>Barrio de Alfama</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">Visita</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">El barrio mas antiguo de Lisboa. Callejuelas empedradas, ropa tendida, fado sonando desde las ventanas. Empieza por la Catedral Se y pierdete subiendo hacia el castillo.</p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="flex items-center gap-1 text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Alfama, Lisboa
                      </span>
                      <span className="flex items-center gap-1 text-green-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Gratis
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>10:30</div>
                    <div className="text-xs text-slate-500">45 min</div>
                  </div>
                  <div className="flex-1 bg-amber-50 rounded-xl p-5 border border-amber-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold" style={{color: 'var(--color-primary)'}}>Cafe en Cruzes Credo</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">Comida</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">El mejor cafe de especialidad del barrio. Pide el pastel de nata con canela - lo hacen ellos mismos cada manana. Terraza con vistas a la catedral.</p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="flex items-center gap-1 text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Rua Cruzes da Se 29
                      </span>
                      <span className="flex items-center gap-1 text-green-600 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        3-5 EUR
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>11:15</div>
                    <div className="text-xs text-slate-500">1 hora</div>
                  </div>
                  <div className="flex-1 bg-pink-50 rounded-xl p-5 border border-pink-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold" style={{color: 'var(--color-primary)'}}>Mirador de Santa Luzia</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-pink-100 text-pink-700">Foto</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">El mirador mas fotografiado de Lisboa. Azulejos, buganvillas y vistas al rio Tejo. Llega antes de las 12 para evitar grupos de turistas.</p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="flex items-center gap-1 text-pink-600 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Mejor luz: 9-11am
                      </span>
                      <span className="flex items-center gap-1 text-green-600">Gratis</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">í´’</div>
                  <h3 className="text-lg font-bold mb-2" style={{color: 'var(--color-primary)'}}>Continua en el itinerario completo...</h3>
                  <p className="text-slate-600 text-sm mb-4">Tarde en Belem, atardecer en el mejor mirador secreto, cena en tasca local, y mas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Te gusto lo que viste?</h3>
            <p className="text-slate-600 mb-8">Esto es solo la manana. El itinerario completo incluye todo el dia + restaurantes + mapas offline.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="btn-primary inline-flex items-center justify-center gap-2 hover:scale-105 transition-all">
                Ver pack 1 dia - 5.99 EUR
              </Link>
              <Link href="/itinerarios" className="btn-secondary inline-flex items-center justify-center gap-2">
                Ver todos los packs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
