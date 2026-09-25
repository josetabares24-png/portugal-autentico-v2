export type TravelerGuideLink = {
  href: string;
  label: string;
  description?: string;
};

export type TravelerGuideSection = {
  eyebrow?: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: TravelerGuideLink[];
};

export type TravelerGuideTool = {
  eyebrow: string;
  title: string;
  intro: string;
  columns: [string, string, string];
  rows: Array<{
    primary: string;
    secondary: string;
    tertiary: string;
    href?: string;
  }>;
};

export type TravelerGuideBookingSection = {
  eyebrow: string;
  title: string;
  intro: string;
  productIds: string[];
};

export type TravelerGuide = {
  slug: string;
  portalId: string;
  title: string;
  shortTitle: string;
  portalQuestion: string;
  eyebrow: string;
  portalSubtitle: string;
  portalTopics: string[];
  heroImage: string;
  heroAlt: string;
  lead: string;
  promise: string;
  decisionPrompt: string;
  decisions: Array<{ title: string; text: string; href?: string }>;
  practicalTool: TravelerGuideTool;
  humanQuestions: Array<{ question: string; answer: string }>;
  sections: TravelerGuideSection[];
  bookingSection?: TravelerGuideBookingSection;
  closingTitle: string;
  closingText: string;
};

export const travelerGuides: TravelerGuide[] = [
  {
    slug: 'rutas',
    portalId: 'routes',
    title: 'Rutas y guías para organizar Lisboa',
    shortTitle: 'Rutas por días',
    portalQuestion: '¿Cuántos días tienes?',
    eyebrow: 'Cómo entender Lisboa',
    portalSubtitle: 'Empieza por los días que tienes, no por una lista infinita de lugares.',
    portalTopics: ['1 día', '2 días', '3 días', '4–5 días', '1 semana', 'lluvia', 'con niños'],
    heroImage: '/images/lisboa-originales/alfama-rua-da-adica-lisboa.jpg',
    heroAlt: 'Calle de Alfama descendiendo entre fachadas tradicionales de Lisboa',
    lead:
      'Lisboa se organiza mejor por tiempo y por zonas. Si empiezas intentando encajar monumentos aislados, terminas cruzando la ciudad varias veces y disfrutando menos.',
    promise:
      'Esta guía te ayuda a decidir qué cabe de verdad en tu viaje y qué conviene dejar para otra vez.',
    decisionPrompt: '¿Cuánto tiempo tienes?',
    decisions: [
      { title: 'Sólo 1 día', text: 'Prioriza centro histórico, Alfama o Belém; no intentes meter Sintra en el mismo día.', href: '/itinerarios/lisboa-1-dia-lo-esencial' },
      { title: '2–3 días', text: 'Ya puedes separar zonas y dejar un bloque completo para Belém o una excursión.', href: '/itinerarios' },
      { title: '4–5 días', text: 'Empieza a tener sentido combinar Lisboa con Sintra y barrios menos obvios.', href: '/blog/lisboa-en-4-dias' },
      { title: 'Una semana', text: 'Puedes bajar el ritmo y añadir costa, museos y días de lluvia sin rehacer todo el viaje.', href: '/blog/lisboa-en-7-dias' },
    ],
    practicalTool: {
      eyebrow: 'Una ruta realista',
      title: 'Reparte el viaje antes de llenar la agenda',
      intro: 'El número de días cambia el ritmo, no sólo la cantidad de lugares. Esta es una base que deja margen para caminar, comer y cambiar de idea.',
      columns: ['Tiempo', 'Ritmo', 'Una buena base'],
      rows: [
        { primary: '1 día', secondary: 'Selectivo', tertiary: 'Baixa y Alfama, o Belém si es tu prioridad. No las tres zonas a la carrera.', href: '/itinerarios/lisboa-1-dia-lo-esencial' },
        { primary: '2–3 días', secondary: 'Equilibrado', tertiary: 'Centro histórico, Alfama y Belém en bloques separados. Sintra sólo con un día propio.', href: '/itinerarios' },
        { primary: '4–5 días', secondary: 'Con pausas', tertiary: 'Añade Sintra, un museo o barrios menos obvios sin sacrificar sobremesas y miradores.', href: '/blog/lisboa-en-4-dias' },
        { primary: '1 semana', secondary: 'Más local', tertiary: 'Alterna días intensos con costa, mercados, lluvia o una mañana sin reservas.', href: '/blog/lisboa-en-7-dias' },
      ],
    },
    humanQuestions: [
      {
        question: '¿Puedo ver Lisboa y Sintra en el mismo día?',
        answer: 'Poder, puedes. Disfrutar de las dos, bastante menos. Si sólo tienes un día, quédate en Lisboa; Sintra funciona mejor cuando le das su propio día.',
      },
      {
        question: '¿Cuántas cosas caben de verdad en una jornada?',
        answer: 'Dos zonas bien conectadas y una visita con horario suelen ser una base razonable. El resto debería poder moverse sin romperte el día.',
      },
      {
        question: '¿Tengo que reservarlo todo?',
        answer: 'No. Reserva lo que tenga hora, aforo o traslado complicado. Deja paseos, miradores y comidas sencillas con margen para improvisar.',
      },
    ],
    sections: [
      {
        eyebrow: 'Primero',
        title: 'Divide la ciudad antes de repartir las horas',
        paragraphs: [
          'Baixa y Chiado forman un bloque natural para una primera jornada. Alfama y Graça funcionan mejor cuando aceptas caminar, parar y mirar la ciudad desde arriba. Belém merece varias horas porque sus principales visitas están concentradas, pero no pegadas al centro.',
          'La idea no es convertir Lisboa en una agenda militar. Es evitar trayectos innecesarios y dejar espacio para que una calle, un mirador o una comida cambien el plan.',
        ],
        links: [
          { href: '/blog/barrios-imprescindibles', label: 'Cómo se reparten los barrios', description: 'Una forma sencilla de entender qué zonas combinan bien.' },
          { href: '/blog/lisboa-cuando-llueve', label: 'Qué hacer si llueve', description: 'Cómo mover el día sin perderlo por completo.' },
        ],
      },
      {
        eyebrow: 'Después',
        title: 'Pon primero lo que tiene horario o traslado',
        paragraphs: [
          'Sintra, una entrada con hora o una visita lejos del centro deberían ordenar el día. El resto puede construirse alrededor. Eso reduce el riesgo de pasar una mañana mirando el reloj.',
        ],
        bullets: [
          'Reservas con hora: colócalas primero.',
          'Excursiones: decide si merecen un día completo.',
          'Miradores y paseos: déjalos como bloques más flexibles.',
          'Comidas: no cruces media ciudad sólo por un restaurante salvo que sea el plan principal.',
        ],
        links: [
          { href: '/blog/sintra-desde-lisboa', label: 'Sintra desde Lisboa' },
          { href: '/comprar-entradas', label: 'Entradas y reservas' },
        ],
      },
      {
        eyebrow: 'Regla útil',
        title: 'Una buena ruta también sabe qué dejar fuera',
        paragraphs: [
          'Para una primera visita prefiero una Lisboa que puedas recordar a una Lisboa que sólo puedas decir que tachaste. Si al final del día recuerdas más traslados que lugares, la ruta estaba demasiado cargada.',
        ],
      },
    ],
    bookingSection: {
      eyebrow: 'Sólo si te quita trabajo',
      title: 'Dos formas de simplificar Sintra',
      intro:
        'Puedes organizarla por tu cuenta. Estas opciones tienen sentido cuando prefieres asegurar la entrada principal o quitarte de encima los traslados y el orden de las visitas.',
      productIds: ['sintra-completa', 'sintra-palacio-pena'],
    },
    closingTitle: 'Si no sabes por dónde empezar',
    closingText: 'Empieza por el número de días. Después elige zonas. Y sólo entonces añade entradas, comidas y excursiones.',
  },
  {
    slug: 'movilidad',
    portalId: 'mobility',
    title: 'Cómo moverse por Lisboa sin perder tiempo',
    shortTitle: 'Cómo moverte',
    portalQuestion: '¿Cómo te vas a mover?',
    eyebrow: 'Transportes, tarjetas, aeropuerto y atajos',
    portalSubtitle: 'Metro, tranvías, billetes y cuándo caminar tiene más sentido.',
    portalTopics: ['Metro', 'Tranvías', 'Navegante', 'Aeropuerto', 'Caminar', 'Apps', 'Atajos'],
    heroImage: '/images/lisboa-originales/tranvia-turistico-baixa-lisboa-01.webp',
    heroAlt: 'Tranvía amarillo circulando por la Baixa de Lisboa',
    lead:
      'Lisboa tiene una red de transporte sencilla de usar una vez que entiendes dos cosas: qué medio resuelve mejor cada trayecto y cuánto desnivel hay entre donde estás y donde quieres llegar.',
    promise:
      'Aquí ordenamos las opciones para que no uses el tranvía como si fuera metro ni conviertas cada trayecto corto en una subida innecesaria.',
    decisionPrompt: '¿Qué necesitas resolver ahora?',
    decisions: [
      { title: 'Llegar desde el aeropuerto', text: 'Compara metro, taxi y apps según equipaje, hora y alojamiento.', href: '/blog/aeropuerto-lisboa-al-centro' },
      { title: 'Entender el metro', text: 'Líneas, conexiones y cuándo es la opción más previsible.', href: '/blog/metro-lisboa-guia' },
      { title: 'Elegir tarjeta', text: 'Navegante, títulos y qué comprar según el uso real que harás.', href: '/blog/tarjeta-navegante-lisboa' },
      { title: 'Subir al tranvía 28', text: 'Úsalo como experiencia, no como solución universal para moverte.', href: '/blog/tram-28-historia-guia' },
    ],
    practicalTool: {
      eyebrow: 'El trayecto manda',
      title: 'Qué transporte elegir según la situación',
      intro: 'La mejor opción cambia con la pendiente, el equipaje y la hora. No hace falta aprender toda la red para resolver bien cuatro trayectos habituales.',
      columns: ['Situación', 'Primera opción', 'Por qué'],
      rows: [
        { primary: 'Aeropuerto, poco equipaje', secondary: 'Metro', tertiary: 'Es previsible y sencillo si tu alojamiento queda bien conectado con la línea roja.', href: '/blog/aeropuerto-lisboa-al-centro' },
        { primary: 'Aeropuerto, maletas o llegada tardía', secondary: 'Taxi o aplicación', tertiary: 'Evita transbordos y cuestas cuando la comodidad pesa más que ahorrar unos euros.', href: '/blog/aeropuerto-lisboa-al-centro' },
        { primary: 'Subir a un mirador', secondary: 'Bus, tranvía o funicular', tertiary: 'Ahorra la parte más dura; puedes regresar caminando y disfrutar la bajada.' },
        { primary: 'Moverte por Baixa y Chiado', secondary: 'A pie', tertiary: 'Las distancias son cortas y caminar te ayuda a entender cómo se conectan las zonas.' },
      ],
    },
    humanQuestions: [
      {
        question: '¿Lisboa se puede recorrer sólo caminando?',
        answer: 'El centro invita a caminar, pero las cuestas cambian la respuesta. Combinar una subida en transporte con una bajada a pie suele ser mucho más agradable.',
      },
      {
        question: '¿Necesito un abono de transporte?',
        answer: 'Depende de cuántos trayectos harás, no de cuántos días estarás. Si vas a caminar mucho, pagar viajes sueltos puede tener más sentido que comprar un pase por costumbre.',
      },
      {
        question: '¿El tranvía 28 sirve para desplazarse?',
        answer: 'Sí, pero conviene tratarlo como una experiencia popular y potencialmente lenta. Para llegar con hora a algún sitio, el metro o el bus suelen ser más previsibles.',
      },
    ],
    sections: [
      {
        eyebrow: 'La idea clave',
        title: 'No existe un único transporte “mejor”',
        paragraphs: [
          'El metro funciona especialmente bien para saltar entre zonas conectadas por sus cuatro líneas. Caminar es ideal para entender el centro, pero la distancia del mapa no refleja siempre la pendiente. Los tranvías resuelven recorridos concretos y además forman parte de la experiencia de la ciudad.',
          'Por eso esta guía no intenta darte una respuesta única. Intenta ayudarte a elegir la opción más lógica en cada momento.',
        ],
        links: [{ href: '/blog/como-moverse-por-lisboa', label: 'Guía completa de transporte en Lisboa' }],
      },
      {
        eyebrow: 'Atajo práctico',
        title: 'Sube con ayuda; baja caminando',
        paragraphs: [
          'Cuando un recorrido termina en una zona alta, muchas veces compensa subir en metro, bus, tranvía o funicular y regresar caminando. Es una forma sencilla de ahorrar energía sin dejar de recorrer la ciudad a pie.',
        ],
        bullets: [
          'Mira la pendiente además de la distancia.',
          'Con maleta, prioriza trayectos con menos transbordos.',
          'Antes de comprar un pase, calcula cuántos viajes harás de verdad.',
          'Si el transporte es parte del atractivo, deja más margen de tiempo.',
        ],
      },
      {
        eyebrow: 'Cuando salgas del centro',
        title: 'Trenes y estaciones cambian el mapa',
        paragraphs: [
          'Sintra, Cascais y otras escapadas no se organizan como un trayecto urbano. La estación de salida, el horario y el regreso pasan a formar parte del plan del día.',
        ],
        links: [
          { href: '/blog/estacion-oriente-lisboa', label: 'Entender Gare do Oriente' },
          { href: '/blog/sintra-desde-lisboa', label: 'Cómo ir a Sintra' },
          { href: '/blog/que-ver-cascais-desde-lisboa', label: 'Cascais desde Lisboa' },
        ],
      },
    ],
    closingTitle: 'Moverte bien es una forma de ganar tiempo',
    closingText: 'No necesitas conocer toda la red. Necesitas saber qué opción simplifica el trayecto que tienes delante.',
  },
  {
    slug: 'que-visitar',
    portalId: 'visit',
    title: 'Qué ver y hacer en Lisboa',
    shortTitle: 'Qué merece la pena',
    portalQuestion: '¿Qué merece tu tiempo?',
    eyebrow: 'Sitios, monumentos, entradas y experiencias',
    portalSubtitle: 'Qué merece tu tiempo, qué puedes hacer gratis y qué conviene reservar.',
    portalTopics: ['Imprescindibles', 'Monumentos', 'Gratis', 'Miradores', 'Entradas', 'Experiencias', 'Excursiones'],
    heroImage: '/images/lisboa-originales/rua-augusta-arco-lisboa.webp',
    heroAlt: 'Rua Augusta llena de visitantes con el Arco da Rua Augusta al fondo',
    lead:
      'El problema en Lisboa no es encontrar cosas que hacer. Es distinguir qué cambia realmente tu viaje, qué depende de una reserva y qué puedes dejar abierto hasta ese mismo día.',
    promise:
      'Esta guía separa imprescindibles, planes gratuitos, monumentos, experiencias y excursiones para que la ciudad no se convierta en una lista de pendientes.',
    decisionPrompt: '¿Qué tipo de visita estás buscando?',
    decisions: [
      { title: 'Primera vez en Lisboa', text: 'Empieza por una mezcla de centro histórico, Alfama, Belém y uno o dos miradores.', href: '/blog/monumentos-de-lisboa' },
      { title: 'Quiero gastar menos', text: 'Hay miradores, barrios, iglesias y paseos que no necesitan entrada.', href: '/blog/que-hacer-gratis-en-lisboa' },
      { title: 'Voy con niños', text: 'El tipo de plan cambia bastante: menos encadenar monumentos, más experiencias.', href: '/blog/lisboa-con-ninos' },
      { title: 'Tengo un día extra', text: 'Sintra suele ser la gran decisión; Cascais ofrece una experiencia distinta.', href: '/blog/sintra-desde-lisboa' },
    ],
    practicalTool: {
      eyebrow: 'Elige por tiempo disponible',
      title: 'Una visita que cabe es mejor que tres a medias',
      intro: 'Antes de comprar entradas, decide cuánto tiempo quieres dedicar y qué tipo de recuerdo te gustaría llevarte de ese bloque del día.',
      columns: ['Tiempo', 'Qué elegir', 'Qué dejar fuera'],
      rows: [
        { primary: '2 horas', secondary: 'Un barrio o un monumento', tertiary: 'No cruces la ciudad. Elige una sola experiencia cerca de donde ya estás.' },
        { primary: 'Media jornada', secondary: 'Alfama o Belém', tertiary: 'Combina paseo con una visita principal; evita sumar otra zona distante.' },
        { primary: 'Día completo', secondary: 'Dos zonas conectadas', tertiary: 'Añade como máximo una reserva con hora y deja el resto flexible.', href: '/blog/monumentos-de-lisboa' },
        { primary: 'Un día extra', secondary: 'Sintra o Cascais', tertiary: 'Elige palacios e interior, o costa y paseo. Son días con ritmos distintos.', href: '/blog/sintra-desde-lisboa' },
      ],
    },
    humanQuestions: [
      {
        question: '¿Qué no debería perderme en una primera visita?',
        answer: 'Una mañana entre Baixa y Alfama, varias horas en Belém y al menos un mirador. Con eso entiendes mejor Lisboa que encadenando diez monumentos.',
      },
      {
        question: '¿Qué entradas compraría con antelación?',
        answer: 'Las que aseguran una hora importante o evitan una cola que condicionaría el día. Una entrada sólo merece anticipación cuando te compra tranquilidad o tiempo.',
      },
      {
        question: '¿Y si no me interesan mucho los monumentos?',
        answer: 'No pasa nada. Lisboa también se sostiene con barrios, mercados, miradores, azulejos y paseos junto al río. La ciudad no exige una ruta de taquillas.',
      },
    ],
    sections: [
      {
        eyebrow: 'Prioriza',
        title: 'No todo lo famoso merece el mismo espacio en tu agenda',
        paragraphs: [
          'Una visita puede ser importante por historia, por arquitectura, por vistas o porque te ahorra improvisar. Antes de pagar una entrada pregúntate qué estás comprando: acceso a un monumento, contexto, tiempo ahorrado o una experiencia guiada.',
          'Esa pregunta evita llenar el viaje de reservas que después compiten entre sí.',
        ],
        links: [
          { href: '/actividades', label: 'Explorar actividades' },
          { href: '/comprar-entradas', label: 'Entradas y reservas' },
        ],
      },
      {
        eyebrow: 'Gratis',
        title: 'Lisboa también se conoce sin pasar por taquilla',
        paragraphs: [
          'Miradores, calles, plazas, zonas históricas y parte de la arquitectura de la ciudad forman una experiencia completa por sí mismas. No uses el precio como medida de importancia.',
        ],
        links: [
          { href: '/blog/mejores-miradores-lisboa', label: 'Miradores de Lisboa' },
          { href: '/blog/que-hacer-gratis-en-lisboa', label: 'Planes gratis' },
        ],
      },
      {
        eyebrow: 'Reserva',
        title: 'Compra antes sólo cuando realmente te quite fricción',
        paragraphs: [
          'Las entradas y experiencias tienen sentido cuando aseguran una hora concreta, evitan una decisión de última hora o resuelven un traslado complicado. Si no aportan una ventaja real, no hace falta convertir cada plan en una compra anticipada.',
        ],
      },
    ],
    bookingSection: {
      eyebrow: 'Reservar con intención',
      title: 'Tres planes donde reservar sí puede ayudarte',
      intro:
        'No hace falta comprar Lisboa por adelantado. Aquí la reserva sirve para evitar una cola, asegurar una experiencia pequeña o elegir una hora concreta junto al río.',
      productIds: ['castelo-sao-jorge', 'oceanario', 'crucero-tajo'],
    },
    closingTitle: 'La mejor selección depende de tu viaje',
    closingText: 'Empieza por el tiempo, después por el tipo de experiencia, y sólo entonces decide qué merece una entrada.',
  },
  {
    slug: 'comer',
    portalId: 'food',
    title: 'Dónde comer en Lisboa',
    shortTitle: 'Dónde comer',
    portalQuestion: '¿Qué te apetece hoy?',
    eyebrow: 'Gastronomía, presupuesto y necesidades',
    portalSubtitle: 'Portugués, barato, tascas, mercados, veggie, sin gluten y café.',
    portalTopics: ['Portugués', 'Barato', 'Tascas', 'Mercados', 'Veggie', 'Sin gluten', 'Brunch', 'Dulces'],
    heroImage: '/images/lisboa-originales/time-out-market-lisboa/time-out-market-lisboa-interior-puestos-comida.jpg',
    heroAlt: 'Interior del Time Out Market Lisboa con sus mesas y puestos de comida',
    lead:
      'Para comer bien en Lisboa no necesitas una lista de cien restaurantes. Necesitas saber qué te apetece, cuánto quieres gastar y qué tipo de experiencia buscas.',
    promise:
      'Esta guía organiza la comida por decisiones reales: cocina portuguesa, presupuesto, mercados, cafés y necesidades alimentarias.',
    decisionPrompt: '¿Qué buscas hoy?',
    decisions: [
      { title: 'Comida portuguesa', text: 'Empieza por entender platos y estilos antes de elegir el restaurante.', href: '/blog/gastronomia-portuguesa-guia' },
      { title: 'Comer barato', text: 'Busca precio, zona y formato de comida, no una lista eterna de “sitios secretos”.', href: '/blog/donde-comer-barato-lisboa' },
      { title: 'Mercados', text: 'Útiles para probar variedad y combinar comida con un paseo.', href: '/blog/mejores-mercados-lisboa' },
      { title: 'Café y dulce', text: 'Cafés, pastelerías y lugares históricos sirven para planes distintos.', href: '/blog/donde-tomar-cafe-lisboa' },
    ],
    practicalTool: {
      eyebrow: 'Según el momento',
      title: 'No todas las comidas tienen que ser el gran plan del día',
      intro: 'Elegir el formato correcto evita comparar una tasca, un mercado y un restaurante como si ofrecieran la misma experiencia.',
      columns: ['Momento', 'Qué buscar', 'La pista útil'],
      rows: [
        { primary: 'Almuerzo rápido', secondary: 'Tasca o prato do dia', tertiary: 'Carta corta, rotación y platos del día suelen importar más que una decoración perfecta.', href: '/blog/donde-comer-barato-lisboa' },
        { primary: 'Probar varias cosas', secondary: 'Mercado', tertiary: 'Funciona bien para grupos con gustos distintos, aunque comodidad y ubicación también se pagan.', href: '/blog/mejores-mercados-lisboa' },
        { primary: 'Comida como experiencia', secondary: 'Restaurante con reserva', tertiary: 'Aquí sí merece la pena elegir por cocina, servicio y tiempo disponible, no sólo por cercanía.' },
        { primary: 'Pausa dulce', secondary: 'Pastelaria o café', tertiary: 'Decide si buscas probar un dulce, sentarte con calma o conocer un local histórico.', href: '/blog/donde-tomar-cafe-lisboa' },
      ],
    },
    humanQuestions: [
      {
        question: '¿Cómo reconozco una opción pensada sólo para turistas?',
        answer: 'No por estar en el centro es mala. Mira la carta completa, el precio, el tamaño del menú y si el lugar ofrece algo más que una terraza visible en la calle principal.',
      },
      {
        question: '¿Qué es una tasca?',
        answer: 'Un local sencillo donde suele importar más comer bien que la puesta en escena. No todas son baratas ni todas son tradicionales, pero el formato ayuda a entender la cocina cotidiana.',
      },
      {
        question: '¿Los aperitivos que dejan en la mesa son gratis?',
        answer: 'No. El precio del couvert debe figurar en la carta y no pueden cobrarte algo que no hayas pedido ni consumido. Si no lo quieres, no lo pruebes y pide que lo retiren.',
      },
    ],
    sections: [
      {
        eyebrow: 'Antes de elegir',
        title: 'Decide qué tipo de comida quieres, no qué ranking quieres seguir',
        paragraphs: [
          'Hay días para una tasca, días para un mercado y días para sentarte en un restaurante donde la comida sea el plan principal. Si sabes eso antes, comparar lugares es mucho más sencillo.',
          'También cambia mucho si estás en una zona monumental, si necesitas comer rápido o si tienes una restricción alimentaria.',
        ],
        links: [
          { href: '/blog/gastronomia-portuguesa-guia', label: 'Qué comer en Portugal' },
          { href: '/blog/bacalhau-plato-portugal', label: 'Entender el bacalhau' },
          { href: '/blog/pasteles-de-belem', label: 'Pastéis de Belém' },
        ],
      },
      {
        eyebrow: 'Presupuesto',
        title: 'Dos calles pueden cambiar bastante la experiencia',
        paragraphs: [
          'En zonas muy turísticas conviene leer la carta completa, mirar si el precio encaja con lo que buscas y no asumir que la terraza más visible es la única opción. Eso no significa evitar el centro: significa decidir conscientemente por qué estás pagando.',
        ],
        links: [{ href: '/blog/donde-comer-barato-lisboa', label: 'Dónde comer barato en Lisboa' }],
      },
      {
        eyebrow: 'Necesidades',
        title: 'Veggie, vegano y sin gluten necesitan información útil, no etiquetas',
        paragraphs: [
          'Que un lugar diga que tiene “opciones” no explica si podrás comer un plato completo, si adapta la cocina o si controla la contaminación cruzada. Para decidir bien necesitas ese nivel de detalle, especialmente cuando una restricción es médica.',
        ],
        bullets: [
          'Indicar qué tipo de opción existe, no sólo que “hay opciones”.',
          'Separar restaurantes especializados de platos adaptables.',
          'Revisar información sensible o cambiante antes de recomendar.',
          'Dar alternativas por zona cuando sea posible.',
        ],
      },
    ],
    bookingSection: {
      eyebrow: 'Si prefieres empezar acompañado',
      title: 'Una forma de aprender qué pedir',
      intro:
        'Un tour gastronómico tiene más sentido al principio del viaje: te da referencias para elegir por tu cuenta durante los días siguientes.',
      productIds: ['tour-gastronomico'],
    },
    closingTitle: 'Comer es parte del viaje, no una tarea logística',
    closingText: 'El objetivo es que encuentres una opción que encaje con tu día sin convertir cada comida en una investigación de una hora.',
  },
  {
    slug: 'tomar-algo',
    portalId: 'drinks',
    title: 'Dónde tomar algo y salir en Lisboa',
    shortTitle: 'Dónde tomar algo',
    portalQuestion: '¿Qué ambiente buscas?',
    eyebrow: 'Ambientes, cafés, rooftops, fado y noche',
    portalSubtitle: 'Elige por ambiente: tranquilo, cócteles, cerveza, fado o salir hasta tarde.',
    portalTopics: ['Tranquilo', 'Cerveza', 'Cócteles', 'Rooftops', 'Fado', 'Cafés', 'Salir tarde'],
    heroImage: '/images/lisboa-originales/rua-baixa-lisboa-entardecer.webp',
    heroAlt: 'Calle de la Baixa al atardecer con las vías del tranvía hacia el río',
    lead:
      'La noche de Lisboa cambia mucho según la zona y la hora. Un plan tranquilo en Graça, una copa en Chiado y terminar en Cais do Sodré son experiencias distintas aunque estén relativamente cerca.',
    promise:
      'Esta guía empieza por el ambiente que buscas, no por un ranking universal de bares.',
    decisionPrompt: '¿Qué tipo de noche quieres?',
    decisions: [
      { title: 'Algo tranquilo', text: 'Busca una zona donde puedas sentarte y conversar sin convertir la noche en una ruta de bares.' },
      { title: 'Fado', text: 'Decide si quieres escuchar, cenar o entender mejor el género antes de reservar.', href: '/blog/donde-escuchar-fado-autentico' },
      { title: 'Bairro Alto', text: 'Funciona mejor cuando entiendes que su ambiente cambia con la hora.', href: '/blog/chiado-bairro-alto-guia' },
      { title: 'Café', text: 'A veces “tomar algo” significa sentarte una hora y mirar la ciudad, no salir de fiesta.', href: '/blog/donde-tomar-cafe-lisboa' },
    ],
    practicalTool: {
      eyebrow: 'Una noche, varios ritmos',
      title: 'El ambiente cambia con la hora y con el barrio',
      intro: 'No necesitas completar toda la secuencia. Elige el tramo que se parezca a tu noche y deja que el siguiente plan dependa de cómo te sientas.',
      columns: ['Momento', 'Ambiente', 'Dónde encaja'],
      rows: [
        { primary: 'Atardecer', secondary: 'Terraza o mirador', tertiary: 'Una bebida tranquila y vistas antes de cenar; Graça y zonas altas funcionan bien.' },
        { primary: 'Después de cenar', secondary: 'Copa o fado', tertiary: 'Chiado y Alfama ofrecen noches muy distintas: conversación o escucha atenta.', href: '/blog/donde-escuchar-fado-autentico' },
        { primary: 'Noche animada', secondary: 'Bairro Alto', tertiary: 'Calles pequeñas y mucho movimiento; conviene llegar sabiendo que el ambiente está fuera y dentro.', href: '/blog/chiado-bairro-alto-guia' },
        { primary: 'Seguir más tarde', secondary: 'Cais do Sodré', tertiary: 'Tiene sentido si quieres alargar la noche, no como parada obligatoria para todo el mundo.', href: '/blog/vida-nocturna-lisboa' },
      ],
    },
    humanQuestions: [
      {
        question: '¿A qué hora empieza el ambiente?',
        answer: 'Depende del plan. Una terraza puede funcionar desde la tarde; Bairro Alto y Cais do Sodré se entienden mejor cuando la cena ya ha terminado. No hace falta salir tarde para vivir la ciudad.',
      },
      {
        question: '¿Puedo escuchar fado sin cenar?',
        answer: 'Sí, aunque cada casa organiza la experiencia de forma distinta. Antes de reservar, comprueba si hay menú, consumo mínimo, entrada o sesiones con horarios concretos.',
      },
      {
        question: '¿Bairro Alto o Cais do Sodré?',
        answer: 'Bairro Alto concentra calles y pequeños locales; Cais do Sodré suele encajar mejor cuando quieres alargar la noche. Puedes combinar ambos sin convertirlo en una carrera.',
      },
    ],
    sections: [
      {
        eyebrow: 'Ambiente',
        title: 'El barrio importa tanto como el local',
        paragraphs: [
          'Bairro Alto concentra movimiento nocturno; Chiado es más de transición entre cena y copa; Cais do Sodré suele aparecer cuando la noche quiere alargarse; Graça puede funcionar mejor para algo tranquilo y con menos prisa.',
          'No es una regla absoluta: la oferta cambia y un buen local puede romper el patrón. Aun así, elegir primero la zona ayuda mucho a saber qué ambiente esperar.',
        ],
        links: [{ href: '/blog/vida-nocturna-lisboa', label: 'Vida nocturna en Lisboa' }],
      },
      {
        eyebrow: 'Fado',
        title: 'No todas las noches de fado son la misma experiencia',
        paragraphs: [
          'Hay quien quiere escuchar con silencio y quien prefiere cenar mientras ve una actuación. Antes de reservar, conviene saber si pagas por comida, espectáculo, consumo mínimo o una combinación.',
        ],
        links: [
          { href: '/blog/donde-escuchar-fado-autentico', label: 'Dónde escuchar fado' },
          { href: '/blog/fado-historia-origen', label: 'Historia del fado' },
        ],
      },
      {
        eyebrow: 'Regla útil',
        title: 'No cruces toda Lisboa por una copa mediocre',
        paragraphs: [
          'Si ya estás en una zona agradable, muchas veces compensa elegir bien cerca de donde terminaste de cenar. La noche mejora cuando el trayecto no se convierte en el protagonista.',
        ],
      },
    ],
    bookingSection: {
      eyebrow: 'Una noche con hora',
      title: 'Cuando el fado es el plan principal',
      intro:
        'Si quieres escuchar fado de verdad, conviene tratarlo como una experiencia con hora y no como algo que aparecerá por casualidad al final de la noche.',
      productIds: ['fado'],
    },
    closingTitle: 'Primero el ambiente; después el lugar',
    closingText: 'Esa sola decisión hace que recomendar dónde tomar algo sea mucho más útil que darte una lista genérica de bares.',
  },
  {
    slug: 'spots',
    portalId: 'spots',
    title: 'Dónde fotografiar Lisboa',
    shortTitle: 'Dónde hacer fotos',
    portalQuestion: '¿Qué foto quieres?',
    eyebrow: 'Las fotos que te puedes llevar del viaje',
    portalSubtitle: 'Miradores, tranvías, azulejos, atardecer y puntos exactos para mirar la ciudad.',
    portalTopics: ['Miradores', 'Tranvías', 'Azulejos', 'Atardecer', 'Calles', 'Río', 'Panorámicas'],
    heroImage: '/images/lisboa-originales/rio-tejo-por-do-sol-lisboa.webp',
    heroAlt: 'Puesta de sol naranja sobre el río Tajo en Lisboa',
    lead:
      'Lisboa cambia muchísimo con la luz. Un lugar puede ser espectacular al final de la tarde y bastante plano dos horas antes. Por eso un buen spot es lugar + punto de vista + momento.',
    promise:
      'La idea no es coleccionar “lugares instagrameables”, sino ayudarte a llevarte mejores fotografías de una ciudad que ya es muy fotogénica.',
    decisionPrompt: '¿Qué foto quieres llevarte?',
    decisions: [
      { title: 'Panorámica', text: 'Miradores y puntos altos para entender la ciudad completa.', href: '/blog/mejores-miradores-lisboa' },
      { title: 'Tranvía', text: 'Busca contexto, no sólo el vehículo: calles, fachadas y perspectiva.' },
      { title: 'Alfama', text: 'Tejados, callejones y capas de ciudad funcionan mejor con tiempo.', href: '/blog/alfama-historia-guia' },
      { title: 'Atardecer', text: 'La orientación importa. No todos los miradores reciben la luz igual.' },
    ],
    practicalTool: {
      eyebrow: 'Lisboa cambia con la luz',
      title: 'El mismo lugar puede darte cuatro fotografías distintas',
      intro: 'Piensa en la escena y en la hora como una sola decisión. La luz indica dónde colocarte y qué detalle merece protagonismo.',
      columns: ['Momento', 'Escena', 'Cómo aprovecharlo'],
      rows: [
        { primary: 'Primera hora', secondary: 'Alfama y calles', tertiary: 'Hay menos gente y la luz lateral ayuda a separar fachadas, cuestas y capas.' },
        { primary: 'Mediodía', secondary: 'Azulejos y geometría', tertiary: 'Busca soportales, sombras duras y detalles; evita luchar contra un cielo sin textura.' },
        { primary: 'Última luz', secondary: 'Miradores y río', tertiary: 'Elige orientación antes de llegar y deja margen para que el color cambie.', href: '/blog/mejores-miradores-lisboa' },
        { primary: 'Hora azul', secondary: 'Tranvías y calles', tertiary: 'Las luces urbanas equilibran el cielo; apóyate bien si baja la velocidad de la cámara.' },
      ],
    },
    humanQuestions: [
      {
        question: '¿Cuál es la mejor hora para fotografiar Lisboa?',
        answer: 'La primera y la última luz suelen suavizar fachadas y cielo. Pero las sombras duras del mediodía también pueden funcionar muy bien en calles estrechas y escaleras.',
      },
      {
        question: '¿Dónde consigo una foto con tranvía?',
        answer: 'Busca primero una calle con profundidad y un fondo reconocible. El tranvía dura unos segundos en el encuadre; la composición tiene que estar lista antes de que aparezca.',
      },
      {
        question: '¿Hace falta ir a los lugares más famosos?',
        answer: 'No. Una esquina con buena luz puede darte una foto más personal que un mirador lleno. Lisboa recompensa mirar despacio y cambiar de altura.',
      },
    ],
    sections: [
      {
        eyebrow: 'Fotografía',
        title: 'Piensa antes en la escena que en el nombre del lugar',
        paragraphs: [
          'Un mirador puede darte una panorámica; una esquina puede darte profundidad; una calle estrecha puede funcionar mejor cuando aparece un tranvía; un azulejo necesita acercarte. La fotografía cambia cuando decides qué quieres contar.',
        ],
        links: [{ href: '/blog/donde-fotografiar-lisboa', label: 'Guía para fotografiar Lisboa' }],
      },
      {
        eyebrow: 'Luz',
        title: 'La hora cambia la ciudad',
        paragraphs: [
          'En Lisboa el contraste puede ser fuerte. A primera hora y al final de la tarde suele ser más fácil conservar detalle en fachadas y cielo. Al mediodía, en cambio, algunas calles estrechas crean sombras muy marcadas que pueden ser parte de la foto si las buscas.',
        ],
      },
      {
        eyebrow: 'Respeto',
        title: 'Una buena foto no necesita molestar a quien vive allí',
        paragraphs: [
          'Alfama, Mouraria y otros barrios no son un decorado. Evita bloquear puertas, fotografiar personas de cerca sin permiso o convertir calles residenciales en un set improvisado.',
        ],
        links: [
          { href: '/blog/graca-lisboa-que-ver', label: 'Graça' },
          { href: '/blog/alfama-historia-guia', label: 'Alfama' },
        ],
      },
    ],
    closingTitle: 'La mejor foto no siempre está en el lugar más famoso',
    closingText: 'Aprender a leer la luz, la pendiente y el fondo te da más que perseguir una lista de spots.',
  },
  {
    slug: 'cuidate',
    portalId: 'safety',
    title: 'Qué conviene evitar y vigilar en Lisboa',
    shortTitle: 'Qué conviene evitar',
    portalQuestion: '¿Qué quieres evitar?',
    eyebrow: 'Errores, trampas y situaciones prácticas',
    portalSubtitle: 'Carteristas, precios, restaurantes, reservas, transporte y errores comunes.',
    portalTopics: ['Carteristas', 'Precios', 'Restaurantes', 'Aeropuerto', 'Reservas', 'Pagos', 'Errores'],
    heroImage: '/images/lisboa-originales/rua-augusta-lisboa-01.webp',
    heroAlt: 'Calle turística de la Baixa con terrazas, comercios y peatones',
    lead:
      'Lisboa no necesita una guía alarmista. Sí conviene saber qué situaciones se repiten en zonas turísticas y qué detalles sorprenden cuando nadie te los explicó antes.',
    promise:
      'Esta guía separa riesgo real, incomodidad y simple desconocimiento para que tomes mejores decisiones sin viajar con miedo.',
    decisionPrompt: '¿Qué te preocupa?',
    decisions: [
      { title: 'Carteristas', text: 'Presta más atención donde hay mucha concentración y en transportes turísticos.' },
      { title: 'Restaurantes', text: 'Lee precios y entiende qué estás aceptando antes de consumirlo.' },
      { title: 'Pagos', text: 'Tarjeta y efectivo funcionan de forma distinta según el comercio y la situación.', href: '/blog/como-pagar-en-portugal' },
      { title: 'Errores de planificación', text: 'Muchas malas experiencias empiezan por apretar demasiado la agenda.', href: '/blog/errores-turistas-lisboa' },
    ],
    practicalTool: {
      eyebrow: 'Situación y respuesta',
      title: 'La precaución útil siempre termina en una acción',
      intro: 'No necesitas una lista de amenazas. Necesitas reconocer cuatro momentos en los que conviene prestar un poco más de atención.',
      columns: ['Situación', 'Qué hacer', 'Qué evitar'],
      rows: [
        { primary: 'Tranvía o parada llena', secondary: 'Bolso cerrado y delante', tertiary: 'No dejes móvil y cartera en bolsillos fáciles mientras subes o bajas.' },
        { primary: 'Terraza concurrida', secondary: 'Objetos contigo', tertiary: 'No dejes el teléfono en el borde de la mesa ni el bolso colgado hacia el paso.' },
        { primary: 'Restaurante turístico', secondary: 'Lee carta y couvert', tertiary: 'No consumas algo sin saber el precio si luego no quieres pagarlo.' },
        { primary: 'Llegada con prisa', secondary: 'Usa opciones identificadas', tertiary: 'No aceptes transportes, entradas o cambios de plan ofrecidos sin contexto.', href: '/blog/aeropuerto-lisboa-al-centro' },
      ],
    },
    humanQuestions: [
      {
        question: '¿Lisboa es una ciudad segura para caminar?',
        answer: 'En general se recorre con normalidad, también de noche en zonas transitadas. La atención más útil está en aglomeraciones, transportes turísticos y pertenencias fáciles de abrir.',
      },
      {
        question: '¿Tengo que llevar efectivo?',
        answer: 'La tarjeta está muy extendida, pero un poco de efectivo evita depender de que todos los comercios acepten el mismo medio de pago. Pregunta antes si tienes dudas.',
      },
      {
        question: '¿Qué error estropea más viajes?',
        answer: 'Planificar como si Lisboa fuera plana y todos los trayectos duraran lo que marca la distancia. Las cuestas, las colas y las paradas espontáneas necesitan margen.',
      },
    ],
    sections: [
      {
        eyebrow: 'Seguridad',
        title: 'Atención no significa alarma',
        paragraphs: [
          'En zonas muy concurridas conviene llevar pertenencias controladas, especialmente en transportes y espacios donde la gente se concentra. Eso es distinto a presentar barrios enteros como “peligrosos” sin contexto.',
          'La recomendación útil siempre une una situación concreta con una acción sencilla: cerrar bien el bolso, guardar el teléfono antes de subir o evitar llevar todo en el mismo bolsillo.',
        ],
      },
      {
        eyebrow: 'Restaurantes y precios',
        title: 'Entender una costumbre evita sentir que te engañaron',
        paragraphs: [
          'En Portugal pueden aparecer en la mesa productos de couvert. La decisión útil es mirar qué tienes delante, preguntar si hace falta y saber que consumirlo implica aceptarlo. Con cartas y terrazas turísticas ocurre lo mismo: leer primero evita muchas discusiones después.',
        ],
        links: [{ href: '/blog/donde-comer-barato-lisboa', label: 'Comer barato sin improvisar' }],
      },
      {
        eyebrow: 'Reservas y transporte',
        title: 'La prisa es cuando más fácil es aceptar cualquier opción',
        paragraphs: [
          'Al aterrizar, al perder un tren o al llegar tarde a una entrada es cuando más cuesta comparar. Llevar resuelto el traslado principal y las reservas importantes reduce decisiones hechas bajo presión.',
        ],
        links: [
          { href: '/blog/aeropuerto-lisboa-al-centro', label: 'Aeropuerto al centro' },
          { href: '/comprar-entradas', label: 'Entradas y reservas' },
        ],
      },
    ],
    closingTitle: 'La información debería darte tranquilidad',
    closingText: 'Si una recomendación sólo consigue asustarte y no te dice qué hacer, no está cumpliendo su trabajo.',
  },
];

export const travelerGuideSlugs = travelerGuides.map((guide) => guide.slug);

export function getTravelerGuide(slug: string) {
  return travelerGuides.find((guide) => guide.slug === slug);
}
