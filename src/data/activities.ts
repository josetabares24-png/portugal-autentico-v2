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
    indexable: false,
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
    indexable: false,
    title: 'Miradouro da Senhora do Monte',
    category: 'Miradouros',
    zone: 'Graça',
    isFree: true,
    priceLabel: 'Gratis',
    duration: '20 min',
    image: '/images/miradouro-atardecer.jpg',
    description: 'El mirador más alto de la ciudad, con la vista más completa de Lisboa y mucha menos gente que los miradores de Alfama.',
    savingTip: 'Súbete en el tranvía 28 hasta Graça y camina 5 minutos en vez de pagar un tour panorámico.',
  },
  {
    slug: 'miradouro-portas-do-sol',
    indexable: false,
    title: 'Miradouro das Portas do Sol',
    category: 'Miradouros',
    zone: 'Alfama',
    isFree: true,
    priceLabel: 'Gratis',
    duration: '15 min',
    image: '/images/mirador-tajo-amarras-atardecer.jpg',
    description: 'Vistas abiertas al río y al barrio de Alfama, con bancos para sentarte y un kiosco de bebidas justo al lado.',
    savingTip: 'Pide un café o vino en el kiosco del mirador en vez de en una terraza turística cercana: mismo paisaje, mitad de precio.',
  },
  {
    slug: 'castelo-sao-jorge',
    indexable: false,
    title: 'Castelo de São Jorge',
    category: 'Cultura e Historia',
    zone: 'Alfama / Castelo',
    isFree: false,
    priceLabel: 'Desde 15 €',
    priceFrom: 15,
    duration: '1.5-2 h',
    description: 'Castillo medieval con murallas, torres y la mejor panorámica de 360º sobre la ciudad y el río.',
    savingTip: 'Compra la entrada online para evitar la cola; los jardines exteriores con vistas son gratuitos sin entrar al recinto.',
    officialUrl: 'https://castelodesaojorge.pt/en/plan-your-visit/choose-your-ticket/',
    lastVerified: '2026-08-05',
  },
  {
    slug: 'mosteiro-jeronimos',
    indexable: false,
    title: 'Mosteiro dos Jerónimos',
    category: 'Cultura e Historia',
    zone: 'Belém',
    isFree: false,
    priceLabel: 'Desde 18 €',
    priceFrom: 18,
    duration: '1 h',
    description: 'Joya del manuelino portugués; el claustro es la parte de pago, considerada imprescindible por su detalle.',
    savingTip: 'La iglesia del monasterio (con la tumba de Vasco da Gama) es gratuita, solo se paga la entrada al claustro. Los domingos hasta las 14h la entrada al claustro también es gratuita.',
    officialUrl: 'https://www.museusemonumentos.pt/pt/museus-e-monumentos/mosteiro-dos-jeronimos-e-capela-de-sao-jeronimo',
    lastVerified: '2026-08-05',
  },
  {
    slug: 'torre-de-belem',
    indexable: false,
    title: 'Torre de Belém',
    category: 'Cultura e Historia',
    zone: 'Belém',
    isFree: false,
    priceLabel: 'Desde 15 €',
    priceFrom: 15,
    duration: '45 min',
    description: 'Torre-fortaleza junto al río, símbolo de la Era de los Descubrimientos y Patrimonio de la Humanidad.',
    savingTip: 'Combina la visita con los Jerónimos en la misma mañana: están a 10 minutos a pie y ahorras un desplazamiento. Reserva con antelación: desde la reapertura de mayo de 2026 el acceso es por franjas horarias limitadas (unas 900 entradas al día).',
    officialUrl: 'https://www.museusemonumentos.pt/pt/museus-e-monumentos/torre-de-belem',
    lastVerified: '2026-08-05',
    statusNote: 'Reabierta el 26 de mayo de 2026 tras un año de obras (PRR), con nuevo sistema de acceso por franjas horarias para reducir las colas.',
  },
  {
    slug: 'pasteis-de-belem',
    indexable: false,
    title: 'Pastéis de Belém',
    category: 'Gastronomía',
    zone: 'Belém',
    isFree: false,
    priceLabel: 'Desde 1,50 € / pastel',
    priceFrom: 1.5,
    duration: '20 min',
    description: 'La pastelería original (desde 1837) donde probar el auténtico pastel de nata recién horneado.',
    savingTip: 'Pide los pasteles para llevar en el mostrador de la izquierda: te ahorras la cola de la zona de mesas.',
    officialUrl: 'https://pasteisdebelem.pt/',
    lastVerified: '2026-08-05',
  },
  {
    slug: 'tranvia-28',
    indexable: false,
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
    indexable: false,
    title: 'LX Factory',
    category: 'Cultura e Historia',
    zone: 'Alcântara',
    isFree: true,
    priceLabel: 'Gratis (pasear)',
    duration: '1-2 h',
    description: 'Antigua fábrica reconvertida en arte urbano, tiendas de diseño, librerías y cafés con mucho ambiente.',
    savingTip: 'Entrar y pasear es gratis; ve a media tarde para la mejor luz de fotos sin gastar en las tiendas.',
  },
  {
    slug: 'elevador-santa-justa',
    indexable: false,
    title: 'Elevador de Santa Justa',
    category: 'Experiencias',
    zone: 'Baixa',
    isFree: false,
    priceLabel: 'Consulta si está operativo antes de ir',
    duration: '15 min',
    description: 'Ascensor neogótico de hierro que conecta la Baixa con el Chiado, con un mirador en la parte superior.',
    savingTip: 'Sube gratis a pie por la calle de atrás hasta la pasarela del mirador; el ascensor en sí ha estado cerrado por revisiones de seguridad, así que confirma su estado antes de planificar la subida en cabina.',
    officialUrl: 'https://www.carris.pt/viaje/alteracoes-de-servico/reabertura-do-miradouro-de-santa-justa/',
    lastVerified: '2026-08-05',
    statusNote: 'Cerrado desde el accidente del Elevador da Glória (septiembre de 2025) mientras Carris revisa la seguridad de sus funiculares y ascensores. Hay comités técnicos que lo dan por seguro y noticias de una reapertura progresiva en 2026, pero no hay confirmación de que esté operando con normalidad: comprueba el estado en Carris antes de ir.',
  },
  {
    slug: 'oceanario-lisboa',
    indexable: false,
    title: 'Oceanário de Lisboa',
    category: 'Familia',
    zone: 'Parque das Nações',
    isFree: false,
    priceLabel: 'Desde 25 €',
    priceFrom: 25,
    duration: '1.5-2 h',
    image: '/images/parque-nacoes-torres-atardecer.jpg',
    description: 'Uno de los acuarios más grandes de Europa, ideal para ir con niños un día de lluvia.',
    savingTip: 'Compra la entrada online con antelación: el precio varía según fecha y franja horaria (hasta unos 31 € en temporada alta), así que comparar días puede ahorrarte varios euros.',
    officialUrl: 'https://tickets.oceanario.pt/',
    lastVerified: '2026-08-05',
  },
  {
    slug: 'sintra-dia-completo',
    indexable: false,
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
    indexable: false,
    title: 'Cascais y Cabo da Roca',
    category: 'Excursiones',
    zone: 'Cascais',
    isFree: false,
    priceLabel: 'Tren + bus, consulta el precio actualizado',
    duration: 'Medio día',
    description: 'Paseo marítimo, centro histórico y el punto más occidental de Europa continental con vistas al Atlántico.',
    savingTip: 'El tren Lisboa-Cascais (billete sencillo de unos 2,50 €) sale cada 20 minutos: no necesitas reservar un tour para llegar. Para Cabo da Roca desde Cascais se añade el bus de Scotturb, con tarifa aparte.',
    officialUrl: 'https://www.cp.pt/passageiros/pt/consultar-horarios/precos/precos-zonas',
    lastVerified: '2026-08-05',
  },
  {
    slug: 'fado-en-alfama',
    indexable: false,
    title: 'Fado en Alfama',
    category: 'Experiencias',
    zone: 'Alfama',
    isFree: false,
    priceLabel: 'Variable (desde consumo mínimo)',
    duration: '2 h',
    image: '/images/fado-tasca-noche.jpg',
    description: 'Música tradicional portuguesa en vivo, cargada de melancolía (saudade) e historia.',
    savingTip: 'Busca tascas de "fado vadio" (espontáneo, sin reserva ni entrada): mismo ambiente que los shows turísticos de 40 €+, solo pagas lo que consumes.',
  },
  {
    slug: 'crucero-atardecer-tajo',
    indexable: false,
    title: 'Paseo en barco al atardecer por el Tajo',
    category: 'Experiencias',
    zone: 'Río Tajo',
    isFree: false,
    priceLabel: 'Desde 15-20 €',
    priceFrom: 15,
    duration: '1 h',
    image: '/images/mirador-tajo-amarras-atardecer.jpg',
    description: 'Vistas de la ciudad, el puente 25 de Abril y el Cristo Rei desde el agua, con la luz del atardecer.',
    savingTip: 'Reserva el horario justo antes de la puesta de sol: mismo precio, mejores fotos que en horario de mediodía.',
  },
  {
    slug: 'free-walking-tour-centro',
    indexable: false,
    title: 'Free Walking Tour por el centro',
    category: 'Cultura e Historia',
    zone: 'Baixa / Chiado',
    isFree: true,
    priceLabel: 'Gratis (propina)',
    duration: '2.5-3 h',
    image: '/images/lisboa-originales/rua-augusta-arco-lisboa.webp',
    imageAlt: 'Arco da Rua Augusta visto desde la Baixa de Lisboa',
    description: 'Recorrido guiado a pie por la historia de la Baixa y el Chiado, con guías locales que viven de las propinas.',
    savingTip: 'No tiene coste fijo: al final paga lo que consideres justo (5-10 € por persona es lo habitual).',
  },
  {
    slug: 'jardim-estrela-principe-real',
    indexable: false,
    title: 'Jardim da Estrela y Príncipe Real',
    category: 'Naturaleza',
    zone: 'Estrela / Príncipe Real',
    isFree: true,
    priceLabel: 'Gratis',
    duration: '1 h',
    description: 'Dos de los jardines más bonitos de Lisboa, con quioscos de café, sombra y ambiente local tranquilo.',
    savingTip: 'Lleva algo para picar y siéntate en el césped en vez de en la terraza del kiosco: el ambiente es el mismo.',
  },
  {
    slug: 'parque-eduardo-vii',
    indexable: false,
    title: 'Parque Eduardo VII',
    category: 'Naturaleza',
    zone: 'Marquês de Pombal',
    isFree: true,
    priceLabel: 'Gratis',
    duration: '30 min',
    description: 'Parque urbano con vistas en línea recta hasta el río, ideal para una pausa entre el centro y las Avenidas Novas.',
    savingTip: 'Sube hasta el mirador superior del parque: misma vista que muchos miradores de pago, sin coste.',
  },
  {
    slug: 'tasca-tradicional',
    indexable: false,
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
    indexable: false,
    title: 'Cristo Rei (vía ferry)',
    category: 'Miradouros',
    zone: 'Almada',
    isFree: false,
    priceLabel: 'Ferry + entrada al mirador, consulta el precio actualizado',
    duration: '1.5 h',
    description: 'Mirador en la otra orilla del Tajo con la vista más completa de Lisboa, el puente 25 de Abril y el río.',
    savingTip: 'El propio cruce en ferry desde Cais do Sodré (un par de euros con tarjeta Navegante) ya es parte de la experiencia: mucho más barato que un tour panorámico en barco. Solo se paga por subir al mirador del monumento; el recinto exterior es gratuito.',
    officialUrl: 'https://cristorei.pt/visitas/bilheteira/',
    lastVerified: '2026-08-05',
  },
];

export const activitySlugs = activities.map((a) => a.slug);
