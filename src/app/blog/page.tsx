import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  // Posts placeholder - reemplazar con contenido real
  const posts = [
    {
      id: 'mejores-miradores-lisboa',
      titulo: 'Los 10 Mejores Miradores de Lisboa',
      excerpt: 'Descubre los miradores más espectaculares de Lisboa, desde los más famosos hasta los secretos que solo conocen los locales.',
      categoria: 'Guías',
      fecha: '15 Dic 2024',
      imagen: '/images/blog/miradores.jpg',
      autor: 'José Tabares'
    },
    {
      id: 'donde-comer-barato-lisboa',
      titulo: 'Dónde Comer Barato en Lisboa',
      excerpt: 'Los mejores restaurantes económicos de Lisboa donde comen los locales. Calidad auténtica sin turistadas.',
      categoria: 'Gastronomía',
      fecha: '10 Dic 2024',
      imagen: '/images/blog/comida.jpg',
      autor: 'José Tabares'
    },
    {
      id: 'barrios-imprescindibles',
      titulo: 'Los 5 Barrios Imprescindibles de Lisboa',
      excerpt: 'Alfama, Bairro Alto, Belém... Qué ver en cada barrio y cuál es el mejor momento para visitarlos.',
      categoria: 'Guías',
      fecha: '5 Dic 2024',
      imagen: '/images/blog/barrios.jpg',
      autor: 'José Tabares'
    },
    {
      id: 'evitar-turistadas-lisboa',
      titulo: 'Cómo Evitar las Turistadas en Lisboa',
      excerpt: 'Tips de local para no caer en trampas turísticas y vivir Lisboa de forma auténtica.',
      categoria: 'Consejos',
      fecha: '1 Dic 2024',
      imagen: '/images/blog/consejos.jpg',
      autor: 'José Tabares'
    },
    {
      id: 'pasteles-de-belem',
      titulo: 'Pastéis de Belém: La Guía Definitiva',
      excerpt: 'Todo lo que necesitas saber sobre los famosos pasteles: historia, cuándo ir, y por qué no son lo mismo que "pastéis de nata".',
      categoria: 'Gastronomía',
      fecha: '28 Nov 2024',
      imagen: '/images/blog/pasteis.jpg',
      autor: 'José Tabares'
    },
    {
      id: 'mejor-epoca-visitar-lisboa',
      titulo: 'Cuál es la Mejor Época para Visitar Lisboa',
      excerpt: 'Análisis mes a mes del clima, precios y eventos. Descubre cuándo viajar según tu estilo.',
      categoria: 'Planificación',
      fecha: '25 Nov 2024',
      imagen: '/images/blog/clima.jpg',
      autor: 'José Tabares'
    }
  ];

  const categorias = ['Todos', 'Guías', 'Gastronomía', 'Consejos', 'Planificación'];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <span className="material-symbols-outlined text-primary">article</span>
            <span className="text-sm font-medium text-white tracking-wide">BLOG DE LISBOA</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Historias y Consejos
            <br />
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              de Lisboa
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Tips de local, guías auténticas y todo lo que necesitas
            <br />
            saber para vivir Lisboa como un residente
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white/70 text-3xl">expand_more</span>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categorias.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  cat === 'Todos'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-500"
                >
                  {/* Imagen placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-400 text-8xl">image</span>
                    </div>
                    
                    {/* Categoría badge */}
                    <div className="absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-sm text-primary font-bold rounded-xl text-xs shadow-lg">
                      {post.categoria}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span>{post.fecha}</span>
                      <span>•</span>
                      <span>{post.autor}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                      {post.titulo}
                    </h2>

                    <p className="text-slate-600 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold group/link"
                    >
                      <span style={{ fontFamily: 'Georgia, serif' }}>Leer más</span>
                      <span className="material-symbols-outlined text-xl group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-16">
              <button className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-2xl transition-all">
                Cargar más artículos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="material-symbols-outlined text-white text-4xl">mail</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Recibe Tips de
              <br />
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Local en tu Email
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Los mejores consejos, lugares secretos y novedades de Lisboa
              directamente en tu bandeja de entrada
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition-all"
              >
                Suscribirme
              </button>
            </form>

            <p className="text-slate-500 text-sm mt-6">
              ✓ Sin spam · ✓ Cancela cuando quieras
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
