import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout | Estaba en Lisboa',
  description: 'Pago seguro para guías digitales de Lisboa.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
