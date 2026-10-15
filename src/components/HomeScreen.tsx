import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Clock, Heart, BookOpen, AlertCircle, RotateCcw } from 'lucide-react';
import type { ReadingRecord, UserProfile } from '../types/tarot';
import { getMsUntilNextDay, formatCountdown, getTodayDateString } from '../services/storage';
import { getZodiacSignInfo } from '../data/zodiac/signsInfo';
import { ZodiacGlyph } from './ZodiacGlyph';
import { useLanguage } from '../i18n';
import { LanguageSwitch } from './LanguageSwitch';

interface HomeScreenProps {
  profile: UserProfile;
  dailyStatus: 'available' | 'in_progress' | 'completed';
  todayReading?: ReadingRecord;
  lastReading?: ReadingRecord;
  onStartReading: () => void;
  onViewReading: (reading: ReadingRecord) => void;
  onResetToday?: () => void;
  onNavigateToSigno: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  profile,
  dailyStatus,
  todayReading,
  lastReading,
  onStartReading,
  onViewReading,
  onResetToday,
  onNavigateToSigno,
}) => {
  const { t, translateCardName, translateSign, language } = useLanguage();
  const [countdown, setCountdown] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const ms = getMsUntilNextDay(profile.timezone);
      setCountdown(formatCountdown(ms));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [profile.timezone]);

  const todayStr = getTodayDateString(profile.timezone);
  const isZodiacRevealedToday = profile.lastZodiacRevealDate === todayStr;

  const translatedZodiac = profile.zodiacSign 
    ? translateSign(getZodiacSignInfo(profile.zodiacSign)) 
    : null;

  return (
    <div className="space-y-4 sm:space-y-6 pb-24 pt-2 w-full max-w-lg mx-auto px-3.5 sm:px-4 box-border overflow-x-hidden">
      {/* Top Utility Bar (Language Selector) */}
      <div className="flex items-center justify-end w-full pt-1 px-1">
        <LanguageSwitch variant="compact" />
      </div>

      {/* App Header Branding */}
      <header className="text-center space-y-1.5 pt-1">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2A1B36] border border-[#E1C38B]/30 text-xs text-[#E1C38B] font-medium tracking-wide shadow-sm mx-auto">
          <Heart className="w-3.5 h-3.5 fill-[#E1C38B]/30 shrink-0" />
          <span>{t.home.oracleTag}</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-gold-gradient">
          {t.home.appName}
        </h1>
        <p className="text-xs sm:text-sm text-[#C1AFCE] max-w-xs mx-auto">
          {profile.name ? `${t.home.hello}, ${profile.name}` : t.home.helloTraveler} — {t.home.heroSub}
        </p>
      </header>

      {/* Hero Art Banner */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E1C38B]/35 shadow-2xl shadow-purple-950/80 aspect-[16/8] sm:aspect-[16/7] group gold-border-glow">
        <img
          src="/tarot_hero.jpg"
          alt="Tarô do Amor"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1026] via-transparent to-transparent opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1026]/40 via-transparent to-[#1B1026]/40 pointer-events-none" />
        <div className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1B1026]/85 backdrop-blur-md border border-[#E1C38B]/40 text-[10px] sm:text-xs text-[#E1C38B] font-medium shadow-md">
            <Sparkles className="w-3 h-3 text-[#E1C38B] animate-pulse" />
            <span>{language === 'es' ? 'Arcanos del Amor y la Sabiduría' : 'Arcanos do Amor & Sabedoria'}</span>
          </div>
        </div>
      </div>

      {/* Daily Reading Action Card */}
      <section 
        aria-label="Tiragem diária"
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#2A1B36] to-[#221430] border border-[#E1C38B]/35 p-4 sm:p-6 shadow-xl gold-border-glow"
      >
        <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 rounded-full bg-[#E1C38B]/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-6 -mb-6 w-32 h-32 rounded-full bg-[#552475]/30 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3.5 sm:space-y-4">
          {dailyStatus === 'completed' ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E1C38B]/20 text-[#E1C38B] text-[11px] sm:text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" /> {t.home.completedTag}
                </span>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-[#C1AFCE] font-medium bg-[#1B1026]/70 px-2.5 py-1 rounded-full border border-white/5">
                  <Clock className="w-3.5 h-3.5 text-[#E1C38B] shrink-0" />
                  <span>{countdown}</span>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#F7EEFB] mb-1">
                  {t.home.completedTitle}
                </h2>
                <p className="text-xs text-[#C1AFCE] leading-relaxed">
                  {t.home.completedDesc}
                </p>
              </div>

              {todayReading && (
                <div className="p-3 rounded-2xl bg-[#1B1026]/70 border border-[#E1C38B]/20 flex items-center gap-3">
                  <div className="flex -space-x-3 overflow-hidden shrink-0">
                    {todayReading.cards.map((sc, i) => (
                      <img
                        key={i}
                        src={sc.card.image}
                        alt={translateCardName(sc.card)}
                        className="w-10 h-16 object-cover rounded border border-[#E1C38B]/50 shadow-md shrink-0"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.dataset.retried) {
                            target.dataset.retried = 'true';
                            target.src = `${sc.card.image}?r=${Date.now()}`;
                          }
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <p className="text-xs font-semibold text-[#E1C38B] truncate">{todayReading.themeTitle}</p>
                    <p className="text-[11px] text-[#C1AFCE] line-clamp-2 leading-tight">“{todayReading.question}”</p>
                  </div>
                </div>
              )}

              <button
                onClick={() => todayReading && onViewReading(todayReading)}
                className="w-full py-3.5 px-5 rounded-2xl bg-[#E1C38B] text-[#1B1026] font-semibold text-xs sm:text-sm hover:bg-[#F4DFB8] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>{t.home.viewTodayBtn}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              {onResetToday && (
                <button
                  onClick={onResetToday}
                  className="w-full py-2.5 px-3 sm:px-4 rounded-xl bg-white/5 hover:bg-white/10 text-[11px] sm:text-xs text-[#E1C38B] border border-[#E1C38B]/25 transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                >
                  <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.home.resetTodayBtn}</span>
                </button>
              )}
            </>
          ) : dailyStatus === 'in_progress' ? (
            <>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 animate-pulse shrink-0" /> {t.home.inProgressTag}
              </div>

              <div>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#F7EEFB] mb-1">
                  {t.home.inProgressTitle}
                </h2>
                <p className="text-xs text-[#C1AFCE] leading-relaxed">
                  {t.home.inProgressDesc}
                </p>
              </div>

              <button
                onClick={onStartReading}
                className="w-full py-3.5 px-5 rounded-2xl bg-[#E1C38B] text-[#1B1026] font-semibold text-xs sm:text-sm hover:bg-[#F4DFB8] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer gold-glow"
              >
                <span>{t.home.resumeBtn}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              {onResetToday && (
                <button
                  onClick={onResetToday}
                  className="w-full py-2.5 px-3 sm:px-4 rounded-xl bg-white/5 hover:bg-white/10 text-[11px] sm:text-xs text-[#E1C38B] border border-[#E1C38B]/25 transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                >
                  <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.home.discardBtn}</span>
                </button>
              )}
            </>
          ) : (
            <>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E1C38B]/20 text-[#E1C38B] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> {t.home.availableTag}
              </div>

              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F7EEFB] mb-1.5">
                  {t.home.availableTitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#C1AFCE] leading-relaxed">
                  {t.home.availableDesc}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-1 sm:py-2">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#1B1026]/70 border border-[#E1C38B]/15 text-center">
                  <span className="text-[9px] sm:text-[10px] text-[#E1C38B] font-semibold block uppercase tracking-wider">{t.home.card1}</span>
                  <span className="text-[11px] sm:text-xs text-[#F7EEFB] font-medium">{t.home.posSituacao}</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#1B1026]/70 border border-[#E1C38B]/15 text-center">
                  <span className="text-[9px] sm:text-[10px] text-[#E1C38B] font-semibold block uppercase tracking-wider">{t.home.card2}</span>
                  <span className="text-[11px] sm:text-xs text-[#F7EEFB] font-medium">{t.home.posDesafio}</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#1B1026]/70 border border-[#E1C38B]/15 text-center">
                  <span className="text-[9px] sm:text-[10px] text-[#E1C38B] font-semibold block uppercase tracking-wider">{t.home.card3}</span>
                  <span className="text-[11px] sm:text-xs text-[#F7EEFB] font-medium">{t.home.posOrientacao}</span>
                </div>
              </div>

              <button
                onClick={onStartReading}
                className="w-full py-3.5 sm:py-4 px-5 sm:px-6 rounded-2xl bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] font-bold text-sm sm:text-base hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer gold-glow"
              >
                <Sparkles className="w-4 h-4 fill-[#1B1026] shrink-0" />
                <span>{t.home.startBtn}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </>
          )}
        </div>
      </section>

      {/* Compact Zodiac Sign Daily Message Block */}
      <section 
        aria-label={t.home.zodiacBlockTag}
        className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#2A1B36] via-[#241530] to-[#1E122B] border border-[#E1C38B]/30 p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 hover:border-[#E1C38B]/50 transition-all"
      >
        <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#1B1026] border border-[#E1C38B]/35 flex items-center justify-center text-[#E1C38B] shrink-0 shadow-inner">
            {profile.zodiacSign ? (
              <ZodiacGlyph signId={profile.zodiacSign} className="w-5 h-5 sm:w-6 sm:h-6 text-[#E1C38B]" />
            ) : (
              <Sparkles className="w-5 h-5 text-[#E1C38B]" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[10px] text-[#E1C38B] font-semibold uppercase tracking-wider block">
              {t.home.zodiacBlockTag}
            </span>
            <h3 className="font-serif text-sm sm:text-base font-bold text-[#F7EEFB] leading-snug">
              {translatedZodiac
                ? `${translatedZodiac.name} ${t.home.zodiacInLoveToday}` 
                : t.home.zodiacBlockDiscover}
            </h3>
            <p className="text-[11px] text-[#C1AFCE] line-clamp-1 leading-normal">
              {profile.zodiacSign 
                ? (isZodiacRevealedToday ? t.home.zodiacDailyAdvice : t.home.zodiacReady) 
                : t.home.zodiacSelect}
            </p>
          </div>
        </div>

        <button
          onClick={onNavigateToSigno}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] font-bold text-xs hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer shrink-0"
        >
          <span>
            {profile.zodiacSign 
              ? (isZodiacRevealedToday ? t.home.zodiacViewToday : t.home.zodiacRevealToday) 
              : t.home.zodiacChooseSign}
          </span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </section>

      {/* Last Reading Section (if available and different from today) */}
      {lastReading && dailyStatus !== 'completed' && (
        <section 
          aria-label={t.home.lastReadingTag}
          className="rounded-2xl bg-[#2A1B36]/80 border border-[#E1C38B]/20 p-5 space-y-3 shadow-md"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#E1C38B] flex items-center gap-1.5 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" /> {t.home.lastReadingTag}
            </span>
            <span className="text-[11px] text-[#C1AFCE]">{lastReading.date}</span>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F7EEFB]">{lastReading.themeTitle}</h3>
            <p className="text-xs text-[#C1AFCE] italic line-clamp-1">“{lastReading.question}”</p>
          </div>

          <div className="flex gap-2">
            {lastReading.cards.map((sc, i) => (
              <div key={i} className="flex-1 bg-[#1B1026] p-2 rounded-xl border border-[#E1C38B]/15 text-center">
                <span className="text-[9px] text-[#E1C38B] block truncate">{sc.positionTitle}</span>
                <span className="text-[11px] text-[#F7EEFB] font-medium truncate block">{translateCardName(sc.card)}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => onViewReading(lastReading)}
            className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-[#F7EEFB] font-medium border border-white/10 transition-colors"
          >
            {t.home.openLastReading}
          </button>
        </section>
      )}

      {/* Symbolic Experience Notice */}
      <footer className="p-4 rounded-2xl bg-[#1B1026]/90 border border-[#E1C38B]/15 text-center space-y-1.5">
        <div className="flex items-center justify-center gap-1.5 text-xs text-[#E1C38B] font-semibold">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{t.home.symbolicNoticeTitle}</span>
        </div>
        <p className="text-[11px] text-[#C1AFCE] leading-relaxed">
          {t.home.symbolicNoticeDesc}
        </p>
      </footer>
    </div>
  );
};
