'use client';

import { useMemo } from 'react';

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

  // Crear URL de Google Maps con todos los marcadores usando Google Maps estándar
  const mapUrl = useMemo(() => {
    if (!coordinates || coordinates.length === 0) {
      // Fallback a Lisboa si no hay coordenadas
      return 'https://www.google.com/maps?q=Lisboa,Portugal&output=embed';
    }

    // Calcular centro para múltiples puntos
    const lats = coordinates.map(c => c.lat);
    const lngs = coordinates.map(c => c.lng);
    const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;

    // Crear marcadores como query parameters
    // Formato: markers=label:1|lat1,lng1&markers=label:2|lat2,lng2
    const markers = coordinates
      .map((coord, idx) => `markers=label:${idx + 1}|${coord.lat},${coord.lng}`)
      .join('&');

    // Usar Google Maps estándar con marcadores
    return `https://www.google.com/maps?q=${centerLat},${centerLng}&${markers}&output=embed`;
  }, [coordinates]);

  // URL alternativa usando Google Maps estándar con query parameters
  const alternativeMapUrl = useMemo(() => {
    if (!coordinates || coordinates.length === 0) {
      return 'https://www.google.com/maps?q=Lisboa,Portugal';
    }

    // Crear URL con todos los puntos como destino
    const points = coordinates.map(c => `${c.lat},${c.lng}`).join('/');
    return `https://www.google.com/maps/dir/${points}`;
  }, [coordinates]);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            🗺️ {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl">
          <div className={`relative ${isExpanded ? 'h-screen' : 'h-96 md:h-[600px]'} transition-all duration-300`}>
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
            ></iframe>

            {/* Expand/Collapse Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="absolute top-4 right-4 bg-white hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-xl font-bold text-sm shadow-lg border border-slate-200 flex items-center gap-2 z-10 transition-all"
              aria-label={isExpanded ? 'Reducir mapa' : 'Expandir mapa a pantalla completa'}
            >
              <span className="material-symbols-outlined text-lg">
                {isExpanded ? 'close_fullscreen' : 'open_in_full'}
              </span>
              {isExpanded ? 'Reducir' : 'Pantalla completa'}
            </button>
          </div>

          {/* Actions */}
          <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={alternativeMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-slate-700 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
              >
                <span className="material-symbols-outlined text-xl">open_in_new</span>
                Abrir en Google Maps
              </a>
              <a
                href={`https://www.google.com/maps?q=${coordinates.length > 0 ? `${coordinates[0].lat},${coordinates[0].lng}` : 'Lisboa,Portugal'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-slate-600 hover:bg-slate-500 text-white rounded-xl font-bold transition-all"
              >
                <span className="material-symbols-outlined text-xl">directions</span>
                Cómo llegar
              </a>
            </div>

            <div className="mt-4 text-center">
              <p className="text-white/90 text-sm">
                💡 <strong>Tip:</strong> Abre el mapa en Google Maps app → Guarda los lugares en "Tus sitios" → Navega con GPS en tiempo real
              </p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 bg-white rounded-2xl p-6 border-2 border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">info</span>
            Cómo usar este mapa
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">En tu ordenador</p>
                <p className="text-slate-600">Haz click en los marcadores numerados para ver cada parada del itinerario</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                2
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">En tu móvil</p>
                <p className="text-slate-600">Abre en Google Maps app → Guarda en "Tus sitios" → Navega con GPS en tiempo real</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                3
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Ruta optimizada</p>
                <p className="text-slate-600">Los marcadores están numerados en el orden del itinerario para seguir la ruta paso a paso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
