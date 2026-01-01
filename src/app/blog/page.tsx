import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    { slug: "mejores-miradores-lisboa", titulo: "Los 10 mejores miradores de Lisboa", descripcion: "Desde los clásicos hasta los secretos que solo conocen los locales.", imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800", categoria: "Guías", fecha: "20 Dic 2024", minutos: 8 },
    { slug: "donde-comer-barato-lisboa", titulo: "Dónde comer barato en Lisboa (2024)", descripcion: "Tascas, mercados y restaurantes locales donde comer bien por menos de 15 euros.", imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800", categoria: "Comida", fecha: "18 Dic 2024", minutos: 6 },
    { slug: "como-ir-sintra-desde-lisboa", titulo: "Cómo ir a Sintra desde Lisboa", descripcion: "¿Tren, bus o tour? Te explicamos todas las opciones y precios.", imagen: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800", categoria: "Transporte", fecha: "15 Dic 2024", minutos: 5 },
    { slug: "tarjeta-lisboa-card-vale-pena", titulo: "Lisboa Card: ¿Vale la pena en 2024?", descripcion: "Analizamos precios y calculamos si realmente ahorras dinero.", imagen: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800", categoria: "Tips", fecha: "12 Dic 2024", minutos: 7 },
    { slug: "barrios-lisboa-donde-alojarse", titulo: "Barrios de Lisboa: Dónde alojarse", descripcion: "Baixa, Alfama, Bairro Alto, Belém... Pros y contras de cada zona.", imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", categoria: "Alojamiento", fecha: "10 Dic 2024", minutos: 10 },
    { slug: "mejores-pasteles-nata-lisboa", titulo: "Los mejores pasteles de nata de Lisboa", descripcion: "Probamos 15 pastelerías para encontrar el pastel de nata perfecto.", imagen: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800", categoria: "Comida", fecha: "8 Dic 2024", minutos: 5 }
  ];
  
  const categoriaColor: Record<string, string> = { 
    "Guías": "bg-blue-50 text-blue-600", 
    "Comida": "bg-orange-50 text-orange-600", 
    "Transporte": "bg-green-50 text-green-600", 
    "Tips": "bg-purple-50 text-purple-600", 
    "Alojamiento": "bg-pink-50 text-pink-600" 
  };

  return (
    <main className="bg-white">
      {/* Hero - Estilo Home */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #FF6B35 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-orange-100">
            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-sm font-semibold text-slate-700">{posts.length} ARTÍCULOS</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" style={{fontFamily: 'Georgia, serif'}}>
            Blog de Lisboa
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tips de locales, guías detalladas y todos los secretos para que disfrutes Lisboa como nunca.
          </p>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img 
                    src={post.imagen} 
                    alt={post.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoriaColor[post.categoria]}`}>
                      {post.categoria}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white text-sm">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.fecha}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.minutos} min
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.titulo}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {post.descripcion}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Leer artículo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Estilo Home */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg border border-orange-100 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Georgia, serif'}}>
              ¿Quieres todo organizado?
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Nuestros itinerarios incluyen rutas detalladas, restaurantes auténticos y los mejores spots que no salen en las guías.
            </p>
            <Link 
              href="/itinerarios" 
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Ver Itinerarios Premium
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
