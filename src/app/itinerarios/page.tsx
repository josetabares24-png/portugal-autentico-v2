import Link from 'next/link';

const itinerarios = [
  {
    slug: "lisboa-1-dia-lo-esencial",
    title: "Lisboa 1 Dia - Lo Esencial",
    description: "Descubre lo mejor de Lisboa en un dia perfectamente planificado. Alfama, Baixa, miradores y los mejores pasteis de nata.",
    price: 27,
    duration: "1 dia",
    stops: 8,
    restaurants: 3,
    color: "from-blue-400 to-blue-600",
    highlights: ["Castillo San Jorge", "Alfama", "Baixa", "Mirador Santa Luzia"]
  },
  {
    slug: "lisboa-2-dias-completo",
    title: "Lisboa 2 Dias - Completo",
    description: "La experiencia completa de Lisboa. Todo lo esencial mas Belem, LX Factory y la mejor vida nocturna.",
    price: 37,
    duration: "2 dias",
    stops: 15,
    restaurants: 6,
    popular: true,
    color: "from-yellow-400 to-orange-500",
    highlights: ["Todo de 1 dia", "Belem", "Pasteis de Belem", "LX Factory"]
  },
  {
    slug: "lisboa-3-dias-premium",
    title: "Lisboa 3 Dias - Premium",
    description: "Lisboa y sus alrededores como un verdadero local. Incluye excursion a Sintra y atardecer en Cascais.",
    price: 47,
    duration: "3 dias",
    stops: 22,
    restaurants: 9,
    color: "from-purple-400 to-purple-600",
    highlights: ["Todo de 2 dias", "Sintra", "Palacio da Pena", "Cascais"]
  }
];

export default function ItinerariosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Itinerarios</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Cada guia incluye rutas optimizadas, horarios exactos, mapas offline y restaurantes locales
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            {itinerarios.map((item) => (
              <div key={item.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {item.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-bold">
                    MAS VENDIDO - El favorito de nuestros viajeros
                  </div>
                )}
                <div className="md:flex">
                  <div className={"md:w-1/3 bg-gradient-to-br " + item.color + " flex items-center justify-center py-12"}>
                    <span className="text-8xl text-white font-bold">{item.duration.charAt(0)}</span>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{item.duration}</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{item.stops} paradas</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{item.restaurants} restaurantes</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h2>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">{h}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-4xl font-bold text-blue-600">{item.price} EUR</span>
                      </div>
                      <Link href={"/itinerarios/" + item.slug} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
                        Ver Detalles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Que incluye cada itinerario</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold mb-2">Mapas Offline</h3>
              <p className="text-gray-600 text-sm">Descarga los mapas y usalos sin internet</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold mb-2">Horarios Exactos</h3>
              <p className="text-gray-600 text-sm">Evita colas con nuestros horarios</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold mb-2">Restaurantes</h3>
              <p className="text-gray-600 text-sm">Donde comen los locales</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold mb-2">Tips Locales</h3>
              <p className="text-gray-600 text-sm">Secretos que solo un portugues conoce</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
