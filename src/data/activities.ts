import type { FreeTourCategoryId } from '@/data/affiliate-links';

export type ActivityCategory =
  | 'Miradouros'
  | 'Cultura e Historia'
  | 'Gastronomía'
  | 'Experiencias'
  | 'Excursiones'
  | 'Naturaleza'
  | 'Familia';

export interface Activity {
  slug: string;
  title: string;
  category: ActivityCategory;
  zone: string;
  isFree: boolean;
  priceLabel: string;
  /** Precio numérico de partida en EUR, solo cuando es inequívoco (para schema.org Offer). */
  priceFrom?: number;
  duration: string;
  /** Ausente cuando no hay foto verificada que corresponda realmente a este lugar (ver ActivityImagePlaceholder). */
  image?: string;
  /** Texto alternativo descriptivo de la foto; si falta, se usa el título como respaldo. */
  imageAlt?: string;
  description: string;
  savingTip: string;
  bookingUrl?: string;
  /**
   * Categoría de free tour cuyo enlace afiliado corresponde a esta ficha.
   * La URL no se escribe aquí: se resuelve centralizadamente desde
   * `src/data/affiliate-links.ts`, para no repetir enlaces afiliados por
   * varios sitios ni exponer el identificador en los datos.
   */
  affiliateCategory?: FreeTourCategoryId;
  /** URL de la fuente oficial usada para verificar precio/horario/estado. */
  officialUrl?: string;
  /** Fecha (YYYY-MM-DD) de la última verificación de los datos frente a la fuente oficial. */
  lastVerified?: string;
  /**
   * Si la ficha puede indexarse como página independiente (index, follow) en
   * sitemap.xml y metadata.robots. Mientras sea false, la ficha sigue siendo
   * visitable y enlazada, pero se sirve con noindex, follow y se excluye del
   * sitemap porque el contenido editorial todavía no es lo bastante completo.
   */
  indexable: boolean;
  /** Nota corta sobre algo temporal o incierto (obras, cierre parcial, etc.). */
  statusNote?: string;
  /**
   * Bloque editorial ampliado. Responde a lo que de verdad decide una visita:
   * qué vas a ver, cuándo conviene ir, qué error comete casi todo el mundo y
   * cómo se llega. Va aparte de `description` a propósito: esa es la frase
   * corta que alimenta la meta description y las tarjetas del listado, y no
   * debe crecer.
   *
   * Deliberadamente NO incluye precios ni horarios: esos viven en
   * `priceLabel` y en la fuente oficial, que es donde se verifican y donde
   * el lector debe comprobarlos.
   */
  experiencia?: {
    /** Qué es y por qué merece el rato. Dos o tres frases. */
    intro: string;
    /** Lo concreto que se ve o se hace allí. */
    queVeras: string[];
    /** Mejor momento del día o del año, y por qué. */
    cuandoIr: string;
    /** El error que comete casi todo el mundo. */
    elError: string;
    /** Cómo llegar en transporte público. */
    comoLlegar: string;
  };
}

export const ACTIVITY_CATEGORIES: ActivityCategory[] = [
  'Miradouros',
  'Cultura e Historia',
  'Gastronomía',
  'Experiencias',
  'Excursiones',
  'Naturaleza',
  'Familia',
];

export const activities: Activity[] = [
  {
    slug: 'miradouro-santa-luzia',
    experiencia: {
      intro: 'El más fotografiado de Lisboa, y con motivo: una pérgola cubierta de buganvilla, paneles de azulejo del siglo XVIII y los tejados de Alfama cayendo hacia el río. Es pequeño, y esa es parte de su encanto.',
      queVeras: [
        'Los paneles de azulejo que representan la Praça do Comércio antes del terremoto de 1755 y la conquista del castillo',
        'La pérgola con buganvilla, que enmarca la vista de forma natural',
        'El estanque y el jardincillo, donde suele haber vecinos del barrio',
        'Alfama entera hacia el Tajo',
      ],
      cuandoIr: 'Entre las diez y las once de la mañana, con luz dorada horizontal y antes de que lleguen los grupos.',
      elError: 'Pasar de largo hacia Portas do Sol sin pararse a mirar los azulejos. Cuentan cómo era Lisboa antes del terremoto, que es lo único que queda de esa ciudad.',
      comoLlegar: 'Tranvía 28, parada Miradouro Santa Luzia, justo delante.',
    },
    indexable: true,
    title: 'Miradouro de Santa Luzia',
    category: 'Miradouros',
    zone: 'Alfama',
    isFree: true,
    priceLabel: 'Gratis',
    duration: '15-20 min',
    image: '/images/alfama-panoramica.jpg',
    description: 'Terraza con azulejos y vistas al Tajo y los tejados de Alfama, una de las postales más fotografiadas de Lisboa.',
    savingTip: 'Ve a las 18-19h (hora dorada): mejor luz y menos grupos de tours que por la mañana.',
  },
  {
    slug: 'miradouro-senhora-do-monte',
    experiencia: {
      intro: 'Está junto a la Capela da Senhora do Monte, en Graça. Desde el mirador se ven el Castelo de São Jorge, el Tajo, la Baixa, el Convento do Carmo, Mouraria y buena parte de la ciudad hacia el norte.',
      queVeras: [
        'El Castelo de São Jorge y la colina histórica enfrente',
        'La Baixa y el río Tajo en una misma panorámica',
        'Mouraria y el Convento do Carmo desde arriba',
        'Cipreses, olivos y pinos que dan sombra alrededor del mirador',
      ],
      cuandoIr: 'Está abierto 24 horas. Si quieres ir al atardecer, calcula el tiempo de la subida a Graça y llega antes de que cambie la luz.',
      elError: 'Tratarlo como una atracción con entrada y horario. El acceso es libre; lo que debes calcular bien es la subida y cómo encajarlo con Graça o Mouraria.',
      comoLlegar: 'Puedes llegar hasta Graça en transporte público y hacer el tramo final a pie. La cuesta es parte del recorrido.',
    },
    indexable: true,
    title: 'Miradouro da Senhora do Monte',
    category: 'Miradouros',
    zone: 'Graça',
    isFree: true,
    priceLabel: 'Gratis',
    duration: '20 min',
    image: '/images/miradouro-atardecer.jpg',
    description: 'Mirador gratuito en Graça con vistas amplias sobre el castillo, la Baixa, el Tajo y Mouraria.',
    savingTip: 'La entrada es libre y el mirador está abierto 24 horas. Encaja mejor si ya vas a recorrer Graça o Mouraria.',
    officialUrl: 'https://www.lisboa.pt/pontos-de-interesse/detalhe/miradouro-da-senhora-do-monte',
    lastVerified: '2026-09-23',
  },
  {
    slug: 'miradouro-portas-do-sol',
    experiencia: {
      intro: 'Es la postal de Alfama: la terraza mira hacia el barrio y los tejados descienden en cascada hasta el río. Está justo en el recorrido del tranvía 28, así que es difícil no pasar por delante.',
      queVeras: [
        'Los tejados de Alfama bajando hacia el Tajo, con la cúpula blanca del Panteón Nacional al fondo',
        'Las dos torres de la iglesia de São Vicente de Fora a la izquierda',
        'El tranvía 28 pasando por delante, que es de donde salen las fotos que has visto',
      ],
      cuandoIr: 'A primera hora de la mañana o al final de la tarde. Entre medias es de los miradores más concurridos de la ciudad.',
      elError: 'Quedarse solo aquí. El mirador de Santa Luzia está a treinta segundos andando, tiene los azulejos y la pérgola de buganvilla, y mucha menos gente. Se ven los dos en cinco minutos.',
      comoLlegar: 'Tranvía 28, parada Miradouro Santa Luzia. También se sube andando desde la Sé, unos diez minutos de cuesta.',
    },
    indexable: true,
    title: 'Miradouro das Portas do Sol',
    category: 'Miradouros',
    zone: 'Alfama',
    isFree: true,
    priceLabel: 'Gratis',
    duration: '15 min',
    image: '/images/actividades/portas-do-sol-alfama.webp',
    imageAlt: 'Tejados de Alfama y el río Tajo desde el Miradouro das Portas do Sol',
    description: 'Vistas abiertas al río y al barrio de Alfama, con bancos para sentarte y un kiosco de bebidas justo al lado.',
    savingTip: 'Pide un café o vino en el kiosco del mirador en vez de en una terraza turística cercana: mismo paisaje, mitad de precio.',
  },
  {
    slug: 'castelo-sao-jorge',
    experiencia: {
      intro: 'El castillo no es solo una fortaleza: es el sitio donde empezó Lisboa. Desde esta colina se domina el río, y por eso lleva ocupada casi tres mil años —fenicios, romanos, visigodos, moros y finalmente los cristianos en 1147—. Lo que se visita hoy es sobre todo la muralla musulmana del siglo XI, pero la vista es la misma que decidió que aquí hubiera una ciudad.',
      queVeras: [
        'La panorámica de 360º más completa de Lisboa: la Baixa a tus pies, el Tajo abriéndose hacia el Atlántico y, con día claro, la otra orilla',
        'Las murallas y once torres, que se recorren por arriba',
        'Los pavos reales sueltos por los jardines, que llevan décadas ahí y son el detalle que más recuerdan los niños',
        'Un yacimiento arqueológico con restos superpuestos de varias épocas',
        'La cámara oscura de la Torre de Ulises, que proyecta la ciudad en tiempo real',
      ],
      cuandoIr: 'A primera hora, cuando abre, o las dos últimas del día. Al mediodía en verano no hay sombra en las murallas y se pasa mal. La luz de la tarde, rasante sobre los tejados de Alfama, es la que hace las fotos.',
      elError: 'Subir andando desde la Baixa dando por hecho que son cuatro calles. Es una cuesta larga y empinada, y se llega agotado antes de empezar la visita. La otra: no reservar y encontrarse una hora de cola en agosto.',
      comoLlegar: 'Tranvía 28 hasta Miradouro Santa Luzia y diez minutos de subida, o el autobús 737 desde Praça da Figueira, que deja en la puerta y se ahorra toda la cuesta.',
    },
    indexable: true,
    title: 'Castelo de São Jorge',
    category: 'Cultura e Historia',
    zone: 'Alfama / Castelo',
    isFree: false,
    priceLabel: 'Desde 15 €',
    priceFrom: 15,
    duration: '1.5-2 h',
    image: '/images/actividades/castelo-sao-jorge-lisboa.webp',
    imageAlt: 'Murallas y torres del Castelo de São Jorge sobre Lisboa',
    description: 'Castillo medieval con murallas, torres y la mejor panorámica de 360º sobre la ciudad y el río.',
    savingTip: 'Compra la entrada online para evitar la cola; los jardines exteriores con vistas son gratuitos sin entrar al recinto.',
    officialUrl: 'https://castelodesaojorge.pt/en/plan-your-visit/choose-your-ticket/',
    lastVerified: '2026-08-05',
  },
  {
    slug: 'mosteiro-jeronimos',
    experiencia: {
      intro: 'Se construyó con el impuesto sobre las especias que llegaban de la India, y se nota: es el edificio donde Portugal enseñó lo rico que se había hecho. Lo llamativo es que la iglesia, que es la parte más impresionante, no cuesta nada.',
      queVeras: [
        'La iglesia de Santa María, con bóvedas de veinticinco metros sostenidas por columnas que se ramifican como palmeras de piedra',
        'Las tumbas de Vasco da Gama y de Luís de Camões, a ambos lados de la entrada',
        'El claustro de dos pisos, cada arco tallado distinto, con motivos marinos: cuerdas, anclas, esferas armilares',
        'El estilo manuelino en su versión más pura, que no existe fuera de Portugal',
      ],
      cuandoIr: 'Nada más abrir. Es de los sitios de Lisboa donde la cola crece más rápido, y a media mañana ya hay grupos organizados dentro de la iglesia, que es pequeña para la cantidad de gente que entra.',
      elError: 'Pagar sin saber que la iglesia es gratuita y está en el mismo complejo. Lo que se paga es el claustro. Merece la pena, pero conviene entrar antes a la iglesia y decidir con criterio, no comprar por inercia en la primera taquilla.',
      comoLlegar: 'Tranvía 15E desde Praça da Figueira o Cais do Sodré, unos veinte minutos. También hay tren de cercanías hasta la estación de Belém.',
    },
    indexable: true,
    title: 'Mosteiro dos Jerónimos',
    category: 'Cultura e Historia',
    zone: 'Belém',
    isFree: false,
    priceLabel: 'Desde 18 €',
    priceFrom: 18,
    duration: '1 h',
    image: '/images/actividades/mosteiro-dos-jeronimos-claustro.webp',
    imageAlt: 'Claustro del Mosteiro dos Jerónimos en Belém',
    description: 'Joya del manuelino portugués; el claustro es la parte de pago, considerada imprescindible por su detalle.',
    savingTip: 'La iglesia del monasterio (con la tumba de Vasco da Gama) es gratuita, solo se paga la entrada al claustro. Los domingos hasta las 14h la entrada al claustro también es gratuita.',
    officialUrl: 'https://www.museusemonumentos.pt/pt/museus-e-monumentos/mosteiro-dos-jeronimos-e-capela-de-sao-jeronimo',
    lastVerified: '2026-08-05',
  },
  {
    slug: 'torre-de-belem',
    experiencia: {
      intro: 'Es la imagen que todo el mundo tiene en la cabeza cuando piensa en Lisboa. Se construyó hacia 1515 para vigilar la entrada del puerto, y entonces estaba rodeada de agua: el terremoto de 1755 movió el cauce del río y hoy queda pegada a la orilla.',
      queVeras: [
        'Cinco pisos conectados por una escalera de caracol muy estrecha, con paso alterno cuando hay gente',
        'La terraza superior, con la mejor vista del Tajo desde el nivel del agua',
        'El rinoceronte tallado en la base de una garita: es el primero que se esculpió en Europa, copiado del que le regalaron al rey en 1515',
        'Los detalles manuelinos —cuerdas, nudos, esferas armilares— tallados por toda la piedra',
      ],
      cuandoIr: 'En cuanto abre. Es un edificio pequeño con aforo limitado, así que la cola avanza despacio aunque no parezca larga. Al atardecer, desde fuera, es cuando mejor se fotografía.',
      elError: 'Meterse en la cola sin haberla mirado bien. Por dentro la torre se ve en cuarenta minutos, y en verano la espera puede ser mayor que la visita. Si el día va justo, se disfruta casi igual desde el paseo, que es desde donde salen todas las fotos que conoces.',
      comoLlegar: 'Tranvía 15E desde Praça da Figueira o Cais do Sodré. Está a diez minutos a pie del Monasterio de los Jerónimos, así que lo normal es hacer los dos el mismo día.',
    },
    indexable: true,
    title: 'Torre de Belém',
    category: 'Cultura e Historia',
    zone: 'Belém',
    isFree: false,
    priceLabel: 'Desde 15 €',
    priceFrom: 15,
    duration: '45 min',
    image: '/images/actividades/torre-de-belem-lisboa.webp',
    imageAlt: 'Torre de Belém junto al río Tajo',
    description: 'Torre-fortaleza junto al río, símbolo de la Era de los Descubrimientos y Patrimonio de la Humanidad.',
    savingTip: 'Combina la visita con los Jerónimos en la misma mañana: están a 10 minutos a pie y ahorras un desplazamiento. Reserva con antelación: desde la reapertura de mayo de 2026 el acceso es por franjas horarias limitadas (unas 900 entradas al día).',
    officialUrl: 'https://www.museusemonumentos.pt/pt/museus-e-monumentos/torre-de-belem',
    lastVerified: '2026-08-05',
    statusNote: 'Reabierta el 26 de mayo de 2026 tras un año de obras (PRR), con nuevo sistema de acceso por franjas horarias para reducir las colas.',
  },
  {
    slug: 'pasteis-de-belem',
    experiencia: {
      intro: 'La receta viene del Monasterio de los Jerónimos y se hace en el mismo local desde 1837. Es secreta de verdad: solo la conocen unos pocos maestros pasteleros que la preparan en una sala cerrada. Por eso legalmente se llaman pastéis de Belém y no pastéis de nata, que es lo que se vende en el resto del país.',
      queVeras: [
        'El local por dentro: no es una tienda, son varias salas de azulejo azul que van hacia el fondo y caben cientos de personas',
        'El pastel recién salido, templado, con el hojaldre todavía crujiendo',
        'La canela y el azúcar glas en la mesa, que se echan al gusto',
        'La ventana desde la que se ve trabajar a los pasteleros',
      ],
      cuandoIr: 'A primera hora o pasadas las cinco de la tarde. A media mañana la cola de la calle da la vuelta a la esquina.',
      elError: 'Ponerse en la cola de la calle, que es la de llevar. Si te sientas dentro hay sitio casi siempre: son salas grandes y el servicio de mesa es rápido. Es el truco que separa a quien espera cuarenta minutos de quien entra directo.',
      comoLlegar: 'Tranvía 15E desde Praça da Figueira o Cais do Sodré. Está a cinco minutos del Monasterio de los Jerónimos.',
    },
    indexable: true,
    title: 'Pastéis de Belém',
    category: 'Gastronomía',
    zone: 'Belém',
    isFree: false,
    priceLabel: 'Desde 1,50 € / pastel',
    priceFrom: 1.5,
    duration: '20 min',
    image: '/images/actividades/pasteis-de-belem.webp',
    imageAlt: 'Cuatro pastéis de Belém sobre un plato junto a una caja de la pastelería',
    description: 'La pastelería original (desde 1837) donde probar el auténtico pastel de nata recién horneado.',
    savingTip: 'Pide los pasteles para llevar en el mostrador de la izquierda: te ahorras la cola de la zona de mesas.',
    officialUrl: 'https://pasteisdebelem.pt/',
    lastVerified: '2026-08-05',
  },
  {
    slug: 'tranvia-28',
    experiencia: {
      intro: 'No es una atracción turística: es una línea de transporte público que lleva funcionando desde 1914 y que resulta que atraviesa media Lisboa histórica. Los coches son los Remodelado de los años treinta, de madera, y siguen en servicio porque ningún tranvía moderno cabe por esas curvas.',
      queVeras: [
        'El recorrido completo: Campo de Ourique, Estrela, Chiado, Baixa, Sé, Alfama y Graça',
        'Curvas donde el tranvía pasa a centímetros de las fachadas y la gente aparta el brazo de la ventanilla',
        'Las cuestas de Graça, que explican mejor que cualquier mapa por qué Lisboa se llama la ciudad de las siete colinas',
        'El interior original de madera, con las manivelas de latón y los asientos abatibles',
      ],
      cuandoIr: 'A primera hora de la mañana o ya de noche. Entre las diez y las seis es cuando se convierte en una lata: colas largas en Martim Moniz, gente de pie y carteristas trabajando.',
      elError: 'Empezar en Martim Moniz, que es donde está la cola. Los que van sobrados suben una o dos paradas más adelante, o hacen el recorrido en sentido contrario desde Campo de Ourique, donde casi siempre hay sitio para sentarse.',
      comoLlegar: 'Pasa por Martim Moniz, Praça Luís de Camões y Campo de Ourique, entre otras. Sale más barato con tarjeta recargable que pagando a bordo.',
    },
    indexable: true,
    title: 'Tranvía 28',
    category: 'Experiencias',
    zone: 'Graça / Alfama / Baixa',
    isFree: false,
    priceLabel: '3,30 € a bordo (más barato con tarjeta Navegante)',
    priceFrom: 3.3,
    duration: '40 min',
    image: '/images/tranvia-28.jpg',
    description: 'El recorrido más icónico de Lisboa, subiendo y bajando las colinas de los barrios históricos.',
    savingTip: 'Súbete en Martim Moniz o Graça (hay menos cola) y paga el billete normal de tranvía con tarjeta Navegante (Zapping): sale bastante más barato que el billete a bordo o que un "tour" turístico por el mismo trayecto.',
    officialUrl: 'https://www.carris.pt/descubra/novo-tarifario-2026/',
    lastVerified: '2026-08-05',
  },
  {
    slug: 'lx-factory',
    experiencia: {
      intro: 'Un complejo industrial de 1846 —hubo hilaturas y luego una imprenta— que estuvo abandonado décadas y hoy es una calle de tiendas, estudios y restaurantes bajo el puente 25 de Abril. Se conservó la nave tal cual, con la estructura de hierro y los rótulos antiguos.',
      queVeras: [
        'La librería Ler Devagar, con estanterías de varios pisos montadas sobre la vieja rotativa',
        'El puente 25 de Abril justo encima, con el ruido del tráfico como banda sonora',
        'Arte urbano por las fachadas y los callejones interiores',
        'El mercado de los domingos, con puestos de segunda mano y diseño local',
      ],
      cuandoIr: 'Los domingos por el mercado, o cualquier tarde entre semana si prefieres verlo tranquilo. De noche cambia por completo y funciona como zona de copas.',
      elError: 'Ir a comer un sábado a las dos sin reservar. Los restaurantes de dentro se llenan y se acaba esperando de pie en una nave industrial, que no es lo mismo que esperar en una terraza.',
      comoLlegar: 'Tranvía 15E hasta Alcântara, o tren de cercanías hasta la estación de Alcântara-Mar.',
    },
    indexable: true,
    title: 'LX Factory',
    category: 'Cultura e Historia',
    zone: 'Alcântara',
    isFree: true,
    priceLabel: 'Gratis (pasear)',
    duration: '1-2 h',
    image: '/images/actividades/lx-factory-lisboa.webp',
    imageAlt: 'Calle empedrada de LX Factory con antiguos edificios industriales y comercios',
    description: 'Antigua fábrica reconvertida en arte urbano, tiendas de diseño, librerías y cafés con mucho ambiente.',
    savingTip: 'Entrar y pasear es gratis; ve a media tarde para la mejor luz de fotos sin gastar en las tiendas.',
  },
  {
    slug: 'elevador-santa-justa',
    experiencia: {
      intro: 'El Elevador de Santa Justa es un ascensor de hierro inaugurado en 1902 que une la Baixa con la zona del Carmo. A 23 de septiembre de 2026, CARRIS lo marca como cerrado temporalmente.',
      queVeras: [
        'La estructura de hierro del elevador desde la Rua do Ouro',
        'El entorno de la Baixa y el Largo do Carmo',
        'Las ruinas del Convento do Carmo, a pocos minutos a pie',
      ],
      cuandoIr: 'Ahora mismo no conviene organizar el día contando con la subida en cabina. Comprueba la página de CARRIS antes de ir porque el estado operativo puede cambiar.',
      elError: 'Ir esperando usar el elevador o su mirador sin comprobar el estado. CARRIS mantiene el elevador cerrado temporalmente y también publica el mirador como cerrado.',
      comoLlegar: 'Metro Baixa-Chiado o Rossio. La estructura está en la Rua do Ouro; la zona del Carmo se puede alcanzar a pie desde Chiado.',
    },
    indexable: true,
    title: 'Elevador de Santa Justa',
    category: 'Experiencias',
    zone: 'Baixa',
    isFree: false,
    priceLabel: 'Cerrado temporalmente',
    duration: '15 min',
    image: '/images/actividades/elevador-santa-justa-lisboa.webp',
    imageAlt: 'Elevador de Santa Justa y tejados de la Baixa de Lisboa',
    description: 'Ascensor histórico de hierro entre la Baixa y el Carmo, cerrado temporalmente según CARRIS.',
    savingTip: 'No compres ni organices una ruta contando con la subida hasta que CARRIS confirme la reapertura. Puedes llegar al Largo do Carmo caminando desde Chiado.',
    officialUrl: 'https://www.carris.pt/descubra/frota/elevador/',
    lastVerified: '2026-09-23',
    statusNote: 'CARRIS mantiene el Elevador de Santa Justa cerrado temporalmente. Su página de servicio también indica cierre temporal del mirador. Comprueba ambas antes de desplazarte específicamente para subir.',
  },
  {
    slug: 'oceanario-lisboa',
    experiencia: {
      intro: 'La exposición permanente gira alrededor de un acuario central de cinco millones de litros y cuatro hábitats —Atlántico, Pacífico, Índico y Océano Austral—. El Oceanário indica unas 8.000 animales en el conjunto de la exposición.',
      queVeras: [
        'El acuario central, que se observa desde distintos puntos del recorrido',
        'Cuatro hábitats que representan grandes ecosistemas oceánicos',
        'Exposiciones temporales además de la exposición permanente',
      ],
      cuandoIr: 'El precio cambia según la hora. La franja de 16:00 a 18:30 es actualmente la más barata para la entrada general; la última entrada es a las 19:00.',
      elError: 'Dar por hecho que el billete cuesta lo mismo todo el día. El Oceanário usa tarifas por franja horaria, así que comparar horas puede reducir el precio.',
      comoLlegar: 'Metro línea roja hasta Oriente y después a pie hasta la Doca dos Olivais, en Parque das Nações.',
    },
    indexable: true,
    title: 'Oceanário de Lisboa',
    category: 'Familia',
    zone: 'Parque das Nações',
    isFree: false,
    priceLabel: 'Adultos: 25,5-29,9 € según hora',
    priceFrom: 25.5,
    duration: '1.5-2 h',
    image: '/images/actividades/oceanario-de-lisboa.webp',
    imageAlt: 'Exterior del Oceanário de Lisboa visto desde el paseo del Parque das Nações',
    description: 'Acuario de cinco millones de litros con cuatro hábitats oceánicos en Parque das Nações.',
    savingTip: 'La web oficial anuncia un 5% de descuento para compra online con el código ONLINE5. Comprueba que la promoción siga activa antes de pagar.',
    officialUrl: 'https://oceanario.pt/planear-visita/',
    lastVerified: '2026-09-23',
    statusNote: 'Horario habitual: 10:00-20:00, última entrada a las 19:00. Los precios varían por franja horaria.',
  },
  {
    slug: 'sintra-dia-completo',
    experiencia: {
      intro: 'Sintra es una sierra con microclima propio a cuarenta minutos de Lisboa, y por eso la nobleza portuguesa se construyó ahí sus caprichos. El resultado es una concentración de palacios excéntricos entre bosque de niebla que no se parece a nada más en Portugal.',
      queVeras: [
        'El Palacio da Pena, de colores imposibles, encaramado sobre la sierra',
        'La Quinta da Regaleira y su pozo iniciático: una escalera de caracol de veintisiete metros hacia abajo, conectada con túneles',
        'El Castelo dos Mouros, murallas del siglo IX que se recorren por la cresta de la montaña',
        'El centro del pueblo, con las queijadas y los travesseiros que solo se hacen aquí',
      ],
      cuandoIr: 'Día completo, y entre semana si puedes. Un martes de octubre o noviembre es el ideal: poca gente, buena temperatura y el bosque con color. Los fines de semana de verano son directamente incómodos.',
      elError: 'Ir primero al Palacio da Pena porque es el famoso. Es justo cuando la cola es peor. El orden que funciona es empezar por la Quinta da Regaleira en cuanto abre y subir a Pena hacia media mañana, cuando ya ha bajado.',
      comoLlegar: 'Tren desde la estación de Rossio, en pleno centro de Lisboa, cada veinte o treinta minutos. Dentro de Sintra, el autobús 434 sube a los palacios: la alternativa es una cuesta larga a pie.',
    },
    indexable: true,
    title: 'Sintra: Palacio da Pena + Quinta da Regaleira',
    category: 'Excursiones',
    zone: 'Sintra',
    isFree: false,
    priceLabel: 'Consulta el precio actualizado (Pena y Regaleira se pagan por separado)',
    duration: 'Día completo',
    image: '/images/sintra-palacio-turistas.jpg',
    description: 'Excursión clásica desde Lisboa: palacios de cuento, jardines y la sierra más verde de la región.',
    savingTip: 'Ve en tren desde Rossio (el billete sencillo ronda los 2,50 €, muy por debajo de los 5 € ida y vuelta) en vez de un tour organizado: mismo destino, una fracción del precio. Palácio da Pena y Quinta da Regaleira venden entrada por separado y sus tarifas cambian con cierta frecuencia.',
    officialUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/bilhetes-palacio-da-pena/',
    lastVerified: '2026-08-05',
  },
  {
    slug: 'cascais-cabo-da-roca',
    experiencia: {
      intro: 'Cascais combina centro histórico, paseo marítimo y playas. Si quieres añadir Cabo da Roca, reserva más tiempo: está fuera del centro de Cascais y se llega por carretera hacia la costa de Sintra.',
      queVeras: [
        'El centro histórico y el paseo marítimo de Cascais',
        'La Boca do Inferno, en la costa al oeste del centro',
        'Cabo da Roca y sus acantilados sobre el Atlántico',
        'Las playas del litoral de Cascais',
      ],
      cuandoIr: 'Si vas a combinar Cascais y Cabo da Roca, piensa en un día completo o en una jornada amplia. El segundo tramo depende del horario del autobús.',
      elError: 'Usar guías antiguas que todavía hablan de Scotturb. El transporte metropolitano cambió: la línea 1624 de Carris Metropolitana conecta Cascais con Portela de Sintra pasando por la zona de Cabo da Roca.',
      comoLlegar: 'Desde Cais do Sodré, el tren de la línea de Cascais tarda alrededor de 40 minutos según Visit Cascais. Desde el terminal de Cascais, consulta la línea 1624 de Carris Metropolitana para continuar hacia Cabo da Roca.',
    },
    indexable: true,
    title: 'Cascais y Cabo da Roca',
    category: 'Excursiones',
    zone: 'Cascais',
    isFree: false,
    priceLabel: 'Tren + bus, consulta la tarifa actual',
    duration: 'Día completo',
    image: '/images/actividades/cascais-centro-historico.webp',
    imageAlt: 'Centro histórico de Cascais con su calçada portuguesa',
    description: 'Excursión desde Lisboa que combina Cascais con la costa de Cabo da Roca.',
    savingTip: 'Puedes hacer el recorrido por tu cuenta con tren y autobús. Revisa los horarios del 1624 el mismo día antes de decidir cuánto tiempo pasar en Cascais.',
    officialUrl: 'https://carrismetropolitana.pt/lines/1624',
    lastVerified: '2026-09-23',
  },
  {
    slug: 'fado-en-alfama',
    experiencia: {
      intro: 'El fado combina música y poesía y se practica en distintas comunidades de Lisboa. La UNESCO lo inscribió en 2011 como Patrimonio Cultural Inmaterial de la Humanidad, y el Museu do Fado sitúa sus raíces en los barrios históricos de la ciudad.',
      queVeras: [
        'Una voz acompañada habitualmente por guitarra portuguesa y guitarra acústica',
        'Casas de fado profesionales y espacios de asociaciones donde también se canta de forma no comercial',
        'Un género que sigue cambiando y que no se reduce a una sola idea de “saudade”',
      ],
      cuandoIr: 'Los horarios y formatos cambian según la casa. Comprueba antes si la sesión incluye cena, consumo mínimo o solo espectáculo, y a qué hora empieza realmente el fado.',
      elError: 'Pensar que todas las casas ofrecen la misma experiencia. Hay formatos distintos, precios distintos y espacios más orientados a cena o a escucha musical.',
      comoLlegar: 'Alfama se recorre a pie desde la Baixa y también queda cerca de Santa Apolónia. Elige la casa primero y después calcula el acceso.',
    },
    indexable: true,
    title: 'Fado en Alfama',
    category: 'Experiencias',
    zone: 'Alfama',
    isFree: false,
    priceLabel: 'Variable según la casa',
    duration: '2 h',
    image: '/images/fado-tasca-noche.jpg',
    description: 'Fado en uno de los barrios históricos de Lisboa, con formatos que van de casas profesionales a espacios comunitarios.',
    savingTip: 'Usa el Roteiro do Fado del Museu do Fado para localizar espacios y confirma después el programa y las condiciones directamente con cada casa.',
    officialUrl: 'https://www.museudofado.pt/',
    lastVerified: '2026-09-23',
  },
  {
    slug: 'crucero-atardecer-tajo',
    experiencia: {
      intro: 'Lisboa se construyó mirando al río, así que verla desde el agua es verla como estaba pensada. El recorrido pasa por delante de la Baixa, cruza bajo el puente 25 de Abril y llega a la altura de Belém.',
      queVeras: [
        'La ciudad entera desplegada en horizontal, algo que no se aprecia desde ningún mirador',
        'El puente 25 de Abril desde abajo, que es cuando se entiende su tamaño',
        'La Torre de Belém desde el agua, que es como se pensó para ser vista',
        'La luz del atardecer sobre las fachadas, que es el motivo de hacerlo a esa hora',
      ],
      cuandoIr: 'Saliendo hora y media antes de la puesta de sol, para coger la luz buena y el momento del atardecer sobre el agua.',
      elError: 'Cogerlo al mediodía porque cuadraba mejor en el horario. Es el mismo recorrido con la mitad de la gracia: la luz vertical aplana la ciudad y las fotos salen sin relieve.',
      comoLlegar: 'La mayoría de las salidas son de los muelles de Cais do Sodré o Belém, según el operador.',
    },
    indexable: true,
    title: 'Paseo en barco al atardecer por el Tajo',
    category: 'Experiencias',
    zone: 'Río Tajo',
    isFree: false,
    priceLabel: 'Desde 15-20 €',
    priceFrom: 15,
    duration: '1 h',
    image: '/images/actividades/passeio-barco-rio-tejo-lisboa.webp',
    imageAlt: 'Paseo en barco por el río Tajo a su paso por Lisboa',
    description: 'Vistas de la ciudad, el puente 25 de Abril y el Cristo Rei desde el agua, con la luz del atardecer.',
    savingTip: 'Reserva el horario justo antes de la puesta de sol: mismo precio, mejores fotos que en horario de mediodía.',
  },
  {
    slug: 'free-walking-tour-centro',
    experiencia: {
      intro: 'Un recorrido a pie por el centro histórico con guía local, sin precio fijo: se paga al final lo que uno considere. Es la forma más eficiente de entender la ciudad el primer día, porque te da el contexto que hace que todo lo demás del viaje cunda más.',
      queVeras: [
        'El centro histórico recorrido con criterio, no siguiendo un mapa a ciegas',
        'El contexto del terremoto de 1755, que explica por qué la Baixa es cuadriculada y Alfama no',
        'Recomendaciones de alguien que vive allí, que suele ser lo más valioso del tour',
      ],
      cuandoIr: 'El primer día, cuanto antes. Un tour el último día es una curiosidad; el primero, cambia cómo ves el resto del viaje.',
      elError: 'Dejarlo para cuando ya has recorrido todo por tu cuenta. Y confundir gratis con sin coste: el guía vive de la propina, y lo habitual es dejar algo acorde a lo que ha durado.',
      comoLlegar: 'Los puntos de salida más habituales son Praça do Comércio, Rossio o Praça Luís de Camões, según la ruta.',
    },
    indexable: true,
    title: 'Free Walking Tour por el centro',
    category: 'Cultura e Historia',
    zone: 'Baixa / Chiado',
    isFree: true,
    priceLabel: 'Gratis (propina)',
    duration: '2.5-3 h',
    image: '/images/lisboa-originales/rua-augusta-arco-lisboa.webp',
    imageAlt: 'Arco da Rua Augusta visto desde la Baixa de Lisboa',
    description: 'Recorrido guiado a pie por la historia de la Baixa y el Chiado, con guías locales que viven de las propinas. La disponibilidad y los horarios dependen de la fecha que elijas.',
    savingTip: 'No tiene coste fijo: al final paga lo que consideres justo (5-10 € por persona es lo habitual).',
    affiliateCategory: 'imprescindible',
  },
  {
    slug: 'jardim-estrela-principe-real',
    experiencia: {
      intro: 'Dos jardines a quince minutos andando uno del otro, en la zona más residencial y tranquila del centro. Es donde se ve a los lisboetas haciendo lo que hacen un domingo, que es bastante distinto de lo que hace un turista.',
      queVeras: [
        'El cedro enorme de Príncipe Real, con las ramas apoyadas en una estructura metálica que forma una cúpula de sombra',
        'El quiosco del Jardim da Estrela y su estanque con patos',
        'La Basílica da Estrela justo enfrente, con su cúpula blanca',
        'El mercado biológico de Príncipe Real los sábados',
      ],
      cuandoIr: 'Un domingo por la mañana, que es cuando los dos jardines están llenos de gente del barrio.',
      elError: 'Tratarlos como una parada de diez minutos entre monumentos. Son jardines para sentarse, no para fotografiar: si vas con prisa, no verás lo que tienen.',
      comoLlegar: 'Metro Rato para Príncipe Real. Al Jardim da Estrela se llega en tranvía 25 o 28, o andando desde Rato.',
    },
    indexable: true,
    title: 'Jardim da Estrela y Príncipe Real',
    category: 'Naturaleza',
    zone: 'Estrela / Príncipe Real',
    isFree: true,
    priceLabel: 'Gratis',
    duration: '1 h',
    image: '/images/actividades/jardim-da-estrela-coreto.webp',
    imageAlt: 'Quiosco de música del Jardim da Estrela, en Lisboa',
    description: 'Dos de los jardines más bonitos de Lisboa, con quioscos de café, sombra y ambiente local tranquilo.',
    savingTip: 'Lleva algo para picar y siéntate en el césped en vez de en la terraza del kiosco: el ambiente es el mismo.',
  },
  {
    slug: 'parque-eduardo-vii',
    experiencia: {
      intro: 'El parque más grande del centro de Lisboa, en cuesta desde la Praça Marquês de Pombal hacia arriba. Su gracia no es el parque en sí, sino que desde lo alto se ve la Avenida da Liberdade en línea recta hasta el río.',
      queVeras: [
        'La perspectiva desde arriba: la avenida, la Baixa y el Tajo alineados',
        'Los parterres geométricos de boj, recortados en un patrón que recuerda a la calçada portuguesa',
        'La Estufa Fria, un invernadero con plantas subtropicales y estanques',
      ],
      cuandoIr: 'Por la mañana temprano o al atardecer. No hay sombra en la parte central y al mediodía en verano no se está bien.',
      elError: 'Subir la cuesta entera para descubrir que lo que querías ver era la vista, que está arriba. Se sube en metro hasta São Sebastião y se baja andando: la misma vista, cuesta abajo.',
      comoLlegar: 'Metro Marquês de Pombal, al pie del parque, o São Sebastião, arriba.',
    },
    indexable: true,
    title: 'Parque Eduardo VII',
    category: 'Naturaleza',
    zone: 'Marquês de Pombal',
    isFree: true,
    priceLabel: 'Gratis',
    duration: '30 min',
    image: '/images/actividades/parque-eduardo-vii-lisboa.webp',
    imageAlt: 'Parterres del Parque Eduardo VII descendiendo hacia la avenida da Liberdade',
    description: 'Parque urbano con vistas en línea recta hasta el río, ideal para una pausa entre el centro y las Avenidas Novas.',
    savingTip: 'Sube hasta el mirador superior del parque: misma vista que muchos miradores de pago, sin coste.',
  },
  {
    slug: 'tasca-tradicional',
    experiencia: {
      intro: 'La tasca es el comedor de barrio portugués: mantel de papel, carta corta, vino de la casa a granel y un menú del día que cambia según lo que hubiera en el mercado. No es una experiencia gastronómica: es donde come la gente que trabaja cerca.',
      queVeras: [
        'El prato do dia escrito a mano en una pizarra, que suele ser lo mejor y lo más barato',
        'Raciones considerablemente más grandes de lo que esperas',
        'Los couvert de la mesa —pan, aceitunas, queso— que no son gratis y se cobran si los tocas',
        'Televisión de fondo y clientes que llevan años sentándose en la misma mesa',
      ],
      cuandoIr: 'Al mediodía, entre las doce y media y las dos. El menú del día solo existe a esa hora y es cuando el sitio tiene sentido.',
      elError: 'Buscarla en las calles principales del centro. Las que quedan de verdad están en Mouraria, Arroios, Campo de Ourique o Graça, a diez minutos andando de donde están todos.',
      comoLlegar: 'Metro hasta Martim Moniz, Arroios o Rato, y andar un poco por las calles laterales.',
    },
    indexable: true,
    title: 'Comer en una tasca tradicional',
    category: 'Gastronomía',
    zone: 'Varias zonas',
    isFree: false,
    priceLabel: 'Desde 8-12 € el menú',
    priceFrom: 8,
    duration: '1 h',
    image: '/images/tasca-da-graca.jpg',
    description: 'El "prato do dia" (plato del día) en una tasca de barrio es la forma más auténtica y barata de comer bien en Lisboa.',
    savingTip: 'Aléjate dos calles de las zonas turísticas (Baixa, Alfama central): el mismo plato puede costar hasta 3 veces menos.',
  },
  {
    slug: 'cristo-rei',
    experiencia: {
      intro: 'El monumento está en Almada, al otro lado del Tajo. Desde allí se ve Lisboa de frente, con el puente 25 de Abril y el río en el mismo encuadre. El recinto exterior puede visitarse sin pagar; la subida al monumento tiene entrada propia.',
      queVeras: [
        'Lisboa desde la margen sur, con el puente 25 de Abril delante',
        'El recinto del santuario y su mirador exterior de acceso libre',
        'La terraza del monumento, incluida en la entrada de subida',
      ],
      cuandoIr: 'Entre abril y septiembre el santuario abre de 10:00 a 19:00; de octubre a marzo, de 10:00 a 18:00. La última subida es 20 minutos antes del cierre, así que conviene comprobar la hora si quieres ir al final de la tarde.',
      elError: 'Llegar pensando que la entrada al monumento se compra online. El propio Santuario indica que esos billetes se venden presencialmente y que no tiene acuerdos con puntos de venta online para ese acceso.',
      comoLlegar: 'Una opción práctica desde Lisboa es cruzar en ferry hasta Cacilhas y continuar en transporte local hasta el santuario. Comprueba el recorrido del día antes de salir.',
    },
    indexable: true,
    title: 'Cristo Rei (vía ferry)',
    category: 'Miradouros',
    zone: 'Almada',
    isFree: false,
    priceLabel: '+13 años: 10 € · 8-12: 3 € · 0-7: gratis',
    priceFrom: 10,
    duration: '1.5 h',
    image: '/images/actividades/cristo-rei-ponte-25-abril.webp',
    imageAlt: 'Cristo Rei y el puente 25 de Abril sobre el Tajo',
    description: 'Santuario y miradores en Almada con una vista frontal de Lisboa, el puente 25 de Abril y el Tajo.',
    savingTip: 'Si solo quieres las vistas desde el recinto exterior, la entrada es libre. Solo necesitas billete para acceder al monumento y a su terraza.',
    officialUrl: 'https://cristorei.pt/visitas/bilheteira/',
    lastVerified: '2026-09-23',
    statusNote: 'Billetes del monumento solo en el propio Santuario. Horario: 10:00-19:00 de abril a septiembre y 10:00-18:00 de octubre a marzo; última subida 20 minutos antes del cierre.',
  },
];

export const activitySlugs = activities.map((a) => a.slug);
