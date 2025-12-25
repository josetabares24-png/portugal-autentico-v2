// src/components/FlightSearch.tsx
'use client';

import { useState } from 'react';
import { Plane, Loader2 } from 'lucide-react';

export default function FlightSearch() {
  const [origen, setOrigen] = useState('');
  const [fecha, setFecha] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultados, setResultados] = useState<any[]>([]);

  const buscarVuelos = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!origen || !fecha) {
      alert('Por favor completa origen y fecha');
      return;
    }

    setLoading(true);

    // Aquí iría la llamada real a Kiwi API
    // Por ahora simulamos resultados
    setTimeout(() => {
      setResultados([
        { aerolinea: 'TAP Air Portugal', precio: 89, duracion: '2h 30m', escalas: 'Directo' },
        { aerolinea: 'Ryanair', precio: 45, duracion: '2h 15m', escalas: 'Directo' },
        { aerolinea: 'Iberia', precio: 125, duracion: '2h 40m', escalas: 'Directo' },
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <form onSubmit={buscarVuelos} className="bg-white rounded-xl p-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Origen</label>
            <input 
              type="text" 
              placeholder="Madrid, Barcelona..." 
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Destino</label>
            <input 
              type="text" 
              value="Lisboa (LIS)" 
              disabled
              className="w-full px-4 py-3 border rounded-lg bg-gray-50 text-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Fecha</label>
            <input 
              type="date" 
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
          </div>
          <div className="flex items-end">
            <button 
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Buscando...
                </>
              ) : (
                <>
                  <Plane className="w-5 h-5" />
                  Buscar Vuelos
                </>
              )}
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Powered by Kiwi.com - Comparamos +800 aerolíneas
        </p>
      </form>

      {/* Resultados */}
      {resultados.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="font-bold text-white text-lg">Vuelos Encontrados:</h3>
          {resultados.map((vuelo, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">{vuelo.aerolinea}</div>
                <div className="text-sm text-white/80">{vuelo.duracion} • {vuelo.escalas}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">€{vuelo.precio}</div>
                <button className="text-xs text-white/80 hover:text-white underline">
                  Ver detalles →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
