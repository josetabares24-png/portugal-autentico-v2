import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Fotógrafo personal',
    description: 'Sesiones profesionales en los mejores spots de Lisboa con guía local.',
    href: '/servicios/fotografo-personal',
    image: '/images/fotografo-hero.jpg',
    badge: 'Premium',
  },
  {
    title: 'Tours privados',
    description: 'Itinerarios 100% personalizados con ritmo y paradas a tu medida.',
    href: '/servicios/tours-privados',
    image: '/images/hero-lisboa.jpg',
    badge: 'Exclusivo',
  },
  {
    title: 'Transfers',
    description: 'Traslados aeropuerto-hotel y city rides sin esperas ni estrés.',
    href: '/servicios/transfers',
    image: '/images/ronan-furuta-RkmIdgnJSKk-unsplash.jpg',
    badge: 'Cómodo',
  },
];

export default function ServiciosPage() {
  return (
    <main className="bg-background-light">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg"
            alt="Servicios en Lisboa"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">workspace_premium</span>
            <span className="text-sm font-semibold tracking-wide">Servicios premium</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            Servicios
            <br />
            <span className="text-accent">a medida</span>
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Experiencias privadas, logística sin fricción y sesiones únicas en Lisboa.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Elegidos por locales
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Elige tu servicio
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Todos con soporte local, horarios claros y atención personalizada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-primary hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-52">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {service.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold">
                    Ver detalles
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
