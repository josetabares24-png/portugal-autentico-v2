import type { ItineraryDayMeta, TimelineStop } from './types';

// Timeline stops para Lisboa 3 días - DÍA 3
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
    tip: '🎫 Entrada 2026: 20€ de 18 a 64 años, 15€ de 6 a 17 y mayores de 65, gratis hasta los 5. Compra online para no hacer cola. HORARIO: 9:30-18:00. IMPERDIBLE: El Pozo Iniciático (Poço Iniciático) y los túneles. Lleva linterna del móvil para los túneles oscuros. Si llueve, los túneles pueden tener agua - lleva calzado cerrado.',
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

// Timeline stops para Lisboa 3 días - Sintra
export const lisboa3DiasSintraTimeline: TimelineStop[] = [
  // DÍA 1 - LISBOA CLÁSICO
  {
    time: '09:00',
    day: 1,
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
    time: '11:00',
    day: 1,
    title: 'Castillo de San Jorge',
    productId: 'castelo-sao-jorge',
    description: 'Desde el mirador son diez minutos de subida hasta la puerta, y vale la pena hacerlos: el castillo no es sólo una fortaleza. Esta colina lleva ocupada muchísimo tiempo y ha pasado por manos muy distintas hasta la conquista cristiana de 1147. La fortificación tiene raíces en época islámica, pero lo que se recorre hoy no es una construcción intacta de entonces: el conjunto se transformó durante siglos y buena parte de lo que se ve responde a obras y restauraciones posteriores. Arriba hay tres cosas que no conviene saltarse. Las murallas, con once torres que se recorren por lo alto y la Baixa a tus pies mientras el Tajo se abre hacia el Atlántico. La cámara oscura de la Torre de Ulises, que proyecta la ciudad en tiempo real y es la mejor forma de entender cómo está montada. Y, sin ningún mérito histórico, los pavos reales sueltos por los jardines, que llevan décadas ahí y son lo que más recuerdan los niños. Calcula entre hora y media y dos horas: hay yacimiento arqueológico, jardines y muralla, y todo se anda. Al terminar bajas hacia la Baixa, que es la siguiente parada.',
    tip: '🎫 Entrada: 17€ adultos, 8,50€ de 13 a 25 años, 14€ mayores de 65 y gratis para menores de 12. HORARIO: 9:00-21:00 de marzo a octubre (última entrada 20:30) y 9:00-18:00 de noviembre a febrero (última 17:30). Compra online para evitar cola. Lleva gorra: casi no hay sombra. La cafetería de dentro es cara, mejor llevar algo de picar.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.7139, lng: -9.1334 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7139,-9.1334'
  },
  {
    time: '13:00',
    day: 1,
    title: 'Almuerzo en la Baixa Pombalina',
    /*
     * Misma limpieza que en la ruta de 2 días: fuera la metáfora de
     * centralidad y la geometría descrita en absolutos. El trazado pombalino
     * es regular, no impecable, y decirlo así es más fiel a lo que uno ve al
     * bajar.
     *
     * Los precios se caen enteros. Eran cuatro cifras duras de negocios
     * concretos, sin fuente y sin fecha: no tengo forma de comprobar hoy lo
     * que cuesta un menú en Taberna da Rua das Flores, y un precio obsoleto
     * en una guía es peor que ninguno. Tampoco se sostiene llamar «caros y
     * mediocres» a los restaurantes de Rua Augusta, ni «auténtica» a la
     * comida: son juicios que no podemos respaldar. Queda el consejo
     * verificable, que es dónde mirar.
     */
    description: 'Después del castillo, baja hacia la Baixa Pombalina para comer. Esta parte del centro fue reconstruida tras el terremoto de 1755 siguiendo el plan impulsado durante el gobierno del Marqués de Pombal. Sus calles rectas, las manzanas regulares y las fachadas de composición uniforme todavía muestran la lógica de aquella reconstrucción. Para comer, en las calles laterales encontrarás opciones portuguesas más tranquilas que las terrazas más turísticas de Rua Augusta. También puedes optar por los cafés históricos de Rossio, tomar un café con un pastel de nata y seguir explorando. Consulta precios y horarios en el propio local antes de sentarte.',
    tip: '🍽️ Las terrazas de Rua Augusta son las más turísticas de la zona: en las calles laterales suele haber opciones más tranquilas. Otra alternativa son los cafés históricos de Rossio. Los precios varían y conviene mirarlos en la carta antes de sentarse. Tiempo: 1-1,5h para comer sin prisa.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: '14:00',
    day: 1,
    title: 'Baixa Pombalina a pie',
    // Arco da Rua Augusta: 5€. Fuente: Visit Lisboa Shop, consultado 2026-08-23.
    // Antes figuraban 3€, sin fuente ni fecha.
    description: 'Después de comer, explora Baixa caminando. Empieza en la Praça do Comércio (plaza gigante abierta al Tajo con arcadas amarillas impresionantes), sube al Arco da Rua Augusta (5€ para el mirador en la cima - vistas 360° de Baixa y el río), después camina por Rua Augusta (calle peatonal principal llena de tiendas, artistas callejeros, turistas, vendedores de castañas asadas). Pasa por el Elevador de Santa Justa - ascensor neogótico de hierro de 1902 diseñado por Raoul Mesnier du Ponsard. Actualmente está cerrado (2026) por mantenimiento, pero la estructura sigue siendo impresionante desde abajo —vale la pena verla aunque no puedas subir. Termina en Rossio, la plaza donde solían quemar herejes en la Inquisición y hoy hay palomas, turistas, y portugueses tomando café en terrazas centenarias.',
    tip: '💰 Arco da Rua Augusta: 5€ (vistas 360°, 5 min arriba). GRATIS: Pasear Baixa, Praça Comércio, Rossio. Tiempo: 1-1.5h caminando tranquilo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7071, lng: -9.1364 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7071,-9.1364'
  },
  {
    time: '15:30',
    day: 1,
    title: 'Elevador de Santa Justa — El ascensor neogótico de Eiffel',
    description: 'El Elevador de Santa Justa es uno de los íconos arquitectónicos de Lisboa —un ascensor vertical de hierro neogótico de 45 metros de altura diseñado en 1902 por Raoul Mesnier du Ponsard. La estructura parece sacada de una novela de Julio Verne: hierro forjado con decoraciones góticas, torres gemelas, y un puente superior que conecta con el barrio de Chiado. Actualmente está cerrado (2026) por mantenimiento, pero sigue siendo impresionante verlo desde abajo —la perspectiva desde la calle te permite apreciar toda la elegancia del diseño arquitectónico. El miradouro de arriba figura también cerrado temporalmente, así que consulta el estado del elevador y del mirador en CARRIS antes de organizar la visita. Las Escadas do Carmo, al lado, se suben gratis y llevan al Largo do Carmo. El elevador funcionó desde 1902 hasta su cierre reciente, transportando a miles de personas diariamente entre Baixa y Chiado durante más de 120 años.',
    tip: '⚠️ Elevador: CERRADO (2026) por mantenimiento. GRATIS: Ver la estructura desde abajo —es igual de impresionante. OJO: el miradouro de arriba figura también cerrado temporalmente; consulta el estado en CARRIS antes de ir. Las Escadas do Carmo, al lado, se suben gratis. Mejor hora: 9:00-10:00 o 17:00-18:00 para evitar aglomeraciones. La estructura desde abajo es gratis y vale cada segundo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    coordinates: { lat: 38.7124, lng: -9.1396 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7124,-9.1396'
  },
  {
    time: '16:30',
    day: 1,
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
    day: 1,
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
    time: '09:30',
    day: 2,
    title: 'Torre de Belém',
    description: 'Día 2 dedicado por completo a Belém - el barrio de los descubrimientos portugueses. Sal temprano y toma el tranvía 15 desde Praça da Figueira (15 min, pasa cada 10 min). Tu primera parada es la Torre de Belém, la fortaleza del siglo XVI que parece sacada de un cuento de hadas - mezcla de estilo manuelino con torres blancas, baluartes, balcones sobre el río Tajo, y hasta un rinoceronte tallado en piedra (el primer rinoceronte que llegó a Europa). Llega exactamente cuando abren (10:00) para evitar las colas infernales que se forman después (en verano puede haber 1+ hora de espera a mediodía). La visita dura 30-45 min: subes por escaleras de caracol estrechas, pasas por las mazmorras donde encerraban prisioneros, sales a terrazas con vistas al Tajo y al puente 25 de Abril, y caminas por los baluartes defensivos imaginando cómo defendían Lisboa de invasores. Las vistas desde arriba son brutales - el río, los barcos pasando, Belém extendiéndose hacia el este.',
    tip: '🎫 Entrada: 15€. HORARIO: de martes a domingo, 9:30-17:30. Lunes CERRADO. Reabrió en mayo de 2026 tras la intervención de conservación. Compra online para saltarte cola. Escaleras MUY estrechas: no apto para claustrofobia ni movilidad reducida. En julio y agosto, llega a la apertura para ser de los primeros.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    coordinates: { lat: 38.6916, lng: -9.2158 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6916,-9.2158'
  },
  {
    time: '10:30',
    day: 2,
    title: 'Padrão dos Descobrimentos — Monumento a los Descubrimientos',
    description: 'Justo al lado de la Torre de Belém, camina 2 minutos hasta el Padrão dos Descobrimentos (Monumento a los Descubrimientos) —un monumento gigante de 52 metros de altura con forma de carabela que celebra la era dorada de los descubrimientos portugueses. Fue construido en 1960 para conmemorar el 500 aniversario de la muerte de Enrique el Navegante. El monumento tiene 33 estatuas de los grandes exploradores y figuras históricas portuguesas: Vasco da Gama, Pedro Álvares Cabral (descubridor de Brasil), Magallanes, y el propio Enrique el Navegante en la proa. Puedes subir arriba (4,80€ el billete con mirador) para ver el mosaico del mapamundi en el suelo que muestra todas las rutas de exploración portuguesas —desde Brasil hasta la India, desde África hasta Japón. Las vistas desde arriba son espectaculares: el Tajo, la Torre de Belém, y el Monasterio de los Jerónimos. El monumento está perfectamente alineado con el viento y el río, creando una composición fotográfica perfecta.',
    tip: '🎫 Entrada: 4,80€ el billete de exposición + mirador, 2,40€ solo exposición. Arriba: vistas al mosaico del mapamundi + panorámica del Tajo. HORARIO: 10:00-19:00 (verano), 10:00-18:00 (invierno). Lunes cerrado. Tiempo visita: 20-30 min. Si hay billete combinado con la Torre de Belém, compruébalo en la web oficial. Mejor hora: 10:00-11:00 (menos gente).',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
    coordinates: { lat: 38.6936, lng: -9.2058 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6936,-9.2058'
  },
  {
    time: '11:00',
    day: 2,
    title: 'Monasterio dos Jerónimos',
    description: 'Desde el Padrão, camina 10 minutos (o tranvía 15 una parada) hasta el Monasterio dos Jerónimos - la obra maestra absoluta del gótico manuelino portugués y Patrimonio de la Humanidad UNESCO. Este monstruo de piedra calcárea blanca fue construido con el oro de las especias que Vasco da Gama trajo de la India. Hay DOS partes: la IGLESIA (entrada GRATIS) y el CLAUSTRO (18€). Empieza por la iglesia - es donde está lo más espectacular: techos abovedados de 25 metros que parecen palmeras de piedra con decoraciones de cuerdas, anclas, y esfera armilar, la tumba de Vasco da Gama (el tipo que descubrió la ruta a India), la tumba del poeta Camões, y columnas octogonales con decoraciones de una delicadeza brutal. La luz natural entra por vitrales creando rayos de dios. El claustro (18€) es hermoso pero opcional - dos pisos de arcadas talladas rodeando un jardín, perfecto para fotos de arcos infinitos.',
    tip: '💰 IGLESIA: GRATIS, de martes a sábado 10:30-17:00 y domingos y festivos religiosos 14:00-17:00. CLAUSTRO: 18€, de martes a domingo 9:30-17:30, última entrada a las 17:00. Ojo, que iglesia y claustro NO abren a la misma hora. LUNES: todo cerrado. Cola iglesia: 20-40 min (verano). Mejor hora: 9:00-10:30 cuando abre. Audio-guía: 3€ (recomendada, explica decoraciones manuelinas). Tiempo visita: iglesia 30 min, claustro 20-30 min.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1580712771134-b48cf4863fe2?w=800',
    coordinates: { lat: 38.6979, lng: -9.2061 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6979,-9.2061'
  },
  {
    time: '13:00',
    day: 2,
    title: 'Pastéis de Belém - Los ORIGINALES',
    description: 'Ahora viene el momento que todos esperan: probar los pasteles de nata ORIGINALES en la pastelería que los inventó en 1837. Camina 5 minutos desde el monasterio hasta Pastéis de Belém - la fábrica azul y blanca con cola eterna en la tienda para llevar. PERO ESPERA. No hagas la cola. El truco maestro: entra directamente por las puertas que dicen "SALÃO" (salones). Son salas enormes con azulejos antiguos hasta el techo, meseros con pajarita negra, mesas de mármol, y CERO cola. Siéntate, pide 2-3 pasteles por persona (1,60€ cada uno) y un café, y espera 5 minutos. Cuando lleguen calentitos, espolvorea canela y azúcar glas (están en las mesas en dispensadores). La receta es secreta hace 200 años - solo 3 maestros pasteleros vivos la conocen. El hojaldre está crujiente como obleas, la crema quemada por arriba ligeramente caramelizada. Es ridículamente bueno. Vas a entender por qué tienen una cola de 50 personas todos los días.',
    tip: '🥐 PRECIO: 1,60€/pastel. TRUCO ORO: Evita cola tienda - entra DIRECTO a "Salão" (salones restaurante, señalizado). Pide mínimo 2 por persona. Canela + azúcar glas en las mesas. HORARIO: 8:00-23:00 todos los días. Para llevar: caja de 6 pasteles = 9,60€, viajan bien hasta 24h. Niños bienvenidos, tronas disponibles.',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800',
    coordinates: { lat: 38.6975, lng: -9.2032 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6975,-9.2032'
  },
  {
    time: '15:00',
    day: 2,
    title: 'MAAT - Museo de Arte Moderno',
    description: 'Después del sugar rush de los pasteles, camina 10 minutos por el paseo marítimo hasta el MAAT (Museo de Arte, Arquitectura y Tecnología). El edificio por fuera ya es una obra de arte: estructura ondulante blanca de azulejos que parece una ola gigante saliendo del Tajo. PUEDES SUBIR AL TECHO GRATIS - es una rampa pública que sube hasta arriba del museo ofreciendo vistas al río, el puente 25 de Abril, y Belém. Muchos turistas no saben esto y pagan entrada (11€) solo para las exposiciones de dentro. Si te gusta arte contemporáneo/instalaciones/arquitectura moderna, la entrada vale la pena - exposiciones rotativas de artistas internacionales, instalaciones interactivas, y espacios de diseño brutalista. Si no eres muy de museos, solo sube al techo gratis, tómate fotos en la estructura ondulante, y sigue tu camino. El área alrededor tiene cafés modernos con terraza al río perfectos para descansar.',
    tip: '🎨 TECHO: GRATIS (acceso público). MUSEO: la tarifa depende de dónde residas, 12€ para residentes en Portugal y 16€ para el resto, así que como visitante cuenta con 16€. HORARIO: de miércoles a lunes, 10:00-19:00. Martes cerrado. Tiempo visita: 1-1.5h si entras, 20 min solo techo. Cafetería en planta baja con terraza al Tajo.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800',
    coordinates: { lat: 38.6963, lng: -9.1987 },
    googleMapsUrl: 'https://maps.google.com/?q=38.6963,-9.1987'
  },
  {
    time: '17:00',
    day: 2,
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
    day: 2,
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
    time: '08:30',
    day: 3,
    title: 'Tren a Sintra — Viaje al cuento de hadas',
    description: 'Día 3 es tu excursión a Sintra —el pueblo de palacios de colores escondido en las montañas a cuarenta minutos de Lisboa que parece sacado de un cuento de hadas. Sal TEMPRANO. Esto es crítico y no es una exageración. Coge el tren desde la Estación Rossio (centro de Lisboa, fácil de llegar en metro línea verde) hacia Sintra —salen cada veinte minutos desde las 6:30 de la mañana. Compra billete ida y vuelta (4.60€) en las máquinas automáticas de la estación (aceptan tarjeta y efectivo). El viaje dura cuarenta minutos atravesando suburbios lisboetas, campos verdes, y finalmente montañas cubiertas de bosque hasta llegar al pueblo de Sintra, que aparece como una visión entre la neblina. Cuando bajes del tren, NO camines al centro todavía —ese es el error que cometen todos y que te hará perder tiempo. Ve DIRECTO a los autobuses que están junto a la estación: el 434 (circular que va a Palacio Pena + Castelo dos Mouros, 7.60€ día completo hop-on hop-off) o el 435 (va a Quinta da Regaleira, 5€). Cómpralos en el kiosco junto a la estación antes de que se forme cola. La clave de Sintra es simple: llega temprano (antes de las 9:00) y usa los buses —las colas después de las 11:00 son demenciales (una o dos horas para entrar a los palacios, literalmente). Sintra es una fantasía completa —neblina frecuente en las montañas que añade misterio, palacios de colores imposibles que parecen de Disney, jardines laberínticos con túneles secretos, bosques encantados con árboles exóticos traídos de todo el mundo, y una atmósfera que Lord Byron describió como "el paraíso en la tierra". Vas a sentir que entraste a un cuento de hadas, y no es una metáfora —es exactamente así.',
    tip: '🚂 TREN: Estación Rossio (Lisboa) → Sintra. Frecuencia: cada 20 minutos desde 6:30. Consulta la tarifa vigente de la línea de Sintra en la web de CP: el tarifario cambió en 2026 y depende del título que uses. Duración: 40 minutos. Último tren de vuelta: 23:00 aproximadamente. BUSES Sintra: el 434 sube a Pena y Mouros y el 435 va a Regaleira; consulta su tarifa vigente antes de viajar. CRÍTICO: Sal de Lisboa antes de las 8:30 para llegar a Sintra antes de las 9:30. Después de las 10:00 = caos absoluto con grupos de cruceros y tours organizados. Compra las entradas a los palacios online la noche anterior —ahorras una o dos horas de cola en cada uno.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800',
    coordinates: { lat: 38.7986, lng: -9.3881 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7986,-9.3881'
  },
  {
    time: '09:30',
    day: 3,
    title: 'Palacio da Pena — La fantasía de colores que define Sintra',
    productId: 'sintra-palacio-pena',
    description: 'Súbete al bus 434 y en quince minutos llegas a la entrada del Palacio da Pena —el palacio más icónico y fotogénico de Portugal, y posiblemente uno de los más coloridos del mundo. Es una explosión de colores imposible que parece diseñada por un niño con una caja de lápices: muros amarillos brillantes, torres rojas como sangre, cúpulas azules como el cielo, detalles verdes esmeralda, y todo mezclando estilos arquitectónicos como si fuera un collage —neorománico, neogótico, neo-manuelino, neo-islámico, neo-renacentista— como si un arquitecto hubiera dicho "quiero un poco de todo". Fue el palacio de verano de la familia real portuguesa en el siglo XIX, construido por el rey consorte Fernando II (que era alemán y claramente había visto muchos castillos bávaros) sobre las ruinas de un monasterio del siglo XV. Hay DOS entradas: solo jardines (10€) o palacio completo con jardines (20€). PAGA LOS 20€ sin dudar —el interior es una cápsula del tiempo que vale cada euro: habitaciones reales conservadas exactamente como en 1910 cuando la monarquía cayó y la familia huyó, decoración victoriana exuberante con muebles originales, techos pintados con frescos, y balcones con vistas 360° sobre las montañas, el pueblo de Sintra abajo, y el Atlántico brillando a lo lejos en días claros. Los jardines son 200 hectáreas de bosque encantado con lagos artificiales, grutas escondidas, senderos que se pierden entre árboles exóticos traídos de todo el mundo, y miradores secretos desde donde ves el palacio emergiendo entre las nubes. Dedícale mínimo dos horas —es enorme, y cada rincón tiene algo que descubrir.',
    tip: '🎫 La modalidad que recomendamos es la VISITA ESENCIAL, que incluye el Palácio Novo y el Parque: 20€ adultos y 18€ de 6 a 17 años y mayores de 65. Si sólo quieres el PARQUE son 12€ adultos y 10€ jóvenes y mayores, pero te pierdes el interior, que es lo mejor. Existe además una VISITA TOTAL de 45€. Compra ONLINE con antelación —evitas cola de una hora o más en verano. HORARIO: 9:30-18:30 (verano), 10:00-17:00 (invierno). Último acceso una hora antes del cierre. Lleva agua y snacks —la cafetería es cara y las opciones limitadas. Calzado cómodo —hay mucho que caminar, tanto en el palacio como en los jardines. El bus 434 te deja en la entrada baja —desde ahí son 15 minutos caminando cuesta arriba hasta el palacio (gratis) o puedes pagar 3€ por un bus shuttle que te sube. Si tienes piernas, camina —el bosque es precioso.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
    coordinates: { lat: 38.7877, lng: -9.3906 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7877,-9.3906'
  },
  {
    time: '12:30',
    day: 3,
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
    day: 3,
    title: 'Castelo dos Mouros - Ruinas en las nubes',
    description: 'Desde Regaleira, sube de nuevo en el bus 434 hasta el Castelo dos Mouros - fortaleza musulmana del siglo VIII abandonada en ruinas en la cima de la montaña. Es completamente diferente a los palacios: sin colores, sin decoración, solo murallas de piedra gris serpenteando por las rocas entre bosque y neblina. Parece salido de Game of Thrones. La visita consiste en caminar por las murallas - subes y bajas escaleras de piedra antigua, pasas por torres semidestruidas, y en cada tramo tienes vistas brutales: el Palacio da Pena colorido emergiendo de los árboles, el pueblo de Sintra abajo en el valle, el Atlántico brillando a lo lejos en días claros. Cuando hay neblina (frecuente) es mágico - las murallas desaparecen entre nubes, los árboles parecen fantasmas, y te sientes en otra dimensión. Ojo: hay muchas escaleras irregulares y zonas sin barandilla - no apto para vértigo severo.',
    tip: '🎫 Entrada 2026: 12€ adultos, 10€ jóvenes y mayores de 65, 33€ el billete familiar. HORARIO: 9:30-18:00, última entrada a las 17:30. Tiempo de visita: 1h. FÍSICO: Muchas escaleras, subidas empinadas, zonas sin barandilla. Lleva agua. Mejor CON neblina (ambiente épico) o día claro (vistas infinitas). Calzado trekking recomendado - piedras resbaladizas.',
    type: 'visit',
    image: 'https://images.unsplash.com/photo-1552832230-0ab456afa00c?w=800',
    coordinates: { lat: 38.7924, lng: -9.3896 },
    googleMapsUrl: 'https://maps.google.com/?q=38.7924,-9.3896'
  },
  {
    time: '17:00',
    day: 3,
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

// ============================================================================
// LISBOA 3 DÍAS - cabeceras de jornada
// ============================================================================

/**
 * Título y resumen de cada jornada de `lisboa3DiasSintraTimeline`.
 *
 * Es lo único que se ha escrito nuevo para el rediseño, y a propósito no dice
 * nada que las paradas no digan: los títulos nombran las zonas por las que se
 * pasa y los resúmenes cuentan cuántas paradas hay y cómo empieza y termina el
 * día. Nada de promesas ni superlativos.
 */
export const lisboa3DiasDays: ItineraryDayMeta[] = [
  {
    day: 1,
    title: 'Alfama, el castillo y la Baixa',
    summary:
      'Ocho paradas a pie por el casco histórico, desde Alfama al amanecer hasta el atardecer en el mirador da Graça.',
    image: '/images/alfama-callejon.jpg',
    imageAlt: 'Calle estrecha y empinada del barrio de Alfama, en Lisboa',
  },
  {
    day: 2,
    title: 'Belém, el Tajo y LX Factory',
    summary:
      'Siete paradas entre los monumentos de Belém y la orilla del Tajo, con parada en LX Factory y cena en el Time Out Market.',
    image: '/images/mirador-tajo-amarras-atardecer.jpg',
    imageAlt: 'El río Tajo a su paso por Lisboa al atardecer, con amarras en primer plano',
  },
  {
    day: 3,
    title: 'Sintra, de excursión',
    summary:
      'Día completo fuera de Lisboa: tren a Sintra, el Palacio da Pena, la Quinta da Regaleira, el Castelo dos Mouros y vuelta por el centro de la villa.',
    image: '/images/sintra-palacio-turistas.jpg',
    imageAlt: 'Fachada de un palacio de Sintra con visitantes en la entrada',
  },
];
