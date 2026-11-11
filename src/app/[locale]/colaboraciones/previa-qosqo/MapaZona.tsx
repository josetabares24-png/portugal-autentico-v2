'use client';

import { useState } from 'react';

const OSM_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=-9.1370%2C38.7070%2C-9.1290%2C38.7115&layer=mapnik';

export default function MapaZona() {
  const [visible, setVisible] = useState(false);
  return (
    <figure className="not-prose">
      {visible ? (
        <iframe
          title="Mapa de la zona de Rua dos Bacalhoeiros, Lisboa"
          src={OSM_SRC}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="h-72 w-full rounded-lg border-0 sm:h-80"
        />
      ) : (
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="flex h-40 w-full items-center justify-center rounded-lg border border-neutral-300 bg-white text-base font-semibold text-[#0b5c6b] hover:bg-neutral-50"
        >
          Mostrar el mapa de la zona
        </button>
      )}
      <figcaption className="mt-1 text-xs text-neutral-600">
        Mapa de la zona, no marca la puerta exacta del restaurante. Al abrirlo se carga desde OpenStreetMap. ©{' '}
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline">
          colaboradores de OpenStreetMap
        </a>
        .
      </figcaption>
    </figure>
  );
}
