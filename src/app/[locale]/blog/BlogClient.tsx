'use client';

import { useMemo, useState } from 'react';
import { EditorialArticleCard } from '@/components/blog/EditorialArticleCard';
import { BlogLandingHeader } from '@/components/blog/BlogLandingHeader';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { FilterChip } from '@/components/FilterChip';
import { blogPosts } from '@/data/blog-posts';

const POSTS_PER_PAGE = 9;

type BlogClientProps = {
  initialPage?: number;
};

export default function BlogClient({ initialPage = 1 }: BlogClientProps) {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [paginaFiltrada, setPaginaFiltrada] = useState(1);
  const paginaActual = categoriaActiva === 'Todos' ? initialPage : paginaFiltrada;
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
    setPaginaFiltrada(1);
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
      {paginaActual === 1 && featured && <section className="bg-background-light py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-6">
          {featured && (
            <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(320px,1.35fr)] lg:gap-12 lg:items-start">
              <EditorialArticleCard post={featured} variant="feature" />

              {secondary.length > 0 && <aside className="border-t border-border-soft pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="mb-5 border-b border-border-soft pb-3 font-body text-xs uppercase tracking-[0.18em] text-text-secondary">
                  Últimas entradas
                </p>
                <div className="space-y-5">
                  {secondary.map((post) => (
                    <EditorialArticleCard key={post.id} post={post} variant="compact" />
                  ))}
                </div>
              </aside>}
            </div>
          )}
        </div>
      </section>}

      {/* Separador */}
      {paginaActual === 1 && remaining.length > 0 && <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border-soft" />
      </div>}

      {/* Grid de artículos */}
      {(remaining.length > 0 || postsFiltrados.length === 0) && <section className="bg-background-light py-8 md:py-10" aria-label="Artículos del blog">
        <div className="max-w-6xl mx-auto px-6">
          {remaining.length > 0 && (
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 text-sm text-text-secondary">
              <p className="font-semibold text-text-main">{categoriaActiva === 'Todos' ? 'Sigue explorando' : categoriaActiva}</p>
              <p role="status">{4 + (paginaActual - 1) * POSTS_PER_PAGE + 1}–{Math.min(4 + paginaActual * POSTS_PER_PAGE, postsFiltrados.length)} de {postsFiltrados.length} artículos</p>
            </div>
          )}
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

          <BlogPagination
            currentPage={paginaActual}
            totalPages={totalPaginas}
            linkPages={categoriaActiva === 'Todos'}
            onPageChange={(page) => { setPaginaFiltrada(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        </div>
      </section>}

      {/* Newsletter */}
      <section className="relative bg-night bg-azulejo-pattern-gold py-12 md:py-16 overflow-hidden">
        <div className="relative max-w-xl mx-auto px-6 text-center">
          <h2 className="font-display not-italic leading-tight tracking-normal text-white text-3xl md:text-4xl mb-3">
            Tips de local, directo a tu email
          </h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            Lo mejor de Lisboa sin spam. Sin publicidad. Solo lo que importa.
          </p>

          {status === 'success' ? (
            <p role="status" className="text-white font-semibold rounded-lg border border-white/20 bg-white/10 py-4 px-6">
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
              className="flex flex-col gap-4 text-left"
            >
              <label htmlFor="blog-newsletter-name" className="text-sm font-medium text-white">Nombre <span className="font-normal text-white/80">(opcional)</span></label>
              <input
                id="blog-newsletter-name"
                name="name"
                autoComplete="given-name"
                type="text"
                placeholder="Tu nombre (opcional)"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="-mt-2 min-h-12 w-full px-4 py-3 rounded-lg bg-white/10 border border-white/40 text-white placeholder-white/70 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-base"
              />
              <label htmlFor="blog-newsletter-email" className="text-sm font-medium text-white">Email</label>
              <div className="-mt-2 flex flex-col sm:flex-row gap-3">
                <input
                  id="blog-newsletter-email"
                  name="email"
                  autoComplete="email"
                  aria-invalid={status === 'error'}
                  aria-describedby={errorMessage ? 'blog-newsletter-error' : undefined}
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="min-h-12 flex-1 min-w-0 px-4 py-3 rounded-lg bg-white/10 border border-white/40 text-white placeholder-white/70 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-base"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {status === 'loading' ? 'Enviando…' : 'Suscribirse'}
                </button>
              </div>
              {errorMessage && (
                <p id="blog-newsletter-error" role="alert" className="text-red-200 text-sm">{errorMessage}</p>
              )}
              <p className="text-white/75 text-xs">Sin spam. Cancela cuando quieras.</p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
