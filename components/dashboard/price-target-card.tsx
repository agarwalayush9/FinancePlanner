"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ReferenceArea,
  ReferenceDot,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import type { PriceTargetPoint } from "@/types/dashboard";

interface PriceTargetCardProps {
  className?: string;
  data: PriceTargetPoint[];
  currentPrice: string;
  secondaryLabel: string;
  secondaryValue: string;
  avgTarget: number;
  projectionStartIndex: number;
  todayIndex: number;
}

/* Custom SVG label rendered beside the avg-target dashed line */
const CustomTargetLabel = ({ viewBox, value }: any) => {
  if (!viewBox) return null;
  const x = (viewBox.x ?? 0) + (viewBox.width ?? 0) - 78;
  const y = viewBox.y ?? 0;
  const formattedValue = `$${Number(value).toLocaleString()}`;

  return (
    <g>
      {/* Dark rounded rectangle */}
      <rect
        x={x}
        y={y - 20}
        width={78}
        height={40}
        rx={8}
        ry={8}
        fill="#18181B"
      />
      {/* "Avg Target" label */}
      <text
        x={x + 39}
        y={y - 3}
        fill="#A1A1AA"
        fontSize={10}
        fontWeight={500}
        textAnchor="middle"
      >
        Avg Target
      </text>
      {/* Dollar value */}
      <text
        x={x + 39}
        y={y + 14}
        fill="#FFFFFF"
        fontSize={12}
        fontWeight={700}
        textAnchor="middle"
      >
        {formattedValue}
      </text>
    </g>
  );
};

/* Custom Y-Axis tick to ensure absolute right alignment */
const CustomYAxisTick = ({ x, y, payload }: any) => {
  // When margin.right=110, Recharts sets x ≈ W - 99.
  // We add 99 to push the text exactly to the right edge (W).
  return (
    <text x={x + 30} y={y} dy={4} textAnchor="end" fill="#9797A3" fontSize={12}>
      {payload.value}
    </text>
  );
};

export function PriceTargetCard({
  data,
  currentPrice,
  secondaryLabel,
  secondaryValue,
  avgTarget,
  projectionStartIndex,
  todayIndex,
  className,
}: PriceTargetCardProps) {
  const lastIndex = data.length - 1;
  const lastPrice = data[lastIndex]?.price ?? 0;

  // Map data to include a numeric index for XAxis
  const chartData = data.map((d, i) => ({ ...d, idx: i }));

  // 9 evenly spaced ticks → 8 columns
  const xTicks: number[] = [];
  for (let i = 0; i <= 8; i++) {
    xTicks.push(Math.round((i / 8) * lastIndex));
  }

  return (
    <Card className={className}>
      {/* Section header with divider */}
      <div className="border-b border-[#E5E5EA] pb-3 mb-0">
        <SectionHeader title="Price target" actionClassName="!rounded-[10%]" />
      </div>

      {/* Sub-header metrics row */}
      <div className="flex items-center justify-between pt-4 pb-2">
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
      <div className="h-[300px] -mb-6 mt-2 [&_.recharts-surface]:overflow-visible">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 16, right: 0, bottom: 10, left: 0 }}
          >
            <defs>
              <linearGradient id="projectionFade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={0} />

                <stop offset="100%" stopColor="#6366F1" stopOpacity={0.32} />
              </linearGradient>
            </defs>

            {/* Horizontal grid lines only (4 rows from YAxis ticks) */}
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeDasharray="3 3"
              stroke="#D1D1D6"
              strokeOpacity={0.5}
            />

            {/* 9 manual vertical dashed lines → 8 uniform columns with both borders */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <ReferenceLine
                key={`vgrid-${i}`}
                x={Math.round((i / 8) * lastIndex)}
                stroke="#D1D1D6"
                strokeDasharray="3 3"
                strokeOpacity={0.5}
              />
            ))}

            {/* Numeric X axis — hidden labels */}
            <XAxis
              type="number"
              dataKey="idx"
              domain={[0, lastIndex]}
              axisLine={false}
              tickLine={false}
              tick={false}
              ticks={xTicks}
              allowDataOverflow={false}
            />

            {/* Y axis on right — 5 evenly spaced ticks = 4 uniform rows */}
            <YAxis
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={<CustomYAxisTick />}
              domain={[100, 300]}
              ticks={[100, 150, 200, 250, 300]}
              width={40}
            />

            {/* Purple-tinted background with fade over the entire chart area */}
            <ReferenceArea
              x1={0}
              x2={lastIndex - 18}
              fill="url(#projectionFade)"
              stroke="none"
              ifOverflow="extendDomain"
            />

            {/* Average target horizontal dashed line */}
            <ReferenceLine
              segment={[{ x: 0, y: avgTarget }, { x: lastIndex, y: avgTarget }]}
              stroke="#1C1C1E"
              strokeDasharray="6 4"
              strokeWidth={1}
              strokeOpacity={0.5}
              label={<CustomTargetLabel value={avgTarget * 11.25} />}
            />

            {/* Solid vertical indigo line at chart right edge */}
            <ReferenceLine
              x={lastIndex - 18}
              stroke="#6366F1"
              strokeWidth={2.5}
              strokeOpacity={0.9}
            />

            {/* The price line */}
            <Line
              type="monotone"
              dataKey="price"
              stroke="#6366F1"
              strokeWidth={2}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
              data={chartData.slice(0, lastIndex - 18 + 1)}
            />

            {/* White dot at the line's endpoint */}
            <ReferenceDot
              x={lastIndex - 18}
              y={chartData[lastIndex - 18]?.price ?? lastPrice}
              r={5}
              fill="#FFFFFF"
              stroke="#6366F1"
              strokeWidth={2}
              isFront={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
