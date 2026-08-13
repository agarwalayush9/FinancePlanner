import { cn } from "@/lib/utils";
import type { StatItem } from "@/types/dashboard";

const colorMap: Record<string, string> = {
  indigo: "bg-accent-indigo",
  violet: "bg-accent-violet",
  fuchsia: "bg-accent-fuchsia",
  blue: "bg-accent-blue",
  cyan: "bg-accent-cyan",
  green: "bg-accent-green",
  amber: "bg-accent-amber",
  orange: "bg-accent-orange",
};

interface StatCardProps {
  stat: StatItem;
}

export function StatCard({ stat }: StatCardProps) {
  const isPositive = stat.deltaPercent > 0;
  const isZero = stat.deltaPercent === 0;
  const dotClass = colorMap[stat.color] ?? "bg-accent-indigo";

  return (
    <div className="bg-surface-panel border border-surface-border rounded-2xl p-4 hover:shadow-sm transition-shadow">
      {/* Label row */}
      <div className="flex items-center gap-2 mb-3">
        <span className={cn("w-2 h-2 rounded-full shrink-0", dotClass)} />
        <span className="text-sm text-text-secondary truncate">
          {stat.label}
        </span>
      </div>

      {/* Value row */}
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xl font-semibold text-text-primary tabular-nums">
          {stat.value}
        </span>
        {!isZero && (
          <span
            className={cn(
              "text-sm font-medium tabular-nums",
              isPositive ? "text-status-positive" : "text-status-negative"
            )}
          >
            {isPositive ? "+" : ""}
            {stat.deltaPercent.toFixed(2)}%
          </span>
        )}
        {isZero && (
          <span className="text-sm font-medium text-text-muted tabular-nums">
            0.00%
          </span>
        )}
      </div>
    </div>
  );
}
