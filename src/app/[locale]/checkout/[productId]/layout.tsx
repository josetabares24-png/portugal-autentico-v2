import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;

  return {
    title: 'Checkout | Estaba en Lisboa',
    description: 'Pago seguro para guías digitales de Lisboa.',
    alternates: {
      canonical: `https://estabaenlisboa.com/checkout/${productId}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function CheckoutProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
