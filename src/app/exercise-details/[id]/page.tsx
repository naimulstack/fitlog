
import DetailsAdd from "@/components/DetailsAdd/page";
import Image from "next/image";
import { IDataType } from "@/types/data-type";

const DetailsPage = async ({ params, }: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const data: IDataType = await response.json();

    return (
        <main className="h-auto bg-[#0F1115] text-white">

            <section className="container mx-auto px-4 py-10">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                    {/* Left - Image */}
                    <div className="relative h-full overflow-hidden rounded-xl">
                        <Image src={data.image} alt={data.name} fill className="object-cover"
                        />
                    </div>


                    {/* Right - Details */}
                    <div>

                        <h1 className="text-3xl font-bold uppercase font-oswald">
                            {data.name}
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            {data.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {data.muscleGroups.map((muscle) => (
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
                                    {data.equipment}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Difficulty
                                </span>
                                <span className="text-sm">
                                    {data.difficulty}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Sets
                                </span>
                                <span className="text-sm">
                                    {data.sets}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Reps
                                </span>
                                <span className="text-sm">
                                    {data.reps}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Duration
                                </span>
                                <span className="text-sm">
                                    {data.duration} min
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Calories
                                </span>
                                <span className="text-sm">
                                    {data.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Rating
                                </span>
                                <span className="text-sm">
                                    {data.rating}
                                </span>
                            </div>

                        </div>


                        {/* Instructions */}
                        <div className="mt-6">

                            <h2 className="text-sm font-bold uppercase">
                                Instructions
                            </h2>

                            <ol className="mt-3 space-y-3 text-sm text-gray-400">
                                {data.instructions.map((instruction, list) => (
                                    <li key={instruction}>
                                        <span className="mr-3">
                                            {list + 1}.
                                        </span>
                                        {instruction}
                                    </li>
                                ))}
                            </ol>

                        </div>

                        {/* Buttons */}
                        <DetailsAdd workout={data} />
                    </div>

                </div>

                {/* <div>
                    <h2>Jihan</h2>
                </div> */}

            </section>

        </main>
    );
};

export default DetailsPage;