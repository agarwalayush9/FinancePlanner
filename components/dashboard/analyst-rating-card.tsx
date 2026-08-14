import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { AnalystRatingBar } from "@/components/dashboard/analyst-rating-bar";
import type { AnalystRatingRow } from "@/types/dashboard";

interface AnalystRatingCardProps {
  className?: string;
  data: AnalystRatingRow[];
}

export function AnalystRatingCard({ data, className }: AnalystRatingCardProps) {
  const totalCount = data.reduce((sum, r) => sum + r.count, 0);

  return (
    <Card className={className}>
      <div className="border-b border-[#E5E5EA] pb-[7px] mb-4 -mt-1">
        <SectionHeader title="Analyst rating" actionClassName="!rounded-[30%] !w-[41px]" />
      </div>

      <div className="space-y-9">
        {data.map((row) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className="w-24 text-sm text-text-secondary shrink-0 truncate">
              {row.label}
            </span>
            <div className="flex-1">
              <AnalystRatingBar
                count={row.count}
                totalCount={totalCount}
                filledRatio={row.count / totalCount}
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
