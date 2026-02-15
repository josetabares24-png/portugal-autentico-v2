import Link from 'next/link';
import Image from 'next/image';
import { TimelineStop } from '@/components/itinerarios/TimelineStop';
import { TimelineContainer } from '@/components/itinerarios/TimelineContainer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IncludedFeatures } from '@/components/itinerarios/IncludedFeatures';
import { PreviewPaywall } from '@/components/itinerarios/PreviewPaywall';
import { PhotoGallery } from '@/components/itinerarios/PhotoGallery';
import { PremiumContent } from '@/components/itinerarios/PremiumContent';
import { lisboa1DiaTimeline } from '@/data/itineraries';
import { isFreeAccessActive, FREE_ACCESS_UNTIL } from '@/lib/guide-config';

export const metadata = {
  title: 'Lisboa en 1 Día: Lo Esencial - Guía Completa 2026',
  description: 'Itinerario Lisboa 1 día: Alfama, Belém, miradores Santa Luzia, pastéis de nata. Horarios exactos, GPS y restaurantes locales. Guía creada por quien vive aquí.',
  keywords: ['lisboa 1 dia', 'que ver lisboa un dia', 'itinerario lisboa', 'alfama belem', 'lisboa esencial'],
  openGraph: {
    title: 'Lisboa en 1 Día - Lo Esencial',
    description: 'La ruta más eficiente para ver lo mejor de Lisboa en un día. Alfama, Belém, miradores.',
    url: 'https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial',
  },
  alternates: { canonical: 'https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial' },
};

const PREVIEW_STOPS = 3;
const PRODUCT_PRICE = 1.99;

export default function Lisboa1DiaPage() {
  const isFree = isFreeAccessActive();
  const displayStops = isFree ? lisboa1DiaTimeline : lisboa1DiaTimeline.slice(0, PREVIEW_STOPS);
  const totalStops = lisboa1DiaTimeline.length;

  const photos = [
    { url: '/images/alfama-panoramica.jpg', caption: 'Alfama y miradores clásicos' },
    { url: '/images/tranvia-28.jpg', caption: 'Tranvía 28 por las colinas' },
    { url: '/images/elevador-santa-justa.jpg', caption: 'Elevador de Santa Justa' },
    { url: '/images/hero-lisboa.jpg', caption: 'Panorámica de Lisboa' },
  ];

  return (
    <main className="min-h-screen bg-background-light">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/alfama-panoramica.jpg"
            alt="Lisboa - Itinerario 1 día"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 pt-32">
          <Link
            href="/itinerarios"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Todas las rutas
          </Link>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 border border-white/20 mb-6 text-sm">
              <span className="material-symbols-outlined text-accent text-base">verified</span>
              Guía premium
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-[1.08] mb-5 text-white tracking-tight">
              Lisboa en 1 día:
              <br />
              <span className="text-accent">Lo Esencial</span>
            </h1>

            <p className="text-lg text-white/80 max-w-lg mb-10 leading-relaxed">
              Desde los miradores de Alfama hasta los pasteles de Belém. La ruta más eficiente con horarios reales y paradas estratégicas.
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: 'location_on', label: `${totalStops} paradas` },
              { icon: 'restaurant', label: '3 restaurantes' },
              { icon: 'photo_camera', label: '8 spots fotos' },
              { icon: 'map', label: 'Mapa offline' },
              { icon: 'schedule', label: '10-12 horas' },
            ].map((stat) => (
              <div key={stat.icon} className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-3.5 py-2 rounded-full border border-white/15 text-white/90 text-sm">
                <span className="material-symbols-outlined text-base">{stat.icon}</span>
                {stat.label}
              </div>
            ))}
          </div>

          {/* Price + CTA row */}
          <div className="flex flex-wrap items-center gap-4 border-t border-white/15 pt-8">
            {isFree ? (
              <>
                <a
                  href="#itinerario"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                >
                  <span className="material-symbols-outlined text-lg">lock_open</span>
                  GRATIS por tiempo limitado
                </a>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-green-400 text-base">check_circle</span>
                    Acceso completo
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-accent text-base">schedule</span>
                    Hasta {FREE_ACCESS_UNTIL}
                  </span>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/checkout/lisboa-1-dia-lo-esencial"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                >
                  <span className="material-symbols-outlined text-lg">lock_open</span>
                  Desbloquear por {PRODUCT_PRICE}€
                </Link>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-green-400 text-base">check_circle</span>
                    Acceso inmediato
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-accent text-base">workspace_premium</span>
                    Garantía 48h
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-white py-3 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Itinerarios', href: '/itinerarios' },
              { label: 'Lisboa 1 Día - Lo Esencial' },
            ]}
          />
        </div>
      </section>

      {/* ─── STICKY BAR ─── */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="font-display font-bold text-text-main">Lisboa 1 Día</span>
              <span className="text-slate-300">|</span>
              {isFree ? (
                <span className="text-green-600 font-bold">GRATIS</span>
              ) : (
                <span className="text-primary font-bold">{PRODUCT_PRICE}€</span>
              )}
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="text-text-secondary hidden sm:inline">
                {isFree ? 'Acceso completo sin costo' : 'Preview gratis abajo'}
              </span>
            </div>
            {isFree ? (
              <span className="px-5 py-2 bg-green-500 text-white rounded-xl font-semibold text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-base">lock_open</span>
                Acceso libre
              </span>
            ) : (
              <Link
                href="/checkout/lisboa-1-dia-lo-esencial"
                className="px-5 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-sm transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">lock_open</span>
                Desbloquear
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ─── QUICK SUMMARY ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-black text-text-main mb-3 tracking-tight">Resumen del itinerario</h2>
            <p className="text-text-secondary">Todo lo que necesitas saber antes de salir</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: 'schedule', title: 'Duración', value: '10-12 horas', desc: 'Ritmo tranquilo' },
              { icon: 'directions_walk', title: 'Transporte', value: 'A pie + Tranvía', desc: 'Sin complicaciones' },
              { icon: 'payments', title: 'Precio', value: isFree ? 'GRATIS' : `${PRODUCT_PRICE}€`, desc: isFree ? 'Por tiempo limitado' : 'Acceso inmediato', highlight: true },
            ].map((item) => (
              <div key={item.icon} className={`rounded-2xl p-5 text-center border ${item.highlight ? 'bg-primary/5 border-primary/20' : 'bg-background-light border-slate-100'}`}>
                <span className={`material-symbols-outlined text-2xl mb-2 inline-block ${item.highlight ? 'text-primary' : 'text-text-secondary'}`}>{item.icon}</span>
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">{item.title}</p>
                <p className={`text-lg font-display font-black ${item.highlight ? 'text-primary' : 'text-text-main'}`}>{item.value}</p>
                <p className="text-xs text-text-secondary mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE PREVIEW ─── */}
      <section className="py-20 bg-background-cream" id="itinerario">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isFree ? 'bg-green-500/10 text-green-600' : 'bg-primary/8 text-primary'}`}>
              {isFree ? 'Acceso completo gratuito' : 'Preview gratuito'}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-text-main mb-4 tracking-tight">
              Tu cronograma paso a paso
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              {isFree
                ? `Las ${totalStops} paradas completas con restaurantes, coordenadas GPS y tips de local.`
                : `Primeras ${PREVIEW_STOPS} paradas gratis. Desbloquea la guía para ver las ${totalStops - PREVIEW_STOPS} restantes con restaurantes y GPS.`
              }
            </p>
          </div>

          <TimelineContainer lineColor="primary">
            {displayStops.map((stop, idx) => (
              <TimelineStop key={idx} {...stop} index={idx} />
            ))}
            <PreviewPaywall
              productId="lisboa-1-dia-lo-esencial"
              price={PRODUCT_PRICE}
              productName="Lisboa 1 Día - Lo Esencial"
              totalStops={totalStops}
            />
          </TimelineContainer>
        </div>
      </section>

      {/* Included Features */}
      <IncludedFeatures />

      {/* Premium Content */}
      <PremiumContent
        productId="lisboa-1-dia-lo-esencial"
        price={PRODUCT_PRICE}
        productName="Lisboa 1 Día - Lo Esencial"
        coordinates={lisboa1DiaTimeline
          .filter(stop => stop.coordinates)
          .map(stop => stop.coordinates!)}
        mapTitle="Mapa Interactivo del Itinerario"
        mapDescription="Todos los restaurantes, miradores y monumentos en un solo mapa. Haz click en los marcadores para ver cada parada."
        guideTitle="Lisboa 1 Día - Lo Esencial"
      />

      {/* ─── GALLERY + TIPS ─── */}
      <section className="py-16 bg-white" id="galeria">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-block px-4 py-1.5 bg-secondary-blue/8 text-secondary-blue rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
                Vista previa
              </span>
              <h2 className="text-2xl font-display font-black text-text-main mb-3">Lo que verás en este itinerario</h2>
              <p className="text-text-secondary mb-6 text-sm">Lugares auténticos seleccionados y probados por locales.</p>
              <PhotoGallery photos={photos} />
            </div>

            <div>
              <div className="bg-background-light rounded-2xl p-6 border border-slate-100 sticky top-40">
                <div className="flex items-center gap-2 mb-5">
                  <span className="material-symbols-outlined text-primary text-lg">lightbulb</span>
                  <span className="font-bold text-text-main text-sm uppercase tracking-wider">Tips locales</span>
                </div>

                <div className="space-y-5">
                  {[
                    { icon: 'foot_bones', title: 'Zapatos cómodos', desc: 'La calçada portuguesa es resbaladiza. Nada de tacones.' },
                    { icon: 'credit_card', title: 'Viva Viagem', desc: 'Tarjeta recargable en cualquier metro. Mucho más barato.' },
                    { icon: 'tram', title: 'Tranvía 28', desc: 'Evita 11am-4pm. Mejor en la parada inicial.' },
                  ].map((tip) => (
                    <div key={tip.icon} className="flex gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-base">{tip.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-main text-sm">{tip.title}</h4>
                        <p className="text-text-secondary text-xs leading-relaxed mt-0.5">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-azulejo-pattern" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-5 tracking-tight">
            Listo para explorar Lisboa?
          </h2>
          <p className="text-lg text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Acceso inmediato por solo {PRODUCT_PRICE}€. Si no te convence, te devuelvo el dinero en 48h.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              href="/checkout/lisboa-1-dia-lo-esencial"
              className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-white text-primary rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">lock_open</span>
              Desbloquear por {PRODUCT_PRICE}€
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold border border-white/25 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Tengo dudas
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-green-400 text-base">check_circle</span>
              Descarga inmediata
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-accent text-base">workspace_premium</span>
              Garantía 48h
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-blue-300 text-base">block</span>
              Sin suscripciones
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
