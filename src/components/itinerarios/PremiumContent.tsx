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
    <div className="py-12 bg-background-light text-center border-t border-border-soft">
      <p className="text-text-secondary text-sm">Cargando mapa...</p>
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
      <div className="py-12 bg-background-light border-t border-border-soft">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-text-secondary text-sm">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="py-16 bg-background-light border-t border-border-soft">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="border-t-2 border-primary pt-8">
            <div className="w-10 h-10 bg-primary flex items-center justify-center mx-auto mb-6">
              <Icon name="lock" size={24} className="text-white" />
            </div>
            <h3 className="font-display italic text-text-main text-2xl mb-3">
              Contenido Premium
            </h3>
            <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto">
              El mapa interactivo y recursos adicionales están disponibles para quienes han comprado la guía.
            </p>
            <Link
              href={`/checkout/${productId}`}
              className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-colors"
            >
              Desbloquear por {price}€
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ItineraryMap
        coordinates={coordinates}
        title={mapTitle}
        description={mapDescription}
        guideTitle={guideTitle}
      />
      <UsefulResources />
    </>
  );
}

function UsefulResources() {
  const recursos = [
    {
      titulo: 'Metro de Lisboa',
      desc: 'Mapa completo del metro con todas las líneas, conexiones y horarios.',
      href: 'https://www.metrolisboa.pt/en/travel/maps/',
      label: 'Ver mapa oficial',
      external: true,
    },
    {
      titulo: 'Tranvías (Carris)',
      desc: 'Rutas del tranvía 28, 15 y otros. Horarios y paradas principales.',
      href: 'https://www.carris.pt/en/tram/',
      label: 'Ver rutas',
      external: true,
    },
    {
      titulo: 'Autobuses urbanos',
      desc: 'Red completa de autobuses urbanos y conexiones con el aeropuerto.',
      href: 'https://www.carris.pt/en/bus/',
      label: 'Ver rutas',
      external: true,
    },
    {
      titulo: 'Lisboa Card',
      desc: '¿Vale la pena? Análisis completo según tu itinerario.',
      href: '/apps',
      label: 'Ver análisis',
      external: false,
    },
    {
      titulo: 'Uber / Bolt',
      desc: 'Comparativa de precios y cuándo usar cada app en Lisboa.',
      href: '/apps',
      label: 'Ver comparativa',
      external: false,
    },
    {
      titulo: 'Barrios de Lisboa',
      desc: 'Guía de los barrios principales y mejores momentos para visitar.',
      href: '/itinerarios',
      label: 'Ver itinerarios',
      external: false,
    },
  ];

  return (
    <section className="py-16 bg-background-light border-t border-border-soft">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
          Recursos útiles
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recursos.map((r) => (
            <div key={r.titulo} className="border-t border-border-soft pt-5">
              <h3 className="font-semibold text-text-main text-sm mb-1">{r.titulo}</h3>
              <p className="text-text-secondary text-xs leading-relaxed mb-3">{r.desc}</p>
              <a
                href={r.href}
                target={r.external ? '_blank' : undefined}
                rel={r.external ? 'noopener noreferrer' : undefined}
                className="text-xs text-primary hover:underline underline-offset-2 font-semibold"
              >
                {r.label} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
