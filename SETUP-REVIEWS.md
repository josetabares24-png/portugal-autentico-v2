# Configurar reseñas reales

Ejecuta este SQL en Supabase para habilitar reseñas verificadas por compra:

```sql
create table if not exists public.guide_reviews (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  guide_id text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists guide_reviews_user_guide_unique
  on public.guide_reviews (user_id, guide_id);

create or replace function public.set_guide_reviews_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists guide_reviews_set_updated_at on public.guide_reviews;
create trigger guide_reviews_set_updated_at
before update on public.guide_reviews
for each row execute procedure public.set_guide_reviews_updated_at();
```

Notas:
- Solo se permite una reseña por usuario y guía (se actualiza si la vuelves a enviar).
- El endpoint valida que exista una compra completada antes de aceptar la reseña.
