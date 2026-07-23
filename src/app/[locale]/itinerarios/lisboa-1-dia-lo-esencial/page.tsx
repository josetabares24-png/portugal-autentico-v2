import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import { EditorialTimelineStop } from '@/components/itinerarios/EditorialTimelineStop';
import { PremiumContent } from '@/components/itinerarios/PremiumContent';
import { lisboa1DiaTimeline } from '@/data/itineraries';

export const metadata = {
  title: 'Lisboa en 1 Día: Lo Esencial 2026',
  description: '8 paradas imprescindibles en Lisboa en un solo día. Alfama, Castillo, Belém y más. Itinerario optimizado con horarios y consejos locales.',
  keywords: ['lisboa 1 dia', 'itinerario lisboa un dia', 'que ver lisboa'],
  openGraph: { url: 'https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial' },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial' },
};

const navItems = [
  { href: '#resumen', label: 'Resumen' },
  { href: '#ruta', label: 'Ruta' },
  { href: '#mapa', label: 'Mapa' },
  { href: '#consejos', label: 'Consejos' },
];

const summaryItems = [
  {
    icon: 'photo_camera',
    title: 'Spots fotográficos',
    description: 'Mejores ángulos, luz ideal y puntos sin aglomeraciones.',
  },
  {
    icon: 'map',
    title: 'Mapa con GPS',
    description: 'Enlaces directos a Google Maps y ruta optimizada.',
  },
  {
    icon: 'lightbulb',
    title: 'Tips anti-colas',
    description: 'Horarios inteligentes y accesos recomendados.',
  },
  {
    icon: 'cloud',
    title: 'Plan B por clima',
    description: 'Opciones interiores y rutas cubiertas si llueve.',
  },
];

const beforeStartItems = [
  'Empieza a las 09:00 en la Catedral Sé y sube caminando hacia el castillo.',
  'Lleva calzado cómodo: la calçada portuguesa puede ser resbaladiza.',
  'Para ir a Belém después de comer, usa el tranvía 15E desde Praça da Figueira o un Uber.',
  'En el castillo hay calor y poca sombra: lleva agua, gorra y algo ligero.',
];

const editorialImages: Record<number, { src: string; alt: string; caption: string }> = {
  1: {
    src: '/images/alfama-callejon.jpg',
    alt: 'Calle estrecha de Alfama durante una ruta a pie por Lisboa',
    caption: 'Alfama se entiende mejor caminando despacio, sin perseguir cada giro del mapa.',
  },
  5: {
    src: '/images/mirador-tajo-amarras-atardecer.jpg',
    alt: 'Vista del río Tajo al atardecer en Lisboa',
    caption: 'El Tajo marca el cambio de ritmo entre Belém, LX Factory y la vuelta al centro.',
  },
};

export default function Lisboa1DiaPage() {
  const displayStops = lisboa1DiaTimeline;
  const totalStops = lisboa1DiaTimeline.length;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Lisboa en 1 Día: Lo Esencial 2026',
    description: '8 paradas imprescindibles en Lisboa en un solo día. Alfama, Castillo, Belém y más. Itinerario optimizado con horarios y consejos locales.',
    url: 'https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial',
    isAccessibleForFree: true,
  };

  return (
    <main id="main-content" className="bg-background-light text-text-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section id="inicio" className="relative h-[58vh] min-h-[430px] overflow-hidden md:h-[62vh]">
        <Image
          src="/images/alfama-panoramica.jpg"
          alt="Lisboa en 1 día - Lo esencial"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/80 via-night/45 to-night/20" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-6 pb-8 md:pb-12">
            <Link
              href="/itinerarios"
              className="mb-4 inline-flex min-h-10 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/75 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Icon name="arrow_back" size={14} />
              Itinerarios
            </Link>

            <div className="max-w-3xl">
              <h1 className="font-display italic text-[2.7rem] leading-[0.96] text-white sm:text-5xl md:text-7xl">
                Lisboa en 1 día
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                Una ruta práctica para recorrer lo esencial de Lisboa en un día: Alfama, castillo,
                Belém, LX Factory y cierre en Bairro Alto, con horarios y consejos locales.
              </p>
            </div>

            <dl className="mt-6 grid max-w-3xl grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                ['Duración', '1 día'],
                ['Paradas', `${totalStops}`],
                ['Horario', '09:00-21:00'],
                ['Barrios', 'Alfama · Castillo · Belém'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/20 bg-night/40 p-3 backdrop-blur-sm">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/70">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug text-white">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Navegación interna */}
      <section className="sticky top-16 z-30 border-b border-border-soft bg-background-light/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6">
          <nav
            aria-label="Navegación de la guía"
            className="-mx-2 flex gap-2 overflow-x-auto px-2 py-3"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-10 flex-shrink-0 items-center rounded-full border border-border-soft px-4 py-2 text-sm font-semibold text-text-secondary transition-colors hover:border-terracotta hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#parada-1"
              className="inline-flex min-h-10 flex-shrink-0 items-center rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Empezar ruta
            </a>
          </nav>
        </div>
      </section>

      {/* Resumen */}
      <section id="resumen" className="scroll-mt-32 py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-secondary">
              Resumen rápido
            </p>
            <h2 className="font-display italic text-3xl leading-tight text-text-main md:text-4xl">
              Lo que necesitas antes de salir
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {summaryItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border-soft bg-white/80 p-4 shadow-sm"
              >
                <Icon name={item.icon} size={18} className="mb-3 text-terracotta" />
                <h3 className="text-sm font-semibold text-text-main">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#5b6470] sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Antes de empezar */}
      <section id="consejos" className="scroll-mt-32 pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[1.5rem] border border-terracotta/25 bg-terracotta/5 p-5 md:p-7">
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.7fr),minmax(0,1fr)] md:items-start">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-terracotta">
                  Consejos prácticos
                </p>
                <h2 className="font-display italic text-3xl leading-tight text-text-main">
                  Antes de empezar
                </h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {beforeStartItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#374151]">
                    <Icon name="check" size={16} className="mt-0.5 flex-shrink-0 text-terracotta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <div id="mapa" className="scroll-mt-32">
        <PremiumContent
          coordinates={lisboa1DiaTimeline
            .filter(stop => stop.coordinates)
            .map(stop => stop.coordinates!)}
          mapTitle="Mapa del recorrido"
          mapDescription="Todas las paradas del día con coordenadas GPS. Haz click en los marcadores para ver cada parada."
          guideTitle="Lisboa en 1 Día"
          showResources={false}
        />
      </div>

      {/* Timeline */}
      <section className="scroll-mt-32 py-12 md:py-16" id="ruta">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 border-b border-border-soft pb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-secondary">
              Ruta completa
            </p>
            <h2 className="font-display italic text-3xl leading-tight text-text-main md:text-4xl">
              Tu recorrido paso a paso
            </h2>
          </div>

          <div className="relative">
            {displayStops.map((stop, idx) => (
              <Fragment key={`${stop.time}-${stop.title}`}>
                <EditorialTimelineStop
                  {...stop}
                  id={`parada-${idx + 1}`}
                  index={idx}
                  isLast={idx === displayStops.length - 1}
                />
                {editorialImages[idx] && (
                  <EditorialRouteImage
                    src={editorialImages[idx].src}
                    alt={editorialImages[idx].alt}
                    caption={editorialImages[idx].caption}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="border-t border-border-soft bg-white/60 py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[1.5rem] border border-border-soft bg-background-light p-6 shadow-sm md:p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-secondary">
              Fin de la ruta
            </p>
            <h2 className="font-display italic text-3xl leading-tight text-text-main">
              De Alfama a Bairro Alto en un día
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-[#374151]">
              La ruta empieza temprano entre las calles de Alfama, baja hacia el centro, se abre al río en Belém y termina con cena en Bairro Alto.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#inicio"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-border-soft px-5 py-3 text-sm font-semibold text-text-secondary transition-colors hover:border-terracotta hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                Volver al inicio
              </a>
              <Link
                href="/itinerarios/lisboa-2-dias-completo"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                Ver Lisboa en 2 días
              </Link>
              <Link
                href="/itinerarios"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-border-soft px-5 py-3 text-sm font-semibold text-text-secondary transition-colors hover:border-terracotta hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                Todos los itinerarios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function EditorialRouteImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="mb-8 overflow-hidden rounded-[1.25rem] border border-border-soft bg-white shadow-sm sm:ml-[3.75rem] md:mb-10">
      <div className="relative aspect-[16/9]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 720px, calc(100vw - 4rem)"
          className="object-cover"
        />
      </div>
      <figcaption className="border-t border-border-soft px-4 py-3 text-xs leading-relaxed text-text-secondary">
        {caption}
      </figcaption>
    </figure>
  );
}
