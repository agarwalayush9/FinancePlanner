import { Search, Plus, Bell, Settings, HelpCircle, ChevronDown } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

export function TopBar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-surface-border bg-surface-panel">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <input
          type="text"
          placeholder="Search stocks, ETFs, crypto..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-surface-border bg-surface text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-indigo/20 focus:border-accent-indigo transition-colors"
        />
      </div>

      {/* Right cluster */}
      <div className="flex items-center gap-3 ml-6">
        {/* Invest button */}
        <button
          type="button"
          className="flex items-center gap-1.5 bg-text-primary text-white rounded-full px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          Invest
        </button>

        {/* Icon buttons */}
        <IconButton icon={Bell} aria-label="Notifications" />
        <IconButton icon={Settings} aria-label="Settings" />
        <IconButton icon={HelpCircle} aria-label="Help" />

        {/* User menu */}
        <button
          type="button"
          className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-surface-raised transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-accent-violet flex items-center justify-center text-white text-xs font-bold">
            AY
          </div>
          <span className="text-sm font-medium text-text-primary hidden sm:inline">
            Ayush
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-text-muted" />
        </button>
      </div>
    </header>
  );
}
