import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Estaba en Lisboa',
  url: 'https://estabaenlisboa.com',
  logo: 'https://estabaenlisboa.com/images/tranvia-28.jpg',
  description: 'Guías de viaje para Lisboa escritas por un residente: qué ver, dónde comer, barrios, historia y rutas a pie.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lisboa',
    addressCountry: 'PT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.7223,
    longitude: -9.1393,
  },
  areaServed: { '@type': 'City', name: 'Lisboa' },
  sameAs: ['https://estabaenlisboa.com'],
};

export const metadata: Metadata = {
  title: 'Qué Ver en Lisboa 2026 — Guías Gratis, Historia, Barrios y Rutas',
  description: 'Guía completa de Lisboa 2026: qué ver, dónde comer, historia de la ciudad, miradores, barrios y rutas. Gratis, escrita por alguien que vive aquí.',
  openGraph: {
    title: 'Qué Ver en Lisboa 2026 — Guías Gratis de Local',
    description: 'Guía gratuita de Lisboa 2026: barrios, gastronomía, historia, miradores y rutas a pie. Sin trampas turísticas.',
    url: 'https://estabaenlisboa.com',
    images: [{ url: 'https://estabaenlisboa.com/images/tranvia-28.jpg', width: 1200, height: 630, alt: 'Tranvía 28 en las calles de Alfama, Lisboa' }],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com',
  },
};

const historias = [
  blogPosts.find(p => p.id === 'mejores-miradores-lisboa') || blogPosts[0],
  blogPosts.find(p => p.id === 'historia-de-lisboa') || blogPosts[1],
  blogPosts.find(p => p.id === 'barrios-imprescindibles') ||
    blogPosts.find(p => p.id === 'novedades-lisboa-2026') ||
    blogPosts[2],
].filter(Boolean);

const barrios = [
  { nombre: 'Alfama', href: '/blog/barrios-imprescindibles', imagen: '/images/alfama-panoramica.jpg' },
  { nombre: 'Graça', href: '/blog/barrios-imprescindibles', imagen: '/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg' },
  { nombre: 'Mouraria', href: '/blog/barrios-imprescindibles', imagen: '/images/jacek-urbanski-0sODcpe2RPo-unsplash.jpg' },
  { nombre: 'Chiado', href: '/blog/barrios-imprescindibles', imagen: '/images/elevador-santa-justa.jpg' },
  { nombre: 'Bairro Alto', href: '/blog/barrios-imprescindibles', imagen: '/images/joel-filipe-FrSDv3rVG-E-unsplash.jpg' },
  { nombre: 'Belém', href: '/blog/barrios-imprescindibles', imagen: '/images/paulo-evangelista-Ss3FBqiWwP4-unsplash.jpg' },
];

const libreta: { texto: string; href?: string }[] = [
  { texto: 'El 13 de junio huele a sardinas. No hay excepción.' },
  { texto: 'El mejor mirador a las 7 de la mañana es el de Santa Luzia. A las 11, ya no.', href: '/blog/mejores-miradores-lisboa' },
  { texto: 'En Mouraria, los lunes hay mercado. Viene poca gente y eso es lo bueno.' },
  { texto: 'El tranvía 28 tarda más en subir que tú a pie. Tómalo igual.' },
  { texto: 'Hay una tasca en Graça que solo abre tres días a la semana. Siempre llena.' },
];

export default function HomePage() {
  return (
    <main id="main-content" className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px]">
        <Image
          src="/images/tranvia-28.jpg"
          alt="Tranvía 28 en una calle de Alfama, Lisboa"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        {/* Overlay solo abajo-izquierda */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top right, rgba(10,15,30,0.82) 0%, rgba(10,15,30,0.45) 35%, transparent 65%)',
          }}
        />

        <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl">
          <h1 className="font-display italic text-white leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 400 }}>
            Vivo en Graça hace tres años. Esto es lo que le cuento a la gente que viene a verme.
          </h1>
        </div>
      </section>

      {/* ── HISTORIAS ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-display italic text-night mb-14"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400 }}>
            Historias
          </h2>

          <div className="space-y-16 md:space-y-20">
            {historias.map((post, i) => (
              <article key={post!.id} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-start`}>
                <Link href={`/blog/${post!.id}`} className="block flex-shrink-0 w-full md:w-[45%]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post!.imagen}
                      alt={post!.titulo}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </Link>

                <div className="flex-1 pt-2">
                  <p className="text-taupe text-sm mb-3 font-body">{post!.fecha} — {post!.categoria}</p>
                  <Link href={`/blog/${post!.id}`}>
                    <h3 className="font-display italic text-night leading-snug mb-4 hover:text-terracotta transition-colors"
                      style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', fontWeight: 400 }}>
                      {post!.titulo}
                    </h3>
                  </Link>
                  <p className="text-taupe font-body font-light leading-relaxed text-base mb-5 line-clamp-3">
                    {post!.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post!.id}`}
                    className="text-night font-body text-sm border-b border-night pb-0.5 hover:text-terracotta hover:border-terracotta transition-colors"
                  >
                    Leer
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-taupe/20">
            <Link
              href="/blog"
              className="text-night font-body text-sm border-b border-night pb-0.5 hover:text-terracotta hover:border-terracotta transition-colors"
            >
              Todos los artículos
            </Link>
          </div>
        </div>
      </section>

      {/* ── LOS BARRIOS ── */}
      <section className="py-20 md:py-28" style={{ background: '#EDE7DA' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-display italic text-night mb-14"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400 }}>
            Los barrios
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {barrios.map((barrio) => (
              <Link key={barrio.nombre} href={barrio.href} className="group block">
                <div className="relative aspect-square overflow-hidden mb-3">
                  <Image
                    src={barrio.imagen}
                    alt={barrio.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <p className="font-display italic text-night group-hover:text-terracotta transition-colors"
                  style={{ fontSize: '1.1rem', fontWeight: 400 }}>
                  {barrio.nombre}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIBRETA ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <h2 className="font-display italic text-night mb-12"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400 }}>
            Libreta
          </h2>

          <ul className="space-y-7">
            {libreta.map((nota, i) => (
              <li key={i} className="flex gap-5 items-start">
                <span className="text-taupe font-body font-light text-sm mt-1 flex-shrink-0 w-5 text-right">{i + 1}</span>
                {nota.href ? (
                  <Link href={nota.href} className="text-night font-body font-light text-lg leading-relaxed border-b border-taupe/40 hover:border-terracotta hover:text-terracotta transition-colors">
                    {nota.texto}
                  </Link>
                ) : (
                  <p className="text-night font-body font-light text-lg leading-relaxed">{nota.texto}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── GUÍAS (discreto, sin precios) ── */}
      <section className="py-16 md:py-20 border-t border-taupe/20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="font-body font-light text-taupe text-base leading-relaxed max-w-lg">
            Si te sirve, también preparé rutas hora a hora para organizarte el viaje.{' '}
            <Link
              href="/itinerarios"
              className="text-night border-b border-night pb-0.5 hover:text-terracotta hover:border-terracotta transition-colors"
            >
              Las encuentras aquí
            </Link>{' '}
            →
          </p>
        </div>
      </section>
    </main>
  );
}
