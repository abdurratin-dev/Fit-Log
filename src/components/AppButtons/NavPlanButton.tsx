import { WorkOutContext } from "@/context/workOutContext";
import React, { useContext } from "react";

const NavPlanButton = () => {
  const workOutDataSheard = useContext(WorkOutContext);
  const { plan } = workOutDataSheard;
  return (
    <button className="text-white font-bold py-2 sm:px-4 px-2 rounded flex items-center">
      Plan{" "}
      <span className="bg-[#C2F800] text-black font-bold ml-1 px-2 rounded-full h-fit">
        {plan.length}
      </span>
    </button>
  );
};

export default NavPlanButton;
