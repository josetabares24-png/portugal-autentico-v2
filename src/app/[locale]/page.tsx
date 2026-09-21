import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Qué Ver en Lisboa 2026 — Guías Gratis, Historia, Barrios y Rutas',
  description: 'Guía completa de Lisboa 2026: qué ver, dónde comer, historia de la ciudad, miradores, barrios y rutas. Gratis, escrita por alguien que vive aquí.',
  openGraph: {
    title: 'Qué Ver en Lisboa 2026 — Guías Gratis de Local',
    description: 'Guía gratuita de Lisboa 2026: barrios, gastronomía, historia, miradores y rutas a pie.',
    url: 'https://estabaenlisboa.com',
    images: [
      {
        url: 'https://estabaenlisboa.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Estaba en Lisboa — guías de Lisboa escritas por un local',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qué Ver en Lisboa 2026 — Guías Gratis de Local',
    description: 'Guía gratuita de Lisboa 2026: barrios, gastronomía, historia, miradores y rutas a pie.',
    images: ['https://estabaenlisboa.com/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com',
  },
};

const historias = [
  blogPosts.find(p => p.id === 'time-out-market-lisboa') || blogPosts[0],
  blogPosts.find(p => p.id === 'estacion-oriente-lisboa') || blogPosts[1],
  blogPosts.find(p => p.id === 'estacion-olaias-lisboa') || blogPosts[2],
].filter(Boolean);

const barrios = [
  { nombre: 'Alfama', href: '/blog/alfama-historia-guia', imagen: '/images/alfama-panoramica.jpg' },
  { nombre: 'Graça', href: '/blog/graca-lisboa-que-ver', imagen: '/images/miradouro-grupo-atardecer.jpg' },
  { nombre: 'Mouraria', href: '/blog/mouraria-barrio-guia', imagen: '/images/bica-cafe-mapa.jpg' },
  { nombre: 'Chiado y Bairro Alto', href: '/blog/chiado-bairro-alto-guia', imagen: '/images/bairro-alto-calle-noche.jpg' },
  { nombre: 'Belém', href: '/blog/belem-barrio-guia', imagen: '/images/miradouro-atardecer.jpg' },
  { nombre: 'Baixa', href: '/blog/baixa-lisboa-que-ver', imagen: '/images/lisboa-originales/baixa-pombalina-lisboa-02.webp' },
];

const libreta: { texto: string; href?: string }[] = [
  { texto: 'Alfama se disfruta mejor sin intentar convertir cada calle en una parada.', href: '/blog/alfama-historia-guia' },
  { texto: 'En los miradores, la hora importa casi tanto como el lugar.', href: '/blog/mejores-miradores-lisboa' },
  { texto: 'Si subes a Graça en transporte y bajas a pie, ahorras una de las cuestas más pesadas.', href: '/blog/graca-lisboa-que-ver' },
  { texto: 'El tranvía 28 funciona mejor como experiencia que como solución rápida para cruzar la ciudad.', href: '/blog/tram-28-historia-guia' },
  { texto: 'Belém tiene más sentido como bloque de varias horas que como una parada rápida entre dos planes del centro.', href: '/blog/belem-barrio-guia' },
  { texto: 'Desde el aeropuerto, la Línea Roja conecta con la red de Metro; la mejor opción depende de tu equipaje y alojamiento.', href: '/blog/aeropuerto-lisboa-al-centro' },
];

export default function HomePage() {
  return (
    <main id="main-content" className="bg-cream">
      {/* ── HERO ── */}
      <section className="relative h-[calc(100svh-4rem)] min-h-[560px] max-h-[820px] overflow-hidden md:min-h-[620px]">
        <Image
          src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg"
          alt="Vista de Alfama y del río Tajo desde un mirador de Lisboa"
          fill
          className="scale-[1.22] object-cover object-[52%_50%] md:scale-100 md:object-center"
          priority
          fetchPriority="high"
          /*
           * 90 tenía sentido con el original de 1280, que se ampliaba x4 y
           * necesitaba conservar cada píxel. Con 3840 la foto se dibuja a su
           * tamaño o por debajo, así que 75 no se distingue a simple vista
           * (1,22/255 de diferencia media) y pesa la mitad: 627 KB en vez de
           * 1,4 MB. Es la imagen del LCP, así que el peso cuenta.
           */
          quality={75}
          /*
           * La caja es más alta que ancha y la foto es apaisada, así que
           * `object-cover` la pinta mucho más ancha que el viewport: en un
           * móvil de 393 px se dibuja a ~1709 px CSS, no a 393. Con `100vw`
           * el navegador pedía una variante cuatro veces más pequeña de la
           * que necesita y la ampliaba él. Estos valores describen el ancho
           * real de render, no el del hueco.
           */
          sizes="(max-width: 767px) 450vw, (max-width: 1279px) 190vw, 100vw"
        />
        {/* Overlay solo abajo-izquierda */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top right, rgba(10,15,30,0.82) 0%, rgba(10,15,30,0.45) 35%, transparent 65%)',
          }}
        />

        <div className="absolute bottom-0 left-0 max-w-3xl p-7 sm:p-10 md:p-16">
          <h1
            className="font-display italic text-white leading-[1.02] mb-4"
            style={{ fontSize: 'clamp(2.45rem, 5.2vw, 4.6rem)', fontWeight: 400 }}
          >
            La Lisboa que le enseño a quien viene a verme.
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Vivo en Lisboa desde hace más de tres años. Estas son mis rutas, lugares y consejos para recorrerla con sentido.
          </p>
          <Link href="/itinerarios" className="btn-ghost-light btn-lg">
            Ver itinerarios →
          </Link>
        </div>
      </section>

      {/* ── QUÉ VER / HUB SEO ── */}
      <section className="border-b border-taupe/20 bg-cream py-14 md:py-18">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">Primera vez en la ciudad</p>
          <h2
            className="mb-5 font-display italic leading-tight text-night"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400 }}
          >
            Qué ver en Lisboa y por dónde empezar
          </h2>
          <p className="mb-8 max-w-3xl font-body text-base leading-relaxed text-text-secondary md:text-lg">
            Si estás organizando el viaje, empieza por el tiempo que tienes y después baja a cada barrio.
            Las rutas de 1, 2, 3, 4 y 5 días conectan lo esencial con guías específicas de Alfama, Belém,
            Baixa, Graça, miradores, transporte, Sintra y planes alternativos si cambia el tiempo.
          </p>
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: '/itinerarios', label: 'Itinerarios de 1, 2 y 3 días', text: 'Rutas organizadas para una primera visita.' },
              { href: '/blog/lisboa-en-4-dias', label: 'Lisboa en 4 días', text: 'Centro, Belém, Sintra y una jornada más local.' },
              { href: '/blog/lisboa-en-5-dias', label: 'Lisboa en 5 días', text: 'Más barrios, Parque das Nações y Sintra con calma.' },
              { href: '/blog/barrios-imprescindibles', label: 'Barrios de Lisboa', text: 'Elige las zonas que mejor encajan con tu viaje.' },
              { href: '/blog/metro-lisboa-guia', label: 'Metro de Lisboa', text: 'Líneas, horarios y billetes de 2026.' },
              { href: '/blog/lisboa-cuando-llueve', label: 'Lisboa con lluvia', text: 'Planes cubiertos y cómo reorganizar el día.' },
              { href: '/blog/sintra-desde-lisboa', label: 'Sintra desde Lisboa', text: 'Cómo dedicarle un día sin improvisar.' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group border-t border-taupe/30 pt-4">
                <span className="font-body text-sm font-semibold text-night transition-colors group-hover:text-terracotta">
                  {item.label} →
                </span>
                <span className="mt-1 block font-body text-sm leading-relaxed text-text-secondary">{item.text}</span>
              </Link>
            ))}
          </div>
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
                  <p className="text-text-secondary font-body leading-relaxed text-base mb-5 line-clamp-3">
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

      {/* ── FREE TOURS ── */}
      <section className="py-20 md:py-28" style={{ background: '#EDE7DA' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/lisboa-originales/baixa-pombalina-lisboa-02.webp"
                alt="Calle de la Baixa Pombalina descendiendo hacia el río Tajo, en el centro de Lisboa"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className="font-display italic text-night mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400 }}>
                Free tours en Lisboa
              </h2>
              <p className="font-body font-light text-night/80 text-lg leading-relaxed mb-7">
                Compara recorridos por el centro, Alfama, Belém y otras zonas de Lisboa
                antes de reservar.
              </p>
              <Link
                href="/free-tours-lisboa"
                className="btn-primary btn-lg"
              >
                Ver free tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOS BARRIOS ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-display italic text-night mb-14"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400 }}>
            Los barrios
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {barrios.map((barrio) => (
              <Link key={barrio.nombre} href={barrio.href} className="group block">
                <div className="relative aspect-square overflow-hidden mb-3 rounded-lg shadow-card group-hover:shadow-card-hover transition-shadow duration-300">
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
      <section className="py-20 md:py-28" style={{ background: '#EDE7DA' }}>
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

      {/* ── GUÍAS ── */}
      <section className="relative bg-night bg-azulejo-pattern-gold py-20 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-body font-light text-white/80 text-base leading-relaxed max-w-lg">
            Si te sirve, también preparé rutas hora a hora para organizarte el viaje.
          </p>
          <Link href="/itinerarios" className="btn-primary flex-shrink-0">
            Ver itinerarios →
          </Link>
        </div>
      </section>
    </main>
  );
}
