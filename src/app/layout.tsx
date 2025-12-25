import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portugal Autentico - Guias de Lisboa por Locales",
  description: "Descubre Lisboa como un local. Guias premium creadas por portugueses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xl font-bold">
                  <span className="text-slate-900">Portugal</span>
                  <span className="text-blue-600">Autentico</span>
                </span>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/itinerarios" className="text-gray-700 hover:text-blue-600">Itinerarios</Link>
                <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
                <Link href="/guia-practica" className="text-gray-700 hover:text-blue-600">Guia Gratis</Link>
                <Link href="/itinerarios" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
