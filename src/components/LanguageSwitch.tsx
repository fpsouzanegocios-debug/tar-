import React from 'react';
import { useLanguage } from '../i18n';
import { Globe } from 'lucide-react';

interface LanguageSwitchProps {
  variant?: 'pill' | 'buttons' | 'compact';
  className?: string;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ variant = 'pill', className = '' }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'buttons') {
    return (
      <div className={`grid grid-cols-2 gap-2 ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('pt')}
          className={`py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-medium transition-all cursor-pointer ${
            language === 'pt'
              ? 'bg-[#E1C38B]/20 border-[#E1C38B] text-[#E1C38B] shadow-sm'
              : 'bg-[#1B1026]/60 border-white/10 text-[#C1AFCE] hover:border-white/20'
          }`}
        >
          <span className="text-base leading-none">🇧🇷</span>
          <span>Português</span>
        </button>

        <button
          type="button"
          onClick={() => setLanguage('es')}
          className={`py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-medium transition-all cursor-pointer ${
            language === 'es'
              ? 'bg-[#E1C38B]/20 border-[#E1C38B] text-[#E1C38B] shadow-sm'
              : 'bg-[#1B1026]/60 border-white/10 text-[#C1AFCE] hover:border-white/20'
          }`}
        >
          <span className="text-base leading-none">🇪🇸</span>
          <span>Español</span>
        </button>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center rounded-full bg-[#1B1026]/80 p-0.5 border border-[#E1C38B]/25 ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('pt')}
          className={`px-2 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1 ${
            language === 'pt'
              ? 'bg-[#E1C38B] text-[#1B1026] shadow'
              : 'text-[#C1AFCE] hover:text-white'
          }`}
          title="Mudar para Português"
        >
          <span>🇧🇷</span>
          <span>PT</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage('es')}
          className={`px-2 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1 ${
            language === 'es'
              ? 'bg-[#E1C38B] text-[#1B1026] shadow'
              : 'text-[#C1AFCE] hover:text-white'
          }`}
          title="Cambiar a Español"
        >
          <span>🇪🇸</span>
          <span>ES</span>
        </button>
      </div>
    );
  }

  // Default 'pill'
  return (
    <div className={`inline-flex items-center gap-1.5 p-1 rounded-2xl bg-[#1B1026]/90 border border-[#E1C38B]/30 shadow-md ${className}`}>
      <Globe className="w-3.5 h-3.5 text-[#E1C38B]/80 ml-1.5 shrink-0" />
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setLanguage('pt')}
          className={`px-2.5 py-1 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
            language === 'pt'
              ? 'bg-[#E1C38B] text-[#1B1026] font-bold shadow-sm'
              : 'text-[#C1AFCE] hover:text-[#F7EEFB]'
          }`}
        >
          <span>🇧🇷</span>
          <span>PT</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage('es')}
          className={`px-2.5 py-1 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
            language === 'es'
              ? 'bg-[#E1C38B] text-[#1B1026] font-bold shadow-sm'
              : 'text-[#C1AFCE] hover:text-[#F7EEFB]'
          }`}
        >
          <span>🇪🇸</span>
          <span>ES</span>
        </button>
      </div>
    </div>
  );
};
