import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { signIn, signUp, type AuthUser } from '../services/auth';
import { useLanguage } from '../i18n';
import { LanguageSwitch } from './LanguageSwitch';

interface AuthScreenProps {
  onAuthSuccess: (user: AuthUser, isNewUser?: boolean) => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthSuccess }) => {
  const { t, language } = useLanguage();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      if (mode === 'login') {
        const user = await signIn(email, password);
        onAuthSuccess(user, false);
      } else {
        const user = await signUp(email, password, name);
        onAuthSuccess(user, true);
      }
    } catch (err: any) {
      setErrorMessage(err.message || (language === 'es' ? 'Ocurrió un error al procesar. Intenta nuevamente.' : 'Ocorreu um erro ao processar. Tente novamente.'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-[#12081B] via-[#1B0F26] to-[#0D0514] text-[#F7EEFB] safe-pt safe-pb">
      <div className="w-full max-w-md mx-auto space-y-6 animate-fadeIn relative">
        
        {/* Top Language Switcher */}
        <div className="flex justify-end">
          <LanguageSwitch variant="compact" />
        </div>

        {/* App Branding Medallion */}
        <div className="text-center space-y-3">
          <div className="inline-flex p-3.5 rounded-3xl bg-gradient-to-br from-[#2A1B36] to-[#1E1129] border border-[#E1C38B]/40 shadow-xl shadow-[#E1C38B]/10 mx-auto">
            <Sparkles className="w-8 h-8 text-[#E1C38B]" />
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#E1C38B] font-semibold">
              {t.home.oracleTag}
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient mt-0.5">
              {t.home.appName}
            </h1>
            <p className="text-xs sm:text-sm text-[#C1AFCE] mt-1 max-w-xs mx-auto">
              {t.auth.tagline}
            </p>
          </div>
        </div>

        {/* Auth Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#2A1B36]/90 to-[#1B1026]/90 border border-[#E1C38B]/30 p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
          
          {/* Tabs: Entrar vs Criar Conta */}
          <div className="grid grid-cols-2 p-1 rounded-2xl bg-[#140B1E] border border-[#E1C38B]/20">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMessage(null);
              }}
              className={`py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] shadow-md'
                  : 'text-[#C1AFCE] hover:text-[#F7EEFB]'
              }`}
            >
              {t.auth.loginTab}
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setErrorMessage(null);
              }}
              className={`py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                mode === 'signup'
                  ? 'bg-gradient-to-r from-[#E1C38B] to-[#F4DFB8] text-[#1B1026] shadow-md'
                  : 'text-[#C1AFCE] hover:text-[#F7EEFB]'
              }`}
            >
              {t.auth.signupTab}
            </button>
          </div>

          {/* Error Feedback */}
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-500/40 text-red-200 text-xs sm:text-sm leading-relaxed animate-shake">
              {errorMessage}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name field (Sign Up only) */}
            {mode === 'signup' && (
              <div className="space-y-1.5 animate-fadeIn">
                <label className="text-xs font-semibold text-[#E1C38B] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> {t.auth.namePlaceholder}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.auth.nameLabel}
                    className="w-full pl-3.5 pr-4 py-3 rounded-xl bg-[#140B1E] border border-[#E1C38B]/25 text-[#F7EEFB] placeholder-[#C1AFCE]/40 text-sm focus:border-[#E1C38B] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Email field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#E1C38B] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> {t.auth.emailLabel}
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.auth.emailPlaceholder}
                  autoComplete="email"
                  className="w-full pl-3.5 pr-4 py-3 rounded-xl bg-[#140B1E] border border-[#E1C38B]/25 text-[#F7EEFB] placeholder-[#C1AFCE]/40 text-sm focus:border-[#E1C38B] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#E1C38B] flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> {t.auth.passwordLabel}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'signup' ? t.auth.passwordPlaceholder : '••••••'}
                  autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                  className="w-full pl-3.5 pr-11 py-3 rounded-xl bg-[#140B1E] border border-[#E1C38B]/25 text-[#F7EEFB] placeholder-[#C1AFCE]/40 text-sm focus:border-[#E1C38B] focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#C1AFCE] hover:text-[#E1C38B] transition-colors cursor-pointer"
                  title={showPassword ? 'Ocultar' : 'Ver'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#E1C38B] via-[#E9D1A2] to-[#F4DFB8] text-[#1B1026] font-bold text-sm sm:text-base hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#E1C38B]/20 cursor-pointer disabled:opacity-60"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-[#1B1026] border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>{mode === 'login' ? t.auth.submitLogin : t.auth.submitSignup}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Privacy Note */}
          <div className="pt-2 border-t border-[#E1C38B]/15 flex items-center justify-center gap-2 text-center text-[11px] text-[#C1AFCE]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E1C38B] shrink-0" />
            <span>{language === 'es' ? 'Tus tiradas y notas son personales y confidenciales.' : 'Suas tiragens e anotações são pessoais e confidenciais.'}</span>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center text-[11px] text-[#C1AFCE]/70">
          {t.home.appName} • {t.home.oracleTag}
        </p>

      </div>
    </div>
  );
};
