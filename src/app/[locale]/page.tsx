import Link from 'next/link';
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
            Rutas, transporte, comida y consejos para aprovechar la ciudad sin convertir el viaje en una carrera.
          </p>
          <a
            href="#guia-practica"
            className="inline-flex min-h-12 max-w-full items-center justify-center bg-terracotta px-7 py-3 text-center font-body text-base font-semibold leading-tight text-white transition-colors duration-200 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Preparar mi viaje ↓
          </a>
        </div>
      </section>

      <section id="guia-practica" className="scroll-mt-20">
        <TravelerDirectory portals={travelerGuides} />
      </section>

      <section className="bg-[#FBF8F2] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="mb-10 flex flex-col gap-6 border-b border-taupe/25 pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Lisboa, más allá de la lista
              </p>
              <h2 className="font-display text-[2.05rem] font-semibold not-italic leading-[1.1] tracking-normal text-night sm:text-[2.7rem]">
                Historias para mirar la ciudad de otra manera.
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden min-h-11 items-center justify-center rounded-[4px] bg-terracotta px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-primary-dark md:inline-flex"
            >
              Ver todas las guías
            </Link>
          </div>

          {historias[0] ? (
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <article className="lg:col-span-7">
                <Link href={`/blog/${historias[0].id}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] sm:aspect-[16/10]">
                    <Image
                      src={historias[0].imagen}
                      alt={historias[0].titulo}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      sizes="(max-width: 1023px) 100vw, 58vw"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-5 font-body text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-terracotta">
                    {historias[0].categoria}
                  </p>
                  <h3 className="mt-2 max-w-2xl font-display text-[1.7rem] font-semibold not-italic leading-[1.15] tracking-normal text-night transition-colors group-hover:text-terracotta sm:text-[2.15rem]">
                    {historias[0].titulo}
                  </h3>
                  <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                    {historias[0].excerpt}
                  </p>
                </Link>
              </article>

              <div className="space-y-10 lg:col-span-5">
                {historias.slice(1).map((post) => (
                  <article key={post!.id} className="border-b border-taupe/25 pb-10 last:border-b-0 last:pb-0">
                    <Link href={`/blog/${post!.id}`} className="group grid gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-start lg:grid-cols-1">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[6px]">
                        <Image
                          src={post!.imagen}
                          alt={post!.titulo}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 45vw, 42vw"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-terracotta">
                          {post!.categoria}
                        </p>
                        <h3 className="mt-2 font-display text-[1.35rem] font-semibold not-italic leading-[1.18] tracking-normal text-night transition-colors group-hover:text-terracotta sm:text-[1.55rem]">
                          {post!.titulo}
                        </h3>
                        <p className="mt-3 line-clamp-2 font-body text-sm leading-relaxed text-text-secondary">
                          {post!.excerpt}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-12 md:hidden">
            <Link
              href="/blog"
              className="inline-flex min-h-12 items-center justify-center rounded-[4px] bg-terracotta px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Ver todas las guías
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
