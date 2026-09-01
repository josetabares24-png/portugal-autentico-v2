import type { ItineraryDayMeta, TimelineStop } from './types';

export const lisboa1DiaTimeline: TimelineStop[] = [
  {
    time: '09:00',
    day: 1,
    title: 'Alfama - El barrio más auténtico',
    description: 'Aquí es donde empieza tu día perfecto en Lisboa. Sal temprano, tipo 9 de la mañana, cuando las calles todavía están tranquilas y solo ves a los vecinos abriendo sus tiendas. Alfama es de lo poco que quedó en pie tras el terremoto de 1755, y por eso conserva el trazado medieval que el resto del centro perdió. Vas a ver ropa tendida cruzando las calles, escuchar fado saliendo de alguna ventana, y oler a bacalao cocinándose para el almuerzo. No uses Google Maps aquí - lo mejor es perderte. En serio. Las mejores fotos y los rincones más bonitos están donde no hay turistas.',
    tip: '📍 Empieza en la Catedral Sé (coordenadas abajo) y sube caminando hacia el castillo. Todas las calles llevan arriba. Si ves una escalera, súbela. Confía en mí.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7109, lng: -9.1333 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7109,-9.1333'
  },
  {
    time: '10:30',
    day: 1,
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
    day: 1,
    title: 'Castelo de São Jorge',
    productId: 'castelo-sao-jorge',
    description: 'Esta colina lleva ocupada muchísimo tiempo, y se entiende en cuanto subes: desde las murallas se domina el río, quién llega navegando y quién se acerca por tierra. La fortificación tiene raíces en época islámica, pero lo que se recorre hoy no es una construcción intacta del siglo XI: el conjunto se transformó durante siglos, con la conquista cristiana de 1147, las obras posteriores y las restauraciones del XX. Por eso conviven en el mismo recinto restos de épocas muy distintas. Cuando subas a las murallas y veas Lisboa desplegada a tus pies, entenderás por qué todos querían este sitio. Hay pavos reales sueltos por los jardines, jardines arqueológicos donde puedes ver ruinas de 2500 años superpuestas, y un periscopio antiguo en la torre principal que proyecta la ciudad en tiempo real en una pantalla — es fascinante ver cómo se mueve la gente, los coches, los barcos, todo en miniatura. Tómate tu tiempo aquí — hay bancos en la sombra bajo árboles centenarios, fuentes donde refrescarte, y honestamente, es el mejor lugar para entender la geografía de Lisboa antes de seguir explorando. Las murallas tienen casi mil años, las torres de vigilancia ofrecen perspectivas diferentes de la ciudad, y el silencio arriba (solo roto por el viento y los pavos reales) contrasta con el bullicio de Alfama abajo.',
    tip: '💰 Entrada: 17€ adultos, 8,50€ de 13 a 25 años, 14€ mayores de 65 y gratis para menores de 12. HORARIO: 9:00-21:00 de marzo a octubre (última entrada 20:30) y 9:00-18:00 de noviembre a febrero (última 17:30). TRUCO: compra online para evitar cola, que en verano puede ser de una hora, y ve a primera hora o después de las 15:00. Lleva agua, gorra y calzado cómodo: hace calor aquí arriba y hay mucho que caminar.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.7139, lng: -9.1334 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7139,-9.1334'
  },
  {
    time: '13:00',
    day: 1,
    title: 'Almuerzo en Tasca do Chico — Donde comen los locales',
    description: 'Hora de comer de verdad. Y no, no vamos a un sitio turístico con menús en cinco idiomas y fotos de los platos en la puerta. Tasca do Chico es donde van los trabajadores del barrio, los vecinos de toda la vida, y los lisboetas que saben dónde está la comida buena y barata. Está en Bairro Alto (baja del castillo y camina 10 minutos por calles que van descendiendo), es pequeño y funciona con platos del día más que con una carta larga. Suele haber algún guiso de bacalao (hay mil formas de cocinarlo en Portugal), carne de cerdo à alentejana (cerdo con almejas, sí, leíste bien —es una combinación que funciona), y si hay suerte, arroz de marisco que es una paella portuguesa con todo el marisco habido y por haber. El menú del día cuesta entre 8 y 10 euros e incluye entrada (sopa del día o ensalada), plato principal, postre (flan, arroz con leche, o fruta), café, y medio litro de vino de la casa. Sí, vino incluido. Es Portugal. Por las noches (después de las 21:00) hay fado en vivo espontáneo y se llena de lisboetas que vienen a escuchar música, pero al mediodía es perfecto —tranquilo, auténtico, y la comida es exactamente lo que necesitas después de caminar: casera, generosa, y deliciosa. Si hay caldeirada (guiso de pescado con patatas que sabe a mar), pídela sin dudar. Si no te gusta el bacalao (¿en serio estás en Portugal y no te gusta el bacalao?), siempre tienen alguna opción de carne o incluso arroz de pato que es espectacular.',
    tip: '🍷 Es una tasca pequeña y a mediodía suele llenarse, así que cuenta con esperar un rato. Comprueba horario y si aceptan reserva antes de ir. Lleva efectivo por si acaso: en muchas tascas sigue siendo lo más cómodo. ALTERNATIVA: Si está cerrado o lleno, ve a "Taberna da Rua das Flores" (dos calles más arriba) —más caro (15-20€) pero la comida es increíble y el ambiente más moderno.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    coordinates: { lat: 38.7131, lng: -9.1443 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7131,-9.1443'
  },
  {
    time: '15:00',
    day: 1,
    title: 'Belém — Donde Portugal conquistó el mundo',
    description: 'Después de comer, toma el tranvía 15E desde Praça da Figueira (o un Uber, 15 minutos, 8-10€) y vete a Belém. Este barrio es donde Portugal se hizo grande —literalmente. Desde este mismo lugar, en el siglo XV, salieron las carabelas que "descubrieron" medio mundo: Vasco da Gama abrió la ruta a la India navegando alrededor de África, Pedro Álvares Cabral "descubrió" Brasil por accidente (iba a la India y se desvió), y Magallanes inició la primera vuelta al mundo desde aquí. El oro, las especias, y el poder que trajeron de vuelta financiaron los monumentos que vas a ver. La Torre de Belém es ese ícono que has visto en todas las fotos de Lisboa —una torre de defensa medieval construida en 1520 que parece un castillo de arena gigante al borde del río Tajo. Fue diseñada para proteger la entrada del puerto, y su estilo manuelino (único de Portugal) está lleno de detalles marítimos: cuerdas talladas en piedra, anclas, esferas armilares, y hasta un rinoceronte esculpido (el primero que llegó a Europa, regalo del rey de la India). El Monasterio de los Jerónimos está justo al lado y es brutal —fue construido con el oro que traían de la India, y cuando entras entiendes el presupuesto que tenían. Es gótico manuelino, un estilo portugués único que mezcla gótico con elementos renacentistas y motivos marítimos tallados en cada centímetro de piedra. La iglesia es gratis y vale más que el monasterio —techos abovedados de 25 metros de altura que parecen palmeras de piedra, columnas que se ramifican como árboles, y la tumba de Vasco da Gama (el tipo que cambió la historia abriendo la ruta marítima a la India). Patrimonio de la UNESCO por algo —este lugar es la prueba física de la era dorada de Portugal.',
    tip: '🎫 IMPORTANTE: Compra tickets online para el claustro del Monasterio (18€) —la cola puede ser de una hora en verano. La iglesia es GRATIS y está dentro del mismo complejo (no necesitas ticket para entrar). Torre de Belém: comprueba el precio vigente en la web oficial y compra online para evitar esperas. TRUCO: Ve primero a la Torre cuando abren (10:00, menos gente), luego al Monasterio (11:00-12:00), y después a los pasteles (12:30). El orden importa para evitar colas. Lunes todo cerrado.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
    coordinates: { lat: 38.6979, lng: -9.2061 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6979,-9.2061'
  },
  {
    time: '16:30',
    day: 1,
    title: 'Pastéis de Belém',
    description: 'Vale, ahora lo que viniste a hacer a Lisboa: comer el pastel de nata ORIGINAL. No es un pastel de nata normal - es EL pastel de nata. La receta secreta está guardada en una sala a la que solo entran 3 maestros pasteleros, y nadie más en el mundo sabe cómo hacerlos exactamente así. Se hacen aquí desde 1837 con la receta original del monasterio de al lado (los monjes los inventaron, obviamente). La cola parece intimidante pero avanza rápido - en 10 minutos estás dentro. Hay DOS zonas: la tienda (para llevar) y el salón gigante de atrás con azulejos azules (para comer ahí). Ve al salón - es más rápido y puedes sentarte. Pide los pasteles "quentes" (calientes, recién salidos del horno) con canela y azúcar en polvo. Cuestan 1,60€ cada uno. Pide mínimo 2. O 6. Nadie te juzga. Con un café o un galão (café con leche portugués). Hay gente que viene a Lisboa solo por esto.',
    tip: '🥐 ORDEN PERFECTA: 2-3 pastéis quentes, un galão, y siéntate en el salón de atrás. Espolverea canela, no tengas miedo. Van a estar a 200°C así que sopla antes de morder. El salón de atrás tiene MENOS COLA que la tienda de la entrada.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=800',
    coordinates: { lat: 38.6976, lng: -9.2031 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6976,-9.2031'
  },
  {
    time: '18:00',
    day: 1,
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
    day: 1,
    title: 'Cena en Bairro Alto — El barrio que nunca duerme',
    description: 'Para cerrar el día perfecto, volvemos al centro histórico —específicamente Bairro Alto, el barrio bohemio donde los lisboetas van a cenar y salir desde hace quinientos años. Las calles son estrechas, empedradas, llenas de grafitis que cambian cada semana, y restaurantes pequeños con diez mesas donde la comida se sirve caliente y la conversación fluye. La energía es única —antes de las 22:00 es tranquilo (perfecto para cenar sin ruido), después se transforma completamente: se llena de gente con cervezas en la calle (es totalmente legal y normal), músicos tocando en las esquinas, bares abiertos hasta las 2am, y un ambiente festivo que parece una verbena permanente. Para cenar tienes mil opciones según tu presupuesto y ganas: Si quieres carnes a la parrilla hechas a la perfección, ve a "Café Buenos Aires" (argentino pero buenísimo, 15-25€, reserva recomendada). Si quieres mariscos en un edificio histórico con azulejos del siglo XVIII en las paredes, "Cervejaria Trindade" es espectacular (20-35€, ambiente elegante pero relajado). Si quieres algo más local y barato, "Restaurante Bota Alta" tiene comida portuguesa auténtica (menú del día 12-18€, sin reservas, llegas y esperas). Después de cenar, camina por las calles sin rumbo —cada puerta es un bar diferente (rock, jazz, fado, electrónica), la gente está de buen humor, y el ambiente es contagioso. Te has ganado estas cervezas después del día que tuviste. Compra una Super Bock en cualquier minimercado (1€) y únete a la gente en las calles —es la forma más lisboeta de terminar el día.',
    tip: '🍽️ RESERVA para cenar (especialmente viernes/sábado) —llama por la tarde o reserva online. Si no reservaste, llega a las 19:30 antes del rush de las 20:30. POST-CENA: Para drinks con vistas, "Park Bar" (rooftop con vistas 360°, entrada gratis, consumición 4-10€) o "Pavilhão Chinês" (bar museo lleno de objetos antiguos coleccionados durante décadas, es surrealista y único, 5-8€ copas). Los bares del Bairro Alto abren 22:00-3:00. Es seguro de noche —lleno de gente, bien iluminado, y la policía patrulla regularmente.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    coordinates: { lat: 38.7142, lng: -9.1459 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7142,-9.1459'
  }
];

/**
 * Cabecera de la jornada.
 *
 * Es una sola, y a propósito: este itinerario es de un día y no se parte en
 * capítulos artificiales para que se parezca al de tres. El resumen dice lo
 * que dicen las paradas —cuántas son, a qué hora empieza y acaba, y por qué
 * zonas pasa—, no promete nada más.
 */
export const lisboa1DiaDays: ItineraryDayMeta[] = [
  {
    day: 1,
    title: 'De Alfama a Belém, y cierre en Bairro Alto',
    summary:
      'Ocho paradas de 09:00 a 20:00: la mañana en Alfama y el castillo, la tarde en Belém y LX Factory, y la noche en Bairro Alto.',
    image: '/images/lisboa-originales/alfama-rua-da-adica-lisboa.jpg',
    imageAlt: 'Calle empedrada de Alfama entre casas tradicionales de Lisboa',
  },
];
