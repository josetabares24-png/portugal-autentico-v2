import Image from 'next/image';
import { ReactNode } from 'react';

interface PageHeroProps {
  title: string | ReactNode;
  subtitle?: string;
  badge?: {
    icon?: string;
    text: string;
  };
  image?: string;
  imageAlt?: string;
  showScrollIndicator?: boolean;
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  image = '/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg',
  imageAlt = 'Lisboa',
  showScrollIndicator = true,
  className = '',
}: PageHeroProps) {
  return (
    <section className={`relative min-h-[85vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            {badge.icon && (
              <span className="material-symbols-outlined text-base">{badge.icon}</span>
            )}
            <span className="text-sm font-semibold tracking-wide">{badge.text}</span>
          </div>
        )}

        {/* Main Heading */}
        {typeof title === 'string' ? (
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            {title}
          </h1>
        ) : (
          <div className="mb-6">{title}</div>
        )}

        {/* Subheading */}
        {subtitle && (
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            {subtitle}
          </p>
        )}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      )}
    </section>
  );
}
