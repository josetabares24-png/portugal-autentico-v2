import Link from 'next/link';

export default function ItinerariosPage() {
  return (
    <main>
      <section className="relative py-20" style={{background: 'var(--color-primary)'}}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{background: 'var(--color-accent)', color: 'white'}}>5 PACKS DISPONIBLES</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Elige tu experiencia perfecta</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Itinerarios completos con restaurantes, spots de fotos y tips de locales.</p>
        </div>
      </section>

      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Segun tus dias en Lisboa</h2>
            <p style={{color: 'var(--color-text-soft)'}}>Cada pack incluye itinerario + restaurantes + spots de fotos + mapas</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium px-3 py-1 rounded-full" style={{background: 'var(--color-primary)'}}>1 dia completo</span>
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
              <div className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-semibold text-white z-10" style={{background: 'var(--color-accent)'}}>Mas vendido</div>
              <div className="h-48 bg-cover bg-center relative mt-9" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium px-3 py-1 rounded-full" style={{background: 'var(--color-accent)'}}>2 dias completos</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Completa</h3>
                <p className="text-slate-600 text-sm mb-4">El favorito. Fin de semana perfecto con Belem, LX Factory y vida nocturna.</p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    2 dias perfectamente organizados
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    6 restaurantes + bares
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    15 spots + miradores
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
                  <span className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">3 dias + Sintra</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa + Alrededores</h3>
                <p className="text-slate-600 text-sm mb-4">La experiencia completa. Lisboa, Sintra, Cascais y Cabo da Roca.</p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Todo del pack 2 dias
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Sintra: Pena, Regaleira
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Cascais + Cabo da Roca
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>11.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-3-dias-premium" className="btn-secondary text-sm">Ver pack</Link>
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
            <p style={{color: 'var(--color-text-soft)'}}>Itinerarios tematicos para experiencias unicas</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-56 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-pink-600 text-xs font-bold px-3 py-1 rounded-full">NUEVO</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">Lisboa Fotografica</h3>
                  <p className="text-white/90 text-sm">15 spots con coordenadas exactas</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Mejores horarios de luz (golden hour)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Angulos secretos sin turistas
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Cafes instagrameables
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold text-pink-600">6.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-fotografia" className="inline-flex items-center justify-center px-6 py-2 rounded-lg font-semibold text-sm text-white transition-all hover:scale-105 hover:shadow-lg" style={{background: 'linear-gradient(to right, #ec4899, #f43f5e)'}}>Ver pack</Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-56 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full">FAMILIAR</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">Lisboa en Familia</h3>
                  <p className="text-white/90 text-sm">Actividades para todas las edades</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Oceanario, teleferico, castillo
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Restaurantes family-friendly
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Parques y heladerias
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold text-emerald-600">7.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-familiar" className="inline-flex items-center justify-center px-6 py-2 rounded-lg font-semibold text-sm text-white transition-all hover:scale-105 hover:shadow-lg" style={{background: 'linear-gradient(to right, #10b981, #14b8a6)'}}>Ver pack</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Garantia de 14 dias</h2>
          <p className="text-xl text-white/80 mb-2">Si no estas satisfecho, te devolvemos el dinero.</p>
          <p className="text-white/60">Sin preguntas. Sin complicaciones.</p>
        </div>
      </section>

      <section className="py-20" style={{background: 'var(--color-accent)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Listo para tu aventura?</h2>
          <p className="text-xl text-white/90 mb-8">Por menos que un cafe tienes todo tu viaje organizado.</p>
          <Link href="/comparar" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg bg-white" style={{color: 'var(--color-primary)'}}>
            Comparar todos los packs
          </Link>
          <p className="text-white/70 text-sm mt-6">Descarga inmediata - Acceso de por vida - 14 dias de garantia</p>
        </div>
      </section>
    </main>
  );
}
