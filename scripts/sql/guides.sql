-- Tabla para guías editables en panel admin
create table if not exists public.guides (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  subtitle text,
  description text not null,
  duration text not null,
  price numeric(10,2) not null default 0,
  image text not null,
  color text,
  features jsonb default '[]'::jsonb,
  includes jsonb default '[]'::jsonb,
  highlights jsonb default '[]'::jsonb,
  featured boolean default false,
  badge_text text,
  badge_color text,
  type text default 'main',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists guides_slug_idx on public.guides (slug);

-- Trigger simple para updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists guides_set_updated_at on public.guides;
create trigger guides_set_updated_at
before update on public.guides
for each row execute function public.set_updated_at();
