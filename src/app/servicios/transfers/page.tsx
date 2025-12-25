// src/app/servicios/transfers/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Car, Plane, MapPin, Clock, Users, CheckCircle, Shield } from 'lucide-react';

export default function TransfersPage() {
  const servicios = [
    {
      id: 'aeropuerto-ciudad',
      icon: Plane,
      title: 'Aeropuerto ↔ Ciudad',
      precio: 35,
      duracion: '30-40 min',
      descripcion: 'Traslado privado desde/hacia el Aeropuerto de Lisboa',
      incluye: ['Conductor profesional', 'Vehículo premium', 'Seguimiento de vuelo', 'WiFi gratis'],
    },
    {
      id: 'dia-completo',
      icon: Car,
      title: 'Día Completo con Conductor',
      precio: 250,
      duracion: '8 horas',
      descripcion: 'Vehículo privado con conductor a tu disposición todo el día',
      incluye: ['Conductor políglota', 'Gasolina incluida', 'Flexibilidad total', 'Recomendaciones locales'],
    },
    {
      id: 'sintra-cascais',
      icon: MapPin,
      title: 'Tour Sintra & Cascais',
      precio: 120,
      duracion: '8 horas',
      descripcion: 'Transfer privado para explorar Sintra y Cascais a tu ritmo',
      incluye: ['Rutas escénicas', 'Paradas ilimitadas', 'Consejos de locales', 'Agua incluida'],
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lisboa.jpg"
            alt="Transfers Lisboa"
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
            Transfers Privados
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Traslados cómodos y seguros por Lisboa y alrededores
          </p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transfers privados con conductores profesionales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((servicio) => {
              const Icon = servicio.icon;
              return (
                <div key={servicio.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {servicio.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{servicio.duracion}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>1-4 pax</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">
                    {servicio.descripcion}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {servicio.incluye.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Desde</div>
                      <div className="text-3xl font-black text-primary-600">
                        €{servicio.precio}
                      </div>
                    </div>
                    <button
                      disabled
                      className="px-6 py-3 bg-gray-300 text-gray-500 rounded-xl font-bold cursor-not-allowed"
                    >
                      Próximamente
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            ¿Por Qué Nuestros Transfers?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Seguro y Confiable', desc: 'Conductores verificados y vehículos asegurados' },
              { icon: Clock, title: 'Puntualidad', desc: 'Seguimiento de vuelos y llegada a tiempo' },
              { icon: Users, title: 'Servicio Personalizado', desc: 'Atención dedicada a tus necesidades' },
              { icon: Car, title: 'Vehículos Premium', desc: 'Flota moderna y bien mantenida' },
            ].map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <FeatureIcon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Lanzamiento Próximamente
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estamos finalizando alianzas con los mejores proveedores de transporte en Lisboa
          </p>
          <Link
            href="/itinerarios"
            className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all"
          >
            Explorar Itinerarios Disponibles
          </Link>
        </div>
      </section>
    </main>
  );
}
