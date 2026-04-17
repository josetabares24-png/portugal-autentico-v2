import Image from 'next/image';
import { HIDE_GUIDE_PHOTOS } from '@/lib/guide-config';

interface Photo {
  url: string;
  caption: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title?: string;
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  if (HIDE_GUIDE_PHOTOS || photos.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="group relative aspect-square overflow-hidden"
        >
          <Image
            src={photo.url}
            alt={photo.caption}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors">
            <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-xs font-medium">{photo.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
