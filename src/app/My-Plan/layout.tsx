"use client";

import { useFitLog } from "@/context/FitLogContext";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, Suspense } from "react";
import { ToastContainer } from "react-toastify";

function MyPlanContent({ children }: { children: ReactNode }) {
  const { plan, saved } = useFitLog();

  // Today's Plan
  const planMin = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const planCal = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  // Saved
  const savedMin = saved.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const savedCal = saved.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isSaved = pathname === "/My-Plan/saved";
  const sortBy = searchParams.get("sort") || "rating";

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-[#0F1115] px-4 py-10 text-white">
      <div className="container mx-auto">

        <div>
          <h1 className="font-oswald text-4xl font-bold uppercase">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-[#20242E] sm:grid-cols-3">

          <div className="p-6">
            <div className="h-full border-r border-gray-500">
              <p className="text-xs text-gray-400">
                Exercises
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#CCFF00]">
                {isSaved ? saved.length : plan.length}
              </h2>
            </div>
          </div>

          <div className="p-6">
            <div className="h-full border-r border-gray-500">
              <p className="text-xs text-gray-400">
                Minutes
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {isSaved ? savedMin : planMin}
              </h2>
            </div>
          </div>

          <div className="p-6">
            <p className="text-xs text-gray-400">
              Calories
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {isSaved ? savedCal : planCal}
            </h2>
          </div>

        </div>

        {/* Tabs + Sort */}
        <div className="mt-8 flex items-end justify-between gap-4">

          <div className="flex gap-3 rounded-xl bg-gray-800 p-1">

            <Link href="/My-Plan"
              className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition ${!isSaved
                  ? "border border-white/10 bg-[#20242E] text-white"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              Today's Plan
            </Link>

            <Link href="/My-Plan/saved"
              className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition ${isSaved
                  ? "border border-white/10 bg-[#20242E] text-white"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              Saved
            </Link>

          </div>

          <div className="flex items-center gap-4">

            <label className="text-xs text-gray-400">
              Sort By
            </label>

            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-52 rounded-lg border border-white/30 bg-[#15181F] px-4 py-2 text-sm text-white outline-none"
            >
              <option value="rating">Rating</option>
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
            </select>

          </div>
        </div>

        <div className="mt-6">
          {children}

          <ToastContainer position="top-right" />
        </div>

      </div>
    </main>
  );
}

export default function MyPlanLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Suspense fallback={
        <div className="min-h-screen bg-[#0F1115]" />
      }
    >
      <MyPlanContent>
        {children}
      </MyPlanContent>
    </Suspense>
  );
}