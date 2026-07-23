import Link from 'next/link';
import Image from 'next/image';
import { Itinerary } from '@/data/itineraries';

interface ItineraryCardProps extends Itinerary {
  size?: 'default' | 'compact';
}

export function ItineraryCard({
  title,
  description,
  image,
  features,
  href,
  featured = false,
  size = 'default',
}: ItineraryCardProps) {
  if (size === 'compact') {
    return (
      <article className={`card-surface group flex h-full flex-col p-5 ${featured ? 'ring-2 ring-gold' : ''}`}>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-5">
          <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
        <h3 className="font-display italic text-text-main text-2xl leading-snug mb-2">{title}</h3>
        <p className="text-text-main/75 text-sm leading-relaxed mb-5 line-clamp-3 min-h-[4.5rem]">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-text-main/70">
              <span className="text-terracotta mt-0.5 flex-shrink-0">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-border-soft space-y-3">
          <div className="flex items-center">
            <span className="badge-pill bg-gold/80 text-night">Gratis</span>
          </div>
          <Link
            href={href}
            className="btn-primary block w-full text-center py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            Ver guía gratis
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className={`card-surface group flex h-full flex-col p-5 ${featured ? 'ring-2 ring-gold' : ''}`}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-5">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <h3 className="font-display italic text-text-main text-2xl leading-snug mb-2">{title}</h3>
      <p className="text-text-main/75 text-sm leading-relaxed mb-5">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-text-main/70">
            <span className="text-terracotta mt-0.5 flex-shrink-0">&#10003;</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-border-soft space-y-3">
        <div className="flex items-center">
          <span className="badge-pill bg-gold/80 text-night">Gratis</span>
        </div>
        <Link
          href={href}
          className="btn-primary block w-full text-center py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          Ver guía gratis
        </Link>
      </div>
    </article>
  );
}
