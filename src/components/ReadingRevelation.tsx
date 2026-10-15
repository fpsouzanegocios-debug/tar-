import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  BookHeart, 
  ArrowLeft, 
  Save, 
  Check,
  RotateCcw
} from 'lucide-react';
import type { ThemeId, SelectedCard, ReadingRecord } from '../types/tarot';
import { getThemeById } from '../data/allCards';
import { generateReadingSynthesis } from '../services/tarotEngine';
import { saveCompletedReading, updatePersonalNote, clearActiveReadingDraft } from '../services/storage';
import { ReadingSynthesisViewer } from './ReadingSynthesisViewer';
import { useLanguage } from '../i18n';

interface ReadingRevelationProps {
  reading?: ReadingRecord; // If opening an existing reading
  newReadingData?: {
    themeId: ThemeId;
    question: string;
    isCustomQuestion: boolean;
    cards: [SelectedCard, SelectedCard, SelectedCard];
    date: string;
  };
  onBack: () => void;
  onResetToday?: () => void;
}

export const ReadingRevelation: React.FC<ReadingRevelationProps> = ({
  reading: existingReading,
  newReadingData,
  onBack,
  onResetToday,
}) => {
  const { t, language, translateCardName, translateTheme } = useLanguage();

  // Determine if this is a newly performed reading or viewing from history
  const isHistorical = Boolean(existingReading);

  const themeId = existingReading?.themeId ?? newReadingData?.themeId ?? 'meu_relacionamento';
  const question = existingReading?.question ?? newReadingData?.question ?? '';
  const isCustomQuestion = existingReading?.isCustomQuestion ?? newReadingData?.isCustomQuestion ?? false;
  const initialCards = existingReading?.cards ?? newReadingData?.cards;
  const readingDate = existingReading?.date ?? newReadingData?.date ?? '';

  // Card revelation state: for historical, all 3 are already revealed. For new, track index 0, 1, 2
  const [cards, setCards] = useState<[SelectedCard, SelectedCard, SelectedCard]>(() => {
    if (isHistorical && initialCards) {
      return initialCards.map((c) => ({ ...c, isRevealed: true })) as [SelectedCard, SelectedCard, SelectedCard];
    }
    return (initialCards || []) as [SelectedCard, SelectedCard, SelectedCard];
  });

  const [activeTabCard, setActiveTabCard] = useState<number>(0);
  const [personalNote, setPersonalNote] = useState<string>(existingReading?.personalNote || '');
  const [isSavedNote, setIsSavedNote] = useState<boolean>(false);
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState<boolean>(isHistorical);
  const currentRecordId = existingReading?.id || `reading_${Date.now()}`;

  const theme = translateTheme(getThemeById(themeId));
  const allCardsRevealed = cards.every((c) => c.isRevealed);

  // Generate or retrieve synthesis
  const synthesis = existingReading?.summary || (cards && cards.length >= 3 && cards[0] && cards[1] && cards[2] ? generateReadingSynthesis(
    themeId,
    question,
    cards[0],
    cards[1],
    cards[2]
  ) : '');

  // Flip a card on tap
  const handleFlipCard = (index: number) => {
    if (cards[index].isRevealed) {
      setActiveTabCard(index);
      return;
    }

    const updated = [...cards] as [SelectedCard, SelectedCard, SelectedCard];
    updated[index] = { ...updated[index], isRevealed: true };
    setCards(updated);
    setActiveTabCard(index);

    // If this was the last card to reveal, trigger celebration & save completed reading
    if (updated.every((c) => c.isRevealed) && !hasTriggeredConfetti) {
      setHasTriggeredConfetti(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#E1C38B', '#F4DFB8', '#B89657', '#9333ea'],
        });
      } catch (e) {
        // no-op
      }

      // Auto-save completed reading
      const record: ReadingRecord = {
        id: currentRecordId,
        date: readingDate,
        timestamp: Date.now(),
        themeId,
        themeTitle: theme.title,
        question,
        isCustomQuestion,
        cards: updated,
        summary: synthesis,
        personalNote,
        status: 'completed',
      };
      saveCompletedReading(record);
      clearActiveReadingDraft();
    }
  };

  // Save personal note
  const handleSaveNote = () => {
    updatePersonalNote(currentRecordId, personalNote);
    setIsSavedNote(true);
    setTimeout(() => setIsSavedNote(false), 3000);
  };

  const revealedCount = cards.filter((c) => c.isRevealed).length;

  const getPositionLabel = (pos: string) => {
    if (pos === 'situacao') return t.home.posSituacao;
    if (pos === 'desafio') return t.home.posDesafio;
    return t.home.posOrientacao;
  };

  return (
    <div className="space-y-6 pb-28 pt-2 max-w-lg mx-auto px-4 animate-fadeIn">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E1C38B]/15">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-[#C1AFCE] hover:text-[#F7EEFB] p-1.5 rounded-lg bg-white/5 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isHistorical ? t.history.title : t.reading.backHome}</span>
        </button>

        <span className="text-xs font-serif text-[#E1C38B] font-semibold tracking-wider">
          {readingDate}
        </span>
      </div>

      {/* Reading Overview Header */}
      <div className="text-center space-y-1.5">
        <span className="text-xs text-[#E1C38B] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#2A1B36] border border-[#E1C38B]/30 inline-block">
          {theme.title}
        </span>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient">
          {t.reading.title}
        </h1>
        <p className="text-xs sm:text-sm text-[#F7EEFB]/90 italic max-w-sm mx-auto font-serif">
          “{question}”
        </p>

        {!allCardsRevealed && (
          <p className="text-xs text-[#E1C38B] font-medium pt-1 animate-pulse">
            {language === 'es' 
              ? `Toca las cartas para revelar el mensaje (${revealedCount} de 3 reveladas)` 
              : `Toque nas cartas para revelar a mensagem (${revealedCount} de 3 reveladas)`}
          </p>
        )}
      </div>

      {/* 3 Cards Display (Horizontal / Grid) */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-4 py-2">
        {cards.map((sc, index) => {
          const isFlipped = sc.isRevealed;
          const isSelectedTab = activeTabCard === index;
          const cardName = translateCardName(sc.card);
          const posLabel = getPositionLabel(sc.position);

          return (
            <div
              key={index}
              onClick={() => handleFlipCard(index)}
              className="flex flex-col items-center cursor-pointer group"
            >
              {/* Position Header Label */}
              <div className={`text-[11px] font-semibold mb-1.5 text-center transition-colors ${
                isSelectedTab ? 'text-[#E1C38B]' : 'text-[#C1AFCE]'
              }`}>
                {posLabel}
              </div>

              {/* 3D Flip Card Container */}
              <div className="relative w-full aspect-[3/5] perspective-1000">
                <div
                  className={`w-full h-full transition-transform duration-700 transform-style-3d rounded-xl shadow-lg border-2 ${
                    isSelectedTab ? 'border-[#E1C38B] ring-2 ring-[#E1C38B]/30' : 'border-[#E1C38B]/30'
                  } ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                  {/* Card Back (Unrevealed) */}
                  <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-[#2A1B36] flex items-center justify-center">
                    <img
                      src="/card_back.svg"
                      alt="Verso"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors">
                      <span className="w-7 h-7 rounded-full bg-[#1B1026]/90 border border-[#E1C38B] text-[#E1C38B] text-xs font-serif font-bold flex items-center justify-center shadow-lg">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card Front (Revealed) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-[#1B1026]">
                    <img
                      src={sc.card.image}
                      alt={cardName}
                      className="w-full h-full object-cover"
                      loading="eager"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.retried) {
                          target.dataset.retried = 'true';
                          target.src = `${sc.card.image}?r=${Date.now()}`;
                        }
                      }}
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1B1026] via-[#1B1026]/80 to-transparent p-1.5 text-center">
                      <p className="text-[10px] font-bold text-[#E1C38B] truncate font-serif">
                        {cardName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revealed Status Indicator */}
              <span className={`text-[10px] mt-1.5 font-medium transition-colors ${
                isFlipped ? 'text-[#E1C38B]' : 'text-[#C1AFCE]/60'
              }`}>
                {isFlipped ? (language === 'es' ? 'Revelada' : 'Revelada') : (language === 'es' ? 'Toca p/ voltear' : 'Toque p/ virar')}
              </span>
            </div>
          );
        })}
      </div>

      {/* Detailed Interpretation Card for Active Card */}
      {cards[activeTabCard].isRevealed && (
        <section 
          aria-label="Interpretação da carta"
          className="rounded-3xl bg-[#2A1B36] border border-[#E1C38B]/30 p-5 space-y-4 shadow-xl gold-border-glow"
        >
          {/* Card Header & Position */}
          <div className="flex items-start justify-between border-b border-[#E1C38B]/15 pb-3">
            <div>
              <span className="text-[11px] font-semibold text-[#E1C38B] uppercase tracking-wider block">
                {getPositionLabel(cards[activeTabCard].position)} — {
                  activeTabCard === 0 ? (language === 'es' ? 'El Momento Presente' : 'O Momento Presente') :
                  activeTabCard === 1 ? (language === 'es' ? 'El Punto de Atención' : 'O Ponto de Atenção') :
                  (language === 'es' ? 'La Brújula Lúcida' : 'A Bússola Lúcida')
                }
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F7EEFB] mt-0.5">
                {cards[activeTabCard].card.roman ? `${cards[activeTabCard].card.roman}. ` : ''}
                {translateCardName(cards[activeTabCard].card)}
              </h2>
              <p className="text-xs text-[#C1AFCE] italic mt-0.5">
                {cards[activeTabCard].card.arcana === 'maior' 
                  ? (language === 'es' ? 'Arcano Mayor' : 'Arcano Maior') 
                  : (language === 'es' ? 'Arcano Menor' : 'Arcano Menor')} • {cards[activeTabCard].card.element}
              </p>
            </div>
            <div className="flex gap-1">
              {cards[activeTabCard].card.keywords.slice(0, 2).map((kw, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-[#1B1026] text-[#E1C38B] border border-[#E1C38B]/20">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Position Nuanced Meaning */}
          <div className="space-y-1.5 text-xs sm:text-sm text-[#F7EEFB] leading-relaxed">
            <p>
              {cards[activeTabCard].position === 'situacao' && cards[activeTabCard].card.positionMeanings.situacao[themeId]}
              {cards[activeTabCard].position === 'desafio' && cards[activeTabCard].card.positionMeanings.desafio[themeId]}
              {cards[activeTabCard].position === 'orientacao' && cards[activeTabCard].card.positionMeanings.orientacao[themeId]}
            </p>
          </div>

          {/* Reflection Question Box */}
          <div className="p-3.5 rounded-2xl bg-[#1B1026]/80 border border-[#E1C38B]/20 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E1C38B]">
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{t.reading.reflectionQuestion}</span>
            </div>
            <p className="text-xs text-[#F7EEFB] italic pl-5">
              “{cards[activeTabCard].card.reflectionQuestions[themeId]}”
            </p>
          </div>

          {/* Micro Action Box */}
          <div className="p-3.5 rounded-2xl bg-[#1B1026]/80 border border-[#E1C38B]/20 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E1C38B]">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>{t.reading.practicalAction}</span>
            </div>
            <p className="text-xs text-[#F7EEFB] pl-5">
              {cards[activeTabCard].card.microActions[themeId]}
            </p>
          </div>

          {/* Quick tab switcher for other cards */}
          <div className="flex justify-between pt-2 border-t border-[#E1C38B]/10 text-xs">
            <button
              onClick={() => setActiveTabCard((activeTabCard + 2) % 3)}
              className="text-[#C1AFCE] hover:text-[#E1C38B] font-medium"
            >
              ← {language === 'es' ? 'Carta anterior' : 'Carta anterior'}
            </button>
            <button
              onClick={() => setActiveTabCard((activeTabCard + 1) % 3)}
              className="text-[#C1AFCE] hover:text-[#E1C38B] font-medium"
            >
              {language === 'es' ? 'Siguiente carta' : 'Próxima carta'} →
            </button>
          </div>
        </section>
      )}

      {/* Holistic Reading Synthesis (Shown after all 3 cards are flipped) */}
      {allCardsRevealed && (
        <>
          <section 
            aria-label="Resumo e síntese da leitura"
            className="rounded-3xl bg-gradient-to-b from-[#2A1B36] to-[#1E1129] border border-[#E1C38B]/35 p-6 space-y-4 shadow-2xl animate-fadeIn"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E1C38B] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 fill-[#E1C38B]/30" />
              <span>{language === 'es' ? 'Visión Integrada de las 3 Cartas' : 'Visão Integrada das 3 Cartas'}</span>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F7EEFB]">
              {t.reading.synthesis}
            </h2>

            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-[#1B1026]/70 border border-[#E1C38B]/20">
                <p className="text-xs text-[#C1AFCE] leading-relaxed">
                  {language === 'es' 
                    ? `La relación entre ${translateCardName(cards[0].card)} (${t.home.posSituacao}), ${translateCardName(cards[1].card)} (${t.home.posDesafio}) y ${translateCardName(cards[2].card)} (${t.home.posOrientacao}) apunta hacia un camino de claridad y diálogo sincero.` 
                    : `A relação entre ${translateCardName(cards[0].card)} (${t.home.posSituacao}), ${translateCardName(cards[1].card)} (${t.home.posDesafio}) e ${translateCardName(cards[2].card)} (${t.home.posOrientacao}) aponta para um movimento de autovalorização e diálogo sincero.`}
                </p>
              </div>

              <ReadingSynthesisViewer synthesis={synthesis} />
            </div>
          </section>

          {/* Personal Journal / Reflection Note Input */}
          <section 
            aria-label="Minha reflexão pessoal"
            className="rounded-3xl bg-[#2A1B36] border border-[#E1C38B]/30 p-5 space-y-3 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E1C38B]">
                <BookHeart className="w-4 h-4" />
                <span>{t.reading.myReflection}</span>
              </div>
              {isSavedNote && (
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> {language === 'es' ? '¡Guardado!' : 'Salvo!'}
                </span>
              )}
            </div>

            <p className="text-xs text-[#C1AFCE]">
              {language === 'es' 
                ? 'Escribe lo que estas cartas despertaron en tu corazón (guardado privado en tu dispositivo).' 
                : 'Registre o que essas cartas despertaram em seu coração. Esta anotação fica salva em seu diário com total privacidade.'}
            </p>

            <textarea
              rows={4}
              value={personalNote}
              onChange={(e) => setPersonalNote(e.target.value)}
              placeholder={t.reading.myReflectionPlaceholder}
              className="w-full bg-[#1B1026] border border-[#E1C38B]/25 rounded-2xl p-3.5 text-xs sm:text-sm text-[#F7EEFB] placeholder-[#C1AFCE]/40 focus:outline-none focus:border-[#E1C38B] transition-colors leading-relaxed"
            />

            <button
              onClick={handleSaveNote}
              className="w-full py-2.5 px-4 rounded-xl bg-[#E1C38B] text-[#1B1026] font-semibold text-xs sm:text-sm hover:bg-[#F4DFB8] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{t.reading.saveReflection}</span>
            </button>
          </section>

          {/* Return Home & Reset Options */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onBack}
              className="w-full sm:w-auto py-3 px-8 rounded-2xl bg-white/10 hover:bg-white/15 text-xs sm:text-sm text-[#F7EEFB] font-medium border border-white/10 transition-colors cursor-pointer"
            >
              {t.reading.backHome}
            </button>
            {onResetToday && (
              <button
                onClick={onResetToday}
                className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-[#E1C38B]/20 hover:bg-[#E1C38B]/30 text-xs sm:text-sm text-[#E1C38B] font-medium border border-[#E1C38B]/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.home.resetTodayBtn}</span>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};
