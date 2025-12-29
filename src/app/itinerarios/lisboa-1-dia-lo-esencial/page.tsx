import Link from 'next/link';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import { lisboa1DiaTimeline } from '@/data/itineraries';

export const metadata = {
  title: 'Lisboa 1 Día - Itinerario Esencial | Estaba en Lisboa',
  description: 'Lo mejor de Lisboa en un día perfectamente organizado. Alfama, Belém, miradores y los mejores restaurantes locales.',
};

export default function Lisboa1DiaPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1920)'}}></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/itinerarios" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a itinerarios
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-sky-500 text-white">ESENCIAL</span>  
            <span className="text-white/60 text-sm">1 día completo</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Lisboa Esencial</h1>
          <p className="text-xl text-white/80 mb-8">Perfecto si tienes escala o poco tiempo. Lo mejor de Lisboa perfectamente organizado para que no pierdas ni un minuto.</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">8 paradas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">3 restaurantes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">8 spots de fotos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">Mapa offline</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-3xl font-bold text-slate-900">5.99 EUR</span>
              </div>
              <span className="text-green-600 text-sm font-medium">Descarga inmediata</span>
            </div>
            <div className="flex gap-3">
              <Link href="#preview" className="px-6 py-3 rounded-xl font-semibold border-2 border-slate-200 hover:border-slate-300 transition-colors">
                Ver preview
              </Link>
              <button className="btn-primary">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-text-main">Tu día en Lisboa, hora a hora</h2>

          <div className="space-y-6">
            {lisboa1DiaTimeline.map((stop, idx) => (
              <TimelineStop key={idx} {...stop} />
            ))}
          </div>
        </div>
      </section>

      <IncludedFeatures />

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para tu día perfecto en Lisboa?</h2>
          <p className="text-white/90 text-lg mb-8">Descarga inmediata. Acceso de por vida. Garantía de 14 días.</p>
          <button className="px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 bg-white text-primary">
            Comprar por 5.99 EUR
          </button>
        </div>
      </section>
    </main>
  );
}

