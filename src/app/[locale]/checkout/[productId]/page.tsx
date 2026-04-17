'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { STRIPE_PRODUCTS } from '@/lib/stripe-products';
import Link from 'next/link';
import Image from 'next/image';
import { useUser, SignInButton } from '@clerk/nextjs';
import Icon from '@/components/Icon';

export default function CheckoutPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.productId as string;
  const { isSignedIn, isLoaded } = useUser();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const product = productId && productId in STRIPE_PRODUCTS
    ? STRIPE_PRODUCTS[productId as keyof typeof STRIPE_PRODUCTS]
    : null;

  useEffect(() => {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al crear sesión de checkout');
      }

      if (!data.url) {
        throw new Error('No se recibió URL de checkout');
      }

      window.location.href = data.url;
    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message || 'Error al procesar el pago');
      setLoading(false);
    }
  };

  if (!product) {
    return (
      <main className="bg-background-light py-32 text-center">
        <h1 className="text-2xl font-bold text-text-main mb-2">Producto no encontrado</h1>
        <p className="text-text-secondary mb-6">El producto que buscas no existe</p>
        <Link href="/itinerarios" className="inline-block px-6 py-3 bg-primary text-white font-semibold transition-colors hover:bg-primary-dark">
          Ver Guías
        </Link>
      </main>
    );
  }

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[260px] overflow-hidden">
        <Image
          src="/images/fabio-vilhena-2FIcT5nHlLo-unsplash.jpg"
          alt="Lisboa panorama"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <Link href="/itinerarios" className="text-white/60 text-xs uppercase tracking-widest hover:text-white/90 transition-colors block mb-3">
            ← Itinerarios
          </Link>
          <h1 className="font-display italic text-white text-3xl md:text-4xl leading-tight mb-1">
            Finalizar Compra
          </h1>
          <p className="text-white/60 text-sm">Pago seguro procesado por Stripe</p>
        </div>
      </section>

      {/* Checkout */}
      <section className="bg-background-light py-16">
        <div className="max-w-2xl mx-auto px-6">

          {/* Product info */}
          <div className="border-b border-border-soft pb-8 mb-8">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Guía Premium</p>
            <h2 className="font-display italic text-text-main text-2xl md:text-3xl mb-4 leading-tight">{product.name}</h2>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">{product.price.toFixed(2)}€</span>
              <span className="text-text-secondary text-sm">pago único</span>
            </div>
          </div>

          {/* Includes */}
          <div className="border-t-2 border-primary pt-6 mb-8">
            <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Qué incluye</p>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                'Guía digital descargable',
                'Itinerario completo paso a paso',
                'Mapa interactivo GPS',
                'Restaurantes verificados por locales',
                'Acceso inmediato tras el pago',
                'Actualizaciones gratuitas de por vida',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth warning */}
          {isLoaded && !isSignedIn && (
            <div className="mb-8 p-6 border border-border-soft border-l-4 border-l-primary">
              <p className="font-semibold text-text-main mb-1 text-sm">Debes iniciar sesión para comprar</p>
              <p className="text-text-secondary text-xs mb-4">
                Las guías se guardan en tu cuenta para acceso permanente. Necesitas una cuenta gratuita.
              </p>
              <SignInButton mode="modal">
                <button className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-colors flex items-center gap-2">
                  <Icon name="login" size={16} />
                  Iniciar sesión para comprar
                </button>
              </SignInButton>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mb-8 p-5 border border-border-soft border-l-4 border-l-red-500">
              <p className="font-semibold text-text-main mb-1 text-sm">Error al procesar el pago</p>
              <p className="text-text-secondary text-xs">{error}</p>
              {error.includes('iniciar sesión') && (
                <SignInButton mode="modal">
                  <button className="mt-3 px-5 py-2 bg-primary text-white font-semibold text-xs transition-colors">
                    Iniciar sesión ahora
                  </button>
                </SignInButton>
              )}
            </div>
          )}

          {/* Pay button */}
          <button
            disabled={!isSignedIn || loading}
            onClick={handleCheckout}
            className="w-full py-4 bg-primary hover:bg-primary-dark disabled:bg-border-soft disabled:text-text-secondary text-white font-semibold text-base transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Icon name="progress_activity" size={20} className="animate-spin" />
                Procesando pago...
              </>
            ) : (
              <>
                <Icon name="lock" size={18} />
                Pagar {product.price.toFixed(2)}€ de forma segura
              </>
            )}
          </button>

          <p className="text-xs text-text-secondary text-center mt-4 flex items-center justify-center gap-1.5">
            <Icon name="shield" size={14} className="text-primary" />
            Pago 100% seguro · SSL · Stripe
          </p>

          <div className="mt-8 pt-6 border-t border-border-soft text-center">
            <Link href="/itinerarios" className="text-xs text-text-secondary hover:text-primary transition-colors">
              ← Volver a las guías
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-background-light border-t border-border-soft py-10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="border-t-2 border-primary pt-6">
            <p className="font-semibold text-text-main text-sm mb-1">Garantía de satisfacción 48h</p>
            <p className="text-text-secondary text-xs">
              Si no estás 100% satisfecho con tu guía, te devolvemos el dinero completo. Sin preguntas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
