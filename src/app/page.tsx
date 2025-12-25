import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm">+1,847 viajeros este mes</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Vive Lisboa como<br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">un verdadero local</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Itinerarios creados por portugueses. Rutas secretas, horarios sin colas, restaurantes donde comemos nosotros. Todo en tu movil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/itinerarios" className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all hover:-translate-y-1">
              Ver Itinerarios
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
            <Link href="/guia-practica" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Guia Gratuita
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span>4.9/5 (847 resenas)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Garantia 14 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              <span>Acceso inmediato</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Nuestros itinerarios</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">Elige tu experiencia perfecta</h2>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">Cada itinerario incluye rutas optimizadas hora a hora, mapas offline, y los restaurantes donde realmente comemos los portugueses</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="h-48 bg-gradient-to-br from-sky-400 to-blue-600 p-6 flex flex-col justify-between">
                <span className="self-start bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">ESENCIAL</span>
                <div>
                  <p className="text-white/80 text-sm">Perfecto para</p>
                  <p className="text-white font-bold text-lg">Escapada express</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa 1 Dia</h3>
                <p className="text-slate-600 mb-4">Lo mejor de Lisboa en un dia perfectamente planificado. Alfama, Baixa, miradores iconicos.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">8 paradas</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">3 restaurantes</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">Mapa offline</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">27</span>
                    <span className="text-slate-500 ml-1">EUR</span>
                  </div>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-amber-400 scale-105">
              <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-b-full">MAS VENDIDO</div>
              <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 p-6 flex flex-col justify-between">
                <span className="self-start bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">COMPLETO</span>
                <div>
                  <p className="text-white/80 text-sm">Perfecto para</p>
                  <p className="text-white font-bold text-lg">Fin de semana</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa 2 Dias</h3>
                <p className="text-slate-600 mb-4">La experiencia completa. Belem, LX Factory, vida nocturna y los secretos que no estan en las guias.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs">15 paradas</span>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs">6 restaurantes</span>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs">Vida nocturna</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">37</span>
                    <span className="text-slate-500 ml-1">EUR</span>
                  </div>
                  <Link href="/itinerarios/lisboa-2-dias-completo" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all">
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="h-48 bg-gradient-to-br from-violet-500 to-purple-700 p-6 flex flex-col justify-between">
                <span className="self-start bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">PREMIUM</span>
                <div>
                  <p className="text-white/80 text-sm">Perfecto para</p>
                  <p className="text-white font-bold text-lg">Inmersion total</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa 3 Dias</h3>
                <p className="text-slate-600 mb-4">Lisboa y alrededores. Incluye excursion a Sintra, Cascais y experiencias que recordaras siempre.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">22 paradas</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">9 restaurantes</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">Sintra + Cascais</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">47</span>
                    <span className="text-slate-500 ml-1">EUR</span>
                  </div>
                  <Link href="/itinerarios/lisboa-3-dias-premium" className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Que incluye</span>
            <h2 className="text-4xl font-bold mt-4 text-slate-900">Todo lo que necesitas en tu bolsillo</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mapas Offline</h3>
              <p className="text-slate-600">Descarga todo y navega sin internet. Funciona en cualquier movil.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Horarios Exactos</h3>
              <p className="text-slate-600">Sabemos cuando no hay colas. Te decimos la hora exacta para cada lugar.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Restaurantes Locales</h3>
              <p className="text-slate-600">Donde comemos nosotros. Nada de trampas para turistas, solo comida autentica.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Tips Secretos</h3>
              <p className="text-slate-600">Los trucos que solo conocemos los que vivimos aqui. Ahorra tiempo y dinero.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Testimonios</span>
            <h2 className="text-4xl font-bold mt-4 text-slate-900">Lo que dicen nuestros viajeros</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              </div>
              <p className="text-slate-700 mb-6">"El restaurante de Alfama que nos recomendaron fue increible. Comimos bacalao como nunca habiamos probado. La guia vale oro."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-900">Maria Garcia</p>
                  <p className="text-sm text-slate-500">Madrid, Espana</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              </div>
              <p className="text-slate-700 mb-6">"Gracias al tip del tranvia 28 lo cogimos sin cola a las 8:30am. Sintra fue magico siguiendo el itinerario. 100% recomendado."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-900">Carlos Rodriguez</p>
                  <p className="text-sm text-slate-500">Ciudad de Mexico</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              </div>
              <p className="text-slate-700 mb-6">"Los mapas offline salvaron nuestro viaje cuando nos quedamos sin datos. Todo muy bien organizado. Volveria a comprarlo."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-900">Ana Lopez</p>
                  <p className="text-sm text-slate-500">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Empieza tu aventura hoy</h2>
          <p className="text-xl text-slate-300 mb-8">Acceso inmediato. Garantia de 14 dias. Sin riesgos.</p>
          <Link href="/itinerarios" className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all hover:-translate-y-1">
            Ver Itinerarios
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Portugal Autentico</h3>
              <p className="text-slate-400">Guias de viaje creadas por locales que aman Lisboa.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Itinerarios</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="hover:text-white transition-colors">Lisboa 1 Dia</Link></li>
                <li><Link href="/itinerarios/lisboa-2-dias-completo" className="hover:text-white transition-colors">Lisboa 2 Dias</Link></li>
                <li><Link href="/itinerarios/lisboa-3-dias-premium" className="hover:text-white transition-colors">Lisboa 3 Dias</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/guia-practica" className="hover:text-white transition-colors">Guia Gratuita</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-slate-400">hola@portugalautentico.com</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>2025 Portugal Autentico. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
