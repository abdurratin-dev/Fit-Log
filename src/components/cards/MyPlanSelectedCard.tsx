"use client";

import Image from "next/image";
import { Clock3, Flame, Star, ArrowRight } from "lucide-react";
import { useContext, useState } from "react";
import { WorkOutContext } from "@/context/workOutContext";
import { IWorkOutDataType } from "@/types/workOutDataType";
import Link from "next/link";

export default function MyPlanSelectedCard() {
  const workOutDataSheard = useContext(WorkOutContext);
  const { plan, setPlan } = workOutDataSheard;
  const [completed,setCompleted] = useState(false);
  const onComplete = () => {
    setCompleted(true);
  }
  return (
    <div className="mt-5 grid gap-5">
      {plan.map((workOut: IWorkOutDataType, index: number) => {
        return (
          <div
            key={index}
            className="group w-full rounded-2xl border border-white/10 bg-[#11141a] p-3 sm:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Image */}
              <div className="h-50 w-full shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-28">
                <Image
                  src={workOut.image}
                  alt={workOut.name}
                  width={500}
                  height={500}
                  className=" object-cover transition-transform duration-500 group-hover:scale-105"/>

                {/* Image overlay */}
                <div className="inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                {/* Category */}
                <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                  {workOut.equipment}
                </p>

                {/* Title */}
                <h3 className="truncate text-base font-bold text-white sm:text-lg">
                  {workOut.name}
                </h3>

                {/* Stats */}
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5 text-lime-400" />
                    <span>{workOut.duration}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Flame className="h-3.5 w-3.5 text-yellow-400" />
                    <span>{workOut.caloriesBurned}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    <span>{workOut.rating}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex w-full gap-2 sm:w-auto sm:shrink-0">
                {/* View Details */}
                <Link href={`/${workOut.id}`} className=" flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-zinc-300 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:flex-none">
                  <span>View Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                {/* Complete */}
                <button
                  onClick={onComplete}
                  className={` flex-1 rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:flex-none ${ completed ? "bg-lime-400/20 text-lime-400" : "bg-lime-400 text-black hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]" }`}>
                  {completed ? "Completed ✓" : "Mark as Done"} 
                </button>
               
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
