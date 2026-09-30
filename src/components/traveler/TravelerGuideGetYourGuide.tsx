'use client';

import { Settings2 } from 'lucide-react';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import GetYourGuideScript from '@/components/afiliados/GetYourGuideScript';
import { GetYourGuideWidget } from '@/components/afiliados/GetYourGuideWidget';
import type { TravelerGuideGetYourGuideSection } from '@/data/traveler-guide-preview';
import { useCookieConsent } from '@/lib/consent';

export default function TravelerGuideGetYourGuide({
  section,
  variant = 'band',
}: {
  section: TravelerGuideGetYourGuideSection;
  variant?: 'band' | 'article';
}) {
  const hasConsent = useCookieConsent();
  const isArticle = variant === 'article';

  const openCookiePreferences = () => {
    window.dispatchEvent(new Event('open-cookie-preferences'));
  };

  return (
    <section
      id="reservas"
      className={isArticle
        ? 'article-reading scroll-mt-28 border-t border-border-soft pt-9'
        : 'scroll-mt-20 border-b border-taupe/20 bg-white/45 py-12 md:py-16'}
    >
      <div className={isArticle ? '' : 'mx-auto max-w-6xl px-6 md:px-10'}>
        <div className={isArticle ? 'mb-6' : 'mb-8 grid gap-4 md:grid-cols-[0.72fr_1.28fr] md:items-end md:gap-16'}>
          <div>
            <p className="article-box-label mb-3 uppercase tracking-widest text-terracotta">{section.eyebrow}</p>
            <h2 className={isArticle
              ? 'mb-3 font-display text-2xl font-bold not-italic leading-tight text-night md:text-3xl'
              : 'max-w-lg font-display text-3xl font-semibold not-italic leading-tight tracking-normal text-night md:text-4xl'}>
              {section.title}
            </h2>
          </div>
          <p className={`max-w-2xl font-body leading-[1.75] text-text-secondary ${isArticle ? 'text-[0.98rem]' : 'text-sm md:text-base'}`}>
            {section.intro}
          </p>
        </div>

        {hasConsent ? (
          <>
            <GetYourGuideScript />
            <GetYourGuideWidget
              tourIds={section.tourIds}
              numberOfItems={section.numberOfItems}
              campaign={section.campaign}
              fallbackHref={section.fallbackHref}
            />
          </>
        ) : (
          <div className="flex flex-col gap-4 border-y border-night/15 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-body text-sm leading-relaxed text-text-secondary">
              Para mostrar disponibilidad y condiciones directamente desde GetYourGuide, necesitamos tu permiso para cargar su widget.
            </p>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="inline-flex min-h-11 flex-none items-center justify-center gap-2 border border-night/25 px-4 font-body text-sm font-semibold text-night transition-colors hover:border-terracotta hover:text-terracotta"
            >
              <Settings2 size={17} strokeWidth={1.8} aria-hidden="true" />
              Mostrar actividades
            </button>
          </div>
        )}

        <AffiliateDisclosure variant="compact" className="mt-5 max-w-2xl font-body text-text-secondary" />
      </div>
    </section>
  );
}
