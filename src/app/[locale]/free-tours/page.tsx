import Image from 'next/image';
import Link from 'next/link';
import { isFreeAccessActive } from '@/lib/guide-config';

export default function FreeToursPage() {
  const isFree = isFreeAccessActive();
  const tours = [
    {
      titulo: 'Free Tour Centro Histórico',
      descripcion: 'Recorre Baixa, Chiado y Bairro Alto con un guía local. Descubre la historia de Lisboa desde el terremoto de 1755.',
      duracion: '2.5 horas',
      idiomas: 'Español, Inglés',
      salida: 'Praça do Comércio',
      horarios: '10:00, 14:00, 16:00',
      destacado: true
    },
    {
      titulo: 'Free Tour Alfama',
      descripcion: 'El barrio más antiguo de Lisboa. Laberinto de calles estrechas, fado auténtico y miradores espectaculares.',
      duracion: '2 horas',
      idiomas: 'Español',
      salida: 'Catedral de Lisboa',
      horarios: '10:30, 15:00'
    },
    {
      titulo: 'Free Tour Belém',
      descripcion: 'Monumentos Patrimonio de la Humanidad, pastéis de nata originales y la historia de los Descubrimientos.',
      duracion: '2.5 horas',
      idiomas: 'Español, Inglés',
      salida: 'Torre de Belém',
      horarios: '10:00, 14:30'
    },
    {
      titulo: 'Free Tour Nocturno',
      descripcion: 'Lisboa al anochecer: miradores al atardecer, leyendas urbanas y los mejores bares de la ciudad.',
      duracion: '2 horas',
      idiomas: 'Español',
      salida: 'Praça Luís de Camões',
      horarios: '20:00 (solo viernes y sábados)'
    }
  ];

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/jacek-urbanski-0sODcpe2RPo-unsplash.jpg"
          alt="Free tours Lisboa"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Recorridos a pie</p>
          <h1 className="font-display italic text-white text-3xl md:text-5xl leading-tight">
            Free Walking Tours
          </h1>
          <p className="text-white/70 text-sm mt-2">Guías locales en español · Sin pago por adelantado · Propina voluntaria</p>
        </div>
      </section>

      {/* Cómo funcionan */}
      <section className="bg-background-light py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Cómo funcionan los free tours
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { titulo: 'Reserva gratis', desc: 'No pagas nada por adelantado. Solo reserva tu plaza online.' },
              { titulo: 'Disfruta el tour', desc: 'Guía local experto te muestra Lisboa y responde todas tus dudas.' },
              { titulo: 'Tú decides', desc: 'Al final, das la propina que consideres justa (5-15€ típico).' },
            ].map((paso) => (
              <div key={paso.titulo} className="border-t-2 border-primary pt-5">
                <h3 className="font-semibold text-text-main text-sm mb-1">{paso.titulo}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de tours */}
      <section className="bg-background-light py-8 border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Tours disponibles
          </p>
          <div className="grid sm:grid-cols-2 gap-10">
            {tours.map((tour) => (
              <article key={tour.titulo} className={`border-t-2 pt-6 ${tour.destacado ? 'border-primary' : 'border-border-soft'}`}>
                {tour.destacado && (
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Más popular</p>
                )}
                <h3 className="font-display italic text-text-main text-xl mb-2">{tour.titulo}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{tour.descripcion}</p>
                <div className="space-y-1 mb-5">
                  <p className="text-xs text-text-secondary"><span className="font-semibold text-text-main">Duración:</span> {tour.duracion}</p>
                  <p className="text-xs text-text-secondary"><span className="font-semibold text-text-main">Idiomas:</span> {tour.idiomas}</p>
                  <p className="text-xs text-text-secondary"><span className="font-semibold text-text-main">Salida:</span> {tour.salida}</p>
                  <p className="text-xs text-text-secondary"><span className="font-semibold text-text-main">Horarios:</span> {tour.horarios}</p>
                </div>
                <a
                  href="https://www.getyourguide.es/lisboa-l42/free-tours-tc172/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline underline-offset-2"
                >
                  Reservar ahora →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b4a] py-16 mt-8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-4">¿Prefieres explorar por tu cuenta?</p>
          <p className="font-display italic text-white text-3xl mb-3">
            Combina free tours con nuestras guías de itinerarios
          </p>
          <p className="text-white/60 text-sm mb-8">
            Rutas día a día, restaurantes verificados y los secretos de Lisboa.
          </p>
          <Link
            href="/itinerarios"
            className="inline-block px-8 py-3 border border-white/30 hover:border-white text-white text-sm font-semibold transition-colors"
          >
            {isFree ? 'Ver guías gratis →' : 'Ver guías digitales →'}
          </Link>
        </div>
      </section>
    </main>
  );
}
