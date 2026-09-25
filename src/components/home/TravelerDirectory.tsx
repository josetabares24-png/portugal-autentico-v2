'use client';

import Image from 'next/image';
import {
  ArrowRight,
  CalendarDays,
  Camera,
  GlassWater,
  Landmark,
  ShieldAlert,
  TrainFront,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';
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
  icon: LucideIcon;
  actionTitle: string;
  actionDetail: string;
};

const primaryPortalIds = ['routes', 'visit', 'mobility', 'food'];
const secondaryPortalIds = ['drinks', 'spots', 'safety'];

const portalPresentation: Record<string, PortalPresentation> = {
  routes: {
    icon: CalendarDays,
    actionTitle: 'Organizar mis días',
    actionDetail: 'Rutas de 1 a 7 días',
  },
  visit: {
    icon: Landmark,
    actionTitle: 'Elegir qué ver',
    actionDetail: 'Esenciales, gratis y con niños',
  },
  mobility: {
    icon: TrainFront,
    actionTitle: 'Moverme por Lisboa',
    actionDetail: 'Metro, tranvías y aeropuerto',
  },
  food: {
    icon: UtensilsCrossed,
    actionTitle: 'Comer bien',
    actionDetail: 'Local, barato y sin trampas',
  },
  drinks: {
    icon: GlassWater,
    actionTitle: 'Tomar algo',
    actionDetail: 'Bares y ambiente',
  },
  spots: {
    icon: Camera,
    actionTitle: 'Hacer fotos',
    actionDetail: 'Luz y lugares',
  },
  safety: {
    icon: ShieldAlert,
    actionTitle: 'Evitar errores',
    actionDetail: 'Consejos prácticos',
  },
};

function sortPortals(portals: Portal[], ids: string[]) {
  return ids.flatMap((id) => portals.filter((portal) => portal.portalId === id));
}

export default function TravelerDirectory({ portals }: { portals: Portal[] }) {
  const primaryPortals = sortPortals(portals, primaryPortalIds);
  const secondaryPortals = sortPortals(portals, secondaryPortalIds);
  const photoPortal = portals.find((portal) => portal.portalId === 'routes') ?? portals[0];

  return (
    <div className="overflow-hidden border border-night/15 bg-night/15">
      <div className="grid gap-px lg:grid-cols-[minmax(300px,0.72fr)_minmax(0,1.28fr)]">
        <div className="relative min-h-[210px] overflow-hidden bg-night sm:min-h-[260px] lg:min-h-[372px]">
          <Image
            src={photoPortal.heroImage}
            alt={photoPortal.heroAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 40vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
            <div className="mb-4 h-0.5 w-10 bg-terracotta" aria-hidden="true" />
            <p className="mb-2 font-body text-[0.65rem] uppercase tracking-[0.17em] text-white/65">
              Una forma sencilla de empezar
            </p>
            <p className="max-w-md font-display text-[1.85rem] font-semibold not-italic leading-[1.08] tracking-normal text-white sm:text-[2.25rem]">
              Primero decide cuántos días tienes.
            </p>
            <p className="mt-3 font-body text-sm text-white/75">Después todo encaja mejor.</p>
          </div>
        </div>

        <nav aria-label="Decisiones principales para preparar Lisboa" className="grid grid-cols-2 gap-px bg-night/15">
          {primaryPortals.map((portal, index) => {
            const presentation = portalPresentation[portal.portalId];
            const Icon = presentation.icon;
            const isFeatured = index === 0;

            return (
              <TrackedInternalLink
                key={portal.slug}
                href={`/guia/${portal.slug}`}
                contentType="home_guide_portal"
                contentId={portal.portalId}
                className={`group relative flex min-h-[148px] flex-col justify-between p-5 transition-colors duration-200 sm:min-h-[170px] sm:p-6 lg:min-h-[185px] lg:p-7 ${
                  isFeatured
                    ? 'bg-night text-white hover:bg-[#22395f]'
                    : 'bg-[#FBF8F2] text-night hover:bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <Icon
                    size={21}
                    strokeWidth={1.65}
                    className={isFeatured ? 'text-gold' : 'text-terracotta'}
                    aria-hidden="true"
                  />
                  <ArrowRight
                    size={19}
                    strokeWidth={1.7}
                    className={`transition-transform duration-200 group-hover:translate-x-1 ${
                      isFeatured ? 'text-white/70' : 'text-night/55'
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-6">
                  <span className="block font-display text-[1.08rem] font-semibold not-italic leading-[1.12] tracking-normal sm:text-[1.35rem] lg:text-[1.5rem]">
                    {presentation.actionTitle}
                  </span>
                  <span
                    className={`mt-2 block font-body text-[0.68rem] leading-relaxed sm:text-xs ${
                      isFeatured ? 'text-white/65' : 'text-text-secondary'
                    }`}
                  >
                    {presentation.actionDetail}
                  </span>
                </div>
              </TrackedInternalLink>
            );
          })}
        </nav>
      </div>

      <nav aria-label="Más formas de preparar Lisboa" className="grid grid-cols-3 gap-px border-t border-night/15 bg-night/15">
        {secondaryPortals.map((portal) => {
          const presentation = portalPresentation[portal.portalId];
          const Icon = presentation.icon;

          return (
            <TrackedInternalLink
              key={portal.slug}
              href={`/guia/${portal.slug}`}
              contentType="home_guide_portal"
              contentId={portal.portalId}
              className="group flex min-h-[72px] items-center gap-2 bg-[#FBF8F2] px-3 py-3 text-night transition-colors duration-200 hover:bg-white sm:gap-3 sm:px-5"
            >
              <Icon size={17} strokeWidth={1.65} className="flex-none text-terracotta" aria-hidden="true" />
              <span className="min-w-0 flex-1 font-body text-[0.68rem] font-semibold leading-tight sm:text-sm">
                {presentation.actionTitle}
              </span>
              <ArrowRight
                size={15}
                strokeWidth={1.7}
                className="hidden flex-none text-night/45 transition-transform duration-200 group-hover:translate-x-1 sm:block"
                aria-hidden="true"
              />
            </TrackedInternalLink>
          );
        })}
      </nav>
    </div>
  );
}
