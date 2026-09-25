import { WorkOutContext } from "@/context/workOutContext";
import { IWorkOutDataType } from "@/types/workOutDataType";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const RemoveButtonForPlan = ({ workOut }: { workOut: IWorkOutDataType }) => {
  const workOutDataSheard = useContext(WorkOutContext);
  const { plan, setPlan } = workOutDataSheard;
  const handleCrossButton = () => {
    const cardRemove = plan.filter(
      (item: IWorkOutDataType) => item.id !== workOut.id,
    );
    setPlan(cardRemove);
    toast.success(`${workOut.name} Plan Removed`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
  };
  return (
      <button className="pr-2 hover:text-red-500" onClick={handleCrossButton}><RxCross2 /></button>
  );
};

export default RemoveButtonForPlan;
