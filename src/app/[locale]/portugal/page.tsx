import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const PAGE_URL = 'https://estabaenlisboa.com/portugal';
const TITLE = 'Viajar a Portugal 2026: rutas, transporte y consejos';
const DESCRIPTION = 'Guías para viajar por Portugal desde Lisboa: rutas, transporte, pagos y escapadas a Sintra, Cascais, Óbidos, Oporto y otros destinos.';

const quickGuides = [
  {
    title: 'Portugal en 7 días',
    text: 'Una ruta por Lisboa, Sintra y Oporto pensada para disfrutar el viaje sin pasar la semana haciendo y deshaciendo maletas.',
    href: '/blog/portugal-en-7-dias',
  },
  {
    title: 'Cómo moverse por Portugal',
    text: 'Cuándo elegir tren, autobús o coche según la ruta que quieras hacer.',
    href: '/blog/como-moverse-por-portugal',
  },
  {
    title: 'Cómo pagar en Portugal',
    text: 'Tarjeta, efectivo, cajeros y qué conviene revisar antes de viajar.',
    href: '/blog/como-pagar-en-portugal',
  },
  {
    title: 'Lisboa como punto de partida',
    text: 'Qué ver y cómo organizar Lisboa antes de seguir hacia otras zonas del país.',
    href: '/que-ver-en-lisboa',
  },
] as const;

const places = [
  {
    title: 'Sintra',
    eyebrow: 'A 40 minutos de Lisboa',
    text: 'La excursión más fácil de añadir a un viaje a Lisboa. Te explico cómo llegar y cómo organizar los palacios sin intentar verlo todo en un día.',
    href: '/blog/sintra-desde-lisboa',
    image: '/images/sintra-palacio-turistas.jpg',
    alt: 'Palacio de Sintra con visitantes',
  },
  {
    title: 'Cascais',
    eyebrow: 'Costa',
    text: 'Centro histórico, paseo junto al mar y una escapada que puedes hacer sin coche desde Lisboa.',
    href: '/blog/que-ver-cascais-desde-lisboa',
    image: '/images/actividades/cascais-centro-historico.webp',
    alt: 'Centro histórico de Cascais',
  },
  {
    title: 'Óbidos',
    eyebrow: 'Centro de Portugal',
    text: 'Una villa amurallada que funciona bien como excursión y también como parada si vas camino del norte.',
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
      url: 'https://estabaenlisboa.com/images/commons/sintra-palacio-pena-wikimedia.webp',
      width: 1280,
      height: 854,
      alt: 'Palacio da Pena en Sintra, Portugal',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://estabaenlisboa.com/images/commons/sintra-palacio-pena-wikimedia.webp'],
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
      'https://estabaenlisboa.com/blog/portugal-en-7-dias',
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
              Portugal
            </p>
            <h1 className="max-w-3xl font-display text-[2.8rem] font-semibold leading-[1.02] md:text-[4.5rem]">
              Viajar por Portugal desde Lisboa.
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-text-secondary md:text-lg">
              Vivo en Lisboa y muchas veces el viaje no termina aquí. Si tienes unos días más, puedes sumar
              Sintra o Cascais sin complicarte; con una semana ya tiene sentido pensar en Coimbra, Oporto o una
              ruta más larga. Aquí reúno las guías que usaría para organizarlo sin correr de ciudad en ciudad.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/blog/portugal-en-7-dias"
                className="inline-flex min-h-12 items-center gap-2 rounded-[4px] bg-terracotta px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Ver la ruta de 7 días
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/blog/como-moverse-por-portugal"
                className="inline-flex min-h-12 items-center gap-2 rounded-[4px] border border-night/20 px-6 py-3 font-body text-sm font-semibold text-night transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Cómo moverse por Portugal
              </Link>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-[3px] bg-night md:min-h-[460px]">
            <Image
              src="/images/commons/sintra-palacio-pena-wikimedia.webp"
              alt="Palacio da Pena en Sintra, Portugal"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 52vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 max-w-md font-body text-xs leading-relaxed text-white/90">
              Palacio da Pena, Sintra.
              <span className="mt-1 block text-[11px] text-white/75">
                Foto: <a href="https://commons.wikimedia.org/wiki/File:Sintra_Portugal_Pal%C3%A1cio_da_Pena-01.jpg" className="underline underline-offset-2">CEphoto, Uwe Aranas</a>
                {' · '}<a href="https://creativecommons.org/licenses/by-sa/3.0/" className="underline underline-offset-2">CC BY-SA 3.0</a>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-10 sm:px-6 md:px-10 md:py-14" aria-labelledby="organizar-ruta">
        <div className="mb-5 max-w-3xl">
          <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Organiza el viaje</p>
          <h2 id="organizar-ruta" className="max-w-2xl font-display text-2xl font-semibold not-italic leading-snug md:text-3xl">
            Si todavía estás montando la ruta, empezaría por aquí.
          </h2>
        </div>
        <ul className="grid gap-x-10 md:grid-cols-2">
          {quickGuides.map((guide) => (
            <li key={guide.href} className="border-b border-night/15">
              <Link
                href={guide.href}
                className="group flex min-h-11 items-start justify-between gap-5 rounded-sm py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold not-italic leading-snug group-hover:text-terracotta">{guide.title}</h3>
                  <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-text-secondary">{guide.text}</p>
                </div>
                <ArrowUpRight size={18} className="mt-1 shrink-0 text-terracotta" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-night/10 bg-white/50">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:px-10 md:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Escapadas desde Lisboa</p>
            <h2 className="font-display text-2xl font-semibold not-italic leading-snug md:text-3xl">
              Tres lugares que puedes añadir sin cambiar todo el viaje.
            </h2>
            <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-text-secondary md:text-base">
              Si es tu primera vez en Portugal, yo empezaría por estas escapadas antes de intentar meter demasiadas ciudades en pocos días.
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
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">Moverte por el país</p>
          <h2 className="mt-2 font-display text-[2rem] font-semibold leading-tight md:text-[2.5rem]">
            Antes de alquilar coche, mira la ruta completa.
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/75 md:text-base">
            Para Lisboa, Coimbra y Oporto, muchas veces el tren es suficiente. El coche empieza a tener más sentido
            cuando quieres unir playas, pueblos o zonas rurales. En la guía comparo los casos más habituales.
          </p>
          <Link href="/blog/como-moverse-por-portugal" className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4">
            Comparar tren, bus y coche <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="rounded-[3px] border border-night/10 bg-white p-7 md:p-9">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Si tienes una semana</p>
          <h2 className="mt-2 font-display text-[2rem] font-semibold leading-tight md:text-[2.5rem]">
            Lisboa, Sintra y Oporto sin hacer una carrera.
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-text-secondary md:text-base">
            Esta es la ruta que usaría como punto de partida para un primer viaje de siete días: varios días en Lisboa,
            una salida a Sintra y después Oporto, dejando tiempo suficiente para disfrutar cada lugar.
          </p>
          <Link href="/blog/portugal-en-7-dias" className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-night underline decoration-terracotta/40 underline-offset-4 hover:text-terracotta">
            Ver Portugal en 7 días <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-night text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:px-10 md:py-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">Mi punto de partida</p>
          <h2 className="mt-3 max-w-3xl font-display text-[2.2rem] font-semibold leading-tight md:text-[3rem]">
            En Portugal, menos paradas suele significar un viaje mejor.
          </h2>
          <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-white/75">
            El país parece pequeño en el mapa y por eso es fácil querer meter Lisboa, Oporto, el Algarve y varios pueblos
            en una sola semana. Yo prefiero elegir pocas bases y aprovechar bien cada zona. Desde Lisboa tienes mucho al
            alcance sin cambiar de hotel cada noche.
          </p>
        </div>
      </section>
    </main>
  );
}
