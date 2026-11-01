import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, type BlogPost } from '@/data/blog-posts';
import { blogEditorialSelection as selection } from '@/data/blog-editorial-selection';
import { lisboaNavigation } from '@/data/editorial-navigation';
import { EditorialArticleCard, getArticleImage } from './EditorialArticleCard';

const postsById = new Map(blogPosts.map((post) => [post.id, post]));
function article(id: string): BlogPost {
  const post = postsById.get(id);
  if (!post) throw new Error(`Editorial selection refers to missing article: ${id}`);
  return post;
}
function ReadingList({ ids }: { ids: readonly string[] }) {
  return <ul className="grok-blog-reading-grid">{ids.map((id) => {
    const post = article(id);
    return <li key={id}><Link href={`/blog/${id}`} className="grok-blog-reading-item group">
      <span className="grok-blog-reading-image">
        <Image src={getArticleImage(post)} alt="" fill sizes="(max-width: 680px) 112px, 130px" />
      </span>
      <span className="grok-blog-reading-copy">
        <span className="grok-blog-reading-category">{post.categoria}</span>
        <h3 className="grok-blog-reading-title">{post.titulo}</h3>
      </span>
    </Link></li>;
  })}</ul>;
}

function Topic({ id, title, ids }: { id: string; title: string; ids: readonly string[] }) {
  const lead = article(ids[0]);
  return <section id={id} aria-labelledby={`${id}-title`} className="min-w-0 scroll-mt-24">
    <h2 id={`${id}-title`} className="mb-6 border-t border-text-main pt-4 font-display text-3xl font-semibold not-italic text-text-main">{title}</h2>
    <Link href={`/blog/${lead.id}`} className="group block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta">
      <div className="relative mb-4 aspect-[16/9] overflow-hidden bg-white/60">
        <Image src={getArticleImage(lead)} alt={lead.titulo} fill sizes="(max-width: 767px) calc(100vw - 3rem), 520px" className="object-cover" />
      </div>
      <h3 className="font-display text-2xl font-semibold not-italic leading-snug text-text-main group-hover:text-terracotta">{lead.titulo}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{lead.excerpt}</p>
    </Link>
    <div className="mt-4"><ReadingList ids={ids.slice(1)} /></div>
  </section>;
}

export function BlogEditorialCover() {
  return <div className="site-container pb-12 pt-6 md:pb-16">
    <nav id="lisboa" aria-label="Explorar Lisboa" className="mb-8 flex scroll-mt-24 flex-wrap items-center gap-x-6 border-y border-border-soft py-1 text-sm md:mb-10">
      {lisboaNavigation.map((link) => <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center font-semibold text-text-main underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta">{link.label}</Link>)}
      <Link href="#catalogo" className="inline-flex min-h-11 items-center text-text-secondary underline underline-offset-4">Todas las guías</Link>
    </nav>

    <div className="grok-blog-feature-layout">
      <section aria-label="Guía destacada" className="grok-blog-feature-lead">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-[#016d6f]">Destacado</p>
        <EditorialArticleCard post={article(selection.featured)} variant="feature" />
      </section>
      <aside aria-labelledby="seasonal-title" className="grok-blog-feature-small">
        <h2 id="seasonal-title" className="font-display text-2xl font-semibold not-italic text-text-main">Para los próximos meses</h2>
        <p className="mb-4 mt-2 text-sm text-text-secondary">Navidad, lluvia y fin de año: qué hacer y qué revisar antes de ir.</p>
        <div className="grok-blog-seasonal-grid">
          {[...selection.seasonal, selection.planning[0]].map((id) => (
            <EditorialArticleCard key={id} post={article(id)} variant="compact" headingLevel={3} />
          ))}
        </div>
      </aside>
    </div>

    <section id="planea-tu-viaje" aria-labelledby="planning-title" className="mt-12 scroll-mt-24 border-y border-border-soft py-7 md:mt-16">
      <h2 id="planning-title" className="font-display text-3xl font-semibold not-italic text-text-main">Planea tu viaje</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">{selection.planning.map((id) => (
        <EditorialArticleCard key={id} post={article(id)} variant="grid" headingLevel={3} />
      ))}</div>
      <div className="mt-3 flex flex-wrap gap-x-6 border-t border-border-soft pt-2 text-sm text-terracotta">
        {[
          ['/calculadora-presupuesto-lisboa', 'Calcula tu presupuesto'], ['/itinerarios', 'Rutas de 1, 2 y 3 días'],
          ['/free-tours-lisboa', 'Free tours'], ['/comprar-entradas', 'Entradas y visitas'],
        ].map(([href, label]) => <Link key={href} href={href} className="inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta">{label}</Link>)}
      </div>
    </section>

    <section id="moverse" aria-labelledby="transport-title" className="mt-10 scroll-mt-24 md:mt-12">
      <h2 id="transport-title" className="font-display text-3xl font-semibold not-italic text-text-main">Moverse por Lisboa</h2>
      <div className="mt-3 grid gap-x-8 md:grid-cols-3">{selection.transport.map((id) => <ReadingList key={id} ids={[id]} />)}</div>
    </section>

    <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-2 md:gap-12">
      <Topic id="barrios" title="Barrios, a pie" ids={selection.neighborhoods} />
      <Topic id="comer" title="Dónde y qué comer" ids={selection.food} />
    </div>

    <section id="historias" aria-labelledby="stories-title" className="mt-10 scroll-mt-24 border-t border-text-main pt-5 md:mt-12">
      <h2 id="stories-title" className="mb-6 font-display text-3xl font-semibold not-italic text-text-main">Historias para entender Lisboa</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <EditorialArticleCard post={article(selection.stories[0])} headingLevel={3} />
        <ReadingList ids={selection.stories.slice(1)} />
      </div>
    </section>

    <section id="escapadas" aria-labelledby="trips-title" className="mt-10 scroll-mt-24 border-t border-text-main pt-5 md:mt-12">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3"><h2 id="trips-title" className="font-display text-3xl font-semibold not-italic text-text-main">Escapadas desde Lisboa</h2><Link href="/portugal" className="inline-flex min-h-11 items-center text-sm text-terracotta underline underline-offset-4">Seguir por Portugal</Link></div>
      <div className="grid gap-6 lg:grid-cols-3">{selection.trips.map((id) => <EditorialArticleCard key={id} post={article(id)} variant="grid" headingLevel={3} />)}</div>
    </section>
  </div>;
}
