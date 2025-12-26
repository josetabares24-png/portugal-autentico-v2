import Link from 'next/link';

export default function ItinerariosPage() {
  const itinerarios = [
    {
      slug: 'lisboa-3-dias-premium',
      title: 'Lisboa 3 Días Premium',
      description: 'Descubre lo mejor de Lisboa en 3 días inolvidables',
      duration: '3 días',
      price: '€€€'
    },
    {
      slug: 'lisboa-romantico',
      title: 'Lisboa Romántico',
      description: 'Escapada perfecta para parejas',
      duration: '2 días',
      price: '€€'
    },
    {
      slug: 'lisboa-familiar',
      title: 'Lisboa en Familia',
      description: 'Actividades para todas las edades',
      duration: '4 días',
      price: '€€'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Itinerarios por Lisboa
        </h1>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Rutas diseñadas para que aproveches cada momento de tu viaje
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itinerarios.map((item) => (
            <Link 
              key={item.slug}
              href={`/itinerarios/${item.slug}`}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h2>
              <p className="text-slate-400 mb-4">{item.description}</p>
              <div className="flex justify-between text-sm">
                <span className="text-amber-400">{item.duration}</span>
                <span className="text-slate-500">{item.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
