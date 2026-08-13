import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("bg-surface-panel border border-surface-border rounded-xl p-6 shadow-sm min-w-0 overflow-hidden", className)}>
      {children}
    </div>
  );
}
