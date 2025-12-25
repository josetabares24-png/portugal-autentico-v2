// src/app/blog/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const articulos = [
    {
      id: 'mejores-miradores-lisboa',
      titulo: '7 Miradores Secretos de Lisboa',
      extracto: 'Descubre los mejores puntos de vista de la ciudad, lejos de las multitudes.',
      imagen: '/images/alfama-panoramica.jpg',
      categoria: 'Guías',
      fecha: '15 Dic 2024',
      autor: 'María Silva',
      lecturaMin: 8,
    },
    {
      id: 'donde-comer-lisboa',
      titulo: 'Dónde Comer en Lisboa: 15 Restaurantes Locales',
      extracto: 'La lista definitiva de restaurantes donde comen los lisboetas de verdad.',
      imagen: '/images/pasteis-nata.jpg',
      categoria: 'Gastronomía',
      fecha: '12 Dic 2024',
      autor: 'João Santos',
      lecturaMin: 12,
    },
    {
      id: 'historia-tranvia-28',
      titulo: 'La Historia Secreta del Tranvía 28',
      extracto: 'El tranvía más famoso de Lisboa tiene historias fascinantes que pocos conocen.',
      imagen: '/images/tranvia-28.jpg',
      categoria: 'Historia',
      fecha: '10 Dic 2024',
      autor: 'Pedro Costa',
      lecturaMin: 10,
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="py-12 px-6 bg-gradient-to-br from-primary-50 to-ocean-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Blog Portugal Auténtico
          </h1>
          <p className="text-lg text-gray-700">
            Guías, consejos y secretos de Lisboa escritos por locales
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {articulos.map((articulo) => (
              <article
                key={articulo.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-bold text-primary-600">
                      {articulo.categoria}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {articulo.titulo}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {articulo.extracto}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{articulo.fecha}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{articulo.lecturaMin} min</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm font-medium text-gray-700">
                      {articulo.autor}
                    </span>
                    <span className="text-primary-600 font-semibold text-sm">
                      Leer más →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
