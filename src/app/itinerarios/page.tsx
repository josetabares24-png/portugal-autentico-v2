// src/app/itinerarios/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Star, TrendingUp, CheckCircle, Euro } from 'lucide-react';
import { formatPrice, formatDuration } from '@/lib/utils';

// Importar todos los itinerarios
import { lisboaItinerary } from '@/data/itineraries/lisboa-3-dias';
import { lisboa2DiasItinerary } from '@/data/itineraries/lisboa-2-dias';
import { lisboa1DiaItinerary } from '@/data/itineraries/lisboa-1-dia';

export default function ItinerariosPage() {
  const itinerarios = [
    lisboaItinerary,
    lisboa2DiasItinerary,
    lisboa1DiaItinerary,
  ];

  // Ordenar por duración (descendente)
  const itinerariosOrdenados = [...itinerarios].sort((a, b) => b.duration - a.duration);

  return (
    <main className="min-h-screen pt-20 pb-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Itinerarios Premium de Lisboa
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Experiencias auténticas diseñadas por expertos locales. Elige la duración perfecta para tu viaje.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary-200" />
                <span className="font-medium">Guías digitales premium</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary-200" />
                <span className="font-medium">Mapas interactivos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary-200" />
                <span className="font-medium">Soporte durante viaje</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros / Comparación Rápida */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              ¿Cuánto tiempo tienes en Lisboa?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-600 transition-colors cursor-pointer">
                <div className="text-3xl font-bold text-primary-600 mb-1">1 Día</div>
                <div className="text-sm text-gray-600 mb-2">Perfecto para escala o fin de semana corto</div>
                <div className="text-sm font-medium text-gray-900">€27 · Lo esencial</div>
              </div>
              
              <div className="p-4 border-2 border-primary-600 bg-primary-50 rounded-lg relative">
                <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                  MÁS POPULAR
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-1">2 Días</div>
                <div className="text-sm text-gray-600 mb-2">Balance ideal intensidad/profundidad</div>
                <div className="text-sm font-medium text-gray-900">€37 · Experiencia completa</div>
              </div>
              
              <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-600 transition-colors cursor-pointer">
                <div className="text-3xl font-bold text-primary-600 mb-1">3 Días</div>
                <div className="text-sm text-gray-600 mb-2">Inmersión total en Lisboa auténtica</div>
                <div className="text-sm font-medium text-gray-900">€47 · Premium</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Itinerarios */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {itinerariosOrdenados.map((itinerario, index) => (
              <div 
                key={itinerario.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
                  itinerario.duration === 2 ? 'ring-2 ring-primary-600' : ''
                }`}
              
                {itinerario.duration === 2 && (
                  <div className="bg-primary-600 text-white text-center py-2 font-bold text-sm">
                    ⭐ MÁS VENDIDO - El favorito de nuestros viajeros
                  </div>
                )}
                
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Imagen */}
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <Image
                      src={itinerario.coverImage}
                      alt={itinerario.title}
                      fill
                      className="object-cover"
                    />
                    {itinerario.featured && (
                      <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="h-4 w-4 fill-white" />
                        Destacado
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="md:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                          {itinerario.title}
                        </h2>
                        <p className="text-lg text-gray-600">
                          {itinerario.subtitle}
                        </p>
                      </div>
                      
                      <div className="text-right flex-shrink-0 ml-4">
                        <div className="text-4xl font-bold text-primary-600">
                          {formatPrice(itinerario.price)}
                        </div>
                        <div className="text-sm text-gray-600">Pago único</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="h-5 w-5 text-primary-600" />
                        <span className="font-medium">{formatDuration(itinerario.duration)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="h-5 w-5 text-primary-600" />
                        <span className="font-medium">{itinerario.destination}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Star className="h-5 w-5 text-gold-400 fill-gold-400" />
                        <span className="font-medium">4.9/5</span>
                        <span className="text-gray-500">(250+ reseñas)</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 line-clamp-3">
                      {itinerario.description.substring(0, 250)}...
                    </p>

                    {/* Highlights principales */}
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-900 mb-3">Lo más destacado:</h3>
                      <ul className="grid grid-cols-1 gap-2">
                        {itinerario.highlights.slice(0, 4).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {itinerario.tags.slice(0, 5).map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3">
                      <Link
                        href={`/itinerarios/${itinerario.slug}`}
                        className="flex-1 px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all hover:scale-105 text-center shadow-lg"
                      >
                        Ver Itinerario Completo
                      </Link>
                      <Link
                        href={`/checkout/${itinerario.id}`}
                        className="px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-colors text-center"
                      >
                        Comprar Ahora
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparación */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Compara los Itinerarios
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">1 Día Express</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 bg-primary-50">2 Días Completo</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">3 Días Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Precio</td>
                    <td className="px-6 py-4 text-center">€27</td>
                    <td className="px-6 py-4 text-center bg-primary-50">€37</td>
                    <td className="px-6 py-4 text-center">€47</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Actividades incluidas</td>
                    <td className="px-6 py-4 text-center">12+</td>
                    <td className="px-6 py-4 text-center bg-primary-50">20+</td>
                    <td className="px-6 py-4 text-center">30+</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Restaurantes recomendados</td>
                    <td className="px-6 py-4 text-center">6</td>
                    <td className="px-6 py-4 text-center bg-primary-50">9</td>
                    <td className="px-6 py-4 text-center">12</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Taller de azulejos</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center bg-primary-50">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Experiencia de fado</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center bg-primary-50">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Ideal para</td>
                    <td className="px-6 py-4 text-center text-sm">Escala / Fin de semana</td>
                    <td className="px-6 py-4 text-center text-sm bg-primary-50">Primera visita a Lisboa</td>
                    <td className="px-6 py-4 text-center text-sm">Inmersión profunda</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: '¿Qué incluye el precio del itinerario?',
                a: 'Guía digital premium en PDF, mapas interactivos georeferenciados, lista de contactos verificados, frases en portugués, tips de fotografía, soporte por email durante tu viaje y actualizaciones gratuitas por 12 meses. NO incluye entradas a monumentos, comidas ni transporte.',
              },
              {
                q: '¿Cuándo recibo mi itinerario?',
                a: 'Inmediatamente después del pago. Recibes un email con enlace de descarga del PDF y acceso a los mapas interactivos. Todo digital, sin esperas.',
              },
              {
                q: '¿Puedo personalizar el itinerario?',
                a: 'Sí. Durante el checkout puedes indicar restricciones dietéticas, intereses específicos, presupuesto y estilo de viaje. Generamos recomendaciones personalizadas adicionales.',
              },
              {
                q: '¿Funciona offline?',
                a: 'El PDF funciona 100% offline. Los mapas interactivos puedes descargarlos en Google Maps para uso offline. Todas las direcciones incluyen coordenadas GPS.',
              },
              {
                q: '¿Hay garantía de devolución?',
                a: 'Sí. Si no estás satisfecho en los primeros 7 días, te devolvemos tu dinero sin preguntas. Queremos que tengas la mejor experiencia en Lisboa.',
              },
            ].map((faq, index) => (
              <details 
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
              >
                <summary className="font-bold text-gray-900 text-lg">
                  {faq.q}
                </summary>
                <p className="mt-3 text-gray-700">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            ¿Listo Para Descubrir Lisboa Auténtica?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Únete a más de 1,500 viajeros que transformaron su visita a Lisboa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/itinerarios/lisboa-2-dias-experiencia-completa"
              className="px-12 py-5 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 text-lg shadow-2xl"
            >
              Ver Itinerario Más Popular
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
