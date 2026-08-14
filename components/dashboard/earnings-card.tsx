"use client";

import {
  ComposedChart,
  Line,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { LegendItem } from "@/components/ui/legend-item";
import type { EarningsPoint } from "@/types/dashboard";
import { ReferenceLine } from "recharts";

interface EarningsCardProps {
  className?: string;
  data: EarningsPoint[];
  estimatedLabel: string;
  estimatedValue: string;
  actualLabel: string;
  actualValue: string;
}

interface SquareDotProps {
  cx?: number;
  cy?: number;
  payload?: EarningsPoint;
  index?: number;
}

function SquareDot({ cx, cy, index, payload }: SquareDotProps) {
  if (cx === undefined || cy === undefined || payload?.actualEps === undefined) return null;
  const size = 12;

  return (
    <rect
      x={cx - size / 2}
      y={cy - size / 2}
      width={size}
      height={size}
      fill="#6366F1"
      rx={3}
    />
  );
}

function CustomTick(props: any) {
  const { x, y, payload } = props;
  const quarters = ["Q2 2025", "Q3 2025", "Q4 2025", "Q1 2026"];
  if (!quarters.includes(payload?.value)) return null;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x="0" y="16" textAnchor="middle" fill="#9797A3" fontSize="12px">
        {payload.value}
      </text>
    </g>
  );
}

export function EarningsCard({
  data,
  estimatedLabel,
  estimatedValue,
  actualLabel,
  actualValue,
  className,
}: EarningsCardProps) {
  return (
    <Card className={className}>
      <div className="border-b border-[#E5E5EA] pb-[7px] mb-4 -mt-1">
        <SectionHeader title="Earnings" actionClassName="!rounded-[30%] !w-[41px]" />
      </div>

      {/* Legend row */}
      <div className="flex items-center justify-between mb-8 px-1">
        <LegendItem color="#6366F1" label={estimatedLabel} value={estimatedValue} />
        <LegendItem color="#6366F1" label={actualLabel} value={actualValue} />
      </div>

      {/* Chart */}
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 10, bottom: 20, left: -15 }}
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeDasharray="3 3"
              stroke="#E6E6EA"
            />

            {/* Vertical grid lines only at the quarters */}
            <ReferenceLine x="Q1 2025" stroke="#E6E6EA" strokeDasharray="3 3" />
            <ReferenceLine x="Q2 2025" stroke="#E6E6EA" strokeDasharray="3 3" />
            <ReferenceLine x="Q3 2025" stroke="#E6E6EA" strokeDasharray="3 3" />
            <ReferenceLine x="Q4 2025" stroke="#E6E6EA" strokeDasharray="3 3" />
            <ReferenceLine x="Q1 2026" stroke="#E6E6EA" strokeDasharray="3 3" />

            <XAxis
              dataKey="quarter"
              axisLine={false}
              tickLine={false}
              tick={<CustomTick />}
              padding={{ left: 0, right: 0 }}
              scale="point"
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9797A3" }}
              domain={[0.7, 1.75]}
              ticks={[0.7, 1.05, 1.4, 1.75]}
              tickFormatter={(value: number) => value.toFixed(2)}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111114",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
                padding: "8px 12px",
              }}
              labelStyle={{ color: "#9797A3", fontSize: "11px" }}
              formatter={(value: number, name: string) => [
                `$${value.toFixed(2)}`,
                name === "estimatedEps" ? "Estimated" : "Actual",
              ]}
            />

            {/* Dashed trend line for estimated */}
            <Line
              type="natural"
              dataKey="estimatedEps"
              stroke="#6366F1"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              activeDot={false}
            />

            {/* Square scatter markers for actual EPS */}
            <Scatter
              dataKey="actualEps"
              fill="#6366F1"
              shape={<SquareDot />}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
