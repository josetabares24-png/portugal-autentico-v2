'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/Icon';

const PRESET_AMOUNTS = [2, 5, 10];

export default function DonarPage() {
  const searchParams = useSearchParams();
  const guideSlug = searchParams.get('guide') || '';

  const [selectedAmount, setSelectedAmount] = useState<number>(5);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeAmount = isCustom ? Number(customAmount) : selectedAmount;

  const handleDonate = async () => {
    if (!activeAmount || activeAmount < 1 || activeAmount > 100) {
      setError('Por favor, selecciona un monto entre 1€ y 100€.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: activeAmount, guideSlug }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al procesar la donación');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <main id="main-content">
      <section className="bg-background-light py-20">
        <div className="max-w-xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Donativo voluntario</p>
            <h1 className="font-display italic text-text-main text-3xl md:text-4xl mb-4">
              Apoya nuestro proyecto
            </h1>
            <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
              Nuestras guías son gratuitas. Si te han sido útiles, puedes dejar un donativo voluntario para que sigamos actualizándolas.
            </p>
          </div>

          {/* Donation form */}
          <div className="border-t-2 border-primary pt-8">
            <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Elige un monto</p>
            <div className="grid grid-cols-3 gap-3 mb-3">
              {PRESET_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setIsCustom(false);
                    setError(null);
                  }}
                  className={`py-4 font-bold text-xl transition-all border-2 ${
                    !isCustom && selectedAmount === amount
                      ? 'border-primary text-primary'
                      : 'border-border-soft text-text-main hover:border-primary'
                  }`}
                >
                  {amount}€
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setIsCustom(true);
                setError(null);
              }}
              className={`w-full mb-5 py-3 text-sm font-semibold transition-all border-2 ${
                isCustom
                  ? 'border-primary text-primary'
                  : 'border-border-soft text-text-secondary hover:border-primary'
              }`}
            >
              Otro monto
            </button>

            {isCustom && (
              <div className="mb-5">
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    step="0.5"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setError(null);
                    }}
                    placeholder="Monto en euros"
                    className="w-full px-4 py-3 pr-10 border border-border-soft text-sm focus:border-primary focus:outline-none transition-colors bg-background-light"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary text-sm">€</span>
                </div>
                <p className="text-xs text-text-secondary mt-1">Min: 1€ · Max: 100€</p>
              </div>
            )}

            {error && (
              <div className="mb-5 p-4 border border-border-soft border-l-4 border-l-primary text-text-secondary text-xs">
                {error}
              </div>
            )}

            <button
              onClick={handleDonate}
              disabled={loading || (!isCustom && !selectedAmount) || (isCustom && !customAmount)}
              className="w-full py-4 bg-primary hover:bg-primary-dark disabled:bg-border-soft disabled:text-text-secondary text-white font-semibold text-sm transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Icon name="progress_activity" size={16} className="animate-spin" />
                  Procesando...
                </>
              ) : (
                <>
                  <Icon name="favorite" size={16} />
                  Donar {activeAmount > 0 ? `${activeAmount}€` : ''}
                </>
              )}
            </button>

            <p className="text-xs text-text-secondary text-center mt-3 flex items-center justify-center gap-2">
              <Icon name="lock" size={12} />
              Pago seguro · Stripe
            </p>
          </div>

          {/* Why donate */}
          <div className="mt-10 border-t border-border-soft pt-8">
            <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Tu donativo nos ayuda a</p>
            <div className="space-y-4">
              {[
                { icon: 'update' as const, text: 'Mantener las guías actualizadas con precios, horarios y restaurantes reales de 2026.' },
                { icon: 'map' as const, text: 'Crear nuevas rutas y itinerarios para que más viajeros disfruten Lisboa.' },
                { icon: 'restaurant' as const, text: 'Visitar y verificar personalmente cada restaurante y lugar que recomendamos.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Icon name={item.icon} size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-text-secondary text-xs leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/itinerarios" className="text-xs text-text-secondary hover:text-primary transition-colors">
              ← Volver a las guías
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
