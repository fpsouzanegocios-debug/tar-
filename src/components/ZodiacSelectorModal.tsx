import React from 'react';
import { X, Sparkles, Check } from 'lucide-react';
import type { ZodiacSignId, ZodiacSignInfo } from '../types/tarot';
import { ZODIAC_SIGNS_INFO } from '../data/zodiac/signsInfo';
import { ZodiacGlyph } from './ZodiacGlyph';
import { useLanguage } from '../i18n';

interface ZodiacSelectorModalProps {
  currentSignId?: ZodiacSignId;
  isOpen: boolean;
  onClose: () => void;
  onSelectSign: (signId: ZodiacSignId) => void;
  title?: string;
  subtitle?: string;
}

export const ZodiacSelectorModal: React.FC<ZodiacSelectorModalProps> = ({
  currentSignId,
  isOpen,
  onClose,
  onSelectSign,
  title,
  subtitle,
}) => {
  const { language, translateSign } = useLanguage();

  if (!isOpen) return null;

  const modalTitle = title || (language === 'es' ? 'Elige tu Signo' : 'Escolha o seu Signo');
  const modalSub = subtitle || (language === 'es' 
    ? 'Selecciona tu signo solar directamente para acceder a los mensajes diarios sobre amor y relaciones.' 
    : 'Selecione seu signo solar diretamente para acessar as mensagens diárias sobre amor e relacionamentos.');

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Fogo':
      case 'Fuego':
        return 'text-amber-400 bg-amber-950/40 border-amber-500/30';
      case 'Terra':
      case 'Tierra':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30';
      case 'Ar':
      case 'Aire':
        return 'text-sky-300 bg-sky-950/40 border-sky-500/30';
      case 'Água':
      case 'Agua':
        return 'text-indigo-300 bg-indigo-950/40 border-indigo-500/30';
      default:
        return 'text-[#E1C38B] bg-[#E1C38B]/10 border-[#E1C38B]/20';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="zodiac-modal-title"
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-[#2A1B36] to-[#1B1026] border border-[#E1C38B]/40 p-5 sm:p-6 shadow-2xl gold-border-glow space-y-4"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={language === 'es' ? 'Cerrar selección de signo' : 'Fechar seleção de signo'}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#C1AFCE] hover:text-[#F7EEFB] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1.5 pt-1 pr-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E1C38B]/15 text-[#E1C38B] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'es' ? '12 Signos del Zodíaco' : '12 Signos do Zodíaco'}</span>
          </div>
          <h2 id="zodiac-modal-title" className="font-serif text-2xl font-bold text-gold-gradient">
            {modalTitle}
          </h2>
          <p className="text-xs text-[#C1AFCE] leading-relaxed max-w-sm mx-auto">
            {modalSub}
          </p>
        </div>

        {/* Signs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
          {ZODIAC_SIGNS_INFO.map((rawSign: ZodiacSignInfo) => {
            const sign = translateSign(rawSign);
            const isSelected = currentSignId === sign.id;
            const elementClass = getElementColor(sign.element);
            const cleanPeriod = sign.period
              .replace(/\s*de\s*/g, ' ')
              .replace(/\.\s*–\s*/g, ' — ')
              .replace(/\.\s*-\s*/g, ' — ')
              .replace(/\./g, '')
              .trim();

            return (
              <button
                key={sign.id}
                onClick={() => {
                  onSelectSign(sign.id);
                  onClose();
                }}
                className={`relative flex flex-col items-center justify-between p-3.5 rounded-2xl border transition-all duration-200 text-center cursor-pointer min-h-[125px] ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#E1C38B]/25 to-[#2A1B36] border-[#E1C38B] shadow-[0_0_15px_rgba(225,195,139,0.35)] scale-[1.02]'
                    : 'bg-[#1B1026]/70 border-[#E1C38B]/20 hover:border-[#E1C38B]/60 hover:bg-[#2A1B36]/80'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#E1C38B] text-[#1B1026] flex items-center justify-center shadow">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                )}

                <div className="w-10 h-10 rounded-full bg-[#1B1026] border border-[#E1C38B]/35 flex items-center justify-center text-[#E1C38B] my-1 shadow-sm">
                  <ZodiacGlyph signId={sign.id} className="w-5 h-5 text-[#E1C38B]" />
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-serif text-sm font-bold text-[#F7EEFB] leading-tight">
                    {sign.name}
                  </h3>
                  <span className="text-[10px] text-[#C1AFCE] block font-sans">
                    {cleanPeriod}
                  </span>
                </div>

                <span className={`text-[9px] px-2 py-0.5 rounded-full border font-medium mt-1 ${elementClass}`}>
                  {sign.element}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-[11px] text-[#C1AFCE]/70 pt-1">
          {language === 'es' 
            ? 'Podrás cambiar tu signo en cualquier momento en tu Perfil.' 
            : 'Você poderá alterar seu signo a qualquer momento no seu Perfil ou nesta tela.'}
        </p>
      </div>
    </div>
  );
};
