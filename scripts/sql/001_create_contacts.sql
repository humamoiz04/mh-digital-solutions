-- Idempotent table creation
create extension if not exists pgcrypto;
create extension if not exists "uuid-ossp";

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  message text,
  page_path text,
  user_id uuid
);

alter table public.contacts enable row level security;

-- Allow anonymous form submissions to insert
do $$
begin
  if not exists (
    select 1 from pg_policies where polname = 'contacts_insert_anon'
  ) then
    create policy contacts_insert_anon
      on public.contacts
      for insert
      to anon
      with check (true);
  end if;
end $$;

-- By default do not allow selecting contacts as anon (protect PII)
-- You can add admin policies later for dashboards.
