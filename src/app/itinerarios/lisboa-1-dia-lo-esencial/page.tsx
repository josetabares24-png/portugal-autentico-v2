import Link from 'next/link';
import Image from 'next/image';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import { lisboa1DiaTimeline } from '@/data/itineraries';

export const metadata = {
  title: 'Lisboa en 1 Día: Lo Esencial | Estaba en Lisboa',
  description: 'Lo mejor de Lisboa en un día perfectamente organizado. Alfama, Belém, miradores y los mejores restaurantes locales.',
};

export default function Lisboa1DiaPage() {
  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1920")'}}>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <Link href="/itinerarios" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm transition-colors">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Volver a itinerarios
          </Link>
          
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-white/30">
            <span className="material-symbols-outlined text-base">schedule</span>
            GUÍA DE VIAJE 2025
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-lg">
            Lisboa en 1 día:<br />
            <span className="text-amber-300">Lo Esencial</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-md">
            Descubre el alma de la ciudad: desde los miradores de Alfama hasta los pasteles de Belém en una experiencia auténtica y optimizada.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">location_on</span>
              <span className="text-white text-sm font-medium">8 paradas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">restaurant</span>
              <span className="text-white text-sm font-medium">3 restaurantes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">photo_camera</span>
              <span className="text-white text-sm font-medium">8 spots de fotos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">map</span>
              <span className="text-white text-sm font-medium">Mapa offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-3xl font-bold text-primary">5.99 EUR</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                <span className="material-symbols-outlined text-lg">check_circle</span>
                Descarga inmediata
              </div>
            </div>
            <div className="flex gap-3">
              <a 
                href="#preview" 
                className="px-6 py-3 rounded-xl font-semibold border-2 border-slate-300 hover:border-primary hover:text-primary transition-all"
              >
                Ver preview
              </a>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-primary hover:bg-primary-dark transition-all hover:scale-105 shadow-lg">
                <span className="material-symbols-outlined">shopping_cart</span>
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-background-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">Resumen del Viaje</h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">Todo lo que necesitas saber antes de empezar tu aventura por las 7 colinas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Duración</h3>
                <p className="text-text-secondary">10-12 horas de exploración tranquila</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">directions_transit</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Transporte</h3>
                <p className="text-text-secondary">Caminando y el mítico Tranvía 28</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">payments</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main mb-1">Presupuesto</h3>
                <p className="text-text-secondary">€€ - Accesible con opciones gourmet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white bg-azulejo-pattern" id="itinerario">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wide mb-3">
              Itinerario completo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">
              Tu Cronograma Paso a Paso
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Cada parada está pensada para que aproveches tu tiempo al máximo sin sentirte apurado
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:-translate-x-1/2"></div>
            
            {lisboa1DiaTimeline.map((stop, idx) => (
              <TimelineStop key={idx} {...stop} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Included Features */}
      <IncludedFeatures />

      {/* Insider Tips Section */}
      <section className="py-16 bg-background-cream" id="consejos">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-secondary-blue/10 text-secondary-blue rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                  Consejos exclusivos
                </span>
                <h2 className="text-3xl font-bold text-text-main mb-4">Trucos que Solo los Locales Conocen</h2>
                <p className="text-text-secondary">Evita errores comunes y aprovecha tu día como un lisboeta más.</p>
              </div>
              
              <div className="aspect-video w-full rounded-xl bg-gray-200 overflow-hidden shadow-lg relative">
                <Image
                  src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800"
                  alt="Lisboa streets"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="text-center text-white">
                    <span className="material-symbols-outlined text-5xl mb-2 block">map</span>
                    <p className="font-bold">Mapa Interactivo Incluido</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <div className="bg-white p-6 rounded-xl azulejo-border flex flex-col gap-6 flex-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-azulejo-pattern"></div>
                
                <div className="inline-flex items-center gap-2 bg-secondary-blue/10 text-secondary-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide self-start">
                  <span className="material-symbols-outlined text-base">lightbulb</span>
                  Insider Tips
                </div>
                
                <ul className="flex flex-col gap-5 flex-1">
                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-primary text-lg">foot_bones</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Zapatos Cómodos</h4>
                      <p className="text-text-secondary text-sm mt-1">La "calçada portuguesa" es preciosa pero resbaladiza y desigual. Evita tacones.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-primary text-lg">credit_card</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Viva Viagem</h4>
                      <p className="text-text-secondary text-sm mt-1">Compra esta tarjeta recargable en cualquier estación de metro. Es mucho más barato.</p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="min-w-[32px] w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-primary text-lg">tram</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">Tranvía 28</h4>
                      <p className="text-text-secondary text-sm mt-1">Evita las horas punta (11am-4pm). Cógelo en la parada inicial para ir sentado.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-azulejo-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-6xl mb-6 inline-block text-white/90">travel_explore</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            ¿Listo para explorar Lisboa?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Descarga inmediata. Acceso de por vida. Garantía de reembolso de 14 días.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-white text-primary font-bold shadow-lg transition-all hover:scale-105">
              <span className="material-symbols-outlined">download</span>
              Comprar por 5.99 EUR
            </button>
            <a 
              href="/contacto" 
              className="flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-transparent border-2 border-white/20 hover:bg-white/10 text-white font-bold transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              Tengo dudas
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
