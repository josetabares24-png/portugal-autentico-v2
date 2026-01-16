export interface Itinerary {
  id: string;
  slug?: string;
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
    slug: 'lisboa-1-dia-lo-esencial',
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
    slug: 'lisboa-2-dias-completo',
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
    slug: 'lisboa-3-dias-premium',
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
    slug: 'lisboa-full-week',
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
    slug: 'lisboa-romantica',
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
    slug: 'lisboa-familiar',
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
    slug: 'lisboa-fotografia',
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
  image?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  googleMapsUrl?: string;
}

export const lisboa1DiaTimeline: TimelineStop[] = [
  {
    time: '09:00',
    title: 'Alfama - El barrio más auténtico',
    description: 'Aquí es donde empieza tu día perfecto en Lisboa. Sal temprano, tipo 9 de la mañana, cuando las calles todavía están tranquilas y solo ves a los vecinos abriendo sus tiendas. Alfama es el único barrio que sobrevivió al terremoto de 1755, así que caminar por aquí es literalmente caminar por la historia medieval de la ciudad. Vas a ver ropa tendida cruzando las calles, escuchar fado saliendo de alguna ventana, y oler a bacalao cocinándose para el almuerzo. No uses Google Maps aquí - lo mejor es perderte. En serio. Las mejores fotos y los rincones más bonitos están donde no hay turistas.',
    tip: '📍 Empieza en la Catedral Sé (coordenadas abajo) y sube caminando hacia el castillo. Todas las calles llevan arriba. Si ves una escalera, súbela. Confía en mí.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7109, lng: -9.1333 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7109,-9.1333'
  },
  {
    time: '10:30',
    title: 'Mirador Santa Luzia',
    description: 'Después de caminar por Alfama, llegas a este mirador y entiendes por qué Lisboa se llama "la ciudad de las siete colinas". Las vistas son una postal: los tejados naranjas de Alfama bajando hacia el río Tajo, el panteón nacional a lo lejos, y si tienes suerte, algún barco de crucero pasando. Hay azulejos antiguos en las paredes que cuentan la historia de Lisboa antes del terremoto - tómate un momento para verlos. Al lado hay un kiosco donde puedes tomar un café con los locales. Y las buganvillas rosadas que cuelgan por todas partes hacen que las fotos se hagan solas.',
    tip: '🎥 Mejor hora para fotos: 10-11am (luz perfecta). Hay otro mirador justo al lado (Portas do Sol) con menos gente y vistas hacia otro lado. Visítalos ambos.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1588642411190-3e72e93b1497?w=800',
    coordinates: { lat: 38.7115, lng: -9.1294 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7115,-9.1294'
  },
  {
    time: '11:30',
    title: 'Castelo de São Jorge',
    description: 'Este castillo no es solo un castillo - es donde nació Lisboa. Literalmente. Los fenicios fundaron aquí el primer asentamiento hace 3000 años porque desde esta colina se ve todo: quién viene por el río, quién viene por tierra. Después vinieron los romanos, luego los moros (que construyeron lo que ves ahora en el siglo XI), y finalmente los cristianos en 1147. La entrada cuesta 15 euros, sí, pero créeme: cuando subas a las murallas y veas Lisboa desplegada 360 grados a tus pies, vas a entender por qué todos querían conquistar este lugar. Hay pavos reales sueltos (no preguntes por qué, nadie lo sabe), jardines arqueológicos donde puedes ver ruinas de 2500 años, y un periscope antiguo que proyecta la ciudad en tiempo real. Tómate tu tiempo aquí - hay bancos en la sombra, fuentes, y honestamente, es el mejor lugar para entender la geografía de Lisboa antes de seguir explorando.',
    tip: '💰 Entrada: 15€ adultos, 7.50€ estudiantes. TRUCO: Ve después de las 15:00 cuando ya se fue medio mundo, o compra online para evitar cola. Lleva agua, hace calor aquí arriba.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.7139, lng: -9.1334 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7139,-9.1334'
  },
  {
    time: '13:00',
    title: 'Almuerzo en Tasca do Chico',
    description: 'Okay, hora de comer. Y no, no vamos a un sitio turístico. Tasca do Chico es donde van los trabajadores del barrio a almorzar. Está en Bairro Alto (baja del castillo y camina 10 minutos), es pequeño, tiene como 8 mesas, y no tiene menú impreso. La dueña te dice qué hay ese día - normalmente algún guiso de bacalao, carne de cerdo alentejana, y siempre arroz de marisco si hay suerte. El menú del día cuesta entre 8-10 euros e incluye entrada, plato principal, postre, café y vino de la casa. Sí, vino incluido. Es Portugal. Por las noches (después de las 21:00) hay fado en vivo y se llena de lisboetas, pero al mediodía es perfecto - tranquilo, auténtico, y la comida es exactamente lo que necesitas: casera, generosa, y deliciosa. Si hay caldeirada (guiso de pescado), pídela. Si no te gusta el bacalao (¿en serio?), siempre tienen alguna opción de carne.',
    tip: '🍷 No reservan para el almuerzo - llegas y esperas mesa (máximo 10 min). ALTERNATIVA: Si está cerrado o lleno, ve a "Taberna da Rua das Flores" (2 calles más arriba) - más caro (15-20€) pero increíble.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    coordinates: { lat: 38.7131, lng: -9.1443 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7131,-9.1443'
  },
  {
    time: '15:00',
    title: 'Belém - Torre y Monasterio',
    description: 'Después de comer, toma el tranvía 15E desde Praça da Figueira (o un Uber, 15 minutos, 8-10€) y vete a Belém. Este barrio es donde Portugal se hizo grande - literalmente. Desde aquí salieron las carabelas en el siglo XV a "descubrir" medio mundo (Brasil, India, Japón... básicamente todo). La Torre de Belém es ese icono que has visto en todas las fotos - una torre de defensa medieval construida en 1520 que parece un castillo de arena gigante al borde del río Tajo. El Monasterio de los Jerónimos está justo al lado y es BRUTAL - es gótico manuelino (un estilo portugués único lleno de cuerdas, anclas y motivos marítimos en la piedra). Fue construido con el oro que traían de la India, y cuando entras entiendes el presupuesto que tenían. La iglesia es gratis y vale MÁS que el monasterio - techos de 25 metros, columnas que parecen árboles de piedra, y la tumba de Vasco da Gama (el tipo que abrió la ruta a India). Patrimonio de la UNESCO por algo.',
    tip: '🎫 IMPORTANTE: Compra tickets online para el Monasterio (12€) - la cola puede ser de 1 hora. La iglesia es GRATIS y está dentro del mismo complejo. Torre de Belém: 6€, también compra online. TRUCO: Ve primero a la Torre (menos gente), luego al Monasterio.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
    coordinates: { lat: 38.6979, lng: -9.2061 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6979,-9.2061'
  },
  {
    time: '16:30',
    title: 'Pastéis de Belém',
    description: 'Vale, ahora lo que viniste a hacer a Lisboa: comer el pastel de nata ORIGINAL. No es un pastel de nata normal - es EL pastel de nata. La receta secreta está guardada en una sala a la que solo entran 3 maestros pasteleros, y nadie más en el mundo sabe cómo hacerlos exactamente así. Se hacen aquí desde 1837 con la receta original del monasterio de al lado (los monjes los inventaron, obviamente). La cola parece intimidante pero avanza rápido - en 10 minutos estás dentro. Hay DOS zonas: la tienda (para llevar) y el salón gigante de atrás con azulejos azules (para comer ahí). Ve al salón - es más rápido y puedes sentarte. Pide los pasteles "quentes" (calientes, recién salidos del horno) con canela y azúcar en polvo. Cuestan 1.30€ cada uno. Pide mínimo 2. O 6. Nadie te juzga. Con un café o un galão (café con leche portugués). Hay gente que viene a Lisboa solo por esto.',
    tip: '🥐 ORDEN PERFECTA: 2-3 pastéis quentes, un galão, y siéntate en el salón de atrás. Espolverea canela, no tengas miedo. Van a estar a 200°C así que sopla antes de morder. El salón de atrás tiene MENOS COLA que la tienda de la entrada.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=800',
    coordinates: { lat: 38.6976, lng: -9.2031 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6976,-9.2031'
  },
  {
    time: '18:00',
    title: 'LX Factory',
    description: 'Ahora que estás en modo coma de azúcar, vamos a un sitio completamente diferente. LX Factory es una antigua fábrica de impresión de 1846 que se convirtió en el espacio creativo más cool de Lisboa. Piensa en: Grafitis en paredes industriales, tiendas de diseño independiente, galerías de arte, cafés hipster, y la librería más instagrameable de Portugal (Ler Devagar - tiene libros del suelo al techo de 10 metros con escaleras vintage). Es donde la Lisboa alternativa se reúne - diseñadores, artistas, creativos. Hay mercados de comida callejera, terrazas con vistas al puente 25 de Abril (el Golden Gate portugués), y el atardecer desde aquí es perfecto. Si necesitas un café para recuperarte, ve a LandScape - tienen vistas al puente. Si quieres algo más fuerte, el bar de vinos "By The Wine" tiene cientos de vinos portugueses. Es un buen momento para ralentizar, sentarte, y absorber que llevas 9 horas caminando por una de las ciudades más bonitas de Europa.',
    tip: '🎨 Abre de 12:00 a 00:00 todos los días. Domingos hay mercado vintage. Ler Devagar cierra a las 20:00 - no llegues tarde. Desde Belém son 10 min en Uber (5-7€) o puedes caminar 20 min por el río.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800',
    coordinates: { lat: 38.7065, lng: -9.1799 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7065,-9.1799'
  },
  {
    time: '20:00',
    title: 'Cena en Bairro Alto',
    description: 'Para cerrar el día perfecto, volvemos al centro histórico - específicamente Bairro Alto, el barrio bohemio donde los lisboetas van a cenar y salir desde hace 500 años. Las calles son estrechas, empedradas, llenas de grafitis y restaurantes pequeños con 10 mesas. La energía es única - antes de las 22:00 es tranquilo (perfecto para cenar), después se llena de gente con cervezas en la calle, músicos tocando en las esquinas, y bares abiertos hasta las 2am. Para cenar tienes mil opciones: Si quieres carnes a la parrilla, ve a "Café Buenos Aires" (argentino pero buenísimo, 15-25€). Si quieres mariscos en un edificio histórico con azulejos del siglo XVIII, "Cervejaria Trindade" es espectacular (20-35€). Si quieres algo más local y barato, "Restaurante Bota Alta" tiene comida portuguesa auténtica (menú 12-18€). Después de cenar, camina por las calles, tómate algo en algún bar, y disfruta. Te has ganado estas cervezas después del día que tuviste.',
    tip: '🍽️ RESERVA para cenar (especialmente viernes/sábado) - llama por la tarde. Si no reservaste, llega a las 19:30 antes del rush. POST-CENA: Para drinks, "Park Bar" (rooftop con vistas) o "Pavilhão Chinês" (bar museo lleno de objetos antiguos, es surrealista).',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    coordinates: { lat: 38.7142, lng: -9.1459 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7142,-9.1459'
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
