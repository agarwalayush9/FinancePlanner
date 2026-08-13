"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import type { PriceTargetPoint } from "@/types/dashboard";

interface PriceTargetCardProps {
  data: PriceTargetPoint[];
  currentPrice: string;
  secondaryLabel: string;
  secondaryValue: string;
  avgTarget: number;
  projectionStartIndex: number;
  todayIndex: number;
}

export function PriceTargetCard({
  data,
  currentPrice,
  secondaryLabel,
  secondaryValue,
  avgTarget,
  projectionStartIndex,
  todayIndex,
}: PriceTargetCardProps) {
  const projectionStartDate = data[projectionStartIndex]?.date ?? "";
  const todayDate = data[todayIndex]?.date ?? "";
  const lastDate = data[data.length - 1]?.date ?? "";

  return (
    <Card>
      <SectionHeader title="Price target" />

      {/* Sub-header metrics */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-sm text-text-secondary">Current price</span>
          <span className="ml-2 text-sm font-semibold text-text-primary">
            {currentPrice}
          </span>
        </div>
        <div>
          <span className="text-sm text-text-secondary">{secondaryLabel}</span>
          <span className="ml-2 text-sm font-semibold text-text-primary">
            {secondaryValue}
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[280px] -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 60, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#6366F1" stopOpacity={0.01} />
              </linearGradient>
            </defs>

            {/* Faint vertical dashed gridlines */}
            <CartesianGrid
              horizontal={false}
              vertical={true}
              strokeDasharray="3 3"
              stroke="#E6E6EA"
            />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9797A3" }}
              interval="preserveStartEnd"
              tickFormatter={(value: string) => {
                const parts = value.split(" ");
                return parts[0] ?? value;
              }}
            />

            <YAxis
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9797A3" }}
              domain={["dataMin - 10", "dataMax + 15"]}
              tickCount={5}
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
              formatter={(value: number) => [`$${value}`, "Price"]}
            />

            {/* Shaded projection region */}
            <ReferenceArea
              x1={projectionStartDate}
              x2={lastDate}
              fill="#6366F1"
              fillOpacity={0.04}
              stroke="none"
            />

            {/* Average target dashed line */}
            <ReferenceLine
              y={avgTarget}
              stroke="#6366F1"
              strokeDasharray="4 4"
              strokeWidth={1.5}
              label={{
                value: `Avg Target $${avgTarget}`,
                position: "right",
                fill: "#FFFFFF",
                fontSize: 11,
                fontWeight: 600,
                offset: 0,
              }}
            />

            {/* Today marker */}
            <ReferenceLine
              x={todayDate}
              stroke="#9797A3"
              strokeWidth={1}
              strokeDasharray="3 3"
            />

            {/* Price area */}
            <Area
              type="monotone"
              dataKey="price"
              stroke="#6366F1"
              strokeWidth={2}
              fill="url(#priceGradient)"
              dot={false}
              activeDot={{
                r: 5,
                fill: "#FFFFFF",
                stroke: "#6366F1",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Floating target badge — positioned absolutely */}
        <div className="relative">
          <div
            className="absolute bg-text-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg"
            style={{
              bottom: "130px",
              right: "16px",
            }}
          >
            Avg Target ${avgTarget}
          </div>
        </div>
      </div>
    </Card>
  );
}
