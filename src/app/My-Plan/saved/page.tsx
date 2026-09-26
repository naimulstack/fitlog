"use client";

import { useFitLog } from "@/context/FitLogContext";
import { IDataType } from "@/types/data-type";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaFire, FaStar, } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

export default function SavedPage() {
  const { saved, removeFromSaved } = useFitLog();

  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort") || "rating";
  const sortedSaved = [...saved].sort((a, b) => {
    if (sortBy === "duration") {
      return b.duration - a.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  const handleRemove = (id: number, name: string) => {
    removeFromSaved(id);
    toast.success(`${name} removed!`);
  };

  return (
    <div>
      {saved.length === 0 ? (
        <div className="py-10 text-center">
          <h2 className="font-oswald text-2xl font-bold">
            NOTHING HERE YET
          </h2>

          <p className="mt-2 text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>

          <Link href="/"
            className="mt-5 inline-block rounded-md bg-[#CCFF00] px-5 py-2 font-semibold text-black"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedSaved.map((workout: IDataType) => {
            return (
              <div key={workout.id}
                className="rounded-xl border border-white/10 bg-[#15181F] p-3 sm:p-4"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                  {/* Image */}
                  <div className="shrink-0">
                    <Image src={workout.image} alt={workout.name} width={120} height={80}
                      className="h-20 w-full rounded-lg object-cover sm:w-[120px]"
                    />
                  </div>

                  {/* Workout Info */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-oswald text-lg font-bold uppercase text-white">
                      {workout.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {workout.equipment}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-400">

                      {/* Duration */}
                      <p className="flex items-center gap-1">
                        <FaRegClock size={13}
                          className="text-[#CCFF00]"
                        />
                        {workout.duration} min
                      </p>

                      {/* Calories */}
                      <p className="flex items-center gap-1">
                        <FaFire size={13}
                          className="text-[#CCFF00]"
                        />
                        {workout.caloriesBurned} kcal
                      </p>

                      {/* Rating */}
                      <p className="flex items-center gap-1">
                        <FaStar size={13}
                          className="text-[#CCFF00]"
                        />
                        {workout.rating}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 sm:ml-auto">

                    {/* View Details */}
                    <Link href={`/exercise-details/${workout.id}`}
                      className="rounded-full border border-white/20 px-4 py-2 text-xs text-white transition hover:bg-white/10"
                    >
                      View Details
                    </Link>

                    {/* Remove */}
                    <button onClick={() =>
                      handleRemove(workout.id, workout.name)
                    }
                      className="p-2 text-gray-500 transition hover:text-white"
                      aria-label={`Remove ${workout.name}`}
                    >
                      <RxCross2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}