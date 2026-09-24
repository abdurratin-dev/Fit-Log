import { WorkOutContext } from "@/context/workOutContext";
import { IWorkOutDataType } from "@/types/workOutDataType";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";

const RemoveButton = ({ workOut }: { workOut: IWorkOutDataType }) => {
  const workOutDataSheard = useContext(WorkOutContext);
  const { saved, setSaved } = workOutDataSheard;
  const handleCrossButton = () => {
    const cardRemove = saved.filter(
      (item: IWorkOutDataType) => item.id !== workOut.id,
    );
    setSaved(cardRemove);
  };
  return (
      <button className="pr-2 hover:text-red-500" onClick={handleCrossButton}><RxCross2 /></button>
  );
};

export default RemoveButton;
