'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO - TU VERSIÓN MANTENIDA + Micro Social Proof
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2400"
            alt="Lisboa"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-yellow-400">Actualizado Enero 2025</span>
          </div>

          {/* Headline - TU VERSIÓN */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
            Descubre Lisboa<br />
            <span className="text-yellow-400">Como un Local</span>
          </h1>

          {/* Subheadline - TU VERSIÓN */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Itinerarios verificados por quien vive aquí desde hace 10 años.<br className="hidden sm:block" />
            Sin perder tiempo. Sin colas. Sin turistadas.
          </p>

          {/* CTAs - TU VERSIÓN */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#itinerarios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-yellow-400/50 transition-all text-lg"
            >
              <span>Ver Itinerarios</span>
            </Link>
            <Link
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all"
            >
              <span>¿Cómo funciona?</span>
            </Link>
          </div>

          {/* Social Proof Micro - NUEVO pero discreto */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold text-gray-300">500+ viajeros</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-semibold text-gray-300">Garantía 48h</span>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          EL PROBLEMA - TU VERSIÓN refinada (más punchy)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-block bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-6">
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider">El problema</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Los blogs te mandan a los mismos sitios turísticos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Las apps copian info vieja. Los tours grupales siguen rutas comerciales.<br />
            <span className="font-semibold text-gray-900">Yo vivo aquí desde 2015. Conozco la Lisboa real.</span>
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PEEK INSIDE - NUEVO (versión minimalista)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Qué incluye cada guía
            </h2>
            <p className="text-lg text-gray-600">
              No es un PDF con direcciones. Es una guía paso a paso.
            </p>
          </div>

          {/* Sample Preview - Minimalista */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h5 className="text-xl font-bold text-gray-900 mb-2">09:00 - Miradouro da Senhora do Monte</h5>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El mejor mirador de Lisboa. Llega antes de las 9:30 para tenerlo solo. 
                  Incluye coordenadas GPS, cuánto tiempo quedarte y dónde sacar la mejor foto.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span>📍 Coordenadas exactas</span>
                  <span>⏱️ Timing perfecto</span>
                  <span>📸 Mejores ángulos</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ITINERARIOS - TU VERSIÓN + 1 beneficio + social proof
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-gray-50" id="itinerarios">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-400 text-black font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Itinerarios
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Elige tu experiencia
            </h2>
            <p className="text-lg text-gray-600">
              Horarios exactos, coordenadas GPS y tips que solo un local conoce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Lisboa 1 Día */}
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all group">
              {/* Badge */}
              <div className="bg-yellow-400 text-black text-xs font-black uppercase tracking-wider px-4 py-2 text-center">
                MÁS POPULAR
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=800"
                  alt="Lisboa en 1 Día"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  Lisboa en 1 Día
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Lo esencial sin prisas ni turistadas
                </p>

                {/* NUEVO - 1 Beneficio cuantificado */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-gray-900">Ahorra 3+ horas</span> de investigación y evita las 2 trampas turísticas más caras
                  </p>
                </div>

                {/* Stats - TU VERSIÓN */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>1 día</span>
                  <span>8 paradas</span>
                </div>

                {/* NUEVO - Social Proof discreto */}
                <p className="text-xs text-gray-500 italic mb-6">
                  473 personas lo compraron en diciembre
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-gray-900">€3.99</span>
                </div>

                {/* CTA */}
                <Link
                  href="/guias/lisboa-1-dia"
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-all text-center"
                >
                  Ver guía
                </Link>
              </div>
            </div>

            {/* Lisboa 2 Días */}
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all group">
              
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800"
                  alt="Lisboa en 2 Días"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  Lisboa en 2 Días
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Con tiempo para respirar la ciudad
                </p>

                {/* NUEVO - Beneficio */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-gray-900">Incluye 3 restaurantes</span> verificados en 2025 (sin trampas turísticas)
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>2 días</span>
                  <span>15 paradas</span>
                </div>

                <p className="text-xs text-gray-500 italic mb-6">
                  Popular para parejas y foodies
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-gray-900">€5.99</span>
                </div>

                <Link
                  href="/guias/lisboa-2-dias"
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-all text-center"
                >
                  Ver guía
                </Link>
              </div>
            </div>

            {/* Lisboa 3 Días */}
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all group">
              
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800"
                  alt="Lisboa en 3 Días"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  Lisboa en 3 Días
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Inmersión completa como residente
                </p>

                {/* NUEVO - Beneficio */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-gray-900">Incluye Sintra</span> con timing para evitar las multitudes de turistas
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>3 días</span>
                  <span>20+ paradas</span>
                </div>

                <p className="text-xs text-gray-500 italic mb-6">
                  La experiencia más completa
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-gray-900">€7.99</span>
                </div>

                <Link
                  href="/guias/lisboa-3-dias"
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-all text-center"
                >
                  Ver guía
                </Link>
              </div>
            </div>

          </div>

          {/* Ver todas - TU VERSIÓN */}
          <div className="text-center mt-12">
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-bold transition-colors"
            >
              <span>Ver todas las guías</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PACK COMPLETO - TU VERSIÓN mejorada (desktop sticky viene del layout)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="bg-black/5 backdrop-blur-sm rounded-3xl p-10 md:p-16 text-center">
            
            <div className="inline-block bg-black text-yellow-400 text-sm font-black uppercase tracking-wider px-6 py-2 rounded-full mb-6">
              Ahorra 60% Hoy
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Pack Completo Lisboa
            </h2>

            <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
              Las 7 guías + actualizaciones perpetuas + soporte directo conmigo
            </p>

            {/* Pricing */}
            <div className="mb-10">
              <div className="text-xl text-black/60 line-through mb-2">€42.00</div>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-7xl md:text-8xl font-black text-black">€24.99</span>
                <div className="bg-black text-yellow-400 px-4 py-2 rounded-lg font-black text-xl">
                  -60%
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/pack-completo"
              className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-yellow-400 font-black px-12 py-6 rounded-xl text-xl transition-all shadow-2xl"
            >
              <span>Desbloquear Todo</span>
            </Link>

            <p className="text-sm text-black/70 mt-6">
              ✓ Garantía 48h · ✓ Acceso perpetuo · ✓ Sin renovaciones
            </p>

            {/* Lo que incluye - TU VERSIÓN */}
            <div className="mt-12 pt-12 border-t border-black/10">
              <h3 className="text-lg font-bold text-black mb-8">Lo que incluye:</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-3xl font-black text-black mb-2">7</div>
                  <h4 className="font-bold text-black mb-1">Guías Completas</h4>
                  <p className="text-sm text-black/70">Valor individual: €42</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-black mb-2">∞</div>
                  <h4 className="font-bold text-black mb-1">Actualizaciones de Por Vida</h4>
                  <p className="text-sm text-black/70">Precios verificados 2025</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-black mb-2">💬</div>
                  <h4 className="font-bold text-black mb-1">Soporte Directo</h4>
                  <p className="text-sm text-black/70">Respondo personalmente</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CÓMO FUNCIONA - TU VERSIÓN exacta
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white" id="como-funciona">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-900 text-white font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Cómo Funciona
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Desde elegir hasta explorar en menos de 5 minutos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-black text-black mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Elige tu itinerario</h3>
              <p className="text-gray-600 leading-relaxed">
                1, 2 o 3 días. Fotográfico, familiar, romántico o foodie. Tú decides el ritmo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-black text-black mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Acceso inmediato</h3>
              <p className="text-gray-600 leading-relaxed">
                Pago único. Sin suscripciones. Entras desde cualquier dispositivo de por vida.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-black text-black mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Explora con GPS</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada parada tiene coordenadas exactas. Un clic y Google Maps te lleva directo.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS - TU VERSIÓN + Garantía expandida
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-12">
            
            <div>
              <div className="text-6xl md:text-7xl font-black text-yellow-500 mb-3">
                500+
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Viajeros Satisfechos</h3>
              <p className="text-gray-600">
                Han explorado Lisboa con nuestros itinerarios sin perderse
              </p>
            </div>

            <div>
              <div className="text-6xl md:text-7xl font-black text-yellow-500 mb-3">
                48h
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Garantía Total</h3>
              <p className="text-gray-600">
                Si no cumple expectativas, devolvemos sin preguntas
              </p>
            </div>

            <div>
              <div className="text-6xl md:text-7xl font-black text-yellow-500 mb-3">
                2025
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Actualizado Enero</h3>
              <p className="text-gray-600">
                Precios, horarios y recomendaciones verificados este mes
              </p>
            </div>

          </div>

          {/* NUEVO - Garantía Expandida (discreta) */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🛡️</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Garantía sin preguntas de 48 horas
                </h4>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Si la guía no cumple tus expectativas, te devuelvo el dinero. 
                  Sin explicaciones. Sin trámites.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Dato real:</strong> Solo 8 personas de 500+ han pedido devolución 
                  (y fue porque compraron la misma guía dos veces por error).
                </p>
              </div>
            </div>
          </div>

          {/* TU Footer irónico */}
          <p className="text-center mt-12 text-sm text-gray-500 italic">
            Solo 8 devoluciones en 6 meses — no por insatisfacción, sino por compras duplicadas
          </p>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA FINAL - TU VERSIÓN
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Listo para conocer la Lisboa real?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Empieza con cualquier itinerario desde €3.99
          </p>

          <Link
            href="#itinerarios"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-black px-12 py-6 rounded-xl text-xl transition-all shadow-2xl"
          >
            <span>Ver Itinerarios</span>
          </Link>

        </div>
      </section>

    </main>
  );
}
