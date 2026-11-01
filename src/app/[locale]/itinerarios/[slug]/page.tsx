import { languageAlternates } from '@/lib/language-alternates';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { guidePacks, guidePackSlugs } from '@/data/guide-packs';
import { getGuidePack } from '@/lib/guide-store';
import { blogPosts } from '@/data/blog-posts';
import GrokTwoDayItinerary from '@/components/itinerarios/GrokTwoDayItinerary';

const relatedReadingSlugs = [
  'como-moverse-por-lisboa',
  'tarjeta-navegante-lisboa',
  'donde-alojarse-en-lisboa',
  'presupuesto-viajar-lisboa',
  'lisboa-en-4-dias',
];

export function generateStaticParams() {
  return guidePackSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pack = await getGuidePack(slug);
  if (!pack) return { title: 'Guía no encontrada', robots: { index: false, follow: false } };
  return {
    title: pack.title,
    description: pack.description || `Guía completa de ${pack.duration} en Lisboa.`,
    keywords: ['lisboa', 'guia lisboa', 'itinerario lisboa', pack.duration.toLowerCase()],
    authors: [{ name: 'Estaba en Lisboa' }],
    openGraph: {
      title: pack.title,
      description: pack.description || `Guía completa de ${pack.duration} en Lisboa`,
      url: `https://estabaenlisboa.com/itinerarios/${slug}`,
      images: [{ url: pack.image.startsWith('http') ? pack.image : `https://estabaenlisboa.com${pack.image}`, width: 1200, height: 630, alt: pack.title }],
    },
    alternates: { canonical: `https://estabaenlisboa.com/itinerarios/${slug}`, languages: languageAlternates(`/itinerarios/${slug}`) },
  };
}

export default async function PackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pack = await getGuidePack(slug);

  if (!pack) notFound();

  const otherPacks = guidePackSlugs.filter((s) => s !== slug).slice(0, 2);
  const relatedReading = blogPosts.filter((post) => relatedReadingSlugs.includes(post.id));

  // CreativeWork instead of Product: this is a free editorial itinerary,
  // not a good or service that's bought/sold (no price, no Offer, no
  // availability). Product implies a commercial transaction that doesn't
  // exist here; CreativeWork is the schema.org type that actually defines
  // isAccessibleForFree, without asserting a sale.
  const creativeWorkJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: pack.title,
    description: pack.description,
    image: pack.image.startsWith('http') ? pack.image : `https://estabaenlisboa.com${pack.image}`,
    author: { '@type': 'Organization', name: 'Estaba en Lisboa' },
    isAccessibleForFree: true,
    url: `https://estabaenlisboa.com/itinerarios/${slug}`,
  };

  // Diseño completo de la propuesta visual aprobada para la ruta de 2 días.
  // Se mantienen esta URL, canonical, metadata y JSON-LD propios.
  // Los demás itinerarios conservan el renderer editorial existente.
  if (slug === 'lisboa-2-dias-completo') {
    return (
      <main id="main-content" className="grok-itinerary-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }} />
        <GrokTwoDayItinerary guide={pack} />
      </main>
    );
  }

  return (
    <main id="main-content" className="grok-itinerary-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }} />

      {/* Cabecera fotográfica coherente con la referencia de Grok */}
      <section className="grok-pack-hero" aria-labelledby="grok-pack-title">
        <Image
          src={pack.image}
          alt={pack.title}
          fill
          className="grok-pack-hero-image"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="grok-pack-hero-shade" aria-hidden="true" />
        <div className="grok-pack-hero-content">
          <Link href="/itinerarios" className="grok-pack-back">Ver todos los itinerarios</Link>
          <p className="grok-pack-script">Itinerarios</p>
          <h1 id="grok-pack-title">{pack.title}</h1>
          <p className="grok-pack-summary">{pack.duration} · Rutas por zonas y consejos para preparar tu visita.</p>
        </div>
      </section>
      <div className="grok-pack-facts" aria-label="Información del itinerario">
        <div><small>Duración</small><strong>{pack.duration}</strong></div>
        <div><small>Cómo usarlo</small><strong>Plan flexible</strong></div>
        <div><small>Transporte</small><strong>Depende de las paradas</strong></div>
        <div><small>Antes de salir</small><strong>Comprueba los accesos</strong></div>
      </div>

      {/* Layout principal */}
      <section className="grok-pack-body bg-background-light py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-16 items-start">
            {/* Contenido */}
            <div>
              {/* Tres pilares */}
              <div className="grid sm:grid-cols-3 gap-8 mb-16">
                {[
                  { titulo: 'Organizado por zonas', desc: 'Paradas agrupadas para decidir cómo repartir los días.' },
                  { titulo: 'A tu ritmo', desc: 'Puedes cambiar el orden según el clima y las cuestas.' },
                  { titulo: 'Comprueba antes de ir', desc: 'Horarios y acceso pueden variar; revisa las fichas oficiales.' },
                ].map((item) => (
                  <div key={item.titulo} className="card-surface p-5 border-t-2 border-gold">
                    <h3 className="font-semibold text-text-main text-sm mb-1">{item.titulo}</h3>
                    <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Descripción */}
              <div className="mb-12">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Qué incluye</p>
                <p className="text-text-secondary leading-relaxed mb-8">{pack.description}</p>
                <div className="space-y-2">
                  {pack.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-terracotta mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview itinerario */}
              <div id="preview">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-6 pb-3 border-b border-border-soft">Preview del itinerario</p>
                <div className="space-y-0">
                  {pack.highlights.map((h, i) => (
                    <div key={i} className="border-t border-border-soft py-5 grid grid-cols-[5rem,1fr] gap-4">
                      <span className="text-sm font-semibold text-terracotta">{h.time}</span>
                      <div>
                        <p className="font-semibold text-text-main text-sm mb-1">{h.place}</p>
                        <p className="text-text-secondary text-sm">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar de acceso gratuito */}
            <div className="lg:sticky lg:top-24">
              <div className="card-surface p-6 border-l-2 border-gold">
                <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-3">Gratis</p>
                <p className="font-display italic text-text-main text-2xl mb-2">Guía gratuita</p>
                <p className="text-text-secondary text-sm mb-6">
                  Consulta la ruta completa, mapas, horarios y consejos prácticos para organizar tu viaje.
                </p>
                <Link
                  href="#preview"
                  className="btn-primary w-full text-center py-3 mb-6"
                >
                  Empezar la ruta
                </Link>
                <div className="space-y-2 text-sm text-text-secondary mb-6">
                  {['Ruta organizada', 'Mapa y puntos clave', 'Consejos locales', 'Actualizado 2026'].map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="text-terracotta">&#10003;</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sigue explorando */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8">Sigue explorando</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPacks.map((otherSlug) => (
              <Link key={otherSlug} href={`/itinerarios/${otherSlug}`} className="card-surface block p-5">
                <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-1">Itinerario</p>
                <p className="font-display italic text-text-main text-lg">{guidePacks[otherSlug]?.title}</p>
              </Link>
            ))}
            {relatedReading.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="card-surface block p-5">
                <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-1">Blog</p>
                <p className="font-display italic text-text-main text-lg">{post.titulo}</p>
              </Link>
            ))}
            <Link href="/actividades" className="card-surface block p-5">
              <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-1">Actividades</p>
              <p className="font-display italic text-text-main text-lg">Qué hacer y ver en Lisboa</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA contacto */}
      <section className="bg-background-light py-12 border-t border-border-soft">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-text-secondary text-sm mb-4">¿Tienes dudas sobre este itinerario?</p>
          <Link href="/contacto" className="text-sm text-terracotta hover:underline underline-offset-2">
            Escríbenos y te ayudamos →
          </Link>
        </div>
      </section>
    </main>
  );
}
