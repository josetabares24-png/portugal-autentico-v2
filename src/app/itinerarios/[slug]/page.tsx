import Link from 'next/link';
import { notFound } from 'next/navigation';

const packs = {
  'lisboa-1-dia-lo-esencial': {
    title: 'Lisboa Esencial',
    subtitle: '1 dia completo',
    duration: '1 dia',
    price: '5.99',
    image: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200',
    color: 'from-sky-400 to-blue-600',
    description: 'Perfecto si tienes escala o poco tiempo. Lo mejor de Lisboa perfectamente organizado para que no pierdas ni un minuto.',
    includes: [
      'Itinerario hora a hora optimizado',
      '3 restaurantes locales con precios',
      '8 spots de fotos con horarios',
      'Mapa offline con todos los puntos',
      'Tips para evitar colas',
      'Alternativas si llueve'
    ],
    highlights: [
      { time: '09:00', place: 'Alfama', desc: 'Empieza por el barrio mas autentico antes de las multitudes' },
      { time: '11:00', place: 'Mirador Santa Luzia', desc: 'Las mejores vistas de Lisboa con cafe' },
      { time: '13:00', place: 'Almuerzo local', desc: 'Tasca escondida con menu del dia por 8 EUR' },
      { time: '15:00', place: 'Belem', desc: 'Torre, Monasterio y pasteis de nata' },
      { time: '18:00', place: 'LX Factory', desc: 'Mercado, tiendas y ambiente alternativo' },
      { time: '20:00', place: 'Cena en Bairro Alto', desc: 'Restaurante con terraza y vistas' }
    ]
  },
  'lisboa-2-dias-completo': {
    title: 'Lisboa Completa',
    subtitle: '2 dias completos',
    duration: '2 dias',
    price: '8.99',
    image: 'https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1200',
    color: 'from-amber-400 to-orange-500',
    badge: 'MAS VENDIDO',
    description: 'El pack favorito. Fin de semana perfecto con Belem, LX Factory, vida nocturna y todos los secretos que solo conocen los locales.',
    includes: [
      'Itinerario completo de 2 dias',
      '6 restaurantes + bares nocturnos',
      '15 spots de fotos con horarios',
      'Mapa offline con todos los puntos',
      'Tips de transporte y ahorro',
      'Guia de vida nocturna'
    ],
    highlights: [
      { time: 'Dia 1 AM', place: 'Centro historico', desc: 'Alfama, Graca y los mejores miradores' },
      { time: 'Dia 1 PM', place: 'Belem', desc: 'Torre, Monasterio, MAAT y pasteis' },
      { time: 'Dia 1 Noche', place: 'Bairro Alto', desc: 'Cena y bares con ambiente local' },
      { time: 'Dia 2 AM', place: 'LX Factory', desc: 'Brunch, mercado y tiendas unicas' },
      { time: 'Dia 2 PM', place: 'Principe Real', desc: 'El barrio mas trendy de Lisboa' },
      { time: 'Dia 2 Noche', place: 'Fado en Alfama', desc: 'Experiencia autentica portuguesa' }
    ]
  },
  'lisboa-3-dias-premium': {
    title: 'Lisboa + Alrededores',
    subtitle: '3 dias + Sintra',
    duration: '3 dias',
    price: '11.99',
    image: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=1200',
    color: 'from-violet-500 to-purple-700',
    description: 'La experiencia completa. Lisboa, Sintra, Cascais y Cabo da Roca. Todo lo que necesitas para una semana perfecta.',
    includes: [
      'Todo del pack 2 dias incluido',
      'Dia completo en Sintra',
      'Excursion a Cascais y Cabo da Roca',
      '10 restaurantes en total',
      '25+ spots de fotos',
      'Tips de transporte entre ciudades'
    ],
    highlights: [
      { time: 'Dias 1-2', place: 'Lisboa', desc: 'Todo el contenido del pack 2 dias' },
      { time: 'Dia 3 AM', place: 'Sintra', desc: 'Palacio da Pena y Quinta da Regaleira' },
      { time: 'Dia 3 PM', place: 'Cascais', desc: 'Pueblo costero con encanto' },
      { time: 'Dia 3 Tarde', place: 'Cabo da Roca', desc: 'El punto mas occidental de Europa' },
      { time: 'Dia 3 Noche', place: 'Cena en Cascais', desc: 'Mariscos frescos frente al mar' },
      { time: 'Bonus', place: 'Tips extra', desc: 'Playas secretas y miradores' }
    ]
  },
  'lisboa-fotografia': {
    title: 'Lisboa Fotografica',
    subtitle: 'Spots de fotos',
    duration: 'Flexible',
    price: '6.99',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
    color: 'from-pink-500 to-rose-600',
    badge: 'NUEVO',
    description: 'Los mejores spots para fotos increibles. Horarios de luz perfecta, angulos secretos y lugares sin turistas.',
    includes: [
      '15 spots fotograficos con coordenadas',
      'Mejores horarios de luz (golden hour)',
      'Angulos exactos para cada foto',
      'Cafes instagrameables incluidos',
      'Tips para evitar multitudes',
      'Configuracion de camara recomendada'
    ],
    highlights: [
      { time: '06:30', place: 'Mirador Senhora do Monte', desc: 'Amanecer sobre Lisboa' },
      { time: '08:00', place: 'Alfama vacia', desc: 'Calles sin turistas' },
      { time: '10:00', place: 'Tranvia 28', desc: 'La foto iconica' },
      { time: '16:00', place: 'LX Factory', desc: 'Arte urbano y grafitis' },
      { time: '18:30', place: 'Mirador Santa Catarina', desc: 'Golden hour perfecta' },
      { time: '20:00', place: 'Comercio iluminada', desc: 'Hora azul magica' }
    ]
  },
  'lisboa-familiar': {
    title: 'Lisboa en Familia',
    subtitle: 'Con ninos',
    duration: '2-3 dias',
    price: '7.99',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200',
    color: 'from-emerald-400 to-teal-600',
    badge: 'FAMILIAR',
    description: 'Actividades perfectas para ninos de todas las edades. Ritmo relajado, parques, playas y diversion garantizada.',
    includes: [
      'Itinerario adaptado a ninos',
      'Restaurantes family-friendly',
      'Parques y areas de juego',
      'Playas cercanas accesibles',
      'Tips de transporte con carritos',
      'Alternativas para dias de lluvia'
    ],
    highlights: [
      { time: 'Dia 1', place: 'Oceanario', desc: 'Uno de los mejores acuarios del mundo' },
      { time: 'Dia 1', place: 'Teleferico', desc: 'Vistas del Parque de las Naciones' },
      { time: 'Dia 2', place: 'Tranvia 28', desc: 'Aventura por las colinas' },
      { time: 'Dia 2', place: 'Castillo San Jorge', desc: 'Pavos reales y vistas' },
      { time: 'Dia 3', place: 'Playa de Cascais', desc: 'Dia de playa en familia' },
      { time: 'Bonus', place: 'Pasteis de Belem', desc: 'Merienda obligatoria' }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(packs).map((slug) => ({ slug }));
}

export default async function PackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pack = packs[slug as keyof typeof packs];
  
  if (!pack) {
    notFound();
  }

  // Mapear slug a productId para el checkout
  const productIdMap: Record<string, string> = {
    'lisboa-1-dia-lo-esencial': 'lisboa-1-dia-lo-esencial',
    'lisboa-2-dias-completo': 'lisboa-2-dias-completo',
    'lisboa-3-dias-premium': 'lisboa-3-dias-premium',
    'lisboa-full-week': 'lisboa-full-week',
    'lisboa-romantica': 'lisboa-romantica',
    'lisboa-familiar': 'lisboa-familiar',
    'lisboa-fotografia': 'lisboa-fotografia',
  };
  
  const productId = productIdMap[slug] || slug;

  return (
    <main>
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={pack.image} alt={pack.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Link href="/itinerarios" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver a itinerarios
          </Link>
          {('badge' in pack) && (pack as any).badge && (
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 text-white" style={{background: 'var(--color-accent)'}}>
              {(pack as any).badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{pack.title}</h1>
          <p className="text-xl text-white/80 mb-6">{pack.subtitle}</p>
          <div className="flex flex-wrap gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {pack.duration}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Descarga inmediata
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              48 horas garantia
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Que incluye este pack</h2>
              <p className="text-slate-600 mb-8">{pack.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {pack.includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>Preview del itinerario</h2>
              <div className="space-y-4">
                {pack.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-20 flex-shrink-0">
                      <span className="text-sm font-semibold" style={{color: 'var(--color-accent)'}}>{h.time}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{color: 'var(--color-primary)'}}>{h.place}</h4>
                      <p className="text-sm text-slate-600">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className={`h-3 bg-gradient-to-r ${pack.color}`}></div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>{pack.price} <span className="text-lg font-normal text-slate-500">EUR</span></div>
                    <p className="text-sm text-slate-500">Pago unico - Acceso de por vida</p>
                  </div>
                  
                  <Link 
                    href={`/checkout/${productId}`}
                    className="w-full py-4 rounded-xl font-semibold text-lg text-white mb-4 hover:scale-105 transition-transform text-center block"
                    style={{background: 'var(--color-accent)'}}
                  >
                    Comprar ahora
                  </Link>
                  
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Acceso inmediato online
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Mapas offline incluidos
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Actualizaciones gratis
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Soporte por WhatsApp
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.40A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      Garantia de 48 horas
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Si no te encanta, te devolvemos el dinero</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Tienes preguntas?</h2>
          <p className="text-slate-600 mb-6">Escribenos por WhatsApp y te ayudamos a elegir el pack perfecto para ti.</p>
          <a href="https://wa.me/351900000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
