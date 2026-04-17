import Image from 'next/image';
import Link from 'next/link';

export default function TransfersPage() {
  const servicios = [
    {
      id: 'aeropuerto-ciudad',
      title: 'Aeropuerto ↔ Ciudad',
      precio: 35,
      duracion: '30-40 min',
      descripcion: 'Traslado privado desde/hacia el Aeropuerto de Lisboa.',
      incluye: ['Conductor profesional', 'Vehículo premium', 'Seguimiento de vuelo', 'WiFi gratis'],
    },
    {
      id: 'dia-completo',
      title: 'Día Completo con Conductor',
      precio: 250,
      duracion: '8 horas',
      descripcion: 'Vehículo privado con conductor a tu disposición todo el día.',
      incluye: ['Conductor políglota', 'Gasolina incluida', 'Flexibilidad total', 'Recomendaciones locales'],
    },
    {
      id: 'sintra-cascais',
      title: 'Tour Sintra & Cascais',
      precio: 120,
      duracion: '8 horas',
      descripcion: 'Transfer privado para explorar Sintra y Cascais a tu ritmo.',
      incluye: ['Rutas escénicas', 'Paradas ilimitadas', 'Consejos de locales', 'Agua incluida'],
    },
  ];

  const ventajas = [
    { titulo: 'Seguro y confiable', desc: 'Conductores verificados y vehículos asegurados.' },
    { titulo: 'Puntualidad', desc: 'Seguimiento de vuelos y llegada a tiempo.' },
    { titulo: 'Servicio personalizado', desc: 'Atención dedicada a tus necesidades.' },
    { titulo: 'Vehículos premium', desc: 'Flota moderna y bien mantenida.' },
  ];

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/hero-lisboa.jpg"
          alt="Transfers privados Lisboa"
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
            Transfers Privados
          </h1>
          <p className="text-white/70 text-sm">Traslados cómodos y seguros por Lisboa y alrededores</p>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-background-light py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Nuestros servicios
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((s) => (
              <div key={s.id} className="border-t-2 border-border-soft pt-6">
                <h3 className="font-display italic text-text-main text-xl mb-1">{s.title}</h3>
                <p className="text-xs text-text-secondary mb-3">{s.duracion} · 1-4 pax</p>
                <p className="text-text-secondary text-xs leading-relaxed mb-4">{s.descripcion}</p>
                <ul className="space-y-1 mb-5">
                  {s.incluye.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border-soft pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-text-secondary">Desde</p>
                    <p className="text-2xl font-bold text-text-main">€{s.precio}</p>
                  </div>
                  <button
                    disabled
                    className="px-4 py-2 border border-border-soft text-text-secondary text-xs font-semibold cursor-not-allowed"
                  >
                    Próximamente
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            ¿Por qué nuestros transfers?
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {ventajas.map((v) => (
              <div key={v.titulo} className="border-t-2 border-primary pt-5">
                <h3 className="font-semibold text-text-main text-sm mb-1">{v.titulo}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display italic text-white text-3xl mb-4">Lanzamiento próximamente</p>
          <p className="text-white/60 text-sm mb-8">
            Estamos finalizando alianzas con los mejores proveedores de transporte en Lisboa.
          </p>
          <Link
            href="/itinerarios"
            className="inline-block px-8 py-3 border border-white/30 hover:border-white text-white font-semibold text-sm transition-colors"
          >
            Explorar itinerarios disponibles →
          </Link>
        </div>
      </section>
    </main>
  );
}
