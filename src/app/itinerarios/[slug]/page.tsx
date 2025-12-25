import Link from 'next/link';

const itinerarios: Record<string, any> = {
  "lisboa-1-dia-lo-esencial": {
    title: "Lisboa en 1 Dia",
    subtitle: "Lo esencial de Lisboa perfectamente planificado",
    price: 27,
    duration: "1 dia",
    stops: 8,
    restaurants: 3,
    walking: "6 km",
    difficulty: "Media - Hay cuestas",
    bestTime: "Todo el ano",
    description: "El itinerario perfecto para quienes tienen poco tiempo. Visitaras los lugares mas iconicos de Lisboa: el historico barrio de Alfama, los mejores miradores, la Baixa pombalina y terminaras con un atardecer inolvidable.",
    includes: [
      "Itinerario hora a hora detallado",
      "Mapa offline con todas las paradas",
      "3 restaurantes locales con precios",
      "Tips para evitar colas en cada lugar",
      "Mejores horarios para fotos",
      "Como usar el transporte publico",
      "Alternativas si llueve"
    ],
    highlights: ["Alfama", "Castillo San Jorge", "Mirador Santa Luzia", "Baixa", "Praca do Comercio", "Chiado"],
    schedule: [
      { time: "08:30", place: "Praca do Comercio", desc: "Empieza en la plaza mas impresionante de Lisboa. El cafe Martinho da Arcada (el mas antiguo de Lisboa) abre temprano - desayuna aqui con vista al rio. Tostada con mantequilla y cafe: 4 EUR.", type: "inicio" },
      { time: "09:30", place: "Rua Augusta y Baixa", desc: "Camina por la calle peatonal principal. Pasa bajo el Arco da Rua Augusta. Si quieres subir al arco (3 EUR), hazlo ahora que no hay cola.", type: "visita" },
      { time: "10:00", place: "Elevador Santa Justa", desc: "IMPORTANTE: No hagas cola aqui (puede ser 1 hora). Mejor sube gratis por el Carmo - te explicamos como en la guia. Las vistas son las mismas.", type: "tip" },
      { time: "10:30", place: "Convento do Carmo", desc: "Ruinas goticas impresionantes. Entrada 5 EUR. 20 minutos son suficientes. Esta al lado del elevador.", type: "visita" },
      { time: "11:15", place: "Chiado", desc: "Baja por las calles del barrio bohemio. Para en A Brasileira a ver la estatua de Pessoa. No tomes cafe aqui (caro y turistico).", type: "paseo" },
      { time: "12:00", place: "Tranvia 28", desc: "TRUCO: Tomalo en Chiado direccion Graca. Aqui sube menos gente. Baja en Portas do Sol. El viaje dura 15 min y es una experiencia.", type: "transporte" },
      { time: "12:30", place: "Mirador Portas do Sol", desc: "Las mejores vistas de Alfama. Perfecto para fotos. Hay un kiosco con bebidas baratas.", type: "mirador" },
      { time: "13:00", place: "Almuerzo en Alfama", desc: "RESTAURANTE: Tasca do Chico (Rua dos Remedios 83). Pide el menu del dia - 12 EUR con vino. Aqui hay fado espontaneo algunos dias. ALTERNATIVA: Mesa de Frades si esta lleno.", type: "comida" },
      { time: "14:30", place: "Callejear por Alfama", desc: "Pierdete por las calles. Ve hacia arriba siguiendo las senales al Castelo. Descubriras rincones increibles. No tengas prisa.", type: "paseo" },
      { time: "15:30", place: "Castillo de San Jorge", desc: "Entrada 15 EUR. Vale la pena por las vistas 360. Llega antes de las 16h para evitar grupos. Dentro hay pavos reales sueltos.", type: "visita" },
      { time: "17:00", place: "Mirador da Graca", desc: "Camina 10 min hasta aqui. Menos turistico que otros miradores. Hay un kiosco con cerveza barata. Perfecto para descansar.", type: "mirador" },
      { time: "18:00", place: "Baixa al atardecer", desc: "Baja caminando o en tranvia 28. La luz del atardecer en la Baixa es magica.", type: "paseo" },
      { time: "19:00", place: "Cena", desc: "RESTAURANTE: Cervejaria Ramiro (si te gusta marisco, reserva antes - caro pero increible) o Solar dos Presuntos (cocina portuguesa clasica, 25-35 EUR por persona).", type: "comida" },
      { time: "21:00", place: "Ginjinha", desc: "Termina en A Ginjinha (Largo Sao Domingos). Un vasito de licor de cereza por 1.50 EUR. Tradicion lisboeta.", type: "fin" }
    ],
    restaurantes: [
      { name: "Tasca do Chico", zona: "Alfama", precio: "12-18 EUR", tipo: "Tasca tradicional", tip: "Hay fado espontaneo. Reservar." },
      { name: "Solar dos Presuntos", zona: "Baixa", precio: "25-35 EUR", tipo: "Portugues clasico", tip: "Pide el bacalao." },
      { name: "A Ginjinha", zona: "Rossio", precio: "1.50 EUR", tipo: "Bar historico", tip: "Solo para la ginjinha, no comida." }
    ],
    tips: [
      "Lleva zapatos comodos - hay muchas cuestas y adoquines",
      "El tranvia 28 se llena a partir de las 10h - madrugalo",
      "Martes muchos museos cierran",
      "El castillo cierra a las 21h en verano, 18h en invierno",
      "Lleva efectivo para sitios pequenos"
    ]
  },
  "lisboa-2-dias-completo": {
    title: "Lisboa en 2 Dias",
    subtitle: "La experiencia completa con Belem y vida nocturna",
    price: 37,
    duration: "2 dias",
    stops: 15,
    restaurants: 6,
    walking: "12 km",
    popular: true,
    difficulty: "Media",
    bestTime: "Todo el ano",
    description: "Dos dias perfectos para conocer Lisboa en profundidad. El primer dia exploras el centro historico, el segundo descubres Belem, LX Factory y la vida nocturna. Incluye los mejores restaurantes y experiencias locales.",
    includes: [
      "Itinerario detallado de 2 dias completos",
      "Mapas offline de todas las zonas",
      "6 restaurantes probados con precios",
      "Guia de vida nocturna y bares",
      "Tips de transporte entre zonas",
      "Horarios optimizados para evitar colas",
      "Alternativas para dias de lluvia",
      "Lista de souvenirs autenticos"
    ],
    highlights: ["Alfama", "Belem", "Torre de Belem", "Pasteis de Belem", "LX Factory", "Time Out Market", "Bairro Alto"],
    schedule: [
      { time: "DIA 1", place: "Centro Historico", desc: "", type: "dia" },
      { time: "08:30", place: "Praca do Comercio", desc: "Desayuno en Martinho da Arcada. Cafe y tostada con mantequilla: 4 EUR. El cafe mas antiguo de Lisboa.", type: "inicio" },
      { time: "09:30", place: "Baixa y Chiado", desc: "Paseo por Rua Augusta, sube al Carmo (gratis, mismas vistas que Santa Justa). Convento do Carmo: 5 EUR, 20 min.", type: "visita" },
      { time: "11:00", place: "Tranvia 28", desc: "Tomalo en Chiado hacia Graca. Baja en Portas do Sol. 15 min de experiencia autentica.", type: "transporte" },
      { time: "11:30", place: "Alfama", desc: "Miradores de Portas do Sol y Santa Luzia. Callejea sin rumbo hacia el castillo.", type: "paseo" },
      { time: "13:00", place: "Almuerzo", desc: "Tasca do Chico o Mesa de Frades en Alfama. Menu 12-15 EUR.", type: "comida" },
      { time: "15:00", place: "Castillo San Jorge", desc: "15 EUR entrada. Vistas 360. 1.5-2 horas.", type: "visita" },
      { time: "17:30", place: "Mirador da Graca", desc: "Cerveza en el kiosco viendo el atardecer. 2-3 EUR.", type: "mirador" },
      { time: "20:00", place: "Time Out Market", desc: "Cena en el mercado gastronomico. Cada puesto es de un chef famoso. 15-25 EUR.", type: "comida" },
      { time: "22:00", place: "Bairro Alto", desc: "Copas en las calles. Los bares cierran a las 2h, luego la fiesta sigue en Cais do Sodre.", type: "noche" },
      { time: "DIA 2", place: "Belem y LX Factory", desc: "", type: "dia" },
      { time: "09:00", place: "Tren a Belem", desc: "Desde Cais do Sodre, tren cada 20 min. 15 min de viaje. 1.50 EUR.", type: "transporte" },
      { time: "09:30", place: "Monasterio dos Jeronimos", desc: "LLEGA TEMPRANO - a las 10h ya hay cola. Entrada 10 EUR. Impresionante arquitectura manuelina. 1 hora.", type: "visita" },
      { time: "11:00", place: "Pasteis de Belem", desc: "Los pasteis de nata originales desde 1837. TRUCO: pide para llevar (sin cola) y comelos en el jardin de enfrente. 1.30 EUR cada uno.", type: "comida" },
      { time: "11:45", place: "Torre de Belem", desc: "10 min caminando. Entrada 8 EUR. Si hay mucha cola, las vistas desde fuera son casi igual de buenas.", type: "visita" },
      { time: "12:30", place: "Padrao dos Descobrimentos", desc: "Monumento a los descubridores. Subir 6 EUR. Buenas vistas.", type: "visita" },
      { time: "13:30", place: "Almuerzo en Belem", desc: "Ponto Final (cruza en ferry a Cacilhas, 5 min, vistas increibles) o Floresta de Belem si no quieres cruzar.", type: "comida" },
      { time: "15:30", place: "LX Factory", desc: "Antigua fabrica convertida en espacio creativo. Tiendas unicas, grafiti, librerias. Ler Devagar es una libreria espectacular.", type: "visita" },
      { time: "18:00", place: "Atardecer en el rio", desc: "Vuelve a Cais do Sodre. Pasea por la Ribeira das Naus viendo el atardecer sobre el Tajo.", type: "paseo" },
      { time: "20:00", place: "Cena final", desc: "Cervejaria Ramiro (marisco, 40-50 EUR, reservar) o Taberna da Rua das Flores (tapas portuguesas, 25-30 EUR).", type: "comida" }
    ],
    restaurantes: [
      { name: "Tasca do Chico", zona: "Alfama", precio: "12-18 EUR", tipo: "Tasca con fado", tip: "Reservar para cena con fado" },
      { name: "Time Out Market", zona: "Cais do Sodre", precio: "15-25 EUR", tipo: "Mercado gourmet", tip: "Prueba varios puestos" },
      { name: "Pasteis de Belem", zona: "Belem", precio: "1.30 EUR", tipo: "Pasteleria historica", tip: "Pide para llevar" },
      { name: "Ponto Final", zona: "Cacilhas", precio: "15-20 EUR", tipo: "Marisqueria local", tip: "Cruza en ferry, 5 min" },
      { name: "Cervejaria Ramiro", zona: "Intendente", precio: "40-50 EUR", tipo: "Mariscos", tip: "Reservar. Pide gambas al ajillo." },
      { name: "Taberna da Rua das Flores", zona: "Chiado", precio: "25-30 EUR", tipo: "Tapas portuguesas", tip: "Sin reservas, ve temprano" }
    ],
    tips: [
      "Dia 1: Lleva zapatos muy comodos, hay muchas cuestas",
      "El Monasterio abre a las 10h pero la cola empieza a las 9:30",
      "En LX Factory los domingos hay mercadillo",
      "Bairro Alto es seguro pero ruidoso - no duermas ahi",
      "El ferry a Cacilhas tiene vistas increibles y cuesta 1.30 EUR"
    ]
  },
  "lisboa-3-dias-premium": {
    title: "Lisboa en 3 Dias",
    subtitle: "Lisboa, Sintra y Cascais - La experiencia completa",
    price: 47,
    duration: "3 dias",
    stops: 22,
    restaurants: 9,
    walking: "18 km",
    difficulty: "Media-Alta",
    bestTime: "Abril-Octubre",
    description: "La experiencia definitiva. Tres dias para descubrir Lisboa en profundidad, explorar los palacios magicos de Sintra y relajarte en la costa de Cascais. Incluye el itinerario optimizado para ver todo sin estres.",
    includes: [
      "Itinerario premium de 3 dias",
      "Mapas offline de Lisboa, Sintra y Cascais",
      "9 restaurantes seleccionados",
      "Guia completa de Sintra con horarios",
      "Transporte detallado a Sintra y Cascais",
      "Horarios para evitar multitudes",
      "Mejores spots para fotos",
      "Tips de ahorro en entradas",
      "Alternativas si llueve",
      "Lista de souvenirs autenticos"
    ],
    highlights: ["Alfama", "Belem", "Sintra", "Palacio da Pena", "Quinta da Regaleira", "Cascais", "Cabo da Roca"],
    schedule: [
      { time: "DIA 1", place: "Centro de Lisboa", desc: "", type: "dia" },
      { time: "09:00", place: "Alfama", desc: "Empieza temprano explorando el barrio mas antiguo. Miradores de Santa Luzia y Portas do Sol.", type: "visita" },
      { time: "11:00", place: "Castillo San Jorge", desc: "15 EUR. Las mejores vistas de Lisboa. 1.5 horas.", type: "visita" },
      { time: "13:00", place: "Almuerzo en Alfama", desc: "Tasca do Chico - menu del dia 12 EUR. Cocina portuguesa autentica.", type: "comida" },
      { time: "15:00", place: "Baixa y Chiado", desc: "Paseo por el centro. Convento do Carmo (5 EUR), calles comerciales.", type: "paseo" },
      { time: "18:00", place: "Mirador da Graca", desc: "Atardecer con cerveza. El mejor cierre del dia.", type: "mirador" },
      { time: "20:30", place: "Cena con fado", desc: "Mesa de Frades o Tasca do Chico. Reservar con antelacion. 30-40 EUR.", type: "comida" },
      { time: "DIA 2", place: "Sintra y Cascais", desc: "", type: "dia" },
      { time: "08:00", place: "Tren a Sintra", desc: "CRUCIAL: Sal temprano. Desde Rossio, tren cada 30 min. 40 min viaje, 2.30 EUR.", type: "transporte" },
      { time: "09:00", place: "Palacio da Pena", desc: "PRIMERO AQUI - se llena rapidisimo. Entrada 14 EUR. El palacio de colores es magico. 2 horas.", type: "visita" },
      { time: "11:30", place: "Quinta da Regaleira", desc: "A 15 min en bus (434). Entrada 10 EUR. El pozo iniciatico es impresionante. 1.5 horas.", type: "visita" },
      { time: "13:30", place: "Almuerzo en Sintra", desc: "Incomum (cocina moderna, 20 EUR) o Tasca do Xico (tradicional, 15 EUR) en el centro.", type: "comida" },
      { time: "15:00", place: "Tren a Cascais", desc: "Vuelve a Lisboa (Rossio) y cambia a linea de Cascais en Cais do Sodre. 40 min total, 2.30 EUR.", type: "transporte" },
      { time: "16:00", place: "Cascais", desc: "Pueblo costero elegante. Pasea por el centro, helado en Santini (el mejor de Portugal).", type: "paseo" },
      { time: "17:30", place: "Boca do Inferno", desc: "Formacion rocosa espectacular. 15 min caminando desde el centro. Gratis.", type: "visita" },
      { time: "18:30", place: "Cabo da Roca (opcional)", desc: "El punto mas occidental de Europa. Bus 403 desde Cascais, 40 min. Atardecer epico.", type: "visita" },
      { time: "21:00", place: "Cena en Cascais o Lisboa", desc: "House of Wonders (Cascais, 25 EUR) o vuelve a Lisboa para cenar.", type: "comida" },
      { time: "DIA 3", place: "Belem y despedida", desc: "", type: "dia" },
      { time: "09:30", place: "Belem", desc: "Tren desde Cais do Sodre. 15 min, 1.50 EUR.", type: "transporte" },
      { time: "10:00", place: "Monasterio dos Jeronimos", desc: "Llega cuando abre para evitar colas. 10 EUR. Arquitectura impresionante. 1 hora.", type: "visita" },
      { time: "11:15", place: "Pasteis de Belem", desc: "Los pasteis de nata originales. 1.30 EUR cada uno. Pide para llevar.", type: "comida" },
      { time: "12:00", place: "Torre de Belem", desc: "8 EUR. Icono de Lisboa. 30-45 min.", type: "visita" },
      { time: "13:00", place: "Almuerzo", desc: "Ponto Final en Cacilhas (cruza en ferry) o come en LX Factory.", type: "comida" },
      { time: "15:00", place: "LX Factory", desc: "Fabrica creativa. Tiendas, arte, libreria Ler Devagar. 2 horas.", type: "visita" },
      { time: "17:30", place: "Paseo final", desc: "Ribeira das Naus junto al rio. Ultimo atardecer en Lisboa.", type: "paseo" },
      { time: "20:00", place: "Cena de despedida", desc: "Belcanto (alta cocina, 150 EUR, 2 estrellas Michelin) o Cervejaria Ramiro (mariscos, 50 EUR).", type: "comida" }
    ],
    restaurantes: [
      { name: "Tasca do Chico", zona: "Alfama", precio: "12-18 EUR", tipo: "Tasca con fado", tip: "Reservar" },
      { name: "Mesa de Frades", zona: "Alfama", precio: "30-40 EUR", tipo: "Fado premium", tip: "Reservar con dias" },
      { name: "Incomum", zona: "Sintra", precio: "18-25 EUR", tipo: "Moderno", tip: "Menu del dia bueno" },
      { name: "Santini", zona: "Cascais", precio: "4-6 EUR", tipo: "Heladeria", tip: "El mejor helado de Portugal" },
      { name: "Pasteis de Belem", zona: "Belem", precio: "1.30 EUR", tipo: "Pasteleria", tip: "Para llevar" },
      { name: "Ponto Final", zona: "Cacilhas", precio: "15-20 EUR", tipo: "Marisqueria", tip: "Ferry incluido en experiencia" },
      { name: "LX Factory", zona: "Alcantara", precio: "10-20 EUR", tipo: "Varios", tip: "Landeau tiene el mejor pastel de chocolate" },
      { name: "Cervejaria Ramiro", zona: "Intendente", precio: "40-50 EUR", tipo: "Mariscos", tip: "Reservar" },
      { name: "Belcanto", zona: "Chiado", precio: "150+ EUR", tipo: "Fine dining", tip: "2 estrellas Michelin, reservar semanas antes" }
    ],
    tips: [
      "Dia 2 es intenso - sal muy temprano a Sintra",
      "El bus 434 en Sintra se llena, considera Uber entre palacios",
      "Compra entradas online para Pena y Regaleira (ahorras cola)",
      "Cascais es mas bonito al atardecer",
      "Cabo da Roca vale la pena solo si tienes tiempo y buen clima",
      "El ultimo dia puedes dejar maletas en la estacion de Santa Apolonia"
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ItinerarioPage({ params }: Props) {
  const { slug } = await params;
  const it = itinerarios[slug];
  
  if (!it) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Itinerario no encontrado</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          {it.popular && <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">MAS VENDIDO</span>}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{it.title}</h1>
          <p className="text-xl text-slate-300 mb-8">{it.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">{it.duration}</span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">{it.stops} paradas</span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">{it.restaurants} restaurantes</span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">{it.walking}</span>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-slate-600 mb-1">Precio especial</p>
              <p className="text-4xl font-bold text-slate-900">{it.price} EUR</p>
              <p className="text-sm text-slate-500">Acceso inmediato - Garantia 14 dias</p>
            </div>
            <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
              Comprar Ahora
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Que incluye</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {it.includes.map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">OK</span>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Itinerario completo</h2>
          <div className="space-y-3">
            {it.schedule.map((item: any, i: number) => (
              <div key={i}>
                {item.type === "dia" ? (
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-xl mt-8 first:mt-0">
                    <h3 className="text-xl font-bold">{item.time} - {item.place}</h3>
                  </div>
                ) : (
                  <div className="bg-slate-50 rounded-xl p-4 flex gap-4">
                    <div className="text-center min-w-16">
                      <span className="text-lg font-bold text-blue-600">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900">{item.place}</h4>
                      <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Restaurantes recomendados</h2>
          <div className="grid gap-4">
            {it.restaurantes.map((r: any, i: number) => (
              <div key={i} className="bg-white p-4 rounded-xl flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">{r.name}</h4>
                  <p className="text-slate-600 text-sm">{r.tipo} - {r.zona}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-amber-600">{r.precio}</p>
                  <p className="text-slate-500 text-sm">{r.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Tips importantes</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <ul className="space-y-3">
              {it.tips.map((tip: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">!</span>
                  <span className="text-slate-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Listo para tu aventura?</h2>
          <p className="text-slate-300 mb-8">Acceso inmediato. Garantia de 14 dias. Sin riesgos.</p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all">
            Comprar por {it.price} EUR
          </button>
          <p className="text-slate-400 text-sm mt-4">Pago seguro con tarjeta o PayPal</p>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'lisboa-1-dia-lo-esencial' },
    { slug: 'lisboa-2-dias-completo' },
    { slug: 'lisboa-3-dias-premium' },
  ];
}
