import Image from 'next/image';
import { TimelineStop as TimelineStopType } from '@/data/itineraries';

interface TimelineStopProps extends TimelineStopType {
  index: number;
  image?: string;
}

export function TimelineStop({ time, title, description, tip, type, index, image, googleMapsUrl, coordinates }: TimelineStopProps) {
  const isEven = index % 2 === 0;
  const borderColor = type === 'food' ? 'border-amber-500' : 'border-sky-500';
  const badgeBg = type === 'food' ? 'bg-amber-100' : 'bg-sky-100';
  const badgeText = type === 'food' ? 'text-amber-700' : 'text-sky-700';
  const tipColor = type === 'food' ? 'text-amber-600' : 'text-sky-600';
  const iconBg = type === 'food' ? 'bg-amber-500' : 'bg-primary';
  const imageSrc = image && image.startsWith('/images/')
    ? image
    : '/images/hero-lisboa.jpg';

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 group">
      {/* Vertical line dot */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white bg-primary shadow-lg z-10 flex items-center justify-center text-white font-bold text-sm">
        {index + 1}
      </div>

      {/* Content - alternates sides on desktop */}
      <div className={`pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-4 order-1' : 'md:pl-4 order-1 md:order-2 md:text-left'}`}>
        <div className="inline-flex items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${badgeBg} ${badgeText}`}>
            {time}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-secondary-blue mb-2">{title}</h3>
        <p className="text-text-secondary leading-relaxed mb-3">{description}</p>
        <div className={`flex items-start gap-2 ${isEven ? 'md:justify-end' : ''}`}>
          <span className="material-symbols-outlined text-sm mt-0.5" style={{ color: type === 'food' ? '#f59e0b' : '#0ea5e9' }}>
            lightbulb
          </span>
          <p className={`${tipColor} text-sm font-medium`}>{tip}</p>
        </div>

        {/* Google Maps Button */}
        {googleMapsUrl && (
          <div className={`mt-4 ${isEven ? 'md:flex md:justify-end' : ''}`}>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Ver en Google Maps
              {coordinates && (
                <span className="text-xs opacity-80">
                  {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
                </span>
              )}
            </a>
          </div>
        )}
      </div>

      {/* Image */}
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
