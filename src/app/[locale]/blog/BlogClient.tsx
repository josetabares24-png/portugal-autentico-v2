'use client';

import { useMemo, useState, type ReactNode } from 'react';
import { EditorialArticleCard } from '@/components/blog/EditorialArticleCard';
import { BlogLandingHeader } from '@/components/blog/BlogLandingHeader';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { FilterChip } from '@/components/FilterChip';
import { blogPosts } from '@/data/blog-posts';

const POSTS_PER_PAGE = 9;

type BlogClientProps = {
  initialPage?: number;
  editorialCover?: ReactNode;
};

export default function BlogClient({ initialPage = 1, editorialCover }: BlogClientProps) {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [paginaFiltrada, setPaginaFiltrada] = useState(1);
  const paginaActual = categoriaActiva === 'Todos' ? initialPage : paginaFiltrada;

  const categorias = useMemo(
    () => ['Todos', 'Portugal', 'Guías', 'Gastronomía', 'Consejos', 'Planificación', 'Transporte', 'Cultura'],
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

  const allRemaining = postsFiltrados.slice(4);
  const remaining = allRemaining.slice((paginaActual - 1) * POSTS_PER_PAGE, paginaActual * POSTS_PER_PAGE);

  function cambiarCategoria(cat: string) {
    setCategoriaActiva(cat);
    setPaginaFiltrada(1);
  }

  return (
    <main id="main-content">
      <BlogLandingHeader />

      {editorialCover}

      <div id="catalogo" className="site-container scroll-mt-24 border-t border-border-soft pb-4 pt-8">
        <h2 className="font-display text-3xl font-semibold not-italic text-text-main">Todas las guías</h2>
        <p className="mt-2 text-sm text-text-secondary">Explora el catálogo por tema o sigue las páginas del archivo.</p>
      </div>

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

      {/* The first four archive records stay crawlable on page one. */}
      {paginaActual === 1 && postsFiltrados.length > 0 && <section className="bg-background-light py-6" aria-label="Primeras guías del catálogo">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {postsFiltrados.slice(0, 4).map((post) => <EditorialArticleCard key={post.id} post={post} variant="compact" headingLevel={3} />)}
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
              <EditorialArticleCard key={post.id} post={post} headingLevel={3} />
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
            onPageChange={(page) => { setPaginaFiltrada(page); requestAnimationFrame(() => document.getElementById('catalogo')?.scrollIntoView({ block: 'start', behavior: 'smooth' })); }}
          />
        </div>
      </section>}

    </main>
  );
}
