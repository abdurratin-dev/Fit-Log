import { IWorkOutDataType } from "@/types/workOutDataType";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MarkAsDoneButton = ({ workOut }: { workOut: IWorkOutDataType }) => {
  const [completed, setCompleted] = useState<IWorkOutDataType[]>([]);
  const onComplete = () => {
    if (completed.some((item) => item.id === workOut.id)) {
      toast.error(`${workOut.name} You Have Already Completed`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      setCompleted([workOut]);
       toast.success(`You Complete ${workOut.name} `, {
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
      onClick={onComplete}
      className={` flex-1 rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:flex-none ${completed.some((item) => item.id === workOut.id) ? "bg-lime-400/20 text-lime-400" : "bg-lime-400 text-black hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]"}`}>
      {completed.some((item) => item.id === workOut.id)
        ? "Completed ✓"
        : "Mark as Done"}
    </button>
  );
};

export default MarkAsDoneButton;
