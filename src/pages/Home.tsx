import AchievementRate from "@/features/home/components/AchievementRate";
import WeightFatPercentageGraph from "@/features/home/components/WeightFatPercentageGraph";
import React from "react";

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <div className="flex max-w-[1280px] mx-auto">
        <div className="w-[42.18%] flex-shrink-0">
          <AchievementRate />
        </div>
        <div className="flex-1">
          <WeightFatPercentageGraph />
        </div>
      </div>
    </div>
  );
}
