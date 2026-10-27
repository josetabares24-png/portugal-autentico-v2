import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lisboa desde el Tajo: un paseo en velero con Lisbon ByBoat | Vista previa',
  description: 'Paseos en velero por el Tajo con Lisbon ByBoat: opciones de día y atardecer, precios, recorrido, mapa de embarque y reservas.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const daytime = 'https://widgets.bokun.io/online-sales/2e607b56-835c-47ed-8b97-91056bb16516/experience/1163355';
const sunset = 'https://widgets.bokun.io/online-sales/2e607b56-835c-47ed-8b97-91056bb16516/experience/1163354';
const tours = 'https://www.lisbonbyboat.com/toursbyboat';
const meeting = 'https://maps.app.goo.gl/kFC7h23W5V6RbtJV9';
const photos = {
  hero: 'https://static.wixstatic.com/media/79e18a_44777309cb1942a7b12013161a29f581~mv2_d_3648_1824_s_2.jpg/v1/fill/w_980,h_490,al_c,q_85/79e18a_44777309cb1942a7b12013161a29f581~mv2_d_3648_1824_s_2.jpg',
  boat: 'https://static.wixstatic.com/media/79e18a_cd62c06ff9cd4d0c9b1ffb4a351f2ace.jpg/v1/fill/w_980,h_477,al_c,q_85/79e18a_cd62c06ff9cd4d0c9b1ffb4a351f2ace.jpg',
  sailing: 'https://static.wixstatic.com/media/79e18a_641fb43002a542c6aecb5235a20edcf6~mv2_d_4096_2304_s_2.jpg/v1/fill/w_980,h_551,al_c,q_85/79e18a_641fb43002a542c6aecb5235a20edcf6~mv2_d_4096_2304_s_2.jpg',
};

function BookingLink({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <a href={href} target="_blank" rel="sponsored nofollow noopener noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold transition-colors ${secondary ? 'border border-[#294d60] text-[#294d60] hover:bg-[#e8f0f2]' : 'bg-[#294d60] text-white hover:bg-[#173647]'}`}>{children}<span aria-hidden="true">↗</span></a>;
}

export default function LisbonByBoatPreview() {
  return (
    <main id="main-content" className="min-h-screen bg-[#faf9f5] text-[#223640]">
      <div className="border-b border-[#e4e2dc] bg-[#eeeae1] px-5 py-3 text-center text-xs font-medium tracking-wide text-[#465761]">
        VISTA PREVIA EDITORIAL · PENDIENTE DE APROBACIÓN · NO INDEXADA
      </div>
      <div className="mx-auto max-w-6xl px-5 pt-7 sm:px-8">
        <nav aria-label="Ruta de navegación" className="text-xs text-[#68777b]">
          <Link href="/" className="hover:underline">Inicio</Link> <span className="mx-2">/</span>
          <Link href="/blog" className="hover:underline">Blog</Link> <span className="mx-2">/</span>
          <span>Experiencias en Lisboa</span>
        </nav>
      </div>
      <header className="mx-auto max-w-4xl px-5 pb-9 pt-14 text-center sm:px-8">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#466b7b]">Experiencias · Lisboa desde el agua</p>
        <h1 className="mx-auto max-w-4xl font-serif text-[clamp(2.6rem,5.8vw,5.1rem)] leading-[1.08] tracking-[-0.035em] text-[#1e343e]">Lisboa desde el Tajo: un paseo en velero con Lisbon ByBoat</h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#607077]">Una manera diferente de contemplar Belém, el puente 25 de Abril y las colinas de la ciudad. Dos horas de navegación, con salidas de día o al atardecer.</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.12em] text-[#7b8789]"><span>Estaba en Lisboa</span><span aria-hidden="true">·</span><span>Colaboración comercial</span><span aria-hidden="true">·</span><span>5 min de lectura</span></div>
      </header>
      <figure className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Fotografías alojadas en la web oficial de Lisbon ByBoat; sustituir por los originales adjuntos antes de la publicación definitiva. */}
        <img src={photos.hero} alt="Velero navegando por el río Tajo con Lisboa al fondo" className="h-[300px] w-full object-cover sm:h-[490px]" loading="eager" />
        <figcaption className="mt-2 text-right text-[11px] text-[#879092]">Fotografía: Lisbon ByBoat</figcaption>
      </figure>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-24 pt-12 lg:grid-cols-[210px_minmax(0,740px)] lg:gap-16 lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-10 border-t border-[#c9d1d0] pt-5 text-sm text-[#627279]">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em]">En este artículo</p>
            <div className="flex flex-col gap-3">
              <a href="#experiencia" className="hover:text-[#214f65]">La experiencia</a>
              <a href="#opciones" className="hover:text-[#214f65]">Precios y paseos</a>
              <a href="#recorrido" className="hover:text-[#214f65]">Qué se ve</a>
              <a href="#embarque" className="hover:text-[#214f65]">Mapa y embarque</a>
              <a href="#consejos" className="hover:text-[#214f65]">Consejos prácticos</a>
            </div>
          </div>
        </aside>
        <article className="min-w-0 text-[16px] leading-[1.9] text-[#374b55]">
          <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.9]">Hay una Lisboa que se descubre caminando por sus calles y otra que aparece cuando nos alejamos de la orilla. Desde el Tajo, las colinas de Alfama, la silueta del puente 25 de Abril y los monumentos de Belém componen un paisaje distinto, lejos del ritmo de las zonas más concurridas.</p>
          <p className="mt-5">Navegar por el río permite contemplar esa otra perspectiva de la ciudad. Lisbon ByBoat propone hacerlo a bordo de un velero, en recorridos de dos horas que combinan vistas de Lisboa, comentarios sobre su historia y la posibilidad de elegir entre la luz del día y el atardecer.</p>

          <section id="experiencia" className="mt-12 scroll-mt-10">
            <h2 className="font-serif text-3xl leading-tight text-[#213943] sm:text-4xl">Lisboa a otro ritmo</h2>
            <p className="mt-5">La experiencia comienza en la zona de Belém, uno de los puntos más vinculados a la historia marítima portuguesa. Desde allí, el río abre una perspectiva amplia sobre la ribera y sus monumentos. A medida que avanza la navegación, los edificios se suceden sin necesidad de cambiar de transporte ni seguir una ruta a pie.</p>
            <p className="mt-5">Los paseos se realizan en veleros con una tripulación de dos personas. Las explicaciones pueden ofrecerse en español, un detalle especialmente práctico para quienes quieren conocer los lugares que van viendo sin depender de una audioguía.</p>
            <div className="my-9 grid grid-cols-2 gap-px border-y border-[#d8ddd9] bg-[#d8ddd9] sm:grid-cols-4">
              {[
                ['120 min','Duración'],
                ['Desde 45 €','Por persona'],
                ['2 bebidas','Incluidas'],
                ['Español','Explicaciones'],
              ].map(([value, label]) => <div key={label} className="bg-[#faf9f5] px-2 py-5 text-center"><p className="font-serif text-xl text-[#244759] sm:text-2xl">{value}</p><p className="mt-1 text-[10px] uppercase tracking-widest text-[#778487]">{label}</p></div>)}
            </div>
          </section>

          <section id="opciones" className="mt-14 scroll-mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#64808d]">Elegir el momento</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#213943] sm:text-4xl">¿De día o al atardecer?</h2>
            <p className="mt-5">Ambas experiencias duran dos horas e incluyen dos bebidas. La diferencia está en el momento de la salida y en la luz con la que se contempla la ciudad.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden border border-[#dce1dd] bg-white">
                <img src={photos.boat} alt="Embarcación de Lisbon ByBoat durante un paseo por Lisboa" loading="lazy" className="h-44 w-full object-cover"/>
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6d858e]">Luz de día</p>
                  <h3 className="mt-2 font-serif text-2xl text-[#213943]">Lisbon Sailing Tour</h3>
                  <p className="mt-3 text-sm leading-relaxed">Una buena elección para reconocer los monumentos, hacer fotografías y organizar la actividad durante el día.</p>
                  <div className="mt-5 border-t border-[#e5e9e6] pt-4"><p className="font-serif text-3xl text-[#213943]">45 € <span className="font-sans text-xs text-[#748187]">/ persona</span></p><p className="mt-1 text-xs text-[#718087]">2 horas · 2 bebidas</p></div>
                  <div className="mt-5"><BookingLink href={daytime}>Consultar disponibilidad</BookingLink></div>
                </div>
              </div>
              <div className="overflow-hidden border border-[#dce1dd] bg-white">
                <img src={photos.sailing} alt="Velero de Lisbon ByBoat navegando frente a la costa de Lisboa" loading="lazy" className="h-44 w-full object-cover"/>
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6d858e]">Última luz del día</p>
                  <h3 className="mt-2 font-serif text-2xl text-[#213943]">Sunset Sailing Tour</h3>
                  <p className="mt-3 text-sm leading-relaxed">La alternativa para disfrutar de las vistas del Tajo al final de la tarde, cuando cambia la luz sobre la ciudad.</p>
                  <div className="mt-5 border-t border-[#e5e9e6] pt-4"><p className="font-serif text-3xl text-[#213943]">60 € <span className="font-sans text-xs text-[#748187]">/ persona</span></p><p className="mt-1 text-xs text-[#718087]">2 horas · 2 bebidas</p></div>
                  <div className="mt-5"><BookingLink href={sunset}>Consultar disponibilidad</BookingLink></div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#738085]">Precios de referencia en octubre de 2026. Los horarios, plazas y condiciones definitivas se muestran durante la reserva.</p>
          </section>

          <section id="recorrido" className="mt-14 scroll-mt-10">
            <h2 className="font-serif text-3xl leading-tight text-[#213943] sm:text-4xl">Los monumentos vistos desde el río</h2>
            <p className="mt-5">El itinerario recorre la fachada histórica de Lisboa y permite observar algunos de sus puntos más conocidos desde el agua. Entre ellos destacan la Torre de Belém, el Padrão dos Descobrimentos, el MAAT, el puente 25 de Abril y el Cristo Rei, al otro lado del río.</p>
            <p className="mt-5">En dirección al centro, el paisaje cambia hacia la Praça do Comércio, Ribeira das Naus y las colinas de Alfama. Según la ruta y la visibilidad, también pueden distinguirse monumentos situados a mayor altura, como la Sé de Lisboa, el Castelo de São Jorge y el Panteão Nacional.</p>
            <div className="my-8 border-l-[3px] border-[#a4b9bd] bg-[#eff1ec] px-6 py-5 text-[15px] leading-relaxed"><strong className="text-[#254655]">Una aclaración útil:</strong> los monumentos se contemplan desde el barco. No se trata de una excursión con desembarcos o visitas guiadas al interior de los edificios.</div>
          </section>

          <section id="embarque" className="mt-14 scroll-mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#64808d]">Antes de salir</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#213943] sm:text-4xl">Dónde embarcar: Doca de Belém</h2>
            <p className="mt-5">El punto de encuentro habitual está en Doca de Belém, junto al Padrão dos Descobrimentos. Es una zona bien situada para combinar el paseo con una visita a Belém, pero conviene revisar la confirmación de la reserva: el lugar exacto puede cambiar según la embarcación o la experiencia contratada.</p>
            <div className="mt-6 overflow-hidden border border-[#d7ddda] bg-white">
              <iframe title="Mapa interactivo del embarque de Lisbon ByBoat en Doca de Belém" src="https://www.openstreetmap.org/export/embed.html?bbox=-9.215%2C38.690%2C-9.197%2C38.700&layer=mapnik&marker=38.694336%2C-9.20562" className="h-[350px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="flex flex-wrap items-center justify-between gap-4 p-5">
                <div><p className="text-sm font-semibold text-[#2a434e]">Doca de Belém</p><p className="text-xs text-[#758388]">Junto al Padrão dos Descobrimentos · Lisboa</p></div>
                <a href={meeting} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#285a71] underline underline-offset-4">Abrir indicaciones ↗</a>
              </div>
            </div>
          </section>

          <section id="consejos" className="mt-14 scroll-mt-10">
            <h2 className="font-serif text-3xl leading-tight text-[#213943] sm:text-4xl">Qué conviene saber antes de reservar</h2>
            <div className="mt-6 space-y-5">
              <div><h3 className="font-semibold text-[#294650]">Lleva una capa de abrigo</h3><p className="mt-1">En el agua puede sentirse más viento que en tierra, incluso en días soleados.</p></div>
              <div><h3 className="font-semibold text-[#294650]">Comprueba el punto de encuentro</h3><p className="mt-1">Consulta el correo de confirmación y llega con margen para localizar el embarque.</p></div>
              <div><h3 className="font-semibold text-[#294650]">Viajas con niños</h3><p className="mt-1">El paseo de día contempla descuentos infantiles. Revisa las edades y condiciones al reservar.</p></div>
              <div><h3 className="font-semibold text-[#294650]">Revisa las condiciones de la salida</h3><p className="mt-1">Los horarios, la meteorología, la accesibilidad y las políticas de cancelación pueden influir en tu elección.</p></div>
            </div>
          </section>

          <section className="mt-14 border-t border-[#cfd8d5] pt-10">
            <h2 className="font-serif text-3xl text-[#213943]">¿Merece la pena incluirlo en tu viaje?</h2>
            <p className="mt-5">Si ya tienes previsto recorrer Belém y el centro histórico, navegar por el Tajo añade una perspectiva que no se consigue desde los miradores. El paseo diurno encaja mejor si quieres aprovechar la luz para reconocer monumentos; el del atardecer, si prefieres reservar ese momento del día para disfrutar del paisaje.</p>
            <p className="mt-5">En ambos casos, la elección depende del horario, el presupuesto y el tipo de experiencia que busques. Puedes consultar las salidas disponibles directamente con Lisbon ByBoat.</p>
            <div className="mt-7 flex flex-wrap gap-3"><BookingLink href={tours}>Ver todos los paseos</BookingLink><BookingLink href={sunset} secondary>Reservar atardecer</BookingLink></div>
            <p className="mt-6 text-xs text-[#778589]">Contenido en colaboración comercial con Lisbon ByBoat. Este artículo es una guía informativa y no una reseña basada en una visita personal.</p>
          </section>
        </article>
      </div>
    </main>
  );
}
