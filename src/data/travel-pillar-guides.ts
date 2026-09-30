import type { TravelPillarGuide } from '@/components/traveler/TravelPillarPage';

export const whatToSeeGuide = {
  url: '/que-ver-en-lisboa',
  eyebrow: 'Primera visita, sin correr',
  title: 'Qué ver en Lisboa',
  description:
    'Qué ver en Lisboa según tus días: Alfama, Baixa, Belém, miradores, monumentos, planes gratis y qué reservar para organizar una primera visita.',
  lead:
    'Los lugares importantes están repartidos entre colinas y zonas que no conviene mezclar sin orden. Aquí tienes una selección completa para decidir qué merece tu tiempo.',
  shortAnswer:
    'En una primera visita, empieza por Baixa y Chiado, dedica otro bloque a Alfama, reserva media jornada para Belém y elige al menos un mirador. Con más tiempo, añade Parque das Nações o una excursión de día completo.',
  heroImage: '/images/lisboa-originales/rua-augusta-arco-lisboa.webp',
  heroAlt: 'Rua Augusta de Lisboa con el arco monumental al fondo',
  heroWidth: 900,
  heroHeight: 675,
  datePublished: '2026-09-30',
  dateModified: '2026-09-30',
  topics: [
    'Qué ver en Lisboa',
    'Barrios de Lisboa',
    'Monumentos de Lisboa',
    'Miradores de Lisboa',
    'Itinerarios por Lisboa',
  ],
  quickAnswers: [
    {
      label: 'Si tienes 1 día',
      title: 'Centro y Alfama',
      text: 'Baixa, Chiado y Alfama explican mejor la ciudad que intentar cruzarla hasta Belém con prisa.',
    },
    {
      label: 'Si tienes 2 días',
      title: 'Añade Belém',
      text: 'Dedica una mañana o una tarde completa a los monumentos y al paseo junto al Tajo.',
    },
    {
      label: 'Si tienes 3 días',
      title: 'Elige otra Lisboa',
      text: 'Parque das Nações, Graça o una jornada más lenta aportan más que repetir el centro.',
    },
    {
      label: 'Con un día extra',
      title: 'Sintra o Cascais',
      text: 'Sintra es palacios e interior; Cascais es costa y paseo. No intentaría hacer ambas el mismo día.',
    },
  ],
  sections: [
    {
      id: 'imprescindibles',
      eyebrow: 'La selección esencial',
      title: 'Los lugares que mejor explican Lisboa',
      intro:
        'No son una lista para marcar. Cada lugar aporta una parte distinta de la ciudad: el río, las colinas, la reconstrucción pombalina, la expansión marítima y la Lisboa contemporánea.',
      image: '/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
      imageAlt: 'Tejados de Alfama y el río Tajo vistos desde una colina de Lisboa',
      items: [
        {
          title: 'Praça do Comércio y Baixa',
          text: 'Es la entrada más clara a la ciudad reconstruida tras el terremoto de 1755. Desde el Tajo puedes subir por Rua Augusta hacia Rossio sin perder tiempo en transportes.',
        },
        {
          title: 'Chiado y Largo do Carmo',
          text: 'Chiado mezcla comercio, cafés y vida urbana; el entorno del Carmo añade historia y una de las conexiones más naturales con Bairro Alto.',
        },
        {
          title: 'Alfama y la Sé',
          text: 'Conviene recorrer Alfama como barrio, no como una sucesión de puntos. Sube con calma y deja que la bajada te devuelva hacia el centro.',
        },
        {
          title: 'Castelo de São Jorge',
          text: 'Tiene sentido si te interesan la historia de la colina y las vistas. Si el tiempo o el presupuesto aprietan, un mirador gratuito puede resolver mejor la panorámica.',
        },
        {
          title: 'Belém',
          text: 'El Monasterio de los Jerónimos, la Torre de Belém, el río y la arquitectura manuelina justifican tratar la zona como un bloque de varias horas.',
        },
        {
          title: 'Un mirador',
          text: 'Santa Luzia, Portas do Sol, Graça o Senhora do Monte ofrecen experiencias distintas. La hora y la ruta importan tanto como el nombre.',
        },
        {
          title: 'Parque das Nações',
          text: 'Es la cara contemporánea de Lisboa. El Oceanário, la ribera y la estación de Oriente funcionan especialmente bien con niños o cuando buscas un día menos empinado.',
        },
      ],
    },
    {
      id: 'zonas',
      eyebrow: 'Ordena el mapa',
      title: 'Visita por zonas, no por popularidad',
      intro:
        'La forma más sencilla de perder tiempo en Lisboa es saltar entre lugares famosos que parecen cerca en el mapa, pero están separados por cuestas o desplazamientos.',
      items: [
        {
          title: 'Baixa + Chiado',
          text: 'Combínalos en el mismo bloque. Praça do Comércio, Rua Augusta, Rossio, Carmo y Chiado forman un recorrido continuo y fácil de adaptar.',
        },
        {
          title: 'Alfama + Graça',
          text: 'Subir en transporte y bajar a pie suele ser más amable que hacer la ruta al revés. Reserva margen para escaleras, miradores y desvíos.',
        },
        {
          title: 'Belém',
          text: 'No lo uses como una parada rápida entre dos planes del centro. El trayecto y las visitas merecen una mañana o una tarde propia.',
        },
        {
          title: 'Parque das Nações',
          text: 'Agrupa Oceanário, paseo junto al río y estación de Oriente. Está bien conectado por la Línea Roja, pero fuera del centro histórico.',
        },
        {
          title: 'Sintra',
          text: 'Trátala como una excursión de día completo. Encadenar Sintra con una tarde exigente en Lisboa suele producir dos visitas a medias.',
        },
      ],
      note: {
        title: 'Una regla que funciona',
        text: 'Una reserva con hora por cada medio día es suficiente. El resto debe poder moverse si llueve, aparece una cola o simplemente quieres quedarte más tiempo.',
      },
    },
    {
      id: 'por-dias',
      eyebrow: 'Un orden que sí cabe',
      title: 'Qué ver en Lisboa en 1, 2, 3 o 4 días',
      intro:
        'La diferencia entre una ruta agradable y una carrera no suele ser la cantidad de lugares: es el orden. Cada día añade una zona completa sin deshacer lo anterior.',
      items: [
        {
          title: '1 día: centro + Alfama',
          text: 'Empieza en Praça do Comércio, recorre Baixa y Chiado, y dedica la tarde a Alfama con un mirador. Es una Lisboa reconocible, caminable y sin dos grandes desplazamientos.',
        },
        {
          title: '2 días: suma Belém',
          text: 'Reserva el segundo día para Jerónimos, el entorno de la Torre y el paseo junto al Tajo. Volver al centro después es opcional; Belém ya sostiene media jornada larga.',
        },
        {
          title: '3 días: elige contraste',
          text: 'Añade Graça si quieres más barrio y vistas, o Parque das Nações si prefieres río, arquitectura contemporánea y un recorrido menos empinado.',
        },
        {
          title: '4 días: sal de Lisboa',
          text: 'Dedica una jornada completa a Sintra o Cascais. Sintra exige más planificación; Cascais permite un día costero más flexible. No intentaría comprimir ambas.',
        },
      ],
      note: {
        title: 'La decisión difícil',
        text: 'Con sólo dos días, elegiría Lisboa antes que Sintra. Con tres, Sintra puede entrar si los palacios son una prioridad, pero perderás una jornada urbana completa.',
      },
    },
    {
      id: 'gratis-o-de-pago',
      eyebrow: 'Dónde merece pagar',
      title: 'Lisboa no necesita una agenda llena de entradas',
      paragraphs: [
        'Los barrios, las plazas, muchos miradores y los paseos junto al Tajo construyen una visita completa sin pasar por taquilla. Pagar tiene sentido cuando el interior, la historia o la experiencia son el motivo real de tu visita.',
        'Antes de reservar, pregúntate si la entrada te da acceso a algo que de verdad quieres ver o si sólo estás comprando tranquilidad por miedo a dejar algo fuera.',
      ],
      items: [
        {
          title: 'Gratis y esencial',
          text: 'Baixa, Chiado, Alfama, el entorno de Belém, los paseos de ribera y buena parte de los miradores pueden ocupar días enteros sin coste de entrada.',
        },
        {
          title: 'Historia y arquitectura',
          text: 'Jerónimos, Castelo y otros monumentos merecen entrada cuando quieres comprender el lugar por dentro, no sólo fotografiar la fachada.',
        },
        {
          title: 'Familias y lluvia',
          text: 'El Oceanário puede sostener varias horas y ofrece un recorrido accesible. Es una decisión más sólida que improvisar muchos interiores pequeños.',
        },
        {
          title: 'Vistas',
          text: 'No pagues automáticamente por una panorámica. Compara primero con los miradores gratuitos que ya encajan en tu recorrido.',
        },
      ],
    },
    {
      id: 'reservar',
      eyebrow: 'Compra con criterio',
      title: 'Qué reservar antes y qué dejar abierto',
      intro:
        'La reserva correcta reduce una incertidumbre concreta. Si no evita una cola, asegura una hora importante o protege un plan muy demandado, puede esperar.',
      items: [
        {
          title: 'Reserva antes',
          text: 'Monumentos o experiencias con franja horaria cuando sean una prioridad real del viaje, especialmente en fechas de alta demanda.',
        },
        {
          title: 'Comprueba el mismo día',
          text: 'Horarios, cierres, obras y condiciones de acceso. Lisboa cambia y una guía no debe sustituir la web oficial del lugar.',
        },
        {
          title: 'Deja flexible',
          text: 'Miradores, paseos, plazas y barrios. Son precisamente los planes que pueden salvarte el día cuando cambia el tiempo o el ritmo.',
        },
        {
          title: 'No encadenes',
          text: 'Dos o tres entradas con hora en una misma jornada convierten las cuestas y los trayectos en una carrera contra el reloj.',
        },
      ],
    },
    {
      id: 'segun-tu-viaje',
      eyebrow: 'No todos viajan igual',
      title: 'La mejor selección cambia contigo',
      items: [
        {
          title: 'Primera vez',
          text: 'Centro histórico, Alfama, Belém y un mirador. Esa combinación da contexto sin intentar agotarlo todo.',
        },
        {
          title: 'Con niños',
          text: 'Reduce monumentos consecutivos, añade espacios amplios y reserva una experiencia central como el Oceanário.',
        },
        {
          title: 'Movilidad reducida',
          text: 'Prioriza zonas llanas, estaciones con acceso sencillo y visitas con información de accesibilidad actualizada. Alfama y Graça requieren más planificación.',
        },
        {
          title: 'Ya conoces Lisboa',
          text: 'Olaias, Oriente, mercados, museos concretos y barrios fuera del circuito básico ofrecen más que repetir la misma lista de imprescindibles.',
        },
      ],
    },
  ],
  faqs: [
    {
      question: '¿Cuántos días hacen falta para ver Lisboa?',
      answer: 'Dos días permiten conocer el centro, Alfama y Belém sin verlo todo. Tres días dan margen para otro barrio o Parque das Nações; un cuarto día permite añadir Sintra sin sacrificar Lisboa.',
    },
    {
      question: '¿Qué ver en Lisboa si sólo tengo un día?',
      answer: 'Elegiría Baixa, Chiado y Alfama, con un mirador y una pausa larga para comer. Belém puede entrar, pero obliga a recortar mucho el centro y añade dos desplazamientos.',
    },
    {
      question: '¿Qué es imprescindible reservar?',
      answer: 'Nada es universalmente imprescindible. Reserva con antelación la visita que realmente condicionaría tu día si se agotara; el resto puede organizarse alrededor de barrios y planes flexibles.',
    },
    {
      question: '¿Merece la pena la Lisboa Card?',
      answer: 'Depende del número de entradas y trayectos que vayas a usar durante su validez. Haz la suma con tu itinerario real; comprarla sin una ruta definida no garantiza ahorro.',
    },
    {
      question: '¿Sintra forma parte de Lisboa?',
      answer: 'No. Es una excursión independiente y normalmente ocupa un día completo. Merece la pena, pero no debería sustituir los barrios principales si es tu primera visita y tienes poco tiempo.',
    },
    {
      question: '¿Se puede visitar Lisboa sin usar transporte?',
      answer: 'El centro puede recorrerse mucho a pie, pero las cuestas y la distancia hasta Belém o Parque das Nações hacen útil combinar caminatas con metro, tranvía, autobús o tren.',
    },
  ],
  sources: [
    { label: 'Visit Lisboa — Lisboa Centro', href: 'https://www.visitlisboa.com/es/regions/lisboa-centro' },
    { label: 'Visit Lisboa — Torre de Belém', href: 'https://www.visitlisboa.com/es/sitios/torre-de-belem' },
    { label: 'Oceanário de Lisboa — planear la visita', href: 'https://oceanario.pt/planear-visita/' },
    { label: 'Museus e Monumentos de Portugal — Mosteiro dos Jerónimos', href: 'https://www.museusemonumentos.pt/en/museus-e-monumentos/mosteiro-dos-jeronimos-e-capela-de-sao-jeronimo' },
  ],
  relatedGuides: [
    {
      eyebrow: 'Ruta completa',
      title: 'Elegir itinerario por días',
      text: 'Rutas cerradas para 1, 2 y 3 días, con horarios y trayectos realistas.',
      href: '/itinerarios',
    },
    {
      eyebrow: 'Vistas',
      title: 'Comparar los miradores',
      text: 'Qué panorámica ofrece cada uno y cómo combinarlos sin repetir cuestas.',
      href: '/blog/mejores-miradores-lisboa',
    },
    {
      eyebrow: 'Presupuesto',
      title: 'Planes gratis que sí compensan',
      text: 'Barrios, jardines, río y miradores que no necesitan entrada.',
      href: '/blog/que-hacer-gratis-en-lisboa',
    },
    {
      eyebrow: 'Logística',
      title: 'Moverte sin cruzar Lisboa de más',
      text: 'Metro, tranvía, tren y caminatas elegidos según el trayecto.',
      href: '/blog/como-moverse-por-lisboa',
    },
  ],
  closingTitle: 'No necesitas verlo todo para entender Lisboa.',
  closingText:
    'Elige pocas zonas, deja margen entre ellas y reserva sólo aquello que de verdad cambiaría tu día. La ciudad se disfruta mejor cuando todavía queda espacio para detenerse.',
} satisfies TravelPillarGuide;

export const whereToEatGuide = {
  url: '/donde-comer-en-lisboa',
  eyebrow: 'Comer bien sin investigar una hora',
  title: 'Dónde comer en Lisboa',
  description:
    'Dónde comer en Lisboa según zona, presupuesto y momento: tascas, mercados, platos portugueses, sitios concretos, couvert y consejos para elegir bien.',
  lead:
    'No existe un único restaurante que resuelva Lisboa. Lo útil es reconocer qué formato necesitas, qué se come en cada zona y qué conviene mirar antes de sentarte.',
  shortAnswer:
    'Para una comida cotidiana, busca una tasca o un prato do dia fuera de la primera línea turística. Usa los mercados cuando el grupo quiera cosas distintas y reserva sólo cuando la comida sea uno de los planes importantes del viaje.',
  heroImage: '/images/lisboa-originales/time-out-market-lisboa/time-out-market-lisboa-interior-puestos-comida.jpg',
  heroAlt: 'Mesas y puestos de comida dentro del Mercado da Ribeira de Lisboa',
  heroWidth: 1280,
  heroHeight: 720,
  datePublished: '2026-09-30',
  dateModified: '2026-09-30',
  topics: [
    'Dónde comer en Lisboa',
    'Gastronomía portuguesa',
    'Tascas de Lisboa',
    'Mercados de Lisboa',
    'Platos típicos de Lisboa',
  ],
  quickAnswers: [
    {
      label: 'Para el mediodía',
      title: 'Tasca o prato do dia',
      text: 'Una carta corta y un almuerzo sencillo suelen encajar mejor que convertir cada comida en un evento.',
    },
    {
      label: 'Para probar Portugal',
      title: 'Cocina tradicional',
      text: 'Elige primero el plato o el tipo de cocina; después compara el restaurante y la zona.',
    },
    {
      label: 'Para un grupo',
      title: 'Mercado',
      text: 'Resuelve gustos distintos y horarios flexibles, aunque la comodidad y la ubicación suelen reflejarse en el precio.',
    },
    {
      label: 'Para una noche especial',
      title: 'Reserva concreta',
      text: 'Aquí sí importa asegurar mesa y elegir por cocina, ambiente y tiempo disponible, no sólo por cercanía.',
    },
  ],
  sections: [
    {
      id: 'formatos',
      eyebrow: 'Primero decide el formato',
      title: 'Tasca, mercado y restaurante no prometen lo mismo',
      intro:
        'Compararlos como si fueran alternativas iguales produce malas expectativas. Elige el formato según el momento del día y la importancia que tendrá esa comida en tu viaje.',
      items: [
        {
          title: 'Tasca',
          text: 'Local sencillo, a menudo con platos cotidianos, carta breve y servicio directo. No todas son baratas ni antiguas, pero el formato funciona bien para una comida sin ceremonia.',
        },
        {
          title: 'Casa de pasto',
          text: 'Una referencia tradicional para cocina casera y raciones sustanciosas. Mira el menú del día y qué está comiendo la sala antes de pedir por costumbre.',
        },
        {
          title: 'Cervejaria',
          text: 'Puede centrarse en marisco, pescado, bifanas o platos rápidos. Si algo se vende al peso, confirma siempre el precio y la cantidad antes de pedir.',
        },
        {
          title: 'Mercado o food hall',
          text: 'Es cómodo para grupos y para probar formatos diferentes. No presupongas que será la opción más barata: también pagas ubicación, variedad y facilidad.',
        },
        {
          title: 'Pastelaria o café',
          text: 'Sirve para desayunar, merendar o resolver una comida ligera. Distingue entre ir por un dulce concreto y sentarte con calma en un café histórico.',
        },
      ],
    },
    {
      id: 'que-comer',
      eyebrow: 'Qué pedir',
      title: 'Platos que ayudan a entender la cocina portuguesa',
      paragraphs: [
        'Lisboa reúne cocina de todo Portugal. En lugar de perseguir una lista rígida, usa estos platos como pistas y pregunta qué prepara mejor cada casa o qué pescado llegó ese día.',
      ],
      items: [
        {
          title: 'Bacalhau à Brás',
          text: 'Bacalao desmigado con patata fina, huevo y aceitunas. Es una preparación lisboeta muy fácil de encontrar, pero la textura cambia mucho de una cocina a otra.',
        },
        {
          title: 'Pescado a la brasa',
          text: 'Una de las formas más claras de comer producto portugués. Pregunta por el pescado del día y confirma si el precio es por ración o por peso.',
        },
        {
          title: 'Bifana o prego',
          text: 'Bocadillos de cerdo o ternera que resuelven una comida rápida. El lugar y los acompañamientos cambian más la experiencia que una presentación elaborada.',
        },
        {
          title: 'Caldo verde',
          text: 'Sopa de patata y couve cortada fina, a menudo con una rodaja de chouriço. Funciona como entrada o comida sencilla.',
        },
        {
          title: 'Petiscos',
          text: 'Pequeños platos para compartir, como almejas, pulpo, croquetas o preparaciones de carne. No equivalen exactamente a “tapas gratis”.',
        },
        {
          title: 'Pastel de nata',
          text: 'Se encuentra por toda Lisboa. En Belém, los Pastéis de Belém son una casa concreta y una experiencia distinta del nombre genérico pastel de nata.',
        },
      ],
    },
    {
      id: 'por-zonas',
      eyebrow: 'El barrio cambia la elección',
      title: 'Dónde buscar según dónde estés',
      image: '/images/lisboa-originales/rua-baixa-lisboa-entardecer.webp',
      imageAlt: 'Calle de la Baixa de Lisboa al atardecer',
      items: [
        {
          title: 'Baixa y Chiado',
          text: 'Tienen muchísima oferta y también la mayor concentración turística. Lee cartas, compara calles laterales y no descartes un lugar sólo por ser céntrico.',
        },
        {
          title: 'Alfama y Graça',
          text: 'Funcionan bien para tascas y cenas con ambiente, pero las cuestas y las calles estrechas hacen importante pensar cómo volver después.',
        },
        {
          title: 'Cais do Sodré y Santos',
          text: 'Combinan Mercado da Ribeira, restaurantes contemporáneos y una continuación natural hacia copas o paseo junto al río.',
        },
        {
          title: 'Campo de Ourique y Estrela',
          text: 'Son buenas zonas para una comida con ritmo de barrio. El mercado añade variedad y resulta práctico cuando el grupo no quiere lo mismo.',
        },
        {
          title: 'Mouraria y Arroios',
          text: 'La diversidad culinaria es parte central de la zona. Decide si buscas cocina portuguesa o sabores de las comunidades que también construyen Lisboa.',
        },
      ],
    },
    {
      id: 'lugares-concretos',
      eyebrow: 'Si no quieres empezar de cero',
      title: 'Cuatro paradas que resuelven situaciones distintas',
      intro:
        'No son “los mejores restaurantes de Lisboa”. Son lugares fáciles de situar y con una utilidad clara. Comprueba carta, horario y disponibilidad antes de desplazarte.',
      items: [
        {
          title: 'Time Out Market',
          text: 'En Cais do Sodré. Útil para un grupo que quiere pedir cosas diferentes y comer a una hora flexible. La contrapartida es el ruido, las mesas compartidas y un precio que prioriza comodidad y ubicación.',
        },
        {
          title: 'Mercado de Campo de Ourique',
          text: 'Combina mercado municipal y restauración en un barrio menos centrado en la visita monumental. Encaja cuando quieres variedad y después pasear por Campo de Ourique o Estrela.',
        },
        {
          title: 'Pastéis de Belém',
          text: 'Es una parada de pastelería, no una comida completa. Tiene sentido dentro de una mañana o tarde en Belém; cruzar la ciudad sólo por un pastel rara vez mejora un itinerario corto.',
        },
        {
          title: 'Tapisco',
          text: 'En Príncipe Real, con petiscos portugueses y tapas españolas para compartir. Es una opción de mesa pequeña y plan más definido; conviene reservar si la cena importa especialmente.',
        },
      ],
      note: {
        title: 'Cómo usar esta selección',
        text: 'Elige por zona y por formato. Un lugar excelente al otro lado de la ciudad puede ser una peor comida si obliga a romper todo el día.',
      },
    },
    {
      id: 'precios-y-couvert',
      eyebrow: 'Antes de pedir',
      title: 'Cuatro detalles que evitan sorpresas en la cuenta',
      intro:
        'La normativa portuguesa exige precios visibles e información sobre el couvert. La mejor defensa no es desconfiar de todo: es leer y preguntar antes.',
      items: [
        {
          title: 'El couvert',
          text: 'Pan, aceitunas, queso u otros productos pueden llegar a la mesa. Deben figurar en la lista de precios y no pueden cobrarse si no los solicitas ni los consumes.',
        },
        {
          title: 'Precio total',
          text: 'Los precios anunciados deben incluir impuestos y demás cargos. Si un producto se cobra por peso, pide el precio por kilo y una estimación de la pieza.',
        },
        {
          title: 'Meia-dose y dose',
          text: 'En algunas cartas encontrarás media ración y ración. Pregunta para cuántas personas está pensada cada una: el tamaño no es idéntico en todos los restaurantes.',
        },
        {
          title: 'La terraza visible',
          text: 'Una ubicación excelente puede justificar pagar más. El error es sentarse sin mirar la carta y descubrir después que esperabas otra experiencia.',
        },
      ],
      note: {
        title: 'Si no quieres el couvert',
        text: 'No lo pruebes y pide que lo retiren. La regla oficial es sencilla: no pueden cobrar un producto que no hayas solicitado ni utilizado.',
      },
    },
    {
      id: 'necesidades-alimentarias',
      eyebrow: 'Veggie, vegano y sin gluten',
      title: '“Hay opciones” no siempre es información suficiente',
      paragraphs: [
        'Una restricción médica necesita más detalle que una preferencia. Pregunta por ingredientes, preparación y contaminación cruzada cuando sea importante para tu salud.',
        'Para vegetarianos y veganos hay oferta creciente, pero algunos platos aparentemente vegetales pueden usar caldo, manteca o pescado. Confirmarlo evita depender de suposiciones.',
      ],
      items: [
        {
          title: 'Alergia o celiaquía',
          text: 'Explica que no es una preferencia y pregunta por preparación separada. Una etiqueta “sin gluten” no describe por sí sola la cocina ni la contaminación cruzada.',
        },
        {
          title: 'Vegetariano',
          text: 'Pregunta si el plato usa caldo de carne o pescado. Sopas, arroces y guarniciones pueden contener ingredientes que no aparecen en el nombre.',
        },
        {
          title: 'Vegano',
          text: 'Los restaurantes especializados reducen ambigüedad; en otros lugares conviene confirmar lácteos, huevo, caldo y salsas.',
        },
        {
          title: 'Con niños',
          text: 'Un mercado puede resolver gustos distintos, pero una tasca tranquila con platos sencillos suele ofrecer menos ruido y decisiones.',
        },
      ],
    },
  ],
  faqs: [
    {
      question: '¿A qué hora se come en Lisboa?',
      answer: 'El almuerzo suele concentrarse alrededor del mediodía y la cena empieza antes que en muchas ciudades españolas. Las cocinas pequeñas pueden cerrar entre servicios, así que conviene comprobar el horario del local concreto.',
    },
    {
      question: '¿El couvert es gratis?',
      answer: 'No necesariamente. Su precio debe aparecer en la carta y sólo pueden cobrarlo si lo solicitas o lo consumes. Si no lo quieres, no lo pruebes y pide que lo retiren.',
    },
    {
      question: '¿Dónde comer barato en Lisboa?',
      answer: 'Busca tascas, casas de pasto y platos del día fuera de la primera línea turística. El precio cambia por zona y formato, así que compara la carta completa antes de sentarte.',
    },
    {
      question: '¿Merece la pena el Time Out Market?',
      answer: 'Es cómodo, céntrico y ofrece mucha variedad, especialmente para grupos. Puede estar lleno y no suele ser la opción más económica; merece la pena cuando valoras la facilidad más que una comida íntima.',
    },
    {
      question: '¿Hay opciones vegetarianas y sin gluten?',
      answer: 'Sí, pero el nivel de adaptación cambia mucho. Para una restricción médica, confirma ingredientes, preparación y contaminación cruzada directamente con el establecimiento.',
    },
    {
      question: '¿Necesito reservar todos los restaurantes?',
      answer: 'No. Reserva una cena especial o un local muy demandado; para una comida cotidiana suele ser mejor conservar flexibilidad y llegar antes de la hora punta.',
    },
  ],
  sources: [
    { label: 'ASAE — precios y couvert en restauración', href: 'https://www.asae.gov.pt/perguntas-frequentes1/area-economica/precos/precos-em-servicos-de-restauracao.aspx' },
    { label: 'Lisboa Comércio — ferias y mercados municipales', href: 'https://comercio.lisboa.pt/feiras-e-mercados/' },
    { label: 'Câmara Municipal de Lisboa — Mercado da Ribeira', href: 'https://www.lisboa.pt/pontos-de-interesse/detalhe/mercado-da-ribeira' },
    { label: 'Câmara Municipal de Lisboa — Mercado de Campo de Ourique', href: 'https://www.lisboa.pt/espacos-e-servicos/detalhe/mercado-campo-de-ourique' },
    { label: 'Pastéis de Belém — información oficial', href: 'https://pasteisdebelem.pt/en/contact/' },
    { label: 'Visit Lisboa — Tapisco', href: 'https://www.visitlisboa.com/es/sitios/tapisco' },
    { label: 'Visit Portugal — gastronomía portuguesa', href: 'https://www.visitportugal.com/es/experiencias/gastronomia-e-vinhos' },
  ],
  relatedGuides: [
    {
      eyebrow: 'Presupuesto',
      title: 'Comer barato con precios revisados',
      text: 'Tascas, menús de almuerzo y ejemplos fechados para elegir por zona.',
      href: '/blog/donde-comer-barato-lisboa',
    },
    {
      eyebrow: 'Qué pedir',
      title: 'Entender la cocina portuguesa',
      text: 'Platos, ingredientes y formas de comer que aparecen una y otra vez en las cartas.',
      href: '/blog/gastronomia-portuguesa-guia',
    },
    {
      eyebrow: 'Para grupos',
      title: 'Comparar mercados de Lisboa',
      text: 'Mercados gastronómicos, de abastos y ferias: no todos sirven para lo mismo.',
      href: '/blog/mejores-mercados-lisboa',
    },
    {
      eyebrow: 'Una pausa',
      title: 'Pedir café sin dudar',
      text: 'Bica, galão, cafés históricos y especialidad explicados con claridad.',
      href: '/blog/donde-tomar-cafe-lisboa',
    },
  ],
  closingTitle: 'La mejor comida es la que encaja con ese día.',
  closingText:
    'No conviertas desayuno, almuerzo y cena en tres investigaciones. Elige bien una comida importante y deja que las otras sean sencillas, cercanas y portuguesas.',
} satisfies TravelPillarGuide;
