'use client';

import Image from 'next/image';
import {
  ArrowUpRight,
  Camera,
  Clock3,
  GlassWater,
  Landmark,
  ShieldAlert,
  TrainFront,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';
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

const portalPresentation: Record<
  string,
  { icon: LucideIcon; accent: string }
> = {
  routes: { icon: Clock3, accent: '#B8472E' },
  mobility: { icon: TrainFront, accent: '#287080' },
  visit: { icon: Landmark, accent: '#A87830' },
  food: { icon: UtensilsCrossed, accent: '#617052' },
  drinks: { icon: GlassWater, accent: '#765064' },
  spots: { icon: Camera, accent: '#46647D' },
  safety: { icon: ShieldAlert, accent: '#9B493F' },
};

export default function TravelerDirectory({ portals }: { portals: Portal[] }) {
  const [activeId, setActiveId] = useState(portals[0]?.portalId ?? 'routes');
  const activePortal = portals.find((portal) => portal.portalId === activeId) ?? portals[0];
  const activeStyle = portalPresentation[activePortal.portalId] ?? portalPresentation.routes;

  return (
    <div className="overflow-hidden border border-night/15 bg-[#FBF8F2]">
      <div className="lg:grid lg:grid-cols-[minmax(0,1.04fr)_minmax(390px,0.96fr)]">
        <div className="relative hidden min-h-[610px] overflow-hidden lg:block">
          <Image
            key={activePortal.heroImage}
            src={activePortal.heroImage}
            alt={activePortal.heroAlt}
            fill
            className="object-cover"
            sizes="56vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-10 xl:p-12">
            <div
              className="mb-6 h-1 w-14"
              style={{ backgroundColor: activeStyle.accent }}
              aria-hidden="true"
            />
            <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-white/65">
              {activePortal.portalQuestion}
            </p>
            <p className="max-w-xl font-display text-[3rem] font-semibold not-italic leading-[1.04] tracking-normal text-white xl:text-[3.5rem]">
              {activePortal.shortTitle}
            </p>
            <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-white/80">
              {activePortal.portalSubtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {activePortal.portalTopics.slice(0, 5).map((topic) => (
                <span key={topic} className="font-body text-xs text-white/60">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        <nav aria-label="Guías para preparar Lisboa" className="divide-y divide-night/10">
          {portals.map((portal) => {
            const presentation = portalPresentation[portal.portalId] ?? portalPresentation.routes;
            const Icon = presentation.icon;
            const isActive = portal.portalId === activeId;

            return (
              <TrackedInternalLink
                key={portal.slug}
                href={`/guia/${portal.slug}`}
                contentType="home_guide_portal"
                contentId={portal.portalId}
                onMouseEnter={() => setActiveId(portal.portalId)}
                onFocus={() => setActiveId(portal.portalId)}
                className={`group relative flex min-h-[92px] items-center gap-3 px-3 py-3 transition-colors duration-300 sm:min-h-[100px] sm:gap-4 sm:px-6 sm:py-4 lg:min-h-[87px] lg:gap-5 lg:px-7 lg:py-3 xl:px-9 ${
                  isActive ? 'lg:bg-night' : 'hover:bg-white focus-visible:bg-white'
                }`}
              >
                <div className="relative h-16 w-16 flex-none overflow-hidden sm:h-[76px] sm:w-[76px] lg:hidden">
                  <Image
                    src={portal.heroImage}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 639px) 64px, 76px"
                    loading="lazy"
                  />
                </div>

                <span
                  className="hidden h-11 w-8 flex-none items-center justify-center lg:flex"
                  style={{ color: isActive ? '#D8A95C' : presentation.accent }}
                  aria-hidden="true"
                >
                  <Icon size={20} strokeWidth={1.7} />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-center gap-2.5 font-body text-[0.64rem] uppercase tracking-[0.16em]">
                    <span
                      className="h-px w-5 flex-none"
                      style={{ backgroundColor: isActive ? '#D8A95C' : presentation.accent }}
                      aria-hidden="true"
                    />
                    <span className={isActive ? 'lg:text-white/55' : 'text-taupe'}>{portal.portalQuestion}</span>
                  </div>
                  <span
                    className={`block font-display text-[1.2rem] font-semibold not-italic leading-tight tracking-normal transition-colors sm:text-[1.5rem] lg:text-[1.45rem] ${
                      isActive ? 'lg:text-white' : 'text-night group-hover:text-terracotta'
                    }`}
                  >
                    {portal.shortTitle}
                  </span>
                  <span className="mt-1.5 hidden font-body text-xs leading-relaxed text-text-secondary sm:block sm:line-clamp-2 lg:hidden">
                    {portal.portalSubtitle}
                  </span>
                </div>

                <span
                  className={`flex h-10 w-10 flex-none items-center justify-center border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                    isActive ? 'lg:border-white/25 lg:bg-white lg:text-night' : 'border-night/15 text-night'
                  }`}
                  aria-hidden="true"
                >
                  <ArrowUpRight size={19} strokeWidth={1.8} />
                </span>
              </TrackedInternalLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
