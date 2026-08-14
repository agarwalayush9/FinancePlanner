import { cn } from "@/lib/utils";

interface AnalystRatingBarProps {
  filledRatio: number;
  totalCount: number;
  count: number;
}

export function AnalystRatingBar({
  filledRatio,
  totalCount,
  count,
}: AnalystRatingBarProps) {
  const filledPercent = totalCount > 0 ? (count / totalCount) * 100 : 0;

  return (
    <div className="relative w-full h-[23px] flex items-center">
      {/* Solid indigo fill */}
      <div
        className="h-full bg-[#6366F1]"
        style={{
          width: `calc(${filledPercent}% - 4px)`,
          borderTopLeftRadius: "6px",
          borderBottomLeftRadius: "6px",
        }}
      />

      {/* Custom gap marker */}
      <div
        className="absolute h-full w-[8px] flex flex-col justify-between items-center"
        style={{ left: `calc(${filledPercent}% - 4px)` }}
      >
        <svg width="5" height="3" viewBox="0 0 5 3" className="fill-[#1C1C1E]">
          <path d="M0 0 L5 0 L2.5 3 Z" />
        </svg>
        <div className="flex-1 w-[1.5px] border-l-[1.5px] border-dotted border-[#1C1C1E] my-[1px]" />
        <svg width="5" height="3" viewBox="0 0 5 3" className="fill-[#1C1C1E]">
          <path d="M0 3 L5 3 L2.5 0 Z" />
        </svg>
      </div>

      {/* Hatched background fill */}
      <div
        className="h-full pattern-hatch"
        style={{
          width: `calc(${100 - filledPercent}% - 4px)`,
          marginLeft: "8px",
          borderTopRightRadius: "6px",
          borderBottomRightRadius: "6px",
        }}
      />
    </div>
  );
}
