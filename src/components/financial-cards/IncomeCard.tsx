"use client"; 

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { TrendingUp } from "lucide-react";
import { user } from "@/data/data";
import { useSelectedMonth } from "@/context/selected-month-provider";
import AnimatedNumber from "@/hooks/animated-number";


interface FinancialData {
  month: string;
  year: number;
  expenses: number;
  income: number;
}

const IncomeCard = () => {
  const { selectedMonth } = useSelectedMonth();
  const financials: FinancialData[] = user[0].financials;
  const [incomeData, setIncomeData] = useState({ latestIncome: 0, previousIncome: 0, variationPercentage: 0 });

  useEffect(() => {
    const monthIndex = financials.findIndex(f => f.month === selectedMonth);
    if (monthIndex !== -1) {
      const latestIncome = financials[monthIndex].income;
      const previousIncome = monthIndex > 0 ? financials[monthIndex - 1].income : 0;
      const variationPercentage = previousIncome !== 0 ? ((latestIncome - previousIncome) / previousIncome) * 100 : 0;

      setIncomeData({ latestIncome, previousIncome, variationPercentage });
    }
  }, [selectedMonth, financials]);

  const variationClass = incomeData.variationPercentage >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <Card className="p-4 border-none shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardHeader className="flex flex-row items-center justify-between gap-x-4">
        <div className="space-y-2">
          <CardTitle className="text-2xl line-clamp-1">
            Ingresos
          </CardTitle>
          <CardDescription className="line-clamp-1">
            {selectedMonth}
          </CardDescription>
        </div>
        <div className="text-green-400 bg-green-200/40 p-2 rounded-xl">
          <TrendingUp />
        </div>
      </CardHeader>
      <CardContent>
        <h1 className="font-bold text-2xl mb-2 line-clamp-1 break-all">
            <AnimatedNumber value={incomeData.latestIncome}/>€
        </h1>
        <p className="text-sm">
          Evolución respecto al mes anterior: <span className={variationClass}>{incomeData.variationPercentage.toFixed(2)}%</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default IncomeCard;
