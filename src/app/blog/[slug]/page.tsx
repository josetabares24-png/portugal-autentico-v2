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
  "barrios-imprescindibles": {
    titulo: "Los 5 Barrios Imprescindibles de Lisboa",
    descripcion: "Qué ver en cada barrio, cuándo ir y qué evitar para aprovechar Lisboa como un local.",
    imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    categoria: "Guías",
    fecha: "5 Dic 2024",
    minutos: 7,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa cambia mucho de un barrio a otro. Si eliges bien, puedes ver lo mejor sin perder tiempo en zonas que no encajan contigo." },
      { tipo: "subtitulo", texto: "1. Baixa-Chiado (la base perfecta)" },
      { tipo: "parrafo", texto: "Zona llana, céntrica y bien comunicada. Ideal si es tu primera vez y quieres ir andando a casi todo." },
      { tipo: "lista", items: [
        "Qué ver: Rua Augusta, Elevador de Santa Justa, Praça do Comércio",
        "Mejor hora: Mañana temprano para fotos sin gente",
        "Evita: Restaurantes con menú turístico en Rua Augusta"
      ]},
      { tipo: "subtitulo", texto: "2. Alfama (el Lisboa más auténtico)" },
      { tipo: "parrafo", texto: "Callejuelas, fado y miradores. Precioso pero con muchas cuestas." },
      { tipo: "lista", items: [
        "Qué ver: Miradores, fado, Castelo de São Jorge",
        "Mejor hora: Atardecer y noche para ambiente",
        "Evita: Subir con maletas grandes"
      ]},
      { tipo: "subtitulo", texto: "3. Bairro Alto (vida nocturna)" },
      { tipo: "parrafo", texto: "De día tranquilo, de noche lleno de bares. Perfecto si buscas plan nocturno." },
      { tipo: "lista", items: [
        "Qué ver: Mirador de São Pedro de Alcântara, callejones con bares",
        "Mejor hora: Tarde-noche",
        "Evita: Si duermes ligero, el ruido es real"
      ]},
      { tipo: "subtitulo", texto: "4. Belém (historia y río)" },
      { tipo: "parrafo", texto: "Monumentos icónicos y paseo junto al Tajo. Ideal para medio día." },
      { tipo: "lista", items: [
        "Qué ver: Torre de Belém, Jerónimos, Pastéis de Belém",
        "Mejor hora: Mañana para evitar colas",
        "Evita: Ir sin reservar Jerónimos en temporada alta"
      ]},
      { tipo: "subtitulo", texto: "5. Príncipe Real (trendy y local)" },
      { tipo: "parrafo", texto: "Boutiques, brunch y jardines bonitos. Muy agradable para pasear." },
      { tipo: "lista", items: [
        "Qué ver: Jardín del Príncipe Real, mirador y cafés",
        "Mejor hora: Mediodía o tarde",
        "Evita: Subidas si vienes desde el río"
      ]},
      { tipo: "tip", texto: "Si solo tienes un día, mezcla Baixa + Alfama + un mirador al atardecer." }
    ]
  },
  "evitar-turistadas-lisboa": {
    titulo: "Cómo Evitar las Turistadas en Lisboa",
    descripcion: "Errores típicos de turista y cómo esquivarlos con rutas más auténticas y horarios inteligentes.",
    imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    categoria: "Consejos",
    fecha: "1 Dic 2024",
    minutos: 6,
    contenido: [
      { tipo: "parrafo", texto: "Lisboa puede sentirse turística si sigues la ruta típica. Con pequeños ajustes de horario y zonas, cambia totalmente la experiencia." },
      { tipo: "subtitulo", texto: "Turistada #1: comer en Rua Augusta" },
      { tipo: "parrafo", texto: "Precios altos y calidad media. A 5 minutos andando encuentras tascas reales con platos mejores." },
      { tipo: "subtitulo", texto: "Turistada #2: tranvía 28 a media tarde" },
      { tipo: "parrafo", texto: "Colas eternas y carteristas. Mejor subir temprano o usar el tranvía 12." },
      { tipo: "subtitulo", texto: "Turistada #3: subir al castillo a las 12:00" },
      { tipo: "parrafo", texto: "Es la hora con más gente y más sol. Ve antes de las 10:00 o al final de la tarde." },
      { tipo: "subtitulo", texto: "Turistada #4: mirar miradores sin plan" },
      { tipo: "parrafo", texto: "Con una ruta bien pensada ahorras cuestas y tiempo. Junta miradores cercanos." },
      { tipo: "subtitulo", texto: "Turistada #5: pagar demasiado por fado" },
      { tipo: "parrafo", texto: "Hay fado auténtico en tascas pequeñas. No necesitas cenas de 60€." },
      { tipo: "tip", texto: "Regla de oro: si hay fotos de paella en Lisboa, huye." }
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
    titulo: "Pastéis de Belém: La Guía Definitiva",
    descripcion: "Historia real, mejores horarios y la diferencia entre pastéis de nata y pastéis de Belém.",
    imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    categoria: "Gastronomía",
    fecha: "28 Nov 2024",
    minutos: 6,
    contenido: [
      { tipo: "parrafo", texto: "Los Pastéis de Belém son la pastelería más famosa de Lisboa. La receta original es secreta y solo se hace allí." },
      { tipo: "subtitulo", texto: "Pastéis de Belém vs pastéis de nata" },
      { tipo: "parrafo", texto: "Todo pastel de Belém es un pastel de nata, pero no al revés. El de Belém tiene receta propia y textura distinta." },
      { tipo: "subtitulo", texto: "Mejor hora para ir (sin colas)" },
      { tipo: "parrafo", texto: "A primera hora (antes de las 9:30) o a última de la tarde. Evita el mediodía." },
      { tipo: "subtitulo", texto: "Cómo comerlos como un local" },
      { tipo: "lista", items: [
        "Pídelos calientes",
        "Añade canela y azúcar glas",
        "Sienta en el salón interior si quieres ambiente histórico"
      ]},
      { tipo: "tip", texto: "Si la cola exterior es larga, prueba la cola del salón. Suele moverse más rápido." }
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
  return `${base} 2025 | Guía local`;
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
  { href: '/donde-dormir', label: 'Dónde dormir en Lisboa' },
  { href: '/transporte', label: 'Transporte en Lisboa' },
  { href: '/presupuesto', label: 'Presupuesto para viajar a Lisboa' },
  { href: '/tours', label: 'Tours y excursiones en Lisboa' },
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
  return {
    title: seoTitle,
    description: seoDescription,
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
  const articleTags = [article.categoria, 'Lisboa', 'Portugal', '2025'];

  return (
    <main className="bg-white">
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
            alt={article.titulo}
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
