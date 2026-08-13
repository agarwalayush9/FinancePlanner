import {
  Home,
  Wallet,
  TrendingUp,
  LineChart,
  Scale,
  Sparkles,
  Landmark,
  Building2,
  Receipt,
  Calculator,
  Gift,
  MessageSquare,
  LogOut,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
  active?: boolean;
  variant?: "default" | "danger";
}

export interface NavGroup {
  label?: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    items: [
      { icon: Home, label: "Home", href: "/" },
      { icon: Wallet, label: "Spending", href: "/spending" },
      { icon: TrendingUp, label: "Invest", href: "/invest", active: true },
      { icon: LineChart, label: "Forecast", href: "/forecast" },
      { icon: Scale, label: "Equity", href: "/equity" },
      { icon: Sparkles, label: "Ask AI", href: "/ask-ai" },
    ],
  },
  {
    items: [
      { icon: Landmark, label: "Brokerage", href: "/brokerage" },
      { icon: Building2, label: "Estate planning", href: "/estate" },
      { icon: Receipt, label: "Tax", href: "/tax" },
      { icon: Calculator, label: "Financial Planner", href: "/planner" },
    ],
  },
];

export interface BottomNavItem {
  icon?: LucideIcon;
  label: string;
  href: string;
  variant?: "default" | "danger" | "promo" | "toggle";
}

export const bottomNavItems: BottomNavItem[] = [
  { label: "Dark mode", href: "#", variant: "toggle" },
  { icon: Gift, label: "Promo", href: "/promo", variant: "promo" },
  { icon: MessageSquare, label: "Feedback", href: "/feedback" },
  { icon: LogOut, label: "Logout", href: "/logout", variant: "danger" },
];
