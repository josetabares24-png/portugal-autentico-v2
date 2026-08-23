import type { Itinerary } from './types';

export const mainItineraries: Itinerary[] = [
  {
    id: 'lisboa-1-dia',
    slug: 'lisboa-1-dia-lo-esencial',
    title: 'Lisboa Esencial',
    description: 'La ruta más eficiente para ver Lisboa en un solo día: horarios reales, barrios clave y paradas estratégicas.',
    duration: '1 día completo',
    image: '/images/alfama-panoramica.jpg',
    features: [
      'Ruta optimizada por horas reales',
      'Mapa con puntos GPS y accesos',
      'Restaurantes locales por presupuesto',
      'Spots fotográficos con mejor luz',
      'Tips locales y secretos de la ciudad'
    ],
    href: '/itinerarios/lisboa-1-dia-lo-esencial',
    featured: false,
    badge: {
      text: '1 DÍA',
      color: 'bg-blue-500'
    }
  },
  {
    id: 'lisboa-2-dias',
    slug: 'lisboa-2-dias-completo',
    title: 'Lisboa Completa',
    description: 'Dos días redondos con Lisboa clásica y barrios con encanto, sin perder tiempo ni caer en trampas turísticas.',
    duration: '2 días completos',
    image: '/images/funicular-bica-turistas.jpg',
    features: [
      '2 rutas completas día a día',
      // «Verificados» era una promesa que no podemos sostener: no hay un
      // proceso de verificación detrás, son recomendaciones editoriales.
      'Restaurantes y terrazas recomendados',
      '15+ spots de fotos con horarios',
      'Tips de transporte y logística',
      'Cafés locales y miradores clave'
    ],
    href: '/itinerarios/lisboa-2-dias-completo',
    featured: true,
    badge: {
      text: '2 DÍAS',
      color: 'bg-orange-500'
    }
  },
  {
    id: 'lisboa-3-dias',
    slug: 'lisboa-3-dias-premium',
    title: 'Lisboa + Alrededores',
    description: 'Tres días completos con Lisboa, Sintra y la costa: rutas cerradas, logística clara y tiempos reales.',
    duration: '3 días + Sintra',
    image: '/images/tranvia-28.jpg',
    features: [
      'Ruta completa de Lisboa en 2 días',
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
    image: '/images/parque-nacoes-torres-atardecer.jpg',
    features: [
      'Todos los itinerarios incluidos',
      'Escapadas a Sintra y Cascais',
      'Setúbal y Arrábida con playas',
      'Logística completa día a día',
      'Bonus gastronómico y miradores'
    ],
    href: '/itinerarios/lisboa-full-week',
    badge: {
      text: 'SEMANA COMPLETA',
      color: 'bg-emerald-500'
    }
  },
  {
    id: 'lisboa-romantica',
    slug: 'lisboa-romantica',
    title: 'Lisboa Romántica',
    description: 'Atardeceres, cenas con vistas y rincones íntimos para vivir Lisboa en pareja con ritmo relajado.',
    duration: 'Romántico',
    image: '/images/fado-tasca-noche.jpg',
    features: [
      'Rutas románticas por barrios top',
      'Restaurantes con reserva recomendada',
      'Atardeceres con mejores vistas',
      'Paseos nocturnos y miradores',
      'Detalles para sorprender'
    ],
    // La URL antigua redirige de forma permanente al artículo. Se apunta
    // directo al destino para que ningún enlace dependa del redirect.
    href: '/blog/lisboa-en-pareja',
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
    image: '/images/aldaba-puerta-lisboa.jpg',
    features: [
      'Actividades para niños por edad',
      'Parques y zonas de descanso',
      'Restaurantes kid-friendly',
      'Transporte sencillo con carrito',
      'Tips locales y secretos de la ciudad'
    ],
    // La URL antigua redirige de forma permanente al artículo. Se apunta
    // directo al destino para que ningún enlace dependa del redirect.
    href: '/blog/lisboa-con-ninos',
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
    image: '/images/mirador-tajo-amarras-atardecer.jpg',
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

/**
 * Los tres itinerarios principales, en el orden en que se ofrecen.
 *
 * Existe como lista explícita, y no como un filtro sobre `mainItineraries`,
 * porque el hub lee sus tarjetas de Supabase con `mainItineraries` sólo como
 * repliegue: si mañana alguien añade una guía desde el panel, la selección
 * principal no debe cambiar sola. Aquí está la decisión editorial, escrita.
 *
 * El nombre no es el comercial de la tarjeta («Lisboa Esencial»), sino el que
 * responde a la pregunta que se hace quien llega: cuántos días tengo.
 */
export const CORE_ITINERARIES: { slug: string; label: string; days: number }[] = [
  { slug: 'lisboa-1-dia-lo-esencial', label: 'Lisboa en 1 día', days: 1 },
  { slug: 'lisboa-2-dias-completo', label: 'Lisboa en 2 días', days: 2 },
  { slug: 'lisboa-3-dias-premium', label: 'Lisboa en 3 días', days: 3 },
];

/** `true` si ese slug es uno de los tres principales. */
export function isCoreItinerary(slug: string): boolean {
  return CORE_ITINERARIES.some((it) => it.slug === slug);
}
