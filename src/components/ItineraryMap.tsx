'use client';

import { useMemo, useState } from 'react';
import Icon from '@/components/Icon';

interface Coordinate {
  lat: number;
  lng: number;
}

interface ItineraryMapProps {
  coordinates: Coordinate[];
  title: string;
  description: string;
  guideTitle: string;
}

export default function ItineraryMap({
  coordinates,
  title,
  description,
  guideTitle,
}: ItineraryMapProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const mapUrl = useMemo(() => {
    if (!coordinates || coordinates.length === 0) {
      return 'https://www.google.com/maps?q=Lisboa,Portugal&output=embed';
    }
    const lats = coordinates.map(c => c.lat);
    const lngs = coordinates.map(c => c.lng);
    const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
    const markers = coordinates
      .map((coord, idx) => `markers=label:${idx + 1}|${coord.lat},${coord.lng}`)
      .join('&');
    return `https://www.google.com/maps?q=${centerLat},${centerLng}&${markers}&output=embed`;
  }, [coordinates]);

  const alternativeMapUrl = useMemo(() => {
    if (!coordinates || coordinates.length === 0) {
      return 'https://www.google.com/maps?q=Lisboa,Portugal';
    }
    const points = coordinates.map(c => `${c.lat},${c.lng}`).join('/');
    return `https://www.google.com/maps/dir/${points}`;
  }, [coordinates]);

  return (
    <section className="bg-background-light py-16 border-t border-border-soft">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-2">{title}</p>
          <p className="text-text-secondary text-sm">{description}</p>
        </div>

        <div className="border border-border-soft overflow-hidden">
          <div className={`relative ${isExpanded ? 'h-screen' : 'h-96 md:h-[500px]'}`}>
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa interactivo de ${guideTitle}`}
            />
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="absolute top-3 right-3 bg-background-light border border-border-soft text-text-secondary px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 z-10 hover:border-text-secondary transition-colors"
              aria-label={isExpanded ? 'Reducir mapa' : 'Expandir mapa'}
            >
              <Icon name={isExpanded ? 'close_fullscreen' : 'open_in_full'} size={14} />
              {isExpanded ? 'Reducir' : 'Expandir'}
            </button>
          </div>

          <div className="border-t border-border-soft p-5 flex flex-col sm:flex-row gap-3">
            <a
              href={alternativeMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-border-soft text-text-secondary text-xs font-semibold hover:border-text-secondary transition-colors"
            >
              <Icon name="open_in_new" size={14} />
              Abrir en Google Maps
            </a>
            <a
              href={`https://www.google.com/maps?q=${coordinates.length > 0 ? `${coordinates[0].lat},${coordinates[0].lng}` : 'Lisboa,Portugal'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-colors"
            >
              <Icon name="directions" size={14} />
              Cómo llegar
            </a>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { n: '1', title: 'En tu ordenador', desc: 'Haz click en los marcadores numerados para ver cada parada del itinerario.' },
            { n: '2', title: 'En tu móvil', desc: 'Abre en Google Maps app → Guarda en "Tus sitios" → Navega con GPS en tiempo real.' },
            { n: '3', title: 'Ruta optimizada', desc: 'Los marcadores están numerados en el orden del itinerario para seguirlo paso a paso.' },
          ].map((item) => (
            <div key={item.n} className="border-t border-border-soft pt-4 flex gap-3">
              <span className="text-xs font-bold text-primary flex-shrink-0">{item.n}.</span>
              <div>
                <p className="text-xs font-semibold text-text-main mb-1">{item.title}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
