import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const posts = [
    { 
      slug: "mejores-miradores-lisboa", 
      titulo: "Los 10 mejores miradores de Lisboa", 
      descripcion: "Desde los clásicos hasta los secretos que solo conocen los locales.", 
      imagen: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800&q=80", 
      categoria: "Guías", 
      fecha: "20 Dic 2024", 
      minutos: 8 
    },
    { 
      slug: "donde-comer-barato-lisboa", 
      titulo: "Dónde comer barato en Lisboa (2024)", 
      descripcion: "Tascas, mercados y restaurantes locales donde comer bien por menos de 15 euros.", 
      imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80", 
      categoria: "Comida", 
      fecha: "18 Dic 2024", 
      minutos: 6 
    },
    { 
      slug: "como-ir-sintra-desde-lisboa", 
      titulo: "Cómo ir a Sintra desde Lisboa", 
      descripcion: "¿Tren, bus o tour? Te explicamos todas las opciones y precios.", 
      imagen: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800&q=80", 
      categoria: "Transporte", 
      fecha: "15 Dic 2024", 
      minutos: 5 
    },
    { 
      slug: "tarjeta-lisboa-card-vale-pena", 
      titulo: "Lisboa Card: ¿Vale la pena en 2024?", 
      descripcion: "Analizamos precios y calculamos si realmente ahorras dinero.", 
      imagen: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800&q=80", 
      categoria: "Tips", 
      fecha: "12 Dic 2024", 
      minutos: 7 
    },
    { 
      slug: "barrios-lisboa-donde-alojarse", 
      titulo: "Barrios de Lisboa: Dónde alojarse", 
      descripcion: "Baixa, Alfama, Bairro Alto, Belém... Pros y contras de cada zona.", 
      imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", 
      categoria: "Alojamiento", 
      fecha: "10 Dic 2024", 
      minutos: 10 
    },
    { 
      slug: "mejores-pasteles-nata-lisboa", 
      titulo: "Los mejores pasteles de nata de Lisboa", 
      descripcion: "Probamos 15 pastelerías para encontrar el pastel de nata perfecto.", 
      imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80", 
      categoria: "Comida", 
      fecha: "8 Dic 2024", 
      minutos: 5 
    }
  ];
  
  const categoriaColor: Record<string, string> = { 
    "Guías": "bg-blue-50 text-blue-600", 
    "Comida": "bg-orange-50 text-orange-600", 
    "Transporte": "bg-green-50 text-green-600", 
    "Tips": "bg-purple-50 text-purple-600", 
    "Alojamiento": "bg-pink-50 text-pink-600" 
  };

  return (
    <main className="bg-background-light">
      {/* Hero - Estilo Home */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1588179071719-dfdadcd51d26?w=1920&q=80"
            alt="Blog de Lisboa"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">article</span>
            <span className="text-sm font-bold tracking-wide">{posts.length} ARTÍCULOS LOCALES</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Blog de Lisboa
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg">
            Tips de locales, guías detalladas y todos los secretos para que disfrutes Lisboa como nunca.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image 
                    src={post.imagen} 
                    alt={post.titulo}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-6 left-6">
                    <span className={`text-xs font-bold px-4 py-2 rounded-full ${categoriaColor[post.categoria]}`}>
                      {post.categoria}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-white text-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">calendar_today</span>
                      {post.fecha}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">schedule</span>
                      {post.minutos} min
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {post.titulo}
                  </h2>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {post.descripcion}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    Leer artículo
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Estilo Home */}
      <section className="py-24 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Quieres todo <span className="text-yellow-300">organizado</span>?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nuestros itinerarios incluyen rutas detalladas, restaurantes auténticos y los mejores spots que no salen en las guías.
          </p>
          <Link 
            href="/itinerarios" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">map</span>
            Ver Itinerarios Premium
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <p className="text-white/80 text-sm mt-6">✅ Descarga inmediata · ✅ Garantía 14 días · ✅ Desde 5.99€</p>
        </div>
      </section>
    </main>
  );
}
