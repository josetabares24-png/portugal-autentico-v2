import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { hasAccess } from '@/lib/access';
import Paywall from '@/components/Paywall';
import PreviewContenido from '@/components/PreviewContenido';
import Garantia48h from '@/components/Garantia48h';
import Image from 'next/image';
import Link from 'next/link';

// TEMPLATE PREMIUM - Todas las guías con conversión optimizada

const GUIDE_ID = 'lisboa-1-dia'; // ← Cambiar por cada guía

const GUIDE_DATA = {
  'lisboa-1-dia': {
    titulo: 'Lisboa en 1 Día',
    subtitulo: 'Lo Esencial',
    precio: '3.99',
    paradas: 8,
    imagen: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1600',
    descripcion: 'El itinerario perfecto para descubrir lo imprescindible de Lisboa en un día impecablemente organizado.'
  },
  'lisboa-2-dias': {
    titulo: 'Lisboa en 2 Días',
    subtitulo: 'Experiencia Completa',
    precio: '5.99',
    paradas: 15,
    imagen: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1600',
    descripcion: 'Explora Lisboa sin prisas, incluyendo barrios auténticos, miradores secretos y experiencias locales.'
  },
  'lisboa-3-dias': {
    titulo: 'Lisboa en 3 Días',
    subtitulo: 'Inmersión Total',
    precio: '7.99',
    paradas: 20,
    imagen: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1600',
    descripcion: 'Vive Lisboa como residente: mercados tradicionales, barrios escondidos y rincones que solo conocen los locales.'
  },
  'lisboa-fotografia': {
    titulo: 'Lisboa Fotográfico',
    subtitulo: 'Los Mejores Encuadres',
    precio: '4.99',
    paradas: 12,
    imagen: 'https://images.unsplash.com/photo-1526048598645-62b31f82c0c5?q=80&w=1600',
    descripcion: 'Ruta fotográfica diseñada para capturar Lisboa en su mejor luz: golden hour, composiciones perfectas y spots secretos.'
  },
  'lisboa-familia': {
    titulo: 'Lisboa en Familia',
    subtitulo: 'Con Niños',
    precio: '6.99',
    paradas: 10,
    imagen: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600',
    descripcion: 'Itinerario familiar con oceanario, parques infantiles, museos interactivos y restaurantes kids-friendly.'
  },
  'lisboa-romantico': {
    titulo: 'Lisboa Romántico',
    subtitulo: 'Para Parejas',
    precio: '5.99',
    paradas: 8,
    imagen: 'https://images.unsplash.com/photo-1598084991519-c90900bc9df0?q=80&w=1600',
    descripcion: 'Los rincones más románticos de Lisboa: atardeceres en miradores, cenas íntimas y paseos al anochecer.'
  },
  'lisboa-foodie': {
    titulo: 'Lisboa Foodie',
    subtitulo: 'Ruta Gastronómica',
    precio: '6.99',
    paradas: 12,
    imagen: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600',
    descripcion: 'Tour culinario por los mejores mercados, tabernas centenarias, pastelerías históricas y restaurantes de autor.'
  }
};

export default async function GuiaPage() {
  const user = await currentUser();
  const userId = user?.id;
  
  // Verificar acceso
  const userHasAccess = userId ? await hasAccess(userId, GUIDE_ID) : false;

  const guia = GUIDE_DATA[GUIDE_ID as keyof typeof GUIDE_DATA];

  // Si no tiene acceso, mostrar página optimizada de conversión
  if (!userHasAccess) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero con imagen */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src={guia.imagen}
            alt={guia.titulo}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/80"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                <span className="text-xs md:text-sm font-medium text-white tracking-wide">{guia.subtitulo}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {guia.titulo}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                {guia.descripcion}
              </p>
            </div>
          </div>
        </section>

        {/* NUEVO: Preview de contenido - muestra valor ANTES de comprar */}
        <PreviewContenido guideId={GUIDE_ID} />

        {/* NUEVO: Garantía 48h - elimina riesgo de compra */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <Garantia48h />
          </div>
        </div>

        {/* Paywall - ahora después de mostrar todo el valor */}
        <Paywall
          guideId={GUIDE_ID}
          guideName={guia.titulo}
          price={guia.precio}
          remainingStops={guia.paradas}
        />
      </div>
    );
  }

  // Si tiene acceso, mostrar contenido completo
  return (
    <div className="min-h-screen bg-white">
      {/* Hero desbloqueado */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src={guia.imagen}
          alt={guia.titulo}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/70"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="inline-block px-4 py-2 bg-green-500/90 backdrop-blur-sm rounded-full mb-4">
              <span className="text-sm font-bold text-white">✓ DESBLOQUEADA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
              {guia.titulo}
            </h1>
          </div>
        </div>
      </section>

      {/* Contenido de la guía */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Box de confirmación */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border-2 border-green-200 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-2xl">check_circle</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    ¡Guía Desbloqueada!
                  </h2>
                  <p className="text-slate-700" style={{ fontFamily: 'Georgia, serif' }}>
                    Tienes acceso completo a este itinerario con {guia.paradas} paradas verificadas.
                  </p>
                </div>
              </div>
            </div>

            {/* Contenido placeholder */}
            <div className="prose prose-lg max-w-none">
              <h2 style={{ fontFamily: 'Georgia, serif' }}>Itinerario Completo</h2>
              <p style={{ fontFamily: 'Georgia, serif' }}>
                [CONTENIDO REAL DE LA GUÍA AQUÍ - {guia.paradas} paradas detalladas con horarios, precios, coordenadas GPS y tips de local]
              </p>
              
              <h3 style={{ fontFamily: 'Georgia, serif' }}>Parada 1: Ejemplo</h3>
              <p style={{ fontFamily: 'Georgia, serif' }}>
                Descripción detallada de la parada, horarios, precios, tips de local, coordenadas GPS...
              </p>

              <h3 style={{ fontFamily: 'Georgia, serif' }}>Restaurantes Recomendados</h3>
              <p style={{ fontFamily: 'Georgia, serif' }}>
                Lista de restaurantes con direcciones exactas, precios estimados, especialidades, horarios...
              </p>
            </div>

            {/* CTA otras guías */}
            <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                ¿Quieres más itinerarios?
              </h3>
              <Link
                href="/itinerarios"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition-all"
              >
                <span>Ver todas las guías</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
