import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { AffiliateLink } from '@/components/afiliados/AffiliateLink';
import {
  FREE_TOUR_ROUTES,
  getFreeTourAffiliateUrl,
  getFreeTourCategory,
} from '@/data/affiliate-links';

const PAGE_URL = 'https://estabaenlisboa.com/free-tours-lisboa';
const HERO_IMAGE = '/images/lisboa-originales/rua-augusta-arco-lisboa.webp';

export const metadata: Metadata = {
  title: 'Free tours en Lisboa: rutas y consejos de un local',
  description:
    'Comparamos las rutas de free tour por el centro, Alfama, Belém y otros recorridos de Lisboa: se reservan con antelación y no tienen precio fijo, al final decides tú la propina.',
  keywords: [
    'free tour lisboa',
    'free tours lisboa',
    'tour gratis lisboa',
    'free walking tour lisboa',
    'visita guiada lisboa',
  ],
  openGraph: {
    title: 'Free tours en Lisboa: rutas y consejos de un local',
    description:
      'Rutas de free tour por el centro, Alfama, Belém y más, explicadas por alguien que vive en Lisboa. Reserva previa y pago libre mediante propina.',
    url: PAGE_URL,
    images: [
      {
        url: `https://estabaenlisboa.com${HERO_IMAGE}`,
        width: 900,
        height: 675,
        alt: 'Arco da Rua Augusta visto desde la Baixa de Lisboa',
      },
    ],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
};

const heroBenefits = [
  { icon: 'event_available', text: 'Reserva anticipada' },
  { icon: 'local_offer', text: 'Sin precio fijo' },
  { icon: 'volunteer_activism', text: 'Tú decides la propina' },
];

const steps = [
  {
    icon: 'event_available',
    title: 'Reserva tu plaza',
    text: 'No pagas por adelantado y el guía sabe cuántas personas asistirán.',
  },
  {
    icon: 'directions_walk',
    title: 'Recorre la ciudad',
    text: 'El guía realiza el recorrido y explica la zona.',
  },
  {
    icon: 'recommend',
    title: 'Valora la experiencia',
    text: 'Al terminar, considera la duración y calidad del tour.',
  },
  {
    icon: 'savings',
    title: 'Decide la propina',
    text: 'No existe una cantidad fija obligatoria.',
  },
];

const tips = [
  { icon: 'schedule', text: 'En temporada alta, reserva con antelación: los grupos se llenan.' },
  { icon: 'directions_walk', text: 'Calzado cómodo. Lisboa es adoquín y cuesta.' },
  { icon: 'translate', text: 'Comprueba idioma, hora y punto de encuentro antes de salir.' },
  { icon: 'PersonStanding', text: 'Revisa la dificultad y las pendientes, sobre todo en Alfama.' },
];

const faqs = [
  {
    question: '¿Un free tour es realmente gratis?',
    answer:
      'No exactamente. La reserva no tiene un precio fijo y no pagas nada por adelantado, pero al terminar el recorrido se espera una aportación voluntaria al guía. Es su forma de cobrar, así que conviene ir con la idea de dar algo.',
  },
  {
    question: '¿Cuánto se suele dar al guía?',
    answer:
      'No existe una tarifa establecida ni un mínimo obligatorio: cada persona decide según la duración, la calidad de la explicación y lo satisfecha que haya quedado. Como referencia orientativa, muchos viajeros se mueven en torno a 5-10 € por persona, pero es solo una referencia, no un precio.',
  },
  {
    question: '¿Hace falta reservar con antelación?',
    answer:
      'Sí, la reserva sirve para asegurar plaza. En temporada alta y en las rutas más conocidas conviene reservar con antelación, porque los grupos se llenan.',
  },
  {
    question: '¿Cuánto dura un free tour por el centro?',
    answer:
      'Los recorridos por la Baixa y el Chiado suelen ocupar entre dos y tres horas. La duración concreta depende de cada ruta y del ritmo del grupo, y aparece indicada al consultar la disponibilidad para tus fechas.',
  },
  {
    question: '¿Es buena opción si me cuesta caminar?',
    answer:
      'Depende mucho de la zona. Las rutas por la Baixa y el centro son prácticamente llanas. Alfama, en cambio, tiene cuestas continuas, escaleras y adoquín irregular, así que no es la mejor opción para personas con movilidad reducida.',
  },
  {
    question: '¿Qué conviene llevar?',
    answer:
      'Calzado cómodo por encima de todo: Lisboa es una ciudad de adoquines y cuestas. En verano, además, agua y protección solar, porque buena parte del recorrido transcurre al aire libre.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://estabaenlisboa.com' },
    { '@type': 'ListItem', position: 2, name: 'Actividades', item: 'https://estabaenlisboa.com/actividades' },
    { '@type': 'ListItem', position: 3, name: 'Free tours en Lisboa', item: PAGE_URL },
  ],
};

// ItemList sólo de las cinco RUTAS editoriales. No describe tours concretos
// ni implica ranking: `position` es el orden de lectura. Tampoco se declara
// `Offer`: un free tour no tiene precio fijo, y anunciar 0 € sería engañoso
// respecto al sistema de propina.
const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Rutas de free tour en Lisboa',
  itemListOrder: 'https://schema.org/ItemListUnordered',
  numberOfItems: FREE_TOUR_ROUTES.length,
  itemListElement: FREE_TOUR_ROUTES.map((route, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: route.name,
    description: route.description,
    url: `${PAGE_URL}#${route.anchor}`,
  })),
};

export default function FreeToursLisboaPage() {
  const allTours = getFreeTourCategory('todos');
  const allToursUrl = getFreeTourAffiliateUrl(allTours);

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      {/* ---------------------------------------------------------------
          Hero: la fotografía manda. El degradado carga abajo, donde va el
          texto, y deja respirar el arco en la parte alta de la imagen.
      ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Arco da Rua Augusta visto desde la Baixa de Lisboa"
          fill
          className="object-cover object-[50%_32%] md:object-[50%_42%]"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(26,43,74,0.96)_0%,rgba(26,43,74,0.88)_38%,rgba(26,43,74,0.55)_68%,rgba(26,43,74,0.22)_100%)]"
        />

        <div className="relative mx-auto flex min-h-[520px] max-w-5xl flex-col justify-end px-6 pb-10 pt-24 sm:min-h-[560px] md:min-h-[600px] md:pb-14 md:pt-32">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest text-white/55">
            <Link href="/actividades" className="transition-colors hover:text-white">Actividades</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/85">Free tours</span>
          </nav>

          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span aria-hidden="true" className="h-px w-6 bg-gold/70" />
            Free tours en Lisboa
          </p>

          <h1 className="mb-4 max-w-3xl font-display text-[2.1rem] italic leading-[1.12] text-white sm:text-5xl md:text-6xl">
            Free tours en Lisboa para descubrir la ciudad a pie
          </h1>

          <p className="mb-7 max-w-xl text-[15px] leading-relaxed text-white/80 md:text-lg">
            Compara rutas por el centro, Alfama, Belém y otras zonas de Lisboa.
            Reserva tu plaza y decide la propina al terminar.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <AffiliateLink
              href={allToursUrl}
              campaign={allTours.campaign}
              content="hero"
              placement="hero"
              className="btn-primary w-full px-7 py-3.5 text-base sm:w-auto"
            >
              Ver free tours disponibles
            </AffiliateLink>
            <Link href="#comparar-rutas" className="btn-ghost-light w-full px-7 py-3.5 text-base sm:w-auto">
              Comparar rutas
            </Link>
          </div>

          <ul className="mt-7 flex flex-col gap-2.5 border-t border-white/15 pt-6 sm:flex-row sm:flex-wrap sm:gap-x-7">
            {heroBenefits.map((b) => (
              <li key={b.text} className="flex items-center gap-2.5 text-sm text-white/85">
                <Icon name={b.icon} size={17} className="flex-shrink-0 text-gold" />
                {b.text}
              </li>
            ))}
          </ul>

          <AffiliateDisclosure variant="compact" className="mt-5 max-w-xl text-white/60" />
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Comparador de rutas
      ---------------------------------------------------------------- */}
      <section id="comparar-rutas" className="scroll-mt-20 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-xs uppercase tracking-widest text-text-secondary">Comparar rutas</p>
          <h2 className="mb-4 max-w-2xl font-display text-3xl italic leading-tight text-text-main md:text-4xl">
            Qué ruta encaja mejor con tu viaje
          </h2>
          <p className="mb-9 max-w-2xl leading-relaxed text-text-secondary">
            Cada recorrido cuenta una Lisboa distinta. La disponibilidad, los horarios
            y los idiomas cambian según la fecha, así que conviene consultarlos para
            tus días concretos antes de decidir.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FREE_TOUR_ROUTES.map((route) => {
              const affiliateUrl = getFreeTourAffiliateUrl(route);
              return (
                <article
                  key={route.id}
                  id={route.anchor}
                  className="group relative flex scroll-mt-24 flex-col overflow-hidden rounded-xl border border-border-soft/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-within:-translate-y-1 focus-within:shadow-card-hover"
                >
                  {route.image && (
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={route.image}
                        alt={route.imageAlt ?? ''}
                        fill
                        className="object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Acento: distingue la tarjeta sin recurrir al color como única señal */}
                  <span aria-hidden="true" className="block h-1 w-full bg-gradient-to-r from-terracotta to-gold" />

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Icon name={route.icon} size={15} className="flex-shrink-0 text-terracotta" />
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-text-secondary">
                        {route.label}
                      </span>
                    </div>

                    <h3 className="mb-2 font-display text-xl italic leading-snug text-text-main">
                      {route.name}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                      {route.description}
                    </p>

                    {route.duration && (
                      <p className="mb-3 flex items-center gap-2 text-xs font-medium text-text-secondary">
                        <Icon name="schedule" size={14} className="flex-shrink-0 text-gold" />
                        {route.duration}
                      </p>
                    )}

                    {route.notice && (
                      <p className="mb-4 flex items-start gap-2 rounded-md bg-background-light px-3 py-2 text-xs leading-relaxed text-text-secondary">
                        <Icon name="info" size={14} className="mt-0.5 flex-shrink-0 text-gold" />
                        <span>{route.notice}</span>
                      </p>
                    )}

                    <div className="mt-auto pt-2">
                      <AffiliateLink
                        href={affiliateUrl}
                        campaign={route.campaign}
                        content={`card-${route.id}`}
                        placement="category-card"
                        className="btn-outline w-full px-4 py-3 text-sm"
                      >
                        {route.ctaLabel}
                      </AffiliateLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Acceso general: no es una ruta más, así que va aparte */}
          <div
            id={allTours.anchor}
            className="mt-8 flex scroll-mt-24 flex-col gap-5 rounded-xl border border-gold/35 bg-background-light p-6 md:flex-row md:items-center md:justify-between md:p-7"
          >
            <div className="flex gap-4">
              <span className="hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold sm:flex">
                <Icon name={allTours.icon} size={21} />
              </span>
              <div>
                <h3 className="mb-1.5 font-display text-xl italic leading-snug text-text-main">
                  ¿Ninguna de estas rutas encaja exactamente?
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
                  Consulta todos los recorridos disponibles para tus fechas, horarios e idioma.
                </p>
              </div>
            </div>

            <AffiliateLink
              href={allToursUrl}
              campaign={allTours.campaign}
              content="destacado-todos"
              placement="category-card"
              className="btn-primary w-full flex-shrink-0 px-6 py-3 text-sm md:w-auto"
            >
              Ver todos los free tours de Lisboa
            </AffiliateLink>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Cómo funciona + consejos
      ---------------------------------------------------------------- */}
      <section className="bg-background-light py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-xs uppercase tracking-widest text-text-secondary">Antes de reservar</p>
          <h2 className="mb-4 max-w-2xl font-display text-3xl italic leading-tight text-text-main md:text-4xl">
            Cómo funciona realmente un free tour
          </h2>
          <p className="mb-10 max-w-2xl leading-relaxed text-text-secondary">
            Conviene entender el sistema antes de apuntarse, sobre todo si es la
            primera vez: «free» no significa que el guía trabaje gratis.
          </p>

          <ol className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex flex-col lg:pr-6">
                {/* Progresión visual entre pasos, sólo donde hay hueco */}
                {index < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute right-0 top-5 hidden h-px w-6 bg-border-soft lg:block" />
                )}
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white text-gold">
                    <Icon name={step.icon} size={18} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
                    {`Paso ${index + 1}`}
                  </span>
                </div>
                <h3 className="mb-1.5 font-semibold text-text-main">{step.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-xl border-l-2 border-gold bg-white p-6 shadow-card md:mt-12">
            <h3 className="mb-4 font-display text-xl italic leading-snug text-text-main">
              Consejos prácticos antes de salir
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {tips.map((tip) => (
                <li key={tip.text} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary">
                  <Icon name={tip.icon} size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                  <span>{tip.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Recomendación personal
      ---------------------------------------------------------------- */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-azulejo-pattern-gold relative overflow-hidden rounded-xl bg-night px-6 py-8 md:px-10 md:py-10">
            <p className="relative mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              La opinión de la casa
            </p>
            <h2 className="relative mb-4 font-display text-2xl italic leading-tight text-white md:text-3xl">
              ¿Cuál elegiría yo para una primera visita?
            </h2>
            <p className="relative leading-relaxed text-white/85">
              Para una primera visita elegiría una ruta por Baixa y Chiado. Te da el
              contexto necesario para entender el terremoto de 1755, la reconstrucción
              de la ciudad y la relación entre los barrios del centro. Después haría
              Alfama o Belém como segundo recorrido, según prefieras calles históricas
              o la época de los Descubrimientos.
            </p>

            <div className="relative mt-7 flex items-center gap-3 border-t border-white/15 pt-5">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-terracotta font-display text-sm italic text-white"
              >
                JT
              </span>
              <div>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                  José
                  <span aria-hidden="true" className="text-white/40">·</span>
                  <span className="inline-flex items-center gap-1 font-normal text-white/75">
                    <Icon name="location_on" size={13} className="text-gold" />
                    vive en Lisboa
                  </span>
                </p>
                <p className="text-xs text-white/55">Recomendación de Estaba en Lisboa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          CTA final
      ---------------------------------------------------------------- */}
      <section className="bg-night py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 font-display text-3xl italic leading-tight text-white md:text-4xl">
            ¿Ya sabes qué zona quieres conocer?
          </h2>
          <p className="mb-8 leading-relaxed text-white/75">
            Comprueba qué recorridos están disponibles durante tu viaje y elige el que
            mejor encaje con tus días.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <AffiliateLink
              href={allToursUrl}
              campaign={allTours.campaign}
              content="final-cta"
              placement="final-cta"
              className="btn-primary w-full px-7 py-3.5 text-base sm:w-auto"
            >
              Consultar disponibilidad en Lisboa
            </AffiliateLink>
            <Link href="/actividades" className="btn-ghost-light w-full px-7 py-3.5 text-base sm:w-auto">
              Ver todas las actividades
            </Link>
          </div>

          <p className="mt-7 text-sm leading-relaxed text-white/55">
            ¿Prefieres organizarlo por tu cuenta? Tienes{' '}
            <Link href="/itinerarios" className="text-white/75 underline underline-offset-2 hover:text-white">
              itinerarios gratuitos de 1 a 7 días
            </Link>{' '}
            para recorrer Lisboa sin guía.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Preguntas frecuentes
      ---------------------------------------------------------------- */}
      <section className="bg-background-light py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-xs uppercase tracking-widest text-text-secondary">Dudas habituales</p>
          <h2 className="mb-8 font-display text-3xl italic leading-tight text-text-main md:text-4xl">
            Preguntas frecuentes sobre los free tours
          </h2>

          <div className="divide-y divide-border-soft border-y border-border-soft">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[15px] font-semibold text-text-main transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">
                  {faq.question}
                  <Icon
                    name="expand_more"
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-terracotta motion-safe:transition-transform motion-safe:duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="pb-5 pr-8 text-sm leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
