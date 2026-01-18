'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { STRIPE_PRODUCTS } from '@/lib/stripe-products';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.productId as string;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Verificar que el producto existe
  const product = productId && productId in STRIPE_PRODUCTS
    ? STRIPE_PRODUCTS[productId as keyof typeof STRIPE_PRODUCTS]
    : null;

  useEffect(() => {
    // Si el producto no existe, redirigir
    if (!product) {
      router.push('/itinerarios');
    }
  }, [product, router]);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al crear sesión de checkout');
      }

      if (data.url) {
        // Redirigir a Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error('No se recibió URL de checkout');
      }
    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message || 'Error al procesar el pago');
      setLoading(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background-light flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-slate-400 mb-4">error</span>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Producto no encontrado</h1>
          <p className="text-slate-600 mb-6">El producto que buscas no existe</p>
          <Link
            href="/itinerarios"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Ver Guías
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background-light py-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Checkout Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-orange-500 p-8 text-white text-center">
            <span className="material-symbols-outlined text-6xl mb-4 inline-block">shopping_cart</span>
            <h1 className="text-3xl font-black mb-2">Finalizar Compra</h1>
            <p className="text-white/90">Pago seguro con Stripe</p>
          </div>

          {/* Product Info */}
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-primary">{product.price.toFixed(2)}€</span>
                <span className="text-slate-500">pago único</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Qué incluye tu guía
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">done</span>
                  <span>Guía PDF descargable en alta calidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">done</span>
                  <span>Itinerario completo paso a paso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">done</span>
                  <span>Mapa interactivo con todos los lugares</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">done</span>
                  <span>Restaurantes verificados por locales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">done</span>
                  <span>Acceso inmediato tras el pago</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">done</span>
                  <span>Actualizaciones gratuitas de por vida</span>
                </li>
              </ul>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
                <span className="material-symbols-outlined text-red-600 text-2xl">error</span>
                <div>
                  <p className="font-bold text-red-900 mb-1">Error al procesar el pago</p>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 disabled:from-slate-300 disabled:to-slate-400 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  Procesando...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">lock</span>
                  Pagar {product.price.toFixed(2)}€ de forma segura
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>

            {/* Security Info */}
            <div className="mt-6 text-center">
              <p className="text-xs text-slate-500 mb-2 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">shield</span>
                Pago 100% seguro procesado por Stripe
              </p>
              <div className="flex items-center justify-center gap-4 text-slate-400">
                <span className="text-xl">🔒</span>
                <span className="text-xl">💳</span>
                <span className="text-xl">✅</span>
              </div>
            </div>

            {/* Cancel Link */}
            <div className="mt-8 text-center">
              <Link
                href="/itinerarios"
                className="text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors"
              >
                ← Volver a las guías
              </Link>
            </div>
          </div>
        </div>

        {/* Money-back Guarantee */}
        <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
          <span className="material-symbols-outlined text-green-600 text-4xl mb-3 inline-block">verified</span>
          <h3 className="font-bold text-green-900 mb-2">Garantía de Satisfacción 48h</h3>
          <p className="text-sm text-green-700">
            Si no estás 100% satisfecho con tu guía, te devolvemos el dinero completo. Sin preguntas.
          </p>
        </div>
      </div>
    </main>
  );
}
