import type { Metadata } from 'next';
import { ArticleHero } from '@/components/blog/ArticleHero';
import { ArticleBody } from '@/components/blog/ArticleBody';
import { ArticleToc } from '@/components/blog/ArticleToc';
import { ArticleRelated } from '@/components/blog/ArticleRelated';
import { ArticleFooter } from '@/components/blog/ArticleFooter';
import type { Article } from '@/components/blog/article-types';
import { slugify } from '@/components/blog/article-utils';
import { blogPosts } from '@/data/blog-posts';

const dayUrl = 'https://widgets.bokun.io/online-sales/2e607b56-835c-47ed-8b97-91056bb16516/experience/1163355';
const sunsetUrl = 'https://widgets.bokun.io/online-sales/2e607b56-835c-47ed-8b97-91056bb16516/experience/1163354';
const allToursUrl = 'https://www.lisbonbyboat.com/toursbyboat';
const mapUrl = 'https://maps.app.goo.gl/kFC7h23W5V6RbtJV9';
const heroImage = '/images/actividades/passeio-barco-rio-tejo-lisboa.webp';
const article: Article = {
  titulo: 'Lisboa desde el Tajo: un paseo en velero con Lisbon ByBoat',
  descripcion: 'Cómo descubrir Lisboa desde el río Tajo: dos paseos en velero de dos horas, precios, monumentos, embarque en Belém y reservas.',
  subtitulo: 'Belém, el puente 25 de Abril y las colinas de Lisboa vistos desde el río. Qué incluye la experiencia y cómo elegir entre navegar de día o al atardecer.',
  imagen: heroImage,
  imageAlt: 'Paseo en barco por el río Tajo, en Lisboa',
  categoria: 'Guías',
  fecha: '27 Oct 2026',
  minutos: 5,
  contenido: [
    { tipo: 'parrafo', texto: 'Hay una Lisboa que se descubre caminando por sus calles y otra que aparece cuando nos alejamos de la orilla. Desde el Tajo, las colinas de Alfama, la silueta del puente 25 de Abril y los monumentos de Belém componen un paisaje diferente, lejos del ritmo de las zonas más concurridas.' },
    { tipo: 'parrafo', texto: 'Navegar por el río permite contemplar esa otra perspectiva de la ciudad. Lisbon ByBoat propone recorridos de dos horas en velero, con comentarios sobre Lisboa en español y dos opciones de horario: durante el día o al atardecer.' },
    { tipo: 'subtitulo', texto: 'Cómo es el paseo en velero por Lisboa' },
    { tipo: 'parrafo', texto: 'La experiencia parte de la zona de Belém, estrechamente vinculada a la historia marítima portuguesa. Desde el agua, los monumentos de la ribera se ven sin las prisas de una visita a pie. La tripulación está formada por dos personas y ofrece explicaciones personalizadas en español.' },
    { tipo: 'parrafo', texto: 'Las dos experiencias principales duran 120 minutos e incluyen dos bebidas por persona. Se navega en pequeños grupos; los horarios y la disponibilidad se consultan al reservar.' },
    { tipo: 'subtitulo', texto: 'Qué paseo elegir: de día o al atardecer' },
    { tipo: 'tabla', texto: 'Comparación de los dos paseos de Lisbon ByBoat', columnas: ['Experiencia', 'Duración', 'Precio por persona', 'Incluye'], filas: [
      ['Lisbon Sailing Tour (día)', '120 minutos', '45 €', 'Dos bebidas y explicaciones en español'],
      ['Lisbon Sunset Sailing Tour', '120 minutos', '60 €', 'Dos bebidas y explicaciones en español'],
    ] },
    { tipo: 'parrafo', texto: 'El paseo diurno resulta práctico para reconocer los monumentos y fotografiar la ciudad con luz natural. El de atardecer ofrece una experiencia más pausada, con los cambios de luz sobre el Tajo. Los precios son orientativos a octubre de 2026 y pueden variar según las condiciones de reserva.' },
    { tipo: 'subtitulo', texto: 'Qué monumentos se ven desde el río' },
    { tipo: 'parrafo', texto: 'La navegación recorre la fachada histórica de Lisboa. Entre los lugares que pueden contemplarse desde el agua están la Torre de Belém, el Padrão dos Descobrimentos, el MAAT, el puente 25 de Abril y el Cristo Rei, en la otra orilla.' },
    { tipo: 'parrafo', texto: 'Hacia el centro aparecen la Praça do Comércio, Ribeira das Naus y las colinas de Alfama. Según la ruta y las condiciones de visibilidad, también pueden distinguirse la Sé de Lisboa, el Castelo de São Jorge y el Panteão Nacional.' },
    { tipo: 'nota', texto: 'Es un paseo panorámico en barco: no incluye desembarcos ni visitas al interior de los monumentos. La ruta concreta puede depender de las condiciones de navegación.' },
    { tipo: 'subtitulo', texto: 'Dónde embarcar en Doca de Belém' },
    { tipo: 'parrafo', texto: 'El punto de encuentro habitual es Doca de Belém, junto al Padrão dos Descobrimentos. Conviene comprobar la dirección exacta en la confirmación de reserva: la empresa utiliza diferentes puntos de embarque según la embarcación.' },
    { tipo: 'subtitulo', texto: 'Consejos antes de reservar' },
    { tipo: 'lista', items: [
      'Lleva una prenda de abrigo ligera: en el agua suele sentirse más viento que en tierra.',
      'Comprueba el lugar y la hora de embarque indicados en la confirmación.',
      'Si viajas con niños, revisa los descuentos y los requisitos de edad del paseo diurno.',
      'Consulta la política de cancelación y las condiciones meteorológicas antes de pagar.',
    ] },
    { tipo: 'subtitulo', texto: '¿Merece la pena incluirlo en tu viaje?' },
    { tipo: 'parrafo', texto: 'Si ya tienes previsto recorrer Belém y el centro histórico, navegar por el Tajo permite ver lugares conocidos desde una perspectiva que no ofrecen los miradores. Elige el paseo de día si quieres reconocer mejor los monumentos, o el del atardecer si prefieres reservar ese momento para disfrutar del paisaje.' },
  ],
};

const headings = article.contenido.filter((block) => block.tipo === 'subtitulo' && block.texto).map((block) => ({
  title: block.texto!,
  id: slugify(block.texto!),
}));
const relatedPosts = blogPosts.filter((post) => post.id !== 'paseo-en-velero-lisboa-lisbon-byboat' && /bel[eé]m|barco|tajo|crucero|actividades/i.test(post.id + ' ' + post.titulo)).slice(0, 3);

export const metadata: Metadata = {
  title: 'Lisboa desde el Tajo: paseo en velero con Lisbon ByBoat | Vista previa',
  description: article.descripcion,
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

function TourLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="sponsored nofollow noopener noreferrer" className="inline-flex items-center gap-2 underline underline-offset-4 font-semibold text-terracotta hover:opacity-80">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function LisbonByBoatArticle() {
  return (
    <main id="main-content" className="article-page bg-background-light">
      <ArticleHero
        article={article}
        authorName="José Tabares"
        heroImage={heroImage}
        heroImageAlt={article.imageAlt}
        isEditorialV2={true}
      />
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-[1fr,320px] gap-10">
          <div className="min-w-0">
            <div className="article-reading text-sm mb-6">
              <p className="text-text-muted">Colaboración comercial con Lisbon ByBoat · Vista previa pendiente de aprobación</p>
            </div>
            <ArticleBody
              article={article}
              faqs={[]}
              isEditorialV2={true}
              photos={{}}
              seoDescription={article.descripcion}
              takeaways={[]}
            />
            <section className="article-surface mt-8" aria-label="Reservas de Lisbon ByBoat">
              <div className="article-content article-reading">
                <h2 id="reservas" className="scroll-mt-28">Consultar disponibilidad y reservar</h2>
                <p>Los dos paseos se reservan directamente con Lisbon ByBoat. Puedes comprobar las fechas, las condiciones y el precio final antes de confirmar.</p>
                <ul className="article-list">
                  <li><TourLink href={dayUrl}>Lisbon Sailing Tour · desde 45 €</TourLink></li>
                  <li><TourLink href={sunsetUrl}>Lisbon Sunset Sailing Tour · desde 60 €</TourLink></li>
                  <li><TourLink href={allToursUrl}>Ver todas las experiencias</TourLink></li>
                </ul>
                <h2>Mapa del punto de encuentro</h2>
                <p>La zona de embarque habitual está junto al Padrão dos Descobrimentos. Comprueba siempre la ubicación exacta indicada en tu reserva.</p>
                <div className="overflow-hidden rounded-md border border-border-soft">
                  <iframe
                    title="Mapa interactivo de Doca de Belém, Lisboa"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-9.215%2C38.690%2C-9.197%2C38.700&layer=mapnik&marker=38.694336%2C-9.20562"
                    className="w-full h-[320px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p><a href={mapUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-terracotta">Abrir indicaciones en Google Maps ↗</a></p>
                <p className="text-sm text-text-muted">Este contenido es una colaboración comercial. No constituye una reseña basada en una experiencia personal a bordo.</p>
              </div>
            </section>
          </div>
          <ArticleToc headings={[...headings, { title: 'Consultar disponibilidad y reservar', id: 'reservas' }]} />
        </div>
        <ArticleRelated posts={relatedPosts} />
        <div className="article-compact-ending max-w-2xl mx-auto mt-10">
          <ArticleFooter authorName="José Tabares" />
        </div>
      </div>
    </main>
  );
}
