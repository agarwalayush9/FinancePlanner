import type {
  StatItem,
  PriceTargetPoint,
  AnalystRatingRow,
  EarningsPoint,
} from "@/types/dashboard";

export const statsData: StatItem[] = [
  {
    id: "market-cap",
    label: "Market cap",
    value: "$3.28T",
    deltaPercent: 4.72,
    color: "indigo",
  },
  {
    id: "ev-sales",
    label: "EV/Sales",
    value: "31.68",
    deltaPercent: -1.24,
    color: "violet",
  },
  {
    id: "price-sales",
    label: "Price/Sales",
    value: "30.96",
    deltaPercent: 2.11,
    color: "fuchsia",
  },
  {
    id: "fy-ttm",
    label: "FY TTM",
    value: "$130.5B",
    deltaPercent: 5.87,
    color: "blue",
  },
  {
    id: "eps",
    label: "EPS",
    value: "$2.94",
    deltaPercent: 3.46,
    color: "cyan",
  },
  {
    id: "gross-margin",
    label: "Gross margin",
    value: "76.8%",
    deltaPercent: 1.02,
    color: "green",
  },
  {
    id: "profit-margin",
    label: "Profit margin",
    value: "56.4%",
    deltaPercent: -0.58,
    color: "amber",
  },
  {
    id: "div-yield",
    label: "Div yield",
    value: "0.02%",
    deltaPercent: 0.0,
    color: "orange",
  },
];

export const priceTargetData: PriceTargetPoint[] = [
  { date: "Jan 2025", price: 120 },
  { date: "Feb 2025", price: 115 },
  { date: "Mar 2025", price: 108 },
  { date: "Apr 2025", price: 98 },
  { date: "May 2025", price: 105 },
  { date: "Jun 2025", price: 118 },
  { date: "Jul 2025", price: 125 },
  { date: "Aug 2025", price: 132 },
  { date: "Sep 2025", price: 128 },
  { date: "Oct 2025", price: 135 },
  { date: "Nov 2025", price: 140 },
  { date: "Dec 2025", price: 138 },
  { date: "Jan 2026", price: 145 },
  { date: "Feb 2026", price: 150 },
  { date: "Mar 2026", price: 155 },
  { date: "Apr 2026", price: 160 },
  { date: "May 2026", price: 158 },
  { date: "Jun 2026", price: 165 },
];

export const priceTargetMeta = {
  currentPrice: "$135.40",
  secondaryLabel: "Gross margin",
  secondaryValue: "76.8%",
  avgTarget: 152,
  projectionStartIndex: 12,
  todayIndex: 11,
};

export const analystRatingData: AnalystRatingRow[] = [
  { label: "Strong buy", count: 48 },
  { label: "Buy", count: 16 },
  { label: "Neutral", count: 9 },
  { label: "Sell", count: 3 },
  { label: "Strong sell", count: 3 },
];

export const earningsData: EarningsPoint[] = [
  { quarter: "Q2 2025", estimatedEps: 0.84, actualEps: 0.91 },
  { quarter: "Q3 2025", estimatedEps: 1.09, actualEps: 1.17 },
  { quarter: "Q4 2025", estimatedEps: 1.35, actualEps: 1.41 },
  { quarter: "Q1 2026", estimatedEps: 1.59, actualEps: 1.65 },
];

export const earningsMeta = {
  estimatedLabel: "Estimated EPS",
  estimatedValue: "$1.59",
  actualLabel: "Actual EPS",
  actualValue: "$1.65",
};
