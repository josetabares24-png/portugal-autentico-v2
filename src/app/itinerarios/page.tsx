import Link from 'next/link';
import Image from 'next/image';
import { ItineraryCard } from '@/components/itinerarios/ItineraryCard';
import { mainItineraries, specialItineraries } from '@/data/itineraries';

export default function ItinerariosPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920&q=80"
            alt="Vista panorámica de Lisboa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-white/30">
            <span className="material-symbols-outlined text-base">map</span>
            GUÍAS DE VIAJE 2025
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-lg">
            Elige tu experiencia<br />
            <span className="text-primary">perfecta en Lisboa</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-md">
            Itinerarios completos con restaurantes auténticos, spots de fotos únicos y tips de locales que viven la ciudad.
          </p>
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-primary text-white shadow-lg">
            <span className="material-symbols-outlined text-lg">verified</span>
            {mainItineraries.length + specialItineraries.length} PACKS DISPONIBLES
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-background-cream">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Descarga Inmediata</h3>
                <p className="text-text-secondary text-sm">Acceso instantáneo tras la compra</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">100% Actualizado</h3>
                <p className="text-text-secondary text-sm">Verificado en 2025 por locales</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
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

      {/* Main Itineraries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wide mb-3">
              Según tus días
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-main tracking-tight">
              Itinerarios Principales
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Cada pack incluye itinerario hora a hora + restaurantes probados + spots de fotos + mapas offline
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Packs Section */}
      <section className="py-20 bg-background-cream bg-azulejo-pattern">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-secondary-blue/10 text-secondary-blue rounded-full text-xs font-bold uppercase tracking-wide mb-3">
              Experiencias únicas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-main tracking-tight">
              Packs Especiales
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Para viajeros con intereses específicos y ganas de vivir Lisboa de forma diferente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} size="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-text-main mb-2">Lo que dicen nuestros viajeros</h3>
            <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="text-text-secondary">4.9/5 de más de 2,500 viajeros</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "María G.", text: "El mejor itinerario que he comprado. Todo estaba perfectamente organizado y los restaurantes... ¡increíbles!", city: "Madrid" },
              { name: "João P.", text: "Siendo portugués, pensaba que conocía Lisboa. Este pack me mostró rincones que ni sabía que existían.", city: "Porto" },
              { name: "Sophie L.", text: "Worth every cent! The timing was perfect and we didn't waste a single minute. Highly recommended!", city: "Paris" }
            ].map((review, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">person</span>
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-text-main">{review.name}</p>
                    <p className="text-text-secondary">{review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-azulejo-pattern opacity-5"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-6 inline-block">travel_explore</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            ¿Tienes dudas sobre qué pack elegir?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Escríbenos y te ayudamos a elegir el itinerario perfecto según tus días, intereses y estilo de viaje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-primary hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
            >
              <span className="material-symbols-outlined">chat</span>
              Hablar con un experto
            </Link>
            <a 
              href="#main" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all"
            >
              Ver todos los packs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
