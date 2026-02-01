import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface AllSetScreenProps {
  onFinish: () => void;
}

export function AllSetScreen({ onFinish }: AllSetScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      {/* Checkmark icon */}
      <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8 animate-fade-in">
        <Check className="w-12 h-12 text-green-600 dark:text-green-400" strokeWidth={3} />
      </div>
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
        All set!
      </h1>
      
      {/* Body text */}
      <p className="text-muted-foreground text-lg mb-12 max-w-sm animate-fade-in">
        We've found your shift for today. Let's structure your day to keep you safe and well.
      </p>
      
      {/* Continue button */}
      <Button 
        onClick={onFinish}
        size="lg"
        className="w-full max-w-sm h-14 text-lg font-semibold animate-slide-up"
      >
        See Today's Shift
      </Button>
    </div>
  );
}
