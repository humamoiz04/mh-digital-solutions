-- Supabase RLS Setup Guide
-- This script sets up proper Row Level Security policies for your database

begin;

-- Enable RLS on all tables
alter table if exists public.contacts enable row level security;
alter table if exists public.appointments enable row level security;

-- CONTACTS TABLE POLICIES
-- Allow anonymous users to insert (form submissions)
create policy if not exists "contacts_insert_anon"
  on public.contacts
  for insert
  to anon
  with check (true);

-- Allow authenticated users to view their own contacts
create policy if not exists "contacts_select_authenticated"
  on public.contacts
  for select
  to authenticated
  using (auth.uid() = user_id or user_id is null);

-- Allow service role to view all (for admin dashboard)
create policy if not exists "contacts_select_service_role"
  on public.contacts
  for select
  to service_role
  using (true);

-- APPOINTMENTS TABLE POLICIES
-- Allow anonymous users to insert (booking form)
create policy if not exists "appointments_insert_anon"
  on public.appointments
  for insert
  to anon
  with check (true);

-- Allow authenticated users to view their own appointments
create policy if not exists "appointments_select_authenticated"
  on public.appointments
  for select
  to authenticated
  using (auth.uid() = user_id or user_id is null);

-- Allow service role to view all
create policy if not exists "appointments_select_service_role"
  on public.appointments
  for select
  to service_role
  using (true);

commit;
