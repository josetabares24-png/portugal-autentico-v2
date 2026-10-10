/**
 * Guías de entradas que viven en la URL de su ficha de actividad.
 *
 * El Castelo de São Jorge ya tenía ficha propia en /actividades/castelo-sao-jorge,
 * y es la URL que Google ya conoce. En vez de abrir un artículo nuevo en /blog y
 * repartir la búsqueda «castillo san jorge entradas» entre dos páginas, la ficha
 * se convierte en la guía completa: mismo formato que las guías de Pena y
 * Jerónimos, en la misma dirección.
 *
 * Todos los datos salen de castelodesaojorge.pt (precios, horarios, accesos),
 * comprobados el 10/10/2026. No hay frase personal de José sobre el castillo:
 * nada en primera persona.
 *
 * Avisos con fecha: la huelga del 17/10/2026 y el museo cerrado por obras.
 * Quitar el de la huelga después del 17 de octubre y revisar el del museo.
 */
import type { Article, ArticleFaq } from '@/components/blog/article-types';
import type { BlogBookingPlacement } from '@/data/blog-booking-placements';

export interface TicketGuide {
  article: Article;
  faqs: ArticleFaq[];
  placements: BlogBookingPlacement[];
  /** Categoría de la miga de pan visible (Inicio › Actividades › …). */
  breadcrumbLabel: string;
}

const CASTELO_OFICIAL = 'https://castelodesaojorge.pt';

export const TICKET_GUIDES: Record<string, TicketGuide> = {
  'castelo-sao-jorge': {
    breadcrumbLabel: 'Castelo de São Jorge',
    article: {
      titulo: 'Castillo de San Jorge: entradas, precio y horario (2026)',
      descripcion:
        'Cuánto cuesta la entrada al Castelo de São Jorge en 2026, quién entra gratis, dónde comprarla, a qué hora cierran las murallas y cómo subir sin la cuesta.',
      seoTitle: 'Castillo de San Jorge: entradas, precio y horario 2026',
      metaDescription:
        'Entrada 17 €, gratis con la Lisboa Card y para menores de 12. Horario de verano e invierno, dónde comprarla y el autobús 737, que te deja a dos minutos.',
      imagen: '/images/actividades/castelo-sao-jorge-lisboa.webp',
      imageAlt: 'Murallas y torres del Castelo de São Jorge sobre Lisboa',
      categoria: 'Entradas',
      fecha: '10 Oct 2026',
      fechaActualizacion: 'Verificado el 10 de octubre de 2026',
      dateModified: '2026-10-10',
      minutos: 7,
      links: [
        { href: '/blog/alfama-historia-guia', label: 'Qué ver en Alfama' },
        { href: '/actividades/miradouro-santa-luzia', label: 'Miradouro de Santa Luzia' },
        { href: '/actividades/miradouro-portas-do-sol', label: 'Miradouro das Portas do Sol' },
        { href: '/blog/lisboa-card-vale-la-pena', label: 'Cuándo compensa la Lisboa Card' },
        { href: '/blog/tarjeta-navegante-lisboa', label: 'Tarjeta Navegante y tarifas 2026' },
        { href: '/itinerarios/lisboa-2-dias-completo', label: 'Lisboa en 2 días' },
        { href: '/comprar-entradas', label: 'Entradas de Lisboa' },
      ],
      fuentes: [
        { label: 'Castelo de São Jorge: elegir el billete (precios y gratuidades)', href: `${CASTELO_OFICIAL}/como-visitar/escolher-o-bilhete/` },
        { label: 'Castelo de São Jorge: horarios y avisos', href: `${CASTELO_OFICIAL}/como-visitar/horarios/` },
        { label: 'Castelo de São Jorge: información útil', href: `${CASTELO_OFICIAL}/informacoes/informacoes-uteis/` },
        { label: 'Castelo de São Jorge: cómo llegar', href: `${CASTELO_OFICIAL}/como-visitar/como-chegar/` },
        { label: 'Carris: línea 737', href: 'https://www.carris.pt/viaje/carreiras/737' },
      ],
      contenido: [
        {
          tipo: 'parrafo',
          texto:
            'La entrada al Castelo de São Jorge cuesta 17 € en 2026. Los menores de 12 años entran gratis, y quien lleva la Lisboa Card de adulto, también. Abre todos los días: hasta el 31 de octubre de 9:00 a 21:00 y en invierno de 9:00 a 18:00. Las murallas y las torres cierran antes que el recinto. Para no subir la cuesta, el autobús 737 desde Praça da Figueira para a dos minutos de la puerta.',
        },
        {
          tipo: 'lista',
          items: [
            'Adulto, 17 €. De 13 a 25 años, 8,50 €. Mayores de 65, 14 €. Menores de 12, gratis.',
            'Gratis con la Lisboa Card de adulto.',
            'Verano (1 de marzo a 31 de octubre): de 9:00 a 21:00, última entrada a las 20:30.',
            'Invierno (1 de noviembre a finales de febrero): de 9:00 a 18:00, última entrada a las 17:30.',
            'Murallas y torres: en invierno cierran a las 17:30; en verano, entre las 18:00 y las 21:00 según la luz.',
            'Cierra el 1 de enero, el 1 de mayo y el 24, 25 y 31 de diciembre.',
            'Cómo llegar: autobús 737 desde Praça da Figueira hasta la parada Castelo, y dos minutos a pie.',
          ],
        },
        {
          tipo: 'aviso',
          texto:
            'Avisos de octubre de 2026: el museo del castillo está cerrado temporalmente por obras en los aseos. Y para el 17 de octubre hay convocada una huelga que puede afectar a la visita; si vas ese día, mira la web del castillo antes de salir.',
        },

        { tipo: 'subtitulo', texto: 'Precios 2026' },
        {
          tipo: 'tabla',
          texto: 'Precios de la entrada al Castelo de São Jorge en 2026.',
          columnas: ['Entrada', 'Precio'],
          filas: [
            ['Adulto', '17 €'],
            ['Jóvenes de 13 a 25 años', '8,50 €'],
            ['Mayores de 65 años', '14 €'],
            ['Personas con necesidades específicas', '12 €'],
            ['Menores de 12 años', 'Gratis'],
            ['Con Lisboa Card de adulto', 'Gratis'],
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Los descuentos también se pueden comprar online, pero en la entrada te piden el justificante: el carné que acredite la edad o la condición. Sin él, no te validan el billete.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Hay más casos con precio reducido o gratis: el acompañante de una persona con necesidades específicas, profesionales de la cultura, grupos escolares y algunos más. Están todos en la página oficial de precios, enlazada al final.',
        },
        {
          tipo: 'parrafo',
          texto:
            'No hay un día gratis para todo el mundo. Fuera de esos casos, la entrada se paga cualquier día de la semana.',
        },

        { tipo: 'subtitulo', texto: 'Dónde comprar la entrada' },
        {
          tipo: 'parrafo',
          texto:
            'Los dos sitios oficiales son la taquilla del castillo, en la Rua de Santa Cruz do Castelo, y la venta online de BOL (Bilheteira Online). El castillo dice en su web que BOL es la única plataforma online autorizada y que no responde de lo que se compre en otras.',
        },
        {
          tipo: 'tabla',
          texto: 'Dónde comprar la entrada al Castelo de São Jorge.',
          columnas: ['Dónde', 'Precio adulto', 'Para quién'],
          filas: [
            ['BOL, venta online oficial', '17 €', 'Quien quiere comprar en el canal oficial'],
            ['Taquilla del castillo', '17 €', 'Quien llega sin billete o quiere enseñar el justificante del descuento allí mismo'],
            ['GetYourGuide', 'El de su ficha, según la fecha', 'Quien prefiere comprar en español; esta entrada lleva audioguía'],
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Con el billete comprado no pasas por la taquilla: vas directo a la entrada. Si lo compras en GetYourGuide, cualquier problema con esa entrada se resuelve con GetYourGuide, no con el castillo.',
        },

        { tipo: 'subtitulo', texto: 'Horarios y cierres' },
        {
          tipo: 'tabla',
          texto: 'Horarios del Castelo de São Jorge.',
          columnas: ['Temporada', 'Abierto', 'Última entrada', 'Murallas y torres'],
          filas: [
            ['Verano: 1 de marzo a 31 de octubre', '9:00 a 21:00', '20:30', 'Cierran entre las 18:00 y las 21:00, según la luz'],
            ['Invierno: 1 de noviembre a finales de febrero', '9:00 a 18:00', '17:30', 'Cierran a las 17:30'],
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Abre los siete días de la semana, también los lunes. Cierra el 1 de enero, el 1 de mayo y el 24, el 25 y el 31 de diciembre.',
        },
        {
          tipo: 'aviso',
          texto:
            'El 31 de diciembre las páginas oficiales no coinciden: una lo da como cerrado, otra como cerrado desde las 12:30 y la venta oficial dice que cierra a las 13:00. Si solo puedes ir ese día, ve por la mañana y confírmalo antes.',
        },

        { tipo: 'subtitulo', texto: 'Qué incluye la entrada' },
        {
          tipo: 'lista',
          items: [
            'Las murallas y once torres, que se recorren por arriba, con los horarios de la tabla.',
            'Los jardines del recinto, con los pavos reales sueltos, y la panorámica sobre la Baixa y el Tajo.',
            'La cámara oscura de la Torre de Ulises, que proyecta la ciudad en tiempo real. Solo se entra con la visita guiada, incluida en el billete.',
            'El núcleo arqueológico, solo para quien va en la visita guiada general «À Descoberta do Castelo», también incluida.',
            'El museo del castillo, ahora cerrado por obras.',
          ],
        },
        {
          tipo: 'tabla',
          texto: 'Horario de la cámara oscura, según el mes.',
          columnas: ['Meses', 'Cámara oscura'],
          filas: [
            ['Enero, febrero, octubre, noviembre y diciembre', '11:00 a 13:00'],
            ['Marzo', '11:00 a 14:00'],
            ['Abril y septiembre', '11:00 a 15:00'],
            ['Mayo a agosto', '11:00 a 16:00'],
          ],
        },
        {
          tipo: 'tip',
          texto:
            'La cámara oscura depende del tiempo: con lluvia o cielo cerrado puede no funcionar. Pregunta en la taquilla el mismo día antes de organizar la visita alrededor de ella.',
        },
        {
          tipo: 'parrafo',
          texto: 'Cuenta entre hora y media y dos horas si quieres subir a las murallas con calma.',
        },

        { tipo: 'subtitulo', texto: 'Cuándo ir' },
        {
          tipo: 'parrafo',
          texto:
            'A primera hora, cuando abre a las 9:00, o en las dos últimas horas del día. Al mediodía en verano no hay sombra en las murallas y se pasa mal.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Si lo que quieres son las murallas, no lo dejes para el final: en verano el acceso a las murallas y torres puede cerrar desde las 18:00 aunque el recinto siga abierto hasta las 21:00, y en invierno cierra a las 17:30. Y si te interesa la cámara oscura, tiene que ser por la mañana: abre a las 11:00 y de octubre a febrero cierra a las 13:00.',
        },

        { tipo: 'subtitulo', texto: 'Cómo llegar' },
        {
          tipo: 'lista',
          items: [
            'Autobús 737 desde Praça da Figueira hasta la parada Castelo, en el Chão da Feira, y dos minutos a pie. Es la forma de llegar sin subir la cuesta.',
            'Tranvía 28E hasta Miradouro de Santa Luzia o Largo Portas do Sol, y unos cinco minutos a pie.',
            'Metro hasta Rossio y unos once minutos andando, usando el ascensor del Chão do Loureiro: se entra por el Largo do Caldas y se sale en la Costa do Castelo, con buena parte de la subida hecha.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Con la tarjeta Navegante y saldo zapping, el autobús y el tranvía cuestan 1,72 € por viaje. Pagando el billete a bordo del tranvía, 3,30 €. La entrada principal está en la Rua de Santa Cruz do Castelo.',
        },
        {
          tipo: 'enlace',
          texto: 'Cómo cargar la Navegante y cuánto cuesta cada viaje.',
          href: '/blog/tarjeta-navegante-lisboa',
          label: 'Tarjeta Navegante y tarifas 2026',
        },

        { tipo: 'subtitulo', texto: 'Con la Lisboa Card' },
        {
          tipo: 'parrafo',
          texto:
            'La Lisboa Card de adulto incluye la entrada al castillo: la enseñas en la puerta. Si es lo único que vas a hacer ese día, sale más barato pagar los 17 €; la tarjeta compensa cuando juntas varios monumentos y mucho transporte.',
        },
        {
          tipo: 'enlace',
          texto: 'La cuenta hecha con los precios de 2026.',
          href: '/blog/lisboa-card-vale-la-pena',
          label: 'Cuándo compensa la Lisboa Card',
        },

        { tipo: 'subtitulo', texto: 'Si no quieres pagar la entrada' },
        {
          tipo: 'parrafo',
          texto:
            'Los miradores de Santa Luzia y Portas do Sol están en el camino al castillo y son gratis. No es la vista del recinto, que mira más hacia la Baixa, pero desde ahí tienes los tejados de Alfama y el río.',
        },
        {
          tipo: 'enlace',
          texto: 'Una ruta a pie por Alfama con los dos miradores y el castillo en el recorrido.',
          href: '/blog/alfama-historia-guia',
          label: 'Qué ver en Alfama',
        },
      ],
    },
    faqs: [
      {
        q: '¿Cuánto cuesta la entrada al Castillo de San Jorge en 2026?',
        a: '17 € para adultos. De 13 a 25 años, 8,50 €, y mayores de 65, 14 €, enseñando el justificante en la entrada. Los menores de 12 entran gratis.',
      },
      {
        q: '¿Es gratis con la Lisboa Card?',
        a: 'Sí, con la Lisboa Card de adulto la entrada es gratuita. Se enseña la tarjeta en la puerta.',
      },
      {
        q: '¿Hay algún día gratis?',
        a: 'No para todo el mundo. Entran gratis los menores de 12, quien lleva la Lisboa Card de adulto y los casos de la lista oficial, como el acompañante de una persona con necesidades específicas.',
      },
      {
        q: '¿Abre los lunes?',
        a: 'Sí. Abre todos los días y solo cierra el 1 de enero, el 1 de mayo y el 24, 25 y 31 de diciembre.',
      },
      {
        q: '¿Hasta qué hora se puede subir a las murallas?',
        a: 'En invierno, hasta las 17:30. En verano el recinto abre hasta las 21:00, pero las murallas y las torres cierran entre las 18:00 y las 21:00, según la luz del día.',
      },
      {
        q: '¿Hay que comprar la entrada antes?',
        a: 'No es obligatorio: se vende en la taquilla. Con el billete comprado online vas directo a la entrada sin pasar por la taquilla. La única venta online oficial es BOL.',
      },
      {
        q: '¿Cómo llego sin subir la cuesta?',
        a: 'Con el autobús 737 desde Praça da Figueira hasta la parada Castelo, que queda a dos minutos a pie de la entrada.',
      },
      {
        q: '¿Cuánto tiempo hace falta?',
        a: 'Entre hora y media y dos horas, contando la subida a las murallas.',
      },
    ],
    placements: [
      {
        offer: { type: 'product', productId: 'castelo-sao-jorge' },
        position: 'after-summary',
        intro:
          'Si prefieres comprarla en español, GetYourGuide vende la entrada con audioguía. Mira el precio y las condiciones de cancelación en su ficha antes de pagar; la venta oficial del castillo es BOL.',
      },
    ],
  },
};

export function getTicketGuide(slug: string): TicketGuide | undefined {
  return TICKET_GUIDES[slug];
}
