import type { ZodiacSignInfo, ZodiacSignId } from '../../types/tarot';

export const ZODIAC_SIGNS: ZodiacSignInfo[] = [
  {
    id: 'aries',
    name: 'Áries',
    symbol: '♈',
    element: 'Fogo',
    period: '21 de mar. – 19 de abr.',
    keywords: ['Iniciativa', 'Paixão', 'Coragem', 'Autenticidade'],
  },
  {
    id: 'touro',
    name: 'Touro',
    symbol: '♉',
    element: 'Terra',
    period: '20 de abr. – 20 de mai.',
    keywords: ['Estabilidade', 'Afeto tangível', 'Lealdade', 'Sensualidade'],
  },
  {
    id: 'gemeos',
    name: 'Gêmeos',
    symbol: '♊',
    element: 'Ar',
    period: '21 de mai. – 20 de jun.',
    keywords: ['Diálogo', 'Curiosidade', 'Leveza', 'Conexão mental'],
  },
  {
    id: 'cancer',
    name: 'Câncer',
    symbol: '♋',
    element: 'Água',
    period: '21 de jun. – 22 de jul.',
    keywords: ['Acolhimento', 'Vulnerabilidade', 'Cuidado', 'Sensibilidade'],
  },
  {
    id: 'leao',
    name: 'Leão',
    symbol: '♌',
    element: 'Fogo',
    period: '23 de jul. – 22 de ago.',
    keywords: ['Generosidade', 'Brilho', 'Calor afetivo', 'Expressão'],
  },
  {
    id: 'virgem',
    name: 'Virgem',
    symbol: '♍',
    element: 'Terra',
    period: '23 de ago. – 22 de set.',
    keywords: ['Atenção aos detalhes', 'Presença', 'Dedicação', 'Gentileza'],
  },
  {
    id: 'libra',
    name: 'Libra',
    symbol: '♎',
    element: 'Ar',
    period: '23 de set. – 22 de out.',
    keywords: ['Harmonia', 'Equilíbrio', 'Reciprocidade', 'Empatia'],
  },
  {
    id: 'escorpiao',
    name: 'Escorpião',
    symbol: '♏',
    element: 'Água',
    period: '23 de out. – 21 de nov.',
    keywords: ['Profundidade', 'Intimidade', 'Transformação', 'Verdade'],
  },
  {
    id: 'sagitario',
    name: 'Sagitário',
    symbol: '♐',
    element: 'Fogo',
    period: '22 de nov. – 21 de dez.',
    keywords: ['Liberdade', 'Entusiasmo', 'Sinceridade', 'Expansão'],
  },
  {
    id: 'capricornio',
    name: 'Capricórnio',
    symbol: '♑',
    element: 'Terra',
    period: '22 de dez. – 19 de jan.',
    keywords: ['Compromisso', 'Maturidade', 'Construção', 'Solidez'],
  },
  {
    id: 'aquario',
    name: 'Aquário',
    symbol: '♒',
    element: 'Ar',
    period: '20 de jan. – 18 de fev.',
    keywords: ['Companheirismo', 'Originalidade', 'Espaço mútuo', 'Cumplicidade'],
  },
  {
    id: 'peixes',
    name: 'Peixes',
    symbol: '♓',
    element: 'Água',
    period: '19 de fev. – 20 de mar.',
    keywords: ['Empatia', 'Amor incondicional', 'Intuição', 'Poesia'],
  },
];

export function getZodiacSignInfo(id: ZodiacSignId): ZodiacSignInfo {
  const found = ZODIAC_SIGNS.find((s) => s.id === id);
  return found || ZODIAC_SIGNS[0];
}

export const ZODIAC_SIGNS_INFO = ZODIAC_SIGNS;

/**
 * Calculates the Zodiac sign according to day and month of birth.
 * @param day Day of the month (1-31)
 * @param month Month of the year (1-12)
 */
export function getZodiacSignFromBirthDate(day: number, month: number): ZodiacSignInfo {
  let signId: ZodiacSignId = 'aries';

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    signId = 'aries';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    signId = 'touro';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    signId = 'gemeos';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    signId = 'cancer';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    signId = 'leao';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    signId = 'virgem';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    signId = 'libra';
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    signId = 'escorpiao';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    signId = 'sagitario';
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    signId = 'capricornio';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    signId = 'aquario';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    signId = 'peixes';
  }

  return getZodiacSignInfo(signId);
}

