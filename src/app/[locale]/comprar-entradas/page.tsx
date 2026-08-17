import Link from 'next/link';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { BookingProductBlock } from '@/components/afiliados/BookingProductBlock';
import { HUB_PRODUCTS, type BookingCategory } from '@/data/bookings';

/*
 * Hub transaccional.
 *
 * Es la única página de la web donde el módulo de reserva manda sobre el
 * texto, y por eso está separada de `/actividades`: allí decidimos qué vale
 * la pena, aquí se compra. Quien ya sabe lo que quiere no tiene por qué
 * pasar por aquí; las fichas llevan su propio botón directo.
 *
 * Página de servidor a propósito: no hay estado ni filtros, así que no hace
 * falta llevar nada de esto al cliente. Los widgets sí son de cliente, pero
 * eso ya lo resuelve el componente del widget.
 *
 * Qué productos salen, en qué categoría y con qué texto se decide en
 * `src/data/bookings.ts`, no aquí.
 */

/**
 * Cada sección lleva su propia entradilla. Es lo que evita que esto sea una
 * lista de widgets con un titular: quien llega buscando entradas necesita
 * saber qué conviene reservar por adelantado y qué no.
 */
const CATEGORIES: {
  id: BookingCategory;
  anchor: string;
  title: string;
  intro: string;
}[] = [
  {
    id: 'entradas',
    anchor: 'entradas-y-atracciones',
    title: 'Entradas y atracciones en Lisboa',
    intro:
      'Los sitios donde la cola es el verdadero precio de la entrada. En Lisboa casi todos los monumentos se pueden pagar en taquilla, así que reservar sólo tiene sentido cuando te ahorra tiempo o te garantiza la hora: es el caso de estos dos, sobre todo en fin de semana y en verano.',
  },
  {
    id: 'experiencias',
    anchor: 'experiencias',
    title: 'Experiencias en Lisboa',
    intro:
      'Aquí no compras el acceso a un sitio, compras un rato con alguien que lo explica o lo enseña. Son planes de media tarde que funcionan mejor reservados, porque los grupos son pequeños y las plazas se acaban.',
  },
  {
    id: 'excursiones',
    anchor: 'excursiones-desde-lisboa',
    title: 'Excursiones desde Lisboa',
    intro:
      'Salir de la ciudad por el día. Todo esto se puede hacer en transporte público y sale bastante más barato, que es lo que explicamos en las guías; una excursión organizada compra otra cosa, que es no tener que pensar en horarios.',
  },
];

export default function ComprarEntradasPage() {
  return (
    <main id="main-content">
      {/* Cabecera. Un único h1 en toda la página. */}
      <section className="bg-background-light pt-20 pb-12 border-b border-border-soft">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-3">Reservas</p>
          <h1 className="font-display italic text-text-main text-4xl md:text-5xl leading-tight mb-5">
            Comprar entradas en Lisboa
          </h1>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Aquí reunimos las entradas, experiencias y excursiones de Lisboa que
              merecen reservarse por adelantado. No es un catálogo: son las que
              recomendaríamos, con el precio y la disponibilidad reales de cada día.
            </p>
            <p>
              Buena parte de lo que hay que ver en Lisboa no necesita entrada anticipada, y
              eso lo contamos en{' '}
              <Link href="/actividades" className="text-terracotta underline underline-offset-2 hover:no-underline">
                Actividades
              </Link>
              , donde están también los miradouros y los planes gratis. Reserva sólo cuando
              te ahorre una cola o te asegure una plaza.
            </p>
          </div>

          <AffiliateDisclosure className="mt-8" />
        </div>
      </section>

      {/* Índice, para no obligar a bajar buscando. */}
      <section className="bg-background-light py-6 border-b border-border-soft">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Secciones de esta página">
            <ul className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <li key={c.anchor}>
                  <a
                    href={`#${c.anchor}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-border-soft bg-white px-4 text-xs font-semibold uppercase tracking-widest text-text-secondary transition-colors hover:border-terracotta hover:text-terracotta"
                  >
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {CATEGORIES.map((category, i) => {
        const products = HUB_PRODUCTS.filter((p) => p.category === category.id);
        if (products.length === 0) return null;

        return (
          <section
            key={category.id}
            id={category.anchor}
            className={`bg-background-light py-12 md:py-16 scroll-mt-24 ${
              i < CATEGORIES.length - 1 ? 'border-b border-border-soft' : ''
            }`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="font-display italic text-text-main text-2xl md:text-3xl leading-tight mb-3">
                {category.title}
              </h2>
              <p className="max-w-2xl text-text-secondary leading-relaxed mb-8">
                {category.intro}
              </p>

              {/*
                Dos columnas y no tres. A tres, en un contenedor de 1152 px, cada
                widget se queda en ~347 px, y ahí los títulos largos de
                GetYourGuide se parten en tres líneas. A dos hay ~544 px y la
                tarjeta respira. La legibilidad manda sobre el número de
                columnas, y además ninguna categoría pasa de tres productos.
              */}
              <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
                {products.map((product) => (
                  <BookingProductBlock key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Cierre editorial: recordar que hay mucho que hacer sin pagar entrada. */}
      <section className="relative bg-night bg-azulejo-pattern-gold py-20 overflow-hidden">
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-white text-3xl md:text-4xl mb-4">
            Lisboa se disfruta bastante sin pagar entrada
          </h2>
          <p className="text-white/60 mb-8">
            Los miradouros, Alfama, el Tajo al atardecer y las mejores tascas no llevan
            taquilla. Están en el catálogo de actividades, con el precio real de cada una y
            un tip de ahorro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/actividades" className="btn-primary px-8 py-3">
              Ver las 20 actividades
            </Link>
            <Link href="/free-tours-lisboa" className="btn-ghost-light px-8 py-3">
              Comparar free tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
