"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from "recharts";
import { expenses } from "@/data/data";
import { useSelectedMonth } from "@/context/selected-month-provider";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieVariant: React.FC = () => {
  const { selectedMonth } = useSelectedMonth();
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const expenseData = expenses.find(expense => expense.month === selectedMonth);
    if (expenseData) {
      const formattedData = Object.keys(expenseData)
        .filter(key => key !== "month")
        .map(key => ({ name: key, value: expenseData[key] }));
      setData(formattedData);
    }
  }, [selectedMonth]);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="40%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="left" verticalAlign="middle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieVariant;
