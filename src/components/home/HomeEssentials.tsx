import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import TrackedInternalLink from '@/components/TrackedInternalLink';

/*
 * Fila «Imprescindibles» bajo el hero: las tres reservas que más se repiten en
 * una primera visita. Enlaza a páginas propias (free tours y guía de Sintra),
 * donde está el aviso de proveedor y el enlace de afiliado; la Home no lleva
 * enlaces de afiliado directos.
 */
type Essential = {
  id: string;
  kicker: string;
  title: string;
  detail: string;
  href: string;
  image: string;
  imageAlt: string;
};

const essentials: Essential[] = [
  {
    id: 'free_tour_centro',
    kicker: 'Free tour',
    title: 'Centro histórico',
    detail: 'Baixa, Chiado y Rossio con guía local. Sin pago previo; tú decides la propina.',
    href: '/free-tours-lisboa#ruta-imprescindible',
    image: '/images/lisboa-originales/rua-augusta-arco-lisboa.webp',
    imageAlt: 'Arco da Rua Augusta visto desde la Baixa de Lisboa',
  },
  {
    id: 'free_tour_belem',
    kicker: 'Free tour',
    title: 'Belém',
    detail: 'Los Jerónimos, la Torre de Belém y la historia marítima, con guía.',
    href: '/free-tours-lisboa#ruta-belem',
    image: '/images/actividades/torre-de-belem-lisboa.webp',
    imageAlt: 'Torre de Belém junto al río Tajo',
  },
  {
    id: 'sintra',
    kicker: 'Entradas y excursión',
    title: 'Sintra',
    detail: 'Pena se visita con hora. Cómo ir, qué reservar y cuándo compensa una excursión.',
    href: '/blog/sintra-desde-lisboa',
    image: '/images/sintra-palacio-turistas.jpg',
    imageAlt: 'Palacio de Sintra con visitantes en la entrada',
  },
];

export default function HomeEssentials() {
  return (
    <section aria-labelledby="imprescindibles" className="bg-cream pt-8 lg:pt-10">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 id="imprescindibles" className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Imprescindibles para reservar
          </h2>
          <TrackedInternalLink
            href="/free-tours-lisboa"
            contentType="home_essentials"
            contentId="all_free_tours"
            className="hidden font-body text-sm font-semibold text-night underline decoration-terracotta/40 underline-offset-4 hover:text-terracotta sm:inline"
          >
            Todos los free tours
          </TrackedInternalLink>
        </div>
        <ul className="grid gap-3 sm:grid-cols-3 lg:gap-6">
          {essentials.map((item) => (
            <li key={item.id}>
              <TrackedInternalLink
                href={item.href}
                contentType="home_essentials"
                contentId={item.id}
                className="group flex h-full items-stretch gap-4 rounded-[2px] border border-night/10 bg-white p-3 transition-colors hover:border-terracotta/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
              >
                <div className="relative w-24 flex-shrink-0 overflow-hidden rounded-[2px] sm:w-28">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="112px" className="object-cover" loading="lazy" />
                </div>
                <div className="flex min-w-0 flex-col py-1">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">{item.kicker}</p>
                  <p className="mt-1 flex items-center gap-1 font-display text-[1.35rem] font-semibold leading-tight text-night group-hover:text-terracotta">
                    {item.title}
                    <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" className="text-terracotta" />
                  </p>
                  <p className="mt-1 font-body text-sm leading-snug text-text-secondary">{item.detail}</p>
                </div>
              </TrackedInternalLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
