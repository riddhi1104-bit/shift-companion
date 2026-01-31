import { X, Car, AlertTriangle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { toast } from 'sonner';
import { supportResources } from '@/data/mockData';

const fatigueEmojis = ['😊', '🙂', '😐', '😟', '😫'];
const sleepinessLabels = ['Alert', 'Fairly alert', 'Neutral', 'Tired', 'Struggling'];

export function EndOfShiftModal() {
  const { 
    showEndOfShiftCheck, 
    closeEndOfShiftCheck,
    endOfShiftStep,
    setEndOfShiftStep,
    fatigueLevel,
    setFatigueLevel,
    sleepinessLevel,
    setSleepinessLevel,
    hadDifficultEvent,
    feelingsLevel,
    setFeelingsLevel
  } = useApp();

  if (!showEndOfShiftCheck) return null;

  const handleFatigueNext = () => {
    setEndOfShiftStep('sleepiness');
  };

  const handleSleepinessNext = () => {
    if (sleepinessLevel >= 4) {
      setEndOfShiftStep('warning');
    } else if (hadDifficultEvent) {
      setEndOfShiftStep('check-in' as any);
    } else {
      handleComplete();
    }
  };

  const handleAddRest = () => {
    toast.success('✓ 20-minute rest added before leaving', { duration: 4000 });
    if (hadDifficultEvent) {
      setEndOfShiftStep('check-in' as any);
    } else {
      handleComplete();
    }
  };

  const handleOkayToGo = () => {
    if (hadDifficultEvent) {
      setEndOfShiftStep('check-in' as any);
    } else {
      handleComplete();
    }
  };

  const handleFeelingsSelect = (level: 'okay' | 'shaken' | 'distressed') => {
    setFeelingsLevel(level);
    if (level === 'okay') {
      handleComplete();
    } else {
      setEndOfShiftStep('support' as any);
    }
  };

  const handleComplete = () => {
    closeEndOfShiftCheck();
    toast.success('Shift complete 👏 Take care of yourself', { duration: 4000 });
  };

  const handleRemindLater = () => {
    closeEndOfShiftCheck();
    toast('We\'ll check in again in 48 hours', { duration: 3000 });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-fade-in"
        onClick={closeEndOfShiftCheck}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card rounded-t-2xl shadow-lg-custom animate-slide-up safe-area-bottom max-h-[90vh] overflow-y-auto">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2 sticky top-0 bg-card z-10">
          <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
        </div>
        
        {/* Close button */}
        <button
          onClick={closeEndOfShiftCheck}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 pb-8 pt-2">
          {/* Fatigue Step */}
          {endOfShiftStep === 'fatigue' && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl mb-4">👏</div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Shift complete
                </h2>
                <p className="text-muted-foreground">
                  How drained do you feel right now?
                </p>
              </div>

              <div className="flex justify-between gap-2">
                {fatigueEmojis.map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => setFatigueLevel(index + 1)}
                    className={`flex-1 flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
                      fatigueLevel === index + 1 
                        ? 'bg-primary/10 ring-2 ring-primary' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    <span className="text-2xl">{emoji}</span>
                    <span className="text-xs text-muted-foreground">{index + 1}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleFatigueNext}
                className="w-full px-4 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all shadow-md-custom"
              >
                Continue
              </button>
            </div>
          )}

          {/* Sleepiness Step */}
          {endOfShiftStep === 'sleepiness' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-foreground mb-2">
                  How sleepy do you feel?
                </h2>
              </div>

              <div className="space-y-2">
                {sleepinessLabels.map((label, index) => (
                  <button
                    key={index}
                    onClick={() => setSleepinessLevel(index + 1)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                      sleepinessLevel === index + 1 
                        ? 'bg-primary/10 ring-2 ring-primary' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    <span className="font-medium">{label}</span>
                    <span className="text-muted-foreground">{index + 1}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleSleepinessNext}
                className="w-full px-4 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all shadow-md-custom"
              >
                Continue
              </button>
            </div>
          )}

          {/* Warning Step */}
          {endOfShiftStep === 'warning' && (
            <div className="space-y-6">
              <div className="p-4 bg-warning/10 rounded-xl border border-warning/20">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-warning/20 rounded-full">
                    <Car className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      You feel very tired right now
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      NHS guidance warns that severe fatigue increases crash risk after shift. Consider resting 15-20 minutes before driving, or arrange alternative transport.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleAddRest}
                  className="w-full px-4 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all shadow-md-custom"
                >
                  Add 20-min rest before leaving
                </button>
                <button
                  onClick={handleOkayToGo}
                  className="w-full px-4 py-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  I'm okay to go
                </button>
              </div>
            </div>
          )}

          {/* Check-in Step (after difficult event) */}
          {(endOfShiftStep as any) === 'check-in' && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl mb-4">💭</div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  How are you feeling now?
                </h2>
                <p className="text-muted-foreground">
                  Earlier you marked a difficult event.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleFeelingsSelect('okay')}
                  className="w-full px-4 py-4 bg-success/10 text-success-foreground rounded-xl font-medium text-base hover:bg-success/20 transition-all border border-success/20"
                >
                  I'm okay
                </button>
                <button
                  onClick={() => handleFeelingsSelect('shaken')}
                  className="w-full px-4 py-4 bg-warning/10 text-warning-foreground rounded-xl font-medium text-base hover:bg-warning/20 transition-all border border-warning/20"
                >
                  Still shaken
                </button>
                <button
                  onClick={() => handleFeelingsSelect('distressed')}
                  className="w-full px-4 py-4 bg-destructive/10 text-destructive rounded-xl font-medium text-base hover:bg-destructive/20 transition-all border border-destructive/20"
                >
                  Very distressed
                </button>
              </div>
            </div>
          )}

          {/* Support Step */}
          {(endOfShiftStep as any) === 'support' && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl mb-4">💙</div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  You don't have to go through this alone
                </h2>
              </div>

              <div className="space-y-3">
                {supportResources.map((resource) => (
                  <button
                    key={resource.id}
                    className="w-full flex items-start gap-3 p-4 bg-muted rounded-xl text-left hover:bg-muted/80 transition-colors"
                  >
                    <span className="text-2xl flex-shrink-0">{resource.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={handleRemindLater}
                className="w-full px-4 py-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Remind me again in 48 hours
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
