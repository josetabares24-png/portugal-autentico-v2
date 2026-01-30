import Link from 'next/link';
import Image from 'next/image';
import { ItineraryCard } from '@/components/itinerarios/ItineraryCard';
import QuizCTA from '@/components/QuizCTA';
import { mainItineraries } from '@/data/itineraries';

export default function HomePage() {
  return (
    <main id="main-content" className="bg-background-light">
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
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">verified</span>
            <span className="text-sm font-semibold tracking-wide">Actualizado Enero 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            La Lisboa que los<br />
            <span className="text-accent">lisboetas se GUARDAN</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/95 max-w-xl mx-auto mb-10 leading-[1.6] font-normal">
            Tres años aquí me enseñaron la diferencia entre visitar y vivir: los cafés de Graça donde aún desayunas en silencio, los barrios que ningún influencer fotografía, y por qué el tranvía 28 es la trampa turística perfecta.
          </p>
          
          {/* Premium Tagline */}
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8 leading-relaxed font-medium italic">
            Esto no es una guía. Es mi Lisboa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="#itinerarios"
              className="group flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-lg shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-xl">map</span>
              Ver las rutas
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link
              href="#free"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white rounded-xl font-semibold text-lg border border-white/30 hover:border-white/50 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">download</span>
              Guía esencial gratis
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/90 text-sm pt-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400 text-base">check_circle</span>
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent text-base">verified</span>
              <span>+2,400 viajeros</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400 text-base">workspace_premium</span>
              <span>Garantía 48h total</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400 text-base">savings</span>
              <span>Ahorrás x2 mínimo</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="py-16 bg-background-cream">
        <div className="max-w-6xl mx-auto px-6">
          <QuizCTA />
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-3xl md:text-5xl font-display font-black mb-1 text-accent">100%</div>
              <div className="text-xs md:text-sm font-medium opacity-90">Verificado</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/20"></div>
            <div>
              <div className="text-3xl md:text-5xl font-display font-black mb-1 text-accent">Local</div>
              <div className="text-xs md:text-sm font-medium opacity-90">Por lisboetas</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/20"></div>
            <div>
              <div className="text-3xl md:text-5xl font-display font-black mb-1 text-accent">8</div>
              <div className="text-xs md:text-sm font-medium opacity-90">Rutas completas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Itineraries - Usando mismos datos que /itinerarios */}
      <section className="py-32 bg-background-light" id="itinerarios">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-medium uppercase tracking-wider mb-6">
              Rutas verificadas
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-text-main mb-6 tracking-tight">
              Elige tu <span className="text-primary">ruta perfecta</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto leading-relaxed">
              Itinerarios detallados hora a hora, restaurantes que realmente funcionan, los mejores spots para fotos y mapas offline que no fallan nunca.
            </p>
          </div>

          {/* Cards Grid - Usando ItineraryCard component */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {mainItineraries.map((itinerary) => (
              <ItineraryCard key={itinerary.id} {...itinerary} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 px-10 py-4 bg-text-main hover:bg-primary text-white rounded-xl font-semibold text-base transition-all duration-300 shadow-soft hover:shadow-card-hover hover:-translate-y-0.5"
            >
              Ver todas las rutas
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black text-text-main mb-6">
              Por qué <span className="text-primary">esto funciona</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto leading-relaxed">No soy turista que viene dos semanas y escribe una guía. Vivo aquí desde hace 3 años. Hago la compra en el mismo supermercado, tomo café en los mismos sitios y conozco los atajos que los lisboetas usamos todos los días.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-card border border-slate-100/80 text-center transition-all duration-300 hover:shadow-premium hover:-translate-y-2 hover:border-slate-200/60">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">home</span>
              </div>
              <h3 className="text-2xl font-display font-black text-text-main mb-4">Hechas por quien vive aquí</h3>
              <p className="text-text-secondary leading-relaxed">No escribo desde un hotel. Vivo en Lisboa desde hace 3 años. Sé dónde desayunar tranquilo en Graça antes de que llegue todo el mundo, cuál es el mirador que funciona a las 9am y por qué algunos restaurantes cierran a las 3pm.</p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-card border border-slate-100/80 text-center transition-all duration-300 hover:shadow-premium hover:-translate-y-2 hover:border-slate-200/60">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">update</span>
              </div>
              <h3 className="text-2xl font-display font-black text-text-main mb-4">Verificadas cada mes</h3>
              <p className="text-text-secondary leading-relaxed">Actualizo cada guía mensualmente. Si un restaurante cambia de horario, si abren un nuevo mirador o cierran un bar, lo reflejo inmediatamente. No vas a llegar a un sitio y encontrarte con que cerró hace 6 meses.</p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-card border border-slate-100/80 text-center transition-all duration-300 hover:shadow-premium hover:-translate-y-2 hover:border-slate-200/60">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">workspace_premium</span>      
              </div>
              <h3 className="text-2xl font-display font-black text-text-main mb-4">Garantía 48h</h3>
              <p className="text-text-secondary leading-relaxed">Si en las primeras 48 horas decides que la guía no vale lo que pagaste, te devuelvo el 100% del dinero. Pero te digo un secreto: la mayoría de viajeros me dicen que ahorran al menos el doble del precio de la guía en su primer día evitando los errores comunes.</p>
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
            ¿Primera vez en Lisboa?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-xl mx-auto leading-relaxed">
            Descarga gratis mi guía esencial: cómo funciona el transporte público, cuánto cuesta realmente comer, qué meter en la maleta y los errores más comunes que cometen los turistas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/info-util"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary rounded-xl font-semibold text-lg shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">explore</span>
              Quiero la guía gratis
            </Link>
          </div>
          <p className="text-white/75 text-sm font-medium">Transporte · Presupuestos · Mejor época · Gratis</p>
        </div>
      </section>
    </main>
  );
}
