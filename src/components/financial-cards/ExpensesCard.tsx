"use client"; 

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { TrendingDown } from "lucide-react";
import { user } from "@/data/data";
import { useSelectedMonth } from "@/context/selected-month-provider";
import AnimatedNumber from "@/hooks/animated-number";


interface FinancialData {
  month: string;
  year: number;
  expenses: number;
  income: number;
}

const ExpensesCard = () => {
  const { selectedMonth } = useSelectedMonth();
  const financials: FinancialData[] = user[0].financials;
  const [expenseData, setExpenseData] = useState({ latestExpense: 0, previousExpense: 0, variationPercentage: 0 });

  useEffect(() => {
    const monthIndex = financials.findIndex(f => f.month === selectedMonth);
    if (monthIndex !== -1) {
      const latestExpense = financials[monthIndex].expenses;
      const previousExpense = monthIndex > 0 ? financials[monthIndex - 1].expenses : 0;
      const variationPercentage = previousExpense !== 0 ? ((latestExpense - previousExpense) / previousExpense) * 100 : 0;

      setExpenseData({ latestExpense, previousExpense, variationPercentage });
    }
  }, [selectedMonth, financials]);

  const variationClass = expenseData.variationPercentage >= 0 ? "text-red-500" : "text-green-500";

  return (
    <Card className="p-4 border-none shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardHeader className="flex flex-row items-center justify-between gap-x-4">
        <div className="space-y-2">
          <CardTitle className="text-2xl line-clamp-1">
            Gastos
          </CardTitle>
          <CardDescription className="line-clamp-1">
            {selectedMonth}
          </CardDescription>
        </div>
        <div className="text-red-400 bg-red-100/50 p-2 rounded-xl">
          <TrendingDown />
        </div>
      </CardHeader>
      <CardContent>
        <h1 className="font-bold text-2xl mb-2 line-clamp-1 break-all">
          <AnimatedNumber value={expenseData.latestExpense}/>€
        </h1>
        <p className="text-sm">
          Evolución respecto al mes anterior: <span className={variationClass}>{expenseData.variationPercentage.toFixed(2)}%</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default ExpensesCard;
