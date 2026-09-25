"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FitLogContextType {
  planCount: number;
  savedCount: number;
  addToPlan: () => void;
  addToSaved: () => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export function FitLogProvider({ children }: { children: ReactNode }) {
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  const addToPlan = () => {
    setPlanCount((prev) => prev + 1);
  };

  const addToSaved = () => {
    setSavedCount((prev) => prev + 1);
  };

  return (
    <FitLogContext.Provider
      value={{
        planCount,
        savedCount,
        addToPlan,
        addToSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
}