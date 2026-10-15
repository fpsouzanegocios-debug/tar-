import React from 'react';
import { Compass, AlertCircle, Sparkles, Heart } from 'lucide-react';

interface ReadingSynthesisViewerProps {
  synthesis: string;
}

/**
 * Remove completely any markdown artifacts:
 * - Hashtags (#, ##, ###)
 * - Asterisks (*, **, ***)
 * - Blockquotes (>)
 * - Awkward quote/italic combinations (*“... ”*)
 */
export function cleanSynthesisMarkdown(raw: string): string {
  if (!raw) return '';
  return raw
    .replace(/^#{1,6}\s*/gm, '') // remove headings (#, ##, ###)
    .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1') // remove *italic* and **bold**
    .replace(/\*/g, '') // remove any stray asterisks
    .replace(/^>\s*/gm, '') // remove blockquotes (>)
    .replace(/[“”]/g, '"') // normalize curly quotes
    .trim();
}

interface ParsedSection {
  type: 'theme' | 'step' | 'message' | 'paragraph';
  title?: string;
  badge?: string;
  themeTitle?: string;
  question?: string;
  content: string;
}

function parseSections(cleanText: string): ParsedSection[] {
  // Normalize line endings
  const normalized = cleanText.replace(/\r\n/g, '\n').trim();
  const rawBlocks = normalized.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);

  const sections: ParsedSection[] = [];

  for (const block of rawBlocks) {
    // 1. Check if this is the Theme/Question block
    if (block.includes('Tema:') || block.includes('Síntese da Sua Tiragem')) {
      const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
      let themeTitle = '';
      let question = '';

      for (const line of lines) {
        if (line.toLowerCase().startsWith('tema:')) {
          themeTitle = line.replace(/tema:/i, '').trim();
        } else if (line.startsWith('"') || line.startsWith('Pergunta:')) {
          question = line.replace(/^pergunta:\s*/i, '').replace(/^"|"$/g, '').trim();
        }
      }

      if (themeTitle || question) {
        sections.push({
          type: 'theme',
          themeTitle,
          question,
          content: block,
        });
        continue;
      }
    }

    // 2. Check if this is Step 1, 2, or 3
    const stepMatch = block.match(/^(?:(\d)\.\s*)?([^\n:]+)(?::)?\n([\s\S]+)$/);
    if (stepMatch && (block.includes('Cenário Presente') || block.includes('Ponto de Atenção') || block.includes('Rumo Indicado') || /^\d\./.test(block))) {
      const rawTitle = stepMatch[2].trim();
      const content = stepMatch[3].trim();
      
      let badge = 'Reflexão';
      if (rawTitle.toLowerCase().includes('presente') || rawTitle.toLowerCase().includes('situação')) {
        badge = 'Situação Atual';
      } else if (rawTitle.toLowerCase().includes('atenção') || rawTitle.toLowerCase().includes('desafio')) {
        badge = 'Ponto de Cautela';
      } else if (rawTitle.toLowerCase().includes('rumo') || rawTitle.toLowerCase().includes('orientação')) {
        badge = 'Caminho Favorável';
      }

      sections.push({
        type: 'step',
        title: rawTitle.replace(/^\d\.\s*/, ''),
        badge,
        content,
      });
      continue;
    }

    // 3. Check if this is Mensagem do Coração
    if (block.toLowerCase().includes('mensagem do coração') || block.toLowerCase().includes('mensagem de acolhimento')) {
      const lines = block.split('\n');
      const firstLine = lines[0].replace(/:$/, '').trim();
      const rest = lines.slice(1).join('\n').trim();
      sections.push({
        type: 'message',
        title: firstLine || 'Mensagem do Coração',
        content: rest || block,
      });
      continue;
    }

    // 4. Fallback: standard clean paragraph
    sections.push({
      type: 'paragraph',
      content: block,
    });
  }

  return sections;
}

export const ReadingSynthesisViewer: React.FC<ReadingSynthesisViewerProps> = ({ synthesis }) => {
  const cleaned = cleanSynthesisMarkdown(synthesis);
  const sections = parseSections(cleaned);

  // If no structured sections were found, render clean formatted paragraphs
  if (sections.length === 0) {
    return (
      <div className="space-y-3 text-xs sm:text-sm text-[#F7EEFB]/90 leading-relaxed">
        {cleaned.split('\n\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph.trim()}</p>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4 pt-1">
      {sections.map((section, index) => {
        if (section.type === 'theme') {
          return (
            <div
              key={index}
              className="p-3.5 rounded-2xl bg-[#1B1026]/90 border border-[#E1C38B]/25 space-y-1.5 shadow-sm"
            >
              {section.themeTitle && (
                <div className="flex items-center gap-1.5 text-xs text-[#E1C38B]">
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#C1AFCE]">Tema:</span>
                  <span className="font-medium text-[#F7EEFB]">{section.themeTitle}</span>
                </div>
              )}
              {section.question && (
                <p className="text-xs sm:text-sm italic text-[#E1C38B]/95 font-serif leading-relaxed">
                  "{section.question}"
                </p>
              )}
            </div>
          );
        }

        if (section.type === 'step') {
          const isCaution = section.badge === 'Ponto de Cautela';
          const isGuidance = section.badge === 'Caminho Favorável';

          return (
            <article
              key={index}
              className="p-4 rounded-2xl bg-[#1B1026]/60 border border-white/10 hover:border-[#E1C38B]/30 transition-colors space-y-2.5 shadow-sm"
            >
              <header className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-serif text-sm sm:text-base font-semibold text-[#F7EEFB] flex items-center gap-2">
                  {isCaution ? (
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  ) : isGuidance ? (
                    <Sparkles className="w-4 h-4 text-[#E1C38B] shrink-0" />
                  ) : (
                    <Compass className="w-4 h-4 text-[#C1AFCE] shrink-0" />
                  )}
                  <span>{section.title}</span>
                </h3>

                {section.badge && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-medium bg-[#2A1B36] border border-[#E1C38B]/30 text-[#E1C38B]">
                    {section.badge}
                  </span>
                )}
              </header>

              <p className="text-xs sm:text-sm text-[#F7EEFB]/90 leading-relaxed font-sans">
                {section.content}
              </p>
            </article>
          );
        }

        if (section.type === 'message') {
          return (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#351E45] to-[#1E1129] border border-[#E1C38B]/40 space-y-2 shadow-md relative overflow-hidden"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E1C38B] uppercase tracking-wider">
                <Heart className="w-4 h-4 text-[#E1C38B] fill-[#E1C38B]/20" />
                <span>{section.title || 'Mensagem do Coração'}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#F7EEFB] leading-relaxed font-sans">
                {section.content}
              </p>
            </div>
          );
        }

        // Generic paragraph
        return (
          <p key={index} className="text-xs sm:text-sm text-[#F7EEFB]/90 leading-relaxed font-sans">
            {section.content}
          </p>
        );
      })}
    </div>
  );
};
