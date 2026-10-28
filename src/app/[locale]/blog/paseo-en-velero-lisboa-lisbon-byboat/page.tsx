import LisbonByBoatStory from '@/components/blog/LisbonByBoatStory';
import type { Metadata } from 'next';
import { ArticleRelated } from '@/components/blog/ArticleRelated';
import { ArticleFooter } from '@/components/blog/ArticleFooter';
import type { Article } from '@/components/blog/article-types';
import { blogPosts } from '@/data/blog-posts';

const dayUrl = 'https://widgets.bokun.io/online-sales/2e607b56-835c-47ed-8b97-91056bb16516/experience/1163355';
const sunsetUrl = 'https://widgets.bokun.io/online-sales/2e607b56-835c-47ed-8b97-91056bb16516/experience/1163354';
const allToursUrl = 'https://www.lisbonbyboat.com/toursbyboat';
const mapUrl = 'https://maps.app.goo.gl/kFC7h23W5V6RbtJV9';
const heroImage = '/images/actividades/passeio-barco-rio-tejo-lisboa.webp';
const photos = {
  hero: 'https://static.wixstatic.com/media/79e18a_44777309cb1942a7b12013161a29f581~mv2_d_3648_1824_s_2.jpg/v1/fill/w_980,h_490,al_c,q_85/79e18a_44777309cb1942a7b12013161a29f581~mv2_d_3648_1824_s_2.jpg',
  boat: 'https://static.wixstatic.com/media/79e18a_cd62c06ff9cd4d0c9b1ffb4a351f2ace.jpg/v1/fill/w_980,h_477,al_c,q_85/79e18a_cd62c06ff9cd4d0c9b1ffb4a351f2ace.jpg',
  sailing: 'https://static.wixstatic.com/media/79e18a_641fb43002a542c6aecb5235a20edcf6~mv2_d_4096_2304_s_2.jpg/v1/fill/w_980,h_551,al_c,q_85/79e18a_641fb43002a542c6aecb5235a20edcf6~mv2_d_4096_2304_s_2.jpg',
};
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
    { tipo: 'parrafo', texto: 'Navegar por el río permite contemplar esa otra perspectiva de la ciudad. Lisbon ByBoat propone recorridos de dos horas en velero, con guía multilingüe y explicaciones en español disponibles. Hay salidas de día y al atardecer.' },
    { tipo: 'subtitulo', texto: 'Cómo es el paseo en velero por Lisboa' },
    { tipo: 'parrafo', texto: 'La experiencia parte de la zona de Belém, estrechamente vinculada a la historia marítima portuguesa. Desde el agua, los monumentos de la ribera se ven sin las prisas de una visita a pie. La tripulación está formada por dos personas y ofrece explicaciones personalizadas en varios idiomas.' },
    { tipo: 'parrafo', texto: 'Las fichas de reserva indican español, inglés y portugués para ambos paseos, y también francés para el diurno. Confirma el idioma de tu salida al reservar. Si necesitas francés al atardecer, consúltalo con la empresa antes de reservar.' },
    { tipo: 'parrafo', texto: 'Las dos experiencias principales duran 120 minutos e incluyen dos bebidas por persona. Se navega en pequeños grupos; los horarios y la disponibilidad se consultan al reservar.' },
    { tipo: 'subtitulo', texto: 'Qué paseo elegir: de día o al atardecer' },
    { tipo: 'tabla', texto: 'Comparación de los dos paseos de Lisbon ByBoat', columnas: ['Experiencia', 'Duración', 'Precio por persona', 'Incluye'], filas: [
      ['Lisbon Sailing Tour (día)', '120 minutos', '45 €', 'Dos bebidas y guía multilingüe (español disponible)'],
      ['Lisbon Sunset Sailing Tour', '120 minutos', '60 €', 'Dos bebidas y guía multilingüe (español disponible)'],
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

const relatedPosts = ['belem-barrio-guia', 'lisboa-en-pareja', 'como-moverse-por-lisboa'].flatMap((id) => {
  const post = blogPosts.find((post) => post.id === id);
  return post ? [post] : [];
});

export const metadata: Metadata = {
  title: 'Lisboa desde el Tajo: paseo en velero con Lisbon ByBoat | Vista previa',
  description: article.descripcion,
  alternates: { canonical: 'https://estabaenlisboa.com/blog/paseo-en-velero-lisboa-lisbon-byboat' },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function LisbonByBoatArticle() {
  return (
    <main id="main-content" className="article-page article-v2 bg-background-light">
      <LisbonByBoatStory article={article} photos={photos} links={{ day: dayUrl, sunset: sunsetUrl, all: allToursUrl, map: mapUrl }} />
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <ArticleRelated posts={relatedPosts} />
        <div className="article-compact-ending mx-auto mt-10 max-w-2xl">
          <ArticleFooter authorName="José Tabares" />
        </div>
      </div>
    </main>
  );
}
