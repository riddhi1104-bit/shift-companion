import { Header } from '@/components/Header';
import { ShiftTimeline } from '@/components/ShiftTimeline';
import { ActionButtons } from '@/components/ActionButtons';

export function TodayScreen() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="px-4 py-4 max-w-lg mx-auto">
        <ShiftTimeline />
        <ActionButtons />
      </main>
    </div>
  );
}
