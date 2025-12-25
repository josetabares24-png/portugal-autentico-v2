// src/app/itinerarios/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { 
  Clock, MapPin, Star, Users, CheckCircle, Calendar,
  Download, Shield, Zap, Award, ChevronRight, Heart
} from 'lucide-react';
import { formatPrice, formatDuration } from '@/lib/utils';
import { lisboaItinerary, lisboaDays } from '@/data/itineraries/lisboa-3-dias';
import { notFound } from 'next/navigation';

// Esta función generará las rutas estáticas en build time
export function generateStaticParams() {
  return [
    { slug: 'lisboa-3-dias-experiencia-autentica' },
  ];
}

export default function ItineraryDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  // Por ahora solo tenemos Lisboa, pero esto se expandirá
  if (params.slug !== lisboaItinerary.slug) {
    notFound();
  }

  const itinerary = lisboaItinerary;
  const days = lisboaDays;

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section con Galería */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={itinerary.coverImage}
          alt={itinerary.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-primary-300 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">{itinerary.destination}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              {itinerary.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl font-light">
              {itinerary.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary-400" />
                <span className="font-medium">{formatDuration(itinerary.duration)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-gold-400 fill-gold-400" />
                <span className="font-medium">4.9/5</span>
                <span className="text-gray-300">(234 reseñas)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-400" />
                <span className="font-medium">1,247 viajeros</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de Precio Sticky */}
      <div className="sticky top-16 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  {formatPrice(itinerary.price)}
                </div>
                <div className="text-sm text-gray-600">Pago único · Acceso de por vida</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="h-6 w-6 text-gray-600" />
              </button>
              <Link
                href={`/checkout/${itinerary.id}`}
                className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
              >
                Comprar Ahora
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-12">
            {/* Descripción */}
            <section>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Sobre Este Itinerario
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                {itinerary.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Experiencias Incluidas
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {itinerary.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                  >
                    <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerario Día por Día */}
            <section>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Itinerario Detallado
              </h2>
              
              <div className="space-y-6">
                {days.map((day, index) => (
                  <div 
                    key={day.id}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-primary-600 to-ocean-600 p-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">
                          {day.dayNumber}
                        </div>
                        <div>
                          <div className="text-sm text-primary-100">Día {day.dayNumber}</div>
                          <h3 className="text-2xl font-bold">{day.title}</h3>
                        </div>
                      </div>
                      <p className="text-primary-100 mt-3">{day.summary}</p>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      {/* Actividades del Día */}
                      {day.activities.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary-600" />
                            Actividades Principales ({day.activities.length})
                          </h4>
                          <div className="space-y-3">
                            {day.activities.slice(0, 3).map((activity, actIndex) => (
                              <div 
                                key={activity.id}
                                className="flex items-start gap-3 text-sm"
                              >
                                <div className="text-primary-600 font-semibold min-w-[60px]">
                                  {activity.time}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-gray-900">{activity.title}</div>
                                  <div className="text-gray-600 mt-1 line-clamp-2">
                                    {activity.description.substring(0, 150)}...
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Comidas del Día */}
                      {day.meals.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm">
                            🍽️ Comidas Incluidas: {day.meals.length}
                          </h4>
                          <div className="flex gap-2 flex-wrap">
                            {day.meals.map((meal) => (
                              <span 
                                key={meal.restaurantName}
                                className="px-3 py-1 bg-gold-100 text-gold-800 text-xs font-medium rounded-full"
                              >
                                {meal.restaurantName}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Tips del Día */}
                      {day.tips.length > 0 && (
                        <div className="bg-ocean-50 p-4 rounded-lg">
                          <h4 className="font-bold text-ocean-900 mb-2 text-sm">
                            💡 Tips Especiales
                          </h4>
                          <ul className="text-sm text-ocean-800 space-y-1">
                            {day.tips.slice(0, 2).map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-start gap-2">
                                <span className="text-ocean-600 mt-1">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Lo Que Incluye */}
            <section>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Lo Que Recibes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Incluido
                  </h3>
                  <ul className="space-y-3">
                    {itinerary.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-gray-400">○</span>
                    No Incluido
                  </h3>
                  <ul className="space-y-3">
                    {itinerary.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <span className="text-gray-400 mt-0.5">○</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Card de Compra */}
              <div className="bg-white border-2 border-primary-600 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {formatPrice(itinerary.price)}
                  </div>
                  <div className="text-sm text-gray-600">
                    Pago único · Sin suscripciones
                  </div>
                </div>
                
                <Link
                  href={`/checkout/${itinerary.id}`}
                  className="block w-full px-6 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all hover:scale-105 text-center shadow-lg mb-4"
                >
                  Comprar Ahora
                </Link>
                
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary-600" />
                    <span>Entrega instantánea por email</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-primary-600" />
                    <span>PDF descargable + mapas offline</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary-600" />
                    <span>Garantía 100% satisfacción</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary-600" />
                    <span>Actualizaciones gratuitas 12 meses</span>
                  </div>
                </div>
              </div>

              {/* Información Adicional */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Detalles</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Duración:</dt>
                    <dd className="font-medium text-gray-900">{formatDuration(itinerary.duration)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Dificultad:</dt>
                    <dd className="font-medium text-gray-900 capitalize">{itinerary.difficulty}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Idiomas:</dt>
                    <dd className="font-medium text-gray-900">{itinerary.languages.join(', ')}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Mejor época:</dt>
                    <dd className="font-medium text-gray-900 text-right">{itinerary.bestSeasons[0]}</dd>
                  </div>
                </dl>
              </div>

              {/* Garantía */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-900 mb-2">
                      Garantía de Satisfacción
                    </h3>
                    <p className="text-sm text-green-800">
                      Si no estás 100% satisfecho con tu itinerario en los primeros 7 días, 
                      te devolvemos tu dinero sin preguntas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            ¿Listo Para Descubrir la Lisboa Auténtica?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Únete a 1,247 viajeros que ya vivieron esta experiencia inolvidable
          </p>
          <Link
            href={`/checkout/${itinerary.id}`}
            className="inline-block px-12 py-5 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 text-lg shadow-2xl"
          >
            Comprar Itinerario - {formatPrice(itinerary.price)}
          </Link>
        </div>
      </section>
    </main>
  );
}
