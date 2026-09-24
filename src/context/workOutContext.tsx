'use client'
import { IWorkOutDataType } from '@/types/workOutDataType';
import React, { createContext, useState } from 'react';

interface ISheard{
    plan: IWorkOutDataType[];
    setPlan: React.Dispatch<React.SetStateAction<IWorkOutDataType[]>>;
    saved: IWorkOutDataType[];
    setSaved: React.Dispatch<React.SetStateAction<IWorkOutDataType[]>>;
}
export const WorkOutContext = createContext<ISheard>({
    plan: [],
    setPlan: () => [],
    saved: [],
    setSaved: () => []
});
const WorkOutProvaider = ({children}:{children:React.ReactNode}) => {
    const [plan,setPlan] = useState<IWorkOutDataType[]>([]);
    const [saved,setSaved] = useState<IWorkOutDataType[]>([]);
    const sheard = {
        plan,
        setPlan,
        saved,
        setSaved
    }
    return (
        <WorkOutContext.Provider value={sheard}>
        {children}
        </WorkOutContext.Provider>
    );
};

export default WorkOutProvaider;