const WorkoutListSkeleton = () => {
  return (
    <div className="group w-full rounded-2xl border border-white/10 bg-[#11141a] p-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] sm:p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

        {/* Image Skeleton */}
        <div className="h-50 w-full shrink-0 animate-pulse overflow-hidden rounded-xl bg-zinc-800 sm:h-20 sm:w-28" />

        {/* Content */}
        <div className="min-w-0 flex-1 animate-pulse">

          {/* Category */}
          <div className="mb-2 h-3 w-20 rounded bg-zinc-800" />

          {/* Title */}
          <div className="h-5 w-3/4 rounded bg-zinc-800 sm:w-1/2" />

          {/* Stats */}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">

            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <div className="h-3.5 w-3.5 rounded-full bg-zinc-800" />
              <div className="h-3 w-8 rounded bg-zinc-800" />
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <div className="h-3.5 w-3.5 rounded-full bg-zinc-800" />
              <div className="h-3 w-10 rounded bg-zinc-800" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <div className="h-3.5 w-3.5 rounded-full bg-zinc-800" />
              <div className="h-3 w-8 rounded bg-zinc-800" />
            </div>

          </div>
        </div>

        {/* Actions */}
        <div className="flex w-full gap-2 sm:w-auto sm:shrink-0 animate-pulse">

          {/* View Details Skeleton */}
          <div className="h-10 flex-1 rounded-full bg-zinc-800 sm:w-32 sm:flex-none" />

          {/* Complete Button Skeleton */}
          <div className="h-10 w-24 rounded-full bg-zinc-800" />

        </div>

      </div>
    </div>
  );
};

export default WorkoutListSkeleton;