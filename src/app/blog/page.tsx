import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      slug: "mejores-miradores-lisboa",
      titulo: "Los 10 mejores miradores de Lisboa",
      descripcion: "Desde los clasicos hasta los secretos que solo conocen los locales. Con horarios para evitar multitudes.",
      imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800",
      categoria: "Guias",
      fecha: "20 Dic 2024",
      minutos: 8
    },
    {
      slug: "donde-comer-barato-lisboa",
      titulo: "Donde comer barato en Lisboa (2024)",
      descripcion: "Tascas, mercados y restaurantes locales donde comer bien por menos de 15 euros.",
      imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800",
      categoria: "Comida",
      fecha: "18 Dic 2024",
      minutos: 6
    },
    {
      slug: "como-ir-sintra-desde-lisboa",
      titulo: "Como ir a Sintra desde Lisboa",
      descripcion: "Tren, bus o tour? Te explicamos todas las opciones, precios y cual te conviene mas.",
      imagen: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800",
      categoria: "Transporte",
      fecha: "15 Dic 2024",
      minutos: 5
    },
    {
      slug: "tarjeta-lisboa-card-vale-pena",
      titulo: "Lisboa Card: Vale la pena en 2024?",
      descripcion: "Analizamos precios, atracciones incluidas y calculamos si realmente ahorras dinero.",
      imagen: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800",
      categoria: "Tips",
      fecha: "12 Dic 2024",
      minutos: 7
    },
    {
      slug: "barrios-lisboa-donde-alojarse",
      titulo: "Barrios de Lisboa: Donde alojarse",
      descripcion: "Baixa, Alfama, Bairro Alto, Belem... Pros y contras de cada zona segun tu estilo de viaje.",
      imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      categoria: "Alojamiento",
      fecha: "10 Dic 2024",
      minutos: 10
    },
    {
      slug: "mejores-pasteles-nata-lisboa",
      titulo: "Los mejores pasteles de nata de Lisboa",
      descripcion: "Probamos 15 pastelerias para encontrar el pastel de nata perfecto. Spoiler: no es Belem.",
      imagen: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
      categoria: "Comida",
      fecha: "8 Dic 2024",
      minutos: 5
    }
  ];

  const categoriaColor: Record<string, string> = {
    "Guias": "bg-blue-100 text-blue-700",
    "Comida": "bg-amber-100 text-amber-700",
    "Transporte": "bg-green-100 text-green-700",
    "Tips": "bg-purple-100 text-purple-700",
    "Alojamiento": "bg-pink-100 text-pink-700"
  };

  return (
    <main>
      <section className="relative py-16" style={{background: 'var(--color-primary)'}}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog de Lisboa</h1>
          <p className="text-xl text-white/80">Tips, guias y secretos para tu viaje a Lisboa</p>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: `url(${post.imagen})`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoriaColor[post.categoria]}`}>
                      {post.categoria}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <span>{post.fecha}</span>
                    <span>·</span>
                    <span>{post.minutos} min de lectura</span>
                  </div>
                  <h2 className="text-lg font-bold mb-2 hover:underline" style={{color: 'var(--color-primary)'}}>
                    <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
                  </h2>
                  <p className="text-slate-600 text-sm">{post.descripcion}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm text-center">
            <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>Quieres todo organizado?</h3>
            <p className="text-slate-600 mb-6">Nuestros itinerarios incluyen toda esta info + rutas hora a hora + mapas offline.</p>
            <Link href="/itinerarios" className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-all">
              Ver itinerarios desde 5.99 EUR
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
