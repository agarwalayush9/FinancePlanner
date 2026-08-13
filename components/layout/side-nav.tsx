"use client";

import { useState } from "react";
import { ChevronsLeft, ChevronsRight, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { navGroups, bottomNavItems } from "@/lib/nav-config";

export function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col h-[calc(100vh-20px)] m-[10px] rounded-[20px] bg-surface-panel border border-surface-border overflow-hidden transition-all duration-300 shrink-0",
        collapsed ? "w-[68px]" : "w-[260px]"
      )}
    >
      {/* Header: avatar + workspace name + collapse toggle */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-surface-border">
        <div className="w-8 h-8 rounded-full bg-accent-indigo flex items-center justify-center text-white text-sm font-bold shrink-0">
          N
        </div>
        {!collapsed && (
          <span className="text-sm font-semibold text-text-primary truncate flex-1">
            NVIDIA
          </span>
        )}
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-7 h-7 rounded-md hover:bg-surface-raised text-text-muted hover:text-text-primary transition-colors shrink-0"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronsRight className="w-4 h-4" />
          ) : (
            <ChevronsLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Primary + secondary nav groups */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navGroups.map((group, gi) => (
          <div key={gi} className="space-y-1">
            {group.label && !collapsed && (
              <span className="block px-3 pb-1 text-xs font-medium text-text-muted uppercase tracking-wider">
                {group.label}
              </span>
            )}
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-150",
                    item.active
                      ? "bg-surface-raised text-text-primary font-medium"
                      : "text-text-secondary hover:bg-surface-raised hover:text-text-primary",
                    collapsed && "justify-center px-0"
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className="w-[18px] h-[18px] shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </a>
              );
            })}
            {gi < navGroups.length - 1 && (
              <div className="my-3 border-t border-surface-border" />
            )}
          </div>
        ))}
      </nav>

      {/* Bottom utility items */}
      <div className="mt-auto border-t border-surface-border px-3 py-4 space-y-1">
        {bottomNavItems.map((item) => {
          if (item.variant === "toggle") {
            return (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-secondary",
                  collapsed && "justify-center px-0"
                )}
              >
                {collapsed ? (
                  <Moon className="w-[18px] h-[18px] shrink-0" />
                ) : (
                  <>
                    <Moon className="w-[18px] h-[18px] shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    <div className="relative w-9 h-5 rounded-full bg-surface-raised border border-surface-border cursor-pointer transition-colors">
                      <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white border border-surface-border shadow-sm transition-transform" />
                    </div>
                  </>
                )}
              </div>
            );
          }

          const Icon = item.icon;
          const isDanger = item.variant === "danger";
          const isPromo = item.variant === "promo";

          return (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-150",
                isDanger
                  ? "text-status-negative hover:bg-red-50"
                  : isPromo
                    ? "text-accent-amber hover:bg-amber-50"
                    : "text-text-secondary hover:bg-surface-raised hover:text-text-primary",
                collapsed && "justify-center px-0"
              )}
              title={collapsed ? item.label : undefined}
            >
              {Icon && <Icon className="w-[18px] h-[18px] shrink-0" />}
              {!collapsed && <span>{item.label}</span>}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
