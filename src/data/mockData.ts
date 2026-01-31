import { ShiftBlock, Shift, Colleague, ChatChannel, ChatMessage, UpcomingShift } from './types';

export const mockShift: Shift = {
  date: "2026-01-31",
  type: "Day Shift",
  location: "ICU",
  start: "08:00",
  end: "20:00",
  isNightShift: false,
};

export const mockFixedBlocks: ShiftBlock[] = [
  {
    id: "fixed-1",
    start: "08:00",
    end: "08:30",
    title: "Handover",
    type: "fixed",
  },
  {
    id: "fixed-2",
    start: "16:00",
    end: "16:30",
    title: "Team Meeting",
    type: "fixed",
  },
  {
    id: "fixed-3",
    start: "19:30",
    end: "20:00",
    title: "Handover",
    type: "fixed",
  },
];

export const mockSuggestedBlocks: ShiftBlock[] = [
  {
    id: "suggested-1",
    start: "10:15",
    end: "10:25",
    title: "☕ Quick Break",
    subtitle: "10-min reset + hydration",
    type: "suggested",
    status: "pending",
  },
  {
    id: "suggested-2",
    start: "12:30",
    end: "13:00",
    title: "🍽️ Lunch Break",
    subtitle: "30-min proper break + light meal",
    type: "suggested",
    status: "pending",
  },
  {
    id: "suggested-3",
    start: "15:00",
    end: "15:10",
    title: "🚶 Stretch & Walk",
    subtitle: "Movement helps alertness",
    type: "suggested",
    status: "pending",
  },
];

export const mockNightShiftBlocks: ShiftBlock[] = [
  {
    id: "night-1",
    start: "21:00",
    end: "21:30",
    title: "🍽️ Light Meal Before Shift Gets Busy",
    subtitle: "Avoid heavy food—yoghurt, salad, pasta work well on nights",
    type: "suggested",
    status: "pending",
  },
  {
    id: "night-2",
    start: "01:00",
    end: "01:30",
    title: "💧 Hydration + Light Snack",
    subtitle: "Water + fruit/nuts—no large meals 00:00-06:00",
    type: "suggested",
    status: "pending",
  },
  {
    id: "night-3",
    start: "04:00",
    end: "04:30",
    title: "☕ Caffeine Window (Last Chance)",
    subtitle: "Avoid caffeine after this to protect post-shift sleep",
    type: "suggested",
    status: "pending",
  },
  {
    id: "night-4",
    start: "06:30",
    end: "07:00",
    title: "Rest + Handover Prep",
    subtitle: "Prepare notes and take a breath before handover",
    type: "suggested",
    status: "pending",
  },
];

export const mockUpcomingShifts: UpcomingShift[] = [
  {
    id: "upcoming-1",
    date: "2026-02-02",
    day: "Monday",
    start: "08:00",
    end: "20:00",
    type: "Day Shift",
    location: "ICU",
  },
  {
    id: "upcoming-2",
    date: "2026-02-04",
    day: "Wednesday",
    start: "20:00",
    end: "08:00",
    type: "Night Shift",
    location: "ED",
  },
  {
    id: "upcoming-3",
    date: "2026-02-05",
    day: "Thursday",
    start: "20:00",
    end: "08:00",
    type: "Night Shift",
    location: "ED",
    warning: "2nd consecutive night",
  },
  {
    id: "upcoming-4",
    date: "2026-02-06",
    day: "Friday",
    start: "20:00",
    end: "08:00",
    type: "Night Shift",
    location: "ED",
    warning: "3rd consecutive night",
  },
];

export const mockColleagues: Colleague[] = [
  {
    id: "col-1",
    name: "Dr Patel",
    role: "CT1, ED",
    initials: "DP",
    availability: "Can take a long day if you do their short day",
  },
  {
    id: "col-2",
    name: "Sarah K",
    role: "Band 6, ICU",
    initials: "SK",
    availability: "Looking to swap any Friday night",
  },
  {
    id: "col-3",
    name: "James M",
    role: "Band 5, Ward 5",
    initials: "JM",
    availability: "Flexible on weekends",
  },
  {
    id: "col-4",
    name: "Dr Chen",
    role: "SHO, Medicine",
    initials: "LC",
    availability: "Can cover ED nights",
  },
];

export const mockChatChannels: ChatChannel[] = [
  {
    id: "channel-1",
    name: "Night Shift Crew - Ward 5",
    unreadCount: 3,
  },
  {
    id: "channel-2",
    name: "ICU Day Team",
    unreadCount: 0,
  },
  {
    id: "channel-3",
    name: "Junior Docs Mess",
    unreadCount: 0,
  },
];

export const mockChatMessages: Record<string, ChatMessage[]> = {
  "channel-1": [
    {
      id: "msg-1",
      sender: "Alex",
      senderRole: "Band 5",
      content: "Anyone had a break yet? Heading to break room now if anyone wants to join ☕",
      timestamp: "23:45",
      isYou: false,
    },
    {
      id: "msg-2",
      sender: "You",
      content: "I'll come! Need 10 minutes off the floor",
      timestamp: "23:47",
      isYou: true,
    },
    {
      id: "msg-3",
      sender: "Jamie",
      senderRole: "Band 6",
      content: "Reminder to everyone - eat something before 3am. Future you will thank you 🍎",
      timestamp: "23:50",
      isYou: false,
    },
  ],
  "channel-2": [
    {
      id: "msg-4",
      sender: "Team Lead",
      senderRole: "Band 7",
      content: "Great work today everyone. Busy but we managed well 💪",
      timestamp: "19:30",
      isYou: false,
    },
  ],
  "channel-3": [
    {
      id: "msg-5",
      sender: "Admin",
      content: "Teaching session moved to Tuesday 14:00",
      timestamp: "15:00",
      isYou: false,
    },
  ],
};

export const quickReplyTemplates = [
  "Taking a break now, anyone want to join?",
  "Has everyone eaten today?",
  "Need to swap Friday late - anyone free?",
];

export const supportResources = [
  {
    id: "support-1",
    title: "Talk to a colleague",
    description: "Quick walk or informal debrief",
    icon: "👥",
  },
  {
    id: "support-2",
    title: "Employee Assistance Programme",
    description: "24/7 confidential counselling",
    icon: "📞",
  },
  {
    id: "support-3",
    title: "Practitioner Health",
    description: "Free mental health support for NHS staff",
    icon: "💙",
  },
  {
    id: "support-4",
    title: "Occupational Health",
    description: "Access via your Trust",
    icon: "🏥",
  },
];
