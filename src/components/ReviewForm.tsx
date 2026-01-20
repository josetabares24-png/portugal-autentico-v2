'use client';

import { useState } from 'react';

type ExistingReview = {
  rating: number;
  comment: string | null;
};

interface ReviewFormProps {
  guideId: string;
  guideTitle: string;
  existingReview?: ExistingReview;
}

export default function ReviewForm({ guideId, guideTitle, existingReview }: ReviewFormProps) {
  const [rating, setRating] = useState(existingReview?.rating ?? 5);
  const [comment, setComment] = useState(existingReview?.comment ?? '');
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('saving');

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guideId, rating, comment }),
      });

      if (!response.ok) {
        throw new Error('No se pudo guardar la reseña');
      }

      setStatus('saved');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-4">
      <p className="text-sm font-semibold text-slate-900 mb-3">Tu reseña sobre: {guideTitle}</p>
      <div className="flex items-center gap-2 mb-3">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setRating(value)}
            className={`w-9 h-9 rounded-full border text-sm font-semibold transition-colors ${
              rating >= value
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-slate-500 border-slate-300 hover:border-primary'
            }`}
            aria-label={`Valorar con ${value} estrellas`}
          >
            {value}
          </button>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="¿Qué te gustó? ¿Qué mejorarías?"
        className="w-full min-h-[100px] rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      <div className="mt-3 flex items-center justify-between">
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-colors"
          disabled={status === 'saving'}
        >
          {existingReview ? 'Actualizar reseña' : 'Enviar reseña'}
        </button>
        {status === 'saved' && <span className="text-sm text-green-600">Reseña guardada</span>}
        {status === 'error' && <span className="text-sm text-red-600">No se pudo guardar</span>}
      </div>
    </form>
  );
}
