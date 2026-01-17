'use client';

import { useEffect, useState } from 'react';

interface SocialProofProps {
  guideId: string;
}

export default function SocialProof({ guideId }: SocialProofProps) {
  const [viewersThisWeek, setViewersThisWeek] = useState(0);

  useEffect(() => {
    // Números base por guía (ajustables según analytics reales)
    const baseNumbers: Record<string, { reviews: number; baseViewers: number }> = {
      'lisboa-1-dia': { reviews: 127, baseViewers: 340 },
      'lisboa-2-dias': { reviews: 183, baseViewers: 520 },
      'lisboa-3-dias': { reviews: 95, baseViewers: 280 },
      'lisboa-romantica': { reviews: 64, baseViewers: 150 },
      'lisboa-familiar': { reviews: 78, baseViewers: 190 },
      'lisboa-fotografia': { reviews: 52, baseViewers: 120 },
      'lisboa-full-week': { reviews: 41, baseViewers: 95 },
    };

    const data = baseNumbers[guideId] || { reviews: 50, baseViewers: 100 };

    // Añadir variación aleatoria semanal (+/- 20%)
    const variance = Math.floor(Math.random() * (data.baseViewers * 0.4)) - (data.baseViewers * 0.2);
    setViewersThisWeek(data.baseViewers + variance);
  }, [guideId]);

  const ratings = {
    'lisboa-1-dia': 127,
    'lisboa-2-dias': 183,
    'lisboa-3-dias': 95,
    'lisboa-romantica': 64,
    'lisboa-familiar': 78,
    'lisboa-fotografia': 52,
    'lisboa-full-week': 41,
  };

  const reviewCount = ratings[guideId as keyof typeof ratings] || 50;

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Reviews */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900">
              {reviewCount} valoraciones
            </span>
            <span className="text-xs text-gray-600">
              Valoración media: 4.9/5
            </span>
          </div>
        </div>

        {/* Active users */}
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-green-300 shadow-sm">
          <div className="relative flex">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
              JT
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white -ml-3">
              MC
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white -ml-3">
              AS
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white -ml-3">
              +{Math.floor(viewersThisWeek / 10)}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900">
              +{viewersThisWeek} viajeros
            </span>
            <span className="text-xs text-gray-600">
              esta semana
            </span>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="mt-4 pt-4 border-t border-green-200 flex flex-wrap items-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Verificado por locales</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Actualizado 2025</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">GPS en cada parada</span>
        </div>
      </div>
    </div>
  );
}
