import type { UserProfile, ZodiacSignId } from '../types/tarot';
import { getTodayDateString } from './storage';
import { getSupabaseClient, isSupabaseConfigured } from './supabase';

export const VAPID_PUBLIC_KEY = 'BPKlf3JvMU_TFO2L0cwUxBmfAZfRVEekMucrETUN6_0xdgbAP4-WCLA7f2ePz6TRMST01W16nZt5XLFMzT1P47A';

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export async function subscribeToPushNotifications(userId?: string): Promise<PushSubscription | null> {
  if (!isNotificationSupported() || !('serviceWorker' in navigator) || !('PushManager' in window)) {
    return null;
  }

  try {
    const reg = await navigator.serviceWorker.ready;
    let subscription = await reg.pushManager.getSubscription();

    if (!subscription) {
      subscription = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      });
    }

    if (subscription && isSupabaseConfigured()) {
      const subJson = subscription.toJSON();
      const endpoint = subJson.endpoint;
      const p256dh = subJson.keys?.p256dh;
      const auth = subJson.keys?.auth;

      if (endpoint && p256dh && auth) {
        const client = getSupabaseClient();
        if (client) {
          try {
            await client.from('push_subscriptions').upsert({
              endpoint,
              p256dh,
              auth,
              user_id: userId || null,
              updated_at: new Date().toISOString(),
            }, { onConflict: 'endpoint' });
          } catch (e: any) {
            console.warn('Push sub save note:', e?.message);
          }
        }
      }
    }

    // Register Periodic Background Sync if available on device (Android Chrome PWA)
    if ('periodicSync' in reg) {
      try {
        await (reg as any).periodicSync.register('check-tarot-reminders', {
          minInterval: 6 * 60 * 60 * 1000,
        });
      } catch {
        // unsupported or denied
      }
    }

    return subscription;
  } catch (err) {
    console.warn('Erro ao registrar Push Subscription:', err);
    return null;
  }
}

export interface BroadcastMessage {
  id: string;
  title: string;
  body: string;
  target: 'all' | ZodiacSignId;
  targetName?: string;
  createdAt: number;
  sentBy: string;
}

export interface AutomatedTemplates {
  tarotTitle: string;
  tarotBody: string;
  zodiacTitle: string;
  zodiacBody: string;
}

const BROADCAST_KEY = 'tarot_broadcast_messages';
const READ_BROADCASTS_KEY = 'tarot_read_broadcast_ids';
const TEMPLATES_KEY = 'tarot_automated_templates';

const DEFAULT_TEMPLATES: AutomatedTemplates = {
  tarotTitle: 'Sua Tiragem do Amor está pronta! ✨',
  tarotBody: 'As 3 cartas do dia aguardam por você para iluminar caminhos e escolhas no amor.',
  zodiacTitle: 'Conselho do seu Signo no Amor 🌟',
  zodiacBody: 'A mensagem astrológica de hoje para o seu signo já está disponível. Venha conferir!',
};

/**
 * Check if the browser supports notifications
 */
export function isNotificationSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

/**
 * Current notification permission: 'granted' | 'denied' | 'default'
 */
export function getNotificationPermission(): NotificationPermission {
  if (!isNotificationSupported()) return 'denied';
  return Notification.permission;
}

/**
 * Request notification permission from user
 */
export async function requestNotificationPermission(userId?: string): Promise<boolean> {
  if (!isNotificationSupported()) return false;
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      // Subscribe to background push
      await subscribeToPushNotifications(userId);

      // Send a welcoming confirmation notification
      await showAppNotification('✨ Notificações ativadas!', {
        body: 'Você receberá os conselhos diários do oráculo e do seu signo no horário escolhido.',
        tag: 'welcome-notification',
      });
      return true;
    }
    return false;
  } catch (err) {
    console.warn('Erro ao solicitar permissão de notificação:', err);
    return false;
  }
}

/**
 * Display a system notification using Service Worker or Notification API
 */
export async function showAppNotification(title: string, options?: NotificationOptions): Promise<void> {
  if (!isNotificationSupported() || Notification.permission !== 'granted') {
    return;
  }

  const defaultOptions: any = {
    icon: '/icon.svg',
    badge: '/icon.svg',
    vibrate: [200, 100, 200],
    ...options,
  };

  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.ready;
      if (reg && reg.showNotification) {
        await reg.showNotification(title, defaultOptions);
        return;
      }
    }
  } catch (e) {
    console.warn('Falha via Service Worker, tentando fallback:', e);
  }

  try {
    new Notification(title, defaultOptions);
  } catch (e) {
    console.warn('Erro ao exibir notificação via Notification API:', e);
  }
}

// ==================== AUTOMATED TEMPLATES ====================
export function getAutomatedTemplates(): AutomatedTemplates {
  try {
    const stored = localStorage.getItem(TEMPLATES_KEY);
    return stored ? { ...DEFAULT_TEMPLATES, ...JSON.parse(stored) } : DEFAULT_TEMPLATES;
  } catch {
    return DEFAULT_TEMPLATES;
  }
}

export function saveAutomatedTemplates(templates: AutomatedTemplates): void {
  localStorage.setItem(TEMPLATES_KEY, JSON.stringify(templates));
}

// ==================== BROADCAST MESSAGES ====================
export function getBroadcastMessages(): BroadcastMessage[] {
  try {
    const stored = localStorage.getItem(BROADCAST_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function sendBroadcastMessage(msg: Omit<BroadcastMessage, 'id' | 'createdAt'>): BroadcastMessage {
  const fullMsg: BroadcastMessage = {
    ...msg,
    id: 'broadcast_' + Date.now().toString(36),
    createdAt: Date.now(),
  };

  const list = getBroadcastMessages();
  list.unshift(fullMsg);
  localStorage.setItem(BROADCAST_KEY, JSON.stringify(list));

  // Trigger system notification immediately on this device if matches target
  showAppNotification(fullMsg.title, {
    body: fullMsg.body,
    tag: fullMsg.id,
    data: { url: '/' },
  });

  return fullMsg;
}

/**
 * Check for pending broadcast messages sent by admin that haven't been shown yet
 */
export function checkPendingBroadcasts(userSign?: ZodiacSignId): void {
  if (!isNotificationSupported() || Notification.permission !== 'granted') return;

  try {
    const readIdsRaw = localStorage.getItem(READ_BROADCASTS_KEY);
    const readIds: string[] = readIdsRaw ? JSON.parse(readIdsRaw) : [];
    const messages = getBroadcastMessages();

    for (const msg of messages) {
      if (readIds.includes(msg.id)) continue;

      // Check if message targets this user (all or specific sign)
      if (msg.target === 'all' || (userSign && msg.target === userSign)) {
        showAppNotification(msg.title, {
          body: msg.body,
          tag: msg.id,
          data: { url: '/' },
        });

        readIds.push(msg.id);
        localStorage.setItem(READ_BROADCASTS_KEY, JSON.stringify(readIds));
      }
    }
  } catch (e) {
    console.warn('Erro ao verificar broadcasts pendentes:', e);
  }
}

// ==================== SCHEDULED REMINDERS ENGINE ====================
/**
 * Evaluates current time against user preferences and fires scheduled notification if due
 */
export function checkScheduledReminders(profile: UserProfile): void {
  if (!isNotificationSupported() || Notification.permission !== 'granted') return;

  const todayStr = getTodayDateString(profile.timezone);

  // Get current HH:mm in user timezone
  let currentTime = '';
  try {
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      timeZone: profile.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    currentTime = formatter.format(new Date()).trim();
  } catch {
    const d = new Date();
    currentTime = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }

  const templates = getAutomatedTemplates();

  // 1. Tarot Reading Reminder
  if (profile.reminderEnabled && profile.reminderTime) {
    const lastTarotSent = localStorage.getItem(`tarot_last_sent_${profile.id || 'default'}`);
    if (currentTime === profile.reminderTime && lastTarotSent !== todayStr) {
      showAppNotification(templates.tarotTitle, {
        body: templates.tarotBody,
        tag: `tarot-reminder-${todayStr}`,
        data: { url: '/' },
      });
      localStorage.setItem(`tarot_last_sent_${profile.id || 'default'}`, todayStr);
    }
  }

  // 2. Zodiac Daily Message Reminder
  if (profile.zodiacReminderEnabled && profile.zodiacReminderTime) {
    const lastZodiacSent = localStorage.getItem(`zodiac_last_sent_${profile.id || 'default'}`);
    if (currentTime === profile.zodiacReminderTime && lastZodiacSent !== todayStr) {
      showAppNotification(templates.zodiacTitle, {
        body: templates.zodiacBody,
        tag: `zodiac-reminder-${todayStr}`,
        data: { url: '/' },
      });
      localStorage.setItem(`zodiac_last_sent_${profile.id || 'default'}`, todayStr);
    }
  }
}
