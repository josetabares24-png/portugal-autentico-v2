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
    <form onSubmit={handleSubmit} className="mt-4 border-t border-border-soft pt-4">
      <p className="text-xs font-semibold text-text-main mb-3">Tu reseña: {guideTitle}</p>
      <div className="flex items-center gap-2 mb-3">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setRating(value)}
            className={`w-9 h-9 border text-xs font-semibold transition-colors ${
              rating >= value
                ? 'bg-primary text-white border-primary'
                : 'bg-background-light text-text-secondary border-border-soft hover:border-primary'
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
        className="w-full min-h-[100px] border border-border-soft px-3 py-2 text-xs text-text-secondary focus:outline-none focus:border-primary"
      />
      <div className="mt-3 flex items-center justify-between">
        <button
          type="submit"
          className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-colors"
          disabled={status === 'saving'}
        >
          {existingReview ? 'Actualizar reseña' : 'Enviar reseña'}
        </button>
        {status === 'saved' && <span className="text-xs text-primary">Reseña guardada</span>}
        {status === 'error' && <span className="text-xs text-red-600">No se pudo guardar</span>}
      </div>
    </form>
  );
}
