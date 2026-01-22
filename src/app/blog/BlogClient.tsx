'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export default function BlogClient() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const categorias = useMemo(
    () => ['Todos', 'Guías', 'Gastronomía', 'Consejos', 'Planificación', 'Transporte', 'Cultura'],
    []
  );

  const postsFiltrados = useMemo(
    () =>
      categoriaActiva === 'Todos'
        ? blogPosts
        : blogPosts.filter((post) => post.categoria === categoriaActiva),
    [categoriaActiva]
  );

  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/malu-decks-yOFgKNgbg_g-unsplash.jpg"
            alt="Blog Lisboa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">article</span>
            <span className="text-sm font-semibold tracking-wide">Blog de Lisboa</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            Historias y
            <br />
            <span className="text-accent">Consejos</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Tips de local, guías auténticas y todo lo que necesitas saber para vivir Lisboa como un residente
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/itinerarios"
              className="group flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="material-symbols-outlined text-xl">map</span>
              Ver las rutas
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link
              href="/info-util"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-xl font-semibold text-lg border border-white/30 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">download</span>
              Guía práctica gratis
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-6 bg-gradient-to-r from-primary to-orange-500 text-white">
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

      {/* Posts grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
              {postsFiltrados.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-40 md:h-64 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <Image
                      src={post.imagen}
                      alt={post.titulo}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

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

                    <h2
                      className="text-lg md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-primary transition-colors leading-tight"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {post.titulo}
                    </h2>

                    <p
                      className="text-slate-600 mb-4 md:mb-6 leading-relaxed text-xs md:text-base"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1.5 md:gap-2 text-primary hover:text-primary-dark font-bold group/link text-xs md:text-base"
                    >
                      <span style={{ fontFamily: 'Georgia, serif' }}>Leer más</span>
                      <span className="material-symbols-outlined text-base md:text-xl group-hover/link:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
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

      {/* Newsletter */}
      <section className="py-12 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lisboa.jpg"
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
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-xl hover:scale-105 transition-all duration-300 text-base"
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
    </main>
  );
}
