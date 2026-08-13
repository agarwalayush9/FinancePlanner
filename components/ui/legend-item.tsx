import { cn } from "@/lib/utils";

interface LegendItemProps {
  color: string;
  label: string;
  value: string;
  className?: string;
}

export function LegendItem({ color, label, value, className }: LegendItemProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        className="w-2.5 h-2.5 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm text-text-secondary">{label}</span>
      <span className="text-sm font-semibold text-text-primary">{value}</span>
    </div>
  );
}
