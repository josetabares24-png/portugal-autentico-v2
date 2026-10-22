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
const textLink = 'block rounded-sm py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta';

function ReadingList({ ids }: { ids: readonly string[] }) {
  return <ul className="divide-y divide-border-soft">{ids.map((id) => {
    const post = article(id);
    return <li key={id}><Link href={`/blog/${id}`} className={`${textLink} group`}>
      <h3 className="font-display text-xl font-semibold not-italic leading-snug text-text-main group-hover:text-terracotta">{post.titulo}</h3>
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

    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-10">
      <section aria-label="Guía destacada"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Destacado</p><EditorialArticleCard post={article(selection.featured)} variant="feature" /></section>
      <aside aria-labelledby="seasonal-title" className="border-t border-border-soft pt-4 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
        <h2 id="seasonal-title" className="mb-2 font-display text-2xl font-semibold not-italic text-text-main">Para los próximos meses</h2>
        <p className="mb-5 text-sm leading-relaxed text-text-secondary">Navidad y fin de año, con las referencias y condiciones de cada guía.</p>
        <div className="space-y-6">{selection.seasonal.map((id) => <EditorialArticleCard key={id} post={article(id)} variant="compact" headingLevel={3} />)}</div>
      </aside>
    </div>

    <section id="planea-tu-viaje" aria-labelledby="planning-title" className="mt-12 scroll-mt-24 border-y border-border-soft py-7 md:mt-16">
      <h2 id="planning-title" className="font-display text-3xl font-semibold not-italic text-text-main">Planea tu viaje</h2>
      <div className="mt-3 grid gap-x-8 md:grid-cols-3">{selection.planning.map((id) => {
        const post = article(id);
        return <Link key={id} href={`/blog/${id}`} className={`${textLink} group`}><h3 className="font-body text-base font-semibold not-italic leading-snug text-text-main group-hover:text-terracotta">{post.titulo}</h3></Link>;
      })}</div>
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
      <div className="grid gap-6 lg:grid-cols-3">{selection.trips.map((id) => <EditorialArticleCard key={id} post={article(id)} variant="compact" headingLevel={3} />)}</div>
    </section>
  </div>;
}
