export type ThemeId = 'meu_relacionamento' | 'conhecendo_alguem' | 'distancia' | 'amor_proprio';

export type ReadingPosition = 'situacao' | 'desafio' | 'orientacao';

export type ArcanaType = 'maior' | 'menor';

export type SuitType = 'copas' | 'paus' | 'espadas' | 'ouros';

export interface ThemeDefinition {
  id: ThemeId;
  title: string;
  subtitle: string;
  iconName: string;
  defaultQuestions: string[];
}

export interface ArcanaCard {
  id: number;
  name: string;
  arcana?: ArcanaType;
  suit?: SuitType;
  rank?: string;
  roman?: string;
  image: string;
  element: string;
  keywords: string[];
  archetype: string;
  generalLoveMeaning: string;
  loveRelationshipMeaning?: string;
  positionMeanings: {
    situacao: Record<ThemeId, string>;
    desafio: Record<ThemeId, string>;
    orientacao: Record<ThemeId, string>;
  };
  reflectionQuestions: Record<ThemeId, string>;
  microActions: Record<ThemeId, string>;
}

export interface SelectedCard {
  card: ArcanaCard;
  position: ReadingPosition;
  positionTitle: string;
  isRevealed: boolean;
}

export interface ReadingRecord {
  id: string;
  user_id?: string;
  date: string; // YYYY-MM-DD
  timestamp: number;
  themeId: ThemeId;
  themeTitle: string;
  question: string;
  isCustomQuestion: boolean;
  cards: [SelectedCard, SelectedCard, SelectedCard];
  summary: string;
  personalNote?: string;
  status: 'completed' | 'in_progress';
}

export type ZodiacSignId = 
  | 'aries' 
  | 'touro' 
  | 'gemeos' 
  | 'cancer' 
  | 'leao' 
  | 'virgem' 
  | 'libra' 
  | 'escorpiao' 
  | 'sagitario' 
  | 'capricornio' 
  | 'aquario' 
  | 'peixes';

export interface ZodiacSignInfo {
  id: ZodiacSignId;
  name: string;
  symbol: string;
  element: 'Fogo' | 'Terra' | 'Ar' | 'Água';
  period: string;
  keywords: string[];
}

export interface ZodiacDailyMessage {
  id: string;
  signId: ZodiacSignId;
  dayIndex: number; // 0 to 29
  mainMessage: string; // approx 60-100 words
  singleMessage: string;
  relationshipMessage: string;
  advice: string;
  reflectionQuestion: string;
  topic?: string;
}

export interface ZodiacHistoryEntry {
  id: string;
  user_id?: string;
  signId: ZodiacSignId;
  signName: string;
  date: string; // YYYY-MM-DD
  timestamp: number;
  message: ZodiacDailyMessage;
  personalNote?: string;
}

export interface UserProfile {
  id?: string;
  email?: string;
  name: string;
  birthDate?: string; // YYYY-MM-DD
  timezone: string;
  reminderEnabled: boolean;
  reminderTime: string;
  zodiacSign?: ZodiacSignId;
  zodiacReminderEnabled?: boolean;
  zodiacReminderTime?: string;
  language?: 'pt' | 'es';
  lastReadingDate?: string;
  lastZodiacRevealDate?: string;
  isOnboarded?: boolean;
}

export type ActiveTab = 'hoje' | 'signo' | 'tiragens' | 'diario' | 'perfil' | 'admin';

