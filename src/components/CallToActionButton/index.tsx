import type { PropsWithChildren } from "react";

export function CallToActionButton({
  children,
  className = "",
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      className={`w-[296px] h-[56px] flex items-center justify-center bg-(image:--gradient-primary-300-400) text-white text-[18px] leading-[26px] rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}
