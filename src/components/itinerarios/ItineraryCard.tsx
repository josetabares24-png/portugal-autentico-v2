import Link from 'next/link';
import Image from 'next/image';
import { Itinerary } from '@/data/itineraries';
import { BuyButton } from '@/components/BuyButton';
import type { ProductId } from '@/lib/stripe-products';

interface ItineraryCardProps extends Itinerary {
  size?: 'default' | 'compact';
}

// Mapeo de IDs de itinerarios a IDs de productos de Stripe
const itineraryToProductMap: Record<string, ProductId | undefined> = {
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

  if (size === 'compact') {
    return (
      <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
        <div className="h-36 bg-cover bg-center relative">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
              <div className="text-xl font-bold text-primary">
                {price.toFixed(2)} <span className="text-xs font-normal text-slate-500">EUR</span>
              </div>
              <Link 
                href={href} 
                className="text-sm font-semibold hover:underline text-primary"
              >
                Ver detalles →
              </Link>
            </div>
            {productId && (
              <BuyButton 
                productId={productId}
                className="w-full py-2.5 px-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all hover:scale-105 text-sm"
              >
                Comprar ahora
              </BuyButton>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card-hover bg-white rounded-2xl overflow-hidden shadow-sm relative ${
      featured ? 'border-2 border-primary shadow-lg' : ''
    }`}>
      {featured && (
        <div className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-semibold text-white z-10 bg-primary">
          Más vendido
        </div>
      )}
      
      <div className={`h-48 bg-cover bg-center relative ${featured ? 'mt-9' : ''}`}>
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        {badge && (
          <div className="absolute bottom-4 left-4">
            <span className={`text-white text-sm font-medium px-3 py-1 rounded-full ${badge.color}`}>
              {badge.text}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-text-main">{title}</h3>
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
            <div className="text-2xl font-bold text-primary">
              {price.toFixed(2)} <span className="text-sm font-normal text-slate-500">EUR</span>
            </div>
            <Link 
              href={href} 
              className="text-sm font-semibold hover:underline text-primary"
            >
              Ver detalles →
            </Link>
          </div>
          {productId && (
            <BuyButton 
              productId={productId}
              className={`w-full py-3 px-6 font-bold rounded-lg transition-all hover:scale-105 ${
                featured 
                  ? 'bg-primary hover:bg-primary-dark text-white shadow-lg' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              Comprar ahora
            </BuyButton>
          )}
        </div>
      </div>
    </div>
  );
}
