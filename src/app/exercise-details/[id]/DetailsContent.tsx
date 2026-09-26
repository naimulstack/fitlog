"use client";

import { IDataType } from "@/types/data-type";
import { useFitLog } from "@/context/FitLogContext";
import { toast } from "react-toastify";
import { BiBookmark } from "react-icons/bi";
import { LuCalendarPlus2 } from "react-icons/lu";

interface DetailsContentProps {
    LibraryData: IDataType;
}

const DetailsContent = ({ LibraryData }: DetailsContentProps) => {
    const { plan, saved, addToPlan, addToSaved } = useFitLog();

    const alreadyInPlan = plan.some(
        (item) => item.id === LibraryData.id
    );

    const alreadySaved = saved.some(
        (item) => item.id === LibraryData.id
    );

    const handleAddToPlan = () => {
        if (alreadyInPlan) {
            toast.done("Already added to today's plan!");
            return;
        }

        addToPlan(LibraryData);
        toast.success("Added to today's plan!");
    };

    const handleSaveForLater = () => {
        if (alreadySaved) {
            toast.info("Already saved for later!");
            return;
        }

        addToSaved(LibraryData);
        toast.success("Saved for later!");
    };

    return (
        <div>
            <h1 className="text-3xl font-bold uppercase text-white">
                {LibraryData.name}
            </h1>

            <p className="mt-3 text-sm text-gray-400">
                {LibraryData.description}
            </p>

            <div className="mt-6 flex gap-3">
                {/* Add to Plan */}
                <button onClick={handleAddToPlan}
                    className={`flex items-center gap-2 rounded-md px-5 py-3 text-md font-bold ${
                        alreadyInPlan
                            ? "cursor-not-allowed bg-gray-600 text-gray-300"
                            : "cursor-pointer bg-[#C2F800] text-black hover:bg-[#d4ff3d]"
                    }`}
                >
                    <LuCalendarPlus2 />
                    {alreadyInPlan ? "Already in today's plan" : "Add to today's plan"}
                </button>

                {/* Save */}
                <button onClick={handleSaveForLater}
                    className={`flex items-center gap-2 rounded-md px-5 py-3 text-md ${
                        alreadySaved
                            ? "cursor-not-allowed border border-gray-600 text-gray-500"
                            : "cursor-pointer border border-gray-600 text-white hover:bg-gray-800"
                    }`}
                >
                    <BiBookmark />
                    {alreadySaved ? "Already saved" : "Save for later"}
                </button>
            </div>
        </div>
    );
};

export default DetailsContent;