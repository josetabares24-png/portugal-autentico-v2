'use client';

import { useMemo, useState } from 'react';
import { EditorialArticleCard } from '@/components/blog/EditorialArticleCard';
import { BlogLandingHeader } from '@/components/blog/BlogLandingHeader';
import { FilterChip } from '@/components/FilterChip';
import { blogPosts } from '@/data/blog-posts';

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
      <BlogLandingHeader />

      {/* Filtros por categoría */}
      <section className="bg-background-light border-b border-border-soft py-3 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-6">
          {/*
            * Son siete categorías. En móvil no caben en una línea y se
            * apilaban en tres, que además quedaban fijas en pantalla porque
            * la barra es sticky. Aquí van en una sola fila que se desplaza
            * en horizontal: el margen negativo la lleva hasta el borde de la
            * pantalla, de modo que la categoría cortada por la derecha avisa
            * de que hay más. A partir de `lg` caben todas y vuelve el ajuste
            * por líneas de siempre.
            */}
          <div className="filtros-scroll -mx-6 flex gap-2 overflow-x-auto px-6 lg:mx-0 lg:flex-wrap lg:overflow-x-visible lg:px-0">
            {categorias.map((cat) => (
              <FilterChip
                key={cat}
                onClick={() => cambiarCategoria(cat)}
                active={cat === categoriaActiva}
                className="whitespace-nowrap text-xs uppercase tracking-widest"
              >
                {cat}
              </FilterChip>
            ))}
          </div>
        </div>
      </section>

      {/* Artículo destacado + recientes */}
      <section className="bg-background-light py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-6">
          {featured && (
            <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(320px,1.35fr)] lg:gap-12 lg:items-start">
              <EditorialArticleCard post={featured} variant="feature" />

              <aside className="border-t border-border-soft pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="mb-5 border-b border-border-soft pb-3 font-body text-xs uppercase tracking-[0.18em] text-text-secondary">
                  Últimas entradas
                </p>
                <div className="space-y-5">
                  {secondary.map((post) => (
                    <EditorialArticleCard key={post.id} post={post} variant="compact" />
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
      <section className="bg-background-light py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {remaining.map((post) => (
              <EditorialArticleCard key={post.id} post={post} />
            ))}
          </div>

          {postsFiltrados.length === 0 && (
            <p className="text-center py-20 font-display italic text-text-secondary">
              No hay artículos en esta categoría todavía.
            </p>
          )}

          {totalPaginas > 1 && (
            <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-16" aria-label="Paginación">
              <button
                onClick={() => { setPaginaActual(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                disabled={paginaActual === 1}
                className="text-sm text-text-secondary hover:text-text-main disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Página anterior"
              >
                &larr;<span className="hidden sm:inline"> Anterior</span>
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => { setPaginaActual(n); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    aria-current={n === paginaActual ? 'page' : undefined}
                    className={`w-8 h-8 rounded-full text-sm font-semibold transition-all duration-200 ${
                      n === paginaActual
                        ? 'bg-terracotta text-white shadow-card'
                        : 'text-text-secondary hover:bg-white hover:shadow-soft'
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
                <span className="hidden sm:inline">Siguiente </span>&rarr;
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative bg-night bg-azulejo-pattern-gold py-20 overflow-hidden">
        <div className="relative max-w-xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-white text-3xl md:text-4xl mb-3">
            Tips de local, directo a tu email
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Lo mejor de Lisboa sin spam. Sin publicidad. Solo lo que importa.
          </p>

          {status === 'success' ? (
            <p className="text-white font-semibold card-surface bg-white/10 py-4 px-6">
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
                className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 transition-colors focus:outline-none focus:border-gold text-sm"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 min-w-0 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 transition-colors focus:outline-none focus:border-gold text-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary flex-shrink-0"
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
