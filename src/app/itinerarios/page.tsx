import Link from 'next/link';

export default function ItinerariosPage() {
  return (
    <main>
      <section className="relative py-20" style={{background: 'var(--color-primary)'}}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{background: 'var(--color-accent)', color: 'white'}}>
            5 PACKS DISPONIBLES
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Elige tu experiencia perfecta
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Itinerarios completos con restaurantes, spots de fotos y tips de locales. Descarga inmediata.
          </p>
        </div>
      </section>

      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Segun tus dias en Lisboa</h2>
            <p style={{color: 'var(--color-text-soft)'}}>Cada pack incluye itinerario + restaurantes + spots de fotos + mapas offline</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center relative">
                <span className="text-8xl font-bold text-white/20">1</span>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full">1 dia completo</span>
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
                    3 restaurantes locales con precios
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    8 spots de fotos con horarios
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>5.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="btn-secondary text-sm">Ver pack</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative border-2 hover:shadow-xl transition-shadow" style={{borderColor: 'var(--color-accent)'}}>
              <div className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-semibold text-white z-10" style={{background: 'var(--color-accent)'}}>
                Mas vendido
              </div>
              <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center relative mt-8">
                <span className="text-8xl font-bold text-white/20">2</span>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full">2 dias completos</span>
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
                    6 restaurantes + bares nocturnos
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    15 spots de fotos + miradores
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>8.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-2-dias-completo" className="btn-primary text-sm">Ver pack</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center relative">
                <span className="text-8xl font-bold text-white/20">3</span>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full">3 dias + Sintra</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa + Alrededores</h3>
                <p className="text-slate-600 text-sm mb-4">La experiencia completa. Lisboa, Sintra, Cascais y Cabo da Roca.</p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Todo del pack 2 dias incluido
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Sintra: Pena, Regaleira, centro
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Cascais + Cabo da Roca + fado
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
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-2/5 h-48 md:h-auto bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center relative">
                  <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">NUEVO</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Fotografica</h3>
                  <p className="text-slate-600 text-sm mb-4">Los mejores spots para fotos increibles. Horarios de luz perfecta y angulos secretos.</p>
                  <ul className="space-y-2 mb-6 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      15 spots con coordenadas exactas
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Mejores horarios de luz
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Cafes instagrameables
                    </li>
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-pink-600">6.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                    <Link href="/itinerarios/lisboa-fotografia" className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">Ver pack</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-2/5 h-48 md:h-auto bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center relative">
                  <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">FAMILIAR</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa en Familia</h3>
                  <p className="text-slate-600 text-sm mb-4">Actividades perfectas para ninos de todas las edades. Ritmo relajado.</p>
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
                    <Link href="/itinerarios/lisboa-familiar" className="bg-gradient-to-r from-emerald-400 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">Ver pack</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Garantia de 14 dias</h2>
          <p className="text-xl text-white/80 mb-2">Si no estas satisfecho, te devolvemos el dinero.</p>
          <p className="text-white/60">Sin preguntas. Sin complicaciones.</p>
        </div>
      </section>

      <section className="py-20" style={{background: 'var(--color-accent)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Listo para tu aventura?</h2>
          <p className="text-xl text-white/90 mb-8">Por menos que un cafe tienes todo tu viaje organizado.</p>
          <Link href="/comparar" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 bg-white" style={{color: 'var(--color-primary)'}}>
            Comparar todos los packs
          </Link>
          <p className="text-white/70 text-sm mt-6">Descarga inmediata - Acceso de por vida - 14 dias de garantia</p>
        </div>
      </section>
    </main>
  );
}
EOFcat > src/app/itinerarios/page.tsx << 'EOF'
import Link from 'next/link';

export default function ItinerariosPage() {
  return (
    <main>
      <section className="relative py-20" style={{background: 'var(--color-primary)'}}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{background: 'var(--color-accent)', color: 'white'}}>
            5 PACKS DISPONIBLES
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Elige tu experiencia perfecta
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Itinerarios completos con restaurantes, spots de fotos y tips de locales. Descarga inmediata.
          </p>
        </div>
      </section>

      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Segun tus dias en Lisboa</h2>
            <p style={{color: 'var(--color-text-soft)'}}>Cada pack incluye itinerario + restaurantes + spots de fotos + mapas offline</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center relative">
                <span className="text-8xl font-bold text-white/20">1</span>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full">1 dia completo</span>
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
                    3 restaurantes locales con precios
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    8 spots de fotos con horarios
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>5.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="btn-secondary text-sm">Ver pack</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative border-2 hover:shadow-xl transition-shadow" style={{borderColor: 'var(--color-accent)'}}>
              <div className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-semibold text-white z-10" style={{background: 'var(--color-accent)'}}>
                Mas vendido
              </div>
              <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center relative mt-8">
                <span className="text-8xl font-bold text-white/20">2</span>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full">2 dias completos</span>
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
                    6 restaurantes + bares nocturnos
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    15 spots de fotos + miradores
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>8.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-2-dias-completo" className="btn-primary text-sm">Ver pack</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center relative">
                <span className="text-8xl font-bold text-white/20">3</span>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full">3 dias + Sintra</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa + Alrededores</h3>
                <p className="text-slate-600 text-sm mb-4">La experiencia completa. Lisboa, Sintra, Cascais y Cabo da Roca.</p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Todo del pack 2 dias incluido
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Sintra: Pena, Regaleira, centro
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Cascais + Cabo da Roca + fado
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
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-2/5 h-48 md:h-auto bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center relative">
                  <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">NUEVO</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Fotografica</h3>
                  <p className="text-slate-600 text-sm mb-4">Los mejores spots para fotos increibles. Horarios de luz perfecta y angulos secretos.</p>
                  <ul className="space-y-2 mb-6 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      15 spots con coordenadas exactas
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Mejores horarios de luz
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Cafes instagrameables
                    </li>
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-pink-600">6.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                    <Link href="/itinerarios/lisboa-fotografia" className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">Ver pack</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-2/5 h-48 md:h-auto bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center relative">
                  <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">FAMILIAR</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa en Familia</h3>
                  <p className="text-slate-600 text-sm mb-4">Actividades perfectas para ninos de todas las edades. Ritmo relajado.</p>
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
                    <Link href="/itinerarios/lisboa-familiar" className="bg-gradient-to-r from-emerald-400 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">Ver pack</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Garantia de 14 dias</h2>
          <p className="text-xl text-white/80 mb-2">Si no estas satisfecho, te devolvemos el dinero.</p>
          <p className="text-white/60">Sin preguntas. Sin complicaciones.</p>
        </div>
      </section>

      <section className="py-20" style={{background: 'var(--color-accent)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Listo para tu aventura?</h2>
          <p className="text-xl text-white/90 mb-8">Por menos que un cafe tienes todo tu viaje organizado.</p>
          <Link href="/comparar" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 bg-white" style={{color: 'var(--color-primary)'}}>
            Comparar todos los packs
          </Link>
          <p className="text-white/70 text-sm mt-6">Descarga inmediata - Acceso de por vida - 14 dias de garantia</p>
        </div>
      </section>
    </main>
  );
}
