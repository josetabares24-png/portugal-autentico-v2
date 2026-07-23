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
      <article className={`card-surface group p-4 ${featured ? 'ring-2 ring-gold' : ''}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
          <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
        <h3 className="font-display italic text-text-main text-lg leading-snug mb-1">{title}</h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center mb-3">
          <span className="badge-pill bg-gold/80 text-night">Gratis</span>
        </div>
        <Link
          href={href}
          className="btn-primary block w-full text-center py-2.5 text-sm"
        >
          Ver guía gratis
        </Link>
      </article>
    );
  }

  return (
    <article className={`card-surface group p-5 ${featured ? 'ring-2 ring-gold' : ''}`}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-5">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <h3 className="font-display italic text-text-main text-2xl leading-snug mb-2">{title}</h3>
      <p className="text-text-secondary text-sm mb-5">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-terracotta mt-0.5 flex-shrink-0">&#10003;</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t border-border-soft space-y-3">
        <div className="flex items-center">
          <span className="badge-pill bg-gold/80 text-night">Gratis</span>
        </div>
        <Link
          href={href}
          className="btn-primary block w-full text-center py-3"
        >
          Ver guía gratis
        </Link>
      </div>
    </article>
  );
}
