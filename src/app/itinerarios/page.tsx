import Link from 'next/link';

export default function ItinerariosPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Elige tu experiencia</h1>
          <p className="text-xl text-white/80">Cada pack incluye itinerario + restaurantes + spots de fotos + mapas offline</p>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium px-3 py-1 rounded-full" style={{background: 'var(--color-primary)'}}>1 dia</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Esencial</h2>
                <p className="text-slate-600 text-sm mb-4">Perfecto para escalas. Lo mejor de Lisboa en un dia bien organizado.</p>
                
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    8 paradas con contexto historico
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    10 restaurantes locales
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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
              <div className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-semibold text-white z-10" style={{background: 'var(--color-accent)'}}>
                Mas vendido
              </div>
              <div className="h-48 bg-cover bg-center relative mt-9" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium px-3 py-1 rounded-full" style={{background: 'var(--color-accent)'}}>2 dias</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Completa</h2>
                <p className="text-slate-600 text-sm mb-4">Fin de semana perfecto. Centro, Belem, LX Factory y vida nocturna.</p>
                
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    16 paradas en 2 dias
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    20 restaurantes + bares
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    15 spots + vida nocturna
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
                <h2 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa + Alrededores</h2>
                <p className="text-slate-600 text-sm mb-4">Experiencia completa. Lisboa, Sintra, Cascais y Cabo da Roca.</p>
                
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Todo del pack 2 dias
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Sintra completo
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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

          <div className="text-center mt-10">
            <Link href="/comparar" className="inline-flex items-center gap-2 font-medium" style={{color: 'var(--color-primary)'}}>
              Comparar los 3 packs en detalle
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{color: 'var(--color-primary)'}}>Guias especiales</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background: 'linear-gradient(135deg, #ec4899, #f43f5e)'}}>
                  <span className="text-white text-2xl">í±¶</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold" style={{color: 'var(--color-primary)'}}>Lisboa con Ninos</h3>
                  <p className="text-slate-500 text-sm">Rutas adaptadas, parques, restaurantes kid-friendly</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>5.99</div>
                  <Link href="/guias/lisboa-con-ninos" className="text-sm font-semibold" style={{color: 'var(--color-accent)'}}>Ver</Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'}}>
                  <span className="text-white text-2xl">í³·</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold" style={{color: 'var(--color-primary)'}}>Pack Fotografo</h3>
                  <p className="text-slate-500 text-sm">50+ spots detallados, horarios de luz, settings</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>7.99</div>
                  <Link href="/guias/pack-fotografo" className="text-sm font-semibold" style={{color: 'var(--color-accent)'}}>Ver</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>No sabes cual elegir?</h2>
          <p className="text-slate-600 mb-6">Para un primer viaje recomendamos minimo 2 dias. Asi ves lo esencial sin prisas.</p>
          <Link href="/comparar" className="btn-primary px-8 py-3">Comparar packs en detalle</Link>
        </div>
      </section>
    </main>
  );
}
