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
    color: "from-sky-400 to-blue-600",
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
    color: "from-amber-400 to-orange-500",
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
    color: "from-violet-500 to-purple-700",
    highlights: ["Todo de 2 dias", "Sintra", "Palacio da Pena", "Cascais"]
  }
];

export default function ItinerariosPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-6">ITINERARIOS PREMIUM</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Elige tu experiencia perfecta</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Cada guia incluye rutas optimizadas hora a hora, mapas offline, y los restaurantes donde realmente comemos los portugueses
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            {itinerarios.map((item) => (
              <div key={item.slug} className={`bg-white rounded-3xl shadow-xl overflow-hidden ${item.popular ? 'ring-2 ring-amber-400' : ''}`}>
                {item.popular && (
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-center py-3 font-bold">
                    ‚≠ê MAS VENDIDO - El favorito de nuestros viajeros
                  </div>
                )}
                <div className="md:flex">
                  <div className={`md:w-1/3 bg-gradient-to-br ${item.color} flex items-center justify-center py-16`}>
                    <div className="text-center text-white">
                      <span className="text-8xl font-bold">{item.duration.charAt(0)}</span>
                      <p className="text-xl mt-2 opacity-90">{item.duration === "1 dia" ? "dia" : "dias"}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">{item.stops} paradas</span>
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">{item.restaurants} restaurantes</span>
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Mapa offline</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 text-slate-900">{item.title}</h2>
                    <p className="text-slate-600 mb-4 text-lg">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">{h}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-4xl font-bold text-slate-900">{item.price}</span>
                        <span className="text-slate-500 ml-1">EUR</span>
                        <p className="text-sm text-slate-500">Acceso inmediato</p>
                      </div>
                      <Link href={"/itinerarios/" + item.slug} className={`bg-gradient-to-r ${item.color} text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-1`}>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Que incluye cada itinerario</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">Ì∑∫Ô∏è</span>
              </div>
              <h3 className="font-bold mb-2 text-slate-900">Mapas Offline</h3>
              <p className="text-slate-600 text-sm">Descarga y usa sin internet</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">‚è∞</span>
              </div>
              <h3 className="font-bold mb-2 text-slate-900">Horarios Exactos</h3>
              <p className="text-slate-600 text-sm">Evita colas y multitudes</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">ÌΩΩÔ∏è</span>
              </div>
              <h3 className="font-bold mb-2 text-slate-900">Restaurantes</h3>
              <p className="text-slate-600 text-sm">Donde comen los locales</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">Ì≤°</span>
              </div>
              <h3 className="font-bold mb-2 text-slate-900">Tips Secretos</h3>
              <p className="text-slate-600 text-sm">Trucos de portugueses</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">Ìª°Ô∏è</div>
          <h2 className="text-3xl font-bold mb-4">Garantia de 14 dias</h2>
          <p className="text-slate-300 text-lg">
            Si no estas 100% satisfecho con tu itinerario, te devolvemos el dinero. Sin preguntas.
          </p>
        </div>
      </section>
    </main>
  );
}
