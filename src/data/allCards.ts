import type { ArcanaCard } from '../types/tarot';
import { MAJOR_ARCANA, THEMES, getThemeById } from './majorArcana';
import { MINOR_ARCANA } from './minorArcana';

/**
 * Full 78 Tarot Deck:
 * - 22 Major Arcana (IDs 0 to 21)
 * - 56 Minor Arcana (IDs 22 to 77)
 *   - 14 Copas (22-35)
 *   - 14 Paus (36-49)
 *   - 14 Espadas (50-63)
 *   - 14 Ouros (64-77)
 */
export const ALL_CARDS: ArcanaCard[] = [
  ...MAJOR_ARCANA.map((card) => ({
    ...card,
    arcana: 'maior' as const,
    loveRelationshipMeaning: card.loveRelationshipMeaning || card.generalLoveMeaning,
  })),
  ...MINOR_ARCANA,
];

/**
 * Retrieve any card from the full 78-card deck by stable ID
 */
export function getCardById(id: number): ArcanaCard {
  return ALL_CARDS.find((card) => card.id === id) || ALL_CARDS[0];
}

export { THEMES, getThemeById, MAJOR_ARCANA, MINOR_ARCANA };
