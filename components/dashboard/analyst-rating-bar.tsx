import { cn } from "@/lib/utils";

interface AnalystRatingBarProps {
  filledRatio: number;
  maxCount: number;
  count: number;
}

export function AnalystRatingBar({
  filledRatio,
  maxCount,
  count,
}: AnalystRatingBarProps) {
  const filledPercent = maxCount > 0 ? (count / maxCount) * 100 : 0;
  const totalPercent = 100;

  return (
    <div className="relative w-full h-7 rounded-full overflow-hidden bg-surface-raised">
      {/* Hatched background fill (full width representing max) */}
      <div
        className="absolute inset-0 rounded-full pattern-hatch"
        style={{ width: `${totalPercent}%` }}
      />

      {/* Solid indigo fill */}
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-accent-indigo transition-all duration-500"
        style={{ width: `${filledPercent}%` }}
      />

      {/* Tick marker at boundary */}
      {filledPercent > 0 && filledPercent < 100 && (
        <div
          className="absolute top-0 -translate-x-1/2 text-accent-indigo text-[8px] leading-none"
          style={{ left: `${filledPercent}%` }}
        >
          ▼
        </div>
      )}
    </div>
  );
}
