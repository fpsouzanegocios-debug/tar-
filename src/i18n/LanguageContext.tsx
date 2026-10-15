import React, { createContext, useContext, useState, useEffect } from 'react';
import { type AppTranslations, ptTranslations, esTranslations } from './translations';
import { 
  getTranslatedCard, 
  translateCardName, 
  getTranslatedTheme, 
  getTranslatedSignInfo 
} from './cardTranslations';
import type { ArcanaCard, ThemeDefinition, ZodiacSignInfo } from '../types/tarot';

export type AppLanguage = 'pt' | 'es';

interface LanguageContextType {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  t: AppTranslations;
  translateCard: (card: ArcanaCard) => ArcanaCard;
  translateCardName: (card: ArcanaCard) => string;
  translateTheme: (theme: ThemeDefinition) => ThemeDefinition;
  translateSign: (sign: ZodiacSignInfo) => ZodiacSignInfo;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  setLanguage: () => {},
  t: ptTranslations,
  translateCard: (card) => card,
  translateCardName: (card) => card.name,
  translateTheme: (theme) => theme,
  translateSign: (sign) => sign,
});

export const LANGUAGE_STORAGE_KEY = 'sua_tiragem_app_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<AppLanguage>(() => {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored === 'es' || stored === 'pt') return stored;
      // Also check profile
      const profStr = localStorage.getItem('sua_tiragem_profile');
      if (profStr) {
        const prof = JSON.parse(profStr);
        if (prof.language === 'es' || prof.language === 'pt') return prof.language;
      }
    } catch {
      // fallback
    }
    return 'pt';
  });

  const setLanguage = (lang: AppLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      // Also update stored profile if it exists
      const profStr = localStorage.getItem('sua_tiragem_profile');
      if (profStr) {
        const prof = JSON.parse(profStr);
        prof.language = lang;
        localStorage.setItem('sua_tiragem_profile', JSON.stringify(prof));
      }
      // Set document language attribute for accessibility
      document.documentElement.lang = lang === 'es' ? 'es' : 'pt-BR';
    } catch (e) {
      console.warn('Error saving language preference:', e);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'es' ? 'es' : 'pt-BR';
  }, [language]);

  const t = language === 'es' ? esTranslations : ptTranslations;

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    translateCard: (card) => getTranslatedCard(card, language),
    translateCardName: (card) => translateCardName(card, language),
    translateTheme: (theme) => getTranslatedTheme(theme, language),
    translateSign: (sign) => getTranslatedSignInfo(sign, language),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
