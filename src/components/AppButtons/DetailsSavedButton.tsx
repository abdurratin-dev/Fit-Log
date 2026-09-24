"use client";
import { WorkOutContext } from "@/context/workOutContext";
import { IWorkOutDataType } from "@/types/workOutDataType";
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";

interface IDetailsSavedButtonProps {
  workOut: IWorkOutDataType;
}
const DetailsSavedButton = ({ workOut }: IDetailsSavedButtonProps) => {
  const workOutDataSheard = useContext(WorkOutContext);
  const { saved, setSaved } = workOutDataSheard;
  const handleSavedButton = () => {
    if (saved.some((item) => item.id === workOut.id)) {
      toast.error(`${workOut.name} Alrady In Save List`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      setSaved([...saved, workOut]);
      toast.success(`${workOut.name} Added Your Save List`, {
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
      className="flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-transparent px-5 text-sm font-medium text-zinc-300 hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-400/20 active:translate-y-0"
      onClick={handleSavedButton}
    >
      <Bookmark size={15} />
      Save for later
    </button>
  );
};

export default DetailsSavedButton;
