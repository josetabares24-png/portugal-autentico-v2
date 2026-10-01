'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Clock3, Route, TicketCheck } from 'lucide-react';
import { ExperienceSearch } from '@/components/ExperienceSearch';
import { FilterChip } from '@/components/FilterChip';
import { BookingProductRenderer } from '@/components/afiliados/BookingProductRenderer';
import { TourismBookingHero } from '@/components/booking/TourismBookingHero';
import { HUB_PRODUCTS, type BookingCategory } from '@/data/bookings';
import { coincide } from '@/lib/search';
import type { TiqetsSnapshotMap } from '@/types/tiqets-live';

const PAGE_URL = 'https://estabaenlisboa.com/comprar-entradas';

const CATEGORIAS: { id: BookingCategory | 'todo'; label: string }[] = [
  { id: 'todo', label: 'Todo' },
  { id: 'entradas', label: 'Entradas' },
  { id: 'experiencias', label: 'Experiencias' },
  { id: 'excursiones', label: 'Excursiones' },
];

const NOTA_CATEGORIA: Record<BookingCategory, string> = {
  entradas: 'Reserva cuando te asegure una hora o te evite una cola larga.',
  experiencias: 'Los grupos pequeños y los buenos horarios suelen agotarse primero.',
  excursiones: 'Una forma cómoda de salir de Lisboa sin coordinar varios transportes.',
};

const bookingRules = [
  {
    icon: Clock3,
    title: 'Reserva por tiempo',
    text: 'Castelo, Oceanário y Pena son los que más pueden desordenarte el día si llegas sin hora.',
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
      'El Castelo de São Jorge y el Oceanário son las reservas más fáciles de justificar dentro de Lisboa. Para una excursión a Sintra, la entrada del Palacio da Pena exige todavía más previsión porque funciona con una hora de acceso concreta.',
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
      'Cuando Tiqets nos facilita un precio actualizado lo mostramos como “Desde”, porque puede cambiar según la fecha, el horario y la modalidad elegida. El botón abre la ficha del proveedor con el importe y las condiciones definitivas antes de pagar.',
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
  const [consulta, setConsulta] = useState('');
  const [categoria, setCategoria] = useState<BookingCategory | 'todo'>('todo');

  const filtrados = useMemo(
    () =>
      HUB_PRODUCTS.filter((product) => {
        const porCategoria = categoria === 'todo' || product.category === categoria;
        const porTexto = coincide(consulta, [
          product.name,
          product.kind,
          product.blurb,
          ...product.searchTerms,
        ]);
        return porCategoria && porTexto;
      }),
    [consulta, categoria]
  );

  const hayFiltros = consulta !== '' || categoria !== 'todo';
  const limpiarTodo = () => {
    setConsulta('');
    setCategoria('todo');
  };
  const categoriaElegida = categoria === 'todo' ? null : categoria;

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
        eyebrow="Reserva solo lo que compensa"
        title="Entradas y experiencias en Lisboa"
        description="Una selección corta para evitar colas, asegurar una buena hora y no llenar el viaje de reservas que no necesitas."
        primaryHref="#catalogo"
        primaryLabel="Ver opciones"
        secondaryHref="/free-tours-lisboa"
        secondaryLabel="Prefiero empezar con un free tour"
        signals={['Entradas con hora', 'Planes con plazas limitadas', 'Excursiones de un día']}
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
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
                Elige sin perder tiempo
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-night md:text-4xl">
                Qué merece reservar en Lisboa
              </h2>
            </div>
            <p className="max-w-2xl font-body text-sm leading-relaxed text-text-secondary md:text-base">
              Ocho opciones, no ochenta. Cada una responde a una decisión real del viaje:
              entrar, vivir una experiencia o resolver una salida de un día.
            </p>
          </div>

          <div className="border-y border-border-soft py-5">
            <ExperienceSearch
              id="buscar-entradas"
              value={consulta}
              onChange={setConsulta}
              label="Buscar entradas y experiencias en Lisboa"
              placeholder="Busca Castelo, Sintra, fado, barco..."
              className="max-w-2xl"
            />

            <div className="-mx-6 mt-3 flex snap-x snap-mandatory items-center gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-4 sm:flex-wrap sm:overflow-visible sm:px-0">
              {CATEGORIAS.map((item) => (
                <FilterChip
                  key={item.id}
                  active={categoria === item.id}
                  onClick={() => setCategoria(item.id)}
                  className="snap-start"
                >
                  {item.label}
                </FilterChip>
              ))}

              {hayFiltros ? (
                <button type="button" onClick={limpiarTodo} className="filter-clear">
                  Limpiar filtros
                </button>
              ) : null}
            </div>

            <p className="mt-3 font-article text-xs text-text-secondary" aria-live="polite">
              {filtrados.length} {filtrados.length === 1 ? 'opción' : 'opciones'}
            </p>
          </div>

          {categoriaElegida && filtrados.length > 0 ? (
            <div className="mb-5 mt-7">
              <h2 className="font-display text-2xl font-semibold leading-tight text-night">
                {CATEGORIAS.find((item) => item.id === categoriaElegida)?.label}
              </h2>
              <p className="mt-1 font-article text-sm text-text-secondary">
                {NOTA_CATEGORIA[categoriaElegida]}
              </p>
            </div>
          ) : null}

          {filtrados.length === 0 ? (
            <div className="mt-8 border-y border-border-soft py-12 text-center">
              <p className="mb-4 font-article text-text-main">
                No encontramos una opción con esa búsqueda.
              </p>
              <button type="button" onClick={limpiarTodo} className="btn-secondary btn-lg">
                Ver todas las opciones
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtrados.map((product, index) => (
                <BookingProductRenderer
                  key={product.id}
                  product={product}
                  priority={index === 0}
                  tiqetsProduct={tiqetsProducts[product.id]}
                />
              ))}
            </div>
          )}

          <p className="mt-8 max-w-2xl font-article text-xs leading-relaxed text-text-secondary">
            Algunos enlaces son de afiliado. Si reservas a través de ellos podemos recibir
            una comisión sin coste adicional para ti. La selección y la opinión editorial
            no dependen del proveedor.{' '}
            <Link
              href="/aviso-legal#3-afiliados-y-enlaces-a-terceros"
              className="underline underline-offset-2 hover:no-underline"
            >
              Más información
            </Link>
            .
          </p>

          {Object.keys(tiqetsProducts).length > 0 ? (
            <p className="mt-3 max-w-2xl font-article text-[11px] leading-relaxed text-text-secondary/85">
              Los precios marcados como “Desde” y la disponibilidad general de las entradas
              de Tiqets se consultan en su API. El importe final depende de la fecha y la opción
              elegida, y se confirma antes del pago.
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
    </main>
  );
}
