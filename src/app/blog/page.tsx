import Link from 'next/link';

const posts = [
  {
    slug: "mejores-miradores-lisboa",
    title: "Los 10 Mejores Miradores de Lisboa",
    excerpt: "Descubre los miradores mas espectaculares de Lisboa, desde los clasicos hasta los secretos.",
    date: "15 Enero 2025",
    readTime: "5 min"
  },
  {
    slug: "donde-comer-alfama",
    title: "Donde Comer en Alfama: Guia Local",
    excerpt: "Los restaurantes donde realmente comen los portugueses en el barrio mas antiguo de Lisboa.",
    date: "12 Enero 2025",
    readTime: "7 min"
  },
  {
    slug: "tranvia-28-sin-colas",
    title: "Como Subir al Tranvia 28 Sin Colas",
    excerpt: "El truco que usan los locales para disfrutar del famoso tranvia 28 sin esperar horas.",
    date: "10 Enero 2025",
    readTime: "4 min"
  },
  {
    slug: "sintra-un-dia",
    title: "Sintra en Un Dia: Itinerario Perfecto",
    excerpt: "Como aprovechar al maximo tu visita a Sintra. Que ver, en que orden, y donde comer.",
    date: "8 Enero 2025",
    readTime: "8 min"
  },
  {
    slug: "pasteis-de-nata",
    title: "Los Mejores Pasteis de Nata de Lisboa",
    excerpt: "Mas alla de Pasteis de Belem: las pastelerias secretas donde compran los portugueses.",
    date: "5 Enero 2025",
    readTime: "6 min"
  },
  {
    slug: "lisboa-con-lluvia",
    title: "Que Hacer en Lisboa Cuando Llueve",
    excerpt: "Lisboa bajo la lluvia tiene su encanto. Museos, cafes historicos y experiencias cubiertas.",
    date: "3 Enero 2025",
    readTime: "5 min"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog de Viajes</h1>
          <p className="text-xl opacity-90">Tips, guias y secretos de Lisboa escritos por locales</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200"></div>
                <div className="p-6">
                  <div className="flex gap-4 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime} lectura</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-blue-600 font-semibold">Leer mas</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
