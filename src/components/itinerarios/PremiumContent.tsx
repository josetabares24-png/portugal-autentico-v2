'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { isFreeAccessActive } from '@/lib/guide-config';
import Icon from '@/components/Icon';

const ItineraryMap = dynamic(() => import('@/components/ItineraryMap'), {
  ssr: false,
  loading: () => (
    <div className="py-16 bg-slate-50 text-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-3"></div>
      <p className="text-slate-500 text-sm">Cargando mapa...</p>
    </div>
  ),
});

interface Coordinate {
  lat: number;
  lng: number;
}

interface PremiumContentProps {
  productId: string;
  price: number;
  productName: string;
  coordinates: Coordinate[];
  mapTitle: string;
  mapDescription: string;
  guideTitle: string;
}

export function PremiumContent({
  productId,
  price,
  productName,
  coordinates,
  mapTitle,
  mapDescription,
  guideTitle,
}: PremiumContentProps) {
  const { user, isLoaded } = useUser();
  const [hasAccess, setHasAccess] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      // Acceso gratuito temporal
      if (isFreeAccessActive()) {
        setHasAccess(true);
        setIsChecking(false);
        return;
      }

      if (!isLoaded) return;

      if (!user) {
        setHasAccess(false);
        setIsChecking(false);
        return;
      }

      try {
        const response = await fetch(`/api/check-purchase?productId=${productId}`);
        const data = await response.json();
        setHasAccess(data.hasAccess || false);
      } catch (error) {
        console.error('Error checking access:', error);
        setHasAccess(false);
      } finally {
        setIsChecking(false);
      }
    }

    checkAccess();
  }, [user, isLoaded, productId]);

  if (isChecking) {
    return (
      <div className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-slate-600">Verificando acceso...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-12 text-center shadow-xl border-2 border-slate-200">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="lock" size={48} className="text-primary" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">
              Contenido Premium
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-xl mx-auto">
              Este contenido está disponible solo para quienes han comprado la guía completa.
            </p>
            <Link
              href={`/checkout/${productId}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-all"
            >
              <Icon name="lock_open" size={18} />
              Desbloquear por {price}€
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Interactive Map - Solo visible para compradores */}
      <ItineraryMap
        coordinates={coordinates}
        title={mapTitle}
        description={mapDescription}
        guideTitle={guideTitle}
      />

      {/* Recursos Útiles */}
      <UsefulResources />
    </>
  );
}

function UsefulResources() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            📚 Recursos Útiles
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mapas, apps y herramientas que te harán la vida más fácil en Lisboa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mapa de Metro */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 hover:border-primary transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Icon name="train" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Metro de Lisboa</h3>
            </div>
            <p className="text-slate-600 mb-4 text-sm">
              Mapa completo del metro con todas las líneas, conexiones y horarios.
            </p>
            <a
              href="https://www.metrolisboa.pt/en/travel/maps/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Ver mapa oficial
              <Icon name="open_in_new" size={14} />
            </a>
          </div>

          {/* Mapa de Tranvías */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 hover:border-primary transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                <Icon name="tram" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Tranvías</h3>
            </div>
            <p className="text-slate-600 mb-4 text-sm">
              Rutas del tranvía 28, 15 y otros. Horarios y paradas principales.
            </p>
            <a
              href="https://www.carris.pt/en/tram/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Ver rutas
              <Icon name="open_in_new" size={14} />
            </a>
          </div>

          {/* Mapa de Autobuses */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 hover:border-primary transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Icon name="directions_bus" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Autobuses</h3>
            </div>
            <p className="text-slate-600 mb-4 text-sm">
              Red completa de autobuses urbanos y conexiones con el aeropuerto.
            </p>
            <a
              href="https://www.carris.pt/en/bus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Ver rutas
              <Icon name="open_in_new" size={14} />
            </a>
          </div>

          {/* App Lisboa Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 hover:border-primary transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Icon name="credit_card" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Lisboa Card</h3>
            </div>
            <p className="text-slate-600 mb-4 text-sm">
              ¿Vale la pena? Análisis completo de si te conviene según tu itinerario.
            </p>
            <a
              href="/apps"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Ver análisis
              <Icon name="arrow_forward" size={14} />
            </a>
          </div>

          {/* App Uber/Bolt */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 hover:border-primary transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <Icon name="local_taxi" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Uber / Bolt</h3>
            </div>
            <p className="text-slate-600 mb-4 text-sm">
              Comparativa de precios y cuándo usar cada app en Lisboa.
            </p>
            <a
              href="/apps"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Ver comparativa
              <Icon name="arrow_forward" size={14} />
            </a>
          </div>

          {/* Mapa de Zonas */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 hover:border-primary transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <Icon name="map" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Barrios de Lisboa</h3>
            </div>
            <p className="text-slate-600 mb-4 text-sm">
              Guía visual de los barrios principales con características y mejores momentos para visitar.
            </p>
            <a
              href="/itinerarios"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Ver itinerarios por barrios
              <Icon name="arrow_forward" size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
