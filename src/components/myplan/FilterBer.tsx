import { TabsAbdStateContext } from "@/context/TabsAndStateContext";
import { ArrowDownUp, ChevronDown } from "lucide-react";
import React, { useContext } from "react";

const FilterBer = () => {
    const tabsAndStatsSheard = useContext(TabsAbdStateContext);
    const {stats,setStats} = tabsAndStatsSheard;
    const handleTodaysPlan = () => {
    setStats(false);
  };
  const handleSaved = () => {
    setStats(true);
  };
  return (
    <>
      {/* ================= FILTER BAR ================= */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/*Tabs*/}
        <div className="flex w-fit rounded-lg border border-white/[0.06] bg-[#11141a] p-1">
          <button
            type="button"
            onClick={handleTodaysPlan}
            className={`rounded-md px-5 py-2 text-xs font-medium transition-all duration-200 ${
              !stats
                ? "bg-white/[0.08] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={handleSaved}
            className={`rounded-md px-5 py-2 text-xs font-medium transition-all duration-200 ${
              stats
                ? "bg-white/[0.08] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Saved
          </button>
        </div>
        {/* Sort */}
        <div className="relative">
          <button
            type="button"
            className="flex h-9 w-full items-center justify-between gap-4 rounded-lg border border-white/[0.07] bg-[#11141a] px-3 text-xs text-zinc-400 transition hover:border-white/10 sm:w-auto"
          >
            <span className="flex items-center gap-2">
              <ArrowDownUp size={13} />
              Sort By
            </span>
            <span className="font-semibold text-zinc-200"></span>
            <ChevronDown size={14} className={`transition-transform`} />
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterBer;
