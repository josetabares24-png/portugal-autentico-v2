'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import s from './GrokHome.module.css';

const topics = [
  { label: 'Qué ver', href: '/que-ver-en-lisboa', keywords: 'lugares monumentos barrios miradores ver visitar' },
  { label: 'Entradas para monumentos', href: '/comprar-entradas', keywords: 'entradas tickets castillo torre jeronimos precios reservar' },
  { label: 'Free tours por Lisboa', href: '/free-tours-lisboa', keywords: 'free tours gratis caminata guia propina' },
  { label: 'Itinerarios de 1, 2 o 3 días', href: '/itinerarios', keywords: 'dos dias ruta itinerario plan viaje' },
  { label: 'Sintra y excursiones', href: '/blog/sintra-desde-lisboa', keywords: 'sintra excursion palacio pena tren' },
  { label: 'Dónde alojarse', href: '/blog/donde-alojarse-en-lisboa', keywords: 'hotel dormir alojamiento zonas' },
  { label: 'Transporte', href: '/blog/como-moverse-por-lisboa', keywords: 'metro tranvia aeropuerto transporte billetes' },
  { label: 'Dónde comer', href: '/donde-comer-en-lisboa', keywords: 'restaurante comida comer pasteles' },
];

function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

export default function GrokQuickSearch() {
  const router = useRouter();
  const [term, setTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const results = term.trim()
    ? topics.filter((topic) => normalize(topic.label + ' ' + topic.keywords).includes(normalize(term)) ||
        normalize(term).split(/\s+/).every((word) => normalize(topic.label + ' ' + topic.keywords).includes(word)))
    : [];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowResults(true);
    if (results.length === 1) router.push(results[0].href);
  }

  return (
    <div className={s.searchWrap}>
      <form onSubmit={submit} className={s.searchForm} role="search" aria-label="Buscar cómo preparar tu visita">
        <label className={s.visuallyHidden} htmlFor="grok-home-search">¿Qué quieres hacer en Lisboa?</label>
        <input id="grok-home-search" type="search" value={term} onChange={(e) => { setTerm(e.target.value); setShowResults(Boolean(e.target.value.trim())); }} placeholder="¿Qué quieres hacer en Lisboa?" autoComplete="off" />
        <button type="submit">Buscar</button>
      </form>
      {showResults && term.trim() && (
        <div className={s.searchResults} role="status" aria-live="polite">
          {results.length ? (
            <ul>{results.slice(0, 5).map((result) => (
              <li key={result.href}><Link href={result.href} onClick={() => setShowResults(false)}>{result.label}</Link></li>
            ))}</ul>
          ) : (
            <p>No encontré una sección exacta. <Link href="/blog">Explorar todas las guías</Link></p>
          )}
        </div>
      )}
    </div>
  );
}
