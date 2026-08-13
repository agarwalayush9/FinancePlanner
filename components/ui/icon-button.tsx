import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface IconButtonProps {
  icon: LucideIcon;
  className?: string;
  "aria-label": string;
  onClick?: () => void;
}

export function IconButton({
  icon: Icon,
  className,
  "aria-label": ariaLabel,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(
        "flex items-center justify-center w-9 h-9 rounded-full",
        "border border-surface-border bg-surface-panel",
        "text-text-secondary hover:text-text-primary hover:bg-surface-raised",
        "transition-colors duration-150",
        className
      )}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}
