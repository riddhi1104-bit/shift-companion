import { X } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { toast } from 'sonner';

export function DifficultEventModal() {
  const { 
    showDifficultEventFlow, 
    difficultEventStep, 
    closeDifficultEventFlow,
    setDifficultEventStep,
    addDecompressionBreak 
  } = useApp();

  if (!showDifficultEventFlow) return null;

  const handleScheduleBreak = () => {
    addDecompressionBreak();
    closeDifficultEventFlow();
    toast.success('✓ 10-minute decompression break added to your timeline', { duration: 4000 });
  };

  const handleNotNow = () => {
    closeDifficultEventFlow();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-fade-in"
        onClick={closeDifficultEventFlow}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card rounded-t-2xl shadow-lg-custom animate-slide-up safe-area-bottom">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
        </div>
        
        {/* Close button */}
        <button
          onClick={closeDifficultEventFlow}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 pb-8 pt-2">
          {difficultEventStep === 'pause' && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🫂</div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Take a Pause
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Take 1-2 minutes to acknowledge what just happened. If possible, step out briefly with a colleague for a check-in.
                </p>
                <p className="text-xs text-muted-foreground/70 mt-3 italic">
                  Based on NHS 'The Pause' guidance
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleScheduleBreak}
                  className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all shadow-md-custom"
                >
                  💙 Schedule 10-min Decompression Break
                </button>
                
                <button
                  onClick={handleNotNow}
                  className="w-full px-4 py-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Not right now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
