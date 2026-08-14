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

function SquareDot({ cx, cy, index }: SquareDotProps) {
  if (cx === undefined || cy === undefined) return null;
  const size = 10;
  const opacity = index !== undefined ? 0.5 + (index + 1) * 0.125 : 1;

  return (
    <rect
      x={cx - size / 2}
      y={cy - size / 2}
      width={size}
      height={size}
      fill="#6366F1"
      fillOpacity={opacity}
      rx={2}
    />
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
      <SectionHeader title="Earnings" />

      {/* Legend row */}
      <div className="flex items-center gap-6 mb-3">
        <LegendItem color="#9797A3" label={estimatedLabel} value={estimatedValue} />
        <LegendItem color="#6366F1" label={actualLabel} value={actualValue} />
      </div>

      {/* Chart */}
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: -15 }}
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeDasharray="3 3"
              stroke="#E6E6EA"
            />

            <XAxis
              dataKey="quarter"
              axisLine={false}
              tickLine={{ stroke: "#E6E6EA" }}
              tick={{ fontSize: 12, fill: "#9797A3" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9797A3" }}
              domain={[0.6, 1.8]}
              tickCount={7}
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
              type="monotone"
              dataKey="estimatedEps"
              stroke="#9797A3"
              strokeWidth={1.5}
              strokeDasharray="4 4"
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
