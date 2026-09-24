import { getWorkOutData } from '@/lib/workOutDataFetch';
import { IWorkOutDataType } from '@/types/workOutDataType';
import WorkOutCard from '@/components/cards/WorkOutCard';

const WorkoutLibrary = async () => {
    const workOuts = await getWorkOutData() as IWorkOutDataType[];
    return (
        <div className="container mx-auto shadow-md flex flex-col items-center justify-center px-4 py-2">
            <div className="w-full">
                <h3 className="text-xl font-bold mb-2 uppercase text-white">The Library</h3>
                <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {
                    workOuts.map((item: IWorkOutDataType, index: number) => (<WorkOutCard key={index} workout={item} />))
                }
            </div>
        </div>
    );
};

export default WorkoutLibrary;