export interface Itinerary {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  features: string[];
  href: string;
  featured?: boolean;
  badge?: {
    text: string;
    color: string;
  };
}

export const mainItineraries: Itinerary[] = [
  {
    id: 'lisboa-1-dia',
    title: 'Lisboa Esencial',
    description: 'Perfecto si tienes escala o poco tiempo. Lo mejor de Lisboa bien organizado.',
    duration: '1 día completo',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800',
    features: [
      'Ruta optimizada hora a hora',
      '3 restaurantes locales',
      '8 spots de fotos'
    ],
    href: '/itinerarios/lisboa-1-dia-lo-esencial',
    featured: false,
    badge: {
      text: '1 día completo',
      color: 'bg-primary'
    }
  },
  {
    id: 'lisboa-2-dias',
    title: 'Lisboa Completa',
    description: 'El favorito. Fin de semana perfecto con Belém, Alfama y los barrios con encanto.',
    duration: '2 días completos',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800',
    features: [
      '2 rutas completas día a día',
      '6 restaurantes probados',
      '15+ spots de fotos'
    ],
    href: '/itinerarios/lisboa-2-dias-completo',
    featured: true,
    badge: {
      text: '2 días completos',
      color: 'bg-primary'
    }
  },
  {
    id: 'lisboa-3-dias',
    title: 'Lisboa + Alrededores',
    description: 'La experiencia completa. Lisboa, Sintra, Cascais y Cabo da Roca.',
    duration: '3 días + Sintra',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800',
    features: [
      'Todo del pack 2 días',
      'Excursión Sintra completa',
      'Cascais y Cabo da Roca'
    ],
    href: '/itinerarios/lisboa-3-dias-sintra',
    featured: false,
    badge: {
      text: '3 días + Sintra',
      color: 'bg-primary'
    }
  }
];

export const specialItineraries: Itinerary[] = [
  {
    id: 'lisboa-full-week',
    title: 'Lisboa Full Week',
    description: 'Una semana completa: Lisboa, Sintra, Cascais, Setúbal y Arrábida.',
    duration: '5-7 días',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    features: [
      'Todos los itinerarios anteriores',
      'Setúbal y Arrábida',
      'Actividades extra'
    ],
    href: '/itinerarios/lisboa-full-week',
    badge: {
      text: '5-7 días',
      color: 'bg-emerald-500'
    }
  },
  {
    id: 'lisboa-romantica',
    title: 'Lisboa Romántica',
    description: 'Miradores al atardecer, cenas románticas y experiencias para parejas.',
    duration: 'Romántico',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
    features: [
      'Rutas románticas',
      'Restaurantes especiales',
      'Atardeceres únicos'
    ],
    href: '/itinerarios/lisboa-romantica',
    badge: {
      text: 'Romántico',
      color: 'bg-pink-500'
    }
  },
  {
    id: 'lisboa-familiar',
    title: 'Lisboa Familiar',
    description: 'Actividades para niños, ritmo relajado y restaurantes kid-friendly.',
    duration: 'Familiar',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800',
    features: [
      'Actividades para niños',
      'Ritmo relajado',
      'Restaurantes kid-friendly'
    ],
    href: '/itinerarios/lisboa-familiar',
    badge: {
      text: 'Familiar',
      color: 'bg-sky-500'
    }
  },
  {
    id: 'lisboa-fotografia',
    title: 'Lisboa Fotografía',
    description: '30+ spots, horarios de luz perfecta y rutas fotográficas.',
    duration: 'Fotografía',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800',
    features: [
      '30+ spots fotográficos',
      'Horarios de luz perfecta',
      'Rutas optimizadas'
    ],
    href: '/itinerarios/lisboa-fotografia',
    badge: {
      text: 'Fotografía',
      color: 'bg-violet-500'
    }
  }
];

// Timeline stops para Lisboa 1 día
export interface TimelineStop {
  time: string;
  title: string;
  description: string;
  tip: string;
  type: 'visit' | 'food';
}

export const lisboa1DiaTimeline: TimelineStop[] = [
  {
    time: '09:00',
    title: 'Alfama - El barrio más auténtico',
    description: 'Empieza temprano antes de que lleguen los turistas. Callejuelas medievales, ropa tendida, fado sonando desde las ventanas. Es la Lisboa real.',
    tip: 'Entra por la Catedral Sé y piérdete subiendo hacia el castillo',
    type: 'visit'
  },
  {
    time: '10:30',
    title: 'Mirador Santa Luzia',
    description: 'Las mejores vistas de Alfama y el río Tajo. Azulejos preciosos, buganvillas, perfecto para fotos. Hay un kiosco para tomar un café.',
    tip: 'El mirador de al lado (Portas do Sol) tiene más gente pero vistas diferentes',
    type: 'visit'
  },
  {
    time: '11:30',
    title: 'Castelo de São Jorge',
    description: 'Vistas 360 de Lisboa. Pasea por las murallas, ve los pavos reales. Vale la pena subir aunque la entrada sea de pago.',
    tip: 'Entrada: 15 EUR | Tip: Después de las 15:00 hay menos gente',
    type: 'visit'
  },
  {
    time: '13:00',
    title: 'Almuerzo en Tasca do Chico',
    description: 'Tasca auténtica donde comen los locales. Menú del día por 8-10 EUR. Pide lo que tengan ese día. Fado en vivo por las noches.',
    tip: 'Alternativa: Taberna da Rua das Flores (un poco más caro pero espectacular)',
    type: 'food'
  },
  {
    time: '15:00',
    title: 'Belém - Torre y Monasterio',
    description: 'Toma el tranvía 15E o Uber (15 min). La Torre de Belém y el Monasterio de los Jerónimos son patrimonio UNESCO. Imprescindibles.',
    tip: 'Compra entradas online para el Monasterio. La iglesia es gratis y espectacular',
    type: 'visit'
  },
  {
    time: '16:30',
    title: 'Pastéis de Belém',
    description: 'Los pastéis de nata originales desde 1837. La cola parece larga pero avanza rápido. Pídelos calientes con canela.',
    tip: '1.30 EUR cada uno | El salón de atrás tiene menos cola que la tienda',
    type: 'food'
  },
  {
    time: '18:00',
    title: 'LX Factory',
    description: 'Antigua fábrica convertida en espacio creativo. Tiendas, galerías, street art, restaurantes. Ambiente muy cool para el atardecer.',
    tip: 'Ler Devagar es una librería increíble dentro de la fábrica',
    type: 'visit'
  },
  {
    time: '20:00',
    title: 'Cena en Bairro Alto',
    description: 'Vuelve al centro para cenar en Bairro Alto. Ambiente animado, muchos restaurantes. Después puedes pasear por las calles con vida nocturna.',
    tip: 'Recomendado: Café Buenos Aires (carnes) o Cervejaria Trindade (mariscos, edificio histórico)',
    type: 'food'
  }
];

// Features incluidas en los packs
export const includedFeatures = [
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    title: 'Itinerario hora a hora',
    description: 'Cada minuto optimizado para que no pierdas tiempo'
  },
  {
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    title: '3 restaurantes locales',
    description: 'Con precios, qué pedir y cómo llegar'
  },
  {
    icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
    title: '8 spots de fotos',
    description: 'Los mejores ángulos y horarios de luz'
  },
  {
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    title: 'Mapa offline',
    description: 'Google Maps con todos los puntos marcados'
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Tips para evitar colas',
    description: 'Horarios secretos que usan los locales'
  },
  {
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    title: 'Alternativas si llueve',
    description: 'Plan B para cada momento del día'
  }
];
