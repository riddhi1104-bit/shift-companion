import { AlertTriangle, ArrowRight } from 'lucide-react';
import { mockUpcomingShifts, mockColleagues } from '@/data/mockData';
import { toast } from 'sonner';

export function SwapsScreen() {
  const handleOfferSwap = (shiftId: string) => {
    toast.success('Shift offered for swap', { duration: 3000 });
  };

  const handleRequestSwap = (colleagueId: string) => {
    toast.success('Swap request sent', { duration: 3000 });
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-card border-b border-border px-4 py-4 safe-area-top sticky top-0 z-40">
        <div className="max-w-lg mx-auto">
          <h1 className="text-xl font-bold text-foreground">Shift Swaps</h1>
        </div>
      </header>

      <main className="px-4 py-4 max-w-lg mx-auto space-y-6">
        {/* Your Upcoming Shifts */}
        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Your Upcoming Shifts
          </h2>
          
          <div className="space-y-3">
            {mockUpcomingShifts.map((shift) => (
              <div 
                key={shift.id}
                className="bg-card rounded-xl p-4 shadow-card border border-border"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">
                        {shift.day} {new Date(shift.date).getDate()} {new Date(shift.date).toLocaleDateString('en-GB', { month: 'short' })}
                      </span>
                      {shift.warning && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-warning/10 text-warning text-xs font-medium rounded-full">
                          <AlertTriangle className="w-3 h-3" />
                          {shift.warning}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {shift.start} - {shift.end}
                    </p>
                    <p className="text-sm text-primary font-medium mt-1">
                      {shift.type} • {shift.location}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleOfferSwap(shift.id)}
                    className="flex items-center gap-1.5 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                  >
                    Offer to swap
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Colleagues Open to Swap */}
        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Colleagues Open to Swap
          </h2>
          
          <div className="space-y-3">
            {mockColleagues.map((colleague) => (
              <div 
                key={colleague.id}
                className="bg-card rounded-xl p-4 shadow-card border border-border"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold">
                    {colleague.initials}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">
                      {colleague.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {colleague.role}
                    </p>
                    <p className="text-sm text-primary mt-1">
                      {colleague.availability}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleRequestSwap(colleague.id)}
                    className="flex-shrink-0 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Request swap
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
