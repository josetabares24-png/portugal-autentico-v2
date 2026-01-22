'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface QuizCTAProps {
  variant?: 'default' | 'compact' | 'banner';
  className?: string;
}

export default function QuizCTA({ variant = 'default', className = '' }: QuizCTAProps) {
  if (variant === 'banner') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-soft ${className}`}
      >
        <div className="absolute inset-0 bg-azulejo-pattern opacity-[0.04]" />
        <div className="relative px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🇵🇹</span>
            <div>
              <p className="font-semibold text-text-main">¿No sabes qué ruta elegir?</p>
              <p className="text-sm text-text-secondary">Descubre tu Lisboa ideal en 60 segundos</p>
            </div>
          </div>
          <Link
            href="/quiz"
            className="shrink-0 px-5 py-2.5 bg-primary hover:bg-primary-dark rounded-xl font-semibold text-sm text-white transition-colors flex items-center gap-2"
          >
            Hacer el quiz
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        href="/quiz"
        className={`group flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all ${className}`}
      >
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
          🎯
        </div>
        <div className="flex-1">
          <p className="font-semibold text-text-main group-hover:text-primary transition-colors">
            ¿No sabes cuál elegir?
          </p>
          <p className="text-sm text-text-secondary">Quiz de 60 segundos →</p>
        </div>
      </Link>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden ${className}`}
    >
      <div className="relative rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-soft-lg">
        <div className="absolute inset-0 bg-azulejo-pattern opacity-[0.03]" />
        <div className="relative z-10 text-center max-w-xl mx-auto">
          <motion.span
            className="text-5xl block mb-4"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            🤔
          </motion.span>

          <h2 className="text-2xl sm:text-3xl font-display font-black mb-3 text-text-main">
            ¿Qué Lisboa es perfecta para ti?
          </h2>

          <p className="text-text-secondary mb-6">
            5 preguntas. 60 segundos. Te digo qué barrios visitar, qué experiencias no perderte y la guía ideal.
          </p>

          <div className="flex justify-center gap-4 text-sm text-text-secondary mb-8">
            <span className="flex items-center gap-1.5">
              <span className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center text-xs">⏱️</span>
              60 seg
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center text-xs">🎯</span>
              Personalizado
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center text-xs">🎁</span>
              Gratis
            </span>
          </div>

          <Link
            href="/quiz"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark rounded-2xl font-semibold text-lg text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Descubrir mi Lisboa
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>

          <p className="text-xs text-text-secondary mt-4 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-base text-primary">group</span>
            +2,400 viajeros ya lo hicieron
          </p>
        </div>
      </div>
    </motion.section>
  );
}
