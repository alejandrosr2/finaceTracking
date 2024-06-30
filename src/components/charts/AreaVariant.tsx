"use client";

import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { user } from "@/data/data"; 

interface FinancialData {
  month: string;
  income: number;
  expenses: number;
}

const AreaVariant: React.FC = () => {
  const data: FinancialData[] = user[0].financials.map((item) => ({
    month: item.month,
    income: item.income,
    expenses: item.expenses,
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="income" stroke="#93c5fd" fill="#93c5fd" />
          <Area type="monotone" dataKey="expenses" stroke="#a14347" fill="#a14347" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaVariant;
