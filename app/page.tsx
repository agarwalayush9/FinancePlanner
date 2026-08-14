import { SideNav } from "@/components/layout/side-nav";
import { TopBar } from "@/components/layout/top-bar";
import { StatsPanel } from "@/components/dashboard/stats-panel";
import { PriceTargetCard } from "@/components/dashboard/price-target-card";
import { AnalystRatingCard } from "@/components/dashboard/analyst-rating-card";
import { EarningsCard } from "@/components/dashboard/earnings-card";
import {
  statsData,
  priceTargetData,
  priceTargetMeta,
  analystRatingData,
  earningsData,
  earningsMeta,
} from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-surface text-text-primary overflow-hidden">
      <SideNav />
      <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden m-[10px] bg-white rounded-[20px] border border-surface-border">
        <TopBar />
        <div className="px-[1px] md:px-[17px] py-6 space-y-6 max-w-7xl mx-auto w-full" style={{ zoom: 1.1 }}>
          <StatsPanel ticker="NVDA" stats={statsData} />

          <PriceTargetCard
            data={priceTargetData}
            currentPrice={priceTargetMeta.currentPrice}
            secondaryLabel={priceTargetMeta.secondaryLabel}
            secondaryValue={priceTargetMeta.secondaryValue}
            avgTarget={priceTargetMeta.avgTarget}
            projectionStartIndex={priceTargetMeta.projectionStartIndex}
            todayIndex={priceTargetMeta.todayIndex}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnalystRatingCard data={analystRatingData} />
            <EarningsCard
              data={earningsData}
              estimatedLabel={earningsMeta.estimatedLabel}
              estimatedValue={earningsMeta.estimatedValue}
              actualLabel={earningsMeta.actualLabel}
              actualValue={earningsMeta.actualValue}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
