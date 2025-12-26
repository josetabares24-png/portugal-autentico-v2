import Link from 'next/link';

const posts = [
  {
    slug: 'que-ver-en-lisboa-en-2-dias',
    title: 'Que ver en Lisboa en 2 dias: Guia completa 2025',
    excerpt: 'El itinerario perfecto para un fin de semana en Lisboa. Que visitar, donde comer y los mejores spots de fotos.',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    date: '15 Dic 2024',
    readTime: '8 min',
    category: 'Guias'
  },
  {
    slug: 'mejores-restaurantes-lisboa-locales',
    title: '15 restaurantes en Lisboa donde comen los locales',
    excerpt: 'Olvida las trampas turisticas. Estos son los sitios donde los lisboetas de verdad van a comer.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    date: '12 Dic 2024',
    readTime: '6 min',
    category: 'Restaurantes'
  },
  {
    slug: 'sintra-guia-completa',
    title: 'Sintra en un dia: Como ver todo sin agobios',
    excerpt: 'Palacio da Pena, Quinta da Regaleira y mas. La guia definitiva para visitar Sintra desde Lisboa.',
    image: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800',
    date: '10 Dic 2024',
    readTime: '10 min',
    category: 'Excursiones'
  },
  {
    slug: 'spots-fotos-lisboa-secretos',
    title: '12 spots de fotos en Lisboa que no salen en Instagram',
    excerpt: 'Los miradores escondidos y rincones fotogenicos que solo conocen los locales.',
    image: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800',
    date: '8 Dic 2024',
    readTime: '5 min',
    category: 'Fotografia'
  },
  {
    slug: 'belem-que-ver-medio-dia',
    title: 'Belem: Que ver en medio dia (y donde comer los mejores pasteis)',
    excerpt: 'Torre de Belem, Monasterio de los Jeronimos y el secreto para evitar la cola de Pasteis de Belem.',
    image: 'https://images.unsplash.com/photo-1580323956656-26bbb7b tried-4c68-a431-834a28b59e43?w=800',
    date: '5 Dic 2024',
    readTime: '7 min',
    category: 'Barrios'
  },
  {
    slug: 'vida-nocturna-lisboa-guia',
    title: 'Vida nocturna en Lisboa: De Bairro Alto a Cais do Sodre',
    excerpt: 'Donde empezar, donde terminar y los bares que no te puedes perder.',
    image: 'https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800',
    date: '1 Dic 2024',
    readTime: '6 min',
    category: 'Vida Nocturna'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog de Lisboa</h1>
          <p className="text-xl text-white/80">Guias, tips y secretos para descubrir Lisboa como un local</p>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="mb-12">
            <Link href={`/blog/${posts[0].slug}`} className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-cover bg-center" style={{backgroundImage: `url(${posts[0].image})`}}></div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{background: 'var(--color-secondary)', color: 'var(--color-primary)'}}>{posts[0].category}</span>
                    <span className="text-sm text-slate-500">{posts[0].date}</span>
                    <span className="text-sm text-slate-500">{posts[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>{posts[0].title}</h2>
                  <p className="text-slate-600 mb-6">{posts[0].excerpt}</p>
                  <span className="font-semibold" style={{color: 'var(--color-accent)'}}>Leer articulo →</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${post.image})`}}></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{background: 'var(--color-secondary)', color: 'var(--color-primary)'}}>{post.category}</span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold mb-2" style={{color: 'var(--color-primary)'}}>{post.title}</h3>
                  <p className="text-slate-600 text-sm">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Quieres todo organizado?</h2>
          <p className="text-slate-600 mb-6">Nuestros packs incluyen itinerarios completos, restaurantes y spots de fotos.</p>
          <Link href="/itinerarios" className="btn-primary px-8 py-3">Ver packs desde 5.99 EUR</Link>
        </div>
      </section>
    </main>
  );
}
