export function GotoTop() {
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
