export interface StatItem {
  id: string;
  label: string;
  value: string;
  deltaPercent: number;
  color: string;
}

export interface PriceTargetPoint {
  date: string;
  price: number;
}

export interface AnalystRatingRow {
  label: string;
  count: number;
}

export interface EarningsPoint {
  quarter: string;
  estimatedEps: number;
  actualEps?: number;
}
