'use client';

import { useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import s from './GrokHome.module.css';

// Rutas canónicas y artículos ya existentes. No se generan páginas de búsqueda
// ni se consulta una API en cada pulsación (rendimiento + privacidad).
const topics = [
  { label: 'Lisboa en 1 día', href: '/itinerarios/lisboa-1-dia-lo-esencial', keywords: '1 un dia ruta itinerario' },
  { label: 'Lisboa en 3 días', href: '/itinerarios/lisboa-3-dias-premium', keywords: '3 tres dias ruta itinerario' },
  { label: 'Lisboa en 2 días', href: '/itinerarios/lisboa-2-dias-completo', keywords: 'lisboa 2 dos dias itinerario fin semana ruta 48 horas ver reservar' },
  { label: 'Qué ver en Lisboa', href: '/que-ver-en-lisboa', keywords: 'lisboa lugares monumentos barrios miradores visitar ver' },
  { label: 'Torre de Belém', href: '/actividades/torre-de-belem', keywords: 'belem torre entradas precio horario monumento visitar comprar' },
  { label: 'Monasterio de los Jerónimos', href: '/blog/monasterio-jeronimos-entradas', keywords: 'jeronimos monasterio belem entrada horario precio claustro' },
  { label: 'Free tours', href: '/free-tours-lisboa', keywords: 'lisboa guia gratis recorrido paseo centro propina free tour' },
  { label: 'Itinerarios de 1, 2 o 3 días', href: '/itinerarios', keywords: 'lisboa rutas guia 1 2 3 dias dia viajar mapa plan' },
  { label: 'Sintra', href: '/blog/sintra-desde-lisboa', keywords: 'sintra excursion desde lisboa palacio pena tren regaleira' },
  { label: 'Alfama y sus miradores', href: '/blog/alfama-historia-guia', keywords: 'alfama castillo bairro bairro antigo mirador tejados' },
  { label: 'Pastéis de Belém', href: '/blog/pasteles-de-belem', keywords: 'pasteis pasteles nata belem gastronomia dulce comida' },
  { label: 'Alojamiento en Lisboa', href: '/blog/donde-alojarse-en-lisboa', keywords: 'lisboa hotel dormir alojamiento barrios zonas seguridad' },
  { label: 'Transporte y tranvías', href: '/blog/como-moverse-por-lisboa', keywords: 'metro tranvia electrico 28 15e aeropuerto transporte billetes llegar' },
  { label: 'Dónde comer', href: '/donde-comer-en-lisboa', keywords: 'lisboa restaurantes comida comer pastel gastronomia mercado' },
  { label: 'Entradas y actividades', href: '/comprar-entradas', keywords: 'lisboa reservar tickets entradas monumentos actividades precios' },
  { label: 'Fado en Lisboa', href: '/blog/donde-escuchar-fado-autentico', keywords: 'fado musica noche concierto cantar alfama reservar' },
  { label: 'Miradores de Lisboa', href: '/blog/mejores-miradores-lisboa', keywords: 'miradores mirador atardecer vistas panoramicas foto' },
];

const ignore = new Set(['en','a','de','del','el','la','los','las','por','para','que','quiero','quieres','hacer','visitar','lisboa']);
function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}
function findTopics(input: string, articles: readonly {label: string; href: string}[]) {
  const query = normalize(input);
  if(!query) return [];
  const meaningful = query.split(/\s+/).filter(word => word && !ignore.has(word));
  if (!meaningful.length) return topics.slice(0,5);
  const destinations = new Set(topics.map(topic => topic.href));
  const index = [...topics, ...articles.filter(article => !destinations.has(article.href)).map(article => ({...article, keywords: ''}))];
  return index.map((topic) => {
    const label = normalize(topic.label);
    const haystack = normalize(topic.label + ' ' + topic.keywords);
    const matched = meaningful.filter(word => haystack.includes(word)).length;
    const score = (label.includes(query) ? 8 : 0) + matched * 2 - (meaningful.length - matched) * 4;
    return { ...topic, score };
  }).filter(topic => topic.score > 0).sort((a,b) => b.score-a.score).slice(0,6);
}

export default function GrokQuickSearch({ articles }: { articles: readonly {label: string; href: string}[] }) {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const [term, setTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selected, setSelected] = useState<{ label: string; href: string } | null>(null);
  const results = findTopics(term, articles);

  // Elegir una sugerencia rellena la búsqueda; NO navega hasta pulsar Buscar.
  function selectSuggestion(suggestion: { label: string; href: string }) {
    setTerm(suggestion.label);
    setSelected(suggestion);
    setShowResults(false);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!term.trim()) {
      router.push('/blog');
      return;
    }
    // Al pulsar Buscar siempre se abre la guía más relevante.
    // Las demás coincidencias siguen disponibles al escribir en el menú.
    const destination = selected?.label === term ? selected.href : results[0]?.href;
    if (destination) {
      setShowResults(false);
      router.push(destination);
    } else {
      setShowResults(true);
    }
  }

  return (
    <div className={s.searchWrap}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setShowResults(false); }}
      onKeyDown={event => { if (event.key === 'Escape') { input.current?.focus(); setShowResults(false); } }}>
      <form onSubmit={submit} className={s.searchForm} role="search" aria-label="Buscar cómo preparar tu visita">
        <label className={s.visuallyHidden} htmlFor="grok-home-search">¿Qué quieres hacer en Lisboa?</label>
        <input
          id="grok-home-search" type="search" value={term} ref={input}
          onChange={(e) => { setTerm(e.target.value); setSelected(null); setShowResults(Boolean(e.target.value.trim())); }}
          onFocus={() => { if (term.trim() && !selected) setShowResults(true); }}
          placeholder="¿Qué quieres hacer en Lisboa?" autoComplete="off"
          aria-controls={showResults && term.trim() ? 'grok-home-search-results' : undefined}
          aria-expanded={Boolean(showResults && term.trim())}
          aria-autocomplete="list"
        />
        <button type="submit">Buscar</button>
      </form>
      {showResults && term.trim() && (
        <div className={s.searchResults} id="grok-home-search-results">
          <span className={s.visuallyHidden} role="status" aria-live="polite">
            {results.length ? `${results.length} sugerencias disponibles. Usa Tab para elegir una.` : 'No hay coincidencias.'}
          </span>
          {results.length ? (
            <ul>{results.map((result) => (
              <li key={result.href}>
                <button
                  type="button"
                  // Safari iOS puede desenfocar el input antes del click.
                  // Guardar la sugerencia ya en pointerdown táctil evita
                  // que el onBlur desmonte el menú antes de seleccionarla.
                  onPointerDown={(event) => {
                    if (event.pointerType === 'touch') selectSuggestion(result);
                    else event.preventDefault();
                  }}
                  onClick={() => selectSuggestion(result)}
                >
                  {result.label}
                </button>
              </li>
            ))}</ul>
          ) : (
            <p>No encontré una coincidencia. <Link href="/blog">Explorar todas las guías</Link></p>
          )}
        </div>
      )}
    </div>
  );
}
