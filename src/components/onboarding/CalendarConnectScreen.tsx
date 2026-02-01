import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, Loader2 } from 'lucide-react';

interface CalendarConnectScreenProps {
  onConnect: () => void;
  onSkip: () => void;
  onBack: () => void;
}

export function CalendarConnectScreen({ onConnect, onSkip, onBack }: CalendarConnectScreenProps) {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection for demo
    setTimeout(() => {
      setIsConnecting(false);
      onConnect();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      {/* Back button and Progress indicator */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-muted-foreground mb-4 -ml-2 p-2 hover:text-foreground transition-colors"
          disabled={isConnecting}
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">3 of 3</span>
        </div>
        <Progress value={100} className="h-2" />
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-2xl font-bold text-foreground mb-4 animate-fade-in">
          Connect your calendar
        </h1>
        
        <p className="text-muted-foreground text-lg mb-4 animate-fade-in">
          We'll read your shifts and meetings to suggest breaks and wellbeing support.
        </p>
        
        <p className="text-sm text-muted-foreground mb-8 animate-fade-in">
          🔒 Read-only access. Your data stays private.
        </p>
        
        <div className="flex-1" />
        
        {/* Outlook Connect button */}
        <Button 
          onClick={handleConnect}
          size="lg"
          disabled={isConnecting}
          className="w-full h-14 text-lg font-semibold mb-4 animate-slide-up"
        >
          {isConnecting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Connecting...
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V12zm-6-8.25v3h3v-3zm0 4.5v3h3v-3zm0 4.5v1.83l3.05-1.83zm-5.25-9v3h3.75v-3zm0 4.5v3h3.75v-3zm0 4.5v2.03l2.41 1.5 1.34-.8v-2.73zM9 3.75V6h2l.13.01.12.04v-2.3zM5.98 15.98q.9 0 1.6-.3.7-.32 1.19-.86.48-.55.73-1.28.25-.74.25-1.61 0-.83-.25-1.55-.24-.71-.71-1.24t-1.15-.83q-.68-.3-1.55-.3-.92 0-1.64.3-.71.3-1.2.85-.5.54-.75 1.3-.25.74-.25 1.63 0 .85.26 1.56.26.72.74 1.23.48.52 1.17.81.69.3 1.56.3zM7.5 21h12.39L12 16.08V17q0 .41-.3.7-.29.3-.7.3H7.5zm15-.13v-7.24l-5.9 3.54Z"/>
              </svg>
              Connect Outlook Calendar
            </>
          )}
        </Button>
        
        {/* Skip option */}
        <button 
          onClick={onSkip}
          disabled={isConnecting}
          className="text-muted-foreground text-sm underline hover:text-foreground transition-colors disabled:opacity-50"
        >
          I'll add shifts manually later
        </button>
      </div>
    </div>
  );
}
