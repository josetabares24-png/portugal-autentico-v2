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
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center relative">
                <span className="text-8xl font-bold text-white/20">1</span>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full">1 dia</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Esencial</h3>
                <p className="text-slate-600 text-sm mb-4">Perfecto si tienes escala o poco tiempo.</p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>5.99 <span className="text-sm font-normal text-slate-500">EUR</span></div>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="btn-secondary text-sm">Ver pack</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative border-2" style={{borderColor: 'var(--color-accent)'}}>
              <div className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-semibold text-white z-10" style={{background: 'var(--color-accent)'}}>Mas vendido</div>
              <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center relative mt-8">
                <span className="text-8xl font-bold text-white/20">2</span>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full">2 dias</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Lisboa Completa</h3>
                <p className="text-slate-600 text-sm mb-4">El favorito. Fin de semana perfecto.</p>
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
                <p className="text-slate-600 text-sm mb-4">Lisboa, Sintra, Cascais y Cabo da Roca.</p>
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
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-8 text-white">
              <span className="bg-white/20 text-xs font-medium px-3 py-1 rounded-full">NUEVO</span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Lisboa Fotografica</h3>
              <p className="text-white/80 mb-6">15 spots con coordenadas, mejores horarios de luz, cafes instagrameables.</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">6.99 EUR</span>
                <Link href="/itinerarios/lisboa-fotografia" className="bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold">Ver pack</Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl p-8 text-white">
              <span className="bg-white/20 text-xs font-medium px-3 py-1 rounded-full">FAMILIAR</span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Lisboa en Familia</h3>
              <p className="text-white/80 mb-6">Oceanario, teleferico, castillo. Restaurantes family-friendly.</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">7.99 EUR</span>
                <Link href="/itinerarios/lisboa-familiar" className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold">Ver pack</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-accent)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Garantia de 14 dias</h2>
          <p className="text-xl text-white/90">Si no estas satisfecho, te devolvemos el dinero. Sin preguntas.</p>
        </div>
      </section>
    </main>
  );
}
