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

export function PhotoGallery({ photos, title = "Vista previa del itinerario" }: PhotoGalleryProps) {
  // Ocultar galería temporalmente cuando HIDE_GUIDE_PHOTOS
  if (HIDE_GUIDE_PHOTOS || photos.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
        >
          <Image
            src={photo.url}
            alt={photo.caption}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-sm font-medium">{photo.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
