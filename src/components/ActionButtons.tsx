import { Sparkles, AlertTriangle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { toast } from 'sonner';

export function ActionButtons() {
  const { regenerateDay, openDifficultEventFlow } = useApp();

  const handleRegenerate = () => {
    regenerateDay();
    toast.success('✓ Day regenerated with fresh suggestions', { duration: 3000 });
  };

  return (
    <div className="space-y-3 pt-2">
      <button
        onClick={handleRegenerate}
        className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all shadow-md-custom hover:shadow-lg-custom active:scale-[0.98]"
      >
        <Sparkles className="w-5 h-5" />
        Regenerate My Day
      </button>
      
      <button
        onClick={openDifficultEventFlow}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors text-sm"
      >
        <AlertTriangle className="w-4 h-4" />
        Something difficult happened on this shift
      </button>
    </div>
  );
}
