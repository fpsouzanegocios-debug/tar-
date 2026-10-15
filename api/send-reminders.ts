import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';

// VAPID Credentials for Web Push Protocol (RFC 8291 / RFC 8030)
const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || 'BPKlf3JvMU_TFO2L0cwUxBmfAZfRVEekMucrETUN6_0xdgbAP4-WCLA7f2ePz6TRMST01W16nZt5XLFMzT1P47A';
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || 'NcvN46PLP_jp7cLJ6kRDbLIBB9YMzlfiAk67vzBki1E';
const VAPID_SUBJECT = 'mailto:contato@suatiragemdoamor.com';

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://hijjcxmaqbyusepciadc.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_Z8PQlOnFsbujaxt1ypZvKg_vE4fUVbL';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function getLocalTimeAndDate(timeZone: string) {
  try {
    const now = new Date();
    const timeFormatter = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const dateFormatter = new Intl.DateTimeFormat('en-CA', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return {
      time: timeFormatter.format(now).trim(), // "09:00"
      date: dateFormatter.format(now).trim(), // "2026-10-15"
    };
  } catch {
    const d = new Date();
    return {
      time: `${String(d.getUTCHours()).padStart(2, '0')}:${String(d.getUTCMinutes()).padStart(2, '0')}`,
      date: d.toISOString().split('T')[0],
    };
  }
}

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle immediate test with delay (e.g. 5s so user can close the app on phone)
  if (req.method === 'POST' && req.body?.action === 'test_delay') {
    const { delaySeconds = 5, subscription, title, body } = req.body;

    if (!subscription || !subscription.endpoint || !subscription.keys) {
      return res.status(400).json({ error: 'Inscrição push inválida.' });
    }

    if (delaySeconds > 0) {
      // Delay before sending so user can close the app / lock the screen
      const waitMs = Math.min(delaySeconds * 1000, 30000); // max 30s
      await new Promise((resolve) => setTimeout(resolve, waitMs));
    }

    const payload = JSON.stringify({
      title: title || '✨ Notificação em Segundo Plano!',
      body: body || 'Sua notificação de amor e oráculo chegou com o aplicativo fechado!',
      tag: 'test-push-' + Date.now(),
      url: '/',
    });

    try {
      await webpush.sendNotification(subscription, payload);
      return res.status(200).json({ success: true, message: 'Push entregue com sucesso!' });
    } catch (err: any) {
      console.error('Erro ao enviar web push de teste:', err);
      return res.status(500).json({ error: err?.message || 'Falha ao entregar push' });
    }
  }

  // Handle Broadcast or Cron execution
  try {
    const isBroadcast = req.method === 'POST' && req.body?.action === 'broadcast';
    const isForce = req.query?.force === 'true' || req.body?.force === true;

    // Fetch active push subscriptions from Supabase
    let query = supabase.from('push_subscriptions').select('*');
    if (!isBroadcast && !isForce) {
      query = query.eq('reminder_enabled', true);
    }

    const { data: subscriptions, error } = await query;

    if (error) {
      console.error('Supabase fetch error:', error);
      return res.status(500).json({ error: error.message });
    }

    if (!subscriptions || subscriptions.length === 0) {
      return res.status(200).json({ message: 'Nenhuma inscrição push encontrada.', sentCount: 0 });
    }

    let sentCount = 0;
    let failedCount = 0;
    let removedCount = 0;

    for (const sub of subscriptions) {
      const timezone = sub.timezone || 'America/Sao_Paulo';
      const { time: currentTime, date: currentDate } = getLocalTimeAndDate(timezone);

      let shouldSend = false;
      let notificationTitle = 'Sua Tiragem do Amor está pronta! ✨';
      let notificationBody = 'As 3 cartas do dia aguardam por você para iluminar caminhos e escolhas no amor.';

      if (isBroadcast) {
        shouldSend = true;
        if (req.body.title) notificationTitle = req.body.title;
        if (req.body.body) notificationBody = req.body.body;
      } else if (isForce) {
        shouldSend = true;
      } else {
        // Match user's scheduled reminder time
        // Compare "HH:mm" (or if within a 15-minute window if cron runs hourly/quarterly)
        const scheduledTime = sub.reminder_time || '09:00';
        
        // Exact match or current hour match
        const isTimeMatch = currentTime === scheduledTime || 
          currentTime.split(':')[0] === scheduledTime.split(':')[0]; // within the hour

        if (isTimeMatch && sub.last_sent_date !== currentDate) {
          shouldSend = true;
        }
      }

      if (shouldSend) {
        const pushSubscription = {
          endpoint: sub.endpoint,
          keys: {
            p256dh: sub.p256dh,
            auth: sub.auth,
          },
        };

        const payload = JSON.stringify({
          title: notificationTitle,
          body: notificationBody,
          tag: `tarot-daily-${currentDate}`,
          url: '/',
        });

        try {
          await webpush.sendNotification(pushSubscription, payload);
          sentCount++;

          // Update last sent date
          await supabase
            .from('push_subscriptions')
            .update({ last_sent_date: currentDate, updated_at: new Date().toISOString() })
            .eq('id', sub.id);
        } catch (err: any) {
          console.warn(`Erro enviando para ${sub.id}:`, err?.statusCode, err?.message);
          failedCount++;

          // If device unregistered (404 or 410 Gone), remove subscription from database
          if (err?.statusCode === 404 || err?.statusCode === 410) {
            await supabase.from('push_subscriptions').delete().eq('id', sub.id);
            removedCount++;
          }
        }
      }
    }

    return res.status(200).json({
      success: true,
      sentCount,
      failedCount,
      removedCount,
      totalChecked: subscriptions.length,
      timestamp: new Date().toISOString(),
    });
  } catch (globalErr: any) {
    console.error('Erro global na execução de lembretes:', globalErr);
    return res.status(500).json({ error: globalErr?.message || 'Erro interno do servidor' });
  }
}
