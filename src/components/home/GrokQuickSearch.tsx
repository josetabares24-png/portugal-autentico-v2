'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import s from './GrokHome.module.css';

// Rutas canónicas y artículos ya existentes. No se generan páginas de búsqueda
// ni se consulta una API en cada pulsación (rendimiento + privacidad).
const topics = [
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
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
}
function findTopics(input: string) {
  const query = normalize(input);
  if(!query) return [];
  const meaningful = query.split(/\s+/).filter(word => word && !ignore.has(word));
  if (!meaningful.length) return topics.slice(0,5);
  return topics.map((topic) => {
    const label = normalize(topic.label);
    const haystack = normalize(topic.label + ' ' + topic.keywords);
    const matched = meaningful.filter(word => haystack.includes(word)).length;
    const score = (label.includes(query) ? 8 : 0) + matched * 2 - (meaningful.length - matched) * 4;
    return { ...topic, score };
  }).filter(topic => topic.score > 0).sort((a,b) => b.score-a.score).slice(0,6);
}

export default function GrokQuickSearch() {
  const router = useRouter();
  const [term, setTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const results = findTopics(term);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!term.trim()) {
      router.push('/blog');
      return;
    }
    setShowResults(true);
    if (results.length === 1) router.push(results[0].href);
  }

  return (
    <div className={s.searchWrap}>
      <form onSubmit={submit} className={s.searchForm} role="search" aria-label="Buscar cómo preparar tu visita">
        <label className={s.visuallyHidden} htmlFor="grok-home-search">¿Qué quieres hacer en Lisboa?</label>
        <input
          id="grok-home-search" type="search" value={term}
          onChange={(e) => { setTerm(e.target.value); setShowResults(Boolean(e.target.value.trim())); }}
          onKeyDown={(e) => { if (e.key === 'Escape') setShowResults(false); }}
          placeholder="¿Qué quieres hacer en Lisboa?" autoComplete="off"
          aria-expanded={showResults && Boolean(term.trim())}
          aria-controls="grok-home-search-results"
        />
        <button type="submit">Buscar</button>
      </form>
      {showResults && term.trim() && (
        <div className={s.searchResults} id="grok-home-search-results" role="status" aria-live="polite">
          {results.length ? (
            <ul>{results.map((result) => (
              <li key={result.href}><Link href={result.href} onClick={() => setShowResults(false)}>{result.label}</Link></li>
            ))}</ul>
          ) : (
            <p>No encontré una coincidencia. <Link href="/blog">Explorar todas las guías</Link></p>
          )}
        </div>
      )}
    </div>
  );
}
