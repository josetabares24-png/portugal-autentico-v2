import Image from 'next/image';
import { TimelineStop as TimelineStopType } from '@/data/itineraries';
import { timelineFallbackImages } from '@/lib/media';
import { HIDE_GUIDE_PHOTOS } from '@/lib/guide-config';

interface TimelineStopProps extends TimelineStopType {
  index: number;
  image?: string;
}

export function TimelineStop({ time, title, description, tip, type, index, image, googleMapsUrl, coordinates }: TimelineStopProps) {
  const isEven = index % 2 === 0;
  const badgeBg = type === 'food' ? 'bg-amber-50' : 'bg-sky-50';
  const badgeText = type === 'food' ? 'text-amber-800' : 'text-sky-800';
  const tipBg = type === 'food' ? 'bg-amber-50 border-amber-200' : 'bg-sky-50 border-sky-200';
  const tipIconColor = type === 'food' ? 'text-amber-600' : 'text-sky-600';
  const fallbackImage = timelineFallbackImages[index % timelineFallbackImages.length];
  const imageSrc = image?.trim()
    ? image.startsWith('http')
      ? fallbackImage
      : image
    : fallbackImage;
  const showImage = !HIDE_GUIDE_PHOTOS;

  // Layout optimizado para lectura sin fotos: tarjeta centrada, tipografía legible
  const contentBlock = (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${badgeBg} ${badgeText}`}>
          {time}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-4 leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-5 max-w-none" style={{ lineHeight: 1.75 }}>
        {description}
      </p>
      <div className={`flex items-start gap-3 p-4 rounded-xl border ${tipBg} mb-5`}>
        <span className={`material-symbols-outlined text-xl mt-0.5 flex-shrink-0 ${tipIconColor}`}>
          lightbulb
        </span>
        <p className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
          {tip}
        </p>
      </div>
      {googleMapsUrl && (
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Ver en Google Maps
          {coordinates && (
            <span className="text-xs opacity-90">
              {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
            </span>
          )}
        </a>
      )}
    </>
  );

  if (!showImage) {
    // Layout sin fotos: tarjeta limpia, máxima legibilidad
    return (
      <div className="relative flex gap-6 md:gap-8 mb-12 md:mb-16">
        <div className="flex flex-col items-center flex-shrink-0 pt-1">
          <div className="w-12 h-12 rounded-full border-2 border-white bg-primary shadow-md flex items-center justify-center text-white font-bold text-base">
            {index + 1}
          </div>
        </div>
        <div className="flex-1 min-w-0 pt-1 pb-8 md:pb-12 px-6 md:px-8 bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-soft transition-shadow">
          {contentBlock}
        </div>
      </div>
    );
  }

  // Layout con fotos: grid alternado
  return (
    <div className={`relative grid grid-cols-1 gap-8 md:gap-16 mb-16 group md:grid-cols-2`}>
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white bg-primary shadow-lg z-10 flex items-center justify-center text-white font-bold text-sm">
        {index + 1}
      </div>
      <div className={`pl-20 md:pl-0 ${isEven ? 'md:pr-4 order-1 md:flex md:flex-col md:items-end' : 'md:pl-4 order-1 md:order-2 md:text-left'}`}>
        {contentBlock}
      </div>
      <div className={`pl-20 md:pl-0 ${isEven ? 'order-2' : 'order-2 md:order-1 md:pr-4'} ${isEven ? '' : 'md:text-right'}`}>
        <div className={`aspect-video w-full rounded-xl bg-gray-200 overflow-hidden shadow-md group-hover:shadow-lg transition-shadow ${isEven ? '' : 'ml-auto'}`}>
          {imageSrc ? (
            <Image 
              src={imageSrc} 
              alt={title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-slate-400">
                {type === 'food' ? 'restaurant' : 'location_on'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
