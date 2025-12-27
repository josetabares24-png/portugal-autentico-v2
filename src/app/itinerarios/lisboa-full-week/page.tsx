import Link from 'next/link';

export default function LisboaFullWeekPage() {
  return (
    <main>
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80" alt="Lisboa Full Week" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 text-white bg-emerald-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            5-7 DIAS COMPLETOS
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic" style={{fontFamily: 'Georgia, serif'}}>
            Lisboa Full Week
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Una semana completa explorando Lisboa, Sintra, Cascais, Setúbal y Arrábida.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>El pack más completo</span>
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>Todo lo que incluye</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>7 días de itinerario</span>
                    <p className="text-slate-600 text-sm">Rutas detalladas hora a hora para cada día</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>Lisboa completa (3 días)</span>
                    <p className="text-slate-600 text-sm">Alfama, Belém, Bairro Alto, Baixa, LX Factory</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>Sintra + Cascais (1 día)</span>
                    <p className="text-slate-600 text-sm">Palacio da Pena, Quinta da Regaleira, Cabo da Roca</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>Setúbal + Arrábida (1 día)</span>
                    <p className="text-slate-600 text-sm">Playas secretas, Serra da Arrábida, Mercado do Livramento</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>15+ restaurantes locales</span>
                    <p className="text-slate-600 text-sm">Tascas, marisquerías y sitios donde comemos nosotros</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="font-semibold" style={{color: 'var(--color-primary)'}}>30+ spots de fotos</span>
                    <p className="text-slate-600 text-sm">Miradores, calles secretas y lugares instagrameables</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8">
              <div className="text-center mb-6">
                <span className="text-sm text-slate-500">Pack completo</span>
                <div className="text-5xl font-bold mt-2" style={{color: 'var(--color-primary)'}}>19.99 <span className="text-xl font-normal text-slate-500">EUR</span></div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  PDF descargable al instante
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Funciona sin internet
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Actualizaciones gratis
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl font-semibold text-white text-lg hover:scale-105 transition-all" style={{background: 'var(--color-accent)'}}>
                Comprar ahora
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">Pago seguro con Stripe</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{color: 'var(--color-primary)'}}>Resumen de los 7 días</h2>
          <div className="space-y-4">
            {[
              { dia: 1, titulo: "Baixa y Alfama", desc: "Plaza del Comercio, Catedral, Castillo de San Jorge, miradores de Alfama" },
              { dia: 2, titulo: "Belém y LX Factory", desc: "Torre de Belém, Monasterio de los Jerónimos, Pastéis de Belém, arte urbano" },
              { dia: 3, titulo: "Bairro Alto y Chiado", desc: "Elevador de Santa Justa, Convento do Carmo, tiendas vintage, vida nocturna" },
              { dia: 4, titulo: "Sintra Mágica", desc: "Palacio da Pena, Quinta da Regaleira, Centro histórico" },
              { dia: 5, titulo: "Cascais y Cabo da Roca", desc: "Pueblo costero, playas, el punto más occidental de Europa" },
              { dia: 6, titulo: "Setúbal y Arrábida", desc: "Serra da Arrábida, playas vírgenes, mariscos frescos" },
              { dia: 7, titulo: "Día libre en Lisboa", desc: "Recomendaciones para compras, mercados y despedida" }
            ].map((item) => (
              <div key={item.dia} className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0" style={{background: 'var(--color-accent)'}}>
                  {item.dia}
                </div>
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
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>¿Tienes menos días?</h2>
          <p className="text-slate-600 mb-8">Tenemos packs más cortos que se adaptan a tu viaje.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="px-6 py-3 rounded-xl font-medium border-2 hover:scale-105 transition-all" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
              1 día - 5.99€
            </Link>
            <Link href="/itinerarios/lisboa-2-dias-completo" className="px-6 py-3 rounded-xl font-medium border-2 hover:scale-105 transition-all" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
              2 días - 8.99€
            </Link>
            <Link href="/itinerarios/lisboa-3-dias-sintra" className="px-6 py-3 rounded-xl font-medium border-2 hover:scale-105 transition-all" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
              3 días - 12.99€
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
