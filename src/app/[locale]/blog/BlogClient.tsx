'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import { blogFallbackImage, blogImageMap } from '@/lib/media';

const POSTS_PER_PAGE = 9;

export default function BlogClient() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [paginaActual, setPaginaActual] = useState(1);
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const totalPaginas = Math.ceil(Math.max(0, postsFiltrados.length - 4) / POSTS_PER_PAGE);

  const featured = postsFiltrados[0];
  const secondary = postsFiltrados.slice(1, 4);
  const allRemaining = postsFiltrados.slice(4);
  const remaining = allRemaining.slice((paginaActual - 1) * POSTS_PER_PAGE, paginaActual * POSTS_PER_PAGE);

  function cambiarCategoria(cat: string) {
    setCategoriaActiva(cat);
    setPaginaActual(1);
  }

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <Image
          src="/images/malu-decks-yOFgKNgbg_g-unsplash.jpg"
          alt="Lisboa vista desde arriba"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <p className="text-white/70 text-sm tracking-widest uppercase mb-3">Historias &amp; Consejos</p>
          <h1 className="font-display italic text-white text-4xl md:text-6xl leading-tight">
            El blog de Lisboa
          </h1>
        </div>
      </section>

      {/* Filtros por categoría */}
      <section className="bg-background-light border-b border-border-soft py-5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-6 items-center">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => cambiarCategoria(cat)}
                aria-pressed={cat === categoriaActiva}
                className={`text-sm tracking-wide transition-colors ${
                  cat === categoriaActiva
                    ? 'text-primary font-semibold underline underline-offset-4'
                    : 'text-text-secondary hover:text-text-main'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artículo destacado + recientes */}
      <section className="bg-background-light py-16">
        <div className="max-w-6xl mx-auto px-6">
          {featured && (
            <div className="grid lg:grid-cols-[3fr,2fr] gap-12 items-start">
              {/* Featured */}
              <article>
                <Link href={`/blog/${featured.id}`} className="block group">
                  <div className="relative aspect-[16/9] overflow-hidden mb-5">
                    <Image
                      src={blogImageMap[featured.id] || featured.imagen || blogFallbackImage}
                      alt={featured.titulo}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">
                    {featured.categoria} &mdash; {featured.fecha}
                  </p>
                  <h2 className="font-display italic text-text-main text-2xl md:text-3xl leading-snug mb-3 group-hover:text-primary transition-colors">
                    {featured.titulo}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">{featured.excerpt}</p>
                </Link>
              </article>

              {/* Recientes */}
              <aside>
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-6 pb-3 border-b border-border-soft">
                  Últimas entradas
                </p>
                <div className="space-y-7">
                  {secondary.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                      <div className="flex gap-4 items-start">
                        <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden">
                          <Image
                            src={blogImageMap[post.id] || post.imagen || blogFallbackImage}
                            alt={post.titulo}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[11px] text-text-secondary uppercase tracking-wide mb-1">
                            {post.categoria}
                          </p>
                          <h4 className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors leading-snug">
                            {post.titulo}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      {/* Separador */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border-soft" />
      </div>

      {/* Grid de artículos */}
      <section className="bg-background-light py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {remaining.map((post) => {
              const imageSrc = blogImageMap[post.id] || post.imagen || blogFallbackImage;
              return (
                <article key={post.id}>
                  <Link href={`/blog/${post.id}`} className="block group">
                    <div className="relative aspect-[4/3] overflow-hidden mb-4">
                      <Image
                        src={imageSrc}
                        alt={post.titulo}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">
                      {post.categoria} &mdash; {post.fecha}
                    </p>
                    <h2 className="font-display italic text-text-main text-xl leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.titulo}
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed">{post.excerpt}</p>
                  </Link>
                </article>
              );
            })}
          </div>

          {postsFiltrados.length === 0 && (
            <p className="text-center py-20 font-display italic text-text-secondary">
              No hay artículos en esta categoría todavía.
            </p>
          )}

          {totalPaginas > 1 && (
            <nav className="flex items-center justify-center gap-6 mt-16" aria-label="Paginación">
              <button
                onClick={() => { setPaginaActual(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                disabled={paginaActual === 1}
                className="text-sm text-text-secondary hover:text-text-main disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Página anterior"
              >
                &larr; Anterior
              </button>

              <div className="flex items-center gap-3">
                {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => { setPaginaActual(n); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    aria-current={n === paginaActual ? 'page' : undefined}
                    className={`text-sm transition-colors ${
                      n === paginaActual
                        ? 'text-primary font-semibold underline underline-offset-4'
                        : 'text-text-secondary hover:text-text-main'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <button
                onClick={() => { setPaginaActual(p => Math.min(totalPaginas, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                disabled={paginaActual === totalPaginas}
                className="text-sm text-text-secondary hover:text-text-main disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Página siguiente"
              >
                Siguiente &rarr;
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1a2b4a] py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-white text-3xl md:text-4xl mb-3">
            Tips de local, directo a tu email
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Lo mejor de Lisboa sin spam. Sin publicidad. Solo lo que importa.
          </p>

          {status === 'success' ? (
            <p className="text-white font-semibold py-4 border-t border-white/20">
              Gracias por suscribirte. Revisa tu bandeja de entrada.
            </p>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  setErrorMessage('Introduce un email válido');
                  setStatus('error');
                  return;
                }
                setStatus('loading');
                setErrorMessage(null);
                try {
                  const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, name: nombre || email.split('@')[0] }),
                  });
                  const data = await response.json();
                  if (!response.ok || !data.success) {
                    setStatus('error');
                    setErrorMessage(data.message || 'Error al suscribirse. Inténtalo de nuevo.');
                    return;
                  }
                  setStatus('success');
                  setEmail('');
                  setNombre('');
                } catch {
                  setStatus('error');
                  setErrorMessage('Error de conexión. Inténtalo de nuevo.');
                }
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                placeholder="Tu nombre (opcional)"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-5 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50 text-sm"
              />
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50 text-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary hover:bg-primary-dark disabled:opacity-50 text-white text-sm font-semibold transition-colors"
                >
                  {status === 'loading' ? 'Enviando…' : 'Suscribirse'}
                </button>
              </div>
              {errorMessage && (
                <p className="text-red-400 text-xs text-left">{errorMessage}</p>
              )}
              <p className="text-white/30 text-xs">Sin spam. Cancela cuando quieras.</p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
