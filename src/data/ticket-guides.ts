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
 * comprobados el 10/10/2026 y otra vez el 25/10/2026. No hay frase personal de
 * José sobre el castillo: nada en primera persona.
 *
 * Aviso con fecha: el museo cerrado por obras (sigue en la web oficial el
 * 25/10/2026). El de la huelga del 17/10 se quitó al pasar la fecha.
 *
 * Oceanário y Torre de Belém (25/10/2026) siguen el mismo formato en la URL de
 * su ficha. Precios y horarios de oceanario.pt, museusemonumentos.pt,
 * mosteirojeronimos.torrebelem.gov.pt y la venta oficial (MEO Blueticket),
 * comprobados ese día. Tampoco hay frases personales de José: nada en primera
 * persona. Los precios de GetYourGuide y Tiqets no se escriben: cambian con la
 * fecha y la moneda.
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
const OCEANARIO_OFICIAL = 'https://oceanario.pt';
const BELEM_OFICIAL = 'https://mosteirojeronimos.torrebelem.gov.pt';

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
      fechaActualizacion: 'Verificado el 25 de octubre de 2026',
      dateModified: '2026-10-25',
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
            'Aviso, comprobado el 25 de octubre de 2026: el museo del castillo está cerrado temporalmente por obras en los aseos. El resto del recinto abre con normalidad.',
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
  'oceanario-lisboa': {
    breadcrumbLabel: 'Oceanário de Lisboa',
    article: {
      titulo: 'Oceanário de Lisboa: entradas, precios y horario (2026)',
      descripcion:
        'Cuánto cuesta la entrada al Oceanário de Lisboa en 2026 según la hora, el descuento de la compra online, el horario de los días especiales, qué incluye el billete y cómo llegar en metro.',
      seoTitle: 'Oceanário de Lisboa: entradas, precio y horario 2026',
      metaDescription:
        'Entrada de 25,50 € a 29,90 € según la hora, y un 10 % menos online con ONLINE10. Horario, días especiales, qué incluye y cómo llegar en metro.',
      imagen: '/images/actividades/oceanario-de-lisboa.webp',
      imageAlt: 'Exterior del Oceanário de Lisboa visto desde el paseo del Parque das Nações',
      categoria: 'Entradas',
      fecha: '25 Oct 2026',
      fechaActualizacion: 'Verificado el 25 de octubre de 2026',
      dateModified: '2026-10-25',
      minutos: 6,
      links: [
        { href: '/blog/parque-das-nacoes-lisboa-que-ver', label: 'Qué ver en Parque das Nações' },
        { href: '/blog/estacion-oriente-lisboa', label: 'Estación de Oriente' },
        { href: '/blog/lisboa-con-ninos', label: 'Lisboa con niños' },
        { href: '/blog/lisboa-cuando-llueve', label: 'Qué hacer en Lisboa cuando llueve' },
        { href: '/blog/tarjeta-navegante-lisboa', label: 'Tarjeta Navegante y tarifas 2026' },
        { href: '/comprar-entradas', label: 'Entradas de Lisboa' },
      ],
      fuentes: [
        { label: 'Oceanário de Lisboa: planear la visita (precios, horarios, normas)', href: `${OCEANARIO_OFICIAL}/planear-visita/` },
        { label: 'Oceanário de Lisboa: preguntas frecuentes', href: `${OCEANARIO_OFICIAL}/perguntas-frequentes/` },
        { label: 'Oceanário de Lisboa: venta oficial de entradas', href: 'https://tickets.oceanario.pt/' },
      ],
      contenido: [
        {
          tipo: 'parrafo',
          texto:
            'La entrada al Oceanário de Lisboa cuesta entre 25,50 € y 29,90 € para un adulto: depende de la hora a la que entres, y la franja más barata es la de la tarde. Comprando en la web oficial con el código ONLINE10 hay un 10 % de descuento. Abre todos los días de 10:00 a 20:00, con última entrada a las 19:00, y se llega en metro: línea roja hasta Oriente.',
        },
        {
          tipo: 'lista',
          items: [
            'Adulto (13 a 64 años): 29,90 € por la mañana, 27,70 € a mediodía y 25,50 € por la tarde.',
            'Niños de 3 a 12 años, de 15,50 € a 17,70 €. Mayores de 65, de 17,70 € a 19,90 €. Hasta 2 años, gratis.',
            'Online, en tickets.oceanario.pt, un 10 % menos con el código ONLINE10.',
            'Todos los días de 10:00 a 20:00, última entrada a las 19:00. El 24, el 25 y el 31 de diciembre y el 1 de enero tienen horario especial.',
            'La visita lleva entre hora y media y dos horas, según el propio Oceanário.',
            'Cómo llegar: metro línea roja hasta Oriente y unos minutos a pie por el Parque das Nações.',
          ],
        },

        { tipo: 'subtitulo', texto: 'Precios 2026 según la hora' },
        {
          tipo: 'tabla',
          texto: 'Precios de la visita al Oceanário de Lisboa en 2026, según la franja de entrada.',
          columnas: ['Franja de entrada', 'Adulto (13-64)', 'Niño (3-12)', 'Mayor de 65'],
          filas: [
            ['10:00 a 11:30', '29,90 €', '17,70 €', '19,90 €'],
            ['12:00 a 15:30', '27,70 €', '16,60 €', '18,80 €'],
            ['16:00 a 18:30', '25,50 €', '15,50 €', '17,70 €'],
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Los bebés de hasta 2 años entran gratis a cualquier hora. Con precio reducido te pueden pedir un documento que acredite la edad, y los menores de 12 años tienen que ir con un adulto.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Si puedes elegir la hora, la tarde sale más barata: un adulto paga 4,40 € menos que por la mañana. La franja de tarde empieza a las 16:00 y la última entrada es a las 19:00, así que hay tiempo para la visita entera.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Con una incapacidad igual o superior al 60 % se entra gratis, y un acompañante tiene un 60 % de descuento. Solo se concede en la taquilla del Oceanário, el día de la visita, presentando el Atestado Médico de Incapacidade Multiusos.',
        },

        { tipo: 'subtitulo', texto: 'Dónde comprar la entrada' },
        {
          tipo: 'parrafo',
          texto:
            'La venta oficial es la web tickets.oceanario.pt y la taquilla del propio Oceanário. Online, el código ONLINE10 descuenta un 10 %, y se paga con tarjeta, MB Way o PayPal.',
        },
        {
          tipo: 'tabla',
          texto: 'Dónde comprar la entrada al Oceanário de Lisboa.',
          columnas: ['Dónde', 'Precio adulto', 'Para quién'],
          filas: [
            ['Web oficial (tickets.oceanario.pt)', 'De 25,50 € a 29,90 €, con un 10 % menos usando ONLINE10', 'Quien quiere pagar lo mínimo'],
            ['Taquilla del Oceanário', 'De 25,50 € a 29,90 €', 'Quien decide el mismo día, y quien tiene derecho a la entrada gratis por incapacidad, que solo se da aquí'],
            ['GetYourGuide', 'El de su ficha, según la fecha', 'Quien prefiere comprar en español. El proveedor es el propio Oceanário'],
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'La entrada de GetYourGuide no es reembolsable. Si compras ahí, cualquier problema con esa entrada se resuelve con GetYourGuide, no con el Oceanário.',
        },

        { tipo: 'subtitulo', texto: 'Horarios y días especiales' },
        {
          tipo: 'tabla',
          texto: 'Horario del Oceanário de Lisboa.',
          columnas: ['Días', 'Abierto', 'Última entrada'],
          filas: [
            ['Todos los días', '10:00 a 20:00', '19:00'],
            ['24 y 31 de diciembre', '10:00 a 19:00', '18:00'],
            ['25 de diciembre y 1 de enero', '11:00 a 20:00', '19:00'],
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Abre todos los días, también los lunes y los festivos. El 25 de diciembre y el 1 de enero abre, mientras el castillo, los Jerónimos y la Torre de Belém están cerrados.',
        },

        { tipo: 'subtitulo', texto: 'Qué incluye la entrada' },
        {
          tipo: 'lista',
          items: [
            'La exposición permanente, «Um Planeta, Um Oceano», con el gran acuario central y los hábitats de distintos océanos alrededor.',
            'Las exposiciones temporales. En octubre de 2026 están «Universo Submerso» y «Monstros Marinhos», con modelos a tamaño real de grandes depredadores prehistóricos del mar, que se puede ver hasta el 1 de noviembre. Van cambiando a lo largo del año.',
            'Los textos de las exposiciones están en portugués y en inglés.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Las visitas guiadas, también las de bastidores, se reservan y se pagan aparte.',
        },

        { tipo: 'subtitulo', texto: 'Normas y consigna' },
        {
          tipo: 'lista',
          items: [
            'Se pueden hacer fotos, pero sin flash ni palos de selfi.',
            'No se puede comer ni entrar con comida en el recorrido. Hay restaurante y cafetería en la planta baja para antes o después.',
            'Hay 39 taquillas de pago en la planta 0, en tres tamaños. Una maleta más grande que la taquilla mayor (98 × 40 × 75 cm) no se puede guardar.',
            'Todo el recorrido tiene rampas y ascensores, y se puede ir con carrito de bebé.',
            'No se puede fumar dentro, tampoco cigarrillos electrónicos.',
          ],
        },

        { tipo: 'subtitulo', texto: 'Cuándo ir' },
        {
          tipo: 'parrafo',
          texto:
            'Si el precio importa, por la tarde: de 16:00 a 18:30 es la franja más barata. Y es un buen plan para un día de lluvia, porque toda la visita es bajo techo.',
        },
        {
          tipo: 'enlace',
          texto: 'Más planes bajo techo para los días de lluvia.',
          href: '/blog/lisboa-cuando-llueve',
          label: 'Qué hacer en Lisboa cuando llueve',
        },

        { tipo: 'subtitulo', texto: 'Cómo llegar' },
        {
          tipo: 'lista',
          items: [
            'Metro: línea roja hasta Oriente. Desde la estación son unos minutos a pie.',
            'Autobuses de Carris: 705, 708, 725, 728, 744, 750, 759, 782 y 794.',
            'En coche: hay varios aparcamientos en la zona. El más cercano, el Parque Oceanário, tiene 274 plazas.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Con la tarjeta Navegante y saldo zapping, el metro cuesta 1,72 € por viaje.',
        },
        {
          tipo: 'enlace',
          texto: 'Cómo cargar la Navegante y cuánto cuesta cada viaje.',
          href: '/blog/tarjeta-navegante-lisboa',
          label: 'Tarjeta Navegante y tarifas 2026',
        },

        { tipo: 'subtitulo', texto: 'Qué más hacer en el Parque das Nações' },
        {
          tipo: 'parrafo',
          texto:
            'El Oceanário está en el paseo junto al río del Parque das Nações, el barrio de la Expo 98. Al salir se puede seguir andando por la orilla.',
        },
        {
          tipo: 'enlace',
          texto: 'Qué ver en el barrio antes o después del Oceanário.',
          href: '/blog/parque-das-nacoes-lisboa-que-ver',
          label: 'Qué ver en Parque das Nações',
        },
      ],
    },
    faqs: [
      {
        q: '¿Cuánto cuesta la entrada al Oceanário de Lisboa en 2026?',
        a: 'Depende de la hora. Un adulto paga 29,90 € de 10:00 a 11:30, 27,70 € de 12:00 a 15:30 y 25,50 € de 16:00 a 18:30. Los niños de 3 a 12 años, de 15,50 € a 17,70 €, y los mayores de 65, de 17,70 € a 19,90 €. Hasta 2 años, gratis.',
      },
      {
        q: '¿Hay descuento comprando online?',
        a: 'Sí. En la web oficial, tickets.oceanario.pt, el código ONLINE10 descuenta un 10 %.',
      },
      {
        q: '¿A qué hora es más barato?',
        a: 'Por la tarde, de 16:00 a 18:30: un adulto paga 25,50 €, 4,40 € menos que por la mañana.',
      },
      {
        q: '¿Abre los lunes y los festivos?',
        a: 'Sí, todos los días de 10:00 a 20:00. El 24 y el 31 de diciembre cierra a las 19:00, y el 25 de diciembre y el 1 de enero abre de 11:00 a 20:00.',
      },
      {
        q: '¿Cuánto dura la visita?',
        a: 'Entre hora y media y dos horas, según el propio Oceanário.',
      },
      {
        q: '¿Las exposiciones temporales se pagan aparte?',
        a: 'No. La entrada da acceso a la exposición permanente y a las temporales. Las visitas guiadas sí se pagan aparte.',
      },
      {
        q: '¿Puedo dejar la maleta?',
        a: 'Hay 39 taquillas de pago en la planta 0, la mayor de 98 × 40 × 75 cm. Si tu maleta es más grande, no se puede guardar.',
      },
      {
        q: '¿Cómo llego en metro?',
        a: 'Con la línea roja hasta Oriente. El Oceanário está a unos minutos a pie, en la Doca dos Olivais.',
      },
    ],
    placements: [
      {
        offer: { type: 'product', productId: 'oceanario' },
        position: 'after-summary',
        intro:
          'Si prefieres comprarla en español, GetYourGuide vende la entrada que pone el propio Oceanário. No es reembolsable. En la web oficial tienes un 10 % menos con el código ONLINE10.',
      },
    ],
  },

  'torre-de-belem': {
    breadcrumbLabel: 'Torre de Belém',
    article: {
      titulo: 'Torre de Belém: entradas, precio y horario (2026)',
      descripcion:
        'Cuánto cuesta la entrada a la Torre de Belém en 2026, cómo funcionan las franjas horarias desde la reapertura, dónde comprarla si en la Torre ya no hay taquilla, quién entra gratis y cuándo cierra.',
      seoTitle: 'Torre de Belém: entradas, precio y horario 2026',
      metaDescription:
        'Entrada 15 €, con franja horaria y unas 900 plazas al día. Dónde comprarla (en la Torre no hay taquilla), quién entra gratis, horario y días de cierre.',
      imagen: '/images/actividades/torre-de-belem-lisboa.webp',
      imageAlt: 'Torre de Belém junto al río Tajo',
      categoria: 'Entradas',
      fecha: '25 Oct 2026',
      fechaActualizacion: 'Verificado el 25 de octubre de 2026',
      dateModified: '2026-10-25',
      minutos: 6,
      links: [
        { href: '/blog/monasterio-jeronimos-entradas', label: 'Monasterio de los Jerónimos: entradas y horarios' },
        { href: '/blog/belem-barrio-guia', label: 'Qué ver en Belém' },
        { href: '/blog/pasteles-de-belem', label: 'Pastéis de Belém' },
        { href: '/blog/lisboa-card-vale-la-pena', label: 'Cuándo compensa la Lisboa Card' },
        { href: '/blog/tarjeta-navegante-lisboa', label: 'Tarjeta Navegante y tarifas 2026' },
        { href: '/comprar-entradas', label: 'Entradas de Lisboa' },
      ],
      fuentes: [
        { label: 'Museus e Monumentos de Portugal: Torre de Belém (precio y horario)', href: 'https://www.museusemonumentos.pt/pt/museus-e-monumentos/torre-de-belem' },
        { label: 'Jerónimos y Torre de Belém: visitar (precios, descuentos, gratuidades, accesibilidad)', href: `${BELEM_OFICIAL}/visitar` },
        { label: 'Jerónimos y Torre de Belém: la Torre', href: `${BELEM_OFICIAL}/torre-de-belem` },
        { label: 'MEO Blueticket: venta oficial de la Torre de Belém', href: 'https://mmp.bymeoblueticket.pt/pt/event/14776/torre-de-belem' },
        { label: 'Museus e Monumentos de Portugal: la Torre de Belém reabre (mayo de 2026)', href: 'https://www.museusemonumentos.pt/en/noticia-com/torre-de-belem-reabre-ao-publico' },
        { label: 'Renascença: entrevista a la directora sobre aforo y venta (26/05/2026)', href: 'https://rr.pt/especial/pais/2026/05/26/de-cara-lavada-com-menos-visitantes-e-nova-bilhetica-torre-de-belem-reabre-ao-publico/472215/' },
        { label: 'Observador: franjas de 60 personas cada media hora (26/05/2026)', href: 'https://observador.pt/2026/05/26/torre-de-belem-reabre-a-brilhar-e-com-novo-sistema-de-entradas-para-reduzir-filas/' },
        { label: 'Visit Lisboa Shop: preguntas frecuentes de la Lisboa Card', href: 'https://shop.visitlisboa.com/pt/blogs/news/lisboa-card-f-a-q' },
      ],
      contenido: [
        {
          tipo: 'parrafo',
          texto:
            'La entrada a la Torre de Belém cuesta 15 € y va con día y franja horaria. Desde que reabrió el 27 de mayo de 2026 entran unas 60 personas cada media hora, unas 900 al día. En la Torre ya no hay taquilla: se compra online o en el quiosco frente al Monasterio de los Jerónimos. Abre de martes a domingo de 9:30 a 17:30, con última entrada a las 17:00, y cierra los lunes.',
        },
        {
          tipo: 'lista',
          items: [
            '15 €. Mayores de 65 y jóvenes de 13 a 24 años, la mitad. Menores de 12 años (incluidos), gratis.',
            'Venta oficial online: 15 € más gastos de gestión, 15,92 € en total.',
            'En la Torre no se vende. La venta en persona está en el quiosco frente a los Jerónimos, que cierra a las 16:30.',
            'De martes a domingo, de 9:30 a 17:30. Última entrada a las 17:00.',
            'Cierra los lunes, el 1 de enero, el domingo de Pascua, el 1 de mayo, el 13 de junio y el 25 de diciembre.',
            'Con la Lisboa Card es gratis, pero hay que reservar franja con el número de la tarjeta.',
          ],
        },

        { tipo: 'subtitulo', texto: 'Precios 2026' },
        {
          tipo: 'tabla',
          texto: 'Precios de la entrada a la Torre de Belém en 2026.',
          columnas: ['Entrada', 'Precio'],
          filas: [
            ['Billete normal', '15 €'],
            ['Mayores de 65 años', '7,50 € (50 %)'],
            ['Jóvenes de 13 a 24 años', '7,50 € (50 %)'],
            ['Billete familia (al menos 1 adulto y 1 menor)', '50 %, solo en la taquilla'],
            ['Menores de 12 años (incluidos)', 'Gratis'],
            ['Residentes en Portugal', 'Gratis 52 días al año, a elegir (Acesso 52)'],
            ['Con Lisboa Card', 'Gratis, reservando franja'],
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Hay más casos gratuitos, como los desempleados residentes en la Unión Europea o las personas con una incapacidad igual o superior al 60 % y un acompañante. Hay que llevar el justificante. La lista completa está en la página oficial, enlazada al final.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La Torre y los Jerónimos son dos entradas distintas, con los mismos descuentos y los mismos días de cierre. El claustro de los Jerónimos cuesta 18 €.',
        },

        { tipo: 'subtitulo', texto: 'Franjas horarias y aforo' },
        {
          tipo: 'parrafo',
          texto:
            'La Torre reabrió el 27 de mayo de 2026, después de la primera obra de conservación a fondo desde 1998. Desde entonces se entra por franjas de media hora, a partir de las 9:30, con unas 60 personas por franja y un máximo de unas 900 al día. La escalera de caracol de la torre es muy estrecha y no deja subir a mucha gente a la vez.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La web oficial avisa de que las entradas se agotan a menudo y de que entonces ya no quedan para el mismo día. Cómprala en cuanto tengas el día decidido.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Sobre la espera fuera hay dos versiones. La directora del monumento calculó en la reapertura que, con las franjas, sería de unos 20 minutos como mucho. La ficha de Tiqets avisa de que, incluso con hora reservada, en temporada alta puede pasar de una hora, y de que hay muy pocos sitios para sentarse. Lleva agua y algo para el sol o la lluvia.',
        },
        {
          tipo: 'aviso',
          texto:
            'La Torre está expuesta al tiempo y puede cerrar cuando la seguridad de los visitantes está en riesgo. Si hay temporal ese día, mira la web oficial antes de ir.',
        },

        { tipo: 'subtitulo', texto: 'Dónde comprar la entrada' },
        {
          tipo: 'tabla',
          texto: 'Dónde comprar la entrada a la Torre de Belém.',
          columnas: ['Dónde', 'Precio', 'Para quién'],
          filas: [
            ['Web oficial (MEO Blueticket)', '15 € + gastos (15,92 € en total)', 'Quien quiere pagar lo mínimo y poder cambiar la franja'],
            ['Quiosco frente a los Jerónimos', '15 €', 'Familias (el billete familia solo se vende aquí) y residentes con Acesso 52. Cierra a las 16:30'],
            ['Tiqets', 'El de su ficha, según la fecha', 'Quien prefiere comprar en español. El proveedor es el propio organismo, Museus e Monumentos de Portugal'],
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'En la venta oficial se puede cambiar la franja con al menos 24 horas de antelación, desde el botón «(Re)agendamento». La entrada de Tiqets no se puede devolver ni cambiar de fecha.',
        },
        {
          tipo: 'parrafo',
          texto:
            'El monumento no tiene audioguías. Tiqets vende también un combinado de Jerónimos y Torre para quien hace los dos el mismo día.',
        },

        { tipo: 'subtitulo', texto: 'Horarios y cierres' },
        {
          tipo: 'tabla',
          texto: 'Horario de la Torre de Belém.',
          columnas: ['', 'Abre', 'Cierra', 'Última entrada'],
          filas: [
            ['Martes a domingo', '9:30', '17:30', '17:00'],
            ['Quiosco de venta (frente a los Jerónimos)', '—', '16:30', '—'],
            ['Lunes', 'Cerrado', '—', '—'],
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Además de los lunes, cierra el 1 de enero, el domingo de Pascua, el 1 de mayo, el 13 de junio (San Antonio, fiesta de Lisboa) y el 25 de diciembre.',
        },

        { tipo: 'subtitulo', texto: 'Qué se ve dentro' },
        {
          tipo: 'lista',
          items: [
            'El baluarte, la parte baja que da al río, con la batería de cañones.',
            'La torre, de varios pisos unidos por una escalera de caracol muy estrecha: la Sala del Gobernador, la del Rey, la de Audiencias y la capilla.',
            'La terraza de arriba, con el Tajo a la altura del agua.',
            'Por fuera, los detalles manuelinos tallados en la piedra y el rinoceronte de la base de una garita.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Con movilidad reducida solo se puede visitar la planta baja del baluarte: a la torre se sube por la escalera de caracol. Por dentro se ve en unos 45 minutos.',
        },

        { tipo: 'subtitulo', texto: 'Con la Lisboa Card' },
        {
          tipo: 'parrafo',
          texto:
            'La Lisboa Card incluye la entrada, pero hay que reservar día y hora. Primero se cambia el bono por la tarjeta física; luego, en la venta oficial, se elige la opción «Torre de Belém – Lisboa Card» y se mete el número de la tarjeta. No se puede reservar antes de tener la tarjeta, y los cupos para la Lisboa Card son limitados.',
        },
        {
          tipo: 'enlace',
          texto: 'La cuenta hecha con los precios de 2026.',
          href: '/blog/lisboa-card-vale-la-pena',
          label: 'Cuándo compensa la Lisboa Card',
        },

        { tipo: 'subtitulo', texto: 'Cómo llegar' },
        {
          tipo: 'lista',
          items: [
            'Tren de la línea de Cascais desde Cais do Sodré hasta Belém: 8 minutos.',
            'Tranvía 15E desde Praça da Figueira o Cais do Sodré.',
            'Desde el Monasterio de los Jerónimos, unos 10 minutos a pie. Lo normal es hacer los dos el mismo día.',
          ],
        },
        {
          tipo: 'enlace',
          texto: 'Precios, franjas y la iglesia gratis, en la guía de entradas de los Jerónimos.',
          href: '/blog/monasterio-jeronimos-entradas',
          label: 'Monasterio de los Jerónimos: entradas y horarios',
        },

        { tipo: 'subtitulo', texto: 'Si no quieres pagar la entrada' },
        {
          tipo: 'parrafo',
          texto:
            'Desde el paseo junto al río la Torre se ve entera y gratis, y es desde donde salen casi todas las fotos. Si el día va justo, verla por fuera y seguir por Belém es una opción razonable.',
        },
        {
          tipo: 'enlace',
          texto: 'Qué más ver en Belém en el mismo paseo.',
          href: '/blog/belem-barrio-guia',
          label: 'Qué ver en Belém',
        },
      ],
    },
    faqs: [
      {
        q: '¿Cuánto cuesta la entrada a la Torre de Belém en 2026?',
        a: '15 €. Mayores de 65 y jóvenes de 13 a 24 años pagan la mitad, y los menores de 12 entran gratis. En la venta oficial online se suman los gastos de gestión: 15,92 € en total.',
      },
      {
        q: '¿Se puede comprar la entrada en la Torre?',
        a: 'No. Desde la reapertura de mayo de 2026 la Torre no tiene taquilla. Se compra online o en el quiosco frente al Monasterio de los Jerónimos, que cierra a las 16:30.',
      },
      {
        q: '¿Hay que reservar hora?',
        a: 'Sí. Se entra por franjas de media hora, con unas 60 personas por franja y unas 900 al día. Las entradas se agotan a menudo.',
      },
      {
        q: '¿Abre los lunes?',
        a: 'No. Abre de martes a domingo de 9:30 a 17:30, con última entrada a las 17:00.',
      },
      {
        q: '¿Es gratis con la Lisboa Card?',
        a: 'Sí, pero hay que reservar día y hora en la venta oficial con el número de la tarjeta física, y los cupos son limitados.',
      },
      {
        q: '¿Puedo cambiar la hora de mi entrada?',
        a: 'Si la compraste en la venta oficial, sí, con al menos 24 horas de antelación. La de Tiqets no se puede cambiar ni devolver.',
      },
      {
        q: '¿Se puede visitar con movilidad reducida?',
        a: 'Solo la planta baja del baluarte. A la torre se sube por una escalera de caracol muy estrecha.',
      },
      {
        q: '¿Cuánto tiempo hace falta?',
        a: 'Unos 45 minutos dentro, más la espera para entrar.',
      },
    ],
    placements: [
      {
        offer: { type: 'product', productId: 'torre-belem' },
        position: 'after-summary',
        intro:
          'Si prefieres comprarla en español, Tiqets vende la entrada con franja horaria, y el proveedor es el propio Museus e Monumentos de Portugal. No se puede devolver ni cambiar de fecha, así que elige la franja con el día claro.',
      },
    ],
  },
};

export function getTicketGuide(slug: string): TicketGuide | undefined {
  return TICKET_GUIDES[slug];
}
