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
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <footer className="bg-background-dark text-white">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-sm italic text-white/60">estaba en</span>
                  <span className="text-xl font-bold text-white">Lisboa</span>
                  <span className="w-2 h-2 rounded-full ml-1 bg-primary"></span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Lisboa vista por quienes la viven. Itinerarios auténticos y experiencias únicas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Explorar</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/itinerarios" className="text-white/70 hover:text-white transition-colors">Itinerarios</Link></li>
                  <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/free-tour" className="text-white/70 hover:text-white transition-colors">Free Tours</Link></li> 
                  <li><Link href="/apps" className="text-white/70 hover:text-white transition-colors">Apps</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Packs</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="text-white/70 hover:text-white transition-colors">Lisboa 1 Día</Link></li>
                  <li><Link href="/itinerarios/lisboa-2-dias-completo" className="text-white/70 hover:text-white transition-colors">Lisboa 2 Días</Link></li>
                  <li><Link href="/itinerarios/lisboa-3-dias-sintra" className="text-white/70 hover:text-white transition-colors">Lisboa 3 Días</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Contacto</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://instagram.com/estabaenlisboa" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">@estabaenlisboa</a></li>
                  <li><a href="mailto:hola@estabaenlisboa.com" className="text-white/70 hover:text-white transition-colors">hola@estabaenlisboa.com</a></li>
                  <li><a href="https://wa.me/351900000000" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">WhatsApp</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-white/50 text-sm">© 2025 Estaba en Lisboa. Hecho con ❤️ en Lisboa.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
