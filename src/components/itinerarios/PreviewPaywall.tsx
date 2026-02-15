import Link from 'next/link';
import { isFreeAccessActive, FREE_ACCESS_UNTIL } from '@/lib/guide-config';

interface PreviewPaywallProps {
  productId: string;
  price: number;
  productName: string;
  totalStops: number;
}

export function PreviewPaywall({ productId, price, productName, totalStops }: PreviewPaywallProps) {
  if (isFreeAccessActive()) {
    return null;
  }

  return (
    <div className="relative my-16">
      {/* Blur effect on timeline */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/60 z-10 rounded-3xl"></div>

      {/* Paywall Card */}
      <div className="relative z-20 max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl border-4 border-primary">

        {/* Lock Icon */}
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-white text-5xl">lock</span>
        </div>

        {/* Headline */}
        <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
          Desbloquea las {totalStops - 3} paradas restantes
        </h3>

        {/* Subheading */}
        <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
          Esto es solo el preview. Obtén el itinerario completo con restaurantes verificados, coordenadas GPS y trucos locales.
        </p>

        {/* What's Included */}
        <div className="grid md:grid-cols-3 gap-4 mb-10 text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <span className="material-symbols-outlined text-primary text-3xl mb-2 block">restaurant</span>
            <h4 className="font-bold text-white text-sm mb-1">Restaurantes Locales</h4>
            <p className="text-white/70 text-xs">Probados en 2026</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <span className="material-symbols-outlined text-primary text-3xl mb-2 block">photo_camera</span>
            <h4 className="font-bold text-white text-sm mb-1">Spots de Fotos</h4>
            <p className="text-white/70 text-xs">Mejores ángulos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <span className="material-symbols-outlined text-primary text-3xl mb-2 block">map</span>
            <h4 className="font-bold text-white text-sm mb-1">Mapas Offline</h4>
            <p className="text-white/70 text-xs">GPS exacto</p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="text-6xl font-black text-white mb-2">
            {price}€
          </div>
          <p className="text-white/70">Pago único · Acceso de por vida · Sin suscripciones</p>
        </div>

        {/* CTA Button */}
        <Link
          href={`/checkout/${productId}`}
          className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all group"
        >
          <span className="material-symbols-outlined text-2xl">lock_open</span>
          Desbloquear Guía Completa
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-green-400">check_circle</span>
            <span>Descarga inmediata</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-yellow-400">workspace_premium</span>
            <span>Garantía 48h</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400">update</span>
            <span>Actualizado 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
