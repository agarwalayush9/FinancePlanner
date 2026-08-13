import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/dashboard/stat-card";
import type { StatItem } from "@/types/dashboard";

interface StatsPanelProps {
  ticker: string;
  stats: StatItem[];
}

export function StatsPanel({ ticker, stats }: StatsPanelProps) {
  return (
    <section>
      <SectionHeader title={`${ticker} Stats`} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
}
