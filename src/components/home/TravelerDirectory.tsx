'use client';

import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import TrackedInternalLink from '@/components/TrackedInternalLink';

type Portal = {
  slug: string;
  portalId: string;
  shortTitle: string;
  portalQuestion: string;
  eyebrow: string;
  portalSubtitle: string;
  portalTopics: string[];
  heroImage: string;
  heroAlt: string;
};

type PortalPresentation = {
  eyebrow: string;
  title: string;
  detail: string;
};

const portalPresentation: Record<string, PortalPresentation> = {
  visit: {
    eyebrow: 'Qué ver',
    title: '¿Qué merece tu tiempo?',
    detail: 'Lo esencial, lo gratuito y lo que conviene reservar.',
  },
  mobility: {
    eyebrow: 'Cómo moverte',
    title: 'Cruza menos. Disfruta más.',
    detail: 'Metro, tranvías, aeropuerto y cuándo merece la pena caminar.',
  },
  food: {
    eyebrow: 'Dónde comer',
    title: 'Comer bien sin caer en lo de siempre.',
    detail: 'Cocina portuguesa, tascas, mercados y opciones para cada presupuesto.',
  },
  drinks: {
    eyebrow: 'Tomar algo',
    title: 'Elegir el ambiente',
    detail: 'Terrazas, fado y noches tranquilas.',
  },
  spots: {
    eyebrow: 'Hacer fotos',
    title: 'Encontrar la mejor luz',
    detail: 'Miradores, calles y atardeceres.',
  },
  safety: {
    eyebrow: 'Antes de salir',
    title: 'Evitar errores típicos',
    detail: 'Transporte, precios y reservas.',
  },
};

const itineraryShortcuts = [
  { label: '1 día', detail: 'Lo esencial', href: '/itinerarios/lisboa-1-dia-lo-esencial' },
  { label: '2 días', detail: 'Lisboa completa', href: '/itinerarios/lisboa-2-dias-completo' },
  { label: '3 días', detail: 'Lisboa + Sintra', href: '/itinerarios/lisboa-3-dias-premium' },
];

function findPortal(portals: Portal[], portalId: string) {
  return portals.find((portal) => portal.portalId === portalId);
}

export default function TravelerDirectory({ portals }: { portals: Portal[] }) {
  const routesPortal = findPortal(portals, 'routes');
  const primaryPortals = ['visit', 'mobility', 'food']
    .map((portalId) => findPortal(portals, portalId))
    .filter((portal): portal is Portal => Boolean(portal));
  const secondaryPortals = ['drinks', 'spots', 'safety']
    .map((portalId) => findPortal(portals, portalId))
    .filter((portal): portal is Portal => Boolean(portal));

  return (
    <>
      <div className="bg-night text-white">
        <div className="mx-auto grid max-w-6xl gap-9 px-5 py-11 sm:px-6 md:px-10 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <p className="mb-3 font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
              Empieza por tus días
            </p>
            <h2 className="max-w-xl font-display text-[2.15rem] font-semibold not-italic leading-[1.08] tracking-normal text-white sm:text-[2.7rem]">
              ¿Cuánto tiempo tienes para Lisboa?
            </h2>
            <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-white/75 sm:text-base">
              Empieza con una ruta realista. Después añade barrios, comidas y planes sin cruzar la ciudad de un lado a otro.
            </p>
            {routesPortal ? (
              <TrackedInternalLink
                href={`/guia/${routesPortal.slug}`}
                contentType="home_guide_portal"
                contentId={routesPortal.portalId}
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-terracotta px-6 py-3 font-body text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Ver todas las rutas
                <ArrowRight size={17} aria-hidden="true" />
              </TrackedInternalLink>
            ) : null}
          </div>

          <nav
            aria-label="Itinerarios por duración"
            className="grid grid-cols-3 border-y border-white/20 lg:border-y-0 lg:border-l"
          >
            {itineraryShortcuts.map((shortcut) => (
              <TrackedInternalLink
                key={shortcut.href}
                href={shortcut.href}
                contentType="home_itinerary_shortcut"
                contentId={shortcut.label.replace(' ', '_')}
                className="group flex min-h-28 flex-col justify-center border-r border-white/20 px-3 py-5 text-center last:border-r-0 sm:min-h-32 sm:px-5 lg:min-h-40"
              >
                <span className="font-display text-[1.35rem] font-semibold not-italic leading-none text-white transition-colors group-hover:text-gold sm:text-[1.7rem]">
                  {shortcut.label}
                </span>
                <span className="mt-2 font-body text-[0.65rem] leading-snug text-white/55 sm:text-xs">
                  {shortcut.detail}
                </span>
              </TrackedInternalLink>
            ))}
          </nav>
        </div>
      </div>

      <div className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="mb-9 grid gap-4 md:grid-cols-[1fr_0.78fr] md:items-end md:gap-10">
            <div>
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Organiza lo importante
              </p>
              <h2 className="max-w-2xl font-display text-[2.05rem] font-semibold not-italic leading-[1.1] tracking-normal text-night sm:text-[2.65rem] md:text-[3rem]">
                Tres decisiones que cambian el viaje.
              </h2>
            </div>
            <p className="max-w-lg font-body text-sm leading-relaxed text-text-secondary md:justify-self-end md:text-base">
              Qué ver, cómo moverte y dónde comer. Resuelve eso primero y Lisboa deja de parecer una lista infinita.
            </p>
          </div>

          <nav
            aria-label="Guías principales para preparar Lisboa"
            className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2"
          >
            {primaryPortals.map((portal, index) => {
              const presentation = portalPresentation[portal.portalId];
              const isLead = index === 0;

              return (
                <TrackedInternalLink
                  key={portal.slug}
                  href={`/guia/${portal.slug}`}
                  contentType="home_guide_portal"
                  contentId={portal.portalId}
                  className={`group relative min-h-[285px] overflow-hidden rounded-[6px] bg-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta sm:min-h-[340px] ${
                    isLead
                      ? 'lg:col-span-7 lg:row-span-2 lg:min-h-[590px]'
                      : 'lg:col-span-5 lg:min-h-[287px]'
                  }`}
                >
                  <Image
                    src={portal.heroImage}
                    alt={portal.heroAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    sizes={isLead ? '(max-width: 1023px) 100vw, 58vw' : '(max-width: 1023px) 100vw, 42vw'}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/25 to-night/5" />

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-night/15 text-white backdrop-blur-sm transition-colors duration-200 group-hover:border-terracotta group-hover:bg-terracotta sm:right-6 sm:top-6">
                    <ArrowUpRight size={19} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <div className={`absolute inset-x-0 bottom-0 ${isLead ? 'p-6 sm:p-9' : 'p-6 sm:p-7'}`}>
                    <p className="mb-2 font-body text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-gold">
                      {presentation.eyebrow}
                    </p>
                    <h3
                      className={`max-w-xl font-display font-semibold not-italic leading-[1.08] tracking-normal text-white ${
                        isLead ? 'text-[2rem] sm:text-[2.65rem]' : 'text-[1.65rem] sm:text-[2rem]'
                      }`}
                    >
                      {presentation.title}
                    </h3>
                    <p className={`mt-3 max-w-lg font-body leading-relaxed text-white/80 ${isLead ? 'text-sm sm:text-base' : 'text-sm'}`}>
                      {presentation.detail}
                    </p>
                  </div>
                </TrackedInternalLink>
              );
            })}
          </nav>

          <div className="mt-8 flex flex-col gap-3 border-t border-taupe/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-body text-sm leading-relaxed text-text-secondary">
              ¿Es tu primera mañana? Un recorrido a pie ayuda a situar los barrios antes de seguir por tu cuenta.
            </p>
            <TrackedInternalLink
              href="/free-tours-lisboa"
              contentType="home_secondary_cta"
              contentId="free_tours"
              className="inline-flex w-fit items-center gap-2 font-body text-sm font-semibold text-night transition-colors hover:text-terracotta"
            >
              Ver free tours
              <ArrowRight size={16} aria-hidden="true" />
            </TrackedInternalLink>
          </div>
        </div>
      </div>

      <div className="relative min-h-[500px] overflow-hidden bg-night sm:min-h-[530px]">
        <Image
          src="/images/lisboa-originales/rua-baixa-lisboa-01.webp"
          alt="Calle de la Baixa de Lisboa con sus fachadas, tranvías y peatones"
          fill
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
          <div className="absolute inset-0 bg-night/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/45 to-transparent" />

          <div className="relative mx-auto flex min-h-[500px] max-w-6xl flex-col justify-center px-5 py-16 sm:min-h-[530px] sm:px-6 md:px-10">
            <div className="max-w-2xl">
              <p className="mb-3 font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Cuando ya sabes lo básico
              </p>
              <h2 className="font-display text-[2.15rem] font-semibold not-italic leading-[1.08] tracking-normal text-white sm:text-[3rem]">
                Deja un poco de espacio para improvisar.
              </h2>
              <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/80 sm:text-base">
                Una copa, una buena luz o un consejo a tiempo también pueden decidir cómo recuerdas la ciudad.
              </p>
            </div>

            <nav aria-label="Más formas de vivir Lisboa" className="mt-8 flex max-w-3xl flex-col gap-3 sm:flex-row sm:flex-wrap">
              {secondaryPortals.map((portal, index) => {
                const presentation = portalPresentation[portal.portalId];

                return (
                  <TrackedInternalLink
                    key={portal.slug}
                    href={`/guia/${portal.slug}`}
                    contentType="home_guide_portal"
                    contentId={portal.portalId}
                    className={`group inline-flex min-h-12 items-center justify-between gap-4 rounded-[4px] px-5 py-3 font-body text-sm font-semibold transition-colors duration-200 sm:justify-center ${
                      index === 0
                        ? 'bg-terracotta text-white hover:bg-primary-dark'
                        : 'border border-white/65 bg-night/15 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-night'
                    }`}
                  >
                    {presentation.title}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </TrackedInternalLink>
                );
              })}
            </nav>
          </div>
      </div>
    </>
  );
}
