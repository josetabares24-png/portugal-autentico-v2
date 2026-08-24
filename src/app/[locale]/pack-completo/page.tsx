import Link from 'next/link';

const guides = [
  {
    title: 'Lisboa en 1 Día',
    subtitle: 'Lo esencial sin perder tiempo',
    href: '/itinerarios/lisboa-1-dia-lo-esencial',
    desc: 'Una ruta compacta por Alfama, miradores, Belém y paradas clave para aprovechar un día completo.',
  },
  {
    title: 'Lisboa en 2 Días',
    subtitle: 'Fin de semana completo',
    href: '/itinerarios/lisboa-2-dias-completo',
    desc: 'Dos jornadas con centro histórico, Belém, barrios con ambiente y recomendaciones para comer bien.',
  },
  {
    title: 'Lisboa en 3 Días',
    subtitle: 'Ciudad, Sintra y costa',
    href: '/itinerarios/lisboa-3-dias-premium',
    desc: 'Un plan amplio para sumar Sintra, Cascais y Cabo da Roca con orden lógico y tiempos realistas.',
  },
  {
    // El itinerario cerrado se retiró: su sustituto es /blog/lisboa-en-7-dias.
    // Se enlaza directo, sin pasar por el redirect.
    title: 'Lisboa en 7 días',
    subtitle: 'Cómo repartir la semana',
    href: '/blog/lisboa-en-7-dias',
    desc: 'El orden que funciona, cuántas escapadas caben de verdad y qué hacer con los días que las guías cortas no cubren.',
  },
  {
    // El itinerario cerrado se retiró: su sustituto es la guía editorial
    // /blog/lisboa-en-pareja. Se enlaza directo, sin pasar por el redirect.
    title: 'Lisboa en pareja',
    subtitle: 'Miradores, paseos y planes para dos',
    href: '/blog/lisboa-en-pareja',
    desc: 'Planes que funcionan de verdad para dos, para elegir según el rato, el presupuesto y el tiempo que haga.',
  },
  {
    // El itinerario cerrado se retiró: su sustituto es /blog/lisboa-con-ninos.
    // Se enlaza directo, sin pasar por el redirect.
    title: 'Lisboa con niños',
    subtitle: 'Planes y logística en familia',
    href: '/blog/lisboa-con-ninos',
    desc: 'Actividades kid-friendly, pausas útiles, zonas cómodas y consejos para evitar estrés durante el viaje.',
  },
  {
    // El itinerario cerrado se retiró: su sustituto es
    // /blog/donde-fotografiar-lisboa. Se enlaza directo, sin pasar por el redirect.
    title: 'Dónde fotografiar Lisboa',
    subtitle: 'Lugares, luz y encuadres',
    href: '/blog/donde-fotografiar-lisboa',
    desc: 'Qué se fotografía en cada zona, hacia dónde mira y a qué hora le da la luz de frente.',
  },
];

const benefits = [
  'Rutas organizadas por tipo de viaje',
  'Mapas y puntos clave para orientarte',
  'Horarios, restaurantes y consejos locales',
  'Contenido abierto para planificar a tu ritmo',
];

export default function PackCompletoPage() {
  return (
    <main id="main-content">
      <section className="relative bg-night bg-azulejo-pattern-gold py-20 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span className="badge-pill inline-flex bg-gold text-night mb-4">
            Gratis
          </span>
          <h1 className="font-display italic text-white text-4xl md:text-6xl leading-tight mb-4">
            Todas las guías de Lisboa
          </h1>
          <p className="text-white/70 text-sm mb-10 max-w-2xl mx-auto leading-relaxed">
            Elige una ruta según tus días, tu compañía o tu forma de viajar. Todas están pensadas para ayudarte a moverte mejor, comer con criterio y disfrutar Lisboa con menos dudas.
          </p>
          <Link
            href="#guias"
            className="btn-primary inline-flex px-10 py-4"
          >
            Ver guías gratis
          </Link>
        </div>
      </section>

      <section className="bg-background-light py-20" id="guias">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-text-secondary mb-2">Guías disponibles</p>
            <h2 className="font-display italic text-text-main text-3xl md:text-4xl">
              Encuentra la ruta que encaja con tu viaje
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <article key={guide.href} className="card-surface p-6 border-t-2 border-gold flex flex-col">
                <div className="mb-5">
                  <span className="badge-pill bg-gold/80 text-night mb-4">Gratis</span>
                  <h3 className="font-display italic text-text-main text-2xl leading-tight mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">
                    {guide.subtitle}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
                <Link
                  href={guide.href}
                  className="btn-primary mt-auto w-full justify-center py-3 text-sm"
                >
                  Ver guía gratis
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light py-20 border-t border-border-soft">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Qué encontrarás
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="card-surface p-5">
                <span className="text-terracotta block mb-3">&#10003;</span>
                <p className="text-text-secondary text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-night bg-azulejo-pattern-gold py-20 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="font-display italic text-white text-4xl mb-4">
            Planifica Lisboa con una ruta clara
          </p>
          <p className="text-white/60 text-sm mb-8">
            Empieza por la guía que mejor encaje con tus días y vuelve a esta página cuando quieras comparar opciones.
          </p>
          <Link
            href="/itinerarios"
            className="btn-primary inline-flex px-10 py-4"
          >
            Ver itinerarios
          </Link>
        </div>
      </section>
    </main>
  );
}
