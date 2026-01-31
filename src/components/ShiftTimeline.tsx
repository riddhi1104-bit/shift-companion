import { TimelineBlock } from './TimelineBlock';
import { useApp } from '@/context/AppContext';
import { ShiftBlock } from '@/data/types';

export function ShiftTimeline() {
  const { fixedBlocks, suggestedBlocks } = useApp();

  // Merge and sort all blocks by start time
  const allBlocks: ShiftBlock[] = [...fixedBlocks, ...suggestedBlocks]
    .filter(block => block.status !== 'dismissed')
    .sort((a, b) => a.start.localeCompare(b.start));

  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-1">
        Your Day
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border -z-10" />
        
        <div className="space-y-3">
          {allBlocks.map((block) => (
            <TimelineBlock key={block.id} block={block} />
          ))}
        </div>
      </div>
    </div>
  );
}
