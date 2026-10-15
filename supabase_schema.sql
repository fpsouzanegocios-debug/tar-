-- ==========================================================
-- SCHEMA PARA O APP "SUA TIRAGEM DO AMOR"
-- Execute este script no SQL Editor do seu projeto Supabase:
-- https://hijjcxmaqbyusepciadc.supabase.co
-- ==========================================================

-- 1. Habilitar extensões necessárias
create extension if not exists "uuid-ossp";

-- 2. Tabela de Perfis de Usuário
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null default 'Viajante do Amor',
  timezone text not null default 'America/Sao_Paulo',
  reminder_enabled boolean default false,
  reminder_time text default '09:00',
  zodiac_sign text,
  zodiac_reminder_enabled boolean default false,
  zodiac_reminder_time text default '08:30',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Ativar Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Políticas de RLS para perfis
create policy "Usuários podem ver seu próprio perfil"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Usuários podem atualizar seu próprio perfil"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Usuários podem inserir seu próprio perfil"
  on public.profiles for insert
  with check (auth.uid() = id);

-- 3. Tabela de Tiragens (Readings)
create table if not exists public.readings (
  id text primary key,
  user_id uuid references auth.users on delete cascade not null,
  date date not null,
  theme_id text not null,
  theme_title text not null,
  question text not null,
  is_custom_question boolean default false,
  cards jsonb not null,
  summary text not null,
  personal_note text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  -- Restrição única: Impede mais de uma leitura por dia por usuário no banco
  constraint unique_user_daily_reading unique (user_id, date)
);

-- Ativar RLS para tiragens
alter table public.readings enable row level security;

-- Políticas de RLS para tiragens
create policy "Usuários podem ler apenas suas próprias tiragens"
  on public.readings for select
  using (auth.uid() = user_id);

create policy "Usuários podem inserir suas próprias tiragens"
  on public.readings for insert
  with check (auth.uid() = user_id);

create policy "Usuários podem atualizar suas próprias tiragens (ex: anotações)"
  on public.readings for update
  using (auth.uid() = user_id);

create policy "Usuários podem deletar suas próprias tiragens se desejarem"
  on public.readings for delete
  using (auth.uid() = user_id);

-- 4. Tabela de Histórico do Signo (Zodiac History)
create table if not exists public.zodiac_history (
  id text primary key,
  user_id uuid references auth.users on delete cascade not null,
  sign_id text not null,
  sign_name text not null,
  date date not null,
  message_data jsonb not null,
  personal_note text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  constraint unique_user_daily_sign unique (user_id, sign_id, date)
);

-- Ativar RLS para zodiac_history
alter table public.zodiac_history enable row level security;

-- Políticas de RLS para zodiac_history
create policy "Usuários podem ver seu próprio histórico de signo"
  on public.zodiac_history for select
  using (auth.uid() = user_id);

create policy "Usuários podem inserir seu próprio histórico de signo"
  on public.zodiac_history for insert
  with check (auth.uid() = user_id);

create policy "Usuários podem atualizar seu próprio histórico de signo"
  on public.zodiac_history for update
  using (auth.uid() = user_id);

create policy "Usuários podem deletar seu próprio histórico de signo"
  on public.zodiac_history for delete
  using (auth.uid() = user_id);

-- 5. Função e Trigger para criar perfil automaticamente no primeiro cadastro (Sign Up / Anônimo)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, timezone)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', 'Viajante do Amor'),
    coalesce(new.raw_user_meta_data->>'timezone', 'America/Sao_Paulo')
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

-- Trigger
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Índices para performance
create index if not exists idx_readings_user_date on public.readings (user_id, date desc);
create index if not exists idx_zodiac_history_user_date on public.zodiac_history (user_id, date desc);

-- 6. Tabela de Inscrições Push Web (Para entrega com app fechado no celular)
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

-- Ativar RLS
alter table public.push_subscriptions enable row level security;

-- Políticas de RLS para permitir que qualquer dispositivo registre e atualize sua inscrição
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

