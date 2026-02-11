import { 
  Ticket, 
  Trophy, 
  Clock, 
  Plane, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  MessageSquare, 
  Zap, 
  UserCheck 
} from 'lucide-react';

export const COLORS = {
  background: '#0B1324',
  secondary: '#101C33',
  gold: '#D6B46A',
  sand: '#F3E2B0',
  textMain: '#F2F5FF',
  textMuted: '#94A3B8',
};

export const CONTACT_INFO = {
  email: "martin.cevallos@investa.ec",
  whatsapp: "13057979664",
  whatsappDisplay: "+1 (305) 797-9664",
  location: "Miami, FL"
};

export const SERVICES = [
  {
    id: 1,
    title: "VIP Tickets",
    subtitle: "Miami Heat / NBA",
    description: "Ticket sourcing and coordination for premium seating and corporate attendance—optimized around your schedule.",
    icon: Ticket
  },
  {
    id: 2,
    title: "Major Events",
    subtitle: "World Cup Miami",
    description: "Ticket coordination and full game-day logistics: transport, timing, dining, and contingency planning.",
    icon: Trophy
  },
  {
    id: 3,
    title: "24/7 Support",
    subtitle: "Always-on assistance",
    description: "Round-the-clock support to resolve urgent questions and last-minute changes with minimal friction.",
    icon: Clock
  },
  {
    id: 4,
    title: "Transfers",
    subtitle: "Miami Airport (MIA)",
    description: "Airport pickup/drop-off coordination, flight monitoring, and seamless handoffs—executive-grade reliability.",
    icon: Plane
  },
  {
    id: 5,
    title: "USA Logistics",
    subtitle: "Nationwide transportation",
    description: "Planning and coordination of transfers across the U.S.—from short hops to multi-city itineraries.",
    icon: MapPin
  },
  {
    id: 6,
    title: "Travel Planning",
    subtitle: "National & International",
    description: "Flights, hotels, routing, reservations, and experience curation—designed around efficiency and preference.",
    icon: Globe
  }
];

export const STANDARDS = [
  {
    title: "Discretion & Confidentiality",
    description: "We handle sensitive logistics with a strict privacy-first approach and minimal exposure.",
    icon: ShieldCheck
  },
  {
    title: "Clear Communication",
    description: "Short updates, clean confirmations, and organized details—so you stay informed without being overloaded.",
    icon: MessageSquare
  },
  {
    title: "Speed & Contingency",
    description: "We plan for changes: delays, schedule shifts, and last-minute needs with pragmatic backups.",
    icon: Zap
  },
  {
    title: "Trusted Coordination",
    description: "We work with vetted operators and keep a high bar for service quality and responsiveness.",
    icon: UserCheck
  }
];

export const FAQ_ITEMS = [
  {
    question: "How does pricing work?",
    answer: "Everything is by quote. We price based on scope, timing, vendor requirements, and complexity."
  },
  {
    question: "Do you provide 24/7 support?",
    answer: "Yes. We offer 24/7 assistance for urgent needs and time-sensitive changes."
  },
  {
    question: "Are you Miami-only?",
    answer: "We are Miami-based, but we coordinate logistics across the U.S. and internationally depending on the request."
  },
  {
    question: "How do I request tickets or travel planning?",
    answer: "Send a message with your date(s), preferences, and budget range. We’ll reply with availability, options, and a quote."
  }
];