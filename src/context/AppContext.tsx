import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ShiftBlock, Shift, DifficultEventStep, EndOfShiftStep, FeelingsLevel, UserProfile } from '@/data/types';
import { mockShift, mockFixedBlocks, mockSuggestedBlocks, mockNightShiftBlocks } from '@/data/mockData';

const STORAGE_KEY = 'shiftbuddy_user_profile';

interface AppState {
  // User profile & onboarding
  userProfile: UserProfile | null;
  isOnboardingComplete: boolean;
  completeOnboarding: (userData: { role: string; location: string; calendarConnected: boolean }) => void;
  resetOnboarding: () => void;
  
  // Shift data
  shift: Shift;
  fixedBlocks: ShiftBlock[];
  suggestedBlocks: ShiftBlock[];
  
  // UI State
  isDarkMode: boolean;
  isNightShiftMode: boolean;
  activeTab: 'today' | 'swaps' | 'chat' | 'profile';
  
  // Modals
  showDifficultEventFlow: boolean;
  difficultEventStep: DifficultEventStep;
  hadDifficultEvent: boolean;
  
  showFatigueWarning: boolean;
  showEndOfShiftCheck: boolean;
  endOfShiftStep: EndOfShiftStep;
  
  fatigueLevel: number;
  sleepinessLevel: number;
  feelingsLevel: FeelingsLevel | null;
  
  // Actions
  setActiveTab: (tab: 'today' | 'swaps' | 'chat' | 'profile') => void;
  toggleDarkMode: () => void;
  
  acceptBlock: (blockId: string) => void;
  dismissBlock: (blockId: string) => void;
  regenerateDay: () => void;
  addDecompressionBreak: () => void;
  
  openDifficultEventFlow: () => void;
  closeDifficultEventFlow: () => void;
  setDifficultEventStep: (step: DifficultEventStep) => void;
  
  openFatigueWarning: () => void;
  closeFatigueWarning: () => void;
  
  openEndOfShiftCheck: () => void;
  closeEndOfShiftCheck: () => void;
  setEndOfShiftStep: (step: EndOfShiftStep) => void;
  setFatigueLevel: (level: number) => void;
  setSleepinessLevel: (level: number) => void;
  setFeelingsLevel: (level: FeelingsLevel) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  // Load user profile from localStorage
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load user profile:', e);
    }
    return null;
  });

  const isOnboardingComplete = userProfile?.onboardingComplete ?? false;

  const completeOnboarding = (userData: { role: string; location: string; calendarConnected: boolean }) => {
    const profile: UserProfile = {
      ...userData,
      onboardingComplete: true,
    };
    setUserProfile(profile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  };

  const resetOnboarding = () => {
    setUserProfile(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const [shift] = useState<Shift>(mockShift);
  const [fixedBlocks] = useState<ShiftBlock[]>(mockFixedBlocks);
  const [suggestedBlocks, setSuggestedBlocks] = useState<ShiftBlock[]>(mockSuggestedBlocks);
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNightShiftMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'today' | 'swaps' | 'chat' | 'profile'>('today');
  
  const [showDifficultEventFlow, setShowDifficultEventFlow] = useState(false);
  const [difficultEventStep, setDifficultEventStep] = useState<DifficultEventStep>('initial');
  const [hadDifficultEvent, setHadDifficultEvent] = useState(false);
  
  const [showFatigueWarning, setShowFatigueWarning] = useState(false);
  const [showEndOfShiftCheck, setShowEndOfShiftCheck] = useState(false);
  const [endOfShiftStep, setEndOfShiftStep] = useState<EndOfShiftStep>('fatigue');
  
  const [fatigueLevel, setFatigueLevel] = useState(3);
  const [sleepinessLevel, setSleepinessLevel] = useState(2);
  const [feelingsLevel, setFeelingsLevel] = useState<FeelingsLevel | null>(null);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newValue;
    });
  };

  const acceptBlock = (blockId: string) => {
    setSuggestedBlocks(prev =>
      prev.map(block =>
        block.id === blockId ? { ...block, status: 'accepted' as const } : block
      )
    );
  };

  const dismissBlock = (blockId: string) => {
    setSuggestedBlocks(prev =>
      prev.map(block =>
        block.id === blockId ? { ...block, status: 'dismissed' as const } : block
      )
    );
  };

  const regenerateDay = () => {
    setSuggestedBlocks(
      mockSuggestedBlocks.map(block => ({ ...block, status: 'pending' as const }))
    );
  };

  const addDecompressionBreak = () => {
    const now = new Date();
    const breakStart = new Date(now.getTime() + 30 * 60000);
    const breakEnd = new Date(breakStart.getTime() + 10 * 60000);
    
    const formatTime = (date: Date) => 
      `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    
    const newBlock: ShiftBlock = {
      id: `decompression-${Date.now()}`,
      start: formatTime(breakStart),
      end: formatTime(breakEnd),
      title: "💙 Decompression Break",
      subtitle: "Step away, breathe, check in with yourself",
      type: 'decompression',
      status: 'accepted',
    };
    
    setSuggestedBlocks(prev => [...prev, newBlock].sort((a, b) => a.start.localeCompare(b.start)));
    setHadDifficultEvent(true);
  };

  const openDifficultEventFlow = () => {
    setShowDifficultEventFlow(true);
    setDifficultEventStep('pause');
  };

  const closeDifficultEventFlow = () => {
    setShowDifficultEventFlow(false);
    setDifficultEventStep('initial');
  };

  const openFatigueWarning = () => setShowFatigueWarning(true);
  const closeFatigueWarning = () => setShowFatigueWarning(false);

  const openEndOfShiftCheck = () => {
    setShowEndOfShiftCheck(true);
    setEndOfShiftStep('fatigue');
  };
  
  const closeEndOfShiftCheck = () => {
    setShowEndOfShiftCheck(false);
    setEndOfShiftStep('fatigue');
  };

  const value: AppState = {
    userProfile,
    isOnboardingComplete,
    completeOnboarding,
    resetOnboarding,
    shift,
    fixedBlocks,
    suggestedBlocks: isNightShiftMode ? mockNightShiftBlocks : suggestedBlocks,
    isDarkMode,
    isNightShiftMode,
    activeTab,
    showDifficultEventFlow,
    difficultEventStep,
    hadDifficultEvent,
    showFatigueWarning,
    showEndOfShiftCheck,
    endOfShiftStep,
    fatigueLevel,
    sleepinessLevel,
    feelingsLevel,
    setActiveTab,
    toggleDarkMode,
    acceptBlock,
    dismissBlock,
    regenerateDay,
    addDecompressionBreak,
    openDifficultEventFlow,
    closeDifficultEventFlow,
    setDifficultEventStep,
    openFatigueWarning,
    closeFatigueWarning,
    openEndOfShiftCheck,
    closeEndOfShiftCheck,
    setEndOfShiftStep,
    setFatigueLevel,
    setSleepinessLevel,
    setFeelingsLevel,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
