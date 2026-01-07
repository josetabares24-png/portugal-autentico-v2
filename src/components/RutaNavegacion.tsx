'use client';

import React, { useState, useEffect } from 'react';
import { Parada } from '@/types/ruta';

interface RutaNavegacionProps {
  paradas: Parada[];
  onClose: () => void;
}

interface Ubicacion {
  lat: number;
  lng: number;
}

function calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export default function RutaNavegacion({ paradas, onClose }: RutaNavegacionProps) {
  const [ubicacionActual, setUbicacionActual] = useState<Ubicacion | null>(null);
  const [paradaActualIndex, setParadaActualIndex] = useState(0);
  const [distanciaProxima, setDistanciaProxima] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Tu navegador no soporta geolocalización');
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const nuevaUbicacion = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUbicacionActual(nuevaUbicacion);
        setError(null);

        const proximaParada = paradas[paradaActualIndex];
        if (proximaParada) {
          const distancia = calcularDistancia(nuevaUbicacion.lat, nuevaUbicacion.lng, proximaParada.coordenadas.lat, proximaParada.coordenadas.lng);
          setDistanciaProxima(distancia);

          if (distancia < 0.05 && paradaActualIndex < paradas.length - 1) {
            setTimeout(() => setParadaActualIndex(prev => prev + 1), 2000);
          }
        }
      },
      () => setError('No se pudo obtener tu ubicación. Activa el GPS.'),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [paradaActualIndex, paradas]);

  const paradaActual = paradas[paradaActualIndex];
  const progreso = ((paradaActualIndex + 1) / paradas.length) * 100;

  const abrirGoogleMaps = () => {
    if (paradaActual && ubicacionActual) {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${ubicacionActual.lat},${ubicacionActual.lng}&destination=${paradaActual.coordenadas.lat},${paradaActual.coordenadas.lng}&travelmode=walking`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
      <div className="bg-white w-full md:max-w-2xl md:rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">Navegación Activa</h2>
              <p className="text-orange-100 text-sm">Parada {paradaActualIndex + 1} de {paradas.length}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full">×</button>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div className="bg-white h-full transition-all duration-500" style={{ width: `${progreso}%` }} />
          </div>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {paradaActual && (
            <div>
              {distanciaProxima !== null && (
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-6 text-center">
                  <div className="text-5xl font-bold text-orange-600 mb-2">
                    {distanciaProxima < 1 ? `${Math.round(distanciaProxima * 1000)} m` : `${distanciaProxima.toFixed(1)} km`}
                  </div>
                  <div className="text-gray-600">hasta tu próximo destino</div>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-3">{paradaActual.titulo}</h3>
              <p className="text-gray-600 mb-4">{paradaActual.descripcion}</p>

              <button onClick={abrirGoogleMaps} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-xl mb-3">
                Abrir en Google Maps
              </button>

              {paradaActualIndex < paradas.length - 1 && (
                <button onClick={() => setParadaActualIndex(prev => prev + 1)} className="w-full bg-gray-200 hover:bg-gray-300 font-semibold py-3 px-6 rounded-xl">
                  Saltar a siguiente parada
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
