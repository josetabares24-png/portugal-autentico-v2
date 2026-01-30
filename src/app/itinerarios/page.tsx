import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ItineraryCard } from '@/components/itinerarios/ItineraryCard';
import { getGuideList } from '@/lib/guide-store';

export const metadata: Metadata = {
  title: 'Itinerarios en Lisboa 2026: Guías por Días y Barrios | Estaba en Lisboa',
  description: 'Elige tu itinerario de Lisboa con rutas por días, barrios y estilos. Guías locales con horarios reales, mapas y restaurantes.',
  openGraph: {
    title: 'Itinerarios en Lisboa 2026: Guías por Días y Barrios',
    description: 'Guías locales con rutas optimizadas, mapas y restaurantes reales en Lisboa.',
    url: 'https://estabaenlisboa.com/itinerarios',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/hero-lisboa.jpg',
        width: 1200,
        height: 630,
        alt: 'Itinerarios en Lisboa 2026',
      },
    ],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com/itinerarios',
  },
};

export default async function ItinerariosPage() {
  const { main: mainItineraries, special: specialItineraries } = await getGuideList();
  const faqItems = [
    {
      question: '¿Cuántos días se recomiendan para Lisboa?',
      answer: 'Lo ideal son 3-4 días para ver lo esencial sin prisas. Con 2 días puedes cubrir lo imprescindible.',
    },
    {
      question: '¿Qué incluye cada itinerario?',
      answer: 'Rutas hora a hora, mapas, recomendaciones de restaurantes y tips locales.',
    },
    {
      question: '¿Los itinerarios sirven para primera visita?',
      answer: 'Sí, están diseñados para optimizar tiempos y evitar turistadas.',
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
  return (
    <main id="main-content">
      {/* Hero Section - Estilo consistente con home */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 py-16 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">map</span>
            <span className="text-sm font-semibold tracking-wide">Guías de viaje 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tight mb-6 text-white drop-shadow-lg">
            Elige tu experiencia<br />
            <span className="text-accent">perfecta en Lisboa</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/95 font-normal leading-relaxed max-w-3xl mx-auto mb-10 drop-shadow-md">
            Itinerarios completos con restaurantes auténticos, spots de fotos únicos y tips de locales que viven la ciudad.
          </p>
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white shadow-lg">
            <span className="material-symbols-outlined text-lg">verified</span>
            {mainItineraries.length + specialItineraries.length} Packs disponibles
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Quick Stats Section - Estilo consistente */}
      <section className="py-16 bg-background-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Descarga Inmediata</h3>
                <p className="text-text-secondary text-sm">Acceso instantáneo tras la compra</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">100% Actualizado</h3>
                <p className="text-text-secondary text-sm">Verificado en 2026 por locales</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">payments</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Garantía 48 Horas</h3>
                <p className="text-text-secondary text-sm">Reembolso sin preguntas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Planifica mejor
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Todo lo que necesitas antes de elegir ruta
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Transporte, presupuesto y consejos para completar tu itinerario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <Link href="/transporte" className="group rounded-2xl border border-slate-200/80 p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-white/50">
              <span className="material-symbols-outlined text-primary text-3xl block mb-2 group-hover:scale-110 transition-transform">directions_transit</span>
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Transporte en Lisboa</div>
            </Link>
            <Link href="/presupuesto" className="group rounded-2xl border border-slate-200/80 p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-white/50">
              <span className="material-symbols-outlined text-primary text-3xl block mb-2 group-hover:scale-110 transition-transform">payments</span>
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Presupuesto de viaje</div>
            </Link>
            <Link href="/apps" className="group rounded-2xl border border-slate-200/80 p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-white/50">
              <span className="material-symbols-outlined text-primary text-3xl block mb-2 group-hover:scale-110 transition-transform">phone_iphone</span>
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Apps útiles</div>
            </Link>
            <Link href="/blog" className="group rounded-2xl border border-slate-200/80 p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-white/50">
              <span className="material-symbols-outlined text-primary text-3xl block mb-2 group-hover:scale-110 transition-transform">article</span>
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Consejos y guías</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Itineraries Section - Estilo consistente */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-medium uppercase tracking-wider mb-6">
              Según tus días
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 text-text-main tracking-tight">
              Itinerarios <span className="text-primary">Principales</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Cada pack incluye itinerario hora a hora + restaurantes probados + spots de fotos + mapas offline
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {mainItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Packs Section - Estilo consistente */}
      <section className="py-20 bg-background-cream bg-azulejo-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-medium uppercase tracking-wider mb-6">
              Experiencias únicas
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 text-text-main tracking-tight">
              Packs <span className="text-primary">Especiales</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Para viajeros con intereses específicos y ganas de vivir Lisboa de forma diferente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialItineraries.map(itinerary => (
              <ItineraryCard key={itinerary.id} {...itinerary} size="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Estilo consistente */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-azulejo-pattern"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block opacity-80">travel_explore</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 tracking-tight">
            ¿Tienes dudas sobre qué pack elegir?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Escríbenos y te ayudamos a elegir el itinerario perfecto según tus días, intereses y estilo de viaje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg text-white bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 transition-all duration-300 hover:scale-105"
            >
              <span className="material-symbols-outlined text-xl">chat</span>
              Hablar con un experto
            </Link>
            <a 
              href="#main" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Ver todos los packs
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">
            Preguntas frecuentes sobre itinerarios en Lisboa
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-700">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card">
                <h3 className="font-bold text-slate-900 mb-2">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
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
