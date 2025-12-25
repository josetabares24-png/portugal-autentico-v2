// src/data/itineraries/lisboa-2-dias.ts

import { Itinerary, ItineraryDay } from '@/types';

export const lisboa2DiasItinerary: Itinerary = {
  id: 'lisboa-2-dias-completo',
  slug: 'lisboa-2-dias-experiencia-completa',
  title: 'Lisboa Completa: 2 Días de Inmersión Total',
  subtitle: 'De Alfama a Belém - La Experiencia Equilibrada Perfecta',
  destination: 'Lisboa, Portugal',
  duration: 2,
  price: 30,
  featured: true,
  coverImage: '/images/lisboa-2dias-cover.jpg',
  gallery: [
    '/images/torre-belem.jpg',
    '/images/alfama-panoramica.jpg',
    '/images/tranvia-28.jpg',
    '/images/elevador-santa-justa.jpg',
    '/images/hero-lisboa.jpg',
  ],
  description: `Dos días es el tiempo ideal para experimentar Lisboa sin prisas pero sin desperdiciar ni un momento. Este itinerario combina lo mejor del itinerario express de 1 día con experiencias adicionales que requieren más tiempo: talleres artesanales, mercados locales, barrios menos conocidos y momentos de auténtica inmersión cultural.

Diseñado para el viajero que quiere profundidad sin saturación. Cada día tiene su personalidad: el Día 1 es Lisboa histórica y tradicional (Alfama, Castillo, Fado). El Día 2 es Lisboa imperial y artística (Belém, azulejos, gastronomía moderna).

El ritmo es perfecto: intenso pero con pausas estratégicas, cultural pero con tiempo para cerveza al atardecer, turístico pero con guiños a la Lisboa que solo conocen los locales.`,
  
  highlights: [
    'Experiencia de fado auténtico en casa tradicional de Alfama',
    'Taller hands-on de azulejos con maestro artesano',
    'Degustación de bacalao en mercado centenario',
    'Paseo en tranvía 28 en horario optimizado',
    'Acceso a miradores secretos de fotógrafos profesionales',
    'Almuerzo en tasca frecuentada solo por lisboetas',
    'Tour nocturno de bares históricos de ginjinha',
    'Clase de cocina portuguesa con chef local (opcional)',
  ],
  
  included: [
    'Guía digital premium en PDF de 60+ páginas',
    'Mapas interactivos con rutas día por día',
    'Timeline optimizada con tiempos reales de desplazamiento',
    'Contactos verificados con enlaces de reserva directa',
    'Frases en portugués con pronunciación fonética',
    'Planes alternativos para lluvia',
    'Guía de transporte público con rutas exactas',
    'Lista de apps esenciales para Lisboa',
    'Tips de fotografía para cada ubicación',
    'Soporte por email durante tu viaje',
  ],
  
  notIncluded: [
    'Entradas a monumentos (presupuesto: €25-35)',
    'Comidas y bebidas (presupuesto: €90-130 para 2 días)',
    'Alojamiento (desde €60/noche en hotel 3*)',
    'Transporte público (tarjeta 2 días: €12)',
    'Taller de azulejos (€65 si decides hacerlo)',
  ],
  
  difficulty: 'moderada',
  bestSeasons: ['Primavera', 'Otoño', 'Verano'],
  languages: ['Español', 'Portugués', 'Inglés'],
  tags: ['completo', 'cultural', 'gastronomía', 'historia', 'artesanía'],
  
  accommodation: {
    name: 'Memmo Alfama Hotel',
    type: 'boutique',
    location: {
      name: 'Memmo Alfama Hotel',
      address: 'Travessa das Merceeiras 27, 1100-348 Lisboa',
      coordinates: { lat: 38.7115, lng: -9.1301 },
    },
    priceRange: '€€€',
    rating: 9.2,
    amenities: [
      'Terraza panorámica con vistas al Tajo',
      'Wine bar con vinos portugueses',
      'Desayuno con productos locales',
      'Habitaciones con diseño contemporáneo',
      'Personal multilingüe',
    ],
    bookingLink: 'https://www.memmohotels.com/memmo-alfama/',
    description: 'Ubicación perfecta en Alfama para este itinerario. Diseño moderno en edificio histórico.',
    whyRecommended: 'Te permite explorar Alfama a pie en el día 1 y está bien conectado para Belém en día 2.',
  },
};

export const lisboa2DiasDays: ItineraryDay[] = [
  // DÍA 1 - Similar al express pero con ritmo más relajado
  {
    id: 'lisboa-2dias-dia-1',
    itineraryId: 'lisboa-2-dias-completo',
    dayNumber: 1,
    title: 'Alfama y Lisboa Medieval',
    summary: 'Día dedicado al barrio más auténtico de Lisboa: laberintos de calles estrechas, castillo medieval, gastronomía tradicional y fado por la noche.',
    
    activities: [
      // Actividades del día 1 (similar al express pero más relajado)
      // Incluiría las mismas del itinerario de 1 día pero con más tiempo en cada lugar
    ],
    
    meals: [
      {
        type: 'breakfast',
        restaurantName: 'Café Cerca Moura',
        cuisine: 'Café tradicional',
        address: 'Largo das Portas do Sol 4, 1100-411 Lisboa',
        coordinates: { lat: 38.7122, lng: -9.1285 },
        priceRange: '€',
        mustTry: ['Torrada mista', 'Galão'],
        reservationRequired: false,
      },
      {
        type: 'lunch',
        restaurantName: 'Taberna Sal Grosso',
        cuisine: 'Portuguesa tradicional',
        address: 'Calçadinha de Santo Estêvão 7, 1100-503 Lisboa',
        coordinates: { lat: 38.7106, lng: -9.1289 },
        priceRange: '€€',
        mustTry: ['Bacalao à Brás', 'Polvo à lagareiro'],
        reservationRequired: true,
      },
      {
        type: 'dinner',
        restaurantName: 'Mesa de Frades',
        cuisine: 'Portuguesa con fado',
        address: 'Rua dos Remédios 139A, 1100-404 Lisboa',
        coordinates: { lat: 38.7105, lng: -9.1289 },
        priceRange: '€€€',
        mustTry: ['Menú degustación con fado'],
        reservationRequired: true,
      },
    ],
    
    accommodation: {
      name: 'Memmo Alfama Hotel',
      type: 'boutique',
      location: {
        name: 'Memmo Alfama Hotel',
        address: 'Travessa das Merceeiras 27, 1100-348 Lisboa',
        coordinates: { lat: 38.7115, lng: -9.1301 },
      },
      priceRange: '€€€',
      rating: 9.2,
      amenities: [],
      description: 'Primera noche en Memmo Alfama.',
      whyRecommended: 'Ubicación ideal en corazón de Alfama.',
    },
    
    transportInfo: 'Día completamente caminable. Solo necesitarás transporte si llegas del aeropuerto (Metro Línea Roja + caminar 12 min).',
    
    tips: [
      'Check-in en hotel antes de las 15:00 si es posible',
      'Alfama tiene muchas cuestas - usa calzado muy cómodo',
      'Reserva Mesa de Frades al menos 2 días antes',
      'Lleva efectivo - muchos lugares no aceptan tarjeta',
      'El WiFi en Alfama es irregular - descarga mapas offline',
    ],
    
    estimatedBudget: { min: 60, max: 100 },
  },
  
  // DÍA 2 - Belém y talleres
  {
    id: 'lisboa-2dias-dia-2',
    itineraryId: 'lisboa-2-dias-completo',
    dayNumber: 2,
    title: 'Belém, Azulejos y Lisboa Imperial',
    summary: 'Descubre el Portugal de los Descubrimientos, aprende el arte del azulejo y explora la gastronomía moderna lisboeta.',
    
    activities: [
      {
        id: '2dias-day2-1',
        title: 'Desayuno en Pastéis de Belém',
        description: 'Toma el tranvía 15E temprano (8:00) para llegar a Pastéis de Belém antes de las multitudes. Los auténticos pasteles de nata con receta secreta de 1837. Pide que te los sirvan tibios.',
        time: '08:30',
        duration: 45,
        location: {
          name: 'Pastéis de Belém',
          address: 'Rua de Belém 84-92, 1300-085 Lisboa',
          coordinates: { lat: 38.6977, lng: -9.2033 },
          googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=38.6977,-9.2033',
        },
        category: 'dining',
        tags: ['desayuno', 'pastelería', 'tradicional'],
        culturalContext: 'Receta de 1837 creada por monjes. Solo 3 personas conocen la fórmula completa.',
        insiderTips: [
          'Sala interior con azulejos > terraza turística',
          'Pide "tibios" - salen cada 20 minutos del horno',
          'Máximo 6 pasteles por persona',
        ],
        price: { amount: 8, currency: 'EUR' },
        bookingRequired: false,
      },
      {
        id: '2dias-day2-2',
        title: 'Torre de Belém',
        description: 'Fortaleza del siglo XVI, Patrimonio UNESCO. Punto de partida de las expediciones portuguesas. Arquitectura manuelina espectacular. Compra entrada combinada con Monasterio.',
        time: '09:30',
        duration: 60,
        location: {
          name: 'Torre de Belém',
          address: 'Av. Brasília, 1400-038 Lisboa',
          coordinates: { lat: 38.6916, lng: -9.2160 },
          googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=38.6916,-9.2160',
        },
        category: 'sightseeing',
        tags: ['historia', 'UNESCO', 'arquitectura'],
        culturalContext: 'Construida 1514-1520. Símbolo de la Era de los Descubrimientos.',
        insiderTips: [
          'Entrada combinada Torre + Monasterio: €12',
          'Sube a la terraza superior para vistas 360°',
          'Escaleras estrechas - no para movilidad reducida',
        ],
        price: { amount: 6, currency: 'EUR' },
        bookingRequired: false,
      },
      {
        id: '2dias-day2-3',
        title: 'Monasterio de los Jerónimos',
        description: 'Obra maestra manuelina, Patrimonio UNESCO. El claustro es extraordinario - dedícale tiempo. Aquí están las tumbas de Vasco da Gama y Luís de Camões.',
        time: '11:00',
        duration: 90,
        location: {
          name: 'Mosteiro dos Jerónimos',
          address: 'Praça do Império, 1400-206 Lisboa',
          coordinates: { lat: 38.6979, lng: -9.2061 },
          googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=38.6979,-9.2061',
        },
        category: 'sightseeing',
        tags: ['historia', 'UNESCO', 'arquitectura'],
        culturalContext: 'Financiado con impuesto del comercio de especias. Tardó 100 años en completarse.',
        insiderTips: [
          'Iglesia gratis, claustro €10 (vale la pena)',
          'Audio guía incluida',
          'Busca detalles de animales y plantas asiáticas talladas',
        ],
        price: { amount: 10, currency: 'EUR' },
        bookingRequired: false,
      },
      {
        id: '2dias-day2-4',
        title: 'Almuerzo en Enoteca de Belém',
        description: 'Cocina portuguesa contemporánea en palacio del siglo XVIII. Bacalao confitado, pulpo a la brasa, arroz de marisco. Menú ejecutivo excelente relación calidad-precio.',
        time: '13:00',
        duration: 90,
        location: {
          name: 'Enoteca de Belém',
          address: 'Travessa Marta Pinto 12, 1300-414 Lisboa',
          coordinates: { lat: 38.6968, lng: -9.2042 },
          googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=38.6968,-9.2042',
        },
        category: 'dining',
        tags: ['almuerzo', 'gastronomía', 'contemporáneo'],
        culturalContext: 'Parte del grupo Grémio Literário, cocina tradicional elevada.',
        insiderTips: [
          'Reserva: +351 21 363 5106',
          'Menú ejecutivo €18 - excelente',
          'Pide vino al sommelier',
        ],
        price: { amount: 35, currency: 'EUR' },
        bookingRequired: true,
      },
      {
        id: '2dias-day2-5',
        title: 'Taller de Azulejos',
        description: 'Aprende el arte centenario del azulejo portugués. Taller de 2.5 horas con maestro azulejero. Creas tu propio azulejo decorativo (se envía a tu casa después de cocción).',
        time: '15:30',
        duration: 150,
        location: {
          name: 'Cerâmica Artística de Lisboa',
          address: 'Calçada de Santos 84, 1200-808 Lisboa',
          coordinates: { lat: 38.7071, lng: -9.1532 },
          googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=38.7071,-9.1532',
        },
        category: 'activity',
        tags: ['taller', 'arte', 'cultura', 'souvenir'],
        culturalContext: 'Azulejos llegaron en s.XV. Portugal desarrolló estilo único azul y blanco en s.XVII.',
        insiderTips: [
          'Reserva con 3 días anticipación mínimo',
          'Máximo 8 personas - experiencia íntima',
          'Azulejo se envía en 3-4 semanas (incluido)',
        ],
        price: { amount: 65, currency: 'EUR' },
        bookingRequired: true,
      },
      {
        id: '2dias-day2-6',
        title: 'Atardecer en LX Factory',
        description: 'Antigua fábrica reconvertida en hub creativo. Galerías, tiendas, librería espectacular (Ler Devagar). Sube al rooftop Rio Maravilha para atardecer sobre el Tajo.',
        time: '18:30',
        duration: 90,
        location: {
          name: 'LX Factory',
          address: 'Rua Rodrigues de Faria 103, 1300-501 Lisboa',
          coordinates: { lat: 38.7061, lng: -9.1756 },
          googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=38.7061,-9.1756',
        },
        category: 'activity',
        tags: ['arte', 'cultura alternativa', 'atardecer'],
        culturalContext: 'Complejo industrial s.XIX salvado en 2008. Epicentro creativo lisboeta.',
        insiderTips: [
          'Domingos: mercado vintage',
          'Ler Devagar tiene bicicleta voladora suspendida',
          'Tranvía 15E hasta Calvário',
        ],
        price: { amount: 0, currency: 'EUR' },
        bookingRequired: false,
      },
      {
        id: '2dias-day2-7',
        title: 'Cena en Time Out Market',
        description: 'Mercado gastronómico con puestos de los mejores chefs de Lisboa. Prueba diferentes especialidades en un solo lugar. Ambiente animado y moderno.',
        time: '20:30',
        duration: 90,
        location: {
          name: 'Time Out Market Lisboa',
          address: 'Av. 24 de Julho 49, 1200-479 Lisboa',
          coordinates: { lat: 38.7071, lng: -9.1459 },
          googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=38.7071,-9.1459',
        },
        category: 'dining',
        tags: ['cena', 'mercado', 'variedad', 'moderno'],
        culturalContext: 'Antiguo Mercado da Ribeira renovado. Concepto de food hall con lo mejor de Lisboa.',
        insiderTips: [
          'Llega antes de las 20:00 para conseguir mesa',
          'Cada persona pide en puestos diferentes',
          'Prueba el pulpo de Marlene Vieira',
        ],
        price: { amount: 30, currency: 'EUR' },
        bookingRequired: false,
      },
    ],
    
    meals: [
      {
        type: 'breakfast',
        restaurantName: 'Pastéis de Belém',
        cuisine: 'Pastelería tradicional',
        address: 'Rua de Belém 84-92, 1300-085 Lisboa',
        coordinates: { lat: 38.6977, lng: -9.2033 },
        priceRange: '€',
        mustTry: ['Pastel de nata', 'Meia de leite'],
        reservationRequired: false,
      },
      {
        type: 'lunch',
        restaurantName: 'Enoteca de Belém',
        cuisine: 'Portuguesa contemporánea',
        address: 'Travessa Marta Pinto 12, 1300-414 Lisboa',
        coordinates: { lat: 38.6968, lng: -9.2042 },
        priceRange: '€€',
        mustTry: ['Bacalao confitado', 'Arroz de marisco'],
        reservationRequired: true,
      },
      {
        type: 'dinner',
        restaurantName: 'Time Out Market',
        cuisine: 'Mercado gastronómico',
        address: 'Av. 24 de Julho 49, 1200-479 Lisboa',
        coordinates: { lat: 38.7071, lng: -9.1459 },
        priceRange: '€€',
        mustTry: ['Pulpo de Marlene Vieira', 'Croquetas de Henrique Sá Pessoa'],
        reservationRequired: false,
      },
    ],
    
    accommodation: {
      name: 'Memmo Alfama Hotel',
      type: 'boutique',
      location: {
        name: 'Memmo Alfama Hotel',
        address: 'Travessa das Merceeiras 27, 1100-348 Lisboa',
        coordinates: { lat: 38.7115, lng: -9.1301 },
      },
      priceRange: '€€€',
      rating: 9.2,
      amenities: [],
      description: 'Segunda noche en Memmo Alfama.',
      whyRecommended: 'Ubicación central para todo el itinerario.',
    },
    
    transportInfo: 'Tranvía 15E Alfama-Belém (25 min). Uber/Bolt para volver de LX Factory al hotel (€8).',
    
    tips: [
      'Compra ticket combinado Torre + Monasterio online',
      'Reserva taller de azulejos con anticipación',
      'LX Factory está mejor tarde/noche que de día',
      'Time Out Market se llena mucho - llega temprano',
      'Segundo día es más relajado que el primero',
    ],
    
    estimatedBudget: { min: 85, max: 140 },
  },
];
