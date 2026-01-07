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
  const [llegaste, setLlegaste] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Tu navegador no soporta geolocalizacion');
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
          if (distancia < 0.05) {
            setLlegaste(true);
          }
        }
      },
      (err) => {
        setError('No se pudo obtener tu ubicacion. Activa el GPS.');
        console.error(err);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [paradaActualIndex, paradas]);

  const paradaActual = paradas[paradaActualIndex];
  const progreso = ((paradaActualIndex + 1) / paradas.length) * 100;

  const siguienteParada = () => {
    if (paradaActualIndex < paradas.length - 1) {
      setParadaActualIndex(prev => prev + 1);
      setLlegaste(false);
    }
  };

  const abrirGoogleMaps = () => {
    if (paradaActual && ubicacionActual) {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${ubicacionActual.lat},${ubicacionActual.lng}&destination=${paradaActual.coordenadas.lat},${paradaActual.coordenadas.lng}&travelmode=walking`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col text-white">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-4 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition">
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="text-center flex-1">
            <div className="font-bold text-lg">Parada {paradaActualIndex + 1} de {paradas.length}</div>
          </div>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
          <div className="bg-white h-full transition-all duration-500" style={{ width: `${progreso}%` }} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {error && (
          <div className="bg-red-500 text-white px-4 py-3 rounded-xl mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined">warning</span>
            <span>{error}</span>
          </div>
        )}

        {llegaste && (
          <div className="bg-green-500 text-white px-6 py-4 rounded-2xl mb-4 animate-bounce">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl">celebration</span>
              <div>
                <div className="font-black text-lg">Llegaste!</div>
                <div className="text-sm">Has completado esta parada</div>
              </div>
            </div>
          </div>
        )}

        {distanciaProxima !== null && !llegaste && (
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl mb-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-black text-orange-400">
                  {distanciaProxima < 1 ? `${Math.round(distanciaProxima * 1000)}m` : `${distanciaProxima.toFixed(1)}km`}
                </div>
                <div className="text-xs text-gray-300">hasta tu destino</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">{Math.round((distanciaProxima / 5) * 60)} min</div>
                <div className="text-xs text-gray-400">caminando</div>
              </div>
            </div>
          </div>
        )}

        {paradaActual && (
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl ${paradaActual.tipo === 'Comida' ? 'bg-orange-500' : paradaActual.tipo === 'Visita' ? 'bg-blue-500' : 'bg-green-500'}`}>
                <span className="material-symbols-outlined text-2xl">{paradaActual.tipo === 'Comida' ? 'restaurant' : paradaActual.tipo === 'Visita' ? 'place' : 'directions'}</span>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-300">{paradaActual.tipo}</div>
                <div className="text-xs text-gray-400">{paradaActual.hora} - {paradaActual.duracion}</div>
              </div>
              {paradaActual.precio && <div className="ml-auto bg-green-500 font-bold px-4 py-2 rounded-full text-sm">{paradaActual.precio}</div>}
            </div>

            <h2 className="text-2xl font-black mb-3">{paradaActual.titulo}</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">{paradaActual.descripcion}</p>

            {paradaActual.consejoLocal && (
              <div className="bg-yellow-500/20 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-yellow-400">lightbulb</span>
                  <div>
                    <p className="font-bold text-sm mb-1">Consejo del local</p>
                    <p className="text-sm text-gray-300">{paradaActual.consejoLocal}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3 mt-6">
              {paradaActualIndex < paradas.length - 1 && (
                <button onClick={siguienteParada} className="w-full bg-gradient-to-r from-orange-600 to-orange-500 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition">
                  <span>Siguiente Parada</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              )}
              <button onClick={abrirGoogleMaps} className="w-full bg-white/10 hover:bg-white/20 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition">
                <span className="material-symbols-outlined">map</span>
                <span>Abrir en Google Maps</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
