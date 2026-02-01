import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      {/* Icon/Illustration */}
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 animate-fade-in">
        <Heart className="w-12 h-12 text-primary" fill="currentColor" />
      </div>
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
        Welcome to ShiftBuddy 👋
      </h1>
      
      {/* Subheading */}
      <p className="text-xl text-primary font-medium mb-4 animate-fade-in">
        Your personal shift companion
      </p>
      
      {/* Body text */}
      <p className="text-muted-foreground text-lg mb-12 max-w-sm animate-fade-in">
        Structure your day, protect your wellbeing, connect with colleagues
      </p>
      
      {/* Get Started button */}
      <Button 
        onClick={onNext}
        size="lg"
        className="w-full max-w-sm h-14 text-lg font-semibold animate-slide-up"
      >
        Get Started
      </Button>
    </div>
  );
}
