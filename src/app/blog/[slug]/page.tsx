import Link from 'next/link';
import { notFound } from 'next/navigation';

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
    categoria: "Guias",
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
    categoria: "Comida",
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
    categoria: "Tips",
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
    categoria: "Comida",
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
  }
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const categoriaColor: Record<string, string> = {
    "Guias": "bg-blue-100 text-blue-700",
    "Comida": "bg-amber-100 text-amber-700",
    "Transporte": "bg-green-100 text-green-700",
    "Tips": "bg-purple-100 text-purple-700",
    "Alojamiento": "bg-pink-100 text-pink-700"
  };

  return (
    <main>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${article.imagen})`}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60"></div>
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
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            {article.contenido.map((bloque, index) => {
              if (bloque.tipo === "parrafo") {
                return <p key={index} className="text-slate-600 leading-relaxed mb-6">{bloque.texto}</p>;
              }
              if (bloque.tipo === "subtitulo") {
                return <h2 key={index} className="text-2xl font-bold mt-10 mb-4" style={{color: 'var(--color-primary)'}}>{bloque.texto}</h2>;
              }
              if (bloque.tipo === "lista") {
                return (
                  <ul key={index} className="space-y-2 mb-6">
                    {bloque.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (bloque.tipo === "tip") {
                return (
                  <div key={index} className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg">
                    <p className="text-amber-800 font-medium flex items-start gap-2">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                      {bloque.texto}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </article>

          <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Quieres un itinerario completo?</h3>
            <p className="text-white/70 mb-6">Toda esta informacion organizada hora a hora, con mapas offline y recomendaciones actualizadas.</p>
            <Link href="/itinerarios" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white hover:scale-105 transition-all" style={{color: 'var(--color-primary)'}}>
              Ver itinerarios desde 5.99 EUR
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
