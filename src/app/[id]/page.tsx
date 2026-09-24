import Image from "next/image";
import { IWorkOutDataType } from "@/types/workOutDataType";
import { getWorkOutData } from "@/lib/workOutDataFetch";
import DetailsPlanButton from "@/components/AppButtons/DetailsPlanButton";
import DetailsSavedButton from "@/components/AppButtons/DetailsSavedButton";

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
  return (
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
              {workOut?.muscleGroups.map((muscle: string[], index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-7 overflow-hidden rounded-xl border border-white/5 bg-[#15171d]">
            <Stat label="Equipment" value={workOut?.equipment} />
            <Stat label="Difficulty" value={workOut?.difficulty} />
            <Stat label="Sets" value={workOut?.sets} />
            <Stat label="Reps" value={workOut?.reps} />
            <Stat label="Duration" value={`${workOut?.duration} min`} />
            <Stat label="Calories" value={`${workOut?.caloriesBurned} kcal`} />
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
                    <span className="shrink-0 text-zinc-500">{index + 1}.</span>
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
