import type { ArcanaCard, ThemeId, SelectedCard } from '../types/tarot';
import { ALL_CARDS, getThemeById } from '../data/allCards';

/**
 * Fisher-Yates shuffle with crypto randomness across all 78 cards
 */
export function shuffleDeck<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const cryptoValues = new Uint32Array(1);
    crypto.getRandomValues(cryptoValues);
    const j = Math.floor((cryptoValues[0] / (0xffffffff + 1)) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Deal 12 distinct cards from the entire 78-card Tarot Deck for the user's selection table
 */
export function dealTwelveCards(): ArcanaCard[] {
  const shuffled = shuffleDeck(ALL_CARDS);
  return shuffled.slice(0, 12);
}

/**
 * Local interpretation engine that weaves a holistic narrative connecting
 * Situação, Desafio, and Orientação for the specific theme and question.
 */
export function generateReadingSynthesis(
  themeId: ThemeId,
  question: string,
  c1: SelectedCard,
  c2: SelectedCard,
  c3: SelectedCard
): string {
  const theme = getThemeById(themeId);
  const card1 = c1.card;
  const card2 = c2.card;
  const card3 = c3.card;

  const sitText = card1.positionMeanings.situacao[themeId];
  const desText = card2.positionMeanings.desafio[themeId];
  const oriText = card3.positionMeanings.orientacao[themeId];

  // Síntese limpa, elegante e profissional, sem marcadores de markdown
  return `Síntese da Sua Tiragem
Tema: ${theme.title}
"${question}"

1. O Cenário Presente (${card1.name} em Situação):
Seu momento afetivo atual é marcado pela vibração de ${card1.name}. ${sitText} Esse arquétipo traz à tona aspectos como ${card1.keywords.slice(0, 3).join(', ')}, mostrando que o momento pede reconhecimento da sua verdade com serenidade.

2. O Ponto de Atenção (${card2.name} em Desafio):
O ponto emocional que merece discernimento surge sob a influência de ${card2.name}. ${desText} Em vez de reagir com ansiedade ou julgamento, acolha essa reflexão como um convite para amadurecer aspectos de ${card2.keywords[0]} e cuidar das suas vulnerabilidades com tranquilidade.

3. O Rumo Indicado (${card3.name} em Orientação):
Para harmonizar a relação entre o presente e o desafio, a orientação da leitura aponta para ${card3.name}. ${oriText} A mensagem é clara: confie no seu discernimento, pratique a gentileza nas palavras e tome atitudes conscientes fundamentadas na energia de ${card3.keywords[0]}.

Mensagem do Coração:
O tarô não determina um destino fixo, mas oferece um espelho lúcido. Ao alinhar a consciência de ${card1.name} com o aprendizado de ${card2.name} e a atitude de ${card3.name}, você conduz sua história no amor com equilíbrio, serenidade e dignidade.`;
}

export interface InterpretationProvider {
  name: string;
  isAI: boolean;
  synthesize(
    themeId: ThemeId,
    question: string,
    cards: [SelectedCard, SelectedCard, SelectedCard]
  ): Promise<string>;
}

export class LocalTarotProvider implements InterpretationProvider {
  name = 'Mecanismo Simbólico Estruturado';
  isAI = false;

  async synthesize(
    themeId: ThemeId,
    question: string,
    cards: [SelectedCard, SelectedCard, SelectedCard]
  ): Promise<string> {
    return generateReadingSynthesis(themeId, question, cards[0], cards[1], cards[2]);
  }
}

export const activeInterpretationProvider: InterpretationProvider = new LocalTarotProvider();
