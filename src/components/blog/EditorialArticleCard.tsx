import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/data/blog-posts';
import { blogImageMap } from '@/lib/media';
import { editorialPhoto } from '@/lib/editorial-photo-policy';
import { PhotoAttribution } from '@/components/ui/PhotoAttribution';
import { resolveInternalHref } from '@/lib/seo-url-policy';

type EditorialArticleCardVariant = 'feature' | 'compact' | 'grid';

interface EditorialArticleCardProps {
  post: BlogPost;
  variant?: EditorialArticleCardVariant;
  headingLevel?: 2 | 3;
  /** null = artículo sin imagen repetida; undefined = usar portada del catálogo. */
  imageOverride?: string | null;
}

export function getArticleImage(post: BlogPost) {
  return editorialPhoto(post.id, blogImageMap[post.id] || post.imagen);
}

/** Devuelve una imagen distinta por tarjeta. Si no hay otra foto verificable, no inventa ninguna. */
export function uniqueArticleImages(posts: readonly BlogPost[], reservedImages: readonly (string | null)[] = []) {
  const used = new Set(reservedImages);
  const images = new Map<string, string | null>();
  for (const post of posts) {
    const src = getArticleImage(post);
    if (!src || used.has(src)) images.set(post.id, null);
    else { images.set(post.id, src); used.add(src); }
  }
  return images;
}

export function EditorialArticleCard({ post, variant = 'grid', headingLevel = 2, imageOverride }: EditorialArticleCardProps) {
  const imageSrc = imageOverride === undefined ? getArticleImage(post) : imageOverride;
  const Heading = headingLevel === 3 ? 'h3' : 'h2';

  if (variant === 'feature') {
    return (
      <article className="min-w-0">
        <Link href={resolveInternalHref(`/blog/${post.id}`)} className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcb05]">
          {imageSrc && (
          <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-lg bg-white/60">
            <Image
              src={imageSrc}
              style={post.imageFit ? { objectFit: post.imageFit } : undefined}
              alt={post.titulo}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1023px) calc(100vw - 3rem), 700px"
              priority
            />
          </div>
          )}
          <p className="mb-2 font-body text-xs uppercase tracking-[0.1em] text-[#015a5c]">
            {post.categoria} &mdash; {post.fecha}
          </p>
          <Heading className="mb-3 break-words font-display text-3xl font-semibold not-italic leading-tight tracking-normal text-text-main transition-colors group-hover:text-[#007b81] md:text-4xl">
            {post.titulo}
          </Heading>
          <p className="max-w-3xl font-body text-base leading-relaxed text-text-secondary md:text-lg">
            {post.excerpt}
          </p>
        </Link>
        {imageSrc && <PhotoAttribution image={imageSrc} />}
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="min-w-0">
        <Link href={resolveInternalHref(`/blog/${post.id}`)} className={`group grid ${imageSrc ? "grid-cols-[5.5rem_minmax(0,1fr)]" : "grid-cols-1"} gap-4 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcb05]`}>
          {imageSrc && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-white/60">
            <Image
              src={imageSrc}
              style={post.imageFit ? { objectFit: post.imageFit } : undefined}
              alt={post.titulo}
              fill
              className="object-cover"
              sizes="88px"
            />
          </div>
          )}
          <div className="min-w-0">
            <p className="mb-1 font-body text-[11px] uppercase tracking-[0.14em] text-text-secondary">
              {post.categoria}
            </p>
            <Heading className="break-words font-body text-[0.95rem] font-semibold not-italic leading-snug tracking-normal text-text-main transition-colors group-hover:text-[#007b81]">
              {post.titulo}
            </Heading>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="min-w-0">
      <Link href={resolveInternalHref(`/blog/${post.id}`)} className="group block h-full rounded-[8px] border border-[#d8e9e9] bg-white p-4 shadow-[0_6px_18px_rgba(8,48,62,0.07)] transition-shadow hover:shadow-[0_12px_24px_rgba(8,48,62,0.13)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcb05]">
        {imageSrc && (
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-md bg-white/60">
          <Image
            src={imageSrc}
            style={post.imageFit ? { objectFit: post.imageFit } : undefined}
            alt={post.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 45vw, 350px"
          />
        </div>
        )}
        <p className="mb-2 font-body text-xs uppercase tracking-[0.1em] text-[#015a5c]">
          {post.categoria} &mdash; {post.fecha}
        </p>
        <Heading className="mb-2 break-words font-display text-[1.375rem] font-semibold not-italic leading-snug tracking-normal text-text-main transition-colors group-hover:text-[#007b81]">
          {post.titulo}
        </Heading>
        <p className="font-body text-[0.9375rem] leading-relaxed text-text-secondary">{post.excerpt}</p>
      </Link>
      {imageSrc && <PhotoAttribution image={imageSrc} />}
    </article>
  );
}
