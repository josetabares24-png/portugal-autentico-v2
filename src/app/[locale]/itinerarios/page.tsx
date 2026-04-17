import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ItineraryCard } from '@/components/itinerarios/ItineraryCard';
import { getGuideList } from '@/lib/guide-store';

export const metadata: Metadata = {
  title: 'Itinerarios en Lisboa 2026: Guías 1, 2, 3 Días y Semana',
  description: 'Guías de Lisboa por días: 1 día esencial, 2 días completo, 3 días con Sintra, semana completa. Rutas con horarios reales, GPS, restaurantes locales y mapas. Creadas por locales.',
  keywords: ['itinerario lisboa 1 dia', 'lisboa 2 dias', 'lisboa 3 dias', 'guia lisboa', 'que ver lisboa', 'ruta lisboa'],
  openGraph: {
    title: 'Itinerarios Lisboa 2026: 1, 2, 3 Días y Semana',
    description: 'Guías con rutas hora a hora, mapas GPS y restaurantes. Lisboa esencial, completo o con Sintra.',
    url: 'https://estabaenlisboa.com/itinerarios',
    images: [{ url: 'https://estabaenlisboa.com/images/hero-lisboa.jpg', width: 1200, height: 630, alt: 'Itinerarios en Lisboa 2026' }],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/itinerarios',
  },
};

export default async function ItinerariosPage() {
  const { main: mainItineraries, special: specialItineraries } = await getGuideList();

  const faqItems = [
    { question: '¿Cuántos días se recomiendan para Lisboa?', answer: 'Lo ideal son 3-4 días para ver lo esencial sin prisas. Con 2 días puedes cubrir lo imprescindible.' },
    { question: '¿Qué incluye cada itinerario?', answer: 'Rutas hora a hora, mapas GPS offline, recomendaciones de restaurantes verificados y tips de locales.' },
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
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[380px] overflow-hidden">
        <Image
          src="/images/hero-lisboa.jpg"
          alt="Vista panorámica de Lisboa"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <p className="text-white/70 text-sm tracking-widest uppercase mb-3">Guías de viaje</p>
          <h1 className="font-display italic text-white text-4xl md:text-6xl leading-tight">
            Itinerarios para Lisboa
          </h1>
        </div>
      </section>

      {/* Itinerarios principales */}
      <section id="itinerarios" className="bg-background-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">Según tus días</p>
            <h2 className="font-display italic text-text-main text-3xl md:text-4xl">
              Elige tu ruta
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {mainItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} />
            ))}
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border-soft" />
      </div>

      {/* Packs especiales */}
      <section className="bg-background-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">Experiencias temáticas</p>
            <h2 className="font-display italic text-text-main text-3xl md:text-4xl">
              Packs especiales
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} size="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border-soft" />
      </div>

      {/* Completa tu viaje */}
      <section className="bg-background-light py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-6">También te puede interesar</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { href: '/transporte', label: 'Transporte en Lisboa' },
              { href: '/presupuesto', label: 'Presupuesto para Lisboa' },
              { href: '/apps', label: 'Apps útiles' },
              { href: '/info-util', label: 'Información esencial' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-primary transition-colors underline-offset-2 hover:underline"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display italic text-white text-2xl md:text-3xl mb-10">
            Preguntas frecuentes
          </h2>
          <div className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.question} className="border-t border-white/10 pt-6">
                <h3 className="font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA quiz */}
      <section className="bg-background-light py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-text-main text-2xl md:text-3xl mb-4">
            ¿No sabes cuál elegir?
          </h2>
          <p className="text-text-secondary mb-8">
            Haz el quiz de 60 segundos y te recomendamos la ruta perfecta para tu viaje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
            >
              Hacer el quiz
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-3 border border-border-soft hover:border-text-secondary text-text-main font-semibold transition-colors"
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
