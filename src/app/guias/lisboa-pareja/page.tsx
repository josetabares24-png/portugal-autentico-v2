'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LisboaParejaPage() {
  return (
    <div className="min-h-screen bg-background-light">
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200" alt="Lisboa Pareja" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Lisboa en Pareja:<br /><span className="text-primary">Romance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Miradores al atardecer, cenas especiales y rincones secretos para dos
          </p>
          <button onClick={() => alert('Próximamente: Checkout Stripe')} className="group bg-gradient-to-r from-primary to-orange-500 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all">
            Comprar por 6.99€
          </button>
        </div>
      </section>
    </div>
  );
}
