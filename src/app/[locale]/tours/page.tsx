'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { tourFallbackImage, tourImageMap } from '@/lib/media';

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const CIVITATIS_AFFILIATE_ID = "TU_AFFILIATE_ID";

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
    { id: 'all', name: 'Todos' },
    { id: 'free', name: 'Free Tours' },
    { id: 'day-trips', name: 'Excursiones' },
    { id: 'food', name: 'Gastronómicos' },
    { id: 'culture', name: 'Cultura' },
    { id: 'adventure', name: 'Aventura' },
  ];

  const tours = [
    {
      id: 1, category: 'free',
      name: 'Free Tour por Lisboa',
      duration: '2-3 horas', price: 'Gratis (propina voluntaria)', rating: 9.4,
      description: 'Descubre la historia de Lisboa con guías en español. Recorre Baixa, Chiado, Rossio y conoce las leyendas de la ciudad.',
      highlights: ['Baixa-Chiado', 'Rossio', 'Historia local', 'Propina a tu criterio'],
      image: '/images/hero-lisboa.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/free-tour-lisboa/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'Más popular', recommended: true
    },
    {
      id: 2, category: 'free',
      name: 'Free Tour por Alfama',
      duration: '2 horas', price: 'Gratis (propina voluntaria)', rating: 9.2,
      description: 'Explora el barrio más auténtico de Lisboa. Callejuelas, miradores, fado y la esencia más pura de la ciudad.',
      highlights: ['Barrio Alfama', 'Miradores', 'Cultura fado', 'Casas típicas'],
      image: '/images/alfama-panoramica.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/free-tour-alfama/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'Imprescindible', recommended: true
    },
    {
      id: 3, category: 'day-trips',
      name: 'Excursión a Sintra, Cascais y Cabo da Roca',
      duration: 'Día completo', price: 'Desde 49€', rating: 9.1,
      description: 'Palacio da Pena, Quinta da Regaleira, el punto más occidental de Europa y el pueblo costero de Cascais. Todo en un día.',
      highlights: ['Palacio da Pena', 'Cascais', 'Cabo da Roca', 'Transporte incluido'],
      image: '/images/pexels-german-latasa-814203747-35697448.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/excursion-sintra-cascais/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'Mejor valorado', recommended: true
    },
    {
      id: 4, category: 'day-trips',
      name: 'Tour por Sintra y Palacio da Pena',
      duration: '8 horas', price: 'Desde 45€', rating: 9.0,
      description: 'Visita el Palacio da Pena y el centro histórico de Sintra. Ideal si quieres centrarte solo en Sintra sin prisas.',
      highlights: ['Palacio da Pena', 'Centro de Sintra', 'Entrada incluida', 'Grupos pequeños'],
      image: '/images/pexels-helena-i-1489651-2867883.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/tour-sintra-palacio-pena/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: null, recommended: false
    },
    {
      id: 5, category: 'day-trips',
      name: 'Excursión a Fátima, Batalha, Nazaré y Óbidos',
      duration: 'Día completo', price: 'Desde 55€', rating: 8.9,
      description: 'Santuario de Fátima, monasterio de Batalha, pueblo pesquero de Nazaré y la villa medieval de Óbidos.',
      highlights: ['Santuario Fátima', 'Óbidos medieval', 'Nazaré', 'Almuerzo incluido'],
      image: '/images/pexels-daniel-1547736.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/excursion-fatima-batalha-nazare-obidos/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: null, recommended: false
    },
    {
      id: 6, category: 'food',
      name: 'Tour Gastronómico por Lisboa',
      duration: '3 horas', price: 'Desde 79€', rating: 9.3,
      description: 'Degusta pastéis de nata, bacalao, ginjinha y vino de Oporto. Visita mercados locales y tascas auténticas.',
      highlights: ['10+ degustaciones', 'Mercados locales', 'Vinos portugueses', 'Guía foodie'],
      image: '/images/IMG_1880.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/tour-gastronomico/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'Experiencia única', recommended: true
    },
    {
      id: 7, category: 'food',
      name: 'Tour de Vinos y Quesos Portugueses',
      duration: '2.5 horas', price: 'Desde 65€', rating: 9.0,
      description: 'Cata de vinos del Douro, Alentejo y Vinho Verde con quesos artesanales portugueses. En una bodega histórica.',
      highlights: ['6 vinos premium', 'Quesos artesanales', 'Bodega histórica', 'Grupos reducidos'],
      image: '/images/vino-celebracion.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/cata-vinos-quesos/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: null, recommended: false
    },
    {
      id: 8, category: 'culture',
      name: 'Espectáculo de Fado con Cena',
      duration: '3 horas', price: 'Desde 65€', rating: 9.2,
      description: 'Cena tradicional portuguesa + espectáculo de fado en vivo en una casa típica de Alfama. Incluye bebidas.',
      highlights: ['Cena 3 platos', 'Fado en vivo', 'Bebidas incluidas', 'Casa auténtica'],
      image: '/images/claudio-luiz-castro-cFj656inKM0-unsplash.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/espectaculo-fado-cena/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'Romántico', recommended: true
    },
    {
      id: 9, category: 'culture',
      name: 'Visita Guiada al Oceanário de Lisboa',
      duration: '1.5 horas', price: 'Desde 28€', rating: 8.8,
      description: 'Uno de los acuarios más grandes de Europa. Perfecto para familias. Entrada sin colas incluida.',
      highlights: ['Sin colas', 'Guía especializado', 'Para toda la familia', 'Parque das Nações'],
      image: '/images/yingcan-chen-xZ_GfV_JZlE-unsplash.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/visita-guiada-oceanario/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: 'Para familias', recommended: false
    },
    {
      id: 10, category: 'adventure',
      name: 'Paseo en Barco por el Tajo al Atardecer',
      duration: '2 horas', price: 'Desde 35€', rating: 9.1,
      description: 'Navega por el río Tajo al atardecer. Vistas de la Torre de Belém, Puente 25 de Abril y Cristo Rei. Incluye bebida.',
      highlights: ['Atardecer mágico', 'Bebida incluida', 'Vistas panorámicas', 'Grupos pequeños'],
      image: '/images/paulo-evangelista-Ss3FBqiWwP4-unsplash.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/paseo-barco-tajo-atardecer/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: null, recommended: true
    },
    {
      id: 11, category: 'adventure',
      name: 'Surf en la Costa de Lisboa',
      duration: '3 horas', price: 'Desde 45€', rating: 8.7,
      description: 'Clase de surf en Carcavelos o Costa da Caparica. Para principiantes. Tabla y neopreno incluidos.',
      highlights: ['Instructor profesional', 'Equipo incluido', 'Playa Carcavelos', 'Todos los niveles'],
      image: '/images/pexels-daniel-1547736.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/clase-surf/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: null, recommended: false
    },
    {
      id: 12, category: 'culture',
      name: 'Tour Privado por Lisboa',
      duration: '4 horas', price: 'Desde 180€ (grupo)', rating: 9.5,
      description: 'Tour 100% personalizado solo para tu grupo. Elige qué ver y adapta el ritmo. Guía exclusivo en español.',
      highlights: ['Totalmente personalizable', 'Guía exclusivo', 'Itinerario a medida', 'Recogida en hotel'],
      image: '/images/hero-lisboa.jpg',
      bookingUrl: `https://www.civitatis.com/es/lisboa/tour-privado/?aid=${CIVITATIS_AFFILIATE_ID}`,
      badge: null, recommended: false
    }
  ];

  const filteredTours = selectedCategory === 'all'
    ? tours
    : tours.filter(tour => tour.category === selectedCategory);

  const faqItems = [
    { question: '¿Cuándo reservar tours en Lisboa?', answer: 'En temporada alta (junio-septiembre) reserva con 3-7 días de antelación. Para free tours, 24-48h.' },
    { question: '¿Qué excursión vale más la pena?', answer: 'Sintra y Cascais es la más completa para un día. Si quieres ritmo tranquilo, haz Sintra solo.' },
    { question: '¿Son mejores los free tours?', answer: 'Son ideales para una primera visita. Pagas propina según tu experiencia y suelen ser muy completos.' },
    { question: '¿Hay tours en español?', answer: 'Sí, la mayoría de opciones aquí incluyen guías en español y cancelación gratis.' },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/ronan-furuta-RkmIdgnJSKk-unsplash.jpg"
          alt="Tours y actividades en Lisboa"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Experiencias</p>
          <h1 className="font-display italic text-white text-3xl md:text-5xl leading-tight">
            Tours y actividades
          </h1>
          <p className="text-white/70 text-sm mt-2">Free tours · Excursiones · Gastronomía · Cancelación gratis · En español</p>
        </div>
      </section>

      {/* Filtro categoría */}
      <section className="bg-background-light py-6 border-b border-border-soft sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-sm pb-1 transition-colors ${
                  selectedCategory === cat.id
                    ? 'text-text-main font-semibold border-b-2 border-primary'
                    : 'text-text-secondary hover:text-text-main'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de tours */}
      <section className="bg-background-light py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredTours.map((tour) => {
              const directUrl = directUrls[tour.id as keyof typeof directUrls] || tour.bookingUrl;
              return (
                <article key={tour.id}>
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={tourImageMap[tour.id] || tour.image || tourFallbackImage}
                      alt={tour.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className={`border-t-2 pt-4 ${tour.recommended ? 'border-primary' : 'border-border-soft'}`}>
                    {tour.badge && (
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">{tour.badge}</p>
                    )}
                    <h3 className="font-semibold text-text-main text-sm mb-1">{tour.name}</h3>
                    <p className="text-xs text-text-secondary mb-3 leading-relaxed">{tour.description}</p>
                    <div className="space-y-1 mb-4">
                      {tour.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-text-secondary">
                          <span className="text-primary">&#10003;</span>{h}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-text-secondary">{tour.duration}</p>
                        <p className="font-bold text-text-main text-sm">{tour.price}</p>
                      </div>
                      <a
                        href={directUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline underline-offset-2"
                      >
                        Reservar →
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Civitatis benefits */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Por qué reservar con Civitatis
          </p>
          <div className="grid sm:grid-cols-4 gap-8">
            {[
              { titulo: 'Cancelación gratis', desc: 'Hasta 24-48h antes sin coste' },
              { titulo: 'En español', desc: 'Guías nativos hispanohablantes' },
              { titulo: 'Grupos reducidos', desc: 'Experiencias más personales' },
              { titulo: 'Mejor precio', desc: 'Garantía del precio más bajo' },
            ].map((item) => (
              <div key={item.titulo} className="border-t border-border-soft pt-4">
                <h3 className="font-semibold text-text-main text-sm mb-1">{item.titulo}</h3>
                <p className="text-text-secondary text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-6 pb-3 border-b border-border-soft">
            Preguntas frecuentes
          </p>
          <div className="divide-y divide-border-soft">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-text-main text-sm pr-4">{item.question}</span>
                  <span className="text-text-secondary group-open:rotate-45 transition-transform flex-shrink-0 text-lg leading-none">+</span>
                </summary>
                <p className="text-text-secondary text-sm mt-3 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-4">Completa tu viaje</p>
          <p className="font-display italic text-white text-3xl mb-3">
            ¿Quieres organizar tu viaje completo?
          </p>
          <p className="text-white/60 text-sm mb-8">
            Combina estos tours con nuestras guías de itinerarios por días.
          </p>
          <Link
            href="/itinerarios"
            className="inline-block px-8 py-3 border border-white/30 hover:border-white text-white text-sm font-semibold transition-colors"
          >
            Ver guías →
          </Link>
        </div>
      </section>
    </main>
  );
}
