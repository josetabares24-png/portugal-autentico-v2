'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { STRIPE_PRODUCTS } from '@/lib/stripe-products';
import Link from 'next/link';
import Image from 'next/image';
import { useUser, SignInButton } from '@clerk/nextjs';

export default function CheckoutPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.productId as string;
  const { isSignedIn, isLoaded } = useUser();

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
        const errorMessage = data.error || 'Error al crear sesión de checkout';
        throw new Error(errorMessage);
      }

      if (!data.url) {
        throw new Error('No se recibió URL de checkout');
      }

      // Redirigir a Stripe Checkout
      window.location.href = data.url;
    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message || 'Error al procesar el pago');
      setLoading(false);
    }
  };

  if (!product) {
    return (
      <main className="bg-background-light min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-slate-400 mb-4">error</span>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Producto no encontrado</h1>
          <p className="text-slate-600 mb-6">El producto que buscas no existe</p>
          <Link
            href="/itinerarios"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Ver Guías
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg"
            alt="Lisboa panorama"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">lock</span>
            <span className="text-sm font-bold tracking-wide">PAGO SEGURO</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Finalizar<br />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Compra
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Pago 100% seguro procesado por Stripe. Acceso inmediato tras la compra.
          </p>
        </div>
      </section>

      {/* Checkout Card Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {/* Checkout Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">

            {/* Product Info */}
            <div className="p-8 md:p-12">
              <div className="mb-8 pb-8 border-b border-slate-200">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                  <span className="material-symbols-outlined text-lg">workspace_premium</span>
                  Guía Premium
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">{product.name}</h2>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">{product.price.toFixed(2)}€</span>
                  <span className="text-slate-500 text-lg">pago único</span>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 mb-8 border-2 border-slate-200">
                <h3 className="font-black text-xl text-slate-900 mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                  Qué incluye tu guía
                </h3>
                <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
                  <li className="flex items-start gap-3 p-3 bg-white rounded-xl">
                    <span className="material-symbols-outlined text-green-600 text-2xl mt-0.5 flex-shrink-0">done</span>
                    <span className="font-medium">Guía digital descargable en alta calidad</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-white rounded-xl">
                    <span className="material-symbols-outlined text-green-600 text-2xl mt-0.5 flex-shrink-0">done</span>
                    <span className="font-medium">Itinerario completo paso a paso</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-white rounded-xl">
                    <span className="material-symbols-outlined text-green-600 text-2xl mt-0.5 flex-shrink-0">done</span>
                    <span className="font-medium">Mapa interactivo con todos los lugares</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-white rounded-xl">
                    <span className="material-symbols-outlined text-green-600 text-2xl mt-0.5 flex-shrink-0">done</span>
                    <span className="font-medium">Restaurantes verificados por locales</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-white rounded-xl">
                    <span className="material-symbols-outlined text-green-600 text-2xl mt-0.5 flex-shrink-0">done</span>
                    <span className="font-medium">Acceso inmediato tras el pago</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-white rounded-xl">
                    <span className="material-symbols-outlined text-green-600 text-2xl mt-0.5 flex-shrink-0">done</span>
                    <span className="font-medium">Actualizaciones gratuitas de por vida</span>
                  </li>
                </ul>
              </div>

            {/* Auth Required Message - OBLIGATORIO */}
            {isLoaded && !isSignedIn && (
              <div className="mb-8 p-6 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-3xl">
                <div className="flex items-start gap-4 mb-4">
                  <span className="material-symbols-outlined text-red-600 text-3xl flex-shrink-0">lock</span>
                  <div>
                    <p className="font-black text-red-900 mb-2 text-lg">Debes iniciar sesión para comprar</p>
                    <p className="text-red-700 text-sm font-medium mb-1">
                      Las guías se guardan en tu cuenta para acceso permanente. Necesitas una cuenta gratuita para continuar.
                    </p>
                  </div>
                </div>
                <SignInButton mode="modal">
                  <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined text-xl">login</span>
                    Iniciar sesión para comprar
                  </button>
                </SignInButton>
              </div>
            )}

              {/* Error Message */}
              {error && (
                <div className="mb-8 p-6 bg-red-50 border-2 border-red-300 rounded-3xl flex items-start gap-4 shadow-lg">
                  <span className="material-symbols-outlined text-red-600 text-4xl flex-shrink-0">error</span>
                  <div>
                    <p className="font-black text-red-900 mb-2 text-xl">Error al procesar el pago</p>
                    <p className="text-red-700 font-medium">{error}</p>
                    {error.includes('iniciar sesión') && (
                      <SignInButton mode="modal">
                        <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors text-sm">
                          Iniciar sesión ahora
                        </button>
                      </SignInButton>
                    )}
                  </div>
                </div>
              )}

              {/* Checkout Button */}
              <button
                disabled={!isSignedIn || loading}
                onClick={handleCheckout}
                className="w-full py-5 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 disabled:from-slate-300 disabled:to-slate-400 text-white font-black text-xl rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-2xl">progress_activity</span>
                    Procesando pago...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-2xl">lock</span>
                    Pagar {product.price.toFixed(2)}€ de forma segura
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </>
                )}
              </button>

              {/* Security Info */}
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-600 mb-4 flex items-center justify-center gap-2 font-medium">
                  <span className="material-symbols-outlined text-primary">shield</span>
                  Pago 100% seguro procesado por Stripe
                </p>
                <div className="flex items-center justify-center gap-6 text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-2xl">lock</span>
                    <span className="text-xs font-medium">SSL Encriptado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-2xl">verified</span>
                    <span className="text-xs font-medium">Stripe Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                    <span className="text-xs font-medium">PCI Compliant</span>
                  </div>
                </div>
              </div>

              {/* Cancel Link */}
              <div className="pt-6 border-t border-slate-200 text-center">
                <Link
                  href="/itinerarios"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-primary text-sm font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Volver a las guías
                </Link>
              </div>
            </div>
          </div>

          {/* Money-back Guarantee */}
          <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl p-8 text-center shadow-lg">
            <span className="material-symbols-outlined text-green-600 text-5xl mb-4 inline-block">verified</span>
            <h3 className="font-black text-green-900 mb-3 text-2xl">Garantía de Satisfacción 48h</h3>
            <p className="text-green-700 font-medium max-w-2xl mx-auto">
              Si no estás 100% satisfecho con tu guía, te devolvemos el dinero completo. Sin preguntas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
