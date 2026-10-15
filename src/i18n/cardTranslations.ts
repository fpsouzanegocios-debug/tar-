import type { ArcanaCard, ThemeDefinition, ThemeId, ZodiacSignId, ZodiacSignInfo } from '../types/tarot';

export const MAJOR_ARCANA_NAMES_ES: Record<number, string> = {
  0: 'El Loco',
  1: 'El Mago',
  2: 'La Sacerdotisa',
  3: 'La Emperatriz',
  4: 'El Emperador',
  5: 'El Sumo Sacerdote',
  6: 'Los Enamorados',
  7: 'El Carro',
  8: 'La Fuerza',
  9: 'El Ermitaño',
  10: 'La Rueda de la Fortuna',
  11: 'La Justicia',
  12: 'El Colgado',
  13: 'La Muerte',
  14: 'La Templanza',
  15: 'El Diablo',
  16: 'La Torre',
  17: 'La Estrella',
  18: 'La Luna',
  19: 'El Sol',
  20: 'El Juicio',
  21: 'El Mundo',
};

export const SUITS_ES: Record<string, string> = {
  copas: 'Copas',
  paus: 'Bastos',
  espadas: 'Espadas',
  ouros: 'Oros',
};

export const RANKS_ES: Record<string, string> = {
  'Ás': 'As',
  '2': 'Dos',
  '3': 'Tres',
  '4': 'Cuatro',
  '5': 'Cinco',
  '6': 'Seis',
  '7': 'Siete',
  '8': 'Ocho',
  '9': 'Nueve',
  '10': 'Diez',
  'Valete': 'Sota',
  'Cavaleiro': 'Caballero',
  'Rainha': 'Reina',
  'Rei': 'Rey',
};

export const ELEMENTS_ES: Record<string, string> = {
  'Fogo': 'Fuego',
  'Terra': 'Tierra',
  'Ar': 'Aire',
  'Água': 'Agua',
};

export const THEMES_ES: Record<ThemeId, { title: string; subtitle: string; defaultQuestions: string[] }> = {
  meu_relacionamento: {
    title: 'Mi relación actual',
    subtitle: 'Cultiva armonía, claridad y conexión con quien camina a tu lado.',
    defaultQuestions: [
      '¿Qué necesito observar en mi relación hoy?',
      '¿Cómo puedo comunicar mejor mis necesidades?',
      '¿Qué energía podemos nutrir juntos para fortalecer nuestra sintonía?',
      '¿Qué está listo para ser acogido o transformado entre nosotros?',
    ],
  },
  conhecendo_alguem: {
    title: 'Estoy conociendo a alguien',
    subtitle: 'Navega el inicio de una historia con serenidad, presencia y verdad.',
    defaultQuestions: [
      '¿Cómo puedo conocer este vínculo con calma y sin prisa?',
      '¿Qué expectativas quiero revisar para mantenerme en el presente?',
      '¿Qué están señalando mi intuición y sensibilidad sobre nosotros?',
      '¿Cómo preservar mi esencia y límites en este nuevo encuentro?',
    ],
  },
  distancia: {
    title: 'Hay distancia entre nosotros',
    subtitle: 'Comprende la nostalgia, los silencios o los desafíos del espacio físico y emocional.',
    defaultQuestions: [
      '¿Cómo puedo sobrellevar esta distancia con madurez y paz?',
      '¿Qué conversación sincera o importante estoy evitando?',
      '¿Cómo preservar el afecto sin perderme de mi propia rutina?',
      '¿Qué revela este espacio de silencio sobre mis necesidades afectivas?',
    ],
  },
  amor_proprio: {
    title: 'Mi amor propio',
    subtitle: 'Reconoce tu propio valor, abraza tus límites y honra tu camino.',
    defaultQuestions: [
      '¿De qué necesito cuidar con cariño en mí hoy?',
      '¿Qué límite saludable quiero respetar y comunicar?',
      '¿Cómo puedo ser más generosa y comprensiva con mis sentimientos?',
      '¿Qué patrón afectivo estoy lista para reconocer y abrazar con amor?',
    ],
  },
};

export const ZODIAC_SIGNS_ES: Record<ZodiacSignId, { name: string; element: 'Fogo' | 'Terra' | 'Ar' | 'Água'; period: string; keywords: string[] }> = {
  aries: {
    name: 'Aries',
    element: 'Fogo',
    period: '21 de mar. – 19 de abr.',
    keywords: ['Iniciativa', 'Pasión', 'Coraje', 'Autenticidad'],
  },
  touro: {
    name: 'Tauro',
    element: 'Terra',
    period: '20 de abr. – 20 de may.',
    keywords: ['Estabilidad', 'Afecto tangible', 'Lealtad', 'Sensualidad'],
  },
  gemeos: {
    name: 'Géminis',
    element: 'Ar',
    period: '21 de may. – 20 de jun.',
    keywords: ['Diálogo', 'Curiosidad', 'Ligereza', 'Conexión mental'],
  },
  cancer: {
    name: 'Cáncer',
    element: 'Água',
    period: '21 de jun. – 22 de jul.',
    keywords: ['Acogida', 'Vulnerabilidad', 'Cuidado', 'Sensibilidad'],
  },
  leao: {
    name: 'Leo',
    element: 'Fogo',
    period: '23 de jul. – 22 de ago.',
    keywords: ['Generosidad', 'Brillo', 'Calidez afectiva', 'Expresión'],
  },
  virgem: {
    name: 'Virgo',
    element: 'Terra',
    period: '23 de ago. – 22 de sep.',
    keywords: ['Atención al detalle', 'Presencia', 'Dedicación', 'Amabilidad'],
  },
  libra: {
    name: 'Libra',
    element: 'Ar',
    period: '23 de sep. – 22 de oct.',
    keywords: ['Armonía', 'Equilibrio', 'Reciprocidad', 'Empatía'],
  },
  escorpiao: {
    name: 'Escorpio',
    element: 'Água',
    period: '23 de oct. – 21 de nov.',
    keywords: ['Profundidad', 'Intimidad', 'Transformación', 'Verdad'],
  },
  sagitario: {
    name: 'Sagitario',
    element: 'Fogo',
    period: '22 de nov. – 21 de dic.',
    keywords: ['Libertad', 'Entusiasmo', 'Sinceridad', 'Expansión'],
  },
  capricornio: {
    name: 'Capricornio',
    element: 'Terra',
    period: '22 de dic. – 19 de ene.',
    keywords: ['Compromiso', 'Madurez', 'Construcción', 'Solidez'],
  },
  aquario: {
    name: 'Acuario',
    element: 'Ar',
    period: '20 de ene. – 18 de feb.',
    keywords: ['Compañerismo', 'Originalidad', 'Espacio mutuo', 'Complicidad'],
  },
  peixes: {
    name: 'Piscis',
    element: 'Água',
    period: '19 de feb. – 20 de mar.',
    keywords: ['Empatía', 'Amor incondicional', 'Intuición', 'Poesía'],
  },
};

/**
 * Translate card name to Spanish or Portuguese
 */
export function translateCardName(card: ArcanaCard, lang: 'pt' | 'es'): string {
  if (lang !== 'es') return card.name;
  if (card.id <= 21 && MAJOR_ARCANA_NAMES_ES[card.id]) {
    return MAJOR_ARCANA_NAMES_ES[card.id];
  }
  if (card.rank && card.suit) {
    const rankEs = RANKS_ES[card.rank] || card.rank;
    const suitEs = SUITS_ES[card.suit] || card.suit;
    return `${rankEs} de ${suitEs}`;
  }
  return card.name;
}

/**
 * Returns a translated version of the card
 */
export function getTranslatedCard(card: ArcanaCard, lang: 'pt' | 'es'): ArcanaCard {
  if (lang !== 'es') return card;
  const name = translateCardName(card, 'es');
  const element = ELEMENTS_ES[card.element] || card.element;
  return {
    ...card,
    name,
    element,
  };
}

/**
 * Returns a translated version of a Theme definition
 */
export function getTranslatedTheme(theme: ThemeDefinition, lang: 'pt' | 'es'): ThemeDefinition {
  if (lang !== 'es') return theme;
  const trans = THEMES_ES[theme.id];
  if (!trans) return theme;
  return {
    ...theme,
    title: trans.title,
    subtitle: trans.subtitle,
    defaultQuestions: trans.defaultQuestions,
  };
}

/**
 * Returns a translated version of a Zodiac Sign info
 */
export function getTranslatedSignInfo(sign: ZodiacSignInfo, lang: 'pt' | 'es'): ZodiacSignInfo {
  if (lang !== 'es') return sign;
  const trans = ZODIAC_SIGNS_ES[sign.id];
  if (!trans) return sign;
  return {
    ...sign,
    name: trans.name,
    period: trans.period,
    keywords: trans.keywords,
  };
}
