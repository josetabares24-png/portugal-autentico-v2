// src/app/servicios/fotografo-personal/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Clock, MapPin, CheckCircle, Users, Award, Heart, Instagram, Star } from 'lucide-react';

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
      ideal: 'Lo más popular - equilibrio perfecto',
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
      sesiones: '',
      rating: null,
      instagram: '@ricardosantos_photo',
      imagen: '/images/eduardo-goody-0Iu7mKa1sPw-unsplash.jpg',
      idiomas: ['Portugués', 'Español', 'Inglés'],
    },
    {
      nombre: 'Ana Martins',
      especialidad: 'Lifestyle y familia',
      experiencia: '6 años',
      sesiones: '',
      rating: null,
      instagram: '@anamartins_captures',
      imagen: '/images/veronika-jorjobert-mR_AxcbVivg-unsplash.jpg',
      idiomas: ['Portugués', 'Español', 'Francés'],
    },
    {
      nombre: 'João Pereira',
      especialidad: 'Street photography y golden hour',
      experiencia: '10 años',
      sesiones: '',
      rating: null,
      instagram: '@joao_pereira_lens',
      imagen: '/images/yingcan-chen-xZ_GfV_JZlE-unsplash.jpg',
      idiomas: ['Portugués', 'Inglés'],
    },
  ];

  const locacionesPopulares = [
    'Mirador de Santa Luzia',
    'Castelo de São Jorge',
    'Calles de Alfama',
    'Torre de Belém',
    'Praça do Comércio',
    'Tranvía 28',
    'Mirador da Senhora do Monte',
    'Ribeira das Naus (paseo marítimo)',
    'LX Factory',
    'Bairro Alto',
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[600px]">
        <Image
          src="/images/fotografo-hero.jpg"
          alt="Sesión fotográfica en Lisboa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-primary-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4">
              <Camera className="h-5 w-5" />
              <span className="font-medium">Servicio Profesional</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Fotógrafo Personal<br />en Lisboa
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-3xl font-light">
              Captura tus momentos en los lugares más icónicos de Lisboa con fotógrafos profesionales locales
            </p>
            
            <div className="flex flex-wrap gap-6 text-white text-lg">
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-gold-400 fill-gold-400" />
                <span className="font-medium">Fotografía local en Lisboa</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary-400" />
                <span className="font-medium">Desde 1 hora</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="h-6 w-6 text-primary-400" />
                <span className="font-medium">Entrega en 24-48h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Contratar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              ¿Por Qué Contratar un Fotógrafo Local?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mucho más que fotos bonitas - una experiencia completa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Conocen los Mejores Spots
              </h3>
              <p className="text-gray-600">
                Miradores secretos, callejones fotogénicos y horarios perfectos que solo los locales conocen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tú Sales en las Fotos
              </h3>
              <p className="text-gray-600">
                Deja de tomar selfies y aparecer en TODAS tus fotos de viaje. Recuerdos profesionales de tu experiencia.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Calidad Profesional
              </h3>
              <p className="text-gray-600">
                Equipo profesional, edición experta y fotos dignas de imprimir o compartir con orgullo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Elige Tu Paquete Fotográfico
            </h2>
            <p className="text-xl text-gray-600">
              Todos incluyen fotógrafo profesional, edición y galería digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {paquetes.map((paquete) => (
              <div 
                key={paquete.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden relative ${
                  paquete.popular ? 'ring-4 ring-primary-600' : ''
                }`}
              >
                {paquete.popular && (
                  <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-2 text-sm font-bold rounded-bl-lg">
                    MÁS POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {paquete.nombre}
                  </h3>
                  <div className="text-4xl font-bold text-primary-600 mb-1">
                    €{paquete.precio}
                  </div>
                  <div className="text-gray-600 mb-6">{paquete.duracion}</div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Camera className="h-5 w-5 text-primary-600" />
                      <span className="font-medium">{paquete.fotos}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="h-5 w-5 text-primary-600" />
                      <span className="font-medium">{paquete.locaciones}</span>
                    </div>
                  </div>
                  
                  <div className="bg-primary-50 p-4 rounded-lg mb-6">
                    <div className="text-sm font-medium text-primary-900">
                      {paquete.ideal}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {paquete.incluye.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={`/checkout/fotografo-${paquete.id}`}
                    className="block w-full px-6 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all hover:scale-105 text-center"
                  >
                    Reservar Ahora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Fotógrafos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Conoce a Nuestros Fotógrafos
            </h2>
            <p className="text-xl text-gray-600">
              Profesionales locales apasionados por capturar la esencia de Lisboa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fotografos.map((fotografo) => (
              <div key={fotografo.nombre} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-80">
                  <Image
                    src={fotografo.imagen}
                    alt={fotografo.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {fotografo.nombre}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {fotografo.especialidad}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Sesiones personalizadas</span>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-3">
                    {fotografo.experiencia} de experiencia
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {fotografo.idiomas.map((idioma) => (
                      <span 
                        key={idioma}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {idioma}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={`https://instagram.com/${fotografo.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <Instagram className="h-5 w-5" />
                    {fotografo.instagram}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locaciones Populares */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Locaciones Más Populares
            </h2>
            <p className="text-xl text-gray-600">
              Captura los lugares más icónicos de Lisboa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {locacionesPopulares.map((locacion) => (
              <div 
                key={locacion}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-600 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{locacion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            ¿Listo Para Fotos Increíbles en Lisboa?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Reserva ahora y asegura tu sesión con fotógrafo profesional
          </p>
          <Link
            href="/servicios/fotografo-personal#paquetes"
            className="inline-block px-12 py-5 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 text-lg shadow-2xl"
          >
            Ver Paquetes y Reservar
          </Link>
        </div>
      </section>
    </main>
  );
}
