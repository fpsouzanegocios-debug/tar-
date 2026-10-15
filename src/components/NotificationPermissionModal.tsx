import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Bell, Sparkles, Check, Clock, Heart, Shield } from 'lucide-react';
import { requestNotificationPermission } from '../services/notifications';
import { useLanguage } from '../i18n';

interface NotificationPermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPermissionUpdated?: (granted: boolean) => void;
}

export const NotificationPermissionModal: React.FC<NotificationPermissionModalProps> = ({
  isOpen,
  onClose,
  onPermissionUpdated,
}) => {
  const { t, language } = useLanguage();
  const [isRequesting, setIsRequesting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleEnable = async () => {
    setIsRequesting(true);
    const granted = await requestNotificationPermission();
    setIsRequesting(false);

    if (granted) {
      setSuccess(true);
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#E1C38B', '#F4DFB8', '#9B51E0'],
        });
      } catch {
        // safe fallback
      }

      setTimeout(() => {
        if (onPermissionUpdated) onPermissionUpdated(true);
        onClose();
      }, 1400);
    } else {
      if (onPermissionUpdated) onPermissionUpdated(false);
      onClose();
    }
  };

  const handleSkip = () => {
    if (onPermissionUpdated) onPermissionUpdated(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#2A1B36] to-[#170C22] border border-[#E1C38B]/40 p-6 sm:p-7 shadow-2xl space-y-5 text-[#F7EEFB] text-center">
        
        {/* Medallion */}
        <div className="w-16 h-16 mx-auto rounded-3xl bg-[#140B1E] border border-[#E1C38B]/50 flex items-center justify-center text-[#E1C38B] shadow-lg shadow-[#E1C38B]/20 relative">
          <Bell className="w-8 h-8 text-[#E1C38B] animate-bounce" />
          <Sparkles className="w-4 h-4 text-[#E1C38B] absolute -top-1 -right-1" />
        </div>

        {/* Title and Subtitle */}
        <div className="space-y-1.5">
          <span className="text-[11px] uppercase tracking-widest text-[#E1C38B] font-semibold block">
            {language === 'es' ? 'Recordatorios Cósmicos' : 'Lembretes Cósmicos'}
          </span>
          <h2 className="font-serif text-2xl font-bold text-gold-gradient">
            {t.notificationModal.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#C1AFCE] leading-relaxed max-w-sm mx-auto">
            {t.notificationModal.subtitle}
          </p>
        </div>

        {/* Value Points */}
        <div className="p-4 rounded-2xl bg-[#140B1E]/80 border border-[#E1C38B]/20 text-left space-y-2.5 text-xs text-[#F7EEFB]">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#E1C38B] shrink-0" />
            <span>{t.notificationModal.benefit1}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Heart className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{t.notificationModal.benefit2}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.notificationModal.benefit3}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-1">
          {success ? (
            <div className="py-3 px-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-bold text-sm flex items-center justify-center gap-2 animate-fadeIn">
              <Check className="w-5 h-5" />
              <span>{language === 'es' ? '¡Notificaciones activadas con éxito!' : 'Notificações ativadas com sucesso!'}</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleEnable}
              disabled={isRequesting}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#E1C38B] via-[#E9D1A2] to-[#F4DFB8] text-[#1B1026] font-bold text-sm sm:text-base hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#E1C38B]/20 cursor-pointer disabled:opacity-60"
            >
              {isRequesting ? (
                <div className="w-5 h-5 border-2 border-[#1B1026] border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Bell className="w-4 h-4" />
                  <span>{t.notificationModal.btnAllow}</span>
                </>
              )}
            </button>
          )}

          {!success && (
            <button
              type="button"
              onClick={handleSkip}
              className="w-full py-2.5 text-xs text-[#C1AFCE] hover:text-[#F7EEFB] transition-colors cursor-pointer"
            >
              {t.notificationModal.btnLater}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
