import Link from 'next/link';

export const metadata = {
  title: 'Lisboa Fotografica - Los Mejores Spots de Fotos | Portugal Autentico',
  description: '15 spots fotograficos con coordenadas exactas, mejores horarios de luz y angulos secretos sin turistas.',
};

export default function LisboaFotografiaPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920)'}}></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/itinerarios" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver a itinerarios
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-pink-500 text-white">FOTOGRAFIA</span>
            <span className="text-white/60 text-sm">1-2 dias</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Lisboa Fotografica</h1>
          <p className="text-xl text-white/80 mb-8">Los mejores spots para fotos increibles. Horarios de luz perfecta, angulos secretos y lugares sin turistas que los locales no comparten.</p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">15 spots</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">Golden hour tips</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">Coordenadas GPS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">Cafes aesthetic</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-3xl font-bold text-slate-900">6.99 EUR</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="/preview" className="px-6 py-3 border-2 border-slate-200 rounded-xl font-semibold hover:border-slate-300">
                Ver preview
              </Link>
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Todo lo que incluye</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '15 spots fotograficos con coordenadas exactas',
              'Mejor hora para cada ubicacion',
              'Angulos secretos sin turistas',
              'Horarios de golden hour actualizados',
              '6 miradores con mejores vistas',
              '4 cafes instagrameables',
              'Tips para evitar multitudes',
              'Rutas optimizadas por zona',
              'Mapas offline con pins',
              'Settings de camara recomendados',
              'Spots nocturnos iluminados',
              'Actualizaciones de temporada'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <svg className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Manana: Golden Hour (7:00-10:00)</h2>
              <p className="text-slate-500">La mejor luz del dia, sin turistas</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">07:00</span>
                <h3 className="font-bold text-slate-900">Miradouro da Senhora do Monte</h3>
                <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">TOP SPOT</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">El mirador mas alto de Lisboa. Luz dorada sobre toda la ciudad, sin nadie. El secreto mejor guardado.</p>
              <p className="text-pink-600 text-xs font-medium">Mejor luz: 7:00-8:30 | Orientacion: Este | Sin turistas hasta las 10:00</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">08:00</span>
                <h3 className="font-bold text-slate-900">Alfama - Callejuelas</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Luz entrando por las calles estrechas. Busca la ropa tendida, las puertas coloridas, los gatos. Cada esquina es una foto.</p>
              <p className="text-pink-600 text-xs font-medium">Calles recomendadas: Beco do Azinhal, Rua de Sao Miguel | Luz lateral perfecta 8:00-9:30</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">09:00</span>
                <h3 className="font-bold text-slate-900">Miradouro de Santa Luzia</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Azulejos + buganvillas + vistas al rio. El mirador mas fotografiado, pero a las 9:00 esta vacio.</p>
              <p className="text-pink-600 text-xs font-medium">Angulo secreto: Desde el banco de la izquierda capturas azulejos + vista | Antes de las 10:00</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">10:00</span>
                <h3 className="font-bold text-slate-900">Cafe: Copenhagen Coffee Lab</h3>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">CAFE</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">Interior minimalista nordico, luz natural perfecta. El flat white mas fotogenico de Lisboa.</p>
              <p className="text-pink-600 text-xs font-medium">Mesa junto a ventana | Pide el matcha latte para color</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Mediodia: Arquitectura (11:00-15:00)</h2>
              <p className="text-slate-500">Luz dura, perfecta para contrastes y sombras</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">11:00</span>
                <h3 className="font-bold text-slate-900">Arco da Rua Augusta</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Sube arriba (5 EUR). Vista geometrica perfecta de la Praca do Comercio. Sombras dramaticas al mediodia.</p>
              <p className="text-pink-600 text-xs font-medium">Mejor hora: 11:00-13:00 para sombras simetricas | Evita fines de semana</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">12:00</span>
                <h3 className="font-bold text-slate-900">Elevador de Santa Justa</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">No subas (caro y cola). Fotografialo desde abajo en Rua de Santa Justa. Estructura de hierro contra cielo azul.</p>
              <p className="text-pink-600 text-xs font-medium">Angulo: Desde la esquina de Rua do Ouro | Sol directo resalta el hierro</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">13:00</span>
                <h3 className="font-bold text-slate-900">LX Factory</h3>
                <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">TOP SPOT</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">Fabrica industrial convertida en espacio creativo. Murales, grafitis, libreria Ler Devagar. Cada rincon es Instagram.</p>
              <p className="text-pink-600 text-xs font-medium">Spots: Escalera de libros, pared de azulejos rotos, terraza con puente | Entre semana menos gente</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">14:30</span>
                <h3 className="font-bold text-slate-900">Cafe: Fabrica Coffee Roasters</h3>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">CAFE</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">Estilo industrial, ladrillo visto, maquinas de cafe enormes. El brunch mas bonito de Lisboa.</p>
              <p className="text-pink-600 text-xs font-medium">Pide los pancakes con fruta para color | Luz natural desde claraboya</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Atardecer: Magic Hour (17:00-20:00)</h2>
              <p className="text-slate-500">Luz dorada, cielos dramaticos</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">17:00</span>
                <h3 className="font-bold text-slate-900">Tranvia 28 en Graca</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">El tranvia amarillo subiendo las cuestas con luz dorada. Esperalo en Largo da Graca para capturarlo con la ciudad detras.</p>
              <p className="text-pink-600 text-xs font-medium">Pasa cada 10-15 min | Mejor con teleobjetivo desde la acera opuesta</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">18:00</span>
                <h3 className="font-bold text-slate-900">Miradouro da Graca</h3>
                <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">TOP SPOT</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">EL spot para atardecer. Sol cayendo detras del castillo, ciudad en tonos naranjas. Llega 1 hora antes para buen sitio.</p>
              <p className="text-pink-600 text-xs font-medium">Esquina izquierda para encuadre con pino | Hora exacta de sunset en el pack</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">19:30</span>
                <h3 className="font-bold text-slate-900">Puente 25 de Abril desde LX</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">El puente rojo tipo Golden Gate con el Cristo Rei detras. Desde la terraza de LX Factory o el muelle de Santos.</p>
              <p className="text-pink-600 text-xs font-medium">Blue hour (20 min despues del sunset) para luces del puente encendidas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-500 to-rose-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tu feed de Instagram te lo agradecera</h2>
          <p className="text-xl text-pink-100 mb-8">15 spots con coordenadas exactas, horarios de luz y angulos que nadie conoce.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-pink-600 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
              Comprar por 6.99 EUR
            </button>
          </div>
          <p className="mt-6 text-pink-200 text-sm">Descarga inmediata - Garantia 14 dias - Coordenadas GPS incluidas</p>
        </div>
      </section>
    </main>
  );
}
