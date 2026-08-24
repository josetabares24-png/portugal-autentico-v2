import Link from 'next/link';
import Image from 'next/image';
import { EditorialPageHero } from '@/components/EditorialPageHero';

/*
 * /pack-completo — hub de selección.
 *
 * La página presentaba siete tarjetas idénticas en una cuadrícula plana, con
 * el mismo botón «Ver guía gratis» repetido siete veces y un copy que las
 * llamaba «rutas» a todas. Eso describía un catálogo que ya no existe: tres de
 * aquellas siete eran itinerarios temáticos que se retiraron, y sus sustitutos
 * son artículos del blog, no rutas cerradas.
 *
 * La arquitectura real del sitio son dos familias distintas, y la página tiene
 * que enseñarlas como tales:
 *
 *   ITINERARIOS  1, 2 y 3 días. Recorrido cerrado, con horas y mapa.
 *   GUÍAS        7 días, pareja, niños y fotografía. Criterio editorial para
 *                decidir, sin recorrido hora a hora.
 *
 * De ahí la jerarquía: los tres itinerarios pesan visualmente (tarjeta grande
 * con foto y botón), la semana va aparte porque no es un cuarto itinerario, y
 * las tres temáticas quedan claramente subordinadas (tarjeta compacta, enlace
 * en vez de botón).
 *
 * El vocabulario es deliberado y no debe volver a mezclarse: «itinerario» para
 * 1/2/3 días, «guía» para las otras cuatro.
 */

const ITINERARIOS = [
  {
    dias: '1 día',
    title: 'Lisboa en 1 día',
    href: '/itinerarios/lisboa-1-dia-lo-esencial',
    desc: 'Un recorrido compacto por Alfama, el castillo, la Baixa y Belém, ordenado para no cruzar la ciudad de un lado a otro.',
    paraQuien: 'Para una escala, un fin de semana corto o una primera toma de contacto.',
    image: '/images/alfama-panoramica.jpg',
    imageAlt: 'Los tejados de Alfama y el río Tajo desde un mirador de Lisboa',
  },
  {
    dias: '2 días',
    title: 'Lisboa en 2 días',
    href: '/itinerarios/lisboa-2-dias-completo',
    desc: 'Dos jornadas que reparten el casco histórico y Belém sin apretar, con tiempo para miradores y para sentarse a comer.',
    paraQuien: 'Para un fin de semana completo, que es como llega la mayoría.',
    image: '/images/funicular-bica-turistas.jpg',
    imageAlt: 'El ascensor da Bica subiendo una calle empinada de Lisboa',
  },
  {
    dias: '3 días',
    title: 'Lisboa en 3 días',
    href: '/itinerarios/lisboa-3-dias-premium',
    desc: 'El itinerario más completo de la casa: ciudad, Belém y río, y un tercer día que explica cuándo compensa ir a Sintra y cuándo rinde más quedarse.',
    paraQuien: 'Para quien viene a conocer Lisboa de verdad, con o sin excursión.',
    image: '/images/tranvia-28.jpg',
    imageAlt: 'El tranvía 28 recorriendo una calle estrecha del centro de Lisboa',
  },
];

const GUIAS_TEMATICAS = [
  {
    title: 'Lisboa en pareja',
    href: '/blog/lisboa-en-pareja',
    desc: 'Planes para dos que funcionan según el rato que tengáis, el presupuesto y el tiempo que haga.',
    image: '/images/lisboa-originales/rio-tejo-por-do-sol-lisboa.webp',
    imageAlt: 'El río Tajo al atardecer desde Lisboa',
  },
  {
    title: 'Lisboa con niños',
    href: '/blog/lisboa-con-ninos',
    desc: 'Qué es cómodo de verdad con niños, cómo se mueve un carrito por una ciudad de cuestas y qué hacer si llueve.',
    image: '/images/actividades/jardim-da-estrela-coreto.webp',
    imageAlt: 'El quiosco del Jardim da Estrela, en Lisboa',
  },
  {
    title: 'Dónde fotografiar Lisboa',
    href: '/blog/donde-fotografiar-lisboa',
    desc: 'Qué se fotografía en cada zona, hacia dónde mira y a qué hora le entra la luz de frente.',
    image: '/images/lisboa-originales/lisboa-baixa-rio-tejo-entardecer.webp',
    imageAlt: 'La Baixa de Lisboa y el Tajo al caer la tarde',
  },
];

export default function PackCompletoPage() {
  return (
    <main id="main-content">
      <EditorialPageHero
        eyebrow="Guías de Lisboa"
        title="Cómo organizar tu viaje a Lisboa"
        image="/images/mirador-tajo-amarras-atardecer.jpg"
        imageAlt="Vista del río Tajo a su paso por Lisboa, al atardecer"
      />

      <section className="bg-background-light pt-12 pb-2 md:pt-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-body text-[15px] leading-relaxed text-text-secondary md:text-base">
            Aquí están reunidas las formas de organizar un viaje a Lisboa que tenemos
            escritas. Se eligen por tres cosas: cuántos días tienes, cómo viajas y qué tipo
            de viaje buscas.
          </p>
          <p className="mt-4 font-body text-[15px] leading-relaxed text-text-secondary md:text-base">
            No son todas lo mismo. Los <span className="text-text-main">itinerarios</span> son
            recorridos cerrados, con la hora de cada parada y su mapa. Las{' '}
            <span className="text-text-main">guías</span> no dan un recorrido: ayudan a
            decidir. Empieza por los días que tienes y baja desde ahí.
          </p>
        </div>
      </section>

      {/* BLOQUE 1 — el principal. Los tres itinerarios core. */}
      <section id="itinerarios" className="bg-background-light pt-12 pb-14 md:pt-14 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 md:mb-10">
            <p className="page-eyebrow">Itinerarios</p>
            <h2 className="page-title mb-2">Elige tu itinerario según los días que tienes</h2>
            <p className="page-description">
              Tres recorridos cerrados, cada uno con sus paradas ordenadas, las horas
              orientativas y el mapa al final.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {ITINERARIOS.map((it) => (
              <article key={it.href} className="card-surface group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={it.image}
                    alt={it.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <span className="badge-pill absolute left-4 top-4 bg-night text-white">
                    {it.dias}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 font-display text-2xl italic leading-snug text-text-main">
                    {it.title}
                  </h3>
                  <p className="mb-4 font-body text-sm leading-relaxed text-text-secondary">
                    {it.desc}
                  </p>
                  <p className="mb-6 border-l-2 border-gold pl-3 font-body text-sm leading-relaxed text-text-secondary">
                    {it.paraQuien}
                  </p>
                  <Link
                    href={it.href}
                    className="btn-primary mt-auto w-full justify-center py-3 text-sm"
                  >
                    Ver el itinerario
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-border-soft" />
      </div>

      {/* BLOQUE 2 — la semana. Aparte a propósito: no es un cuarto itinerario. */}
      <section className="bg-background-light py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <p className="page-eyebrow">Si tienes más tiempo</p>
            <h2 className="page-title mb-2">Una semana en Lisboa</h2>
          </div>

          <article className="card-surface overflow-hidden md:grid md:grid-cols-2 md:items-stretch">
            <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[16rem]">
              <Image
                src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg"
                alt="Los tejados de Lisboa descendiendo hacia el río Tajo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-8">
              <h3 className="mb-3 font-display text-2xl italic leading-snug text-text-main">
                Lisboa en 7 días
              </h3>
              <p className="mb-4 font-body text-sm leading-relaxed text-text-secondary">
                Siete días no son los tres días de siempre con más huecos. Esta guía no
                repite el «qué ver» que ya resuelven los itinerarios cortos: explica cómo se
                reparte la semana, cuántas escapadas caben sin quemar el viaje y qué hacer
                con los días que ninguna guía corta cubre.
              </p>
              <Link
                href="/blog/lisboa-en-7-dias"
                className="font-body text-sm font-semibold text-terracotta underline-offset-4 hover:underline"
              >
                Leer la guía de la semana →
              </Link>
            </div>
          </article>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-border-soft" />
      </div>

      {/* BLOQUE 3 — temáticas. Familia visual secundaria: tarjeta compacta y enlace. */}
      <section className="bg-background-light py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 md:mb-10">
            <p className="page-eyebrow">Según cómo viajas</p>
            <h2 className="page-title mb-2">Guías por tipo de viaje</h2>
            <p className="page-description">
              No son recorridos: son criterios para elegir, y se combinan con cualquiera de
              los itinerarios de arriba.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GUIAS_TEMATICAS.map((g) => (
              <article key={g.href} className="card-surface group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={g.image}
                    alt={g.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 font-body text-lg font-semibold leading-snug text-text-main">
                    {g.title}
                  </h3>
                  <p className="mb-4 font-body text-sm leading-relaxed text-text-secondary">
                    {g.desc}
                  </p>
                  <Link
                    href={g.href}
                    className="mt-auto font-body text-sm font-semibold text-terracotta underline-offset-4 hover:underline"
                  >
                    Leer la guía →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="border-l-2 border-border-soft pl-4 font-body text-sm leading-relaxed text-text-secondary">
            ¿Sigues sin tenerlo claro? En{' '}
            <Link
              href="/planifica-tu-viaje"
              className="text-terracotta underline-offset-2 hover:underline"
            >
              planifica tu viaje
            </Link>{' '}
            puedes indicar cuántos días vienes y te sugiere por dónde empezar.
          </p>
        </div>
      </section>
    </main>
  );
}
