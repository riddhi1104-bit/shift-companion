import { X, AlertTriangle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { toast } from 'sonner';

export function FatigueWarningModal() {
  const { showFatigueWarning, closeFatigueWarning } = useApp();

  if (!showFatigueWarning) return null;

  const handleTakeBreak = () => {
    closeFatigueWarning();
    toast.success('✓ Break time! Step away and recharge', { duration: 4000 });
  };

  const handleSnooze = () => {
    closeFatigueWarning();
    toast('Reminder set for 30 minutes', { duration: 3000 });
  };

  const handleSoon = () => {
    closeFatigueWarning();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-fade-in"
        onClick={closeFatigueWarning}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card rounded-t-2xl shadow-lg-custom animate-slide-up safe-area-bottom">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
        </div>
        
        {/* Close button */}
        <button
          onClick={closeFatigueWarning}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 pb-8 pt-2">
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-warning/10 rounded-full mb-4">
                <AlertTriangle className="w-8 h-8 text-warning" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                Long stretch without a break
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You've gone 6+ hours without stopping. Long unbroken work is linked to more errors and unsafe driving home. Can you take 10 minutes now?
              </p>
              <p className="text-xs text-muted-foreground/70 mt-3 italic">
                NHS/BMA fatigue guidance
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleTakeBreak}
                className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all shadow-md-custom"
              >
                Yes, take break now
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={handleSnooze}
                  className="flex-1 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors"
                >
                  Snooze 30 min
                </button>
                <button
                  onClick={handleSoon}
                  className="flex-1 px-4 py-3 bg-muted text-muted-foreground rounded-lg font-medium text-sm hover:bg-muted/80 transition-colors"
                >
                  I'll take one soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
