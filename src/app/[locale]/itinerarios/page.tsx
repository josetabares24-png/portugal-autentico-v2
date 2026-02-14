import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ItineraryCard } from '@/components/itinerarios/ItineraryCard';
import { Breadcrumbs } from '@/components/Breadcrumbs';
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
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios' },
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
      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lisboa.jpg"
            alt="Vista panorámica de Lisboa"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 border border-white/20 mb-6 text-sm">
              <span className="material-symbols-outlined text-base">map</span>
              {mainItineraries.length + specialItineraries.length} rutas disponibles
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-[1.08] mb-5 text-white tracking-tight">
              Elige tu experiencia
              <br />
              <span className="text-accent">perfecta en Lisboa</span>
            </h1>

            <p className="text-lg text-white/80 max-w-lg leading-relaxed">
              Itinerarios completos con restaurantes, spots de fotos y tips de locales. Desde 1 día hasta una semana.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-white py-3 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Itinerarios' }]} />
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
            {[
              { icon: 'bolt', label: 'Acceso inmediato' },
              { icon: 'verified', label: 'Verificado 2026' },
              { icon: 'workspace_premium', label: 'Garantía 48h' },
              { icon: 'map', label: 'Mapas GPS offline' },
            ].map((item) => (
              <div key={item.icon} className="flex items-center gap-2 text-text-secondary">
                <span className="material-symbols-outlined text-primary text-base">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAIN ITINERARIES ─── */}
      <section id="itinerarios" className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/8 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Según tus días
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-text-main mb-4 tracking-tight">
              Itinerarios principales
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Cada pack incluye itinerario hora a hora, restaurantes verificados, spots de fotos y mapas offline.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPECIAL PACKS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/8 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Experiencias temáticas
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-text-main mb-4 tracking-tight">
              Packs especiales
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Para viajeros con intereses específicos: parejas, familias, fotógrafos o estancias largas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} size="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* ─── USEFUL LINKS ─── */}
      <section className="py-14 bg-background-light">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-display font-black text-text-main mb-6 text-center">Completa tu viaje</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: '/transporte', icon: 'directions_transit', label: 'Transporte' },
              { href: '/presupuesto', icon: 'payments', label: 'Presupuesto' },
              { href: '/apps', icon: 'phone_iphone', label: 'Apps útiles' },
              { href: '/info-util', icon: 'info', label: 'Info esencial' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-100 hover:border-primary/20 hover:shadow-soft transition-all duration-300"
              >
                <span className="material-symbols-outlined text-primary text-xl group-hover:scale-110 transition-transform">{link.icon}</span>
                <span className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-display font-black text-text-main mb-8 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-background-light rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-text-main mb-2">{item.question}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-azulejo-pattern" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-5 tracking-tight">
            No sabes cuál elegir?
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto leading-relaxed">
            Haz el quiz de 60 segundos y te recomendamos la ruta perfecta para tu viaje.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-primary rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">quiz</span>
              Hacer el quiz
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold border border-white/25 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
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
