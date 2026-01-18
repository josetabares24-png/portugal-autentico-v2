'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // TODO: Reemplazar con tu ID de afiliado de Civitatis
  // Registrate en: https://www.civitatis.com/es/programa-de-afiliacion/
  const CIVITATIS_AFFILIATE_ID = "TU_AFFILIATE_ID"; // 🔧 Reemplazar con tu ID

  const categories = [
    { id: 'all', name: 'Todos', emoji: '🗺️' },
    { id: 'free', name: 'Free Tours', emoji: '🎁' },
    { id: 'day-trips', name: 'Excursiones', emoji: '🚌' },
    { id: 'food', name: 'Gastronómicos', emoji: '🍷' },
    { id: 'culture', name: 'Cultura', emoji: '🎭' },
    { id: 'adventure', name: 'Aventura', emoji: '🌊' }
  ];

  const tours = [
    {
      id: 1,
      category: 'free',
      name: 'Free Tour por Lisboa',
      duration: '2-3 horas',
      price: 'Gratis (propina voluntaria)',
      rating: 9.4,
      reviews: 15420,
      description: 'Descubre la historia de Lisboa con guías en español. Recorre Baixa, Chiado, Rossio y conoce las leyendas de la ciudad.',
      highlights: ['Baixa-Chiado', 'Rossio', 'História local', 'Propina a tu criterio'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/free-tour-lisboa/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'MÁS POPULAR',
      recommended: true
    },
    {
      id: 2,
      category: 'free',
      name: 'Free Tour por Alfama',
      duration: '2 horas',
      price: 'Gratis (propina voluntaria)',
      rating: 9.2,
      reviews: 8650,
      description: 'Explora el barrio más auténtico de Lisboa. Callejuelas, miradores, fado y la esencia más pura de la ciudad.',
      highlights: ['Barrio Alfama', 'Miradores', 'Cultura fado', 'Casas típicas'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/free-tour-alfama/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'IMPRESCINDIBLE',
      recommended: true
    },
    {
      id: 3,
      category: 'day-trips',
      name: 'Excursión a Sintra, Cascais y Cabo da Roca',
      duration: 'Día completo',
      price: 'Desde 49€',
      rating: 9.1,
      reviews: 12340,
      description: 'Palacio da Pena, Quinta da Regaleira, el punto más occidental de Europa y el pueblo costero de Cascais. Todo en un día.',
      highlights: ['Palacio da Pena', 'Cascais', 'Cabo da Roca', 'Transporte incluido'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/excursion-sintra-cascais/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'MEJOR VALORADO',
      recommended: true
    },
    {
      id: 4,
      category: 'day-trips',
      name: 'Tour por Sintra y Palacio da Pena',
      duration: '8 horas',
      price: 'Desde 45€',
      rating: 9.0,
      reviews: 9820,
      description: 'Visita el Palacio da Pena y el centro histórico de Sintra. Ideal si quieres centrarte solo en Sintra sin prisas.',
      highlights: ['Palacio da Pena', 'Centro de Sintra', 'Entrada incluida', 'Grupos pequeños'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/tour-sintra-palacio-pena/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: null,
      recommended: false
    },
    {
      id: 5,
      category: 'day-trips',
      name: 'Excursión a Fátima, Batalha, Nazaré y Óbidos',
      duration: 'Día completo',
      price: 'Desde 55€',
      rating: 8.9,
      reviews: 6720,
      description: 'Santuario de Fátima, monasterio de Batalha, pueblo pesquero de Nazaré y la villa medieval de Óbidos.',
      highlights: ['Santuario Fátima', 'Óbidos medieval', 'Nazaré', 'Almuerzo incluido'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/excursion-fatima-batalha-nazare-obidos/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: null,
      recommended: false
    },
    {
      id: 6,
      category: 'food',
      name: 'Tour Gastronómico por Lisboa',
      duration: '3 horas',
      price: 'Desde 79€',
      rating: 9.3,
      reviews: 4520,
      description: 'Degusta pastéis de nata, bacalao, ginjinha y vino de Oporto. Visita mercados locales y tascas auténticas.',
      highlights: ['10+ degustaciones', 'Mercados locales', 'Vinos portugueses', 'Guía foodie'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/tour-gastronomico/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'EXPERIENCIA ÚNICA',
      recommended: true
    },
    {
      id: 7,
      category: 'food',
      name: 'Tour de Vinos y Quesos Portugueses',
      duration: '2.5 horas',
      price: 'Desde 65€',
      rating: 9.0,
      reviews: 2180,
      description: 'Cata de vinos del Douro, Alentejo y Vinho Verde con quesos artesanales portugueses. En una bodega histórica.',
      highlights: ['6 vinos premium', 'Quesos artesanales', 'Bodega histórica', 'Grupos reducidos'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/cata-vinos-quesos/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: null,
      recommended: false
    },
    {
      id: 8,
      category: 'culture',
      name: 'Espectáculo de Fado con Cena',
      duration: '3 horas',
      price: 'Desde 65€',
      rating: 9.2,
      reviews: 8940,
      description: 'Cena tradicional portuguesa + espectáculo de fado en vivo en una casa típica de Alfama. Incluye bebidas.',
      highlights: ['Cena 3 platos', 'Fado en vivo', 'Bebidas incluidas', 'Casa auténtica'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/espectaculo-fado-cena/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'ROMÁNTICO',
      recommended: true
    },
    {
      id: 9,
      category: 'culture',
      name: 'Visita Guiada al Oceanário de Lisboa',
      duration: '1.5 horas',
      price: 'Desde 28€',
      rating: 8.8,
      reviews: 3450,
      description: 'Uno de los acuarios más grandes de Europa. Perfecto para familias. Entrada sin colas incluida.',
      highlights: ['Sin colas', 'Guía especializado', 'Para toda la familia', 'Parque das Nações'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/visita-guiada-oceanario/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'PARA FAMILIAS',
      recommended: false
    },
    {
      id: 10,
      category: 'adventure',
      name: 'Paseo en Barco por el Tajo al Atardecer',
      duration: '2 horas',
      price: 'Desde 35€',
      rating: 9.1,
      reviews: 5670,
      description: 'Navega por el río Tajo al atardecer. Vistas de la Torre de Belém, Puente 25 de Abril y Cristo Rei. Incluye bebida.',
      highlights: ['Atardecer mágico', 'Bebida incluida', 'Vistas panorámicas', 'Grupos pequeños'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/paseo-barco-tajo-atardecer/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'INSTAGRAM',
      recommended: true
    },
    {
      id: 11,
      category: 'adventure',
      name: 'Surf en la Costa de Lisboa',
      duration: '3 horas',
      price: 'Desde 45€',
      rating: 8.7,
      reviews: 1890,
      description: 'Clase de surf en Carcavelos o Costa da Caparica. Para principiantes. Tabla y neopreno incluidos.',
      highlights: ['Instructor profesional', 'Equipo incluido', 'Playa Carcavelos', 'Todos los niveles'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/clase-surf/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: null,
      recommended: false
    },
    {
      id: 12,
      category: 'culture',
      name: 'Tour Privado por Lisboa',
      duration: '4 horas',
      price: 'Desde 180€ (grupo)',
      rating: 9.5,
      reviews: 2340,
      description: 'Tour 100% personalizado solo para tu grupo. Elige qué ver y adapta el ritmo. Guía exclusivo en español.',
      highlights: ['Totalmente personalizable', 'Guía exclusivo', 'Itinerario a medida', 'Recogida en hotel'],
      bookingUrl: `https://www.civitatis.com/es/lisboa/tour-privado/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'LUJO',
      recommended: false
    }
  ];

  const filteredTours = selectedCategory === 'all'
    ? tours
    : tours.filter(tour => tour.category === selectedCategory);

  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">tour</span>
            <span className="text-sm font-bold tracking-wide">TOURS Y ACTIVIDADES</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Tours y Actividades en Lisboa
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Free tours, excursiones a Sintra, experiencias gastronómicas y aventuras. Reserva con cancelación gratis y en español.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">verified_user</span>
              <span>Cancelación gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">language</span>
              <span>Guías en español</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400">thumb_up</span>
              <span>+100,000 reseñas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tours Highlight */}
      {(selectedCategory === 'all' || selectedCategory === 'free') && (
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-green-600 text-5xl">redeem</span>
              <div>
                <h2 className="text-3xl font-black text-slate-900">Free Tours Gratuitos</h2>
                <p className="text-slate-600">Sin pagar entrada, solo propina al final si te ha gustado</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-green-200 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">💡 ¿Cómo funcionan los Free Tours?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-bold text-green-900 mb-2">1. Reservas gratis online</p>
                  <p className="text-slate-600">No pagas nada al reservar. Solo dejas tu email para confirmar asistencia.</p>
                </div>
                <div>
                  <p className="font-bold text-green-900 mb-2">2. Disfrutas del tour</p>
                  <p className="text-slate-600">Guías profesionales en español. Tours de 2-3 horas muy completos.</p>
                </div>
                <div>
                  <p className="font-bold text-green-900 mb-2">3. Propina voluntaria</p>
                  <p className="text-slate-600">Al final, das propina según te haya gustado. Media: 10-15€ por persona.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {tours.filter(t => t.category === 'free').map(tour => (
                <div key={tour.id} className="bg-white rounded-2xl overflow-hidden border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all">
                  {/* Image Placeholder */}
                  <div className="h-56 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center relative">
                    <span className="material-symbols-outlined text-white text-7xl">tour</span>
                    {tour.badge && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                        {tour.badge}
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white text-xs p-2 text-center">
                      📸 Foto placeholder: Grupo en free tour por {tour.name.includes('Alfama') ? 'callejuelas de Alfama' : 'Baixa-Chiado'} (1200x800px)
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900 flex-1">{tour.name}</h3>
                      <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg ml-3">
                        <span className="material-symbols-outlined text-green-600 text-sm">star</span>
                        <span className="text-sm font-bold text-green-700">{tour.rating}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4">{tour.description}</p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {tour.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4 pt-4 border-t">
                      <div>
                        <p className="text-sm text-slate-500">Duración</p>
                        <p className="font-bold text-slate-900">{tour.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-500">Precio</p>
                        <p className="text-2xl font-black text-green-600">{tour.price}</p>
                      </div>
                    </div>

                    <a
                      href={tour.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-center font-bold py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                    >
                      Reservar Ahora (Gratis) →
                    </a>

                    <p className="text-xs text-center text-slate-500 mt-3">
                      👥 {tour.reviews.toLocaleString()} personas lo han valorado
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Other Tours */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {selectedCategory !== 'free' && selectedCategory !== 'all' && (
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-900 mb-2">
                {categories.find(c => c.id === selectedCategory)?.emoji}{' '}
                {categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-slate-600">
                {filteredTours.length} {filteredTours.length === 1 ? 'actividad' : 'actividades'} disponibles
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.filter(t => t.category !== 'free').map(tour => (
              <div key={tour.id} className={`bg-white rounded-2xl overflow-hidden border-2 hover:shadow-xl transition-all ${
                tour.recommended ? 'border-primary' : 'border-slate-200 hover:border-primary/50'
              }`}>
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-white text-6xl">
                    {tour.category === 'day-trips' ? 'landscape' : tour.category === 'food' ? 'restaurant' : tour.category === 'adventure' ? 'waves' : 'theater_comedy'}
                  </span>
                  {tour.badge && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                      {tour.badge}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white text-xs p-2 text-center">
                    📸 Foto placeholder: {tour.category === 'day-trips' ? 'Palacio o destino' : tour.category === 'food' ? 'Plato típico' : 'Actividad'}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-900 flex-1 leading-tight">{tour.name}</h3>
                    <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg ml-2">
                      <span className="material-symbols-outlined text-primary text-sm">star</span>
                      <span className="text-sm font-bold text-primary">{tour.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-4">{tour.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.slice(0, 3).map((highlight, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-lg">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4 pt-4 border-t">
                    <div>
                      <p className="text-xs text-slate-500">Duración</p>
                      <p className="text-sm font-bold text-slate-900">{tour.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Desde</p>
                      <p className="text-xl font-black text-primary">{tour.price}</p>
                    </div>
                  </div>

                  <a
                    href={tour.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white text-center font-bold py-3 rounded-xl transition-all hover:scale-105 shadow-lg text-sm"
                  >
                    Ver Disponibilidad →
                  </a>

                  <p className="text-xs text-center text-slate-500 mt-2">
                    {tour.reviews.toLocaleString()} opiniones
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
            ¿Por qué reservar con Civitatis?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">cancel</span>
              <h3 className="font-bold text-slate-900 mb-2">Cancelación gratis</h3>
              <p className="text-sm text-slate-600">Hasta 24-48h antes sin coste</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">language</span>
              <h3 className="font-bold text-slate-900 mb-2">En español</h3>
              <p className="text-sm text-slate-600">Guías nativos hispanohablantes</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">groups</span>
              <h3 className="font-bold text-slate-900 mb-2">Grupos reducidos</h3>
              <p className="text-sm text-slate-600">Experiencias más personales</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">workspace_premium</span>
              <h3 className="font-bold text-slate-900 mb-2">Mejor precio</h3>
              <p className="text-sm text-slate-600">Garantía del precio más bajo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Guides */}
      <section className="py-20 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block">map</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            ¿Quieres organizar tu viaje completo?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Combina estos tours con nuestras Guías Digitales Interactivas. Itinerarios día a día, restaurantes locales y todos los secretos de Lisboa.
          </p>
          <Link
            href="/itinerarios"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">explore</span>
            Ver Guías Premium
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <p className="text-white/80 text-sm mt-6">✅ Desde 1.99€ · ✅ Acceso inmediato · ✅ Garantía 48 horas</p>
        </div>
      </section>
    </main>
  );
}
