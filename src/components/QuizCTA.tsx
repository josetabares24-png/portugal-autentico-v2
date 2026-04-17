'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';

interface QuizCTAProps {
  variant?: 'default' | 'compact' | 'banner';
  className?: string;
}

export default function QuizCTA({ variant = 'default', className = '' }: QuizCTAProps) {
  if (variant === 'banner') {
    return (
      <div className={`border-t border-border-soft pt-5 ${className}`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-text-main text-sm">¿No sabes qué ruta elegir?</p>
            <p className="text-xs text-text-secondary">Descubre tu Lisboa ideal en 60 segundos</p>
          </div>
          <Link
            href="/quiz"
            className="shrink-0 px-5 py-2.5 bg-primary hover:bg-primary-dark font-semibold text-sm text-white transition-colors flex items-center gap-2"
          >
            Hacer el quiz
            <Icon name="arrow_forward" size={16} />
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        href="/quiz"
        className={`group flex items-center gap-3 p-4 border-t border-border-soft hover:border-primary transition-colors ${className}`}
      >
        <div className="flex-1">
          <p className="font-semibold text-text-main group-hover:text-primary transition-colors text-sm">
            ¿No sabes cuál elegir?
          </p>
          <p className="text-xs text-text-secondary">Quiz de 60 segundos →</p>
        </div>
      </Link>
    );
  }

  return (
    <div className={`border-t-2 border-primary pt-8 ${className}`}>
      <div className="text-center max-w-xl mx-auto">
        <h2 className="font-display italic text-text-main text-2xl sm:text-3xl mb-3">
          ¿Qué Lisboa es perfecta para ti?
        </h2>

        <p className="text-text-secondary text-sm mb-6">
          5 preguntas. 60 segundos. Te digo qué barrios visitar, qué experiencias no perderte y la guía ideal.
        </p>

        <div className="flex justify-center gap-6 text-xs text-text-secondary mb-8">
          <span>60 seg</span>
          <span>Personalizado</span>
          <span>Gratis</span>
        </div>

        <Link
          href="/quiz"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dark font-semibold text-sm text-white transition-colors"
        >
          Descubrir mi Lisboa
          <Icon name="arrow_forward" size={16} />
        </Link>

        <p className="text-xs text-text-secondary mt-4">
          +2,400 viajeros ya lo hicieron
        </p>
      </div>
    </div>
  );
}
