import React, { useState } from 'react';
import { 
  User, 
  Globe, 
  Bell, 
  Smartphone, 
  ShieldCheck, 
  Save, 
  Check, 
  ExternalLink,
  Moon,
  Calendar,
  LogOut,
  Mail,
  Languages
} from 'lucide-react';
import type { UserProfile, ZodiacSignId } from '../types/tarot';
import { saveLocalProfile } from '../services/storage';
import { getZodiacSignInfo, getZodiacSignFromBirthDate } from '../data/zodiac/signsInfo';
import { ZodiacSelectorModal } from './ZodiacSelectorModal';
import { ZodiacGlyph } from './ZodiacGlyph';
import { signOut } from '../services/auth';
import { 
  requestNotificationPermission, 
  isNotificationSupported 
} from '../services/notifications';
import { useLanguage } from '../i18n';
import { LanguageSwitch } from './LanguageSwitch';

interface ProfileScreenProps {
  profile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
  onOpenIOSGuide: () => void;
  deferredPrompt: any;
  onInstallApp: () => void;
  onSignOut?: () => void;
  isAdmin?: boolean;
  onNavigateToAdmin?: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  profile,
  onUpdateProfile,
  onOpenIOSGuide,
  deferredPrompt,
  onInstallApp,
  onSignOut,
  isAdmin,
  onNavigateToAdmin,
}) => {
  const { t, language, translateSign } = useLanguage();
  const [name, setName] = useState<string>(profile.name);
  const [birthDate, setBirthDate] = useState<string>(profile.birthDate || '');
  const [timezone, setTimezone] = useState<string>(profile.timezone);
  const [reminderEnabled, setReminderEnabled] = useState<boolean>(profile.reminderEnabled);
  const [reminderTime, setReminderTime] = useState<string>(profile.reminderTime);
  const [zodiacSign, setZodiacSign] = useState<ZodiacSignId | undefined>(profile.zodiacSign);
  const [zodiacReminderEnabled, setZodiacReminderEnabled] = useState<boolean>(profile.zodiacReminderEnabled || false);
  const [zodiacReminderTime, setZodiacReminderTime] = useState<string>(profile.zodiacReminderTime || '08:30');
  const [isSignModalOpen, setIsSignModalOpen] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  // Common timezones in Latin America & abroad
  const timezones = [
    { value: 'America/Sao_Paulo', label: 'Brasília / São Paulo (GMT-3)' },
    { value: 'America/Manaus', label: 'Manaus (GMT-4)' },
    { value: 'America/Belem', label: 'Belém (GMT-3)' },
    { value: 'America/Fortaleza', label: 'Fortaleza (GMT-3)' },
    { value: 'America/Buenos_Aires', label: 'Buenos Aires (GMT-3)' },
    { value: 'America/Santiago', label: 'Santiago (GMT-4)' },
    { value: 'America/Bogota', label: 'Bogotá (GMT-5)' },
    { value: 'America/Mexico_City', label: 'Ciudad de México (GMT-6)' },
    { value: 'Europe/Madrid', label: 'Madrid / España (GMT+1)' },
    { value: 'Europe/Lisbon', label: 'Lisboa (GMT+0/+1)' },
    { value: 'America/New_York', label: 'New York (GMT-5)' },
  ];

  const handleBirthDateChange = (val: string) => {
    setBirthDate(val);
    if (val && val.includes('-')) {
      const parts = val.split('-').map(Number);
      if (parts.length === 3) {
        const [, m, d] = parts;
        if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
          const detected = getZodiacSignFromBirthDate(d, m);
          setZodiacSign(detected.id);
        }
      }
    }
  };

  const handleSaveProfile = () => {
    const updated: UserProfile = {
      ...profile,
      name: name.trim() || 'Viajante do Amor',
      birthDate: birthDate || undefined,
      timezone,
      reminderEnabled,
      reminderTime,
      zodiacSign,
      zodiacReminderEnabled,
      zodiacReminderTime,
      language,
    };
    saveLocalProfile(updated);
    onUpdateProfile(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleToggleReminder = async (checked: boolean) => {
    setReminderEnabled(checked);
    if (checked && isNotificationSupported()) {
      await requestNotificationPermission(profile.id);
    }
  };

  const handleToggleZodiacReminder = async (checked: boolean) => {
    setZodiacReminderEnabled(checked);
    if (checked && isNotificationSupported()) {
      await requestNotificationPermission(profile.id);
    }
  };

  const handleLogout = async () => {
    if (onSignOut) {
      onSignOut();
    } else {
      await signOut();
      window.location.reload();
    }
  };

  const currentSignInfo = zodiacSign ? translateSign(getZodiacSignInfo(zodiacSign)) : null;

  return (
    <div className="space-y-6 pb-28 pt-2 max-w-lg mx-auto px-4 animate-fadeIn">
      {/* Header */}
      <header className="text-center pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A1B36] border border-[#E1C38B]/30 text-xs text-[#E1C38B] font-medium tracking-wide mb-2 shadow-sm">
          <User className="w-3.5 h-3.5" />
          <span>{t.profile.personalInfo}</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient mb-1">
          {t.profile.title}
        </h1>
        <p className="text-xs text-[#C1AFCE] max-w-xs mx-auto">
          {t.profile.languageDesc}
        </p>
      </header>

      {/* Language Selector Card */}
      <section 
        aria-label={t.profile.languageTitle}
        className="p-5 rounded-2xl bg-[#2A1B36] border border-[#E1C38B]/35 space-y-3 shadow-md gold-border-glow"
      >
        <div className="flex items-center gap-2">
          <Languages className="w-4 h-4 text-[#E1C38B]" />
          <div>
            <h2 className="font-serif text-sm font-bold text-[#F7EEFB]">
              {t.profile.languageTitle}
            </h2>
            <p className="text-[11px] text-[#C1AFCE]">
              {t.profile.languageDesc}
            </p>
          </div>
        </div>

        <LanguageSwitch variant="buttons" className="pt-1" />
      </section>

      {/* User Preferences Card */}
      <section 
        aria-label={t.profile.personalInfo}
        className="p-5 rounded-2xl bg-[#2A1B36] border border-[#E1C38B]/25 space-y-4 shadow-md"
      >
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-[#E1C38B] uppercase tracking-wider block">
            {t.profile.nameLabel}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Como prefere ser chamada(o)?"
            className="w-full bg-[#1B1026] border border-[#E1C38B]/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#F7EEFB] focus:outline-none focus:border-[#E1C38B]"
          />
        </div>

        {/* Birth Date field */}
        <div className="pt-2 border-t border-white/5 space-y-1.5">
          <label className="text-xs font-semibold text-[#E1C38B] uppercase tracking-wider flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {t.profile.birthDateLabel}
            </span>
            <span className="text-[10px] text-[#C1AFCE] font-normal">{t.profile.detectSignPrompt}</span>
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => handleBirthDateChange(e.target.value)}
            className="w-full bg-[#1B1026] border border-[#E1C38B]/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#F7EEFB] focus:outline-none focus:border-[#E1C38B] cursor-pointer"
          />
        </div>

        {/* Zodiac Sign Configuration */}
        <div className="pt-2 border-t border-white/5 space-y-2">
          <label className="text-xs font-semibold text-[#E1C38B] uppercase tracking-wider block">
            {t.profile.zodiacSignLabel}
          </label>
          
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#1B1026] border border-[#E1C38B]/30 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2A1B36] border border-[#E1C38B]/30 flex items-center justify-center text-[#E1C38B]">
                {profile.zodiacSign ? (
                  <ZodiacGlyph signId={profile.zodiacSign} className="w-5 h-5 text-[#E1C38B]" />
                ) : (
                  <span className="text-lg">✨</span>
                )}
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-[#F7EEFB]">
                  {currentSignInfo ? currentSignInfo.name : 'Nenhum signo definido'}
                </p>
                <p className="text-[11px] text-[#C1AFCE]">
                  {currentSignInfo ? `${currentSignInfo.period}` : 'Toque para escolher seu signo'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsSignModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#E1C38B] font-medium border border-[#E1C38B]/30 transition-colors cursor-pointer"
            >
              {currentSignInfo ? (language === 'es' ? 'Cambiar' : 'Alterar') : (language === 'es' ? 'Elegir' : 'Escolher')}
            </button>
          </div>
        </div>

        {/* Timezone */}
        <div className="space-y-1.5 pt-2 border-t border-white/5">
          <label className="text-xs font-semibold text-[#E1C38B] uppercase tracking-wider block">
            {t.profile.timezoneLabel}
          </label>
          <div className="relative">
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full bg-[#1B1026] border border-[#E1C38B]/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#F7EEFB] focus:outline-none focus:border-[#E1C38B] appearance-none"
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
            <Globe className="w-4 h-4 text-[#C1AFCE] absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Tarot Daily Reminder Toggle */}
        <div className="pt-2 border-t border-white/5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-semibold text-[#F7EEFB] flex items-center gap-1.5">
                <Bell className="w-3.5 h-3.5 text-[#E1C38B]" /> {t.profile.tarotReminder}
              </span>
              <p className="text-[11px] text-[#C1AFCE]">
                {t.profile.remindersDesc}
              </p>
            </div>
            <input
              type="checkbox"
              checked={reminderEnabled}
              onChange={(e) => handleToggleReminder(e.target.checked)}
              className="w-4 h-4 accent-[#E1C38B] cursor-pointer"
            />
          </div>

          {reminderEnabled && (
            <div className="flex items-center gap-3 pt-1">
              <label className="text-xs text-[#C1AFCE]">{t.profile.timeLabel}:</label>
              <input
                type="time"
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
                className="bg-[#1B1026] border border-[#E1C38B]/30 rounded-xl px-3 py-1.5 text-xs text-[#F7EEFB] focus:outline-none focus:border-[#E1C38B]"
              />
            </div>
          )}
        </div>

        {/* Zodiac Daily Reminder Toggle */}
        <div className="pt-2 border-t border-white/5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-semibold text-[#F7EEFB] flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-[#E1C38B]" /> {t.profile.zodiacReminder}
              </span>
              <p className="text-[11px] text-[#C1AFCE]">
                {t.profile.remindersDesc}
              </p>
            </div>
            <input
              type="checkbox"
              checked={zodiacReminderEnabled}
              onChange={(e) => handleToggleZodiacReminder(e.target.checked)}
              className="w-4 h-4 accent-[#E1C38B] cursor-pointer"
            />
          </div>

          {zodiacReminderEnabled && (
            <div className="flex items-center gap-3 pt-1">
              <label className="text-xs text-[#C1AFCE]">{t.profile.timeLabel}:</label>
              <input
                type="time"
                value={zodiacReminderTime}
                onChange={(e) => setZodiacReminderTime(e.target.value)}
                className="bg-[#1B1026] border border-[#E1C38B]/30 rounded-xl px-3 py-1.5 text-xs text-[#F7EEFB] focus:outline-none focus:border-[#E1C38B]"
              />
            </div>
          )}
        </div>

        <button
          onClick={handleSaveProfile}
          className="w-full py-2.5 rounded-xl bg-[#E1C38B] text-[#1B1026] font-semibold text-xs sm:text-sm hover:bg-[#F4DFB8] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer mt-2"
        >
          {savedSuccess ? (
            <>
              <Check className="w-4 h-4 stroke-[3]" />
              <span>{t.profile.savedSuccess}</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>{t.profile.saveBtn}</span>
            </>
          )}
        </button>
      </section>

      {/* Admin Panel Card (Exclusive for idealconsumo) */}
      {isAdmin && (
        <section 
          aria-label={t.profile.adminBadge}
          className="p-5 rounded-2xl bg-gradient-to-r from-[#2A1B36] via-[#351945] to-[#1E1129] border border-amber-500/40 space-y-3 shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-sm font-bold text-gold-gradient">
                  {t.profile.adminBadge}
                </h2>
                <p className="text-[11px] text-[#C1AFCE]">
                  {t.profile.adminDesc}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onNavigateToAdmin}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] font-bold text-xs hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{t.profile.openAdminBtn}</span>
          </button>
        </section>
      )}

      {/* PWA & Installation Card */}
      <section 
        aria-label="Instalação do Aplicativo"
        className="p-5 rounded-2xl bg-[#2A1B36] border border-[#E1C38B]/25 space-y-3 shadow-md"
      >
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-[#E1C38B]" />
          <h2 className="font-serif text-sm font-bold text-[#F7EEFB]">
            {t.installGuide.title}
          </h2>
        </div>

        <p className="text-xs text-[#C1AFCE] leading-relaxed">
          {t.installGuide.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-2 pt-1">
          {deferredPrompt ? (
            <button
              onClick={onInstallApp}
              className="flex-1 py-2.5 px-4 rounded-xl bg-[#E1C38B] text-[#1B1026] font-semibold text-xs sm:text-sm hover:bg-[#F4DFB8] transition-colors flex items-center justify-center gap-1.5"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>{t.installGuide.btnDirectInstall}</span>
            </button>
          ) : null}

          <button
            onClick={onOpenIOSGuide}
            className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs sm:text-sm text-[#F7EEFB] font-medium border border-white/10 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>{language === 'es' ? 'Cómo instalar en iPhone' : 'Como instalar no iPhone'}</span>
            <ExternalLink className="w-3 h-3 text-[#E1C38B]" />
          </button>
        </div>
      </section>

      {/* Connected Account & Logout Card */}
      <section 
        aria-label="Sessão e Conta"
        className="p-5 rounded-2xl bg-[#2A1B36] border border-[#E1C38B]/25 space-y-3 shadow-md"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <h2 className="font-serif text-sm font-bold text-[#F7EEFB] flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#E1C38B]" /> {language === 'es' ? 'Cuenta Conectada' : 'Conta Conectada'}
            </h2>
            <p className="text-xs text-[#C1AFCE] break-all">
              {profile.email || (language === 'es' ? 'Usuario autenticado' : 'Usuário autenticado')}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="py-2 px-3.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{t.profile.logoutBtn}</span>
          </button>
        </div>
      </section>

      {/* Privacy Notice */}
      <footer className="p-4 rounded-2xl bg-[#1B1026] border border-white/5 text-center space-y-1">
        <div className="flex items-center justify-center gap-1.5 text-xs text-[#C1AFCE]">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{language === 'es' ? 'Privacidad Total Garantizada' : 'Privacidade Total Garantida'}</span>
        </div>
        <p className="text-[11px] text-[#C1AFCE]/70">
          {language === 'es' 
            ? 'Tus notas personales y tiradas nunca se comparten con terceros.' 
            : 'Suas anotações íntimas nunca são enviadas para analytics ou terceiros.'}
        </p>
      </footer>

      {/* Sign Selector Modal */}
      <ZodiacSelectorModal
        currentSignId={zodiacSign}
        isOpen={isSignModalOpen}
        onClose={() => setIsSignModalOpen(false)}
        onSelectSign={(newSign) => {
          setZodiacSign(newSign);
          const updated = { ...profile, zodiacSign: newSign };
          saveLocalProfile(updated);
          onUpdateProfile(updated);
        }}
      />
    </div>
  );
};
