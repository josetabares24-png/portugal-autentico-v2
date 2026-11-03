import type { ReactNode } from 'react';

export type RestaurantMenuItem = {
  name: string;
  price: string;
  description?: string;
  detail?: string;
};

export type RestaurantMenuGroup = {
  title?: string;
  items: RestaurantMenuItem[];
};

export type RestaurantMenuSection = {
  id: string;
  title: string;
  introduction?: string;
  groups: RestaurantMenuGroup[];
};

type RestaurantMenuProps = {
  restaurantName: string;
  sections: RestaurantMenuSection[];
  verifiedOn: string;
  bookingUrl: string;
  bookingLabel?: string;
  children?: ReactNode;
};

const countItems = (section: RestaurantMenuSection) =>
  section.groups.reduce((total, group) => total + group.items.length, 0);

/**
 * Carta editorial reutilizable en colaboraciones con restaurantes.
 * Acordeones HTML nativos: navegación por teclado, SEO en texto real,
 * sin dependencias de cliente ni imágenes de menús difíciles de ampliar.
 */
export function RestaurantMenu({
  restaurantName,
  sections,
  verifiedOn,
  bookingUrl,
  bookingLabel = 'Reservar en la web oficial',
  children,
}: RestaurantMenuProps) {
  const totalItems = sections.reduce((sum, section) => sum + countItems(section), 0);

  return (
    <section
      className="not-prose my-8 overflow-hidden border border-[#D9CCBC] bg-[#FFFCF7] text-[#352E28] shadow-[0_16px_35px_-31px_rgba(42,30,18,0.65)] sm:my-10"
      aria-label={'Carta completa y precios de ' + restaurantName}
    >
      <div className="border-b border-[#D9CCBC] bg-[#F3EEE6] px-5 py-7 sm:px-8 sm:py-9">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#846B54]">La carta · {restaurantName}</span>
          <span className="text-[11px] text-[#786E64]">{totalItems} opciones · {sections.length} categorías</span>
        </div>
        <h3 className="mb-2 mt-4 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-[#352E28] sm:text-[2.15rem]">
          Descubre el menú completo
        </h3>
        <p className="m-0 max-w-xl text-[14px] leading-relaxed text-[#675D53] sm:text-[15px]">
          Toca una categoría para ver los platos, ingredientes y precios. Sin archivos pequeños ni tener que hacer zoom.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 border-t border-[#D9CCBC] pt-4 text-xs leading-relaxed text-[#75695E]">
          <span>Precios en euros, IVA incluido</span>
          <span>Fuente: carta facilitada por {restaurantName}</span>
        </div>
      </div>

      <div className="divide-y divide-[#E2D8CB]">
        {sections.map((section, index) => {
          const count = countItems(section);
          return (
            <details key={section.id} open={index === 1} className="group bg-[#FFFCF7] open:bg-[#FEFBF5]">
              <summary className="flex min-h-[74px] cursor-pointer list-none items-center gap-3 px-5 py-4 transition-colors hover:bg-[#F8F2E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#7E6049] sm:gap-5 sm:px-8 [&::-webkit-details-marker]:hidden">
                <span aria-hidden="true" className="w-8 shrink-0 font-display text-xl italic text-[#B7A48F] sm:w-10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[19px] font-semibold leading-tight text-[#352E28] sm:text-[23px]">
                    {section.title}
                  </span>
                  <span className="mt-1 block text-[12px] text-[#89796A]">{count} {count === 1 ? 'opción' : 'opciones'}</span>
                </span>
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#CBB7A1] text-xl font-light leading-none text-[#745943] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-5 pb-7 sm:px-8 sm:pb-9">
                {section.introduction && <p className="m-0 border-l-2 border-[#B79B80] pl-4 text-[13px] leading-relaxed text-[#76685A]">{section.introduction}</p>}
                <div className="mt-3 divide-y divide-[#E9E0D4]">
                  {section.groups.map((group, groupIndex) => (
                    <div key={group.title ?? groupIndex} className="py-2 first:pt-0 last:pb-0">
                      {group.title && <h4 className="mb-2 mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#956F51] first:mt-2">{group.title}</h4>}
                      <dl className="m-0">
                        {group.items.map((item, itemIndex) => (
                          <div key={section.id + '-' + groupIndex + '-' + itemIndex} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 border-b border-[#EDE6DC] py-3.5 last:border-b-0 sm:gap-x-6">
                            <dt className="min-w-0">
                              <span className="block text-[14px] font-semibold leading-snug text-[#342D26] sm:text-[15px]">{item.name}</span>
                              {item.description && <span className="mt-1 block text-[12px] leading-relaxed text-[#776B60] sm:text-[13px]">{item.description}</span>}
                              {item.detail && <span className="mt-1 block text-[11px] italic leading-relaxed text-[#927F6F]">{item.detail}</span>}
                            </dt>
                            <dd className="m-0 whitespace-nowrap pt-[1px] text-right font-display text-[16px] font-semibold tabular-nums text-[#775639] sm:text-lg">{item.price}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          );
        })}
      </div>

      <footer className="border-t border-[#D9CCBC] bg-[#F3EEE6] px-5 py-6 sm:px-8">
        <p className="m-0 text-[12px] leading-relaxed text-[#786C60]">
          Carta recibida en {verifiedOn}. Los precios, platos y disponibilidades pueden cambiar.
          Comunica las alergias o intolerancias al restaurante antes de pedir.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#3A352F] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#5B4537] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7E6049] sm:w-auto"
        >
          {bookingLabel}
        </a>
        {children}
      </footer>
    </section>
  );
}
