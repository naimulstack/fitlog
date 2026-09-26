"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaFire, FaStar, FaCheck, } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const TodaysPlanPage = () => {
  const { plan, removeFromPlan } = useFitLog();

  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort") || "rating";

  const sortedPlan = [...plan].sort((a, b) => {
    if (sortBy === "duration") {
      return b.duration - a.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  const [doneId, setDoneId] = useState<number[]>([]);
  const [isDoneLoaded, setIsDoneLoaded] = useState(false);

  useEffect(() => {
    const storedDoneId = localStorage.getItem("fitlog_plan_done");

    if (storedDoneId) {
      setDoneId(JSON.parse(storedDoneId));
    }

    setIsDoneLoaded(true);
  }, []);

  // Save completed workouts
  useEffect(() => {
    if (!isDoneLoaded) return;

    localStorage.setItem(
      "fitlog_plan_done",
      JSON.stringify(doneId)
    );
  }, [doneId, isDoneLoaded]);

  // Mark as Done
  const handleDone = (id: number, name: string) => {
    setDoneId((prev) => {
      if (prev.includes(id)) {
        return prev;
      }

      return [...prev, id];
    });

    toast.success(`${name} marked as done!`);
  };

  // Remove from Today's Plan
  const handleRemove = (id: number, name: string) => {
    removeFromPlan(id);

    // cross remove
    setDoneId((prev) =>
      prev.filter((doneId) => doneId !== id)
    );

    toast.success(`${name} removed from today's plan!`);
  };

  return (
    <div>
      {plan.length === 0 ? (
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
          {sortedPlan.map((data) => {
            const isDone = doneId.includes(data.id);

            return (
              <div key={data.id}
                className="rounded-xl border border-white/10 bg-[#15181F] p-3 sm:p-4"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                  {/* Image */}
                  <div className="shrink-0">
                    <Image src={data.image} alt={data.name} width={120} height={80}
                      className="h-20 w-full rounded-lg object-cover sm:w-[120px]"
                    />
                  </div>

                  {/* Workout Info */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-oswald text-lg font-bold uppercase text-white">
                      {data.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {data.equipment}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-400">

                      {/* Duration */}
                      <p className="flex items-center gap-1">
                        <FaRegClock size={13}
                          className="text-[#CCFF00]"
                        />
                        {data.duration} min
                      </p>

                      {/* Calories */}
                      <p className="flex items-center gap-1">
                        <FaFire size={13}
                          className="text-[#CCFF00]"
                        />
                        {data.caloriesBurned} kcal
                      </p>

                      {/* Rating */}
                      <p className="flex items-center gap-1">
                        <FaStar size={13}
                          className="text-[#CCFF00]"
                        />
                        {data.rating}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 sm:ml-auto">

                    {/* View Details */}
                    <Link href={`/exercise-details/${data.id}`}
                      className="rounded-full border border-white/20 px-4 py-2 text-xs text-white transition hover:bg-white/10"
                    >
                      View Details
                    </Link>

                    {/* Mark as Done */}
                    <button onClick={() =>
                      handleDone(data.id, data.name)
                    }
                      disabled={isDone}
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${isDone
                        ? "cursor-default bg-gray-500 text-white"
                        : "bg-[#CCFF00] text-black hover:bg-[#b8e600]"
                        }`}
                    >
                      <FaCheck size={11} />

                      {isDone ? "Done" : "Mark as Done"}
                    </button>

                    {/* Remove */}
                    <button onClick={() =>
                      handleRemove(data.id, data.name)
                    }
                      className="p-2 text-gray-500 transition hover:text-white"
                      aria-label={`Remove ${data.name}`}
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

export default TodaysPlanPage;