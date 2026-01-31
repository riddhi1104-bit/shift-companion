import { Heart, Moon, Sun } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function Header() {
  const { shift, isDarkMode, toggleDarkMode, isNightShiftMode } = useApp();
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  const getShiftDuration = () => {
    const [startH] = shift.start.split(':').map(Number);
    const [endH] = shift.end.split(':').map(Number);
    let duration = endH - startH;
    if (duration < 0) duration += 24;
    return duration;
  };

  return (
    <header className="bg-card border-b border-border px-4 py-3 safe-area-top sticky top-0 z-40">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <h1 className="text-lg font-bold text-foreground">ShiftBuddy</h1>
          </div>
          
          {(isNightShiftMode || true) && (
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-warning" />
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground mb-2">
          {formatDate(shift.date)}
        </p>
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
          <span>{getShiftDuration()}h {shift.type}</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>{shift.location}</span>
        </div>
      </div>
    </header>
  );
}
