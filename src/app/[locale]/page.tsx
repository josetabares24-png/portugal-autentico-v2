import Link from 'next/link';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import Image from 'next/image';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { travelerGuides } from '@/data/traveler-guide-preview';
import TravelerDirectory from '@/components/home/TravelerDirectory';

export const metadata: Metadata = {
  title: { absolute: 'Estaba en Lisboa | Guías de Lisboa en español' },
  description: 'Guías sobre Lisboa: transporte, barrios, comida, qué ver, dónde alojarse y excursiones. Información práctica para organizar el viaje.',
  openGraph: {
    title: 'Estaba en Lisboa | Guías de Lisboa',
    description: 'Guías sobre Lisboa: qué ver, transporte, barrios, comida, alojamiento y excursiones.',
    url: 'https://estabaenlisboa.com',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
        width: 1200,
        height: 630,
        alt: 'Vista de Alfama y el río Tajo en Lisboa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estaba en Lisboa | Guías de Lisboa',
    description: 'Información práctica en español para organizar un viaje a Lisboa.',
    images: ['https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg'],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com',
  },
};

const historias = [
  blogPosts.find((p) => p.id === 'time-out-market-lisboa') || blogPosts[0],
  blogPosts.find((p) => p.id === 'estacion-oriente-lisboa') || blogPosts[1],
  blogPosts.find((p) => p.id === 'estacion-olaias-lisboa') || blogPosts[2],
].filter(Boolean);

export default function HomePage() {
  return (
    <main id="main-content" className="bg-cream">
      <section className="relative h-[78svh] min-h-[540px] max-h-[680px] overflow-hidden md:h-[82svh] md:min-h-[600px] md:max-h-[760px]">
        <Image
          src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg"
          alt="Vista de Alfama y del río Tajo desde un mirador de Lisboa"
          fill
          className="scale-[1.22] object-cover object-[52%_50%] md:scale-100 md:object-center"
          priority
          fetchPriority="high"
          quality={75}
          sizes="(max-width: 767px) 450vw, (max-width: 1279px) 190vw, 100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top right, rgba(10,15,30,0.82) 0%, rgba(10,15,30,0.45) 35%, transparent 65%)',
          }}
        />

        <div className="absolute bottom-0 left-0 max-w-3xl p-6 pb-12 sm:p-10 md:p-14 md:pb-16">
          <h1
            className="mb-4 font-display italic leading-[1.02] text-white"
            style={{ fontSize: 'clamp(2.45rem, 5.2vw, 4.6rem)', fontWeight: 400 }}
          >
            La Lisboa que le enseño a quien viene a verme.
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Rutas, transporte, comida, lugares y consejos para entender la ciudad antes de empezar a correr de un sitio a otro.
          </p>
          <a href="#guia-practica" className="btn-ghost-light btn-lg">
            ¿Qué necesitas resolver? ↓
          </a>
        </div>
      </section>

      <section id="guia-practica" className="scroll-mt-20 border-b border-taupe/20 bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="mb-10 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-8">
            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">Lisboa, sin complicarte</p>
              <h2
                className="max-w-3xl font-display font-semibold not-italic leading-tight tracking-normal text-night"
                style={{ fontSize: 'clamp(2rem, 4.2vw, 3.25rem)' }}
              >
                Empieza por la pregunta que tienes ahora.
              </h2>
            </div>
            <p className="max-w-md font-body text-sm leading-relaxed text-text-secondary md:justify-self-end md:text-right">
              Nadie prepara Lisboa de una sola vez. Elige la duda que te está frenando y encuentra una respuesta clara para seguir.
            </p>
          </div>

          <TravelerDirectory portals={travelerGuides} />

          <div className="mt-8 flex flex-col gap-3 border-y border-taupe/25 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-body text-sm leading-relaxed text-text-secondary">
              ¿Prefieres empezar caminando y situarte antes de decidir el resto del viaje?
            </p>
            <TrackedInternalLink
              href="/free-tours-lisboa"
              contentType="home_secondary_cta"
              contentId="free_tours"
              className="w-fit flex-shrink-0 border-b border-night pb-0.5 font-body text-sm font-semibold text-night transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Ver free tours →
            </TrackedInternalLink>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">Después de lo práctico</p>
            <h2
              className="font-display italic leading-tight text-night"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}
            >
              Lisboa también se entiende por sus historias.
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
              Cuando ya sabes cómo moverte y qué hacer, empiezan las cosas que hacen que una ciudad deje de sentirse como un decorado.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {historias.map((post, i) => (
              <article
                key={post!.id}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8 md:gap-12`}
              >
                <Link href={`/blog/${post!.id}`} className="block w-full flex-shrink-0 md:w-[45%]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post!.imagen}
                      alt={post!.titulo}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="flex-1 pt-2">
                  <p className="mb-3 font-body text-sm text-taupe">{post!.fecha} — {post!.categoria}</p>
                  <Link href={`/blog/${post!.id}`}>
                    <h3
                      className="mb-4 font-display italic leading-snug text-night transition-colors hover:text-terracotta"
                      style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', fontWeight: 400 }}
                    >
                      {post!.titulo}
                    </h3>
                  </Link>
                  <p className="mb-5 line-clamp-3 font-body text-base leading-relaxed text-text-secondary">{post!.excerpt}</p>
                  <Link
                    href={`/blog/${post!.id}`}
                    className="border-b border-night pb-0.5 font-body text-sm text-night transition-colors hover:border-terracotta hover:text-terracotta"
                  >
                    Leer
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t border-taupe/20 pt-10">
            <Link
              href="/blog"
              className="border-b border-night pb-0.5 font-body text-sm text-night transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Todas las historias y guías →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-night bg-azulejo-pattern-gold py-14">
        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <p className="font-display text-xl italic leading-relaxed text-white/80 md:text-2xl">
            Arriba resolvemos el viaje. Abajo seguimos contando la ciudad.
          </p>
        </div>
      </section>
    </main>
  );
}
