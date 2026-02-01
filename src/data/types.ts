export interface ShiftBlock {
  id: string;
  start: string;
  end: string;
  title: string;
  subtitle?: string;
  type: 'fixed' | 'suggested' | 'decompression';
  status?: 'pending' | 'accepted' | 'dismissed';
}

export interface Shift {
  date: string;
  type: string;
  location: string;
  start: string;
  end: string;
  isNightShift: boolean;
}

export interface UpcomingShift {
  id: string;
  date: string;
  day: string;
  start: string;
  end: string;
  type: string;
  location: string;
  warning?: string;
}

export interface Colleague {
  id: string;
  name: string;
  role: string;
  initials: string;
  availability: string;
}

export interface ChatChannel {
  id: string;
  name: string;
  unreadCount: number;
}

export interface ChatMessage {
  id: string;
  sender: string;
  senderRole?: string;
  content: string;
  timestamp: string;
  isYou: boolean;
}

export type DifficultEventStep = 'initial' | 'pause' | 'scheduled' | 'check-in' | 'support';
export type EndOfShiftStep = 'fatigue' | 'sleepiness' | 'warning' | 'complete';
export type FeelingsLevel = 'okay' | 'shaken' | 'distressed';

export interface UserProfile {
  name?: string;
  role: string;
  location: string;
  calendarConnected: boolean;
  onboardingComplete: boolean;
}
