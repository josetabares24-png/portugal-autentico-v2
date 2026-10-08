import Image from 'next/image';
import Link from 'next/link';
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
    detail: 'Rutas realistas para 1, 2 o 3 días.',
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
    image: '/images/lisboa-originales/electrico-15e-caf-lisboa.jpg',
    imageAlt: 'Tranvía amarillo de la línea 15E circulando por Lisboa',
  },
  {
    id: 'stay',
    title: 'Dónde alojarte',
    detail: 'Zonas según ruido, cuestas, conexiones y tipo de viaje.',
    href: '/blog/donde-alojarse-en-lisboa',
    image: '/images/lisboa-originales/arquitetura-baixa-pombalina-lisboa-01.webp',
    imageAlt: 'Fachadas de azulejos y balcones en la Baixa de Lisboa',
    imagePosition: 'object-[50%_0%]',
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
    image: '/images/lisboa-originales/esquina-baixa-pombalina-lisboa-01.webp',
    imageAlt: 'Terraza de un café en una esquina de la Baixa de Lisboa',
    imagePosition: 'object-[50%_70%]',
  },
  {
    id: 'spots',
    title: 'Dónde hacer fotos',
    detail: 'Miradores, calles y la mejor luz según la hora.',
    href: '/blog/donde-fotografiar-lisboa',
    image: '/images/lisboa-originales/lisboa-baixa-rio-tejo-entardecer.webp',
    imageAlt: 'Edificios de Lisboa enmarcando una vista del río Tajo al atardecer',
    imagePosition: 'object-[50%_35%]',
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
    <div className="bg-cream py-10 lg:py-12">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <div className="mb-7 grid gap-4 border-b border-night/15 pb-6 lg:grid-cols-[1fr_0.6fr] lg:items-end lg:gap-10">
          <div>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              Prepara tu viaje
            </p>
            <h2 className="max-w-3xl font-display text-[2rem] font-semibold not-italic leading-[1.12] tracking-normal text-night lg:text-[2.5rem]">
              ¿Qué necesitas resolver en Lisboa?
            </h2>
          </div>
          <p className="max-w-xl font-body text-sm leading-relaxed text-text-secondary lg:justify-self-end lg:text-base">
            Elige por dónde empezar: días, transporte, barrios o comida.
          </p>
        </div>

        <nav
          aria-label="Guías completas para preparar Lisboa"
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-7"
        >
          {homeGuides.map((guide, index) => {
            const featured = index < 2;
            return (
              <TrackedInternalLink
                key={guide.id}
                href={guide.href}
                contentType="home_guide_portal"
                contentId={guide.id}
                className={`group relative flex min-h-[250px] overflow-hidden rounded-[2px] bg-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta sm:min-h-[280px] ${featured ? 'lg:col-span-3 lg:min-h-[310px]' : 'lg:col-span-2 lg:block lg:min-h-0 lg:rounded-none lg:border-b lg:border-night/15 lg:bg-cream'}`}
              >
                <div className={`absolute inset-0 overflow-hidden ${featured ? '' : 'lg:relative lg:inset-auto lg:aspect-[16/9]'}`}>
                  <Image
                    src={guide.image}
                    alt={guide.imageAlt}
                    fill
                    className={`object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none ${guide.imagePosition ?? 'object-center'}`}
                    sizes={featured
                      ? '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 50vw, 588px'
                      : '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 384px'}
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-night via-night/30 to-night/0 ${featured ? '' : 'lg:hidden'}`} />
                </div>

                <div className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-night/20 text-white backdrop-blur-sm transition-colors duration-200 group-hover:border-terracotta group-hover:bg-terracotta sm:right-5 sm:top-5 ${featured ? '' : 'lg:hidden'}`}>
                  <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <div className={`relative mt-auto max-w-xl p-5 sm:p-6 ${featured ? 'lg:p-7' : 'lg:mt-0 lg:px-0 lg:pb-5 lg:pt-4'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className={`font-display font-semibold not-italic leading-[1.08] tracking-normal text-white ${featured ? 'text-[2rem] sm:text-[2.2rem] lg:text-[2.25rem]' : 'text-[2rem] lg:text-[1.75rem] lg:text-night lg:transition-colors lg:group-hover:text-terracotta'}`}>
                      {guide.title}
                    </h3>
                    {!featured && (
                      <ArrowUpRight size={20} strokeWidth={1.6} aria-hidden="true" className="mt-1 hidden shrink-0 text-terracotta lg:block" />
                    )}
                  </div>
                  <p className={`mt-3 font-body text-sm leading-relaxed text-white/90 ${featured ? 'max-w-md sm:text-base' : 'lg:mt-2 lg:text-text-secondary'}`}>
                    {guide.detail}
                  </p>
                </div>
              </TrackedInternalLink>
            );
          })}
        </nav>

        <aside className="mt-7 grid gap-3 border-y border-night/15 py-4 font-body md:grid-cols-[1fr_1fr_auto] md:items-center md:gap-8">
          <p className="text-sm font-semibold text-night">
            Guías de José Tabares, revisadas desde Lisboa.
          </p>
          <p className="text-sm leading-relaxed text-text-secondary">
            Fotografías propias, fuentes oficiales y recomendaciones con contexto.
          </p>
          <Link
            href="/sobre-nosotros"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-terracotta underline decoration-terracotta/35 underline-offset-4 hover:text-primary-dark"
          >
            Cómo trabajamos
            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </div>
  );
}
