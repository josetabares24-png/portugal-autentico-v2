import Link from 'next/link';

export default function CompararPage() {
  const packs = [
    {
      nombre: "Lisboa Esencial",
      slug: "lisboa-1-dia-lo-esencial",
      dias: "1 dia",
      precio: "5.99",
      restaurantes: 3,
      spots: 8,
      miradores: 2,
      mapas: true,
      sintra: false,
      nocturno: false,
      popular: false
    },
    {
      nombre: "Lisboa Completa",
      slug: "lisboa-2-dias-completo",
      dias: "2 dias",
      precio: "8.99",
      restaurantes: 6,
      spots: 15,
      miradores: 5,
      mapas: true,
      sintra: false,
      nocturno: true,
      popular: true
    },
    {
      nombre: "Lisboa + Sintra",
      slug: "lisboa-3-dias-premium",
      dias: "3 dias",
      precio: "11.99",
      restaurantes: 10,
      spots: 20,
      miradores: 8,
      mapas: true,
      sintra: true,
      nocturno: true,
      popular: false
    },
    {
      nombre: "Fotografica",
      slug: "lisboa-fotografia",
      dias: "1-2 dias",
      precio: "6.99",
      restaurantes: 4,
      spots: 15,
      miradores: 6,
      mapas: true,
      sintra: false,
      nocturno: false,
      popular: false
    },
    {
      nombre: "Familiar",
      slug: "lisboa-familiar",
      dias: "2-3 dias",
      precio: "7.99",
      restaurantes: 5,
      spots: 10,
      miradores: 3,
      mapas: true,
      sintra: false,
      nocturno: false,
      popular: false
    }
  ];

  const Check = () => (
    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  const Cross = () => (
    <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <main>
      <section className="relative py-16" style={{background: 'var(--color-primary)'}}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Compara todos los packs</h1>
          <p className="text-xl text-white/80">Encuentra el itinerario perfecto para tu viaje</p>
        </div>
      </section>

      <section className="py-12" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="w-full bg-white">
              <thead>
                <tr style={{background: 'var(--color-primary)'}}>
                  <th className="text-left p-5 text-white font-semibold min-w-[140px]">Incluye</th>
                  {packs.map((pack) => (
                    <th key={pack.slug} className="p-5 text-center min-w-[130px] relative">
                      {pack.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="text-xs px-3 py-1 rounded-full font-bold shadow-lg" style={{background: 'var(--color-accent)', color: 'white'}}>
                            POPULAR
                          </span>
                        </div>
                      )}
                      <div className="text-white font-bold">{pack.nombre}</div>
                      <div className="text-white/60 text-sm">{pack.dias}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-semibold" style={{color: 'var(--color-primary)'}}>Precio</td>
                  {packs.map((pack) => (
                    <td key={pack.slug} className="p-4 text-center">
                      <span className="text-2xl font-bold" style={{color: 'var(--color-accent)'}}>{pack.precio}</span>
                      <span className="text-slate-400 text-sm"> EUR</span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-700">Restaurantes</td>
                  {packs.map((pack) => (
                    <td key={pack.slug} className="p-4 text-center font-semibold text-slate-600">{pack.restaurantes}</td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium text-slate-700">Spots de fotos</td>
                  {packs.map((pack) => (
                    <td key={pack.slug} className="p-4 text-center font-semibold text-slate-600">{pack.spots}</td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-700">Miradores</td>
                  {packs.map((pack) => (
                    <td key={pack.slug} className="p-4 text-center font-semibold text-slate-600">{pack.miradores}</td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium text-slate-700">Mapas offline</td>
                  {packs.map((pack) => (
                    <td key={pack.slug} className="p-4 text-center">{pack.mapas ? <Check /> : <Cross />}</td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-700">Sintra incluido</td>
                  {packs.map((pack) => (
                    <td key={pack.slug} className="p-4 text-center">{pack.sintra ? <Check /> : <Cross />}</td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium text-slate-700">Vida nocturna</td>
                  {packs.map((pack) => (
                    <td key={pack.slug} className="p-4 text-center">{pack.nocturno ? <Check /> : <Cross />}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-5"></td>
                  {packs.map((pack) => (
                    <td key={pack.slug} className="p-5 text-center">
                      <Link 
                        href={`/itinerarios/${pack.slug}`} 
                        className={`inline-block px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg ${pack.popular ? 'text-white' : 'btn-secondary'}`}
                        style={pack.popular ? {background: 'var(--color-accent)'} : {}}
                      >
                        Ver pack
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm text-center">
            <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>No sabes cual elegir?</h3>
            <p className="text-slate-600 mb-6">El pack de 2 dias es el favorito de nuestros viajeros - perfecto para un fin de semana.</p>
            <Link href="/itinerarios/lisboa-2-dias-completo" className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-all">
              Ver Lisboa Completa - 8.99 EUR
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <h2 className="text-2xl font-bold text-white">Garantia de 14 dias</h2>
          </div>
          <p className="text-white/80">Si no estas satisfecho, te devolvemos el dinero. Sin preguntas.</p>
        </div>
      </section>
    </main>
  );
}
