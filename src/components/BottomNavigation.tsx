import { Calendar, Repeat, MessageCircle, User } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function BottomNavigation() {
  const { activeTab, setActiveTab } = useApp();

  const tabs = [
    { id: 'today' as const, label: 'Today', icon: Calendar },
    { id: 'swaps' as const, label: 'Swaps', icon: Repeat },
    { id: 'chat' as const, label: 'Chat', icon: MessageCircle },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border safe-area-bottom z-50">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full px-2 transition-colors ${
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon 
                className={`w-6 h-6 mb-1 transition-transform ${isActive ? 'scale-110' : ''}`} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
