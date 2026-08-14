import React from "react";
import { Search, Plus, ChevronsUpDown } from "lucide-react";

export function TopBar() {
  return (
    <header className="flex flex-wrap items-center justify-between px-[1px] md:px-[17px] py-4 border-b border-surface-border bg-surface-panel gap-4">
      {/* Search */}
      <div className="relative w-full max-w-[240px]">
        <Search
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E8E93]"
          strokeWidth={2}
        />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-9 pr-4 py-1.5 rounded-[10px] border border-[#E5E5EA] bg-white text-sm text-[#111114] placeholder:text-[#8E8E93] focus:outline-none focus:ring-1 focus:ring-black/10 transition-colors shadow-2xs"
        />
      </div>

      {/* Right cluster */}
      <div className="flex items-center gap-2 md:gap-2.5 shrink-0">
        {/* + Invest button */}
        <button
          type="button"
          className="flex items-center gap-1.5 bg-[#18181B] text-white rounded-[10px] px-4 py-1.5 text-sm font-medium hover:bg-black transition-all shadow-sm"
        >
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          <span>Invest</span>
        </button>

        {/* Vertical divider */}
        <div className="w-[1px] h-4.5 bg-[#E5E5EA] mx-0.5" />

        {/* 3 Squircle Icon buttons */}
        <button
          type="button"
          aria-label="Notifications"
          className="w-9 h-9 rounded-[14px] border border-[#E5E5EA] bg-white flex items-center justify-center text-[#8E8E93] hover:text-[#111114] hover:bg-[#F7F7F9] transition-all shadow-2xs cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
            <path d="M12 3a5.5 5.5 0 0 0-5.5 5.5v3.2c0 .6-.25 1.2-.7 1.65l-1 1A1 1 0 0 0 5.5 16h13a1 1 0 0 0 .7-1.65l-1-1a2.33 2.33 0 0 1-.7-1.65V8.5A5.5 5.5 0 0 0 12 3Z" />
            <path
              d="M10 18.5a2.2 2.2 0 0 0 4 0"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Settings"
          className="w-9 h-9 rounded-[14px] border border-[#E5E5EA] bg-white flex items-center justify-center text-[#8E8E93] hover:text-[#111114] hover:bg-[#F7F7F9] transition-all shadow-2xs cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3.2a2.3 2.3 0 0 1 2 1.15l.3.52c.6.22 1.15.54 1.64.93l.56-.23a2.3 2.3 0 0 1 2.7.81l.9 1.56a2.3 2.3 0 0 1-.73 2.73l-.48.34c.1.58.1 1.18 0 1.76l.48.34a2.3 2.3 0 0 1 .73 2.73l-.9 1.56a2.3 2.3 0 0 1-2.7.81l-.56-.23c-.5.39-1.04.71-1.64.93l-.3.52a2.3 2.3 0 0 1-2 1.15h-1.8a2.3 2.3 0 0 1-2-1.15l-.3-.52a6.3 6.3 0 0 1-1.64-.93l-.56.23a2.3 2.3 0 0 1-2.7-.81l-.9-1.56a2.3 2.3 0 0 1 .73-2.73l.48-.34a5.9 5.9 0 0 1 0-1.76l-.48-.34a2.3 2.3 0 0 1-.73-2.73l.9-1.56a2.3 2.3 0 0 1 2.7-.81l.56.23c.5-.39 1.04-.71 1.64-.93l.3-.52a2.3 2.3 0 0 1 2-1.15h1.8ZM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Help"
          className="w-9 h-9 rounded-[14px] border border-[#E5E5EA] bg-white flex items-center justify-center text-[#8E8E93] hover:text-[#111114] hover:bg-[#F7F7F9] transition-all shadow-2xs cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm1.25-6.2c-.44.38-.75.75-.75 1.45h-1v-.5c0-.98.42-1.68 1.1-2.3.56-.52.9-.94.9-1.7 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.15-.55 1.87-1.25 2.55Z"
            />
          </svg>
        </button>

        {/* Vertical divider */}
        <div className="w-[1px] h-4.5 bg-[#E5E5EA] mx-0.5" />

        {/* User menu pill */}
        <button
          type="button"
          className="flex items-center gap-2 pl-1.5 pr-2.5 py-1 rounded-[10px] border border-[#E5E5EA] bg-white hover:bg-[#F7F7F9] transition-all shadow-2xs cursor-pointer"
        >
          <div className="w-5.5 h-5.5 rounded-full bg-[#E5E5EA] flex items-center justify-center text-[#8E8E93] overflow-hidden shrink-0">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-[#6B6B76] whitespace-nowrap">
            Anthony beane
          </span>
          <ChevronsUpDown className="w-3.5 h-3.5 text-[#8E8E93] shrink-0 ml-0.5" />
        </button>
      </div>
    </header>
  );
}
