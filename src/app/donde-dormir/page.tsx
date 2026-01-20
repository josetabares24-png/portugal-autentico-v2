'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DondeDormirPage() {
  const [selectedZone, setSelectedZone] = useState('all');

  // TODO: Obtener tu ID de afiliado de Booking.com y reemplazar aquí
  // 1. Inicia sesión en tu cuenta de afiliado de Booking.com
  // 2. Ve a "Links & Banners" > "Create a link"
  // 3. Copia tu "Affiliate ID" (aparece como aid=XXXXX)
  // 4. Reemplaza "TU_AFFILIATE_ID" con ese número
  const BOOKING_AFFILIATE_ID = "TU_AFFILIATE_ID"; // 🔧 URGENTE: Reemplazar con tu Booking.com Affiliate ID

  const zones = [
    {
      id: 'baixa',
      name: 'Baixa-Chiado',
      emoji: '🏛️',
      description: 'Centro histórico, cerca de todo',
      bestFor: 'Primera vez en Lisboa, turismo intenso',
      pros: ['A pie de todo', 'Muchos restaurantes', 'Bien conectado con metro'],
      cons: ['Más caro', 'Ruidoso por la noche', 'Turístico']
    },
    {
      id: 'alfama',
      name: 'Alfama',
      emoji: '🎵',
      description: 'Barrio más auténtico y fotogénico',
      bestFor: 'Ambiente local, fado, callejuelas pintorescas',
      pros: ['Auténtico y con encanto', 'Restaurantes locales', 'Mejor para fotos'],
      cons: ['Muchas cuestas', 'Calles estrechas', 'Lejos del metro']
    },
    {
      id: 'bairro-alto',
      name: 'Bairro Alto',
      emoji: '🍷',
      description: 'Vida nocturna y ambiente bohemio',
      bestFor: 'Jóvenes, fiesta, restaurantes modernos',
      pros: ['Vida nocturna increíble', 'Muchos bares y terrazas', 'Ambiente alternativo'],
      cons: ['MUY ruidoso de noche', 'Cuestas empinadas', 'Limpieza variable']
    },
    {
      id: 'principe-real',
      name: 'Príncipe Real',
      emoji: '🌳',
      description: 'Elegante, tranquilo, muy local',
      bestFor: 'Parejas, viajeros que buscan tranquilidad',
      pros: ['Barrio residencial tranquilo', 'Cafés y tiendas bonitas', 'Seguro y limpio'],
      cons: ['Más caro', 'Menos opciones de alojamiento', 'Algo alejado de Belém']
    },
    {
      id: 'belem',
      name: 'Belém',
      emoji: '🏰',
      description: 'Zona monumental junto al río',
      bestFor: 'Familias, amantes de la cultura',
      pros: ['Tranquilo y espacioso', 'Cerca de monumentos principales', 'Río y parques'],
      cons: ['Lejos del centro (20 min en tranvía)', 'Menos vida nocturna', 'Cierra pronto']
    },
    {
      id: 'parque-nacoes',
      name: 'Parque das Nações',
      emoji: '🚀',
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
        bookingUrl: `https://www.booking.com/hotel/pt/home-lisbon-hostel.html?aid=${BOOKING_AFFILIATE_ID}`,
        highlight: 'MÁS SOCIAL'
      },
      {
        name: 'Goodmorning Solo Traveller Hostel',
        zone: 'bairro-alto',
        price: '20-40€',
        rating: 8.9,
        description: 'Perfecto para viajeros solos. Eventos nocturnos y excursiones organizadas.',
        image: '/images/ronan-furuta-RkmIdgnJSKk-unsplash.jpg',
        amenities: ['Solo travelers', 'Fiesta incluida', 'Terraza panorámica', 'Desayuno'],
        bookingUrl: `https://www.booking.com/hotel/pt/goodmorning-solo-traveller-hostel.html?aid=${BOOKING_AFFILIATE_ID}`,
        highlight: 'PARA SOLOS'
      },
      {
        name: 'Lisbon Destination Hostel',
        zone: 'alfama',
        price: '22-45€',
        rating: 9.0,
        description: 'Hostel boutique en edificio histórico. Vistas increíbles desde la terraza.',
        image: '/images/alfama-panoramica.jpg',
        amenities: ['Terraza con vistas', 'Desayuno buffet', 'Ubicación premium', 'Habitaciones privadas'],
        bookingUrl: `https://www.booking.com/hotel/pt/lisbon-destination-hostel.html?aid=${BOOKING_AFFILIATE_ID}`,
        highlight: 'MEJOR VISTAS'
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
        amenities: ['Terraza rooftop', 'Desayuno incluido', 'Centro histórico', 'WiFi gratis'],
        bookingUrl: `https://www.booking.com/hotel/pt/mundial.html?aid=${BOOKING_AFFILIATE_ID}`,
        highlight: 'MEJOR TERRAZA'
      },
      {
        name: 'Memmo Alfama Hotel',
        zone: 'alfama',
        price: '120-200€',
        rating: 9.2,
        description: 'Hotel boutique de diseño. Piscina con vistas al río Tajo.',
        image: '/images/alfama-panoramica.jpg',
        amenities: ['Piscina con vistas', 'Diseño moderno', 'Bar en rooftop', 'Spa'],
        bookingUrl: `https://www.booking.com/hotel/pt/memmo-alfama.html?aid=${BOOKING_AFFILIATE_ID}`,
        highlight: 'LUJO ASEQUIBLE'
      },
      {
        name: 'The Lumiares Hotel & Spa',
        zone: 'bairro-alto',
        price: '110-180€',
        rating: 9.0,
        description: 'Hotel elegante en palacete del siglo XVIII. Spa y piscina interior.',
        image: '/images/hero-lisboa.jpg',
        amenities: ['Spa completo', 'Piscina interior', 'Edificio histórico', 'Restaurante gourmet'],
        bookingUrl: `https://www.booking.com/hotel/pt/the-lumiares.html?aid=${BOOKING_AFFILIATE_ID}`,
        highlight: 'CON SPA'
      },
      {
        name: 'Torel Palace Lisbon',
        zone: 'principe-real',
        price: '140-250€',
        rating: 9.3,
        description: 'Palacio del siglo XIX convertido en hotel boutique. Piscina panorámica.',
        image: '/images/paulo-evangelista-Ss3FBqiWwP4-unsplash.jpg',
        amenities: ['Piscina infinita', 'Vistas panorámicas', 'Decoración de época', 'Bar sofisticado'],
        bookingUrl: `https://www.booking.com/hotel/pt/torel-palace-lisbon.html?aid=${BOOKING_AFFILIATE_ID}`,
        highlight: 'ROMÁNTICO'
      },
      {
        name: 'Altis Belém Hotel & Spa',
        zone: 'belem',
        price: '150-280€',
        rating: 9.1,
        description: 'Hotel de lujo junto al río. Vista directa a la Torre de Belém.',
        image: '/images/pexels-helena-i-1489651-2867883.jpg',
        amenities: ['Spa de lujo', 'Restaurante Michelin', 'Vistas río', 'Gimnasio'],
        bookingUrl: `https://www.booking.com/hotel/pt/altis-belem.html?aid=${BOOKING_AFFILIATE_ID}`,
        highlight: 'LUJO TOTAL'
      },
      {
        name: 'MYRIAD by SANA Hotels',
        zone: 'parque-nacoes',
        price: '100-170€',
        rating: 9.0,
        description: 'Hotel moderno 5 estrellas. Cerca del aeropuerto y estación Oriente.',
        image: '/images/yingcan-chen-xZ_GfV_JZlE-unsplash.jpg',
        amenities: ['Piscina infinita', 'Spa', 'Restaurante panorámico', 'Gimnasio 24h'],
        bookingUrl: `https://www.booking.com/hotel/pt/myriad-by-sana-hotels.html?aid=${BOOKING_AFFILIATE_ID}`,
        highlight: 'MODERNO'
      }
    ]
  };

  const filteredHostels = selectedZone === 'all'
    ? accommodations.hostels
    : accommodations.hostels.filter(h => h.zone === selectedZone);

  const filteredHotels = selectedZone === 'all'
    ? accommodations.hotels
    : accommodations.hotels.filter(h => h.zone === selectedZone);

  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/joel-filipe-FrSDv3rVG-E-unsplash.jpg"
            alt="Hotel en Lisboa"
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
            <span className="material-symbols-outlined text-base">bed</span>
            <span className="text-sm font-semibold tracking-wide">Guía de alojamiento</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            Dónde Dormir<br />
            <span className="text-accent">en Lisboa</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Hostels para mochileros y hoteles boutique para parejas. Recomendaciones por zonas, con precios reales y sin turistadas.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">verified_user</span>
              <span>Verificado por locales</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">hotel</span>
              <span>Reserva con descuento</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400">cancel</span>
              <span>Cancelación gratis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Selection */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setSelectedZone('all')}
              className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                selectedZone === 'all'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🗺️ Todas las Zonas
            </button>
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                  selectedZone === zone.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {zone.emoji} {zone.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Information */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Elige tu zona según tu estilo
            </h2>
            <p className="text-lg text-slate-600">
              Cada barrio de Lisboa tiene su personalidad. Te ayudamos a elegir el perfecto para ti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone) => (
              <div
                key={zone.id}
                className={`bg-white rounded-2xl p-6 border-2 transition-all cursor-pointer ${
                  selectedZone === zone.id
                    ? 'border-primary shadow-xl scale-105'
                    : 'border-slate-200 hover:border-primary/50 hover:shadow-lg'
                }`}
                onClick={() => setSelectedZone(zone.id)}
              >
                <div className="text-5xl mb-4">{zone.emoji}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{zone.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{zone.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-bold text-primary mb-2">PERFECTO PARA:</p>
                  <p className="text-sm text-slate-700">{zone.bestFor}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="font-bold text-green-800 mb-1">Ventajas</p>
                    {zone.pros.slice(0, 2).map((pro, i) => (
                      <p key={i} className="text-slate-600">✓ {pro}</p>
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-red-800 mb-1">Contras</p>
                    {zone.cons.slice(0, 2).map((con, i) => (
                      <p key={i} className="text-slate-600">✗ {con}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostels Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-primary text-5xl">backpack</span>
            <div>
              <h2 className="text-3xl font-black text-slate-900">Hostels para Mochileros</h2>
              <p className="text-slate-600">Ambiente social, cocina compartida y presupuesto ajustado</p>
            </div>
          </div>

          {filteredHostels.length === 0 ? (
            <div className="bg-slate-50 rounded-2xl p-12 text-center">
              <p className="text-slate-500">No hay hostels en esta zona. Prueba con hoteles o cambia de barrio.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHostels.map((hostel, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-primary transition-all hover:shadow-xl"
                >
                  {/* Imagen real */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={hostel.image}
                      alt={`Hostel ${hostel.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {hostel.highlight}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-slate-900">{hostel.name}</h3>
                      <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg">
                        <span className="material-symbols-outlined text-primary text-sm">star</span>
                        <span className="text-sm font-bold text-primary">{hostel.rating}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-4">{hostel.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {hostel.amenities.map((amenity, i) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-lg">
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-slate-500">Desde</p>
                        <p className="text-2xl font-black text-primary">{hostel.price}</p>
                        <p className="text-xs text-slate-500">por noche</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-slate-700">
                          {zones.find(z => z.id === hostel.zone)?.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {zones.find(z => z.id === hostel.zone)?.emoji}
                        </p>
                      </div>
                    </div>

                    <a
                      href={hostel.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="block w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white text-center font-bold py-3 rounded-xl transition-all hover:scale-105 shadow-lg"
                    >
                      Ver Disponibilidad →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-primary text-5xl">hotel_class</span>
            <div>
              <h2 className="text-3xl font-black text-slate-900">Hoteles Boutique y Confort</h2>
              <p className="text-slate-600">Parejas, lunas de miel y quienes buscan experiencia premium</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredHotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-primary transition-all hover:shadow-xl"
              >
                {/* Imagen real */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={`Hotel ${hotel.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {hotel.highlight}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{hotel.name}</h3>
                    <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-sm">star</span>
                      <span className="text-sm font-bold text-primary">{hotel.rating}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{hotel.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.amenities.map((amenity, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-lg font-medium">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-sm text-slate-500">Desde</p>
                      <p className="text-3xl font-black text-primary">{hotel.price}</p>
                      <p className="text-xs text-slate-500">por noche</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-700">
                        {zones.find(z => z.id === hotel.zone)?.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {zones.find(z => z.id === hotel.zone)?.emoji}
                      </p>
                    </div>
                  </div>

                  <a
                    href={hotel.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white text-center font-bold py-4 rounded-xl transition-all hover:scale-105 shadow-lg text-lg"
                  >
                    Ver Disponibilidad →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
            💡 Consejos para reservar alojamiento en Lisboa
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-900 mb-3">✅ Reserva con antelación si...</h3>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• Viajas en temporada alta (junio-septiembre)</li>
                <li>• Quieres hoteles boutique específicos</li>
                <li>• Viajas en festivales (Santo António en junio)</li>
                <li>• Buscas hostels sociales (se llenan rápido)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-900 mb-3">🔍 Cosas a verificar antes de reservar</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• ¿Hay ascensor? (muchos edificios históricos no tienen)</li>
                <li>• ¿Incluye aire acondicionado? (necesario en verano)</li>
                <li>• ¿Está en cuesta muy empinada? (Alfama, Graça)</li>
                <li>• ¿Cerca de metro o tranvía? (imprescindible)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-900 mb-3">💰 Cómo ahorrar dinero</h3>
              <ul className="text-sm text-orange-800 space-y-2">
                <li>• Reserva con cancelación gratis (por si encuentras mejor)</li>
                <li>• Hoteles en Parque das Nações son 30-40% más baratos</li>
                <li>• Evita viernes-domingo (más caros)</li>
                <li>• Hostels con cocina = ahorro en comidas</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-900 mb-3">⚠️ Evita estas trampas</h3>
              <ul className="text-sm text-purple-800 space-y-2">
                <li>• "Vista al castillo" puede ser 1 ventanita pequeña</li>
                <li>• Baixa-Chiado: MUY ruidoso viernes-sábado</li>
                <li>• "5 min del centro" a menudo son 15-20 min reales</li>
                <li>• Verifica reseñas recientes (último año)</li>
              </ul>
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
            ¿Ya tienes dónde dormir?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ahora descubre qué hacer cada día con nuestras Guías Digitales Interactivas. Itinerarios completos, restaurantes locales y todos los secretos.
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
