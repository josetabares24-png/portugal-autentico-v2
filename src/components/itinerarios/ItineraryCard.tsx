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
      className={`group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#d7e8e8] bg-white p-4 shadow-[0_6px_18px_rgba(8,48,62,0.08)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(8,48,62,0.12)] ${
        featured ? 'border-t-4 border-t-[#ffcb05]' : ''
      } ${size === 'compact' ? 'px-4' : ''}`}
    >
      {featured && (
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#007c81]">
            Recomendada
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-[#ffcb05]/45" />
        </div>
      )}

      <div className="relative mb-4 aspect-[16/7] overflow-hidden rounded-md bg-white/60">
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
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
          Gratis
        </span>
      </div>

      <h3 className="mb-2 font-display text-2xl leading-snug text-text-main">
        {title}
      </h3>
      <p className={`mb-5 font-body text-sm leading-relaxed text-text-secondary ${size === 'compact' ? 'line-clamp-3 min-h-[4.5rem]' : ''}`}>
        {description}
      </p>

      <ul className="mb-5 space-y-2 border-t border-[#d7e8e8] pt-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 font-body text-sm leading-relaxed text-text-secondary">
            <span aria-hidden="true" className="mt-[0.65rem] h-px w-3 flex-shrink-0 bg-[#ffcb05]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-border-soft py-3">
        <Link
          href={href}
          className="inline-flex min-h-10 items-center gap-2 font-body text-sm font-semibold text-terracotta underline decoration-terracotta/40 underline-offset-4 transition-colors hover:text-primary-dark hover:decoration-primary-dark"
        >
          Ver ruta completa
        </Link>
      </div>
    </article>
  );
}
