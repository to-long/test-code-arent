import type React from "react";
import { CallToActionButton } from "@/components/CallToActionButton";
import { MyDiary } from "@/features/my-record/MyDiary";

export default function MyRecordPage(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4">
        <MyDiary />
        <CallToActionButton className="mt-6 mb-16 mx-auto">
          自分の日記をもっと見る
        </CallToActionButton>
      </div>
    </div>
  );
}
