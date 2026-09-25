import Hero from "@/components/home/Hero";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full container mx-auto mt-5 px-4">
        <h3 className="text-xl font-bold mb-2 uppercase text-white">
          The Library
        </h3>
        <p className="text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <WorkoutLibrary />
    </>
  );
}
