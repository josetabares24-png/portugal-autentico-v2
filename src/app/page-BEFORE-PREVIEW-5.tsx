'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF7]">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO - Diseño humano con ilustración orgánica
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background con overlay warm */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2400"
            alt="Lisboa"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-orange-900/40"></div>
        </div>

        {/* Decorative organic shapes - diseño ilustrador */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          {/* Badge artesanal */}
          <div className="inline-flex items-center gap-2 bg-orange-50/10 backdrop-blur-md border-2 border-orange-400/30 rounded-full px-5 py-2.5 mb-10 shadow-lg">
            <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="3">
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
            <span className="text-sm font-bold text-orange-100 tracking-wide">Actualizado Enero 2025</span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            {/* Headline - Typography mix serif/sans */}
            <h1 className="mb-8">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Descubre Lisboa
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1]" style={{ 
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Como un Local
              </span>
            </h1>

            {/* Subheadline con micro-ilustración */}
            <div className="relative inline-block mb-12">
              {/* Decorative underline hand-drawn */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-50" viewBox="0 0 300 12" fill="none">
                <path d="M2 6 Q 75 10, 150 6 T 298 6" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
              </svg>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed px-6">
                Itinerarios verificados por quien vive aquí desde hace 10 años.<br className="hidden sm:block" />
                <span className="text-white font-semibold">Sin perder tiempo. Sin colas. Sin turistadas.</span>
              </p>
            </div>

            {/* CTAs con diseño orgánico */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
              <Link
                href="#itinerarios"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all overflow-hidden"
              >
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <span className="relative text-lg">Ver Itinerarios</span>
                <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="#como-funciona"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-semibold px-10 py-5 rounded-2xl transition-all"
              >
                <span>¿Cómo funciona?</span>
              </Link>
            </div>

            {/* Social Proof - diseño badge orgánico */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10">
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold text-gray-200">500+ viajeros</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-semibold text-gray-200">Garantía 48h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          EL PROBLEMA - Diseño humano con ilustración
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-gradient-to-b from-orange-50/30 to-white relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
          
          {/* Badge artesanal */}
          <div className="inline-flex items-center gap-2 bg-red-100 border-2 border-red-300 rounded-full px-4 py-2 mb-8">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-red-700 font-bold text-sm uppercase tracking-wider">El problema</span>
          </div>

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Los blogs te mandan a los<br />
              <span className="relative inline-block">
                <span className="text-red-500">mismos sitios turísticos</span>
                {/* Hand-drawn circle */}
                <svg className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)]" viewBox="0 0 200 60" fill="none">
                  <ellipse cx="100" cy="30" rx="95" ry="25" stroke="#FF6B35" strokeWidth="3" strokeDasharray="4 4" opacity="0.3" />
                </svg>
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Las apps copian info vieja. Los tours grupales siguen rutas comerciales.<br />
              <span className="font-bold text-gray-900 relative inline-block mt-2">
                Yo vivo aquí desde 2015. Conozco la Lisboa real.
                {/* Underline hand-drawn */}
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 300 8" fill="none">
                  <path d="M2 4 Q 75 6, 150 4 T 298 4" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PEEK INSIDE - Diseño card artesanal
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Qué incluye cada guía
            </h2>
            <p className="text-xl text-gray-600">
              No es un PDF con direcciones. Es una guía paso a paso.
            </p>
          </div>

          {/* Sample Preview - Diseño orgánico */}
          <div className="relative max-w-3xl mx-auto">
            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-orange-400 rounded-tl-3xl opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-orange-400 rounded-br-3xl opacity-30"></div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-3xl p-10 shadow-xl">
              <div className="flex flex-col sm:flex-row gap-8">
                {/* Number badge artesanal */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                    <span className="text-3xl font-black text-white">1</span>
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-300 rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
                
                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    09:00 - Miradouro da Senhora do Monte
                  </h5>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    El mejor mirador de Lisboa. Llega antes de las 9:30 para tenerlo solo. 
                    Incluye coordenadas GPS, cuánto tiempo quedarte y dónde sacar la mejor foto.
                  </p>
                  
                  {/* Tags diseño orgánico */}
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-orange-200">
                      📍 Coordenadas exactas
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-orange-200">
                      ⏱️ Timing perfecto
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-orange-200">
                      📸 Mejores ángulos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ITINERARIOS - Cards diseño humano
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-orange-50/20" id="itinerarios">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <div className="text-center mb-16">
            {/* Badge artesanal */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full mb-6 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>Itinerarios</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5" style={{ fontFamily: 'Georgia, serif' }}>
              Elige tu experiencia
            </h2>
            <p className="text-xl text-gray-600">
              Horarios exactos, coordenadas GPS y tips que solo un local conoce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Lisboa 1 Día - Diseño artesanal */}
            <div className="group bg-white rounded-3xl overflow-hidden border-3 border-gray-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300 relative">
              
              {/* Badge popular - diseño orgánico */}
              <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white text-xs font-black uppercase px-4 py-2 rounded-full shadow-lg transform -rotate-2">
                🔥 Más Popular
              </div>

              {/* Image con overlay gradiente */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=800"
                  alt="Lisboa en 1 Día"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Lisboa en 1 Día
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  Lo esencial sin prisas ni turistadas
                </p>

                {/* Beneficio box - diseño warm */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-400 p-4 rounded-r-2xl mb-5 shadow-sm">
                  <p className="text-sm text-gray-800 leading-snug">
                    <span className="font-bold text-gray-900">Ahorra 3+ horas</span> de investigación y evita las 2 trampas turísticas más caras
                  </p>
                </div>

                {/* Stats - diseño badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700">1 día</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700">8 paradas</span>
                </div>

                {/* Social proof discreto */}
                <p className="text-xs text-gray-500 italic mb-6 flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  473 personas lo compraron en diciembre
                </p>

                {/* Pricing artesanal */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-5xl font-black text-gray-900">€3.99</span>
                  <span className="text-sm text-gray-500 font-medium">una vez</span>
                </div>

                {/* CTA diseño orgánico */}
                <Link
                  href="/guias/lisboa-1-dia"
                  className="block w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white font-bold py-4 rounded-2xl transition-all text-center shadow-lg hover:shadow-xl group relative overflow-hidden"
                >
                  <span className="relative z-10">Ver guía completa</span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </div>
            </div>

            {/* Lisboa 2 Días */}
            <div className="group bg-white rounded-3xl overflow-hidden border-3 border-gray-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300">
              
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800"
                  alt="Lisboa en 2 Días"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Lisboa en 2 Días
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  Con tiempo para respirar la ciudad
                </p>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-400 p-4 rounded-r-2xl mb-5 shadow-sm">
                  <p className="text-sm text-gray-800 leading-snug">
                    <span className="font-bold text-gray-900">Incluye 3 restaurantes</span> verificados en 2025 (sin trampas turísticas)
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700">2 días</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700">15 paradas</span>
                </div>

                <p className="text-xs text-gray-500 italic mb-6 flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Popular para parejas y foodies
                </p>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-5xl font-black text-gray-900">€5.99</span>
                  <span className="text-sm text-gray-500 font-medium">una vez</span>
                </div>

                <Link
                  href="/guias/lisboa-2-dias"
                  className="block w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white font-bold py-4 rounded-2xl transition-all text-center shadow-lg hover:shadow-xl group relative overflow-hidden"
                >
                  <span className="relative z-10">Ver guía completa</span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </div>
            </div>

            {/* Lisboa 3 Días */}
            <div className="group bg-white rounded-3xl overflow-hidden border-3 border-gray-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300">
              
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800"
                  alt="Lisboa en 3 Días"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Lisboa en 3 Días
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  Inmersión completa como residente
                </p>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-400 p-4 rounded-r-2xl mb-5 shadow-sm">
                  <p className="text-sm text-gray-800 leading-snug">
                    <span className="font-bold text-gray-900">Incluye Sintra</span> con timing para evitar las multitudes de turistas
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700">3 días</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700">20+ paradas</span>
                </div>

                <p className="text-xs text-gray-500 italic mb-6 flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  La experiencia más completa
                </p>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-5xl font-black text-gray-900">€7.99</span>
                  <span className="text-sm text-gray-500 font-medium">una vez</span>
                </div>

                <Link
                  href="/guias/lisboa-3-dias"
                  className="block w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white font-bold py-4 rounded-2xl transition-all text-center shadow-lg hover:shadow-xl group relative overflow-hidden"
                >
                  <span className="relative z-10">Ver guía completa</span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </div>
            </div>

          </div>

          {/* Ver todas */}
          <div className="text-center mt-16">
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-3 text-[#FF6B35] hover:text-[#F7931E] font-bold text-lg transition-colors group"
            >
              <span>Ver todas las guías</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PACK COMPLETO - Diseño premium orgánico
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-[#FF6B35] to-orange-600 relative overflow-hidden">
        {/* Decorative organic shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          
          <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 text-center border-2 border-white/20 shadow-2xl">
            
            {/* Badge artesanal */}
            <div className="inline-flex items-center gap-2 bg-black/90 text-orange-400 text-sm font-black uppercase tracking-wider px-6 py-3 rounded-full mb-8 shadow-xl border-2 border-orange-400/50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Oferta Especial</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Pack Completo Lisboa
            </h2>

            <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Las 7 guías + actualizaciones perpetuas + soporte directo conmigo
            </p>

            {/* Pricing artesanal */}
            <div className="mb-12">
              <div className="text-2xl text-white/70 line-through mb-3">€42.00</div>
              <div className="flex items-center justify-center gap-6 mb-3">
                <span className="text-8xl md:text-9xl font-black text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>€24.99</span>
                <div className="bg-black text-orange-400 px-6 py-3 rounded-2xl font-black text-2xl shadow-2xl transform rotate-3">
                  -60%
                </div>
              </div>
              <p className="text-white/80 font-semibold text-lg">Ahorras €17 · Acceso perpetuo</p>
            </div>

            {/* CTA premium */}
            <Link
              href="/pack-completo"
              className="inline-flex items-center gap-4 bg-black hover:bg-gray-900 text-orange-400 font-black px-16 py-7 rounded-[2rem] text-2xl transition-all shadow-2xl hover:scale-105 group relative overflow-hidden border-2 border-orange-400/50"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">Desbloquear Todo</span>
            </Link>

            <p className="text-sm text-white/70 mt-8">
              ✓ Descarga inmediata · ✓ Garantía 48h · ✓ Sin renovaciones
            </p>

            {/* Lo que incluye - diseño orgánico */}
            <div className="mt-16 pt-16 border-t-2 border-white/20">
              <h3 className="text-xl font-bold text-white mb-10">Lo que incluye:</h3>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                  <div className="text-5xl font-black text-white mb-3">7</div>
                  <h4 className="font-bold text-white text-lg mb-2">Guías Completas</h4>
                  <p className="text-sm text-white/70">Valor individual: €42</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                  <div className="text-5xl font-black text-white mb-3">∞</div>
                  <h4 className="font-bold text-white text-lg mb-2">Actualizaciones de Por Vida</h4>
                  <p className="text-sm text-white/70">Precios verificados 2025</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                  <div className="text-5xl font-black text-white mb-3">💬</div>
                  <h4 className="font-bold text-white text-lg mb-2">Soporte Directo</h4>
                  <p className="text-sm text-white/70">Respondo personalmente</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CÓMO FUNCIONA - Diseño ilustrado
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-white" id="como-funciona">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="text-center mb-20">
            <div className="inline-block bg-gray-900 text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full mb-6 shadow-lg">
              Cómo Funciona
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Desde elegir hasta explorar<br />en menos de 5 minutos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Step 1 */}
            <div className="text-center relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-orange-200 to-transparent"></div>
              
              <div className="relative inline-block mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-[2rem] flex items-center justify-center text-3xl font-black text-white shadow-xl transform rotate-3">
                  1
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-300 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Elige tu itinerario
              </h3>
              <p className="text-gray-600 leading-relaxed">
                1, 2 o 3 días. Fotográfico, familiar, romántico o foodie. Tú decides el ritmo.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-orange-200 to-transparent"></div>
              
              <div className="relative inline-block mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-[2rem] flex items-center justify-center text-3xl font-black text-white shadow-xl transform -rotate-3">
                  2
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-300 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Acceso inmediato
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pago único. Sin suscripciones. Entras desde cualquier dispositivo de por vida.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-[2rem] flex items-center justify-center text-3xl font-black text-white shadow-xl transform rotate-3">
                  3
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-300 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Explora con GPS
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cada parada tiene coordenadas exactas. Un clic y Google Maps te lleva directo.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS + GARANTÍA - Diseño warm
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-gradient-to-b from-orange-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20">
            
            <div>
              <div className="text-7xl md:text-8xl font-black mb-4" style={{ 
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                500+
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Viajeros Satisfechos</h3>
              <p className="text-gray-600 leading-relaxed">
                Han explorado Lisboa con nuestros itinerarios sin perderse
              </p>
            </div>

            <div>
              <div className="text-7xl md:text-8xl font-black mb-4" style={{ 
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                48h
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Garantía Total</h3>
              <p className="text-gray-600 leading-relaxed">
                Si no cumple expectativas, devolvemos sin preguntas
              </p>
            </div>

            <div>
              <div className="text-7xl md:text-8xl font-black mb-4" style={{ 
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                2025
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Actualizado Enero</h3>
              <p className="text-gray-600 leading-relaxed">
                Precios, horarios y recomendaciones verificados este mes
              </p>
            </div>

          </div>

          {/* Garantía expandida - diseño orgánico */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
            
            <div className="relative bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-300 rounded-3xl p-10 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="text-6xl flex-shrink-0">🛡️</div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    Garantía sin preguntas de 48 horas
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                    Si la guía no cumple tus expectativas, te devuelvo el dinero. 
                    Sin explicaciones. Sin trámites.
                  </p>
                  <div className="bg-white/70 rounded-2xl p-5 border border-orange-200">
                    <p className="text-sm text-gray-700 italic">
                      <strong className="text-gray-900">Dato real:</strong> Solo 8 personas de 500+ han pedido devolución 
                      (y fue porque compraron la misma guía dos veces por error).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer irónico */}
          <p className="text-center mt-16 text-sm text-gray-500 italic">
            Solo 8 devoluciones en 6 meses — no por insatisfacción, sino por compras duplicadas
          </p>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA FINAL - Diseño premium
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          
          <h2 className="text-5xl md:text-6xl font-black mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            ¿Listo para conocer<br />la Lisboa real?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Empieza con cualquier itinerario desde €3.99
          </p>

          <Link
            href="#itinerarios"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white font-black px-16 py-7 rounded-[2rem] text-2xl transition-all shadow-2xl hover:scale-105 group"
          >
            <span>Ver Itinerarios</span>
            <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

        </div>
      </section>

    </main>
  );
}
