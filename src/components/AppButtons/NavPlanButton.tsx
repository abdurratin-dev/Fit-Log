import React from 'react';

const NavPlanButton = () => {
    return (
        <div className="hover:pointer-cursor">
            <button className="text-white font-bold py-2 sm:px-4 px-2 rounded flex items-center">
                Plan <span className="bg-[#C2F800] text-black font-bold ml-1 px-2 rounded-full h-fit">{`0`}</span>
            </button>
        </div>
    );
};

export default NavPlanButton;