import { Search, Plus, Bell, Settings, HelpCircle, ChevronDown } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

export function TopBar() {
  return (
    <header className="flex flex-wrap items-center justify-between px-4 md:px-8 py-4 border-b border-surface-border bg-surface-panel gap-4">
      {/* Search */}
      <div className="relative flex-1 max-w-md min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <input
          type="text"
          placeholder="Search stocks, ETFs..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-surface-border bg-surface text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-indigo/20 focus:border-accent-indigo transition-colors"
        />
      </div>

      {/* Right cluster */}
      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        {/* Invest button */}
        <button
          type="button"
          className="flex items-center gap-1.5 bg-text-primary text-white rounded-full px-3 md:px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Invest</span>
        </button>

        {/* Icon buttons */}
        <div className="flex items-center gap-1 md:gap-2">
          <IconButton icon={Bell} aria-label="Notifications" />
          <IconButton icon={Settings} aria-label="Settings" className="hidden sm:flex" />
          <IconButton icon={HelpCircle} aria-label="Help" className="hidden md:flex" />
        </div>

        {/* User menu */}
        <button
          type="button"
          className="flex items-center gap-1.5 md:gap-2 pl-1 pr-1 md:pr-2 py-1 rounded-full hover:bg-surface-raised transition-colors shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-accent-violet flex items-center justify-center text-white text-xs font-bold shrink-0">
            AY
          </div>
          <span className="text-sm font-medium text-text-primary hidden md:inline">
            Ayush
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-text-muted hidden sm:block" />
        </button>
      </div>
    </header>
  );
}
