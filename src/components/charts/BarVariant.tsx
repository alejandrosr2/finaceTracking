"use client";

import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { user } from "@/data/data"; 

interface FinancialData {
  month: string;
  income: number;
  expenses: number;
}

const BarVariant: React.FC = () => {
  const data: FinancialData[] = user[0].financials.map((item) => ({
    month: item.month,
    income: item.income,
    expenses: item.expenses,
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#93c5fd" />
          <Bar dataKey="expenses" fill="#a14347" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarVariant;
