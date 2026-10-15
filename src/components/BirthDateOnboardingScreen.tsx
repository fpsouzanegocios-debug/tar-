import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getZodiacSignFromBirthDate } from '../data/zodiac/signsInfo';
import { ZodiacGlyph } from './ZodiacGlyph';
import type { ZodiacSignId } from '../types/tarot';
import { useLanguage } from '../i18n';
import { LanguageSwitch } from './LanguageSwitch';

interface BirthDateOnboardingScreenProps {
  userName?: string;
  onComplete: (birthDate: string, zodiacSignId: ZodiacSignId) => void;
}

const MONTHS_PT = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const MONTHS_ES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export const BirthDateOnboardingScreen: React.FC<BirthDateOnboardingScreenProps> = ({
  userName,
  onComplete,
}) => {
  const { t, language, translateSign } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [day, setDay] = useState<number>(15);
  const [month, setMonth] = useState<number>(4);
  const [year, setYear] = useState<number>(1998);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const monthsList = language === 'es' ? MONTHS_ES : MONTHS_PT;

  // Automatically calculate Zodiac sign from day and month
  const rawSign = useMemo(() => {
    return getZodiacSignFromBirthDate(day, month);
  }, [day, month]);

  const detectedSign = useMemo(() => {
    return translateSign(rawSign);
  }, [rawSign, translateSign]);

  // Days in selected month
  const daysInMonth = useMemo(() => {
    return new Date(year, month, 0).getDate();
  }, [year, month]);

  // Clamp day if month change reduces max days (e.g. Feb)
  const validDay = Math.min(day, daysInMonth);

  const handleConfirm = () => {
    setIsSubmitting(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E1C38B', '#F4DFB8', '#9B51E0', '#FFF'],
      });
    } catch {
      // safe fallback
    }

    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(validDay).padStart(2, '0');
    const birthDateStr = `${year}-${formattedMonth}-${formattedDay}`;

    setTimeout(() => {
      onComplete(birthDateStr, detectedSign.id);
    }, 400);
  };

  const elementTheme: Record<string, { badge: string; text: string }> = {
    Fogo: { badge: 'bg-amber-500/20 border-amber-500/40 text-amber-300', text: 'text-amber-400' },
    Terra: { badge: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300', text: 'text-emerald-400' },
    Ar: { badge: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300', text: 'text-cyan-400' },
    Água: { badge: 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300', text: 'text-indigo-400' },
  };

  const elemStyle = elementTheme[detectedSign.element] || elementTheme['Fogo'];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-[#12081B] via-[#1B0F26] to-[#0D0514] text-[#F7EEFB] safe-pt safe-pb">
      <div className="w-full max-w-lg mx-auto space-y-6 animate-fadeIn py-6 relative">
        
        {/* Language Switch */}
        <div className="flex justify-end">
          <LanguageSwitch variant="compact" />
        </div>

        {/* Header */}
        <header className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-[#2A1B36] to-[#1E1129] border border-[#E1C38B]/40 shadow-lg shadow-[#E1C38B]/10 mx-auto">
            <Calendar className="w-7 h-7 text-[#E1C38B]" />
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#E1C38B] font-semibold">
              {language === 'es' ? 'Personalización Cósmica' : 'Personalização Cósmica'}
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7EEFB]">
              {userName ? `${t.onboarding.title}, ${userName}!` : `${t.onboarding.title}!`}
            </h1>
            <p className="text-xs sm:text-sm text-[#C1AFCE] max-w-sm mx-auto leading-relaxed">
              {t.onboarding.subtitle}
            </p>
          </div>
        </header>

        {/* Date Selection Box */}
        <div className="p-6 rounded-3xl bg-[#2A1B36]/80 border border-[#E1C38B]/30 backdrop-blur-md shadow-xl space-y-5">
          
          <label className="text-xs font-semibold text-[#E1C38B] flex items-center gap-1.5 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> {language === 'es' ? 'Selecciona tu día, mes y año de nacimiento:' : 'Selecione o dia, mês e ano em que nasceu:'}
          </label>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            {/* Day Selector */}
            <div className="space-y-1">
              <span className="text-[11px] text-[#C1AFCE] block font-medium">{language === 'es' ? 'Día' : 'Dia'}</span>
              <select
                value={validDay}
                onChange={(e) => setDay(Number(e.target.value))}
                className="w-full py-3 px-2 sm:px-3 rounded-xl bg-[#140B1E] border border-[#E1C38B]/25 text-[#F7EEFB] text-sm sm:text-base font-semibold focus:border-[#E1C38B] focus:outline-none cursor-pointer text-center"
              >
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d} className="bg-[#1B1026] text-[#F7EEFB]">
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Month Selector */}
            <div className="space-y-1">
              <span className="text-[11px] text-[#C1AFCE] block font-medium">{language === 'es' ? 'Mes' : 'Mês'}</span>
              <select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="w-full py-3 px-1 sm:px-2 rounded-xl bg-[#140B1E] border border-[#E1C38B]/25 text-[#F7EEFB] text-xs sm:text-sm font-semibold focus:border-[#E1C38B] focus:outline-none cursor-pointer text-center"
              >
                {monthsList.map((label, idx) => (
                  <option key={idx + 1} value={idx + 1} className="bg-[#1B1026] text-[#F7EEFB]">
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Selector */}
            <div className="space-y-1">
              <span className="text-[11px] text-[#C1AFCE] block font-medium">{language === 'es' ? 'Año' : 'Ano'}</span>
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full py-3 px-2 sm:px-3 rounded-xl bg-[#140B1E] border border-[#E1C38B]/25 text-[#F7EEFB] text-sm sm:text-base font-semibold focus:border-[#E1C38B] focus:outline-none cursor-pointer text-center"
              >
                {Array.from({ length: 90 }, (_, i) => currentYear - i).map((y) => (
                  <option key={y} value={y} className="bg-[#1B1026] text-[#F7EEFB]">
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Automatic Zodiac Reveal Card */}
          <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-[#1E1129] via-[#2A1B36] to-[#1E1129] border border-[#E1C38B]/40 shadow-inner space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#E1C38B]/15 pb-3">
              <span className="text-[10px] sm:text-xs font-semibold text-[#E1C38B] flex items-center gap-1.5 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#E1C38B]" /> {language === 'es' ? 'Signo Solar Identificado' : 'Signo Solar Identificado'}
              </span>
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-medium ${elemStyle.badge}`}>
                {language === 'es' ? 'Elemento' : 'Elemento'} {detectedSign.element}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#140B1E] border border-[#E1C38B]/50 flex items-center justify-center text-[#E1C38B] shadow-md shadow-[#E1C38B]/15 shrink-0">
                <ZodiacGlyph signId={detectedSign.id} className="w-9 h-9 text-[#E1C38B]" />
              </div>

              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-2xl font-bold text-gold-gradient leading-none">
                    {detectedSign.name}
                  </h2>
                </div>
                <p className="text-xs text-[#E1C38B]/90 font-medium">
                  {detectedSign.period}
                </p>
                <p className="text-[11px] text-[#C1AFCE] line-clamp-1">
                  {detectedSign.keywords.join(' • ')}
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#140B1E]/70 border border-[#E1C38B]/15 text-[11px] text-[#C1AFCE] leading-relaxed">
              {language === 'es' 
                ? `Calculado para el día ${validDay} de ${monthsList[month - 1]}. Tu perfil astrológico está listo.` 
                : `Identificado com base no movimento do Sol no Zodíaco Tropical para o dia ${validDay} de ${monthsList[month - 1]}. Seu perfil astrológico está pronto.`}
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={handleConfirm}
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#E1C38B] via-[#E9D1A2] to-[#F4DFB8] text-[#1B1026] font-bold text-sm sm:text-base hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#E1C38B]/20 cursor-pointer disabled:opacity-60"
          >
            <span>{t.onboarding.submitBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-center text-[11px] text-[#C1AFCE]/70">
          {language === 'es' 
            ? 'Siempre podrás actualizar tus preferencias en tu perfil.' 
            : 'Você sempre poderá consultar ou atualizar suas preferências nas configurações do seu perfil.'}
        </p>

      </div>
    </div>
  );
};
