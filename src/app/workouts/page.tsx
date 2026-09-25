import WorkoutLibrary from '@/components/home/WorkoutLibrary';
import React from 'react';

const page = () => {
    return (
        <>
            <div className="w-full flex flex-col items-center justify-center mt-5">
                <h3 className="text-xl font-bold mb-2 uppercase text-white">The Library</h3>
                <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
            </div>
            <WorkoutLibrary />
        </>
    );
};

export default page;