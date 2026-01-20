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
    description: 'La ruta más eficiente para ver Lisboa en un solo día: horarios reales, barrios clave y paradas estratégicas.',
    duration: '1 día completo',
    price: 1.99,
    image: '/images/alfama-panoramica.jpg',
    features: [
      'Ruta optimizada por horas reales',
      'Mapa con puntos GPS y accesos',
      'Restaurantes locales con rango €',
      'Spots fotográficos con mejor luz',
      'Plan B si llueve o hay colas'
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
      'Alternativas en días de lluvia'
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

// Timeline stops para Lisboa 2 días - DÍA 1
export const lisboa2DiasDia1Timeline: TimelineStop[] = [
  {
    time: '09:00',
    title: 'Baixa-Chiado - Corazón histórico',
    description: 'Empezamos en la Baixa, el centro neurálgico de Lisboa reconstruido después del terremoto de 1755 por el Marqués de Pombal. Este barrio fue el primer ejemplo de planificación urbana moderna en Europa - calles en cuadrícula perfecta, edificios de la misma altura, y plazas simétricas. Empieza en Praça do Comércio (la plaza más grande de Europa junto al río) donde llegaban los barcos con las especias de la India. Camina por Rua Augusta (la calle peatonal principal llena de tiendas y artistas callejeros) hasta Rossio. Súbete al Elevador de Santa Justa (3€) - un ascensor de hierro de 1902 que parece sacado de París. Las vistas desde arriba son brutales: toda la Baixa desplegada hasta el río. Después baja a Chiado, el barrio intelectual donde Pessoa tomaba café y Fernando Pessoa escribía poesía. Entra a "A Brasileira" (el café más famoso) y verás la estatua de Pessoa sentado en la terraza.',
    tip: '🎫 Elevador Santa Justa: 5.30€ o GRATIS con la Lisboa Card. TRUCO: En vez de pagar el elevador, sube por las Escadas do Carmo (escaleras gratis al lado) y entras al mirador por arriba (1.50€ vs 5.30€).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: '11:30',
    title: 'Tranvía 28 - La experiencia lisboeta',
    description: 'No es solo transporte - es UNA EXPERIENCIA. El tranvía 28 es un tranvía amarillo de madera de 1930 que trepa colinas imposibles, pasa por calles tan estrechas que casi rozas las paredes, y atraviesa los barrios más auténticos de Lisboa. Sube en Martim Moniz o Graça (menos gente que en Baixa) y aguanta todo el recorrido hasta Campo de Ourique (40 minutos de película). Vas a pasar por: Graça (barrio residencial en la colina), Alfama (laberinto medieval), Sé Catedral, Baixa, Estrela (basílica blanca gigante), y Campo de Ourique. Los conductores maniobran estas máquinas antiguas con una precisión milimétrica - parece imposible que quepan por esas calles. Ojo con los carteristas - van en el tranvía buscando turistas distraídos. Mochila adelante, manos en los bolsillos.',
    tip: '🚋 Billete: 3€ en el conductor (solo efectivo) o 1.50€ con la tarjeta Viva Viagem recargable. MEJOR HORARIO: 9-11am o después de las 18:00 (menos turistas). Evita 12-17h que va REPLETO.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1597426509446-cd65442af149?w=800',
    coordinates: { lat: 38.7169, lng: -9.1399 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7169,-9.1399'
  },
  {
    time: '13:00',
    title: 'Almuerzo en Graça - Restaurante O Pitéu',
    description: 'Después del tranvía 28, bájate en Graça y busca "O Pitéu da Graça". Este restaurante NO está en ninguna guía turística (todavía) pero los vecinos del barrio hacen cola para comer aquí. Es una tasca tradicional portuguesa con manteles de papel, platos de cerámica, y la dueña que te trata como si fueras su sobrino. El menú del día cuesta 9-11€ e incluye: entrada (sopa o ensalada), plato principal, postre, café, y medio litro de vino. Los platos típicos: arroz de pato (duck rice - INCREÍBLE), bacalao à Brás (bacalao desmigado con patatas paja y huevos), carne de porco alentejana (cerdo con almejas, sí leíste bien), y los domingos hacen cozido à portuguesa (cocido portugués con todas las carnes habidas y por haber). Las porciones son generosas - no pidas dos platos porque no vas a poder.',
    tip: '💰 Menú del día: 9-11€. No reservan, llegas y esperas mesa (10-15 min máximo). Abre solo almuerzo (12:00-15:00) de lunes a sábado. Domingos cerrado. ALTERNATIVA: "Tasca da Graça" (enfrente) también es buenísima.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    coordinates: { lat: 38.7169, lng: -9.1329 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7169,-9.1329'
  },
  {
    time: '15:00',
    title: 'Mirador da Senhora do Monte',
    description: 'Después de comer, camina 5 minutos cuesta arriba hasta el mirador secreto de Lisboa. A diferencia de los miradores turísticos (Santa Luzia, Portas do Sol) que están LLENOS de gente, este casi nadie lo conoce. Es el punto más alto de Lisboa (después del castillo) y las vistas son de 270 grados: ves el Castelo, toda Alfama bajando hacia el río, el puente 25 de Abril a lo lejos, el Cristo Rei al otro lado del Tajo, y la ciudad desplegada hasta donde alcanza la vista. Hay bancos en la sombra bajo los árboles, silencio (solo pájaros y alguna conversación bajita), y una ermita pequeña del siglo XVIII. Los lisboetas vienen aquí al atardecer con una cerveza Super Bock del quiosco de abajo. Es el lugar perfecto para procesar que estás en una de las ciudades más bonitas de Europa.',
    tip: '📸 MEJOR MOMENTO: Atardecer (18:30-20:00 en verano, 17:00-18:30 en invierno). Lleva algo para beber del supermercado de abajo. Hay bancos en la sombra. Perfecto para sentarse 30-45 minutos.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
    coordinates: { lat: 38.7176, lng: -9.1316 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7176,-9.1316'
  },
  {
    time: '17:00',
    title: 'Panteón Nacional + Feira da Ladra',
    description: 'Baja caminando hacia el Panteón Nacional - ese edificio blanco gigante con cúpula que ves desde todos los miradores. Fue una iglesia barroca que empezaron a construir en 1582 y tardaron 284 AÑOS en terminar (de ahí el dicho portugués "obras de Santa Engrácia" para algo que nunca se acaba). Ahora es el panteón donde están enterrados los grandes portugueses: presidentes, escritores, fadistas como Amália Rodrigues. La entrada cuesta 4€ pero SÚBETE A LA CÚPULA - son 180 escalones pero las vistas a 360° justifican cada paso. Si es martes o sábado, la Feira da Ladra (mercado de pulgas más antiguo de Lisboa desde 1272) está montada justo al lado. Venden de todo: antigüedades, ropa vintage, discos de vinilo, azulejos antiguos, cachivaches increíbles.',
    tip: '🎫 Entrada: 4€, gratis el primer domingo de mes. HORARIO: Martes-domingo 10:00-17:00 (18:00 verano). Feira da Ladra: Solo martes y sábados 8:00-15:00. Regatea TODO (es parte del juego).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1567949485386-e670e582e537?w=800',
    coordinates: { lat: 38.7143, lng: -9.1254 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7143,-9.1254'
  },
  {
    time: '19:30',
    title: 'Cena + Fado en Alfama',
    description: 'La experiencia quintessential lisboeta: cena con fado en vivo en Alfama. El fado es Patrimonio Inmaterial de la Humanidad por la UNESCO - canciones melancólicas sobre saudade (nostalgia portuguesa), el mar, y amores perdidos. Hay dos tipos de sitios: (1) Restaurantes turísticos caros (40-60€) con show programado, o (2) Tascas auténticas donde el fado surge espontáneamente después de las 22:00 (15-25€). Recomiendo las auténticas: "Tasca do Chico" (la misma del día 1 pero de noche tiene fado espontáneo, gratis, solo pagas la cena), "Mesa de Frades" (íntimo, 20-30€), o "Parreirinha de Alfama" (más formal, 35-45€ con espectáculo). La regla sagrada: cuando alguien canta fado, SILENCIO ABSOLUTO. Ni susurros. Es una falta de respeto gravísima interrumpir.',
    tip: '🎭 RESERVA OBLIGATORIA (llama por la tarde). Tasca do Chico: fado gratis + cena 15-20€, llega 21:00-21:30 para buena mesa. Mesa de Frades: más organizado, reserva online. La comida en sitios de fado suele ser mediocre - vas por la experiencia, no por la comida.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
    coordinates: { lat: 38.7117, lng: -9.1288 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7117,-9.1288'
  }
];

// Timeline stops para Lisboa 2 días - DÍA 2
export const lisboa2DiasDia2Timeline: TimelineStop[] = [
  {
    time: '09:00',
    title: 'Belém - Monumentos Marítimos',
    description: 'El día 2 empezamos en Belém, el barrio desde donde Portugal se lanzó a conquistar medio mundo. Toma el tranvía 15E desde Praça da Figueira (15 min, 3€) o Uber (10-12€). Arranca en la Torre de Belém - esa torre medieval que parece un castillo de arena al borde del Tajo. Fue construida en 1515 para defender la entrada del puerto y se ha convertido en EL ícono de Lisboa. La cola puede ser larga (1 hora en verano) así que compra online o llega a las 9:00 cuando abren. Por dentro hay 5 pisos conectados por escaleras de caracol super estrechas, salas con armaduras, cañones, y las vistas desde la terraza superior son espectaculares. Justo al lado está el Padrão dos Descobrimentos (Monumento a los Descubrimientos) - un monumento gigante con forma de carabela con 33 estatuas de los exploradores portugueses. Sube arriba (6€) para ver el mosaico del mapamundi en el suelo que muestra todas las rutas de exploración.',
    tip: '🎫 Torre de Belém: 6€, Monumento Descubrimientos: 6€, o Pack combinado: 12€. TRUCO: Compra la Lisboa Card (21€/24h) que incluye TODO en Belém + transporte público ilimitado. EVITA COLAS: Llega 8:45-9:00.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.6916, lng: -9.2158 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6916,-9.2158'
  },
  {
    time: '11:00',
    title: 'Monasterio de los Jerónimos',
    description: 'Camina 10 minutos por la orilla del río hasta el Monasterio de los Jerónimos - posiblemente el edificio más impresionante de Portugal. Es gótico manuelino (estilo único portugués del siglo XVI lleno de motivos marítimos: cuerdas, anclas, carabelas talladas en piedra). Fue construido con el 5% del oro que traían de la India - el presupuesto era básicamente infinito. La iglesia es GRATIS y es lo mejor: techos abovedados de 25 metros que parecen palmeras de piedra, la tumba de Vasco da Gama (el tipo que abrió la ruta marítima a India), y la de Luís de Camões (el Shakespeare portugués). El claustro del monasterio cuesta 12€ y es precioso pero sinceramente la iglesia ya vale el viaje. Patrimonio de la UNESCO y con razón - cuando entras entiendes por qué Portugal era una superpotencia en el siglo XVI.',
    tip: '💡 LA IGLESIA ES GRATIS (entrada lateral izquierda). El Monasterio son 12€ extra (claustro). Si tienes Lisboa Card = gratis todo. IMPRESCINDIBLE: Llega antes de las 11:00 o después de las 15:00 para evitar grupos de cruceros.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
    coordinates: { lat: 38.6977, lng: -9.2062 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6977,-9.2062'
  },
  {
    time: '12:30',
    title: 'Pastéis de Belém (La peregrinación obligatoria)',
    description: 'Ya sabes qué viene ahora. Pastéis de Belém - la fábrica original desde 1837 con la receta secreta que solo conocen 3 maestros pasteleros. No es marketing: estos pasteles SÍ saben diferente a todos los demás "pastéis de nata" que comiste. La masa es más hojaldrada (tiene 18 capas), la crema más cremosa, y los hacen en hornos de 400°C que les dan ese toque caramelizado perfecto. La cola de la tienda asusta pero avanza rápido. IGNORA LA COLA DE LA TIENDA - entra directo al salón grande de atrás (con azulejos azules del siglo XIX) que tiene menos cola y puedes sentarte. Pide los pasteles "quentes" (calientes), espolvorea canela y azúcar glass, y acompaña con un galão (café con leche). Van a estar a 200°C así que sopla. Mínimo 3 por persona. No es negociable.',
    tip: '🥐 ESTRATEGIA PRO: Ignora la cola de la entrada (para llevar). Entra directo al salón gigante de atrás → menos cola, te sientas, comes caliente. Precio: 1.30€/unidad. Pide "3 pastéis quentes, um galão". El salón de atrás tiene 400 asientos - siempre hay sitio.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=800',
    coordinates: { lat: 38.6976, lng: -9.2031 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6976,-9.2031'
  },
  {
    time: '14:30',
    title: 'MAAT - Museo de Arte Moderno',
    description: 'Después del coma de azúcar, camina 10 minutos por la orilla del río hasta el MAAT (Museo de Arte, Arquitectura y Tecnología). El edificio ya vale la visita - arquitectura contemporánea blanca y curva diseñada por Amanda Levete que parece una ola congelada. Por dentro hay exposiciones rotativas de arte contemporáneo, diseño, y arquitectura. Pero lo mejor es el TECHO - puedes caminar por encima del museo (gratis, no hace falta entrada) y las vistas al puente 25 de Abril, el Cristo Rei, y el Tajo son perfectas. Es uno de los pocos sitios modernos de Lisboa (casi todo es histórico) y el contraste es refrescante. Si no te va el arte contemporáneo, solo sube al techo, toma fotos, y sigue.',
    tip: '🎫 Entrada exposiciones: 9€. Subir al techo: GRATIS (acceso por rampa exterior). Horario: 11:00-19:00 (cerrado martes). El techo es perfecto para atardecer pero si vienes ahora al mediodía lo tienes para ti solo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800',
    coordinates: { lat: 38.6936, lng: -9.1980 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6936,-9.1980'
  },
  {
    time: '16:30',
    title: 'LX Factory - Hub Creativo',
    description: 'Desde el MAAT, camina 15 minutos (o Uber 5€) hasta LX Factory - antigua fábrica de impresión reconvertida en epicentro cool de Lisboa. Imagina: naves industriales de ladrillo de 1846 llenas de grafitis, estudios de diseño, agencias creativas, cafés hipster, tiendas de ropa independiente, galerías de arte, y la librería Ler Devagar (libros del suelo al techo de 10 metros con una bici voladora suspendida en el aire). Los domingos hay mercado vintage, los jueves food trucks, y siempre ambiente. Es donde los creativos lisboetas trabajan, comen, y se toman cervezas después del trabajo. Siéntate en alguna terraza bajo el puente 25 de Abril, pide una cerveja y unos petiscos (tapas portuguesas), y absorbe que estás viviendo la Lisboa alternativa que no sale en las postales.',
    tip: '☕ LandScape café: vistas al puente. By The Wine: 3000 vinos portugueses, degustación 12€. Ler Devagar librería: cierra 20:00, no llegues tarde. Domingos: mercado vintage 11:00-19:00. TODO es instagrameable aquí.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800',
    coordinates: { lat: 38.7065, lng: -9.1799 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7065,-9.1799'
  },
  {
    time: '20:00',
    title: 'Cena en Time Out Market + Cais do Sodré',
    description: 'Para cerrar el viaje perfecto, vamos al Time Out Market en Mercado da Ribeira. Es un food hall donde reunieron a los mejores chefs y restaurantes de Lisboa bajo un mismo techo. Hay 40 stands de comida: marisco fresco, steaks de carne ibérica, sushi, tacos, hamburguesas gourmet, pasteles, vinos, todo. El concepto: caminas, eliges lo que te llama, pides, y comes en las mesas centrales compartidas. Precios: 10-20€ por plato. Recomendados: Alexandre Silva (estrella Michelin, platos 12-18€), Henrique Sá Pessoa (otra estrella Michelin), Sea Me (mariscos), Miguel Castro e Silva (carne). Después de cenar, Cais do Sodré (el barrio justo afuera) es LA zona de fiesta de Lisboa. Calle Rosa (Pink Street) está llena de bares, música en vivo, y gente en la calle con cervezas hasta las 3am. Si quieres seguir, tienes 50 bares en 200 metros.',
    tip: '🍽️ Time Out Market: 12:00-00:00 todos los días. Se llena 20:00-22:00 (llega 19:30 o espera mesa). POST-CENA: Pensão Amor (bar en antiguo burdel, ambiente único), Musicbox (discoteca techno/electrónica), o simplemente Pink Street con cerveza.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    coordinates: { lat: 38.7069, lng: -9.1467 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7069,-9.1467'
  }
];

// Timeline stops para Lisboa 3 días - DÍA 3 (SINTRA + CASCAIS + CABO DA ROCA)
export const lisboa3DiasDia3Timeline: TimelineStop[] = [
  {
    time: '08:00',
    title: 'Salida a Sintra en tren',
    description: 'Hoy es el día de la escapada épica a Sintra. Sal temprano de Lisboa porque vas a necesitar el día completo. Ve a la estación de Rossio o Oriente y toma el tren a Sintra (40 minutos, 2.30€ cada trayecto o gratis con Lisboa Card). Sintra es Patrimonio de la Humanidad UNESCO - una villa de cuento de hadas en las montañas llena de palacios de colores, castillos medievales, quintas románticas, y bosques místicos. Lord Byron la llamó "el paraíso en la tierra" y tenía razón. La estrategia es crucial: Sintra tiene 4-5 atracciones principales y todas están en colinas separadas. NO intentes hacerlo andando (son cuestas de 30%+ con calor). Usa el bus 434 que conecta todas las atracciones (5€ day pass, o gratis con Lisboa Card). El orden perfecto: Palácio Nacional → Quinta da Regaleira → Palácio da Pena. Los dos primeros están en el pueblo, el Pena está arriba de todo (20 min en bus).',
    tip: '🚂 Tren Rossio→Sintra: 2.30€ (o gratis con Lisboa Card). Bus 434 circular: 5€ day pass ilimitado. IMPRESCINDIBLE: Sal a las 8am de Lisboa para llegar a Sintra 9am y evitar las hordas de turistas. Compra entradas online la noche anterior (ahorras 1-2h de cola).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.7978, lng: -9.3909 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7978,-9.3909'
  },
  {
    time: '09:30',
    title: 'Quinta da Regaleira - El palacio mágico',
    description: 'Empieza aquí porque abre a las 9:30 y es cuando menos gente hay. La Quinta da Regaleira es un palacio neogótico de 1910 construido por un millonario masón obsesionado con el ocultismo, la alquimia, y los templarios. El palacio es bonito pero lo BRUTAL son los jardines: 4 hectáreas de bosque con túneles secretos, grutas, lagos misteriosos, torres de iniciación, símbolos masónicos escondidos, y el Poço Iniciático - un pozo de 27 metros de profundidad con una escalera de caracol que baja 9 niveles (simbolizando los 9 círculos del infierno de Dante). Bajas por la escalera en espiral, llegas al fondo donde hay una rosa de los vientos en el suelo, y sales por un túnel secreto que pasa por debajo de cascadas. Es como una película de Indiana Jones. Date 2 horas mínimo - hay que explorar TODO.',
    tip: '🎫 Entrada: 12€ online (10€ en taquilla pero 1h de cola). HORARIO: 9:30-18:00. IMPERDIBLE: El Pozo Iniciático (Poço Iniciático) y los túneles. Lleva linterna del móvil para los túneles oscuros. Si llueve, los túneles pueden tener agua - lleva calzado cerrado.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599135777551-8cfe68fac83f?w=800',
    coordinates: { lat: 38.7961, lng: -9.3963 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7961,-9.3963'
  },
  {
    time: '12:00',
    title: 'Palácio da Pena - El castillo de colores',
    description: 'Súbete al bus 434 hasta la última parada: Palácio da Pena. Este es el castillo de Disney de la vida real - un palacio romántico de 1854 pintado de amarillo, rojo, morado, y rosa en lo alto de una montaña con vistas de 360° hasta el Atlántico. Fue construido por el rey consorte Fernando II (que era alemán y claramente había visto muchos castillos bávaros) sobre las ruinas de un monasterio del siglo XV. Por fuera parece una mezcla de castillo medieval, palacio árabe, y chalé suizo. Por dentro está amueblado tal cual lo dejó la familia real en 1910 cuando huyeron de la revolución - salones con muebles victorianos, capillas neogóticas, cocinas con azulejos originales. El parque alrededor tiene 200 hectáreas de bosque con árboles exóticos de todo el mundo que el rey coleccionaba. SUBE AL TORREÓN MÁS ALTO - las vistas justifican todo.',
    tip: '🎫 Entrada: 14€ palacio + jardines, 7.50€ solo jardines. TRUCO: El bus 434 te deja en la entrada BAJA. Desde ahí son 15 min cuesta arriba hasta el palacio. Puedes caminar (gratis) o pagar 3€ por un bus shuttle. Si tienes piernas, camina - el bosque es precioso. COLA: Online o llega 10:00.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=800',
    coordinates: { lat: 38.7876, lng: -9.3906 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7876,-9.3906'
  },
  {
    time: '14:30',
    title: 'Almuerzo en Sintra - Tascantiga',
    description: 'Baja al pueblo de Sintra (bus 434 o camina 20 min bajando) y busca "Tascantiga" - una tasca moderna portuguesa con platos tradicionales pero bien hechos. Precios: 12-18€ por plato principal. Recomendados: arroz de pato confitado, bacalao con puré de grao (garbanzo), secretos de cerdo ibérico, y de postre el travesseiro de Sintra (hojaldre relleno de crema de almendra, especialidad local). Otra opción: "Café Saudade" (menú 15€) o "Incomum by Luis Santos" (más fancy, 25-35€). Evita los restaurantes de la plaza principal (Praça da República) - son todos trampas turísticas caras y mediocres. Las opciones buenas están en las calles laterales. Después del almuerzo, si te queda energía, puedes visitar el Castelo dos Mouros (castillo árabe del siglo X en la montaña, 8€) pero honestamente ya hiciste lo mejor de Sintra.',
    tip: '🍽️ Tascantiga: reserva online o llega 14:00 para evitar espera. Menú: 12-18€. Travesseiros de Sintra: cómpralos en "Casa Piriquita" (desde 1862) - 1.80€/unidad para llevar. También prueba las queijadas (mini tartas de queso).',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    coordinates: { lat: 38.7982, lng: -9.3892 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7982,-9.3892'
  },
  {
    time: '16:30',
    title: 'Cabo da Roca - El fin del mundo',
    description: 'Desde Sintra, toma el bus 403 directo a Cabo da Roca (30 min, 4.25€). Este es el punto más occidental de Europa continental - literalmente "donde la tierra se acaba y el mar comienza" como escribió Camões. Es un cabo dramático con acantilados de 140 metros cayendo vertical al Atlántico, un faro solitario de 1772, viento que casi te tira, y vistas infinitas del océano. No hay nada más al oeste hasta América - solo 5,000 km de Atlántico. Hay un monumento de piedra con la frase de Camões y una cruz. En la oficina de turismo puedes comprar un certificado que dice que estuviste en el fin de Europa (5€ - es turístico pero es bonito de recuerdo). Date 30-45 minutos aquí. El viento es brutal - lleva chaqueta aunque haga sol en Lisboa.',
    tip: '🚌 Bus 403 desde Sintra: 4.25€, sale cada hora, 30 min. Último bus de vuelta: 18:40 (verifica horario actual). IMPORTANTE: El bus sigue a Cascais (30 min más) - no te bajes en Cabo da Roca de vuelta, sigue hasta Cascais.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1598883619954-e95f07d6a9e4?w=800',
    coordinates: { lat: 38.7803, lng: -9.4989 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7803,-9.4989'
  },
  {
    time: '18:00',
    title: 'Cascais - Villa costera + atardecer',
    description: 'Sigue en el bus 403 hasta Cascais (30 min más). Cascais era un pueblo de pescadores que se convirtió en el resort de verano de la aristocracia portuguesa en el siglo XIX cuando el rey Luis I decidió pasar los veranos aquí. Ahora es una villa costera sofisticada con yates en el puerto, playas de arena fina, mansiones del siglo XIX, y un centro histórico peatonal lleno de tiendas, heladerías, y terrazas. Camina por el puerto, sube al Forte de Santa Marta (faro convertido en museo del mar), recorre la Boca do Inferno (formación rocosa donde las olas entran con violencia), y termina en Praia da Rainha o Praia da Conceição para ver el atardecer. Cascais tiene ambiente de playa mediterránea - gente guapa, terrazas al sol, helado en la mano. Es el contraste perfecto después de las montañas de Sintra.',
    tip: '🍦 Helados: Santini (desde 1949, el mejor de Portugal). ATARDECER: Cualquier playa mirando al oeste. Cena en Cascais o vuelve a Lisboa (tren 40 min, 2.30€). Si cenas aquí: "Mar do Inferno" (mariscos) o "Taberna da Praça" (tapas portuguesas).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1588619351935-c1c388e76c98?w=800',
    coordinates: { lat: 38.6979, lng: -9.4214 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6979,-9.4214'
  },
  {
    time: '20:30',
    title: 'Vuelta a Lisboa en tren',
    description: 'Desde la estación de Cascais, toma el tren de vuelta a Lisboa (40 min, 2.30€, cada 20-30 min hasta las 00:30). El tren sigue toda la costa - vas viendo playas, el Tajo entrando, Belém iluminado, y finalmente Lisboa. Llegas a Cais do Sodré (centro de Lisboa) con tiempo para tomar algo o cenar si no comiste en Cascais. Si tienes energía, esta es tu última noche en Lisboa - aprovéchala. Bairro Alto sigue vivo hasta las 2am, Pink Street hasta las 3am, y los miradores están preciosos de noche con la ciudad iluminada. O simplemente vuelve al hotel, dúchate, y procesa que acabas de hacer uno de los días más épicos de tu vida: castillos de cuento, palacios masónicos, el fin de Europa, y atardecer en el Atlántico.',
    tip: '🚂 Tren Cascais→Cais do Sodré: 2.30€, 40 min, cada 20-30 min. Último tren: 00:30. CENA EN LISBOA: Si no comiste en Cascais, tienes Time Out Market (hasta 00:00), Pink Street (late night food), o cualquier tasca en Bairro Alto.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1544620281-d676b33f6571?w=800',
    coordinates: { lat: 38.7069, lng: -9.1467 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7069,-9.1467'
  }
];

// Timeline stops para Lisboa Romántica
export const lisboaRomanticaTimeline: TimelineStop[] = [
  {
    time: '10:00',
    title: 'Jardim da Estrela - Paseo en el parque romántico',
    description: 'Empezamos el día romántico en el Jardim da Estrela, un parque del siglo XIX que parece sacado de una película francesa. Es un jardín formal con caminos de grava, estanques con patos y cisnes, kioscos de hierro forjado, árboles centenarios que forman túneles de sombra, y la Basílica da Estrela de fondo (esa iglesia blanca gigante con cúpula que parece un pastel de bodas). Los domingos por la mañana hay músicos tocando, familias paseando, y parejas leyendo en los bancos. El quiosco central (Quiosque de Refrescos) sirve cafés, zumos naturales, y croissants - perfecto para sentarse en las mesitas de hierro bajo los árboles. No hay prisa, no hay agenda. Solo caminar de la mano, sentarse en algún banco junto al estanque, y ver pasar la mañana lisboeta sin que el tiempo importe. Es el Lisboa tranquilo que no ves en las guías turísticas.',
    tip: '☕ Quiosque de Refrescos: café 1.50€, zumo natural 3€. Mejor momento: 10:00-12:00 (luz suave, menos gente). Los domingos hay mercadillo artesanal. Gratis. Alquiler de barcas en el estanque: 5€/30min (súper romántico).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    coordinates: { lat: 38.7156, lng: -9.1601 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7156,-9.1601'
  },
  {
    time: '12:30',
    title: 'Brunch en Heim Café - Ambiente nórdico',
    description: 'Camina 10 minutos hasta Heim Café, un café escandinavo-portugués escondido en una calle residencial de Estrela. Por fuera es discreto (solo una puerta verde) pero por dentro es mágico: paredes blancas, plantas colgando del techo, mesas de madera clara, luz natural entrando por ventanales enormes, y un ambiente íntimo donde hablan bajito. El brunch es espectacular: tostadas de masa madre con aguacate y huevo poché (8.50€), pancakes esponjosos con frutos rojos y sirope de arce (9€), açaí bowls, salmón ahumado con cream cheese, y cafés de especialidad hechos con amor. Todo es fotogénico sin ser pretencioso. Sirven hasta las 15:00 así que no hay prisa. Es el tipo de sitio donde pierdes la noción del tiempo charlando, riendo, y robándote bocados del plato del otro.',
    tip: '🥐 Precio medio: 18-25€ para dos. RESERVA: No aceptan reservas, llega 12:00-12:30 para mesa segura (máximo 10 min espera). Cierra martes. Instagram: @heimcafe - su feed te va a enamorar antes de ir.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    coordinates: { lat: 38.7145, lng: -9.1589 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7145,-9.1589'
  },
  {
    time: '15:00',
    title: 'Mirador de Santa Catarina - Atardecer anticipado',
    description: 'Toma el tranvía 28 o camina 15 minutos bajando hasta el Mirador de Santa Catarina en Bairro Alto. Este mirador tiene una vibra totalmente diferente a los turísticos: es donde los lisboetas vienen a pasar la tarde. Hay grafitis enormes en las paredes, escalones de piedra donde la gente se sienta con cervezas Super Bock, músicos tocando guitarra, skaters haciendo trucos, y las vistas al Tajo, al puente 25 de Abril, y al Cristo Rei son de postal. Compra dos cervezas en el quiosco de abajo (1.50€ cada una), siéntate en los escalones con tu pareja, y absorbe la vibra bohemia de Lisboa. A medida que avanza la tarde empieza a llenarse de gente joven, parejas, grupos de amigos, todos viendo el atardecer juntos. Es informal, auténtico, y perfecto para conversaciones profundas con el Tajo de testigo.',
    tip: '🍺 Quiosque: cerveza 1.50€, vino 3€, petiscos (aceitunas, queso) 4-6€. MEJOR MOMENTO: 17:00-19:30 (golden hour). Lleva algo para sentarte (el suelo es piedra). Los domingos hay jam sessions de música en vivo espontáneas.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800',
    coordinates: { lat: 38.7101, lng: -9.1484 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7101,-9.1484'
  },
  {
    time: '17:30',
    title: 'Paseo por Príncipe Real - Barrio sofisticado',
    description: 'Desde Santa Catarina, sube caminando 10 minutos hasta Príncipe Real, el barrio más elegante y trendy de Lisboa. Es donde viven diseñadores, arquitectos, y artistas. Las calles están llenas de tiendas de decoración, galerías de arte, boutiques de moda independiente, cafés de especialidad, y anticuarios. El corazón del barrio es el Jardim do Príncipe Real - un jardín pequeño con un cedro gigante de 150 años en el centro (tan grande que su copa cubre casi todo el jardín) con bancos alrededor. Hay terrazas de cafés bajo los árboles, quioscos de flores, y un ambiente sofisticado pero relajado. Caminen de la mano explorando las tiendas: Embaixada (palacio del siglo XIX convertido en concept store con 15 tiendas artesanales), A Vida Portuguesa (productos portugueses vintage), y Corello (joyería portuguesa moderna). No es necesario comprar - solo pasear, mirar escaparates, y sentir el Lisboa cool.',
    tip: '🌳 Jardim do Príncipe Real: gratis, perfecto para sentarse bajo el cedro gigante. COMPRAS: Embaixada abre 12:00-20:00. CAFÉ: Copenhagen Coffee Lab (café de especialidad, 2.50€). Los sábados hay mercado orgánico 9:00-15:00.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    coordinates: { lat: 38.7159, lng: -9.1502 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7159,-9.1502'
  },
  {
    time: '19:00',
    title: 'Mirador da Graça - El atardecer ÉPICO',
    description: 'Ahora viene EL MOMENTO. Uber o tranvía 28 hasta Graça (15 min) para llegar al Mirador da Graça justo para el atardecer. Este es posiblemente el atardecer más romántico de Lisboa. El mirador tiene una terraza grande con mesitas blancas, sombrillas de pino, y vistas de 180° sobre toda la ciudad: el Castelo São Jorge a la izquierda, Alfama bajando hacia el Tajo, el puente 25 de Abril a lo lejos, y el cielo que se va poniendo naranja, rosa, morado mientras el sol desciende sobre el río. Hay un bar donde sirven vinos portugueses (4-6€), cervezas, y aperitivos. Llega 30 minutos antes del sunset, pide dos vinos blancos (Vinho Verde bien frío), consigue una mesita en primera fila, y prepárate para uno de esos momentos que se quedan grabados para siempre. Cuando el sol toca el horizonte y Lisboa entera se ilumina en dorado, vas a entender por qué esta ciudad se llama la ciudad de la luz.',
    tip: '🌅 Sunset: consulta hora en Google. Llega 45 min ANTES para buena mesa. Vino: 4-6€, cerveza 3€, tabla de quesos 12€. OCUPADO: Viernes-domingo muy lleno. Entre semana más tranquilo. Alternativa si está repleto: Mirador de Santa Luzia (5 min caminando).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
    coordinates: { lat: 38.7169, lng: -9.1329 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7169,-9.1329'
  },
  {
    time: '21:00',
    title: 'Cena romántica en Chapitô à Mesa',
    description: 'Baja caminando 10 minutos hasta Chapitô à Mesa - un restaurante único en lo alto de Alfama dentro de una escuela de circo. Sí, leíste bien. Es un restaurante gourmet en el tercer piso de una escuela de artes circenses con vistas panorámicas a Lisboa iluminada de noche. El interior es íntimo: luces tenues, velas en las mesas, paredes de ladrillo expuesto, y ventanales enormes con vistas al río y la ciudad brillando abajo. La comida es fusión portuguesa-mediterránea: tataki de atún con sésamo (16€), risotto de mariscos (18€), magret de pato con puré de boniato (22€), bacalao confitado con crema de grao (20€). De postre, el coulant de chocolate con helado de vainilla es obligatorio. Servicio atento sin ser intrusivo, ambiente romántico sin ser cursi, y vistas que quitan el aliento. Reserva mesa junto a la ventana y pide que sea "para ocasión especial" - se esmeran.',
    tip: '🍽️ RESERVA OBLIGATORIA (online o teléfono, mínimo 2-3 días antes). Precio: 60-80€ para dos con vino. Pide mesa ventana "para ocasión romántica". Vino recomendado: Douro tinto 18-25€. Abre cena 19:30-23:00 (martes-domingo).',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    coordinates: { lat: 38.7156, lng: -9.1298 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7156,-9.1298'
  },
  {
    time: '23:30',
    title: 'Paseo nocturno por Alfama iluminada',
    description: 'Después de cenar, baja caminando por las calles laberínticas de Alfama de noche. Este es el momento mágico que pocos turistas viven. Las calles estrechas iluminadas con faroles amarillos, las escaleras de adoquines brillando por la humedad del Tajo, el sonido lejano de fado saliendo de alguna ventana, gatos callejeros cruzando sigilosamente, ropa tendida meciéndose con la brisa nocturna, y el silencio roto solo por vuestros pasos y alguna conversación lejana. Perdeos sin rumbo. No uséis Google Maps. Todas las calles eventualmente bajan hacia el río o suben al castillo. Pasa por la Catedral Sé iluminada, el Mirador de Santa Luzia vacío y precioso de noche, el Mirador das Portas do Sol con vistas a la ciudad dormida. Camina hasta la orilla del Tajo, siéntate en los escalones mirando al río y las luces reflejadas en el agua. Este es el Lisboa íntimo, nocturno, romántico, que se siente solo caminando sin prisa con la persona que amas.',
    tip: '🌙 SEGURO: Alfama de noche es seguro (mucha gente, bien iluminado). Lleva calzado cómodo (adoquines resbaladizos). Post-paseo: Copa en "Portas do Sol" (bar terraza abierto hasta 2am) o subir al Castillo (exterior iluminado, vistas nocturnas gratis).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7115, lng: -9.1281 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7115,-9.1281'
  }
];

// Timeline stops para Lisboa Familiar
export const lisboaFamiliarTimeline: TimelineStop[] = [
  {
    time: '09:30',
    title: 'Oceanário de Lisboa - Acuario gigante',
    description: 'Empezamos en el Oceanário de Lisboa, uno de los acuarios más grandes de Europa y probablemente la actividad #1 para familias en Lisboa. Está en el Parque das Nações (zona moderna construida para la Expo 98). El tanque central tiene 5 millones de litros de agua con tiburones, mantas rayas gigantes, atunes, pez luna (ese pez rarísimo que parece una cabeza flotante), y cientos de especies nadando juntas. Los niños se quedan hipnotizados viendo los tiburones pasar a centímetros del cristal. Hay 4 hábitats diferentes (Atlántico Norte, Antártico, Pacífico Tropical, Océano Índico) con nutrias, pingüinos, lémures, pájaros tropicales, y una zona táctil donde pueden tocar estrellas de mar y anémonas. Date mínimo 2-3 horas - los niños no querrán irse. Hay cafetería dentro con menús infantiles, baños amplios con cambiadores, y todo está pensado para familias.',
    tip: '🐟 Entrada: adultos 22€, niños (3-12 años) 15€, menores 3 años gratis. Compra online (ahorras 2€ + evitas cola). Horario: 10:00-19:00. TRUCO: Llega 9:30-10:00 cuando abren (menos gente, tiburones más activos). Metro: Oriente (línea roja).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800',
    coordinates: { lat: 38.7633, lng: -9.0939 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7633,-9.0939'
  },
  {
    time: '12:30',
    title: 'Teleférico do Parque das Nações',
    description: 'Justo al lado del Oceanário está el teleférico que recorre 1.2km por la orilla del Tajo a 20 metros de altura. Son 8 minutos de viaje con vistas al río, al Puente Vasco da Gama (el puente más largo de Europa con 17km), la Torre Vasco da Gama, y todo el Parque das Nações desde arriba. Los niños alucinan viendo los barcos pequeñitos abajo, la gente caminando, y sintiendo la cabina mecerse suavemente con el viento. Es seguro, tiene aire acondicionado, y perfecto para descansar las piernas después del Oceanário. Al final del recorrido hay un parque infantil gigante (Jardim da Água) con toboganes, columpios, fuentes de agua (en verano los niños juegan mojándose), y zona de picnic si traes bocadillos.',
    tip: '🚡 Teleférico: adultos 6€, niños (3-12) 3€. Compra ida y vuelta 9€/5€ (más barato). Opera 10:30-19:00 (verano hasta 20:00). PARQUE INFANTIL: Jardim da Água gratis, perfecto para que corran 30-45 min. Lleva cambio de ropa si hace calor (fuentes de agua).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?w=800',
    coordinates: { lat: 38.7681, lng: -9.0944 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7681,-9.0944'
  },
  {
    time: '14:00',
    title: 'Almuerzo en Vasco da Gama Shopping - Food court',
    description: 'El centro comercial Vasco da Gama está a 5 minutos caminando y tiene un food court gigante con opciones para todos: McDonalds, pizza, sushi, comida portuguesa, hamburguesas gourmet, woks asiáticos, y heladerías. Lo mejor es que cada uno puede pedir lo que quiera - no tienes que negociar con niños quisquillosos sobre el restaurante. Precios razonables: menú infantil 5-7€, plato adulto 8-12€. Hay tronas, microondas para calentar potitos, baños familiares amplios con cambiadores, y zona de juegos infantil en la planta baja (Kidzania - parque temático educativo donde los niños "trabajan" en profesiones, 16€ entrada, opcional). Después del almuerzo puedes comprar lo que necesites: farmacia, supermercado, ropa, todo en un sitio.',
    tip: '🍔 Food court planta superior: 12:00-22:00. Precio familia (2 adultos + 2 niños): 25-35€. KIDZANIA: 16€/niño (4-14 años), reserva online. Abre 10:00-20:00. DESCANSO: Hay sofás en zonas comunes para sentarse si alguien está cansado.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    coordinates: { lat: 38.7680, lng: -9.0986 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7680,-9.0986'
  },
  {
    time: '16:00',
    title: 'Jardim Zoológico de Lisboa',
    description: 'Toma el metro desde Oriente hasta Jardim Zoológico (20 min, línea azul directa). El Zoo de Lisboa existe desde 1884 y tiene 2000 animales: leones, tigres, gorilas, elefantes, jirafas, hipopótamos, delfines, reptiles, aves tropicales, y una zona de granja con cabras y ovejas que los niños pueden acariciar. Hay 3 shows diarios: delfines (el favorito de los niños), aves rapaces en vuelo libre, y leones marinos. El recinto es grande (16 hectáreas) pero bien señalizado con mapas, hay trenecito interno que recorre el zoo (3€, ahorra piernas), teleférico que cruza por encima (incluido en entrada), y zona de juegos infantil. Lleva mínimo 3-4 horas para verlo todo sin prisa. Hay restaurante/cafetería dentro, baños en todas las zonas, y tiendas con peluches/souvenirs.',
    tip: '🦁 Entrada: adultos 24€, niños (3-12) 16€, menores 3 años gratis. Pack familia (2+2): 68€. Compra online 10% descuento. Horario: 10:00-18:00 (verano hasta 20:00). IMPRESCINDIBLE: Show delfines (12:00, 15:00, 17:30) - llega 20 min antes para buenos asientos.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
    coordinates: { lat: 38.7438, lng: -9.1731 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7438,-9.1731'
  },
  {
    time: '19:30',
    title: 'Cena en Jardim da Estrela - Picnic al atardecer',
    description: 'Después del Zoo, toma el metro a Rato (10 min) y camina 5 minutos hasta el Jardim da Estrela. En vez de restaurante formal (niños cansados = desastre), para en un supermercado Pingo Doce de camino y compra cosas para picnic: pan, queso, jamón, fruta, zumos, galletas, yogures (15-20€ para toda la familia). El Jardim da Estrela es perfecto para picnic: césped amplio, bancos bajo los árboles, zona de juegos infantil grande con columpios y toboganes, estanque con patos, y el quiosco central que vende helados y bebidas. Los niños pueden correr, jugar, dar de comer a los patos (lleva pan), mientras vosotros os relajáis viendo el atardecer con la Basílica da Estrela de fondo. Es la manera perfecta de cerrar un día intenso sin estrés de restaurantes.',
    tip: '🧺 Supermercado Pingo Doce: Rua da Escola Politécnica (camino al jardín). Picnic: 15-25€ familia. PARQUE INFANTIL: Zona cerrada, segura, con bancos para vigilar. Quiosque: helados 2-3€, bebidas 1.50€. Gratis. Jardín cierra 21:00 (verano 22:00).',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800',
    coordinates: { lat: 38.7156, lng: -9.1601 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7156,-9.1601'
  },
  {
    time: '10:00 (DÍA 2)',
    title: 'Castillo de São Jorge - Castillo medieval',
    description: 'El día 2 empieza con el castillo - todos los niños aman castillos. El Castillo de São Jorge es una fortaleza del siglo XI en lo alto de Lisboa con murallas enormes, torres, almenas donde asomarse, cañones antiguos, un foso, y pavos reales caminando libremente por el recinto (los niños alucinan cuando abren la cola). Las vistas desde las murallas son espectaculares: toda Lisboa hasta el río. Hay zona arqueológica con ruinas romanas y árabes, museo pequeño con armaduras y espadas (los niños se ponen a jugar), y espacios amplios para correr. No es un museo aburrido - es un castillo real donde pueden trepar escaleras de piedra, asomarse por las almenas, imaginar batallas medievales, y perseguir pavos reales. Dale 2 horas mínimo. Hay cafetería con terraza, baños, y sombra bajo los árboles.',
    tip: '🏰 Entrada: adultos 15€, niños (10-17) 7.50€, menores 10 años gratis. Horario: 9:00-18:00 (verano hasta 21:00). ESTRATEGIA: Llega 9:30-10:00 (menos calor, menos gente). Lleva agua y gorra (mucho sol). Subida: Uber/taxi desde centro 6-8€ o tranvía 28 + caminar.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7139, lng: -9.1334 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7139,-9.1334'
  },
  {
    time: '13:00',
    title: 'Museo del Juguete + Almuerzo en Sintra',
    description: 'Si los niños aguantan un extra de energía, toma el tren a Sintra (40 min desde Rossio, 2.30€) para visitar el Museo del Juguete. Está en el centro del pueblo de Sintra en un edificio antiguo con 4 pisos llenos de juguetes de los últimos 100 años: trenes de hojalata, muñecas antiguas, coches a pedal, soldaditos de plomo, juegos de mesa vintage, y una colección de 20,000 juguetes. Los niños se quedan fascinados viendo "cómo jugaban los abuelos". Hay zona interactiva donde pueden jugar con algunos juguetes. Entrada barata: adultos 5€, niños (3-17) 2.50€. Después, almuerzo en "Café Paris" (menú infantil 8€, hamburguesas, nuggets, pasta) o "Fábrica das Verdadeiras Queijadas da Sapa" (tarta de queso tradicional de Sintra, 1.50€, los niños las aman). Si tienen energía infinita, sube al Palácio da Pena (castillo de colores) pero honestamente después del castillo de la mañana probablemente estén saturados.',
    tip: '🚂 Tren Lisboa→Sintra: 2.30€ adulto, 1.15€ niño (4-12). Cada 20 min. MUSEO JUGUETE: 5€/2.50€, 10:00-18:00. Almuerzo: 10-15€/niño. ALTERNATIVA más tranquila: En vez de Sintra, quédate en Lisboa y ve al Pavilhão do Conhecimento (museo ciencia interactivo, muy divertido).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1587828191251-c8959ce4fc79?w=800',
    coordinates: { lat: 38.7975, lng: -9.3904 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7975,-9.3904'
  }
];

// Timeline stops para Lisboa Fotografía (12 spots con horarios de luz óptimos)
export const lisboaFotografiaTimeline: TimelineStop[] = [
  {
    time: 'Golden Hour Mañana (07:00-08:30)',
    title: 'Mirador das Portas do Sol - Luz dorada sobre Alfama',
    description: 'La primera parada es al amanecer en el Mirador das Portas do Sol. Llega cuando el sol empieza a subir por detrás de ti e ilumina toda Alfama con luz dorada horizontal. Las casas con tejas naranjas, las paredes blancas y amarillas, los azulejos, todo brilla. Desde aquí capturas: el Panteón Nacional (cúpula blanca gigante) a la izquierda, el Tajo azul intenso de fondo, y las calles laberínticas de Alfama bajando en capas. COMPOSICIÓN PERFECTA: Usa la balaustrada del mirador como leading line en primer plano, los tejados en plano medio, y el Tajo como fondo. Focal recomendada: 35-50mm para paisaje urbano amplio, o 85mm para comprimir las capas de casas. La terraza del quiosco está cerrada a esta hora así que lo tienes para ti solo. Cero turistas. Solo tú, tu cámara, y Lisboa despertando.',
    tip: '📸 MEJOR HORA: 7:00-8:30 (luz horizontal dorada). SETTINGS: ISO 100-400, f/5.6-8 (profundidad), 1/125-1/250s. Trípode opcional (hay barandilla para apoyar). Focal: 24-70mm. ACCESO: Tranvía 28 o Uber (6€). Llega ANTES del amanecer para preparar.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
    coordinates: { lat: 38.7122, lng: -9.1280 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7122,-9.1280'
  },
  {
    time: 'Mañana (08:30-10:00)',
    title: 'Tranvía 28 en Rua da Bica - El shot icónico',
    description: 'Baja caminando hasta la Rua da Bica de Duarte Belo - una de las calles más empinadas y fotogénicas de Lisboa. Es la calle del tranvía amarillo que ves en TODOS los posts de Instagram sobre Lisboa. La perspectiva es brutal: una calle adoquinada con pendiente de 45°, edificios de colores a ambos lados creando un túnel, y el tranvía 28 subiendo en el centro. TIMING: Los tranvías pasan cada 10-15 min. Plántate en el medio de la calle (CON CUIDADO, mira hacia arriba), pon la cámara en modo ráfaga, y dispara cuando el tranvía esté a mitad de la cuesta. TRUCO PRO: Agáchate para disparar desde abajo (calle como leading line hacia el tranvía). Mejor luz: 8:30-10:00 cuando el sol ilumina la calle desde arriba. Después de las 11:00 se llena de turistas haciendo lo mismo.',
    tip: '📸 SETTINGS: ISO 200-400, f/8-11 (profundidad para calle+tranvía enfocados), 1/250-1/500s (congelar tranvía). Focal: 24-35mm (gran angular). PELIGRO: Los tranvías NO frenan, estate atento. Dispara, muévete, repite. La gente vive aquí - respeta.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1597426509446-cd65442af149?w=800',
    coordinates: { lat: 38.7110, lng: -9.1459 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7110,-9.1459'
  },
  {
    time: 'Mañana (10:30-12:00)',
    title: 'Praça do Comércio - Geometría y simetría',
    description: 'La Praça do Comércio es perfecta para fotografía arquitectónica. Es la plaza más grande de Lisboa: 3 lados con arcadas amarillas simétricas, el cuarto lado abierto al Tajo, y el Arco da Rua Augusta en el centro. SHOTS CLAVE: (1) Desde el centro de la plaza disparando hacia el arco (simetría perfecta), (2) Debajo de las arcadas laterales capturando la repetición de arcos hasta el infinito (leading lines), (3) Desde el agua (baja a la orilla) capturando toda la plaza reflejada si hay marea alta. MEJOR LUZ: 10:30-12:00 (sol alto ilumina todo uniformemente, menos sombras duras). Usa f/8-11 para toda la profundidad. Si tienes tilt-shift lens, este es el momento. Si no, corrige la perspectiva en Lightroom después.',
    tip: '📸 SETTINGS: ISO 100, f/8-11, 1/250-1/500s. Focal: 16-24mm (ultra wide para capturar toda la plaza) o 50mm (comprimir arcos). TRUCO: Sube al Arco (3€) para shot cenital de la plaza + Tajo. Polarizador ayuda con reflejos del río.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: 'Mediodía (12:30-14:00)',
    title: 'Elevador de Santa Justa - Perspectivas verticales',
    description: 'El Elevador de Santa Justa es un ascensor de hierro neogótico de 1902 que parece sacado de París. Hay DOS shots aquí: (1) Desde abajo capturando toda la estructura vertical (45 metros) contra el cielo azul - usa ultra wide y dispara hacia arriba con la base como foreground, (2) Desde arriba (sube al mirador, 1.50€) capturando Baixa, el Castillo, y el Tajo con los tejados naranjas en primer plano. MEJOR LUZ para shot desde arriba: 12:00-14:00 (sol alto, menos sombras en la ciudad). Para shot desde abajo: cualquier hora con cielo azul. El hierro forjado tiene detalles preciosos - acércate con 50-85mm para abstracts de los engranajes, remaches, y estructura.',
    tip: '📸 DESDE ABAJO: ISO 100, f/5.6-8, 1/500s, 16-24mm ultra wide. DESDE ARRIBA: Polarizador para cielo azul intenso, f/8, 35-50mm. PERSONAS: Evita 11:00-16:00 (cola enorme). Mejor 9:00-10:00 o 17:00-18:00. Subida: 5.30€ ascensor o camina gratis por Escadas do Carmo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7122, lng: -9.1394 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7122,-9.1394'
  },
  {
    time: 'Tarde (15:00-16:30)',
    title: 'Calles de Alfama - Detalles y texturas',
    description: 'Piérdete por Alfama con la cámara buscando DETALLES: azulejos antiguos en las paredes (hay fachadas enteras cubiertas con patrones del siglo XVIII), ropa tendida cruzando las calles (súper lisboeta), puertas de madera desgastadas con colores vivos (verde, azul, amarillo), gatos en escaleras de piedra, señoras asomadas en ventanas, sardinas pintadas en las paredes, y las calles estrechas empinadas con adoquines brillantes. No busques la foto perfecta - busca 20 detalles pequeños que juntos cuentan la historia de Alfama. FOCAL: 35mm o 50mm (prime lens) para caminar ligero. Dispara en JPEG+RAW. Las sombras son duras en Alfama (calles super estrechas) - abraza el contraste. Blanco y negro funciona brutal para estas texturas.',
    tip: '📸 SETTINGS: ISO 400-800 (calles oscuras), f/2.8-5.6 (bokeh suave), 1/125-1/250s. Focal: 35mm o 50mm f/1.8. RESPETO: Pide permiso antes de fotografiar a personas. Sonríe, muestra la foto, di "obrigado". La gente es amable si eres respetuoso. NO DRONE (prohibido en Alfama).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7115, lng: -9.1288 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7115,-9.1288'
  },
  {
    time: 'Golden Hour Tarde (17:30-19:00)',
    title: 'Mirador da Senhora do Monte - 360° golden hour',
    description: 'El Mirador da Senhora do Monte es EL spot para golden hour. Es el punto más alto de Lisboa (después del castillo) con vistas de 270°. Llega 45 minutos antes del sunset, elige tu ángulo, y prepárate. ÁNGULOS KEY: (1) Castillo São Jorge a la izquierda con toda Alfama iluminada en dorado, (2) Puente 25 de Abril y Cristo Rei a lo lejos con el Tajo reflejando el cielo naranja/rosa, (3) Toda la ciudad desplegada con luz horizontal haciendo que cada edificio proyecte sombras largas. Usa trípode - vas a querer hacer timelapses del sunset. Dispara en bracketing (HDR) porque el rango dinámico es brutal (cielo brillante vs ciudad en sombra). Lleva batería extra y tarjetas - vas a disparar 200+ fotos fácil.',
    tip: '📸 SETTINGS: Trípode obligatorio. ISO 100-400, f/8-11, bracket ±2EV (HDR). Focal: 24-70mm (versátil), 70-200mm (comprimir ciudad). TIMELAPSE: Intervalómetro cada 5-10s desde 30 min antes del sunset hasta 20 min después (blue hour). ND Grad filter opcional para balancear cielo/ciudad.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
    coordinates: { lat: 38.7176, lng: -9.1316 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7176,-9.1316'
  },
  {
    time: 'Blue Hour (19:30-20:30)',
    title: 'Ponte 25 de Abril desde Alcântara - Larga exposición',
    description: 'Después del sunset, muévete rápido a Alcântara para blue hour. El Puente 25 de Abril iluminado contra el cielo azul profundo es MÁGICO. Baja a la orilla del Tajo (Doca de Santo Amaro) y dispara con larga exposición: el puente rojo brillante, las luces reflejadas en el agua como pintura, los barcos con estelas de luz, y el Cristo Rei iluminado al otro lado. SETTINGS clave: Trípode, ISO 100, f/8-16, 10-30 segundos de exposición. El agua se vuelve sedosa, las nubes se mueven creando drama, y las luces de coches en el puente se convierten en líneas rojas. Dispara en modo Manual, enfoque manual al infinito (el autofocus sufre con poca luz), y usa disparador remoto o timer 2s para evitar vibraciones.',
    tip: '📸 BLUE HOUR: 20-30 min después del sunset (cielo azul oscuro pero no negro). SETTINGS: Trípode, ISO 100, f/11-16, 10-30s, Manual focus. ND filter opcional si todavía hay luz. RAW obligatorio. UBICACIÓN EXACTA: Doca de Santo Amaro (coordenadas abajo). Seguro, bien iluminado, lleno de fotógrafos.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7039, lng: -9.1754 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7039,-9.1754'
  },
  {
    time: 'Noche (21:00-22:00)',
    title: 'Baixa-Chiado de noche - Long exposure streets',
    description: 'Sube a Baixa-Chiado para fotografía urbana nocturna. Rua Augusta peatonal con las tiendas iluminadas, gente caminando (fantasmas con larga exposición), artistas callejeros, y el Arco da Rua Augusta iluminado al final creando un punto focal perfecto. TÉCNICA: Trípode, ISO 200-400, f/8, 2-5 segundos - la gente en movimiento se vuelve transparente, solo quedan las luces y la arquitectura. Dispara desde el medio de la calle (es peatonal) con ultra wide (16-24mm) para leading lines hacia el arco. Alternativamente, sube a alguna terraza (rooftop bars en Chiado) y dispara la ciudad iluminada desde arriba. El contraste entre las calles oscuras de Alfama y las zonas iluminadas de Baixa crea depth brutal.',
    tip: '📸 SETTINGS: ISO 200-800, f/5.6-11, 1-5s dependiendo de cuánto movimiento quieras. Focal: 16-35mm. ROOFTOPS: "Park Bar" (azotea con vistas), "Topo Chiado" (terraza alto). Pide permiso antes de montar trípode en bares. Compra una bebida, sé respetuoso. SEGURIDAD: Baixa es seguro de noche pero cuida tu equipo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7108, lng: -9.1385 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7108,-9.1385'
  },
  {
    time: 'DÍA 2 - Mañana Belém (08:00-10:00)',
    title: 'Torre de Belém al amanecer - Reflejos dorados',
    description: 'El día 2 empieza temprano en Belém. La Torre de Belém al amanecer es postal perfecta: torre medieval blanca con marea baja creando charcos que reflejan la torre, luz dorada horizontal iluminando las piedras, y cero turistas. SHOT PERFECTO: Baja a la playa (sí, hay playa al lado de la torre cuando baja la marea) y dispara desde abajo capturando la torre + reflejo en charcos + cielo. Focal: 16-24mm ultra wide. Si la marea está alta, dispara desde el paseo capturando torre + Tajo + Puente 25 de Abril de fondo. BONUS: Monasterio dos Jerónimos (5 min caminando) también es brutal al amanecer - la fachada entera iluminada en dorado, las sombras de las columnas creando geometría, y vacío total.',
    tip: '📸 MAREA: Consulta tabla de mareas (Google "mareas Lisboa"). Marea baja = playa con reflejos. Marea alta = torre rodeada de agua (también cool). SETTINGS: ISO 100-400, f/8-11, 1/125-1/500s. Polarizador para reflejos. HORA: 7:30-9:00 (golden hour). Torre abre 10:00 así que solo exterior.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.6916, lng: -9.2158 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6916,-9.2158'
  },
  {
    time: 'Mañana Belém (10:00-12:00)',
    title: 'Jerónimos Interior - Arquitectura gótica',
    description: 'Entra al Monasterio dos Jerónimos cuando abren (10:00). La IGLESIA ES GRATIS y es donde están las fotos más espectaculares: techos abovedados de 25 metros que parecen palmeras de piedra, columnas octogonales con tallados marinos increíbles, luz natural entrando por ventanas creando rayos de luz (god rays), y la tumba de Vasco da Gama con detalles en piedra brutal. TÉCNICA: Ultra wide (16-24mm) disparando hacia arriba para capturar los techos completos. Trípode opcional pero el suelo de mármol es perfecto para apoyar cámara. ISO 800-3200 (interior oscuro), f/2.8-5.6 (dejar entrar luz), 1/60-1/125s. BLANCO Y NEGRO funciona perfecto aquí - la arquitectura, las sombras, el contraste.',
    tip: '📸 SETTINGS: ISO 1600-3200, f/2.8-5.6, 1/60-1/125s. Focal: 16-24mm ultra wide. ESTABILIZACIÓN ON si no llevas trípode. RAW obligatorio (sombras recuperables). HORARIO: 10:00-17:00, mejor 10:00-11:00 (menos gente, luz suave entrando). RESPETO: Silencio, es lugar religioso activo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
    coordinates: { lat: 38.6977, lng: -9.2062 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6977,-9.2062'
  },
  {
    time: 'Tarde (14:00-16:00)',
    title: 'LX Factory - Grit urbano e industrial',
    description: 'LX Factory es el paraíso para fotografía urbana alternativa. Antiguas naves industriales llenas de grafitis enormes, murales de artistas internacionales, escaleras de metal oxidadas, ladrillo expuesto, neones de cafés, la bici voladora de Ler Devagar librería, y el Puente 25 de Abril pasando literalmente por encima. Es street photography + arquitectura industrial + arte urbano todo junto. SHOTS: (1) Murales completos con gran angular, (2) Detalles de texturas (óxido, pintadas, ladrillos) con 50-85mm, (3) Gente en cafés con 35mm street photography, (4) Long exposure del puente desde LX con ND filter. La luz dura del mediodía funciona bien aquí - sombras fuertes dan carácter industrial.',
    tip: '📸 SETTINGS: ISO 100-400, f/2.8-8 (variado), 1/250-1/1000s. Kit: 24-70mm versátil. DOMINGO: Mercado vintage (objetos, gente, color). LIBERTAD CREATIVA: Experimenta ángulos raros, contrastes fuertes, crop cuadrado, alto contraste B&W. Nadie te juzga aquí - es zona artística.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800',
    coordinates: { lat: 38.7065, lng: -9.1799 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7065,-9.1799'
  },
  {
    time: 'Golden Hour Final (18:00-19:30)',
    title: 'Mirador de Santa Catarina - Cierre épico',
    description: 'Termina el photoWalk en Santa Catarina para el segundo (y último) golden hour. Este mirador tiene vibra totalmente diferente: grafiti gigante en la pared (backdrop urbano), gente joven con cervezas sentada en los escalones (street photography oportunidades), skaters, músicos, y las vistas al Tajo + Puente 25 de Abril + Cristo Rei con luz dorada perfecta. COMPOSICIÓN: Usa la gente como foreground (siluetas contra el sunset), el puente en plano medio, y el cielo en llamas de fondo. Focal: 35mm o 50mm para candids + paisaje. Dispara en modo ráfaga - la escena cambia constantemente (skaters saltando, parejas besándose, músicos tocando). Cuando el sol toque el horizonte, saca el trípode y dispara el sunset clásico. Después, quédate para blue hour - el puente iluminado desde aquí también es precioso.',
    tip: '📸 SETTINGS Golden: ISO 200-800, f/2.8-5.6, 1/250-1/1000s (candids), bracket para sunset. BLUE HOUR: Trípode, ISO 100, f/8, 5-15s. SOCIAL: La gente aquí es friendly - pregunta si puedes fotografiar, enseña resultados, conecta. CERVEZA: 1.50€ en quiosco, súper válido después de 2 días intensos.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800',
    coordinates: { lat: 38.7101, lng: -9.1484 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7101,-9.1484'
  }
];

// Features incluidas en los packs
export const includedFeatures = [
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    title: 'Itinerario hora a hora',
    description: 'Ritmo realista con tiempos de traslado y paradas clave'
  },
  {
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    title: 'Restaurantes verificados',
    description: 'Qué pedir, rangos de precio y ubicaciones exactas'
  },
  {
    icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Spots fotográficos',
    description: 'Mejores ángulos, luz ideal y puntos sin aglomeraciones'
  },
  {
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    title: 'Mapa con GPS',
    description: 'Enlaces directos a Google Maps y rutas optimizadas'
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Tips anti-colas',
    description: 'Horarios inteligentes y accesos recomendados'
  },
  {
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    title: 'Plan B por clima',
    description: 'Opciones interiores y rutas cubiertas si llueve'
  },
  {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Información práctica',
    description: 'Transporte, zonas recomendadas y alertas útiles'
  },
  {
    icon: 'M5 13l4 4L19 7',
    title: 'Actualizaciones 2025',
    description: 'Contenido revisado y mejorado con datos recientes'
  }
];

// Timeline stops para Lisboa 2 Días Completo
export const lisboa2DiasTimeline: TimelineStop[] = [
  // DÍA 1
  {
    time: '09:00 - Día 1',
    title: 'Alfama + Castillo São Jorge',
    description: 'Empezamos fuerte en Alfama, el barrio más antiguo de Lisboa que sobrevivió al terremoto de 1755. Sal temprano (9:00) cuando las calles todavía están tranquilas y solo ves vecinos abriendo tiendas. Camina sin rumbo por las callejuelas empinadas - perderte aquí es parte de la experiencia. Ves ropa tendida, azulejos centenarios, gatos durmiendo al sol, y fado saliendo de alguna ventana. Después sube al Castillo São Jorge (entrada 15€, gratis domingos hasta 14:00). Las murallas tienen 2000 años de historia, hay pavos reales sueltos, y las vistas de 360° sobre Lisboa son brutales. Dedica 1.5 horas a explorar las torres, los jardines, y el mirador panorámico. El castillo abre a las 9:00 así que si llegas temprano lo tienes casi vacío.',
    tip: '🎫 TRUCO: Domingos gratis hasta 14:00 (llega 13:00 para evitar colas). Entre semana mejor 9:00-10:30 (menos turistas). No uses Google Maps en Alfama - lo mejor es perderte. Todas las calles eventualmente suben al castillo o bajan al río.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7139, lng: -9.1334 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7139,-9.1334'
  },
  {
    time: '12:00',
    title: 'Almuerzo en Mercado de Santa Clara',
    description: 'Baja del castillo caminando hasta el Mercado de Santa Clara (10 min). Es un mercado de barrio auténtico donde los locales compran verduras, pescado fresco, y comen en las tascas alrededor. Ve a "Tasca do Mercado" - tasca tradicional con azulejos en las paredes, señoras cocinando bacalhau, y menú del día por 8-10€. Pide lo que esté cocinándose: bacalhau à brás (bacalao con patatas y huevo), arroz de pato, o sardinas asadas si es temporada (mayo-octubre). Comes como local, precios de local, sabor brutal. Los martes y sábados hay mercadillo de antigüedades en la plaza (Feira da Ladra) - perfecto para pasear después de comer buscando vinilos, azulejos vintage, y cosas random.',
    tip: '🍽️ Precio: 8-12€ menú completo. HORARIO: 12:00-15:00 (después cierran cocina). Martes y sábados: Feira da Ladra 9:00-18:00 (mercadillo antigüedades). Lleva efectivo - muchas tascas no aceptan tarjeta.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    coordinates: { lat: 38.7155, lng: -9.1268 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7155,-9.1268'
  },
  {
    time: '14:30',
    title: 'Tranvía 28 completo',
    description: 'Toma el mítico Tranvía 28 desde Martim Moniz (parada inicial) para hacer el recorrido COMPLETO (45 min ida). Este tranvía amarillo histórico sube y baja por las 7 colinas de Lisboa pasando por Graça, Alfama, Baixa, Chiado, Estrela y Campo de Ourique. Las calles son TAN estrechas que el tranvía roza las paredes - vas a ver gente en ventanas casi tocando el tranvía. Siéntate en ventana (lado derecho = mejores vistas) y disfruta del paseo vintage. El truco: NO lo tomes en paradas turísticas (Baixa, Alfama) porque van repletos. Cógelo en Martim Moniz (inicio) o Campo de Ourique (final) para ir sentado. Bájate donde quieras explorar - con el mismo ticket puedes subir y bajar.',
    tip: '🚋 Ticket: 3€ (compra en el tranvía, solo efectivo) o incluido en tarjeta Viva Viagem. EVITA: 11:00-16:00 (repleto de turistas). MEJOR: 9:00-10:30 o 17:00-19:00. Parada inicial Martim Moniz para ir sentado. Recorrido completo: 45 min.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1597426509446-cd65442af149?w=800',
    coordinates: { lat: 38.7175, lng: -9.1372 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7175,-9.1372'
  },
  {
    time: '16:00',
    title: 'Baixa + Elevador de Santa Justa',
    description: 'Bájate del 28 en Baixa (centro neurálgico de Lisboa). Camina por Rua Augusta (calle peatonal principal) hasta la Praça do Comércio - plaza enorme con arcadas amarillas abierta al río Tajo. Desde aquí, sube al Arco da Rua Augusta (3€, mirador 360°) para vistas de toda Baixa y el río. Después camina hasta el Elevador de Santa Justa - ascensor neogótico de hierro de 1902 que parece sacado de París. Puedes subir (5.50€) o simplemente verlo desde abajo (la estructura es la foto, no las vistas). Pasea por las calles de Baixa viendo las tiendas de azulejos, pastelerías con vitrinas de pasteles de nata, y la arquitectura pombalina reconstruida después del terremoto de 1755.',
    tip: '🏛️ Arco da Rua Augusta: 3€, vistas 360°. Elevador Santa Justa: 5.50€ (opcional, más turístico que útil). GRATIS: Caminar Baixa, Praça Comércio, fotos del elevador desde abajo. Pastelerías recomendadas: Confeitaria Nacional (desde 1829), pastel de nata 1.20€.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: '18:00',
    title: 'Atardecer en Mirador da Graça',
    description: 'Uber/tranvía hasta el Mirador da Graça para el atardecer (llega 45 min antes del sunset - consulta hora). Este mirador tiene vibra local: terrazas con mesitas blancas, quiosco sirviendo vinos y cervezas, y vistas de 180° sobre Alfama, el Castillo, el Tajo, y toda Lisboa. Pide un vino blanco Vinho Verde bien frío (4€) o cerveza Super Bock (3€), consigue mesita en primera fila, y prepárate para el show. Cuando el sol baja, toda la ciudad se ilumina en dorado - los tejados naranjas brillan, las sombras se alargan, el Tajo refleja el cielo rosa/naranja. Después del sunset quédate para blue hour - la ciudad iluminada con el cielo azul profundo es mágico.',
    tip: '🌅 Sunset: Llega 45 min ANTES (mesitas se llenan rápido). Vino: 4-6€, cerveza: 3€. Horario quiosco: hasta 22:00. OCUPADO: Viernes-domingo (muy lleno). Martes-jueves más tranquilo. Alternativa si está repleto: Mirador de Santa Luzia (5 min caminando, igual de bonito).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
    coordinates: { lat: 38.7169, lng: -9.1329 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7169,-9.1329'
  },
  {
    time: '20:30',
    title: 'Cena en Bairro Alto',
    description: 'Baja andando al Bairro Alto (15 min desde Graça). Este barrio es el epicentro nocturno de Lisboa: calles empinadas llenas de tascas, bares, gente con cervezas en la calle, fado saliendo de restaurantes, y ambiente bohemio. Para cenar, evita las trampas turísticas de Rua do Norte (menús en 5 idiomas = red flag). Ve a "Tasca da Esquina" (cocina portuguesa moderna, 15-25€), "Pharmacia" (restaurante en antigua farmacia con terraza y vistas, 20-30€), o "Cantina LX" (comida de autor portuguesa, 25-35€). Después de cenar, el Bairro Alto se transforma: cada puerta es un bar diferente (rock, jazz, fado, electrónica). Compra cerveza en tiendas (1€) y únete a la gente en las calles - es totalmente normal y legal.',
    tip: '🍽️ Reserva recomendada para restaurantes (especialmente viernes-sábado). Precio cena: 20-35€. TRUCO: Tascas escondidas en calles laterales = más baratas y auténticas. Después de cenar: bares abren 22:00-3:00. Compra cerveza en minimercados (1€ vs 4€ en bares). Seguro de noche - mucha gente, bien iluminado.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    coordinates: { lat: 38.7137, lng: -9.1452 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7137,-9.1452'
  },

  // DÍA 2
  {
    time: '09:00 - Día 2',
    title: 'Belém - Torre + Monasterio',
    description: 'Día 2 empieza en Belém (15 min en tranvía 15 desde Praça da Figueira). Primero, la Torre de Belém - fortaleza del siglo XVI en la orilla del río que parece sacada de un cuento de hadas. Llega cuando abren (10:00) para evitar colas. La entrada (8€) te lleva por las torres, mazmorras, terrazas con vistas al Tajo, y la famosa terraza con forma de rinoceronte tallada en piedra. Después (11:00) cruza la calle al Monasterio dos Jerónimos - obra maestra del gótico manuelino con 500 años de historia. La IGLESIA ES GRATIS y es donde está lo más espectacular: techos abovedados de 25 metros que parecen palmeras de piedra, la tumba de Vasco da Gama, y luz natural creando rayos de dios. El claustro (10€) es opcional pero hermoso.',
    tip: '🎫 Torre Belém: 8€. Jerónimos iglesia: GRATIS. Claustro: 10€. Combo torre+claustro: 14€ (ahorro 4€). HORARIO: 10:00-17:30 (invierno), 10:00-18:30 (verano). Lunes cerrado. TRUCO: Haz primero Torre (10:00 cuando abre, menos cola) → Jerónimos (11:00) → Pasteles (12:00).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.6916, lng: -9.2158 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6916,-9.2158'
  },
  {
    time: '12:00',
    title: 'Pastéis de Belém (los ORIGINALES)',
    description: 'Ahora viene EL MOMENTO. Camina 5 minutos hasta Pastéis de Belém - la pastelería original que inventó los pasteles de nata en 1837. Hay SIEMPRE cola en la tienda para llevar (30+ personas), pero el truco es entrar directamente a las SALAS DEL FONDO (señaladas como "Salão"). Son salones enormes con azulejos antiguos, meseros con pajarita, y mesas para sentarte. Aquí NO hay cola. Pide 2-3 pasteles por persona (1.30€ cada uno), un café, y espolvorea canela y azúcar glas encima (están en las mesas). La receta es secreta desde hace 200 años - solo 3 maestros pasteleros la conocen. El hojaldre crujiente + la crema caliente cremosa = explosión de sabor.',
    tip: '🥐 Precio: 1.30€/pastel, café 1€. TRUCO CLAVE: Evita cola - entra directo a "Salão" (salones del fondo). Pide mínimo 2 por persona. Canela + azúcar glas en las mesas. Abre 8:00-23:00 todos los días. Tronas disponibles, kid-friendly. Para llevar: pide caja de 6 o 12 (viajan bien).',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800',
    coordinates: { lat: 38.6975, lng: -9.2032 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6975,-9.2032'
  },
  {
    time: '14:00',
    title: 'LX Factory - Arte urbano',
    description: 'Uber o autobús hasta LX Factory (10 min desde Belém). Es una antigua fábrica textil convertida en hub creativo: naves industriales llenas de grafitis enormes, estudios de diseño, tiendas vintage, cafés hipsters, librerías alternativas, y el Puente 25 de Abril pasando literalmente por encima. Es Instagram paradise pero también tiene alma. Ve a Ler Devagar (librería espectacular con bicicleta voladora colgando del techo), explora las tiendas de ropa indie, tómate un café en "Landeau Chocolate" (el mejor brownie de Lisboa, 3.50€), y pasea viendo murales de artistas internacionales. Los domingos hay mercado vintage. La vibra es joven, artística, alternativa - totalmente diferente al Lisboa histórico.',
    tip: '☕ GRATIS: Pasear y ver murales. Café: 2-4€. Brownie Landeau: 3.50€ (BRUTAL, imperdible). DOMINGO: Mercado vintage 11:00-19:00. Librerías, tiendas diseño, estudios artísticos. Mejor momento: 14:00-18:00. Restaurantes para almorzar: "Rio Maravilha" (terraza con vistas puente).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800',
    coordinates: { lat: 38.7065, lng: -9.1799 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7065,-9.1799'
  },
  {
    time: '17:00',
    title: 'Time Out Market',
    description: 'Uber o Metro (Cais do Sodré) hasta el Time Out Market - mercado gastronómico con 40+ restaurantes, tascas, y chefs con estrella Michelin todo bajo un mismo techo. Es perfecto cuando viajas en grupo y cada uno quiere algo diferente: sushi, hamburguesas, comida portuguesa, pizza, mariscos, vegano, todo. Funciona así: recorres los puestos, pides en el que quieras, te dan un número, y te llaman cuando esté listo. Después buscas mesa (hay cientos) y comes. Destacados: "Henrique Sá Pessoa" (chef con estrella Michelin, pulpo increíble), "Alexandre Silva" (cocina portuguesa moderna), "Marlene Vieira" (pastelería brutal). Precios: 8-18€ por plato. Vibra: animada pero no ruidosa, mezcla de turistas y locales, funciona para familias.',
    tip: '🍽️ Precio: 10-20€/persona. HORARIO: 10:00-00:00 (domingos hasta 18:00). TRUCO: Evita 13:00-15:00 y 20:00-21:00 (lleno, difícil encontrar mesa). Mejor: 11:30 o 17:00-19:00. Barra central para beber vinos portugueses. Terraza exterior si hace buen tiempo.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    coordinates: { lat: 38.7058, lng: -9.1455 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7058,-9.1455'
  },
  {
    time: '19:30',
    title: 'Fado auténtico en Alfama',
    description: 'Termina tu viaje con la experiencia MÁS portuguesa: Fado en vivo en Alfama. El fado es Patrimonio de la Humanidad - música melancólica cantada con alma que te pone los pelos de punta incluso sin entender portugués. Ve a "Tasca do Chico" (Bairro Alto o Alfama, hay 2 locales) - tasca minúscula con azulejos, solo 20 personas, y fado espontáneo donde cantantes profesionales y amateurs se turnan. Es GRATIS (solo pagas lo que consumas - vino 3€, cerveza 2€, petiscos 4-8€). Alternativas: "A Baiuca" (Alfama, íntimo, reserva obligatoria), "Mesa de Frades" (Alfama, en una capilla antigua). Regla de oro: cuando alguien canta, silencio ABSOLUTO. Es sagrado. Dura 10-15 min por canción, después puedes volver a hablar hasta la siguiente.',
    tip: '🎵 Tasca do Chico: GRATIS (solo consumes). A Baiuca: reserva online obligatoria. HORARIO: 21:00-2:00 (empieza 22:00). Llega 21:00 para sitio. RESPETO: Silencio absoluto cuando cantan. Fotos/videos solo entre canciones (pregunta antes). Consumo mínimo: 1 bebida + petisco = 7-10€ total.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800',
    coordinates: { lat: 38.7115, lng: -9.1288 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7115,-9.1288'
  }
];

// ============================================================================
// LISBOA 3 DÍAS + SINTRA - Timeline completa
// ============================================================================

export const lisboa3DiasSintraTimeline: TimelineStop[] = [
  // DÍA 1 - LISBOA CLÁSICO
  {
    time: '09:00 - Día 1',
    title: 'Alfama al amanecer',
    description: 'Arranca tu primera mañana en el corazón histórico de Lisboa: Alfama. Este barrio medieval sobrevivió al devastador terremoto de 1755, así que cada calle adoquinada, cada escalera empinada, cada plaza escondida tiene siglos de historia. Empieza en la Catedral Sé (Largo da Sé) y simplemente piérdete subiendo. Verás ropa tendida entre balcones, oirás fado saliendo de alguna ventana abierta, y te cruzarás con abuelas comprando en tiendecitas que llevan abiertas desde antes de la dictadura. No luches contra las cuestas - son parte de la experiencia. Súbelas todas. Al final de cada una te espera una vista diferente: el río Tajo brillando al fondo, tejados naranjas escalonados, azulejos antiguos, esquinas llenas de grafitis modernos sobre paredes medievales. La magia de Alfama es que no ha cambiado en décadas - sigue siendo un barrio de vecinos, no un decorado turístico.',
    tip: '🚶 RUTA: Catedral Sé → calles aleatorias hacia arriba → Mirador Santa Luzia. Distancia: 1.5 km (pero con escaleras se siente como 3). GRATIS: Todo. Lleva agua, las subidas cansan. Mejor calzado: zapatillas con buen agarre. Hora pico turistas: 11:00-16:00, antes de las 10:00 es mágico y vacío.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7109, lng: -9.1333 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7109,-9.1333'
  },
  {
    time: '11:00',
    title: 'Castillo de San Jorge',
    description: 'Después de Alfama, sube al Castillo de San Jorge - la fortaleza que domina Lisboa desde hace más de mil años. Los moros lo construyeron en el siglo XI, después lo conquistaron los cristianos, y hoy es el mirador más espectacular de la ciudad. La entrada son 15€ pero vale cada céntimo: murallas medievales que puedes recorrer por dentro, torres con vistas 360° sobre Lisboa (ves el puente 25 de Abril, el Tajo, Alfama completa, los barrios modernos al norte), jardines con pavos reales paseando libremente, y ruinas arqueológicas donde ves capas de civilizaciones - fenicios, romanos, moros, portugueses. Lo mejor es caminar por las murallas: pasas por torres de vigilancia, atraviesas pasadizos de piedra, y en cada esquina descubres una vista nueva. Dedícale mínimo una hora - no es solo un castillo, es un parque enorme con historia en cada rincón.',
    tip: '🎫 Entrada: 15€ adultos, 7.50€ estudiantes/seniors. Compra online para evitar cola. HORARIO: 9:00-18:00 (invierno), 9:00-21:00 (verano). Lleva gorra/sombrero - casi no hay sombra. Cafetería cara dentro, mejor lleva snacks. TRUCO: Entra por la puerta de atrás (menos cola) - búscala en Google Maps como "Castelo de São Jorge - Entrada Norte".',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.7139, lng: -9.1334 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7139,-9.1334'
  },
  {
    time: '14:00',
    title: 'Baixa - Centro neurálgico',
    description: 'Baja del castillo hacia Baixa, el centro neurálgico de Lisboa reconstruido después del terremoto de 1755. Todo aquí es ordenado, geométrico, iluminista - calles en cuadrícula perfecta, plazas simétricas, edificios pombalinos de 4 pisos pintados en colores pastel. Empieza en la Praça do Comércio (plaza gigante abierta al Tajo con arcadas amarillas impresionantes), sube al Arco da Rua Augusta (3€ para el mirador en la cima - vistas 360° de Baixa y el río), después camina por Rua Augusta (calle peatonal principal llena de tiendas, artistas callejeros, turistas, vendedores de castañas asadas). Pasa por el Elevador de Santa Justa - ascensor neogótico de hierro de 1902 diseñado por un discípulo de Eiffel (puedes subir por 5.50€ pero la estructura es más bonita desde abajo). Termina en Rossio, la plaza donde solían quemar herejes en la Inquisición y hoy hay palomas, turistas, y portugueses tomando café en terrazas centenarias.',
    tip: '💰 Arco da Rua Augusta: 3€ (vistas brutales). Elevador Santa Justa: 5.50€ (opcional, más foto que experiencia). GRATIS: Pasear Baixa, Praça Comércio, Rossio, ver el elevador desde abajo. COMIDA: Cafés históricos en Rossio - café + pastel de nata = 2.50€. Restaurantes turísticos = evita los de Rua Augusta (caros y mediocres), mejor calles laterales.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: '18:30',
    title: 'Atardecer en Mirador da Graça',
    description: 'Para el mejor atardecer de Lisboa, uber hasta el Mirador da Graça (10 min desde Baixa). Este mirador tiene todo: vistas de 270° sobre la ciudad (ves Alfama, el Castillo, el Tajo, el puente, los barrios del oeste hasta Belém), terrazas con mesitas blancas bajo pinos centenarios, un quiosco sirviendo vinos portugueses bien fríos y cerveza Super Bock, y vibra 100% local. Llega mínimo 45 minutos antes del sunset (consulta hora exacta en Google). Pide vino blanco Vinho Verde (4€) o cerveza (3€), consigue mesita en primera fila mirando al oeste, y espera el show. Cuando el sol empieza a bajar, toda Lisboa se ilumina en dorado - los tejados naranjas brillan como fuego, las sombras se alargan dramáticamente, el Tajo refleja el cielo en tonos rosa/naranja/morado. Después del sunset quédate para blue hour: la ciudad iluminada con el cielo azul profundo es pura magia.',
    tip: '🌅 TIMING CRÍTICO: Llega 45-60 min ANTES del sunset (consulta hora). Mesitas primera fila se llenan RÁPIDO. Fin de semana = llega 1 hora antes. Vino: 4-6€, cerveza: 3€, petiscos: 5-8€. Quiosco horario: hasta 22:00. Si está repleto: Mirador Santa Luzia (igual de bonito, 10 min caminando). Lleva chaqueta - refresca después del sol.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
    coordinates: { lat: 38.7169, lng: -9.1329 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7169,-9.1329'
  },

  // DÍA 2 - BELÉM COMPLETO
  {
    time: '09:30 - Día 2',
    title: 'Torre de Belém',
    description: 'Día 2 dedicado por completo a Belém - el barrio de los descubrimientos portugueses. Sal temprano y toma el tranvía 15 desde Praça da Figueira (15 min, pasa cada 10 min). Tu primera parada es la Torre de Belém, la fortaleza del siglo XVI que parece sacada de un cuento de hadas - mezcla de estilo manuelino con torres blancas, baluartes, balcones sobre el río Tajo, y hasta un rinoceronte tallado en piedra (el primer rinoceronte que llegó a Europa). Llega exactamente cuando abren (10:00) para evitar las colas infernales que se forman después (en verano puede haber 1+ hora de espera a mediodía). La visita dura 30-45 min: subes por escaleras de caracol estrechas, pasas por las mazmorras donde encerraban prisioneros, sales a terrazas con vistas al Tajo y al puente 25 de Abril, y caminas por los baluartes defensivos imaginando cómo defendían Lisboa de invasores. Las vistas desde arriba son brutales - el río, los barcos pasando, Belém extendiéndose hacia el este.',
    tip: '🎫 Entrada: 8€ individual, 14€ combo Torre + Monasterio Jerónimos (compra combo, ahorras 4€). HORARIO: 10:00-17:30 (oct-abr), 10:00-18:30 (may-sep). Lunes CERRADO. Compra online para saltarte cola. Escaleras MUY estrechas - no apto para claustrofobia o movilidad reducida. Julio-agosto = llega 9:45 para ser de los primeros.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.6916, lng: -9.2158 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6916,-9.2158'
  },
  {
    time: '11:00',
    title: 'Monasterio dos Jerónimos',
    description: 'Desde la Torre, camina 10 minutos (o tranvía 15 una parada) hasta el Monasterio dos Jerónimos - la obra maestra absoluta del gótico manuelino portugués y Patrimonio de la Humanidad UNESCO. Este monstruo de piedra calcárea blanca fue construido con el oro de las especias que Vasco da Gama trajo de la India. Hay DOS partes: la IGLESIA (entrada GRATIS) y el CLAUSTRO (10€). Empieza por la iglesia - es donde está lo más espectacular: techos abovedados de 25 metros que parecen palmeras de piedra con decoraciones de cuerdas, anclas, y esfera armilar, la tumba de Vasco da Gama (el tipo que descubrió la ruta a India), la tumba del poeta Camões, y columnas octogonales con decoraciones de una delicadeza brutal. La luz natural entra por vitrales creando rayos de dios. El claustro (10€ extra) es hermoso pero opcional - dos pisos de arcadas talladas rodeando un jardín, perfecto para fotos de arcos infinitos.',
    tip: '💰 IGLESIA: GRATIS (imperdible). CLAUSTRO: 10€ (bonito pero opcional). Combo Torre+Claustro: 14€. LUNES: Todo cerrado. Cola iglesia: 20-40 min (verano). Mejor hora: 9:00-10:30 cuando abre. Audio-guía: 3€ (recomendada, explica decoraciones manuelinas). Tiempo visita: iglesia 30 min, claustro 20-30 min.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1580712771134-b48cf4863fe2?w=800',
    coordinates: { lat: 38.6979, lng: -9.2061 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6979,-9.2061'
  },
  {
    time: '13:00',
    title: 'Pastéis de Belém - Los ORIGINALES',
    description: 'Ahora viene el momento que todos esperan: probar los pasteles de nata ORIGINALES en la pastelería que los inventó en 1837. Camina 5 minutos desde el monasterio hasta Pastéis de Belém - la fábrica azul y blanca con cola eterna en la tienda para llevar. PERO ESPERA. No hagas la cola. El truco maestro: entra directamente por las puertas que dicen "SALÃO" (salones). Son salas enormes con azulejos antiguos hasta el techo, meseros con pajarita negra, mesas de mármol, y CERO cola. Siéntate, pide 2-3 pasteles por persona (1.30€ cada uno), un café (1€), y espera 5 minutos. Cuando lleguen calentitos, espolvorea canela y azúcar glas (están en las mesas en dispensadores). La receta es secreta hace 200 años - solo 3 maestros pasteleros vivos la conocen. El hojaldre está crujiente como obleas, la crema quemada por arriba ligeramente caramelizada. Es ridículamente bueno. Vas a entender por qué tienen una cola de 50 personas todos los días.',
    tip: '🥐 PRECIO: 1.30€/pastel, café 1€. TRUCO ORO: Evita cola tienda - entra DIRECTO a "Salão" (salones restaurante, señalizado). Pide mínimo 2 por persona. Canela + azúcar glas en las mesas. HORARIO: 8:00-23:00 todos los días. Para llevar: caja 6 pasteles = 9.20€, viajan bien hasta 24h. Niños bienvenidos, tronas disponibles.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800',
    coordinates: { lat: 38.6975, lng: -9.2032 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6975,-9.2032'
  },
  {
    time: '15:00',
    title: 'MAAT - Museo de Arte Moderno',
    description: 'Después del sugar rush de los pasteles, camina 10 minutos por el paseo marítimo hasta el MAAT (Museo de Arte, Arquitectura y Tecnología). El edificio por fuera ya es una obra de arte: estructura ondulante blanca de azulejos que parece una ola gigante saliendo del Tajo. PUEDES SUBIR AL TECHO GRATIS - es una rampa pública que sube hasta arriba del museo ofreciendo vistas al río, el puente 25 de Abril, y Belém. Muchos turistas no saben esto y pagan entrada (11€) solo para las exposiciones de dentro. Si te gusta arte contemporáneo/instalaciones/arquitectura moderna, la entrada vale la pena - exposiciones rotativas de artistas internacionales, instalaciones interactivas, y espacios de diseño brutalista. Si no eres muy de museos, solo sube al techo gratis, tómate fotos en la estructura ondulante, y sigue tu camino. El área alrededor tiene cafés modernos con terraza al río perfectos para descansar.',
    tip: '🎨 TECHO: GRATIS (acceso público). MUSEO: 11€ adultos, 5.50€ estudiantes. Combo MAAT + Electricidade: 15€. HORARIO: 11:00-19:00, martes cerrado. El techo cierra a las 19:00 también. GRATIS primer domingo de mes. Tiempo visita: 1-1.5h si entras, 20 min solo techo. Cafetería en planta baja con terraza al Tajo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800',
    coordinates: { lat: 38.6963, lng: -9.1987 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6963,-9.1987'
  },

  // DÍA 3 - SINTRA COMPLETO
  {
    time: '08:30 - Día 3',
    title: 'Tren a Sintra - Viaje al cuento de hadas',
    description: 'Día 3 es tu excursión a Sintra - el pueblo de palacios de colores escondido en las montañas a 40 min de Lisboa. Sal TEMPRANO. Esto es crítico. Coge el tren desde Estación Rossio (centro Lisboa) hacia Sintra - salen cada 20 min desde las 6:30am. Compra billete ida y vuelta (4.60€) en las máquinas automáticas. El viaje dura 40 min atravesando suburbios, campos, y finalmente montañas verdes hasta llegar al pueblo de Sintra. Cuando bajes del tren, NO camines al centro todavía. Ve DIRECTO a los autobuses 434 (circulares a Palacio Pena + Castelo dos Mouros, 7.60€ día completo hop-on hop-off) o 435 (va a Quinta da Regaleira, 5€). Cómpralos en el kiosco junto a la estación. La clave de Sintra es: llega temprano (antes 9am) y usa buses - las colas después de las 11am son demenciales (1-2h para entrar a palacios). Sintra es una fantasía - neblina en las montañas, palacios de colores imposibles, jardines laberínticos, bosques encantados. Vas a sentir que entraste a un cuento de hadas.',
    tip: '🚂 TREN: Estación Rossio (Lisboa) → Sintra. Frecuencia: cada 20 min. Precio: 2.30€ ida, 4.60€ ida/vuelta (compra ida/vuelta). Duración: 40 min. BUSES Sintra: 434 (Pena+Mouros) = 7.60€, 435 (Regaleira) = 5€. CRÍTICO: Sal de Lisboa antes 8:30 para llegar Sintra antes 9:30. Después 10:00 = caos absoluto.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800',
    coordinates: { lat: 38.7986, lng: -9.3881 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7986,-9.3881'
  },
  {
    time: '09:30',
    title: 'Palacio da Pena - Fantasía de colores',
    description: 'Súbete al bus 434 y en 15 min llegas a la entrada del Palacio da Pena - el palacio más icónico y fotogénico de Portugal. Es una explosión de colores imposible: muros amarillos, torres rojas, cúpulas azules, detalles verdes, todo mezclando estilos neorománico, neogótico, neo-manuelino, neo-islámico como si un niño diseñara un castillo de fantasía. Fue palacio de verano de la familia real portuguesa en el siglo XIX. Hay DOS entradas: solo jardines (10€) o palacio completo con jardines (20€). PAGA LOS 20€. El interior es una cápsula del tiempo - habitales reales conservadas exactamente como en 1910 cuando la monarquía cayó, decoración victoriana exuberante, vistas desde balcones 360° sobre las montañas y el Atlántico a lo lejos. Los jardines son 200 hectáreas de bosque con lagos, grutas, senderos escondidos, y miradores secretos. Dedícale mínimo 2 horas - es enorme.',
    tip: '🎫 Entrada PALACIO + JARDINES: 20€ (esencial). Solo jardines: 10€ (NO lo hagas, te pierdes lo mejor). Compra ONLINE con antelación - evitas cola de 1h+. HORARIO: 9:30-18:30 (verano), 10:00-17:00 (invierno). Último acceso 1h antes de cierre. Lleva agua y snacks - cafetería cara. Calzado cómodo - mucho caminar.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
    coordinates: { lat: 38.7877, lng: -9.3906 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7877,-9.3906'
  },
  {
    time: '12:30',
    title: 'Quinta da Regaleira - Jardines iniciáticos',
    description: 'Baja en bus al centro de Sintra, cambia al bus 435 o camina 15 min hasta Quinta da Regaleira - el lugar más misterioso y fascinante de Sintra. Este palacio neogótico con jardines laberínticos fue diseñado por un millonario masón obsesionado con alquimia, templarios, y simbolismo esotérico. Lo más famoso es el POZO INICIÁTICO - una escalera de caracol que baja 27 metros bajo tierra con 9 niveles (simbolizando los 9 círculos del infierno de Dante o los 9 niveles de iniciación masónica). Bajas en espiral, llegas al fondo donde hay una rosa de los vientos en el suelo, y sales por túneles secretos que te llevan a cascadas escondidas. Los jardines son una locura: grutas artificiales, torres escondidas, lagos con patos, capillas secretas, túneles conectando todo, y simbología esotérica por todas partes. Es como un parque de aventuras para adultos. Lleva linterna en el móvil - algunos túneles están oscuros.',
    tip: '🎫 Entrada: 12€ adultos, 6€ niños. HORARIO: 9:30-19:00 (verano), 9:30-18:00 (invierno). Compra online recomendada (verano = colas largas). Tiempo visita: 1.5-2h mínimo. IMPERDIBLE: Pozo Iniciático (baja los 9 niveles), túneles secretos, Gruta do Labirinto. Lleva linterna móvil para túneles. Calzado antideslizante - escaleras húmedas.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800',
    coordinates: { lat: 38.7963, lng: -9.3962 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7963,-9.3962'
  },
  {
    time: '15:00',
    title: 'Castelo dos Mouros - Ruinas en las nubes',
    description: 'Desde Regaleira, sube de nuevo en el bus 434 hasta el Castelo dos Mouros - fortaleza musulmana del siglo VIII abandonada en ruinas en la cima de la montaña. Es completamente diferente a los palacios: sin colores, sin decoración, solo murallas de piedra gris serpenteando por las rocas entre bosque y neblina. Parece salido de Game of Thrones. La visita consiste en caminar por las murallas - subes y bajas escaleras de piedra antigua, pasas por torres semidestruidas, y en cada tramo tienes vistas brutales: el Palacio da Pena colorido emergiendo de los árboles, el pueblo de Sintra abajo en el valle, el Atlántico brillando a lo lejos en días claros. Cuando hay neblina (frecuente) es mágico - las murallas desaparecen entre nubes, los árboles parecen fantasmas, y te sientes en otra dimensión. Ojo: hay muchas escaleras irregulares y zonas sin barandilla - no apto para vértigo severo.',
    tip: '🎫 Entrada: 10€. Combo Pena + Mouros: 26€ (ahorro 4€). HORARIO: 9:30-18:30 (verano), 10:00-17:00 (invierno). Tiempo visita: 1h. FÍSICO: Muchas escaleras, subidas empinadas, zonas sin barandilla. Lleva agua. Mejor CON neblina (ambiente épico) o día claro (vistas infinitas). Calzado trekking recomendado - piedras resbaladizas.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1552832230-0ab456afa00c?w=800',
    coordinates: { lat: 38.7924, lng: -9.3896 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7924,-9.3896'
  },
  {
    time: '17:00',
    title: 'Centro de Sintra - Travesseiros y despedida',
    description: 'Baja al centro de Sintra para tu última parada del día. El pueblo es un laberinto de callecitas medievales empedradas, tiendas de souvenirs artesanales, pastelerías vendiendo dulces conventuales, y plazas con palacios de colores pastel. Lo imperdible aquí: probar las TRAVESSEIROS en la pastelería Piriquita (fundada 1862, Rua das Padarias 1). Son hojaldres rellenos de crema de almendras que solo se hacen en Sintra - textura crujiente por fuera, relleno dulce cremoso por dentro. Pide 2 (1.50€ cada uno) y un café. Después pasea por la Praça da República (plaza principal con fuentes y Palacio Nacional - el del techo con dos chimeneas cónicas gigantes), recorre tiendas vendiendo azulejos pintados a mano, quesos, vinos, y artesanías portuguesas. Sobre las 18:00-18:30 regresa a la estación y toma el tren de vuelta a Lisboa. Vas a llegar agotado pero con la cabeza llena de imágenes de cuento de hadas.',
    tip: '🥐 Travesseiros Piriquita: 1.50€/unidad. Piriquita I (original, Rua Padarias 1) vs Piriquita II (más grande, mejor para sentarse). TAMBIÉN PRUEBA: Queijadas de Sintra (tartaletas de queso dulce). Centro Sintra: GRATIS pasear. Tiendas cierran 19:00-19:30. Regreso Lisboa: Tren hasta 23:00 (cada 20-30 min). Cena en Lisboa - llegas ~19:30.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1534850990928-479f9d74342c?w=800',
    coordinates: { lat: 38.7979, lng: -9.3906 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7979,-9.3906'
  }
];

// ============================================================================
// LISBOA SEMANA COMPLETA - 7 días explorando Lisboa y alrededores
// ============================================================================

export const lisboaFullWeekTimeline: TimelineStop[] = [
  // DÍA 1 - LO ESENCIAL DE LISBOA
  {
    time: '09:00 - Día 1',
    title: 'Alfama + Castillo de San Jorge',
    description: 'Tu primera semana en Lisboa empieza por todo lo alto: Alfama y el Castillo. Sal temprano para evitar las hordas turísticas. Alfama es el barrio que sobrevivió al terremoto de 1755 - calles medievales retorcidas, escaleras empinadas entre casas de azulejos desgastados, ropa tendida cruzando balcones, y abuelas barriendo las puertas como llevan haciendo 60 años. Piérdete durante 1 hora subiendo calles aleatorias. Cada esquina es una postal. Después sube al Castillo de San Jorge (15€) - fortaleza mora del siglo XI con las mejores vistas de Lisboa. Camina por las murallas medievales, sube a las torres de vigilancia, y contempla los 360° sobre la ciudad: Alfama escalonada hacia el Tajo, el puente 25 de Abril al oeste, barrios modernos al norte. Hay pavos reales sueltos en los jardines (en serio). Dedícale 1.5 horas - no es solo un castillo, es un parque arqueológico enorme con ruinas de fenicios, romanos, moros, y cristianos.',
    tip: '🎫 Castillo: 15€ adultos, combo con audioguía 18€. Compra online para evitar colas. HORARIO: 9:00-18:00 (invierno), 9:00-21:00 (verano). Alfama GRATIS - solo piérdete. Lleva agua, las cuestas cansan. Mejor calzado: zapatillas trekking. Evita 11:00-16:00 (lleno de tours).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7109, lng: -9.1333 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7109,-9.1333'
  },
  {
    time: '14:00',
    title: 'Baixa + Chiado - Centro histórico',
    description: 'Después del Castillo, baja a Baixa - el centro neurálgico reconstruido después del terremoto con cuadrícula geométrica perfecta. Empieza en Praça do Comércio (plaza gigante amarilla abierta al Tajo), sube al Arco da Rua Augusta (3€, mirador 360°), camina por Rua Augusta (calle peatonal con artistas, tiendas, cafés), ve el Elevador de Santa Justa desde abajo (estructura neogótica de hierro diseñada por discípulo de Eiffel - subir cuesta 5.50€ pero es más bonito desde fuera), y termina en Rossio. Desde ahí sube al Chiado - barrio bohemio de librerías centenarias, teatros, cafés literarios donde Pessoa escribía, tiendas de diseño portugués, y la Brasileira (café histórico con estatua de Pessoa sentado en la terraza - foto obligatoria). Chiado es más elegante que Baixa, más cultural, más local. Perfecto para pasear sin rumbo y descubrir tiendas escondidas.',
    tip: '💰 Arco da Rua Augusta: 3€ (vistas brutales, 5 min). Elevador Santa Justa: 5.50€ (opcional, más foto que útil). TODO LO DEMÁS: GRATIS. Café en Brasileira: 2-4€ (turístico pero icónico). Librerías recomendadas: Livraria Bertrand (más antigua del mundo, 1732), Ler Devagar (diseño espectacular). Tiempo total: 2-3h caminando tranquilo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: '19:00',
    title: 'Atardecer + Cena en Bairro Alto',
    description: 'Para el atardecer, uber al Mirador da Graça o Mirador de Santa Catarina (ambos espectaculares). Llega 45 min antes del sunset, pide vino blanco Vinho Verde (4€) o cerveza Super Bock (3€), consigue mesita con vistas, y disfruta el show: Lisboa iluminándose en dorado, el Tajo reflejando el cielo rosa/naranja, toda la ciudad a tus pies. Después del sunset, baja al Bairro Alto para cenar. Este barrio es puro caos organizado: calles empinadas llenas de tascas, bares minúsculos, gente bebiendo en las calles, fado saliendo de restaurantes. Evita las trampas turísticas de Rua do Norte (menús en 5 idiomas = red flag). Ve a tascas escondidas en calles laterales: "Tasca da Esquina" (portuguesa moderna, 20€), "Cantina LX" (de autor, 30€), o simplemente entra donde veas portugueses cenando. Después de las 22:00 el Bairro Alto se transforma en fiesta - cada puerta es un bar diferente (rock, jazz, electrónica, fado).',
    tip: '🌅 Sunset: Consulta hora, llega 45 min antes. Fin de semana = 1h antes. Vino/cerveza: 3-5€. CENA: 20-35€/persona en restaurantes decentes. TRUCO: Compra cerveza en minimercados (1€) y bebe en las calles con locales (totalmente legal y normal). Bares abren 22:00-3:00. Seguro de noche - lleno de gente.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
    coordinates: { lat: 38.7137, lng: -9.1452 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7137,-9.1452'
  },

  // DÍA 2 - BELÉM COMPLETO
  {
    time: '09:30 - Día 2',
    title: 'Belém - Torre + Monasterio Jerónimos',
    description: 'Día 2 dedicado a Belém, el barrio de los descubrimientos. Tranvía 15 desde Praça da Figueira (15 min). Empieza por la Torre de Belém (10:00 cuando abre - crítico para evitar colas). Esta fortaleza del siglo XVI en el Tajo parece un castillo de cuento: estilo manuelino blanco, torres, baluartes, terrazas sobre el río, y un rinoceronte tallado en piedra. La visita dura 30-40 min: subes escaleras de caracol, ves mazmorras, sales a terrazas con vistas. Después (11:00) cruza la calle al Monasterio dos Jerónimos - obra maestra gótica manuelina Patrimonio UNESCO. La IGLESIA es GRATIS y tiene lo más espectacular: techos abovedados de 25m como palmeras de piedra, tumba de Vasco da Gama, luz natural creando rayos de dios. El claustro (10€ extra) es hermoso pero opcional. Si pagas, son dos pisos de arcadas talladas rodeando jardín - Instagram paradise.',
    tip: '🎫 Torre: 8€. Jerónimos iglesia: GRATIS. Claustro: 10€. COMBO Torre+Claustro: 14€ (ahorro 4€). HORARIO: 10:00-17:30 (invierno), 10:00-18:30 (verano). LUNES TODO CERRADO. Compra combo online para saltarte colas (verano = 1h+ espera). Haz Torre primero (10:00) → Jerónimos (11:00) → Pasteles (12:00).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.6916, lng: -9.2158 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6916,-9.2158'
  },
  {
    time: '12:30',
    title: 'Pastéis de Belém + MAAT',
    description: 'Hora del momento más dulce del viaje: pasteles de nata ORIGINALES en Pastéis de Belém (5 min andando desde Jerónimos). Evita la cola de la tienda - entra DIRECTO a los "Salões" (salones del fondo señalizados). Son salas enormes con azulejos antiguos, meseros con pajarita, y CERO espera. Siéntate, pide 3 pasteles por persona (1.30€ cada uno), café (1€), espolvorea canela y azúcar glas (en las mesas), y alucina con el hojaldre crujiente + crema quemada. Receta secreta 200 años. Después camina 10 min por el paseo marítimo hasta el MAAT - museo de arte/arquitectura/tecnología en edificio ondulante blanco como una ola. SUBE AL TECHO GRATIS (rampa pública con vistas al Tajo y puente 25 de Abril). Las exposiciones de dentro (11€) son arte contemporáneo - solo entra si te va el rollo, si no, el techo gratis es suficiente.',
    tip: '🥐 Pasteles: 1.30€/unidad, café 1€. TRUCO: Entra directo a "Salão" (evitas 30+ min de cola). HORARIO: 8:00-23:00 diario. MAAT TECHO: GRATIS. Museo: 11€ (solo si te gusta arte contemporáneo). Horario museo: 11:00-19:00, martes cerrado. Primer domingo mes gratis. Cafetería terraza al río.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800',
    coordinates: { lat: 38.6975, lng: -9.2032 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6975,-9.2032'
  },

  // DÍA 3 - SINTRA
  {
    time: '08:30 - Día 3',
    title: 'Sintra - Pena + Regaleira + Mouros',
    description: 'Día 3 es tu excursión a Sintra - pueblo de palacios mágicos en las montañas. SAL TEMPRANO (tren 8:30 desde Rossio). Tren 40 min (4.60€ ida/vuelta). Llegas 9:10, compras bus 434 (Pena+Mouros, 7.60€) y 435 (Regaleira, 5€), y subes directo al Palacio da Pena (10:00 cuando abre). Es una fantasía de colores - amarillo, rojo, azul, verde mezclando estilos neo-todo. Paga entrada completa palacio+jardines (20€, compra online). Interior = habitaciones reales conservadas desde 1910, vistas 360° desde balcones. Jardines = 200 hectáreas de bosque encantado. 2 horas mínimo. Después baja y visita Quinta da Regaleira (12€) - palacio masónico con jardines laberínticos, el famoso Pozo Iniciático (escalera de caracol bajando 27m bajo tierra con túneles secretos), grutas, cascadas. 1.5h mínimo. Termina con Castelo dos Mouros (10€) - ruinas musulmanas del siglo VIII con murallas serpenteando entre neblina y vistas épicas. 1h. Regresa al centro, prueba Travesseiros en Piriquita (hojaldres de almendra, 1.50€), y tren de vuelta a Lisboa.',
    tip: '🚂 TREN: Rossio → Sintra, 4.60€ ida/vuelta, 40 min. SAL ANTES 9:00 (crítico). BUSES: 434 (Pena+Mouros) 7.60€, 435 (Regaleira) 5€. ENTRADAS: Pena 20€, Regaleira 12€, Mouros 10€. TODO ONLINE con antelación (evitas colas 1h+). Lleva agua, snacks, calzado trekking. Día completo agotador pero mágico.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
    coordinates: { lat: 38.7877, lng: -9.3906 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7877,-9.3906'
  },

  // DÍA 4 - CASCAIS + COSTA ESTORIL
  {
    time: '10:00 - Día 4',
    title: 'Tren a Cascais - Riviera portuguesa',
    description: 'Día 4 dedicado a la costa. Toma el tren desde Estación Cais do Sodré hacia Cascais (40 min, 2.40€, sale cada 20 min). El viaje ya es espectacular - el tren va pegado al Tajo/Atlántico con vistas al agua todo el recorrido. Pasas por Belém, Oeiras, Estoril (donde está el casino que inspiró Casino Royale de James Bond), y llegas a Cascais - pueblo pesquero convertido en resort elegante. Cascais tiene playas urbanas de arena dorada (Praia da Ribeira, Praia da Rainha - pequeñas pero bonitas), un casco antiguo peatonal lleno de tiendas de surf/ropa/artesanías, restaurantes de mariscos con terrazas, y vibra relajada de pueblo costero. Pasea por el puerto viendo barcos de vela, camina por el paseo marítimo hasta Boca do Inferno (acantilados donde las olas rompen con fuerza brutal - suena como truenos), alquila bici para recorrer el carril bici costero, o simplemente túmbate en la playa.',
    tip: '🚂 TREN: Cais do Sodré → Cascais, 2.40€, 40 min, cada 20 min. Úsalo todo el día (puedes bajar en Estoril, pasear, volver a subir). PLAYAS: GRATIS, llenas en verano. BICI: Alquiler 5-10€/día, carril bici 9km hasta Guincho. COMIDA: Mariscos 15-30€, hamburguesas 8-12€. Mercado peces fresco en el puerto. Regreso Lisboa: tren hasta 1:30am.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1581972416774-540e51e07e8e?w=800',
    coordinates: { lat: 38.6979, lng: -9.4208 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6979,-9.4208'
  },
  {
    time: '15:00',
    title: 'Guincho - Playa salvaje y surf',
    description: 'Desde Cascais, toma el bus 405 o 415 (30 min, 2€) o alquila bici (9km por carril bici costero) hasta Playa de Guincho. Es el polo opuesto de las playas urbanas de Cascais: kilómetros de arena blanca salvaje, dunas enormes, viento constante del Atlántico, olas gigantes, y el cabo da Roca (punto más occidental de Europa continental) visible al norte. Guincho es paraíso de surfistas y kitesurfistas - siempre hay decenas de cometas de colores volando. Hay escuelas de surf ofreciendo clases (40-50€ incluye tabla, neopreno, instructor). Si no surfeas, simplemente camina por la playa infinita, siéntete pequeño ante el Atlántico, y respira el aire salado. HAY restaurantes junto a la playa sirviendo pescado fresco (15-25€) - "Muchaxo" es famoso por pescado a la brasa con vistas a las olas.',
    tip: '🏄 BUS: 405/415 desde Cascais, 30 min, 2€. BICI: 9km desde Cascais (carril bici todo el recorrido). SURF: Clases 40-50€ (2h), alquiler tabla+neopreno 20€. COMIDA: Restaurantes 15-30€, brutal el pescado fresco. VIENTO: Siempre hay (por eso hay tanto kitesurf). Lleva chaqueta incluso en verano. Regreso Cascais: bus cada hora.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800',
    coordinates: { lat: 38.7311, lng: -9.4753 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7311,-9.4753'
  },

  // DÍA 5 - BARRIOS ALTERNATIVOS
  {
    time: '10:00 - Día 5',
    title: 'LX Factory - Arte urbano y creatividad',
    description: 'Día 5 es para descubrir el Lisboa alternativo y creativo. Empieza en LX Factory (bus/uber 10 min desde centro) - antigua fábrica textil bajo el Puente 25 de Abril convertida en hub creativo. Naves industriales de ladrillo rojo llenas de murales gigantes de artistas internacionales, estudios de diseño, tiendas vintage, cafés hipsters, restaurantes de brunch, y la librería Ler Devagar (espacio espectacular con bicicleta voladora colgando del techo, estanterías hasta el techo de 10m, cafetería entre libros). Los domingos hay mercado vintage (11:00-19:00) con ropa, vinilos, artesanías. Es Instagram paradise pero también tiene alma - muchos creativos y startups trabajan aquí. Tómate un café en Landeau Chocolate (brownie MÁS brutal de Lisboa, 3.50€), recorre las tiendas de diseño portugués independiente, y empápate del ambiente joven y artístico.',
    tip: '☕ GRATIS: Pasear, ver murales, entrar a Ler Devagar. Café: 2-4€. Brownie Landeau: 3.50€ (IMPERDIBLE, el mejor). DOMINGO: Mercado vintage 11:00-19:00. Tiendas diseño, estudios, galerías. Brunch restaurantes: 10-18€. "Rio Maravilha" terraza con vistas puente. Llega 10:00-11:00 (abre tarde, ambiente despega después).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800',
    coordinates: { lat: 38.7065, lng: -9.1799 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7065,-9.1799'
  },
  {
    time: '14:00',
    title: 'Cais do Sodré - Mercado + Street Art',
    description: 'Desde LX Factory, uber o camina 15 min hasta Cais do Sodré - barrio que pasó de zona roja peligrosa a epicentro cultural en 10 años. Empieza en Time Out Market - mercado gastronómico con 40+ puestos de chefs con estrella Michelin, tascas, comida internacional, todo bajo un techo. Funciona así: recorres puestos, pides donde quieras, te dan número, buscas mesa (hay cientos), te llaman cuando esté listo. Precios: 10-20€/persona. Perfecto para grupos - cada uno come lo que quiere. Después del mercado, explora las calles alrededor - Rua Nova do Carvalho (la famosa "Pink Street" pintada de rosa fosforito llena de bares de copas y discotecas), calles laterales con murales enormes de artistas urbanos portugueses, tiendas de discos, bares de gin, y vibra joven/alternativa. De noche (después 23:00) es zona de fiesta heavy - discotecas, bares de electrónica, reggae, todo.',
    tip: '🍽️ Time Out Market: 10-20€/persona. HORARIO: 10:00-00:00 (domingo hasta 18:00). Evita 13:00-15:00 y 20:00-21:00 (llenísimo). Mejor: 11:30 o 16:00-18:00. Pink Street: Foto de día (pintoresca), fiesta de noche (bares abren 23:00). Street art GRATIS - camina calles aleatorias. Bares gin: "Pensão Amor" (antiguo burdel convertido en bar, decoración loca).',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    coordinates: { lat: 38.7058, lng: -9.1455 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7058,-9.1455'
  },
  {
    time: '18:00',
    title: 'Alcântara - Rooftops y Sunset',
    description: 'Para el atardecer, quédate en la zona de Alcântara/LX Factory y sube a algún rooftop con vistas al Puente 25 de Abril. "PARK" es el rooftop más famoso - bar en la azotea de un parking con vistas 360°, tumbonas, mesas bajas, DJs los fines de semana, y ambiente relajado. Pide gin tonic (8-10€) o cerveza (4€), consigue sitio con vistas al puente, y observa el atardecer: el sol baja detrás del puente 25 de Abril creando siluetas épicas, el Tajo refleja naranja/rosa, toda Lisboa se ilumina. Después del sunset quédate - el ambiente nocturno es genial, música electrónica chill, gente joven internacional y local, y el puente iluminado de noche es espectacular. Alternativa: "Rio Maravilha" (terraza restaurante en LX Factory con vistas similares, más tranquilo, mejor comida - 15-25€).',
    tip: '🌅 PARK rooftop: Entrada gratis, consumición 4-15€. HORARIO: 13:00-2:00 (verano), cierra antes invierno. Llega 30-45 min antes sunset (se llena). Fin de semana = DJs + fiesta. Rio Maravilha: Más cena que copas, reserva recomendada, 20-30€/persona. Ambos con vistas puente 25 de Abril. Lleva chaqueta - refresca de noche.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
    coordinates: { lat: 38.7048, lng: -9.1755 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7048,-9.1755'
  },

  // DÍA 6 - PARQUE DAS NAÇÕES
  {
    time: '10:00 - Día 6',
    title: 'Parque das Nações - Lisboa futurista',
    description: 'Día 6 te lleva al futuro de Lisboa: Parque das Nações, construido para la Expo 98 y hoy el barrio más moderno de la ciudad. Metro línea roja hasta "Oriente" (20 min desde centro). Cuando salgas de la estación (diseñada por Calatrava - estructura blanca futurista como un esqueleto de dinosaurio), estarás en otro mundo: rascacielos de cristal, paseo marítimo de 5km junto al Tajo, arquitectura vanguardista, puentes peatonales modernos, jardines perfectamente cuidados, y ambiente tranquilo de barrio residencial sin turistas. Empieza caminando por el paseo marítimo hacia el Oceanário. Pasarás por el Teleférico (6€ ida, 9€ ida/vuelta, 20 min de recorrido sobre el río con vistas), la Torre Vasco da Gama (torre de hotel más alta de Portugal, 145m), el Pabellón de Portugal (estructura modernista con techo de hormigón que parece flotar), y jardines con fuentes danzantes.',
    tip: '🚇 METRO: Línea roja hasta "Oriente", 1.50€ (recarga tarjeta Viva Viagem). TELEFÉRICO: 6€ ida, 9€ ida/vuelta (bonito pero opcional). PASEO GRATIS: 5km junto al río, perfecto para caminar/correr. Centro comercial Vasco da Gama (compras si llueve). Menos turístico que centro - ambiente más local/familiar. Lleva calzado cómodo - mucho caminar.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1582564286939-400a311013a2?w=800',
    coordinates: { lat: 38.7681, lng: -9.0938 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7681,-9.0938'
  },
  {
    time: '14:00',
    title: 'Oceanário de Lisboa',
    description: 'La joya del Parque das Nações es el Oceanário - uno de los acuarios más grandes y espectaculares de Europa. El edificio parece flotar sobre el agua (diseño Álvaro Siza Vieira). Dentro hay UN tanque central GIGANTE de 5000m³ con decenas de especies conviviendo: tiburones, rayas manta, atunes, peces luna enormes, sardinas en bancos brillantes, y el protagonista - un pez guitarra gigante que lleva aquí 25 años. Alrededor del tanque central hay 4 hábitats recreando océanos diferentes: Atlántico Norte (nutrias adorables jugando), Antártico (pingüinos nadando bajo el agua), Pacífico tropical (corales de colores imposibles), Índico (peces exóticos de formas alienígenas). La experiencia es inmersiva - pasas por túneles de cristal con peces nadando sobre ti, áreas oscuras con medusas bioluminiscentes flotando hipnóticamente, y zonas interactivas explicando océanos. Niños lo aman, adultos también. Dedícale 2 horas mínimo.',
    tip: '🎫 Entrada: 25€ adultos, 17€ niños (3-12), 16€ seniors. Compra online (descuento 10% + evitas cola). HORARIO: 10:00-19:00 (verano), 10:00-18:00 (invierno). Último acceso 1h antes cierre. Tiempo visita: 2-3h. Restaurante/cafetería dentro (caro, mejor lleva snacks). IMPERDIBLE: Tanque central + nutrias + pingüinos + medusas. Kid-friendly total.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    coordinates: { lat: 38.7633, lng: -9.0939 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7633,-9.0939'
  },

  // DÍA 7 - RELAX Y DESPEDIDA
  {
    time: '10:00 - Día 7',
    title: 'Mercado da Ribeira - Compras gastronómicas',
    description: 'Tu último día en Lisboa empieza tranquilo. Ve al Mercado da Ribeira / Time Out Market (el mismo sitio - parte es mercado tradicional, parte es food hall moderno). La sección MERCADO TRADICIONAL (abre 6:00, funciona hasta 14:00) vende productos frescos portugueses: quesos artesanales de Serra da Estrela, embutidos ibéricos, conservas de pescado gourmet en latas vintage, aceites de oliva, vinos del Alentejo/Douro, azafrán, sal marina de Flor de Sal, dulces conventuales. Es perfecto para comprar regalos/souvenirs comestibles auténticos (NO turísticos). Los vendedores son majos y te dejan probar todo. Después pasa a la sección TIME OUT para brunch tardío - hay opciones de todo tipo (huevos, tostadas, pasteles, smoothies, 8-15€). Come tranquilo viendo el ambiente del mercado - mezcla de locales comprando ingredientes y turistas probando restaurantes.',
    tip: '🛍️ Mercado tradicional: 6:00-14:00 (mejor 9:00-12:00, más surtido). SOUVENIRS: Conservas Comur/Tricana (3-8€ lata), queso Serra Estrela (12-20€/kg), vinos 8-30€, aceite oliva 10-25€. Time Out brunch: 10-20€. LLEVA: Bolsa reutilizable (algunos vendedores no tienen). Efectivo (algunos no aceptan tarjeta). Compras viajan bien en maleta.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    coordinates: { lat: 38.7058, lng: -9.1455 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7058,-9.1455'
  },
  {
    time: '14:00',
    title: 'Jardim da Estrela - Relax en el parque',
    description: 'Para tu última tarde, escápate al Jardim da Estrela - parque romántico del siglo XIX en el barrio de Estrela (tranvía 28 o uber 10 min desde centro). Es el parque más bonito de Lisboa: lagos con patos y cisnes, kiosco de hierro art nouveau en el centro (ahora es café con terraza), caminos arbolados, jardines de rosas, árboles centenarios gigantes, y césped donde locales hacen picnic. Trae una manta, compra pasteles en alguna pastelería cercana, una botella de vino, y pasa la tarde tirado en el césped leyendo/escuchando música/observando gente. Los domingos hay familias con niños, parejas, grupos de amigos con guitarras. Es puro slowlife lisboeta. Al lado está la Basílica da Estrela (iglesia neoclásica blanca enorme, entrada gratis, sube a la cúpula por 5€ para vistas 360°). El barrio Estrela alrededor es residencial elegante - pasea viendo casas señoriales, tiendas boutique, cafés de barrio.',
    tip: '🌳 PARQUE: GRATIS (abierto 7:00-00:00). Kiosco café: 2-5€. LLEVA: Manta, picnic (compra en mercado o pastelería cercana). BASÍLICA: Gratis iglesia, 5€ cúpula (vistas brutales). Tranvía 28 para aquí - aprovecha para dar vuelta completa si no lo hiciste (experiencia icónica). Barrio tranquilo, perfecto para desconectar antes de volar.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    coordinates: { lat: 38.7149, lng: -9.1605 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7149,-9.1605'
  },
  {
    time: '19:00',
    title: 'Última cena + Fado de despedida',
    description: 'Para tu última noche en Lisboa, cierra con broche de oro: cena + fado auténtico en Alfama. Ve a una casa de fados tradicional como "Tasca do Chico" (gratis, solo pagas consumiciones - vino 3€, petiscos 5-8€, ambiente íntimo con fadistas profesionales y amateurs turnándose), "A Baiuca" (reserva obligatoria, 15€ mínimo consumición, muy auténtico, 25 personas máximo), o "Mesa de Frades" (en capilla antigua, más turístico pero brutal, 20-30€). El fado es Patrimonio Inmaterial UNESCO - música melancólica portuguesa que te pone los pelos de punta. Cuando alguien canta, SILENCIO ABSOLUTO (es sagrado). Dura 10-15 min por canción, después puedes hablar/comer hasta la siguiente. Combina la cena con petiscos portugueses - queso, embutidos, bacalao, pulpo - y vino portugués. Es la experiencia MÁS portuguesa que existe. Vas a terminar emocionado aunque no entiendas las letras (que hablan de saudade - nostalgia/melancolía imposible de traducir).',
    tip: '🎵 Tasca do Chico: GRATIS (solo consumes), llega 21:00 para sitio, empieza 22:00. A Baiuca: reserva online obligatoria, 15€ mínimo. Mesa de Frades: 25-35€, reserva recomendada. REGLAS: Silencio cuando cantan, fotos solo entre canciones (pregunta antes). Consumo típico: vino + petiscos = 15-25€ total. ALTERNATIVA: Restaurantes Alfama con fado en vivo durante cena (30-50€, más turístico pero cómodo).',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800',
    coordinates: { lat: 38.7115, lng: -9.1288 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7115,-9.1288'
  }
];
