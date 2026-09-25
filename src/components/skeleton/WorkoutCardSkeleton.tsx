const WorkoutCardSkeleton = () => {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-3xl border border-[#222630] bg-[#15171d] shadow-xl shadow-black/20">
      
      {/* Image Skeleton */}
      <div className="h-56 w-full animate-pulse bg-zinc-800 sm:h-64" />

      {/* Content */}
      <div className="p-5 sm:p-6 animate-pulse">

        {/* Muscle Groups */}
        <div className="mb-5 flex flex-wrap gap-2">
          <div className="h-7 w-20 rounded-full bg-zinc-800" />
          <div className="h-7 w-24 rounded-full bg-zinc-800" />
          <div className="h-7 w-16 rounded-full bg-zinc-800" />
        </div>

        {/* Title */}
        <div className="h-8 w-3/4 rounded-lg bg-zinc-800" />

        {/* Equipment */}
        <div className="mt-3 flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-zinc-800" />
          <div className="h-4 w-28 rounded-md bg-zinc-800" />
        </div>

        {/* Description */}
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded-md bg-zinc-800" />
          <div className="h-4 w-4/5 rounded-md bg-zinc-800" />
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl border border-zinc-800 bg-[#111216] p-2 sm:grid-cols-4">
          
          {/* Time */}
          <div className="flex items-center gap-2 rounded-xl px-2 py-2.5">
            <div className="h-[18px] w-[18px] rounded-full bg-zinc-800" />
            <div className="space-y-1.5">
              <div className="h-3 w-8 rounded bg-zinc-800" />
              <div className="h-4 w-12 rounded bg-zinc-800" />
            </div>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2 rounded-xl px-2 py-2.5">
            <div className="h-[18px] w-[18px] rounded-full bg-zinc-800" />
            <div className="space-y-1.5">
              <div className="h-3 w-14 rounded bg-zinc-800" />
              <div className="h-4 w-10 rounded bg-zinc-800" />
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 rounded-xl px-2 py-2.5">
            <div className="h-[18px] w-[18px] rounded-full bg-zinc-800" />
            <div className="space-y-1.5">
              <div className="h-3 w-12 rounded bg-zinc-800" />
              <div className="h-4 w-10 rounded bg-zinc-800" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutCardSkeleton;