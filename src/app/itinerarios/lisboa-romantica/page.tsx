import Link from 'next/link';

export default function LisboaRomanticaPage() {
  return (
    <main>
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80" alt="Lisboa Romántica" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 text-white bg-pink-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            PARA PAREJAS
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic" style={{fontFamily: 'Georgia, serif'}}>
            Lisboa Romántica
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Miradores al atardecer, cenas con vistas y experiencias para enamorarse de Lisboa juntos.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Diseñado para parejas</span>
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>Momentos inolvidables</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>5 miradores para atardeceres</span>
                    <p className="text-slate-600 text-sm">Los mejores spots para ver el sunset juntos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>8 restaurantes románticos</span>
                    <p className="text-slate-600 text-sm">Cenas con vistas, terrazas íntimas, tascas con encanto</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>Paseos por calles secretas</span>
                    <p className="text-slate-600 text-sm">Rutas tranquilas lejos de las multitudes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>Show de Fado íntimo</span>
                    <p className="text-slate-600 text-sm">Dónde escuchar Fado auténtico sin turistas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>Bares con vistas</span>
                    <p className="text-slate-600 text-sm">Rooftops y terrazas para brindar con vino portugués</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-100">
              <div className="text-center mb-6">
                <span className="text-sm text-slate-500">Pack romántico</span>
                <div className="text-5xl font-bold mt-2" style={{color: 'var(--color-primary)'}}>9.99 <span className="text-xl font-normal text-slate-500">EUR</span></div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  2-3 días de itinerario romántico
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  PDF descargable al instante
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Mapas con todos los puntos
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl font-semibold text-white text-lg hover:scale-105 transition-all bg-pink-500 hover:bg-pink-600">
                Comprar ahora
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">Pago seguro con Stripe</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{color: 'var(--color-primary)'}}>Experiencias incluidas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Atardecer en Miradouro da Graça", desc: "El mejor sunset de Lisboa con vistas al castillo", icon: "🌅" },
              { titulo: "Cena en Chapitô à Mesa", desc: "Terraza con vistas panorámicas y cocina portuguesa", icon: "🍷" },
              { titulo: "Paseo por Alfama", desc: "Calles empedradas, azulejos y rincones secretos", icon: "🚶" },
              { titulo: "Fado en Tasca do Chico", desc: "Fado íntimo y auténtico en el Bairro Alto", icon: "🎵" },
              { titulo: "Brunch en LX Factory", desc: "Ambiente artístico y creativo para un domingo", icon: "☕" },
              { titulo: "Crucero al atardecer", desc: "Paseo en barco por el Tajo con vino incluido", icon: "⛵" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold" style={{color: 'var(--color-primary)'}}>{item.titulo}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>¿Buscas algo diferente?</h2>
          <p className="text-slate-600 mb-8">Tenemos otros packs que pueden interesarte.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/itinerarios/lisboa-2-dias-completo" className="px-6 py-3 rounded-xl font-medium border-2 hover:scale-105 transition-all" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
              Lisboa 2 días
            </Link>
            <Link href="/itinerarios/lisboa-familiar" className="px-6 py-3 rounded-xl font-medium border-2 hover:scale-105 transition-all" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
              Lisboa Familiar
            </Link>
            <Link href="/itinerarios/lisboa-fotografia" className="px-6 py-3 rounded-xl font-medium border-2 hover:scale-105 transition-all" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
              Lisboa Fotografía
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
