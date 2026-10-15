import React, { useState, useEffect } from 'react';
import { 
  HeartHandshake, 
  Sparkles, 
  Compass, 
  Flower2, 
  ArrowLeft, 
  Check, 
  Sparkle,
  X
} from 'lucide-react';
import type { ThemeId, SelectedCard } from '../types/tarot';
import { THEMES, getThemeById, getCardById } from '../data/allCards';
import { dealTwelveCards } from '../services/tarotEngine';
import { 
  loadActiveReadingDraft, 
  saveActiveReadingDraft, 
  getTodayDateString 
} from '../services/storage';
import { useLanguage } from '../i18n';

interface ReadingFlowProps {
  timezone: string;
  onCompleteSelection: (
    themeId: ThemeId,
    question: string,
    isCustomQuestion: boolean,
    selectedCards: [SelectedCard, SelectedCard, SelectedCard]
  ) => void;
  onCancel: () => void;
}

type FlowStep = 'theme' | 'question' | 'shuffle' | 'pick';

export const ReadingFlow: React.FC<ReadingFlowProps> = ({
  timezone,
  onCompleteSelection,
  onCancel,
}) => {
  const { t, language, translateTheme } = useLanguage();
  const todayStr = getTodayDateString(timezone);

  const [step, setStep] = useState<FlowStep>('theme');
  const [selectedThemeId, setSelectedThemeId] = useState<ThemeId>('meu_relacionamento');
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);

  // 12 Cards on the table
  const [gridCardIds, setGridCardIds] = useState<number[]>([]);
  // Indices selected in grid (0-11)
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  // Icon mapping for themes
  const themeIcons: Record<string, React.ElementType> = {
    HeartHandshake,
    Sparkles,
    Compass,
    Flower2,
  };

  const currentTheme = translateTheme(getThemeById(selectedThemeId));

  // Restore active draft if exists for today
  useEffect(() => {
    const draft = loadActiveReadingDraft();
    if (draft && draft.date === todayStr) {
      if (draft.themeId) setSelectedThemeId(draft.themeId as ThemeId);
      if (draft.question) {
        setSelectedQuestion(draft.question);
        if (draft.isCustomQuestion) {
          setIsCustomMode(true);
          setCustomQuestion(draft.question);
        }
      }
      if (draft.gridCards && draft.gridCards.length === 12) {
        setGridCardIds(draft.gridCards);
      }
      if (draft.selectedIndices) {
        setSelectedIndices(draft.selectedIndices);
      }
      if (draft.step === 'shuffle' || draft.step === 'pick') {
        setStep('pick');
      } else if (draft.step === 'question') {
        setStep('question');
      }
    }
  }, [todayStr]);

  // Persist draft on state changes
  const updateDraft = (nextStep: FlowStep, nextTheme = selectedThemeId, nextQ = getEffectiveQuestion(), nextGrid = gridCardIds, nextIndices = selectedIndices) => {
    saveActiveReadingDraft({
      step: nextStep,
      themeId: nextTheme,
      question: nextQ,
      isCustomQuestion: isCustomMode,
      gridCards: nextGrid,
      selectedIndices: nextIndices,
      revealedIndices: [],
      date: todayStr,
    });
  };

  const getEffectiveQuestion = () => {
    if (isCustomMode && customQuestion.trim()) {
      return customQuestion.trim();
    }
    return selectedQuestion || currentTheme.defaultQuestions[0];
  };

  // Select Theme
  const handleSelectTheme = (themeId: ThemeId) => {
    setSelectedThemeId(themeId);
    const theme = translateTheme(getThemeById(themeId));
    setSelectedQuestion(theme.defaultQuestions[0]);
    setIsCustomMode(false);
    setCustomQuestion('');
    setStep('question');
    updateDraft('question', themeId, theme.defaultQuestions[0]);
  };

  // Start Shuffling
  const handleStartShuffling = () => {
    const effQuestion = getEffectiveQuestion();
    setStep('shuffle');

    // Generate 12 distinct cards for the table
    const cards = dealTwelveCards().map((c) => c.id);
    setGridCardIds(cards);
    setSelectedIndices([]);

    updateDraft('shuffle', selectedThemeId, effQuestion, cards, []);

    // Transition after 2.4s shuffling animation
    setTimeout(() => {
      setStep('pick');
      updateDraft('pick', selectedThemeId, effQuestion, cards, []);
    }, 2400);
  };

  // Handle Pick Card from the 12
  const handleCardClick = (index: number) => {
    if (selectedIndices.includes(index)) {
      // Deselect
      const updated = selectedIndices.filter((i) => i !== index);
      setSelectedIndices(updated);
      updateDraft('pick', selectedThemeId, getEffectiveQuestion(), gridCardIds, updated);
      return;
    }

    if (selectedIndices.length < 3) {
      const updated = [...selectedIndices, index];
      setSelectedIndices(updated);
      updateDraft('pick', selectedThemeId, getEffectiveQuestion(), gridCardIds, updated);
    }
  };

  // Confirm Selection and Proceed to Revelation
  const handleConfirmSelection = () => {
    if (selectedIndices.length !== 3) return;

    const effQuestion = getEffectiveQuestion();
    const card0 = getCardById(gridCardIds[selectedIndices[0]]);
    const card1 = getCardById(gridCardIds[selectedIndices[1]]);
    const card2 = getCardById(gridCardIds[selectedIndices[2]]);

    const chosen: [SelectedCard, SelectedCard, SelectedCard] = [
      { card: card0, position: 'situacao', positionTitle: t.home.posSituacao, isRevealed: false },
      { card: card1, position: 'desafio', positionTitle: t.home.posDesafio, isRevealed: false },
      { card: card2, position: 'orientacao', positionTitle: t.home.posOrientacao, isRevealed: false },
    ];

    onCompleteSelection(selectedThemeId, effQuestion, isCustomMode, chosen);
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-between max-w-lg mx-auto px-4 py-4">
      {/* Top Header & Cancel Button */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E1C38B]/15">
        <button
          onClick={() => {
            if (step === 'question') setStep('theme');
            else if (step === 'pick') setStep('question');
            else onCancel();
          }}
          className="flex items-center gap-1.5 text-xs text-[#C1AFCE] hover:text-[#F7EEFB] p-1.5 rounded-lg bg-white/5 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.back}</span>
        </button>

        <span className="text-xs font-serif tracking-widest text-[#E1C38B] uppercase font-semibold">
          {step === 'theme' && (language === 'es' ? 'Etapa 1 de 3' : 'Etapa 1 de 3')}
          {step === 'question' && (language === 'es' ? 'Etapa 2 de 3' : 'Etapa 2 de 3')}
          {step === 'shuffle' && (language === 'es' ? 'Barajando...' : 'Embaralhando...')}
          {step === 'pick' && (language === 'es' ? 'Etapa 3 de 3' : 'Etapa 3 de 3')}
        </span>

        <button
          onClick={onCancel}
          className="text-[#C1AFCE] hover:text-[#F7EEFB] p-1.5 rounded-lg bg-white/5 transition-colors"
          title={t.common.close}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* STEP 1: THEME SELECTION */}
      {step === 'theme' && (
        <div className="my-auto py-4 space-y-5 animate-fadeIn">
          <div className="text-center space-y-1.5">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient">
              {t.flow.step1Title}
            </h2>
            <p className="text-xs sm:text-sm text-[#C1AFCE] max-w-sm mx-auto">
              {t.flow.step1Sub}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {THEMES.map((themeDef) => {
              const theme = translateTheme(themeDef);
              const Icon = themeIcons[theme.iconName] || Sparkles;
              const isSelected = selectedThemeId === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleSelectTheme(theme.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 relative cursor-pointer ${
                    isSelected
                      ? 'bg-[#2A1B36] border-[#E1C38B] shadow-[0_0_20px_rgba(225,195,139,0.25)] scale-[1.01]'
                      : 'bg-[#2A1B36]/60 border-[#E1C38B]/20 hover:border-[#E1C38B]/50 hover:bg-[#2A1B36]'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${isSelected ? 'bg-[#E1C38B] text-[#1B1026]' : 'bg-[#1B1026] text-[#E1C38B] border border-[#E1C38B]/20'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="font-serif text-base font-bold text-[#F7EEFB] mb-1">
                      {theme.title}
                    </h3>
                    <p className="text-xs text-[#C1AFCE] leading-relaxed">
                      {theme.subtitle}
                    </p>
                  </div>
                  {isSelected && (
                    <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-[#E1C38B] text-[#1B1026] flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 2: QUESTION SELECTION */}
      {step === 'question' && (
        <div className="my-auto py-4 space-y-5 animate-fadeIn">
          <div className="text-center space-y-1">
            <span className="text-xs text-[#E1C38B] font-semibold tracking-wide uppercase">
              {currentTheme.title}
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#F7EEFB]">
              {t.flow.chooseQuestion}
            </h2>
            <p className="text-xs text-[#C1AFCE]">
              {language === 'es' ? 'Preguntas abiertas y reflexivas revelan las perspectivas más profundas del oráculo.' : 'Perguntas abertas e reflexivas revelam as perspectivas mais profundas do oráculo.'}
            </p>
          </div>

          <div className="space-y-2.5">
            {currentTheme.defaultQuestions.map((q, idx) => {
              const isSelected = !isCustomMode && (selectedQuestion === q || (!selectedQuestion && idx === 0));
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedQuestion(q);
                    setIsCustomMode(false);
                  }}
                  className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-[#2A1B36] border-[#E1C38B] text-[#FFF5E0] font-medium shadow-md'
                      : 'bg-[#2A1B36]/40 border-[#E1C38B]/15 text-[#C1AFCE] hover:text-[#F7EEFB] hover:bg-[#2A1B36]/80'
                  }`}
                >
                  <span className="leading-snug">“{q}”</span>
                  {isSelected && (
                    <div className="w-4 h-4 rounded-full bg-[#E1C38B] text-[#1B1026] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Custom Question Option */}
          <div className="pt-2">
            <button
              onClick={() => setIsCustomMode(!isCustomMode)}
              className="text-xs text-[#E1C38B] hover:underline font-medium mb-2 flex items-center gap-1.5"
            >
              <span>{isCustomMode ? (language === 'es' ? 'Ocultar pregunta propia' : 'Ocultar pergunta própria') : (language === 'es' ? '✍️ Escribir mi propia pregunta' : '✍️ Quero escrever uma pergunta personalizada')}</span>
            </button>

            {isCustomMode && (
              <div className="p-3.5 rounded-2xl bg-[#2A1B36] border border-[#E1C38B]/40 space-y-2 shadow-inner animate-fadeIn">
                <label className="text-xs text-[#F7EEFB] font-medium block">
                  {t.flow.customQuestionLabel}
                </label>
                <input
                  type="text"
                  maxLength={120}
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder={t.flow.customPlaceholder}
                  className="w-full bg-[#1B1026] border border-[#E1C38B]/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#F7EEFB] placeholder-[#C1AFCE]/40 focus:outline-none focus:border-[#E1C38B]"
                />
                <div className="flex justify-between items-center text-[11px] text-[#C1AFCE]">
                  <span>{language === 'es' ? 'Enfócate en ti y en tus sentimientos' : 'Foque em você e nos seus sentimentos'}</span>
                  <span>{120 - customQuestion.length} {t.flow.charsRemaining}</span>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleStartShuffling}
            disabled={isCustomMode && !customQuestion.trim()}
            className="w-full py-4 px-6 rounded-2xl bg-[#E1C38B] text-[#1B1026] font-bold text-sm sm:text-base hover:bg-[#F4DFB8] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer gold-glow mt-4"
          >
            <Sparkle className="w-4 h-4 fill-[#1B1026]" />
            <span>{t.flow.btnShuffle}</span>
          </button>
        </div>
      )}

      {/* STEP 3: SHUFFLING ANIMATION */}
      {step === 'shuffle' && (
        <div className="my-auto py-12 text-center space-y-8 animate-fadeIn">
          {/* Card Shuffling Visual */}
          <div className="relative w-36 h-52 mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-[#2A1B36] border-2 border-[#E1C38B] shadow-2xl rotate-6 transform translate-x-4 animate-pulse" />
            <div className="absolute inset-0 rounded-2xl bg-[#2A1B36] border-2 border-[#E1C38B] shadow-2xl -rotate-6 transform -translate-x-4 animate-pulse" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-[#E1C38B] shadow-[0_0_30px_rgba(225,195,139,0.4)] animate-bounce duration-1000">
              <img src="/card_back.svg" alt="Verso" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-2 max-w-xs mx-auto">
            <h2 className="font-serif text-2xl font-bold text-gold-gradient">
              {t.flow.shufflingTitle}
            </h2>
            <p className="text-xs text-[#C1AFCE] leading-relaxed">
              {t.flow.shufflingSub}
            </p>
          </div>
        </div>
      )}

      {/* STEP 4: PICKING THE 3 CARDS */}
      {step === 'pick' && (
        <div className="py-2 space-y-4 animate-fadeIn">
          <div className="text-center space-y-1">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F7EEFB]">
              {t.flow.pickTitle}
            </h2>
            <p className="text-xs text-[#C1AFCE]">
              {t.flow.pickSub}
            </p>

            {/* Selection Status Badge */}
            <div className="pt-1 flex items-center justify-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                selectedIndices.length === 3 
                  ? 'bg-[#E1C38B] text-[#1B1026] border-[#E1C38B]' 
                  : 'bg-[#2A1B36] text-[#E1C38B] border-[#E1C38B]/30'
              }`}>
                {selectedIndices.length} {t.flow.ofCardsChosen}
              </span>
            </div>
          </div>

          {/* 12 Cards Grid (3 cols x 4 rows on mobile) */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 sm:gap-3.5 py-1">
            {gridCardIds.map((_, index) => {
              const selectedOrder = selectedIndices.indexOf(index);
              const isSelected = selectedOrder !== -1;

              // Labels for order
              let orderLabel = '';
              if (selectedOrder === 0) orderLabel = t.home.posSituacao;
              else if (selectedOrder === 1) orderLabel = t.home.posDesafio;
              else if (selectedOrder === 2) orderLabel = t.home.posOrientacao;

              return (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`group relative aspect-[3/5] rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-[#E1C38B] scale-[1.03] shadow-[0_0_18px_rgba(225,195,139,0.5)] -translate-y-1'
                      : 'border-[#E1C38B]/25 hover:border-[#E1C38B]/60 hover:scale-[1.02] shadow-md opacity-90 hover:opacity-100'
                  }`}
                  aria-label={`Carta ${index + 1}`}
                >
                  <img
                    src="/card_back.svg"
                    alt="Carta"
                    className="w-full h-full object-cover"
                  />

                  {/* Highlight overlay */}
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#1B1026]/75 backdrop-blur-[2px] flex flex-col items-center justify-center p-1 text-center border border-[#E1C38B]">
                      <span className="w-6 h-6 rounded-full bg-[#E1C38B] text-[#1B1026] text-xs font-bold flex items-center justify-center mb-1 shadow-md">
                        {selectedOrder + 1}
                      </span>
                      <span className="text-[10px] font-bold text-[#E1C38B] tracking-tight leading-tight">
                        {orderLabel}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <button
              onClick={handleConfirmSelection}
              disabled={selectedIndices.length !== 3}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] font-bold text-sm sm:text-base hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-xl gold-glow"
            >
              <Sparkles className="w-4 h-4 fill-[#1B1026]" />
              <span>{t.flow.revealReadingBtn}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
