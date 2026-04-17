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
    <main className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="favorite" size={36} className="text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Apoya nuestro proyecto
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mx-auto">
              Nuestras guias son gratuitas. Si te han sido utiles, puedes dejar un donativo voluntario para que sigamos actualizandolas.
            </p>
          </div>

          {/* Donation Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary to-orange-400"></div>
            <div className="p-8 md:p-10">

              {/* Preset Amounts */}
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                Elige un monto
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {PRESET_AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setIsCustom(false);
                      setError(null);
                    }}
                    className={`py-4 rounded-xl font-bold text-xl transition-all border-2 ${
                      !isCustom && selectedAmount === amount
                        ? 'border-primary bg-primary/5 text-primary scale-105 shadow-lg'
                        : 'border-slate-200 text-slate-700 hover:border-primary/30 hover:bg-slate-50'
                    }`}
                  >
                    {amount}€
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <button
                onClick={() => {
                  setIsCustom(true);
                  setError(null);
                }}
                className={`w-full mb-6 py-3 rounded-xl text-sm font-semibold transition-all border-2 ${
                  isCustom
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-slate-200 text-slate-500 hover:border-primary/30'
                }`}
              >
                Otro monto
              </button>

              {isCustom && (
                <div className="mb-6">
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
                      className="w-full px-4 py-4 pr-12 border-2 border-slate-200 rounded-xl text-lg font-semibold focus:border-primary focus:outline-none transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">€</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Min: 1€ · Max: 100€</p>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  {error}
                </div>
              )}

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                disabled={loading || (!isCustom && !selectedAmount) || (isCustom && !customAmount)}
                className="w-full py-5 bg-primary hover:bg-primary/90 disabled:bg-slate-300 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <Icon name="progress_activity" size={18} className="animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <Icon name="favorite" size={18} />
                    Donar {activeAmount > 0 ? `${activeAmount}€` : ''}
                  </>
                )}
              </button>

              {/* Security */}
              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1">
                  <Icon name="lock" size={14} />
                  Pago seguro
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="verified" size={14} />
                  Stripe
                </div>
              </div>
            </div>
          </div>

          {/* Why donate */}
          <div className="mt-10 bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">Tu donativo nos ayuda a:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="update" size={20} className="text-primary mt-0.5" />
                <p className="text-slate-600 text-sm">Mantener las guias actualizadas con precios, horarios y restaurantes reales de 2026</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="map" size={20} className="text-primary mt-0.5" />
                <p className="text-slate-600 text-sm">Crear nuevas rutas y itinerarios para que mas viajeros disfruten Lisboa</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="restaurant" size={20} className="text-primary mt-0.5" />
                <p className="text-slate-600 text-sm">Visitar y verificar personalmente cada restaurante y lugar que recomendamos</p>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link href="/itinerarios" className="text-sm text-slate-500 hover:text-primary transition-colors">
              Volver a las guias
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
