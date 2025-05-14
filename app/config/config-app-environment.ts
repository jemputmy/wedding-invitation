// CountDown Config
export interface CountdownConfig {
  event: {
    name: string;
    date: string;
    timeZone: string;
    location: string;
  };
  ui: {
    title: string;
    badgeText: string;
    completedMessage: string;
    timeBoxLabels: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  prayer: {
    text: string;
  };
}

// config.ts
export const weddingCountdownConfig: CountdownConfig = {
  event: {
    name: "Majlis Perkahwinan",
    date: "2025-09-20T08:00:00Z",
    timeZone: "Asia/Kuala_Lumpur",
    location: "Dewan Seri Endon, Putrajaya",
  },
  ui: {
    title: "Majlis Perkahwinan",
    badgeText: "Menghitung Hari",
    completedMessage: "Hari yang dinanti telah tiba! 🎉",
    timeBoxLabels: {
      days: "Hari",
      hours: "Jam",
      minutes: "Minit",
      seconds: "Saat",
    },
  },
  prayer: {
    text: "Ya Allah Ya Rahman Ya Rahim, berkatilah majlis perkahwinan ini. Limpahkanlah baraqah dan rahmatMu kepada kedua-dua mempelai ini. Kurniakanlah mereka kelak zuriat yang soleh dan solehah. Kekalkanlah jodoh mereka hingga ke jannah. Aamiin.",
  },
};

// BOTTOM DRAWER CONFIG

// Calendar Drawer
// types.ts
export interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: string; // ISO format
  endDate: string; // ISO format
  timeZone: string;
}

export interface CalendarDrawerConfig {
  ui: {
    title: string;
    description: string;
    closeButtonText: string;
    providers: {
      google: {
        label: string;
        icon: React.ComponentType;
      };
      apple: {
        label: string;
        icon: React.ComponentType;
      };
    };
  };
  event: CalendarEvent;
}

// configs.ts
import { FaGoogle, FaApple } from "react-icons/fa";

export const weddingCalendarConfig: CalendarDrawerConfig = {
  ui: {
    title: "Tambah ke Kalendar",
    description:
      "Gunakan pilihan di bawah untuk simpan tarikh ke kalendar anda.",
    closeButtonText: "Close",
    providers: {
      google: {
        label: "Add to Google Calendar",
        icon: FaGoogle,
      },
      apple: {
        label: "Add to Apple Calendar",
        icon: FaApple,
      },
    },
  },
  event: {
    title: "Majlis Perkahwinan",
    description: "Sertai kami untuk meraikan hari istimewa!",
    location: "Dewan Seri Endon, Putrajaya",
    startDate: "2025-06-01T10:00:00Z",
    endDate: "2025-06-01T14:00:00Z",
    timeZone: "Asia/Kuala_Lumpur",
  },
};

export const meetingCalendarConfig: CalendarDrawerConfig = {
  ui: {
    title: "Save to Calendar",
    description: "Choose your calendar provider to save this event.",
    closeButtonText: "Cancel",
    providers: {
      google: {
        label: "Save to Google",
        icon: FaGoogle,
      },
      apple: {
        label: "Add to Apple Calendar",
        icon: FaApple,
      },
    },
  },
  event: {
    title: "Business Meeting",
    description: "Quarterly planning session with team",
    location: "Conference Room A, Office Tower",
    startDate: "2025-07-15T09:00:00Z",
    endDate: "2025-07-15T11:00:00Z",
    timeZone: "America/New_York",
  },
};
