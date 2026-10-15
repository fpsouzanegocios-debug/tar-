import React from 'react';
import { Sparkles, Moon, History, BookHeart, User, ShieldCheck } from 'lucide-react';
import type { ActiveTab } from '../types/tarot';
import { useLanguage } from '../i18n';

interface NavigationProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  isAdmin?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, isAdmin }) => {
  const { t } = useLanguage();

  const tabs = [
    { id: 'hoje' as ActiveTab, label: t.nav.hoje, icon: Sparkles },
    { id: 'signo' as ActiveTab, label: t.nav.signo, icon: Moon },
    { id: 'tiragens' as ActiveTab, label: t.nav.tiragens, icon: History },
    { id: 'diario' as ActiveTab, label: t.nav.diario, icon: BookHeart },
    { id: 'perfil' as ActiveTab, label: t.nav.perfil, icon: User },
    ...(isAdmin ? [{ id: 'admin' as ActiveTab, label: t.nav.admin, icon: ShieldCheck }] : []),
  ];

  return (
    <nav 
      aria-label="Navegação principal" 
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#1B1026]/95 backdrop-blur-md border-t border-[#E1C38B]/20 safe-pb shadow-2xl"
    >
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-all duration-300 relative ${
                isActive
                  ? 'text-[#E1C38B] scale-105'
                  : 'text-[#C1AFCE]/70 hover:text-[#F7EEFB]'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'stroke-[2.3]' : 'stroke-[1.8]'}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E1C38B] shadow-[0_0_8px_#E1C38B]" />
                )}
              </div>
              <span className={`text-[11px] mt-1 font-medium tracking-wide ${isActive ? 'font-semibold' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
