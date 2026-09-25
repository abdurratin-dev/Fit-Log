const WorkoutDetailsSkeleton = () => {
  return (
    <div className="w-full overflow-hidden text-white shadow-2xl ring-1 ring-white/5 container mx-auto px-4 py-4">
      <div className="grid lg:grid-cols-[1fr_1.05fr]">

        {/* Image Skeleton */}
        <div className="min-h-[320px] lg:min-h-[600px]">
          <div className="h-full min-h-[320px] w-full animate-pulse rounded-3xl bg-zinc-800 lg:min-h-[600px]" />
        </div>

        {/* Details */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-10 animate-pulse">

          {/* Header */}
          <div>
            {/* Title */}
            <div className="h-9 w-3/4 rounded-lg bg-zinc-800 sm:h-10" />

            {/* Description */}
            <div className="mt-4 max-w-xl space-y-2">
              <div className="h-4 w-full rounded bg-zinc-800" />
              <div className="h-4 w-11/12 rounded bg-zinc-800" />
              <div className="h-4 w-2/3 rounded bg-zinc-800" />
            </div>

            {/* Muscle Groups */}
            <div className="mt-5 flex flex-wrap gap-2">
              <div className="h-7 w-20 rounded-full bg-zinc-800" />
              <div className="h-7 w-24 rounded-full bg-zinc-800" />
              <div className="h-7 w-16 rounded-full bg-zinc-800" />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-7 overflow-hidden rounded-xl border border-white/5 bg-[#15171d]">

            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <div className="h-4 w-24 rounded bg-zinc-800" />
              <div className="h-4 w-28 rounded bg-zinc-800" />
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <div className="h-4 w-24 rounded bg-zinc-800" />
              <div className="h-4 w-20 rounded bg-zinc-800" />
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <div className="h-4 w-12 rounded bg-zinc-800" />
              <div className="h-4 w-10 rounded bg-zinc-800" />
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <div className="h-4 w-12 rounded bg-zinc-800" />
              <div className="h-4 w-10 rounded bg-zinc-800" />
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <div className="h-4 w-20 rounded bg-zinc-800" />
              <div className="h-4 w-16 rounded bg-zinc-800" />
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <div className="h-4 w-20 rounded bg-zinc-800" />
              <div className="h-4 w-20 rounded bg-zinc-800" />
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-4 py-4">
              <div className="h-4 w-16 rounded bg-zinc-800" />
              <div className="h-4 w-16 rounded bg-zinc-800" />
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-7">

            {/* Heading */}
            <div className="h-5 w-28 rounded bg-zinc-800" />

            {/* Instructions */}
            <ol className="mt-4 space-y-4">

              <li className="flex gap-3">
                <div className="h-4 w-4 shrink-0 rounded bg-zinc-800" />
                <div className="h-4 w-full rounded bg-zinc-800" />
              </li>

              <li className="flex gap-3">
                <div className="h-4 w-4 shrink-0 rounded bg-zinc-800" />
                <div className="h-4 w-11/12 rounded bg-zinc-800" />
              </li>

              <li className="flex gap-3">
                <div className="h-4 w-4 shrink-0 rounded bg-zinc-800" />
                <div className="h-4 w-10/12 rounded bg-zinc-800" />
              </li>

              <li className="flex gap-3">
                <div className="h-4 w-4 shrink-0 rounded bg-zinc-800" />
                <div className="h-4 w-9/12 rounded bg-zinc-800" />
              </li>

            </ol>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            {/* Plan Button */}
            <div className="h-11 w-full rounded-xl bg-zinc-800 sm:w-40" />

            {/* Save Button */}
            <div className="h-11 w-full rounded-xl bg-zinc-800 sm:w-40" />

          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsSkeleton;