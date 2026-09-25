import { LuDumbbell } from "react-icons/lu";

export default function NotFound() {
  return (
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
      </div>
    </main>
  );
}
