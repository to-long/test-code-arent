import type React from "react";
import { CallToActionButton } from "@/components/CallToActionButton";
import { Column } from "@/features/column/components/Column";
import { Recommend } from "@/features/column/components/Recommend";

export default function ColumnPage(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4">
        <Recommend />
        <Column />
        <CallToActionButton className="mt-6 mb-16 mx-auto">
          コラムをもっと見る
        </CallToActionButton>
      </div>
    </div>
  );
}
