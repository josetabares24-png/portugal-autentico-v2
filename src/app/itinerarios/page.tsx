import Link from 'next/link';
import { ItineraryCard } from '@/components/itinerarios/ItineraryCard';
import { mainItineraries, specialItineraries } from '@/data/itineraries';

export default function ItinerariosPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920&q=80" 
            alt="Lisboa" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 text-white bg-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {mainItineraries.length + specialItineraries.length} PACKS DISPONIBLES
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic font-display">
            Elige tu experiencia perfecta
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Itinerarios completos con restaurantes, spots de fotos y tips de locales.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-text-main">Según tus días en Lisboa</h2>
            <p className="text-text-secondary">Cada pack incluye itinerario + restaurantes + spots de fotos + mapas</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-text-main">Packs especiales</h2>
            <p className="text-text-secondary">Experiencias únicas para viajeros diferentes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} size="compact" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-text-main">¿Tienes dudas?</h2>
          <p className="text-slate-600 mb-6">Escríbenos y te ayudamos a elegir el pack perfecto para tu viaje.</p>
          <Link 
            href="/contacto" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white hover:scale-105 transition-all bg-primary"
          >
            Contactar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
