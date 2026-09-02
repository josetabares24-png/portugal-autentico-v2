import Link from 'next/link';
import Image from 'next/image';
import { Itinerary } from '@/data/itineraries';

interface ItineraryCardProps extends Itinerary {
  size?: 'default' | 'compact';
}

export function ItineraryCard({
  title,
  description,
  duration,
  image,
  features,
  href,
  featured = false,
  size = 'default',
}: ItineraryCardProps) {
  return (
    <article
      className={`group flex h-full flex-col border-t bg-white/25 pt-4 transition-colors hover:bg-white/45 ${
        featured ? 'border-t-2 border-gold' : 'border-border-soft'
      } ${size === 'compact' ? 'px-4 pb-4' : 'px-1 pb-2'}`}
    >
      <div className="relative mb-5 aspect-[16/7] overflow-hidden rounded-md bg-white/60">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 45vw, 350px"
        />
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
          {duration}
        </p>
        <span aria-hidden="true" className="h-px w-4 bg-border-soft" />
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-terracotta">
          Gratis
        </span>
      </div>

      <h3 className="mb-2 font-display text-2xl leading-snug text-text-main transition-colors group-hover:text-terracotta">
        {title}
      </h3>
      <p className={`mb-5 font-body text-sm leading-relaxed text-text-secondary ${size === 'compact' ? 'line-clamp-3 min-h-[4.5rem]' : ''}`}>
        {description}
      </p>

      <ul className="mb-5 space-y-2 border-t border-border-soft pt-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 font-body text-sm leading-relaxed text-text-secondary">
            <span aria-hidden="true" className="mt-[0.65rem] h-px w-3 flex-shrink-0 bg-gold" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-border-soft pt-3">
        <Link
          href={href}
          className="text-cta"
        >
          Abrir itinerario <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
