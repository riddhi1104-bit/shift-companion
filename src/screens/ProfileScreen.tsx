import { User, Settings, Bell, HelpCircle, LogOut, Clock, RotateCcw } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const roleLabels: Record<string, string> = {
  'staff-nurse-5': 'Staff Nurse (Band 5)',
  'staff-nurse-6-7': 'Staff Nurse (Band 6/7)',
  'junior-doctor-fy': 'Junior Doctor (FY1/FY2)',
  'junior-doctor-ct-st': 'Junior Doctor (CT1-3/ST)',
  'consultant': 'Consultant',
  'ahp': 'Allied Health Professional',
  'hca': 'Healthcare Assistant',
  'other': 'Healthcare Worker',
};

const locationLabels: Record<string, string> = {
  'ed': 'Emergency Department',
  'icu': 'Intensive Care Unit',
  'ward-general': 'General Ward',
  'theatre': 'Theatre',
  'outpatients': 'Outpatients',
  'community': 'Community',
  'maternity': 'Maternity',
  'mental-health': 'Mental Health',
  'other': 'Healthcare',
};

export function ProfileScreen() {
  const { openFatigueWarning, openEndOfShiftCheck, userProfile, resetOnboarding } = useApp();

  const roleDisplay = userProfile?.role ? roleLabels[userProfile.role] || 'Healthcare Worker' : 'Healthcare Worker';
  const locationDisplay = userProfile?.location ? locationLabels[userProfile.location] || 'NHS' : 'NHS';

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-card border-b border-border px-4 py-4 safe-area-top sticky top-0 z-40">
        <div className="max-w-lg mx-auto">
          <h1 className="text-xl font-bold text-foreground">Profile</h1>
        </div>
      </header>

      <main className="px-4 py-4 max-w-lg mx-auto space-y-6">
        {/* Profile Card */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-bold text-foreground">{roleDisplay}</h2>
          <p className="text-muted-foreground">{locationDisplay}</p>
          {userProfile?.calendarConnected && (
            <p className="text-xs text-accent mt-1">📅 Calendar connected</p>
          )}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-success/10 text-success rounded-full text-sm font-medium mt-3">
            <span className="w-2 h-2 bg-success rounded-full" />
            On shift
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card rounded-xl p-4 shadow-card border border-border">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-sm text-muted-foreground">Breaks taken this week</p>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card border border-border">
            <p className="text-2xl font-bold text-accent">85%</p>
            <p className="text-sm text-muted-foreground">Break acceptance rate</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-card rounded-xl shadow-card border border-border divide-y divide-border">
          <button className="w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors text-left">
            <Settings className="w-5 h-5 text-muted-foreground" />
            <span className="flex-1 font-medium text-foreground">Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors text-left">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="flex-1 font-medium text-foreground">Notifications</span>
          </button>
          <button className="w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors text-left">
            <HelpCircle className="w-5 h-5 text-muted-foreground" />
            <span className="flex-1 font-medium text-foreground">Help & Support</span>
          </button>
        </div>

        {/* Demo Buttons */}
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
            Demo Controls
          </p>
          <button
            onClick={openFatigueWarning}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-warning/10 text-warning-foreground rounded-xl font-medium hover:bg-warning/20 transition-colors border border-warning/20"
          >
            <Clock className="w-5 h-5" />
            Show Fatigue Warning
          </button>
          <button
            onClick={openEndOfShiftCheck}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 text-primary rounded-xl font-medium hover:bg-primary/20 transition-colors border border-primary/20"
          >
            👏 Show End of Shift Check
          </button>
          <button
            onClick={resetOnboarding}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-muted text-muted-foreground rounded-xl font-medium hover:bg-muted/80 transition-colors border border-border"
          >
            <RotateCcw className="w-5 h-5" />
            Restart Onboarding
          </button>
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-destructive hover:bg-destructive/10 rounded-xl transition-colors">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </main>
    </div>
  );
}
