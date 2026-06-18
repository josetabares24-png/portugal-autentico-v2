'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { activities, ACTIVITY_CATEGORIES, ActivityCategory } from '@/data/activities';
import { ActivityCard } from '@/components/actividades/ActivityCard';

type PriceFilter = 'todas' | 'gratis' | 'pago';

export default function ActividadesPage() {
  const [category, setCategory] = useState<ActivityCategory | 'Todas'>('Todas');
  const [price, setPrice] = useState<PriceFilter>('todas');

  const filtered = useMemo(() => {
    return activities.filter((a) => {
      const matchesCategory = category === 'Todas' || a.category === category;
      const matchesPrice = price === 'todas' || (price === 'gratis' ? a.isFree : !a.isFree);
      return matchesCategory && matchesPrice;
    });
  }, [category, price]);

  return (
    <main id="main-content">
      {/* Cabecera */}
      <section className="bg-background-light pt-20 pb-12 border-b border-border-soft">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-3">Actividades</p>
          <h1 className="font-display italic text-text-main text-4xl md:text-5xl leading-tight mb-3">
            Lisboa sin gastar mucho
          </h1>
          <p className="text-text-secondary">
            Elige actividades sueltas y arma tu propio plan: cada una con precio real, duración y un tip de ahorro de local.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-background-light py-10 border-b border-border-soft sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            {(['Todas', ...ACTIVITY_CATEGORIES] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  category === c
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-secondary border border-border-soft hover:border-text-secondary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {([
              { id: 'todas', label: 'Cualquier precio' },
              { id: 'gratis', label: 'Gratis' },
              { id: 'pago', label: 'De pago' },
            ] as const).map((opt) => (
              <button
                key={opt.id}
                onClick={() => setPrice(opt.id)}
                className={`px-4 py-2 text-xs font-semibold transition-colors border-t-2 ${
                  price === opt.id
                    ? 'border-primary text-text-main'
                    : 'border-border-soft text-text-secondary hover:border-text-secondary'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section className="bg-background-light py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-8">
            {filtered.length} {filtered.length === 1 ? 'actividad' : 'actividades'}
          </p>
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filtered.map((activity) => (
                <ActivityCard key={activity.slug} activity={activity} />
              ))}
            </div>
          ) : (
            <p className="text-text-secondary">No hay actividades con estos filtros todavía.</p>
          )}
        </div>
      </section>

      {/* CTA plan a medida */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-white text-2xl md:text-3xl mb-4">
            ¿Prefieres que te lo organice yo?
          </h2>
          <p className="text-white/60 mb-8">
            Cuéntame tus días, tu presupuesto y tus intereses, y te combino estas actividades en un plan hora a hora.
          </p>
          <Link
            href="/planifica-tu-viaje"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
          >
            Planifica tu viaje
          </Link>
        </div>
      </section>
    </main>
  );
}
