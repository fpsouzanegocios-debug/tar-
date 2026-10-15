import { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';
import type { ActiveTab, ReadingRecord, UserProfile, ThemeId, SelectedCard } from './types/tarot';
import { 
  loadLocalProfile, 
  saveLocalProfile,
  loadAllReadings, 
  getDailyReadingStatus, 
  getTodayDateString,
  resetTodayReading
} from './services/storage';
import { HomeScreen } from './components/HomeScreen';
import { ReadingFlow } from './components/ReadingFlow';
import { ReadingRevelation } from './components/ReadingRevelation';
import { HistoryScreen } from './components/HistoryScreen';
import { JournalScreen } from './components/JournalScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { ZodiacScreen } from './components/ZodiacScreen';
import { Navigation } from './components/Navigation';
import { IOSInstallModal } from './components/IOSInstallModal';
import { AuthScreen } from './components/AuthScreen';
import { BirthDateOnboardingScreen } from './components/BirthDateOnboardingScreen';
import { AdminPanelScreen } from './components/AdminPanelScreen';
import { InstallAppGuideModal } from './components/InstallAppGuideModal';
import { NotificationPermissionModal } from './components/NotificationPermissionModal';
import { getCurrentUser, setCurrentSession, signOut as authSignOut, isUserAdmin, updateLeadInfo, type AuthUser } from './services/auth';
import { getSupabaseClient } from './services/supabase';
import { 
  checkScheduledReminders, 
  checkPendingBroadcasts, 
  getNotificationPermission 
} from './services/notifications';
import { useLanguage } from './i18n';

export function App() {
  const { t, language, setLanguage } = useLanguage();
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => getCurrentUser());
  const [profile, setProfile] = useState<UserProfile>(() => {
    const user = getCurrentUser();
    return loadLocalProfile(user?.id);
  });
  const [readings, setReadings] = useState<ReadingRecord[]>(loadAllReadings());
  const [activeTab, setActiveTab] = useState<ActiveTab>('hoje');
  const lastReading = readings.length > 0 ? readings[0] : undefined;

  // Daily status state
  const [dailyStatusInfo, setDailyStatusInfo] = useState(
    getDailyReadingStatus(profile.timezone)
  );

  // Flow & View States
  const [isFlowActive, setIsFlowActive] = useState<boolean>(false);
  const [viewingReading, setViewingReading] = useState<ReadingRecord | null>(null);
  const [newReadingData, setNewReadingData] = useState<{
    themeId: ThemeId;
    question: string;
    isCustomQuestion: boolean;
    cards: [SelectedCard, SelectedCard, SelectedCard];
    date: string;
  } | null>(null);

  // PWA & Connectivity
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showIOSModal, setShowIOSModal] = useState<boolean>(false);
  const [showInstallGuide, setShowInstallGuide] = useState<boolean>(false);
  const [showNotificationModal, setShowNotificationModal] = useState<boolean>(false);
  const [isOffline, setIsOffline] = useState<boolean>(!navigator.onLine);

  // Refresh daily status on profile or readings change
  useEffect(() => {
    setDailyStatusInfo(getDailyReadingStatus(profile.timezone));
  }, [profile.timezone, readings]);

  // Sync Supabase Auth session on launch and listen to login/logout events across tabs/devices
  useEffect(() => {
    const client = getSupabaseClient();
    if (!client) return;

    client.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const authUser: AuthUser = {
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.name || session.user.email?.split('@')[0],
        };
        setCurrentUser((prev) => prev?.id === authUser.id ? prev : authUser);
        setCurrentSession(authUser);
      }
    });

    const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const authUser: AuthUser = {
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.name || session.user.email?.split('@')[0],
        };
        setCurrentUser(authUser);
        setCurrentSession(authUser);
      } else if (_event === 'SIGNED_OUT') {
        setCurrentUser(null);
        setCurrentSession(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Online / Offline listeners
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // PWA beforeinstallprompt listener
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // Listen for native app installed event -> trigger notification modal
  useEffect(() => {
    const handleInstalled = () => {
      setShowInstallGuide(false);
      setShowNotificationModal(true);
    };
    window.addEventListener('appinstalled', handleInstalled);
    return () => window.removeEventListener('appinstalled', handleInstalled);
  }, []);

  // Check if we should guide user to install app and enable notifications
  useEffect(() => {
    if (currentUser && profile.isOnboarded) {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
      const installShown = localStorage.getItem(`tarot_install_guide_shown_${currentUser.id}`);

      if (!installShown && !isStandalone) {
        setShowInstallGuide(true);
      } else {
        const notifShown = localStorage.getItem(`tarot_notif_modal_shown_${currentUser.id}`);
        if (!notifShown && getNotificationPermission() !== 'granted') {
          setShowNotificationModal(true);
        }
      }
    }
  }, [currentUser, profile.isOnboarded]);

  // Periodic scheduled reminders & admin broadcasts engine (evaluates every 30 seconds)
  useEffect(() => {
    if (!currentUser) return;
    const runCheck = () => {
      checkScheduledReminders(profile);
      checkPendingBroadcasts(profile.zodiacSign);
    };
    runCheck();
    const interval = setInterval(runCheck, 30000);
    return () => clearInterval(interval);
  }, [currentUser, profile]);

  const handleInstallApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choice: any) => {
        if (choice?.outcome === 'accepted') {
          setShowInstallGuide(false);
          setShowNotificationModal(true);
        }
        setDeferredPrompt(null);
      });
    }
  };

  const reloadData = () => {
    const freshReadings = loadAllReadings();
    setReadings(freshReadings);
    setDailyStatusInfo(getDailyReadingStatus(profile.timezone));
  };

  const isAdmin = isUserAdmin(currentUser, profile.name);

  const handleUpdateProfile = (updated: UserProfile) => {
    if (updated.language && updated.language !== language) {
      setLanguage(updated.language);
    }
    saveLocalProfile(updated, currentUser?.id);
    if (currentUser?.id) {
      updateLeadInfo(currentUser.id, {
        name: updated.name,
        birthDate: updated.birthDate,
        zodiacSign: updated.zodiacSign,
      });
    }
    setProfile(updated);
    reloadData();
  };

  const handleAuthSuccess = (user: AuthUser, isNewUser?: boolean) => {
    setCurrentUser(user);
    setActiveTab('hoje');

    if (isNewUser) {
      // New user registration MUST complete the birth date onboarding step
      const freshProfile: UserProfile = {
        name: user.name || 'Viajante do Amor',
        email: user.email,
        timezone: 'America/Sao_Paulo',
        reminderEnabled: false,
        reminderTime: '09:00',
        zodiacReminderEnabled: false,
        zodiacReminderTime: '08:30',
        isOnboarded: false,
        birthDate: undefined,
        zodiacSign: undefined,
      };
      saveLocalProfile(freshProfile, user.id);
      setProfile(freshProfile);
    } else {
      const existing = loadLocalProfile(user.id);
      const updated: UserProfile = {
        ...existing,
        email: user.email,
        name: existing.name && existing.name !== 'Viajante do Amor' ? existing.name : (user.name || existing.name),
        isOnboarded: Boolean(existing.isOnboarded && existing.birthDate),
      };
      saveLocalProfile(updated, user.id);
      setProfile(updated);
    }
    reloadData();
  };

  const handleOnboardingComplete = (birthDate: string, zodiacSignId: any) => {
    const todayStr = getTodayDateString(profile.timezone);
    const updated: UserProfile = {
      ...profile,
      birthDate,
      zodiacSign: zodiacSignId,
      isOnboarded: true,
      lastZodiacRevealDate: todayStr,
    };
    saveLocalProfile(updated, currentUser?.id);
    if (currentUser?.id) {
      updateLeadInfo(currentUser.id, {
        name: updated.name,
        birthDate: updated.birthDate,
        zodiacSign: zodiacSignId,
      });
    }
    setProfile(updated);
    setActiveTab('hoje');
  };

  const handleSignOut = async () => {
    await authSignOut();
    setCurrentUser(null);
    setIsFlowActive(false);
    setViewingReading(null);
    setNewReadingData(null);
  };

  // User starts or resumes reading flow
  const handleStartReading = () => {
    setViewingReading(null);
    setNewReadingData(null);
    setIsFlowActive(true);
  };

  // User completes card selection in flow
  const handleCompleteSelection = (
    themeId: ThemeId,
    question: string,
    isCustomQuestion: boolean,
    selectedCards: [SelectedCard, SelectedCard, SelectedCard]
  ) => {
    const todayStr = getTodayDateString(profile.timezone);
    setNewReadingData({
      themeId,
      question,
      isCustomQuestion,
      cards: selectedCards,
      date: todayStr,
    });
    setIsFlowActive(false);
    setViewingReading(null);
  };

  // User opens an existing reading to read
  const handleOpenReading = (reading: ReadingRecord) => {
    setIsFlowActive(false);
    setNewReadingData(null);
    setViewingReading(reading);
  };

  // Navigation tab switch
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    // If switching tabs while viewing, exit view mode
    if (viewingReading || newReadingData || isFlowActive) {
      setViewingReading(null);
      setNewReadingData(null);
      setIsFlowActive(false);
    }
    reloadData();
  };

  // Find last completed reading
  const handleResetToday = () => {
    resetTodayReading(profile.timezone);
    setViewingReading(null);
    setNewReadingData(null);
    setIsFlowActive(false);
    reloadData();
  };

  // 1. If not authenticated, show AuthScreen (Email and Password)
  if (!currentUser) {
    return <AuthScreen onAuthSuccess={handleAuthSuccess} />;
  }

  // 2. If authenticated, but needs birth date onboarding
  if (!profile.isOnboarded) {
    return (
      <BirthDateOnboardingScreen
        userName={profile.name && profile.name !== 'Viajante do Amor' ? profile.name : currentUser.name}
        onComplete={handleOnboardingComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#1B1026] text-[#F7EEFB] font-sans flex flex-col selection:bg-[#E1C38B]/30 selection:text-[#FFF5E0] overflow-x-hidden w-full">
      {/* Offline Alert Bar */}
      {isOffline && (
        <div className="bg-amber-900/80 text-amber-200 text-xs py-1 px-4 text-center border-b border-amber-700/50 flex items-center justify-center gap-1.5 z-50">
          <WifiOff className="w-3.5 h-3.5 shrink-0" />
          <span className="leading-tight">{t.common.offline}</span>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 w-full max-w-xl mx-auto flex flex-col justify-start overflow-x-hidden">
        {/* If inside Revelation View */}
        {(viewingReading || newReadingData) ? (
          <ReadingRevelation
            reading={viewingReading || undefined}
            newReadingData={newReadingData || undefined}
            onBack={() => {
              setViewingReading(null);
              setNewReadingData(null);
              reloadData();
            }}
            onResetToday={handleResetToday}
          />
        ) : isFlowActive ? (
          /* If inside Active Card Picking Flow */
          <ReadingFlow
            timezone={profile.timezone}
            onCompleteSelection={handleCompleteSelection}
            onCancel={() => setIsFlowActive(false)}
          />
        ) : (
          /* Standard Tabs */
          <>
            {activeTab === 'hoje' && (
              <HomeScreen
                profile={profile}
                dailyStatus={dailyStatusInfo.status}
                todayReading={dailyStatusInfo.todayReading}
                lastReading={lastReading}
                onStartReading={handleStartReading}
                onViewReading={handleOpenReading}
                onResetToday={handleResetToday}
                onNavigateToSigno={() => handleTabChange('signo')}
              />
            )}

            {activeTab === 'signo' && (
              <ZodiacScreen
                profile={profile}
                onUpdateProfile={handleUpdateProfile}
                onNavigateToTab={handleTabChange}
              />
            )}

            {activeTab === 'tiragens' && (
              <HistoryScreen
                readings={readings}
                onSelectReading={handleOpenReading}
                onStartNewReading={() => {
                  setActiveTab('hoje');
                  handleStartReading();
                }}
              />
            )}

            {activeTab === 'diario' && (
              <JournalScreen
                readings={readings}
                onSelectReading={handleOpenReading}
                onRefreshReadings={reloadData}
              />
            )}

            {activeTab === 'perfil' && (
              <ProfileScreen
                profile={profile}
                onUpdateProfile={handleUpdateProfile}
                onOpenIOSGuide={() => setShowIOSModal(true)}
                deferredPrompt={deferredPrompt}
                onInstallApp={handleInstallApp}
                onSignOut={handleSignOut}
                isAdmin={isAdmin}
                onNavigateToAdmin={() => handleTabChange('admin')}
              />
            )}

            {activeTab === 'admin' && isAdmin && (
              <AdminPanelScreen
                currentUser={currentUser}
                onBackToHome={() => handleTabChange('hoje')}
              />
            )}
          </>
        )}
      </main>

      {/* Fixed Bottom Navigation (visible when not in card flow) */}
      {!isFlowActive && !(viewingReading || newReadingData) && (
        <Navigation activeTab={activeTab} onTabChange={handleTabChange} isAdmin={isAdmin} />
      )}

      {/* iOS Installation Modal (from Profile screen) */}
      <IOSInstallModal
        isOpen={showIOSModal}
        onClose={() => setShowIOSModal(false)}
      />

      {/* Post-login Install App Guide Modal */}
      <InstallAppGuideModal
        isOpen={showInstallGuide}
        onClose={() => {
          setShowInstallGuide(false);
          if (currentUser?.id) {
            localStorage.setItem(`tarot_install_guide_shown_${currentUser.id}`, 'true');
          }
        }}
        onProceedToNotifications={() => {
          setShowInstallGuide(false);
          if (currentUser?.id) {
            localStorage.setItem(`tarot_install_guide_shown_${currentUser.id}`, 'true');
          }
          setShowNotificationModal(true);
        }}
        deferredPrompt={deferredPrompt}
        onInstallNative={handleInstallApp}
      />

      {/* Post-install Notification Activation Modal */}
      <NotificationPermissionModal
        isOpen={showNotificationModal}
        onClose={() => {
          setShowNotificationModal(false);
          if (currentUser?.id) {
            localStorage.setItem(`tarot_notif_modal_shown_${currentUser.id}`, 'true');
          }
        }}
        onPermissionUpdated={(granted) => {
          if (granted) {
            const updated: UserProfile = {
              ...profile,
              reminderEnabled: true,
              zodiacReminderEnabled: true,
            };
            handleUpdateProfile(updated);
          }
        }}
      />
    </div>
  );
}

export default App;
