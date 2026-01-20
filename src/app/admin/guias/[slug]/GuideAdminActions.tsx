'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface GuideAdminActionsProps {
  slug: string;
}

export function GuideAdminActions({ slug }: GuideAdminActionsProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      '¿Seguro que quieres eliminar esta guía? Esta acción no se puede deshacer.'
    );
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/admin/guides/${slug}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('No se pudo eliminar la guía.');
      }

      router.push('/admin/guias');
      router.refresh();
    } catch (error) {
      alert('Error al eliminar la guía. Revisa la configuración de Supabase.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isDeleting}
      className="inline-flex items-center gap-2 bg-white border-2 border-red-300 text-red-700 font-semibold px-6 py-3 rounded-xl hover:border-red-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      {isDeleting ? 'Eliminando...' : 'Eliminar'}
    </button>
  );
}
