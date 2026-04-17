import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Fotógrafo personal',
    description: 'Sesiones profesionales en los mejores spots de Lisboa con guía local.',
    href: '/servicios/fotografo-personal',
    image: '/images/fotografo-hero.jpg',
  },
  {
    title: 'Tours privados',
    description: 'Itinerarios 100% personalizados con ritmo y paradas a tu medida.',
    href: '/servicios/tours-privados',
    image: '/images/hero-lisboa.jpg',
  },
  {
    title: 'Transfers',
    description: 'Traslados aeropuerto-hotel y city rides sin esperas ni estrés.',
    href: '/servicios/transfers',
    image: '/images/ronan-furuta-RkmIdgnJSKk-unsplash.jpg',
  },
];

export default function ServiciosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg"
          alt="Servicios en Lisboa"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <p className="text-white/70 text-sm tracking-widest uppercase mb-3">Experiencias privadas</p>
          <h1 className="font-display italic text-white text-4xl md:text-6xl leading-tight">
            Servicios a medida
          </h1>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-background-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">Elegidos por locales</p>
            <h2 className="font-display italic text-text-main text-3xl md:text-4xl">Elige tu servicio</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="block group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-display italic text-text-main text-xl mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm mb-3">{service.description}</p>
                <span className="text-sm text-primary">Ver detalles →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
