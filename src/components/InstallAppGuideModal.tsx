import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Share, PlusSquare, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n';

interface InstallAppGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToNotifications: () => void;
  deferredPrompt?: any;
  onInstallNative?: () => void;
}

export const InstallAppGuideModal: React.FC<InstallAppGuideModalProps> = ({
  isOpen,
  onClose,
  onProceedToNotifications,
  deferredPrompt,
  onInstallNative,
}) => {
  const { t, language } = useLanguage();
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Detect if already running as installed PWA (standalone)
    const isRunningStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    setIsStandalone(Boolean(isRunningStandalone));
  }, []);

  if (!isOpen) return null;

  const handleInstallClick = () => {
    if (onInstallNative) {
      onInstallNative();
    }
  };

  const handleContinue = () => {
    onClose();
    onProceedToNotifications();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#2A1B36] to-[#170C22] border border-[#E1C38B]/40 p-6 sm:p-7 shadow-2xl space-y-5 text-[#F7EEFB]">
        
        {/* Close Button */}
        <button
          onClick={handleContinue}
          className="absolute right-4 top-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#C1AFCE] hover:text-[#F7EEFB] transition-colors cursor-pointer"
          title={t.common.continue}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 pt-1">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#140B1E] border border-[#E1C38B]/40 flex items-center justify-center text-[#E1C38B] shadow-lg shadow-[#E1C38B]/10">
            <Smartphone className="w-7 h-7 text-[#E1C38B]" />
          </div>

          <span className="text-[11px] uppercase tracking-widest text-[#E1C38B] font-semibold block">
            {language === 'es' ? 'Experiencia Completa en tu Móvil' : 'Experiência Completa no Celular'}
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient">
            {t.installGuide.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#C1AFCE] leading-relaxed">
            {t.installGuide.subtitle}
          </p>
        </div>

        {/* If already installed / Standalone */}
        {isStandalone ? (
          <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <p className="text-sm font-semibold text-emerald-200">
              {language === 'es' ? '¡App ya instalada en tu teléfono!' : 'App já instalado no seu celular!'}
            </p>
            <p className="text-xs text-[#C1AFCE]">
              {language === 'es' ? 'Ahora vamos a activar tus notificaciones diarias.' : 'Agora vamos ativar suas notificações diárias.'}
            </p>
          </div>
        ) : isIOS ? (
          /* iOS Safari Step-by-Step Instructions */
          <div className="space-y-3 p-4 rounded-2xl bg-[#140B1E]/80 border border-[#E1C38B]/25">
            <span className="text-xs font-semibold text-[#E1C38B] flex items-center gap-1.5 uppercase tracking-wider">
              {t.installGuide.iosTitle}
            </span>

            <div className="space-y-2.5 text-xs text-[#F7EEFB]/90">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#E1C38B]/20 text-[#E1C38B] font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                <p>
                  {t.installGuide.iosStep1} <Share className="w-3.5 h-3.5 inline mx-0.5 text-[#E1C38B]" />
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#E1C38B]/20 text-[#E1C38B] font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                <p>
                  {t.installGuide.iosStep2} <PlusSquare className="w-3.5 h-3.5 inline mx-0.5 text-[#E1C38B]" />
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Android / Chrome Instructions */
          <div className="space-y-3">
            {deferredPrompt && (
              <button
                type="button"
                onClick={handleInstallClick}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] font-bold text-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#E1C38B]/20 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t.installGuide.btnDirectInstall}</span>
              </button>
            )}

            <div className="p-4 rounded-2xl bg-[#140B1E]/80 border border-[#E1C38B]/25 space-y-2 text-xs text-[#C1AFCE]">
              <span className="font-semibold text-[#E1C38B] block uppercase tracking-wider text-[11px]">
                {t.installGuide.androidTitle}
              </span>
              <p>
                {t.installGuide.androidStep1} {t.installGuide.androidStep2}
              </p>
            </div>
          </div>
        )}

        {/* Action Button: Proceed to notification activation */}
        <button
          type="button"
          onClick={handleContinue}
          className="w-full py-3.5 px-5 rounded-2xl bg-[#2A1B36] hover:bg-[#351945] border border-[#E1C38B]/40 text-[#E1C38B] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow cursor-pointer"
        >
          <span>{t.installGuide.btnAlreadyInstalled}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
