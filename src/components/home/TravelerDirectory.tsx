import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import TrackedInternalLink from '@/components/TrackedInternalLink';

type HomeGuide = {
  id: string;
  title: string;
  detail: string;
  href: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

const homeGuides: HomeGuide[] = [
  {
    id: 'routes',
    title: 'Organizar mis días',
    detail: 'Rutas realistas para 1, 2, 3 días o una semana.',
    href: '/itinerarios',
    image: '/images/lisboa-originales/alfama-rua-da-adica-lisboa.jpg',
    imageAlt: 'Calle de Alfama con fachadas de azulejos y el río al fondo',
  },
  {
    id: 'visit',
    title: 'Qué ver',
    detail: 'Barrios, monumentos, miradores y qué merece reserva.',
    href: '/que-ver-en-lisboa',
    image: '/images/lisboa-originales/rua-augusta-arco-lisboa.webp',
    imageAlt: 'Rua Augusta con el arco monumental al fondo',
  },
  {
    id: 'mobility',
    title: 'Cómo moverte',
    detail: 'Metro, tranvías, aeropuerto, trenes y trayectos a pie.',
    href: '/blog/como-moverse-por-lisboa',
    image: '/images/lisboa-originales/tranvia-turistico-baixa-lisboa-01.webp',
    imageAlt: 'Tranvía rojo circulando por una calle de la Baixa de Lisboa',
    imagePosition: 'object-[58%_50%]',
  },
  {
    id: 'stay',
    title: 'Dónde alojarte',
    detail: 'Zonas según ruido, cuestas, conexiones y tipo de viaje.',
    href: '/blog/donde-alojarse-en-lisboa',
    image: '/images/lisboa-originales/esquina-baixa-pombalina-lisboa-01.webp',
    imageAlt: 'Esquina residencial de arquitectura pombalina en Lisboa',
  },
  {
    id: 'food',
    title: 'Dónde comer',
    detail: 'Tascas, mercados, platos portugueses y presupuesto.',
    href: '/donde-comer-en-lisboa',
    image: '/images/lisboa-originales/time-out-market-lisboa/time-out-market-lisboa-interior-puestos-comida.jpg',
    imageAlt: 'Interior del Mercado da Ribeira con mesas y puestos de comida',
    imagePosition: 'object-[52%_50%]',
  },
  {
    id: 'drinks',
    title: 'Dónde tomar algo',
    detail: 'Terrazas, fado y ambientes para terminar el día.',
    href: '/blog/vida-nocturna-lisboa',
    image: '/images/lisboa-originales/rua-baixa-lisboa-entardecer.webp',
    imageAlt: 'Calle de la Baixa de Lisboa al caer la tarde',
  },
  {
    id: 'spots',
    title: 'Dónde hacer fotos',
    detail: 'Miradores, calles y la mejor luz según la hora.',
    href: '/blog/donde-fotografiar-lisboa',
    image: '/images/lisboa-originales/rio-tejo-por-do-sol-lisboa.webp',
    imageAlt: 'Puesta de sol sobre el río Tajo en Lisboa',
  },
  {
    id: 'safety',
    title: 'Qué evitar',
    detail: 'Errores frecuentes con precios, transporte y reservas.',
    href: '/blog/errores-turistas-lisboa',
    image: '/images/lisboa-originales/rua-augusta-lisboa-01.webp',
    imageAlt: 'Rua Augusta llena de visitantes y terrazas',
  },
];

export default function TravelerDirectory() {
  return (
    <div className="bg-cream py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <div className="mb-9 grid gap-5 border-b border-night/15 pb-8 md:mb-12 md:grid-cols-[1fr_0.72fr] md:items-end md:gap-12 md:pb-10">
          <div>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              Prepara tu viaje
            </p>
            <h2 className="max-w-3xl font-display text-[2.35rem] font-semibold not-italic leading-[1.04] tracking-normal text-night sm:text-5xl lg:text-6xl">
              Todo lo que necesitas para Lisboa.
            </h2>
          </div>
          <p className="max-w-xl font-body text-base leading-relaxed text-text-secondary md:justify-self-end md:text-lg">
            Empieza por la pregunta que necesitas resolver hoy. Lo demás puede esperar.
          </p>
        </div>

        <nav
          aria-label="Guías completas para preparar Lisboa"
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
        >
          {homeGuides.map((guide) => (
            <TrackedInternalLink
              key={guide.id}
              href={guide.href}
              contentType="home_guide_portal"
              contentId={guide.id}
              className="group relative flex aspect-[4/5] min-h-[320px] overflow-hidden rounded-[6px] bg-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta sm:min-h-[350px] lg:min-h-0"
            >
              <Image
                src={guide.image}
                alt={guide.imageAlt}
                fill
                className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${guide.imagePosition ?? 'object-center'}`}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-night/5" />

              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-night/20 text-white backdrop-blur-sm transition-colors duration-200 group-hover:border-terracotta group-hover:bg-terracotta sm:right-5 sm:top-5">
                <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
              </div>

              <div className="relative mt-auto p-5 sm:p-6 lg:p-5 xl:p-6">
                <h3 className="font-display text-[2rem] font-semibold not-italic leading-[1.02] tracking-normal text-white lg:text-[1.85rem] xl:text-[2.15rem]">
                  {guide.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-white/80">
                  {guide.detail}
                </p>
              </div>
            </TrackedInternalLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
