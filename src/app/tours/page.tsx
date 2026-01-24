'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { tourFallbackImage, tourImageMap } from '@/lib/media';

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // TODO: Obtener tu ID de afiliado de Civitatis y reemplazar aquí
  // Cuenta registrada: contacto@estabaenlisboa.com
  // 1. Inicia sesión en tu panel de afiliados de Civitatis
  // 2. Ve a "Herramientas" > "Enlaces de afiliado"
  // 3. Copia tu "Affiliate ID" (aparece como aid=XXXXX)
  // 4. Reemplaza "TU_AFFILIATE_ID" con ese número
  const CIVITATIS_AFFILIATE_ID = "TU_AFFILIATE_ID";

  // URLs directas sin affiliate ID (por ahora)
  const directUrls: Record<number, string> = {
    1: 'https://www.civitatis.com/es/lisboa/free-tour-lisboa/',
    2: 'https://www.civitatis.com/es/lisboa/free-tour-alfama/',
    3: 'https://www.civitatis.com/es/lisboa/excursion-sintra-cascais/',
    4: 'https://www.civitatis.com/es/lisboa/tour-sintra-palacio-pena/',
    5: 'https://www.civitatis.com/es/lisboa/excursion-fatima-batalha-nazare-obidos/',
    6: 'https://www.civitatis.com/es/lisboa/tour-gastronomico/',
    7: 'https://www.civitatis.com/es/lisboa/cata-vinos-quesos/',
    8: 'https://www.civitatis.com/es/lisboa/espectaculo-fado-cena/',
    9: 'https://www.civitatis.com/es/lisboa/visita-guiada-oceanario/',
    10: 'https://www.civitatis.com/es/lisboa/paseo-barco-tajo-atardecer/',
    11: 'https://www.civitatis.com/es/lisboa/clase-surf/',
    12: 'https://www.civitatis.com/es/lisboa/tour-privado/'
  };

  const categories = [
    { id: 'all', name: 'Todos', icon: 'map' },
    { id: 'free', name: 'Free Tours', icon: 'redeem' },
    { id: 'day-trips', name: 'Excursiones', icon: 'directions_bus' },
    { id: 'food', name: 'Gastronómicos', icon: 'restaurant' },
    { id: 'culture', name: 'Cultura', icon: 'theater_comedy' },
    { id: 'adventure', name: 'Aventura', icon: 'sports_sailing' }
  ];

  const tours = [
    {
      id: 1,
      category: 'free',
      name: 'Free Tour por Lisboa',
      duration: '2-3 horas',
      price: 'Gratis (propina voluntaria)',
      rating: 9.4,
      description: 'Descubre la historia de Lisboa con guías en español. Recorre Baixa, Chiado, Rossio y conoce las leyendas de la ciudad.',
      highlights: ['Baixa-Chiado', 'Rossio', 'História local', 'Propina a tu criterio'],
      image: '/images/hero-lisboa.jpg',
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
      description: 'Explora el barrio más auténtico de Lisboa. Callejuelas, miradores, fado y la esencia más pura de la ciudad.',
      highlights: ['Barrio Alfama', 'Miradores', 'Cultura fado', 'Casas típicas'],
      image: '/images/alfama-panoramica.jpg',
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
      description: 'Palacio da Pena, Quinta da Regaleira, el punto más occidental de Europa y el pueblo costero de Cascais. Todo en un día.',
      highlights: ['Palacio da Pena', 'Cascais', 'Cabo da Roca', 'Transporte incluido'],
      image: '/images/pexels-german-latasa-814203747-35697448.jpg',
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
      description: 'Visita el Palacio da Pena y el centro histórico de Sintra. Ideal si quieres centrarte solo en Sintra sin prisas.',
      highlights: ['Palacio da Pena', 'Centro de Sintra', 'Entrada incluida', 'Grupos pequeños'],
      image: '/images/pexels-helena-i-1489651-2867883.jpg',
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
      description: 'Santuario de Fátima, monasterio de Batalha, pueblo pesquero de Nazaré y la villa medieval de Óbidos.',
      highlights: ['Santuario Fátima', 'Óbidos medieval', 'Nazaré', 'Almuerzo incluido'],
      image: '/images/pexels-daniel-1547736.jpg',
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
      description: 'Degusta pastéis de nata, bacalao, ginjinha y vino de Oporto. Visita mercados locales y tascas auténticas.',
      highlights: ['10+ degustaciones', 'Mercados locales', 'Vinos portugueses', 'Guía foodie'],
      image: '/images/IMG_1880.jpg',
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
      description: 'Cata de vinos del Douro, Alentejo y Vinho Verde con quesos artesanales portugueses. En una bodega histórica.',
      highlights: ['6 vinos premium', 'Quesos artesanales', 'Bodega histórica', 'Grupos reducidos'],
      image: '/images/vino-celebracion.jpg',
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
      description: 'Cena tradicional portuguesa + espectáculo de fado en vivo en una casa típica de Alfama. Incluye bebidas.',
      highlights: ['Cena 3 platos', 'Fado en vivo', 'Bebidas incluidas', 'Casa auténtica'],
      image: '/images/claudio-luiz-castro-cFj656inKM0-unsplash.jpg',
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
      description: 'Uno de los acuarios más grandes de Europa. Perfecto para familias. Entrada sin colas incluida.',
      highlights: ['Sin colas', 'Guía especializado', 'Para toda la familia', 'Parque das Nações'],
      image: '/images/yingcan-chen-xZ_GfV_JZlE-unsplash.jpg',
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
      description: 'Navega por el río Tajo al atardecer. Vistas de la Torre de Belém, Puente 25 de Abril y Cristo Rei. Incluye bebida.',
      highlights: ['Atardecer mágico', 'Bebida incluida', 'Vistas panorámicas', 'Grupos pequeños'],
      image: '/images/paulo-evangelista-Ss3FBqiWwP4-unsplash.jpg',
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
      description: 'Clase de surf en Carcavelos o Costa da Caparica. Para principiantes. Tabla y neopreno incluidos.',
      highlights: ['Instructor profesional', 'Equipo incluido', 'Playa Carcavelos', 'Todos los niveles'],
      image: '/images/pexels-daniel-1547736.jpg',
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
      description: 'Tour 100% personalizado solo para tu grupo. Elige qué ver y adapta el ritmo. Guía exclusivo en español.',
      highlights: ['Totalmente personalizable', 'Guía exclusivo', 'Itinerario a medida', 'Recogida en hotel'],
      image: '/images/hero-lisboa.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/tour-privado/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'LUJO',
      recommended: false
    }
  ];

  const filteredTours = selectedCategory === 'all'
    ? tours
    : tours.filter(tour => tour.category === selectedCategory);

  const faqItems = [
    {
      question: '¿Cuándo reservar tours en Lisboa?',
      answer: 'En temporada alta (junio-septiembre) reserva con 3-7 días de antelación. Para free tours, 24-48h.',
    },
    {
      question: '¿Qué excursión vale más la pena?',
      answer: 'Sintra y Cascais es la más completa para un día. Si quieres ritmo tranquilo, haz Sintra solo.',
    },
    {
      question: '¿Son mejores los free tours?',
      answer: 'Son ideales para una primera visita. Pagas propina según tu experiencia y suelen ser muy completos.',
    },
    {
      question: '¿Hay tours en español?',
      answer: 'Sí, la mayoría de opciones aquí incluyen guías en español y cancelación gratis.',
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/ronan-furuta-RkmIdgnJSKk-unsplash.jpg"
            alt="Tour en Lisboa"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">tour</span>
            <span className="text-sm font-semibold tracking-wide">Tours y actividades</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            Tours y<br />
            <span className="text-accent">Actividades</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Free tours, excursiones a Sintra, experiencias gastronómicas y aventuras. Reserva con cancelación gratis y en español.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
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
              <span>Selección local</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-primary text-white sticky top-16 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-white text-primary shadow-xl'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Curated intro */}
      <section className="py-20 bg-background-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Selección premium
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Experiencias con criterio local
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Tours con logística clara y experiencias que sí valen tu tiempo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">verified</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Verificados</h3>
              <p className="text-slate-600">Solo opciones con operadores confiables y buena logística.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">schedule</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Horarios reales</h3>
              <p className="text-slate-600">Duraciones y logística claras para planificar sin sorpresas.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">workspace_premium</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mejor relación calidad</h3>
              <p className="text-slate-600">Experiencias con buen precio y valor real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tours Highlight */}
      {(selectedCategory === 'all' || selectedCategory === 'free') && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-primary text-5xl">redeem</span>
              <div>
                <h2 className="text-3xl font-black text-slate-900">Free Tours Gratuitos</h2>
                <p className="text-slate-600">Sin pagar entrada, solo propina al final si te ha gustado</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-primary/20 mb-8 shadow-lg">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">lightbulb</span>
                ¿Cómo funcionan los Free Tours?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-bold text-slate-900 mb-2">1. Reservas gratis online</p>
                  <p className="text-slate-600">No pagas nada al reservar. Solo dejas tu email para confirmar asistencia.</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-2">2. Disfrutas del tour</p>
                  <p className="text-slate-600">Guías profesionales en español. Tours de 2-3 horas muy completos.</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-2">3. Propina voluntaria</p>
                  <p className="text-slate-600">Al final, das propina según te haya gustado. Media: 10-15€ por persona.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {tours.filter(t => t.category === 'free').map(tour => {
                // URLs directas sin affiliate ID por ahora
                const directUrls = {
                  1: 'https://www.civitatis.com/es/lisboa/free-tour-lisboa/',
                  2: 'https://www.civitatis.com/es/lisboa/free-tour-alfama/'
                };
                const directUrl = directUrls[tour.id as keyof typeof directUrls] || tour.bookingUrl;

                return (
                  <div key={tour.id} className="bg-white rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="relative h-56">
                      <Image
                        src={tourImageMap[tour.id] || tour.image || tourFallbackImage}
                        alt={tour.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                      {tour.badge && (
                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          {tour.badge}
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 flex-1">{tour.name}</h3>
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
                          <p className="text-2xl font-black text-primary">{tour.price}</p>
                        </div>
                      </div>

                    <a
                        href={directUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-bold py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                      >
                        Reservar Ahora (Gratis) →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Other Tours */}
      <section className="py-24 bg-background-cream">
        <div className="max-w-6xl mx-auto px-4">
          {selectedCategory !== 'free' && selectedCategory !== 'all' && (
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-900 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {categories.find(c => c.id === selectedCategory)?.icon}
                </span>
                {categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-slate-600">
                {filteredTours.length} {filteredTours.length === 1 ? 'actividad' : 'actividades'} disponibles
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.filter(t => t.category !== 'free').map(tour => {
              // Usar links directos por ahora
              const directUrl = directUrls[tour.id as keyof typeof directUrls] || tour.bookingUrl;

              return (
              <div key={tour.id} className={`bg-white rounded-3xl overflow-hidden border-2 hover:shadow-2xl transition-all hover:-translate-y-1 ${
                tour.recommended ? 'border-primary shadow-lg' : 'border-slate-200 hover:border-primary'
              }`}>
                <div className="relative h-48">
                  <Image
                    src={tourImageMap[tour.id] || tour.image || tourFallbackImage}
                    alt={tour.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  {tour.badge && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {tour.badge}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-900 flex-1 leading-tight">{tour.name}</h3>
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
                    href={directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-base"
                  >
                    Ver Disponibilidad →
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
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

      {/* FAQ */}
      <section className="py-20 bg-background-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">
            Preguntas frecuentes sobre tours en Lisboa
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-700">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Guides */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block">map</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Quieres organizar tu viaje completo?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Combina estos tours con nuestras Guías Digitales Interactivas. Itinerarios día a día, restaurantes locales y todos los secretos de Lisboa.
          </p>
          <Link
            href="/itinerarios"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">explore</span>
            Ver Guías Premium
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <p className="text-white/80 text-sm mt-6">✅ Desde 1.99€ · ✅ Acceso inmediato · ✅ Garantía 48 horas</p>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
