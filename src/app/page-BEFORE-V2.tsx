import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* =============================================
          HERO - Mobile optimizado
      ============================================= */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2400"
            alt="Lisboa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/40 to-slate-900/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full"></span>
            <span className="text-xs md:text-sm font-medium text-white/90">Actualizado Enero 2025</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-[0.95]">
            Descubre Lisboa<br />
            <span className="text-primary" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Como un Local
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-4 md:px-0">
            Itinerarios verificados por quien vive aquí desde hace 10 años.<br className="hidden sm:block" />
            Sin perder tiempo. Sin colas. Sin turistadas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center px-4 md:px-0">
            <Link
              href="/itinerarios"
              className="group w-full sm:w-auto bg-gradient-to-r from-primary to-orange-500 hover:from-orange-600 hover:to-primary text-white font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg"
            >
              <span>Ver Itinerarios</span>
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="#como-funciona"
              className="w-full sm:w-auto bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 text-white font-semibold px-8 md:px-10 py-4 md:py-5 rounded-xl transition-all duration-300 text-base md:text-lg"
            >
              ¿Cómo funciona?
            </Link>
          </div>

          <div className="mt-10 md:mt-16 flex items-center justify-center gap-4 md:gap-8 text-white/70 text-xs md:text-sm">
            <div className="flex items-center gap-1.5 md:gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>500+ viajeros</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Garantía 48h</span>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          PROBLEMA
      ============================================= */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-semibold mb-4 md:mb-6">El problema</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
              Los blogs te mandan a<br />
              los mismos sitios turísticos
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 md:mb-6">
              Las apps copian info vieja. Los tours grupales siguen rutas comerciales. 
              Los influencers cobran por recomendar sitios.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-slate-900 font-semibold">
              Yo vivo aquí desde 2015. Conozco la Lisboa real.
            </p>
          </div>
        </div>
      </section>

      {/* =============================================
          ITINERARIOS - Cards mejoradas
      ============================================= */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <p className="text-xs md:text-sm uppercase tracking-widest text-primary font-semibold mb-3 md:mb-4">Itinerarios</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
              Elige tu experiencia
            </h2>
            <p className="text-base md:text-lg text-slate-600 px-4 md:px-0">
              Horarios exactos, coordenadas GPS y tips que solo un local conoce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            
            {/* Card 1 */}
            <Link 
              href="/guias/lisboa-1-dia"
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 md:h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=800"
                  alt="Lisboa en 1 Día"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-primary text-white text-xs font-bold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg">
                  MÁS POPULAR
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">Lisboa en 1 Día</h3>
                <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6">Lo esencial sin prisas ni turistadas</p>
                
                <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-slate-500 mb-4 md:mb-6">
                  <span className="flex items-center gap-1 md:gap-1.5">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    1 día
                  </span>
                  <span className="flex items-center gap-1 md:gap-1.5">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    8 paradas
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-3xl md:text-4xl font-bold text-slate-900">€3.99</span>
                  <span className="text-primary font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform flex items-center gap-1">
                    Ver guía
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link 
              href="/guias/lisboa-2-dias"
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 md:h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800"
                  alt="Lisboa en 2 Días"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">Lisboa en 2 Días</h3>
                <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6">Con tiempo para respirar la ciudad</p>
                
                <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-slate-500 mb-4 md:mb-6">
                  <span className="flex items-center gap-1 md:gap-1.5">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2 días
                  </span>
                  <span className="flex items-center gap-1 md:gap-1.5">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    15 paradas
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-3xl md:text-4xl font-bold text-slate-900">€5.99</span>
                  <span className="text-primary font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform flex items-center gap-1">
                    Ver guía
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link 
              href="/guias/lisboa-3-dias"
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 md:h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800"
                  alt="Lisboa en 3 Días"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">Lisboa en 3 Días</h3>
                <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6">Inmersión completa como residente</p>
                
                <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-slate-500 mb-4 md:mb-6">
                  <span className="flex items-center gap-1 md:gap-1.5">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    3 días
                  </span>
                  <span className="flex items-center gap-1 md:gap-1.5">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    20+ paradas
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-3xl md:text-4xl font-bold text-slate-900">€7.99</span>
                  <span className="text-primary font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform flex items-center gap-1">
                    Ver guía
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-base md:text-lg transition-colors group"
            >
              <span>Ver todas las guías</span>
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* =============================================
          PACK COMPLETO - PREMIUM NO GENÉRICO
      ============================================= */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-orange-500 via-60% to-orange-600"></div>
        
        <div className="absolute inset-0 opacity-[0.07]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-lg px-4 py-2 mb-6 border border-white/20">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs md:text-sm font-bold text-white tracking-wide uppercase">
                    Ahorra 60% Hoy
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  Pack Completo<br />
                  Lisboa
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 md:mb-10">
                  Las 7 guías + actualizaciones perpetuas + soporte directo conmigo
                </p>

                <div className="mb-8 md:mb-10">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                    <span className="text-white/60 line-through text-xl md:text-2xl">€42.00</span>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-bold">-60%</span>
                    </div>
                  </div>
                  <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-white">
                    €24<span className="text-5xl md:text-6xl">.99</span>
                  </div>
                </div>

                <Link
                  href="/pack-completo"
                  className="group inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-primary font-bold px-8 md:px-10 py-5 md:py-6 rounded-xl shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 text-base md:text-lg w-full lg:w-auto justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <span>Desbloquear Todo</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>

                <p className="text-xs md:text-sm text-white/70 mt-6">
                  ✓ Garantía 48h · ✓ Acceso perpetuo · ✓ Sin renovaciones
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-white font-bold text-lg mb-6">Lo que incluye:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">7 Guías Completas</p>
                        <p className="text-white/70 text-sm">Valor individual: €42</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Actualizaciones de Por Vida</p>
                        <p className="text-white/70 text-sm">Precios verificados 2025</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Soporte Directo</p>
                        <p className="text-white/70 text-sm">Respondo personalmente</p>
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-4 mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">Ahorras</span>
                        <span className="text-white font-bold text-xl">€17.01</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          CÓMO FUNCIONA - PREMIUM NO GENÉRICO
      ============================================= */}
      <section id="como-funciona" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 mb-6">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <span className="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Cómo Funciona
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Desde elegir hasta explorar<br className="hidden md:block" />
              en menos de 5 minutos
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              
              <div className="relative">
                <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      1
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Elige tu itinerario
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    1, 2 o 3 días. Fotográfico, familiar, romántico o foodie. Tú decides el ritmo.
                  </p>
                </div>
                
                <div className="hidden md:block absolute top-10 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>

              <div className="relative">
                <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Acceso inmediato
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Pago único. Sin suscripciones. Entras desde cualquier dispositivo de por vida.
                  </p>
                </div>
                
                <div className="hidden md:block absolute top-10 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>

              <div className="relative">
                <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      3
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Explora con GPS
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Cada parada tiene coordenadas exactas. Un clic y Google Maps te lleva directo.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          STATS - PREMIUM CON CONTEXTO
      ============================================= */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              
              <div className="bg-white rounded-2xl p-8 border-l-4 border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-primary">500+</div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Viajeros Satisfechos</h3>
                <p className="text-sm text-slate-600">Han explorado Lisboa con nuestros itinerarios sin perderse</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-green-600">48h</div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Garantía Total</h3>
                <p className="text-sm text-slate-600">Si no cumple expectativas, devolvemos sin preguntas</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-blue-600">2025</div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Actualizado Enero</h3>
                <p className="text-sm text-slate-600">Precios, horarios y recomendaciones verificados este mes</p>
              </div>

            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-slate-500 italic">
                Solo 8 devoluciones en 6 meses — no por insatisfacción, sino por compras duplicadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          CTA FINAL
      ============================================= */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
              ¿Listo para conocer<br />
              la Lisboa real?
            </h2>
            <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-12">
              Empieza con cualquier itinerario desde €3.99
            </p>
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-primary to-orange-500 hover:from-orange-600 hover:to-primary text-white font-bold px-10 md:px-12 py-5 md:py-6 rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-base md:text-lg w-full sm:w-auto justify-center"
            >
              <span>Ver Itinerarios</span>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
