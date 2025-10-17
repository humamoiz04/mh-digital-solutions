create extension if not exists pgcrypto;
create extension if not exists "uuid-ossp";

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company text,
  preferred_date date,
  preferred_time text,
  timezone text,
  notes text,
  page_path text,
  user_id uuid
);

alter table public.appointments enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies where polname = 'appointments_insert_anon'
  ) then
    create policy appointments_insert_anon
      on public.appointments
      for insert
      to anon
      with check (true);
  end if;
end $$;
