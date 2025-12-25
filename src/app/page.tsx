import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">+2,847 viajeros este mes</span>
            <span className="text-slate-400">|</span>
            <span className="text-amber-400 text-sm font-semibold">4.9/5 rating</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
            Vive Lisboa como
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">un verdadero local</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Itinerarios completos con restaurantes, spots de fotos y tips secretos. Todo por menos de lo que cuesta un cafe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/itinerarios" className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
              <span className="relative z-10">Ver Packs desde 5.99 EUR</span>
            </Link>
            <Link href="/preview" className="glass text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
              Preview Gratis
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Descarga inmediata</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Mapas offline</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Spots de fotos</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm">
            <span className="font-medium text-slate-500">Como visto en:</span>
            <span className="font-bold text-slate-600">El Pais</span>
            <span className="font-bold text-slate-600">Lonely Planet</span>
            <span className="font-bold text-slate-600">TripAdvisor</span>
            <span className="font-bold text-slate-600">Traveler</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">PACKS COMPLETOS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Todo lo que necesitas en un pack</h2>
            <p className="text-xl text-slate-500">Itinerario + Restaurantes + Spots de fotos + Tips locales</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="card-hover bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="h-52 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">1 DIA COMPLETO</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa 1 Dia</h3>
                <p className="text-slate-500 mb-4">Perfecto para escalas o visitas express.</p>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Itinerario hora a hora
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    10 restaurantes locales
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    8 spots de fotos + horarios
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Mapa offline
                  </div>
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">5.99 <span className="text-lg font-normal text-slate-500">EUR</span></div>
                  </div>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all">
                    Ver pack
                  </Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-400 relative lg:scale-105">
              <div className="absolute -top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-2 text-sm font-bold z-10">
                MAS VENDIDO
              </div>
              <div className="h-52 bg-cover bg-center relative mt-8" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">2 DIAS COMPLETO</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa 2 Dias</h3>
                <p className="text-slate-500 mb-4">El pack favorito. Fin de semana perfecto.</p>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Itinerario 2 dias completo
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    20 restaurantes + bares
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    15 spots de fotos + atardeceres
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Belem + LX Factory + vida nocturna
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Mapas offline de todo
                  </div>
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">8.99 <span className="text-lg font-normal text-slate-500">EUR</span></div>
                  </div>
                  <Link href="/itinerarios/lisboa-2-dias-completo" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Ver pack
                  </Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="h-52 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">3 DIAS + SINTRA</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa 3 Dias</h3>
                <p className="text-slate-500 mb-4">Experiencia completa con Sintra y Cascais.</p>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Todo lo del pack 2 dias
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Guia completa Sintra
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Cascais + Cabo da Roca
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    25 spots de fotos (Pena, Regaleira...)
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Casas de fado autenticas
                  </div>
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">11.99 <span className="text-lg font-normal text-slate-500">EUR</span></div>
                  </div>
                  <Link href="/itinerarios/lisboa-3-dias-premium" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all">
                    Ver pack
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/comparar" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              Comparar los 3 packs en detalle
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">GUIAS ESPECIALES</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Para viajeros especificos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">F</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Lisboa con Ninos</h3>
                  <p className="text-slate-500 text-sm mb-3">Itinerarios adaptados, parques, restaurantes kid-friendly, tips de cochecitos.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-900">5.99 <span className="text-sm font-normal text-slate-500">EUR</span></span>
                    <Link href="/guias/lisboa-con-ninos" className="text-rose-600 font-semibold text-sm">Ver guia</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">P</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Pack Fotografo Pro</h3>
                  <p className="text-slate-500 text-sm mb-3">50+ spots detallados, horarios de luz, settings, angulos exactos.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-900">7.99 <span className="text-sm font-normal text-slate-500">EUR</span></span>
                    <Link href="/guias/pack-fotografo" className="text-purple-600 font-semibold text-sm">Ver guia</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">QUE INCLUYE CADA PACK</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Mucho mas que un itinerario</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Itinerario hora a hora</h3>
              <p className="text-slate-500 text-sm">Ruta optimizada para no perder tiempo ni perderte.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Restaurantes locales</h3>
              <p className="text-slate-500 text-sm">Lista de donde comemos nosotros. Con precios y que pedir.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Spots de fotos</h3>
              <p className="text-slate-500 text-sm">Lugares exactos, mejor hora del dia, donde pararte.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mapas offline</h3>
              <p className="text-slate-500 text-sm">Descarga todo y navega sin gastar datos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">TESTIMONIOS</span>
            <h2 className="text-4xl font-bold mb-4">+2,847 viajeros felices</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="flex gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-slate-300 mb-6">"Por 8.99 EUR tienes todo resuelto. El restaurante de Alfama que recomiendan fue INCREIBLE. Vale cada centimo."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full"></div>
                <div>
                  <p className="font-bold">Maria Garcia</p>
                  <p className="text-sm text-slate-400">Madrid</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="flex gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-slate-300 mb-6">"Los spots de fotos son oro puro. Saque las mejores fotos de mi vida en Lisboa siguiendo sus horarios."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full"></div>
                <div>
                  <p className="font-bold">Carlos Rodriguez</p>
                  <p className="text-sm text-slate-400">Mexico</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="flex gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-slate-300 mb-6">"El pack de 3 dias con Sintra es perfecto. Todo organizado, sin estres. Y por menos de 12 euros!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"></div>
                <div>
                  <p className="font-bold">Ana Martinez</p>
                  <p className="text-sm text-slate-400">Buenos Aires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-amber-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Menos que un cafe en Lisboa</h2>
          <p className="text-xl opacity-90 mb-8">Por el precio de un pastel de nata tienes todo tu viaje organizado.</p>
          <Link href="/itinerarios" className="inline-block bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
            Ver Packs desde 5.99 EUR
          </Link>
          <p className="mt-6 opacity-75">Descarga inmediata - Acceso de por vida</p>
        </div>
      </section>
    </main>
  );
}
