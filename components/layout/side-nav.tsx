"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { navGroups, bottomNavItems } from "@/lib/nav-config";

function CollapseIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="4" x2="5" y2="20" />
      <line x1="19" y1="12" x2="9" y2="12" />
      <polyline points="14 7 9 12 14 17" />
    </svg>
  );
}

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
      <div
        className={cn(
          "flex items-center border-b border-surface-border py-4 transition-all duration-300",
          collapsed ? "justify-center px-2" : "justify-between px-4 gap-3"
        )}
      >
        {!collapsed && (
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-full bg-accent-indigo flex items-center justify-center text-white text-sm font-bold shrink-0">
              N
            </div>
            <span className="text-sm font-semibold text-text-primary truncate">
              NVIDIA
            </span>
          </div>
        )}
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-8 h-8 rounded-xl border border-surface-border bg-surface-panel hover:bg-surface-raised text-text-secondary hover:text-text-primary transition-all duration-200 shrink-0 shadow-sm"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <CollapseIcon
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              collapsed && "rotate-180"
            )}
          />
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
                  key={item.label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors duration-150 cursor-pointer",
                    item.active
                      ? "bg-[#EFEFF2] text-text-primary font-medium"
                      : "text-[#9797A3] hover:bg-surface-raised hover:text-text-primary",
                    collapsed && "justify-center w-10 h-10 mx-auto px-0 rounded-xl"
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className="w-5 h-5 shrink-0" />
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
          const Icon = item.icon;
          if (item.variant === "toggle") {
            return (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#6B6B76]",
                  collapsed && "justify-center px-0"
                )}
              >
                {collapsed ? (
                  Icon && <Icon className="w-5 h-5 shrink-0" />
                ) : (
                  <>
                    {Icon && <Icon className="w-5 h-5 shrink-0" />}
                    <span className="flex-1 font-medium">{item.label}</span>
                    <div className="relative w-11 h-6 rounded-full bg-[#E5E5EA] p-0.5 cursor-pointer transition-colors shrink-0">
                      <div className="w-5 h-5 rounded-full bg-white shadow-sm transition-transform" />
                    </div>
                  </>
                )}
              </div>
            );
          }

          const isDanger = item.variant === "danger";

          return (
            <a
              key={item.label}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-150 font-medium cursor-pointer",
                isDanger
                  ? "text-[#EF4444] hover:bg-red-50/50"
                  : "text-[#6B6B76] hover:bg-surface-raised hover:text-text-primary",
                collapsed && "justify-center px-0"
              )}
              title={collapsed ? item.label : undefined}
            >
              {Icon && <Icon className="w-5 h-5 shrink-0" />}
              {!collapsed && <span>{item.label}</span>}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
