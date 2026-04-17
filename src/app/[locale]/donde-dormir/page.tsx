'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { isFreeAccessActive } from '@/lib/guide-config';

export default function DondeDormirPage() {
  const isFree = isFreeAccessActive();
  const [selectedZone, setSelectedZone] = useState('all');

  const zones = [
    {
      id: 'baixa',
      name: 'Baixa-Chiado',
      description: 'Centro histórico, cerca de todo',
      bestFor: 'Primera vez en Lisboa, turismo intenso',
      pros: ['A pie de todo', 'Muchos restaurantes', 'Bien conectado con metro'],
      cons: ['Más caro', 'Ruidoso por la noche', 'Turístico']
    },
    {
      id: 'alfama',
      name: 'Alfama',
      description: 'Barrio más auténtico y fotogénico',
      bestFor: 'Ambiente local, fado, callejuelas pintorescas',
      pros: ['Auténtico y con encanto', 'Restaurantes locales', 'Mejor para fotos'],
      cons: ['Muchas cuestas', 'Calles estrechas', 'Lejos del metro']
    },
    {
      id: 'bairro-alto',
      name: 'Bairro Alto',
      description: 'Vida nocturna y ambiente bohemio',
      bestFor: 'Jóvenes, fiesta, restaurantes modernos',
      pros: ['Vida nocturna increíble', 'Muchos bares y terrazas', 'Ambiente alternativo'],
      cons: ['MUY ruidoso de noche', 'Cuestas empinadas', 'Limpieza variable']
    },
    {
      id: 'principe-real',
      name: 'Príncipe Real',
      description: 'Elegante, tranquilo, muy local',
      bestFor: 'Parejas, viajeros que buscan tranquilidad',
      pros: ['Barrio residencial tranquilo', 'Cafés y tiendas bonitas', 'Seguro y limpio'],
      cons: ['Más caro', 'Menos opciones de alojamiento', 'Algo alejado de Belém']
    },
    {
      id: 'belem',
      name: 'Belém',
      description: 'Zona monumental junto al río',
      bestFor: 'Familias, amantes de la cultura',
      pros: ['Tranquilo y espacioso', 'Cerca de monumentos principales', 'Río y parques'],
      cons: ['Lejos del centro (20 min en tranvía)', 'Menos vida nocturna', 'Cierra pronto']
    },
    {
      id: 'parque-nacoes',
      name: 'Parque das Nações',
      description: 'Zona moderna, estación Oriente',
      bestFor: 'Familias, viajes de negocios, llegadas tarde',
      pros: ['Moderno y limpio', 'Cerca del aeropuerto', 'Hoteles más económicos'],
      cons: ['Alejado del centro histórico', 'Sin encanto tradicional', 'Necesitas transporte siempre']
    }
  ];

  const accommodations = {
    hostels: [
      {
        name: 'Home Lisbon Hostel',
        zone: 'baixa',
        price: '18-35€',
        rating: 9.1,
        description: 'Hostel social con excelente ambiente. Desayuno incluido y actividades diarias.',
        image: '/images/joel-filipe-FrSDv3rVG-E-unsplash.jpg',
        amenities: ['Desayuno gratis', 'Cocina compartida', 'Free walking tours', 'Bar'],
        url: 'https://www.booking.com/hotel/pt/home-lisbon-hostel.html',
        highlight: 'Más social'
      },
      {
        name: 'Goodmorning Solo Traveller Hostel',
        zone: 'bairro-alto',
        price: '20-40€',
        rating: 8.9,
        description: 'Perfecto para viajeros solos. Eventos nocturnos y excursiones organizadas.',
        image: '/images/ronan-furuta-RkmIdgnJSKk-unsplash.jpg',
        amenities: ['Solo travelers', 'Fiesta incluida', 'Terraza panorámica', 'Desayuno'],
        url: 'https://www.booking.com/hotel/pt/goodmorning-solo-traveller-hostel.html',
        highlight: 'Para solos'
      },
      {
        name: 'Lisbon Destination Hostel',
        zone: 'alfama',
        price: '22-45€',
        rating: 9.0,
        description: 'Hostel boutique en edificio histórico. Vistas increíbles desde la terraza.',
        image: '/images/alfama-panoramica.jpg',
        amenities: ['Terraza con vistas', 'Desayuno buffet', 'Ubicación premium', 'Habitaciones privadas'],
        url: 'https://www.booking.com/hotel/pt/lisbon-destination-hostel.html',
        highlight: 'Mejores vistas'
      }
    ],
    hotels: [
      {
        name: 'Hotel Mundial',
        zone: 'baixa',
        price: '90-150€',
        rating: 8.7,
        description: 'Hotel clásico con terraza rooftop. Vistas al Castillo de São Jorge.',
        image: '/images/elevador-santa-justa.jpg',
        url: 'https://www.hotel-mundial.pt/',
        amenities: ['Terraza rooftop', 'Desayuno incluido', 'Centro histórico', 'WiFi gratis'],
        highlight: 'Mejor terraza'
      },
      {
        name: 'Memmo Alfama Hotel',
        zone: 'alfama',
        price: '120-200€',
        rating: 9.2,
        description: 'Hotel boutique de diseño. Piscina con vistas al río Tajo.',
        image: '/images/alfama-panoramica.jpg',
        url: 'https://www.memmo.com/alfama/',
        amenities: ['Piscina con vistas', 'Diseño moderno', 'Bar en rooftop', 'Spa'],
        highlight: 'Lujo asequible'
      },
      {
        name: 'The Lumiares Hotel & Spa',
        zone: 'bairro-alto',
        price: '110-180€',
        rating: 9.0,
        description: 'Hotel elegante en palacete del siglo XVIII. Spa y piscina interior.',
        image: '/images/hero-lisboa.jpg',
        url: 'https://www.thelumiares.com/',
        amenities: ['Spa completo', 'Piscina interior', 'Edificio histórico', 'Restaurante gourmet'],
        highlight: 'Con spa'
      },
      {
        name: 'Torel Palace Lisbon',
        zone: 'principe-real',
        price: '140-250€',
        rating: 9.3,
        description: 'Palacio del siglo XIX convertido en hotel boutique. Piscina panorámica.',
        image: '/images/paulo-evangelista-Ss3FBqiWwP4-unsplash.jpg',
        url: 'https://torelhospitality.com/torel-palace-lisbon',
        amenities: ['Piscina infinita', 'Vistas panorámicas', 'Decoración de época', 'Bar sofisticado'],
        highlight: 'Romántico'
      },
      {
        name: 'Altis Belém Hotel & Spa',
        zone: 'belem',
        price: '150-280€',
        rating: 9.1,
        description: 'Hotel de lujo junto al río. Vista directa a la Torre de Belém.',
        image: '/images/pexels-helena-i-1489651-2867883.jpg',
        url: 'https://www.altishotels.com/altis-belem-hotel/',
        amenities: ['Spa de lujo', 'Restaurante Michelin', 'Vistas río', 'Gimnasio'],
        highlight: 'Lujo total'
      },
      {
        name: 'MYRIAD by SANA Hotels',
        zone: 'parque-nacoes',
        price: '100-170€',
        rating: 9.0,
        description: 'Hotel moderno 5 estrellas. Cerca del aeropuerto y estación Oriente.',
        image: '/images/yingcan-chen-xZ_GfV_JZlE-unsplash.jpg',
        url: 'https://www.sanahotels.com/hotel/myriad-by-sana',
        amenities: ['Piscina infinita', 'Spa', 'Restaurante panorámico', 'Gimnasio 24h'],
        highlight: 'Moderno'
      }
    ]
  };

  const filteredHostels = selectedZone === 'all'
    ? accommodations.hostels
    : accommodations.hostels.filter(h => h.zone === selectedZone);

  const filteredHotels = selectedZone === 'all'
    ? accommodations.hotels
    : accommodations.hotels.filter(h => h.zone === selectedZone);

  const faqItems = [
    {
      question: '¿Cuál es el mejor barrio para primera vez?',
      answer: 'Baixa-Chiado es el más práctico por ubicación y transporte. Si buscas algo más auténtico, Alfama es ideal.',
    },
    {
      question: '¿Qué zona es más tranquila por la noche?',
      answer: 'Príncipe Real y Belém son más silenciosos. Bairro Alto es la zona más ruidosa por vida nocturna.',
    },
    {
      question: '¿Cuánto cuesta dormir en Lisboa?',
      answer: 'Hostels desde 18-25€ y hoteles boutique desde 90-120€ por noche. Fuera del centro baja el precio.',
    },
    {
      question: '¿Es seguro alojarse en Alfama?',
      answer: 'Sí, es seguro y muy auténtico. Solo considera las cuestas y calles empedradas si viajas con maleta grande.',
    },
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
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/joel-filipe-FrSDv3rVG-E-unsplash.jpg"
          alt="Dónde dormir en Lisboa"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Alojamiento</p>
          <h1 className="font-display italic text-white text-3xl md:text-5xl leading-tight">
            Dónde dormir en Lisboa
          </h1>
          <p className="text-white/70 text-sm mt-2">Hostels y hoteles boutique · Recomendaciones por zonas · Precios reales</p>
        </div>
      </section>

      {/* Filtro de zona */}
      <section className="bg-background-light py-6 border-b border-border-soft sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <button
              onClick={() => setSelectedZone('all')}
              className={`text-sm pb-1 transition-colors ${
                selectedZone === 'all'
                  ? 'text-text-main font-semibold border-b-2 border-primary'
                  : 'text-text-secondary hover:text-text-main'
              }`}
            >
              Todas las zonas
            </button>
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`text-sm pb-1 transition-colors ${
                  selectedZone === zone.id
                    ? 'text-text-main font-semibold border-b-2 border-primary'
                    : 'text-text-secondary hover:text-text-main'
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Info por zonas */}
      <section className="bg-background-light py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Elige tu zona según tu estilo
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 divide-border-soft">
            {zones.map((zone) => (
              <div
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`pt-6 pb-6 pr-6 cursor-pointer border-t-2 transition-colors ${
                  selectedZone === zone.id ? 'border-primary' : 'border-border-soft hover:border-text-secondary'
                }`}
              >
                <h3 className="font-semibold text-text-main text-sm mb-1">{zone.name}</h3>
                <p className="text-text-secondary text-xs mb-3">{zone.description}</p>
                <p className="text-xs text-text-secondary mb-2">
                  <span className="font-semibold text-text-main">Perfecto para:</span> {zone.bestFor}
                </p>
                <div className="space-y-0.5">
                  {zone.pros.slice(0, 2).map((pro) => (
                    <p key={pro} className="text-xs text-text-secondary">
                      <span className="text-primary">&#10003;</span> {pro}
                    </p>
                  ))}
                  {zone.cons.slice(0, 1).map((con) => (
                    <p key={con} className="text-xs text-text-secondary">
                      <span className="text-text-secondary">&#215;</span> {con}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostels */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Hostels para mochileros
          </p>
          {filteredHostels.length === 0 ? (
            <p className="text-text-secondary text-sm">No hay hostels en esta zona. Prueba con otra o selecciona todas.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-10">
              {filteredHostels.map((hostel) => (
                <article key={hostel.name}>
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={hostel.image}
                      alt={hostel.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="border-t-2 border-primary pt-4">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-semibold text-text-main text-sm">{hostel.name}</h3>
                      <span className="text-xs text-primary font-semibold">{hostel.rating}</span>
                    </div>
                    <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">{hostel.highlight} · {zones.find(z => z.id === hostel.zone)?.name}</p>
                    <p className="text-text-secondary text-sm mb-3">{hostel.description}</p>
                    <div className="space-y-1 mb-4">
                      {hostel.amenities.map((a) => (
                        <div key={a} className="flex items-center gap-2 text-xs text-text-secondary">
                          <span className="text-primary">&#10003;</span>{a}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-text-main text-sm">Desde {hostel.price}</p>
                      <a
                        href={hostel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline underline-offset-2"
                      >
                        Ver disponibilidad →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hoteles */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Hoteles boutique y confort
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {filteredHotels.map((hotel) => (
              <article key={hotel.name}>
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="block relative aspect-[16/9] overflow-hidden mb-4">
                  <Image
                    src={hotel.image}
                    alt={`${hotel.name} en ${zones.find(z => z.id === hotel.zone)?.name || hotel.zone}, Lisboa`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </a>
                <div className="border-t-2 border-primary pt-4">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-semibold text-text-main text-sm">{hotel.name}</h3>
                    <span className="text-xs text-primary font-semibold">{hotel.rating}</span>
                  </div>
                  <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">{hotel.highlight} · {zones.find(z => z.id === hotel.zone)?.name}</p>
                  <p className="text-text-secondary text-sm mb-3">{hotel.description}</p>
                  <div className="space-y-1 mb-4">
                    {hotel.amenities.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-xs text-text-secondary">
                        <span className="text-primary">&#10003;</span>{a}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-text-main text-sm">Desde {hotel.price}</p>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline underline-offset-2"
                    >
                      Web oficial →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Antes de reservar
          </p>
          <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 divide-border-soft">
            {[
              { titulo: 'Reserva con antelación si...', items: ['Viajas en temporada alta (junio-septiembre)', 'Quieres hoteles boutique específicos', 'Viajas en festivales (Santo António en junio)', 'Buscas hostels sociales (se llenan rápido)'] },
              { titulo: 'Cosas a verificar antes de reservar', items: ['¿Hay ascensor? (muchos edificios históricos no tienen)', '¿Incluye aire acondicionado? (necesario en verano)', '¿Está en cuesta muy empinada? (Alfama, Graça)', '¿Cerca de metro o tranvía? (imprescindible)'] },
              { titulo: 'Cómo ahorrar dinero', items: ['Reserva con cancelación gratis (por si encuentras mejor)', 'Hoteles en Parque das Nações son 30-40% más baratos', 'Evita viernes-domingo (más caros)', 'Hostels con cocina = ahorro en comidas'] },
              { titulo: 'Evita estas trampas', items: ['"Vista al castillo" puede ser 1 ventanita pequeña', 'Baixa-Chiado: MUY ruidoso viernes-sábado', '"5 min del centro" a menudo son 15-20 min reales', 'Verifica reseñas recientes (último año)'] },
            ].map((tip) => (
              <div key={tip.titulo} className="pt-5 pb-5 sm:pr-10">
                <h3 className="font-semibold text-text-main text-sm mb-3">{tip.titulo}</h3>
                <ul className="space-y-1">
                  {tip.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
          <p className="text-white/60 text-xs uppercase tracking-widest mb-4">¿Ya tienes dónde dormir?</p>
          <p className="font-display italic text-white text-3xl mb-6">
            Ahora planifica qué hacer cada día
          </p>
          <Link
            href="/itinerarios"
            className="inline-block px-8 py-3 border border-white/30 hover:border-white text-white text-sm font-semibold transition-colors"
          >
            {isFree ? 'Ver guías gratis →' : 'Ver itinerarios →'}
          </Link>
        </div>
      </section>
    </main>
  );
}
