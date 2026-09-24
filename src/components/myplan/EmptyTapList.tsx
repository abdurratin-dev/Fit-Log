
export default function EmptyState({
  activeTab,
}: {
  activeTab: TabType;
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.08] bg-[#0d1014] px-6 text-center sm:min-h-[360px]">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#161a20]">
        <Dumbbell
          size={20}
          className="text-zinc-500"
        />
      </div>

      <h2 className="mt-5 text-base font-black uppercase tracking-wide">
        Nothing here yet
      </h2>

      <p className="mt-1 max-w-sm text-xs leading-5 text-zinc-500">
        {activeTab === "today"
          ? "Browse the library and add a lift to get today moving."
          : "Save some workouts from the library and they will appear here."}
      </p>

      <Link
        href="/workouts"
        className="mt-5 rounded-full bg-lime-400 px-5 py-2.5 text-xs font-bold text-black transition hover:bg-lime-300 active:scale-95"
      >
        Go to workouts
      </Link>
    </div>
  );
}