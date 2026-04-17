import Link from 'next/link';
import Image from 'next/image';
import { Itinerary } from '@/data/itineraries';
import { BuyButton } from '@/components/BuyButton';
import type { ProductId } from '@/lib/stripe-products';
import { isFreeAccessActive } from '@/lib/guide-config';

interface ItineraryCardProps extends Itinerary {
  size?: 'default' | 'compact';
}

const itineraryToProductMap: Record<string, ProductId> = {
  'lisboa-1-dia': 'lisboa-1-dia-lo-esencial',
  'lisboa-2-dias': 'lisboa-2-dias-completo',
  'lisboa-3-dias': 'lisboa-3-dias-premium',
  'lisboa-full-week': 'lisboa-full-week',
  'lisboa-romantica': 'lisboa-romantica',
  'lisboa-familiar': 'lisboa-familiar',
  'lisboa-fotografia': 'lisboa-fotografia',
};

export function ItineraryCard({
  id,
  title,
  description,
  image,
  price,
  features,
  href,
  featured = false,
  size = 'default',
}: ItineraryCardProps) {
  const productId = itineraryToProductMap[id];
  const isFree = isFreeAccessActive();

  if (size === 'compact') {
    return (
      <article className={`border-t-2 pt-5 ${featured ? 'border-primary' : 'border-border-soft'}`}>
        <div className="relative aspect-[4/3] overflow-hidden mb-4">
          <Image src={image} alt={title} fill className="object-cover" loading="lazy" />
        </div>
        <h3 className="font-display italic text-text-main text-lg leading-snug mb-1">{title}</h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mb-3">
          {isFree ? (
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-primary">Gratis</span>
              <span className="text-xs text-text-secondary line-through">{price.toFixed(2)} €</span>
            </div>
          ) : (
            <span className="text-sm font-semibold text-text-main">{price.toFixed(2)} €</span>
          )}
          <Link href={href} className="text-sm text-primary hover:underline underline-offset-2">
            Ver detalles →
          </Link>
        </div>
        {isFree ? (
          <Link
            href={href}
            className="block w-full text-center py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-colors"
          >
            Ver itinerario
          </Link>
        ) : productId ? (
          <BuyButton
            productId={productId}
            className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-colors"
          >
            Comprar
          </BuyButton>
        ) : null}
      </article>
    );
  }

  return (
    <article className={`border-t-2 pt-6 ${featured ? 'border-primary' : 'border-border-soft'}`}>
      {featured && (
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Más popular</p>
      )}
      <div className="relative aspect-[16/9] overflow-hidden mb-5">
        <Image src={image} alt={title} fill className="object-cover" loading="lazy" />
      </div>
      <h3 className="font-display italic text-text-main text-2xl leading-snug mb-2">{title}</h3>
      <p className="text-text-secondary text-sm mb-5">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t border-border-soft space-y-3">
        <div className="flex items-center justify-between">
          {isFree ? (
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary">Gratis</span>
              <span className="text-sm text-text-secondary line-through">{price.toFixed(2)} €</span>
            </div>
          ) : (
            <span className="text-xl font-bold text-text-main">{price.toFixed(2)} €</span>
          )}
          <Link href={href} className="text-sm text-primary hover:underline underline-offset-2">
            Ver detalles →
          </Link>
        </div>
        {isFree ? (
          <Link
            href={href}
            className="block w-full text-center py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
          >
            Ver itinerario completo
          </Link>
        ) : productId ? (
          <BuyButton
            productId={productId}
            className={`w-full py-3 font-semibold transition-colors ${
              featured
                ? 'bg-primary hover:bg-primary-dark text-white'
                : 'bg-[#1a2b4a] hover:bg-[#152239] text-white'
            }`}
          >
            Comprar ahora
          </BuyButton>
        ) : null}
      </div>
    </article>
  );
}
