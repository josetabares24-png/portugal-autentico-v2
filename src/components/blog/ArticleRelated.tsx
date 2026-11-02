import Image from 'next/image';
import Link from 'next/link';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import { resolveInternalHref } from '@/lib/seo-url-policy';
import { editorialPhoto } from '@/lib/editorial-photo-policy';
import { blogImageMap } from '@/lib/media';
import { PhotoAttribution } from '@/components/ui/PhotoAttribution';

type RelatedPost = {
  id: string;
  titulo: string;
  categoria: string;
  imagen: string;
};

export function ArticleRelated({ posts }: { posts: RelatedPost[] }) {
  if (posts.length === 0) return null;
  const used = new Set<string>();

  return (
    <section className="article-related border-t border-border-soft mt-12 pt-8">
      <div className="flex items-center justify-between mb-8">
        <h3>Relacionadas</h3>
        <Link href="/blog" className="article-related-link">
          Ver todos los artículos
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {posts.map((post) => {
          const candidate = editorialPhoto(post.id, blogImageMap[post.id] || post.imagen);
          const image = candidate && !used.has(candidate) ? candidate : null;
          if (image) used.add(image);
          return <article key={post.id}>
          <TrackedInternalLink
            key={post.id}
            href={resolveInternalHref(`/blog/${post.id}`)}
            contentType="article_related"
            contentId={post.id}
            className="group"
          >
            {image && <div className="relative aspect-[16/10] overflow-hidden mb-3">
              <Image
                src={image}
                alt={post.titulo}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>}
            <p className="article-related-category uppercase tracking-widest mb-1">{post.categoria}</p>
            <h4 className="transition-colors">{post.titulo}</h4>
          </TrackedInternalLink>
          {image && <PhotoAttribution image={image} />}
          </article>;
        })}
      </div>
    </section>
  );
}
