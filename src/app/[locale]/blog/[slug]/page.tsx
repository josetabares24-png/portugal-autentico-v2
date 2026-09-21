import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArticleBody } from '@/components/blog/ArticleBody';
import { ArticleEditorialLinks } from '@/components/blog/ArticleEditorialLinks';
import { ArticleFooter } from '@/components/blog/ArticleFooter';
import { ArticleHero } from '@/components/blog/ArticleHero';
import { ArticleRelated } from '@/components/blog/ArticleRelated';
import { ArticleSources } from '@/components/blog/ArticleSources';
import { ArticleToc } from '@/components/blog/ArticleToc';
import type { Article, ArticleExtras, ArticleFaq, SectionPhoto } from '@/components/blog/article-types';
import { slugify } from '@/components/blog/article-utils';
import { blogPosts } from '@/data/blog-posts';
import { BLOG_RELATED_POST_IDS } from '@/data/blog-related';
import { blogFallbackImage, blogImageMap } from '@/lib/media';

const articles: Record<string, Article> = {
  'restaurantes-romanticos-lisboa': {
    titulo: 'Restaurantes románticos en Lisboa: 6 opciones según el tipo de cita',
    descripcion: 'Seis restaurantes para una cena especial en Lisboa, elegidos por ambiente, vistas o formato de la experiencia, con fuentes actuales y sin asumir que lo más caro es siempre lo más romántico.',
    seoTitle: 'Restaurantes románticos en Lisboa: 6 opciones',
    metaDescription: 'Restaurantes románticos en Lisboa para una cena especial: vistas, ambiente íntimo, cocina portuguesa y experiencias de alta gama según tu tipo de cita.',
    imagen: '/images/fado-tasca-noche.jpg',
    imageAlt: 'Mesa preparada para una cena nocturna en Lisboa',
    categoria: 'Gastronomía',
    fecha: '15 Ene 2026',
    fechaActualizacion: 'Actualizado en septiembre de 2026',
    dateModified: '2026-09-21',
    minutos: 9,
    links: [
      { href: '/blog/lisboa-en-pareja', label: 'Planes para hacer en pareja en Lisboa' },
      { href: '/blog/vida-nocturna-lisboa', label: 'Vida nocturna en Lisboa' },
      { href: '/blog/donde-alojarse-en-lisboa', label: 'Dónde alojarse en Lisboa' },
      { href: '/blog/mejores-miradores-lisboa', label: 'Miradores para antes de cenar' },
    ],
    fuentes: [
      { label: 'Guía MICHELIN: Fifty Seconds', href: 'https://guide.michelin.com/pt/pt_PT/lisboa-region/lisboa/restaurant/fifty-seconds' },
      { label: 'Guía MICHELIN: Suba', href: 'https://guide.michelin.com/br/pt_BR/lisboa-region/lisboa/restaurant/suba' },
      { label: 'Guía MICHELIN: Henrique Sá Pessoa', href: 'https://guide.michelin.com/pt/pt_PT/lisboa-region/lisboa/restaurant/henrique-sa-pessoa' },
      { label: 'Visit Lisboa: 1147 Lisboa', href: 'https://www.visitlisboa.com/pt-pt/locais/1147-lisboa' },
      { label: 'Visit Lisboa: Café São Bento', href: 'https://www.visitlisboa.com/en/places/cafe-sao-bento' },
      { label: 'Visit Lisboa: Páteo Alfacinha', href: 'https://www.visitlisboa.com/en/places/pateo-alfacinha-restaurantes' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Una cena romántica en Lisboa no tiene que significar automáticamente rooftop, menú degustación y una cuenta enorme. Para algunas parejas lo importante son las vistas; para otras, una sala pequeña, buena conversación o un restaurante clásico donde la noche pueda alargarse. Por eso esta selección está organizada por tipo de cita, no como un ranking.' },

      { tipo: 'subtitulo', texto: 'Fifty Seconds: para una cena panorámica de alta gama' },
      { tipo: 'parrafo', texto: 'Fifty Seconds está en la Torre Vasco da Gama, en Parque das Nações. La Guía MICHELIN lo clasifica expresamente como una opción romántica y destaca la experiencia de comer a gran altura con vistas sobre Lisboa. Es una elección para quien quiere que el restaurante sea el plan principal de la noche, no simplemente el lugar donde cenar entre dos actividades.' },
      { tipo: 'parrafo', texto: 'Por ubicación, tiene sentido combinarlo con un paseo por Parque das Nações antes de la reserva. Si te alojas en el centro histórico, calcula el desplazamiento de vuelta en vez de asumir que podrás terminar la noche caminando.' },

      { tipo: 'subtitulo', texto: 'Suba: palacio histórico y terraza sobre la ciudad' },
      { tipo: 'parrafo', texto: 'Suba está vinculado al Verride Palácio de Santa Catarina, en una zona muy cómoda para continuar la noche por Chiado, Bica o Cais do Sodré. MICHELIN lo presenta como romántico y destaca la terraza panorámica del edificio. Aquí la ventaja no es solo la vista: puedes construir una noche completa alrededor del barrio sin cruzar Lisboa después de cenar.' },

      { tipo: 'subtitulo', texto: 'Henrique Sá Pessoa: para una experiencia gastronómica centrada en la mesa' },
      { tipo: 'parrafo', texto: 'El restaurante Henrique Sá Pessoa, en Páteo Bagatela, aparece en la selección MICHELIN como romántico y ofrece una propuesta más enfocada en cocina de autor. Lo elegiría cuando la comida en sí es el centro de la cita y no necesitas estar junto a un mirador o una zona de bares para que la noche funcione.' },

      { tipo: 'subtitulo', texto: '1147 Lisboa: cenar dentro del Castelo con vistas' },
      { tipo: 'parrafo', texto: '1147 Lisboa ocupa la antigua Casa do Leão, dentro de las murallas del Castelo de São Jorge. Visit Lisboa lo describe como un espacio con vistas panorámicas sobre la ciudad y el Tajo y lo señala como escenario para cenas románticas. Es una opción especialmente lógica si ya vas a pasar la tarde por Alfama o el castillo.' },
      { tipo: 'parrafo', texto: 'Comprueba siempre las condiciones de acceso a la zona del castillo y el horario de tu reserva: aquí la ubicación forma parte de la experiencia, pero también condiciona cómo llegas y cómo vuelves.' },

      { tipo: 'subtitulo', texto: 'Café São Bento: una cena clásica e íntima' },
      { tipo: 'parrafo', texto: 'Café São Bento está cerca de la Assembleia da República y mantiene una sala de estilo clásico. Visit Lisboa destaca su ambiente íntimo y su especialidad histórica en bife. Es una alternativa para quien prefiere una cena más tradicional, sin convertir la noche en una experiencia de lujo o en una búsqueda de la mejor terraza.' },

      { tipo: 'subtitulo', texto: 'Páteo Alfacinha: para vistas al Tajo con un ambiente más portugués' },
      { tipo: 'parrafo', texto: 'En Ajuda, Páteo Alfacinha combina gastronomía portuguesa con espacios que cambian según la temporada. Visit Lisboa menciona específicamente su terraza con vista hacia el Tajo y el puente 25 de Abril como adecuada también para cenas románticas. La ubicación queda fuera del núcleo de Baixa-Chiado, así que funciona mejor cuando buscas una noche con destino propio y no una cena improvisada durante un paseo por el centro.' },

      { tipo: 'subtitulo', texto: 'Cómo elegir sin equivocarte de restaurante' },
      { tipo: 'lista', items: [
        'Si quieres vistas: compara Fifty Seconds, Suba o 1147 Lisboa según la zona de tu día.',
        'Si la comida es el plan principal: una propuesta gastronómica como Henrique Sá Pessoa tiene más sentido que perseguir únicamente una terraza.',
        'Si buscas algo clásico e íntimo: Café São Bento encaja mejor con una noche tranquila.',
        'Si quieres ambiente portugués y vistas al río: Páteo Alfacinha puede encajar mejor que una cena en pleno centro.',
        'Comprueba menú, horario, política de reservas y ubicación directamente en el restaurante antes de pagar o desplazarte.',
      ] },

      { tipo: 'subtitulo', texto: '¿Hace falta reservar?' },
      { tipo: 'parrafo', texto: 'Para una fecha concreta —cumpleaños, aniversario, viernes o sábado— reservar es una decisión sensata, especialmente en restaurantes pequeños o experiencias de alta gama. Pero no presentaría la reserva como obligatoria para todo Lisboa: depende del local, la hora y el día. Mira la disponibilidad real del restaurante que elijas.' },

      { tipo: 'subtitulo', texto: 'Una noche romántica no tiene que empezar en el restaurante' },
      { tipo: 'parrafo', texto: 'Puedes hacer que el restaurante sea solo una parte del plan: mirador al atardecer, paseo corto, cena y después una copa o regreso tranquilo. La clave es que todo quede relativamente cerca. Cruzar la ciudad tres veces por perseguir lugares “románticos” suele quitarle más a la noche de lo que añade.' },
      { tipo: 'enlace', texto: 'Si quieres completar la cena con un paseo o una vista antes, aquí tienes una guía para hacerlo sin encadenar cuestas innecesarias.', href: '/blog/mejores-miradores-lisboa', label: 'Mejores miradores de Lisboa' },
      { tipo: 'enlace', texto: 'Y si quieres construir un día completo alrededor de la pareja, no solo una cena, usa esta guía.', href: '/blog/lisboa-en-pareja', label: 'Lisboa en pareja' },
    ],
  },

  'sintra-desde-lisboa': {
    titulo: 'Sintra desde Lisboa: cómo ir y organizar un día sin correr',
    descripcion: 'Cómo ir de Lisboa a Sintra en tren, organizar Pena y el centro histórico, moverse dentro de Sintra y evitar una jornada imposible de cuatro palacios.',
    seoTitle: 'Sintra desde Lisboa: cómo ir y qué ver en un día',
    metaDescription: 'Cómo ir a Sintra desde Lisboa: tren desde Rossio, acceso a Pena, bus 434, reserva horaria y una ruta realista para un día.',
    imagen: '/images/estacion-sintra.jpg',
    imageAlt: 'Estación de Sintra, punto de llegada habitual desde Lisboa para visitar la villa',
    categoria: 'Guías',
    fecha: '22 Ene 2026',
    fechaActualizacion: 'Actualizado en septiembre de 2026',
    dateModified: '2026-09-21',
    minutos: 11,
    links: [
      { href: '/blog/lisboa-en-4-dias', label: 'Cómo encajar Sintra en Lisboa en 4 días' },
      { href: '/blog/lisboa-en-5-dias', label: 'Lisboa en 5 días con Sintra' },
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { href: '/blog/que-ver-cascais-desde-lisboa', label: 'Cascais desde Lisboa' },
    ],
    fuentes: [
      { label: 'CP: descubrir Sintra en tren', href: 'https://www.cp.pt/info/w/discover-sintra' },
      { label: 'CP: Comboios Urbanos de Lisboa', href: 'https://cp.pt/info/lisbon' },
      { label: 'Parques de Sintra: entrada y reserva del Palácio da Pena', href: 'https://www.parquesdesintra.pt/pt/planear-a-visita/bilhetes-palacio-da-pena/' },
      { label: 'Parques de Sintra: acceso y transporte al Palácio da Pena', href: 'https://bilheteira.parquesdesintra.pt/info/parque-e-palacio-da-pena/1201/pt' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Sintra funciona mejor como excursión de un día independiente que como una parada añadida a Lisboa. El tren resuelve la llegada, pero dentro de Sintra las distancias, las pendientes y los accesos a los monumentos obligan a elegir. El error más común es comprar entradas para demasiados sitios y pasar el día mirando el reloj.' },
      { tipo: 'subtitulo', texto: 'Cómo ir de Lisboa a Sintra en tren' },
      { tipo: 'parrafo', texto: 'CP conecta Lisboa con Sintra dentro de su red de trenes urbanos. Para quien se aloja en el centro, Rossio es una de las salidas más prácticas y CP la presenta como punto de partida para visitar Sintra. Antes de salir, revisa el horario del día en CP porque obras, huelgas o ajustes de servicio pueden alterar la operación normal.' },
      { tipo: 'parrafo', texto: 'Al llegar a la estación de Sintra ya estás cerca de la villa, pero no de todos los monumentos. Pena está en la sierra y requiere otro desplazamiento; por eso conviene organizar primero la hora de entrada que tengas reservada y construir el resto alrededor.' },

      { tipo: 'subtitulo', texto: 'Palácio da Pena: la hora del billete manda' },
      { tipo: 'parrafo', texto: 'La entrada al interior del Palácio da Pena requiere fecha y hora reservadas. La hora del billete corresponde a la entrada al interior del palacio, no a la entrada al parque. Parques de Sintra recomienda prever alrededor de 30 minutos entre la entrada principal del parque y el palacio.' },
      { tipo: 'parrafo', texto: 'Si llegas tarde a la hora reservada, las condiciones oficiales indican que no podrás entrar al interior y el billete no se reembolsa por ese retraso. Por eso no colocaría Pena inmediatamente después de un tren con margen mínimo.' },

      { tipo: 'subtitulo', texto: 'Cómo subir a Pena desde Sintra' },
      { tipo: 'parrafo', texto: 'Parques de Sintra señala el autobús 434 desde la estación ferroviaria como una de las opciones de transporte público hacia Pena. También existen recorridos peatonales, pero la subida exige tiempo y desnivel. El acceso en vehículo particular a las vías que llevan al monumento está restringido, así que no planifiques el día como si fueras a aparcar junto al palacio.' },

      { tipo: 'subtitulo', texto: 'Una ruta realista para un día' },
      { tipo: 'lista', items: [
        'Llega a Sintra con margen y orienta primero el día según la hora reservada para Pena.',
        'Visita Pena sin colocar otra entrada cronometrada inmediatamente después.',
        'Reserva tiempo para el centro histórico y una pausa para comer.',
        'Elige una segunda gran visita solo si el horario encaja de verdad.',
        'Vuelve a Lisboa sin depender del último tren disponible.',
      ] },
      { tipo: 'parrafo', texto: 'Si tienes que elegir, prefiero dos visitas bien hechas a cuatro entradas encadenadas. Quinta da Regaleira, Castelo dos Mouros, Palácio Nacional de Sintra y otros lugares pueden justificar una segunda visita o sustituir a Pena según tus intereses; no necesitas verlos todos el mismo día.' },

      { tipo: 'subtitulo', texto: '¿Conviene combinar Sintra y Cascais el mismo día?' },
      { tipo: 'parrafo', texto: 'Para una primera visita no lo recomiendo como plan base. Es posible conectar ambos destinos, pero añadir Cascais reduce el margen en Sintra y convierte cualquier retraso en un problema. Si tienes cuatro o cinco días en Lisboa, dedica jornadas separadas cuando ambos lugares sean prioritarios.' },
      { tipo: 'enlace', texto: 'Si también quieres conocer la costa, compara antes qué ofrece Cascais y decide si merece otro día.', href: '/blog/que-ver-cascais-desde-lisboa', label: 'Qué ver en Cascais desde Lisboa' },

      { tipo: 'subtitulo', texto: 'Qué comprobar la noche anterior' },
      { tipo: 'lista', items: [
        'Horario de tu tren en CP.',
        'Hora exacta de entrada al interior de Pena.',
        'Estado del transporte local y tiempo estimado hasta el monumento.',
        'Previsión meteorológica: la sierra puede tener condiciones distintas de Lisboa.',
        'Batería y billetes accesibles en el móvil, además de un pequeño margen entre trayectos.',
      ] },
    ],
  },

  'aeropuerto-lisboa-al-centro': {
    titulo: 'Cómo ir del aeropuerto de Lisboa al centro: Metro, taxi y apps',
    descripcion: 'Opciones para ir del aeropuerto de Lisboa al centro según destino, equipaje y hora: Metro, autobús, taxi y Uber/Bolt con información oficial actualizada.',
    seoTitle: 'Aeropuerto de Lisboa al centro: Metro, taxi y Uber',
    metaDescription: 'Cómo ir del aeropuerto de Lisboa al centro: Línea Roja, transbordos, Navegante, buses, taxi y Uber/Bolt según equipaje y hora de llegada.',
    imagen: '/images/funicular-bica-turistas.jpg',
    imageAlt: 'Transporte urbano en Lisboa, parte de la red utilizada para desplazarse por la ciudad',
    categoria: 'Transporte',
    fecha: '19 Jun 2026',
    fechaActualizacion: 'Actualizado en septiembre de 2026',
    dateModified: '2026-09-21',
    minutos: 8,
    links: [
      { href: '/blog/metro-lisboa-guia', label: 'Guía del Metro de Lisboa' },
      { href: '/blog/tarjeta-navegante-lisboa', label: 'Tarjeta Navegante y billetes' },
      { href: '/blog/donde-alojarse-en-lisboa', label: 'Dónde alojarse en Lisboa' },
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
    ],
    fuentes: [
      { label: 'Aeropuerto de Lisboa: transporte público y taxis', href: 'https://www.lisbonairport.pt/en/lis/access-parking/getting-to-and-from-the-airport/public-transportation' },
      { label: 'Metro de Lisboa: horarios y frecuencias', href: 'https://www.metrolisboa.pt/viajar/horarios-e-frequencias/' },
      { label: 'Metro de Lisboa: comprar billetes', href: 'https://www.metrolisboa.pt/comprar/' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'El aeropuerto de Lisboa está dentro de la ciudad y tiene estación de Metro, así que llegar al alojamiento suele ser sencillo. La mejor opción cambia según dónde duermas: no es lo mismo ir a Saldanha que a Alfama, Belém o una calle empinada de Graça.' },

      { tipo: 'subtitulo', texto: 'Metro: la opción más fácil de calcular' },
      { tipo: 'parrafo', texto: 'La estación Aeroporto pertenece a la Línea Roja. El aeropuerto indica que el tramo Aeroporto–Saldanha ronda los 20 minutos. Para muchas zonas del centro histórico tendrás que hacer transbordo o completar el viaje a pie, así que “hay Metro al aeropuerto” no significa que todos los hoteles tengan una conexión directa.' },
      { tipo: 'parrafo', texto: 'En condiciones normales, el Metro funciona de 06:30 a 01:00. Si llegas cerca del cierre, comprueba el horario y no bases el traslado en una conexión que quizá ya no puedas completar.' },
      { tipo: 'enlace', texto: 'Aquí tienes las cuatro líneas, tarifas y conexiones explicadas con más detalle.', href: '/blog/metro-lisboa-guia', label: 'Metro de Lisboa 2026' },

      { tipo: 'subtitulo', texto: 'Qué tarjeta necesitas para el Metro' },
      { tipo: 'parrafo', texto: 'Para títulos recargables puedes usar la tarjeta Navegante ocasional. También existe pago contactless directamente en el Metro para trayectos individuales. Si vas a usar varios transportes durante el viaje, compara primero qué opción encaja mejor en vez de comprar un título por costumbre.' },
      { tipo: 'enlace', texto: 'La diferencia entre Navegante, zapping, 24 horas y contactless está aquí.', href: '/blog/tarjeta-navegante-lisboa', label: 'Tarjeta Navegante en Lisboa' },

      { tipo: 'subtitulo', texto: 'Autobús urbano: revisa el equipaje' },
      { tipo: 'parrafo', texto: 'El aeropuerto también tiene servicios de autobús. La información oficial advierte que en los buses urbanos el equipaje admitido está limitado a 50 × 40 × 20 cm. Si llevas una maleta grande, comprueba esa condición antes de plantearlo como alternativa al Metro.' },

      { tipo: 'subtitulo', texto: 'Taxi: útil cuando el equipaje manda' },
      { tipo: 'parrafo', texto: 'Hay taxis oficiales en el aeropuerto. Usa la parada habilitada, comprueba que el taxímetro esté en funcionamiento y pide recibo. El propio aeropuerto recuerda que cualquier transporte contratado en el lugar debe hacerse por canales autorizados, no con personas que se acerquen dentro de la terminal ofreciendo el servicio.' },

      { tipo: 'subtitulo', texto: 'Uber y Bolt: dónde se recogen' },
      { tipo: 'parrafo', texto: 'El aeropuerto mantiene una zona específica de recogida para plataformas como Uber y Bolt en P2, nivel 2. Confirma la ubicación que muestre la aplicación cuando aterrices, porque las áreas operativas de un aeropuerto pueden cambiar.' },

      { tipo: 'subtitulo', texto: 'Qué elegir según tu situación' },
      { tipo: 'lista', items: [
        'Poco equipaje y alojamiento cerca del Metro: empieza comparando la Línea Roja y el transbordo necesario.',
        'Varias maletas, niños o movilidad reducida: compara taxi o TVDE con el trayecto puerta a puerta.',
        'Llegada muy tarde: comprueba primero si el Metro sigue operativo.',
        'Alojamiento en Alfama o Graça: mira la pendiente y el acceso final, no solo la estación más cercana.',
        'Alojamiento en Oriente o Saldanha: la Línea Roja resulta especialmente directa.',
      ] },
      { tipo: 'enlace', texto: 'La zona donde duermes cambia mucho el traslado. Compárala antes de reservar.', href: '/blog/donde-alojarse-en-lisboa', label: 'Dónde alojarse en Lisboa' },
    ],
  },

  'mejores-miradores-lisboa': {
    titulo: 'Los mejores miradores de Lisboa: cuáles elegir y cómo combinarlos',
    descripcion: 'Guía para elegir miradores de Lisboa según zona, vistas y recorrido: Senhora do Monte, Graça, Santa Luzia, Portas do Sol, São Pedro de Alcântara y Santa Catarina.',
    seoTitle: 'Mejores miradores de Lisboa: cuáles elegir',
    metaDescription: 'Los mejores miradores de Lisboa y cómo combinarlos: Graça, Senhora do Monte, Santa Luzia, Portas do Sol, São Pedro de Alcântara y Santa Catarina.',
    imagen: '/images/miradouro-atardecer.jpg',
    imageAlt: 'Vista panorámica de Lisboa desde uno de sus miradores',
    categoria: 'Guías',
    fecha: '10 Feb 2026',
    fechaActualizacion: 'Actualizado en septiembre de 2026',
    dateModified: '2026-09-21',
    minutos: 10,
    links: [
      { href: '/blog/graca-lisboa-que-ver', label: 'Ruta por Graça' },
      { href: '/blog/alfama-historia-guia', label: 'Guía de Alfama' },
      { href: '/blog/donde-fotografiar-lisboa', label: 'Dónde fotografiar Lisboa' },
      { href: '/blog/que-hacer-gratis-en-lisboa', label: 'Planes gratis en Lisboa' },
    ],
    fuentes: [
      { label: 'Visit Lisboa: Miradouro de Santa Luzia', href: 'https://www.visitlisboa.com/pt-pt/locais/miradouro-de-santa-luzia' },
      { label: 'Visit Lisboa: Miradouro da Senhora do Monte', href: 'https://www.visitlisboa.com/pt-pt/locais/miradouro-da-senhora-do-monte' },
      { label: 'Câmara de Lisboa: Miradouro da Graça', href: 'https://www.lisboa.pt/pontos-de-interesse/detalhe/miradouro-sophia-de-mello-breyner-andresen-miradouro-da-graca-1' },
      { label: 'Visit Lisboa: Miradouro de São Pedro de Alcântara', href: 'https://www.visitlisboa.com/pt-pt/locais/miradouro-de-s-pedro-de-alcantara' },
      { label: 'Visit Lisboa: Miradouro de Santa Catarina', href: 'https://www.visitlisboa.com/pt-pt/locais/miradouro-de-santa-catarina' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Lisboa tiene tantos puntos de vista que intentar verlos todos suele producir el efecto contrario: más cuestas y menos tiempo mirando la ciudad. Para una primera visita elegiría miradores que encajen con los barrios que ya vas a recorrer.' },

      { tipo: 'subtitulo', texto: 'Senhora do Monte: la panorámica más abierta de esta ruta' },
      { tipo: 'parrafo', texto: 'Senhora do Monte está en Graça y ofrece una vista amplia hacia el castillo, la Baixa, el Tajo y otras zonas de la ciudad. Está por encima de buena parte del recorrido histórico, así que tiene sentido subir en transporte y empezar a bajar desde allí.' },

      { tipo: 'subtitulo', texto: 'Miradouro da Graça: vista y una pausa más cómoda' },
      { tipo: 'parrafo', texto: 'El Miradouro da Graça, oficialmente Sophia de Mello Breyner Andresen, está junto a la iglesia y antiguo convento. La Câmara de Lisboa indica que permanece abierto 24 horas. La sombra y los bancos lo convierten en una parada más fácil para descansar que otros puntos donde apenas hay espacio.' },
      { tipo: 'enlace', texto: 'Ambos miradores encajan en la misma ruta por la colina.', href: '/blog/graca-lisboa-que-ver', label: 'Cómo recorrer Graça' },

      { tipo: 'subtitulo', texto: 'Santa Luzia: Alfama, azulejos y el Tajo' },
      { tipo: 'parrafo', texto: 'Santa Luzia está en el borde de Alfama y combina la vista con paneles de azulejos, jardín y la silueta de varias iglesias del barrio. Es una parada natural si ya vas a caminar por Alfama; no hace falta subir expresamente desde la otra punta de la ciudad.' },

      { tipo: 'subtitulo', texto: 'Portas do Sol: la postal clásica de Alfama' },
      { tipo: 'parrafo', texto: 'Portas do Sol está muy cerca de Santa Luzia, así que tratarlos como dos excursiones separadas no tiene sentido. Pasa por ambos en la misma caminata y dedica más tiempo al que tenga mejor ambiente o luz cuando llegues.' },

      { tipo: 'subtitulo', texto: 'São Pedro de Alcântara: la ciudad desde el lado opuesto' },
      { tipo: 'parrafo', texto: 'Desde São Pedro de Alcântara se mira hacia la Baixa y la colina del Castelo de São Jorge. Está junto a la parte alta del Elevador da Glória y encaja bien con Chiado, Príncipe Real o Bairro Alto.' },

      { tipo: 'subtitulo', texto: 'Santa Catarina: Tajo, puente y ambiente al final del día' },
      { tipo: 'parrafo', texto: 'Santa Catarina, también conocido por el Adamastor, mira hacia el estuario del Tajo y el puente 25 de Abril. Visit Lisboa destaca especialmente su ambiente de final de tarde. Si buscas un mirador para combinar con Cais do Sodré o Bica, tiene más sentido que cruzar hasta Graça solo para ver el atardecer.' },

      { tipo: 'subtitulo', texto: 'Cómo combinar los miradores sin repetir cuestas' },
      { tipo: 'lista', items: [
        'Ruta este: Senhora do Monte → Graça → Santa Luzia → Portas do Sol → Alfama.',
        'Ruta oeste: São Pedro de Alcântara → Chiado/Bairro Alto → Santa Catarina.',
        'No intentes hacer ambas rutas seguidas si ese mismo día ya recorres muchos barrios.',
        'Si el clima está cubierto o llueve, mueve los miradores a otra franja en lugar de forzar la visita.',
      ] },
      { tipo: 'enlace', texto: 'Si la prioridad es la fotografía, la luz y la orientación de cada zona cambian la elección.', href: '/blog/donde-fotografiar-lisboa', label: 'Dónde fotografiar Lisboa' },

      { tipo: 'subtitulo', texto: '¿Hay que pagar para tener buenas vistas?' },
      { tipo: 'parrafo', texto: 'No. Los miradores de esta selección son espacios públicos o se pueden disfrutar como parte del paseo por el barrio. Lisboa también tiene vistas desde monumentos y atracciones de pago, pero no necesitas comprarlas para construir una buena ruta panorámica.' },
    ],
  },

  'lisboa-en-5-dias': {
    titulo: 'Lisboa en 5 días: itinerario completo con Sintra y barrios',
    descripcion: 'Itinerario de cinco días por Lisboa con centro histórico, Belém, barrios, Parque das Nações y Sintra, organizado por zonas para reducir desplazamientos.',
    seoTitle: 'Lisboa en 5 días: itinerario completo sin correr',
    metaDescription: 'Qué ver en Lisboa en 5 días: Baixa, Alfama, Belém, Graça, Parque das Nações y Sintra en una ruta organizada por zonas.',
    imagen: '/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
    imageAlt: 'Vista de Alfama y el río Tajo en Lisboa',
    categoria: 'Guías',
    fecha: '21 Sep 2026',
    dateModified: '2026-09-21',
    minutos: 12,
    links: [
      { href: '/blog/lisboa-en-4-dias', label: 'Lisboa en 4 días' },
      { href: '/blog/sintra-desde-lisboa', label: 'Sintra desde Lisboa' },
      { href: '/blog/parque-das-nacoes-lisboa-que-ver', label: 'Qué ver en Parque das Nações' },
      { href: '/blog/graca-lisboa-que-ver', label: 'Qué ver en Graça' },
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Cinco días permiten conocer Lisboa con bastante más calma que una escapada de fin de semana. El error es usar el día extra para añadir monumentos sin orden. Funciona mejor reservar una jornada para Sintra y repartir Lisboa por zonas compactas.' },
      { tipo: 'subtitulo', texto: 'Día 1: Baixa, Chiado y Alfama' },
      { tipo: 'parrafo', texto: 'Empieza por Rossio y Baixa, baja hasta Praça do Comércio y después sube hacia Chiado y Alfama. Así haces el centro histórico como un recorrido continuo y no cruzas varias veces la misma zona.' },
      { tipo: 'enlace', texto: 'La Baixa tiene una ruta propia si quieres preparar este tramo con más detalle.', href: '/blog/baixa-lisboa-que-ver', label: 'Qué ver en la Baixa' },
      { tipo: 'subtitulo', texto: 'Día 2: Belém y el Tajo' },
      { tipo: 'parrafo', texto: 'Agrupa Jerónimos, Pastéis de Belém, el paseo ribereño y los monumentos de la zona en la misma jornada. No mezcles Belém con Alfama solo para llenar huecos: el transporte termina comiéndose el tiempo que querías ganar.' },
      { tipo: 'subtitulo', texto: 'Día 3: Graça, Mouraria y miradores' },
      { tipo: 'parrafo', texto: 'Con cinco días ya puedes dedicar tiempo a una Lisboa más residencial. Sube a Graça en transporte si quieres ahorrar piernas y baja después hacia Mouraria, evitando repetir la misma cuesta.' },
      { tipo: 'enlace', texto: 'La guía de Graça ordena los dos miradores principales y la bajada hacia el centro.', href: '/blog/graca-lisboa-que-ver', label: 'Recorrer Graça' },
      { tipo: 'subtitulo', texto: 'Día 4: Parque das Nações' },
      { tipo: 'parrafo', texto: 'Reserva una mañana o una jornada relajada para la Lisboa contemporánea. Estación de Oriente, paseo junto al Tajo y Oceanário pueden formar un bloque; la telecabina es opcional, no una obligación.' },
      { tipo: 'enlace', texto: 'Si quieres decidir cuánto tiempo dedicar a esta zona, revisa la guía específica.', href: '/blog/parque-das-nacoes-lisboa-que-ver', label: 'Parque das Nações' },
      { tipo: 'subtitulo', texto: 'Día 5: Sintra' },
      { tipo: 'parrafo', texto: 'Usa el quinto día para Sintra y evita convertirlo en una carrera entre cuatro palacios. Dos visitas importantes y algo de tiempo en el centro suelen formar una jornada mucho más realista.' },
      { tipo: 'enlace', texto: 'Aquí tienes el transporte y el orden de visita explicado con más detalle.', href: '/blog/sintra-desde-lisboa', label: 'Sintra desde Lisboa' },
      { tipo: 'subtitulo', texto: 'Si llueve, cambia el orden, no el viaje' },
      { tipo: 'parrafo', texto: 'Con cinco días puedes mover una jornada de miradores y adelantar una visita cubierta. Esa flexibilidad es una de las grandes ventajas de tener más tiempo.' },
      { tipo: 'enlace', texto: 'Si aparece lluvia en la previsión, usa estas alternativas para reorganizar el día.', href: '/blog/lisboa-cuando-llueve', label: 'Qué hacer en Lisboa cuando llueve' },
    ],
  },

  'lisboa-cuando-llueve': {
    titulo: 'Qué hacer en Lisboa cuando llueve: planes cubiertos y ruta útil',
    descripcion: 'Ideas para reorganizar un día de lluvia en Lisboa con Oceanário, museos, mercados, cafés y zonas cubiertas sin perder horas cruzando la ciudad.',
    seoTitle: 'Qué hacer en Lisboa cuando llueve | Planes cubiertos',
    metaDescription: 'Qué hacer en Lisboa con lluvia: Oceanário, museos, mercados, cafés y una estrategia para reorganizar el itinerario sin desperdiciar el día.',
    imagen: '/images/lisboa-originales/estacion-oriente-lisboa/estacion-oriente-lisboa-tren-cubierta-calatrava.jpg',
    imageAlt: 'Cubierta de la estación de Oriente en Lisboa',
    categoria: 'Guías',
    fecha: '21 Sep 2026',
    dateModified: '2026-09-21',
    minutos: 8,
    links: [
      { href: '/blog/parque-das-nacoes-lisboa-que-ver', label: 'Parque das Nações' },
      { href: '/actividades/oceanario-lisboa', label: 'Oceanário de Lisboa' },
      { href: '/blog/mejores-mercados-lisboa', label: 'Mercados de Lisboa' },
      { href: '/blog/donde-tomar-cafe-lisboa', label: 'Dónde tomar café en Lisboa' },
    ],
    fuentes: [
      { label: 'Oceanário de Lisboa: información práctica', href: 'https://oceanario.pt/planear-visita/' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'La lluvia cambia Lisboa más por el suelo y las cuestas que por la falta de planes. La calçada puede resbalar, los miradores pierden sentido bajo un aguacero y algunos trayectos a pie se vuelven incómodos. La solución no es cancelar el día: es cambiar el orden.' },
      { tipo: 'subtitulo', texto: 'Oceanário y Parque das Nações' },
      { tipo: 'parrafo', texto: 'El Oceanário es uno de los planes cubiertos más fáciles de convertir en actividad principal. Está en Parque das Nações, junto a la estación Oriente de la Línea Roja, y su visita media ocupa alrededor de una hora y media o dos horas según la información oficial.' },
      { tipo: 'enlace', texto: 'Puedes combinarlo con la estación de Oriente y un paseo corto si la lluvia da tregua.', href: '/blog/parque-das-nacoes-lisboa-que-ver', label: 'Qué ver en Parque das Nações' },
      { tipo: 'subtitulo', texto: 'Museos: elige uno por zona' },
      { tipo: 'parrafo', texto: 'Un día de lluvia no necesita convertirse en una maratón de museos. Elige uno que esté cerca de la zona donde ya ibas a estar y reserva el resto del tiempo para comer, tomar café o esperar una ventana sin lluvia.' },
      { tipo: 'subtitulo', texto: 'Mercados y comida sin depender del clima' },
      { tipo: 'parrafo', texto: 'Los mercados cubiertos permiten mantener un plan gastronómico sin pasar la tarde corriendo entre paraguas. Time Out Market es la opción más conocida, pero no es la única; compara según la zona y el tipo de ambiente que busques.' },
      { tipo: 'enlace', texto: 'Aquí tienes una comparación de mercados para decidir cuál encaja mejor.', href: '/blog/mejores-mercados-lisboa', label: 'Mercados de Lisboa' },
      { tipo: 'subtitulo', texto: 'Cafés y pastelerías: usa la lluvia como pausa' },
      { tipo: 'parrafo', texto: 'Si el radar marca una hora de lluvia fuerte y después mejora, no llenes ese hueco con otro traslado. Haz una pausa larga en una pastelería o café y retoma la ruta cuando baje la intensidad.' },
      { tipo: 'subtitulo', texto: 'Una estrategia simple para reorganizar el día' },
      { tipo: 'lista', items: ['Mantén una actividad cubierta principal.', 'Agrupa el resto en la misma zona.', 'Evita miradores durante lluvia intensa.', 'Deja barrios empinados para una ventana más seca.', 'Lleva calzado con buena suela: la piedra mojada puede resbalar.'] },
      { tipo: 'parrafo', texto: 'Si tienes cuatro o cinco días, mueve la jornada de miradores en lugar de forzarla. Con poco tiempo, intercala una visita cubierta con un tramo corto a pie cuando mejore.' },
    ],
  },

  'parque-das-nacoes-lisboa-que-ver': {
    titulo: 'Parque das Nações en Lisboa: qué ver y cuánto tiempo dedicar',
    descripcion: 'Guía del Parque das Nações con estación de Oriente, Oceanário, paseo junto al Tajo y telecabina, además de una ruta según el tiempo disponible.',
    seoTitle: 'Parque das Nações Lisboa: qué ver y ruta',
    metaDescription: 'Qué ver en Parque das Nações: Oceanário, estación de Oriente, paseo junto al Tajo y telecabina. Ruta de 2 horas, media jornada o día completo.',
    imagen: '/images/reserva/img_1415.jpg',
    imageAlt: 'Paseo del Parque das Nações junto al Tajo y telecabinas de Lisboa',
    categoria: 'Guías',
    fecha: '21 Sep 2026',
    dateModified: '2026-09-21',
    minutos: 9,
    links: [
      { href: '/blog/estacion-oriente-lisboa', label: 'Estación de Oriente' },
      { href: '/actividades/oceanario-lisboa', label: 'Oceanário de Lisboa' },
      { href: '/blog/metro-lisboa-guia', label: 'Metro de Lisboa' },
      { href: '/blog/lisboa-en-5-dias', label: 'Lisboa en 5 días' },
    ],
    fuentes: [
      { label: 'Oceanário de Lisboa: planear visita', href: 'https://oceanario.pt/planear-visita/' },
      { label: 'Visit Lisboa: Telecabine Lisboa', href: 'https://www.visitlisboa.com/pt-pt/locais/telecabine-lisboa' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Parque das Nações muestra una Lisboa muy distinta de Alfama o Baixa: más plana, abierta al río y marcada por la transformación de la zona para la Expo 98. No la pondría por delante del centro histórico en una primera visita muy corta, pero encaja muy bien cuando tienes cuatro o cinco días.' },
      { tipo: 'subtitulo', texto: 'Empieza por la estación de Oriente' },
      { tipo: 'parrafo', texto: 'Oriente es el gran intercambiador de la zona y también una parada arquitectónica. Desde aquí puedes caminar hacia el frente ribereño sin necesidad de tomar otro transporte.' },
      { tipo: 'enlace', texto: 'Si te interesa la arquitectura de Santiago Calatrava y las conexiones de transporte, tenemos una guía propia.', href: '/blog/estacion-oriente-lisboa', label: 'Estación de Oriente' },
      { tipo: 'subtitulo', texto: 'Oceanário: la visita que más tiempo necesita' },
      { tipo: 'parrafo', texto: 'El Oceanário está en la Doca dos Olivais. La información oficial estima una visita media de 1 h 30 a 2 h. Si lo incluyes, conviértelo en la actividad central de la zona y organiza el paseo alrededor de ella.' },
      { tipo: 'subtitulo', texto: 'Paseo junto al Tajo' },
      { tipo: 'parrafo', texto: 'El frente ribereño es plano y funciona bien para caminar sin un itinerario rígido. Es una de las zonas más sencillas de Lisboa para familias, carritos o quien quiera descansar de las cuestas del centro histórico.' },
      { tipo: 'subtitulo', texto: 'Telecabina: opcional, no imprescindible' },
      { tipo: 'parrafo', texto: 'La telecabina recorre unos 1.230 metros junto al estuario y el trayecto dura aproximadamente entre 8 y 12 minutos según Visit Lisboa. Tiene sentido si te apetece la vista aérea; si tienes poco tiempo, el paseo a pie ya permite entender la zona.' },
      { tipo: 'subtitulo', texto: 'Cuánto tiempo dedicar' },
      { tipo: 'lista', items: ['2 horas: Oriente + paseo ribereño.', 'Media jornada: añade Oceanário o telecabina.', 'Día completo: Oceanário + paseo largo + comida y una segunda actividad.'] },
      { tipo: 'enlace', texto: 'La Línea Roja es la forma más directa de llegar desde muchas zonas de la ciudad.', href: '/blog/metro-lisboa-guia', label: 'Metro de Lisboa: guía 2026' },
    ],
  },

  'metro-lisboa-guia': {
    titulo: 'Metro de Lisboa 2026: mapa, horarios, billetes y líneas',
    descripcion: 'Guía práctica del Metro de Lisboa con líneas, horario normal, precios 2026, Navegante, contactless y conexiones útiles para aeropuerto, centro y Oriente.',
    seoTitle: 'Metro Lisboa 2026: mapa, horarios y billetes',
    metaDescription: 'Metro de Lisboa 2026: horario 06:30-01:00, cuatro líneas, billete 1,90 €, zapping 1,72 €, contactless y conexiones útiles.',
    imagen: '/images/lisboa-originales/estacion-olaias-lisboa/estacion-olaias-lisboa-hero-techo-colores.jpg',
    imageAlt: 'Interior colorido de la estación de Metro de Olaias en Lisboa',
    categoria: 'Transporte',
    fecha: '21 Sep 2026',
    dateModified: '2026-09-21',
    minutos: 9,
    links: [
      { href: '/blog/tarjeta-navegante-lisboa', label: 'Tarjeta Navegante' },
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { href: '/blog/aeropuerto-lisboa-al-centro', label: 'Aeropuerto al centro' },
      { href: '/blog/estacion-oriente-lisboa', label: 'Estación de Oriente' },
    ],
    fuentes: [
      { label: 'Metro de Lisboa: horarios y frecuencias', href: 'https://www.metrolisboa.pt/viajar/horarios-e-frequencias/' },
      { label: 'Metro de Lisboa: mapas y diagramas', href: 'https://www.metrolisboa.pt/viajar/mapas-e-diagramas/' },
      { label: 'Metro de Lisboa: comprar billetes', href: 'https://www.metrolisboa.pt/comprar/' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'El Metro es la forma más sencilla de cruzar Lisboa cuando las zonas están bien conectadas. No sustituye caminar por Alfama, Graça o Belém, pero resuelve aeropuerto, Oriente, Saldanha, Marquês, Baixa-Chiado y otros desplazamientos largos con bastante previsibilidad.' },
      { tipo: 'subtitulo', texto: 'Horario normal del Metro de Lisboa' },
      { tipo: 'parrafo', texto: 'En condiciones normales, el Metro abre a las 06:30 y funciona hasta la 01:00 todos los días, incluidos fines de semana y festivos. Puede haber prolongaciones especiales o alteraciones por obras y eventos, así que comprueba el estado de las líneas si tienes un trayecto importante.' },
      { tipo: 'subtitulo', texto: 'Las cuatro líneas' },
      { tipo: 'lista', items: ['Azul: útil para Marquês de Pombal, Avenida y Baixa-Chiado.', 'Amarilla: conecta zonas del norte con Marquês y Rato.', 'Verde: pasa por Rossio, Baixa-Chiado, Cais do Sodré y otros puntos centrales.', 'Roja: conecta Aeroporto, Oriente, Olaias, Alameda y Saldanha.'] },
      { tipo: 'parrafo', texto: 'No memorices la red entera antes del viaje. Mira la estación de origen, la línea, el sentido por la estación terminal y el punto de transbordo si hace falta. El mapa oficial actualizado es más útil que una captura antigua guardada en el móvil.' },
      { tipo: 'subtitulo', texto: 'Precios 2026' },
      { tipo: 'lista', items: ['Billete Carris/Metro: 1,90 €.', 'Zapping en Metro: 1,72 € por viaje.', 'Billete 24 h Carris/Metro: 7,25 €.', 'Pago con tarjeta bancaria contactless en Metro: 1,92 € por viaje.', 'Tarjeta Navegante ocasional: 0,50 €.'] },
      { tipo: 'enlace', texto: 'Para entender qué puedes cargar en la tarjeta y cuándo compensa cada opción, usa la guía específica.', href: '/blog/tarjeta-navegante-lisboa', label: 'Tarjeta Navegante en Lisboa' },
      { tipo: 'subtitulo', texto: 'Aeropuerto y Oriente' },
      { tipo: 'parrafo', texto: 'Aeroporto y Oriente están en la Línea Roja. Es una conexión especialmente útil si llegas en avión, vas al Parque das Nações o necesitas enlazar con trenes y autobuses en Oriente.' },
      { tipo: 'enlace', texto: 'Si llegas con maletas, compara Metro con taxi y apps antes de decidir.', href: '/blog/aeropuerto-lisboa-al-centro', label: 'Del aeropuerto al centro' },
      { tipo: 'subtitulo', texto: 'Errores fáciles de evitar' },
      { tipo: 'lista', items: ['No validar correctamente el título al entrar.', 'Usar una sola Navegante para varias personas en el mismo viaje.', 'Depender del Metro para barrios donde caminar o usar bus tiene más sentido.', 'Guardar un mapa viejo y no revisar cierres o cambios.', 'Confundir el pago contactless del Metro con un pase válido en todos los operadores.'] },
    ],
  },

  'lisboa-en-4-dias': {
    titulo: 'Lisboa en 4 días: itinerario para ver la ciudad y Sintra sin correr',
    descripcion: 'Itinerario de cuatro días por Lisboa con centro histórico, Belém, Sintra y una jornada más local, organizado para evitar trayectos innecesarios.',
    seoTitle: 'Lisboa en 4 días: itinerario completo sin correr',
    metaDescription: 'Qué ver en Lisboa en 4 días: ruta por Baixa, Alfama, Belém, Sintra, Graça y Parque das Nações con tiempos realistas y enlaces útiles.',
    imagen: '/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
    imageAlt: 'Tejados de Alfama y el río Tajo vistos desde un mirador de Lisboa',
    categoria: 'Guías',
    fecha: '21 Sep 2026',
    dateModified: '2026-09-21',
    minutos: 11,
    links: [
      { href: '/itinerarios/lisboa-1-dia-lo-esencial', label: 'Lisboa en 1 día' },
      { href: '/itinerarios/lisboa-2-dias-completo', label: 'Lisboa en 2 días' },
      { href: '/itinerarios/lisboa-3-dias-premium', label: 'Lisboa en 3 días' },
      { href: '/blog/sintra-desde-lisboa', label: 'Cómo visitar Sintra desde Lisboa' },
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Cuatro días son suficientes para conocer lo esencial de Lisboa, dedicar una jornada a Sintra y todavía reservar tiempo para una zona menos obvia. La clave no es meter más monumentos: es agrupar cada día por zonas para no cruzar la ciudad varias veces.' },
      { tipo: 'subtitulo', texto: 'Día 1: Baixa, Chiado y Alfama' },
      { tipo: 'parrafo', texto: 'Empieza por la parte más fácil de caminar: Rossio, Baixa y Praça do Comércio. Después sube hacia Chiado y termina en Alfama, dejando los miradores para la tarde. Es un primer día clásico, pero funciona porque concentra buena parte de la Lisboa histórica en un recorrido continuo.' },
      { tipo: 'lista', items: ['Rossio y Praça da Figueira.', 'Rua Augusta y Praça do Comércio.', 'Chiado y Largo do Carmo.', 'Alfama, Santa Luzia y Portas do Sol.', 'Atardecer en un mirador si todavía tienes energía.'] },
      { tipo: 'enlace', texto: 'Si quieres una ruta más detallada para este primer día, usa nuestro itinerario ya organizado.', href: '/itinerarios/lisboa-1-dia-lo-esencial', label: 'Abrir Lisboa en 1 día' },

      { tipo: 'subtitulo', texto: 'Día 2: Belém y el oeste de Lisboa' },
      { tipo: 'parrafo', texto: 'Dedica la segunda jornada a Belém. Jerónimos, el paseo junto al Tajo, los Pastéis de Belém y los monumentos de la zona caben mejor juntos que mezclados con Alfama o Graça. Si terminas temprano, continúa hacia Alcântara o vuelve al centro sin añadir otra gran subida.' },
      { tipo: 'lista', items: ['Monasterio de los Jerónimos.', 'Pastéis de Belém.', 'Praça do Império y paseo junto al río.', 'Torre de Belém y Padrão dos Descobrimentos según tus prioridades.', 'Alcântara como extensión opcional.'] },

      { tipo: 'subtitulo', texto: 'Día 3: Sintra sin intentar verlo todo' },
      { tipo: 'parrafo', texto: 'Sintra merece un día separado. Intentar sumar Cascais el mismo día suele convertir la excursión en una cadena de transportes. Elige dos grandes visitas y deja margen para moverte entre ellas.' },
      { tipo: 'enlace', texto: 'Antes de reservar, revisa la guía específica con transporte, orden de visitas y tiempos.', href: '/blog/sintra-desde-lisboa', label: 'Sintra desde Lisboa' },

      { tipo: 'subtitulo', texto: 'Día 4: Graça y Parque das Nações' },
      { tipo: 'parrafo', texto: 'El cuarto día sirve para salir del circuito más repetido. Empieza en Parque das Nações si quieres arquitectura contemporánea, paseo junto al Tajo y Oceanário; después vuelve por la Línea Roja y termina en Graça para ver la ciudad desde arriba.' },
      { tipo: 'lista', items: ['Estación de Oriente y Parque das Nações.', 'Paseo ribereño u Oceanário si te interesa.', 'Metro hasta Alameda y conexión hacia Graça.', 'Miradouro da Graça.', 'Senhora do Monte para terminar con una vista amplia.'] },
      { tipo: 'enlace', texto: 'Para preparar el tramo de Graça, aquí tienes una guía específica del barrio.', href: '/blog/graca-lisboa-que-ver', label: 'Qué ver en Graça' },

      { tipo: 'subtitulo', texto: 'Cómo adaptar la ruta si llueve o vas más lento' },
      { tipo: 'parrafo', texto: 'No cierres los cuatro días como si fueran una reserva. Si llueve, cambia un mirador por museo o mercado; si el primer día te deja cansado, mueve Graça al siguiente. Tener cuatro días es precisamente lo que permite ajustar el ritmo sin perder lo esencial.' },
      { tipo: 'enlace', texto: 'La movilidad puede cambiar por completo el orden de la ruta. Revisa antes billetes, Metro y tranvías.', href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
    ],
  },

  'tarjeta-navegante-lisboa': {
    titulo: 'Tarjeta Navegante en Lisboa: cuál comprar y cuánto cuesta en 2026',
    descripcion: 'Qué es la tarjeta Navegante, diferencia entre ocasional y personalizada, precios 2026, zapping y cuándo conviene un billete de 24 horas.',
    seoTitle: 'Tarjeta Navegante Lisboa 2026: precios y cuál comprar',
    metaDescription: 'Navegante Lisboa 2026: tarjeta ocasional, zapping, billete Carris/Metro, 24 horas y pases mensuales explicados con tarifas oficiales.',
    imagen: '/images/lisboa-originales/electrico-15e-caf-lisboa.jpg',
    imageAlt: 'Tranvía 15E de Lisboa utilizado por viajeros con títulos Navegante y Carris',
    categoria: 'Transporte',
    fecha: '21 Sep 2026',
    dateModified: '2026-09-21',
    minutos: 8,
    links: [
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { href: '/blog/aeropuerto-lisboa-al-centro', label: 'Del aeropuerto de Lisboa al centro' },
      { href: '/blog/lisboa-card-vale-la-pena', label: 'Cuándo compensa la Lisboa Card' },
    ],
    fuentes: [
      { label: 'Metro de Lisboa: tarjeta Navegante ocasional', href: 'https://www.metrolisboa.pt/comprar/cartao-viva-viagem/' },
      { label: 'Metro de Lisboa: tarifas 2026', href: 'https://www.metrolisboa.pt/2025/12/19/novas-tarifas-2026/' },
      { label: 'Carris: tarifas 2026', href: 'https://www.carris.pt/descubra/novo-tarifario-2026/' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Para un visitante, “Navegante” puede significar dos cosas distintas: la tarjeta ocasional donde cargas billetes o zapping, y la tarjeta personalizada usada sobre todo por quienes viajan con frecuencia o necesitan pases mensuales. Si vienes unos días, normalmente te interesa la primera.' },
      { tipo: 'subtitulo', texto: 'Navegante ocasional: la tarjeta para viajes sueltos' },
      { tipo: 'parrafo', texto: 'La tarjeta Navegante ocasional cuesta 0,50 € y puede recargarse durante un año. Es individual durante cada viaje: no sirve para que dos personas validen con la misma tarjeta al mismo tiempo.' },
      { tipo: 'lista', items: ['Billete Carris/Metro: 1,90 €.', 'Zapping en Metro: 1,72 € por viaje.', '24 horas Carris/Metro: 7,25 €.', '24 horas Carris/Metro/Transtejo: 10,35 €.', '24 horas Carris/Metro/CP: 11,40 €.'] },
      { tipo: 'subtitulo', texto: '¿Billete sencillo, zapping o 24 horas?' },
      { tipo: 'parrafo', texto: 'Si ese día vas a caminar mucho y hacer pocos trayectos, zapping o billetes sueltos pueden tener más sentido. Si vas a encadenar Metro, autobuses, tranvías o ascensores durante todo el día, compara el coste con el billete de 24 horas antes de cargar la tarjeta.' },
      { tipo: 'subtitulo', texto: '¿Y pagar directamente con tarjeta bancaria?' },
      { tipo: 'parrafo', texto: 'En 2026 el viaje de Metro pagado directamente con tarjeta bancaria contactless cuesta 1,92 €. Es cómodo para un trayecto aislado, pero no sustituye automáticamente a Navegante si vas a usar varios operadores o quieres un título de 24 horas.' },
      { tipo: 'subtitulo', texto: 'Pases mensuales Navegante' },
      { tipo: 'parrafo', texto: 'Los pases mensuales están pensados para uso frecuente. El Navegante Metropolitano normal cuesta 40 € al mes y cubre el área metropolitana; el municipal normal cuesta 30 € y se limita al municipio correspondiente. Para un viaje turístico corto normalmente no son la primera opción.' },
      { tipo: 'enlace', texto: 'Si quieres ver cómo encaja Navegante con Metro, tranvías, buses y trenes, aquí está la guía general.', href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
    ],
  },

  'graca-lisboa-que-ver': {
    titulo: 'Graça en Lisboa: qué ver, miradores y cómo recorrer el barrio',
    descripcion: 'Ruta por Graça con el Miradouro da Graça, Senhora do Monte y calles del barrio, pensada para evitar subidas innecesarias y terminar con vistas.',
    seoTitle: 'Graça Lisboa: qué ver, miradores y ruta a pie',
    metaDescription: 'Qué ver en Graça, Lisboa: Miradouro da Graça, Senhora do Monte, tranvía 28, ruta a pie y consejos para recorrer el barrio sin repetir cuestas.',
    imagen: '/images/miradouro-grupo-atardecer.jpg',
    imageAlt: 'Personas contemplando Lisboa desde un mirador de Graça al atardecer',
    categoria: 'Guías',
    fecha: '21 Sep 2026',
    dateModified: '2026-09-21',
    minutos: 7,
    links: [
      { href: '/blog/mejores-miradores-lisboa', label: 'Los mejores miradores de Lisboa' },
      { href: '/blog/tram-28-historia-guia', label: 'Guía del tranvía 28' },
      { href: '/blog/alfama-historia-guia', label: 'Qué ver en Alfama' },
    ],
    fuentes: [
      { label: 'Visit Lisboa: Miradouro da Graça', href: 'https://www.visitlisboa.com/es/sitios/mirador-de-graca' },
      { label: 'Visit Lisboa: Miradouro da Senhora do Monte', href: 'https://www.visitlisboa.com/pt-pt/locais/miradouro-da-senhora-do-monte' },
      { label: 'Visit Lisboa: Igreja da Graça', href: 'https://www.visitlisboa.com/pt-pt/sobre-o-turismo-de-lisboa/associados/igreja-da-graca' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Graça es una de las mejores zonas para entender por qué Lisboa se vive en vertical. Está sobre una colina, combina calles residenciales con algunos de los miradores más conocidos y conecta de forma natural con Alfama y Mouraria.' },
      { tipo: 'subtitulo', texto: 'Miradouro da Graça' },
      { tipo: 'parrafo', texto: 'El Miradouro da Graça está junto a la iglesia y ofrece una vista amplia de la ciudad y el Tajo. Es una parada cómoda porque tiene sombra y espacio para sentarse; no hace falta convertirlo en una visita larga.' },
      { tipo: 'subtitulo', texto: 'Senhora do Monte' },
      { tipo: 'parrafo', texto: 'A pocos minutos cuesta arriba está Senhora do Monte, uno de los puntos más altos de esta parte de Lisboa. Desde allí se distinguen el castillo, la Baixa, el estuario del Tajo y buena parte del centro.' },
      { tipo: 'subtitulo', texto: 'Una ruta sencilla para no repetir cuestas' },
      { tipo: 'lista', items: ['Sube a Graça en transporte si quieres ahorrar piernas.', 'Empieza por Largo da Graça e iglesia.', 'Continúa al Miradouro da Graça.', 'Sube a Senhora do Monte.', 'Baja después hacia Mouraria o Alfama en lugar de volver por el mismo camino.'] },
      { tipo: 'enlace', texto: 'Si quieres comparar estas vistas con otras zonas de la ciudad, revisa la guía de miradores.', href: '/blog/mejores-miradores-lisboa', label: 'Mejores miradores de Lisboa' },
      { tipo: 'subtitulo', texto: '¿Merece la pena subir en el tranvía 28?' },
      { tipo: 'parrafo', texto: 'El 28 llega a Graça y puede formar parte del paseo, pero no bases toda la visita en conseguir sitio dentro. Si la cola es larga, usa otro transporte y disfruta el barrio a pie.' },
      { tipo: 'enlace', texto: 'Antes de hacer cola, revisa nuestra guía específica del 28.', href: '/blog/tram-28-historia-guia', label: 'Tranvía 28: ruta y consejos' },
    ],
  },

  'baixa-lisboa-que-ver': {
    titulo: 'Baixa de Lisboa: qué ver y cómo recorrer el centro a pie',
    descripcion: 'Ruta práctica por la Baixa de Lisboa con Rossio, Rua Augusta, Praça do Comércio y Santa Justa, en un orden fácil para una primera visita.',
    seoTitle: 'Baixa de Lisboa: qué ver y ruta a pie',
    metaDescription: 'Qué ver en la Baixa de Lisboa: Rossio, Rua Augusta, Praça do Comércio, Santa Justa y una ruta sencilla por el centro histórico.',
    imagen: '/images/lisboa-originales/baixa-pombalina-lisboa-02.webp',
    imageAlt: 'Calle de la Baixa Pombalina descendiendo hacia el río Tajo en Lisboa',
    categoria: 'Guías',
    fecha: '21 Sep 2026',
    dateModified: '2026-09-21',
    minutos: 7,
    links: [
      { href: '/blog/chiado-bairro-alto-guia', label: 'Chiado y Bairro Alto' },
      { href: '/blog/alfama-historia-guia', label: 'Alfama' },
      { href: '/itinerarios/lisboa-1-dia-lo-esencial', label: 'Lisboa en 1 día' },
    ],
    fuentes: [
      { label: 'Visit Lisboa: Ruta de la calçada portuguesa', href: 'https://www.visitlisboa.com/es/lisbon-stories/14-route-du-pavage-portugais/pois' },
      { label: 'Visit Portugal: conocer Lisboa y la Baixa', href: 'https://www.visitportugal.com/pt-pt/node/73775' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'La Baixa es la parte más fácil para orientarse en una primera visita. El trazado es más regular que en Alfama o Graça y permite caminar desde Rossio hasta el Tajo casi en línea recta.' },
      { tipo: 'subtitulo', texto: 'Empieza en Rossio' },
      { tipo: 'parrafo', texto: 'Rossio funciona como puerta de entrada al centro. Desde aquí puedes ver la estación, acercarte a Praça da Figueira y comenzar el recorrido hacia el río sin subir todavía a las colinas.' },
      { tipo: 'subtitulo', texto: 'Rua Augusta y el eje de la Baixa' },
      { tipo: 'parrafo', texto: 'Rua Augusta es peatonal y atraviesa el corazón de la Baixa. Lo mejor es usarla como eje, entrando y saliendo por las calles laterales, en lugar de quedarte únicamente en la avenida comercial.' },
      { tipo: 'subtitulo', texto: 'Praça do Comércio y el Tajo' },
      { tipo: 'parrafo', texto: 'Al final de Rua Augusta aparece la Praça do Comércio, abierta al río. Es un buen punto para decidir si sigues hacia Alfama o vuelves por Chiado.' },
      { tipo: 'subtitulo', texto: 'Santa Justa y Carmo' },
      { tipo: 'parrafo', texto: 'El Elevador de Santa Justa conecta la Baixa con la parte alta junto al Carmo. Si hay mucha cola y tu prioridad es el barrio, puedes subir por otras calles y llegar igualmente a la zona de Chiado.' },
      { tipo: 'subtitulo', texto: 'Ruta rápida por la Baixa' },
      { tipo: 'lista', items: ['Rossio.', 'Praça da Figueira.', 'Rua Augusta.', 'Elevador de Santa Justa por fuera si no quieres esperar.', 'Praça do Comércio.', 'Continuación hacia Chiado o Alfama.'] },
      { tipo: 'enlace', texto: 'Si solo tienes un día en Lisboa, esta zona ya está integrada en una ruta completa.', href: '/itinerarios/lisboa-1-dia-lo-esencial', label: 'Ver Lisboa en 1 día' },
    ],
  },

  'volta-portugal-devolucion-envases': {
    titulo: 'Volta en Portugal: cómo devolver envases y recuperar el depósito',
    descripcion: 'Qué significa el símbolo Volta, por qué algunas bebidas llevan un depósito de 10 céntimos y cómo devolver sus envases durante un viaje a Lisboa.',
    seoTitle: 'Volta en Portugal: envases y devolución de los 10 céntimos',
    metaDescription: 'Qué es Volta en Portugal, qué envases llevan un depósito de 10 céntimos y cómo devolver botellas y latas en Lisboa para recuperar el dinero durante tu viaje.',
    imagen: '/images/volta-devolucion-envases-portugal.webp',
    imageAlt: 'Logotipo Volta y botella de plástico con el símbolo de devolución de envases de Portugal',
    imageFit: 'contain',
    categoria: 'Consejos',
    fecha: '18 Sep 2026',
    minutos: 4,
    links: [
      { href: '/blog/como-pagar-en-portugal', label: 'Cómo pagar en Portugal sin sorpresas' },
      { href: '/blog/presupuesto-viajar-lisboa', label: 'Preparar el presupuesto de tu viaje' },
      { href: '/itinerarios', label: 'Explorar los itinerarios gratuitos de Lisboa' },
    ],
    fuentes: [
      { label: 'DGAE: puesta en marcha y funcionamiento del depósito', href: 'https://dgeconomia.gov.pt/comunicacao/noticias/sistema-de-deposito-e-reembolso.aspx' },
      { label: 'Volta: envases, devolución y reembolso', href: 'https://volta.com.pt/perguntas-frequentes/' },
      { label: 'SDR Portugal: puntos de recogida y formas de reembolso', href: 'https://sdrportugal.pt/pontos-de-recolha/' },
      { label: 'Volta: mapa de puntos de devolución', href: 'https://volta.com.pt/onde-devolver/' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Si al comprar una bebida en Portugal aparecen 10 céntimos extra por el envase, mira la etiqueta antes de tirarlo. El símbolo Volta indica que has pagado un depósito recuperable: devuelve la botella o la lata en un punto del sistema y recupera ese importe.' },
      { tipo: 'parrafo', texto: 'No necesitas organizar el viaje alrededor del reciclaje. Basta con no aplastar el envase y localizar un punto que te quede de paso. Lo importante es entender qué puedes devolver y no confundir el depósito con un recargo definitivo sobre la bebida.' },

      { tipo: 'subtitulo', texto: 'Qué es Volta y por qué te cobran 10 céntimos' },
      { tipo: 'parrafo', texto: 'Volta es la marca del sistema portugués de depósito y reembolso de envases de bebidas, en funcionamiento desde el 10 de abril de 2026. Se aplica a las botellas de plástico y latas incluidas en el sistema. La señal que debes buscar es el símbolo Volta, no solo el material del recipiente.' },
      { tipo: 'parrafo', texto: 'El depósito es de 0,10 € por envase y se recupera al devolverlo en condiciones. Diez envases aceptados equivalen a 1 €: no es un descuento sobre la compra, sino dinero que habías adelantado. Una botella de vidrio o un envase sin el símbolo no se convierte en retornable por llevarlo a la máquina.' },
      { tipo: 'enlace', texto: 'Si estás revisando pequeños cargos y formas de pago antes del viaje, conviene separar este depósito de las comisiones de tu banco.', href: '/blog/como-pagar-en-portugal', label: 'Qué tener en cuenta al pagar en Portugal' },

      { tipo: 'subtitulo', texto: 'Cómo preparar y devolver la botella o la lata' },
      { tipo: 'parrafo', texto: 'Vacía el envase y consérvalo entero, sin aplastarlo ni deteriorar la etiqueta. El código de barras debe poder leerse y las botellas deben llevar su tapón. No hace falta lavarlo, pero sí dejarlo sin bebida dentro.' },
      { tipo: 'parrafo', texto: 'En una máquina automática, introduce los envases de uno en uno siguiendo las indicaciones. Al acabar, completa la operación y recoge el comprobante o elige la opción de reembolso ofrecida. No te marches después de introducir la última lata sin comprobar cómo vas a recuperar el importe.' },
      { tipo: 'parrafo', texto: 'La rutina más cómoda es reservar una bolsa pequeña en el alojamiento y llevarla cuando vuelvas a hacer la compra. Durante el paseo, guardar una botella entera ocupa más que aplastarla, pero aplastarla puede impedir que la máquina la reconozca.' },

      { tipo: 'subtitulo', texto: 'Dónde devolver envases en Lisboa' },
      { tipo: 'parrafo', texto: 'La red combina máquinas, puntos de recogida manual y quioscos. Muchos están vinculados a supermercados, pero no des por hecho que cualquier tienda dispone de máquina. Consulta el mapa oficial de Volta y elige un punto cerca del alojamiento o de tu siguiente parada.' },
      { tipo: 'enlace', texto: 'Busca la ubicación concreta y comprueba su disponibilidad antes de desplazarte con una bolsa de envases.', href: 'https://volta.com.pt/onde-devolver/', label: 'Consultar el mapa oficial de devolución Volta' },
      { tipo: 'parrafo', texto: 'Los puntos y quioscos Volta aceptan envases del sistema aunque se hayan comprado en otro lugar. No extrapoles esa regla a cualquier bar: los establecimientos de restauración solo están obligados a aceptar los que ellos hayan vendido.' },

      { tipo: 'subtitulo', texto: 'Cómo recuperar el dinero, sin otra compra obligatoria' },
      { tipo: 'parrafo', texto: 'El reembolso puede pasar por un vale convertible en dinero, crédito de compra, tarjeta de fidelización o una donación, según el punto. En supermercados e hipermercados puedes pedir el importe en dinero: no tienes que gastarlo allí. El vale emitido por las máquinas tiene una validez de un año.' },
      { tipo: 'parrafo', texto: 'Si estás de visita, pregunta dónde se canjea antes de salir de la tienda. Un saldo de fidelización que no volverás a usar puede resultarte menos práctico que cobrar el importe. Conserva el comprobante hasta terminar el canje y revisa la opción elegida antes de confirmarla.' },

      { tipo: 'subtitulo', texto: 'Si la máquina rechaza el envase' },
      { tipo: 'parrafo', texto: 'Comprueba primero el símbolo, que esté vacío, el tapón y el estado del código de barras. Si el punto no funciona, consulta al personal o prueba otro más tarde; no fuerces la entrada. Los envases que no pertenecen al sistema deben ir al circuito de reciclaje correspondiente.' },
      { tipo: 'parrafo', texto: 'Para una estancia corta, la mejor solución es devolverlos durante una compra habitual, no reservar un desplazamiento solo para recuperar unos céntimos. Hazlo antes del último día: dejar una bolsa junto a la maleta no garantiza que encuentres un punto de devolución camino del aeropuerto.' },
      { tipo: 'nota', texto: 'Funcionamiento y depósito comprobados el 18 de septiembre de 2026. Consulta Volta para confirmar los puntos disponibles y las condiciones de devolución antes de desplazarte.' },
    ],
  },
  'patinetes-electricos-lisboa': {
    titulo: 'Patinetes eléctricos en Lisboa: precios, apps y cuándo usarlos',
    descripcion: 'Cómo alquilar una trotineta en Lisboa, comprobar su precio antes de salir y terminar el viaje sin dejar el contador en marcha.',
    seoTitle: 'Patinetes en Lisboa: precios, apps y dónde aparcar',
    metaDescription: 'Cómo alquilar patinetes eléctricos en Lisboa, comprobar precios en Bolt y Lime, aparcar correctamente y decidir cuándo conviene caminar o usar el metro.',
    imagen: '/images/reserva/img_1415.jpg',
    imageAlt: 'Paseo junto al agua y telecabinas en el Parque das Nações de Lisboa',
    categoria: 'Transporte',
    fecha: '18 Sep 2026',
    minutos: 4,
    links: [
      { href: '/blog/como-moverse-por-lisboa', label: 'Comparar las formas de moverse por Lisboa' },
      { href: '/blog/mejores-apps-lisboa', label: 'Apps útiles durante el viaje' },
      { href: '/itinerarios', label: 'Elegir un itinerario gratuito por Lisboa' },
    ],
    fuentes: [
      { label: 'Bolt: alquiler, precios y uso de patinetes', href: 'https://bolt.eu/en/scooters/' },
      { label: 'Lime: costes y tarifas de viaje', href: 'https://help.li.me/hc/pt/articles/115004914208-Custos-e-taxas-de-viagem' },
      { label: 'Câmara Municipal de Lisboa: Liberdade Responsável', href: 'https://www.lisboa.pt/liberdade-responsavel' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Un patinete eléctrico puede resolver un trayecto corto en Lisboa, pero no convierte sus cuestas en una ruta cómoda ni garantiza ahorrar dinero. Antes de desbloquearlo, comprueba tres cosas: cuánto cuesta, por dónde puedes circular y dónde podrás terminar el alquiler.' },
      { tipo: 'parrafo', texto: 'En portugués se llama trotineta. La que alquilas en la calle se gestiona desde una aplicación, y dejarla quieta no significa haber cerrado el viaje. Esa diferencia importa más para tu bolsillo que elegir el vehículo más cercano.' },

      { tipo: 'subtitulo', texto: 'Cuánto cuesta: mira el precio antes de desbloquear' },
      { tipo: 'parrafo', texto: 'No hay una tarifa única para todos los patinetes de Lisboa. Bolt explica que el coste combina desbloqueo y minutos, con importes que varían según la ubicación. Lime también remite a la aplicación para consultar la tarifa vigente y advierte de variaciones por lugar, momento y modalidad contratada.' },
      { tipo: 'parrafo', texto: 'Para el pago por uso, calcula el desbloqueo más los minutos previstos multiplicados por la tarifa que muestra tu app, y revisa cualquier cargo adicional indicado antes de confirmar. Si quieres comparar un trayecto de 15 minutos con otro de 25, la diferencia son diez minutos más de alquiler, no dos precios fijos de ciudad.' },
      { tipo: 'parrafo', texto: 'Cuenta también el tiempo de orientarte y encontrar aparcamiento permitido. Si vais dos personas, cada una necesita su vehículo y su alquiler: compara el coste conjunto con otras opciones. No publicamos un supuesto precio por minuto de Lisboa porque las páginas oficiales consultadas no ofrecen una tarifa local única verificable.' },
      { tipo: 'nota', texto: 'Información consultada el 18 de septiembre de 2026. El precio aplicable es el que muestra el operador antes del desbloqueo; revisa también las condiciones de cualquier bono o promoción.' },

      { tipo: 'subtitulo', texto: 'Cómo elegir app y preparar el trayecto' },
      { tipo: 'parrafo', texto: 'Bolt y Lime son dos aplicaciones que puedes consultar. Mira su mapa para comprobar qué vehículos y zonas están disponibles en ese momento; tener instalada una app no garantiza encontrar uno junto a ti. En Bolt, no confundas el alquiler de patinetes con pedir un coche con conductor.' },
      { tipo: 'parrafo', texto: 'Antes de iniciar, revisa las condiciones del operador, la batería del vehículo, el destino y el aparcamiento admitido. Prepara también el móvil: necesitarás poder usar la aplicación al terminar. Resolver la ruta después de desbloquear significa empezar a pagar mientras todavía estás decidiendo adónde ir.' },
      { tipo: 'enlace', texto: 'No hace falta llenar el teléfono de aplicaciones para una escapada. Instala las que encajen con los desplazamientos que realmente vas a hacer.', href: '/blog/mejores-apps-lisboa', label: 'Qué apps merece la pena llevar a Lisboa' },

      { tipo: 'subtitulo', texto: 'Por dónde circular y dónde aparcar' },
      { tipo: 'parrafo', texto: 'La campaña municipal Liberdade Responsável recuerda que las aceras son para peatones, que no se deben llevar pasajeros y que hay que respetar los semáforos. Para cruzar un paso de peatones, baja y lleva el patinete a mano. Guarda el teléfono mientras conduces y utiliza casco.' },
      { tipo: 'parrafo', texto: 'Comprueba las zonas de circulación y estacionamiento en el mapa del operador. Que un paseo sea ancho o esté junto al río no significa que puedas recorrerlo entero en patinete ni dejarlo en cualquier punto. La señalización y las restricciones de la zona siguen importando.' },
      { tipo: 'parrafo', texto: 'Al aparcar, deja libres rampas, puertas, pasos y recorridos peatonales. Piensa en alguien con carrito o silla de ruedas: un hueco que a ti te permite pasar de lado puede impedirle continuar. Usa un lugar autorizado, no simplemente el espacio libre más próximo a tu destino.' },

      { tipo: 'subtitulo', texto: 'Terminar el viaje sin dejar el contador abierto' },
      { tipo: 'parrafo', texto: 'Aparca donde la app lo permita y sigue sus instrucciones para finalizar, incluida la fotografía si la solicita. Espera a la confirmación del cierre y revisa el recibo. Lime indica expresamente que el cobro continúa hasta que el viaje termina y el vehículo queda bloqueado.' },
      { tipo: 'parrafo', texto: 'Si no puedes cerrar, consulta el mensaje de la aplicación y contacta con soporte desde ella. Guarda evidencia del lugar, la hora y el error. Cerrar la app o marcharte porque el patinete está parado no sustituye la confirmación de fin de viaje.' },

      { tipo: 'subtitulo', texto: 'Cuándo compensa y cuándo elegir otra cosa' },
      { tipo: 'parrafo', texto: 'Tiene sentido para un desplazamiento concreto, con recorrido permitido, firme adecuado y aparcamiento cerca de la llegada. Tiene menos sentido para ir parando en escaparates, hacer fotos continuamente o encadenar miradores: estarás combinando pausas, pendientes y decisiones de aparcamiento.' },
      { tipo: 'parrafo', texto: 'No lo elegiría como primera opción para descubrir las calles estrechas de Alfama ni para aprender a conducir entre tráfico y peatones. Las cuestas, los adoquines y los raíles exigen atención. Si el suelo está mojado o no te sientes seguro, cambia de transporte en lugar de improvisar.' },
      { tipo: 'enlace', texto: 'Para cruzar la ciudad, subir a otro barrio o moverte con equipaje, compara el trayecto completo antes de decidir por proximidad.', href: '/blog/como-moverse-por-lisboa', label: 'Cuándo conviene metro, autobús, tren o caminar' },
      { tipo: 'enlace', texto: 'Si lo que quieres es explorar a tu ritmo, una ruta a pie evita pagar mientras te detienes y te deja cambiar de plan sin buscar aparcamiento.', href: '/itinerarios', label: 'Abrir los itinerarios gratuitos de Lisboa' },
    ],
  },
  'time-out-market-lisboa': {
    titulo: 'Time Out Market Lisboa: qué comer, precios y si merece la pena',
    descripcion: 'Guía independiente del Time Out Market Lisboa: cómo funciona, qué tipo de comida hay, cuánto esperar gastar y cuándo conviene elegir otra opción.',
    seoTitle: 'Time Out Market Lisboa: menú, precios y qué comer',
    metaDescription: 'Qué encontrarás en el menú del Time Out Market Lisboa, cómo funcionan los puestos, qué esperar de los precios, cuándo se llena y si merece la pena.',
    imagen: '/images/lisboa-originales/time-out-market-lisboa/time-out-market-lisboa-interior-puestos-comida.jpg',
    imageAlt: 'Interior del Time Out Market Lisboa con puestos de comida y mesas compartidas',
    categoria: 'Gastronomía',
    fecha: '28 Ago 2026',
    fechaActualizacion: 'Actualizado en agosto de 2026',
    dateModified: '2026-08-28',
    minutos: 10,
    links: [
      { href: '/blog/mejores-mercados-lisboa', label: 'Los mercados de Lisboa' },
      { href: '/blog/donde-comer-barato-lisboa', label: 'Dónde comer barato en Lisboa' },
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { href: '/itinerarios', label: 'Itinerarios gratuitos por Lisboa' },
    ],
    fuentes: [
      { label: 'Time Out Market Lisboa - información oficial', href: 'https://www.timeout.com/time-out-market-lisboa' },
      { label: 'Câmara Municipal de Lisboa - Mercado da Ribeira', href: 'https://www.lisboa.pt/pontos-de-interesse/detalhe/mercado-da-ribeira' },
      { label: 'Comércio de Lisboa - ferias y mercados', href: 'https://comercio.lisboa.pt/feiras-e-mercados/' },
    ],
    cta: {
      href: '/blog/mejores-mercados-lisboa',
      label: 'Comparar los mercados de Lisboa',
      title: 'Time Out no es el único mercado',
      text: 'Si buscas producto fresco, ambiente de barrio o una visita menos centrada en comer, compara el Mercado da Ribeira con otros mercados antes de decidir.',
    },
    contenido: [
      { tipo: 'parrafo', texto: 'Time Out Market Lisboa funciona muy bien para un grupo con gustos distintos que quiere comer en el mismo sitio, sin reserva y en pleno Cais do Sodré. Funciona peor si buscas silencio, servicio de mesa o la comida más económica posible.' },
      { tipo: 'parrafo', texto: 'Ocupa parte del histórico Mercado da Ribeira y reúne puestos alrededor de grandes mesas compartidas. Es cómodo, céntrico y variado, pero también concurrido y más turístico que una tasca de barrio. Esa diferencia basta para saber si merece entrar.' },
      { tipo: 'lista', items: [
        'Está dentro del Mercado da Ribeira, frente al intercambiador de Cais do Sodré.',
        'Cada persona puede pedir en un puesto diferente y reunirse después en las mesas comunes.',
        'Los precios y los operadores cambian; conviene mirar el menú visible de cada puesto antes de hacer cola.',
      ] },

      { tipo: 'subtitulo', texto: 'Qué es y cómo funciona' },
      { tipo: 'parrafo', texto: 'La zona gastronómica abrió en 2014 dentro del Mercado da Ribeira, inaugurado en 1882. Ambos usos siguen bajo la misma cubierta: una parte conserva la actividad de mercado tradicional y la otra está pensada para sentarse a comer. La palabra “mercado” no implica aquí precio bajo ni una experiencia cotidiana de barrio.' },
      { tipo: 'parrafo', texto: 'Cada puesto gestiona su cola, su pago y su preparación. Pides en el mostrador y buscas sitio en las mesas comunes, que no se reservan según la información oficial. Si vais en grupo, elegid primero una zona de referencia y asumid que los platos pueden quedar listos a tiempos distintos.' },

      { tipo: 'subtitulo', texto: 'Menú y puestos: qué comida hay y cuánto puedes gastar' },
      { tipo: 'parrafo', texto: 'La oferta cambia con los operadores, pero suele mezclar cocina portuguesa, pescado y marisco, carnes, bocados informales, propuestas internacionales, dulces y bebidas. Si tienes una necesidad alimentaria concreta, confírmala directamente en el puesto antes de pedir.' },
      { tipo: 'parrafo', texto: 'No existe un precio único útil. Cada carta cambia y la cuenta depende de si añades bebida, acompañamiento o postre. Como criterio, el mercado suele competir por variedad, ubicación y facilidad para grupos, no por ser la opción más barata de Lisboa. Mira el importe completo antes de hacer cola.' },
      { tipo: 'tip', texto: 'Da una vuelta completa antes de ponerte en una cola. El primer puesto visible recibe mucha atención por pura posición, y a pocos metros puede haber una opción que encaje mejor con lo que quieres comer.' },
      { tipo: 'enlace', texto: 'Si el presupuesto manda, compara esta experiencia con tascas, mercados de barrio y platos del día antes de decidir.', href: '/blog/donde-comer-barato-lisboa', label: 'Dónde comer barato en Lisboa' },

      { tipo: 'subtitulo', texto: 'Cuándo ir y cómo llegar' },
      { tipo: 'parrafo', texto: 'Las horas normales de comida y cena concentran más demanda, y los fines de semana se nota especialmente. No hace falta perseguir una hora exacta porque cambia según la temporada y los eventos, pero llegar un poco antes o después del pico habitual facilita encontrar mesa y reduce las colas.' },
      { tipo: 'parrafo', texto: 'El mercado está en la Avenida 24 de Julho, frente al intercambiador de Cais do Sodré, conectado por metro, tren, autobuses y barco. Desde Chiado también se puede bajar andando. Si vas a tomar el tren hacia Cascais o una conexión fluvial, encaja la comida antes o después del trayecto en lugar de cruzar la ciudad solo para entrar al mercado.' },
      { tipo: 'nota', texto: 'Los horarios, operadores y menús pueden cambiar. Consulta la web oficial y la información expuesta en el mercado antes de organizar el día alrededor de un puesto concreto.' },
      { tipo: 'enlace', texto: 'La guía de movilidad explica cómo combinar Cais do Sodré con metro, tren, barco y caminatas sin comprar trayectos innecesarios.', href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },

      { tipo: 'subtitulo', texto: 'Lo bueno y lo malo' },
      { tipo: 'lista', items: [
        'La variedad resuelve bien una comida en grupo cuando cada persona quiere algo distinto.',
        'La ubicación junto a Cais do Sodré y el espacio cubierto son muy prácticos.',
        'Las mesas comunes implican ruido, colas y dificultad para sentarse en los momentos más concurridos.',
        'Los pedidos pueden llegar a tiempos distintos y el gasto suele superar al de una tasca o un menú de barrio.',
      ] },
      { tipo: 'parrafo', texto: 'Encaja especialmente bien con grupos, familias con gustos distintos, una comida práctica entre transportes o un día de lluvia. Encaja peor si buscas silencio, servicio de mesa, una comida larga o una experiencia menos diseñada para visitantes.' },

      { tipo: 'subtitulo', texto: '¿Merece la pena?' },
      { tipo: 'parrafo', texto: 'Sí, si valoras la variedad, vas en grupo o ya estás en Cais do Sodré. No, si buscas la comida más barata, un ambiente local sin turismo o una cena tranquila con servicio de mesa. La respuesta depende menos de la fama del mercado que del tipo de comida que quieres ese día.' },
      { tipo: 'parrafo', texto: 'Mi criterio sería sencillo: entra, mira el ambiente y los menús, y decide sin compromiso. El acceso al edificio permite comprobar si hay sitio y si las opciones te convencen. Si no, el barrio ofrece alternativas y no has perdido más que unos minutos.' },

      { tipo: 'subtitulo', texto: 'Alternativas antes de decidir' },
      { tipo: 'parrafo', texto: 'Dentro del mismo edificio está la zona tradicional del Mercado da Ribeira. En Cais do Sodré, Bica y Santos también hay restaurantes y tascas donde una comida puede ser más tranquila o económica. Mirar dos calles más allá suele bastar para cambiar de ambiente.' },
      { tipo: 'parrafo', texto: 'Si te interesan los mercados más que el food hall, compara espacios de abastos y ferias como Arroios o Feira da Ladra: cumplen funciones distintas y no conviene tratarlos como equivalentes.' },
      { tipo: 'enlace', texto: 'La guía de mercados separa espacios gastronómicos, mercados de abastos y ferias para que elijas según lo que realmente quieres encontrar.', href: '/blog/mejores-mercados-lisboa', label: 'Los mejores mercados de Lisboa' },
    ],
  },
  'estacion-oriente-lisboa': {
    titulo: 'Estación de Oriente de Lisboa: arquitectura, transportes y qué ver alrededor',
    descripcion: 'Guía para entender la estación de Oriente: arquitectura de Santiago Calatrava, conexiones de tren, metro y bus, y visitas cercanas en el Parque das Nações.',
    seoTitle: 'Estación de Oriente Lisboa: tren, metro y arquitectura',
    metaDescription: 'Guía de la Estación de Oriente (Gare do Oriente) en Lisboa: tren, metro, autobuses, arquitectura de Calatrava y qué ver cerca en Parque das Nações.',
    imagen: '/images/lisboa-originales/estacion-oriente-lisboa/estacion-oriente-lisboa-tren-cubierta-calatrava.jpg',
    imageAlt: 'Tren detenido bajo la cubierta de vidrio y acero de la estación de Oriente en Lisboa',
    categoria: 'Transporte',
    fecha: '28 Ago 2026',
    fechaActualizacion: 'Actualizado en agosto de 2026',
    dateModified: '2026-08-28',
    minutos: 10,
    links: [
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { href: '/blog/estacion-olaias-lisboa', label: 'Arte y arquitectura en la estación de Olaias' },
      { href: '/actividades/oceanario-lisboa', label: 'Oceanário de Lisboa' },
      { href: '/itinerarios', label: 'Itinerarios gratuitos por Lisboa' },
    ],
    fuentes: [
      { label: 'Infraestruturas de Portugal - Estação do Oriente', href: 'https://www.infraestruturasdeportugal.pt/sites/default/files/pdfs/flipbook/RotasdosAzulejosLinhadoNorte/71/' },
      { label: 'Metro de Lisboa - arte en Oriente', href: 'https://www.metrolisboa.pt/viver/arte-nas-estacoes-2__trashed/oriente/' },
      { label: 'Metro de Lisboa - historia de la red', href: 'https://www.metrolisboa.pt/institucional/conhecer/historia-do-metro/' },
      { label: 'Oceanário de Lisboa - cómo llegar', href: 'https://oceanario.pt/planear-a-visita/como-chegar/' },
      { label: 'CP - horarios y planificador', href: 'https://www.cp.pt/passageiros/pt/como-viajar/horarios' },
    ],
    cta: {
      href: '/actividades/oceanario-lisboa',
      label: 'Planear la visita al Oceanário',
      title: '¿Vas a quedarte en el Parque das Nações?',
      text: 'La estación es la puerta de entrada al barrio. El Oceanário es la visita que más tiempo necesita y conviene comprobar sus condiciones antes de organizar el resto del paseo.',
    },
    contenido: [
      { tipo: 'parrafo', texto: 'Oriente es el gran intercambiador del este de Lisboa y una de las obras contemporáneas más reconocibles de la ciudad. Aquí se cruzan trenes, metro y autobuses junto al Parque das Nações; si vas al Oceanário o sales de viaje, probablemente pasarás por ella.' },
      { tipo: 'parrafo', texto: 'También merece una pausa por su arquitectura. La cubierta de vidrio y acero pertenece a la terminal ferroviaria diseñada por Santiago Calatrava; la estación de metro es otra obra, con proyecto y programa artístico propios. Saber esa diferencia ayuda tanto a orientarse como a mirar el conjunto con más criterio.' },
      { tipo: 'lista', items: [
        'Oriente funciona como intercambiador de trenes, Metro de Lisboa y servicios de autobús.',
        'La terminal ferroviaria de Santiago Calatrava se inauguró el 19 de mayo de 1998, en el contexto de la Expo 98.',
        'Aunque no vayas a tomar un tren, merece una parada si vas al Oceanário o quieres recorrer el Parque das Nações.',
      ] },

      { tipo: 'subtitulo', texto: 'Qué es la estación de Oriente' },
      { tipo: 'parrafo', texto: 'Gare do Oriente es un intercambiador organizado en niveles. Los trenes circulan arriba, bajo la gran cubierta; el metro queda en el nivel inferior; y los recorridos peatonales conectan con la terminal de autobuses y con el entorno urbano. Esa superposición permite mover a mucha gente sin extender la estación en una sola planta enorme.' },
      { tipo: 'parrafo', texto: 'Para un viajero, lo importante es no pensar en Oriente como un único vestíbulo. Cada modo de transporte tiene sus accesos y paneles, y el cambio puede exigir bajar, cruzar y volver a subir. Si llevas equipaje o una conexión ajustada, sigue primero la señalización del operador y deja la arquitectura para después.' },

      { tipo: 'subtitulo', texto: 'La arquitectura de Santiago Calatrava' },
      { tipo: 'parrafo', texto: 'Infraestruturas de Portugal atribuye a Santiago Calatrava el proyecto de la estación ferroviaria de Oriente, inaugurada el 19 de mayo de 1998 para servir a la exposición internacional. Su elemento más visible es la cubierta modular de vidrio y acero que protege los andenes superiores.' },
      { tipo: 'parrafo', texto: 'Desde los andenes, los módulos se repiten como una arboleda geométrica y filtran la luz sobre las vías. Las líneas largas funcionan muy bien en fotografía, sobre todo con un tren como referencia de escala. Bajo esa cubierta aparecen hormigón, escaleras y pasarelas: una arquitectura pensada para el movimiento, no para contemplarse desde un único punto.' },
      { tipo: 'subseccion', texto: 'El metro es otra obra' },
      { tipo: 'parrafo', texto: 'La estación subterránea no debe atribuirse a Calatrava. El Metro de Lisboa identifica a Sanchez Jorge como autor de su proyecto arquitectónico, abierto también en 1998, y explica que el programa artístico se relaciona con los océanos. Arriba domina la estructura ferroviaria; abajo, los revestimientos y las intervenciones acompañan el camino hacia el metro.' },

      { tipo: 'subtitulo', texto: 'Cómo usar el intercambiador sin perder tiempo' },
      { tipo: 'parrafo', texto: 'Oriente conecta trenes de larga distancia, regionales y urbanos, la Línea Roja del Metro y servicios de autobús. Las vías, dársenas y horas cambian, así que comprueba el billete o el planificador del operador en lugar de memorizar una lista. Para Sintra, Cascais u otros destinos, otra estación de Lisboa puede resultar más directa.' },
      { tipo: 'parrafo', texto: 'La Línea Roja enlaza Oriente con Olaias, Alameda y el aeropuerto. Desde buena parte del centro necesitarás un transbordo. Si llegas en taxi o coche con aplicación, especifica si buscas trenes o autobuses: “Oriente” abarca un área mayor de lo que parece en el mapa.' },
      { tipo: 'parrafo', texto: 'Dentro, piensa en tres pasos: identifica el transporte, busca su nivel y confirma la vía o dársena. Las indicaciones “comboios”, “metro” y “autocarros” son más útiles que orientarse por la forma del edificio.' },
      { tipo: 'tip', texto: 'Si vas a tomar un tren, resuelve primero la vía y calcula cuánto tardas en llegar al andén. Después, si sobra tiempo, mira la cubierta con calma. Hacerlo al revés es la forma más sencilla de acabar corriendo por las escaleras.' },
      { tipo: 'enlace', texto: 'Para entender cuándo conviene Oriente y cuándo salen mejor Rossio, Cais do Sodré u otras estaciones, consulta la guía general de movilidad.', href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },

      { tipo: 'subtitulo', texto: 'Qué ver alrededor de la estación' },
      { tipo: 'parrafo', texto: 'Al salir estás en el Parque das Nações, una zona llana y contemporánea junto al Tajo. El centro comercial Vasco da Gama queda frente a la estación y sirve como referencia visual; el paseo del río, el Oceanário y otros equipamientos del barrio están a distancia caminable.' },
      { tipo: 'parrafo', texto: 'El Oceanário es la visita principal y necesita más tiempo que la estación. Si vas a combinar ambos, reserva la arquitectura para el trayecto de entrada o de salida y organiza el acceso al Oceanário según las condiciones vigentes. El barrio funciona bien con niños, con lluvia intermitente y para descansar de las cuestas del centro histórico.' },
      { tipo: 'enlace', texto: 'Antes de reservar la jornada, revisa la información práctica y las condiciones actuales de la visita.', href: '/actividades/oceanario-lisboa', label: 'Ver la ficha del Oceanário de Lisboa' },

      { tipo: 'subtitulo', texto: '¿Merece la pena aunque no tomes un tren?' },
      { tipo: 'parrafo', texto: 'Sí, cuando ya vas al Parque das Nações o te interesa la arquitectura contemporánea. La cubierta se puede apreciar como parte de un paseo y el barrio ofrece suficiente contexto para que la salida no dependa solo de una estación. También es una buena alternativa visual a la Lisboa de azulejos y colinas.' },
      { tipo: 'parrafo', texto: 'No iría desde Alfama únicamente para hacer una foto rápida si tienes pocas horas en la ciudad. Oriente está alejada del núcleo histórico y gana valor cuando la combinas con el Oceanário, el río o una visita a Olaias. En ese contexto, deja de ser un desvío y se convierte en la puerta de entrada al este de Lisboa.' },
      { tipo: 'enlace', texto: 'Si la arquitectura forma parte del viaje, Olaias ofrece color y arte público en la misma Línea Roja y se recorre en poco tiempo.', href: '/blog/estacion-olaias-lisboa', label: 'Visitar la estación de Olaias' },
    ],
  },
  'estacion-olaias-lisboa': {
    titulo: 'Estación de Olaias en Lisboa: arte, arquitectura y cómo visitarla',
    descripcion: 'Qué hace especial a la estación de Olaias, cómo llegar por la Línea Roja, cuánto tiempo dedicar y cuándo merece la pena visitarla.',
    seoTitle: 'Estación de Olaias: arte y arquitectura en Lisboa',
    metaDescription: 'Qué ver en la estación de Olaias, cómo llegar por la Línea Roja, cuánto tiempo dedicar y cuándo merece la pena visitarla y fotografiarla.',
    imagen: '/images/lisboa-originales/estacion-olaias-lisboa/estacion-olaias-lisboa-hero-techo-colores.jpg',
    imageAlt: 'Techo geométrico y paneles de colores sobre el andén de la estación de Olaias en Lisboa',
    categoria: 'Cultura',
    fecha: '28 Ago 2026',
    fechaActualizacion: 'Actualizado en agosto de 2026',
    dateModified: '2026-08-28',
    minutos: 9,
    links: [
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { href: '/blog/donde-fotografiar-lisboa', label: 'Dónde fotografiar Lisboa' },
      { href: '/blog/estacion-oriente-lisboa', label: 'Estación de Oriente' },
      { href: '/itinerarios', label: 'Itinerarios gratuitos por Lisboa' },
    ],
    fuentes: [
      { label: 'Metro de Lisboa - estación Olaias', href: 'https://www.metrolisboa.pt/viajar/olaias/' },
      { label: 'Metro de Lisboa - arte en Olaias', href: 'https://www.metrolisboa.pt/viver/arte-nas-estacoes-2/olaias/' },
      { label: 'Metro de Lisboa - historia de la red', href: 'https://www.metrolisboa.pt/institucional/conhecer/historia-do-metro/' },
    ],
    cta: {
      href: '/blog/estacion-oriente-lisboa',
      label: 'Seguir hasta la estación de Oriente',
      title: 'Dos estaciones, una misma línea',
      text: 'Si te interesa la arquitectura contemporánea, la Línea Roja permite unir Olaias con Oriente en el mismo recorrido sin cruzar la ciudad dos veces.',
    },
    contenido: [
      { tipo: 'parrafo', texto: 'Olaias no suele aparecer en los itinerarios clásicos de Lisboa, pero si te interesa la arquitectura, el metro o la fotografía, merece una parada. No hace falta organizar media jornada alrededor de ella: su gracia está precisamente en que puedes verla en poco tiempo y seguir viaje por la Línea Roja.' },
      { tipo: 'parrafo', texto: 'La estación cambia por completo la imagen habitual de la ciudad: columnas monumentales, planos de color, metal y un techo que se transforma al caminar. Es una visita breve, muy visual y fácil de combinar con Oriente.' },
      { tipo: 'lista', items: [
        'Olaias está en la Línea Roja del Metro de Lisboa, entre Alameda y Bela Vista.',
        'La visita puede resolverse en unos 20 o 30 minutos si vas expresamente a mirar la estación.',
        'Tiene más sentido para quienes disfrutan de arquitectura, arte público o fotografía que para una primera visita muy ajustada.',
      ] },

      { tipo: 'subtitulo', texto: 'Qué tiene de especial la estación de Olaias' },
      { tipo: 'parrafo', texto: 'Lo primero que sorprende es la escala. La topografía del lugar obligó a crear un espacio de gran altura sobre los andenes, y esa necesidad técnica terminó convirtiéndose en el rasgo más potente de la estación. Las columnas parecen sostener una sala mucho mayor de lo que uno espera encontrar en una parada de barrio.' },
      { tipo: 'parrafo', texto: 'El color no funciona como decoración añadida. Superficies rojas, amarillas, azules y verdes atraviesan techos, muros e iluminación, de modo que el conjunto cambia según el punto desde el que lo mires. Por eso Olaias se entiende mejor caminando por el andén que con una sola foto.' },

      { tipo: 'subtitulo', texto: 'Arquitectura y arte: quién hizo qué' },
      { tipo: 'parrafo', texto: 'El proyecto arquitectónico de la estación es de Tomás Taveira. El Metro de Lisboa atribuye las intervenciones plásticas a Pedro Cabrita Reis, Graça Pereira Coutinho, Pedro Calapez y Rui Sanches. Son nombres concretos y conviene mantenerlos separados de la arquitectura: Olaias es una obra colectiva, no una estación decorada por una sola persona.' },
      { tipo: 'parrafo', texto: 'Olaias abrió con el primer tramo de la Línea Roja en mayo de 1998, durante la transformación del este de Lisboa asociada a la Expo 98. La gran columnata ordena el nivel de los trenes y el techo combina geometría, luminarias y piezas suspendidas. Si solo miras el vestíbulo, te pierdes la parte más característica.' },

      { tipo: 'subtitulo', texto: 'Cómo visitarla y fotografiarla' },
      { tipo: 'parrafo', texto: 'La forma directa de llegar es la Línea Roja, entre Alameda y Bela Vista. Con 20 o 30 minutos basta para recorrer los andenes, mirar el techo y esperar un tren que dé escala a las fotografías. No recomendaría hacerlo con maletas camino del aeropuerto: la parada pierde gracia cuando tienes que vigilar equipaje.' },
      { tipo: 'parrafo', texto: 'Las columnas crean puntos de fuga claros y el techo funciona bien con encuadres amplios. Un móvil es suficiente si cuidas las verticales y esperas un momento con menos pasajeros. Mantente fuera de la franja de seguridad y deja libres puertas y escaleras: sigue siendo una estación en funcionamiento.' },
      { tipo: 'enlace', texto: 'Si todavía no tienes claro cómo combinar metro, tranvía, tren y caminatas, conviene revisar primero el sistema completo.', href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { tipo: 'enlace', texto: 'Olaias añade una cara contemporánea a una ruta fotográfica que normalmente se concentra en miradores, tranvías y fachadas.', href: '/blog/donde-fotografiar-lisboa', label: 'Dónde fotografiar Lisboa' },

      { tipo: 'subtitulo', texto: 'Qué combinar con la visita' },
      { tipo: 'parrafo', texto: 'La combinación más lógica es Oriente. Está en la misma Línea Roja y ofrece otra lectura de la Lisboa de 1998: una gran estación intermodal, el Parque das Nações y el frente del Tajo. Olaias es interior, color y escala; Oriente es estructura, cubierta y movimiento.' },
      { tipo: 'parrafo', texto: 'No hace falta llenar el día con estaciones. Si tu plan principal está en el centro histórico, Olaias funciona mejor como parada breve de camino al este que como excusa para encadenar transbordos.' },
      { tipo: 'enlace', texto: 'La estación de Oriente mezcla arquitectura, metro, trenes, buses y acceso al Parque das Nações.', href: '/blog/estacion-oriente-lisboa', label: 'Qué ver en la estación de Oriente' },

      { tipo: 'subtitulo', texto: '¿Merece la pena desviarse?' },
      { tipo: 'parrafo', texto: 'Sí, si ya conoces lo esencial de Lisboa o si la arquitectura y la fotografía forman parte del viaje. También merece la pena si vas hacia Oriente y puedes dedicarle media hora sin desmontar el día. La visita es corta, gratuita más allá del título de transporte que uses y muy distinta a los escenarios habituales.' },
      { tipo: 'parrafo', texto: 'No la pondría por delante de Alfama, Belém o un primer paseo por la Baixa. En un viaje de uno o dos días, el tiempo tiene más valor en la superficie. Olaias funciona como una capa adicional: no sustituye la Lisboa clásica, pero demuestra que la ciudad también construyó una identidad contemporánea bajo tierra.' },
    ],
  },
  /*
   * Reemplazo editorial de /itinerarios/lisboa-full-week.
   *
   * La auditoría de canibalización que precede a este artículo dejó el
   * problema a la vista: el itinerario viejo eran treinta y una paradas con
   * hora fija, y unas veinte de ellas eran las mismas —varias con el texto
   * literalmente copiado— que las de los itinerarios de 1, 2 y 3 días.
   * Alfama, Santa Luzia, el castillo, Belém entero, Sintra entera, LX Factory
   * y el Time Out Market ya estaban contados en las guías core. Publicarlo
   * como otra línea de tiempo era competir contra ellas.
   *
   * Lo que ninguna guía corta responde, y sí necesita quien tiene siete días,
   * es cómo se reparte la semana: qué va al principio, cuántas escapadas
   * caben, y qué hacer con los días que sobran cuando lo evidente ya está
   * visto. Ese es el ángulo. El «qué ver» se delega a la guía que ya lo
   * cubre en cada caso.
   *
   * Decisión deliberada: aquí no se dan precios ni horarios concretos. Cada
   * componente tiene su guía con ese dato mantenido; repetirlo aquí lo
   * duplicaría y lo dejaría caducar en paralelo. Las fuentes oficiales
   * quedan enlazadas para que el lector compruebe el dato vigente.
   */
  'lisboa-en-7-dias': {
    titulo: 'Lisboa en 7 días: cómo repartir la semana sin repetirte',
    descripcion: 'Cómo organizar una semana en Lisboa: qué hacer los primeros días, cuántas escapadas caben, y qué llenar los días que ninguna guía corta cubre.',
    seoTitle: 'Lisboa en 7 días: cómo organizar la semana',
    metaDescription: 'Cómo repartir siete días en Lisboa: el orden que funciona, cuántas escapadas caben y qué hacer con los días que las guías cortas no cubren.',
    imagen: '/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
    imageAlt: 'Los tejados de Alfama descendiendo hacia el río Tajo en una panorámica de Lisboa',
    categoria: 'Guías',
    fecha: '24 Ago 2026',
    fechaActualizacion: 'Actualizado en agosto de 2026',
    dateModified: '2026-08-24',
    minutos: 12,
    links: [
      { href: '/itinerarios', label: 'Itinerarios de 1, 2 y 3 días' },
      { href: '/blog/sintra-desde-lisboa', label: 'Sintra desde Lisboa' },
      { href: '/blog/excursiones-desde-lisboa', label: 'Excursiones de un día desde Lisboa' },
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { href: '/blog/donde-alojarse-en-lisboa', label: 'Dónde alojarse en Lisboa' },
    ],
    fuentes: [
      { label: 'CP - horarios de tren', href: 'https://www.cp.pt/passageiros/pt/como-viajar/horarios' },
      { label: 'Parques de Sintra', href: 'https://www.parquesdesintra.pt/' },
      { label: 'Carris - alteraciones de servicio', href: 'https://www.carris.pt/viaje/alteracoes-de-servico/' },
      { label: 'Metro de Lisboa - horarios y frecuencia', href: 'https://www.metrolisboa.pt/en/travel/timetables-and-frequency/' },
    ],
    cta: {
      href: '/itinerarios',
      label: 'Ver los itinerarios de 1, 2 y 3 días',
      title: '¿Buscas el recorrido día a día?',
      text: 'Esta guía trata de cómo repartir la semana. Si lo que necesitas es la ruta concreta de cada jornada por el centro, Belém o Sintra, está en los itinerarios.',
    },
    contenido: [
      { tipo: 'parrafo', texto: 'Siete días en Lisboa no son tres días repetidos dos veces y pico. Es una cantidad de tiempo distinta, y el error más común es tratarla como si fuera la misma lista de monumentos con más huecos: se acaba lo imprescindible el jueves y quedan tres días mirando el mapa sin saber qué queda.' },
      { tipo: 'parrafo', texto: 'Por eso esta guía no es otra línea de tiempo con horas fijas. Lo que ves cada día ya está resuelto en las guías de 1, 2 y 3 días y en los artículos de cada barrio, y no tiene sentido volver a contarlo aquí. Lo que no está resuelto en ninguna parte, y es justo lo que falla en una semana, es el reparto: en qué orden, con qué ritmo, y qué hacer con los días que sobran.' },

      { tipo: 'subtitulo', texto: 'Qué cambia de verdad cuando tienes siete días' },
      { tipo: 'parrafo', texto: 'Lo primero que cambia no es cuánto ves sino a qué velocidad. Con dos o tres días vas encadenando: sales temprano, comes rápido, aprovechas hasta el atardecer. Con siete eso no se sostiene físicamente, y tampoco hace falta. Lisboa es una ciudad de cuestas y adoquín, y una semana a ese ritmo termina con las piernas destrozadas el cuarto día.' },
      { tipo: 'parrafo', texto: 'Lo segundo es que dejas de depender del tiempo que haga. En un fin de semana, dos días de lluvia te arruinan el viaje. En una semana la lluvia es un inconveniente: mueves el mirador al jueves y adelantas el museo. Esa flexibilidad es la ventaja real de tener siete días, y sólo la aprovechas si no cierras el plan entero de antemano.' },
      { tipo: 'parrafo', texto: 'Y lo tercero: con una semana entras en una segunda capa de la ciudad que en tres días no existe. Barrios sin monumento, mercados de barrio, la otra orilla del Tajo, un día entero de playa. Nada de eso es imprescindible, y por eso mismo no aparece en las guías cortas. En una semana es justamente lo que la salva de hacerse larga.' },

      { tipo: 'subtitulo', texto: 'La estructura que funciona: tres bloques' },
      { tipo: 'parrafo', texto: 'La forma más limpia de repartir siete días no es día por día sino por bloques, porque así puedes reordenar por el tiempo que haga sin desmontar nada.' },

      { tipo: 'subseccion', texto: 'Bloque 1: la ciudad, tres días' },
      { tipo: 'parrafo', texto: 'El centro histórico, Belém y los miradores. Son los tres días que ya están resueltos: el itinerario de 3 días cubre exactamente esto y con un orden que funciona. No hace falta reinventarlo, y conviene ponerlo al principio por una razón práctica: es la parte que no quieres dejar dependiendo del pronóstico de la última tarde.' },
      { tipo: 'parrafo', texto: 'Una advertencia de reparto que se ve poco: no metas Alfama, el castillo y el tranvía 28 el mismo día que Belém. Son las dos zonas que más cansan y están en extremos opuestos. Repartidas dan dos días cómodos; juntas dan un día imposible y otro vacío.' },

      { tipo: 'subseccion', texto: 'Bloque 2: las escapadas, uno o dos días' },
      { tipo: 'parrafo', texto: 'Sintra y la costa. Aquí está la decisión más importante de toda la semana, y la trato aparte más abajo porque tiene trampa: la tentación es meter tres escapadas y acabas conociendo los trenes de cercanías mejor que Lisboa.' },

      { tipo: 'subseccion', texto: 'Bloque 3: los días que ninguna guía corta cubre' },
      { tipo: 'parrafo', texto: 'Los dos o tres días restantes son los que nadie te planifica, y son los que deciden si la semana se te hace larga o se te queda corta. Barrios sin lista de monumentos, el Parque das Nações, la otra orilla, mercados, y —esto va en serio— un día sin plan. Lo desarrollo más abajo.' },

      { tipo: 'subtitulo', texto: 'Un reparto que funciona' },
      { tipo: 'parrafo', texto: 'Con esos tres bloques, el reparto que mejor aguanta imprevistos es este. No es un horario: es un orden.' },
      { tipo: 'lista', items: [
        'Días 1 y 2: el centro histórico. Alfama, el castillo, la Baixa, el Chiado y los miradores, repartidos en dos jornadas y no en una.',
        'Día 3: Belém y el río. Es zona llana, así que va bien después de dos días de cuestas.',
        'Día 4: Sintra, el día completo. Sale temprano y vuelve tarde; no le encajes nada más.',
        'Día 5: día de barrio y de calma. El contrapeso obligatorio después de Sintra.',
        'Día 6: la costa o el Parque das Nações, según el tiempo que haga.',
        'Día 7: lo que quedó pendiente, mercado y despedida. Deliberadamente sin cerrar.',
      ] },
      { tipo: 'parrafo', texto: 'La regla que sostiene todo esto es simple: nunca dos días exigentes seguidos. Sintra el día 4 y la costa el día 5 se puede hacer, pero llegas al día 6 sin ganas de ver nada, y eso es peor que haberte saltado una de las dos.' },
      { tipo: 'enlace', texto: 'El detalle de qué ver cada día en el centro y en Belém está en los itinerarios, con el orden y los tiempos ya resueltos.', href: '/itinerarios', label: 'Itinerarios de 1, 2 y 3 días' },

      { tipo: 'subtitulo', texto: 'Las escapadas: cuántas caben y cuál elegir' },
      { tipo: 'parrafo', texto: 'En una semana caben dos escapadas cómodas. Tres es posible y es el error clásico: cada escapada se lleva el día entero contando los trayectos, y con tres te quedan cuatro días de Lisboa, que es menos de lo que tendrías en un viaje corto.' },

      { tipo: 'subseccion', texto: 'Sintra: la única que es obligatoria' },
      { tipo: 'parrafo', texto: 'Si sólo haces una, es esta. Se llega en tren desde la estación de Rossio y es un día completo, no una mañana: los palacios están repartidos por la sierra, se sube a ellos en autobús o andando, y entre uno y otro se va el tiempo. La recomendación que más cambia el día es ir a dos palacios sin prisa en vez de a tres corriendo.' },
      { tipo: 'parrafo', texto: 'Dos cosas conviene mirar antes de salir: el horario del tren del día concreto y si las entradas a los palacios se pueden reservar con antelación, porque en temporada alta la cola es la diferencia entre ver dos sitios o uno.' },
      { tipo: 'enlace', texto: 'El orden de visita, cómo moverse por la sierra y qué palacios elegir están en la guía de Sintra.', href: '/blog/sintra-desde-lisboa', label: 'Sintra desde Lisboa' },

      { tipo: 'subseccion', texto: 'La costa: Cascais y el Atlántico' },
      { tipo: 'parrafo', texto: 'La segunda escapada natural es la costa, en tren desde Cais do Sodré. Cascais es un pueblo costero que se recorre andando, con playas urbanas pequeñas y un centro peatonal, y funciona igual de bien como plan de medio día que como día entero si sigues hasta las playas abiertas al Atlántico.' },
      { tipo: 'parrafo', texto: 'Esas playas de fuera son otra cosa que las urbanas: viento casi constante, olas grandes y ambiente de surf. Son mejores para pasear y mirar el mar que para bañarse tranquilo, y el viento es real incluso en verano, así que conviene llevar algo de abrigo aunque haga sol.' },
      { tipo: 'enlace', texto: 'Qué ver en Cascais y qué playas hay cerca de Lisboa, con cómo llegar a cada una.', href: '/blog/que-ver-cascais-desde-lisboa', label: 'Qué ver en Cascais desde Lisboa' },

      { tipo: 'subseccion', texto: 'La escapada corta: cruzar el Tajo' },
      { tipo: 'parrafo', texto: 'Y hay una tercera que no cuenta como día completo, y por eso cabe: cruzar a la otra orilla en barco desde Cais do Sodré. Es transporte público normal, se tarda poco, y desde Cacilhas se ve Lisboa entera subiendo por las colinas y de frente. Es media tarde, no una jornada, y encaja bien en un día de barrio.' },

      { tipo: 'subtitulo', texto: 'Lo que sólo cabe en una semana' },
      { tipo: 'parrafo', texto: 'Esta es la parte que justifica los siete días. Nada de esto entra en un viaje de tres, y todo esto es lo que hace que una semana no se haga larga.' },

      { tipo: 'subseccion', texto: 'El Parque das Nações' },
      { tipo: 'parrafo', texto: 'Es la Lisboa moderna, al noreste, y se llega en metro. No se parece en nada al resto de la ciudad: es llano, ordenado, junto al río, con un paseo largo para caminar sin cuestas. Además está el Oceanário, que es de los pocos planes de interior que aguantan una tarde entera y funciona igual de bien con lluvia. Como día completo se queda corto; como medio día combinado con otra cosa es perfecto.' },
      { tipo: 'enlace', texto: 'La ficha del Oceanário, con lo que hay que saber antes de ir.', href: '/actividades/oceanario-lisboa', label: 'Oceanário de Lisboa' },

      { tipo: 'subseccion', texto: 'Los barrios sin monumento' },
      { tipo: 'parrafo', texto: 'Con tres días vas a los barrios que tienen algo dentro. Con siete puedes ir a los que no tienen nada que visitar y son justamente los que más se parecen a vivir allí: Mouraria, Graça, Príncipe Real, Estrela. Se recorren sin lista, sin entrada y sin horario, y son las mañanas que la gente recuerda después.' },
      { tipo: 'enlace', texto: 'Qué define a cada barrio y cuándo conviene ir a cada uno.', href: '/blog/barrios-imprescindibles', label: 'Los barrios de Lisboa' },

      { tipo: 'subseccion', texto: 'Los mercados, y no sólo el conocido' },
      { tipo: 'parrafo', texto: 'El mercado grande del centro es parada obligada en cualquier viaje, pero en una semana da tiempo a los otros: los mercados de barrio, donde se compra de verdad, y el rastro al aire libre, que sólo se monta ciertos días de la semana. Ese es el tipo de detalle que conviene comprobar el día antes, porque si vas el día que no toca no hay nada que ver.' },
      { tipo: 'enlace', texto: 'Los mercados de Lisboa, cuáles merecen la visita y qué se encuentra en cada uno.', href: '/blog/mejores-mercados-lisboa', label: 'Los mejores mercados de Lisboa' },

      { tipo: 'subseccion', texto: 'Un día sin plan' },
      { tipo: 'parrafo', texto: 'Suena a relleno y es lo contrario. Reservar un día entero sin nada cerrado es lo que te permite volver al sitio que te gustó, dormir hasta tarde después de una noche larga, o rescatar lo que la lluvia te tumbó el martes. En un viaje de tres días es un lujo imposible; en uno de siete es lo que evita que los últimos días sean puro trámite.' },
      { tipo: 'tip', texto: 'Deja ese día en mitad de la semana, no al final. Al final se convierte en el día de hacer la maleta y no descansa a nadie; en mitad, funciona de verdad como el respiro que hace que los tres últimos días valgan la pena.' },

      { tipo: 'subtitulo', texto: 'Los tres errores de planificar siete días' },
      { tipo: 'parrafo', texto: 'Se repiten mucho y los tres se arreglan antes de salir de casa.' },
      { tipo: 'lista', items: [
        'Agotar el centro histórico en los dos primeros días. Es la tentación natural y deja cinco días de descenso. Mejor dejar un mirador, un barrio o una tarde de Baixa para la segunda mitad.',
        'Encadenar escapadas. Dos días seguidos de tren y sierra queman la semana entera; entre una escapada y otra tiene que haber un día tranquilo en la ciudad.',
        'Cerrar los siete días de antemano. Es exactamente lo contrario de la ventaja que da tener una semana: si el plan está cerrado, la lluvia del jueves no se mueve a ninguna parte.',
      ] },

      { tipo: 'subtitulo', texto: 'Alojamiento, transporte y presupuesto para una semana' },
      { tipo: 'parrafo', texto: 'Una semana cambia dos decisiones prácticas respecto a un viaje corto. La primera es el alojamiento: en dos días la ubicación lo es todo y compensa pagar por estar en el centro; en siete pesa más dormir bien, porque las zonas más céntricas son también las más ruidosas de noche y siete noches de ruido se notan.' },
      { tipo: 'parrafo', texto: 'La segunda es el transporte. En un viaje corto se va casi todo andando y con billetes sueltos. En una semana vas a usar metro, tranvía, tren de cercanías y probablemente el barco, y ahí la tarjeta recargable y los abonos empiezan a tener sentido. Merece la pena hacer la cuenta antes en vez de ir comprando billete a billete.' },
      { tipo: 'enlace', texto: 'Qué transporte conviene en cada caso y cómo funcionan las tarjetas.', href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { tipo: 'nota', texto: 'En esta guía no encontrarás precios ni horarios concretos, y es a propósito: cambian, y cada guía enlazada mantiene el suyo actualizado. Antes de organizar un día alrededor de un sitio concreto —un palacio de Sintra, un museo, el tranvía— comprueba horarios, cierres y entradas en la web oficial del propio sitio o del operador. Algunos elementos de la ciudad pueden estar cerrados por obras durante temporadas largas.' },
    ],
  },
  /*
   * Reemplazo editorial de /itinerarios/lisboa-fotografia.
   *
   * El itinerario viejo eran diecisiete paradas con ajustes de cámara para
   * cada una —«ISO 100-400, f/8-11, 1/250s»— como si la luz de un martes de
   * noviembre fuese la de un sábado de julio. Eso no es información, es ruido
   * con aspecto técnico: los ajustes dependen de la luz que haya en ese
   * momento y de la cámara, y cualquier móvil los resuelve solo.
   *
   * Lo que sí se puede escribir y no caduca es la geometría: qué se ve desde
   * cada sitio, hacia dónde mira, y por tanto a qué hora le da la luz de
   * frente. Eso es lo que ordena este artículo.
   *
   * NO es otra lista de miradores. /blog/mejores-miradores-lisboa ya compara
   * diez por vistas y ambiente; aquí se habla de encuadre, dirección de luz y
   * logística, y se enlaza allí para elegir.
   *
   * Verificado contra fuente oficial el 2026-08-23: la iglesia de Santa Maria
   * de Belém y el claustro de los Jerónimos tienen accesos separados
   * (mosteirojeronimos.gov.pt / DGPC).
   */
  'donde-fotografiar-lisboa': {
    titulo: 'Dónde fotografiar Lisboa: lugares, miradores y mejores horas de luz',
    descripcion: 'Los mejores lugares para fotografiar Lisboa: miradores, tranvías, azulejos, Alfama, Belém y el Tajo, con consejos sobre la luz y el momento del día.',
    seoTitle: 'Dónde fotografiar Lisboa: mejores lugares y horas',
    metaDescription: 'Los mejores lugares para fotografiar Lisboa: miradores, tranvías, azulejos, Alfama, Belém y el Tajo, con consejos sobre luz y momento del día.',
    imagen: '/images/lisboa-originales/lisboa-baixa-rio-tejo-entardecer.webp',
    imageAlt: 'La Baixa de Lisboa y el río Tajo al caer la tarde, con la luz baja sobre los tejados',
    categoria: 'Guías',
    fecha: '23 Ago 2026',
    fechaActualizacion: 'Actualizado en agosto de 2026',
    dateModified: '2026-08-23',
    minutos: 11,
    links: [
      { href: '/blog/mejores-miradores-lisboa', label: 'Los miradores de Lisboa, comparados' },
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { href: '/blog/mejor-epoca-visitar-lisboa', label: 'Cuándo visitar Lisboa' },
      { href: '/blog/sintra-desde-lisboa', label: 'Sintra desde Lisboa' },
      { href: '/itinerarios', label: 'Itinerarios de 1, 2 y 3 días' },
    ],
    fuentes: [
      { label: 'Mosteiro dos Jerónimos - preguntas frecuentes', href: 'http://www.mosteirojeronimos.gov.pt/pt/index.php?pid=233&s=white' },
      { label: 'Património Cultural - Mosteiro dos Jerónimos', href: 'https://www.patrimoniocultural.gov.pt/pt/museus-e-monumentos/dgpc/m/mosteiro-dos-jeronimos/' },
      { label: 'Carris - alteraciones de servicio', href: 'https://www.carris.pt/viaje/alteracoes-de-servico/' },
      { label: 'MAAT - planear la visita', href: 'https://www.maat.pt/en/plan-a-visit' },
    ],
    cta: {
      href: '/blog/mejores-miradores-lisboa',
      label: 'Ver la guía de miradores',
      title: '¿Buscas comparar los miradores?',
      text: 'Esta guía habla de luz y encuadre. Si lo que necesitas es decidir a cuáles subir, la comparación está en la guía de miradores.',
    },
    contenido: [
      { tipo: 'parrafo', texto: 'Lisboa es una ciudad fácil de fotografiar y difícil de fotografiar bien, y la razón es la misma en los dos casos: la luz. Está construida sobre colinas orientadas al sur y al río, así que casi cualquier sitio tiene una vista, pero esa vista cambia por completo según la hora a la que llegues. El mismo mirador puede darte los tejados encendidos o un contraluz plano.' },
      { tipo: 'parrafo', texto: 'Por eso esta guía no está ordenada por sitios sino por lo que se ve y cuándo le da la luz. Aquí no vas a encontrar ajustes de cámara: dependen de la luz que haya ese día y del equipo que lleves, y cualquier móvil moderno los resuelve mejor que una tabla escrita hace meses. Lo que sí se puede saber de antemano es hacia dónde mira cada sitio.' },

      { tipo: 'subtitulo', texto: 'Qué se fotografía en cada zona' },

      { tipo: 'subseccion', texto: 'Alfama desde arriba: Santa Luzia y Portas do Sol' },
      { tipo: 'parrafo', texto: 'Es la imagen que la mayoría de la gente tiene en la cabeza cuando piensa en Lisboa: los tejados naranjas bajando en cascada hacia el Tajo, con la cúpula blanca del Panteão asomando entre ellos. Los dos miradores están pegados y dan encuadres distintos: Santa Luzia añade el emparrado y los azulejos en primer plano, y Portas do Sol es más abierto y limpio.' },
      { tipo: 'parrafo', texto: 'Miran al sureste, sobre el barrio y el río, así que funcionan de mañana: el sol sale por delante-izquierda y va iluminando los tejados de frente en lugar de recortarlos. A media mañana la luz ya cae desde arriba y aplana el relieve, que es justo lo que da carácter a esta vista.' },

      { tipo: 'subseccion', texto: 'Los tranvías y las calles empinadas' },
      { tipo: 'parrafo', texto: 'El tranvía amarillo subiendo una cuesta estrecha es el otro gran tema de Lisboa. La Rua da Bica es la más conocida —el ascensor amarillo en una calle muy inclinada, con casas a los lados—, pero no es la única: cualquier tramo del 28 por Graça o Alfama da la misma escena con menos gente delante.' },
      { tipo: 'parrafo', texto: 'La clave aquí no es la hora de la luz sino la de la gente. A primera hora hay poca, y en una calle estrecha eso cambia la foto más que cualquier otra cosa. Y conviene dar tiempo: pasan cada pocos minutos, así que puedes componer el encuadre y esperar a que entre en cuadro en vez de disparar a la carrera.' },

      { tipo: 'subseccion', texto: 'La Baixa: simetría y perspectiva' },
      { tipo: 'parrafo', texto: 'El trazado pombalino es rectilíneo y regular, y eso es un regalo para las fotos de perspectiva: calles rectas que se cierran en un punto de fuga, fachadas de la misma altura, arcadas repetidas. La Praça do Comércio funciona por simetría —arcadas en tres lados y el río abierto en el cuarto—, y la Rua Augusta da la línea recta que termina en el arco.' },
      { tipo: 'parrafo', texto: 'Es zona llana y peatonal en buena parte, así que se recorre con calma. Al ser espacio abierto orientado al sur, a mediodía la luz es dura; los extremos del día le sientan mucho mejor.' },

      { tipo: 'subseccion', texto: 'Belém y el río' },
      { tipo: 'parrafo', texto: 'Belém es plano y está junto al agua, y ahí está su interés fotográfico: se puede trabajar con reflejos y con horizonte, que es algo que en el resto de Lisboa no tienes. La Torre de Belém está en la orilla, así que la marea cambia la foto: con marea baja queda arena delante y charcos que reflejan; con marea alta, el agua llega a la base. Ninguna de las dos es mejor, son fotos distintas, pero conviene mirar la marea antes de ir si tienes una en mente.' },
      { tipo: 'parrafo', texto: 'En los Jerónimos hay un detalle práctico que ahorra confusión: la iglesia de Santa Maria de Belém y el claustro tienen accesos separados. La iglesia sigue siendo parroquia en activo, con sus propios horarios de culto y de visita, y el claustro se visita aparte. Consultad los horarios oficiales antes de ir, sobre todo si vais a primera hora.' },
      { tipo: 'parrafo', texto: 'El MAAT, un poco más allá, es arquitectura contemporánea junto al agua y se fotografía bien desde el paseo del río. Si queréis entrar o subir a alguna parte del edificio, comprobad las condiciones de acceso en su web: cambian según la programación.' },

      { tipo: 'subseccion', texto: 'El puente y la otra orilla' },
      { tipo: 'parrafo', texto: 'El Puente 25 de Abril se fotografía mejor desde abajo, en la zona de las docas de Alcântara, donde lo tienes cerca y con el agua delante. Mira hacia el suroeste, así que es un sitio de final de tarde: primero el sol bajando detrás de la estructura y después, cuando se enciende el alumbrado y el cielo todavía conserva azul, la media hora larga que da las mejores fotos nocturnas.' },
      { tipo: 'parrafo', texto: 'Y hay un encuadre que sólo se consigue cruzando: desde la orilla sur, en Cacilhas, Lisboa entera se ve subiendo por las colinas y de frente, no a contraluz, porque miras hacia el norte. Se llega en barco desde Cais do Sodré como transporte normal.' },

      { tipo: 'subseccion', texto: 'Azulejos, fachadas y detalles' },
      { tipo: 'parrafo', texto: 'La otra Lisboa fotografiable no está en las vistas sino a un metro de distancia: fachadas enteras de azulejo, aldabas, ventanas con ropa tendida, calzada portuguesa dibujando figuras. Alfama, Mouraria y Graça son los barrios donde más se acumula, y aquí la luz plana de un día nublado funciona mejor que el sol directo, que quema los blancos del azulejo.' },
      { tipo: 'parrafo', texto: 'Una nota que no es técnica: en esos barrios vive gente. Fotografiar una calle es una cosa y fotografiar a una persona en la puerta de su casa es otra; si sale alguien en el encuadre, lo cortés es preguntar.' },
      { tipo: 'enlace', texto: 'Si te interesa la cara contemporánea de la ciudad, Olaias convierte una estación de metro en una visita de arquitectura y color que se resuelve en poco tiempo.', href: '/blog/estacion-olaias-lisboa', label: 'Ver la estación de Olaias' },

      { tipo: 'subtitulo', texto: 'Dónde fotografiar Lisboa al amanecer' },
      { tipo: 'parrafo', texto: 'A primera hora la ciudad está vacía, la luz entra de lado y las cuestas se llenan de sombras largas. Los sitios que mejor aprovechan ese momento son los que miran al este y al sur: Santa Luzia y Portas do Sol sobre Alfama, la Praça do Comércio abierta al río, y Belém, donde el sol sale a lo largo del agua.' },
      { tipo: 'parrafo', texto: 'La hora exacta cambia varias horas entre invierno y verano, así que no tiene sentido dar un número: mirad la hora de amanecer del día concreto y contad con estar allí un rato antes. En verano madrugar de verdad; en invierno es un plan mucho más llevadero.' },

      { tipo: 'subtitulo', texto: 'Dónde fotografiar al atardecer y en la hora azul' },
      { tipo: 'parrafo', texto: 'Al final del día conviene estar en algo que mire al oeste o al suroeste. La Senhora do Monte, que es de los puntos más altos, y Santa Catarina, sobre el río, son los dos clásicos; las docas de Alcântara si lo que queréis es el puente.' },
      { tipo: 'parrafo', texto: 'Y el consejo que más cambia el resultado: no os vayáis cuando se pone el sol. Los veinte o treinta minutos siguientes, cuando el alumbrado ya está encendido y el cielo aún tiene azul en vez de negro, son los que dan las fotos nocturnas con color. Casi todo el mundo recoge justo antes de que empiece lo bueno.' },
      { tipo: 'enlace', texto: 'Si lo que necesitáis es decidir a qué miradores subir y cuáles saltaros, la comparación está en su propia guía.', href: '/blog/mejores-miradores-lisboa', label: 'Los miradores de Lisboa, comparados' },

      { tipo: 'subtitulo', texto: 'Lisboa de noche' },
      { tipo: 'parrafo', texto: 'De noche la ciudad cambia de tema: se acaban las panorámicas y empiezan las calles. Alfama con los faroles encendidos, la Baixa con los escaparates iluminados y el arco al fondo, el puente desde el agua. Es cuando la ciudad está más tranquila y cuando las calles estrechas se ven mejor, porque la luz artificial rellena lo que de día queda en sombra dura.' },
      { tipo: 'parrafo', texto: 'Dos avisos prácticos, sin dramatismo: la calzada portuguesa mojada resbala bastante, y en una cuesta con la cámara en la mano eso importa. Y si vais con equipo, en Lisboa aplica lo de cualquier ciudad grande: no dejarlo desatendido y no llamar la atención en zonas vacías.' },

      { tipo: 'subtitulo', texto: 'Fotografiar tranvías sin estorbar' },
      { tipo: 'parrafo', texto: 'Es la parte que se ve mal y conviene decir. El 28 y el 12 son transporte público en calles muy estrechas: la gente que va dentro va a trabajar, y el conductor no puede esquivar a nadie porque va sobre raíles.' },
      { tipo: 'lista', items: [
        'No te pongas sobre la vía para encuadrar. El tranvía no puede apartarse y en una cuesta tarda en frenar.',
        'Dispara desde la acera o desde un portal, no desde el medio de la calzada.',
        'En las calles del 28 también pasan coches, y muchas no tienen acera a los dos lados.',
        'Si estás esperando a que pase, deja libre el paso de los vecinos: en Bica y Alfama la calle es también su portal.',
      ] },

      { tipo: 'subtitulo', texto: 'Qué llevar y qué no hace falta' },
      { tipo: 'parrafo', texto: 'Lo que de verdad cambia el día no es el equipo, es el calzado: son cuestas y adoquín pulido, y vas a andar mucho más de lo que calculas. Después, una batería de repuesto o un cargador portátil, porque un día de fotos en la calle se lleva la batería del móvil por delante.' },
      { tipo: 'parrafo', texto: 'Si lleváis cámara, un trípode ligero sirve para la hora azul, pero pensad dónde vais a usarlo: en un mirador lleno a la hora del atardecer estorba y no siempre hay sitio. Y no hace falta un catálogo de objetivos: con un angular moderado y algo de zoom se cubre casi todo lo que hay en esta guía.' },
      { tipo: 'nota', texto: 'Los horarios y las condiciones de acceso de monumentos y museos cambian, y algunos elementos —como el Elevador de Santa Justa— pueden estar cerrados por obras durante temporadas largas. Antes de organizar una salida alrededor de un sitio concreto, comprobad su estado en la web oficial del propio monumento o del operador.' },

      { tipo: 'subtitulo', texto: 'Cómo agrupar los sitios por zonas' },
      { tipo: 'parrafo', texto: 'El error que más tiempo cuesta es cruzar Lisboa de punta a punta persiguiendo una luz. La ciudad se deja agrupar bien en tres bloques, y cada uno tiene su momento:' },
      { tipo: 'lista', items: [
        'Colina de Alfama y Graça —Santa Luzia, Portas do Sol, Senhora do Monte, calles y azulejos—: mañana para las vistas, y vuelta de noche si os apetece el barrio iluminado.',
        'Baixa, Chiado y Bica —perspectivas, arcadas, tranvías—: cualquier hora menos el mediodía, y muy buena de noche.',
        'Belém y el río hacia el oeste —Torre, Jerónimos, MAAT, docas y puente—: primera hora para Belém, final de tarde para el puente. Es la zona más llana de las tres.',
      ] },
      { tipo: 'parrafo', texto: 'Con eso, un día da para dos bloques sin correr. Tres es posible, pero acabaréis viendo Lisboa por la pantalla.' },
      { tipo: 'enlace', texto: 'Para encadenar las zonas sin perder tiempo en trayectos, conviene tener claro qué transporte toca en cada caso.', href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
    ],
  },
  /*
   * Reemplazo editorial de /itinerarios/lisboa-familiar.
   *
   * El itinerario viejo eran trece paradas repartidas en cuatro días con horas
   * fijas, y cada una traía su precio: 25€ el Oceanário, 24€ el zoo, 6€ el
   * teleférico, 16€ KidZania, packs de familia al euro. Ninguno con fuente ni
   * fecha. Una familia no sigue un horario así, y un precio de hace meses hace
   * más daño que no dar ninguno.
   *
   * Lo que sí necesita quien viaja con niños es otra cosa: qué es cómodo, qué
   * cansa, cómo se mueve un carrito por una ciudad de cuestas, y qué hacer
   * cuando llueve. Eso es lo que responde este artículo.
   *
   * Datos operativos verificados contra fuente oficial el 2026-08-23:
   * oceanario.pt (horario, entrada por franja, gratuidad hasta 2 años),
   * metrolisboa.pt (47 de 56 estaciones con accesibilidad plena),
   * pavconhecimento.pt (horarios y días de cierre reales).
   */
  'lisboa-con-ninos': {
    titulo: 'Lisboa con niños: qué hacer y cómo organizar el viaje en familia',
    descripcion: 'Qué hacer en Lisboa con niños: Oceanário, Parque das Nações, parques, transporte, carrito, planes de lluvia y consejos para organizar los días sin agotar a nadie.',
    seoTitle: 'Lisboa con niños: qué hacer en familia',
    metaDescription: 'Qué hacer en Lisboa con niños: Oceanário, barrios, parques, transporte, planes para días de lluvia y consejos para moverse en familia.',
    imagen: '/images/actividades/jardim-da-estrela-coreto.webp',
    imageAlt: 'El coreto del Jardim da Estrela rodeado de árboles, en Lisboa',
    categoria: 'Guías',
    fecha: '23 Ago 2026',
    fechaActualizacion: 'Actualizado en agosto de 2026',
    dateModified: '2026-08-23',
    minutos: 11,
    links: [
      { href: '/actividades/oceanario-lisboa', label: 'La ficha del Oceanário de Lisboa' },
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { href: '/blog/que-hacer-gratis-en-lisboa', label: 'Qué hacer en Lisboa sin gastar' },
      { href: '/blog/playas-cerca-lisboa', label: 'Playas cerca de Lisboa' },
      { href: '/itinerarios', label: 'Itinerarios de 1, 2 y 3 días' },
    ],
    fuentes: [
      { label: 'Oceanário de Lisboa - planear la visita', href: 'https://oceanario.pt/en/plan-your-visit/' },
      { label: 'Metropolitano de Lisboa - cómo utilizar el metro', href: 'https://www.metrolisboa.pt/viajar/como-utilizar-o-metro/' },
      { label: 'Pavilhão do Conhecimento - información general', href: 'https://www.pavconhecimento.pt/visite-nos/informacoes-gerais/' },
      { label: 'Carris - tarifas y títulos de transporte', href: 'https://www.carris.pt/viaje/tarifarios/' },
    ],
    cta: {
      href: '/itinerarios/lisboa-1-dia-lo-esencial',
      label: 'Ver el itinerario de 1 día',
      title: '¿Vais poco tiempo?',
      text: 'La guía de un día trae el recorrido cerrado por horas. Con niños suele funcionar mejor tomarla como referencia y recortarla a la mitad.',
    },
    contenido: [
      { tipo: 'parrafo', texto: 'Lisboa con niños tiene una ventaja y un inconveniente, y conviene saber los dos antes de reservar. La ventaja es que hay agua por todas partes —el río, el acuario, las playas a media hora en tren— y parques con zona de juegos en casi todos los barrios. El inconveniente son las cuestas: la ciudad está construida sobre colinas, y eso que en un viaje de adultos es pintoresco, con un carrito o con un niño de cuatro años se nota en las piernas de todos.' },
      { tipo: 'parrafo', texto: 'Esta guía no es un itinerario con horas. Con niños los horarios se rompen, y planificar cuatro días minuto a minuto es la forma más rápida de acabar discutiendo en una parada de metro. Lo que hay aquí son planes que funcionan, agrupados para que elijáis según la edad, el tiempo que haga y las ganas que queden.' },

      { tipo: 'subtitulo', texto: 'Qué hacer en Lisboa con niños' },

      { tipo: 'subseccion', texto: 'Oceanário de Lisboa' },
      { tipo: 'parrafo', texto: 'Es el plan que casi nunca falla, y el único de esta lista que yo pondría en el primer puesto sin dudar. Está en el Parque das Nações, la zona que se construyó para la Expo 98: es llana, moderna y está junto al río, así que el entorno ya juega a favor antes de entrar.' },
      { tipo: 'parrafo', texto: 'Dos cosas prácticas que conviene saber para organizar el día. La entrada funciona por franja horaria, pero esa hora es sólo la de acceso: dentro no hay límite de permanencia, así que nadie os va a echar si los niños se quedan clavados delante del tanque central. Y existe un billete flexible válido para una visita en cualquier momento dentro de un periodo de siete días, que quita presión si el tiempo o las siestas se tuercen. Los menores de 2 años entran gratis y de 3 a 12 hay tarifa infantil.' },
      { tipo: 'enlace', texto: 'Precios, horarios y disponibilidad cambian: mejor mirarlos antes de ir que fiarse de una cifra escrita hace meses.', href: '/actividades/oceanario-lisboa', label: 'Ver la ficha del Oceanário' },

      { tipo: 'subseccion', texto: 'Parque das Nações y el paseo junto al río' },
      { tipo: 'parrafo', texto: 'Ya que estáis allí, el propio barrio da para media jornada sin pagar nada. El paseo junto al Tajo es completamente llano, ancho y sin escalones —de los pocos sitios de Lisboa donde un carrito rueda sin pelearse con la calzada—, y hay zonas de juegos y espacio para correr. El teleférico recorre parte de ese frente fluvial; consultad horario y tarifas en el operador antes de contar con él.' },

      { tipo: 'subseccion', texto: 'Pavilhão do Conhecimento' },
      { tipo: 'parrafo', texto: 'Museo de ciencia interactivo, también en el Parque das Nações y a pocos minutos del Oceanário. Es de los pocos sitios donde tocar las cosas es justo lo que hay que hacer, así que funciona bien con niños de edad escolar.' },
      { tipo: 'parrafo', texto: 'Un apunte, porque circula lo contrario: no cierra los lunes. Según su información oficial abre de lunes a viernes de 10:00 a 18:00 y fines de semana y festivos de 10:00 a 19:00, con última entrada media hora antes, y sólo cierra el 24, 25 y 31 de diciembre y el 1 de enero. Aun así, comprobadlo el mismo día: los horarios se revisan.' },

      { tipo: 'subseccion', texto: 'Belém con niños' },
      { tipo: 'parrafo', texto: 'Belém es la zona monumental más cómoda de la ciudad para ir en familia, y la razón es simple: es llana y tiene jardines. Se puede pasar la tarde entre el paseo del río, los jardines y los pasteles sin entrar a nada de pago, que con niños pequeños suele ser mejor plan que hacer cola para un claustro.' },
      { tipo: 'parrafo', texto: 'Si entráis a algo, elegid una cosa y no tres. Los horarios, precios y días de cierre de cada monumento los fija cada uno y cambian por temporada: miradlos en su web oficial el mismo día.' },

      { tipo: 'subseccion', texto: 'Alfama y los miradores: cuándo sí y cuándo cansa' },
      { tipo: 'parrafo', texto: 'Aquí es donde la guía se separa de las listas habituales. Alfama es preciosa y es lo más característico de Lisboa, pero es un laberinto de escaleras y calles empinadas: con un carrito es incómodo de verdad, y con niños que ya caminan puede acabar en el clásico «me duelen las piernas» a mitad de cuesta.' },
      { tipo: 'parrafo', texto: 'Mi forma de resolverlo es subir en transporte y bajar andando, nunca al revés, y elegir un mirador en vez de encadenar cuatro. Los miradores son gratis, tienen quiosco y sitio para sentarse, y a media tarde son un descanso más que una visita. Si el día ya viene cargado, esta parte es la primera que yo recortaría.' },

      { tipo: 'subseccion', texto: 'Una escapada a la playa' },
      { tipo: 'parrafo', texto: 'Es la carta que mejor funciona cuando la ciudad empieza a pesar. Desde Cais do Sodré sale la línea de tren que recorre la costa hasta Cascais, con paradas de playa por el camino, y el trayecto en sí ya entretiene porque va junto al agua casi todo el rato. Consultad horarios y tarifas en CP antes de salir.' },

      { tipo: 'subtitulo', texto: 'Lisboa con carrito de bebé' },
      { tipo: 'parrafo', texto: 'La respuesta honesta es: se puede, pero hay que elegir las zonas. La calzada portuguesa —esos adoquines pequeños— es bonita y resbala cuando llueve, y en las cuestas de Alfama, Bairro Alto o Graça un carrito es más un lastre que una ayuda. En cambio Belém, el Parque das Nações, la Baixa y los parques son llanos y cómodos.' },
      { tipo: 'parrafo', texto: 'Para el metro, el dato oficial es útil y mejor que cualquier generalización: 47 de las 56 estaciones tienen accesibilidad plena, es decir, recorrido completo con ascensor entre la calle, el vestíbulo y el andén. Son unas cinco de cada seis, no todas, así que si dependéis del ascensor conviene comprobar antes la estación concreta. El propio Metro publica el estado de líneas y ascensores en su web, porque un ascensor puede estar fuera de servicio ese día.' },
      { tipo: 'tip', texto: 'Si vais con carrito, plantead el día alrededor de una zona llana y usad el transporte para los desniveles. Ahorra más energía que cualquier otro truco.' },

      { tipo: 'subtitulo', texto: 'Cómo moverse por Lisboa con niños' },
      { tipo: 'parrafo', texto: 'El metro es lo más previsible: va bajo tierra, no depende del tráfico y la mayoría de estaciones tienen ascensor. Los autobuses cubren lo que el metro no llega. El tranvía 28 es una atracción en sí misma, pero conviene decirlo claro: va lleno buena parte del día, no siempre hay sitio para sentarse y con carrito es incómodo. Si vais a subir, mejor a primera hora o al final del día, y mejor desde una parada inicial que a mitad de recorrido.' },
      { tipo: 'parrafo', texto: 'Los barcos del Tajo son transporte público y suelen gustar más que muchas atracciones de pago: se cruza a la otra orilla por el precio de un billete normal y se ve la ciudad desde el agua.' },
      { tipo: 'enlace', texto: 'Qué operador te toca en cada trayecto, cómo se paga y qué título compensa según los días que estéis.', href: '/blog/como-moverse-por-lisboa', label: 'La guía de transporte de Lisboa' },

      { tipo: 'subtitulo', texto: 'Planes según la edad' },
      { tipo: 'parrafo', texto: 'Cada niño es un mundo y esto es orientación, no una regla. Dicho eso, hay patrones que se repiten:' },
      { tipo: 'lista', items: [
        'Bebés y niños muy pequeños: prioridad a lo llano y a lo que no exige atención sostenida. Parques, el paseo del río en el Parque das Nações, Belém, los barcos del Tajo. Un plan grande al día y el resto sin agenda.',
        'Edad escolar: es la franja que más disfruta el Oceanário y el museo de ciencia, y donde el tranvía y los miradores empiezan a tener gracia. Aguantan dos planes por día si hay una pausa larga en medio.',
        'Mayores: ya entran los barrios a pie, la historia y las escapadas de día completo. Aquí sí funciona Alfama entera, y merece la pena dejarles elegir un plan del viaje.',
      ] },

      { tipo: 'subtitulo', texto: 'Qué hacer si llueve' },
      { tipo: 'parrafo', texto: 'Llueve más de lo que la gente espera entre noviembre y marzo, y con niños el problema no es mojarse: es que la calzada mojada resbala y las cuestas se vuelven inviables. El plan de lluvia se resuelve solo si bajáis a lo llano y tiráis de interiores.' },
      { tipo: 'parrafo', texto: 'El Oceanário y el Pavilhão do Conhecimento son planes de interior que dan para horas, y están a pocos minutos uno del otro. Los mercados cubiertos y el propio metro también ayudan a pasar la mañana sin salir del todo. Los miradores, en cambio, dejadlos para una ventana seca: sin vista no compensan la subida.' },

      { tipo: 'subtitulo', texto: 'Planes gratis o baratos en familia' },
      { tipo: 'lista', items: [
        'Los parques con zona de juegos: el Jardim da Estrela y el Parque Eduardo VII son los más socorridos, y son gratis.',
        'El paseo del río en el Parque das Nações: llano, ancho y con espacio para correr.',
        'Los jardines de Belém y el paseo junto al Tajo.',
        'Los miradores: todos los que menciona esta guía son de acceso libre; sólo se paga lo que se consuma en el quiosco.',
        'Cruzar el Tajo en barco cuesta un billete de transporte, no una excursión.',
      ] },
      { tipo: 'nota', texto: 'Los precios de entradas, transporte y atracciones cambian a lo largo del año, y las tarifas infantiles y gratuidades por edad cambian con ellos. En esta guía se evitan las cifras a propósito: es mejor consultar la web oficial de cada sitio el mismo día que fiarse de un número escrito hace meses.' },

      { tipo: 'subtitulo', texto: 'Cuántos días hacen falta' },
      { tipo: 'parrafo', texto: 'Con niños, la cuenta no es la misma que en un viaje de adultos. Yo calcularía un plan grande al día y poco más: tres días dan para el Oceanário y el Parque das Nações, un día de Belém y río, y un tercero de barrio, parque y mirador sin prisa. Con cuatro entra la playa. Con dos, elegid el Oceanário y Belém y dejad el resto.' },
      { tipo: 'parrafo', texto: 'Y una cosa que se aprende viajando con niños y no aparece en las guías: el rato muerto en un parque suele recordarse más que el monumento por el que hicisteis cola.' },
      { tipo: 'enlace', texto: 'Si preferís partir de un recorrido ya montado y recortarlo, los itinerarios por días sirven de esqueleto.', href: '/itinerarios', label: 'Ver los itinerarios de 1, 2 y 3 días' },
    ],
  },
  /*
   * Reemplazo editorial de /itinerarios/lisboa-romantica.
   *
   * Aquella página era un itinerario cerrado de dos días con horas fijas —10:00
   * parque, 12:30 brunch, 21:00 cena— para un viaje que casi nadie hace así. La
   * intención de búsqueda real es «vamos a Lisboa en pareja, ¿qué merece la
   * pena?», y eso pide planes elegibles, no un horario que se rompe en la
   * primera sobremesa.
   *
   * La cena no se desarrolla aquí a propósito: /blog/restaurantes-romanticos-lisboa
   * ya cubre diez restaurantes con ese ángulo, incluido Chapitô à Mesa, que era
   * la parada de las 21:00 del itinerario viejo. Duplicarlo sería canibalizar
   * un artículo que ya posiciona.
   */
  'lisboa-en-pareja': {
    titulo: 'Lisboa en pareja: qué hacer, planes y lugares para dos',
    descripcion: 'Ideas para disfrutar Lisboa en pareja: miradores, paseos, fado, el Tajo, Belém y Sintra, con planes para distintos presupuestos y momentos del día.',
    seoTitle: 'Lisboa en pareja: qué hacer y mejores planes',
    metaDescription: 'Ideas para disfrutar Lisboa en pareja: miradores, paseos, fado, el Tajo, Belém, Sintra y planes para distintos presupuestos y momentos del día.',
    imagen: '/images/lisboa-originales/rio-tejo-por-do-sol-lisboa.webp',
    imageAlt: 'El río Tajo al atardecer desde Lisboa, con la luz baja sobre el agua',
    categoria: 'Guías',
    fecha: '23 Ago 2026',
    fechaActualizacion: 'Actualizado en agosto de 2026',
    dateModified: '2026-08-23',
    minutos: 10,
    links: [
      { href: '/blog/mejores-miradores-lisboa', label: 'Los miradores de Lisboa, uno por uno' },
      { href: '/blog/restaurantes-romanticos-lisboa', label: 'Restaurantes para una cena especial' },
      { href: '/blog/donde-escuchar-fado-autentico', label: 'Dónde escuchar fado sin acabar en un espectáculo para turistas' },
      { href: '/blog/sintra-desde-lisboa', label: 'Cómo organizar el día en Sintra' },
      { href: '/itinerarios', label: 'Itinerarios de 1, 2 y 3 días' },
    ],
    fuentes: [
      { label: 'Carris - tarifas y títulos de transporte', href: 'https://www.carris.pt/viaje/tarifarios/' },
      { label: 'Transtejo · Soflusa - horarios de los barcos', href: 'https://ttsl.pt/' },
      { label: 'CP - trenes urbanos de Lisboa', href: 'https://www.cp.pt/passageiros/pt/como-viajar/horarios' },
      { label: 'Parques de Sintra - visitar', href: 'https://www.parquesdesintra.pt/' },
    ],
    cta: {
      href: '/itinerarios/lisboa-2-dias-completo',
      label: 'Ver el itinerario de 2 días',
      title: '¿Prefieres un plan ya montado?',
      text: 'Si venís un fin de semana y no queréis decidir sobre la marcha, la guía de dos días trae el recorrido cerrado por jornadas.',
    },
    contenido: [
      { tipo: 'parrafo', texto: 'Lisboa funciona bien en pareja por una razón poco romántica: es una ciudad que se recorre andando y que se mira desde arriba. Las cuestas obligan a parar, y cada parada suele tener una vista, un quiosco o una terraza. Eso convierte cualquier trayecto en un plan, sin que haga falta reservar nada.' },
      { tipo: 'parrafo', texto: 'Por eso esta guía no es un itinerario con horas. Es una lista de planes que funcionan de verdad, ordenados para que podáis elegir según el rato que tengáis, el dinero que queráis gastar y el tiempo que haga. Coged tres o cuatro y dejad hueco entre ellos: en Lisboa, el hueco suele ser la mejor parte.' },

      { tipo: 'subtitulo', texto: 'Qué hacer en Lisboa en pareja' },
      { tipo: 'parrafo', texto: 'Seis planes que aguantan bien la comparación. No hace falta hacerlos todos, y desde luego no en un día.' },

      { tipo: 'subseccion', texto: 'Ver el atardecer desde un mirador' },
      { tipo: 'parrafo', texto: 'Es el plan que mejor resume la ciudad y el más barato de todos. Lisboa está construida sobre colinas y casi todas tienen un mirador arriba, muchos con quiosco. La diferencia entre uno y otro no es la vista sino el ambiente: Santa Catarina es el más informal, con gente sentada en las escaleras; Graça y Senhora do Monte son más abiertos y más concurridos; Santa Luzia y Portas do Sol miran directamente a Alfama y al río.' },
      { tipo: 'parrafo', texto: 'El consejo que sí cambia la tarde: llegad con margen. La hora del atardecer varía mucho entre invierno y verano, y en los miradores con mesas el sitio se ocupa antes de que empiece lo bueno. Si llegáis y está lleno, casi siempre hay otro mirador a diez minutos andando.' },
      { tipo: 'enlace', texto: 'Si queréis elegir con criterio en vez de ir al primero que salga en el mapa, cada mirador tiene su carácter y su mejor hora.', href: '/blog/mejores-miradores-lisboa', label: 'Ver la guía de miradores' },

      { tipo: 'subseccion', texto: 'Caminar por Alfama sin una ruta fija' },
      { tipo: 'parrafo', texto: 'Alfama es de los pocos barrios donde perderse es literalmente el plan. Es un laberinto medieval de calles estrechas, escaleras y patios, y cualquier intento de seguir un recorrido cerrado acaba en una calle que no lleva a donde parecía. Bajad desde el castillo o desde Portas do Sol y dejad que la cuesta decida.' },
      { tipo: 'parrafo', texto: 'De noche cambia por completo: se vacía de grupos, se encienden los faroles y se oye fado desde las puertas abiertas. Es cuando mejor está. Llevad calzado con agarre —la calzada portuguesa está pulida y resbala— y bajad con calma.' },

      { tipo: 'subseccion', texto: 'Escuchar fado' },
      { tipo: 'parrafo', texto: 'El fado en pareja gana cuando la noche está montada alrededor de escuchar y no de cenar con música de fondo. En algunas casas de Alfama y Mouraria eso se nota: luz baja, silencio pedido durante las canciones y actuaciones repartidas en tandas. No es una regla que valga para todos los locales —el formato, los horarios y si hay cena o consumición cambian de uno a otro—, así que conviene mirar cómo funciona el sitio concreto antes de decidir.' },
      { tipo: 'parrafo', texto: 'En muchas casas conviene reservar y algunas establecen consumición mínima. Confirmad las condiciones directamente con el local antes de ir: cambian y no siempre están claras en las webs de terceros.' },
      { tipo: 'enlace', texto: 'La diferencia entre una casa de fado y un espectáculo para turistas se nota en la primera canción.', href: '/blog/donde-escuchar-fado-autentico', label: 'Dónde escuchar fado en Lisboa' },

      { tipo: 'subseccion', texto: 'Cruzar el Tajo en barco' },
      { tipo: 'parrafo', texto: 'Es el plan con mejor relación entre lo que cuesta y lo que da. Los barcos de Transtejo y Soflusa son transporte público de cercanías, no un tour: cruzan a Cacilhas, Trafaria o Montijo por el precio de un billete normal. Y desde el agua se ve algo que dentro de la ciudad no se ve: Lisboa entera subiendo por las colinas.' },
      { tipo: 'parrafo', texto: 'El de Cacilhas es de los más cortos y sale de Cais do Sodré; al otro lado hay un paseo junto al agua mirando a Lisboa. Consultad la duración y el horario de vuelta en la web del operador antes de cruzar, sobre todo si vais al final del día.' },
      { tipo: 'tip', texto: 'Sentaos en la cubierta que mira a Lisboa, no a la orilla contraria. En el trayecto de vuelta al atardecer es donde está la vista buena.' },

      { tipo: 'subseccion', texto: 'Pasar una tarde en Belém' },
      { tipo: 'parrafo', texto: 'Belém es plano, está junto al río y se recorre sin cuestas, que después de dos días de colinas se agradece más de lo que parece. Los jardines junto al agua, el paseo hasta la Torre y los bancos frente al Tajo dan para una tarde entera sin entrar en ningún sitio de pago.' },
      { tipo: 'parrafo', texto: 'Si queréis entrar a algo, el claustro de los Jerónimos es lo que justifica la visita —la iglesia se visita aparte y tiene sus propias condiciones—. Consultad precios y horarios en la web oficial del monumento el mismo día: cambian por temporada y hay días de acceso distinto.' },

      { tipo: 'subseccion', texto: 'Ir a Sintra por el día' },
      { tipo: 'parrafo', texto: 'Sintra es la escapada obvia y merece la pena, pero conviene decidirlo con los ojos abiertos: es un día completo, no una mañana. El tren desde Rossio tarda unos cuarenta minutos y los palacios están repartidos por la montaña, así que hay que sumar el autobús o la subida a pie.' },
      { tipo: 'parrafo', texto: 'En pareja, el error habitual es intentar tres palacios. Con dos vais sobrados y volvéis con ganas en lugar de agotados. Si entra el Palacio da Pena, conviene reservar con antelación: el acceso al interior funciona con fecha y hora, y esa hora es la de entrada al palacio, no al parque. Desde la entrada del parque hasta el palacio hay un tramo que se recorre andando, así que organizad el resto del día alrededor de esa franja.' },
      { tipo: 'enlace', texto: 'Cómo montar el día sin que se convierta en una carrera entre autobuses.', href: '/blog/sintra-desde-lisboa', label: 'Guía de Sintra desde Lisboa' },

      { tipo: 'subtitulo', texto: 'Planes según el momento del día' },
      { tipo: 'parrafo', texto: 'Lisboa cambia mucho de carácter según la hora. Esto es lo que suele funcionar mejor en cada tramo.' },
      { tipo: 'lista', items: [
        'Mañana: los miradores están casi vacíos y la luz entra de lado sobre los tejados. Es la mejor hora para Santa Luzia y para Alfama, antes de que lleguen los grupos.',
        'Mediodía: los parques. El Jardim da Estrela y el Jardim do Príncipe Real dan sombra, bancos y un quiosco, y son plano puro después de una mañana de cuestas.',
        'Tarde: el río. Belém, el paseo de Cais do Sodré o cruzar a la otra orilla. Todo llano y con agua delante.',
        'Atardecer: un mirador con quiosco, llegando con margen. O el barco de vuelta, que da la misma luz desde el agua.',
        'Noche: Alfama a pie y, si os apetece, una casa de fado. El barrio de noche es otro barrio.',
      ] },

      { tipo: 'subtitulo', texto: 'Planes baratos o gratis para dos' },
      { tipo: 'parrafo', texto: 'Buena parte de lo mejor de Lisboa no se paga. Estos planes cuestan poco o nada y no son el plan B de nadie.' },
      { tipo: 'lista', items: [
        'Los miradores públicos que menciona esta guía son de acceso libre. Si hay quiosco o terraza, sólo pagáis lo que consumáis.',
        'Alfama, Mouraria, Graça y Príncipe Real se recorren andando y no se entra a ningún sitio.',
        'Cruzar el Tajo cuesta un billete de transporte, no una excursión.',
        'Los jardines de Belém, el paseo del río y las escaleras del Carmo son gratuitos.',
        'Muchos museos municipales tienen días o franjas de acceso reducido. Conviene mirarlo en su web antes de ir, porque las condiciones cambian.',
      ] },
      { tipo: 'nota', texto: 'Los precios de transporte, entradas y monumentos cambian a lo largo del año. En esta guía se evitan las cifras concretas a propósito: es mejor consultar la web oficial de cada operador o monumento el mismo día que fiarse de un número escrito hace meses.' },

      { tipo: 'subtitulo', texto: 'Lisboa en pareja si llueve' },
      { tipo: 'parrafo', texto: 'Llueve más de lo que la gente espera, sobre todo entre noviembre y marzo, y el problema no es el agua sino el suelo: la calzada portuguesa mojada resbala mucho, y las cuestas de Alfama y Bairro Alto se vuelven incómodas.' },
      { tipo: 'parrafo', texto: 'El plan que mejor aguanta la lluvia es cambiar de altura: bajar a la Baixa, que es llana, y tirar de interiores. Cafés históricos, librerías, mercados cubiertos, museos. El tranvía y el barco siguen funcionando y son de las pocas formas de seguir viendo la ciudad sin mojarse. Dejad los miradores para una ventana seca: sin vista, no valen el paseo.' },

      { tipo: 'subtitulo', texto: 'Dónde cenar' },
      { tipo: 'parrafo', texto: 'La cena da para un artículo entero, y lo tiene. En lugar de repetir aquí media docena de nombres, la lista larga está en la guía de restaurantes: terrazas con vistas al río, sitios pequeños de cuatro mesas y opciones para una ocasión concreta, con lo que conviene saber de cada uno.' },
      { tipo: 'parrafo', texto: 'Lo único que añado aquí es lo práctico: en Lisboa se cena tarde, los sitios pequeños se llenan y la reserva marca la diferencia entre sentarse y dar vueltas. Y si la idea es cenar con vistas, mirad primero a qué hora se pone el sol, porque la mesa buena se pide por la vista y no por la comida.' },
      { tipo: 'enlace', texto: 'La lista completa, con lo que hace especial a cada sitio.', href: '/blog/restaurantes-romanticos-lisboa', label: 'Restaurantes para una cena especial en Lisboa' },

      { tipo: 'subtitulo', texto: 'Cuántos días hacen falta' },
      { tipo: 'parrafo', texto: 'Con dos días completos se ve Lisboa sin prisa: un día de casco histórico y miradores, otro de Belém y río. Con tres, entra Sintra sin sacrificar la ciudad. Con uno, elegid una colina y el atardecer, y dejad Belém para otro viaje.' },
      { tipo: 'enlace', texto: 'Si preferís un recorrido ya montado por jornadas en vez de decidir sobre la marcha.', href: '/itinerarios', label: 'Ver los itinerarios de 1, 2 y 3 días' },
    ],
  },
  'mejores-apps-lisboa': {
    titulo: 'Las apps que de verdad sirven para Lisboa',
    descripcion: 'Qué aplicaciones instalar antes de viajar a Lisboa para el transporte, los pagos y las reservas, y cuáles puedes ahorrarte.',
    seoTitle: 'Mejores apps para Lisboa | Guía práctica',
    metaDescription: 'Las aplicaciones útiles de verdad en Lisboa: transporte oficial, mapas sin datos, pagos y reservas. Con las que ya no funcionan en Portugal.',
    imagen: '/images/turista-tranvia-28.jpg',
    imageAlt: 'Viajera consultando el móvil en una calle de Lisboa mientras pasa un tranvía',
    categoria: 'Consejos',
    fecha: '14 Ago 2026',
    fechaActualizacion: 'Actualizado en agosto de 2026',
    dateModified: '2026-08-14',
    minutos: 9,
    links: [
      { href: '/blog/como-moverse-por-lisboa', label: 'La guía completa para moverte por Lisboa' },
      { href: '/blog/como-pagar-en-portugal', label: 'Cómo pagar en Portugal sin comisiones' },
      { href: '/blog/lisboa-card-vale-la-pena', label: 'Decidir si la Lisboa Card compensa' },
      { href: '/blog/mejores-apps-lisboa', label: 'Las apps que de verdad sirven aquí' },
      { href: '/itinerarios', label: 'Explorar los itinerarios gratuitos' },
    ],
    fuentes: [
      { label: 'Carris - alteraciones de servicio', href: 'https://www.carris.pt/viaje/alteracoes-de-servico/' },
      { label: 'Metropolitano de Lisboa - comprar', href: 'https://www.metrolisboa.pt/comprar/' },
      { label: 'Citymapper - Lisboa', href: 'https://citymapper.com/lisboa' },
      { label: 'CP - trenes urbanos de Lisboa', href: 'https://www.cp.pt/info/en/lisbon' },
    ],
    cta: {
      href: '/itinerarios/lisboa-1-dia-lo-esencial',
      label: 'Abrir el itinerario de 1 día',
      title: 'Ya tienes el móvil listo',
      text: 'Ahora te falta el plan. Empieza por la guía gratuita de Lisboa en un día.',
    },
    contenido: [
      { tipo: 'parrafo', texto: 'Casi todas las listas de aplicaciones para Lisboa son la misma lista genérica de viaje: mapas, un traductor, un banco digital. Sirven para cualquier ciudad y por eso no resuelven ninguna. Esta va al revés: parte de lo que se hace mal en Lisboa —pagar el transporte, entender qué operador te corresponde, quedarte sin datos en una cuesta de Alfama— y dice qué aplicación lo arregla.' },
      { tipo: 'parrafo', texto: 'Son pocas a propósito. Instalar quince aplicaciones antes de un viaje de cuatro días es una forma elegante de no usar ninguna. Con cuatro o cinco vas sobrado.' },

      { tipo: 'subtitulo', texto: 'Para el transporte: una que las une y dos oficiales' },
      { tipo: 'parrafo', texto: 'El problema de Lisboa no es que falte transporte, es que hay muchos operadores distintos y ninguno cubre la ciudad entero. Metro, Carris para buses y tranvías, CP y Fertagus para los trenes, Transtejo y Soflusa para los barcos del Tajo, Metro Sul do Tejo al otro lado. Saber cuál te toca en cada trayecto es la mitad del trabajo.' },
      { tipo: 'parrafo', texto: 'Citymapper es la que resuelve eso. Integra todos esos operadores y te da la ruta completa sin que tengas que saber de antemano cuál usar. Es la que más recomiendo instalar si solo vas a instalar una.' },
      { tipo: 'parrafo', texto: 'Aparte están las oficiales, que tienen sentido si vas a estar más de unos días. Carris tiene la suya para ver dónde está el bus o el tranvía en tiempo real, que es la diferencia entre esperar sabiendo cuánto falta y esperar a ciegas. Y la aplicación navegante sirve para cargar la tarjeta y consultar el saldo sin buscar una máquina.' },
      { tipo: 'tip', texto: 'Si solo vas a estar dos o tres días, con Citymapper y Google Maps es suficiente. Las oficiales compensan cuando ya te mueves como un residente y quieres el dato exacto.' },

      { tipo: 'subtitulo', texto: 'Google Maps, pero descargando el mapa antes de salir' },
      { tipo: 'parrafo', texto: 'Google Maps no necesita presentación, pero sí una advertencia concreta para Lisboa: descarga el mapa sin conexión antes de viajar. En Alfama, Mouraria y Graça las calles son estrechas y los edificios altos, y la señal falla más de lo que esperas justo cuando estás perdido entre callejones que no siguen ninguna lógica.' },
      { tipo: 'parrafo', texto: 'Con el mapa descargado el GPS sigue funcionando sin datos. Es de las pocas preparaciones de cinco minutos que de verdad cambian un día de viaje.' },

      { tipo: 'subtitulo', texto: 'Bolt y Uber, y la que ya no existe en Portugal' },
      { tipo: 'parrafo', texto: 'Para trayectos puntuales —llegar con maletas, volver tarde, salvar una subida— las dos que funcionan en Lisboa son Bolt y Uber. Suelen tener precios parecidos, así que merece la pena mirar las dos antes de pedir. La disponibilidad es buena incluso en horas punta.' },
      { tipo: 'aviso', texto: 'Free Now dejó de operar en Portugal el 3 de abril de 2023. Sigue apareciendo en muchas listas de apps para Lisboa, incluidas guías que se presentan como actualizadas. Si la instalas no te va a servir de nada aquí.' },
      { tipo: 'parrafo', texto: 'El taxi tradicional sigue existiendo y es perfectamente válido, sobre todo desde el aeropuerto, donde hay parada oficial. Lo que conviene evitar es aceptar un trayecto de alguien que se ofrece dentro de la terminal.' },

      { tipo: 'subtitulo', texto: 'Para comer: reservar y, si no te apetece salir, pedir' },
      { tipo: 'parrafo', texto: 'TheFork se usa mucho en Portugal y va bien para reservar mesa, sobre todo en restaurantes que se llenan y en horarios en los que aparecer sin reserva significa esperar de pie. Los descuentos que anuncia varían y no siempre están en los sitios que de verdad quieres, así que úsala para reservar más que para buscar chollo.' },
      { tipo: 'parrafo', texto: 'Glovo funciona en Lisboa si una noche prefieres cenar en el alojamiento. No es la experiencia por la que has venido, pero después de un día de cuestas es una opción razonable.' },

      { tipo: 'subtitulo', texto: 'Dinero: para no perder en cada pago' },
      { tipo: 'parrafo', texto: 'Portugal está en la zona euro, así que si vienes de otro país del euro esto no te afecta. Si vienes de fuera, una cuenta como Revolut o Wise te evita el cambio de divisa de tu banco, que es donde se va el dinero sin que lo veas.' },
      { tipo: 'nota', texto: 'Lo que sí te afecta venga de donde venga: cuando un datáfono te ofrezca cobrar en tu moneda en lugar de en euros, di siempre que no. Ese cambio lo aplica el terminal con su propia tasa y siempre sale peor.' },

      { tipo: 'subtitulo', texto: 'Google Translate, con una función concreta' },
      { tipo: 'parrafo', texto: 'En Lisboa se defiende mucha gente en inglés y bastante en español, así que no vas a necesitar traductor para pedir un café. Donde sí sirve es en la cámara: apuntar a una carta manuscrita en una tasca de barrio, o a un cartel de horarios, y leerlo al momento. Descarga el portugués sin conexión y funciona aunque no tengas datos.' },

      { tipo: 'subtitulo', texto: 'Las que puedes ahorrarte' },
      { tipo: 'lista', items: [
        'Aplicaciones de audioguías genéricas: en Lisboa el contenido suele ser flojo y repetido.',
        'Conversores de moneda: Portugal usa euros y el móvil ya lo hace.',
        'Apps de una sola atracción, salvo que vayas a usar esa entrada concreta.',
        'Cualquier lista que todavía te recomiende Free Now.',
      ] },

      { tipo: 'subtitulo', texto: 'En resumen' },
      { tipo: 'parrafo', texto: 'Si tuviera que quedarme con dos: Citymapper para no pelearte con los operadores, y Google Maps con el mapa descargado para no perderte sin datos. Con eso ya vas mejor preparado que la mayoría. El resto depende de cuántos días te quedes y de si vienes de fuera de la zona euro.' },
    ],
  },
  'como-pagar-en-portugal': {
    titulo: 'Cómo pagar en Portugal: efectivo, tarjetas, cajeros y cambio de moneda',
    descripcion:
      'Guía práctica y neutral para entender cómo se paga en Portugal: cuánto efectivo llevar, dónde se acepta tarjeta, cómo funcionan los cajeros y qué mirar antes de confirmar una operación.',
    seoTitle: 'Cómo pagar en Portugal: tarjetas, efectivo y cajeros',
    metaDescription:
      'Qué tarjetas puedes usar en Portugal, cuándo llevar efectivo y qué revisar en los cajeros. Evita sorpresas con las comisiones y el cambio de moneda al viajar.',
    imagen: '/images/lisboa-originales/esquina-baixa-pombalina-lisboa-01.webp',
    imageAlt: 'Esquina con cafés y comercios en la Baixa de Lisboa',
    categoria: 'Planificación',
    fecha: '6 Ago 2026',
    fechaActualizacion: 'Revisión puntual: 15 Sep 2026',
    dateModified: '2026-09-15',
    minutos: 8,
    fuentes: [
      { label: 'Banco de Portugal — Comparador de comisiones bancarias', href: 'https://www.bportugal.pt/comparadorcomissoes' },
      { label: 'Banco de Portugal — Portal do Cliente Bancário', href: 'https://clientebancario.bportugal.pt/' },
      { label: 'Multibanco (SIBS) — red de cajeros de Portugal', href: 'https://www.multibanco.pt/' },
      { label: 'Banco de Portugal — aceptación de tarjetas en comercios', href: 'https://clientebancario.bportugal.pt/pt-pt/aceitacao-de-cartoes' },
    ],
    links: [
      { href: '/planifica-tu-viaje', label: 'Planifica tu viaje a Lisboa' },
      { href: '/itinerarios', label: 'Itinerarios gratuitos de Lisboa' },
      { href: '/actividades', label: 'Actividades en Lisboa' },
    ],
    cta: {
      href: '/planifica-tu-viaje',
      label: 'Planificar mi viaje',
      title: '¿Organizamos el resto del viaje?',
      text: 'Presupuesto, días, zonas y ritmo: te ayudamos a montar un plan realista antes de reservar nada.',
    },
    contenido: [
      { tipo: 'parrafo', texto: 'Para viajar por Portugal, lleva una tarjeta y algo de efectivo en euros. Antes de consumir, comprueba que aceptan tu tarjeta: tener un terminal no significa admitir todas las marcas. Y antes de sacar dinero o aceptar una conversión, revisa los cargos. No existe una forma de pago sin comisiones garantizada para todas las tarjetas y bancos.' },
      { tipo: 'parrafo', texto: 'Esta guía es informativa y no recomienda ningún banco ni proveedor concreto. Las condiciones de cada entidad cambian con frecuencia y dependen de tu país, tu contrato y tu tipo de cuenta, así que lo único sensato es entender el mecanismo y comprobar tus propias condiciones antes de viajar. Nada de lo que leas aquí sustituye a lo que diga tu banco.' },
      { tipo: 'tip', texto: 'Revisa las condiciones de tus tarjetas unos días antes de viajar, no en el aeropuerto: comisión por sacar en cajero extranjero, comisión por pagar en comercio y límites diarios. Son tres datos que tu banco tiene publicados y que cambian bastante el gasto del viaje.' },

      { tipo: 'subtitulo', texto: '¿Cuánto efectivo conviene llevar?' },
      { tipo: 'parrafo', texto: 'Menos del que la gente imagina, pero no cero. Lisboa es una ciudad donde se paga con tarjeta con total normalidad, y en la práctica puedes pasar días enteros sin tocar un billete. Dicho eso, el efectivo sigue resolviendo situaciones concretas: tascas pequeñas de barrio, mercados, algún quiosco de mirador, propinas, y esos negocios que ponen un mínimo de consumo para aceptar tarjeta.' },
      { tipo: 'parrafo', texto: 'Una forma razonable de plantearlo es llevar una cantidad pequeña para los primeros días y reponer sobre la marcha, en lugar de traer un fajo desde casa. Así evitas cambiar de golpe una cantidad grande en el peor momento y solo sacas lo que realmente vas usando.' },
      { tipo: 'nota', texto: 'Si vienes desde fuera de la zona euro, cambiar todo el presupuesto del viaje antes de salir rara vez sale a cuenta. Suele ser mejor traer algo de efectivo para llegar y decidir el resto ya sobre el terreno.' },

      { tipo: 'subtitulo', texto: 'Dónde se paga con tarjeta y dónde no' },
      { tipo: 'parrafo', texto: 'Según el Banco de Portugal, los comercios no están obligados a aceptar tarjetas y pueden elegir las marcas y los tipos que admiten. Por eso, si tu tarjeta es Visa o Mastercard, comprueba esos logotipos o pregunta antes de pedir: que un establecimiento acepte Multibanco no confirma que acepte la tuya.' },
      { tipo: 'parrafo', texto: 'La información sobre las tarjetas admitidas debe estar visible. En una tasca, un puesto de mercado o una pastelería, preguntar al llegar evita descubrir la limitación al pagar. Llevar algo de efectivo sirve como alternativa, sin necesidad de llevar todo el presupuesto encima.' },
      { tipo: 'lista', items: [
        'Tarjeta: comprueba que el comercio admite su marca y tipo antes de consumir',
        'Efectivo: lleva algo en euros para los establecimientos que no admitan tu tarjeta',
        'Cajeros y cambio: revisa los cargos del operador y las condiciones de tu banco',
        'Propinas: casi siempre en efectivo, aunque no son obligatorias',
      ]},
      { tipo: 'enlace', texto: 'Pagar el transporte requiere otra comprobación: usar una tarjeta bancaria en el Metro no equivale a llevar un billete válido para todos los operadores.', href: '/blog/como-moverse-por-lisboa', label: 'Cómo pagar y elegir el transporte en Lisboa' },

      { tipo: 'subtitulo', texto: 'Débito o crédito: qué cambia en la práctica' },
      { tipo: 'parrafo', texto: 'Para pagar en una tienda o un restaurante, la diferencia suele ser mínima. Donde sí puede notarse es en dos situaciones. La primera, al sacar efectivo: muchas entidades tratan la retirada con tarjeta de crédito como un adelanto de efectivo, con condiciones distintas y a veces con intereses desde el primer día. La segunda, en las fianzas: algunos alojamientos y alquileres de coche prefieren o exigen crédito para bloquear un importe como garantía.' },
      { tipo: 'parrafo', texto: 'Lo práctico es viajar con las dos si puedes, usar débito para el día a día y reservar la de crédito para fianzas o imprevistos. Y, sobre todo, mirar antes de salir qué cobra cada una de tus tarjetas por pagar y por sacar dinero fuera de tu país.' },

      { tipo: 'subtitulo', texto: 'Cajeros en Portugal: cómo funcionan' },
      { tipo: 'parrafo', texto: 'La mayoría de los cajeros de Portugal pertenecen a Multibanco, la red interbancaria nacional. Los reconocerás por el logotipo azul y verde y están por todas partes: calles, centros comerciales, estaciones y aeropuerto. Son los cajeros “normales” del país, no una empresa que compita por tu operación.' },
      { tipo: 'parrafo', texto: 'Junto a ellos han aparecido en zonas turísticas cajeros de operadores independientes, con marcas propias y a menudo pantallas más llamativas. Funcionan, pero sus condiciones las fija el operador, no tu banco, y suelen ser menos favorables. Si tienes las dos opciones a la vista, la red bancaria habitual es la apuesta más previsible.' },
      { tipo: 'tip', texto: 'Antes de confirmar cualquier retirada, lee la pantalla entera. El cajero debe informarte de los cargos que aplica él mismo antes de que aceptes, y ahí es donde se ve la diferencia entre uno y otro.' },

      { tipo: 'subtitulo', texto: 'Las dos comisiones que se suelen confundir' },
      { tipo: 'parrafo', texto: 'Cuando sacas dinero en el extranjero puede haber dos cargos distintos, y mezclarlos es el origen de casi todas las sorpresas.' },
      { tipo: 'lista', items: [
        'El de tu propio banco: lo que tu entidad cobra por retirar en cajeros ajenos o fuera de tu país. Aparece en tu contrato y en tu app, no en la pantalla del cajero',
        'El del operador del cajero: un cargo que aplica quien gestiona esa máquina. Se muestra en pantalla antes de confirmar y puedes cancelar la operación en ese momento',
      ]},
      { tipo: 'parrafo', texto: 'Por eso una misma retirada puede salir muy distinta según dónde la hagas: no depende solo de tu banco. Y por eso también suele salir mejor hacer pocas retiradas de importe mayor que muchas pequeñas, cuando el cargo es fijo por operación. Si tu banco cobra un porcentaje en vez de un fijo, el cálculo cambia; revisa cuál es tu caso.' },

      { tipo: 'subtitulo', texto: 'La pregunta del terminal: ¿euros o tu moneda?' },
      { tipo: 'parrafo', texto: 'Si tu tarjeta está emitida en una moneda distinta del euro, tarde o temprano el datáfono o el cajero te preguntará si quieres pagar en euros o en la moneda de tu tarjeta. Esto se llama conversión dinámica de moneda, y conviene entenderlo porque la pregunta está formulada de manera que la opción cómoda no siempre es la que te interesa.' },
      { tipo: 'parrafo', texto: 'Si eliges tu moneda, la conversión la hace el comercio o el operador del cajero, con el tipo de cambio y el margen que ellos decidan. Si eliges euros, la conversión la hace tu banco o tu red de tarjeta, con sus propias condiciones. Ninguna de las dos es automáticamente mejor en todos los casos, pero el margen que aplica el terminal suele ser menos ventajoso, así que merece la pena mirar la cifra que te ofrecen antes de aceptar en lugar de pulsar por inercia.' },
      { tipo: 'nota', texto: 'Cuando el terminal te muestra “con conversión” y “sin conversión”, te está enseñando dos precios. Tómate un segundo para compararlos: es la decisión más rentable de todo el proceso y no cuesta nada.' },

      { tipo: 'subtitulo', texto: 'Pagos sin contacto y desde el móvil' },
      { tipo: 'parrafo', texto: 'El contactless está completamente extendido en Portugal, tanto con tarjeta física como con móvil o reloj. Por encima de cierto importe te pedirán el PIN o la autenticación del teléfono, igual que en el resto de Europa.' },
      { tipo: 'parrafo', texto: 'Hay además una particularidad local que conviene conocer si vas a quedarte una temporada: MB WAY, la aplicación de pagos asociada a la red bancaria portuguesa. Se usa muchísimo entre residentes para pagar entre particulares, dividir cuentas o generar tarjetas virtuales, pero está pensada para cuentas portuguesas, así que como turista probablemente no la necesites.' },

      { tipo: 'subtitulo', texto: 'Enviar y recibir dinero' },
      { tipo: 'parrafo', texto: 'Si viajas acompañado y tenéis que repartir gastos, lo más simple suele ser una transferencia entre cuentas del mismo país o una app de pagos que ya uséis en casa. Dentro de la zona euro, las transferencias en euros entre países de la UE deben tratarse igual que una transferencia nacional en cuanto a comisiones, lo que en la práctica abarata mucho estos movimientos.' },
      { tipo: 'parrafo', texto: 'Para envíos entre monedas distintas la cosa se complica, porque además de la comisión visible está el tipo de cambio aplicado, que es donde suele ir el margen real. Compara siempre el importe que llega al destinatario, no solo la comisión anunciada: son dos cosas distintas y solo la primera te dice lo que costó de verdad.' },

      { tipo: 'subtitulo', texto: 'Cuentas multidivisa: qué son y qué no son' },
      { tipo: 'parrafo', texto: 'Cada vez más gente viaja con cuentas o tarjetas que permiten mantener saldo en varias monedas y convertir entre ellas dentro de la propia aplicación. Como concepto, resuelven un problema real: te permiten decidir cuándo conviertes en lugar de que lo decida un terminal por ti en medio de una compra.' },
      { tipo: 'parrafo', texto: 'No son magia, sin embargo. Suelen tener límites, condiciones distintas en fines de semana, tramos gratuitos y después cargos, y reglas propias para retiradas en cajero. Si estás pensando en usar una, léete sus condiciones concretas y sus límites antes del viaje, no en el aeropuerto. Y no des por hecho que lo que le funcionó a otra persona el año pasado sigue vigente.' },

      { tipo: 'subtitulo', texto: 'Cambiar moneda: dónde tener cuidado' },
      { tipo: 'parrafo', texto: 'Si necesitas cambiar efectivo, las casas de cambio de zonas muy turísticas y las de los aeropuertos son, casi siempre, el lugar más caro para hacerlo. El truco habitual es anunciar “sin comisión” y meter el margen en el tipo de cambio, de modo que la operación parece gratuita cuando no lo es.' },
      { tipo: 'lista', items: [
        'Compara el tipo que te ofrecen con el tipo de referencia del día, no con el de otra casa de cambio',
        'Pregunta cuántos euros vas a recibir exactamente, en total, antes de entregar nada',
        'Desconfía del reclamo “0 % de comisión” sin ver el tipo aplicado',
        'Evita cambiar cantidades grandes en el aeropuerto salvo que no tengas alternativa',
      ]},

      { tipo: 'subtitulo', texto: 'Antes de salir de casa' },
      { tipo: 'parrafo', texto: 'La mayor parte de los problemas se evitan con diez minutos de preparación. No se trata de encontrar el producto perfecto, sino de saber qué tienes entre manos.' },
      { tipo: 'lista', items: [
        'Mira qué cobra cada una de tus tarjetas por pagar y por sacar efectivo fuera de tu país',
        'Comprueba si tu tarjeta funciona en el extranjero y avisa a tu banco si hace falta',
        'Lleva más de un medio de pago y no los guardes todos en el mismo sitio',
        'Apunta el teléfono de bloqueo de tu banco por si pierdes una tarjeta',
        'Decide de antemano que pagarás en euros cuando el terminal te pregunte, salvo que los números digan lo contrario',
      ]},
      { tipo: 'tip', texto: 'Si vas a quedarte a vivir, el Banco de Portugal publica un comparador oficial de comisiones bancarias. Es la forma más neutral de ver qué cobra cada entidad sin fiarte de la publicidad de ninguna.' },
      { tipo: 'parrafo', texto: 'Y una última idea, quizá la más útil: las condiciones de bancos y proveedores cambian, a veces varias veces al año. Cualquier cifra concreta que leas en internet —aquí incluido— puede haber quedado desfasada. Usa esta guía para saber qué preguntar y dónde mirar, y confirma los números en la fuente oficial de tu entidad antes de decidir.' },
    ],
  },
  'donde-alojarse-en-lisboa': {
    titulo: 'Dónde alojarse en Lisboa: mejores zonas según tu viaje',
    descripcion: 'Baixa, Chiado, Alfama, Graça, Saldanha y otras zonas explicadas según comodidad, ruido, cuestas y tipo de viaje.',
    seoTitle: 'Dónde alojarse en Lisboa | Mejores zonas',
    metaDescription: 'Guía honesta para elegir dónde dormir en Lisboa según tu viaje: primera visita, pareja, familia, vida nocturna, presupuesto y transporte.',
    imagen: '/images/barrio-calle-residencial.jpg',
    imageAlt: 'Calle residencial de Lisboa con viajeros caminando entre fachadas de azulejo',
    categoria: 'Planificación',
    fecha: '23 Jul 2026',
    fechaActualizacion: 'Actualizado en septiembre de 2026',
    dateModified: '2026-09-21',
    minutos: 13,
    links: [
      { href: '/itinerarios/lisboa-3-dias-premium', label: 'Ruta de 3 días para elegir zona con criterio' },
      { href: '/blog/como-moverse-por-lisboa', label: 'Transporte y cuestas antes de reservar' },
      { href: '/itinerarios/lisboa-2-dias-completo', label: 'Ver la guía gratuita de Lisboa en 2 días' },
      { href: '/itinerarios', label: 'Explorar todos los itinerarios gratuitos' },
      { href: '/planifica-tu-viaje', label: 'Planificar el viaje según tus días' },
    ],
    cta: {
      href: '/itinerarios',
      label: 'Explorar los itinerarios',
      title: 'El alojamiento mejora cuando sabes tu ruta',
      text: 'Mira las guías gratuitas por días antes de reservar zona: ahorrarás trayectos y cuestas innecesarias.',
    },
    fuentes: [
      { label: 'Visit Lisboa - información para viajeros', href: 'https://www.visitlisboa.com/en/traveller-information' },
      { label: 'Aeropuerto de Lisboa - transporte público', href: 'https://www.lisbonairport.pt/en/lis/access-parking/getting-to-and-from-the-airport/public-transportation?language=en' },
      { label: 'Metro Lisboa - red y horarios', href: 'https://www.metrolisboa.pt/en/travel/timetables-and-frequency/' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Elegir dónde alojarse en Lisboa no va solo de estar cerca del centro. También va de cuestas, ruido, transporte, maletas y ritmo de viaje. Una zona preciosa puede ser incómoda si llegas tarde, viajas con niños o tienes que subir escalones cada noche después de caminar todo el día.' },
      { tipo: 'subtitulo', texto: 'Cómo elegir zona sin complicarte' },
      { tipo: 'parrafo', texto: 'Para una primera visita, prioriza tres cosas: conexión con metro o tren, posibilidad de volver caminando por la noche y una ubicación que no te obligue a cruzar la ciudad para cada plan. Lisboa invita a improvisar, pero el alojamiento marca mucho más de lo que parece porque la ciudad tiene desnivel real.' },
      { tipo: 'lista', items: [
        'Si es tu primera vez, busca comodidad antes que postal perfecta.',
        'Si viajas en pareja, puedes permitirte una zona más tranquila o con más encanto.',
        'Si vas con familia, evita calles muy empinadas o barrios con mucho ruido nocturno.',
        'Si tu presupuesto es ajustado, mira zonas conectadas por metro aunque no estén en la foto clásica.',
      ] },
      { tipo: 'subtitulo', texto: 'Baixa: práctica para una primera visita' },
      { tipo: 'parrafo', texto: 'Baixa es la opción más fácil de entender. Estás cerca de Rossio, Praça do Comércio, Chiado y los accesos hacia Alfama. Para quien llega por primera vez y quiere moverse sin pensar demasiado, funciona bien. La parte menos atractiva es que algunas calles tienen mucho tránsito turístico y pueden sentirse menos residenciales.' },
      { tipo: 'enlace', texto: 'Si estás valorando esta zona, mira primero qué cubre realmente una ruta por la Baixa y cuánto caminarías desde allí.', href: '/blog/baixa-lisboa-que-ver', label: 'Qué ver en la Baixa' },
      { tipo: 'parrafo', texto: 'Es buena zona si viajas pocos días, si llegas tarde o si quieres una base cómoda para salir a caminar. Revisa, eso sí, que el alojamiento no esté justo encima de una calle muy transitada. La comodidad no compensa si no duermes bien.' },
      { tipo: 'subtitulo', texto: 'Chiado: céntrico, bonito y algo más elegante' },
      { tipo: 'parrafo', texto: 'Chiado tiene librerías, teatros, cafés, tiendas y una posición excelente entre Baixa, Bairro Alto y Cais do Sodré. Suele gustar a parejas y viajeros que quieren estar en el centro sin sentir tanto la zona de paso de Rua Augusta. También tiene cuestas, pero son manejables si eliges bien la calle.' },
      { tipo: 'parrafo', texto: 'La desventaja es que puede ser caro y que algunas calles cercanas a Bairro Alto se vuelven ruidosas por la noche. Antes de reservar, mira el mapa con calma: dos manzanas pueden cambiar completamente la experiencia.' },
      { tipo: 'subtitulo', texto: 'Alfama: mucho encanto, poca comodidad' },
      { tipo: 'parrafo', texto: 'Alfama es preciosa para pasear, escuchar fado y perderse, pero no siempre es la mejor base. Hay callejones estrechos, escaleras, accesos irregulares y alojamientos donde llegar con maleta se convierte en una pequeña prueba física. Si buscas postal y ambiente antiguo, puede ser maravillosa; si buscas eficiencia, quizá no.' },
      { tipo: 'parrafo', texto: 'La recomiendo para segundas visitas, parejas con poco equipaje o viajeros que aceptan caminar despacio. No la elegiría como primera opción para familias con carrito, personas con movilidad reducida o quien quiera volver de noche sin pensar en la subida.' },
      { tipo: 'subtitulo', texto: 'Graça: vistas y barrio, con cuestas serias' },
      { tipo: 'parrafo', texto: 'Graça tiene algunos de los miradores más conocidos y conecta con Alfama y Mouraria, pero exige piernas. Si te alojas en la parte alta, la pendiente y la forma de volver por la noche importan tanto como la vista.' },
      { tipo: 'enlace', texto: 'Antes de reservar arriba de la colina, revisa la ruta de Graça y sus desniveles principales.', href: '/blog/graca-lisboa-que-ver', label: 'Qué ver en Graça' },
      { tipo: 'parrafo', texto: 'Funciona bien para quien quiere una Lisboa menos pulida y no depende de horarios muy ajustados. Si vas a salir mucho de noche por Cais do Sodré o Bairro Alto, quizá te resulte incómoda para volver.' },
      { tipo: 'subtitulo', texto: 'Avenida da Liberdade y Marquês de Pombal' },
      { tipo: 'parrafo', texto: 'La Avenida da Liberdade y Marquês de Pombal son cómodas, bien conectadas y más ordenadas. No tienen el encanto de Alfama, pero permiten moverse con metro, taxi o a pie hacia el centro. Para hoteles de más categoría, viajes de trabajo o personas que prefieren calles amplias, son una buena apuesta.' },
      { tipo: 'parrafo', texto: 'Marquês puede sentirse menos romántico, pero es práctico. Si tu viaje combina turismo y desplazamientos fuera del centro, dormir cerca de una estación bien conectada suele ganar a dormir en una calle preciosa pero complicada.' },
      { tipo: 'subtitulo', texto: 'Bairro Alto y Príncipe Real' },
      { tipo: 'parrafo', texto: 'Bairro Alto tiene vida nocturna, bares y mucha energía. Puede ser divertido si vienes a salir, pero no es el lugar más sensato si necesitas silencio. Príncipe Real, en cambio, mantiene una mezcla más tranquila de jardines, restaurantes, tiendas pequeñas y alojamiento con más aire editorial.' },
      { tipo: 'parrafo', texto: 'Para parejas, Príncipe Real suele funcionar mejor que Bairro Alto. Para vida nocturna, Bairro Alto es cómodo si aceptas ruido. Para familias, miraría otra zona salvo que el alojamiento garantice silencio y buen acceso.' },
      { tipo: 'subtitulo', texto: 'Saldanha y Parque das Nações' },
      { tipo: 'parrafo', texto: 'Saldanha es menos turístico, pero tiene metro, avenidas amplias y una relación práctica entre precio, calma y conexión. Puede ser buena opción si no necesitas dormir en la postal clásica. Parque das Nações está más lejos del centro histórico, pero es ordenado, plano y útil para familias o eventos concretos.' },
      { tipo: 'parrafo', texto: 'No elegiría Parque das Nações para una primera visita corta centrada en Alfama, Baixa y Belém. Sí puede tener sentido si valoras comodidad, modernidad o llegas por motivos concretos a esa zona.' },
      { tipo: 'subtitulo', texto: 'Intendente y Mouraria: céntricos y con otro ritmo' },
      { tipo: 'parrafo', texto: 'Intendente y Mouraria quedan cerca del centro histórico y tienen acceso al Metro y a varias zonas que se pueden recorrer a pie. El ambiente cambia bastante de una calle a otra, así que conviene mirar la ubicación exacta del alojamiento y no decidir solo por el nombre del barrio.' },
      { tipo: 'parrafo', texto: 'Mouraria está estrechamente ligada a la historia del fado y reúne comercio, restauración y una población muy diversa. Intendente puede resultar práctico por su estación de Metro y la cercanía con Arroios, Mouraria y Baixa. No doy un precio medio de alojamiento porque cambia demasiado por fechas, tipo de propiedad y antelación.' },
      { tipo: 'lista', items: [
        'Terreno: mezcla de tramos cómodos y pendientes.',
        'Transporte: Metro en Intendente y Martim Moniz, además de buses.',
        'Puntos fuertes: cercanía al centro, transporte y mezcla de comercio local.',
        'Puntos débiles: la comodidad y el ruido cambian mucho según la calle.',
        'Mejor para: viajeros que quieren estar cerca del centro sin dormir necesariamente en Baixa o Chiado.'
      ]},
      { tipo: 'subtitulo', texto: 'Belém: monumentos y paseo junto al río' },
      { tipo: 'parrafo', texto: 'Belém está al oeste del centro histórico y concentra Jerónimos, Padrão dos Descobrimentos, museos, jardines y el paseo junto al Tajo. Es una zona fácil de disfrutar durante el día y bastante más plana que Alfama o Graça.' },
      { tipo: 'parrafo', texto: 'Como base para dormir, tiene sentido si priorizas tranquilidad, el frente ribereño o actividades en esa zona. Si tu viaje gira sobre todo alrededor de Alfama, Baixa, Chiado y la vida nocturna del centro, tendrás más desplazamientos que desde una zona céntrica.' },
      { tipo: 'lista', items: [
        'Terreno: predominantemente plano junto al río.',
        'Transporte: tranvía, autobuses y tren según el trayecto y el estado del servicio.',
        'Puntos fuertes: paseo ribereño, monumentos y ambiente más tranquilo.',
        'Puntos débiles: mayor distancia respecto a varias zonas del centro histórico.',
        'Mejor para: familias, viajeros que priorizan Belém o quien busca una base menos centrada en la vida nocturna.'
      ]},
      { tipo: 'subtitulo', texto: 'Conexión con aeropuerto y transporte' },
      { tipo: 'parrafo', texto: 'Si llegas por avión, dormir cerca de metro puede ahorrarte estrés desde el primer minuto. La línea del aeropuerto conecta con Saldanha en unos 20 minutos según la información oficial del aeropuerto, pero muchas zonas requieren transbordo o un tramo a pie. Zonas como Saldanha, Marquês de Pombal, Baixa-Chiado u Oriente pueden funcionar bien según tu ruta y equipaje; no elijas solo por distancia en kilómetros.' },
      { tipo: 'parrafo', texto: 'Para viajes cortos, una zona bien conectada vale más que una zona ligeramente más bonita. Si vas a Belém, Cascais o Sintra, mira también la conexión con Cais do Sodré o Rossio. Dormir donde cada excursión empieza con dos transbordos suele cansar más que pagar un poco más por ubicación inteligente.' },
      { tipo: 'subtitulo', texto: 'Zonas que pueden resultar incómodas' },
      { tipo: 'parrafo', texto: 'No hay una zona universalmente mala, pero sí zonas que pueden ser mala elección para ciertos viajes. Alfama y Graça pueden cansar por cuestas; Bairro Alto y Cais do Sodré pueden molestar por ruido; áreas muy alejadas del metro pueden convertir cada salida en logística. También conviene desconfiar de alojamientos que prometen centro pero están en calles empinadas o con acceso difícil.' },
      { tipo: 'parrafo', texto: 'Si viajas con personas mayores, carrito o movilidad reducida, confirma ascensor, acceso en taxi y pendiente real de la calle. Lisboa es hermosa, pero no siempre amable con quien necesita trayectos planos. Ese detalle puede cambiar completamente la percepción del viaje.' },
      { tipo: 'subtitulo', texto: 'Recomendación final según tu viaje' },
      { tipo: 'lista', items: [
        'Primera visita: Baixa, Chiado o Avenida da Liberdade.',
        'Pareja: Chiado, Príncipe Real o una Alfama bien elegida.',
        'Familia: Avenida da Liberdade, Saldanha o Parque das Nações si priorizas comodidad.',
        'Vida nocturna: Bairro Alto o Cais do Sodré, aceptando ruido.',
        'Presupuesto ajustado: Saldanha, Arroios o zonas con metro bien conectado.',
      ] },
      { tipo: 'subtitulo', texto: 'Conclusión' },
      { tipo: 'parrafo', texto: 'La mejor zona para alojarse en Lisboa no es siempre la más bonita, sino la que encaja con tu ritmo. Para pocos días, comodidad. Para una visita lenta, carácter. Para familias, accesibilidad. Antes de reservar, mira tus rutas: dormir cerca de lo que vas a hacer vale más que perseguir una foto de portada.' },
    ],
  },
  'lisboa-card-vale-la-pena': {
    titulo: 'Lisboa Card: qué incluye y cuándo vale la pena',
    descripcion: 'Cómo decidir si la Lisboa Card compensa según tu ritmo, transportes, monumentos y días de visita, sin depender de precios inventados.',
    seoTitle: 'Lisboa Card: qué incluye y cuándo compensa',
    metaDescription: 'Guía prudente para decidir si la Lisboa Card vale la pena según monumentos, transporte, ritmo de viaje y condiciones que debes verificar.',
    imagen: '/images/funicular-bica-turistas.jpg',
    imageAlt: 'Turistas subiendo a un funicular de Lisboa en una calle empinada',
    categoria: 'Consejos',
    fecha: '22 Jul 2026',
    fechaActualizacion: 'Actualizado en agosto de 2026',
    dateModified: '2026-08-01',
    minutos: 11,
    links: [
      { href: '/blog/como-moverse-por-lisboa', label: 'Entender el transporte antes de decidir' },
      { href: '/itinerarios/lisboa-3-dias-premium', label: 'Ver cómo encaja en una ruta de 3 días' },
      { href: '/blog/que-hacer-gratis-en-lisboa', label: 'Alternativas gratuitas y de bajo coste' },
      { href: '/itinerarios/lisboa-2-dias-completo', label: 'Abrir la guía gratuita de Lisboa en 2 días' },
      { href: '/itinerarios', label: 'Explorar todos los itinerarios gratuitos' },
    ],
    cta: {
      href: '/itinerarios/lisboa-2-dias-completo',
      label: 'Ver la guía de 2 días',
      title: 'La tarjeta solo ayuda si tu ruta la aprovecha',
      text: 'Usa la guía gratuita de Lisboa en 2 días para ver si concentras suficientes visitas y trayectos para que la Lisboa Card tenga sentido.',
    },
    fuentes: [
      { label: 'Visit Lisboa - Lisboa Card', href: 'https://www.visitlisboa.com/en/p/lisboa-card' },
      { label: 'Tienda oficial Visit Lisboa - Lisboa Card', href: 'https://shop.visitlisboa.com/products/lisboa-card' },
      { label: 'CP - beneficios Lisboa Card', href: 'https://www.cp.pt/info/w/lisboa-card' },
      { label: 'Visit Lisboa - Torre de Belém', href: 'https://www.visitlisboa.com/en/places/torre-de-belem' },
      { label: 'Visit Lisboa - Jerónimos', href: 'https://www.visitlisboa.com/en/places/jeronimos-monastery' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'La Lisboa Card puede ser útil, pero no es una compra automática. Compensa cuando concentras monumentos, museos y transporte en poco tiempo; pierde sentido si vas a caminar sin prisa, mirar miradores gratuitos y entrar solo en uno o dos lugares de pago.' },
      { tipo: 'nota', texto: 'Información comprobada en julio de 2026. Los precios, cierres, monumentos incluidos y condiciones de acceso pueden cambiar; consulta las condiciones oficiales antes de comprar.' },
      { tipo: 'subtitulo', texto: 'Qué es la Lisboa Card' },
      { tipo: 'parrafo', texto: 'La Lisboa Card es una tarjeta turística pensada para combinar transporte público y acceso o descuentos en espacios culturales. La tienda oficial la ofrece en 24, 48 o 72 horas, con modalidades de adulto (+15) y niño (4-15). La tarjeta física se activa con el primer uso, después de rellenar fecha y hora, firmarla y validarla en un transporte público.' },
      { tipo: 'lista', items: [
        '24 horas: adulto 31,00 € precio normal / 29,45 € promoción online; niño 21,00 € / 19,95 €.',
        '48 horas: adulto 51,00 € precio normal / 48,45 € promoción online; niño 28,00 € / 26,60 €.',
        '72 horas: adulto 62,00 € precio normal / 58,90 € promoción online; niño 35,00 € / 33,25 €.',
        'La propia tienda indica que estos precios son válidos hasta el 31-03-2027 y que la promoción online es del 5 %. No la trates como precio permanente.',
      ] },
      { tipo: 'parrafo', texto: 'Su valor no está en tener una tarjeta bonita en la cartera, sino en ahorrar fricción: menos compras sueltas, menos dudas en transporte y posibilidad de entrar en varios lugares si tu ruta está bien concentrada. Si tu plan es muy libre, ese ahorro de fricción quizá no compense el coste.' },
      { tipo: 'subtitulo', texto: 'Qué suele incluir' },
      { tipo: 'parrafo', texto: 'Según Visit Lisboa y la tienda oficial, la tarjeta incluye transporte público ilimitado durante la duración elegida, más de 51 museos, monumentos y lugares de interés con entrada gratuita, y más de 45 descuentos u ofertas en servicios culturales, visitas, ocio y tiendas participantes.' },
      { tipo: 'lista', items: [
        'Metro, autobuses, tranvías, funiculares y elevadores de Carris dentro de las condiciones de la tarjeta.',
        'Trenes urbanos de CP en recorridos indicados por CP, como Sintra, Cascais y Azambuja dentro de los límites publicados.',
        'Entrada gratuita o descuento en una selección oficial de museos, monumentos y espacios culturales.',
        'Descuentos en servicios turísticos o culturales participantes, normalmente entre el 5 % y el 50 % según el caso.',
      ] },
      { tipo: 'parrafo', texto: 'Visit Lisboa habla de acceso rápido en algunos lugares, pero no lo leas como una promesa de saltarte todas las colas. En monumentos como la Torre de Belém o el Monasterio de los Jerónimos, la reserva de franja requiere primero recoger la tarjeta física, introducir su número y aceptar que el acceso está sujeto a cupos diarios.' },
      { tipo: 'subtitulo', texto: 'Cuándo puede compensar' },
      { tipo: 'parrafo', texto: 'Puede compensar si vas a dedicar un día intenso a Belém, museos y transporte. Por ejemplo: moverte desde el centro, entrar en uno o dos monumentos importantes, sumar otro museo y volver usando transporte público. En ese caso, el ahorro potencial y la comodidad empiezan a tener sentido.' },
      { tipo: 'parrafo', texto: 'También puede funcionar si es tu primera visita y prefieres simplificar decisiones. Hay viajeros que pagan un poco más por no pensar en cada billete. Eso no es malo, siempre que sepas que estás comprando comodidad además de posibles ahorros.' },
      { tipo: 'parrafo', texto: 'El caso más claro suele ser un viaje corto con agenda cultural concentrada. Si tienes dos días y uno de ellos está dedicado a Belém, museo, elevador o monumento, la tarjeta entra en conversación. Si en cambio tu día fuerte es caminar por barrios, sentarte en miradores y comer sin prisa, no hay tanta ventaja que capturar.' },
      { tipo: 'subtitulo', texto: 'Cuándo probablemente no compensa' },
      { tipo: 'parrafo', texto: 'No suele compensar si tu viaje es tranquilo, si vas a entrar en pocos monumentos o si te interesan más los barrios, miradores, cafés y paseos junto al río. Lisboa tiene muchísimo valor gratuito: Alfama, Graça, plazas, jardines, mercados, vistas y calles donde lo importante no está detrás de una taquilla.' },
      { tipo: 'parrafo', texto: 'Tampoco la compraría para un día en el que ya tienes una comida larga, mucho descanso o planes dispersos. La tarjeta premia la concentración. Si pasas media mañana en un solo museo y luego te vas a pasear sin entrar en nada más, es probable que pagar por separado sea más sensato.' },
      { tipo: 'parrafo', texto: 'Tampoco la compraría solo por ir a Sintra. El transporte puede formar parte de las ventajas publicadas, pero eso no significa que las entradas de los palacios más populares estén incluidas. Antes de contar con ese ahorro, abre la lista oficial y confirma exactamente qué cubre la tarjeta en tu fecha de viaje.' },
      { tipo: 'subtitulo', texto: 'Ejemplo práctico: día intenso' },
      { tipo: 'parrafo', texto: 'Imagina una jornada centrada en Belém: sales del centro en transporte, visitas un monumento principal, entras en otro espacio cultural, haces una pausa, añades un museo y regresas al final de la tarde. Ese tipo de día es el terreno natural de la Lisboa Card. La clave es que los puntos estén cerca y que realmente quieras entrar.' },
      { tipo: 'subtitulo', texto: 'Ejemplo práctico: viaje tranquilo' },
      { tipo: 'parrafo', texto: 'Ahora imagina un día de Alfama, miradores, café, paseo por la Baixa y atardecer en Graça. Quizá uses transporte una vez, quizá no entres en ningún museo y quizá la mejor parte del día sea sentarte a mirar el río. En ese escenario, la tarjeta pierde fuerza. No porque sea mala, sino porque tu viaje no la necesita.' },
      { tipo: 'subtitulo', texto: 'Comprar tarjeta o pagar por separado' },
      { tipo: 'parrafo', texto: 'La decisión se hace con una suma sencilla: anota los lugares de pago que de verdad vas a visitar, confirma si están incluidos o tienen descuento, añade los trayectos de transporte y compara. Si necesitas inventar visitas para justificar la tarjeta, probablemente no la necesitas. Si la ruta ya tiene varias entradas y desplazamientos, puede ser buena aliada.' },
      { tipo: 'enlace', texto: 'Si decides pagar por separado, compara únicamente las entradas que ya forman parte de tu ruta antes de reservar.', href: '/comprar-entradas', label: 'Comparar entradas y experiencias' },
      { tipo: 'subtitulo', texto: 'Cómo calcularlo en cinco minutos' },
      { tipo: 'parrafo', texto: 'Abre la lista oficial de la tarjeta y marca solo los lugares que ya estaban en tu plan. Después mira el precio vigente de cada entrada en la web oficial del monumento o museo. Añade los trayectos de transporte que harías igualmente. Si el total se acerca o supera el coste de la tarjeta, entonces tiene sentido mirarla en serio. Si queda lejos, no fuerces.' },
      { tipo: 'parrafo', texto: 'El cálculo debe hacerse por día, no por ilusión de viaje. Una tarjeta de 48 o 72 horas puede parecer más rentable, pero solo si esos días concentran visitas incluidas. Si uno de los días lo pasas caminando por Alfama, descansando en miradores o yendo a la playa, ese día quizá no aporta valor a la tarjeta.' },
      { tipo: 'subtitulo', texto: 'Reservas, cupos y tarjeta física' },
      { tipo: 'parrafo', texto: 'La compra online genera un voucher que debes canjear por la tarjeta física en un mostrador Ask Me Lisboa; el voucher oficial tiene validez de 6 meses. Para algunos monumentos con reserva, no puedes reservar antes de tener el número de la tarjeta física. Esto importa mucho si viajas pocos días y quieres entrar en Belém en una franja concreta.' },
      { tipo: 'parrafo', texto: 'También hay cierres temporales y restauraciones que cambian el valor real de la tarjeta. En julio de 2026, la tienda oficial avisaba de varios espacios cerrados por obras y de cupos diarios para Torre de Belém y Jerónimos. No hace falta memorizar una lista de cierres, pero sí revisar la página oficial justo antes de comprar.' },
      { tipo: 'subtitulo', texto: 'Errores al usar la Lisboa Card' },
      { tipo: 'lista', items: [
        'Comprar la tarjeta antes de saber qué vas a visitar.',
        'Activarla demasiado tarde o demasiado pronto sin pensar en la ventana de uso.',
        'Ir a monumentos incluidos sin comprobar si exigen reserva de franja o si tienen cupo diario.',
        'Creer que todos los descuentos equivalen a ahorro real.',
        'No revisar cierres, obras o cambios de condiciones antes de salir.',
      ] },
      { tipo: 'parrafo', texto: 'Otro error frecuente es medirla solo en dinero. A veces no ahorra mucho, pero reduce compras sueltas y dudas. Otras veces parece ahorrar, pero te empuja a correr para amortizarla. La mejor tarjeta es la que encaja con tu forma de viajar, no la que te obliga a viajar distinto.' },
      { tipo: 'subtitulo', texto: 'Alternativas gratuitas o de bajo coste' },
      { tipo: 'parrafo', texto: 'Antes de comprar cualquier tarjeta, mira también planes gratuitos: miradores, jardines, barrios, paseo junto al Tajo, mercados de acceso libre y rutas compactas por zonas. A veces el mejor viaje no es el que incluye más entradas, sino el que alterna una visita cultural con tiempo suficiente para caminar sin prisa.' },
      { tipo: 'parrafo', texto: 'Si solo necesitas moverte, compara la Lisboa Card con un soporte de transporte ocasional, zapping o billetes diarios según tu ruta. Para dos o tres trayectos sueltos, una tarjeta turística suele ser más de lo que necesitas; para varios monumentos concentrados, vuelve a entrar en juego.' },
      { tipo: 'subtitulo', texto: 'Advertencia antes de comprar' },
      { tipo: 'parrafo', texto: 'No uses este artículo como sustituto de la comprobación final. Tarifas, monumentos participantes, horarios, cierres, puntos de recogida, descuentos y ventajas pueden cambiar. La decisión correcta se toma con la información oficial abierta delante y con tu ruta escrita. Si falta cualquiera de las dos cosas, espera antes de pagar.' },
      { tipo: 'parrafo', texto: 'También revisa si viajas con niños, mayores, estudiantes o personas con descuentos propios. A veces una entrada reducida, un día gratuito o un ritmo familiar cambia por completo el cálculo. La Lisboa Card debe compararse con tu situación real, no con un ejemplo ideal.' },
      { tipo: 'subtitulo', texto: 'Conclusión' },
      { tipo: 'parrafo', texto: 'La Lisboa Card vale la pena si tu ruta ya incluye varios monumentos, museos y trayectos en un periodo corto. No la compraría para un viaje lento o muy centrado en planes gratuitos. La regla es simple: primero diseña la ruta, después decide la tarjeta. Hacerlo al revés suele llevar a gastar más o correr demasiado.' },
    ],
  },
  'como-moverse-por-lisboa': {
    titulo: 'Cómo moverse por Lisboa: metro, tranvía, autobús y a pie',
    descripcion: 'Metro, tranvías, buses, trenes, cuestas y alternativas para moverte por Lisboa con menos dudas desde el primer día.',
    seoTitle: 'Cómo moverse por Lisboa: transporte público y billetes',
    metaDescription: 'Metro, tranvía, buses y trenes: cómo moverse por Lisboa, qué billetes usar y cómo llegar al aeropuerto, Belém, Sintra y Cascais sin perder tiempo.',
    imagen: '/images/turista-tranvia-28.jpg',
    imageAlt: 'Tranvía articulado moderno de la línea 15E de Carris circulando por una calle de Lisboa',
    categoria: 'Transporte',
    fecha: '21 Jul 2026',
    fechaActualizacion: 'Revisión puntual: 15 Sep 2026',
    dateModified: '2026-09-15',
    minutos: 12,
    links: [
      { href: '/blog/tarjeta-navegante-lisboa', label: 'Entender la tarjeta Navegante y las tarifas 2026' },
      { href: '/blog/lisboa-card-vale-la-pena', label: 'Decidir si la Lisboa Card compensa' },
      { href: '/itinerarios/lisboa-3-dias-premium', label: 'Aplicar el transporte a una ruta de 3 días' },
      { href: '/blog/donde-alojarse-en-lisboa', label: 'Elegir alojamiento según conexiones' },
      { href: '/itinerarios/lisboa-1-dia-lo-esencial', label: 'Abrir la guía gratuita de Lisboa en 1 día' },
      { href: '/itinerarios', label: 'Explorar todos los itinerarios gratuitos' },
    ],
    cta: {
      href: '/itinerarios/lisboa-1-dia-lo-esencial',
      label: 'Abrir el itinerario de 1 día',
      title: 'Moverse bien empieza con una ruta realista',
      text: 'La guía gratuita de Lisboa en 1 día ordena los trayectos principales para que no pierdas tiempo subiendo y bajando sin sentido.',
    },
    fuentes: [
      { label: 'Metro Lisboa - comprar billetes', href: 'https://www.metrolisboa.pt/en/buy/' },
      { label: 'Metro Lisboa - tarjeta navegante ocasional', href: 'https://www.metrolisboa.pt/en/buy/viva-viagem-card/' },
      { label: 'Metro Lisboa - tarjeta bancaria contactless', href: 'https://www.metrolisboa.pt/en/ride-on-metro-lisboa-with-contactless-payment-card/' },
      { label: 'Carris - tabla de precios 2026', href: 'https://www.carris.pt/en/discover/prices-table-2026/' },
      { label: 'Carris - alteraciones de servicio', href: 'https://www.carris.pt/viaje/alteracoes-de-servico/' },
      { label: 'Carris - recorrido de la línea 15E', href: 'https://www.carris.pt/en/travel/carreiras/15e/' },
      { label: 'CP - trenes urbanos de Lisboa', href: 'https://www.cp.pt/info/en/lisbon' },
      { label: 'Aeropuerto de Lisboa - transporte público', href: 'https://www.lisbonairport.pt/en/lis/access-parking/getting-to-and-from-the-airport/public-transportation?language=en' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Para una primera visita, combina paseos por barrios cercanos con metro para las distancias largas. Usa el tren para Sintra o Cascais y compara tranvía, tren o bus para Belém. Reserva taxi o una app para trayectos con maletas, cansancio o mala conexión. En Lisboa importa tanto la cuesta que evitas como la distancia que recorres.' },
      { tipo: 'nota', texto: 'Tarifas de Metro y billetes combinados comprobadas el 15 de septiembre de 2026. Consulta el operador antes del viaje, especialmente en caso de obras, huelgas, cambios de servicio o trayectos fuera de la red urbana.' },
      { tipo: 'subtitulo', texto: 'Metro: rápido para distancias claras' },
      { tipo: 'parrafo', texto: 'El metro es la forma más previsible de moverte entre zonas conectadas: aeropuerto, Saldanha, Marquês, Baixa-Chiado, Cais do Sodré y Oriente, entre otras. Es limpio, sencillo de leer y útil cuando tienes que cruzar ciudad. No resuelve todos los barrios históricos, pero evita muchos trayectos largos en superficie.' },
      { tipo: 'parrafo', texto: 'Para llegar desde el aeropuerto suele ser una opción práctica si llevas equipaje manejable y tu alojamiento queda cerca de una estación. El aeropuerto tiene estación de metro y la conexión Aeroporto-Saldanha se anuncia como unos 20 minutos, pero eso no significa que llegue directo a todas las zonas céntricas: muchas rutas necesitan transbordo.' },
      { tipo: 'enlace', texto: 'Si estás decidiendo cómo llegar al alojamiento con maletas o a última hora, compara las opciones de llegada antes de elegir el transporte para el resto del viaje.', href: '/blog/aeropuerto-lisboa-al-centro', label: 'Del aeropuerto de Lisboa al centro: qué opción elegir' },
      { tipo: 'enlace', texto: 'Si vas hacia el Parque das Nações o vas a tomar un tren, Oriente funciona como intercambiador y también merece una mirada por su arquitectura.', href: '/blog/estacion-oriente-lisboa', label: 'Guía de la estación de Oriente' },
      { tipo: 'subtitulo', texto: 'Tranvías: icono, no siempre transporte eficiente' },
      { tipo: 'parrafo', texto: 'El tranvía 28 es famoso por una razón: atraviesa calles estrechas, sube colinas y condensa una imagen muy reconocible de Lisboa. Pero también puede ir lleno, lento y con colas. Si lo quieres vivir como experiencia, intenta hacerlo temprano o al final de la tarde. Si solo quieres llegar rápido, quizá no es la mejor herramienta.' },
      { tipo: 'parrafo', texto: 'Para Belém, consulta el 15E: el recorrido publicado por Carris une Praça da Figueira y Algés, pasando por Cais do Sodré y Belém. No sale de Martim Moniz. Las obras pueden modificar paradas o sustituir tramos por autobús, así que comprueba el servicio del día. No diseñes el viaje alrededor de un tranvía si te obliga a esperar demasiado.' },
      { tipo: 'enlace', texto: 'Si quieres subir al 28 como parte de la visita y no solo como transporte, revisa antes su recorrido, las paradas útiles y las horas con más demanda.', href: '/actividades/tranvia-28', label: 'Planificar el recorrido en el tranvía 28' },
      { tipo: 'tip', texto: 'Si la cola del 28 no encaja en tu día, continúa la visita a pie o busca otro transporte. Subir en una parada intermedia no garantiza sitio: el tranvía puede llegar lleno.' },
      { tipo: 'subtitulo', texto: 'Autobuses: menos románticos, muy útiles' },
      { tipo: 'parrafo', texto: 'Los autobuses no salen tanto en las fotos, pero salvan rutas que el metro no cubre bien. Son útiles para conectar miradores, zonas residenciales y puntos que quedan incómodos a pie. El problema es que dependen más del tráfico y pueden ser menos intuitivos para una primera visita.' },
      { tipo: 'parrafo', texto: 'Mi consejo es usarlos cuando Google Maps o la app de transporte los muestre claramente como mejor opción, pero no planificar todo el viaje solo con buses. La aplicación de Carris muestra rutas y horarios en tiempo real, y ahí se nota la diferencia: sin ella el bus es adivinar, con ella es una opción más. Si vienes desde el aeropuerto en bus urbano, recuerda que el propio aeropuerto limita el equipaje permitido a 50 x 40 x 20 cm; con maletas grandes, metro, taxi o app suelen ser más cómodos.' },
      { tipo: 'subtitulo', texto: 'Elevadores y funiculares' },
      { tipo: 'parrafo', texto: 'Los elevadores y funiculares existen por una razón: Lisboa sube de verdad. Bica, Glória, Lavra y Santa Justa no son solo atracciones, también cuentan cómo la ciudad resolvió sus desniveles. Pueden ahorrar esfuerzo, aunque en horas turísticas quizá haya más cola que ventaja.' },
      { tipo: 'parrafo', texto: 'Si vas con poco tiempo, úsalos cuando encajen en tu ruta, no como una lista obligatoria. A veces una calle paralela, una pausa o una combinación con metro resuelve mejor que esperar media hora por una foto.' },
      { tipo: 'aviso', texto: 'Tras el accidente del Elevador da Glória en septiembre de 2025, los elevadores y funiculares históricos de Lisboa quedaron sujetos a cierres. Algunos han vuelto a funcionar y otros siguen parados sin fecha de reapertura. Consulta el estado de cada uno en la web de Carris antes de contar con ellos para subir una cuesta, y ten preparada una alternativa a pie o en bus.' },
      { tipo: 'subtitulo', texto: 'Trenes urbanos: Belém, Sintra y Cascais' },
      { tipo: 'parrafo', texto: 'Para Belém puede servir el eje de Cais do Sodré y la línea hacia Cascais, además de opciones en tranvía o bus. Para Cascais, el tren desde Cais do Sodré es la referencia habitual. Para Sintra, la conexión desde Rossio suele ser la más directa para quien se aloja en el centro. CP organiza tarifas por zonas y trayectos; evita asumir un precio único y revisa el planificador o el tarifario oficial antes de salir.' },
      { tipo: 'parrafo', texto: 'No mezcles Sintra y Cascais en el mismo día si quieres disfrutar. Es posible en papel, pero suele convertir la jornada en una sucesión de esperas. Para una primera visita, elige una escapada y hazla bien.' },
      { tipo: 'subtitulo', texto: 'Cómo llegar a Belém sin perder media mañana' },
      { tipo: 'parrafo', texto: 'Belém está lo bastante cerca para parecer sencillo y lo bastante lejos para desordenar un día mal planificado. Si sales desde Baixa o Chiado, revisa opciones desde Cais do Sodré, tranvía o bus según el estado del servicio. Lo importante es salir con una opción principal y una alternativa, porque las colas o incidencias pueden cambiar el plan.' },
      { tipo: 'parrafo', texto: 'Evita ir a Belém entre dos planes del centro histórico. Hazlo como bloque: transporte, paseo, monumentos o museos, pausa y regreso. Así no conviertes una zona agradable junto al río en una carrera de ida y vuelta.' },
      { tipo: 'subtitulo', texto: 'Sintra y Cascais, de forma introductoria' },
      { tipo: 'parrafo', texto: 'Sintra y Cascais no son barrios de Lisboa, pero muchas personas los meten en el mismo viaje. Para Sintra, piensa en una jornada casi completa y sal temprano. Para Cascais, el plan puede ser más ligero y costero. En ambos casos, consulta horarios oficiales de tren antes de salir y no armes una escapada sobre frecuencias recordadas de otro año.' },
      { tipo: 'subtitulo', texto: 'Caminar: necesario, pero con estrategia' },
      { tipo: 'parrafo', texto: 'Caminar es parte del viaje. La Baixa se hace muy bien a pie, Chiado pide una subida, Alfama pide paciencia y Graça pide piernas. Lo importante es no caminar contra la ciudad: si puedes empezar arriba y bajar, hazlo. Si puedes agrupar miradores cercanos, no los separes en días distintos.' },
      { tipo: 'parrafo', texto: 'En verano, evita las subidas largas al mediodía. En lluvia, cuidado con la calçada portuguesa porque puede resbalar. Y si viajas con movilidad reducida, carrito o cansancio acumulado, conviene priorizar zonas planas y transporte antes que romantizar las cuestas.' },
      { tipo: 'subtitulo', texto: 'Tarjetas y sistemas de pago' },
      { tipo: 'parrafo', texto: 'La navegante ocasional es una tarjeta recargable para billetes o saldo zapping. El soporte cuesta 0,50 € y se puede recargar durante un año. Cada viajero necesita el suyo: no podéis compartir una tarjeta en el mismo trayecto, aunque tenga saldo suficiente. No hace falta comprar otra para cada viaje.' },
      { tipo: 'parrafo', texto: 'El billete Carris/Metro cuesta 1,90 € y permite viajar durante 60 minutos desde la primera validación, sin usarlo para viajes consecutivos de metro. Si vas a hacer varios trayectos, compara el coste de los viajes previstos con el billete de 24 horas para los operadores que utilizarás; no todos los billetes diarios cubren las mismas redes.' },
      { tipo: 'lista', items: [
        'Billete diario 24h Carris/Metro: 7,25 €.',
        'Billete diario 24h Carris/Metro/Transtejo Cacilhas: 10,35 €.',
        'Billete diario 24h Carris/Metro/CP: 11,40 €.',
        'Zapping en Metro: 1,72 € por viaje; al cambiar de operador se descuenta una nueva tarifa según las condiciones de ese operador.',
        'Pago con tarjeta bancaria contactless en Metro: 1,92 € por viaje, solo para un pasajero por tarjeta o dispositivo.',
      ] },
      { tipo: 'parrafo', texto: 'El contactless bancario del Metro es cómodo para viajes sueltos, pero no funciona igual que una tarjeta navegante ni necesariamente sirve del mismo modo en otros operadores. Si vas a combinar bus, tranvía, tren o barco, conviene decidir antes si usarás navegante ocasional, billete diario, zapping o una tarjeta turística.' },
      { tipo: 'enlace', texto: 'Si quieres comparar las opciones sin mezclar conceptos, la guía de Navegante separa tarjeta ocasional, zapping, 24 horas y pases mensuales.', href: '/blog/tarjeta-navegante-lisboa', label: 'Tarjeta Navegante en Lisboa: guía 2026' },
      { tipo: 'subtitulo', texto: 'Taxi, Uber y Bolt' },
      { tipo: 'parrafo', texto: 'Taxi, Uber y Bolt son buenos recursos para trayectos puntuales: llegar con maletas, volver tarde, salvar una subida o cruzar la ciudad cuando el transporte público te obliga a demasiados cambios. En el aeropuerto, la información oficial recuerda que taxis y TVDE se contratan en las zonas habilitadas o por app, no aceptando abordajes dentro de la terminal.' },
      { tipo: 'subtitulo', texto: 'Accesibilidad, cochecitos y cuestas' },
      { tipo: 'parrafo', texto: 'Lisboa no siempre es fácil para movilidad reducida, cochecitos o rodillas cansadas. Antes de elegir alojamiento o ruta, mira si hay ascensor, pendiente, escaleras y transporte cercano. Baixa, parte de Avenida da Liberdade, Parque das Nações y algunos tramos junto al río son más amables. Alfama, Graça y Bairro Alto requieren más paciencia.' },
      { tipo: 'subtitulo', texto: 'Moverse de noche' },
      { tipo: 'parrafo', texto: 'De noche conviene ser prudente con horarios. El metro no funciona toda la madrugada en condiciones normales, algunos buses reducen frecuencia y las apps de coche pueden subir de precio cuando hay mucha demanda. Si vas a salir por Bairro Alto, Cais do Sodré o Santos, decide antes cómo volver, sobre todo si duermes en una colina.' },
      { tipo: 'parrafo', texto: 'Para trayectos cortos nocturnos, caminar puede ser agradable en zonas con movimiento, pero no lo conviertas en obligación si estás lejos, cansado o no conoces el barrio. Lisboa es bastante caminable en el centro, aunque las distancias de noche se sienten más largas cuando aparecen cuestas y calles vacías.' },
      { tipo: 'subtitulo', texto: 'Errores frecuentes' },
      { tipo: 'lista', items: [
        'Pensar que el tranvía 28 es una solución rápida para todo.',
        'Reservar alojamiento lejos del metro sin revisar las cuestas.',
        'Ir a Belém tarde y con prisa.',
        'Subestimar los tiempos entre miradores.',
        'No tener plan alternativo si llueve o si un transporte va lleno.',
      ] },
      { tipo: 'subtitulo', texto: 'Conclusión' },
      { tipo: 'parrafo', texto: 'La mejor forma de moverse por Lisboa es combinar. Metro para cruzar ciudad, caminata por zonas compactas, tranvía como experiencia puntual, tren para Belém o escapadas, y coche con app cuando el cuerpo lo pida. Si ordenas la ruta por barrios, el transporte deja de ser un problema y empieza a trabajar a tu favor.' },
    ],
  },
  'que-hacer-gratis-en-lisboa': {
    titulo: 'Qué hacer gratis en Lisboa: planes y lugares que valen la pena',
    descripcion: 'Miradores, barrios, jardines, río y planes sencillos para disfrutar Lisboa con presupuesto mínimo sin caer en reclamos vacíos.',
    seoTitle: 'Qué hacer gratis en Lisboa | Planes útiles',
    metaDescription: 'Planes gratis en Lisboa que sí valen la pena: miradores, barrios, jardines, río, mercados, lluvia y una ruta gratuita de medio día.',
    imagen: '/images/miradouro-grupo-atardecer.jpg',
    imageAlt: 'Personas sentadas en un mirador de Lisboa durante el atardecer',
    categoria: 'Guías',
    fecha: '20 Jul 2026',
    fechaActualizacion: 'Actualizado en julio de 2026',
    dateModified: '2026-07-24',
    minutos: 11,
    links: [
      { href: '/blog/mejores-miradores-lisboa', label: 'Miradores de Lisboa para completar el plan' },
      { href: '/itinerarios/lisboa-3-dias-premium', label: 'Encajar planes gratis en una ruta de 3 días' },
      { href: '/blog/lisboa-card-vale-la-pena', label: 'Cuándo pagar entradas y cuándo no' },
      { href: '/itinerarios/lisboa-1-dia-lo-esencial', label: 'Abrir la guía gratuita de Lisboa en 1 día' },
      { href: '/itinerarios', label: 'Explorar todos los itinerarios gratuitos' },
    ],
    cta: {
      href: '/itinerarios',
      label: 'Ver itinerarios gratuitos',
      title: 'Organiza los planes gratis por zonas',
      text: 'Las guías gratuitas te ayudan a unir miradores, barrios y pausas sin gastar más por moverte mal.',
    },
    fuentes: [
      { label: 'Lisboa.pt - Miradouro da Senhora do Monte', href: 'https://www.lisboa.pt/pontos-de-interesse/detalhe/miradouro-da-senhora-do-monte' },
      { label: 'Lisboa.pt - Miradouro da Graça', href: 'https://www.lisboa.pt/pontos-de-interesse/detalhe/miradouro-sophia-de-mello-breyner-andresen-miradouro-da-graca-1' },
      { label: 'Lisboa.pt - Jardim da Estrela', href: 'https://www.lisboa.pt/pontos-de-interesse/detalhe/biblioteca-quiosque-do-jardim-da-estrela' },
      { label: 'Lisboa.pt - Mercado da Ribeira', href: 'https://www.lisboa.pt/pontos-de-interesse/detalhe/mercado-da-ribeira' },
    ],
    contenido: [
      { tipo: 'parrafo', texto: 'Lisboa se presta mucho a gastar sin darte cuenta, pero también permite días muy buenos con presupuesto mínimo. Lo importante es no confundir gratis con improvisado: si ordenas miradores, barrios, río y pausas, puedes tener una jornada completa sin pagar entradas.' },
      { tipo: 'nota', texto: 'Información revisada en julio de 2026. Gratis significa acceso sin entrada; puede haber coste de transporte, consumo opcional o zonas de pago dentro de un mismo espacio.' },
      { tipo: 'subtitulo', texto: 'Miradores gratuitos' },
      { tipo: 'parrafo', texto: 'Los miradores son el gran lujo gratuito de Lisboa. Senhora do Monte, Graça, Santa Luzia, Portas do Sol y Santa Catarina permiten entender la ciudad desde arriba sin comprar nada. Algunos tienen quioscos o terrazas cerca, pero mirar la ciudad no exige consumir.' },
      { tipo: 'parrafo', texto: 'La clave es elegir la hora. Por la mañana tendrás más calma y mejor temperatura; al atardecer tendrás más ambiente y más gente. No intentes verlos todos en el mismo día. Dos o tres bien elegidos valen más que una carrera cuesta arriba.' },
      { tipo: 'enlace', texto: 'Para conocer el centro con contexto sin pagar una entrada fija, también puedes valorar una ruta guiada a pie basada en propinas.', href: '/actividades/free-walking-tour-centro', label: 'Ver el free tour por el centro de Lisboa' },
      { tipo: 'subtitulo', texto: 'Barrios para caminar sin pagar entrada' },
      { tipo: 'parrafo', texto: 'Alfama, Mouraria, Graça, Chiado, Príncipe Real y Estrela se disfrutan caminando. Cada uno tiene un ritmo distinto: Alfama es callejón y sombra, Mouraria mezcla vida cotidiana y memoria, Chiado es más elegante, Príncipe Real más pausado, Estrela más residencial.' },
      { tipo: 'parrafo', texto: 'El mejor plan gratuito es atravesar dos barrios cercanos sin saltar de un extremo a otro. Por ejemplo, Baixa, Chiado y Príncipe Real; o Alfama, Graça y Mouraria. Así gastas energía en mirar, no en corregir el mapa.' },
      { tipo: 'subtitulo', texto: 'Plazas, jardines y pausas con aire' },
      { tipo: 'parrafo', texto: 'Praça do Comércio, Largo do Carmo, Jardim da Estrela, Jardim do Príncipe Real y algunos jardines de barrio son buenos lugares para bajar revoluciones. Lisboa puede saturar por ruido, cuestas y luz; sentarse sin comprar nada también forma parte de viajar bien. Algunos jardines tienen horarios o equipamientos concretos, así que revisa si vas muy temprano o tarde.' },
      { tipo: 'parrafo', texto: 'Si viajas con niños o con alguien que se cansa rápido, estos descansos no son relleno. Son lo que hace que el día aguante. Una ruta gratuita inteligente siempre incluye bancos, sombra y baños cercanos cuando sea posible.' },
      { tipo: 'enlace', texto: 'El Parque Eduardo VII funciona bien como pausa amplia y gratuita si tu recorrido pasa por Marquês de Pombal.', href: '/actividades/parque-eduardo-vii', label: 'Consultar la ficha del Parque Eduardo VII' },
      { tipo: 'subtitulo', texto: 'El río: el plan más sencillo' },
      { tipo: 'parrafo', texto: 'El paseo junto al Tajo es una de las mejores formas de sentir Lisboa sin gastar. Ribeira das Naus, Cais do Sodré, Santos y parte del camino hacia Belém ofrecen espacio abierto y luz. No todos los tramos son igual de bonitos, pero ayudan a respirar después de barrios densos.' },
      { tipo: 'parrafo', texto: 'Para un atardecer barato, compra algo sencillo en una tienda o lleva agua y busca un banco mirando al río. No necesitas una terraza cara para entender por qué Lisboa mira tanto al Tajo.' },
      { tipo: 'subtitulo', texto: 'Mercados y espacios de acceso libre' },
      { tipo: 'parrafo', texto: 'Algunos mercados y espacios culturales tienen acceso libre aunque consumir o comprar sea opcional. El Mercado da Ribeira, por ejemplo, combina mercado tradicional y zona gastronómica: entrar y mirar no obliga a consumir, pero comer allí ya forma parte de tu presupuesto. Conviene distinguir entrada gratuita de plan completamente gratis.' },
      { tipo: 'subtitulo', texto: 'Arte urbano y calles con carácter' },
      { tipo: 'parrafo', texto: 'Lisboa tiene mucho arte urbano en zonas como Mouraria, Graça, Intendente o los alrededores de LX Factory. No lo convertiría en una búsqueda obsesiva de murales, pero sí en una capa más del paseo. A veces una pared explica mejor la ciudad contemporánea que una sala de museo.' },
      { tipo: 'subtitulo', texto: 'Planes al atardecer sin pagar terraza' },
      { tipo: 'parrafo', texto: 'El atardecer es uno de los momentos donde Lisboa más invita a gastar: rooftop, copa, mesa con vistas. Todo eso puede estar bien, pero no es obligatorio. Un mirador, un banco junto al río o una plaza con luz baja pueden dar una experiencia igual de memorable si llegas con tiempo y sin expectativas de postal perfecta.' },
      { tipo: 'parrafo', texto: 'Santa Catarina tiene ambiente joven, Graça es más de barrio, Senhora do Monte ofrece vistas amplias y Ribeira das Naus da una versión más abierta del río. Elige según dónde termines la ruta. Cruzar la ciudad solo por un atardecer puede quitarle gracia al plan.' },
      { tipo: 'subtitulo', texto: 'Qué hacer gratis si llueve' },
      { tipo: 'parrafo', texto: 'Con lluvia, lo gratuito se reduce un poco, pero no desaparece. Puedes hacer recorridos cortos por galerías, librerías, mercados cubiertos o cafés donde pagar solo una bebida sencilla. También puedes visitar estaciones, iglesias abiertas o espacios públicos bajo techo, comprobando siempre horarios y normas de acceso.' },
      { tipo: 'parrafo', texto: 'La lluvia también puede ser buen momento para mirar azulejos, portales, estaciones y pequeñas iglesias abiertas. Evita calles muy pulidas o bajadas pronunciadas si el suelo está mojado. El plan gratuito con lluvia no debe ser heroico: debe ser corto, seguro y con pausas.' },
      { tipo: 'subtitulo', texto: 'Presupuesto mínimo sin sentir que renuncias' },
      { tipo: 'parrafo', texto: 'Un día barato en Lisboa puede combinar desayuno sencillo, paseo por barrios, comida en una tasca o supermercado, miradores y río. Lo que más encarece no siempre son las entradas, sino los cafés en lugares muy turísticos, los transportes mal encadenados y las decisiones tomadas por cansancio.' },
      { tipo: 'parrafo', texto: 'Lleva agua, revisa baños y no llenes el día de desplazamientos. La experiencia gratuita mejora cuando el plan es compacto. Baixa, Chiado y Príncipe Real funcionan bien juntos; Alfama, Mouraria y Graça también. Belém merece otro bloque, incluso si solo paseas por exteriores.' },
      { tipo: 'subtitulo', texto: 'Planes gratuitos que combinan bien con una entrada de pago' },
      { tipo: 'parrafo', texto: 'No hace falta que todo el día sea gratuito para que el presupuesto funcione. Puedes elegir una sola entrada que te apetezca mucho y rodearla de planes sin coste: un mirador antes, un jardín después, un paseo junto al río al final. Así el viaje no se siente limitado, pero tampoco se convierte en una suma constante de tickets.' },
      { tipo: 'parrafo', texto: 'Este equilibrio es especialmente útil en Belém. Puedes caminar por exteriores, ver el río, acercarte a la Torre, pasear por jardines y decidir si entras en un monumento concreto. Si entras en todo por inercia, Belém deja de ser un paseo y se vuelve una lista cara.' },
      { tipo: 'subtitulo', texto: 'Ruta gratuita sugerida de medio día' },
      { tipo: 'lista', items: [
        'Empieza en Praça do Comércio y camina por la Baixa hacia Rossio.',
        'Sube a Largo do Carmo y asómate a Chiado.',
        'Continúa hacia Príncipe Real para una pausa en el jardín.',
        'Si todavía hay energía, baja hacia São Pedro de Alcântara para cerrar con vistas.',
      ] },
      { tipo: 'subtitulo', texto: 'Cuidado con lo que parece gratis' },
      { tipo: 'parrafo', texto: 'Algunos lugares tienen exterior gratuito y zonas de pago. Otros son gratis ciertos días, para determinados residentes, edades o documentos. Antes de organizar un día alrededor de una entrada gratuita, verifica la información oficial. Lo gratuito no debería obligarte a discutir en una taquilla.' },
      { tipo: 'parrafo', texto: 'También hay planes que son gratis solo si aceptas no consumir: mercados, librerías, miradores con quiosco, terrazas abiertas o espacios creativos. Está bien entrar y mirar con respeto, pero no confundas acceso libre con una invitación a ocupar mesas o baños de negocios privados sin consumir.' },
      { tipo: 'enlace', texto: 'Para combinar estos paseos con una visita concreta, puedes filtrar las actividades de Lisboa por zona y por precio.', href: '/actividades', label: 'Ver actividades gratuitas y de pago' },
      { tipo: 'subtitulo', texto: 'Conclusión' },
      { tipo: 'parrafo', texto: 'Hacer Lisboa gratis no significa verla peor. Significa elegir bien: miradores, barrios, río, jardines y pausas con sentido. Si mezclas dos zonas cercanas y no intentas abarcarlo todo, tendrás una ciudad más amable y un presupuesto mucho más controlado.' },
    ],
  },
  "donde-comer-barato-lisboa": {
    titulo: "Dónde comer barato en Lisboa sin renunciar al sabor",
    seoTitle: "Dónde comer barato en Lisboa",
    descripcion: "Tascas de barrio, mercados escondidos y rincones donde los lisboetas almuerzan a diario. Platos caseros por menos de lo que cuesta un café en la Baixa.",
    imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200",
    imageAlt: "Tasca de esquina en Lisboa con clientes en las mesas de la acera",
    categoria: "Gastronomía",
    fecha: "18 Dic 2024",
    minutos: 14,
    contenido: [
      { tipo: "parrafo", texto: "Recuerdo la primera vez que pagué dieciocho euros por un bacalhau à brás mediocre en una terraza de Rossio. El plato era pequeño, el aceite sabía a recalentado, y al terminar me quedé con hambre y con la sensación de haber sido estafado. Esa misma noche, un compañero de trabajo me llevó a una tasca en Mouraria donde cenamos el mismo plato —pero hecho con cariño, abundante, con patatas crujientes y perejil fresco— por ocho euros con vino incluido." },
      { tipo: "parrafo", texto: "Así empecé a mapear cada rincón donde los lisboetas comen de verdad. No los restaurantes que salen en las guías ni los locales con menús traducidos a cinco idiomas, sino las tascas de barrio donde el dueño conoce a cada cliente por su nombre, los mercados donde las señoras compran el pescado del día, y los quioscos donde un bocadillo de cerdo cuesta lo mismo que hace veinte años." },
      { tipo: "subtitulo", texto: "La regla de oro: aléjate del circuito habitual" },
      { tipo: "parrafo", texto: "Lisboa tiene una geografía gastronómica muy marcada. Las calles peatonales de la Baixa, los alrededores del Rossio y la subida al Castillo concentran restaurantes diseñados para un público que pasará por allí una sola vez en su vida. No necesitan fidelizar clientes porque cada día llegan miles de nuevos visitantes. El resultado son precios inflados y calidad dudosa." },
      { tipo: "parrafo", texto: "La buena noticia es que basta caminar diez minutos en cualquier dirección para encontrar otro mundo. En Mouraria, Graça, Arroios o Intendente la realidad es completamente diferente: menús del día por siete u ocho euros, porciones generosas, y cocina que sabe a casa de abuela portuguesa." },
      { tipo: "subtitulo", texto: "Tascas con alma: cocina casera por menos de diez euros" },
      { tipo: "parrafo", texto: "Las tascas son el equivalente portugués a los bares de menú españoles: locales pequeños, sin pretensiones, donde la comida cambia cada día según lo que haya fresco en el mercado. El ambiente suele ser ruidoso, las mesas están pegadas unas a otras, y el vino de la casa viene en jarras de barro. Todo eso forma parte del encanto." },
      { tipo: "parrafo", texto: "En Ti Natália, escondida en una callejuela de Mouraria, Dona Natália lleva cuarenta años cocinando los mismos platos que aprendió de su madre. El menú del día —sopa, plato principal, postre y café— cuesta nueve euros. Cada día prepara algo diferente: lunes carne de cerdo à alentejana, martes arroz de pato, miércoles bacalhau con natas... Los vecinos del barrio saben qué día les toca su plato favorito." },
      { tipo: "parrafo", texto: "Taberna da Rua das Flores, en el Chiado pero fuera del circuito más transitado, tiene un concepto diferente: petiscos (tapas portuguesas) para compartir. Aquí pides varios platos pequeños y los vas picoteando entre conversación y vino. Pimientos de Padrón, croquetas de alheira, quesos de Serra da Estrela, conservas de sardinas... Puedes cenar muy bien por doce o trece euros." },
      { tipo: "enlace", texto: "Si prefieres buscar el formato antes que un nombre concreto, una tasca tradicional ayuda a reconocer cocina sencilla, plato del día y ambiente de barrio.", href: "/actividades/tasca-tradicional", label: "Qué esperar de una tasca tradicional" },
      { tipo: "tip", texto: "En cualquier tasca, pregunta por el 'prato do dia' (plato del día). Siempre es la opción más fresca y económica, porque aprovechan lo que compraron esa mañana en el mercado." },
      { tipo: "subtitulo", texto: "Mercados: donde comen los que saben" },
      { tipo: "parrafo", texto: "El Mercado da Ribeira tiene dos caras completamente diferentes. La que conoce todo el mundo es el Time Out Market: puestos de chefs reconocidos, colas interminables, precios de restaurante con formato de comida rápida. Funciona bien si quieres probar cocina de autor sin reserva, pero no es precisamente barato." },
      { tipo: 'enlace', texto: 'La guía específica explica cómo funciona el salón, cuándo se llena y en qué casos la variedad compensa el precio.', href: '/blog/time-out-market-lisboa', label: 'Time Out Market Lisboa: guía práctica' },
      { tipo: "parrafo", texto: "La otra cara está al otro lado del pasillo: el mercado tradicional que lleva funcionando desde 1892. Aquí las señoras del barrio compran pescado, fruta y flores. Hay puestos de comida preparada donde un plato combinado con arroz, ensalada y carne o pescado del día cuesta cinco o seis euros. El ambiente es auténtico, el idioma es portugués, y la calidad es sorprendentemente buena." },
      { tipo: "parrafo", texto: "Pero mi mercado favorito está lejos del centro: el Mercado de Arroios, en un barrio residencial sin apenas visitantes. El restaurante del mercado sirve menús completos por siete euros, con sopa casera, plato del día, pan, y vino o agua. Los parroquianos son trabajadores del barrio, jubilados que llevan décadas viniendo, y algún curioso que se aventuró hasta allí siguiendo un consejo como este." },
      { tipo: "subtitulo", texto: "Bocadillos que alimentan el alma" },
      { tipo: "parrafo", texto: "Portugal tiene una tradición de bocadillos calientes que merece su propio apartado. No hablo de sándwiches tristes envueltos en plástico, sino de creaciones contundentes que se comen de pie en el mostrador de un bar, acompañadas de una cerveza fría o un vaso de vino." },
      { tipo: "parrafo", texto: "La bifana es el rey indiscutible: lonchas finas de cerdo marinadas en ajo y vino blanco, pasadas por la plancha y servidas en un pan redondo que absorbe los jugos. En cualquier tasca decente cuesta entre tres y cuatro euros, y llena más de lo que parece. El truco está en la salsa: cada local tiene su receta secreta, y los debates sobre quién hace la mejor bifana de Lisboa pueden durar horas." },
      { tipo: "parrafo", texto: "El prego es similar pero con ternera: un filete fino, jugoso, en pan crujiente. Suele acompañarse de mostaza y cuesta un euro o dos más que la bifana. Y luego está la francesinha, que técnicamente es de Oporto pero se encuentra en toda Portugal: un sándwich de carnes variadas cubierto de queso fundido y salsa de cerveza y tomate. Es un atentado calórico delicioso que cuesta entre ocho y diez euros pero alimenta para todo el día." },
      { tipo: "tip", texto: "Los mejores bocadillos se comen de pie. Si un local tiene taburetes vacíos y las banquetas del mostrador llenas, es buena señal." },
      { tipo: "subtitulo", texto: "El picnic perfecto: miradores y supermercados" },
      { tipo: "parrafo", texto: "Una de mis formas favoritas de almorzar en Lisboa combina dos de sus mejores activos: comida buena y barata de supermercado, y miradores con vistas espectaculares. Por cinco euros puedes montar un festín: pan recién horneado, queso curado, jamón, aceitunas, fruta de temporada... Llévalo a cualquier mirador y tienes el almuerzo con mejores vistas de la ciudad." },
      { tipo: "parrafo", texto: "Pingo Doce y Continente tienen secciones de comida preparada donde también encuentras ensaladas, empanadas, y platos listos para comer. Y en las panaderías de barrio (pastelarias) venden salgados: empanadas de carne, pastéis de bacalhau, rissóis de camarão... Perfectos para comer sobre la marcha." },
      { tipo: "subtitulo", texto: "Tres direcciones que no comparto con cualquiera" },
      { tipo: "parrafo", texto: "Hay sitios que dudo en incluir porque temo que la afluencia de visitantes cambie su esencia. Pero esta guía no tendría sentido si me guardara lo mejor, así que ahí van:" },
      { tipo: "parrafo", texto: "O Velho Eurico, en una esquina de Alfama que parece olvidada por el tiempo. Tiene cuatro mesas, una barra diminuta, y un menú que cambia según lo que António —el dueño, el cocinero y el camarero— haya comprado esa mañana. Ocho euros todo incluido. Hay que llegar temprano porque cuando se acaba, se acaba." },
      { tipo: "parrafo", texto: "Ponto Final, en Cacilhas, al otro lado del río. Llegas en ferry desde Cais do Sodré (diez minutos, dos euros), y comes en una terraza con vistas a la Lisboa que has dejado atrás. Pescado fresco a la parrilla, arroz de marisco, vino verde... Diez o doce euros por un almuerzo inolvidable." },
      { tipo: "parrafo", texto: "Cervejaria Ramiro no es barato —la cuenta puede subir fácilmente a treinta euros por persona—, pero incluyo la mención porque el marisco aquí es de otra categoría. Si algún día quieres darte un capricho, este es el lugar. Pide gambas al ajillo, percebes si es temporada, y termina con un prego no pão. La cola a veces es larga, pero puedes esperar tomando cervezas en la barra." },
      { tipo: "subtitulo", texto: "Señales de alarma: cómo detectar trampas para turistas" },
      { tipo: "parrafo", texto: "Después de años observando, he identificado patrones que casi siempre indican precios altos y calidad baja. Si un restaurante tiene fotos de los platos en la puerta, huye. Si el menú está traducido a más de tres idiomas, desconfía. Si hay alguien en la puerta invitándote a entrar, sigue caminando. Y si ves paella en un restaurante de Lisboa, date la vuelta: no estás en un sitio donde la autenticidad sea prioritaria." },
      { tipo: "parrafo", texto: "Las mejores señales son las contrarias: menú escrito a mano o en pizarra, parroquianos locales en las mesas, ruido de conversaciones en portugués, olor a comida casera que sale de la cocina. Confía en tu instinto: la diferencia entre un restaurante para turistas y uno auténtico suele notarse desde la puerta." }
    ]
  },
  "barrios-imprescindibles": {
    titulo: "Los 5 barrios de Lisboa que definen la ciudad",
    descripcion: "Cada zona cuenta una historia diferente. Aprende a leer Lisboa a través de sus calles, desde el bullicio de la Baixa hasta el silencio de Graça al amanecer.",
    imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    imageAlt: "Callejón escalonado de Alfama con casas encaladas, macetas junto a las puertas y tejados de teja",
    categoria: "Guías",
    fecha: "5 Dic 2024",
    minutos: 15,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa no es una ciudad que se entienda en plano. Hay que caminarla para comprender cómo cada colina guarda una personalidad distinta, cómo la luz cambia según la orientación de las calles, cómo el sonido del fado en Alfama da paso al bullicio juvenil del Bairro Alto apenas cruzas unas manzanas." },
      { tipo: "parrafo", texto: "He vivido en tres barrios diferentes durante mis años aquí, y cada mudanza fue como descubrir una ciudad nueva. El Lisboa que conoces depende enormemente de dónde duermas y por dónde camines. Esta guía intenta ayudarte a elegir bien, porque acertar con el barrio puede transformar completamente tu experiencia." },
      { tipo: "subtitulo", texto: "Baixa-Chiado: el corazón comercial con siglos de historia" },
      { tipo: "parrafo", texto: "El Marqués de Pombal reconstruyó este barrio desde cero después de que el terremoto de 1755 arrasara la ciudad. El resultado es una cuadrícula ordenada de calles anchas, edificios uniformes y plazas monumentales que contrastan con el caos medieval del resto de Lisboa. Aquí todo es llano —rareza absoluta en esta ciudad— y las conexiones de transporte son inmejorables." },
      { tipo: "parrafo", texto: "La Rua Augusta es el eje peatonal que conecta el Rossio con la Praça do Comércio, atravesando bajo un arco triunfal que enmarca el río Tajo. A ambos lados se suceden tiendas de cadena, cafeterías y restaurantes orientados al turismo. No es el Lisboa más auténtico, pero tiene una grandiosidad innegable que merece experimentarse al menos una vez." },
      { tipo: "parrafo", texto: "El Chiado, colina arriba, añade sofisticación literaria: aquí escribieron Pessoa y Eça de Queirós, aquí están las librerías más antiguas de la ciudad, los teatros, las tiendas de diseño portugués. El café A Brasileira, donde una estatua de Pessoa invita a sentarse a su lado, es parada obligatoria aunque solo sea para una foto." },
      { tipo: "lista", items: [
        "Para quién: Primera visita, movilidad reducida, viajes cortos donde prima la comodidad",
        "Puntos fuertes: Todo llano, metro en cada esquina, monumentos a pie",
        "Puntos débiles: Precios inflados en restaurantes, ambiente más turístico que local",
        "Hora mágica: Amanecer en la Praça do Comércio, cuando la plaza está vacía y el río brilla"
      ]},
      { tipo: "subtitulo", texto: "Alfama: el barrio que sobrevivió al terremoto" },
      { tipo: "parrafo", texto: "Mientras el resto de Lisboa quedó reducido a escombros en 1755, Alfama —construida sobre roca sólida— resistió el temblor. Por eso aquí pervive el trazado medieval de callejuelas estrechas, escaleras imposibles y casas que parecen sostenerse unas a otras. Perderse es inevitable y forma parte de la experiencia." },
      { tipo: "parrafo", texto: "El fado nació en estas calles. Por las noches, desde las ventanas de las tascas escapan las voces melancólicas que cantan a la saudade, esa nostalgia portuguesa imposible de traducir. Los miradores de Santa Luzia y Portas do Sol ofrecen postales perfectas de tejados rojizos descendiendo hacia el río. El Castelo de São Jorge corona la colina como un guardián de piedra." },
      { tipo: "parrafo", texto: "Pero Alfama exige sacrificios. Las cuestas son brutales, no hay forma de evitarlas. Subir con maletas es una odisea. El ruido del tranvía 28 puede colarse en tu habitación a las siete de la mañana. Y en temporada alta, las calles principales se convierten en ríos de visitantes siguiendo paraguas de guías turísticos." },
      { tipo: "lista", items: [
        "Para quién: Parejas románticas, fotógrafos, amantes del fado, segunda visita",
        "Puntos fuertes: El barrio más fotogénico, fado auténtico, miradores espectaculares",
        "Puntos débiles: Cuestas agotadoras, ruido de tranvías, difícil con movilidad reducida",
        "Hora mágica: Atardecer desde cualquier mirador, cuando el sol tiñe los tejados de oro"
      ]},
      { tipo: "subtitulo", texto: "Bairro Alto: donde Lisboa sale de fiesta" },
      { tipo: "parrafo", texto: "De día, el Bairro Alto parece un barrio residencial cualquiera: edificios con ropa tendida, tiendas de barrio, vecinos que se saludan por la calle. Pero cuando cae el sol, las persianas de metal de decenas de bares se levantan y las calles se llenan de gente con vasos en la mano. La fiesta se desborda a las aceras, la música se mezcla, y Lisboa muestra su cara más desinhibida." },
      { tipo: "parrafo", texto: "Los bares aquí son diminutos —algunos apenas caben diez personas— y cada uno tiene su tribu: hay locales de jazz, antros de rock, terrazas LGTB+, tabernas de fado vadio (improvisado). La tradición dicta comprar bebidas baratas y consumirlas en la calle, saltando de local en local hasta que amanece." },
      { tipo: "parrafo", texto: "Alojarse aquí tiene pros y contras evidentes. Si vienes a Lisboa a vivir la noche, no hay mejor ubicación. Si buscas descanso, las noches de jueves a sábado pueden ser complicadas: el ruido dura hasta las cuatro o cinco de la madrugada. Entre semana el barrio duerme, y los domingos por la mañana tiene una calma casi irreal." },
      { tipo: "lista", items: [
        "Para quién: Jóvenes, grupos de amigos, noctámbulos, viajeros que vienen a la fiesta",
        "Puntos fuertes: Mejor vida nocturna de la ciudad, bares únicos, ambiente joven",
        "Puntos débiles: Ruido hasta muy tarde, calles sucias por la mañana, no ideal para familias",
        "Hora mágica: Medianoche de un viernes, cuando las calles vibran con energía"
      ]},
      { tipo: "subtitulo", texto: "Belém: monumentos junto al agua" },
      { tipo: "parrafo", texto: "Desde aquí partieron las carabelas que expandieron el imperio portugués por medio mundo. Los Jerónimos, la Torre de Belém y el Padrão dos Descobrimentos conmemoran esa era de navegantes y exploradores. Es el Lisboa monumental, el de las postales históricas y los libros de texto." },
      { tipo: "parrafo", texto: "El barrio tiene un ritmo diferente al centro: más espacioso, más tranquilo, con un paseo marítimo donde corredores y ciclistas aprovechan las mañanas. Los jardines del Palacio de Belém —residencia oficial del presidente— añaden zonas verdes que escasean en otras partes de la ciudad." },
      { tipo: "parrafo", texto: "Y luego está la pastelería. Pastéis de Belém lleva desde 1837 horneando los famosos pasteles con la receta original del monasterio. La cola puede ser larga, pero el interior del local —salones con azulejos del siglo XIX— justifica la espera. Pídelos calientes, con canela y azúcar glas, y entiende por qué millones de personas peregrinan hasta aquí cada año." },
      { tipo: "lista", items: [
        "Para quién: Amantes de la historia, familias con niños, días de paseo tranquilo",
        "Puntos fuertes: Monumentos impresionantes, paseo junto al río, Pastéis de Belém",
        "Puntos débiles: Alejado del centro (20 min en tranvía), poco ambiente nocturno",
        "Hora mágica: Mañana temprano, antes de que lleguen los autobuses turísticos"
      ]},
      { tipo: "subtitulo", texto: "Príncipe Real: el barrio que todo el mundo querría como vecino" },
      { tipo: "parrafo", texto: "Si Lisboa tuviera un barrio de revista de tendencias, sería este. Tiendas de diseño portugués, cafeterías de especialidad, restaurantes con carta de autor, boutiques de moda sostenible... Príncipe Real concentra lo más contemporáneo de la ciudad sin perder el encanto de los edificios centenarios." },
      { tipo: "parrafo", texto: "El jardín que da nombre al barrio es su corazón verde: un cedro gigante cuyas ramas forman una carpa natural, bancos donde leer el periódico, un quiosco con terraza donde tomar el vermú. Los domingos hay mercadillo ecológico, y las tardes de verano el jardín se llena de picnics improvisados." },
      { tipo: "parrafo", texto: "Es también el barrio más abiertamente LGTB+ de Lisboa, con locales inclusivos y un ambiente de tolerancia que se percibe en cada esquina. Las librerías aquí tienen sección de estudios queer, las cafeterías cuelgan banderas arcoíris, y el Pride de Lisboa tiene aquí uno de sus epicentros." },
      { tipo: "lista", items: [
        "Para quién: Hipsters, foodies, viajeros LGTB+, estancias largas, nómadas digitales",
        "Puntos fuertes: Tiendas y restaurantes de diseño, jardín precioso, ambiente tolerante",
        "Puntos débiles: Precios más altos, alejado de monumentos principales, cuestas para llegar",
        "Hora mágica: Domingo a mediodía, brunch en cualquier terraza del jardín"
      ]},
      { tipo: "subtitulo", texto: "Cómo elegir tu barrio base" },
      { tipo: "parrafo", texto: "Si es tu primera vez y tienes pocos días, Baixa-Chiado te permite moverte con facilidad y ver lo esencial sin complicaciones. Si vienes a enamorarte de Lisboa, Alfama tiene la magia que buscas aunque cueste algunas cuestas. Si la noche es tu prioridad, Bairro Alto no tiene rival. Y si prefieres un Lisboa más contemporáneo y tranquilo, Príncipe Real te espera." },
      { tipo: "tip", texto: "Un truco para indecisos: reserva las primeras noches en Baixa para orientarte, y las últimas en un barrio con más personalidad. Así combinas comodidad inicial con inmersión final." },
      { tipo: "enlace", texto: "Recorrer estos cinco barrios por tu cuenta funciona, pero un guía local te ahorra las horas de prueba y error que cuesta entender cómo encajan entre sí.", href: "/free-tours-lisboa#ruta-imprescindible", label: "Ver los free tours por el centro histórico" },
    ]
  },
  "evitar-turistadas-lisboa": {
    titulo: "Guía práctica para esquivar las trampas turísticas de Lisboa",
    descripcion: "Después de observar miles de errores ajenos, he compilado los tropiezos más comunes y cómo sortearlos para vivir la Lisboa real.",
    imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    imageAlt: "Calle empinada y tranquila de Lisboa que baja hacia el río Tajo",
    categoria: "Consejos",
    fecha: "1 Dic 2024",
    minutos: 13,
    contenido: [
      { tipo: "parrafo", texto: "Hay una escena que presencio casi cada día desde mi ventana en Alfama: grupos de turistas sudando bajo el sol del mediodía, arrastrando maletas por calles empedradas, siguiendo un paraguas mientras un guía recita datos que podrían leer en Wikipedia. Van a comer a restaurantes con menús plastificados, van a hacer cola dos horas para subir a un tranvía, y al final del día habrán gastado el triple de lo necesario viendo la mitad de lo que podrían." },
      { tipo: "parrafo", texto: "No es culpa suya. Lisboa se ha convertido en un destino masivo, y la industria turística ha respondido creando circuitos optimizados para extraer dinero, no para ofrecer experiencias memorables. Pero con algunos ajustes simples —de horarios, de rutas, de actitud— puedes escapar de esa maquinaria y descubrir la ciudad que los lisboetas habitamos a diario." },
      { tipo: "subtitulo", texto: "El error del restaurante con fotos en la puerta" },
      { tipo: "parrafo", texto: "Hay una correlación casi perfecta entre la cantidad de fotos de platos en la entrada de un restaurante y la probabilidad de que la comida sea mediocre y cara. Los locales donde comen los portugueses no necesitan mostrar imágenes de lo que sirven: su clientela ya lo sabe, lleva años viniendo." },
      { tipo: "parrafo", texto: "La Rua Augusta y sus alrededores concentran docenas de establecimientos con menús traducidos a seis idiomas, camareros en la puerta invitándote a entrar, y precios que duplican o triplican lo normal. El mismo bacalhau que aquí cuesta veinte euros lo encuentras por nueve en Mouraria o Graça, cocinado con más cariño y servido en porciones más generosas." },
      { tipo: "parrafo", texto: "La solución es sencilla: camina cinco o diez minutos fuera del circuito evidente. Busca locales donde escuches portugués, donde las mesas estén ocupadas por gente que parece del barrio, donde el menú esté escrito a mano en una pizarra. Esos son los sitios donde merece la pena sentarse." },
      { tipo: "subtitulo", texto: "El tranvía 28 a las horas equivocadas" },
      { tipo: "parrafo", texto: "El tranvía amarillo serpenteando por las calles de Alfama es una de las imágenes más icónicas de Lisboa. También es una de las experiencias más frustrantes si no sabes cómo abordarla. Entre las diez de la mañana y las seis de la tarde, las colas en las paradas principales pueden superar la media hora, los vagones van atestados, y los carteristas aprovechan el caos para hacer su agosto." },
      { tipo: "parrafo", texto: "Hay varias formas de disfrutar el tranvía sin sufrimiento. La primera es madrugar: antes de las nueve de la mañana los vagones van medio vacíos y puedes elegir asiento junto a la ventanilla. La segunda es subir en paradas intermedias, no en las terminales: Campo de Ourique o Prazeres tienen mucha menos demanda que Martim Moniz." },
      { tipo: "parrafo", texto: "Y la tercera, mi favorita, es olvidarte del 28 y probar el tranvía 12, que hace un recorrido similar por Alfama pero sin el aura turística. Mismo encanto, mismas cuestas, una décima parte de la gente." },
      { tipo: "subtitulo", texto: "El Castillo al mediodía de agosto" },
      { tipo: "parrafo", texto: "El Castelo de São Jorge merece una visita: las vistas son las más completas de la ciudad, la historia es fascinante, y los jardines ofrecen sombra y pavos reales. Pero la experiencia puede ser gloriosa o terrible según cuándo vayas." },
      { tipo: "parrafo", texto: "A las doce del mediodía en verano, el sol cae vertical, no hay sombra en las murallas, las colas para entrar se alargan, y los grupos de cincuenta personas con auriculares se amontonan en los mismos puntos panorámicos. La magia se evapora entre el calor y las aglomeraciones." },
      { tipo: "parrafo", texto: "La alternativa es visitar a primera hora de la mañana —las puertas abren a las nueve— o al final de la tarde, cuando la luz es más suave y los grupos organizados ya se han marchado. El atardecer desde las murallas, con la ciudad dorándose bajo tus pies, es uno de esos momentos que justifican haber pagado la entrada." },
      { tipo: "subtitulo", texto: "El error del mirador sin estrategia" },
      { tipo: "parrafo", texto: "Lisboa tiene decenas de miradores repartidos por sus siete colinas. Intentar verlos todos en un día es una receta para terminar agotado, con las piernas destrozadas y sin haber disfrutado ninguno. He visto viajeros que suben y bajan colinas al azar, repitiendo desniveles innecesarios y llegando a cada mirador cuando la luz ya no es favorable." },
      { tipo: "parrafo", texto: "Lo que funciona es planificar rutas que conecten miradores cercanos aprovechando la gravedad: empieza arriba, ve bajando, y deja los que están en otras colinas para otro día. El Mirador da Senhora do Monte, Graça, Portas do Sol y Santa Luzia pueden encadenarse en un paseo descendente que te deposita en Alfama sin subidas innecesarias." },
      { tipo: "subtitulo", texto: "Pagar sesenta euros por fado turístico" },
      { tipo: "parrafo", texto: "El fado es el alma musical de Lisboa, una expresión artística que UNESCO declaró Patrimonio Inmaterial de la Humanidad. Pero la versión que se ofrece en muchos locales turísticos tiene poco que ver con el fado real: cenas obligatorias de menú fijo, canciones interpretadas sin emoción, y precios que rondan los cincuenta o sesenta euros por persona." },
      { tipo: "parrafo", texto: "El fado auténtico se escucha en tascas pequeñas donde la cantante puede ser una vecina que se levanta entre plato y plato, donde el silencio respetuoso sustituye al ruido de cubertería, donde la emoción es palpable porque quien canta lo hace de corazón, no por un sueldo." },
      { tipo: "parrafo", texto: "Tasca do Chico en el Bairro Alto, Mesa de Frades en Alfama, Senhor Vinho en Lapa... Hay locales donde por veinte o treinta euros cenas bien, bebes vino, y escuchas fado del que pone la piel de gallina. Solo hay que saber buscarlos." },
      { tipo: "subtitulo", texto: "Señales de alarma que nunca fallan" },
      { tipo: "parrafo", texto: "Después de años observando, he identificado patrones que casi siempre indican trampa turística. Si hay alguien en la puerta invitándote a entrar, desconfía: los buenos restaurantes no necesitan captar clientes en la calle. Si ves fotos de paella en Lisboa, sal corriendo: estás ante un lugar que prioriza lo que los turistas creen querer sobre lo que la ciudad realmente ofrece." },
      { tipo: "parrafo", texto: "Si el menú está traducido a más idiomas de los que puedes contar con una mano, probablemente no sea donde comen los vecinos. Si la terraza tiene vistas perfectas pero no hay ningún portugués sentado, algo falla. Confía en tu instinto: la diferencia entre experiencia auténtica y parque temático suele percibirse desde la puerta." },
      { tipo: "tip", texto: "Mi consejo definitivo: pregunta a cualquier lisboeta dónde come él. No dónde llevaría a su madre de visita, sino dónde cena un martes cualquiera. Esa respuesta vale más que cien reseñas de TripAdvisor." }
    ]
  },
  "como-ir-sintra-desde-lisboa": {
    titulo: "Como ir a Sintra desde Lisboa",
    descripcion: "Tren, bus o tour? Te explicamos todas las opciones y precios.",
    imagen: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=1200",
    imageAlt: "Fachada neomanuelina de un palacio de Sintra con visitantes en la terraza",
    categoria: "Transporte",
    fecha: "15 Dic 2024",
    minutos: 5,
    contenido: [
      { tipo: "parrafo", texto: "Sintra es la excursion obligatoria desde Lisboa. Palacios de cuento, bosques magicos, y vistas increibles a solo 40 minutos. Pero hay varias formas de llegar y no todas son iguales." },
      { tipo: "subtitulo", texto: "Opcion 1: Tren (la mejor)" },
      { tipo: "parrafo", texto: "El tren sale de la estacion Rossio (centro de Lisboa) cada 20 minutos. El viaje dura 40 minutos y cuesta 2.30 euros por trayecto. Es la opcion mas barata y fiable." },
      { tipo: "lista", items: [
        "Estacion: Lisboa Rossio (linea verde de metro)",
        "Frecuencia: Cada 20 minutos",
        "Duracion: 40 minutos",
        "Precio: 2.30 EUR (ida), 4.60 EUR (ida y vuelta)",
        "Horario: 6:00 - 1:00"
      ]},
      { tipo: "tip", texto: "Compra la tarjeta Viva Viagem en cualquier estacion (0.50 euros) y cargala con el billete. Puedes usarla tambien para metro y buses en Lisboa." },
      { tipo: "subtitulo", texto: "Opcion 2: Tour organizado" },
      { tipo: "parrafo", texto: "Si no quieres complicarte, los tours incluyen transporte, guia, y a veces entradas. Cuestan entre 50-80 euros pero te ahorran planificar." },
      { tipo: "lista", items: [
        "Ventaja: Todo organizado, no piensas en nada",
        "Desventaja: Poco tiempo en cada sitio, grupos grandes",
        "Precio: 50-80 EUR por persona",
        "Duracion: 8 horas aproximadamente"
      ]},
      { tipo: "subtitulo", texto: "Opcion 3: Coche de alquiler" },
      { tipo: "parrafo", texto: "Solo si vais varios y quereis flexibilidad total. El parking en Sintra es dificil y caro en verano. No lo recomiendo para un dia." },
      { tipo: "subtitulo", texto: "Una vez en Sintra: como moverse" },
      { tipo: "parrafo", texto: "El pueblo de Sintra es pequeno, pero los palacios estan en la montana. Tienes dos opciones:" },
      { tipo: "lista", items: [
        "Bus 434: Circuito turistico que conecta estacion-pueblo-Pena-Moorish Castle. 7 euros todo el dia.",
        "Andando: Desde el pueblo al Palacio da Pena son 45 minutos subiendo. Duro pero bonito.",
        "Tuk-tuk: 30-40 euros el recorrido completo. Negociable."
      ]},
      { tipo: "tip", texto: "Compra las entradas online con antelacion. En verano las colas son de 1-2 horas para el Palacio da Pena." },
      { tipo: "subtitulo", texto: "Itinerario recomendado" },
      { tipo: "lista", items: [
        "8:30 - Tren desde Rossio",
        "9:15 - Llegas a Sintra, bus 434 directo a Pena",
        "9:45-12:00 - Palacio da Pena (2 horas minimo)",
        "12:00-13:00 - Castelo dos Mouros (opcional, vistas increibles)",
        "13:30 - Baja al pueblo, come en Casa Piriquita (los famosos travesseiros)",
        "15:00-16:30 - Quinta da Regaleira (jardines y grutas)",
        "17:00 - Tren de vuelta a Lisboa"
      ]},
      { tipo: "parrafo", texto: "Este itinerario y muchos mas detalles estan en nuestro pack de 3 dias, que incluye Sintra con mapas y horarios optimizados." }
    ]
  },
  "barrios-lisboa-donde-alojarse": {
    titulo: "Dónde alojarse en Lisboa: guía honesta barrio a barrio",
    seoTitle: "Dónde alojarse en Lisboa | Barrio a barrio",
    descripcion: "Analizamos cada barrio de Lisboa para ayudarte a elegir dónde quedarte: Baixa, Alfama, Bairro Alto, Príncipe Real, Intendente y Belém. Precios reales, pros, contras y para quién es ideal cada zona.",
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    imageAlt: "Dos viajeros con mochila caminando por una calle residencial de Lisboa",
    categoria: "Alojamiento",
    fecha: "20 Ene 2026",
    minutos: 13,
    contenido: [
      { tipo: "parrafo", texto: "La primera vez que reservé alojamiento en Lisboa lo hice guiándome exclusivamente por el precio y las fotos. El apartamento era precioso, las reseñas impecables, y la tarifa imbatible. Lo que no vi fue que estaba al final de una calle de empedrado con una pendiente del 22%, a quince minutos a pie cuesta arriba desde el metro más cercano. Llegué con la maleta de veinte kilos después de un vuelo nocturno y tardé veinte minutos en cubrir esos trescientos metros." },
      { tipo: "parrafo", texto: "Lisboa es una ciudad de siete colinas. No es un tópico turístico ni una metáfora: es topografía real que afecta directamente a tu experiencia diaria dependiendo de dónde te alojes. Esta guía nace de ese aprendizaje y de años de conocer la ciudad barrio a barrio, probando distintas zonas en distintos momentos del año, para ayudarte a tomar la decisión correcta desde el primer día." },
      { tipo: "subtitulo", texto: "El factor que nadie te cuenta: las colinas" },
      { tipo: "parrafo", texto: "Antes de hablar de barrios, hay que entender la geografía. Lisboa tiene zonas completamente planas —fundamentalmente la Baixa, el frente del río, y los accesos al metro— y zonas con pendientes brutales que hacen que las maletas con ruedas sean prácticamente inútiles. Alfama, Graça, Mouraria y parte del Bairro Alto entran en la categoría de «subidas que te recordarán durante días»." },
      { tipo: "parrafo", texto: "Si viajas con movilidad reducida, ancianos, o niños pequeños en carrito, este factor es decisivo. Si eres viajero activo y disfrutas caminar, los barrios altos ofrecen autenticidad y vistas que las zonas planas no tienen. Ninguna opción es objetivamente mejor: depende de tus prioridades." },
      { tipo: "subtitulo", texto: "Baixa-Chiado: el corazón práctico de Lisboa" },
      { tipo: "parrafo", texto: "La Baixa es el único barrio grande de Lisboa que el Marqués de Pombal reconstruyó en cuadrícula perfecta después del terremoto de 1755. El resultado es una zona completamente plana, con calles anchas, metro en varias esquinas, y todos los servicios a mano. No es el Lisboa más romántico, pero es el más cómodo para un primer viaje." },
      { tipo: "parrafo", texto: "El Chiado, la zona que asciende suavemente hacia el Bairro Alto, añade una capa de sofisticación cultural: librerías centenarias, teatros, tiendas de diseño portugués, y los mejores cafés de la ciudad. La combinación Baixa-Chiado ofrece comodidad logística sin renunciar completamente al ambiente de barrio." },
      { tipo: "lista", items: [
        "Terreno: completamente plano, ideal con maletas o movilidad reducida",
        "Transporte: metro en Baixa-Chiado, Rossio y Cais do Sodré, autobuses frecuentes",
        "Precio medio alojamiento: 90-160 EUR por noche",
        "Puntos fuertes: céntrico, conexiones inmejorables, todo accesible a pie",
        "Puntos débiles: muy turístico, restaurantes caros en la zona peatonal, poco ambiente local nocturno",
        "Mejor para: primera visita, familias, viajes cortos, movilidad reducida"
      ]},
      { tipo: "tip", texto: "Si te alojas en la Baixa, busca apartamentos en las calles paralelas a la Rua Augusta, no en la zona peatonal. Estarás igual de bien ubicado con menos ruido de grupos turísticos y precios más razonables." },
      { tipo: "subtitulo", texto: "Alfama: la postal de Lisboa, pero con trampa" },
      { tipo: "parrafo", texto: "Alfama es la imagen que todo el mundo tiene de Lisboa: callejuelas con ropa tendida, azulejos desconchados, el sonido del fado escapando de las tascas, y el tranvía 28 trepando por pendientes imposibles. Es el barrio más fotogénico de la ciudad y también el más exigente para vivir en él durante unos días." },
      { tipo: "parrafo", texto: "Las pendientes de Alfama no son decorativas. Son escalinatas largas, adoquines irregulares, y calles que suben sin parar desde el río hasta el Castillo. Si te alojas aquí, calculará parte de tu energía diaria en superar desniveles. Por otra parte, despertarte con vistas al Tajo desde la terraza de un apartamento en Alfama es una experiencia que no da ningún otro barrio de la ciudad." },
      { tipo: "lista", items: [
        "Terreno: muy empinado, muchas escalinatas, difícil con maletas grandes",
        "Transporte: tranvía 28 (lento y lleno), autobuses esporádicos, a pie desde el metro de Martim Moniz (15 min cuesta arriba)",
        "Precio medio alojamiento: 75-140 EUR por noche",
        "Puntos fuertes: autenticidad máxima, fado, miradores increíbles, ambiente romántico",
        "Puntos débiles: acceso complicado, ruido del tranvía de noche, cuestas agotadoras",
        "Mejor para: parejas en segunda visita, fotógrafos, viajeros que buscan autenticidad sobre comodidad"
      ]},
      { tipo: "subtitulo", texto: "Bairro Alto y Chiado: el barrio de los extremos" },
      { tipo: "parrafo", texto: "El Bairro Alto es literalmente el «barrio alto» de Lisboa: sube por las colinas al oeste del Chiado y transforma su personalidad radicalmente según la hora. De día es un barrio tranquilo de calles angostas, lavanderías de barrio, gatos dormitando en los portales y vecinos que llevan décadas viviendo aquí. De noche, especialmente de jueves a sábado, se convierte en el epicentro de la vida nocturna de la ciudad." },
      { tipo: "parrafo", texto: "Alojarse aquí tiene una paradoja: si disfrutas la fiesta, estarás en el centro de todo pero dormirás poco. Si prefieres tranquilidad, tendrás ruido hasta las cuatro de la mañana en fin de semana. La solución para quienes buscan el ambiente del barrio sin la noche loca es quedarse en el Chiado, la zona de conexión entre la Baixa y el Bairro Alto, que mantiene el carácter de barrio sin el exceso nocturno." },
      { tipo: "lista", items: [
        "Terreno: pendientes moderadas, más manejable que Alfama",
        "Transporte: metro Chiado y Baixa-Chiado, elevador de Santa Justa",
        "Precio medio alojamiento: 70-130 EUR por noche",
        "Puntos fuertes: ambiente joven, bares y restaurantes, buena ubicación para explorar",
        "Puntos débiles: ruido nocturno intenso jueves-sábado, menos auténtico que zonas más residenciales",
        "Mejor para: grupos de amigos, viajeros jóvenes, amantes de la vida nocturna"
      ]},
      { tipo: "subtitulo", texto: "Príncipe Real: el barrio para quedarse más tiempo" },
      { tipo: "parrafo", texto: "Príncipe Real es el barrio donde viven los lisboetas que pueden permitírselo. Diseñadores, profesionales creativos, expats de largo recorrido. Tiene un jardín central con mercado de fin de semana, tiendas de decoración y moda independiente, los mejores brunch de la ciudad, y una atmósfera que combina lo residencial con lo sofisticado sin caer en el exceso turístico." },
      { tipo: "parrafo", texto: "El precio refleja su popularidad: alojarse aquí cuesta más que en otras zonas equivalentes, y las opciones son más limitadas porque hay menos oferta hotelera y más apartamentos de temporada que se van a largo plazo. Sin embargo, para estancias de cinco días o más, es el barrio que más se parece a vivir en Lisboa en lugar de visitarla." },
      { tipo: "lista", items: [
        "Terreno: pendiente moderada, más llevadero que Alfama",
        "Transporte: metro Rato o Baixa-Chiado, autobuses frecuentes",
        "Precio medio alojamiento: 110-190 EUR por noche",
        "Puntos fuertes: ambiente residencial auténtico, excelente gastronomía, tranquilo",
        "Puntos débiles: más caro, menos oferta de alojamiento, alejado de algunos monumentos",
        "Mejor para: viajes largos, parejas que buscan ambiente de barrio, segunda o tercera visita"
      ]},
      { tipo: "subtitulo", texto: "Intendente y Mouraria: la Lisboa que se está descubriendo" },
      { tipo: "parrafo", texto: "Hace diez años, pocos extranjeros pedían alojamiento en Intendente o Mouraria. Eran barrios trabajadores, multiculturales, con una reputación que los guías de viaje preferían ignorar. Hoy son las zonas de mayor crecimiento en calidad de alojamiento y gastronomía de Lisboa, manteniendo todavía un carácter genuino que los barrios más turísticos han perdido." },
      { tipo: "parrafo", texto: "Mouraria es el barrio de origen del fado, más antiguo que Alfama en esa tradición. Sus tascas son de las más auténticas de la ciudad. Intendente, la plaza central del área, ha experimentado una transformación ordenada que ha traído cafés de especialidad, galerías y tiendas de diseño sin desplazar a los vecinos de siempre. Los precios son entre un 20 y un 30% más bajos que en el Chiado por un nivel de autenticidad mayor." },
      { tipo: "lista", items: [
        "Terreno: mezcla de zonas planas y pendientes moderadas",
        "Transporte: metro Intendente y Martim Moniz, autobuses frecuentes",
        "Precio medio alojamiento: 60-110 EUR por noche",
        "Puntos fuertes: autenticidad, precios más bajos, gastronomía excelente, en proceso de descubrimiento",
        "Puntos débiles: menos monumentos a pie, zona en transición (convive lo nuevo y lo antiguo)",
        "Mejor para: viajeros con experiencia, quienes buscan Lisboa fuera del circuito turístico"
      ]},
      { tipo: "subtitulo", texto: "Belém: la Lisboa monumental junto al río" },
      { tipo: "parrafo", texto: "Belém no es exactamente un barrio en el sentido urbano: es una extensión al oeste de Lisboa, junto al Tajo, donde el Marqués de Pombal concentró los grandes monumentos de la era de los Descubrimientos. La Torre de Belém, el Monasterio de los Jerónimos, el Padrão dos Descobrimentos, el Centro Cultural de Belém y los pastéis originales de la Fábrica Antiga están todos en un radio de diez minutos a pie." },
      { tipo: "parrafo", texto: "El problema de alojarse en Belém es que cuando se hace de noche y los monumentos cierran, el barrio queda prácticamente muerto. Los restaurantes del paseo marítimo son correctos pero orientados al turismo de paso. Para explorar Alfama, el Chiado o el Bairro Alto necesitarás coger el tranvía 15E o un Uber. Es la zona perfecta para pasar el día, pero un poco solitaria para quedarse a dormir a menos que busques exactamente esa tranquilidad." },
      { tipo: "lista", items: [
        "Terreno: completamente plano, junto al río",
        "Transporte: tranvía 15E al centro (25 min), autobuses, tren de cercanías",
        "Precio medio alojamiento: 75-145 EUR por noche",
        "Puntos fuertes: tranquilidad, monumentos a pie, paseo marítimo, sin ruido nocturno",
        "Puntos débiles: alejado del centro animado, poco ambiente nocturno, dependencia del transporte",
        "Mejor para: familias con niños, amantes de la historia, quienes valoran la tranquilidad"
      ]},
      { tipo: "subtitulo", texto: "Mi recomendación final según tu perfil" },
      { tipo: "parrafo", texto: "Primera vez en Lisboa con 2-3 días: Baixa-Chiado sin dudarlo. La comodidad logística en un primer viaje vale más que la autenticidad de un barrio. Tendrás todo a pie, el transporte funciona solo, y podrás dedicar tu energía a descubrir la ciudad en lugar de a encontrar cómo llegar a ella." },
      { tipo: "parrafo", texto: "Segunda visita o más de cuatro días: Príncipe Real o Intendente. Ya conoces los monumentos principales y puedes permitirte el lujo de vivir más despacio, desayunar como un local, perderte por calles sin agenda fija. Esa es la Lisboa que más engancha." },
      { tipo: "parrafo", texto: "Pareja romántica que busca la postal: Alfama, asumiendo las cuestas como parte de la experiencia. El esfuerzo compensa cuando abres las persianas con el Tajo de fondo y el silencio del amanecer antes de que lleguen los grupos de turistas." }
    ]
  },
  "pasteles-de-belem": {
    titulo: "Pastéis de Belém: historia, secretos y la forma correcta de comerlos",
    seoTitle: "Pastéis de Belém | Historia y secretos",
    descripcion: "La receta que llevan custodiando desde 1837, por qué no es lo mismo que un pastel de nata cualquiera, y cómo evitar la cola sin renunciar a la experiencia.",
    imagen: "/images/actividades/pasteis-de-belem.webp",
    imageAlt: "Cuatro pastéis de Belém en un plato, junto a la caja azul de la pastelería",
    categoria: "Gastronomía",
    fecha: "28 Nov 2024",
    minutos: 11,
    fuentes: [
      { label: "Pastéis de Belém — horarios y la pastelería original", href: "https://pasteisdebelem.pt/" },
    ],
    contenido: [
      { tipo: "parrafo", texto: "Hay una imagen que se repite cada mañana frente al número 84-92 de la Rua de Belém: decenas de personas formando una cola que serpentea por la acera, consultando relojes, estirando cuellos para calcular cuánto falta. Desde 1837, la Fábrica dos Pastéis de Belém lleva provocando esta escena con un producto aparentemente simple: un hojaldre crujiente relleno de crema de huevo." },
      { tipo: "parrafo", texto: "Pero llamarlo 'simple' sería injusto. La receta original, creada por los monjes del Monasterio de los Jerónimos antes de la extinción de las órdenes religiosas, permanece guardada bajo siete llaves. Solo tres personas en el mundo conocen la fórmula completa, y nunca viajan juntas por si ocurriera una desgracia. El secreto lleva casi dos siglos transmitiéndose de maestro a aprendiz, y la empresa defiende que jamás ha sido replicado con exactitud." },
      { tipo: "enlace", texto: "La ficha de la pastelería reúne la ubicación y los datos prácticos para combinar la parada con los monumentos de Belém.", href: "/actividades/pasteis-de-belem", label: "Planificar la visita a Pastéis de Belém" },
      { tipo: "subtitulo", texto: "Pastel de Belém versus pastel de nata: no son lo mismo" },
      { tipo: "parrafo", texto: "Esta distinción genera confusión entre los visitantes, pero los portugueses la tienen clarísima. Pastel de nata es el nombre genérico del dulce: base de hojaldre, crema de huevo, toque caramelizado arriba. Puedes encontrarlo en cualquier pastelería del país, con calidades que van de lo sublime a lo industrial." },
      { tipo: "parrafo", texto: "Pastel de Belém, en cambio, es una denominación de origen. Solo puede llamarse así el que sale de esta fábrica concreta, elaborado con la receta original del monasterio. La diferencia se nota al morder: el hojaldre es más delicado, con capas finísimas que crujen sin deshacerse; la crema tiene una textura más densa y un sabor que recuerda vagamente a canela aunque no la lleve dentro; el caramelizado superior forma burbujas doradas que contrastan con la suavidad del relleno." },
      { tipo: "parrafo", texto: "¿Merece la pena la cola por esa diferencia? Depende de cuánto valores la autenticidad y la historia. Un buen pastel de nata de Manteigaria puede ser igual de delicioso, pero la experiencia de comerlo en el salón centenario de Belém, rodeado de azulejos del siglo XIX y con el rumor de tres siglos de tradición pastelera, es irreplicable." },
      { tipo: "subtitulo", texto: "Cómo funciona la cola (y cómo esquivarla)" },
      { tipo: "parrafo", texto: "El local tiene dos colas separadas que la mayoría de visitantes no distingue. La cola exterior, la que serpentea por la calle, es para comprar pasteles para llevar. Aquí puedes pedir una caja de seis, doce o más unidades, pagar, y marcharte. Suele moverse relativamente rápido porque las transacciones son breves." },
      { tipo: "parrafo", texto: "La otra cola, menos visible, da acceso al salón interior. Aquí te sientas, te traen los pasteles calientes en un plato con los dispensadores de canela y azúcar, y puedes acompañarlos de café, zumo o incluso un vino de Madeira si te sientes decadente a media mañana. Esta cola paradójicamente suele ser más corta, porque muchos visitantes no saben que existe." },
      { tipo: "parrafo", texto: "Mi recomendación: olvida la cola de la calle y ve directo al salón. Sí, tardarás un poco más en ser atendido una vez sentado, pero la experiencia es infinitamente superior. Además, los pasteles del salón vienen recién salidos del horno, mientras que los de llevar pueden llevar unos minutos en la vitrina." },
      { tipo: "subtitulo", texto: "Los horarios que los lisboetas conocen" },
      { tipo: "parrafo", texto: "El establecimiento abre a las ocho de la mañana y cierra a las once de la noche. Pero no todas las horas son iguales. El pico máximo de afluencia ocurre entre las once de la mañana y las cuatro de la tarde, cuando coinciden los grupos organizados que visitan el monasterio, las familias que vienen de excursión, y los cruceristas que desembarcan en masa." },
      { tipo: "parrafo", texto: "Las ventanas de tranquilidad son predecibles: primera hora de la mañana (entre ocho y nueve y media) y última hora de la tarde (a partir de las siete). Entre semana siempre hay menos gente que los fines de semana. Y los días de lluvia, curiosamente, son los mejores: muchos visitantes cancelan planes de exterior, y el local queda sorprendentemente vacío para lo habitual." },
      { tipo: "tip", texto: "Si llegas temprano entre semana, puedes sentarte en el salón del fondo —el menos conocido— y disfrutar de los pasteles en soledad casi monástica." },
      { tipo: "subtitulo", texto: "El ritual de comerlos correctamente" },
      { tipo: "parrafo", texto: "Hay una forma correcta y muchas formas incorrectas de disfrutar un pastel de Belém. La correcta empieza por pedirlo caliente: si te lo traen tibio, devuélvelo educadamente y pide uno recién horneado. La diferencia entre un pastel caliente y uno que lleva diez minutos en la vitrina es abismal." },
      { tipo: "parrafo", texto: "Sobre la mesa encontrarás dos dispensadores: uno de canela en polvo y otro de azúcar glas. La tradición dicta espolvorear ambos generosamente sobre el pastel. Algunos puristas argumentan que la canela interfiere con el sabor original de la crema, pero la combinación de dulce, especiado y cremoso es precisamente lo que ha convertido este dulce en leyenda." },
      { tipo: "parrafo", texto: "El primer bocado es crucial: tiene que incluir hojaldre, crema y la capa caramelizada superior. Cerrar los ojos ayuda a concentrarse en las texturas. Si al terminar no te has manchado los dedos de crema y azúcar, probablemente lo hayas comido con demasiada cautela." },
      { tipo: "subtitulo", texto: "Los salones interiores: viaje en el tiempo" },
      { tipo: "parrafo", texto: "Más allá del mostrador de venta, el local se extiende en una serie de salones que parecen congelados en el tiempo. Los azulejos azules y blancos que cubren las paredes datan del siglo XIX. Las mesas de mármol han sostenido millones de platitos con pasteles. La luz natural que entra por los patios interiores crea una atmósfera de café literario antiguo." },
      { tipo: "parrafo", texto: "Hay varios salones con ambientes diferentes: el primero es el más concurrido, el del fondo el más tranquilo, y hay uno con vistas a la fábrica donde puedes observar a los pasteleros trabajando a través de un cristal. Este último suele tener una cola específica pero merece la espera si te interesa ver el proceso artesanal." },
      { tipo: "subtitulo", texto: "¿Cuántos pedir? La eterna pregunta" },
      { tipo: "parrafo", texto: "Mi consejo: empieza por dos. Son pequeños —caben en la palma de la mano— pero más contundentes de lo que parecen. La crema de huevo llena bastante, y después de tres o cuatro empiezas a perder la capacidad de apreciar los matices." },
      { tipo: "parrafo", texto: "Si compras para llevar, ten en cuenta que aguantan bien unas horas pero pierden mucho al día siguiente. El hojaldre se humedece con el tiempo y la magia del crujiente desaparece. Lo ideal es comprarlos justo antes de consumirlos, aunque eso implique hacer cola dos veces si quieres repetir por la tarde." },
      { tipo: "parrafo", texto: "Algunos visitantes compran cajas para llevar a casa de regalo. Funcionan si el viaje es corto, pero atravesar un aeropuerto y un vuelo en bodega no les sienta bien. Si quieres regalar la experiencia, mejor compra la lata decorativa que venden en la tienda: no incluye pasteles reales, pero al menos no llegarán aplastados." }
    ]
  },
  "mejores-pasteles-nata-lisboa": {
    titulo: "Los mejores pasteles de nata de Lisboa",
    descripcion: "Probamos 15 pastelerias para encontrar el pastel de nata perfecto.",
    imagen: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200",
    imageAlt: "Calle empinada de Lisboa entre fachadas de azulejo, bajando hacia el río Tajo",
    categoria: "Gastronomía",
    fecha: "8 Dic 2024",
    minutos: 5,
    contenido: [
      { tipo: "parrafo", texto: "El pastel de nata es el dulce mas famoso de Portugal, y en Lisboa hay cientos de sitios donde probarlo. Pero no todos son iguales. He probado 15 pastelerias para encontrar los mejores." },
      { tipo: "subtitulo", texto: "Que hace un buen pastel de nata?" },
      { tipo: "lista", items: [
        "Hojaldre crujiente, no blando ni aceitoso",
        "Crema densa pero cremosa, no liquida",
        "Puntos quemados arriba (caramelizado)",
        "Recien hecho, templado, no frio de nevera"
      ]},
      { tipo: "subtitulo", texto: "1. Manteigaria (el mejor)" },
      { tipo: "parrafo", texto: "Para mi, el mejor de Lisboa. Los hacen delante de ti, siempre calientes, hojaldre perfecto. Hay dos locales: Chiado y Time Out Market. El de Chiado es mas autentico." },
      { tipo: "lista", items: [
        "Precio: 1.40 EUR",
        "Direccion: Rua do Loreto 2, Chiado",
        "Tip: Ve a media tarde, menos cola"
      ]},
      { tipo: "subtitulo", texto: "2. Pasteis de Belem" },
      { tipo: "parrafo", texto: "El mas famoso, con la receta original del Monasterio de los Jeronimos. Buenos, pero la cola puede ser de 30 minutos. Merecen la pena al menos una vez, especialmente comidos dentro del local historico." },
      { tipo: "lista", items: [
        "Precio: 1.30 EUR",
        "Direccion: Rua de Belem 84-92",
        "Tip: La cola de takeaway es mas rapida que la del salon"
      ]},
      { tipo: "subtitulo", texto: "3. Fabrica da Nata" },
      { tipo: "parrafo", texto: "Cadena moderna con varios locales. Consistentemente buenos, nunca espectaculares. Util porque siempre hay uno cerca y raramente hay cola." },
      { tipo: "subtitulo", texto: "4. Confeitaria Nacional" },
      { tipo: "parrafo", texto: "La pasteleria mas antigua de Lisboa (1829). Los pasteles de nata no son los mejores, pero el local historico y otros dulces tradicionales merecen la visita." },
      { tipo: "subtitulo", texto: "5. Aloma" },
      { tipo: "parrafo", texto: "Fuera del centro turistico (Campo de Ourique). Gano premio al mejor pastel de nata de Lisboa. Merece el viaje si te tomas en serio los dulces." },
      { tipo: "subtitulo", texto: "Pastelerias a evitar" },
      { tipo: "parrafo", texto: "Cualquier sitio que tenga los pasteles en nevera o que esten frios. Cualquier pasteleria en Rossio o la Baixa muy turistica. Si ves 'pastel de nata' a 3 euros, huye." },
      { tipo: "tip", texto: "El pastel de nata se come templado, con canela y azucar glass por encima. Pidelo siempre 'com canela'." },
      { tipo: "subtitulo", texto: "Bonus: Pastel de nata vegano" },
      { tipo: "parrafo", texto: "Si eres vegano, Copenhagen Coffee Lab en Principe Real tiene una version vegana bastante decente. No es igual, pero es una alternativa." }
    ]
  },
  "mejor-epoca-visitar-lisboa": {
    titulo: "Cuál es la Mejor Época para Visitar Lisboa",
    descripcion: "Clima mes a mes, precios reales y eventos para elegir cuándo viajar según tu estilo.",
    imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    imageAlt: "Gente sentada en un mirador de Lisboa al atardecer, con el castillo sobre la colina al fondo",
    categoria: "Planificación",
    fecha: "25 Nov 2024",
    minutos: 7,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa se disfruta todo el año, pero cada temporada tiene ventajas y desventajas. Depende de si priorizas clima, precios o ambiente." },
      { tipo: "subtitulo", texto: "Primavera (marzo-mayo)" },
      { tipo: "parrafo", texto: "Buen clima y menos turistas. Ideal para caminar y ver miradores sin colas." },
      { tipo: "subtitulo", texto: "Verano (junio-agosto)" },
      { tipo: "parrafo", texto: "Mucho sol, más gente y precios más altos. Perfecto si quieres playa." },
      { tipo: "subtitulo", texto: "Otoño (septiembre-noviembre)" },
      { tipo: "parrafo", texto: "Clima suave, atardeceres increíbles y menos masificación." },
      { tipo: "subtitulo", texto: "Invierno (diciembre-febrero): mi época favorita" },
      { tipo: "parrafo", texto: "Cuando le digo a alguien que mi época favorita para estar en Lisboa es el invierno, me miran como si estuviera loco. «Pero si en verano es cuando hay que ir», responden. Y yo pienso: exacto, en verano es cuando van todos, y por eso en invierno es cuando se disfruta de verdad." },
      { tipo: "parrafo", texto: "El invierno en Lisboa no tiene nada que ver con el del norte de Europa o buena parte de Latinoamérica. Las temperaturas rara vez bajan de los 8-10 grados, hay una media de 5-6 horas de sol al día incluso en enero, y la luz tiene una cualidad dorada que los fotógrafos adoran. Sí, llueve, pero normalmente en chaparrones cortos que dan paso a cielos limpios." },
      { tipo: "subseccion", texto: "Menos turistas, más Lisboa" },
      { tipo: "parrafo", texto: "La diferencia más brutal entre verano e invierno es la cantidad de gente. En julio y agosto, el tranvía 28 tiene colas de una hora, los miradores están atestados y es imposible pasear por Alfama sin esquivar grupos. En enero puedes subirte al 28 en la primera parada sin esperar, sentarte tranquilamente en el Mirador de Santa Luzia, y caminar por las callejuelas de Alfama escuchando solo tus pasos y el fado que sale de alguna ventana." },
      { tipo: "parrafo", texto: "Los museos están vacíos, los restaurantes tienen mesa sin reserva, y los vecinos recuperan sus sitios favoritos." },
      { tipo: "subseccion", texto: "Precios que hacen sonreír" },
      { tipo: "parrafo", texto: "Los vuelos a Lisboa en invierno cuestan bastante menos que en temporada alta, y los hoteles bajan de forma parecida: la misma habitación que en verano se va de precio, en enero entra en presupuestos de barrio residencial. Las cifras exactas dependen del año y de cuándo reserves, así que compáralas tú antes de dar nada por hecho." },
      { tipo: "lista", items: [
        "Vuelos y alojamiento: bastante más baratos que en verano",
        "Restaurantes: mismos precios, pero con menos espera y mejor servicio",
        "Transporte: menos congestión, tranvías y buses más puntuales",
        "Monumentos: sin colas, que en agosto son de una hora"
      ]},
      { tipo: "subseccion", texto: "La luz de invierno" },
      { tipo: "parrafo", texto: "Si te interesa la fotografía, el invierno en Lisboa es un regalo. El sol está más bajo, lo que crea sombras largas y una luz dorada que dura más. La hora dorada de verano dura quince minutos; en invierno puede durar más de una hora. Los atardeceres sobre el Tajo son más dramáticos, con cielos que pasan del rosa al morado y nubes que añaden textura." },
      { tipo: "parrafo", texto: "Los mejores miradores para fotografía invernal son el da Senhora do Monte (sin nadie, luz perfecta a media tarde), Santa Catarina (el sol se pone detrás del puente) y el Castelo de São Jorge, donde la luz rasante ilumina los tejados de Alfama." },
      { tipo: "subseccion", texto: "Qué hacer un día de lluvia" },
      { tipo: "parrafo", texto: "Cuando llueve —y lloverá algún día— Lisboa tiene opciones de sobra. El Oceanário es uno de los mejores acuarios de Europa. El Museo Nacional del Azulejo es fascinante y nunca está lleno. El Time Out Market resuelve la comida bajo techo. Y sentarte en un café histórico como A Brasileira a ver llover mientras tomas una bica es de las cosas más lisboetas que existen." },
      { tipo: "tip", texto: "Lleva paraguas plegable y calzado impermeable. La calçada portuguesa resbala mucho mojada. Los chaparrones suelen durar veinte o treinta minutos y luego sale el sol." },
      { tipo: "subseccion", texto: "Eventos de invierno" },
      { tipo: "parrafo", texto: "Los mercados navideños de diciembre, el fin de año con fuegos sobre el Tajo, el carnaval de febrero con desfiles por la Avenida da Liberdade y fado en directo durante toda la temporada. La programación cultural es intensa porque los lisboetas, sin playa, se refugian en conciertos, teatro y exposiciones." },
      { tipo: "tip", texto: "Si buscas equilibrio total, mayo y septiembre son los mejores meses." }
    ]
  },
    "que-ver-cascais-desde-lisboa": {
    titulo: "Cascais: el pueblo costero perfecto para escapar de Lisboa",
    seoTitle: "Cascais desde Lisboa | Qué ver",
    descripcion: "A solo 30 minutos en tren, Cascais combina playas doradas, palacios históricos y un paseo marítimo que invita a quedarse. Guía completa para un día perfecto.",
    imagen: "/images/actividades/cascais-centro-historico.webp",
    imageAlt: "Letras de Cascais sobre la calçada portuguesa, frente al ayuntamiento del centro histórico",
    categoria: "Guías",
    fecha: "18 Nov 2024",
    minutos: 13,
    fuentes: [
      { label: "Comboios de Portugal — línea de Cascais", href: "https://www.cp.pt/" },
    ],
    contenido: [
      { tipo: "parrafo", texto: "Cascais fue el refugio de verano de la familia real portuguesa a finales del siglo XIX, y esa herencia de elegancia todavía se percibe en sus calles. Aunque hoy es más accesible que entonces, mantiene un aire distinguido que la diferencia de otros pueblos costeros. A solo treinta minutos en tren desde Lisboa, es la excursión perfecta cuando necesitas un respiro del bullicio urbano." },
      { tipo: "parrafo", texto: "He venido aquí decenas de veces —a veces solo para pasear, otras para pasar el día en la playa, algunas para comer pescado fresco— y cada vez descubro algo nuevo. Cascais es pequeño pero tiene suficiente para llenar un día completo sin agobios, y el ritmo relajado del pueblo es el antídoto perfecto para el estrés de la capital." },
      { tipo: "subtitulo", texto: "El viaje en tren: un preludio con vistas" },
      { tipo: "parrafo", texto: "La línea de tren que conecta Lisboa con Cascais es una de las más bonitas de Portugal. Sale de Cais do Sodré cada veinte minutos y sigue la costa durante todo el trayecto, ofreciendo vistas constantes al Atlántico. El viaje dura entre treinta y cuarenta minutos dependiendo de si coges el expreso o el que hace todas las paradas." },
      { tipo: "parrafo", texto: "El precio es de 2,30 euros por trayecto (4,60 ida y vuelta), y puedes usar la tarjeta Viva Viagem que ya tienes del metro. Siéntate del lado izquierdo viniendo desde Lisboa para las mejores vistas al mar. El tren pasa por Estoril —donde se celebra el Grand Prix de Fórmula 1— y por playas que parecen sacadas de una postal antes de llegar a Cascais." },
      { tipo: "tip", texto: "Los fines de semana en verano el tren puede ir lleno. Si puedes, viaja entre semana o a primera hora de la mañana para tener más espacio y mejores vistas." },
      { tipo: "subtitulo", texto: "El centro histórico: calles que invitan a perderse" },
      { tipo: "parrafo", texto: "Cascais es lo suficientemente pequeño para explorarlo a pie sin mapa. El centro histórico tiene calles peatonales adoquinadas, tiendas de artesanía local, y restaurantes con terrazas donde sentarse a observar el ritmo del pueblo. El ambiente es más relajado que el centro de Lisboa —menos turistas apresurados, más paseantes que se toman su tiempo—." },
      { tipo: "parrafo", texto: "La Rua Frederico Arouca es la calle principal, llena de tiendas y cafeterías. Pero las calles laterales son donde está el encanto real: callejones estrechos que desembocan en pequeñas plazas, casas pintadas de colores pastel, y el olor a mar que impregna todo." },
      { tipo: "subtitulo", texto: "Las playas: arena dorada en el corazón del pueblo" },
      { tipo: "parrafo", texto: "Praia da Conceição es la playa principal, justo en el centro del pueblo. Tiene arena dorada, agua limpia (aunque fría incluso en verano), y un paseo marítimo perfecto para caminar. En verano se llena de familias y turistas, pero en otras épocas del año es sorprendentemente tranquila." },
      { tipo: "parrafo", texto: "A diez minutos caminando hacia el este está Praia da Rainha, más pequeña pero más bonita. Está protegida por rocas que crean un ambiente más íntimo, y suele tener menos gente. Es mi favorita para pasar la tarde cuando el sol empieza a bajar." },
      { tipo: "parrafo", texto: "Y si caminas hacia el oeste por el paseo marítimo, llegarás a Praia da Duquesa, más grande y con más servicios (duchas, alquiler de sombrillas). Todas están conectadas por un paseo que invita a caminar de una a otra." },
      { tipo: "tip", texto: "En verano, llega temprano si quieres un buen sitio en la playa. A partir de las once de la mañana, las mejores zonas se llenan. O ven fuera de temporada: el agua sigue siendo fría, pero tendrás las playas prácticamente para ti solo." },
      { tipo: "subtitulo", texto: "Museo Condes de Castro Guimarães: palacio y jardines" },
      { tipo: "parrafo", texto: "Este palacio del siglo XIX fue la residencia de los Condes de Castro Guimarães, y ahora alberga un museo con colecciones de arte y mobiliario de la época. Pero incluso si no entras al museo (la entrada cuesta 5 euros), los jardines son gratis y merecen la visita." },
      { tipo: "parrafo", texto: "Los jardines tienen árboles centenarios, un pequeño lago con patos, y bancos donde sentarse a la sombra. Es el lugar perfecto para hacer una pausa del sol y del bullicio del centro. Los fines de semana, familias locales vienen aquí a hacer picnic." },
      { tipo: "subtitulo", texto: "Boca do Inferno: donde el mar muestra su fuerza" },
      { tipo: "parrafo", texto: "A dos kilómetros del centro, esta formación rocosa es uno de los lugares más fotografiados de Cascais. El nombre —Boca del Infierno— viene del sonido que hace el mar cuando entra con fuerza en la cavidad rocosa, especialmente cuando hay oleaje." },
      { tipo: "parrafo", texto: "Se llega caminando por el paseo marítimo en dirección oeste, un paseo agradable de unos veinticinco minutos. Cuando hay oleaje, el espectáculo es impresionante: el agua entra con fuerza y sale en forma de espuma blanca. En días tranquilos, el lugar es más sereno pero igualmente bonito." },
      { tipo: "parrafo", texto: "Hay un pequeño mirador y una cafetería donde tomar algo mientras observas el mar. Es especialmente bonito al atardecer, cuando el sol se pone sobre el Atlántico." },
      { tipo: "subtitulo", texto: "La Ciudadela: fortaleza convertida en residencia presidencial" },
      { tipo: "parrafo", texto: "Esta fortaleza del siglo XVII protegía el puerto de Cascais de ataques piratas. Ahora alberga una residencia presidencial (usada ocasionalmente por el presidente de Portugal) y un hotel de lujo. Se puede visitar parcialmente —los jardines y algunas áreas públicas—, y la arquitectura militar mezclada con elementos palaciegos es interesante." },
      { tipo: "parrafo", texto: "Desde las murallas hay buenas vistas del puerto y del pueblo. No es imprescindible si tienes poco tiempo, pero si te sobra una hora, merece la pena dar una vuelta." },
      { tipo: "subtitulo", texto: "Dónde comer: pescado fresco y helados legendarios" },
      { tipo: "parrafo", texto: "Cascais tiene excelentes restaurantes de pescado y marisco. Porto de Santa Maria, frente al mar, sirve pescado fresco a la parrilla con vistas directas al Atlántico. El precio ronda los 30-50 euros por persona, pero la calidad y la ubicación lo justifican." },
      { tipo: "parrafo", texto: "O Pescador es más económico (20-30 euros) y más local. El ambiente es de tasca tradicional, y el pescado es igual de fresco. Y no te vayas de Cascais sin probar los helados de Santini —una institución portuguesa que empezó aquí en 1949. La cola puede ser larga, pero el helado de nata o de chocolate justifica la espera." },
      { tipo: "subtitulo", texto: "Itinerario perfecto para un día" },
      { tipo: "parrafo", texto: "Si quieres aprovechar al máximo tu día en Cascais, aquí tienes una ruta optimizada:" },
      { tipo: "parrafo", texto: "Sal de Lisboa a las nueve de la mañana para llegar antes de las diez. Empieza paseando por el centro histórico, comprando algún recuerdo o simplemente disfrutando del ambiente. A las once, visita los jardines del Museo Condes de Castro Guimarães para hacer una pausa tranquila." },
      { tipo: "parrafo", texto: "A las doce y media, come en Porto de Santa Maria o O Pescador. Después de comer, camina hacia Boca do Inferno —el paseo te ayudará a hacer la digestión y las vistas valen la pena. Vuelve al centro sobre las tres y media, tómate un helado en Santini, y si hace buen tiempo, dedica el resto de la tarde a la playa. El último tren de vuelta sale alrededor de las once de la noche, así que no hay prisa." },
      { tipo: "tip", texto: "Si quieres combinar Cascais con Sintra en un día, no lo recomiendo. Cada lugar merece un día completo para disfrutarlo sin prisas. Mejor dedica un día a cada uno." }
    ]
  },
  "playas-cerca-lisboa": {
    titulo: "Las mejores playas cerca de Lisboa: guía completa de la costa",
    seoTitle: "Las mejores playas cerca de Lisboa",
    descripcion: "Arenas doradas, agua cristalina y acantilados dramáticos a menos de una hora. Desde Cascais hasta la Arrábida, todas las opciones para escapar del calor urbano.",
    imagen: "/images/mirador-tajo-amarras-atardecer.jpg",
    imageAlt: "Atardecer sobre el Tajo desde un muelle, con el puente 25 de Abril a lo lejos",
    categoria: "Guías",
    fecha: "15 Nov 2024",
    minutos: 12,
    fuentes: [
      { label: "Comboios de Portugal — líneas de Cascais y Setúbal", href: "https://www.cp.pt/" },
    ],
    contenido: [
      { tipo: "parrafo", texto: "Lisboa tiene muchas cosas, pero playa en el centro no es una de ellas. Sin embargo, a menos de una hora en transporte público o coche, encuentras algunas de las playas más bonitas de Portugal. He pasado incontables fines de semana explorando la costa desde Cascais hasta la Arrábida, y cada playa tiene su personalidad." },
      { tipo: "parrafo", texto: "Esta guía te ayudará a elegir según lo que busques: playas familiares con servicios, calas escondidas para fotógrafos, o kilómetros de arena virgen para surfistas. Todas están a distancia razonable de la capital, y el viaje forma parte de la experiencia." },
      { tipo: "subtitulo", texto: "Cascais: la opción más fácil y accesible" },
      { tipo: "parrafo", texto: "A solo treinta minutos en tren desde Cais do Sodré, Cascais es la playa más accesible desde Lisboa. El viaje en sí es parte del encanto: el tren sigue la costa ofreciendo vistas constantes al Atlántico. Cuando llegas, la playa está literalmente en el centro del pueblo —bajas del tren y en cinco minutos estás en la arena." },
      { tipo: "parrafo", texto: "Praia da Conceição es la principal: amplia, con servicios (duchas, alquiler de sombrillas), y un paseo marítimo perfecto para caminar. Pero si buscas algo más íntimo, camina diez minutos hacia el este hasta Praia da Rainha, una cala pequeña protegida por rocas que es más fotogénica y menos masificada." },
      { tipo: "parrafo", texto: "El tren cuesta 2,30 euros por trayecto y sale cada veinte minutos. En verano puede ir lleno, así que si puedes, viaja entre semana o a primera hora de la mañana." },
      { tipo: "subtitulo", texto: "Costa da Caparica: kilómetros de arena virgen" },
      { tipo: "parrafo", texto: "Al sur del Tajo, cruzando el puente 25 de Abril, se extiende la Costa da Caparica: una línea de playas que parece interminable. Aquí no hay pueblos costeros elegantes ni servicios turísticos —solo arena, mar y naturaleza. Es la playa de los lisboetas que buscan espacio y tranquilidad." },
      { tipo: "parrafo", texto: "El autobús sale desde Praça de Espanha y tarda unos cuarenta y cinco minutos. Una vez allí, puedes caminar kilómetros en cualquier dirección sin encontrar casi nadie. Es perfecta para surfistas, para quienes buscan hacer ejercicio corriendo por la orilla, o simplemente para quienes quieren una playa sin servicios ni turistas." },
      { tipo: "parrafo", texto: "No hay restaurantes ni servicios cerca, así que lleva agua y algo de comer si planeas pasar el día. El precio del autobús es de 4 euros ida y vuelta." },
      { tipo: "subtitulo", texto: "Sesimbra: autenticidad pesquera junto al mar" },
      { tipo: "parrafo", texto: "Este pueblo pesquero a una hora de Lisboa tiene una playa familiar perfecta para quienes buscan algo más auténtico que Cascais. La playa es amplia, de arena fina, y el agua suele estar más calma que en la costa atlántica abierta. Pero lo mejor de Sesimbra no es solo la playa, sino el pueblo mismo." },
      { tipo: "parrafo", texto: "Después de bañarte, puedes pasear por el puerto pesquero, ver los barcos descargar la pesca del día, y comer en alguno de los restaurantes que sirven pescado fresco a precios razonables. El ambiente es local, familiar, sin la masificación turística de Cascais." },
      { tipo: "parrafo", texto: "El autobús sale desde Sete Rios y cuesta 5 euros. El viaje dura aproximadamente una hora, pero vale la pena si buscas una experiencia más portuguesa y menos turística." },
      { tipo: "subtitulo", texto: "Praia da Adraga: la playa más fotogénica de Portugal" },
      { tipo: "parrafo", texto: "Cerca de Sintra, esta playa es considerada por muchos como la más bonita de Portugal. Formaciones rocosas dramáticas, cuevas que se pueden explorar con marea baja, y un ambiente salvaje que parece sacado de una película. No es fácil llegar —necesitas coche o un tour desde Sintra—, pero la recompensa es espectacular." },
      { tipo: "parrafo", texto: "Desde el parking hay que caminar unos diez minutos bajando por un sendero. No hay servicios, así que lleva todo lo que necesites. En verano el parking se llena temprano, así que llega antes de las diez de la mañana si quieres aparcar cerca." },
      { tipo: "parrafo", texto: "Es perfecta para fotógrafos, para quienes buscan aislamiento, o simplemente para ver una playa que parece no haber cambiado en siglos." },
      { tipo: "subtitulo", texto: "Arrábida: paraíso natural protegido" },
      { tipo: "parrafo", texto: "La Reserva Natural da Arrábida alberga algunas de las playas más bonitas de Portugal. Agua turquesa que parece del Caribe, arena blanca, y acantilados verdes que las rodean. Praia dos Galapinhos es la más accesible y una de las más bonitas, pero hay varias más escondidas que requieren caminar un poco." },
      { tipo: "parrafo", texto: "El acceso está limitado en verano para proteger el ecosistema —solo se permite un número limitado de coches al día—, así que llega temprano o prepárate para esperar. El snorkel aquí es excelente gracias a la claridad del agua." },
      { tipo: "parrafo", texto: "Se recomienda ir en coche, aunque hay tours organizados desde Lisboa. El viaje dura aproximadamente una hora, y el esfuerzo vale cada minuto cuando ves el color del agua." },
      { tipo: "tip", texto: "En verano, las playas de Arrábida tienen restricciones de acceso. Llega antes de las nueve de la mañana para asegurar entrada, o considera ir fuera de temporada cuando hay menos restricciones." },
      { tipo: "subtitulo", texto: "Cuándo ir: la mejor época para cada playa" },
      { tipo: "parrafo", texto: "Las playas son bonitas todo el año, pero la experiencia cambia según la temporada. De junio a septiembre el agua está más cálida (aunque nunca realmente caliente —el Atlántico es frío incluso en verano) y puedes bañarte cómodamente. Mayo y octubre también funcionan si hace buen tiempo, aunque el agua será más fría." },
      { tipo: "parrafo", texto: "El resto del año las playas son perfectas para pasear, hacer fotos, o simplemente sentarse a contemplar el mar. El clima de Lisboa es suave incluso en invierno, así que un día soleado de enero puede ser perfecto para una excursión a la costa." }
    ]
  },
  "donde-escuchar-fado-autentico": {
    titulo: "Dónde escuchar fado auténtico en Lisboa: guía para encontrar el verdadero",
    seoTitle: "Dónde escuchar fado auténtico",
    descripcion: "El fado es el alma de Lisboa, pero no todo lo que se vende como fado lo es. Aprende a distinguir el auténtico del turístico y dónde encontrarlo.",
    imagen: "/images/miradouro-grupo-atardecer.jpg",
    imageAlt: "Tasca de Lisboa iluminada de noche en una calle empedrada, con clientes en la mesa de la entrada",
    categoria: "Cultura",
    fecha: "12 Nov 2024",
    minutos: 14,
    contenido: [
      { tipo: "parrafo", texto: "La primera vez que escuché fado auténtico fue por accidente. Estaba en una tasca de Alfama buscando un sitio donde comer barato, y de repente una mujer se levantó de su mesa, tomó una guitarra portuguesa que estaba apoyada en la pared, y empezó a cantar. No había micrófono, no había escenario, no había anuncio previo. Solo una voz que llenó el silencio del local con una melancolía que no había sentido antes." },
      { tipo: "parrafo", texto: "Ese es el fado real: espontáneo, íntimo, nacido de la necesidad de expresar algo que las palabras no pueden. No el espectáculo estructurado que se ofrece en restaurantes turísticos con menús fijos y precios inflados. Esta guía te ayudará a encontrar el primero y evitar el segundo." },
      { tipo: "subtitulo", texto: "Fado turístico versus fado auténtico: cómo distinguirlos" },
      { tipo: "parrafo", texto: "El fado turístico tiene señales claras: restaurantes grandes con carteles en varios idiomas anunciando 'Fado Show', menús fijos obligatorios que cuestan 60-80 euros, horarios fijos de espectáculo, y fadistas profesionales que interpretan las mismas canciones cada noche para un público que no habla portugués." },
      { tipo: "parrafo", texto: "El fado auténtico es diferente: bares pequeños donde los fadistas aparecen espontáneamente, sin micrófonos ni amplificación, cantando porque les nace, no porque les pagan. El público es mayoritariamente local, el ambiente es íntimo, y no hay menú obligatorio —solo consumes lo que quieras beber. El precio es el de una consumición, no el de una cena completa." },
      { tipo: "parrafo", texto: "No digo que el fado turístico sea malo —puede ser una introducción accesible al género—, pero no es lo mismo. El fado auténtico te toca de otra manera, te conecta con algo más profundo que el entretenimiento." },
      { tipo: "subtitulo", texto: "Tasca do Chico — El templo del fado vadio" },
      { tipo: "parrafo", texto: "Este bar en el Bairro Alto es legendario entre los amantes del fado. No hay reservas, no hay escenario, no hay horario fijo. Los fadistas —algunos profesionales, otros aficionados que llevan décadas cantando aquí— aparecen cuando les apetece, toman una guitarra portuguesa, y el local se queda en silencio." },
      { tipo: "parrafo", texto: "El fado aquí es vadio —improvisado, espontáneo—. Los miércoles y domingos a las ocho de la tarde suele haber más actividad, pero cualquier noche puede sorprenderte. El lugar es pequeño —apenas caben treinta personas—, así que llega temprano o prepárate para esperar fuera escuchando desde la calle." },
      { tipo: "parrafo", texto: "No hay entrada, pero se espera que consumas algo —una cerveza, un vino, un café—. El ambiente es 100% local, y si hablas portugués o al menos muestras respeto por la tradición, los fadistas pueden dedicarte una canción." },
      { tipo: "tip", texto: "Llega antes de las ocho para asegurar sitio. Y durante el fado, guarda silencio absoluto. Hablar o hacer ruido es de muy mala educación y te ganarás miradas de reproche de todo el local." },
      { tipo: "subtitulo", texto: "A Baiona — Alfama en estado puro" },
      { tipo: "parrafo", texto: "En el corazón de Alfama, este bar es donde los vecinos del barrio vienen a escuchar fado después de cenar. Los fadistas son aficionados que cantan por amor a la música, no profesionales que cobran por actuación. El ambiente es íntimo, sin turistas, y el fado que escucharás aquí es el que se canta en las casas de Alfama desde hace generaciones." },
      { tipo: "parrafo", texto: "No hay horario fijo —el fado empieza cuando alguien se anima a cantar—, pero a partir de las ocho de la tarde suele haber actividad. El local es pequeño y oscuro, con mesas de madera y paredes decoradas con fotos antiguas. Consumir es obligatorio, pero el precio es el de cualquier bar de barrio." },
      { tipo: "parrafo", texto: "Este es el lugar más auténtico de la lista. Si solo puedes ir a un sitio para escuchar fado real, que sea este." },
      { tipo: "subtitulo", texto: "Clube de Fado — Profesional pero auténtico" },
      { tipo: "parrafo", texto: "Este restaurante en Alfama ofrece un punto medio: fado profesional interpretado por fadistas reconocidos, pero en un ambiente que mantiene la autenticidad. El local es una casa antigua con salones íntimos, y los fadistas tocan sin micrófono, manteniendo la tradición acústica." },
      { tipo: "parrafo", texto: "El precio incluye cena y show (60-80 euros por persona), y aunque es más estructurado que los bares, el fado que escucharás es de calidad y auténtico. Las reservas son recomendadas, especialmente los fines de semana." },
      { tipo: "parrafo", texto: "Es perfecto si quieres una experiencia completa —buena comida portuguesa y fado de calidad— sin el ambiente turístico de los restaurantes más comerciales." },
      { tipo: "subtitulo", texto: "A Tasca do Chico (Graça) — Espontaneidad en las alturas" },
      { tipo: "parrafo", texto: "Aunque comparte nombre con el bar del Bairro Alto, este local en Graça es independiente y tiene su propia personalidad. El fado aquí es aún más espontáneo —los locales cantan cuando les apetece, sin estructura, sin horarios—. Es el lugar más difícil de encontrar para turistas, lo que lo hace aún más auténtico." },
      { tipo: "parrafo", texto: "El ambiente es de bar de barrio donde la música surge naturalmente de las conversaciones. No vengas esperando un espectáculo: ven a beber, a conversar, y si el fado aparece, será un regalo inesperado." },
      { tipo: "subtitulo", texto: "Senhor Fado — Buena relación calidad-precio" },
      { tipo: "parrafo", texto: "Este pequeño restaurante en Alfama ofrece fado tradicional con cena a un precio más razonable que los grandes locales turísticos (40-50 euros por persona). El ambiente es íntimo, la comida portuguesa es decente, y el fado se interpreta todas las noches por fadistas locales." },
      { tipo: "parrafo", texto: "No es tan espontáneo como los bares, pero tampoco tan comercial como los restaurantes grandes. Es un buen punto medio si quieres garantía de escuchar fado sin pagar precios exorbitantes." },
      { tipo: "subtitulo", texto: "El protocolo del fado: cómo comportarse" },
      { tipo: "parrafo", texto: "El fado tiene sus propias reglas de etiqueta, y seguirlas es esencial para respetar la tradición. Cuando un fadista empieza a cantar, el silencio debe ser absoluto. No hables, no uses el móvil, no hagas ruido con cubiertos o vasos. El fado se escucha en silencio respetuoso, y cualquier interrupción es considerada una falta grave." },
      { tipo: "parrafo", texto: "No aplaudas entre canciones a menos que el resto del público lo haga. El fado no es un espectáculo de entretenimiento, es una expresión emocional que se comparte. Al final de la sesión, los aplausos son apropiados, pero durante el canto, el silencio es el mejor homenaje." },
      { tipo: "tip", texto: "Si no entiendes portugués, no importa. El fado se siente más que se comprende. Deja que la emoción de la voz y la guitarra te lleguen sin intentar traducir cada palabra." },
      { tipo: "subtitulo", texto: "Qué evitar: las trampas turísticas" },
      { tipo: "parrafo", texto: "Cualquier restaurante en Rossio, Baixa o cerca del Castelo que tenga carteles grandes anunciando 'Fado Show' en varios idiomas es probablemente una trampa turística. Estos lugares cobran 60-80 euros por menús fijos de calidad mediocre, y el fado que ofrecen es una versión comercializada que ha perdido su esencia." },
      { tipo: "parrafo", texto: "Si un local tiene menú obligatorio, horario fijo de espectáculo, y está lleno de turistas con auriculares de traducción, probablemente no es el lugar más auténtico. Los mejores fados se escuchan en lugares donde los portugueses van por su cuenta, no donde los llevan los guías turísticos." }
    ]
  },
  "presupuesto-viajar-lisboa": {
    titulo: "Presupuesto real para viajar a Lisboa: análisis honesto día a día",
    seoTitle: "Presupuesto para viajar a Lisboa",
    descripcion: "Cuánto cuesta realmente comer, dormir y moverse en Lisboa. Desglose detallado de precios reales en 2024 para que planifiques sin sorpresas.",
    imagen: "/images/alfama-callejon.jpg",
    imageAlt: "Tazas de café en la mesa de una terraza, en una calle empedrada en cuesta de Lisboa",
    categoria: "Planificación",
    fecha: "10 Nov 2024",
    minutos: 13,
    fuentes: [
      { label: "Carris — tarifas de tranvía, autobús y elevadores", href: "https://www.carris.pt/" },
      { label: "Metropolitano de Lisboa — títulos y precios", href: "https://www.metrolisboa.pt/" },
    ],
    links: [
      // La calculadora es la versión herramienta de este mismo artículo: aquí
      // está el porqué de cada partida, y allí el cálculo para un viaje
      // concreto. Va primera porque es lo que busca quien llega hasta aquí.
      { href: '/calculadora-presupuesto-lisboa', label: 'Calculadora de presupuesto para Lisboa' },
      { href: '/blog/como-pagar-en-portugal', label: 'Cómo pagar en Portugal' },
      { href: '/planifica-tu-viaje', label: 'Planifica tu viaje a Lisboa' },
      { href: '/itinerarios', label: 'Itinerarios gratuitos de Lisboa' },
    ],
    contenido: [
      { tipo: "parrafo", texto: "Lisboa puede ser una de las capitales más baratas de Europa o una de las más caras, dependiendo completamente de cómo viajes. He visto a viajeros gastar 200 euros al día sin darse cuenta, y a otros vivir perfectamente con 30. La diferencia no está en la ciudad, sino en las decisiones que tomas." },
      { tipo: "parrafo", texto: "He hecho los cálculos reales basándome en precios actuales de 2024, y he creado tres escenarios de presupuesto que reflejan formas reales de viajar. Estos números no son estimaciones optimistas ni pesimistas, sino lo que realmente cuesta según tus elecciones." },
      { tipo: "subtitulo", texto: "Presupuesto bajo: 30-40 euros al día" },
      { tipo: "parrafo", texto: "Es perfectamente posible disfrutar Lisboa con un presupuesto ajustado. El alojamiento suele ser la partida más alta, así que conviene empezar por ella al organizar el presupuesto. Todo pasa por priorizar bien: alojamiento básico pero limpio, comida en tascas de barrio en lugar de restaurantes turísticos, transporte público en vez de taxis, y actividades gratuitas que son muchas en esta ciudad." },
      { tipo: "parrafo", texto: "Un hostel decente en el centro cuesta entre 15 y 20 euros la noche en temporada media. Para comer, combina tascas locales (menú del día por 8-9 euros) con compras en supermercado para picnics en miradores. El transporte público con pase diario son 6,40 euros, y las mejores actividades —miradores, pasear por Alfama, playas— son gratis." },
      { tipo: "parrafo", texto: "Con este presupuesto no tendrás lujos, pero vivirás la ciudad de forma auténtica, comerás donde comen los locales, y verás lo esencial sin renunciar a nada importante." },
      { tipo: "lista", items: [
        "Alojamiento: Hostel 15-20 EUR/noche",
        "Comida: 10-15 EUR/día (tascas y supermercado)",
        "Transporte: 6.40 EUR (pase diario)",
        "Actividades: Gratis (miradores, pasear, playas)",
        "TOTAL: 31-41 EUR/día"
      ]},
      { tipo: "subtitulo", texto: "Presupuesto medio: 60-80 euros al día" },
      { tipo: "parrafo", texto: "Este es el presupuesto más común para viajeros que buscan equilibrio entre comodidad y economía. Te permite alojarte en hoteles decentes de 2-3 estrellas, comer en restaurantes locales de calidad sin ser turísticos, y pagar algunas entradas a museos o monumentos." },
      { tipo: "parrafo", texto: "Un hotel en el centro cuesta entre 50 y 60 euros la noche si reservas con antelación. Para comer, puedes alternar entre tascas buenas (12-15 euros) y restaurantes locales (20-25 euros). El transporte sigue siendo el pase diario, y puedes permitirte algunas actividades de pago como el Castillo o la Torre de Belém." },
      { tipo: "parrafo", texto: "Es el presupuesto ideal si quieres comodidad sin derrochar, y te permite disfrutar de la gastronomía portuguesa sin limitarte solo a lo más barato." },
      { tipo: "lista", items: [
        "Alojamiento: Hotel 50-60 EUR/noche",
        "Comida: 20-25 EUR/día (restaurantes locales)",
        "Transporte: 6.40 EUR (pase diario)",
        "Actividades: 10-15 EUR (museos, entradas)",
        "TOTAL: 86-106 EUR/día"
      ]},
      { tipo: "tip", texto: "Si viajas en pareja o grupo, compartir habitación en hotel baja el presupuesto a 40-50 euros por persona, permitiéndote subir de categoría sin aumentar mucho el gasto total." },
      { tipo: "subtitulo", texto: "Presupuesto alto: 100-150 euros al día" },
      { tipo: "parrafo", texto: "Con este presupuesto puedes permitirte hoteles de 4 estrellas, restaurantes de calidad reconocida, y actividades como tours guiados o excursiones a Sintra. Es el presupuesto para quienes buscan comodidad y no quieren preocuparse por el dinero durante el viaje." },
      { tipo: "parrafo", texto: "Los hoteles de 4 estrellas en el centro cuestan entre 80 y 100 euros la noche. Puedes comer en restaurantes buenos (30-40 euros por comida) y permitirte caprichos como cenas románticas o mariscos. El transporte puede incluir Ubers ocasionales además del pase diario, y puedes hacer excursiones organizadas o tours privados." },
      { tipo: "parrafo", texto: "Este presupuesto te da libertad total para disfrutar Lisboa sin restricciones, aunque con algunos ajustes inteligentes podrías hacer lo mismo por menos." },
      { tipo: "lista", items: [
        "Alojamiento: Hotel 80-100 EUR/noche",
        "Comida: 40-50 EUR/día (restaurantes buenos)",
        "Transporte: 6.40 EUR o Uber ocasional",
        "Actividades: 20-30 EUR (tours, museos, Sintra)",
        "TOTAL: 146-186 EUR/día"
      ]},
      { tipo: "subtitulo", texto: "Desglose de costos" },
      { tipo: "parrafo", texto: "Desglose detallado de cada categoria para que planifiques mejor:" },
      { tipo: "subtitulo", texto: "Alojamiento" },
      { tipo: "lista", items: [
        "Hostel: 15-25 EUR/noche",
        "Hotel 2-3 estrellas: 50-70 EUR/noche",
        "Hotel 4 estrellas: 80-120 EUR/noche",
        "Hotel 5 estrellas: 150-300 EUR/noche",
        "Airbnb: 40-100 EUR/noche (depende de la zona)"
      ]},
      { tipo: "subtitulo", texto: "Comida" },
      { tipo: "lista", items: [
        "Desayuno: 3-8 EUR (cafe y pastel de nata vs brunch)",
        "Almuerzo: 8-15 EUR (tasca vs restaurante)",
        "Cena: 15-40 EUR (tasca local vs restaurante bueno)",
        "Bebidas: 2-5 EUR (cerveza o vino)",
        "TOTAL comida: 28-68 EUR/dia"
      ]},
      { tipo: "subtitulo", texto: "Transporte" },
      { tipo: "lista", items: [
        "Viva Viagem: 0.50 EUR (compra una vez)",
        "Pase diario: 6.40 EUR (ilimitado)",
        "Viaje simple: 1.50 EUR",
        "Uber trayecto corto: 3-6 EUR",
        "Tren a Sintra: 4.60 EUR (ida y vuelta)"
      ]},
      { tipo: "subtitulo", texto: "Actividades" },
      { tipo: "lista", items: [
        "Miradores: Gratis",
        "Castillo de Sao Jorge: 15 EUR",
        "Torre de Belém: 15 EUR",
        "Palacio da Pena (Sintra): 14 EUR",
        "Museos: 5-10 EUR cada uno"
      ]},
      { tipo: "tip", texto: "Muchas actividades son gratis: pasear por Alfama, ver el atardecer en los miradores, ir a la playa. Planifica bien y ahorras mucho." },
      { tipo: "subtitulo", texto: "Presupuesto para 3 dias" },
      { tipo: "lista", items: [
        "Presupuesto bajo: 90-120 EUR",
        "Presupuesto medio: 260-320 EUR",
        "Presupuesto alto: 440-560 EUR"
      ]},
      { tipo: "parrafo", texto: "Estos precios no incluyen vuelos, pero si todo lo demas: alojamiento, comida, transporte y actividades." }
    ]
  },
  "mejores-mercados-lisboa": {
    titulo: "Los mejores mercados de Lisboa: donde la ciudad cobra vida",
    seoTitle: "Los mejores mercados de Lisboa",
    descripcion: "Desde el Time Out Market hasta mercados de barrio escondidos. Comida fresca, artesanía local y la vida auténtica de Lisboa en cada rincón.",
    imagen: "/images/barrio-calle-residencial.jpg",
    imageAlt: "Dos viajeros caminando por una calle de Lisboa con fachadas de azulejo",
    categoria: "Guías",
    fecha: "8 Nov 2024",
    minutos: 11,
    contenido: [
      { tipo: "parrafo", texto: "Los mercados de Lisboa son el corazón palpitante de la ciudad. Aquí es donde los vecinos compran el pescado del día, donde los productores locales venden sus frutas y verduras, y donde encuentras esa vida auténtica que a veces se pierde entre los monumentos turísticos. He pasado horas en estos mercados, no solo comprando, sino observando cómo funciona la ciudad real." },
      { tipo: "parrafo", texto: "Esta guía te lleva desde el mercado más famoso hasta los rincones escondidos donde solo van los lisboetas. Cada uno tiene su personalidad, su horario, y su razón de ser." },
      { tipo: "subtitulo", texto: "1. Time Out Market (Mercado da Ribeira)" },
      { tipo: "parrafo", texto: "El mercado mas famoso y turistico de Lisboa. Food court moderno con los mejores chefs de la ciudad. Turistico pero con comida excelente. Llega temprano o espera cola." },
      { tipo: 'enlace', texto: 'Si quieres decidir si encaja contigo, la guía específica compara funcionamiento, precios variables, ventajas y alternativas.', href: '/blog/time-out-market-lisboa', label: 'Leer la guía de Time Out Market Lisboa' },
      { tipo: "lista", items: [
        "Direccion: Av. 24 de Julho 49",
        "Horario: 10:00 - 24:00",
        "Precio: 8-20 EUR por comida",
        "Ambiente: Turistico pero autentico"
      ]},
      { tipo: "tip", texto: "El mercado tiene dos partes: la turistica (food court) y la tradicional (frutas, pescado). La tradicional es mas barata y local." },
      { tipo: "subtitulo", texto: "2. Feira da Ladra (Mercado de las Pulgas)" },
      { tipo: "parrafo", texto: "Mercado de segunda mano los martes y sabados en Alfama. Azulejos antiguos, ropa vintage, antiguedades. Perfecto para encontrar souvenirs unicos." },
      { tipo: "lista", items: [
        "Direccion: Campo de Santa Clara (Alfama)",
        "Horario: Martes y sabados 6:00 - 17:00",
        "Precio: Negociable (regatea)",
        "Ambiente: Local y bohemio"
      ]},
      { tipo: "subtitulo", texto: "3. Mercado de Arroios" },
      { tipo: "parrafo", texto: "Mercado local 100% autentico. Frutas, verduras, pescado fresco, comida casera. Ningun turista, solo locales. El menu del dia cuesta 7 EUR." },
      { tipo: "lista", items: [
        "Direccion: Rua Angelina Vidal 27",
        "Horario: Lunes a sabado 7:00 - 14:00",
        "Precio: Muy barato (menu 7 EUR)",
        "Ambiente: 100% local"
      ]},
      { tipo: "subtitulo", texto: "4. LX Factory (Mercado Semanal)" },
      { tipo: "parrafo", texto: "Mercado de domingo en LX Factory. Comida, artesania, musica en vivo. Ambiente joven y moderno. Perfecto para un domingo relajado." },
      { tipo: "lista", items: [
        "Direccion: Rua Rodrigues de Faria 103",
        "Horario: Domingos 11:00 - 18:00",
        "Precio: 8-15 EUR",
        "Ambiente: Joven y moderno"
      ]},
      { tipo: "subtitulo", texto: "5. Mercado Biológico do Principe Real" },
      { tipo: "parrafo", texto: "Mercado de productos organicos y locales. Frutas, verduras, pan, miel. Todo de productores locales. Solo los sabados." },
      { tipo: "lista", items: [
        "Direccion: Praça do Príncipe Real",
        "Horario: Sabados 9:00 - 15:00",
        "Precio: Precios justos",
        "Ambiente: Local y ecologico"
      ]}
    ]
  },
  "donde-tomar-cafe-lisboa": {
    titulo: "Dónde tomar el mejor café en Lisboa: guía del café portugués",
    seoTitle: "Dónde tomar café en Lisboa",
    descripcion: "El café en Portugal es un ritual. Desde el bica tradicional hasta cafeterías de especialidad. Dónde encontrar el mejor café y cómo pedirlo como un local.",
    imagen: "/images/bica-cafe-mapa.jpg",
    imageAlt: "Taza de café en primer plano sobre la mesa de una terraza en una calle de Lisboa",
    categoria: "Gastronomía",
    fecha: "5 Nov 2024",
    minutos: 10,
    contenido: [
      { tipo: "parrafo", texto: "El café en Portugal no es solo una bebida, es un ritual social. Los portugueses toman café constantemente —al despertar, después de comer, en las pausas del trabajo, antes de dormir—. Un bica (café expreso) cuesta menos de un euro y se bebe de pie en el mostrador de cualquier pastelería, en menos de dos minutos, y luego sigues con tu día." },
      { tipo: "parrafo", texto: "Pero Lisboa también tiene una escena de café de especialidad que ha crecido en los últimos años, combinando la tradición portuguesa con técnicas modernas. Esta guía te lleva desde el café más tradicional hasta las cafeterías más innovadoras." },
      { tipo: "subtitulo", texto: "Tipos de cafe en Portugal" },
      { tipo: "parrafo", texto: "En Portugal el cafe tiene nombres diferentes. Un bica es un expreso. Una meia de leite es un cortado. Un galao es un cafe con leche largo." },
      { tipo: "lista", items: [
        "Bica: Cafe expreso (0.60-0.80 EUR)",
        "Meia de leite: Cortado (1.20 EUR)",
        "Galao: Cafe con leche largo (1.50 EUR)",
        "Carioca: Expreso mas suave (0.70 EUR)"
      ]},
      { tipo: "subtitulo", texto: "Mejores cafeterias" },
      { tipo: "subtitulo", texto: "1. A Brasileira (Chiado)" },
      { tipo: "parrafo", texto: "La cafeteria historica de Lisboa. Inaugurada en 1905, terrazas en la calle, ambiente bohemio. Turistica pero autentica. El bica cuesta 1 EUR." },
      { tipo: "lista", items: [
        "Direccion: Rua Garrett 120",
        "Precio: 1-2 EUR",
        "Ambiente: Historico y bohemio"
      ]},
      { tipo: "subtitulo", texto: "2. Copenhagen Coffee Lab" },
      { tipo: "parrafo", texto: "Cafeteria de especialidad con varias locales. Cafe de calidad, brunch bueno, ambiente moderno. El mejor cafe de especialidad de Lisboa." },
      { tipo: "lista", items: [
        "Direccion: Varias (Principe Real, Alfama)",
        "Precio: 2-4 EUR",
        "Ambiente: Moderno y trendy"
      ]},
      { tipo: "subtitulo", texto: "3. Fábrica Coffee Roasters" },
      { tipo: "parrafo", texto: "Tostan su propio cafe. Varias locales, cafe excelente, brunch bueno. El mejor para cafe de especialidad." },
      { tipo: "subtitulo", texto: "4. Padaria Portuguesa" },
      { tipo: "parrafo", texto: "Cadena local de panaderia y cafeteria. Por toda Lisboa, cafe decente y pasteles frescos. Barato y conveniente." },
      { tipo: "lista", items: [
        "Direccion: Por toda la ciudad",
        "Precio: 0.70-1.50 EUR",
        "Ambiente: Local y conveniente"
      ]},
      { tipo: "tip", texto: "En cualquier pasteleria o panaderia local el cafe es bueno y barato. No necesitas ir a sitios caros para un buen bica." }
    ]
  },
  "miradores-atardecer-lisboa": {
    titulo: "Los mejores miradores para el atardecer en Lisboa: donde el sol se despide",
    seoTitle: "Miradores de Lisboa al atardecer",
    descripcion: "Dónde ver el atardecer en Lisboa: miradores, orientación, cómo llegar y a qué hora conviene ir según la época del año.",
    imagen: "/images/miradouro-grupo-atardecer.jpg",
    imageAlt: "Noray en un muelle del Tajo al atardecer, con el puente 25 de Abril recortado al fondo",
    categoria: "Guías",
    fecha: "3 Nov 2024",
    minutos: 11,
    contenido: [
      { tipo: "parrafo", texto: "Hay algo mágico en los atardeceres de Lisboa. El sol se pone sobre el Tajo, tiñendo los tejados rojizos de tonos dorados y naranjas que parecen imposibles. La ciudad se ilumina gradualmente, y por unos minutos todo parece perfecto. He visto cientos de atardeceres desde diferentes miradores, y cada uno tiene su momento especial." },
      { tipo: "parrafo", texto: "Esta guía te lleva a los mejores lugares para ver el sunset, con información sobre cuándo llegar, qué llevar, y qué esperar en cada uno. Porque el atardecer perfecto requiere un poco de planificación, pero la recompensa vale cada minuto de espera." },
      { tipo: "subtitulo", texto: "Mirador da Senhora do Monte — El favorito de los locales" },
      { tipo: "parrafo", texto: "Este es, sin duda, el mejor mirador para el atardecer. Las vistas son de 360 grados —ves toda Lisboa desplegándose a tus pies—, y al estar alejado del circuito turístico, suele tener menos gente que otros miradores. El sol se pone justo frente a ti, creando un espectáculo que parece diseñado para este lugar." },
      { tipo: "parrafo", texto: "La pequeña ermita del siglo XVI añade un toque de solemnidad al momento. No hay quiosco ni servicios, así que lleva algo de beber. Los bancos de piedra se llenan rápido, así que llega al menos cuarenta minutos antes del atardecer si quieres un buen sitio." },
      { tipo: "lista", items: [
        "Direccion: Calçada do Monte 94",
        "Mejor hora: 30 minutos antes del atardecer",
        "Transporte: Bus 28 o caminar desde Graca",
        "Ambiente: Local y tranquilo"
      ]},
      { tipo: "tip", texto: "Llega 30 minutos antes del atardecer para coger buen sitio. Lleva algo de beber, no hay bares cerca." },
      { tipo: "subtitulo", texto: "2. Mirador das Portas do Sol" },
      { tipo: "parrafo", texto: "El mas famoso y turistico. Vistas increibles a Alfama y el rio. Siempre lleno, pero las vistas valen la pena. Tiene kiosco para tomar algo." },
      { tipo: "lista", items: [
        "Direccion: Largo das Portas do Sol",
        "Mejor hora: 30 minutos antes del atardecer",
        "Transporte: Tranvia 28 o caminar desde Baixa",
        "Ambiente: Turistico pero bonito"
      ]},
      { tipo: "subtitulo", texto: "3. Mirador de Santa Catarina (Adamastor)" },
      { tipo: "parrafo", texto: "Mirador alternativo con ambiente joven. Musica, cervezas, gente joven. El atardecer es bonito y el ambiente es relajado." },
      { tipo: "lista", items: [
        "Direccion: Rua de Santa Catarina",
        "Mejor hora: 30 minutos antes del atardecer",
        "Ambiente: Joven y relajado",
        "Tip: Lleva cerveza y disfruta"
      ]},
      { tipo: "subtitulo", texto: "4. Ponto Final (Cacilhas)" },
      { tipo: "parrafo", texto: "Cruza el rio en ferry y ves el atardecer desde el otro lado. Vistas directas a Lisboa, el sol se pone detras de la ciudad. Unico." },
      { tipo: "lista", items: [
        "Direccion: Cacilhas (ferry desde Cais do Sodre)",
        "Mejor hora: Reserva mesa para las 19:00",
        "Transporte: Ferry 2 EUR",
        "Especial: Cena con vistas al atardecer"
      ]},
      { tipo: "subtitulo", texto: "5. LX Factory (terraza)" },
      { tipo: "parrafo", texto: "Terraza con vistas al puente 25 de Abril. El atardecer detras del puente es increible. Puedes combinar con brunch o cena." },
      { tipo: "tip", texto: "Consulta la hora exacta del atardecer en Google antes de ir. Cambia segun la epoca del ano." }
    ]
  },
  "que-comprar-lisboa-souvenirs": {
    titulo: "Que Comprar en Lisboa: Souvenirs Autenticos",
    descripcion: "Azulejos, vino, conservas y artesania. Los mejores recuerdos que realmente valen la pena.",
    imagen: "/images/lisboa-originales/postales-souvenirs-lisboa.jpg",
    imageAlt: "Expositor de postales de Lisboa en una tienda de souvenirs, con tranvías amarillos, azulejos y sardinas ilustradas",
    categoria: "Consejos",
    fecha: "1 Nov 2024",
    minutos: 6,
    contenido: [
      { tipo: "parrafo", texto: "Los souvenirs tipicos de Lisboa son baratos y autenticos. Azulejos, vino, conservas, artesania. Aqui que comprar y donde encontrarlo sin turistadas." },
      { tipo: "subtitulo", texto: "1. Azulejos" },
      { tipo: "parrafo", texto: "Los azulejos son el souvenir mas tipico de Lisboa. Puedes comprar reproducciones modernas o azulejos antiguos en Feira da Ladra. Los modernos cuestan 5-15 EUR, los antiguos son mas caros." },
      { tipo: "lista", items: [
        "Donde: Feira da Ladra (muebles antiguos) o tiendas de Chiado",
        "Precio: 5-15 EUR (modernos), 20-50 EUR (antiguos)",
        "Tip: Los azulejos grandes pesan mucho, compra pequeños"
      ]},
      { tipo: "subtitulo", texto: "2. Vino de Oporto" },
      { tipo: "parrafo", texto: "El vino de Oporto es el mejor souvenir comestible. En cualquier supermercado o tienda especializada encuentras buenos vinos desde 10 EUR." },
      { tipo: "lista", items: [
        "Donde: Supermercados (Pingo Doce, Continente) o tiendas especializadas",
        "Precio: 10-30 EUR",
        "Tip: Compralo en el aeropuerto para evitar romperlo"
      ]},
      { tipo: "subtitulo", texto: "3. Conservas de pescado" },
      { tipo: "parrafo", texto: "Portugal tiene las mejores conservas del mundo. Sardinas, atun, pulpo. Puedes comprar latas decorativas o simples. Las decorativas cuestan 5-10 EUR." },
      { tipo: "lista", items: [
        "Donde: Conservas de Portugal (Chiado) o supermercados",
        "Precio: 2-5 EUR (simples), 5-10 EUR (decorativas)",
        "Tip: Las latas decorativas son perfectas para regalos"
      ]},
      { tipo: "subtitulo", texto: "4. Artesania en corcho" },
      { tipo: "parrafo", texto: "Portugal es el mayor productor de corcho del mundo. Encuentras carteras, bolsos, agendas hechas de corcho. Originales y ecologicas." },
      { tipo: "lista", items: [
        "Donde: Tiendas de artesania en Alfama o Principe Real",
        "Precio: 10-30 EUR",
        "Tip: Verifica que sea corcho real, no plastico"
      ]},
      { tipo: "subtitulo", texto: "5. Pasteles de nata" },
      { tipo: "parrafo", texto: "No puedes llevarlos frescos, pero puedes comprar latas de conserva (no son iguales pero funcionan) o libros de recetas. Las latas cuestan 5-8 EUR." },
      { tipo: "tip", texto: "Evita souvenirs baratos de Rossio o Baixa. Son de mala calidad y caros. Mejor comprar en tiendas locales o Feira da Ladra." }
    ]
  },
  "viajar-ninos-lisboa": {
    titulo: "Viajar con niños a Lisboa: guía completa para familias",
    seoTitle: "Viajar a Lisboa con niños",
    descripcion: "Actividades perfectas para pequeños exploradores, restaurantes kid-friendly, y consejos prácticos para que toda la familia disfrute Lisboa.",
    imagen: "/images/ventana-alfama-tajo.jpg",
    imageAlt: "Torres modernas del Parque das Nações reflejadas en el agua al atardecer",
    categoria: "Consejos",
    fecha: "28 Oct 2024",
    minutos: 12,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa es sorprendentemente amigable para familias. Tiene actividades que encantan a los niños —tranvías que suben colinas como montañas rusas, acuarios gigantes, castillos con murallas que explorar—, y muchas de las mejores cosas que hacer son gratis o muy baratas. He visto familias disfrutar Lisboa tanto como parejas o grupos de amigos." },
      { tipo: "parrafo", texto: "Esta guía está pensada para ayudarte a planificar un viaje donde los niños se diviertan sin que los adultos tengan que renunciar a disfrutar la ciudad. Porque la mejor forma de viajar con niños es encontrar el equilibrio entre lo que les gusta a ellos y lo que te gusta a ti." },
      { tipo: "subtitulo", texto: "Actividades para ninos" },
      { tipo: "subtitulo", texto: "1. Oceanario de Lisboa" },
      { tipo: "parrafo", texto: "El mejor oceanario de Europa. Tanques gigantes, tiburones, rayas, peces exoticos. Los ninos quedan fascinados. Cuesta 25 EUR adultos, con tarifa reducida para niños; consulta la web oficial, que cambia por tramos de edad." },
      { tipo: "lista", items: [
        "Direccion: Parque das Nacoes",
        "Precio: 22 EUR (adultos), 15 EUR (ninos)",
        "Duracion: 2-3 horas",
        "Edad: Perfecto para todas las edades"
      ]},
      { tipo: "subtitulo", texto: "2. Elevador de Santa Justa" },
      { tipo: "parrafo", texto: "A los ninos les encanta subir en el elevador. Vistas desde arriba, emocion de altura. Si no quieres pagar, sube gratis por las escaleras del Carmo." },
      { tipo: "subtitulo", texto: "3. Tranvia 28" },
      { tipo: "parrafo", texto: "El tranvia es una atraccion en si misma para los ninos. Sube y baja colinas, vistas bonitas. Es lento y siempre lleno, pero a los ninos les encanta." },
      { tipo: "tip", texto: "Ve temprano o tarde para evitar colas con ninos. El tranvia 12 hace una ruta similar con menos turistas." },
      { tipo: "subtitulo", texto: "4. Parques y jardines" },
      { tipo: "parrafo", texto: "Lisboa tiene muchos parques donde los ninos pueden correr y jugar. Jardin de Estrela, Parque Eduardo VII, Jardim da Estrela." },
      { tipo: "lista", items: [
        "Jardin da Estrela: Juegos infantiles, lago con patos",
        "Parque Eduardo VII: Espacio abierto, vistas",
        "Jardim do Principe Real: Jardin bonito, tranquilo"
      ]},
      { tipo: "subtitulo", texto: "5. Playas cercanas" },
      { tipo: "parrafo", texto: "Las playas de Cascais son perfectas para ninos. Agua calma, arena fina, paseo maritimo. A solo 30 minutos en tren." },
      { tipo: "subtitulo", texto: "Restaurantes kid-friendly" },
      { tipo: "parrafo", texto: "Los restaurantes portugueses suelen tener menus para ninos o platos simples que les gustan." },
      { tipo: "lista", items: [
        "Cervejaria Ramiro - Los ninos pueden comer patatas fritas mientras tu comes mariscos",
        "Time Out Market - Variedad de comida, todos encuentran algo",
        "Restaurantes locales - Piden 'meia dose' (media racion)"
      ]},
      { tipo: "tip", texto: "Pide 'meia dose' (media racion) en cualquier restaurante para los ninos. Mas economico y la porcion es perfecta." },
      { tipo: "subtitulo", texto: "Consejos para familias" },
      { tipo: "lista", items: [
        "Usa el metro y tranvia - A los ninos les encanta",
        "Evita las colinas empinadas con cochecito - Usa elevadores",
        "Lleva agua y snacks - Los ninos se cansan rapido",
        "Descansa en parques - Hay muchos donde parar",
        "Ve temprano a lugares turisticos - Menos cola con ninos"
      ]}
    ]
  },
  "excursiones-desde-lisboa": {
    titulo: "Las mejores excursiones desde Lisboa: escapadas de un día",
    seoTitle: "Excursiones de un día desde Lisboa",
    descripcion: "Sintra, Cascais, Óbidos, Nazaré, Évora, Arrábida y Fátima. Cómo llegar en transporte público, cuánto tiempo necesitas y cuáles se pueden combinar.",
    imagen: "/images/sintra-palacio-turistas.jpg",
    imageAlt: "Visitantes ante la fachada de un palacio de Sintra rodeado de jardines",
    categoria: "Guías",
    fecha: "25 Oct 2024",
    fechaActualizacion: "14 Ago 2026",
    dateModified: "2026-08-14",
    minutos: 12,
    fuentes: [
      { label: "Comboios de Portugal — horarios y billetes de tren", href: "https://www.cp.pt/" },
      { label: "Rede Expressos — autobuses de largo recorrido", href: "https://rede-expressos.pt/" },
      { label: "Parques de Sintra — monumentos y precios oficiales", href: "https://www.parquesdesintra.pt/" },
    ],
    contenido: [
      { tipo: "parrafo", texto: "Una de las ventajas menos comentadas de Lisboa es dónde está. A menos de dos horas en transporte público tienes palacios entre la niebla, un pueblo medieval entero dentro de sus murallas, playas de agua turquesa y una ciudad romana con un templo en pie. No hace falta alquilar coche para casi ninguna." },
      { tipo: "parrafo", texto: "Esta guía ordena las siete escapadas que de verdad merecen el día, con lo que importa para decidir: cómo se llega, cuánto tiempo necesitas de verdad y cuáles se pueden encadenar. No siempre necesitas un tour: una excursión organizada puede encajar si prefieres llevar los desplazamientos y las visitas resueltos. Los precios de entradas y billetes cambian cada temporada, así que doy el mecanismo y te enlazo a quien los publica, en vez de una cifra que caduque." },
      { tipo: "subtitulo", texto: "1. Sintra: la que hay que hacer sí o sí" },
      { tipo: "parrafo", texto: "Si solo puedes hacer una excursión, es esta. Palacios de cuento entre bosques de niebla, jardines con pozos iniciáticos y túneles, y una atmósfera que Lord Byron llamó «el Edén glorioso». Está a cuarenta minutos en tren desde la estación de Rossio, en pleno centro." },
      { tipo: "parrafo", texto: "El problema de Sintra es su éxito: en verano las colas del Palacio da Pena pueden ser de dos horas. La diferencia entre un día perfecto y uno agotador está en el orden de las visitas, no en levantarse pronto solamente." },
      { tipo: "lista", items: [
        "Cómo llegar: tren desde Rossio, cada 20-30 minutos",
        "Duración del trayecto: 40 minutos",
        "Tiempo necesario: día completo, sin discusión",
        "Qué ver: Quinta da Regaleira, Palacio da Pena, Castelo dos Mouros",
        "Entradas: los gestiona Parques de Sintra; compra online con antelación"
      ]},
      { tipo: "enlace", texto: "Sintra necesita su propia guía: el orden de visitas que evita las colas, cómo subir la montaña y dónde comer sin caer en el centro turístico.", href: "/blog/sintra-desde-lisboa", label: "Leer la guía completa de Sintra" },
      { tipo: "subtitulo", texto: "2. Cascais: medio día que sabe a más" },
      { tipo: "parrafo", texto: "Antiguo pueblo de pescadores convertido en villa de veraneo de la aristocracia portuguesa, y hoy la escapada más fácil de todas: tren directo desde Cais do Sodré, sin transbordos, con el Tajo a la izquierda durante todo el trayecto. Es el único de esta lista que se puede hacer en media tarde." },
      { tipo: "parrafo", texto: "El centro histórico se recorre en una hora larga. Lo que hace especial a Cascais es lo que hay alrededor: la Boca do Inferno, una grieta en el acantilado donde el mar entra con fuerza, y el paseo marítimo hacia el Guincho, con playas de surf y viento constante." },
      { tipo: "lista", items: [
        "Cómo llegar: tren desde Cais do Sodré, línea directa",
        "Duración del trayecto: 30-40 minutos",
        "Tiempo necesario: media jornada, o día completo si vas a la playa",
        "Qué ver: centro histórico, Boca do Inferno, playas, Cabo da Roca en bus",
        "Lo mejor: se combina con el Cabo da Roca sin volver a Lisboa"
      ]},
      { tipo: "subtitulo", texto: "3. Cabo da Roca: el punto más occidental de Europa" },
      { tipo: "parrafo", texto: "Un acantilado de 140 metros sobre el Atlántico donde, como dice el verso de Camões grabado en la piedra, «la tierra acaba y el mar empieza». No hay mucho que hacer: hay que mirar. Pero es de esos sitios donde la geografía se entiende de golpe." },
      { tipo: "parrafo", texto: "No tiene estación de tren. Se llega en autobús desde Cascais o desde Sintra, lo que lo convierte en el complemento natural de cualquiera de las dos. Lleva cortavientos aunque haga sol en Lisboa: aquí sopla siempre y la diferencia de temperatura es real." },
      { tipo: "lista", items: [
        "Cómo llegar: autobús desde Cascais o desde Sintra",
        "Tiempo necesario: una hora en el sitio, más el trayecto",
        "Qué ver: el faro, los acantilados, el hito con el verso de Camões",
        "Entrada: gratis",
        "Combina con: Cascais o Sintra, el mismo día"
      ]},
      { tipo: "subtitulo", texto: "4. Óbidos: un pueblo medieval entero" },
      { tipo: "parrafo", texto: "Óbidos es una villa amurallada del siglo XII que se conserva prácticamente intacta: casas encaladas con cenefas azules y amarillas, calles empedradas de un metro de ancho y una muralla que se puede recorrer entera por arriba, sin barandilla. La muralla es la visita, y es gratis." },
      { tipo: "parrafo", texto: "Se bebe ginjinha, un licor de guinda, servida en un vasito de chocolate que te comes al final. Es turístico y da igual: está bueno. Con medio día se ve bien; un día completo solo si vas sin prisa a comer." },
      { tipo: "lista", items: [
        "Cómo llegar: autobús desde la estación de Sete Rios",
        "Duración del trayecto: alrededor de una hora",
        "Tiempo necesario: media jornada",
        "Qué ver: la muralla completa, el castillo, las calles del interior",
        "Ojo: la muralla no tiene barandilla y el suelo es irregular"
      ]},
      { tipo: "subtitulo", texto: "5. Nazaré: el pueblo de las olas gigantes" },
      { tipo: "parrafo", texto: "Nazaré era un pueblo pesquero sin más hasta que un cañón submarino de cinco kilómetros de profundidad, que llega casi hasta la playa, lo convirtió en el sitio donde rompen las olas más grandes del mundo. En invierno se han surfeado aquí olas de más de veinte metros, y hay un mirador en el fuerte de São Miguel Arcanjo desde donde se ven." },
      { tipo: "parrafo", texto: "En verano es otra cosa: playa amplia, pescado a la brasa en el paseo y un funicular que sube al barrio alto del Sítio. Las olas gigantes son fenómeno de invierno, sobre todo entre octubre y marzo, y no están garantizadas ningún día concreto." },
      { tipo: "lista", items: [
        "Cómo llegar: autobús desde Sete Rios",
        "Duración del trayecto: hora y media",
        "Tiempo necesario: día completo",
        "Qué ver: la playa, el Sítio en funicular, el fuerte y su mirador",
        "Cuándo: olas gigantes entre octubre y marzo; playa en verano"
      ]},
      { tipo: "subtitulo", texto: "6. Évora: la parada romana y medieval" },
      { tipo: "parrafo", texto: "Évora es la excursión que casi nadie hace y la que más sorprende. Es Patrimonio de la Humanidad y tiene, dentro de la muralla, un templo romano del siglo I en pie, una catedral gótica que se puede subir hasta el tejado, y la Capela dos Ossos, forrada con los huesos de unos cinco mil monjes y un letrero en la entrada que traduce: «nosotros, los huesos que aquí estamos, por los vuestros esperamos»." },
      { tipo: "parrafo", texto: "Está en pleno Alentejo, así que el viaje es más largo y el paisaje cambia por completo: llanura, alcornoques y olivos. Se llega en autobús o en tren, y necesita día completo. Si tienes cuatro días en Lisboa y ya has hecho Sintra, esta es la segunda." },
      { tipo: "lista", items: [
        "Cómo llegar: autobús desde Sete Rios o tren desde Oriente",
        "Duración del trayecto: entre hora y media y dos horas",
        "Tiempo necesario: día completo",
        "Qué ver: templo romano, catedral y su tejado, Capela dos Ossos, la muralla",
        "Extra: es la puerta al Alentejo y a su cocina"
      ]},
      { tipo: "subtitulo", texto: "7. Arrábida: el agua turquesa que nadie espera en Portugal" },
      { tipo: "parrafo", texto: "El parque natural de la Arrábida, al sur del Tajo, tiene playas de arena blanca y agua transparente entre montañas cubiertas de vegetación mediterránea. La imagen no parece portuguesa: parece del Adriático. Portinho da Arrábida y Galapinhos son las dos playas que salen en las fotos." },
      { tipo: "parrafo", texto: "Es la única de la lista que cuesta de verdad sin coche. Hay autobuses hasta Setúbal y desde allí transporte local en temporada, pero la logística es incómoda y en verano el acceso rodado está limitado. Si vas a alquilar coche un día del viaje, que sea este." },
      { tipo: "lista", items: [
        "Cómo llegar: coche, o autobús a Setúbal y transporte local en temporada",
        "Duración del trayecto: alrededor de una hora en coche",
        "Tiempo necesario: día completo",
        "Qué ver: Portinho da Arrábida, Galapinhos, la sierra, Setúbal",
        "Ojo: en verano el acceso en coche a las playas está restringido"
      ]},
      { tipo: "subtitulo", texto: "Cuáles se pueden combinar y cuáles no" },
      { tipo: "parrafo", texto: "La tentación de juntar dos en un día es normal y casi siempre sale mal. Estas son las combinaciones que funcionan de verdad, porque comparten línea de transporte y no obligan a volver al centro de Lisboa en medio:" },
      { tipo: "lista", items: [
        "Cascais + Cabo da Roca: sí, hay autobús directo entre los dos",
        "Sintra + Cabo da Roca: sí, si renuncias a uno de los palacios",
        "Óbidos + Nazaré: sí, están en la misma dirección y la carretera las une",
        "Sintra + Cascais: mala idea, aunque haya autobús: los dos piden su tiempo",
        "Évora o Arrábida con cualquier otra: no, están en la otra dirección"
      ]},
      { tipo: "tip", texto: "Si solo tienes un día para excursión, ve a Sintra. Si tienes dos, añade Cascais con el Cabo da Roca. Si tienes tres y ya conoces lo obvio, Évora es la que más te va a sorprender." },
      { tipo: "aviso", texto: "Los precios de entradas, billetes de tren y autobús cambian cada temporada y según el operador. Consúltalos el mismo día en las webs oficiales que enlazo al final, en vez de fiarte de una cifra escrita hace meses." }
    ]
  },
  "vida-nocturna-lisboa": {
    titulo: "Vida nocturna en Lisboa: dónde salir y qué hacer de noche",
    seoTitle: "Vida nocturna en Lisboa: dónde salir de noche",
    metaDescription: "Dónde salir de noche en Lisboa: Bairro Alto, Cais do Sodré, fado y planes nocturnos. Qué zona elegir, cómo moverte y qué esperar de cada ambiente.",
    descripcion: "Bairro Alto, Cais do Sodré, fado y otros planes para disfrutar Lisboa de noche según el ambiente que busques.",
    imagen: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1200",
    imageAlt: "Calle estrecha de Lisboa llena de gente por la noche, entre bares iluminados",
    categoria: "Guías",
    fecha: "3 Feb 2026",
    fechaActualizacion: "Actualizado en septiembre de 2026",
    dateModified: "2026-09-21",
    minutos: 10,
    links: [
      { href: "/blog/chiado-bairro-alto-guia", label: "Guía de Chiado y Bairro Alto" },
      { href: "/blog/donde-escuchar-fado-autentico", label: "Dónde escuchar fado en Lisboa" },
      { href: "/blog/como-moverse-por-lisboa", label: "Cómo moverse por Lisboa" },
      { href: "/blog/restaurantes-romanticos-lisboa", label: "Restaurantes para una cena especial" },
    ],
    fuentes: [
      { label: "Visit Lisboa — Bairro Alto", href: "https://www.visitlisboa.com/pt-pt/locais/bairro-alto" },
      { label: "Visit Lisboa — Cais do Sodré", href: "https://www.visitlisboa.com/en/places/cais-do-sodre" },
      { label: "Visit Lisboa — Lisboa Centro y vida nocturna", href: "https://www.visitlisboa.com/pt-pt/regions/lisboa-centro" },
      { label: "Metro de Lisboa — horarios y frecuencias", href: "https://www.metrolisboa.pt/viajar/horarios-e-frequencias/" },
    ],
    contenido: [
      { tipo: "parrafo", texto: "Para salir de noche en Lisboa, no necesitas elegir un único «mejor bar». Lo más útil es escoger la zona según el tipo de noche que buscas. Bairro Alto funciona bien para empezar entre bares y ambiente de calle; Bica conecta esa zona con Cais do Sodré; y Cais do Sodré concentra bares, restaurantes y espacios para continuar más tarde." },
      { tipo: "parrafo", texto: "Si prefieres algo menos centrado en beber o bailar, la noche también puede ser una cena tranquila, una casa de fado o un paseo por zonas iluminadas del centro. Esta guía está organizada por ambiente para que puedas decidir sin convertir la noche en una lista de locales que puede quedar desactualizada." },

      { tipo: "subtitulo", texto: "Bairro Alto: dónde empezar una noche de bares" },
      { tipo: "parrafo", texto: "Visit Lisboa presenta Bairro Alto como uno de los centros clásicos de la vida nocturna de la ciudad, con bares y restaurantes repartidos por sus calles. La experiencia aquí está tanto dentro de los locales como en el ambiente exterior: la gente se mueve entre calles pequeñas y cambia de sitio según el momento." },
      { tipo: "parrafo", texto: "Es una buena zona si quieres variedad sin depender de una reserva o de un único local. También sirve para una noche más corta: puedes cenar por Chiado, subir a Bairro Alto y volver sin necesidad de terminar en una discoteca." },
      { tipo: "subseccion", texto: "Qué ver en Bairro Alto de noche" },
      { tipo: "parrafo", texto: "No hace falta convertir el barrio en una ruta de monumentos. El interés nocturno está en recorrer sus calles, pasar por zonas como Rua da Atalaia y Rua do Norte, acercarte a miradores próximos y decidir sobre la marcha dónde entrar. Si quieres entender el barrio también de día, la guía de Chiado y Bairro Alto tiene más contexto histórico y urbano." },
      { tipo: "enlace", texto: "Para conocer el barrio más allá de la noche y no tratarlo solo como zona de bares.", href: "/blog/chiado-bairro-alto-guia", label: "Qué ver en Chiado y Bairro Alto" },

      { tipo: "subtitulo", texto: "Bica y Cais do Sodré: bajar hacia bares, restaurantes y Pink Street" },
      { tipo: "parrafo", texto: "La transición más natural desde Bairro Alto es bajar hacia Bica y Cais do Sodré. Visit Lisboa describe precisamente ese recorrido como parte del patrón clásico de la noche lisboeta. Cais do Sodré añade una mezcla distinta: restaurantes, bares, la Rua Nova do Carvalho —conocida como Pink Street— y conexiones de transporte importantes." },
      { tipo: "parrafo", texto: "Si tu prioridad es quedarte en una zona con muchas opciones juntas, Cais do Sodré suele ser más práctico que saltar entre barrios alejados. También es fácil encajarlo después de cenar o después de pasar por el Mercado da Ribeira." },

      { tipo: "subtitulo", texto: "Bairro Alto o Cais do Sodré: cuál elegir" },
      { tipo: "lista", items: [
        "Bairro Alto: mejor si quieres empezar caminando entre bares pequeños y ambiente de calle.",
        "Cais do Sodré: mejor si prefieres concentrar bares, restaurantes y opciones para continuar la noche en una misma zona.",
        "Los dos: tienen sentido juntos porque el recorrido natural baja desde Bairro Alto y Bica hacia Cais do Sodré.",
        "Ninguno: si buscas una noche tranquila, una cena larga o fado puede encajar mejor que una zona de fiesta.",
      ] },

      { tipo: "subtitulo", texto: "Fado: una noche distinta en Alfama, Mouraria o Madragoa" },
      { tipo: "parrafo", texto: "La noche lisboeta no es solo bares y discotecas. Visit Lisboa destaca el fado como una de las experiencias nocturnas de la ciudad y sitúa casas tradicionales en barrios como Alfama, además de otras zonas históricas. Si esta es tu prioridad, conviene elegir el local por la música y las condiciones de la sesión, no simplemente porque aparezca cerca de una calle de fiesta." },
      { tipo: "enlace", texto: "La guía específica separa casas de fado, tascas y formatos para que puedas elegir sin mezclar experiencias distintas.", href: "/blog/donde-escuchar-fado-autentico", label: "Dónde escuchar fado en Lisboa" },

      { tipo: "subtitulo", texto: "Qué hacer en Lisboa de noche si no quieres salir de fiesta" },
      { tipo: "lista", items: [
        "Cenar con calma y terminar con un paseo corto por Chiado, Baixa o Cais do Sodré.",
        "Escuchar fado en un formato que encaje con tu presupuesto y el tiempo disponible.",
        "Elegir un mirador accesible al final de la tarde y enlazarlo con la cena.",
        "Pasear junto al Tajo por zonas céntricas y bien conectadas, sin cruzar media ciudad para encadenar planes.",
      ] },
      { tipo: "enlace", texto: "Si buscas una cena como plan principal de la noche.", href: "/blog/restaurantes-romanticos-lisboa", label: "Restaurantes para una cena especial en Lisboa" },

      { tipo: "subtitulo", texto: "Cómo volver: Metro y transporte nocturno" },
      { tipo: "parrafo", texto: "En condiciones normales, el Metro de Lisboa funciona todos los días de 06:30 a 01:00. En algunas noches especiales puede haber prolongaciones, pero no conviene asumirlas: comprueba el servicio del día si planeas volver tarde." },
      { tipo: "parrafo", texto: "Si tu plan termina después del Metro, revisa las opciones nocturnas de transporte público y las aplicaciones de transporte antes de salir. Lo práctico es decidir la vuelta antes de que termine la noche, sobre todo si tu alojamiento queda lejos de Bairro Alto o Cais do Sodré." },
      { tipo: "enlace", texto: "Para billetes, metro, buses y cómo combinar transporte según la zona.", href: "/blog/como-moverse-por-lisboa", label: "Cómo moverse por Lisboa" },

      { tipo: "subtitulo", texto: "Consejos para una primera noche" },
      { tipo: "lista", items: [
        "Elige una o dos zonas cercanas en lugar de cruzar la ciudad varias veces.",
        "Comprueba programación, horarios y condiciones directamente en el local que te interese.",
        "En calles muy concurridas, presta atención a móvil, cartera y pertenencias como harías en cualquier zona turística.",
        "Si vas a beber, deja resuelto de antemano cómo volver al alojamiento.",
        "No hace falta seguir la noche hasta tarde para disfrutar el ambiente: Bairro Alto y Cais do Sodré también funcionan para una salida corta.",
      ] },

      { tipo: "subtitulo", texto: "Una ruta sencilla para una primera noche" },
      { tipo: "parrafo", texto: "Una secuencia fácil es cenar por Chiado o cerca, caminar hacia Bairro Alto, bajar después por Bica y terminar en Cais do Sodré si todavía quieres continuar. Las zonas están conectadas de forma natural y evitas perder tiempo en desplazamientos largos." },
      { tipo: "parrafo", texto: "Si prefieres fado, cambia por completo el enfoque: cena y música en un barrio histórico, y deja la zona de bares para otra noche. Intentar meterlo todo en pocas horas suele convertir una experiencia agradable en una carrera." },
    ]
  },  "lisboa-en-invierno": {
    titulo: "Lisboa en Invierno: Por Qué Es la Mejor Época",
    descripcion: "Menos turistas, precios más bajos, clima suave y luz perfecta para fotografía. Todo lo que ganas visitando Lisboa entre noviembre y marzo.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Calle escalonada de Lisboa bajando entre fachadas de azulejo hacia el río Tajo",
    categoria: "Planificación",
    fecha: "1 Feb 2026",
    minutos: 10,
    contenido: [
      { tipo: "parrafo", texto: "Cuando le digo a alguien que mi época favorita para estar en Lisboa es el invierno, me miran como si estuviera loco. 'Pero si en verano es cuando hay que ir', responden. Y yo pienso: exacto, en verano es cuando van todos, y por eso en invierno es cuando se disfruta de verdad." },
      { tipo: "parrafo", texto: "El invierno en Lisboa no tiene nada que ver con el invierno del norte de Europa o de buena parte de Latinoamérica. Las temperaturas rara vez bajan de los 8-10 grados, hay una media de 5-6 horas de sol al día incluso en enero, y la luz tiene una cualidad dorada que los fotógrafos adoran. Sí, llueve, pero normalmente en chaparrones cortos que dan paso a cielos limpios." },
      { tipo: "subtitulo", texto: "Menos turistas, más Lisboa" },
      { tipo: "parrafo", texto: "La diferencia más brutal entre verano e invierno es la cantidad de gente. En julio y agosto, el Tranvía 28 tiene colas de una hora, los miradores están atestados y es imposible pasear por Alfama sin esquivar grupos de turistas con selfie sticks. En enero puedes subirte al tranvía 28 en la primera parada sin esperar, sentarte tranquilamente en el Mirador de Santa Luzia, y caminar por las callejuelas de Alfama escuchando solo tus pasos y el fado que sale de alguna ventana." },
      { tipo: "parrafo", texto: "Los museos están vacíos, los restaurantes tienen mesa sin reserva, y los locales recuperan sus sitios favoritos. Es la Lisboa auténtica, sin el filtro turístico que la transforma en verano." },
      { tipo: "subtitulo", texto: "Precios que hacen sonreír" },
      { tipo: "parrafo", texto: "Los vuelos a Lisboa en invierno cuestan entre un 30% y un 50% menos que en temporada alta. Un billete desde Madrid que en agosto cuesta 150-200€ ida y vuelta, en febrero lo encuentras por 40-60€. Los hoteles bajan de precio de forma similar: habitaciones que en verano cuestan 150€ por noche, en invierno las consigues por 70-80€. Y los Airbnb del centro, que en agosto son prohibitivos, en enero tienen precios de barrio residencial." },
      { tipo: "lista", items: [
        "Vuelos: 30-50% más baratos que en verano",
        "Hoteles: 40-60% de descuento respecto a temporada alta",
        "Restaurantes: Mismos precios, pero con menos espera y mejor servicio",
        "Entradas: Algunos monumentos tienen descuentos en temporada baja",
        "Transporte: Menos congestión, tranvías y buses más puntuales"
      ]},
      { tipo: "subtitulo", texto: "La luz de invierno en Lisboa" },
      { tipo: "parrafo", texto: "Si te interesa la fotografía, el invierno en Lisboa es un regalo. El sol está más bajo, lo que crea sombras largas y una luz dorada que dura más tiempo. La golden hour de verano dura quince minutos; en invierno puede durar más de una hora. Los atardeceres sobre el Tajo son más dramáticos, con cielos que pasan del rosa al morado con nubes que añaden textura." },
      { tipo: "parrafo", texto: "Los mejores miradores para fotografía invernal son el Mirador da Senhora do Monte (sin nadie, luz perfecta a las cuatro de la tarde), Santa Catarina (el sol se pone detrás del puente) y el Castelo de São Jorge (la luz rasante ilumina los tejados de Alfama de forma espectacular)." },
      { tipo: "subtitulo", texto: "Qué hacer en un día de lluvia" },
      { tipo: "parrafo", texto: "Cuando llueve —y lloverá algún día— Lisboa tiene opciones de sobra. El Oceanário de Lisboa es uno de los mejores acuarios de Europa y está genial para pasar una mañana. El Museo Nacional del Azulejo es fascinante y nunca está lleno. El Time Out Market es perfecto para comer de todo bajo techo. Y simplemente sentarte en un café histórico como A Brasileira o Café Nicola a ver llover mientras tomas una bica (espresso portugués) es una de las experiencias más lisboetas que existen." },
      { tipo: "tip", texto: "Lleva un paraguas plegable y zapatos impermeables. La calçada portuguesa (el empedrado típico) es muy resbaladiza cuando se moja. Las chaparrones suelen durar 20-30 minutos y luego sale el sol." },
      { tipo: "subtitulo", texto: "Eventos de invierno" },
      { tipo: "parrafo", texto: "Lisboa en invierno tiene eventos únicos: los mercados navideños de diciembre, la celebración de Año Nuevo con fuegos artificiales sobre el Tajo (uno de los mejores de Europa), el carnaval en febrero con desfiles por la Avenida da Liberdade, y el festival de fado en varios locales durante todo el invierno. La programación cultural es intensa porque los lisboetas, sin playa, se refugian en conciertos, teatro y exposiciones." }
    ]
  },
  "errores-turistas-lisboa": {
    titulo: "15 errores comunes al visitar Lisboa y cómo evitarlos",
    seoTitle: "15 errores al visitar Lisboa y cómo evitarlos",
    metaDescription: "Errores comunes al viajar a Lisboa: transporte, tranvía 28, Lisboa Card, cuestas, Sintra, horarios y planificación. Consejos actualizados para 2026.",
    descripcion: "Quince errores de planificación que pueden hacerte perder tiempo o dinero en Lisboa, con alternativas prácticas y datos actualizados de transporte.",
    imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200",
    imageAlt: "Gente esperando junto a una calle estrecha de Lisboa mientras pasa un tranvía",
    categoria: "Consejos",
    fecha: "28 Ene 2026",
    fechaActualizacion: "Actualizado en septiembre de 2026",
    dateModified: "2026-09-21",
    minutos: 11,
    links: [
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { href: '/blog/tarjeta-navegante-lisboa', label: 'Tarjeta Navegante y tarifas 2026' },
      { href: '/blog/lisboa-card-vale-la-pena', label: 'Cuándo compensa la Lisboa Card' },
      { href: '/blog/sintra-desde-lisboa', label: 'Cómo organizar Sintra' },
      { href: '/blog/aeropuerto-lisboa-al-centro', label: 'Aeropuerto al centro' },
      { href: '/blog/donde-alojarse-en-lisboa', label: 'Dónde alojarse en Lisboa' },
    ],
    fuentes: [
      { label: 'Metro de Lisboa: tarifas 2026', href: 'https://www.metrolisboa.pt/en/2025/12/19/new-fares-2026-2/' },
      { label: 'Metro de Lisboa: compra de títulos', href: 'https://www.metrolisboa.pt/en/buy/' },
      { label: 'CARRIS: línea 28E y alteraciones', href: 'https://www.carris.pt/viaje/carreiras/28e/' },
      { label: 'Visit Lisboa Shop: Lisboa Card', href: 'https://shop.visitlisboa.com/es/products/lisboa-card' },
      { label: 'Visit Lisboa Shop: cómo funciona la Lisboa Card', href: 'https://shop.visitlisboa.com/pt/blogs/news/how-lisboa-card-works' },
    ],
    contenido: [
      { tipo: "parrafo", texto: "Los errores que más estropean un viaje a Lisboa no suelen ser dramáticos. Son decisiones pequeñas: cruzar la ciudad varias veces el mismo día, comprar un pase sin calcularlo, reservar demasiado justo en Sintra o asumir que un tranvía funciona exactamente como viste en un vídeo antiguo. Esta lista se centra en esas decisiones corregibles." },

      { tipo: "subtitulo", texto: "1. Organizar el día por atracciones y no por zonas" },
      { tipo: "parrafo", texto: "Belém, Alfama, Graça, Parque das Nações y Chiado pueden parecer próximos cuando los miras como una lista de imprescindibles. En la práctica, saltar de una zona a otra añade transporte y cuestas. Agrupa cada jornada por barrios cercanos y deja los desplazamientos largos para uno o dos momentos concretos." },

      { tipo: "subtitulo", texto: "2. Subestimar las cuestas y la calçada portuguesa" },
      { tipo: "parrafo", texto: "Una distancia corta en el mapa puede incluir una subida fuerte o pavimento de piedra pulida. Elige calzado estable y, si el recorrido termina en Graça o Alfama, mira también el desnivel y no solo los minutos que marca la aplicación." },

      { tipo: "subtitulo", texto: "3. Construir el itinerario alrededor del tranvía 28E" },
      { tipo: "parrafo", texto: "El 28E es una experiencia histórica, pero no debería ser la pieza que sostiene todo tu día. CARRIS publica alteraciones temporales de recorrido y sustituciones por autobús cuando hay obras o cortes. Comprueba el estado de la línea el mismo día y ten una alternativa." },
      { tipo: "enlace", texto: "Si quieres usarlo por la experiencia y no depender de él para llegar a tiempo a otra reserva, revisa primero su guía.", href: "/blog/tram-28-historia-guia", label: "Tranvía 28: ruta y consejos" },

      { tipo: "subtitulo", texto: "4. Comprar el primer billete de transporte que ves" },
      { tipo: "parrafo", texto: "En 2026 el billete Carris/Metro cuesta 1,90 €, el zapping en Metro descuenta 1,72 €, el billete de 24 horas Carris/Metro cuesta 7,25 € y el pago directo con tarjeta bancaria en Metro cuesta 1,92 €. Ninguna opción es automáticamente la mejor: depende de cuántos trayectos harás y de qué operadores vayas a utilizar." },
      { tipo: "enlace", texto: "Compara títulos antes de cargar la tarjeta.", href: "/blog/tarjeta-navegante-lisboa", label: "Tarjeta Navegante en Lisboa" },

      { tipo: "subtitulo", texto: "5. Comprar la Lisboa Card sin comparar tu itinerario" },
      { tipo: "parrafo", texto: "La Lisboa Card puede incluir transporte y más de 50 museos o espacios culturales, además de descuentos, pero que tenga muchas inclusiones no significa que vayas a utilizarlas. Mira qué monumentos quieres visitar de verdad, comprueba sus condiciones actuales y compara el coste antes de comprar." },
      { tipo: "parrafo", texto: "Además, algunas visitas tienen condiciones propias. La información oficial de 2026 indica que Torre de Belém y Mosteiro dos Jerónimos requieren reserva de fecha y hora con Lisboa Card. No asumas que tener la tarjeta elimina automáticamente toda reserva o espera." },
      { tipo: "enlace", texto: "La comparación completa está separada para no convertir este artículo en una calculadora.", href: "/blog/lisboa-card-vale-la-pena", label: "¿Vale la pena la Lisboa Card?" },

      { tipo: "subtitulo", texto: "6. Asumir que todos los museos y monumentos tienen el mismo horario" },
      { tipo: "parrafo", texto: "No existe una regla útil del tipo “los museos cierran los lunes”. Cada espacio tiene su calendario, cierres puntuales y última admisión. Si una visita es importante para ti, comprueba la web oficial de ese lugar y no una captura antigua o una guía sin fecha." },

      { tipo: "subtitulo", texto: "7. Reservar Sintra con márgenes demasiado pequeños" },
      { tipo: "parrafo", texto: "El Palácio da Pena utiliza franjas horarias y llegar desde la estación de Sintra requiere otro desplazamiento. Colocar un tren, una subida y una entrada cronometrada sin margen convierte cualquier retraso en un problema. Reserva el día alrededor de la hora más rígida y no alrededor de una lista de cuatro palacios." },
      { tipo: "enlace", texto: "Aquí tienes una ruta pensada precisamente para evitar ese problema.", href: "/blog/sintra-desde-lisboa", label: "Sintra desde Lisboa" },

      { tipo: "subtitulo", texto: "8. Intentar hacer Sintra y Cascais como dos viajes completos el mismo día" },
      { tipo: "parrafo", texto: "Se pueden conectar, pero eso no significa que sea la mejor forma de conocer ambos lugares. Si tu prioridad es entrar en palacios y caminar por Sintra, añadir Cascais reduce el margen. Con cuatro o cinco días en Lisboa, suele ser más fácil separar las jornadas." },

      { tipo: "subtitulo", texto: "9. Elegir el traslado del aeropuerto solo por el precio" },
      { tipo: "parrafo", texto: "El Metro es económico y la Línea Roja conecta el aeropuerto con la red, pero una maleta grande, una llegada cercana al cierre o un alojamiento con una fuerte subida pueden hacer que otra opción sea más práctica. Mira el trayecto completo hasta la puerta, no solo el primer tramo." },
      { tipo: "enlace", texto: "Compara Metro, taxi y TVDE según tu destino y equipaje.", href: "/blog/aeropuerto-lisboa-al-centro", label: "Aeropuerto de Lisboa al centro" },

      { tipo: "subtitulo", texto: "10. Reservar alojamiento mirando solo la distancia en kilómetros" },
      { tipo: "parrafo", texto: "En Lisboa importan mucho la estación cercana, la pendiente y lo que harás por la noche. Un alojamiento que parece muy próximo al centro puede exigir una subida incómoda todos los días; otro algo más alejado puede estar mejor conectado." },
      { tipo: "enlace", texto: "La comparación de zonas incluye precisamente transporte, cuestas y tipo de viaje.", href: "/blog/donde-alojarse-en-lisboa", label: "Dónde alojarse en Lisboa" },

      { tipo: "subtitulo", texto: "11. Elegir dónde comer únicamente por estar en una plaza famosa" },
      { tipo: "parrafo", texto: "No hace falta asumir que una terraza de Rossio es mala ni que una tasca escondida será buena. Mira el menú, los precios y reseñas recientes antes de sentarte. Si el local no encaja con lo que quieres gastar, caminar unos minutos puede darte más opciones sin convertirlo en una regla contra los lugares turísticos." },

      { tipo: "subtitulo", texto: "12. Depender de una sola forma de pago" },
      { tipo: "parrafo", texto: "Portugal acepta ampliamente pagos electrónicos, pero llevar una alternativa evita problemas si un terminal falla o un establecimiento tiene condiciones distintas. No necesitas cargar grandes cantidades de efectivo: basta con no depender de un único medio." },
      { tipo: "enlace", texto: "Para tarjetas, cajeros y conversiones de moneda, usa la guía específica.", href: "/blog/como-pagar-en-portugal", label: "Cómo pagar en Portugal" },

      { tipo: "subtitulo", texto: "13. Llenar cada hora con una reserva" },
      { tipo: "parrafo", texto: "Lisboa funciona mejor con margen. Una cola, una cuesta, una comida larga o simplemente querer quedarse en un mirador pueden romper un itinerario cronometrado. Reserva lo que realmente exige hora y deja el resto del día suficientemente flexible." },

      { tipo: "subtitulo", texto: "14. No tener plan B para lluvia" },
      { tipo: "parrafo", texto: "La lluvia no obliga a perder el día, pero sí puede hacer menos agradables las colinas y la calçada. Guarda una visita cubierta y una zona plana como alternativa para mover el orden del itinerario sin improvisar desde cero." },
      { tipo: "enlace", texto: "Tenemos una ruta completa de alternativas cubiertas.", href: "/blog/lisboa-cuando-llueve", label: "Qué hacer en Lisboa cuando llueve" },

      { tipo: "subtitulo", texto: "15. Confundir “ver mucho” con aprovechar el viaje" },
      { tipo: "parrafo", texto: "Diez monumentos en un día pueden producir muchas fotos y poca memoria de la ciudad. Lisboa también se entiende caminando por un barrio, sentándose junto al Tajo o dejando tiempo para una comida. El mejor itinerario no es el que tiene más paradas, sino el que puedes hacer sin correr." },

      { tipo: "subtitulo", texto: "La regla que resume los quince" },
      { tipo: "parrafo", texto: "Comprueba los datos que cambian, agrupa el día por zonas y deja margen. Con esas tres decisiones evitas buena parte de los problemas de transporte, reservas y presupuesto que más complican una primera visita." },
      { tipo: "enlace", texto: "Si prefieres empezar con una ruta ya organizada por zonas, compara los itinerarios según los días que tengas.", href: "/itinerarios", label: "Ver itinerarios de Lisboa" },
    ]
  },  "historia-de-lisboa": {
    titulo: "Historia de Lisboa: De los Fenicios al Siglo XXI",
    descripcion: "Más de 3.000 años de historia en la ciudad más antigua de Europa occidental. Romanos, moros, el Imperio y el terremoto que lo cambió todo.",
    imagen: "/images/lisboa-originales/mural-historia-lisboa.jpg",
    imageAlt: "Mural pintado a mano con viñetas de la historia de Lisboa, desde la conquista de 1147 hasta el Acueducto de las Aguas Libres",
    categoria: "Cultura",
    fecha: "20 Mar 2026",
    minutos: 18,
    contenido: [
      { tipo: "parrafo", texto: "Hay una cosa que no me canso de decirle a la gente que viene a visitarme: Lisboa lleva habitada más de tres mil años. Cuando los primeros constructores de Notre-Dame ponían la primera piedra en París, en las colinas sobre el Tajo ya había cinco siglos de civilización acumulada. Fenicios, romanos, visigodos, árabes, cruzados europeos y navegantes portugueses han dejado capas de historia tan densas que la ciudad entera es un yacimiento arqueológico andando." },
      { tipo: "parrafo", texto: "Por eso cuando alguien me pregunta por qué los azulejos están en todas partes, por qué el fado suena a algo que no sabes definir pero que te llega, o por qué Lisboa mira siempre al río como si esperara algo, la respuesta nunca tiene una sola frase. Tiene tres mil años." },
      { tipo: "subtitulo", texto: "Los Orígenes: Fenicios y la Leyenda de Ulises (1200-700 a.C.)" },
      { tipo: "parrafo", texto: "Los primeros habitantes conocidos de la colina que hoy ocupa el Castelo de São Jorge fueron pueblos del Bronce Tardío, alrededor del 1200 a.C. Pero fue con la llegada de los fenicios —grandes navegantes y comerciantes semitas— cuando el asentamiento cobró importancia. Los fenicios la llamaron Alis Ubbo, que en su lengua significaba 'puerto apacible'. El lugar era perfecto: una colina defendible sobre un estuario navegable, protegido del Atlántico." },
      { tipo: "parrafo", texto: "La leyenda alternativa —que los propios lisboetas repiten con cariño— atribuye la fundación a Ulises (Odiseo), el héroe griego de la Ilíada. Según el mito, Ulises fundó la ciudad durante su largo viaje de regreso a Ítaca. De ahí viene Olissipo, el nombre latino de la ciudad, supuestamente derivado de su nombre. La ciencia moderna descarta la leyenda, pero los lisboetas la conservan: hay una estatua de Ulises en el Panteón Nacional." },
      { tipo: "subtitulo", texto: "Olissipo Romana: La Ciudad que Roma Convirtió en Joya del Imperio (200 a.C. - 500 d.C.)" },
      { tipo: "parrafo", texto: "Roma conquistó la Península Ibérica a partir del siglo II a.C. Olissipo se convirtió en una de las ciudades más prósperas de Lusitania (la actual Portugal y parte de España). Julio César la elevó a la categoría de municipio romano en el año 60 a.C., un privilegio enorme que le daba a sus ciudadanos los mismos derechos que los romanos de Italia." },
      { tipo: "parrafo", texto: "La ciudad romana se extendía por las actuales Baixa y parte de Alfama. Tenía teatro (se pueden ver restos bajo el Chiado), termas, acueducto y el foro en lo que hoy es la Praça da Figueira. Olissipo exportaba garum —una salsa de pescado fermentada que era al Imperio Romano lo que el ketchup al siglo XX— a toda Europa. Las fábricas de garum se han encontrado bajo varios edificios del centro histórico." },
      { tipo: "tip", texto: "Puedes ver restos del Lisboa romano en el Núcleo Arqueológico de la Rua dos Correeiros (bajo el banco BCP en Baixa), en el Museu do Teatro Romano, y en las ruinas del Convento do Carmo." },
      { tipo: "subtitulo", texto: "Al-Uşbûna: La Ciudad Mora (714-1147)" },
      { tipo: "parrafo", texto: "En el año 714, los ejércitos islámicos que habían cruzado el estrecho de Gibraltar tres años antes llegaron a Lisboa. La ciudad pasó a llamarse Al-Uşbûna y vivió más de cuatro siglos bajo dominio árabe. Este período dejó una huella profunda que todavía es visible: la medina mora se extendía por lo que hoy es Alfama (del árabe Al-hamma, 'fuente caliente de agua'), y la estructura laberíntica de sus calles sigue siendo árabe." },
      { tipo: "parrafo", texto: "Los moros construyeron o reforzaron el castillo, excavaron cisternas de agua, y convirtieron la ciudad en un centro comercial entre Europa y el Mediterráneo. La palabra 'alfange' (tipo de espada), 'alcova' (dormitorio), 'azulejo' (del árabe az-zulayj) y muchas otras palabras portuguesas tienen origen árabe. El legado moro en la lengua, la arquitectura y la gastronomía portuguesa es inmenso." },
      { tipo: "subtitulo", texto: "La Reconquista: Afonso Henriques y 1147" },
      { tipo: "parrafo", texto: "En 1147, el primer rey de Portugal, Afonso Henriques, sitiaba Lisboa con sus tropas. La ciudad era una fortaleza bien defendida. Fue entonces cuando llegó providencialmente una flota de cruzados del norte de Europa —ingleses, alemanes, flamencos— de camino a Tierra Santa. Afonso negoció con ellos: si le ayudaban a conquistar Lisboa, podían quedarse con el botín y las tierras." },
      { tipo: "parrafo", texto: "El asedio duró cuatro meses. Según las crónicas, las tropas de Afonso atacaban por tierra mientras los cruzados cortaban el suministro por mar. El 25 de octubre de 1147, Lisboa cayó. El primer obispo de la Lisboa cristiana fue un cruzado inglés: Gilberto de Hastings. Se dice que algunos de esos cruzados se quedaron a vivir en Lisboa, y sus descendientes aún viven en algunos barrios históricos." },
      { tipo: "subtitulo", texto: "Capital del Imperio: Los Siglos XV y XVI" },
      { tipo: "parrafo", texto: "La Lisboa medieval fue creciendo alrededor del castillo y hacia el río. Pero la ciudad que conocemos hoy nació principalmente en los siglos XV y XVI, cuando Portugal construyó el mayor imperio marítimo del mundo. El descubrimiento de la ruta a India por Vasco de Gama en 1498, la llegada de Cabral a Brasil en 1500, y la primera vuelta al mundo de Magallanes y Elcano (que partió de Sevilla pero con tripulación y planificación portuguesa)... todo esto convirtió a Lisboa en la capital del mundo." },
      { tipo: "parrafo", texto: "La ciudad creció hasta los 100.000 habitantes, convirtiéndose en una de las mayores de Europa. El barrio de Belém, entonces fuera de la ciudad, se llenó de monasterios, palacios y arsenales. El Mosteiro dos Jerónimos, construido con el dinero de las especias de India, es la joya de ese período. El estilo manuelino —con sus decoraciones de cuerdas, armillas, cruz de la Orden de Cristo y motivos marinos— es la expresión artística de esa Lisboa imperial." },
      { tipo: "subtitulo", texto: "La Catástrofe: El Terremoto de 1755" },
      { tipo: "parrafo", texto: "El 1 de noviembre de 1755, Día de Todos los Santos, mientras la población asistía a misa, un terremoto de magnitud estimada entre 8 y 9 sacudió Lisboa durante diez minutos. Lo que no destruyó el sismo lo destruyó el tsunami que llegó cuarenta minutos después por el Tajo. Los incendios ardieron durante días. Entre 30.000 y 60.000 personas murieron en Lisboa (de una población de 200.000)." },
      { tipo: "parrafo", texto: "La Baixa actual no existía antes del terremoto. El Marqués de Pombal, primer ministro del rey José I, organizó la reconstrucción con una eficiencia y modernidad asombrosas para la época. La nueva Baixa Pombalina fue diseñada con calles rectilíneas, edificios prefabricados con estructuras antisísmicas (la famosa 'gaiola pombalina'), plazas regulares y una urbanística que adelantaba en dos siglos lo que haría el barón Haussmann en París." },
      { tipo: "subtitulo", texto: "El Siglo XX: De la Dictadura a la Revolución de los Claveles" },
      { tipo: "parrafo", texto: "El siglo XX comenzó con el fin de la monarquía (1910) y la proclamación de la República. Pero lo que más marcó a Portugal fue la dictadura de António de Oliveira Salazar (1932-1968), el Estado Novo. Bajo Salazar, Portugal mantuvo sus colonias en África y Asia cuando el resto del mundo descolonizaba, lo que llevó a guerras coloniales devastadoras en Angola, Mozambique y Guinea-Bissau." },
      { tipo: "parrafo", texto: "La mañana del 25 de abril de 1974, un grupo de capitanes del ejército dio un golpe de estado casi incruento que terminó con cincuenta años de dictadura. En Lisboa, la gente salió a las calles a celebrar. Alguien metió claveles (era la flor de temporada en los mercados) en los cañones de los fusiles de los soldados. La Revolución de los Claveles no disparó un solo tiro y cambió para siempre la historia de Portugal. El 25 de abril es hoy festivo nacional y el Puente sobre el Tejo, inaugurado en 1966 como Puente Salazar, fue rebautizado como Puente 25 de Abril." },
      { tipo: "subtitulo", texto: "Lisboa Hoy: Capital Europea y Ciudad del Mundo" },
      { tipo: "parrafo", texto: "Desde la entrada en la Unión Europea en 1986 hasta hoy, Lisboa ha vivido una transformación radical. La Expo 98 regeneró el barrio de Parque das Nações, convirtiendo una zona industrial abandonada en el modelo de urbanismo contemporáneo de la ciudad. En los años 2010, Lisboa se convirtió en uno de los destinos más deseados de Europa: el reconocimiento de su luz especial, su cultura, su gastronomía y sus precios (todavía razonables comparados con el norte de Europa) atrajeron a millones de visitantes." },
      { tipo: "parrafo", texto: "La Lisboa de 2026 es una ciudad en equilibrio delicado: entre la tradición y la modernidad, entre el turismo y la vida cotidiana de sus habitantes, entre la globalización y la preservación de su identidad única. Caminar por sus calles es, todavía, uno de los placeres más intensos que puede ofrecer Europa." },
      { tipo: "enlace", texto: "Hay una versión de esta historia que se cuenta caminando, con los sitios delante, y funciona distinto que leerla.", href: "/free-tours-lisboa#ruta-misterios", label: "Ver los free tours de leyendas y misterios" },
    ]
  },
  "terremoto-lisboa-1755": {
    titulo: "El Terremoto de Lisboa de 1755: La Catástrofe que Rehízo Europa",
    seoTitle: "El terremoto de Lisboa de 1755",
    descripcion: "El 1 de noviembre de 1755, un terremoto de magnitud 8,5 destruyó Lisboa. Así fue el desastre, la reconstrucción y el impacto filosófico en todo el mundo.",
    imagen: "/images/lisboa-originales/azulejo-terreiro-do-paco-siglo-xviii.png",
    imageAlt: "Panel de azulejos que representa el Terreiro do Paço a comienzos del siglo XVIII, con soldados y carruajes en la plaza, tal como era antes del terremoto de 1755",
    categoria: "Cultura",
    fecha: "18 Mar 2026",
    minutos: 15,
    contenido: [
      { tipo: "parrafo", texto: "El 1 de noviembre de 1755 era Día de Todos los Santos. A las 9:40 de la mañana, las iglesias de Lisboa estaban llenas. La ciudad era una de las más ricas del mundo: sus almacenes guardaban especias de India, su bahía rebosaba barcos cargados de oro brasileño, sus iglesias tenían techos dorados. En ese momento exacto, la tierra empezó a moverse. Y no paró durante diez minutos." },
      { tipo: "parrafo", texto: "Lo que pasó en las siguientes horas —el terremoto, el tsunami, el incendio de cinco días— destruyó el 85% de la ciudad y mató a entre 30.000 y 60.000 personas. Pero la historia del terremoto de Lisboa no termina en la catástrofe. Termina en la reconstrucción más rápida y moderna de la historia europea, y en un debate filosófico que todavía hoy no tiene respuesta definitiva." },
      { tipo: "subtitulo", texto: "El Día más Oscuro: 1 de Noviembre de 1755" },
      { tipo: "parrafo", texto: "Era el Día de Todos los Santos. Prácticamente toda la población católica de Lisboa estaba en misa cuando el primer temblor sacudió la ciudad a las 9:40. Los testigos describen un rugido sordo que vino de bajo tierra, seguido de tres sacudidas violentas durante nueve o diez minutos. Las iglesias, llenas de fieles, se derrumbaron. Los palacios se agrietaron. Las calles se abrieron." },
      { tipo: "parrafo", texto: "Pero lo peor estaba por llegar. El terremoto generó un tsunami que llegó al estuario del Tajo unos cuarenta minutos después. Una ola de seis metros entró por el río y barrió el barrio de Belém y la orilla del Tajo. Quienes habían sobrevivido al terremoto corriendo hacia el río para alejarse de los edificios fueron engullidos por el agua." },
      { tipo: "parrafo", texto: "Luego llegaron los incendios. Las velas encendidas en los altares durante la misa, las cocinas que ardían preparando el festín de Todos los Santos, los braseros encendidos por el frío de noviembre... En ausencia de suministro de agua (la red de tuberías se había destruido), los incendios ardieron durante cinco días. La Lisboa medieval, con sus edificios de madera y sus calles estrechas, fue consumida por el fuego." },
      { tipo: "subtitulo", texto: "Las Cifras de la Tragedia" },
      { tipo: "parrafo", texto: "Los historiadores debaten todavía las cifras exactas, pero los cálculos más aceptados hablan de entre 30.000 y 60.000 muertos solo en Lisboa, de una población de aproximadamente 200.000 habitantes. Algunos cálculos llegan hasta 100.000 si se incluyen las víctimas del tsunami en la costa algarvia y en Marruecos, donde también causó daños enormes." },
      { tipo: "parrafo", texto: "El 85% de los edificios de Lisboa quedó destruido o gravemente dañado. Desaparecieron bajo los escombros la mayoría de las grandes bibliotecas con manuscritos únicos, archivos históricos, colecciones de arte reunidas durante siglos, y decenas de iglesias con siglos de historia. Es imposible calcular lo que se perdió en términos de patrimonio cultural e histórico." },
      { tipo: "subtitulo", texto: "Pombal: El Hombre que Rehízo Lisboa" },
      { tipo: "parrafo", texto: "La leyenda dice que cuando el rey José I preguntó a su primer ministro, Sebastião José de Carvalho e Melo (más conocido como el Marqués de Pombal), qué debía hacerse, este respondió: 'Enterrar a los muertos y cuidar a los vivos'. Acertada o no, la anécdota captura perfectamente el pragmatismo de Pombal." },
      { tipo: "parrafo", texto: "Pombal organizó en días lo que hubiera tardado años en cualquier otra administración de la época. Militarizó la ciudad para evitar el saqueo. Instaló campos de refugiados en las colinas. Creó brigadas para enterrar los cadáveres (algunos fueron enterrados en el mar para evitar epidemias). Y luego se puso a diseñar la nueva Lisboa." },
      { tipo: "parrafo", texto: "El plan de Pombal para reconstruir la Baixa (el barrio más destruido) fue revolucionario. Calles rectilíneas trazadas en cuadrícula, lo que en 1755 era una modernidad urbanística extraordinaria. Edificios estandarizados con estructuras de madera llamadas 'gaiola pombalina' (jaula pombalina), un sistema antisísmico que los ingenieros modernos todavía admiran. Plazas regulares que conectaban la nueva ciudad con el río." },
      { tipo: "tip", texto: "La Baixa Pombalina —el corazón moderno de Lisboa— fue construida sobre los escombros del terremoto. Cada vez que caminas por la Rua Augusta o la Praça do Comércio, estás en un barrio que fue diseñado de cero hace menos de 270 años." },
      { tipo: "subtitulo", texto: "El Impacto Filosófico: Voltaire y el Problema del Mal" },
      { tipo: "parrafo", texto: "El terremoto de Lisboa no solo destruyó edificios: sacudió los cimientos intelectuales del siglo XVIII. En un período en que filósofos como Leibniz argumentaban que vivimos en 'el mejor de los mundos posibles' gracias a la providencia divina, la destrucción de una ciudad el Día de Todos los Santos mientras sus habitantes estaban en misa fue un argumento poderoso en contra." },
      { tipo: "parrafo", texto: "Voltaire escribió su célebre 'Poème sur le désastre de Lisbonne' solo tres semanas después del terremoto, atacando la filosofía del optimismo: ¿Cómo puede ser este el mejor mundo posible si en él ocurren estas catástrofes? Su novela Cándido, publicada cuatro años después, tiene en el terremoto de Lisboa uno de sus episodios centrales y sigue siendo hoy la crítica literaria más brillante del optimismo irreflexivo." },
      { tipo: "parrafo", texto: "El debate filosófico generado por el terremoto de Lisboa contribuyó al desarrollo de lo que llamamos la teodicea moderna (el problema de cómo puede existir el mal si Dios es todopoderoso y bueno) y al nacimiento de una visión más secular del mundo que caracterizaría la Ilustración." },
      { tipo: "subtitulo", texto: "Qué Ver Hoy: Las Huellas del Terremoto en Lisboa" },
      { tipo: "parrafo", texto: "La Lisboa que visitas hoy fue construida en su mayor parte después de 1755. Pero hay rastros visibles de la catástrofe y la reconstrucción en toda la ciudad. Las ruinas del Convento do Carmo, en el Chiado, fueron dejadas deliberadamente como memorial del terremoto: la nave de la iglesia está abierta al cielo, con las columnas góticas supervivientes apuntando hacia arriba como dedos. Es el monumento accidental más elocuente de Lisboa." },
      { tipo: "parrafo", texto: "La Praça do Comércio, la gran plaza frente al Tajo, fue diseñada por Pombal como entrada triunfal a la nueva Lisboa. Antes se llamaba Terreiro do Paço porque ahí estaba el Palácio da Ribeira, la residencia real destruida por el terremoto. La estatua ecuestre del rey José I en el centro fue la primera estatua pública de un monarca europeo fundida en bronce." },
      { tipo: "tip", texto: "En el Museu de Lisboa (Palácio Pimenta) hay maquetas y grabados que muestran la Lisboa pre y post-terremoto. Es la mejor manera de entender qué cambió y qué se perdió ese 1 de noviembre de 1755." }
    ]
  },
  "descubrimientos-portugueses-lisboa": {
    titulo: "La Era de los Descubrimientos: Cómo Lisboa Dominó el Mundo",
    seoTitle: "La era de los Descubrimientos",
    descripcion: "En el siglo XV, Lisboa era la capital del mundo. Vasco de Gama, Cabral, Magallanes: todo partió desde aquí. La historia de cuando Portugal cambió la historia de la humanidad.",
    imagen: "/images/actividades/passeio-barco-rio-tejo-lisboa.webp",
    imageAlt: "Velero navegando por el Tajo frente a Lisboa, con la Praça do Comércio y la colina del Castelo al fondo",
    categoria: "Cultura",
    fecha: "15 Mar 2026",
    minutos: 16,
    contenido: [
      { tipo: "parrafo", texto: "Hubo un período de poco más de cien años, entre 1415 y 1542, en que Portugal —un pequeño reino en el extremo occidental de Europa, con apenas un millón de habitantes— conectó el mundo. Comerciantes portugueses llegaron a Brasil, a India, a China, a Japón, a las costas de África. Vasco de Gama encontró la ruta marítima a las especias. Pedro Álvares Cabral llegó a Brasil. Fernando de Magallanes (Fernando Magalhães), aunque al servicio de España, era portugués y su expedición completó la primera vuelta al mundo." },
      { tipo: "parrafo", texto: "Todo partió de Lisboa. El barrio de Belém, hoy un suburbio pacífico con el mejor jardín de la ciudad y el mejor museo de azulejos del mundo, fue durante ese período el lugar más importante del planeta: desde sus muelles partían los barcos que cambiaban la historia de la humanidad." },
      { tipo: "subtitulo", texto: "El Infante Don Henrique y el Principio de Todo" },
      { tipo: "parrafo", texto: "La historia de los descubrimientos empieza en 1415 con la conquista de Ceuta, la primera posesión portuguesa en África. El artífice fue el Infante Dom Henrique, hijo del rey João I y de Felipa de Lancaster (inglesa). Henrique no era un navegante: era un organizador, un financiador, un visionario. Instalado en Sagres, en el extremo suroeste de Portugal, reunió cartógrafos, navegantes, matemáticos y astrónomos, y creó lo que podría llamarse el primer centro de investigación aplicada de la historia." },
      { tipo: "parrafo", texto: "Bajo su patrocinio, los barcos portugueses fueron avanzando cada año un poco más hacia el sur por la costa africana, cartografiando lo desconocido. En 1444, Nuno Tristão llegó al río Senegal, el primer europeo en cruzar el Trópico de Cáncer. En 1460, cuando murió Henrique, los portugueses habían llegado a Sierra Leona. El camino a India estaba trazado." },
      { tipo: "subtitulo", texto: "Vasco de Gama: La Ruta que Cambió el Comercio Mundial" },
      { tipo: "parrafo", texto: "El 8 de julio de 1497, cuatro navíos partieron del estuario del Tajo, de los muelles de Belém, ante la multitud que se agolpaba en la orilla. Al mando iba Vasco de Gama, un hidalgo de Sines con experiencia militar pero sin historial de grandes viajes. Su misión era encontrar la ruta marítima a India bordeando África." },
      { tipo: "parrafo", texto: "El viaje duró dos años. Rodearon el Cabo de Buena Esperanza (que Bartolomeu Dias había doblado diez años antes), subieron por la costa oriental de África, cruzaron el Índico con la ayuda de un piloto árabe, y llegaron a Calicut (India) el 20 de mayo de 1498. Volvieron a Lisboa en septiembre de 1499 con la bodega llena de pimienta, clavo, canela y jengibre." },
      { tipo: "parrafo", texto: "El valor de la carga era sesenta veces el coste del viaje. La ruta marítima a India rompió el monopolio de los mercaderes árabes y venecianos en el comercio de especias y creó el primer sistema de comercio global. Lisboa se convirtió en el centro de ese sistema." },
      { tipo: "subtitulo", texto: "Belém: El Barrio que Partió al Mundo" },
      { tipo: "parrafo", texto: "El Mosteiro dos Jerónimos, en Belém, fue construido para conmemorar el descubrimiento de la ruta a India. Financiado con el impuesto de la pimenta (el quinto real sobre las especias), es la obra cumbre del estilo manuelino: el arte portugués del Renacimiento, con su mezcla única de decoración gótica, elementos marinos (cuerdas, armillas, cruces de la Orden de Cristo) y motivos exóticos traídos de Asia." },
      { tipo: "parrafo", texto: "En la iglesia del monasterio están enterrados Vasco de Gama y el poeta Luís de Camões, el autor de Os Lusíadas, la epopeya que narró los descubrimientos y se convirtió en el libro fundacional de la identidad portuguesa. La Torre de Belém, al borde del río, fue construida como fortaleza y ceremonial: desde aquí se despedía y recibía a los barcos." },
      { tipo: "tip", texto: "El Padrão dos Descobrimentos, la escultura monumental en la orilla del Tajo en Belém, fue construida en 1960 para conmemorar el quinto centenario de la muerte del Infante Henrique. Sobre la proa del barco de piedra, las figuras de los grandes navegantes miran al río desde donde partieron." },
      { tipo: "subtitulo", texto: "El Imperio y su Precio" },
      { tipo: "parrafo", texto: "En su momento álgido, el Imperio Português controlaba el comercio marítimo entre Europa, África, Asia y América. Lisboa era la ciudad más cosmopolita del mundo: en sus calles se escuchaban el árabe, el swahili, el hindi, el japonés, el tupí. El comercio con Brasil trajo azúcar; con África, especias y, tristemente, esclavos; con India, telas y piedras preciosas." },
      { tipo: "parrafo", texto: "El período del Imperio dejó en Lisboa una arquitectura espléndida, una lengua que hoy hablan 260 millones de personas en cinco continentes, y una cultura de mestizaje que todavía define la identidad portuguesa. Pero también dejó las cicatrices del comercio de esclavos —Portugal fue uno de los principales actores del tráfico transatlántico— y de guerras coloniales que duraron hasta 1974." },
      { tipo: "subtitulo", texto: "Cómo Recorrer la Historia de los Descubrimientos en Lisboa" },
      { tipo: "parrafo", texto: "Un día en Belém es suficiente para tocar con los dedos esa historia. El Mosteiro dos Jerónimos (2 horas mínimo), la Torre de Belém (30 minutos, pero las vistas al río desde arriba justifican la espera), y el Padrão dos Descobrimentos son los tres puntos principales. El Museu de Marinha, junto al Mosteiro, tiene las embarcaciones y los instrumentos de navegación originales que usaron los exploradores." },
      { tipo: "parrafo", texto: "Y luego, por la tarde, comer un pastel de nata en la Pastéis de Belém, la pastelería fundada en 1837 que todavía usa la receta original de los monjes del Mosteiro. Comer un pastel de nata en Belém, mirando el Tajo por donde partieron los barcos que descubrieron el mundo, es una de las experiencias más portuguesas que existen." }
    ]
  },
  "azulejos-portugueses-historia": {
    titulo: "Los Azulejos Portugueses: Arte, Historia y Dónde Ver los Mejores en Lisboa",
    seoTitle: "Azulejos portugueses | Dónde verlos",
    descripcion: "Los azulejos son el alma visible de Portugal. Su historia de 500 años, técnicas, museos y los mejores rincones de Lisboa donde admirarlos.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Aldaba de bronce con cabeza de león en una puerta antigua de Lisboa",
    categoria: "Cultura",
    fecha: "12 Mar 2026",
    minutos: 13,
    contenido: [
      { tipo: "parrafo", texto: "Hay una imagen de Lisboa que no aparece en las postales pero que cualquier visitante lleva consigo para siempre: la pared de una casa cubierta de azulejos azules y blancos, desgastados por el tiempo, con pequeñas grietas donde crece una planta diminuta. O la fachada de una iglesia entera vestida de cerámica policromada, brillando bajo el sol de la tarde. O el interior de una estación de metro decorada con paneles narrativos del siglo XX que parecen miniaturizaciones de la historia de Portugal." },
      { tipo: "parrafo", texto: "Los azulejos son el arte más democrático de Portugal: están en los palacios y en las fachadas de los edificios modestos, en las estaciones de tren y en los bares de barrio, en las iglesias más ricas y en las escaleras de las casas de vecinos. Entender los azulejos es entender Portugal." },
      { tipo: "subtitulo", texto: "Historia: Cinco Siglos de Arte Cerámico" },
      { tipo: "parrafo", texto: "La palabra 'azulejo' viene del árabe 'az-zulayj', que significa 'pequeña piedra pulida'. Los primeros azulejos llegaron a Portugal desde Al-Ándalus (la España mora) en el siglo XV. El rey Manuel I los importó de Sevilla para decorar el Palácio de Sintra, y pueden verse todavía hoy: azulejos geométricos de colores brillantes, sin figuras, en el estilo árabe-mudéjar." },
      { tipo: "parrafo", texto: "Durante el siglo XVI, Portugal empezó a producir sus propios azulejos, bajo la influencia de la cerámica italiana (majólica) traída por los contactos comerciales del Imperio. Los azulejos pasaron de ser decoración de suelos y zócalos a revestir paredes enteras, interiores de iglesias y fachadas de edificios. En el siglo XVII apareció el característico azul y blanco (inspirado en la porcelana china y en los azulejos holandeses de Delft) que se asocia hoy con Portugal en todo el mundo." },
      { tipo: "subtitulo", texto: "El Siglo de Oro del Azulejo: 1700-1750" },
      { tipo: "parrafo", texto: "El siglo XVIII fue el período de mayor esplendor del azulejo portugués. Los paneles narrativos de azul y blanco cubrían las paredes de palacios, quintas e iglesias con escenas mitológicas, históricas o bíblicas que llegaban a medir decenas de metros. El pintor y azulejista más importante de la época fue António de Oliveira Bernardes, cuyos paneles en la Iglesia de São Lourenço de Almancil (Algarve) son considerados la obra cumbre del género." },
      { tipo: "parrafo", texto: "En Lisboa, el mejor ejemplo de este período son los paneles del Mirador de Santa Luzia, en Alfama, que representan la Praça do Comércio antes del terremoto de 1755 y la reconquista del castillo a los moros. Los azulejos en la fachada de la Iglesia de São Vicente de Fora narran las fábulas de La Fontaine en 38 paneles." },
      { tipo: "subtitulo", texto: "El Museo Nacional do Azulejo: La Visita Imprescindible" },
      { tipo: "parrafo", texto: "El Museu Nacional do Azulejo en Lisboa es, sin discusión, el mejor lugar del mundo para entender el azulejo portugués. Instalado en el antiguo convento de Madre de Deus (siglo XVI), el museo tiene una colección de 23.000 piezas que cubre toda la historia del azulejo desde el siglo XV hasta el arte contemporáneo. La visita más emocionante es el Gran Panorama de Lisboa, un panel de 23 metros de largo que representa el skyline de Lisboa antes del terremoto de 1755. Es la única imagen fiel de cómo era la ciudad antes de la catástrofe." },
      { tipo: "tip", texto: "El Museu do Azulejo está a 20 minutos del centro en el bus 718 o el tranvía 28E. Vale muchísimo la pena la visita, aunque sea solo para ver el Gran Panorama. La tienda del museo tiene azulejos originales de todas las épocas y reproducciones de calidad." },
      { tipo: "subtitulo", texto: "Los Mejores Azulejos de Lisboa: Una Ruta" },
      { tipo: "parrafo", texto: "Además del museo, Lisboa es en sí misma un museo de azulejos al aire libre. En Alfama, casi cada esquina tiene su sorpresa: fachadas de casas cubiertas de azulejos desgastados, escaleras interiores decoradas, pequeñas capillas con retablos de cerámica. El Mirador de Santa Luzia tiene los paneles históricos más fotografiados de la ciudad. La Iglesia de São Vicente de Fora tiene los paneles más narrativos." },
      { tipo: "parrafo", texto: "En las estaciones de metro de Lisboa, los azulejos del siglo XX son una galería de arte gratuita. La estación de Parque tiene murales de Maria Keil; Picoas tiene obras de Eduardo Nery; Olaias tiene una decoración total que convierte el andén en una obra de arte contemporáneo. Muchos lisboetas van específicamente a visitar las estaciones de metro por su valor artístico." },
      { tipo: "parrafo", texto: "Y en los mercados de antigüedades —la Feira da Ladra los martes y sábados, varios anticuarios en Alfama— se pueden comprar azulejos históricos auténticos, rescatados de edificios en demolición, que son el souvenir más genuino que puedes llevarte de Lisboa." }
    ]
  },
  "novedades-lisboa-2026": {
    titulo: "Lisboa 2026: Todas las Novedades para Viajeros",
    descripcion: "Nuevas atracciones, restaurantes que abren, cambios en el transporte y eventos imperdibles. La guía de novedades más completa para visitar Lisboa en 2026.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "El Parque das Nações al anochecer, con sus torres de oficinas junto al agua",
    categoria: "Planificación",
    fecha: "10 Mar 2026",
    minutos: 11,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa en 2026 no es la misma que hace cinco años. La ciudad ha cambiado con más rapidez de lo que la mayoría de los viajeros imagina: nuevos barrios en transformación, museos renovados, cambios en el transporte, y una escena gastronómica que no para de sorprender. Si viniste hace dos o tres años, esta guía te dará motivos para volver. Si es tu primera vez, aquí están todas las novedades que hacen de 2026 un año especialmente bueno para visitar Lisboa." },
      { tipo: "subtitulo", texto: "Nuevas Atracciones y Museos" },
      { tipo: "parrafo", texto: "El Museu de Arte Contemporânea do Chiado completó en 2025 su ampliación más importante en décadas, incorporando nuevas galerías permanentes con colección portuguesa de los siglos XX y XXI, y un espacio de exposiciones temporales internacionales que lo pone al nivel de los mejores museos europeos de arte contemporáneo. La entrada es gratuita los domingos por la mañana." },
      { tipo: "parrafo", texto: "En Belém, el Museu de Arte, Arquitectura e Tecnologia (MAAT) tiene en 2026 su programación más ambiciosa, con exposiciones que combinan arte digital, arquitectura sostenible y tecnología. El edificio en sí —un cubo blanco flotando sobre el Tajo con una cubierta transitable— es ya un icono de la arquitectura contemporánea de Lisboa." },
      { tipo: "subtitulo", texto: "Gastronomía: Lo Nuevo en 2026" },
      { tipo: "parrafo", texto: "La escena gastronómica de Lisboa lleva años en ebullición y 2026 no es excepción. La tendencia más marcada es la de chefs portugueses jóvenes que reinterpretan la cocina tradicional con técnicas contemporáneas, usando ingredientes locales y de temporada. El barrio de Mouraria, durante años olvidado turísticamente, se ha convertido en el epicentro de esta nueva gastronomía: en sus calles coexisten tascas de toda la vida con restaurantes de nueva generación." },
      { tipo: "parrafo", texto: "LX Factory, el espacio industrial reconvertido en Alcântara, ha incorporado nuevos restaurantes y bares en sus naves con vistas al Puente 25 de Abril. El Mercado de Arroios, en expansión desde 2023, tiene en 2026 más de veinte puestos de productores locales además de su restaurante de menú. Y en Parque das Nações, varios restaurantes junto al río han renovado carta con énfasis en el pescado fresco del Atlántico." },
      { tipo: "subtitulo", texto: "Cambios en el Transporte en 2026" },
      { tipo: "parrafo", texto: "La extensión de la línea verde del Metro hasta Alcântara, prevista para mediados de 2026, cambia significativamente la conectividad de LX Factory, el barrio de Santos y la zona del Aterro. Si tu visita es después de junio, comprueba el nuevo mapa de metro antes de planificar tus rutas." },
      { tipo: "parrafo", texto: "El sistema de bicicletas eléctricas compartidas (Gira) ha ampliado su red hasta cubrir prácticamente toda la ciudad dentro de las Avenidas Novas. La aplicación mejorada de 2025 facilita localizar y reservar bicicletas. Para distancias medias en terreno llano (Baixa, Belém, Parque das Nações), la bicicleta eléctrica es hoy la opción más rápida y barata." },
      { tipo: "subtitulo", texto: "Eventos Imperdibles en 2026" },
      { tipo: "parrafo", texto: "El gran evento del año en Lisboa es la NOS Alive, el festival de música que se celebra en Algés cada julio con artistas internacionales de primer nivel. Las entradas se agotan meses antes. En junio, las Festas de Lisboa transforman todos los barrios históricos en escenarios de conciertos, marchas populares y arraiais (verbenas de barrio): es el mejor momento del año para sentir la Lisboa más auténtica y festiva." },
      { tipo: "parrafo", texto: "Para los amantes de la cultura, el Doclisboa (festival de cine documental, octubre) y el Jazz em Agosto (Fundação Gulbenkian, agosto) son los eventos más recomendables del otoño-verano. Y para los amantes del running, la Maratona de Lisboa en octubre ofrece una de las rutas más espectaculares de Europa: el recorrido pasa por Belém, el Chiado y la orilla del Tajo." },
      { tipo: "subtitulo", texto: "Alojamiento: Nuevas Opciones en 2026" },
      { tipo: "parrafo", texto: "El mapa de alojamiento en Lisboa ha cambiado. Los precios en el centro histórico (Alfama, Chiado, Baixa) siguen siendo los más altos, pero barrios como Penha de França, Mouraria alta, Arroios e Intendente ofrecen opciones más económicas con transporte excelente al centro. El Airbnb tiene restricciones desde 2023 en zonas residenciales protegidas, lo que ha reducido la oferta pero también ha frenado la turistificación extrema de algunos barrios." },
      { tipo: "tip", texto: "En 2026, Lisboa sigue siendo más económica que París, Barcelona o Amsterdam, pero los precios han subido significativamente. Reserva con más de un mes de antelación en temporada alta (junio-septiembre) y en fechas de eventos importantes." }
    ]
  },
  "festivales-eventos-lisboa-2026": {
    titulo: "Festivales y Eventos en Lisboa 2026: Calendario Completo",
    seoTitle: "Festivales y eventos en Lisboa 2026",
    descripcion: "Santo António, NOS Alive, Festas de Lisboa, Arraiais y mucho más. El calendario completo de eventos y festivales de Lisboa para 2026.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Parrilla de sardinas humeando en una fiesta de calle de Lisboa, con la gente sentada en mesas al aire libre",
    categoria: "Planificación",
    fecha: "8 Mar 2026",
    minutos: 12,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa es una ciudad de fiestas. Hay una razón por la que el mes de junio es el más concurrido del año: las Festas de Lisboa, que culminan la noche del 12 al 13 de junio con la festividad de Santo António, convierten toda la ciudad en una fiesta interminable de sardinas asadas, vino verde, música y danza. Pero las celebraciones lisboetas no se limitan al verano: a lo largo del año hay una agenda de festivales culturales, musicales y gastronómicos que justificaría un viaje en cualquier mes." },
      { tipo: "subtitulo", texto: "Enero - Marzo: Cultura y Carnaval" },
      { tipo: "parrafo", texto: "Los primeros meses del año son la temporada baja de turismo, lo que significa Lisboa más tranquila, precios más bajos y un ritmo de vida más local. El punto alto de este período es el Carnaval (febrero o marzo según el año), que en Lisboa no tiene la masividad de Cádiz o Río, pero tiene su encanto propio: desfiles en la Avenida da Liberdade, fiestas en los bares del Bairro Alto, y una relajación general de la ciudad que se nota en el ambiente." },
      { tipo: "parrafo", texto: "Para los amantes del cine, el IndieLisboa (festival de cine independiente, generalmente en abril) y el Monstra (festival de cine de animación, marzo) son los eventos culturales más interesantes del invierno-primavera. Las entradas son económicas y la calidad de la programación es muy alta." },
      { tipo: "subtitulo", texto: "Abril - Mayo: Primavera y el 25 de Abril" },
      { tipo: "parrafo", texto: "El 25 de abril es la fecha más cargada de emoción en el calendario portugués: el aniversario de la Revolución de los Claveles de 1974. En Lisboa, el día se celebra con manifestaciones (siempre pacíficas y festivas), conciertos en la Avenida da Liberdade, y una emotividad colectiva que los visitantes rara vez olvidan. Algunos bares y locales tocan música de resistencia y fado político que vuelve a sonar cada año en esta fecha." },
      { tipo: "parrafo", texto: "Mayo es uno de los mejores meses para visitar Lisboa: temperatura perfecta (18-22°C), jardines en flor, sin las multitudes del verano, y la ciudad saliendo del invierno con energía renovada. Los mercados callejeros y los conciertos al aire libre empiezan a poblar parques y plazas." },
      { tipo: "subtitulo", texto: "Junio: Las Festas de Lisboa y Santo António" },
      { tipo: "parrafo", texto: "Junio es el mes de Lisboa por antonomasia. Las Festas de Lisboa ocupan todo el mes con eventos culturales, conciertos, exposiciones y los famosos Arraiais (fiestas de barrio) que llenan Alfama, Mouraria y el Bairro Alto de mesas en la calle, sardinas a la brasa y música hasta el amanecer." },
      { tipo: "parrafo", texto: "La noche del 12 al 13 de junio es la gran noche de Santo António, patrón de Lisboa. Es el Día de San Juan y San Pedro en España, pero en versión lisboeta: las calles del barrio histórico se llenan hasta la imposibilidad de circular. Los manjericos (pequeñas plantas de albahaca decoradas con un poema y un clavel rojo) se regalan como símbolo de amor. Las sardinhas assadas —sardinas a la brasa— llenan el aire de un olor inconfundible. El ambiente es extraordinario, aunque caótico para quien no lo espera." },
      { tipo: "tip", texto: "Para la noche de Santo António (12 junio), llega a Alfama o Mouraria antes de las 20:00 para conseguir mesa en un arraial. Después de las 22:00, las calles están llenas hasta el punto de ser difícil moverse. Lleva calzado cómodo y prepárate para no cenar hasta las 23:00." },
      { tipo: "subtitulo", texto: "Julio - Agosto: Festivales de Música" },
      { tipo: "parrafo", texto: "El verano lisboeta es la temporada de los grandes festivales de música al aire libre. NOS Alive (julio, Algés) es el más importante: tres días con artistas internacionales de primer nivel, capacidad para 50.000 personas y una combinación de stages que va desde el indie y el rock hasta el hip-hop y la electrónica. En 2026 la programación no está todavía completa, pero las últimas ediciones han incluido artistas como Arctic Monkeys, Billie Eilish y Stromae." },
      { tipo: "parrafo", texto: "Jazz em Agosto (Fundação Gulbenkian, agosto) es el festival para los amantes del jazz: dos semanas de conciertos en el jardín del museo Gulbenkian, con programación de artistas internacionales de altísimo nivel. La combinación del jardín (uno de los más bellos de Lisboa) con la música en directo es incomparable." },
      { tipo: "subtitulo", texto: "Septiembre - Diciembre: Otoño Cultural" },
      { tipo: "parrafo", texto: "Septiembre marca el regreso de los lisboetas de las vacaciones y un otoño cultural intenso. La Doclisboa (festival de cine documental, octubre) es uno de los mejores festivales de documentales del mundo en términos de programación. El Festival de Literatura de Lisboa (noviembre) trae escritores portugueses e internacionales a librerías, teatros y espacios culturales de toda la ciudad." },
      { tipo: "parrafo", texto: "Diciembre tiene la magia de las luces de Navidad en la Avenida da Liberdade y el Rossio, el mercado de Navidad del Terreiro do Paço junto al río, y una atmósfera más íntima que en los meses de verano. La Nochevieja en Lisboa es espectacular: fuegos artificiales sobre el Tejo, miles de personas en la Praça do Comércio, y la tradición de comer las uvas de la medianoche en el Rossio." }
    ]
  },
  "lisboa-vs-porto": {
    titulo: "Lisboa o Porto: diferencias y cuál elegir para tu viaje",
    seoTitle: "Lisboa o Porto: cuál elegir y principales diferencias",
    metaDescription: "Lisboa o Porto: compara ambiente, qué ver, cuántos días, excursiones y tipo de viaje para decidir cuál visitar o si conviene combinar las dos.",
    descripcion: "Comparación práctica entre Lisboa y Porto para decidir según tus días, intereses y ritmo de viaje, sin convertirla en una competición.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Calle en cuesta de Lisboa entre fachadas de azulejo, con el Tajo al fondo",
    categoria: "Planificación",
    fecha: "5 Mar 2026",
    fechaActualizacion: "Actualizado en septiembre de 2026",
    dateModified: "2026-09-21",
    minutos: 10,
    links: [
      { href: '/itinerarios', label: 'Itinerarios de Lisboa por días' },
      { href: '/blog/sintra-desde-lisboa', label: 'Cómo organizar Sintra desde Lisboa' },
      { href: '/blog/que-ver-cascais-desde-lisboa', label: 'Qué ver en Cascais desde Lisboa' },
      { href: '/blog/mejor-epoca-visitar-lisboa', label: 'Mejor época para visitar Lisboa' },
    ],
    fuentes: [
      { label: 'Visit Lisboa — información oficial de Lisboa', href: 'https://www.visitlisboa.com/en/regions/lisbon' },
      { label: 'Visit Lisboa — por qué visitar Lisboa', href: 'https://www.visitlisboa.com/pt-pt/p/porque-lisboa' },
      { label: 'Visit Porto — información oficial de Porto', href: 'https://visitporto.travel/pt-PT' },
      { label: 'Visit Porto — información práctica y patrimonio', href: 'https://backoffice.visitporto.travel/pt-PT/plan-your-trip-essential' },
      { label: 'Visit Porto — vino de Porto y bodegas', href: 'https://backoffice.visitporto.travel/pt-PT/savour-port-wine' },
    ],
    contenido: [
      { tipo: "parrafo", texto: "Si estás organizando una primera visita a Portugal, la pregunta suele aparecer pronto: ¿Lisboa o Porto? No hay una ciudad objetivamente mejor. La decisión cambia según los días que tengas, si quieres hacer excursiones, cuánto valoras una ciudad compacta y qué tipo de experiencia buscas." },

      { tipo: "subtitulo", texto: "Lisboa o Porto: respuesta rápida" },
      { tipo: "lista", items: [
        "Elige Lisboa si quieres una capital más extensa, varios barrios muy distintos y usar la ciudad como base para Sintra, Cascais u otras escapadas.",
        "Elige Porto si prefieres concentrar gran parte de la visita alrededor del centro histórico, el Douro, Gaia y una experiencia muy ligada al vino de Porto.",
        "Si tienes una semana o más para Portugal, no necesitas convertir la decisión en un ‘o’: ambas ciudades se complementan bien."
      ]},

      { tipo: "subtitulo", texto: "Qué cambia realmente entre Lisboa y Porto" },
      { tipo: "parrafo", texto: "Lisboa se reparte entre colinas y zonas bastante separadas entre sí: Alfama, Baixa, Belém, Graça y Parque das Nações no forman un único paseo continuo. Porto concentra buena parte de su imagen histórica alrededor del centro, Ribeira, la Baixa portuense y la relación con Vila Nova de Gaia al otro lado del Douro." },
      { tipo: "parrafo", texto: "Eso afecta al ritmo del viaje. En Lisboa es más importante agrupar cada día por zonas. En Porto resulta más fácil construir una primera visita alrededor de un núcleo central y después añadir Foz, Gaia o una salida al valle del Douro." },

      { tipo: "subtitulo", texto: "Qué ver en Lisboa" },
      { tipo: "parrafo", texto: "La primera visita suele combinar Alfama y Castelo de São Jorge, Baixa y Chiado, los miradores, Belém y el frente del Tajo. La oferta oficial de turismo también integra áreas como Oriente, Sintra, Cascais y Arrábida dentro de la región de Lisboa, lo que explica por qué la ciudad funciona bien como base para varios días." },
      { tipo: "enlace", texto: "Si Lisboa entra en tu viaje, aquí puedes ver cómo repartirla según el número de días.", href: "/itinerarios", label: "Itinerarios de Lisboa" },

      { tipo: "subtitulo", texto: "Qué ver en Porto" },
      { tipo: "parrafo", texto: "En Porto, el centro histórico —Patrimonio Mundial de la UNESCO desde 1996—, la Ribeira, la zona de Clérigos y São Bento forman el núcleo de una primera visita. Al cruzar el Douro hacia Vila Nova de Gaia aparecen las bodegas históricamente vinculadas al vino de Porto, una de las experiencias que más diferencia el viaje respecto a Lisboa." },

      { tipo: "subtitulo", texto: "Cuál necesita más días" },
      { tipo: "parrafo", texto: "Para una primera toma de contacto, ambas pueden funcionar en un fin de semana largo. Lisboa suele agradecer más margen si quieres sumar Belém y una excursión como Sintra sin convertir cada jornada en una carrera. Porto, por su concentración del centro histórico, permite construir una visita urbana más compacta antes de añadir Gaia, Foz o el Douro." },
      { tipo: "parrafo", texto: "Si solo tienes dos días completos, no intentaría dividirlos entre las dos ciudades. Si tienes siete o más para Portugal, combinarlas empieza a tener mucho más sentido." },

      { tipo: "subtitulo", texto: "Excursiones: una diferencia importante" },
      { tipo: "parrafo", texto: "Desde Lisboa, Sintra y Cascais son dos extensiones naturales del viaje y tienen conexiones regulares desde la ciudad. Porto, en cambio, se presta especialmente a completar la estancia con experiencias relacionadas con el Douro y el vino, además de otras zonas del norte." },
      { tipo: "enlace", texto: "Si te inclinas por Lisboa por sus excursiones, este es el día que más planificación necesita.", href: "/blog/sintra-desde-lisboa", label: "Sintra desde Lisboa" },

      { tipo: "subtitulo", texto: "Gastronomía: no se reduce a pastéis contra francesinha" },
      { tipo: "parrafo", texto: "Las dos ciudades comparten una base amplia de cocina portuguesa, así que sería simplista asignar cada plato a una sola ciudad. Porto sí tiene una identidad especialmente visible alrededor del vino de Porto y de platos muy asociados al norte; Lisboa combina cocina tradicional portuguesa con una oferta urbana mucho más amplia por tamaño y diversidad." },

      { tipo: "subtitulo", texto: "Clima y época del viaje" },
      { tipo: "parrafo", texto: "Lisboa tiene un clima suave y soleado durante buena parte del año, algo que destaca la propia oficina de turismo. Porto, más al norte y expuesto al Atlántico, puede ofrecer una experiencia meteorológica distinta. Pero no elegiría una ciudad únicamente por una media climática: para una fecha concreta conviene mirar la previsión y decidir por el tipo de viaje que quieres hacer." },

      { tipo: "subtitulo", texto: "¿Cuál es más barata?" },
      { tipo: "parrafo", texto: "No usaría una regla fija de que una ciudad es siempre más barata que la otra. Alojamiento, vuelos y restaurantes cambian mucho según fechas, zona y anticipación. Para comparar de verdad, mira el coste de tus fechas concretas y no una cifra media que puede quedar desactualizada en pocos meses." },

      { tipo: "subtitulo", texto: "Entonces, ¿Lisboa o Porto para una primera vez?" },
      { tipo: "parrafo", texto: "Lisboa encaja mejor si buscas una capital con barrios muy distintos, quieres varios días de ciudad y te interesa añadir Sintra o Cascais. Porto encaja especialmente bien si prefieres una visita más concentrada alrededor del centro histórico y el Douro, con el vino como parte importante de la experiencia." },
      { tipo: "parrafo", texto: "Y si tu viaje tiene tiempo suficiente, la mejor lectura no es decidir cuál ‘gana’, sino entender que muestran dos escalas y dos paisajes urbanos diferentes de Portugal." },

      { tipo: "subtitulo", texto: "Cómo combinar Lisboa y Porto" },
      { tipo: "parrafo", texto: "Con una semana o más, puedes repartir varios días en cada ciudad y evitar volver al mismo aeropuerto si tus vuelos permiten entrar por una y salir por la otra. Mantén al menos un bloque completo para cada ciudad antes de añadir excursiones: si llenas el viaje de traslados, pierdes justo la diferencia que querías experimentar." },
    ]
  },
  "monumentos-de-lisboa": {
    titulo: "Los 15 Monumentos de Lisboa que No Te Puedes Perder",
    seoTitle: "Los monumentos de Lisboa que no fallan",
    descripcion: "Torre de Belém, Jerónimos, Castelo de São Jorge, el Elevador de Santa Justa... Los monumentos imprescindibles con horarios, precios y cómo evitar las colas.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Estatua de bronce sobre pedestal de piedra en una plaza arbolada de Lisboa",
    categoria: "Guías",
    fecha: "3 Mar 2026",
    minutos: 16,
    fuentes: [
      { label: "Museus e Monumentos de Portugal — horarios y entradas", href: "https://www.museusemonumentos.pt/" },
      { label: "Castelo de São Jorge — visita y billetes", href: "https://castelodesaojorge.pt/" },
    ],
    contenido: [
      { tipo: "parrafo", texto: "Lisboa es una ciudad de monumentos. No del tipo de monumentos que se erigen en honor a batallas olvidadas, sino de edificios y estructuras que cuentan directamente la historia de la ciudad y del país: los monasterios construidos con el oro de las especias de India, las torres que vigilaban la entrada al río, los puentes y ascensores que conectaban las colinas. Esta guía te ayuda a priorizar qué ver, cómo evitar colas, y cuánto tiempo necesitas en cada lugar." },
      { tipo: "subtitulo", texto: "1. Mosteiro dos Jerónimos — La Joya del Renacimiento Portugués" },
      { tipo: "parrafo", texto: "Construido a partir de 1501 con el dinero del impuesto sobre las especias traídas de India, el Mosteiro dos Jerónimos es la obra cumbre del estilo manuelino y uno de los edificios más bellos de Europa. La nave de la iglesia, con sus columnas decoradas con motivos marinos y tropicales, es de una elegancia que no cansa. Los claustros, en el piso superior, son todavía más impresionantes: una galería de dos pisos de arcos decorados con una delicadeza escultórica extraordinaria." },
      { tipo: "parrafo", texto: "Datos prácticos: abre a las 10:00, cierra a las 17:30 (18:30 en verano). La iglesia es gratuita; lo que se paga es el claustro, 18€. Si hay billete combinado con la Torre de Belém, compruébalo en la web oficial antes de comprar por separado. Compra online para evitar colas. Tiempo recomendado: 1,5-2 horas." },
      { tipo: "subtitulo", texto: "2. Torre de Belém — El Icono de Lisboa" },
      { tipo: "parrafo", texto: "La Torre de Belém es la imagen más reconocible de Lisboa y uno de los iconos de Portugal. Construida entre 1516 y 1521 como fortaleza defensiva a la entrada del estuario del Tajo, la torre combina elementos militares con decoración manuelina de una sofisticación sorprendente. Las troneras en forma de cruz de Cristo, las torres de vigilancia octogonales y los balcones con barandillas de piedra tallada hacen que el edificio parezca más un sueño de piedra que una fortaleza." },
      { tipo: "parrafo", texto: "Datos prácticos: abre a las 10:00. Precio: 15€ (consulta en la web oficial si sigue habiendo combinado con Jerónimos). El interior tiene 5 pisos con vistas al río desde la terraza superior, pero las escaleras son muy estrechas. Tiempo: 45 minutos." },
      { tipo: "subtitulo", texto: "3. Castelo de São Jorge — La Historia de Lisboa en Piedra" },
      { tipo: "parrafo", texto: "El castillo que corona Alfama tiene casi mil años de historia visible en sus murallas. Construido por los moros en el siglo XI sobre asentamientos anteriores, fue reconquistado por Afonso Henriques en 1147 con ayuda de cruzados del norte de Europa. Desde las almenas hay la panorámica más completa de Lisboa: los tejados de Alfama, el Tajo brillando al fondo, el Puente 25 de Abril en la distancia." },
      { tipo: "parrafo", texto: "La entrada general cuesta 17 euros, con tarifas reducidas para jóvenes y mayores de 65 años y entrada gratuita para menores de 13. Vale la pena por las vistas y por el tour arqueológico (incluido en el precio) que muestra restos de la Lisboa fenicia, romana y mora bajo el recinto. Los pavos reales que deambulan por los jardines son un bonus inesperado." },
      { tipo: "subtitulo", texto: "4. Elevador de Santa Justa — Hierro forjado sobre la Baixa" },
      { tipo: "aviso", texto: "Carris lo ha marcado como cerrado temporalmente. Conviene consultar su web oficial antes de acercarse, porque el estado ha ido cambiando desde 2025." },
      { tipo: "parrafo", texto: "Este ascensor de hierro forjado, con una estructura de 45 metros de altura, fue diseñado por Raoul Mesnier du Ponsard y conecta la Baixa con el Largo do Carmo, en el Chiado. Construido en 1902, es una pieza de ingeniería y arquitectura que parece sacada de un libro de Jules Verne. La terraza superior ofrece vistas de 360 grados sobre los tejados de la Baixa, la colina del Castillo y el Tajo." },
      { tipo: "nota", texto: "Conviene distinguir dos cosas que suelen confundirse: el viaje en el ascensor, que forma parte de la red de transporte de Carris, y la entrada al miradouro de la torre, que se paga aparte —cinco euros— y no está incluida en la Lisboa Card. No hay un acceso gratuito por el Convento do Carmo." },
      { tipo: "subtitulo", texto: "5. Palácio Nacional da Ajuda — El Palacio que Nunca Terminó" },
      { tipo: "parrafo", texto: "El mayor palacio de Lisboa es también uno de sus secretos mejor guardados. Construido para la familia real a partir de 1795, nunca llegó a completarse (la corte huyó a Brasil antes de que terminara la obra), lo que le da un curioso estatus de palacio inacabado. El interior, sin embargo, está entre los más ricos de Europa: salones de azulejos del siglo XIX, muebles de época, colecciones de pintura y porcelana. La visita es mucho menos masificada que los Jerónimos o el Castillo." },
      { tipo: "subtitulo", texto: "6-15. Los Monumentos Esenciales" },
      { tipo: "lista", items: [
        "Praça do Comércio: La plaza más grande de Lisboa, frente al Tajo, diseñada por el Marqués de Pombal tras el terremoto de 1755",
        "Convento do Carmo: Las ruinas góticas abiertas al cielo, memorial del terremoto. Ahora tiene un pequeño museo arqueológico",
        "Panteón Nacional: La cúpula barroca más impresionante de Portugal, con las tumbas de Vasco de Gama, Camões y presidentes de la República",
        "Museu do Azulejo (Convento de Madre de Deus): 23.000 azulejos en un convento del siglo XVI",
        "Padrão dos Descobrimentos: La escultura monumental de los grandes navegantes en la orilla del Tajo en Belém",
        "Aqueduto das Águas Livres: El acueducto romano del siglo XVIII que cruza el valle de Alcântara. Visitable a pie en algunos tramos",
        "Palácio da Pena (Sintra): El palacio más fotogénico de Portugal, a 40 minutos de Lisboa en tren",
        "Museu Calouste Gulbenkian: El museo de arte más importante de Portugal, con colección desde el Antiguo Egipto hasta el siglo XX",
        "Teatro Nacional de Dona Maria II: El teatro neoclásico de la Praça do Rossio, frente a la estación",
        "Estação do Oriente (Santiago Calatrava): La estación de tren más bonita de Portugal, en Parque das Nações"
      ]},
      { tipo: "enlace", texto: "Para los monumentos que sí requieren billete, compara las opciones de entrada antes de decidir cuáles encajan en tu ruta.", href: "/comprar-entradas", label: "Ver entradas y experiencias en Lisboa" },
      { tipo: "enlace", texto: "Muchos de estos monumentos se entienden mucho mejor con contexto histórico que leyendo el cartel de la entrada.", href: "/free-tours-lisboa#ruta-imprescindible", label: "Ver los free tours por el centro histórico" },
    ]
  },
  "semana-santa-lisboa": {
    titulo: "Semana Santa en Lisboa: procesiones, tradiciones y qué visitar",
    seoTitle: "Semana Santa en Lisboa: qué ver y cuándo",
    descripcion: "La Semana Santa en Lisboa tiene una espiritualidad especial. Procesiones en Alfama, iglesias históricas, gastronomía de Cuaresma y cómo vivirlo como un local.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Calle estrecha del Bairro Alto de noche, con gente paseando entre las fachadas iluminadas",
    categoria: "Cultura",
    fecha: "1 Mar 2026",
    minutos: 10,
    contenido: [
      { tipo: "parrafo", texto: "La Semana Santa en Lisboa es una experiencia diferente a la de otras capitales europeas. No tiene la espectacularidad visual de Sevilla ni la masividad de Roma, pero tiene algo que esas ciudades han perdido en parte: una espiritualidad auténtica y de barrio que no está pensada para los turistas sino para los propios vecinos." },
      { tipo: "parrafo", texto: "La Semana Santa es una fiesta móvil: cae entre finales de marzo y finales de abril según el año. En 2027 va del 21 al 28 de marzo, una de las más tempranas de las últimas décadas. Sea cual sea la fecha, siempre coincide con el inicio de la primavera lisboeta, cuando los jardines empiezan a florecer y la temperatura se vuelve perfecta para caminar. Combinar los actos religiosos con la exploración de la ciudad en este momento del año es uno de los planes más gratificantes que puedes hacer en Lisboa." },
      { tipo: "subtitulo", texto: "Las Procesiones de Lisboa" },
      { tipo: "parrafo", texto: "Las procesiones de Semana Santa en Lisboa son más recogidas que las del sur de España, pero tienen una solemnidad particular. Las más importantes salen de Alfama, el barrio más antiguo y más religioso de la ciudad. La Procissão do Senhor dos Passos da Graça, organizada por la Iglesia de Nossa Senhora da Graça, es una de las tradiciones más antiguas de Lisboa: recorre las calles de Alfama el Domingo de Ramos con imágenes barrocas llevadas en andas." },
      { tipo: "parrafo", texto: "La Procissão do Enterro, el Viernes Santo, recorre el Bairro Alto desde la iglesia de São Roque hasta la Basílica da Estrela. Más recogida y nocturna, es uno de los actos religiosos más emotivos del año en Lisboa. Para ver las procesiones, llega al menos una hora antes al punto de partida y sigue el recorrido a pie." },
      { tipo: "subtitulo", texto: "Iglesias para Visitar en Semana Santa" },
      { tipo: "parrafo", texto: "La Semana Santa es el mejor momento del año para visitar las iglesias históricas de Lisboa: están más activas, tienen decoraciones especiales, y las ceremonias religiosas dan a sus espacios una dimensión que no tienen en otras épocas. La Basílica da Estrela, el Pantheon (Iglesia de Santa Engrácia) y la Iglesia de São Roque son las más recomendadas para la Semana Santa." },
      { tipo: "parrafo", texto: "La Sé Catedral —la catedral más antigua de Lisboa, construida sobre la mezquita mayor mora en el siglo XII— celebra todas las ceremonias principales de la Semana Santa. El Jueves Santo por la noche, la tradición del Lavatorio de los Pies es uno de los actos más seguidos por los lisboetas devotos." },
      { tipo: "subtitulo", texto: "Gastronomía de Cuaresma" },
      { tipo: "parrafo", texto: "La cocina de Cuaresma y Semana Santa en Portugal tiene identidad propia. El bacalhau (bacalao salado) es el protagonista absoluto: hay una leyenda que dice que Portugal tiene 365 recetas de bacalhau, una para cada día del año. En Semana Santa se preparan las más tradicionales: bacalhau à brás, bacalhau com grão de bico (con garbanzos), bacalhau assado (asado al horno con patatas y aceitunas)." },
      { tipo: "parrafo", texto: "Los dulces de Semana Santa tienen nombres sugestivos: Folar da Páscoa (una especie de pan dulce con huevo duro en el centro), Pão de Ló (bizcocho esponjoso y húmedo), Filhós (buñuelos de Cuaresma). Las pastelerías de toda Lisboa los tienen en sus vitrinas desde la semana anterior a la Pascua." },
      { tipo: "tip", texto: "Si visitas Lisboa en Semana Santa, reserva alojamiento con mucha antelación. Es una de las épocas de mayor afluencia del año junto con las Festas de Lisboa (junio) y el verano. Los precios suelen subir un 20-30% respecto a la temporada normal de primavera." }
    ]
  },
  "alfama-historia-guia": {
    titulo: "Alfama: Historia, Callejuelas y Secretos del Barrio Más Antiguo de Lisboa",
    seoTitle: "Alfama | Historia y guía del barrio",
    descripcion: "Alfama tiene casi mil años sin cambiar. Sus callejuelas empinadas, el fado que sale de las ventanas y los gatos en las escaleras cuentan una historia que ningún museo puede contar.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Vecina asomada a la ventana en una calle en cuesta de Lisboa que baja al Tajo",
    categoria: "Guías",
    fecha: "25 Mar 2026",
    minutos: 15,
    contenido: [
      { tipo: "parrafo", texto: "Alfama huele distinto al resto de Lisboa. Hay una mezcla de humedad de piedra antigua, brasas de sardinas a mediodía y flores de las terrazas que no existe en ningún otro lugar. Es el barrio más antiguo de la ciudad y, en muchos sentidos, el más honesto: lo que ves es lo que lleva ahí desde la Edad Media." },
      { tipo: "parrafo", texto: "El nombre viene del árabe Al-hamma, 'fuente de aguas calientes', porque aquí había manantiales termales que usaban los moros. Cuando los portugueses reconquistaron Lisboa en 1147, Alfama era ya un barrio de pescadores y artesanos que convivía con la aristocracia mora. Con el tiempo, la nobleza se fue a zonas más planas y Alfama quedó como barrio de gente sencilla: pescadores, marinheiros, lavanderas que tendían la ropa entre ventanas y cantaban el fado que consolaba las esperas largas." },
      { tipo: "subtitulo", texto: "Cómo Orientarse en el Laberinto" },
      { tipo: "parrafo", texto: "Alfama no tiene manzanas. Tiene uma trama de callejuelas que suben, bajan, giran y terminan en escaleras o en callejones ciegos. La estructura es árabe: diseñada para que el viento no corriera recto y la vida de la calle fuera más íntima. GPS en mano, hay momentos en que el punto azul da vueltas sin saber bien dónde ir." },
      { tipo: "parrafo", texto: "La orientación más sencilla: el castillo está arriba del todo, el río está abajo. Cualquier calle que baje te llevará eventualmente al Tajo. Cualquier calle que suba te acercará al Castelo de São Jorge. No hay más secreto." },
      { tipo: "tip", texto: "No uses Google Maps en Alfama para rutas a pie. Marca los puntos que quieres ver y camina libremente entre ellos. Las mejores calles de Alfama no están en ningún mapa porque son demasiado estrechas para aparecer como rutas." },
      { tipo: "subtitulo", texto: "Los Miradores de Alfama: Cuál Ir Primero" },
      { tipo: "parrafo", texto: "Alfama tiene cuatro miradores históricos. El Mirador de Santa Luzia tiene los paneles de azulejos más fotografiados de Lisboa —una representación de la Praça do Comércio antes del terremoto de 1755— y buganvillas que en primavera lo cubren de morado. Es el mirador para la foto. El Mirador das Portas do Sol, a treinta metros, tiene un quiosco donde tomarse una cerveza y vistas sin tanta aglomeración." },
      { tipo: "parrafo", texto: "El Mirador da Graça está más al norte y a menudo lo pasan por alto los visitantes que se limitan a Alfama central. Gran error: las vistas del Castillo desde este ángulo son especialmente buenas, el quiosco sirve café desde primera hora, y los domingos por la mañana hay un ambiente de barrio genuino que vale la caminata." },
      { tipo: "subtitulo", texto: "El Castelo de São Jorge" },
      { tipo: "parrafo", texto: "El castillo que corona Alfama lleva en pie, en distintas formas, desde hace más de dos mil años. Fenicios, romanos, visigodos y moros lo usaron todos como punto defensivo sobre el estuario. Los portugueses lo tomaron en 1147 y desde entonces es el símbolo de la ciudad. Vale los 15€ de entrada por las vistas desde las almenas —las mejores de Lisboa— y por la zona arqueológica que muestra restos de todos esos pueblos anteriores." },
      { tipo: "parrafo", texto: "Los pavos reales que deambulan por los jardines interiores son una rareza que sorprende a todo el mundo. Llevan en el castillo desde que el rey Manuel I los trajo de India como curiosidad exótica en el siglo XVI. Quinientos años después, sus descendientes siguen paseando entre los turistas." },
      { tipo: "subtitulo", texto: "Dónde Comer en Alfama" },
      { tipo: "parrafo", texto: "Alfama tiene dos realidades gastronómicas completamente distintas. La zona cercana al Largo de Santa Luzia y la subida al castillo está llena de restaurantes diseñados para los miles de visitantes que pasan cada día: cartas en cinco idiomas, terrazas con vistas, precios de barrio turístico. La comida no es necesariamente mala, pero la relación calidad-precio es mediocre." },
      { tipo: "parrafo", texto: "La otra Alfama está cinco minutos a pie, calle adentro. Hay tascas pequeñas donde el menú del día cambia según lo que trajeron fresco esa mañana, restaurantes donde el dueño es también el cocinero y el camarero, y casas de fado donde la entrada es barata porque el negocio es el consumo. Esa es la Alfama que vale buscar." },
      { tipo: "tip", texto: "Para comer bien en Alfama sin pagar precio turístico: busca locales sin menú a la vista en la puerta, sin carta en inglés en la vitrina, y donde haya al menos un cliente con cara de vecino del barrio." },
      { tipo: "subtitulo", texto: "Alfama de Noche: El Fado" },
      { tipo: "parrafo", texto: "La noche cambia Alfama. Las callejuelas que de día estaban llenas de turistas con selfie-stick se vacían y quedan solo los que van a algo concreto: a cenar a una tasca pequeña o a escuchar fado. Las casas de fado en Alfama van desde las más conocidas —que cobran 25-30€ de consumo mínimo y tienen actuaciones programadas para grupos— hasta tabernas de barrio donde el fado surge de manera más espontánea entre la gente que se conoce." },
      { tipo: "parrafo", texto: "Para escuchar fado auténtico en Alfama: busca los locales pequeños, con pocas mesas, donde se pide silencio cuando empieza la música. El fado no es background: es lo que importa. En los mejores sitios, el fadista canta con los ojos cerrados y el público no aplaude hasta que termina la última nota, no antes." },
      { tipo: "enlace", texto: "Alfama es el barrio donde más fácil es perderse y más se agradece que alguien te cuente qué estás mirando.", href: "/free-tours-lisboa#ruta-alfama", label: "Ver los free tours por Alfama" },
    ]
  },
  "gastronomia-portuguesa-guia": {
    titulo: "Gastronomía Portuguesa: Los 20 Platos que Tienes que Probar en Lisboa",
    seoTitle: "Gastronomía portuguesa | 20 platos",
    descripcion: "Bacalhau, pastéis de nata, bifanas, caldo verde, amêijoas à bulhão pato... La guía definitiva de la cocina portuguesa con dónde comer cada plato en Lisboa.",
    imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200",
    imageAlt: "Fachada de la Tasca da Graça, un bar de barrio de Lisboa, con clientes en las mesas de fuera",
    categoria: "Gastronomía",
    fecha: "23 Mar 2026",
    minutos: 14,
    contenido: [
      { tipo: "parrafo", texto: "La cocina portuguesa tiene un problema de imagen. En un continente donde Francia, Italia y España acaparan toda la atención gastronómica, Portugal lleva siglos cocinando en silencio platos que llevan 500 años perfeccionándose. El bacalhau que los pescadores portugueses salaban en los barcos camino de Terranova, la pastelería conventual que las monjas desarrollaron durante siglos con yema de huevo y azúcar, el vino verde que se bebe frío y espumoso en verano..." },
      { tipo: "parrafo", texto: "Vine a Lisboa sin conocer nada de su gastronomía y en tres años se ha convertido en una de las razones por las que no me quiero ir. Esta guía es el mapa que me habría gustado tener al principio." },
      { tipo: "subtitulo", texto: "Los Imprescindibles — Empieza por Aquí" },
      { tipo: "lista", items: [
        "Pastel de nata: el rey indiscutible. Hojaldre crujiente, crema de huevo con canela. Come el primero caliente en Pastéis de Belém o en cualquier pastelería de barrio",
        "Bacalhau à brás: bacalao desmenuzado con patatas fritas finas y huevo. El plato más vendido de Portugal",
        "Bifana: bocadillo de cerdo marinado en ajo y vino blanco. Un clásico de bar que se come de pie",
        "Caldo verde: sopa de col rizada con chouriço. El primer plato de cualquier celebración portuguesa",
        "Amêijoas à bulhão pato: almejas en aceite de oliva con ajo, cilantro y limón. El plato de mariscos más sencillo y más perfecto de la costa atlántica",
        "Frango assado: pollo asado con piri-piri. Sencillo, barato y adictivo"
      ]},
      { tipo: "subtitulo", texto: "Pescados y Mariscos — La Despensa del Atlántico" },
      { tipo: "parrafo", texto: "Portugal tiene 850 kilómetros de costa atlántica y se nota en el plato. El pescado en Lisboa es fresco de manera diferente a otros países del sur de Europa: las distancias son cortas, los mercados reciben pescado cada mañana, y la tradición de cocina marinera lleva aquí quinientos años." },
      { tipo: "parrafo", texto: "Más allá del bacalhau (que merece su propia guía), las sardinas asadas son el plato más lisboeta de todos: en junio, durante las Festas de Lisboa, el olor a sardinas a la brasa impregna toda la ciudad. La carapau (jurel) frita es el pescado barato que comen los locales en las tascas. Los percebes, los camarones y el polvo à lagareiro (pulpo al horno con aceite de oliva y patatas) son las opciones más festivas." },
      { tipo: "subtitulo", texto: "Carne y Embutidos" },
      { tipo: "parrafo", texto: "La alheira es uno de los embutidos más curiosos de la gastronomía europea: una salchicha inventada por los judíos portugueses del siglo XV para aparentar que comían cerdo cuando en realidad usaban pollo o caza. Hoy es un producto de charcutería habitual, disponible en cualquier supermercado, y deliciosa frita o a la plancha con huevo y arroz." },
      { tipo: "parrafo", texto: "El leitão (lechón asado) es el plato festivo por excelencia, especialmente en la región de Bairrada al norte del país. En Lisboa se encuentra en algunas tascas especializadas. La carne de porco à alentejana —cerdo con almejas, tomate y cilantro— es la combinación más sorprendente de la cocina portuguesa: un plato de interior con producto de la costa que funciona de manera inexplicable." },
      { tipo: "subtitulo", texto: "Dulces y Pastelería — El Legado Conventual" },
      { tipo: "parrafo", texto: "La pastelería portuguesa tiene un origen muy específico: los conventos. Durante siglos, las monjas portuguesas utilizaban las claras de huevo para almidonar la ropa del clero, y con las yemas sobrantes desarrollaron una pastelería de azúcar y huevo extraordinariamente rica. Queijadas, barrigas de freira, papos de anjo, toucinho do céu... Los nombres son tan evocadores como los sabores." },
      { tipo: "parrafo", texto: "Los ovos moles de Aveiro (cápsulas de oblea rellenas de crema de yema) son el souvenir gastronómico más deseado del país. Los travesseiros de Sintra, los queijadas de Sintra, los pastéis de Tentúgal... cada región tiene su especialidad conventual. En Lisboa, la pastelería A Brasileira en el Chiado es histórica aunque turística; para pastelería de verdad, busca cualquier pastelería de barrio." },
      { tipo: "subtitulo", texto: "Dónde Comer Bien en Lisboa — Por Tipo de Plato" },
      { tipo: "lista", items: [
        "Pastéis de nata: Pastéis de Belém (histórico, siempre con cola), o cualquier Manteigaria en Chiado/Príncipe Real",
        "Bacalhau: A Cevicheria (versión moderna), Solar dos Presuntos (tradicional, cara pero vale), o cualquier tasca con menú del día",
        "Marisco: Cervejaria Ramiro si tienes presupuesto, o el mercado de Arroios para opciones más económicas",
        "Sardinas: solo en junio durante las festas, en cualquier arraial de barrio",
        "Pastelería conventual: Confeitaria Nacional en Praça da Figueira (desde 1829)"
      ]}
    ]
  },
  "fado-historia-origen": {
    titulo: "Fado: qué significa, origen e historia en Lisboa",
    seoTitle: "Fado: significado, origen e historia en Lisboa",
    metaDescription: "Qué significa fado, cuál es su origen y cómo nació en la Lisboa del siglo XIX. Historia, guitarra portuguesa, Maria Severa, Amália y reconocimiento UNESCO.",
    descripcion: "Qué significa fado, qué sabemos realmente sobre su origen y cómo una música nacida en la Lisboa popular se convirtió en símbolo de Portugal.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Mesa junto a la puerta de una tasca lisboeta con luz cálida, ya de noche",
    categoria: "Cultura",
    fecha: "22 Mar 2026",
    fechaActualizacion: "Actualizado en septiembre de 2026",
    dateModified: "2026-09-21",
    minutos: 10,
    links: [
      { href: "/blog/donde-escuchar-fado-autentico", label: "Dónde escuchar fado en Lisboa" },
      { href: "/blog/mouraria-barrio-guia", label: "Guía de Mouraria" },
      { href: "/blog/alfama-historia-guia", label: "Historia y guía de Alfama" },
      { href: "/blog/historia-de-lisboa", label: "Historia de Lisboa" },
    ],
    fuentes: [
      { label: "UNESCO — Fado, urban popular song of Portugal", href: "https://ich.unesco.org/en/RL/fado-urban-popular-song-of-portugal-00563" },
      { label: "Museu do Fado — História do Fado", href: "https://www.museudofado.pt/historia-do-fado" },
      { label: "Visit Lisboa — Rota do Fado", href: "https://www.visitlisboa.com/pt-pt/lisbon-stories/1-percorso-fado" },
    ],
    contenido: [
      { tipo: "parrafo", texto: "El fado es un género musical y poético portugués estrechamente ligado a Lisboa. La palabra «fado» procede del latín y significa destino. Pero definir la música solo como tristeza o saudade se queda corto: sus letras pueden hablar de amor, pérdida, vida cotidiana, barrio, ironía, deseo o fatalidad." },
      { tipo: "parrafo", texto: "Sobre su origen conviene ser preciso: no existe una teoría única demostrada. El Museu do Fado sitúa su aparición en los contextos populares de la Lisboa del siglo XIX, mientras UNESCO lo describe como una síntesis multicultural en la que confluyen tradiciones afrobrasileñas, géneros locales, músicas llegadas del interior de Portugal y modelos de canción urbana del siglo XIX." },

      { tipo: "subtitulo", texto: "Qué significa la palabra fado" },
      { tipo: "parrafo", texto: "Visit Lisboa explica que «fado» viene del latín y remite a la idea de destino. Esa raíz encaja con muchos de sus temas: amores y desamores, celos, tragedias, ausencias y situaciones que parecen escapar al control de quien canta." },
      { tipo: "parrafo", texto: "Eso no significa que todo fado sea melancólico. La tradición incluye repertorios bohemios, satíricos y más ligeros. Por eso traducir fado simplemente como «música triste portuguesa» borra buena parte de lo que el género contiene." },

      { tipo: "subtitulo", texto: "Cuál es el origen del fado" },
      { tipo: "parrafo", texto: "Lo que sí está bien documentado es su presencia en la Lisboa popular del siglo XIX. El Museu do Fado lo sitúa en espacios de convivencia y ocio de la ciudad: calles, tabernas, retiros y otros lugares donde se cantaba de forma espontánea." },
      { tipo: "parrafo", texto: "Las influencias anteriores son más difíciles de separar. Visit Lisboa recoge varias teorías históricas y UNESCO habla de una síntesis multicultural. La forma más rigurosa de contarlo es aceptar esa incertidumbre: el fado no tiene un único momento de invención ni un fundador conocido." },

      { tipo: "subtitulo", texto: "Mouraria, Alfama y la Lisboa popular" },
      { tipo: "parrafo", texto: "La historia del fado quedó especialmente asociada a los barrios antiguos de Lisboa. Mouraria aparece ligada a Maria Severa, una de las figuras míticas del género en el siglo XIX; Alfama conserva una fuerte relación con casas de fado y espacios de interpretación; y la tradición también se extendió a otros barrios y escenarios de la ciudad." },
      { tipo: "enlace", texto: "Si quieres entender el barrio vinculado a la memoria de Maria Severa y a una parte esencial de la historia popular de Lisboa.", href: "/blog/mouraria-barrio-guia", label: "Qué ver en Mouraria" },

      { tipo: "subtitulo", texto: "Cómo suena: voz, guitarra portuguesa y guitarra" },
      { tipo: "parrafo", texto: "UNESCO describe la forma tradicional como una voz solista —masculina o femenina— acompañada por guitarra acústica y guitarra portuguesa. Esta última, con forma característica y doce cuerdas metálicas, es una de las sonoridades que permiten reconocer el género casi de inmediato." },
      { tipo: "parrafo", texto: "La instrumentación puede ampliarse y el fado contemporáneo admite distintas interpretaciones, pero la relación entre voz, texto y guitarra sigue siendo central." },

      { tipo: "subtitulo", texto: "Maria Severa: entre historia y mito" },
      { tipo: "parrafo", texto: "Maria Severa Onofriana, nacida en 1820 y fallecida en 1846, ocupa un lugar fundacional en el imaginario del fado. El Museu do Fado y Visit Lisboa recogen la historia de su relación con el Conde de Vimioso, que terminó convertida en uno de los grandes mitos culturales asociados al género." },
      { tipo: "parrafo", texto: "Su importancia no consiste en haber «inventado» el fado, algo que no puede sostenerse históricamente, sino en representar una etapa temprana en la que esta música circulaba por ambientes populares y bohemios de Lisboa." },

      { tipo: "subtitulo", texto: "Amália Rodrigues y la internacionalización" },
      { tipo: "parrafo", texto: "En el siglo XX, Amália Rodrigues llevó el fado mucho más allá de Lisboa y se convirtió en su figura internacional más reconocible. El Museu do Fado sitúa especialmente desde la década de 1950 la consolidación internacional del género a través de su carrera." },
      { tipo: "parrafo", texto: "Después llegaron nuevas generaciones de fadistas y distintas formas de diálogo con otras músicas. Esa evolución explica por qué el fado puede ser al mismo tiempo patrimonio histórico y un género vivo." },

      { tipo: "subtitulo", texto: "Por qué el fado es Patrimonio de la Humanidad" },
      { tipo: "parrafo", texto: "UNESCO inscribió en 2011 el «Fado, urban popular song of Portugal» en la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad. La candidatura destaca su papel como expresión de identidad, su transmisión entre generaciones y la comunidad de intérpretes, autores, músicos, asociaciones e instituciones que mantiene viva la práctica." },
      { tipo: "parrafo", texto: "El reconocimiento no convierte el fado en una pieza congelada. Al contrario: UNESCO subraya que se practica profesionalmente, en casas de fado y también en asociaciones y contextos comunitarios." },

      { tipo: "subtitulo", texto: "¿Fado significa saudade?" },
      { tipo: "parrafo", texto: "No exactamente. La saudade es una idea recurrente en la cultura portuguesa y ayuda a explicar parte del repertorio, pero no es la traducción de «fado» ni describe todas sus canciones. Fado significa destino; la saudade es uno de los sentimientos que puede aparecer dentro de ese universo." },

      { tipo: "subtitulo", texto: "Dónde escucharlo hoy en Lisboa" },
      { tipo: "parrafo", texto: "Si después de entender la historia quieres escucharlo, conviene separar esta pregunta de la anterior: una casa de fado con cena, una tasca con sesiones informales y un concierto no ofrecen la misma experiencia. Por eso tenemos una guía aparte centrada en cómo elegir dónde escucharlo." },
      { tipo: "enlace", texto: "Compara formatos y zonas antes de reservar una noche alrededor del fado.", href: "/blog/donde-escuchar-fado-autentico", label: "Dónde escuchar fado en Lisboa" },
    ]
  },  "belem-barrio-guia": {
    titulo: "Belém: El Barrio de los Descubrimientos y los Pastéis de Nata",
    seoTitle: "Belém | Guía del barrio y qué ver",
    descripcion: "Belém es el barrio donde Portugal cambió la historia del mundo. Jerónimos, Torre de Belém, Padrão dos Descobrimentos y la pastelería más famosa del mundo. Cómo visitarlo sin prisas.",
    imagen: "/images/actividades/torre-de-belem-lisboa.webp",
    imageAlt: "Torre de Belém junto al Tajo, con el paseo ribereño en primer plano",
    categoria: "Guías",
    fecha: "21 Mar 2026",
    minutos: 12,
    fuentes: [
      { label: "Museus e Monumentos de Portugal — Jerónimos y Torre de Belém", href: "https://www.museusemonumentos.pt/" },
      { label: "Pastéis de Belém — la pastelería original", href: "https://pasteisdebelem.pt/" },
    ],
    contenido: [
      { tipo: "parrafo", texto: "A finales del siglo XV, Belém no era un barrio de Lisboa: era una aldea de pescadores a las afueras de la ciudad, en la orilla del Tajo, a unos seis kilómetros del centro. Fue desde esta aldea desde donde Vasco de Gama zarpó en 1497 rumbo a India. Fue aquí donde el rey Manuel I construyó el monasterio más bello de Portugal para celebrar el descubrimiento de la ruta a las especias. Y fue aquí donde se instaló la pastelería que llevaría la crema de los monjes al mundo entero." },
      { tipo: "parrafo", texto: "Hoy Belém es un barrio tranquilo integrado en la ciudad, accesible en tranvía o en bicicleta desde el centro, con los monumentos más visitados de Portugal y también con algunos de los mejores museos del país. Merece al menos medio día, mejor uno completo." },
      { tipo: "subtitulo", texto: "El Mosteiro dos Jerónimos — La Obra Maestra" },
      { tipo: "parrafo", texto: "Construido entre 1501 y 1572 en estilo manuelino —el Renacimiento portugués con decoración de cuerdas, cruces de Cristo y motivos marinos— los Jerónimos son probablemente el edificio más bello de Portugal. La nave de la iglesia tiene columnas tan esbeltas y tan decoradas que el ojo no sabe por dónde empezar. Los claustros, arriba, tienen una armonía de proporciones que hace que la gente se siente en el suelo y no quiera levantarse." },
      { tipo: "parrafo", texto: "El monasterio fue construido con el 'quinto real', el impuesto del 5% sobre todas las especias traídas de India. En otras palabras: los Jerónimos están hechos con pimienta, clavo, canela y jengibre. La ironía es que el monasterio era el lugar de oración de la Orden de San Jerónimo, una orden conocida por su sobriedad. Los monjes rezaban en el edificio más opulento de su tiempo, costeado por el comercio más lucrativo del mundo." },
      { tipo: "enlace", texto: "Antes de fijar la mañana alrededor del claustro, revisa la ficha práctica del monasterio y confirma las condiciones vigentes.", href: "/actividades/mosteiro-jeronimos", label: "Planificar la visita al Monasterio de los Jerónimos" },
      { tipo: "tip", texto: "Entra a primera hora (las puertas abren a las 10:00) y ve directo al claustro antes de que lleguen los grupos organizados. Compra siempre la entrada online en museusemonumentos.pt para evitar colas. Si sigue existiendo el billete combinado con la Torre de Belém, lo verás ahí: sale mejor que comprar los dos por separado." },
      { tipo: "subtitulo", texto: "La Torre de Belém — El Ícono Fotográfico" },
      { tipo: "parrafo", texto: "La Torre de Belém es el monumento más fotografiado de Portugal y uno de los más reconocibles de Europa. Construida entre 1516 y 1521 como fortaleza en mitad del Tajo (hoy la orilla ha cambiado y está junto a la orilla), el edificio combina arquitectura militar con decoración manuelina de una finura extraordinaria: troneras en forma de cruz de la Orden de Cristo, balcones con barandillas de piedra tallada, una torre de vigía con cupulín esférico que parece una fantasía arquitectónica." },
      { tipo: "parrafo", texto: "El interior tiene cinco pisos con escaleras estrechísimas. Las vistas desde la terraza superior valen la espera. Las colas en verano pueden ser de una hora; llegar al abrir (10:00) o comprar online resuelve el problema." },
      { tipo: "enlace", texto: "La ficha de la Torre de Belém permite comprobar la visita por separado antes de encajarla en esta ruta.", href: "/actividades/torre-de-belem", label: "Consultar la Torre de Belém" },
      { tipo: "subtitulo", texto: "Pastéis de Belém — La Fila que Vale la Pena" },
      { tipo: "parrafo", texto: "La Pastéis de Belém lleva abierta desde 1837. Ocupa el mismo edificio desde entonces, un laberinto de salas azulejadas que conectan entre sí, con el olor de la crema de huevo y el hojaldre recién horneado impregnando hasta la acera. La receta original la guardan en secreto tres personas en el mundo: se llama la Receita Secreta." },
      { tipo: "parrafo", texto: "No hay discusión posible sobre si vale la pena la cola (que a veces llega a los 40 minutos): vale. Come el pastel caliente, recién salido del horno, espolvoreado con canela y azúcar glass. Es objetivamente diferente a cualquier otro pastel de nata de la ciudad, aunque los defensores de la Manteigaria en Chiado lo discuten apasionadamente." },
      { tipo: "subtitulo", texto: "El Padrão dos Descobrimentos y los Museos de Belém" },
      { tipo: "parrafo", texto: "El Padrão dos Descobrimentos es la escultura monumental construida en 1960 para conmemorar el 500 aniversario de la muerte del Infante Dom Henrique. Una proa de barco de piedra con 33 figuras de los grandes navegantes, cartógrafos y poetas de los descubrimientos: Vasco de Gama, Pedro Álvares Cabral, Fernando Magalhães, Luís de Camões... La vista desde arriba (hay ascensor) es espléndida." },
      { tipo: "parrafo", texto: "En los alrededores hay tres museos que merecen visita según tus intereses: el Museu de Marinha (embarcaciones y objetos de navegación originales de los siglos XV-XVI), el Museu dos Coches (la colección de carruajes reales más importante del mundo) y el MAAT (arte contemporáneo, arquitectura y tecnología, con un edificio que es ya una obra de arte sobre el Tajo)." },
      { tipo: "tip", texto: "La ruta ideal en Belém: llegar al abrir, Jerónimos primero (2h), Torre de Belém (45min), pastel en Pastéis de Belém, almuerzo en el restaurante del Museu dos Coches o en alguna tasca de la calle Vieira Portuense, Padrão dos Descobrimentos por la tarde. Regresa en tranvía o bici por el paseo junto al Tajo." },
      { tipo: "enlace", texto: "En Belém los monumentos están cerca unos de otros, pero la historia que los conecta no es evidente si vas solo.", href: "/free-tours-lisboa#ruta-belem", label: "Ver los free tours por Belém" },
    ]
  },
  "chiado-bairro-alto-guia": {
    titulo: "Chiado y Bairro Alto: qué ver de día y qué hacer de noche",
    seoTitle: "Chiado y Bairro Alto: qué ver y qué hacer",
    metaDescription: "Guía de Chiado y Bairro Alto en Lisboa: qué ver de día, librerías y cafés históricos, miradores, vida nocturna y cómo combinar ambos barrios.",
    descripcion: "Qué ver en Chiado durante el día y cómo cambia el ambiente al subir a Bairro Alto por la tarde y la noche.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Tranvía amarillo de la línea 28 subiendo por una calle estrecha de Lisboa",
    categoria: "Guías",
    fecha: "19 Mar 2026",
    fechaActualizacion: "Actualizado en septiembre de 2026",
    dateModified: "2026-09-21",
    minutos: 10,
    links: [
      { href: '/blog/vida-nocturna-lisboa', label: 'Vida nocturna en Lisboa' },
      { href: '/blog/mejores-miradores-lisboa', label: 'Mejores miradores de Lisboa' },
      { href: '/blog/donde-tomar-cafe-lisboa', label: 'Dónde tomar café en Lisboa' },
      { href: '/blog/donde-escuchar-fado-autentico', label: 'Dónde escuchar fado' },
    ],
    fuentes: [
      { label: 'Visit Lisboa — Chiado', href: 'https://www.visitlisboa.com/pt-pt/locais/chiado-c26d2c0f-6ea9-4ff5-a64d-ffdfbc197b4c' },
      { label: 'Visit Lisboa — Bairro Alto', href: 'https://www.visitlisboa.com/pt-pt/locais/bairro-alto' },
      { label: 'Visit Lisboa — Lisboa Centro', href: 'https://www.visitlisboa.com/pt-pt/regions/lisboa-centro' },
      { label: 'Bertrand — historia de la librería del Chiado', href: 'https://www.bertrand.pt/online/livraria-bertrand-do-chiado' },
      { label: 'Visit Lisboa — ruta de comercios históricos', href: 'https://www.visitlisboa.com/en/lisbon-stories/21-shops-with-history-route/pois' },
    ],
    contenido: [
      { tipo: "parrafo", texto: "Chiado y Bairro Alto están pegados, pero funcionan mejor si los piensas como dos momentos de un mismo recorrido. Chiado concentra comercio, cafés, librerías y buena parte de la vida cultural del centro; Bairro Alto gana protagonismo conforme avanza la tarde y se convierte en una de las zonas clásicas de bares y vida nocturna." },

      { tipo: "subtitulo", texto: "Chiado: qué ver durante el día" },
      { tipo: "parrafo", texto: "Empieza por Largo do Chiado y Rua Garrett. Esta zona permite combinar arquitectura, comercios históricos, cafés y teatros sin grandes desplazamientos. Turismo de Lisboa sigue presentando Chiado como uno de los puntos centrales de la vida comercial y cultural de la ciudad." },

      { tipo: "subtitulo", texto: "Livraria Bertrand: la parada literaria más clara" },
      { tipo: "parrafo", texto: "La Bertrand del Chiado es reconocida por Guinness World Records como la librería más antigua del mundo todavía en funcionamiento. La propia librería sitúa su historia en el siglo XVIII y explica que volvió a instalarse en Rua Garrett después del terremoto de 1755. Es una visita sencilla de integrar porque está en pleno eje peatonal del barrio." },

      { tipo: "subtitulo", texto: "A Brasileira y la memoria de los cafés del Chiado" },
      { tipo: "parrafo", texto: "A Brasileira abrió en 1905 y forma parte de la ruta oficial de comercios históricos de Lisboa. Su vínculo con Fernando Pessoa y con la vida literaria del Chiado explica por qué sigue siendo una referencia cultural, más allá de si decides sentarte o simplemente verla desde fuera." },
      { tipo: "enlace", texto: "Si quieres comparar esta parada con otros cafés de la ciudad, usa la guía específica.", href: "/blog/donde-tomar-cafe-lisboa", label: "Dónde tomar café en Lisboa" },

      { tipo: "subtitulo", texto: "Qué más encaja en un paseo por Chiado" },
      { tipo: "lista", items: [
        "Largo do Chiado y Praça Luís de Camões, como transición entre Chiado y Bairro Alto.",
        "Las calles comerciales alrededor de Rua Garrett y el eje hacia Baixa.",
        "Los teatros y espacios culturales de la zona, si buscas una visita menos centrada en monumentos.",
        "El descenso hacia Bica o Cais do Sodré si quieres continuar la ruta hacia el río."
      ]},

      { tipo: "subtitulo", texto: "Bairro Alto: qué cambia al subir" },
      { tipo: "parrafo", texto: "Bairro Alto tiene otra lógica. De día conserva tiendas pequeñas, calles estrechas y un ritmo más residencial; por la noche Turismo de Lisboa lo identifica como uno de los principales centros de bares, restaurantes y ambiente de calle. No necesitas buscar un único local “imprescindible”: la experiencia del barrio está precisamente en moverte entre calles y elegir según el ambiente que encuentres." },

      { tipo: "subtitulo", texto: "Dónde empieza la noche en Lisboa" },
      { tipo: "parrafo", texto: "Una ruta nocturna bastante natural empieza en Bairro Alto, baja después hacia Bica y puede terminar en Cais do Sodré. Esa secuencia aparece también en la propia descripción oficial del barrio. Te permite conocer zonas distintas sin depender de taxis entre cada parada." },
      { tipo: "enlace", texto: "Si buscas una guía más completa para salir, con zonas y tipo de ambiente, está separada aquí.", href: "/blog/vida-nocturna-lisboa", label: "Vida nocturna en Lisboa" },

      { tipo: "subtitulo", texto: "Miradouro de São Pedro de Alcântara" },
      { tipo: "parrafo", texto: "Antes de que anochezca, São Pedro de Alcântara funciona bien como transición entre paseo y noche. Está junto al borde de Bairro Alto y ofrece una vista abierta hacia la colina del Castelo. Si vas a incluirlo, tiene más sentido hacerlo al final de la tarde que atravesar la zona solo para volver después." },
      { tipo: "enlace", texto: "Para decidir si este es el mirador que más encaja en tu ruta, compáralo con los demás.", href: "/blog/mejores-miradores-lisboa", label: "Mejores miradores de Lisboa" },

      { tipo: "subtitulo", texto: "¿Chiado y Bairro Alto se pueden ver juntos?" },
      { tipo: "parrafo", texto: "Sí. De hecho, juntos funcionan mejor que como dos visitas separadas. Puedes dedicar la tarde a Chiado, llegar a Praça Luís de Camões, subir hacia Bairro Alto y terminar en São Pedro de Alcântara o seguir hacia la zona de bares. Así evitas repetir cuestas y traslados." },

      { tipo: "subtitulo", texto: "Cuánto tiempo dedicar" },
      { tipo: "parrafo", texto: "Para una primera visita, unas horas bastan para Chiado si lo combinas con Baixa. Si quieres entrar en librerías, sentarte en un café, visitar un espacio cultural y después quedarte por Bairro Alto de noche, reserva una tarde completa y deja que el recorrido continúe sin una hora de salida demasiado rígida." },

      { tipo: "subtitulo", texto: "Cómo llegar" },
      { tipo: "parrafo", texto: "La estación Baixa-Chiado conecta directamente con el corazón del área. Desde allí puedes empezar abajo y subir progresivamente. Si vienes caminando desde Baixa, recuerda que la pendiente cambia rápido: planifica el recorrido para acabar arriba, no para subir y bajar varias veces." },

      { tipo: "subtitulo", texto: "La idea clave para no perder tiempo" },
      { tipo: "parrafo", texto: "No visites Chiado solo por una foto en un café ni Bairro Alto solo por un bar concreto. Lo que hace interesante esta parte de Lisboa es la transición entre cultura, comercio, miradores y noche dentro de una zona muy compacta." },
    ]
  },
  "mouraria-barrio-guia": {
    titulo: "Mouraria: El Barrio Más Multicultural y Auténtico de Lisboa",
    seoTitle: "Mouraria | Guía del barrio en Lisboa",
    descripcion: "Mouraria fue el barrio moro de Lisboa durante siglos. Hoy es el lugar más multicultural, más auténtico y más gastronómico de la ciudad. Qué ver, comer y sentir.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Tejados de Alfama y el Tajo al fondo, en la Lisboa antigua vecina de Mouraria",
    categoria: "Guías",
    fecha: "17 Mar 2026",
    minutos: 10,
    contenido: [
      { tipo: "parrafo", texto: "Mouraria es el barrio que más ha cambiado en Lisboa en los últimos diez años, pero también el que más ha conservado. Eso parece contradictorio hasta que lo visitas. El barrio donde los musulmanes vivieron durante siglos después de la reconquista de 1147 —segregados del resto de la ciudad por órdenes del rey— ha pasado de ser una de las zonas más deterioradas de Lisboa a convertirse en el epicentro gastronómico y cultural más interesante de la ciudad." },
      { tipo: "subtitulo", texto: "Historia: El Barrio de los Mouros" },
      { tipo: "parrafo", texto: "Cuando Afonso Henriques conquistó Lisboa a los árabes en 1147, la población musulmana que vivía en la ciudad no fue expulsada inmediatamente: fue relegada a un barrio específico, la Mouraria, fuera de las murallas de la Lisboa cristiana. Durante siglos, moros, judíos, y más tarde inmigrantes de las colonias africanas y asiáticas, compartieron este espacio al margen del resto de la ciudad." },
      { tipo: "parrafo", texto: "Esa historia de marginalidad y mezcla cultural dejó una huella profunda. Mouraria es el barrio donde los géneros musicales se mezclaron para dar origen al fado: las influencias africanas de los esclavos, las melodías árabes de los moros, las canciones de los marineros... todo convergió en estas callejuelas en el siglo XIX." },
      { tipo: "subtitulo", texto: "Mouraria Hoy: El Barrio Más Auténtico" },
      { tipo: "parrafo", texto: "La renovación de Mouraria empezó en los años 2000 con inversión pública en mejora de edificios y espacios públicos, y se aceleró con la gentrificación que afecta a todo el centro de Lisboa. Pero a diferencia de otros barrios que han perdido a sus habitantes originales, Mouraria mantiene una mezcla poblacional única: vecinos portugueses de toda la vida, comunidades bangladeshíes, chinas, nepalesas y africanas, y una nueva generación de artistas y emprendedores que encontraron aquí precios todavía razonables." },
      { tipo: "parrafo", texto: "El resultado es una diversidad que se nota en la calle, en los comercios y sobre todo en la comida. En un radio de doscientos metros puedes comer tascas portuguesas de toda la vida, currys bangladeshíes, dim sum cantonés, dosas indias del sur y restaurantes de nueva cocina portuguesa que usan ingredientes del mundo." },
      { tipo: "subtitulo", texto: "Qué Comer en Mouraria" },
      { tipo: "parrafo", texto: "El Intendente, la gran plaza que hace de centro de gravedad del barrio, tiene en sus alrededores algunos de los mejores restaurantes económicos de Lisboa. O Corvo es una taberna pequeña donde siempre hay lista de espera al mediodía. Las ruas da Mouraria que bajan hacia la Baixa tienen tascas que han servido el mismo menú del día durante décadas a los trabajadores del barrio." },
      { tipo: "parrafo", texto: "El mercado de la zona — el Mercado de Arroios, a diez minutos a pie— tiene una sección de puestos de comida preparada donde almorzar por 6-7€ entre trabajadores locales. El restaurante del mercado sirve el mejor menú de precio fijo del centro de Lisboa según muchos locales que conozco." },
      { tipo: "tip", texto: "Mouraria es mejor visitarla sin plan fijo: callejea, entra en los comercios que te llamen la atención, acepta el café que te ofrezcan. La calle da Mouraria tiene una vista inesperada del Castillo al final que merece la caminata." },
      { tipo: "enlace", texto: "Mouraria y Alfama se recorren juntas y comparten historia, aunque casi nadie las cuente así.", href: "/free-tours-lisboa#ruta-alfama", label: "Ver los free tours por Alfama y alrededores" },
    ]
  },
  "vinos-portugueses-guia": {
    titulo: "Vinos Portugueses: Guía para Entender el Vinho Verde, el Oporto y el Alentejo",
    seoTitle: "Vinos portugueses | Guía para entender",
    descripcion: "Portugal tiene uno de los patrimonios vinícolas más ignorados de Europa. Vinho verde, vino de Oporto, Douro, Alentejo, Madeira... qué pedir, cómo pedirlo y dónde beberlo en Lisboa.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Cena en la terraza de una tasca de Lisboa a la luz de la noche",
    categoria: "Gastronomía",
    fecha: "16 Mar 2026",
    minutos: 12,
    contenido: [
      { tipo: "parrafo", texto: "Portugal tiene más variedades de uva autóctonas que cualquier otro país del mundo de tamaño comparable. La touriga nacional, la aragonez, la trincadeira, la alvarinho, la loureiro... nombres que no suenan en las cartas de vino de otros países pero que producen vinos de una personalidad que deja a mucha gente sorprendida. El problema es que Portugal lleva siglos siendo discreto sobre sus vinos, y el mundo tardó en prestar atención." },
      { tipo: "subtitulo", texto: "Vinho Verde: El Vino del Verano" },
      { tipo: "parrafo", texto: "El Vinho Verde es el vino más refrescante del mundo para días de calor. Viene del Minho, el noroeste verde y lluvioso de Portugal, y su nombre no describe el color (hay blancos, rosados y tintos) sino la juventud: se cosecha joven, se embotella joven, y se bebe joven con su frescura intacta. Tiene una ligera efervescencia natural, baja graduación alcohólica (entre 8% y 11%), y una acidez que lo hace perfecto con mariscos, pescado fresco y el calor de Lisboa en julio." },
      { tipo: "parrafo", texto: "En los bares y restaurantes de Lisboa, pedir 'um vinho verde' es pedir uno blanco, fresco, servido muy frío. Cuesta entre 3€ y 5€ la copa en un bar normal. El Alvarinho es la variedad más prestigiosa del Vinho Verde, más compleja y cara, con aromas de melocotón y flores que recuerdan vagamente al riesling alemán." },
      { tipo: "subtitulo", texto: "Vino de Oporto (Porto): Mucho Más que el Digestivo Dulce" },
      { tipo: "parrafo", texto: "El Vinho do Porto tiene en el mundo hispánico una imagen de vino dulce de sobremesa para abuelas. Esa imagen es completamente equivocada o, en el mejor caso, parcialmente cierta. El Porto Ruby —el más común— es efectivamente dulce y afrutado. Pero el Porto Tawny envejecido (especialmente los de 20 o 30 años) tiene una complejidad de fruta seca, caramelo y madera que está entre las experiencias vinícolas más sofisticadas que existen. Y el Porto Blanco, servido frío con agua tónica, es uno de los aperitivos más perfectos del mundo." },
      { tipo: "subtitulo", texto: "Alentejo: Los Tintos que Se Beben en Lisboa" },
      { tipo: "parrafo", texto: "El Alentejo es la región vinícola que más ha crecido en reputación en las últimas dos décadas. Sus tintos, hechos con uvas como la aragonez (la tempranillo portuguesa), la trincadeira y la alicante bouschet, tienen cuerpo, color intenso y aromas de fruta madura y especias que los hacen perfectos para las carnes y los guisos de la cocina portuguesa. Son los tintos que más se beben en los restaurantes de Lisboa." },
      { tipo: "subtitulo", texto: "Cómo Pedir Vino en Lisboa" },
      { tipo: "lista", items: [
        "'Um copo de vinho verde' — un vaso de vinho verde (blanco, fresco). Para verano y mariscos",
        "'Um tinto alentejano' — un tinto de Alentejo. La elección más segura para carnes",
        "'Um porto tawny de 20 anos' — un Porto Tawny de 20 años. Para después de cenar, con queso",
        "'Um branco fresco' — un blanco frío. Genérico pero funciona en cualquier situación",
        "En las tascas, pide siempre 'o vinho da casa' (vino de la casa). Suele ser un alentejano básico pero honesto a 2-3€ la jarra"
      ]},
      { tipo: "tip", texto: "La LX Factory los domingos tiene varias bodegas y tiendas de vino con catas gratuitas. La zona del Príncipe Real tiene varios wine bars con buena selección de vinos portugueses por copa. Para comprar para llevar: la cadena Garrafeira Nacional tiene tiendas en toda Lisboa con excelente selección y precios sin marca turística." }
    ]
  },
  "tram-28-historia-guia": {
    titulo: "El Tranvía 28: Historia, Ruta y Trucos para Usarlo sin Colas",
    seoTitle: "Tranvía 28 de Lisboa | Ruta y colas",
    metaDescription: "Qué recorre el tranvía 28, a qué hora subir para encontrar sitio, dónde empezar el trayecto y cuándo compensa cambiar al 12.",
    descripcion: "El tranvía 28 lleva más de 100 años subiendo las mismas cuestas de Alfama. Es el símbolo de Lisboa y también su trampa turística más popular. La historia real y cómo aprovecharlo.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    imageAlt: "Tranvía amarillo de la línea 28 en una calle estrecha de Lisboa, con pasajeros esperando en la acera",
    categoria: "Transporte",
    fecha: "14 Mar 2026",
    minutos: 9,
    fuentes: [
      { label: "Carris — recorridos, horarios y tarifas", href: "https://www.carris.pt/" },
    ],
    contenido: [
      { tipo: "parrafo", texto: "El tranvía 28 es el símbolo más reconocible de Lisboa. Sus vagones amarillos de madera, diseñados en los años veinte del siglo XX, han recorrido las mismas cuestas imposibles de Alfama durante más de cien años. Es también, hay que decirlo sin rodeos, la mayor trampa turística de Lisboa: colas de una hora, carteristas profesionales, vagones tan llenos en verano que es difícil respirar, y finalmente un trayecto que puedes hacer caminando en veinte minutos." },
      { tipo: "parrafo", texto: "Pero el tranvía 28 también es uno de los trayectos más espectaculares que puedes hacer en cualquier ciudad europea. Los dos extremos de la verdad son ciertos al mismo tiempo. Lo que determina si el 28 es una experiencia o una decepción es cuándo y cómo lo tomas." },
      { tipo: "subtitulo", texto: "Historia: Más de 100 Años de Servicio" },
      { tipo: "parrafo", texto: "La línea eléctrica que hoy conocemos como tranvía 28 empezó a funcionar en su forma actual en 1914. Los vagones históricos que siguen en servicio —los 'elétricos'— fueron fabricados entre los años 30 y 50 del siglo XX por la empresa St. Louis Car Company de Missouri. Son vehículos de madera y metal con cojines de cuero, ventanas que se abren a mano y frenos que crujen en las bajadas. El sonido de sus ruedas sobre el pavimento de piedra de Alfama es parte del paisaje sonoro de Lisboa." },
      { tipo: "parrafo", texto: "El 28 es uno de los pocos tranvías históricos del mundo que sigue siendo un medio de transporte público funcional, no una atracción turística. Los lisboetas lo usan, aunque cada vez menos: las colas de turistas y los retrasos habituales han hecho que muchos vecinos prefieran el autobús o el metro." },
      { tipo: "subtitulo", texto: "La Ruta: De Martim Moniz a Campo de Ourique" },
      { tipo: "parrafo", texto: "El 28 sale de la Praça Martim Moniz (límite del barrio de Mouraria con la Baixa), sube por Alfama con sus curvas cerradas y sus pendientes de infarto, pasa por la Sé Catedral y los miradores de Santa Luzia y Portas do Sol, atraviesa el Chiado, pasa por el Largo do Chiado y la Calçada do Combro, y termina en Campo de Ourique, un barrio residencial tranquilo. El trayecto completo dura unos 30 minutos si no hay incidencias." },
      { tipo: "parrafo", texto: "La parte más espectacular y más concurrida es la subida por Alfama. Si solo quieres la experiencia del tranvía histórico en las calles empinadas, basta con hacer ese tramo y bajarte en cualquiera de los miradores." },
      { tipo: "subtitulo", texto: "Cómo Usarlo Sin Sufrir" },
      { tipo: "lista", items: [
        "Mejor horario: entre 7:00 y 9:00, o después de las 20:00. En esas franjas hay poca cola y puedes ir sentado",
        "Evita julio y agosto entre las 10:00 y las 19:00: el 28 está literalmente lleno hasta el estribo",
        "Sube en Martim Moniz, no en el Largo do Chiado: desde Martim Moniz vas de sentada; desde el Chiado probablemente de pie",
        "Usa la tarjeta Viva Viagem (1,50€ por viaje) en vez de pagar al conductor (3,30€): más barato y más rápido",
        "El tranvía 12 hace una ruta similar por el Chiado con menos cola: buena alternativa cuando el 28 está imposible"
      ]},
      { tipo: "tip", texto: "Si quieres la foto del tranvía 28 en las calles de Alfama sin subir: colócate en la esquina de la Rua de São Tomé con la Calçada de Santo André al atardecer. El tranvía pasa cada 8-12 minutos y la luz es perfecta." }
    ]
  },
  "bacalhau-plato-portugal": {
    titulo: "El Bacalhau: Por Qué el Bacalao Seco Es el Alma de la Cocina Portuguesa",
    seoTitle: "El bacalhau | Guía del plato portugués",
    descripcion: "Un pescado noruego, un país atlántico y 500 años de historia marítima. Cómo el bacalhau se convirtió en el plato nacional de Portugal y las mejores recetas que tienes que probar.",
    imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200",
    imageAlt: "Tasca de barrio en Lisboa con mesas en la calle y ropa tendida arriba",
    categoria: "Gastronomía",
    fecha: "13 Mar 2026",
    minutos: 11,
    contenido: [
      { tipo: "parrafo", texto: "Hay una paradoja en el corazón de la cocina portuguesa: el plato nacional de un país con 850 kilómetros de costa atlántica es un pescado que viene de Noruega y Terranova. El bacalhau —bacalao salado y secado— no es un pescado fresco del Atlántico ibérico. Es el resultado de cinco siglos de historia marítima que empezó cuando los pescadores portugueses cruzaron el Atlántico en el siglo XV para pescar en los bancos de Terranova y Labrador, y resolvieron el problema de la conservación salando el pescado directamente en el barco." },
      { tipo: "parrafo", texto: "Hoy Portugal importa más del 80% del bacalao que consume de Noruega e Islandia. Y sin embargo el bacalhau sigue siendo el ingrediente más consumido del país, el plato más cargado de significado cultural, y el objeto de un orgullo culinario que a veces raya el chauvinismo. 'Temos 365 receitas de bacalhau, uma por cada dia do ano' es una frase que escuchas en cualquier conversación sobre gastronomía portuguesa." },
      { tipo: "subtitulo", texto: "La Historia: Del Atlántico Norte a la Mesa Portuguesa" },
      { tipo: "parrafo", texto: "Los pescadores portugueses llegaron a los bancos de Terranova antes que ningún otro europeo, posiblemente en la década de 1470, antes del viaje oficial de Cabral a Brasil en 1500. Lo que encontraron fue una abundancia de bacalao tan extraordinaria que los primeros cronistas escribían que el mar estaba 'lleno de peces hasta poder caminar sobre ellos'." },
      { tipo: "parrafo", texto: "El problema era la distancia: Terranova está a dos meses de navegación. La solución fue la salazón: el bacalao salado y secado podía conservarse durante meses y aguantaba el viaje de vuelta sin estropearse. Durante los siglos de los descubrimientos, el bacalhau fue la proteína que alimentó a los marineros en los viajes más largos de la historia. Cuando volvían, lo traían también para vender. Y así se convirtió en alimento cotidiano." },
      { tipo: "subtitulo", texto: "Las Recetas Imprescindibles" },
      { tipo: "lista", items: [
        "Bacalhau à brás: bacalao desmenuzado, patatas fritas finas, huevo revuelto, aceitunas y perejil. El más popular en restaurantes",
        "Bacalhau com natas: bacalao con bechamel y nata gratinada. Abundante, rico, para días de frío",
        "Bacalhau assado: bacalao al horno entero con patatas, aceitunas, aceite de oliva y pimientos. El más sencillo y el mejor si el pescado es bueno",
        "Bacalhau à Gomes de Sá: bacalao con patatas cocidas, huevo duro y cebolla. Inventado en Oporto en el siglo XIX",
        "Pataniscas de bacalhau: frituras de bacalao desmenuzado con huevo y harina. Se comen como aperitivo con arroz de feijão"
      ]},
      { tipo: "subtitulo", texto: "Cómo Reconocer el Bacalhau de Calidad" },
      { tipo: "parrafo", texto: "El bacalhau se vende en varias calidades: o bacalhau graúdo (el más caro, lombo grueso de bacalao grande), o bacalhau corrente (talla media, lo que comes en la mayoría de tascas), y o bacalhau miúdo (pequeño y fino, para las pataniscas y el bacalhau à brás). El mejor bacalao es siempre el que tiene un color uniforme crema-amarillento, sin manchas oscuras, y una textura densa al tacto." },
      { tipo: "parrafo", texto: "En los supermercados portugueses hay siempre una sección entera de bacalao salado. Los mejores establecimientos especializados son las bacalhoeiros (bacalajeros) del Mercado da Ribeira y del Mercado do Bolhão en Oporto. En casa, el bacalao salado hay que desalarlo en agua fría durante 24-48 horas cambiando el agua cada 8 horas." },
      { tipo: "tip", texto: "Para comer el mejor bacalhau à brás de Lisboa sin pagar precio de restaurante turístico: ve al Mercado de Arroios al mediodía y pide el prato do dia en el restaurante del mercado. Sale por 7-8€ y es comida hecha esa mañana." }
    ]
  },
  "arquitectura-manuelina-lisboa": {
    titulo: "Estilo manuelino: qué es, características y ejemplos en Lisboa",
    seoTitle: "Estilo manuelino: qué es y ejemplos en Lisboa",
    metaDescription: "Qué es el estilo manuelino, cuáles son sus características y dónde verlo en Lisboa. Jerónimos, Torre de Belém, esfera armilar y Cruz de Cristo.",
    descripcion: "Qué es el estilo manuelino, cuáles son sus símbolos y cómo reconocerlo en Lisboa, con los Jerónimos y la Torre de Belém como ejemplos principales.",
    imagen: "/images/actividades/mosteiro-dos-jeronimos-claustro.webp",
    imageAlt: "Claustro del Mosteiro dos Jerónimos, uno de los grandes ejemplos del estilo manuelino",
    categoria: "Cultura",
    fecha: "11 Mar 2026",
    fechaActualizacion: "Actualizado en septiembre de 2026",
    dateModified: "2026-09-21",
    minutos: 9,
    links: [
      { href: "/blog/belem-barrio-guia", label: "Qué ver en Belém" },
      { href: "/blog/monumentos-de-lisboa", label: "Monumentos de Lisboa" },
      { href: "/blog/historia-de-lisboa", label: "Historia de Lisboa" },
      { href: "/blog/descubrimientos-portugueses-lisboa", label: "Lisboa y la era de los Descubrimientos" },
    ],
    fuentes: [
      { label: "Visit Portugal — Descubrir el estilo manuelino", href: "https://www.visitportugal.com/pt-pt/node/73866" },
      { label: "Património Cultural — Mosteiro dos Jerónimos", href: "https://www.patrimoniocultural.gov.pt/pat_mun/mosteiros-dos-jeronimos-e-torre-de-belem-em-lisboa/" },
      { label: "Visit Portugal — Patrimonio Mundial", href: "https://www.visitportugal.com/pt-pt/content/patrimonio-mundial" },
    ],
    contenido: [
      { tipo: "parrafo", texto: "El estilo manuelino es una expresión artística portuguesa desarrollada durante el reinado de D. Manuel I, entre finales del siglo XV y comienzos del XVI. Parte del gótico tardío, incorpora influencias renacentistas y una decoración muy ligada a la monarquía, la religión y el mundo marítimo de los Descubrimientos." },
      { tipo: "parrafo", texto: "Si llegaste aquí buscando qué significa «manuelino» o cómo reconocerlo, quédate con una idea: no es simplemente piedra muy decorada. Sus edificios combinan una estructura heredada del gótico con símbolos que hablan del poder de D. Manuel I y de la expansión portuguesa de aquella época." },

      { tipo: "subtitulo", texto: "Qué es el estilo manuelino" },
      { tipo: "parrafo", texto: "Visit Portugal lo describe como una interpretación muy específica del gótico en estructura y decoración, nacida en Portugal durante el reinado de D. Manuel I. El término «manuelino» se adoptó más tarde, en el siglo XIX, para identificar este lenguaje artístico." },
      { tipo: "parrafo", texto: "No todos los edificios de comienzos del siglo XVI son iguales ni todo elemento marítimo convierte una obra en manuelina. Lo útil es mirar el conjunto: arquitectura tardogótica, ornamentación naturalista, símbolos regios y religiosos y una decoración de gran densidad en portadas, ventanas, claustros y elementos estructurales." },

      { tipo: "subtitulo", texto: "Características del estilo manuelino" },
      { tipo: "lista", items: [
        "Esfera armilar: símbolo personal de D. Manuel I y una de las imágenes más fáciles de identificar.",
        "Cruz de la Orden de Cristo: aparece de forma recurrente y conecta la decoración con el poder espiritual y político de la época.",
        "Cuerdas, nudos y formas de inspiración marítima: referencias visuales al mundo de la navegación.",
        "Hojas, ramas, animales y otros motivos naturalistas: la piedra se llena de formas orgánicas y ornamentación.",
        "Base gótica tardía con influencias renacentistas: el manuelino transforma el gótico con un repertorio portugués propio.",
      ] },

      { tipo: "subtitulo", texto: "La esfera armilar y la Cruz de Cristo: las dos pistas más útiles" },
      { tipo: "parrafo", texto: "Cuando visites un edificio y quieras saber si estás viendo decoración manuelina, empieza por buscar la esfera armilar y la Cruz de Cristo. Visit Portugal las destaca como símbolos recurrentes de las obras de la época de D. Manuel I." },
      { tipo: "parrafo", texto: "Después mira el resto: cuerdas talladas, vegetación, formas marinas y una ornamentación que parece envolver puertas, ventanas y columnas. Es más fácil reconocer el manuelino por la repetición de este vocabulario que por una sola pieza aislada." },

      { tipo: "subtitulo", texto: "Mosteiro dos Jerónimos: el gran ejemplo en Lisboa" },
      { tipo: "parrafo", texto: "El Mosteiro dos Jerónimos, en Belém, es el lugar más claro para entender el estilo. Património Cultural lo presenta como la «joya» del manuelino y explica que integra elementos del gótico final y del Renacimiento con simbología regia, cristológica y naturalista." },
      { tipo: "parrafo", texto: "Los trabajos comenzaron en 1501. Para observar la decoración, no hace falta intentar verlo todo a la vez: fíjate primero en portadas y columnas, luego en el claustro y finalmente en los símbolos que se repiten. La lectura del edificio cambia cuando dejas de verlo como decoración abstracta y empiezas a reconocer su lenguaje." },
      { tipo: "enlace", texto: "Si vas a dedicar tiempo a Belém, conviene organizar la zona como un bloque y no ir solo por una foto del monasterio.", href: "/blog/belem-barrio-guia", label: "Qué ver en Belém y cómo organizar la visita" },

      { tipo: "subtitulo", texto: "Torre de Belém: manuelino junto al Tajo" },
      { tipo: "parrafo", texto: "La Torre de Belém es el otro gran referente lisboeta. Fue mandada construir por D. Manuel I y forma, junto con los Jerónimos, uno de los conjuntos más asociados al manuelino. Aquí el lenguaje ornamental se mezcla con la función defensiva de una torre situada en la entrada del estuario del Tajo." },
      { tipo: "parrafo", texto: "La visita sirve para comparar dos maneras de utilizar el mismo lenguaje artístico: un gran monasterio y una construcción defensiva. Ver ambos el mismo día ayuda más a entender el estilo que memorizar una lista de características." },

      { tipo: "subtitulo", texto: "Otros lugares de Portugal donde aparece el manuelino" },
      { tipo: "parrafo", texto: "El manuelino no pertenece solo a Lisboa. Visit Portugal destaca también el Mosteiro da Batalha, el Convento de Cristo en Tomar, el Mosteiro de Jesus en Setúbal y ejemplos en Sintra. Eso ayuda a entenderlo como un fenómeno artístico portugués de alcance nacional." },

      { tipo: "subtitulo", texto: "Cómo reconocerlo en menos de un minuto" },
      { tipo: "lista", items: [
        "Busca primero la esfera armilar.",
        "Comprueba si aparece la Cruz de Cristo.",
        "Mira si hay cuerdas, nudos, vegetación o motivos marinos tallados.",
        "Observa si la estructura sigue pareciendo gótica aunque la decoración sea muy exuberante.",
        "Relaciona la fecha del edificio con el reinado de D. Manuel I y comienzos del siglo XVI.",
      ] },

      { tipo: "subtitulo", texto: "Una ruta sencilla para verlo en Lisboa" },
      { tipo: "parrafo", texto: "Si solo quieres entender el manuelino durante un viaje a Lisboa, no necesitas perseguir una docena de edificios. Dedica una mañana o una tarde a Belém, observa primero los Jerónimos y después la Torre de Belém. Con esos dos ejemplos ya tendrás suficiente contexto para reconocer sus símbolos cuando vuelvan a aparecer en otros lugares de Portugal." },
      { tipo: "enlace", texto: "Si quieres colocar este estilo dentro de la historia de la ciudad y no verlo como una pieza aislada, continúa por la etapa de los Descubrimientos.", href: "/blog/descubrimientos-portugueses-lisboa", label: "Lisboa durante la era de los Descubrimientos" },
    ]
  }
};

const localImages: Record<string, string> = {
  'donde-alojarse-en-lisboa': '/images/barrio-calle-residencial.jpg',
  'lisboa-card-vale-la-pena': '/images/funicular-bica-turistas.jpg',
  'que-hacer-gratis-en-lisboa': '/images/miradouro-grupo-atardecer.jpg',
  'mejores-miradores-lisboa': '/images/alfama-panoramica.jpg',
  'como-moverse-por-lisboa': '/images/lisboa-originales/electrico-15e-caf-lisboa.jpg',
  'barrios-imprescindibles': '/images/lisboa-originales/alfama-rua-da-adica-lisboa.jpg',
  'donde-comer-barato-lisboa': '/images/tasca-da-graca.jpg',
  'evitar-turistadas-lisboa': '/images/alfama-panoramica.jpg',
  'como-ir-sintra-desde-lisboa': '/images/sintra-palacio-turistas.jpg',
  'barrios-lisboa-donde-alojarse': '/images/barrio-calle-residencial.jpg',
  'pasteles-de-belem': '/images/actividades/pasteis-de-belem.webp',
  'mejor-epoca-visitar-lisboa': '/images/miradouro-atardecer.jpg',
  'presupuesto-viajar-lisboa': '/images/bica-cafe-mapa.jpg',
  'mejores-mercados-lisboa': '/images/barrio-calle-residencial.jpg',
  'donde-tomar-cafe-lisboa': '/images/bica-cafe-mapa.jpg',
  'miradores-atardecer-lisboa': '/images/mirador-tajo-amarras-atardecer.jpg',
  'que-comprar-lisboa-souvenirs': '/images/lisboa-originales/postales-souvenirs-lisboa.jpg',
  'viajar-ninos-lisboa': '/images/parque-nacoes-torres-atardecer.jpg',
  'excursiones-desde-lisboa': '/images/sintra-palacio-turistas.jpg',
  'restaurantes-romanticos-lisboa': '/images/fado-tasca-noche.jpg',
  'donde-escuchar-fado-autentico': '/images/fado-tasca-noche.jpg',
  'vida-nocturna-lisboa': '/images/bairro-alto-calle-noche.jpg',
  'lisboa-en-invierno': '/images/ventana-alfama-tajo.jpg',
  'errores-turistas-lisboa': '/images/tranvia-28.jpg',
  'sintra-desde-lisboa': '/images/estacion-sintra.jpg',
  'historia-de-lisboa': '/images/lisboa-originales/mural-historia-lisboa.jpg',
  'terremoto-lisboa-1755': '/images/lisboa-originales/azulejo-terreiro-do-paco-siglo-xviii.png',
  'descubrimientos-portugueses-lisboa': '/images/actividades/passeio-barco-rio-tejo-lisboa.webp',
  'azulejos-portugueses-historia': '/images/aldaba-puerta-lisboa.jpg',
  'novedades-lisboa-2026': '/images/parque-nacoes-torres-atardecer.jpg',
  'festivales-eventos-lisboa-2026': '/images/festival-sardinhas-noche.jpg',
  'lisboa-vs-porto': '/images/alfama-panoramica.jpg',
  'monumentos-de-lisboa': '/images/estatua-praca-lisboa.jpg',
  'semana-santa-lisboa': '/images/bairro-alto-calle-noche.jpg',
  'alfama-historia-guia': '/images/alfama-panoramica.jpg',
  'gastronomia-portuguesa-guia': '/images/tasca-da-graca.jpg',
  'fado-historia-origen': '/images/fado-tasca-noche.jpg',
  'belem-barrio-guia': '/images/actividades/torre-de-belem-lisboa.webp',
  'chiado-bairro-alto-guia': '/images/tranvia-28.jpg',
  'mouraria-barrio-guia': '/images/alfama-panoramica.jpg',
  'vinos-portugueses-guia': '/images/fado-tasca-noche.jpg',
  'tram-28-historia-guia': '/images/tranvia-28.jpg',
  'bacalhau-plato-portugal': '/images/tasca-da-graca.jpg',
  'arquitectura-manuelina-lisboa': '/images/actividades/mosteiro-dos-jeronimos-claustro.webp',
};

const articleHeroImages: Record<string, string> = {
  'mejores-miradores-lisboa': '/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
};

const SITE_URL = 'https://estabaenlisboa.com';
const AUTHOR_NAME = 'José Tabares';

/**
 * Maquetación editorial v2.
 *
 * El blog completo comparte este sistema visual. Las fotos por sección siguen
 * limitadas a los artículos que ya las tienen verificadas.
 */
const EDITORIAL_V2_SLUGS = new Set([...blogPosts.map((post) => post.id), ...Object.keys(articles)]);
const BLOG_POST_BY_ID = new Map(blogPosts.map((post) => [post.id, post]));
// Solo admite preguntas que aporten información adicional al cuerpo. La
// auditoría actual no encontró ninguna que cumpliera ese criterio.
const AUDITED_ARTICLE_FAQS: Record<string, ArticleFaq[]> = {};

/**
 * Texto alternativo específico de la foto de portada.
 *
 * Vive aparte del objeto `articles` a propósito: si se guardara como
 * `imageAlt` cambiaría también el `og:image:alt`, y esta fase no toca metadata.
 */
const heroAlt: Record<string, string> = {
  'mejores-miradores-lisboa':
    'Vista de Alfama desde Portas do Sol, con los tejados de Lisboa y el río Tajo al fondo',
  'como-moverse-por-lisboa':
    'Tranvía articulado moderno de la línea 15E de Carris, con destino Praça da Figueira, circulando por una calle estrecha de Lisboa',
  'barrios-imprescindibles':
    'Escalinata empedrada de la Rua da Adiça, en Alfama, con casas encaladas, azulejos junto a las puertas y macetas en la calle',
};

/**
 * Fotos por sección, indexadas por el id del encabezado.
 *
 * Solo se incluyen los miradores cuya fotografía se ha verificado
 * visualmente. Los que no tienen foto se quedan sin ella: no se rellena con
 * imágenes genéricas ni se describe un lugar que no aparece en la imagen.
 */
const sectionPhotos: Record<string, Record<string, SectionPhoto>> = {
  'estacion-oriente-lisboa': {
    'la-arquitectura-de-santiago-calatrava': {
      src: '/images/lisboa-originales/estacion-oriente-lisboa/estacion-oriente-lisboa-cubierta-calatrava-detalle.jpg',
      alt: 'Detalle de la estructura de vidrio y acero diseñada por Santiago Calatrava en la estación de Oriente',
      position: '50% 45%',
    },
  },
  'estacion-olaias-lisboa': {
    'que-tiene-de-especial-la-estacion-de-olaias': {
      src: '/images/lisboa-originales/estacion-olaias-lisboa/estacion-olaias-lisboa-anden-columnas.jpg',
      alt: 'Andén de la estación de Olaias con su columnata monumental y paneles de colores',
    },
    'arquitectura-y-arte-quien-hizo-que': {
      src: '/images/lisboa-originales/estacion-olaias-lisboa/estacion-olaias-lisboa-techo-arte.jpg',
      alt: 'Detalle del techo artístico y la iluminación de la estación de Olaias en Lisboa',
    },
  },
  'mejores-miradores-lisboa': {
    '3-mirador-das-portas-do-sol-el-vecino-relajado': {
      src: '/images/actividades/portas-do-sol-alfama.webp',
      alt: 'Tejados de Alfama con la cúpula del Panteão Nacional y el río Tajo al fondo, vistos desde una zona elevada de Lisboa',
    },
    '5-elevador-de-santa-justa-ingenieria-y-panoramicas-a-partes-iguales': {
      src: '/images/actividades/elevador-santa-justa-lisboa.webp',
      alt: 'Elevador de Santa Justa y tejados de la Baixa de Lisboa',
    },
    '6-castelo-de-sao-jorge-la-vista-que-lo-abarca-todo': {
      src: '/images/actividades/castelo-sao-jorge-lisboa.webp',
      alt: 'Murallas y torres del Castelo de São Jorge sobre Lisboa',
    },
    '10-teleferico-del-parque-das-nacoes-la-lisboa-del-siglo-xxi': {
      src: '/images/parque-nacoes-torres-atardecer.jpg',
      alt: 'Torres São Gabriel y São Rafael sobre el frente ribereño del Parque das Nações, en Lisboa',
      position: '50% 32%',
    },
  },
};

const MESES_ABREVIADOS: Record<string, string> = {
  ene: '01', feb: '02', mar: '03', abr: '04', may: '05', jun: '06',
  jul: '07', ago: '08', sep: '09', set: '09', oct: '10', nov: '11', dic: '12',
};

/**
 * Convierte la fecha visible del artículo ("14 Mar 2026") a ISO 8601.
 *
 * El campo `fecha` se escribe en castellano porque es lo que se pinta bajo el
 * titular, pero schema.org exige `2026-03-14` y Google no sabe leer la otra
 * forma. Se traduce solo para el JSON-LD; el texto visible no se toca.
 *
 * Si el formato no encaja devuelve `undefined`, para omitir la propiedad en
 * lugar de publicar una fecha inventada.
 */
function toIsoDate(fecha: string): string | undefined {
  const m = fecha.trim().match(/^(\d{1,2})\s+([A-Za-zÁÉÍÓÚáéíóú]+)\s+(\d{4})$/);
  if (!m) return undefined;
  const mes = MESES_ABREVIADOS[m[2].slice(0, 3).toLowerCase()];
  if (!mes) return undefined;
  return `${m[3]}-${mes}-${m[1].padStart(2, '0')}`;
}

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http')) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl}`;
}

/**
 * Título para buscadores cuando el artículo no define el suyo.
 *
 * Antes añadía " 2026 | Guía local" a cada título, y la plantilla del layout
 * añade además " | Estaba en Lisboa". Eran 37 caracteres de relleno fijo que
 * dejaban 43 de los 48 artículos por encima del corte de Google, de modo que
 * lo que se truncaba era el tema del artículo y lo que sobrevivía, la
 * coletilla.
 *
 * No se recorta aquí a propósito. Un título que llega al buscador con puntos
 * suspensivos se lee como algo a medio hacer; Google ya corta por ancho real
 * y lo hace mejor. Lo que sí se quita es el relleno, que no aportaba nada.
 *
 * El año tampoco se añade solo: los artículos que de verdad van de un año lo
 * llevan en su propio título, y ponérselo al resto envejece el contenido.
 */
function getSeoTitle(title: string) {
  const hasLisboa = title.toLowerCase().includes('lisboa');
  return hasLisboa ? title : `${title} en Lisboa`;
}

/**
 * Descripción para buscadores cuando el artículo no define la suya.
 *
 * Añadía una frase fija de 78 caracteres a cada descripción, idéntica en todo
 * el blog, que dejaba a la mayoría por encima de 200 caracteres.
 *
 * Aquí sí se recorta, pero por final de frase: una descripción cortada a mitad
 * de palabra queda peor que una más corta pero entera. Si ninguna frase cabe,
 * se deja tal cual y que corte el buscador.
 */
function getSeoDescription(description: string) {
  if (description.length <= 160) return description;
  const corte = description.slice(0, 160);
  const fin = Math.max(corte.lastIndexOf('. '), corte.lastIndexOf('? '), corte.lastIndexOf('! '));
  return fin > 80 ? description.slice(0, fin + 1) : description;
}

function resolveBlogImage(slug: string, image?: string) {
  const mapped = blogImageMap[slug];
  const candidate = mapped || image || blogFallbackImage;
  if (candidate.startsWith('http')) {
    return blogFallbackImage;
  }
  return candidate;
}


function getArticle(slug: string): Article | null {
  return articles[slug] ?? null;
}

const articleExtras: Record<string, ArticleExtras> = {
  'time-out-market-lisboa': {
    comoLlegar: 'Está en el Mercado da Ribeira, Avenida 24 de Julho, frente al intercambiador de Cais do Sodré. Se llega en metro, tren, bus, barco o a pie desde Chiado.',
    mejorHora: 'Fuera de las horas habituales de comida y cena es más fácil encontrar mesa. Los fines de semana conviene evitar llegar justo en el pico.',
  },
  'estacion-oriente-lisboa': {
    comoLlegar: 'Metro de Lisboa, Línea Roja, estación Oriente. El intercambiador reúne metro, trenes y terminal de autobuses junto al Parque das Nações.',
    mejorHora: 'Si quieres mirar la arquitectura sin ir con una conexión pendiente, encájala a media mañana o en una tarde de paseo por el Parque das Nações.',
  },
  'estacion-olaias-lisboa': {
    comoLlegar: 'Metro de Lisboa, Línea Roja. Olaias está entre Alameda y Bela Vista; la dirección oficial es Avenida Engenheiro Arantes e Oliveira.',
    mejorHora: 'A media mañana o a primera hora de la tarde suele ser más fácil mirar y fotografiar sin coincidir con los principales desplazamientos laborales.',
  },
  'donde-comer-barato-lisboa': {
    comoLlegar: 'Busca zonas locales como Mouraria, Arroios o Campo de Ourique (metro Martim Moniz o Arroios). Desde Baixa estás a 10-15 min caminando.',
    mejorHora: 'Entre 12:30 y 14:00 para aprovechar el “prato do dia” a buen precio.',
  },
  'barrios-imprescindibles': {
    comoLlegar: 'Arranca en Baixa-Chiado (metro) y conecta con Alfama por tranvía 28/12. Belém se alcanza con tranvía 15 desde Cais do Sodré.',
    mejorHora: 'Mañanas para Baixa/Belém y tardes-noches para Alfama y Bairro Alto.',
  },
  'evitar-turistadas-lisboa': {
    comoLlegar: 'Muévete en metro y a pie. Evita tours exprés y tuk-tuks en zonas saturadas.',
    mejorHora: 'Visita lo más popular antes de las 10:00 o después de las 17:00.',
  },
  'pasteles-de-belem': {
    comoLlegar: 'Tranvía 15E desde Cais do Sodré o tren a Belém. La pastelería está a 5 min de la estación.',
    mejorHora: 'Antes de las 9:30 o a partir de las 17:00 para evitar colas largas.',
  },
  'mejor-epoca-visitar-lisboa': {
    comoLlegar: 'Vuelos directos a LIS desde España; del aeropuerto al centro en metro (línea roja).',
    mejorHora: 'En verano, paseos temprano o al atardecer para evitar calor y multitudes.',
  },
  'que-ver-cascais-desde-lisboa': {
    comoLlegar: 'Tren directo desde Cais do Sodré cada 20 minutos. El trayecto dura 30-40 minutos.',
    mejorHora: 'Sal temprano para ver el centro y la costa sin prisas, sobre todo en verano.',
  },
  'playas-cerca-lisboa': {
    comoLlegar: 'Cascais en tren, Caparica en bus y Arrábida en coche. Todas están a menos de 1 hora.',
    mejorHora: 'Llega antes de las 10:30 en verano para evitar parking lleno.',
  },
  'donde-escuchar-fado-autentico': {
    comoLlegar: 'Alfama y Bairro Alto se alcanzan con metro a Baixa-Chiado y luego caminando.',
    mejorHora: 'Entre 20:00 y 22:30. Jueves a sábado hay más ambiente.',
  },
  'presupuesto-viajar-lisboa': {
    comoLlegar: 'Calcula por separado el traslado desde el aeropuerto y los trayectos urbanos; la guía de movilidad compara Metro, zapping y títulos de 24 horas.',
    mejorHora: 'Haz el presupuesto cuando ya tengas fechas: el alojamiento cambia mucho más que las tarifas oficiales de transporte.',
  },
  'mejores-mercados-lisboa': {
    comoLlegar: 'Time Out Market en Cais do Sodré, Feira da Ladra en Santa Apolónia, Arroios con metro.',
    mejorHora: 'Primera hora para mejor producto y menos gente.',
  },
  'donde-tomar-cafe-lisboa': {
    comoLlegar: 'Chiado y Príncipe Real están conectados por metro (Baixa-Chiado o Rato).',
    mejorHora: 'Entre 8:00 y 11:00 para ver la rutina local con poca cola.',
  },
  'miradores-atardecer-lisboa': {
    comoLlegar: 'Para Graça usa el tranvía 28/12 o el bus 734. Portas do Sol queda cerca de Alfama.',
    mejorHora: '30-45 minutos antes del atardecer para reservar buen sitio.',
  },
  'que-comprar-lisboa-souvenirs': {
    comoLlegar: 'Feira da Ladra está cerca de Santa Apolónia (metro). Chiado es accesible desde Baixa.',
    mejorHora: 'Martes o sábado por la mañana para Feira da Ladra.',
  },
  'viajar-ninos-lisboa': {
    comoLlegar: 'El Oceanário está en Parque das Nações (metro línea roja). El resto se hace caminando o tranvía.',
    mejorHora: 'Mañanas para el Oceanário y tardes para parques; evita 13:00-16:00 en verano.',
  },
  'excursiones-desde-lisboa': {
    comoLlegar: 'Trenes desde Rossio (Sintra) o Cais do Sodré (Cascais). Buses desde Sete Rios para Óbidos y Nazaré.',
    mejorHora: 'Salidas entre 8:00 y 9:00 para aprovechar el día completo.',
  },
};

// Generar rutas estáticas para todos los posts del blog
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return {
      title: 'Artículo no encontrado | Blog Lisboa',
    };
  }

  const seoTitle = article.seoTitle ?? getSeoTitle(article.titulo);
  const seoDescription = article.metaDescription ?? getSeoDescription(article.descripcion);
  const image = resolveBlogImage(slug, localImages[slug] || article.imagen);
  const keywords = ['lisboa', 'blog lisboa', article.categoria.toLowerCase(), slug.replace(/-/g, ' ')];
  /*
   * Un artículo que no está en `blogPosts` no aparece en el listado ni en el
   * sitemap ni se prerenderiza: es un borrador, aunque su URL responda. Se
   * marca noindex para que no compita en buscadores con el artículo publicado
   * que cubre el mismo tema. Publicarlo es añadirlo a `blogPosts`.
   */
  const publicado = blogPosts.some((post) => post.id === slug);
  return {
    title: seoTitle,
    description: seoDescription,
    keywords,
    ...(publicado ? {} : { robots: { index: false, follow: true } }),
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `${SITE_URL}/blog/${slug}`,
      images: [
        {
          url: toAbsoluteUrl(image),
          width: 1200,
          height: 630,
          alt: article.imageAlt ?? article.titulo,
        },
      ],
    },
    /*
     * Sin este bloque, cada artículo heredaba el `twitter:title` y el
     * `twitter:description` del layout raíz, que hablan del sitio entero. Al
     * compartir un artículo salía una tarjeta genérica mientras Open Graph
     * mostraba el titular correcto.
     *
     * `card` e `images` se repiten a propósito: Next.js no fusiona el objeto
     * `twitter` con el del layout, lo sustituye entero, así que declarar sólo
     * título y descripción dejaría los artículos sin `summary_large_image` y
     * sin imagen. La imagen es la misma que ya usa Open Graph aquí arriba.
     */
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [toAbsoluteUrl(image)],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const heroImage = resolveBlogImage(slug, localImages[slug] || article.imagen);
  const visualHeroImage = articleHeroImages[slug] ?? heroImage;
  const seoTitle = article.seoTitle ?? getSeoTitle(article.titulo);
  const seoDescription = article.metaDescription ?? getSeoDescription(article.descripcion);
  const extras = articleExtras[slug];
  const baseHeadings = article.contenido
    .filter((bloque) => bloque.tipo === 'subtitulo' && bloque.texto)
    .map((bloque) => ({
      title: bloque.texto as string,
      id: slugify(bloque.texto as string),
    }));
  const extraHeadings = [
    ...(extras?.comoLlegar ? [{ title: 'Cómo llegar', id: 'como-llegar' }] : []),
    ...(extras?.mejorHora ? [{ title: 'Mejor hora para ir', id: 'mejor-hora' }] : []),
  ];
  const headings = [...extraHeadings, ...baseHeadings];

  const firstList = article.contenido.find((bloque) => bloque.tipo === 'lista');
  const takeaways = Array.isArray(firstList?.items) ? firstList?.items?.slice(0, 3) : [];
  const linkedArticleIds = (article.links ?? []).flatMap((link) => {
    const match = link.href.match(/^\/blog\/([^/#?]+)/);
    return match ? [match[1]] : [];
  });
  const relatedIds = BLOG_RELATED_POST_IDS[slug] ?? linkedArticleIds;
  const relatedPosts = [
    ...relatedIds,
    ...blogPosts
      .filter((post) => post.id !== slug && post.categoria === article.categoria)
      .map((post) => post.id),
  ]
    .filter((postId, index, ids) => postId !== slug && ids.indexOf(postId) === index)
    .flatMap((postId) => {
      const post = BLOG_POST_BY_ID.get(postId);
      return post ? [post] : [];
    })
    .slice(0, 3);
  // Related and the body already expose some declared links; restore only the rest.
  const renderedDestinations = new Set([
    `/blog/${slug}`,
    '/planifica-tu-viaje',
    ...relatedPosts.map((post) => `/blog/${post.id}`),
    ...article.contenido.flatMap((block) =>
      block.tipo === 'enlace' && block.href ? [block.href] : [],
    ),
  ]);
  const editorialLinks = (article.links ?? []).filter((link) => {
    if (renderedDestinations.has(link.href)) return false;
    renderedDestinations.add(link.href);
    return true;
  });
  const faqs = AUDITED_ARTICLE_FAQS[slug] ?? [];
  const isEditorialV2 = EDITORIAL_V2_SLUGS.has(slug);
  const heroImageAlt = heroAlt[slug] ?? article.imageAlt ?? article.titulo;
  const photos = sectionPhotos[slug] ?? {};

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: seoTitle,
    description: seoDescription,
    ...(toIsoDate(article.fecha) ? { datePublished: toIsoDate(article.fecha) } : {}),
    ...(article.dateModified ? { dateModified: article.dateModified } : {}),
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
    },
    image: toAbsoluteUrl(heroImage),
    mainEntityOfPage: toAbsoluteUrl(`/blog/${slug}`),
    publisher: {
      '@type': 'Organization',
      name: 'Estaba en Lisboa',
      url: SITE_URL,
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: article.titulo, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <main
      id="main-content"
      className={`article-page bg-background-light${isEditorialV2 ? ' article-v2' : ''}`}
    >
      <ArticleHero
        article={article}
        authorName={AUTHOR_NAME}
        heroImage={visualHeroImage}
        heroImageAlt={heroImageAlt}
        isEditorialV2={isEditorialV2}
      />

      {/* Layout principal: contenido + sidebar */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-[1fr,320px] gap-10">
          <ArticleBody
            article={article}
            extras={extras}
            faqs={faqs}
            isEditorialV2={isEditorialV2}
            photos={photos}
            seoDescription={seoDescription}
            takeaways={takeaways}
          />

          <ArticleToc headings={headings} />
        </div>

        <ArticleRelated posts={relatedPosts} />
        <ArticleEditorialLinks links={editorialLinks} />

        <div className="article-compact-ending max-w-2xl mx-auto mt-10">
          <ArticleFooter
            authorName={AUTHOR_NAME}
            beforeAuthor={
              article.fuentes && article.fuentes.length > 0 ? (
                <ArticleSources sources={article.fuentes} />
              ) : null
            }
          />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </main>
  );
}
