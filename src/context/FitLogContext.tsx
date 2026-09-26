"use client";

import { createContext, useContext, useEffect, useState, ReactNode, } from "react";

import { IDataType } from "@/types/data-type";

interface FitLogContextType {
  plan: IDataType[];
  saved: IDataType[];
  planCount: number;
  savedCount: number;
  addToPlan: (workout: IDataType) => void;
  addToSaved: (workout: IDataType) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export function FitLogProvider({ children, }: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<IDataType[]>([]);
  const [saved, setSaved] = useState<IDataType[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog_plan");
    const storedSaved = localStorage.getItem("fitlog_saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "fitlog_plan", JSON.stringify(plan)
    );
  }, [plan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "fitlog_saved",
      JSON.stringify(saved)
    );
  }, [saved, isLoaded]);

  const addToPlan = (workout: IDataType) => {
    setPlan((prev) => {
      const alreadyExists = prev.some(
        (item) => item.id === workout.id
      );

      if (alreadyExists) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Save for later
  const addToSaved = (workout: IDataType) => {
    setSaved((prev) => {
      const alreadyExists = prev.some(
        (item) => item.id === workout.id
      );

      if (alreadyExists) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Remove from plan
  const removeFromPlan = (id: number) => {
    setPlan((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Remove from saved
  const removeFromSaved = (id: number) => {
    setSaved((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        plan, 
        saved,

        planCount: plan.length,
        savedCount: saved.length,

        addToPlan,
        addToSaved,

        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}