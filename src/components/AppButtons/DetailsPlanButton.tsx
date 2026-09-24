"use client";
import { WorkOutContext } from "@/context/workOutContext";
import { IWorkOutDataType } from "@/types/workOutDataType";
import { Plus } from "lucide-react";
import { useContext } from "react";
import toast from "react-hot-toast";

interface IDetailsPlanButtonProps {
  workOut: IWorkOutDataType;
}
const DetailsPlanButton = ({ workOut }: IDetailsPlanButtonProps) => {
  const workOutDataSheard = useContext(WorkOutContext);
  const { plan, setPlan } = workOutDataSheard;
  const handlePlanButton = () => {
    if (plan.some((item) => item.id === workOut.id)) {
      toast.error(`${workOut.name} Alrady In Your Plan`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      setPlan([...plan, workOut]);
      toast.success(`${workOut.name} Added Your Plan`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  return (
    <button
      type="button"
      className="flex h-11 items-center justify-center gap-2 rounded-lg bg-lime-400 px-5 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/20 active:translate-y-0"
      onClick={handlePlanButton}
    >
      <Plus size={16} />
      Add to today&apos;s plan
    </button>
  );
};

export default DetailsPlanButton;
