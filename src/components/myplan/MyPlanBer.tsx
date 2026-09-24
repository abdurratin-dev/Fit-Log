"use client";
import { TabsAndStateContext } from "@/context/TabsAndStateContext";
import { WorkOutContext } from "@/context/workOutContext";
import React, { useContext, useState } from "react";
import FilterBer from "./FilterBer";

const MyPlanBer = () => {
  const workOutDataSheard = useContext(WorkOutContext);
  const tabsAndStatsSheard = useContext(TabsAndStateContext);
  const { plan, saved } = workOutDataSheard;
  const { stats, setStats } = tabsAndStatsSheard;
  const planMinutes = plan.reduce((acc, item) => acc + item.duration, 0);
  const planCalories = plan.reduce((acc, item) => acc + item.caloriesBurned, 0);
  const savedMinutes = saved.reduce((acc, item) => acc + item.duration, 0);
  const savedCalories = saved.reduce(
    (acc, item) => acc + item.caloriesBurned,
    0,
  );

  const planStats = (
    <>
      <div>
        <p className="text-sm text-gray-400">Exercises</p>
        <h3 className="text-3xl font-bold text-lime-400">{plan.length}</h3>
      </div>
      <div>
        <p className="text-sm text-gray-400">Mintues</p>
        <h3 className="text-3xl font-bold">{planMinutes}</h3>
      </div>
      <div>
        <p className="text-sm text-gray-400">Calories</p>
        <h3 className="text-3xl font-bold">{planCalories}</h3>
      </div>
    </>
  );

  const savedStats = (
    <>
      <div>
        <p className="text-sm text-gray-400">Exercises</p>
        <h3 className="text-3xl font-bold text-lime-400">{saved.length}</h3>
      </div>
      <div>
        <p className="text-sm text-gray-400">Mintues</p>
        <h3 className="text-3xl font-bold">{savedMinutes}</h3>
      </div>
      <div>
        <p className="text-sm text-gray-400">Calories</p>
        <h3 className="text-3xl font-bold">{savedCalories}</h3>
      </div>
    </>
  );
  return (
    <div>
      <div>
        {/*HEADER */}
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
            My Plan
          </h1>
          <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        {/* STATS */}
        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-xl border border-white/[0.07] bg-[#11141a] sm:grid-cols-3 py-13 pl-9">
          {stats ? savedStats : planStats}
        </div>
        {/*Tabs and stats Contriler*/}
        <FilterBer />
      </div>
    </div>
  );
};

export default MyPlanBer;
