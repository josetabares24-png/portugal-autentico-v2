import Link from 'next/link';

const itinerarios: Record<string, any> = {
  "lisboa-1-dia-lo-esencial": {
    title: "Lisboa 1 Dia - Lo Esencial",
    subtitle: "Descubre lo mejor de Lisboa en un dia perfectamente planificado",
    price: 27,
    duration: "1 dia",
    color: "from-sky-400 to-blue-600",
    stops: 8,
    restaurants: 3,
    walking: "6 km",
    highlights: ["Castillo San Jorge", "Alfama", "Baixa", "Chiado", "Mirador Santa Luzia", "Mirador Portas do Sol", "Catedral Se", "Praca do Comercio"],
    includes: [
      "Itinerario hora a hora optimizado",
      "Mapa offline interactivo",
      "3 restaurantes locales recomendados",
      "Tips para evitar colas",
      "Mejores horarios para fotos",
      "Transporte publico explicado"
    ],
    schedule: [
      { time: "09:00", place: "Praca do Comercio", desc: "Empieza en la plaza mas impresionante de Lisboa. Cafe con vista al rio Tajo." },
      { time: "10:00", place: "Elevador Santa Justa", desc: "Sube antes de las colas. Vistas 360 de Lisboa." },
      { time: "11:00", place: "Barrio de Alfama", desc: "Pierdete por las calles mas antiguas. Te marcamos la ruta perfecta." },
      { time: "12:30", place: "Mirador Portas do Sol", desc: "Las mejores vistas de Alfama. Punto perfecto para fotos." },
      { time: "13:30", place: "Almuerzo local", desc: "Restaurante secreto con bacalao increible. Solo 12 EUR." },
      { time: "15:00", place: "Castillo San Jorge", desc: "La entrada perfecta: sin colas y con mejor luz." },
      { time: "17:00", place: "Barrio de Chiado", desc: "Cafe en A Brasileira, librerias antiguas, ambiente bohemio." },
      { time: "19:00", place: "Mirador Santa Luzia", desc: "Atardecer magico. El mejor final para tu dia." }
    ]
  },
  "lisboa-2-dias-completo": {
    title: "Lisboa 2 Dias - Completo",
    subtitle: "La experiencia completa de Lisboa con Belem, LX Factory y vida nocturna",
    price: 37,
    duration: "2 dias",
    color: "from-amber-400 to-orange-500",
    popular: true,
    stops: 15,
    restaurants: 6,
    walking: "12 km",
    highlights: ["Todo de 1 dia", "Belem", "Torre de Belem", "Monasterio Jeronimos", "Pasteis de Belem", "LX Factory", "Time Out Market", "Vida nocturna en Bairro Alto"],
    includes: [
      "Itinerario completo de 2 dias",
      "Mapas offline de todas las zonas",
      "6 restaurantes locales probados",
      "Guia de vida nocturna",
      "Tips de transporte entre zonas",
      "Horarios sin colas para Belem",
      "Mejores tiendas en LX Factory"
    ],
    schedule: [
      { time: "DIA 1", place: "", desc: "" },
      { time: "09:00", place: "Centro Historico", desc: "Alfama, Baixa, miradores - todo el recorrido esencial." },
      { time: "13:30", place: "Almuerzo en Alfama", desc: "Tasca tradicional con vino verde y petiscos." },
      { time: "15:00", place: "Castillo y Chiado", desc: "Tarde cultural con las mejores vistas." },
      { time: "20:00", place: "Cena en Time Out Market", desc: "El mejor mercado gastronomico de Europa." },
      { time: "22:00", place: "Bairro Alto", desc: "La vida nocturna lisboeta. Bares con fado en vivo." },
      { time: "DIA 2", place: "", desc: "" },
      { time: "09:00", place: "Belem temprano", desc: "Monasterio Jeronimos sin colas. Imprescindible." },
      { time: "10:30", place: "Pasteis de Belem", desc: "Los originales. Te decimos el truco para no esperar." },
      { time: "11:30", place: "Torre de Belem", desc: "Icono de Lisboa. Fotos perfectas." },
      { time: "13:00", place: "Almuerzo en Belem", desc: "Marisqueria local con vista al rio." },
      { time: "15:00", place: "LX Factory", desc: "Fabrica convertida en paraiso hipster. Tiendas unicas." },
      { time: "18:00", place: "Atardecer en el rio", desc: "Despedida perfecta de Lisboa." }
    ]
  },
  "lisboa-3-dias-premium": {
    title: "Lisboa 3 Dias - Premium",
    subtitle: "Lisboa y alrededores: Sintra, Cascais y experiencias unicas",
    price: 47,
    duration: "3 dias",
    color: "from-violet-500 to-purple-700",
    stops: 22,
    restaurants: 9,
    walking: "18 km",
    highlights: ["Todo de 2 dias", "Sintra", "Palacio da Pena", "Quinta da Regaleira", "Cascais", "Cabo da Roca", "Boca do Inferno", "Atardecer en el Atlantico"],
    includes: [
      "Itinerario premium de 3 dias",
      "Mapas offline de Lisboa, Sintra y Cascais",
      "9 restaurantes cuidadosamente seleccionados",
      "Guia completa de Sintra",
      "Transporte a Sintra y Cascais explicado",
      "Horarios para evitar multitudes",
      "Mejores spots para fotos",
      "Tips de ahorro en entradas"
    ],
    schedule: [
      { time: "DIA 1", place: "", desc: "" },
      { time: "09:00", place: "Centro Historico", desc: "Alfama, Baixa, miradores iconicos." },
      { time: "13:30", place: "Almuerzo local", desc: "Tasca escondida en Alfama." },
      { time: "15:00", place: "Castillo y Chiado", desc: "Historia y cultura portuguesa." },
      { time: "20:00", place: "Cena y fado", desc: "Experiencia autentica de fado en Alfama." },
      { time: "DIA 2", place: "", desc: "" },
      { time: "08:30", place: "Tren a Sintra", desc: "Salida temprana para evitar multitudes." },
      { time: "09:30", place: "Palacio da Pena", desc: "El palacio de colores. Llegamos antes de las masas." },
      { time: "12:00", place: "Quinta da Regaleira", desc: "Jardines magicos y el pozo iniciativo." },
      { time: "14:00", place: "Almuerzo en Sintra", desc: "Restaurante con vista al pueblo." },
      { time: "16:00", place: "Cascais", desc: "Pueblo costero elegante. Helado en la plaza." },
      { time: "18:30", place: "Cabo da Roca", desc: "El punto mas occidental de Europa. Atardecer epico." },
      { time: "DIA 3", place: "", desc: "" },
      { time: "09:00", place: "Belem", desc: "Monasterio, Torre, Pasteis - sin prisas." },
      { time: "13:00", place: "Almuerzo gourmet", desc: "Marisqueria premium en Belem." },
      { time: "15:00", place: "LX Factory", desc: "Compras y cafe en la fabrica hipster." },
      { time: "17:00", place: "Libre", desc: "Tiempo para repetir tu lugar favorito." },
      { time: "20:00", place: "Cena de despedida", desc: "Restaurante especial para cerrar el viaje." }
    ]
  }
};

export default function ItinerarioPage({ params }: { params: { slug: string } }) {
  const it = itinerarios[params.slug];
  
  if (!it) {
    return <div className="min-h-screen flex items-center justify-center">Itinerario no encontrado</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <section className={"relative py-20 bg-gradient-to-br " + it.color}>
        {it.popular && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-sm font-bold px-4 py-1 rounded-full">
            MAS VENDIDO
          </div>
        )}
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{it.title}</h1>
          <p className="text-xl opacity-90 mb-8">{it.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">{it.duration}</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">{it.stops} paradas</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">{it.restaurants} restaurantes</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">{it.walking} a pie</span>
          </div>
          <div className="bg-white rounded-2xl p-6 text-slate-900 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl font-bold">{it.price} EUR</span>
              <span className="text-slate-500">Acceso inmediato</span>
            </div>
            <button className={"w-full py-4 rounded-xl font-bold text-white text-lg bg-gradient-to-r " + it.color + " hover:shadow-lg transition-all"}>
              Comprar Ahora
            </button>
            <p className="text-sm text-slate-500 mt-3">Garantia de 14 dias - Sin riesgos</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Que incluye</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {it.includes.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Lugares que visitaras</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {it.highlights.map((place: string, i: number) => (
              <span key={i} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full">{place}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Tu itinerario hora a hora</h2>
          <div className="space-y-4">
            {it.schedule.map((item: any, i: number) => (
              <div key={i} className={item.place === "" ? "pt-8 first:pt-0" : "bg-white rounded-xl p-6 flex gap-6"}>
                {item.place === "" ? (
                  <h3 className="text-2xl font-bold text-slate-900">{item.time}</h3>
                ) : (
                  <>
                    <div className="text-right w-16 flex-shrink-0">
                      <span className="text-lg font-bold text-slate-900">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">{item.place}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Listo para tu aventura?</h2>
            <p className="text-slate-300 mb-8">Acceso inmediato despues del pago. Descarga todo a tu movil.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className={"px-8 py-4 rounded-xl font-bold text-white text-lg bg-gradient-to-r " + it.color + " hover:shadow-lg transition-all"}>
                Comprar por {it.price} EUR
              </button>
              <Link href="/itinerarios" className="text-slate-400 hover:text-white transition-colors">
                Ver otros itinerarios
              </Link>
            </div>
          </div>
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
