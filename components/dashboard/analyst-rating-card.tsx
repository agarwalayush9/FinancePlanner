import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { AnalystRatingBar } from "@/components/dashboard/analyst-rating-bar";
import type { AnalystRatingRow } from "@/types/dashboard";

interface AnalystRatingCardProps {
  className?: string;
  data: AnalystRatingRow[];
}

export function AnalystRatingCard({ data, className }: AnalystRatingCardProps) {
  const maxCount = Math.max(...data.map((r) => r.count));

  return (
    <Card className={className}>
      <SectionHeader title="Analyst rating" />


      <div className="space-y-3">
        {data.map((row) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className="w-24 text-sm text-text-secondary shrink-0 truncate">
              {row.label}
            </span>
            <div className="flex-1">
              <AnalystRatingBar
                count={row.count}
                maxCount={maxCount}
                filledRatio={row.count / maxCount}
              />
            </div>
            <span className="w-8 text-right text-sm font-medium text-text-primary tabular-nums">
              {row.count}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
