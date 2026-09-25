import { TabsAndStateContext } from "@/context/TabsAndStateContext";
import React, { useContext, useState } from "react";
import MyPlanSelectedCard from "../cards/MyPlanSelectedCard";
import SavedSelectedCard from "../cards/SavedSelectedCard";
import { WorkOutContext } from "@/context/workOutContext";
import { IWorkOutDataType } from "@/types/workOutDataType";

const FilterBer = () => {
  const tabsAndStatsSheard = useContext(TabsAndStateContext);
  const workOutDataSheard = useContext(WorkOutContext);
  const { plan, saved } = workOutDataSheard;
  const { stats, setStats } = tabsAndStatsSheard;
  const [sortBy, setSortBy] = useState<"rating" | "calories" | "minute">(
    "rating",
  );

  const handleSortBy = (item : IWorkOutDataType[]) => {
    const allSort = [...item];
    if(sortBy === 'rating'){
      allSort.sort((a,b) => b.rating - a.rating);
    }else if(sortBy === 'calories') {
      allSort.sort((a,b) => b.caloriesBurned - a.caloriesBurned);
    }else if(sortBy === 'minute'){
      allSort.sort((a,b) => b.duration - a.duration);
    }
    return allSort;
  };

  const handleTodaysPlan = () => {
    setStats(false);
  };
  const handleSaved = () => {
    setStats(true);
  };

  const planSort = handleSortBy(plan);
  const savedSort = handleSortBy(saved);
  return (
    <>
      {/* ================= FILTER BAR ================= */}
      <div className="mt-6 flex flex-col gap-3 items-center justify-center sm:flex-row sm:items-center sm:justify-between">
        {/*Tabs*/}
        <div className="flex w-fit rounded-lg border border-white/[0.06] bg-[#11141a] p-1">
          <button
            type="button"
            onClick={handleTodaysPlan}
            className={`rounded-md px-5 py-2 text-xs font-medium transition-all duration-200 ${!stats ? "bg-white/[0.08] text-white shadow-sm" : "text-gray-500 hover:text-gray-300"}`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={handleSaved}
            className={`rounded-md px-5 py-2 text-xs font-medium transition-all duration-200 ${stats ? "bg-white/[0.08] text-white shadow-sm" : "text-gray-500 hover:text-gray-300"}`}
          >
            Saved
          </button>
        </div>
        {/* Sort */}
        <div className="w-full sm:w-21">
          <select
            name="Sort by"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "rating" | "calories" | "minute")
            }
            className="flex h-9 w-full items-center justify-between gap-4 rounded-lg border border-white/[0.07] bg-[#11141a] px-3 text-xs text-zinc-400 transition hover:border-white/10 sm:w-auto"
          >
            <option disabled={true}>Sort by</option>
            <option value="rating">Rating</option>
            <option value="calories">Calories</option>
            <option value="minute">Minute</option>
          </select>
        </div>
      </div>
      {stats ? <SavedSelectedCard savedSort={savedSort} /> : <MyPlanSelectedCard planSort={planSort} />}
    </>
  );
};

export default FilterBer;
