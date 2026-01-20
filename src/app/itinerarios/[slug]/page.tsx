import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { guidePacks, guidePackSlugs } from '@/data/guide-packs';
import { getGuidePack } from '@/lib/guide-store';

const packs = guidePacks;

export function generateStaticParams() {
  return guidePackSlugs.map((slug) => ({ slug }));
}

export default async function PackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pack = await getGuidePack(slug);
  
  if (!pack) {
    notFound();
  }

  // Mapear slug a productId para el checkout
  const productIdMap: Record<string, string> = {
    'lisboa-1-dia-lo-esencial': 'lisboa-1-dia-lo-esencial',
    'lisboa-2-dias-completo': 'lisboa-2-dias-completo',
    'lisboa-3-dias-premium': 'lisboa-3-dias-premium',
    'lisboa-full-week': 'lisboa-full-week',
    'lisboa-romantica': 'lisboa-romantica',
    'lisboa-familiar': 'lisboa-familiar',
    'lisboa-fotografia': 'lisboa-fotografia',
  };
  
  const productId = productIdMap[slug] || slug;
  const socialGuideIdMap: Record<string, string> = {
    'lisboa-1-dia-lo-esencial': 'lisboa-1-dia',
    'lisboa-2-dias-completo': 'lisboa-2-dias',
    'lisboa-3-dias-premium': 'lisboa-3-dias',
  };
  const socialGuideId = socialGuideIdMap[slug] || slug;

  return (
    <main>
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src={pack.image}
            alt={pack.title}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Link href="/itinerarios" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver a itinerarios
          </Link>
          {('badge' in pack) && (pack as any).badge && (
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 text-white" style={{background: 'var(--color-accent)'}}>
              {(pack as any).badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{pack.title}</h1>
          <p className="text-xl text-white/80 mb-6">{pack.subtitle}</p>
          <div className="flex flex-wrap gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {pack.duration}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Descarga inmediata
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              48 horas garantia
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Ruta profesional</h3>
              <p className="text-sm text-slate-600">Orden lógico, tiempos reales y consejos locales para moverte sin estrés.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Contenido premium</h3>
              <p className="text-sm text-slate-600">Restaurantes verificados, spots fotográficos y planes alternativos.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Actualizado 2025</h3>
              <p className="text-sm text-slate-600">Datos vigentes, horarios revisados y recomendaciones recientes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Que incluye este pack</h2>
              <p className="text-slate-600 mb-8">{pack.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {pack.includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>Preview del itinerario</h2>
              <div className="space-y-4">
                {pack.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-20 flex-shrink-0">
                      <span className="text-sm font-semibold" style={{color: 'var(--color-accent)'}}>{h.time}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>{h.place}</h4>
                      <p className="text-sm text-slate-600">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className={`h-3 bg-gradient-to-r ${pack.color}`}></div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>{pack.price} <span className="text-lg font-normal text-slate-500">EUR</span></div>
                    <p className="text-sm text-slate-500">Pago unico - Acceso de por vida</p>
                  </div>
                  
                  <Link 
                    href={`/checkout/${productId}`}
                    className="w-full py-4 rounded-xl font-semibold text-lg text-white mb-4 hover:scale-105 transition-transform text-center block"
                    style={{background: 'var(--color-accent)'}}
                  >
                    Comprar ahora
                  </Link>
                  
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Acceso inmediato online
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Mapas offline incluidos
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Actualizaciones gratis
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Soporte por WhatsApp
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.40A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      Garantia de 48 horas
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Si no te encanta, te devolvemos el dinero</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Tienes preguntas?</h2>
          <p className="text-slate-600 mb-6">Escribenos por WhatsApp y te ayudamos a elegir el pack perfecto para ti.</p>
          <a href="https://wa.me/351900000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
