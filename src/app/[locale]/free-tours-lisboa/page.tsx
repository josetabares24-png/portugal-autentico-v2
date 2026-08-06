import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { AffiliateLink } from '@/components/afiliados/AffiliateLink';
import {
  FREE_TOUR_CATEGORIES,
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

// ItemList sólo de las CATEGORÍAS editoriales de esta página. No describe
// tours concretos ni implica ranking: `position` es el orden de lectura.
// Tampoco se declara `Offer`: un free tour no tiene precio fijo, y anunciar
// un precio de 0 € sería engañoso respecto al sistema de propina.
const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tipos de free tour en Lisboa',
  itemListOrder: 'https://schema.org/ItemListUnordered',
  numberOfItems: FREE_TOUR_CATEGORIES.length,
  itemListElement: FREE_TOUR_CATEGORIES.map((category, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: category.name,
    description: category.description,
    url: `${PAGE_URL}#${category.anchor}`,
  })),
};

const howItWorks = [
  {
    title: 'Reservas para asegurar plaza',
    text: 'La reserva no cobra nada por adelantado: sirve para que el guía sepa cuánta gente va y para que tú tengas sitio en el grupo.',
  },
  {
    title: 'No hay un precio fijo',
    text: 'A diferencia de una visita guiada normal, el recorrido no tiene tarifa establecida. Nadie te va a pedir una cantidad concreta antes de empezar.',
  },
  {
    title: 'Al final decides tú',
    text: 'Cuando termina el tour, cada persona entrega al guía lo que considera justo. Es un momento voluntario y sin presión.',
  },
  {
    title: 'La cantidad depende de la experiencia',
    text: 'Duración, calidad de las explicaciones y lo que hayas disfrutado son lo que suele guiar la decisión. No hay mínimo obligatorio.',
  },
  {
    title: 'En temporada alta, con antelación',
    text: 'De primavera a septiembre los grupos se llenan pronto. Si viajas en esas fechas, reserva unos días antes en lugar de improvisar.',
  },
  {
    title: 'Calzado cómodo, siempre',
    text: 'Lisboa es adoquín y cuesta. Es el consejo más repetido y el que más se agradece a las dos horas de recorrido.',
  },
];

export default function FreeToursLisboaPage() {
  const categories = FREE_TOUR_CATEGORIES;
  const allTours = getFreeTourCategory('todos');
  const allToursUrl = getFreeTourAffiliateUrl(allTours);

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden md:min-h-[520px]">
        <Image
          src={HERO_IMAGE}
          alt="Arco da Rua Augusta visto desde la Baixa de Lisboa"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/60" />

        <div className="relative mx-auto flex min-h-[420px] max-w-4xl flex-col justify-center px-6 py-16 md:min-h-[520px]">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-white/60">
            <Link href="/actividades" className="transition-colors hover:text-white">Actividades</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/90">Free tours en Lisboa</span>
          </nav>

          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
            Free tours en Lisboa
          </p>
          <h1 className="mb-5 font-display text-4xl italic leading-tight text-white md:text-6xl">
            Free tours en Lisboa para descubrir la ciudad a pie
          </h1>
          <p className="mb-8 max-w-2xl leading-relaxed text-white/80">
            Recorrer Lisboa caminando y con alguien que te cuente lo que estás viendo
            es la forma más rápida de entender la ciudad el primer día. Aquí comparo
            las rutas más habituales —centro histórico, Alfama, Belém y algunas menos
            evidentes— para que elijas con criterio antes de reservar.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <AffiliateLink
              href={allToursUrl}
              campaign={allTours.campaign}
              content="hero"
              placement="hero"
              className="btn-primary px-8 py-3.5 text-base"
            >
              Ver free tours disponibles
            </AffiliateLink>
            <Link href="#comparar-rutas" className="btn-ghost-light px-8 py-3.5 text-base">
              Comparar rutas
            </Link>
          </div>

          <p className="mt-6 max-w-xl rounded-md border-l-2 border-gold bg-night/50 px-4 py-3 text-sm leading-relaxed text-white/85">
            Reservas sin precio fijo. Al finalizar, tú decides la propina según la experiencia.
          </p>
        </div>
      </section>

      {/* Divulgación de afiliación, junto al primer bloque de CTA */}
      <section className="bg-background-light pt-8">
        <div className="mx-auto max-w-3xl px-6">
          <AffiliateDisclosure />
        </div>
      </section>

      {/* Comparador editorial de rutas */}
      <section id="comparar-rutas" className="scroll-mt-24 bg-background-light py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-xs uppercase tracking-widest text-text-secondary">Comparar rutas</p>
          <h2 className="mb-4 font-display text-3xl italic leading-tight text-text-main md:text-4xl">
            Qué ruta encaja mejor con tu viaje
          </h2>
          <p className="mb-10 max-w-2xl leading-relaxed text-text-secondary">
            Cada recorrido cuenta una Lisboa distinta. La disponibilidad, los horarios
            y los idiomas cambian según la fecha, así que lo mejor es consultarlos
            para tus días concretos antes de decidir.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const affiliateUrl = getFreeTourAffiliateUrl(category);
              return (
                <article
                  key={category.id}
                  id={category.anchor}
                  className="card-surface flex scroll-mt-24 flex-col p-6"
                >
                  <h3 className="mb-3 font-display text-xl italic leading-snug text-text-main">
                    {category.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {category.description}
                  </p>

                  {category.duration && (
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-secondary">
                      {category.duration}
                    </p>
                  )}

                  {category.notice && (
                    <p className="mb-4 rounded-md border-l-2 border-gold bg-background-light px-3 py-2 text-xs leading-relaxed text-text-secondary">
                      {category.notice}
                    </p>
                  )}

                  <div className="mt-auto pt-2">
                    <AffiliateLink
                      href={affiliateUrl}
                      campaign={category.campaign}
                      content={`card-${category.id}`}
                      placement="category-card"
                      className="btn-outline w-full px-5 py-3 text-sm"
                    >
                      {category.ctaLabel}
                    </AffiliateLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo funciona un free tour */}
      <section className="border-t border-border-soft bg-background-light py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-3 text-xs uppercase tracking-widest text-text-secondary">Antes de reservar</p>
          <h2 className="mb-4 font-display text-3xl italic leading-tight text-text-main md:text-4xl">
            Cómo funciona realmente un free tour
          </h2>
          <p className="mb-10 max-w-2xl leading-relaxed text-text-secondary">
            Conviene entender el sistema antes de apuntarse, sobre todo si es la
            primera vez: «free» no significa que el guía trabaje gratis.
          </p>

          <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {howItWorks.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-xs font-bold text-terracotta"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="mb-1 font-semibold text-text-main">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Recomendación personal */}
      <section className="bg-background-light pb-14 md:pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-azulejo-pattern-gold relative overflow-hidden rounded-lg bg-night px-6 py-8 md:px-10 md:py-10">
            <p className="relative mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
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
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-border-soft bg-background-light py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 font-display text-3xl italic leading-tight text-text-main md:text-4xl">
            Consulta las rutas para tus fechas
          </h2>
          <p className="mb-8 leading-relaxed text-text-secondary">
            Los horarios y las plazas cambian cada día. Mira qué hay disponible en los
            días que estarás en Lisboa y reserva la que mejor encaje con tu plan.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <AffiliateLink
              href={allToursUrl}
              campaign={allTours.campaign}
              content="final-cta"
              placement="final-cta"
              className="btn-primary px-8 py-3.5 text-base"
            >
              Ver todos los free tours de Lisboa
            </AffiliateLink>
            <Link href="/actividades" className="btn-outline px-8 py-3.5 text-base">
              Ver todas las actividades
            </Link>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-text-secondary">
            ¿Prefieres organizarlo por tu cuenta? Tienes{' '}
            <Link href="/itinerarios" className="text-terracotta underline underline-offset-2 hover:no-underline">
              itinerarios gratuitos de 1 a 7 días
            </Link>{' '}
            para recorrer Lisboa sin guía.
          </p>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="border-t border-border-soft bg-background-light py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 font-display text-3xl italic leading-tight text-text-main md:text-4xl">
            Preguntas frecuentes sobre los free tours
          </h2>
          <div className="card-surface divide-y divide-border-soft overflow-hidden">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-text-main transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span aria-hidden="true" className="mt-0.5 flex-shrink-0 text-terracotta transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-text-secondary">
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
