import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


export default function PieChartcom() {
    const data = [
      { name: "Completed", value: 8 },
      { name: "Pending", value: 4 },
    ];
    
    const COLORS = ["#34d399", "#facc15"]; // green, yellow
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="text-lg font-bold mb-2">Task Completion</h2>
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={70}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
