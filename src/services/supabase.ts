import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Pre-fill user's provided Supabase URL
const DEFAULT_URL = 'https://hijjcxmaqbyusepciadc.supabase.co';

export function getSupabaseConfig(): { url: string; anonKey: string } {
  const envUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

  const storedUrl = localStorage.getItem('tarot_supabase_url');
  const storedKey = localStorage.getItem('tarot_supabase_anon_key');

  const url = storedUrl || envUrl || DEFAULT_URL;
  const anonKey = storedKey || envKey || '';

  return { url, anonKey };
}

export function saveSupabaseConfig(url: string, anonKey: string) {
  if (url) localStorage.setItem('tarot_supabase_url', url.trim());
  if (anonKey) localStorage.setItem('tarot_supabase_anon_key', anonKey.trim());
  initClient();
}

let supabaseInstance: SupabaseClient | null = null;

export function initClient(): SupabaseClient | null {
  const { url, anonKey } = getSupabaseConfig();
  if (url && anonKey) {
    try {
      supabaseInstance = createClient(url, anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      });
      return supabaseInstance;
    } catch (e) {
      console.warn('Erro ao inicializar cliente Supabase:', e);
      supabaseInstance = null;
      return null;
    }
  }
  supabaseInstance = null;
  return null;
}

export function getSupabaseClient(): SupabaseClient | null {
  if (!supabaseInstance) {
    return initClient();
  }
  return supabaseInstance;
}

export function isSupabaseConfigured(): boolean {
  const { url, anonKey } = getSupabaseConfig();
  return Boolean(url && anonKey && anonKey.length > 10);
}

export async function getOrCreateUser() {
  const client = getSupabaseClient();
  if (!client) return null;
  try {
    const { data: { user } } = await client.auth.getUser();
    if (user) return user;

    const { data, error } = await client.auth.signInAnonymously();
    if (!error && data?.user) {
      return data.user;
    }
  } catch (e) {
    console.warn('Erro ao autenticar usuário anônimo no Supabase:', e);
  }
  return null;
}
