"use client";

import { BiBookmark } from "react-icons/bi";
import { LuCalendarPlus2 } from "react-icons/lu";
import { useFitLog } from "@/context/FitLogContext";
import { toast } from "react-toastify";
import { IDataType } from "@/types/data-type";

interface DetailsAddProps {
    workout: IDataType;
}

const DetailsAdd = ({ workout }: DetailsAddProps) => {
    const { plan, saved, addToPlan, addToSaved } = useFitLog();

    const alreadyInPlan = plan.some((item) => item.id === workout.id);
    const alreadySaved = saved.some((item) => item.id === workout.id);

    const handleAddToPlan = () => {
        if (alreadyInPlan) {
            toast.info("Already added to today's plan!");
            return;
        }

        addToPlan(workout);
        toast.success("Workout added to today's plan!");
    };

    const handleSaveForLater = () => {
        if (alreadySaved) {
            toast.info("Already saved for later!");
            return;
        }

        addToSaved(workout);
        toast.success("Workout saved for later!");
    };

    return (
        <div className="mt-6 flex gap-3">
            <button
                onClick={handleAddToPlan}
                className={`flex items-center gap-2 rounded-md px-5 py-3 text-md font-bold ${alreadyInPlan
                    ? "bg-gray-600 cursor-not-allowed text-gray-300"
                    : "bg-[#C2F800] cursor-pointer text-black hover:bg-[#d4ff3d]"
                    }`}
            >
                <LuCalendarPlus2 />

                {alreadyInPlan
                    ? "Already in today's plan"
                    : "Add to today's plan"}
            </button>

            <button
                onClick={handleSaveForLater}
                className={`flex items-center gap-2 rounded-md px-5 py-3 text-md ${alreadySaved
                    ? "border cursor-not-allowed border-gray-600 text-gray-500"
                    : "border cursor-pointer border-white/20 text-white hover:bg-white/5"
                    }`}
            >
                <BiBookmark />

                {alreadySaved
                    ? "Already saved"
                    : "Save for later"}
            </button>

        </div>
    );
};

export default DetailsAdd;