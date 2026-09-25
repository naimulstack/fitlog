

import Image from "next/image";
import { IDataType } from "@/types/data-type";
import { BiBookmark } from "react-icons/bi";
import { LuCalendarPlus2 } from "react-icons/lu";


const DetailsPage = async ({ params, }: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const workout: IDataType = await response.json();

    return (
        <main className="h-auto bg-[#0F1115] text-white">

            <section className="container mx-auto px-4 py-10">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                    {/* Left - Image */}
                    <div className="relative h-full overflow-hidden rounded-xl">
                        <Image src={workout.image}alt={workout.name}fill className="object-cover"
                        />
                    </div>


                    {/* Right - Details */}
                    <div>

                        <h1 className="text-3xl font-bold uppercase font-oswald">
                            {workout.name}
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            {workout.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span key={muscle} className="rounded-full bg-[#C2F800] px-4 py-1 text-xs font-semibold uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>


                        {/* Details */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-[#151820]">

                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Equipment
                                </span>
                                <span className="text-sm">
                                    {workout.equipment}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Difficulty
                                </span>
                                <span className="text-sm">
                                    {workout.difficulty}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Sets
                                </span>
                                <span className="text-sm">
                                    {workout.sets}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Reps
                                </span>
                                <span className="text-sm">
                                    {workout.reps}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Duration
                                </span>
                                <span className="text-sm">
                                    {workout.duration} min
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Calories
                                </span>
                                <span className="text-sm">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Rating
                                </span>
                                <span className="text-sm">
                                    {workout.rating}
                                </span>
                            </div>

                        </div>


                        {/* Instructions */}
                        <div className="mt-6">

                            <h2 className="text-sm font-bold uppercase">
                                Instructions
                            </h2>

                            <ol className="mt-3 space-y-3 text-sm text-gray-400">
                                {workout.instructions.map((instruction, index) => (
                                    <li key={instruction}>
                                        <span className="mr-3">
                                            {index + 1}.
                                        </span>

                                        {instruction}
                                    </li>
                                ))}
                            </ol>

                        </div>


                        {/* Buttons */}
                        <div className="mt-6 flex gap-3">

                            <button className="flex rounded-md bg-[#C2F800] px-5 py-3 text-md font-bold text-black transition hover:bg-[#d4ff3d] items-center gap-2 cursor-pointer">
                                <LuCalendarPlus2 />
                                Add to today's plan
                            </button>

                            <button className="flex rounded-md border border-white/20 px-5 py-3 text-md text-white transition hover:bg-white/5 items-center gap-2 cursor-pointer">
                                <BiBookmark />
                                 Save for later
                            </button>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default DetailsPage;