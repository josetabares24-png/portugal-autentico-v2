'use client';

import Link from 'next/link';

interface BookingWidgetProps {
  zone: string;
  bookingUrl?: string;
  description?: string;
}

export default function BookingWidget({
  zone,
  bookingUrl = 'https://www.booking.com/searchresults.html?ss=Lisboa',
  description
}: BookingWidgetProps) {
  return (
    <div className="my-8 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>

        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
            🏨 ¿Dónde dormir en {zone}?
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            {description || `Encuentra los mejores hoteles, apartamentos y hostales en ${zone}. Compara precios y reserva con cancelación gratuita.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Ver Hoteles en Booking.com
            </a>

            <div className="flex items-center gap-2 text-sm text-gray-600 px-4">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Cancelación gratis en la mayoría</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            💡 <strong>Consejo:</strong> Reserva con antelación para mejores precios, especialmente en temporada alta (junio-septiembre).
          </p>
        </div>
      </div>
    </div>
  );
}
