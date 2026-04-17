import Image from 'next/image';
import Link from 'next/link';

export default function ToursPrivadosPage() {
  const tours = [
    {
      id: 'lisboa-esencial',
      title: 'Lisboa Esencial Privado',
      duration: '4 horas',
      price: 150,
      maxPersonas: 6,
      descripcion: 'Tour privado por los lugares imprescindibles de Lisboa con guía local experto.',
      incluye: ['Guía certificado en español', 'Transporte privado', 'Entradas a 2 monumentos', 'Degustación de pasteles de nata'],
      image: '/images/alfama-panoramica.jpg',
    },
    {
      id: 'lisboa-gastronomica',
      title: 'Experiencia Gastronómica',
      duration: '3 horas',
      price: 120,
      maxPersonas: 8,
      descripcion: 'Tour culinario por mercados y tabernas auténticas de Lisboa.',
      incluye: ['Guía gastronómico', '6 degustaciones', 'Vino portugués', 'Recetas tradicionales'],
      image: '/images/jacek-urbanski-0sODcpe2RPo-unsplash.jpg',
    },
    {
      id: 'sintra-cascais',
      title: 'Sintra y Cascais Premium',
      duration: '8 horas',
      price: 280,
      maxPersonas: 4,
      descripcion: 'Día completo explorando palacios de Sintra y costa de Cascais.',
      incluye: ['Vehículo privado', 'Guía experto', 'Entradas a 3 palacios', 'Almuerzo incluido'],
      image: '/images/hero-lisboa.jpg',
    },
  ];

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/alfama-panoramica.jpg"
          alt="Tours Privados Lisboa"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Próximamente disponible</p>
          <h1 className="font-display italic text-white text-3xl md:text-5xl leading-tight mb-2">
            Tours Privados en Lisboa
          </h1>
          <p className="text-white/70 text-sm">Experiencias exclusivas con guías locales expertos</p>
        </div>
      </section>

      {/* Tours */}
      <section className="bg-background-light py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Nuestros tours
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <article key={tour.id} className="border-t-2 border-border-soft pt-6">
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <Image src={tour.image} alt={tour.title} fill className="object-cover" />
                </div>
                <h3 className="font-display italic text-text-main text-xl mb-2">{tour.title}</h3>
                <div className="flex items-center gap-4 mb-3 text-xs text-text-secondary">
                  <span>{tour.duration}</span>
                  <span>·</span>
                  <span>Máx. {tour.maxPersonas} personas</span>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed mb-4">{tour.descripcion}</p>
                <ul className="space-y-1 mb-5">
                  {tour.incluye.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border-soft pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-text-main">€{tour.price}</p>
                    <p className="text-xs text-text-secondary">por grupo</p>
                  </div>
                  <button
                    disabled
                    className="px-4 py-2 border border-border-soft text-text-secondary text-xs font-semibold cursor-not-allowed"
                  >
                    Próximamente
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display italic text-white text-3xl mb-4">Disponible muy pronto</p>
          <p className="text-white/60 text-sm mb-8">
            Estamos seleccionando los mejores guías locales para ofrecerte experiencias inolvidables.
          </p>
          <Link
            href="/itinerarios"
            className="inline-block px-8 py-3 border border-white/30 hover:border-white text-white font-semibold text-sm transition-colors"
          >
            Mientras tanto, explora nuestros itinerarios →
          </Link>
        </div>
      </section>
    </main>
  );
}
