// src/app/servicios/tours-privados/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Users, Star, CheckCircle, Calendar } from 'lucide-react';

export default function ToursPrivadosPage() {
  const tours = [
    {
      id: 'lisboa-esencial',
      title: 'Lisboa Esencial Privado',
      duration: '4 horas',
      price: 150,
      maxPersonas: 6,
      descripcion: 'Tour privado por los lugares imprescindibles de Lisboa con guía local experto.',
      incluye: ['Guía certificado en español', 'Transporte privado', 'Entradas a 2 monumentos', 'Degustación de pasteles de nata'],
      image: '/images/alfama-panoramica.jpg',
    },
    {
      id: 'lisboa-gastronomica',
      title: 'Experiencia Gastronómica',
      duration: '3 horas',
      price: 120,
      maxPersonas: 8,
      descripcion: 'Tour culinario por mercados y tabernas auténticas de Lisboa.',
      incluye: ['Guía gastronómico', '6 degustaciones', 'Vino portugués', 'Recetas tradicionales'],
      image: '/images/pasteis-nata.jpg',
    },
    {
      id: 'sintra-cascais',
      title: 'Sintra y Cascais Premium',
      duration: '8 horas',
      price: 280,
      maxPersonas: 4,
      descripcion: 'Día completo explorando palacios de Sintra y costa de Cascais.',
      incluye: ['Vehículo privado', 'Guía experto', 'Entradas a 3 palacios', 'Almuerzo incluido'],
      image: '/images/hero-lisboa.jpg',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/alfama-panoramica.jpg"
            alt="Tours Privados Lisboa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white font-semibold">Próximamente Disponible</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Tours Privados en Lisboa
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Experiencias exclusivas con guías locales expertos
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Nuestros Tours
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experiencias privadas diseñadas para descubrir el verdadero Lisboa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tour.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Máx. {tour.maxPersonas}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">
                    {tour.descripcion}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {tour.incluye.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-black text-primary-600">
                        €{tour.price}
                      </div>
                      <div className="text-sm text-gray-600">por grupo</div>
                    </div>
                    <button
                      disabled
                      className="px-6 py-3 bg-gray-300 text-gray-500 rounded-xl font-bold cursor-not-allowed"
                    >
                      Próximamente
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Disponible Muy Pronto
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estamos seleccionando los mejores guías locales para ofrecerte experiencias inolvidables
          </p>
          <Link
            href="/itinerarios"
            className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all"
          >
            Mientras tanto, explora nuestros itinerarios
          </Link>
        </div>
      </section>
    </main>
  );
}
