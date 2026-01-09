import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* =============================================
          HERO - EDITORIAL MAGAZINE STYLE
      ============================================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A3D62]">
        {/* Pattern azulejos de fondo */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(242,203,5,0.3) 35px, rgba(242,203,5,0.3) 70px),
          repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(242,203,5,0.3) 35px, rgba(242,203,5,0.3) 70px)`
        }}></div>

        {/* Imagen grande lado derecho */}
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1600"
            alt="Lisboa"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            
            {/* Badge único */}
            <div className="inline-flex items-center gap-2 bg-[#F4E8C1] px-4 py-2 mb-8 border border-[#F2CB05]">
              <svg className="w-4 h-4 text-[#0A3D62]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#0A3D62]" style={{ fontFamily: 'Cinzel, serif' }}>
                Verificado por Local
              </span>
            </div>

            {/* Headline GRANDE editorial */}
            <h1 className="mb-8" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              <span className="block text-6xl md:text-8xl font-black text-[#F2CB05] leading-none mb-4" style={{ letterSpacing: '-0.02em' }}>
                Lisboa
              </span>
              <span className="block text-4xl md:text-6xl font-black text-white leading-tight">
                sin filtros<br />
                ni clichés
              </span>
            </h1>

            {/* Subheadline con más personalidad */}
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Vivo aquí desde 2015. He caminado cada calle de Alfama 
              50 veces. Estas no son <em>recomendaciones</em> — 
              es <strong className="text-[#F2CB05]">mi ciudad descodificada</strong> para ti.
            </p>

            {/* CTA único premium */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/itinerarios"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0A3D62] to-[#1B4F72] text-[#F2CB05] font-bold px-8 py-4 border-2 border-[#F2CB05] uppercase tracking-wider text-sm overflow-hidden transition-all duration-300 hover:scale-105"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F2CB05]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative z-10">Ver Itinerarios</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <button className="text-white font-semibold px-8 py-4 border border-white/30 hover:bg-white/10 transition-colors uppercase tracking-wider text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Desde €3.99
              </button>
            </div>

            {/* Stats inline discretos */}
            <div className="mt-12 flex items-center gap-6 text-white/70 text-sm">
              <span>✓ 500+ viajeros</span>
              <span>✓ 48h garantía</span>
              <span>✓ 2025 actualizado</span>
            </div>
          </div>
        </div>

        {/* Decoración inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A3D62] via-[#F2CB05] via-[#C65D3B] to-[#0A3D62]"></div>
      </section>

      {/* =============================================
          MANIFESTO - AUTENTICIDAD
      ============================================= */}
      <section className="py-20 md:py-32 bg-[#FAF7F0] relative overflow-hidden">
        {/* Decoración lateral */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-64 bg-[#F2CB05]"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Número grande decorativo */}
            <div className="relative mb-12">
              <span className="text-[12rem] md:text-[16rem] font-black leading-none text-[#0A3D62]/5 absolute -top-16 -left-4" style={{ fontFamily: 'Fraunces, serif' }}>
                01
              </span>
              <p className="text-sm uppercase tracking-widest text-[#C65D3B] font-semibold mb-6 relative z-10" style={{ fontFamily: 'Cinzel, serif' }}>
                Por qué esto existe
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#0A3D62] mb-8 leading-tight" style={{ fontFamily: 'Fraunces, serif', letterSpacing: '-0.02em' }}>
              Los blogs te mienten.<br />
              Las apps copian info vieja.<br />
              <span className="text-[#C65D3B]">Yo vivo aquí.</span>
            </h2>

            <div className="prose prose-xl max-w-none" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <p className="text-xl text-[#5A5A5A] leading-relaxed mb-6">
                Llevo 10 años en Lisboa. He visto cómo <strong>Mirador das Portas do Sol</strong> pasó 
                de spot local a trampa turística. He probado los 47 sitios que dicen 
                tener "el mejor pastel de nata" (spoiler: solo 3 valen la pena).
              </p>
              
              <p className="text-xl text-[#5A5A5A] leading-relaxed">
                Estas guías no son recopi laciones de Google. Son <strong>años de vida aquí</strong>, 
                condensados en itinerarios que funcionan. Sin perder tiempo. Sin colas absurdas. 
                Solo la Lisboa que yo conozco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          GUÍAS - CARDS EDITORIAL PREMIUM
      ============================================= */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Header sección */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-1 bg-[#F2CB05]"></div>
              <p className="text-sm uppercase tracking-widest text-[#C65D3B] font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                Elige tu experiencia
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0A3D62] leading-tight" style={{ fontFamily: 'Fraunces, serif', letterSpacing: '-0.02em' }}>
              Itinerarios que<br />
              realmente funcionan
            </h2>
          </div>

          {/* Grid guías - Layout asimétrico editorial */}
          <div className="grid md:grid-cols-12 gap-6 max-w-7xl mx-auto">
            
            {/* Guía destacada GRANDE - Lisboa 1 Día */}
            <Link 
              href="/guias/lisboa-1-dia"
              className="group md:col-span-7 bg-[#0A3D62] overflow-hidden relative min-h-[500px] flex items-end"
            >
              <Image
                src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1200"
                alt="Lisboa en 1 Día"
                fill
                className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
              />
              
              <div className="relative z-10 p-8 w-full">
                <div className="inline-block bg-[#F2CB05] text-[#0A3D62] px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Popular
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
                  Lisboa en 1 Día
                </h3>
                
                <p className="text-lg text-white/80 mb-6 max-w-md" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Lo esencial sin prisas. 8 paradas verificadas. Ningún sitio turístico genérico.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <span>⏱ 1 día</span>
                    <span>📍 8 paradas</span>
                  </div>
                  <div className="text-3xl font-black text-[#F2CB05]" style={{ fontFamily: 'Fraunces, serif' }}>
                    €3.99
                  </div>
                </div>
              </div>

              {/* Borde decorativo */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F2CB05]"></div>
            </Link>

            {/* Dos guías medianas lado derecho */}
            <div className="md:col-span-5 space-y-6">
              
              {/* Lisboa 2 Días */}
              <Link 
                href="/guias/lisboa-2-dias"
                className="group block bg-[#FAF7F0] p-8 border-l-4 border-[#C65D3B] hover:border-l-8 transition-all duration-300 min-h-[240px] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-3xl font-black text-[#0A3D62] mb-3 group-hover:text-[#C65D3B] transition-colors" style={{ fontFamily: 'Fraunces, serif' }}>
                    Lisboa en 2 Días
                  </h3>
                  <p className="text-base text-[#5A5A5A] mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Añade Belém, Parque das Nações y barrios escondidos.
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-sm text-[#5A5A5A]">
                    <span>⏱ 2 días</span>
                    <span>📍 15 paradas</span>
                  </div>
                  <span className="text-2xl font-black text-[#0A3D62]" style={{ fontFamily: 'Fraunces, serif' }}>
                    €5.99
                  </span>
                </div>
              </Link>

              {/* Lisboa 3 Días */}
              <Link 
                href="/guias/lisboa-3-dias"
                className="group block bg-[#FAF7F0] p-8 border-l-4 border-[#1B4F72] hover:border-l-8 transition-all duration-300 min-h-[240px] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-3xl font-black text-[#0A3D62] mb-3 group-hover:text-[#1B4F72] transition-colors" style={{ fontFamily: 'Fraunces, serif' }}>
                    Lisboa en 3 Días
                  </h3>
                  <p className="text-base text-[#5A5A5A] mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Inmersión total. Incluye excursión Sintra y rincones secretos.
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-sm text-[#5A5A5A]">
                    <span>⏱ 3 días</span>
                    <span>📍 20+ paradas</span>
                  </div>
                  <span className="text-2xl font-black text-[#0A3D62]" style={{ fontFamily: 'Fraunces, serif' }}>
                    €7.99
                  </span>
                </div>
              </Link>

            </div>
          </div>

          {/* Link ver todas */}
          <div className="mt-12 text-center">
            <Link 
              href="/itinerarios"
              className="inline-flex items-center gap-2 text-[#0A3D62] font-bold uppercase text-sm tracking-wider hover:text-[#C65D3B] transition-colors"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <span>Ver todas las guías</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* =============================================
          PACK COMPLETO - DESTACADO PREMIUM
      ============================================= */}
      <section className="py-20 md:py-32 bg-[#1B4F72] relative overflow-hidden">
        {/* Pattern azulejos decorativo */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(242,203,5,0.5) 35px, rgba(242,203,5,0.5) 70px)`
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Badge ahorro */}
            <div className="inline-block bg-[#F2CB05] text-[#0A3D62] px-4 py-2 mb-8 border border-[#F2CB05]">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
                Ahorra 60% · Acceso perpetuo
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Fraunces, serif', letterSpacing: '-0.02em' }}>
              Pack Completo<br />
              <span className="text-[#F2CB05]">Lisboa Descodificada</span>
            </h2>

            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Las 7 guías + actualizaciones perpetuas + soporte directo conmigo
            </p>

            {/* Precio destacado */}
            <div className="mb-12">
              <div className="text-white/60 text-2xl line-through mb-2">€42</div>
              <div className="text-7xl md:text-8xl font-black text-[#F2CB05]" style={{ fontFamily: 'Fraunces, serif' }}>
                €24.99
              </div>
            </div>

            {/* CTA único */}
            <Link
              href="/pack-completo"
              className="inline-flex items-center justify-center gap-3 bg-[#F2CB05] text-[#0A3D62] font-black px-12 py-6 border-4 border-[#F2CB05] hover:bg-transparent hover:text-[#F2CB05] transition-all duration-300 uppercase tracking-wider text-base"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <span>Desbloquear Todo</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <p className="text-sm text-white/60 mt-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Garantía 48h · Sin renovaciones · Actualizaciones gratis de por vida
            </p>
          </div>
        </div>

        {/* Decoración inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0A3D62] via-[#F2CB05] to-[#C65D3B]"></div>
      </section>

      {/* =============================================
          PROOF - STATS CON PERSONALIDAD
      ============================================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="grid md:grid-cols-3 gap-12 text-center">
              
              {/* Stat 1 */}
              <div>
                <div className="text-6xl font-black text-[#0A3D62] mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
                  500<span className="text-[#F2CB05]">+</span>
                </div>
                <p className="text-sm uppercase tracking-wider text-[#5A5A5A] font-semibold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  Viajeros Satisfechos
                </p>
                <p className="text-sm text-[#5A5A5A]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Han descubierto la Lisboa real
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-6xl font-black text-[#0A3D62] mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
                  48<span className="text-[#C65D3B]">h</span>
                </div>
                <p className="text-sm uppercase tracking-wider text-[#5A5A5A] font-semibold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  Garantía Total
                </p>
                <p className="text-sm text-[#5A5A5A]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Devolución sin preguntas
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="text-6xl font-black text-[#0A3D62] mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
                  2025
                </div>
                <p className="text-sm uppercase tracking-wider text-[#5A5A5A] font-semibold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  Actualizado Enero
                </p>
                <p className="text-sm text-[#5A5A5A]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Precios y horarios verificados
                </p>
              </div>

            </div>

            {/* Proof adicional */}
            <div className="mt-16 text-center">
              <p className="text-sm text-[#5A5A5A] italic max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Solo 8 devoluciones en 6 meses. No por insatisfacción — por compras accidentales.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =============================================
          CTA FINAL - DIRECTO
      ============================================= */}
      <section className="py-20 md:py-32 bg-[#FAF7F0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-5xl md:text-7xl font-black text-[#0A3D62] mb-8 leading-tight" style={{ fontFamily: 'Fraunces, serif', letterSpacing: '-0.02em' }}>
              ¿Listo para la<br />
              <span className="text-[#C65D3B]">Lisboa real?</span>
            </h2>

            <p className="text-xl text-[#5A5A5A] mb-12" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Empieza desde €3.99. Sin colas. Sin perder tiempo. Solo lo que funciona.
            </p>

            <Link
              href="/itinerarios"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0A3D62] to-[#1B4F72] text-[#F2CB05] font-black px-10 py-5 border-2 border-[#F2CB05] uppercase tracking-wider text-sm hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <span>Ver Itinerarios</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
