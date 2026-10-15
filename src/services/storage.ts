import type { 
  ReadingRecord, 
  UserProfile, 
  SelectedCard, 
  ZodiacSignId, 
  ZodiacDailyMessage, 
  ZodiacHistoryEntry 
} from '../types/tarot';
import { getSupabaseClient, isSupabaseConfigured, getOrCreateUser } from './supabase';
import { getCurrentUser } from './auth';

const PROFILE_KEY = 'sua_tiragem_profile';
const READINGS_KEY = 'sua_tiragem_readings';
const ACTIVE_READING_KEY = 'sua_tiragem_active_reading';
const ZODIAC_HISTORY_KEY = 'sua_tiragem_zodiac_history';
const ZODIAC_OFFLINE_CACHE_KEY = 'sua_tiragem_zodiac_offline_cache';

export const DEFAULT_PROFILE: UserProfile = {
  name: 'Viajante do Amor',
  timezone: 'America/Sao_Paulo',
  reminderEnabled: false,
  reminderTime: '09:00',
  zodiacReminderEnabled: false,
  zodiacReminderTime: '08:30',
  isOnboarded: false,
};

/**
 * Get current date string formatted as YYYY-MM-DD according to user's timezone
 */
export function getTodayDateString(timezone: string = 'America/Sao_Paulo'): string {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return formatter.format(new Date());
  } catch {
    // Fallback to local browser date
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

/**
 * Calculate milliseconds remaining until next midnight in user's timezone
 */
export function getMsUntilNextDay(timezone: string = 'America/Sao_Paulo'): number {
  try {
    const now = new Date();
    const dateStr = getTodayDateString(timezone);
    const [year, month, day] = dateStr.split('-').map(Number);
    
    // Construct next midnight in local perspective
    const nextMidnight = new Date(Date.UTC(year, month - 1, day + 1, 3, 0, 0)); // Approx 00:00 BRT
    const diff = nextMidnight.getTime() - now.getTime();
    return Math.max(diff, 60000);
  } catch {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.max(tomorrow.getTime() - now.getTime(), 60000);
  }
}

/**
 * Format remaining ms to HH:mm:ss
 */
export function formatCountdown(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
}

// PROFILE METHODS
export function getUserProfileKey(userId?: string): string {
  if (userId) return `${PROFILE_KEY}_${userId}`;
  const currentUser = getCurrentUser();
  if (currentUser?.id) return `${PROFILE_KEY}_${currentUser.id}`;
  return PROFILE_KEY;
}

export function loadLocalProfile(userId?: string): UserProfile {
  try {
    const userKey = getUserProfileKey(userId);
    const stored = localStorage.getItem(userKey);
    if (stored) {
      return { ...DEFAULT_PROFILE, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.warn('Erro ao carregar perfil local:', e);
  }
  return DEFAULT_PROFILE;
}

export function saveLocalProfile(profile: UserProfile, userId?: string): void {
  const userKey = getUserProfileKey(userId);
  localStorage.setItem(userKey, JSON.stringify(profile));
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  
  // Async sync to Supabase if configured
  if (isSupabaseConfigured()) {
    const client = getSupabaseClient();
    getOrCreateUser().then((user) => {
      if (user && client) {
        client.from('profiles').upsert({
          id: user.id,
          name: profile.name,
          timezone: profile.timezone,
          reminder_enabled: profile.reminderEnabled,
          reminder_time: profile.reminderTime,
          zodiac_sign: profile.zodiacSign || null,
          zodiac_reminder_enabled: profile.zodiacReminderEnabled || false,
          zodiac_reminder_time: profile.zodiacReminderTime || '08:30',
          birth_date: profile.birthDate || null,
          updated_at: new Date().toISOString()
        }).then(({ error }) => {
          if (error) console.warn('Supabase profile sync error:', error.message);
        });
      }
    });
  }
}

export function sanitizeMarkdown(text: string): string {
  if (!text) return '';
  return text
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1')
    .replace(/\*/g, '')
    .replace(/^>\s*/gm, '')
    .replace(/[“”]/g, '"')
    .trim();
}

// READINGS METHODS
export function loadAllReadings(): ReadingRecord[] {
  try {
    const stored = localStorage.getItem(READINGS_KEY);
    if (stored) {
      const list: ReadingRecord[] = JSON.parse(stored);
      return list
        .map((item) => ({
          ...item,
          summary: sanitizeMarkdown(item.summary),
        }))
        .sort((a, b) => b.timestamp - a.timestamp);
    }
  } catch (e) {
    console.warn('Erro ao carregar tiragens:', e);
  }
  return [];
}

export function saveCompletedReading(reading: ReadingRecord): void {
  reading.summary = sanitizeMarkdown(reading.summary);
  const readings = loadAllReadings();
  const existingIdx = readings.findIndex((r) => r.id === reading.id || r.date === reading.date);
  
  if (existingIdx >= 0) {
    readings[existingIdx] = reading;
  } else {
    readings.unshift(reading);
  }

  localStorage.setItem(READINGS_KEY, JSON.stringify(readings));
  // Clear any active unfinished draft
  clearActiveReadingDraft();

  // Also update user profile lastReadingDate
  const profile = loadLocalProfile();
  profile.lastReadingDate = reading.date;
  saveLocalProfile(profile);

  // Sync with Supabase if configured
  if (isSupabaseConfigured()) {
    const client = getSupabaseClient();
    getOrCreateUser().then((user) => {
      if (user && client) {
        client.from('readings').upsert({
          id: reading.id,
          user_id: user.id,
          date: reading.date,
          theme_id: reading.themeId,
          theme_title: reading.themeTitle,
          question: reading.question,
          is_custom_question: reading.isCustomQuestion,
          cards: reading.cards,
          summary: reading.summary,
          personal_note: reading.personalNote || null,
          created_at: new Date(reading.timestamp).toISOString()
        }).then(({ error }) => {
          if (error) console.warn('Supabase reading sync error:', error.message);
        });
      }
    });
  }
}

export function updatePersonalNote(readingId: string, note: string): void {
  const readings = loadAllReadings();
  const reading = readings.find((r) => r.id === readingId);
  if (reading) {
    reading.personalNote = note;
    localStorage.setItem(READINGS_KEY, JSON.stringify(readings));

    if (isSupabaseConfigured()) {
      const client = getSupabaseClient();
      client?.from('readings').update({ personal_note: note }).eq('id', readingId).then(({ error }) => {
        if (error) console.warn('Supabase note update error:', error.message);
      });
    }
  }
}

// ACTIVE READING DRAFT (Preserves state on page refresh)
export interface ActiveReadingDraft {
  step: 'theme' | 'question' | 'shuffle' | 'pick' | 'reveal';
  themeId?: string;
  question?: string;
  isCustomQuestion?: boolean;
  gridCards: number[]; // Array of 12 card IDs
  selectedIndices: number[]; // indices in grid
  assignedCards?: [SelectedCard, SelectedCard, SelectedCard];
  revealedIndices: number[];
  date: string;
}

export function loadActiveReadingDraft(): ActiveReadingDraft | null {
  try {
    const stored = localStorage.getItem(ACTIVE_READING_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Erro ao carregar rascunho de leitura:', e);
  }
  return null;
}

export function saveActiveReadingDraft(draft: ActiveReadingDraft): void {
  localStorage.setItem(ACTIVE_READING_KEY, JSON.stringify(draft));
}

export function clearActiveReadingDraft(): void {
  localStorage.removeItem(ACTIVE_READING_KEY);
}

/**
 * Check today's reading status for the user
 */
export function getDailyReadingStatus(timezone: string = 'America/Sao_Paulo'): {
  status: 'available' | 'in_progress' | 'completed';
  todayReading?: ReadingRecord;
} {
  const today = getTodayDateString(timezone);
  const readings = loadAllReadings();
  const todayReading = readings.find((r) => r.date === today && r.status === 'completed');

  if (todayReading) {
    return { status: 'completed', todayReading };
  }

  const activeDraft = loadActiveReadingDraft();
  if (activeDraft && activeDraft.date === today && activeDraft.step !== 'theme') {
    return { status: 'in_progress' };
  }

  return { status: 'available' };
}

/**
 * Reset today's reading so the user can generate a fresh draw immediately
 */
export function resetTodayReading(timezone: string = 'America/Sao_Paulo'): void {
  const today = getTodayDateString(timezone);
  const readings = loadAllReadings();
  const filtered = readings.filter((r) => r.date !== today);
  localStorage.setItem(READINGS_KEY, JSON.stringify(filtered));
  clearActiveReadingDraft();

  const profile = loadLocalProfile();
  if (profile.lastReadingDate === today) {
    profile.lastReadingDate = undefined;
    saveLocalProfile(profile);
  }
}

// ==================== ZODIAC STORAGE & HISTORY METHODS ====================

export function loadZodiacHistory(): ZodiacHistoryEntry[] {
  try {
    const stored = localStorage.getItem(ZODIAC_HISTORY_KEY);
    if (stored) {
      const list: ZodiacHistoryEntry[] = JSON.parse(stored);
      return list.sort((a, b) => b.timestamp - a.timestamp);
    }
  } catch (e) {
    console.warn('Erro ao carregar histórico do signo:', e);
  }
  return [];
}

export function saveZodiacHistoryEntry(entry: ZodiacHistoryEntry): void {
  const history = loadZodiacHistory();
  const existingIdx = history.findIndex((h) => h.id === entry.id || (h.signId === entry.signId && h.date === entry.date));
  
  if (existingIdx >= 0) {
    history[existingIdx] = {
      ...history[existingIdx],
      ...entry,
      personalNote: entry.personalNote !== undefined ? entry.personalNote : history[existingIdx].personalNote,
    };
  } else {
    history.unshift(entry);
  }

  localStorage.setItem(ZODIAC_HISTORY_KEY, JSON.stringify(history));

  // Also cache as latest offline synced message
  saveZodiacOfflineCache(entry.signId, entry.date, entry.message);

  // Sync to Supabase if configured
  if (isSupabaseConfigured()) {
    const client = getSupabaseClient();
    getOrCreateUser().then((user) => {
      if (user && client) {
        client.from('zodiac_history').upsert({
          id: entry.id,
          user_id: user.id,
          sign_id: entry.signId,
          sign_name: entry.signName,
          date: entry.date,
          message_data: entry.message,
          personal_note: entry.personalNote || null,
          created_at: new Date(entry.timestamp).toISOString(),
        }).then(({ error }) => {
          if (error) console.warn('Supabase zodiac sync error:', error.message);
        });
      }
    });
  }
}

export function updateZodiacHistoryNote(entryId: string, note: string): void {
  const history = loadZodiacHistory();
  const entry = history.find((h) => h.id === entryId);
  if (entry) {
    entry.personalNote = note;
    localStorage.setItem(ZODIAC_HISTORY_KEY, JSON.stringify(history));

    if (isSupabaseConfigured()) {
      const client = getSupabaseClient();
      client?.from('zodiac_history').update({ personal_note: note }).eq('id', entryId).then(({ error }) => {
        if (error) console.warn('Supabase zodiac note update error:', error.message);
      });
    }
  }
}

export interface ZodiacOfflineCache {
  signId: ZodiacSignId;
  date: string;
  message: ZodiacDailyMessage;
  cachedAt: number;
}

export function loadZodiacOfflineCache(): ZodiacOfflineCache | null {
  try {
    const stored = localStorage.getItem(ZODIAC_OFFLINE_CACHE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Erro ao carregar cache offline do signo:', e);
  }
  return null;
}

export function saveZodiacOfflineCache(signId: ZodiacSignId, date: string, message: ZodiacDailyMessage): void {
  const cache: ZodiacOfflineCache = {
    signId,
    date,
    message,
    cachedAt: Date.now(),
  };
  localStorage.setItem(ZODIAC_OFFLINE_CACHE_KEY, JSON.stringify(cache));
}

