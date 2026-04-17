import Image from 'next/image';
import Link from 'next/link';

export default function FotografoPersonalPage() {
  const paquetes = [
    {
      id: 'basico',
      nombre: '1 Hora Express',
      precio: 89,
      duracion: '1 hora',
      fotos: '20-30 fotos editadas',
      locaciones: '1-2 locaciones cercanas',
      ideal: 'Perfecto para parejas o viajeros solos',
      incluye: [
        '1 hora de sesión fotográfica',
        '20-30 fotos profesionales editadas',
        'Entrega digital en 48 horas',
        '1-2 locaciones en el mismo barrio',
        'Recomendaciones de poses y outfits',
        'Fotos en alta resolución para imprimir',
      ],
      popular: false,
    },
    {
      id: 'estandar',
      nombre: '2 Horas Completo',
      precio: 159,
      duracion: '2 horas',
      fotos: '40-60 fotos editadas',
      locaciones: '3-4 locaciones icónicas',
      ideal: 'Lo más popular — equilibrio perfecto',
      incluye: [
        '2 horas de sesión fotográfica',
        '40-60 fotos profesionales editadas',
        'Entrega digital en 24 horas',
        '3-4 locaciones icónicas de Lisboa',
        'Itinerario fotográfico optimizado',
        'Recomendaciones completas de vestuario',
        'Fotos en alta resolución + web',
        'Galería privada online',
      ],
      popular: true,
    },
    {
      id: 'premium',
      nombre: '4 Horas Premium',
      precio: 289,
      duracion: '4 horas (medio día)',
      fotos: '80-120 fotos editadas',
      locaciones: 'Tour completo por Lisboa',
      ideal: 'Experiencia VIP con storytelling',
      incluye: [
        '4 horas de sesión fotográfica',
        '80-120 fotos profesionales editadas',
        'Entrega express en 12 horas',
        'Tour fotográfico por toda Lisboa',
        'Incluye miradores secretos',
        'Video corto con highlights (30 seg)',
        'Consultoría de estilo pre-sesión',
        'Galería online + álbum digital diseñado',
        'Fotos para Instagram ya optimizadas',
        '10 fotos con edición artística avanzada',
      ],
      popular: false,
    },
  ];

  const fotografos = [
    {
      nombre: 'Ricardo Santos',
      especialidad: 'Retratos urbanos y parejas',
      experiencia: '8 años',
      instagram: '@ricardosantos_photo',
      imagen: '/images/eduardo-goody-0Iu7mKa1sPw-unsplash.jpg',
      idiomas: ['Portugués', 'Español', 'Inglés'],
    },
    {
      nombre: 'Ana Martins',
      especialidad: 'Lifestyle y familia',
      experiencia: '6 años',
      instagram: '@anamartins_captures',
      imagen: '/images/veronika-jorjobert-mR_AxcbVivg-unsplash.jpg',
      idiomas: ['Portugués', 'Español', 'Francés'],
    },
    {
      nombre: 'João Pereira',
      especialidad: 'Street photography y golden hour',
      experiencia: '10 años',
      instagram: '@joao_pereira_lens',
      imagen: '/images/yingcan-chen-xZ_GfV_JZlE-unsplash.jpg',
      idiomas: ['Portugués', 'Inglés'],
    },
  ];

  const locaciones = [
    'Mirador de Santa Luzia', 'Castelo de São Jorge', 'Calles de Alfama',
    'Torre de Belém', 'Praça do Comércio', 'Tranvía 28',
    'Mirador da Senhora do Monte', 'Ribeira das Naus', 'LX Factory', 'Bairro Alto',
  ];

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/fotografo-hero.jpg"
          alt="Sesión fotográfica en Lisboa"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Servicio profesional</p>
          <h1 className="font-display italic text-white text-3xl md:text-5xl leading-tight mb-2">
            Fotógrafo Personal en Lisboa
          </h1>
          <p className="text-white/70 text-sm">Fotógrafos locales · Desde 1 hora · Entrega 24-48h</p>
        </div>
      </section>

      {/* Por qué */}
      <section className="bg-background-light py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            ¿Por qué contratar un fotógrafo local?
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { titulo: 'Conocen los mejores spots', desc: 'Miradores secretos, callejones fotogénicos y horarios perfectos que solo los locales conocen.' },
              { titulo: 'Tú sales en las fotos', desc: 'Deja de tomar selfies. Recuerdos profesionales de tu experiencia en Lisboa.' },
              { titulo: 'Calidad profesional', desc: 'Equipo profesional, edición experta y fotos dignas de imprimir o compartir.' },
            ].map((item) => (
              <div key={item.titulo} className="border-t-2 border-primary pt-5">
                <h3 className="font-semibold text-text-main text-sm mb-1">{item.titulo}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section className="bg-background-light py-16 border-t border-border-soft" id="paquetes">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Paquetes fotográficos
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {paquetes.map((paquete) => (
              <div key={paquete.id} className={`border-t-2 pt-6 ${paquete.popular ? 'border-primary' : 'border-border-soft'}`}>
                {paquete.popular && (
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Más popular</p>
                )}
                <h3 className="font-display italic text-text-main text-xl mb-1">{paquete.nombre}</h3>
                <p className="text-3xl font-bold text-text-main mb-1">€{paquete.precio}</p>
                <p className="text-text-secondary text-xs mb-4">{paquete.duracion}</p>
                <p className="text-xs text-text-secondary mb-4 italic">{paquete.ideal}</p>
                <ul className="space-y-2 mb-6">
                  {paquete.incluye.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contacto?servicio=fotografo-${paquete.id}`}
                  className="block w-full px-5 py-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm text-center transition-colors"
                >
                  Reservar ahora
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fotógrafos */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Nuestros fotógrafos
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {fotografos.map((f) => (
              <div key={f.nombre}>
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image src={f.imagen} alt={f.nombre} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-text-main text-sm mb-0.5">{f.nombre}</h3>
                <p className="text-primary text-xs mb-1">{f.especialidad}</p>
                <p className="text-text-secondary text-xs mb-2">{f.experiencia} de experiencia</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {f.idiomas.map((idioma) => (
                    <span key={idioma} className="text-xs text-text-secondary border border-border-soft px-2 py-0.5">
                      {idioma}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-text-secondary">{f.instagram}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locaciones */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Locaciones más populares
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
            {locaciones.map((loc) => (
              <div key={loc} className="border-t border-border-soft pt-3">
                <p className="text-text-main text-xs font-medium">{loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display italic text-white text-3xl mb-4">¿Listo para fotos increíbles en Lisboa?</p>
          <p className="text-white/60 text-sm mb-8">Reserva ahora y asegura tu sesión con fotógrafo profesional</p>
          <Link
            href="/servicios/fotografo-personal#paquetes"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-colors"
          >
            Ver paquetes y reservar
          </Link>
        </div>
      </section>
    </main>
  );
}
