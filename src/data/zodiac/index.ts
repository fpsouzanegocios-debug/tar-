import type { ZodiacSignId, ZodiacDailyMessage, ZodiacSignInfo } from '../../types/tarot';
import { ZODIAC_SIGNS_INFO, getZodiacSignInfo } from './signsInfo';
import { ARIES_MESSAGES } from './aries';
import { TOURO_MESSAGES } from './touro';
import { GEMEOS_MESSAGES } from './gemeos';
import { CANCER_MESSAGES } from './cancer';
import { LEAO_MESSAGES } from './leao';
import { VIRGEM_MESSAGES } from './virgem';
import { LIBRA_MESSAGES } from './libra';
import { ESCORPIAO_MESSAGES } from './escorpiao';
import { SAGITARIO_MESSAGES } from './sagitario';
import { CAPRICORNIO_MESSAGES } from './capricornio';
import { AQUARIO_MESSAGES } from './aquario';
import { PEIXES_MESSAGES } from './peixes';

export { ZODIAC_SIGNS_INFO, getZodiacSignInfo };

export const ZODIAC_MESSAGES_MAP: Record<ZodiacSignId, ZodiacDailyMessage[]> = {
  aries: ARIES_MESSAGES,
  touro: TOURO_MESSAGES,
  gemeos: GEMEOS_MESSAGES,
  cancer: CANCER_MESSAGES,
  leao: LEAO_MESSAGES,
  virgem: VIRGEM_MESSAGES,
  libra: LIBRA_MESSAGES,
  escorpiao: ESCORPIAO_MESSAGES,
  sagitario: SAGITARIO_MESSAGES,
  capricornio: CAPRICORNIO_MESSAGES,
  aquario: AQUARIO_MESSAGES,
  peixes: PEIXES_MESSAGES,
};

/**
 * Epoch reference date for 30-day message cycle.
 * Day 0 begins on 2026-10-01 (local timezone reference).
 */
const CYCLE_EPOCH = new Date(2026, 9, 1).getTime(); // Oct 1, 2026 (month is 0-indexed: 9 = Oct)
const MS_PER_DAY = 24 * 60 * 60 * 1000;

export interface ZodiacDayCalculation {
  dayIndex: number; // 0 to 29
  cycleNumber: number; // 1, 2, ...
  daysRemainingInCycle: number; // how many days until cycle end
  isCycleCompleted: boolean; // true if after day 30 of cycle 1
  dateStr: string;
}

/**
 * Deterministically computes the day index (0..29) for any given date string (YYYY-MM-DD).
 * Guarantees that everyone on the same calendar day sees the exact same message.
 */
export function getZodiacDayIndexForDate(dateStr: string): ZodiacDayCalculation {
  const [year, month, day] = dateStr.split('-').map(Number);
  const targetDate = new Date(year, month - 1, day).getTime();
  const diffDays = Math.floor((targetDate - CYCLE_EPOCH) / MS_PER_DAY);
  
  // Safe positive modulo 30
  const normalizedDiff = diffDays >= 0 ? diffDays : (diffDays % 30 + 30) % 30;
  const dayIndex = normalizedDiff % 30;
  const cycleNumber = Math.floor(normalizedDiff / 30) + 1;
  const daysRemainingInCycle = 29 - dayIndex;
  const isCycleCompleted = normalizedDiff >= 30;

  return {
    dayIndex,
    cycleNumber,
    daysRemainingInCycle,
    isCycleCompleted,
    dateStr,
  };
}

/**
 * Returns the daily message for a given sign and date string (YYYY-MM-DD).
 */
export function getZodiacDailyMessage(signId: ZodiacSignId, dateStr: string): {
  message: ZodiacDailyMessage;
  calc: ZodiacDayCalculation;
  signInfo: ZodiacSignInfo;
} {
  const calc = getZodiacDayIndexForDate(dateStr);
  const signInfo = getZodiacSignInfo(signId);
  const messages = ZODIAC_MESSAGES_MAP[signId] || ARIES_MESSAGES;
  const message = messages[calc.dayIndex] || messages[0];

  return {
    message,
    calc,
    signInfo,
  };
}

/**
 * Returns all 30 messages for a given sign.
 */
export function getZodiacMessagesForSign(signId: ZodiacSignId): ZodiacDailyMessage[] {
  return ZODIAC_MESSAGES_MAP[signId] || [];
}

/**
 * Returns the total count of registered zodiac daily messages.
 */
export function getTotalZodiacMessagesCount(): { perSign: number; total: number } {
  const keys = Object.keys(ZODIAC_MESSAGES_MAP) as ZodiacSignId[];
  const total = keys.reduce((acc, k) => acc + (ZODIAC_MESSAGES_MAP[k]?.length || 0), 0);
  return {
    perSign: 30,
    total,
  };
}
