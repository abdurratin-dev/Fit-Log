import Image from "next/image";
import { Clock3, Flame, Star, Dumbbell } from "lucide-react";
import { IWorkOutDataType } from "@/types/workOutDataType";
import Link from "next/link";
import { Suspense } from "react";
import WorkoutCardSkeleton from "../skeleton/WorkoutCardSkeleton";

interface WorkoutCardProps {
  workout: IWorkOutDataType;
}

const WorkOutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Suspense fallback={<WorkoutCardSkeleton />}>
      <Link href={`/${workout.id}`}>
        <div className="group w-full max-w-md overflow-hidden rounded-3xl border border-[#222630] bg-[#15171d] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-2xl hover:shadow-black/40">
          {/* Image */}
          <div className="h-56 w-full overflow-hidden sm:h-64">
            <Image
              src={workout.image}
              alt={workout.name}
              height={500}
              width={500}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 420px"
            />

            {/* Image overlay */}
            <div className="inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

            {/* Difficulty */}
            <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              {workout.difficulty}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">
            {/* Muscle groups */}
            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle, index) => (
                <span
                  key={`${muscle}-${index}`}
                  className="rounded-full bg-lime-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="line-clamp-2 text-2xl font-black uppercase tracking-tight text-white sm:text-[26px]">
              {workout.name}
            </h2>

            {/* Equipment */}
            <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
              <Dumbbell size={16} />
              <span>{workout.equipment}</span>
            </div>

            {/* Description */}
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-500">
              {workout.description}
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl border border-zinc-800 bg-[#111216] p-2 sm:grid-cols-4">
              {/* Duration */}
              <div className="flex items-center gap-2 rounded-xl px-2 py-2.5">
                <Clock3 size={18} className="shrink-0 text-zinc-400" />

                <div>
                  <p className="text-xs text-zinc-500">Time</p>
                  <p className="text-sm flex gap-1 font-semibold text-zinc-200">
                    <span>{workout.duration}</span> min
                  </p>
                </div>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-2 rounded-xl px-2 py-2.5">
                <Flame size={18} className="shrink-0 text-orange-400" />

                <div>
                  <p className="text-xs text-zinc-500">Calories</p>
                  <p className="text-sm font-semibold text-zinc-200">
                    {workout.caloriesBurned}
                  </p>
                </div>
              </div>
              {/* Rating */}
              <div className="flex items-center gap-2 rounded-xl px-2 py-2.5">
                <Star
                  size={18}
                  className="shrink-0 fill-yellow-400 text-yellow-400"
                />

                <div>
                  <p className="text-xs text-zinc-500">Rating</p>
                  <p className="text-sm font-semibold text-zinc-200">
                    {workout.rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Suspense>
  );
};

export default WorkOutCard;
