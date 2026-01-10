import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO - Mobile optimizado */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2400"
            alt="Lisboa"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay mejorado */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/40 to-slate-900/70"></div>
        </div>

        {/* Contenido hero */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Badge más pequeño en mobile */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full"></span>
            <span className="text-xs md:text-sm font-medium text-white/90">Actualizado Enero 2025</span>
          </div>

          {/* Headline - Tamaños mobile reducidos */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-[0.95]">
            Descubre Lisboa<br />
            <span className="text-primary" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Como un Local
            </span>
          </h1>

          {/* Subheadline - Mobile más pequeño */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-4 md:px-0">
            Itinerarios verificados por quien vive aquí desde hace 10 años.<br className="hidden sm:block" />
            Sin perder tiempo. Sin colas. Sin turistadas.
          </p>

          {/* CTAs - Full width en mobile */}
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

          {/* Social proof - Mobile compacto */}
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

      {/* PROBLEMA - Mobile spacing reducido */}
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

      {/* ITINERARIOS - Cards mobile optimizadas */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <p className="text-xs md:text-sm uppercase tracking-widest text-primary font-semibold mb-3 md:mb-4">Itinerarios</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
              Elige tu experiencia
            </h2>
            <p className="text-base md:text-lg text-slate-600 px-4 md:px-0">
              Horarios exactos, coordenadas GPS y tips que solo un local conoce.
            </p>
          </div>

          {/* Grid - Mobile apilado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            
            {/* Card 1 - Mobile optimizada */}
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
                
                {/* Stats */}
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

                {/* Precio */}
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

            {/* Card 2 - Lisboa 2 Días */}
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

            {/* Card 3 - Lisboa 3 Días */}
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

          {/* Link ver todas */}
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

      {/* PACK COMPLETO - Mobile optimizado */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary via-orange-500 to-primary relative overflow-hidden">
        {/* Pattern mejorado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-6 md:mb-8 border border-white/30">
              <span className="text-xs md:text-sm font-bold text-white tracking-wide">OFERTA · AHORRA 60%</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Pack Completo Lisboa
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 md:mb-12 px-4 md:px-0">
              7 guías + actualizaciones perpetuas + soporte directo
            </p>

            <div className="mb-8 md:mb-12">
              <div className="text-white/70 line-through text-xl md:text-2xl mb-2">€42.00</div>
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-white">€24.99</div>
            </div>

            <Link
              href="/pack-completo"
              className="inline-flex items-center gap-2 md:gap-3 bg-white hover:bg-slate-50 text-primary font-bold px-8 md:px-12 py-4 md:py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 text-base md:text-lg w-full sm:w-auto justify-center"
            >
              <span>Desbloquear Pack Completo</span>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <p className="text-xs md:text-sm text-white/80 mt-6 md:mt-8">
              Garantía 48h · Acceso de por vida · Sin renovaciones
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA - Mobile compacto */}
      <section id="como-funciona" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <p className="text-xs md:text-sm uppercase tracking-widest text-primary font-semibold mb-3 md:mb-4">Cómo funciona</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
              3 pasos para explorar Lisboa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Paso 1 */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
                <span className="text-2xl md:text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Elige</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Selecciona el itinerario que mejor se adapte a tu viaje
              </p>
            </div>

            {/* Paso 2 */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
                <span className="text-2xl md:text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Accede</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Pago único. Acceso inmediato desde cualquier dispositivo
              </p>
            </div>

            {/* Paso 3 */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
                <span className="text-2xl md:text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Disfruta</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Sigue el itinerario con GPS incluido en cada parada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS - Mobile optimizado */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
              
              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2 md:mb-3">500+</div>
                <p className="text-base md:text-lg font-semibold text-slate-900 mb-1 md:mb-2">Viajeros Satisfechos</p>
                <p className="text-sm md:text-base text-slate-600">Han descubierto Lisboa sin turistadas</p>
              </div>

              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2 md:mb-3">48h</div>
                <p className="text-base md:text-lg font-semibold text-slate-900 mb-1 md:mb-2">Garantía Total</p>
                <p className="text-sm md:text-base text-slate-600">Devolución sin preguntas</p>
              </div>

              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2 md:mb-3">2025</div>
                <p className="text-base md:text-lg font-semibold text-slate-900 mb-1 md:mb-2">Actualizado</p>
                <p className="text-sm md:text-base text-slate-600">Precios y horarios verificados</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - Mobile optimizado */}
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
