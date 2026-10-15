import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  Heart, 
  UserCheck, 
  Users, 
  Lightbulb, 
  HelpCircle, 
  Calendar, 
  Edit3, 
  Save, 
  Check, 
  History as HistoryIcon, 
  ArrowLeft, 
  WifiOff, 
  AlertCircle,
  Share2
} from 'lucide-react';
import type { 
  ZodiacSignId, 
  UserProfile, 
  ZodiacHistoryEntry,
  ZodiacSignInfo
} from '../types/tarot';
import { 
  getZodiacDailyMessage 
} from '../data/zodiac';
import { ZODIAC_SIGNS_INFO } from '../data/zodiac/signsInfo';
import confetti from 'canvas-confetti';
import { 
  getTodayDateString, 
  loadZodiacHistory, 
  saveZodiacHistoryEntry, 
  updateZodiacHistoryNote,
  loadZodiacOfflineCache,
  saveZodiacOfflineCache,
  saveLocalProfile
} from '../services/storage';
import { ZodiacSelectorModal } from './ZodiacSelectorModal';
import { ZodiacGlyph } from './ZodiacGlyph';
import { useLanguage } from '../i18n';

interface ZodiacScreenProps {
  profile: UserProfile;
  onUpdateProfile: (profile: UserProfile) => void;
  onNavigateToTab?: (tab: any) => void;
}

export const ZodiacScreen: React.FC<ZodiacScreenProps> = ({
  profile,
  onUpdateProfile,
  onNavigateToTab,
}) => {
  const { t, language, translateSign } = useLanguage();
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'today' | 'history'>('today');
  const [historyList, setHistoryList] = useState<ZodiacHistoryEntry[]>([]);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<ZodiacHistoryEntry | null>(null);
  const [elementFilter, setElementFilter] = useState<string>('Todos');

  // Reflection note state
  const [isWritingNote, setIsWritingNote] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(false);

  // Offline detection
  const [isServingOfflineFallback, setIsServingOfflineFallback] = useState<boolean>(false);
  const [offlineDate, setOfflineDate] = useState<string>('');

  const todayStr = useMemo(() => getTodayDateString(profile.timezone), [profile.timezone]);

  // Online / Offline event listeners
  useEffect(() => {
    const handleStatus = () => {
      if (!navigator.onLine) {
        const cached = loadZodiacOfflineCache();
        if (cached && profile.zodiacSign && cached.signId === profile.zodiacSign && cached.date !== todayStr) {
          setIsServingOfflineFallback(true);
          setOfflineDate(cached.date);
        }
      } else {
        setIsServingOfflineFallback(false);
      }
    };

    window.addEventListener('online', handleStatus);
    window.addEventListener('offline', handleStatus);
    return () => {
      window.removeEventListener('online', handleStatus);
      window.removeEventListener('offline', handleStatus);
    };
  }, [profile.zodiacSign, todayStr]);

  // Reload history
  const reloadHistory = () => {
    const list = loadZodiacHistory();
    setHistoryList(list);
  };

  useEffect(() => {
    reloadHistory();
  }, []);

  // Daily message computation
  const dailyData = useMemo(() => {
    if (!profile.zodiacSign) return null;
    return getZodiacDailyMessage(profile.zodiacSign, todayStr);
  }, [profile.zodiacSign, todayStr]);

  // Handle message recording and offline cache
  useEffect(() => {
    if (!profile.zodiacSign || !dailyData) return;

    // Check if offline fallback is required
    if (!navigator.onLine) {
      const cached = loadZodiacOfflineCache();
      if (cached && cached.signId === profile.zodiacSign) {
        if (cached.date !== todayStr) {
          setIsServingOfflineFallback(true);
          setOfflineDate(cached.date);
        } else {
          setIsServingOfflineFallback(false);
        }
      }
    } else {
      setIsServingOfflineFallback(false);
    }

    // Record entry into local history (preserves original text)
    const entryId = `${profile.zodiacSign}_${todayStr}`;
    const existing = loadZodiacHistory().find(h => h.id === entryId || (h.signId === profile.zodiacSign && h.date === todayStr));
    
    if (existing?.personalNote) {
      setNoteText(existing.personalNote);
    } else {
      setNoteText('');
    }

    saveZodiacHistoryEntry({
      id: entryId,
      signId: profile.zodiacSign,
      signName: dailyData.signInfo.name,
      date: todayStr,
      timestamp: Date.now(),
      message: dailyData.message,
      personalNote: existing?.personalNote,
    });

    saveZodiacOfflineCache(profile.zodiacSign, todayStr, dailyData.message);
    reloadHistory();
  }, [profile.zodiacSign, todayStr, dailyData]);

  // Date formatted in locale
  const formattedTodayDate = useMemo(() => {
    try {
      const [year, month, day] = todayStr.split('-').map(Number);
      const d = new Date(year, month - 1, day);
      return new Intl.DateTimeFormat(language === 'es' ? 'es-ES' : 'pt-BR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(d);
    } catch {
      return todayStr;
    }
  }, [todayStr, language]);

  // Change sign handler
  const handleSelectSign = (signId: ZodiacSignId) => {
    const updated: UserProfile = {
      ...profile,
      zodiacSign: signId,
      lastZodiacRevealDate: todayStr,
    };
    saveLocalProfile(updated);
    onUpdateProfile(updated);
    setIsSelectorOpen(false);
    setViewMode('today');
  };

  // Reveal today's daily message handler
  const handleRevealToday = () => {
    try {
      confetti({
        particleCount: 40,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#E1C38B', '#F4DFB8', '#9B51E0', '#FFF'],
      });
    } catch {
      // safe fallback
    }
    const updated: UserProfile = {
      ...profile,
      lastZodiacRevealDate: todayStr,
    };
    saveLocalProfile(updated);
    onUpdateProfile(updated);
  };

  // Save reflection
  const handleSaveReflection = () => {
    if (!profile.zodiacSign) return;
    const entryId = `${profile.zodiacSign}_${todayStr}`;
    updateZodiacHistoryNote(entryId, noteText);
    reloadHistory();
    setIsWritingNote(false);
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 3000);
  };

  // Share message
  const handleShareMessage = async () => {
    if (!dailyData) return;
    const textToShare = `✨ ${dailyData.signInfo.name} — Seu signo no amor hoje (${formattedTodayDate})\n\n"${dailyData.message.mainMessage}"\n\n💡 Conselho: ${dailyData.message.advice}\n\nVia App Sua Tiragem do Amor`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Meu Signo no Amor — ${dailyData.signInfo.name}`,
          text: textToShare,
        });
      } catch {
        // user cancelled or unsupported
      }
    } else {
      navigator.clipboard.writeText(textToShare);
      setShareFeedback(true);
      setTimeout(() => setShareFeedback(false), 2500);
    }
  };

  // ==================== 1. NO SIGN SELECTED STATE ====================
  if (!profile.zodiacSign) {
    const filteredSigns = elementFilter === 'Todos'
      ? ZODIAC_SIGNS_INFO
      : ZODIAC_SIGNS_INFO.filter((s) => s.element === elementFilter);

    const elementTheme: Record<string, { dot: string; text: string; bg: string; border: string }> = {
      Fogo: {
        dot: 'bg-amber-400',
        text: 'text-amber-300',
        bg: 'bg-amber-950/40',
        border: 'border-amber-500/30',
      },
      Terra: {
        dot: 'bg-emerald-400',
        text: 'text-emerald-300',
        bg: 'bg-emerald-950/40',
        border: 'border-emerald-500/30',
      },
      Ar: {
        dot: 'bg-sky-400',
        text: 'text-sky-300',
        bg: 'bg-sky-950/40',
        border: 'border-sky-500/30',
      },
      Água: {
        dot: 'bg-indigo-400',
        text: 'text-indigo-300',
        bg: 'bg-indigo-950/40',
        border: 'border-indigo-500/30',
      },
    };

    const formatPeriod = (period: string) => {
      return period
        .replace(/\s*de\s*/g, ' ')
        .replace(/\.\s*–\s*/g, ' — ')
        .replace(/\.\s*-\s*/g, ' — ')
        .replace(/\./g, '')
        .trim();
    };

    return (
      <div className="space-y-6 pb-28 pt-4 max-w-xl mx-auto px-4 animate-fadeIn">
        <header className="text-center pt-2 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A1B36] border border-[#E1C38B]/30 text-xs text-[#E1C38B] font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Meu Signo no Amor</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gold-gradient">
            Escolha o seu Signo
          </h1>
          <p className="text-xs sm:text-sm text-[#C1AFCE] max-w-md mx-auto leading-relaxed">
            Receba todos os dias uma reflexão consciente sobre amor, reciprocidade e relacionamentos voltada para o seu signo solar.
          </p>
          <p className="text-[11px] text-[#E1C38B]/90 font-medium">
            Direto e intuitivo: sem formulários de nascimento ou mapas complicados.
          </p>
        </header>

        {/* Element Filter Pills */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap pt-1">
          {(['Todos', 'Fogo', 'Terra', 'Ar', 'Água'] as const).map((elem) => (
            <button
              key={elem}
              onClick={() => setElementFilter(elem)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                elementFilter === elem
                  ? 'bg-[#E1C38B] text-[#1B1026] font-semibold shadow-md'
                  : 'bg-[#2A1B36]/80 text-[#C1AFCE] border border-white/5 hover:border-[#E1C38B]/40 hover:text-[#F7EEFB]'
              }`}
            >
              {elem}
            </button>
          ))}
        </div>

        {/* 12 Signs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
          {filteredSigns.map((sign: ZodiacSignInfo) => {
            const elemStyle = elementTheme[sign.element] || {
              dot: 'bg-[#E1C38B]',
              text: 'text-[#E1C38B]',
              bg: 'bg-[#E1C38B]/10',
              border: 'border-[#E1C38B]/20',
            };

            return (
              <button
                key={sign.id}
                onClick={() => handleSelectSign(sign.id)}
                className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-gradient-to-b from-[#2A1B36] to-[#1A0E24] border border-[#E1C38B]/20 hover:border-[#E1C38B]/70 hover:shadow-[0_8px_25px_rgba(225,195,139,0.18)] hover:-translate-y-0.5 transition-all duration-300 text-center cursor-pointer min-h-[148px]"
              >
                {/* Element Pill Top */}
                <div className="w-full flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${elemStyle.bg} ${elemStyle.border} ${elemStyle.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${elemStyle.dot}`} />
                    {sign.element}
                  </span>
                </div>

                {/* Elegant Vector SVG Glyph Medallion */}
                <div className="my-2 w-12 h-12 rounded-full bg-[#1B1026] border border-[#E1C38B]/35 flex items-center justify-center text-[#E1C38B] group-hover:border-[#E1C38B] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(225,195,139,0.35)] transition-all duration-300">
                  <ZodiacGlyph signId={sign.id} className="w-6 h-6 text-[#E1C38B]" />
                </div>

                {/* Sign Name and Period */}
                <div className="space-y-0.5 w-full">
                  <h3 className="font-serif text-sm sm:text-base font-semibold text-[#F7EEFB] group-hover:text-[#E1C38B] transition-colors tracking-wide">
                    {sign.name}
                  </h3>
                  <span className="text-[11px] text-[#C1AFCE] block font-sans">
                    {formatPeriod(sign.period)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="p-4 rounded-2xl bg-[#1B1026]/80 border border-[#E1C38B]/15 text-center text-xs text-[#C1AFCE] space-y-1">
          <p className="font-medium text-[#F7EEFB]">Liberdade e privacidade</p>
          <p>
            Sua escolha fica salva no seu perfil local e você pode alterá-la quando quiser, sem bloquear as tiragens de tarô.
          </p>
        </div>
      </div>
    );
  }

  // ==================== 2. HISTORY VIEW ====================
  if (viewMode === 'history') {
    const signHistory = historyList.filter(h => h.signId === profile.zodiacSign);

    return (
      <div className="space-y-6 pb-28 pt-2 max-w-lg mx-auto px-4 animate-fadeIn">
        {/* History Header */}
        <header className="flex items-center justify-between pt-2 border-b border-[#E1C38B]/15 pb-3">
          <button
            onClick={() => {
              setViewMode('today');
              setSelectedHistoryItem(null);
            }}
            className="inline-flex items-center gap-1.5 text-xs text-[#E1C38B] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para hoje</span>
          </button>
          <div className="text-right">
            <h2 className="font-serif text-sm font-bold text-[#F7EEFB]">
              Histórico de Mensagens
            </h2>
            <span className="text-[10px] text-[#C1AFCE]">
              {dailyData?.signInfo.name} ({signHistory.length} acessadas)
            </span>
          </div>
        </header>

        {/* Selected History Item Detail Modal/Card */}
        {selectedHistoryItem ? (
          <article className="p-5 rounded-3xl bg-[#2A1B36] border border-[#E1C38B]/35 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#E1C38B]/15 pb-2.5">
              <span className="text-xs text-[#E1C38B] font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {selectedHistoryItem.date}
              </span>
              <button
                onClick={() => setSelectedHistoryItem(null)}
                className="text-xs text-[#C1AFCE] hover:text-[#F7EEFB]"
              >
                Fechar detalhe
              </button>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#E1C38B]/80 font-semibold block">
                {selectedHistoryItem.message.topic || 'Reflexão do dia'}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#F7EEFB]">
                Mensagem gravada neste dia
              </h3>
            </div>

            <p className="text-sm text-[#F7EEFB]/90 leading-relaxed italic border-l-2 border-[#E1C38B]/50 pl-3">
              “{selectedHistoryItem.message.mainMessage}”
            </p>

            <div className="space-y-2 text-xs pt-2">
              <div className="p-2.5 rounded-xl bg-[#1B1026]/70 border border-[#E1C38B]/15">
                <span className="text-[#E1C38B] font-semibold block mb-0.5">Solteiros:</span>
                <span className="text-[#C1AFCE]">{selectedHistoryItem.message.singleMessage}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#1B1026]/70 border border-[#E1C38B]/15">
                <span className="text-[#E1C38B] font-semibold block mb-0.5">Relacionamento:</span>
                <span className="text-[#C1AFCE]">{selectedHistoryItem.message.relationshipMessage}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#1B1026]/70 border border-[#E1C38B]/15">
                <span className="text-[#E1C38B] font-semibold block mb-0.5">Conselho:</span>
                <span className="text-[#C1AFCE]">{selectedHistoryItem.message.advice}</span>
              </div>
            </div>

            {selectedHistoryItem.personalNote && (
              <div className="p-3 rounded-xl bg-[#552475]/30 border border-[#E1C38B]/30 space-y-1">
                <span className="text-xs font-semibold text-[#E1C38B] flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5" /> Sua reflexão anotada:
                </span>
                <p className="text-xs text-[#F7EEFB] italic">
                  “{selectedHistoryItem.personalNote}”
                </p>
              </div>
            )}
          </article>
        ) : null}

        {/* History List */}
        {signHistory.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-3xl bg-[#2A1B36]/60 border border-[#E1C38B]/20 space-y-3">
            <HistoryIcon className="w-10 h-10 text-[#E1C38B]/60 mx-auto" />
            <h3 className="font-serif text-base font-bold text-[#F7EEFB]">
              Nenhum histórico anterior
            </h3>
            <p className="text-xs text-[#C1AFCE] max-w-xs mx-auto">
              As mensagens dos dias que você acessar ficarão salvas automaticamente aqui para consultas futuras.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {signHistory.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedHistoryItem(item)}
                className="p-4 rounded-2xl bg-[#2A1B36]/80 hover:bg-[#2A1B36] border border-[#E1C38B]/20 hover:border-[#E1C38B]/50 transition-all cursor-pointer space-y-2 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#E1C38B] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  {item.personalNote && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E1C38B]/15 text-[#E1C38B] text-[10px]">
                      <Edit3 className="w-3 h-3" /> Com anotação
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#C1AFCE] line-clamp-2 leading-relaxed">
                  “{item.message.mainMessage}”
                </p>

                <div className="flex items-center justify-between pt-1 text-[11px] text-[#E1C38B]">
                  <span>{item.message.topic || 'Ver detalhes'}</span>
                  <span>Toque para ler &rarr;</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ==================== 3. TODAY'S DAILY MESSAGE VIEW ====================
  const signInfo = translateSign(dailyData!.signInfo);
  const message = dailyData!.message;
  const calc = dailyData!.calc;
  const isRevealedToday = profile.lastZodiacRevealDate === todayStr;

  return (
    <div className="space-y-6 pb-28 pt-2 max-w-lg mx-auto px-4 animate-fadeIn">
      {/* Offline Alert Banner */}
      {isServingOfflineFallback && (
        <div 
          role="status"
          className="p-3.5 rounded-2xl bg-amber-950/70 border border-amber-500/40 text-amber-200 text-xs flex items-start gap-2.5 shadow-md"
        >
          <WifiOff className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-semibold text-amber-300">
              {language === 'es' ? 'Mensaje sincronizado anteriormente' : 'Mensagem sincronizada anteriormente'}
            </p>
            <p className="text-[11px] text-amber-200/90 leading-relaxed">
              {language === 'es' 
                ? `Estás sin conexión a internet. Mostrando el último mensaje guardado el ${offlineDate}.` 
                : `Você está sem conexão com a internet. A mensagem de hoje ainda não pôde ser atualizada. Exibindo a última mensagem salva em ${offlineDate}.`}
            </p>
          </div>
        </div>
      )}

      {/* Header with Sign Badge and Change Button */}
      <header className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2A1B36] to-[#1E122B] border border-[#E1C38B]/40 flex items-center justify-center text-[#E1C38B] shadow-md">
            <ZodiacGlyph signId={signInfo.id} className="w-6 h-6 text-[#E1C38B]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient">
                {signInfo.name}
              </h1>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#C1AFCE]">
                {signInfo.element}
              </span>
            </div>
            <p className="text-xs text-[#C1AFCE]">{signInfo.period}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('history')}
            title={language === 'es' ? 'Ver historial de mensajes' : 'Ver histórico de mensagens'}
            className="p-2.5 rounded-xl bg-[#2A1B36] border border-[#E1C38B]/25 hover:border-[#E1C38B] text-[#E1C38B] transition-colors"
          >
            <HistoryIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsSelectorOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-[#2A1B36] border border-[#E1C38B]/25 hover:border-[#E1C38B] text-xs text-[#E1C38B] font-medium transition-colors cursor-pointer"
          >
            {t.zodiac.changeSignBtn}
          </button>
        </div>
      </header>

      {/* Date & Cycle Status Banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-[#2A1B36]/60 border border-[#E1C38B]/15 text-xs text-[#C1AFCE]">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[#E1C38B]" />
          <span className="capitalize">{formattedTodayDate}</span>
        </div>
        <div className="text-[11px] font-medium text-[#E1C38B]/90">
          {isRevealedToday ? t.zodiac.revealedToday : (language === 'es' ? 'Mensaje del día disponible' : 'Mensagem do dia disponível')}
        </div>
      </div>

      {/* Unrevealed State Card */}
      {!isRevealedToday ? (
        <section 
          aria-label={language === 'es' ? 'Revelar mensaje del día' : 'Revelar mensagem do dia'}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#2A1B36] to-[#1E1129] border border-[#E1C38B]/35 p-6 sm:p-8 text-center space-y-5 shadow-2xl gold-border-glow animate-fadeIn"
        >
          <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 rounded-full bg-[#E1C38B]/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-6 -mb-6 w-32 h-32 rounded-full bg-[#552475]/30 blur-2xl pointer-events-none" />

          <div className="w-16 h-16 mx-auto rounded-full bg-[#1B1026] border border-[#E1C38B]/40 flex items-center justify-center text-[#E1C38B] shadow-lg shadow-[#E1C38B]/10">
            <ZodiacGlyph signId={signInfo.id} className="w-8 h-8 text-[#E1C38B]" />
          </div>

          <div className="space-y-1.5 max-w-sm mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E1C38B]/15 text-[#E1C38B] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> {language === 'es' ? 'Mensaje del Día Listo' : 'Mensagem do Dia Pronta'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7EEFB]">
              {signInfo.name} {language === 'es' ? 'en el Amor' : 'no Amor'}
            </h2>
            <p className="text-xs sm:text-sm text-[#C1AFCE] leading-relaxed">
              {language === 'es' 
                ? 'Tu reflexión astrológica de hoy está lista para orientar tu corazón en tus relaciones y amor propio.' 
                : 'Sua reflexão astrológica de hoje está pronta para orientar seu coração sobre relacionamentos e amor-próprio.'}
            </p>
          </div>

          <button
            onClick={handleRevealToday}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] font-bold text-sm sm:text-base hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer gold-glow max-w-sm mx-auto"
          >
            <Sparkles className="w-4 h-4 fill-[#1B1026]" />
            <span>{language === 'es' ? 'Revelar mensaje del día' : 'Revelar mensagem do dia'}</span>
          </button>
        </section>
      ) : (
        /* Main Card: Seu signo no amor hoje */
        <section 
          aria-label="Mensagem diária do signo"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#2A1B36] to-[#221430] border border-[#E1C38B]/35 p-6 shadow-xl gold-border-glow space-y-5 animate-fadeIn"
        >
          <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 rounded-full bg-[#E1C38B]/10 blur-2xl pointer-events-none" />

        {/* Card Title */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#E1C38B] font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#E1C38B]/30" />
            <span>{signInfo.name}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7EEFB]">
            {language === 'es' ? 'Tu signo en el amor hoy' : 'Seu signo no amor hoje'}
          </h2>
          {message.topic && (
            <p className="text-xs text-[#E1C38B]/90 font-medium">
              {language === 'es' ? 'Tema de hoy' : 'Tema de hoje'}: {message.topic}
            </p>
          )}
        </div>

        {/* Main Message Block (approx 60-100 words) */}
        <div className="p-4 rounded-2xl bg-[#1B1026]/75 border border-[#E1C38B]/25">
          <p className="text-sm sm:text-base text-[#F7EEFB] leading-relaxed font-sans italic">
            “{message.mainMessage}”
          </p>
        </div>

        {/* 2 Contextual Blocks: Solteiro & Relacionamento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Solteiro */}
          <div className="p-4 rounded-2xl bg-[#1B1026]/60 border border-[#E1C38B]/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E1C38B]">
              <UserCheck className="w-4 h-4 shrink-0" />
              <span>{t.zodiac.forSingles}</span>
            </div>
            <p className="text-xs text-[#C1AFCE] leading-relaxed">
              {message.singleMessage}
            </p>
          </div>

          {/* Relacionamento */}
          <div className="p-4 rounded-2xl bg-[#1B1026]/60 border border-[#E1C38B]/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E1C38B]">
              <Users className="w-4 h-4 shrink-0" />
              <span>{t.zodiac.inRelationship}</span>
            </div>
            <p className="text-xs text-[#C1AFCE] leading-relaxed">
              {message.relationshipMessage}
            </p>
          </div>
        </div>

        {/* Block: Seu conselho de hoje */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#552475]/35 to-[#2A1B36] border border-[#E1C38B]/30 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E1C38B]">
            <Lightbulb className="w-4 h-4 shrink-0 text-[#E1C38B]" />
            <span>{t.zodiac.starsAdvice}</span>
          </div>
          <p className="text-xs sm:text-sm text-[#F7EEFB] font-medium leading-relaxed">
            {message.advice}
          </p>
        </div>

        {/* Block: Pergunta para reflexão */}
        <div className="p-4 rounded-2xl bg-[#1B1026]/90 border border-[#E1C38B]/30 space-y-1.5 shadow-inner">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E1C38B]">
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>{t.zodiac.reflectionQuestion}</span>
          </div>
          <p className="text-xs sm:text-sm text-gold-gradient font-serif italic font-medium leading-relaxed">
            “{message.reflectionQuestion}”
          </p>
        </div>

        {/* Actions Bar */}
        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={() => setIsWritingNote(!isWritingNote)}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] font-bold text-xs sm:text-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <Edit3 className="w-4 h-4" />
            <span>{noteText ? 'Editar minha reflexão' : 'Registrar minha reflexão'}</span>
          </button>

          <button
            onClick={handleShareMessage}
            title="Compartilhar mensagem"
            className="p-3 rounded-xl bg-[#1B1026] border border-[#E1C38B]/30 hover:border-[#E1C38B] text-[#E1C38B] transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {shareFeedback && (
          <p className="text-center text-xs text-[#E1C38B] animate-fadeIn">
            ✓ Mensagem copiada com sucesso para compartilhar!
          </p>
        )}

        {/* Reflection Note Editor */}
        {isWritingNote && (
          <div className="p-4 rounded-2xl bg-[#1B1026] border border-[#E1C38B]/30 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#E1C38B] flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5" /> Caderno de Reflexão do Signo
              </span>
              <span className="text-[10px] text-[#C1AFCE]">{signInfo.name} • {todayStr}</span>
            </div>

            <p className="text-[11px] text-[#C1AFCE]">
              Escreva como a pergunta “<em>{message.reflectionQuestion}</em>” toca seu momento afetivo. Esta anotação será salva no seu diário.
            </p>

            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Escreva sua reflexão íntima aqui..."
              rows={4}
              className="w-full p-3 rounded-xl bg-[#2A1B36] border border-[#E1C38B]/30 text-xs sm:text-sm text-[#F7EEFB] placeholder-[#C1AFCE]/40 focus:outline-none focus:border-[#E1C38B] resize-none"
            />

            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setIsWritingNote(false)}
                className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-[#C1AFCE] hover:text-[#F7EEFB]"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveReflection}
                className="px-4 py-1.5 rounded-lg bg-[#E1C38B] text-[#1B1026] text-xs font-bold flex items-center gap-1.5 hover:brightness-105"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Salvar reflexão</span>
              </button>
            </div>
          </div>
        )}

        {noteSavedFeedback && (
          <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center justify-between animate-fadeIn">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Sua reflexão foi salva no seu diário com sucesso!
            </span>
            {onNavigateToTab && (
              <button
                onClick={() => onNavigateToTab('diario')}
                className="text-[11px] text-emerald-300 underline font-medium hover:text-emerald-100"
              >
                Ver no Diário
              </button>
            )}
          </div>
        )}

        {/* Existing note preview if closed */}
        {!isWritingNote && noteText && !noteSavedFeedback && (
          <div className="p-3.5 rounded-xl bg-[#552475]/25 border border-[#E1C38B]/20 space-y-1">
            <div className="flex items-center justify-between text-[11px] text-[#E1C38B] font-semibold">
              <span className="flex items-center gap-1">
                <Edit3 className="w-3 h-3" /> Sua reflexão registrada hoje:
              </span>
              <button
                onClick={() => setIsWritingNote(true)}
                className="hover:underline text-[10px]"
              >
                Editar
              </button>
            </div>
            <p className="text-xs text-[#F7EEFB]/90 italic">
              “{noteText}”
            </p>
          </div>
        )}
      </section>
      )}

      {/* Cycle Progress and Editorial Transparency Banner */}
      <footer className="p-4 rounded-2xl bg-[#1B1026]/90 border border-[#E1C38B]/15 text-center space-y-2">
        <div className="flex items-center justify-center gap-1.5 text-xs text-[#E1C38B] font-semibold">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Mensagem Editorial Consciente</span>
        </div>
        <p className="text-[11px] text-[#C1AFCE] leading-relaxed">
          Esta mensagem diária é uma reflexão simbólica inspirada nas virtudes e desafios tradicionalmente associados ao signo de {signInfo.name}. Não são cálculos astronômicos nem confirmação de fatos futuros.
        </p>
        <div className="pt-1 flex items-center justify-center gap-2 text-[10px] text-[#C1AFCE]/80">
          <span>Ciclo editorial de 30 reflexões diárias</span>
          <span>•</span>
          <span>Dia {calc.dayIndex + 1} de 30</span>
          <span>•</span>
          <span>{calc.daysRemainingInCycle} dias restantes</span>
        </div>
      </footer>

      {/* Modal for Changing Sign */}
      <ZodiacSelectorModal
        currentSignId={profile.zodiacSign}
        isOpen={isSelectorOpen}
        onClose={() => setIsSelectorOpen(false)}
        onSelectSign={handleSelectSign}
        title="Trocar de Signo"
        subtitle="Selecione um novo signo para acompanhar as mensagens diárias correspondentes."
      />
    </div>
  );
};
