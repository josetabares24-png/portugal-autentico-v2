import Link from 'next/link';

const itinerarios: Record<string, any> = {
  "lisboa-1-dia-lo-esencial": {
    title: "Lisboa 1 Dia - Lo Esencial",
    price: 27,
    duration: "1 dia",
    description: "Descubre lo mejor de Lisboa en un dia perfectamente planificado",
    highlights: ["Alfama", "Baixa", "Chiado", "Mirador Santa Luzia"],
    includes: ["Guia digital", "Mapas offline", "Lista de restaurantes"]
  },
  "lisboa-2-dias-completo": {
    title: "Lisboa 2 Dias - Completo",
    price: 37,
    duration: "2 dias",
    description: "La experiencia completa de Lisboa con tiempo para disfrutar",
    highlights: ["Alfama", "Belem", "Baixa", "Chiado", "LX Factory"],
    includes: ["Guia digital", "Mapas offline", "Lista de restaurantes", "Tips de transporte"]
  },
  "lisboa-3-dias-premium": {
    title: "Lisboa 3 Dias Premium",
    price: 47,
    duration: "3 dias",
    description: "Lisboa y alrededores como un verdadero local",
    highlights: ["Alfama", "Belem", "Sintra", "Cascais", "LX Factory"],
    includes: ["Guia digital", "Mapas offline", "Lista de restaurantes", "Excursion a Sintra"]
  }
};

export default function ItinerarioPage({ params }: { params: { slug: string } }) {
  const itinerary = itinerarios[params.slug];
  
  if (!itinerary) {
    return <div className="min-h-screen flex items-center justify-center">Itinerario no encontrado</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{itinerary.title}</h1>
          <p className="text-xl opacity-90 mb-6">{itinerary.description}</p>
          <p className="text-3xl font-bold">{itinerary.price} EUR</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Que incluye</h2>
          <ul className="space-y-3 mb-12">
            {itinerary.includes.map((item: string, i: number) => (
              <li key={i} className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> {item}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Lugares destacados</h2>
          <div className="flex flex-wrap gap-2 mb-12">
            {itinerary.highlights.map((place: string, i: number) => (
              <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{place}</span>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
              Comprar Ahora - {itinerary.price} EUR
            </button>
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
