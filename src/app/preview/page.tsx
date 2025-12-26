import Link from 'next/link';

export default function PreviewPage() {
  return (
    <main>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1920)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-green-500/20 text-green-400 backdrop-blur-sm border border-green-500/30">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
              100% GRATIS
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Prueba <span style={{color: 'var(--color-accent)'}}>antes</span> de comprar
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">Mira exactamente como son nuestros itinerarios. Sin trucos, sin sorpresas.</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 border-b bg-gradient-to-r from-slate-800 to-slate-900">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sky-400 text-sm font-medium">PREVIEW GRATIS</span>
                  <h2 className="text-2xl font-bold text-white mt-1">Lisboa Esencial - Manana</h2>
                </div>
                <div className="hidden md:block text-right">
                  <span className="text-white/60 text-sm">Pack completo desde</span>
                  <div className="text-2xl font-bold text-white">5.99 EUR</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-10">
              <div className="space-y-6">
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0 text-center">
                    <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex flex-col items-center justify-center text-white shadow-lg">
                      <span className="text-xl md:text-2xl font-bold">09:00</span>
                    </div>
                    <div className="w-0.5 h-full bg-slate-200 mx-auto mt-2"></div>
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-2xl p-5 md:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Barrio de Alfama</h3>
                      <span className="text-xs px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold">VISITA</span>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">El barrio mas antiguo de Lisboa. Callejuelas empedradas, ropa tendida, fado sonando desde las ventanas. Empieza por la Catedral Se y pierdete subiendo hacia el castillo.</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                        Alfama
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        1.5 horas
                      </span>
                      <span className="flex items-center gap-1.5 text-green-600 font-medium">Gratis</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0 text-center">
                    <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex flex-col items-center justify-center text-white shadow-lg">
                      <span className="text-xl md:text-2xl font-bold">10:30</span>
                    </div>
                    <div className="w-0.5 h-full bg-slate-200 mx-auto mt-2"></div>
                  </div>
                  <div className="flex-1 bg-amber-50 rounded-2xl p-5 md:p-6 border border-amber-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Cafe en Cruzes Credo</h3>
                      <span className="text-xs px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 font-semibold">COMIDA</span>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">El mejor cafe de especialidad del barrio. Pide el pastel de nata con canela - lo hacen ellos mismos cada manana. Terraza con vistas a la catedral.</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                        Rua Cruzes da Se 29
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        45 min
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold" style={{color: 'var(--color-accent)'}}>3-5 EUR</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0 text-center">
                    <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex flex-col items-center justify-center text-white shadow-lg">
                      <span className="text-xl md:text-2xl font-bold">11:15</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-pink-50 rounded-2xl p-5 md:p-6 border border-pink-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Mirador de Santa Luzia</h3>
                      <span className="text-xs px-3 py-1.5 rounded-full bg-pink-100 text-pink-700 font-semibold">FOTO</span>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">El mirador mas fotografiado de Lisboa. Azulejos, buganvillas y vistas al rio Tejo. Llega antes de las 12 para evitar grupos de turistas.</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-pink-600 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>
                        Mejor luz: 9-11am
                      </span>
                      <span className="flex items-center gap-1.5 text-green-600 font-medium">Gratis</span>
                    </div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNlMmU4ZjAiLz48L2c+PC9zdmc+')] opacity-50"></div>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>El itinerario continua...</h3>
                    <p className="text-slate-600 max-w-md mx-auto">Tarde en Belem con los famosos pasteles, atardecer en el mirador secreto de Graca, cena en tasca local con fado en vivo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--color-primary)'}}>Te gusto lo que viste?</h3>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">Esto es solo la manana. El itinerario completo incluye todo el dia, 3 restaurantes, 8 spots de fotos y mapas offline.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="btn-primary inline-flex items-center justify-center gap-2 hover:scale-105 transition-all">
                Ver pack completo - 5.99 EUR
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
