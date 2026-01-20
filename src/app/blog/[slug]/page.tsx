import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';

const articles: Record<string, {
  titulo: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  fecha: string;
  minutos: number;
  contenido: { tipo: string; texto?: string; items?: string[]; imagen?: string; caption?: string }[];
}> = {
  "mejores-miradores-lisboa": {
    titulo: "Los 10 mejores miradores de Lisboa",
    descripcion: "Desde los clasicos hasta los secretos que solo conocen los locales.",
    imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200",
    categoria: "Guías",
    fecha: "20 Dic 2024",
    minutos: 8,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa es la ciudad de las siete colinas, y eso significa una cosa: vistas increibles desde casi cualquier punto alto. Pero no todos los miradores son iguales. Algunos estan llenos de turistas, otros son secretos locales, y algunos tienen el mejor atardecer que veras en tu vida." },
      { tipo: "parrafo", texto: "Despues de vivir en Lisboa y explorar cada rincon, aqui te dejo mi ranking definitivo de los mejores miradores." },
      { tipo: "subtitulo", texto: "1. Mirador da Senhora do Monte" },
      { tipo: "parrafo", texto: "El favorito de los locales. Esta alejado del centro turistico, lo que significa menos gente y vistas mas autenticas. Desde aqui ves toda Lisboa: el castillo, el rio, los tejados rojos. El mejor momento es al atardecer, cuando el sol pinta todo de naranja." },
      { tipo: "tip", texto: "Llega 30 minutos antes del atardecer para coger buen sitio. Lleva algo de beber, no hay bares cerca." },
      { tipo: "subtitulo", texto: "2. Mirador de Santa Luzia" },
      { tipo: "parrafo", texto: "El mas fotografiado de Lisboa, y con razon. Los azulejos azules, las buganvillas moradas, y las vistas al barrio de Alfama crean la postal perfecta. Esta siempre lleno, pero merece la pena madrugar." },
      { tipo: "tip", texto: "Ve antes de las 10am para fotos sin gente. Los azulejos son del siglo XVIII y cuentan la historia de Lisboa." },
      { tipo: "subtitulo", texto: "3. Mirador das Portas do Sol" },
      { tipo: "parrafo", texto: "Justo al lado de Santa Luzia, pero con una terraza mas grande y un kiosco donde tomar algo. Las vistas son similares pero el ambiente es mas relajado. Perfecto para sentarte un rato." },
      { tipo: "subtitulo", texto: "4. Mirador da Graca" },
      { tipo: "parrafo", texto: "Terraza amplia con cafeteria, vistas al castillo y ambiente local. Los fines de semana se llena de familias portuguesas. El cafe es barato y las vistas son gratis." },
      { tipo: "subtitulo", texto: "5. Elevador de Santa Justa (arriba)" },
      { tipo: "parrafo", texto: "Si, hay que pagar para subir (o usar la Lisboa Card), pero las vistas de 360 grados sobre la Baixa merecen la pena. Tambien puedes subir gratis por las escaleras del Carmo y acceder solo a la terraza." },
      { tipo: "tip", texto: "El truco local: sube por el ascensor del Centro Comercial do Carmo (gratis) y camina hasta la terraza." },
      { tipo: "subtitulo", texto: "6. Castelo de Sao Jorge" },
      { tipo: "parrafo", texto: "Hay que pagar entrada, pero las vistas desde las murallas son las mas completas de Lisboa. Ves el rio, el puente, la ciudad entera. Ademas el castillo en si es interesante." },
      { tipo: "subtitulo", texto: "7. Mirador de Santa Catarina (Adamastor)" },
      { tipo: "parrafo", texto: "El mirador mas alternativo. Ambiente joven, musica, cervezas al atardecer. La estatua del Adamastor vigila el rio. Muy popular entre erasmus y jovenes portugueses." },
      { tipo: "subtitulo", texto: "8. Mirador de Sao Pedro de Alcantara" },
      { tipo: "parrafo", texto: "En el Bairro Alto, con vistas al castillo y a la Baixa. Tiene un jardin bonito y esta bien conectado. Buen punto para empezar una noche por el barrio." },
      { tipo: "subtitulo", texto: "9. LX Factory (terraza)" },
      { tipo: "parrafo", texto: "No es un mirador tradicional, pero la terraza del LX Factory tiene vistas al puente 25 de Abril que parecen de pelicula. Perfecto para combinar con brunch o compras." },
      { tipo: "subtitulo", texto: "10. Mirador del Parque das Nacoes" },
      { tipo: "parrafo", texto: "El mas moderno. Vistas al rio Tajo y a la arquitectura contemporanea de la Expo 98. Diferente al Lisboa clasico, pero igual de bonito. El teleferico te da vistas aereas." },
      { tipo: "subtitulo", texto: "Mapa de todos los miradores" },
      { tipo: "parrafo", texto: "En nuestros itinerarios incluimos la ubicacion exacta de cada mirador, el mejor horario para visitarlo, y rutas optimizadas para no subir colinas innecesarias." }
    ]
  },
  "donde-comer-barato-lisboa": {
    titulo: "Donde comer barato en Lisboa (2024)",
    descripcion: "Tascas, mercados y restaurantes locales donde comer bien por menos de 15 euros.",
    imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200",
    categoria: "Gastronomía",
    fecha: "18 Dic 2024",
    minutos: 6,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa puede ser cara si comes en zonas turisticas, pero los locales saben donde encontrar comida increible a precios normales. Aqui te cuento mis sitios favoritos despues de anos viviendo aqui." },
      { tipo: "subtitulo", texto: "Regla numero 1: Evita las zonas turisticas" },
      { tipo: "parrafo", texto: "Rossio, Baixa, y la zona del castillo tienen precios inflados. Alejate unas calles y los precios bajan a la mitad. El mismo plato que cuesta 18 euros en Rossio cuesta 9 en Mouraria." },
      { tipo: "subtitulo", texto: "Tascas tradicionales (8-12 EUR)" },
      { tipo: "lista", items: [
        "Tasca do Chico (Bairro Alto) - Fado gratis y platos del dia a 8 euros",
        "Ti Natalia (Mouraria) - Menu completo por 9 euros, cocina casera",
        "Taberna da Rua das Flores - Petiscos (tapas) desde 4 euros",
        "Casa da India (Cais do Sodre) - Comida portuguesa autentica, menu 10 euros"
      ]},
      { tipo: "subtitulo", texto: "Mercados y food courts (5-10 EUR)" },
      { tipo: "parrafo", texto: "Los mercados son la mejor opcion para comer variado y barato. Puedes probar varios platos pequenos en vez de uno grande." },
      { tipo: "lista", items: [
        "Time Out Market - Turistico pero con buenos puestos, desde 8 euros",
        "Mercado da Ribeira (parte tradicional) - El lado no turistico, frutas y comida local",
        "Mercado de Arroios - 100% local, menu del dia 7 euros",
        "LX Factory - Brunch y street food, 8-12 euros"
      ]},
      { tipo: "subtitulo", texto: "Comida rapida portuguesa (3-6 EUR)" },
      { tipo: "lista", items: [
        "Bifanas (bocadillo de cerdo) - 3-4 euros en cualquier tasca",
        "Pasteis de bacalhau - 1.50 euros cada uno",
        "Francesinha - El sandwich de Oporto, 8-10 euros pero enorme",
        "Prego no pao - Bocadillo de ternera, 4-5 euros"
      ]},
      { tipo: "tip", texto: "Pide 'prato do dia' (plato del dia) en cualquier tasca. Siempre es la opcion mas barata y fresca." },
      { tipo: "subtitulo", texto: "Supermercados y picnic (3-5 EUR)" },
      { tipo: "parrafo", texto: "Para el almuerzo, compra en Pingo Doce o Continente: pan fresco, queso, jamon, fruta. Lleva todo a un mirador y tienes el mejor almuerzo con vistas por 5 euros." },
      { tipo: "subtitulo", texto: "Mis 3 sitios secretos" },
      { tipo: "parrafo", texto: "Estos no salen en TripAdvisor y quiero que siga asi:" },
      { tipo: "lista", items: [
        "Cervejaria Ramiro para el arroz de marisco (caro pero vale cada euro)",
        "O Velho Eurico en Alfama - Solo tiene 4 mesas, menu 8 euros",
        "Ponto Final en Cacilhas - Cruza el rio en ferry, comes con vistas a Lisboa por 10 euros"
      ]}
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
  "transporte-publico-lisboa": {
    titulo: "Guia Completa del Transporte Publico en Lisboa",
    descripcion: "Metro, tranvia, autobus y tarjetas. Todo lo que necesitas saber para moverte como un local.",
    imagen: "/images/tranvia-28.jpg",
    categoria: "Transporte",
    fecha: "22 Nov 2024",
    minutos: 10,
    contenido: [
      { tipo: "parrafo", texto: "El transporte publico en Lisboa funciona bien, pero puede ser confuso la primera vez. Metro, tranvias, autobuses, elevadores... Aqui te explico todo para que te muevas como un local." },
      { tipo: "subtitulo", texto: "Tarjeta Viva Viagem: La clave de todo" },
      { tipo: "parrafo", texto: "Es la tarjeta que necesitas para todo. La compras en cualquier estacion de metro (0.50 EUR) y la cargas con viajes o pases diarios. Funciona en metro, autobus, tranvia y elevadores." },
      { tipo: "lista", items: [
        "Costo de la tarjeta: 0.50 EUR (se compra una vez, la recargas)",
        "Viaje simple: 1.50 EUR (zona 1, que es casi toda Lisboa)",
        "Pase diario: 6.40 EUR (viajes ilimitados en 24 horas)",
        "Validez: 1 ano desde la ultima recarga"
      ]},
      { tipo: "tip", texto: "Compra la tarjeta el primer dia y carga un pase diario. Te ahorrara tiempo y dinero." },
      { tipo: "subtitulo", texto: "Metro: Rapido y eficiente" },
      { tipo: "parrafo", texto: "El metro de Lisboa tiene 4 lineas y conecta los barrios principales. Es limpio, puntual y la mejor opcion para distancias largas." },
      { tipo: "lista", items: [
        "Lineas: Azul, Amarela, Verde, Roja",
        "Frecuencia: Cada 3-6 minutos en hora punta",
        "Horario: 6:30 - 1:00 (domingos hasta 1:00)",
        "Estaciones principales: Rossio, Cais do Sodre, Baixa-Chiado"
      ]},
      { tipo: "subtitulo", texto: "Tranvia: Iconico pero lento" },
      { tipo: "parrafo", texto: "El tranvia 28 es el mas famoso, pero es lento y siempre esta lleno de turistas. Los tranvias 15 y 25 son mas utiles para moverse realmente." },
      { tipo: "lista", items: [
        "Tranvia 28: Paseo turistico (evita si tienes prisa)",
        "Tranvia 15: Belem - Cais do Sodre - Martim Moniz",
        "Tranvia 25: Prazeres - Praca da Figueira",
        "Precio: 3 EUR (sin tarjeta) o 1.50 EUR (con Viva Viagem)"
      ]},
      { tipo: "tip", texto: "Si quieres subir al 28 sin cola, ve antes de las 8am o despues de las 7pm. O usa el 12 (menos turistico, misma ruta)." },
      { tipo: "subtitulo", texto: "Elevadores: Utiles para subir colinas" },
      { tipo: "parrafo", texto: "Lisboa tiene colinas. Los elevadores te ahorran subir a pie. Los mas utiles son el Gloria, el Lavra y la Bica." },
      { tipo: "lista", items: [
        "Elevador da Gloria: Restauradores - Bairro Alto (3.80 EUR)",
        "Elevador da Bica: Cais do Sodre - Bairro Alto",
        "Elevador do Lavra: Largo da Anunciada - Campo Santana",
        "Elevador de Santa Justa: Baixa - Chiado (pagando, o gratis por las escaleras)"
      ]},
      { tipo: "subtitulo", texto: "Autobuses: Para barrios sin metro" },
      { tipo: "parrafo", texto: "Los autobuses conectan barrios que el metro no alcanza. Utiles para llegar a Graça, Estrela o zonas residenciales." },
      { tipo: "lista", items: [
        "Lineas principales: 28, 758, 790 (algunas coinciden con el tranvia)",
        "App util: Carris (rutas y horarios en tiempo real)",
        "Precio: 2 EUR (sin tarjeta) o 1.50 EUR (con Viva Viagem)"
      ]},
      { tipo: "subtitulo", texto: "Uber y Bolt: Alternativa comoda" },
      { tipo: "parrafo", texto: "Uber y Bolt funcionan bien en Lisboa y son baratos comparado con otras capitales europeas. Un trayecto corto cuesta 3-6 EUR." },
      { tipo: "tip", texto: "Para llegar desde el aeropuerto, Uber cuesta unos 15 EUR. Mas barato que el taxi y mas comodo que el autobus." }
    ]
  },
  "restaurantes-romanticos-lisboa": {
    titulo: "10 Restaurantes Romanticos en Lisboa",
    descripcion: "Cenas con vistas, terrazas intimas y ambiente especial para una noche perfecta en pareja.",
    imagen: "/images/joel-filipe-FrSDv3rVG-E-unsplash.jpg",
    categoria: "Gastronomía",
    fecha: "20 Nov 2024",
    minutos: 8,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa tiene restaurantes perfectos para una cena romantica. Vistas al rio, terrazas intimas, fado en directo. Aqui mis favoritos para una noche especial." },
      { tipo: "subtitulo", texto: "1. Solar dos Presuntos" },
      { tipo: "parrafo", texto: "En Principe Real, ambiente intimo y comida portuguesa refinada. Perfecto para una cena elegante sin ser pretencioso." },
      { tipo: "lista", items: [
        "Precio: 40-60 EUR por persona",
        "Reservas: Necesarias con antelacion",
        "Especialidad: Bacalao y mariscos"
      ]},
      { tipo: "subtitulo", texto: "2. Chapitô à Mesa" },
      { tipo: "parrafo", texto: "Terraza con vistas panoramicas al castillo y al rio. Ambiente bohemio y comida creativa. Ideal para atardecer." },
      { tipo: "lista", items: [
        "Precio: 30-50 EUR por persona",
        "Vista: Increible al atardecer",
        "Tip: Reserva mesa en la terraza"
      ]},
      { tipo: "subtitulo", texto: "3. Ponto Final (Cacilhas)" },
      { tipo: "parrafo", texto: "Cruza el rio en ferry y comes con vistas directas a Lisboa. Ambiente local, comida tradicional, precio justo." },
      { tipo: "lista", items: [
        "Precio: 20-30 EUR por persona",
        "Como llegar: Ferry desde Cais do Sodre (2 EUR)",
        "Especialidad: Pescado a la parrilla"
      ]},
      { tipo: "tip", texto: "El ferry tarda 10 minutos y es una experiencia en si misma. Vistas increibles de Lisboa desde el rio." },
      { tipo: "subtitulo", texto: "4. Belcanto (2 estrellas Michelin)" },
      { tipo: "parrafo", texto: "Si buscas alta cocina, este es el mejor restaurante de Lisboa. Menu degustacion de 8 platos, experiencia unica pero cara." },
      { tipo: "lista", items: [
        "Precio: 180-250 EUR por persona",
        "Reservas: Con meses de antelacion",
        "Menu: Degustacion de 8 platos"
      ]},
      { tipo: "subtitulo", texto: "5. A Cevicheria" },
      { tipo: "parrafo", texto: "Pulpo gigante colgando del techo, ceviche creativo y ambiente moderno. Diferente pero romantico." },
      { tipo: "lista", items: [
        "Precio: 35-50 EUR por persona",
        "Especialidad: Ceviche y mariscos",
        "Ambiente: Moderno y casual"
      ]},
      { tipo: "subtitulo", texto: "6. Cervejaria Ramiro" },
      { tipo: "parrafo", texto: "No es romantico en el sentido clasico, pero si te gusta el marisco, este es el templo. Gambas, langosta, percebes. Siempre lleno, siempre bueno." },
      { tipo: "lista", items: [
        "Precio: 50-80 EUR por persona",
        "Especialidad: Mariscos frescos",
        "Tip: Ve temprano o espera cola"
      ]},
      { tipo: "subtitulo", texto: "7. Tasca da Esquina" },
      { tipo: "parrafo", texto: "En Campo de Ourique, comida portuguesa moderna en platos pequeños. Ambiente intimo y servicio excelente." },
      { tipo: "lista", items: [
        "Precio: 40-60 EUR por persona",
        "Estilo: Tapas portuguesas modernas",
        "Reservas: Recomendadas"
      ]},
      { tipo: "subtitulo", texto: "8. Restaurante Eleven" },
      { tipo: "parrafo", texto: "Vistas al parque Eduardo VII, alta cocina portuguesa. Elegante pero no excesivo. Perfecto para una ocasion especial." },
      { tipo: "lista", items: [
        "Precio: 70-100 EUR por persona",
        "Vista: Parque y ciudad",
        "Ambiente: Elegante y relajado"
      ]},
      { tipo: "subtitulo", texto: "9. Taberna da Rua das Flores" },
      { tipo: "parrafo", texto: "Solo tiene 4 mesas, reservas obligatorias. Ambiente intimo y comida tradicional portuguesa excelente. Muy local." },
      { tipo: "lista", items: [
        "Precio: 25-35 EUR por persona",
        "Reservas: Con semanas de antelacion",
        "Ambiente: Intimo y local"
      ]},
      { tipo: "subtitulo", texto: "10. Cafe Luso (con Fado)" },
      { tipo: "parrafo", texto: "Cena con espectaculo de fado en directo. Ambiente tradicional, comida decente y musica portuguesa autentica." },
      { tipo: "lista", items: [
        "Precio: 60-80 EUR por persona (incluye cena y show)",
        "Show: Fado en vivo todas las noches",
        "Reservas: Recomendadas"
      ]},
      { tipo: "tip", texto: "Para una propuesta de matrimonio, Chapitô à Mesa o Ponto Final tienen las mejores vistas. Reserva con tiempo y avisa al restaurante." }
    ]
  },
  "que-ver-cascais-desde-lisboa": {
    titulo: "Que Ver en Cascais desde Lisboa: Guia Completa",
    descripcion: "Pueblo costero, playas y palacios. La excursion perfecta de un dia desde la capital.",
    imagen: "/images/paulo-evangelista-Ss3FBqiWwP4-unsplash.jpg",
    categoria: "Guías",
    fecha: "18 Nov 2024",
    minutos: 7,
    contenido: [
      { tipo: "parrafo", texto: "Cascais es el pueblo costero mas elegante cerca de Lisboa. Playas, palacios, paseo maritimo. A solo 30 minutos en tren, es la excursion perfecta de un dia." },
      { tipo: "subtitulo", texto: "Como llegar a Cascais" },
      { tipo: "parrafo", texto: "El tren sale de Cais do Sodre cada 20 minutos. El viaje dura 30-40 minutos y cuesta 2.30 EUR por trayecto. La linea sigue la costa, con vistas al mar todo el camino." },
      { tipo: "lista", items: [
        "Estacion: Cais do Sodre (linea verde de metro)",
        "Duracion: 30-40 minutos",
        "Precio: 2.30 EUR (ida), 4.60 EUR (ida y vuelta)",
        "Frecuencia: Cada 20 minutos"
      ]},
      { tipo: "tip", texto: "Sientate del lado izquierdo (viniendo desde Lisboa) para las mejores vistas al mar." },
      { tipo: "subtitulo", texto: "Que ver en Cascais" },
      { tipo: "parrafo", texto: "Cascais es pequeño, se puede ver caminando. El centro historico, la playa, los palacios. Todo esta cerca." },
      { tipo: "subtitulo", texto: "1. Centro Historico" },
      { tipo: "parrafo", texto: "Calles peatonales con tiendas, restaurantes y heladerias. El ambiente es relajado, menos turistico que el centro de Lisboa. Perfecto para pasear sin prisa." },
      { tipo: "subtitulo", texto: "2. Praia da Conceicao" },
      { tipo: "parrafo", texto: "La playa principal del pueblo, justo en el centro. Arena dorada, agua limpia, paseo maritimo. En verano esta llena, pero en otras epocas es tranquila." },
      { tipo: "tip", texto: "En verano llega temprano para coger sitio en la playa. O camina 10 minutos a Praia da Rainha (mas pequeña pero mas bonita)." },
      { tipo: "subtitulo", texto: "3. Museo Condes de Castro Guimaraes" },
      { tipo: "parrafo", texto: "Palacio del siglo XIX convertido en museo. Los jardines son gratis y bonitos. El museo cuesta 5 EUR, pero los jardines ya valen la pena." },
      { tipo: "subtitulo", texto: "4. Boca do Inferno" },
      { tipo: "parrafo", texto: "Formacion rocosa donde el mar entra con fuerza. Impresionante cuando hay oleaje. A 2 km del centro, se puede llegar caminando por el paseo maritimo." },
      { tipo: "lista", items: [
        "Distancia: 2 km desde el centro",
        "Tiempo: 25 minutos caminando",
        "Mejor momento: Cuando hay oleaje"
      ]},
      { tipo: "subtitulo", texto: "5. Citadel de Cascais" },
      { tipo: "parrafo", texto: "Fortaleza del siglo XVII que protegia el puerto. Ahora alberga una residencia presidencial y tiene un hotel de lujo. Se puede visitar parcialmente." },
      { tipo: "subtitulo", texto: "Donde comer en Cascais" },
      { tipo: "parrafo", texto: "Cascais tiene buenos restaurantes, especialmente de pescado y mariscos. Los precios son similares a Lisboa, un poco mas altos en temporada." },
      { tipo: "lista", items: [
        "Porto de Santa Maria - Pescado fresco frente al mar (30-50 EUR)",
        "Santini - Los mejores helados de Portugal (3-5 EUR)",
        "O Pescador - Pescado tradicional a buen precio (20-30 EUR)"
      ]},
      { tipo: "subtitulo", texto: "Itinerario recomendado" },
      { tipo: "lista", items: [
        "9:00 - Tren desde Cais do Sodre",
        "9:40 - Llegada a Cascais, paseo por el centro",
        "11:00 - Visita al Museo (o solo los jardines)",
        "12:30 - Comida en Porto de Santa Maria",
        "14:00 - Caminata a Boca do Inferno",
        "15:30 - Vuelta al centro, helado en Santini",
        "16:00 - Playa (si hace buen tiempo) o mas paseo",
        "17:00 - Tren de vuelta a Lisboa"
      ]},
      { tipo: "tip", texto: "Si quieres combinar Cascais y Sintra en un dia, no lo recomiendo. Mejor dedicar un dia completo a cada uno." }
    ]
  },
  "playas-cerca-lisboa": {
    titulo: "Las Mejores Playas Cerca de Lisboa",
    descripcion: "Costa de Lisboa, Cascais, Sesimbra y Arrabida. Arenas doradas y agua cristalina a menos de 1 hora.",
    imagen: "/images/yuliia-sereda-qRF4TQbiXfc-unsplash.jpg",
    categoria: "Guías",
    fecha: "15 Nov 2024",
    minutos: 8,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa no tiene playa en el centro, pero a menos de 1 hora hay playas increibles. Cascais, Sesimbra, Costa da Caparica y Arrabida. Aqui las mejores opciones." },
      { tipo: "subtitulo", texto: "1. Cascais (30 minutos)" },
      { tipo: "parrafo", texto: "La opcion mas facil. Tren desde Cais do Sodre, playa en el centro del pueblo. Praia da Conceicao es la principal, pero Praia da Rainha (mas pequeña) es mas bonita." },
      { tipo: "lista", items: [
        "Transporte: Tren desde Cais do Sodre (2.30 EUR)",
        "Duracion: 30-40 minutos",
        "Playas: Conceicao, Rainha, Duquesa"
      ]},
      { tipo: "subtitulo", texto: "2. Costa da Caparica (45 minutos)" },
      { tipo: "parrafo", texto: "Kilometros de playa virgen al sur del Tajo. Menos turistica que Cascais, mas salvaje. Perfecta si buscas espacio y naturaleza." },
      { tipo: "lista", items: [
        "Transporte: Autobus desde Praça de Espanha (4 EUR)",
        "Duracion: 45 minutos",
        "Mejor para: Surf, espacio, menos gente"
      ]},
      { tipo: "subtitulo", texto: "3. Sesimbra (1 hora)" },
      { tipo: "parrafo", texto: "Pueblo pesquero con playa familiar. Agua calma, arena fina, restaurantes de pescado fresco. Mas autentico que Cascais." },
      { tipo: "lista", items: [
        "Transporte: Autobus desde Sete Rios (5 EUR)",
        "Duracion: 1 hora",
        "Ambiente: Local y familiar"
      ]},
      { tipo: "subtitulo", texto: "4. Praia de Adraga (1 hora)" },
      { tipo: "parrafo", texto: "Al lado de Sintra, una de las playas mas bonitas de Portugal. Formaciones rocosas, cuevas, ambiente salvaje. Hay que caminar 10 minutos desde el parking." },
      { tipo: "lista", items: [
        "Transporte: Coche o tour desde Sintra",
        "Duracion: 1 hora desde Lisboa",
        "Mejor para: Fotos, naturaleza, aislamiento"
      ]},
      { tipo: "subtitulo", texto: "5. Praias da Arrabida (1 hora)" },
      { tipo: "parrafo", texto: "Reserva natural con playas paradisiacas. Agua turquesa, arena blanca, rodeadas de naturaleza. Galapos es la mas accesible." },
      { tipo: "lista", items: [
        "Transporte: Coche recomendado",
        "Duracion: 1 hora",
        "Mejor para: Naturaleza, snorkel, belleza"
      ]},
      { tipo: "tip", texto: "En verano, llega temprano a las playas de Arrabida. El parking se llena y el acceso puede estar limitado." },
      { tipo: "subtitulo", texto: "Mejor epoca para ir" },
      { tipo: "parrafo", texto: "Las playas son bonitas todo el ano, pero para bañarse mejor de junio a septiembre. Mayo y octubre tambien funcionan si hace buen tiempo. El resto del ano son perfectas para pasear." }
    ]
  },
  "donde-escuchar-fado-autentico": {
    titulo: "Donde Escuchar Fado Autentico en Lisboa",
    descripcion: "Bares locales, restaurantes historicos y casas de fado. La musica portuguesa en su estado mas puro.",
    imagen: "/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg",
    categoria: "Cultura",
    fecha: "12 Nov 2024",
    minutos: 6,
    contenido: [
      { tipo: "parrafo", texto: "El fado es la musica del alma portuguesa. Melancolico, profundo, autentico. En Lisboa hay dos tipos: fado turistico y fado verdadero. Aqui te digo donde encontrar el verdadero." },
      { tipo: "subtitulo", texto: "Fado turistico vs Fado autentico" },
      { tipo: "parrafo", texto: "El fado turistico es en restaurantes grandes con shows caros. El fado autentico es en bares pequenos, sin microfono, con locales que cantan por amor a la musica." },
      { tipo: "subtitulo", texto: "1. Tasca do Chico (Bairro Alto)" },
      { tipo: "parrafo", texto: "El bar de fado mas autentico de Lisboa. Pequeno, sin reservas, los fadistas locales aparecen y cantan. Gratis, pero compra algo de beber. Llega temprano o espera fuera." },
      { tipo: "lista", items: [
        "Precio: Gratis (solo consumicion)",
        "Horario: 19:00 - 2:00",
        "Fado: Miercoles y domingos a las 20:00",
        "Ambiente: 100% local"
      ]},
      { tipo: "tip", texto: "Llega antes de las 20:00 para coger sitio. El lugar es pequeno y se llena rapido." },
      { tipo: "subtitulo", texto: "2. A Baiona (Alfama)" },
      { tipo: "parrafo", texto: "Bar de fado local en Alfama. Fadistas amateur cantan mientras la gente bebe. Ambiente intimo, sin turistas. El mejor para escuchar fado de verdad." },
      { tipo: "lista", items: [
        "Precio: Gratis (solo consumicion)",
        "Horario: Desde las 20:00",
        "Fado: Todos los dias",
        "Ambiente: Local y autentico"
      ]},
      { tipo: "subtitulo", texto: "3. Clube de Fado (Alfama)" },
      { tipo: "parrafo", texto: "Restaurante con fado profesional. Mas estructurado que los bares, pero con fadistas reconocidos. Buena comida portuguesa y show de calidad." },
      { tipo: "lista", items: [
        "Precio: 60-80 EUR (cena + show)",
        "Reservas: Recomendadas",
        "Fado: Show profesional todas las noches",
        "Ambiente: Elegante pero autentico"
      ]},
      { tipo: "subtitulo", texto: "4. A Tasca do Chico (Graca)" },
      { tipo: "parrafo", texto: "Otro bar local, esta vez en Graca. Fado mas espontaneo, menos estructurado. Los locales cantan cuando les apetece. Muy autentico." },
      { tipo: "subtitulo", texto: "5. Senhor Fado (Alfama)" },
      { tipo: "parrafo", texto: "Restaurante pequeno con fado en vivo. Buena relacion calidad-precio. Fado tradicional, comida portuguesa decente." },
      { tipo: "lista", items: [
        "Precio: 40-50 EUR (cena + show)",
        "Reservas: Recomendadas",
        "Fado: Todas las noches",
        "Ambiente: Intimo y local"
      ]},
      { tipo: "tip", texto: "Durante el fado, no hables ni hagas ruido. Es de mala educacion. Disfruta el silencio y la musica." },
      { tipo: "subtitulo", texto: "Que evitar" },
      { tipo: "parrafo", texto: "Restaurantes en Rossio o Baixa con carteles de 'Fado Show'. Son caros, turisticos y el fado no es autentico. Mejor ir a los bares locales de Alfama o Bairro Alto." }
    ]
  },
  "presupuesto-viajar-lisboa": {
    titulo: "Presupuesto Real para Viajar a Lisboa: Dia a Dia",
    descripcion: "Cuanto cuesta realmente comer, dormir y moverse. Analisis honesto de precios en 2024.",
    imagen: "/images/veronika-jorjobert-mR_AxcbVivg-unsplash.jpg",
    categoria: "Planificación",
    fecha: "10 Nov 2024",
    minutos: 9,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa puede ser cara o barata, depende de como viajes. He hecho los calculos reales para que sepas exactamente cuanto cuesta un viaje a Lisboa en 2024." },
      { tipo: "subtitulo", texto: "Presupuesto bajo (30-40 EUR/dia)" },
      { tipo: "parrafo", texto: "Si viajas con presupuesto ajustado, puedes hacerlo. Hostel, comida en tascas locales, transporte publico y actividades gratis." },
      { tipo: "lista", items: [
        "Alojamiento: Hostel 15-20 EUR/noche",
        "Comida: 10-15 EUR/dia (tascas y supermercado)",
        "Transporte: 6.40 EUR (pase diario)",
        "Actividades: Gratis (miradores, pasear, playas)",
        "TOTAL: 31-41 EUR/dia"
      ]},
      { tipo: "subtitulo", texto: "Presupuesto medio (60-80 EUR/dia)" },
      { tipo: "parrafo", texto: "Con este presupuesto tienes mas comodidad: hotel decente, comer en restaurantes buenos, algunas actividades pagas." },
      { tipo: "lista", items: [
        "Alojamiento: Hotel 50-60 EUR/noche",
        "Comida: 20-25 EUR/dia (restaurantes locales)",
        "Transporte: 6.40 EUR (pase diario)",
        "Actividades: 10-15 EUR (museos, entradas)",
        "TOTAL: 86-106 EUR/dia"
      ]},
      { tipo: "tip", texto: "Compartir habitacion en hotel baja el presupuesto a 40-50 EUR por persona." },
      { tipo: "subtitulo", texto: "Presupuesto alto (100-150 EUR/dia)" },
      { tipo: "parrafo", texto: "Con este presupuesto vives bien: hotel bueno, restaurantes de calidad, tours y actividades." },
      { tipo: "lista", items: [
        "Alojamiento: Hotel 80-100 EUR/noche",
        "Comida: 40-50 EUR/dia (restaurantes buenos)",
        "Transporte: 6.40 EUR o Uber ocasional",
        "Actividades: 20-30 EUR (tours, museos, Sintra)",
        "TOTAL: 146-186 EUR/dia"
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
    titulo: "Los Mejores Mercados de Lisboa: Guia Completa",
    descripcion: "Time Out Market, Feira da Ladra, mercados locales. Comida, artesania y vida autentica.",
    imagen: "/images/annie-spratt-epexF_Ltb7s-unsplash.jpg",
    categoria: "Guías",
    fecha: "8 Nov 2024",
    minutos: 7,
    contenido: [
      { tipo: "parrafo", texto: "Los mercados de Lisboa son el corazon de la ciudad. Comida fresca, artesania local, vida autentica. Aqui los mejores mercados de Lisboa y que encontrar en cada uno." },
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
    titulo: "Donde Tomar el Mejor Cafe en Lisboa",
    descripcion: "Cafeterias locales, especialidad y tradicion. El cafe portugues en los mejores locales de la ciudad.",
    imagen: "/images/jacek-urbanski-0sODcpe2RPo-unsplash.jpg",
    categoria: "Gastronomía",
    fecha: "5 Nov 2024",
    minutos: 5,
    contenido: [
      { tipo: "parrafo", texto: "El cafe en Portugal es diferente. Mas fuerte, mas oscuro, servido en taza pequena. Un bica (cafe expreso) cuesta menos de 1 EUR y es parte de la cultura local." },
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
    titulo: "Los Mejores Miradores para el Atardecer en Lisboa",
    descripcion: "Donde ver el mejor sunset de Lisboa. Horarios, ubicaciones y consejos de local.",
    imagen: "/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg",
    categoria: "Guías",
    fecha: "3 Nov 2024",
    minutos: 6,
    contenido: [
      { tipo: "parrafo", texto: "Los atardeceres en Lisboa son espectaculares. El sol se pone sobre el rio, pinta los tejados de naranja. Aqui los mejores miradores para ver el sunset." },
      { tipo: "subtitulo", texto: "1. Mirador da Senhora do Monte" },
      { tipo: "parrafo", texto: "El mejor mirador para el atardecer. Vistas de 360 grados, menos gente que otros, ambiente local. El sol se pone justo frente a ti sobre la ciudad." },
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
    titulo: "Viajar con Ninos a Lisboa: Guia Completa",
    descripcion: "Actividades, restaurantes kid-friendly y consejos para familias. Lisboa es perfecta para pequenos exploradores.",
    imagen: "/images/julia-solonina-ci19YINguoc-unsplash.jpg",
    categoria: "Consejos",
    fecha: "28 Oct 2024",
    minutos: 8,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa es una ciudad perfecta para viajar con ninos. Muchas actividades gratuitas, parques, playas cercanas. Aqui mi guia para familias." },
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
    titulo: "Las Mejores Excursiones desde Lisboa",
    descripcion: "Sintra, Obidos, Nazare y mas. Excursiones de un dia perfectas para conocer los alrededores.",
    imagen: "/images/pelayo-arbues-YN9_NQBZcSc-unsplash.jpg",
    categoria: "Guías",
    fecha: "25 Oct 2024",
    minutos: 9,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa esta bien posicionada para hacer excursiones de un dia. Sintra, Cascais, Obidos, Nazare. Aqui las mejores excursiones desde Lisboa y como hacerlas." },
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
  }
};

const localImages: Record<string, string> = {
  'mejores-miradores-lisboa': '/images/alfama-panoramica.jpg',
  'donde-comer-barato-lisboa': '/images/eduardo-goody-0Iu7mKa1sPw-unsplash.jpg',
  'como-ir-sintra-desde-lisboa': '/images/pelayo-arbues-YN9_NQBZcSc-unsplash.jpg',
  'tarjeta-lisboa-card-vale-pena': '/images/tranvia-28.jpg',
  'barrios-lisboa-donde-alojarse': '/images/joel-filipe-FrSDv3rVG-E-unsplash.jpg',
  'los-10-mejores-miradores': '/images/hero-lisboa.jpg',
  'pasteles-de-belem': '/images/IMG_1880.jpg',
  'evitar-turistadas-lisboa': '/images/hero-lisboa.jpg',
  'presupuesto-viajar-lisboa': '/images/veronika-jorjobert-mR_AxcbVivg-unsplash.jpg',
  'mejores-mercados-lisboa': '/images/annie-spratt-epexF_Ltb7s-unsplash.jpg',
  'donde-tomar-cafe-lisboa': '/images/jacek-urbanski-0sODcpe2RPo-unsplash.jpg',
  'miradores-atardecer-lisboa': '/images/julia-solonina-ci19YINguoc-unsplash.jpg',
  'que-comprar-lisboa-souvenirs': '/images/claudio-luiz-castro-cFj656inKM0-unsplash.jpg',
  'viajar-ninos-lisboa': '/images/ekaterina-boltaga-jqkGK3ofxi8-unsplash.jpg',
  'excursiones-desde-lisboa': '/images/pexels-daniel-1547736.jpg',
  'restaurantes-romanticos-lisboa': '/images/vino-celebracion.jpg',
  'donde-escuchar-fado-autentico': '/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg',
  'mejor-epoca-visitar-lisboa': '/images/paulo-evangelista-Ss3FBqiWwP4-unsplash.jpg',
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug];
  if (!article) {
    return {
      title: 'Artículo no encontrado | Blog Lisboa',
    };
  }

  const image = localImages[params.slug] || article.imagen;
  return {
    title: `${article.titulo} | Blog Lisboa`,
    description: article.descripcion,
    openGraph: {
      title: `${article.titulo} | Blog Lisboa`,
      description: article.descripcion,
      url: `${SITE_URL}/blog/${params.slug}`,
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
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const heroImage = localImages[slug] || article.imagen;
  const headings = article.contenido
    .filter((bloque) => bloque.tipo === 'subtitulo' && bloque.texto)
    .map((bloque) => ({
      title: bloque.texto as string,
      id: slugify(bloque.texto as string),
    }));

  const firstList = article.contenido.find((bloque) => bloque.tipo === 'lista');
  const takeaways = Array.isArray(firstList?.items) ? firstList?.items?.slice(0, 3) : [];
  const relatedPosts = blogPosts.filter((post) => post.id !== slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.titulo,
    description: article.descripcion,
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

  return (
    <main>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={article.titulo}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver al blog
          </Link>
          <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-4 ${categoriaColor[article.categoria]}`}>{article.categoria}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{article.titulo}</h1>
          <p className="text-xl text-white/80 mb-6">{article.descripcion}</p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {article.fecha}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {article.minutos} min de lectura
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-10 mb-12">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold mb-3">Resumen rápido</p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">{article.descripcion}</p>
              {takeaways.length > 0 && (
                <ul className="space-y-2 text-slate-700">
                  {takeaways.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 text-emerald-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {headings.length > 0 && (
              <aside className="border border-slate-200 rounded-2xl p-6 bg-white">
                <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold mb-4">Tabla de contenidos</p>
                <nav className="space-y-2 text-sm">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block text-slate-700 hover:text-primary transition-colors"
                    >
                      {heading.title}
                    </a>
                  ))}
                </nav>
              </aside>
            )}
          </div>

          <article className="prose prose-lg max-w-none">
            {article.contenido.map((bloque, index) => {
              if (bloque.tipo === 'parrafo') {
                paragraphIndex += 1;
                const isLead = paragraphIndex === 1;
                return (
                  <p
                    key={index}
                    className={`text-slate-600 leading-relaxed mb-6 ${isLead ? 'text-lg text-slate-700' : ''}`}
                  >
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
                    className="text-2xl font-bold mt-10 mb-4 scroll-mt-28"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {bloque.texto}
                  </h2>
                );
              }
              if (bloque.tipo === 'lista') {
                return (
                  <ul key={index} className="space-y-2 mb-6">
                    {bloque.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (bloque.tipo === 'tip') {
                return (
                  <div key={index} className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg">
                    <p className="text-amber-800 font-medium flex items-start gap-2">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      {bloque.texto}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </article>

          <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">¿Quieres esto organizado paso a paso?</h3>
            <p className="text-white/70 mb-6">Guías completas con rutas hora a hora, GPS en cada parada, y restaurantes probados. Menos que un café.</p>
            <Link href="/itinerarios" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white hover:scale-105 transition-all" style={{color: 'var(--color-primary)'}}>
              Ver Guías desde 2€
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Artículos relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-xl transition-all"
                  >
                    <div className="relative h-36">
                      <Image
                        src={post.imagen}
                        alt={post.titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-semibold text-slate-500 mb-2">{post.categoria}</p>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {post.titulo}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </main>
  );
}
