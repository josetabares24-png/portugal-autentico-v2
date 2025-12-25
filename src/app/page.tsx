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
            Itinerarios creados por portugueses con rutas secretas, horarios sin colas y los restaurantes donde comemos nosotros.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/itinerarios" className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
              <span className="relative z-10">Ver Itinerarios</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link href="/preview" className="glass text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
              Preview Gratis
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Garantia 14 dias</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Mapas offline</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      <section className="py-6 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm">
            <span className="font-medium text-slate-500">Como visto en:</span>
            <span className="font-bold text-slate-600">El Pais</span>
            <span className="font-bold text-slate-600">Lonely Planet</span>
            <span className="font-bold text-slate-600">TripAdvisor</span>
            <span className="font-bold text-slate-600">El Mundo</span>
            <span className="font-bold text-slate-600">Forbes</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-100 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">ITINERARIOS PREMIUM</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Elige tu experiencia</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Cada guia incluye rutas optimizadas, mapas offline y restaurantes donde comen los locales</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            <div className="card-hover bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="h-52 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">ESENCIAL</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa 1 Dia</h3>
                <p className="text-slate-500 mb-4">Lo mejor de Lisboa en un dia perfecto. Ideal para escalas.</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span>8 paradas</span>
                  <span>3 restaurantes</span>
                  <span>6km</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-slate-400 line-through text-sm">39 EUR</span>
                    <div className="text-3xl font-bold text-slate-900">27 EUR</div>
                  </div>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all">
                    Ver mas
                  </Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-400 relative lg:scale-105 lg:-my-4">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-b-xl animate-pulse-glow">
                  MAS VENDIDO
                </div>
              </div>
              <div className="h-52 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">COMPLETO</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa 2 Dias</h3>
                <p className="text-slate-500 mb-4">Experiencia completa con Belem, LX Factory y vida nocturna.</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span>15 paradas</span>
                  <span>6 restaurantes</span>
                  <span>12km</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-slate-400 line-through text-sm">54 EUR</span>
                    <div className="text-3xl font-bold text-slate-900">37 EUR</div>
                  </div>
                  <Link href="/itinerarios/lisboa-2-dias-completo" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Ver mas
                  </Link>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="h-52 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800)'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">PREMIUM</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa 3 Dias</h3>
                <p className="text-slate-500 mb-4">Lisboa + Sintra + Cascais. La experiencia completa.</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span>22 paradas</span>
                  <span>9 restaurantes</span>
                  <span>18km</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-slate-400 line-through text-sm">69 EUR</span>
                    <div className="text-3xl font-bold text-slate-900">47 EUR</div>
                  </div>
                  <Link href="/itinerarios/lisboa-3-dias-premium" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all">
                    Ver mas
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/comparar" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              Comparar los 3 itinerarios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">OFERTA ESPECIAL</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pack Completo</h2>
            <p className="text-xl text-slate-300">Los 3 itinerarios con descuento especial</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 text-center">
              <div className="flex justify-center items-center gap-4 mb-6">
                <span className="text-slate-400 line-through text-2xl">111 EUR</span>
                <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">AHORRA 32 EUR</span>
              </div>
              <div className="text-6xl font-bold mb-2">79 EUR</div>
              <p className="text-slate-300 mb-8">Por los 3 itinerarios completos</p>
              
              <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Lisboa 1 Dia (valor 27 EUR)</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Lisboa 2 Dias (valor 37 EUR)</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Lisboa 3 Dias Premium (valor 47 EUR)</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                  <span className="text-amber-400">BONUS: Guia de restaurantes secretos</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all">
                Comprar Pack Completo
              </button>
              <p className="text-slate-400 text-sm mt-4">Garantia de 14 dias - Sin riesgos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">QUE INCLUYE</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Todo lo que necesitas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mapas Offline</h3>
              <p className="text-slate-500 text-sm">Descarga todo y navega sin internet. Google Maps integrado.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-amber-500/25">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Horarios Exactos</h3>
              <p className="text-slate-500 text-sm">Evita colas y multitudes. Sabemos cuando ir a cada sitio.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/25">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Restaurantes Locales</h3>
              <p className="text-slate-500 text-sm">Donde comemos nosotros. Nada de trampas turisticas.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/25">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tips Secretos</h3>
              <p className="text-slate-500 text-sm">Trucos que solo conocen los portugueses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">TESTIMONIOS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">+2,847 viajeros felices</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl card-hover">
              <div className="flex gap-1 mb-4">
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"El restaurante de Alfama que recomiendan fue INCREIBLE. Comimos bacalao como nunca. La guia vale cada centimo."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-900">Maria Garcia</p>
                  <p className="text-sm text-slate-500">Madrid, Espana</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl card-hover">
              <div className="flex gap-1 mb-4">
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"El tip del tranvia 28 nos salvo 1 hora de cola. Sintra siguiendo el itinerario fue perfecto. 100% recomendado."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-900">Carlos Rodriguez</p>
                  <p className="text-sm text-slate-500">Ciudad de Mexico</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl card-hover">
              <div className="flex gap-1 mb-4">
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"Los mapas offline nos salvaron la vida cuando nos quedamos sin datos. Todo muy bien organizado. Volveria a comprarlo."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-900">Ana Martinez</p>
                  <p className="text-sm text-slate-500">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920)'}}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Empieza tu aventura hoy</h2>
          <p className="text-xl text-slate-300 mb-8">Acceso inmediato. Descarga instantanea. Garantia de 14 dias.</p>
          <Link href="/itinerarios" className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all">
            Ver Itinerarios desde 27 EUR
          </Link>
        </div>
      </section>
    </main>
  );
}
