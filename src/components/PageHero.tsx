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
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            {badge.icon && (
              <span className="material-symbols-outlined text-yellow-400">{badge.icon}</span>
            )}
            <span className="text-sm font-bold tracking-wide">{badge.text}</span>
          </div>
        )}

        {/* Main Heading */}
        {typeof title === 'string' ? (
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            {title}
          </h1>
        ) : (
          <div className="mb-6">{title}</div>
        )}

        {/* Subheading */}
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
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
