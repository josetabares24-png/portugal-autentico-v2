import Image from 'next/image';
import Link from 'next/link';

export default function FreeToursPage() {
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
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg"
            alt="Lisboa panorama"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">tour</span>
            <span className="text-sm font-bold tracking-wide">FREE TOURS EN LISBOA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Free Walking<br />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Tours
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Tours gratuitos con guías locales apasionados. Descubre Lisboa de la mano de quien mejor la conoce
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* CÓMO FUNCIONAN */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                ¿Cómo Funcionan los <span className="text-primary">Free Tours?</span>
              </h2>
              <p className="text-sm md:text-xl text-slate-600" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Sin precio fijo, tú decides cuánto vale la experiencia
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 md:gap-8">
              {[
                {
                  numero: '1',
                  titulo: 'Reserva Gratis',
                  desc: 'No pagas nada por adelantado. Solo reserva tu plaza online.',
                  icon: 'event_available'
                },
                {
                  numero: '2',
                  titulo: 'Disfruta el Tour',
                  desc: 'Guía local experto te muestra Lisboa y responde todas tus dudas.',
                  icon: 'explore'
                },
                {
                  numero: '3',
                  titulo: 'Tú Decides',
                  desc: 'Al final, das la propina que consideres justa (5-15€ típico).',
                  icon: 'volunteer_activism'
                }
              ].map((paso) => (
                <div key={paso.numero} className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg border border-slate-100 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <span className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>
                      {paso.numero}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-3 md:mb-4 block">{paso.icon}</span>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {paso.titulo}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                    {paso.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOURS COMPACTOS */}
      <section className="py-12 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Tours <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Disponibles</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
              {tours.map((tour, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-xl md:rounded-2xl p-6 md:p-10 border-2 hover:shadow-2xl transition-all ${
                    tour.destacado 
                      ? 'border-primary shadow-xl' 
                      : 'border-slate-200'
                  }`}
                >
                  {tour.destacado && (
                    <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-primary text-white font-bold rounded-full text-xs md:text-sm mb-4 md:mb-6">
                      ⭐ MÁS POPULAR
                    </div>
                  )}

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    {tour.titulo}
                  </h3>

                  <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                    {tour.descripcion}
                  </p>

                  <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    <div className="flex items-center gap-2 md:gap-3 text-slate-700 text-sm md:text-base">
                      <span className="material-symbols-outlined text-primary text-base md:text-xl">schedule</span>
                      <span><strong>Duración:</strong> {tour.duracion}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-slate-700 text-sm md:text-base">
                      <span className="material-symbols-outlined text-primary text-base md:text-xl">language</span>
                      <span><strong>Idiomas:</strong> {tour.idiomas}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-slate-700 text-sm md:text-base">
                      <span className="material-symbols-outlined text-primary text-base md:text-xl">location_on</span>
                      <span><strong>Salida:</strong> {tour.salida}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-slate-700 text-sm md:text-base">
                      <span className="material-symbols-outlined text-primary text-base md:text-xl">event</span>
                      <span><strong>Horarios:</strong> {tour.horarios}</span>
                    </div>
                  </div>

                  <Link
                    href="https://www.getyourguide.es/lisboa-l42/free-tours-tc172/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-base md:text-lg group"
                  >
                    <span style={{ fontFamily: 'Georgia, serif' }}>Reservar ahora</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg md:text-xl">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA COMPACTO */}
      <section className="py-12 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=2000&auto=format&fit=crop"
            alt="Lisboa"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Prefieres Explorar
              <br />
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                por Tu Cuenta?
              </span>
            </h2>

            <p className="text-sm md:text-xl text-slate-300 mb-6 md:mb-12 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Descubre nuestras guías digitales con itinerarios completos,
              <span className="hidden md:inline"><br />restaurantes verificados y tips de local</span>
            </p>

            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold py-3 px-8 md:py-6 md:px-12 rounded-xl md:rounded-2xl text-base md:text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <span>Ver Guías Digitales</span>
              <span className="material-symbols-outlined text-lg md:text-2xl">arrow_forward</span>
            </Link>

            <p className="text-slate-500 text-xs md:text-sm mt-4 md:mt-8">
              ✓ Desde 3.99€ · ✓ Descarga inmediata · ✓ Actualizadas 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
