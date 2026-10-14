import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BusFront, CreditCard, MapPinned, TrainFront } from 'lucide-react';

const PAGE_URL = 'https://estabaenlisboa.com/portugal';
const TITLE = 'Viajar a Portugal 2026: rutas, transporte y consejos';
const DESCRIPTION = 'Guías para viajar por Portugal desde Lisboa: transporte, pagos, escapadas, ciudades y rutas prácticas con información revisada y enlaces a fuentes oficiales.';

const quickGuides = [
  {
    title: 'Cómo moverse por Portugal',
    text: 'Trenes, autobuses, coche y qué elegir según el trayecto.',
    href: '/blog/como-moverse-por-portugal',
    icon: TrainFront,
  },
  {
    title: 'Cómo pagar en Portugal',
    text: 'Tarjeta, efectivo, cajeros y qué revisar para evitar comisiones.',
    href: '/blog/como-pagar-en-portugal',
    icon: CreditCard,
  },
  {
    title: 'Lisboa como base',
    text: 'Qué ver, cómo moverte y cómo organizar la ciudad antes de salir al resto del país.',
    href: '/que-ver-en-lisboa',
    icon: MapPinned,
  },
] as const;

const places = [
  {
    title: 'Sintra',
    eyebrow: 'Excursión desde Lisboa',
    text: 'Palacios, tren desde Rossio y una ruta que no intente meterlo todo en un día.',
    href: '/blog/sintra-desde-lisboa',
    image: '/images/sintra-palacio-turistas.jpg',
    alt: 'Palacio de Sintra con visitantes',
  },
  {
    title: 'Cascais',
    eyebrow: 'Costa',
    text: 'Centro histórico, paseo junto al mar y cómo combinarlo sin perder el día en traslados.',
    href: '/blog/que-ver-cascais-desde-lisboa',
    image: '/images/actividades/cascais-centro-historico.webp',
    alt: 'Centro histórico de Cascais',
  },
  {
    title: 'Óbidos',
    eyebrow: 'Centro de Portugal',
    text: 'Una villa amurallada que funciona bien como escapada y como parada en una ruta hacia el norte.',
    href: '/blog/obidos-vila-natal',
    image: '/images/obidos-calle-casas-encaladas.webp',
    alt: 'Calle de casas encaladas en Óbidos',
  },
] as const;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  authors: [{ name: 'José Tabares', url: 'https://estabaenlisboa.com/sobre-nosotros' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{
      url: 'https://estabaenlisboa.com/images/jose/jose-tabares-oporto.jpg',
      width: 1200,
      height: 630,
      alt: 'José Tabares en Oporto, Portugal',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://estabaenlisboa.com/images/jose/jose-tabares-oporto.jpg'],
  },
};

export default function PortugalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: 'Viajar a Portugal',
    description: DESCRIPTION,
    inLanguage: 'es-ES',
    isPartOf: { '@id': 'https://estabaenlisboa.com/#website' },
    author: { '@id': 'https://estabaenlisboa.com/sobre-nosotros#jose-tabares' },
    about: {
      '@type': 'Country',
      name: 'Portugal',
      sameAs: 'https://www.wikidata.org/wiki/Q45',
    },
    hasPart: [
      'https://estabaenlisboa.com/blog/como-moverse-por-portugal',
      'https://estabaenlisboa.com/blog/como-pagar-en-portugal',
      'https://estabaenlisboa.com/blog/sintra-desde-lisboa',
      'https://estabaenlisboa.com/blog/que-ver-cascais-desde-lisboa',
    ].map((url) => ({ '@type': 'WebPage', url })),
  };

  return (
    <main id="main-content" className="bg-cream text-night">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-night/10">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-10 sm:px-6 md:px-10 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
          <div>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              Portugal desde Lisboa
            </p>
            <h1 className="max-w-3xl font-display text-[2.8rem] font-semibold leading-[1.02] md:text-[4.5rem]">
              Viajar a Portugal sin ir a ciegas.
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-text-secondary md:text-lg">
              Lisboa sigue siendo mi base, pero Portugal no termina en Lisboa. Aquí voy reuniendo rutas,
              transporte, pagos, escapadas y decisiones prácticas para moverte por el país con menos improvisación.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/blog/como-moverse-por-portugal"
                className="inline-flex min-h-12 items-center gap-2 rounded-[4px] bg-terracotta px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Empezar por el transporte
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex min-h-12 items-center gap-2 rounded-[4px] border border-night/20 px-6 py-3 font-body text-sm font-semibold text-night transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Ver todas las guías
              </Link>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-[3px] bg-night md:min-h-[460px]">
            <Image
              src="/images/jose/jose-tabares-oporto.jpg"
              alt="José Tabares en Oporto durante un viaje por Portugal"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 52vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 max-w-md font-body text-sm leading-relaxed text-white/90">
              La idea es sencilla: usar lo que ya conocemos bien de Lisboa para construir una guía cada vez más útil del resto de Portugal.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:px-10 md:py-16" aria-labelledby="por-donde-empezar">
        <div className="mb-7 max-w-3xl">
          <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Lo primero</p>
          <h2 id="por-donde-empezar" className="font-display text-[2.2rem] font-semibold leading-tight md:text-[3rem]">
            Tres cosas que conviene resolver antes de montar la ruta.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {quickGuides.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-[3px] border border-night/10 bg-white p-6 transition-colors hover:border-terracotta/60"
              >
                <Icon size={24} strokeWidth={1.7} className="text-terracotta" aria-hidden="true" />
                <h3 className="mt-5 font-display text-[1.65rem] font-semibold leading-tight group-hover:text-terracotta">
                  {guide.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">{guide.text}</p>
                <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold text-night group-hover:text-terracotta">
                  Abrir guía <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-night/10 bg-white/50">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:px-10 md:py-16">
          <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Salir de Lisboa</p>
              <h2 className="font-display text-[2.2rem] font-semibold leading-tight md:text-[3rem]">
                Empieza cerca antes de intentar recorrer todo Portugal.
              </h2>
            </div>
            <p className="font-body text-sm leading-relaxed text-text-secondary md:text-base">
              Sintra, Cascais y Óbidos permiten ampliar el viaje sin convertir cada día en un traslado largo.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {places.map((place) => (
              <Link key={place.href} href={place.href} className="group overflow-hidden rounded-[3px] border border-night/10 bg-cream">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={place.image} alt={place.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" sizes="(max-width: 767px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-terracotta">{place.eyebrow}</p>
                  <h3 className="mt-2 font-display text-[1.65rem] font-semibold leading-tight group-hover:text-terracotta">{place.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">{place.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] gap-6 px-5 py-12 sm:px-6 md:px-10 md:py-16 lg:grid-cols-2">
        <div className="rounded-[3px] bg-night p-7 text-white md:p-9">
          <BusFront size={26} strokeWidth={1.6} className="text-gold" aria-hidden="true" />
          <p className="mt-5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">Guía nacional</p>
          <h2 className="mt-2 font-display text-[2rem] font-semibold leading-tight md:text-[2.5rem]">
            Tren, autobús o coche: no hay una respuesta única.
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/75 md:text-base">
            Para Lisboa–Oporto suele tener mucho sentido el tren; para algunas villas, el autobús; para rutas con varias paradas o zonas rurales, el coche puede cambiarlo todo. La guía compara cada caso.
          </p>
          <Link href="/blog/como-moverse-por-portugal" className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4">
            Cómo moverse por Portugal <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="rounded-[3px] border border-night/10 bg-white p-7 md:p-9">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Portugal también da curiosidad</p>
          <h2 className="mt-2 font-display text-[2rem] font-semibold leading-tight md:text-[2.5rem]">
            Historias que te llevan a conocer un lugar.
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-text-secondary md:text-base">
            A veces llegas a una zona por una búsqueda que no parece turística. El artículo sobre Cristiano Ronaldo y Quinta da Marinha es una de esas puertas hacia Cascais y la costa portuguesa.
          </p>
          <Link href="/blog/casa-cristiano-ronaldo-portugal-quinta-da-marinha" className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-night underline decoration-terracotta/40 underline-offset-4 hover:text-terracotta">
            Ver Quinta da Marinha <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-night text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:px-10 md:py-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">La regla de esta sección</p>
          <h2 className="mt-3 max-w-3xl font-display text-[2.2rem] font-semibold leading-tight md:text-[3rem]">
            No publicar Portugal por publicar.
          </h2>
          <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-white/75">
            Cada nueva guía tiene que resolver una decisión real: cómo llegar, qué ruta tiene sentido, cuánto tiempo dedicar o qué opción conviene. Si un tema no aporta algo útil, no entra solo porque tenga búsquedas.
          </p>
        </div>
      </section>
    </main>
  );
}
