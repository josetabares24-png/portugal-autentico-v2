'use client';

import { useCheckout } from '@/hooks/useCheckout';
import { ProductId } from '@/lib/stripe-products';
import { useUser } from '@clerk/nextjs';
import { SignInButton } from '@clerk/nextjs';

interface BuyButtonProps {
  productId: ProductId;
  className?: string;
  children?: React.ReactNode;
}

export function BuyButton({ productId, className = '', children }: BuyButtonProps) {
  const { redirectToCheckout, loading, error } = useCheckout();
  const { isSignedIn, isLoaded } = useUser();

  const handleClick = () => {
    if (!isLoaded) return;
    
    if (!isSignedIn) {
      // El error se mostrará automáticamente
      return;
    }
    
    redirectToCheckout(productId);
  };

  // Si no está autenticado, mostrar mensaje claro
  if (isLoaded && !isSignedIn) {
    return (
      <div className="w-full">
        <SignInButton mode="modal">
          <button
            className={className}
          >
            {children || 'Inicia sesión para comprar'}
          </button>
        </SignInButton>
        <p className="text-xs text-slate-500 mt-2 text-center">
          Las guías se guardan en tu cuenta para acceso permanente
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        disabled={loading || !isLoaded}
        className={`${className} ${loading || !isLoaded ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Procesando...' : (children || 'Comprar ahora')}
      </button>
      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
