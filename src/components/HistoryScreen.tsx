import React from 'react';
import { History, ArrowRight, Calendar, Heart } from 'lucide-react';
import type { ReadingRecord } from '../types/tarot';
import { useLanguage } from '../i18n';

interface HistoryScreenProps {
  readings: ReadingRecord[];
  onSelectReading: (reading: ReadingRecord) => void;
  onStartNewReading: () => void;
}

export const HistoryScreen: React.FC<HistoryScreenProps> = ({
  readings,
  onSelectReading,
  onStartNewReading,
}) => {
  const { t, language, translateCardName } = useLanguage();

  return (
    <div className="space-y-6 pb-28 pt-2 max-w-lg mx-auto px-4 animate-fadeIn">
      {/* Header */}
      <header className="text-center pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A1B36] border border-[#E1C38B]/30 text-xs text-[#E1C38B] font-medium tracking-wide mb-2 shadow-sm">
          <History className="w-3.5 h-3.5" />
          <span>{language === 'es' ? 'Tus Memorias Afectivas' : 'Suas Memórias Afetivas'}</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient mb-1">
          {t.history.title}
        </h1>
        <p className="text-xs text-[#C1AFCE] max-w-xs mx-auto">
          {t.history.subtitle}
        </p>
      </header>

      {/* List of Readings */}
      {readings.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-3xl bg-[#2A1B36]/60 border border-[#E1C38B]/20 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#1B1026] border border-[#E1C38B]/30 flex items-center justify-center text-[#E1C38B]">
            <Heart className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-[#F7EEFB] mb-1">
              {language === 'es' ? 'Aún no hay tiradas guardadas' : 'Nenhuma tiragem salva ainda'}
            </h3>
            <p className="text-xs text-[#C1AFCE] max-w-xs mx-auto leading-relaxed">
              {t.history.empty}
            </p>
          </div>
          <button
            onClick={onStartNewReading}
            className="py-3 px-6 rounded-2xl bg-[#E1C38B] text-[#1B1026] font-semibold text-xs sm:text-sm hover:bg-[#F4DFB8] transition-colors shadow-lg cursor-pointer"
          >
            {language === 'es' ? 'Hacer mi primera tirada' : 'Fazer minha primeira tiragem'}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {readings.map((reading) => (
            <article
              key={reading.id}
              onClick={() => onSelectReading(reading)}
              className="group p-4 rounded-2xl bg-[#2A1B36] border border-[#E1C38B]/20 hover:border-[#E1C38B]/60 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer space-y-3"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-[#E1C38B] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#1B1026] border border-[#E1C38B]/20">
                  {reading.themeTitle}
                </span>
                <span className="text-[#C1AFCE] flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3 h-3 text-[#E1C38B]" />
                  {reading.date}
                </span>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-serif font-semibold text-[#F7EEFB] group-hover:text-[#FFF5E0] transition-colors line-clamp-1">
                  “{reading.question}”
                </p>
              </div>

              {/* 3 Cards Mini Preview */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {reading.cards.map((sc, i) => {
                  const posTitle = sc.position === 'situacao' 
                    ? t.home.posSituacao 
                    : sc.position === 'desafio' 
                    ? t.home.posDesafio 
                    : t.home.posOrientacao;
                  return (
                    <div key={i} className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#1B1026]/80 border border-[#E1C38B]/15 overflow-hidden">
                      <img
                        src={sc.card.image}
                        alt={translateCardName(sc.card)}
                        className="w-7 h-10 object-cover rounded shrink-0 border border-[#E1C38B]/30"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.dataset.retried) {
                            target.dataset.retried = 'true';
                            target.src = `${sc.card.image}?r=${Date.now()}`;
                          }
                        }}
                      />
                      <div className="min-w-0">
                        <span className="text-[9px] text-[#E1C38B] block truncate">{posTitle}</span>
                        <span className="text-[10px] text-[#F7EEFB] font-medium block truncate">{translateCardName(sc.card)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {reading.personalNote && (
                <p className="text-[11px] text-[#C1AFCE] italic line-clamp-1 border-t border-white/5 pt-2">
                  📝 "{reading.personalNote}"
                </p>
              )}

              <div className="flex items-center justify-end text-[11px] font-medium text-[#E1C38B] group-hover:translate-x-0.5 transition-transform">
                <span>{t.history.viewReadingBtn}</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
