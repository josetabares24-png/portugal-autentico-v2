'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const posts = [
    {
      id: 'mejores-miradores-lisboa',
      titulo: 'Los 10 Mejores Miradores de Lisboa',
      excerpt: 'Descubre los miradores más espectaculares de Lisboa, desde los más famosos hasta los secretos que solo conocen los locales.',
      categoria: 'Guías',
      fecha: '15 Dic 2024',
      autor: 'José Tabares',
      imagen: 'https://images.unsplash.com/photo-1555881400-69d83c8b8db8?w=800&q=80'
    },
    {
      id: 'donde-comer-barato-lisboa',
      titulo: 'Dónde Comer Barato en Lisboa',
      excerpt: 'Los mejores restaurantes económicos de Lisboa donde comen los locales. Calidad auténtica sin turistadas.',
      categoria: 'Gastronomía',
      fecha: '10 Dic 2024',
      autor: 'José Tabares',
      imagen: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&q=80'
    },
    {
      id: 'barrios-imprescindibles',
      titulo: 'Los 5 Barrios Imprescindibles de Lisboa',
      excerpt: 'Alfama, Bairro Alto, Belém... Qué ver en cada barrio y cuál es el mejor momento para visitarlos.',
      categoria: 'Guías',
      fecha: '5 Dic 2024',
      autor: 'José Tabares',
      imagen: 'https://images.unsplash.com/photo-1624714037596-f89e8733ed60?w=800&q=80'
    },
    {
      id: 'evitar-turistadas-lisboa',
      titulo: 'Cómo Evitar las Turistadas en Lisboa',
      excerpt: 'Tips de local para no caer en trampas turísticas y vivir Lisboa de forma auténtica.',
      categoria: 'Consejos',
      fecha: '1 Dic 2024',
      autor: 'José Tabares',
      imagen: 'https://images.unsplash.com/photo-1588619351935-c71c5328c7bb?w=800&q=80'
    },
    {
      id: 'pasteles-de-belem',
      titulo: 'Pastéis de Belém: La Guía Definitiva',
      excerpt: 'Todo lo que necesitas saber sobre los famosos pasteles: historia, cuándo ir, y por qué no son lo mismo que "pastéis de nata".',
      categoria: 'Gastronomía',
      fecha: '28 Nov 2024',
      autor: 'José Tabares',
      imagen: 'https://images.unsplash.com/photo-1621955964441-c173e01c135b?w=800&q=80'
    },
    {
      id: 'mejor-epoca-visitar-lisboa',
      titulo: 'Cuál es la Mejor Época para Visitar Lisboa',
      excerpt: 'Análisis mes a mes del clima, precios y eventos. Descubre cuándo viajar según tu estilo.',
      categoria: 'Planificación',
      fecha: '25 Nov 2024',
      autor: 'José Tabares',
      imagen: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80'
    }
  ];

  const categorias = ['Todos', 'Guías', 'Gastronomía', 'Consejos', 'Planificación'];

  const postsFiltrados = categoriaActiva === 'Todos' 
    ? posts 
    : posts.filter(post => post.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO COMPACTO CON IMAGEN */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=2000&auto=format&fit=crop"
            alt="Lisboa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/85 to-slate-800/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-12 md:py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm rounded-full mb-4 md:mb-8 border border-white/20">
            <span className="material-symbols-outlined text-primary text-sm md:text-base">article</span>
            <span className="text-[10px] md:text-sm font-medium text-white tracking-wide">BLOG DE LISBOA</span>
          </div>

          <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-8 text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Historias y Consejos
            <br />
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              de Lisboa
            </span>
          </h1>

          <p className="text-sm md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Tips de local, guías auténticas y todo lo que necesitas
            <br className="hidden md:block" />
            <span className="hidden md:inline">saber para vivir Lisboa como un residente</span>
          </p>
        </div>

        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white/70 text-xl md:text-3xl">expand_more</span>
        </div>
      </section>

      {/* CATEGORÍAS FUNCIONALES */}
      <section className="py-6 md:py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all text-xs md:text-base ${
                  cat === categoriaActiva
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

      {/* POSTS GRID COMPACTO */}
      <section className="py-12 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
              {postsFiltrados.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-40 md:h-64 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    {post.imagen ? (
                      <>
                        <Image
                          src={post.imagen}
                          alt={post.titulo}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="material-symbols-outlined text-slate-400 text-5xl md:text-8xl">image</span>
                        </div>
                      </>
                    )}

                    <div className="absolute top-2 md:top-4 left-2 md:left-4 px-2 md:px-4 py-1 md:py-2 bg-white/95 backdrop-blur-sm text-primary font-bold rounded-lg md:rounded-xl text-[10px] md:text-xs shadow-lg z-10">
                      {post.categoria}
                    </div>
                  </div>

                  <div className="p-4 md:p-8">
                    <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm text-slate-500 mb-3 md:mb-4">
                      <span>{post.fecha}</span>
                      <span>•</span>
                      <span>{post.autor}</span>
                    </div>

                    <h2 className="text-lg md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-primary transition-colors leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                      {post.titulo}
                    </h2>

                    <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed text-xs md:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1.5 md:gap-2 text-primary hover:text-primary-dark font-bold group/link text-xs md:text-base"
                    >
                      <span style={{ fontFamily: 'Georgia, serif' }}>Leer más</span>
                      <span className="material-symbols-outlined text-base md:text-xl group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {postsFiltrados.length === 0 && (
              <div className="text-center py-12 md:py-20">
                <p className="text-base md:text-xl text-slate-500" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  No hay posts en esta categoría todavía
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* NEWSLETTER COMPACTO */}
      <section className="py-12 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2000&auto=format&fit=crop"
            alt="Lisboa sunset"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mx-auto mb-4 md:mb-8 shadow-2xl">
              <span className="material-symbols-outlined text-white text-2xl md:text-4xl">mail</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Recibe Tips de
              <br />
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Local en tu Email
              </span>
            </h2>

            <p className="text-sm md:text-xl text-slate-300 mb-6 md:mb-10 leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Los mejores consejos, lugares secretos y novedades de Lisboa
              <span className="hidden md:inline"><br />directamente en tu bandeja de entrada</span>
            </p>

            <form className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
              />
              <button
                type="submit"
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold rounded-xl md:rounded-2xl shadow-xl hover:scale-105 transition-all text-sm md:text-base"
              >
                Suscribirme
              </button>
            </form>

            <p className="text-slate-500 text-xs md:text-sm mt-4 md:mt-6">
              ✓ Sin spam · ✓ Cancela cuando quieras
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
