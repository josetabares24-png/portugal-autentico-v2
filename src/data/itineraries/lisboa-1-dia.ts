import type { ItineraryDayMeta, TimelineStop } from './types';

export const lisboa1DiaTimeline: TimelineStop[] = [
  {
    time: '09:00',
    day: 1,
    title: 'Alfama a primera hora',
    description: 'Aquí es donde empieza tu día perfecto en Lisboa. Sal temprano, tipo 9 de la mañana, cuando las calles todavía están tranquilas y solo ves a los vecinos abriendo sus tiendas. Alfama es de lo poco que quedó en pie tras el terremoto de 1755, y por eso conserva el trazado medieval que el resto del centro perdió. Vas a ver ropa tendida cruzando las calles y escaleras que no salen en ningún mapa. No uses Google Maps aquí: todas las calles acaban subiendo al castillo o bajando al río, así que perderse un rato no tiene riesgo.',
    tip: '📍 Empieza en la Catedral Sé (coordenadas abajo) y sube caminando hacia el castillo. Todas las calles llevan arriba. Si ves una escalera, súbela.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    coordinates: { lat: 38.7109, lng: -9.1333 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7109,-9.1333'
  },
  {
    time: '10:30',
    day: 1,
    title: 'Mirador de Santa Luzia — La postal que todo el mundo reconoce',
    description: 'Después de perderte por las callejuelas de Alfama, subes una última cuesta y llegas a este mirador. Es el momento en que entiendes por qué llaman a Lisboa "la ciudad de las siete colinas" — porque desde aquí ves cómo los tejados naranjas descienden en cascada hacia el Tajo, cómo las calles serpentean entre las casas, y cómo la geografía de la ciudad cobra sentido. Las vistas son exactamente la postal que has visto en Instagram mil veces, pero verla en persona es diferente: el panteón nacional blanco brillando al fondo, el río azul profundo, y si tienes suerte, algún barco de crucero pasando lentamente que añade movimiento al cuadro perfecto. Los paneles de azulejos del siglo XVIII que flanquean la terraza cuentan la historia de Lisboa antes del terremoto de 1755 — tómate cinco minutos para observarlos de cerca. Representan la Praça do Comércio antes de ser destruida y la conquista del castillo a los moros. Al lado hay un kiosco donde los vecinos del barrio toman café a cualquier hora — únete a ellos. La pérgola con buganvillas enmarca la vista.',
    tip: '📸 El mirador mira al sureste, así que por la mañana la luz le da de frente. El mirador se llena después de las 11:00 con grupos organizados. Hay otro mirador justo al lado (Portas do Sol) con menos gente y vistas complementarias — visítalos ambos, están a 30 segundos caminando. El kiosco abre desde temprano y sirve café, zumos naturales, y pasteles de nata.',
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
    bookingAdvice: {
      status: 'conviene-reservar',
      label: 'Consejo del itinerario',
      title: 'Aquí sí conviene llevar la entrada resuelta',
      description: 'Esta visita cae en una franja ajustada de la mañana. Si ya sabes que quieres entrar, llevar la reserva hecha evita dedicar parte del itinerario a resolver la entrada.',
      buttonLabel: 'Ver entrada del castillo',
    },
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
    title: 'Almuerzo en una tasca: prato do dia',
    description: 'Baja del castillo hacia Mouraria o la Baixa y busca una tasca con la pizarra del prato do dia en la puerta. A mediodía muchas ofrecen un plato del día con sopa o postre a precio cerrado; el precio está en la pizarra, así que lo ves antes de sentarte. Suele haber algún bacalao, carne de cerdo o un arroz. Si prefieres ir sobre seguro, Taberna da Rua das Flores, en el Chiado, abre a mediodía de lunes a sábado y no acepta reservas. Tasca do Chico, que a veces se recomienda para comer, abre por la noche: guárdala para el fado.',
    tip: '🍷 A mediodía las tascas se llenan entre las 13:00 y las 14:00; llegar a las 12:30 ahorra la espera. Lleva algo de efectivo por si acaso. Taberna da Rua das Flores cierra los domingos.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    coordinates: { lat: 38.7101, lng: -9.1436 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7101,-9.1436'
  },
  {
    time: '15:00',
    day: 1,
    title: 'Belém — Donde Portugal conquistó el mundo',
    bookingAdvice: {
      status: 'reserva-anticipada-recomendada',
      label: 'Consejo del itinerario',
      title: 'Si quieres entrar en Belém, decide antes qué monumento priorizar',
      description: 'La parada tiene tiempo limitado y reúne varios monumentos. Comprueba horarios y disponibilidad oficiales antes del viaje y reserva con antelación sólo aquello que realmente quieras visitar por dentro.',
    },
    description: 'Después de comer, toma el tranvía 15E desde Praça da Figueira (o en taxi o VTC, unos 15 minutos) y vete a Belém. Este barrio es donde Portugal se hizo grande —literalmente. Desde esta orilla, entre finales del siglo XV y el XVI, salieron las naves que "descubrieron" medio mundo: Vasco da Gama abrió la ruta a la India navegando alrededor de África, Pedro Álvares Cabral "descubrió" Brasil por accidente (iba a la India y se desvió). El oro, las especias, y el poder que trajeron de vuelta financiaron los monumentos que vas a ver. La Torre de Belém es ese ícono que has visto en todas las fotos de Lisboa —una torre de defensa del siglo XVI, terminada hacia 1519, que parece un castillo de arena gigante al borde del río Tajo. Fue diseñada para proteger la entrada del puerto, y su estilo manuelino (único de Portugal) está lleno de detalles marítimos: cuerdas talladas en piedra, anclas, esferas armilares, y hasta un rinoceronte esculpido (inspirado en el que el sultán de Guzerat regaló al rey Manuel I en 1515, el primero que se vio en Europa desde época romana). El Monasterio de los Jerónimos está justo al lado —fue construido con el oro que traían de la India, y cuando entras entiendes el presupuesto que tenían. Es gótico manuelino, un estilo portugués único que mezcla gótico con elementos renacentistas y motivos marítimos tallados en cada centímetro de piedra. La iglesia es gratis y vale más que el monasterio —techos abovedados de 25 metros de altura que parecen palmeras de piedra, columnas que se ramifican como árboles, y la tumba de Vasco da Gama (el tipo que cambió la historia abriendo la ruta marítima a la India). Patrimonio de la UNESCO por algo —este lugar es la prueba física de la era dorada de Portugal.',
    tip: '🎫 Si quieres entrar a alguno de los monumentos de Belém, comprueba antes del viaje los horarios y la disponibilidad en sus canales oficiales. En este itinerario llegas por la tarde, así que prioriza una visita interior y deja el resto para el exterior si vas justo de tiempo. Los lunes, Jerónimos y Torre de Belém cierran.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
    coordinates: { lat: 38.6979, lng: -9.2061 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6979,-9.2061'
  },
  {
    time: '16:30',
    day: 1,
    title: 'Pastéis de Belém',
    description: 'Vale, ahora lo que viniste a hacer a Lisboa: comer el pastel de nata ORIGINAL. No es un pastel de nata normal - es EL pastel de nata. La receta se prepara en una sala cerrada a la que solo entran los maestros pasteleros de la casa. Se hacen aquí desde 1837 con la receta original del monasterio de al lado (los monjes los inventaron, obviamente). La cola parece intimidante pero avanza rápido - en 10 minutos estás dentro. Hay DOS zonas: la tienda (para llevar) y el salón gigante de atrás con azulejos azules (para comer ahí). Ve al salón - es más rápido y puedes sentarte. Pide los pasteles "quentes" (calientes, recién salidos del horno) con canela y azúcar en polvo. Cuestan 1,60€ cada uno. Pide mínimo 2. O 6. Nadie te juzga. Con un café o un galão (café con leche portugués). Hay gente que viene a Lisboa solo por esto.',
    tip: '🥐 ORDEN PERFECTA: 2-3 pastéis quentes, un galão, y siéntate en el salón de atrás. Espolverea canela, no tengas miedo. Salen muy calientes: sopla antes de morder. El salón de atrás tiene MENOS COLA que la tienda de la entrada.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=800',
    coordinates: { lat: 38.6976, lng: -9.2031 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6976,-9.2031'
  },
  {
    time: '18:00',
    day: 1,
    title: 'LX Factory — El corazón creativo de Lisboa',
    description: 'Ahora que estás en modo coma de azúcar después de los pasteles, vamos a un sitio completamente diferente que te va a despertar. LX Factory es un complejo industrial de 1846 (primero textil, luego imprenta) reconvertido en tiendas, estudios y restaurantes. Piensa en: naves industriales de ladrillo rojo con grafitis enormes de artistas internacionales en las paredes, tiendas de diseño independiente donde encuentras cosas que no verás en ningún otro sitio, galerías de arte contemporáneo, cafés hipster con cafés de especialidad, y la librería Ler Devagar, con libros hasta el techo y una bicicleta colgada en el aire. Es donde la Lisboa alternativa se reúne —diseñadores, artistas, creativos, startups, todos trabajando en espacios que antes eran talleres industriales. Hay mercados de comida callejera los domingos, terrazas con vistas al puente 25 de Abril (el Golden Gate portugués que pasa literalmente por encima), y al atardecer el puente queda a contraluz. Si necesitas un café para recuperarte del azúcar, ve a LandScape —tienen vistas al puente y cafés excelentes. Es un buen momento para ralentizar, sentarte en alguna terraza, y absorber que llevas nueve horas caminando por una de las ciudades más bonitas de Europa. El ambiente aquí es joven, artístico, y totalmente diferente al Lisboa histórico que has visto hasta ahora.',
    tip: '🎨 Cada tienda y restaurante tiene su horario; Ler Devagar cierra antes que los bares, así que no la dejes para el final. Los domingos hay LxMarket (10:00-18:00, hasta las 19:00 en verano). Desde Belém: tranvía 15E hasta Calvário o tren hasta Alcântara-Mar, unos 10 minutos; andando por el río son unos 40. Hay varios restaurantes para cenar si decides quedarte: "Rio Maravilha" tiene terraza con vistas al puente y comida buena (20-30€).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800',
    coordinates: { lat: 38.7065, lng: -9.1799 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7065,-9.1799'
  },
  {
    time: '20:00',
    day: 1,
    title: 'Cena en Bairro Alto — El barrio que nunca duerme',
    description: 'Para cerrar el día perfecto, volvemos al centro histórico —específicamente Bairro Alto, el barrio bohemio donde los lisboetas salen a cenar y de copas. Las calles son estrechas, empedradas, llenas de grafitis, y restaurantes pequeños con diez mesas donde la comida se sirve caliente y la conversación fluye. La energía es única —antes de las 22:00 es tranquilo (perfecto para cenar sin ruido), después se transforma completamente: se llena de gente con cervezas en la calle, músicos tocando en las esquinas, bares abiertos hasta las 2am, y un ambiente festivo que parece una verbena permanente. Para cenar tienes mil opciones según tu presupuesto y ganas: Si quieres carnes a la parrilla hechas a la perfección, ve a "Café Buenos Aires" (argentino pero buenísimo, 15-25€, reserva recomendada). Si quieres mariscos en un edificio histórico con azulejos del siglo XIX (1863) en las paredes, "Cervejaria Trindade" es espectacular (20-35€, ambiente elegante pero relajado). Si quieres algo más local y barato, "Restaurante Bota Alta" tiene comida portuguesa auténtica (menú del día 12-18€, sin reservas, llegas y esperas). Después de cenar, camina por las calles sin rumbo —cada puerta es un bar diferente (rock, jazz, fado, electrónica), la gente está de buen humor, y el ambiente es contagioso. Ojo con una norma nueva: desde febrero de 2026, en Lisboa no se puede vender alcohol para tomar fuera del local entre las 23:00 y las 8:00 de domingo a jueves, ni entre medianoche y las 8:00 viernes, sábados y vísperas de festivo.',
    tip: '🍽️ RESERVA para cenar (especialmente viernes/sábado) —llama por la tarde o reserva online. Si no reservaste, llega a las 19:30 antes del rush de las 20:30. POST-CENA: Para drinks con vistas, "Park Bar" (rooftop con vistas 360°, entrada gratis, consumición 4-10€) o "Pavilhão Chinês" (bar museo lleno de objetos antiguos coleccionados durante décadas, es surrealista y único, 5-8€ copas). Los bares del Bairro Alto se animan a partir de las 22:00. Es seguro de noche —lleno de gente, bien iluminado, y la policía patrulla regularmente.',
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
