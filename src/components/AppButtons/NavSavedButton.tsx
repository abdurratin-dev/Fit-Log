import React from 'react';

const NavSavedButton = () => {
    return (
        <div className="hover:pointer-cursor">
            <button className="text-white font-bold py-2 sm:px-4 px-1 flex items-center">
                Saved: <span className="text-[#C2F800] ml-1 font-bold rounded">{`0`}</span>
            </button>
        </div>
    );
};

export default NavSavedButton;