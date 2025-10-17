alter table if exists public.contacts
  add column if not exists subject text;
