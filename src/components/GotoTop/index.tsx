import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function GotoTop() {
  const { pathname } = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: no need
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ cursor: "pointer" }}
      className="fixed bottom-8 right-8 rounded-full"
    >
      <img src="/icons/scroll.svg" alt="Top" />
    </button>
  );
}
