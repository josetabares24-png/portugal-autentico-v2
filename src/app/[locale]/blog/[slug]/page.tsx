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
      { tipo: "parrafo", texto: "He subido a cada mirador de esta ciudad —algunos decenas de veces— y puedo decirte que no todos merecen el esfuerzo de la caminata. Hay miradores masificados donde apenas puedes respirar, otros que son joyas escondidas, y algunos que solo cobran sentido a ciertas horas del día. Esta guía nace de años caminando estas cuestas, maderas pulidas por generaciones de manos en las barandillas, y atardeceres compartidos con desconocidos que se convierten en amigos por unos minutos." },
      { tipo: "subtitulo", texto: "1. Mirador da Senhora do Monte — El preferido de quienes viven aquí" },
      { tipo: "parrafo", texto: "Si preguntas a cualquier lisboeta dónde ve el atardecer, probablemente te mande aquí. Está apartado del circuito habitual, lo que filtra naturalmente a la mayoría de visitantes. El camino de subida atraviesa callejones residenciales donde la ropa cuelga de las ventanas y los vecinos charlan en las puertas. Cuando llegas arriba, la recompensa es una panorámica de 180 grados que abarca desde el Castelo de São Jorge hasta el Puente 25 de Abril." },
      { tipo: "parrafo", texto: "La pequeña ermita del siglo XVI que da nombre al lugar añade un toque de solemnidad. No hay quiosco ni cafetería —solo bancos de piedra y una explanada donde sentarse—, así que conviene llevar algo de beber. Los atardeceres aquí tienen algo distinto: el sol desciende justo detrás del Castillo, creando siluetas dramáticas contra un cielo que pasa del dorado al rosa en cuestión de minutos." },
      { tipo: "tip", texto: "Llega al menos 40 minutos antes de la puesta de sol si quieres un buen sitio en el banco principal. Los fines de semana acuden parejas locales y grupos de amigos con guitarras, creando un ambiente íntimo que rara vez encontrarás en miradores céntricos." },
      { tipo: "subtitulo", texto: "2. Mirador de Santa Luzia — La postal que todo el mundo reconoce" },
      { tipo: "parrafo", texto: "Hay imágenes de Lisboa que aparecen en todas las guías, y la mayoría están tomadas desde aquí. Los paneles de azulejos del siglo XVIII que flanquean la terraza representan la Praça do Comércio antes del terremoto de 1755 y la conquista del Castelo a los moros. Las buganvillas moradas que trepar por la pérgola completan un escenario casi irreal." },
      { tipo: "parrafo", texto: "El problema es que todo el mundo lo sabe. A mediodía el mirador se convierte en un hervidero de selfies y codos, y la magia se diluye entre el bullicio. Pero a primera hora de la mañana —hablo de las siete y media, cuando la luz todavía es suave y dorada— el lugar recupera su serenidad. Los únicos sonidos son el traqueteo del tranvía 28 pasando por detrás y el canto de algún pájaro madrugador." },
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
      { tipo: "parrafo", texto: "Así empecé a mapear cada rincón donde los lisboetas comen de verdad. No los restaurantes que salen en las guías ni los locales con menús traducidos a cinco idiomas, sino las tascas de barrio donde el dueño conoce a cada cliente por su nombre, los mercados donde las señoras compran el pescado del día, y los quioscos donde un bocadillo de cerdo cuesta lo mismo que hace veinte años." },
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
      { tipo: "parrafo", texto: "Es perfectamente posible disfrutar Lisboa con un presupuesto ajustado. Todo pasa por priorizar bien: alojamiento básico pero limpio, comida en tascas de barrio en lugar de restaurantes turísticos, transporte público en vez de taxis, y actividades gratuitas que son muchas en esta ciudad." },
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
  },
  "historia-de-lisboa": {
    titulo: "Historia de Lisboa: De los Fenicios al Siglo XXI",
    descripcion: "Más de 3.000 años de historia en la ciudad más antigua de Europa occidental. Romanos, moros, el Imperio y el terremoto que lo cambió todo.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
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
      { tipo: "parrafo", texto: "La Lisboa de 2026 es una ciudad en equilibrio delicado: entre la tradición y la modernidad, entre el turismo y la vida cotidiana de sus habitantes, entre la globalización y la preservación de su identidad única. Caminar por sus calles es, todavía, uno de los placeres más intensos que puede ofrecer Europa." }
    ]
  },
  "terremoto-lisboa-1755": {
    titulo: "El Terremoto de Lisboa de 1755: La Catástrofe que Rehízo Europa",
    descripcion: "El 1 de noviembre de 1755, un terremoto de magnitud 8,5 destruyó Lisboa. Así fue el desastre, la reconstrucción y el impacto filosófico en todo el mundo.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
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
    descripcion: "En el siglo XV, Lisboa era la capital del mundo. Vasco de Gama, Cabral, Magallanes: todo partió desde aquí. La historia de cuando Portugal cambió la historia de la humanidad.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
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
    descripcion: "Los azulejos son el alma visible de Portugal. Su historia de 500 años, técnicas, museos y los mejores rincones de Lisboa donde admirarlos.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
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
    descripcion: "Santo António, NOS Alive, Festas de Lisboa, Arraiais y mucho más. El calendario completo de eventos y festivales de Lisboa para 2026.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
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
    titulo: "Lisboa vs Porto: ¿Cuál Visitar Primero?",
    descripcion: "Diferencias reales entre las dos grandes ciudades portuguesas. Ambiente, precios, qué ver, cuánto tiempo necesitas. La comparativa definitiva.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    categoria: "Planificación",
    fecha: "5 Mar 2026",
    minutos: 13,
    contenido: [
      { tipo: "parrafo", texto: "Es la pregunta que me hacen constantemente los viajeros hispanohablantes que quieren conocer Portugal: ¿Lisboa o Porto? ¿Cuál primero? ¿Son muy diferentes? ¿Vale la pena visitar las dos? Vivo en Lisboa desde hace años, pero conozco bien Porto y la respuesta honesta es: depende totalmente de lo que busques. Esta comparativa no tiene ganador." },
      { tipo: "subtitulo", texto: "El Ambiente: Lisboa Mediterránea, Porto Atlántica" },
      { tipo: "parrafo", texto: "La diferencia más difícil de explicar pero la que más perciben los viajeros es atmosférica. Lisboa tiene algo de ciudad meridional, algo de Nápoles o Barcelona: callejuelas que suben y bajan, terrazas de café a cualquier hora, una cierta dulzura perezosa en la manera en que la gente habita los espacios públicos. El sol está casi siempre presente, la temperatura es suave, y hay una ligereza en el ambiente que se siente físicamente." },
      { tipo: "parrafo", texto: "Porto es más gris, más atlántica, más severa en su belleza. La luz es diferente: más dramática, con más nubes y más contrastes. El río Duero es más estrecho y más encajado que el Tajo en Lisboa, creando un paisaje urbano más vertical y denso. Los portuenses tienen fama de ser más directos y menos diplomáticos que los lisboetas, aunque eso depende del barrio y del contexto." },
      { tipo: "subtitulo", texto: "Qué Ver: Los Imprescindibles de Cada Ciudad" },
      { tipo: "parrafo", texto: "En Lisboa, el corazón histórico es Alfama —callejuelas medievales, mirador de Santa Luzia, fado auténtico en pequeñas casas— seguido de Belém para los monumentos de los Descubrimientos (Jerónimos, Torre de Belém) y el Chiado para compras y cafés. El recorrido puede hacerse a pie en 2-3 días." },
      { tipo: "parrafo", texto: "En Porto, las prioridades son la Ribeira (barrio junto al río, Patrimonio de la Humanidad por la UNESCO), el Cais de Gaia para las bodegas de vino de Oporto, la Livraria Lello (la librería más bonita del mundo), y las torres medievales. La ciudad es más compacta que Lisboa pero igual de rica en historia y arquitectura." },
      { tipo: "subtitulo", texto: "Gastronomía: Pastéis vs Francesinha" },
      { tipo: "parrafo", texto: "Lisboa y Porto tienen personalidades gastronómicas muy diferentes. Lisboa es bacalhau (bacalao), pastéis de nata, mariscos, caldos verdes. La comida lisboeta es más ligera, más mediterránea, con mucho pescado fresco del Atlántico y del Tajo. El vino verde frio con marisco en una terraza de Alfama es una de las experiencias gastronómicas más perfectas de Portugal." },
      { tipo: "parrafo", texto: "Porto tiene la francesinha: un sándwich de carnes variadas cubierto de queso fundido bañado en una salsa especiada de cerveza y tomate que es un acto de valentía culinaria. Es el plato más contundente y distintivo de Portugal, y en Porto hay una religiosidad en torno a qué restaurante hace 'la mejor'. También tiene tripas à moda do Porto (que le valió a sus habitantes el apodo de 'tripeiros') y, claro, el vino de Oporto que se produce en las bodegas de Gaia." },
      { tipo: "subtitulo", texto: "Precios: ¿Dónde Gasto Más?" },
      { tipo: "parrafo", texto: "Lisboa es generalmente un poco más cara que Porto, especialmente en alojamiento y restaurantes turísticos. La demanda turística en Lisboa es mayor y los precios en el centro histórico lo reflejan. Sin embargo, la diferencia ya no es tan grande como hace cinco años: Porto ha crecido turísticamente y sus precios han subido en consecuencia." },
      { tipo: "parrafo", texto: "En ambas ciudades, comer barato es fácil si evitas las zonas más turísticas. En Lisboa, el menú del día en una tasca de Mouraria o Arroios cuesta entre 7 y 10€. En Porto, el equivalente en el barrio de Bonfim o en las cafeterías del Mercado do Bolhão está en el mismo rango." },
      { tipo: "subtitulo", texto: "Mi Recomendación Personal" },
      { tipo: "parrafo", texto: "Si tienes que elegir solo una ciudad, mi consejo depende de tu perfil. Si buscas sol, monumentos históricos de escala mundial, vida de café y terraza, y planeas hacer excursiones (Sintra, Cascais), ve primero a Lisboa. Si prefieres una ciudad más compacta, más lluviosa pero con encanto poderoso, amante del vino, con una arquitectura más íntima y un ambiente de barrio más marcado, ve primero a Porto." },
      { tipo: "tip", texto: "Si tienes 10 días en Portugal, la combinación perfecta es 5 días en Lisboa (con día en Sintra), tren o autocar a Porto (2,5 horas), y 4-5 días en Porto con excursión al Duero. Es uno de los mejores itinerarios de Europa." }
    ]
  },
  "monumentos-de-lisboa": {
    titulo: "Los 15 Monumentos de Lisboa que No Te Puedes Perder",
    descripcion: "Torre de Belém, Jerónimos, Castelo de São Jorge, el Elevador de Santa Justa... Los monumentos imprescindibles con horarios, precios y cómo evitar las colas.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    categoria: "Guías",
    fecha: "3 Mar 2026",
    minutos: 16,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa es una ciudad de monumentos. No del tipo de monumentos que se erigen en honor a batallas olvidadas, sino de edificios y estructuras que cuentan directamente la historia de la ciudad y del país: los monasterios construidos con el oro de las especias de India, las torres que vigilaban la entrada al río, los puentes y ascensores que conectaban las colinas. Esta guía te ayuda a priorizar qué ver, cómo evitar colas, y cuánto tiempo necesitas en cada lugar." },
      { tipo: "subtitulo", texto: "1. Mosteiro dos Jerónimos — La Joya del Renacimiento Portugués" },
      { tipo: "parrafo", texto: "Construido a partir de 1501 con el dinero del impuesto sobre las especias traídas de India, el Mosteiro dos Jerónimos es la obra cumbre del estilo manuelino y uno de los edificios más bellos de Europa. La nave de la iglesia, con sus columnas decoradas con motivos marinos y tropicales, es de una elegancia que no cansa. Los claustros, en el piso superior, son todavía más impresionantes: una galería de dos pisos de arcos decorados con una delicadeza escultórica extraordinaria." },
      { tipo: "parrafo", texto: "Datos prácticos: abre a las 10:00, cierra a las 17:30 (18:30 en verano). Precio: 12€ (puede combinarse con la Torre de Belém por 18€). Compra online para evitar colas. Tiempo recomendado: 1,5-2 horas." },
      { tipo: "subtitulo", texto: "2. Torre de Belém — El Icono de Lisboa" },
      { tipo: "parrafo", texto: "La Tower of Belém es la imagen más reconocible de Lisboa y uno de los iconos de Portugal. Construida entre 1516 y 1521 como fortaleza defensiva a la entrada del estuario del Tajo, la torre combina elementos militares con decoración manuelina de una sofisticación sorprendente. Las troneras en forma de cruz de Cristo, las torres de vigilancia octogonales y los balcones con barandillas de piedra tallada hacen que el edificio parezca más un sueño de piedra que una fortaleza." },
      { tipo: "parrafo", texto: "Datos prácticos: abre a las 10:00. Precio: 6€ (o combinado con Jerónimos). El interior tiene 5 pisos con vistas al río desde la terraza superior, pero las escaleras son muy estrechas. Tiempo: 45 minutos." },
      { tipo: "subtitulo", texto: "3. Castelo de São Jorge — La Historia de Lisboa en Piedra" },
      { tipo: "parrafo", texto: "El castillo que corona Alfama tiene casi mil años de historia visible en sus murallas. Construido por los moros en el siglo XI sobre asentamientos anteriores, fue reconquistado por Afonso Henriques en 1147 con ayuda de cruzados del norte de Europa. Desde las almenas hay la panorámica más completa de Lisboa: los tejados de Alfama, el Tajo brillando al fondo, el Puente 25 de Abril en la distancia." },
      { tipo: "parrafo", texto: "Precio: 15€. Vale la pena por las vistas y por el tour arqueológico (incluido en el precio) que muestra restos de la Lisboa fenicia, romana y mora bajo el recinto. Los pavos reales que deambulan por los jardines son un bonus inesperado." },
      { tipo: "subtitulo", texto: "4. Elevador de Santa Justa — Eiffel y el Art Nouveau" },
      { tipo: "parrafo", texto: "Este ascensor de hierro forjado de 45 metros de altura, diseñado por Raoul Mesnier du Ponsard (discípulo de Gustave Eiffel), conecta la Baixa con el Bairro Alto. Construido en 1902, es una pieza de ingeniería y arquitectura que parece sacada de un libro de Jules Verne. La terraza superior ofrece vistas de 360 grados sobre los tejados de la Baixa, la colina del Castillo y el Tajo." },
      { tipo: "tip", texto: "El ascensor cuesta 5,30€ el trayecto. Si quieres las vistas sin pagar, sube al nivel del Bairro Alto por las escaleras del Convento do Carmo y accede a la pasarela superior gratis desde el lado de arriba." },
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
      ]}
    ]
  },
  "semana-santa-lisboa-2026": {
    titulo: "Semana Santa en Lisboa 2026: Procesiones, Tradiciones y Qué Visitar",
    descripcion: "La Semana Santa en Lisboa tiene una espiritualidad especial. Procesiones en Alfama, iglesias históricas, gastronomía de Cuaresma y cómo vivirlo como un local.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    categoria: "Cultura",
    fecha: "1 Mar 2026",
    minutos: 10,
    contenido: [
      { tipo: "parrafo", texto: "La Semana Santa en Lisboa es una experiencia diferente a la de otras capitales europeas. No tiene la espectacularidad visual de Sevilla ni la masividad de Roma, pero tiene algo que esas ciudades han perdido en parte: una espiritualidad auténtica y de barrio que no está pensada para los turistas sino para los propios vecinos." },
      { tipo: "parrafo", texto: "En 2026, la Semana Santa cae entre el 29 de marzo y el 5 de abril. Semana Santa coincide con el inicio de la primavera lisboeta, cuando los jardines empiezan a florecer y la temperatura se vuelve perfecta para caminar. Combinar los actos religiosos con la exploración de la ciudad en este momento del año es uno de los planes más gratificantes que puedes hacer en Lisboa." },
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
    descripcion: "Alfama tiene casi mil años sin cambiar. Sus callejuelas empinadas, el fado que sale de las ventanas y los gatos en las escaleras cuentan una historia que ningún museo puede contar.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
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
      { tipo: "parrafo", texto: "Para escuchar fado auténtico en Alfama: busca los locales pequeños, con pocas mesas, donde se pide silencio cuando empieza la música. El fado no es background: es lo que importa. En los mejores sitios, el fadista canta con los ojos cerrados y el público no aplaude hasta que termina la última nota, no antes." }
    ]
  },
  "gastronomia-portuguesa-guia": {
    titulo: "Gastronomía Portuguesa: Los 20 Platos que Tienes que Probar en Lisboa",
    descripcion: "Bacalhau, pastéis de nata, bifanas, caldo verde, amêijoas à bulhão pato... La guía definitiva de la cocina portuguesa con dónde comer cada plato en Lisboa.",
    imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200",
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
    titulo: "El Fado: Historia, Origen y Por Qué Es el Alma de Lisboa",
    descripcion: "El fado no es folklore de postal. Es una forma de estar en el mundo que nació en las tabernas de Alfama en el siglo XIX. Su historia, sus cantores y cómo escucharlo de verdad.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    categoria: "Cultura",
    fecha: "22 Mar 2026",
    minutos: 13,
    contenido: [
      { tipo: "parrafo", texto: "La primera vez que escuché fado de verdad fue en una tasca pequeña de Alfama, en una mesa junto a la pared, con un vaso de vino tinto que nadie me había pedido permiso para traer. La fadista tenía unos sesenta años, llevaba un chal negro sobre los hombros, y cuando empezó a cantar el local entero se quedó sin hablar. No porque fuera una obligación —era una costumbre. El fado pide silencio no por protocolo sino porque es demasiado para compartirlo con ruido." },
      { tipo: "parrafo", texto: "Esa experiencia define mejor el fado que cualquier definición académica. Pero entender su historia ayuda a entender por qué suena como suena, por qué habla de lo que habla, y por qué ha sobrevivido dos siglos sin perder su esencia." },
      { tipo: "subtitulo", texto: "Origen: Tabernas del Siglo XIX, No Postal Turístico" },
      { tipo: "parrafo", texto: "El fado nació en Lisboa a principios del siglo XIX, probablemente entre 1820 y 1840, en los barrios marineros del Mouraria y Alfama. No fue un invento de un compositor ni una creación cortesana: emergió de la mezcla de culturas que convivían en los barrios más pobres de la ciudad. Marineros que volvían de meses en el mar, trabajadoras de las lavanderas del Tajo, vendedores ambulantes, prostitutas, emigrantes del campo..." },
      { tipo: "parrafo", texto: "Las influencias que se mezclan en el fado son difusas y debatidas: la modinha brasileña (canción romántica popular), el lundum africano (traído por los esclavos a través de Brasil), la música árabe que quedó en la memoria de los barrios que fueron moros, el canto gregoriano de las iglesias. Nadie sabe exactamente la proporción, y probablemente importa menos que el resultado." },
      { tipo: "subtitulo", texto: "Saudade: La Palabra que Explica Todo y Nada" },
      { tipo: "parrafo", texto: "El fado está indisolublemente ligado a la saudade, una palabra portuguesa que no tiene traducción exacta a ningún otro idioma. No es nostalgia, no es melancolía, no es tristeza: es algo más específico. Es el sentimiento de añoranza de algo que se fue, de algo que podría haber sido, de algo que se tiene pero se teme perder. Los portugueses dicen que solo se entiende del todo si eres portugués." },
      { tipo: "parrafo", texto: "El fado es la música de la saudade: habla del mar y de los que esperan a los que navegan, de los amores que terminaron, de los barrios que ya no son como eran, de las madres que esperan a los hijos que no vuelven. No es exactamente triste —hay fados alegres, picarescos, incluso irónicos— pero tiene siempre esa carga de emoción contenida que te agarra por dentro y no te suelta hasta que termina." },
      { tipo: "subtitulo", texto: "Los Grandes Nombres: Amália Rodrigues" },
      { tipo: "parrafo", texto: "Cualquier conversación sobre fado empieza y termina con Amália Rodrigues (1920-1999). Nacida en Lisboa en una familia muy pobre, llegó a ser la cantante portuguesa más conocida del mundo. Amália no solo cantó fado: lo reinventó, le dio una profundidad lírica que antes no tenía, y lo llevó a los escenarios de todo el mundo en una época en que Portugal era un país pobre y cerrado." },
      { tipo: "parrafo", texto: "Cuando murió, Portugal decretó tres días de luto nacional. Sus cenizas están en el Panteón Nacional de Lisboa, junto a los restos de Vasco de Gama y Luís de Camões. Para Portugal, Amália es de ese tamaño. Hoy, el Museu do Fado en Alfama tiene una sala entera dedicada a ella con grabaciones originales, vestidos, cartas y objetos personales." },
      { tipo: "subtitulo", texto: "El Fado Hoy: Tradición y Renovación" },
      { tipo: "parrafo", texto: "El fado fue declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2011. Ese reconocimiento podría haberlo convertido en pieza de museo, en actuación de hotel para turistas. No pasó. En Lisboa, el fado sigue siendo una música viva, con una generación de jóvenes fadistas que respetan la tradición pero no están encadenados a ella." },
      { tipo: "parrafo", texto: "Ana Moura, Mariza, Camané, Cristina Branco, Mísia... Los nombres de los fadistas activos hoy llenarían una lista larga. Muchos de ellos actúan en las mismas tascas de Alfama donde cantaron sus maestros, y algunos en teatros de todo el mundo. El fado contemporáneo coexiste con el tradicional sin conflicto: Lisboa tiene espacio para los dos." },
      { tipo: "tip", texto: "Para escuchar fado con presupuesto ajustado: busca las tasas de Mouraria los jueves por la noche (hay fado en vivo en algunos bares sin consumo mínimo), o el Museu do Fado, que organiza sesiones gratuitas algunos meses. Los grandes casas de fado de Alfama son estupendas pero cuestan entre 20-35€ de consumo mínimo." }
    ]
  },
  "belem-barrio-guia": {
    titulo: "Belém: El Barrio de los Descubrimientos y los Pastéis de Nata",
    descripcion: "Belém es el barrio donde Portugal cambió la historia del mundo. Jerónimos, Torre de Belém, Padrão dos Descobrimentos y la pastelería más famosa del mundo. Cómo visitarlo sin prisas.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    categoria: "Guías",
    fecha: "21 Mar 2026",
    minutos: 12,
    contenido: [
      { tipo: "parrafo", texto: "A finales del siglo XV, Belém no era un barrio de Lisboa: era una aldea de pescadores a las afueras de la ciudad, en la orilla del Tajo, a unos seis kilómetros del centro. Fue desde esta aldea desde donde Vasco de Gama zarpó en 1497 rumbo a India. Fue aquí donde el rey Manuel I construyó el monasterio más bello de Portugal para celebrar el descubrimiento de la ruta a las especias. Y fue aquí donde se instaló la pastelería que llevaría la crema de los monjes al mundo entero." },
      { tipo: "parrafo", texto: "Hoy Belém es un barrio tranquilo integrado en la ciudad, accesible en tranvía o en bicicleta desde el centro, con los monumentos más visitados de Portugal y también con algunos de los mejores museos del país. Merece al menos medio día, mejor uno completo." },
      { tipo: "subtitulo", texto: "El Mosteiro dos Jerónimos — La Obra Maestra" },
      { tipo: "parrafo", texto: "Construido entre 1501 y 1572 en estilo manuelino —el Renacimiento portugués con decoración de cuerdas, cruces de Cristo y motivos marinos— los Jerónimos son probablemente el edificio más bello de Portugal. La nave de la iglesia tiene columnas tan esbeltas y tan decoradas que el ojo no sabe por dónde empezar. Los claustros, arriba, tienen una armonía de proporciones que hace que la gente se siente en el suelo y no quiera levantarse." },
      { tipo: "parrafo", texto: "El monasterio fue construido con el 'quinto real', el impuesto del 5% sobre todas las especias traídas de India. En otras palabras: los Jerónimos están hechos con pimienta, clavo, canela y jengibre. La ironía es que el monasterio era el lugar de oración de la Orden de San Jerónimo, una orden conocida por su sobriedad. Los monjes rezaban en el edificio más opulento de su tiempo, costeado por el comercio más lucrativo del mundo." },
      { tipo: "tip", texto: "Entra a primera hora (las puertas abren a las 10:00) y ve directo al claustro antes de que lleguen los grupos organizados. Compra siempre la entrada online en patrimoniocultural.gov.pt para evitar colas. Combínala con la Torre de Belém en el mismo billete (18€ ambos)." },
      { tipo: "subtitulo", texto: "La Torre de Belém — El Ícono Fotográfico" },
      { tipo: "parrafo", texto: "La Torre de Belém es el monumento más fotografiado de Portugal y uno de los más reconocibles de Europa. Construida entre 1516 y 1521 como fortaleza en mitad del Tajo (hoy la orilla ha cambiado y está junto a la orilla), el edificio combina arquitectura militar con decoración manuelina de una finura extraordinaria: troneras en forma de cruz de la Orden de Cristo, balcones con barandillas de piedra tallada, una torre de vigía con cupulín esférico que parece una fantasía arquitectónica." },
      { tipo: "parrafo", texto: "El interior tiene cinco pisos con escaleras estrechísimas. Las vistas desde la terraza superior valen la espera. Las colas en verano pueden ser de una hora; llegar al abrir (10:00) o comprar online resuelve el problema." },
      { tipo: "subtitulo", texto: "Pastéis de Belém — La Fila que Vale la Pena" },
      { tipo: "parrafo", texto: "La Pastéis de Belém lleva abierta desde 1837. Ocupa el mismo edificio desde entonces, un laberinto de salas azulejadas que conectan entre sí, con el olor de la crema de huevo y el hojaldre recién horneado impregnando hasta la acera. La receta original la guardan en secreto tres personas en el mundo: se llama la Receita Secreta." },
      { tipo: "parrafo", texto: "No hay discusión posible sobre si vale la pena la cola (que a veces llega a los 40 minutos): vale. Come el pastel caliente, recién salido del horno, espolvoreado con canela y azúcar glass. Es objetivamente diferente a cualquier otro pastel de nata de la ciudad, aunque los defensores de la Manteigaria en Chiado lo discuten apasionadamente." },
      { tipo: "subtitulo", texto: "El Padrão dos Descobrimentos y los Museos de Belém" },
      { tipo: "parrafo", texto: "El Padrão dos Descobrimentos es la escultura monumental construida en 1960 para conmemorar el 500 aniversario de la muerte del Infante Dom Henrique. Una proa de barco de piedra con 33 figuras de los grandes navegantes, cartógrafos y poetas de los descubrimientos: Vasco de Gama, Pedro Álvares Cabral, Fernando Magalhães, Luís de Camões... La vista desde arriba (hay ascensor) es espléndida." },
      { tipo: "parrafo", texto: "En los alrededores hay tres museos que merecen visita según tus intereses: el Museu de Marinha (embarcaciones y objetos de navegación originales de los siglos XV-XVI), el Museu dos Coches (la colección de carruajes reales más importante del mundo) y el MAAT (arte contemporáneo, arquitectura y tecnología, con un edificio que es ya una obra de arte sobre el Tajo)." },
      { tipo: "tip", texto: "La ruta ideal en Belém: llegar al abrir, Jerónimos primero (2h), Torre de Belém (45min), pastel en Pastéis de Belém, almuerzo en el restaurante del Museu dos Coches o en alguna tasca de la calle Vieira Portuense, Padrão dos Descobrimentos por la tarde. Regresa en tranvía o bici por el paseo junto al Tajo." }
    ]
  },
  "chiado-bairro-alto-guia": {
    titulo: "Chiado y Bairro Alto: Cafés Literarios, Vida Nocturna y Arte",
    descripcion: "El Chiado es el barrio intelectual de Lisboa. El Bairro Alto, su vecino nocturno. Los mejores cafés con historia, las librerías que vale la pena conocer y dónde cenar antes de salir.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    categoria: "Guías",
    fecha: "19 Mar 2026",
    minutos: 11,
    contenido: [
      { tipo: "parrafo", texto: "El Chiado y el Bairro Alto son vecinos físicamente —los separa apenas una calle— pero tienen personalidades tan distintas que da la impresión de que se toleran más que se quieren. El Chiado es el barrio de los cafés con historia, las librerías antiguas, los teatros, los museos. El Bairro Alto es el barrio de los bares que abren a las diez de la noche, las escaleras llenas de gente bebiendo en la calle y la resaca del domingo. Los dos juntos definen gran parte de la identidad cultural de Lisboa." },
      { tipo: "subtitulo", texto: "El Chiado: Un Barrio con Memoria" },
      { tipo: "parrafo", texto: "El Chiado fue durante siglos el corazón intelectual de Lisboa. El poeta Fernando Pessoa pasó gran parte de su vida en sus cafés y librerías; la Brasileira, donde hay una estatua de bronce de Pessoa sentado en la terraza, fue su local habitual desde 1905. El Café A Brasileira sigue abierto, sigue siendo caro y turístico, y sigue siendo uno de los lugares más fotogénicos de Lisboa." },
      { tipo: "parrafo", texto: "En 1988, un incendio destruyó varios edificios del Chiado incluyendo el almacén Grandella. La reconstrucción fue encargada al arquitecto Álvaro Siza Vieira, que restauró las fachadas con una austeridad que respeta la escala histórica del barrio. El resultado es una de las reconstrucciones urbanas más respetadas de Europa: hay que mirar atentamente para distinguir lo nuevo de lo antiguo." },
      { tipo: "subtitulo", texto: "Las Librerías del Chiado" },
      { tipo: "parrafo", texto: "La Livraria Bertrand, en la Rua Garrett, es la librería más antigua del mundo en funcionamiento, según el Libro Guinness de los Récords: abierta en 1732. Es pequeña, con una disposición en varias salas conectadas, y tiene una sección en español más amplia de lo que esperarías. La Livraria do Intendente, en el barrio del mismo nombre, es más pequeña pero con una curaduría muy cuidada de libros y objetos de diseño." },
      { tipo: "subtitulo", texto: "El Bairro Alto: De Noche" },
      { tipo: "parrafo", texto: "El Bairro Alto de día es un barrio residencial tranquilo. De noche, a partir de las diez, se transforma en algo completamente diferente. Las calles estrechas del siglo XVI —con sus empedrados brillantes y sus fachadas azulejadas— se llenan de gente que va de bar en bar. El ambiente en las mejores noches de verano, con música que sale por todas las puertas abiertas y la gente bebiendo en la calle, es genuinamente festivo." },
      { tipo: "parrafo", texto: "El Bairro Alto tiene también las mejores casas de fado de Lisboa fuera de Alfama, y algunos de los mejores restaurantes de la ciudad. La Rua do Norte y la Rua da Barroca concentran la mayor densidad de opciones buenas. Cena antes de las 21:30 para conseguir mesa sin reserva." },
      { tipo: "subtitulo", texto: "El Museu do Chiado" },
      { tipo: "parrafo", texto: "El Museu Nacional de Arte Contemporânea do Chiado, instalado en el antiguo convento de São Francisco (quemado en el incendio de 1988 y reconstruido por Siza), tiene la colección más importante de arte portugués de los siglos XIX y XX. Los martes por la tarde (hasta las 18:00) la entrada es gratuita. Vale la visita por los jardines y la arquitectura aunque no seas especialmente aficionado al arte contemporáneo." },
      { tipo: "tip", texto: "Para el Chiado: llega antes de las 11:00 para el Café A Brasileira sin cola. La Livraria Bertrand abre a las 9:00. El Mirador de São Pedro de Alcântara, al final del Bairro Alto, tiene las mejores vistas del castillo de la zona y un jardín con bancos a la sombra." }
    ]
  },
  "mouraria-barrio-guia": {
    titulo: "Mouraria: El Barrio Más Multicultural y Auténtico de Lisboa",
    descripcion: "Mouraria fue el barrio moro de Lisboa durante siglos. Hoy es el lugar más multicultural, más auténtico y más gastronómico de la ciudad. Qué ver, comer y sentir.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
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
      { tipo: "tip", texto: "Mouraria es mejor visitarla sin plan fijo: callejea, entra en los comercios que te llamen la atención, acepta el café que te ofrezcan. La calle da Mouraria tiene una vista inesperada del Castillo al final que merece la caminata." }
    ]
  },
  "vinos-portugueses-guia": {
    titulo: "Vinos Portugueses: Guía para Entender el Vinho Verde, el Oporto y el Alentejo",
    descripcion: "Portugal tiene uno de los patrimonios vinícolas más ignorados de Europa. Vinho verde, vino de Oporto, Douro, Alentejo, Madeira... qué pedir, cómo pedirlo y dónde beberlo en Lisboa.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
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
    descripcion: "El tranvía 28 lleva más de 100 años subiendo las mismas cuestas de Alfama. Es el símbolo de Lisboa y también su trampa turística más popular. La historia real y cómo aprovecharlo.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    categoria: "Transporte",
    fecha: "14 Mar 2026",
    minutos: 9,
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
        "Usa la tarjeta Viva Viagem (1.50€ por viaje) en vez de pagar al conductor (3€): más barato y más rápido",
        "El tranvía 12 hace una ruta similar por el Chiado con menos cola: buena alternativa cuando el 28 está imposible"
      ]},
      { tipo: "tip", texto: "Si quieres la foto del tranvía 28 en las calles de Alfama sin subir: colócate en la esquina de la Rua de São Tomé con la Calçada de Santo André al atardecer. El tranvía pasa cada 8-12 minutos y la luz es perfecta." }
    ]
  },
  "bacalhau-plato-portugal": {
    titulo: "El Bacalhau: Por Qué el Bacalao Seco Es el Alma de la Cocina Portuguesa",
    descripcion: "Un pescado noruego, un país atlántico y 500 años de historia marítima. Cómo el bacalhau se convirtió en el plato nacional de Portugal y las mejores recetas que tienes que probar.",
    imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200",
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
    titulo: "La Arquitectura Manuelina: El Arte Único que Nació en Lisboa",
    descripcion: "El estilo manuelino es la respuesta artística de Portugal a los descubrimientos. Cuerdas de piedra, cruz de Cristo, armillas estelares. Dónde verlo en Lisboa y qué significa cada detalle.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    categoria: "Cultura",
    fecha: "11 Mar 2026",
    minutos: 10,
    contenido: [
      { tipo: "parrafo", texto: "Hay un momento en el claustro del Mosteiro dos Jerónimos en que el ojo no sabe dónde posarse. Las columnas están cubiertas de esculturas tan detalladas que cada metro cuadrado de piedra cuenta algo diferente: cuerdas trenzadas que recuerdan los aparejos de los barcos, esferas armilares que representan los instrumentos de navegación, cruces de la Orden de Cristo que identifican la misión religiosa de los descubrimientos, corales y algas marinas como si la piedra hubiera crecido en el fondo del océano. Eso es el estilo manuelino." },
      { tipo: "parrafo", texto: "El manuelino —llamado así en honor al rey Manuel I (1495-1521), el monarca bajo cuyo reinado se desarrolló— es el único estilo arquitectónico que Portugal ha exportado al mundo. No es solo decoración: es la expresión artística de una época en que Portugal era la primera potencia marítima del mundo y necesitaba una forma de contar esa historia en piedra." },
      { tipo: "subtitulo", texto: "Los Elementos Manuelinos: Lo que Ver Hay que Saber Leer" },
      { tipo: "lista", items: [
        "La esfera armilar: instrumento de navegación que representa el cosmos. Era el símbolo personal del rey Manuel I y aparece en los techos, columnas y portadas de todos los edificios del período",
        "La Cruz de Cristo: la cruz de la Orden de Cristo, la orden militar portuguesa que financió muchos de los descubrimientos. Aparece en las velas de los barcos portugueses y en casi toda la decoración manuelina",
        "Las cuerdas y los nodos marineros: esculpidos en piedra como si fueran cuerdas reales. Recuerdan el aparejo de los barcos y la habilidad marinera de los portugueses",
        "Los corales, las algas y los elementos marinos: la naturaleza del océano trasladada a la piedra. Una forma de decir que Portugal miraba al mar",
        "La decoración naturalista: hojas, flores, animales exóticos traídos de las colonias. El mundo nuevo que los navegantes descubrían, esculpido en los edificios del mundo viejo"
      ]},
      { tipo: "subtitulo", texto: "Dónde Ver el Mejor Manuelino en Lisboa" },
      { tipo: "parrafo", texto: "El Mosteiro dos Jerónimos en Belém es el ejemplo más completo y más exuberante del manuelino. La portada de la iglesia, diseñada por João de Castilho en el siglo XVI, es tan rica en decoración que el ojo necesita varios minutos para procesarla. Los claustros son el manuelino en su estado más equilibrado: decoración extraordinaria dentro de una estructura arquitectónica de gran elegancia." },
      { tipo: "parrafo", texto: "La Torre de Belém es más austera en decoración pero tiene algunos elementos manuelinos fascinantes: los matacanes en forma de escudos de la Orden de Cristo, los balcones con balaustradas de piedra tallada, y la cúpula del cuerpo superior con su decoración de esferas armilares. La Janela do Capítulo, una ventana decorada en el Convento de Cristo en Tomar (a 150 km de Lisboa), es la pieza cumbre del manuelino: dos horas de tren que merecen el viaje solo por verla." },
      { tipo: "tip", texto: "En Lisboa también hay elementos manuelinos en la Sé Catedral (el claustro tiene añadidos del período), en la Iglesia de la Conceição Velha en la Baixa (la portada lateral sobrevivió al terremoto de 1755), y en varios edificios del convento de São Francisco en el Chiado." }
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
  'historia-de-lisboa': '/images/alfama-panoramica.jpg',
  'terremoto-lisboa-1755': '/images/alfama-panoramica.jpg',
  'descubrimientos-portugueses-lisboa': '/images/hero-lisboa.jpg',
  'azulejos-portugueses-historia': '/images/claudio-luiz-castro-cFj656inKM0-unsplash.jpg',
  'novedades-lisboa-2026': '/images/paulo-evangelista-Ss3FBqiWwP4-unsplash.jpg',
  'festivales-eventos-lisboa-2026': '/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg',
  'lisboa-vs-porto': '/images/hero-lisboa.jpg',
  'monumentos-de-lisboa': '/images/alfama-panoramica.jpg',
  'semana-santa-lisboa-2026': '/images/joel-filipe-FrSDv3rVG-E-unsplash.jpg',
  'alfama-historia-guia': '/images/alfama-panoramica.jpg',
  'gastronomia-portuguesa-guia': '/images/IMG_1880.jpg',
  'fado-historia-origen': '/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg',
  'belem-barrio-guia': '/images/hero-lisboa.jpg',
  'chiado-bairro-alto-guia': '/images/tranvia-28.jpg',
  'mouraria-barrio-guia': '/images/alfama-panoramica.jpg',
  'vinos-portugueses-guia': '/images/vino-celebracion.jpg',
  'tram-28-historia-guia': '/images/tranvia-28.jpg',
  'bacalhau-plato-portugal': '/images/eduardo-goody-0Iu7mKa1sPw-unsplash.jpg',
  'arquitectura-manuelina-lisboa': '/images/alfama-panoramica.jpg',
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
        {/* Categoría + meta */}
        <p className="text-xs text-text-secondary uppercase tracking-widest mb-3">
          {article.categoria} &mdash; {article.fecha} &mdash; {article.minutos} min lectura
        </p>

        {/* Título */}
        <h1 className="font-display italic text-text-main text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
          {article.titulo}
        </h1>

        {/* Lead */}
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-6 pb-6 border-b border-border-soft">
          {article.descripcion}
        </p>
      </header>

      {/* Imagen destacada */}
      <figure className="max-w-5xl mx-auto px-4 mb-10">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={heroImage}
            alt={`${article.titulo} — Lisboa`}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
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

            {/* Resumen */}
            {takeaways.length > 0 && (
              <div className="border-l-2 border-primary pl-6 mb-8">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-3">Lo esencial</p>
                <ul className="space-y-2">
                  {takeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cómo llegar / Mejor hora */}
            {extras && (
              <div className="border-t border-border-soft pt-6 mb-8 grid sm:grid-cols-2 gap-6">
                <div>
                  <h2 id="como-llegar" className="font-semibold text-text-main text-sm mb-2 scroll-mt-28">Cómo llegar</h2>
                  <p className="text-text-secondary text-sm leading-relaxed">{extras.comoLlegar}</p>
                </div>
                <div>
                  <h2 id="mejor-hora" className="font-semibold text-text-main text-sm mb-2 scroll-mt-28">Mejor hora para ir</h2>
                  <p className="text-text-secondary text-sm leading-relaxed">{extras.mejorHora}</p>
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
                      <blockquote key={index} className="border-l-4 border-primary bg-background-light px-6 py-4 my-8 not-prose">
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
                    <ul key={index} className="space-y-2 mb-6 not-prose">
                      {bloque.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary text-sm leading-relaxed">
                          <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (bloque.tipo === 'tip') {
                  return (
                    <div key={index} className="border-l-2 border-primary pl-5 py-2 mb-6 not-prose">
                      <p className="text-text-secondary text-sm leading-relaxed italic">{bloque.texto}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Separador */}
            <hr className="my-12 border-slate-200" />

            {/* FAQs */}
            <section className="mb-12">
              <h3 className="font-display italic text-text-main text-2xl mb-6">Preguntas frecuentes</h3>
              <div className="space-y-0">
                {faqs.map((faq, i) => (
                  <details key={i} className="group border-t border-border-soft">
                    <summary className="flex items-start justify-between py-5 cursor-pointer gap-4">
                      <h4 className="font-semibold text-text-main text-sm leading-snug">{faq.q}</h4>
                      <span className="text-text-secondary flex-shrink-0 text-lg leading-none group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="pb-5 text-text-secondary text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA final */}
            <div className="bg-[#1a2b4a] p-8 text-center">
              <h3 className="font-display italic text-white text-2xl mb-3">
                ¿Quieres esto organizado paso a paso?
              </h3>
              <p className="text-white/60 mb-6 text-sm max-w-md mx-auto">
                Rutas hora a hora, GPS en cada parada, restaurantes probados. Menos que un café.
              </p>
              <Link
                href="/itinerarios"
                className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors text-sm"
              >
                Ver guías desde 2 €
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-10 lg:sticky lg:top-24 lg:self-start">
            {/* Tabla de contenidos */}
            {headings.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-4 pb-3 border-b border-border-soft">En este artículo</p>
                <nav className="space-y-2">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block text-sm text-text-secondary hover:text-primary transition-colors py-1"
                    >
                      {heading.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* También te interesa */}
            <div>
              <p className="text-xs uppercase tracking-widest text-text-secondary mb-4 pb-3 border-b border-border-soft">También te interesa</p>
              <ul className="space-y-3">
                {internalLinks.slice(0, 5).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-text-secondary hover:text-primary transition-colors">
                      {item.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini CTA */}
            <div className="border-t-2 border-primary pt-5">
              <p className="font-semibold text-text-main text-sm mb-2">¿Primera vez en Lisboa?</p>
              <p className="text-text-secondary text-xs mb-4 leading-relaxed">Descubre tu perfil viajero en 60 segundos</p>
              <Link
                href="/quiz"
                className="block w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-xs font-semibold text-center transition-colors"
              >
                Hacer el quiz
              </Link>
            </div>
          </aside>
        </div>

        {/* Relacionados */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-border-soft">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display italic text-text-main text-2xl">Relacionadas</h3>
              <Link href="/blog" className="text-sm text-primary hover:underline underline-offset-2">
                Ver todo →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
              {relatedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                  <div className="relative aspect-[16/10] overflow-hidden mb-3">
                    <Image
                      src={post.imagen}
                      alt={post.titulo}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-xs text-text-secondary uppercase tracking-widest mb-1">{post.categoria}</p>
                  <h4 className="font-display italic text-text-main group-hover:text-primary transition-colors leading-snug">
                    {post.titulo}
                  </h4>
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
