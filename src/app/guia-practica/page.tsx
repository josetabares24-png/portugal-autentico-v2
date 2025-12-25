// src/app/guia-practica/page.tsx
import { Shield, AlertTriangle, Smartphone, Wallet, Map, Heart, Zap, Info } from 'lucide-react';

export default function GuiaPracticaPage() {
  const zonasSeguras = [
    {
      zona: 'Baixa y Chiado',
      nivel: 'Muy Seguro',
      descripcion: 'Zonas turísticas con alta presencia policial. Cuidado con carteristas en lugares concurridos.',
      color: 'green',
    },
    {
      zona: 'Alfama',
      nivel: 'Seguro',
      descripcion: 'Barrio residencial tranquilo. Las calles estrechas pueden estar vacías de noche - camina por rutas principales.',
      color: 'green',
    },
    {
      zona: 'Bairro Alto (día)',
      nivel: 'Seguro',
      descripcion: 'Durante el día es muy seguro. Muchas tiendas y cafés.',
      color: 'green',
    },
    {
      zona: 'Bairro Alto (noche)',
      nivel: 'Precaución',
      descripcion: 'Vida nocturna intensa. Guarda tus pertenencias, evita calles muy vacías después de las 3 AM.',
      color: 'yellow',
    },
    {
      zona: 'Belém',
      nivel: 'Muy Seguro',
      descripcion: 'Zona abierta y turística. Prácticamente sin problemas.',
      color: 'green',
    },
  ];

  const zonasEvitar = [
    {
      zona: 'Martim Moniz (noche)',
      razon: 'Vendedores ambulantes agresivos y algunas bandas de carteristas operan aquí.',
      consejo: 'Evita después de las 22:00. Si debes pasar, no saques el móvil.',
    },
    {
      zona: 'Callejones oscuros de Mouraria',
      razon: 'Algunos callejones muy estrechos pueden ser problemáticos de noche.',
      consejo: 'Quédate en calles principales. Usa Uber en vez de caminar de noche.',
    },
    {
      zona: 'Alrededores de Intendente',
      razon: 'Barrio en gentrificación pero aún con problemas de drogas en algunas esquinas.',
      consejo: 'Evita de noche. De día es OK si te mantienes en avenidas principales.',
    },
    {
      zona: 'Cais do Sodré muy tarde',
      razon: 'Zona de clubes que puede tener borrachos problemáticos a las 4-5 AM.',
      consejo: 'Usa taxi/uber para volver al hotel si sales de fiesta aquí.',
    },
  ];

  const appsEsenciales = [
    {
      nombre: 'Citymapper',
      categoria: 'Transporte',
      descripcion: 'La MEJOR app para transporte público en Lisboa. Rutas, horarios, tranvías, metro, autobuses.',
      precio: 'Gratis',
      imprescindible: true,
      link: 'https://citymapper.com',
    },
    {
      nombre: 'Viva Navegante',
      categoria: 'Transporte',
      descripcion: 'App oficial para recargar tarjeta de transporte público.',
      precio: 'Gratis',
      imprescindible: true,
      link: 'https://www.metrolisboa.pt',
    },
    {
      nombre: 'Bolt',
      categoria: 'Transporte',
      descripcion: 'Más barato que Uber en Lisboa. Mismo servicio, mejor precio.',
      precio: 'Gratis (pagas viajes)',
      imprescindible: true,
      link: 'https://bolt.eu',
    },
    {
      nombre: 'The Fork',
      categoria: 'Restaurantes',
      descripcion: 'Reservas de restaurantes con descuentos 20-50%. Funciona perfecto en Lisboa.',
      precio: 'Gratis',
      imprescindible: true,
      link: 'https://www.thefork.com',
    },
    {
      nombre: 'Too Good To Go',
      categoria: 'Comida',
      descripcion: 'Compra comida sobrante de restaurantes a precio reducido. Sostenible y económico.',
      precio: 'Gratis (pagas comida)',
      imprescindible: false,
      link: 'https://toogoodtogo.com',
    },
    {
      nombre: 'Google Maps (offline)',
      categoria: 'Navegación',
      descripcion: 'Descarga el mapa de Lisboa offline. WiFi en Lisboa es irregular.',
      precio: 'Gratis',
      imprescindible: true,
      link: 'https://maps.google.com',
    },
    {
      nombre: 'XE Currency',
      categoria: 'Finanzas',
      descripcion: 'Conversor de moneda. Funciona offline.',
      precio: 'Gratis',
      imprescindible: false,
      link: 'https://www.xe.com',
    },
    {
      nombre: 'Revolut / Wise',
      categoria: 'Finanzas',
      descripcion: 'Mejor tipo de cambio que tu banco. Sin comisiones en ATMs.',
      precio: 'Gratis (versión básica)',
      imprescindible: true,
      link: 'https://www.revolut.com',
    },
  ];

  const tipsSeguridad = [
    'Lisboa es muy segura comparada con otras capitales europeas, pero carteristas operan en zonas turísticas.',
    'NUNCA dejes el móvil en la mesa de terrazas exteriores - es el robo #1.',
    'En tranvía 28: mochila ADELANTE, cartera en bolsillo delantero o riñonera.',
    'Si alguien te "ayuda" a limpiar algo que "te cayó", es una distracción - revisa tus bolsillos.',
    'ATMs: usa los de bancos dentro de sucursales, no los de calle con aspecto raro.',
    'Taxis del aeropuerto: usa cola oficial o Bolt/Uber. Precio fijo aeropuerto-centro: ~€20-25.',
    'Pide SIEMPRE factura detallada en restaurantes turísticos - algunos cobran "extras" no pedidos.',
    'Guarda copia digital de pasaporte y tarjetas en email/nube.',
    'Número emergencias en Portugal: 112 (policía, ambulancia, bomberos).',
  ];

  const tipsAhorro = [
    'Primer domingo de mes: museos nacionales GRATIS (Torre Belém, Monasterio Jerónimos, etc).',
    'Tarjeta transporte 24h (€6.40) vs viajes individuales (€1.50 c/u) - ahorra desde 5 viajes.',
    'Almuerza "prato do dia" en tascas (€7-10) vs menú turístico (€15-25).',
    'Vino en supermercado Pingo Doce: €3-6 por botella excelente vs €15-20 en restaurante.',
    'Agua del grifo es potable y gratis vs €2-3 por botella en restaurantes.',
    'Pasteles de nata: €1.20 en pastelería local vs €3 en zona turística.',
    'TheFork app: descuentos 20-50% en buenos restaurantes.',
    'Picnic en mirador con productos de mercado > restaurante caro con mismas vistas.',
  ];

  const numerosClave = [
    { servicio: 'Emergencias (policía, ambulancia)', numero: '112' },
    { servicio: 'Policía Turística', numero: '+351 21 342 1623' },
    { servicio: 'Taxi Radio Táxis', numero: '+351 21 811 9000' },
    { servicio: 'Información Turística', numero: '+351 21 031 2810' },
    { servicio: 'Aeropuerto Lisboa', numero: '+351 21 841 3500' },
    { servicio: 'Metro Lisboa', numero: '+351 21 350 0115' },
  ];

  return (
    <main className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Guía Práctica de Lisboa
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Todo lo que necesitas saber sobre seguridad, apps útiles, cómo moverte y ahorrar dinero en Lisboa
          </p>
        </div>

        {/* Seguridad */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Seguridad en Lisboa
            </h2>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-green-900 mb-2">Lisboa es MUY segura</h3>
                <p className="text-green-800">
                  Lisboa es una de las capitales más seguras de Europa. Criminalidad violenta es extremadamente rara. 
                  El principal problema son carteristas en zonas turísticas. Usa sentido común y estarás perfectamente.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Zonas Seguras</h3>
              <div className="space-y-3">
                {zonasSeguras.map((zona) => (
                  <div 
                    key={zona.zona}
                    className={`p-4 rounded-lg border-2 ${
                      zona.color === 'green' 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-yellow-200 bg-yellow-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{zona.zona}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        zona.color === 'green'
                          ? 'bg-green-600 text-white'
                          : 'bg-yellow-600 text-white'
                      }`}>
                        {zona.nivel}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{zona.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                Zonas con Precaución
              </h3>
              <div className="space-y-4">
                {zonasEvitar.map((zona) => (
                  <div 
                    key={zona.zona}
                    className="p-4 rounded-lg border-2 border-orange-200 bg-orange-50"
                  >
                    <h4 className="font-bold text-orange-900 mb-2">{zona.zona}</h4>
                    <p className="text-sm text-orange-800 mb-2">
                      <strong>Por qué:</strong> {zona.razon}
                    </p>
                    <p className="text-sm text-orange-900">
                      <strong>Consejo:</strong> {zona.consejo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tips de Seguridad Esenciales</h3>
            <ul className="space-y-2">
              {tipsSeguridad.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Apps Esenciales */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Smartphone className="h-8 w-8 text-primary-600" />
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Apps Imprescindibles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appsEsenciales.map((app) => (
              <div 
                key={app.nombre}
                className={`p-6 rounded-xl border-2 ${
                  app.imprescindible 
                    ? 'border-primary-600 bg-primary-50' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {app.imprescindible && (
                  <div className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-3">
                    IMPRESCINDIBLE
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{app.nombre}</h3>
                <div className="text-sm text-primary-600 font-medium mb-3">{app.categoria}</div>
                <p className="text-gray-700 mb-4">{app.descripcion}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">{app.precio}</span>
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Descargar →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips de Ahorro */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Wallet className="h-8 w-8 text-gold-600" />
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Tips Para Ahorrar Dinero
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {tipsAhorro.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gold-50 rounded-lg">
                  <Zap className="h-5 w-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Números de Emergencia */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Heart className="h-8 w-8 text-red-600" />
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Números Importantes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {numerosClave.map((item) => (
              <div 
                key={item.servicio}
                className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-600 transition-colors"
              >
                <div className="text-sm text-gray-600 mb-1">{item.servicio}</div>
                <div className="text-xl font-bold text-primary-600">{item.numero}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
