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
    <div className="min-h-screen bg-white">
      {/* HERO CON IMAGEN */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2000&auto=format&fit=crop"
            alt="Lisboa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/85 to-slate-800/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <span className="material-symbols-outlined text-primary">tour</span>
            <span className="text-sm font-medium text-white tracking-wide">FREE TOURS EN LISBOA</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Free Walking Tours
            <br />
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              en Lisboa
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Tours gratuitos con guías locales apasionados.
            <br />
            Descubre Lisboa de la mano de quien mejor la conoce
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white/70 text-3xl">expand_more</span>
        </div>
      </section>

      {/* CÓMO FUNCIONAN */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                ¿Cómo Funcionan los <span className="text-primary">Free Tours?</span>
              </h2>
              <p className="text-xl text-slate-600" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Sin precio fijo, tú decides cuánto vale la experiencia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
                <div key={paso.numero} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>
                      {paso.numero}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-4 block">{paso.icon}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {paso.titulo}
                  </h3>
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                    {paso.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOURS DISPONIBLES */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Tours <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Disponibles</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tours.map((tour, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-10 border-2 hover:shadow-2xl transition-all ${
                    tour.destacado 
                      ? 'border-primary shadow-xl' 
                      : 'border-slate-200'
                  }`}
                >
                  {tour.destacado && (
                    <div className="inline-block px-4 py-2 bg-primary text-white font-bold rounded-full text-sm mb-6">
                      ⭐ MÁS POPULAR
                    </div>
                  )}

                  <h3 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    {tour.titulo}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                    {tour.descripcion}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-slate-700">
                      <span className="material-symbols-outlined text-primary">schedule</span>
                      <span><strong>Duración:</strong> {tour.duracion}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <span className="material-symbols-outlined text-primary">language</span>
                      <span><strong>Idiomas:</strong> {tour.idiomas}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                      <span><strong>Salida:</strong> {tour.salida}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <span className="material-symbols-outlined text-primary">event</span>
                      <span><strong>Horarios:</strong> {tour.horarios}</span>
                    </div>
                  </div>

                  <Link
                    href="https://www.getyourguide.es/lisboa-l42/free-tours-tc172/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-lg group"
                  >
                    <span style={{ fontFamily: 'Georgia, serif' }}>Reservar ahora</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Prefieres Explorar
              <br />
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                por Tu Cuenta?
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Descubre nuestras guías digitales con itinerarios completos,
              restaurantes verificados y tips de local
            </p>

            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <span>Ver Guías Digitales</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>

            <p className="text-slate-500 text-sm mt-8">
              ✓ Desde 3.99€ · ✓ Descarga inmediata · ✓ Actualizadas 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
