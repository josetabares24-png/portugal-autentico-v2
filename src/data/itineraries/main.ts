import type { Itinerary } from './types';

export const mainItineraries: Itinerary[] = [
  {
    id: 'lisboa-1-dia',
    slug: 'lisboa-1-dia-lo-esencial',
    title: 'Lisboa Esencial',
    description: 'La ruta más eficiente para ver Lisboa en un solo día: horarios reales, barrios clave y paradas estratégicas.',
    duration: '1 día completo',
    price: 1.99,
    image: '/images/alfama-panoramica.jpg',
    features: [
      'Ruta optimizada por horas reales',
      'Mapa con puntos GPS y accesos',
      'Restaurantes locales con rango €',
      'Spots fotográficos con mejor luz',
      'Tips locales y secretos de la ciudad'
    ],
    href: '/itinerarios/lisboa-1-dia-lo-esencial',
    featured: false,
    badge: {
      text: 'Menos que un café',
      color: 'bg-blue-500'
    }
  },
  {
    id: 'lisboa-2-dias',
    slug: 'lisboa-2-dias-completo',
    title: 'Lisboa Completa',
    description: 'Dos días redondos con Lisboa clásica y barrios con encanto, sin perder tiempo ni caer en trampas turísticas.',
    duration: '2 días completos',
    price: 2.99,
    image: '/images/elevador-santa-justa.jpg',
    features: [
      '2 rutas completas día a día',
      'Restaurantes verificados y terrazas',
      '15+ spots de fotos con horarios',
      'Tips de transporte y ahorro',
      'Cafés locales y miradores clave'
    ],
    href: '/itinerarios/lisboa-2-dias-completo',
    featured: true,
    badge: {
      text: 'MÁS VENDIDA',
      color: 'bg-orange-500'
    }
  },
  {
    id: 'lisboa-3-dias',
    slug: 'lisboa-3-dias-premium',
    title: 'Lisboa + Alrededores',
    description: 'Tres días premium con Lisboa, Sintra y la costa: rutas cerradas, logística clara y tiempos reales.',
    duration: '3 días + Sintra',
    price: 3.99,
    image: '/images/tranvia-28.jpg',
    features: [
      'Todo el pack 2 días incluido',
      'Sintra con orden ideal de visita',
      'Cascais y Cabo da Roca optimizados',
      'Consejos de transporte interurbano',
      'Ritmo equilibrado sin prisas'
    ],
    href: '/itinerarios/lisboa-3-dias-premium',
    featured: false,
    badge: {
      text: 'EXPERIENCIA COMPLETA',
      color: 'bg-purple-500'
    }
  }
];

export const specialItineraries: Itinerary[] = [
  {
    id: 'lisboa-full-week',
    slug: 'lisboa-full-week',
    title: 'Lisboa Full Week',
    description: 'Siete días completos con Lisboa y alrededores, incluyendo escapadas a Sintra, Cascais, Setúbal y Arrábida.',
    duration: '5-7 días',
    price: 5.99,
    image: '/images/hero-lisboa.jpg',
    features: [
      'Todos los itinerarios incluidos',
      'Escapadas a Sintra y Cascais',
      'Setúbal y Arrábida con playas',
      'Logística completa día a día',
      'Bonus gastronómico y miradores'
    ],
    href: '/itinerarios/lisboa-full-week',
    badge: {
      text: 'PACK COMPLETO',
      color: 'bg-emerald-500'
    }
  },
  {
    id: 'lisboa-romantica',
    slug: 'lisboa-romantica',
    title: 'Lisboa Romántica',
    description: 'Atardeceres, cenas con vistas y rincones íntimos para vivir Lisboa en pareja con ritmo relajado.',
    duration: 'Romántico',
    price: 2.99,
    image: '/images/vino-celebracion.jpg',
    features: [
      'Rutas románticas por barrios top',
      'Restaurantes con reserva recomendada',
      'Atardeceres con mejores vistas',
      'Paseos nocturnos y miradores',
      'Detalles para sorprender'
    ],
    href: '/itinerarios/lisboa-romantica',
    badge: {
      text: 'PARA PAREJAS',
      color: 'bg-pink-500'
    }
  },
  {
    id: 'lisboa-familiar',
    slug: 'lisboa-familiar',
    title: 'Lisboa Familiar',
    description: 'Plan familiar con ritmo cómodo, actividades para niños y paradas prácticas sin estrés.',
    duration: 'Familiar',
    price: 2.99,
    image: '/images/claudio-luiz-castro-cFj656inKM0-unsplash.jpg',
    features: [
      'Actividades para niños por edad',
      'Parques y zonas de descanso',
      'Restaurantes kid-friendly',
      'Transporte sencillo con carrito',
      'Tips locales y secretos de la ciudad'
    ],
    href: '/itinerarios/lisboa-familiar',
    badge: {
      text: 'CON NIÑOS',
      color: 'bg-yellow-500'
    }
  },
  {
    id: 'lisboa-fotografia',
    slug: 'lisboa-fotografia',
    title: 'Lisboa Fotografía',
    description: 'Ruta fotográfica con luz perfecta, ángulos exactos y spots sin aglomeraciones.',
    duration: 'Fotografía',
    price: 2.99,
    image: '/images/fotografo-hero.jpg',
    features: [
      'Spots fotográficos con coordenadas',
      'Golden hour + blue hour',
      'Ángulos y lentes recomendados',
      'Cafés fotogénicos incluidos',
      'Rutas cortas para mejores vistas'
    ],
    href: '/itinerarios/lisboa-fotografia',
    badge: {
      text: 'FOTÓGRAFOS',
      color: 'bg-indigo-500'
    }
  }
];
