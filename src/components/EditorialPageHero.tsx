import Image from 'next/image';

interface EditorialPageHeroProps {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  description?: string;
  variant?: 'default' | 'itineraries';
}

export function EditorialPageHero({
  eyebrow,
  title,
  image,
  imageAlt,
  description,
  variant = 'default',
}: EditorialPageHeroProps) {
  const isItineraries = variant === 'itineraries';

  return (
    <section className={`editorial-page-hero${isItineraries ? ' editorial-page-hero--itineraries' : ''}`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        className={`object-cover${isItineraries ? ' editorial-page-hero-image--itineraries' : ''}`}
        priority
        fetchPriority="high"
        sizes="100vw"
      />
      <div
        aria-hidden="true"
        className={`editorial-page-hero-overlay absolute inset-0${isItineraries ? ' editorial-page-hero-overlay--itineraries' : ''}`}
      />
      <div className={`site-container absolute inset-x-0 bottom-0 pb-10 pt-28 md:pb-14${isItineraries ? ' editorial-page-hero-content--itineraries' : ''}`}>
        <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
          {eyebrow}
        </p>
        <h1 className="editorial-page-title font-display italic text-white">
          {title}
        </h1>
        {description && (
          <p className="editorial-page-description mt-4 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
