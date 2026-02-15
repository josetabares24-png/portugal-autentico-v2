import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { blogFallbackImage, blogImageMap } from '@/lib/media';

type Article = {
  titulo: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  fecha: string;
  minutos: number;
  contenido: { tipo: string; texto?: string; items?: string[]; imagen?: string; caption?: string }[];
};

const articles: Record<string, Article> = {
  "mejores-miradores-lisboa": {
    titulo: "Los 10 mejores miradores de Lisboa",
    descripcion: "Rincones con vistas que transforman cualquier atardecer en un recuerdo imborrable. Incluye horarios, rutas y secretos que los guías no cuentan.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    categoria: "Guías",
    fecha: "20 Dic 2024",
    minutos: 12,
    contenido: [
      { tipo: "parrafo", texto: "La primera vez que subí al Mirador da Senhora do Monte fue por accidente. Me había perdido buscando una tasca que alguien me había recomendado en Graça, y de repente, al girar una esquina, la ciudad entera se desplegó ante mí como un mapa vivo. El Tajo brillaba dorado, el castillo parecía flotar sobre los tejados rojizos, y comprendí por qué llaman a Lisboa la ciudad de las siete colinas." },
      { tipo: "parrafo", texto: "Desde entonces he subido a cada mirador de esta ciudad —algunos decenas de veces— y puedo decirte que no todos merecen el esfuerzo de la caminata. Hay miradores masificados donde apenas puedes respirar, otros que son joyas escondidas, y algunos que solo cobran sentido a ciertas horas del día. Esta guía nace de años caminando estas cuestas, maderas pulidas por generaciones de manos en las barandillas, y atardeceres compartidos con desconocidos que se convierten en amigos por unos minutos." },
      { tipo: "subtitulo", texto: "1. Mirador da Senhora do Monte — El preferido de quienes viven aquí" },
      { tipo: "parrafo", texto: "Si preguntas a cualquier lisboeta dónde ve el atardecer, probablemente te mande aquí. Está apartado del circuito habitual, lo que filtra naturalmente a la mayoría de visitantes. El camino de subida atraviesa callejones residenciales donde la ropa cuelga de las ventanas y los vecinos charlan en las puertas. Cuando llegas arriba, la recompensa es una panorámica de 180 grados que abarca desde el Castelo de São Jorge hasta el Puente 25 de Abril." },
      { tipo: "parrafo", texto: "La pequeña ermita del siglo XVI que da nombre al lugar añade un toque de solemnidad. No hay quiosco ni cafetería —solo bancos de piedra y una explanada donde sentarse—, así que conviene llevar algo de beber. Los atardeceres aquí tienen algo distinto: el sol desciende justo detrás del Castillo, creando siluetas dramáticas contra un cielo que pasa del dorado al rosa en cuestión de minutos." },
      { tipo: "tip", texto: "Llega al menos 40 minutos antes de la puesta de sol si quieres un buen sitio en el banco principal. Los fines de semana acuden parejas locales y grupos de amigos con guitarras, creando un ambiente íntimo que rara vez encontrarás en miradores céntricos." },
      { tipo: "subtitulo", texto: "2. Mirador de Santa Luzia — La postal que todo el mundo reconoce" },
      { tipo: "parrafo", texto: "Hay imágenes de Lisboa que aparecen en todas las guías, y la mayoría están tomadas desde aquí. Los paneles de azulejos del siglo XVIII que flanquean la terraza representan la Praça do Comércio antes del terremoto de 1755 y la conquista del Castelo a los moros. Las buganvillas moradas que trepar por la pérgola completan un escenario casi irreal." },
      { tipo: "parrafo", texto: "El problema es que todo el mundo lo sabe. A mediodía el mirador se convierte en un hervidero de selfies y codos, y la magia se diluye entre el bullicio. Sin embargo, he descubierto que a primera hora de la mañana —hablo de las siete y media, cuando la luz todavía es suave y dorada— el lugar recupera su serenidad. Los únicos sonidos son el traqueteo del tranvía 28 pasando por detrás y el canto de algún pájaro madrugador." },
      { tipo: "tip", texto: "Si buscas la foto perfecta sin nadie, ven entre semana antes de las ocho de la mañana. Los azulejos cuentan historias fascinantes: dedica unos minutos a observarlos de cerca antes de sacar el móvil." },
      { tipo: "subtitulo", texto: "3. Mirador das Portas do Sol — El vecino relajado" },
      { tipo: "parrafo", texto: "Apenas treinta metros separan este mirador del anterior, pero el ambiente cambia completamente. Aquí hay un quiosco donde pedir una cerveza fría o un café, bancos bajo los árboles, y una terraza amplia donde sentarse sin prisa. Las vistas son similares —Alfama desplegándose colina abajo hasta el río— pero la sensación es de estar en el salón de tu casa, no en una atracción turística." },
      { tipo: "parrafo", texto: "La estatua de San Vicente, patrón de Lisboa, preside la explanada sosteniendo el barco con los dos cuervos que aparecen en el escudo de la ciudad. Por las tardes, músicos callejeros tocan fado o bossa nova, y el sonido se mezcla con el tintineo de los vasos y las conversaciones en media docena de idiomas. Es el lugar perfecto para hacer una pausa larga." },
      { tipo: "subtitulo", texto: "4. Mirador da Graça — Donde Lisboa huele a café recién hecho" },
      { tipo: "parrafo", texto: "El quiosco que ocupa la esquina de este mirador lleva décadas sirviendo el mismo café a los mismos vecinos. Los domingos por la mañana se llena de familias locales que vienen a desayunar con vistas mientras los niños corretean por la explanada. Es uno de los pocos miradores donde sentirás que estás en un barrio de verdad, no en un decorado para visitantes." },
      { tipo: "parrafo", texto: "La terraza es amplia y tiene sombra —algo que se agradece en verano— y las vistas del Castelo desde este ángulo son especialmente fotogénicas. Al fondo se distingue el estuario del Tajo y, en días claros, la otra orilla. El ambiente es tranquilo, conversaciones en portugués, periódicos abiertos sobre las mesas, perros tumbados a la sombra." },
      { tipo: "tip", texto: "Pide el café con nata (natas de Belém en miniatura) del quiosco. Cuesta menos de tres euros y es el desayuno perfecto con vistas." },
      { tipo: "subtitulo", texto: "5. Elevador de Santa Justa — Ingeniería y panorámicas a partes iguales" },
      { tipo: "parrafo", texto: "Diseñado por Raoul Mesnier du Ponsard —discípulo de Gustave Eiffel— a principios del siglo XX, este ascensor de hierro forjado conecta la Baixa con el Barrio Alto salvando 45 metros de desnivel. La estructura neogótica parece sacada de una novela de Julio Verne, y subir en su cabina de madera es una experiencia en sí misma." },
      { tipo: "parrafo", texto: "Arriba hay una terraza con vistas de 360 grados sobre los tejados de la Baixa, la colina del Castillo y el río. La entrada cuesta cinco euros, pero hay un truco: puedes acceder a la pasarela superior (gratis con la Lisboa Card) subiendo por las escaleras de las ruinas del Convento do Carmo, evitando la cola del ascensor y ahorrándote el billete." },
      { tipo: "tip", texto: "Si decides subir en el ascensor, hazlo al final de la tarde. Las colas son más cortas y la luz del atardecer tiñe el hierro de tonos cobrizos que quedan espectaculares en fotos." },
      { tipo: "subtitulo", texto: "6. Castelo de São Jorge — La vista que lo abarca todo" },
      { tipo: "parrafo", texto: "Hay que pagar entrada para acceder al recinto (quince euros), pero las murallas ofrecen la panorámica más completa de Lisboa. Desde aquí se entiende la geografía de la ciudad: cómo las colinas descienden hacia el río, cómo los barrios se conectan entre sí, cómo la luz cambia según la hora." },
      { tipo: "parrafo", texto: "El Castillo tiene casi mil años de historia visible en cada piedra. Los pavos reales que pasean por los jardines, los restos arqueológicos de asentamientos fenicios, las murallas desde las que se defendió la ciudad contra invasores... Todo contribuye a una visita que va mucho más allá de las vistas. Reserva al menos dos horas." },
      { tipo: "subtitulo", texto: "7. Mirador de Santa Catarina — El alma alternativa de Lisboa" },
      { tipo: "parrafo", texto: "La estatua del Adamastor —monstruo marino de Os Lusíadas de Camões— vigila el río desde este mirador que se ha convertido en punto de encuentro de la Lisboa joven y alternativa. Por las tardes hay siempre alguien tocando la guitarra, vendedores de cervezas artesanales, y una mezcla de estudiantes erasmus, locales y viajeros que crea un ambiente difícil de encontrar en otro lugar." },
      { tipo: "parrafo", texto: "Las vistas al Tajo y al puente 25 de Abril son espectaculares, especialmente cuando el sol se pone y la estructura del puente se recorta contra el cielo rojizo. No es un mirador para buscar tranquilidad, sino para dejarse llevar por la energía de una ciudad que sabe celebrar la vida." },
      { tipo: "subtitulo", texto: "8. Mirador de São Pedro de Alcântara — Jardín con vistas al Castillo" },
      { tipo: "parrafo", texto: "En pleno Bairro Alto, este jardín en dos niveles ofrece una perspectiva privilegiada del Castillo y la colina de Alfama. El nivel superior tiene un mapa en azulejos que identifica cada edificio del horizonte, perfecto para orientarse los primeros días. El inferior es más tranquilo, con bancos a la sombra de árboles centenarios." },
      { tipo: "parrafo", texto: "Es el mirador ideal para combinar con una noche por el Bairro Alto: ve al atardecer, cena en alguna de las tascas cercanas, y luego explora los bares del barrio. La zona cobra vida a partir de las diez de la noche." },
      { tipo: "subtitulo", texto: "9. Terraza de LX Factory — Lisboa industrial y contemporánea" },
      { tipo: "parrafo", texto: "Este antiguo complejo industrial reconvertido en espacio creativo tiene varias terrazas con vistas privilegiadas al Puente 25 de Abril. La más conocida es la del restaurante Rio Maravilha, donde puedes comer o tomar algo mientras los coches cruzan el puente a la altura de tus ojos." },
      { tipo: "parrafo", texto: "LX Factory merece una visita en sí mismo: tiendas de diseño, librerías, galerías, street art... Combinar la exploración del mercado con un brunch con vistas es uno de los mejores planes de domingo en Lisboa." },
      { tipo: "subtitulo", texto: "10. Teleférico del Parque das Nações — La Lisboa del siglo XXI" },
      { tipo: "parrafo", texto: "El barrio que acogió la Expo 98 ofrece una Lisboa completamente diferente: arquitectura contemporánea, paseo marítimo ordenado, el Oceanário... El teleférico recorre el frente fluvial ofreciendo vistas aéreas del Tajo y la torre Vasco da Gama." },
      { tipo: "parrafo", texto: "Es el mirador perfecto si buscas algo distinto al Lisboa clásico de tejados rojos y tranvías. La zona tiene también buenos restaurantes junto al agua y es ideal para pasear en bicicleta." },
      { tipo: "subtitulo", texto: "Planifica tu ruta de miradores" },
      { tipo: "parrafo", texto: "Intentar ver todos estos miradores en un día es una receta para acabar agotado y con las piernas doloridas. Mi consejo es elegir tres o cuatro que encajen con tu ruta del día y dejar los demás para otras jornadas. En nuestros itinerarios incluimos rutas optimizadas que conectan miradores cercanos sin subidas innecesarias, con horarios específicos para cada uno según la luz y la afluencia." }
    ]
  },
  "donde-comer-barato-lisboa": {
    titulo: "Dónde comer barato en Lisboa sin renunciar al sabor",
    descripcion: "Tascas de barrio, mercados escondidos y rincones donde los lisboetas almuerzan a diario. Platos caseros por menos de lo que cuesta un café en la Baixa.",
    imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200",
    categoria: "Gastronomía",
    fecha: "18 Dic 2024",
    minutos: 14,
    contenido: [
      { tipo: "parrafo", texto: "Recuerdo la primera vez que pagué dieciocho euros por un bacalhau à brás mediocre en una terraza de Rossio. El plato era pequeño, el aceite sabía a recalentado, y al terminar me quedé con hambre y con la sensación de haber sido estafado. Esa misma noche, un compañero de trabajo me llevó a una tasca en Mouraria donde cenamos el mismo plato —pero hecho con cariño, abundante, con patatas crujientes y perejil fresco— por ocho euros con vino incluido." },
      { tipo: "parrafo", texto: "Desde entonces me propuse mapear cada rincón donde los lisboetas comen de verdad. No los restaurantes que salen en las guías ni los locales con menús traducidos a cinco idiomas, sino las tascas de barrio donde el dueño conoce a cada cliente por su nombre, los mercados donde las señoras compran el pescado del día, y los quioscos donde un bocadillo de cerdo cuesta lo mismo que hace veinte años." },
      { tipo: "subtitulo", texto: "La regla de oro: aléjate del circuito habitual" },
      { tipo: "parrafo", texto: "Lisboa tiene una geografía gastronómica muy marcada. Las calles peatonales de la Baixa, los alrededores del Rossio y la subida al Castillo concentran restaurantes diseñados para un público que pasará por allí una sola vez en su vida. No necesitan fidelizar clientes porque cada día llegan miles de nuevos visitantes. El resultado son precios inflados y calidad dudosa." },
      { tipo: "parrafo", texto: "La buena noticia es que basta caminar diez minutos en cualquier dirección para encontrar otro mundo. En Mouraria, Graça, Arroios o Intendente la realidad es completamente diferente: menús del día por siete u ocho euros, porciones generosas, y cocina que sabe a casa de abuela portuguesa." },
      { tipo: "subtitulo", texto: "Tascas con alma: cocina casera por menos de diez euros" },
      { tipo: "parrafo", texto: "Las tascas son el equivalente portugués a los bares de menú españoles: locales pequeños, sin pretensiones, donde la comida cambia cada día según lo que haya fresco en el mercado. El ambiente suele ser ruidoso, las mesas están pegadas unas a otras, y el vino de la casa viene en jarras de barro. Todo eso forma parte del encanto." },
      { tipo: "parrafo", texto: "En Ti Natália, escondida en una callejuela de Mouraria, Dona Natália lleva cuarenta años cocinando los mismos platos que aprendió de su madre. El menú del día —sopa, plato principal, postre y café— cuesta nueve euros. Cada día prepara algo diferente: lunes carne de cerdo à alentejana, martes arroz de pato, miércoles bacalhau con natas... Los vecinos del barrio saben qué día les toca su plato favorito." },
      { tipo: "parrafo", texto: "Taberna da Rua das Flores, en el Chiado pero fuera del circuito más transitado, tiene un concepto diferente: petiscos (tapas portuguesas) para compartir. Aquí pides varios platos pequeños y los vas picoteando entre conversación y vino. Pimientos de Padrón, croquetas de alheira, quesos de Serra da Estrela, conservas de sardinas... Puedes cenar muy bien por doce o trece euros." },
      { tipo: "tip", texto: "En cualquier tasca, pregunta por el 'prato do dia' (plato del día). Siempre es la opción más fresca y económica, porque aprovechan lo que compraron esa mañana en el mercado." },
      { tipo: "subtitulo", texto: "Mercados: donde comen los que saben" },
      { tipo: "parrafo", texto: "El Mercado da Ribeira tiene dos caras completamente diferentes. La que conoce todo el mundo es el Time Out Market: puestos de chefs reconocidos, colas interminables, precios de restaurante con formato de comida rápida. Funciona bien si quieres probar cocina de autor sin reserva, pero no es precisamente barato." },
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
      { tipo: "tip", texto: "Un truco para indecisos: reserva las primeras noches en Baixa para orientarte, y las últimas en un barrio con más personalidad. Así combinas comodidad inicial con inmersión final." }
    ]
  },
  "evitar-turistadas-lisboa": {
    titulo: "Guía práctica para esquivar las trampas turísticas de Lisboa",
    descripcion: "Después de observar miles de errores ajenos, he compilado los tropiezos más comunes y cómo sortearlos para vivir la Lisboa real.",
    imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
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
      { tipo: "parrafo", texto: "La clave está en planificar rutas que conecten miradores cercanos aprovechando la gravedad: empieza arriba, ve bajando, y deja los que están en otras colinas para otro día. El Mirador da Senhora do Monte, Graça, Portas do Sol y Santa Luzia pueden encadenarse en un paseo descendente que te deposita en Alfama sin subidas innecesarias." },
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
  "tarjeta-lisboa-card-vale-pena": {
    titulo: "Lisboa Card: Vale la pena en 2024?",
    descripcion: "Analizamos precios y calculamos si realmente ahorras dinero.",
    imagen: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1200",
    categoria: "Consejos",
    fecha: "12 Dic 2024",
    minutos: 7,
    contenido: [
      { tipo: "parrafo", texto: "La Lisboa Card promete transporte ilimitado y entradas gratis a museos y monumentos. Pero vale la pena? He hecho los calculos para que no tengas que hacerlos tu." },
      { tipo: "subtitulo", texto: "Que incluye la Lisboa Card?" },
      { tipo: "lista", items: [
        "Transporte publico ilimitado (metro, bus, tranvia, elevadores)",
        "Tren a Sintra y Cascais",
        "Entrada gratis a 30+ museos y monumentos",
        "Descuentos en otras atracciones"
      ]},
      { tipo: "subtitulo", texto: "Precios 2024" },
      { tipo: "lista", items: [
        "24 horas: 27 EUR",
        "48 horas: 44 EUR",
        "72 horas: 54 EUR"
      ]},
      { tipo: "subtitulo", texto: "Cuando SI vale la pena" },
      { tipo: "parrafo", texto: "La Lisboa Card es rentable si vas a visitar varios museos pagos. Ejemplo para 48 horas:" },
      { tipo: "lista", items: [
        "Torre de Belem: 10 EUR",
        "Monasterio Jeronimos: 10 EUR",
        "Museo de los Azulejos: 5 EUR",
        "Tren a Sintra: 4.60 EUR",
        "Transporte 2 dias: ~8 EUR",
        "TOTAL: 37.60 EUR vs 44 EUR de la tarjeta"
      ]},
      { tipo: "parrafo", texto: "En este caso NO ahorras, pero si le sumas Palacio de Ajuda (5 EUR) o MAAT (9 EUR), ya si." },
      { tipo: "subtitulo", texto: "Cuando NO vale la pena" },
      { tipo: "lista", items: [
        "Si prefieres pasear y ver la ciudad desde fuera",
        "Si solo vas a ver 1-2 monumentos",
        "Si ya tienes descuento de estudiante o senior",
        "Si vas a pasar tiempo en Sintra (entradas NO incluidas)"
      ]},
      { tipo: "tip", texto: "Las entradas de Sintra (Pena, Regaleira) NO estan incluidas en la Lisboa Card. Solo el tren." },
      { tipo: "subtitulo", texto: "Mi recomendacion" },
      { tipo: "parrafo", texto: "Para la mayoria de turistas, la Lisboa Card de 48 o 72 horas vale la pena solo si te gustan los museos. Si prefieres callejear, comer bien, y ver miradores (gratis), no la necesitas." },
      { tipo: "parrafo", texto: "Lo que si recomiendo: compra una tarjeta Viva Viagem (0.50 EUR) y cargala con viajes o pase diario. Mucho mas flexible." }
    ]
  },
  "barrios-lisboa-donde-alojarse": {
    titulo: "Barrios de Lisboa: Donde alojarse",
    descripcion: "Baixa, Alfama, Bairro Alto, Belem... Pros y contras de cada zona.",
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    categoria: "Alojamiento",
    fecha: "10 Dic 2024",
    minutos: 10,
    contenido: [
      { tipo: "parrafo", texto: "Elegir barrio en Lisboa es importante. La ciudad tiene colinas empinadas, asi que quedarte en el sitio equivocado puede significar subir cuestas todo el dia. Aqui mi guia honesta de cada zona." },
      { tipo: "subtitulo", texto: "Baixa-Chiado: El centro de todo" },
      { tipo: "parrafo", texto: "La zona mas plana y centrica. Calles peatonales, tiendas, y conexiones de metro. Perfecto si es tu primera vez o tienes movilidad reducida." },
      { tipo: "lista", items: [
        "Pros: Plano, centrico, bien conectado, muchos restaurantes",
        "Contras: Turistico, ruidoso de noche, menos autentico",
        "Precio medio: 80-150 EUR/noche",
        "Para quien: Primera visita, familias, viajes cortos"
      ]},
      { tipo: "subtitulo", texto: "Alfama: El barrio con encanto" },
      { tipo: "parrafo", texto: "El barrio mas antiguo y fotografiado. Callejuelas estrechas, fado en los bares, ropa tendida en las ventanas. Es precioso pero tiene muchas cuestas." },
      { tipo: "lista", items: [
        "Pros: Autentico, romantico, vistas increibles, fado",
        "Contras: Cuestas brutales, ruido del tranvia 28, dificil con maletas",
        "Precio medio: 70-130 EUR/noche",
        "Para quien: Parejas, fotografos, segunda visita"
      ]},
      { tipo: "subtitulo", texto: "Bairro Alto: Vida nocturna" },
      { tipo: "parrafo", texto: "El barrio de los bares y la fiesta. De dia es tranquilo y residencial, de noche se llena de gente. Buena ubicacion entre Chiado y el rio." },
      { tipo: "lista", items: [
        "Pros: Vida nocturna, ambiente joven, centrico",
        "Contras: Muy ruidoso jueves-sabado, cuestas",
        "Precio medio: 60-120 EUR/noche",
        "Para quien: Jovenes, fiesteros, viajes con amigos"
      ]},
      { tipo: "subtitulo", texto: "Principe Real: El barrio trendy" },
      { tipo: "parrafo", texto: "El barrio mas hipster de Lisboa. Tiendas de diseno, brunch, jardin bonito. Mas residencial y tranquilo que el centro." },
      { tipo: "lista", items: [
        "Pros: Trendy, tranquilo, buen brunch, jardin",
        "Contras: Alejado de algunos monumentos, caro",
        "Precio medio: 100-180 EUR/noche",
        "Para quien: Hipsters, parejas, estancias largas"
      ]},
      { tipo: "subtitulo", texto: "Belem: Monumentos y rio" },
      { tipo: "parrafo", texto: "Donde estan la Torre de Belem y los Jeronimos. Zona mas abierta, junto al rio, menos ambiente nocturno pero muy bonito de dia." },
      { tipo: "lista", items: [
        "Pros: Tranquilo, monumentos cerca, paseo maritimo",
        "Contras: Alejado del centro (20 min en tranvia), poco ambiente noche",
        "Precio medio: 70-140 EUR/noche",
        "Para quien: Familias, amantes de la historia"
      ]},
      { tipo: "subtitulo", texto: "Mi recomendacion" },
      { tipo: "parrafo", texto: "Primera vez en Lisboa: Baixa-Chiado. Es centrico, plano, y tienes todo cerca. Puedes explorar los otros barrios a pie." },
      { tipo: "parrafo", texto: "Segunda vez o mas dias: Alfama o Principe Real. Ya conoces la ciudad y puedes disfrutar barrios con mas personalidad." }
    ]
  },
  "pasteles-de-belem": {
    titulo: "Pastéis de Belém: historia, secretos y la forma correcta de comerlos",
    descripcion: "La receta que llevan custodiando desde 1837, por qué no es lo mismo que un pastel de nata cualquiera, y cómo evitar la cola sin renunciar a la experiencia.",
    imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    categoria: "Gastronomía",
    fecha: "28 Nov 2024",
    minutos: 11,
    contenido: [
      { tipo: "parrafo", texto: "Hay una imagen que se repite cada mañana frente al número 84-92 de la Rua de Belém: decenas de personas formando una cola que serpentea por la acera, consultando relojes, estirando cuellos para calcular cuánto falta. Desde 1837, la Fábrica dos Pastéis de Belém lleva provocando esta escena con un producto aparentemente simple: un hojaldre crujiente relleno de crema de huevo." },
      { tipo: "parrafo", texto: "Pero llamarlo 'simple' sería injusto. La receta original, creada por los monjes del Monasterio de los Jerónimos antes de la extinción de las órdenes religiosas, permanece guardada bajo siete llaves. Solo tres personas en el mundo conocen la fórmula completa, y nunca viajan juntas por si ocurriera una desgracia. El secreto lleva casi dos siglos transmitiéndose de maestro a aprendiz, y la empresa defiende que jamás ha sido replicado con exactitud." },
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
      { tipo: "subtitulo", texto: "Invierno (diciembre-febrero)" },
      { tipo: "parrafo", texto: "Precios bajos y ciudad tranquila. Ideal para gastronomía y museos." },
      { tipo: "tip", texto: "Si buscas equilibrio total, mayo y septiembre son los mejores meses." }
    ]
  },
  "transporte-publico-lisboa": {
    titulo: "Cómo moverse por Lisboa: guía completa del transporte público",
    descripcion: "Metro, tranvías, elevadores y tarjetas explicados sin complicaciones. Todo lo que necesitas para moverte como un lisboeta desde el primer día.",
    imagen: "/images/tranvia-28.jpg",
    categoria: "Transporte",
    fecha: "22 Nov 2024",
    minutos: 15,
    contenido: [
      { tipo: "parrafo", texto: "La primera vez que intenté usar el transporte público en Lisboa, me quedé parado frente a una máquina de billetes del metro sin entender qué botón pulsar. Había opciones para tarjetas que no sabía qué eran, precios diferentes según zonas que no conocía, y una cola de gente impaciente detrás de mí. Terminé pagando de más y subiendo al tren equivocado." },
      { tipo: "parrafo", texto: "Lisboa tiene un sistema de transporte que funciona bien, pero tiene sus particularidades. No es tan intuitivo como el de Londres o París, y hay trampas que pueden hacerte gastar dinero innecesariamente. Esta guía condensa años de errores propios y ajenos para que tú no tengas que cometerlos." },
      { tipo: "subtitulo", texto: "La tarjeta Viva Viagem: tu llave maestra" },
      { tipo: "parrafo", texto: "Olvídate de comprar billetes individuales cada vez. La tarjeta Viva Viagem es la forma inteligente de moverse por Lisboa. Es una tarjeta recargable que funciona en metro, autobuses, tranvías y elevadores. La compras una vez (cuesta medio euro) y la recargas según necesites." },
      { tipo: "parrafo", texto: "Hay dos formas de cargarla: con viajes individuales o con un pase diario. Si vas a hacer más de cuatro trayectos en un día, el pase diario de 6,40 euros sale más rentable. Si solo te mueves un par de veces, los viajes simples a 1,50 euros cada uno son la opción." },
      { tipo: "parrafo", texto: "La tarjeta tiene validez de un año desde la última recarga, así que si vuelves a Lisboa dentro de ese tiempo, puedes seguir usándola. Es recargable en cualquier estación de metro o en las máquinas de las paradas de tranvía principales." },
      { tipo: "tip", texto: "Compra la tarjeta el primer día y cárgala con un pase diario. Te ahorrará tiempo y dinero, y no tendrás que pensar en billetes durante el resto del día." },
      { tipo: "subtitulo", texto: "El metro: rápido, limpio y confiable" },
      { tipo: "parrafo", texto: "El metro de Lisboa es relativamente nuevo —la primera línea se inauguró en 1959, pero la expansión real llegó en los noventa— y eso se nota en la limpieza y modernidad de las estaciones. Tiene cuatro líneas identificadas por colores: Azul, Amarilla, Verde y Roja. La red no es tan extensa como la de otras capitales europeas, pero conecta eficientemente los barrios principales." },
      { tipo: "parrafo", texto: "Las estaciones más útiles para turistas son Rossio (centro histórico), Cais do Sodré (trenes a Cascais y ferries), Baixa-Chiado (zona comercial), y Marquês de Pombal (norte de la ciudad). La frecuencia es excelente en hora punta —cada tres o seis minutos— y se reduce a diez o quince minutos en horarios valle." },
      { tipo: "parrafo", texto: "El metro funciona desde las 6:30 de la mañana hasta la 1:00 de la madrugada (hasta las 1:00 también los domingos). Los viernes y sábados hay servicio nocturno extendido hasta las 2:00. Es la mejor opción para distancias largas o cuando necesitas llegar rápido a algún lugar." },
      { tipo: "subtitulo", texto: "Tranvías: el encanto lento de Lisboa" },
      { tipo: "parrafo", texto: "Los tranvías amarillos son el símbolo más reconocible de Lisboa, pero no todos sirven para lo mismo. El tranvía 28 es el más famoso porque serpentea por Alfama y Graça ofreciendo vistas espectaculares, pero es también el más lento, el más lleno de turistas, y el más propenso a carteristas." },
      { tipo: "parrafo", texto: "Si quieres vivir la experiencia del 28 sin sufrir, hay trucos. Sube antes de las ocho de la mañana o después de las siete de la tarde, cuando los grupos organizados ya se han marchado. O mejor aún, usa el tranvía 12, que hace un recorrido similar pero sin el aura turística. Los lisboetas lo usan para moverse de verdad, no para hacer fotos." },
      { tipo: "parrafo", texto: "Los tranvías 15 y 25 son más prácticos para desplazamientos reales. El 15 conecta Belém con Cais do Sodré y Martim Moniz, siguiendo la línea del río. El 25 va de Prazeres a Praça da Figueira, atravesando barrios residenciales que el metro no alcanza." },
      { tipo: "parrafo", texto: "El precio es de 3 euros si pagas en efectivo al conductor, o 1,50 euros si usas la tarjeta Viva Viagem. La diferencia es significativa si haces varios trayectos, así que siempre usa la tarjeta." },
      { tipo: "tip", texto: "Si el 28 tiene cola interminable, camina dos paradas más arriba y súbete allí. La mayoría de la gente espera en las terminales, pero los tranvías pasan por paradas intermedias medio vacíos." },
      { tipo: "subtitulo", texto: "Elevadores: salvavidas para las colinas" },
      { tipo: "parrafo", texto: "Lisboa tiene siete colinas, y subirlas a pie puede ser agotador, especialmente en verano. Los elevadores —funiculares que suben por las pendientes más pronunciadas— son la solución elegante. Hay tres principales además del Elevador de Santa Justa." },
      { tipo: "parrafo", texto: "El Elevador da Glória conecta Restauradores con el Bairro Alto salvando una cuesta brutal. Cuesta 3,80 euros (o 1,50 con tarjeta) y funciona desde las 7:00 hasta la medianoche. El Elevador da Bica hace lo mismo desde Cais do Sodré, y el Elevador do Lavra sube desde Largo da Anunciada hasta Campo Santana." },
      { tipo: "parrafo", texto: "El Elevador de Santa Justa es diferente: es un ascensor vertical neogótico que conecta la Baixa con el Chiado. La entrada cuesta 5 euros, pero puedes acceder gratis a la pasarela superior subiendo por las escaleras de las ruinas del Convento do Carmo." },
      { tipo: "subtitulo", texto: "Autobuses: para llegar donde el metro no alcanza" },
      { tipo: "parrafo", texto: "La red de autobuses de Lisboa es extensa y conecta barrios que el metro no alcanza. Son especialmente útiles para llegar a Graça, Estrela, Campo de Ourique o zonas residenciales del norte. La aplicación Carris muestra rutas y horarios en tiempo real, y es imprescindible si planeas usar autobuses con frecuencia." },
      { tipo: "parrafo", texto: "El precio es de 2 euros en efectivo o 1,50 euros con tarjeta. Algunas líneas coinciden con números de tranvías (como el 28), lo que puede generar confusión, pero el contexto —si es un autobús o un tranvía— es evidente al verlo." },
      { tipo: "subtitulo", texto: "Uber y Bolt: cuando el transporte público no basta" },
      { tipo: "parrafo", texto: "Las aplicaciones de transporte privado funcionan excelentemente en Lisboa y son notablemente más baratas que en otras capitales europeas. Un trayecto corto dentro del centro cuesta entre 3 y 6 euros, y la disponibilidad es alta incluso en horas punta." },
      { tipo: "parrafo", texto: "Para llegar desde el aeropuerto, Uber o Bolt cuestan alrededor de 15 euros, significativamente más barato que un taxi oficial (que puede superar los 25 euros) y más cómodo que el autobús Aerobus (4 euros pero con paradas y tiempo de viaje más largo)." },
      { tipo: "tip", texto: "Si llegas tarde por la noche o con maletas pesadas, el Uber desde el aeropuerto vale cada euro. El transporte público funciona, pero después de un vuelo largo la comodidad se agradece." },
      { tipo: "subtitulo", texto: "Errores comunes que puedes evitar" },
      { tipo: "parrafo", texto: "El error más frecuente es comprar billetes individuales cada vez en lugar de usar la tarjeta. Pagas el doble sin necesidad. Otro error es intentar usar el tranvía 28 como medio de transporte real: es un paseo turístico, no un vehículo eficiente. Y finalmente, muchos visitantes no saben que pueden acceder gratis a la terraza del Elevador de Santa Justa subiendo por las escaleras del Carmo." },
      { tipo: "parrafo", texto: "Mi recomendación final: el primer día, compra la tarjeta Viva Viagem y cárgala con un pase diario. Explora la ciudad sin preocuparte por billetes. A partir del segundo día, evalúa si necesitas otro pase o si con viajes individuales te basta." }
    ]
  },
  "restaurantes-romanticos-lisboa": {
    titulo: "Los restaurantes más románticos de Lisboa para una noche inolvidable",
    descripcion: "Terrazas con vistas al río, cenas íntimas con fado, y rincones donde el ambiente y la comida crean momentos perfectos para parejas.",
    imagen: "/images/joel-filipe-FrSDv3rVG-E-unsplash.jpg",
    categoria: "Gastronomía",
    fecha: "20 Nov 2024",
    minutos: 16,
    contenido: [
      { tipo: "parrafo", texto: "Hay restaurantes que se venden como románticos porque tienen velas en las mesas y música suave de fondo. Y luego están los lugares donde la magia ocurre sin necesidad de marketing: terrazas que se asoman al Tajo cuando el sol se pone, salones centenarios donde el fado nació, rincones escondidos donde la comida y el ambiente se combinan para crear momentos que se quedan grabados." },
      { tipo: "parrafo", texto: "He celebrado cumpleaños, aniversarios y propuestas en restaurantes de Lisboa, y he aprendido que el romanticismo no se compra con precio alto ni con estrellas Michelin. Se encuentra en la combinación de detalles: una vista que quita el aliento, un servicio que se desvanece cuando no se le necesita, una comida que habla de la tierra y el mar, y un ambiente que invita a quedarse horas conversando." },
      { tipo: "subtitulo", texto: "1. Chapitô à Mesa — La terraza con las mejores vistas" },
      { tipo: "parrafo", texto: "Este restaurante ocupa un antiguo convento reconvertido en escuela de circo, y la terraza tiene vistas que quitan el aliento: el Castelo de São Jorge a un lado, el Tajo al otro, y toda Lisboa desplegándose a tus pies. El ambiente es bohemio —hay estudiantes de circo practicando en los patios interiores— y la comida es creativa sin ser pretenciosa." },
      { tipo: "parrafo", texto: "La hora mágica es el atardecer. Reserva mesa en la terraza con al menos una semana de antelación, especialmente en verano. Cuando el sol se pone y la ciudad se ilumina, el momento se vuelve cinematográfico. El precio es razonable para lo que ofrecen: entre 30 y 50 euros por persona con vino." },
      { tipo: "tip", texto: "Si no consigues reserva en la terraza, el salón interior también tiene encanto, pero las vistas son la razón de venir aquí." },
      { tipo: "subtitulo", texto: "2. Ponto Final — Lisboa desde el otro lado del río" },
      { tipo: "parrafo", texto: "Cruzar el Tajo en ferry desde Cais do Sodré hasta Cacilhas es una experiencia en sí misma. Diez minutos navegando con Lisboa como telón de fondo, y al llegar, un restaurante de pescado fresco con terraza directamente sobre el agua. Ponto Final no es sofisticado —mesas de plástico, ambiente de tasca de barrio— pero tiene algo que los restaurantes del centro no pueden ofrecer: la vista completa de Lisboa desde fuera." },
      { tipo: "parrafo", texto: "Pide pescado a la parrilla —sardinas, dorada, lubina— acompañado de patatas y ensalada. El precio es justo (20-30 euros por persona) y la calidad es excelente porque el pescado llega directamente de los barcos que atracan a pocos metros. El ferry cuesta 2 euros ida y vuelta, y el trayecto es parte del encanto." },
      { tipo: "tip", texto: "Ve al atardecer para ver Lisboa iluminándose mientras cenas. El ferry funciona hasta medianoche, así que no hay prisa para volver." },
      { tipo: "subtitulo", texto: "3. Taberna da Rua das Flores — Intimidad en cuatro mesas" },
      { tipo: "parrafo", texto: "Este lugar es especial porque solo tiene cuatro mesas. Literalmente. Las reservas se hacen con semanas de antelación, y cuando consigues una, tienes garantizada una experiencia íntima que pocos restaurantes pueden ofrecer. El ambiente es de tasca tradicional portuguesa: paredes de azulejos, vino servido en jarras, y comida que sabe a receta de abuela." },
      { tipo: "parrafo", texto: "El menú cambia según lo que haya fresco en el mercado, y el dueño te explica cada plato con pasión. No es el lugar más barato (25-35 euros por persona), pero la combinación de calidad, ambiente y exclusividad lo convierte en una de mis recomendaciones más especiales." },
      { tipo: "subtitulo", texto: "4. Solar dos Presuntos — Elegancia sin pretensiones" },
      { tipo: "parrafo", texto: "En Príncipe Real, este restaurante lleva décadas sirviendo comida portuguesa refinada en un ambiente que equilibra elegancia con calidez. Los salones tienen techos altos, mesas bien espaciadas, y un servicio atento que sabe cuándo aparecer y cuándo desaparecer." },
      { tipo: "parrafo", texto: "La especialidad es el bacalao —preparado de múltiples formas tradicionales— y los mariscos. El precio ronda los 40-60 euros por persona, y las reservas son necesarias, especialmente los fines de semana. Es el lugar perfecto si buscas una cena elegante sin el formalismo excesivo de los restaurantes con estrellas." },
      { tipo: "subtitulo", texto: "5. Belcanto — Alta cocina para ocasiones únicas" },
      { tipo: "parrafo", texto: "Si buscas la experiencia gastronómica definitiva en Lisboa, este restaurante de José Avillez con dos estrellas Michelin es la respuesta. El menú degustación de ocho platos es un viaje por la cocina portuguesa reinterpretada con técnicas contemporáneas. Cada plato es una obra de arte, y el servicio es impecable." },
      { tipo: "parrafo", texto: "El precio es alto (180-250 euros por persona), pero si tienes una ocasión especial que celebrar —aniversario importante, propuesta de matrimonio, logro profesional—, esta es una inversión en recuerdos que no olvidarás. Las reservas se hacen con meses de antelación, especialmente para mesas en el salón principal." },
      { tipo: "subtitulo", texto: "6. A Cevicheria — Romántico y moderno" },
      { tipo: "parrafo", texto: "Un pulpo gigante colgando del techo preside este restaurante que trajo el ceviche a Lisboa. El ambiente es moderno y relajado, con música que invita a quedarse conversando. No es romántico en el sentido tradicional —no hay velas ni música de piano—, pero hay algo en la combinación de comida creativa, ambiente acogedor y servicio amable que crea momentos especiales." },
      { tipo: "parrafo", texto: "El ceviche es la estrella, pero también tienen platos de marisco creativos y postres que merecen la pena. El precio ronda los 35-50 euros por persona, y aunque no requiere reserva con tanta antelación, conviene llamar unos días antes." },
      { tipo: "subtitulo", texto: "7. Tasca da Esquina — Tapas portuguesas con estilo" },
      { tipo: "parrafo", texto: "En Campo de Ourique, este restaurante de Vítor Sobral (hermano del chef del Belcanto) sirve comida portuguesa moderna en formato de tapas. El ambiente es íntimo —mesas pequeñas, iluminación cálida— y el servicio es excelente. Es perfecto para una cena donde quieres probar varios platos compartiendo." },
      { tipo: "parrafo", texto: "Pide varios platos pequeños: croquetas de alheira, pulpo a la brasa, quesos de Serra da Estrela... El precio ronda los 40-60 euros por persona dependiendo de cuánto pidas. Las reservas son recomendadas, especialmente los fines de semana." },
      { tipo: "subtitulo", texto: "8. Restaurante Eleven — Vistas al parque" },
      { tipo: "parrafo", texto: "Con vistas al Parque Eduardo VII y a la ciudad desde las alturas, este restaurante ofrece alta cocina portuguesa en un ambiente elegante pero relajado. Las mesas junto a las ventanas son las más codiciadas, así que menciona que quieres una cuando reserves." },
      { tipo: "parrafo", texto: "El precio ronda los 70-100 euros por persona, y aunque no tiene estrella Michelin, la calidad es excelente. Es perfecto para una ocasión especial donde quieres elegancia sin el precio y la formalidad de un restaurante con estrellas." },
      { tipo: "subtitulo", texto: "9. Cervejaria Ramiro — Para amantes del marisco" },
      { tipo: "parrafo", texto: "Este lugar no es romántico en el sentido clásico —es ruidoso, siempre lleno, y el ambiente es más de celebración que de intimidad—, pero si a tu pareja y a ti os gusta el marisco, aquí encontraréis el mejor de Lisboa. Gambas al ajillo, langosta, percebes, cangrejos... Todo fresco, todo excelente." },
      { tipo: "parrafo", texto: "El precio puede subir fácilmente a 50-80 euros por persona dependiendo de lo que pidas, pero la calidad justifica cada euro. Ve temprano (antes de las siete) o prepárate para esperar cola. Termina con un prego no pão —bocadillo de ternera— que es tradición aquí." },
      { tipo: "subtitulo", texto: "10. Café Luso — Fado y cena tradicional" },
      { tipo: "parrafo", texto: "Si quieres combinar cena con espectáculo de fado, este es uno de los locales más tradicionales. El ambiente es de taberna antigua —azulejos en las paredes, mesas de madera— y el fado se interpreta en directo todas las noches. La comida es decente (no es el punto fuerte, pero está bien), y el precio incluye cena y show (60-80 euros por persona)." },
      { tipo: "parrafo", texto: "No es el fado más auténtico de Lisboa —ese lo encuentras en tascas pequeñas—, pero es una experiencia completa y accesible si quieres vivir la tradición sin complicarte buscando locales más escondidos." },
      { tipo: "subtitulo", texto: "Consejos para una noche perfecta" },
      { tipo: "parrafo", texto: "Si planeas una propuesta de matrimonio, Chapitô à Mesa y Ponto Final tienen las mejores vistas y suelen estar abiertos a colaborar con planes especiales si avisas con tiempo. Para aniversarios, Taberna da Rua das Flores o Solar dos Presuntos ofrecen intimidad y elegancia. Y si buscas algo diferente, A Cevicheria o Tasca da Esquina combinan modernidad con buen ambiente." },
      { tipo: "tip", texto: "Reserva siempre con antelación, especialmente para fines de semana. Y si mencionas que es una ocasión especial al reservar, muchos restaurantes harán un pequeño detalle extra —postre de cortesía, mesa mejor ubicada, etc." }
    ]
  },
  "que-ver-cascais-desde-lisboa": {
    titulo: "Cascais: el pueblo costero perfecto para escapar de Lisboa",
    descripcion: "A solo 30 minutos en tren, Cascais combina playas doradas, palacios históricos y un paseo marítimo que invita a quedarse. Guía completa para un día perfecto.",
    imagen: "/images/paulo-evangelista-Ss3FBqiWwP4-unsplash.jpg",
    categoria: "Guías",
    fecha: "18 Nov 2024",
    minutos: 13,
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
    descripcion: "Arenas doradas, agua cristalina y acantilados dramáticos a menos de una hora. Desde Cascais hasta la Arrábida, todas las opciones para escapar del calor urbano.",
    imagen: "/images/yuliia-sereda-qRF4TQbiXfc-unsplash.jpg",
    categoria: "Guías",
    fecha: "15 Nov 2024",
    minutos: 12,
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
    descripcion: "El fado es el alma de Lisboa, pero no todo lo que se vende como fado lo es. Aprende a distinguir el auténtico del turístico y dónde encontrarlo.",
    imagen: "/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg",
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
    descripcion: "Cuánto cuesta realmente comer, dormir y moverse en Lisboa. Desglose detallado de precios reales en 2024 para que planifiques sin sorpresas.",
    imagen: "/images/veronika-jorjobert-mR_AxcbVivg-unsplash.jpg",
    categoria: "Planificación",
    fecha: "10 Nov 2024",
    minutos: 13,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa puede ser una de las capitales más baratas de Europa o una de las más caras, dependiendo completamente de cómo viajes. He visto a viajeros gastar 200 euros al día sin darse cuenta, y a otros vivir perfectamente con 30. La diferencia no está en la ciudad, sino en las decisiones que tomas." },
      { tipo: "parrafo", texto: "He hecho los cálculos reales basándome en precios actuales de 2024, y he creado tres escenarios de presupuesto que reflejan formas reales de viajar. Estos números no son estimaciones optimistas ni pesimistas, sino lo que realmente cuesta según tus elecciones." },
      { tipo: "subtitulo", texto: "Presupuesto bajo: 30-40 euros al día" },
      { tipo: "parrafo", texto: "Es perfectamente posible disfrutar Lisboa con un presupuesto ajustado. La clave está en priorizar: alojamiento básico pero limpio, comida en tascas de barrio en lugar de restaurantes turísticos, transporte público en vez de taxis, y actividades gratuitas que son muchas en esta ciudad." },
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
        "Torre de Belem: 10 EUR",
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
    descripcion: "Desde el Time Out Market hasta mercados de barrio escondidos. Comida fresca, artesanía local y la vida auténtica de Lisboa en cada rincón.",
    imagen: "/images/annie-spratt-epexF_Ltb7s-unsplash.jpg",
    categoria: "Guías",
    fecha: "8 Nov 2024",
    minutos: 11,
    contenido: [
      { tipo: "parrafo", texto: "Los mercados de Lisboa son el corazón palpitante de la ciudad. Aquí es donde los vecinos compran el pescado del día, donde los productores locales venden sus frutas y verduras, y donde encuentras esa vida auténtica que a veces se pierde entre los monumentos turísticos. He pasado horas en estos mercados, no solo comprando, sino observando cómo funciona la ciudad real." },
      { tipo: "parrafo", texto: "Esta guía te lleva desde el mercado más famoso hasta los rincones escondidos donde solo van los lisboetas. Cada uno tiene su personalidad, su horario, y su razón de ser." },
      { tipo: "subtitulo", texto: "1. Time Out Market (Mercado da Ribeira)" },
      { tipo: "parrafo", texto: "El mercado mas famoso y turistico de Lisboa. Food court moderno con los mejores chefs de la ciudad. Turistico pero con comida excelente. Llega temprano o espera cola." },
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
    descripcion: "El café en Portugal es un ritual. Desde el bica tradicional hasta cafeterías de especialidad. Dónde encontrar el mejor café y cómo pedirlo como un local.",
    imagen: "/images/jacek-urbanski-0sODcpe2RPo-unsplash.jpg",
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
    descripcion: "Dónde ver el mejor sunset de Lisboa. Horarios exactos, ubicaciones y secretos de local para disfrutar el momento mágico del día.",
    imagen: "/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg",
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
    imagen: "/images/claudio-luiz-castro-cFj656inKM0-unsplash.jpg",
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
    descripcion: "Actividades perfectas para pequeños exploradores, restaurantes kid-friendly, y consejos prácticos para que toda la familia disfrute Lisboa.",
    imagen: "/images/julia-solonina-ci19YINguoc-unsplash.jpg",
    categoria: "Consejos",
    fecha: "28 Oct 2024",
    minutos: 12,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa es sorprendentemente amigable para familias. Tiene actividades que encantan a los niños —tranvías que suben colinas como montañas rusas, acuarios gigantes, castillos con murallas que explorar—, y muchas de las mejores cosas que hacer son gratis o muy baratas. He visto familias disfrutar Lisboa tanto como parejas o grupos de amigos." },
      { tipo: "parrafo", texto: "Esta guía está pensada para ayudarte a planificar un viaje donde los niños se diviertan sin que los adultos tengan que renunciar a disfrutar la ciudad. Porque la mejor forma de viajar con niños es encontrar el equilibrio entre lo que les gusta a ellos y lo que te gusta a ti." },
      { tipo: "subtitulo", texto: "Actividades para ninos" },
      { tipo: "subtitulo", texto: "1. Oceanario de Lisboa" },
      { tipo: "parrafo", texto: "El mejor oceanario de Europa. Tanques gigantes, tiburones, rayas, peces exoticos. Los ninos quedan fascinados. Cuesta 22 EUR adultos, 15 EUR ninos." },
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
    titulo: "Las mejores excursiones desde Lisboa: escapadas de un día perfectas",
    descripcion: "Sintra, Óbidos, Nazaré y más. Cómo llegar, qué ver y cuánto tiempo necesitas para cada excursión desde la capital.",
    imagen: "/images/pelayo-arbues-YN9_NQBZcSc-unsplash.jpg",
    categoria: "Guías",
    fecha: "25 Oct 2024",
    minutos: 13,
    contenido: [
      { tipo: "parrafo", texto: "Una de las grandes ventajas de Lisboa es su ubicación estratégica. A menos de dos horas en transporte público encuentras palacios de cuento, pueblos medievales amurallados, playas paradisíacas y pueblos pesqueros donde el tiempo parece haberse detenido. He hecho estas excursiones docenas de veces, y cada una tiene su momento perfecto." },
      { tipo: "parrafo", texto: "Esta guía te ayuda a elegir qué excursión hacer según tus intereses y el tiempo que tengas, con información práctica sobre cómo llegar, qué ver, y cuánto tiempo dedicar a cada lugar." },
      { tipo: "subtitulo", texto: "1. Sintra (40 minutos)" },
      { tipo: "parrafo", texto: "La excursion obligatoria. Palacios de cuento, bosques magicos, vistas increibles. Tren desde Rossio, 2.30 EUR por trayecto. Necesitas un dia completo." },
      { tipo: "lista", items: [
        "Transporte: Tren desde Rossio (2.30 EUR)",
        "Duracion: 40 minutos",
        "Que ver: Palacio da Pena, Quinta da Regaleira, Castelo dos Mouros",
        "Precio entradas: 14-20 EUR por palacio"
      ]},
      { tipo: "subtitulo", texto: "2. Cascais (30 minutos)" },
      { tipo: "parrafo", texto: "Pueblo costero elegante. Playas, palacios, paseo maritimo. Tren desde Cais do Sodre, 2.30 EUR. Perfecto para medio dia o dia completo." },
      { tipo: "lista", items: [
        "Transporte: Tren desde Cais do Sodre (2.30 EUR)",
        "Duracion: 30-40 minutos",
        "Que ver: Centro historico, playas, Boca do Inferno",
        "Precio: Gratis (excepto museos)"
      ]},
      { tipo: "subtitulo", texto: "3. Obidos (1 hora)" },
      { tipo: "parrafo", texto: "Pueblo medieval amurallado. Callejuelas estrechas, castillo, chocolate. Autobus desde Sete Rios, 8 EUR. Medio dia es suficiente." },
      { tipo: "lista", items: [
        "Transporte: Autobus desde Sete Rios (8 EUR)",
        "Duracion: 1 hora",
        "Que ver: Murallas, castillo, callejuelas",
        "Precio: Gratis (subir murallas)"
      ]},
      { tipo: "subtitulo", texto: "4. Nazare (1.5 horas)" },
      { tipo: "parrafo", texto: "Pueblo pesquero famoso por las olas gigantes. Playas, pescado fresco, ambiente local. Autobus desde Sete Rios, 12 EUR. Dia completo." },
      { tipo: "lista", items: [
        "Transporte: Autobus desde Sete Rios (12 EUR)",
        "Duracion: 1.5 horas",
        "Que ver: Playas, pescado fresco, olas gigantes (invierno)",
        "Precio: Gratis"
      ]},
      { tipo: "subtitulo", texto: "5. Arrabida (1 hora)" },
      { tipo: "parrafo", texto: "Reserva natural con playas paradisiacas. Agua turquesa, arena blanca, naturaleza. Coche recomendado, aunque hay tours. Dia completo." },
      { tipo: "lista", items: [
        "Transporte: Coche o tour (50-70 EUR)",
        "Duracion: 1 hora",
        "Que ver: Playas, reserva natural, Setubal",
        "Precio: Gratis (parking puede tener costo)"
      ]},
      { tipo: "tip", texto: "Para Sintra, compra las entradas online con antelacion. En verano las colas son de 1-2 horas." },
      { tipo: "subtitulo", texto: "Combinaciones posibles" },
      { tipo: "parrafo", texto: "Puedes combinar algunas excursiones en un dia, pero no todas. Sintra y Cascais juntas es complicado. Obidos y Nazare se pueden combinar." }
    ]
  },
  "vida-nocturna-lisboa": {
    titulo: "Vida Nocturna en Lisboa: Guía Completa 2026",
    descripcion: "Bairro Alto, Cais do Sodré, Santos y LX Factory: las mejores zonas para salir de noche en Lisboa con recomendaciones de bares y clubes.",
    imagen: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1200",
    categoria: "Guías",
    fecha: "3 Feb 2026",
    minutos: 11,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa de noche es una ciudad completamente distinta. Las calles empinadas que durante el día transpiran historia y melancolía se transforman después de las diez en un escenario vibrante donde la música sale por las ventanas abiertas, los grupos se forman espontáneamente en las esquinas, y el olor a ginja —el licor de guinda típico— se mezcla con la brisa atlántica." },
      { tipo: "parrafo", texto: "Llevo años saliendo por Lisboa y puedo decirte que la clave para disfrutar la noche lisboeta no es encontrar el club más exclusivo ni el bar más instagrameable. La clave es entender el ritmo: aquí se cena a las nueve, se toma la primera copa a las once, se sale a las doce y se vuelve a casa cuando amanece. Si intentas salir a las ocho como en Madrid o Ciudad de México, te encontrarás con calles vacías y bares cerrados." },
      { tipo: "subtitulo", texto: "Bairro Alto — Donde todo empieza" },
      { tipo: "parrafo", texto: "El Bairro Alto es el corazón de la noche lisboeta desde hace décadas. Un laberinto de calles estrechas con más de cien bares concentrados en unas pocas manzanas. La dinámica es única: compras una cerveza o una copa en cualquier bar, sales a la calle con ella en la mano, y socializas entre la multitud que ocupa las callejuelas empedradas. No hay otro barrio en Europa con esta energía." },
      { tipo: "parrafo", texto: "Los jueves y viernes son los mejores días. Los sábados el barrio se llena demasiado y pierde parte de su encanto. Empieza por la Rua da Atalaia o la Rua do Norte, donde encontrarás desde tascas con fado en vivo hasta bares de cocktails con DJs pinchando música electrónica. La diversidad es parte del encanto: en la misma calle puedes encontrar un bar de rock, una cervecería artesanal y un club de música africana." },
      { tipo: "tip", texto: "No vayas al Bairro Alto antes de las 23:00 — estará vacío. El pico es entre la 1:00 y las 3:00. Lleva efectivo para los bares pequeños. Las cervezas cuestan entre 2-3€ en la mayoría de sitios." },
      { tipo: "subtitulo", texto: "Cais do Sodré — La zona que lo cambió todo" },
      { tipo: "parrafo", texto: "La famosa Rua Nova do Carvalho, conocida como 'Pink Street' por su suelo pintado de rosa, es probablemente la calle más fotografiada de la noche lisboeta. Hace quince años era una zona de marineros y prostitución; hoy es el epicentro de la escena nocturna moderna de Lisboa. Bares como Pensão Amor (en un antiguo burdel), Sol e Pesca (conservas y vino en un antiguo quiosco de pesca) y Music Box (uno de los mejores clubs de la ciudad) concentran lo mejor de la noche en apenas doscientos metros." },
      { tipo: "parrafo", texto: "La ventaja de Cais do Sodré frente al Bairro Alto es que aquí encuentras clubs con programación seria. Music Box trae artistas internacionales de electrónica, hip-hop y jazz. Tokyo es perfecto si te va la música alternativa y el indie. Y si prefieres algo más tranquilo, los bares a lo largo del río ofrecen terrazas con vistas al Tajo donde tomar un cocktail antes de la fiesta." },
      { tipo: "tip", texto: "Pink Street se llena rápido los fines de semana. Llega antes de las 23:30 si quieres sitio en los bares. Music Box cobra entrada (10-15€) cuando hay eventos especiales, pero entre semana suele ser gratis." },
      { tipo: "subtitulo", texto: "Santos y Alcântara — Para trasnochadores" },
      { tipo: "parrafo", texto: "Cuando el Bairro Alto cierra y Cais do Sodré empieza a vaciarse, la fiesta se mueve hacia Santos y Alcântara. Esta zona junto al río alberga los clubs más grandes y las fiestas que duran hasta el amanecer. Lux Frágil, propiedad parcial del actor John Malkovich, es el club más icónico de Lisboa: música de calidad, terraza sobre el río y un ambiente que mezcla artistas, estudiantes y noctámbulos de toda Europa." },
      { tipo: "parrafo", texto: "En LX Factory, el antiguo complejo industrial reconvertido, algunos bares y restaurantes abren hasta tarde los fines de semana. Rio Maravilha tiene una terraza espectacular para tomar algo mientras ves el Puente 25 de Abril iluminado. No es el sitio para bailar, pero sí para cenar tarde o tomar la última copa con vistas." },
      { tipo: "subtitulo", texto: "Ginjinhas — El ritual obligatorio" },
      { tipo: "parrafo", texto: "Ninguna noche en Lisboa está completa sin una ginjinha. Este licor de guinda servido en vasito de chocolate es una tradición lisboeta que debes probar al menos una vez. Los dos sitios clásicos son A Ginjinha (en Rossio, abierto desde 1840) y Ginjinha Sem Rival, justo enfrente. Un chupito cuesta 1.50€ y el ritual es simple: pides 'com elas' (con las guindas) o 'sem elas' (sin), te lo bebes de un trago, y sigues tu camino." },
      { tipo: "subtitulo", texto: "Consejos prácticos para salir de noche" },
      { tipo: "lista", items: [
        "Horarios: Los bares abren entre 21:00-22:00, los clubs no arrancan hasta la 1:00",
        "Transporte: El metro cierra a la 1:00. Después, usa Uber/Bolt (5-8€ al centro)",
        "Seguridad: Lisboa es muy segura de noche, pero cuida el móvil en zonas muy concurridas",
        "Dresscode: Casual en casi todos los sitios. Solo Lux Frágil pide vestir un poco mejor",
        "Precios: Cervezas 2-4€, cocktails 8-12€, entradas a clubs 0-15€"
      ]}
    ]
  },
  "lisboa-en-invierno": {
    titulo: "Lisboa en Invierno: Por Qué Es la Mejor Época",
    descripcion: "Menos turistas, precios más bajos, clima suave y luz perfecta para fotografía. Todo lo que ganas visitando Lisboa entre noviembre y marzo.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
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
    titulo: "15 Errores que Todo Turista Comete en Lisboa",
    descripcion: "Desde comer en Rossio hasta ignorar el tranvía 15: errores comunes que arruinan el viaje y cómo evitarlos con alternativas reales.",
    imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200",
    categoria: "Consejos",
    fecha: "28 Ene 2026",
    minutos: 13,
    contenido: [
      { tipo: "parrafo", texto: "Después de años viviendo en Lisboa y viendo a miles de visitantes cometer los mismos errores, he compilado esta lista con las meteduras de pata más comunes. No para juzgar a nadie —yo también las cometí todas cuando llegué— sino para que tú las evites y aproveches mejor cada minuto de tu viaje." },
      { tipo: "subtitulo", texto: "1. Comer en las terrazas de Rossio y Praça do Comércio" },
      { tipo: "parrafo", texto: "Es el error número uno y el más caro. Las terrazas de las plazas principales cobran el doble o el triple que un restaurante a cinco minutos caminando. Un bacalhau à brás que en Rossio cuesta 18€, en una tasca de Mouraria sale por 8-9€ y está mucho más bueno. La regla es simple: si el menú está en cinco idiomas y tiene fotos, huye." },
      { tipo: "subtitulo", texto: "2. No llevar calzado cómodo" },
      { tipo: "parrafo", texto: "Lisboa es la ciudad de las siete colinas, y esas colinas no son metafóricas. Vas a subir y bajar cuestas todo el día sobre calçada portuguesa, un empedrado precioso pero traicionero, especialmente cuando llueve. Chanclas, tacones y zapatillas con suela lisa son una receta para el desastre. Invierte en unas zapatillas cómodas con buena suela y tu espalda te lo agradecerá." },
      { tipo: "subtitulo", texto: "3. Hacer cola para el Tranvía 28 sin conocer las alternativas" },
      { tipo: "parrafo", texto: "El Tranvía 28 es icónico, sí. Pero entre las 10:00 y las 16:00, la cola puede ser de 45 minutos a una hora, el tranvía va tan lleno que ni te puedes mover, y los carteristas operan a sus anchas. El secreto: tómalo a primera hora (antes de las 9:00) o al final de la tarde (después de las 17:00), y siempre desde la parada inicial en Martim Moniz para asegurarte asiento. O mejor aún: el Tranvía 15E hacia Belém es igual de bonito, mucho más tranquilo y pasa cada 10 minutos." },
      { tipo: "subtitulo", texto: "4. No descargar mapas offline" },
      { tipo: "parrafo", texto: "El roaming en Europa funciona bien si vienes de la UE, pero si vienes de Latinoamérica o de fuera de Europa, los datos pueden costarte una fortuna. Descarga el mapa de Lisboa en Google Maps con WiFi del hotel antes de salir. Ocupa unos 100MB y tendrás GPS funcional todo el día sin gastar un byte de datos." },
      { tipo: "subtitulo", texto: "5. Ignorar los horarios reales" },
      { tipo: "parrafo", texto: "En Lisboa, muchos restaurantes cierran entre las 15:00 y las 19:00. Llegar a las 16:00 esperando comer es garantía de frustración. Las tiendas pequeñas cierran los domingos. Los museos cierran los lunes. Y la mayoría de monumentos dejan de vender entradas 30 minutos antes del cierre. Planifica con horarios reales, no con suposiciones." },
      { tipo: "subtitulo", texto: "6. Gastar en la Lisboa Card sin calcular" },
      { tipo: "parrafo", texto: "La Lisboa Card (24h: 27€, 48h: 44€, 72h: 54€) parece atractiva porque incluye transporte y entradas. Pero a menos que vayas a visitar tres o más monumentos de pago por día, no te sale rentable. Muchos de los mejores sitios de Lisboa son gratis: miradores, callejuelas de Alfama, playas, mercados. Haz números antes de comprar." },
      { tipo: "subtitulo", texto: "7. No probar la comida portuguesa de verdad" },
      { tipo: "parrafo", texto: "Muchos visitantes se quedan en las hamburguesas, la pizza y los brunch instagrameables. Error. La gastronomía portuguesa es espectacular: bacalhau à brás, arroz de marisco, caldo verde, bifana, francesinha (si vas a Oporto)... Entra en una tasca donde solo se oiga portugués, pide lo que pidan los locales, y descubrirás sabores que no olvidarás." },
      { tipo: "subtitulo", texto: "8. Subestimar las distancias" },
      { tipo: "parrafo", texto: "En el mapa, todo parece cerca. En la realidad, las cuestas multiplican el tiempo de caminata por dos. Lo que Google Maps marca como '10 minutos caminando' puede ser una subida brutal que te deja sin aliento. Planifica máximo tres o cuatro zonas por día, con descansos para café entre ellas." },
      { tipo: "subtitulo", texto: "9. No reservar restaurantes populares" },
      { tipo: "parrafo", texto: "Los restaurantes recomendados por locales se llenan rápido, especialmente viernes y sábados. Sitios como Cervejaria Ramiro, O Velho Eurico o Taberna da Rua das Flores necesitan reserva. TheFork tiene descuentos y reservas fáciles." },
      { tipo: "subtitulo", texto: "10. Olvidar el protector solar" },
      { tipo: "parrafo", texto: "Incluso en invierno, el sol de Lisboa pega fuerte. La latitud es similar a la de Túnez, no la de París. Si pasas todo el día en miradores y terrazas, acabarás quemado. Factor 30 mínimo, siempre." },
      { tipo: "subtitulo", texto: "11-15: Errores rápidos" },
      { tipo: "lista", items: [
        "11. No probar los pastéis de nata fuera de Belém — las mejores pastelerías están en barrios locales",
        "12. Comprar souvenirs en Rossio — precios inflados, ve a la Feira da Ladra o tiendas de artesanía en Alfama",
        "13. No llevar efectivo — muchos bares y tascas pequeñas solo aceptan efectivo",
        "14. Ignorar Graça y Mouraria — barrios auténticos que la mayoría de turistas se salta",
        "15. No aprender 'obrigado/obrigada' — los portugueses valoran mucho el esfuerzo de hablar su idioma"
      ]},
      { tipo: "tip", texto: "Imprime o guarda offline este artículo antes de viajar. Son errores fáciles de evitar si los tienes presentes, pero muy fáciles de cometer si no los conoces." }
    ]
  },
  "sintra-desde-lisboa": {
    titulo: "Sintra desde Lisboa: Guía Completa para un Día Perfecto",
    descripcion: "Cómo llegar, el orden ideal de visitas para evitar colas, entradas con descuento, restaurantes y trucos que los guías no cuentan.",
    imagen: "https://images.unsplash.com/photo-1497802176012-0ff3191ce56a?w=1200",
    categoria: "Guías",
    fecha: "22 Ene 2026",
    minutos: 14,
    contenido: [
      { tipo: "parrafo", texto: "Sintra es, sin exagerar, uno de los lugares más bonitos que he visto en mi vida. Palacios de cuento de hadas emergiendo entre bosques de niebla, jardines que parecen diseñados por elfos, y una atmósfera romántica que Lord Byron describió como 'el Edén glorioso'. Está a solo 40 minutos en tren de Lisboa, lo que la convierte en la excursión de un día más popular de Portugal." },
      { tipo: "parrafo", texto: "El problema es que esa popularidad tiene consecuencias: en verano, las colas para entrar al Palacio da Pena pueden ser de dos horas, los restaurantes del centro están llenos de turistas, y los precios son un 50% más altos que en Lisboa. He ido a Sintra más de treinta veces y he aprendido exactamente cómo evitar todo eso. Esta guía es el resultado de esos años de prueba y error." },
      { tipo: "subtitulo", texto: "Cómo llegar: Tren desde Rossio" },
      { tipo: "parrafo", texto: "El tren sale desde la estación de Rossio (en pleno centro de Lisboa) cada 20-30 minutos. El trayecto dura 40 minutos y cuesta 2.30€ por trayecto con la tarjeta Viva Viagem cargada con 'zapping' (prepago). Compra la tarjeta Viva Viagem en cualquier estación de metro (0.50€ + saldo que quieras cargar) y úsala tanto para el metro de Lisboa como para el tren a Sintra." },
      { tipo: "tip", texto: "Coge el primer tren (alrededor de las 6:30-7:00). Llegarás a Sintra antes de las 8:00, cuando los palacios abren y no hay nadie. A las 10:00 ya estarás visitando sin colas mientras los grupos organizados ni siquiera han salido de Lisboa." },
      { tipo: "subtitulo", texto: "El orden IDEAL de visitas (secreto local)" },
      { tipo: "parrafo", texto: "Este es el error que comete el 90% de los visitantes: van primero al Palacio da Pena porque es el más famoso. El resultado es que llegan cuando las colas ya son enormes. El orden correcto es exactamente el contrario:" },
      { tipo: "lista", items: [
        "1. Quinta da Regaleira (abre a las 9:30) — El pozo iniciático, los túneles, los jardines. Es el sitio que más impresiona y a primera hora está vacío",
        "2. Palacio da Pena (llegar sobre las 11:30) — Las colas de la mañana ya bajaron. La terraza tiene las mejores vistas de Sintra",
        "3. Castelo dos Mouros (si tienes tiempo) — Las murallas medievales con vistas panorámicas. Está en el camino entre Regaleira y Pena",
        "4. Centro de Sintra (para comer) — Baja al pueblo, come en una tasca y prueba las travesseiros (dulce típico de Sintra)"
      ]},
      { tipo: "subtitulo", texto: "Entradas y precios 2026" },
      { tipo: "parrafo", texto: "Las entradas son la parte más cara de Sintra. El Palacio da Pena cuesta 14€ (parque + palacio), la Quinta da Regaleira 10€, y el Castelo dos Mouros 8€. Si piensas visitar los tres, puedes comprar un pack combinado en la web de Parques de Sintra que te ahorra un 10-15%. IMPORTANTE: compra SIEMPRE online y con antelación. En verano, las entradas físicas en taquilla pueden agotarse." },
      { tipo: "subtitulo", texto: "Transporte dentro de Sintra" },
      { tipo: "parrafo", texto: "Desde la estación de tren hasta los palacios hay que subir una montaña. Tienes tres opciones: el bus 434 (circuito que conecta estación-centro-Pena-Mouros, 7€ ida y vuelta), tuk-tuk (15-20€ por trayecto, negociable), o caminar (30-45 minutos cuesta arriba, bonito pero agotador). Mi recomendación: sube en el bus 434 y baja caminando por los jardines, que son preciosos y es todo cuesta abajo." },
      { tipo: "subtitulo", texto: "Dónde comer en Sintra (sin trampas)" },
      { tipo: "parrafo", texto: "Evita los restaurantes del centro turístico alrededor del Palacio Nacional. Son caros y mediocres. En cambio, camina cinco minutos por cualquier calle lateral y encontrarás tascas donde los locales comen menú del día por 8-10€. Incrível es un favorito local con buena relación calidad-precio. Y para el dulce, las queijadas de Sintra y los travesseiros de Casa Piriquita son obligatorios." },
      { tipo: "tip", texto: "Si visitas Sintra en fin de semana entre junio y septiembre, prepárate para multitudes. El mejor momento es un martes o miércoles de octubre-noviembre: poca gente, buen tiempo, colores otoñales increíbles en los bosques." }
    ]
  }
};

const localImages: Record<string, string> = {
  'mejores-miradores-lisboa': '/images/alfama-panoramica.jpg',
  'donde-comer-barato-lisboa': '/images/eduardo-goody-0Iu7mKa1sPw-unsplash.jpg',
  'barrios-imprescindibles': '/images/tranvia-28.jpg',
  'evitar-turistadas-lisboa': '/images/hero-lisboa.jpg',
  'como-ir-sintra-desde-lisboa': '/images/pelayo-arbues-YN9_NQBZcSc-unsplash.jpg',
  'tarjeta-lisboa-card-vale-pena': '/images/tranvia-28.jpg',
  'barrios-lisboa-donde-alojarse': '/images/joel-filipe-FrSDv3rVG-E-unsplash.jpg',
  'pasteles-de-belem': '/images/IMG_1880.jpg',
  'mejor-epoca-visitar-lisboa': '/images/paulo-evangelista-Ss3FBqiWwP4-unsplash.jpg',
  'presupuesto-viajar-lisboa': '/images/veronika-jorjobert-mR_AxcbVivg-unsplash.jpg',
  'mejores-mercados-lisboa': '/images/annie-spratt-epexF_Ltb7s-unsplash.jpg',
  'donde-tomar-cafe-lisboa': '/images/jacek-urbanski-0sODcpe2RPo-unsplash.jpg',
  'miradores-atardecer-lisboa': '/images/julia-solonina-ci19YINguoc-unsplash.jpg',
  'que-comprar-lisboa-souvenirs': '/images/claudio-luiz-castro-cFj656inKM0-unsplash.jpg',
  'viajar-ninos-lisboa': '/images/ekaterina-boltaga-jqkGK3ofxi8-unsplash.jpg',
  'excursiones-desde-lisboa': '/images/pexels-daniel-1547736.jpg',
  'restaurantes-romanticos-lisboa': '/images/vino-celebracion.jpg',
  'donde-escuchar-fado-autentico': '/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg',
  'vida-nocturna-lisboa': '/images/hero-lisboa.jpg',
  'lisboa-en-invierno': '/images/julia-solonina-ci19YINguoc-unsplash.jpg',
  'errores-turistas-lisboa': '/images/tranvia-28.jpg',
  'sintra-desde-lisboa': '/images/pexels-daniel-1547736.jpg',
};

const SITE_URL = 'https://estabaenlisboa.com';
const AUTHOR_NAME = 'José Tabares';

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http')) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function getSeoTitle(title: string) {
  const hasLisboa = title.toLowerCase().includes('lisboa');
  const base = hasLisboa ? title : `${title} en Lisboa`;
  return `${base} 2026 | Guía local`;
}

function getSeoDescription(description: string) {
  return `${description} Consejos locales, horarios y recomendaciones reales para planificar tu viaje.`;
}

function resolveBlogImage(slug: string, image?: string) {
  const mapped = blogImageMap[slug];
  const candidate = mapped || image || blogFallbackImage;
  if (candidate.startsWith('http')) {
    return blogFallbackImage;
  }
  return candidate;
}

function buildFallbackArticle(slug: string): Article | null {
  const post = blogPosts.find((item) => item.id === slug);
  if (!post) return null;
  const tituloBase = post.titulo.replace(/\s+en Lisboa/i, '').trim();
  const categoria = post.categoria;
  const contexto = `En esta guía sobre ${tituloBase.toLowerCase()}, te comparto lo esencial con enfoque local, directo y sin rodeos.`;
  const listaClave = [
    'Qué merece la pena y qué puedes saltarte sin culpa.',
    'Horarios reales para evitar colas y multitudes.',
    'Costes aproximados para planificar sin sorpresas.',
    'Atajos de local para moverte mejor y ahorrar tiempo.',
    'Errores típicos que conviene evitar.',
  ];

  const categoryIntro: Record<string, string> = {
    Guías: 'La clave aquí es priorizar zonas con buen acceso y vistas sin duplicar cuestas ni tiempos.',
    Gastronomía: 'Lisboa se come por horarios. Si llegas a tiempo, comes mejor y por menos.',
    Consejos: 'La diferencia entre una visita normal y una buena es conocer los detalles pequeños.',
    Planificación: 'Un buen plan ahorra dinero y horas. Lo importante es ajustar expectativas y ritmo.',
    Transporte: 'Moverse bien en Lisboa es tener una tarjeta correcta y saber qué evitar.',
    Cultura: 'Para vivir la cultura local hay que respetar tiempos, silencios y códigos.',
  };

  const categoryMusts: Record<string, string[]> = {
    Guías: [
      'Zonas clave en un orden que evita subidas innecesarias.',
      'Paradas con mejores vistas y menos gente.',
      'Ventanas horarias recomendadas según luz y afluencia.',
      'Tiempo real entre puntos para no correr.',
      'Dónde hacer una pausa sin pagar de más.',
    ],
    Gastronomía: [
      'Tascas locales con menú del día a buen precio.',
      'Qué pedir para acertar sin gastar de más.',
      'Horarios ideales para evitar colas.',
      'Diferencias entre zonas turísticas y locales.',
      'Dónde tomar un café bueno y barato.',
    ],
    Consejos: [
      'Errores típicos que encarecen el viaje.',
      'Consejos prácticos para moverte rápido.',
      'Qué horarios evitar en zonas populares.',
      'Cosas que no necesitas comprar.',
      'Pequeños hábitos de local que ayudan.',
    ],
    Planificación: [
      'Presupuesto diario realista por estilo de viaje.',
      'Épocas del año con mejor clima-precio.',
      'Cómo distribuir los días por zonas.',
      'Tiempo real para cada actividad.',
      'Qué reservar con antelación.',
    ],
    Transporte: [
      'Qué tarjeta comprar y cómo recargarla.',
      'Tramos donde el metro es más útil.',
      'Tranvías que valen la pena y los que no.',
      'Cuándo usar Uber/Bolt sin gastar de más.',
      'Cómo llegar desde el aeropuerto al centro.',
    ],
    Cultura: [
      'Lugares auténticos con menos turistada.',
      'Horarios recomendados para buena experiencia.',
      'Cómo comportarse en espectáculos locales.',
      'Rincones culturales con entrada gratuita.',
      'Planes alternativos si hay colas.',
    ],
  };

  const categoryChecklist: Record<string, string[]> = {
    Guías: ['Calzado cómodo', 'Agua y snack ligero', 'Foto rápida y seguir ruta', 'Reserva si aplica'],
    Gastronomía: ['Llegar antes de las 14:00', 'Pedir plato del día', 'Evitar menús turísticos', 'Pagar con tarjeta o efectivo pequeño'],
    Consejos: ['Evitar horas punta', 'Plan de 2-3 zonas por día', 'Mapa offline listo', 'Tiempo de descanso'],
    Planificación: ['Fechas flexibles', 'Presupuesto diario', 'Plan A y plan B', 'Reservas clave'],
    Transporte: ['Tarjeta Viva Viagem', 'Horario del primer metro', 'Plan alterno si llueve', 'Apps útiles'],
    Cultura: ['Reservas si hay show', 'Llegar 10-15 min antes', 'Respeto al silencio', 'Alternativa cercana'],
  };

  const categoryTip: Record<string, string> = {
    Guías: 'Si quieres el detalle completo con mapas, horarios y paradas exactas, revisa nuestras guías actualizadas.',
    Gastronomía: 'Si algo parece muy turístico, camina 5 minutos y verás opciones mejores y más baratas.',
    Consejos: 'La ciudad se disfruta más temprano y tarde. Entre 13:00 y 16:00 suele estar más cargada.',
    Planificación: 'Con 2-4 días bien organizados ves lo esencial sin correr.',
    Transporte: 'El tranvía 28 es icónico, pero el 12 hace una ruta similar con menos cola.',
    Cultura: 'El fado auténtico se vive mejor en espacios pequeños, con ambiente silencioso.',
  };

  const slugDetails: Record<
    string,
    { intro?: string; musts?: string[]; itinerary?: string[]; localTips?: string[] }
  > = {
    'mejores-miradores-lisboa': {
      intro: 'Si buscas las mejores vistas sin perder tiempo, estos son los miradores que sí valen la pena.',
      musts: [
        'Senhora do Monte para vistas completas sin tanta gente.',
        'Santa Luzia por azulejos y postal clásica.',
        'Portas do Sol para una parada rápida con kioskito.',
        'Graça para ambiente local y sombra.',
        'Santa Catarina si quieres atardecer con buen ambiente.',
      ],
      itinerary: [
        'Mañana: Santa Luzia + Portas do Sol (15 min a pie).',
        'Mediodía: Graça y descanso.',
        'Tarde: Senhora do Monte.',
        'Atardecer: Santa Catarina o São Pedro de Alcântara.',
      ],
      localTips: [
        'Llega 30-40 minutos antes del atardecer.',
        'Evita sábados por la tarde en los miradores más turísticos.',
      ],
    },
    'donde-comer-barato-lisboa': {
      intro: 'Comer bien y barato en Lisboa es posible si evitas las zonas más turísticas.',
      musts: [
        'Tascas en Mouraria o Arroios con menú del día.',
        'Mercados locales con platos sencillos y frescos.',
        'Pastelerías de barrio para desayunos baratos.',
        'Cafés con “prato do dia” entre semana.',
        'Opciones para picar sin sentarte a cenar.',
      ],
      itinerary: [
        'Desayuno: pastelería local (bica + pastel).',
        'Comida: menú del día (12:30-14:30).',
        'Cena: tasca de barrio o petiscos.',
      ],
      localTips: [
        'Si el menú está en cinco idiomas, pasa de largo.',
        'En Lisboa se come temprano; después de las 15:00 hay menos opciones.',
      ],
    },
    'barrios-imprescindibles': {
      intro: 'Lisboa cambia por barrios. Estos son los que más sentido tienen para una primera visita.',
      musts: [
        'Baixa-Chiado para moverte fácil y ver lo básico.',
        'Alfama para callejuelas y fado.',
        'Bairro Alto para atardecer y vida nocturna.',
        'Belém para monumentos y paseo junto al río.',
        'Príncipe Real para cafés y ambiente local.',
      ],
      itinerary: [
        'Día 1: Baixa + Chiado + Alfama.',
        'Día 2: Belém + Príncipe Real + Bairro Alto.',
      ],
      localTips: [
        'Alojamiento: Baixa-Chiado si es tu primera vez.',
        'Alfama es precioso, pero tiene cuestas fuertes.',
      ],
    },
    'evitar-turistadas-lisboa': {
      intro: 'Lisboa se disfruta más cuando evitas las trampas de siempre.',
      musts: [
        'No comas en Rua Augusta.',
        'Evita el tranvía 28 a media tarde.',
        'No subas al castillo a las 12:00.',
        'No te quedes solo en Baixa.',
        'No pagues cenas “con fado” infladas.',
      ],
      itinerary: [
        'Mañanas: sitios populares.',
        'Mediodía: barrios locales.',
        'Tardes: miradores menos masificados.',
      ],
      localTips: [
        'Camina 5-10 minutos fuera de las calles principales.',
        'Si ves “menu turístico”, cambia de calle.',
      ],
    },
    'pasteles-de-belem': {
      intro: 'Pastéis de Belém tiene una receta propia. Vale la pena si eliges bien el horario.',
      musts: [
        'Ir antes de las 9:30 o a última hora.',
        'Probarlos calientes con canela.',
        'Evitar la cola principal si hay salón interior.',
      ],
      itinerary: [
        'Mañana: pastéis + paseo por Belém.',
        'Mediodía: Jerónimos o Torre de Belém.',
      ],
      localTips: [
        'La cola del salón suele ser más rápida.',
        'Pide para llevar y come en el paseo.',
      ],
    },
    'mejor-epoca-visitar-lisboa': {
      intro: 'Primavera y otoño son el equilibrio perfecto entre clima y precios.',
      musts: [
        'Mayo y septiembre para mejor clima.',
        'Junio-agosto para playa y ambiente.',
        'Invierno para precios bajos y ciudad tranquila.',
      ],
      itinerary: [
        'Si vas en verano: madruga y descansa al mediodía.',
        'Si vas en invierno: más museos y cafés.',
      ],
      localTips: [
        'Consulta eventos locales para evitar precios altos.',
        'Reserva con antelación si viajas en agosto.',
      ],
    },
    'transporte-publico-lisboa': {
      intro: 'La clave es la tarjeta Viva Viagem y entender qué líneas te sirven.',
      musts: [
        'Compra la Viva Viagem el primer día.',
        'Metro para distancias largas.',
        'Tranvía 28 solo si tienes tiempo.',
        'Bus para barrios sin metro.',
        'Uber/Bolt para trayectos puntuales.',
      ],
      itinerary: [
        'Día 1: Viva Viagem + pase diario.',
        'Día 2+: combina metro y caminata.',
      ],
      localTips: [
        'El tranvía 12 es una alternativa al 28.',
        'El elevador de Santa Justa se puede subir gratis por detrás.',
      ],
    },
    'restaurantes-romanticos-lisboa': {
      intro: 'Para una cena especial, reserva con tiempo y busca vistas reales.',
      musts: [
        'Chapitô à Mesa para atardecer.',
        'Ponto Final para cena con vistas al río.',
        'Solar dos Presuntos para algo más clásico.',
        'Bairro Alto si quieres plan nocturno.',
      ],
      itinerary: [
        'Atardecer: mirador cercano.',
        'Cena: reserva a las 20:30.',
        'Copa: barrio cercano a pie.',
      ],
      localTips: [
        'Reservar viernes y sábado es obligatorio.',
        'Pregunta por mesas con vista antes de confirmar.',
      ],
    },
    'que-ver-cascais-desde-lisboa': {
      intro: 'Cascais es la escapada fácil: tren directo y todo caminable.',
      musts: [
        'Centro histórico.',
        'Boca do Inferno.',
        'Paseo marítimo.',
        'Playa principal.',
      ],
      itinerary: [
        'Tren desde Cais do Sodré.',
        'Centro + paseo marítimo.',
        'Boca do Inferno.',
        'Comida cerca del puerto.',
      ],
      localTips: [
        'Si vas en verano, llega temprano.',
        'Si hace viento, lleva chaqueta ligera.',
      ],
    },
    'playas-cerca-lisboa': {
      intro: 'Las playas más fáciles son Cascais y Costa da Caparica.',
      musts: [
        'Cascais si quieres tren directo.',
        'Caparica si buscas arena larga.',
        'Arrábida si tienes coche.',
      ],
      itinerary: [
        'Mañana: tren a Cascais.',
        'Mediodía: playa y comida.',
        'Tarde: regreso antes del atardecer.',
      ],
      localTips: [
        'En agosto, evita llegar después de las 11:00.',
        'Arrábida es más bonita pero requiere coche.',
      ],
    },
    'donde-escuchar-fado-autentico': {
      intro: 'El fado auténtico se vive en espacios pequeños, con silencio y respeto.',
      musts: [
        'Tascas pequeñas en Alfama.',
        'Bares con ambiente local.',
        'Evitar shows turísticos masivos.',
      ],
      itinerary: [
        'Cena temprano en Alfama.',
        'Fado entre 20:30 y 22:30.',
      ],
      localTips: [
        'No hables durante las canciones.',
        'Consume algo para apoyar al local.',
      ],
    },
    'presupuesto-viajar-lisboa': {
      intro: 'La clave es ajustar tu estilo: mochilero, medio o confort.',
      musts: [
        'Mochilero: 35-50€ al día.',
        'Medio: 60-90€ al día.',
        'Confort: 120€+ al día.',
        'La comida puede ser barata si eliges bien.',
      ],
      itinerary: [
        'Mañana: desayuno local.',
        'Mediodía: menú del día.',
        'Noche: cena ligera o petiscos.',
      ],
      localTips: [
        'El alojamiento es el gasto principal.',
        'Evita zonas turísticas para comer.',
      ],
    },
    'mejores-mercados-lisboa': {
      intro: 'Time Out es el más famoso, pero no el más local.',
      musts: [
        'Time Out Market para variedad.',
        'Feira da Ladra para antigüedades.',
        'Mercado de Arroios para comida local.',
      ],
      itinerary: [
        'Mañana: mercado local.',
        'Mediodía: comida en el mercado.',
      ],
      localTips: [
        'Feira da Ladra es martes y sábado.',
        'El mercado tradicional suele ser más barato.',
      ],
    },
    'donde-tomar-cafe-lisboa': {
      intro: 'En Lisboa se pide “bica”. Un café corto y fuerte.',
      musts: [
        'A Brasileira por historia.',
        'Manteigaria para café y pastel.',
        'Cafeterías de especialidad en Príncipe Real.',
      ],
      itinerary: [
        'Mañana: bica en un café local.',
        'Tarde: café con pastel en una pastelería.',
      ],
      localTips: [
        'El café es barato fuera de zonas turísticas.',
        'A primera hora hay mejor ambiente local.',
      ],
    },
    'miradores-atardecer-lisboa': {
      intro: 'El atardecer en Lisboa merece planificarlo bien.',
      musts: [
        'Senhora do Monte para vistas abiertas.',
        'Santa Catarina para ambiente.',
        'Portas do Sol si quieres foto clásica.',
      ],
      itinerary: [
        'Llega 30-45 min antes.',
        'Elige un mirador por tarde.',
      ],
      localTips: [
        'Evita sábados por la tarde.',
        'Lleva algo de beber.',
      ],
    },
    'que-comprar-lisboa-souvenirs': {
      intro: 'Los mejores souvenirs son útiles, locales y fáciles de llevar.',
      musts: [
        'Azulejos pequeños.',
        'Conservas portuguesas.',
        'Vino de Oporto.',
        'Artesanía en corcho.',
      ],
      itinerary: [
        'Mañana: Feira da Ladra.',
        'Tarde: tiendas en Chiado o Alfama.',
      ],
      localTips: [
        'Evita souvenirs de Rossio.',
        'Compra en mercados locales.',
      ],
    },
    'viajar-ninos-lisboa': {
      intro: 'Lisboa es cómoda para familias si planificas ritmos y descansos.',
      musts: [
        'Oceanário para niños.',
        'Parques con sombra.',
        'Tranvía como experiencia.',
      ],
      itinerary: [
        'Mañana: Oceanário.',
        'Tarde: parque + paseo suave.',
      ],
      localTips: [
        'Evita cuestas largas con cochecito.',
        'Lleva snacks y agua siempre.',
      ],
    },
    'excursiones-desde-lisboa': {
      intro: 'Sintra es la número uno, Cascais es la más fácil.',
      musts: [
        'Sintra para palacios.',
        'Cascais para costa.',
        'Óbidos si quieres plan medieval.',
      ],
      itinerary: [
        'Salir entre 8:00 y 9:00.',
        'Elegir una excursión por día.',
      ],
      localTips: [
        'Reserva entradas si vas a Sintra.',
        'Evita combinar Sintra y Cascais el mismo día.',
      ],
    },
  };

  const introExtra = categoryIntro[categoria] || categoryIntro['Guías'];
  const slugDetail = slugDetails[slug];
  const musts = slugDetail?.musts || categoryMusts[categoria] || categoryMusts['Guías'];
  const checklist = categoryChecklist[categoria] || categoryChecklist['Guías'];
  const tip = categoryTip[categoria] || categoryTip['Guías'];
  const itinerary = slugDetail?.itinerary;
  const localTips = slugDetail?.localTips;
  return {
    titulo: post.titulo,
    descripcion: post.excerpt,
    imagen: post.imagen,
    categoria: post.categoria,
    fecha: post.fecha,
    minutos: 7,
    contenido: [
      { tipo: 'parrafo', texto: post.excerpt },
      { tipo: 'parrafo', texto: contexto },
      { tipo: 'parrafo', texto: introExtra },
      { tipo: 'subtitulo', texto: 'Lo esencial antes de ir' },
      {
        tipo: 'lista',
        items: listaClave,
      },
      {
        tipo: 'subtitulo',
        texto: 'Ruta rápida recomendada',
      },
      {
        tipo: 'parrafo',
        texto:
          'Empieza por lo más cercano al centro y avanza por zonas conectadas entre sí. Así evitas subir y bajar colinas sin necesidad. Si viajas con poco tiempo, prioriza dos zonas clave y deja el resto como extra.',
      },
      ...(itinerary
        ? [
            { tipo: 'lista', items: itinerary },
          ]
        : []),
      {
        tipo: 'subtitulo',
        texto: 'Qué no te puedes perder',
      },
      {
        tipo: 'lista',
        items: musts,
      },
      {
        tipo: 'subtitulo',
        texto: 'Consejos de local',
      },
      {
        tipo: 'lista',
        items: [
          'Ve temprano si quieres fotos limpias y menos filas.',
          'Evita la franja de 13:00 a 16:00 en lugares populares.',
          'Si algo se ve demasiado turístico, camina 5 minutos y mejora.',
        ],
      },
      ...(localTips
        ? [
            { tipo: 'lista', items: localTips },
          ]
        : []),
      {
        tipo: 'subtitulo',
        texto: 'Checklist rápida',
      },
      {
        tipo: 'lista',
        items: checklist,
      },
      {
        tipo: 'tip',
        texto: tip,
      },
    ],
  };
}

function getArticle(slug: string): Article | null {
  return articles[slug] ?? buildFallbackArticle(slug);
}

function getFaqs(slug: string) {
  if (slug.includes('transporte')) {
    return [
      { q: '¿Cuál es el transporte más barato en Lisboa?', a: 'El metro y los tranvías con tarjeta recargable son la opción más económica para moverte.' },
      { q: '¿Conviene usar el tranvía 28?', a: 'Sí, pero evita las horas punta. Es mejor temprano por la mañana o al final de la tarde.' },
      { q: '¿Cómo ir del aeropuerto al centro?', a: 'El metro es la opción más rápida y barata; taxi/Uber es más cómodo si vas con maleta.' },
    ];
  }
  if (slug.includes('presupuesto') || slug.includes('dinero')) {
    return [
      { q: '¿Cuánto dinero llevar a Lisboa por día?', a: 'Depende del estilo: 35€ mochilero, 60€ medio, 120€ confort.' },
      { q: '¿Lisboa es cara para comer?', a: 'No si evitas zonas turísticas. Hay menús del día desde 7-10€.' },
      { q: '¿Se puede pagar con tarjeta en Lisboa?', a: 'Sí, pero conviene llevar algo de efectivo para cafés y pequeños comercios.' },
    ];
  }
  if (slug.includes('miradores')) {
    return [
      { q: '¿Cuál es el mejor mirador de Lisboa?', a: 'Senhora do Monte es el favorito local por vistas y ambiente.' },
      { q: '¿A qué hora ir a los miradores?', a: 'Antes de las 10:00 para menos gente o al atardecer para la mejor luz.' },
      { q: '¿Hay miradores gratis en Lisboa?', a: 'Sí, la mayoría son gratuitos y de fácil acceso a pie o en tranvía.' },
    ];
  }
  if (slug.includes('comer') || slug.includes('restaurantes')) {
    return [
      { q: '¿Dónde comer barato en Lisboa?', a: 'En tascas locales fuera de Baixa/Chiado. Menús desde 7-12€.' },
      { q: '¿Qué plato típico pedir?', a: 'Bacalao, bifanas y pastéis de nata son imprescindibles.' },
      { q: '¿Es necesario reservar restaurantes?', a: 'En sitios populares sí, especialmente fines de semana.' },
    ];
  }
  if (slug.includes('sintra')) {
    return [
      { q: '¿Cuánto tarda el tren a Sintra?', a: 'Unos 40 minutos desde la estación de Rossio.' },
      { q: '¿Se puede ver Sintra en un día?', a: 'Sí, pero planifica 2-3 lugares para no ir con prisas.' },
      { q: '¿Conviene comprar entradas online?', a: 'Sí, evita colas largas especialmente en temporada alta.' },
    ];
  }
  return [
    { q: '¿Cuántos días son ideales para Lisboa?', a: 'Entre 2 y 4 días para ver lo esencial sin prisas.' },
    { q: '¿Cuál es el mejor barrio para alojarse?', a: 'Baixa-Chiado es práctico; Alfama es más auténtico.' },
    { q: '¿Qué época es mejor para viajar?', a: 'Primavera y otoño tienen buen clima y menos turistas.' },
  ];
}

const internalLinks = [
  { href: '/itinerarios', label: 'Itinerarios por días en Lisboa' },
  { href: '/transporte', label: 'Transporte en Lisboa' },
  { href: '/presupuesto', label: 'Presupuesto para viajar a Lisboa' },
  { href: '/blog', label: 'Consejos y guías de Lisboa' },
];

const articleExtras: Record<string, { comoLlegar: string; mejorHora: string; faqs: { q: string; a: string }[] }> = {
  'mejores-miradores-lisboa': {
    comoLlegar: 'Empieza en Graça (tranvía 28/12 o bus 734) y baja caminando hacia Alfama y Baixa para encadenar miradores sin repetir cuestas.',
    mejorHora: 'Amanecer o 30-45 minutos antes del atardecer para mejor luz y menos gente.',
    faqs: [
      { q: '¿Cuál es el mirador más bonito de Lisboa?', a: 'Senhora do Monte suele ser el favorito por vistas amplias y ambiente local.' },
      { q: '¿Qué mirador es mejor para fotos?', a: 'Santa Luzia por los azulejos y Portas do Sol por la vista abierta a Alfama.' },
      { q: '¿Se pueden visitar varios en una tarde?', a: 'Sí, Santa Luzia + Portas do Sol + Graça están a pocos minutos a pie.' },
    ],
  },
  'donde-comer-barato-lisboa': {
    comoLlegar: 'Busca zonas locales como Mouraria, Arroios o Campo de Ourique (metro Martim Moniz o Arroios). Desde Baixa estás a 10-15 min caminando.',
    mejorHora: 'Entre 12:30 y 14:00 para aprovechar el “prato do dia” a buen precio.',
    faqs: [
      { q: '¿Cuánto cuesta comer barato en Lisboa?', a: 'Entre 8 y 12€ en tascas locales con plato del día.' },
      { q: '¿Dónde comer barato sin turistas?', a: 'Mouraria, Arroios y Campo de Ourique suelen tener precios reales.' },
      { q: '¿Los mercados son buena opción?', a: 'Sí, para variedad; pero Time Out Market es más caro que otros.' },
    ],
  },
  'barrios-imprescindibles': {
    comoLlegar: 'Arranca en Baixa-Chiado (metro) y conecta con Alfama por tranvía 28/12. Belém se alcanza con tranvía 15 desde Cais do Sodré.',
    mejorHora: 'Mañanas para Baixa/Belém y tardes-noches para Alfama y Bairro Alto.',
    faqs: [
      { q: '¿Cuál es el mejor barrio para primera visita?', a: 'Baixa-Chiado por ubicación, plano y buena conexión.' },
      { q: '¿Qué barrio tiene más encanto?', a: 'Alfama, por sus calles y ambiente de fado.' },
      { q: '¿Dónde está la vida nocturna?', a: 'En Bairro Alto y Cais do Sodré.' },
    ],
  },
  'evitar-turistadas-lisboa': {
    comoLlegar: 'Muévete en metro y a pie. Evita tours exprés y tuk-tuks en zonas saturadas.',
    mejorHora: 'Visita lo más popular antes de las 10:00 o después de las 17:00.',
    faqs: [
      { q: '¿Cuál es la mayor turistada en Lisboa?', a: 'Comer en Rua Augusta: precios altos y calidad media.' },
      { q: '¿Cómo evitar colas en el tranvía 28?', a: 'Sube temprano o usa el tranvía 12 que hace una ruta similar.' },
      { q: '¿Dónde hay fado auténtico?', a: 'En tascas pequeñas de Alfama o Bairro Alto, no en restaurantes turísticos.' },
    ],
  },
  'pasteles-de-belem': {
    comoLlegar: 'Tranvía 15E desde Cais do Sodré o tren a Belém. La pastelería está a 5 min de la estación.',
    mejorHora: 'Antes de las 9:30 o a partir de las 17:00 para evitar colas largas.',
    faqs: [
      { q: '¿Qué diferencia hay con los pastéis de nata?', a: 'La receta de Belém es secreta y solo se hace en esa pastelería.' },
      { q: '¿Cuánto cuesta un Pastel de Belém?', a: 'Suele rondar 1,30-1,50€ por unidad.' },
      { q: '¿Merece la pena la cola?', a: 'Sí si es tu primera visita; prueba a entrar al salón para menos espera.' },
    ],
  },
  'mejor-epoca-visitar-lisboa': {
    comoLlegar: 'Vuelos directos a LIS desde España; del aeropuerto al centro en metro (línea roja).',
    mejorHora: 'En verano, paseos temprano o al atardecer para evitar calor y multitudes.',
    faqs: [
      { q: '¿Cuál es el mejor mes para visitar Lisboa?', a: 'Mayo y septiembre ofrecen buen clima y menos gente.' },
      { q: '¿Lisboa es buena en invierno?', a: 'Sí, es más tranquila y con precios más bajos.' },
      { q: '¿Cuándo es temporada alta?', a: 'De junio a agosto, con precios y ocupación más altos.' },
    ],
  },
  'transporte-publico-lisboa': {
    comoLlegar: 'Desde el aeropuerto, metro línea roja hasta Baixa-Chiado o Saldanha.',
    mejorHora: 'Evita horas punta 8:00-9:30 y 18:00-19:30 si quieres ir cómodo.',
    faqs: [
      { q: '¿Qué tarjeta necesito para moverme?', a: 'La Viva Viagem, recargable y válida para metro, bus y tranvía.' },
      { q: '¿Es seguro el tranvía 28?', a: 'Sí, pero hay carteristas; ve atento a tus bolsillos.' },
      { q: '¿Conviene el pase diario?', a: 'Sí si haces más de 3-4 viajes en un día.' },
    ],
  },
  'restaurantes-romanticos-lisboa': {
    comoLlegar: 'Muchos están en Príncipe Real, Alfama y Cais do Sodré. Metro a Rato/Baixa y luego Uber si prefieres.',
    mejorHora: 'Reserva para 20:00-21:00; si hay terraza, mejor al atardecer.',
    faqs: [
      { q: '¿Hay restaurantes con vistas en Lisboa?', a: 'Sí, Chapitô à Mesa y Ponto Final tienen vistas excelentes.' },
      { q: '¿Hay que reservar siempre?', a: 'En los más populares sí, sobre todo viernes y sábados.' },
      { q: '¿Opciones románticas sin gastar mucho?', a: 'Ponto Final o Tasca da Esquina con presupuesto medio.' },
    ],
  },
  'que-ver-cascais-desde-lisboa': {
    comoLlegar: 'Tren directo desde Cais do Sodré cada 20 minutos. El trayecto dura 30-40 minutos.',
    mejorHora: 'Sal temprano para ver el centro y la costa sin prisas, sobre todo en verano.',
    faqs: [
      { q: '¿Cascais se puede ver en un día?', a: 'Sí, es ideal para una excursión de un día.' },
      { q: '¿Hace falta coche?', a: 'No, el tren es rápido y llega al centro.' },
      { q: '¿Qué no me puedo perder?', a: 'Boca do Inferno y el paseo marítimo.' },
    ],
  },
  'playas-cerca-lisboa': {
    comoLlegar: 'Cascais en tren, Caparica en bus y Arrábida en coche. Todas están a menos de 1 hora.',
    mejorHora: 'Llega antes de las 10:30 en verano para evitar parking lleno.',
    faqs: [
      { q: '¿Cuál es la playa más fácil desde Lisboa?', a: 'Cascais, por tren directo desde Cais do Sodré.' },
      { q: '¿Dónde hay playa más salvaje?', a: 'Arrábida y Adraga son más naturales y menos urbanas.' },
      { q: '¿Se puede ir en invierno?', a: 'Sí, para pasear; para bañarse mejor de junio a septiembre.' },
    ],
  },
  'donde-escuchar-fado-autentico': {
    comoLlegar: 'Alfama y Bairro Alto se alcanzan con metro a Baixa-Chiado y luego caminando.',
    mejorHora: 'Entre 20:00 y 22:30. Jueves a sábado hay más ambiente.',
    faqs: [
      { q: '¿Dónde escuchar fado auténtico?', a: 'En tascas pequeñas como Tasca do Chico o A Baiuca.' },
      { q: '¿El fado es gratis?', a: 'En bares locales suele ser gratis con consumición.' },
      { q: '¿Qué evitar?', a: 'Restaurantes turísticos con “show de fado” caro en Baixa.' },
    ],
  },
  'presupuesto-viajar-lisboa': {
    comoLlegar: 'Vuelos low cost desde España a Lisboa. Metro línea roja desde el aeropuerto al centro.',
    mejorHora: 'Ahorra comiendo menús del día al mediodía y usando pases diarios.',
    faqs: [
      { q: '¿Cuánto cuesta un viaje medio a Lisboa?', a: 'Entre 60 y 90€ al día incluyendo alojamiento y comidas.' },
      { q: '¿Es Lisboa cara?', a: 'Puede serlo en zonas turísticas, pero hay opciones económicas.' },
      { q: '¿Qué gasto es el más alto?', a: 'El alojamiento suele ser el mayor coste.' },
    ],
  },
  'mejores-mercados-lisboa': {
    comoLlegar: 'Time Out Market en Cais do Sodré, Feira da Ladra en Santa Apolónia, Arroios con metro.',
    mejorHora: 'Primera hora para mejor producto y menos gente.',
    faqs: [
      { q: '¿Cuál es el mercado más famoso?', a: 'Time Out Market, aunque es más turístico.' },
      { q: '¿Dónde comprar barato y local?', a: 'Mercado de Arroios y la parte tradicional del Mercado da Ribeira.' },
      { q: '¿Cuándo es Feira da Ladra?', a: 'Martes y sábados por la mañana.' },
    ],
  },
  'donde-tomar-cafe-lisboa': {
    comoLlegar: 'Chiado y Príncipe Real están conectados por metro (Baixa-Chiado o Rato).',
    mejorHora: 'Entre 8:00 y 11:00 para ver la rutina local con poca cola.',
    faqs: [
      { q: '¿Cómo se pide un café en Lisboa?', a: 'Pide una “bica” si quieres un espresso.' },
      { q: '¿Café de especialidad o tradicional?', a: 'Ambos son buenos; prueba A Brasileira y Copenhagen Coffee Lab.' },
      { q: '¿Es caro el café?', a: 'No, suele costar entre 0,70 y 1,50€.' },
    ],
  },
  'miradores-atardecer-lisboa': {
    comoLlegar: 'Para Graça usa el tranvía 28/12 o el bus 734. Portas do Sol queda cerca de Alfama.',
    mejorHora: '30-45 minutos antes del atardecer para reservar buen sitio.',
    faqs: [
      { q: '¿Qué mirador es mejor para el atardecer?', a: 'Senhora do Monte por vistas abiertas y menos gente.' },
      { q: '¿Hay miradores con bares?', a: 'Portas do Sol y Santa Catarina tienen kioscos cerca.' },
      { q: '¿Conviene reservar mesa en Ponto Final?', a: 'Sí, si quieres ver el atardecer desde Cacilhas.' },
    ],
  },
  'que-comprar-lisboa-souvenirs': {
    comoLlegar: 'Feira da Ladra está cerca de Santa Apolónia (metro). Chiado es accesible desde Baixa.',
    mejorHora: 'Martes o sábado por la mañana para Feira da Ladra.',
    faqs: [
      { q: '¿Qué souvenir vale la pena?', a: 'Azulejos, conservas de pescado y vino de Oporto.' },
      { q: '¿Dónde comprar sin turistadas?', a: 'Feira da Ladra y tiendas locales fuera de Baixa.' },
      { q: '¿Puedo llevar comida en avión?', a: 'Sí, conservas y dulces suelen pasar sin problema en equipaje.' },
    ],
  },
  'viajar-ninos-lisboa': {
    comoLlegar: 'El Oceanário está en Parque das Nações (metro línea roja). El resto se hace caminando o tranvía.',
    mejorHora: 'Mañanas para el Oceanário y tardes para parques; evita 13:00-16:00 en verano.',
    faqs: [
      { q: '¿Lisboa es cómoda con niños?', a: 'Sí, pero las cuestas son un reto; usa elevadores y tranvías.' },
      { q: '¿Qué plan gusta más?', a: 'Oceanário y tranvía 28 suelen ser los favoritos.' },
      { q: '¿Dónde comer con niños?', a: 'Time Out Market o tascas con platos simples.' },
    ],
  },
  'excursiones-desde-lisboa': {
    comoLlegar: 'Trenes desde Rossio (Sintra) o Cais do Sodré (Cascais). Buses desde Sete Rios para Óbidos y Nazaré.',
    mejorHora: 'Salidas entre 8:00 y 9:00 para aprovechar el día completo.',
    faqs: [
      { q: '¿Cuál es la excursión número uno?', a: 'Sintra, por palacios y paisajes únicos.' },
      { q: '¿Se pueden combinar excursiones?', a: 'Óbidos y Nazaré sí; Sintra y Cascais es muy justo.' },
      { q: '¿Hace falta tour?', a: 'No siempre, pero ayuda si quieres todo organizado.' },
    ],
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

  const seoTitle = getSeoTitle(article.titulo);
  const seoDescription = getSeoDescription(article.descripcion);
  const image = resolveBlogImage(slug, localImages[slug] || article.imagen);
  const keywords = ['lisboa', 'blog lisboa', article.categoria.toLowerCase(), slug.replace(/-/g, ' ')];
  return {
    title: seoTitle,
    description: seoDescription,
    keywords,
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
          alt: article.titulo,
        },
      ],
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
  const seoTitle = getSeoTitle(article.titulo);
  const seoDescription = getSeoDescription(article.descripcion);
  const extras = articleExtras[slug];
  const baseHeadings = article.contenido
    .filter((bloque) => bloque.tipo === 'subtitulo' && bloque.texto)
    .map((bloque) => ({
      title: bloque.texto as string,
      id: slugify(bloque.texto as string),
    }));
  const extraHeadings = extras
    ? [
        { title: 'Cómo llegar', id: 'como-llegar' },
        { title: 'Mejor hora para ir', id: 'mejor-hora' },
      ]
    : [];
  const headings = [...extraHeadings, ...baseHeadings];

  const firstList = article.contenido.find((bloque) => bloque.tipo === 'lista');
  const takeaways = Array.isArray(firstList?.items) ? firstList?.items?.slice(0, 3) : [];
  const relatedPosts = blogPosts.filter((post) => post.id !== slug).slice(0, 3);
  const faqs = extras?.faqs ?? getFaqs(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: seoTitle,
    description: seoDescription,
    datePublished: article.fecha,
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

  const categoriaColor: Record<string, string> = {
    "Guías": "bg-blue-100 text-blue-700",
    "Gastronomía": "bg-amber-100 text-amber-700",
    "Transporte": "bg-green-100 text-green-700",
    "Consejos": "bg-purple-100 text-purple-700",
    "Alojamiento": "bg-pink-100 text-pink-700",
    "Cultura": "bg-indigo-100 text-indigo-700",
    "Planificación": "bg-teal-100 text-teal-700"
  };

  let paragraphIndex = 0;

  // Tags para el artículo
  const articleTags = [article.categoria, 'Lisboa', 'Portugal', '2026'];

  return (
    <main id="main-content" className="bg-white">
      {/* Breadcrumb minimalista */}
      <div className="border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-slate-700 font-medium">{article.categoria}</span>
          </nav>
        </div>
      </div>

      {/* Header editorial */}
      <header className="max-w-4xl mx-auto px-4 pt-8 pb-6">
        {/* Categoría */}
        <div className="mb-4">
          <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded ${categoriaColor[article.categoria]}`}>
            {article.categoria}
          </span>
        </div>

        {/* Título principal - estilo periódico */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          {article.titulo}
        </h1>

        {/* Lead/Subtítulo destacado */}
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-6 border-l-4 border-primary pl-4">
          {article.descripcion}
        </p>

        {/* Meta info estilo editorial */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">JT</span>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Por {AUTHOR_NAME}</p>
              <p className="text-xs text-slate-500">Desde Lisboa</p>
            </div>
          </div>
          <span className="text-slate-300">|</span>
          <time className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {article.fecha}
          </time>
          <span className="text-slate-300">|</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {article.minutos} min lectura
          </span>
        </div>
      </header>

      {/* Imagen destacada estilo editorial */}
      <figure className="max-w-5xl mx-auto px-4 mb-10">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src={heroImage}
            alt={`Imagen del artículo: ${article.titulo} sobre ${article.categoria} en Lisboa`}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
        <figcaption className="mt-3 text-sm text-slate-500 text-center italic">
          {article.titulo} — Foto: Estaba en Lisboa
        </figcaption>
      </figure>

      {/* Layout principal: contenido + sidebar */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-[1fr,320px] gap-10">
          {/* Columna principal */}
          <article className="min-w-0">
            {/* Lead paragraph - primer párrafo destacado */}
            <p className="text-xl text-slate-700 leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              {article.contenido.find(b => b.tipo === 'parrafo')?.texto || seoDescription}
            </p>

            {/* Caja de resumen estilo editorial */}
            {takeaways.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 p-6 mb-8 rounded-lg">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Lo esencial</p>
                <ul className="space-y-2">
                  {takeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Secciones "Cómo llegar" y "Mejor hora" */}
            {extras && (
              <div className="border-l-4 border-primary bg-primary/5 p-6 mb-8 rounded-r-lg">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h2 id="como-llegar" className="text-lg font-bold text-slate-900 mb-2 scroll-mt-28">
                      📍 Cómo llegar
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{extras.comoLlegar}</p>
                  </div>
                  <div>
                    <h2 id="mejor-hora" className="text-lg font-bold text-slate-900 mb-2 scroll-mt-28">
                      ⏰ Mejor hora para ir
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{extras.mejorHora}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contenido del artículo */}
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
              {article.contenido.slice(1).map((bloque, index) => {
                if (bloque.tipo === 'parrafo') {
                  paragraphIndex += 1;
                  // Cada 3 párrafos, añadir destacado estilo cita
                  if (paragraphIndex % 4 === 0 && bloque.texto && bloque.texto.length > 50) {
                    return (
                      <blockquote key={index} className="border-l-4 border-primary bg-slate-50 px-6 py-4 my-8 not-prose rounded-r-lg">
                        <p className="text-lg text-slate-700 italic leading-relaxed">
                          "{bloque.texto}"
                        </p>
                      </blockquote>
                    );
                  }
                  return (
                    <p key={index} className="text-slate-600 leading-relaxed mb-6">
                      {bloque.texto}
                    </p>
                  );
                }
                if (bloque.tipo === 'subtitulo') {
                  const headingId = slugify(bloque.texto || '');
                  return (
                    <h2
                      key={index}
                      id={headingId}
                      className="text-2xl font-bold text-slate-900 mt-12 mb-4 scroll-mt-28 border-b border-slate-200 pb-2"
                    >
                      {bloque.texto}
                    </h2>
                  );
                }
                if (bloque.tipo === 'lista') {
                  return (
                    <ul key={index} className="space-y-3 mb-6 not-prose">
                      {bloque.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (bloque.tipo === 'tip') {
                  return (
                    <div key={index} className="bg-amber-50 border border-amber-200 p-5 mb-6 rounded-lg not-prose">
                      <p className="text-amber-900 font-medium flex items-start gap-3">
                        <span className="text-2xl">💡</span>
                        <span className="leading-relaxed">{bloque.texto}</span>
                      </p>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Separador */}
            <hr className="my-12 border-slate-200" />

            {/* FAQs estilo editorial */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Preguntas frecuentes
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-slate-50 transition-colors">
                      <h4 className="font-semibold text-slate-900 pr-4">{faq.q}</h4>
                      <span className="text-primary group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4 pt-0 text-slate-600 leading-relaxed bg-slate-50">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {articleTags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-slate-200 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA final */}
            <div className="bg-slate-900 rounded-xl p-8 text-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Guías Premium</p>
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                ¿Quieres esto organizado paso a paso?
              </h3>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                Rutas hora a hora, GPS en cada parada, restaurantes probados. Menos que un café.
              </p>
              <Link 
                href="/itinerarios" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all hover:scale-105"
              >
                Ver Guías desde 2€
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Tabla de contenidos */}
            {headings.length > 0 && (
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">En este artículo</p>
                <nav className="space-y-2">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block text-sm text-slate-600 hover:text-primary hover:pl-2 transition-all py-1 border-l-2 border-transparent hover:border-primary pl-3"
                    >
                      {heading.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Enlaces internos */}
            <div className="bg-white rounded-lg p-5 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">También te interesa</p>
              <ul className="space-y-3">
                {internalLinks.slice(0, 5).map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="flex items-start gap-2 text-sm text-slate-700 hover:text-primary transition-colors group"
                    >
                      <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini CTA sidebar */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 text-center">
              <p className="text-2xl mb-2">🇵🇹</p>
              <p className="font-bold text-slate-900 mb-2">¿Primera vez en Lisboa?</p>
              <p className="text-sm text-slate-600 mb-4">Descubre tu perfil viajero en 60 segundos</p>
              <Link 
                href="/quiz" 
                className="block w-full py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Hacer el Quiz
              </Link>
            </div>
          </aside>
        </div>

        {/* Relacionados */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                Relacionadas
              </h3>
              <Link href="/blog" className="text-primary text-sm font-semibold hover:underline">
                Ver todo →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group"
                >
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-3">
                    <Image
                      src={post.imagen}
                      alt={post.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{post.categoria}</p>
                  <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {post.titulo}
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">{post.fecha}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
