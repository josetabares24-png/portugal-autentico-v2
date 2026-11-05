'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const menus = [
  {
    title: 'Carta de comida',
    description: 'Ceviches, entradas, platos calientes y especialidades de Sinchi.',
    href: '/sinchi-carta-comida-2026.pdf',
    pages: '8 páginas',
  },
  {
    title: 'Carta de vinos',
    description: 'Vinos y referencias compartidas por el restaurante.',
    href: '/sinchi-carta-vinos-2026.pdf',
    pages: '1 página',
  },
] as const;

/**
 * La propuesta es una página HTML temporal del mismo origen.
 * Su altura se mide tras cargar y cuando cambia el contenido, para no
 * reservar 6.800px vacíos debajo del mapa en pantallas pequeñas.
 */
export function SinchiPreviewFrame() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const syncHeight = useCallback(() => {
    const frame = iframeRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc?.body) return;

    const height = Math.ceil(Math.max(
      doc.body.scrollHeight,
      doc.body.offsetHeight,
      doc.documentElement.scrollHeight,
    ));

    if (height > 0 && Math.abs(frame.offsetHeight - height) > 2) {
      frame.style.height = `${height}px`;
    }
  }, []);

  const handleLoad = useCallback(() => {
    cleanupRef.current?.();

    const frame = iframeRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc?.body) return;

    // Reducir la altura inicial permite obtener la longitud real del contenido.
    frame.style.height = '1px';
    let pending = 0;
    const schedule = () => {
      cancelAnimationFrame(pending);
      pending = requestAnimationFrame(syncHeight);
    };

    const observer = new ResizeObserver(schedule);
    observer.observe(doc.body);
    observer.observe(doc.documentElement);
    doc.defaultView?.addEventListener('resize', schedule);
    window.addEventListener('resize', schedule);

    const images = Array.from(doc.images);
    images.forEach((img) => img.addEventListener('load', schedule));
    void doc.fonts?.ready.then(schedule);
    const lateMeasurements = [250, 1000, 2500].map((ms) => window.setTimeout(schedule, ms));
    schedule();

    cleanupRef.current = () => {
      observer.disconnect();
      cancelAnimationFrame(pending);
      doc.defaultView?.removeEventListener('resize', schedule);
      window.removeEventListener('resize', schedule);
      images.forEach((img) => img.removeEventListener('load', schedule));
      lateMeasurements.forEach((id) => window.clearTimeout(id));
    };
  }, [syncHeight]);

  useEffect(() => () => cleanupRef.current?.(), []);

  return (
    <iframe
      ref={iframeRef}
      title="Propuesta editorial de Sinchi con fotografías autorizadas"
      src="/sinchi-propuesta-editorial.html"
      className="block w-full border-0"
      style={{ height: '1600px', display: 'block', width: '100%' }}
      loading="eager"
      onLoad={handleLoad}
      scrolling="no"
    />
  );
}

export function SinchiPdfCards() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <section id="cartas-sinchi" className="mx-auto max-w-5xl px-5 pb-16 pt-10 sm:px-8" aria-labelledby="cartas-sinchi-heading">
      <div className="mb-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#97794e]">Para consultar antes de ir</p>
        <h2 id="cartas-sinchi-heading" className="font-serif text-3xl font-semibold text-[#123e38] sm:text-4xl">Las cartas de Sinchi</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#4b514d]">
          Consulta la carta aquí, ábrela completa en tu navegador o descárgala en PDF. Los precios pueden cambiar; confirma con el restaurante.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {menus.map((menu) => (
          <article key={menu.href} className="overflow-hidden rounded-2xl border border-[#d9d4ca] bg-white shadow-sm">
            <div className="p-6 sm:p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#8e7660]">{menu.pages} · PDF</span>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#123e38]">{menu.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-relaxed text-[#4b514d]">{menu.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setOpenMenu((old) => old === menu.href ? null : menu.href)}
                  aria-expanded={openMenu === menu.href}
                  className="rounded-lg bg-[#00665f] px-5 py-3 text-sm font-semibold text-white hover:bg-[#004f4a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00665f]"
                >
                  {openMenu === menu.href ? 'Ocultar carta' : 'Ver carta aquí'}
                </button>
                <a
                  href={menu.href + '?ver=1'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[#00665f] px-5 py-3 text-sm font-semibold text-[#00564f] hover:bg-[#eff6f3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00665f]"
                >
                  Abrir PDF completo
                </a>
                <a
                  href={menu.href}
                  download
                  className="inline-flex items-center px-1 py-3 text-sm font-semibold underline underline-offset-4 text-[#254f4b]"
                >
                  Descargar PDF
                </a>
              </div>
            </div>
            {openMenu === menu.href && (
              <div className="border-t border-[#e4dfd5] bg-[#f8f6f1] p-3 sm:p-5">
                <iframe
                  title={`Vista de ${menu.title.toLowerCase()} de Sinchi`}
                  src={menu.href + '?ver=1'}
                  className="h-[520px] w-full rounded-lg border border-[#e4dfd5] bg-white sm:h-[680px]"
                  loading="lazy"
                />
                <p className="mt-3 text-xs leading-relaxed text-[#5e6662]">
                  Si tu móvil solo muestra una página, pulsa «Abrir PDF completo» para consultar todas las páginas.
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
