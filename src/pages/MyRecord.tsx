import type React from "react";
import { CallToActionButton } from "@/components/CallToActionButton";
import { Recommend } from "@/features/my-record/components/Recommend";

export default function MyRecord(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4">
        <Recommend />
        <CallToActionButton className="mt-6 mb-16 mx-auto">
          コラムをもっと見る
        </CallToActionButton>
      </div>
    </div>
  );
}
