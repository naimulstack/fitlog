import DetailsAdd from "@/components/DetailsAdd/page";
import Image from "next/image";
import { IDataType } from "@/types/data-type";

const DetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    // Fetch single exercise by ID
    const response = await fetch(
        `https://api.api-store.workers.dev/api/fitlog/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error(
            `Failed to fetch exercise. Status: ${response.status}`
        );
    }

    const data: IDataType = await response.json();

    return (
        <main className="h-auto bg-[#0F1115] text-white">

            <section className="container mx-auto px-4 py-10">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                    {/* Left - Image */}
                    <div className="relative h-full overflow-hidden rounded-xl">
                        <Image
                            src={data.image}
                            alt={data.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right - Details */}
                    <div>

                        {/* Name */}
                        <h1 className="font-oswald text-3xl font-bold uppercase">
                            {data.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            {data.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {data.muscleGroups?.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#C2F800] px-4 py-1 text-xs font-semibold uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Details */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-[#151820]">

                            {/* Equipment */}
                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Equipment
                                </span>

                                <span className="text-sm">
                                    {data.equipment}
                                </span>
                            </div>

                            {/* Difficulty */}
                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Difficulty
                                </span>

                                <span className="text-sm">
                                    {data.difficulty}
                                </span>
                            </div>

                            {/* Sets */}
                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Sets
                                </span>

                                <span className="text-sm">
                                    {data.sets}
                                </span>
                            </div>

                            {/* Reps */}
                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Reps
                                </span>

                                <span className="text-sm">
                                    {data.reps}
                                </span>
                            </div>

                            {/* Duration */}
                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Duration
                                </span>

                                <span className="text-sm">
                                    {data.duration} min
                                </span>
                            </div>

                            {/* Calories */}
                            <div className="flex justify-between border-b border-white/10 px-4 py-3">
                                <span className="text-[10px] uppercase text-gray-400">
                                    Calories
                                </span>

                                <span className="text-sm">
                                    {data.caloriesBurned} kcal
                                </span>
                            </div>

                            {/* Rating */}
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
                                {data.instructions?.map(
                                    (instruction, index) => (
                                        <li key={index}>
                                            <span className="mr-3">
                                                {index + 1}.
                                            </span>

                                            {instruction}
                                        </li>
                                    )
                                )}
                            </ol>

                        </div>

                        {/* Buttons */}
                        <DetailsAdd workout={data} />

                    </div>

                </div>

            </section>

        </main>
    );
};

export default DetailsPage;