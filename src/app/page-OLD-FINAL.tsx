import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero - Fullscreen con imagen impactante */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2400"
            alt="Lisboa"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/60"></div>
        </div>

        {/* Contenido hero */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Badge sutil */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">Guías actualizadas 2025</span>
          </div>

          {/* Headline principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Descubre Lisboa<br />
            <span className="text-primary" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}>
              Como un Local
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
            Itinerarios verificados por quien vive aquí.<br className="hidden md:block" />
            Sin turistadas. Sin tiempo perdido.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/itinerarios"
              className="group w-full sm:w-auto bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Ver Itinerarios desde €3.99</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="#como-funciona"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Cómo funciona
            </Link>
          </div>

          {/* Social proof discreto */}
          <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">500+ viajeros</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Verificadas 2025</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Problema - Por qué existimos */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">El Problema</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Lisboa no se parece a las fotos de Instagram
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Los blogs turísticos te llevan a los mismos sitios saturados de turistas. 
              Los tours grupales siguen rutinas comerciales. Las apps de viaje copian info desactualizada.
            </p>
            <p className="text-lg md:text-xl text-slate-900 font-medium mt-6">
              Pero yo vivo aquí desde hace 10 años. Y conozco la Lisboa real.
            </p>
          </div>
        </div>
      </section>

      {/* Itinerarios Grid - Cards modernas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Header sección */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">Itinerarios</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Elige tu experiencia
            </h2>
            <p className="text-lg text-slate-600">
              Desde 1 día express hasta inmersión completa. Cada itinerario incluye horarios exactos, 
              coordenadas GPS y tips que solo un local conoce.
            </p>
          </div>

          {/* Grid de guías */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Guía 1 - Lisboa en 1 Día */}
            <Link 
              href="/guias/lisboa-1-dia"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=800"
                  alt="Lisboa en 1 Día"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  POPULAR
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa en 1 Día</h3>
                <p className="text-slate-600 mb-4">Lo esencial en un itinerario impecable</p>
                
                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    1 día
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    8 paradas
                  </span>
                </div>

                {/* Precio */}
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">€3.99</span>
                  </div>
                  <div className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    Ver guía →
                  </div>
                </div>
              </div>
            </Link>

            {/* Guía 2 - Lisboa en 2 Días */}
            <Link 
              href="/guias/lisboa-2-dias"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800"
                  alt="Lisboa en 2 Días"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa en 2 Días</h3>
                <p className="text-slate-600 mb-4">Explora sin prisas, con calma local</p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2 días
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    15 paradas
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">€5.99</span>
                  </div>
                  <div className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    Ver guía →
                  </div>
                </div>
              </div>
            </Link>

            {/* Guía 3 - Lisboa en 3 Días */}
            <Link 
              href="/guias/lisboa-3-dias"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800"
                  alt="Lisboa en 3 Días"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lisboa en 3 Días</h3>
                <p className="text-slate-600 mb-4">Inmersión total, vive como local</p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    3 días
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    20+ paradas
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">€7.99</span>
                  </div>
                  <div className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    Ver guía →
                  </div>
                </div>
              </div>
            </Link>

          </div>

          {/* CTA ver todas */}
          <div className="text-center mt-12">
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              <span>Ver todas las guías</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pack Completo CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        {/* Pattern sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-bold text-white">AHORRA 60%</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pack Completo Lisboa
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Las 7 guías + actualizaciones perpetuas + soporte prioritario
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-8">
              <div className="text-center">
                <div className="text-white/70 line-through text-2xl mb-1">€42</div>
                <div className="text-5xl md:text-6xl font-bold text-white">€24.99</div>
              </div>
            </div>

            <Link
              href="/pack-completo"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-primary font-bold px-10 py-5 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Desbloquear Pack Completo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <p className="text-sm text-white/80 mt-6">
              Garantía 48h · Acceso de por vida · Sin renovaciones
            </p>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">Cómo funciona</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              3 pasos para descubrir Lisboa
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Paso 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Elige tu itinerario</h3>
              <p className="text-slate-600">
                1, 2 o 3 días. Fotográfico, familiar, romántico o foodie. Tú decides.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Acceso inmediato</h3>
              <p className="text-slate-600">
                Paga una vez, accede para siempre. Desde cualquier dispositivo.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Disfruta Lisboa</h3>
              <p className="text-slate-600">
                Sigue el itinerario desde tu móvil. GPS incluido en cada parada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust - Social Proof minimalista */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-slate-600">Viajeros satisfechos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">48h</div>
                <div className="text-slate-600">Garantía devolución</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2025</div>
                <div className="text-slate-600">Actualizado enero</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              ¿Listo para conocer la Lisboa real?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Empieza con cualquier itinerario desde €3.99
            </p>
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-semibold px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
