import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface TourismBookingHeroProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  signals: string[];
  breadcrumb?: ReactNode;
  objectPosition?: string;
}

/**
 * Hero compartida para las dos páginas de reserva.
 *
 * La fotografía ocupa toda la banda y el texto vive directamente sobre ella:
 * no hay una tarjeta promocional encima ni un segundo marco alrededor. La
 * capa azul es uniforme para que el contraste no dependa del recorte de cada
 * imagen y para conservar el lenguaje visual de la marca.
 */
export function TourismBookingHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  signals,
  breadcrumb,
  objectPosition = 'center',
}: TourismBookingHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-night text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="-z-20 object-cover"
        style={{ objectPosition }}
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-night/70" aria-hidden="true" />

      <div className="mx-auto flex min-h-[470px] max-w-6xl flex-col justify-end px-6 py-9 sm:min-h-[500px] md:px-10 md:py-11 lg:min-h-[510px]">
        {breadcrumb}

        <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-[2.65rem] font-semibold leading-[1.02] tracking-normal text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-white/82 md:text-lg">
          {description}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={primaryHref}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-terracotta px-6 font-body text-sm font-bold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {primaryLabel}
            <span aria-hidden="true" className="ml-2">↓</span>
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="inline-flex min-h-11 items-center justify-center px-1 font-body text-sm font-semibold text-white underline decoration-white/45 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>

        <ul className="mt-7 grid border-y border-white/25 sm:grid-cols-3">
          {signals.map((signal, index) => (
            <li
              key={signal}
              className={`flex min-h-12 items-center py-3 font-body text-xs font-semibold uppercase tracking-[0.12em] text-white/78 sm:px-4 ${index > 0 ? 'border-t border-white/20 sm:border-l sm:border-t-0' : ''}`}
            >
              <span className="mr-2 text-gold" aria-hidden="true">0{index + 1}</span>
              {signal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
