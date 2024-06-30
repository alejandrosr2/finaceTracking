"use client"

import { createContext, useContext, useState, ReactNode } from "react";

interface SelectedMonthContextProps {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
}

const SelectedMonthContext = createContext<SelectedMonthContextProps | undefined>(undefined);

export const SelectedMonthProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMonth, setSelectedMonth] = useState<string>("June");

  return (
    <SelectedMonthContext.Provider value={{ selectedMonth, setSelectedMonth }}>
      {children}
    </SelectedMonthContext.Provider>
  );
};

export const useSelectedMonth = (): SelectedMonthContextProps => {
  const context = useContext(SelectedMonthContext);
  if (!context) {
    throw new Error("useSelectedMonth must be used within a SelectedMonthProvider");
  }
  return context;
};

