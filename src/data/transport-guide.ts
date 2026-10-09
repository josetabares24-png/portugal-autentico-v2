import type { TravelPillarGuide } from '@/components/traveler/TravelPillarPage';

/**
 * Página central de transporte (/transporte-lisboa).
 *
 * Reparte a las guías de transporte del blog y a las fichas de /actividades.
 * No sustituye a /blog/como-moverse-por-lisboa: esa explica cómo funciona
 * cada medio; esta da los precios oficiales en una tabla y manda a la guía
 * que resuelve cada caso.
 *
 * Precios: tarifas 2026 de Carris, Metro de Lisboa y CP y tabla de precios
 * de Lisboa Card (abril 2026 - marzo 2027), comprobadas el 9/10/2026.
 * Si cambia alguna, se cambia aquí y en la fecha de `dateModified`.
 */
export const transportGuide = {
  url: '/transporte-lisboa',
  eyebrow: 'Billetes, precios y trayectos',
  title: 'Transporte en Lisboa',
  description:
    'Transporte en Lisboa en 2026: qué billete comprar, precios oficiales de metro, bus, tranvía y tren, y cómo ir desde el aeropuerto o a Sintra y Cascais.',
  lead:
    'Lo que he escrito sobre moverse por Lisboa, reunido en una página: qué billete comprar, cuánto cuesta cada trayecto y qué guía leer para cada caso.',
  shortAnswer:
    'Compra una tarjeta Navegante ocasional por persona (0,50 €) y cárgala con zapping. Cada viaje en metro, autobús o tranvía te sale a 1,72 €, y el tren a Sintra o Cascais a 2,05 €. Del aeropuerto sale la Línea Roja del metro; para la Baixa o Alfama tendrás que cambiar de línea.',
  heroImage: '/images/lisboa-originales/tranvia-turistico-baixa-lisboa-02.webp',
  heroAlt: 'Tranvía amarillo por una calle de la Baixa de Lisboa',
  heroWidth: 900,
  heroHeight: 675,
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  topics: [
    'Transporte en Lisboa',
    'Metro de Lisboa',
    'Tarjeta Navegante',
    'Tranvía 28',
    'Tren a Sintra y Cascais',
  ],
  quickAnswers: [
    {
      label: 'Qué billete comprar',
      title: 'Navegante con zapping',
      text: 'Una tarjeta por persona, 0,50 €. Con zapping pagas 1,72 € por viaje en metro, bus y tranvía. Pagando el tranvía a bordo, 3,30 €.',
    },
    {
      label: 'Desde el aeropuerto',
      title: 'Metro, Línea Roja',
      text: 'La estación Aeroporto está en la propia terminal. Hasta Saldanha son unos 20 minutos. El metro funciona de 6:30 a 1:00.',
    },
    {
      label: 'Un día de mucho moverte',
      title: 'Billete de 24 horas',
      text: '7,25 € en Carris y Metro. Compensa a partir del quinto viaje del día: con cuatro, el zapping sigue saliendo más barato.',
    },
    {
      label: 'Sintra o Cascais',
      title: 'Tren de CP',
      text: 'A Sintra desde Rossio y a Cascais desde Cais do Sodré. 2,55 € el billete sencillo, o 2,05 € con zapping en la misma Navegante.',
    },
  ],
  sections: [
    {
      id: 'precios',
      eyebrow: 'Tarifas oficiales 2026',
      title: 'Precios del transporte en Lisboa',
      intro:
        'Son las tarifas de adulto que publican Carris, Metro de Lisboa y CP para 2026, y las de la Lisboa Card. Las comprobé el 9 de octubre de 2026.',
      table: {
        caption: 'Precios oficiales consultados el 9 de octubre de 2026. Fuentes al final de la página.',
        columns: ['Billete', 'Precio', 'Para qué sirve'],
        rows: [
          ['Tarjeta Navegante ocasional', '0,50 €', 'Es la tarjeta donde cargas los billetes. Dura un año y no trae viajes.'],
          ['Zapping (metro, bus, tranvía)', '1,72 € por viaje', 'Saldo en la Navegante. Se carga desde 3 €.'],
          ['Billete Carris/Metro', '1,90 €', 'Una hora en bus, tranvía y metro, pero solo una entrada al metro.'],
          ['Tarjeta bancaria en el metro', '1,92 € por viaje', 'Pagas en el torniquete. Una tarjeta o móvil por persona.'],
          ['24 horas Carris/Metro', '7,25 €', 'Viajes sin límite durante 24 horas desde que lo validas.'],
          ['24 horas Carris/Metro/Transtejo', '10,35 €', 'Lo mismo más el barco a Cacilhas.'],
          ['24 horas Carris/Metro/CP', '11,40 €', 'Lo mismo más los trenes de cercanías, incluidos los de Sintra y Cascais.'],
          ['Tren Lisboa–Sintra o Lisboa–Cascais', '2,55 € (5,10 € ida y vuelta)', 'Billete sencillo de CP, cargado en la Navegante.'],
          ['Zapping en el tren de CP', '2,05 € por viaje', 'El mismo saldo que usas en el metro.'],
          ['Autobús pagando a bordo', '2,30 €', 'Si subes sin tarjeta.'],
          ['Tranvía pagando a bordo', '3,30 €', 'Si subes sin tarjeta.'],
          ['Ascensores y funiculares a bordo', '4,30 €', 'Hasta dos viajes.'],
          ['Lisboa Card 24 / 48 / 72 h', '31 / 51 / 62 €', 'Transporte sin límite, trenes a Sintra y Cascais incluidos, y entrada en museos.'],
        ],
      },
      note: {
        title: 'Un viaje zapping, un operador',
        text: 'Si haces metro y luego tranvía, se descuentan dos viajes. Y cada Navegante vale para una persona: si viajáis dos, comprad dos.',
      },
    },
    {
      id: 'aeropuerto',
      eyebrow: 'Al llegar',
      title: 'Del aeropuerto al centro',
      paragraphs: [
        'El aeropuerto está dentro de la ciudad y tiene estación de metro. La Línea Roja te deja en Saldanha en unos 20 minutos; para la Baixa, Chiado o Alfama hay que cambiar de línea o terminar andando. Con varias maletas o niños, compara el taxi de la parada oficial o Uber y Bolt, que recogen en el P2.',
      ],
      links: [
        { href: '/blog/aeropuerto-lisboa-al-centro', label: 'Aeropuerto de Lisboa al centro: metro, taxi y apps' },
        { href: '/blog/metro-lisboa-guia', label: 'Metro de Lisboa: líneas, horarios y billetes' },
      ],
    },
    {
      id: 'que-billete',
      eyebrow: 'Billetes',
      title: 'Qué billete te conviene',
      items: [
        {
          title: 'Unos días en la ciudad, sin prisa',
          text: 'Navegante con zapping. Pagas solo lo que usas y te vale también para el tren a Sintra o Cascais.',
        },
        {
          title: 'Un día de muchos trayectos',
          text: 'El de 24 horas Carris/Metro (7,25 €). Si ese día vas a Sintra o Cascais y te mueves mucho por Lisboa, mira el que incluye CP (11,40 €).',
        },
        {
          title: 'Un solo trayecto en metro',
          text: 'Paga con tu tarjeta bancaria en el torniquete (1,92 €) y no compres Navegante.',
        },
        {
          title: 'Muchos museos en pocos días',
          text: 'Entonces sí compara la Lisboa Card. Más abajo está la cuenta.',
        },
      ],
      links: [
        { href: '/blog/tarjeta-navegante-lisboa', label: 'Tarjeta Navegante: cuál comprar y cómo recargarla' },
        { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa: metro, tranvía, bus y tren' },
      ],
    },
    {
      id: 'tranvias',
      eyebrow: 'Tranvías y elevadores',
      title: 'Tranvía 28, elevadores y funiculares',
      paragraphs: [
        'El 28 es una línea normal de Carris, así que con la Navegante pagas 1,72 € en lugar de los 3,30 € a bordo. Los elevadores y funiculares cuestan 4,30 € a bordo. El de Santa Justa tiene el mirador cerrado: compruébalo antes de ir.',
      ],
      links: [
        { href: '/blog/tram-28-historia-guia', label: 'Tranvía 28: ruta, paradas y cómo evitar colas' },
        { href: '/actividades/tranvia-28', label: 'Ficha del tranvía 28' },
        { href: '/actividades/elevador-santa-justa', label: 'Elevador de Santa Justa: estado actual' },
      ],
    },
    {
      id: 'estaciones',
      eyebrow: 'Estaciones',
      title: 'Oriente, Olaias y los patinetes',
      paragraphs: [
        'Oriente junta metro, trenes y autobuses, y es la puerta al Parque das Nações. Olaias, en la Línea Roja, merece una parada si te gusta la arquitectura o la fotografía. Los patinetes de alquiler resuelven algún trayecto corto, pero no hacen cómodas las cuestas: mira el precio en la app antes de desbloquear.',
      ],
      links: [
        { href: '/blog/estacion-oriente-lisboa', label: 'Estación de Oriente: trenes, metro y qué ver' },
        { href: '/blog/estacion-olaias-lisboa', label: 'Estación de Olaias: arte bajo tierra' },
        { href: '/blog/patinetes-electricos-lisboa', label: 'Patinetes en Lisboa: precios, apps y dónde aparcar' },
      ],
    },
    {
      id: 'excursiones',
      eyebrow: 'Fuera de Lisboa',
      title: 'Tren a Sintra y a Cascais, y barco a Cristo Rei',
      paragraphs: [
        'Los dos trenes salen del centro: a Sintra desde Rossio y a Cascais desde Cais do Sodré. Con zapping, cada trayecto cuesta 2,05 €. En Sintra, para subir a la Pena desde la estación está el autobús 434, que va aparte. A Cristo Rei se llega cruzando el río en barco hasta Cacilhas y siguiendo en autobús.',
      ],
      links: [
        { href: '/blog/sintra-desde-lisboa', label: 'Sintra desde Lisboa: tren, autobús 434 y hora de la Pena' },
        { href: '/blog/que-ver-cascais-desde-lisboa', label: 'Cascais desde Lisboa: tren y qué ver' },
        { href: '/actividades/sintra-dia-completo', label: 'Ficha de Sintra: Pena y Regaleira' },
        { href: '/actividades/cascais-cabo-da-roca', label: 'Ficha de Cascais y Cabo da Roca' },
        { href: '/actividades/cristo-rei', label: 'Ficha de Cristo Rei' },
      ],
    },
    {
      id: 'lisboa-card',
      eyebrow: 'Tarjeta turística',
      title: '¿Y la Lisboa Card?',
      paragraphs: [
        'Incluye todo el transporte de la tabla, también los trenes a Sintra y Cascais, más la entrada en más de 50 museos y monumentos. Solo para moverte no compensa: con zapping, 31 € son 18 viajes. Sale a cuenta si en esas horas vas a entrar en varios sitios de pago. Por ejemplo, Jerónimos (18 €), Torre de Belém (15 €) y un día de transporte (7,25 €) ya suman 40,25 €.',
      ],
      links: [
        { href: '/blog/lisboa-card-vale-la-pena', label: 'Lisboa Card: qué incluye y cuándo vale la pena' },
      ],
    },
  ],
  faqs: [
    {
      question: '¿Puedo usar una Navegante para dos personas?',
      answer: 'No. En cada viaje la tarjeta vale para una sola persona, así que compra una por persona. Cuesta 0,50 €.',
    },
    {
      question: '¿El zapping vale para el metro y el tranvía en el mismo viaje?',
      answer: 'Cada viaje zapping vale para un solo operador. Metro y luego tranvía son dos viajes: 3,44 € en total.',
    },
    {
      question: '¿La Lisboa Card incluye el tren a Sintra y a Cascais?',
      answer: 'Sí. Según CP, incluye la Línea de Sintra entre Rossio u Oriente y Sintra, y la de Cascais entre Cais do Sodré y Cascais.',
    },
    {
      question: '¿Puedo pagar el metro con la tarjeta del banco?',
      answer: 'Sí, con tarjetas Visa o Mastercard contactless, o con el móvil. Son 1,92 € por viaje y tienes que usar la misma tarjeta o el mismo móvil para entrar y para salir.',
    },
  ],
  sources: [
    { label: 'Carris: tarifas 2026', href: 'https://www.carris.pt/descubra/novo-tarifario-2026/' },
    { label: 'Metro de Lisboa: nuevas tarifas 2026', href: 'https://www.metrolisboa.pt/2025/12/19/novas-tarifas-2026/' },
    { label: 'Metro de Lisboa: comprar billetes y Navegante', href: 'https://www.metrolisboa.pt/comprar/' },
    { label: 'CP: precios de los trenes urbanos de Lisboa 2026 (PDF)', href: 'https://cp.pt/info/documents/d/cp/precos-comboios-urbanos-lisboa' },
    { label: 'CP: Lisboa Card y trenes incluidos', href: 'https://www.cp.pt/info/w/lisboa-card' },
    { label: 'Lisboa Card: precios 2026-2027', href: 'https://www.lisboacard.org/pt/precos/' },
    { label: 'Aeropuerto de Lisboa: transporte público', href: 'https://www.lisbonairport.pt/en/lis/access-parking/getting-to-and-from-the-airport/public-transportation' },
  ],
  relatedGuides: [
    {
      eyebrow: 'Guía completa',
      title: 'Cómo moverse por Lisboa',
      text: 'Metro, tranvía, autobús y tren explicados uno por uno, con cuándo usar cada uno.',
      href: '/blog/como-moverse-por-lisboa',
    },
    {
      eyebrow: 'Billetes',
      title: 'Tarjeta Navegante',
      text: 'Cuál comprar, dónde recargarla y cuándo te conviene el billete de 24 horas.',
      href: '/blog/tarjeta-navegante-lisboa',
    },
    {
      eyebrow: 'Al llegar',
      title: 'Del aeropuerto al centro',
      text: 'Metro, autobús, taxi o Uber según tus maletas y la hora a la que aterrices.',
      href: '/blog/aeropuerto-lisboa-al-centro',
    },
    {
      eyebrow: 'Excursión',
      title: 'Sintra desde Lisboa',
      text: 'El tren desde Rossio, el autobús 434 y cómo encajar la hora de la Pena.',
      href: '/blog/sintra-desde-lisboa',
    },
  ],
  closingTitle: 'Si solo te quedas con una cosa',
  closingText:
    'Una Navegante por persona, cargada con zapping, te sirve para el metro, el autobús, el tranvía y el tren a Sintra o Cascais. Lo demás solo hace falta en días concretos.',
} satisfies TravelPillarGuide;
