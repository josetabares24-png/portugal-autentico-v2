import Link from 'next/link';
import Image from 'next/image';
import { Itinerary } from '@/data/itineraries';
import { BuyButton } from '@/components/BuyButton';
import type { ProductId } from '@/lib/stripe-products';
import { isFreeAccessActive } from '@/lib/guide-config';

interface ItineraryCardProps extends Itinerary {
  size?: 'default' | 'compact';
}

// Mapeo de IDs de itinerarios a IDs de productos de Stripe
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
  badge,
  size = 'default'
}: ItineraryCardProps) {

  const productId = itineraryToProductMap[id];
  const isFree = isFreeAccessActive();

  if (size === 'compact') {
    return (
      <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100/80 hover:border-slate-200/80">
        <div className="h-36 bg-cover bg-center relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
          {isFree && (
            <div className="absolute top-3 right-3">
              <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                GRATIS
              </span>
            </div>
          )}
          {badge && (
            <div className="absolute bottom-3 left-3">
              <span className={`text-white text-xs font-medium px-2.5 py-1 rounded-full ${badge.color}`}>
                {badge.text}
              </span>
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1 text-text-main">{title}</h3>
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              {isFree ? (
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-green-600">GRATIS</span>
                  <span className="text-xs text-slate-400 line-through">{price.toFixed(2)}€</span>
                </div>
              ) : (
                <div className="text-xl font-bold text-primary">
                  {price.toFixed(2)} <span className="text-xs font-normal text-slate-500">EUR</span>
                </div>
              )}
              <Link
                href={href}
                className="text-sm font-semibold hover:underline text-primary"
              >
                Ver detalles →
              </Link>
            </div>
            {isFree ? (
              <Link
                href={href}
                className="w-full py-2.5 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm shadow-soft text-center"
              >
                Ver itinerario completo
              </Link>
            ) : productId ? (
              <BuyButton
                productId={productId}
                className="w-full py-2.5 px-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm shadow-soft"
              >
                Comprar ahora
              </BuyButton>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card-hover bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100/80 hover:border-slate-200/80 relative ${
      featured ? 'ring-2 ring-primary/30 shadow-premium' : ''
    }`}>
      {featured && (
        <div className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-semibold text-white z-10 bg-primary">
          Más vendido
        </div>
      )}

        <div className={`h-52 bg-cover bg-center relative overflow-hidden ${featured ? 'mt-9' : ''}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        {isFree && (
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
              GRATIS
            </span>
          </div>
        )}
        {badge && (
          <div className="absolute bottom-4 left-4">
            <span className={`text-white text-sm font-medium px-3 py-1 rounded-full ${badge.color}`}>
              {badge.text}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2 text-text-main tracking-tight">{title}</h3>
        <p className="text-slate-600 text-sm mb-4">{description}</p>

        <ul className="space-y-2 mb-6 text-sm text-slate-600">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="space-y-3 pt-4 border-t">
          <div className="flex items-center justify-between">
            {isFree ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-600">GRATIS</span>
                <span className="text-sm text-slate-400 line-through">{price.toFixed(2)}€</span>
              </div>
            ) : (
              <div className="text-2xl font-bold text-primary">
                {price.toFixed(2)} <span className="text-sm font-normal text-slate-500">EUR</span>
              </div>
            )}
            <Link
              href={href}
              className="text-sm font-semibold hover:underline text-primary"
            >
              Ver detalles →
            </Link>
          </div>
          {isFree ? (
            <Link
              href={href}
              className={`w-full py-3 px-6 font-semibold rounded-xl transition-all duration-300 text-center block ${
                featured
                  ? 'bg-green-500 hover:bg-green-600 text-white shadow-soft hover:shadow-card-hover hover:-translate-y-0.5'
                  : 'bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 hover:border-green-300'
              }`}
            >
              Ver itinerario completo
            </Link>
          ) : productId ? (
            <BuyButton
              productId={productId}
              className={`w-full py-3 px-6 font-semibold rounded-xl transition-all duration-300 ${
                featured
                  ? 'bg-primary hover:bg-primary-dark text-white shadow-soft hover:shadow-card-hover hover:-translate-y-0.5'
                  : 'bg-slate-50 hover:bg-primary/10 text-slate-900 hover:text-primary border border-slate-200/80 hover:border-primary/30'
              }`}
            >
              Comprar ahora
            </BuyButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}
