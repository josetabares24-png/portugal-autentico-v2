'use client';

import { useRef } from 'react';
import Icon from '@/components/Icon';

/*
 * Buscador del catálogo. Lo usan `/comprar-entradas` y `/actividades`, para
 * que no haya dos implementaciones de lo mismo con dos comportamientos.
 *
 * No es un componente de datos: no sabe qué se está buscando ni filtra nada.
 * Sólo pinta el campo y avisa del cambio. El filtrado lo hace cada página
 * sobre sus propios datos, en cliente, sin API ni librería: para decenas de
 * elementos es instantáneo y añadir una dependencia sería pagar por resolver
 * algo que no es un problema.
 */

interface ExperienceSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  /** Texto del `<label>`, oculto pero leído por un lector de pantalla. */
  label: string;
  /** Identificador, para que label e input se enlacen si hay dos en la web. */
  id?: string;
  className?: string;
}

export function ExperienceSearch({
  value,
  onChange,
  placeholder,
  label,
  id = 'buscador',
  className = '',
}: ExperienceSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const limpiar = () => {
    onChange('');
    // Devolver el foco al campo: si el usuario limpió con el ratón, puede
    // seguir escribiendo sin volver a pulsar dentro.
    inputRef.current?.focus();
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <div className="relative">
        <Icon
          name="search"
          size={20}
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
        />

        <input
          ref={inputRef}
          id={id}
          type="search"
          inputMode="search"
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            // Enter no envía nada: no hay formulario ni página de resultados,
            // el filtrado ya ha ocurrido mientras se escribía.
            if (e.key === 'Enter') e.preventDefault();
            if (e.key === 'Escape' && value) {
              e.preventDefault();
              limpiar();
            }
          }}
          placeholder={placeholder}
          className="h-12 w-full rounded-lg border border-border-soft bg-white pl-12 pr-12 font-article text-base text-text-main shadow-card transition-colors placeholder:text-text-secondary/70 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20 sm:h-[52px]"
        />

        {value && (
          <button
            type="button"
            onClick={limpiar}
            aria-label="Limpiar la búsqueda"
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-background-light hover:text-text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            <Icon name="close" size={18} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
