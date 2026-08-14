import React from "react";
import { Gift, MessageSquare, LogOut, type LucideIcon } from "lucide-react";

export type IconComponent = React.ComponentType<{ className?: string }> | LucideIcon;

export function IconHome({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.8 2.8a2 2 0 0 1 2.4 0l7.2 5.4a2 2 0 0 1 .8 1.6V18a3 3 0 0 1-3 3H5.8a3 3 0 0 1-3-3V9.8a2 2 0 0 1 .8-1.6l7.2-5.4ZM7.5 16a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Z",
    })
  );
}

export function IconCard({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11ZM6 6a.75.75 0 0 0-.75.75v1h13.5v-1A.75.75 0 0 0 18 6H6Zm12.75 4.75H5.25v6.75c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-6.75ZM7.5 14.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z",
    })
  );
}

export function IconPie({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("path", { d: "M10.75 2.05A10 10 0 0 0 10.75 21.95V2.05Z" }),
    React.createElement("path", { d: "M13.25 2.05A10 10 0 0 1 21.95 10.75H13.25V2.05Z" }),
    React.createElement("path", { d: "M13.25 13.25H21.95A10 10 0 0 1 13.25 21.95V13.25Z" })
  );
}

export function IconBinoculars({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.5 3.5A2.25 2.25 0 0 0 4.25 5.75l-.95 6.88A4.75 4.75 0 1 0 11 15.25V9.5h2v5.75A4.75 4.75 0 1 0 20.7 12.63l-.95-6.88A2.25 2.25 0 0 0 17.5 3.5h-1.25a2.25 2.25 0 0 0-2 1.25L13.5 6.5h-3l-.75-1.75A2.25 2.25 0 0 0 7.75 3.5H6.5ZM6.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm11 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    })
  );
}

export function IconBars({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("rect", { x: "3.5", y: "9", width: "4.5", height: "12", rx: "2.25" }),
    React.createElement("rect", { x: "9.75", y: "4", width: "4.5", height: "17", rx: "2.25" }),
    React.createElement("rect", { x: "16", y: "11", width: "4.5", height: "10", rx: "2.25" })
  );
}

export function IconSparkles({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("path", {
      d: "M16.5 2C16.85 5.5 18.5 7.15 22 7.5C18.5 7.85 16.85 9.5 16.5 13C16.15 9.5 14.5 7.85 11 7.5C14.5 7.15 16.15 5.5 16.5 2Z",
    }),
    React.createElement("path", {
      d: "M7 11.5C7.25 14.2 8.8 15.75 11.5 16C8.8 16.25 7.25 17.8 7 20.5C6.75 17.8 5.2 16.25 2.5 16C5.2 15.75 6.75 14.2 7 11.5Z",
    })
  );
}

export function IconTrendingUp({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
    },
    React.createElement("path", { d: "M3 4v14a2 2 0 0 0 2 2h15" }),
    React.createElement("path", { d: "M7 14l4-4 3.5 3.5 5.5-6.5" }),
    React.createElement("polyline", { points: "15 7 20 7 20 12" })
  );
}

export function IconClipboardCheck({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9 3.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 3.5H17a2.5 2.5 0 0 1 2.5 2.5v13a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V6A2.5 2.5 0 0 1 7 3.5h2Zm4.5 1v-1h-3v1h3ZM14.3 11.3a.9.9 0 0 1 0 1.27l-3 3a.9.9 0 0 1-1.27 0l-1.5-1.5a.9.9 0 1 1 1.27-1.27l.86.86 2.37-2.36a.9.9 0 0 1 1.27 0Z",
    })
  );
}

export function IconReceipt({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("path", {
      d: "M5 4.5A2.5 2.5 0 0 1 7.5 2h9A2.5 2.5 0 0 1 19 4.5v15.8a.7.7 0 0 1-1.12.56L15.5 19.1l-2.38 1.76a.7.7 0 0 1-.84 0L9.9 19.1l-2.38 1.76a.7.7 0 0 1-1.12-.56V4.5Z",
    })
  );
}

export function IconList({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "currentColor",
      className,
    },
    React.createElement("circle", { cx: "4.5", cy: "6", r: "1.5" }),
    React.createElement("circle", { cx: "4.5", cy: "12", r: "1.5" }),
    React.createElement("circle", { cx: "4.5", cy: "18", r: "1.5" }),
    React.createElement("line", { x1: "9", y1: "6", x2: "20.5", y2: "6", strokeWidth: "2.2", strokeLinecap: "round" }),
    React.createElement("line", { x1: "9", y1: "12", x2: "20.5", y2: "12", strokeWidth: "2.2", strokeLinecap: "round" }),
    React.createElement("line", { x1: "9", y1: "18", x2: "20.5", y2: "18", strokeWidth: "2.2", strokeLinecap: "round" })
  );
}

export function IconMoon({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("path", {
      d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z",
    })
  );
}

export function IconPromo({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("path", {
      d: "M12 2.5l1.3 1.5 1.9-.3.8 1.8 1.9.5-.1 2 1.5 1.2-1 1.7.7 1.8-1.7 1-.1 2-1.9.4-.8 1.9-1.9-.4L12 18.5l-1.8-1.4-1.9.4-.8-1.9-1.9-.4-.1-2-1.7-1 .7-1.8-1-1.7 1.5-1.2-.1-2 1.9-.5.8-1.8 1.9.3L12 2.5Zm-2.5 15.5l.8 3.5 1.7-.9 1.7.9.8-3.5-2.5-1-2.5 1Z",
    })
  );
}

export function IconFeedback({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("path", {
      d: "M13 3H5a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h1v3.5l4-3.5h3a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z",
    }),
    React.createElement("path", {
      d: "M18 8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-.5v3l-3.5-3h-2a4.98 4.98 0 0 0 2-4V9c0-.34-.04-.67-.12-1H18Z",
    })
  );
}

export function IconLogout({ className }: { className?: string }) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 6a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3V6Zm11.3 2.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4l1.3-1.3H9a1 1 0 1 1 0-2h7.6l-1.3-1.3a1 1 0 0 1 0-1.4Z",
    })
  );
}

export interface NavItem {
  icon: IconComponent;
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
      { icon: IconHome, label: "Home", href: "/" },
      { icon: IconCard, label: "Spending", href: "/spending" },
      { icon: IconPie, label: "Invest", href: "/invest", active: true },
      { icon: IconBinoculars, label: "Forecast", href: "/forecast" },
      { icon: IconBars, label: "Equity", href: "/equity" },
      { icon: IconSparkles, label: "Ask AI", href: "/ask-ai" },
    ],
  },
  {
    items: [
      { icon: IconTrendingUp, label: "Brokerage", href: "/brokerage" },
      { icon: IconClipboardCheck, label: "Estate planning", href: "/estate" },
      { icon: IconReceipt, label: "Tax", href: "/tax" },
      { icon: IconList, label: "Financial Planner", href: "/planner" },
    ],
  },
];

export interface BottomNavItem {
  icon?: IconComponent;
  label: string;
  href: string;
  variant?: "default" | "danger" | "promo" | "toggle";
}

export const bottomNavItems: BottomNavItem[] = [
  { icon: IconMoon, label: "Dark mode", href: "#", variant: "toggle" },
  { icon: IconPromo, label: "Promo", href: "/promo", variant: "promo" },
  { icon: IconFeedback, label: "Feedback", href: "/feedback" },
  { icon: IconLogout, label: "Logout", href: "/logout", variant: "danger" },
];
