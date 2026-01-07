'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { Parada } from '@/types/ruta';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapaInteractivoProps {
  paradas: Parada[];
}

const crearIcono = (tipo: string, numero: number) => {
  const color = tipo === 'Comida' ? '#FF6B35' : tipo === 'Visita' ? '#4ECDC4' : '#95E1D3';
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: white;
        font-size: 14px;
      ">
        ${numero}
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
};

export default function MapaInteractivo({ paradas }: MapaInteractivoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Cargando mapa...</p>
      </div>
    );
  }

  const centroLisboa: [number, number] = [38.7139, -9.1394];
  const coordenadasRuta = paradas.map(p => [p.coordenadas.lat, p.coordenadas.lng] as [number, number]);

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <MapContainer center={centroLisboa} zoom={13} scrollWheelZoom={true} className="w-full h-full" style={{ zIndex: 0 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Polyline positions={coordenadasRuta} color="#FF6B35" weight={3} opacity={0.7} dashArray="10, 5" />
        {paradas.map((parada) => (
          <Marker key={parada.id} position={[parada.coordenadas.lat, parada.coordenadas.lng]} icon={crearIcono(parada.tipo, parada.id)}>
            <Popup>
              <div className="p-2 min-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-gray-500">{parada.hora}</span>
                </div>
                <h3 className="font-bold text-sm mb-1">{parada.titulo}</h3>
                <p className="text-xs text-gray-600 mb-2">{parada.descripcion.substring(0, 100)}...</p>
                {parada.precio && <p className="text-xs font-semibold text-orange-600">{parada.precio}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
