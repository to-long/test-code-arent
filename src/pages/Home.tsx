import type React from "react";
import AchievementRate from "@/features/home/components/AchievementRate";
import { ComboMenu } from "@/features/home/components/ComboMenu";
import { Records } from "@/features/home/components/Records";
import WeightFatPercentageGraph from "@/features/home/components/WeightFatPercentageGraph";

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-5 col-span-xs-12">
          <AchievementRate />
        </div>
        <div className="col-span-7 col-span-xs-12">
          <WeightFatPercentageGraph />
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <ComboMenu />
        <Records />
      </div>
    </div>
  );
}
