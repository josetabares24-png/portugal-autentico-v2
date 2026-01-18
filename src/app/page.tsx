import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const featuredItineraries = [
    {
      id: 'lisboa-1-dia',
      title: 'Lisboa Esencial',
      description: 'Lo mejor de Lisboa en un día perfectamente organizado.',
      duration: '1 DÍA',
      price: 1.99,
      image: '/images/claudio-luiz-castro-cFj656inKM0-unsplash.jpg',
      href: '/itinerarios/lisboa-1-dia-lo-esencial',
      featured: false
    },
    {
      id: 'lisboa-2-dias',
      title: 'Lisboa Completa',
      description: 'Fin de semana perfecto con Belém, Alfama y barrios con encanto.',
      duration: '2 DÍAS',
      price: 2.99,
      image: '/images/pelayo-arbues-YN9_NQBZcSc-unsplash.jpg',
      href: '/itinerarios/lisboa-2-dias-completo',
      featured: true
    },
    {
      id: 'lisboa-3-dias',
      title: 'Lisboa + Sintra',
      description: 'Experiencia completa con excursión a Sintra y Cascais.',
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg"
            alt="Lisboa panorama"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">verified</span>
            <span className="text-sm font-bold tracking-wide">GUÍAS VERIFICADAS 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Descubre Lisboa<br />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">        
              como un local
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Guías premium creadas por quien vive en Lisboa. Sin turistadas, solo experiencias auténticas que recordarás para siempre.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="#itinerarios"
              className="group flex items-center gap-3 px-8 py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-2xl">map</span>
              Ver Itinerarios Premium
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link
              href="#free"
              className="flex items-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl font-bold text-lg border-2 border-white/30 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">download</span>
              Guía Gratis
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">check_circle</span>
              <span>Descarga inmediata</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">verified</span>
              <span>Creado por locales</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400">workspace_premium</span>
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
      <section className="py-6 bg-gradient-to-r from-primary to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-black">100%</div>
              <div className="text-sm font-medium opacity-90">Actualizado</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div>
              <div className="text-4xl font-black">Local</div>
              <div className="text-sm font-medium opacity-90">Hecho por Lisboetas</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div>
              <div className="text-4xl font-black">8</div>
              <div className="text-sm font-medium opacity-90">Guías Premium</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="py-24 bg-white" id="itinerarios">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              Itinerarios Premium
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Elige tu <span className="text-primary">aventura</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cada guía incluye restaurantes locales, spots secretos de fotos y mapas offline
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredItineraries.map((itinerary) => (
              <div
                key={itinerary.id}
                className={`group bg-white rounded-3xl overflow-hidden shadow-lg border transition-all hover:-translate-y-2 ${
                  itinerary.featured
                    ? 'border-4 border-primary shadow-2xl relative'
                    : 'border-slate-200'
                }`}
              >
                {itinerary.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 font-bold text-sm z-10">
                    ⭐ MÁS VENDIDO
                  </div>
                )}

                <div className={`relative h-56 ${itinerary.featured ? 'mt-8' : ''}`}>
                  <Image
                    src={itinerary.image}
                    alt={itinerary.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                      {itinerary.duration}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>        
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{itinerary.title}</h3>
                  <p className="text-slate-600 mb-6">{itinerary.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-black text-primary">{itinerary.price}€</div>
                    <Link
                      href={itinerary.href}
                      className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold transition-all hover:scale-105"
                    >
                      Ver guía
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-lg transition-all"
            >
              Ver los 8 itinerarios
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              ¿Por qué <span className="text-primary">Estaba en Lisboa</span>?
            </h2>
            <p className="text-xl text-slate-600">No somos turistas haciendo guías. Vivimos aquí.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">home</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Creadas por Locales</h3>
              <p className="text-slate-600">Vivimos en Lisboa. Conocemos los sitios donde van los lisboetas, no los turistas.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">update</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Siempre Actualizadas</h3>
              <p className="text-slate-600">Verificamos cada restaurante y lugar cada mes. Sin sorpresas de sitios cerrados.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">workspace_premium</span>      
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Garantía Total</h3>
              <p className="text-slate-600">14 días de garantía. Si no te gusta, te devolvemos el dinero sin preguntas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Guide CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden" id="free">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block">download</span>     
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Aún no estás seguro?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Descarga nuestra guía gratuita con 15 consejos que solo los locales conocen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guia-gratis"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">download</span>
              Descargar Guía Gratis
            </Link>
          </div>
          <p className="text-white/80 text-sm mt-6">✅ Sin spam · ✅ Descarga inmediata · ✅ 100% gratis</p>    
        </div>
      </section>
    </main>
  );
}
