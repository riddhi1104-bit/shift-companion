import { useApp } from '@/context/AppContext';
import { BottomNavigation } from '@/components/BottomNavigation';
import { DifficultEventModal } from '@/components/DifficultEventModal';
import { FatigueWarningModal } from '@/components/FatigueWarningModal';
import { EndOfShiftModal } from '@/components/EndOfShiftModal';
import { TodayScreen } from '@/screens/TodayScreen';
import { SwapsScreen } from '@/screens/SwapsScreen';
import { ChatScreen } from '@/screens/ChatScreen';
import { ProfileScreen } from '@/screens/ProfileScreen';
import { OnboardingFlow } from '@/components/onboarding/OnboardingFlow';

const Index = () => {
  const { activeTab, isOnboardingComplete, completeOnboarding } = useApp();

  // Show onboarding if not complete
  if (!isOnboardingComplete) {
    return <OnboardingFlow onComplete={completeOnboarding} />;
  }

  const renderScreen = () => {
    switch (activeTab) {
      case 'today':
        return <TodayScreen />;
      case 'swaps':
        return <SwapsScreen />;
      case 'chat':
        return <ChatScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <TodayScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
      <BottomNavigation />
      <DifficultEventModal />
      <FatigueWarningModal />
      <EndOfShiftModal />
    </div>
  );
};

export default Index;
