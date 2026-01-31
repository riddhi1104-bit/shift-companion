import { Check, X, Clock } from 'lucide-react';
import { ShiftBlock } from '@/data/types';
import { useApp } from '@/context/AppContext';
import { toast } from 'sonner';

interface TimelineBlockProps {
  block: ShiftBlock;
}

export function TimelineBlock({ block }: TimelineBlockProps) {
  const { acceptBlock, dismissBlock } = useApp();

  const handleAccept = () => {
    acceptBlock(block.id);
    toast.success('✓ Break accepted', { duration: 3000 });
  };

  const handleDismiss = () => {
    dismissBlock(block.id);
    toast('Break dismissed', { duration: 3000 });
  };

  const handleMove = () => {
    toast('Move feature coming soon', { duration: 3000 });
  };

  const getBlockStyles = () => {
    if (block.type === 'fixed') {
      return 'bg-muted border-l-4 border-muted-foreground/30';
    }
    if (block.type === 'decompression') {
      return 'bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary';
    }
    if (block.status === 'accepted') {
      return 'bg-success/10 border-l-4 border-success';
    }
    if (block.status === 'dismissed') {
      return 'bg-muted/50 border-l-4 border-muted-foreground/20 opacity-50';
    }
    return 'bg-suggested border-l-4 border-primary';
  };

  const showActions = block.type === 'suggested' && block.status === 'pending';

  return (
    <div className={`rounded-lg p-4 ${getBlockStyles()} transition-all duration-200`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-muted-foreground">
              {block.start} - {block.end}
            </span>
            {block.status === 'accepted' && (
              <span className="inline-flex items-center gap-1 text-xs text-success font-medium">
                <Check className="w-3 h-3" /> Accepted
              </span>
            )}
          </div>
          <h3 className="font-semibold text-foreground text-base">
            {block.title}
          </h3>
          {block.subtitle && (
            <p className="text-sm text-muted-foreground mt-0.5">
              {block.subtitle}
            </p>
          )}
        </div>
        
        {block.type === 'fixed' && (
          <div className="flex-shrink-0 p-2 bg-muted-foreground/10 rounded-full">
            <Clock className="w-4 h-4 text-muted-foreground" />
          </div>
        )}
      </div>

      {showActions && (
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={handleAccept}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            <Check className="w-4 h-4" />
            Accept
          </button>
          <button
            onClick={handleMove}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors"
          >
            <Clock className="w-4 h-4" />
            Move
          </button>
          <button
            onClick={handleDismiss}
            className="flex items-center justify-center p-2.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
