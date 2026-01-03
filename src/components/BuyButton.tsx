'use client';

import { useCheckout } from '@/hooks/useCheckout';
import { ProductId } from '@/lib/stripe-products';

interface BuyButtonProps {
  productId: ProductId;
  className?: string;
  children?: React.ReactNode;
}

export function BuyButton({ productId, className = '', children }: BuyButtonProps) {
  const { redirectToCheckout, loading, error } = useCheckout();

  const handleClick = () => {
    redirectToCheckout(productId);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`${className} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Procesando...' : (children || 'Comprar ahora')}
      </button>
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}
