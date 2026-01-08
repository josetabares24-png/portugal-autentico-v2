'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Lisboa7DiasPage() {
  return (
    <div className="min-h-screen bg-background-light">
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200" alt="Lisboa 7 Días" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-md rounded-full mb-6">
            <span className="text-sm font-bold">⭐ PREMIUM</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Lisboa en 7 Días:<br /><span className="text-primary">Inmersiva</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Semana completa: Lisboa + Sintra + Cascais + Óbidos + experiencia local
          </p>
          <button onClick={() => alert('Próximamente: Checkout Stripe')} className="group bg-gradient-to-r from-primary to-orange-500 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all">
            Comprar por 9.99€
          </button>
        </div>
      </section>
    </div>
  );
}
