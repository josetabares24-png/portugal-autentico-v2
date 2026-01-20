export interface GuideHighlight {
  time: string;
  place: string;
  desc: string;
}

export interface GuidePack {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  image: string;
  color: string;
  badge?: string;
  description: string;
  includes: string[];
  highlights: GuideHighlight[];
}

export const guidePacks: Record<string, GuidePack> = {
  'lisboa-1-dia-lo-esencial': {
    slug: 'lisboa-1-dia-lo-esencial',
    title: 'Lisboa Esencial',
    subtitle: '1 día completo',
    duration: '1 día',
    price: '1.99',
    image: '/images/alfama-panoramica.jpg',
    color: 'from-sky-400 to-blue-600',
    description: 'La ruta más eficiente para ver Lisboa en un solo día. Horarios reales, paradas clave y consejos locales para aprovechar cada minuto.',
    includes: [
      'Itinerario hora a hora con tiempos realistas',
      'Mapa interactivo con GPS y accesos',
      'Restaurantes locales con rango de precio',
      'Spots fotográficos con mejor luz',
      'Tips anti-colas y transporte sencillo',
      'Plan B si llueve o hay viento'
    ],
    highlights: [
      { time: '09:00', place: 'Alfama', desc: 'Barrio histórico con calles auténticas y miradores tranquilos.' },
      { time: '11:00', place: 'Miradores clásicos', desc: 'Santa Luzia + Portas do Sol con luz perfecta.' },
      { time: '13:00', place: 'Almuerzo local', desc: 'Tasca tradicional con menú del día real.' },
      { time: '15:00', place: 'Belém imprescindible', desc: 'Torre, Monasterio y pastéis en ruta eficiente.' },
      { time: '18:00', place: 'LX Factory', desc: 'Arte urbano y tiendas únicas.' },
      { time: '20:00', place: 'Bairro Alto', desc: 'Cena con vistas y paseo nocturno.' }
    ]
  },
  'lisboa-2-dias-completo': {
    slug: 'lisboa-2-dias-completo',
    title: 'Lisboa Completa',
    subtitle: '2 días completos',
    duration: '2 días',
    price: '2.99',
    image: '/images/elevador-santa-justa.jpg',
    color: 'from-amber-400 to-orange-500',
    badge: 'MAS VENDIDO',
    description: 'El fin de semana perfecto: Lisboa clásica + barrios modernos, con rutas claras, logística simple y consejos de locales.',
    includes: [
      'Itinerario completo día a día',
      'Restaurantes verificados + terrazas',
      '15+ spots fotográficos con horarios',
      'Mapa offline con todos los puntos',
      'Tips de transporte y ahorro real',
      'Guía de vida nocturna segura'
    ],
    highlights: [
      { time: 'Día 1 AM', place: 'Centro histórico', desc: 'Alfama, Graça y miradores con ruta optimizada.' },
      { time: 'Día 1 PM', place: 'Belém', desc: 'Torre, Monasterio y MAAT sin colas.' },
      { time: 'Día 1 Noche', place: 'Bairro Alto', desc: 'Cena con ambiente y plan nocturno seguro.' },
      { time: 'Día 2 AM', place: 'LX Factory', desc: 'Brunch, mercado y tiendas únicas.' },
      { time: 'Día 2 PM', place: 'Príncipe Real', desc: 'Jardines, boutiques y cafés top.' },
      { time: 'Día 2 Noche', place: 'Fado en Alfama', desc: 'Experiencia auténtica y reservada.' }
    ]
  },
  'lisboa-3-dias-premium': {
    slug: 'lisboa-3-dias-premium',
    title: 'Lisboa + Alrededores',
    subtitle: '3 días + Sintra',
    duration: '3 días',
    price: '3.99',
    image: '/images/tranvia-28.jpg',
    color: 'from-violet-500 to-purple-700',
    description: 'Tres días premium con Lisboa, Sintra y la costa. Logística clara, orden ideal y tiempos reales.',
    includes: [
      'Todo el pack 2 días incluido',
      'Día completo en Sintra (orden ideal)',
      'Cascais y Cabo da Roca sin prisas',
      '10 restaurantes en total',
      '25+ spots fotográficos',
      'Transporte interurbano explicado'
    ],
    highlights: [
      { time: 'Días 1-2', place: 'Lisboa', desc: 'Contenido completo del pack 2 días, optimizado.' },
      { time: 'Día 3 AM', place: 'Sintra', desc: 'Palacio da Pena + Quinta da Regaleira.' },
      { time: 'Día 3 PM', place: 'Cascais', desc: 'Paseo costero y centro histórico.' },
      { time: 'Día 3 Tarde', place: 'Cabo da Roca', desc: 'Atardecer en el punto más occidental.' },
      { time: 'Día 3 Noche', place: 'Cena frente al mar', desc: 'Mariscos frescos y reservas recomendadas.' },
      { time: 'Bonus', place: 'Tips extra', desc: 'Playas secretas, miradores y rutas alternativas.' }
    ]
  },
  'lisboa-full-week': {
    slug: 'lisboa-full-week',
    title: 'Lisboa Full Week',
    subtitle: 'Semana completa',
    duration: '5-7 días',
    price: '5.99',
    image: '/images/hero-lisboa.jpg',
    color: 'from-emerald-500 to-teal-600',
    badge: 'PACK COMPLETO',
    description: 'La experiencia definitiva: 7 días explorando Lisboa y sus alrededores con un plan claro día a día.',
    includes: [
      'Todos los itinerarios incluidos',
      'Escapadas a Sintra y Cascais',
      'Setúbal y Arrábida con playas',
      'Logística completa día a día',
      'Restaurantes y miradores top',
      'Bonus gastronómico y cultural'
    ],
    highlights: [
      { time: 'Día 1-2', place: 'Lisboa histórica', desc: 'Alfama, Baixa, Chiado y Belém.' },
      { time: 'Día 3', place: 'Sintra', desc: 'Palacios, jardines y ruta recomendada.' },
      { time: 'Día 4', place: 'Cascais', desc: 'Costa, paseo marítimo y centro.' },
      { time: 'Día 5', place: 'Setúbal + Arrábida', desc: 'Playas y miradores sin prisas.' },
      { time: 'Día 6', place: 'Barrios modernos', desc: 'LX Factory, Príncipe Real y cafés.' },
      { time: 'Día 7', place: 'Reserva libre', desc: 'Tu día flexible con recomendaciones.' }
    ]
  },
  'lisboa-romantica': {
    slug: 'lisboa-romantica',
    title: 'Lisboa Romántica',
    subtitle: 'Para parejas',
    duration: 'Romántico',
    price: '2.99',
    image: '/images/alfama-panoramica.jpg',
    color: 'from-pink-500 to-rose-600',
    badge: 'PARA PAREJAS',
    description: 'Atardeceres, cenas con vistas y rincones íntimos para vivir Lisboa en pareja con ritmo relajado.',
    includes: [
      'Rutas románticas por barrios top',
      'Restaurantes con reserva recomendada',
      'Miradores con mejor puesta de sol',
      'Paseos nocturnos y terrazas',
      'Detalles para sorprender',
      'Plan de fotos en pareja'
    ],
    highlights: [
      { time: '18:30', place: 'Mirador al atardecer', desc: 'El mejor punto para una puesta de sol sin multitudes.' },
      { time: '20:00', place: 'Cena con vistas', desc: 'Restaurante seleccionado con ambiente íntimo.' },
      { time: '22:00', place: 'Paseo nocturno', desc: 'Calles históricas iluminadas y ambiente local.' },
      { time: 'Día 2', place: 'Café romántico', desc: 'Cafés con encanto y pastelería portuguesa.' },
      { time: 'Día 2', place: 'Travesía en tranvía', desc: 'Ruta fotogénica y tranquila.' },
      { time: 'Bonus', place: 'Spot secreto', desc: 'Rincón especial para fotos en pareja.' }
    ]
  },
  'lisboa-familiar': {
    slug: 'lisboa-familiar',
    title: 'Lisboa en Familia',
    subtitle: 'Con niños',
    duration: '2-3 días',
    price: '2.99',
    image: '/images/tranvia-28.jpg',
    color: 'from-emerald-400 to-teal-600',
    badge: 'FAMILIAR',
    description: 'Plan familiar sin estrés: actividades por edad, pausas reales y rutas cómodas con niños.',
    includes: [
      'Itinerario adaptado a niños',
      'Restaurantes family-friendly',
      'Parques y zonas de juego',
      'Playas cercanas accesibles',
      'Tips de transporte con carrito',
      'Alternativas para días de lluvia'
    ],
    highlights: [
      { time: 'Día 1', place: 'Oceanário', desc: 'Visita principal y tiempos ideales.' },
      { time: 'Día 1', place: 'Teleférico', desc: 'Vistas y paseo corto.' },
      { time: 'Día 2', place: 'Tranvía 28', desc: 'Aventura por las colinas.' },
      { time: 'Día 2', place: 'Castillo São Jorge', desc: 'Jardines y vistas con niños.' },
      { time: 'Día 3', place: 'Playa cercana', desc: 'Plan cómodo y familiar.' },
      { time: 'Bonus', place: 'Pastéis', desc: 'Parada dulce obligatoria.' }
    ]
  },
  'lisboa-fotografia': {
    slug: 'lisboa-fotografia',
    title: 'Lisboa Fotografía',
    subtitle: 'Spots de fotos',
    duration: 'Flexible',
    price: '2.99',
    image: '/images/fotografo-hero.jpg',
    color: 'from-pink-500 to-rose-600',
    badge: 'FOTÓGRAFOS',
    description: 'PhotoWalk profesional con luz perfecta, ángulos exactos y rutas cortas para maximizar el tiempo de shooting.',
    includes: [
      'Spots fotográficos con coordenadas',
      'Golden hour + blue hour',
      'Ángulos y composiciones recomendadas',
      'Cafés fotogénicos incluidos',
      'Tips para evitar multitudes',
      'Configuración de cámara sugerida'
    ],
    highlights: [
      { time: '06:30', place: 'Amanecer', desc: 'Mirador con luz suave y vistas abiertas.' },
      { time: '08:00', place: 'Alfama sin gente', desc: 'Calles vacías y fachadas auténticas.' },
      { time: '10:00', place: 'Tranvía 28', desc: 'Foto icónica con ángulo recomendado.' },
      { time: '16:00', place: 'LX Factory', desc: 'Arte urbano y texturas.' },
      { time: '18:30', place: 'Golden hour', desc: 'Luz perfecta y siluetas.' },
      { time: '20:00', place: 'Hora azul', desc: 'Fachadas iluminadas y reflejos.' }
    ]
  }
};

export const guidePackSlugs = Object.keys(guidePacks);
