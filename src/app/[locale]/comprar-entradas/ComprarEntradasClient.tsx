import Link from 'next/link';
import { Clock3, Route, TicketCheck } from 'lucide-react';
import { BookingProductRenderer } from '@/components/afiliados/BookingProductRenderer';
import { TourismBookingHero } from '@/components/booking/TourismBookingHero';
import { HUB_PRODUCTS, HUB_SECTIONS } from '@/data/bookings';
import { getPhotoCredit, type PhotoCredit } from '@/data/photo-credits';
import type { TiqetsSnapshotMap } from '@/types/tiqets-live';

const PAGE_URL = 'https://estabaenlisboa.com/comprar-entradas';

/** Fotos de terceros que usan las tarjetas de esta página, con su producto. */
const hubPhotoCredits = HUB_PRODUCTS.flatMap((product) => {
  const credit = getPhotoCredit(product.image);
  return credit ? [{ productName: product.name, credit }] : [];
}) satisfies { productName: string; credit: PhotoCredit }[];

const bookingRules = [
  {
    icon: Clock3,
    title: 'Reserva por tiempo',
    text: 'Castelo, Torre de Belém, Oceanário y Pena son los que más pueden desordenarte el día si llegas sin hora.',
  },
  {
    icon: TicketCheck,
    title: 'Comprueba qué incluye',
    text: 'Entrada, parque, traslado y visita guiada no siempre vienen juntos. Aquí cada opción dice qué estás eligiendo.',
  },
  {
    icon: Route,
    title: 'Compra según tu ruta',
    text: 'No acumules reservas. Empieza por el itinerario y paga solo por lo que realmente cabe en tus días.',
  },
];

const faqs = [
  {
    question: '¿Qué entradas de Lisboa conviene comprar antes?',
    answer:
      'El Castelo de São Jorge, el Oceanário y la Torre de Belém, que desde su reapertura en mayo de 2026 funciona por franjas horarias con aforo limitado, son las reservas más fáciles de justificar dentro de Lisboa. Para una excursión a Sintra, la entrada del Palacio da Pena exige todavía más previsión porque funciona con una hora de acceso concreta.',
  },
  {
    question: '¿La Lisboa Card compensa?',
    answer:
      'Compensa cuando concentras varios monumentos incluidos y bastante transporte en uno o dos días. Si prefieres caminar y visitar pocos interiores, pagar por separado suele resultar más sencillo y, muchas veces, más barato.',
  },
  {
    question: '¿Es mejor una excursión a Sintra o ir por libre?',
    answer:
      'Por libre es más barato y te deja decidir el ritmo. La excursión organizada tiene sentido cuando solo dispones de un día, quieres combinar varios lugares y prefieres no coordinar trenes, autobuses y horas de entrada.',
  },
  {
    question: '¿Los precios que veo aquí son definitivos?',
    answer:
      'Cuando Tiqets me da un precio actualizado, lo enseño como “Desde”, porque puede cambiar según la fecha, el horario y la modalidad elegida. Donde pone “Taquilla oficial” es el precio de la web del monumento; el proveedor puede cobrar algo más por la gestión. El botón abre su ficha con el importe y las condiciones definitivas antes de pagar.',
  },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://estabaenlisboa.com' },
    { '@type': 'ListItem', position: 2, name: 'Entradas en Lisboa', item: PAGE_URL },
  ],
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Entradas y experiencias recomendadas en Lisboa',
  numberOfItems: HUB_PRODUCTS.length,
  itemListElement: HUB_PRODUCTS.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: product.name,
    description: product.blurb,
    url: `${PAGE_URL}#${product.id}`,
  })),
};

interface ComprarEntradasClientProps {
  tiqetsProducts: TiqetsSnapshotMap;
}

export default function ComprarEntradasClient({ tiqetsProducts }: ComprarEntradasClientProps) {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <TourismBookingHero
        image="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg"
        imageAlt="Tejados de Alfama y el río Tajo fotografiados desde un mirador de Lisboa"
        objectPosition="center 58%"
        eyebrow="Compra solo lo que compensa"
        title="Comprar entradas en Lisboa"
        description="Las entradas y planes que conviene reservar antes, ordenados por zona: Lisboa, Belém, Sintra, museos y experiencias."
        primaryHref="#catalogo"
        primaryLabel="Elegir y comprar entradas"
        secondaryHref="/free-tours-lisboa"
        secondaryLabel="Prefiero empezar con un free tour"
        signals={['Precio antes de pagar', 'Pago en el proveedor', 'Sin coste adicional']}
        breadcrumb={(
          <nav aria-label="Breadcrumb" className="mb-auto flex items-center gap-2 pt-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
            <Link href="/" className="transition-colors hover:text-gold">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Entradas</span>
          </nav>
        )}
      />

      <section id="catalogo" className="scroll-mt-20 bg-background-light py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-4 border-b border-border-soft pb-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
                Reserva con criterio
              </p>
              <h2 className="font-display text-3xl font-semibold not-italic leading-tight text-night md:text-4xl">
                Entradas que sí conviene comprar antes
              </h2>
            </div>
            <p className="max-w-2xl font-body text-sm leading-relaxed text-text-secondary md:text-base">
              He dejado {HUB_PRODUCTS.length}, no cien: las que dejaría resueltas antes
              de ir, por las colas o porque la entrada va con hora. Pagas en Tiqets o
              GetYourGuide y ves el precio final antes de confirmar.
            </p>
          </div>

          {/* Índice de secciones: en móvil se desliza en horizontal y cada
              botón mide al menos 44 px de alto. */}
          <nav aria-label="Secciones del catálogo" className="-mx-6 mt-6 overflow-x-auto px-6 md:mx-0 md:px-0">
            <ul className="flex w-max gap-2 md:w-auto md:flex-wrap">
              {HUB_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.anchor}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-border-soft bg-white px-4 font-body text-sm font-semibold text-night transition-colors hover:border-terracotta hover:text-terracotta"
                  >
                    {section.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {HUB_SECTIONS.map((section) => {
            const products = HUB_PRODUCTS.filter((product) => product.hubSection === section.id);
            if (products.length === 0) return null;
            return (
              <section
                key={section.id}
                id={section.anchor}
                aria-labelledby={`${section.anchor}-titulo`}
                className="scroll-mt-20 pt-10 md:pt-12"
              >
                <div className="mb-5 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
                  <h3
                    id={`${section.anchor}-titulo`}
                    className="font-display text-2xl font-semibold not-italic leading-tight text-night md:text-3xl"
                  >
                    {section.title}
                  </h3>
                  <p className="max-w-xl font-body text-sm leading-relaxed text-text-secondary">
                    {section.intro}
                  </p>
                </div>

                {/* Tres columnas como máximo: con cuatro, los botones partían
                    en dos líneas y las fotos quedaban demasiado pequeñas. */}
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {products.map((product) => (
                    <BookingProductRenderer
                      key={product.id}
                      product={product}
                      priority={product.id === HUB_PRODUCTS[0]?.id}
                      tiqetsProduct={tiqetsProducts[product.id]}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          <p className="mt-10 max-w-2xl font-body text-sm leading-relaxed text-text-secondary">
            Antes de comprar, los precios oficiales, los horarios y quién entra gratis están en
            las guías de entradas del{' '}
            <Link href="/actividades/castelo-sao-jorge" className="font-semibold text-terracotta underline underline-offset-2 hover:no-underline">
              Castillo de San Jorge
            </Link>
            , los{' '}
            <Link href="/blog/monasterio-jeronimos-entradas" className="font-semibold text-terracotta underline underline-offset-2 hover:no-underline">
              Jerónimos
            </Link>{' '}
            y el{' '}
            <Link href="/blog/palacio-da-pena-entradas" className="font-semibold text-terracotta underline underline-offset-2 hover:no-underline">
              Palacio da Pena
            </Link>
            .
          </p>

          <p className="mt-4 max-w-2xl font-article text-xs leading-relaxed text-text-secondary">
            Algunos enlaces son de afiliado: si reservas desde aquí me llevo una pequeña
            comisión y a ti te cuesta lo mismo. Lo que aparece en esta página lo elijo yo,
            no el proveedor.{' '}
            <Link
              href="/aviso-legal#3-afiliados-y-enlaces-a-terceros"
              className="underline underline-offset-2 hover:no-underline"
            >
              Cómo funcionan los enlaces de afiliado
            </Link>
            .
          </p>

          {Object.keys(tiqetsProducts).length > 0 ? (
            <p className="mt-3 max-w-2xl font-article text-xs leading-relaxed text-text-secondary">
              Los precios marcados como “Desde” y la disponibilidad general de las entradas
              de Tiqets se consultan en su API. El importe final depende de la fecha y la opción
              elegida, y se confirma antes del pago.
            </p>
          ) : null}

          {Object.values(tiqetsProducts).some((snapshot) => snapshot?.image) ? (
            <p className="mt-3 max-w-2xl font-article text-xs leading-relaxed text-text-secondary">
              Las fotos que llevan «Foto: Tiqets» son las de cada entrada en Tiqets, no mías.
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-night py-11 text-white md:py-14">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-gold">
              La regla sencilla
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Compra tiempo, no entradas por comprar
            </h2>
          </div>

          <div className="grid border-y border-white/20 md:grid-cols-3">
            {bookingRules.map(({ icon: RuleIcon, title, text }, index) => (
              <article
                key={title}
                className={`py-6 md:px-7 ${index > 0 ? 'border-t border-white/20 md:border-l md:border-t-0' : ''}`}
              >
                <RuleIcon size={21} strokeWidth={1.7} className="mb-4 text-gold" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-white/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light py-11 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
            Antes de pagar
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-night md:text-4xl">
            Preguntas que sí cambian la decisión
          </h2>

          <div className="mt-7 divide-y divide-border-soft border-y border-border-soft">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 font-body text-sm font-semibold text-night transition-colors hover:text-terracotta">
                  {faq.question}
                  <span className="text-xl font-normal text-terracotta group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-2xl pb-5 pr-8 font-article text-sm leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {hubPhotoCredits.length > 0 ? (
        <section aria-labelledby="creditos-fotos" className="border-t border-border-soft bg-background-light pb-10 pt-8">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="creditos-fotos" className="font-body text-xs font-bold uppercase tracking-[0.16em] text-text-secondary">
              Créditos de las fotos
            </h2>
            <p className="mt-2 font-article text-xs leading-relaxed text-text-secondary">
              Estas fotos no son mías: son de Wikimedia Commons, con licencia libre. Las he
              reducido de tamaño; por lo demás, están como las publicó su autor.
            </p>
            <ul className="mt-3 space-y-1.5 font-body text-xs leading-relaxed text-text-secondary">
              {hubPhotoCredits.map(({ productName, credit }) => (
                <li key={credit.sourceUrl}>
                  <span className="font-semibold text-night">{productName}:</span>{' '}
                  {credit.subject}. Foto de {credit.author},{' '}
                  <a
                    href={credit.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-terracotta"
                  >
                    Wikimedia Commons
                    <span className="sr-only"> (se abre en una pestaña nueva)</span>
                  </a>
                  ,{' '}
                  {credit.licenseUrl ? (
                    <a
                      href={credit.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer license"
                      className="underline underline-offset-2 hover:text-terracotta"
                    >
                      {credit.license}
                      <span className="sr-only"> (se abre en una pestaña nueva)</span>
                    </a>
                  ) : (
                    credit.license
                  )}
                  .
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </main>
  );
}
