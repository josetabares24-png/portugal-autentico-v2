import Link from 'next/link';

export default function ItinerariosPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920&q=80" alt="Lisboa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 text-white" style={{background: 'var(--color-accent)'}}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            8 PACKS DISPONIBLES
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic" style={{fontFamily: 'Georgia, serif'}}>
            Elige tu experiencia perfecta
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Itinerarios completos con restaurantes, spots de fotos y tips de locales.
          </p>
        </div>
      </section>

      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Según tus días en Lisboa</h2>
            <p style={{color: 'var(--color-text-soft)'}}>Cada pack incluye itinerario + restaurantes + spots de fotos + mapas</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium px-3 py-1 rounded-full" style={{background: 'var(--color-primary)'}}>1 día completo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Esencial</h3>
                <p className="text-slate-600 text-sm mb-4">Perfecto si tienes escala o poco tiempo. Lo mejor de Lisboa bien organizado.</p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Ruta optimizada hora a hora
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    3 restaurantes locales
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    8 spots de fotos
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>5.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="btn-secondary text-sm">Ver pack</Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg relative border-2" style={{borderColor: 'var(--color-accent)'}}>
              <div className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-semibold text-white z-10" style={{background: 'var(--color-accent)'}}>Más vendido</div>
              <div className="h-48 bg-cover bg-center relative mt-9" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium px-3 py-1 rounded-full" style={{background: 'var(--color-accent)'}}>2 días completos</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Completa</h3>
                <p className="text-slate-600 text-sm mb-4">El favorito. Fin de semana perfecto con Belém, Alfama y los barrios con encanto.</p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    2 rutas completas día a día
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    6 restaurantes probados
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    15+ spots de fotos
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>8.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-2-dias-completo" className="btn-primary text-sm">Ver pack</Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium px-3 py-1 rounded-full" style={{background: 'var(--color-accent)'}}>3 días + Sintra</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa + Alrededores</h3>
                <p className="text-slate-600 text-sm mb-4">La experiencia completa. Lisboa, Sintra, Cascais y Cabo da Roca.</p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Todo del pack 2 días
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Excursión Sintra completa
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Cascais y Cabo da Roca
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>12.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-3-dias-sintra" className="btn-secondary text-sm">Ver pack</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Packs especiales</h2>
            <p style={{color: 'var(--color-text-soft)'}}>Experiencias únicas para viajeros diferentes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-36 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500">5-7 días</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1" style={{color: 'var(--color-primary)'}}>Lisboa Full Week</h3>
                <p className="text-slate-600 text-sm mb-4">Una semana completa: Lisboa, Sintra, Cascais, Setúbal y Arrábida.</p>
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>19.99 <span className="text-xs font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-full-week" className="text-sm font-semibold hover:underline" style={{color: 'var(--color-accent)'}}>Ver →</Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-36 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-xs font-medium px-2.5 py-1 rounded-full bg-pink-500">Romántico</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1" style={{color: 'var(--color-primary)'}}>Lisboa Romántica</h3>
                <p className="text-slate-600 text-sm mb-4">Miradores al atardecer, cenas románticas y experiencias para parejas.</p>
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>9.99 <span className="text-xs font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-romantica" className="text-sm font-semibold hover:underline" style={{color: 'var(--color-accent)'}}>Ver →</Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-36 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-xs font-medium px-2.5 py-1 rounded-full bg-sky-500">Familiar</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1" style={{color: 'var(--color-primary)'}}>Lisboa Familiar</h3>
                <p className="text-slate-600 text-sm mb-4">Actividades para niños, ritmo relajado y restaurantes kid-friendly.</p>
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>9.99 <span className="text-xs font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-familiar" className="text-sm font-semibold hover:underline" style={{color: 'var(--color-accent)'}}>Ver →</Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-36 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500">Fotografía</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1" style={{color: 'var(--color-primary)'}}>Lisboa Fotografía</h3>
                <p className="text-slate-600 text-sm mb-4">30+ spots, horarios de luz perfecta y rutas fotográficas.</p>
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>9.99 <span className="text-xs font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-fotografia" className="text-sm font-semibold hover:underline" style={{color: 'var(--color-accent)'}}>Ver →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>¿Tienes dudas?</h2>
          <p className="text-slate-600 mb-6">Escríbenos y te ayudamos a elegir el pack perfecto para tu viaje.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white hover:scale-105 transition-all" style={{background: 'var(--color-primary)'}}>
            Contactar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
