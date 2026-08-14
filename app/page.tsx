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
        <div className="py-6 space-y-6 pb-0 pr-0 pl-0 w-full" style={{ zoom: 1.1 }}>
          <StatsPanel className="mx-5" ticker="NVDA" stats={statsData} />

          <div className="border-y border-[#E5E5EA] bg-white shadow-sm">
            <PriceTargetCard
              className="border-0 shadow-none rounded-none border-b border-[#E5E5EA] pb-0"
              data={priceTargetData}
              currentPrice={priceTargetMeta.currentPrice}
              secondaryLabel={priceTargetMeta.secondaryLabel}
              secondaryValue={priceTargetMeta.secondaryValue}
              avgTarget={priceTargetMeta.avgTarget}
              projectionStartIndex={priceTargetMeta.projectionStartIndex}
              todayIndex={priceTargetMeta.todayIndex}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <AnalystRatingCard
                className="border-0 shadow-none rounded-none border-b lg:border-b-0 lg:border-r border-[#E5E5EA]"
                data={analystRatingData}
              />
              <EarningsCard
                className="border-0 shadow-none rounded-none"
                data={earningsData}
                estimatedLabel={earningsMeta.estimatedLabel}
                estimatedValue={earningsMeta.estimatedValue}
                actualLabel={earningsMeta.actualLabel}
                actualValue={earningsMeta.actualValue}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
