import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const SITE_URL = 'https://estabaenlisboa.com';

export default function SobreNosotrosPage() {
  const profileJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/sobre-nosotros#profile`,
    url: `${SITE_URL}/sobre-nosotros`,
    name: 'José Tabares, autor de Estaba en Lisboa',
    description: 'Quién escribe y revisa las guías de Estaba en Lisboa y qué método editorial utiliza.',
    inLanguage: 'es-ES',
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/sobre-nosotros#jose-tabares`,
      name: 'José Tabares',
      url: `${SITE_URL}/sobre-nosotros`,
      jobTitle: 'Autor y editor de Estaba en Lisboa',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      knowsAbout: [
        'Lisboa',
        'Planificación de viajes a Lisboa',
        'Transporte público de Lisboa',
        'Barrios de Lisboa',
        'Gastronomía portuguesa',
      ],
      sameAs: ['https://instagram.com/estabaenlisboa'],
    },
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };

  return (
    <main id="main-content" className="bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />

      <section className="relative flex h-[58svh] min-h-[430px] max-h-[640px] items-end overflow-hidden bg-night">
        <Image
          src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg"
          alt="Tejados de Alfama y el río Tajo vistos desde Lisboa"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-night/5 lg:bg-gradient-to-r lg:from-night/85 lg:via-night/35 lg:to-transparent" />
        <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-12 sm:px-8 md:px-10 lg:pb-16">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Detrás de las guías
          </p>
          <h1 className="max-w-4xl font-display text-[2.7rem] font-semibold not-italic leading-[1.02] tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Una persona en Lisboa, no una fábrica de listas.
          </h1>
        </div>
      </section>

      <section id="jose-tabares" className="scroll-mt-24 border-b border-night/10 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-9 px-6 md:px-10 lg:grid-cols-[0.48fr_1fr] lg:gap-20">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              José Tabares
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold not-italic leading-[1.08] tracking-normal text-night sm:text-4xl">
              Escribo desde la ciudad que estás preparando.
            </h2>
          </div>
          <div className="space-y-6 font-body text-base leading-[1.85] text-text-secondary">
            <p>
              Vivo en Lisboa y escribo Estaba en Lisboa para ayudar a tomar decisiones concretas: qué cabe en tus días, qué trayecto evita una cuesta innecesaria o cuándo una reserva realmente aporta algo.
            </p>
            <p>
              La experiencia propia orienta el criterio, pero no sustituye los datos. Horarios, tarifas, normas y accesos se comprueban en fuentes oficiales siempre que existen. Si algo es una valoración editorial, lo presento como tal.
            </p>
            <p>
              No publico una recomendación sólo porque suene local, secreta o imprescindible. Prefiero explicar para quién funciona, qué inconveniente tiene y cómo encaja en un viaje real.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/55 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-9 max-w-2xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              Método editorial
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold not-italic leading-[1.08] tracking-normal text-night sm:text-4xl">
              Cómo se construye una guía.
            </h2>
          </div>
          <div className="grid border-y border-night/15 md:grid-cols-3">
            {[
              {
                title: 'Primero, la decisión',
                text: 'La guía debe resolver una pregunta del viajero antes de ampliar el contexto o sugerir otra lectura.',
              },
              {
                title: 'Después, la evidencia',
                text: 'Los datos que cambian se fechan, se enlazan a su fuente y se revisan cuando aparece información nueva.',
              },
              {
                title: 'Por último, el criterio',
                text: 'Una recomendación explica ventajas y límites. No hay una respuesta universal para todos los viajes.',
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className={`py-7 md:min-h-[220px] md:px-7 ${index > 0 ? 'border-t border-night/15 md:border-l md:border-t-0' : ''}`}
              >
                <h3 className="font-display text-2xl font-semibold not-italic leading-tight tracking-normal text-night">
                  {item.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-[1.75] text-text-secondary">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night py-14 text-white md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end md:px-10">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Una duda concreta
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[2rem] font-semibold not-italic leading-[1.08] tracking-normal text-white sm:text-4xl">
              Si una guía no te responde, dímelo.
            </h2>
          </div>
          <Link
            href="/contacto"
            className="inline-flex min-h-12 items-center gap-2 rounded-[4px] bg-terracotta px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Escribirme
            <ArrowUpRight size={17} strokeWidth={1.9} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
