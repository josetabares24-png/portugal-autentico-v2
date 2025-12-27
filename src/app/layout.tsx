import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header';
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estaba en Lisboa - Itinerarios de Lisboa por Locales",
  description: "Descubre Lisboa como un local. Itinerarios, restaurantes secretos y los mejores spots de fotos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <footer style={{background: 'var(--color-primary)'}} className="text-white">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-sm italic text-white/60">estaba en</span>
                  <span className="text-xl font-bold text-white">Lisboa</span>
                  <span className="w-2 h-2 rounded-full ml-1" style={{background: '#E8C547'}}></span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Lisboa vista por quienes la viven. Itinerarios autenticos y experiencias unicas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Explorar</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/itinerarios" className="text-white/70 hover:text-white">Itinerarios</Link></li>
                  <li><Link href="/blog" className="text-white/70 hover:text-white">Blog</Link></li>
                  <li><Link href="/free-tour" className="text-white/70 hover:text-white">Free Tours</Link></li>
                  <li><Link href="/apps" className="text-white/70 hover:text-white">Apps</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Packs</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="text-white/70 hover:text-white">Lisboa 1 Dia</Link></li>
                  <li><Link href="/itinerarios/lisboa-2-dias-completo" className="text-white/70 hover:text-white">Lisboa 2 Dias</Link></li>
                  <li><Link href="/itinerarios/lisboa-3-dias-premium" className="text-white/70 hover:text-white">Lisboa 3 Dias</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Contacto</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://instagram.com/estabaenlisboa" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">@estabaenlisboa</a></li>
                  <li><a href="mailto:hola@estabaenlisboa.com" className="text-white/70 hover:text-white">hola@estabaenlisboa.com</a></li>
                  <li><a href="https://wa.me/351900000000" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">WhatsApp</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-white/50 text-sm">2025 Estaba en Lisboa. Hecho con amor en Lisboa.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
