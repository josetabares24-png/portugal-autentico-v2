import Link from 'next/link';

export default function CompararPage() {
  const packs = [
    { nombre: "Esencial", slug: "lisboa-1-dia-lo-esencial", dias: "1 dia", precio: "5.99", restaurantes: 3, spots: 8, miradores: 2, sintra: false, nocturno: false, popular: false, color: "from-sky-500 to-blue-600" },
    { nombre: "Completa", slug: "lisboa-2-dias-completo", dias: "2 dias", precio: "8.99", restaurantes: 6, spots: 15, miradores: 5, sintra: false, nocturno: true, popular: true, color: "from-orange-500 to-amber-500" },
    { nombre: "Premium", slug: "lisboa-3-dias-premium", dias: "3 dias", precio: "11.99", restaurantes: 10, spots: 20, miradores: 8, sintra: true, nocturno: true, popular: false, color: "from-purple-500 to-violet-600" },
    { nombre: "Foto", slug: "lisboa-fotografia", dias: "1-2 dias", precio: "6.99", restaurantes: 4, spots: 15, miradores: 6, sintra: false, nocturno: false, popular: false, color: "from-pink-500 to-rose-500" },
    { nombre: "Familiar", slug: "lisboa-familiar", dias: "2-3 dias", precio: "7.99", restaurantes: 5, spots: 10, miradores: 3, sintra: false, nocturno: false, popular: false, color: "from-emerald-500 to-teal-500" }
  ];

  const Check = () => (
    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
    </div>
  );
  
  const Cross = () => (
    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
    </div>
  );

  return (
    <main>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 text-white backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              5 packs disponibles
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Compara y <span style={{color: 'var(--color-accent)'}}>elige</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">Encuentra el itinerario perfecto segun tus dias y estilo de viaje.</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {packs.map((pack) => (
              <div key={pack.slug} className={`relative rounded-2xl p-5 text-center ${pack.popular ? 'ring-2 ring-offset-2' : ''}`} style={pack.popular ? {ringColor: 'var(--color-accent)'} : {}}>
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg" style={{background: 'var(--color-accent)'}}>POPULAR</span>
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pack.color} mx-auto mb-3 flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{pack.dias.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-lg" style={{color: 'var(--color-primary)'}}>{pack.nombre}</h3>
                <p className="text-slate-500 text-sm">{pack.dias}</p>
                <div className="mt-3">
                  <span className="text-3xl font-bold" style={{color: 'var(--color-accent)'}}>{pack.precio}</span>
                  <span className="text-slate-400 text-sm"> EUR</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="text-left p-6 font-semibold text-slate-400 text-sm uppercase tracking-wider">Caracteristicas</th>
                    {packs.map((pack) => (
                      <th key={pack.slug} className="p-6 text-center">
                        <span className={`inline-block px-3 py-1 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${pack.color}`}>
                          {pack.nombre}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-medium" style={{color: 'var(--color-primary)'}}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        </div>
                        Restaurantes
                      </div>
                    </td>
                    {packs.map((pack) => <td key={pack.slug} className="p-5 text-center font-bold text-xl text-slate-700">{pack.restaurantes}</td>)}
                  </tr>
                  <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-medium" style={{color: 'var(--color-primary)'}}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        Spots de fotos
                      </div>
                    </td>
                    {packs.map((pack) => <td key={pack.slug} className="p-5 text-center font-bold text-xl text-slate-700">{pack.spots}</td>)}
                  </tr>
                  <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-medium" style={{color: 'var(--color-primary)'}}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        Miradores
                      </div>
                    </td>
                    {packs.map((pack) => <td key={pack.slug} className="p-5 text-center font-bold text-xl text-slate-700">{pack.miradores}</td>)}
                  </tr>
                  <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-medium" style={{color: 'var(--color-primary)'}}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                        </div>
                        Mapas offline
                      </div>
                    </td>
                    {packs.map((pack) => <td key={pack.slug} className="p-5 text-center"><Check /></td>)}
                  </tr>
                  <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-medium" style={{color: 'var(--color-primary)'}}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        </div>
                        Sintra incluido
                      </div>
                    </td>
                    {packs.map((pack) => <td key={pack.slug} className="p-5 text-center">{pack.sintra ? <Check /> : <Cross />}</td>)}
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-medium" style={{color: 'var(--color-primary)'}}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        </div>
                        Vida nocturna
                      </div>
                    </td>
                    {packs.map((pack) => <td key={pack.slug} className="p-5 text-center">{pack.nocturno ? <Check /> : <Cross />}</td>)}
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-6"></td>
                    {packs.map((pack) => (
                      <td key={pack.slug} className="p-6 text-center">
                        <Link 
                          href={`/itinerarios/${pack.slug}`} 
                          className={`inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg text-white bg-gradient-to-r ${pack.color}`}
                        >
                          Ver pack
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'var(--color-accent)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Garantia 14 dias</h3>
                  <p className="text-slate-600">Si no estas satisfecho, te devolvemos el dinero. Sin preguntas ni complicaciones.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'var(--color-primary)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Descarga inmediata</h3>
                  <p className="text-slate-600">Recibe tu itinerario al instante en PDF. Funciona offline, sin internet.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">No sabes cual elegir?</p>
            <Link href="/itinerarios/lisboa-2-dias-completo" className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-all">
              El favorito: Lisboa Completa - 8.99 EUR
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
