import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/data/blog-posts';
import { blogFallbackImage, blogImageMap } from '@/lib/media';

type EditorialArticleCardVariant = 'feature' | 'compact' | 'grid';

interface EditorialArticleCardProps {
  post: BlogPost;
  variant?: EditorialArticleCardVariant;
}

export function getArticleImage(post: BlogPost) {
  return blogImageMap[post.id] || post.imagen || blogFallbackImage;
}

export function EditorialArticleCard({ post, variant = 'grid' }: EditorialArticleCardProps) {
  const imageSrc = getArticleImage(post);

  if (variant === 'feature') {
    return (
      <article className="min-w-0">
        <Link href={`/blog/${post.id}`} className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta">
          <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-lg bg-white/60">
            <Image
              src={imageSrc}
              alt={post.titulo}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1023px) calc(100vw - 3rem), 700px"
              priority
            />
          </div>
          <p className="mb-2 font-body text-xs uppercase tracking-[0.18em] text-text-secondary">
            {post.categoria} &mdash; {post.fecha}
          </p>
          <h2 className="mb-3 break-words font-display text-3xl font-semibold not-italic leading-tight tracking-normal text-text-main transition-colors group-hover:text-terracotta md:text-4xl">
            {post.titulo}
          </h2>
          <p className="max-w-3xl font-body text-base leading-relaxed text-text-secondary md:text-lg">
            {post.excerpt}
          </p>
        </Link>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="min-w-0">
        <Link href={`/blog/${post.id}`} className="group grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-white/60">
            <Image
              src={imageSrc}
              alt={post.titulo}
              fill
              className="object-cover"
              sizes="88px"
            />
          </div>
          <div className="min-w-0">
            <p className="mb-1 font-body text-[11px] uppercase tracking-[0.14em] text-text-secondary">
              {post.categoria}
            </p>
            <h2 className="break-words font-body text-[0.95rem] font-semibold not-italic leading-snug tracking-normal text-text-main transition-colors group-hover:text-terracotta">
              {post.titulo}
            </h2>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="min-w-0">
      <Link href={`/blog/${post.id}`} className="group block rounded-md border-t border-border-soft pt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta">
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-md bg-white/60">
          <Image
            src={imageSrc}
            alt={post.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 45vw, 350px"
          />
        </div>
        <p className="mb-2 font-body text-xs uppercase tracking-[0.18em] text-text-secondary">
          {post.categoria} &mdash; {post.fecha}
        </p>
        <h2 className="mb-2 break-words font-display text-[1.375rem] font-semibold not-italic leading-snug tracking-normal text-text-main transition-colors group-hover:text-terracotta">
          {post.titulo}
        </h2>
        <p className="font-body text-[0.9375rem] leading-relaxed text-text-secondary">{post.excerpt}</p>
      </Link>
    </article>
  );
}
