import Image from "next/image";
import Link from "next/link";
import { IDataType } from "@/types/data-type";
import { FaRegClock, FaFire, FaStar } from "react-icons/fa";

const LibraryData = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

    const data: IDataType[] = await response.json();

    return (
        <div id="workout-library" className="container mx-auto mt-10">

            <div className="mb-8">
                <h2 className="font-oswald text-3xl font-bold text-white">
                    THE LIBRARY
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                {data.map((card) => {
                    return (
                        <Link key={card.id} href={`/exercise-details/${card.id}`}
                            className="block"
                        >
                            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#20242E] transition-transform duration-300 hover:scale-101 hover:border-amber-300">

                                {/* Image */}
                                <div className="relative h-[300px] w-full">
                                    <Image src={card.image} alt={card.name} fill className="object-cover"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="p-8">

                                    {/* Muscle Groups */}
                                    <div className="mb-5 flex flex-wrap gap-2">
                                        {card.muscleGroups.map((muscle) => (
                                            <span key={muscle}
                                                className="rounded-full bg-[#C2F800] px-3 py-1 font-oswald text-[11px] font-semibold uppercase text-black"
                                            >
                                                {muscle}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Name */}
                                    <h3 className="font-oswald text-lg font-bold uppercase tracking-wide text-white">
                                        {card.name}
                                    </h3>

                                    {/* Equipment */}
                                    <p className="mt-2 text-sm text-gray-400">
                                        {card.equipment}
                                    </p>

                                    {/* Line */}
                                    <div className="my-5 border-t border-white/10" />

                                    {/* Duration, Calories, Rating */}
                                    <div className="flex items-center gap-5 text-sm text-gray-400">

                                        <p className="flex items-center gap-2">
                                            <FaRegClock size={14} />
                                            {card.duration} min
                                        </p>

                                        <p className="flex items-center gap-2">
                                            <FaFire size={14} />
                                            {card.caloriesBurned} kcal
                                        </p>

                                        <p className="flex items-center gap-2">
                                            <FaStar size={14} />
                                            {card.rating}
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </Link>
                    );
                })}

            </div>
        </div>
    );
};

export default LibraryData;
