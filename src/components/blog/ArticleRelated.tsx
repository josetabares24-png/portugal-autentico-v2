import Image from 'next/image';
import Link from 'next/link';

type RelatedPost = {
  id: string;
  titulo: string;
  categoria: string;
  imagen: string;
};

export function ArticleRelated({ posts, compact = false }: { posts: RelatedPost[]; compact?: boolean }) {
  if (posts.length === 0) return null;

  return (
    <section className={`article-related border-t border-border-soft${compact ? ' mt-12 pt-8' : ' mt-16 pt-12'}`}>
      <div className="flex items-center justify-between mb-8">
        <h3>Relacionadas</h3>
        <Link href="/blog" className="article-related-link">
          Ver todo →
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="group">
            <div className="relative aspect-[16/10] overflow-hidden mb-3">
              <Image
                src={post.imagen}
                alt={post.titulo}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <p className="article-related-category uppercase tracking-widest mb-1">{post.categoria}</p>
            <h4 className="transition-colors">{post.titulo}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
}
