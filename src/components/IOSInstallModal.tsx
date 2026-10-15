import React from 'react';
import { X, Share, PlusSquare, Smartphone } from 'lucide-react';

interface IOSInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallModal: React.FC<IOSInstallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#2A1B36] border border-[#E1C38B]/30 rounded-2xl p-6 max-w-sm w-full text-center relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#C1AFCE] hover:text-[#F7EEFB] p-1 rounded-full bg-white/5"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-[#1B1026] to-[#382449] border border-[#E1C38B]/40 flex items-center justify-center text-[#E1C38B]">
          <Smartphone className="w-7 h-7" />
        </div>

        <h3 className="font-serif text-xl font-bold text-[#F7EEFB] mb-2">
          Instalar no iPhone / iPad
        </h3>
        
        <p className="text-sm text-[#C1AFCE] mb-6">
          Siga os 3 passos rápidos para ter o app direto na tela inicial:
        </p>

        <div className="space-y-4 text-left text-sm text-[#F7EEFB]">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1B1026]/60 border border-[#E1C38B]/15">
            <span className="w-6 h-6 rounded-full bg-[#E1C38B]/20 text-[#E1C38B] font-bold text-xs flex items-center justify-center shrink-0">1</span>
            <div>
              Toque no botão <span className="inline-flex items-center text-[#E1C38B] font-medium mx-1"><Share className="w-3.5 h-3.5 inline mr-0.5" /> Compartilhar</span> na barra inferior do Safari.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1B1026]/60 border border-[#E1C38B]/15">
            <span className="w-6 h-6 rounded-full bg-[#E1C38B]/20 text-[#E1C38B] font-bold text-xs flex items-center justify-center shrink-0">2</span>
            <div>
              Role para baixo e selecione <span className="inline-flex items-center text-[#E1C38B] font-medium mx-1"><PlusSquare className="w-3.5 h-3.5 inline mr-0.5" /> Adicionar à Tela de Início</span>.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1B1026]/60 border border-[#E1C38B]/15">
            <span className="w-6 h-6 rounded-full bg-[#E1C38B]/20 text-[#E1C38B] font-bold text-xs flex items-center justify-center shrink-0">3</span>
            <div>
              Toque em <strong className="text-[#E1C38B]">Adicionar</strong> no canto superior direito. Pronto!
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-2.5 rounded-xl bg-[#E1C38B] text-[#1B1026] font-semibold text-sm hover:bg-[#F4DFB8] transition-colors"
        >
          Entendi
        </button>
      </div>
    </div>
  );
};
