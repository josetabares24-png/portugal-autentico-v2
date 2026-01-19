import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const featuredItineraries = [
    {
      id: 'lisboa-1-dia',
      title: 'Un día en Lisboa',
      description: 'Pastéis de nata a las 8:30 antes de que abra la cola. Mirador de Graça sin selfies. El 28 cuando funciona.',
      duration: '1 DÍA',
      price: 1.99,
      image: '/images/claudio-luiz-castro-cFj656inKM0-unsplash.jpg',
      href: '/itinerarios/lisboa-1-dia-lo-esencial',
      featured: false
    },
    {
      id: 'lisboa-2-dias',
      title: 'Fin de semana completo',
      description: 'Belém a las 9am, pastéis cuando salen del horno. Alfama cuando los vecinos bajan a comprar. Bairro Alto de noche, no de día.',
      duration: '2 DÍAS',
      price: 2.99,
      image: '/images/pelayo-arbues-YN9_NQBZcSc-unsplash.jpg',
      href: '/itinerarios/lisboa-2-dias-completo',
      featured: true
    },
    {
      id: 'lisboa-3-dias',
      title: 'Lisboa y alrededores',
      description: 'Sintra sin colas de 3 horas. Dónde aparcar gratis. Cascais cuando el sol está de verdad.',
      duration: '3 DÍAS',
      price: 3.99,
      image: '/images/julia-solonina-ci19YINguoc-unsplash.jpg',
      href: '/itinerarios/lisboa-3-dias-premium',
      featured: false
    }
  ];

  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg"
            alt="Vista de Lisboa desde un mirador"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">verified</span>
            <span className="text-sm font-semibold tracking-wide">Actualizado Enero 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            Lo que nadie<br />
            <span className="text-accent">te cuenta</span><br />
            de Lisboa
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Llevo 3 años viviendo aquí. Te digo dónde desayunar en Graça cuando aún no hay nadie. Qué mirador funciona a las 9am. Por qué el 28 a las 11 es un error.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="#itinerarios"
              className="group flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="material-symbols-outlined text-xl">map</span>
              Ver las rutas
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link
              href="#free"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-xl font-semibold text-lg border border-white/30 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">download</span>
              Guía práctica gratis
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
              <span>Descarga inmediata</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent text-lg">verified</span>
              <span>Hecho por quien vive aquí</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400 text-lg">workspace_premium</span>
              <span>Garantía 48h</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-16 text-center">
            <div>
              <div className="text-5xl font-display font-black mb-1 text-accent">100%</div>
              <div className="text-sm font-medium opacity-90">Verificado</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/20"></div>
            <div>
              <div className="text-5xl font-display font-black mb-1 text-accent">Local</div>
              <div className="text-sm font-medium opacity-90">Por lisboetas</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/20"></div>
            <div>
              <div className="text-5xl font-display font-black mb-1 text-accent">8</div>
              <div className="text-sm font-medium opacity-90">Rutas completas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="py-32 bg-background-light" id="itinerarios">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-medium uppercase tracking-wider mb-6">
              Rutas verificadas
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-text-main mb-6 tracking-tight">
              Elige tu <span className="text-primary">ruta</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Cada guía incluye el bar donde desayuno los domingos. El mirador que visito cuando vienen amigos. Mapas que funcionan cuando no hay señal.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {featuredItineraries.map((itinerary) => (
              <div
                key={itinerary.id}
                className={`group bg-white rounded-3xl overflow-hidden shadow-soft border border-border-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 ${
                  itinerary.featured
                    ? 'border-2 border-primary shadow-editorial relative'
                    : ''
                }`}
              >
                {itinerary.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2.5 font-semibold text-xs z-10 tracking-wider uppercase">
                    Más vendida
                  </div>
                )}

                <div className={`relative h-64 ${itinerary.featured ? 'mt-10' : ''}`}>
                  <Image
                    src={itinerary.image}
                    alt={itinerary.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="bg-primary/95 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-semibold">
                      {itinerary.duration}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>        
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-display font-black text-text-main mb-4 leading-tight">{itinerary.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">{itinerary.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-border-soft">
                    <div className="text-4xl font-display font-black text-primary">{itinerary.price}€</div>
                    <Link
                      href={itinerary.href}
                      className="group flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:opacity-90"
                    >
                      Ver detalles
                      <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 px-10 py-4 bg-text-main hover:bg-text-secondary text-white rounded-xl font-semibold text-base transition-all duration-300 hover:opacity-90"
            >
              Ver todas las rutas
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-background-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black text-text-main mb-6">
              Por qué <span className="text-primary">esto funciona</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">No soy turista haciendo guías. Llevo 3 años viviendo aquí. Compro en el mismo supermercado que los lisboetas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl p-10 shadow-soft border border-border-soft text-center transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">home</span>
              </div>
              <h3 className="text-2xl font-display font-black text-text-main mb-4">Hechas por quien vive aquí</h3>
              <p className="text-text-secondary leading-relaxed">Vivo en Lisboa. Conozco el bar donde desayuno cuando no tengo prisa. El mirador donde llevo a los que vienen de visita.</p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-soft border border-border-soft text-center transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">update</span>
              </div>
              <h3 className="text-2xl font-display font-black text-text-main mb-4">Verificadas cada mes</h3>
              <p className="text-text-secondary leading-relaxed">Voy a cada sitio cada mes. Si cierra o cambia, lo actualizo. No te encuentras el restaurante cerrado porque hace 6 meses que no voy.</p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-soft border border-border-soft text-center transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">workspace_premium</span>      
              </div>
              <h3 className="text-2xl font-display font-black text-text-main mb-4">Garantía</h3>
              <p className="text-text-secondary leading-relaxed">48 horas. Si la ruta no te funciona, te devuelvo el dinero. Sin preguntas, sin explicaciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-accent/10 text-primary rounded-full text-xs font-medium uppercase tracking-wider mb-6">
              Lo que dicen
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-text-main mb-6">
              Quienes <span className="text-primary">las usaron</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              500 personas ya las usaron. Evitaron las colas del 28. Comieron donde comemos nosotros. Llegaron al mirador cuando aún no había nadie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-background-cream rounded-3xl p-10 border border-border-soft transition-all duration-300 hover:shadow-soft-lg">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-accent text-lg">star</span>
                ))}
              </div>
              <p className="text-text-secondary mb-8 italic leading-relaxed text-base">
                "La guía de 2 días funcionó. El restaurante de Alfama que recomendaste, el pastel de nata estaba recién hecho. El mapa offline me salvó cuando no había señal."
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-border-soft">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold text-lg">
                  A
                </div>
                <div>
                  <p className="font-semibold text-text-main">Ana M.</p>
                  <p className="text-sm text-text-muted">Barcelona • Abril 2025</p>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-background-cream rounded-3xl p-10 border border-border-soft transition-all duration-300 hover:shadow-soft-lg">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-accent text-lg">star</span>
                ))}
              </div>
              <p className="text-text-secondary mb-8 italic leading-relaxed text-base">
                "Compré 3 guías antes. Esta fue la única que me dijo a qué hora ir al mirador para que no estuviera lleno. Y el bar donde desayunamos el domingo existía de verdad."
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-border-soft">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center text-primary font-semibold text-lg">
                  C
                </div>
                <div>
                  <p className="font-semibold text-text-main">Carlos R.</p>
                  <p className="text-sm text-text-muted">Madrid • Marzo 2025</p>
                </div>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-background-cream rounded-3xl p-10 border border-border-soft transition-all duration-300 hover:shadow-soft-lg">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-accent text-lg">star</span>
                ))}
              </div>
              <p className="text-text-secondary mb-8 italic leading-relaxed text-base">
                "Seguimos la guía romántica completa. El restaurante con vistas al Tajo funcionó. La pedida de mano fue ahí. Dijiste que funcionaba y funcionó."
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-border-soft">
                <div className="w-14 h-14 bg-terracotta/20 rounded-full flex items-center justify-center text-primary font-semibold text-lg">
                  M
                </div>
                <div>
                  <p className="font-semibold text-text-main">María & Javi</p>
                  <p className="text-sm text-text-muted">Sevilla • Febrero 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 bg-primary rounded-3xl p-12 text-white shadow-editorial">
            <div className="grid md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-5xl font-display font-black mb-2">500+</div>
                <div className="text-white/80 text-sm font-medium">Personas</div>
              </div>
              <div>
                <div className="text-5xl font-display font-black mb-2">4.9/5</div>
                <div className="text-white/80 text-sm font-medium">Valoración</div>
              </div>
              <div>
                <div className="text-5xl font-display font-black mb-2">98%</div>
                <div className="text-white/80 text-sm font-medium">Recomendarían</div>
              </div>
              <div>
                <div className="text-5xl font-display font-black mb-2">24h</div>
                <div className="text-white/80 text-sm font-medium">Respuesta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Útil CTA */}
      <section className="py-32 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden" id="free">
        <div className="absolute inset-0 opacity-5 bg-azulejo-pattern"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-white text-8xl mb-8 inline-block opacity-80">info</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight">
            Primera vez en Lisboa
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Guía práctica gratis. Cómo funciona el Viva Viagem. Cuánto cuesta realmente una comida. Qué llevar en la maleta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/info-util"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary rounded-xl font-semibold text-lg shadow-lg hover:opacity-95 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">explore</span>
              Quiero la guía práctica
            </Link>
          </div>
          <p className="text-white/75 text-sm font-medium">Transporte · Presupuestos · Mejor época · Gratis</p>
        </div>
      </section>
    </main>
  );
}
