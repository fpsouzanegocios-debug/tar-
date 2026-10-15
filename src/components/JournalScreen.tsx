import React, { useState, useEffect } from 'react';
import { BookHeart, Calendar, Edit3, Save, Check, Moon, Sparkles } from 'lucide-react';
import type { ReadingRecord, ZodiacHistoryEntry } from '../types/tarot';
import { updatePersonalNote, loadZodiacHistory, updateZodiacHistoryNote } from '../services/storage';
import { ZodiacGlyph } from './ZodiacGlyph';
import { useLanguage } from '../i18n';

interface JournalScreenProps {
  readings: ReadingRecord[];
  onSelectReading: (reading: ReadingRecord) => void;
  onRefreshReadings: () => void;
}

export const JournalScreen: React.FC<JournalScreenProps> = ({
  readings,
  onSelectReading,
  onRefreshReadings,
}) => {
  const { t, language } = useLanguage();
  const [filterType, setFilterType] = useState<'todos' | 'tarot' | 'signo'>('todos');
  const [zodiacHistory, setZodiacHistory] = useState<ZodiacHistoryEntry[]>([]);
  
  // Editing state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>('');
  const [savedSuccessId, setSavedSuccessId] = useState<string | null>(null);

  const reloadZodiac = () => {
    const list = loadZodiacHistory();
    setZodiacHistory(list);
  };

  useEffect(() => {
    reloadZodiac();
  }, []);

  const handleStartEditTarot = (reading: ReadingRecord) => {
    setEditingId(reading.id);
    setEditText(reading.personalNote || '');
  };

  const handleStartEditZodiac = (entry: ZodiacHistoryEntry) => {
    setEditingId(entry.id);
    setEditText(entry.personalNote || '');
  };

  const handleSaveTarotEdit = (readingId: string) => {
    updatePersonalNote(readingId, editText);
    setEditingId(null);
    setSavedSuccessId(readingId);
    onRefreshReadings();
    setTimeout(() => setSavedSuccessId(null), 3000);
  };

  const handleSaveZodiacEdit = (entryId: string) => {
    updateZodiacHistoryNote(entryId, editText);
    setEditingId(null);
    setSavedSuccessId(entryId);
    reloadZodiac();
    setTimeout(() => setSavedSuccessId(null), 3000);
  };

  // Combine or filter items
  const tarotItems = readings.map(r => ({
    type: 'tarot' as const,
    id: r.id,
    date: r.date,
    timestamp: r.timestamp,
    reading: r,
    hasNote: Boolean(r.personalNote?.trim()),
  }));

  const zodiacItems = zodiacHistory.map(z => ({
    type: 'signo' as const,
    id: z.id,
    date: z.date,
    timestamp: z.timestamp,
    zodiac: z,
    hasNote: Boolean(z.personalNote?.trim()),
  }));

  const allItems = [...tarotItems, ...zodiacItems].sort((a, b) => b.timestamp - a.timestamp);

  const displayedItems = allItems.filter(item => {
    if (filterType === 'tarot') return item.type === 'tarot';
    if (filterType === 'signo') return item.type === 'signo';
    return true;
  });

  return (
    <div className="space-y-6 pb-28 pt-2 max-w-lg mx-auto px-4 animate-fadeIn">
      {/* Header */}
      <header className="text-center pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A1B36] border border-[#E1C38B]/30 text-xs text-[#E1C38B] font-medium tracking-wide mb-2 shadow-sm">
          <BookHeart className="w-3.5 h-3.5" />
          <span>{language === 'es' ? 'Cuaderno de Reflexiones' : 'Caderno de Reflexões'}</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient mb-1">
          {t.journal.title}
        </h1>
        <p className="text-xs text-[#C1AFCE] max-w-xs mx-auto">
          {t.journal.subtitle}
        </p>
      </header>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center p-1 rounded-xl bg-[#2A1B36] border border-[#E1C38B]/20 gap-1 text-xs">
        <button
          onClick={() => setFilterType('todos')}
          className={`flex-1 py-1.5 px-3 rounded-lg font-medium transition-all ${
            filterType === 'todos'
              ? 'bg-[#E1C38B] text-[#1B1026] shadow font-bold'
              : 'text-[#C1AFCE] hover:text-[#F7EEFB]'
          }`}
        >
          {language === 'es' ? 'Todas' : 'Todas'} ({allItems.length})
        </button>
        <button
          onClick={() => setFilterType('signo')}
          className={`flex-1 py-1.5 px-3 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
            filterType === 'signo'
              ? 'bg-[#E1C38B] text-[#1B1026] shadow font-bold'
              : 'text-[#C1AFCE] hover:text-[#F7EEFB]'
          }`}
        >
          <Moon className="w-3.5 h-3.5" />
          <span>{language === 'es' ? 'Mi Signo' : 'Meu Signo'} ({zodiacItems.length})</span>
        </button>
        <button
          onClick={() => setFilterType('tarot')}
          className={`flex-1 py-1.5 px-3 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
            filterType === 'tarot'
              ? 'bg-[#E1C38B] text-[#1B1026] shadow font-bold'
              : 'text-[#C1AFCE] hover:text-[#F7EEFB]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'es' ? 'Tarot' : 'Tarô'} ({tarotItems.length})</span>
        </button>
      </div>

      {/* Empty State */}
      {displayedItems.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-3xl bg-[#2A1B36]/60 border border-[#E1C38B]/20 space-y-3">
          <BookHeart className="w-10 h-10 text-[#E1C38B]/60 mx-auto" />
          <h3 className="font-serif text-base font-bold text-[#F7EEFB]">
            {language === 'es' ? 'Ninguna reflexión encontrada' : 'Nenhuma reflexão encontrada'}
          </h3>
          <p className="text-xs text-[#C1AFCE] max-w-xs mx-auto">
            {t.journal.empty}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {displayedItems.map((item) => {
            const isEditing = editingId === item.id;

            // RENDER ZODIAC ENTRY
            if (item.type === 'signo' && item.zodiac) {
              const z = item.zodiac;

              return (
                <article
                  key={`signo_${z.id}`}
                  className="p-5 rounded-2xl bg-gradient-to-b from-[#2A1B36] to-[#20132B] border border-[#E1C38B]/30 space-y-3 shadow-md"
                >
                  {/* Meta info */}
                  <div className="flex items-center justify-between text-xs border-b border-[#E1C38B]/15 pb-2.5">
                    <div className="flex items-center gap-2">
                      <ZodiacGlyph signId={z.signId} className="w-4 h-4 text-[#E1C38B]" />
                      <span className="text-[11px] font-semibold text-[#E1C38B]">
                        {z.signName} — {language === 'es' ? 'Reflexión del Signo' : 'Reflexão do Signo'}
                      </span>
                      <span className="text-[#C1AFCE] text-[10px]">•</span>
                      <span className="text-[#C1AFCE] text-[11px] flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#E1C38B]" />
                        {z.date}
                      </span>
                    </div>

                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#C1AFCE]">
                      {language === 'es' ? 'Mi Signo' : 'Meu Signo'}
                    </span>
                  </div>

                  {/* Message Quote */}
                  <div className="space-y-1">
                    {z.message.topic && (
                      <span className="text-[10px] text-[#E1C38B]/80 font-semibold block uppercase tracking-wider">
                        {z.message.topic}
                      </span>
                    )}
                    <p className="text-xs text-[#C1AFCE] italic line-clamp-2">
                      “{z.message.mainMessage}”
                    </p>
                    <p className="text-xs text-[#E1C38B] font-serif italic pt-0.5">
                      {language === 'es' ? 'Pregunta' : 'Pergunta'}: “{z.message.reflectionQuestion}”
                    </p>
                  </div>

                  {/* Note Content / Editing */}
                  {isEditing ? (
                    <div className="space-y-2 pt-1">
                      <textarea
                        rows={3}
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        placeholder={language === 'es' ? 'Escribe tu reflexión íntima sobre este mensaje...' : 'Escreva sua reflexão íntima sobre esta mensagem...'}
                        className="w-full bg-[#1B1026] border border-[#E1C38B]/40 rounded-xl p-3 text-xs sm:text-sm text-[#F7EEFB] focus:outline-none focus:border-[#E1C38B]"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-[#C1AFCE] hover:text-[#F7EEFB]"
                        >
                          {t.common.cancel}
                        </button>
                        <button
                          onClick={() => handleSaveZodiacEdit(z.id)}
                          className="px-3 py-1.5 rounded-lg bg-[#E1C38B] text-[#1B1026] font-semibold text-xs flex items-center gap-1 hover:bg-[#F4DFB8]"
                        >
                          <Save className="w-3 h-3" />
                          <span>{t.common.save}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 pt-1">
                      {z.personalNote ? (
                        <div className="p-3.5 rounded-xl bg-[#1B1026]/80 border border-[#E1C38B]/20 text-xs sm:text-sm text-[#F7EEFB] leading-relaxed whitespace-pre-line">
                          {z.personalNote}
                        </div>
                      ) : (
                        <p className="text-xs text-[#C1AFCE]/60 italic">
                          {t.journal.noNoteYet}
                        </p>
                      )}

                      <div className="flex justify-between items-center pt-1">
                        {savedSuccessId === z.id ? (
                          <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> {language === 'es' ? '¡Reflexión guardada con éxito!' : 'Reflexão salva com sucesso!'}
                          </span>
                        ) : (
                          <span />
                        )}

                        <button
                          onClick={() => handleStartEditZodiac(z)}
                          className="text-xs text-[#E1C38B] hover:text-[#FFF5E0] font-medium flex items-center gap-1 py-1 px-2.5 rounded-lg bg-white/5 transition-colors"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span>{z.personalNote ? (language === 'es' ? 'Editar reflexión' : 'Editar reflexão') : (language === 'es' ? '+ Escribir reflexión' : '+ Escrever reflexão')}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              );
            }

            // RENDER TAROT ENTRY
            if (item.type === 'tarot' && item.reading) {
              const reading = item.reading;
              const hasNote = Boolean(reading.personalNote?.trim());

              return (
                <article
                  key={`tarot_${reading.id}`}
                  className="p-5 rounded-2xl bg-[#2A1B36] border border-[#E1C38B]/25 space-y-3 shadow-md"
                >
                  {/* Meta info */}
                  <div className="flex items-center justify-between text-xs border-b border-[#E1C38B]/10 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-[#E1C38B]">{reading.themeTitle}</span>
                      <span className="text-[#C1AFCE] text-[10px]">•</span>
                      <span className="text-[#C1AFCE] text-[11px] flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#E1C38B]" />
                        {reading.date}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectReading(reading)}
                      className="text-[11px] text-[#E1C38B] hover:underline cursor-pointer"
                    >
                      {language === 'es' ? 'Ver cartas' : 'Ver cartas'}
                    </button>
                  </div>

                  <div>
                    <p className="text-xs italic text-[#C1AFCE] line-clamp-1">
                      “{reading.question}”
                    </p>
                  </div>

                  {/* Note Content / Editing */}
                  {isEditing ? (
                    <div className="space-y-2 pt-1">
                      <textarea
                        rows={3}
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        placeholder={language === 'es' ? 'Escribe tu reflexión sincera...' : 'Escreva sua reflexão sincera...'}
                        className="w-full bg-[#1B1026] border border-[#E1C38B]/40 rounded-xl p-3 text-xs sm:text-sm text-[#F7EEFB] focus:outline-none focus:border-[#E1C38B]"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-[#C1AFCE] hover:text-[#F7EEFB]"
                        >
                          {t.common.cancel}
                        </button>
                        <button
                          onClick={() => handleSaveTarotEdit(reading.id)}
                          className="px-3 py-1.5 rounded-lg bg-[#E1C38B] text-[#1B1026] font-semibold text-xs flex items-center gap-1 hover:bg-[#F4DFB8]"
                        >
                          <Save className="w-3 h-3" />
                          <span>{t.common.save}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 pt-1">
                      {hasNote ? (
                        <div className="p-3.5 rounded-xl bg-[#1B1026]/70 border border-[#E1C38B]/15 text-xs sm:text-sm text-[#F7EEFB] leading-relaxed whitespace-pre-line">
                          {reading.personalNote}
                        </div>
                      ) : (
                        <p className="text-xs text-[#C1AFCE]/60 italic">
                          {t.journal.noNoteYet}
                        </p>
                      )}

                      <div className="flex justify-between items-center pt-1">
                        {savedSuccessId === reading.id ? (
                          <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> {language === 'es' ? '¡Nota guardada con éxito!' : 'Anotação salva com sucesso!'}
                          </span>
                        ) : (
                          <span />
                        )}

                        <button
                          onClick={() => handleStartEditTarot(reading)}
                          className="text-xs text-[#E1C38B] hover:text-[#FFF5E0] font-medium flex items-center gap-1 py-1 px-2.5 rounded-lg bg-white/5 transition-colors"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span>{hasNote ? (language === 'es' ? 'Editar reflexión' : 'Editar reflexão') : (language === 'es' ? '+ Escribir reflexión' : '+ Escrever reflexão')}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              );
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
};
