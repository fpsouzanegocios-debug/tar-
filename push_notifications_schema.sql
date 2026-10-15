-- ==========================================================
-- SCRIPT: TABELA DE NOTIFICAÇÕES PUSH COM APP FECHADO
-- Execute este script no SQL Editor do Supabase:
-- https://hijjcxmaqbyusepciadc.supabase.co
-- ==========================================================

create table if not exists public.push_subscriptions (
  id uuid default gen_random_uuid() primary key,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  user_id uuid references auth.users(id) on delete set null,
  reminder_time text default '09:00',
  reminder_enabled boolean default true,
  zodiac_reminder_time text default '08:30',
  zodiac_reminder_enabled boolean default false,
  zodiac_sign text,
  timezone text default 'America/Sao_Paulo',
  user_agent text,
  last_sent_date text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Ativar Row Level Security
alter table public.push_subscriptions enable row level security;

-- Políticas de Acesso
create policy "Qualquer dispositivo pode registrar inscrição push"
  on public.push_subscriptions for insert
  with check (true);

create policy "Qualquer dispositivo pode atualizar sua inscrição push"
  on public.push_subscriptions for update
  using (true);

create policy "Dispositivos ou servidores podem ler inscrições push"
  on public.push_subscriptions for select
  using (true);

create policy "Dispositivos ou servidores podem remover inscrições canceladas"
  on public.push_subscriptions for delete
  using (true);

create index if not exists idx_push_subs_time on public.push_subscriptions (reminder_enabled, reminder_time);
