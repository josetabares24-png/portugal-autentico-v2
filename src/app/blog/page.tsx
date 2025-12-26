import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    { slug: "mejores-miradores-lisboa", titulo: "Los 10 mejores miradores de Lisboa", descripcion: "Desde los clasicos hasta los secretos que solo conocen los locales.", imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800", categoria: "Guias", fecha: "20 Dic 2024", minutos: 8 },
    { slug: "donde-comer-barato-lisboa", titulo: "Donde comer barato en Lisboa (2024)", descripcion: "Tascas, mercados y restaurantes locales donde comer bien por menos de 15 euros.", imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800", categoria: "Comida", fecha: "18 Dic 2024", minutos: 6 },
    { slug: "como-ir-sintra-desde-lisboa", titulo: "Como ir a Sintra desde Lisboa", descripcion: "Tren, bus o tour? Te explicamos todas las opciones y precios.", imagen: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800", categoria: "Transporte", fecha: "15 Dic 2024", minutos: 5 },
    { slug: "tarjeta-lisboa-card-vale-pena", titulo: "Lisboa Card: Vale la pena en 2024?", descripcion: "Analizamos precios y calculamos si realmente ahorras dinero.", imagen: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800", categoria: "Tips", fecha: "12 Dic 2024", minutos: 7 },
    { slug: "barrios-lisboa-donde-alojarse", titulo: "Barrios de Lisboa: Donde alojarse", descripcion: "Baixa, Alfama, Bairro Alto, Belem... Pros y contras de cada zona.", imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", categoria: "Alojamiento", fecha: "10 Dic 2024", minutos: 10 },
    { slug: "mejores-pasteles-nata-lisboa", titulo: "Los mejores pasteles de nata de Lisboa", descripcion: "Probamos 15 pastelerias para encontrar el pastel de nata perfecto.", imagen: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800", categoria: "Comida", fecha: "8 Dic 2024", minutos: 5 }
  ];
  const categoriaColor: Record<string, string> = { "Guias": "bg-blue-100 text-blue-700", "Comida": "bg-amber-100 text-amber-700", "Transporte": "bg-green-100 text-green-700", "Tips": "bg-purple-100 text-purple-700", "Alojamiento": "bg-pink-100 text-pink-700" };
  
  return (
    <main>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 text-white backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              {posts.length} articulos disponibles
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Blog de <span style={{color: 'var(--color-accent)'}}>Lisboa</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">Tips de locales, guias detalladas y todos los secretos para que tu viaje sea inolvidable.</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-52 bg-cover bg-center relative overflow-hidden" style={{backgroundImage: `url(${post.imagen})`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoriaColor[post.categoria]} shadow-sm`}>{post.categoria}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {post.fecha}
                      <span className="mx-1">•</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {post.minutos} min
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors" style={{color: 'var(--color-primary)'}}>
                    <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{post.descripcion}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold group-hover:gap-2 transition-all" style={{color: 'var(--color-accent)'}}>
                    Leer articulo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900"></div>
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)', backgroundSize: 'cover'}}></div>
            <div className="relative p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Quieres todo organizado?</h3>
                <p className="text-white/70 text-lg">Itinerarios completos con rutas, restaurantes y mapas offline.</p>
              </div>
              <Link href="/itinerarios" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl bg-white" style={{color: 'var(--color-primary)'}}>
                Ver itinerarios
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
