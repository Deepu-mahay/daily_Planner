// components/AreaChartComponent.jsx
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", spent: 4, target: 6 },
  { day: "Tue", spent: 5, target: 6 },
  { day: "Wed", spent: 6, target: 6 },
  { day: "Thu", spent: 3, target: 6 },
  { day: "Fri", spent: 7, target: 6 },
];

export default function AreaChartComponent() {
  return (
    <div className="bg-white rounded-xl p-4 shadow mt-4">
      <h2 className="text-lg font-bold mb-2">Hours Worked vs Target</h2>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="spent"
            stroke="#10b981"
            fill="#6ee7b7"
            name="Hours Worked"
          />
          <Area
            type="monotone"
            dataKey="target"
            stroke="#f59e0b"
            fill="#fde68a"
            name="Target Hours"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
