import Link from 'next/link';
import Image from 'next/image';
import { ItineraryCard } from '@/components/itinerarios/ItineraryCard';
import { getGuideList } from '@/lib/guide-store';

export default async function ItinerariosPage() {
  const { main: mainItineraries, special: specialItineraries } = await getGuideList();
  return (
    <main>
      {/* Hero Section - Estilo consistente con home */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lisboa.jpg"
            alt="Vista panorámica de Lisboa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 py-16 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">map</span>
            <span className="text-sm font-semibold tracking-wide">Guías de viaje 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tight mb-6 text-white drop-shadow-lg">
            Elige tu experiencia<br />
            <span className="text-accent">perfecta en Lisboa</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/95 font-normal leading-relaxed max-w-3xl mx-auto mb-10 drop-shadow-md">
            Itinerarios completos con restaurantes auténticos, spots de fotos únicos y tips de locales que viven la ciudad.
          </p>
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white shadow-lg">
            <span className="material-symbols-outlined text-lg">verified</span>
            {mainItineraries.length + specialItineraries.length} Packs disponibles
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Quick Stats Section - Estilo consistente */}
      <section className="py-16 bg-background-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-border-soft shadow-soft hover:shadow-soft-lg transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Descarga Inmediata</h3>
                <p className="text-text-secondary text-sm">Acceso instantáneo tras la compra</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border-soft shadow-soft hover:shadow-soft-lg transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">100% Actualizado</h3>
                <p className="text-text-secondary text-sm">Verificado en 2025 por locales</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border-soft shadow-soft hover:shadow-soft-lg transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">payments</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Garantía 48 Horas</h3>
                <p className="text-text-secondary text-sm">Reembolso sin preguntas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Itineraries Section - Estilo consistente */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-medium uppercase tracking-wider mb-6">
              Según tus días
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 text-text-main tracking-tight">
              Itinerarios <span className="text-primary">Principales</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Cada pack incluye itinerario hora a hora + restaurantes probados + spots de fotos + mapas offline
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {mainItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Packs Section - Estilo consistente */}
      <section className="py-20 bg-background-cream bg-azulejo-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-medium uppercase tracking-wider mb-6">
              Experiencias únicas
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 text-text-main tracking-tight">
              Packs <span className="text-primary">Especiales</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Para viajeros con intereses específicos y ganas de vivir Lisboa de forma diferente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} size="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Estilo consistente */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-accent/10 text-primary rounded-full text-xs font-medium uppercase tracking-wider mb-6">
              Lo que dicen
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-text-main mb-6">
              Nuestros <span className="text-primary">viajeros</span>
            </h2>
            <div className="flex items-center justify-center gap-1 text-accent mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="text-lg text-text-secondary">4.9/5 de más de 2,500 viajeros</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "María G.", text: "El mejor itinerario que he comprado. Todo estaba perfectamente organizado y los restaurantes... ¡increíbles!", city: "Madrid" },
              { name: "João P.", text: "Siendo portugués, pensaba que conocía Lisboa. Este pack me mostró rincones que ni sabía que existían.", city: "Porto" },
              { name: "Sophie L.", text: "Worth every cent! The timing was perfect and we didn't waste a single minute. Highly recommended!", city: "Paris" }
            ].map((review, idx) => (
              <div key={idx} className="bg-background-cream rounded-3xl p-10 border border-border-soft transition-all duration-300 hover:shadow-soft-lg">
                <div className="flex items-center gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-text-secondary text-base mb-8 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-border-soft">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-text-main">{review.name}</p>
                    <p className="text-sm text-text-muted">{review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Estilo consistente */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-azulejo-pattern"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block opacity-80">travel_explore</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 tracking-tight">
            ¿Tienes dudas sobre qué pack elegir?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Escríbenos y te ayudamos a elegir el itinerario perfecto según tus días, intereses y estilo de viaje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg text-white bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 transition-all duration-300 hover:scale-105"
            >
              <span className="material-symbols-outlined text-xl">chat</span>
              Hablar con un experto
            </Link>
            <a 
              href="#main" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Ver todos los packs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
