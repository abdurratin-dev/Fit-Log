import { WorkOutContext } from '@/context/workOutContext';
import React, { useContext } from 'react';

const NavSavedButton = () => {
    const workOutDataSheard = useContext(WorkOutContext);
    const {saved} = workOutDataSheard;
    return (
            <button className="text-white font-bold py-2 sm:px-4 px-1 flex items-center">
                Saved: <span className="text-[#C2F800] ml-1 font-bold rounded">{saved.length}</span>
            </button>
       
    );
};

export default NavSavedButton;