import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowDown } from 'lucide-react';
import TravelerDirectory from '@/components/home/TravelerDirectory';
import { blogPosts } from '@/data/blog-posts';

const HOME_URL = 'https://estabaenlisboa.com';
const HOME_DESCRIPTION = 'Organiza Lisboa con rutas por días, qué ver, transporte, zonas donde alojarte, comida y consejos prácticos, escritos y revisados desde la ciudad.';

const suggestedArticles = [
  blogPosts.find((post) => post.id === 'historia-de-lisboa') || blogPosts[0],
  blogPosts.find((post) => post.id === 'time-out-market-lisboa') || blogPosts[1],
  blogPosts.find((post) => post.id === 'que-comprar-lisboa-souvenirs') || blogPosts[2],
].filter(Boolean);

export const metadata: Metadata = {
  title: { absolute: 'Guía de Lisboa en español | Estaba en Lisboa' },
  description: HOME_DESCRIPTION,
  openGraph: {
    title: 'Guía de Lisboa en español | Estaba en Lisboa',
    description: HOME_DESCRIPTION,
    url: HOME_URL,
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
    title: 'Guía de Lisboa en español | Estaba en Lisboa',
    description: HOME_DESCRIPTION,
    images: ['https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg'],
  },
  alternates: {
    canonical: HOME_URL,
  },
};

export default function HomePage() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${HOME_URL}/#webpage`,
    url: HOME_URL,
    name: 'Guía de Lisboa en español',
    description: HOME_DESCRIPTION,
    inLanguage: 'es-ES',
    isPartOf: { '@id': `${HOME_URL}/#website` },
    about: {
      '@type': 'City',
      name: 'Lisboa',
      sameAs: 'https://www.wikidata.org/wiki/Q597',
    },
    author: { '@id': `${HOME_URL}/sobre-nosotros#jose-tabares` },
  };

  return (
    <main id="main-content" className="bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />

      <section className="relative h-[78svh] min-h-[540px] max-h-[680px] overflow-hidden md:h-[62svh] md:min-h-[480px] md:max-h-[620px]">
        <Image
          src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg"
          alt="Vista de Alfama y del río Tajo desde un mirador de Lisboa"
          fill
          className="scale-[1.22] object-cover object-[52%_50%] md:scale-100 md:object-center"
          priority
          fetchPriority="high"
          quality={82}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top right, rgba(10,15,30,0.82) 0%, rgba(10,15,30,0.45) 35%, transparent 65%)',
          }}
        />

        <div className="absolute inset-0 mx-auto flex max-w-[1280px] items-end px-6 pb-12 sm:px-10 md:pb-12">
          <div className="max-w-[720px]">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Guía local de Lisboa
          </p>
          <h1
            className="mb-4 font-display italic leading-[1.02] text-white"
            style={{ fontSize: 'clamp(2.45rem, 4.2vw, 4rem)', fontWeight: 400 }}
          >
            La Lisboa que le enseño a quien viene a verme.
          </h1>
          <p className="mb-6 max-w-[620px] text-base leading-relaxed text-white/90 sm:text-lg">
            Rutas, transporte, comida y consejos para aprovechar la ciudad sin convertir el viaje en una carrera.
          </p>
          <a
            href="#guia-practica"
            className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-[4px] bg-terracotta px-7 py-3 text-center font-body text-base font-semibold leading-tight text-white transition-colors duration-200 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Preparar mi viaje
            <ArrowDown size={18} strokeWidth={2} aria-hidden="true" />
          </a>
          </div>
        </div>
      </section>

      <section id="guia-practica" className="scroll-mt-20">
        <TravelerDirectory />
      </section>

      <section aria-labelledby="articulos-sugeridos" className="bg-cream pb-16 pt-4 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
          <div className="mb-8 flex flex-col gap-5 border-b border-night/15 pb-6 sm:flex-row sm:items-end sm:justify-between md:mb-10">
            <div>
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Para mirar la ciudad con otros ojos
              </p>
              <h2 id="articulos-sugeridos" className="font-display text-[2rem] not-italic leading-tight text-night md:text-[2.5rem]">
                Lisboa, un poco más cerca.
              </h2>
            </div>
            <Link href="/blog" className="w-fit border-b border-night pb-1 font-body text-sm text-night transition-colors hover:border-terracotta hover:text-terracotta">
              Todos los artículos
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-x-12 lg:gap-y-8">
            {suggestedArticles.map((post, index) => (
              <article
                key={post.id}
                className={index === 0 ? 'lg:row-span-2' : 'border-t border-night/15 pt-6 lg:grid lg:grid-cols-[120px_1fr] lg:gap-6 lg:border-t-0 lg:pt-0 xl:grid-cols-[156px_1fr]'}
              >
                <Link href={`/blog/${post.id}`} className="group block w-full">
                  <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/9]' : 'aspect-[16/9] lg:aspect-[4/5]'}`}>
                    <Image
                      src={post.imagen}
                      alt={post.titulo}
                      fill
                      className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
                      sizes={index === 0 ? '(max-width: 1023px) 100vw, 650px' : '(max-width: 1023px) 100vw, 156px'}
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className={index === 0 ? 'pt-6' : 'pt-5 lg:pt-0'}>
                  <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.12em] text-taupe">{post.categoria}</p>
                  <Link href={`/blog/${post.id}`}>
                    <h3
                      className={`mb-3 font-display not-italic leading-[1.15] text-night transition-colors hover:text-terracotta ${index === 0 ? 'text-[1.9rem] md:text-[2.35rem]' : 'text-[1.6rem] lg:text-[1.4rem]'}`}
                    >
                      {post.titulo}
                    </h3>
                  </Link>
                  <p className={`mb-4 font-body leading-relaxed text-text-secondary ${index === 0 ? 'text-base' : 'line-clamp-3 text-sm'}`}>
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    aria-label={`Leer artículo: ${post.titulo}`}
                    className="border-b border-night pb-0.5 font-body text-sm text-night transition-colors hover:border-terracotta hover:text-terracotta"
                  >
                    Leer artículo
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
