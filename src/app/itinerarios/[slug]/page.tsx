import Link from 'next/link';

const itinerarios: Record<string, any> = {
  "lisboa-1-dia-lo-esencial": {
    title: "Lisboa 1 Dia",
    price: 27,
    duration: "1 dia",
    stops: 8,
    restaurants: 3,
    description: "Descubre lo mejor de Lisboa en un dia perfectamente planificado",
    includes: ["Itinerario hora a hora", "Mapa offline", "3 restaurantes locales", "Tips para evitar colas"],
    schedule: [
      { time: "09:00", place: "Praca do Comercio", desc: "Empieza en la plaza mas impresionante" },
      { time: "10:00", place: "Elevador Santa Justa", desc: "Vistas 360 de Lisboa" },
      { time: "11:00", place: "Alfama", desc: "El barrio mas antiguo" },
      { time: "13:00", place: "Almuerzo local", desc: "Restaurante con bacalao increible" },
      { time: "15:00", place: "Castillo San Jorge", desc: "Sin colas con nuestro horario" },
      { time: "17:00", place: "Chiado", desc: "Cafe y ambiente bohemio" },
      { time: "19:00", place: "Mirador Santa Luzia", desc: "Atardecer magico" }
    ]
  },
  "lisboa-2-dias-completo": {
    title: "Lisboa 2 Dias",
    price: 37,
    duration: "2 dias",
    stops: 15,
    restaurants: 6,
    popular: true,
    description: "La experiencia completa con Belem y vida nocturna",
    includes: ["Itinerario de 2 dias", "Mapas offline", "6 restaurantes", "Guia vida nocturna", "Tips transporte"],
    schedule: [
      { time: "DIA 1", place: "Centro Historico", desc: "" },
      { time: "09:00", place: "Alfama y Baixa", desc: "Todo el recorrido esencial" },
      { time: "13:30", place: "Almuerzo en Alfama", desc: "Tasca tradicional" },
      { time: "15:00", place: "Castillo y Chiado", desc: "Tarde cultural" },
      { time: "20:00", place: "Time Out Market", desc: "Cena gourmet" },
      { time: "22:00", place: "Bairro Alto", desc: "Vida nocturna" },
      { time: "DIA 2", place: "Belem", desc: "" },
      { time: "09:00", place: "Monasterio Jeronimos", desc: "Sin colas temprano" },
      { time: "10:30", place: "Pasteis de Belem", desc: "Los originales" },
      { time: "11:30", place: "Torre de Belem", desc: "Icono de Lisboa" },
      { time: "15:00", place: "LX Factory", desc: "Fabrica hipster" }
    ]
  },
  "lisboa-3-dias-premium": {
    title: "Lisboa 3 Dias Premium",
    price: 47,
    duration: "3 dias",
    stops: 22,
    restaurants: 9,
    description: "Lisboa, Sintra y Cascais como un local",
    includes: ["Itinerario de 3 dias", "Mapas de todo", "9 restaurantes", "Guia Sintra", "Transporte explicado"],
    schedule: [
      { time: "DIA 1", place: "Centro Historico", desc: "" },
      { time: "09:00", place: "Alfama completo", desc: "Miradores y callejuelas" },
      { time: "20:00", place: "Cena con fado", desc: "Experiencia autentica" },
      { time: "DIA 2", place: "Sintra y Cascais", desc: "" },
      { time: "08:30", place: "Tren a Sintra", desc: "Salida temprana" },
      { time: "09:30", place: "Palacio da Pena", desc: "Antes de las masas" },
      { time: "12:00", place: "Quinta da Regaleira", desc: "Jardines magicos" },
      { time: "16:00", place: "Cascais", desc: "Pueblo costero" },
      { time: "18:30", place: "Cabo da Roca", desc: "Atardecer en el fin del mundo" },
      { time: "DIA 3", place: "Belem y despedida", desc: "" },
      { time: "09:00", place: "Belem sin prisas", desc: "Torre y Monasterio" },
      { time: "15:00", place: "LX Factory", desc: "Compras y cafe" },
      { time: "20:00", place: "Cena de despedida", desc: "Restaurante especial" }
    ]
  }
};

export default function ItinerarioPage({ params }: { params: { slug: string } }) {
  const it = itinerarios[params.slug];
  if (!it) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Itinerario no encontrado</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          {it.popular && <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">MAS VENDIDO</span>}
          <h1 className="text-5xl font-bold mt-4 mb-4">{it.title}</h1>
          <p className="text-xl opacity-90 mb-6">{it.description}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/20 px-4 py-2 rounded-full">{it.duration}</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">{it.stops} paradas</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">{it.restaurants} restaurantes</span>
          </div>
          <div className="bg-white rounded-2xl p-6 text-slate-900 max-w-sm mx-auto">
            <p className="text-4xl font-bold mb-2">{it.price} EUR</p>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700">Comprar Ahora</button>
            <p className="text-sm text-gray-500 mt-2">Garantia 14 dias</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Que incluye</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {it.includes.map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                <span className="text-green-500 text-xl">ok</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Itinerario hora a hora</h2>
          <div className="space-y-4">
            {it.schedule.map((item: any, i: number) => (
              <div key={i} className={item.desc === "" ? "pt-6" : "bg-gray-50 rounded-xl p-4 flex gap-4"}>
                {item.desc === "" ? (
                  <h3 className="text-2xl font-bold text-blue-600">{item.time} - {item.place}</h3>
                ) : (
                  <div className="flex gap-4 w-full">
                    <span className="font-bold text-blue-600 w-16">{item.time}</span>
                    <div>
                      <p className="font-bold">{item.place}</p>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Listo para tu aventura?</h2>
          <p className="mb-8 opacity-90">Acceso inmediato. Garantia 14 dias.</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100">
            Comprar por {it.price} EUR
          </button>
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
