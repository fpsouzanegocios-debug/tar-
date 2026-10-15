import { getSupabaseClient, isSupabaseConfigured } from './supabase';

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
}

export interface LeadRecord {
  id: string;
  email: string;
  name: string;
  createdAt: number;
  birthDate?: string;
  zodiacSign?: string;
  lastLoginAt?: number;
}

export interface StoredAccount {
  id: string;
  email: string;
  passwordHash: string;
  name?: string;
  createdAt: number;
  birthDate?: string;
  zodiacSign?: string;
  lastLoginAt?: number;
}

const SESSION_KEY = 'tarot_current_session';
const ACCOUNTS_KEY = 'tarot_registered_accounts';

// Simple fast hashing for local credentials fallback
function hashPassword(pass: string): string {
  let hash = 0;
  for (let i = 0; i < pass.length; i++) {
    const char = pass.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return 'h_' + Math.abs(hash).toString(36) + '_' + pass.length;
}

function getStoredAccounts(): StoredAccount[] {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveStoredAccount(account: StoredAccount) {
  const accounts = getStoredAccounts().filter(a => a.email.toLowerCase() !== account.email.toLowerCase());
  accounts.push(account);
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

export function getCurrentUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setCurrentSession(user: AuthUser | null) {
  if (user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(SESSION_KEY);
  }
}

/**
 * Signs in user with email and password
 */
export async function signIn(email: string, password: string): Promise<AuthUser> {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPassword = password.trim();

  if (!cleanEmail || !cleanPassword) {
    throw new Error('Por favor, informe seu e-mail e senha.');
  }

  // 1. Try Supabase Auth first if configured
  if (isSupabaseConfigured()) {
    try {
      const client = getSupabaseClient();
      if (client) {
        const { data, error } = await client.auth.signInWithPassword({
          email: cleanEmail,
          password: cleanPassword,
        });

        if (!error && data?.user) {
          const authUser: AuthUser = {
            id: data.user.id,
            email: data.user.email || cleanEmail,
            name: data.user.user_metadata?.name || cleanEmail.split('@')[0],
          };
          setCurrentSession(authUser);
          // Also save in local fallback
          saveStoredAccount({
            id: authUser.id,
            email: cleanEmail,
            passwordHash: hashPassword(cleanPassword),
            name: authUser.name,
            createdAt: Date.now(),
          });
          return authUser;
        }
      }
    } catch (err: any) {
      console.warn('Supabase signIn error, checking local account fallback:', err?.message);
    }
  }

  // 2. Check local accounts registry fallback
  const accounts = getStoredAccounts();
  const found = accounts.find(a => a.email.toLowerCase() === cleanEmail);

  if (found) {
    if (found.passwordHash === hashPassword(cleanPassword)) {
      const authUser: AuthUser = {
        id: found.id,
        email: found.email,
        name: found.name || cleanEmail.split('@')[0],
      };
      setCurrentSession(authUser);
      return authUser;
    } else {
      throw new Error('Senha incorreta. Por favor, verifique seus dados.');
    }
  }

  // If this account was not found locally or in Supabase
  throw new Error('Conta não encontrada com este e-mail. Crie uma nova conta clicando em "Criar conta".');
}

/**
 * Creates a new account with email and password
 */
export async function signUp(email: string, password: string, name?: string): Promise<AuthUser> {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPassword = password.trim();
  const displayName = (name || cleanEmail.split('@')[0]).trim();

  if (!cleanEmail || !cleanEmail.includes('@')) {
    throw new Error('Por favor, insira um endereço de e-mail válido.');
  }

  if (cleanPassword.length < 6) {
    throw new Error('A senha deve ter no mínimo 6 caracteres.');
  }

  let createdId = 'user_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);

  // 1. Try Supabase Auth sign up if configured
  if (isSupabaseConfigured()) {
    try {
      const client = getSupabaseClient();
      if (client) {
        const { data, error } = await client.auth.signUp({
          email: cleanEmail,
          password: cleanPassword,
          options: {
            data: { name: displayName },
          },
        });

        if (!error && data?.user) {
          createdId = data.user.id;
        } else if (error && error.message.includes('already registered')) {
          throw new Error('Este e-mail já está cadastrado. Toque em "Entrar na minha conta".');
        }
      }
    } catch (err: any) {
      if (err?.message?.includes('já está cadastrado') || err?.message?.includes('already registered')) {
        throw err;
      }
      console.warn('Supabase signUp warning:', err?.message);
    }
  }

  // 2. Save in local accounts registry
  const authUser: AuthUser = {
    id: createdId,
    email: cleanEmail,
    name: displayName,
  };

  saveStoredAccount({
    id: authUser.id,
    email: cleanEmail,
    passwordHash: hashPassword(cleanPassword),
    name: displayName,
    createdAt: Date.now(),
  });

  setCurrentSession(authUser);
  return authUser;
}

/**
 * Signs out current user
 */
export async function signOut(): Promise<void> {
  if (isSupabaseConfigured()) {
    try {
      const client = getSupabaseClient();
      if (client) {
        await client.auth.signOut();
      }
    } catch (e) {
      console.warn('Erro ao deslogar do Supabase:', e);
    }
  }
  setCurrentSession(null);
}

/**
 * Checks if the given user is the Administrator (Account "idealconsumo")
 */
export function isUserAdmin(user: AuthUser | null, profileName?: string): boolean {
  if (!user) return false;
  const email = (user.email || '').toLowerCase().trim();
  const userName = (user.name || '').toLowerCase().trim();
  const profName = (profileName || '').toLowerCase().trim();

  return (
    email.includes('idealconsumo') ||
    userName.includes('idealconsumo') ||
    profName.includes('idealconsumo') ||
    email === 'jujuoliveira@gmail.com' ||
    email === 'admin@idealconsumo.com'
  );
}

/**
 * Update lead info (e.g. birthDate, zodiacSign, name)
 */
export function updateLeadInfo(userId: string, data: Partial<LeadRecord>): void {
  const accounts = getStoredAccounts();
  const idx = accounts.findIndex(a => a.id === userId || (data.email && a.email.toLowerCase() === data.email.toLowerCase()));
  if (idx !== -1) {
    accounts[idx] = { ...accounts[idx], ...data };
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  }
}

/**
 * Returns all registered leads (combining local accounts, local profile data, and Supabase)
 */
export async function getAllLeads(): Promise<LeadRecord[]> {
  const localAccounts = getStoredAccounts();
  const leadsMap = new Map<string, LeadRecord>();

  // 1. Process local registered accounts
  for (const acc of localAccounts) {
    let birthDate = acc.birthDate;
    let zodiacSign = acc.zodiacSign;
    let name = acc.name || acc.email.split('@')[0];

    try {
      const userProfileRaw = localStorage.getItem(`sua_tiragem_profile_${acc.id}`);
      if (userProfileRaw) {
        const parsed = JSON.parse(userProfileRaw);
        if (parsed.birthDate) birthDate = parsed.birthDate;
        if (parsed.zodiacSign) zodiacSign = parsed.zodiacSign;
        if (parsed.name && parsed.name !== 'Viajante do Amor') name = parsed.name;
      }
    } catch {
      // fallback
    }

    leadsMap.set(acc.email.toLowerCase(), {
      id: acc.id,
      email: acc.email,
      name,
      createdAt: acc.createdAt || Date.now(),
      birthDate,
      zodiacSign,
      lastLoginAt: acc.lastLoginAt,
    });
  }

  // 2. Fetch from Supabase profiles table if available
  if (isSupabaseConfigured()) {
    try {
      const client = getSupabaseClient();
      if (client) {
        const { data, error } = await client
          .from('profiles')
          .select('*')
          .order('updated_at', { ascending: false });

        if (!error && data) {
          for (const p of data) {
            const key = (p.email || p.id).toLowerCase();
            const existing = leadsMap.get(key);
            leadsMap.set(key, {
              id: p.id,
              email: p.email || existing?.email || 'Usuário Supabase',
              name: p.name || existing?.name || 'Viajante do Amor',
              createdAt: p.created_at ? new Date(p.created_at).getTime() : (existing?.createdAt || Date.now()),
              birthDate: p.birth_date || existing?.birthDate,
              zodiacSign: p.zodiac_sign || existing?.zodiacSign,
              lastLoginAt: existing?.lastLoginAt,
            });
          }
        }
      }
    } catch (e) {
      console.warn('Erro ao sincronizar leads do Supabase:', e);
    }
  }

  const result = Array.from(leadsMap.values());
  result.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  return result;
}

/**
 * Remove a lead record
 */
export function deleteLead(leadId: string): void {
  const accounts = getStoredAccounts().filter(a => a.id !== leadId);
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

