import Image from 'next/image';
import type { SectionPhoto } from './article-types';

type ArticleFigureProps = {
  photo: SectionPhoto;
};

export function ArticleFigure({ photo }: ArticleFigureProps) {
  return (
    <figure className="article-figure">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={1200}
        height={800}
        className="article-figure-img"
        sizes="(max-width: 768px) 100vw, 700px"
        loading="lazy"
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
    </figure>
  );
}
