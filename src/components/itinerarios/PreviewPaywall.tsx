import Link from 'next/link';
import { isFreeAccessActive } from '@/lib/guide-config';
import Icon from '@/components/Icon';

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
    <div className="my-16">
      <div className="relative max-w-3xl mx-auto bg-night bg-azulejo-pattern-gold rounded-2xl p-12 text-center overflow-hidden shadow-premium-lg">

        <div className="relative w-14 h-14 rounded-full bg-gold flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
          <Icon name="lock" size={26} className="text-night" />
        </div>

        <h3 className="relative font-display italic text-white text-3xl mb-4">
          Desbloquea las {totalStops - 3} paradas restantes
        </h3>

        <p className="relative text-white/70 text-sm mb-10 max-w-xl mx-auto">
          Esto es solo el preview. Obtén el itinerario completo con restaurantes verificados, coordenadas GPS y trucos locales.
        </p>

        <div className="relative grid md:grid-cols-3 gap-4 mb-10 text-left">
          {[
            { icon: 'restaurant' as const, title: 'Restaurantes Locales', desc: 'Probados en 2026' },
            { icon: 'photo_camera' as const, title: 'Spots de Fotos', desc: 'Mejores ángulos' },
            { icon: 'map' as const, title: 'Mapas Offline', desc: 'GPS exacto' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 p-4">
              <Icon name={item.icon} size={24} className="text-gold mb-2 block" />
              <p className="font-semibold text-white text-sm mb-0.5">{item.title}</p>
              <p className="text-white/50 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative mb-8">
          <p className="text-5xl font-bold text-white mb-1">{price}€</p>
          <p className="text-white/50 text-xs">Pago único · Acceso de por vida · Sin suscripciones</p>
        </div>

        <Link
          href={`/checkout/${productId}`}
          className="btn-primary relative inline-flex px-8 py-3"
        >
          <Icon name="lock_open" size={18} />
          Desbloquear guía completa
        </Link>

        <div className="relative flex flex-wrap justify-center gap-6 mt-8 text-xs text-white/50">
          <div className="flex items-center gap-1.5">
            <span className="text-gold">&#10003;</span>
            Descarga inmediata
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-gold">&#10003;</span>
            Garantía 48h
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-gold">&#10003;</span>
            Actualizado 2026
          </div>
        </div>
      </div>
    </div>
  );
}
