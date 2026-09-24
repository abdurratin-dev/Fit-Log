import Image from "next/image";
import Link from "next/link";
import BennerImg from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full container overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 flex justify-between items-center gap-6 md:gap-10 lg:gap-20 md:flex-row flex-col">
        {/* Content */}
        <div className="flex flex-col gap-5 max-w-full md:max-w-[58%] lg:max-w-[55%]">
          {/* Small heading */}
          <p className=" text-xs font-bold tracking-wide text-lime-400 sm:mb-5">
            WORKOUT LIBRARY
          </p>
          {/* Main heading */}
          <h1 className="max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px]">
            Train With Intent. Log Every Set.
          </h1>

          {/* Description */}
          <p
            className=" max-w-lg text-sm leading-6 text-slate-400 sm:mt-5 sm:text-base ">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          {/* Button */}
          <Link
            href="/workouts"
            className=" mt-5 inline-flex items-center justify-center rounded-md bg-lime-400 px-5 py-3 text-xs font-bold uppercase text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/20 active:translate-y-0 sm:mt-6 md:w-fit"
          >
            Browse Workouts
          </Link>
        </div>
        {/* Workout Image */}
        <div
          className=" w-[230px] sm:w-[260px] md:block md:w-[280px] lg:right-6 lg:w-[320px] xl:right-10 xl:w-[350px] md:mt-0 mt-5">
          <Image
            src={BennerImg}
            alt="Workout illustration"
            width={500}
            height={500}
            priority
            className=" h-auto w-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.45)] "/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
