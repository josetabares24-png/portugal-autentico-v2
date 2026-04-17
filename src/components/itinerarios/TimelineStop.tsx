import Image from 'next/image';
import { TimelineStop as TimelineStopType } from '@/data/itineraries';
import { timelineFallbackImages } from '@/lib/media';
import { HIDE_GUIDE_PHOTOS } from '@/lib/guide-config';
import Icon from '@/components/Icon';

interface TimelineStopProps extends TimelineStopType {
  index: number;
  image?: string;
}

export function TimelineStop({ time, title, description, tip, type, index, image, googleMapsUrl, coordinates }: TimelineStopProps) {
  const isEven = index % 2 === 0;
  const fallbackImage = timelineFallbackImages[index % timelineFallbackImages.length];
  const imageSrc = image?.trim()
    ? image.startsWith('http')
      ? fallbackImage
      : image
    : fallbackImage;
  const showImage = !HIDE_GUIDE_PHOTOS;

  const contentBlock = (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-widest text-text-secondary font-semibold">
          {time}
        </span>
        {type === 'food' && (
          <span className="text-xs text-primary">·  Gastronomía</span>
        )}
      </div>
      <h3 className="font-display italic text-text-main text-xl md:text-2xl leading-tight mb-3">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="border-l-2 border-primary pl-4 mb-4">
        <p className="text-text-secondary text-xs leading-relaxed">
          {tip}
        </p>
      </div>
      {googleMapsUrl && (
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-2 text-xs font-semibold"
        >
          <Icon name="map" size={14} />
          Ver en Google Maps
          {coordinates && (
            <span className="text-text-secondary font-normal">
              {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
            </span>
          )}
        </a>
      )}
    </>
  );

  if (!showImage) {
    return (
      <div className="relative flex gap-6 md:gap-8 mb-10 md:mb-12">
        <div className="flex flex-col items-center flex-shrink-0 pt-1">
          <div className="w-10 h-10 border-2 border-primary bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {index + 1}
          </div>
        </div>
        <div className="flex-1 min-w-0 pt-1 pb-8 border-b border-border-soft">
          {contentBlock}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative grid grid-cols-1 gap-8 md:gap-16 mb-14 group md:grid-cols-2`}>
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 border-2 border-primary bg-primary z-10 flex items-center justify-center text-white font-bold text-sm">
        {index + 1}
      </div>
      <div className={`pl-16 md:pl-0 ${isEven ? 'md:pr-4 order-1' : 'md:pl-4 order-1 md:order-2'}`}>
        {contentBlock}
      </div>
      <div className={`pl-16 md:pl-0 ${isEven ? 'order-2' : 'order-2 md:order-1 md:pr-4'}`}>
        <div className="aspect-video w-full overflow-hidden bg-border-soft">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-border-soft flex items-center justify-center">
              <Icon name={type === 'food' ? 'restaurant' : 'location_on'} size={48} className="text-text-secondary" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
