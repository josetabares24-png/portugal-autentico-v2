'use client';

import { useState } from 'react';

interface InteractiveMapProps {
  mapId: string;
  title: string;
  description: string;
  guideTitle: string;
}

export default function InteractiveMap({ mapId, title, description, guideTitle }: InteractiveMapProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // URLs para diferentes acciones
  const embedUrl = `https://www.google.com/maps/d/embed?mid=${mapId}`;
  const viewUrl = `https://www.google.com/maps/d/viewer?mid=${mapId}`;
  const downloadUrl = `https://www.google.com/maps/d/viewer?mid=${mapId}`;

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <span className="material-symbols-outlined text-xl">new_releases</span>
            EXCLUSIVO - VALOR AÑADIDO
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            🗺️ {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center border-2 border-blue-200">
            <span className="material-symbols-outlined text-blue-600 text-3xl mb-2">restaurant</span>
            <p className="font-bold text-slate-900 text-sm">Restaurantes</p>
            <p className="text-xs text-slate-600">Locales verificados</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border-2 border-blue-200">
            <span className="material-symbols-outlined text-blue-600 text-3xl mb-2">photo_camera</span>
            <p className="font-bold text-slate-900 text-sm">Spots de fotos</p>
            <p className="text-xs text-slate-600">Mejores ángulos</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border-2 border-blue-200">
            <span className="material-symbols-outlined text-blue-600 text-3xl mb-2">castle</span>
            <p className="font-bold text-slate-900 text-sm">Monumentos</p>
            <p className="text-xs text-slate-600">Con horarios</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border-2 border-blue-200">
            <span className="material-symbols-outlined text-blue-600 text-3xl mb-2">download</span>
            <p className="font-bold text-slate-900 text-sm">Offline</p>
            <p className="text-xs text-slate-600">Descargable</p>
          </div>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-2xl overflow-hidden border-2 border-blue-300 shadow-2xl">
          {mapId === 'PLACEHOLDER' ? (
            // Placeholder cuando aún no se ha creado el mapa
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-8">
              <span className="material-symbols-outlined text-blue-600 text-8xl mb-6">map</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                Mapa Interactivo en Preparación
              </h3>
              <p className="text-slate-600 text-center max-w-md mb-6">
                Estamos creando un mapa personalizado con todos los sitios de "{guideTitle}". Incluirá restaurantes, miradores, monumentos y spots secretos.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-lg">
                <p className="text-sm font-bold text-slate-900 mb-2">📍 Cómo crear tu mapa (para el admin):</p>
                <ol className="text-xs text-slate-700 space-y-2 text-left">
                  <li>1. Ir a <a href="https://www.google.com/maps/d/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Google My Maps</a></li>
                  <li>2. Crear nuevo mapa: "{guideTitle} - Estaba en Lisboa"</li>
                  <li>3. Añadir capas: Restaurantes 🍴, Miradores 👁️, Monumentos 🏛️, Fotos 📸</li>
                  <li>4. Marcar todos los sitios con pins de colores</li>
                  <li>5. Hacer público y copiar el Map ID</li>
                  <li>6. Reemplazar "PLACEHOLDER" en el código</li>
                </ol>
              </div>
            </div>
          ) : (
            // Mapa real cuando ya está creado
            <>
              <div className={`relative ${isExpanded ? 'h-screen' : 'h-96 md:h-[500px]'} transition-all duration-300`}>
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa interactivo de ${guideTitle}`}
                ></iframe>
              </div>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute top-4 right-4 bg-white hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-xl font-bold text-sm shadow-lg border border-slate-200 flex items-center gap-2 z-10"
              >
                <span className="material-symbols-outlined text-lg">
                  {isExpanded ? 'close_fullscreen' : 'open_in_full'}
                </span>
                {isExpanded ? 'Reducir' : 'Pantalla completa'}
              </button>
            </>
          )}

          {/* Action Buttons */}
          <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-blue-600 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
              >
                <span className="material-symbols-outlined text-xl">open_in_new</span>
                Ver mapa completo en nueva pestaña
              </a>
              <button
                onClick={() => {
                  // Abrir en Google Maps app o web
                  window.open(downloadUrl, '_blank');
                }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-xl font-bold hover:bg-white/30 transition-all"
              >
                <span className="material-symbols-outlined text-xl">download</span>
                Descargar para offline
              </button>
            </div>

            {/* Instructions */}
            <div className="mt-4 text-center">
              <p className="text-white/90 text-sm">
                💡 <strong>Tip:</strong> Abre el mapa en Google Maps → Toca "Guardar" → Disponible offline sin internet
              </p>
            </div>
          </div>
        </div>

        {/* How to use section */}
        <div className="mt-8 bg-white rounded-2xl p-6 border-2 border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">info</span>
            Cómo usar este mapa
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                1
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">En tu ordenador</p>
                <p className="text-slate-600">Haz click en los pins para ver descripción, fotos y horarios de cada sitio</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                2
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">En tu móvil</p>
                <p className="text-slate-600">Abre en Google Maps app → Guarda en "Tus sitios" → Navega con GPS en tiempo real</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                3
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Sin internet</p>
                <p className="text-slate-600">Descarga el área de Lisboa para usar offline. Todos los pins seguirán visibles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-6 text-center">
          <p className="text-slate-600 text-sm">
            ⭐ <strong>Valoración de usuarios:</strong> "El mapa me salvó el viaje. Tener todo en un sitio es brutal" - Ana M.
          </p>
        </div>
      </div>
    </section>
  );
}
