import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowDown } from 'lucide-react';
import TravelerDirectory from '@/components/home/TravelerDirectory';
import { blogPosts } from '@/data/blog-posts';

const HOME_URL = 'https://estabaenlisboa.com';
const HOME_DESCRIPTION = 'Organiza Lisboa con rutas por días, qué ver, transporte, zonas donde alojarte, comida y consejos prácticos, escritos y revisados desde la ciudad.';

const suggestedArticles = [
  blogPosts.find((post) => post.id === 'time-out-market-lisboa') || blogPosts[0],
  blogPosts.find((post) => post.id === 'estacion-oriente-lisboa') || blogPosts[1],
  blogPosts.find((post) => post.id === 'estacion-olaias-lisboa') || blogPosts[2],
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

      <section className="relative h-[78svh] min-h-[540px] max-h-[680px] overflow-hidden md:h-[82svh] md:min-h-[600px] md:max-h-[760px]">
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

        <div className="absolute bottom-0 left-0 max-w-3xl p-6 pb-12 sm:p-10 md:p-14 md:pb-16">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Guía local de Lisboa
          </p>
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
            className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-[4px] bg-terracotta px-7 py-3 text-center font-body text-base font-semibold leading-tight text-white transition-colors duration-200 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Preparar mi viaje
            <ArrowDown size={18} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="guia-practica" className="scroll-mt-20">
        <TravelerDirectory />
      </section>

      <section aria-labelledby="articulos-sugeridos" className="border-t border-night/10 bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h2
            id="articulos-sugeridos"
            className="mb-14 font-display italic text-night"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400 }}
          >
            Artículos que te pueden interesar
          </h2>

          <div className="space-y-16 md:space-y-20">
            {suggestedArticles.map((post, index) => (
              <article
                key={post.id}
                className={`flex flex-col items-start gap-8 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <Link href={`/blog/${post.id}`} className="block w-full flex-shrink-0 md:w-[45%]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.imagen}
                      alt={post.titulo}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="flex-1 pt-2">
                  <p className="mb-3 font-body text-sm text-taupe">{post.fecha} — {post.categoria}</p>
                  <Link href={`/blog/${post.id}`}>
                    <h3
                      className="mb-4 font-display italic leading-snug text-night transition-colors hover:text-terracotta"
                      style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', fontWeight: 400 }}
                    >
                      {post.titulo}
                    </h3>
                  </Link>
                  <p className="mb-5 line-clamp-3 font-body text-base leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="border-b border-night pb-0.5 font-body text-sm text-night transition-colors hover:border-terracotta hover:text-terracotta"
                  >
                    Leer artículo
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
              Todos los artículos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
