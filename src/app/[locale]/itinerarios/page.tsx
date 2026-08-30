import Link from 'next/link';
import type { Metadata } from 'next';
import { EditorialPageHero } from '@/components/EditorialPageHero';
import { ItineraryCard } from '@/components/itinerarios/ItineraryCard';
import { getGuideList } from '@/lib/guide-store';
import { CORE_ITINERARIES } from '@/data/itineraries';

/*
 * La metadata prometía «Semana» y «semana completa» porque el hub ofrecía
 * siete itinerarios. Desde que la selección principal son tres, eso describía
 * una página que ya no existe: quien llegaba desde el buscador esperando una
 * guía de una semana no la encontraba aquí.
 *
 * También se cae «mapas GPS offline». El mapa es Leaflet con teselas
 * externas: sin conexión no se ve nada. Prometer offline era prometer una
 * funcionalidad que no está implementada.
 */
export const metadata: Metadata = {
  title: 'Itinerarios en Lisboa 2026: rutas de 1, 2 y 3 días',
  description: 'Itinerarios de Lisboa para 1, 2 y 3 días, con rutas hora a hora, mapas y consejos prácticos. Incluye una opción de 3 días con Sintra.',
  keywords: ['itinerario lisboa 1 dia', 'lisboa 2 dias', 'lisboa 3 dias', 'guia lisboa', 'que ver lisboa', 'ruta lisboa'],
  openGraph: {
    title: 'Itinerarios Lisboa 2026: rutas de 1, 2 y 3 días',
    description: 'Rutas de Lisboa para 1, 2 y 3 días, con planificación por jornadas, mapas y consejos prácticos.',
    url: 'https://estabaenlisboa.com/itinerarios',
    images: [{ url: 'https://estabaenlisboa.com/images/alfama-panoramica.jpg', width: 1200, height: 630, alt: 'Itinerarios en Lisboa 2026' }],
  },
  /*
   * Sin este bloque, Twitter heredaba el `twitter:title` y el
   * `twitter:description` globales del layout, que hablan del sitio entero y
   * no de esta página. Al compartir el hub salía una tarjeta genérica mientras
   * Open Graph mostraba el texto correcto. Se alinean los dos.
   *
   * `card` e `images` se repiten aquí a propósito: Next.js no fusiona el
   * objeto `twitter` con el del layout, lo sustituye entero. Declarar sólo
   * título y descripción habría dejado la página sin `summary_large_image` y
   * sin imagen. La imagen es la misma que ya usa Open Graph en esta página.
   */
  twitter: {
    card: 'summary_large_image',
    title: 'Itinerarios Lisboa 2026: rutas de 1, 2 y 3 días',
    description: 'Rutas de Lisboa para 1, 2 y 3 días, con planificación por jornadas, mapas y consejos prácticos.',
    images: ['https://estabaenlisboa.com/images/alfama-panoramica.jpg'],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/itinerarios',
  },
};

export default async function ItinerariosPage() {
  const { main: guiasPrincipales } = await getGuideList();

  /*
   * La selección principal son tres, y sólo tres: 1, 2 y 3 días.
   *
   * Se filtra y se ordena contra `CORE_ITINERARIES` en lugar de confiar en lo
   * que devuelva la lista, porque esa lista sale de Supabase cuando está
   * configurada y de los datos locales cuando no: si mañana alguien añade una
   * guía desde el panel, no debe colarse sola en la portada de la sección.
   *
   * Los cuatro itinerarios temáticos (romántica, familiar, fotografía y semana
   * completa) siguen publicados, indexados y en el sitemap; lo que dejan de
   * hacer es competir aquí. Se llega a ellos desde `/pack-completo`, que los
   * enlaza todos.
   */
  const itinerariosPrincipales = CORE_ITINERARIES.map((core) =>
    guiasPrincipales.find((g) => g.slug === core.slug || g.id === core.slug)
  ).filter((g): g is NonNullable<typeof g> => Boolean(g));

  const faqItems = [
    { question: '¿Cuántos días se recomiendan para Lisboa?', answer: 'Lo ideal son 3-4 días para ver lo esencial sin prisas. Con 2 días puedes cubrir lo imprescindible.' },
    /*
     * Dos promesas que no podíamos sostener: «mapas GPS offline» (el mapa es
     * Leaflet con teselas externas, sin conexión no se ve) y «restaurantes
     * comprobados sobre el terreno» (no tenemos forma de demostrarlo).
     */
    { question: '¿Qué incluye cada itinerario?', answer: 'Rutas hora a hora, mapas con las paradas y recomendaciones prácticas para organizar cada jornada.' },
    { question: '¿Los itinerarios sirven para primera visita?', answer: 'Sí, están diseñados para optimizar tiempos y evitar trampas turísticas.' },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main id="main-content">
      <EditorialPageHero
        eyebrow="Guías de viaje"
        title="Itinerarios para Lisboa"
        description="Rutas pensadas para aprovechar Lisboa según el tiempo que tengas."
        image="/images/lisboa-originales/alfama-rua-da-adica-lisboa.jpg"
        imageAlt="Calle empedrada y casas de Alfama en Lisboa"
        variant="itineraries"
      />

      {/* Itinerarios principales */}
      <section id="itinerarios" className="bg-background-light pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-7 md:mb-9">
            <p className="page-eyebrow">Según tus días</p>
            <h2 className="page-title mb-2">¿Cuántos días tienes?</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {itinerariosPrincipales.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} />
            ))}
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border-soft" />
      </div>

      {/* Completa tu viaje */}
      <section className="bg-background-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-6">También te puede interesar</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { href: '/actividades', label: 'Actividades sin gastar mucho' },
              { href: '/planifica-tu-viaje', label: 'Planifica tu viaje' },
              { href: '/pack-completo', label: 'Todas las guías gratuitas' },
              { href: '/blog', label: 'Blog: historias y consejos' },
              { href: '/faq', label: 'Preguntas frecuentes' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-terracotta transition-colors underline-offset-2 hover:underline"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-night bg-azulejo-pattern-gold py-20 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="font-display italic text-white text-3xl md:text-4xl mb-10">
            Preguntas frecuentes
          </h2>
          <div className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.question} className="border-t border-white/10 pt-6">
                <h3 className="font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA planifica tu viaje */}
      <section className="bg-background-light py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-text-main text-2xl md:text-3xl mb-4">
            ¿No sabes cuál elegir?
          </h2>
          <p className="text-text-secondary mb-8">
            Cuéntanos tus días y tu estilo de viaje y te recomendamos la ruta perfecta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/planifica-tu-viaje"
              className="btn-primary btn-lg"
            >
              Planifica tu viaje
            </Link>
            <Link
              href="/contacto"
              className="btn-secondary btn-lg"
            >
              Pregúntanos
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
