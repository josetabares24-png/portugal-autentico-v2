'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { GuideEditData, GuideHighlight } from '@/lib/guide-store';

interface GuideEditFormProps {
  initialData: GuideEditData;
}

export function GuideEditForm({ initialData }: GuideEditFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<GuideEditData>(initialData);

  const updateHighlight = (index: number, field: keyof GuideHighlight, value: string) => {
    const updated = [...formData.highlights];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, highlights: updated });
  };

  const addHighlight = () => {
    setFormData({
      ...formData,
      highlights: [...formData.highlights, { time: '', place: '', desc: '' }],
    });
  };

  const removeHighlight = (index: number) => {
    const updated = formData.highlights.filter((_, i) => i !== index);
    setFormData({ ...formData, highlights: updated });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`/api/admin/guides/${formData.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        const message = payload?.error || 'No se pudo guardar la guía.';
        throw new Error(message);
      }

      router.push(`/admin/guias/${formData.slug}`);
      router.refresh();
    } catch (error) {
      const message = error instanceof Error
        ? error.message
        : 'Error al guardar la guía. Revisa la configuración de Supabase.';
      setErrorMessage(message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border-2 border-slate-200 p-8 space-y-8">
      {errorMessage && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Información principal</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Título *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Subtítulo</label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Descripción *</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
            required
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Duración *</label>
            <input
              type="text"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Precio (€) *</label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Tipo</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as 'main' | 'special' })}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
            >
              <option value="main">Principal</option>
              <option value="special">Especial</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Imagen principal *</label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors font-mono text-sm"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Color (Tailwind)</label>
            <input
              type="text"
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors font-mono text-sm"
            />
          </div>
          <div className="flex items-center gap-3 mt-8">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-5 h-5 text-orange-600 border-2 border-slate-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="featured" className="text-sm font-semibold text-slate-700 cursor-pointer">
              Marcar como destacada
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Badge (texto)</label>
            <input
              type="text"
              value={formData.badgeText || ''}
              onChange={(e) => setFormData({ ...formData, badgeText: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Badge (color)</label>
            <input
              type="text"
              value={formData.badgeColor || ''}
              onChange={(e) => setFormData({ ...formData, badgeColor: e.target.value })}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors font-mono text-sm"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Contenido y valor</h2>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Características (una por línea)</label>
          <textarea
            value={formData.features.join('\n')}
            onChange={(e) => setFormData({ ...formData, features: e.target.value.split('\n').filter(Boolean) })}
            rows={5}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Incluye (una por línea)</label>
          <textarea
            value={formData.includes.join('\n')}
            onChange={(e) => setFormData({ ...formData, includes: e.target.value.split('\n').filter(Boolean) })}
            rows={6}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
          />
        </div>
      </section>

      <section id="timeline" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Timeline (preview)</h2>
          <button
            type="button"
            onClick={addHighlight}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800"
          >
            + Añadir parada
          </button>
        </div>

        <div className="space-y-4">
          {formData.highlights.map((highlight, index) => (
            <div key={`${highlight.time}-${index}`} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
              <div className="grid md:grid-cols-3 gap-3">
                <input
                  type="text"
                  value={highlight.time}
                  onChange={(e) => updateHighlight(index, 'time', e.target.value)}
                  placeholder="Hora"
                  className="px-3 py-2 border border-slate-200 rounded-lg focus:border-orange-500 focus:outline-none"
                />
                <input
                  type="text"
                  value={highlight.place}
                  onChange={(e) => updateHighlight(index, 'place', e.target.value)}
                  placeholder="Lugar"
                  className="px-3 py-2 border border-slate-200 rounded-lg focus:border-orange-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeHighlight(index)}
                  className="text-red-600 text-sm font-semibold hover:text-red-700"
                >
                  Eliminar parada
                </button>
              </div>
              <textarea
                value={highlight.desc}
                onChange={(e) => updateHighlight(index, 'desc', e.target.value)}
                placeholder="Descripción"
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-orange-500 focus:outline-none resize-none"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="flex gap-4 pt-6 border-t border-slate-200">
        <button
          type="submit"
          disabled={saving}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? 'Guardando...' : 'Guardar Cambios'}
        </button>
        <button
          type="button"
          onClick={() => router.push(`/admin/guias/${formData.slug}`)}
          className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-orange-500 transition-all"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
