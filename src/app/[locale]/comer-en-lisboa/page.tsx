import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dónde comer en Lisboa: guía por tipo de comida y presupuesto',
  description:
    'Guía para comer en Lisboa según lo que buscas: comida portuguesa, opciones baratas, mercados, dulces, cafés y necesidades alimentarias.',
  alternates: {
    canonical: 'https://estabaenlisboa.com/comer-en-lisboa',
  },
  openGraph: {
    title: 'Dónde comer en Lisboa | Estaba en Lisboa',
    description:
      'Una guía para decidir dónde y qué comer en Lisboa sin depender de una lista infinita de restaurantes.',
    url: 'https://estabaenlisboa.com/comer-en-lisboa',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/tasca-da-graca.jpg',
        width: 1200,
        height: 630,
        alt: 'Una mesa en una tasca de Lisboa',
      },
    ],
  },
};

const opciones = [
  {
    title: 'Quiero probar comida portuguesa',
    text: 'Empieza por entender los platos antes de elegir restaurante. Bacalhau, bifanas, petiscos y dulces aparecen por toda la ciudad, pero no todos los lugares ofrecen la misma experiencia.',
    href: '/blog/gastronomia-portuguesa-guia',
    link: 'Entender la gastronomía portuguesa',
  },
  {
    title: 'Quiero comer bien gastando menos',
    text: 'Alejarte una o dos calles de los ejes más turísticos puede cambiar mucho la experiencia. Busca menús claros, platos del día y lugares donde el precio no dependa sólo de la ubicación.',
    href: '/blog/donde-comer-barato-lisboa',
    link: 'Dónde comer barato',
  },
  {
    title: 'Quiero mercados y variedad',
    text: 'Los mercados sirven para probar varias cosas en una misma parada y también para entender cómo conviven la cocina tradicional y propuestas más recientes.',
    href: '/blog/mejores-mercados-lisboa',
    link: 'Ver mercados',
  },
  {
    title: 'Quiero cafés y algo dulce',
    text: 'Lisboa tiene cafés históricos, pastelerías de barrio y lugares muy conocidos. La gracia está en saber cuándo vas por la historia, cuándo por el producto y cuándo sólo quieres sentarte un rato.',
    href: '/blog/donde-tomar-cafe-lisboa',
    link: 'Dónde tomar café',
  },
];

export default function ComerEnLisboaPage() {
  return (
    <main id="main-content" className="bg-cream">
      <section className="border-b border-taupe/20 bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-10 md:py-20">
          <div>
            <p className="mb-4 font-body text-xs uppercase tracking-[0.18em] text-taupe">
              Comer en Lisboa
            </p>
            <h1
              className="font-display italic leading-[1.03] text-night"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.8rem)', fontWeight: 400 }}
            >
              No necesitas una lista de cien restaurantes.
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-text-secondary">
              Necesitas saber qué quieres comer, cuánto quieres gastar y qué tipo de experiencia buscas.
              Esta guía organiza Lisboa por decisiones reales, no por rankings.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/tasca-da-graca.jpg"
              alt="Ambiente de una tasca en Lisboa"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">
            Elige según lo que buscas
          </p>
          <h2
            className="font-display italic leading-tight text-night"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.1rem)', fontWeight: 400 }}
          >
            ¿Qué tipo de comida necesitas hoy?
          </h2>

          <div className="mt-10 border-t border-night/20">
            {opciones.map((opcion, index) => (
              <article
                key={opcion.title}
                className="grid gap-4 border-b border-night/20 py-7 md:grid-cols-[3rem_1fr_0.8fr] md:gap-8"
              >
                <span className="font-body text-xs tracking-[0.16em] text-taupe">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-[1.35rem] italic leading-tight text-night">
                    {opcion.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                    {opcion.text}
                  </p>
                </div>
                <div className="md:text-right">
                  <Link
                    href={opcion.href}
                    className="font-body text-sm font-semibold text-night underline decoration-taupe/40 underline-offset-4 transition-colors hover:text-terracotta"
                  >
                    {opcion.link} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#EDE7DA' }}>
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">
                Si es tu primera vez
              </p>
              <h2
                className="font-display italic leading-tight text-night"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}
              >
                Tres decisiones antes de sentarte
              </h2>
            </div>

            <div className="space-y-7 font-body text-base leading-relaxed text-text-secondary">
              <p>
                <strong className="text-night">Mira primero el contexto.</strong> Una terraza muy visible
                en una zona monumental puede ser exactamente lo que quieres, pero conviene saber que estás
                pagando también por esa ubicación.
              </p>
              <p>
                <strong className="text-night">No pidas por obligación lo “típico”.</strong> Si quieres
                cocina portuguesa, entiende primero qué plato te apetece. Una buena experiencia no depende
                de marcar cinco comidas tradicionales en una lista.
              </p>
              <p>
                <strong className="text-night">Pregunta cuando tengas una necesidad alimentaria.</strong>
                Para vegetariano, vegano o sin gluten, esta guía irá creciendo sólo con lugares y opciones
                que podamos verificar suficientemente bien.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src="/images/bica-cafe-mapa.jpg"
                alt="Café y ambiente de barrio en Lisboa"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
                loading="lazy"
              />
            </div>

            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">
                Lo que iremos ampliando
              </p>
              <h2 className="font-display text-[2rem] italic leading-tight text-night md:text-[2.7rem]">
                Comer según tu forma de viajar
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-text-secondary">
                Esta página será la puerta principal. Desde aquí iremos separando guías para comida portuguesa,
                presupuesto, mercados, veggie, vegano, sin gluten, brunch y dulces. Cada una tendrá una función
                concreta y no existirá sólo para rellenar una categoría.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {['Portugués', 'Barato', 'Tascas', 'Mercados', 'Veggie', 'Vegano', 'Sin gluten', 'Brunch', 'Dulces'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-night/15 px-3 py-1.5 font-body text-xs text-night/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-night bg-azulejo-pattern-gold py-16">
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="max-w-xl font-body text-base leading-relaxed text-white/80">
            ¿Todavía estás organizando el viaje? Vuelve a la guía principal y elige qué resolver después.
          </p>
          <Link href="/#guia-rapida" className="btn-primary flex-shrink-0">
            Volver a la guía de Lisboa →
          </Link>
        </div>
      </section>
    </main>
  );
}
