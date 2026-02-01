import { useState } from 'react';
import { WelcomeScreen } from './WelcomeScreen';
import { RoleSelectScreen } from './RoleSelectScreen';
import { LocationSelectScreen } from './LocationSelectScreen';
import { CalendarConnectScreen } from './CalendarConnectScreen';
import { AllSetScreen } from './AllSetScreen';

type OnboardingStep = 'welcome' | 'role' | 'location' | 'calendar' | 'allset';

interface OnboardingFlowProps {
  onComplete: (userData: { role: string; location: string; calendarConnected: boolean }) => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [step, setStep] = useState<OnboardingStep>('welcome');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [calendarConnected, setCalendarConnected] = useState(false);

  const handleFinish = () => {
    onComplete({ role, location, calendarConnected });
  };

  switch (step) {
    case 'welcome':
      return <WelcomeScreen onNext={() => setStep('role')} />;
    
    case 'role':
      return (
        <RoleSelectScreen
          selectedRole={role}
          onRoleChange={setRole}
          onNext={() => setStep('location')}
        />
      );
    
    case 'location':
      return (
        <LocationSelectScreen
          selectedLocation={location}
          onLocationChange={setLocation}
          onNext={() => setStep('calendar')}
          onBack={() => setStep('role')}
        />
      );
    
    case 'calendar':
      return (
        <CalendarConnectScreen
          onConnect={() => {
            setCalendarConnected(true);
            setStep('allset');
          }}
          onSkip={() => setStep('allset')}
          onBack={() => setStep('location')}
        />
      );
    
    case 'allset':
      return <AllSetScreen onFinish={handleFinish} />;
    
    default:
      return <WelcomeScreen onNext={() => setStep('role')} />;
  }
}
