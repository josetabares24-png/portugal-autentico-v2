'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useMap } from 'react-leaflet';
import { Parada } from '@/types/ruta';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then(mod => mod.Polyline), { ssr: false });


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

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 16);
  }, [center, map]);
  return null;
}

export default function RutaNavegacion({ paradas, onClose }: RutaNavegacionProps) {
  const [ubicacionActual, setUbicacionActual] = useState<Ubicacion | null>(null);
  const [paradaActualIndex, setParadaActualIndex] = useState(0);
  const [distanciaProxima, setDistanciaProxima] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [llegaste, setLlegaste] = useState(false);
  const [mostrarInfo, setMostrarInfo] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          const distancia = calcularDistancia(
            nuevaUbicacion.lat,
            nuevaUbicacion.lng,
            proximaParada.coordenadas.lat,
            proximaParada.coordenadas.lng
          );
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
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [paradaActualIndex, paradas]);

  const paradaActual = paradas[paradaActualIndex];
  const progreso = ((paradaActualIndex + 1) / paradas.length) * 100;
  const paradasCompletadas = paradaActualIndex;

  const siguienteParada = () => {
    if (paradaActualIndex < paradas.length - 1) {
      setParadaActualIndex(prev => prev + 1);
      setLlegaste(false);
      setMostrarInfo(true);
    }
  };

  const abrirGoogleMaps = () => {
    if (paradaActual && ubicacionActual) {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${ubicacionActual.lat},${ubicacionActual.lng}&destination=${paradaActual.coordenadas.lat},${paradaActual.coordenadas.lng}&travelmode=walking`;
      window.open(url, '_blank');
    }
  };

  const centerMap: [number, number] = ubicacionActual 
    ? [ubicacionActual.lat, ubicacionActual.lng]
    : [paradaActual.coordenadas.lat, paradaActual.coordenadas.lng];

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header Compacto */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition">
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="text-center flex-1">
            <div className="font-bold text-lg">Parada {paradaActualIndex + 1} de {paradas.length}</div>
            <div className="text-xs text-orange-100">{paradasCompletadas} completadas</div>
          </div>
          <button onClick={() => setMostrarInfo(!mostrarInfo)} className="p-2 hover:bg-white/20 rounded-full transition">
            <span className="material-symbols-outlined">{mostrarInfo ? 'expand_more' : 'expand_less'}</span>
          </button>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
          <div className="bg-white h-full transition-all duration-500" style={{ width: `${progreso}%` }} />
        </div>
      </div>

      {/* Mapa Full Screen */}
      <div className="flex-1 relative">
        {error && (
          <div className="absolute top-4 left-4 right-4 z-10 bg-red-500 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3">
            <span className="material-symbols-outlined">warning</span>
            <span className="text-sm">{error}</span>
          </div>
        )}

        {llegaste && (
          <div className="absolute top-4 left-4 right-4 z-10 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl animate-bounce">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-3xl">celebration</span>
              <div>
                <div className="font-black text-lg">¡Llegaste!</div>
                <div className="text-sm text-green-100">Has completado esta parada</div>
              </div>
            </div>
          </div>
        )}

        {distanciaProxima !== null && !llegaste && (
          <div className="absolute top-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-black text-orange-600">
                  {distanciaProxima < 1 ? `${Math.round(distanciaProxima * 1000)}m` : `${distanciaProxima.toFixed(1)}km`}
                </div>
                <div className="text-xs text-gray-600">hasta tu destino</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-700">{Math.round((distanciaProxima / 5) * 60)} min</div>
                <div className="text-xs text-gray-500">caminando</div>
              </div>
            </div>
          </div>
        )}

        <MapContainer
          center={centerMap}
          zoom={16}
          scrollWheelZoom={false}
          zoomControl={true}
          className="h-full w-full"
          style={{ zIndex: 0 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          
          <MapUpdater center={centerMap} />

          {ubicacionActual && (
            <Marker 
              position={[ubicacionActual.lat, ubicacionActual.lng]}
              icon={typeof window !== 'undefined' ? new (window as any).L.divIcon({
                className: 'custom-marker',
                html: `<div style="width:20px;height:20px;background:#3B82F6;border:4px solid white;border-radius:50%;box-shadow:0 0 20px rgba(59,130,246,0.6);animation:pulse 2s infinite;"></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10],
              }) : undefined}
            />
          )}

          {paradaActual && (
            <Marker 
              position={[paradaActual.coordenadas.lat, paradaActual.coordenadas.lng]}
              icon={typeof window !== 'undefined' ? new (window as any).L.divIcon({
                className: 'custom-marker',
                html: `<div style="width:50px;height:50px;background:#FF6B35;border:4px solid white;border-radius:50%;box-shadow:0 4px 20px rgba(255,107,53,0.5);display:flex;align-items:center;justify-content:center;color:white;font-weight:900;font-size:20px;">${paradaActual.id}</div>`,
                iconSize: [50, 50],
                iconAnchor: [25, 50],
              }) : undefined}
            />
          )}

          {ubicacionActual && paradaActual && (
            <Polyline 
              positions={[
                [ubicacionActual.lat, ubicacionActual.lng],
                [paradaActual.coordenadas.lat, paradaActual.coordenadas.lng]
              ]}
              color="#FF6B35"
              weight={4}
              opacity={0.7}
              dashArray="10, 10"
            />
          )}
        </MapContainer>

        <style jsx global>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.7; }
          }
        `}</style>
      </div>

      {/* Info Panel Deslizable */}
      {mostrarInfo && paradaActual && (
        <div className="bg-white rounded-t-3xl shadow-2xl max-h-[45vh] overflow-y-auto">
          <div className="p-6">
            {/* Tipo de Parada */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl ${
                paradaActual.tipo === 'Comida' ? 'bg-orange-100' :
                paradaActual.tipo === 'Visita' ? 'bg-blue-100' : 'bg-green-100'
              }`}>
                <span className={`material-symbols-outlined text-2xl ${
                  paradaActual.tipo === 'Comida' ? 'text-orange-600' :
                  paradaActual.tipo === 'Visita' ? 'text-blue-600' : 'text-green-600'
                }`}>
                  {paradaActual.tipo === 'Comida' ? 'restaurant' : paradaActual.tipo === 'Visita' ? 'place' : 'directions'}
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-500">{paradaActual.tipo}</div>
                <div className="text-xs text-gray-400">{paradaActual.hora} • {paradaActual.duracion}</div>
              </div>
              {paradaActual.precio && (
                <div className="ml-auto bg-green-500 text-white font-bold px-4 py-2 rounded-full text-sm">
                  {paradaActual.precio}
                </div>
              )}
            </div>

            {/* Título */}
            <h2 className="text-2xl font-black text-gray-900 mb-3">{paradaActual.titulo}</h2>

            {/* Descripción */}
            <p className="text-gray-600 mb-4 leading-relaxed">{paradaActual.descripcion}</p>

            {/* Consejo Local */}
            {paradaActual.consejoLocal && (
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-yellow-600">lightbulb</span>
                  <div>
                    <p className="font-bold text-yellow-900 text-sm mb-1">💡 Consejo del local</p>
                    <p className="text-sm text-yellow-800">{paradaActual.consejoLocal}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Horario */}
            {paradaActual.horario && (
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-3 rounded-lg mb-4">
                <span className="material-symbols-outlined">schedule</span>
                <span><strong>Horario:</strong> {paradaActual.horario}</span>
              </div>
            )}

            {/* Acciones */}
            <div className="space-y-3">
              {paradaActualIndex < paradas.length - 1 && (
                <button 
                  onClick={siguienteParada}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition"
                >
                  <span>Siguiente Parada</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              )}

              <button 
                onClick={abrirGoogleMaps}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition"
              >
                <span className="material-symbols-outlined">map</span>
                <span>Abrir en Google Maps</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Botón Flotante Info (cuando panel cerrado) */}
      {!mostrarInfo && (
        <button
          onClick={() => setMostrarInfo(true)}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-gray-900 font-bold py-4 px-8 rounded-full shadow-2xl flex items-center gap-3 z-20 hover:scale-105 transition"
        >
          <span className="material-symbols-outlined">info</span>
          <span>Ver Información</span>
        </button>
      )}
    </div>
  );
}
