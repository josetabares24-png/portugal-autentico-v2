'use client';

import { useUser, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import Icon from '@/components/Icon';

interface PaywallProps {
  guideId: string;
  guideName: string;
  price: string;
  remainingStops: number;
}

export default function Paywall({ guideId, guideName, price, remainingStops }: PaywallProps) {
  const { isSignedIn } = useUser();

  return (
    <div className="relative">
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white backdrop-blur-sm z-10 rounded-3xl"></div>
      
      {/* Content teaser (blurred) */}
      <div className="blur-sm pointer-events-none py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {[...Array(remainingStops)].map((_, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="h-24 bg-slate-100 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Paywall card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-2xl px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-primary">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-orange-500 mx-auto mb-6 flex items-center justify-center">
              <Icon name="lock" size={48} className="text-white" />
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Desbloquea el Contenido Completo
            </h3>

            <p className="text-xl text-slate-600 mb-6">
              <strong>{guideName}</strong> tiene <span className="text-primary font-bold">{remainingStops} paradas más</span> con:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              {[
                'Itinerarios detallados hora por hora',
                'Restaurantes verificados con precios',
                'Coordenadas GPS exactas',
                'Tips de local para evitar turistas',
                'Mapa offline descargable',
                'Actualizaciones gratuitas de por vida'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Icon name="check_circle" size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="text-5xl font-black text-primary">{price}</div>
                <div className="text-left">
                  <div className="text-sm text-slate-600">Pago único</div>
                  <div className="text-xs text-slate-500">Acceso de por vida</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-1">
                  <Icon name="check_circle" size={14} />
                  <span>Sin subscripción</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="verified" size={14} />
                  <span>Garantía 48h</span>
                </div>
              </div>
            </div>

            {!isSignedIn ? (
              <div className="space-y-4">
                <SignInButton mode="modal">
                  <button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <Icon name="login" size={24} />
                    <span>Inicia Sesión para Desbloquear</span>
                  </button>
                </SignInButton>
                <p className="text-sm text-slate-500">
                  Necesitas crear una cuenta (gratis) para comprar guías
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <button 
                  onClick={() => alert('Próximamente: Stripe Checkout')}
                  className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Icon name="shopping_cart" size={24} />
                  <span>Comprar por {price}</span>
                </button>
                <p className="text-sm text-slate-500">
                  ✓ Pago seguro con Stripe · ✓ Acceso inmediato
                </p>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-slate-200">
              <Link href="/itinerarios" className="text-primary hover:text-primary-dark font-bold text-sm inline-flex items-center gap-1">
                <Icon name="local_offer" size={14} />
                <span>Ver todas las guías disponibles</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
