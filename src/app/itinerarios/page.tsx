import Link from 'next/link';

const itinerarios = [
  {
    slug: "lisboa-1-dia-lo-esencial",
    title: "Lisboa 1 Dia",
    description: "Lo esencial de Lisboa en un dia perfecto",
    price: 27,
    duration: 1
  },
  {
    slug: "lisboa-2-dias-completo", 
    title: "Lisboa 2 Dias",
    description: "La experiencia completa de Lisboa",
    price: 37,
    duration: 2,
    popular: true
  },
  {
    slug: "lisboa-3-dias-premium",
    title: "Lisboa 3 Dias Premium",
    description: "Lisboa y alrededores como un local",
    price: 47,
    duration: 3
  }
];

export default function ItinerariosPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Nuestros Itinerarios</h1>
        <p className="text-center text-gray-600 mb-12">Elige tu experiencia perfecta en Lisboa</p>
        <div className="grid md:grid-cols-3 gap-8">
          {itinerarios.map((item) => (
            <div key={item.slug} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {item.popular && (
                <div className="bg-blue-500 text-white text-center py-2 font-bold text-sm">
                  MAS VENDIDO
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">{item.price} EUR</p>
                <Link href={"/itinerarios/" + item.slug} className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
