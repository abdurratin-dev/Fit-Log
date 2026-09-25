import Image from "next/image";
import { IWorkOutDataType } from "@/types/workOutDataType";
import { getWorkOutData } from "@/lib/workOutDataFetch";
import DetailsPlanButton from "@/components/AppButtons/DetailsPlanButton";
import DetailsSavedButton from "@/components/AppButtons/DetailsSavedButton";
import { Suspense } from "react";
import WorkoutDetailsSkeleton from "@/components/skeleton/WorkoutDetailsSkeleton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LuDumbbell } from "react-icons/lu";

interface WorkoutDetailsCardProps {
  params: Promise<{ id: string }>;
}

export default async function WorkoutDetailsCard({
  params,
}: WorkoutDetailsCardProps) {
  const { id } = await params;
  const workOuts = await getWorkOutData();
  const workOut = workOuts.find(
    (item: IWorkOutDataType) => item.id === Number(id),
  );
  if (!workOut) {
    return(
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#0C0D10] px-4 py-16">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/[0.07] bg-[#11141a] px-6 py-14 text-center shadow-2xl sm:px-10 sm:py-20">
        {/* Glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-lime-400/20 blur-3xl" />
        {/* Icon */}
        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10">
          <LuDumbbell className="h-8 w-8 text-lime-400" />
        </div>
        {/* 404 */}
        <p className="relative mt-8 text-7xl font-black leading-none tracking-tight text-lime-400 sm:text-9xl">
          404
        </p>
        {/* Heading */}
        <h1 className="relative mt-5 text-2xl font-black uppercase tracking-tight text-white sm:text-4xl">
          Workout Not Found
        </h1>
        {/* Description */}
        <p className="relative mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-500 sm:text-base">
          {`Looks like this workout took a rest day. The page you're looking for
          doesn't exist or may have been removed.`}
        </p>
        {/* Button */}
        <div className="relative mt-8 flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 text-sm font-bold text-black transition-all duration-200 hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/10"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Workouts
          </Link>
        </div>
      </div>
    </main>
    )
  }
  return (
    <Suspense fallback={<WorkoutDetailsSkeleton />}>
      <article className="w-full overflow-hidden text-white shadow-2xl ring-1 ring-white/5 container mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-[1fr_1.05fr]">
          {/* Image */}
          <div className="min-h-[320px] lg:min-h-[600px]">
            <Image
              src={workOut?.image}
              alt={workOut?.name}
              width={500}
              height={500}
              className="w-full rounded-3xl"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                {workOut?.name}
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
                {workOut?.description}
              </p>

              {/* Muscle groups */}
              <div className="mt-5 flex flex-wrap gap-2">
                {workOut?.muscleGroups.map(
                  (muscle: string[], index: number) => (
                    <span
                      key={index}
                      className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                    >
                      {muscle}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-7 overflow-hidden rounded-xl border border-white/5 bg-[#15171d]">
              <Stat label="Equipment" value={workOut?.equipment} />
              <Stat label="Difficulty" value={workOut?.difficulty} />
              <Stat label="Sets" value={workOut?.sets} />
              <Stat label="Reps" value={workOut?.reps} />
              <Stat label="Duration" value={`${workOut?.duration} min`} />
              <Stat
                label="Calories"
                value={`${workOut?.caloriesBurned} kcal`}
              />
              <Stat label="Rating" value={`★ ${workOut?.rating.toFixed(1)}`} />
            </div>

            {/* Instructions */}
            <div className="mt-7">
              <h2 className="text-sm font-extrabold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-3 space-y-3">
                {workOut?.instructions.map(
                  (instruction: string[], index: number) => (
                    <li
                      key={index}
                      className="flex gap-3 text-xs leading-5 text-zinc-400"
                    >
                      <span className="shrink-0 text-zinc-500">
                        {index + 1}.
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ),
                )}
              </ol>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DetailsPlanButton workOut={workOut} />
              <DetailsSavedButton workOut={workOut} />
            </div>
          </div>
        </div>
      </article>
    </Suspense>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 text-xs`}>
      <span className="font-medium uppercase tracking-wide text-zinc-500">
        {label}
      </span>
      <span className="font-semibold text-zinc-200">{value}</span>
    </div>
  );
}
