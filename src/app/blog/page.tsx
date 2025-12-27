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
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" alt="Lisboa Blog" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 text-white" style={{background: 'var(--color-accent)'}}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            {posts.length} ARTICULOS
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic" style={{fontFamily: 'Georgia, serif'}}>
            Blog de Lisboa
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Tips de locales, guías detalladas y todos los secretos para tu viaje.
          </p>
        </div>
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
                  <h2 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors" style={{color: 'var(--color-primary)'}}>{post.titulo}</h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.descripcion}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all" style={{color: 'var(--color-accent)'}}>
                    Leer articulo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Planifica tu viaje</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>¿Quieres todo organizado?</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">Nuestros itinerarios incluyen todo lo que necesitas: rutas, restaurantes, horarios y secretos locales.</p>
            <Link href="/itinerarios" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white hover:scale-105 transition-all" style={{background: 'var(--color-accent)'}}>
              Ver itinerarios
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
