'use client'
import React, { createContext, useState } from 'react';

interface ISheard{
    stats : boolean
    setStats: React.Dispatch<React.SetStateAction<boolean>>
}
export const TabsAbdStateContext = createContext<ISheard>({stats: true,setStats: ()=>[]});
const TabsAndStateProvider = ({children}:{children: React.ReactNode}) => {
    const [stats, setStats] = useState(false);
    const sheard = {
        stats,setStats
    }
    return (
        <TabsAbdStateContext.Provider value={sheard}>
            {children}
        </TabsAbdStateContext.Provider>
    );
};

export default TabsAndStateProvider;