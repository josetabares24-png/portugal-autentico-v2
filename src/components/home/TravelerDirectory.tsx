'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import TrackedInternalLink from '@/components/TrackedInternalLink';

type Portal = {
  slug: string;
  portalId: string;
  heroImage: string;
  heroAlt: string;
};

type PortalPresentation = {
  title: string;
  detail: string;
  layout: string;
  sizes: string;
  imagePosition?: string;
};

const portalOrder = ['routes', 'visit', 'mobility', 'food', 'drinks', 'spots', 'safety'];

const portalPresentation: Record<string, PortalPresentation> = {
  routes: {
    title: 'Organizar mis días',
    detail: 'Rutas realistas para 1, 2, 3 días o una semana en Lisboa.',
    layout: 'lg:col-span-7',
    sizes: '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw',
  },
  visit: {
    title: 'Qué ver',
    detail: 'Lo esencial, lo gratuito y lo que conviene reservar.',
    layout: 'lg:col-span-5',
    sizes: '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 42vw',
  },
  mobility: {
    title: 'Cómo moverte',
    detail: 'Metro, tranvías, aeropuerto y cuándo merece la pena caminar.',
    layout: 'md:col-span-2 lg:col-span-12 lg:min-h-[430px]',
    sizes: '100vw',
    imagePosition: 'object-[50%_58%]',
  },
  food: {
    title: 'Dónde comer',
    detail: 'Cocina portuguesa, tascas, mercados y opciones para cada presupuesto.',
    layout: 'lg:col-span-7',
    sizes: '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw',
  },
  drinks: {
    title: 'Dónde tomar algo',
    detail: 'Terrazas, fado y lugares tranquilos para terminar el día.',
    layout: 'lg:col-span-5',
    sizes: '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 42vw',
  },
  spots: {
    title: 'Dónde hacer fotos',
    detail: 'Miradores, calles y la mejor luz según la hora.',
    layout: 'lg:col-span-6',
    sizes: '(max-width: 767px) 100vw, 50vw',
  },
  safety: {
    title: 'Qué evitar',
    detail: 'Errores frecuentes con precios, transporte y reservas.',
    layout: 'lg:col-span-6',
    sizes: '(max-width: 767px) 100vw, 50vw',
  },
};

export default function TravelerDirectory({ portals }: { portals: Portal[] }) {
  const orderedPortals = portalOrder
    .map((portalId) => portals.find((portal) => portal.portalId === portalId))
    .filter((portal): portal is Portal => Boolean(portal));

  return (
    <div className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <div className="mb-9 max-w-3xl md:mb-12">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Prepara tu viaje
          </p>
          <h2 className="font-display text-[2.25rem] font-semibold not-italic leading-[1.06] tracking-normal text-night sm:text-[3rem] md:text-[3.55rem]">
            Lisboa, parte por parte.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-text-secondary md:text-lg">
            Días, lugares, transporte y comida explicados con calma para que el viaje no se convierta en una lista infinita.
          </p>
        </div>

        <nav aria-label="Guías para preparar Lisboa" className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {orderedPortals.map((portal) => {
            const presentation = portalPresentation[portal.portalId];

            return (
              <TrackedInternalLink
                key={portal.slug}
                href={`/guia/${portal.slug}`}
                contentType="home_guide_portal"
                contentId={portal.portalId}
                className={`group relative flex min-h-[320px] overflow-hidden rounded-[6px] bg-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta sm:min-h-[360px] lg:min-h-[410px] ${presentation.layout}`}
              >
                <Image
                  src={portal.heroImage}
                  alt={portal.heroAlt}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] ${presentation.imagePosition ?? 'object-center'}`}
                  sizes={presentation.sizes}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/5" />

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/55 bg-night/20 text-white backdrop-blur-sm transition-colors duration-200 group-hover:border-terracotta group-hover:bg-terracotta sm:right-6 sm:top-6">
                  <ArrowUpRight size={20} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <div className="relative mt-auto max-w-3xl p-6 sm:p-8 md:p-9">
                  <h3 className="font-display text-[2rem] font-semibold not-italic leading-[1.03] tracking-normal text-white sm:text-[2.45rem] lg:text-[2.7rem]">
                    {presentation.title}
                  </h3>
                  <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-white/85 sm:text-base">
                    {presentation.detail}
                  </p>
                </div>
              </TrackedInternalLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
