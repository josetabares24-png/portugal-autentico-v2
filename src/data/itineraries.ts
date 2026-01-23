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
    title: 'Mirador de Santa Luzia — La postal que todo el mundo reconoce',
    description: 'Después de perderte por las callejuelas de Alfama, subes una última cuesta y llegas a este mirador. Es el momento en que entiendes por qué llaman a Lisboa "la ciudad de las siete colinas" — porque desde aquí ves cómo los tejados naranjas descienden en cascada hacia el Tajo, cómo las calles serpentean entre las casas, y cómo la geografía de la ciudad cobra sentido. Las vistas son exactamente la postal que has visto en Instagram mil veces, pero verla en persona es diferente: el panteón nacional blanco brillando al fondo, el río azul profundo, y si tienes suerte, algún barco de crucero pasando lentamente que añade movimiento al cuadro perfecto. Los paneles de azulejos del siglo XVIII que flanquean la terraza cuentan la historia de Lisboa antes del terremoto de 1755 — tómate cinco minutos para observarlos de cerca. Representan la Praça do Comércio antes de ser destruida y la conquista del castillo a los moros. Al lado hay un kiosco donde los vecinos del barrio toman café a cualquier hora — únete a ellos. Y las buganvillas moradas que trepan por la pérgola crean un marco natural que hace que cada foto parezca una obra de arte. Este es el mirador más fotografiado de Lisboa, y cuando estés aquí entenderás por qué.',
    tip: '📸 Mejor hora para fotos: 10:00-11:00 (luz dorada horizontal, menos sombras duras). El mirador se llena después de las 11:00 con grupos organizados. Hay otro mirador justo al lado (Portas do Sol) con menos gente y vistas complementarias — visítalos ambos, están a 30 segundos caminando. El kiosco abre desde temprano y sirve café, zumos naturales, y pasteles de nata.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1588642411190-3e72e93b1497?w=800',
    coordinates: { lat: 38.7115, lng: -9.1294 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7115,-9.1294'
  },
  {
    time: '11:30',
    title: 'Castelo de São Jorge — Donde nació Lisboa',
    description: 'Este castillo no es solo un castillo — es literalmente donde nació Lisboa. Los fenicios fundaron aquí el primer asentamiento hace tres mil años porque desde esta colina se domina todo: quién viene navegando por el río, quién se acerca por tierra, y quién intenta atacar. La posición estratégica es evidente cuando subes: desde las murallas ves 360 grados sobre la ciudad, el Tajo serpenteando hacia el Atlántico, y los barrios desplegándose como un mapa en relieve. Después de los fenicios vinieron los romanos (dejaron ruinas que todavía se excavan), luego los moros que construyeron la fortaleza que ves ahora en el siglo XI, y finalmente los cristianos que la conquistaron en 1147 en una batalla épica que duró meses. La entrada cuesta 15 euros, y aunque pueda parecer caro, cuando subas a las murallas y veas Lisboa desplegada a tus pies, entenderás por qué todos querían conquistar este lugar. Hay pavos reales sueltos por los jardines (llegaron hace décadas y se quedaron, nadie sabe exactamente cómo), jardines arqueológicos donde puedes ver ruinas de 2500 años superpuestas, y un periscopio antiguo en la torre principal que proyecta la ciudad en tiempo real en una pantalla — es fascinante ver cómo se mueve la gente, los coches, los barcos, todo en miniatura. Tómate tu tiempo aquí — hay bancos en la sombra bajo árboles centenarios, fuentes donde refrescarte, y honestamente, es el mejor lugar para entender la geografía de Lisboa antes de seguir explorando. Las murallas tienen casi mil años, las torres de vigilancia ofrecen perspectivas diferentes de la ciudad, y el silencio arriba (solo roto por el viento y los pavos reales) contrasta con el bullicio de Alfama abajo.',
    tip: '💰 Entrada: 15€ adultos, 7.50€ estudiantes/seniors, menores 10 años gratis. TRUCO: Ve después de las 15:00 cuando ya se fue medio mundo, o compra online para evitar cola (en verano puede ser de 1 hora). Domingos hasta las 14:00 entrada gratis (llega temprano, se llena). Lleva agua, gorra, y calzado cómodo — hace calor aquí arriba y hay mucho que caminar. El castillo abre a las 9:00 — si llegas a esa hora lo tienes prácticamente vacío.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.7139, lng: -9.1334 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7139,-9.1334'
  },
  {
    time: '13:00',
    title: 'Almuerzo en Tasca do Chico — Donde comen los locales',
    description: 'Hora de comer de verdad. Y no, no vamos a un sitio turístico con menús en cinco idiomas y fotos de los platos en la puerta. Tasca do Chico es donde van los trabajadores del barrio, los vecinos de toda la vida, y los lisboetas que saben dónde está la comida buena y barata. Está en Bairro Alto (baja del castillo y camina 10 minutos por calles que van descendiendo), es pequeño —tiene como ocho mesas de madera pegadas a las paredes—, y no tiene menú impreso. La dueña, una señora que lleva aquí cuarenta años, te dice qué hay ese día según lo que compró en el mercado esa mañana: normalmente algún guiso de bacalao (hay mil formas de cocinarlo en Portugal), carne de cerdo à alentejana (cerdo con almejas, sí, leíste bien —es una combinación que funciona), y si hay suerte, arroz de marisco que es una paella portuguesa con todo el marisco habido y por haber. El menú del día cuesta entre 8 y 10 euros e incluye entrada (sopa del día o ensalada), plato principal, postre (flan, arroz con leche, o fruta), café, y medio litro de vino de la casa. Sí, vino incluido. Es Portugal. Por las noches (después de las 21:00) hay fado en vivo espontáneo y se llena de lisboetas que vienen a escuchar música, pero al mediodía es perfecto —tranquilo, auténtico, y la comida es exactamente lo que necesitas después de caminar: casera, generosa, y deliciosa. Si hay caldeirada (guiso de pescado con patatas que sabe a mar), pídela sin dudar. Si no te gusta el bacalao (¿en serio estás en Portugal y no te gusta el bacalao?), siempre tienen alguna opción de carne o incluso arroz de pato que es espectacular.',
    tip: '🍷 No reservan para el almuerzo —llegas y esperas mesa (máximo 10-15 minutos, los locales comen rápido y se van). Abre de lunes a sábado 12:00-15:00 (después cierran la cocina). Domingos cerrado. Lleva efectivo —muchas tascas no aceptan tarjeta. ALTERNATIVA: Si está cerrado o lleno, ve a "Taberna da Rua das Flores" (dos calles más arriba) —más caro (15-20€) pero la comida es increíble y el ambiente más moderno.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    coordinates: { lat: 38.7131, lng: -9.1443 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7131,-9.1443'
  },
  {
    time: '15:00',
    title: 'Belém — Donde Portugal conquistó el mundo',
    description: 'Después de comer, toma el tranvía 15E desde Praça da Figueira (o un Uber, 15 minutos, 8-10€) y vete a Belém. Este barrio es donde Portugal se hizo grande —literalmente. Desde este mismo lugar, en el siglo XV, salieron las carabelas que "descubrieron" medio mundo: Vasco da Gama abrió la ruta a la India navegando alrededor de África, Pedro Álvares Cabral "descubrió" Brasil por accidente (iba a la India y se desvió), y Magallanes inició la primera vuelta al mundo desde aquí. El oro, las especias, y el poder que trajeron de vuelta financiaron los monumentos que vas a ver. La Torre de Belém es ese ícono que has visto en todas las fotos de Lisboa —una torre de defensa medieval construida en 1520 que parece un castillo de arena gigante al borde del río Tajo. Fue diseñada para proteger la entrada del puerto, y su estilo manuelino (único de Portugal) está lleno de detalles marítimos: cuerdas talladas en piedra, anclas, esferas armilares, y hasta un rinoceronte esculpido (el primero que llegó a Europa, regalo del rey de la India). El Monasterio de los Jerónimos está justo al lado y es brutal —fue construido con el oro que traían de la India, y cuando entras entiendes el presupuesto que tenían. Es gótico manuelino, un estilo portugués único que mezcla gótico con elementos renacentistas y motivos marítimos tallados en cada centímetro de piedra. La iglesia es gratis y vale más que el monasterio —techos abovedados de 25 metros de altura que parecen palmeras de piedra, columnas que se ramifican como árboles, y la tumba de Vasco da Gama (el tipo que cambió la historia abriendo la ruta marítima a la India). Patrimonio de la UNESCO por algo —este lugar es la prueba física de la era dorada de Portugal.',
    tip: '🎫 IMPORTANTE: Compra tickets online para el Monasterio (12€) —la cola puede ser de una hora en verano. La iglesia es GRATIS y está dentro del mismo complejo (no necesitas ticket para entrar). Torre de Belém: 8€, también compra online para evitar esperas. TRUCO: Ve primero a la Torre cuando abren (10:00, menos gente), luego al Monasterio (11:00-12:00), y después a los pasteles (12:30). El orden importa para evitar colas. Lunes todo cerrado.',
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
    title: 'LX Factory — El corazón creativo de Lisboa',
    description: 'Ahora que estás en modo coma de azúcar después de los pasteles, vamos a un sitio completamente diferente que te va a despertar. LX Factory es una antigua fábrica de impresión de 1846 que se convirtió en el espacio creativo más cool de Lisboa. Piensa en: naves industriales de ladrillo rojo con grafitis enormes de artistas internacionales en las paredes, tiendas de diseño independiente donde encuentras cosas que no verás en ningún otro sitio, galerías de arte contemporáneo, cafés hipster con cafés de especialidad, y la librería más instagrameable de Portugal (Ler Devagar —tiene libros del suelo al techo de 10 metros con escaleras vintage, una bicicleta voladora colgando del techo, y un ambiente que parece sacado de una película de Wes Anderson). Es donde la Lisboa alternativa se reúne —diseñadores, artistas, creativos, startups, todos trabajando en espacios que antes eran talleres industriales. Hay mercados de comida callejera los domingos, terrazas con vistas al puente 25 de Abril (el Golden Gate portugués que pasa literalmente por encima), y el atardecer desde aquí es perfecto porque el sol se pone justo detrás del puente creando siluetas épicas. Si necesitas un café para recuperarte del azúcar, ve a LandScape —tienen vistas al puente y cafés excelentes. Si quieres algo más fuerte, el bar de vinos "By The Wine" tiene cientos de vinos portugueses y un ambiente íntimo perfecto para relajarse. Es un buen momento para ralentizar, sentarte en alguna terraza, y absorber que llevas nueve horas caminando por una de las ciudades más bonitas de Europa. El ambiente aquí es joven, artístico, y totalmente diferente al Lisboa histórico que has visto hasta ahora.',
    tip: '🎨 Abre de 12:00 a 00:00 todos los días. Domingos hay mercado vintage (11:00-19:00) con ropa, vinilos, artesanías, y comida callejera. Ler Devagar cierra a las 20:00 —no llegues tarde si quieres verla. Desde Belém son 10 min en Uber (5-7€) o puedes caminar 20 min por el paseo marítimo siguiendo el río. Hay varios restaurantes para cenar si decides quedarte: "Rio Maravilha" tiene terraza con vistas al puente y comida buena (20-30€).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800',
    coordinates: { lat: 38.7065, lng: -9.1799 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7065,-9.1799'
  },
  {
    time: '20:00',
    title: 'Cena en Bairro Alto — El barrio que nunca duerme',
    description: 'Para cerrar el día perfecto, volvemos al centro histórico —específicamente Bairro Alto, el barrio bohemio donde los lisboetas van a cenar y salir desde hace quinientos años. Las calles son estrechas, empedradas, llenas de grafitis que cambian cada semana, y restaurantes pequeños con diez mesas donde la comida se sirve caliente y la conversación fluye. La energía es única —antes de las 22:00 es tranquilo (perfecto para cenar sin ruido), después se transforma completamente: se llena de gente con cervezas en la calle (es totalmente legal y normal), músicos tocando en las esquinas, bares abiertos hasta las 2am, y un ambiente festivo que parece una verbena permanente. Para cenar tienes mil opciones según tu presupuesto y ganas: Si quieres carnes a la parrilla hechas a la perfección, ve a "Café Buenos Aires" (argentino pero buenísimo, 15-25€, reserva recomendada). Si quieres mariscos en un edificio histórico con azulejos del siglo XVIII en las paredes, "Cervejaria Trindade" es espectacular (20-35€, ambiente elegante pero relajado). Si quieres algo más local y barato, "Restaurante Bota Alta" tiene comida portuguesa auténtica (menú del día 12-18€, sin reservas, llegas y esperas). Después de cenar, camina por las calles sin rumbo —cada puerta es un bar diferente (rock, jazz, fado, electrónica), la gente está de buen humor, y el ambiente es contagioso. Te has ganado estas cervezas después del día que tuviste. Compra una Super Bock en cualquier minimercado (1€) y únete a la gente en las calles —es la forma más lisboeta de terminar el día.',
    tip: '🍽️ RESERVA para cenar (especialmente viernes/sábado) —llama por la tarde o reserva online. Si no reservaste, llega a las 19:30 antes del rush de las 20:30. POST-CENA: Para drinks con vistas, "Park Bar" (rooftop con vistas 360°, entrada gratis, consumición 4-10€) o "Pavilhão Chinês" (bar museo lleno de objetos antiguos coleccionados durante décadas, es surrealista y único, 5-8€ copas). Los bares del Bairro Alto abren 22:00-3:00. Es seguro de noche —lleno de gente, bien iluminado, y la policía patrulla regularmente.',
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
    title: 'Baixa-Chiado — El corazón que late de Lisboa',
    description: 'Empezamos en la Baixa, el centro neurálgico de Lisboa que el Marqués de Pombal reconstruyó desde cero después del terremoto de 1755. Este barrio fue el primer ejemplo de planificación urbana moderna en Europa —calles en cuadrícula perfecta como un tablero de ajedrez, edificios de la misma altura creando una uniformidad elegante, y plazas simétricas que respiran orden y grandeza. El terremoto destruyó casi toda la ciudad, pero Pombal vio la oportunidad de crear algo mejor: un centro comercial y administrativo que reflejara el poder de Portugal en su era dorada. Empieza en Praça do Comércio (la plaza más grande de Europa junto al río) donde llegaban los barcos cargados con especias de la India, oro de Brasil, y sedas de China. Las arcadas amarillas que la rodean tienen más de doscientos años y han visto desfiles reales, revoluciones, y ahora turistas haciendo selfies. Camina por Rua Augusta (la calle peatonal principal llena de tiendas, artistas callejeros, y el bullicio constante de una capital viva) hasta Rossio, la plaza que ha sido el corazón social de Lisboa durante siglos. Pasa por el Elevador de Santa Justa —un ascensor de hierro neogótico de 1902 diseñado por Raoul Mesnier du Ponsard, discípulo de Gustave Eiffel, que parece sacado de una novela de Julio Verne. Actualmente está cerrado (2026) por mantenimiento, pero la estructura sigue siendo impresionante desde abajo. Si quieres las vistas desde arriba, sube por las Escadas do Carmo (gratis) y entra al mirador pagando 1.50€ —las vistas son brutales: toda la Baixa desplegada hasta el río, los tejados naranjas, y el Tajo brillando al fondo. Después baja a Chiado, el barrio intelectual donde Pessoa tomaba café cada mañana y escribía poesía en las mesas de los cafés. Entra a "A Brasileira" (el café más famoso, abierto desde 1905) y verás la estatua de Pessoa sentado en la terraza como si todavía estuviera esperando a alguien. El Chiado es más elegante que la Baixa, más cultural, más local —aquí están las librerías centenarias, los teatros, las galerías de arte, y el Lisboa que se piensa a sí mismo.',
    tip: '⚠️ Elevador Santa Justa: Actualmente CERRADO (2026) por mantenimiento. La estructura sigue siendo impresionante desde abajo (gratis) —vale la pena verla aunque no puedas subir. ALTERNATIVA: Sube por las Escadas do Carmo (escaleras gratis al lado que suben por las ruinas del convento) y entra al mirador por arriba pagando solo 1.50€ —las vistas son las mismas. A Brasileira: café 2-4€ (turístico pero icónico, vale la foto). Las librerías del Chiado son preciosas —Bertrand (desde 1732, la más antigua del mundo) y Ler Devagar (diseño espectacular) merecen una visita.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: '11:30',
    title: 'Tranvía 28 — La experiencia más lisboeta que existe',
    description: 'No es solo transporte —es UNA EXPERIENCIA que define Lisboa. El tranvía 28 es un tranvía amarillo de madera de 1930 que trepa colinas imposibles con pendientes del 15%, pasa por calles tan estrechas que casi rozas las paredes de las casas (literalmente puedes tocar los azulejos desde la ventanilla), y atraviesa los barrios más auténticos de la ciudad como si fuera una montaña rusa histórica. Estos tranvías llevan casi cien años haciendo el mismo recorrido, y los conductores que los manejan tienen una precisión milimétrica que parece imposible —pasan a centímetros de coches aparcados, esquivan turistas distraídos, y hacen sonar la campana con un ritmo que los lisboetas reconocen desde la infancia. Sube en Martim Moniz (la parada inicial, menos gente) o Graça (menos turistas que en Baixa) y aguanta todo el recorrido hasta Campo de Ourique (40 minutos de película continua). Vas a pasar por: Graça (barrio residencial en la colina donde los vecinos saludan al conductor), Alfama (laberinto medieval donde el tranvía serpentea entre casas centenarias), Sé Catedral (la catedral más antigua de Lisboa), Baixa (el centro comercial), Estrela (basílica blanca gigante que parece un pastel de bodas), y Campo de Ourique (barrio residencial donde termina el recorrido). Cada curva es una sorpresa, cada subida un desafío para el motor, y cada parada una oportunidad de ver un rincón diferente de Lisboa. Ojo con los carteristas —van en el tranvía buscando turistas distraídos con móviles y cámaras. Mochila adelante, manos en los bolsillos, y disfruta el paseo sin perder de vista tus cosas.',
    tip: '🚋 Billete: 3€ en el conductor (solo efectivo, tenlo preparado) o 1.50€ con la tarjeta Viva Viagem recargable (mucho más barato si haces varios trayectos). MEJOR HORARIO: 9:00-11:00 o después de las 18:00 (menos turistas, más espacio). Evita 12:00-17:00 que va REPLETO de grupos organizados y es imposible disfrutarlo. Si quieres ir sentado, sube en Martim Moniz (inicio) o Campo de Ourique (final) —las paradas intermedias suelen estar llenas. El recorrido completo dura 40-45 minutos y es una de las mejores formas de ver Lisboa sin caminar.',
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
    title: 'Mirador da Senhora do Monte — El secreto mejor guardado',
    description: 'Después de comer, camina cinco minutos cuesta arriba hasta el mirador secreto de Lisboa. A diferencia de los miradores turísticos (Santa Luzia, Portas do Sol) que están LLENOS de gente haciendo selfies y grupos organizados con paraguas de colores, este casi nadie lo conoce porque está apartado del circuito habitual. Es el punto más alto de Lisboa (después del castillo) y las vistas son de 270 grados que quitan el aliento: ves el Castelo de São Jorge a la izquierda como un guardián de piedra, toda Alfama bajando en cascada hacia el río con sus tejados naranjas, el puente 25 de Abril a lo lejos con el Cristo Rei al otro lado del Tajo, y la ciudad desplegada hasta donde alcanza la vista en todas las direcciones. Hay bancos de piedra en la sombra bajo árboles centenarios, silencio (solo pájaros cantando y alguna conversación bajita de parejas locales), y una ermita pequeña del siglo XVI que añade un toque de solemnidad al lugar. Los lisboetas vienen aquí al atardecer con una cerveza Super Bock del quiosco de abajo, se sientan en los bancos, y ven cómo el sol pinta la ciudad de dorado. Es el lugar perfecto para procesar que estás en una de las ciudades más bonitas de Europa, para hacer una pausa del ritmo frenético del turismo, y para simplemente estar presente en el momento. No hay quiosco aquí arriba, así que si quieres algo de beber, cómpralo antes de subir.',
    tip: '📸 MEJOR MOMENTO: Atardecer (18:30-20:00 en verano, 17:00-18:30 en invierno) cuando el sol ilumina toda la ciudad en dorado. Llega 30-40 minutos antes del sunset para asegurar un buen sitio en los bancos. Lleva algo para beber del supermercado de abajo (no hay servicios aquí arriba). Hay bancos en la sombra perfectos para sentarse 30-45 minutos. Los fines de semana puede haber más gente, pero nunca tanto como los miradores turísticos. Entre semana al atardecer es casi privado.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
    coordinates: { lat: 38.7176, lng: -9.1316 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7176,-9.1316'
  },
  {
    time: '17:00',
    title: 'Panteón Nacional — Donde descansan los grandes de Portugal',
    description: 'Baja caminando hacia el Panteón Nacional —ese edificio blanco gigante con cúpula que ves desde todos los miradores y que parece un pastel de bodas arquitectónico. Fue una iglesia barroca que empezaron a construir en 1582 y tardaron 284 AÑOS en terminar (de ahí el dicho portugués "obras de Santa Engrácia" para referirse a algo que nunca se acaba). La historia es fascinante: empezó como iglesia, se quedó sin fondos, se usó como almacén, y finalmente se completó en 1966 cuando decidieron convertirlo en panteón nacional. Ahora es donde están enterrados los grandes portugueses: presidentes de la república, escritores como Almeida Garrett y Aquilino Ribeiro, fadistas como Amália Rodrigues (la voz más importante del fado), y exploradores como Vasco da Gama (aunque sus restos están en el Monasterio de los Jerónimos). La entrada cuesta 4€ pero SÚBETE A LA CÚPULA —son 180 escalones en espiral que suben por dentro de la estructura, pero las vistas a 360° desde arriba justifican cada paso. Desde la cúpula ves toda Lisboa, el Tajo, y los barrios desplegándose como un mapa en relieve. Si es martes o sábado, la Feira da Ladra (mercado de pulgas más antiguo de Lisboa, funciona desde 1272) está montada justo al lado en el Campo de Santa Clara. Venden de todo: antigüedades reales, ropa vintage de los años 70-80, discos de vinilo de colección, azulejos antiguos que puedes comprar por pieza, cachivaches increíbles que no sabías que necesitabas, y objetos que cuentan historias de otras épocas. Es el lugar perfecto para encontrar souvenirs únicos que no verás en ninguna tienda turística.',
    tip: '🎫 Entrada: 4€ adultos, gratis el primer domingo de mes y para menores de 12 años. HORARIO: Martes-domingo 10:00-17:00 (18:00 en verano). Lunes cerrado. La subida a la cúpula está incluida en la entrada —no te la pierdas, las vistas son espectaculares. Feira da Ladra: Solo martes y sábados 8:00-15:00 (llega temprano para mejor surtido). Regatea TODO (es parte del juego y la tradición) —los vendedores esperan que regatees, es parte de la experiencia. Lleva efectivo —muchos vendedores no aceptan tarjeta.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1567949485386-e670e582e537?w=800',
    coordinates: { lat: 38.7143, lng: -9.1254 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7143,-9.1254'
  },
  {
    time: '19:30',
    title: 'Cena + Fado en Alfama — La experiencia más portuguesa',
    description: 'La experiencia quintessential lisboeta: cena con fado en vivo en Alfama, el barrio donde nació esta música. El fado es Patrimonio Inmaterial de la Humanidad por la UNESCO —canciones melancólicas sobre saudade (esa nostalgia portuguesa imposible de traducir), el mar que siempre está presente en la vida portuguesa, y amores perdidos que duelen pero se celebran. Hay dos tipos de sitios completamente diferentes: (1) Restaurantes turísticos caros (40-60€) con show programado, menús fijos, y fadistas profesionales que interpretan las mismas canciones cada noche para un público que no habla portugués, o (2) Tascas auténticas donde el fado surge espontáneamente después de las 22:00 cuando alguien toma una guitarra portuguesa y empieza a cantar porque le nace, no porque le pagan (15-25€, solo pagas lo que consumes). Recomiendo las auténticas sin dudar: "Tasca do Chico" (la misma del día 1 pero de noche tiene fado espontáneo, es gratis el espectáculo, solo pagas la cena y las consumiciones), "Mesa de Frades" (íntimo, en una capilla antigua, 20-30€ con cena), o "Parreirinha de Alfama" (más formal, 35-45€ con espectáculo estructurado pero auténtico). La regla sagrada que debes respetar: cuando alguien canta fado, SILENCIO ABSOLUTO. Ni susurros, ni usar el móvil, ni hacer ruido con cubiertos. Es una falta de respeto gravísima interrumpir —el fado se escucha en silencio reverencial, y cualquier interrupción te ganará miradas de reproche de todo el local. El fado no es entretenimiento —es expresión emocional que se comparte, y el silencio es el mejor homenaje.',
    tip: '🎭 RESERVA OBLIGATORIA para la mayoría de sitios (llama por la tarde o reserva online). Tasca do Chico: fado gratis + cena 15-20€, llega 21:00-21:30 para buena mesa (el local es pequeño, apenas caben 25 personas). Mesa de Frades: más organizado, reserva online, ambiente más íntimo. La comida en sitios de fado suele ser decente pero no espectacular —vas por la experiencia musical, no por la gastronomía. Si quieres buena comida Y fado, ve a "Clube de Fado" (más caro, 50-70€, pero combina ambas cosas bien). Durante el fado: silencio absoluto, fotos solo entre canciones (pregunta antes), y disfruta la emoción aunque no entiendas las letras.',
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
    title: 'Monasterio de los Jerónimos — La obra maestra del oro portugués',
    description: 'Camina diez minutos por la orilla del río hasta el Monasterio de los Jerónimos —posiblemente el edificio más impresionante de Portugal y uno de los más espectaculares de Europa. Es gótico manuelino, un estilo único portugués del siglo XVI que mezcla gótico tardío con elementos renacentistas y está lleno de motivos marítimos tallados en cada centímetro de piedra: cuerdas que parecen reales, anclas, carabelas, esferas armilares (instrumentos de navegación), y símbolos que celebran la era de los descubrimientos. Fue construido con el 5% del oro que traían de la India —el presupuesto era básicamente infinito, y cuando entras lo notas en cada detalle. La iglesia es GRATIS (entrada lateral izquierda, no necesitas ticket) y es lo mejor de todo: techos abovedados de 25 metros de altura que parecen palmeras de piedra ramificándose hacia el cielo, columnas que se retuercen como troncos de árboles, y la luz natural entrando por las vidrieras creando rayos que parecen divinos. Aquí están enterrados los grandes: la tumba de Vasco da Gama (el tipo que abrió la ruta marítima a la India navegando alrededor de África), la de Luís de Camões (el Shakespeare portugués que escribió Os Lusíadas), y reyes de Portugal. El claustro del monasterio cuesta 12€ extra y es precioso —dos pisos de arcadas talladas rodeando un jardín perfecto— pero sinceramente la iglesia ya vale el viaje a Lisboa. Patrimonio de la UNESCO y con razón —cuando entras entiendes por qué Portugal era una superpotencia en el siglo XVI, y cómo el oro de las colonias se transformó en esta obra maestra arquitectónica.',
    tip: '💡 LA IGLESIA ES GRATIS (entrada lateral izquierda, no necesitas ticket). El claustro del monasterio son 12€ extra (opcional pero hermoso). Si tienes Lisboa Card = gratis todo. IMPRESCINDIBLE: Llega antes de las 11:00 o después de las 15:00 para evitar grupos de cruceros que llenan el lugar entre esas horas. La iglesia abre 10:00-17:30 (invierno) o 10:00-18:30 (verano). Lunes cerrado. Tómate tu tiempo dentro —hay bancos donde sentarse y contemplar la arquitectura sin prisa.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
    coordinates: { lat: 38.6977, lng: -9.2062 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6977,-9.2062'
  },
  {
    time: '12:30',
    title: 'Pastéis de Belém — La peregrinación dulce obligatoria',
    description: 'Ya sabes qué viene ahora. Pastéis de Belém —la fábrica original desde 1837 con la receta secreta que solo conocen tres maestros pasteleros en todo el mundo, y que nunca viajan juntos por si ocurriera una desgracia. No es marketing: estos pasteles SÍ saben diferente a todos los demás "pastéis de nata" que comiste en otras pastelerías. La masa es más hojaldrada (tiene 18 capas finísimas que crujen sin deshacerse), la crema más cremosa y densa con un sabor que recuerda vagamente a canela aunque no la lleve dentro, y los hacen en hornos de 400°C que les dan ese toque caramelizado perfecto con burbujas doradas en la superficie. La cola de la tienda de la entrada asusta —puede haber treinta o cuarenta personas esperando— pero avanza rápido porque la mayoría compra para llevar. IGNORA COMPLETAMENTE LA COLA DE LA TIENDA —entra directo al salón gigante de atrás (señalizado como "Salão", con azulejos azules del siglo XIX en las paredes) que tiene menos cola, puedes sentarte en mesas de mármol que han visto millones de pasteles, y la experiencia es infinitamente superior. Pide los pasteles "quentes" (calientes, recién salidos del horno), espolvorea canela y azúcar glas generosamente (están en dispensadores en las mesas), y acompaña con un galão (café con leche portugués, más largo que un cortado). Van a estar a 200°C recién salidos del horno así que sopla antes de morder o te quemarás la lengua. Mínimo tres por persona. No es negociable —después de probar el primero, querrás más.',
    tip: '🥐 ESTRATEGIA PRO: Ignora completamente la cola de la entrada (para llevar). Entra directo al salón gigante de atrás señalizado como "Salão" → casi nunca hay cola, te sientas en mesas de mármol, comes caliente recién horneado, y la experiencia es mucho mejor. Precio: 1.30€/unidad, galão 1.50€. Pide "3 pastéis quentes, um galão" y siéntate. El salón de atrás tiene 400 asientos —siempre hay sitio. Abre 8:00-23:00 todos los días. Si quieres llevar a casa, pide caja de 6 o 12 —aguantan bien unas horas pero pierden el crujiente al día siguiente.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=800',
    coordinates: { lat: 38.6976, lng: -9.2031 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6976,-9.2031'
  },
  {
    time: '14:30',
    title: 'MAAT — Lisboa mirando al futuro',
    description: 'Después del coma de azúcar de los pasteles, camina diez minutos por la orilla del río hasta el MAAT (Museo de Arte, Arquitectura y Tecnología). El edificio ya vale la visita solo por su arquitectura —diseñado por Amanda Levete, es una estructura contemporánea blanca y curva que parece una ola congelada en el momento de romper, o una concha marina gigante. La forma orgánica contrasta brutalmente con los edificios históricos de Belém alrededor, y cuando lo ves desde el río parece que el museo está flotando sobre el agua. Por dentro hay exposiciones rotativas de arte contemporáneo, diseño industrial, y arquitectura que cambian cada tres o cuatro meses. Las muestras suelen ser interesantes pero lo mejor, sin duda, es el TECHO —puedes caminar por encima del museo completamente gratis (acceso por rampa exterior, no hace falta entrada) y las vistas al puente 25 de Abril, el Cristo Rei al otro lado del Tajo, y el río serpenteando hacia el Atlántico son perfectas. Es uno de los pocos sitios modernos de Lisboa (casi todo es histórico, barroco, o medieval) y el contraste es refrescante. Si no te va el arte contemporáneo, no pasa nada —solo sube al techo, toma fotos con el puente de fondo, y sigue. El techo es perfecto para atardecer porque el sol se pone justo detrás del puente creando siluetas épicas, pero si vienes ahora al mediodía lo tienes prácticamente para ti solo.',
    tip: '🎫 Entrada a las exposiciones: 9€ (opcional, solo si te interesa el arte contemporáneo). Subir al techo: GRATIS (acceso por rampa exterior, no necesitas ticket). Horario: 11:00-19:00 (cerrado martes). El techo es perfecto para atardecer porque el sol se pone detrás del puente, pero si vienes ahora al mediodía lo tienes para ti solo y puedes hacer fotos sin gente. Hay una cafetería en el interior con terraza al río si quieres tomar algo con vistas.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800',
    coordinates: { lat: 38.6936, lng: -9.1980 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6936,-9.1980'
  },
  {
    time: '16:30',
    title: 'LX Factory — El corazón creativo de Lisboa',
    description: 'Desde el MAAT, camina quince minutos siguiendo el río (o Uber 5€ si estás cansado) hasta LX Factory —una antigua fábrica de impresión de 1846 reconvertida en el epicentro cool de Lisboa. Imagina: naves industriales de ladrillo rojo de casi doscientos años llenas de grafitis enormes de artistas internacionales, estudios de diseño donde trabajan creativos portugueses, agencias de publicidad, cafés hipster con cafés de especialidad, tiendas de ropa independiente que no verás en ningún otro sitio, galerías de arte contemporáneo, y la librería Ler Devagar (libros del suelo al techo de 10 metros con una bicicleta voladora suspendida en el aire, estanterías que parecen imposibles, y un ambiente que parece sacado de una película de Wes Anderson). Los domingos hay mercado vintage (11:00-19:00) con ropa de los 70-80, vinilos de colección, artesanías, y comida callejera. Los jueves hay food trucks. Y siempre hay ambiente —es donde los creativos lisboetas trabajan, comen en los restaurantes del complejo, y se toman cervezas después del trabajo en las terrazas. Siéntate en alguna terraza bajo el puente 25 de Abril (que pasa literalmente por encima del complejo), pide una cerveja Super Bock (3€) y unos petiscos (tapas portuguesas —queso, embutidos, aceitunas, 5-8€), y absorbe que estás viviendo la Lisboa alternativa que no sale en las postales turísticas. Es el contraste perfecto después de todo el día viendo monumentos históricos.',
    tip: '☕ LandScape café: vistas al puente, cafés de especialidad 2-4€. By The Wine: 3000 vinos portugueses, degustación 12€, ambiente íntimo perfecto para relajarse. Ler Devagar librería: cierra 20:00 —no llegues tarde si quieres verla, es espectacular. Domingos: mercado vintage 11:00-19:00 con ropa, vinilos, artesanías. "Rio Maravilha" restaurante: terraza con vistas al puente, comida buena 20-30€. TODO es instagrameable aquí —los grafitis, la arquitectura industrial, las terrazas, todo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800',
    coordinates: { lat: 38.7065, lng: -9.1799 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7065,-9.1799'
  },
  {
    time: '20:00',
    title: 'Cena en Time Out Market — El estómago de Lisboa',
    description: 'Para cerrar el viaje perfecto, vamos al Time Out Market en Mercado da Ribeira. Es un food hall donde reunieron a los mejores chefs y restaurantes de Lisboa bajo un mismo techo —el concepto es brillante: en vez de elegir un restaurante y comprometerte, caminas entre 40 stands diferentes, eliges lo que te llama en cada momento, pides en varios sitios, y comes en las mesas centrales compartidas donde se mezclan turistas y locales. Hay de todo: marisco fresco a la parrilla, steaks de carne ibérica, sushi de calidad, tacos mexicanos, hamburguesas gourmet, comida vegana, pasteles artesanales, vinos portugueses por copa, cervezas artesanales, y más. El concepto funciona así: recorres los puestos, eliges lo que quieres, pides en cada stand (te dan un número), buscas mesa en la zona central (hay cientos), y te llaman cuando esté listo. Precios: 10-20€ por plato según qué pidas. Recomendados: Alexandre Silva (chef con estrella Michelin, platos 12-18€, cocina portuguesa moderna), Henrique Sá Pessoa (otra estrella Michelin, mariscos increíbles), Sea Me (mariscos frescos), Miguel Castro e Silva (carnes a la parrilla). Después de cenar, Cais do Sodré (el barrio justo afuera del mercado) es LA zona de fiesta de Lisboa. La Calle Rosa (Pink Street, pintada de rosa fosforito) está llena de bares, música en vivo, y gente en la calle con cervezas hasta las 3am. Si quieres seguir la noche, tienes cincuenta bares en doscientos metros —rock, jazz, electrónica, reggae, todo tiene su espacio aquí.',
    tip: '🍽️ Time Out Market: 12:00-00:00 todos los días (domingos hasta 18:00). Se llena brutalmente 20:00-22:00 (llega 19:30 o prepárate para esperar mesa 15-20 min). Mejor momento: 17:00-19:00 o después de las 22:00. POST-CENA: "Pensão Amor" (bar en antiguo burdel convertido, decoración loca con objetos eróticos antiguos, ambiente único, 5-8€ copas), "Musicbox" (discoteca techno/electrónica, entrada 5-10€), o simplemente Pink Street con cerveza comprada en minimercado (1€ vs 4€ en bares). La zona es segura de noche —llena de gente, bien iluminada, y la policía patrulla regularmente.',
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
    title: 'Paseo nocturno por Alfama iluminada — El momento más íntimo',
    description: 'Después de cenar, baja caminando por las calles laberínticas de Alfama de noche. Este es el momento mágico que pocos turistas viven porque la mayoría ya está en el hotel o en bares del centro. Las calles estrechas iluminadas con faroles amarillos que crean sombras danzantes en las paredes, las escaleras de adoquines brillando por la humedad del Tajo que las hace parecer espejos, el sonido lejano de fado saliendo de alguna ventana abierta (algún vecino tocando guitarra en su casa), gatos callejeros cruzando sigilosamente entre las sombras, ropa tendida meciéndose con la brisa nocturna como banderas de vida cotidiana, y el silencio roto solo por vuestros pasos y alguna conversación lejana de vecinos hablando en portugués desde sus balcones. Perdeos sin rumbo. No uséis Google Maps —eso arruinaría la magia. Todas las calles eventualmente bajan hacia el río o suben al castillo, así que no os perderéis de verdad. Pasa por la Catedral Sé iluminada con focos que la hacen parecer una catedral gótica de película, el Mirador de Santa Luzia vacío y precioso de noche (las vistas al río iluminado son diferentes de noche), el Mirador das Portas do Sol con vistas a la ciudad dormida donde solo se ven las luces de las casas parpadeando como estrellas. Camina hasta la orilla del Tajo, siéntate en los escalones de piedra mirando al río y las luces reflejadas en el agua creando caminos de luz, y simplemente estad presentes en el momento. Este es el Lisboa íntimo, nocturno, romántico, que se siente solo caminando sin prisa con la persona que amas, sin agenda, sin planes, solo existiendo juntos en este barrio que ha visto siglos de historias de amor.',
    tip: '🌙 SEGURO: Alfama de noche es seguro (mucha gente paseando, bien iluminado, y la policía patrulla regularmente). Lleva calzado cómodo con buen agarre —los adoquines pueden estar resbaladizos. Post-paseo: Si queréis tomar algo, "Portas do Sol" (bar terraza abierto hasta las 2:00, vistas al río, copas 5-8€) o simplemente subir al Castillo (el exterior está iluminado, las vistas nocturnas son gratis desde fuera, y el ambiente es mágico). El paseo puede durar tanto como queráis —no hay prisa, no hay hora de cierre, solo el momento presente.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7115, lng: -9.1281 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7115,-9.1281'
  },
  {
    time: 'DÍA 2 - 10:00',
    title: 'Mirador de Santa Luzia — La postal más romántica',
    description: 'El segundo día empieza tranquilo en el Mirador de Santa Luzia —el mirador más fotografiado de Lisboa y posiblemente el más romántico. Es el momento en que entiendes por qué llaman a Lisboa "la ciudad de las siete colinas" — porque desde aquí ves cómo los tejados naranjas descienden en cascada hacia el Tajo, cómo las calles serpentean entre las casas, y cómo la geografía de la ciudad cobra sentido. Las vistas son exactamente la postal que has visto en Instagram mil veces, pero verla en persona con tu pareja es diferente: el panteón nacional blanco brillando al fondo, el río azul profundo, y si tienes suerte, algún barco de crucero pasando lentamente que añade movimiento al cuadro perfecto. Los paneles de azulejos del siglo XVIII que flanquean la terraza cuentan la historia de Lisboa antes del terremoto de 1755 — tómate cinco minutos para observarlos de cerca. Al lado hay un kiosco donde los vecinos del barrio toman café a cualquier hora — únete a ellos. Y las buganvillas moradas que trepan por la pérgola crean un marco natural que hace que cada foto parezca una obra de arte. Este es el mirador más fotografiado de Lisboa, y cuando estéis aquí juntos entenderéis por qué.',
    tip: '📸 Mejor hora para fotos: 10:00-11:00 (luz dorada horizontal, menos sombras duras). El mirador se llena después de las 11:00 con grupos organizados. Hay otro mirador justo al lado (Portas do Sol) con menos gente y vistas complementarias — visítalos ambos, están a 30 segundos caminando. El kiosco abre desde temprano y sirve café, zumos naturales, y pasteles de nata. Perfecto para desayunar juntos con vistas.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1588642411190-3e72e93b1497?w=800',
    coordinates: { lat: 38.7115, lng: -9.1294 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7115,-9.1294'
  },
  {
    time: '12:00',
    title: 'Tranvía 28 — El paseo más romántico de Lisboa',
    description: 'Después del mirador, caminad 5 minutos hasta Martim Moniz (la parada inicial del tranvía 28) y subid al tranvía amarillo de madera más icónico de Lisboa. Este no es solo transporte —es UNA EXPERIENCIA que define Lisboa. El tranvía 28 es un tranvía amarillo de madera de 1930 que trepa colinas imposibles con pendientes del 15%, pasa por calles tan estrechas que casi rozas las paredes de las casas (literalmente puedes tocar los azulejos desde la ventanilla), y atraviesa los barrios más auténticos de la ciudad como si fuera una montaña rusa histórica. Subid en Martim Moniz (la parada inicial, menos gente) y aguantad todo el recorrido hasta Campo de Ourique (40 minutos de película continua). Vas a pasar por: Graça (barrio residencial en la colina donde los vecinos saludan al conductor), Alfama (laberinto medieval donde el tranvía serpentea entre casas centenarias), Sé Catedral (la catedral más antigua de Lisboa), Baixa (el centro comercial), Estrela (basílica blanca gigante que parece un pastel de bodas), y Campo de Ourique (barrio residencial donde termina el recorrido). Cada curva es una sorpresa, cada subida un desafío para el motor, y cada parada una oportunidad de ver un rincón diferente de Lisboa. Sentaros juntos, abrazaros cuando el tranvía sube las cuestas empinadas, y disfrutad el paseo sin perder de vista vuestras cosas.',
    tip: '🚋 Billete: 3€ en el conductor (solo efectivo, tenlo preparado) o 1.50€ con la tarjeta Viva Viagem recargable (mucho más barato si hacéis varios trayectos). MEJOR HORARIO: 9:00-11:00 o después de las 18:00 (menos turistas, más espacio). Evita 12:00-17:00 que va REPLETO de grupos organizados y es imposible disfrutarlo. Si queréis ir sentados, subid en Martim Moniz (inicio) o Campo de Ourique (final) —las paradas intermedias suelen estar llenas. El recorrido completo dura 40-45 minutos y es una de las mejores formas de ver Lisboa sin caminar. Perfecto para tomar fotos desde la ventanilla.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1597426509446-cd65442af149?w=800',
    coordinates: { lat: 38.7169, lng: -9.1399 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7169,-9.1399'
  },
  {
    time: '13:30',
    title: 'Almuerzo en Belém — Cena junto al río',
    description: 'Bajad del tranvía en Belém y caminad hasta algún restaurante con terraza junto al Tajo. Belém tiene varios restaurantes con vistas al río perfectos para un almuerzo romántico: "Darwin's Café" (moderno, terraza al río, 25-35€/persona), "A Margem" (portugués tradicional, más económico, 15-25€/persona), o simplemente "Pastéis de Belém" si queréis algo más casual (los pasteles originales, 1.30€ cada uno, con café). Después del almuerzo, pasad por el Monasterio dos Jerónimos —la iglesia es GRATIS y tiene techos abovedados de 25 metros que parecen palmeras de piedra. Es impresionante entrar juntos y contemplar la arquitectura. Si queréis, podéis visitar el claustro (10€) que es hermoso —dos pisos de arcadas talladas rodeando un jardín, perfecto para fotos de arcos infinitos.',
    tip: '🍽️ Restaurantes con terraza: Darwin's Café (25-35€), A Margem (15-25€). Pastéis de Belém: 1.30€/pastel, café 1€. TRUCO: Entra directo a "Salão" (evitas cola). Monasterio Jerónimos: IGLESIA GRATIS (imperdible), claustro 10€ (opcional pero hermoso). Tiempo: 1-1.5h para comer tranquilo.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    coordinates: { lat: 38.6979, lng: -9.2061 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6979,-9.2061'
  },
  {
    time: '16:00',
    title: 'Paseo por Belém — Jardines y monumentos',
    description: 'Después de comer, pasad por los jardines de Belém junto al río. Es un paseo perfecto: caminos arbolados, bancos con vistas al Tajo, el Padrão dos Descobrimentos (monumento gigante con forma de carabela), y la Torre de Belém al fondo. Podéis subir al Padrão (6€) para ver el mosaico del mapamundi en el suelo que muestra todas las rutas de exploración portuguesas —desde Brasil hasta la India, desde África hasta Japón. Las vistas desde arriba son espectaculares: el Tajo, la Torre de Belém, y el Monasterio de los Jerónimos. El paseo es tranquilo, romántico, y perfecto para conversar mientras camináis de la mano junto al río.',
    tip: '🎫 Padrão dos Descobrimentos: 6€ adultos, 3€ estudiantes/seniors. Subir arriba: vistas al mosaico del mapamundi + panorámica del Tajo. HORARIO: 10:00-19:00 (verano), 10:00-18:00 (invierno). Lunes cerrado. Tiempo visita: 20-30 min. GRATIS: Pasear por los jardines junto al río. Perfecto para fotos románticas con la Torre de Belém de fondo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
    coordinates: { lat: 38.6936, lng: -9.2058 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6936,-9.2058'
  }
];

// Timeline stops para Lisboa Familiar
export const lisboaFamiliarTimeline: TimelineStop[] = [
  {
    time: '09:30',
    title: 'Oceanário de Lisboa — El acuario que hipnotiza a grandes y pequeños',
    description: 'Empezamos en el Oceanário de Lisboa, uno de los acuarios más grandes y espectaculares de Europa, y probablemente la actividad número uno para familias en toda la ciudad. Está en el Parque das Nações (zona moderna construida para la Expo 98, completamente diferente al Lisboa histórico). El edificio en sí es una obra de arte —diseñado por Peter Chermayeff, parece flotar sobre el agua con su estructura de cristal y hormigón. Pero lo que importa está dentro: el tanque central tiene 5 millones de litros de agua salada (equivalente a 4 piscinas olímpicas) con tiburones de varias especies nadando majestuosamente, mantas rayas gigantes que parecen alfombras voladoras, atunes de tamaño impresionante, pez luna (ese pez rarísimo que parece una cabeza flotante y que es difícil de ver en otros acuarios), y cientos de especies nadando juntas como si fuera el océano real. Los niños se quedan hipnotizados viendo los tiburones pasar a centímetros del cristal —es seguro pero la sensación de proximidad es intensa. Hay 4 hábitats diferentes recreando océanos del mundo: Atlántico Norte (con nutrias adorables jugando y nadando), Antártico (pingüinos que parecen pequeños caballeros en esmoquin), Pacífico Tropical (corales de colores imposibles y peces exóticos), y Océano Índico (peces de formas alienígenas). Hay también una zona táctil donde los niños pueden tocar estrellas de mar y anémonas bajo supervisión —es una experiencia que no olvidarán. Date mínimo 2-3 horas —los niños no querrán irse, y honestamente, los adultos tampoco. Hay cafetería dentro con menús infantiles (nuggets, pasta, pizza), baños amplios con cambiadores en todos los pisos, y todo está pensado para familias —es accesible con carritos, hay zonas de descanso, y el personal está acostumbrado a niños.',
    tip: '🐟 Entrada: adultos 25€, niños (3-12 años) 17€, menores 3 años gratis. Compra online (ahorras 2€ por persona + evitas cola que puede ser de 30-60 min en verano). Pack familia (2 adultos + 2 niños): 75€. Horario: 10:00-19:00 (verano), 10:00-18:00 (invierno). TRUCO: Llega 9:30-10:00 cuando abren (menos gente, los animales más activos porque es hora de comer). Metro: Oriente (línea roja, 20 min desde centro). El acuario está a 5 minutos caminando desde la estación. Lleva snacks y agua —la cafetería es cara. Hay lockers para dejar mochilas si las llevas.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800',
    coordinates: { lat: 38.7633, lng: -9.0939 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7633,-9.0939'
  },
  {
    time: '12:30',
    title: 'Teleférico do Parque das Nações — Vistas aéreas del Tajo',
    description: 'Justo al lado del Oceanário está el teleférico que recorre 1.2 kilómetros por la orilla del Tajo a 20 metros de altura —es como volar sobre el río sin necesidad de avión. Son 8 minutos de viaje continuo con vistas espectaculares: el río Tajo serpenteando hacia el Atlántico, el Puente Vasco da Gama (el puente más largo de Europa con 17 kilómetros que parece infinito), la Torre Vasco da Gama (torre de hotel de 145 metros que es el edificio más alto de Portugal), y todo el Parque das Nações desde arriba como si fuera una maqueta. Los niños alucinan viendo los barcos pequeñitos abajo navegando, la gente caminando por el paseo marítimo que parece hormigas, y sintiendo la cabina mecerse suavemente con el viento del río. Es completamente seguro (las cabinas están cerradas y tienen sistemas de seguridad múltiples), tiene aire acondicionado (perfecto en verano), y es ideal para descansar las piernas después de las horas caminando en el Oceanário. Al final del recorrido hay un parque infantil gigante (Jardim da Água) con toboganes de varios tamaños, columpios, fuentes de agua interactivas (en verano los niños juegan mojándose y es súper divertido), zona de picnic con mesas si traes bocadillos, y mucho espacio para que corran y gasten energía. Es el descanso perfecto antes de seguir con más actividades.',
    tip: '🚡 Teleférico: adultos 6€ ida, niños (3-12) 3€ ida. Compra ida y vuelta 9€/5€ (más barato y puedes bajar en cualquier parada intermedia). Opera 10:30-19:00 (verano hasta 20:00). Las cabinas pasan cada pocos minutos, no hay que esperar mucho. PARQUE INFANTIL: Jardim da Água gratis, perfecto para que corran 30-45 minutos mientras vosotros descansáis. Lleva cambio de ropa si hace calor —las fuentes de agua invitan a mojarse y los niños no se resisten. Hay baños públicos cerca del parque.',
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
    title: 'Jardim Zoológico de Lisboa — El zoo histórico con shows épicos',
    description: 'Toma el metro desde Oriente hasta Jardim Zoológico (20 minutos, línea azul directa, muy fácil con niños). El Zoo de Lisboa existe desde 1884 —es uno de los más antiguos de Europa— y tiene más de 2000 animales de 300 especies diferentes: leones que rugean impresionantemente, tigres siberianos majestuosos, gorilas que se comunican con gestos, elefantes africanos enormes, jirafas que comen de tu mano (experiencia extra de pago), hipopótamos sumergiéndose en sus lagos, delfines que hacen acrobacias, reptiles de todos los tamaños, aves tropicales de colores imposibles, y una zona de granja con cabras, ovejas, y cerdos que los niños pueden acariciar y alimentar. Hay 3 shows diarios que son imperdibles: el show de delfines (el favorito absoluto de los niños —saltan, hacen trucos, interactúan con los entrenadores), aves rapaces en vuelo libre (águilas, halcones, búhos volando sobre tu cabeza), y leones marinos jugando y haciendo piruetas. El recinto es grande (16 hectáreas) pero está bien señalizado con mapas en cada esquina, hay un trenecito interno que recorre el zoo (3€, ahorra muchísimas piernas y es divertido para los niños), teleférico que cruza por encima ofreciendo vistas aéreas (incluido en la entrada), y zona de juegos infantil grande donde pueden correr y jugar. Lleva mínimo 3-4 horas para verlo todo sin prisa —hay mucho que ver y los niños querrán parar en cada animal. Hay restaurante/cafetería dentro con menús infantiles, baños en todas las zonas con cambiadores, y tiendas con peluches y souvenirs que los niños van a querer.',
    tip: '🦁 Entrada: adultos 24€, niños (3-12) 16€, menores 3 años gratis. Pack familia (2 adultos + 2 niños): 68€ (ahorro de 8€). Compra online 10% descuento + evitas cola. Horario: 10:00-18:00 (verano hasta 20:00). IMPRESCINDIBLE: Show de delfines (12:00, 15:00, 17:30) —llega 20 minutos antes para buenos asientos en primera fila (los niños querrán estar cerca). El trenecito cuesta 3€ pero vale la pena —ahorra muchísimo caminar y es divertido. Lleva agua, gorras, y snacks —el zoo es grande y hay mucho que caminar.',
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
    title: 'Castillo de São Jorge — El castillo que todos los niños sueñan',
    description: 'El día 2 empieza con el castillo —todos los niños aman castillos, y este es de los de verdad. El Castillo de São Jorge es una fortaleza del siglo XI en lo alto de Lisboa con murallas enormes que han visto mil años de historia, torres de vigilancia donde puedes subir y asomarte, almenas donde imaginar arqueros defendiendo la ciudad, cañones antiguos que los niños pueden tocar (con supervisión), un foso que ahora es jardín, y pavos reales caminando libremente por el recinto (los niños alucinan cuando abren la cola en todo su esplendor —es un espectáculo natural que no se cansan de ver). Las vistas desde las murallas son espectaculares: toda Lisboa desplegándose hasta el río, los barrios como un mapa en relieve, y el Tajo brillando al fondo. Hay zona arqueológica con ruinas romanas y árabes superpuestas (los niños pueden ver literalmente las capas de historia), museo pequeño con armaduras, espadas, y objetos medievales (los niños se ponen a jugar imaginando batallas), y espacios amplios para correr sin peligro. No es un museo aburrido donde no se puede tocar nada —es un castillo real donde pueden trepar escaleras de piedra (con cuidado), asomarse por las almenas (bajo supervisión), imaginar batallas medievales, y perseguir pavos reales (que se dejan acercar pero mantienen distancia). Dale 2 horas mínimo —hay mucho que explorar y los niños no querrán irse. Hay cafetería con terraza con vistas, baños amplios, y sombra bajo árboles centenarios perfecta para descansar cuando se cansen.',
    tip: '🏰 Entrada: adultos 15€, niños (10-17) 7.50€, menores 10 años gratis. Pack familia disponible. Horario: 9:00-18:00 (verano hasta 21:00). ESTRATEGIA: Llega 9:30-10:00 (menos calor, menos gente, y los animales más activos). Lleva agua, gorras, y snacks —hace calor aquí arriba y no hay mucha sombra en las murallas. Subida: Uber/taxi desde centro 6-8€ (más cómodo con niños) o tranvía 28 + caminar 10 minutos cuesta arriba (más aventura pero cansado). El castillo tiene zonas de sombra bajo árboles perfectas para hacer pausas.',
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
  },
  {
    time: '10:00 (DÍA 3)',
    title: 'Tranvía 28 — La aventura sobre ruedas que todos aman',
    description: 'El día 3 empieza con el tranvía 28 —el tranvía amarillo de madera más icónico de Lisboa que es una atracción en sí mismo. Para familias es perfecto porque es transporte + experiencia + vistas todo en uno. Subid en Martim Moniz (la parada inicial, menos gente, más fácil conseguir asientos) y aguantad todo el recorrido hasta Campo de Ourique (40 minutos de aventura continua). Los niños alucinan viendo cómo el tranvía trepa colinas imposibles con pendientes del 15%, pasa por calles tan estrechas que casi rozas las paredes de las casas (literalmente puedes tocar los azulejos desde la ventanilla), y serpentea entre los barrios más auténticos de Lisboa como si fuera una montaña rusa histórica. Vas a pasar por: Graça (barrio residencial en la colina), Alfama (laberinto medieval), Sé Catedral (la catedral más antigua), Baixa (centro comercial), Estrela (basílica blanca gigante), y Campo de Ourique (barrio residencial donde termina). Cada curva es una sorpresa, cada subida un desafío para el motor, y los niños se emocionan con cada parada. Es completamente seguro (el conductor está acostumbrado a familias), tiene ventanas grandes perfectas para fotos, y es una de las mejores formas de ver Lisboa sin caminar —ideal para descansar las piernas después de días intensos.',
    tip: '🚋 Billete: 3€ en el conductor (solo efectivo) o 1.50€ con tarjeta Viva Viagem (mucho más barato). MEJOR HORARIO: 9:00-11:00 o después de las 18:00 (menos turistas, más espacio). Evita 12:00-17:00 que va REPLETO. Si queréis ir sentados, subid en Martim Moniz (inicio) o Campo de Ourique (final). El recorrido completo dura 40-45 minutos. Perfecto para tomar fotos desde la ventanilla. Los niños menores de 4 años van gratis en el regazo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1597426509446-cd65442af149?w=800',
    coordinates: { lat: 38.7169, lng: -9.1399 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7169,-9.1399'
  },
  {
    time: '11:30',
    title: 'Belém — Torre, Pastéis y jardines junto al río',
    description: 'Bajad del tranvía y tomad un Uber/taxi hasta Belém (15 min, 8-10€) o tren desde Cais do Sodré (10 min, 1.50€). Belém es perfecto para familias porque tiene todo junto: monumentos impresionantes, jardines amplios para correr, y los mejores pasteles de nata del mundo. Empezad en la Torre de Belém —una torre medieval del siglo XVI que parece un castillo de cuento de hadas flotando en el río. Los niños pueden subir las escaleras estrechas (con supervisión, es seguro pero empinado) hasta la terraza superior donde las vistas al Tajo y al puente 25 de Abril son espectaculares. Después, caminad 5 minutos hasta Pastéis de Belém —la pastelería original que inventó los pasteles de nata en 1837. Los niños alucinan viendo la producción en vivo (puedes ver la cocina desde la entrada), y los pasteles calientes recién hechos (1.30€ cada uno) son literalmente el mejor dulce que probarán en Lisboa. Hay zona de mesas si queréis sentaros, pero también podéis comprar para llevar y comer en los jardines de Belém junto al río. Los jardines tienen césped amplio, bancos bajo los árboles, y mucho espacio para que los niños corran mientras vosotros descansáis. Hay también el Padrão dos Descobrimentos (monumento gigante con forma de carabela) que podéis ver desde fuera —es impresionante y los niños se quedan mirando la altura.',
    tip: '🏰 Torre de Belém: adultos 8€, niños (0-12) gratis, estudiantes 4€. Horario: 10:00-18:30 (verano hasta 19:30). Lunes cerrado. Subida: escaleras estrechas, niños pequeños con supervisión. PASTÉIS DE BELÉM: 1.30€/pastel, café 1€. TRUCO: Entra directo a "Salão" (evitas cola de 30-60 min). Jardines: GRATIS, perfecto para picnic. Tiempo total: 2-2.5 horas.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.6916, lng: -9.2158 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6916,-9.2158'
  },
  {
    time: '14:00',
    title: 'Almuerzo en Time Out Market — Food hall para todos los gustos',
    description: 'Tomad un Uber/taxi hasta Time Out Market en Cais do Sodré (15 min, 8-10€). Este food hall gigante es perfecto para familias porque cada uno puede pedir lo que quiera sin negociar sobre el restaurante. Hay 40+ puestos diferentes: pizza, hamburguesas, sushi, comida portuguesa tradicional, woks asiáticos, tacos mexicanos, comida vegana, heladerías artesanales, y pastelería portuguesa. Los niños pueden elegir su comida favorita mientras vosotros probáis algo más sofisticado. Precios razonables: plato principal 8-15€, menú infantil 6-10€. Hay mesas compartidas grandes (perfecto para familias), tronas disponibles, baños familiares amplios, y el ambiente es animado pero no abrumador. Después del almuerzo, podéis pasear por el mercado (hay puestos de productos locales, souvenirs, y artesanía) o salir a la plaza exterior donde hay terrazas de cafés y espacio para que los niños corran un poco.',
    tip: '🍽️ Time Out Market: 10:00-00:00 (comida hasta 23:00). Precio familia (2 adultos + 2 niños): 35-50€. TRUCO: Llega 13:30-14:00 (evitas hora punta 12:30-13:30). Hay zona de juegos pequeña en la plaza exterior. Metro: Cais do Sodré (línea verde).',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    coordinates: { lat: 38.7071, lng: -9.1444 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1444'
  },
  {
    time: '16:00',
    title: 'Pavilhão do Conhecimento — Museo de ciencia interactivo',
    description: 'Tomad el metro desde Cais do Sodré hasta Oriente (20 min, línea verde → roja) y caminad 5 minutos hasta el Pavilhão do Conhecimento (Pabellón del Conocimiento). Este museo de ciencia interactivo es uno de los mejores de Europa y los niños se vuelven locos porque TODO se puede tocar, experimentar, y jugar. Hay más de 400 actividades interactivas: construir puentes, experimentar con electricidad, jugar con ilusiones ópticas, ver cómo funciona el cuerpo humano, experimentar con ondas sonoras, construir robots, jugar con imanes gigantes, ver demostraciones de física en vivo, y una zona especial para niños pequeños (0-6 años) con actividades sensoriales. Hay también un planetario (entrada extra 3€) donde proyectan películas sobre el espacio que fascinan a los niños. El museo está diseñado para que los niños aprendan jugando —no es aburrido ni académico, es pura diversión práctica. Los padres también se divierten porque las actividades son interesantes para todas las edades. Date mínimo 2-3 horas —los niños no querrán irse y hay tanto que hacer que el tiempo vuela.',
    tip: '🔬 Entrada: adultos 10€, niños (3-17) 7€, menores 3 años gratis. Pack familia (2 adultos + 2 niños): 28€. Planetario: +3€/persona. Horario: 10:00-18:00 (verano hasta 19:00). Lunes cerrado. TRUCO: Llega 15:30-16:00 (menos gente, más espacio para experimentar). Metro: Oriente (línea roja). Hay cafetería dentro con menús infantiles. Lleva agua —hay mucho que hacer y los niños se cansan.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1587828191251-c8959ce4fc79?w=800',
    coordinates: { lat: 38.7633, lng: -9.0942 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7633,-9.0942'
  },
  {
    time: '18:30',
    title: 'Jardim da Estrela — Parque perfecto para cerrar el día',
    description: 'Tomad el metro desde Oriente hasta Rato (25 min, línea roja → amarilla) y caminad 5 minutos hasta el Jardim da Estrela. Este parque del siglo XIX es el favorito de las familias lisboetas porque tiene TODO lo que necesitas: zona de juegos infantil grande con columpios, toboganes, y estructuras de escalada (zona cerrada y segura), estanque con patos y cisnes que los niños pueden alimentar (lleva pan), césped amplio para correr y jugar, kiosco central que vende helados, zumos, y snacks, bancos bajo árboles centenarios perfectos para descansar, y la Basílica da Estrela de fondo (esa iglesia blanca gigante que parece un pastel de bodas). Es el lugar perfecto para cerrar un día intenso: los niños corren y juegan gastando la última energía del día, vosotros os relajáis en los bancos viendo el atardecer, y todos disfrutáis del ambiente tranquilo y familiar. Los domingos por la mañana hay mercadillo artesanal y músicos tocando, pero cualquier día es perfecto para venir aquí. Es gratis, está abierto hasta las 21:00 (verano 22:00), y es uno de esos lugares donde el tiempo pasa despacio y todos están contentos.',
    tip: '🌳 Jardim da Estrela: GRATIS, abre 7:00-21:00 (verano hasta 22:00). PARQUE INFANTIL: Zona cerrada, segura, con bancos para vigilar. Quiosque: helados 2-3€, zumos 2€, snacks 1-3€. PATOS: Lleva pan (los niños aman alimentarlos). Supermercado Pingo Doce cerca si queréis hacer picnic. Metro: Rato (línea amarilla). Perfecto para descansar después de días intensos.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    coordinates: { lat: 38.7156, lng: -9.1601 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7156,-9.1601'
  },
  {
    time: '10:00 (DÍA 4 - OPCIONAL)',
    title: 'Cascais — Playa, paseo marítimo y helados',
    description: 'Si tenéis un día extra y el tiempo lo permite, tomad el tren desde Cais do Sodré hasta Cascais (40 min, 2.30€). Cascais es un pueblo costero encantador a solo 30 km de Lisboa que es perfecto para familias. Tiene playas de arena fina y aguas tranquilas (perfectas para niños), paseo marítimo amplio para caminar, zona de juegos infantil junto a la playa, y un centro histórico lleno de heladerías, tiendas de souvenirs, y restaurantes familiares. Los niños pueden jugar en la playa (lleva toallas y cambio de ropa), construir castillos de arena, y chapotear en el agua mientras vosotros os relajáis. Hay también el "Boca do Inferno" (Boca del Infierno) —una formación rocosa donde las olas chocan con fuerza creando un espectáculo natural que fascina a los niños. Después de la playa, podéis pasear por el centro histórico, comprar helados artesanales (2-4€), y almorzar en algún restaurante con terraza junto al mar. Es un día relajado y diferente que los niños recordarán.',
    tip: '🏖️ Tren Lisboa→Cascais: 2.30€ adulto, 1.15€ niño (4-12). Cada 20 min desde Cais do Sodré. PLAYA: Gratis, arena fina, aguas tranquilas. Lleva toallas, protector solar, gorras, y cambio de ropa. HELADOS: Varias heladerías artesanales en el centro (2-4€). Almuerzo: 15-25€/persona en restaurantes con terraza. Tiempo total: 4-5 horas (medio día perfecto).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    coordinates: { lat: 38.6979, lng: -9.4215 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6979,-9.4215'
  }
];

// Timeline stops para Lisboa Fotografía (12 spots con horarios de luz óptimos)
export const lisboaFotografiaTimeline: TimelineStop[] = [
  {
    time: 'Golden Hour Mañana (07:00-08:30)',
    title: 'Mirador das Portas do Sol — Luz dorada sobre Alfama al amanecer',
    description: 'La primera parada es al amanecer en el Mirador das Portas do Sol, cuando Lisboa todavía duerme y solo los fotógrafos y los madrugadores están despiertos. Llega cuando el sol empieza a subir por detrás de ti e ilumina toda Alfama con luz dorada horizontal que parece miel líquida derramándose sobre los tejados. Las casas con tejas naranjas brillan como si fueran de cobre, las paredes blancas y amarillas reflejan la luz como espejos, los azulejos antiguos cobran vida con cada rayo, y todo el barrio parece despertar contigo. Desde aquí capturas una de las composiciones más icónicas de Lisboa: el Panteón Nacional (esa cúpula blanca gigante) a la izquierda como punto focal, el Tajo azul intenso de fondo creando contraste, y las calles laberínticas de Alfama bajando en capas como un anfiteatro natural. COMPOSICIÓN PERFECTA: Usa la balaustrada del mirador como leading line en primer plano (guía la mirada hacia el fondo), los tejados en plano medio creando profundidad, y el Tajo como fondo infinito. Focal recomendada: 35-50mm para paisaje urbano amplio que capture toda la escena, o 85mm para comprimir las capas de casas y crear más impacto visual. La terraza del quiosco está cerrada a esta hora así que lo tienes prácticamente para ti solo —solo otros fotógrafos que saben lo que hacen, y tal vez algún corredor madrugador. Cero turistas. Solo tú, tu cámara, y Lisboa despertando en el silencio del amanecer.',
    tip: '📸 MEJOR HORA: 7:00-8:30 (luz horizontal dorada, sombras largas, contraste perfecto). SETTINGS: ISO 100-400 (según la luz disponible), f/5.6-8 (profundidad de campo para tener todo enfocado), 1/125-1/250s (suficiente para congelar cualquier movimiento). Trípode opcional pero hay barandilla para apoyar la cámara si necesitas estabilidad. Focal: 24-70mm zoom te da versatilidad para diferentes composiciones. ACCESO: Tranvía 28 (si funciona a esa hora) o Uber (6€, más fiable). Llega ANTES del amanecer (30-45 min antes) para preparar tu equipo, elegir el mejor ángulo, y estar listo cuando la luz empiece a cambiar. Lleva café —madrugar vale la pena por estas fotos.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
    coordinates: { lat: 38.7122, lng: -9.1280 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7122,-9.1280'
  },
  {
    time: 'Mañana (08:30-10:00)',
    title: 'Tranvía 28 en Rua da Bica — El shot más icónico de Lisboa',
    description: 'Baja caminando desde el mirador hasta la Rua da Bica de Duarte Belo —una de las calles más empinadas y fotogénicas de Lisboa, y posiblemente la más fotografiada del país. Es la calle del tranvía amarillo que ves en TODOS los posts de Instagram sobre Lisboa, y cuando estés ahí entenderás por qué. La perspectiva es brutal: una calle adoquinada con pendiente del 45% que parece una montaña rusa, edificios de colores vivos (amarillo, rosa, azul, verde) a ambos lados creando un túnel visual perfecto, y el tranvía 28 subiendo lentamente por el centro como si fuera el protagonista de una película. TIMING es crucial: Los tranvías pasan cada 10-15 minutos, así que tienes varias oportunidades. Plántate en el medio de la calle (CON MUCHO CUIDADO, mira constantemente hacia arriba para ver si viene el tranvía), pon la cámara en modo ráfaga (dispara 5-10 fotos seguidas), y dispara cuando el tranvía esté a mitad de la cuesta —ese es el momento perfecto donde la composición es más equilibrada. TRUCO PRO: Agáchate para disparar desde abajo (la calle funciona como leading line perfecta hacia el tranvía, y la perspectiva desde abajo hace que el tranvía parezca más grande y dramático). Mejor luz: 8:30-10:00 cuando el sol ilumina la calle desde arriba creando sombras que añaden profundidad. Después de las 11:00 se llena de turistas haciendo exactamente lo mismo, y además la luz se vuelve más dura y menos fotogénica.',
    tip: '📸 SETTINGS: ISO 200-400 (según la luz), f/8-11 (profundidad de campo para tener calle y tranvía enfocados), 1/250-1/500s (velocidad suficiente para congelar el tranvía en movimiento). Focal: 24-35mm (gran angular para capturar toda la calle y el tranvía). PELIGRO REAL: Los tranvías NO frenan para fotógrafos —están en su ruta y tienen horarios que cumplir. Estate siempre atento, escucha el sonido de las ruedas sobre los raíles, y cuando veas que viene, dispara rápidamente y muévete inmediatamente. La gente vive aquí —respeta el espacio, no bloquees el paso, y si alguien te pide que te muevas, hazlo con una sonrisa. Puedes repetir el proceso varias veces hasta conseguir la foto perfecta.',
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
    description: 'El Elevador de Santa Justa es un ascensor de hierro neogótico de 1902 que parece sacado de París. Actualmente está cerrado (2026) por mantenimiento, pero sigue siendo uno de los íconos fotográficos de Lisboa. Hay DOS shots aquí: (1) Desde abajo capturando toda la estructura vertical (45 metros) contra el cielo azul - usa ultra wide y dispara hacia arriba con la base como foreground. El hierro forjado tiene detalles preciosos - acércate con 50-85mm para abstracts de los engranajes, remaches, y estructura. (2) Desde arriba (sube al mirador por Escadas do Carmo, 1.50€) capturando Baixa, el Castillo, y el Tajo con los tejados naranjas en primer plano. MEJOR LUZ para shot desde arriba: 12:00-14:00 (sol alto, menos sombras en la ciudad). Para shot desde abajo: cualquier hora con cielo azul.',
    tip: '📸 DESDE ABAJO: ISO 100, f/5.6-8, 1/500s, 16-24mm ultra wide. DESDE ARRIBA: Sube por Escadas do Carmo (gratis) y entra al mirador pagando 1.50€. Polarizador para cielo azul intenso, f/8, 35-50mm. PERSONAS: Evita 11:00-16:00 (más gente). Mejor 9:00-10:00 o 17:00-18:00. ⚠️ Elevador cerrado (2026) - solo puedes verlo desde abajo o subir al mirador por las escaleras.',
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
  },
  {
    time: 'DÍA 2 - Mañana (08:00-09:30)',
    title: 'Mirador de Santa Luzia — Alfama desde otro ángulo',
    description: 'El segundo día empieza en el Mirador de Santa Luzia —el mirador más fotografiado de Lisboa y con razón. Desde aquí capturas una de las composiciones más icónicas: el Panteón Nacional (esa cúpula blanca gigante) a la izquierda como punto focal, el Tajo azul intenso de fondo creando contraste, y las calles laberínticas de Alfama bajando en capas como un anfiteatro natural. COMPOSICIÓN PERFECTA: Usa la balaustrada del mirador como leading line en primer plano (guía la mirada hacia el fondo), los tejados en plano medio creando profundidad, y el Tajo como fondo infinito. Los paneles de azulejos del siglo XVIII que flanquean la terraza cuentan la historia de Lisboa antes del terremoto de 1755 — perfectos para fotos de detalles. Las buganvillas moradas que trepan por la pérgola crean un marco natural que hace que cada foto parezca una obra de arte. MEJOR LUZ: 8:00-9:30 cuando el sol ilumina Alfama desde el este con luz dorada horizontal.',
    tip: '📸 MEJOR HORA: 8:00-9:30 (luz horizontal dorada, sombras largas, contraste perfecto). SETTINGS: ISO 100-400, f/5.6-8, 1/125-1/250s. Focal: 24-70mm zoom te da versatilidad. Trípode opcional pero hay barandilla para apoyar. ACCESO: Tranvía 28 o Uber (6€). Llega ANTES del amanecer (30-45 min antes) para preparar tu equipo y elegir el mejor ángulo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1588642411190-3e72e93b1497?w=800',
    coordinates: { lat: 38.7115, lng: -9.1294 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7115,-9.1294'
  },
  {
    time: 'Mañana (10:00-11:30)',
    title: 'Castillo de San Jorge — Vistas 360° desde las murallas',
    description: 'Sube al Castillo de San Jorge para fotografía arquitectónica y paisajística. Las murallas medievales ofrecen vistas 360° sobre Lisboa que son perfectas para panorámicas. SHOTS CLAVE: (1) Desde las murallas capturando toda Alfama bajando hacia el Tajo con el puente 25 de Abril de fondo, (2) Detalles arquitectónicos de las torres y murallas con 50-85mm, (3) Los pavos reales sueltos en los jardines (súper fotogénicos), (4) Panorámica completa de Lisboa desde la torre principal. MEJOR LUZ: 10:00-11:30 cuando el sol ilumina la ciudad desde el este creando sombras que añaden profundidad. El castillo abre a las 9:00 —si llegas temprano lo tienes prácticamente vacío y puedes disparar sin gente en las fotos.',
    tip: '📸 SETTINGS: ISO 100-400, f/8-11 (profundidad de campo), 1/250-1/500s. Focal: 16-35mm (panorámicas), 50-85mm (detalles arquitectónicos). ENTRADA: 15€ adultos, 7.50€ estudiantes. HORARIO: 9:00-18:00 (invierno), 9:00-21:00 (verano). Lleva agua, gorra, y calzado cómodo — hace calor aquí arriba y hay mucho que caminar. Trípode útil para panorámicas pero no obligatorio.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.7139, lng: -9.1334 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7139,-9.1334'
  },
  {
    time: 'Mediodía (12:00-13:30)',
    title: 'Chiado — Arquitectura y street photography',
    description: 'Baja al Chiado para fotografía urbana y arquitectónica. Este barrio intelectual tiene calles elegantes, cafés históricos, librerías centenarias, y arquitectura del siglo XIX perfecta para street photography. SHOTS: (1) A Brasileira con la estatua de Pessoa (foto icónica), (2) Calles del Chiado con arquitectura simétrica, (3) Librería Bertrand (la más antigua del mundo, desde 1732) con estanterías hasta el techo, (4) Detalles de azulejos y fachadas con 50-85mm. La luz del mediodía funciona bien aquí porque las calles son amplias y no hay sombras duras. Dispara en RAW para recuperar detalles en las sombras de los edificios.',
    tip: '📸 SETTINGS: ISO 100-400, f/5.6-8, 1/250-1/500s. Focal: 24-70mm (versátil), 50mm (street photography). CAFÉ: A Brasileira (2-4€, turístico pero icónico, foto obligatoria con estatua de Pessoa). LIBRERÍAS: Bertrand (desde 1732), Ler Devagar (diseño espectacular). GRATIS: Pasear Chiado, ver tiendas, arquitectura.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    coordinates: { lat: 38.7108, lng: -9.1408 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7108,-9.1408'
  },
  {
    time: 'Tarde (14:30-16:00)',
    title: 'MAAT — Arquitectura moderna y reflejos',
    description: 'Ve al MAAT (Museo de Arte, Arquitectura y Tecnología) en Belém para fotografía arquitectónica moderna. El edificio por fuera ya es una obra de arte: estructura ondulante blanca de azulejos que parece una ola gigante saliendo del Tajo. SHOTS: (1) La estructura completa desde el paseo marítimo (ultra wide), (2) Detalles de los azulejos y la forma orgánica con 50-85mm, (3) Reflejos en el agua si hay marea alta, (4) Desde el techo (GRATIS) capturando vistas al puente 25 de Abril y el Tajo. La arquitectura moderna contrasta brutalmente con los edificios históricos de Belém alrededor, creando composiciones interesantes. PUEDES SUBIR AL TECHO GRATIS (rampa pública) y las vistas al puente, el río, y Belém son perfectas para fotos panorámicas.',
    tip: '📸 SETTINGS: ISO 100-400, f/8-11, 1/250-1/500s. Focal: 16-35mm (estructura completa), 50-85mm (detalles). TECHO: GRATIS (acceso público, rampa exterior). MUSEO: 11€ (solo si te interesa arte contemporáneo). HORARIO: 11:00-19:00, martes cerrado. El techo cierra a las 19:00. MEJOR LUZ: 14:30-16:00 (sol ilumina la estructura desde el oeste).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800',
    coordinates: { lat: 38.6963, lng: -9.1987 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6963,-9.1987'
  },
  {
    time: 'Tarde (16:30-18:00)',
    title: 'Padrão dos Descobrimentos — Geometría y simetría',
    description: 'El Padrão dos Descobrimentos es perfecto para fotografía arquitectónica y simétrica. Este monumento gigante de 52 metros de altura con forma de carabela tiene 33 estatuas de exploradores portugueses talladas en la fachada. SHOTS: (1) Desde el frente capturando toda la estructura vertical contra el cielo (ultra wide), (2) Detalles de las estatuas con 50-85mm, (3) Desde arriba (sube, 6€) capturando el mosaico del mapamundi en el suelo que muestra todas las rutas de exploración, (4) Silueta contra el sunset si llegas al golden hour. La geometría del monumento es perfecta para composiciones simétricas. MEJOR LUZ: 16:30-18:00 cuando el sol ilumina las estatuas desde el oeste creando sombras que añaden profundidad.',
    tip: '📸 SETTINGS: ISO 100-400, f/8-11, 1/250-1/500s. Focal: 16-35mm (estructura completa), 50-85mm (detalles estatuas). ENTRADA: 6€ adultos, 3€ estudiantes. Subir arriba: vistas al mosaico del mapamundi + panorámica del Tajo. HORARIO: 10:00-19:00 (verano), 10:00-18:00 (invierno). Lunes cerrado. Tiempo visita: 20-30 min. Polarizador ayuda con reflejos del río.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
    coordinates: { lat: 38.6936, lng: -9.2058 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6936,-9.2058'
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
    description: 'Bájate del 28 en Baixa (centro neurálgico de Lisboa). Camina por Rua Augusta (calle peatonal principal) hasta la Praça do Comércio - plaza enorme con arcadas amarillas abierta al río Tajo. Desde aquí, sube al Arco da Rua Augusta (3€, mirador 360°) para vistas de toda Baixa y el río. Después camina hasta el Elevador de Santa Justa - ascensor neogótico de hierro de 1902 que parece sacado de París. Actualmente está cerrado (2026) por mantenimiento, pero vale la pena verlo desde abajo —la estructura en sí es una obra de arte arquitectónica. Si quieres las vistas desde arriba, sube por las Escadas do Carmo (escaleras gratis al lado) y entra al mirador pagando 1.50€. Pasea por las calles de Baixa viendo las tiendas de azulejos, pastelerías con vitrinas de pasteles de nata, y la arquitectura pombalina reconstruida después del terremoto de 1755.',
    tip: '🏛️ Arco da Rua Augusta: 3€, vistas 360°. ⚠️ Elevador Santa Justa: CERRADO (2026). GRATIS: Caminar Baixa, Praça Comércio, fotos del elevador desde abajo. ALTERNATIVA: Escadas do Carmo (gratis) + mirador 1.50€ para vistas similares. Pastelerías recomendadas: Confeitaria Nacional (desde 1829), pastel de nata 1.20€.',
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
    time: '10:30',
    title: 'Mirador de Santa Luzia — La postal que todo el mundo reconoce',
    description: 'Después de perderte por las callejuelas de Alfama, subes una última cuesta y llegas a este mirador. Es el momento en que entiendes por qué llaman a Lisboa "la ciudad de las siete colinas" — porque desde aquí ves cómo los tejados naranjas descienden en cascada hacia el Tajo, cómo las calles serpentean entre las casas, y cómo la geografía de la ciudad cobra sentido. Las vistas son exactamente la postal que has visto en Instagram mil veces, pero verla en persona es diferente: el panteón nacional blanco brillando al fondo, el río azul profundo, y si tienes suerte, algún barco de crucero pasando lentamente que añade movimiento al cuadro perfecto. Los paneles de azulejos del siglo XVIII que flanquean la terraza cuentan la historia de Lisboa antes del terremoto de 1755 — tómate cinco minutos para observarlos de cerca. Representan la Praça do Comércio antes de ser destruida y la conquista del castillo a los moros. Al lado hay un kiosco donde los vecinos del barrio toman café a cualquier hora — únete a ellos. Y las buganvillas moradas que trepan por la pérgola crean un marco natural que hace que cada foto parezca una obra de arte. Este es el mirador más fotografiado de Lisboa, y cuando estés aquí entenderás por qué.',
    tip: '📸 Mejor hora para fotos: 10:00-11:00 (luz dorada horizontal, menos sombras duras). El mirador se llena después de las 11:00 con grupos organizados. Hay otro mirador justo al lado (Portas do Sol) con menos gente y vistas complementarias — visítalos ambos, están a 30 segundos caminando. El kiosco abre desde temprano y sirve café, zumos naturales, y pasteles de nata.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1588642411190-3e72e93b1497?w=800',
    coordinates: { lat: 38.7115, lng: -9.1294 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7115,-9.1294'
  },
  {
    time: '11:00',
    title: 'Castillo de San Jorge',
    description: 'Después de perderte por las callejuelas de Alfama, subes una última cuesta y llegas a este mirador. Es el momento en que entiendes por qué llaman a Lisboa "la ciudad de las siete colinas" — porque desde aquí ves cómo los tejados naranjas descienden en cascada hacia el Tajo, cómo las calles serpentean entre las casas, y cómo la geografía de la ciudad cobra sentido. Las vistas son exactamente la postal que has visto en Instagram mil veces, pero verla en persona es diferente: el panteón nacional blanco brillando al fondo, el río azul profundo, y si tienes suerte, algún barco de crucero pasando lentamente que añade movimiento al cuadro perfecto. Los paneles de azulejos del siglo XVIII que flanquean la terraza cuentan la historia de Lisboa antes del terremoto de 1755 — tómate cinco minutos para observarlos de cerca. Representan la Praça do Comércio antes de ser destruida y la conquista del castillo a los moros. Al lado hay un kiosco donde los vecinos del barrio toman café a cualquier hora — únete a ellos. Y las buganvillas moradas que trepan por la pérgola crean un marco natural que hace que cada foto parezca una obra de arte. Este es el mirador más fotografiado de Lisboa, y cuando estés aquí entenderás por qué.',
    tip: '🎫 Entrada: 15€ adultos, 7.50€ estudiantes/seniors. Compra online para evitar cola. HORARIO: 9:00-18:00 (invierno), 9:00-21:00 (verano). Lleva gorra/sombrero - casi no hay sombra. Cafetería cara dentro, mejor lleva snacks. TRUCO: Entra por la puerta de atrás (menos cola) - búscala en Google Maps como "Castelo de São Jorge - Entrada Norte".',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.7139, lng: -9.1334 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7139,-9.1334'
  },
  {
    time: '13:00',
    title: 'Almuerzo en Baixa — Comida local auténtica',
    description: 'Después del castillo, baja hacia Baixa para comer. El centro neurálgico de Lisboa reconstruido después del terremoto de 1755 es ordenado, geométrico, iluminista —calles en cuadrícula perfecta, plazas simétricas, edificios pombalinos de 4 pisos pintados en colores pastel. Para comer, evita los restaurantes turísticos de Rua Augusta (caros y mediocres). Mejor opciones: "Taberna da Rua das Flores" (cocina portuguesa moderna, 15-20€, reserva recomendada), "Cervejaria Trindade" (mariscos en edificio histórico con azulejos del siglo XVIII, 20-35€), o simplemente cafés históricos en Rossio donde puedes tomar café + pastel de nata (2.50€) y seguir explorando.',
    tip: '🍽️ Evita restaurantes de Rua Augusta (trampas turísticas). Mejor: calles laterales o cafés históricos. Precio medio: 15-25€/persona en restaurantes decentes. Cafés históricos: café + pastel = 2.50€. Tiempo: 1-1.5h para comer tranquilo.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: '14:00',
    title: 'Baixa - Centro neurálgico',
    description: 'Después de comer, explora Baixa caminando. Empieza en la Praça do Comércio (plaza gigante abierta al Tajo con arcadas amarillas impresionantes), sube al Arco da Rua Augusta (3€ para el mirador en la cima - vistas 360° de Baixa y el río), después camina por Rua Augusta (calle peatonal principal llena de tiendas, artistas callejeros, turistas, vendedores de castañas asadas). Pasa por el Elevador de Santa Justa - ascensor neogótico de hierro de 1902 diseñado por un discípulo de Eiffel. Actualmente está cerrado (2026) por mantenimiento, pero la estructura sigue siendo impresionante desde abajo —vale la pena verla aunque no puedas subir. Termina en Rossio, la plaza donde solían quemar herejes en la Inquisición y hoy hay palomas, turistas, y portugueses tomando café en terrazas centenarias.',
    tip: '💰 Arco da Rua Augusta: 3€ (vistas brutales, 5 min arriba). GRATIS: Pasear Baixa, Praça Comércio, Rossio. Tiempo: 1-1.5h caminando tranquilo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: '15:30',
    title: 'Elevador de Santa Justa — El ascensor neogótico de Eiffel',
    description: 'El Elevador de Santa Justa es uno de los íconos arquitectónicos de Lisboa —un ascensor vertical de hierro neogótico de 45 metros de altura diseñado en 1902 por Raoul Mesnier du Ponsard, discípulo de Gustave Eiffel. La estructura parece sacada de una novela de Julio Verne: hierro forjado con decoraciones góticas, torres gemelas, y un puente superior que conecta con el barrio de Chiado. Actualmente está cerrado (2026) por mantenimiento, pero sigue siendo impresionante verlo desde abajo —la perspectiva desde la calle te permite apreciar toda la elegancia del diseño arquitectónico. Si quieres las vistas desde arriba, puedes subir gratis por las Escadas do Carmo (escaleras al lado que suben por las ruinas del convento) y entrar al mirador por arriba pagando solo 1.50€ —las vistas son exactamente las mismas: Baixa desplegada, el Castillo, y el Tajo brillando al fondo. El elevador funcionó desde 1902 hasta su cierre reciente, transportando a miles de personas diariamente entre Baixa y Chiado durante más de 120 años.',
    tip: '⚠️ Elevador: CERRADO (2026) por mantenimiento. GRATIS: Ver la estructura desde abajo —es igual de impresionante. ALTERNATIVA: Sube gratis por Escadas do Carmo (escaleras al lado) y entra al mirador por arriba pagando solo 1.50€ —vistas idénticas. Mejor hora: 9:00-10:00 o 17:00-18:00 para evitar aglomeraciones. La estructura desde abajo es gratis y vale cada segundo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7124, lng: -9.1396 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7124,-9.1396'
  },
  {
    time: '16:30',
    title: 'Chiado y A Brasileira — El café de Pessoa',
    description: 'Desde el elevador, sube al Chiado —el barrio intelectual de Lisboa donde Fernando Pessoa tomaba café cada mañana y escribía poesía en las mesas de los cafés. El Chiado es más elegante que la Baixa, más cultural, más local —aquí están las librerías centenarias (Livraria Bertrand, desde 1732, la más antigua del mundo), los teatros, las galerías de arte, y el Lisboa que se piensa a sí mismo. Entra a "A Brasileira" (Rua Garrett 120, abierto desde 1905) —el café más famoso de Lisboa. En la terraza verás la estatua de bronce de Pessoa sentado en una mesa como si todavía estuviera esperando a alguien. El interior conserva la decoración art déco original: espejos, azulejos, mesas de mármol, y un ambiente que parece congelado en el tiempo. Pide un café (2-4€, es turístico pero vale la experiencia) y siéntate donde Pessoa se sentaba. El Chiado es perfecto para pasear sin rumbo —descubrir tiendas de diseño portugués, librerías independientes, y cafés escondidos en calles laterales.',
    tip: '☕ A Brasileira: café 2-4€ (turístico pero icónico, foto obligatoria con estatua de Pessoa). Librerías: Bertrand (desde 1732, la más antigua del mundo), Ler Devagar (diseño espectacular). GRATIS: Pasear Chiado, ver tiendas, arquitectura. Tiempo: 1h paseando tranquilo.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    coordinates: { lat: 38.7108, lng: -9.1408 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7108,-9.1408'
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
    time: '10:30',
    title: 'Padrão dos Descobrimentos — Monumento a los Descubrimientos',
    description: 'Justo al lado de la Torre de Belém, camina 2 minutos hasta el Padrão dos Descobrimentos (Monumento a los Descubrimientos) —un monumento gigante de 52 metros de altura con forma de carabela que celebra la era dorada de los descubrimientos portugueses. Fue construido en 1960 para conmemorar el 500 aniversario de la muerte de Enrique el Navegante. El monumento tiene 33 estatuas de los grandes exploradores y figuras históricas portuguesas: Vasco da Gama, Pedro Álvares Cabral (descubridor de Brasil), Magallanes, y el propio Enrique el Navegante en la proa. Puedes subir arriba (6€) para ver el mosaico del mapamundi en el suelo que muestra todas las rutas de exploración portuguesas —desde Brasil hasta la India, desde África hasta Japón. Las vistas desde arriba son espectaculares: el Tajo, la Torre de Belém, y el Monasterio de los Jerónimos. El monumento está perfectamente alineado con el viento y el río, creando una composición fotográfica perfecta.',
    tip: '🎫 Entrada: 6€ adultos, 3€ estudiantes/seniors. Subir arriba: vistas al mosaico del mapamundi + panorámica del Tajo. HORARIO: 10:00-19:00 (verano), 10:00-18:00 (invierno). Lunes cerrado. Tiempo visita: 20-30 min. Combo Torre+Padrão: 12€ (ahorro 2€). Mejor hora: 10:00-11:00 (menos gente).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
    coordinates: { lat: 38.6936, lng: -9.2058 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6936,-9.2058'
  },
  {
    time: '11:00',
    title: 'Monasterio dos Jerónimos',
    description: 'Desde el Padrão, camina 10 minutos (o tranvía 15 una parada) hasta el Monasterio dos Jerónimos - la obra maestra absoluta del gótico manuelino portugués y Patrimonio de la Humanidad UNESCO. Este monstruo de piedra calcárea blanca fue construido con el oro de las especias que Vasco da Gama trajo de la India. Hay DOS partes: la IGLESIA (entrada GRATIS) y el CLAUSTRO (10€). Empieza por la iglesia - es donde está lo más espectacular: techos abovedados de 25 metros que parecen palmeras de piedra con decoraciones de cuerdas, anclas, y esfera armilar, la tumba de Vasco da Gama (el tipo que descubrió la ruta a India), la tumba del poeta Camões, y columnas octogonales con decoraciones de una delicadeza brutal. La luz natural entra por vitrales creando rayos de dios. El claustro (10€ extra) es hermoso pero opcional - dos pisos de arcadas talladas rodeando un jardín, perfecto para fotos de arcos infinitos.',
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
  {
    time: '17:00',
    title: 'LX Factory — El corazón creativo de Lisboa',
    description: 'Desde el MAAT, camina quince minutos siguiendo el río (o Uber 5€ si estás cansado) hasta LX Factory —una antigua fábrica de impresión de 1846 reconvertida en el epicentro cool de Lisboa. Imagina: naves industriales de ladrillo rojo de casi doscientos años llenas de grafitis enormes de artistas internacionales, estudios de diseño donde trabajan creativos portugueses, agencias de publicidad, cafés hipster con cafés de especialidad, tiendas de ropa independiente que no verás en ningún otro sitio, galerías de arte contemporáneo, y la librería Ler Devagar (libros del suelo al techo de 10 metros con una bicicleta voladora suspendida en el aire, estanterías que parecen imposibles, y un ambiente que parece sacado de una película de Wes Anderson). Los domingos hay mercado vintage (11:00-19:00) con ropa de los 70-80, vinilos de colección, artesanías, y comida callejera. Los jueves hay food trucks. Y siempre hay ambiente —es donde los creativos lisboetas trabajan, comen en los restaurantes del complejo, y se toman cervezas después del trabajo en las terrazas. Siéntate en alguna terraza bajo el puente 25 de Abril (que pasa literalmente por encima del complejo), pide una cerveja Super Bock (3€) y unos petiscos (tapas portuguesas —queso, embutidos, aceitunas, 5-8€), y absorbe que estás viviendo la Lisboa alternativa que no sale en las postales turísticas. Es el contraste perfecto después de todo el día viendo monumentos históricos.',
    tip: '☕ LandScape café: vistas al puente, cafés de especialidad 2-4€. By The Wine: 3000 vinos portugueses, degustación 12€, ambiente íntimo perfecto para relajarse. Ler Devagar librería: cierra 20:00 —no llegues tarde si quieres verla, es espectacular. Domingos: mercado vintage 11:00-19:00 con ropa, vinilos, artesanías. "Rio Maravilha" restaurante: terraza con vistas al puente, comida buena 20-30€. TODO es instagrameable aquí —los grafitis, la arquitectura industrial, las terrazas, todo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800',
    coordinates: { lat: 38.7065, lng: -9.1799 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7065,-9.1799'
  },
  {
    time: '20:00',
    title: 'Cena en Time Out Market — El estómago de Lisboa',
    description: 'Para cerrar el día perfecto en Belém, vuelve al centro y ve al Time Out Market en Mercado da Ribeira. Es un food hall donde reunieron a los mejores chefs y restaurantes de Lisboa bajo un mismo techo —el concepto es brillante: en vez de elegir un restaurante y comprometerte, caminas entre 40 stands diferentes, eliges lo que te llama en cada momento, pides en varios sitios, y comes en las mesas centrales compartidas donde se mezclan turistas y locales. Hay de todo: marisco fresco a la parrilla, steaks de carne ibérica, sushi de calidad, tacos mexicanos, hamburguesas gourmet, comida vegana, pasteles artesanales, vinos portugueses por copa, cervezas artesanales, y más. El concepto funciona así: recorres los puestos, eliges lo que quieres, pides en cada stand (te dan un número), buscas mesa en la zona central (hay cientos), y te llaman cuando esté listo. Precios: 10-20€ por plato según qué pidas. Recomendados: Alexandre Silva (chef con estrella Michelin, platos 12-18€, cocina portuguesa moderna), Henrique Sá Pessoa (otra estrella Michelin, mariscos increíbles), Sea Me (mariscos frescos), Miguel Castro e Silva (carnes a la parrilla). Después de cenar, Cais do Sodré (el barrio justo afuera del mercado) es LA zona de fiesta de Lisboa. La Calle Rosa (Pink Street, pintada de rosa fosforito) está llena de bares, música en vivo, y gente en la calle con cervezas hasta las 3am. Si quieres seguir la noche, tienes cincuenta bares en doscientos metros —rock, jazz, electrónica, reggae, todo tiene su espacio aquí.',
    tip: '🍽️ Time Out Market: 12:00-00:00 todos los días (domingos hasta 18:00). Se llena brutalmente 20:00-22:00 (llega 19:30 o prepárate para esperar mesa 15-20 min). Mejor momento: 17:00-19:00 o después de las 22:00. POST-CENA: "Pensão Amor" (bar en antiguo burdel convertido, decoración loca con objetos eróticos antiguos, ambiente único, 5-8€ copas), "Musicbox" (discoteca techno/electrónica, entrada 5-10€), o simplemente Pink Street con cerveza comprada en minimercado (1€ vs 4€ en bares). La zona es segura de noche —llena de gente, bien iluminada, y la policía patrulla regularmente.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    coordinates: { lat: 38.7069, lng: -9.1467 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7069,-9.1467'
  },

  // DÍA 3 - SINTRA COMPLETO
  {
    time: '08:30 - Día 3',
    title: 'Tren a Sintra — Viaje al cuento de hadas',
    description: 'Día 3 es tu excursión a Sintra —el pueblo de palacios de colores escondido en las montañas a cuarenta minutos de Lisboa que parece sacado de un cuento de hadas. Sal TEMPRANO. Esto es crítico y no es una exageración. Coge el tren desde la Estación Rossio (centro de Lisboa, fácil de llegar en metro línea verde) hacia Sintra —salen cada veinte minutos desde las 6:30 de la mañana. Compra billete ida y vuelta (4.60€) en las máquinas automáticas de la estación (aceptan tarjeta y efectivo). El viaje dura cuarenta minutos atravesando suburbios lisboetas, campos verdes, y finalmente montañas cubiertas de bosque hasta llegar al pueblo de Sintra, que aparece como una visión entre la neblina. Cuando bajes del tren, NO camines al centro todavía —ese es el error que cometen todos y que te hará perder tiempo. Ve DIRECTO a los autobuses que están junto a la estación: el 434 (circular que va a Palacio Pena + Castelo dos Mouros, 7.60€ día completo hop-on hop-off) o el 435 (va a Quinta da Regaleira, 5€). Cómpralos en el kiosco junto a la estación antes de que se forme cola. La clave de Sintra es simple: llega temprano (antes de las 9:00) y usa los buses —las colas después de las 11:00 son demenciales (una o dos horas para entrar a los palacios, literalmente). Sintra es una fantasía completa —neblina frecuente en las montañas que añade misterio, palacios de colores imposibles que parecen de Disney, jardines laberínticos con túneles secretos, bosques encantados con árboles exóticos traídos de todo el mundo, y una atmósfera que Lord Byron describió como "el paraíso en la tierra". Vas a sentir que entraste a un cuento de hadas, y no es una metáfora —es exactamente así.',
    tip: '🚂 TREN: Estación Rossio (Lisboa) → Sintra. Frecuencia: cada 20 minutos desde 6:30. Precio: 2.30€ ida, 4.60€ ida/vuelta (compra ida/vuelta, más barato). Duración: 40 minutos. Último tren de vuelta: 23:00 aproximadamente. BUSES Sintra: 434 (Pena+Mouros) = 7.60€ día completo, 435 (Regaleira) = 5€. CRÍTICO: Sal de Lisboa antes de las 8:30 para llegar a Sintra antes de las 9:30. Después de las 10:00 = caos absoluto con grupos de cruceros y tours organizados. Compra las entradas a los palacios online la noche anterior —ahorras una o dos horas de cola en cada uno.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800',
    coordinates: { lat: 38.7986, lng: -9.3881 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7986,-9.3881'
  },
  {
    time: '09:30',
    title: 'Palacio da Pena — La fantasía de colores que define Sintra',
    description: 'Súbete al bus 434 y en quince minutos llegas a la entrada del Palacio da Pena —el palacio más icónico y fotogénico de Portugal, y posiblemente uno de los más coloridos del mundo. Es una explosión de colores imposible que parece diseñada por un niño con una caja de lápices: muros amarillos brillantes, torres rojas como sangre, cúpulas azules como el cielo, detalles verdes esmeralda, y todo mezclando estilos arquitectónicos como si fuera un collage —neorománico, neogótico, neo-manuelino, neo-islámico, neo-renacentista— como si un arquitecto hubiera dicho "quiero un poco de todo". Fue el palacio de verano de la familia real portuguesa en el siglo XIX, construido por el rey consorte Fernando II (que era alemán y claramente había visto muchos castillos bávaros) sobre las ruinas de un monasterio del siglo XV. Hay DOS entradas: solo jardines (10€) o palacio completo con jardines (20€). PAGA LOS 20€ sin dudar —el interior es una cápsula del tiempo que vale cada euro: habitaciones reales conservadas exactamente como en 1910 cuando la monarquía cayó y la familia huyó, decoración victoriana exuberante con muebles originales, techos pintados con frescos, y balcones con vistas 360° sobre las montañas, el pueblo de Sintra abajo, y el Atlántico brillando a lo lejos en días claros. Los jardines son 200 hectáreas de bosque encantado con lagos artificiales, grutas escondidas, senderos que se pierden entre árboles exóticos traídos de todo el mundo, y miradores secretos desde donde ves el palacio emergiendo entre las nubes. Dedícale mínimo dos horas —es enorme, y cada rincón tiene algo que descubrir.',
    tip: '🎫 Entrada PALACIO + JARDINES: 20€ (esencial, no te conformes con solo jardines). Solo jardines: 10€ (NO lo hagas, te pierdes lo mejor que es el interior del palacio). Compra ONLINE con antelación —evitas cola de una hora o más en verano. HORARIO: 9:30-18:30 (verano), 10:00-17:00 (invierno). Último acceso una hora antes del cierre. Lleva agua y snacks —la cafetería es cara y las opciones limitadas. Calzado cómodo —hay mucho que caminar, tanto en el palacio como en los jardines. El bus 434 te deja en la entrada baja —desde ahí son 15 minutos caminando cuesta arriba hasta el palacio (gratis) o puedes pagar 3€ por un bus shuttle que te sube. Si tienes piernas, camina —el bosque es precioso.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
    coordinates: { lat: 38.7877, lng: -9.3906 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7877,-9.3906'
  },
  {
    time: '12:30',
    title: 'Quinta da Regaleira — Los jardines iniciáticos más misteriosos de Portugal',
    description: 'Baja en bus al centro de Sintra, cambia al bus 435 o camina quince minutos hasta Quinta da Regaleira —el lugar más misterioso y fascinante de Sintra, y posiblemente de toda Portugal. Este palacio neogótico con jardines laberínticos de cuatro hectáreas fue diseñado a principios del siglo XX por un millonario brasileño llamado António Augusto Carvalho Monteiro que estaba obsesionado con alquimia, templarios, masonería, y simbolismo esotérico. El palacio en sí es bonito pero lo BRUTAL son los jardines —un laberinto de significados ocultos donde cada elemento tiene un propósito simbólico. Lo más famoso es el POZO INICIÁTICO —una estructura circular que parece una torre invertida, con una escalera de caracol que baja 27 metros bajo tierra a través de 9 niveles (simbolizando los 9 círculos del infierno de Dante o los 9 niveles de iniciación masónica, según cómo lo interpretes). Bajas en espiral por escaleras de piedra húmeda, llegas al fondo donde hay una rosa de los vientos tallada en el suelo, y sales por túneles secretos que te llevan a cascadas escondidas, grutas, y finalmente emerges en otra parte del jardín. Los jardines son una locura completa: grutas artificiales con estalactitas, torres escondidas entre los árboles, lagos con patos y cisnes, capillas secretas con símbolos masónicos, túneles que conectan todo formando una red subterránea, y simbología esotérica por todas partes —cruces templarias, pentagramas, símbolos alquímicos. Es como un parque de aventuras para adultos diseñado por un genio loco. Lleva linterna en el móvil —algunos túneles están completamente oscuros y necesitas luz para no tropezar. Date tiempo para explorar —hay rincones escondidos que la mayoría de visitantes se pierden.',
    tip: '🎫 Entrada: 12€ adultos, 6€ niños (3-17 años), menores 3 años gratis. HORARIO: 9:30-19:00 (verano), 9:30-18:00 (invierno). Compra online recomendada (verano = colas largas de 30-60 min). Tiempo visita: 1.5-2 horas mínimo si quieres verlo todo sin prisa. IMPERDIBLE: Pozo Iniciático (baja los 9 niveles completos, no te lo saltes), túneles secretos (explora todos, algunos llevan a lugares sorprendentes), Gruta do Labirinto, y las torres escondidas. Lleva linterna móvil para los túneles —algunos están muy oscuros. Calzado antideslizante —las escaleras de piedra pueden estar húmedas y resbaladizas. Si llueve, los túneles pueden tener agua —lleva calzado cerrado.',
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
    title: 'Centro de Sintra — Travesseiros y despedida del cuento de hadas',
    description: 'Baja al centro de Sintra para tu última parada del día antes de volver a Lisboa. El pueblo es un laberinto encantador de callecitas medievales empedradas que suben y bajan entre casas de colores pastel, tiendas de souvenirs artesanales vendiendo azulejos pintados a mano, pastelerías con vitrinas llenas de dulces conventuales, y plazas pequeñas con fuentes y bancos donde descansar. Lo imperdible aquí, sin duda, es probar las TRAVESSEIROS en la pastelería Piriquita (fundada en 1862, Rua das Padarias 1, la original). Son hojaldres rellenos de crema de almendras que solo se hacen en Sintra —textura crujiente por fuera con capas finísimas de masa, relleno dulce cremoso de almendras por dentro que se derrite en la boca, y espolvoreados con azúcar glas. Son la especialidad local y son ridículamente buenos. Pide dos (1.50€ cada uno) y un café para acompañar. Hay dos locales de Piriquita: el I (el original, más pequeño, en Rua das Padarias) y el II (más grande, mejor para sentarse si quieres tomarte tu tiempo). Después pasea por la Praça da República (plaza principal con fuentes, bancos, y el Palacio Nacional de Sintra —ese edificio blanco con dos chimeneas cónicas gigantes que parecen sombreros de bruja), recorre tiendas vendiendo azulejos pintados a mano con motivos de Sintra, quesos artesanales, vinos del Douro, y artesanías portuguesas. Sobre las 18:00-18:30 regresa caminando a la estación (10 minutos desde el centro) y toma el tren de vuelta a Lisboa. Vas a llegar agotado físicamente pero con la cabeza llena de imágenes de cuento de hadas que no olvidarás —palacios de colores, jardines laberínticos, murallas en las nubes, y la sensación de haber visitado un lugar que parece no pertenecer a este mundo.',
    tip: '🥐 Travesseiros Piriquita: 1.50€/unidad (imperdibles, solo se hacen aquí). Piriquita I (original, Rua Padarias 1, más auténtico) vs Piriquita II (más grande, mejor para sentarse si estás cansado). TAMBIÉN PRUEBA: Queijadas de Sintra (tartaletas de queso dulce, 1.20€ cada una, también especialidad local). Centro Sintra: GRATIS pasear, no hay entrada a nada. Tiendas cierran 19:00-19:30. Regreso Lisboa: Tren hasta 23:00 aproximadamente (cada 20-30 minutos). Cena en Lisboa —llegas alrededor de las 19:30 con tiempo para cenar tranquilo. Si quieres cenar en Sintra antes de volver, hay buenos restaurantes en el centro pero son más caros que en Lisboa.',
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
    title: 'Alfama - El barrio más auténtico',
    description: 'Tu primera semana en Lisboa empieza por todo lo alto: Alfama. Sal temprano para evitar las hordas turísticas. Alfama es el barrio que sobrevivió al terremoto de 1755 - calles medievales retorcidas, escaleras empinadas entre casas de azulejos desgastados, ropa tendida cruzando balcones, y abuelas barriendo las puertas como llevan haciendo 60 años. Piérdete durante 1 hora subiendo calles aleatorias. Cada esquina es una postal. Empieza en la Catedral Sé y simplemente sube. Verás ropa tendida entre balcones, oirás fado saliendo de alguna ventana abierta, y te cruzarás con abuelas comprando en tiendecitas que llevan abiertas desde antes de la dictadura. No luches contra las cuestas - son parte de la experiencia.',
    tip: '🚶 GRATIS: Todo Alfama. RUTA: Catedral Sé → calles aleatorias hacia arriba → Mirador Santa Luzia. Distancia: 1.5 km (pero con escaleras se siente como 3). Lleva agua, las subidas cansan. Mejor calzado: zapatillas con buen agarre. Hora pico turistas: 11:00-16:00, antes de las 10:00 es mágico y vacío.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7109, lng: -9.1333 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7109,-9.1333'
  },
  {
    time: '10:30',
    title: 'Mirador de Santa Luzia — La postal que todo el mundo reconoce',
    description: 'Después de perderte por las callejuelas de Alfama, subes una última cuesta y llegas a este mirador. Es el momento en que entiendes por qué llaman a Lisboa "la ciudad de las siete colinas" — porque desde aquí ves cómo los tejados naranjas descienden en cascada hacia el Tajo, cómo las calles serpentean entre las casas, y cómo la geografía de la ciudad cobra sentido. Las vistas son exactamente la postal que has visto en Instagram mil veces, pero verla en persona es diferente: el panteón nacional blanco brillando al fondo, el río azul profundo, y si tienes suerte, algún barco de crucero pasando lentamente que añade movimiento al cuadro perfecto. Los paneles de azulejos del siglo XVIII que flanquean la terraza cuentan la historia de Lisboa antes del terremoto de 1755 — tómate cinco minutos para observarlos de cerca. Al lado hay un kiosco donde los vecinos del barrio toman café a cualquier hora — únete a ellos.',
    tip: '📸 Mejor hora para fotos: 10:00-11:00 (luz dorada horizontal, menos sombras duras). El mirador se llena después de las 11:00 con grupos organizados. Hay otro mirador justo al lado (Portas do Sol) con menos gente y vistas complementarias — visítalos ambos, están a 30 segundos caminando. El kiosco abre desde temprano y sirve café, zumos naturales, y pasteles de nata.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1588642411190-3e72e93b1497?w=800',
    coordinates: { lat: 38.7115, lng: -9.1294 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7115,-9.1294'
  },
  {
    time: '11:30',
    title: 'Castillo de San Jorge — Donde nació Lisboa',
    description: 'Después del mirador, sube al Castillo de San Jorge - fortaleza mora del siglo XI con las mejores vistas de Lisboa. La entrada son 15€ pero vale cada céntimo: murallas medievales que puedes recorrer por dentro, torres con vistas 360° sobre Lisboa (ves el puente 25 de Abril, el Tajo, Alfama completa, los barrios modernos al norte), jardines con pavos reales paseando libremente, y ruinas arqueológicas donde ves capas de civilizaciones - fenicios, romanos, moros, portugueses. Lo mejor es caminar por las murallas: pasas por torres de vigilancia, atraviesas pasadizos de piedra, y en cada esquina descubres una vista nueva. Dedícale mínimo 1.5 horas - no es solo un castillo, es un parque arqueológico enorme con historia en cada rincón.',
    tip: '🎫 Castillo: 15€ adultos, 7.50€ estudiantes/seniors, menores 10 años gratis. TRUCO: Ve después de las 15:00 cuando ya se fue medio mundo, o compra online para evitar cola (en verano puede ser de 1 hora). Domingos hasta las 14:00 entrada gratis (llega temprano, se llena). Lleva agua, gorra, y calzado cómodo — hace calor aquí arriba y hay mucho que caminar. El castillo abre a las 9:00 — si llegas a esa hora lo tienes prácticamente vacío.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.7139, lng: -9.1334 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7139,-9.1334'
  },
  {
    time: '13:30',
    title: 'Almuerzo en Baixa — Comida local auténtica',
    description: 'Después del castillo, baja hacia Baixa para comer. El centro neurálgico de Lisboa reconstruido después del terremoto de 1755 es ordenado, geométrico, iluminista —calles en cuadrícula perfecta, plazas simétricas, edificios pombalinos de 4 pisos pintados en colores pastel. Para comer, evita los restaurantes turísticos de Rua Augusta (caros y mediocres). Mejor opciones: "Taberna da Rua das Flores" (cocina portuguesa moderna, 15-20€, reserva recomendada), "Cervejaria Trindade" (mariscos en edificio histórico con azulejos del siglo XVIII, 20-35€), o simplemente cafés históricos en Rossio donde puedes tomar café + pastel de nata (2.50€) y seguir explorando.',
    tip: '🍽️ Evita restaurantes de Rua Augusta (trampas turísticas). Mejor: calles laterales o cafés históricos. Precio medio: 15-25€/persona en restaurantes decentes. Cafés históricos: café + pastel = 2.50€. Tiempo: 1-1.5h para comer tranquilo.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: '14:00',
    title: 'Baixa - Centro neurálgico',
    description: 'Después de comer, explora Baixa caminando. Empieza en la Praça do Comércio (plaza gigante amarilla abierta al Tajo con arcadas impresionantes), sube al Arco da Rua Augusta (3€, mirador 360° con vistas brutales), camina por Rua Augusta (calle peatonal principal llena de tiendas, artistas callejeros, turistas, vendedores de castañas asadas), y termina en Rossio - la plaza donde solían quemar herejes en la Inquisición y hoy hay palomas, turistas, y portugueses tomando café en terrazas centenarias. Todo aquí es ordenado, geométrico, iluminista - calles en cuadrícula perfecta, plazas simétricas, edificios pombalinos de 4 pisos pintados en colores pastel.',
    tip: '💰 Arco da Rua Augusta: 3€ (vistas brutales, 5 min arriba). GRATIS: Pasear Baixa, Praça Comércio, Rossio. Tiempo: 1-1.5h caminando tranquilo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: '15:30',
    title: 'Elevador de Santa Justa — El ascensor neogótico',
    description: 'El Elevador de Santa Justa es uno de los íconos arquitectónicos de Lisboa —un ascensor vertical de hierro neogótico de 45 metros de altura diseñado en 1902 por Raoul Mesnier du Ponsard, discípulo de Gustave Eiffel. La estructura parece sacada de una novela de Julio Verne: hierro forjado con decoraciones góticas, torres gemelas, y un puente superior que conecta con el barrio de Chiado. Actualmente está cerrado (2026) por mantenimiento, pero sigue siendo impresionante verlo desde abajo —la perspectiva desde la calle te permite apreciar toda la elegancia del diseño arquitectónico. Si quieres las vistas desde arriba, puedes subir gratis por las Escadas do Carmo (escaleras al lado que suben por las ruinas del convento) y entrar al mirador por arriba pagando solo 1.50€ —las vistas son exactamente las mismas: Baixa desplegada, el Castillo, y el Tajo brillando al fondo.',
    tip: '⚠️ Elevador: CERRADO (2026) por mantenimiento. GRATIS: Ver la estructura desde abajo —es igual de impresionante. ALTERNATIVA: Sube gratis por Escadas do Carmo (escaleras al lado) y entra al mirador por arriba pagando solo 1.50€ —vistas idénticas. Mejor hora: 9:00-10:00 o 17:00-18:00 para evitar aglomeraciones. La estructura desde abajo es gratis y vale cada segundo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7124, lng: -9.1396 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7124,-9.1396'
  },
  {
    time: '16:30',
    title: 'Chiado y A Brasileira — El café de Pessoa',
    description: 'Desde el elevador, sube al Chiado —el barrio intelectual de Lisboa donde Fernando Pessoa tomaba café cada mañana y escribía poesía en las mesas de los cafés. El Chiado es más elegante que la Baixa, más cultural, más local —aquí están las librerías centenarias (Livraria Bertrand, desde 1732, la más antigua del mundo), los teatros, las galerías de arte, y el Lisboa que se piensa a sí mismo. Entra a "A Brasileira" (Rua Garrett 120, abierto desde 1905) —el café más famoso de Lisboa. En la terraza verás la estatua de bronce de Pessoa sentado en una mesa como si todavía estuviera esperando a alguien. El interior conserva la decoración art déco original: espejos, azulejos, mesas de mármol, y un ambiente que parece congelado en el tiempo. Pide un café (2-4€, es turístico pero vale la experiencia) y siéntate donde Pessoa se sentaba. El Chiado es perfecto para pasear sin rumbo —descubrir tiendas de diseño portugués, librerías independientes, y cafés escondidos en calles laterales.',
    tip: '☕ A Brasileira: café 2-4€ (turístico pero icónico, foto obligatoria con estatua de Pessoa). Librerías: Bertrand (desde 1732, la más antigua del mundo), Ler Devagar (diseño espectacular). GRATIS: Pasear Chiado, ver tiendas, arquitectura. Tiempo: 1h paseando tranquilo.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    coordinates: { lat: 38.7108, lng: -9.1408 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7108,-9.1408'
  },
  {
    time: '18:00',
    title: 'Mirador da Graça — El mejor atardecer de Lisboa',
    description: 'Para el mejor atardecer de Lisboa, uber hasta el Mirador da Graça (10 min desde Chiado). Este mirador tiene todo: vistas de 270° sobre la ciudad (ves Alfama, el Castillo, el Tajo, el puente, los barrios del oeste hasta Belém), terrazas con mesitas blancas bajo pinos centenarios, un quiosco sirviendo vinos portugueses bien fríos y cerveza Super Bock, y vibra 100% local. Llega mínimo 45 minutos antes del sunset (consulta hora exacta en Google). Pide vino blanco Vinho Verde (4€) o cerveza (3€), consigue mesita en primera fila mirando al oeste, y espera el show. Cuando el sol empieza a bajar, toda Lisboa se ilumina en dorado - los tejados naranjas brillan como fuego, las sombras se alargan dramáticamente, el Tajo refleja el cielo en tonos rosa/naranja/morado. Después del sunset quédate para blue hour: la ciudad iluminada con el cielo azul profundo es pura magia.',
    tip: '🌅 TIMING CRÍTICO: Llega 45-60 min ANTES del sunset (consulta hora). Mesitas primera fila se llenan RÁPIDO. Fin de semana = llega 1 hora antes. Vino: 4-6€, cerveza: 3€, petiscos: 5-8€. Quiosco horario: hasta 22:00. Si está repleto: Mirador Santa Luzia (igual de bonito, 10 min caminando). Lleva chaqueta - refresca después del sol.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
    coordinates: { lat: 38.7169, lng: -9.1329 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7169,-9.1329'
  },
  {
    time: '19:00',
    title: 'Cena en Bairro Alto — El barrio que nunca duerme',
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
    title: 'Torre de Belém — El ícono de Lisboa',
    description: 'Día 2 dedicado a Belém, el barrio de los descubrimientos. Tranvía 15 desde Praça da Figueira (15 min). Empieza por la Torre de Belém (10:00 cuando abre - crítico para evitar colas). Esta fortaleza del siglo XVI en el Tajo parece un castillo de cuento: estilo manuelino blanco, torres, baluartes, terrazas sobre el río, y un rinoceronte tallado en piedra (el primer rinoceronte que llegó a Europa). La visita dura 30-45 min: subes por escaleras de caracol estrechas, pasas por las mazmorras donde encerraban prisioneros, sales a terrazas con vistas al Tajo y al puente 25 de Abril, y caminas por los baluartes defensivos imaginando cómo defendían Lisboa de invasores. Las vistas desde arriba son brutales - el río, los barcos pasando, Belém extendiéndose hacia el este.',
    tip: '🎫 Entrada: 8€ individual, 14€ combo Torre + Monasterio Jerónimos (compra combo, ahorras 4€). HORARIO: 10:00-17:30 (oct-abr), 10:00-18:30 (may-sep). Lunes CERRADO. Compra online para saltarte cola. Escaleras MUY estrechas - no apto para claustrofobia o movilidad reducida. Julio-agosto = llega 9:45 para ser de los primeros.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.6916, lng: -9.2158 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6916,-9.2158'
  },
  {
    time: '10:30',
    title: 'Padrão dos Descobrimentos — Monumento a los Descubrimientos',
    description: 'Justo al lado de la Torre de Belém, camina 2 minutos hasta el Padrão dos Descobrimentos (Monumento a los Descubrimientos) —un monumento gigante de 52 metros de altura con forma de carabela que celebra la era dorada de los descubrimientos portugueses. Fue construido en 1960 para conmemorar el 500 aniversario de la muerte de Enrique el Navegante. El monumento tiene 33 estatuas de los grandes exploradores y figuras históricas portuguesas: Vasco da Gama, Pedro Álvares Cabral (descubridor de Brasil), Magallanes, y el propio Enrique el Navegante en la proa. Puedes subir arriba (6€) para ver el mosaico del mapamundi en el suelo que muestra todas las rutas de exploración portuguesas —desde Brasil hasta la India, desde África hasta Japón. Las vistas desde arriba son espectaculares: el Tajo, la Torre de Belém, y el Monasterio de los Jerónimos. El monumento está perfectamente alineado con el viento y el río, creando una composición fotográfica perfecta.',
    tip: '🎫 Entrada: 6€ adultos, 3€ estudiantes/seniors. Subir arriba: vistas al mosaico del mapamundi + panorámica del Tajo. HORARIO: 10:00-19:00 (verano), 10:00-18:00 (invierno). Lunes cerrado. Tiempo visita: 20-30 min. Combo Torre+Padrão: 12€ (ahorro 2€). Mejor hora: 10:00-11:00 (menos gente).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
    coordinates: { lat: 38.6936, lng: -9.2058 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6936,-9.2058'
  },
  {
    time: '11:00',
    title: 'Monasterio dos Jerónimos — La obra maestra del oro portugués',
    description: 'Desde el Padrão, camina 10 minutos (o tranvía 15 una parada) hasta el Monasterio dos Jerónimos - la obra maestra absoluta del gótico manuelino portugués y Patrimonio de la Humanidad UNESCO. Este monstruo de piedra calcárea blanca fue construido con el oro de las especias que Vasco da Gama trajo de la India. Hay DOS partes: la IGLESIA (entrada GRATIS) y el CLAUSTRO (10€). Empieza por la iglesia - es donde está lo más espectacular: techos abovedados de 25 metros que parecen palmeras de piedra con decoraciones de cuerdas, anclas, y esfera armilar, la tumba de Vasco da Gama (el tipo que descubrió la ruta a India), la tumba del poeta Camões, y columnas octogonales con decoraciones de una delicadeza brutal. La luz natural entra por vitrales creando rayos de dios. El claustro (10€ extra) es hermoso pero opcional - dos pisos de arcadas talladas rodeando un jardín, perfecto para fotos de arcos infinitos.',
    tip: '💰 IGLESIA: GRATIS (imperdible). CLAUSTRO: 10€ (bonito pero opcional). Combo Torre+Claustro: 14€. LUNES: Todo cerrado. Cola iglesia: 20-40 min (verano). Mejor hora: 9:00-10:30 cuando abre. Audio-guía: 3€ (recomendada, explica decoraciones manuelinas). Tiempo visita: iglesia 30 min, claustro 20-30 min.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1580712771134-b48cf4863fe2?w=800',
    coordinates: { lat: 38.6979, lng: -9.2061 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6979,-9.2061'
  },
  {
    time: '12:30',
    title: 'Pastéis de Belém — Los ORIGINALES',
    description: 'Hora del momento más dulce del viaje: pasteles de nata ORIGINALES en Pastéis de Belém (5 min andando desde Jerónimos). Evita la cola de la tienda - entra DIRECTO a los "Salões" (salones del fondo señalizados). Son salas enormes con azulejos antiguos, meseros con pajarita, y CERO espera. Siéntate, pide 3 pasteles por persona (1.30€ cada uno), café (1€), espolvorea canela y azúcar glas (en las mesas), y alucina con el hojaldre crujiente + crema quemada. Receta secreta 200 años. Después camina 10 min por el paseo marítimo hasta el MAAT - museo de arte/arquitectura/tecnología en edificio ondulante blanco como una ola. SUBE AL TECHO GRATIS (rampa pública con vistas al Tajo y puente 25 de Abril). Las exposiciones de dentro (11€) son arte contemporáneo - solo entra si te va el rollo, si no, el techo gratis es suficiente.',
    tip: '🥐 Pasteles: 1.30€/unidad, café 1€. TRUCO: Entra directo a "Salão" (evitas 30+ min de cola). HORARIO: 8:00-23:00 diario. MAAT TECHO: GRATIS. Museo: 11€ (solo si te gusta arte contemporáneo). Horario museo: 11:00-19:00, martes cerrado. Primer domingo mes gratis. Cafetería terraza al río.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800',
    coordinates: { lat: 38.6975, lng: -9.2032 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6975,-9.2032'
  },

  // DÍA 3 - SINTRA COMPLETO
  {
    time: '08:30 - Día 3',
    title: 'Tren a Sintra — Viaje al cuento de hadas',
    description: 'Día 3 es tu excursión a Sintra —el pueblo de palacios de colores escondido en las montañas a cuarenta minutos de Lisboa que parece sacado de un cuento de hadas. Sal TEMPRANO. Esto es crítico y no es una exageración. Coge el tren desde la Estación Rossio (centro de Lisboa, fácil de llegar en metro línea verde) hacia Sintra —salen cada veinte minutos desde las 6:30 de la mañana. Compra billete ida y vuelta (4.60€) en las máquinas automáticas de la estación (aceptan tarjeta y efectivo). El viaje dura cuarenta minutos atravesando suburbios lisboetas, campos verdes, y finalmente montañas cubiertas de bosque hasta llegar al pueblo de Sintra, que aparece como una visión entre la neblina. Cuando bajes del tren, NO camines al centro todavía —ese es el error que cometen todos y que te hará perder tiempo. Ve DIRECTO a los autobuses que están junto a la estación: el 434 (circular que va a Palacio Pena + Castelo dos Mouros, 7.60€ día completo hop-on hop-off) o el 435 (va a Quinta da Regaleira, 5€). Cómpralos en el kiosco junto a la estación antes de que se forme cola. La clave de Sintra es simple: llega temprano (antes de las 9:00) y usa los buses —las colas después de las 11:00 son demenciales (una o dos horas para entrar a los palacios, literalmente). Sintra es una fantasía completa —neblina frecuente en las montañas que añade misterio, palacios de colores imposibles que parecen de Disney, jardines laberínticos con túneles secretos, bosques encantados con árboles exóticos traídos de todo el mundo, y una atmósfera que Lord Byron describió como "el paraíso en la tierra". Vas a sentir que entraste a un cuento de hadas, y no es una metáfora —es exactamente así.',
    tip: '🚂 TREN: Estación Rossio (Lisboa) → Sintra. Frecuencia: cada 20 minutos desde 6:30. Precio: 2.30€ ida, 4.60€ ida/vuelta (compra ida/vuelta, más barato). Duración: 40 minutos. Último tren de vuelta: 23:00 aproximadamente. BUSES Sintra: 434 (Pena+Mouros) = 7.60€ día completo, 435 (Regaleira) = 5€. CRÍTICO: Sal de Lisboa antes de las 8:30 para llegar a Sintra antes de las 9:30. Después de las 10:00 = caos absoluto con grupos de cruceros y tours organizados. Compra las entradas a los palacios online la noche anterior —ahorras una o dos horas de cola en cada uno.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800',
    coordinates: { lat: 38.7986, lng: -9.3881 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7986,-9.3881'
  },
  {
    time: '09:30',
    title: 'Palacio da Pena — La fantasía de colores que define Sintra',
    description: 'Súbete al bus 434 y en quince minutos llegas a la entrada del Palacio da Pena —el palacio más icónico y fotogénico de Portugal, y posiblemente uno de los más coloridos del mundo. Es una explosión de colores imposible que parece diseñada por un niño con una caja de lápices: muros amarillos brillantes, torres rojas como sangre, cúpulas azules como el cielo, detalles verdes esmeralda, y todo mezclando estilos arquitectónicos como si fuera un collage —neorománico, neogótico, neo-manuelino, neo-islámico, neo-renacentista— como si un arquitecto hubiera dicho "quiero un poco de todo". Fue el palacio de verano de la familia real portuguesa en el siglo XIX, construido por el rey consorte Fernando II (que era alemán y claramente había visto muchos castillos bávaros) sobre las ruinas de un monasterio del siglo XV. Hay DOS entradas: solo jardines (10€) o palacio completo con jardines (20€). PAGA LOS 20€ sin dudar —el interior es una cápsula del tiempo que vale cada euro: habitaciones reales conservadas exactamente como en 1910 cuando la monarquía cayó y la familia huyó, decoración victoriana exuberante con muebles originales, techos pintados con frescos, y balcones con vistas 360° sobre las montañas, el pueblo de Sintra abajo, y el Atlántico brillando a lo lejos en días claros. Los jardines son 200 hectáreas de bosque encantado con lagos artificiales, grutas escondidas, senderos que se pierden entre árboles exóticos traídos de todo el mundo, y miradores secretos desde donde ves el palacio emergiendo entre las nubes. Dedícale mínimo dos horas —es enorme, y cada rincón tiene algo que descubrir.',
    tip: '🎫 Entrada PALACIO + JARDINES: 20€ (esencial, no te conformes con solo jardines). Solo jardines: 10€ (NO lo hagas, te pierdes lo mejor que es el interior del palacio). Compra ONLINE con antelación —evitas cola de una hora o más en verano. HORARIO: 9:30-18:30 (verano), 10:00-17:00 (invierno). Último acceso una hora antes del cierre. Lleva agua y snacks —la cafetería es cara y las opciones limitadas. Calzado cómodo —hay mucho que caminar, tanto en el palacio como en los jardines. El bus 434 te deja en la entrada baja —desde ahí son 15 minutos caminando cuesta arriba hasta el palacio (gratis) o puedes pagar 3€ por un bus shuttle que te sube. Si tienes piernas, camina —el bosque es precioso.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
    coordinates: { lat: 38.7877, lng: -9.3906 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7877,-9.3906'
  },
  {
    time: '12:30',
    title: 'Quinta da Regaleira — Los jardines iniciáticos más misteriosos',
    description: 'Baja en bus al centro de Sintra, cambia al bus 435 o camina quince minutos hasta Quinta da Regaleira —el lugar más misterioso y fascinante de Sintra, y posiblemente de toda Portugal. Este palacio neogótico con jardines laberínticos de cuatro hectáreas fue diseñado a principios del siglo XX por un millonario brasileño llamado António Augusto Carvalho Monteiro que estaba obsesionado con alquimia, templarios, masonería, y simbolismo esotérico. El palacio en sí es bonito pero lo BRUTAL son los jardines —un laberinto de significados ocultos donde cada elemento tiene un propósito simbólico. Lo más famoso es el POZO INICIÁTICO —una estructura circular que parece una torre invertida, con una escalera de caracol que baja 27 metros bajo tierra a través de 9 niveles (simbolizando los 9 círculos del infierno de Dante o los 9 niveles de iniciación masónica, según cómo lo interpretes). Bajas en espiral por escaleras de piedra húmeda, llegas al fondo donde hay una rosa de los vientos tallada en el suelo, y sales por túneles secretos que te llevan a cascadas escondidas, grutas, y finalmente emerges en otra parte del jardín. Los jardines son una locura completa: grutas artificiales con estalactitas, torres escondidas entre los árboles, lagos con patos y cisnes, capillas secretas con símbolos masónicos, túneles que conectan todo formando una red subterránea, y simbología esotérica por todas partes —cruces templarias, pentagramas, símbolos alquímicos. Es como un parque de aventuras para adultos diseñado por un genio loco. Lleva linterna en el móvil —algunos túneles están completamente oscuros y necesitas luz para no tropezar. Date tiempo para explorar —hay rincones escondidos que la mayoría de visitantes se pierden.',
    tip: '🎫 Entrada: 12€ adultos, 6€ niños (3-17 años), menores 3 años gratis. HORARIO: 9:30-19:00 (verano), 9:30-18:00 (invierno). Compra online recomendada (verano = colas largas de 30-60 min). Tiempo visita: 1.5-2 horas mínimo si quieres verlo todo sin prisa. IMPERDIBLE: Pozo Iniciático (baja los 9 niveles completos, no te lo saltes), túneles secretos (explora todos, algunos llevan a lugares sorprendentes), Gruta do Labirinto, y las torres escondidas. Lleva linterna móvil para los túneles —algunos están muy oscuros. Calzado antideslizante —las escaleras de piedra pueden estar húmedas y resbaladizas. Si llueve, los túneles pueden tener agua —lleva calzado cerrado.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800',
    coordinates: { lat: 38.7963, lng: -9.3962 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7963,-9.3962'
  },
  {
    time: '14:30',
    title: 'Almuerzo en Sintra — Travesseiros y queijadas',
    description: 'Después de explorar Regaleira, baja al centro de Sintra para comer. El pueblo es un laberinto encantador de callecitas medievales empedradas que suben y bajan entre casas de colores pastel, tiendas de souvenirs artesanales vendiendo azulejos pintados a mano, pastelerías con vitrinas llenas de dulces conventuales, y plazas pequeñas con fuentes y bancos donde descansar. Lo imperdible aquí, sin duda, es probar las TRAVESSEIROS en la pastelería Piriquita (fundada en 1862, Rua das Padarias 1, la original). Son hojaldres rellenos de crema de almendras que solo se hacen en Sintra —textura crujiente por fuera con capas finísimas de masa, relleno dulce cremoso de almendras por dentro que se derrite en la boca, y espolvoreados con azúcar glas. Son la especialidad local y son ridículamente buenos. Pide dos (1.50€ cada uno) y un café para acompañar. También prueba las queijadas (tartaletas de queso dulce, 1.20€ cada una, también especialidad local). Para comida salada, hay buenos restaurantes en el centro pero son más caros que en Lisboa.',
    tip: '🥐 Travesseiros Piriquita: 1.50€/unidad (imperdibles, solo se hacen aquí). Piriquita I (original, Rua Padarias 1, más auténtico) vs Piriquita II (más grande, mejor para sentarse si estás cansado). TAMBIÉN PRUEBA: Queijadas de Sintra (tartaletas de queso dulce, 1.20€ cada una, también especialidad local). Restaurantes: más caros que Lisboa (20-35€/persona). Tiendas cierran 19:00-19:30.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1534850990928-479f9d74342c?w=800',
    coordinates: { lat: 38.7979, lng: -9.3906 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7979,-9.3906'
  },
  {
    time: '15:00',
    title: 'Castelo dos Mouros - Ruinas en las nubes',
    description: 'Desde el centro de Sintra, sube de nuevo en el bus 434 hasta el Castelo dos Mouros - fortaleza musulmana del siglo VIII abandonada en ruinas en la cima de la montaña. Es completamente diferente a los palacios: sin colores, sin decoración, solo murallas de piedra gris serpenteando por las rocas entre bosque y neblina. Parece salido de Game of Thrones. La visita consiste en caminar por las murallas - subes y bajas escaleras de piedra antigua, pasas por torres semidestruidas, y en cada tramo tienes vistas brutales: el Palacio da Pena colorido emergiendo de los árboles, el pueblo de Sintra abajo en el valle, el Atlántico brillando a lo lejos en días claros. Cuando hay neblina (frecuente) es mágico - las murallas desaparecen entre nubes, los árboles parecen fantasmas, y te sientes en otra dimensión. Ojo: hay muchas escaleras irregulares y zonas sin barandilla - no apto para vértigo severo.',
    tip: '🎫 Entrada: 10€. Combo Pena + Mouros: 26€ (ahorro 4€). HORARIO: 9:30-18:30 (verano), 10:00-17:00 (invierno). Tiempo visita: 1h. FÍSICO: Muchas escaleras, subidas empinadas, zonas sin barandilla. Lleva agua. Mejor CON neblina (ambiente épico) o día claro (vistas infinitas). Calzado trekking recomendado - piedras resbaladizas.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1552832230-0ab456afa00c?w=800',
    coordinates: { lat: 38.7924, lng: -9.3896 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7924,-9.3896'
  },
  {
    time: '17:00',
    title: 'Centro de Sintra — Despedida del cuento de hadas',
    description: 'Baja al centro de Sintra para tu última parada del día antes de volver a Lisboa. Pasea por la Praça da República (plaza principal con fuentes, bancos, y el Palacio Nacional de Sintra —ese edificio blanco con dos chimeneas cónicas gigantes que parecen sombreros de bruja), recorre tiendas vendiendo azulejos pintados a mano con motivos de Sintra, quesos artesanales, vinos del Douro, y artesanías portuguesas. Sobre las 18:00-18:30 regresa caminando a la estación (10 minutos desde el centro) y toma el tren de vuelta a Lisboa. Vas a llegar agotado físicamente pero con la cabeza llena de imágenes de cuento de hadas que no olvidarás —palacios de colores, jardines laberínticos, murallas en las nubes, y la sensación de haber visitado un lugar que parece no pertenecer a este mundo.',
    tip: '🛍️ Centro Sintra: GRATIS pasear, no hay entrada a nada. Tiendas cierran 19:00-19:30. Regreso Lisboa: Tren hasta 23:00 aproximadamente (cada 20-30 minutos). Cena en Lisboa —llegas alrededor de las 19:30 con tiempo para cenar tranquilo. Si quieres cenar en Sintra antes de volver, hay buenos restaurantes en el centro pero son más caros que en Lisboa.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1534850990928-479f9d74342c?w=800',
    coordinates: { lat: 38.7979, lng: -9.3906 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7979,-9.3906'
  },

  // DÍA 4 - CASCAIS + COSTA ESTORIL
  {
    time: '09:00 - Día 4',
    title: 'Tren a Cascais - Riviera portuguesa',
    description: 'Día 4 dedicado a la costa. Toma el tren desde Estación Cais do Sodré hacia Cascais (40 min, 2.40€, sale cada 20 min). El viaje ya es espectacular - el tren va pegado al Tajo/Atlántico con vistas al agua todo el recorrido. Pasas por Belém, Oeiras, Estoril (donde está el casino que inspiró Casino Royale de James Bond), y llegas a Cascais - pueblo pesquero convertido en resort elegante. Cascais tiene playas urbanas de arena dorada (Praia da Ribeira, Praia da Rainha - pequeñas pero bonitas), un casco antiguo peatonal lleno de tiendas de surf/ropa/artesanías, restaurantes de mariscos con terrazas, y vibra relajada de pueblo costero. Pasea por el puerto viendo barcos de vela, camina por el paseo marítimo, y disfruta el ambiente de pueblo costero elegante.',
    tip: '🚂 TREN: Cais do Sodré → Cascais, 2.40€, 40 min, cada 20 min. Úsalo todo el día (puedes bajar en Estoril, pasear, volver a subir). PLAYAS: GRATIS, llenas en verano. COMIDA: Mariscos 15-30€, hamburguesas 8-12€. Mercado peces fresco en el puerto. Regreso Lisboa: tren hasta 1:30am.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1581972416774-540e51e07e8e?w=800',
    coordinates: { lat: 38.6979, lng: -9.4208 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6979,-9.4208'
  },
  {
    time: '11:00',
    title: 'Boca do Inferno — Acantilados donde el mar ruge',
    description: 'Desde el centro de Cascais, camina 15 minutos por el paseo marítimo hasta Boca do Inferno (Boca del Infierno) —una formación rocosa espectacular donde las olas del Atlántico rompen con fuerza brutal contra los acantilados, creando un sonido que suena como truenos. El nombre viene de la forma de la roca que parece una boca abierta al infierno. Cuando hay marea alta y oleaje fuerte, el espectáculo es épico —olas de varios metros de altura chocan contra las rocas, el agua salpica hasta 20 metros de altura, y el sonido retumba en todo el área. Hay un mirador seguro desde donde puedes ver el espectáculo sin peligro. Es gratis y está abierto 24 horas. Si tienes suerte, verás surfistas aprovechando las olas grandes. El paseo desde Cascais es precioso —sigues el paseo marítimo con vistas al Atlántico, pasas por mansiones del siglo XIX, y llegas a este lugar donde la naturaleza muestra su poder.',
    tip: '🌊 GRATIS: Acceso 24 horas. MEJOR MOMENTO: Marea alta + oleaje fuerte (consulta tablas de mareas). El espectáculo es más épico con mal tiempo. Paseo desde Cascais: 15 min caminando por paseo marítimo. Lleva chaqueta —siempre hace viento aquí. Cuidado con las olas grandes —mantén distancia de los bordes.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800',
    coordinates: { lat: 38.6881, lng: -9.4247 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6881,-9.4247'
  },
  {
    time: '13:00',
    title: 'Almuerzo en Cascais — Mariscos frescos',
    description: 'Vuelve al centro de Cascais para comer. Este pueblo costero tiene excelentes restaurantes de mariscos con terrazas mirando al mar. Recomendados: "Mar do Inferno" (mariscos frescos, 20-35€, reserva recomendada), "Taberna da Praça" (tapas portuguesas, 15-25€), o "Santini" (helados artesanales desde 1949, el mejor de Portugal, 3-5€). El puerto tiene un mercado de pescado fresco donde puedes ver los barcos descargando la pesca del día. Si prefieres algo más casual, hay varios restaurantes con menús del día (12-18€) en las calles laterales del casco antiguo.',
    tip: '🍽️ Mariscos: 20-35€/persona en restaurantes buenos. Menú del día: 12-18€ en calles laterales. Helados Santini: 3-5€ (IMPERDIBLE, el mejor de Portugal). Reserva recomendada en verano (especialmente fin de semana). Tiempo: 1-1.5h para comer tranquilo.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
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
    time: '12:00',
    title: 'Brunch en LX Factory — El mejor brunch de Lisboa',
    description: 'Después de explorar LX Factory, quédate para brunch. Hay varios restaurantes excelentes: "Rio Maravilha" (terraza con vistas al puente 25 de Abril, brunch 15-25€, reserva recomendada), "Cantina LX" (de autor, brunch 12-18€), o simplemente cafés con opciones más ligeras. El ambiente es relajado, joven, y perfecto para pasar la mañana. Si prefieres algo más rápido, Landeau Chocolate tiene brownies increíbles (3.50€) que son el mejor postre de Lisboa. Los domingos el ambiente es especialmente bueno —hay mercado vintage, música en vivo, y todo el complejo está lleno de vida.',
    tip: '🥐 Brunch: 12-25€ según restaurante. Rio Maravilha: terraza con vistas puente, reserva recomendada. Brownie Landeau: 3.50€ (IMPERDIBLE). Tiempo: 1-1.5h para brunch tranquilo. DOMINGO: Ambiente especial con mercado vintage y música.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
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
    time: '16:00',
    title: 'Pink Street — La calle más fotogénica de Lisboa',
    description: 'Después del mercado, explora Pink Street (Rua Nova do Carvalho) —la calle más fotogénica de Lisboa, pintada de rosa fosforito de extremo a extremo. Durante el día es perfecta para fotos —el contraste del rosa vibrante con los edificios históricos alrededor es único. De noche (después de las 23:00) se transforma completamente: se llena de bares de copas, discotecas, música en vivo, y gente en la calle con cervezas. Es LA zona de fiesta de Lisboa. Los bares abren hasta las 3am y hay de todo: rock, jazz, electrónica, reggae. "Pensão Amor" es un bar en un antiguo burdel convertido con decoración loca —objetos eróticos antiguos, ambiente único, copas 5-8€. "Musicbox" es una discoteca techno/electrónica con entrada 5-10€. Si prefieres algo más tranquilo, simplemente compra una cerveza en un minimercado (1€ vs 4€ en bares) y únete a la gente en la calle —es totalmente legal y normal en Lisboa.',
    tip: '📸 FOTO: Mejor de día (luz natural, menos gente). Fiesta: Después 23:00. Bares: "Pensão Amor" (5-8€ copas, ambiente único), "Musicbox" (discoteca, 5-10€ entrada). Cerveza minimercado: 1€ vs 4€ en bares. La zona es segura de noche —llena de gente, bien iluminada, policía patrulla regularmente.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    coordinates: { lat: 38.7069, lng: -9.1467 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7069,-9.1467'
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
    time: '11:30',
    title: 'Teleférico do Parque das Nações — Vistas aéreas del Tajo',
    description: 'El Teleférico del Parque das Nações es una experiencia única —un recorrido de 20 minutos sobre el río Tajo con vistas aéreas espectaculares del barrio más moderno de Lisboa. El teleférico va desde el Pabellón del Conocimiento hasta el Oceanário, pasando sobre el río, jardines, y arquitectura vanguardista. Las vistas desde arriba son perfectas: ves el puente Vasco da Gama (el más largo de Europa, 17 km), el Tajo serpenteando hacia el Atlántico, los rascacielos de cristal, y toda la Expo 98 desplegada como un mapa. Es especialmente bonito al atardecer cuando el sol se pone sobre el río. El teleférico funciona desde 1998 y sigue siendo una de las atracciones más populares del parque. Puedes comprar billete solo ida (6€) o ida y vuelta (9€, más barato). Si solo quieres las vistas, el ida es suficiente —puedes bajar en el Oceanário y seguir explorando desde ahí.',
    tip: '🎫 Teleférico: 6€ ida, 9€ ida/vuelta (recomendado ida/vuelta, más barato). HORARIO: 10:00-20:00 (verano), 10:00-18:00 (invierno). Duración: 20 min recorrido. MEJOR MOMENTO: Atardecer (18:00-20:00 verano) cuando el sol se pone sobre el río. Si hace viento fuerte puede cerrar —verifica antes de ir. Combo Teleférico+Oceanário: 30€ (ahorro 1€).',
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
    time: '09:00 - Día 7',
    title: 'Mercado da Ribeira - Compras gastronómicas',
    description: 'Tu último día en Lisboa empieza tranquilo. Ve al Mercado da Ribeira / Time Out Market (el mismo sitio - parte es mercado tradicional, parte es food hall moderno). La sección MERCADO TRADICIONAL (abre 6:00, funciona hasta 14:00) vende productos frescos portugueses: quesos artesanales de Serra da Estrela, embutidos ibéricos, conservas de pescado gourmet en latas vintage, aceites de oliva, vinos del Alentejo/Douro, azafrán, sal marina de Flor de Sal, dulces conventuales. Es perfecto para comprar regalos/souvenirs comestibles auténticos (NO turísticos). Los vendedores son majos y te dejan probar todo. Recorre los puestos, pregunta por los productos, prueba quesos, aceites, y vinos antes de comprar. Las conservas de pescado en latas vintage son especialmente bonitas como souvenirs —diseños art déco de los años 30-40 que parecen obras de arte.',
    tip: '🛍️ Mercado tradicional: 6:00-14:00 (mejor 9:00-12:00, más surtido). SOUVENIRS: Conservas Comur/Tricana (3-8€ lata, diseños vintage preciosos), queso Serra Estrela (12-20€/kg), vinos 8-30€, aceite oliva 10-25€. LLEVA: Bolsa reutilizable (algunos vendedores no tienen). Efectivo (algunos no aceptan tarjeta). Compras viajan bien en maleta. Tiempo: 1-1.5h para comprar tranquilo.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    coordinates: { lat: 38.7058, lng: -9.1455 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7058,-9.1455'
  },
  {
    time: '11:00',
    title: 'Brunch en Time Out Market — Última comida en Lisboa',
    description: 'Después de comprar, pasa a la sección TIME OUT para brunch tardío - hay opciones de todo tipo (huevos, tostadas, pasteles, smoothies, 8-15€). Come tranquilo viendo el ambiente del mercado - mezcla de locales comprando ingredientes y turistas probando restaurantes. Es tu última comida en Lisboa, así que elige bien. Recomendados: "Alexandre Silva" (cocina portuguesa moderna, platos 12-18€), "Henrique Sá Pessoa" (mariscos increíbles), o simplemente algo ligero si ya compraste mucho en el mercado tradicional. El ambiente es perfecto para reflexionar sobre la semana que tuviste —has visto palacios, castillos, playas, museos, y has comido como un rey. Lisboa te ha dado todo.',
    tip: '🍽️ Time Out brunch: 10-20€. HORARIO: 10:00-00:00 (domingo hasta 18:00). Evita 13:00-15:00 (llenísimo). Mejor: 11:00-12:00 para brunch tranquilo. Tiempo: 1-1.5h para comer y procesar que es tu último día.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
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
    time: '17:00',
    title: 'Basílica da Estrela — Cúpula con vistas 360°',
    description: 'Al lado del Jardim da Estrela está la Basílica da Estrela —una iglesia neoclásica blanca enorme construida en el siglo XVIII por la reina María I. La entrada a la iglesia es gratis, pero lo mejor es subir a la cúpula (5€) para tener las últimas vistas 360° de Lisboa antes de irte. La subida es por escaleras de caracol dentro de la cúpula, y cuando llegas arriba ves toda la ciudad desplegada: el Tajo, los barrios históricos, el puente 25 de Abril, y los barrios modernos al norte. Es un cierre perfecto para tu semana en Lisboa —desde aquí puedes ver todo lo que has visitado: Alfama, el Castillo, Belém, el Parque das Nações, todo. La basílica es menos turística que otros monumentos, así que suele estar tranquila. Tómate tu tiempo aquí arriba —es tu última vista panorámica de Lisboa.',
    tip: '🎫 Basílica: GRATIS (iglesia). Cúpula: 5€ (vistas 360° brutales). HORARIO: 9:00-19:00 (verano), 9:00-18:00 (invierno). Tiempo visita: 30-45 min (iglesia + subida cúpula). Menos turístico que otros monumentos —ambiente tranquilo. Perfecto para reflexionar sobre la semana.',
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
