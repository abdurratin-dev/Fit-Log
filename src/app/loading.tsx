import React from 'react';

const GlobalLoadingPage = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <span className="text-lime-400 loading loading-spinner loading-2xl"></span>
        </div>
    );
};

export default GlobalLoadingPage;