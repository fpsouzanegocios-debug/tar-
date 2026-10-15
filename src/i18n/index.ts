export { LanguageProvider, useLanguage, type AppLanguage } from './LanguageContext';
export { ptTranslations, esTranslations, type AppTranslations } from './translations';
export { 
  translateCardName, 
  getTranslatedCard, 
  getTranslatedTheme, 
  getTranslatedSignInfo 
} from './cardTranslations';

// Backwards compatibility
import { ptTranslations, esTranslations } from './translations';
export function getTranslation(lang: string = 'pt') {
  if (lang.startsWith('es')) return esTranslations;
  return ptTranslations;
}
